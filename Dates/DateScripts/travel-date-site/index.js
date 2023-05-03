"use strict";


const dateBtnEl = document.getElementById('dateBtn');
dateBtnEl.onclick = onDateBtnClicked;

function onDateBtnClicked() {
    const inputEl = document.getElementById('dateInput');
    const currentDate = new Date();

    const tripDateISOString = `${inputEl.value}T00:00:00`;
    const tripDate = Date.parse(tripDateISOString);

    let msec_per_day = 1000 * 60 * 60 * 24
    let elapsedMilliseconds = tripDate - currentDate
    let dayDiff = elapsedMilliseconds / msec_per_day
    let numDays = Math.round(dayDiff)


    
    const dateOutputEl = document.getElementById('dateOutput');
    dateOutputEl.innerHTML = numDays;
}
