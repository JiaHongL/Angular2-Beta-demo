System.register(['angular2/core', 'angular2/common', './app.modalcomponent', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, app_modalcomponent_1, router_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (app_modalcomponent_1_1) {
                app_modalcomponent_1 = app_modalcomponent_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            /// <reference path="../typings/jquery/jquery.d.ts" />
            // 登入組件
            LoginComponent = (function () {
                function LoginComponent(_router) {
                    this._router = _router;
                    this.user = '';
                    this.password = '';
                    this.user = 'Jhl';
                    this.password = '123';
                    this.msg_status = { text: '' };
                    ;
                    this.is_show_status = { status: true };
                }
                LoginComponent.prototype.onSubmit = function (d) {
                    var is_login = true;
                    if (d.user != 'Jhl') {
                        this.msg_status = { text: '請輸入正確帳號 (Jhl)' };
                        this.is_show_status = { status: false };
                        is_login = false;
                    }
                    if (d.password != '1234') {
                        this.msg_status = { text: '請輸入正確密碼 (1234)' };
                        this.is_show_status = { status: false };
                        is_login = false;
                    }
                    if (is_login == true) {
                        this._router.navigate(['Search', { id: d.user }]);
                    }
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'my-login',
                        styles: ["\n\t\tdiv.main{\n            font-family:Courier;\n            background:#4db6ac;\n            box-shadow:0 2px 5px 0;\n            width:100%;\n            height:100%;\n        }\n        div.content{\n            padding-top:10%;\n        }\n        \n\t"],
                        directives: [common_1.FORM_DIRECTIVES, app_modalcomponent_1.modal_Component],
                        template: "\n    <div class=\"main\">\n        <div class=\"content\">\n            <form class=\"form-signin\"  #f=\"ngForm\"  (ngSubmit)=\"onSubmit(f.value)\">\n                <h2 class=\"form-signin-heading\"></h2>\n                <label  class=\"sr-only\">User</label>\n                <input type=\"text\"  class=\"form-control\" placeholder=\"User\" required=\"\" autofocus=\"\" ngControl=\"user\" [(ngModel)]='user'>\n                <label  class=\"sr-only\">Password</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"\" ngControl=\"password\" [(ngModel)]='password'>\n                <div class=\"checkbox\">\n                </div>\n                <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n            </form>\n        </div>\n    </div>\n    <my-modal [msg]=\"msg_status\" [is_show]=\"is_show_status\"></my-modal>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=app.logincomponent.js.map