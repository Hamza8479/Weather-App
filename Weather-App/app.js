const request = require("request");

// Api from rapid api weather api
// const options = {
//   method: "GET",
//   url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
//   json: true,
//   qs: { city: "Islamabad" },
//   headers: {
//     "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
//     "x-rapidapi-key": "5472696c8amshe84a6ac687e744cp1dceccjsn26e07d43537e",
//     useQueryString: true,
//   },
// };

// request(options, (error, response) => {
//   console.log(
//     `It is currently ${response.body.temp} degrees out. There is ${response.body.feels_like}% chance of rain`
//   );
// });

// Other Api meta weather

// const options = {
//   method: "GET",
//   url: "https://www.metaweather.com/api/location/2487956",
//   json: true,
// };

// request(options, (error, response) => {
//   console.log(
//     `Today ${response.body.title} weather update is  ${response.body.consolidated_weather[0].the_temp} degrees out`
//   );
// });

// const getWeather = (woeid) => {
//   const options = {
//     method: "Get",
//     url: "https://www.metaweather.com/api/location/search/?lattlong=50.068,-5.316",
//     json: true,
//   };

//   request(options, (error, response) => {
//     console.log(response);
//   });
// };

// const getWeather = (woeid) => {
//   const options = {
//     method: "Get",
//     url: `https://www.metaweather.com/api/location/${woeid}/`,
//     json: true,
//   };

//   request(options, (error, response) => {
//     console.log(`${response.body.title}`);
//   });
// };

// getWeather(44418);
// getWeather(2487956);

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

getWeather2("Cupertino");
getWeather2("Islamabad");
