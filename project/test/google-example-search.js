// var map;
// var service;
// var infowindow;
//
// function initialize() {
//   var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);
//
//   map = new google.maps.Map(document.getElementById('map'), {
//       center: pyrmont,
//       zoom: 15
//     });
//
//   var request = {
//     location: pyrmont,
//     radius: '500',
//     query: 'restaurant'
//   };
//
//   service = new google.maps.places.PlacesService(map);
//   service.textSearch(request, callback);
// }
//
// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(results[i]);
//     }
//   }
// }
//
// let lat = 39.6716156;
// let lng = -77.67651839999999;


//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&keyword=cruise&key=YOUR_API_KEY

// EXAMPLE Search
// Hagerstown, hotels, radius 10
// 39.6716156,-77.67651839999999
// //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.6716156,-77.67651839999999&radius=10&type=hotel&key=AIzaSyAVuPSHMjNYDUqjY_rvl9wHTaVBbFpSQho

///// TEXT search
// var map;
// var service;
// var infowindow;
//
// function initialize() {
//   var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);
//
//   map = new google.maps.Map(document.getElementById('map'), {
//       center: pyrmont,
//       zoom: 15
//     });
//
//   var request = {
//     location: pyrmont,
//     radius: '500',
//     query: 'restaurant'
//   };
//
//   service = new google.maps.places.PlacesService(map);
//   service.textSearch(request, callback);
// }
//
// function callback(results, status) {
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(results[i]);
//     }
//   }
// }

// maps.googleapis.com/maps/api/place/radarsearch/json?location=39.6716156,-77.67651839999999&radius=500&type=museum&key=YOUR_API_KEY

// *******************************************************
// RADAR SEARCH!!!!
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.6716156,-77.67651839999999&radius=3200&type=lodging&key=AIzaSyAVuPSHMjNYDUqjY_rvl9wHTaVBbFpSQho
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.6716156,-77.67651839999999&radius=3200&type=lodging&key=AIzaSyAVuPSHMjNYDUqjY_rvl9wHTaVBbFpSQho
//

// 21740
// 39.6268957,-77.7337628

// 21742
// let lat = 39.6716156
// let lng = -77.67651839999999
// let API_KEY = AIzaSyAVuPSHMjNYDUqjY_rvl9wHTaVBbFpSQho

// `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=3200&type=lodging&key=${API_KEY}`

// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });


var request = require('request');

let googlePlacesSearch = () => {

  let latitude = 39.6716156;
  let longitude = -77.67651839999999;
  let API_KEY = 'AIzaSyAVuPSHMjNYDUqjY_rvl9wHTaVBbFpSQho';
  let google_places_url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=10000&type=lodging&key=${API_KEY}`

  request(google_places_url, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // return body;
    let data = JSON.parse(body);
    // console.log(data.results[0].name);
    console.log(data.results.length);
    for (var i = 0; i < data.results.length; i++) {
      console.log(data.results[i].name);
    }
  });
}

googlePlacesSearch();
// let output = googlePlacesSearch();
// console.log('**OUTPUT** ', output);
