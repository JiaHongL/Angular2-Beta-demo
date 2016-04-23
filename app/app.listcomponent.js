System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var SortByNamePipe, ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            /// <reference path="../typings/jquery/jquery.d.ts" />
            /// <reference path="../typings/lodash/lodash.d.ts" />
            // 自訂模糊收尋
            SortByNamePipe = (function () {
                function SortByNamePipe() {
                }
                SortByNamePipe.prototype.transform = function (value, _a) {
                    var queryString = _a[0];
                    if (value == null) {
                        return null;
                    }
                    if (queryString != null && queryString != '') {
                        var return_data = [];
                        for (var key in value) {
                            var t = JSON.stringify(value[key]);
                            var result = (t.match(queryString));
                            if (result != null) {
                                return_data.push(value[key]);
                            }
                        }
                        return return_data;
                    }
                    else {
                        return value;
                    }
                };
                SortByNamePipe = __decorate([
                    core_1.Pipe({
                        name: 'FuzzySearch' /*,
                        pure: false,Allen Copeland*/
                    }), 
                    __metadata('design:paramtypes', [])
                ], SortByNamePipe);
                return SortByNamePipe;
            }());
            exports_1("SortByNamePipe", SortByNamePipe);
            //list 組件
            ListComponent = (function () {
                function ListComponent() {
                    this.pass_data = [];
                }
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-list',
                        styles: ["\n        .list .table{\n           color:black;\n           width:90%;\n           margin: 0px auto;\n        }\n\t"],
                        directives: [common_1.FORM_DIRECTIVES],
                        pipes: [SortByNamePipe],
                        properties: ["pass_data", "search_data"],
                        template: "\n     <div class=\"list\">\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>#</th>\n                    <th>name</th>\n                    <th>age</th>\n                    <th>gender</th>\n                    <th>company</th>\n                    <th>email</th>\n                    <th>phone</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"#list of pass_data |FuzzySearch:search_data  , #i=index \">\n                    <th scope=\"row\">{{i}}</th>\n                    <td>{{list.name}}</td>\n                    <td>{{list.age}}</td>\n                    <td>{{list.gender}}</td>\n                    <td>{{list.company}}</td>\n                    <td>{{list.email}}</td>\n                    <td>{{list.phone}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=app.listcomponent.js.map