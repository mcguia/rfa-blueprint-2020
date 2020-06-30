// import CompactPanel from './compact-panel';
import Accordion from './accordion';
import Expandable from './expandable';
import FixedNav from './fixed-nav';
import FixedSection from './fixed-section';
import Modal from './modal';
import Nav from './nav';
import Overlay from './overlay';
import Scroll from './scroll';
import Search from './search';
import Sticky from './sticky';
import Tooltip from './tooltip';
import Utils from './utils';

Accordion.init();
Expandable.init();
FixedNav.init();
Modal.init();
Nav.init();
Overlay.init();
Scroll.init();
Search.init();
Sticky.init();
Tooltip.init();
Utils.markdownLinksNewPage();
Utils.fixOrderedLists();


if (window.location.pathname === '/' || window.location.pathname === '/rfa-2019/') {
  FixedSection.init();
};
