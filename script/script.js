$(function() {

  ////////////////////////////////////////////////////// swiper 시작
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
    ////////////////////////////////////////////////////// swiper 끝
    
    ////////////////////////////////////////////////////// details margin-top 문제 수정시작

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
    ////////////////////////////////////////////////////// details margin-top 문제 수정 끝

    ///////////////////////////////////////////////////// nav 시작
    $('.navi').click(function(){
      let idx = $(this).children('input').val();
      swiper.slideTo(idx, 1000, false);
    });
    ///////////////////////////////////////////////////// nav 끝

});