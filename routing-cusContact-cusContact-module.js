(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routing-cusContact-cusContact-module"],{

/***/ "./src/app/@uisftech/view/routing/cusContact/cusContact.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/cusContact/cusContact.module.ts ***!
  \************************************************************************/
/*! exports provided: OtherCusContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCusContactModule", function() { return OtherCusContactModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_contact_custom_contact_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-contact/custom-contact.module */ "./src/app/pages/tzb/custom/custom-marketing/custom-contact/custom-contact.module.ts");
/* harmony import */ var _cusContact_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cusContact.routing */ "./src/app/@uisftech/view/routing/cusContact/cusContact.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var OtherCusContactModule = /** @class */ (function () {
    function OtherCusContactModule() {
    }
    OtherCusContactModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                app_pages_tzb_custom_custom_marketing_custom_contact_custom_contact_module__WEBPACK_IMPORTED_MODULE_4__["CusContactModule"],
                _cusContact_routing__WEBPACK_IMPORTED_MODULE_5__["OtherCusContactRouting"]
            ],
            declarations: [],
            providers: []
        })
    ], OtherCusContactModule);
    return OtherCusContactModule;
}());



/***/ }),

/***/ "./src/app/@uisftech/view/routing/cusContact/cusContact.routing.ts":
/*!*************************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/cusContact/cusContact.routing.ts ***!
  \*************************************************************************/
/*! exports provided: routes, OtherCusContactRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCusContactRouting", function() { return OtherCusContactRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_contact_policy_settings_policy_exam_policy_exam_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-contact/policy-settings/policy-exam/policy-exam.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-contact/policy-settings/policy-exam/policy-exam.component.ts");


var routes = [
    {
        //客户联系
        path: 'a/:contactStrategyId',
        component: app_pages_tzb_custom_custom_marketing_custom_contact_policy_settings_policy_exam_policy_exam_component__WEBPACK_IMPORTED_MODULE_1__["PolicyExamComponent"]
    }
];
var OtherCusContactRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=routing-cusContact-cusContact-module.js.map