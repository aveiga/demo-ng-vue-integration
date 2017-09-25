webpackJsonp([1,4],{

/***/ 343:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 343;


/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(453);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/aveiga/Projects/local/ng-vue-test/ng-app/src/main.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AppComponent = (function () {
    function AppComponent(_renderer2, _document, elementRef) {
        this._renderer2 = _renderer2;
        this._document = _document;
        this.elementRef = elementRef;
        this.title = 'This is an Angular app simulating the Dashboard!';
        this.show = true;
        this.scriptTag = null;
        //Widget metadata that can and should be retrieved from a service
        this.widgetURL = "http://localhost:8080/build.js";
        this.widgetContainerId = "app";
        this.messageJS = MessageJS.getInstance();
        var that = this;
        this.messageJS.register(this.onMessage);
        setInterval(function () {
            that.messageJS.message("hello from master, widget!", "vue-widget");
        }, 5000);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.querySelector('#widget-wrapper').innerHTML = this.buildWidgetContainerHTML();
    };
    AppComponent.prototype.onMessage = function (obj) {
        console.log(obj);
    };
    AppComponent.prototype.toggleScript = function () {
        if (this.elementRef.nativeElement.querySelector('script')) {
            this.elementRef.nativeElement.removeChild(this.scriptTag);
            this.elementRef.nativeElement.querySelector('#widget-wrapper').innerHTML = this.buildWidgetContainerHTML();
        }
        else {
            this.scriptTag = document.createElement("script");
            this.scriptTag.type = "text/javascript";
            this.scriptTag.src = this.widgetURL;
            this.elementRef.nativeElement.appendChild(this.scriptTag);
        }
    };
    AppComponent.prototype.toggleWidget = function () {
        this.show = !this.show;
    };
    AppComponent.prototype.buildWidgetContainerHTML = function () {
        return "<div id='" + this.widgetContainerId + "'></div>";
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(610),
            styles: [__webpack_require__(609)]
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DOCUMENT */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Renderer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Renderer */]) === 'function' && _a) || Object, Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/aveiga/Projects/local/ng-vue-test/ng-app/src/app.component.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(452);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/aveiga/Projects/local/ng-vue-test/ng-app/src/app.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/aveiga/Projects/local/ng-vue-test/ng-app/src/environment.js.map

/***/ }),

/***/ 609:
/***/ (function(module, exports) {

module.exports = "#widget-wrapper {\n    width: 700px;\n    height: 300px;\n    border: 3px solid steelblue;\n    overflow: auto;\n}"

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<label>Change the title: </label>\n<input [(ngModel)]=\"title\" style=\"width: 500px;\">\n<br/>\n<br/>\n<button (click)=\"toggleScript()\">Toggle Script</button>\n<button (click)=\"toggleWidget()\">Toggle Widget</button>\n<br/>\n<br/>\n<h1>Bellow is an Widget</h1>\n<div id=\"widget-wrapper\" [hidden]=\"!show\"></div>\n<br/>\n<br/>\n<span>More Angular stuff...</span>"

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(344);


/***/ })

},[623]);
//# sourceMappingURL=main.bundle.map