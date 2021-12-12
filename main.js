 $(document).ready(function() {

     // All pages: Button scroll Back-to-top
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
         }, 69);
         return false;
     });

     // Start of Your Concerns page: Toggle answer function
     $("#question1 ").click(function() {
         $("#answer1 ").toggle(500);
         $("#question1 ").toggleClass("btn-danger text-warning ");
     });
     $("#question2 ").click(function() {
         $("#answer2 ").toggle(500);
         $("#question2 ").toggleClass("btn-danger text-warning ");
     });
     $("#question3 ").click(function() {
         $("#answer3 ").toggle(500);
         $("#question3 ").toggleClass("btn-danger text-warning ");
     });
     $("#question4 ").click(function() {
         $("#answer4 ").toggle(500);
         $("#question4 ").toggleClass("btn-danger text-warning ");
     });
     $("#question5 ").click(function() {
         $("#answer5 ").toggle(500);
         $("#question5 ").toggleClass("btn-danger text-warning ");
     });
     $("#question6 ").click(function() {
         $("#answer6 ").toggle(500);
         $("#question6 ").toggleClass("btn-danger text-warning ");
     });
     $("#enquire ").click(function() {
         $("#enquireForm ").toggle(500);
         $("#enquire ").toggleClass("btn-danger text-warning ");
     });

     $("form ").submit(function() {
         var name = $("#name ").val();
         var email = $("#email ").val();
         var phone = $("#phone ").val();
         var message = $("#message ").val();

         if (name == '') {
             alert("The name cannot left blank ");
             return false;
         }
         if (email == '') {
             alert("The email cannot left blank ");
             return false;
         }
         if (phone == '') {
             alert("The phone cannot left blank ");
             return false;
         }
         if (message == '') {
             alert("The message cannot left blank ");
             return false;
         }
         alert("\nYour enquiry form has been sent successfully!\nWe will contact you as soon as possible! ");
         return true;
     });
     //  End of Your Concerns page

     // Membership page: Toggle and scale the content package function
     $("#package1").click(function() {
         $("#packageContent1").toggle(500);
     });
     $("#package2").click(function() {
         $("#packageContent2").toggle(500);
     });
     $("#package3").click(function() {
         $("#packageContent3").toggle(500);
     });
     $("#package4").click(function() {
         $("#packageContent4").toggle(500);
     });
     $("#package5").click(function() {
         $("#packageContent5").toggle(500);
     });
     $("#package1,#package2, #package3, #package4, #package5").hover(function() {
             $(this).css({
                 "transform": "scale(1.03)",
                 "transition": "all 0.4s ease-in-out",
                 "cursor": "pointer"
             });
         },
         function() {
             $(this).css({
                 "transform": "scale(1)",
             });
         });
     // End of Membership page
 });