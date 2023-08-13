const leoName = 'Leo';
const leoSurname = 'Musvaire     ';
const leoBalance = '-9394';

const sarahName = 'Sarah';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.2';

const divider = '----------------------------------';

// Only change below this line

const owed = (parseFloat(leoBalance) * -1) + (parseFloat(sarahBalance) * -1);
const Leo = leoName + ' ' + leoSurname + ' (Owed: R ' + (-parseFloat(leoBalance)).toFixed(2) + ')';
const Sarah = sarahName + ' ' + sarahSurname + ' (Owed: R ' + (-parseFloat(sarahBalance)).toFixed(2) + ')';
const Total = 'Total amount owed: R ' + owed.toFixed(2);

const result = '\n' + Leo + '\n' + Sarah + '\n\n' + divider + '\n\n  ' + total + '\n' + divider;

console.log(result);
