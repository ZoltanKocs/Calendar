const monthNameEl = document.getElementById("monthname");
const dayNameEl = document.getElementById("dayname");
const dayNumberEl = document.getElementById("daynumber");
const yearEl = document.getElementById("year");

const date = new Date();
//console.log(date.getFullYear());
const month = date.getMonth();
monthNameEl.innerText = date.toLocaleString("sk",{month:"long"});

dayNameEl.innerText = date.toLocaleString("sk",{weekday:"long"});

dayNumberEl.innerText =date.getDate();

yearEl.innerText =date.getFullYear();








