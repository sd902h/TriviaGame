
//  Display time clock:
window.onload = function () {
  $("#done").on("click", done);
  $("#start").on("click", start);
};
var winCount = 0;
var lossCount = 0;
var noAnswerCount = 0
var intervalId;
var clockRunning = false;
var time = 30;

function start() {
  // DONE: Use setInterval to start the count here and set the clock to running.
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
    $("#start_buttons").empty();
    $("#main-container").attr("class", "show_display");
    $("#display").attr("class", "show_display");
  }

}

function done() {
  $("#game_container").attr("class", "show_display")
  $("#done_buttons").empty();
  $("#main-container").attr("class", "hidden");
  $("#display").attr("class", "hidden");
  clearInterval(intervalId);
  timeUp();
  checkDobby();
  checkMiddle();
  checkMap();
  checkBelatrix();
}

function count() {
  time--;
  if (time === 0) {
    $("#game_container").attr("class", "show_display");
    $("#done_buttons").empty();
    $("#main-container").attr("class", "hidden");
    $("#display").attr("class", "hidden");
    clearInterval(intervalId);
    timeUp();
    checkDobby();
    checkMiddle();
    checkMap();
    checkBelatrix();
  }
  else {
    $("#display").text(time);
  }
}

function timeUp() {
  $("#time-left").append("<h2>All Done!</h2>");
}

function checkDobby() {
  var dobbyTrue = document.getElementById("dobbytrue").checked;
  var dobbyFalse = document.getElementById("dobbyfalse").checked;
  if (dobbyFalse === true) {
    winCount++;
    $("#wins").text(winCount);
  }
  else if (dobbyTrue === true) {
    lossCount++;
    $("#losses").text(lossCount);
  }
  else {
    noAnswerCount++;
    $("#unanswered").text(noAnswerCount);
  }
}

function checkMiddle() {
  var middleTrue = document.getElementById("middletrue").checked;
  var middleFalse = document.getElementById("middlefalse").checked;
  if (middleTrue === true) {
    winCount++;
    $("#wins").text(winCount);
  }
  else if (middleFalse === true) {
    lossCount++;
    $("#losses").text(lossCount);
  }
  else {
    noAnswerCount++;
    $("#unanswered").text(noAnswerCount);
  }
}

function checkMap() {
  var mapTrue = document.getElementById("inlineRadio5").checked;
  var mapFalse = document.getElementById("inlineRadio6").checked;
  if (mapTrue === true) {
    winCount++;
    $("#wins").text(winCount);
  }
  else if (mapFalse === true) {
    lossCount++;
    $("#losses").text(lossCount);
  }
  else {
    noAnswerCount++;
    $("#unanswered").text(noAnswerCount);
  }
}

function checkBelatrix() {
  var belaTrue = document.getElementById("inlineRadio7").checked;
  var belaFalse = document.getElementById("inlineRadio8").checked;
  if (belaTrue === true) {
    winCount++;
    $("#wins").text(winCount);
  }
  else if (belaFalse === true) {
    lossCount++;
    $("#losses").text(lossCount);
  }
  else {
    noAnswerCount++;
    $("#unanswered").text(noAnswerCount);
  }
}
