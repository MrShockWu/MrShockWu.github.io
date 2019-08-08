(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loan-deposit-change-loan-deposit-change-module"],{

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/bean/tenType.bean.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/bean/tenType.bean.ts ***!
  \***************************************************************************/
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

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/deposit-history/bean/depositHistory.bean.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/deposit-history/bean/depositHistory.bean.ts ***!
  \**************************************************************************************************/
/*! exports provided: DepositHistoryBean, DepositHistoryTotalBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositHistoryBean", function() { return DepositHistoryBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositHistoryTotalBean", function() { return DepositHistoryTotalBean; });
var DepositHistoryBean = /** @class */ (function () {
    function DepositHistoryBean() {
    }
    return DepositHistoryBean;
}());

var DepositHistoryTotalBean = /** @class */ (function () {
    function DepositHistoryTotalBean() {
    }
    return DepositHistoryTotalBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/deposit-history/deposit-history.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/deposit-history/deposit-history.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <!-- <header-title [Info]=\"'存款发生明细'\"></header-title> -->\r\n    <form [formGroup]=\"userform\">\r\n        <div class=\"ui-g-12\" style=\"padding-right:5%;\">\r\n            <div class=\"ui-g-12 padding-0\">\r\n                <div class=\"ui-g-4 padding-0\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span appValidation>机构码:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-8\" *ngIf=\"extParam.managePermission=='N'\">\r\n                        <input formControlName=\"treeOrgName\" class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"treeOrgName\" disabled/>\r\n                    </div>\r\n                    <div class=\"ui-g-8 queryinputbtn\" *ngIf=\"extParam.managePermission=='Y'\">\r\n                        <input formControlName=\"treeOrgName\" class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"treeOrgName\" disabled/>\r\n                        <div (click)=\"perTreeShow()\" class=\"clickspan\">\r\n                            <a class=\"a-hand\">\r\n                                <span>...</span>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"requireLabel\" *ngIf=\"!userform.controls['treeOrgName'].valid&&userform.controls['treeOrgName'].dirty\">机构码必输!</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-4 padding-0\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span>协储员:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-8\" *ngIf=\"extParam.managePermission=='N'\">\r\n                        <input formControlName=\"cooperator\" type=\"text\" pInputText [(ngModel)]=\"cooperator\" disabled/>\r\n                    </div>\r\n                    <div class=\"ui-g-8 queryinputbtn\" *ngIf=\"extParam.managePermission=='Y'\">\r\n                        <input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"cooperator\" formControlName=\"cooperator\" readonly/>\r\n                        <div (click)=\"perShow(1)\" class=\"clickspan\">\r\n                            <a class=\"a-hand\">\r\n                                <span>...</span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-4 padding-0\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span>客户号:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <input type=\"text\" pInputText [(ngModel)]=\"depositHistoryBean.custNum\" formControlName=\"custNum\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12 padding-0\">\r\n                <div class=\"ui-g-4 padding-0\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span>交易柜员:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-8 queryinputbtn\">\r\n                        <input class=\"queryinputOrg\" formControlName=\"personName\" type=\"text\" pInputText [(ngModel)]=\"personName\" disabled/>\r\n                        <div (click)=\"perShow(2)\" class=\"clickspan\">\r\n                            <a class=\"a-hand\">\r\n                                <span>...</span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-4 padding-0\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span>借方交易额:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <input class=\"inputStyle\" type=\"text\" pInputText [(ngModel)]=\"depositHistoryBean.borrowAmtStart\" (keyup)=\"onKeyupNumber($event)\"\r\n                            (blur)=\"checkNum('borrowAmt',1)\" formControlName=\"borrowAmtStart\" /> 至\r\n                        <input class=\"inputStyle\" type=\"text\" pInputText [(ngModel)]=\"depositHistoryBean.borrowAmtEnd\" (keyup)=\"onKeyupNumber($event)\"\r\n                            (blur)=\"checkNum('borrowAmt',2)\" formControlName=\"borrowAmtEnd\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-4 padding-0\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span>贷方交易额:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <input class=\"inputStyle\" type=\"text\" pInputText [(ngModel)]=\"depositHistoryBean.loanAmtStart\" (keyup)=\"onKeyupNumber($event)\"\r\n                            (blur)=\"checkNum('loanAmt',1)\" formControlName=\"loanAmtStart\" /> 至\r\n                        <input class=\"inputStyle\" type=\"text\" pInputText [(ngModel)]=\"depositHistoryBean.loanAmtEnd\" (keyup)=\"onKeyupNumber($event)\"\r\n                            (blur)=\"checkNum('loanAmt',2)\" formControlName=\"loanAmtEnd\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12 padding-0\">\r\n                <div class=\"ui-g-4 padding-0\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span appValidation>交易日期:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <p-calendar formControlName=\"StartDate\" [maxDate]=\"endDate_new\" [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                            yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [(ngModel)]=\"StartDate\" [locale]=\"ch\" (onSelect)=\"showStart()\"\r\n                            (onBlur)=\"showStart()\" formControlName=\"StartDate\"></p-calendar>\r\n                        <div class=\"requireLabel\" *ngIf=\"!userform.controls['StartDate'].valid&&userform.controls['StartDate'].dirty\">交易日期必输!</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button class=\"btn_1\" pButton label=\"查询\" (click)=\"queryFirst()\"></button>\r\n        <button pButton label=\"重置\" (click)=\"reset()\"></button>\r\n        <button class=\"btn_2\" pButton label=\"数据下载\" *ngIf=\"judgeField('SID02091_P001')\" (click)=\"download()\"></button>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12 padding-0\"> -->\r\n    <!-- <div class=\"ui-g-2 padding-0\">注:保密类账户的余额显示为-2</div> -->\r\n    <!-- <span>借方笔数合计：{{depositHistoryTotalBean.borrowTotal}}</span>&nbsp;&nbsp;\r\n                <span>分成后借方金额合计：{{depositHistoryTotalBean.borrowAmt}}</span>&nbsp;&nbsp;\r\n                <span>贷方笔数合计：{{depositHistoryTotalBean.loanTotal}}</span>&nbsp;&nbsp;\r\n                <span>分成后贷方金额合计：{{depositHistoryTotalBean.loanAmt}}</span> -->\r\n    <!-- <div class=\"ui-g-1 ui-g-offset-9 padding-0\">单位：元</div> -->\r\n    <!-- </div> -->\r\n    <!-- <div class=\"ui-g-12 base-table\">\r\n        <p-dataTable [value]=\"depositTable\" [style]=\"{'text-align':'center','overflow':'auto'}\">\r\n            <p-column field=\"custNum\" header=\"客户号\" [style]=\"{'width':'130px'}\"></p-column>\r\n            <p-column field=\"cardNum\" header=\"账号\" [style]=\"{'width':'220px'}\"></p-column>\r\n            <p-column field=\"accountName\" header=\"账户名称\" [style]=\"{'width':'200px'}\"></p-column>\r\n            <p-column field=\"loanSign\" header=\"借贷标志\" [style]=\"{'width':'200px'}\"></p-column>\r\n            <p-column field=\"transAmt\" header=\"交易金额\" [style]=\"{'width':'200px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{(col.transAmt/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"账户余额\" [style]=\"{'width':'130px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{(col.balance/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"managerId\" header=\"客户经理\" [style]=\"{'width':'130px'}\"></p-column>\r\n            <p-column field=\"custOrg\" header=\"账户开户机构\" [style]=\"{'width':'130px'}\"></p-column>\r\n            <p-column field=\"cooperator\" header=\"账户协储员\" [style]=\"{'width':'130px'}\"></p-column>\r\n            <p-column field=\"subjectNo\" header=\"科目\" [style]=\"{'width':'130px'}\"></p-column>\r\n            <p-column field=\"transName\" header=\"交易类型\" [style]=\"{'width':'130px'}\"></p-column>\r\n            <p-column field=\"transDate\" header=\"交易日期\" [style]=\"{'width':'130px'}\"></p-column>\r\n            <p-column field=\"orgId\" header=\"交易机构\" [style]=\"{'width':'130px'}\"></p-column>\r\n            <p-column field=\"counterEmp\" header=\"交易柜员号\" [style]=\"{'width':'130px'}\"></p-column>\r\n            <p-column field=\"tellerSerialNum\" header=\"柜员流水号\" [style]=\"{'width':'130px'}\"></p-column>\r\n            <p-column field=\"proportions\" header=\"账户分成比例\" [style]=\"{'width':'130px'}\"></p-column>\r\n            <p-column field=\"proAmt\" header=\"分成后交易金额\" [style]=\"{'width':'130px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{(col.proAmt/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n            </p-column>\r\n\r\n            <p-footerColumnGroup>\r\n                <p-row>\r\n                    <p-column footer=\"合计\" [style]=\"{'font-weight':'bold','width':'130px'}\"></p-column>\r\n                    <p-column footer=\"借方笔数:{{depositHistoryTotalBean.borrowTotal}}\"></p-column>\r\n                    <p-column footer=\"分成后借方金额:{{depositHistoryTotalBean.borrowAmt | number:'1.2-2'}}\"></p-column>\r\n                    <p-column footer=\"贷方笔数:{{depositHistoryTotalBean.loanTotal}}\"></p-column>\r\n                    <p-column footer=\"分成后贷方金额:{{depositHistoryTotalBean.loanTotal | number:'1.2-2'}}\"></p-column>\r\n                    <p-column footer=\"\" *ngFor=\"let item of collection\"></p-column>\r\n                </p-row>\r\n            </p-footerColumnGroup>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows=\"{{depositHistoryBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div> -->\r\n</div>\r\n\r\n\r\n<p-dialog *ngIf=\"orgTreePage\" [(visible)]=\"orgTreePage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <org-tree-component [cardVlaue]=\"loanDepositValue\" (outValue)=\"treeCall($event)\"></org-tree-component>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"personPage\" [(visible)]=\"personPage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <app-query-user-list *ngIf=\"which_one==1\" (outValue)=\"perInfor($event)\" [in-value]=\"parent_value\"></app-query-user-list>\r\n    <app-query-user-list *ngIf=\"which_one==2\" (outValue)=\"perInfor($event)\" [in-value]=\"parent_value2\"></app-query-user-list>\r\n</p-dialog>\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n\r\n<p-dialog *ngIf=\"downloadPerson\" header=\"请选择该节点对应的处理人\" modal=\"modal\" width='435' [(visible)]=\"downloadPerson\" (onHide)=\"downloadHide()\"\r\n    class=\"dialog\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/deposit-history/deposit-history.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/deposit-history/deposit-history.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tit {\n  text-align: right; }\n\n.ui-g-6 .ui-g-4,\n.ui-g-6 .ui-g-6 {\n  padding: 0; }\n\n.padding-0 {\n  padding: 0; }\n\n.queryinputbtn .queryinputOrg {\n  border-right: none;\n  border-radius: 3px 0 0 3px;\n  width: 85% !important;\n  min-width: 69px !important;\n  float: left; }\n\n.queryinputbtn .clickspan {\n  width: calc(15% - 2px);\n  height: 23px;\n  cursor: pointer;\n  float: right; }\n\n.date {\n  display: flex;\n  align-items: center; }\n\n.inputStyle {\n  width: calc(50% - 12px);\n  min-width: 0; }\n\n.btn {\n  text-align: center; }\n\n.btn .btn_2 {\n    color: #fff;\n    background: #fec61e; }\n\n.requireLabel {\n  color: #f00; }\n\n:host/deep/ .ui-datatable .ui-datatable-tfoot > tr > td {\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9sb2FuLWRlcG9zaXQtY2hhbmdlL2RlcG9zaXQtaGlzdG9yeS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGxvYW4tZGVwb3NpdC1jaGFuZ2VcXGRlcG9zaXQtaGlzdG9yeVxcZGVwb3NpdC1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCOztFQUdRLFVBQVUsRUFBQTs7QUFJbEI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFFUSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsV0FBVyxFQUFBOztBQU5uQjtFQVNRLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7O0FBSTNCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9sb2FuLWRlcG9zaXQtY2hhbmdlL2RlcG9zaXQtaGlzdG9yeS9kZXBvc2l0LWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udWktZy02IHtcclxuICAgIC51aS1nLTQsXHJcbiAgICAudWktZy02IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGFkZGluZy0wIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5xdWVyeWlucHV0YnRuIHtcclxuICAgIC5xdWVyeWlucHV0T3JnIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgICAgICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmNsaWNrc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTUlIC0gMnB4KTtcclxuICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuLmRhdGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dFN0eWxlIHtcclxuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEycHgpO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC5idG5fMiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZlYzYxZTtcclxuICAgIH1cclxufVxyXG5cclxuLnJlcXVpcmVMYWJlbCB7XHJcbiAgICBjb2xvcjogI2YwMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRmb290PnRyPnRkIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/deposit-history/deposit-history.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/deposit-history/deposit-history.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DepositHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositHistoryComponent", function() { return DepositHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_depositHistory_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/depositHistory.bean */ "./src/app/pages/tzb/custom/loan-deposit-change/deposit-history/bean/depositHistory.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DepositHistoryComponent = /** @class */ (function () {
    function DepositHistoryComponent(commfunc, httpService, fb) {
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inValue = 'take'; //机构吗回显为当前登录人的所属机构
        this.first = 0;
        this.msgs = [];
        this.orgTreePage = false;
        this.personName = []; //员工
        this.personPage = false;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.estimatedStartDt = null; //
        this.estimatedEndDt = null; //
        this.depositTable = [];
        this.StartDate = null;
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.depositHistoryBean = new _bean_depositHistory_bean__WEBPACK_IMPORTED_MODULE_3__["DepositHistoryBean"]();
        this.depositHistoryTotalBean = new _bean_depositHistory_bean__WEBPACK_IMPORTED_MODULE_3__["DepositHistoryTotalBean"]();
        this.downloadPerson = false;
        this.new_postId = [];
        this.cooperatorGlobal = []; //
        this.cooperator_IDGlobal = []; //
        // endDate_new = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
        this.endDate_new = new Date();
        this.collection = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
        this.flag = 1; //用来在查询之后清空协储员
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
        if (this.user.extParam) {
            this.extParam = this.user.extParam;
        }
        if (this.extParam.managePermission == 'Y') {
            this.cooperator = '';
            this.cooperator_ID = '';
        }
        else {
            this.cooperator = this.userName;
            this.cooperator_ID = this.userId;
        }
        // debugger
        //默认回显当前任职机构的上一级机构,只有支行部门的回显上一级
        if (this.extParam.operatingLevel == 'SUB_BRANCH_DT') {
            this.queryUpOrg();
        }
        else {
            //默认回显任职机构
            var dropDownSelect = this.commfunc.getSessionDataCH('dropDownSelect');
            this.treeOrgName = dropDownSelect.split(",")[0];
            this.treeOrgId = this.extParam.orgId;
            this.parent_value = this.extParam.orgId;
            this.loanDepositValue = this.extParam.orgId;
        }
    }
    DepositHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userform = this.fb.group({
            treeOrgName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            StartDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            cooperator: [''],
            personName: [''],
            custNum: [''],
            borrowAmtStart: [''],
            borrowAmtEnd: [''],
            loanAmtStart: [''],
            loanAmtEnd: [''],
        });
        this.parent_value2 = '0000';
        this.codeValues();
        //下载判断
        this.new_postId = this.code['downPostId'];
        setTimeout(function () {
            _this.depositTable = [];
        });
        this.depositHistoryBean.pageNum = 1;
        this.depositHistoryBean.pageSize = 10;
        // this.depositHistoryBean.cooperator = this.userId;
        this.StartDate = this.endDate_new;
        if (this.extParam.operatingLevel != 'SUB_BRANCH_DT') {
            this.queryFirst(1);
        }
    };
    //码值
    DepositHistoryComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    DepositHistoryComponent.prototype.treeCall = function (param) {
        debugger;
        this.orgTreePage = false;
        this.treeOrgName = param.orgName;
        this.treeOrgId = param.orgId;
        this.parent_value = param.orgId;
        this.operatingLevel = param.operatingLevel;
    };
    DepositHistoryComponent.prototype.perTreeShow = function () {
        this.orgTreePage = true;
    };
    DepositHistoryComponent.prototype.perShow = function (data) {
        this.which_one = data;
        if (data == 1) {
            if (this.treeOrgId == '' || !this.treeOrgId) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '机构号为空,请选择机构' }];
                return;
            }
            else {
                this.personPage = true;
            }
        }
        else if (data == 2) {
            this.personPage = true;
        }
    };
    DepositHistoryComponent.prototype.perInfor = function (item) {
        // console.log(this.flag)
        if (this.which_one == 1 && this.flag == 1) { //查询之后再次点击协储员
            this.cooperator = '';
            this.cooperatorGlobal = [];
            this.cooperator_ID = '';
            this.cooperator_IDGlobal = [];
        }
        this.flag++;
        this.personPage = false;
        if (this.which_one == 1) {
            this.cooperatorGlobal.push(item[0].tellerName);
            this.cooperator = this.cooperatorGlobal.join(',');
            this.cooperator_IDGlobal.push(item[0].tellerId);
            this.cooperator_ID = this.cooperator_IDGlobal.join(',');
        }
        else if (this.which_one == 2) {
            this.personName = item[0].tellerName;
            this.personId = item[0].tellerId;
        }
    };
    DepositHistoryComponent.prototype.showStart = function () {
        var _this = this;
        if (this.estimatedStartDt && this.estimatedStartDt != null && this.estimatedEndDt && this.estimatedEndDt != null) {
            if (this.estimatedStartDt.getTime() > this.estimatedEndDt.getTime()) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '开始日期必须小于到期日期!' }];
                setTimeout(function () {
                    _this.estimatedStartDt = null;
                });
                return;
            }
        }
    };
    DepositHistoryComponent.prototype.showEnd = function () {
        var _this = this;
        if (this.estimatedStartDt && this.estimatedStartDt != null && this.estimatedEndDt && this.estimatedEndDt != null) {
            if (this.estimatedStartDt.getTime() > this.estimatedEndDt.getTime()) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '到期日期必须大于开始日期!' }];
                setTimeout(function () {
                    _this.estimatedEndDt = null;
                });
                return;
            }
        }
    };
    //校验客户号只能输入数字
    DepositHistoryComponent.prototype.onKeyupNumber = function (event) {
        if (event.target.value != '') {
            if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["checkNumber"])(null, event.target.value)) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '当前输入框内只能输入数字!' }];
                event.target.value = '';
                return;
            }
        }
    };
    DepositHistoryComponent.prototype.checkNum = function (item, num) {
        var _this = this;
        if (item == 'borrowAmt') {
            if (this.depositHistoryBean.borrowAmtStart != '' && this.depositHistoryBean.borrowAmtEnd != '') {
                if (parseFloat(this.depositHistoryBean.borrowAmtStart) > parseFloat(this.depositHistoryBean.borrowAmtEnd)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: "最低借方发生额不能大于最高借方发生额!" });
                    if (num == 1) {
                        setTimeout(function () {
                            _this.depositHistoryBean.borrowAmtStart = '';
                        });
                    }
                    else if (num == 2) {
                        setTimeout(function () {
                            _this.depositHistoryBean.borrowAmtEnd = '';
                        });
                    }
                    return;
                }
            }
        }
        else if (item == 'loanAmt') {
            if (this.depositHistoryBean.loanAmtStart != '' && this.depositHistoryBean.loanAmtEnd != '') {
                if (parseFloat(this.depositHistoryBean.loanAmtStart) > parseFloat(this.depositHistoryBean.loanAmtEnd)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: "最低贷方发生额不能大于最高贷方发生额!" });
                    if (num == 1) {
                        setTimeout(function () {
                            _this.depositHistoryBean.loanAmtStart = '';
                        });
                    }
                    else if (num == 2) {
                        setTimeout(function () {
                            _this.depositHistoryBean.loanAmtEnd = '';
                        });
                    }
                    return;
                }
            }
        }
    };
    DepositHistoryComponent.prototype.queryFirst = function (index) {
        if (!index) {
            //校验的
            for (var i in this.userform.controls) {
                this.userform.controls[i].markAsDirty();
            }
            //处理是否提交
            for (var i in this.userform.controls) {
                if (!this.userform.controls[i].valid) {
                    return;
                }
            }
            this.flag = 1; //查询之后
        }
        this.depositHistoryBean.pageNum = 1;
        this.depositHistoryBean.pageSize = 10;
        this.first = 0;
        // this.query();
        var param = {
            orgId: this.treeOrgId,
            cooperator: this.cooperator_ID,
            counterEmp: this.personId,
            operatingLevel: this.operatingLevel,
            custNum: this.depositHistoryBean.custNum,
            borrowAmtStart: this.depositHistoryBean.borrowAmtStart,
            borrowAmtEnd: this.depositHistoryBean.borrowAmtEnd,
            loanAmtStart: this.depositHistoryBean.loanAmtStart,
            loanAmtEnd: this.depositHistoryBean.loanAmtEnd,
            transDate: this.commfunc.transDateN(this.StartDate)
        };
        this.outValue.emit(param);
    };
    DepositHistoryComponent.prototype.query = function () {
        var _this = this;
        this.depositHistoryBean.orgId = this.treeOrgId;
        this.depositHistoryBean.counterEmp = this.personId;
        this.depositHistoryBean.cooperator = this.cooperator_ID;
        this.depositHistoryBean.transDate = this.commfunc.transDateN(this.StartDate);
        this.httpService.queryDepostHistoryDetails(this.depositHistoryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.depositTable = data.resultList;
                _this.total = data.total;
                _this.depositHistoryTotalBean.borrowTotal = data.borrowTotal;
                _this.depositHistoryTotalBean.borrowAmt = data.borrowAmt;
                _this.depositHistoryTotalBean.loanTotal = data.loanTotal;
                _this.depositHistoryTotalBean.loanAmt = data.loanAmt;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    DepositHistoryComponent.prototype.download = function () {
        //校验的
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (s.extParam.specifyNextOpers) {
            delete s.extParam.specifyNextOpers;
            var commonHeader = s;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        }
        var this_id = this.extParam.postId;
        var flag = true;
        for (var _i = 0, _a = this.new_postId; _i < _a.length; _i++) {
            var item = _a[_i];
            if (this_id == item.value) {
                flag = false;
                break;
            }
        }
        if (!flag) {
            this.toDownload(flag);
        }
        else {
            var lcbl = {
                lctybl: this.extParam.postId
            };
            this.waitSelUserList = this.commfunc.query('XZZXLC', lcbl);
            if (!this.waitSelUserList.erro) {
                this.outVal = this.waitSelUserList.waitSelUserList;
                var chooseThis = this.waitSelUserList.display;
                var Header = JSON.parse(this.commfunc.getSessionData('commonHeader'));
                var a2 = Header.extParam.specifyNextOpers;
                if (chooseThis == true && (a2 == undefined || a2 == '' || a2 == null)) {
                    this.downloadPerson = true;
                }
                else {
                    this.toDownload(flag);
                }
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
            }
        }
    };
    DepositHistoryComponent.prototype.toDownload = function (flag) {
        var _this = this;
        this.depositHistoryBean.orgId = this.treeOrgId;
        this.depositHistoryBean.counterEmp = this.personId;
        this.depositHistoryBean.cooperator = this.cooperator_ID;
        this.depositHistoryBean.transDate = this.commfunc.transDateN(this.StartDate);
        this.httpService.depostHistoryDetailsExportFile(this.depositHistoryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (flag) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: "提交成功!" });
                    return;
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: "下载成功!" });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    DepositHistoryComponent.prototype.outDisplayCall = function (event) {
        this.downloadPerson = event;
    };
    DepositHistoryComponent.prototype.outValueCall = function (event) {
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.toDownload(true);
    };
    DepositHistoryComponent.prototype.downloadHide = function () {
        this.downloadPerson = false;
    };
    DepositHistoryComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.depositHistoryBean.pageSize = event.rows * 1;
        //当前页
        this.depositHistoryBean.pageNum = event.page + 1;
        this.first = event.page * this.depositHistoryBean.pageSize;
        this.query();
    };
    //重置
    DepositHistoryComponent.prototype.reset = function () {
        this.depositHistoryBean = new _bean_depositHistory_bean__WEBPACK_IMPORTED_MODULE_3__["DepositHistoryBean"]();
        this.depositHistoryBean.pageNum = 1;
        this.depositHistoryBean.pageSize = 10;
        this.personName = '';
        this.personId = '';
        this.StartDate = new Date();
        this.endDate_new = new Date();
        //客户经理、支行行长/业务部门主管，重置时不用清空机构
        if (this.extParam.operatingLevel == 'SUB_BRANCH'
            || this.extParam.operatingLevel == 'SUB_BRANCH_DT'
            || this.extParam.managePermission == 'N') {
            this.treeOrgName = this.orgName;
            this.treeOrgId = this.orgId;
        }
        else {
            this.treeOrgName = '';
            this.treeOrgId = '';
        }
        if (this.extParam.managePermission != 'N') {
            this.cooperator = '';
            this.cooperatorGlobal = [];
            this.cooperator_ID = '';
            this.cooperator_IDGlobal = [];
        }
    };
    //查询上一级机构
    DepositHistoryComponent.prototype.queryUpOrg = function () {
        var _this = this;
        var param = {
            flag: "0",
            orgId: this.extParam.orgId,
            rowNum: "10",
            startRow: "1",
        };
        this.httpService.queryOrgByCombConditions(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.orgInfoList && data.orgInfoList.length > 0) {
                    _this.treeOrgName = data.orgInfoList[0].superiorManageOrgName;
                    _this.treeOrgId = data.orgInfoList[0].superiorManageOrg;
                    _this.parent_value = data.orgInfoList[0].superiorManageOrg;
                    _this.loanDepositValue = data.orgInfoList[0].superiorManageOrg;
                    _this.queryFirst(1);
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    //权限
    DepositHistoryComponent.prototype.judgeField = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DepositHistoryComponent.prototype, "outValue", void 0);
    DepositHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deposit-history',
            template: __webpack_require__(/*! ./deposit-history.component.html */ "./src/app/pages/tzb/custom/loan-deposit-change/deposit-history/deposit-history.component.html"),
            styles: [__webpack_require__(/*! ./deposit-history.component.scss */ "./src/app/pages/tzb/custom/loan-deposit-change/deposit-history/deposit-history.component.scss")],
            providers: [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"]]
        }),
        __metadata("design:paramtypes", [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], DepositHistoryComponent);
    return DepositHistoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/loan-deposit-change.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/loan-deposit-change.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"'存贷明细'\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12 Bigtit\">\r\n        <span class=\"littleTit\" [ngClass]=\"{'active':temp==1}\" (click)=\"showDeposit(1)\">当天存款发生明细</span>\r\n        <span class=\"littleTit\" [ngClass]=\"{'active':temp==2}\" (click)=\"showLoan(2)\">当天贷款发生明细</span>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"depositPage\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">分成后借方合计(单位:元):{{loanTotal}}</div>\r\n            <div class=\"ui-g-1\"></div>\r\n            <div class=\"ui-g-4\">分成后贷方合计(单位:元):{{borrowTotal}}</div>\r\n            <div class=\"ui-g-1\"></div>\r\n            <div class=\"btn\">\r\n                <button class=\"btn_1\" pButton label=\"存款历史\" (click)=\"depositHistory()\"></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12  base-table\">\r\n            <p-dataTable [value]=\"depositTable\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]='tabMesg'>\r\n                <p-column field=\"custNum\" header=\"客户号\" [style]=\"{'width':'100px'}\"></p-column>\r\n                <p-column field=\"cardNum\" header=\"账号\" [style]=\"{'width':'100px'}\"></p-column>\r\n                <p-column field=\"accountName\" header=\"账户名称\" [style]=\"{'width':'100px'}\"></p-column>\r\n                <p-column field=\"loanSign\" header=\"借贷标志\" [style]=\"{'width':'100px'}\">\r\n                    <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                        {{col.loanSign|codeValuePie:loanSignOptions}}\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"transAmt\" header=\"交易金额\" [style]=\"{'width':'100px'}\"></p-column>\r\n                <p-column field=\"balance\" header=\"账户余额\" [style]=\"{'width':'100px'}\"></p-column>\r\n                <p-column field=\"managerId\" header=\"客户经理\" [style]=\"{'width':'100px'}\"></p-column>\r\n                <p-column field=\"custOrg\" header=\"账户开户机构\" [style]=\"{'width':'110px'}\"></p-column>\r\n                <p-column field=\"cooperator\" header=\"账户协储员号\" [style]=\"{'width':'110px'}\"></p-column>\r\n                <p-column field=\"subjectNo\" header=\"科目\" [style]=\"{'width':'100px'}\"></p-column>\r\n                <p-column field=\"transName\" header=\"交易类型\" [style]=\"{'width':'100px'}\"></p-column>\r\n                <p-column field=\"transDate\" header=\"交易日期\" [style]=\"{'width':'100px'}\"></p-column>\r\n                <p-column field=\"agencyId\" header=\"交易机构\" [style]=\"{'width':'100px'}\"></p-column>\r\n                <p-column field=\"counterEmp\" header=\"交易柜员号\" [style]=\"{'width':'100px'}\"></p-column>\r\n                <p-column field=\"tellerSerialNum\" header=\"柜员流水号\" [style]=\"{'width':'100px'}\"></p-column>\r\n                <p-column field=\"proportions\" header=\"账户分成比例\" [style]=\"{'width':'110px'}\"></p-column>\r\n                <p-column field=\"proAmt\" header=\"分成后交易金额\" [style]=\"{'width':'130px'}\"></p-column>\r\n            </p-dataTable>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"loanPage\">\r\n        <div class=\"ui-g-12 btn\">\r\n            <button class=\"btn_1\" pButton label=\"贷款历史\" (click)=\"loanHistory()\"></button>\r\n        </div>\r\n        <div class=\"ui-g-12  base-table\">\r\n            <p-dataTable [value]=\"loanTable\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]='tabMesg'>\r\n                <p-column field=\"custNum\" header=\"客户号\" [style]=\"{'width':'130px'}\"></p-column>\r\n                <p-column field=\"custName\" header=\"客户名称\" [style]=\"{'width':'130px'}\"></p-column>\r\n                <p-column field=\"contractNo\" header=\"合同编号\" [style]=\"{'width':'130px'}\"></p-column>\r\n                <p-column field=\"dueBillNo\" header=\"借据编号\" [style]=\"{'width':'130px'}\"></p-column>\r\n                <p-column field=\"transAmt\" header=\"交易金额\" [style]=\"{'width':'130px'}\"></p-column>\r\n                <p-column field=\"detailType\" header=\"交易类型\" [style]=\"{'width':'130px'}\">\r\n                    <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                        {{col.detailType|codeValuePie:detailTypeOptions}}\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"balance\" header=\"账户余额\" [style]=\"{'width':'130px'}\"></p-column>\r\n                <p-column field=\"tallyTeller\" header=\"经办人\" [style]=\"{'width':'130px'}\"></p-column>\r\n                <p-column field=\"transDate\" header=\"交易日期\" [style]=\"{'width':'130px'}\"></p-column>\r\n            </p-dataTable>\r\n        </div>\r\n\r\n    </div>\r\n</div> -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12 Bigtit\">\r\n        <span class=\"littleTit\" [ngClass]=\"{'active':temp==1}\" (click)=\"showDeposit(1)\">存款交易明细</span>\r\n        <span class=\"littleTit\" [ngClass]=\"{'active':temp==2}\" (click)=\"showLoan(2)\">贷款交易明细</span>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-0\" *ngIf=\"depositPage\">\r\n        <!-- <div class=\"ui-g-12\">\r\n            <button class=\"btn_1\" pButton label=\"存款历史\" (click)=\"depositHistory()\"></button>\r\n        </div> -->\r\n\r\n        <deposit-history (outValue)=\"depositCall($event)\"></deposit-history>\r\n\r\n        <iframe *ngIf=\"srcUrl_1\" [src]=\"srcUrl_1\"></iframe>\r\n        <div class=\"ui-g-12 text\">\r\n            <p>备注：1.保密类账户余额显示为-2；</p>\r\n            <p style=\"text-indent: 42px;\">2.查询页面仅展示3000条数据，如需更多，请点击【数据下载】</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-0\" *ngIf=\"loanPage\">\r\n        <!-- <div class=\"ui-g-12\">\r\n            <button class=\"btn_1\" pButton label=\"贷款历史\" (click)=\"loanHistory()\"></button>\r\n        </div> -->\r\n        <loan-history (outValue)=\"loanCall($event)\"></loan-history>\r\n\r\n        <iframe [src]=\"srcUrl_2\"></iframe>\r\n        <div class=\"ui-g-12 text\">\r\n            <p>备注：1.查询页面仅展示3000条数据，如需更多，请点击【数据下载】</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/loan-deposit-change.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/loan-deposit-change.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  width: 100%;\n  background-color: #f2f2f2;\n  align-items: center;\n  padding-left: 7px;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 8px; }\n  .header-title .line {\n    width: 4px;\n    height: 17px;\n    display: inline-block;\n    margin-left: 6px !important;\n    margin-top: 0px !important; }\n  .header-title .text {\n    flex: 1;\n    height: 20px;\n    font-size: 14px;\n    line-height: 20px;\n    display: block;\n    font-weight: bold;\n    white-space: nowrap; }\n  .header-title .text span {\n      margin-right: 20px; }\n  .tit {\n  color: #07374d;\n  font-weight: bold; }\n  .tit > img {\n    margin-right: 8px; }\n  .btn {\n  text-align: right; }\n  .btn .btn_1 {\n    background: #e6b800; }\n  .btn .btn_1:hover {\n      background: #dbaf00; }\n  .Bigtit {\n  background: #ebebeb;\n  padding: 0;\n  margin: 0; }\n  .Bigtit .littleTit {\n    width: 140px;\n    height: 40px;\n    text-align: center;\n    line-height: 40px;\n    display: inline-block;\n    cursor: pointer;\n    font-weight: bold; }\n  .active {\n  color: #19b0c8 !important;\n  border-bottom: 1px solid #19b0c8 !important;\n  background: #fff; }\n  .boxShadow .padding-0 {\n  padding: 0; }\n  iframe {\n  width: 100%;\n  height: 540px; }\n  iframe body {\n    overflow-y: hidden; }\n  .text p {\n  margin: 0; }\n  :host/deep/ .ui-inputtext:disabled {\n  background-color: #fff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9sb2FuLWRlcG9zaXQtY2hhbmdlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcbG9hbi1kZXBvc2l0LWNoYW5nZVxcbG9hbi1kZXBvc2l0LWNoYW5nZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZLEVBQUE7RUFSaEI7SUFVUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQiwyQkFBMkI7SUFDM0IsMEJBQTBCLEVBQUE7RUFkbEM7SUFpQlEsT0FBTztJQUNQLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CLEVBQUE7RUF2QjNCO01BeUJZLGtCQUFrQixFQUFBO0VBSzlCO0VBQ0ksY0FBYztFQUNkLGlCQUFpQixFQUFBO0VBRnJCO0lBSVEsaUJBQWlCLEVBQUE7RUFJekI7RUFDSSxpQkFBaUIsRUFBQTtFQURyQjtJQUdRLG1CQUFtQixFQUFBO0VBSDNCO01BS1ksbUJBQW1CLEVBQUE7RUFLL0I7RUFDSSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVMsRUFBQTtFQUhiO0lBS1EsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFJekI7RUFDSSx5QkFBeUI7RUFDekIsMkNBQTJDO0VBQzNDLGdCQUFnQixFQUFBO0VBR3BCO0VBRVEsVUFBVSxFQUFBO0VBSWxCO0VBQ0ksV0FBVztFQUNYLGFBQWEsRUFBQTtFQUZqQjtJQUlRLGtCQUFrQixFQUFBO0VBSTFCO0VBQ0ksU0FBUyxFQUFBO0VBR2I7RUFDSSxpQ0FBaUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vbG9hbi1kZXBvc2l0LWNoYW5nZS9sb2FuLWRlcG9zaXQtY2hhbmdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIC5saW5lIHtcclxuICAgICAgICB3aWR0aDogNHB4O1xyXG4gICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRleHQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGl0IHtcclxuICAgIGNvbG9yOiAjMDczNzRkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICA+aW1nIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIC5idG5fMSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U2YjgwMDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2RiYWYwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5CaWd0aXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ViZWJlYjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAubGl0dGxlVGl0IHtcclxuICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMTliMGM4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE5YjBjOCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmJveFNoYWRvdyB7XHJcbiAgICAucGFkZGluZy0wIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5pZnJhbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU0MHB4O1xyXG4gICAgYm9keSB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGV4dCBwIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWlucHV0dGV4dDpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/loan-deposit-change.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/loan-deposit-change.component.ts ***!
  \***************************************************************************************/
/*! exports provided: LoanDepositChangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanDepositChangeComponent", function() { return LoanDepositChangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var _bean_tenType_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/tenType.bean */ "./src/app/pages/tzb/custom/loan-deposit-change/bean/tenType.bean.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../custom/http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoanDepositChangeComponent = /** @class */ (function () {
    function LoanDepositChangeComponent(routeInfo, httpService, commfunc, httpServiceView, sanitizer, router) {
        this.routeInfo = routeInfo;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.httpServiceView = httpServiceView;
        this.sanitizer = sanitizer;
        this.router = router;
        this.msgs = [];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"]; //表格中无数据时显示的内容
        this.items = this.routeInfo.snapshot.params;
        this.taskdata = [];
        this.depositTable = []; //当日存款明细
        this.loanTable = []; //当日贷款明细
        this.tenTypeBean = new _bean_tenType_bean__WEBPACK_IMPORTED_MODULE_4__["TenTypeBean"]();
        this.orgId = '';
        this.userId = '';
        this.depositPage = true;
        this.loanPage = false;
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.orgId) {
            this.orgId = this.user.orgId;
        }
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
        if (this.user.targetId) {
            this.targetId = this.user.targetId;
        }
    }
    LoanDepositChangeComponent.prototype.ngOnInit = function () {
        var param = {
            permissionMode: this.user.extParam.permissionMode,
            extParamOrgId: this.user.extParam.orgId,
            userId: this.user.userId,
            orgId: this.user.orgId
        };
        // console.log(param)
        // let depositUrl = TZB_TABLE_DEPOSIT_LOAN + "?permissionMode=" + this.user.extParam.permissionMode + "&&extParamOrgId=" + this.user.extParam.orgId + "&&tableFlag=1&&userId=" + this.user.userId + "&&orgId=" + this.user.orgId + "&&managePermission=" + this.user.extParam.managePermission + "";
        // this.srcUrl_1 = this.sanitizer.bypassSecurityTrustResourceUrl(depositUrl);
        var biaozhi;
        var a = this.targetId.split('');
        var b = a[a.length - 1];
        if (b == '0') {
            this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_HTTP_XIN"];
        }
        else if (b == '1') {
            this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_HTTP_XIN_C"];
        }
        else if (!b || b == '') {
            this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_HTTP_XIN"];
        }
        this.codeValues();
        this.loanSignOptions = this.code['LoanSign'];
        this.transCodeOptions = this.code['TransCode'];
        this.detailTypeOptions = this.code['DetailType'];
        this.temp = 1;
    };
    //存款
    LoanDepositChangeComponent.prototype.showDeposit = function (data, inValue) {
        this.temp = 1;
        this.depositPage = true;
        this.loanPage = false;
        debugger;
        var depositUrl = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_TABLE_DEPOSIT_LOAN"] + "?permissionMode=" + this.user.extParam.permissionMode + "&&extParamOrgId=" + this.user.extParam.orgId + "&&tableFlag=1&&userId=" + this.user.userId + "&&managePermission=" + this.user.extParam.managePermission + "&&operatingLevel=" + this.user.extParam.operatingLevel + "&&postId=" + this.user.extParam.postId + "";
        if (inValue) {
            if (inValue.operatingLevel && inValue.operatingLevel != '') {
                depositUrl = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_TABLE_DEPOSIT_LOAN"] + "?permissionMode=" + this.user.extParam.permissionMode + "&&extParamOrgId=" + this.user.extParam.orgId + "&&tableFlag=1&&userId=" + this.user.userId + "&&managePermission=" + this.user.extParam.managePermission + "&&operatingLevel=" + inValue.operatingLevel + "&&postId=" + this.user.extParam.postId + "";
            }
            for (var k in inValue) {
                if (inValue[k] && inValue[k] != '') {
                    depositUrl = depositUrl + "&&" + k + "=" + inValue[k];
                }
            }
            this.srcUrl_1 = this.sanitizer.bypassSecurityTrustResourceUrl(depositUrl);
        }
    };
    //贷款
    LoanDepositChangeComponent.prototype.showLoan = function (data, inValue) {
        this.temp = 2;
        this.loanPage = true;
        this.depositPage = false;
        var loanUrl = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_TABLE_DEPOSIT_LOAN"] + "?permissionMode=" + this.user.extParam.permissionMode + "&&extParamOrgId=" + this.user.extParam.orgId + "&&tableFlag=2&&userId=" + this.user.userId + "&&managePermission=" + this.user.extParam.managePermission + "&&operatingLevel=" + this.user.extParam.operatingLevel + "&&postId=" + this.user.extParam.postId + "";
        if (inValue) {
            if (inValue.operatingLevel && inValue.operatingLevel != '') {
                loanUrl = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_TABLE_DEPOSIT_LOAN"] + "?permissionMode=" + this.user.extParam.permissionMode + "&&extParamOrgId=" + this.user.extParam.orgId + "&&tableFlag=2&&userId=" + this.user.userId + "&&managePermission=" + this.user.extParam.managePermission + "&&operatingLevel=" + inValue.operatingLevel + "&&postId=" + this.user.extParam.postId + "";
            }
            for (var k in inValue) {
                if (inValue[k] && inValue[k] != '') {
                    loanUrl = loanUrl + "&&" + k + "=" + inValue[k];
                }
            }
        }
        this.srcUrl_2 = this.sanitizer.bypassSecurityTrustResourceUrl(loanUrl);
    };
    //存款查询
    LoanDepositChangeComponent.prototype.depositQuery = function () {
        // this.httpService.queryDepostTimelyDetails({}).subscribe(data => {
        //     console.log(data)
        //     if (data.returnCode.code == 'success') {
        //         this.depositTable = data.resultList;
        //         this.loanTotal = data.loanTotal;
        //         this.borrowTotal = data.borrowTotal;
        //     } else {
        //         this.msgs = [];
        //         this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
        //     }
        // }, err => {
        //     this.msgs = [];
        //     this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        // });
    };
    //贷款查询
    LoanDepositChangeComponent.prototype.loanQuery = function () {
        var _this = this;
        this.httpService.queryLoanTimelyDetails({}).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.loanTable = data.resultList;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //存款历史
    LoanDepositChangeComponent.prototype.depositHistory = function () {
        this.router.navigate(["pages/tzb/custom/loan-deposit-change/deposit-history"]);
        // this.tenTypeBean.userId = this.userId;
        // this.tenTypeBean.sysCode = '122';
        // this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
        // this.tenTypeBean.serverName = 'ywsn';
        // this.tenTypeBean.validateType = '0';
        // this.tenTypeBean.extraInfo = 'ywsn';
        // this.tenTypeBean.encryptType = 'HS256';
        // this.httpService.tokenApply(this.tenTypeBean).subscribe(data => {
        //     if (data.returnCode.code == 'success') {
        //         let tokens = data.tokenCode;
        //         let url = this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + this.userId + "&urlParam=/plats/FrontController?commandType=606040|moduleCode=1169E4F4D3EA9D4D9DF5072076732FE38|moduleTable=|moduleProc=|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=1169E4F4D3EA9D4D9DF5072076732FE38|main_moduleTable=";
        //         let features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
        //         let closeOnLoseFocus = 'closeOnLoseFocus';
        //         let timestamp = new Date().getTime();
        //         this.commfunc.openPostWindow(url, "custWindow" + timestamp, features, closeOnLoseFocus);
        //     } else {
        //         this.msgs = [];
        //         this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
        //     }
        // }, error => {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        // })
    };
    //贷款历史
    LoanDepositChangeComponent.prototype.loanHistory = function () {
        this.router.navigate(["pages/tzb/custom/loan-deposit-change/loan-history"]);
        // this.tenTypeBean.userId = this.userId;
        // this.tenTypeBean.sysCode = '122';
        // this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
        // this.tenTypeBean.serverName = 'ywsn';
        // this.tenTypeBean.validateType = '0';
        // this.tenTypeBean.extraInfo = 'ywsn';
        // this.tenTypeBean.encryptType = 'HS256';
        // this.httpService.tokenApply(this.tenTypeBean).subscribe(data => {
        //     if (data.returnCode.code == 'success') {
        //         let tokens = data.tokenCode;
        //         let url = this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + this.userId + "&urlParam=/plats/FrontController?commandType=571600018|moduleCode=0CD3D4D828E6C7B0619FCAD65F25C728|moduleTable=|moduleProc=|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=0CD3D4D828E6C7B0619FCAD65F25C728|main_moduleTable=";
        //         let features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
        //         let closeOnLoseFocus = 'closeOnLoseFocus';
        //         let timestamp = new Date().getTime();
        //         this.commfunc.openPostWindow(url, "custWindow" + timestamp, features, closeOnLoseFocus);
        //     } else {
        //         this.msgs = [];
        //         this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
        //     }
        // }, error => {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        // })
    };
    //码值
    LoanDepositChangeComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    LoanDepositChangeComponent.prototype.depositCall = function (event) {
        console.log(event);
        this.showDeposit(1, event);
    };
    LoanDepositChangeComponent.prototype.loanCall = function (event) {
        console.log(event);
        this.showLoan(2, event);
    };
    LoanDepositChangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loan-deposit-change',
            template: __webpack_require__(/*! ./loan-deposit-change.component.html */ "./src/app/pages/tzb/custom/loan-deposit-change/loan-deposit-change.component.html"),
            styles: [__webpack_require__(/*! ./loan-deposit-change.component.scss */ "./src/app/pages/tzb/custom/loan-deposit-change/loan-deposit-change.component.scss")],
            providers: [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomeHttpService"], _custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_7__["CusViewHttpService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomeHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"],
            _custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_7__["CusViewHttpService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoanDepositChangeComponent);
    return LoanDepositChangeComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/loan-deposit-change.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/loan-deposit-change.module.ts ***!
  \************************************************************************************/
/*! exports provided: LoanDepositChangeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanDepositChangeModule", function() { return LoanDepositChangeModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _loan_deposit_change_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-deposit-change.routing */ "./src/app/pages/tzb/custom/loan-deposit-change/loan-deposit-change.routing.ts");
/* harmony import */ var _loan_deposit_change_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loan-deposit-change.component */ "./src/app/pages/tzb/custom/loan-deposit-change/loan-deposit-change.component.ts");
/* harmony import */ var _deposit_history_deposit_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deposit-history/deposit-history.component */ "./src/app/pages/tzb/custom/loan-deposit-change/deposit-history/deposit-history.component.ts");
/* harmony import */ var _loan_history_loan_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loan-history/loan-history.component */ "./src/app/pages/tzb/custom/loan-deposit-change/loan-history/loan-history.component.ts");
/* harmony import */ var _loan_history_bussType_tree_bussType_tree_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loan-history/bussType-tree/bussType-tree.component */ "./src/app/pages/tzb/custom/loan-deposit-change/loan-history/bussType-tree/bussType-tree.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LoanDepositChangeModule = /** @class */ (function () {
    function LoanDepositChangeModule() {
    }
    LoanDepositChangeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _loan_deposit_change_routing__WEBPACK_IMPORTED_MODULE_4__["LoanDepositChangeRouting"]
            ],
            declarations: [
                _loan_deposit_change_component__WEBPACK_IMPORTED_MODULE_5__["LoanDepositChangeComponent"],
                _deposit_history_deposit_history_component__WEBPACK_IMPORTED_MODULE_6__["DepositHistoryComponent"],
                _loan_history_loan_history_component__WEBPACK_IMPORTED_MODULE_7__["LoanHistoryComponent"],
                _loan_history_bussType_tree_bussType_tree_component__WEBPACK_IMPORTED_MODULE_8__["BussTypeTreeComponent"],
            ],
            providers: []
        })
    ], LoanDepositChangeModule);
    return LoanDepositChangeModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/loan-deposit-change.routing.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/loan-deposit-change.routing.ts ***!
  \*************************************************************************************/
/*! exports provided: routes, LoanDepositChangeRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanDepositChangeRouting", function() { return LoanDepositChangeRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loan_deposit_change_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-deposit-change.component */ "./src/app/pages/tzb/custom/loan-deposit-change/loan-deposit-change.component.ts");
/* harmony import */ var _deposit_history_deposit_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deposit-history/deposit-history.component */ "./src/app/pages/tzb/custom/loan-deposit-change/deposit-history/deposit-history.component.ts");
/* harmony import */ var _loan_history_loan_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-history/loan-history.component */ "./src/app/pages/tzb/custom/loan-deposit-change/loan-history/loan-history.component.ts");




var routes = [
    {
        path: '',
        component: _loan_deposit_change_component__WEBPACK_IMPORTED_MODULE_1__["LoanDepositChangeComponent"],
    },
    {
        path: 'deposit-history',
        component: _deposit_history_deposit_history_component__WEBPACK_IMPORTED_MODULE_2__["DepositHistoryComponent"]
    },
    {
        path: 'loan-history',
        component: _loan_history_loan_history_component__WEBPACK_IMPORTED_MODULE_3__["LoanHistoryComponent"]
    }
];
var LoanDepositChangeRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/loan-history/bean/loanHistory.bean.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/loan-history/bean/loanHistory.bean.ts ***!
  \********************************************************************************************/
/*! exports provided: LoanHistoryBean, LoanHistoryTotalBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanHistoryBean", function() { return LoanHistoryBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanHistoryTotalBean", function() { return LoanHistoryTotalBean; });
var LoanHistoryBean = /** @class */ (function () {
    function LoanHistoryBean() {
    }
    return LoanHistoryBean;
}());

var LoanHistoryTotalBean = /** @class */ (function () {
    function LoanHistoryTotalBean() {
    }
    return LoanHistoryTotalBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/loan-history/bussType-tree/bussType-tree.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/loan-history/bussType-tree/bussType-tree.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"productTree\">\r\n    <div class=\"ui-g-12\">\r\n        <span class=\"left boxShadow org\">\r\n            <header-title [Info]=\"'可售产品目录'\"></header-title>\r\n            <p-tree [value]=\"left_tree_arr\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\"\r\n                (onNodeExpand)=\"nodeExpend($event)\"></p-tree>\r\n        </span>\r\n        <div class=\"right boxShadow\">\r\n            <!-- <header-title [Info]=\"'产品信息查询'\"></header-title> -->\r\n            <!-- 查询条件 -->\r\n            <!-- <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <label>产品代码：</label>\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"s_productId\">\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <label>产品名称：</label>\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"s_productName\">\r\n                </div>\r\n            </div>\r\n            <div style=\"text-align:center\">\r\n                <button pButton type=\"button\" label=\"查询\" (click)='queryProListClick()'></button>\r\n                <button pButton type=\"button\" label=\"重置\" (click)='resetClick()'></button>\r\n            </div> -->\r\n            <div class=\"ui-g-12 table\">\r\n                <p-dataTable [value]=\"cars_2\" [emptyMessage]=\"tableMesg\" scrollWidth=\"'100%'\" scrollable=\"true\" scrollHeight=\"500px\">\r\n                    <p-column>\r\n                        <ng-template pTemplate=\"header\">\r\n                            <p-checkbox name=\"groupname\" label=\"选择\" [(ngModel)]=\"checkAll\" binary=\"true\" (click)=\"checkAllClick()\"></p-checkbox>\r\n                        </ng-template>\r\n                        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                            <p-checkbox [(ngModel)]=\"col.checkBox\" (onChange)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column field=\"productName\" header=\"产品名称\"></p-column>\r\n                    <p-column field=\"productId\" header=\"产品代码\"></p-column>\r\n                </p-dataTable>\r\n            </div>\r\n            <!-- <div class=\"ui-g-12\">\r\n                <p-paginator class=\"ff\" rows=\"{{pageSize}}\" totalRecords=\"{{totalNum}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                    (onPageChange)=\"paginate($event,'proQuery')\"></p-paginator>\r\n            </div> -->\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 btnCenter\">\r\n        <button pButton type=\"button\" label=\"确认提交\" (click)='addBtnCom()' class=\"addBtn\"></button>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/loan-history/bussType-tree/bussType-tree.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/loan-history/bussType-tree/bussType-tree.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productTree {\n  background-color: red;\n  width: 100%;\n  max-height: 600px; }\n\n.left {\n  display: inline-block;\n  width: 30%;\n  min-height: 550px;\n  max-height: 550px;\n  border: 1px solid #888;\n  padding: 5px;\n  overflow-y: scroll;\n  border-radius: 4px; }\n\n.right {\n  display: inline-block;\n  float: right;\n  margin-right: 0px !important;\n  max-height: 550px;\n  padding: 5px;\n  min-height: 550px;\n  width: 69%;\n  border: 1px solid #888;\n  border-radius: 4px;\n  overflow-y: scroll; }\n\n.text_right {\n  text-align: right; }\n\n.bottom {\n  text-align: center;\n  margin-bottom: 30px; }\n\n.search {\n  margin-right: 26px; }\n\n.table {\n  text-align: center;\n  border-top: 1px solid #b6a7a7;\n  margin-top: 40px; }\n\n.btnCenter {\n  text-align: center; }\n\n.detail {\n  z-index: 10000; }\n\n.detail .ui-dialog.ui-shadow {\n    height: 90% !important; }\n\n.detail .ui-dialog .ui-dialog-content {\n    height: 90%; }\n\n:host/deep/ .cardStatusAdjustmentProfDetail .ui-dialog.ui-shadow {\n  height: 100% !important; }\n\n:host/deep/ .cardStatusAdjustmentProfDetail .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n.input_c {\n  width: 129px;\n  height: 27px;\n  line-height: 27px; }\n\n.pdropdown-c,\n.ui-dropdown {\n  width: 150px !important;\n  min-width: 158px !important; }\n\n.data-class {\n  width: 45px; }\n\n#input-id {\n  width: 45px; }\n\n:host/deep/ .ui-inputtext {\n  width: auto !important; }\n\n:host/deep/ .ui-dropdown .ui-dropdown-label {\n  width: 220px !important; }\n\n:host/deep/ .ff .ui-paginator .ui-dropdown {\n  min-width: 4em !important; }\n\n:host/deep/ .ff .ui-inputtext {\n  min-width: 4em !important; }\n\n:host/deep/ .ff .ui-paginator .ui-dropdown .ui-dropdown-label {\n  width: 4em !important; }\n\n.ui-dropdown-label {\n  width: 100px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9sb2FuLWRlcG9zaXQtY2hhbmdlL2xvYW4taGlzdG9yeS9idXNzVHlwZS10cmVlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcbG9hbi1kZXBvc2l0LWNoYW5nZVxcbG9hbi1oaXN0b3J5XFxidXNzVHlwZS10cmVlXFxidXNzVHlwZS10cmVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksY0FBYyxFQUFBOztBQURsQjtJQUdRLHNCQUFzQixFQUFBOztBQUg5QjtJQU1RLFdBQVcsRUFBQTs7QUFJbkI7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxzQkFBc0IsRUFBQTs7QUFJMUI7RUFDSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUdyQjs7RUFFSSx1QkFBdUI7RUFDdkIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksV0FDSixFQUFBOztBQUVBO0VBQ0ksV0FDSixFQUFBOztBQUVBO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2xvYW4tZGVwb3NpdC1jaGFuZ2UvbG9hbi1oaXN0b3J5L2J1c3NUeXBlLXRyZWUvYnVzc1R5cGUtdHJlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0VHJlZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWluLWhlaWdodDogNTUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA1NTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogNTUwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1NTBweDtcclxuICAgIHdpZHRoOiA2OSU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4udGV4dF9yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjZweDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjZhN2E3O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLmJ0bkNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZXRhaWwge1xyXG4gICAgei1pbmRleDogMTAwMDA7XHJcbiAgICAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICAgICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcclxuICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmNhcmRTdGF0dXNBZGp1c3RtZW50UHJvZkRldGFpbCAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmNhcmRTdGF0dXNBZGp1c3RtZW50UHJvZkRldGFpbCAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vL+ihqOagvOmHjOeahOWtl+avjeOAgeaVsOWtl+WmguaenOWkqumVv+WPr+iHquWKqOaNouihjFxyXG46aG9zdC9kZWVwLyAudWktY2VsbC1kYXRhIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmlucHV0X2Mge1xyXG4gICAgd2lkdGg6IDEyOXB4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbn1cclxuXHJcbi5wZHJvcGRvd24tYyxcclxuLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAxNThweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0YS1jbGFzcyB7XHJcbiAgICB3aWR0aDogNDVweFxyXG59XHJcblxyXG4jaW5wdXQtaWQge1xyXG4gICAgd2lkdGg6IDQ1cHhcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWlucHV0dGV4dCB7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZHJvcGRvd24gLnVpLWRyb3Bkb3duLWxhYmVsIHtcclxuICAgIHdpZHRoOiAyMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuZmYgLnVpLXBhZ2luYXRvciAudWktZHJvcGRvd24ge1xyXG4gICAgbWluLXdpZHRoOiA0ZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmZmIC51aS1pbnB1dHRleHQge1xyXG4gICAgbWluLXdpZHRoOiA0ZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmZmIC51aS1wYWdpbmF0b3IgLnVpLWRyb3Bkb3duIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICB3aWR0aDogNGVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/loan-history/bussType-tree/bussType-tree.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/loan-history/bussType-tree/bussType-tree.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: BussTypeTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BussTypeTreeComponent", function() { return BussTypeTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_http_uisftech_common_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/http/uisftech-common-http.service */ "./src/app/@uisftech/common/http/uisftech-common-http.service.ts");
/* harmony import */ var _bean_loanHistory_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bean/loanHistory.bean */ "./src/app/pages/tzb/custom/loan-deposit-change/loan-history/bean/loanHistory.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { SelectProductBean } from './bean/select-product.bean';






var BussTypeTreeComponent = /** @class */ (function () {
    function BussTypeTreeComponent(uisftechCommonHttpService, commfunc, router) {
        var _this = this;
        this.uisftechCommonHttpService = uisftechCommonHttpService;
        this.commfunc = commfunc;
        this.router = router;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.head_title = '业务目录详情';
        //提示信息
        this.msgs = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["CALENDAR_CN"];
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"];
        //列表
        this.cars_2 = [];
        this.left_tree = [];
        this.left_tree_arr = [];
        this.hierarchy_arr = [];
        this.any = [];
        //查询条件
        this.productId = ''; //产品id
        this.productName = ''; //产品名称
        this.pageSize = 10; //每页多少条
        this.pageNum = 1; //当前页
        this.first = 0;
        //bean
        this.loanHistoryBean = new _bean_loanHistory_bean__WEBPACK_IMPORTED_MODULE_5__["LoanHistoryBean"]();
        //选择数据
        this.chooseData = [];
        this.checkAll = false;
        this.ctlgIdV = '';
        setTimeout(function () {
            _this.cars_2 = [];
        });
    }
    BussTypeTreeComponent.prototype.ngOnInit = function () {
        this.current_id = this.first_id; //初始化默认  第一级
        this.queryCatalog();
    };
    //码值
    BussTypeTreeComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //调用公共参数项服务查询业务目录编码
    BussTypeTreeComponent.prototype.queryCatalog = function () {
        var _this = this;
        var param = { paramGroupId: "COP", paramName: "loanHistoryDetails" };
        this.uisftechCommonHttpService.queryCommonParamItemService(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                if (data.returnCommonParamItemList && data.returnCommonParamItemList.length > 0) {
                    _this.first_id = data.returnCommonParamItemList[0].paramItemName;
                    _this.current_id = _this.first_id; //初始化默认  第一级
                    _this.query_line();
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    BussTypeTreeComponent.prototype.query_line = function () {
        var _this = this;
        var parm = { ctlgId: this.first_id };
        this.uisftechCommonHttpService.ctlgMenuQuery(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.all_tree = data.customerMenuList;
                var _loop_1 = function (items) {
                    _this.hierarchy_arr = _this.getMeuInfo(_this.all_tree, items.id);
                    var parames = {
                        ctlgId: items.id,
                        maxIdLevel: _this.hierarchy_arr[1],
                        ctlgIdLevel: _this.hierarchy_arr[0] - 1,
                    };
                    var delData = function (data) {
                        _this.ctlgOrCategoryLocalCode = data.departmentList.departmentList[0].basicMessage.ctlgOrCategoryLocalCode;
                        items['ctlgOrCategoryLocalCode'] = data.departmentList.departmentList[0].basicMessage.ctlgOrCategoryLocalCode;
                    };
                    _this.commfunc.interfaceComFnc(_this.uisftechCommonHttpService.ctlgManageContactAttrInfo(parames), delData, _this.msgs);
                };
                for (var _i = 0, _a = _this.all_tree; _i < _a.length; _i++) {
                    var items = _a[_i];
                    _loop_1(items);
                }
                _this.left_tree_arr = _this.hierarchyTree(_this.all_tree, '', '');
                console.log(_this.left_tree_arr);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // -  号点击
    BussTypeTreeComponent.prototype.nodeCheck = function (event) {
        console.log(event);
        this.current_id = event.node.value[0].productId;
        var arr = [];
        for (var _i = 0, _a = this.all_tree; _i < _a.length; _i++) {
            var item = _a[_i];
            if (event.node.value[0].productId == item.pid) {
                arr.push({ productName: item.name, productId: item.ctlgOrCategoryLocalCode });
            }
        }
        if (arr.length == 0) {
            arr.push({ productName: event.node.label, productId: event.node.value[0].ctlgOrCategoryLocalCode });
        }
        this.cars_2 = arr;
    };
    //+号点击
    BussTypeTreeComponent.prototype.nodeExpend = function (event) {
        event.node.children = this.hierarchyTree(this.all_tree, event.node.value[0].productId, event.node.label);
    };
    //层级树
    BussTypeTreeComponent.prototype.hierarchyTree = function (menu_list, pid, categoryName) {
        var menu_arr = [];
        for (var _i = 0, menu_list_1 = menu_list; _i < menu_list_1.length; _i++) {
            var key = menu_list_1[_i];
            if (key.pid === pid) {
                menu_arr.push({
                    // children: [{}],
                    label: key.name,
                    value: [{
                            productId: key.id,
                            productName: key.name,
                            productCategoryId: key.pid,
                            categoryName: categoryName,
                            ctlgOrCategoryLocalCode: key.ctlgOrCategoryLocalCode
                        }]
                });
            }
        }
        return menu_arr;
    };
    //层级树
    BussTypeTreeComponent.prototype.hierarchyTree2 = function (menu_list, pid) {
        var menu_arr = [];
        for (var _i = 0, menu_list_2 = menu_list; _i < menu_list_2.length; _i++) {
            var key = menu_list_2[_i];
            if (key.pid === pid) {
                menu_arr.push({
                    productName: key.name,
                    productId: key.id
                });
            }
        }
        return menu_arr;
    };
    BussTypeTreeComponent.prototype.hierarchyTree1 = function (menu_list, pid) {
        var menu_arr = [];
        for (var _i = 0, menu_list_3 = menu_list; _i < menu_list_3.length; _i++) {
            var key = menu_list_3[_i];
            //  if(key.pid === pid){
            menu_arr.push({
                children: [{}],
                label: key.catalogName,
                value: [key.prodCatalogId]
            });
            //  }
        }
        return menu_arr;
    };
    BussTypeTreeComponent.prototype.getMeuInfo = function (tree, curren_pid) {
        var count = 0;
        var getFirstId = function (tree) {
            var id = '';
            tree.every(function (item) {
                item.prodCatalogId == '' ? id = item.prodCatalogId : null;
            });
            return id;
        };
        //末级菜单id
        var getLastId = function (tree) {
            var id_arr = [];
            tree.forEach(function (item) {
                var stu = tree.every(function (item2) {
                    if (item.prodCatalogId != item2.pid) {
                        return true;
                    }
                }) ? id_arr.push(item.id) : null;
            });
            return id_arr;
        };
        //最大层级深度 
        var getMaxHierarchy = function (tree, first_id, last_arr) {
            var arr = [];
            last_arr.forEach(function (item) {
                count = 0;
                var max = currentHierarchy(tree, first_id, item);
                arr.push(max);
            });
            return arr.sort()[arr.length - 1];
        };
        //当前层级深度
        //记录层级次数
        function currentHierarchy(tree, first_id, pid) {
            if (pid != first_id) {
                tree.some(function (item) {
                    if (item.id === pid) {
                        count++;
                        currentHierarchy(tree, first_id, item.pid);
                        return false;
                    }
                });
            }
            return count;
        }
        var first_id = getFirstId(tree); //一级菜单id
        var last_arr = getLastId(tree); //末级菜单 id组
        var current_hierarchy = currentHierarchy(tree, first_id, curren_pid); //当前层级
        var max_hierarchy = getMaxHierarchy(tree, first_id, last_arr); //最大层级 
        return [current_hierarchy, max_hierarchy];
    };
    //根据产品id、产品名称查列表点击事件
    BussTypeTreeComponent.prototype.queryProListClick = function () {
        this.chooseData = [];
        this.pageNum = 1;
        this.pageSize = 10;
        this.queryProList();
    };
    //根据产品id、产品名称查列表查询服务
    BussTypeTreeComponent.prototype.queryProList = function () {
        var _this = this;
        var params = {
            ctlgId: this.current_id,
            productId: this.s_productId,
            productName: this.s_productName,
            pageNum: this.pageNum,
            pageSize: this.pageSize
        };
        this.uisftechCommonHttpService.toCustomerOperation(params).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.cars_2 = data.customerListtemp;
                _this.totalNum = data.total;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //分页
    BussTypeTreeComponent.prototype.paginate = function (event, param) {
        if (param == 'proQuery') {
            //每页显示的条数
            this.pageSize = event.rows * 1;
            //当前页
            var currentPage = event.page + 1;
            this.pageNum = currentPage;
            this.first = event.page * event.rows;
            //调用查询的方法
            this.queryProList();
        }
    };
    //重置按钮
    BussTypeTreeComponent.prototype.resetClick = function () {
        this.s_productId = ''; //清空产品id
        this.s_productName = ''; //清空产品名称
    };
    //确定按钮事件
    BussTypeTreeComponent.prototype.addBtnCom = function () {
        if (this.chooseData && this.chooseData.length > 0) {
            this.outValue.emit(this.chooseData);
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择产品' });
            return;
        }
    };
    //贷款业务全选按钮
    BussTypeTreeComponent.prototype.checkAllClick = function () {
        this.chooseData = [];
        for (var i = 0; i < this.cars_2.length; i++) {
            if (this.checkAll == true) {
                this.cars_2[i].checkBox = true;
                this.chooseData.push(this.cars_2[i]);
            }
            else {
                this.chooseData = [];
                this.cars_2[i].checkBox = false;
            }
        }
    };
    //贷款业务单选按钮
    BussTypeTreeComponent.prototype.checkBoxClick = function (i, data) {
        var _this = this;
        if (data.checkBox) {
            this.chooseData.push(data);
        }
        else {
            this.chooseData.forEach(function (item, i) {
                if (item == data) {
                    _this.chooseData.splice(i, 1);
                }
            });
        }
        if (this.chooseData.length == this.cars_2.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    };
    //查询自定义分类编号
    BussTypeTreeComponent.prototype.productQuery = function () {
        var _this = this;
        var parames = {
            pageSize: this.pageSize,
            pageNum: this.pageNum,
            ctlgId: this.ctlgIdV,
            maxIdLevel: this.maxIdLevelV,
            ctlgIdLevel: this.ctlgIdLevelV
        };
        var delData = function (data) {
            _this.ctlgOrCategoryLocalCode = data.departmentList.departmentList[0].basicMessage.ctlgOrCategoryLocalCode;
        };
        this.interfaceComFnc(this.uisftechCommonHttpService.ctlgManageContactAttrInfo(parames), delData);
    };
    BussTypeTreeComponent.prototype.interfaceComFnc = function (service_method, success_fnc) {
        var _this = this;
        service_method.subscribe(function (data) {
            if (data.returnCode != null && data.returnCode.code == "success") {
                if (success_fnc !== null) {
                    success_fnc(data);
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BussTypeTreeComponent.prototype, "outValue", void 0);
    BussTypeTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bussType-tree',
            template: __webpack_require__(/*! ./bussType-tree.component.html */ "./src/app/pages/tzb/custom/loan-deposit-change/loan-history/bussType-tree/bussType-tree.component.html"),
            styles: [__webpack_require__(/*! ./bussType-tree.component.scss */ "./src/app/pages/tzb/custom/loan-deposit-change/loan-history/bussType-tree/bussType-tree.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], app_uisftech_common_http_uisftech_common_http_service__WEBPACK_IMPORTED_MODULE_4__["UisftechCommonHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_http_uisftech_common_http_service__WEBPACK_IMPORTED_MODULE_4__["UisftechCommonHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BussTypeTreeComponent);
    return BussTypeTreeComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/loan-history/loan-history.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/loan-history/loan-history.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <!-- <header-title [Info]=\"'贷款发生明细'\"></header-title> -->\r\n    <form [formGroup]=\"userform\">\r\n        <div class=\"ui-g-12\" style=\"padding-right:5%;\">\r\n            <div class=\"ui-g-12 padding-0\">\r\n                <div class=\"ui-g-4 padding-0\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span appValidation>机构码:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-8\" *ngIf=\"extParam.managePermission=='N'\">\r\n                        <input formControlName=\"treeOrgName\" class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"treeOrgName\" disabled/>\r\n                    </div>\r\n                    <div class=\"ui-g-8 queryinputbtn\" *ngIf=\"extParam.managePermission=='Y'\">\r\n                        <input formControlName=\"treeOrgName\" class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"treeOrgName\" disabled/>\r\n                        <div (click)=\"perTreeShow()\" class=\"clickspan\">\r\n                            <a class=\"a-hand\">\r\n                                <span>...</span>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"requireLabel\" *ngIf=\"!userform.controls['treeOrgName'].valid&&userform.controls['treeOrgName'].dirty&&isShowTip\">机构号必输!</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-4 padding-0\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span>客户经理:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-8\" *ngIf=\"extParam.managePermission=='N'\">\r\n                        <input formControlName=\"managerName\" type=\"text\" pInputText [(ngModel)]=\"managerName\" disabled/>\r\n                    </div>\r\n                    <div class=\"ui-g-8 queryinputbtn\" *ngIf=\"extParam.managePermission=='Y'\">\r\n                        <input formControlName=\"managerName\" class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"managerName\" disabled/>\r\n                        <div (click)=\"perShow()\" class=\"clickspan\">\r\n                            <a class=\"a-hand\">\r\n                                <span>...</span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-4 padding-0\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span>客户号:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <input formControlName=\"custNum\" type=\"text\" pInputText [(ngModel)]=\"loanHistoryBean.custNum\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12 padding-0\">\r\n                <div class=\"ui-g-4 padding-0\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span>五级分类:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <p-dropdown formControlName=\"fiveLevelClassify\" styleClass=\"productive-area\" [options]=\"fiveTypeList\" [(ngModel)]=\"loanHistoryBean.fiveLevelClassify\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-4 padding-0\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span>贷款类型:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <p-dropdown formControlName=\"loanType\" styleClass=\"productive-area\" [options]=\"loanTypeList\" [(ngModel)]=\"loanHistoryBean.loanType\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-4 padding-0\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span appValidation>业务品种:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-8 queryinputbtn\">\r\n                        <input class=\"queryinputOrg\" formControlName=\"bussTypeOptions\" type=\"text\" pInputText [(ngModel)]=\"bussTypeOptions\" disabled/>\r\n                        <div (click)=\"bussTypeShow()\" class=\"clickspan\">\r\n                            <a class=\"a-hand\">\r\n                                <span>...</span>\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"requireLabel\" *ngIf=\"!userform.controls['bussTypeOptions'].valid&&userform.controls['bussTypeOptions'].dirty&&isShowTip\">业务品种必输!</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12 padding-0\">\r\n                <div class=\"ui-g-4 padding-0\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span>交易类型:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <p-dropdown formControlName=\"transType\" styleClass=\"productive-area\" [options]=\"transTypeList\" [(ngModel)]=\"loanHistoryBean.transType\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-4 padding-0\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span>交易金额:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-8 put_style\">\r\n                        <input formControlName=\"transAmtStart\" class=\"inputStyle\" type=\"text\" pInputText [(ngModel)]=\"loanHistoryBean.transAmtStart\"\r\n                            (blur)=\"checkMoney()\" /> 至\r\n                        <input formControlName=\"transAmtEnd\" class=\"inputStyle\" type=\"text\" pInputText [(ngModel)]=\"loanHistoryBean.transAmtEnd\"\r\n                            (blur)=\"checkMoney()\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-4 padding-0\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span appValidation>交易日期:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <p-calendar formControlName=\"StartDate\" [maxDate]=\"endDate_new\" [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                            yearRange=\"1917:2200\" dateFormat=\"yy-mm-dd\" [showOtherMonths]=\"false\" [locale]=\"ch\" [(ngModel)]=\"StartDate\"\r\n                            (onSelect)=\"chectStart(this.StartDate)\"></p-calendar>\r\n                        至\r\n                        <p-calendar formControlName=\"EndDate\" [minDate]=\"StartDate\" [maxDate]=\"endDate_new\" [showIcon]=\"true\" [monthNavigator]=\"true\"\r\n                            [yearNavigator]=\"true\" yearRange=\"1917:2200\" dateFormat=\"yy-mm-dd\" [showOtherMonths]=\"false\" [locale]=\"ch\"\r\n                            [(ngModel)]=\"EndDate\" (onSelect)=\"chectEnd(this.EndDate)\"></p-calendar>\r\n                        <span class=\"requireLabel\" *ngIf=\"!userform.controls['StartDate'].valid&&userform.controls['StartDate'].dirty&&isShowTip\">开始日期必输!</span>\r\n                        <span class=\"requireLabel\" *ngIf=\"!userform.controls['EndDate'].valid&&userform.controls['EndDate'].dirty&&isShowTip\">到期日期必输!</span>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button class=\"btn_1\" pButton label=\"查询\" (click)=\"queryFirst()\"></button>\r\n        <button pButton label=\"重置\" (click)=\"reset()\"></button>\r\n        <button class=\"btn_2\" pButton label=\"数据下载\" *ngIf=\"judgeField('SID02091_P001')\" (click)=\"download()\"></button>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12 padding-0 total\">\r\n            <div class=\"ui-g-1 ui-g-offset-11 padding-0\">单位：元</div>\r\n        </div> -->\r\n    <!-- <div class=\"ui-g-12  base-table\">\r\n        <p-dataTable [value]=\"loanTable\" [style]=\"{'text-align':'center','overflow':'auto'}\">\r\n            <p-column field=\"custNum\" header=\"客户号\" [style]=\"{'width':'130px'}\"></p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\" [style]=\"{'width':'200px'}\"></p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" [style]=\"{'width':'200px'}\"></p-column>\r\n            <p-column field=\"dueBillNo\" header=\"借据编号\" [style]=\"{'width':'130px'}\"></p-column>\r\n            <p-column field=\"transAmt\" header=\"交易金额\" [style]=\"{'width':'130px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{(col.transAmt/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"detailType\" header=\"交易类型\" [style]=\"{'width':'130px'}\"></p-column>\r\n            <p-column field=\"balance\" header=\"账户余额\" [style]=\"{'width':'130px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{(col.balance/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"tallyTeller\" header=\"经办人\" [style]=\"{'width':'130px'}\"></p-column>\r\n            <p-column field=\"transDate\" header=\"交易日期\" [style]=\"{'width':'130px'}\"></p-column>\r\n\r\n            <p-footerColumnGroup>\r\n                <p-row>\r\n                    <p-column footer=\"合计\" [style]=\"{'font-weight':'bold','width':'130px'}\"></p-column>\r\n                    <p-column footer=\"交易笔数:{{loanHistoryTotalBean.total}}\" [style]=\"{'width':'200px'}\"></p-column>\r\n                    <p-column footer=\"交易金额:{{loanHistoryTotalBean.totalAmt | number:'1.2-2'}}\" [style]=\"{'width':'200px'}\"></p-column>\r\n                    <p-column footer=\"\" *ngFor=\"let item of collection\"></p-column>\r\n                </p-row>\r\n            </p-footerColumnGroup>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows=\"{{loanHistoryBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div> -->\r\n</div>\r\n\r\n\r\n<p-dialog *ngIf=\"orgTreePage\" [(visible)]=\"orgTreePage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <org-tree-component [cardVlaue]=\"loanDepositValue\" (outValue)=\"treeCall($event)\"></org-tree-component>\r\n</p-dialog>\r\n\r\n<p-dialog *ngIf=\"bussTreePage\" [(visible)]=\"bussTreePage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10\r\n    class=\"bussTreePage\">\r\n    <bussType-tree (outValue)=\"bussTypeCall($event)\"></bussType-tree>\r\n</p-dialog>\r\n\r\n<p-dialog *ngIf=\"downloadPerson\" header=\"请选择该节点对应的处理人\" modal=\"modal\" width='435' [(visible)]=\"downloadPerson\" (onHide)=\"downloadHide()\"\r\n    class=\"dialog\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>\r\n\r\n<p-dialog *ngIf=\"personPage\" [(visible)]=\"personPage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <app-query-user-list (outValue)=\"perInfor($event)\" [in-value]=\"parent_value\"></app-query-user-list>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/loan-history/loan-history.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/loan-history/loan-history.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tit {\n  text-align: right; }\n\n.ui-g-6 .ui-g-4,\n.ui-g-6 .ui-g-6 {\n  padding: 0; }\n\n.padding-0 {\n  padding: 0; }\n\n.queryinputbtn .queryinputOrg {\n  border-right: none;\n  border-radius: 3px 0 0 3px;\n  width: 85% !important;\n  min-width: 69px !important;\n  float: left; }\n\n.queryinputbtn .clickspan {\n  width: calc(15% - 2px);\n  height: 23px;\n  cursor: pointer;\n  float: right; }\n\n.date {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 25px; }\n\n:host/deep/ .ui-calendar {\n  width: calc(50% - 12px);\n  min-width: 0; }\n\n.inputStyle {\n  width: calc(50% - 12px);\n  min-width: 0; }\n\n.btn {\n  text-align: center; }\n\n.btn .btn_2 {\n    color: #fff;\n    background: #fec61e; }\n\n:host/deep/ .productive-area.ui-dropdown {\n  width: 100% !important; }\n\n.requireLabel {\n  color: #f00; }\n\n:host/deep/ .ui-datatable .ui-datatable-tfoot > tr > td {\n  padding: 0; }\n\n:host/deep/ .bussTreePage .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9sb2FuLWRlcG9zaXQtY2hhbmdlL2xvYW4taGlzdG9yeS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGxvYW4tZGVwb3NpdC1jaGFuZ2VcXGxvYW4taGlzdG9yeVxcbG9hbi1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCOztFQUdRLFVBQVUsRUFBQTs7QUFJbEI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFFUSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsV0FBVyxFQUFBOztBQU5uQjtFQVNRLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx1QkFBdUI7RUFDdkIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLFdBQVc7SUFDWCxtQkFBbUIsRUFBQTs7QUFJM0I7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2xvYW4tZGVwb3NpdC1jaGFuZ2UvbG9hbi1oaXN0b3J5L2xvYW4taGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi51aS1nLTYge1xyXG4gICAgLnVpLWctNCxcclxuICAgIC51aS1nLTYge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYWRkaW5nLTAge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnF1ZXJ5aW5wdXRidG4ge1xyXG4gICAgLnF1ZXJ5aW5wdXRPcmcge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcclxuICAgICAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuY2xpY2tzcGFuIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxNSUgLSAycHgpO1xyXG4gICAgICAgIGhlaWdodDogMjNweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMTJweCk7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5pbnB1dFN0eWxlIHtcclxuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEycHgpO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC5idG5fMiB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZlYzYxZTtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnByb2R1Y3RpdmUtYXJlYS51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVxdWlyZUxhYmVsIHtcclxuICAgIGNvbG9yOiAjZjAwO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGZvb3Q+dHI+dGQge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmJ1c3NUcmVlUGFnZSAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/loan-history/loan-history.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/loan-history/loan-history.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: LoanHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanHistoryComponent", function() { return LoanHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _bean_loanHistory_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/loanHistory.bean */ "./src/app/pages/tzb/custom/loan-deposit-change/loan-history/bean/loanHistory.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoanHistoryComponent = /** @class */ (function () {
    function LoanHistoryComponent(httpService, commfunc, fb) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inValue = 'take'; //机构吗回显为当前登录人的所属机构
        this.first = 0;
        this.ch = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.msgs = [];
        this.orgTreePage = false;
        this.personId = [];
        this.personName = []; //员工
        this.personPage = false;
        this.bussTreePage = false; //业务品种
        this.loanHistoryBean = new _bean_loanHistory_bean__WEBPACK_IMPORTED_MODULE_2__["LoanHistoryBean"]();
        this.loanHistoryTotalBean = new _bean_loanHistory_bean__WEBPACK_IMPORTED_MODULE_2__["LoanHistoryTotalBean"]();
        this.StartDate = null;
        this.EndDate = null;
        this.loanTable = [];
        this.fiveTypeList = []; //五级分类
        this.loanTypeList = []; //贷款类型
        this.transTypeList = []; //交易类型
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.downloadPerson = false;
        this.new_postId = [];
        this.bussListArr = [];
        this.managerNameGlobal = [];
        this.managerIdGlobal = []; //
        this.endDate_new = new Date();
        this.isShowTip = true;
        this.collection = [{}, {}, {}, {}, {}, {}];
        this.flag = 0; //用来判断贴现、承兑、保函、信用证不能同时选中
        this.productArr = ['020001', '030001', '040001', '050001']; //贴现、承兑、保函、信用证
        this.flag2 = 1; //用来在查询之后清空客户经理
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
        if (this.user.extParam) {
            this.extParam = this.user.extParam;
        }
        this.userform = fb.group({
            treeOrgName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            StartDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            EndDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            loanType: [''],
            managerName: [''],
            transAmtStart: [''],
            transAmtEnd: [''],
            fiveLevelClassify: [''],
            transType: [''],
            bussTypeOptions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            custNum: [''],
        });
    }
    LoanHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.extParam.managePermission == 'Y') {
            this.managerName = '';
            this.managerId = '';
        }
        else {
            this.managerName = this.userName;
            this.managerId = this.userId;
        }
        //默认回显当前任职机构的上一级机构,只有支行部门的回显上一级
        if (this.extParam.operatingLevel == 'SUB_BRANCH_DT') {
            this.queryUpOrg();
        }
        else {
            //默认回显任职机构
            var dropDownSelect = this.commfunc.getSessionDataCH('dropDownSelect');
            this.treeOrgName = dropDownSelect.split(",")[0];
            this.treeOrgId = this.extParam.orgId;
            this.parent_value = this.extParam.orgId;
            this.loanDepositValue = this.extParam.orgId;
        }
        this.codeValues();
        this.fiveTypeList = this.code['FiveTypeList']; //五级分类
        this.loanTypeList = this.code['LoanTypeList']; //贷款类型
        this.transTypeList = this.code['TransTypeList']; //交易类型
        //下载判断
        this.new_postId = this.code['downPostId'];
        setTimeout(function () {
            _this.loanTable = [];
        });
        this.loanHistoryBean.pageNum = 1;
        this.loanHistoryBean.pageSize = 10;
        this.StartDate = this.endDate_new;
        this.EndDate = this.endDate_new;
    };
    //码值
    LoanHistoryComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    LoanHistoryComponent.prototype.treeCall = function (param) {
        this.orgTreePage = false;
        this.treeOrgName = param.orgName;
        this.treeOrgId = param.orgId;
        this.parent_value = param.orgId;
        this.operatingLevel = param.operatingLevel;
    };
    LoanHistoryComponent.prototype.perTreeShow = function () {
        this.orgTreePage = true;
    };
    LoanHistoryComponent.prototype.queryFirst = function () {
        this.isShowTip = true;
        //校验的
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        this.flag2 = 1;
        this.loanHistoryBean.pageNum = 1;
        this.loanHistoryBean.pageSize = 10;
        this.first = 0;
        // this.query();
        var param = {
            orgId: this.treeOrgId,
            managerId: this.managerId,
            custNum: this.loanHistoryBean.custNum,
            transDateStart: this.commfunc.transDateN(this.StartDate),
            transDateEnd: this.commfunc.transDateN(this.EndDate),
            transAmtStart: this.loanHistoryBean.transAmtStart,
            transAmtEnd: this.loanHistoryBean.transAmtEnd,
            fiveLevelClassify: this.loanHistoryBean.fiveLevelClassify,
            loanType: this.loanHistoryBean.loanType,
            transType: this.loanHistoryBean.transType,
            operatingLevel: this.operatingLevel,
            businessType: this.bussListArr.join(',')
        };
        this.outValue.emit(param);
    };
    LoanHistoryComponent.prototype.query = function () {
        var _this = this;
        if (this.bussTypeOptions && this.bussTypeOptions != []) {
            this.loanHistoryBean.businessType = this.bussListArr;
        }
        this.loanHistoryBean.orgId = this.treeOrgId;
        this.loanHistoryBean.managerId = this.managerId;
        this.loanHistoryBean.transDateStart = this.commfunc.transDateN(this.StartDate);
        this.loanHistoryBean.transDateEnd = this.commfunc.transDateN(this.EndDate);
        this.httpService.queryLoanHistoryDetails(this.loanHistoryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.isShowTip = false;
                _this.loanTable = data.resultList;
                _this.total = data.total;
                _this.loanHistoryTotalBean.total = data.total;
                _this.loanHistoryTotalBean.totalAmt = data.totalAmt;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    LoanHistoryComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.loanHistoryBean.pageSize = event.rows * 1;
        //当前页
        this.loanHistoryBean.pageNum = event.page + 1;
        this.first = event.page * this.loanHistoryBean.pageSize;
        this.query();
    };
    LoanHistoryComponent.prototype.download = function () {
        //校验的
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (s.extParam.specifyNextOpers) {
            delete s.extParam.specifyNextOpers;
            var commonHeader = s;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        }
        var this_id = this.extParam.postId;
        var flag = true;
        for (var _i = 0, _a = this.new_postId; _i < _a.length; _i++) {
            var item = _a[_i];
            if (this_id == item.value) {
                flag = false;
                break;
            }
        }
        if (!flag) {
            this.toDownload(flag);
        }
        else {
            var lcbl = {
                lctybl: this.extParam.postId
            };
            this.waitSelUserList = this.commfunc.query('XZZXLC', lcbl);
            if (!this.waitSelUserList.erro) {
                this.outVal = this.waitSelUserList.waitSelUserList;
                var chooseThis = this.waitSelUserList.display;
                var Header = JSON.parse(this.commfunc.getSessionData('commonHeader'));
                var a2 = Header.extParam.specifyNextOpers;
                if (chooseThis == true && (a2 == undefined || a2 == '' || a2 == null)) {
                    this.downloadPerson = true;
                }
                else {
                    this.toDownload(flag);
                }
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
            }
        }
    };
    LoanHistoryComponent.prototype.toDownload = function (flag) {
        var _this = this;
        this.loanHistoryBean.businessType = this.bussListArr;
        this.loanHistoryBean.orgId = this.treeOrgId;
        this.loanHistoryBean.managerId = this.managerId;
        this.loanHistoryBean.transDateStart = this.commfunc.transDateN(this.StartDate);
        this.loanHistoryBean.transDateEnd = this.commfunc.transDateN(this.EndDate);
        this.httpService.loanHistoryDetailsExportFile(this.loanHistoryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: "下载成功!" });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    LoanHistoryComponent.prototype.outDisplayCall = function (event) {
        this.downloadPerson = event;
    };
    LoanHistoryComponent.prototype.outValueCall = function (event) {
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.toDownload(true);
    };
    LoanHistoryComponent.prototype.downloadHide = function () {
        this.downloadPerson = false;
    };
    //业务品种
    LoanHistoryComponent.prototype.bussTypeShow = function () {
        this.bussTreePage = true;
        this.flag = 0;
    };
    //业务品种回调
    LoanHistoryComponent.prototype.bussTypeCall = function (event) {
        this.bussTreePage = false;
        this.bussTypeOptions = [];
        this.bussListArr = [];
        console.log(event);
        for (var _i = 0, event_1 = event; _i < event_1.length; _i++) {
            var item = event_1[_i];
            if (this.productArr && this.productArr.length != 0) {
                for (var i = 0; i < this.productArr.length; i++) {
                    if (item.productId == this.productArr[i] || item.productId == '060001' || item.productId == '061001') {
                        if (item.productId == '060001' || item.productId == '061001') { //信用证(进口开证\国内信用证)
                            this.flag += 0.5;
                        }
                        else {
                            this.flag += 1;
                        }
                        if (Math.ceil(this.flag) > 1) {
                            this.bussTypeOptions = []; //清空数据
                            this.bussListArr = [];
                            this.msgs = [];
                            this.msgs = [{ severity: 'error', summary: '提示', detail: '承兑、保函、信用证、贴现请单项查询!' }];
                            return;
                        }
                        break;
                    }
                }
            }
            this.bussTypeOptions.push(item.productName); //展示的名称
            this.bussListArr.push(item.productId); //传值的数据
        }
    };
    //开始日期
    LoanHistoryComponent.prototype.chectStart = function (date) {
        var now = moment__WEBPACK_IMPORTED_MODULE_6__(this.endDate_new).format('Y-MM-DD'); //当前日期
        var now_date = moment__WEBPACK_IMPORTED_MODULE_6__(this.endDate_new).add(-1, 'day').add(-1, 'year').format('Y-MM-DD'); //当前选中的日期(上推一年)
        if (date && date != null) {
            /**
             * 当交易日期距离当前日期小于12个月时，交易日期的结束日期应该为当前日期
             * 当交易日期距离当前日期大于12个月时，则交易日期自动显示
             */
            // if (now_date > oneYearAgo) {
            //     this.EndDate = new Date();
            // } else {
            //     let end = moment(date).add(1, 'year').format('Y-MM-DD');
            //     this.EndDate = new Date(end);
            // }
            /**
             * 当交易日期起始为今天时，默认交易结束为今天
             * 当交易日期超过一年时，交易日期的结束时间为选中的日期到往后的一年以内
             * 当交易日期不满一年时，交易日期的结束时间默认为当期日期
             */
            if (now == this.commfunc.transDateN(date)) {
                this.EndDate = new Date(now);
            }
            else {
                if (this.commfunc.transDateN(date) < now_date) {
                    this.EndDate = new Date(moment__WEBPACK_IMPORTED_MODULE_6__(date).add(1, 'year').format('Y-MM-DD'));
                }
                else {
                    this.EndDate = new Date(this.endDate_new.getTime() - 24 * 60 * 60 * 1000);
                }
            }
        }
    };
    //结束日期
    LoanHistoryComponent.prototype.chectEnd = function (date) {
        if (date && date != null) {
            // let start = moment(date).add(-1, 'year').format('Y-MM-DD');
            // if (this.StartDate && this.StartDate != null) {
            //     if (new Date(start) > this.StartDate) {
            //         console.log(this.EndDate);
            //         this.EndDate = null;
            //         this.msgs = [];
            //         this.msgs.push({ severity: 'error', summary: '提示', detail: '输入时间区间必须在一年之内' });
            //     }
            //     let start = moment(date).add(-1, 'year').format('Y-MM-DD');
            //     // this.EndDate = new Date();
            //     this.StartDate = new Date(start);
            // } else {
            //     if (date.getTime() < this.StartDate.getTime()) {
            //         this.EndDate = new Date(this.StartDate);
            //     } else {
            //         this.EndDate = date;
            //     }
            // }
            var now = moment__WEBPACK_IMPORTED_MODULE_6__(this.endDate_new).format('Y-MM-DD'); //当前日期
            if (now == this.commfunc.transDateN(date) && now != this.commfunc.transDateN(this.StartDate)) {
                this.EndDate = null;
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '当初始时间不是当天时，结束时间不能为当天' });
            }
        }
    };
    LoanHistoryComponent.prototype.perShow = function () {
        if (this.treeOrgId == '' || !this.treeOrgId) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '机构号为空,请选择机构' }];
            return;
        }
        else {
            this.personPage = true;
        }
    };
    LoanHistoryComponent.prototype.perInfor = function (item) {
        // console.log(this.flag2)
        if (this.flag2 == 1) { //查询之后
            this.managerName = '';
            this.managerId = '';
            this.managerNameGlobal = [];
            this.managerIdGlobal = [];
        }
        this.flag2++;
        this.personPage = false;
        this.managerNameGlobal.push(item[0].tellerName);
        this.managerName = this.managerNameGlobal.join(',');
        this.managerIdGlobal.push(item[0].tellerId);
        this.managerId = this.managerIdGlobal.join(',');
    };
    //重置
    LoanHistoryComponent.prototype.reset = function () {
        this.loanHistoryBean = new _bean_loanHistory_bean__WEBPACK_IMPORTED_MODULE_2__["LoanHistoryBean"]();
        this.loanHistoryBean.pageNum = 1;
        this.loanHistoryBean.pageSize = 10;
        this.personName = '';
        this.personId = '';
        this.StartDate = new Date();
        this.EndDate = new Date();
        this.endDate_new = new Date();
        this.bussTypeOptions = [];
        this.bussListArr = [];
        //客户经理、支行行长/业务部门主管，重置时不用清空机构
        if (this.extParam.operatingLevel == 'SUB_BRANCH'
            || this.extParam.operatingLevel == 'SUB_BRANCH_DT'
            || this.extParam.managePermission == 'N') {
            this.treeOrgName = this.orgName;
            this.treeOrgId = this.orgId;
        }
        else {
            this.treeOrgName = '';
            this.treeOrgId = '';
        }
        if (this.extParam.managePermission != 'N') {
            this.managerName = '';
            this.managerId = '';
            this.managerNameGlobal = [];
            this.managerIdGlobal = [];
        }
    };
    //校验交易金额
    LoanHistoryComponent.prototype.checkMoney = function () {
        if (this.loanHistoryBean.transAmtStart && this.loanHistoryBean.transAmtStart != ''
            && this.loanHistoryBean.transAmtEnd && this.loanHistoryBean.transAmtEnd != '') {
            if (parseFloat(this.loanHistoryBean.transAmtStart) > parseFloat(this.loanHistoryBean.transAmtEnd)) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '最小交易金额不能大于最大交易金额!' }];
                return;
            }
        }
    };
    //查询上一级机构
    LoanHistoryComponent.prototype.queryUpOrg = function () {
        var _this = this;
        var param = {
            flag: "0",
            orgId: this.extParam.orgId,
            rowNum: "10",
            startRow: "1",
        };
        this.httpService.queryOrgByCombConditions(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.orgInfoList && data.orgInfoList.length > 0) {
                    _this.treeOrgName = data.orgInfoList[0].superiorManageOrgName;
                    _this.treeOrgId = data.orgInfoList[0].superiorManageOrg;
                    _this.parent_value = data.orgInfoList[0].superiorManageOrg;
                    _this.loanDepositValue = data.orgInfoList[0].superiorManageOrg;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    //权限
    LoanHistoryComponent.prototype.judgeField = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LoanHistoryComponent.prototype, "outValue", void 0);
    LoanHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loan-history',
            template: __webpack_require__(/*! ./loan-history.component.html */ "./src/app/pages/tzb/custom/loan-deposit-change/loan-history/loan-history.component.html"),
            styles: [__webpack_require__(/*! ./loan-history.component.scss */ "./src/app/pages/tzb/custom/loan-deposit-change/loan-history/loan-history.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], LoanHistoryComponent);
    return LoanHistoryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=loan-deposit-change-loan-deposit-change-module.js.map