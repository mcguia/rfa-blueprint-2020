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
    this.hoverCriteria('.themes');
    let tooltips = document.querySelectorAll('.strategies-tooltip');
    tooltips.forEach((t) => {
      let link = document.querySelectorAll('.theme-link');
      if (t) {
        let temp_link = document.createElement("a");
        temp_link.href = link[parseInt(t.id)-1].href;
        temp_link.style.fontSize = "16px";
        temp_link.style.fontWeight = "500";
        temp_link.innerHTML = " Read more";
        t.appendChild(temp_link);
      }
    });
  }
};

module.exports = Tooltip;
