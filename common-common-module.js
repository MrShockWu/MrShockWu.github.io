(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common-common-module"],{

/***/ "./src/app/pages/tzb/common/common.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/tzb/common/common.component.ts ***!
  \******************************************************/
/*! exports provided: CommonPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonPages", function() { return CommonPages; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CommonPages = /** @class */ (function () {
    function CommonPages() {
    }
    CommonPages = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'back-manage-pages',
            template: "<router-outlet></router-outlet>"
        })
    ], CommonPages);
    return CommonPages;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/common.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tzb/common/common.module.ts ***!
  \***************************************************/
/*! exports provided: BackManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackManageModule", function() { return BackManageModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common.routing */ "./src/app/pages/tzb/common/common.routing.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common.component */ "./src/app/pages/tzb/common/common.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BackManageModule = /** @class */ (function () {
    function BackManageModule() {
    }
    BackManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _common_routing__WEBPACK_IMPORTED_MODULE_5__["CommonRouting"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_6__["FrameworkModule"]
            ],
            declarations: [
                _common_component__WEBPACK_IMPORTED_MODULE_7__["CommonPages"],
            ],
            providers: [
                _http_common_http_service__WEBPACK_IMPORTED_MODULE_3__["CommonHttpService"]
            ]
        })
    ], BackManageModule);
    return BackManageModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/common.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/tzb/common/common.routing.ts ***!
  \****************************************************/
/*! exports provided: routes, CommonRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonRouting", function() { return CommonRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.component */ "./src/app/pages/tzb/common/common.component.ts");


var routes = [
    {
        path: '',
        component: _common_component__WEBPACK_IMPORTED_MODULE_1__["CommonPages"],
        children: [
            { path: 'base-manage', loadChildren: './base-manage/base-manage.module#BasekManageModule' }
        ]
    }
];
var CommonRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=common-common-module.js.map