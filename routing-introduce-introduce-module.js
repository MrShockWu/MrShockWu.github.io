(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routing-introduce-introduce-module"],{

/***/ "./src/app/@uisftech/view/routing/introduce/introduce.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/introduce/introduce.module.ts ***!
  \**********************************************************************/
/*! exports provided: IntroduceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroduceModule", function() { return IntroduceModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _introduce_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./introduce.routing */ "./src/app/@uisftech/view/routing/introduce/introduce.routing.ts");
/* harmony import */ var app_pages_tzb_custom_work_rask_work_rask_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/work-rask/work-rask.module */ "./src/app/pages/tzb/custom/work-rask/work-rask.module.ts");
/* harmony import */ var _pages_tzb_custom_work_rask_credit_intergration_customIntroduce_customIntroduce_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduce.module */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduce.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { ApplyApprovalComponent } from "app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/applyApproval/applyApproval.component";
// import { RepealApprovalComponent } from "app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/repealApproval/repealApproval.component";


var IntroduceModule = /** @class */ (function () {
    function IntroduceModule() {
    }
    IntroduceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _introduce_routing__WEBPACK_IMPORTED_MODULE_4__["IntroduceRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                app_pages_tzb_custom_work_rask_work_rask_module__WEBPACK_IMPORTED_MODULE_5__["WorkRaskModule"],
                _pages_tzb_custom_work_rask_credit_intergration_customIntroduce_customIntroduce_module__WEBPACK_IMPORTED_MODULE_6__["CustomIntroduceModule"]
            ],
            declarations: [
            // ApplyApprovalComponent,
            // RepealApprovalComponent,
            ],
            providers: []
        })
    ], IntroduceModule);
    return IntroduceModule;
}());



/***/ }),

/***/ "./src/app/@uisftech/view/routing/introduce/introduce.routing.ts":
/*!***********************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/introduce/introduce.routing.ts ***!
  \***********************************************************************/
/*! exports provided: routes, IntroduceRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroduceRouting", function() { return IntroduceRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_work_rask_credit_intergration_customIntroduce_applyApproval_applyApproval_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/applyApproval/applyApproval.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/applyApproval/applyApproval.component.ts");
/* harmony import */ var app_pages_tzb_custom_work_rask_credit_intergration_customIntroduce_repealApproval_repealApproval_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/repealApproval/repealApproval.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/repealApproval/repealApproval.component.ts");



var routes = [
    {
        path: 'cusIntroduceApply/a/:applyId/:operationType',
        component: app_pages_tzb_custom_work_rask_credit_intergration_customIntroduce_applyApproval_applyApproval_component__WEBPACK_IMPORTED_MODULE_1__["ApplyApprovalComponent"]
    },
    {
        path: 'cusIntroduceRela/:operationNum/:operationType',
        component: app_pages_tzb_custom_work_rask_credit_intergration_customIntroduce_repealApproval_repealApproval_component__WEBPACK_IMPORTED_MODULE_2__["RepealApprovalComponent"]
    }
];
var IntroduceRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=routing-introduce-introduce-module.js.map