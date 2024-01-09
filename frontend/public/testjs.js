const BASE_URL = "http://localhost:3000/";
var time_data;
var clock;

async function getTime() {
  const response = await axios.get(`http://127.0.0.1:5000/api/time`);
  const data = response.data;
  return data;
}

function SetClockFromClockData() {
  const checkTime = (i) => {
    if (i < 10) return `0${i}`;
    return i + "";
  };
  const minute = checkTime(time_data["minute"]);
  const second = checkTime(time_data["second"]);
  clock.innerText = `${minute}:${second}`;
}

function addSecondsToTimeData(seconds_to_add) {
  time_data["second"] = time_data["second"] + seconds_to_add;
  while (time_data["second"] >= 60) {
    time_data["minutes"] = time_data["minutes"] + 1;
  }
  while (time_data["minutes"] >= 60) {
    time_data["hours"] = time_data["hours"] + 1;
  }
}

async function startFullScreen() {
  //request Full Screen
  var main_screen = document.getElementById("container");
  if (main_screen.requestFullscreen) {
    main_screen.requestFullscreen();
  } else if (main_screen.webkitRequestFullscreen) {
    /* Safari */
    main_screen.webkitRequestFullscreen();
  } else if (main_screen.msRequestFullscreen) {
    /* IE11 */
    main_screen.msRequestFullscreen();
  }

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
  time_data = await getTime();
  StartClock();
}

function ResetClock() {
  addSecondsToTimeData(1);
  SetClockFromClockData();
}

function SetClockToTickEverySecond() {
  addSecondsToTimeData(1);
  SetClockFromClockData();
  setInterval(ResetClock, 1000);
}

async function StartClock() {
  SetClockFromClockData();
  setTimeout(SetClockToTickEverySecond, 1000 - time_data["milliseconds"]);
}
