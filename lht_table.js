"use strict";

//date to test my script
var thisDay = new Date("August 30, 2018");

//create upcoming events table
var tableHTML = "<table id='eventTable'>";
tableHTML += "<caption>Upcoming Events</caption>";
tableHTML += "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";

//contains a Date object that is 14 days after the current date in milliseconds
var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);// 8.30.18 @ midnight + 14 days * 24hrs * 60mins * 60secs * 1000ms

//loop through each event date from lht_list.js file
for (var i = 0; i < eventDates.length; i++) {
    var eventDate = new Date(eventDates[i]);//create new event date
    var eventDay = eventDate.toDateString();//day as Sat Sep 01 2018
    var eventTime = eventDate.toLocaleTimeString();//time as 7:00:00 PM

    //if 08.30.18 <= date of event && date of event <= 2 weeks after
    if (thisDay <= eventDate && eventDate <= endDate) {
        //if so event falls within 2 week display date,event,price
        tableHTML += "<tr><td>" + eventDay + " @ " + eventTime + "</td>";
        tableHTML += "<td>" + eventDescriptions[i] + "</td>";
        tableHTML += "<td>" + eventPrices[i] + "</td></tr>";
    }
}
tableHTML += "</table>";

//display table of upcoming events when complete
document.getElementById("eventList").innerHTML = tableHTML;

