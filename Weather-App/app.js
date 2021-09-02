const request = require("request");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const getWeather2 = (woe) => {
  const options = {
    method: "GET",
    url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
    json: true,
    qs: { city: woe },
    headers: {
      "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
      "x-rapidapi-key": "5472696c8amshe84a6ac687e744cp1dceccjsn26e07d43537e",
      useQueryString: true,
    },
  };

  request(options, (error, response) => {
    console.log(
      `It is currently ${response.body.temp} degrees out. There is ${response.body.feels_like}% chance of rain`
    );
  });
};

// const getWeather3 = () => {
//   const options = {
//     method: "GET",
//     url: "https://www.metaweather.com/api/location/search/?lattlong=36.96,-127", //with minus longitude east to west
//     json: true,
//     headers: {
//       useQueryString: true,
//     },
//   };

//   request(options, (error, response) => {
//     if (error) {
//       console.log("Unable to connect to Weather Service!");
//     } else {
//       console.log(`It is currently ${response.body[0].title}`);
//     }
//   });
// };

// const options = {
//   method: "GET",
//   url: "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGFtemE4NDc5IiwiYSI6ImNrdDJtanNlazA3cjMybnJ6djZ4a3BjdGUifQ.FPyM33hFYLB6KipwmTDDlQ&limit=1",
//   // url: "https://api.mapbox.com/geocoding/v5/mapbox.places/Los1ww2.json?access_token=pk.eyJ1IjoiaGFtemE4NDc5IiwiYSI6ImNrdDJtanNlazA3cjMybnJ6djZ4a3BjdGUifQ.FPyM33hFYLB6KipwmTDDlQ&limit=1",

//   json: true,
//   headers: {
//     useQueryString: true,
//   },
// };

// request(options, (error, response) => {
//   if (error) {
//     console.log("Error occur");
//   } else if (response.body.features.length === 0) {
//     console.log("Unable to find location!");
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];
//     console.log(`latitude: ${latitude}, longitude: ${longitude}`);
//     getWeather2("Islamabad");
//   }
// });

// getWeather2("Cupertino");
// getWeather2("Islamabad");
// getWeather3();

geoCode("Islamabad", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
