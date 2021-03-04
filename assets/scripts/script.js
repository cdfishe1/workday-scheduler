const variables = {
    currentDay: $('#currentDay'),
    today: moment(),
    hour: Number(moment().format('HH')),
    allInputs: document.getElementsByClassName('form-control'),
    btn9am: document.getElementById('btn9am'),
    btn10am: document.getElementById('btn10am'),
    btn11am: document.getElementById('btn11am'),
    btn12pm: document.getElementById('btn12pm'),
    btn1pm: document.getElementById('btn1pm'),
    btn2pm: document.getElementById('btn2pm'),
    btn3pm: document.getElementById('btn3pm'),
    btn4pm: document.getElementById('btn4pm'),
    btn5pm: document.getElementById('btn5pm'),
    time9am: document.getElementById('time9am'),
    time10am: document.getElementById('time10am'),
    time11am: document.getElementById('time11am'),
    time12pm: document.getElementById('time12pm'),
    time1pm: document.getElementById('time1pm'),
    time2pm: document.getElementById('time2pm'),
    time3pm: document.getElementById('time3pm'),
    time4pm: document.getElementById('time4pm'),
    time5pm: document.getElementById('time5pm'),
};

variables.currentDay.text(variables.today.format('dddd, MMMM Do YYYY'));

let inputsArray = Array.from(variables.allInputs);
inputsArray.forEach((input) => {
    
    let parsedInputTime = parseInt(input.dataset.time, 10);
    if((parsedInputTime) < variables.hour) {
        input.style.backgroundColor = '#ff6961'
    } else if (input.dataset.time > variables.hour) {
        input.style.backgroundColor = '#d3d3d3';
    } else {
        input.style.backgroundColor = '#77dd77'
    }

    input.setAttribute('placeholder', 'Enter an event.');

    if (localStorage.getItem('event9am') !== null) {
        let eventText9am = localStorage.getItem('event9am');
        time9am.value = eventText9am;
    } 

    if (localStorage.getItem('event10am') !== null) {
        let eventText10am = localStorage.getItem('event10am');
        time10am.value = eventText10am;
    } 

    if (localStorage.getItem('event11am') !== null) {
        let eventText11am = localStorage.getItem('event11am');
        time11am.value = eventText11am;
    } 

    if (localStorage.getItem('event12pm') !== null) {
        let eventText12pm = localStorage.getItem('event12pm');
        time12pm.value = eventText12pm;
    } 

    if (localStorage.getItem('event1pm') !== null) {
        let eventText1pm = localStorage.getItem('event1pm');
        time1pm.value = eventText1pm;
    } 

    if (localStorage.getItem('event2pm') !== null) {
        let eventText2pm = localStorage.getItem('event2pm');
        time2pm.value = eventText2pm;
    } 

    if (localStorage.getItem('event3pm') !== null) {
        let eventText3pm = localStorage.getItem('event3pm');
        time3pm.value = eventText3pm;
    } 

    if (localStorage.getItem('event4pm') !== null) {
        let eventText4pm = localStorage.getItem('event4pm');
        time4pm.value = eventText4pm;
    } 

    if (localStorage.getItem('event5pm') !== null) {
        let eventText5pm = localStorage.getItem('event5pm');
        time5pm.value = eventText5pm;
    } 
    
});



variables.btn9am.addEventListener('click', function() {
    let inputText9am = variables.time9am.value;
    localStorage.setItem('event9am', inputText9am);
})

variables.btn10am.addEventListener('click', function() {
    let inputText10am = variables.time10am.value;
    localStorage.setItem('event10am', inputText10am);
})


variables.btn11am.addEventListener('click', function() {
    let inputText11am = variables.time11am.value;
    localStorage.setItem('event11am', inputText11am);
})

variables.btn12pm.addEventListener('click', function() {
    let inputText12pm = variables.time12pm.value;
    localStorage.setItem('event12pm', inputText12pm);
})

variables.btn1pm.addEventListener('click', function() {
    let inputText1pm = variables.time1pm.value;
    localStorage.setItem('event1pm', inputText1pm);
})

variables.btn2pm.addEventListener('click', function() {
    let inputText2pm = variables.time2pm.value;
    localStorage.setItem('event2pm', inputText2pm);
})

variables.btn3pm.addEventListener('click', function() {
    let inputText3pm = variables.time3pm.value;
    localStorage.setItem('event3pm', inputText3pm);
})

variables.btn4pm.addEventListener('click', function() {
    let inputText4pm = variables.time4pm.value;
    localStorage.setItem('event4pm', inputText4pm);
})

variables.btn5pm.addEventListener('click', function() {
    let inputText5pm = variables.time5pm.value;
    localStorage.setItem('event5pm', inputText5pm);
})




