(function () {
    $('body').append($('<div class="inverted-page-mask">')
        .append($('<div class="inverted-page">')
        .append('<div class="inverted-page-content>')
        .html($('.page').html())));
    (function (fn) {
        $(document).on('mousemove', fn);
        $(document).on('load', fn);
    })(function (e) {
        var pageX = e.pageX, pageY = e.pageY;
        $('.inverted-page-mask').css({
            top: pageY,
            left: pageX
        });
        $('.cursor').css({
            top: pageY,
            left: pageX
        });
        $('.cursor-2').css({
            top: pageY,
            left: pageX
        });
        $('.inverted-page').css({
            top: 0 - pageY,
            left: 0 - pageX
        });
    });
    $('.social').on('mouseenter', function (e) {
        $('.inverted-page-mask').addClass('show');
        $('.cursors').removeClass('show');
    });
    $('.social').on('mouseleave', function (e) {
        $('.inverted-page-mask').removeClass('show');
        $('.cursors').addClass('show');
    });
    $('body').on('click', function (e) {
        $('.cursor-2').addClass('click');
        setTimeout(function () { return $('.cursor-2').removeClass('click'); }, 200);
    });
})();
