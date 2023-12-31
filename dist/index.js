"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var odometer_1 = require("./odometer");
var Ng10OdometerModule = Ng10OdometerModule_1 = (function () {
    function Ng10OdometerModule() {}
    Ng10OdometerModule.forRoot = function () {
        return {
            ngModule: Ng10OdometerModule_1
        };
    };
    return Ng10OdometerModule;
}());
Ng10OdometerModule = Ng10OdometerModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [odometer_1.Ng10OdometerComponent],
        exports: [odometer_1.Ng10OdometerComponent]
    })
], Ng10OdometerModule);
exports.Ng10OdometerModule = Ng10OdometerModule;
var Ng10OdometerModule_1;
//# sourceMappingURL=index.js.map