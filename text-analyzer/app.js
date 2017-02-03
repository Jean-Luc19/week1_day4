/*
we're going to create a web app that runs basic analytics on user submitted text.
Listen for submition and analyze their input.

Calculate total number of words
Calculate how many unique words are in the text - count once for every word but not again even if the same word appears again in the text.
"hello hi hi tom tom tom you are cool"
Calculate average word length - total number of characters - excluding spaces - and divide that total by the total number of words
Calculate average sentence length. How many sentences are there?  Divide total number of characters by total number of sentences.

Input each caluclated metric into it's corresponding place in the html
*/

var textTest = "This is a test sentence for our fun fun fun app app app. it will give metrics. and lengths of words and stuff and yay.";

function calcTotalWords(text) {
  return text.split(' ').length;
}
function calcUniqueWords(text) {
  var textArr = text.split(' ');
  var uniqueArr =[];
  textArr.forEach(function(item){
    if (uniqueArr.indexOf(item) === -1) {
      uniqueArr.push(item);
    }
  });
  return uniqueArr.length;
}
function averageWordLength(text) {
  var textArr = text.split('');
  var nonSpaceArr = [];
  textArr.forEach(function(item){
    if (item !== " ") {
      nonSpaceArr.push(item);
    }

  });

  return nonSpaceArr.length / calcTotalWords(text);
}
function averageSentenceLength(text) {
  var textArr = text.split('.');
  return  calcTotalWords(text) / (textArr.length - 1);
}
console.log(averageSentenceLength(textTest));

$('button').click(function(){
  event.preventDefault();
  $("dl").removeClass('hidden');
  var $text = $('textarea').val();
  $(".js-wordcount").append(calcTotalWords($text));
  $(".js-unique-wordcount").append(calcUniqueWords($text));
  $(".js-avg-wordcount").append(averageWordLength($text));
  $(".js-avg-sentence").append(averageSentenceLength($text));
});
