(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-data-set-page-data-set-module"],{

/***/ "./src/app/pages/tzb/interface/page-layout/page-data-set/page-data-set.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/interface/page-layout/page-data-set/page-data-set.module.ts ***!
  \***************************************************************************************/
/*! exports provided: PageDataSetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDataSetModule", function() { return PageDataSetModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _page_data_set_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-data-set.routing */ "./src/app/pages/tzb/interface/page-layout/page-data-set/page-data-set.routing.ts");
/* harmony import */ var _page_layout_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../page-layout-common.module */ "./src/app/pages/tzb/interface/page-layout/page-layout-common.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { PageGatherMaintainComponent } from './page-gather-maintain/page-gather-maintain.component';
var PageDataSetModule = /** @class */ (function () {
    function PageDataSetModule() {
    }
    PageDataSetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"],
                _page_data_set_routing__WEBPACK_IMPORTED_MODULE_5__["PageDataSetRouting"],
                _page_layout_common_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutCommonModule"]
            ],
            declarations: [
            // PageGatherMaintainComponent,
            ],
            exports: [
            // PageGatherMaintainComponent
            ],
            providers: []
        })
    ], PageDataSetModule);
    return PageDataSetModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/interface/page-layout/page-data-set/page-data-set.routing.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/interface/page-layout/page-data-set/page-data-set.routing.ts ***!
  \****************************************************************************************/
/*! exports provided: routes, PageDataSetRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDataSetRouting", function() { return PageDataSetRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_gather_maintain_page_gather_maintain_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-gather-maintain/page-gather-maintain.component */ "./src/app/pages/tzb/interface/page-layout/page-data-set/page-gather-maintain/page-gather-maintain.component.ts");
/* harmony import */ var _page_gather_maintain_page_gather_definiton_page_gather_definiton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-gather-maintain/page-gather-definiton/page-gather-definiton.component */ "./src/app/pages/tzb/interface/page-layout/page-data-set/page-gather-maintain/page-gather-definiton/page-gather-definiton.component.ts");



var routes = [
    {
        path: '',
        children: [
            {
                path: 'page-gather-maintain',
                component: _page_gather_maintain_page_gather_maintain_component__WEBPACK_IMPORTED_MODULE_1__["PageGatherMaintainComponent"],
            },
            {
                path: 'page-gather-definition',
                component: _page_gather_maintain_page_gather_definiton_page_gather_definiton_component__WEBPACK_IMPORTED_MODULE_2__["PageDefinitonComponent"],
            },
        ]
    }
];
var PageDataSetRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=page-data-set-page-data-set-module.js.map