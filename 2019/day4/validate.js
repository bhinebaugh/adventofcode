
class Validate {
    constructor(min, max) {
        this.minValue = 245182;
        this.maxValue = 790572;
    }

    getLength(pw) {
        return (pw.length === 6) ? true : false
    }
    range(pw) {
        const numeric = Number.parseInt(pw);
        return (numeric >= this.minValue && numeric <= this.maxValue) ? true : false;
    }
    adjacent(pw) {
        var adjacents = false,
            previousDigit = "";
        pw.split("").forEach(n => {
            if (n === previousDigit) {
                adjacents = true;
            }
            previousDigit = n;
        })
        return adjacents;
    }
    limitedAdjacent(pw) {
        var adjacents = false,
            doubleAdjacent = false,
            count = 0,
            previousDigit = "";
        pw.split("").forEach(n => {
            if (n === previousDigit) {
                count++;
            } else {
                if (count == 1) return true;
                count = 0;
            }
            previousDigit = n;
        })
        if (count == 1) return true;
        return false;
    }

    increasing(pw) {
        var increasing = true,
            previousDigit = 0;
        pw.split("").forEach(n => {
            if (Number.parseInt(n) < previousDigit ) {
                increasing = false;
            }
            previousDigit = Number.parseInt(n);
        })
        return increasing;
    }
    all(pw) {
        return this.getLength(pw)
            && this.range(pw)
            && this.adjacent(pw)
            && this.increasing(pw);
    }
    newAll(pw) {
        return this.getLength(pw)
            && this.range(pw)
            && this.limitedAdjacent(pw)
            && this.increasing(pw);
    }
}

// export default Validate;

module.exports = {
    Validate
}