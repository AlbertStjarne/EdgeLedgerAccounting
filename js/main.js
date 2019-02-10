// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 57.726548, lng: 12.898346 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map')
  , {
      zoom: 14,
      center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map});
}