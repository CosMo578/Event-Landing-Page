// let days = document.getElementById('days')
// let hours = document.getElementById('hours')
// let minutes = document.getElementById('minutes')
// let seconds = document.getElementById('seconds');

let countDate = new Date('2024-01-26 00:00:00').getTime();

let x = setInterval(() => {
  let now = new Date().getTime();
  let duration = countDate - now;

  let days = Math.floor(duration / (1000 * 60 * 60 * 24));

  let hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((duration % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = `${days}  `;
  document.getElementById('hours').innerText = `${hours}  `;
  document.getElementById('minutes').innerText = `${minutes}  `;
  document.getElementById('seconds').innerText = `${seconds}  `;

  if (duration < 0) {
    clearInterval(x);
    document.getElementById('days').innerText = '00';
    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
  }
}, 1000);
