if(window.location.href.indexOf('dn')>1){
    function removePaywall() {
        var paywall = document.getElementsByClassName('js-paywall');
        for (var index = 0; index < paywall.length; index++) {
            var element = paywall[index];
            element.parentNode.removeChild(element);
        }
    }
    removePaywall();
}


if(window.location.href.indexOf('di')>1){
//When dom is ready, remove ad header
    $(document).ready(function(){
        console.log('yo')
s
        var body = $('body');
        // Append menu button to navbar instead
        var menu = body.find('.di_header__menu').css('margin', '5px 0 0 15px');
        var navbar = body.find('.di_top-nav__main');

        navbar.prepend(menu);

        // Remove big fat header which makes the page useless on smaller screens

        body.find('.di_header').remove();

        //Remove for both small screen and big screen view
        body.find('.di_panorama-compensation').css('height',0);
        body.find('.di_panorama.js_panorama').css('height',0);
        body.find('.di_panorama-wrapper').css('height',0);
        //Untested, but fixed the small, small bar at the top on desktop
        body.find('.di_panorama').css('top','-6px');
    });

//Run the init() method
    init();
    function init() {
        //When window loads
        window.onload = function () {
            //Timeout to run just after the other stuff, no "real" timeout needed
            var body = $('body');
            //Remove the paywall
            body.find('.paywall-content').css('height','');
        };
    }

}
