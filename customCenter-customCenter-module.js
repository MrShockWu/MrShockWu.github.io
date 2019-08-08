(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customCenter-customCenter-module"],{

/***/ "./src/app/pages/tzb/customCenter/customCenter.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customCenter.component.ts ***!
  \******************************************************************/
/*! exports provided: CustomCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCenter", function() { return CustomCenter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomCenter = /** @class */ (function () {
    function CustomCenter() {
    }
    CustomCenter.prototype.ngOnInit = function () {
    };
    CustomCenter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-center',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], CustomCenter);
    return CustomCenter;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customCenter.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customCenter.module.ts ***!
  \***************************************************************/
/*! exports provided: TzbCustomCenterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TzbCustomCenterModule", function() { return TzbCustomCenterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../service/basis/authority/authority.service */ "./src/app/service/basis/authority/authority.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _customCenter_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customCenter.routing */ "./src/app/pages/tzb/customCenter/customCenter.routing.ts");
/* harmony import */ var _customCenter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customCenter.component */ "./src/app/pages/tzb/customCenter/customCenter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//客户组件

//页面

// import { LoanDepositChangeComponent } from 'app/pages/tzb/custom/loan-deposit-change/loan-deposit-change.component';


var TzbCustomCenterModule = /** @class */ (function () {
    function TzbCustomCenterModule() {
    }
    TzbCustomCenterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__["SharedBasisModule"],
                _customCenter_routing__WEBPACK_IMPORTED_MODULE_5__["CustomCenterRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [
                _customCenter_component__WEBPACK_IMPORTED_MODULE_6__["CustomCenter"],
            ],
            entryComponents: [],
            exports: [],
            providers: [
                _service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_2__["AuthorityService"]
            ]
        })
    ], TzbCustomCenterModule);
    return TzbCustomCenterModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/customCenter.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/customCenter.routing.ts ***!
  \****************************************************************/
/*! exports provided: CustomCenterRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCenterRouting", function() { return CustomCenterRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customCenter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customCenter.component */ "./src/app/pages/tzb/customCenter/customCenter.component.ts");


var routes = [
    {
        path: '',
        component: _customCenter_component__WEBPACK_IMPORTED_MODULE_1__["CustomCenter"],
        children: [
            { path: 'element-combination', loadChildren: './element-combination/element-combination.module#ElementCombinationModule' },
            { path: 'customer-distribution', loadChildren: './customer-distribution/customer-distribution.module#CustomerDistributionModule' },
            { path: 'credit-cust-allot', loadChildren: './credit-cust-allot/credit-cust.module#CreditCustAllotTModule' },
            { path: 'project-main-manage', loadChildren: './project-main-manage/project-main-manage.module#ProjectMainManageModule' },
        ]
    }
];
var CustomCenterRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/service/basis/authority/authority.config.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/basis/authority/authority.config.ts ***!
  \*************************************************************/
/*! exports provided: AuthorityConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorityConfigService", function() { return AuthorityConfigService; });
var AuthorityConfigService = {
    'querybankOrgTree': 'querybankOrgTree'
};


/***/ }),

/***/ "./src/app/service/basis/authority/authority.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/service/basis/authority/authority.service.ts ***!
  \**************************************************************/
/*! exports provided: AuthorityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorityService", function() { return AuthorityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authority_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authority.config */ "./src/app/service/basis/authority/authority.config.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_http_service1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/http.service1 */ "./src/app/@uisftech/common/service/http.service1.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthorityService = /** @class */ (function () {
    function AuthorityService(httpService) {
        this.httpService = httpService;
    }
    AuthorityService.prototype.querybankOrgTree = function (params) {
        return this.httpService.ajax(app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["API"].IP + _authority_config__WEBPACK_IMPORTED_MODULE_1__["AuthorityConfigService"].querybankOrgTree, params, null);
    };
    AuthorityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_uisftech_common_service_http_service1__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], AuthorityService);
    return AuthorityService;
}());



/***/ })

}]);
//# sourceMappingURL=customCenter-customCenter-module.js.map