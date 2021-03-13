chrome.runtime.onMessage.addListener((request) => {
    const scope = document.getElementById('search');
    const searchresultLinks = scope.getElementsByTagName('a');
    const requestedLink = searchresultLinks.item(request.linkIndex).childNodes[0];

    requestedLink.click();
});