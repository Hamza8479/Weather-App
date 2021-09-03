const request = require("request");

const forecast = (long, lat, callback) => {
  const options = {
    method: "GET",
    url: `https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`, //with minus represent longitude east to west
    json: true,
    headers: {
      useQueryString: true,
    },
  };

  request(options, (error, response) => {
    if (error) {
      callback("Unable to connect to Weather Service!", undefined);
    } else {
      callback(undefined, {
        latitude: lat,
        longitude: long,
        title: response.body[0].title,
        latt_long: response.body[0].latt_long,
      });
    }
  });
};

module.exports = forecast;
