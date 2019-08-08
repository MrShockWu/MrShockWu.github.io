(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tzb-custom-custom-view-association-relation-cust-association-relation-module"],{

/***/ "./src/app/pages/tzb/custom/custom-view/association-relation/cust-association-relation.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/association-relation/cust-association-relation.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 关联关系需求改变，去掉个人和企业button -->\r\n<!-- <div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <button pButton type=\"button\" [routerLink]=\"['personal-relation']\" [ngClass]=\"{'active':show==1}\" (click)=\"go(1)\" label=\"个人主体\"></button>\r\n    <button pButton type=\"button\" [routerLink]=\"['enterprise-relation']\"[ngClass]=\"{'active':show==2}\" (click)=\"go(2)\" label=\"企业主体\"></button>\r\n  </div>\r\n</div> -->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/association-relation/cust-association-relation.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/association-relation/cust-association-relation.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contener {\n  margin: 10px;\n  padding: 10px 0 0 10px; }\n  .contener .head_nav {\n    background-color: #0094D2;\n    text-align: center; }\n  .contener .head_nav .head_bcwhiter {\n      background-color: white;\n      border: 1px solid #ddd; }\n  .contener .ui-tabview-nav li {\n    width: 20%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy9hc3NvY2lhdGlvbi1yZWxhdGlvbi9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS12aWV3XFxhc3NvY2lhdGlvbi1yZWxhdGlvblxcY3VzdC1hc3NvY2lhdGlvbi1yZWxhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixzQkFBc0IsRUFBQTtFQUYxQjtJQUlRLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTtFQUwxQjtNQU9ZLHVCQUF1QjtNQUN2QixzQkFBc0IsRUFBQTtFQVJsQztJQVlRLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLXZpZXcvYXNzb2NpYXRpb24tcmVsYXRpb24vY3VzdC1hc3NvY2lhdGlvbi1yZWxhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lcntcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDEwcHg7XHJcbiAgICAuaGVhZF9uYXZ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTREMjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLmhlYWRfYmN3aGl0ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51aS10YWJ2aWV3LW5hdiBsaXtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/association-relation/cust-association-relation.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/association-relation/cust-association-relation.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CustAssociationRelationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustAssociationRelationComponent", function() { return CustAssociationRelationComponent; });
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

var CustAssociationRelationComponent = /** @class */ (function () {
    function CustAssociationRelationComponent() {
        this.show = 1;
    }
    CustAssociationRelationComponent.prototype.ngOnInit = function () {
    };
    CustAssociationRelationComponent.prototype.go = function (num) {
        this.show = num;
    };
    CustAssociationRelationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cust-association-relation',
            template: __webpack_require__(/*! ./cust-association-relation.component.html */ "./src/app/pages/tzb/custom/custom-view/association-relation/cust-association-relation.component.html"),
            styles: [__webpack_require__(/*! ./cust-association-relation.component.scss */ "./src/app/pages/tzb/custom/custom-view/association-relation/cust-association-relation.component.scss")]
        })
        /**
         * 关联关系
         */
        ,
        __metadata("design:paramtypes", [])
    ], CustAssociationRelationComponent);
    return CustAssociationRelationComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/association-relation/cust-association-relation.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/association-relation/cust-association-relation.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CustAssociationRelationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustAssociationRelationModule", function() { return CustAssociationRelationModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _cust_association_relation_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cust-association-relation.routing */ "./src/app/pages/tzb/custom/custom-view/association-relation/cust-association-relation.routing.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _cust_association_relation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cust-association-relation.component */ "./src/app/pages/tzb/custom/custom-view/association-relation/cust-association-relation.component.ts");
/* harmony import */ var _personal_relation_personal_relation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./personal-relation/personal-relation.component */ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/personal-relation.component.ts");
/* harmony import */ var _personal_relation_relation_update_relation_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./personal-relation/relation-update/relation-update.component */ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/relation-update/relation-update.component.ts");
/* harmony import */ var app_uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/@uisftech/tzb/udatatable/datatable */ "./src/app/@uisftech/tzb/udatatable/datatable.ts");
/* harmony import */ var app_uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/@uisftech/tzb/upaginator/upaginator.module */ "./src/app/@uisftech/tzb/upaginator/upaginator.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //客户运营平台 http








var CustAssociationRelationModule = /** @class */ (function () {
    function CustAssociationRelationModule() {
    }
    CustAssociationRelationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _cust_association_relation_routing__WEBPACK_IMPORTED_MODULE_5__["CustAssociationRelationRouting"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_6__["FrameworkModule"],
                app_uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_10__["UDataTableModule"],
                app_uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_11__["UPaginatorModule"],
            ],
            declarations: [
                _cust_association_relation_component__WEBPACK_IMPORTED_MODULE_7__["CustAssociationRelationComponent"],
                _personal_relation_personal_relation_component__WEBPACK_IMPORTED_MODULE_8__["PersonalRelationComponent"],
                _personal_relation_relation_update_relation_update_component__WEBPACK_IMPORTED_MODULE_9__["RelationUpdateComponent"]
            ],
            providers: [
                _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CusViewHttpService"]
            ]
        })
    ], CustAssociationRelationModule);
    return CustAssociationRelationModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/association-relation/cust-association-relation.routing.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/association-relation/cust-association-relation.routing.ts ***!
  \********************************************************************************************************/
/*! exports provided: routes, CustAssociationRelationRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustAssociationRelationRouting", function() { return CustAssociationRelationRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cust_association_relation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cust-association-relation.component */ "./src/app/pages/tzb/custom/custom-view/association-relation/cust-association-relation.component.ts");
/* harmony import */ var _personal_relation_personal_relation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-relation/personal-relation.component */ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/personal-relation.component.ts");



var routes = [
    {
        path: '', component: _cust_association_relation_component__WEBPACK_IMPORTED_MODULE_1__["CustAssociationRelationComponent"],
        children: [
            { path: '', redirectTo: 'personal-relation', pathMatch: 'full' },
            { path: 'personal-relation', component: _personal_relation_personal_relation_component__WEBPACK_IMPORTED_MODULE_2__["PersonalRelationComponent"] },
        ]
    }
];
var CustAssociationRelationRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/bean/tenType.bean.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/bean/tenType.bean.ts ***!
  \**********************************************************************************************************/
/*! exports provided: TenTypeBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenTypeBean", function() { return TenTypeBean; });
var TenTypeBean = /** @class */ (function () {
    function TenTypeBean() {
    }
    return TenTypeBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/personal-relation.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/personal-relation.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 ralation\">\r\n  <div class=\"left\">\r\n    <div class=\"ui-g-12 basis-group\" *ngIf=\"judgeField('X_CUST_M_P008')\">\r\n      <!-- 关联关系 -->\r\n      <div class=\"ui-g-12 padding-lr\" id=\"glgx\" [ngClass]=\"{'info-border-color':showBorder == 'glgx'}\" *ngIf=\"judgeField('X_CUST_M_P008_P133')\">\r\n        <div class=\"header-title-theme\">\r\n          <span class=\"text\">关联关系</span>\r\n          <span class=\"signbtn\" *ngIf=\"judgeField('X_CUST_M_P008_P133_P239')\">\r\n            <span (click)=\"addClick(1)\" class=\"signBtnClick\">\r\n              <div class=\"icon_lists dib-box imgOrFont\">\r\n                <!-- <span class=\"icon iconfont tzbicon-guanlian1\"></span> -->\r\n                <span class=\"img_display\"><img class=\"img_size\" src=\"../../../../../../../assets/layout/images/360view/17_03.png\"></span> \r\n                <span class=\"img_no_display\">创建</span> \r\n              </div>\r\n            </span>\r\n          </span>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-lr\" *ngIf=\"display\">\r\n          <p-dialog *ngIf=\"display\" baseZIndex='5' [(visible)]=\"display\" modal=\"modal\" (onHide)=\"addCall1()\">\r\n            <p-header>\r\n              添加关联关系\r\n            </p-header>\r\n            <app-relation-add (outValue)=\"addCall($event)\" (outValueBean)=\"addCallBean($event)\" [in-Value]=\"inValue\"></app-relation-add>\r\n          </p-dialog>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-lr\">\r\n          <!-- <div class=\"noData\" *ngIf=\"noDataDisplay\"></div> -->\r\n          <!-- <div *ngFor=\"let item of RelationshipList\"> -->\r\n            <!-- <div class=\"header-title-theme\" *ngIf=\"item.relationshipList.length>0\">\r\n              <span class=\"text\">{{item.relationshipName}}</span>\r\n            </div> -->\r\n            <div class=\"ui-g-12 padding-tb\">\r\n              <u-dataTable [value]=\"RelationshipList\" class=\"u-table header-table\" scrollable=\"true\" scrollHeight=\"350px\" scrollWidth=\"100%\" [emptyMessage]=\"tabMesg\" [style]=\"{'text-align':'center'}\">\r\n                <p-column field=\"\" header=\"客户号\" [style]=\"{'width':'120px'}\">\r\n                  <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{custNo}}\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column field=\"\" header=\"客户名称\" [style]=\"{'width':'120px'}\">\r\n                  <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{custName}}\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column field=\"relationshipCustNo\" header=\"关联客户号\" [style]=\"{'width':'120px'}\">\r\n                  <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n                    <a *ngIf=\"(num==2)&&(item.statusId==1)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.relationshipCustNo)}}&pageNum={{num}}&scene=0303_XWZH_View\"\r\n                      target=\"_blank\">{{col.relationshipCustNo}}</a>\r\n                    <a *ngIf=\"(num!=2)&&(item.statusId==1)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.relationshipCustNo)}}&pageNum={{num}}\"\r\n                      target=\"_blank\">{{col.relationshipCustNo}}</a>\r\n                    <span *ngIf=\"(item.statusId!=1)\">{{col.relationshipCustNo}}</span>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column field=\"relationshipCustName\" header=\"关联客户名称\" [style]=\"{'width':'120px'}\"></p-column>\r\n                <p-column field=\"parentRelationshipName\" header=\"关联关系类型\" [style]=\"{'width':'120px'}\"></p-column>\r\n                <p-column field=\"relationshipName\" header=\"关联关系子类型\" [style]=\"{'width':'155px'}\"></p-column>\r\n                <p-column field=\"comments\" header=\"详情描述\" [style]=\"{'width':'120px'}\"></p-column>\r\n                <p-column field=\"whetherUnifiedCredit\" header=\"是否统一授信\" [style]=\"{'width':'120px'}\">\r\n                  <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.whetherUnifiedCredit|codeValuePie:domPanduan}}\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column field=\"whetherReductionNumber\" header=\"是否可冲减积数\" [style]=\"{'width':'130px'}\">\r\n                  <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.whetherReductionNumber|codeValuePie:domPanduan}}\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column field=\"reductionNumberType\" header=\"积数冲减控制方式\" [style]=\"{'width':'150px'}\">\r\n                  <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.reductionNumberType|codeValuePie:reductionNumberType}}\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column field=\"userName\" header=\"创建人\" [style]=\"{'width':'120px'}\"></p-column>\r\n                <p-column field=\"userOrgName\" header=\"创建机构\" [style]=\"{'width':'180px'}\"></p-column>\r\n                <p-column field=\"statusId\" header=\"状态\" [style]=\"{'width':'100px'}\">\r\n                  <ng-template let-col let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n                    <span>{{item.statusId|codeValuePie:reductionStatus}}</span>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column field=\"operation\" header=\"操作\" [style]=\"{'width':'130px'}\">\r\n                  <ng-template let-car=\"rowData\" let-item=\"rowData\" pTemplate=\"body\">\r\n                    <div class=\"table-button\">\r\n                      <span (click)=\"detail(car,item.relationshipName)\" class=\"tabelDetailIco\">详情</span>\r\n                      <span (click)=\"modifyClick(car,item.relationshipName,car.parentTypeId)\" class=\"tabelUpdateIco\" *ngIf=\"(car.statusId=='1'&&car.parentTypeId!='0601')&&judgeField('X_CUST_M_P008_P133_P240')\">修改</span>\r\n                      <span (click)=\"deleteClick(car)\" class=\"tabelDeleteIco\" *ngIf=\"(car.statusId=='1'||car.statusId=='4')&&judgeField('X_CUST_M_P008_P133_P241')\">删除</span>\r\n                      <span (click)=\"deleteErrorData(car)\" class=\"tabelDeleteIco\" *ngIf=\"car.statusId=='3'&&judgeField('X_CUST_M_P008_P133_P242')\">强制删除</span>\r\n                    </div>\r\n                  </ng-template>\r\n                </p-column>\r\n              </u-dataTable>\r\n            </div>\r\n            <!-- <div class=\"ui-g-12 padding-tb\">\r\n              <p-paginator [first]=\"relationFirst\" *ngIf=\"RelationshipList.length>0\" [rows]=\"relationPageSize\" [totalRecords]=\"RelationshipTotal\" (onPageChange)=\"relationshipPaginate($event)\"\r\n                [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n            </div> -->\r\n          <!-- </div> -->\r\n        </div>\r\n      </div>\r\n      <!-- 与内部员工关系 -->\r\n      <div class=\"ui-g-12 padding-lr\" id=\"yygnbgx\" [ngClass]=\"{'info-border-color':showBorder == 'yygnbgx'}\" *ngIf=\"judgeField('X_CUST_M_P008_P134')\">\r\n        <div class=\"header-title-theme\">\r\n          <span class=\"text\">与内部员工关系</span>\r\n          <span class=\"signbtn\">\r\n            <span (click)=\"custRelationAdd()\" *ngIf=\"judgeField('X_CUST_M_P008_P134_P241')\" class=\"signBtnClick\">\r\n              <div class=\"icon_lists dib-box imgOrFont\">\r\n                <span class=\"img_display\"><img class=\"img_size\" src=\"../../../../../../../assets/layout/images/360view/17_03.png\"></span>\r\n                <span class=\"img_no_display\">申请</span> \r\n              </div>\r\n            </span>\r\n            <span (click)=\"custRelationUpdate()\" *ngIf=\"judgeField('X_CUST_M_P008_P134_P242')\" class=\"signBtnClick\">\r\n              <div class=\"icon_lists dib-box imgOrFont\">\r\n                <span class=\"icon iconfont tzbicon-xiugai img_display\"></span>\r\n                <span class=\"img_no_display\">更改</span>\r\n              </div>\r\n            </span>\r\n            <span (click)=\"custRelationDelete()\" *ngIf=\"judgeField('X_CUST_M_P008_P134_P243')\" class=\"signBtnClick\">\r\n              <div class=\"icon_lists dib-box imgOrFont\">\r\n                <span class=\"img_display\"><img class=\"img_size\" src=\"../../../../../../../assets/layout/images/360view/17_05.png\"></span>\r\n                <span class=\"img_no_display\">删除</span>\r\n              </div>\r\n            </span>\r\n          </span>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-tb table\">\r\n          <u-dataTable [value]=\"items\" class=\"header-table\" scrollable=\"true\" scrollHeight=\"350px\" scrollWidth=\"100%\" [emptyMessage]=\"tabMesg\" [style]=\"{'text-align':'center'}\">\r\n            <p-column field=\"relationshipNo\" header=\"关系编号\" [style]=\"{'width':'120px'}\"></p-column>\r\n            <p-column field=\"clientNo\" header=\"客户号\" [style]=\"{'width':'120px'}\"></p-column>\r\n            <p-column field=\"clientName\" header=\"客户名称\" [style]=\"{'width':'120px'}\"></p-column>\r\n            <p-column field=\"globalId\" header=\"证件号码\" *ngIf=\"judgeField('X_CUST_M_P008_P134_F244')\" [style]=\"{'width':'180px'}\"></p-column>\r\n            <p-column field=\"globalId\" header=\"证件号码\" *ngIf=\"!judgeField('X_CUST_M_P008_P134_F244')\" [style]=\"{'width':'180px'}\">\r\n              <ng-template let-col let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n                ***\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"companyName\" header=\"工作单位\" [style]=\"{'width':'180px'}\"></p-column>\r\n            <p-column field=\"position\" header=\"职位\" [style]=\"{'width':'120px'}\"></p-column>\r\n            <p-column field=\"relationshipType\" header=\"与内部员工关系\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column field=\"managerId\" header=\"内部员工号\" [style]=\"{'width':'120px'}\"></p-column>\r\n            <p-column field=\"employeeName\" header=\"内部员工名称\" [style]=\"{'width':'120px'}\"></p-column>\r\n            <p-column field=\"orgId\" header=\"内部员工机构码\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column field=\"employeeType\" header=\"内部员工类型\" [style]=\"{'width':'150px'}\">\r\n              <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n                <span>{{item.employeeType|codeValuePie:employeeTypeOptions}}</span>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"innerRelaKind\" header=\"内部员工关系种类\" [style]=\"{'width':'180px'}\">\r\n              <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n                <span>{{item.innerRelaKind|codeValuePie:innerRelaKindOptions}}</span>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"appUserId\" header=\"经办人\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"appBranchNo\" header=\"经办机构\" [style]=\"{'width':'120px'}\"></p-column>\r\n            <p-column field=\"appDate\" header=\"经办日期\" [style]=\"{'width':'120px'}\"></p-column>\r\n          </u-dataTable>\r\n        </div>\r\n      </div>\r\n      <!-- 拓扑 -->\r\n      <div class=\"ui-g-12 padding-lr tuopu\" id=\"tpxx\" [ngClass]=\"{'info-border-color':showBorder == 'tpxx'}\" *ngIf=\"judgeField('X_CUST_M_P008_P135')\">\r\n        <div class=\"header-title-theme\">\r\n          <span class=\"text\">拓扑信息</span>\r\n          <span class=\"signbtn\">\r\n            <span (click)=\"open()\" class=\"signBtnClick\">\r\n              <div class=\"icon_lists dib-box imgOrFont\">\r\n                <span class=\"icon iconfont tzbicon-search img_display\"></span>\r\n                <span class=\"img_no_display\">查询</span>\r\n              </div>\r\n            </span>\r\n          </span>\r\n        </div>\r\n        <div class=\"ui-g-12 secondray\">\r\n          <label for=\"\">关系网深度</label>\r\n          <p-dropdown [options]=\"layers\" [(ngModel)]=\"selectLayer\"></p-dropdown>\r\n          <label for=\"\">查找方向</label>\r\n          <p-dropdown [options]=\"directions\" [(ngModel)]=\"selectDirection\"></p-dropdown>\r\n        </div>\r\n        <div class=\"ui-g-12 secondray\">\r\n          <label for=\"\">关系类型</label>\r\n          <div class=\"checkbox\">\r\n            <div class=\"checkitem\">\r\n              <p-checkbox name=\"groupname\" value=\"1\" label=\"客户担保关系\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n            </div>\r\n            <div class=\"checkitem\">\r\n              <p-checkbox name=\"groupname\" value=\"128\" label=\"特殊交易对手关系\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n            </div>\r\n            <div class=\"checkitem\">\r\n              <p-checkbox name=\"groupname\" value=\"16\" label=\"客户介绍客户关系\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n            </div>\r\n            <div class=\"checkitem\">\r\n              <p-checkbox name=\"groupname\" value=\"2\" label=\"客户历史担保关系\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n            </div>\r\n            <div class=\"checkitem\">\r\n              <p-checkbox name=\"groupname\" value=\"256\" label=\"基于征信的行外担保关系\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12 secondray\">\r\n          <label for=\"\"></label>\r\n          <div class=\"checkbox\">\r\n            <div class=\"checkitem\">\r\n              <p-checkbox name=\"groupname\" value=\"4\" label=\"客户关联关系\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n            </div>\r\n            <div class=\"checkitem\">\r\n              <p-checkbox name=\"groupname\" value=\"64\" label=\"主要交易对手关系\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n            </div>\r\n            <div class=\"checkitem\">\r\n              <p-checkbox name=\"groupname\" value=\"8\" label=\"共同借款人关系\" [(ngModel)]=\"selectedValues\"></p-checkbox>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"ui-g-12\" style=\"padding:0;margin-top:20px;\" *ngIf=\"creditRelationshipList && creditRelationshipList.length>0\">\r\n          <div class=\"header-title-theme\">\r\n            <span class=\"text\">统一授信关联关系的账户存款信息</span>\r\n          </div>\r\n          <div class=\"ui-g-12 padding-tb\">\r\n            <u-dataTable [value]=\"creditRelationshipList\" class=\"header-table\" scrollable=\"true\" scrollHeight=\"350px\" scrollWidth=\"100%\" [emptyMessage]=\"tabMesg\" [style]=\"{'text-align':'center'}\">\r\n              <p-column field=\"account\" header=\"账号\" [style]=\"{'width':'150px'}\"></p-column>\r\n              <p-column field=\"cardId\" header=\"卡号\" [style]=\"{'width':'200px'}\"></p-column>\r\n              <p-column field=\"custNo\" header=\"客户号\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"custName\" header=\"客户名称\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"status\" header=\"账户状态\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"currency\" header=\"币种\" [style]=\"{'width':'100px'}\"></p-column>\r\n              <p-column field=\"acctNum\" header=\"科目号\" [style]=\"{'width':'100px'}\"></p-column>\r\n              <p-column field=\"depositPeriod\" header=\"存期\" [style]=\"{'width':'100px'}\"></p-column>\r\n              <p-column field=\"\" header=\"账户余额\" [style]=\"{'width':'120px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{(col.balance/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"openDate\" header=\"开户日期\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"closeDate\" header=\"注销日期\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"lastYearAdditionalCardinality\" header=\"上年总附加积数\" [style]=\"{'width':'150px'}\"></p-column>\r\n              <p-column field=\"yearAdditionalCardinality\" header=\"本年总附加积数\" [style]=\"{'width':'150px'}\"></p-column>\r\n              <p-column field=\"lastAvailableCardinality\" header=\"上年可用积数\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"availableCardinality\" header=\"本年可用积数\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"contributionCardinalNum\" header=\"贡献积数\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"assActorId\" header=\"协储员\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"assActor\" header=\"协储员名称\" [style]=\"{'width':'120px'}\"></p-column>\r\n              <p-column field=\"\" header=\"本月日均\" [style]=\"{'width':'120px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{(col.monthDailyAverage/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"\" header=\"上月日均\" [style]=\"{'width':'120px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{(col.lastMonthDailyAverage/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"\" header=\"本年日均\" [style]=\"{'width':'120px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{(col.yearDailyAverage/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"\" header=\"上年日均\" [style]=\"{'width':'120px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  {{(col.lastY_yearthDailyAverage/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n              </p-column>\r\n            </u-dataTable>\r\n          </div>\r\n          <div class=\"ui-g-12 padding-tb\">\r\n            <p-paginator [first]=\"first\" [rows]=\"creditRelationshipPageSize\" [totalRecords]=\"creditRelationshipTotal\" (onPageChange)=\"paginate($event)\"\r\n              [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"right\">\r\n    <!-- 右侧导航 -->\r\n    <div class=\"ui-g-12 navigation\">\r\n      <ul>\r\n        <Li [ngClass]=\"{'info-font-color':showBorder == 'glgx'}\" (click)=\"showInfo('glgx')\" *ngIf=\"judgeField('X_CUST_M_P008_P133')\">\r\n          <span class=\"left-circle\" [ngClass]=\"{'info-bg-color':showBorder == 'glgx'}\"></span>关联关系</Li>\r\n        <Li [ngClass]=\"{'info-font-color':showBorder == 'yygnbgx'}\" (click)=\"showInfo('yygnbgx')\" *ngIf=\"judgeField('X_CUST_M_P008_P134')\">\r\n          <span class=\"left-circle\" [ngClass]=\"{'info-bg-color':showBorder == 'yygnbgx'}\"></span>与内部员工关系</Li>\r\n        <Li [ngClass]=\"{'info-font-color':showBorder == 'tpxx'}\" (click)=\"showInfo('tpxx')\" *ngIf=\"judgeField('X_CUST_M_P008_P135')\">\r\n          <span class=\"left-circle\" [ngClass]=\"{'info-bg-color':showBorder == 'tpxx'}\"></span>拓扑信息</Li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- 关系详情（原名：个人） -->\r\n<p-dialog [(visible)]=\"detailDisplay\" baseZIndex='5' modal=\"modal\" (onHide)=\"addCall1()\">\r\n  <p-header>\r\n    关联关系详情\r\n  </p-header>\r\n  <app-relation-detail [inValue]=\"detailValue\" (outValue)=\"detailsCall($event)\"></app-relation-detail>\r\n</p-dialog>\r\n<!--企业详情-->\r\n<!-- <p-dialog [(visible)]=\"comDetailDisplay\" width=\"900\" modal=\"modal\"  (onHide)=\"addCall1()\">\r\n  <p-header>\r\n    关联关系详情\r\n  </p-header>\r\n  <app-company-relation-detail [inValue]=\"detailValue\" (outValue)=\"detailsCall($event)\"></app-company-relation-detail>\r\n</p-dialog> -->\r\n<!-- 关系编辑 -->\r\n<p-dialog *ngIf=\"updateDisplay\" baseZIndex='1' [(visible)]=\"updateDisplay\" width=\"900\" modal=\"modal\" (onHide)=\"addCall1()\">\r\n  <p-header>\r\n    关联关系编辑\r\n  </p-header>\r\n  <app-relation-update [inValue]=\"updateValue\" (outValueBean)=\"addCallBean($event)\" (outValue)=\"updateCall($event)\"></app-relation-update>\r\n</p-dialog>\r\n<!-- 关系删除-->\r\n<p-confirmDialog class=\"comit_style\" header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<p-dialog *ngIf=\"aaaa\" baseZIndex='6' header=\"提交给\" modal=\"modal\" [(visible)]=\"aaaa\">\r\n  <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>\r\n\r\n<p-dialog header=\"关联关系删除原因\" *ngIf=\"relationDisplay\" [(visible)]=\"relationDisplay\" class=\"ansg\">\r\n  <div class=\"ui-g-12\" [formGroup]=\"reasonForm\">\r\n    <textarea style=\"width:100% !important;\" rows=\"3\" cols=\"105\" pInputTextarea placeholder=\"请输入关联关系删除原因\" [(ngModel)]=\"reason\"\r\n      formControlName=\"reason\"></textarea>\r\n    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!reasonForm.controls['reason'].valid&&reasonForm.controls['reason'].dirty\">\r\n      <span *ngIf=\"reasonForm.hasError('required','reason')\"> 关联关系删除原因不能为空！</span>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n      <button pButton label=\"提交\" (click)=\"deleteClick2()\"></button>\r\n    </div>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/personal-relation.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/personal-relation.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ralation {\n  display: flex;\n  background: #fff;\n  margin: 0;\n  padding: 0;\n  width: 100%; }\n  .ralation .left {\n    width: calc(100% - 140px);\n    width: -moz-calc(100% - 140px); }\n  .ralation .left .padding-lr {\n      position: relative;\n      padding: 0;\n      margin: 0; }\n  .ralation .left .tuopu {\n      margin-bottom: 10px; }\n  .ralation .right {\n    position: absolute;\n    width: 140px;\n    right: 0; }\n  .ralation .right .navigation {\n      position: fixed;\n      padding-left: 18px; }\n  .ralation .right .navigation ul {\n        position: absolute;\n        border-left: 2px solid #e6e6e6;\n        margin-top: 45px;\n        padding-left: 0px; }\n  .ralation .right .navigation ul li {\n          list-style: none;\n          height: 30px;\n          line-height: 30px;\n          margin-left: -6px; }\n  .ralation .right .navigation ul li:hover {\n            cursor: pointer; }\n  .ralation .right .navigation ul li .left-circle {\n            display: inline-block;\n            margin-right: 10px;\n            width: 10px;\n            height: 10px;\n            border-radius: 50%;\n            background-color: #e6e6e6; }\n  .ralation .info-border-color {\n    border: 2px dashed #34CFE6 !important;\n    border-radius: 5px; }\n  .ralation .info-font-color {\n    color: #34CFE6 !important; }\n  .ralation .info-bg-color {\n    background: #34CFE6 !important; }\n  .ralation .padding-tb {\n    padding-left: 12px; }\n  .ralation .signBtnClick {\n    cursor: pointer; }\n  .ralation .tzbicon-search {\n    font-weight: bold; }\n  .basis-group {\n  font-size: 14px;\n  position: relative;\n  background-color: #fff;\n  margin: 0;\n  padding: 0; }\n  .basis-group .maintain-btn {\n    background: #fafafa;\n    position: absolute;\n    top: 1px;\n    right: 0;\n    padding-bottom: 0;\n    padding-top: 6px;\n    text-align: right; }\n  .basis-group .maintain-btn .relevanceIco {\n      width: 24px;\n      height: 24px;\n      position: relative;\n      top: 5px;\n      left: 6px; }\n  .basis-group .maintain-btn button {\n      background: transparent;\n      color: #29b1c1;\n      border: 0 none;\n      width: 100px;\n      padding: 0;\n      box-shadow: 0 0 0 0; }\n  .basis-group .titlestyle {\n    text-align: center; }\n  .basis-group .title-bg {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .basis-group .ui-g {\n    padding-top: 1px; }\n  .basis-group .ckresult .title {\n    white-space: nowrap;\n    display: flex;\n    flex-direction: row;\n    align-content: center; }\n  .basis-group .ckresult .title span {\n      flex: 1;\n      text-align: center;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: left;\n      margin: 0 2px;\n      height: 35px;\n      line-height: 35px; }\n  @media all and (max-width: 1780px) {\n        .basis-group .ckresult .title span {\n          font-size: 12px; } }\n  .basis-group .ckresult .title span b {\n        text-indent: 3px;\n        color: #0094D2; }\n  .basis-group .noData {\n    width: 200px;\n    height: 200px;\n    background-color: red; }\n  .header-title-theme {\n  width: 100%;\n  height: 42px;\n  background-color: #ffffff;\n  padding-left: 12px;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #e8e8e8 !important; }\n  .header-title-theme .line {\n    width: 3px;\n    height: 19px;\n    display: inline-block;\n    margin-right: 13px;\n    background-color: #19b0c8; }\n  @media screen and (max-width: 1280px) {\n    .header-title-theme .line {\n      height: 17px; } }\n  .header-title-theme .text {\n    flex: 1;\n    height: 20px;\n    line-height: 20px;\n    display: block;\n    white-space: nowrap;\n    font-size: 14px;\n    color: #004257;\n    width: 25px;\n    font-weight: bold; }\n  @media screen and (max-width: 1280px) {\n    .header-title-theme .text {\n      font-size: 15px; } }\n  .header-title-theme .signbtn {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    display: flex;\n    text-indent: 2px; }\n  .header-title-theme .signbtn .iconfont {\n      font-size: 20px;\n      color: #34CFE6; }\n  .header-title-theme .signbtn .tzbicon-guanlian1 {\n      font-size: 25px; }\n  :host/deep/ .ansg .ui-dialog.ui-shadow {\n  width: 55% !important;\n  height: 50% !important; }\n  .p_checkbox {\n  line-height: 0px;\n  height: 20px;\n  width: 20px;\n  margin-top: 8px; }\n  .p_checkbox > div.ui-chkbox {\n    padding: 0px !important;\n    margin: 0px !important; }\n  .ui-g-12 label {\n  display: inline-block;\n  width: 120px;\n  text-align: right;\n  padding-right: 10px; }\n  .ui-g-12 .checkbox {\n  display: inline-flex;\n  width: 88%; }\n  .ui-g-12 .checkbox .checkitem {\n    width: 20%; }\n  .secondray {\n  padding: 0;\n  margin: 0;\n  display: flex;\n  margin-top: 25px; }\n  :host/deep/.secondray .ui-dropdown {\n  width: 280px !important; }\n  :host/deep/.secondray .ui-dropdown-label {\n  padding-left: 5px;\n  line-height: 14px; }\n  .btn,\n.table {\n  text-align: center; }\n  .relationCustom button {\n  border-radius: 3px !important;\n  height: 29px !important;\n  margin-right: 3px;\n  background: #d7e9e8;\n  font-size: 14px;\n  color: #19b0c8;\n  box-shadow: none;\n  border: 1px solid #a7d3d9;\n  border-bottom: 3px solid #b5d8dd; }\n  .relationCustom button span {\n    line-height: 27px; }\n  :host/deep/ .comit_style .ui-dialog .ui-dialog-content {\n  height: auto !important; }\n  :host/deep/ .ui-chkbox .ui-chkbox-box {\n  width: 15px !important;\n  height: 15px !important; }\n  .imgOrFont .img_no_display {\n  display: none; }\n  .imgOrFont:hover .img_no_display {\n  display: inline-block;\n  background: transparent;\n  color: #0094D2;\n  cursor: pointer;\n  font-weight: bold;\n  padding: 0px !important; }\n  .imgOrFont:hover .img_display {\n  display: none; }\n  .img_size {\n  width: 22px; }\n  :host/deep/ .header-table .u-datatable .ui-datatable-thead > tr {\n  height: 33px; }\n  :host/deep/ .u-table .ui-datatable-scrollable-body {\n  height: 350px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy9hc3NvY2lhdGlvbi1yZWxhdGlvbi9wZXJzb25hbC1yZWxhdGlvbi9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS12aWV3XFxhc3NvY2lhdGlvbi1yZWxhdGlvblxccGVyc29uYWwtcmVsYXRpb25cXHBlcnNvbmFsLXJlbGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVcsRUFBQTtFQUxmO0lBUVEseUJBQXlCO0lBRXpCLDhCQUE4QixFQUFBO0VBVnRDO01BWVksa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixTQUFTLEVBQUE7RUFkckI7TUFpQlksbUJBQW1CLEVBQUE7RUFqQi9CO0lBcUJRLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osUUFBUSxFQUFBO0VBdkJoQjtNQXlCWSxlQUFlO01BQ2Ysa0JBQWtCLEVBQUE7RUExQjlCO1FBNEJnQixrQkFBa0I7UUFDbEIsOEJBQThCO1FBQzlCLGdCQUFnQjtRQUNoQixpQkFBaUIsRUFBQTtFQS9CakM7VUFpQ29CLGdCQUFnQjtVQUNoQixZQUFZO1VBQ1osaUJBQWlCO1VBQ2pCLGlCQUFpQixFQUFBO0VBcENyQztZQXNDd0IsZUFBZSxFQUFBO0VBdEN2QztZQXlDd0IscUJBQXFCO1lBQ3JCLGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsWUFBWTtZQUNaLGtCQUFrQjtZQUNsQix5QkFBeUIsRUFBQTtFQTlDakQ7SUFxRFEscUNBQXFDO0lBQ3JDLGtCQUFrQixFQUFBO0VBdEQxQjtJQXlEUSx5QkFBeUIsRUFBQTtFQXpEakM7SUE0RFEsOEJBQThCLEVBQUE7RUE1RHRDO0lBK0RRLGtCQUFrQixFQUFBO0VBL0QxQjtJQWtFUSxlQUFlLEVBQUE7RUFsRXZCO0lBcUVRLGlCQUFpQixFQUFBO0VBSXpCO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVUsRUFBQTtFQUxkO0lBT1EsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFiekI7TUFlWSxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsU0FBUyxFQUFBO0VBbkJyQjtNQXNCWSx1QkFBdUI7TUFDdkIsY0FBYztNQUNkLGNBQWM7TUFDZCxZQUFZO01BQ1osVUFBVTtNQUNWLG1CQUFtQixFQUFBO0VBM0IvQjtJQStCUSxrQkFBa0IsRUFBQTtFQS9CMUI7SUFvQ1EsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQTtFQXRDL0I7SUF5Q1EsZ0JBQWdCLEVBQUE7RUF6Q3hCO0lBZ0RZLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQixFQUFBO0VBbkRqQztNQXlEZ0IsT0FBTztNQUNQLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixpQkFBaUI7TUFDakIsYUFBYTtNQUNiLFlBQVk7TUFDWixpQkFBaUIsRUFBQTtFQUNqQjtRQWxFaEI7VUFtRW9CLGVBQWMsRUFBQSxFQVFyQjtFQTNFYjtRQXdFb0IsZ0JBQWdCO1FBQ2hCLGNBQWMsRUFBQTtFQXpFbEM7SUErRVEsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFDSixFQUFBO0VBR0o7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZUFBZTtFQUNmLDJDQUEyQyxFQUFBO0VBVC9DO0lBV1EsVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QixFQUFBO0VBRTdCO0lBakJKO01BbUJZLFlBQVksRUFBQSxFQUNmO0VBcEJUO0lBeUJRLE9BQU87SUFDUCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCLEVBQUE7RUFFckI7SUFuQ0o7TUFxQ1ksZUFBZSxFQUFBLEVBQ2xCO0VBdENUO0lBeUNRLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULGFBQWE7SUFDYixnQkFBZ0IsRUFBQTtFQTdDeEI7TUErQ1ksZUFBZTtNQUNmLGNBQWMsRUFBQTtFQWhEMUI7TUFtRFksZUFBZSxFQUFBO0VBSzNCO0VBQ0kscUJBQXFCO0VBQ3JCLHNCQUFzQixFQUFBO0VBRzFCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZSxFQUFBO0VBSm5CO0lBTVEsdUJBQXNCO0lBQ3RCLHNCQUFxQixFQUFBO0VBSTdCO0VBRVEscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7RUFMM0I7RUFRUSxvQkFBb0I7RUFDcEIsVUFBVSxFQUFBO0VBVGxCO0lBV1ksVUFBVSxFQUFBO0VBS3RCO0VBQ0ksVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7RUFHcEI7RUFFSSx1QkFBdUIsRUFBQTtFQUczQjtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtFQUdyQjs7RUFFSSxrQkFBa0IsRUFBQTtFQVF0QjtFQUVRLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZ0NBQWdDLEVBQUE7RUFWeEM7SUFZWSxpQkFBaUIsRUFBQTtFQUs3QjtFQUNJLHVCQUF1QixFQUFBO0VBRzNCO0VBQ0ksc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFBO0VBRzNCO0VBRVEsYUFBYSxFQUFBO0VBRnJCO0VBTVkscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUIsRUFBQTtFQVhuQztFQWNZLGFBQWEsRUFBQTtFQUl6QjtFQUNJLFdBQVcsRUFBQTtFQUdmO0VBQ0ksWUFBWSxFQUFBO0VBR2hCO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy9hc3NvY2lhdGlvbi1yZWxhdGlvbi9wZXJzb25hbC1yZWxhdGlvbi9wZXJzb25hbC1yZWxhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYWxhdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5sZWZ0IHtcclxuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IDE0MHB4O1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNDBweCk7XHJcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gMTQwcHgpO1xyXG4gICAgICAgIHdpZHRoOiAtbW96LWNhbGMoMTAwJSAtIDE0MHB4KTtcclxuICAgICAgICAucGFkZGluZy1sciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudHVvcHUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICAubmF2aWdhdGlvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC02cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmxlZnQtY2lyY2xlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5mby1ib3JkZXItY29sb3Ige1xyXG4gICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjMzRDRkU2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgLmluZm8tZm9udC1jb2xvciB7XHJcbiAgICAgICAgY29sb3I6ICMzNENGRTYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pbmZvLWJnLWNvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzRDRkU2ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucGFkZGluZy10YiB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLnNpZ25CdG5DbGljayB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLnR6Ymljb24tc2VhcmNoIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuLmJhc2lzLWdyb3VwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLm1haW50YWluLWJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYWRhZGE7XHJcbiAgICAgICAgLnJlbGV2YW5jZUljbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjliMWMxO1xyXG4gICAgICAgICAgICBib3JkZXI6IDAgbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aXRsZXN0eWxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGl0bGUtYmcge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDk0RDI7XHJcbiAgICAgICAgLy8gY29sb3I6I2ZmZjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudWktZyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIH1cclxuICAgIC5ja3Jlc3VsdCB7XHJcbiAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTUyNnB4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAxNzgwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICAgICAgICAgIH0gLy8gQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDoxNTI2cHgpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDk0RDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubm9EYXRhIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWRcclxuICAgIH1cclxufVxyXG5cclxuLmhlYWRlci10aXRsZS10aGVtZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlOCAhaW1wb3J0YW50O1xyXG4gICAgLmxpbmUge1xyXG4gICAgICAgIHdpZHRoOiAzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRleHQge1xyXG4gICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgICAgLW1zLWZsZXg6IDE7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDQyNTc7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNpZ25idG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB0ZXh0LWluZGVudDogMnB4O1xyXG4gICAgICAgIC5pY29uZm9udCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzNENGRTY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50emJpY29uLWd1YW5saWFuMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5hbnNnIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA1NSUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wX2NoZWNrYm94IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgID5kaXYudWktY2hrYm94IHtcclxuICAgICAgICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnVpLWctMTIge1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IC8vIHBhZGRpbmctdG9wOiAyJTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNoZWNrYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICB3aWR0aDogODglOyAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLmNoZWNraXRlbSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2Vjb25kcmF5IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8uc2Vjb25kcmF5IC51aS1kcm9wZG93biB7XHJcbiAgICAvLyB3aWR0aDogNjklICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjgwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8uc2Vjb25kcmF5IC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG59XHJcblxyXG4uYnRuLFxyXG4udGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vLyA6aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlIHRhYmxlIHtcclxuLy8gICAgIHdpZHRoOiBhdXRvO1xyXG4vLyAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuLy8gfVxyXG4ucmVsYXRpb25DdXN0b20ge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDI5cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZDdlOWU4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzE5YjBjODtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhN2QzZDk7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNiNWQ4ZGQ7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmNvbWl0X3N0eWxlIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktY2hrYm94IC51aS1jaGtib3gtYm94IHtcclxuICAgIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltZ09yRm9udCB7XHJcbiAgICAuaW1nX25vX2Rpc3BsYXkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAuaW1nX25vX2Rpc3BsYXkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwOTREMjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWdfZGlzcGxheSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5pbWdfc2l6ZSB7XHJcbiAgICB3aWR0aDogMjJweDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmhlYWRlci10YWJsZSAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZD50ciB7XHJcbiAgICBoZWlnaHQ6IDMzcHg7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LXRhYmxlIC51aS1kYXRhdGFibGUtc2Nyb2xsYWJsZS1ib2R5e1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/personal-relation.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/personal-relation.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: PersonalRelationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalRelationComponent", function() { return PersonalRelationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bean/addPartyRelationship.bean */ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/bean/addPartyRelationship.bean.ts");
/* harmony import */ var _bean_tenType_bean__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bean/tenType.bean */ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/bean/tenType.bean.ts");
/* harmony import */ var _global_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../global.state */ "./src/app/global.state.ts");
/* harmony import */ var _custom_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../custom-view.component */ "./src/app/pages/tzb/custom/custom-view/custom-view.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_13__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


//import { SelectPartyRelationshipBean } from './bean/selectPartyRelationship.bean';

// import { AsocialitionMainFlag, ASOCIATION, DomPanduan, Layers, Directions, ReductionNumberType, ReductionStatus, ReductionNumberTypeShow, EMPLOYEE_TYPE, INNER_RELA_KIND } from '../../../constant/custView.codeValue';











var PersonalRelationComponent = /** @class */ (function () {
    function PersonalRelationComponent(cusViewHttpService, confirmationService, commfunc, router, startTime, globalState, httpService, fb, pageNum) {
        this.cusViewHttpService = cusViewHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.router = router;
        this.startTime = startTime;
        this.globalState = globalState;
        this.httpService = httpService;
        this.fb = fb;
        this.pageNum = pageNum;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isCheckAll = false;
        this.dataTable = [];
        //模态框
        this.detailDisplay = false; //关联个人详情
        //模态框是否显示
        this.display = false;
        this.updateDisplay = false;
        this.comDetailDisplay = false; //企业详情
        this.noDataDisplay = false; //关系信息
        //提示信息
        this.msgs = [];
        this.items = []; //接收后台数据
        this.RelationshipList = []; //共有关联List
        this.aaaa = false;
        this.aSOCIATION = [];
        this.domPanduan = [];
        this.reductionNumberType = [];
        this.reductionStatus = [];
        this.employeeTypeOptions = [];
        this.innerRelaKindOptions = [];
        this.layers = [];
        this.directions = [];
        //修改,详情的参数
        this.updateValue = [];
        this.asocialitionMainFlagOptions = []; //关联关系强弱
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"]; //表格中无数据时显示的内容
        this.selectPartyRelationshipBean = new _bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_8__["SelectPartyRelationshipBean"]();
        this.selectedValues = [];
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.addPartyRelationshipBean = new _bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_8__["AddPartyRelationshipBean"]();
        this.tenTypeBean = new _bean_tenType_bean__WEBPACK_IMPORTED_MODULE_9__["TenTypeBean"]();
        this.userRelationBean = new _bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_8__["UserRelationBean"]();
        this.custNum = true;
        this.creditRelationshipList = []; //统一授信关联关系的账户存款信息
        this.relationDisplay = false;
        this.first = 0;
        this.creditRelationshipPageNum = 1;
        this.creditRelationshipPageSize = 10;
        this.creditRelationshipTotal = 0;
        this.showBorder = 'glgx';
        this.tablelist = [];
        this.click = false;
        this.relationPageNum = 1;
        this.relationPageSize = 10;
        this.relationFirst = 0;
        this.RelationshipTotal = 0;
        this.scrollMenu = {
            that: this,
            arrb: [],
            scrollId: '',
            load: function () {
                debugger;
                var span = 80;
                var glgxHeight = jquery__WEBPACK_IMPORTED_MODULE_13__('#glgx').length ? jquery__WEBPACK_IMPORTED_MODULE_13__('#glgx').outerHeight() : 0;
                var yygnbgxHeight = jquery__WEBPACK_IMPORTED_MODULE_13__('#yygnbgx').length ? jquery__WEBPACK_IMPORTED_MODULE_13__('#yygnbgx').outerHeight() : 0;
                var tpxxHeight = jquery__WEBPACK_IMPORTED_MODULE_13__('#tpxx').length ? jquery__WEBPACK_IMPORTED_MODULE_13__('#tpxx').outerHeight() : 0;
                var arr = [];
                var scrollId = '';
                arr.push({ label: 'glgx', value: glgxHeight });
                arr.push({ label: 'yygnbgx', value: yygnbgxHeight });
                arr.push({ label: 'tpxx', value: tpxxHeight });
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].value != 0) {
                        this.arrb.push(arr[i]);
                    }
                }
            },
            scrolling: function () {
                if (!this.that.click) {
                    var scrollTop = jquery__WEBPACK_IMPORTED_MODULE_13__(window).scrollTop();
                    var lenMin = 0;
                    var lenMax = 0;
                    for (var j = 0; j < this.arrb.length - 1; j++) {
                        lenMin += this.arrb[j].value;
                        lenMax = lenMin + this.arrb[j + 1].value;
                        if (scrollTop <= 0) {
                            this.scrollId = '';
                            this.scrollId = this.arrb[j].label;
                            break;
                        }
                        if (scrollTop > 0 && scrollTop < lenMin) {
                            this.scrollId = '';
                            this.scrollId = this.arrb[j + 1].label;
                            break;
                        }
                        if (scrollTop > lenMin && scrollTop < lenMax) {
                            this.scrollId = '';
                            if (j < (this.arrb.length - 2)) {
                                this.scrollId = this.arrb[j + 2].label;
                            }
                            break;
                        }
                    }
                    if (this.scrollId) {
                        this.that.showBorder = this.scrollId;
                    }
                }
            },
            jump: function () {
            }
        };
        if (!this.pageNum.num) {
            this.num = -1;
        }
        else {
            this.num = this.pageNum.num * 1 + 1;
        }
        this.codeVal();
        this.aSOCIATION = this.code['ASOCIATION'];
        this.domPanduan = this.code['DomPanduan'];
        this.reductionNumberType = this.code['ReductionNumberTypeShow'];
        this.reductionStatus = this.code['ReductionStatus'];
        this.employeeTypeOptions = this.code['EMPLOYEE_TYPE'];
        this.innerRelaKindOptions = this.code['INNER_RELA_KIND'];
        this.layers = this.code['Layers'];
        this.directions = this.code['Directions'];
        this.asocialitionMainFlagOptions = this.code['AsocialitionMainFlag'];
        //--------------------------------------------------------------------上面是码值区域
        this.custNo = this.commfunc.getSessionData('custNo');
        this.custName = this.commfunc.getSessionDataCH('custName');
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.user2 = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (this.user.orgId) {
            this.orgId = this.user.orgId;
        }
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
        if (this.user2.userName) {
            this.userName = this.user2.userName;
        }
        if (this.user2.orgName) {
            this.orgName = this.user2.orgName;
        }
    }
    PersonalRelationComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.scrollMenu.load();
        }, 800);
        jquery__WEBPACK_IMPORTED_MODULE_13__(window).scroll(function () {
            _this.scrollMenu.scrolling();
        });
        if (this.commfunc.getSessionDataCH('custNoNum')) {
            this.custNum = false;
        }
        var param = {
            custNo: this.custNo
        };
        this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
            if (data.dataSourceId == 'BR00A') {
                _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_HTTP_XIN"];
            }
            else if (data.dataSourceId == 'BR00B') {
                _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_HTTP_XIN_C"];
            }
            else if (!data.dataSourceId || data.dataSourceId == '') {
                _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_HTTP_XIN"];
            }
        });
        this.userRelationBean.pageNum = 1;
        this.userRelationBean.pageSize = 10;
        this.relationPageNum = 1;
        this.relationPageSize = 10;
        this.relationFirst = 0;
        this.query();
        this.userRelation();
        // this.selectRelationCustAsLnChangeInfo()//统一授信关联关系的账户存款信息
    };
    //查询按钮
    PersonalRelationComponent.prototype.query = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageNum: 1,
            pageSize: 200
        };
        var ob = this.cusViewHttpService.selectPartyRelationshipNewViewInfo(param);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.RelationshipList = data.allRelationshipList == null ? [] : data.allRelationshipList;
                _this.RelationshipTotal = data.totalNum;
                //控制“暂无数据”是否显示
                _this.RelationshipList.length > 0 ? _this.noDataDisplay = false : _this.noDataDisplay = true;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //与内部员工关系全选
    PersonalRelationComponent.prototype.checkAll = function () {
        this.dataTable = [];
        for (var i = 0; i < this.items.length; i++) {
            if (this.isCheckAll == true) {
                this.items[i].isBox = true;
                this.dataTable.push(this.items[i]);
            }
            else {
                this.dataTable = [];
                this.items[i].isBox = false;
            }
        }
    };
    //与内部员工关系单选
    PersonalRelationComponent.prototype.checkBox = function (item) {
        var _this = this;
        if (item.isBox) {
            this.dataTable.push(item);
        }
        else {
            this.dataTable.forEach(function (param, i) {
                if (param == item) {
                    _this.dataTable.splice(i, 1);
                }
            });
        }
        if (this.dataTable.length == this.items.length) {
            this.isCheckAll = true;
        }
        else {
            this.isCheckAll = false;
        }
    };
    //内部员工关系人申请
    PersonalRelationComponent.prototype.custRelationAdd = function () {
        var _this = this;
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        // this.commfunc.createBlank(target);
        this.tenTypeBean.userId = this.userId;
        this.tenTypeBean.sysCode = '122';
        this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
        this.tenTypeBean.serverName = 'ywsn';
        this.tenTypeBean.validateType = '0';
        this.tenTypeBean.extraInfo = 'ywsn';
        this.tenTypeBean.encryptType = 'HS256';
        this.cusViewHttpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var tokens = data.tokenCode;
                var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&where=(CRM_RBYGGXRSQ.khm='" + _this.custNo + "')&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9906|SYS_FIX_WHERE=|isProcModule=no|ActionType=|ActionCode=|moduleProc=|moduleName=|moduleTable=176A9337D420177D3EA98F4D85BFA894|moduleCode=355035810BE0E99A245BFAF07046269C|main_moduleCode=355035810BE0E99A245BFAF07046269C|main_moduleName=|main_moduleTable=176A9337D420177D3EA98F4D85BFA894";
                var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                var closeOnLoseFocus = 'closeOnLoseFocus';
                _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //内部员工关系人修改
    PersonalRelationComponent.prototype.custRelationUpdate = function () {
        var _this = this;
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        // this.commfunc.createBlank(target);
        this.tenTypeBean.userId = this.userId;
        this.tenTypeBean.sysCode = '122';
        this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
        this.tenTypeBean.serverName = 'ywsn';
        this.tenTypeBean.validateType = '0';
        this.tenTypeBean.extraInfo = 'ywsn';
        this.tenTypeBean.encryptType = 'HS256';
        this.cusViewHttpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var tokens = data.tokenCode;
                var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&where=(CRM_NBYGGXRXGSQ.khm='" + _this.custNo + "')&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9906|SYS_FIX_WHERE=44C82EF2AD754EE6072464553FDD9C40:(state='000' or (state='991' and spjd='001' ) or state='996')|isProcModule=no|ActionType=|ActionCode=|moduleProc=631|moduleName=|moduleTable=44C82EF2AD754EE6072464553FDD9C40|moduleCode=355035810BE0E99A245BFAF07046269D|main_moduleCode=355035810BE0E99A245BFAF07046269D|main_moduleName=|main_moduleTable=44C82EF2AD754EE6072464553FDD9C40";
                var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                var closeOnLoseFocus = 'closeOnLoseFocus';
                _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //内部员工关系人删除日志
    PersonalRelationComponent.prototype.custRelationDelete = function () {
        var _this = this;
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        // this.commfunc.createBlank(target);
        this.tenTypeBean.userId = this.userId;
        this.tenTypeBean.sysCode = '122';
        this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
        this.tenTypeBean.serverName = 'ywsn';
        this.tenTypeBean.validateType = '0';
        this.tenTypeBean.extraInfo = 'ywsn';
        this.tenTypeBean.encryptType = 'HS256';
        this.cusViewHttpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var tokens = data.tokenCode;
                var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRM_RBYGGXRSC.KHM='" + _this.custNo + "')&urlParam=/plats/FrontController?commandType=9906|moduleCode=5560DD7CEE26F24C7E77E425AB8B5FA4|moduleTable=7498DCFCF5248B5ACCE43F8B5BD44C77|moduleProc=|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=5560DD7CEE26F24C7E77E425AB8B5FA4|main_moduleTable=5560DD7CEE26F24C7E77E425AB8B5FA4";
                var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                var closeOnLoseFocus = 'closeOnLoseFocus';
                _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //内部员工关系查询
    PersonalRelationComponent.prototype.userRelation = function () {
        var _this = this;
        this.userRelationBean.clientNo = this.custNo;
        // this.userRelationBean.clientNo = '1000160008';
        this.cusViewHttpService.BZ_1300300001801_LOAN(this.userRelationBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.items = data.queryResultArray;
                _this.items.forEach(function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.appUserId }).subscribe(function (data) {
                        if (data.tellerName != null) {
                            item.appUserId = data.tellerName;
                        }
                    });
                    _this.httpService.queryOrgById({ orgId: item.appBranchNo }).subscribe(function (data) {
                        if (data.orgName != null) {
                            item.appBranchNo = data.orgName;
                        }
                    });
                });
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //新增按钮事件
    PersonalRelationComponent.prototype.addClick = function (data) {
        this.inValue = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"]({ custNo: this.custNo, weakIdenFlag: data });
        this.headerTitle = '新增';
        this.display = true;
        document.body.style.overflow = 'hidden';
        // this.updateValue=_.clone({custNo:this.custNo,weakIdenFlag:data});
        // this.headerTitle = '修改';
        // this.updateDisplay = true;
        // this.detailDisplay = true; 
        // // this.headerTitle = '新增'; 
        // this.detailValue = _.clone({ custNo: this.custNo, weakIdenFlag: data});
    };
    //添加的回调
    PersonalRelationComponent.prototype.addCall = function (param) {
        console.log(param);
        if (param == false) {
            this.display = false;
            this.selectPartyRelationshipBean.pageNum = 1;
            this.query();
            if (param != '取消') {
                this.msgs = [{ severity: 'success', summary: '提示', detail: '添加成功' }];
            }
        }
        else {
            console.log(param);
            this.display = false;
            this.outVal = param.outVal;
            this.aaaa = param.aaaa;
        }
    };
    //修改按钮事件
    PersonalRelationComponent.prototype.modifyClick = function (item, Name, No) {
        item.custNo = this.custNo;
        item.parentTypeId = No;
        item.parentTypeName = Name;
        this.headerTitle = '修改';
        this.updateDisplay = true;
        this.updateValue = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](item);
        document.body.style.overflow = 'hidden';
    };
    //修改的回调
    PersonalRelationComponent.prototype.updateCall = function (param) {
        console.log(param);
        if (param == false) {
            this.updateDisplay = false;
            this.selectPartyRelationshipBean.pageNum = 1;
            this.query();
            if (param != '取消') {
                this.msgs = [{ severity: 'success', summary: '提示', detail: '修改成功' }];
            }
        }
        else {
            console.log(param);
            this.updateDisplay = false;
            this.outVal = param.outVal;
            this.aaaa = param.aaaa;
        }
    };
    //删除
    PersonalRelationComponent.prototype.deleteClick = function (car) {
        var _this = this;
        this.param = { custNo: this.custNo, relationshipCustNo: car.relationshipCustNo, relationshipType: car.relationshipType, weakIdenFlag: car.weakIdenFlag, statusId: car.statusId };
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                _this.relationDisplay = true;
                _this.reasonForm = _this.fb.group({
                    'reason': new _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required),
                });
            }
        });
        //条件        
        // let param = { custNo: this.custNo, relationshipCustNo: car.relationshipCustNo, relationshipType: car.relationshipType, weakIdenFlag: car.weakIdenFlag };
        // this.cusViewHttpService.deletePartyRelationship(param).subscribe(data => {
        //   if (data.returnCode.code == 'success') {
        //     let param = data.dataMap;
        //     // this.router.navigate(['pages/tzb/workflow/custom-workflow/association-relation',param]);
        //     this.query();
        //     this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
        //   } else {
        //     this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
        //   }
        // }, error => {
        //   this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        // })
    };
    //
    PersonalRelationComponent.prototype.deleteClick2 = function () {
        var _this = this;
        //校验的
        for (var i in this.reasonForm.controls) {
            this.reasonForm.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.reasonForm.controls) {
            if (!this.reasonForm.controls[i].valid) {
                return;
            }
        }
        this.relationDisplay = false;
        this.waitSelUserList = this.commfunc.query('GLGXSC', { relationshipType: this.addPartyRelationshipBean.relationshipType });
        var outVal = this.waitSelUserList.waitSelUserList;
        var aaaa = this.waitSelUserList.display;
        console.log(this.aaaa);
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var a = commonHeader.extParam.specifyNextOpers;
        console.log(a);
        if (this.waitSelUserList.erro) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro.message });
        }
        else {
            if (aaaa == true && (a == undefined || a == '' || a == null) && this.param.statusId != 4) {
                this.outVal = outVal;
                this.outValBean = this.param;
                this.outValBean.reason = this.reason;
                this.aaaa = aaaa;
                this.addOrUpdatesign = 'delete';
            }
            else {
                this.outValBean = this.param;
                this.outValBean.reason = this.reason;
                var ob = this.httpService.deletePartyRelationship(this.outValBean);
                ob.subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        if (s.extParam.specifyNextOpers) {
                            delete s.extParam.specifyNextOpers;
                            var commonHeader_1 = s;
                            _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
                        }
                        _this.query();
                        // this.router.navigate(['pages/tzb/workflow/custom-workflow/association-relation', data.dataMap]);
                        _this.outValue.emit(false);
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        _this.addPartyRelationshipBean = new _bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_8__["AddPartyRelationshipBean"]();
                    }
                    else {
                        var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        if (s.extParam.specifyNextOpers) {
                            delete s.extParam.specifyNextOpers;
                            var commonHeader_2 = s;
                            _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_2));
                        }
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                    if (s.extParam.specifyNextOpers) {
                        delete s.extParam.specifyNextOpers;
                        var commonHeader_3 = s;
                        _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_3));
                    }
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
                });
            }
        }
    };
    // 详情
    PersonalRelationComponent.prototype.detail = function (car, name) {
        var _this = this;
        car.parentTypeName = name;
        var param = {
            custNo: car.relationshipCustNo
        };
        this.cusViewHttpService.selectCustBriefInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // if (data.custType == '1') {
                _this.detailDisplay = true;
                _this.detailValue = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](car);
                // } else if (data.custType == '2') {
                //   this.comDetailDisplay = true;
                //   this.detailValue = _.clone(car);
                // }
            }
        });
        document.body.style.overflow = 'hidden';
    };
    //详情的回调
    PersonalRelationComponent.prototype.detailsCall = function (param) {
        this.comDetailDisplay = param;
        this.detailDisplay = param;
        this.query();
        document.body.style.overflow = 'auto';
    };
    //删除的回调
    PersonalRelationComponent.prototype.deleteCall = function (param) {
        if (param == false) {
            this.display = false;
            this.selectPartyRelationshipBean.pageNum = 1;
            this.query();
            if (param != '取消') {
                this.msgs = [{ severity: 'success', summary: '提示', detail: '删除成功' }];
            }
        }
        else {
            console.log(param);
            this.outVal = param.outVal;
            this.aaaa = param.aaaa;
        }
    };
    //跳转到个人视图
    PersonalRelationComponent.prototype.toCustView = function (data) {
        this.commfunc.setSessionData('custNo', data.relationshipCustNo);
        this.router.navigate(['pages/custom-view']).then(function (item) {
            // this.globalState.notifyDataChanged('event:custom-view-refresh',{'custNo': data.relationshipCustNo});
            window.location.reload();
        });
    };
    //拓扑url跳转
    PersonalRelationComponent.prototype.open = function () {
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        // this.commfunc.createBlank(target);
        this.accessKey = '39a51F4fD73Fb50e';
        var session = window.sessionStorage;
        this.nodeId = atob(session.custNo);
        //加密
        this.netId = window['base64'].encodeBase64New('1', this.accessKey, 1);
        this.linkTypes = window['base64'].encodeBase64New(this.selectedValues.join(","), this.accessKey, 1);
        this.nodeId = window['base64'].encodeBase64New(this.nodeId, this.accessKey, 1);
        this.depth = window['base64'].encodeBase64New(this.selectLayer, this.accessKey, 1);
        this.vector = window['base64'].encodeBase64New(this.selectDirection, this.accessKey, 1);
        var url = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_HTTP_TP"] + "relation/goframe/p/server?accessKey=" + this.accessKey + "&netId=" + this.netId + "&linkTypes=" + this.linkTypes + "&nodeId=" + this.nodeId + "&depth=" + this.depth + "&vector=" + this.vector;
        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
        var closeOnLoseFocus = 'closeOnLoseFocus';
        this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
        // open(TZB_HTTP_TP+'relation/goframe/p/server?accessKey=39a51F4fD73Fb50e&netId=MQczOWE1MUY0ZkQ3M0ZiNTBl&linkTypes=MSwxMjgsMTYsMgczOWE1MUY0ZkQ3M0ZiNTBl&nodeId=MTEwODY0NzgxMAczOWE1MUY0ZkQ3M0ZiNTBl&depth=MwczOWE1MUY0ZkQ3M0ZiNTBl&vector=MgczOWE1MUY0ZkQ3M0ZiNTBl')
    };
    PersonalRelationComponent.prototype.addCall1 = function () {
        document.body.style.overflow = 'auto';
    };
    //权限
    PersonalRelationComponent.prototype.judgeField = function (fId) {
        var ret = this.commfunc.permissionFiledCheck(fId);
        return ret;
    };
    PersonalRelationComponent.prototype.outDisplayCall = function (event) {
        console.log(event);
        this.aaaa = event;
        this.display = false;
    };
    PersonalRelationComponent.prototype.outValueCall = function (event) {
        var _this = this;
        if (this.addOrUpdatesign == 'add') {
            console.log(event);
            this.outVal = event;
            var ss_1 = '';
            this.outVal.forEach(function (item) {
                ss_1 += item.tellerId + ',';
            });
            var commonHeader = JSON.parse(this.startTime.getSessionData('commonHeader'));
            commonHeader.extParam['specifyNextOpers'] = ss_1;
            console.log(commonHeader);
            this.startTime.setSessionData('commonHeader', JSON.stringify(commonHeader));
            this.cusViewHttpService.addPartyRelationship(this.outValBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var s = JSON.parse(_this.startTime.getSessionData('commonHeader'));
                    if (s.extParam.specifyNextOpers) {
                        delete s.extParam.specifyNextOpers;
                        var commonHeader_4 = s;
                        _this.startTime.setSessionData('commonHeader', JSON.stringify(commonHeader_4));
                    }
                    _this.aaaa = false;
                    _this.display = false;
                    _this.query();
                    // this.outValue.emit(false);
                    // this.msgs = [];
                    // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                    // this.addPartyRelationshipBean = new AddPartyRelationshipBean();
                }
                else {
                    var s = JSON.parse(_this.startTime.getSessionData('commonHeader'));
                    if (s.extParam.specifyNextOpers) {
                        delete s.extParam.specifyNextOpers;
                        var commonHeader_5 = s;
                        _this.startTime.setSessionData('commonHeader', JSON.stringify(commonHeader_5));
                    }
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                var s = JSON.parse(_this.startTime.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader_6 = s;
                    _this.startTime.setSessionData('commonHeader', JSON.stringify(commonHeader_6));
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        else if (this.addOrUpdatesign == 'update') {
            console.log(event);
            this.outVal = event;
            var ss_2 = '';
            this.outVal.forEach(function (item) {
                ss_2 += item.tellerId + ',';
            });
            var commonHeader = JSON.parse(this.startTime.getSessionData('commonHeader'));
            commonHeader.extParam['specifyNextOpers'] = ss_2;
            console.log(commonHeader);
            this.startTime.setSessionData('commonHeader', JSON.stringify(commonHeader));
            this.cusViewHttpService.updatePartyRelationship(this.outValBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var s = JSON.parse(_this.startTime.getSessionData('commonHeader'));
                    if (s.extParam.specifyNextOpers) {
                        delete s.extParam.specifyNextOpers;
                        var commonHeader_7 = s;
                        _this.startTime.setSessionData('commonHeader', JSON.stringify(commonHeader_7));
                    }
                    _this.aaaa = false;
                    _this.display = false;
                    _this.query();
                    // this.outValue.emit(false);
                    // this.msgs = [];
                    // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                    // this.addPartyRelationshipBean = new AddPartyRelationshipBean();
                }
                else {
                    var s = JSON.parse(_this.startTime.getSessionData('commonHeader'));
                    if (s.extParam.specifyNextOpers) {
                        delete s.extParam.specifyNextOpers;
                        var commonHeader_8 = s;
                        _this.startTime.setSessionData('commonHeader', JSON.stringify(commonHeader_8));
                    }
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                var s = JSON.parse(_this.startTime.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader_9 = s;
                    _this.startTime.setSessionData('commonHeader', JSON.stringify(commonHeader_9));
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        else if (this.addOrUpdatesign == 'delete') {
            console.log(event);
            this.outVal = event;
            var ss_3 = '';
            this.outVal.forEach(function (item) {
                ss_3 += item.tellerId + ',';
            });
            var commonHeader = JSON.parse(this.startTime.getSessionData('commonHeader'));
            commonHeader.extParam['specifyNextOpers'] = ss_3;
            console.log(commonHeader);
            this.startTime.setSessionData('commonHeader', JSON.stringify(commonHeader));
            this.cusViewHttpService.deletePartyRelationship(this.outValBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var s = JSON.parse(_this.startTime.getSessionData('commonHeader'));
                    if (s.extParam.specifyNextOpers) {
                        delete s.extParam.specifyNextOpers;
                        var commonHeader_10 = s;
                        _this.startTime.setSessionData('commonHeader', JSON.stringify(commonHeader_10));
                    }
                    _this.aaaa = false;
                    _this.display = false;
                    _this.query();
                    // this.outValue.emit(false);
                    // this.msgs = [];
                    // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                    // this.addPartyRelationshipBean = new AddPartyRelationshipBean();
                }
                else {
                    var s = JSON.parse(_this.startTime.getSessionData('commonHeader'));
                    if (s.extParam.specifyNextOpers) {
                        delete s.extParam.specifyNextOpers;
                        var commonHeader_11 = s;
                        _this.startTime.setSessionData('commonHeader', JSON.stringify(commonHeader_11));
                    }
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                var s = JSON.parse(_this.startTime.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader_12 = s;
                    _this.startTime.setSessionData('commonHeader', JSON.stringify(commonHeader_12));
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
    };
    PersonalRelationComponent.prototype.addCallBean = function (event) {
        this.outValBean = event.addPartyRelationshipBean;
        this.addOrUpdatesign = event.sign;
    };
    PersonalRelationComponent.prototype.deleteErrorData = function (car) {
        var _this = this;
        var param = {
            custNo: this.custNo,
            relationshipCustNo: car.relationshipCustNo,
            relationshipType: car.relationshipType
        };
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                _this.httpService.deleteErrorData(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.query();
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
                    }
                });
            }
        });
    };
    //码值
    PersonalRelationComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //点击客户好二次跳转
    PersonalRelationComponent.prototype.custNumClick = function () {
        if (this.commfunc.getSessionDataCH('custNoNum') && this.commfunc.getSessionDataCH('custNoNum') == '1') {
            this.commfunc.setSessionDataCH('custNoNum', '2');
        }
    };
    //加密
    PersonalRelationComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    //统一授信关联关系的账户存款信息
    PersonalRelationComponent.prototype.selectRelationCustAsLnChangeInfo = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageNum: this.creditRelationshipPageNum,
            pageSize: this.creditRelationshipPageSize,
        };
        this.httpService.selectRelationCustAsLnChangeInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.creditRelationshipList = data.prodInfoList;
                _this.creditRelationshipTotal = data.totalNum;
                if (_this.creditRelationshipList && _this.creditRelationshipList.length != 0) {
                    _this.creditRelationshipList.forEach(function (element) {
                        if (element.openDate && element.openDate.length == 8) {
                            element.openDate = element.openDate.substring(0, 4) + "-" + element.openDate.substring(4, 6) + "-" + element.openDate.substring(6, 8);
                        }
                        if (element.closeDate && element.closeDate.length == 8) {
                            element.closeDate = element.closeDate.substring(0, 4) + "-" + element.closeDate.substring(4, 6) + "-" + element.closeDate.substring(6, 8);
                        }
                    });
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    PersonalRelationComponent.prototype.paginate = function (event) {
        // 分页
        this.creditRelationshipPageSize = event.rows;
        var currentPage = event.page + 1;
        this.creditRelationshipPageNum = currentPage;
        this.first = (currentPage - 1) * this.creditRelationshipPageSize;
        this.selectRelationCustAsLnChangeInfo(); // 查询
    };
    // 关联关系分页
    PersonalRelationComponent.prototype.relationshipPaginate = function (event) {
        this.relationPageSize = event.rows;
        var currentPage = event.page + 1;
        this.relationPageNum = currentPage;
        this.relationFirst = (currentPage - 1) * this.relationPageSize;
        this.query(); // 查询
    };
    PersonalRelationComponent.prototype.showInfo = function (indexI) {
        this.showBorder = indexI;
        this.click = true;
        this.scrollTo(indexI);
    };
    PersonalRelationComponent.prototype.scrollTo = function (indexI) {
        var _this = this;
        if (document.getElementById(indexI) != null) {
            var s = document.getElementById(indexI).offsetTop;
            document.getElementById(indexI).scrollIntoView();
            window.scrollTo(100, s - 50);
            setTimeout(function () {
                _this.click = false;
            }, 500);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PersonalRelationComponent.prototype, "outValue", void 0);
    PersonalRelationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-relation',
            template: __webpack_require__(/*! ./personal-relation.component.html */ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/personal-relation.component.html"),
            styles: [__webpack_require__(/*! ./personal-relation.component.scss */ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/personal-relation.component.scss")],
            providers: [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        })
        /**
         * 关联关系-个人
         */
        ,
        __param(8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _custom_view_component__WEBPACK_IMPORTED_MODULE_11__["CustomView"]; }))),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _global_state__WEBPACK_IMPORTED_MODULE_10__["GlobalState"],
            _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"],
            _custom_view_component__WEBPACK_IMPORTED_MODULE_11__["CustomView"]])
    ], PersonalRelationComponent);
    return PersonalRelationComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/relation-update/relation-update.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/relation-update/relation-update.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"ui-g-12 secondrow\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"first-query\">\r\n                <label for=\"\" appValidation>客户号：</label>\r\n                <input type=\"text\" pInputText [(ngModel)]=\"addPartyRelationshipBean.custNo\" disabled>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6 first\">\r\n            <div class=\"first-query\">\r\n                <label for=\"\" appValidation>客户名称：</label>\r\n                <input type=\"text\" pInputText maxlength=\"50\" [(ngModel)]=\"addPartyRelationshipBean.custName\" disabled>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 secondrow\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"first-query\">\r\n                <label for=\"\" appValidation>关联客户号：</label>\r\n                <input type=\"text\" pInputText [(ngModel)]=\"addPartyRelationshipBean.relationshipCustNo\" disabled>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"first-query\">\r\n                <label for=\"\" appValidation>关联客户名称：</label>\r\n                <input type=\"text\" pInputText maxlength=\"50\" [(ngModel)]=\"addPartyRelationshipBean.relationshipCustName\" disabled>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 secondrow\">\r\n        <div class=\"ui-g-6\" *ngIf=\"addPartyRelationshipBean.weakIdenFlag != '4'\">\r\n            <div class=\"first-query\">\r\n                <label for=\"\" appValidation>关联关系类型：</label>\r\n                <!-- <p-dropdown [options]=\"parentTypeId\" [(ngModel)]=\"addPartyRelationshipBean.parentTypeId\" [disabled]='true'></p-dropdown> -->\r\n                <input type=\"text\" pInputText maxlength=\"50\" [(ngModel)]=\"addPartyRelationshipBean.parentTypeName\" disabled>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div>\r\n                <label for=\"\" appValidation>关联关系子类型：</label>\r\n                <input type=\"text\" pInputText maxlength=\"50\" [(ngModel)]=\"addPartyRelationshipBean.relationshipName\" disabled>\r\n                <!-- <p-dropdown [options]=\"relationship\" [(ngModel)]=\"addPartyRelationshipBean.relationshipType\" [disabled]='true'></p-dropdown> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 secondrow\">\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\">详情描述：</label>\r\n            <input type=\"text\" maxlength=\"100\" pInputText [(ngModel)]=\"addPartyRelationshipBean.comments\">\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\" appValidation>是否统一授信:</label>\r\n            <p-dropdown [options]=\"panduan\" [(ngModel)]=\"addPartyRelationshipBean.whetherUnifiedCredit\"  [disabled]='!whetherCredit'></p-dropdown>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"ui-g-12 secondrow\">\r\n        <div class=\"ui-g-6\">\r\n            <div>\r\n                <label for=\"\" appValidation>是否可冲减积数：</label>\r\n                <p-dropdown [options]=\"panduan\" [(ngModel)]=\"addPartyRelationshipBean.whetherReductionNumber\" [disabled]='!whether' (onChange)=\"doSelet()\"></p-dropdown>\r\n            </div>\r\n            <div class=\"requireDiv\" style=\"color:red;\" *ngIf=\"!whether1\">\r\n                是否可冲减积数不能为空!\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\" appValidation>积数冲减控制方式：</label>\r\n            <p-dropdown [options]=\"reductionNumberType\" [(ngModel)]=\"addPartyRelationshipBean.reductionNumberType\" [disabled]='true'></p-dropdown>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 secondrow\">\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\" appValidation>创建人:</label>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"addPartyRelationshipBean.userName\" disabled>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\" appValidation>创建机构:</label>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"addPartyRelationshipBean.userOrgName\" disabled>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12 secondrow\" *ngIf=\"addPartyRelationshipBean.parentTypeName == '0102'||addPartyRelationshipBean.parentTypeName == '0104'\">\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\">投资金额：</label>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"addPartyRelationshipBean.investAmt\">\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\">投资占比（%）：</label>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"addPartyRelationshipBean.investRate\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 secondrow\" *ngIf=\"addPartyRelationshipBean.parentTypeName == '0102'||addPartyRelationshipBean.parentTypeName == '0104'\">\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\">投资日期：</label>\r\n            <p-calendar [(ngModel)]=\"addPartyRelationshipBean.investDate\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                [yearRange]=\"yearRange\"></p-calendar>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\">是否实际控制人：</label>\r\n            <p-dropdown [options]=\"panduan\" [(ngModel)]=\"addPartyRelationshipBean.whetherCtrlPerson\"></p-dropdown>\r\n        </div>\r\n    </div> -->\r\n    <!-- <div class=\"ui-g-12 secondrow\"  *ngIf=\"addPartyRelationshipBean.parentTypeName == '0102'||addPartyRelationshipBean.parentTypeName == '0104'\">\r\n        <div class=\"ui-g-6\">\r\n            <label for=\"\">创建时间：</label>\r\n            <p-calendar [(ngModel)]=\"addPartyRelationshipBean.investDate\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                [yearRange]=\"yearRange\"></p-calendar>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"modifySaveBtn()\"></button>\r\n        <button pButton type=\"button\" label=\"取消\" (click)=\"modifyCloseBtn()\"></button>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n  "

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/relation-update/relation-update.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/relation-update/relation-update.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-4 .requireLabel, .ui-g-12 .requireLabel {\n  width: 350px;\n  text-align: right; }\n\n.ui-g-4 .requireDiv, .ui-g-12 .requireDiv {\n  width: 321px;\n  text-align: right; }\n\n.ui-g-4 label, .ui-g-12 label {\n  display: inline-block;\n  width: 200px;\n  text-align: right; }\n\n.secondrow {\n  padding: 0;\n  margin: 0; }\n\n.secondrow .first label {\n    padding-top: 2%; }\n\n.btn {\n  text-align: center; }\n\n:host/deep/.ui-calendar {\n  border: none; }\n\n:host/deep/ .ui-inputtext {\n  width: 50% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 50% !important; }\n\n@media screen and (max-width: 1281px) {\n  :host/deep/ .ui-dropdown {\n    width: 50% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy9hc3NvY2lhdGlvbi1yZWxhdGlvbi9wZXJzb25hbC1yZWxhdGlvbi9yZWxhdGlvbi11cGRhdGUvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tdmlld1xcYXNzb2NpYXRpb24tcmVsYXRpb25cXHBlcnNvbmFsLXJlbGF0aW9uXFxyZWxhdGlvbi11cGRhdGVcXHJlbGF0aW9uLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFIekI7RUFNUSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBUHpCO0VBVVEscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUZiO0lBS1ksZUFBZSxFQUFBOztBQUkzQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFlBQVcsRUFBQTs7QUFFZjtFQUNJLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJO0lBQ0kscUJBQXFCLEVBQUEsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS12aWV3L2Fzc29jaWF0aW9uLXJlbGF0aW9uL3BlcnNvbmFsLXJlbGF0aW9uL3JlbGF0aW9uLXVwZGF0ZS9yZWxhdGlvbi11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktZy00LC51aS1nLTEye1xyXG4gICAgLnJlcXVpcmVMYWJlbHtcclxuICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAucmVxdWlyZURpdntcclxuICAgICAgICB3aWR0aDogMzIxcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi5zZWNvbmRyb3d7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLmZpcnN0e1xyXG4gICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuOmhvc3QvZGVlcC8udWktY2FsZW5kYXJ7XHJcbiAgICBib3JkZXI6bm9uZTtcclxufVxyXG46aG9zdC9kZWVwLyAudWktaW5wdXR0ZXh0e1xyXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93bntcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODFweCkge1xyXG4gICAgOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3due1xyXG4gICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/relation-update/relation-update.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/relation-update/relation-update.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: RelationUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelationUpdateComponent", function() { return RelationUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var _bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/addPartyRelationship.bean */ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/bean/addPartyRelationship.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Panduan, ReductionNumberType, AsocialitionMainFlag, RelationshipType, ParentTypeId } from '../../../../constant/custView.codeValue';



var RelationUpdateComponent = /** @class */ (function () {
    function RelationUpdateComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.outValueBean = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addPartyRelationshipBean = new _bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_2__["AddPartyRelationshipBean"]();
        this.panduan = [];
        this.reductionNumberType = [];
        this.relationshipType = [];
        this.aaaa = false;
        //提示信息
        this.msgs = [];
        this.asocialitionMainFlag = []; //强弱关联标识
        this.flag = false;
        this.whether = true;
        this.whether1 = true;
        this.whetherCredit = true;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_CN"];
        this.yearRangeSmall = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["yearRangeSmall"];
        this.yearRangeBig = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["yearRangeBig"];
        this.codeVal();
        this.panduan = this.code['Panduan'];
        this.reductionNumberType = this.code['ReductionNumberType'];
        this.relationshipType = this.code['RelationshipType'];
        // this.parentTypeId=this.code['ParentTypeId'];
        this.asocialitionMainFlag = this.code['AsocialitionMainFlag'];
        //-------------------------------------------------------------------上面是码值
    }
    RelationUpdateComponent.prototype.ngOnInit = function () {
    };
    RelationUpdateComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.yearRange = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["yearRangeSmall"] + ":" + app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["yearRangeBig"];
        if (this.inValue) {
            console.log(this.inValue);
            this.addPartyRelationshipBean = this.inValue;
            console.log(this.addPartyRelationshipBean);
            this.addPartyRelationshipBean.custName = this.commfunc.getSessionDataCH('custName');
            var typeId = this.addPartyRelationshipBean.relationshipType;
            if (typeId == '01' || typeId == '02' || typeId == '03' || typeId == '032') {
                // this.addPartyRelationshipBean.whetherReductionNumber = '1';//是否可冲减积数
                // this.addPartyRelationshipBean.reductionNumberType = '1';//冲减积数控制方式
                this.whether = false;
            }
            else {
                // this.addPartyRelationshipBean.whetherReductionNumber = '';
                // this.addPartyRelationshipBean.reductionNumberType = '';
                this.whether = true;
            }
            //   if (this.addPartyRelationshipBean.parentTypeId < '0200') {
            //     // this.addPartyRelationshipBean.whetherUnifiedCredit = '1';//是否统一授信
            //     this.whetherCredit = false;
            // } else {               
            //     // this.addPartyRelationshipBean.whetherUnifiedCredit = '';//是否统一授信               
            //     this.whetherCredit = true;
            // }
            if (typeId == '01' || typeId == '02' || typeId == '03' || typeId == '032') {
                // this.addPartyRelationshipBean.whetherUnifiedCredit = '1';//是否统一授信
                this.whetherCredit = false;
            }
            else {
                // this.addPartyRelationshipBean.whetherUnifiedCredit = '';//是否统一授信               
                this.whetherCredit = true;
            }
            var param = {
                custNo: this.addPartyRelationshipBean.custNo
            };
            this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.addPartyRelationshipBean.principalLinkman = data.principalLinkmanName;
                    // this.principalLinkman = data.principalLinkmanName+"("+data.principalLinkman+")";
                    _this.addPartyRelationshipBean.principalLinkmanOrg = data.principalLinkmanOrgName;
                    // this.principalLinkmanOrg = data.principalLinkmanOrgName + "(" + data.principalLinkmanOrg + ")";
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        // this.copy();
    };
    RelationUpdateComponent.prototype.copy = function () {
        this.addPartyRelationshipBean = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.inValue);
    };
    //联动
    RelationUpdateComponent.prototype.doSelet = function () {
        this.whether1 = true;
        var typeId = this.addPartyRelationshipBean.relationshipType;
        if (typeId == '01' || typeId == '02' || typeId == '03' || typeId == '032') {
            this.addPartyRelationshipBean.whetherReductionNumber = '1'; //是否可冲减积数
            this.addPartyRelationshipBean.reductionNumberType = '1'; //冲减积数控制方式
            this.whether = false;
        }
        else {
            // this.addPartyRelationshipBean.whetherReductionNumber = '';
            // this.addPartyRelationshipBean.reductionNumberType = '';
            this.whether = true;
            if (this.addPartyRelationshipBean.whetherReductionNumber == '1') {
                this.addPartyRelationshipBean.reductionNumberType = '0';
            }
            else {
                this.addPartyRelationshipBean.reductionNumberType = '';
            }
        }
    };
    //确定按钮
    RelationUpdateComponent.prototype.modifySaveBtn = function () {
        var _this = this;
        if (this.addPartyRelationshipBean.whetherReductionNumber == '1' && (this.addPartyRelationshipBean.whetherUnifiedCredit == '' || this.addPartyRelationshipBean.whetherUnifiedCredit == '0')) {
            this.msgs = [{ severity: 'error', summary: '提示', detail: '冲减积数的关联关系，必须选择统一授信' }];
            return;
        }
        this.outValueBean.emit({ addPartyRelationshipBean: this.addPartyRelationshipBean, sign: 'update' });
        this.waitSelUserList = this.commfunc.query('GLGXXG', { relationshipType: this.addPartyRelationshipBean.relationshipType });
        this.outVal = this.waitSelUserList.waitSelUserList;
        this.aaaa = this.waitSelUserList.display;
        console.log(this.aaaa);
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var a = commonHeader.extParam.specifyNextOpers;
        console.log(a);
        if (this.waitSelUserList.erro) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro.message });
        }
        else {
            if (this.aaaa == true && (a == undefined || a == '' || a == null)) {
                this.outValue.emit({ outVal: this.outVal, aaaa: this.aaaa });
            }
            else if (this.aaaa == false || this.aaaa == undefined) {
                var ob = this.httpService.updatePartyRelationship(this.addPartyRelationshipBean);
                ob.subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        if (s.extParam.specifyNextOpers) {
                            delete s.extParam.specifyNextOpers;
                            var commonHeader_1 = s;
                            _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
                        }
                        _this.outValue.emit(false);
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        _this.addPartyRelationshipBean = new _bean_addPartyRelationship_bean__WEBPACK_IMPORTED_MODULE_2__["AddPartyRelationshipBean"]();
                    }
                    else {
                        var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        if (s.extParam.specifyNextOpers) {
                            delete s.extParam.specifyNextOpers;
                            var commonHeader_2 = s;
                            _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_2));
                        }
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                    if (s.extParam.specifyNextOpers) {
                        delete s.extParam.specifyNextOpers;
                        var commonHeader_3 = s;
                        _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_3));
                    }
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
                });
            }
        }
        // if(!this.addPartyRelationshipBean.whetherReductionNumber){
        //   this.whether1 = false;
        //   return;
        // }
    };
    //取消按钮
    RelationUpdateComponent.prototype.modifyCloseBtn = function () {
        this.outValue.emit(false);
        // this.addPartyRelationshipBean= new AddPartyRelationshipBean();
    };
    //码值
    RelationUpdateComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RelationUpdateComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RelationUpdateComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], RelationUpdateComponent.prototype, "outValueBean", void 0);
    RelationUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-relation-update',
            template: __webpack_require__(/*! ./relation-update.component.html */ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/relation-update/relation-update.component.html"),
            styles: [__webpack_require__(/*! ./relation-update.component.scss */ "./src/app/pages/tzb/custom/custom-view/association-relation/personal-relation/relation-update/relation-update.component.scss")],
            providers: [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], RelationUpdateComponent);
    return RelationUpdateComponent;
}());



/***/ })

}]);
//# sourceMappingURL=tzb-custom-custom-view-association-relation-cust-association-relation-module.js.map