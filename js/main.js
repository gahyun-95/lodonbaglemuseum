const menu_list = new Swiper('.menu_list', {

  autoplay: {
    delay: 3000, // ms 3000 = 3초
    disableOnInteraction: false,
  },

  loop: true,

  speed: 1000,


  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },


    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    430: {
      slidesPerView: 1,

    },


  },

});



const sns_list = new Swiper('.sns_list', {

  autoplay: {
    delay: 3000, // ms 3000 = 3초
    disableOnInteraction: false,
  },

  loop: true,

  speed: 1000,

  /* 브레이크포인트는 min-width 기준으로 반대로 생각해야함! */
  breakpoints: {

    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    850: {
      slidesPerView: 3,
      spaceBetween: 20,
    },


    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },


  },

});







$(".depth2").hide();

$(".gnb > li").mouseenter(function () {
  $("#header").addClass("active");
  $(this).find(".depth2").fadeIn();
});

$(".gnb > li").mouseleave(function () {
  $("#header").removeClass("active");
  $(this).find(".depth2").stop().fadeOut();
});


/* mgnb */



$(".mdepth2").hide();
$(".ham").click(function () {
  $(".mgnb_wrap").animate({
    "left": "0"
  });
});

$(".mgnb_close").click(function () {
  $(".mgnb_wrap").animate({
    "left": "100%"
  });
});

$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").stop().slideUp();
})
