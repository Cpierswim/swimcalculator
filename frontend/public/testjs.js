const BASE_URL = "http://localhost:3000/";

var clock;
var time_delta;

async function getTimeDelta() {
  const start_millis = Date.now();
  const response = await axios.get(`http://127.0.0.1:5000/api/time`);
  const end_millis = Date.now();
  const data = response.data;

  const trip_time = end_millis - start_millis;
  const server_millis = data["milliseconds"];
  debugger;
  time_delta = server_millis - start_millis - Math.floor(trip_time / 2);
}

function SetClock() {
  var start = Date.now() + time_delta;
  const date = new Date(start);
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  const checkTime = (i) => {
    if (i < 10) return `0${i}`;
    return i + "";
  };
  const minute = checkTime(minutes);
  const second = checkTime(seconds);
  clock.innerText = `${minute}:${second}`;
}

function requestFullScreen(div_to_fullscreen) {
  //request Full Screen

  if (div_to_fullscreen.requestFullscreen) {
    div_to_fullscreen.requestFullscreen();
  } else if (div_to_fullscreen.webkitRequestFullscreen) {
    /* Safari */
    div_to_fullscreen.webkitRequestFullscreen();
  } else if (div_to_fullscreen.msRequestFullscreen) {
    /* IE11 */
    div_to_fullscreen.msRequestFullscreen();
  }
}

async function startApp() {
  var main_screen = document.getElementById("container");
  //requestFullScreen(main_screen);

  //Update the display to the clock - will need to refactor later
  const full_screen_button = document.getElementById("fullscreenbutton");
  full_screen_button.remove();
  clock = document.createElement("p");
  clock.id = "Main_Clock";
  clock.className = "Main_Clock";
  clock.innerText = "00:00";
  main_screen.classList.add("black_background");
  main_screen.appendChild(clock);

  //start the clock
  await getTimeDelta();
  StartClock();
}

function ResetClock() {
  SetClock();
  SetClockFromClockData();
}

function SetClockToTickEverySecond() {
  SetClock();
  setInterval(ResetClock, 1000);
}

async function StartClock() {
  SetClock();
  var start = Date.now() + time_delta;
  const date = new Date(start);
  var delay = 1000 - date.getMilliseconds();
  setTimeout(SetClockToTickEverySecond, delay);
}
