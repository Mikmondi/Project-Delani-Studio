$(document).ready(function() {
    $(".servicesdesign").click(function() {
      $(".design-hide").toggle();
      $(".design-show").toggle();
    });
  });

  $(document).ready(function() {
    $(".servicesdevelopment").click(function() {
      $(".development-hide").toggle();
      $(".development-show").toggle();
    });
  });

  $(document).ready(function() {
    $(".servicesproduct").click(function() {
      $(".product-hide").toggle();
      $(".product-show").toggle();
    });
  });

  $(document).ready(function() {
    $(".contactsUs").submit(function(event) {
        var contactName = $("#nameForm").val(); 
        $(".nameEnt").text(contactName);

        $(".feedback").show();
        event.preventDefault();
    }); 
  });