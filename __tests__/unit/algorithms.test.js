import path from 'path';
import {
  inputFileValidation,
  first,
  second,
  third,
  fourth,
  fifth,
} from '../../src/functions/algorithms';

const reader = path.join(__dirname, '..', '..', 'docs', 'animais.json');

describe('Tests about input file checks', () => {
  it('should not be able to get input file by wrong file path/name', () => {
    const readerAuxe = path.join(
      __dirname,
      '..',
      '..',
      'docs',
      'wrong-name.json'
    );

    expect(inputFileValidation(readerAuxe)).toBeFalsy();
  });

  it('should be able to get input file', () => {
    expect(inputFileValidation(reader)).toBeTruthy();
  });
});

describe('Tests about the First algorithm requested', () => {
  it('should run first algorithm', () => {
    const r1 = first();

    const size = Object.keys(r1).length;

    expect(size).toBeGreaterThan(0);
  });

  it('should be able to get the exact quantity of animals of specie cat', () => {
    const cats = first().cats;

    expect(cats).toBe(5);
  });

  it('should be able to get the exact quantity of animals of specie dog', () => {
    const cats = first().cats;

    expect(cats).toBe(5);
  });

  it('should be able to get the exact quantity of animals of specie bird', () => {
    const birds = first().birds;

    expect(birds).toBe(4);
  });
});

describe('Tests about the Second algorithm requested', () => {
  it('should run second algorithm', () => {
    const r2 = second();

    const size = Object.keys(r2).length;

    expect(size).toBeGreaterThan(0);
  });

  it('shoud get static information about the first animal found', () => {
    const list = second();

    expect(list[0]).toMatchObject({
      Nome: 'Bethoven',
      idade: '2 ano(s)',
    });
  });

  it('shoud get static information about the last animal found', () => {
    const list = second();

    const size = Object.keys(list).length;

    expect(list[size - 1]).toMatchObject({
      Nome: 'Felix',
      idade: '3 ano(s)',
    });
  });
});

describe('Tests about the Third algorithm requested', () => {
  it('should run third algorithm', () => {
    const r3 = third();

    const size = Object.keys(r3).length;

    expect(size).toBeGreaterThan(0);
  });

  it('should get exact length of result list', () => {
    const list = third();

    const size = Object.keys(list).length;

    expect(size).toBe(6);
  });

  it('should match static data about the first animal found', () => {
    const list = third();

    expect(list[0]).toMatchObject({
      _id: 3,
      name: 'Meg',
      birthday: '2012-05-23',
      species: 'Cachorro',
      color: 'Preto',
    });
  });

  it('should match static data about the last animal found', () => {
    const list = third();

    const size = Object.keys(list).length - 1;

    expect(list[size]).toMatchObject({
      _id: 14,
      name: 'Felix',
      birthday: '2016-06-06',
      species: 'Ave',
      color: 'Preto',
    });
  });

  it('should guarantee that all animals age will be greater than two', () => {
    const list = third();

    var testBreaker = false;

    list.forEach(animal => {
      const age = 2019 - animal.birthday.substr(0, 4);

      if (age < 2) {
        testBreaker = true;
      }
    });

    expect(testBreaker).toBeFalsy();
  });

  it('should guarantee that all animals color will be Black or Gray', () => {
    const list = third();

    var testBreaker = false;

    list.forEach(animal => {
      const color = animal.color;

      if (color !== 'Preto' && color !== 'Cinza') {
        testBreaker = true;
      }
    });

    expect(testBreaker).toBeFalsy();
  });
});

describe('Tests about the Fourth algorithm requested', () => {
  it('should run fourth algorithm', () => {
    const r4 = fourth();

    expect(r4).toBeGreaterThan(0);
  });

  it('should return exact summation of all animals age', () => {
    const age = fourth();

    expect(age).toBe(59);
  });
});

describe('Tests about the Fifth algorithm requested', () => {
  it('should run fifth algorithm', () => {
    const r5 = fifth();

    const size = Object.keys(r5).length;

    expect(size).toBeGreaterThan(0);
  });

  it('should validate static data of oldest animal found', () => {
    const oldestAnimal = fifth();

    expect(oldestAnimal[0]).toMatchObject({
      _id: 3,
      name: 'Meg',
      birthday: '2012-05-23',
      species: 'Cachorro',
      color: 'Preto',
    });
  });
});
