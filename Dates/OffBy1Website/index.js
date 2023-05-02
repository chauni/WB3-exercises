"use strict";


const dateBtnEl = document.getElementById('dateBtn');
dateBtnEl.onclick = onDateBtnClicked;

function onDateBtnClicked() {
    const inputEl = document.getElementById('dateInput');
    const userDate = inputEl.value
    const newDate = new Date(userDate)
    
    const dateOutputEl = document.getElementById('dateOutput');
    dateOutputEl.innerHTML = newDate.toString();
}

