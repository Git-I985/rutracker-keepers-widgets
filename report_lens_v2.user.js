// ==UserScript==
// @name         RuTracker.org Report Lens v2
// @version      2
// @description  Interact with reports like never before
// @description:ru Улучшенное взаимодействие с отчетами
// @author       Sunni2
// @supportURL   https://rutracker.org/forum/viewtopic.php?t=5373769
// @include      https://rutracker.*/forum/viewtopic.php?t=*
// @include      https://rutracker.*/forum/viewtopic.php?p=*
// @include      https://rutracker.*/forum/viewforum.php?f=*
// @include      https://rutracker.*/forum/profile.php?mode=viewprofile*
// @connect      api.rutracker.cc
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(() => {
    "use strict";
    const mainScript = document.createElement('script')
    mainScript.src = 'http://localhost:1234/index.js'
    document.body.appendChild(mainScript)
})()