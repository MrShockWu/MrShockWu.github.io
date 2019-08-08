(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routing-message-message-module"],{

/***/ "./src/app/@uisftech/view/routing/message/message.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/message/message.module.ts ***!
  \******************************************************************/
/*! exports provided: OtherMessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherMessageModule", function() { return OtherMessageModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _message_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.routing */ "./src/app/@uisftech/view/routing/message/message.routing.ts");
/* harmony import */ var _pages_tzb_product_manage_base_product_base_product_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../pages/tzb/product-manage/base-product/base-product.module */ "./src/app/pages/tzb/product-manage/base-product/base-product.module.ts");
/* harmony import */ var _pages_tzb_product_manage_product_market_product_launch_product_launch_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../pages/tzb/product-manage/product-market/product-launch/product-launch.module */ "./src/app/pages/tzb/product-manage/product-market/product-launch/product-launch.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var OtherMessageModule = /** @class */ (function () {
    function OtherMessageModule() {
    }
    OtherMessageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _message_routing__WEBPACK_IMPORTED_MODULE_4__["OtherMessageRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _pages_tzb_product_manage_base_product_base_product_module__WEBPACK_IMPORTED_MODULE_5__["BaseProductModule"],
                _pages_tzb_product_manage_product_market_product_launch_product_launch_module__WEBPACK_IMPORTED_MODULE_6__["ProductLaunchModule"]
            ],
            declarations: [],
            providers: []
        })
    ], OtherMessageModule);
    return OtherMessageModule;
}());



/***/ }),

/***/ "./src/app/@uisftech/view/routing/message/message.routing.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/message/message.routing.ts ***!
  \*******************************************************************/
/*! exports provided: routes, OtherMessageRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherMessageRouting", function() { return OtherMessageRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_tzb_product_manage_base_product_base_product_view_base_view_details_base_view_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../pages/tzb/product-manage/base-product/base-product-view/base-view-details/base-view-details.component */ "./src/app/pages/tzb/product-manage/base-product/base-product-view/base-view-details/base-view-details.component.ts");
/* harmony import */ var _pages_tzb_product_manage_available_product_sale_product_view_sale_view_details_sale_view_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../pages/tzb/product-manage/available-product/sale-product-view/sale-view-details/sale-view-details.component */ "./src/app/pages/tzb/product-manage/available-product/sale-product-view/sale-view-details/sale-view-details.component.ts");
/* harmony import */ var _pages_tzb_product_manage_product_market_product_launch_delivery_query_batch_query_details_batch_query_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../pages/tzb/product-manage/product-market/product-launch/delivery-query/batch-query-details/batch-query-details.component */ "./src/app/pages/tzb/product-manage/product-market/product-launch/delivery-query/batch-query-details/batch-query-details.component.ts");




var routes = [
    {
        //批次号查询
        path: 'a/b/c/d/:applySerialNo/:status',
        component: _pages_tzb_product_manage_product_market_product_launch_delivery_query_batch_query_details_batch_query_details_component__WEBPACK_IMPORTED_MODULE_3__["BatchQueryDetailsComponent"]
    },
    {
        //基础产品
        path: 'basic/b/c/:baseProductId/:status',
        component: _pages_tzb_product_manage_base_product_base_product_view_base_view_details_base_view_details_component__WEBPACK_IMPORTED_MODULE_1__["BaseViewDetailsComponent"]
    },
    {
        //可售产品
        path: 'sale/a/:baseProductId/:status',
        component: _pages_tzb_product_manage_available_product_sale_product_view_sale_view_details_sale_view_details_component__WEBPACK_IMPORTED_MODULE_2__["SaleDetailsComponent"]
    }
];
var OtherMessageRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=routing-message-message-module.js.map