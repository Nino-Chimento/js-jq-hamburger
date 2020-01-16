// $("a").click(
//   function () {
//     console.log("Nino");
//     $(".hamburger-menu").show(1000);
//     $("a").addClass("red");
//   }
// );
$(".hamburger-menu a").click(
  function () {
      $(".hamburger-menu").hide(1000);
  }
);

var hidden = true
$("a").click(
  function(){
    if (hidden) {
      $(".hamburger-menu").show(1000);
    }
  }
);
