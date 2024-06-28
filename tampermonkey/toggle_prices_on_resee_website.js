// ==UserScript==
// @name         Hide Prices on RESEE [TESTED working]
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide prices on RESEE website
// @author       YOU
// @match        https://www.resee.com/*
// @grant        none
// ==/UserScript==


/* default show all prices on website. NEED TO BE DONE as opposite version. fix it*/
(function() {
    'use strict';

    // Variable to track the visibility, set to false to make hiding the default state
    let pricesVisible = false;

    // Create a button to toggle price visibility
    const button = document.createElement('button');
    button.textContent = 'Show Prices';  // Default text should be 'Show Prices' as the prices will be hidden initially
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.zIndex = '1000';
    button.style.padding = '10px';
    button.style.backgroundColor = '#FF4500';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    // Append the button to the body
    document.body.appendChild(button);

    // Function to toggle prices
    function togglePrices() {
        const originalPriceElements = document.querySelectorAll('p.sylius-product-original-price');
        const currentPriceElements = document.querySelectorAll('p.sylius-product-price');

        if (!pricesVisible) { // Toggle logic inverted for clarity
            originalPriceElements.forEach(element => element.style.display = '');
            currentPriceElements.forEach(element => element.style.display = '');
            button.textContent = 'Hide Prices';
            pricesVisible = true;
        } else {
            originalPriceElements.forEach(element => element.style.display = 'none');
            currentPriceElements.forEach(element => element.style.display = 'none');
            button.textContent = 'Show Prices';
            pricesVisible = false;
        }
    }

    // Add event listener to the button
    button.addEventListener('click', togglePrices);

    // Initially hide prices on page load
    togglePrices();
})();




/*
(function() {
    'use strict';

    // Function to hide prices using the specific class names
    function hidePrices() {
        // Select all elements with the classes 'p.sylius-product-original-price' and 'p.sylius-product-price'
        const originalPriceElements = document.querySelectorAll('p.sylius-product-original-price');
        const currentPriceElements = document.querySelectorAll('p.sylius-product-price');

        // Set display style to 'none' for each original price element
        originalPriceElements.forEach(element => {
            element.style.display = 'none';
        });

        // Set display style to 'none' for each current price element
        currentPriceElements.forEach(element => {
            element.style.display = 'none';
        });
    }

    // Run the hidePrices function when the page loads
    window.addEventListener('load', hidePrices);

    // Optional: Run hidePrices periodically in case of dynamic content loading
    setInterval(hidePrices, 1000);
})();
*/
