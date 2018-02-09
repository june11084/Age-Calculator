export class Age {
   constructor(){
   }
   yearsToSeconds(yearsOld){
      const seconds = 31536000;
      let age = Math.floor(yearsOld * seconds);
      return age;
   }
   humanToMercury(yearsOld){
      const seconds = 31536000;
      const mercury = 0.24;
      let age = Math.floor(((yearsOld * seconds)/mercury)/seconds);
      return age;
   }
   yearsLeftOnMercury(yearsOld, lifeExpectancy){
      const seconds = 31536000;
      const mercury = 0.24;
      let age = Math.floor((((lifeExpectancy * seconds)/mercury)/seconds) - (((yearsOld * seconds)/mercury)/seconds));
      return age;
   }
   humanToVenus(yearsOld){
      const seconds = 31536000;
      const venus = 0.62;
      let age = Math.floor(((yearsOld * seconds)/venus)/seconds);
      return age;
   }
   yearsLeftOnVenus(yearsOld, lifeExpectancy){
      const seconds = 31536000;
      const venus = 0.62;
      let age = Math.floor((((lifeExpectancy * seconds)/venus)/seconds) - (((yearsOld * seconds)/venus)/seconds));
      return age;
   }
   humanToMars(yearsOld){
      const seconds = 31536000;
      const mars = 1.88;
      let age = Math.floor(((yearsOld * seconds)/mars)/seconds);
      return age;
   }
   yearsLeftOnMars(yearsOld, lifeExpectancy){
      const seconds = 31536000;
      const mars = 1.88;
      let age = Math.floor((((lifeExpectancy * seconds)/mars)/seconds) - (((yearsOld * seconds)/mars)/seconds));
      return age;
   }
   humanToJupiter(yearsOld){
      const seconds = 31536000;
      const jupiter = 11.86;
      let age = Math.floor(((yearsOld * seconds)/jupiter)/seconds);
      return age;
   }
   yearsLeftOnJupiter(yearsOld, lifeExpectancy){
      const seconds = 31536000;
      const jupiter = 11.86;
      let age = Math.floor((((lifeExpectancy * seconds)/jupiter)/seconds) - (((yearsOld * seconds)/jupiter)/seconds));
      return age;
   }
   daysUntilNextBirthday(month, day, planet){
      let nextBirthday;
      let myBirthday = [month,day];
      let today = new Date();
      let bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]);
      if( today.getTime() > bday.getTime()) {
          bday.setFullYear(bday.getFullYear()+1);
      }
      let diff = bday.getTime()-today.getTime();
      let days = Math.floor(diff/(1000*60*60*24));
      nextBirthday = Math.floor(365*((1 - ((365 - days)/365))/planet));
      return nextBirthday;
   }
};
