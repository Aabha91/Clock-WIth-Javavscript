//load the function as the webpage gets loaded
window.onload = moveHands;
// window.onload = getCurrentTime;

//function to move the hands of the clock using rotate CSS attribute
function moveHands() {

  getCurrentTime();

  var today = new Date();
  // rotate hour hand to 30 degrees per hour 
  // make sure that hours lie between 1 to 12
  // add slight rotation as minutes passed as well
  h = 30 * ((today.getHours() % 12) + today.getMinutes() / 60);

  // 6 degrees every minute
  m = 6 * today.getMinutes();

  // 6 degrees every second
  s = 6 * today.getSeconds(); 

  // add the CSS property to each hand
  document.getElementById("seconds").style.cssText =
    "-webkit-transform:rotate(" + s + "deg);";
  document.getElementById("minutes").style.cssText =
    "-webkit-transform:rotate(" + m + "deg);";
  document.getElementById("hours").style.cssText =
    "-webkit-transform:rotate(" + h + "deg);";

  //set timeout for every 1 second  
  setTimeout(moveHands, 1000);
}


// get the current time in 24 hour format
function getCurrentTime(){
var today = new Date();

var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
var timeOfDay = "AM"


m = appendZero(m);
s = appendZero(s);
h = appendZero(h);

if(h == 0)
  h = 12;

if(h > 12){
  h = h - 12;
  timeOfDay = "PM";
}


document.getElementById('currentTime').innerHTML =
h + ":" + m + ":" + s + " " + timeOfDay ;

setTimeout(getCurrentTime, 1000);
}


// add zero in front of numbers < 10
function appendZero(i) {
  if (i < 10) {i = "0" + i};  
  return i;
}

