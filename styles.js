function handleAbout() {
  document.getElementById("card").style = "opacity: 0;";
  document.getElementById("about").style = "opacity: 1;";
  document.getElementById("contact").style = "opacity: 0;";
}

function handleHome() {
  document.getElementById("card").style = "opacity: 1;";
  document.getElementById("contact").style = "opacity: 0;";
  document.getElementById("about").style = "opacity: 0;";
}

function handleContact() {
  document.getElementById("card").style = "opacity: 0;";
  document.getElementById("contact").style = "opacity: 1;";
  document.getElementById("about").style = "opacity: 0;";
}

function mouseOverMail() {
  document.getElementById("mymail").innerHTML = "copy mail?";
  document.getElementById("mymail").style = "color:white;";
}
function mouseOutMail() {
  document.getElementById("mymail").innerHTML = "minhman.nguyen95@gmail.com";
  document.getElementById("mymail").style = "color: #72cef0;";
}
function clickMail() {
  document.getElementById("mymail").innerHTML = "coppied";
  navigator.clipboard.writeText("minhman.nguyen95@gmail.com");
  document.getElementById("mymail").style = "color:white;";
}
