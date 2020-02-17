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

        let arrayData = result._embedded.events.slice(0, 10);


        const sports = arrayData.forEach(function(currentItem){
            const genre = currentItem.classifications[0].segment.name
            const nameOfEvent = currentItem.name;
            const venue = currentItem._embedded.venues[0].name;
            const date = currentItem.dates.start.localDate;
            const time = currentItem.dates.start.localTime;
            if (genre === "Sports") {
                // PRINT FIRST 10 EVENTS
                    const htmlToAppend = `
                    <div class="sports">
                        <li>Genre: ${genre}</li>
                        <li>Name of event: ${nameOfEvent}</li>
                        <li>Name of venue: ${venue}</li>
                        <li>Date: ${date}</li>
                        <li>Time: ${time}</li>
                    </div>
                    `;
                    $('.sports').append(htmlToAppend);
            }
        }) 

        const music = arrayData.forEach(function(currentItem){
            const genre = currentItem.classifications[0].segment.name;
            const nameOfEvent = currentItem.name;
            const venue = currentItem._embedded.venues[0].name;
            const date = currentItem.dates.start.localDate;
            const time = currentItem.dates.start.localTime;
            if (genre === "Music"){
                const htmlToAppend = `
                <div class="music">
                    <li>Genre: ${genre}</li>
                    <li>Name of event: ${nameOfEvent}</li>
                    <li>Name of venue: ${venue}</li>
                    <li>Date: ${date}</li>
                    <li>Time: ${time}</li>
                </div>
                `;
                $('.music').append(htmlToAppend);

            }
        })

        const arts = arrayData.forEach(function(currentItem){
            const genre = currentItem.classifications[0].segment.name;
            const nameOfEvent = currentItem.name;
            const venue = currentItem._embedded.venues[0].name;
            const date = currentItem.dates.start.localDate;
            const time = currentItem.dates.start.localTime;
            if (genre === "Arts & Theatre") {
                const htmlToAppend = `
                <div class="arts">
                    <li>Genre: ${genre}</li>
                    <li>Name of event: ${nameOfEvent}</li>
                    <li>Name of venue: ${venue}</li>
                    <li>Date: ${date}</li>
                    <li>Time: ${time}</li>
                </div>
                `;
                $('.arts').append(htmlToAppend);
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





