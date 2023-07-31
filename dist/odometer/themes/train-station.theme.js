"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TRAIN_STATION_THEME = "\n    @import url(\"//fonts.googleapis.com/css?family=Economica\");\n    .odometer.odometer-auto-theme,\n    .odometer.odometer-theme-train-station {\n        display: inline-block;\n        vertical-align: middle;\n        *vertical-align: auto;\n        *zoom: 1;\n        *display: inline;\n        position: relative;\n    }\n    .odometer.odometer-auto-theme .odometer-digit,\n    .odometer.odometer-theme-train-station .odometer-digit {\n        display: inline-block;\n        vertical-align: middle;\n        *vertical-align: auto;\n        *zoom: 1;\n        *display: inline;\n        position: relative;\n    }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-spacer,\n    .odometer.odometer-theme-train-station .odometer-digit .odometer-digit-spacer {\n        display: inline-block;\n        vertical-align: middle;\n        *vertical-align: auto;\n        *zoom: 1;\n        *display: inline;\n        visibility: hidden;\n    }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,\n    .odometer.odometer-theme-train-station .odometer-digit .odometer-digit-inner {\n        text-align: left;\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        overflow: hidden;\n    }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon,\n    .odometer.odometer-theme-train-station .odometer-digit .odometer-ribbon {\n        display: block;\n    }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-ribbon-inner,\n    .odometer.odometer-theme-train-station .odometer-digit .odometer-ribbon-inner {\n        display: block;\n        -webkit-backface-visibility: hidden;\n    }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-value,\n    .odometer.odometer-theme-train-station .odometer-digit .odometer-value {\n        display: block;\n        -webkit-transform: translateZ(0);\n    }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-value.odometer-last-value,\n    .odometer.odometer-theme-train-station .odometer-digit .odometer-value.odometer-last-value {\n        position: absolute;\n    }\n    .odometer.odometer-auto-theme.odometer-animating-up .odometer-ribbon-inner,\n    .odometer.odometer-theme-train-station.odometer-animating-up .odometer-ribbon-inner {\n        -webkit-transition: -webkit-transform 2s;\n        -moz-transition: -moz-transform 2s;\n        -ms-transition: -ms-transform 2s;\n        -o-transition: -o-transform 2s;\n        transition: transform 2s;\n    }\n    .odometer.odometer-auto-theme.odometer-animating-up.odometer-animating .odometer-ribbon-inner,\n    .odometer.odometer-theme-train-station.odometer-animating-up.odometer-animating .odometer-ribbon-inner {\n        -webkit-transform: translateY(-100%);\n        -moz-transform: translateY(-100%);\n        -ms-transform: translateY(-100%);\n        -o-transform: translateY(-100%);\n        transform: translateY(-100%);\n    }\n    .odometer.odometer-auto-theme.odometer-animating-down .odometer-ribbon-inner,\n    .odometer.odometer-theme-train-station.odometer-animating-down .odometer-ribbon-inner {\n        -webkit-transform: translateY(-100%);\n        -moz-transform: translateY(-100%);\n        -ms-transform: translateY(-100%);\n        -o-transform: translateY(-100%);\n        transform: translateY(-100%);\n    }\n    .odometer.odometer-auto-theme.odometer-animating-down.odometer-animating .odometer-ribbon-inner,\n    .odometer.odometer-theme-train-station.odometer-animating-down.odometer-animating .odometer-ribbon-inner {\n        -webkit-transition: -webkit-transform 2s;\n        -moz-transition: -moz-transform 2s;\n        -ms-transition: -ms-transform 2s;\n        -o-transition: -o-transform 2s;\n        transition: transform 2s;\n        -webkit-transform: translateY(0);\n        -moz-transform: translateY(0);\n        -ms-transform: translateY(0);\n        -o-transform: translateY(0);\n        transform: translateY(0);\n    }\n    .odometer.odometer-auto-theme,\n    .odometer.odometer-theme-train-station {\n        font-family: \"Economica\", sans-serif;\n    }\n    .odometer.odometer-auto-theme .odometer-digit,\n    .odometer.odometer-theme-train-station .odometer-digit {\n        display: inline-block;\n        vertical-align: middle;\n        *vertical-align: auto;\n        *zoom: 1;\n        *display: inline;\n        -moz-border-radius: 0.1em;\n        -webkit-border-radius: 0.1em;\n        border-radius: 0.1em;\n        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzExMTExMSIvPjxzdG9wIG9mZnNldD0iMzUlIiBzdG9wLWNvbG9yPSIjMTExMTExIi8+PHN0b3Agb2Zmc2V0PSI1NSUiIHN0b3AtY29sb3I9IiMzMzMzMzMiLz48c3RvcCBvZmZzZXQ9IjU1JSIgc3RvcC1jb2xvcj0iIzExMTExMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzExMTExMSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');\n        background-size: 100%;\n        background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, #111111), color-stop(35%, #111111), color-stop(55%, #333333), color-stop(55%, #111111), color-stop(100%, #111111));\n        background-image: -moz-linear-gradient(top, #111111 0%, #111111 35%, #333333 55%, #111111 55%, #111111 100%);\n        background-image: -webkit-linear-gradient(top, #111111 0%, #111111 35%, #333333 55%, #111111 55%, #111111 100%);\n        background-image: linear-gradient(to bottom, #111111 0%, #111111 35%, #333333 55%, #111111 55%, #111111 100%);\n        background-color: #222;\n        padding: 0 0.15em;\n        color: #fff;\n    }\n    .odometer.odometer-auto-theme .odometer-digit + .odometer-digit,\n    .odometer.odometer-theme-train-station .odometer-digit + .odometer-digit {\n        margin-left: 0.1em;\n    }\n    .odometer.odometer-auto-theme .odometer-digit .odometer-digit-inner,\n    .odometer.odometer-theme-train-station .odometer-digit .odometer-digit-inner {\n        left: 0.15em;\n    }\n";
//# sourceMappingURL=train-station.theme.js.map