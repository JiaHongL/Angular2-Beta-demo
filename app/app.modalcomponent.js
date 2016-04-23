System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var modal_Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // modal 組件
            modal_Component = (function () {
                function modal_Component() {
                    this.is_show = { status: false };
                    this.msg = { text: '' };
                }
                modal_Component.prototype.CloseModal = function () {
                    this.is_show = { status: true };
                    this.msg = { text: '' };
                };
                modal_Component = __decorate([
                    core_1.Component({
                        selector: 'my-modal',
                        properties: ["msg", "is_show"],
                        styles: ["\n\t\tdiv.main{\n            font-family:Courier;\n            background:#ede7f6;\n            box-shadow:0 2px 5px 0;\n            width:350px;\n            height:200px;\n            position:fixed; \n            top:50%;\n            left:50%;\n            margin-top:-100px; \n            margin-left:-175px;\n            border-radius: 10px;\n        }\n        .header{\n            height:25px;\n            background:#90caf9;\n            border-top-left-radius: 10px;\n            border-top-right-radius: 10px;\n            text-align:center;\n        }\n        .header span{\n               color:#FFFFFF;\n               line-height:25px;          \n        }\n        .content{\n            height:140px;\n            line-height:140px; \n            text-align:center;\n            font-size:25px;\n            color:red;\n        }\n        .footer{\n            height:35px;\n            border-bottom-left-radius: 10px;\n            border-bottom-right-radius: 10px;\n            text-align:center;\n        }\n        \n\t"],
                        template: "\n    <div [hidden]=\"is_show.status\">\n        <div class=\"main\">\n           <div class=\"header\">\n                <span>\u63D0\u793A</span>\n           </div>\n           <div class=\"content\">\n                <span>{{msg.text}}</span>\n           </div>\n           <div class=\"footer\">\n                <button class=\"btn btn-sm btn-info \" (click)=\"CloseModal()\">close</button>\n           </div>\n        </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], modal_Component);
                return modal_Component;
            }());
            exports_1("modal_Component", modal_Component);
        }
    }
});
//# sourceMappingURL=app.modalcomponent.js.map