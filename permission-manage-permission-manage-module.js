(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["permission-manage-permission-manage-module"],{

/***/ "./src/app/pages/tzb/common/base-manage/permission-manage/permission-manage.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/permission-manage/permission-manage.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PermissionManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManageComponent", function() { return PermissionManageComponent; });
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

var PermissionManageComponent = /** @class */ (function () {
    function PermissionManageComponent() {
    }
    PermissionManageComponent.prototype.ngOnInit = function () {
    };
    PermissionManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'perssion-manage',
            template: '<router-outlet></router-outlet>',
        }),
        __metadata("design:paramtypes", [])
    ], PermissionManageComponent);
    return PermissionManageComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/permission-manage/permission-manage.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/permission-manage/permission-manage.module.ts ***!
  \********************************************************************************************/
/*! exports provided: PermissionManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManageModule", function() { return PermissionManageModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _permission_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./permission-manage.component */ "./src/app/pages/tzb/common/base-manage/permission-manage/permission-manage.component.ts");
/* harmony import */ var _http_perssion_manage_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http/perssion-manage.http.service */ "./src/app/pages/tzb/common/base-manage/permission-manage/http/perssion-manage.http.service.ts");
/* harmony import */ var _permission_manage_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./permission-manage.routing */ "./src/app/pages/tzb/common/base-manage/permission-manage/permission-manage.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PermissionManageModule = /** @class */ (function () {
    function PermissionManageModule() {
    }
    PermissionManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _permission_manage_routing__WEBPACK_IMPORTED_MODULE_8__["PermissionManageRouting"]
            ],
            declarations: [
                _permission_manage_component__WEBPACK_IMPORTED_MODULE_6__["PermissionManageComponent"],
            ],
            providers: [
                _http_perssion_manage_http_service__WEBPACK_IMPORTED_MODULE_7__["PerssionManageHttp"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
                app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            ]
        })
    ], PermissionManageModule);
    return PermissionManageModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/permission-manage/permission-manage.routing.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/permission-manage/permission-manage.routing.ts ***!
  \*********************************************************************************************/
/*! exports provided: PermissionManageRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManageRouting", function() { return PermissionManageRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _permission_manage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permission-manage.component */ "./src/app/pages/tzb/common/base-manage/permission-manage/permission-manage.component.ts");


var routes = [
    {
        path: '', component: _permission_manage_component__WEBPACK_IMPORTED_MODULE_1__["PermissionManageComponent"],
        children: [
            { path: '', redirectTo: 'business-resource-manage', pathMatch: 'full' },
            { path: 'business-permit-manage', loadChildren: './business-permit-manage/business-permit-manage.module#BusinessPermitManageModule' },
            { path: 'business-resource-manage', loadChildren: './business-resource-manage/business-resource-manage.module#BusinessResourceManageModule' },
        ]
    },
];
var PermissionManageRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=permission-manage-permission-manage-module.js.map