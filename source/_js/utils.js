const Utils = {
  markdownLinksNewPage: () => {
    $('.markdown a').map((idx, link) => {
      return link.setAttribute('target', '_blank');
    });
  },
  fixOrderedLists: () => {
    let start = 1;
    $('ol').each(function() {
      if (start != 1) {
        $(this).attr("start", start.toString());
      }
      start += $(this).find('li').length;
    });
  }
};


module.exports = Utils;
