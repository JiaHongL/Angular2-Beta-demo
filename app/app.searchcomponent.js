System.register(['angular2/core', 'angular2/common', './app.listcomponent', './app.selectcomponent', 'angular2/http', 'angular2/router', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, common_1, app_listcomponent_1, app_selectcomponent_1, http_1, router_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (app_listcomponent_1_1) {
                app_listcomponent_1 = app_listcomponent_1_1;
            },
            function (app_selectcomponent_1_1) {
                app_selectcomponent_1 = app_selectcomponent_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {}],
        execute: function() {
            /// <reference path="../typings/jquery/jquery.d.ts" />
            SearchComponent = (function () {
                function SearchComponent(http, params, _router) {
                    this.http = http;
                    this._router = _router;
                    this.username = params.get('id');
                    this.Search();
                }
                SearchComponent.prototype.input = function (d) {
                    this.search_parameter = d;
                };
                SearchComponent.prototype.Search = function () {
                    var _this = this;
                    this.http.get('app/list500.json').map(function (res) { return res.json(); }).subscribe(function (res) { return _this.list_data = res; });
                };
                SearchComponent.prototype.Loading_data = function (d) {
                    var _this = this;
                    if (d == '1000') {
                        this.http.get('app/list1000.json').map(function (res) { return res.json(); }).subscribe(function (res) { return _this.list_data = res; });
                    }
                    if (d == '2000') {
                        this.http.get('app/list2000.json').map(function (res) { return res.json(); }).subscribe(function (res) { return _this.list_data = res; });
                    }
                    if (d == '5000') {
                        this.http.get('app/list5000.json').map(function (res) { return res.json(); }).subscribe(function (res) { return _this.list_data = res; });
                    }
                    if (d == 'Clear') {
                        this.list_data = [];
                    }
                };
                SearchComponent.prototype.logout = function () {
                    this._router.navigate(['Login']);
                };
                SearchComponent = __decorate([
                    core_1.Component({
                        selector: 'my-search',
                        directives: [common_1.FORM_DIRECTIVES, app_listcomponent_1.ListComponent, app_selectcomponent_1.SelectComponent],
                        providers: [http_1.HTTP_PROVIDERS],
                        styleUrls: ["app/app.searchcomponent.css"],
                        template: "\n    <div class=\"home\">\n        <div class=\"header\">\n            <div style=\"text-align:right;\">\n                <button class=\"btn btn-default btn-green dropdown-toggle no-border-radius no-border  Btn_c_horizon\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" style=\"height:50px;width:120px;\">\n                    <span class=\"avatar\" style=\"float:left;\">\n                        <img src=\"./images/a2.png\" width=\"40\" height=\"40\">\n                        <i class=\"on md b-white bottom\">{{username}}</i>\n                    </span>\n                    <span style=\"float:right;padding-top:15px;\">\n                        <span class=\"padding-left-5 padding-right-5\">\n                        </span>\t\t\t\t  \t\t\n                        <span class=\"caret\"></span>\n                    </span>\n                </button>\n                <ul class=\"dropdown-menu pull-right\">\n                    <li (click)=\"logout()\">\n                        <a>\n                            <span class=\"glyphicon glyphicon-log-in\" aria-hidden=\"true\"></span>  Logout\n                        </a>\n                   </li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"content\">\n            <div class=\"select\">\n                <my-select (inputKeyUp2)=\"input($event)\" (click_data_out)=\"Loading_data($event)\" ></my-select>\n            </div>    \n            <my-list [pass_data]=\"list_data\" [search_data]=\"search_parameter\"></my-list>\n        </div>\n    </div>\n   "
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.RouteParams, router_1.Router])
                ], SearchComponent);
                return SearchComponent;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
//# sourceMappingURL=app.searchcomponent.js.map