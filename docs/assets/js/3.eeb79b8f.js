(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{159:function(t,n,e){},204:function(t,n,e){var r=e(0),i=e(3),s=e(106),a=[].slice,u=function(t){return function(n,e){var r=arguments.length>2,i=r?a.call(arguments,2):void 0;return t(r?function(){("function"==typeof n?n:Function(n)).apply(this,i)}:n,e)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(s)},{setTimeout:u(i.setTimeout),setInterval:u(i.setInterval)})},205:function(t,n,e){"use strict";var r=e(159);e.n(r).a},208:function(t,n,e){"use strict";e.r(n);e(204);var r={name:"Slider",props:{images:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{timer:null,currentIndex:0}},mounted:function(){this.startSlide()},methods:{startSlide:function(){this.timer=setInterval(this.next,4e3)},next:function(){this.currentIndex+=1},prev:function(){this.currentIndex-=1}},computed:{currentImg:function(){return this.images[Math.abs(this.currentIndex)%this.images.length]}}},i=(e(205),e(28)),s=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hero slider-wrapper"},[e("transition-group",{attrs:{name:"fade",tag:"div"}},t._l([t.currentIndex],(function(n){return e("div",{key:n},[e("img",{staticClass:"slideImage",attrs:{src:t.currentImg}})])})),0),t._v(" "),e("a",{staticClass:"prev",attrs:{href:"#"},on:{click:t.prev}},[t._v("→")]),t._v(" "),e("a",{staticClass:"next",attrs:{href:"#"},on:{click:t.next}},[t._v("→")])],1)}),[],!1,null,null,null);n.default=s.exports}}]);