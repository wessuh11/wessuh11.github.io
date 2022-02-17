$(function() {

  const swiper = new Swiper('.swiper', {
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
      
      autoHeight: true,
      // freeMode: true,
      // mousewheel: true,
      // watchOverflow: false,
    });

  $('.summaries').click(function(){
    $('.swiper-slide').scrolltop(0);
  });
});