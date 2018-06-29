var action = "click";
var speed = "500";

$(document).ready(function() {
     $('li.q').on(click , function() {
         $(this).next()
         .slideToggle(speed);
     });
});
