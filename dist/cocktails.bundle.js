!function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}({2:function(e,n,t){"use strict";t.r(n),t.d(n,"FAV_COCKTAILS",(function(){return i}));var i=[{name:"Bloody Mary",url:"https://en.wikipedia.org/wiki/Bloody_Mary_(cocktail)",notes:"After all this time? Always.",emoji:"🥓"},{name:"Vampiro",url:"https://en.wikipedia.org/wiki/Vampiro_(cocktail)",notes:"Honey and orange juice do their job.",emoji:"🧛🏻‍"},{name:"Orgasm",url:"https://en.wikipedia.org/wiki/Orgasm_(cocktail)",notes:"Dreaming of journeys.",emoji:"🗺"},{name:"White Russian",url:"https://en.wikipedia.org/wiki/White_Russian_(cocktail)",notes:"Enjoying evening at home with carpet.",emoji:"🎬"},{name:"Planter's Punch",url:"https://en.wikipedia.org/wiki/Planter%27s_punch",notes:"Sweet.",emoji:"🎁"},{name:"Bee's Knees",url:"https://www.liquor.com/recipes/bees-knees/",notes:"I like honey in cocktails.",emoji:"⚜️"},{name:"Margarita",url:"https://en.wikipedia.org/wiki/Margarita",notes:"Sweet, sour, salty.",emoji:"🧂"},{name:"Cold Brew Negroni",url:"https://www.liquor.com/recipes/cold-brew-negroni/",notes:"Enjoy the Silence.",emoji:"🔕"}];window.addEventListener("load",(function(){var e=document.getElementById("cocktails");i.forEach((function(n){var t=document.createElement("div");t.classList.add("cocktail"),t.innerHTML='\n            <div>\n                <a href="'.concat(n.url,'" class="cocktitle">').concat(n.name,'</a> <span class="cockmoji">').concat(n.emoji,'</span><br />\n                <span class="cocknote">').concat(n.notes,"</span><br />\n            </div>\n            ").trim(),e.appendChild(t)}))}))}});
//# sourceMappingURL=cocktails.bundle.js.map