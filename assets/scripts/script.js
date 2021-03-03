const variables = {
    currentDay: $('#currentDay'),
    today: moment(),
    hour: Number(moment().format('HH')),
    allInputs: document.getElementsByClassName('form-control'),
    btn9am: $('btn9am'),
    time9am: $('time9am'),
};

variables.currentDay.text(variables.today.format('dddd, MMMM Do YYYY'));

let inputsArray = Array.from(variables.allInputs);
inputsArray.forEach((input) => {
    if(input.dataset.time < variables.hour) {
        input.style.backgroundColor = '#ff6961'
    } else if (input.dataset.time > variables.hour) {
        input.style.backgroundColor = '#d3d3d3';
    } else {
        input.style.backgroundColor = '#77dd77'
    }
});

variables.btn9am.addEventListner('click', function() {
    let btn9amEvent = variables.time9am.value;
    console.log(btn9amEvent);
});


