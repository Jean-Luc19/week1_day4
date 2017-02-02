/*  Overall goal is to have the results of fizzbuzz displayed on the html page.
1. Create an event listener that listens for when a user submits a form - when submit button is clicked our listener needs to capture the number entered in the form field. and the submit action triggers the fizzbuzz program to run. The results of the fizzbuzz program are displayed on the html / in the dom.

target the div with the class js-results and append a new div to it which cas the class that corresponds to the fizzbuzz result.

$('.js-results').append(<div class="fizz-buzz-item fizzbuzz"><span>i</span></div>);
$('.js-results').append(<div class="fizz-buzz-item fizz"><span>i</span></div>);
$('.js-results').append(<div class="fizz-buzz-item buzz"><span>i</span></div>);
$('.js-results').append(<div class="fizz-buzz-item f"><span>i</span></div>);
*/


 function fizzIt(countTo) {
  var arrayOne=[];
  for (var i = 1; i <= countTo; i++) {
    if (i % 3 ===0 && i % 5===0){
      $('.js-results').append('<div class="fizz-buzz-item fizzbuzz"><span>'+ i + '</span></div>');
    }
    else if (i % 3===0){
      $('.js-results').append('<div class="fizz-buzz-item fizz"><span>' + i + '</span></div>');
    }
    else if (i % 5===0) {
      $('.js-results').append('<div class="fizz-buzz-item buzz"><span>' + i + '</span></div>');
    }
    else {
      $('.js-results').append('<div class="fizz-buzz-item f"><span>' + i + '</span></div>');
    }
  }

}


$(function(){
  $('form').on('submit', function(event) {
    event.preventDefault();
    var choice = $('input#number-choice').val();
    fizzIt(choice);
  });
});
