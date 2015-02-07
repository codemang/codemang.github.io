$(document).ready(function() {
  setTimeout(function() {$(".me-section").addClass("visible");
  $(".submit").addClass("submit-pressable");
  }, 2000);
  $(".avatar").on("click", function() {
      //$( this ).effect( "bounce", "slow" );
      $( this ).effect( "slide", "slow" );
  });

  $(".submit").addClass("submit-pressable");
});
