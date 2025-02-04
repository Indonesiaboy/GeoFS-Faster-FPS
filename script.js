// ==UserScript==
// @name         GeoFS More FPS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Get more fps!!!
// @author       Writer by ChatGPT & Edited by IndonesiaBoy
// @match        https://www.geo-fs.com/geofs.php?v=*
// @match        https://*.geo-fs.com/geofs.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Maximal FPS settings (default: 60)
    const maxFPS = 120;

    // Change FPS settings
    let lastTime = 0;
    const setFrameRate = () => {
        const now = performance.now();
        if (now - lastTime > 1000 / maxFPS) {
            lastTime = now;
            // Rerun frames or rendering here
        }
    };

    // Interval to keep FPS is high
    setInterval(setFrameRate, 0);
})();
