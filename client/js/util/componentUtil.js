(function () {
  function compoUtil() {
    const fn = compoUtil.prototype;
    fn.show = function (thisDom, categoryDom) {
      $(categoryDom).hide();
      $(thisDom).show();
    }
    fn.moveFocus = function (dire) {

    }

  }
  window.youtubeObj = window.youtubeObj || {};
  window.youtubeObj.compoUtil = compoUtil;
})();