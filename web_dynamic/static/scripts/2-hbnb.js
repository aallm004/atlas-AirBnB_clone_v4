$(document).ready(function() {
  const chosenAmenities = {};
  $('input[type="checkbox"]').change(function() {
    const amenityID = $(this).data("id")
    const amenityName = $(this).data("name")

    if ($(this).is(':checked')) {
      chosenAmenities[amenityId] = amenityName;
    } else {
      delete chosenAmenities[amentiyID];
    }

    localStorage.setItem("chosenAmenities", JSON.stringify(chosenAmenities));
    updatedAmenitiesList();
  });

    function updatedAmenitiesList() {
    const amenitiesList = Object.values(chosenAmenities).join(', ');
    $('div.amenities h4').text(amenitiesList);
    }
    updatedAmenitiesList();
  });
    function checkAPIStatus() {
      $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
          if (data.status === 'OK') {
              $('#api_status').addClass('available');
          } else {
              $('#api_status').removeClass('available');
          }
      });
      };
