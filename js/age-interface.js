import { Age } from './../js/age.js';
$(document).ready(function() {
  $("#age-form").submit(function(event){
    event.preventDefault();
    const mercury = 0.24;
    const venus = 0.62;
    const mars = 1.88;
    const jupiter = 11.86;
    let age = parseInt($("#age").val());
    let lifeExpectancy = parseInt($("#lifeExpectancy").val());
    let bday = $("#birthday").val();
    let birthday = new Date(bday);
    let month = parseInt(birthday.getUTCMonth().toString())+1;
    let day = parseInt(birthday.getUTCDate().toString());
    let ageObject = new Age();
    let humanToMercury = ageObject.humanToMercury(age);
    let humanToVenus = ageObject.humanToVenus(age);
    let humanToMars = ageObject.humanToMars(age);
    let humanToJupiter = ageObject.humanToJupiter(age);
    let yearsLeftOnMercury = ageObject.yearsLeftOnMercury(age, lifeExpectancy);
    let yearsLeftOnVenus = ageObject.yearsLeftOnVenus(age, lifeExpectancy);
    let yearsLeftOnMars = ageObject.yearsLeftOnMars(age, lifeExpectancy);
    let yearsLeftOnJupiter = ageObject.yearsLeftOnJupiter(age, lifeExpectancy);
    let daysUntilNextBirthdayOnMercury = ageObject.daysUntilNextBirthday(month,day,mercury);
    let daysUntilNextBirthdayOnVenus = ageObject.daysUntilNextBirthday(month,day,venus);
    let daysUntilNextBirthdayOnMars = ageObject.daysUntilNextBirthday(month,day,mars);
    let daysUntilNextBirthdayOnJupiter = ageObject.daysUntilNextBirthday(month,day,jupiter);
    $("#test").text(age + " " + month + "/" +day + " " + lifeExpectancy);
    if(yearsLeftOnJupiter<1){
       $("#mercury").text("You havev already lived pass your expected years, congradulations!");
    }else {
      $("#mercury").text("Your age on Mercury is: " + humanToMercury + ", " + "you have: " + yearsLeftOnMercury + " Mercury years to live, your birthday is in " + daysUntilNextBirthdayOnMercury + " days.");
      $("#venus").text("Your age on Venus is: " + humanToMercury + ", " + "you have: " + yearsLeftOnVenus + " Mercury years to live, your birthday is in " + daysUntilNextBirthdayOnVenus + " days.");
      $("#mars").text("Your age on Mars is: " + humanToMercury + ", " + "you have: " + yearsLeftOnMars + " Mercury years to live, your birthday is in " + daysUntilNextBirthdayOnMars + " days.");
      $("#jupiter").text("Your age on Jupiter is: " + humanToMercury + ", " + "you have: " + yearsLeftOnJupiter + " Mercury years to live, your birthday is in " + daysUntilNextBirthdayOnJupiter + " days.");
   }
  });
});
