// ==UserScript==
// @name        Disable Bing Search Engine Scroll
// @namespace   your-namespace
// @description Disables scrolling on the Bing search engine page to prevent accidental scrolling into the Bing chat feature.
// @match     https://www.bing.com/*
// @version     1
// @grant       none
// ==/UserScript==

window.addEventListener("wheel", e=>{
if(e.target.className.includes("cib-serp-main")) e.stopPropagation();
});
