const clock = document.querySelector("div#time h2");

function getClock() {
  const date = new Date();
  const christmasTime = new Date("2022-12-25");

  const diffTime = christmasTime - date;
  //const days = String(date.get);

  const diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor((diffTime / (1000 * 60 * 60 * 24)) % 24);
  const diffMin = Math.floor((diffTime / (1000 * 60 * 60 * 24)) % 60);
  const diffSec = Math.floor((diffTime / 1000) % 60);

  clock.innerText = `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s`;
}

getClock();
setInterval(getClock, 1000);
