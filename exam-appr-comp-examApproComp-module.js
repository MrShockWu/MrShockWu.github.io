(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exam-appr-comp-examApproComp-module"],{

/***/ "./src/app/pages/tzb/exam-appr-comp/examApproComp.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/examApproComp.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExamApproCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamApproCompComponent", function() { return ExamApproCompComponent; });
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

//工作流
var ExamApproCompComponent = /** @class */ (function () {
    function ExamApproCompComponent() {
    }
    ExamApproCompComponent.prototype.ngOnInit = function () {
    };
    ExamApproCompComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workflow',
            template: '<router-outlet></router-outlet>',
        }),
        __metadata("design:paramtypes", [])
    ], ExamApproCompComponent);
    return ExamApproCompComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/examApproComp.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/examApproComp.module.ts ***!
  \******************************************************************/
/*! exports provided: ExamApproCompModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamApproCompModule", function() { return ExamApproCompModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../service/basis/authority/authority.service */ "./src/app/service/basis/authority/authority.service.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var _examApproComp_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examApproComp.routing */ "./src/app/pages/tzb/exam-appr-comp/examApproComp.routing.ts");
/* harmony import */ var _examApproComp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examApproComp.component */ "./src/app/pages/tzb/exam-appr-comp/examApproComp.component.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//客户组件

//页面
 //工作流

var ExamApproCompModule = /** @class */ (function () {
    function ExamApproCompModule() {
    }
    ExamApproCompModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_6__["FrameworkModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_3__["NgxEchartsModule"],
                _examApproComp_routing__WEBPACK_IMPORTED_MODULE_4__["ExamApproCompRouting"]
            ],
            declarations: [
                _examApproComp_component__WEBPACK_IMPORTED_MODULE_5__["ExamApproCompComponent"],
            ],
            entryComponents: [],
            providers: [
                _service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_2__["AuthorityService"],
            ]
        })
    ], ExamApproCompModule);
    return ExamApproCompModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/examApproComp.routing.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/examApproComp.routing.ts ***!
  \*******************************************************************/
/*! exports provided: ExamApproCompRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamApproCompRouting", function() { return ExamApproCompRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _examApproComp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examApproComp.component */ "./src/app/pages/tzb/exam-appr-comp/examApproComp.component.ts");

//页面
 //工作流
var routes = [
    {
        path: '',
        component: _examApproComp_component__WEBPACK_IMPORTED_MODULE_1__["ExamApproCompComponent"],
        children: [
            { path: 'custom-workflow', loadChildren: './custom/flow-custom.module#CustomWorkflowModule' },
        ]
    },
];
var ExamApproCompRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


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
//# sourceMappingURL=exam-appr-comp-examApproComp-module.js.map