//Run the method
init();
function init() {
    //When window loads
    window.onload = function () {
        //Set timeout, since paywall is not appearing until after 1.5 seconds aprox.
        console.log(location.hostname);

        if (location.hostname == 'www.dn.se') {
            setTimeout(function () {
                //This is the brödtext
                $('.article__body--mask .article__lead').css('max-height', '1000px');
                //This is the klarna one press button buy box
                $('.paywall--active').css('display', 'none');
                //This removes small shadow on brödtext
                console.log($('.article__body-grid-item > p').css('margin-bottom', '2.125rem'));
                //This is the article
                $('.article__body--mask .article__premium-content').css('display', 'block');
            }, 2300);
        }
        else if (location.hostname == 'www.di.se') {
            setTimeout(function () {
                //Assign variable since it's used inside other function block
                var frame;
                //Access the children of the frame, nasty implementation here
                var children = $('frameset').children();
                children.each(function () {
                    //find the frame with the attribute tag name with the value contentFrame
                    if ($(this).attr('name') == "contentFrame") {
                        // Assign this object to frame
                        frame = $(this);
                    }
                });
                //Since frame.contents() is our main selector tree, save it.
                var frameContents = frame.contents();
                //Set the different rules, removes height, and sets max-height, also small margin bottom because of some ugly shadow
                $('.paywall-content', frameContents).css({
                        'height' : "",
                        'max-height' : "3000px",
                        'margin-bottom' : "40px"
                });
                //Remove box where you can pay
                $('#paywall-container', frameContents).css("display" , "none");
                //Sadly this site is so slow we have to have high timeout
            }, 5000);
        }

    };
}
