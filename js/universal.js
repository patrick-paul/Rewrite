var text = prompt("Please Enter The Message That You Want To re-Write", "");

function fin() {
  // writter
  var input = prompt("How Many Times Do You Want To re-Write It?", "");

  for (let x = 0; x < input; x++) {
    document.getElementById("gif").innerHTML +=
      x + 1 + ")" + "  " + text + "<br />" + "<br />";
  }
}
function vin() {
  // output text
  alert("Thank You For Using re-Write!");
  document.getElementById("vin").style.display = "block";
}
function sam() {
  // body...
  document.getElementById("ham").style.display = "none";
}
