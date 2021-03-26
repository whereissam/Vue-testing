<template>
<div>
  <h2 class="text-center w-full mt-32">We’d love to hear from you.</h2>
  
  <div class="flex justify-items-center flex-col">
    <div class="w-1/2 h-52 self-center border-2 mt-20 mb-20">Google map</div>
  <!-- <div
    id="map-canvas"
    class="relative w-2/5 rounded h-2/4"
    data-lat="24.187048480252002"
    data-lng="120.59545235541682"
  ></div> -->

  <div class="flex w-3/5 self-center mb-6">
    <div class="w-1/2 text-left">
      <h1 class="m-2 p-2 ">Get in Touch</h1>
      <p class="m-2 p-2 text-xs">Telephone: 0426525165</p>
      <a class="m-2 p-2 text-xs text-yellow-300" href="">chiargo@gmail.com</a>
    </div>
    <div class="w-1/2 text-left">
      <h1 class="m-2 p-2">Visit Us</h1>
      <p class="m-2 p-2 text-xs">5HPW+Q5 龍井區 台中市</p>
      <a class="m-2 p-2 text-xs text-yellow-300" href="">Get Directions</a>
    </div>
    <div class="w-1/2 text-left">
      <h1 class="m-2 p-2">Work with Us?</h1>
      <p class="m-2 p-2 text-xs w-3/5">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <a class="m-2 p-2 text-xs text-yellow-300" href="">chiargo@gmail.com</a>
        </div>
     </div>
  </div>
  </div>
</template>
<script>
export default {
//   mounted() {
//     let google = window.google;
//     let map = document.getElementById("map-canvas");
//     let lat = map.getAttribute("data-lat");
//     let lng = map.getAttribute("data-lng");

//     const myLatlng = new google.maps.LatLng(lat, lng);
//     const mapOptions = {
//       zoom: 15,
//       scrollwheel: false,
//       center: myLatlng,
//       mapTypeId: google.maps.MapTypeId.ROADMAP,
//       styles: [
//         {
//           featureType: "administrative",
//           elementType: "labels.text.fill",
//           stylers: [{ color: "#444444" }],
//         },
//         {
//           featureType: "landscape",
//           elementType: "all",
//           stylers: [{ color: "#f2f2f2" }],
//         },
//         {
//           featureType: "poi",
//           elementType: "all",
//           stylers: [{ visibility: "off" }],
//         },
//         {
//           featureType: "road",
//           elementType: "all",
//           stylers: [{ saturation: -100 }, { lightness: 45 }],
//         },
//         {
//           featureType: "road.highway",
//           elementType: "all",
//           stylers: [{ visibility: "simplified" }],
//         },
//         {
//           featureType: "road.arterial",
//           elementType: "labels.icon",
//           stylers: [{ visibility: "off" }],
//         },
//         {
//           featureType: "transit",
//           elementType: "all",
//           stylers: [{ visibility: "off" }],
//         },
//         {
//           featureType: "water",
//           elementType: "all",
//           stylers: [{ color: "#5e72e4" }, { visibility: "on" }],
//         },
//       ],
//     };

//     map = new google.maps.Map(map, mapOptions);

//     const marker = new google.maps.Marker({
//       position: myLatlng,
//       map: map,
//       animation: google.maps.Animation.DROP,
//       title: "Hello World!",
//     });

//     const contentString =
//       '<div class="info-window-content"><h2>Vue Notus</h2>' +
//       "<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>";

//     const infowindow = new google.maps.InfoWindow({
//       content: contentString,
//     });

//     google.maps.event.addListener(marker, "click", function () {
//       infowindow.open(map, marker);
//     });
//   },
};
</script>