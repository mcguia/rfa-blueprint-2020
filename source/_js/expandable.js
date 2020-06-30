const Expandable = {
  toggleExpandable() {
    const expandableSection = document.querySelector('.expandable');
    $('.read-more').on('click', e => {
      const expandableTarget = e.currentTarget.closest('.expandable');
      const expandableMedia = expandableTarget.querySelectorAll('.media-object');

      if (expandableTarget.classList.contains('js-expandable-active')) {
        expandableTarget.classList.remove('js-expandable-active');
        if (expandableMedia) {
          expandableMedia.forEach((e) => {
            e.style.display = 'none';
          });
        }
      }
      else {
        expandableTarget.classList.add('js-expandable-active');
        if (expandableMedia) {
          expandableMedia.forEach((e) => {
            e.style='display:flex!important';
          });
        }
      }
    })
  },
  init() {
    this.toggleExpandable();
  }
}

module.exports = Expandable;