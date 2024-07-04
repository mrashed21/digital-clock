const display = document.getElementById("clock");

setInterval(() => {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);
  let time = hours + ":" + minutes + ":" + seconds;
  display.textContent = time;
}, 1000);

function formatTime(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
