//Business Logic-----------
function numList(number) {
  let numArr = []
  for (let index = 0; index <= number; index++) {
    numArr.push(index);
    console.log(numArr);
  };
};

numList(10);

//User Logic---------------
// $(document).ready(function() {
//   $("form#input").submit(function(event) {
//     event.preventDefault();
//     const userNum = parseInt($("#number").val());
//     console.log("user num: " + userNum);
//     const finalList = (numList(userNum));
//   });
// });