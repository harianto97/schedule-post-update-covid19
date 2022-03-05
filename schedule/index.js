const schedule = require('node-schedule')
const axios = require('axios')
const url = 'http://localhost:3001/api/data-covid'

schedule.scheduleJob('59 23 * * *', function () {
    let date = new Date()
    axios.post(url, {
        log: `Data Covid-19 updated on ${date}`
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
})