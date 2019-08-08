(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-group-view-custom-ranking-list-ranking-list-detail-ranking-list-detail-module"],{

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/custom-ranking-list/ranking-list-detail/ranking-list-detail.module.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/custom-ranking-list/ranking-list-detail/ranking-list-detail.module.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: CustomGroupDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomGroupDetailModule", function() { return CustomGroupDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ranking_list_detail_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ranking-list-detail.routing */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/custom-ranking-list/ranking-list-detail/ranking-list-detail.routing.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { CustomRankingListComponent } from "app/pages/tzb/custom/custom-group/custom-group-view/custom-ranking-list/custom-ranking-list.component";



// import { RankingListDetailComponent } from "app/pages/tzb/custom/custom-group/custom-group-view/custom-ranking-list/ranking-list-detail/ranking-list-detail.component";
//客户群组
var CustomGroupDetailModule = /** @class */ (function () {
    function CustomGroupDetailModule() {
    }
    CustomGroupDetailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_4__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__["FrameworkModule"],
                _ranking_list_detail_routing__WEBPACK_IMPORTED_MODULE_2__["CustomGroupDetailRouting"]
            ],
            declarations: [
            // CustomRankingListComponent,
            // RankingListDetailComponent
            ],
            exports: [],
            providers: []
        })
    ], CustomGroupDetailModule);
    return CustomGroupDetailModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/custom-ranking-list/ranking-list-detail/ranking-list-detail.routing.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/custom-ranking-list/ranking-list-detail/ranking-list-detail.routing.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: routes, CustomGroupDetailRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomGroupDetailRouting", function() { return CustomGroupDetailRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ranking_list_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ranking-list-detail.component */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/custom-ranking-list/ranking-list-detail/ranking-list-detail.component.ts");


//客户群组
// import { CustomGroupDeleteComponent } from './custom-group-delete/custom-group-delete.component';//客户群-删除客户群
var routes = [
    {
        path: '',
        component: _ranking_list_detail_component__WEBPACK_IMPORTED_MODULE_1__["RankingListDetailComponent"],
    }
];
var CustomGroupDetailRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=custom-group-view-custom-ranking-list-ranking-list-detail-ranking-list-detail-module.js.map