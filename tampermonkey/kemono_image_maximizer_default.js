// ==UserScript==
// @name         Image Maximizer for Kemono
// @version      1.0
// @description  Automatically load full-size images on Kemono pages
// @author       find MORE fun tools like this, all open source >>>>>>>>>> https://github.com/eawlot3000/funlife
// @match        https://kemono.su/patreon/user/*/post/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Select all thumbnails
  var thumbnails = document.querySelectorAll('.post__thumbnail img');

  // Iterate through each thumbnail and set its src to the full-size image URL
  thumbnails.forEach(function(thumb) {
    var fullSizeImageLink = thumb.closest('.fileThumb').getAttribute('href');
    if (fullSizeImageLink) {
      thumb.setAttribute('src', fullSizeImageLink);
      thumb.style.display = ''; // Reset display style if needed
    }
  });
})();
