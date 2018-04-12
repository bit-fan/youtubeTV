(function () {
  function httpUtil() {

  }
  const proto = httpUtil.prototype;
  proto.search = function (para) {
    return new Promise((res, rej) => {
      $.ajax({
        url: '/api/search',
        method: 'post',
        data: para,
        dataType: 'json'
      }).done(data => {
        res(data);
      });
    });

  }
  window.youtubeObj = window.youtubeObj || {};
  window.youtubeObj.httpUtil = httpUtil;
})();