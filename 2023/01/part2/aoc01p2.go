package main

import (
	"fmt"
	"os"
	"regexp"

	// "/x/exp/slices" // Go < v.1.21
	"strconv"
	"strings"
)

func main() {
	file, err := os.ReadFile("input.txt") // also in io/fs or io/ioutil
	if err != nil {
		fmt.Println("Reading file failed")
	}
	lines := strings.Split(string(file), "\n")
	var acc []int

	for i := 0; i < len(lines); i++ {
		findFirstAndLastNumber(lines[i])
		// firstNumber := findFirstNumber(lines[i])
		// lastNumber := findLastNumber(lines[i])
		// var fullNumberStr string
		// fullNumberStr = firstNumber + lastNumber
		// finalNumber, err := strconv.Atoi(fullNumberStr) // or maybe ParseInts(x,10,0)
		// if err != nil {
		// 	fmt.Println("Could not convert string to number")
		// } else {
		// 	acc = append(acc, finalNumber)
		// }
		// fmt.Println(lines[i], "--->", firstNumber) //, "and", lastNumber, "===>", fullNumberStr, "=", finalNumber)
	}
	fmt.Println(strings.Repeat("-", 80))
	total := 0
	for _, n := range acc {
		total += n
	}
	fmt.Println(total)
}

func findFirstAndLastNumber(line string) int {
	singleDigitRegex, err := regexp.Compile("one|two|three|four|five|six|seven|eight|nine|[0-9]")
	if err != nil {
		fmt.Println("regex failed")
		return 0
	}

	// note: won't capture overlapping strings
	// which e.g. captures "two" in "bmcgjkkkhfive5twonekc"
	// instead of "one"
	digitStrings := singleDigitRegex.FindAllString(line, -1)

	if len(digitStrings) == 0 {
		fmt.Println("no number found")
		return 0
	}
	firstStr := digitStrings[0]
	lastStr := digitStrings[len(digitStrings)-1]
	first := convertToInt(firstStr)
	last := convertToInt(lastStr)
	// fmt.Println(digitStrings, "==>", firstStr+lastStr, "=", first, last, "=", first*10+last)
	fmt.Println(line, "==>", first*10+last)
	// capture first and last in list
	return 0
}

func convertToInt(digitString string) int {
	if len(digitString) == 1 {
		digitInt, err := strconv.Atoi(digitString)
		if err != nil {
			return 0
			// fmt.Println("couldn't convert to int")
		} else {
			return digitInt
		}
	}
	// if len(digitString) == 0 {}
	nums := []string{"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"}
	// return 1 + nums.Index(digitString)
	for i, n := range nums {
		if n == digitString {
			return i
		}
	}
	return 0
}

func findLastNumber(line string) string {
	for i := len(line) - 1; i >= 0; i-- {
		char := string(line[i])
		isNumber, err := regexp.MatchString("[0-9]", char)
		if err == nil && isNumber {
			return char
		}
	}
	return "a"
}
