
chrome.browserAction.onClicked.addListener(function (activeTab) {
  chrome.tabs.executeScript({
    code: "window.getSelection().toString();"
  }, function (selection) {
    var newURL = "https://www.google.com/search?q=" + selection[0];
    chrome.tabs.create({ url: newURL });
  });
});


