chrome.runtime.onMessage.addListener((request) => {
    const searchresultLinks = document.getElementsByClassName('r');
    const requestedlink = searchresultLinks.item(request.linkIndex).childNodes[0];

    requestedlink.click();
});