(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routing-cusMarking-cusMarking-module"],{

/***/ "./src/app/@uisftech/view/routing/cusMarking/cusMarking.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/cusMarking/cusMarking.module.ts ***!
  \************************************************************************/
/*! exports provided: OtherCusMarkingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCusMarkingModule", function() { return OtherCusMarkingModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cusMarking_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cusMarking.routing */ "./src/app/@uisftech/view/routing/cusMarking/cusMarking.routing.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_escrow_custom_escrow_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-escrow/custom-escrow.module */ "./src/app/pages/tzb/custom/custom-marketing/custom-escrow/custom-escrow.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 //客户代管
var OtherCusMarkingModule = /** @class */ (function () {
    function OtherCusMarkingModule() {
    }
    OtherCusMarkingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _cusMarking_routing__WEBPACK_IMPORTED_MODULE_4__["OtherCusMarkingRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                app_pages_tzb_custom_custom_marketing_custom_escrow_custom_escrow_module__WEBPACK_IMPORTED_MODULE_5__["CusEscrowModule"]
            ],
            declarations: [],
            providers: []
        })
    ], OtherCusMarkingModule);
    return OtherCusMarkingModule;
}());



/***/ }),

/***/ "./src/app/@uisftech/view/routing/cusMarking/cusMarking.routing.ts":
/*!*************************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/cusMarking/cusMarking.routing.ts ***!
  \*************************************************************************/
/*! exports provided: routes, OtherCusMarkingRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCusMarkingRouting", function() { return OtherCusMarkingRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

// import { CreatMarketApplyComponent } from '../../../custom/marketing/creat-market-apply/creat-market-apply.component';
var routes = [];
var OtherCusMarkingRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=routing-cusMarking-cusMarking-module.js.map