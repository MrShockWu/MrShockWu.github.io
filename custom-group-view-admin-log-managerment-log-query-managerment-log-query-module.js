(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-group-view-admin-log-managerment-log-query-managerment-log-query-module"],{

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/admin-log/managerment-log-query/managerment-log-query.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/admin-log/managerment-log-query/managerment-log-query.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12 title\">\r\n    <header-title [Info]=\"title\"></header-title>\r\n  </div>\r\n  <div class=\"ui-g-12 title\">\r\n    <header-title [Info]=\"title1\"></header-title>\r\n  </div>\r\n  <div class=\"ui-g-12 title\">\r\n      <div class=\"ui-g-6\">\r\n          <label for=\"\">群号：</label>\r\n          <input type=\"text\" pInputText>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n          <label for=\"\">群名称：</label>\r\n          <input type=\"text\" pInputText>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n          <label for=\"\">事项类型：</label>\r\n          <p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity\"></p-dropdown>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n          <label for=\"\">管理日期：</label>\r\n          <p-calendar [(ngModel)]=\"date3\" [showIcon]=\"true\"></p-calendar>至\r\n          <p-calendar [(ngModel)]=\"date3\" [showIcon]=\"true\"></p-calendar>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n          <label for=\"\">处理状态：</label>\r\n          <p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity\"></p-dropdown>\r\n        </div>\r\n        <div class=\"ui-g-12 btn\">\r\n          <button type=\"button\" pButton class=\"ui-button-primary\" label=\"查询\"></button>\r\n        </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n       <p-dataTable [value]=\"items\" [emptyMessage]=\"tableMesg\" [style]=\"{'text-align':'center'}\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\">\r\n          <p-column field=\"a\" header=\"事项大类\"></p-column>\r\n          <p-column field=\"b\" header=\"事项类型\"></p-column>\r\n          <p-column field=\"c\" header=\"事项描述\"></p-column>\r\n          <p-column field=\"d\" header=\"客户群号\"></p-column>\r\n          <p-column field=\"e\" header=\"事项详细信息\"></p-column>\r\n          <p-column field=\"f\" header=\"提醒日期\"></p-column>\r\n          <p-column field=\"g\" header=\"过期日期\"></p-column>\r\n          <p-column field=\"h\" header=\"处理状态\"></p-column>\r\n          <p-column header=\"操作\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <a ><button pButton type=\"button\" label=\"查看\"></button></a>\r\n            </ng-template>\r\n          </p-column>\r\n        </p-dataTable>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/admin-log/managerment-log-query/managerment-log-query.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/admin-log/managerment-log-query/managerment-log-query.component.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .title {\n  padding: 0;\n  border: 1px solid #888; }\n  .ui-g .title .ui-g-6 label {\n    display: inline-block;\n    width: 200px;\n    text-align: right; }\n  .ui-g .title .btn {\n    text-align: center;\n    border: none; }\n  .ui-g .ui-g-12 {\n  border: 1px solid #888; }\n  :host/deep/ .ui-datatable table {\n  text-align: center;\n  table-layout: inherit; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXZpZXcvYWRtaW4tbG9nL21hbmFnZXJtZW50LWxvZy1xdWVyeS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1ncm91cFxcY3VzdG9tLWdyb3VwLXZpZXdcXGFkbWluLWxvZ1xcbWFuYWdlcm1lbnQtbG9nLXF1ZXJ5XFxtYW5hZ2VybWVudC1sb2ctcXVlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxVQUFVO0VBQ1Ysc0JBQXNCLEVBQUE7RUFIOUI7SUFNZ0IscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFQVJqQztJQVlZLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7RUFieEI7RUFpQlEsc0JBQXNCLEVBQUE7RUFLOUI7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1ncm91cC9jdXN0b20tZ3JvdXAtdmlldy9hZG1pbi1sb2cvbWFuYWdlcm1lbnQtbG9nLXF1ZXJ5L21hbmFnZXJtZW50LWxvZy1xdWVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1nIHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgICAgIC51aS1nLTYge1xyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVpLWctMTJ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlIHRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRhYmxlLWxheW91dDogaW5oZXJpdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/admin-log/managerment-log-query/managerment-log-query.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/admin-log/managerment-log-query/managerment-log-query.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: ManagermentLogQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagermentLogQueryComponent", function() { return ManagermentLogQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManagermentLogQueryComponent = /** @class */ (function () {
    function ManagermentLogQueryComponent() {
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"];
        this.title = 'xxx客户群';
        this.title1 = '管理日志查询';
    }
    ManagermentLogQueryComponent.prototype.ngOnInit = function () {
        this.items = [
            {
                a: '',
                b: '',
                c: '',
                d: '',
                e: '',
                f: '',
                g: '',
                h: '未查看'
            },
            {
                a: '',
                b: '',
                c: '',
                d: '',
                e: '',
                f: '',
                g: '',
                h: '未查看'
            },
            {
                a: '',
                b: '',
                c: '',
                d: '',
                e: '',
                f: '',
                g: '',
                h: '未查看'
            },
            {
                a: '',
                b: '',
                c: '',
                d: '',
                e: '',
                f: '',
                g: '',
                h: '未查看'
            },
            {
                a: '',
                b: '',
                c: '',
                d: '',
                e: '',
                f: '',
                g: '',
                h: '未查看'
            },
            {
                a: '',
                b: '',
                c: '',
                d: '',
                e: '',
                f: '',
                g: '',
                h: '未查看'
            },
            {
                a: '',
                b: '',
                c: '',
                d: '',
                e: '',
                f: '',
                g: '',
                h: '未查看'
            },
        ];
    };
    ManagermentLogQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-managerment-log-query',
            template: __webpack_require__(/*! ./managerment-log-query.component.html */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/admin-log/managerment-log-query/managerment-log-query.component.html"),
            styles: [__webpack_require__(/*! ./managerment-log-query.component.scss */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/admin-log/managerment-log-query/managerment-log-query.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ManagermentLogQueryComponent);
    return ManagermentLogQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/admin-log/managerment-log-query/managerment-log-query.module.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/admin-log/managerment-log-query/managerment-log-query.module.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: ManagermentLogQueryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagermentLogQueryModule", function() { return ManagermentLogQueryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _managerment_log_query_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./managerment-log-query.routing */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/admin-log/managerment-log-query/managerment-log-query.routing.ts");
/* harmony import */ var _managerment_log_query_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./managerment-log-query.component */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/admin-log/managerment-log-query/managerment-log-query.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//客户群组
var ManagermentLogQueryModule = /** @class */ (function () {
    function ManagermentLogQueryModule() {
    }
    ManagermentLogQueryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_2__["FrameworkModule"],
                _managerment_log_query_routing__WEBPACK_IMPORTED_MODULE_4__["ManagermentLogQueryRouting"]
            ],
            declarations: [
                _managerment_log_query_component__WEBPACK_IMPORTED_MODULE_5__["ManagermentLogQueryComponent"]
            ],
            exports: [],
            providers: []
        })
    ], ManagermentLogQueryModule);
    return ManagermentLogQueryModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-view/admin-log/managerment-log-query/managerment-log-query.routing.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-view/admin-log/managerment-log-query/managerment-log-query.routing.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: routes, ManagermentLogQueryRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagermentLogQueryRouting", function() { return ManagermentLogQueryRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _managerment_log_query_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managerment-log-query.component */ "./src/app/pages/tzb/custom/custom-group/custom-group-view/admin-log/managerment-log-query/managerment-log-query.component.ts");


//客户群组
// import { CustomGroupDeleteComponent } from './custom-group-delete/custom-group-delete.component';//客户群-删除客户群
var routes = [
    {
        path: '',
        component: _managerment_log_query_component__WEBPACK_IMPORTED_MODULE_1__["ManagermentLogQueryComponent"],
    }
];
var ManagermentLogQueryRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=custom-group-view-admin-log-managerment-log-query-managerment-log-query-module.js.map