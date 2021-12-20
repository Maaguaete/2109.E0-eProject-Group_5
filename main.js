 $(document).ready(function() {

     // All pages: Button scroll Back-to-top
     $(window).scroll(function() {
         if ($(this).scrollTop() > 50) {
             $('#back-to-top').fadeIn();
             $('#back-to-top').css('z-index', '999');
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

     $("#enquireForm").submit(function() {
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

     // Membership page: membership form
     $("#membershipForm").submit(function() {
         var name = $("#name").val();
         var email = $("#email ").val();
         var phone = $("#phone ").val();
         var packageForm = $("#packageForm ").val();
         var durationForm = $("#durationForm ").val();
         var address = $("#address ").val();
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
         if (packageForm == '') {
             alert("The packageForm cannot left blank ");
             return false;
         }
         if (durationForm == '') {
             alert("The durationForm cannot left blank ");
             return false;
         }
         if (address == '') {
             alert("The address cannot left blank ");
             return false;
         }
         alert("\nThank you for choosing Prime Fitness as your accommodation\nHope you enjoy our services! ");
         return true;
     });
     // End of Membership page
 });