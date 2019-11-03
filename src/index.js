import path from 'path';
import {
  inputFileValidation,
  first,
  second,
  third,
  fourth,
  fifth,
} from './functions/algorithms';

const inputfile = path.join(__dirname, '..', 'docs', 'animais.json');

const separator = `**************************************************`;
const separatorMin = `*******************************`;

const t1 = inputFileValidation(inputfile);

const r1 = first();
const r2 = second();
const r3 = third();
const r4 = fourth();
const r5 = fifth();

console.log(`\n${separator}\n`);

console.log(`    X) Test input file:`);
console.log(`      --> Found? ${t1};\n`);

console.log(`    ${separatorMin}\n`);

console.log(`    1) First exercise:`);

console.log(`      --> Quantity of Cats: ${r1.cats};`);

console.log(`      --> Quantity of Dogs: ${r1.dogs};`);

console.log(`      --> Quantity of Birds: ${r1.birds};\n`);

console.log(`    ${separatorMin}\n`);

console.log(`    2) Second exercise:`);

console.log(`      --> List of all registry showing only Name plus Age:\n`);

r2.forEach(animal => {
  console.log(animal);
});

console.log(`\n    ${separatorMin}\n`);

console.log(`    3) Third exercise:`);

console.log(
  `      --> List of all animals containing color Black or Gray plus Age greater than two:\n`
);

r3.forEach(animal => {
  console.log(animal);
});

console.log(`\n    ${separatorMin}\n`);

console.log(`    4) Fourth exercise:`);

console.log(`      --> Summation of all animals age: ${r4}\n`);

console.log(`    ${separatorMin}\n`);

console.log(`\n    5) Fifth exercise:`);

console.log(`      --> The oldest animal found:\n`);

r5.forEach(animal => {
  console.log(animal);
});

console.log(`\n${separator}`);
