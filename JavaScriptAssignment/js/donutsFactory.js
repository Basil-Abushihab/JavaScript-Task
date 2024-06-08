function checkGender() {
  var gender;
  while (true) {
    gender = prompt("Please enter your gender").toLowerCase();
    if (gender == "male" || gender == "female") {
      if (gender == "male") alert("welcome, Mr. " + visitorName);
      else if (gender == "female") alert("welcome, Miss " + visitorName);
      else alert("welcome, " + visitorName);
      break;
    } else {
      alert("Please ReEnter gender");
    }
  }
  return gender;
}
let gender;
let text = prompt("Enter your Name");
let visitorName = text ? text : "Stranger";
if (visitorName == "Stranger") {
  alert("Welcome,  " + visitorName);
} else {
  gender = checkGender();
}

let orderType = prompt(
  "Please choose what you would like to order from the available items (Donuts, Coffee, Ice Cream or Bakery)"
);

let order = prompt("Please write what you would like to order");

alert("Your order is being prepared");

function displayUserInfo() {
  let userData = document.getElementById("user-data");
  let userName = document.getElementById("name");
  let userInfo = userData.querySelectorAll("li");
  console.log(userInfo);
  userName.innerText = visitorName;
  userInfo[0].innerText = "gender: " + gender;
  userInfo[1].innerText = "order Type: " + orderType;
  userInfo[2].innerText = "order: " + order;
}
displayUserInfo();

let customer = new Array(visitorName, gender, orderType, order);
for (let i = 0; i < customer.length; i++) {
  console.log(customer[i]);
}
//Evaluate the following expressions

console.log(-5 * 3);

console.log("JavaScript" + 50);

console.log(17 % 5);

console.log(5 / 10);

console.log(4 === "4");

console.log(4 != 5);
console.log(7 <= 8);
console.log("Hello" + 5);
let x = 5.5;
console.log(Math.ceil(x) - Math.floor(x));
console.log(Math.pow(x, 2));

//Q2

let val = prompt("Please enter a value to be displayed");

alert(val);
//Q3
let num1 = prompt(
  "For Question 3 enter value 1 to view the two numbers in ascending order "
);
let num2 = prompt("Now enter value 2 ");

if (num1 > num2) alert(num1 + " " + num2);
else alert(num2 + " " + num1);

//Q4
num1 = prompt(
  "Now for question 4 enter value 1 to display the larger of the two values"
);
num2 = prompt("Enter value 2");

if (num1 > num2) alert("The larger number is " + num1);
else alert("The larger number is " + num2);

//Q5

num1 = prompt(
  "For question 5 input value 1 to return the sum after entering the second value"
);
num2 = prompt("Please enter value 2");
alert(parseInt(num1, 10) + parseInt(num2, 10));

//Q6

let numString = prompt(
  "For question 6 enter a number in letters eg ONE to convert it into a regular number symbol"
);

switch (numString) {
  case "ONE":
    alert(1);
    break;
  case "TWO":
    alert(2);
    break;
  case "THREE":
    alert(3);
    break;
  case "FOUR":
    alert(4);
    break;
  case "FIVE":
    alert(5);
    break;
  case "SIX":
    alert(6);
    break;
  case "SEVEN":
    alert(7);
    break;
  case "EIGHT":
    alert(8);
    break;
  case "NINE":
    alert(9);
    break;
  default:
    alert("PLEASE TRY AGAIN");
}
