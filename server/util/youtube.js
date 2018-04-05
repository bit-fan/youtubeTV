const Const = require('../config/const.json');
const Tool = require('./tool');

var youtube = module.exports = {};

function generateURL(funcName, paraObj) {
  let finalURL = Const.youtubeHost + funcName + '?key=' + Const.youtubeKey + '&';
  let paraArr = [];
  for (key in paraObj) {
    paraArr.push(key + '=' + paraObj[key]);
  }
  let paraStr = paraArr.join('&');
  console.log('final', finalURL + paraStr);
  return finalURL + paraStr;
}

youtube.init = function () {
}
youtube.search = function () {
  const str = generateURL('search', {part: 'snippet',type:'video',q:'asd'});
  Tool.httpGet(str, null, data => {
    console.log('data', data)
  });

}