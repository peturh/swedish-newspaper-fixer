_ini();

function _ini() {
    window.onload = function () {
        console.log("Running this");
        setTimeout(function(){
            $(".article__body--mask .article__lead").css("max-height", "1000px");
            $(".paywall--active").css("display","none");
            $(".article__body--mask .article__premium-content").css("display","block");
        },2000);

    };
}
