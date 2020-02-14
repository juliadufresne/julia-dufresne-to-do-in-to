const app = {};

// WORKING URL THAT PULLS ENTIRE API BY CITY (TORONTO)
// https://app.ticketmaster.com/discovery/v2/events.json?apikey=bTDdH2M6LG5xlXjLYgM6g2xJnQJgtML1&city=toronto

app.ajaxCall = function(){
    $.ajax({
        url: `https://app.ticketmaster.com/discovery/v2/events.json?`,
        type: `GET`,
        datatype: `json`,
        async: true,
        data: {
            apikey: `bTDdH2M6LG5xlXjLYgM6g2xJnQJgtML1`,
            city: `toronto`,
            // startDateTime: `YYYY-MM-DDTHH:MM:SSZ`,
            // endDateTime: `YYYY-MM-DDTHH:MM:SSZ`,
        }
    }).then(function(result) {
        console.log(result)

        // Genre
        console.log(result._embedded.events[0].classifications[0].segment.name)

        // Type of genre
        console.log(result._embedded.events[0].name)

        // Venue
        console.log(result._embedded.events[0]._embedded.venues[0].name)

        // Pulls date
        console.log(result._embedded.events[0].dates.start.localDate);

        // Pulls time
        console.log(result._embedded.events[0].dates.start.localTime);
    })
}


app.date = $('.date');
console.log(app.date.val())

app.init = function(){
    app.ajaxCall();
}

$(function() {
    app.init();
})





