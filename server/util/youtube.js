const Const = require('../config/const.json');
const Tool = require('./tool');

var youtube = module.exports = {};

function generateURL(funcName, paraObj) {
  let finalURL = Const.youtubeHost + funcName + '?key=' + Const.youtubeKey + '&';
  let paraArr = [];
  for (key in paraObj) {
    paraArr.push(key + '=' + encodeURIComponent(paraObj[key]));
  }
  let paraStr = paraArr.join('&');
  console.log('final', finalURL + paraStr);
  return finalURL + paraStr;
}

youtube.init = function () {}
youtube.search = function (para = {
  part: 'snippet'
}) {
  const str = generateURL('search', para);
  return Tool.httpGet(str).then(
    data => {
      return data;
    }
  );

}