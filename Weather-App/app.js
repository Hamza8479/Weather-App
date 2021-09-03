const geoCode = require("./utils/geocode");
const getWeather = require("./utils/weatherapi");

const address = process.argv[2];

if (address) {
  geoCode(address, (error, { location }) => {
    if (error) {
      return console.log("Something went wrong");
    }
    getWeather(location, (error, weatherData) => {
      if (error) {
        return console.log("Something went wrong");
      }
      console.log(location);
      console.log(weatherData);
    });
  });
} else {
  console.log("City not provided");
}

// geoCode(address, (error, data) => {
//   if (error) {
//     return console.log("Something went wrong");
//   }
//   getWeather(data.location, (error, weatherData) => {
//     if (error) {
//       return console.log("Something went wrong");
//     }
//     console.log(data.location);
//     console.log(weatherData);
//   });
// });

// geoCode("Dubai", (error, data) => {
//   if (error) {
//     console.log("Something went wrong");
//   } else {
//     console.log("Error", error);
//     console.log("Data", data);
//     getWeather(data.location, (error, data) => {
//       console.log("Error", error);
//       console.log("Data", data);
//     });
//   }
// });

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// forecast(-75.7088, 44.1545, (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });
