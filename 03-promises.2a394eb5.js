!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequire4c75;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequire4c75=r);var i=r("iU1Pc"),l={firstDelayEl:document.querySelector('[name = "delay"]'),delayStepEl:document.querySelector('[name = "step"]'),amountEl:document.querySelector('[name = "amount"]'),formEl:document.querySelector(".form")};function u(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}l.formEl.addEventListener("submit",(function(n){n.preventDefault();for(var o=Number(l.firstDelayEl.value),t=Number(l.delayStepEl.value),r=Number(l.amountEl.value),a=0;a<r;a+=1)u(a+1,a*t+o).then((function(n){var o=n.position,t=n.delay;e(i).Notify.success("Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(i).Notify.failure("Rejected promise ".concat(o," in ").concat(t,"ms"))}))}))}();
//# sourceMappingURL=03-promises.2a394eb5.js.map
