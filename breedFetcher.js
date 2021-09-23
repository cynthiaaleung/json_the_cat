const request = require('request');

const breedName = process.argv[2];
const domain = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(domain, (error, response, body) => {
  if (error) {
    console.log("Request failed: ", error);
  }

  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  const breedInfo = data[0];
  if (breedInfo) {
    console.log(breedInfo.description);
  } else {
    console.log("Failed to find breed");
  }
});