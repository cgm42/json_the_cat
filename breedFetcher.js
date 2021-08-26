const request = require('request');

const fetchBreedDescription = function(breed, cb) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, res, body) => {
    if (err) {
      cb(err, null);
      return;
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      cb("not found", null);
      return;
    }
    return cb(null, data[0]['description']);
  });

};

module.exports = { fetchBreedDescription };