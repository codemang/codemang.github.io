$(document).ready(function() {
  setTimeout(function() {$(".me-section").addClass("visible");
  }, 500);
  $(".avatar").on("click", function() {
      //$( this ).effect( "bounce", "slow" );
      $( this ).effect( "slide", "slow" );
  });
});
