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

test('multiply entries that sum to 2020', t => {
	const multiplied = m1.checkExpenses(expenses)
	t.equal(multiplied, expected)
	t.end()
})
