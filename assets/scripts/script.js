const variables = {
    currentDay: $('#currentDay'),
    today: moment(),
};

variables.currentDay.text(variables.today.format('dddd, MMMM Do YYYY'));

