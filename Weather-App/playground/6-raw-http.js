const https = require("https");

const url =
  "https://www.metaweather.com/api/location/search/?lattlong=144.44,-127";

const request = https.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("Error--", error);
});

request.end();
