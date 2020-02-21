const app = {};



// Function to sort out duplicate events
app.sortSportsDuplicates = function(result) {
    console.log(result)
    let arrayData = result._embedded.events;
    // New array that we will not add duplicate events to (no two events with the same name)
    let noDuplicates = [];
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
        if (genre === "Sports") {
            // If there's nothing in noDuplicates, that means that we can safely add our first event and it won't be a duplicate
            if(noDuplicates.length == 0){
                noDuplicates.push(item);
                htmlToAppend;
                $('.sports').append(htmlToAppend);
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
                    $('.sports').append(htmlToAppend);
                }
            }
        } 
    })
}


// Function to sort out duplicate events
app.sortMusicDuplicates = function(result) {
    let arrayData = result._embedded.events;
    // New array that we will not add duplicate events to (no two events with the same name)
    let noDuplicates = [];
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
        if (genre === "Music") {
            // If there's nothing in noDuplicates, that means that we can safely add our first event and it won't be a duplicate
            if(noDuplicates.length == 0){
                noDuplicates.push(item);
                htmlToAppend;
                $('.music').append(htmlToAppend);
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
                    $('.music').append(htmlToAppend);
                }
            }
        } 
        // else if (genre !== "Music"){
        //     const appendError = `
        //                 <div class="eventDiv errorDiv" tabindex="0">
        //                     <img src="./assets/error.svg" alt="error" class="errorImg">
        //                     <li class="error">No events today</li>
        //                 </div>
        //             `;
        //     $('.music').html(appendError);
        // }
    })
}


// Function to sort out duplicate events
app.sortArtDuplicates = function(result) {
    let arrayData = result._embedded.events;
    // New array that we will not add duplicate events to (no two events with the same name)
    let noDuplicates = [];
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
                $('.arts').append(htmlToAppend);
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
                    $('.arts').append(htmlToAppend);
                }
            }
        } 
        // else if (genre !== "Arts & Theatre"){
        //     const appendError = `
        //                 <div class="eventDiv errorDiv" tabindex="0">
        //                     <img src="./assets/error.svg" alt="error" class="errorImg">
        //                     <li class="error">No events today</li>
        //                 </div>
        //             `;
        //     $('.arts').html(appendError);
        // }
    })
}

app.ajaxCall = function(){
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

app.init = function(){
    // Storing users date input
    app.date = $('.headerDate').val();

    // Append date to main content
    app.appendDate = `
        <p>${app.date}</p>
    `;
    $('.date').append(app.appendDate);

    // Submit button
    app.submitButton = $(".submit").click(function(){
        location.reload();
    });

    // Scroll button 
    app.smoothScroll = $("i").click(function() {
        $('html,body').animate({
            scrollTop: $('main').offset().top},
            'slow');
        });

    // Info for ajax call
    app.startTime = `T00:00:00`;
    app.startDateTime = `${app.date}${app.startTime}`;
    app.endTime = `T23:59:59`;
    app.endDateTime = `${app.date}${app.endTime}`;
    app.localStartDateTime = `${app.startDateTime},${app.endDateTime}`
    app.ajaxCall();
}

$(function() {
    app.init();
})





