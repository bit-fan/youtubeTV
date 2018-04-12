var keyPress = null,
  compoUtil = null,
  api = null,
  ytUtil = null;

function scriptReady(type) {
  switch (type) {
    case 'keyPress':
      keyPress = new window.youtubeObj.keyPress();
      keyPress.init("#keyEvtDiv");
      break;
    case "compo":
      compoUtil = new window.youtubeObj.compoUtil();
      break;
    case "api":
      api = new window.youtubeObj.httpUtil();
      break;
    case "yt":
      ytUtil = new window.youtubeObj.ytUtil();
  }
}
$(document).ready(function () {

  // $.get("../js/util/keyPress.js", function (a) {
  //   // console.log(a, a);
  // });

  // $.getScript('../js/util/http.js').done((script, status) => {
  //   console.log(script, status);
  //   const httpUtil = new httpUtil();
  // })


  var ytPlayer = null;

  // jQuery methods go here...
  console.log($(window).width(), $(window).height());
  $('#height').text($(window).height());
  $('#width').text($(window).width());

  $('#keyEvtDiv').on('mykeyup', function (a, b) {
    console.log('keyup', a, b);
    $('#keyupcode').text(b);
    $('#keylongcode').text('');
    console.log("$('#searchText').val()", $('#searchText').val());
    search({
      part: 'snippet',
      type: 'video',
      q: $('#searchText').val()
    });
    return true;
  })

  $('#keyEvtDiv').on('mykeyupl', function (a, b) {
    console.log('keyup long', a, b);
    $('#keylongcode').text(b);
    $('#keyupcode').text('');
    return true;
  })

  // search
  function search(para) {
    api.search(para).then(searchData => {
      console.log('search data', searchData);
      compoUtil.renderSearchResult(searchData);
    });
  }

  // local utility
  function loadFile(path) {
    return new Promise((resolve, reject) => {

      $.getScript(path).done((script, status) => {
        if (status === 'success') {
          resolve(eval(script));
        }
      }).fail(() => {
        reject('fail');
      })
    });
  };

});