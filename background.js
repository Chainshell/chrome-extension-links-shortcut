chrome.commands.onCommand.addListener(function(command) {
  sendCommandToContent(command);
});

function sendCommandToContent(command) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {linkIndex: Number(command)});
});
}