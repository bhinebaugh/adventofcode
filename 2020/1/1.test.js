const test = require('tape');
const m1 = require('./1');

const expenses = [
	1721,
	979,
	366,
	299,
	675,
	1456
];
const expected = 514579;

test('multiply 2 entries that sum to 2020', t => {
	const multiplied = m1.checkExpenses2(expenses);
	t.equal(multiplied, expected);
	t.end();
})

test('multiply 3 entries that sum to 2020', t => {
	const multiplied = m1.checkExpenses3(expenses);
	t.equal(multiplied, 241861950);
	t.end();
})