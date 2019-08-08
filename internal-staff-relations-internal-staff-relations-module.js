(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["internal-staff-relations-internal-staff-relations-module"],{

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/internal-staff-relations.module.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/internal-staff-relations.module.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: InternalStaffRelationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalStaffRelationsModule", function() { return InternalStaffRelationsModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _staff_relations_application_staff_relations_application_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staff-relations-application/staff-relations-application.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-application/staff-relations-application.component.ts");
/* harmony import */ var _staff_relations_change_staff_relations_change_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff-relations-change/staff-relations-change.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-change/staff-relations-change.component.ts");
/* harmony import */ var _staff_relations_history_staff_relations_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./staff-relations-history/staff-relations-history.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-history/staff-relations-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { InternalStaffRelationsComponent } from "./internal-staff-relations.component";



var InternalStaffRelationsModule = /** @class */ (function () {
    function InternalStaffRelationsModule() {
    }
    InternalStaffRelationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            ],
            declarations: [
                // InternalStaffRelationsComponent,
                _staff_relations_application_staff_relations_application_component__WEBPACK_IMPORTED_MODULE_5__["StaffRelationsApplicationComponent"],
                _staff_relations_change_staff_relations_change_component__WEBPACK_IMPORTED_MODULE_6__["StaffRelationsChangeComponent"],
                _staff_relations_history_staff_relations_history_component__WEBPACK_IMPORTED_MODULE_7__["StaffRelationsHistoryComponent"]
            ],
            providers: []
        })
    ], InternalStaffRelationsModule);
    return InternalStaffRelationsModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-application/staff-relations-application.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-application/staff-relations-application.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <header-title [Info]=\"title\"></header-title>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n  <div class=\"ui-g-3\">\r\n    <label for=\"\">客户编号：</label>\r\n    <input type=\"text\" pInputText>\r\n  </div>\r\n  <div class=\"ui-g-3\">\r\n      <label for=\"\">客户名称：</label>\r\n      <input type=\"text\" pInputText>\r\n  </div>\r\n  <div class=\"ui-g-3\">\r\n      <label for=\"\">证件类型：</label>\r\n      <input type=\"text\" pInputText>\r\n  </div>\r\n  <div class=\"ui-g-3\">\r\n      <label for=\"\">证件号码：</label>\r\n      <input type=\"text\" pInputText>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n  <div class=\"ui-g-3\">\r\n      <label for=\"\">工作单位：</label>\r\n      <input type=\"text\" pInputText>\r\n  </div>\r\n  <div class=\"ui-g-3\">\r\n      <label for=\"\">职务：</label>\r\n      <input type=\"text\" pInputText>\r\n  </div>\r\n  <div class=\"ui-g-3\">\r\n      <label for=\"\">与内部员工关系：</label>\r\n      <input type=\"text\" pInputText>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n  <div class=\"ui-g-3\">\r\n      <label for=\"\">内部员工工号：</label>\r\n      <input type=\"text\" pInputText>\r\n  </div>\r\n  <div class=\"ui-g-3\">\r\n      <label for=\"\">内部员工姓名：</label>\r\n      <input type=\"text\" pInputText>\r\n  </div>\r\n  <div class=\"ui-g-3\"> \r\n      <label for=\"\">内部员工机构码：</label>\r\n      <input type=\"text\" pInputText>\r\n  </div>\r\n  <div class=\"ui-g-3\">\r\n      <label for=\"\">内部员工类型：</label>\r\n      <input type=\"text\" pInputText>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n  <div class=\"ui-g-3\">\r\n      <label for=\"\">内部关系种类：</label>\r\n      <input type=\"text\" pInputText>\r\n  </div>\r\n  <div class=\"ui-g-3\">\r\n      <label for=\"\">经办人：</label>\r\n      <input type=\"text\" pInputText disabled>\r\n  </div>\r\n  <div class=\"ui-g-3\">\r\n      <label for=\"\">经办日期：</label>\r\n      <input type=\"text\" pInputText disabled>\r\n  </div>\r\n  <div class=\"ui-g-3\">\r\n      <label for=\"\">经办机构：</label>\r\n      <input type=\"text\" pInputText disabled>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g-12 btn\">\r\n  <button type=\"button\" pButton  label=\"返回\"></button>\r\n  <button type=\"button\" pButton label=\"保存\"></button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-application/staff-relations-application.component.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-application/staff-relations-application.component.scss ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-12 {\n  padding: 0; }\n  .ui-g-12 .ui-g-3 label {\n    display: inline-block;\n    width: 200px;\n    text-align: right; }\n  .btn {\n  text-align: center;\n  margin-top: 7px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24vaW50ZXJuYWwtc3RhZmYtcmVsYXRpb25zL3N0YWZmLXJlbGF0aW9ucy1hcHBsaWNhdGlvbi9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1pbmZvcm1hdGlvblxcYXNzb2NpYXRpb24tcmVsYXRpb25cXGludGVybmFsLXN0YWZmLXJlbGF0aW9uc1xcc3RhZmYtcmVsYXRpb25zLWFwcGxpY2F0aW9uXFxzdGFmZi1yZWxhdGlvbnMtYXBwbGljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVLEVBQUE7RUFEZDtJQUlZLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUFJN0I7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24vaW50ZXJuYWwtc3RhZmYtcmVsYXRpb25zL3N0YWZmLXJlbGF0aW9ucy1hcHBsaWNhdGlvbi9zdGFmZi1yZWxhdGlvbnMtYXBwbGljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktZy0xMntcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAudWktZy0ze1xyXG4gICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-application/staff-relations-application.component.ts":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-application/staff-relations-application.component.ts ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: StaffRelationsApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffRelationsApplicationComponent", function() { return StaffRelationsApplicationComponent; });
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

var StaffRelationsApplicationComponent = /** @class */ (function () {
    function StaffRelationsApplicationComponent() {
        this.title = "内部关系人申请";
    }
    StaffRelationsApplicationComponent.prototype.ngOnInit = function () {
    };
    StaffRelationsApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff-relations-application',
            template: __webpack_require__(/*! ./staff-relations-application.component.html */ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-application/staff-relations-application.component.html"),
            styles: [__webpack_require__(/*! ./staff-relations-application.component.scss */ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-application/staff-relations-application.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StaffRelationsApplicationComponent);
    return StaffRelationsApplicationComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-change/staff-relations-change.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-change/staff-relations-change.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <header-title [Info]=\"title\"></header-title>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-3\">\r\n      <label for=\"\">关系编号：</label>\r\n      <input type=\"text\" pInputText disabled>\r\n    </div>\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">客户编号：</label>\r\n        <input type=\"text\" pInputText>\r\n    </div>\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">客户名称：</label>\r\n        <input type=\"text\" pInputText disabled>\r\n    </div>\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">证件类型：</label>\r\n        <input type=\"text\" pInputText disabled>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">证件号码：</label>\r\n        <input type=\"text\" pInputText disabled>\r\n    </div>\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">工作单位：</label>\r\n        <input type=\"text\" pInputText disabled>\r\n    </div>\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">职务：</label>\r\n        <input type=\"text\" pInputText disabled>\r\n    </div>\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">与内部员工关系：</label>\r\n        <input type=\"text\" pInputText>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">内部员工工号：</label>\r\n        <input type=\"text\" pInputText>\r\n    </div>\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">内部员工姓名：</label>\r\n        <input type=\"text\" pInputText>\r\n    </div>\r\n    <div class=\"ui-g-3\"> \r\n        <label for=\"\">内部员工机构码：</label>\r\n        <input type=\"text\" pInputText>\r\n    </div>\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">内部员工类型：</label>\r\n        <input type=\"text\" pInputText>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">内部关系种类：</label>\r\n        <input type=\"text\" pInputText>\r\n    </div>\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">经办人：</label>\r\n        <input type=\"text\" pInputText disabled>\r\n    </div>\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">经办日期：</label>\r\n        <input type=\"text\" pInputText disabled>\r\n    </div>\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">经办机构：</label>\r\n        <input type=\"text\" pInputText disabled>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-3\">\r\n      <label for=\"\">原因：</label>\r\n      <input type=\"text\" pInputText>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 btn\">\r\n      <button type=\"button\" pButton  label=\"返回\"></button>\r\n      <button type=\"button\" pButton  label=\"提交\"></button>\r\n    </div>\r\n    \r\n"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-change/staff-relations-change.component.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-change/staff-relations-change.component.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-12 {\n  padding: 0; }\n  .ui-g-12 .ui-g-3 label {\n    display: inline-block;\n    width: 200px;\n    text-align: right; }\n  .btn {\n  text-align: center;\n  margin-top: 7px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24vaW50ZXJuYWwtc3RhZmYtcmVsYXRpb25zL3N0YWZmLXJlbGF0aW9ucy1jaGFuZ2UvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20taW5mb3JtYXRpb25cXGFzc29jaWF0aW9uLXJlbGF0aW9uXFxpbnRlcm5hbC1zdGFmZi1yZWxhdGlvbnNcXHN0YWZmLXJlbGF0aW9ucy1jaGFuZ2VcXHN0YWZmLXJlbGF0aW9ucy1jaGFuZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVLEVBQUE7RUFEZDtJQUlZLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUFJN0I7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24vaW50ZXJuYWwtc3RhZmYtcmVsYXRpb25zL3N0YWZmLXJlbGF0aW9ucy1jaGFuZ2Uvc3RhZmYtcmVsYXRpb25zLWNoYW5nZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1nLTEye1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC51aS1nLTN7XHJcbiAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-change/staff-relations-change.component.ts":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-change/staff-relations-change.component.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: StaffRelationsChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffRelationsChangeComponent", function() { return StaffRelationsChangeComponent; });
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

var StaffRelationsChangeComponent = /** @class */ (function () {
    function StaffRelationsChangeComponent() {
        this.title = '内部关系人修改申请';
    }
    StaffRelationsChangeComponent.prototype.ngOnInit = function () {
    };
    StaffRelationsChangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff-relations-change',
            template: __webpack_require__(/*! ./staff-relations-change.component.html */ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-change/staff-relations-change.component.html"),
            styles: [__webpack_require__(/*! ./staff-relations-change.component.scss */ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-change/staff-relations-change.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StaffRelationsChangeComponent);
    return StaffRelationsChangeComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-history/staff-relations-history.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-history/staff-relations-history.component.html ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n  <header-title [Info]=\"title\"></header-title>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n    <div class=\"ui-g-3\">\r\n      <label for=\"\">关系编号：</label>\r\n      <input type=\"text\" pInputText >\r\n    </div>\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">客户编号：</label>\r\n        <input type=\"text\" pInputText>\r\n    </div>\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">客户名称：</label>\r\n        <input type=\"text\" pInputText >\r\n    </div>\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">与员工内部关系：</label>\r\n        <input type=\"text\" pInputText >\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">内部员工工号：</label>\r\n        <input type=\"text\" pInputText >\r\n    </div>\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">内部员工姓名：</label>\r\n        <input type=\"text\" pInputText >\r\n    </div>\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">内部员工类型：</label>\r\n        <input type=\"text\" pInputText >\r\n    </div>\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">内部关系种类：</label>\r\n        <input type=\"text\" pInputText>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">删除日期：</label>\r\n        <input type=\"text\" pInputText>\r\n    </div>\r\n    <div class=\"ui-g-3\">\r\n        <label for=\"\">至：</label>\r\n        <input type=\"text\" pInputText>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 btn\">\r\n    <button type=\"text\" pButton  label=\"重置\"></button>\r\n    <button type=\"text\" pButton  label=\"查询\"></button>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <label for=\"\">查询结果</label>\r\n  </div>\r\n  <hr>\r\n  <div class=\"ui-g-12\">\r\n      <p-dataTable [value]=\"items\" scrollWidth=\"100%\">\r\n          <p-column field=\"a\" header=\"关系编号\"></p-column>\r\n          <p-column field=\"b\" header=\"客户编号\"></p-column>\r\n          <p-column field=\"c\" header=\"客户名称\"></p-column>\r\n          <p-column field=\"d\" header=\"证件号码\"></p-column>\r\n          <p-column field=\"e\" header=\"工作单位\"></p-column>\r\n          <p-column field=\"f\" header=\"职务\"></p-column>\r\n          <p-column field=\"g\" header=\"与内部员工关系\"></p-column>\r\n          <p-column field=\"h\" header=\"内部员工工号\"></p-column>\r\n          <p-column field=\"i\" header=\"内部员工姓名\"></p-column>\r\n          <p-column field=\"j\" header=\"内部员工机构码\"></p-column>\r\n          <p-column field=\"k\" header=\"内部员工类型\"></p-column>\r\n          <p-column field=\"l\" header=\"内部关系种类\"></p-column>\r\n          <p-column field=\"m\" header=\"经办人\"></p-column>\r\n          <p-column field=\"n\" header=\"经办日期\"></p-column>\r\n          <p-column field=\"o\" header=\"经办机构\"></p-column>\r\n          <p-column field=\"p\" header=\"删除日期\"></p-column>\r\n          <p-column field=\"q\" header=\"原因\"></p-column>\r\n      </p-dataTable>\r\n  </div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-history/staff-relations-history.component.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-history/staff-relations-history.component.scss ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-12 .ui-g-3 label {\n  display: inline-block;\n  width: 200px;\n  text-align: right; }\n\n.btn {\n  text-align: center;\n  margin-top: 7px; }\n\n:host/deep/ .ui-datatable table {\n  text-align: center;\n  table-layout: inherit; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24vaW50ZXJuYWwtc3RhZmYtcmVsYXRpb25zL3N0YWZmLXJlbGF0aW9ucy1oaXN0b3J5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWluZm9ybWF0aW9uXFxhc3NvY2lhdGlvbi1yZWxhdGlvblxcaW50ZXJuYWwtc3RhZmYtcmVsYXRpb25zXFxzdGFmZi1yZWxhdGlvbnMtaGlzdG9yeVxcc3RhZmYtcmVsYXRpb25zLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHWSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUk3QjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24vaW50ZXJuYWwtc3RhZmYtcmVsYXRpb25zL3N0YWZmLXJlbGF0aW9ucy1oaXN0b3J5L3N0YWZmLXJlbGF0aW9ucy1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLWctMTJ7XHJcbiAgICAudWktZy0ze1xyXG4gICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSB0YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRhYmxlLWxheW91dDogaW5oZXJpdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-history/staff-relations-history.component.ts":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-history/staff-relations-history.component.ts ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: StaffRelationsHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffRelationsHistoryComponent", function() { return StaffRelationsHistoryComponent; });
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

var StaffRelationsHistoryComponent = /** @class */ (function () {
    function StaffRelationsHistoryComponent() {
        this.title = '内部关系人删除历史查询';
    }
    StaffRelationsHistoryComponent.prototype.ngOnInit = function () {
        this.items = [
            {
                a: '1001',
                b: '1300000001',
                c: '王小明',
                d: '366601197901011101',
                e: '台州广电总局',
                f: '摄影师',
                g: '配偶',
                h: '800123',
                i: '张小雪',
                j: '8001',
                k: '客户经理',
                l: 'A类紧密关系人',
                m: '邱振华',
                n: '2017-09-13',
                o: '洪家支行',
                p: '2017-09-13',
                q: ''
            },
            {
                a: '1001',
                b: '1300000001',
                c: '王小明',
                d: '366601197901011101',
                e: '台州广电总局',
                f: '摄影师',
                g: '配偶',
                h: '800123',
                i: '张小雪',
                j: '8001',
                k: '客户经理',
                l: 'A类紧密关系人',
                m: '邱振华',
                n: '2017-09-13',
                o: '洪家支行',
                p: '2017-09-13',
                q: ''
            },
        ];
    };
    StaffRelationsHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff-relations-history',
            template: __webpack_require__(/*! ./staff-relations-history.component.html */ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-history/staff-relations-history.component.html"),
            styles: [__webpack_require__(/*! ./staff-relations-history.component.scss */ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/staff-relations-history/staff-relations-history.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StaffRelationsHistoryComponent);
    return StaffRelationsHistoryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=internal-staff-relations-internal-staff-relations-module.js.map