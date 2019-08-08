(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routing-customMindApply-customMindApply-module"],{

/***/ "./src/app/@uisftech/view/routing/customMindApply/customMindApply.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/customMindApply/customMindApply.module.ts ***!
  \**********************************************************************************/
/*! exports provided: OtherCustomMindApplyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCustomMindApplyModule", function() { return OtherCustomMindApplyModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customMindApply_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customMindApply.routing */ "./src/app/@uisftech/view/routing/customMindApply/customMindApply.routing.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_apply_custom_apply_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-apply/custom-apply.module */ "./src/app/pages/tzb/custom/custom-marketing/custom-apply/custom-apply.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 //客户申领
var OtherCustomMindApplyModule = /** @class */ (function () {
    function OtherCustomMindApplyModule() {
    }
    OtherCustomMindApplyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _customMindApply_routing__WEBPACK_IMPORTED_MODULE_4__["OtherCustomMindApplyRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                app_pages_tzb_custom_custom_marketing_custom_apply_custom_apply_module__WEBPACK_IMPORTED_MODULE_5__["CusApplyModule"]
            ],
            declarations: [],
            providers: []
        })
    ], OtherCustomMindApplyModule);
    return OtherCustomMindApplyModule;
}());



/***/ }),

/***/ "./src/app/@uisftech/view/routing/customMindApply/customMindApply.routing.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/customMindApply/customMindApply.routing.ts ***!
  \***********************************************************************************/
/*! exports provided: routes, OtherCustomMindApplyRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCustomMindApplyRouting", function() { return OtherCustomMindApplyRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_apply_subranch_manager_pending_apply_pending_apply_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-apply/subranch-manager/pending-apply/pending-apply.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-apply/subranch-manager/pending-apply/pending-apply.component.ts");

 //客户申领--审批页面
// import { ListDownloadApproveComponent } from "../../../custom/custom-information/advanced-search/list-download-approve/list-download-approve.component";
var routes = [
    {
        //客户申领
        path: 'a/b/c/:applyId',
        component: app_pages_tzb_custom_custom_marketing_custom_apply_subranch_manager_pending_apply_pending_apply_component__WEBPACK_IMPORTED_MODULE_1__["PendingApply"],
    }
];
var OtherCustomMindApplyRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=routing-customMindApply-customMindApply-module.js.map