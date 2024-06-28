// ==UserScript==
// @name         Hide Prices on RESEE [TESTED working]
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide prices on RESEE website
// @author       YOU
// @match        https://www.resee.com/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    // Variable to track the visibility
    let pricesVisible = true;

    // Create a button to toggle price visibility
    const button = document.createElement('button');
    button.textContent = 'Hide Prices';
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

        if (pricesVisible) {
            originalPriceElements.forEach(element => element.style.display = 'none');
            currentPriceElements.forEach(element => element.style.display = 'none');
            button.textContent = 'Show Prices';
            pricesVisible = false;
        } else {
            originalPriceElements.forEach(element => element.style.display = '');
            currentPriceElements.forEach(element => element.style.display = '');
            button.textContent = 'Hide Prices';
            pricesVisible = true;
        }
    }

    // Add event listener to the button
    button.addEventListener('click', togglePrices);

    // Initial hiding of prices
    togglePrices();
})();
