const Accordion = {
  init() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        if (this.classList.contains("active")) {
          this.querySelector(".fa").classList.remove("fa-plus");
          this.querySelector(".fa").classList.add('fa-minus');
        }
        else if (!this.classList.contains("active")) {
          this.querySelector(".fa").classList.remove("fa-minus");
          this.querySelector(".fa").classList.add('fa-plus');
        }
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }
};

module.exports = Accordion;