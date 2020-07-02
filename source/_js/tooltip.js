const Tooltip = {
  hoverCriteria(c) {
    $(c).hover(function() {
      $(this).find("span.tooltip").css({"display":"inline", "opacity":"1", "visibility":"visible"});
    },function() {
      $(this).find("span.tooltip").css( {"display":"inline", "opacity":"0", "visibility":"hidden"});
    });
  },
  init() {
    this.hoverCriteria('.title');
    this.hoverCriteria('.strategies');
  }
};

module.exports = Tooltip;
