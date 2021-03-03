const variables = {
    currentDay: $('#currentDay'),
    today: moment(),
    hour: Number(moment().format('hh')),
    time11am: $('#time11am'),
    time1pm: $('#time1pm'),
};

variables.currentDay.text(variables.today.format('dddd, MMMM Do YYYY'));


const timeColor = () => {
    let parse = Number(moment().format(time1pm.dataset.time));
    console.log(typeof parse);
    console.log(typeof variables.hour);
    console.log(parse > variables.hour);
    if (parse > variables.hour) {
        time1pm.style.backgroundColor = 'green';
        time1pm.style.color = 'white';
    } else {
        console.log('error');
    }
};
timeColor();