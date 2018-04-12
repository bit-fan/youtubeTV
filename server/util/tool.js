const https = require('https');


var tool = {
  httpGet: function (url, para = {}) {
    return new Promise((resolve, reject) => {
      https.get(url, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          console.log(JSON.parse(data).explanation);
          resolve(data);
        });

      }).on("error", (err) => {
        console.log("Error: " + err.message);
        reject(err);
      });
    })

  }
}

module.exports = tool;