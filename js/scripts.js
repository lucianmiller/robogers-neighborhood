//User Logic---------------
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const userNum = parseInt($("#number").val());
    console.log("user num: " + userNum);
    const finalList = (numList(userNum));
  });
});