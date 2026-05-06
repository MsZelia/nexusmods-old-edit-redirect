// ==UserScript==
// @name        NexusMods Old Edit
// @namespace   Violentmonkey Scripts
// @icon        https://next.nexusmods.com/assets/images/default/logo-emblem.svg
// @version     1.0.0
//
// @match       *://www.nexusmods.com/*
// @grant       none
//
// @author      Ms.Zelia
// @description Redirect NexusMods edit mod page to old version
// @run-at      document-start
// @license     GNU GPLv3
// ==/UserScript==

var oldHref = document.location.href;
var editLoc = window.location.href.indexOf('/edit/');
if (window.location.href.indexOf('nexusmods.com/games') > -1 && editLoc > -1 && window.location.href.indexOf('mods/edit') == -1) {
    var tabName = window.location.toString().substring(editLoc + 6).replace('general', 'details').replace('documents', 'docs');
    var newLoc = window.location.toString().substring(0,editLoc).replace('/games', '').replace('/edit', '').replace('/mods/', '/mods/edit/');
    if (tabName.length > 0) {
        newLoc += '?step=' + tabName;
    }
    //console.log('new location: ' + newLoc);
    window.location.replace(newLoc);
}