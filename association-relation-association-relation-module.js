(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["association-relation-association-relation-module"],{

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ui-g-12\">\r\n        <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWluZm9ybWF0aW9uL2Fzc29jaWF0aW9uLXJlbGF0aW9uL2Fzc29jaWF0aW9uLXJlbGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: AssociationRelation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationRelation", function() { return AssociationRelation; });
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

var AssociationRelation = /** @class */ (function () {
    function AssociationRelation() {
    }
    AssociationRelation.prototype.ngOnInit = function () {
    };
    AssociationRelation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-association-relation',
            template: __webpack_require__(/*! ./association-relation.component.html */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation.component.html"),
            styles: [__webpack_require__(/*! ./association-relation.component.scss */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AssociationRelation);
    return AssociationRelation;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AssociationRelationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationRelationModule", function() { return AssociationRelationModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _association_relation_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./association-relation.routing */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation.routing.ts");
/* harmony import */ var _association_relation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./association-relation.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation.component.ts");
/* harmony import */ var _custom_topology_relation_custom_topology_relation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-topology-relation/custom-topology-relation.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/custom-topology-relation/custom-topology-relation.component.ts");
/* harmony import */ var _internal_staff_relations_internal_staff_relations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./internal-staff-relations/internal-staff-relations.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/internal-staff-relations.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AssociationRelationModule = /** @class */ (function () {
    function AssociationRelationModule() {
    }
    AssociationRelationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _association_relation_routing__WEBPACK_IMPORTED_MODULE_5__["AssociationRelationRouting"]
            ],
            declarations: [
                _association_relation_component__WEBPACK_IMPORTED_MODULE_6__["AssociationRelation"],
                _custom_topology_relation_custom_topology_relation_component__WEBPACK_IMPORTED_MODULE_7__["CustomTopologyRelationComponent"],
                _internal_staff_relations_internal_staff_relations_component__WEBPACK_IMPORTED_MODULE_8__["InternalStaffRelationsComponent"],
            ],
            providers: []
        })
    ], AssociationRelationModule);
    return AssociationRelationModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation.routing.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/association-relation.routing.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AssociationRelationRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationRelationRouting", function() { return AssociationRelationRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _association_relation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./association-relation.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/association-relation.component.ts");
/* harmony import */ var _custom_topology_relation_custom_topology_relation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-topology-relation/custom-topology-relation.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/custom-topology-relation/custom-topology-relation.component.ts");
/* harmony import */ var _internal_staff_relations_internal_staff_relations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal-staff-relations/internal-staff-relations.component */ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/internal-staff-relations.component.ts");




//页面
var routes = [
    {
        path: '',
        component: _association_relation_component__WEBPACK_IMPORTED_MODULE_1__["AssociationRelation"],
        children: [
            { path: 'association-relation-manager', loadChildren: './association-relation-manager/association-relation-manager.module#AssociationRelationManagerModule' },
            { path: 'internal-staff-relations', loadChildren: './internal-staff-relations/internal-staff-relations.module#InternalStaffRelationsModule' },
            { path: 'custom-topology-relation', component: _custom_topology_relation_custom_topology_relation_component__WEBPACK_IMPORTED_MODULE_2__["CustomTopologyRelationComponent"] },
            { path: 'custom-relationship-maintenance', loadChildren: './custom-relationship-maintenance/custom-relationship-maintenance.module#CustomRelationshipMaintenanceModule' },
            { path: '', component: _internal_staff_relations_internal_staff_relations_component__WEBPACK_IMPORTED_MODULE_3__["InternalStaffRelationsComponent"] },
        ]
    }
];
var AssociationRelationRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/custom-topology-relation/custom-topology-relation.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/custom-topology-relation/custom-topology-relation.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n  <header-title [Info]=\"title\"></header-title>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n  <label for=\"\">关系类型：</label>\r\n  <div class=\"checkbox\">\r\n    <div class=\"checkitem\">\r\n      <p-checkbox name=\"groupname\" value=\"1\" label=\"客户担保关系\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    </div>\r\n    <div class=\"checkitem\">\r\n      <p-checkbox name=\"groupname\" value=\"128\" label=\"特殊交易对手关系\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    </div>\r\n    <div class=\"checkitem\">\r\n      <p-checkbox name=\"groupname\" value=\"16\" label=\"客户介绍客户关系\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    </div>\r\n    <div class=\"checkitem\">\r\n      <p-checkbox name=\"groupname\" value=\"2\" label=\"客户历史担保关系\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    </div>\r\n    <div class=\"checkitem\">\r\n      <p-checkbox name=\"groupname\" value=\"256\" label=\"基于征信的行外担保关系\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n  <label for=\"\"></label>\r\n  <div class=\"checkbox\">\r\n      <div class=\"checkitem\">\r\n          <p-checkbox name=\"groupname\" value=\"4\" label=\"客户关联关系\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n        </div>\r\n    <div class=\"checkitem\">\r\n      <p-checkbox name=\"groupname\" value=\"64\" label=\"主要交易对手关系\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    </div>\r\n    <div class=\"checkitem\">\r\n      <p-checkbox name=\"groupname\" value=\"8\" label=\"共同借款人关系\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    </div>\r\n    <!-- <div class=\"checkitem\">\r\n      <p-checkbox name=\"groupname\" value=\"val9\" label=\"批量客户关联\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    </div>\r\n    <div class=\"checkitem\">\r\n      <p-checkbox name=\"groupname\" value=\"val10\" label=\"其他\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n<div class=\"ui-g-12 secondray\">\r\n  <div class=\"ui-g-4\">\r\n    <label for=\"\">关系网深度：</label>\r\n    <p-dropdown [options]=\"layers\" [(ngModel)]=\"selectLayer\"></p-dropdown>\r\n  </div>\r\n  <div class=\"ui-g-4\">\r\n    <label for=\"\">查找方向：</label>\r\n    <p-dropdown [options]=\"directions\" [(ngModel)]=\"selectDirection\"></p-dropdown>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g-12 btn\">\r\n  <button type=\"button\" pButton  label=\"查询\" (click)=\"open()\"></button>\r\n</div>\r\n<!-- <div class=\"ui-g-12\">\r\n  <p-dataTable [value]=\"items\">\r\n    <p-column field=\"a\" header=\"客户类型\"></p-column>\r\n    <p-column field=\"b\" header=\"客户数\"></p-column>\r\n    <p-column field=\"c\" header=\"我行授信户数\"></p-column>\r\n    <p-column field=\"d\" header=\"我行授信金额\"></p-column>\r\n    <p-column field=\"e\" header=\"我行授信余额\"></p-column>\r\n    <p-column field=\"f\" header=\"逾期户数\"></p-column>\r\n    <p-column field=\"g\" header=\"逾期贷款余额\"></p-column>\r\n    <p-column field=\"h\" header=\"风险贷款户数\"></p-column>\r\n    <p-column field=\"i\" header=\"风险贷款金额\"></p-column>\r\n    <p-column field=\"j\" header=\"逾期贷款比率\"></p-column>\r\n    <p-column field=\"k\" header=\"风险户数比率\"></p-column>\r\n    <p-column field=\"l\" header=\"风险贷款比率\"></p-column>\r\n    <p-footerColumnGroup>\r\n      <p-row>\r\n        <p-column footer=\"总计\"></p-column>\r\n        <p-column footer=\"\"></p-column>\r\n        <p-column footer=\"\"></p-column>\r\n        <p-column footer=\"\"></p-column>\r\n        <p-column footer=\"\"></p-column>\r\n        <p-column footer=\"\"></p-column>\r\n        <p-column footer=\"\"></p-column>\r\n        <p-column footer=\"\"></p-column>\r\n        <p-column footer=\"\"></p-column>\r\n        <p-column footer=\"\"></p-column>\r\n        <p-column footer=\"\"></p-column>\r\n        <p-column footer=\"\"></p-column>\r\n      </p-row>\r\n    </p-footerColumnGroup>\r\n  </p-dataTable>\r\n</div>\r\n<div class=\"ui-g-12 \">\r\n  <span class=\"circle\"></span>\r\n  <span>主客户</span>\r\n  <span class=\"circle\"></span>\r\n  <span>正常客户</span>\r\n  <span class=\"circle\"></span>\r\n  <span>不良客户</span>\r\n</div>\r\n<div echarts  [options]=\"option\"></div > -->\r\n\r\n<!-- <p-checkbox [formControl]=\"myFormGroup.get['layers']\"></p-checkbox> -->"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/custom-topology-relation/custom-topology-relation.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/custom-topology-relation/custom-topology-relation.component.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-12 label {\n  display: inline-block;\n  width: 200px;\n  text-align: right; }\n\n.ui-g-12 .checkbox {\n  display: inline-flex;\n  width: 81%; }\n\n.ui-g-12 .checkbox .checkitem {\n    width: 15.5%; }\n\n.secondray {\n  padding: 0;\n  margin: 0; }\n\n.btn {\n  text-align: center; }\n\n:host/deep/ .ui-datatable table {\n  text-align: center; }\n\n.ui-g-12 {\n  display: inline-block; }\n\n.ui-g-12 > span:nth-child(1) {\n    display: inline-block;\n    width: 25px;\n    height: 25px;\n    border: 1px solid #000000;\n    border-radius: 50%;\n    background: #0094D2; }\n\n.ui-g-12 > span:nth-child(3) {\n    display: inline-block;\n    width: 25px;\n    height: 25px;\n    border: 1px solid #000000;\n    border-radius: 50%;\n    background: #68F151; }\n\n.ui-g-12 > span:nth-child(5) {\n    display: inline-block;\n    width: 25px;\n    height: 25px;\n    border: 1px solid #000000;\n    border-radius: 50%;\n    background: #A71517; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24vY3VzdG9tLXRvcG9sb2d5LXJlbGF0aW9uL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWluZm9ybWF0aW9uXFxhc3NvY2lhdGlvbi1yZWxhdGlvblxcY3VzdG9tLXRvcG9sb2d5LXJlbGF0aW9uXFxjdXN0b20tdG9wb2xvZ3ktcmVsYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUp6QjtFQVFRLG9CQUFvQjtFQUNwQixVQUFVLEVBQUE7O0FBVGxCO0lBWVksWUFBWSxFQUFBOztBQUl4QjtFQUNJLFVBQVU7RUFDVixTQUFTLEVBQUE7O0FBRWI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxxQkFBcUIsRUFBQTs7QUFEekI7SUFHUSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBOztBQVIzQjtJQVdRLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUE7O0FBaEIzQjtJQW1CUSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24vY3VzdG9tLXRvcG9sb2d5LXJlbGF0aW9uL2N1c3RvbS10b3BvbG9neS1yZWxhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1nLTEyIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIH1cclxuICAgIC5jaGVja2JveHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICB3aWR0aDogODElOyAgICBcclxuICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLmNoZWNraXRlbXtcclxuICAgICAgICAgICAgd2lkdGg6IDE1LjUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uc2Vjb25kcmF5e1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDsgIFxyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSB0YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udWktZy0xMntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgID5zcGFuOm50aC1jaGlsZCgxKXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDk0RDI7XHJcbiAgICB9XHJcbiAgICA+c3BhbjpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDsgICBcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNjhGMTUxO1xyXG4gICAgfVxyXG4gICAgPnNwYW46bnRoLWNoaWxkKDUpe1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0E3MTUxNztcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/custom-topology-relation/custom-topology-relation.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/custom-topology-relation/custom-topology-relation.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: CustomTopologyRelationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTopologyRelationComponent", function() { return CustomTopologyRelationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomTopologyRelationComponent = /** @class */ (function () {
    function CustomTopologyRelationComponent(commfunc) {
        this.commfunc = commfunc;
        this.title = '客户拓扑关系';
    }
    CustomTopologyRelationComponent.prototype.ngOnInit = function () {
        this.layers = [];
        this.layers.push({ label: '一层', value: "一层" });
        this.layers.push({ label: '二层', value: "二层" });
        this.layers.push({ label: '三层', value: "三层" });
        this.layers.push({ label: '四层', value: "四层" });
        this.directions = [];
        this.directions.push({ label: '单向', value: "单向" });
        this.directions.push({ label: '反向', value: "反向" });
        // this.items=[
        //   {
        //     a:'正常客户',
        //     b:6,
        //     c:2,
        //     d:100000.00,
        //     e:100000.00,
        //     f:0,
        //     g:0.00,
        //     h:0,
        //     i:0.00,
        //     j:0,
        //     k:0,
        //     l:0
        //   },
        //   {
        //     a:'不良客户',
        //     b:1,
        //     c:1,
        //     d:50000.00,
        //     e:0.00,
        //     f:1,
        //     g:50000.00,
        //     h:1,
        //     i:50000.00,
        //     j:1,
        //     k:1,
        //     l:1
        //   },
        // ];
        this.option = {
            title: {
            // text: 'Graph 简单示例'
            },
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    symbolSize: 50,
                    roam: true,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        normal: {
                            textStyle: {
                                fontSize: 20
                            }
                        }
                    },
                    data: [{
                            name: '节点1',
                            x: 300,
                            y: 300
                        }, {
                            name: '节点2',
                            x: 800,
                            y: 300
                        }, {
                            name: '节点3',
                            x: 550,
                            y: 100
                        }, {
                            name: '节点4',
                            x: 550,
                            y: 500
                        }, {
                            name: '节点5',
                            x: 300,
                            y: 500
                        }
                    ],
                    // links: [],
                    links: [{
                            source: 0,
                            target: 1,
                            symbolSize: [5, 20],
                            label: {
                                normal: {
                                    show: true
                                }
                            },
                            lineStyle: {
                                normal: {
                                    width: 5,
                                    curveness: 0.2
                                }
                            }
                        }, {
                            source: '节点2',
                            target: '节点1',
                            label: {
                                normal: {
                                    show: true
                                }
                            },
                            lineStyle: {
                                normal: { curveness: 0.2 }
                            }
                        }, {
                            source: '节点1',
                            //  target: '节点3'
                            target: '节点3',
                        }, {
                            source: '节点2',
                            target: '节点3'
                        }, {
                            source: '节点2',
                            target: '节点4'
                        }, {
                            source: '节点1',
                            target: '节点4'
                        },
                        {
                            source: '节点5',
                            target: '节点1'
                        },
                        {
                            source: '节点5',
                            target: '节点4'
                        },
                        {
                            source: '节点5',
                            target: '节点3'
                        }],
                    lineStyle: {
                        normal: {
                            opacity: 0.9,
                            width: 2,
                            curveness: 0
                        }
                    }
                }
            ]
        };
    };
    CustomTopologyRelationComponent.prototype.open = function () {
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        this.commfunc.createBlank(target);
        var url = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_1__["TZB_HTTP_TP"] + 'relation/goframe/p/server?accessKey=39a51F4fD73Fb50e&netId=MQczOWE1MUY0ZkQ3M0ZiNTBl&linkTypes=MSwxMjgsMTYsMgczOWE1MUY0ZkQ3M0ZiNTBl&nodeId=MTEwODY0NzgxMAczOWE1MUY0ZkQ3M0ZiNTBl&depth=MwczOWE1MUY0ZkQ3M0ZiNTBl&vector=MgczOWE1MUY0ZkQ3M0ZiNTBl';
        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
        var closeOnLoseFocus = 'closeOnLoseFocus';
        this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
    };
    CustomTopologyRelationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-topology-relation',
            template: __webpack_require__(/*! ./custom-topology-relation.component.html */ "./src/app/pages/tzb/custom/custom-information/association-relation/custom-topology-relation/custom-topology-relation.component.html"),
            styles: [__webpack_require__(/*! ./custom-topology-relation.component.scss */ "./src/app/pages/tzb/custom/custom-information/association-relation/custom-topology-relation/custom-topology-relation.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], CustomTopologyRelationComponent);
    return CustomTopologyRelationComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/internal-staff-relations.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/internal-staff-relations.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n  <div class=\"header-title\">\r\n    <div class=\"title-right\">\r\n      <span class=\"line\"></span>\r\n      <span class=\"text\">关系类型新增</span>\r\n    </div>\r\n    <div>\r\n      <button (click)=\"add()\" ><span>+</span>新增</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g-3\">\r\n  <label for=\"\">关系编号：</label>\r\n  <input type=\"text\" pInputText>\r\n</div>\r\n<div class=\"ui-g-3\">\r\n  <label for=\"\">客户编号：</label>\r\n  <input type=\"text\" pInputText>\r\n</div>\r\n<div class=\"ui-g-3\">\r\n  <label for=\"\">客户名称：</label>\r\n  <input type=\"text\" pInputText>\r\n</div>\r\n<div class=\"ui-g-3\">\r\n  <label for=\"\">与内部员工关系：</label>\r\n  <input type=\"text\" pInputText>\r\n</div>\r\n<div class=\"ui-g-3\">\r\n  <label for=\"\">内部员工工号：</label>\r\n  <input type=\"text\" pInputText>\r\n</div>\r\n<div class=\"ui-g-3\">\r\n  <label for=\"\">内部员工姓名：</label>\r\n  <input type=\"text\" pInputText>\r\n</div>\r\n<div class=\"ui-g-3\">\r\n  <label for=\"\">内部员工类型：</label>\r\n  <input type=\"text\" pInputText>\r\n</div>\r\n<div class=\"ui-g-3\">\r\n  <label for=\"\">内部关系种类：</label>\r\n  <input type=\"text\" pInputText>\r\n</div>\r\n<div class=\"ui-g-12 btn\">\r\n  <button pButton type=\"button\"  label=\"重置\"></button>\r\n  <button pButton type=\"button\" label=\"查询\"></button>\r\n</div>\r\n<div class=\"ui-g-12 result\">\r\n  <label for=\"\">查询结果</label>\r\n  <a  routerLink=\"/pages/tzb/custom/custom-information/association-relation/staff-relations-history\">历史查询>></a>\r\n</div>\r\n<hr>\r\n<div class=\"ui-g-12\">\r\n    <p-dataTable [value]=\"items\" scrollWidth=\"100%\">\r\n        <p-column field=\"a\" header=\"关系编号\"></p-column>\r\n        <p-column field=\"b\" header=\"客户编号\"></p-column>\r\n        <p-column field=\"c\" header=\"客户名称\"></p-column>\r\n        <p-column field=\"d\" header=\"证件号码\"></p-column>\r\n        <p-column field=\"e\" header=\"工作单位\"></p-column>\r\n        <p-column field=\"f\" header=\"职务\"></p-column>\r\n        <p-column field=\"g\" header=\"与内部员工关系\"></p-column>\r\n        <p-column field=\"h\" header=\"内部员工工号\"></p-column>\r\n        <p-column field=\"i\" header=\"内部员工姓名\"></p-column>\r\n        <p-column field=\"j\" header=\"内部员工机构码\"></p-column>\r\n        <p-column field=\"k\" header=\"内部员工类型\"></p-column>\r\n        <p-column field=\"l\" header=\"内部关系种类\"></p-column>\r\n        <p-column field=\"m\" header=\"经办人\"></p-column>\r\n        <p-column field=\"n\" header=\"经办日期\"></p-column>\r\n        <p-column field=\"o\" header=\"经办机构\"></p-column>\r\n        <p-column header=\"操作\">\r\n            <ng-template let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                <a routerLink=\"/pages/tzb/custom/custom-information/association-relation/staff-relations-change\"><button pButton type=\"button\" label=\"修改\"></button></a>\r\n                <a routerLink=\"/pages/tzb/custom/custom-information/association-relation/staff-relations-change\"><button pButton type=\"button\" label=\"删除\"></button></a>\r\n            </ng-template>\r\n        </p-column>\r\n    </p-dataTable>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/internal-staff-relations.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/internal-staff-relations.component.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  width: 100%;\n  height: 34px;\n  background-color: #f2f2f2;\n  padding: 7px 0 7px 20px;\n  box-sizing: border-box;\n  display: flex;\n  border-bottom: 1px solid #D7D6D6;\n  justify-content: space-between; }\n  .header-title .title-right {\n    display: flex; }\n  .header-title .title-right .line {\n      width: 5px;\n      height: 19px;\n      display: inline-block;\n      margin-right: 7px; }\n  .header-title .title-right .text {\n      flex: 1;\n      height: 20px;\n      font-size: 14px;\n      line-height: 20px;\n      display: block;\n      font-weight: bold; }\n  .header-title button {\n    margin-right: 20px;\n    width: 80px;\n    border: 1px solid #000000;\n    border-radius: 3px;\n    outline: none; }\n  .header-title button span {\n      display: inline-block;\n      height: 22px;\n      width: 22px;\n      border-radius: 50%;\n      background: #0094D2;\n      color: #ffffff;\n      font-weight: bold;\n      line-height: 22px;\n      text-align: center;\n      margin-right: 3px; }\n  .ui-g-3 label {\n  display: inline-block;\n  width: 200px;\n  text-align: right; }\n  .btn {\n  text-align: center; }\n  .result {\n  display: flex;\n  justify-content: space-between; }\n  :host/deep/ .ui-datatable table {\n  text-align: center;\n  table-layout: inherit; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYXNzb2NpYXRpb24tcmVsYXRpb24vaW50ZXJuYWwtc3RhZmYtcmVsYXRpb25zL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWluZm9ybWF0aW9uXFxhc3NvY2lhdGlvbi1yZWxhdGlvblxcaW50ZXJuYWwtc3RhZmYtcmVsYXRpb25zXFxpbnRlcm5hbC1zdGFmZi1yZWxhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixnQ0FBK0I7RUFDL0IsOEJBQThCLEVBQUE7RUFSbEM7SUFVUSxhQUFhLEVBQUE7RUFWckI7TUFZWSxVQUFVO01BQ1YsWUFBWTtNQUVaLHFCQUFxQjtNQUNyQixpQkFBZ0IsRUFBQTtFQWhCNUI7TUFtQlksT0FBTTtNQUNOLFlBQVk7TUFDWixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGNBQWM7TUFDZCxpQkFBaUIsRUFBQTtFQXhCN0I7SUE0QlEsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWEsRUFBQTtFQWhDckI7TUFrQ1kscUJBQXFCO01BQ3JCLFlBQVk7TUFDWixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsaUJBQWlCLEVBQUE7RUFJN0I7RUFFUSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQixFQUFBO0VBSXpCO0VBQ0ksa0JBQWtCLEVBQUE7RUFFdEI7RUFDSSxhQUFhO0VBQ2IsOEJBQThCLEVBQUE7RUFFbEM7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1pbmZvcm1hdGlvbi9hc3NvY2lhdGlvbi1yZWxhdGlvbi9pbnRlcm5hbC1zdGFmZi1yZWxhdGlvbnMvaW50ZXJuYWwtc3RhZmYtcmVsYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci10aXRsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIHBhZGRpbmc6IDdweCAwIDdweCAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjRDdENkQ2O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLnRpdGxlLXJpZ2h0e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLmxpbmV7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogIzAwOTREMjtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6N3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dHtcclxuICAgICAgICAgICAgZmxleDoxO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDk0RDI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi51aS1nLTN7XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIH1cclxufVxyXG4uYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5yZXN1bHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcclxufVxyXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlIHRhYmxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGFibGUtbGF5b3V0OiBpbmhlcml0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/internal-staff-relations.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/internal-staff-relations.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: InternalStaffRelationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalStaffRelationsComponent", function() { return InternalStaffRelationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InternalStaffRelationsComponent = /** @class */ (function () {
    function InternalStaffRelationsComponent(router) {
        this.router = router;
    }
    InternalStaffRelationsComponent.prototype.ngOnInit = function () {
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
            },
        ];
    };
    InternalStaffRelationsComponent.prototype.add = function () {
        this.router.navigate(['/pages/tzb/custom/custom-information/association-relation/staff-relations-application']);
    };
    InternalStaffRelationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-internal-staff-relations',
            template: __webpack_require__(/*! ./internal-staff-relations.component.html */ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/internal-staff-relations.component.html"),
            styles: [__webpack_require__(/*! ./internal-staff-relations.component.scss */ "./src/app/pages/tzb/custom/custom-information/association-relation/internal-staff-relations/internal-staff-relations.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], InternalStaffRelationsComponent);
    return InternalStaffRelationsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=association-relation-association-relation-module.js.map