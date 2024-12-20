// Viewport
/* ====================================================
 * jQuery Is In Viewport.
 * https://github.com/frontid/jQueryIsInViewport
 * Marcelo IvÃ¡n Tosco (capynet)
 * Inspired on https://stackoverflow.com/a/40658647/1413049
 * ==================================================== */
!function(t){"use strict";var i=function(i,n){return this.$el=t(i),this.cb=n,this.watch(),this};i.prototype={isIn:function(){var i=t(window),n=this.$el.offset().top,e=n+this.$el.outerHeight(),o=i.scrollTop(),s=o+i.height();return e>o&&n<s},watch:function(){var i=this,n=!1;t(window).on("resize scroll",(function(){i.isIn()&&!1===n&&(i.cb.call(i.$el,"entered"),n=!0),!0!==n||i.isIn()||(i.cb.call(i.$el,"leaved"),n=!1)}))}},t.fn.isInViewport=function(n){return this.each((function(){var e=t(this);e.data("isInViewport")||e.data("isInViewport",new i(this,n))}))}}(window.jQuery);
