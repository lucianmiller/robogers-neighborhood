//Business Logic-----------
function numList(number) {
  const numArr = []
  const outputArr = []
  for (let index = 0; index <= number; index++) {
    numArr.push(index);
  };
  numArr.forEach(function(num) {
    if (num.toString().includes(3)) {
      outputArr.push("Won't you be my neighbor?");
    } else if (num.toString().includes(2)) {
      outputArr.push("Boop!");
    } else if (num.toString().includes(1)) {
      outputArr.push("Beep!");
    } else {
      outputArr.push(num.toString());
    };
  });
  console.log(outputArr);
  return outputArr.join(", ");
};

//User Logic---------------
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const userNum = parseInt($("#number").val());
    console.log("user num: " + userNum);
    const finalList = (numList(userNum));
    $("#output").html(finalList);
  });
});