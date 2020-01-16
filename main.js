$("a").click(
  function () {
    console.log("Nino");
    $(".hamburger-menu").show(1000);
  }
);
$(".hamburger-menu a").click(
  function () {
      $(".hamburger-menu").hide(1000);
  }
);
