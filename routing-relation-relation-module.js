(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routing-relation-relation-module"],{

/***/ "./src/app/@uisftech/view/routing/relation/relation.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/relation/relation.module.ts ***!
  \********************************************************************/
/*! exports provided: RelationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationModule", function() { return RelationModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _relation_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relation.routing */ "./src/app/@uisftech/view/routing/relation/relation.routing.ts");
/* harmony import */ var app_pages_tzb_exam_appr_comp_custom_flow_custom_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/exam-appr-comp/custom/flow-custom.module */ "./src/app/pages/tzb/exam-appr-comp/custom/flow-custom.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RelationModule = /** @class */ (function () {
    function RelationModule() {
    }
    RelationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _relation_routing__WEBPACK_IMPORTED_MODULE_4__["RelationRouting"],
                app_pages_tzb_exam_appr_comp_custom_flow_custom_module__WEBPACK_IMPORTED_MODULE_5__["CustomWorkflowModule"]
            ],
            declarations: [],
            providers: []
        })
    ], RelationModule);
    return RelationModule;
}());



/***/ }),

/***/ "./src/app/@uisftech/view/routing/relation/relation.routing.ts":
/*!*********************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/relation/relation.routing.ts ***!
  \*********************************************************************/
/*! exports provided: routes, RelationRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationRouting", function() { return RelationRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_exam_appr_comp_custom_association_relation_association_relation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/exam-appr-comp/custom/association-relation/association-relation */ "./src/app/pages/tzb/exam-appr-comp/custom/association-relation/association-relation.ts");


var routes = [
    {
        //灵活计息
        path: ':applyType/:custNo/:relationshipCustNo/:relationshipType',
        component: app_pages_tzb_exam_appr_comp_custom_association_relation_association_relation__WEBPACK_IMPORTED_MODULE_1__["AssociationRelation"]
    }
];
var RelationRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=routing-relation-relation-module.js.map