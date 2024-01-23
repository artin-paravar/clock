let points = document.querySelector(".points");
j = 12;
for (var i = 0; i < 360; i += 6) {
  let point = document.createElement("span");
  point.className = "point";
  if ((i / 6) % 5 == 0) {
    point.className = "point big";
    let text = document.createElement("span");
    text.className = "text";
    text.innerHTML = j;
    text.style.transform = `rotate(${-i}deg) translateY(2px)`;
    if (j == 12) {
      j = 0;
    }
    j++;
    point.appendChild(text);
  }
  point.style.transform = `rotate(${i}deg) translateY(-150px)`;
  points.appendChild(point);
}

const interval = setInterval(() => {
  var date = new Date();
  let secondsPoint = document.querySelector(".seconds");
  let minutesPoint = document.querySelector(".minutes");
  let hoursPoint = document.querySelector(".hours");

  let secPosition = date.getSeconds() * 6;
  let minPosition = date.getMinutes() * 6;
  let hourPosition = date.getHours() * 30;

  if (secPosition == 0) {
    secondsPoint.style.transition = "none";
  } else {
    secondsPoint.style.transition = "0.25s";
  }
  if (minPosition == 0) {
    minutesPoint.style.transition = "none";
  } else {
    minutesPoint.style.transition = "0.25s";
  }
  if (hourPosition == 0) {
    hoursPoint.style.transition = "none";
  } else {
    hoursPoint.style.transition = "0.25s";
  }

  secondsPoint.style.transform = `rotate(${secPosition - 180}deg)`;
  minutesPoint.style.transform = `rotate(${minPosition - 180}deg)`;
  hoursPoint.style.transform = `rotate(${hourPosition - 180}deg)`;
});
