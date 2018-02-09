export class Age {
   constructor(){
   }
   yearsToSeconds(yearsOld){
      let age = yearsOld * 31536000
      return age;
   }
   humanToMercury(yearsOld){
      let age = ((yearsOld * 31536000)/0.24)/31536000;
      return age;
   }
   yearsLeftOnMercury(yearsOld, lifeExpectancy){
      let age = (((lifeExpectancy * 31536000)/0.24)/31536000) - (((yearsOld * 31536000)/0.24)/31536000);
      return age;
   }
   humanToVenus(yearsOld){
      let age = ((yearsOld * 31536000)/0.62)/31536000;
      return age;
   }
   yearsLeftOnVenus(yearsOld, lifeExpectancy){
      let age = (((lifeExpectancy * 31536000)/0.62)/31536000) - (((yearsOld * 31536000)/0.62)/31536000);
      return age;
   }
   humanToMars(yearsOld){
      let age = ((yearsOld * 31536000)/1.88)/31536000;
      return age;
   }
   yearsLeftOnMars(yearsOld, lifeExpectancy){
      let age = (((lifeExpectancy * 31536000)/1.88)/31536000) - (((yearsOld * 31536000)/1.88)/31536000);
      return age;
   }
   humanToJupiter(yearsOld){
      let age = ((yearsOld * 31536000)/11.86)/31536000;
      return age;
   }
   yearsLeftOnJupiter(yearsOld, lifeExpectancy){
      let age = (((lifeExpectancy * 31536000)/11.86)/31536000) - (((yearsOld * 31536000)/11.86)/31536000);
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
      diff = bday.getTime()-today.getTime();
      days = Math.floor(diff/(1000*60*60*24));
      nextBirthday = 365*((1 - ((365 - days)/365))/planet);
      return nextBirthday;
   }
};
