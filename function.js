 //Navbar changes color when scrolling

$(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 300) { // check if user scrolled more than 300 from top of the browser window
          $(".navbar-fixed-top").css("background-color", "#fff"); // if yes, then change the color of class "navbar-fixed-top" to white (#fff)
          $(".nav").css("color", "black"); //Change color of text so that it is visible when scrolling
        } else {
          $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
          $(".nav").css("color","#fff"); // if not, keep text color to white
        }
    
  // Image parallax

    var wScroll = $(this).scrollTop();
          
    if(wScroll > $('.social').offset().top - ($(window).height() / 1.5)) {

      $('.one').each(function(){

        $('.one').addClass('animate-one');

      });

    }
          
 if(wScroll > $('.social').offset().top - ($(window).height() / 1.5)) {

      $('.two').each(function(){

        $('.two').addClass('animate-two');

      });

    }
          
 if(wScroll > $('.social').offset().top - ($(window).height() / 1.2)) {

      $('.three').each(function(){

        $('.three').addClass('animate-three');

      });

    }
          
if(wScroll > $('.social').offset().top - ($(window).height() / 1.2)) {

      $('.four').each(function(){

        $('.four').addClass('animate-four');

      });

    }
    
if(wScroll > $('.social').offset().top - ($(window).height() / 2.0)) {

      $('.five').each(function(){

        $('.five').addClass('animate-five');

      });

    }
          
if(wScroll > $('.social').offset().top - ($(window).height() / 2.0)) {

      $('.six').each(function(){

        $('.six').addClass('animate-six');

      });

    }
        
});
});





          






