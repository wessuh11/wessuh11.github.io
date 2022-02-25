$(function() {

  ////////////////////////////////////////////////////// swiper 시작
  const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      loop: false,
      
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

      hashNavigation: true,
      rewind: true,

      autoHeight: true,
      // freeMode: true,
      // mousewheel: true,
      // watchOverflow: false,
      // observer: true,
      // observeParents: true,
      // ResizeObserver: false,
    });
    ////////////////////////////////////////////////////// swiper 끝
    swiper.slideTo(0, 0, false);
    ////////////////////////////////////////////////////// details margin-top 문제 수정시작

    function applyMt (marginChange) {
      
      let marginReceiverCM = 700;
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
      let idx = $(this).children('.slideIdx').val();
      let slideName = $(this).children('.slideName').val();
      idx = Number(idx);
      swiper.slideTo(idx, 500, false);
      naviClass(slideName);
    });

    swiper.on('slideChangeTransitionStart', function(){
      let idx = $('.swiper-slide-active').attr('data-hash');
      naviClass(idx);
    });

    function naviClass (idx) {
      let naviId = '#' + idx + '-Navi';
      $('.navi').removeClass('navi-Active');
      $(naviId).addClass('navi-Active');
    }
    ///////////////////////////////////////////////////// nav 끝

});