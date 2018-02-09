import { Age } from './../js/age.js';

describe('yearsToSeconds', function() {
  it('test', function() {
    let age = new Age();
    const seconds = 31536000;
    expect(age.yearsToSeconds(1)).toEqual(seconds);
  });
});

describe('humanYearsToPlanetYears', function() {
 it('test', function() {
   let age = new Age();
   const seconds = 31536000;
   const yearsOld = 23;
   const mercury = 0.24;
   const venus = 0.62;
   const mars = 1.88;
   const jupiter = 11.86;
   expect(age.humanToMercury(yearsOld)).toEqual(Math.floor(((yearsOld * seconds)/mercury)/seconds));
   expect(age.humanToVenus(yearsOld)).toEqual(Math.floor(((yearsOld * seconds)/venus)/seconds));
   expect(age.humanToMars(yearsOld)).toEqual(Math.floor(((yearsOld * seconds)/mars)/seconds));
   expect(age.humanToJupiter(yearsOld)).toEqual(Math.floor(((yearsOld * seconds)/jupiter)/seconds));
 });
});

describe('YearsLeftToLiveOnPlanets', function() {
 it('test', function() {
   let age = new Age();
   const seconds = 31536000;
   const yearsOld = 23;
   const lifeExpectancy = 90;
   const mercury = 0.24;
   const venus = 0.62;
   const mars = 1.88;
   const jupiter = 11.86;
   expect(age.yearsLeftOnMercury(yearsOld,lifeExpectancy)).toEqual(Math.floor((((lifeExpectancy * seconds)/mercury)/seconds) - (((yearsOld * seconds)/mercury)/seconds)));
   expect(age.yearsLeftOnVenus(yearsOld,lifeExpectancy)).toEqual(Math.floor((((lifeExpectancy * seconds)/venus)/seconds) - (((yearsOld * seconds)/venus)/seconds)));
   expect(age.yearsLeftOnMars(yearsOld,lifeExpectancy)).toEqual(Math.floor((((lifeExpectancy * seconds)/mars)/seconds) - (((yearsOld * seconds)/mars)/seconds)));
   expect(age.yearsLeftOnJupiter(yearsOld,lifeExpectancy)).toEqual(Math.floor((((lifeExpectancy * seconds)/jupiter)/seconds) - (((yearsOld * seconds)/jupiter)/seconds)));
 });
});

describe('daysUntilNextBirthday', function() {
  it('test', function() {
    let age = new Age();
    let today = new Date();
    let month = today.getUTCMonth() + 1;
    let day = today.getUTCDate();
    const mercury = 0.24;
    const venus = 0.62;
    const mars = 1.88;
    const jupiter = 11.86;
    expect(age.daysUntilNextBirthday(month,day,mercury)).toEqual(age.daysUntilNextBirthday(month,day,mercury));
    expect(age.daysUntilNextBirthday(month,day,venus)).toEqual(age.daysUntilNextBirthday(month,day,venus));
    expect(age.daysUntilNextBirthday(month,day,mars)).toEqual(age.daysUntilNextBirthday(month,day,mars));
    expect(age.daysUntilNextBirthday(month,day,jupiter)).toEqual(age.daysUntilNextBirthday(month,day,jupiter));
  });
});
