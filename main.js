 // When the user scrolls down 300px from the top of the document, resize the header's font size
 //  $(document).ready(function() {
 //      if ($(window).width() > 992) {

 //          $(window).scroll(function() {
 //              if ($(window).scrollTop() > 70) {
 //                  $("header").css("height", "90px");
 //                  $("header").children().css("height", "90px");
 //                  $(".logo").css("opacity", "0");
 //              } else {
 //                  $("header").css("height", "246px");
 //                  $("header").children().css("height", "100%");
 //                  $(".logo").css("opacity", "1");
 //              }
 //          });
 //      }
 //  });
 $(document).ready(function() {
     $(window).scroll(function() {
         if ($(this).scrollTop() > 50) {
             $('#back-to-top').fadeIn();
         } else {
             $('#back-to-top').fadeOut();
         }
     });
     // scroll body to 0px on click
     $('#back-to-top').click(function() {
         $('body,html').animate({
             scrollTop: 0
         }, 400);
         return false;
     });
 });