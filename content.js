chrome.runtime.onMessage.addListener((request) => {
    const scope = document.getElementById('search');
    console.log(scope);
    const searchresultLinks = scope.getElementsByTagName('a');
    console.log(searchresultLinks);
    const requestedLink = searchresultLinks.item(request.linkIndex).childNodes[0];
    console.log(requestedLink);

    requestedLink.click();
});