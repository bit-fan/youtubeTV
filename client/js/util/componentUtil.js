(function () {
  function compoUtil() {
    const fn = compoUtil.prototype;
    fn.show = function (thisDom, categoryDom) {
      $(categoryDom).hide();
      $(thisDom).show();
    }
    fn.getClone = function (tempId, para) {
      const newDiv = $(tempId).clone().removeClass('template');
      for (const key in para) {
        $(newDiv).find('.' + key).html(para[key]);
      }
      return newDiv;

    }
    fn.moveFocus = function (dire) {

    }
    fn.renderSearchResult = function (data) {
      console.log(data);
      $('#searchResult').html('');
      data.items.forEach(item => {
        const v = item.snippet;
        const img = v.thumbnails.medium;
        console.log(img,$('<img />', {
          src: img.url,
          width: img.width,
          height: img.height
        })[0]);
        const newDiv = this.getClone('#videoBox_T', {
          desc: v.description,
          title: v.title,
          img: $('<img />', {
            src: img.url,
            width: img.width,
            height: img.height
          })[0]
        });
        $('#searchResult').append(newDiv);
      })

    }

  }
  window.youtubeObj = window.youtubeObj || {};
  window.youtubeObj.compoUtil = compoUtil;
})();