const https = require('https');


var tool = {
  httpGet: function (url, errCallback, callback) {
    https.get(url, (resp) => {
      let data = '';

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log(JSON.parse(data).explanation);
        callback(data);
      });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
      errCallback && errCallback(err);
    });
  }
}

module.exports = tool;