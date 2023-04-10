function save() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please enter a username and password.");
    return false;
  }
  alert("Log in successful!");
}

function signup() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (username === "" || password === "" || confirmPassword === "") {
    alert("Please fill in all fields.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return false;
  }

  alert("Sign up successful!");
  return true;
}

function add1() {
  document.getElementById("numb1").value++;
}

function remov1() {
  if (document.getElementById("numb1").value == "0") return -1;
  document.getElementById("numb1").value--;
}

function add2() {
  document.getElementById("numb2").value++;
  var tot2 =
    document.getElementById("item-value2").value *
    document.getElementById("numb2").value;
}

function remov2() {
  if (document.getElementById("numb2").value == "0") return -1;
  document.getElementById("numb2").value--;
}
function add3() {
  document.getElementById("numb3").value++;
  var tot3 =
    document.getElementById("item-value3").value *
    document.getElementById("numb3").value;
}

function remov3() {
  if (document.getElementById("numb3").value == "0") return -1;
  document.getElementById("numb3").value--;
}
function add4() {
  document.getElementById("numb4").value++;
  var tot4 =
    document.getElementById("item-value4").value *
    document.getElementById("numb4").value;
}

function remov4() {
  if (document.getElementById("numb4").value == "0") return -1;
  document.getElementById("numb4").value--;
}
function add5() {
  document.getElementById("numb5").value++;
  var tot5 =
    document.getElementById("item-value5").value *
    document.getElementById("numb5").value;
}

function remov5() {
  if (document.getElementById("numb5").value == "0") return -1;
  document.getElementById("numb5").value--;
}
function add6() {
  document.getElementById("numb6").value++;
  var tot6 =
    document.getElementById("item-value6").value *
    document.getElementById("numb6").value;
}

function remov6() {
  if (document.getElementById("numb6").value == "0") return -1;
  document.getElementById("numb6").value--;
}
function add7() {
  document.getElementById("numb7").value++;
  var tot7 =
    document.getElementById("item-value7").value *
    document.getElementById("numb7").value;
}

function remov7() {
  if (document.getElementById("numb7").value == "0") return -1;
  document.getElementById("numb7").value--;
}
function add8() {
  document.getElementById("numb8").value++;
  var tot8 =
    document.getElementById("item-value8").value *
    document.getElementById("numb8").value;
}

function remov8() {
  if (document.getElementById("numb8").value == "0") return -1;
  document.getElementById("numb8").value--;
}
var total = 0;
function addtotal() {
  var tot1 =
    document.getElementById("item-value1").value *
    document.getElementById("numb1").value;
  var tot2 =
    document.getElementById("item-value2").value *
    document.getElementById("numb2").value;
  var tot3 =
    document.getElementById("item-value3").value *
    document.getElementById("numb3").value;
  var tot4 =
    document.getElementById("item-value4").value *
    document.getElementById("numb4").value;
  var tot5 =
    document.getElementById("item-value5").value *
    document.getElementById("numb5").value;
  var tot6 =
    document.getElementById("item-value6").value *
    document.getElementById("numb6").value;
  var tot7 =
    document.getElementById("item-value7").value *
    document.getElementById("numb7").value;
  var tot8 =
    document.getElementById("item-value8").value *
    document.getElementById("numb8").value;

  total = tot1 + tot2 + tot3 + tot4 + tot5 + tot6 + tot7 + tot8;

  document.getElementById("vtot1").value = tot1;
  document.getElementById("vtot2").value = tot2;
  document.getElementById("vtot3").value = tot3;
  document.getElementById("vtot4").value = tot4;
  document.getElementById("vtot5").value = tot5;
  document.getElementById("vtot6").value = tot6;
  document.getElementById("vtot7").value = tot7;
  document.getElementById("vtot8").value = tot8;

  document.getElementById("vtotal").value = total;
}

function chout(){
  alert("You have purchased items from the store for a total value of  " +total +"$ !!\nThank You!!");
}