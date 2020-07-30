/*global jQuery:false */
jQuery(document).ready(function ($) {
  "use strict";


  $('#services').find('.features-text-box').each(function () {
    $(this).css('height', $('#imageLoad').height() + 'px')
  })

});