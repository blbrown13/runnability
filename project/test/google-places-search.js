var request = require('request');

let latitude = 39.6716156;
let longitude = -77.67651839999999;
let API_KEY = 'AIzaSyAVuPSHMjNYDUqjY_rvl9wHTaVBbFpSQho';
let google_places_url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=4800&type=lodging&key=${API_KEY}`

request(google_places_url, (error, response, body) => {
  let data = JSON.parse(body);
  console.log(data.results.length);
  // console.log(data.results);
  for (var i = 0; i < data.results.length; i++) {
    let hotel = data.results[i];
    console.log(`${hotel.name} | ${hotel.vicinity} \n`);
  }
});

// module.exports = googlePlacesSearch;

//
// let googlePlacesSearch = () => {
//
//   let latitude = 39.6716156;
//   let longitude = -77.67651839999999;
//   let API_KEY = 'AIzaSyAVuPSHMjNYDUqjY_rvl9wHTaVBbFpSQho';
//   let google_places_url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=10000&type=lodging&key=${API_KEY}`
//
//   request(google_places_url, (error, response, body) => {
//     // console.log('error:', error); // Print the error if one occurred
//     // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     // console.log('body:', body); // Print the HTML for the Google homepage.
//     // return body;
//     let data = JSON.parse(body);
//     console.log(data.results.length);
//     for (var i = 0; i < data.results.length; i++) {
//       console.log(data.results[i].name);
//     }
//   });
// }
// // googlePlacesSearch();
