"use strict";


const dateBtnEl = document.getElementById('dateBtn');
dateBtnEl.onclick = onDateBtnClicked;

function onDateBtnClicked() {
    const inputEl = document.getElementById('dateInput');
    const userDate = new Date(inputEl.value)
    
    const dateOutputEl = document.getElementById('dateOutput');
    dateOutputEl.innerHTML = userDate.toString();
}

