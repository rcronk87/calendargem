// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready(function() {
   $("#calendar").fullCalendar({
     events: "/sightings/get_events",
     header: {left: 'prev,next today', center: 'title', right: 'month, agendaWeek, basicDay '}, dayClick: function(date, allDay, jsEvent, view) { $('#calendar').fullCalendar( 'changeView', 'basicDay' ) },
     timeFormat: "LT",
     eventClick: function(event) {
         if (event.url) {
             window.open(event.url);
             return false;
         }
       }
     });
   });
