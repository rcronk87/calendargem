$("document").ready(function() {

  $("#add_new_sighting_button").on(
    "click",
    function() {
      // Data to be submitted
      newSighting = {
        "sighting": {
          "Date": $("#sighting_date").val(),
          "Time": $("#Sighting_time").val(),
          "Latitude": $("#sighting_latitude").val(),
          "Longitude": $("#sighting_longitude").val(),
        }
      }

      $.ajax({
        dataType: 'json',
        url: '/animals/show',
        method: 'POST',
        data: newSighting,
        success: function(dataFromServer) {
          add_to_sighting_list(dataFromServer);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Add new sighting failed: " + errorThrown);
        }
      });
  });// end add wine

}); // end document ready

// Function to be called after data has been successfully submitted
function add_to_animal_list(data) {
  $("#sighting_list").append(
    '<tr><td>' + data.date  + '</td><td>' +
    data.time + '</td><td>' + data.latitude + '</td><td>' + data.longitutde + '</td><td>' + '<a href="/animals/' + data.id + '">Show</a></td><td>' + '<a href="/animals/' + data.id + '/edit' + '">Edit</a></td><td>' + '<a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/animals/' + data.id + '">Destroy</a></td></tr>');
}
