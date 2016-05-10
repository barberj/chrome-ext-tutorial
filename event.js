(function() {
  'use strict';
  console.log('in the background');

  function genericOnClick(info, tab) {
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
  }

  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "menu1") {
      genericOnClick(info,tab)
    }
  });

  chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: 'My menu',
        id: 'menu1',
        contexts: ['all'],
    });
  });
})();
