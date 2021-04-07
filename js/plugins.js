/* NAVBAR SCRIPT */
var solidNavbar = function () {
   $('nav').addClass('solid');
}
var transparentNavbar = function () {
   $('nav').removeClass('solid');
}
$(window).on('load', function () { 
   if($(window).width() > 974) {
       if($(window).scrollTop() > 90) {
           solidNavbar();
       } else {
           transparentNavbar();
       }
   } 
});
$(window).on('scroll', function () {
   if($(window).width() > 974) {
       if($(window).scrollTop() > 90) {
           solidNavbar();
       } else {
           transparentNavbar();
       }
   } 
});
/* END NAVBAR */

$(function() {
   $('.navbar-toggler').on('click', function() {
    $('.navbar-collapse').toggleClass('openMe');
    $(this).toggleClass('fa-times');
    $(this).toggleClass('fa');
   });
   if ($(window).width() <= 991) {
        $('.nav-link').on('click', function() {
            $('.navbar-collapse').toggleClass('openMe');
        })
    }

   $('.BackToTop').on('click',function (){
      $('html,body').animate({scrollTop:0},1000);
   });
   new WOW().init();
});

/* TyperWriter Effect */

var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('We are Digital Agency.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('For Website devlopement')
    .pauseFor(2500)
    .deleteChars(10)
    .typeString('esign')
    .pauseFor(2500)
    .start();
