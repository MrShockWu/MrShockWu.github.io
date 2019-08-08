(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-center-order-center-module"],{

/***/ "./src/app/pages/tzb/order/order-center/order-center.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-center.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-center.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-center.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9vcmRlci9vcmRlci1jZW50ZXIvb3JkZXItY2VudGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-center.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-center.component.ts ***!
  \************************************************************************/
/*! exports provided: OrderCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCenterComponent", function() { return OrderCenterComponent; });
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

//订单中心
var OrderCenterComponent = /** @class */ (function () {
    function OrderCenterComponent() {
    }
    OrderCenterComponent.prototype.ngOnInit = function () {
    };
    OrderCenterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-center',
            template: __webpack_require__(/*! ./order-center.component.html */ "./src/app/pages/tzb/order/order-center/order-center.component.html"),
            styles: [__webpack_require__(/*! ./order-center.component.scss */ "./src/app/pages/tzb/order/order-center/order-center.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderCenterComponent);
    return OrderCenterComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-center.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-center.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrderCenterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCenterModule", function() { return OrderCenterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _order_center_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-center.routing */ "./src/app/pages/tzb/order/order-center/order-center.routing.ts");
/* harmony import */ var _order_center_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-center.component */ "./src/app/pages/tzb/order/order-center/order-center.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//客户组件




var OrderCenterModule = /** @class */ (function () {
    function OrderCenterModule() {
    }
    OrderCenterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _order_center_routing__WEBPACK_IMPORTED_MODULE_3__["OrderCenterRouting"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__["SharedBasisModule"]
            ],
            declarations: [
                _order_center_component__WEBPACK_IMPORTED_MODULE_4__["OrderCenterComponent"]
            ],
            entryComponents: [],
            providers: []
        })
    ], OrderCenterModule);
    return OrderCenterModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-center.routing.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-center.routing.ts ***!
  \**********************************************************************/
/*! exports provided: OrderCenterRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCenterRouting", function() { return OrderCenterRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    {
        path: 'pay-manage', loadChildren: './pay-manage/pay-manage.module#PayManageModule',
    },
    {
        path: 'order-manage', loadChildren: './order-manage/order-manage.module#OrderManageModule',
    },
    {
        path: 'reconciliation-manage', loadChildren: './reconciliation-manage/reconciliation-manage.module#ReconcManageModule',
    },
];
var OrderCenterRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=order-center-order-center-module.js.map