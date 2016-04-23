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
    var SelectComponent;
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
            SelectComponent = (function () {
                function SelectComponent() {
                    this.inputKeyUp2 = new core_1.EventEmitter();
                    this.click_data_out = new core_1.EventEmitter();
                    this.keyword = '';
                }
                Object.defineProperty(SelectComponent.prototype, "search_parameter", {
                    set: function (value) {
                        this.inputKeyUp2.emit(value);
                        this.keyword = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                SelectComponent.prototype.click_data = function (d) {
                    this.click_data_out.emit(d);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SelectComponent.prototype, "inputKeyUp2", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SelectComponent.prototype, "click_data_out", void 0);
                SelectComponent = __decorate([
                    core_1.Component({
                        selector: 'my-select',
                        styles: ["\n        .select{\n           color:black;\n           background-color:#4db6ac;;\n           width:90%;\n           margin: 0px auto;\n           padding:25px;\n           text-shadow: 2px 4px 3px rgba(0,0,0,0.3);\n           border-radius: 3px;\n           border-style: solid;\n           border-width: 3px;\n           border-color: rgb(255, 255, 255);\n           border: solid 1px rgba(0,0,0,0.3);\n           border-radius: 5px 5px 5px 5px;\n           box-shadow: -1px -1px 2px hsla(0, 0%, 0%, 0.2), 1px 1px 1px hsla(0, 0%, 0%, 0.15), 1px 1px 1px hsla(0, 0%, 0%, 0.15) inset, -1px -1px 2px hsla(0, 0%, 0%, 0.2) inset;\n        }\n\t"],
                        directives: [common_1.FORM_DIRECTIVES],
                        template: "\n    <div class=\"select\">\n        <div class=\"select-row\">\n            <div class=\"select-col-40\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"\u8ACB\u8F38\u5165\u95DC\u9375\u5B57\" [(ngModel)]=\"search_parameter\">\n            </div>\n            <div class=\"select-col-20\">\n                \u95DC\u9375\u5B57\uFF1A{{keyword}}\n            </div>\n            <div class=\"select-col-5\">\n                <button class=\"btn btn-success\" type=\"submit\" (click)=\"click_data('1000')\" >1000\u7B46</button>\n            </div>\n            <div class=\"select-col-5\">\n                <button class=\"btn btn-success\" type=\"submit\" (click)=\"click_data('2000')\">2000\u7B46</button>\n            </div>\n            <div class=\"select-col-5\">\n                <button class=\"btn btn-success\" type=\"submit\" (click)=\"click_data('5000')\">5000\u7B46</button>\n            </div>\n            <div class=\"select-col-5\">\n                <button class=\"btn btn-warning\" type=\"submit\" (click)=\"click_data('Clear')\" >\u6E05\u9664\u8CC7\u6599</button>\n            </div>\n        </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SelectComponent);
                return SelectComponent;
            }());
            exports_1("SelectComponent", SelectComponent);
        }
    }
});
//# sourceMappingURL=app.selectcomponent.js.map