//  Simple Timer Solution


//  Display time clock:
window.onload = function () {
  $("#done").on("click", done);
  $("#start").on("click", start);
};
var intervalId;
var clockRunning = false;
var time = 30;

function start() {

  // DONE: Use setInterval to start the count here and set the clock to running.
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }
}

function done() {
  clearInterval(intervalId);
  timeUp()
}

function count() {
  time--;

  if (time === 0) {
    clearInterval(intervalId);
    timeUp()
  }
  else {
    $("#display").text(time);
  }
}


function timeUp() {
  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");
}