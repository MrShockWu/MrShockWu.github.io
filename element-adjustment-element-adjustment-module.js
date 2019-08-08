(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["element-adjustment-element-adjustment-module"],{

/***/ "./src/app/pages/tzb/element-adjustment/element-adjustment.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/tzb/element-adjustment/element-adjustment.component.ts ***!
  \******************************************************************************/
/*! exports provided: ElementAdjustment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementAdjustment", function() { return ElementAdjustment; });
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

var ElementAdjustment = /** @class */ (function () {
    function ElementAdjustment() {
    }
    ElementAdjustment.prototype.ngOnInit = function () {
    };
    ElementAdjustment = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], ElementAdjustment);
    return ElementAdjustment;
}());



/***/ }),

/***/ "./src/app/pages/tzb/element-adjustment/element-adjustment.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/element-adjustment/element-adjustment.module.ts ***!
  \***************************************************************************/
/*! exports provided: ElementAdjustmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementAdjustmentModule", function() { return ElementAdjustmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _element_adjustment_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-adjustment.routing */ "./src/app/pages/tzb/element-adjustment/element-adjustment.routing.ts");
/* harmony import */ var _uisftech_framework_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sharedBasis_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _element_adjustment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./element-adjustment.component */ "./src/app/pages/tzb/element-adjustment/element-adjustment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ElementAdjustmentModule = /** @class */ (function () {
    function ElementAdjustmentModule() {
    }
    ElementAdjustmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _element_adjustment_routing__WEBPACK_IMPORTED_MODULE_1__["ElementAdjustmentRouting"],
                _uisftech_framework_module__WEBPACK_IMPORTED_MODULE_2__["FrameworkModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _sharedBasis_module__WEBPACK_IMPORTED_MODULE_4__["SharedBasisModule"]
            ],
            declarations: [
                _element_adjustment_component__WEBPACK_IMPORTED_MODULE_5__["ElementAdjustment"],
            ],
            entryComponents: [],
            providers: []
        })
    ], ElementAdjustmentModule);
    return ElementAdjustmentModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/element-adjustment/element-adjustment.routing.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tzb/element-adjustment/element-adjustment.routing.ts ***!
  \****************************************************************************/
/*! exports provided: ElementAdjustmentRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementAdjustmentRouting", function() { return ElementAdjustmentRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _element_adjustment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-adjustment.component */ "./src/app/pages/tzb/element-adjustment/element-adjustment.component.ts");


var routes = [
    {
        path: '',
        component: _element_adjustment_component__WEBPACK_IMPORTED_MODULE_1__["ElementAdjustment"],
        children: [
            { path: 'account-integral', loadChildren: './account-integral/account-integral.module#AccountIntegralModule' },
            { path: 'consume-overdraw-quota', loadChildren: './consume-overdraw-quota/consume-overdraw-quota.module#ConsumeOverDrawQuotaModule' },
            { path: 'consumption-limit', loadChildren: './consumption-limit/consumption-limit.module#ConsumptionLimitModule' },
            { path: 'credit-card-savings-adjustment', loadChildren: './credit-card-savings-adjustment/credit-card-savings-adjustment.module#CreditCardSavingsAdjustmentModule' },
            { path: 'card-status', loadChildren: './card-status/card-status.module#CardStatusModule' },
            { path: 'card-elements', loadChildren: './card-elements/card-elements.module#CardElementsModule' },
            { path: 'guarantee-method', loadChildren: './guarantee-method/guarantee-method.module#GuaranteeMethodModule' },
            { path: 'out-card-verify', loadChildren: './out-card-verify/out-card-verify.module#OutCardVerifyModule' },
        ]
    }
];
var ElementAdjustmentRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=element-adjustment-element-adjustment-module.js.map