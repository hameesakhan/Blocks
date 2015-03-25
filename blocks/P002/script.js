$(function() {

///////////////////////////////
// Fix the Home Height
///////////////////////////////

    var setHomeBannerHeight = function() {
        var homeHeight= $(window).height();
        $('#header-overlay').height(homeHeight);
    }

    setHomeBannerHeight();

 });