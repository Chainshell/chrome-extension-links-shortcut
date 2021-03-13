chrome.runtime.onMessage.addListener((request) => {
    const searchresultLinks = document.getElementsByTagName('h3');
    const requestedlink = searchresultLinks.item(request.linkIndex).childNodes[0];

    requestedlink.click();
});