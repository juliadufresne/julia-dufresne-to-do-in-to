const app = {};

// Function to sort out duplicate events and print results for SPORTS
app.sortSportsDuplicates = function(result) {
    // Setting base to retrieve data from on API object
    let arrayData = result._embedded.events;
    // New array that we will not add duplicate events to (no two events with the same name)
    let noDuplicates = [];
    // Going through API object to retrieve endpoints and appending to HTML
    arrayData.forEach(function(item){
        const genre = item.classifications[0].segment.name;
        const nameOfEvent = item.name;
        const venue = item._embedded.venues[0].name;
        const date = item.dates.start.localDate;
        const time = item.dates.start.localTime;
        const url = item.url;
        const image = item.images;
            image.forEach(function(i){
                if (i.width === 205) {
                    return imageURL = i.url;
                }
            })
        const htmlToAppend = `
        <a class="eventDiv" href="${url}" target="_blank" tabindex="0">
            <li class="eventImage"><img src="${imageURL}" alt=""></li>
            <li class="eventName">${nameOfEvent}</li>
            <li class="eventVenue">${venue}</li>
            <li class="eventDate">${date} @ ${time}</li>
        </a>
        `;

        if (genre === "Sports") {
            // If there's nothing in noDuplicates array, that means that we can safely add our first event and it won't be a duplicate
            if(noDuplicates.length == 0){
                noDuplicates.push(item);
                htmlToAppend;
                $('.sportsContent').append(htmlToAppend);
            // Otherwise, we have to take a look at what we've added to noDuplicates already
            } else {
                // Boolean variable that tells us if the "copied" item matches the "item" we're considering adding 
                let match = false;
                noDuplicates.forEach(function(copied) {
                    // If the name and venue are the same, we treat this as the same event, and we don't add it to noDuplicates
                    if(item.name === copied.name && 
                        item._embedded.venues[0].name === copied._embedded.venues[0].name) {
                            match = true;
                    }
                });
                // If no event in noDuplicates matches item, that means we can add it
                if(!match) {
                    noDuplicates.push(item);
                    htmlToAppend;
                    $('.sportsContent').append(htmlToAppend);
                }
            }
        } 
    })
}


// Function to sort out duplicate events and print results for MUSIC
app.sortMusicDuplicates = function(result) {
    // Setting base to retrieve data from on API object
    let arrayData = result._embedded.events;
    // New array that we will not add duplicate events to (no two events with the same name)
    let noDuplicates = [];
    // Going through API object to retrieve endpoints and appending to HTML
    arrayData.forEach(function(item){
        const genre = item.classifications[0].segment.name;
        const nameOfEvent = item.name;
        const venue = item._embedded.venues[0].name;
        const date = item.dates.start.localDate;
        const time = item.dates.start.localTime;
        const url = item.url;
        const image = item.images;
            image.forEach(function(i){
                if (i.width === 205) {
                    return imageURL = i.url;
                }
            })
        const htmlToAppend = `
            <a class="eventDiv" href="${url}" target="_blank" tabindex="0">
            <li class="eventImage"><img src="${imageURL}" alt=""></li>
            <li class="eventName">${nameOfEvent}</li>
            <li class="eventVenue">${venue}</li>
            <li class="eventDate">${date} @ ${time}</li>
            </a>
        `;
        if (genre === "Music") {
            // If there's nothing in noDuplicates array, that means that we can safely add our first event and it won't be a duplicate
            if(noDuplicates.length == 0){
                noDuplicates.push(item);
                htmlToAppend;
                $('.musicContent').append(htmlToAppend);
            // Otherwise, we have to take a look at what we've added to noDuplicates already
            } else {
                // Boolean variable that tells us if the "copied" item matches the "item" we're considering adding 
                let match = false;
                noDuplicates.forEach(function(copied) {
                    // If the name and venue are the same, we treat this as the same event, and we don't add it to noDuplicates
                    if(item.name === copied.name && 
                        item._embedded.venues[0].name === copied._embedded.venues[0].name) {
                            match = true;
                    }
                });
                // If no event in noDuplicates matches item, that means we can add it.
                if(!match) {
                    noDuplicates.push(item);
                    htmlToAppend;
                    $('.musicContent').append(htmlToAppend);
                }
            }
        } 
    })
}


// Function to sort out duplicate events and print results for ARTS AND THEATRE
app.sortArtDuplicates = function(result) {
    // Setting base to retrieve data from on API object
    let arrayData = result._embedded.events;
    // New array that we will not add duplicate events to (no two events with the same name)
    let noDuplicates = [];
    // Going through API object to retrieve endpoints and appending to HTML
    arrayData.forEach(function(item){
        const genre = item.classifications[0].segment.name;
        const nameOfEvent = item.name;
        const venue = item._embedded.venues[0].name;
        const date = item.dates.start.localDate;
        const time = item.dates.start.localTime;
        const url = item.url;
        const image = item.images;
            image.forEach(function(i){
                if (i.width === 205) {
                    return imageURL = i.url;
                }
            })
        const htmlToAppend = `
        <a class="eventDiv" href="${url}" target="_blank" tabindex="0">
            <li class="eventImage"><img src="${imageURL}" alt=""></li>
            <li class="eventName">${nameOfEvent}</li>
            <li class="eventVenue">${venue}</li>
            <li class="eventDate">${date} @ ${time}</li>
        </a>
        `;
        // We only care about "item" if its an arts event
        if (genre === "Arts & Theatre") {
            // If there's nothing in noDuplicates, that means that we can safely add our first event and it won't be a duplicate
            if(noDuplicates.length == 0){
                noDuplicates.push(item);
                htmlToAppend;
                $('.artsContent').append(htmlToAppend);
            // Otherwise, we have to take a look at what we've added to noDuplicates already
            } else {
                // Boolean variable that tells us if the "copied" item matches the "item" we're considering adding 
                let match = false;
                noDuplicates.forEach(function(copied) {
                    // If the name and venue are the same, we treat this as the same event, and we don't add it to noDuplicates
                    if(item.name === copied.name && 
                        item._embedded.venues[0].name === copied._embedded.venues[0].name) {
                            match = true;
                    }
                });
                // If no event in noDuplicates matches item, that means we can add it.
                if(!match) {
                    noDuplicates.push(item);
                    htmlToAppend;
                    $('.artsContent').append(htmlToAppend);
                }
            }
        } 
    })
}

app.ajaxCall = function(){
    // Storing users date input
    app.date = $('.headerDate').val();

    // Info for ajax call
    app.startTime = `T00:00:00`;
    app.startDateTime = `${app.date}${app.startTime}`;
    app.endTime = `T23:59:59`;
    app.endDateTime = `${app.date}${app.endTime}`;
    app.localStartDateTime = `${app.startDateTime},${app.endDateTime}`

    // Append date to main content
    app.appendDate = `
        <p>${app.date}</p>
    `;
    $('.date').html(app.appendDate);

    // app.submitButton = $(".submit").click(function(){
    //     // location.reload();
    //     $('.eventDiv').empty();
    //     app.ajaxCall();
    // });


    $.ajax({
        url: `https://app.ticketmaster.com/discovery/v2/events.json?`,
        type: `GET`,
        datatype: `json`,
        async: true,
        data: {
            apikey: `bTDdH2M6LG5xlXjLYgM6g2xJnQJgtML1`,
            city: `toronto`,
            localStartDateTime: app.localStartDateTime,
        }
    }).then(function(result) {
        app.sortSportsDuplicates(result);
        app.sortMusicDuplicates(result);
        app.sortArtDuplicates(result);
    })
}

app.submitButton = $(".submit").click(function(){
    // location.reload();
    $('.artsContent').empty();
    $('.sportsContent').empty();
    $('.musicContent').empty();
    app.ajaxCall();
});

app.init = function(){
    // Submit button
    // app.submitButton = $(".submit").click(function(){
    //     app.ajaxCall();
    // });

    // Scroll button 
    app.smoothScroll = $(".submit").click(function() {
        $('html,body').animate({
            scrollTop: $('main').offset().top},
            'slow');
        });

    app.ajaxCall();
}

$(function() {
    app.init();
})





