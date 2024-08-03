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
