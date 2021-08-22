window.dataLayer = window.dataLayer || [];

if ((/bot|google|yandex|baidu|bing|msn|duckduckbot|teoma|slurp|crawler|spider|robot|crawling|facebook/i.test(
        navigator.userAgent)) === false && typeof (sessionStorage) != 'undefined' && sessionStorage.getItem(
        'visited') !== 'y') {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML =
        '@media screen and (min-width: 980px) {.t-records {opacity: 0;}.t-records_animated {-webkit-transition: opacity ease-in-out .2s;-moz-transition: opacity ease-in-out .2s;-o-transition: opacity ease-in-out .2s;transition: opacity ease-in-out .2s;}.t-records.t-records_visible {opacity: 1;}}';
    document.getElementsByTagName('head')[0].appendChild(style);
    $(document).ready(function () {
        $('.t-records').addClass('t-records_animated');
        setTimeout(function () {
            $('.t-records').addClass('t-records_visible');
            sessionStorage.setItem('visited', 'y');
        }, 400);
    });
}

var arMapMarkers193630848 = [{
    title: "Москва",
    descr: "",
    lat: "55.732925",
    lng: "37.632156",
}, ];

$('.t801').bind('displayChanged', function () {
    t_slds_updateSlider('193916579');
    t_slds_positionArrows('193916579');
});

var t554__fireRefreshEventOnWindow = function () {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent('resize', true, false);
    window.dispatchEvent(evt);
};

$('.t554').bind('displayChanged', function () {
    t554__fireRefreshEventOnWindow();
});

$(window).resize(function () {
    t462_setBg('193908759');
});

$(document).ready(function () {
    t_sldsInit('193916579');

    setTimeout(function () {
        t754__init('193619540');
    }, 500);

    t462_highlight();

    t462_setBg('193908759');

    setTimeout(function () {
        t_menusub_init('193908759');
    }, 500);

    t802_insta_init('194059134', '');

    setTimeout(function () {
        t898_init('193770283');
    }, 500);
});
