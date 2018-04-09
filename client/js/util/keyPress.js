(function () {
  // set some const
  let longpressTime = 4000;
  const keycodeMatch = {
    37: "L",
    38: "U",
    39: "R",
    40: "D",
    13: "OK"
  };
  // end of const

  var keydownObj = {
    code: 0,
    time: 0,
    skipUp: false
  };

  const listeningKeys = Object.keys(keycodeMatch).map(key => Number(key));

  function resetKeyDown() {
    keydownObj = {
      code: 0,
      time: 0,
      skipUp: false
    };
  }

  var setKeyupListener = function (div) {

    function listener(e) {
      // console.log(e, this);
      if (listeningKeys.indexOf(e.which) === -1) {
        return true;
      }
      if (keydownObj.code === e.which && keydownObj.skipUp) {
        resetKeyDown();
        return true;
      }
      $(div).trigger('mykeyup', keycodeMatch[e.which]);


      return true;
    }
    $('body').off('keyup', listener);
    $('body').on('keyup', listener);
  };

  var setKeydownListener = function (div) {
    function listener(e) {
      // console.log(e, this);
      // $('window').trigger('KEYDOWN', keycodeMatch[e.which]);
      if (listeningKeys.indexOf(e.which) === -1) {
        return true;
      }
      if (keydownObj.code === e.which) {
        if (keydownObj.skipUp) {
          return true;
        }
        if (new Date().getTime() - keydownObj.time > longpressTime) {
          $(div).trigger('mykeyupl', keycodeMatch[e.which]);
          keydownObj.skipUp = true;


        }
        return true;
      }
      keydownObj = {
        code: e.which,
        time: new Date().getTime()
      };
      return true;
    }
    $('body').off('keydown', listener);
    $('body').on('keydown', listener);
  }

  function keyPress(time = 2000) {
    longpressTime = time || longpressTime;
    const fn = keyPress.prototype;
    fn.init = function (dom) {
      setKeyupListener(dom);
      setKeydownListener(dom);
    };

  }
  window.youtubeObj = window.youtubeObj || {};
  window.youtubeObj.keyPress = keyPress;
})();