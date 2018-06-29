$(document).ready(function() {
    $('nav a').on('click', function() {

      //currrent class assisgnment
       $('nav li.current').removeClass('current');
       $(this).parent().addClass('current');

       //set heading text
       $('h1#heading').text($(this).text());

       //Get  &filter link text
       var category = $(this).text().toLowerCase().replace(' ','_');

       //Remove hidden class if 'all-project is selected'
       if (category == 'home') {
         $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
       }else{
         $('ul#gallery li').each(function() {
           if(!$(this).hasClass(category)){
             $(this).hide().addClass('hidden');
           }else{
             $(this).fadeIn('slow').removeClass('hidden');
           }
         });
       }
       //stop link behavior
       return false;
    });
      $(ul#gallery li).on('mouseenter', function () {
        //Get data attribute value
        var title = $(this).children().data('title');
        var desc = $(this).children().data('desc');

        //validation
        if(desc == null)
        {
          desc='click to enlarge';
        }
        if(title == null)
        {
          title = '';
        }
        //create overlay div
        $(this).append('<div class="overlay"></div>')
        //get overlay div
        var overlay = $(this).children('.overlay');

        //Add html to overlay
        overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

        //fade in overlay
        overlay.fadeIn(800);
            });
            //Mouse leave overlay
            $('ul#gallery li').on('mouseleave', function() {
              $(this).append('<div class="overlay"></div>')
              //get overlay div
              var overlay = $(this).children('.overlay');

              //fadeOut overlay
              overlay.fadeOut(500);
            });
});
