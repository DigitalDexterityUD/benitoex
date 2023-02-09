var targetDate = new Date("July 07, 2023 07:07:07").getTime();

var countdown = setInterval(function () {
  var currentDate = new Date().getTime();

  var distance = targetDate - currentDate;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + ":" + hours + ":" + minutes + ":" + seconds + ";";
  document.getElementById("countdown").dataText =
    days + ":" + hours + ":" + minutes + ":" + seconds + ";";

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
