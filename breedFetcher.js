const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const domain = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(domain, (error, response, body) => {
    if (error) {
      console.log("Request failed: ", error);
    }

    const data = JSON.parse(body);
    const breedInfo = data[0];
    if (breedInfo) {
      callback(null, breedInfo.description);
    } else {
      callback("Failed to find breed"), null;
    }
  }
  );
};

module.exports = { fetchBreedDescription };