function removePaywall() {
    var paywall = document.getElementsByClassName('js-paywall');
    for (var index = 0; index < paywall.length; index++) {
        var element = paywall[index];
        element.parentNode.removeChild(element);
    }
}
removePaywall();