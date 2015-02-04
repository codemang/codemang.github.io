$(document).ready(function() {
  $(".content_wrapper").css("width", "200px");
  $(".resize").on("click", function() {
    $(".content_wrapper").css("width", "200px");
  });

  $(".nav-collapse a").on("click", function() {
    $(".active").removeClass("active");
    $(this).parent().addClass("acive");
  });
});
