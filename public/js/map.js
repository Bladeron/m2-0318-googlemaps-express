document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
    // main.js
    function startMap() {
      const ironhackBCN = {
        lat: 41.3977381,
        lng: 2.190471916
      };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: ironhackBCN
      });

      let bounds = new google.maps.LatLngBounds();
      let changedRests = restaurants.map(rest => {
        let mappedrest = {
          name:rest.name,
          pos:{
            lat: rest.location.coordinates[0],
            lng: rest.location.coordinates[1]
          }
        }
        bounds.extend(mappedrest.pos);
        return mappedrest;
      })
      map.fitBounds(bounds);



      changedRests.forEach(rest => {
        new google.maps.Marker({
          position:rest.pos,
          map: map,
          title: rest.name
        });
      })
    }
    startMap();
  },
  false
);
