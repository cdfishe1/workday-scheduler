const variables = {
    currentDay: $('#currentDay'),
    today: moment(),
    hour: Number(moment().format('HH')),
    allInputs: document.getElementsByClassName('form-control'),
    btn9am: document.getElementById('btn9am'),
    time9am: document.getElementById('time9am'),
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

console.log(document.getElementById('btn9am'));

variables.btn9am.addEventListener('click', function() {
    let inputText = time9am.value;
    console.log(inputText);
})


