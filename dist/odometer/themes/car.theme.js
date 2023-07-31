"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CAR_THEME = "\n    @import url(\"//fonts.googleapis.com/css?family=Arimo\");\n    .odometer.odometer-auto-theme,\n    .odometer.odometer-theme-car {\n        display: inline-block;\n        vertical-align: middle;\n        *vertical-align: auto;\n        *zoom: 1;\n        *display: inline;\n        position: relative;\n    }\n    .odometer.odometer-auto-theme .odometer-digit,\n    .odometer.odometer-theme-car .odometer-digit {\n        display: inline-block;\n        vertical-align: middle;\n        *vertical-align: auto;\n        *zoom: 1;\n        *display: inline;\n        position: relative;\n    }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,\n    .odometer.odometer-theme-car .odometer-digit .odometer-digit-spacer {\n        display: inline-block;\n        vertical-align: middle;\n        *vertical-align: auto;\n        *zoom: 1;\n        *display: inline;\n        visibility: hidden;\n    }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,\n    .odometer.odometer-theme-car .odometer-digit .odometer-digit-inner {\n        text-align: left;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        overflow: hidden;\n    }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon,\n    .odometer.odometer-theme-car .odometer-digit .odometer-ribbon {\n        display: block;\n    }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,\n    .odometer.odometer-theme-car .odometer-digit .odometer-ribbon-inner {\n        display: block;\n        -webkit-backface-visibility: hidden;\n    }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-value,\n    .odometer.odometer-theme-car .odometer-digit .odometer-value {\n        display: block;\n        -webkit-transform: translateZ(0);\n    }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value,\n    .odometer.odometer-theme-car .odometer-digit .odometer-value.odometer-last-value {\n        position: absolute;\n    }\n    .odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,\n    .odometer.odometer-theme-car.odometer-animating-up .odometer-ribbon-inner {\n        -webkit-transition: -webkit-transform 2s;\n        -moz-transition: -moz-transform 2s;\n        -ms-transition: -ms-transform 2s;\n        -o-transition: -o-transform 2s;\n        transition: transform 2s;\n    }\n    .odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner,\n    .odometer.odometer-theme-car.odometer-animating-up.odometer-animating .odometer-ribbon-inner {\n        -webkit-transform: translateY(-100%);\n        -moz-transform: translateY(-100%);\n        -ms-transform: translateY(-100%);\n        -o-transform: translateY(-100%);\n        transform: translateY(-100%);\n    }\n    .odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,\n    .odometer.odometer-theme-car.odometer-animating-down .odometer-ribbon-inner {\n        -webkit-transform: translateY(-100%);\n        -moz-transform: translateY(-100%);\n        -ms-transform: translateY(-100%);\n        -o-transform: translateY(-100%);\n        transform: translateY(-100%);\n    }\n    .odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner,\n    .odometer.odometer-theme-car.odometer-animating-down.odometer-animating .odometer-ribbon-inner {\n        -webkit-transition: -webkit-transform 2s;\n        -moz-transition: -moz-transform 2s;\n        -ms-transition: -ms-transform 2s;\n        -o-transition: -o-transform 2s;\n        transition: transform 2s;\n        -webkit-transform: translateY(0);\n        -moz-transform: translateY(0);\n        -ms-transform: translateY(0);\n        -o-transform: translateY(0);\n        transform: translateY(0);\n    }\n    .odometer.odometer-auto-theme,\n    .odometer.odometer-theme-car {\n        -moz-border-radius: 0.34em;\n        -webkit-border-radius: 0.34em;\n        border-radius: 0.34em;\n        font-family: \"Arimo\", monospace;\n        padding: 0.15em;\n        background: #000;\n        color: #eee0d3;\n    }\n    .odometer.odometer-auto-theme .odometer-digit,\n    .odometer.odometer-theme-car .odometer-digit {\n        -moz-box-shadow: inset 0 0 0.3em rgba(0, 0, 0, 0.8);\n        -webkit-box-shadow: inset 0 0 0.3em rgba(0, 0, 0, 0.8);\n        box-shadow: inset 0 0 0.3em rgba(0, 0, 0, 0.8);\n        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzMzMzMzMyIvPjxzdG9wIG9mZnNldD0iNDAlIiBzdG9wLWNvbG9yPSIjMzMzMzMzIi8+PHN0b3Agb2Zmc2V0PSI2MCUiIHN0b3AtY29sb3I9IiMxMDEwMTAiLz48c3RvcCBvZmZzZXQ9IjgwJSIgc3RvcC1jb2xvcj0iIzMzMzMzMyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzMzMzMzMyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');\n        background-size: 100%;\n        background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #333333), color-stop(40%, #333333), color-stop(60%, #101010), color-stop(80%, #333333), color-stop(100%, #333333));\n        background-image: -moz-linear-gradient(top, #333333 0%, #333333 40%, #101010 60%, #333333 80%, #333333 100%);\n        background-image: -webkit-linear-gradient(top, #333333 0%, #333333 40%, #101010 60%, #333333 80%, #333333 100%);\n        background-image: linear-gradient(to bottom, #333333 0%, #333333 40%, #101010 60%, #333333 80%, #333333 100%);\n        padding: 0 0.15em;\n    }\n    .odometer.odometer-auto-theme .odometer-digit:first-child,\n    .odometer.odometer-theme-car .odometer-digit:first-child {\n        -moz-border-radius: 0.2em 0 0 0.2em;\n        -webkit-border-radius: 0.2em;\n        border-radius: 0.2em 0 0 0.2em;\n    }\n    .odometer.odometer-auto-theme .odometer-digit:last-child,\n    .odometer.odometer-theme-car .odometer-digit:last-child {\n        -moz-border-radius: 0 0.2em 0.2em 0;\n        -webkit-border-radius: 0;\n        border-radius: 0 0.2em 0.2em 0;\n        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2VlZTBkMyIvPjxzdG9wIG9mZnNldD0iNDAlIiBzdG9wLWNvbG9yPSIjZWVlMGQzIi8+PHN0b3Agb2Zmc2V0PSI2MCUiIHN0b3AtY29sb3I9IiNiYmFhOWEiLz48c3RvcCBvZmZzZXQ9IjgwJSIgc3RvcC1jb2xvcj0iI2VlZTBkMyIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2VlZTBkMyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');\n        background-size: 100%;\n        background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #eee0d3), color-stop(40%, #eee0d3), color-stop(60%, #bbaa9a), color-stop(80%, #eee0d3), color-stop(100%, #eee0d3));\n        background-image: -moz-linear-gradient(top, #eee0d3 0%, #eee0d3 40%, #bbaa9a 60%, #eee0d3 80%, #eee0d3 100%);\n        background-image: -webkit-linear-gradient(top, #eee0d3 0%, #eee0d3 40%, #bbaa9a 60%, #eee0d3 80%, #eee0d3 100%);\n        background-image: linear-gradient(to bottom, #eee0d3 0%, #eee0d3 40%, #bbaa9a 60%, #eee0d3 80%, #eee0d3 100%);\n        background-color: #eee0d3;\n        color: #000;\n    }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,\n    .odometer.odometer-theme-car .odometer-digit .odometer-digit-inner {\n        left: 0.15em;\n    }\n    .odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,\n    .odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner,\n    .odometer.odometer-theme-car.odometer-animating-up .odometer-ribbon-inner,\n    .odometer.odometer-theme-car.odometer-animating-down.odometer-animating .odometer-ribbon-inner {\n        -webkit-transition-timing-function: linear;\n        -moz-transition-timing-function: linear;\n        -ms-transition-timing-function: linear;\n        -o-transition-timing-function: linear;\n        transition-timing-function: linear;\n    }\n";
//# sourceMappingURL=car.theme.js.map