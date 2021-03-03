const variables = {
    currentDay: $('#currentDay'),
    today: moment(),
    hour: Number(moment().format('hh')),
    time11am: $('#time11am'),
    time1pm: $('#time1pm'),
    
    
};

variables.currentDay.text(variables.today.format('dddd, MMMM Do YYYY'));

const allInputs = document.getElementsByClassName('form-control');
const inputsArray = Array.from(allInputs);


inputsArray.forEach((input) => {
    if(input.dataset.time < variables.hour) {
        input.style.backgroundColor = '#d3d3d3'
    } else if (input.dataset.time > variables.hour) {
        input.style.backgroundColor = '#77dd77';
    } else {
        input.style.backgroundColor = '#ff6961'
    }
});

