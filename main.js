(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/pages.module": [
		"./src/pages/pages.module.ts",
		"pages-pages-module"
	],
	"./template-example/template-example.module": [
		"./src/pages/template-example/template-example.module.ts",
		"template-example-template-example-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app-reuse-strategy/app-reuse-strategy.ts":
/*!******************************************************!*\
  !*** ./src/app-reuse-strategy/app-reuse-strategy.ts ***!
  \******************************************************/
/*! exports provided: AppReuseStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppReuseStrategy", function() { return AppReuseStrategy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppReuseStrategy = /** @class */ (function () {
    function AppReuseStrategy() {
    }
    AppReuseStrategy_1 = AppReuseStrategy;
    /** 进入路由触发，判断是否是同一路由 */
    AppReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return future.routeConfig === curr.routeConfig;
    };
    /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断，这里判断是否有data数据判断是否复用 */
    AppReuseStrategy.prototype.shouldDetach = function (route) {
        var data = this.getRouteData(route);
        if (data) {
            return true;
        }
        return false;
    };
    /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
    AppReuseStrategy.prototype.store = function (route, handle) {
        var url = this.getFullRouteUrl(route);
        var data = this.getRouteData(route);
        if (AppReuseStrategy_1.waitDelete && AppReuseStrategy_1.waitDelete === url) {
            // 如果待删除是当前路由，且未存储过则不存储快照
            AppReuseStrategy_1.waitDelete = null;
            return null;
        }
        else {
            // 如果待删除是当前路由，且存储过则不存储快照
            if (AppReuseStrategy_1.currentDelete &&
                AppReuseStrategy_1.currentDelete === url) {
                AppReuseStrategy_1.currentDelete = null;
                return null;
            }
            else {
                AppReuseStrategy_1.routeCache.set(url, { handle: handle, data: data });
                this.addRedirectsRecursively(route);
            }
        }
    };
    /** 若 path 在缓存中有的都认为允许还原路由 */
    AppReuseStrategy.prototype.shouldAttach = function (route) {
        var url = this.getFullRouteUrl(route);
        return AppReuseStrategy_1.routeCache.has(url);
    };
    /** 从缓存中获取快照，若无则返回nul */
    AppReuseStrategy.prototype.retrieve = function (route) {
        var url = this.getFullRouteUrl(route);
        var data = this.getRouteData(route);
        return data && AppReuseStrategy_1.routeCache.has(url)
            ? AppReuseStrategy_1.routeCache.get(url).handle
            : null;
    };
    AppReuseStrategy.prototype.addRedirectsRecursively = function (route) {
        var _this = this;
        var config = route.routeConfig;
        if (config) {
            if (!config.loadChildren) {
                var routeFirstChild = route.firstChild;
                var routeFirstChildUrl = routeFirstChild
                    ? this.getRouteUrlPaths(routeFirstChild).join("/")
                    : "";
                var childConfigs = config.children;
                if (childConfigs) {
                    var childConfigWithRedirect = childConfigs.find(function (c) { return c.path === "" && !!c.redirectTo; });
                    if (childConfigWithRedirect) {
                        childConfigWithRedirect.redirectTo = routeFirstChildUrl;
                    }
                }
            }
            route.children.forEach(function (childRoute) {
                return _this.addRedirectsRecursively(childRoute);
            });
        }
    };
    AppReuseStrategy.prototype.getFullRouteUrl = function (route) {
        return this.getFullRouteUrlPaths(route)
            .filter(Boolean)
            .join("/")
            .replace("/", "_");
    };
    AppReuseStrategy.prototype.getFullRouteUrlPaths = function (route) {
        var paths = this.getRouteUrlPaths(route);
        return route.parent
            ? this.getFullRouteUrlPaths(route.parent).concat(paths) : paths;
    };
    AppReuseStrategy.prototype.getRouteUrlPaths = function (route) {
        return route.url.map(function (urlSegment) { return urlSegment.path; });
    };
    AppReuseStrategy.prototype.getRouteData = function (route) {
        return route.routeConfig && route.routeConfig.data;
    };
    /** 用于删除路由快照*/
    AppReuseStrategy.deleteRouteSnapshot = function (url) {
        if (url[0] === "/") {
            url = url.substring(1);
        }
        url = url.replace("/", "_");
        if (AppReuseStrategy_1.routeCache.has(url)) {
            AppReuseStrategy_1.routeCache.delete(url);
            AppReuseStrategy_1.currentDelete = url;
        }
        else {
            AppReuseStrategy_1.waitDelete = url;
        }
    };
    var AppReuseStrategy_1;
    AppReuseStrategy.routeCache = new Map();
    AppReuseStrategy = AppReuseStrategy_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AppReuseStrategy);
    return AppReuseStrategy;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        // 懒加载后续模块
        children: [
            { path: '', loadChildren: '../pages/pages.module#PagesModule' }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import { SharedService } from '../services/shared.service'; 
var AppComponent = /** @class */ (function () {
    function AppComponent(
    // private sharedService: SharedService
    ) {
        // this.sharedService.getMessage().subscribe(value => {
        //   console.log(value);
        // })
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_reuse_strategy_app_reuse_strategy__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app-reuse-strategy/app-reuse-strategy */ "./src/app-reuse-strategy/app-reuse-strategy.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");













// 页面

Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            ],
            providers: [
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["zh_CN"] },
                // 注册路由重用服务提供商
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouteReuseStrategy"], useClass: app_reuse_strategy_app_reuse_strategy__WEBPACK_IMPORTED_MODULE_12__["AppReuseStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <form\n    nz-form\n    [formGroup]=\"validateForm\"\n    class=\"login-form\"\n    (ngSubmit)=\"submitForm()\"\n  >\n    <nz-form-item>\n      <nz-form-control>\n        <nz-input-group [nzPrefix]=\"prefixUser\">\n          <input\n            type=\"text\"\n            nz-input\n            formControlName=\"userName\"\n            placeholder=\"Username\"\n          />\n        </nz-input-group>\n        <nz-form-explain\n          *ngIf=\"\n            validateForm.get('userName')?.dirty &&\n            validateForm.get('userName')?.errors\n          \"\n          >Please input your username!</nz-form-explain\n        >\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-control>\n        <nz-input-group [nzPrefix]=\"prefixLock\">\n          <input\n            type=\"password\"\n            nz-input\n            formControlName=\"password\"\n            placeholder=\"Password\"\n          />\n        </nz-input-group>\n        <nz-form-explain\n          *ngIf=\"\n            validateForm.get('password')?.dirty &&\n            validateForm.get('password')?.errors\n          \"\n          >Please input your Password!</nz-form-explain\n        >\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-control>\n        <label nz-checkbox formControlName=\"remember\">\n          <span>记住账户</span>\n        </label>\n        <a class=\"login-form-forgot\" class=\"login-form-forgot\">忘记密码</a>\n        <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\">\n          登 录\n        </button>\n        Or\n        <a href=\"\">注册账户</a>\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n  <ng-template #prefixUser><i nz-icon type=\"user\"></i></ng-template>\n  <ng-template #prefixLock><i nz-icon type=\"lock\"></i></ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .login .login-form {\n    max-width: 300px; }\n  .login .login-form-forgot {\n    float: right; }\n  .login .login-form-button {\n    width: 100%; }\n  .login .ant-form {\n    background: #dbe5ef;\n    padding: 20px 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXG15cHJvamVjdFxcbmctem9ycm8tZGVtby9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBO0VBTHpCO0lBT0ksZ0JBQWdCLEVBQUE7RUFQcEI7SUFXSSxZQUFZLEVBQUE7RUFYaEI7SUFlSSxXQUFXLEVBQUE7RUFmZjtJQWtCSSxtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbntcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLmxvZ2luLWZvcm0ge1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIH1cbiAgXG4gIC5sb2dpbi1mb3JtLWZvcmdvdCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIFxuICAubG9naW4tZm9ybS1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5hbnQtZm9ybXtcbiAgICBiYWNrZ3JvdW5kOiAjZGJlNWVmO1xuICAgIHBhZGRpbmc6IDIwcHggNTBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.validateForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            remember: [true]
        });
    };
    LoginComponent.prototype.submitForm = function () {
        for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        console.log("提交");
        this.router.navigate(["home"]);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\myproject\ng-zorro-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map