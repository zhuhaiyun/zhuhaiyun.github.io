/*global jQuery:false */
jQuery(document).ready(function ($) {
  "use strict";


  //add some elements with animate effect


  var mySwiper = new Swiper('#swiper', {
    hashNavigation: true,
    autoHeight: true,
    on: {
      transitionEnd: function () {
        $("#tabbar").find('.tabbar-item').eq(this.activeIndex).addClass('active').siblings().removeClass('active')
      },
    },
  })

  $("#tabbar").on('click', '.tabbar-item', function () {
    $(this).addClass('active').siblings().removeClass('active')
    mySwiper.slideTo($(this).index())
  })

  $(".big-cta").hover(
    function () {
      $('.cta a').addClass("animated shake");
    },
    function () {
      $('.cta a').removeClass("animated shake");
    }
  );
  $(".box").hover(
    function () {
      $(this).find('.icon').addClass("animated fadeInDown");
      $(this).find('p').addClass("animated fadeInUp");
    },
    function () {
      $(this).find('.icon').removeClass("animated fadeInDown");
      $(this).find('p').removeClass("animated fadeInUp");
    }
  );

  //scroll to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

});