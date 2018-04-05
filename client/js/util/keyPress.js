(function () {
  // set some const
  const longpressTime = 4000;
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

  var keyup = function () {
    $('body').on('keyup', function (e) {
      // console.log(e, this);
      if (listeningKeys.indexOf(e.which) === -1) {
        return true;
      }
      if (keydownObj.code === e.which && keydownObj.skipUp) {
        resetKeyDown();
        return true;
      }
      $('body').trigger('mykeyup', keycodeMatch[e.which]);

      $('#keyupcode').text(e.which);
      $('#keylongcode').text('');


      return true;
    })
  };

  var keydown = function () {
    $('body').on('keydown', function (e) {
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
          $('body').trigger('mykeyupl', keycodeMatch[e.which]);
          keydownObj.skipUp = true;

          $('#keylongcode').text(e.which);
          $('#keyupcode').text('');


        }
        return true;
      }
      keydownObj = {code: e.which, time: new Date().getTime()};
      return true;
    })
  }
  keyup();
  keydown();
})();
