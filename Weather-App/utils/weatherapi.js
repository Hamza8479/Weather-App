const request = require("request");

const getWeather2 = (address, callback) => {
  const options = {
    method: "GET",
    url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
    json: true,
    qs: { city: address },
    headers: {
      "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
      "x-rapidapi-key": "5472696c8amshe84a6ac687e744cp1dceccjsn26e07d43537e",
      useQueryString: true,
    },
  };

  request(options, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else {
      callback(
        undefined,
        `It is currently ${body.temp} degrees out. There is ${body.feels_like}% chance of rain.`
      );
    }
  });
};

module.exports = getWeather2;
