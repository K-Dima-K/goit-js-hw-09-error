const t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};function e(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.stop.setAttribute("disabled",!0),t.start.addEventListener("click",(function(){intervalId=setInterval(e,1e3),t.start.setAttribute("disabled",!0),t.stop.removeAttribute("disabled")})),t.stop.addEventListener("click",(function(){clearInterval(intervalId),t.stop.setAttribute("disabled",!0),t.start.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.6ec78f21.js.map