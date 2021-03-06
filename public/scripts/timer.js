var running = false;
var interval;
var decimal = 0;
var sec = 0;
var min = 0;
var cs = 0;
var bgColor = document.getElementById("container");
var decimalOut = document.getElementById("decimal");
var secOut = document.getElementById("sec");
var minOut = document.getElementById("min");
var colon = document.getElementById("colon");
var timesOut = document.getElementById("timeOut");

var timesList = document.getElementById("timeList");

var clearAll = document.getElementById("clear");
var timerHead = document.getElementById("timerHead");
var timesDisplay = new Array();
var csTimes = new Array();
var avAll = 0;
var avAllOut = document.getElementById("overallAv");
var best = 999999999999999999;
var bestOut = document.getElementById("fastest");
var worst = 0;
var numSolves = 0;
var total = 0;

var numSolvesOut = document.getElementById("solveNum");
let userTimesVal = document.getElementById('userTimes');
let userBest = document.getElementById('userBest');
let userAverage = document.getElementById('userAverage');

let savedMsg = document.getElementById('saved');

function timer() {
  decimal++;
  cs++; //counts time in centiseconds
  decimalOut.innerHTML = decimal;
  if (decimal >= 100) {
    decimal = 0;
    sec++;

    if (sec > 59) {
      sec = 0;
      min++;
      colon.innerHTML = ":";
      minOut.innerHTML = min;
    }
    if (sec <= 9 && min > 0) {
      sec = "0" + sec;
    }
    secOut.innerHTML = sec;
  }

  if (decimal <= 9) {
    decimal = '0' + decimal;
    decimalOut.innerHTML = decimal;
  }

}
//start on spacebar
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        run();
    }
}



function run() {
  if (!running) {
    //timer going
    try {savedMsg.innerHTML = '';}
    catch(error){
      console.log(error);
      
    }
    decimal = 0;
    sec = 0;
    min = 0;
    cs = 0;
    timerHead.innerHTML = "Time your solve"
    bgColor.style.backgroundImage = 'url(/styles/bg.jpeg)';
    secOut.innerHTML = "0";
    minOut.innerHTML = "";
    colon.innerHTML = "";
    running = true;
    scramble = "";
    interval = setInterval(timer, 10);
  } else if (running) {
    //timer stopped
    running = false;
    bgColor.style.backgroundImage = '';
    bgColor.style.backgroundColor = "rgba(255,0,0,0.6)";
    // timesOut.innerText += ","
    

    clearInterval(interval);
    timesDisplay.push(" " + timesOut.innerHTML);

    csTimes.push(cs);
    timesList.innerHTML = timesDisplay;
    calculateStats();
    let timesListText = document.getElementById("timeList").innerText;
    
    console.log(timesListText);
    
    userTimesVal.value = timesListText //takes current solves and sends to form for db post

  }
}

clearAll.onclick = clearTimes;

function clearTimes() {
  bgColor.style.backgroundColor = "rgba(97,95,95)";
  numSolves = 0;
  numSolvesOut.innerHTML = "Solves: " + numSolves;
  best = 99999999999;
  bestOut.innerHTML = "Best: ";
  secOut.innerHTML = 0;
  decimalOut.innerHTML = 00;
  timerHead.innerHTML = 'Time your solve';
  worst = 0;
  avAll = 0;
  total = 0;
  avAllOut.innerHTML = "Average: ";
  timesDisplay = [];
  csTimes = [];
  timesList.innerHTML = timesDisplay;
}

function calculateStats() {
  numSolves++;
  total = 0;
  numSolvesOut.innerHTML = "Solves: " + numSolves;
  for (var x = 0; x < csTimes.length; x++) {
    if (csTimes[x] < best) {
      best = csTimes[x];
      bgColor.style.backgroundColor = "green";
      timerHead.innerHTML = "New Personal Best!"
    }
    if (csTimes[x] > worst) {
      worst = csTimes[x];
    }
    total += csTimes[x];
  }
  avAll = total / numSolves;
  avAllOut.innerHTML = "Average: " + formatTime(avAll);
  //average^^
  userAverage.value = formatTime(avAll);
  bestOut.innerHTML = "Best: " + formatTime(best);
  //best^^
  userBest.value = formatTime(best);
}

function formatTime(t) {
  //m = minute, s = second, c = centisecond
  var m = 0,
    s = 0,
    c = 0,
    out = "";
  m = Math.floor(t / 6000);
  t = t % 6000;
  s = Math.floor(t / 100);
  t = t % 100;
  c = Math.floor(t);
  if (m < 1) {
    m = "";
  } else {
    m = m + ":";
    if (s < 10) {
      s = "0" + s;
    }
  }
  if (c < 10) {
    c = "0" + c;
  }

  out = "" + m + s + "." + c;
  return out;
}