var express = require('express');
var router = express.Router();
const youtubeApi = require('../server/util/youtube');

/* GET home page. */
router.post('/search', function(req, res, next) {
  console.log('search',req.body);
  youtubeApi.search(req.body).then(
    data=>{
      res.end(data);
    }
  );
  // res.end('haha');
});

module.exports = router;
