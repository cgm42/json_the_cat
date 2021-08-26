const request = require('request');
const breed = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, res, body) => {
  if (err) {
    return console.log(err);
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    return console.log("not found");
  }
  console.log(data[0]['description']);
  
});