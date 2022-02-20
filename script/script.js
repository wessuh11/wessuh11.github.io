$(function() {

  const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      loop: true,
      
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      
      // Navigation arrows
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      
      
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      
      // height: 600,

      autoHeight: true,
      // freeMode: true,
      // mousewheel: true,
      // watchOverflow: false,
      // observer: true,
      // observeParents: true,
      // ResizeObserver: false,

    });

    
    function applyMt (marginChange) {
      
      let marginReceiverCM = 400;
      let mt = marginReceiverCM + marginChange;
      $('.marginReceiver').css('margin-top', mt+'px' );

    }

    $('.pt1Details').on('toggle', function() {
      let dHeight = 0;
      
      $('.pt1Details[open]').each(function(index, element) {
        dHeight += $(this).height();
      });
      
      applyMt(dHeight);
    });

});