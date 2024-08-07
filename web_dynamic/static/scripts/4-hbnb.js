let checkedAmenities = {};

$(document).ready(function() {
  
  $('input[type="checkbox"]').change(function() {
    //var amenityID = $(this).data("id");
    const amenityName = $(this).data("name");

    if ($(this).is(':checked')) {
      checkedAmenities[$(this).data("id")] = amenityName;
    } else {
      delete checkedAmenities[$(this).data("id")];
    }
    updatedAmenitiesList();
  });
});  

function updatedAmenitiesList() {
  const amenitiesList = Object.values(checkedAmenities).join(', ');
  $('#checkedAmenities').text(amenitiesList);
}

function checkAPIStatus() {
  $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
      if (data.status === 'OK') {
          $('#api_status').addClass('available');
      } else {
          $('#api_status').removeClass('available');
      }
  });}

function fetchPlaces(amenities = {}) {
  $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(amenities),
      success: function (data) {
          for (const place of data) {
              $('section.places').append(
                  `<article>
                      <div class="title_box">
                          <h2>${place.name}</h2>
                          <div class="price_by_night">$${place.price_by_night}</div>
                      </div>
                      <div class="information">
                          <div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div>
                          <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div>
                          <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div>
                      </div>
                      <div class="description">
                          ${place.description}
                      </div>
                  </article>`
              );
          }
      }
  });
}
