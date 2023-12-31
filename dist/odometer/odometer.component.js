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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _ = require("lodash");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var odometer_config_1 = require("./odometer.config");
var themes_1 = require("./themes");
var Odometer = require('odometer');
var Ng10OdometerComponent = (function () {
    function Ng10OdometerComponent() {
        this.config = {};
        this.observable = undefined;
        this.animation = undefined;
        this.format = undefined;
        this.theme = undefined;
        this.value = undefined;
        this.duration = undefined;
        this.auto = undefined;
        this.themes = [
            'car',
            'default',
            'digital',
            'minimal',
            'plaza',
            'slot-machine',
            'train-station'
        ];
    }
    Ng10OdometerComponent.prototype.initOdometer = function () {
        if (!_.isUndefined(this.container) &&
            typeof Odometer !== 'undefined') {
            this.odometer = new Odometer({
                el: this.container.nativeElement,
                animation: this.config.animation,
                value: this.config.value,
                duration: this.config.duration,
                format: this.config.format,
                theme: this.config.theme,
            });
            if (!_.isUndefined(this.number) && this.config.auto) {
                this.odometer.update(this.number);
            }
        }
    };
    Ng10OdometerComponent.prototype.initConfig = function () {
        this.config = _.defaults(this.config, new odometer_config_1.Ng10OdometerConfig());
        if (!_.isUndefined(this.animation)) {
            this.config.animation = this.animation;
        }
        if (!_.isUndefined(this.format)) {
            this.config.format = this.format;
        }
        if (!_.isUndefined(this.theme)) {
            this.config.theme = !_.includes(this.themes, this.theme) ? 'default' : this.theme;
        }
        if (!_.isUndefined(this.value)) {
            this.config.value = this.value;
        }
        if (!_.isUndefined(this.duration)) {
            this.config.duration = this.duration;
        }
        if (!_.isUndefined(this.auto)) {
            this.config.auto = this.auto;
        }
        if (!_.includes(this.themes, this.config.theme)) {
            this.config.theme = 'default';
        }
    };
    Ng10OdometerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!_.isUndefined(this.observable) && !this.config.auto) {
            this.subscription = this.observable.subscribe(function (trigger) {
                if (!_.isUndefined(trigger) && trigger) {
                    _this.odometer.update(_this.number);
                }
            });
        }
        this.initConfig();
    };
    Ng10OdometerComponent.prototype.ngOnDestroy = function () {
        if (!_.isUndefined(this.subscription)) {
            this.subscription.unsubscribe();
        }
    };
    Ng10OdometerComponent.prototype.ngOnChanges = function () {
        if (!_.isUndefined(this.number) && !_.isUndefined(this.odometer) && this.config.auto) {
            this.odometer.update(this.number);
        }
    };
    Ng10OdometerComponent.prototype.ngAfterViewInit = function () {
        this.initOdometer();
    };
    return Ng10OdometerComponent;
}());
__decorate([
    core_1.ViewChild('container', {
        read: core_1.ElementRef
    }),
    __metadata("design:type", core_1.ElementRef)
], Ng10OdometerComponent.prototype, "container", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], Ng10OdometerComponent.prototype, "number", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Ng10OdometerComponent.prototype, "config", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", rxjs_1.Observable)
], Ng10OdometerComponent.prototype, "observable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Ng10OdometerComponent.prototype, "animation", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Ng10OdometerComponent.prototype, "format", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Ng10OdometerComponent.prototype, "theme", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], Ng10OdometerComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], Ng10OdometerComponent.prototype, "duration", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Ng10OdometerComponent.prototype, "auto", void 0);
Ng10OdometerComponent = __decorate([
    core_1.Component({
        selector: 'ng10-odometer',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [
            themes_1.CAR_THEME,
            themes_1.DEFAULT_THEME,
            themes_1.DIGITAL_THEME,
            themes_1.MINIMAL_THEME,
            themes_1.PLAZA_THEME,
            themes_1.SLOT_MACHINE_THEME,
            themes_1.TRAIN_STATION_THEME,
            "\n            .odometer,\n            .odometer-inside,\n            .odometer-digit,\n            .odometer-digit-spacer,\n            .odometer-digit-inner,\n            .odometer-ribbon,\n            .odometer-ribbon-inner,\n            .odometer-value,\n            .odometer-formatting-mark {\n                color: inherit;\n                font-size: inherit;\n                font-family: inherit;\n            }\n        ",
        ],
        template: "<div #container></div>"
    })
], Ng10OdometerComponent);
exports.Ng10OdometerComponent = Ng10OdometerComponent;
//# sourceMappingURL=odometer.component.js.map