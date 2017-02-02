// We want to use a click listener to detect when js-lighbulb elment in html
//when the element is clicked we want to find which bulb was clicked on and add a new class to it
// we want the lighbulb we clicked on lit and the other lightbulbs off

$(".js-lightbulb").click(function(event) {
  $(".js-lightbulb").removeClass("bulb-on");
  $(this).addClass("bulb-on");
  
}
)
