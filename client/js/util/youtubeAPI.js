(function ytUtil(id) {
  var ytPlayer = null;

  window.onYouTubeIframeAPIReady = function () {
    console.log('player ready');
    ytPlayer = new YT.Player(id, {
      // height: '390',
      // width: '640',
      // videoId: 'M7lc1UVf-VE',
      events: {
        // 'onReady': onPlayerReady,
        // 'onStateChange': onPlayerStateChange
      }
    });
  }

  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


  const proto = ytUtil.prototype;
  proto.stopPlayer = function () {
    ytPlayer && ytPlayer.stopVideo();
  }
  window.youtubeObj = window.youtubeObj || {};
  window.youtubeObj.ytUtil = ytUtil;
})()