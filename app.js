require.config({
    paths: {
        handlebars: "lib/handlebars",
        text: "lib/text",
        hbs: "lib/hbs",
        mobile_detect: [
            '//cdn.jsdelivr.net/mobile-detect.js/1.3.2/mobile-detect.min.js',
            "lib/mobile-detect"
        ]
    },
    shim: {
        handlebars: {
            exports: "Handlebars"
        }
    }
});
define('app', ['js/router', 'js/utils'], function(Router, Utils) {
    Router.init();
    var f7 = new Framework7({
        modalTitle: 'Contacts7',
        swipePanel: 'left',
        animateNavBackIcon: true
    });
    var mainView = f7.addView('.view-main', {
        dynamicNavbar: true
    });

    return {
        f7: f7,
        mainView: mainView,
        router: Router,
        utils: Utils
    };
});
