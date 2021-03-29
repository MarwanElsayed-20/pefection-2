$(function () {

  'use strict';

//  fixed navbar for mobile

$(".navbar-toggler, .nav-item, .sign-in").click(function () {
  $(".collapse").slideToggle();
});

// navigate links

$(".navbar-nav .nav-item a").click(function () {

    $("html, body").animate({
      scrollTop: $($(this).data('class')).offset().top
    });

});

// make header full screen

$(".header").height($(window).height());

// show log in tap

$(".sign-in").click(function () {
  $(".login").show();
});

// trigger close icon

$(".close").click(function () {
  $(".login").hide();
});

// switch taps

$(".tabs .tab button").click(function () {
  $(this).addClass("selected").siblings().removeClass("selected");
  // switch taps
  $(".tabs .tap-content > div").hide();
  $($(this).data('class')).show();
});

// creat up button

$(".up").click(function () {
  $("html, body").animate({
    scrollTop: 0
  });
});

// hide up button

$(window).scroll(function () {
  if ($(window).scrollTop() >= $(".header").height()) {
    $(".up").fadeIn(500);
  } else {
    $(".up").hide();
  }

});


});
