$(".depth2").hide();

$(".gnb > li").mouseenter(function () {
  $("#header").addClass("active");
  $(this).find(".depth2").fadeIn();
});

$(".gnb > li").mouseleave(function () {
  $("#header").removeClass("active");
  $(this).find(".depth2").stop().fadeOut();
});

