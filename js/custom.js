$(function () {

  'use strict';

// make header full screen

  $(".header").height($(window).height());

//  fixed navbar for mobile

$(".navbar-toggler").click(function () {
  $(".collapse").slideToggle();
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
