(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-pro-custom-pro-module"],{

/***/ "./src/app/pages/tzb/custom/custom-pro/custom-pro.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-pro/custom-pro.module.ts ***!
  \******************************************************************/
/*! exports provided: CusProModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusProModule", function() { return CusProModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custom_pro_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-pro.routing */ "./src/app/pages/tzb/custom/custom-pro/custom-pro.routing.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _product_tree_tree_detail_area_norm_area_norm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-tree/tree-detail/area-norm/area-norm.component */ "./src/app/pages/tzb/custom/custom-pro/product-tree/tree-detail/area-norm/area-norm.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { CustomApply } from './custom-apply/custom-apply.component';

// import { ProductTree } from './product-tree/product-tree.component';
// import {TreeDetailComponent} from './product-tree/tree-detail/tree-detail.component';

//客户 -- 产品
var CusProModule = /** @class */ (function () {
    function CusProModule() {
    }
    CusProModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _custom_pro_routing__WEBPACK_IMPORTED_MODULE_4__["CusProRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"]
            ],
            declarations: [
                // ProductTree,
                // TreeDetailComponent,
                _product_tree_tree_detail_area_norm_area_norm_component__WEBPACK_IMPORTED_MODULE_6__["AreaNormComponent"]
            ],
            providers: []
        })
    ], CusProModule);
    return CusProModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-pro/custom-pro.routing.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-pro/custom-pro.routing.ts ***!
  \*******************************************************************/
/*! exports provided: routes, CusProRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusProRouting", function() { return CusProRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_tree_product_tree_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-tree/product-tree.component */ "./src/app/pages/tzb/custom/custom-pro/product-tree/product-tree.component.ts");
/* harmony import */ var _product_tree_tree_detail_tree_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-tree/tree-detail/tree-detail.component */ "./src/app/pages/tzb/custom/custom-pro/product-tree/tree-detail/tree-detail.component.ts");



var routes = [
    {
        path: '',
        // component: ProductTree,
        children: [
            { path: '', component: _product_tree_product_tree_component__WEBPACK_IMPORTED_MODULE_1__["ProductTree"] },
            {
                path: 'tree-detail',
                component: _product_tree_tree_detail_tree_detail_component__WEBPACK_IMPORTED_MODULE_2__["TreeDetailComponent"],
            }
        ]
    },
];
var CusProRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-pro/product-tree/tree-detail/area-norm/area-norm.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-pro/product-tree/tree-detail/area-norm/area-norm.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'区域标准'\"></header-title>\r\n</div>\r\n<div class=\"ui-g-10\">\r\n    <textarea rows=\"5\" cols=\"30\" pInputTextarea></textarea>\r\n</div>\r\n<div class=\"ui-g-10\">\r\n    <p-fileUpload chooseLabel=\"浏览\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\" myUploader($event)\"\r\n    multiple=\"multiple\"></p-fileUpload>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-pro/product-tree/tree-detail/area-norm/area-norm.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-pro/product-tree/tree-detail/area-norm/area-norm.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLXByby9wcm9kdWN0LXRyZWUvdHJlZS1kZXRhaWwvYXJlYS1ub3JtL2FyZWEtbm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-pro/product-tree/tree-detail/area-norm/area-norm.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-pro/product-tree/tree-detail/area-norm/area-norm.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AreaNormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaNormComponent", function() { return AreaNormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AreaNormComponent = /** @class */ (function () {
    function AreaNormComponent(router) {
        this.router = router;
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_CUS_DOWNLOAD"];
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_CUS_UPLOAD"];
    }
    AreaNormComponent.prototype.ngOnInit = function () {
    };
    AreaNormComponent.prototype.myUploader = function (event) { };
    AreaNormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'area-norm',
            template: __webpack_require__(/*! ./area-norm.component.html */ "./src/app/pages/tzb/custom/custom-pro/product-tree/tree-detail/area-norm/area-norm.component.html"),
            styles: [__webpack_require__(/*! ./area-norm.component.scss */ "./src/app/pages/tzb/custom/custom-pro/product-tree/tree-detail/area-norm/area-norm.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AreaNormComponent);
    return AreaNormComponent;
}());



/***/ })

}]);
//# sourceMappingURL=custom-pro-custom-pro-module.js.map