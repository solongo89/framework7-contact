define(["app", "js/login/loginView"], function(app, LoginView) {

	/**
	 * Bindings array. Bind DOM event to some handler function in controller
	 * @type {*[]}
	 */
	var bindings = [{
		element: '.btn-login',
		event: 'click',
		handler: doLogin
	}
	];

    function init() {
		LoginView.render({
			bindings: bindings
		});
	}

	function doLogin() {
		var $$ = Dom7;
		app.f7.showIndicator();
		// alert('login clicked'); 
		app.f7.hideIndicator();
		app.f7.closeModal('.login-screen');
	}

    return {
        init: init
    };
});