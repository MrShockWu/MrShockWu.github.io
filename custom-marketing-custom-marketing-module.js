(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-marketing-custom-marketing-module"],{

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-marketing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-marketing.module.ts ***!
  \******************************************************************************/
/*! exports provided: CusMaketingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusMaketingModule", function() { return CusMaketingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_marketing_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-marketing.routing */ "./src/app/pages/tzb/custom/custom-marketing/custom-marketing.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { CustomProgressDetailComponent } from './marketing/custom-progress/custom-progress-detail/custom-progress-detail.component';
var CusMaketingModule = /** @class */ (function () {
    function CusMaketingModule() {
    }
    CusMaketingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _custom_marketing_routing__WEBPACK_IMPORTED_MODULE_1__["CusMarketingRouting"],
            ],
            declarations: [],
            providers: []
        })
    ], CusMaketingModule);
    return CusMaketingModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-marketing.routing.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-marketing.routing.ts ***!
  \*******************************************************************************/
/*! exports provided: routes, CusMarketingRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusMarketingRouting", function() { return CusMarketingRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/**
 * 客户营销管理
 *
 * 下级需再分 module (客户联系 潜在客户管理 自选客户 客户申领 客户转让 客户分配 客户代管 客户开立)
 */
var routes = [
    {
        path: 'cus-potential', loadChildren: './potential-customer-management/potential-custom.module#PotentialCusModule',
    },
    {
        path: 'group', loadChildren: './group/group.module#GroupModule',
    },
    {
        path: 'cus-open', loadChildren: './custom-open/custom-open.module#CusOpenModule',
    },
    {
        path: 'cus-transfer', loadChildren: './custom-transfer/custom-transfer.module#CusTransferModule',
    },
    {
        path: 'cus-escrow', loadChildren: './custom-escrow/custom-escrow.module#CusEscrowModule',
    },
    {
        path: 'cus-apply', loadChildren: './custom-apply/custom-apply.module#CusApplyModule',
    },
    {
        path: 'cus-allot', loadChildren: './custom-allot/custom-allot.module#CusAllotModule',
    },
    {
        path: 'cus-contact', loadChildren: './custom-contact/custom-contact.module#CusContactModule',
    },
    {
        path: 'cus-manage', loadChildren: './custom-manage/custom-manage.module#CusManageModule',
    },
];
var CusMarketingRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=custom-marketing-custom-marketing-module.js.map