import fs from 'fs';
import path from 'path';
import { format } from 'date-fns';

const reader = path.join(__dirname, '..', '..', 'docs', 'animais.json');
const animals = JSON.parse(fs.readFileSync(reader));
const currentYear = Number(format(new Date(), 'yyyy'));
const currentMonth = Number(format(new Date(), 'MM'));

/*
 * Função que testa a leitura do arquivo de entrada
 */
const inputFileValidation = inputfile => {
  if (fs.existsSync(inputfile)) {
    return true;
  }

  return false;
};

/*
 * Crie um algoritmo que retorne quantos animais são da espécie “Gato”, quantos
são da espécie “Cachorro” e quantos são da espécie “Ave”
 */
const first = () => {
  let catCounter;
  let dogCounter;
  let birdCounter;

  catCounter = dogCounter = birdCounter = 0;

  for (var key in animals) {
    var obj = animals[key];

    for (var animal in obj) {
      const type = obj[animal].especie;

      switch (type) {
        case 'Gato':
          catCounter += 1;
          break;
        case 'Cachorro':
          dogCounter += 1;
          break;
        case 'Ave':
          birdCounter += 1;
          break;
      }
    }
  }

  return {
    cats: catCounter,
    dogs: dogCounter,
    birds: birdCounter,
  };
};

/*
 * Crie um algoritmo que retorne uma lista contendo apenas o nome e a idade (em
anos) de cada animal.
 */
const second = () => {
  const list = [];

  for (var key in animals) {
    var obj = animals[key];

    for (var animal in obj) {
      const name = obj[animal].nome;
      const birthday = obj[animal].dataNascimento;

      let age = currentYear - birthday.substr(0, 4);
      const month = currentMonth - birthday.substr(5, 2);

      // If month is negative, It means that the animal completed one more year
      if (month < 0) {
        age += 1;
      }

      list.push({
        Nome: name,
        idade: `${age} ano(s)`,
      });
    }
  }

  return list;
};

/*
 * Crie um algoritmo que retorne uma lista contendo todos animais onde a cor é
“Preto” OU “Cinza” E idade maior que 2 anos
 */
const third = () => {
  const list = [];

  for (var key in animals) {
    var obj = animals[key];

    for (var animal in obj) {
      const _id = obj[animal]._id;
      const name = obj[animal].nome;
      const birthday = obj[animal].dataNascimento;
      const species = obj[animal].especie;
      const color = obj[animal].cor;

      let age = currentYear - birthday.substr(0, 4);
      const month = currentMonth - birthday.substr(5, 2);

      // If month is negative, It means that the animal completed one more year
      if (month < 0) {
        age += 1;
      }

      switch (color) {
        case 'Preto':
        case 'Cinza':
          if (age > 2) {
            const jsonAnimal = {
              _id,
              name,
              birthday,
              species,
              color,
            };

            list.push(jsonAnimal);
          }

          break;
      }
    }
  }

  return list;
};

/*
 * Crie um algoritmo que retorne a soma da idade de todos os animais da lista.
 */
const fourth = () => {
  var total = 0;

  for (var key in animals) {
    const obj = animals[key];

    for (var animal in obj) {
      const birthday = obj[animal].dataNascimento;

      let age = currentYear - birthday.substr(0, 4);
      const month = currentMonth - birthday.substr(5, 2);

      // If month is negative, It means that the animal completed one more year
      if (month < 0) {
        age += 1;
      }

      total += age;
    }
  }

  return total;
};

/*
 * Crie um algoritmo que retorne o animal mais idoso da lista
 */
const fifth = () => {
  var lastAnimal = null;
  var lastAge = 0;

  for (var key in animals) {
    var object = animals[key];

    for (var animal in object) {
      const _id = object[animal]._id;
      const name = object[animal].nome;
      const species = object[animal].especie;
      const color = object[animal].cor;
      const birthday = object[animal].dataNascimento;
      let age = currentYear - birthday.substr(0, 4);
      const month = currentMonth - birthday.substr(5, 2);

      // If month is negative, It means that the animal completed one more year
      if (month < 0) {
        age += 1;
      }

      if (age > lastAge) {
        lastAnimal = [
          {
            _id,
            name,
            birthday,
            species,
            color,
          },
        ];

        lastAge = age;
      }
    }
  }

  return lastAnimal;
};

export { inputFileValidation, first, second, third, fourth, fifth };
