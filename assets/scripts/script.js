// Variables for the script

const variables = {
    currentDay: $('#currentDay'),
    today: moment(),
    hour: Number(moment().format('HH')),
    allInputs: document.getElementsByClassName('form-control'),
    allButtons: document.getElementsByClassName('btn'),
    // btn9am: document.getElementById('btn9am'),
    // btn10am: document.getElementById('btn10am'),
    // btn11am: document.getElementById('btn11am'),
    // btn12pm: document.getElementById('btn12pm'),
    // btn1pm: document.getElementById('btn1pm'),
    // btn2pm: document.getElementById('btn2pm'),
    // btn3pm: document.getElementById('btn3pm'),
    // btn4pm: document.getElementById('btn4pm'),
    // btn5pm: document.getElementById('btn5pm'),
    // time9am: document.getElementById('time9am'),
    // time10am: document.getElementById('time10am'),
    // time11am: document.getElementById('time11am'),
    // time12pm: document.getElementById('time12pm'),
    // time1pm: document.getElementById('time1pm'),
    // time2pm: document.getElementById('time2pm'),
    // time3pm: document.getElementById('time3pm'),
    // time4pm: document.getElementById('time4pm'),
    // time5pm: document.getElementById('time5pm'),
};

// Sets current day in header
variables.currentDay.text(variables.today.format('dddd, MMMM Do YYYY'));

// Creates an array out of the input elements
let inputsArray = Array.from(variables.allInputs);

// Creates an array of the button elements
let buttonsArray = Array.from(variables.allButtons);



const setDataAttribute = () => {
    for (let i = 0; i <= inputsArray.length - 1; i++) {
        for (let j = 0; j <= inputsArray.length; j++) {
            inputsArray[i].setAttribute('data-hour', Number(i + inputsArray.length))
        }
    }
};

setDataAttribute();

const setEventValue = () => {
    for (let i = 0; i <= inputsArray.length - 1; i++) {
        for (let j = 0; j <= inputsArray.length; j++) {
            let inputValueCheck = localStorage.getItem(i + inputsArray.length);
            if (inputValueCheck !== null) {
                inputsArray[i].value = inputValueCheck;
            }
            
        }
    }
};

setEventValue();

// Controls background color, input text, and getting local retrieval for input fields
inputsArray.forEach((input) => {
    
    let parsedInputTime = parseInt(input.dataset.hour, 10);
    if((parsedInputTime) < variables.hour) {
        input.style.backgroundColor = '#ff6961';
    } else if (parsedInputTime > variables.hour) {
        input.style.backgroundColor = '#d3d3d3';
    } else {
        input.style.backgroundColor = '#77dd77'
    }

    input.style.fontWeight = 'bold';

    input.setAttribute('placeholder', 'Enter an event.');

    // if (localStorage.getItem(timeKey) !== null) {
    //     let displayValue = localStorage.getItem(timeKey);
    //     input.value = displayValue;
    // }   
    
});

// if (localStorage.getItem('9') !== null) {
//     let eventText9am = localStorage.getItem('9');
//     time9am.value = eventText9am;
// } 

// if (localStorage.getItem('event10am') !== null) {
//     let eventText10am = localStorage.getItem('event10am');
//     time10am.value = eventText10am;
// } 

// if (localStorage.getItem('event11am') !== null) {
//     let eventText11am = localStorage.getItem('event11am');
//     time11am.value = eventText11am;
// } 

// if (localStorage.getItem('event12pm') !== null) {
//     let eventText12pm = localStorage.getItem('event12pm');
//     time12pm.value = eventText12pm;
// } 

// if (localStorage.getItem('event1pm') !== null) {
//     let eventText1pm = localStorage.getItem('event1pm');
//     time1pm.value = eventText1pm;
// } 

// if (localStorage.getItem('event2pm') !== null) {
//     let eventText2pm = localStorage.getItem('event2pm');
//     time2pm.value = eventText2pm;
// } 

// if (localStorage.getItem('event3pm') !== null) {
//     let eventText3pm = localStorage.getItem('event3pm');
//     time3pm.value = eventText3pm;
// } 

// if (localStorage.getItem('event4pm') !== null) {
//     let eventText4pm = localStorage.getItem('event4pm');
//     time4pm.value = eventText4pm;
// } 

// if (localStorage.getItem('event5pm') !== null) {
//     let eventText5pm = localStorage.getItem('event5pm');
//     time5pm.value = eventText5pm;
// } 



buttonsArray.forEach((button) => {
    button.addEventListener('click', function() {
        let inputValue = $(this).closest("div.input-group").find("input").val();
        let timeKey = $(this).closest("div.input-group").find("input").attr("data-hour");
        localStorage.setItem(timeKey, inputValue);
 
        if (localStorage.getItem(timeKey) !== null) {
            inputValue = localStorage.getItem(inputValue)
        }
        
    });

});





