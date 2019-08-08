(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-information-custom-information-module"],{

/***/ "./src/app/pages/tzb/custom/custom-information/advanced-search/add-search/open-search-conditions/bean/open-explore.bean.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/advanced-search/add-search/open-search-conditions/bean/open-explore.bean.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: OpenExploreBan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenExploreBan", function() { return OpenExploreBan; });
/**
 * 打开探索条件的bean
 */
var OpenExploreBan = /** @class */ (function () {
    function OpenExploreBan() {
    }
    return OpenExploreBan;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/advanced-search/add-search/open-search-conditions/open-search-conditions.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/advanced-search/add-search/open-search-conditions/open-search-conditions.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mature-template\">\r\n  <div class=\"ui-g\">\r\n      <div class=\"ui-g-12 \">\r\n          <div class=\"ui-g-2 label\">\r\n              <label>探索名称：</label>\r\n          </div>\r\n          <div class=\"ui-g-5\">\r\n              <input type=\"text\" pInputText class=\"ui-g-12\" [(ngModel)]=\"openExploreBan.expCondName\">\r\n          </div>\r\n      </div>\r\n      <div class=\"ui-g-12  \">\r\n          <div class=\"ui-g-2 label\">\r\n              <label>探索创建时间：</label>\r\n          </div>\r\n          <div class=\"ui-g-5\">\r\n              <p-calendar [showIcon]=\"true\" [locale]=\"ch\" [(ngModel)]=\"creatTimeStart\"></p-calendar>\r\n              <span>至</span>\r\n              <p-calendar [showIcon]=\"true\" [locale]=\"ch\" [(ngModel)]=\"creatTimeEnd\"></p-calendar>\r\n          </div>\r\n      </div>\r\n      <div class=\"ui-g-12  btn\">\r\n          <button pButton type=\"button\" label=\"查询\" (click)=\"queryClick()\"></button>\r\n          <button pButton type=\"button\" label=\"重置\" (click)=\"resetClick()\"></button>\r\n          <button pButton type=\"button\" label=\"确定\" (click)=\"confirmClick()\"></button>\r\n      </div>\r\n      <div class=\"ui-g-12 table\">\r\n          <p-dataTable [value]=\"custExplTable\">\r\n              <p-column header=\"选择\">\r\n                  <ng-template let-item=\"rowData\" pTemplate=\"body\" let-i=\"rowIndex\">\r\n                      <p-radioButton name=\"radio\" value=\"{{i}}\" (onClick)=\"checkRadioValue($event,item)\"></p-radioButton>\r\n                  </ng-template>\r\n              </p-column>\r\n              <p-column header=\"探索ID\" field=\"custExplId\"></p-column>\r\n              <p-column header=\"探索名称\" field=\"custExplName\"></p-column>\r\n              <p-column header=\"探索数据时间\" field=\"explDataTime\" [style]=\"{'width':'200px'}\"></p-column>\r\n              <p-column header=\"探索创建时间\" field=\"creatTime\" [style]=\"{'width':'200px'}\"></p-column>\r\n              <p-column header=\"探索应用次数\" field=\"applyNumber\"></p-column>\r\n              <p-column header=\"状态\" field=\"custExplStatus\">\r\n                  <ng-template let-col let-item=\"rowData\" pTemplate=\"body\">\r\n                      <span>{{item.custExplStatus|codeValuePie:cusExplStatus}}</span>\r\n                  </ng-template>\r\n              </p-column>\r\n          </p-dataTable>\r\n          <p-paginator rows=\"{{openExploreBan.pageSize}}\" totalRecords=\"{{custExpToalNum}}\" (onPageChange)=\"paginateExplo($event)\" [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/advanced-search/add-search/open-search-conditions/open-search-conditions.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/advanced-search/add-search/open-search-conditions/open-search-conditions.component.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mature-template .label {\n  text-align: right; }\n\n.mature-template .btn {\n  text-align: center; }\n\n.mature-template .table {\n  text-align: center; }\n\n.mature-template .ui-g-11 label {\n  display: inline-block;\n  width: 150px;\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYWR2YW5jZWQtc2VhcmNoL2FkZC1zZWFyY2gvb3Blbi1zZWFyY2gtY29uZGl0aW9ucy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1pbmZvcm1hdGlvblxcYWR2YW5jZWQtc2VhcmNoXFxhZGQtc2VhcmNoXFxvcGVuLXNlYXJjaC1jb25kaXRpb25zXFxvcGVuLXNlYXJjaC1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUJBQWlCLEVBQUE7O0FBRnpCO0VBS1Esa0JBQWtCLEVBQUE7O0FBTDFCO0VBUVEsa0JBQWtCLEVBQUE7O0FBUjFCO0VBWVkscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWluZm9ybWF0aW9uL2FkdmFuY2VkLXNlYXJjaC9hZGQtc2VhcmNoL29wZW4tc2VhcmNoLWNvbmRpdGlvbnMvb3Blbi1zZWFyY2gtY29uZGl0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXR1cmUtdGVtcGxhdGV7XHJcbiAgICAubGFiZWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmJ0bntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGFibGV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnVpLWctMTEge1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/advanced-search/add-search/open-search-conditions/open-search-conditions.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/advanced-search/add-search/open-search-conditions/open-search-conditions.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: OpenSearchConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSearchConditionsComponent", function() { return OpenSearchConditionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constant_target_custom_codeValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../constant/target-custom.codeValue */ "./src/app/pages/tzb/custom/custom-information/advanced-search/add-search/constant/target-custom.codeValue.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_custom_information_advanced_search_add_search_open_search_conditions_bean_open_explore_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/custom-information/advanced-search/add-search/open-search-conditions/bean/open-explore.bean */ "./src/app/pages/tzb/custom/custom-information/advanced-search/add-search/open-search-conditions/bean/open-explore.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OpenSearchConditionsComponent = /** @class */ (function () {
    function OpenSearchConditionsComponent(commfunc, httpService) {
        this.commfunc = commfunc;
        this.httpService = httpService;
        /**
          * 选择后的值
          */
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //bean
        this.openExploreBan = new app_pages_tzb_custom_custom_information_advanced_search_add_search_open_search_conditions_bean_open_explore_bean__WEBPACK_IMPORTED_MODULE_5__["OpenExploreBan"]();
        //码值
        this.cusExplStatus = _constant_target_custom_codeValue__WEBPACK_IMPORTED_MODULE_1__["CusExplStatus"]; //列表中的状态（条件状态）
        //日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"]; //日期转化中文
        this.creatTimeStart = ''; //探索创建时间起
        this.creatTimeEnd = ''; //探索创建时间止
        //单选选中(探索ID)的值
        this.custExplId = "";
        //表数据
        this.custExplTable = [];
        //提示信息  
        this.msgs = [];
    }
    //选择模板按钮
    OpenSearchConditionsComponent.prototype.ngOnChanges = function () {
        this.queryClick();
    };
    //选择模板按钮
    OpenSearchConditionsComponent.prototype.ngOnInit = function () {
        this.openExploreBan.pageSize = 10;
        this.openExploreBan.pageNum = 1;
        this.queryClick();
    };
    //查询按钮
    OpenSearchConditionsComponent.prototype.queryClick = function () {
        var _this = this;
        this.openExploreBan.creatTimeStart = this.commfunc.transDateN(this.creatTimeStart);
        this.openExploreBan.creatTimeEnd = this.commfunc.transDateN(this.creatTimeEnd);
        this.httpService.queryMyCustAdvanceSeachList(this.openExploreBan).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custExplTable = data.custExplList;
                _this.custExpToalNum = data.totalCount;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '探索条件结果', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '探索条件结果', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '探索条件结果', detail: '调用服务失败！' });
        });
    };
    //列表中的单选按钮
    OpenSearchConditionsComponent.prototype.checkRadioValue = function (event, item) {
        this.custExplId = item.custExplId;
    };
    //确定按钮（将探索ID带到父页面（新增目标客户探索））
    OpenSearchConditionsComponent.prototype.confirmClick = function () {
        this.outValue.emit(this.custExplId);
    };
    //分页
    OpenSearchConditionsComponent.prototype.paginateExplo = function (event) {
        //每页显示的条数
        this.openExploreBan.pageSize = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.openExploreBan.pageNum = currentPage;
        //调用查询的方法
        this.queryClick();
        this.openExploreBan.pageNum = 1;
    };
    //重置按钮
    OpenSearchConditionsComponent.prototype.resetClick = function () {
        this.openExploreBan = new app_pages_tzb_custom_custom_information_advanced_search_add_search_open_search_conditions_bean_open_explore_bean__WEBPACK_IMPORTED_MODULE_5__["OpenExploreBan"]();
        this.creatTimeStart = null;
        this.creatTimeEnd = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OpenSearchConditionsComponent.prototype, "outValue", void 0);
    OpenSearchConditionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-open-search-conditions',
            template: __webpack_require__(/*! ./open-search-conditions.component.html */ "./src/app/pages/tzb/custom/custom-information/advanced-search/add-search/open-search-conditions/open-search-conditions.component.html"),
            styles: [__webpack_require__(/*! ./open-search-conditions.component.scss */ "./src/app/pages/tzb/custom/custom-information/advanced-search/add-search/open-search-conditions/open-search-conditions.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"]])
    ], OpenSearchConditionsComponent);
    return OpenSearchConditionsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-infomation.routing.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-infomation.routing.ts ***!
  \**********************************************************************************/
/*! exports provided: routes, CusInfomationRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusInfomationRouting", function() { return CusInfomationRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_information_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-information.component */ "./src/app/pages/tzb/custom/custom-information/custom-information.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_information_plan_task_deal_plan_task_deal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/custom-information/plan-task-deal/plan-task-deal.component */ "./src/app/pages/tzb/custom/custom-information/plan-task-deal/plan-task-deal.component.ts");
/* harmony import */ var _foreground_background_wait_do_detail_wait_do_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foreground-background/wait-do-detail/wait-do-detail */ "./src/app/pages/tzb/custom/custom-information/foreground-background/wait-do-detail/wait-do-detail.ts");

//客户信息管理

//高级搜索
// import { CustomSignComponent } from '../custom-view/custom-general/custom-sign/custom-sign.component';


var routes = [
    {
        path: '',
        component: _custom_information_component__WEBPACK_IMPORTED_MODULE_1__["CustomInformation"],
        children: [
            { path: 'advanced-search', loadChildren: './advanced-search/advanced-search.module#AdvancedSearchModule' },
            { path: 'association-relation', loadChildren: './association-relation/association-relation.module#AssociationRelationModule' },
            { path: 'mine-custom', loadChildren: './mine-custom/mine-custom.module#MineCustomModule' },
            { path: 'custom-change', loadChildren: './custom-change/custom-change.module#CustomChangeModule' },
            // {path: 'custom-sign', component: CustomSignComponent},
            { path: 'plan-task-deal', component: app_pages_tzb_custom_custom_information_plan_task_deal_plan_task_deal_component__WEBPACK_IMPORTED_MODULE_2__["PlanTaskDealComponent"] },
            { path: 'custom-cross-selling', loadChildren: './custom-cross-selling/custom-cross-selling.module#CustomCrossSellingModule' },
            { path: 'custom-model-data', loadChildren: './custom-model-data/custom-model-data.module#CustomModelDataModule' }
        ]
    },
    {
        path: 'foreground-background',
        loadChildren: './foreground-background/foreground-background.module#ForegroundBackgroundModule'
    },
    {
        path: 'wait-do-datail',
        component: _foreground_background_wait_do_detail_wait_do_detail__WEBPACK_IMPORTED_MODULE_3__["WaitDoDetailComponent"]
    },
];
var CusInfomationRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-information.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-information.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 functions\">\r\n    <span *ngIf=\"freeGroupIdTrue && permissionCheck('SID00001_P020')\">\r\n        <a [routerLink]=\"[ '/pages/tzb/custom/custom-information/mine-custom/mine-custom-overview2']\" class=\"change\" [ngClass]=\"{'active':show==1}\"\r\n            (click)=\"apply(1)\">\r\n            客户概览\r\n        </a>\r\n    </span>\r\n    <span *ngIf=\"freeGroupIdTrue && permissionCheck('SID00001_P022')\">\r\n        <!--  -->\r\n        <a [routerLink]=\"[ '/pages/tzb/custom/custom-search']\" class=\"change\" [ngClass]=\"{'active':show==2}\"\r\n            (click)=\"apply(2)\">\r\n            搜客\r\n        </a>\r\n    </span>\r\n    <span *ngIf=\"freeGroupIdTrue && permissionCheck('SID00001_P023')\">\r\n        <a [routerLink]=\"['/pages/tzb/custom/custom-information/advanced-search/add-search']\" class=\"change\" [ngClass]=\"{'active':show==5}\"\r\n            (click)=\"apply(5)\">\r\n            高级搜索\r\n        </a>\r\n    </span>\r\n    <span *ngIf=\"freeGroupIdTrue && permissionCheck('SID00001_P021')\">\r\n        <a [routerLink]=\"[ '/pages/tzb/custom/custom-information/mine-custom/custom-Assets-liability']\" class=\"change\" [ngClass]=\"{'active':show==3}\"\r\n            (click)=\"apply(3)\">\r\n            存贷变动\r\n        </a>\r\n    </span>\r\n    <!-- <span  *ngIf=\"freeGroupIdTrue && permissionCheck('SID00001_P022')\">\r\n    <a [routerLink]=\"[ '/pages/tzb/custom/custom-information/mine-custom/custom-hold-products']\" class=\"change\" [ngClass]=\"{'active':show==4}\"\r\n        (click)=\"apply(4)\">\r\n        客户产品分布\r\n    </a>\r\n</span> -->\r\n    <span *ngIf=\"permissionCheck('SID00001_P025')\">\r\n        <a [routerLink]=\"[ '/pages/tzb/custom/custom-information/mine-custom/integral-info-query/card-details-query']\" class=\"change\"\r\n            [ngClass]=\"{'active':show==4}\" (click)=\"apply(4)\">\r\n            积分查询\r\n        </a>\r\n    </span>\r\n\r\n    <span *ngIf=\"freeGroupIdTrue && permissionCheck('SID00001_P024')\">\r\n        <a [routerLink]=\"[ '/pages/tzb/custom/custom-information/mine-custom/cross-selling']\" class=\"change\" [ngClass]=\"{'active':show==8}\"\r\n            (click)=\"apply(8)\">\r\n            模型超市\r\n        </a>\r\n    </span>\r\n    <span *ngIf=\"permissionCheck('SID00001_P027')\">\r\n        <a [routerLink]=\"[ '/pages/tzb/custom/custom-information/custom-cross-selling']\" class=\"change\" [ngClass]=\"{'active':show==9}\"\r\n            (click)=\"apply(9)\">\r\n            交叉销售清单\r\n        </a>\r\n    </span>\r\n    <span *ngIf=\"permissionCheck('SID00001_P026')\">\r\n        <a [routerLink]=\"[ '/pages/tzb/custom/custom-information/custom-model-data']\" class=\"change\" [ngClass]=\"{'active':show==10}\"\r\n            (click)=\"apply(10)\">\r\n            模型数据推送规则\r\n        </a>\r\n    </span>\r\n</div>\r\n<div class=\"ui-g-12 module padding-one bgcolor\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-information.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-information.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host/deep/ .ui-menubar {\n  border: none;\n  background-color: red !important; }\n\n.flt {\n  float: left;\n  background-color: red; }\n\n.basic {\n  margin-top: 5px;\n  background-color: white; }\n\n.functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0; }\n\n.functions .change {\n    display: inline-block;\n    font-size: 15px;\n    height: 40px;\n    line-height: 40px;\n    border-radius: 3px 3px 0 0;\n    color: #929292;\n    padding: 0px 30px;\n    font-weight: bold; }\n\n.active {\n  border: none !important;\n  background-color: #f7f7f7 !important;\n  color: #003f5c !important; }\n\n.padding-one {\n  padding: 1em; }\n\n.bgcolor {\n  background: #f7f7f7; }\n\n@media screen and (max-width: 1280px) {\n  .functions {\n    border-bottom: 1px solid #dddddd; }\n  .active {\n    background-color: #e5e6e9 !important; }\n  .bgcolor {\n    background: #e5e6e9; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20taW5mb3JtYXRpb25cXGN1c3RvbS1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixnQ0FDSixFQUFBOztBQUVBO0VBQ0ksV0FBVztFQUNYLHFCQUNKLEVBQUE7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FBSzNCO0VBQ0ksZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBSG5CO0lBS1EscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJO0lBQ0ksZ0NBQWdDLEVBQUE7RUFFcEM7SUFDSSxvQ0FBb0MsRUFBQTtFQUV4QztJQUNJLG1CQUFtQixFQUFBLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vY3VzdG9tLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QvZGVlcC8gLnVpLW1lbnViYXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmZsdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZFxyXG59XHJcblxyXG4uYmFzaWMge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8vIOWIh+aNolxyXG5cclxuLmZ1bmN0aW9ucyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlZjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgLmNoYW5nZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XHJcbiAgICAgICAgY29sb3I6ICM5MjkyOTI7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwM2Y1YyAhaW1wb3J0YW50O1xyXG59XHJcbi5wYWRkaW5nLW9uZXtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG4uYmdjb2xvcntcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgIC5mdW5jdGlvbnMge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgfVxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTZlOSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJnY29sb3J7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U1ZTZlOTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-information.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-information.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomInformation", function() { return CustomInformation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomInformation = /** @class */ (function () {
    function CustomInformation(commfunc, route) {
        this.commfunc = commfunc;
        this.route = route;
        this.show = 1;
        this.freeGroupIdTrue = true;
        if (this.route.snapshot.params['freeGroupId']) {
            // this.freeGroupId = this.route.snapshot.params['freeGroupId'];
            this.freeGroupIdTrue = false;
        }
    }
    CustomInformation.prototype.ngOnInit = function () {
        this.items1 = [
            {
                label: '我的客户概览',
                routerLink: '/pages/tzb/custom/custom-information/mine-custom/mine-custom-overview2'
            }
        ];
        this.items2 = [
            {
                label: '客户九宫格分析',
                routerLink: '/pages/tzb/custom/custom-information/mine-custom/custom-profile-analysis'
            }
        ];
        this.items3 = [
            {
                label: '资产负债变动',
                routerLink: '/pages/tzb/custom/custom-information/mine-custom/custom-Assets-liability'
            }
        ];
        //  this.items4 = [
        //   {
        //     label: '客户产品分布',
        //     routerLink: '/pages/tzb/custom/custom-information/mine-custom/custom-hold-products'
        //   }
        // ];
        this.items5 = [
            {
                label: '高级搜索',
                items: [
                    {
                        label: '高级搜索',
                        routerLink: '/pages/tzb/custom/custom-information/advanced-search/add-search'
                    },
                    {
                        label: '高级搜索模板管理',
                        routerLink: '/pages/tzb/custom/custom-information/advanced-search/add-search-manage'
                    },
                ]
            }
        ];
        // this.items6 = [
        //   {
        //     label: '关联关系',
        //     items: [
        //       // {
        //       //   label: '关联关系管理',
        //       //   items: [
        //       //     {
        //       //       label: '查询',
        //       //       routerLink: '/pages/tzb/custom/association-relation/association-relation-manager/association-relation-list'
        //       //     },
        //       //     {
        //       //       label: '变更记录',
        //       //       routerLink: '/pages/tzb/custom/custom-information/association-relation/association-relation-manager/association-change-record'
        //       //     }
        //       //   ]
        //       // },
        //       {
        //         label: '客户关联关系维护',
        //         items: [
        //           {
        //             label: '关系类型维护',
        //             routerLink: '/pages/tzb/custom/custom-information/association-relation/custom-relationship-maintenance/relationship-type-query'
        //           },
        //           {
        //             label: '拓扑关系维护',
        //             routerLink: '/pages/tzb/custom/custom-information/association-relation/custom-relationship-maintenance/topological-relationship-maintenance'
        //           }
        //         ]
        //       }
        //     ]
        //   }
        // ];
        this.items7 = [
            {
                label: '标签类型',
                routerLink: '/pages/tzb/custom/custom-information/custom-sign'
            },
            {
                label: '积分信息查询',
                routerLink: '/pages/tzb/custom/custom-information/mine-custom/integral-info-query/card-details-query',
            }
        ];
        this.items8 = [
            {
                label: '模型超市',
                routerLink: '/pages/tzb/custom/custom-information/mine-custom/cross-selling'
            }
        ];
        this.items9 = [
            {
                label: '主联系人调整',
                routerLink: '/pages/tzb/custom/custom-marketing/cus-apply/custom-manager/custom-do-apply'
            }
        ];
        this.judgStatu();
    };
    // 判断当前路由 改变样式active
    CustomInformation.prototype.judgStatu = function () {
        var _this = this;
        var url = window.location.href;
        var urlSplit = url.split('/');
        urlSplit.map(function (v) {
            if (v === 'mine-custom-overview2') {
                _this.show = 1;
            }
            else if (v === 'custom-Assets-liability') {
                _this.show = 3;
            }
            else if (v === 'integral-info-query') {
                _this.show = 4;
            }
            else if (v === 'advanced-search') {
                _this.show = 5;
            }
            else if (v === 'cross-selling') {
                _this.show = 8;
            }
            else if (v === 'custom-cross-selling') {
                _this.show = 9;
            }
            else if (v === 'custom-model-data') {
                _this.show = 10;
            }
        });
    };
    //按钮权限
    CustomInformation.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomInformation.prototype.apply = function (num) {
        this.show = num;
    };
    CustomInformation.prototype.menuClick = function (param) {
        if (param == '1') {
            console.log(1);
        }
    };
    CustomInformation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-information',
            template: __webpack_require__(/*! ./custom-information.component.html */ "./src/app/pages/tzb/custom/custom-information/custom-information.component.html"),
            styles: [__webpack_require__(/*! ./custom-information.component.scss */ "./src/app/pages/tzb/custom/custom-information/custom-information.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CustomInformation);
    return CustomInformation;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-information.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-information.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CusInfomationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusInfomationModule", function() { return CusInfomationModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custom_infomation_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-infomation.routing */ "./src/app/pages/tzb/custom/custom-information/custom-infomation.routing.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var _custom_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-information.component */ "./src/app/pages/tzb/custom/custom-information/custom-information.component.ts");
/* harmony import */ var _mine_custom_mine_custom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mine-custom/mine-custom.component */ "./src/app/pages/tzb/custom/custom-information/mine-custom/mine-custom.component.ts");
/* harmony import */ var _advanced_search_add_search_open_search_conditions_open_search_conditions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./advanced-search/add-search/open-search-conditions/open-search-conditions.component */ "./src/app/pages/tzb/custom/custom-information/advanced-search/add-search/open-search-conditions/open-search-conditions.component.ts");
/* harmony import */ var _plan_task_deal_plan_task_deal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plan-task-deal/plan-task-deal.component */ "./src/app/pages/tzb/custom/custom-information/plan-task-deal/plan-task-deal.component.ts");
/* harmony import */ var _foreground_background_wait_do_detail_wait_do_detail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./foreground-background/wait-do-detail/wait-do-detail */ "./src/app/pages/tzb/custom/custom-information/foreground-background/wait-do-detail/wait-do-detail.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






 //客户运营平台 http
 //客户信息
//客户信息管理
 //客户信息管理
// import { CustomChange } from './custom-change/custom-change.component';//客户变动
// import { CustomGeneral } from './custom-change/custom-general/custom-general.component';//客户概况
 //我的客户



var CusInfomationModule = /** @class */ (function () {
    function CusInfomationModule() {
    }
    CusInfomationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _custom_infomation_routing__WEBPACK_IMPORTED_MODULE_4__["CusInfomationRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
            ],
            declarations: [
                _mine_custom_mine_custom_component__WEBPACK_IMPORTED_MODULE_9__["MineCustomComponent"],
                // CustomChange,
                _custom_information_component__WEBPACK_IMPORTED_MODULE_8__["CustomInformation"],
                _advanced_search_add_search_open_search_conditions_open_search_conditions_component__WEBPACK_IMPORTED_MODULE_10__["OpenSearchConditionsComponent"],
                _plan_task_deal_plan_task_deal_component__WEBPACK_IMPORTED_MODULE_11__["PlanTaskDealComponent"],
                _foreground_background_wait_do_detail_wait_do_detail__WEBPACK_IMPORTED_MODULE_12__["WaitDoDetailComponent"],
            ],
            providers: [
                _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__["CusOperationHttpService"],
                _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_7__["CusViewHttpService"]
            ]
        })
    ], CusInfomationModule);
    return CusInfomationModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/foreground-background/wait-do-detail/wait-do-detail.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/foreground-background/wait-do-detail/wait-do-detail.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'营销基本要素'\"></header-title>\r\n  </div>\r\n  <div class=\"ui-g-offset-1\">\r\n    <div class=\"ui-g-12\">\r\n      <span>客户号：</span>{{item.custNo}}\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <span>客户姓名：</span>{{item.custName}}\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <span>联系电话：</span>{{item.custPhone}}\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <span>创建日期：</span>{{item.createdDate}}\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <span>信息内容：</span>{{item.description}}\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'营销处理结果'\"></header-title>\r\n  </div>\r\n  <div class=\"ui-g-offset-1\">\r\n    <div class=\"ui-g-12\">\r\n      <span>指派人：</span>{{item.createdByUserLoginName}}\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <span>归属人：</span>{{item.ownerPartyName}}\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <span>营销状态：</span>{{statusId}}\r\n    </div>\r\n\r\n    <!-- <div class=\"ui-g-12\">\r\n      <span>是否建立联系计划：</span>{{itemOther.status}}\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <span>建立时间：</span>{{itemOther.claimCreatedDate}}\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <span>是否已联系：</span>{{itemOther.contactStatus}}\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <span>联系时间：</span>{{itemOther.contactDate}}\r\n    </div> -->\r\n    <div *ngIf=\"item.fulfillContactMechId == 0\" class=\"ui-g-12\">\r\n      <span>是否建立联系计划：</span>{{item.fulfillContactMechId == '0' ? '否' : '是'}}\r\n    </div>\r\n    <div *ngIf=\"item.fulfillContactMechId == 1\" class=\"ui-g-12\">\r\n      <span>是否建立联系计划：</span>{{item.fulfillContactMechId == '0' ? '否' : '是'}}\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <span>建立时间：</span>{{item.contactCreatedDate}}\r\n    </div>\r\n    <!-- <div class=\"ui-g-12\">\r\n      <span>是否已联系：</span>{{itemOther.contactStatus}}\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <span>联系时间：</span>{{itemOther.contactDate}}\r\n    </div> -->\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui-g\" *ngIf=\"item.fulfillContactMechId == 0\">\r\n  <div class=\"ui-g-12 center2\">\r\n    <button pButton type=\"button\" (click)=\"newPlan_1()\" label=\"新建联系计划\"></button>\r\n  </div>\r\n</div>\r\n<!-- 模态框 -->\r\n<div *ngIf=\"display_0\" >\r\n  <p-dialog *ngIf=\"display_0\" [(visible)]=\"display_0\"  modal=\"modal\" [positionTop]=10 class=\"contact-track-common\">\r\n    <p-header>\r\n      新建联系计划\r\n    </p-header>\r\n    <app-contact-plan-record-common [is-font-after]=\"isFontAfter\" [in-value]=\"addInValue\" (outValue)=\"addCall($event)\"></app-contact-plan-record-common>\r\n  </p-dialog>\r\n  \r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/foreground-background/wait-do-detail/wait-do-detail.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/foreground-background/wait-do-detail/wait-do-detail.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center2 {\n  text-align: center; }\n\n:host/deep/ .contact-track-common .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n:host /deep/ .contact-track-common .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vZm9yZWdyb3VuZC1iYWNrZ3JvdW5kL3dhaXQtZG8tZGV0YWlsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWluZm9ybWF0aW9uXFxmb3JlZ3JvdW5kLWJhY2tncm91bmRcXHdhaXQtZG8tZGV0YWlsXFx3YWl0LWRvLWRldGFpbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vZm9yZWdyb3VuZC1iYWNrZ3JvdW5kL3dhaXQtZG8tZGV0YWlsL3dhaXQtZG8tZGV0YWlsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG46aG9zdC9kZWVwLyAuY29udGFjdC10cmFjay1jb21tb24gLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gLmNvbnRhY3QtdHJhY2stY29tbW9uIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/foreground-background/wait-do-detail/wait-do-detail.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/foreground-background/wait-do-detail/wait-do-detail.ts ***!
  \************************************************************************************************************/
/*! exports provided: WaitDoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitDoDetailComponent", function() { return WaitDoDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 前后台联动管理-我的营销信息
 */
var WaitDoDetailComponent = /** @class */ (function () {
    function WaitDoDetailComponent(cusOperationHttpService, route) {
        this.cusOperationHttpService = cusOperationHttpService;
        this.route = route;
        this.display_0 = false;
        this.pageSize = 10;
        this.isFontAfter = true;
        this.msgs = []; //提示信息
        this.item = []; //接收后台数据
        this.itemOther = []; //接收后台数据
        this.tableList = [];
        // 获取路由参数
        this.location_params = this.route.snapshot.params;
        var params = {
            custRequestId: this.location_params.custRequestId,
            workId: this.location_params.workId,
            workType: this.location_params.workType
        };
        this.showInfo(params);
    }
    WaitDoDetailComponent.prototype.showInfo = function (params) {
        var _this = this;
        this.cusOperationHttpService.frontBackLinkageInfoDetailQry(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.statusId == '0') {
                    _this.statusId = '待分配';
                }
                else if (data.statusId == '1') {
                    _this.statusId = '已认领';
                }
                else if (data.statusId == '2') {
                    _this.statusId = '已分配';
                }
                else if (data.statusId == '3') {
                    _this.statusId = '已失效';
                }
                _this.item = data;
                if (data.taskId) {
                    var param = {
                        taskId: data.taskId,
                        pageNum: 1,
                        pageSize: 10
                    };
                    _this.callBackData(param);
                }
                else {
                    _this.itemOther = {
                        status: '否',
                        claimCreatedDate: '',
                        contactStatus: '',
                        contactDate: ''
                    };
                }
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    WaitDoDetailComponent.prototype.callBackData = function (param) {
        var _this = this;
        this.cusOperationHttpService.queryCustContactProgram(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.pageList[0].contactStatus == '1') {
                    _this.itemOther = {
                        status: '是',
                        claimCreatedDate: data.pageList[0].claimCreatedDate,
                        contactStatus: '否',
                        dealDate: data.pageList[0].dealDate
                    };
                }
                if (data.pageList[0].contactStatus == '2') {
                    _this.itemOther = {
                        status: '是',
                        claimCreatedDate: data.pageList[0].claimCreatedDate,
                        contactStatus: '是',
                        dealDate: data.pageList[0].dealDate
                    };
                }
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
    //新建联系计划页面
    WaitDoDetailComponent.prototype.newPlan_1 = function () {
        this.tableList = [];
        this.tableList.push(this.item);
        this.addInValue = this.tableList;
        // this.new_arr1 = [];
        // this.new_arr1.push({ custRequestId: this.tableListAllot[0].custRequestId });
        this.display_0 = true;
    };
    // 关闭新增窗口
    WaitDoDetailComponent.prototype.addCall = function (event) {
        if (!event.stu) {
            this.display_0 = event.stu;
            this.fontAfterUpdateCustRequestWorkEffort(event);
        }
    };
    //前后台联动时用到的服务
    WaitDoDetailComponent.prototype.fontAfterUpdateCustRequestWorkEffort = function (event) {
        var _this = this;
        var params = {
            custRequestIdList: [{ custRequestId: this.location_params.custRequestId }],
            contactId: event.workEffortId
        };
        var ob = this.cusOperationHttpService.UpdateCustRequestWorkEffort(params);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    WaitDoDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wait-do-detail',
            template: __webpack_require__(/*! ./wait-do-detail.html */ "./src/app/pages/tzb/custom/custom-information/foreground-background/wait-do-detail/wait-do-detail.html"),
            styles: [__webpack_require__(/*! ./wait-do-detail.scss */ "./src/app/pages/tzb/custom/custom-information/foreground-background/wait-do-detail/wait-do-detail.scss")]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WaitDoDetailComponent);
    return WaitDoDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/mine-custom/mine-custom.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/mine-custom/mine-custom.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/mine-custom/mine-custom.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/mine-custom/mine-custom.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWluZm9ybWF0aW9uL21pbmUtY3VzdG9tL21pbmUtY3VzdG9tLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/mine-custom/mine-custom.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/mine-custom/mine-custom.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MineCustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MineCustomComponent", function() { return MineCustomComponent; });
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

var MineCustomComponent = /** @class */ (function () {
    function MineCustomComponent() {
    }
    MineCustomComponent.prototype.ngOnInit = function () {
    };
    MineCustomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mine-custom',
            template: __webpack_require__(/*! ./mine-custom.component.html */ "./src/app/pages/tzb/custom/custom-information/mine-custom/mine-custom.component.html"),
            styles: [__webpack_require__(/*! ./mine-custom.component.scss */ "./src/app/pages/tzb/custom/custom-information/mine-custom/mine-custom.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MineCustomComponent);
    return MineCustomComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/plan-task-deal/bean/deal-task.bean.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/plan-task-deal/bean/deal-task.bean.ts ***!
  \*******************************************************************************************/
/*! exports provided: DealTaskBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealTaskBean", function() { return DealTaskBean; });
var DealTaskBean = /** @class */ (function () {
    function DealTaskBean() {
    }
    return DealTaskBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/plan-task-deal/bean/tenType.bean.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/plan-task-deal/bean/tenType.bean.ts ***!
  \*****************************************************************************************/
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

/***/ "./src/app/pages/tzb/custom/custom-information/plan-task-deal/plan-task-deal.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/plan-task-deal/plan-task-deal.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 处理结果为1、3 -->\r\n<div class=\"ui-g padding-zero module\" *ngIf=\"isBtnTrue\">\r\n    <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"'客户联系任务处理'\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label appValidation>客户名称：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.custName\" disabled>\r\n                </div>\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label appValidation>客户号：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.custNo\" disabled>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>合同号/卡号：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.dealNo\" disabled>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label appValidation>联系主题：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <p-dropdown [options]=\"lxzt\" [style]=\"{'width':'121px'}\" [(ngModel)]=\"dealTaskBean.contactTheme\" disabled></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label appValidation>联系方式：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <p-dropdown [options]=\"contactWay\" [style]=\"{'width':'121px'}\" [(ngModel)]=\"dealTaskBean.contactWay\" disabled></p-dropdown>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label appValidation>计划联系时间：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <p-calendar [(ngModel)]=\"planContactTime\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" [showIcon]=\"true\"\r\n                        (onSelect)=\"showCreateData()\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [readonlyInput]=\"true\" disabled></p-calendar>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isDealDate\">\r\n                        必输\r\n                    </span>\r\n                </div>\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>任务接收类型：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.receiveTypeName\" disabled>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>主联系人：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.managerUserName\" disabled>\r\n                </div>\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>所属部门：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.managerDepartmentName\" disabled>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>所属支行：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.managerOrgName\" disabled>\r\n                </div>\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>所属分行：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.managerBranchName\" disabled>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label appValidation>经办人：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.ownerUserName\" disabled>\r\n                </div>\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label appValidation>经办机构：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.ownerOrgName\" disabled>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12\" *ngIf=\"Property0\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label appValidation>处理结果：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <p-dropdown [options]=\"contactResult\" [style]=\"{'width':'121px'}\" [(ngModel)]=\"dealTaskBean.contactResult\" (onChange)=\"changeResult()\"></p-dropdown>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isResult\">\r\n                        必输\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\" *ngIf=\"Property1\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label appValidation>存入时间：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <p-calendar [(ngModel)]=\"amtDate\" [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\"\r\n                        (onSelect)=\"showCreateData()\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" ></p-calendar>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isInputTime\">\r\n                        必输\r\n                    </span>\r\n                </div>\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label appValidation>存入金额(元)：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.amt\">\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isInputMoney\">\r\n                        必输\r\n                    </span>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!isInputMoney && isAmtType\">\r\n                        格式不正确\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\" *ngIf=\"Property2\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label appValidation>请描述原因：</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea [(ngModel)]=\"dealTaskBean.remarks\" placeholder=\"200个汉字\"></textarea>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isInput\">\r\n                        必输\r\n                    </span>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isInputLong\">\r\n                        最多可输入200个字！\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\" *ngIf=\"Property3\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label appValidation>回收金额(元)：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.amt\">\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isInput\">\r\n                        必输\r\n                    </span>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!isInput && ishsAmtType\">\r\n                        格式不正确\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\" *ngIf=\"Property4\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label appValidation>续卡金额(元)：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.amt\">\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isInput\">\r\n                        必输\r\n                    </span>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!isInput && isxkAmtType\">\r\n                        格式不正确\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\" *ngIf=\"Property5\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label appValidation>手工录入：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea [(ngModel)]=\"dealTaskBean.remarks\" placeholder=\"200个汉字\"></textarea>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isInput\">\r\n                        必输\r\n                    </span>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isInputLong\">\r\n                        最多可输入200个字！\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"ui-g\" *ngIf=\"Property6\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label appValidation>需再次联系时间：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <p-calendar [(ngModel)]=\"needAgainDate\" [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\"\r\n                        (onSelect)=\"showCreateData()\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [readonlyInput]=\"true\"></p-calendar>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isInput\">\r\n                        必输\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n    </div>\r\n    <div class=\"ui-g-12 btn-return\">\r\n        <button pButton type=\"button\" label=\"提交\" (click)=\"submit()\" *ngIf=\"subShow\" disabled></button>\r\n        <button pButton type=\"button\" label=\"提交\" (click)=\"submit()\" *ngIf=\"!subShow\"></button>\r\n        <button pButton type=\"button\" label=\"返回\" (click)=\"close()\"></button>\r\n    </div>\r\n</div>\r\n\r\n<!-- 处理结果为2、4、5、6 -->\r\n<div class=\"basis-group\" *ngIf=\"!isBtnTrue\">\r\n    <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"'客户联系任务处理'\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>客户名称：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.custName\" disabled>\r\n                </div>\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>客户号：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.custNo\" disabled>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>合同号/卡号：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.dealNo\" disabled>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>联系主题：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <p-dropdown [options]=\"lxzt\" [style]=\"{'width':'121px'}\" [(ngModel)]=\"dealTaskBean.contactTheme\" disabled></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>联系方式：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <p-dropdown [options]=\"contactWay\" [style]=\"{'width':'121px'}\" [(ngModel)]=\"dealTaskBean.contactWay\" disabled></p-dropdown>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>计划联系时间：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <p-calendar [(ngModel)]=\"planTime\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" [showIcon]=\"true\"\r\n                        (onSelect)=\"showCreateData()\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [readonlyInput]=\"true\" disabled></p-calendar>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isDealDate\">\r\n                        必输\r\n                    </span>\r\n                </div>\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>任务接收类型：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.receiveTypeName\" disabled>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>主联系人：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.managerUserName\" disabled>\r\n                </div>\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>所属部门：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.managerDepartmentName\" disabled>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>所属支行：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.managerOrgName\" disabled>\r\n                </div>\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>所属分行：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.managerBranchName\" disabled>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>经办人：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.ownerUserName\" disabled>\r\n                </div>\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>经办机构：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.ownerOrgName\" disabled>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12\" *ngIf=\"Property0\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>处理结果：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <p-dropdown [options]=\"contactResultMZ\" [style]=\"{'width':'121px'}\" [(ngModel)]=\"dealTaskBean.contactResult\" (onChange)=\"changeResult()\"\r\n                        disabled></p-dropdown>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isResult\">\r\n                        必输\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\" *ngIf=\"Property1\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>存入时间：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <p-calendar [(ngModel)]=\"amtDate\" [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\"\r\n                        (onSelect)=\"showCreateData()\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [readonlyInput]=\"true\" disabled></p-calendar>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isInputTime\">\r\n                        必输\r\n                    </span>\r\n                </div>\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>存入金额(元)：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.amt\" disabled>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isInputMoney\">\r\n                        必输\r\n                    </span>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!isInputMoney && isAmtType\">\r\n                        格式不正确\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\" *ngIf=\"Property2\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>描述原因：</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea [(ngModel)]=\"dealTaskBean.remarks\" disabled></textarea>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isInput\">\r\n                        必输\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\" *ngIf=\"Property3\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>回收金额(元)：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.amt\">\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isInput\" disabled>\r\n                        必输\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\" *ngIf=\"Property4\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>续卡金额(元)：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"dealTaskBean.amt\">\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isInput\" disabled>\r\n                        必输\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g\" *ngIf=\"Property5\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>手工录入：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea [(ngModel)]=\"dealTaskBean.remarks\" disabled></textarea>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isInput\">\r\n                        必输\r\n                    </span>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isInputLong\">\r\n                        最多可输入200个字！\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"ui-g\" *ngIf=\"Property6\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>需再次联系时间：</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <p-calendar [(ngModel)]=\"needAgainDate\" [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\"\r\n                        (onSelect)=\"showCreateData()\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [readonlyInput]=\"true\" disabled></p-calendar>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isInput\">\r\n                        必输\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/plan-task-deal/plan-task-deal.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/plan-task-deal/plan-task-deal.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g {\n  padding-bottom: 1px; }\n\n.btn-return {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n@media screen and (max-width: 1280px) {\n  .basic {\n    margin-top: 0px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vcGxhbi10YXNrLWRlYWwvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20taW5mb3JtYXRpb25cXHBsYW4tdGFzay1kZWFsXFxwbGFuLXRhc2stZGVhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJO0lBQ0ksMEJBQTBCLEVBQUEsRUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1pbmZvcm1hdGlvbi9wbGFuLXRhc2stZGVhbC9wbGFuLXRhc2stZGVhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1nIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbn1cclxuXHJcbi5idG4tcmV0dXJuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLmJhc2ljIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/plan-task-deal/plan-task-deal.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/plan-task-deal/plan-task-deal.component.ts ***!
  \************************************************************************************************/
/*! exports provided: PlanTaskDealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanTaskDealComponent", function() { return PlanTaskDealComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_custom_information_plan_task_deal_bean_deal_task_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/custom-information/plan-task-deal/bean/deal-task.bean */ "./src/app/pages/tzb/custom/custom-information/plan-task-deal/bean/deal-task.bean.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_custom_information_plan_task_deal_bean_tenType_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/custom-information/plan-task-deal/bean/tenType.bean */ "./src/app/pages/tzb/custom/custom-information/plan-task-deal/bean/tenType.bean.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @author fanhualing 2018-4-18 客户联系任务处理-工作台
 */









var PlanTaskDealComponent = /** @class */ (function () {
    function PlanTaskDealComponent(httpService, commfunc, confirmationService, route, router) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.confirmationService = confirmationService;
        this.route = route;
        this.router = router;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.kindDo = '';
        this.dealTaskBean = new app_pages_tzb_custom_custom_information_plan_task_deal_bean_deal_task_bean__WEBPACK_IMPORTED_MODULE_4__["DealTaskBean"]();
        this.lxzt = [];
        this.contactWay = [];
        this.contactResultMZ = [];
        this.contactResultSF = [];
        this.contactResultZB = [];
        this.msgs = [];
        this.taskId = '';
        this.Property0 = true;
        this.Property1 = false;
        this.Property2 = false;
        this.Property3 = false;
        this.Property4 = false;
        this.Property5 = false;
        // Property6: boolean = false;
        this.isSpan = false;
        this.isResult = false;
        this.isInput = false;
        this.isInputTime = false;
        this.isInputMoney = false;
        this.isDealDate = false;
        this.isInputLong = false; //
        this.tenTypeBean = new app_pages_tzb_custom_custom_information_plan_task_deal_bean_tenType_bean__WEBPACK_IMPORTED_MODULE_6__["TenTypeBean"]();
        this.orgId = '';
        this.userId = '';
        this.custNo = '';
        this.ident = '';
        this.htbh = '';
        this.isBtnTrue = false;
        this.subShow = false;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["CALENDAR_CN"];
        this.ICCardTypeurl = '';
        this.isAmtType = false;
        this.ishsAmtType = false;
        this.isxkAmtType = false;
        this.codeValues();
        this.lxzt = this.code['Lxzt'];
        this.contactWay = this.code['ContactWays'];
        this.contactResultMZ = this.code['ContactResultMZ'];
        this.contactResultSF = this.code['ContactResultSF'];
        this.contactResultZB = this.code['ContactResultZB'];
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.orgId) {
            this.orgId = this.user.orgId;
        }
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
    }
    //码值
    PlanTaskDealComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    PlanTaskDealComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dealTaskBean.ownerUserName = JSON.parse(this.commfunc.getSessionDataCH('chName')).userName;
        this.dealTaskBean.ownerUser = this.userId;
        this.dealTaskBean.ownerOrgName = JSON.parse(this.commfunc.getSessionDataCH('chName')).orgName;
        this.dealTaskBean.ownerOrg = this.orgId;
        this.workEffortId = this.route.snapshot.params.workEffortId;
        this.contactId = this.route.snapshot.params.contactId;
        //查询待办详情
        var param = {
            workEffortId: this.workEffortId,
            contactId: this.contactId,
            currentStatusId: '',
        };
        this.httpService.queryConWorkEffrotDetail(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.currentStatusId = data.currentStatusId;
                for (var item in data) {
                    _this.dealTaskBean[item] = data[item];
                }
                _this.planContactTime = new Date(_this.dealTaskBean.planContactTime);
                _this.searchIp();
                if (_this.dealTaskBean.currentStatusId == '1' || _this.dealTaskBean.currentStatusId == '3') {
                    _this.isBtnTrue = true;
                    _this.displayDealResultByCantactTheme();
                }
                else {
                    for (var item in data) {
                        _this.dealTaskBean['contactResult'] = data['contactResult']; //联系结果
                        _this.dealTaskBean['remarks'] = data['contactRemark']; //联系备注
                        _this.dealTaskBean['amtDate'] = data['contactRetime']; //联系结果时间
                        _this.dealTaskBean['amt'] = data['contactAmount']; //联系结果金额
                        _this.dealTaskBean['planTime'] = data['planContactTime'];
                    }
                    _this.isBtnTrue = false;
                    _this.doExpandShow();
                }
            }
            else {
                _this.msgs = [],
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [],
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    //判断跳转ip
    PlanTaskDealComponent.prototype.searchIp = function () {
        var _this = this;
        var params = {
            custNo: this.dealTaskBean.custNo
        };
        this.httpService.selectCustBriefInfo(params).subscribe(function (data) {
            if (data.dataSourceId == 'BR00A') {
                _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_HTTP_XIN"];
            }
            else if (data.dataSourceId == 'BR00B') {
                _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_HTTP_XIN_C"];
            }
            else if (!data.dataSourceId || data.dataSourceId == '' || data.dataSourceId == undefined || data.dataSourceId == null) {
                _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_HTTP_XIN"];
            }
        });
    };
    //展示处理结果
    PlanTaskDealComponent.prototype.doExpandShow = function () {
        //前端造数据
        if (this.dealTaskBean.planTime != undefined && this.dealTaskBean.planTime != '' && this.dealTaskBean.planTime != null) {
            var a = this.dealTaskBean.planTime;
            var b = a.split(' '); //时间格式2018-01-03 00:00:00，截取年月日
            this.planTime = new Date(b[0]); //兼顾生产数据
        }
        //01组织存款
        if (this.dealTaskBean.contactTheme == '01') {
            if (this.dealTaskBean.contactResult == '0') {
                this.Property1 = true;
                if (this.dealTaskBean.amtDate != undefined && this.dealTaskBean.amtDate != '' && this.dealTaskBean.amtDate != null) {
                    if (this.dealTaskBean.amtDate.length > 8) { //兼顾生产数据
                        this.amtDate = this.dealTaskBean.amtDate;
                    }
                    else {
                        this.amtDate = this.transDateA(this.dealTaskBean.amtDate);
                    }
                }
            }
            else if (this.dealTaskBean.contactResult == '1') {
                this.Property2 = true;
            }
            else {
            }
        }
        //02贷款营销提额----自助卡提额
        if (this.dealTaskBean.contactTheme == '02') {
            if (this.dealTaskBean.contactResult == '0') {
            }
            else if (this.dealTaskBean.contactResult == '1') {
                this.Property2 = true; //底纹提示：请描述原因
            }
            else {
            }
        }
        //03贷款贷后检查
        if (this.dealTaskBean.contactTheme == '11') {
            if (this.dealTaskBean.contactResult == '0') {
            }
            else if (this.dealTaskBean.contactResult == '1') {
                this.Property2 = true; //底纹提示：请描述原因
            }
            else {
            }
        }
        //04贷款年检
        if (this.dealTaskBean.contactTheme == '12') {
            if (this.dealTaskBean.currentStatusId == '0') {
            }
            else if (this.dealTaskBean.contactResult == '1') {
                this.Property2 = true;
            }
            else {
            }
        }
        //05贷款逾期催收
        if (this.dealTaskBean.contactTheme == '13') {
            if (this.dealTaskBean.contactResult == '0') {
                this.Property3 = true;
            }
            else if (this.dealTaskBean.contactResult == '1') {
                this.Property2 = true;
            }
            else {
            }
        }
        //06信用卡贷后检查
        if (this.dealTaskBean.contactTheme == '14') {
            if (this.dealTaskBean.contactResult == '0') {
            }
            else if (this.dealTaskBean.contactResult == '1') {
                this.Property2 = true;
            }
            else {
            }
        }
        //07信用卡到期续卡
        if (this.dealTaskBean.contactTheme == '15') {
            if (this.dealTaskBean.contactResult == '0') {
                this.Property4 = true;
            }
            else if (this.dealTaskBean.contactResult == '1') {
                this.Property2 = true;
            }
            else {
            }
        }
        //08信用卡逾期催收
        if (this.dealTaskBean.contactTheme == '16') {
            if (this.dealTaskBean.contactResult == '0') {
                this.Property3 = true;
            }
            else if (this.dealTaskBean.contactResult == '1') {
                this.Property2 = true;
            }
            else {
            }
        }
        //09节假日
        if (this.dealTaskBean.contactTheme == '03') {
            if (this.dealTaskBean.contactResult == '0') {
            }
            else if (this.dealTaskBean.contactResult == '1') {
                this.Property2 = true;
            }
            else {
            }
        }
        //10情感关怀
        if (this.dealTaskBean.contactTheme == '04') {
            if (this.dealTaskBean.contactResult == '0') {
            }
            else if (this.dealTaskBean.contactResult == '1') {
                this.Property2 = true;
            }
            else {
            }
        }
        //11完善客户信息
        if (this.dealTaskBean.contactTheme == '05') {
            if (this.dealTaskBean.contactResult == '0') {
            }
            else if (this.dealTaskBean.contactResult == '1') {
                this.Property2 = true;
            }
            else {
            }
        }
        //12其他--无06营销类其他
        if (this.dealTaskBean.contactTheme == '06') {
            this.Property5 = true;
        }
    };
    //处理 提交
    PlanTaskDealComponent.prototype.dealTaskAndSubmit = function () {
        var _this = this;
        this.httpService.closeContactWorkEffort(this.dealTaskBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [],
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [],
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [],
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    //根据联系主题显示处理结果下拉wu
    PlanTaskDealComponent.prototype.displayDealResultByCantactTheme = function () {
        this.doEmpty();
        //组织存款01
        if (this.dealTaskBean.contactTheme == '01') {
            this.contactResult = this.contactResultSF;
        }
        //贷款逾期催收13
        if (this.dealTaskBean.contactTheme == '13') {
            this.contactResult = this.contactResultSF;
        }
        //信用卡到期续卡15
        if (this.dealTaskBean.contactTheme == '15') {
            this.contactResult = this.contactResultSF;
        }
        // 信用卡逾期催收16
        if (this.dealTaskBean.contactTheme == '16') {
            this.contactResult = this.contactResultSF;
        }
        // 自助卡提额02
        if (this.dealTaskBean.contactTheme == '02') {
            this.contactResult = this.contactResultZB;
            this.htbh = this.dealTaskBean['dealNo'];
        }
        //贷款贷后检查11
        if (this.dealTaskBean.contactTheme == '11') {
            this.contactResult = this.contactResultZB;
            this.htbh = this.dealTaskBean['dealNo'];
        }
        //贷款年检12
        if (this.dealTaskBean.contactTheme == '12') {
            this.contactResult = this.contactResultZB;
            this.htbh = this.dealTaskBean['dealNo'];
        }
        //信用卡贷后检查14
        if (this.dealTaskBean.contactTheme == '14') {
            this.contactResult = this.contactResultZB;
            this.htbh = this.dealTaskBean['dealNo'];
        }
        //节假日03
        if (this.dealTaskBean.contactTheme == '03') {
            this.contactResult = this.contactResultSF;
            this.ident = this.dealTaskBean['idValue'];
        }
        //情感关怀04
        if (this.dealTaskBean.contactTheme == '04') {
            this.contactResult = this.contactResultSF;
        }
        //完善客户信息05
        if (this.dealTaskBean.contactTheme == '05') {
            this.contactResult = this.contactResultSF;
        }
        //其他06
        if (this.dealTaskBean.contactTheme == '06') {
            this.Property0 = false;
            this.Property1 = false;
            this.Property2 = false;
            this.Property3 = false;
            this.Property4 = false;
            this.Property5 = true;
            // this.Property6 = false;
            this.dealTaskBean.contactResult = '0';
        }
    };
    //日期转换
    PlanTaskDealComponent.prototype.showCreateData = function () {
    };
    //清空
    PlanTaskDealComponent.prototype.doEmpty = function () {
        this.amtDate = '';
        this.dealTaskBean.amtDate = '';
        this.dealTaskBean.amt = '';
        this.dealTaskBean.remarks = '';
        this.Property1 = false;
        this.Property2 = false;
        this.Property3 = false;
        this.Property4 = false;
        this.Property5 = false;
        this.isSpan = false;
        this.isResult = false;
        this.isInput = false;
        this.isInputTime = false;
        this.isInputMoney = false;
        this.isInputLong = false;
        this.isAmtType = false;
        this.ishsAmtType = false;
        this.isxkAmtType = false;
    };
    PlanTaskDealComponent.prototype.submit = function () {
        var _this = this;
        //根据每项给出相应提示（必输校验）
        if (this.planContactTime == null) {
            this.isDealDate = true;
            return;
        }
        else {
            this.isDealDate = false;
        }
        if (this.dealTaskBean.contactSituation == '') {
            this.isSpan = true;
            return;
        }
        if (this.Property0 && (this.dealTaskBean.contactResult == '' || this.dealTaskBean.contactResult == null)) {
            this.isResult = true;
            return;
        }
        else {
            if (this.Property1) {
                if (this.amtDate == '' || this.amtDate == null) {
                    if (this.dealTaskBean.amt == '') {
                        this.isInputMoney = true;
                        this.isInputTime = true;
                        return;
                    }
                    else {
                        this.isInputMoney = false;
                        this.isInputTime = true;
                        // 判断输入金额格式是否正确
                        // var regAmt = /^[0-9]{0,7}(\.[0-9]{0,7})?$/;
                        var regAmt = /^[0-9]{0,12}(\.[0-9]{0,2})?$/;
                        if (!regAmt.test(this.dealTaskBean.amt)) {
                            this.isAmtType = true;
                            return;
                        }
                        else {
                            this.isAmtType = false;
                        }
                        return;
                    }
                }
                if (this.amtDate != '' || this.amtDate != null) {
                    if (this.dealTaskBean.amt == '') {
                        this.isInputTime = false;
                        this.isInputMoney = true;
                        return;
                    }
                    else {
                        this.isInputMoney = false;
                        this.isInputTime = false;
                        // 判断输入金额格式是否正确
                        // var regAmt = /^[0-9]{0,7}(\.[0-9]{0,7})?$/;
                        var regAmt = /^[0-9]{0,12}(\.[0-9]{0,2})?$/;
                        if (!regAmt.test(this.dealTaskBean.amt)) {
                            this.isAmtType = true;
                            return;
                        }
                        else {
                            // 金额存在.，.前面和后面必须有值
                            if (this.dealTaskBean.amt.indexOf('.') != -1) {
                                var arr = [];
                                arr = this.dealTaskBean.amt.split('.');
                                if (arr[0] == '' || arr[1] == '') {
                                    this.isAmtType = true;
                                    return;
                                }
                                else {
                                    this.isAmtType = false;
                                }
                            }
                            else {
                                this.isAmtType = false;
                            }
                        }
                    }
                }
            }
            if (this.Property2) {
                if (this.dealTaskBean.remarks == '') {
                    this.isInput = true;
                    return;
                }
                else {
                    var reCheck = /^.{1,200}$/;
                    if (!reCheck.test(this.dealTaskBean.remarks)) {
                        this.isInput = false;
                        this.isInputLong = true;
                        return;
                    }
                    else {
                        this.isInput = false;
                        this.isInputLong = false;
                    }
                }
            }
            if (this.Property3) {
                if (this.dealTaskBean.amt == '') {
                    this.isInput = true;
                    return;
                }
                else {
                    this.isInput = false;
                    // 判断输入金额格式是否正确
                    // var regAmt = /^[0-9]{0,7}(\.[0-9]{0,7})?$/;
                    var regAmt = /^[0-9]{0,12}(\.[0-9]{0,2})?$/;
                    if (!regAmt.test(this.dealTaskBean.amt)) {
                        this.ishsAmtType = true;
                        return;
                    }
                    else {
                        // 金额存在.，.前面和后面必须有值
                        if (this.dealTaskBean.amt.indexOf('.') != -1) {
                            var arr = [];
                            arr = this.dealTaskBean.amt.split('.');
                            if (arr[0] == '' || arr[1] == '') {
                                this.ishsAmtType = true;
                                return;
                            }
                            else {
                                this.ishsAmtType = false;
                            }
                        }
                        else {
                            this.ishsAmtType = false;
                        }
                    }
                }
            }
            if (this.Property4) {
                if (this.dealTaskBean.amt == '') {
                    this.isInput = true;
                    return;
                }
                else {
                    this.isInput = false;
                    // 判断输入金额格式是否正确
                    // var regAmt = /^[0-9]{0,7}(\.[0-9]{0,7})?$/;
                    var regAmt = /^[0-9]{0,12}(\.[0-9]{0,2})?$/;
                    if (!regAmt.test(this.dealTaskBean.amt)) {
                        this.isxkAmtType = true;
                        return;
                    }
                    else {
                        // 金额存在.，.前面和后面必须有值
                        if (this.dealTaskBean.amt.indexOf('.') != -1) {
                            var arr = [];
                            arr = this.dealTaskBean.amt.split('.');
                            if (arr[0] == '' || arr[1] == '') {
                                this.isxkAmtType = true;
                                return;
                            }
                            else {
                                this.isxkAmtType = false;
                            }
                        }
                        else {
                            this.isxkAmtType = false;
                        }
                    }
                }
            }
        }
        if (this.Property5) {
            if (this.dealTaskBean.remarks == '') {
                this.isInput = true;
                return;
            }
            else {
                var reCheck = /^.{1,200}$/;
                if (!reCheck.test(this.dealTaskBean.remarks)) {
                    this.isInputLong = true;
                    this.isInput = false;
                    return;
                }
                else {
                    this.isInputLong = false;
                    this.isInput = false;
                }
            }
        }
        //给提交的服务判断赋值
        if (this.Property1) {
            //存入时间
            this.dealTaskBean.contactRetime = this.commfunc.transDateN(this.amtDate);
            this.dealTaskBean.contactAmount = this.dealTaskBean.amt;
            this.dealTaskBean.contactRemark = '';
        }
        if (this.Property2 || this.Property5) {
            this.dealTaskBean.contactRemark = this.dealTaskBean.remarks;
            this.dealTaskBean.contactRetime = '';
            this.dealTaskBean.contactAmount = '';
        }
        if (this.Property3 || this.Property4) {
            this.dealTaskBean.contactAmount = this.dealTaskBean.amt;
            this.dealTaskBean.contactRemark = '';
            this.dealTaskBean.contactRetime = '';
        }
        //如果是跳转的
        if (this.dealTaskBean.contactResult == '2') {
            this.dealTaskBean.contactRemark = '';
            this.dealTaskBean.contactRetime = '';
            this.dealTaskBean.contactAmount = '';
        }
        this.dealTaskBean.currentStatusId = this.currentStatusId;
        this.dealTaskBean.planContactTime = this.commfunc.transDateN(this.planContactTime);
        this.dealTaskBean.contactTime = this.commfunc.transDateN(new Date());
        var param = {};
        if (this.dealTaskBean.contactResult == '3') {
            param = {
                workEffortId: this.workEffortId,
                contactTime: this.dealTaskBean.contactTime,
                contactResult: '1',
                contactRemark: this.dealTaskBean.contactRemark,
                contactRetime: this.dealTaskBean.contactRetime,
                contactAmount: this.dealTaskBean.contactAmount,
            };
        }
        else {
            param = {
                workEffortId: this.workEffortId,
                contactTime: this.dealTaskBean.contactTime,
                contactResult: this.dealTaskBean.contactResult,
                contactRemark: this.dealTaskBean.contactRemark,
                contactRetime: this.dealTaskBean.contactRetime,
                contactAmount: this.dealTaskBean.contactAmount,
            };
        }
        this.httpService.closeContactWorkEffort(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.router.navigate(['/pages/tzb/uisftech-view/workdesk']);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    //返回
    PlanTaskDealComponent.prototype.close = function () {
        this.router.navigate(['/pages/tzb/uisftech-view/workdesk']);
    };
    //更改处理结果
    PlanTaskDealComponent.prototype.changeResult = function () {
        var _this = this;
        //01组织存款
        if (this.dealTaskBean.contactTheme == '01') {
            if (this.dealTaskBean.contactResult == '0') {
                this.doEmpty();
                this.Property1 = true;
            }
            else if (this.dealTaskBean.contactResult == '1') {
                this.doEmpty();
                this.Property2 = true;
            }
            else {
                this.doEmpty();
            }
        }
        //02贷款营销提额----自助卡提额
        if (this.dealTaskBean.contactTheme == '02') {
            if (this.dealTaskBean.contactResult == '2') {
                this.doEmpty();
                // 贷款合同详细信息查询
                var paramIDType = { contractNo: this.dealTaskBean['dealNo'] }; // 合同号
                this.httpService.BZ_0200300002608_CONQS(paramIDType).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var timestamp_1 = new Date().getTime();
                        var target = "custLinkForm" + timestamp_1;
                        _this.commfunc.createBlank(target);
                        _this.ICCardTypeurl = data.bussType;
                        _this.htbh = _this.dealTaskBean['dealNo'];
                        _this.tenTypeBean.userId = _this.userId;
                        _this.tenTypeBean.sysCode = '122';
                        _this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
                        _this.tenTypeBean.serverName = 'ywsn';
                        _this.tenTypeBean.validateType = '0';
                        _this.tenTypeBean.extraInfo = 'ywsn';
                        _this.tenTypeBean.encryptType = 'HS256';
                        _this.httpService.tokenApply(_this.tenTypeBean).subscribe(function (data) {
                            if (data.returnCode.code == 'success') {
                                var tokens = data.tokenCode;
                                if (_this.ICCardTypeurl == '010010') { //自助卡要素修改申请     010010
                                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + _this.htbh + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=3BCE157756FED645499A39ABFFE419F6|moduleTable=D080107CD1E79C5883F281161DAF7C42|main_moduleCode=3BCE157756FED645499A39ABFFE419F6|main_moduleTable=D080107CD1E79C5883F281161DAF7C42|moduleProc=647|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no";
                                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                                    var closeOnLoseFocus = 'closeOnLoseFocus';
                                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_1, features, closeOnLoseFocus);
                                }
                                if (_this.ICCardTypeurl == '010002') { //自助类贷款要素修改申请    010002
                                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + _this.htbh + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleTable=A219F35C78B560BE3B3F963F3FE6222F|main_moduleTable=A219F35C78B560BE3B3F963F3FE6222F|main_moduleCode=18659D5F1CCC29DCC9760AF2D2901EEF|moduleCode=18659D5F1CCC29DCC9760AF2D2901EEF|moduleProc=665|main_moduleName=|moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no";
                                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                                    var closeOnLoseFocus = 'closeOnLoseFocus';
                                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_1, features, closeOnLoseFocus);
                                }
                                if (_this.ICCardTypeurl == '010011') { //消费性自助卡要素修改申请   010011
                                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + _this.htbh + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleTable=B5FBBC48F7EB2C757A99A12B9DBE9E72|main_moduleTable=B5FBBC48F7EB2C757A99A12B9DBE9E72|main_moduleCode=3BCE157756FED645499A39ABFFE419F6A|moduleCode=3BCE157756FED645499A39ABFFE419F6A|moduleProc=652|main_moduleName=|moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no";
                                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                                    var closeOnLoseFocus = 'closeOnLoseFocus';
                                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_1, features, closeOnLoseFocus);
                                }
                                // let url = this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + this.htbh + "&suid=" + this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=3BCE157756FED645499A39ABFFE419F6|moduleTable=D080107CD1E79C5883F281161DAF7C42|main_moduleCode=3BCE157756FED645499A39ABFFE419F6|main_moduleTable=D080107CD1E79C5883F281161DAF7C42|moduleProc=647|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no";
                                // let url = this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + this.htbh + "&suid=" + this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=3BCE157756FED645499A39ABFFE419F6|moduleTable=D080107CD1E79C5883F281161DAF7C42|moduleProc=647|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=3BCE157756FED645499A39ABFFE419F6|main_moduleTable=D080107CD1E79C5883F281161DAF7C42";
                                // let features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                                // let closeOnLoseFocus = 'closeOnLoseFocus';
                                // this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
                                // open(this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + this.htbh + "&suid=" + this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=3BCE157756FED645499A39ABFFE419F6|moduleTable=D080107CD1E79C5883F281161DAF7C42|moduleProc=647|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=3BCE157756FED645499A39ABFFE419F6|main_moduleTable=D080107CD1E79C5883F281161DAF7C42")
                            }
                            else {
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                            }
                        }, function (error) {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
                        });
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                });
            }
            else if (this.dealTaskBean.contactResult == '3') {
                this.doEmpty();
                this.Property2 = true; //底纹提示：请描述原因
            }
            else {
                this.doEmpty();
            }
        }
        //03贷款贷后检查
        if (this.dealTaskBean.contactTheme == '11') {
            if (this.dealTaskBean.contactResult == '2') {
                var timestamp_2 = new Date().getTime();
                var target = "custLinkForm" + timestamp_2;
                this.commfunc.createBlank(target);
                this.doEmpty();
                this.htbh = this.dealTaskBean['dealNo'];
                this.tenTypeBean.userId = this.userId;
                this.tenTypeBean.sysCode = '122';
                this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
                this.tenTypeBean.serverName = 'ywsn';
                this.tenTypeBean.validateType = '0';
                this.tenTypeBean.extraInfo = 'ywsn';
                this.tenTypeBean.encryptType = 'HS256';
                this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var tokens = data.tokenCode;
                        var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + _this.htbh + "&message=" + _this.htbh + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=1640A50B86F75B504FF885F4727C9754|moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D|moduleProc=990|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=1640A50B86F75B504FF885F4727C9754|main_moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D";
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_2, features, closeOnLoseFocus);
                        // open(this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + this.htbh + "&message=" + this.htbh + "&suid=" + this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=1640A50B86F75B504FF885F4727C9754|moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D|moduleProc=990|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=1640A50B86F75B504FF885F4727C9754|main_moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D")
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
                });
            }
            else if (this.dealTaskBean.contactResult == '3') {
                this.doEmpty();
                this.Property2 = true; //底纹提示：请描述原因
            }
            else {
                this.doEmpty();
            }
        }
        //04贷款年检
        if (this.dealTaskBean.contactTheme == '12') {
            if (this.dealTaskBean.contactResult == '2') {
                var timestamp_3 = new Date().getTime();
                var target = "custLinkForm" + timestamp_3;
                this.commfunc.createBlank(target);
                this.doEmpty();
                //点击后直接链接信贷系统对应产品年检界面，并回显客户信息
                this.htbh = this.dealTaskBean['dealNo'];
                this.tenTypeBean.userId = this.userId;
                this.tenTypeBean.sysCode = '122';
                this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
                this.tenTypeBean.serverName = 'ywsn';
                this.tenTypeBean.validateType = '0';
                this.tenTypeBean.extraInfo = 'ywsn';
                this.tenTypeBean.encryptType = 'HS256';
                this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var tokens = data.tokenCode;
                        var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + _this.htbh + "&message=" + _this.htbh + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|SYS_FIX_WHERE=|isProcModule=no|ActionType=UPDATEVIEW|ActionCode=add|moduleProc=340|moduleName=|moduleTable=A0638C07DE5FFCF1F3FB627B882F1872|moduleCode=AABFC257800182EE525A79C362C641C9|main_moduleCode=AABFC257800182EE525A79C362C641C9|main_moduleName=|main_moduleTable=A0638C07DE5FFCF1F3FB627B882F1872";
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_3, features, closeOnLoseFocus);
                        // open(this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + this.htbh + "&message=" + this.htbh + "&suid=" + this.userId + "&urlParam=/plats/FrontController?commandType=9901|SYS_FIX_WHERE=|isProcModule=no|ActionType=UPDATEVIEW|ActionCode=add|moduleProc=340|moduleName=|moduleTable=A0638C07DE5FFCF1F3FB627B882F1872|moduleCode=AABFC257800182EE525A79C362C641C9|main_moduleCode=AABFC257800182EE525A79C362C641C9|main_moduleName=|main_moduleTable=A0638C07DE5FFCF1F3FB627B882F1872")
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
                });
            }
            else if (this.dealTaskBean.contactResult == '3') {
                this.doEmpty();
                this.Property2 = true;
            }
            else {
                this.doEmpty();
            }
        }
        //05贷款逾期催收
        if (this.dealTaskBean.contactTheme == '13') {
            if (this.dealTaskBean.contactResult == '0') {
                this.doEmpty();
                this.Property3 = true;
            }
            else if (this.dealTaskBean.contactResult == '1') {
                this.doEmpty();
                this.Property2 = true;
            }
            else {
                this.doEmpty();
            }
        }
        //06信用卡贷后检查
        if (this.dealTaskBean.contactTheme == '14') {
            if (this.dealTaskBean.contactResult == '2') {
                var timestamp_4 = new Date().getTime();
                var target = "custLinkForm" + timestamp_4;
                this.commfunc.createBlank(target);
                this.doEmpty();
                // 点击后直接链接信贷系统信用卡贷后检查界面，并回显客户信息
                this.htbh = this.dealTaskBean['dealNo'];
                this.tenTypeBean.userId = this.userId;
                this.tenTypeBean.sysCode = '122';
                this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
                this.tenTypeBean.serverName = 'ywsn';
                this.tenTypeBean.validateType = '0';
                this.tenTypeBean.extraInfo = 'ywsn';
                this.tenTypeBean.encryptType = 'HS256';
                this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var tokens = data.tokenCode;
                        // let url = this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + this.htbh + "&suid=" + this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=D80CB404952AFDFA3DF2C1C7CE9C7A18|moduleTable=7E726E9E22689441D53EC2A1EFB8B941|moduleProc=31|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=D80CB404952AFDFA3DF2C1C7CE9C7A18|main_moduleTable=7E726E9E22689441D53EC2A1EFB8B941";
                        // 之前
                        // let url = this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + this.userId + "&khm=" + this.dealTaskBean.custNo + "&ywpz=070001&param=" + this.htbh + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=D80CB404952AFDFA3DF2C1C7CE9C7A18|moduleTable=7E726E9E22689441D53EC2A1EFB8B941|moduleProc=31|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=D80CB404952AFDFA3DF2C1C7CE9C7A18|main_moduleTable=7E726E9E22689441D53EC2A1EFB8B941|ActionCode=add|ActionType=UPDATEVIEW|SYS_FIX_WHERE=7E726E9E22689441D53EC2A1EFB8B941:((state='000' or (state='991' and spjd='001' ) or state='996') and zflx='10' )";
                        // 后面
                        var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + _this.htbh + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=1640A50B86F75B504FF885F4727C9754|moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D|moduleProc=990|moduleName=|=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=1640A50B86F75B504FF885F4727C9754|main_moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D";
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_4, features, closeOnLoseFocus);
                        // open(this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + this.userId + "&khm=" + this.dealTaskBean.custNo + "&ywpz=070001&param=" + this.htbh + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=D80CB404952AFDFA3DF2C1C7CE9C7A18|moduleTable=7E726E9E22689441D53EC2A1EFB8B941|moduleProc=522|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=D80CB404952AFDFA3DF2C1C7CE9C7A18|main_moduleTable=7E726E9E22689441D53EC2A1EFB8B941|ActionCode=add|ActionType=UPDATEVIEW|SYS_FIX_WHERE=7E726E9E22689441D53EC2A1EFB8B941:((state='000' or (state='991' and spjd='001' ) or state='996') and zflx='10' )")
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
                });
            }
            else if (this.dealTaskBean.contactResult == '3') {
                this.doEmpty();
                this.Property2 = true;
            }
            else {
                this.doEmpty();
            }
        }
        //07信用卡到期续卡
        if (this.dealTaskBean.contactTheme == '15') {
            if (this.dealTaskBean.contactResult == '0') {
                this.doEmpty();
                this.Property4 = true;
            }
            else if (this.dealTaskBean.contactResult == '1') {
                this.doEmpty();
                this.Property2 = true;
            }
            else {
                this.doEmpty();
            }
        }
        //08信用卡逾期催收
        if (this.dealTaskBean.contactTheme == '16') {
            if (this.dealTaskBean.contactResult == '0') {
                this.doEmpty();
                this.Property3 = true;
            }
            else if (this.dealTaskBean.contactResult == '1') {
                this.doEmpty();
                this.Property2 = true;
            }
            else {
                this.doEmpty();
            }
        }
        //09节假日
        if (this.dealTaskBean.contactTheme == '03') {
            if (this.dealTaskBean.contactResult == '0') {
                this.doEmpty();
            }
            else if (this.dealTaskBean.contactResult == '1') {
                this.doEmpty();
                this.Property2 = true;
            }
            else {
                this.doEmpty();
            }
        }
        //10情感关怀
        if (this.dealTaskBean.contactTheme == '04') {
            if (this.dealTaskBean.contactResult == '0') {
                this.doEmpty();
            }
            else if (this.dealTaskBean.contactResult == '1') {
                this.doEmpty();
                this.Property2 = true;
            }
            else {
                this.doEmpty();
            }
        }
        //11完善客户信息
        if (this.dealTaskBean.contactTheme == '05') {
            if (this.dealTaskBean.contactResult == '0') {
                this.doEmpty();
            }
            else if (this.dealTaskBean.contactResult == '1') {
                this.doEmpty();
                this.Property2 = true;
            }
            else {
                this.doEmpty();
            }
        }
        //12其他--无06营销类其他
        if (this.dealTaskBean.contactTheme == '06') {
            this.Property5 = true;
            this.dealTaskBean.contactResult = '0';
        }
        if (this.dealTaskBean.contactResult == '2') {
            this.subShow = true;
        }
        else {
            this.subShow = false;
        }
    };
    //日期转换
    PlanTaskDealComponent.prototype.transDateA = function (value) {
        if (!value) {
            return '';
        }
        var year = value.substring(0, 4);
        var month = value.substring(4, 6);
        var data = value.substring(6, 8);
        var newtime = year + "-" + month + "-" + data;
        return newtime;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PlanTaskDealComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('in-value'),
        __metadata("design:type", Object)
    ], PlanTaskDealComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('key-label'),
        __metadata("design:type", Object)
    ], PlanTaskDealComponent.prototype, "keyLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('kind-do'),
        __metadata("design:type", String)
    ], PlanTaskDealComponent.prototype, "kindDo", void 0);
    PlanTaskDealComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plan-task-deal',
            template: __webpack_require__(/*! ./plan-task-deal.component.html */ "./src/app/pages/tzb/custom/custom-information/plan-task-deal/plan-task-deal.component.html"),
            styles: [__webpack_require__(/*! ./plan-task-deal.component.scss */ "./src/app/pages/tzb/custom/custom-information/plan-task-deal/plan-task-deal.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], PlanTaskDealComponent);
    return PlanTaskDealComponent;
}());



/***/ })

}]);
//# sourceMappingURL=custom-information-custom-information-module.js.map