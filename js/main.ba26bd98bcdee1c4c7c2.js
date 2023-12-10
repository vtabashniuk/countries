(()=>{"use strict";var e={370:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),n.hash&&(e+=n.hash),n.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},418:(e,n,t)=>{e.exports=t.p+"14d5dbb5fa728f8e6401.ico"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../"})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(370),n=t.n(e),r=new URL(t(418),t.b);n()(r);const o=JSON.parse('[{"name":"Andorra","code":"AD"},{"name":"Albania","code":"AL"},{"name":"Austria","code":"AT"},{"name":"Åland Islands","code":"AX"},{"name":"Bosnia and Herzegovina","code":"BA"},{"name":"Belgium","code":"BE"},{"name":"Bulgaria","code":"BG"},{"name":"Belarus","code":"BY"},{"name":"Switzerland","code":"CH"},{"name":"Cyprus","code":"CY"},{"name":"Czech Republic","code":"CZ"},{"name":"Germany","code":"DE"},{"name":"Denmark","code":"DK"},{"name":"Estonia","code":"EE"},{"name":"Spain","code":"ES"},{"name":"Finland","code":"FI"},{"name":"Faroe Islands","code":"FO"},{"name":"France","code":"FR"},{"name":"United Kingdom","code":"GB"},{"name":"Guernsey","code":"GG"},{"name":"Greece","code":"GR"},{"name":"Croatia","code":"HR"},{"name":"Hungary","code":"HU"},{"name":"Ireland","code":"IE"},{"name":"Isle of Man","code":"IM"},{"name":"Iceland","code":"IC"},{"name":"Italy","code":"IT"},{"name":"Jersey","code":"JE"},{"name":"Liechtenstein","code":"LI"},{"name":"Lithuania","code":"LT"},{"name":"Luxembourg","code":"LU"},{"name":"Latvia","code":"LV"},{"name":"Monaco","code":"MC"},{"name":"Moldova, Republic of","code":"MD"},{"name":"Macedonia, The Former Yugoslav Republic of","code":"MK"},{"name":"Malta","code":"MT"},{"name":"Netherlands","code":"NL"},{"name":"Norway","code":"NO"},{"name":"Poland","code":"PL"},{"name":"Portugal","code":"PT"},{"name":"Romania","code":"RO"},{"name":"Russian Federation","code":"RU"},{"name":"Sweden","code":"SE"},{"name":"Slovenia","code":"SI"},{"name":"Svalbard and Jan Mayen","code":"SJ"},{"name":"Slovakia","code":"SK"},{"name":"San Marino","code":"SM"},{"name":"Ukraine","code":"UA"},{"name":"Holy See (Vatican City State)","code":"VA"}]'),a=JSON.parse('[{"country":"AL","name":"City 0"},{"country":"AL","name":"City 1"},{"country":"BG","name":"City 2"},{"country":"BG","name":"City 3"},{"country":"BG","name":"City 4"},{"country":"AD","name":"City 1"},{"country":"BE","name":"City 2"},{"country":"BE","name":"City 3"},{"country":"BE","name":"City 4"}]');function c(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var u=document.querySelector(".countries");var d="<ul>".concat(o.map((function(e){return'<li class="'.concat(e.name,' country"><p>').concat(e.name,"</p><p>").concat((n=e.code,t=n.toUpperCase().split("").map((function(e){return 127397+e.charCodeAt()})),String.fromCodePoint.apply(String,c(t))),'</p><ul class="cities">').concat(a.filter((function(n){return n.country===e.code})).map((function(e){return"<li>".concat(e.name,"</li>")})).join(""),"</ul></li>");var n,t})).join(""),"</ul>");function m(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}u.insertAdjacentHTML("afterbegin",d),document.querySelectorAll(".country").forEach((function(e){e.addEventListener("click",(function(){e.querySelector(".cities").classList.toggle("is-open")}))}));var s=document.getElementById("country"),f=document.getElementById("city");o.forEach((function(e){var n,t,r=document.createElement("option");r.value=e.name,r.text="".concat(e.name," ").concat((n=e.code,t=n.toUpperCase().split("").map((function(e){return 127397+e.charCodeAt()})),String.fromCodePoint.apply(String,m(t)))),s.appendChild(r)})),s.addEventListener("change",(function(){var e=s.value,n=o.find((function(n){return n.name===e}));f.innerHTML="",n&&a.forEach((function(e){if(e.country===n.code){var t=document.createElement("option");t.value=e.name,t.text=e.name,f.appendChild(t)}}))}))})()})();