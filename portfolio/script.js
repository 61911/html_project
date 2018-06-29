$(document).ready(function() {
    $('nav a').on('action', function() {

      //currrent class assisgnment
       $('nav a').removeClass('current');
       $(this).parent().addClass('current');

       //set heading text
       $('h1.heading').text($(this).text());
    });
});
