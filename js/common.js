/*global jQuery:false */
jQuery(document).ready(function ($) {
  "use strict";
  $('#myModal').on('click', '.modal-flex', function (e) {
    if ($(e.target).attr('class') === 'modal-flex') {
      $('#myModal').modal('toggle')
    }
  })

  $('#footer').on('click', 'span[data-type]', function () {

    var type = $(this).attr('data-type')
    var img = '', text = ''
    var modalDom = $('#myModal')
    switch (type) {
      case 'wechat':
        img = 'img/contact_code.png'
        text = '扫码关注Mlecoo公众号'
        break;
      case 'phone':
        img = 'img/contact_phone.png'
        text = '0571-8897557'
        break;
      case 'email':
        img = 'img/contact_email.png'
        text = 'Mlecoo-zb@163.com'
        break;
      default: break;
    }
    if (type === 'wechat') {
      modalDom.find('.modal-dialog').addClass('wechat')
    } else {
      modalDom.find('.modal-dialog').removeClass('wechat')
    }
    modalDom.find('.body-img').attr('src', img)
    modalDom.find('.body-p').text(text)
    modalDom.modal({
      keyboard: true
    })
  })

  //scroll to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
    // if ($(this).scrollTop() > 100) {
    //   $('.scrollup').fadeIn();
    // } else {
    //   $('.scrollup').fadeOut();
    // }
  });
  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });
});