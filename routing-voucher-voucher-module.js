(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routing-voucher-voucher-module"],{

/***/ "./src/app/@uisftech/view/routing/voucher/voucher.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/voucher/voucher.module.ts ***!
  \******************************************************************/
/*! exports provided: VoucherModule1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherModule1", function() { return VoucherModule1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _voucher_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voucher.routing */ "./src/app/@uisftech/view/routing/voucher/voucher.routing.ts");
/* harmony import */ var app_pages_tzb_custom_marketing_voucher_voucher_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/marketing/voucher/voucher.module */ "./src/app/pages/tzb/custom/marketing/voucher/voucher.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var VoucherModule1 = /** @class */ (function () {
    function VoucherModule1() {
    }
    VoucherModule1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__["FrameworkModule"],
                _voucher_routing__WEBPACK_IMPORTED_MODULE_4__["VoucherRoutes"],
                app_pages_tzb_custom_marketing_voucher_voucher_module__WEBPACK_IMPORTED_MODULE_5__["VoucherModule"]
                // OrderManageModule
            ],
            declarations: []
        })
    ], VoucherModule1);
    return VoucherModule1;
}());



/***/ }),

/***/ "./src/app/@uisftech/view/routing/voucher/voucher.routing.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/voucher/voucher.routing.ts ***!
  \*******************************************************************/
/*! exports provided: VoucherRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherRoutes", function() { return VoucherRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_marketing_voucher_voucher_applicate_applicate_detail_applicate_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-detail/applicate-detail.component */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-detail/applicate-detail.component.ts");


var routes = [
    {
        //抵用券
        path: 'a/b/c/d/e/:partyId/:partyName/:couponApplyId',
        component: app_pages_tzb_custom_marketing_voucher_voucher_applicate_applicate_detail_applicate_detail_component__WEBPACK_IMPORTED_MODULE_1__["ApplicateDetailComponent"]
    },
];
var VoucherRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=routing-voucher-voucher-module.js.map