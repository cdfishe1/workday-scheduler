// Variables for the script

const variables = {
    currentDay: $('#currentDay'),
    today: moment(),
    hour: Number(moment().format('HH')),
    allInputs: document.getElementsByClassName('form-control'),
    allButtons: document.getElementsByClassName('btn'),
    
};

// Sets current day in header
variables.currentDay.text(variables.today.format('dddd, MMMM Do YYYY'));

// Creates an array out of the input elements
let inputsArray = Array.from(variables.allInputs);

// Creates an array of the button elements
let buttonsArray = Array.from(variables.allButtons);


// Sets the hour for each input field
const setDataAttribute = () => {
    for (let i = 0; i <= inputsArray.length - 1; i++) {
        for (let j = 0; j <= inputsArray.length; j++) {
            inputsArray[i].setAttribute('data-hour', Number(i + inputsArray.length))
        }
    }
};

setDataAttribute();

// Sets the local storage for each input field if not null
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
    
});

// Sets the event listner and local storage on the save buttons

buttonsArray.forEach((button) => {
    button.addEventListener('click', function() {
        let inputValue = $(this).closest("div.input-group").find("input").val();
        let timeKey = $(this).closest("div.input-group").find("input").attr("data-hour");
        localStorage.setItem(timeKey, inputValue);
 
    });

});
