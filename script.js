const app = {};

// WORKING URL THAT PULLS ENTIRE API BY CITY (TORONTO)
// https://app.ticketmaster.com/discovery/v2/events.json?apikey=bTDdH2M6LG5xlXjLYgM6g2xJnQJgtML1&city=toronto


// Storing date from HTML
app.date = $('.date').val();

app.startTime = `T00:00:00Z`;
app.endTime = `T23:59:59Z`;

app.startDateTime = `${app.date}${app.startTime}`;
app.endDateTime = `${app.date}${app.endTime}`;

app.ajaxCall = function(){
    $.ajax({
        url: `https://app.ticketmaster.com/discovery/v2/events.json?`,
        type: `GET`,
        datatype: `json`,
        async: true,
        data: {
            apikey: `bTDdH2M6LG5xlXjLYgM6g2xJnQJgtML1`,
            city: `toronto`,
            startDateTime: app.startDateTime,
            endDateTime: app.endDateTime,
        }
    }).then(function(result) {

        console.log(result)
    
        // Genre
        // console.log(result._embedded.events[0].classifications[0].segment.name)

        // Name
        // console.log(result._embedded.events[0].name)

        // Venue
        // console.log(result._embedded.events[0]._embedded.venues[0].name)

        // Pulls date
        // console.log(result._embedded.events[0].dates.start.localDate);

        // Pulls time
        // console.log(result._embedded.events[0].dates.start.localTime);

        const objectData = result._embedded.events;

        const sports = objectData.forEach(function(currentItem){
            const genre = currentItem.classifications[0].segment.name
            if (genre === "Sports") {
                console.log(currentItem.name);
                console.log(currentItem._embedded.venues[0].name);
                console.log(currentItem.dates.start.localDate);
                console.log(currentItem.dates.start.localTime);
            } else {
                console.log("No events")
            }
        }) 

        const music = objectData.forEach(function(currentItem){
            const genre = currentItem.classifications[0].segment.name
            if (genre === "Music"){
                console.log(currentItem.name);
                console.log(currentItem._embedded.venues[0].name);
                console.log(currentItem.dates.start.localDate);
                console.log(currentItem.dates.start.localTime);
            } else {
                console.log("No events")
            }
        })

        const arts = objectData.forEach(function(currentItem){
            const genre = currentItem.classifications[0].segment.name
            if (genre === "Arts & Theatre") {
                console.log(currentItem.name);
                console.log(currentItem._embedded.venues[0].name);
                console.log(currentItem.dates.start.localDate);
                console.log(currentItem.dates.start.localTime);
            } else {
                console.log("No events")
            }
        })
    })
}

app.init = function(){
    app.ajaxCall();
}

$(function() {
    app.init();
})





