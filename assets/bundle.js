!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";var n=m(i(1)),a=m(i(2)),o=m(i(3)),s=m(i(4)),r=m(i(5)),c=m(i(6)),l=m(i(7)),d=m(i(8)),u=m(i(9)),f=m(i(10)),v=m(i(11)),p=m(i(12));function m(e){return e&&e.__esModule?e:{default:e}}n.default.init(),a.default.init(),o.default.init(),r.default.init(),c.default.init(),l.default.init(),d.default.init(),u.default.init(),f.default.init(),v.default.init(),p.default.markdownLinksNewPage(),p.default.fixOrderedLists(),"/"!==window.location.pathname&&"/rfa-2019/"!==window.location.pathname||s.default.init()},function(e,t,i){"use strict";var n={init:function(){var e,t=document.getElementsByClassName("accordion");for(e=0;e<t.length;e++)t[e].addEventListener("click",function(){this.classList.toggle("active"),this.classList.contains("active")?(this.querySelector(".fa").classList.remove("fa-plus"),this.querySelector(".fa").classList.add("fa-minus")):this.classList.contains("active")||(this.querySelector(".fa").classList.remove("fa-minus"),this.querySelector(".fa").classList.add("fa-plus"));var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"})}};e.exports=n},function(e,t,i){"use strict";var n={toggleExpandable:function(){document.querySelector(".expandable");$(".read-more").on("click",function(e){var t=e.currentTarget.closest(".expandable"),i=t.querySelectorAll(".media-object");t.classList.contains("js-expandable-active")?(t.classList.remove("js-expandable-active"),i&&i.forEach(function(e){e.style.display="none"})):(t.classList.add("js-expandable-active"),i&&i.forEach(function(e){e.style="display:flex!important"}))})},init:function(){this.toggleExpandable()}};e.exports=n},function(e,t,i){"use strict";var n={fixNav:function(){var e=$(window);if($(".page-section--nav").length>0){var t=$(".page-section--nav"),i=t.offset().top;e.scroll(function(){t.toggleClass("fixed",e.scrollTop()>i)})}},handleRedirectDropdownSelect:function(){document.querySelector(".criteria-dropdown-nav__select").addEventListener("change",function(e){var t=e.currentTarget.options[e.currentTarget.selectedIndex].getAttribute("data-path");window.location.href=t})},init:function(){var e=document.querySelector(".criteria-dropdown-nav__select");this.fixNav(),e&&this.handleRedirectDropdownSelect()}};e.exports=n},function(e,t,i){"use strict";var n={fixIndexTable:function(){var e=$(window);if($(".fixed-section").length>0){var t=$(".fixed-section"),i=($(".fixed-section-wrapper"),t.offset().top);$(".read-more").on("click",function(){i=t.offset().top});e.scroll(function(){if(e.scrollTop()>i){t.addClass("fixed");var n=document.querySelector(".fixed-section-wrapper").getBoundingClientRect(),a=Math.abs(n.top)+50,o=n.height;$(".content-section").css("margin-top",$(".fixed-section").height()),o<=Math.abs(a)?t.css("opacity",0):t.css("opacity",1),$(".slide-panel__content").addClass("panel-fixed");document.querySelector(".slide-panel__wrapper--compact").getBoundingClientRect().bottom}else t.removeClass("fixed"),$(".content-section").css("margin-top","initial"),$(".slide-panel__content").removeClass("panel-fixed").removeClass("fixed-bottom")})}},init:function(){this.fixIndexTable()}};e.exports=n},function(e,t,i){"use strict";var n={openModal:function(){$(".js-open-modal").click(function(e){$(e.currentTarget).parent().find(".js-target-modal").addClass("js-active"),$("#overlay").addClass("js-active"),$("body").addClass("js-body-modal-active")})},closeModal:function(){$("body").on("click",".js-close-modal",function(){$(".js-target-modal").removeClass("js-active"),$("#overlay").removeClass("js-active"),$("body").removeClass("js-body-modal-active")})},clickOverlayCloseModal:function(){$("#overlay").click(function(){$("body").removeClass("js-body-modal-active")})},init:function(){this.openModal(),this.closeModal(),this.clickOverlayCloseModal()}};e.exports=n},function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var a={slideContainer:$(".nav"),slideTarget:$(".nav__container"),overlay:document.querySelector("#overlay"),direction:document.querySelector(".js-trigger-nav").getAttribute("data-direction"),mainMenu:function(){a.slideTarget.animate(n({},a.direction,"-100%"),"slow").fadeOut(5),a.slideContainer.removeClass("is-visible"),document.querySelector(".js-trigger-nav").addEventListener("click",function(){a.slideTarget.animate(n({},a.direction,"0%"),500).css("display","block"),a.slideContainer.addClass("is-visible"),a.overlay.classList.add("js-active")})},closeMenuButton:function(){document.querySelector(".js-close-nav").addEventListener("click",function(){a.slideTarget.animate(n({},a.direction,"-100%"),700).fadeOut(5),a.slideContainer.removeClass("is-visible"),a.overlay.classList.remove("js-active")})},closeMenuOverlay:function(){document.querySelector("#overlay").addEventListener("click",function(){a.slideTarget.animate(n({},a.direction,"-100%"),700).fadeOut(5),a.slideContainer.removeClass("is-visible"),a.overlay.classList.remove("js-active")})},init:function(){this.mainMenu(),this.closeMenuButton(),this.closeMenuOverlay()}};e.exports=a},function(e,t,i){"use strict";var n={onClickOverlay:function(){$("#overlay").click(function(){$(".js-active").removeClass("js-active"),$(".js-active-menu").removeClass("js-active-menu")})},init:function(){this.onClickOverlay()}};e.exports=n},function(e,t,i){"use strict";var n={smoothScrolling:function(){$("a[href*=\\#]:not([href=\\#])").on("click",function(e){var t=$(e.currentTarget.hash),i=e.currentTarget.hostname,n=window.location.hostname,a=e.currentTarget.pathname.replace(/^\//,""),o=window.location.pathname.replace(/^\//,"");return t.length||(t=$("[name="+e.currentTarget.hash.slice(1)+"]")),!t.length||i!==n&&a!==o||($("html, body").animate({scrollTop:t.offset().top},1e3),!1)})},init:function(){this.smoothScrolling()}};e.exports=n},function(e,t,i){"use strict";var n={fixedSearchTrigger:function(){$(".js-trigger-search").on("click",function(e){e.preventDefault(),$(e.currentTarget).parent().addClass("js-active"),$("#overlay").addClass("js-active")})},init:function(){this.fixedSearchTrigger()}};e.exports=n},function(e,t,i){"use strict";var n={closeSticky:function(){$(".js-close-sticky").click(function(){$(".js-target-sticky").removeClass("js-active")})},init:function(){this.closeSticky()}};e.exports=n},function(e,t,i){"use strict";var n={hoverCriteria:function(e){$(e).hover(function(){$(this).find("span.tooltip").css({display:"inline",opacity:"1",visibility:"visible"})},function(){$(this).find("span.tooltip").css({display:"inline",opacity:"0",visibility:"hidden"})})},init:function(){this.hoverCriteria(".title"),this.hoverCriteria(".strategies"),document.querySelectorAll(".strategies-tooltip").forEach(function(e){var t=document.querySelectorAll(".theme-link");if(e){var i=document.createElement("a");i.href=t[parseInt(e.id)-1].href,i.style.fontSize="16px",i.style.fontWeight="500",i.innerHTML=" Read more",e.appendChild(i)}})}};e.exports=n},function(e,t,i){"use strict";var n={markdownLinksNewPage:function(){$(".markdown a").map(function(e,t){return t.setAttribute("target","_blank")})},fixOrderedLists:function(){var e=1;$("ol").each(function(){1!=e&&$(this).attr("start",e.toString()),e+=$(this).find("li").length})}};e.exports=n}]);