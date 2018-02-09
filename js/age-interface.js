import { Age } from './../js/age.js';

$(document).ready(function() {
  $("#age-form").submit(function(event){
    event.preventDefault();
    let userInput = parseInt($(".number").val());
    let number = new Roman();
    let results = number.toRoman(userInput);
    $("#numbers").text(results.reduce(reducer));
  });
});
