(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-change-custom-change-module"],{

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-applicant-detail/bean/CustomApplicantDetail.bean.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-applicant-detail/bean/CustomApplicantDetail.bean.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: CustomApplicantDetailBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomApplicantDetailBean", function() { return CustomApplicantDetailBean; });
var CustomApplicantDetailBean = /** @class */ (function () {
    function CustomApplicantDetailBean() {
    }
    return CustomApplicantDetailBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-applicant-detail/custom-applicant-detail.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-applicant-detail/custom-applicant-detail.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-1 titleStyle\">\r\n\t\t\t<label>统计日期：</label>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-3\">\r\n\t\t\t<p-calendar [maxDate]=\"temDateStart\" [(ngModel)]=\"customApplicantDetailBean.statisticsDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n\t\t\t    yearRange=\"1917:2117\" [showIcon]=\"true\" [locale]=\"ch\" dateFormat=\"yy-mm-dd\"></p-calendar>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-1 titleStyle\">\r\n\t\t\t<label>产品类型：</label>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-3\">\r\n\t\t\t<p-dropdown [options]=\"prodType\" [(ngModel)]=\"customApplicantDetailBean.prodType\">\r\n\t\t\t</p-dropdown>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-1 titleStyle\">\r\n\t\t\t<label>处理环节：</label>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-3\">\r\n\t\t\t<input type=\"text\" [(ngModel)]=\"customApplicantDetailBean.processSegment\" pInputText>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" (click)=\"queryClick()\" label=\"查询\"></button>\r\n\t</div>\r\n\t<div class=\"ui-g-12 table base-table\">\r\n\t\t<p-dataTable [value]=\"dataTable\" [emptyMessage]='tabMesg'>\r\n\t\t\t<p-column>\r\n\t\t\t\t<ng-template let-index=\"rowIndex\" pTemplate=\"header\">\r\n\t\t\t\t\t<p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkAll\" binary=\"false\" (click)=\"checkAllClick()\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<p-checkbox [(ngModel)]=\"col.checkBox\" (click)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custNo\" header=\"客户号\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- <a (click)=\"toCustView(col)\" class=\"custNo_a\">{{col.custNo}}</a> -->\r\n\t\t\t\t\t<a href=\"/#/pages/custom-view?custNo={{col.custNo}}\" target=\"_blank\">{{col.custNo}}</a>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n\t\t\t<p-column field=\"applyChannel\" header=\"申请渠道\">\r\n\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t{{col.applyChannel|codeValuePie:applyChannel}}\r\n\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"applyAmt\" header=\"申请金额\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t{{col.applyAmt==null || col.applyAmt=='null' ? 0 : col.applyAmt}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"stayForDays\" header=\"停留天数\"></p-column>\r\n\t\t\t<!-- <p-column field=\"isTimeOut\" header=\"是否超时（限时服务）\"></p-column> -->\r\n\t\t\t<p-column field=\"processSegment\" header=\"处理环节\"></p-column>\r\n\t\t\t<p-column field=\"isCustGroup\" header=\"是否群客户\">\r\n\t\t\t    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t{{col.isCustGroup|codeValuePie:isGroupCust}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custGroupNo\" header=\"客群编号\"></p-column>\r\n\t\t</p-dataTable>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<p-paginator rows={{customApplicantDetailBean.pageSize}} totalRecords={{totalNum}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"btn\">\r\n\t\t\t<!-- <button pButton type=\"button\" label=\"发送短信\" class=\"messageBtn\" (click)='sendMessage()'></button> -->\r\n\t\t\t<!-- <button pButton type=\"button\" label=\"新建联系计划\" class=\"emailBtn\" (click)='newPlan()'></button>\r\n            <button pButton type=\"button\" label=\"新建联系记录\" class=\"newBuiltBtn\" (click)='dealTask()'></button> -->\r\n\t\t\t<button pButton type=\"button\" label=\"加入自选群组\" class=\"addGroupBtn\" (click)='joinGroup()'></button>\r\n\t\t\t<button pButton type=\"button\" label=\"返回\" class=\"addGroupBtn\" (click)='doReturn()'></button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- 模态框 -->\r\n<p-dialog [(visible)]=\"display\" width=\"1600\" height=\"800\">\r\n\t<p-header>\r\n\t\t{{addUpHeader}}\r\n\t</p-header>\r\n\t<app-new-contact-plan *ngIf=\"addDisplay\" [in-value]=\"inValue\" (outValue)=\"newPlanCall($event)\"></app-new-contact-plan>\r\n\t<app-note-model *ngIf=\"nodeDisplay\"></app-note-model>\r\n\t<app-deal-task *ngIf=\"dealDisplay\" (outValue)=\"dealCall($event)\"></app-deal-task>\r\n\r\n</p-dialog>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-applicant-detail/custom-applicant-detail.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-applicant-detail/custom-applicant-detail.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .ui-g-12 .ui-g-4 label {\n  display: inline-block;\n  width: 15%;\n  font-size: 14px;\n  padding-right: 5px;\n  text-align: right; }\n\n.ui-g .btn {\n  text-align: center; }\n\n.ui-g .table {\n  text-align: center; }\n\n.ui-g .custNo_a {\n  cursor: pointer;\n  color: #0094D2; }\n\n.ui-g .lookDetail_a {\n  cursor: pointer;\n  color: #0094D2; }\n\n.ui-g .lookDetail_a:hover {\n  text-decoration: underline;\n  color: #0094D2 !important; }\n\n.titleStyle {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vY3VzdG9tLWNoYW5nZS9jdXN0b20tYXBwbGljYW50LWRldGFpbC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1pbmZvcm1hdGlvblxcY3VzdG9tLWNoYW5nZVxcY3VzdG9tLWFwcGxpY2FudC1kZXRhaWxcXGN1c3RvbS1hcHBsaWNhbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSWdCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFSakM7RUFhUSxrQkFBa0IsRUFBQTs7QUFiMUI7RUFrQlEsa0JBQWtCLEVBQUE7O0FBbEIxQjtFQXNCUSxlQUFjO0VBQ2QsY0FBYyxFQUFBOztBQXZCdEI7RUEwQlEsZUFBYztFQUNkLGNBQWMsRUFBQTs7QUEzQnRCO0VBOEJRLDBCQUEwQjtFQUMxQix5QkFBd0IsRUFBQTs7QUFHaEM7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWluZm9ybWF0aW9uL2N1c3RvbS1jaGFuZ2UvY3VzdG9tLWFwcGxpY2FudC1kZXRhaWwvY3VzdG9tLWFwcGxpY2FudC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktZyB7XHJcbiAgICAudWktZy0xMiB7XHJcbiAgICAgICAgLnVpLWctNCB7XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50YWJsZSB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLy8gb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIH1cclxuICAgIC5jdXN0Tm9fYXtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogIzAwOTREMjtcclxuICAgIH1cclxuICAgIC5sb29rRGV0YWlsX2F7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMwMDk0RDI7XHJcbiAgICB9XHJcbiAgICAubG9va0RldGFpbF9hOmhvdmVye1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIGNvbG9yOiMwMDk0RDIgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4udGl0bGVTdHlsZXtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-applicant-detail/custom-applicant-detail.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-applicant-detail/custom-applicant-detail.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: CustomApplicantDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomApplicantDetail", function() { return CustomApplicantDetail; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_custom_information_custom_change_custom_applicant_detail_bean_CustomApplicantDetail_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/custom-information/custom-change/custom-applicant-detail/bean/CustomApplicantDetail.bean */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-applicant-detail/bean/CustomApplicantDetail.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ProdType } from "app/pages/tzb/custom/constant/custOperation.codeValue";
// import { ProdType } from 'assets/constant/xwzh_order.codeValue'; //删除





/**
 * 正在申请客户
 */
var CustomApplicantDetail = /** @class */ (function () {
    function CustomApplicantDetail(routerInfo, httpService, router, commfunc, fb) {
        this.routerInfo = routerInfo;
        this.httpService = httpService;
        this.router = router;
        this.commfunc = commfunc;
        this.fb = fb;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["tableMessage"]; //表格中无数据时显示的内容
        this.selectedAll = [];
        this.checkAll = false;
        this.checkBox = [];
        // prodType: any[] = ProdType;
        this.prodType = [];
        this.applyChannel = [];
        this.isGroupCust = [];
        this.customApplicantDetailBean = new app_pages_tzb_custom_custom_information_custom_change_custom_applicant_detail_bean_CustomApplicantDetail_bean__WEBPACK_IMPORTED_MODULE_3__["CustomApplicantDetailBean"]();
        this.display = false;
        this.addDisplay = false;
        this.nodeDisplay = false;
        this.dealDisplay = false;
        this.temDateStart = new Date();
        this.chooseData = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["CALENDAR_CN"];
        this.msgs = [];
    }
    CustomApplicantDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.prodType = this.cusCode['ProdType'];
        this.applyChannel = this.cusCode['ApplyChannel'];
        this.isGroupCust = this.cusCode['IsGroupCust'];
        //载入当月数据
        this.routerInfo.params.subscribe(function (data) {
            _this.customApplicantDetailBean.prodType = data.applyingProdType;
        });
        this.customApplicantDetailBean.pageNum = 1;
        this.customApplicantDetailBean.pageSize = 10;
        this.customApplicantDetailBean.statisticsDate = new Date();
        this.queryInit(this.customApplicantDetailBean);
    };
    //码值
    CustomApplicantDetail.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.cusCode = ret; //code是自己声明的变量
    };
    //初始查询
    CustomApplicantDetail.prototype.queryInit = function (data) {
        var _this = this;
        var date = this.transDate(new Date());
        var param = { "pageNum": this.customApplicantDetailBean.pageNum, "pageSize": this.customApplicantDetailBean.pageSize, "prodType": this.customApplicantDetailBean.prodType, "statisticsDate": date, "processSegment": "" };
        var ob1 = this.httpService.custChangeApplyingDetailInfoQry(param);
        ob1.subscribe(function (data) {
            _this.dataTable = data.infoList;
            _this.totalNum = data.totalNum;
        });
    };
    //点击查询
    CustomApplicantDetail.prototype.queryClick = function () {
        var _this = this;
        var Ttime = new Date();
        if (this.customApplicantDetailBean.statisticsDate == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择统计日期' });
            return;
        }
        if (this.commfunc.transDateN(this.customApplicantDetailBean.statisticsDate) > this.commfunc.transDateN(Ttime)) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '统计日期不能大于当前日期' });
            setTimeout(function () {
                _this.customApplicantDetailBean.statisticsDate = null;
            });
            return;
        }
        var date = this.transDate(this.customApplicantDetailBean.statisticsDate);
        var param = { "pageNum": this.customApplicantDetailBean.pageNum, "pageSize": this.customApplicantDetailBean.pageSize, "prodType": this.customApplicantDetailBean.prodType, "processSegment": this.customApplicantDetailBean.processSegment, "statisticsDate": date };
        var ob1 = this.httpService.custChangeApplyingDetailInfoQry(param);
        ob1.subscribe(function (data) {
            _this.dataTable = data.infoList;
            _this.totalNum = data.totalNum;
        });
    };
    //处理日期
    CustomApplicantDetail.prototype.transDate = function (value) {
        var time = new Date(value);
        var year = value.getFullYear();
        var month = value.getMonth() + 1 + '';
        var data = value.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var newtime = year + "-" + month + "-" + data;
        return newtime;
    };
    //全选按钮
    CustomApplicantDetail.prototype.checkAllClick = function () {
        if (this.dataTable) {
            for (var i = 0; i < this.dataTable.length; i++) {
                if (this.checkAll == true) {
                    this.dataTable[i].checkBox = true;
                    this.chooseData.push(this.dataTable[i]);
                }
                else {
                    this.chooseData = [];
                    this.dataTable[i].checkBox = false;
                }
            }
        }
    };
    //单选按钮
    CustomApplicantDetail.prototype.checkBoxClick = function (i, data) {
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
        if (this.chooseData.length == this.dataTable.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    };
    //分页
    CustomApplicantDetail.prototype.paginate = function (event) {
        this.customApplicantDetailBean.pageSize = event.rows * 1;
        this.customApplicantDetailBean.pageNum = event.page + 1;
        this.queryClick();
    };
    //跳转到客户视图
    CustomApplicantDetail.prototype.toCustView = function (data) {
        this.commfunc.setSessionData('custNo', data.custNo);
        this.router.navigate(['pages/custom-view']);
    };
    //新建联系计划
    CustomApplicantDetail.prototype.newPlan = function () {
        this.addUpHeader = '新建客户联系计划';
        this.dealDisplay = false;
        this.nodeDisplay = false;
        this.display = true;
        this.addDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        this.inValue = arr;
    };
    //新建联系计划-关闭模态框
    CustomApplicantDetail.prototype.newPlanCall = function (event) {
        this.addDisplay = false;
        this.display = false;
    };
    //加入群组
    CustomApplicantDetail.prototype.joinGroup = function () {
        var arrData = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        var a = JSON.stringify(arrData);
        var param = {
            info: a
        };
        this.router.navigate(['pages/tzb/custom/custom-marketing/group/join-group', param]);
    };
    //发送短信
    CustomApplicantDetail.prototype.sendMessage = function () {
        this.addUpHeader = '发送短信';
        this.dealDisplay = false;
        this.addDisplay = false;
        this.display = true;
        this.nodeDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        this.nodeInValue = arr;
    };
    //处理
    CustomApplicantDetail.prototype.dealTask = function (data) {
        this.addUpHeader = '客户联系处理';
        this.nodeDisplay = false;
        this.addDisplay = false;
        this.display = true;
        this.dealDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        this.dealInValue = arr;
    };
    //处理回调
    CustomApplicantDetail.prototype.dealCall = function () {
        this.dealDisplay = false;
        this.display = false;
    };
    //返回
    CustomApplicantDetail.prototype.doReturn = function () {
        this.router.navigate(['/pages/tzb/other/workdesk']);
    };
    CustomApplicantDetail = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-applicant-detail',
            template: __webpack_require__(/*! ./custom-applicant-detail.component.html */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-applicant-detail/custom-applicant-detail.component.html"),
            styles: [__webpack_require__(/*! ./custom-applicant-detail.component.scss */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-applicant-detail/custom-applicant-detail.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], CustomApplicantDetail);
    return CustomApplicantDetail;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-change.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-change.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: CustomChangeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomChangeModule", function() { return CustomChangeModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _custom_change_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-change.routing */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-change.routing.ts");
/* harmony import */ var _custom_general_detail_custom_general_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-general-detail/custom-general-detail.component */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-general-detail/custom-general-detail.component.ts");
/* harmony import */ var _custom_applicant_detail_custom_applicant_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-applicant-detail/custom-applicant-detail.component */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-applicant-detail/custom-applicant-detail.component.ts");
/* harmony import */ var _custom_transaction_detail_custom_transaction_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-transaction-detail/custom-transaction-detail.component */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-transaction-detail/custom-transaction-detail.component.ts");
/* harmony import */ var _custom_risk_detail_custom_risk_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-risk-detail/custom-risk-detail.component */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-risk-detail/custom-risk-detail.component.ts");
/* harmony import */ var _custom_follow_detail_custom_follow_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-follow-detail/custom-follow-detail.component */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-follow-detail/custom-follow-detail.component.ts");
/* harmony import */ var _custom_dys_detail_custom_dys_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom-dys-detail/custom-dys-detail.component */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-dys-detail/custom-dys-detail.component.ts");
/* harmony import */ var _custom_rank_detail_custom_rank_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./custom-rank-detail/custom-rank-detail.component */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-rank-detail/custom-rank-detail.component.ts");
/* harmony import */ var app_uisftech_common_directive_monthly_calendar_monthly_calendar_monthly_calendar_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/@uisftech/common/directive/monthly-calendar/monthly-calendar/monthly-calendar.module */ "./src/app/@uisftech/common/directive/monthly-calendar/monthly-calendar/monthly-calendar.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var CustomChangeModule = /** @class */ (function () {
    function CustomChangeModule() {
    }
    CustomChangeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _custom_change_routing__WEBPACK_IMPORTED_MODULE_5__["CustomChangeRouting"],
                app_uisftech_common_directive_monthly_calendar_monthly_calendar_monthly_calendar_module__WEBPACK_IMPORTED_MODULE_13__["OnlyYearMonthSelectModule"]
            ],
            declarations: [
                _custom_general_detail_custom_general_detail_component__WEBPACK_IMPORTED_MODULE_6__["CustomGeneralDetail"],
                _custom_applicant_detail_custom_applicant_detail_component__WEBPACK_IMPORTED_MODULE_7__["CustomApplicantDetail"],
                _custom_transaction_detail_custom_transaction_detail_component__WEBPACK_IMPORTED_MODULE_8__["CustomTransactionDetail"],
                _custom_risk_detail_custom_risk_detail_component__WEBPACK_IMPORTED_MODULE_9__["CustomRiskDetail"],
                _custom_follow_detail_custom_follow_detail_component__WEBPACK_IMPORTED_MODULE_10__["CustomFollowDetail"],
                _custom_dys_detail_custom_dys_detail_component__WEBPACK_IMPORTED_MODULE_11__["CustomDysDetail"],
                _custom_rank_detail_custom_rank_detail_component__WEBPACK_IMPORTED_MODULE_12__["CustomRankDetail"],
            ],
            providers: []
        })
    ], CustomChangeModule);
    return CustomChangeModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-change.routing.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-change.routing.ts ***!
  \********************************************************************************************/
/*! exports provided: CustomChangeRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomChangeRouting", function() { return CustomChangeRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_general_detail_custom_general_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-general-detail/custom-general-detail.component */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-general-detail/custom-general-detail.component.ts");
/* harmony import */ var _custom_applicant_detail_custom_applicant_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-applicant-detail/custom-applicant-detail.component */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-applicant-detail/custom-applicant-detail.component.ts");
/* harmony import */ var _custom_transaction_detail_custom_transaction_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-transaction-detail/custom-transaction-detail.component */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-transaction-detail/custom-transaction-detail.component.ts");
/* harmony import */ var _custom_risk_detail_custom_risk_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-risk-detail/custom-risk-detail.component */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-risk-detail/custom-risk-detail.component.ts");
/* harmony import */ var _custom_follow_detail_custom_follow_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-follow-detail/custom-follow-detail.component */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-follow-detail/custom-follow-detail.component.ts");
/* harmony import */ var _custom_dys_detail_custom_dys_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-dys-detail/custom-dys-detail.component */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-dys-detail/custom-dys-detail.component.ts");
/* harmony import */ var _custom_rank_detail_custom_rank_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-rank-detail/custom-rank-detail.component */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-rank-detail/custom-rank-detail.component.ts");








//页面
var routes = [
    { path: 'custom-general-detail', component: _custom_general_detail_custom_general_detail_component__WEBPACK_IMPORTED_MODULE_1__["CustomGeneralDetail"] },
    { path: 'custom-applicant-detail', component: _custom_applicant_detail_custom_applicant_detail_component__WEBPACK_IMPORTED_MODULE_2__["CustomApplicantDetail"] },
    { path: 'custom-transaction-detail', component: _custom_transaction_detail_custom_transaction_detail_component__WEBPACK_IMPORTED_MODULE_3__["CustomTransactionDetail"] },
    { path: 'custom-risk-detail', component: _custom_risk_detail_custom_risk_detail_component__WEBPACK_IMPORTED_MODULE_4__["CustomRiskDetail"] },
    { path: 'custom-follow-detail', component: _custom_follow_detail_custom_follow_detail_component__WEBPACK_IMPORTED_MODULE_5__["CustomFollowDetail"] },
    { path: 'custom-dys-detail', component: _custom_dys_detail_custom_dys_detail_component__WEBPACK_IMPORTED_MODULE_6__["CustomDysDetail"] },
    { path: 'custom-rank-detail', component: _custom_rank_detail_custom_rank_detail_component__WEBPACK_IMPORTED_MODULE_7__["CustomRankDetail"] },
    { path: '', component: _custom_general_detail_custom_general_detail_component__WEBPACK_IMPORTED_MODULE_1__["CustomGeneralDetail"] },
];
var CustomChangeRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-dys-detail/bean/CustomDysDetail.bean.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-dys-detail/bean/CustomDysDetail.bean.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CustomDysDetailBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDysDetailBean", function() { return CustomDysDetailBean; });
var CustomDysDetailBean = /** @class */ (function () {
    function CustomDysDetailBean() {
    }
    return CustomDysDetailBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-dys-detail/custom-dys-detail.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-dys-detail/custom-dys-detail.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t<label>统计日期：</label>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<p-calendar [maxDate]=\"temDateStart\" [(ngModel)]=\"customDysDetailBean.statisticsDate\" [monthNavigator]=\"true\"\r\n\t\t\t    [yearNavigator]=\"true\" yearRange=\"1917:2117\" [showIcon]=\"true\" [locale]=\"ch\" dateFormat=\"yy-mm-dd\"></p-calendar>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t<label>产品类型：</label>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<p-dropdown [options]=\"prodType\" [(ngModel)]=\"customDysDetailBean.prodType\">\r\n\t\t\t</p-dropdown>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" (click)=\"queryClick()\" label=\"查询\"></button>\r\n\t</div>\r\n\t<div class=\"ui-g-12 table base-table\">\r\n\t\t<p-dataTable [value]=\"dataTable\" [emptyMessage]='tabMesg'>\r\n\t\t\t<p-column>\r\n\t\t\t\t<ng-template let-index=\"rowIndex\" pTemplate=\"header\">\r\n\t\t\t\t\t<p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkAll\" binary=\"false\" (click)=\"checkAllClick()\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<p-checkbox [(ngModel)]=\"col.checkBox\" (click)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"prodType\" header=\"产品类型\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t{{col.prodType|codeValuePie:prodType}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custNo\" header=\"客户号\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- <a (click)=\"toCustView(col)\" class=\"custNo_a\">{{col.custNo}}</a> -->\r\n\t\t\t\t\t<a href=\"/#/pages/custom-view?custNo={{col.custNo}}\" target=\"_blank\">{{col.custNo}}</a>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custName\" header=\"客户姓名\"></p-column>\r\n\t\t\t<p-column field=\"sex\" header=\"性别\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t{{col.sex|codeValuePie:gender}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"age\" header=\"年龄\"></p-column>\r\n\t\t\t<p-column field=\"phone\" header=\"手机号码\"></p-column>\r\n\t\t\t<p-column field=\"overdueAmt\" header=\"逾期本金\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.overdueAmt==null || col.overdueAmt=='null' ? 0 : col.overdueAmt}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.overdueAmt == null || col.overdueAmt == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.overdueAmt != null && col.overdueAmt != 'null' \">{{col.overdueAmt | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"badLoanCustDetail\" header=\"不良余额\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.overdueAmt==null || col.overdueAmt=='null' ? 0 : col.overdueAmt}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.badLoanCustDetail == null || col.badLoanCustDetail == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.badLoanCustDetail != null && col.badLoanCustDetail != 'null' \">{{col.badLoanCustDetail | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"overdueAccrual\" header=\"逾期利息\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.overdueAccrual==null || col.overdueAccrual=='null' ? 0 : col.overdueAccrual}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.overdueAccrual == null || col.overdueAccrual == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.overdueAccrual != null && col.overdueAccrual != 'null' \">{{col.overdueAccrual | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"overdueAccrualPlus\" header=\"逾期罚息\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.overdueAccrualPlus==null || col.overdueAccrualPlus=='null' ? 0 : col.overdueAccrualPlus}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.overdueAccrualPlus == null || col.overdueAccrualPlus == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.overdueAccrualPlus != null && col.overdueAccrualPlus != 'null' \">{{col.overdueAccrualPlus | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"overdueDays\" header=\"逾期天数\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t{{col.overdueDays==null || col.overdueDays=='null' ? 0 : col.overdueDays}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t</p-dataTable>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<p-paginator rows=\"{{this.customDysDetailBean.pageSize}}\" totalRecords=\"{{totalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"btn\">\r\n\t\t\t<!-- <button pButton type=\"button\" label=\"发送短信\" class=\"messageBtn\" (click)='sendMessage()'></button> -->\r\n\t\t\t<!-- <button pButton type=\"button\" label=\"新建联系计划\" class=\"emailBtn\" (click)='newPlan()'></button>\r\n\t\t\t<button pButton type=\"button\" label=\"新建联系记录\" class=\"newBuiltBtn\" (click)='dealTask()'></button> -->\r\n\t\t\t<button pButton type=\"button\" label=\"加入自选群组\" class=\"addGroupBtn\" (click)='joinGroup()'></button>\r\n\t\t\t<button pButton type=\"button\" label=\"返回\" class=\"addGroupBtn\" (click)='doReturn()'></button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- 模态框 -->\r\n<p-dialog [(visible)]=\"display\" width=\"1600\" height=\"800\">\r\n\t<p-header>\r\n\t\t{{addUpHeader}}\r\n\t</p-header>\r\n\t<app-new-contact-plan *ngIf=\"addDisplay\" [in-value]=\"inValue\" (outValue)=\"newPlanCall($event)\"></app-new-contact-plan>\r\n\t<app-note-model *ngIf=\"nodeDisplay\"></app-note-model>\r\n\t<app-deal-task *ngIf=\"dealDisplay\" (outValue)=\"dealCall($event)\"></app-deal-task>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-dys-detail/custom-dys-detail.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-dys-detail/custom-dys-detail.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .ui-g-12 .ui-g-6 label {\n  display: inline-block;\n  width: 10%;\n  font-size: 14px;\n  padding-right: 5px;\n  text-align: right; }\n\n.ui-g .btn {\n  text-align: center; }\n\n.ui-g .table {\n  text-align: center; }\n\n.ui-g .custNo_a {\n  cursor: pointer;\n  color: #0094D2; }\n\n.ui-g .lookDetail_a {\n  cursor: pointer;\n  color: #0094D2; }\n\n.ui-g .lookDetail_a:hover {\n  text-decoration: underline;\n  color: #0094D2 !important; }\n\n.ui-g .text-right {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vY3VzdG9tLWNoYW5nZS9jdXN0b20tZHlzLWRldGFpbC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1pbmZvcm1hdGlvblxcY3VzdG9tLWNoYW5nZVxcY3VzdG9tLWR5cy1kZXRhaWxcXGN1c3RvbS1keXMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSVkscUJBQW9CO0VBQ3BCLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQVI3QjtFQWFRLGtCQUFrQixFQUFBOztBQWIxQjtFQWtCUSxrQkFBa0IsRUFBQTs7QUFsQjFCO0VBc0JRLGVBQWM7RUFDZCxjQUFjLEVBQUE7O0FBdkJ0QjtFQTBCUSxlQUFjO0VBQ2QsY0FBYyxFQUFBOztBQTNCdEI7RUE4QlEsMEJBQTBCO0VBQzFCLHlCQUF3QixFQUFBOztBQS9CaEM7RUFrQ1EsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1pbmZvcm1hdGlvbi9jdXN0b20tY2hhbmdlL2N1c3RvbS1keXMtZGV0YWlsL2N1c3RvbS1keXMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLWd7XHJcbiAgICAudWktZy0xMntcclxuICAgICAgICAudWktZy02e1xyXG4gICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50YWJsZXtcclxuICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAvLyBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvLyBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgfVxyXG4gICAgLmN1c3ROb19he1xyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMDA5NEQyO1xyXG4gICAgfVxyXG4gICAgLmxvb2tEZXRhaWxfYXtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogIzAwOTREMjtcclxuICAgIH1cclxuICAgIC5sb29rRGV0YWlsX2E6aG92ZXJ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgY29sb3I6IzAwOTREMiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRleHQtcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-dys-detail/custom-dys-detail.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-dys-detail/custom-dys-detail.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: CustomDysDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDysDetail", function() { return CustomDysDetail; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_custom_information_custom_change_custom_dys_detail_bean_CustomDysDetail_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/custom-information/custom-change/custom-dys-detail/bean/CustomDysDetail.bean */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-dys-detail/bean/CustomDysDetail.bean.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { ProdTypeChange, Gender } from "app/pages/tzb/custom/constant/custOperation.codeValue";








var CustomDysDetail = /** @class */ (function () {
    function CustomDysDetail(routerInfo, httpService, router, commfunc, fb) {
        var _this = this;
        this.routerInfo = routerInfo;
        this.httpService = httpService;
        this.router = router;
        this.commfunc = commfunc;
        this.fb = fb;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["tableMessage"]; //表格中无数据时显示的内容
        this.selectedAll = [];
        this.checkAll = false;
        this.checkBox = [];
        // prodType: any[] = ProdTypeChange;//待跟进客户码值表
        // gender: any[] = Gender;//性别
        this.prodType = []; //待跟进客户码值表
        this.gender = []; //性别
        this.isYuqi = false; //是否逾期客户
        this.display = false;
        this.addDisplay = false;
        this.nodeDisplay = false;
        this.dealDisplay = false;
        this.chooseData = [];
        this.temDateStart = new Date();
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["CALENDAR_CN"];
        this.customDysDetailBean = new app_pages_tzb_custom_custom_information_custom_change_custom_dys_detail_bean_CustomDysDetail_bean__WEBPACK_IMPORTED_MODULE_1__["CustomDysDetailBean"](); //逾期待跟进客户明细bean
        this.msgs = [];
        this.genderCode = [];
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.prodType = this.code['DysProdType'];
        // this.gender = this.code['Gender'];
        this.genderCode = this.code['Gender'];
        this.genderCode.forEach(function (element) {
            if (element.value != '') {
                _this.gender.push(element);
            }
        });
    }
    CustomDysDetail.prototype.ngOnInit = function () {
        var _this = this;
        //载入当月数据
        this.routerInfo.params.subscribe(function (data) {
            _this.customDysDetailBean.prodType = data.prodType;
        });
        this.customDysDetailBean.pageNum = 1;
        this.customDysDetailBean.pageSize = 10;
        this.customDysDetailBean.statisticsDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
        this.queryInit(this.customDysDetailBean);
    };
    //码值
    CustomDysDetail.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //初始查询
    CustomDysDetail.prototype.queryInit = function (data) {
        var _this = this;
        var date = this.transDate(new Date(new Date().getTime() - 24 * 60 * 60 * 1000));
        var param = { "pageNum": data.pageNum, "pageSize": data.pageSize, "statisticsDate": date, "prodType": data.prodType };
        var ob1 = this.httpService.custBadLoanDetailInfoQry(param);
        ob1.subscribe(function (data) {
            _this.dataTable = data.infoList;
            _this.totalNum = data.totalNum;
        });
    };
    //点击查询
    CustomDysDetail.prototype.queryClick = function () {
        var _this = this;
        this.dataTable = [];
        this.chooseData = [];
        this.checkAll = false;
        var Ttime = new Date();
        if (this.customDysDetailBean.statisticsDate == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择统计日期' });
            return;
        }
        if (this.commfunc.transDateN(this.customDysDetailBean.statisticsDate) > this.commfunc.transDateN(Ttime)) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '统计日期不能大于当前日期' });
            setTimeout(function () {
                _this.customDysDetailBean.statisticsDate = null;
            });
            return;
        }
        var date = this.transDate(this.customDysDetailBean.statisticsDate);
        var param = { "pageNum": this.customDysDetailBean.pageNum, "pageSize": this.customDysDetailBean.pageSize, "statisticsDate": date, "prodType": this.customDysDetailBean.prodType };
        var ob1 = this.httpService.custBadLoanDetailInfoQry(param);
        ob1.subscribe(function (data) {
            _this.dataTable = data.infoList;
            _this.totalNum = data.totalNum;
        });
    };
    //全选按钮
    CustomDysDetail.prototype.checkAllClick = function () {
        if (this.dataTable) {
            for (var i = 0; i < this.dataTable.length; i++) {
                if (this.checkAll == true) {
                    this.dataTable[i].checkBox = true;
                    this.chooseData.push(this.dataTable[i]);
                }
                else {
                    this.chooseData = [];
                    this.dataTable[i].checkBox = false;
                }
            }
        }
    };
    //单选按钮
    CustomDysDetail.prototype.checkBoxClick = function (i, data) {
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
        if (this.chooseData.length == this.dataTable.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    };
    //处理日期
    CustomDysDetail.prototype.transDate = function (value) {
        var time = new Date(value);
        var year = value.getFullYear();
        var month = value.getMonth() + 1 + '';
        var data = value.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var newtime = year + "-" + month + "-" + data;
        return newtime;
    };
    //分页
    CustomDysDetail.prototype.paginate = function (event) {
        this.customDysDetailBean.pageSize = event.rows * 1;
        this.customDysDetailBean.pageNum = event.page + 1;
        this.queryClick();
    };
    //跳转到客户视图
    CustomDysDetail.prototype.toCustView = function (data) {
        this.commfunc.setSessionData('custNo', data.custNo);
        this.router.navigate(['pages/custom-view']);
    };
    //新建联系计划
    CustomDysDetail.prototype.newPlan = function () {
        this.addUpHeader = '新建客户联系计划';
        this.dealDisplay = false;
        this.nodeDisplay = false;
        this.display = true;
        this.addDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        this.inValue = arr;
    };
    //新建联系计划-关闭模态框
    CustomDysDetail.prototype.newPlanCall = function (event) {
        this.addDisplay = false;
        this.display = false;
    };
    //加入群组
    CustomDysDetail.prototype.joinGroup = function () {
        var arrData = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        var a = JSON.stringify(arrData);
        var param = {
            info: a
        };
        this.router.navigate(['pages/tzb/custom/custom-marketing/group/join-group', param]);
    };
    //发送短信
    CustomDysDetail.prototype.sendMessage = function () {
        this.addUpHeader = '发送短信';
        this.dealDisplay = false;
        this.addDisplay = false;
        this.display = true;
        this.nodeDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        this.nodeInValue = arr;
    };
    //处理
    CustomDysDetail.prototype.dealTask = function (data) {
        this.addUpHeader = '客户联系处理';
        this.nodeDisplay = false;
        this.addDisplay = false;
        this.display = true;
        this.dealDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        this.dealInValue = arr;
    };
    //处理回调
    CustomDysDetail.prototype.dealCall = function () {
        this.dealDisplay = false;
        this.display = false;
    };
    //返回
    CustomDysDetail.prototype.doReturn = function () {
        this.router.navigate(['/pages/tzb/custom/custom-general']);
    };
    CustomDysDetail = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-dys-detail',
            template: __webpack_require__(/*! ./custom-dys-detail.component.html */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-dys-detail/custom-dys-detail.component.html"),
            styles: [__webpack_require__(/*! ./custom-dys-detail.component.scss */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-dys-detail/custom-dys-detail.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], CustomDysDetail);
    return CustomDysDetail;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-follow-detail/bean/CustomFollowDetail.bean.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-follow-detail/bean/CustomFollowDetail.bean.ts ***!
  \************************************************************************************************************************/
/*! exports provided: CustomFollowDetailBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFollowDetailBean", function() { return CustomFollowDetailBean; });
var CustomFollowDetailBean = /** @class */ (function () {
    function CustomFollowDetailBean() {
    }
    return CustomFollowDetailBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-follow-detail/custom-follow-detail.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-follow-detail/custom-follow-detail.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label>统计日期：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<p-calendar [maxDate]=\"temDateStart\" [(ngModel)]=\"customFollowDetailBean.statisticsDate\"\r\n\t\t\t\treadonlyInput='true'  [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" [showIcon]=\"true\" [locale]=\"ch\"></p-calendar> <span style=\"margin-left:35px\">{{date3|date}}</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t<label>待跟进类型：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<p-dropdown [options]=\"custType\" [(ngModel)]=\"customFollowDetailBean.custType\"></p-dropdown>\r\n\t\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" (click)=\"queryClick()\" label=\"查询\"></button>\r\n\t</div>\r\n\t<div class=\"ui-g-12 table base-table\">\r\n\t\t<p-dataTable [value]=\"dataTable\" [emptyMessage]='tabMesg'>\r\n\t\t\t<p-column>\r\n\t\t\t\t<ng-template let-index=\"rowIndex\" pTemplate=\"header\">\r\n\t\t\t\t\t<p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkAll\" binary=\"false\" (click)=\"checkAllClick()\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<p-checkbox [(ngModel)]=\"col.checkBox\" (click)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custType\" header=\"待跟进类型\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t{{col.custType|codeValuePie:custType}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custNo\" header=\"客户号\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- <a (click)=\"toCustView(col)\" class=\"custNo_a\">{{col.custNo}}</a> -->\r\n\t\t\t\t\t<a href=\"/#/pages/custom-view?custNo={{col.custNo}}\" target=\"_blank\">{{col.custNo}}</a>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n\t\t\t<p-column field=\"gender\" header=\"性别\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t{{col.gender|codeValuePie:gender}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"age\" header=\"年龄\"></p-column>\r\n\t\t\t<p-column field=\"phone\" header=\"手机号码\"></p-column>\r\n\t\t\t<p-column field=\"deptBal\" header=\"存款余额\">\r\n\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t\t{{col.deptBal==null || col.deptBal=='null' ? 0 : col.deptBal}}\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"finBal\" header=\"理财余额\">\r\n\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t\t{{col.finBal==null || col.finBal=='null' ? 0 : col.finBal}}\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"loanBal\" header=\"贷款余额\">\r\n\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t\t{{col.loanBal==null || col.loanBal=='null' ? 0 : col.loanBal}}\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"ccOverAmt\" header=\"信用卡透支金额\">\r\n\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t\t{{col.ccOverAmt==null || col.ccOverAmt=='null' ? 0 : col.ccOverAmt}}\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"bussinessOperator\" header=\"经办人\"></p-column>\r\n\t\t\t<p-column field=\"holdProdNum\" header=\"持有产品件数\">\r\n\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t\t{{col.holdProdNum==null || col.holdProdNum=='null' ? 0 : col.holdProdNum}}\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column header=\"持有产品详情\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<a (click)=\"toCustProduct(col)\" class=\"lookDetail_a\">查看详情</a>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t</p-dataTable>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t\t<p-paginator rows=\"{{customFollowDetailBean.pageSize}}\" totalRecords=\"{{totalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"btn\">\r\n\t\t\t<!-- <button pButton type=\"button\" label=\"发送短信\" class=\"messageBtn\" (click)='sendMessage()'></button> -->\r\n\t\t\t<!-- <button pButton type=\"button\" label=\"新建联系计划\" class=\"emailBtn\" (click)='newPlan()'></button>\r\n\t\t\t<button pButton type=\"button\" label=\"新建联系记录\" class=\"newBuiltBtn\" (click)='dealTask()'></button> -->\r\n\t\t\t<button pButton type=\"button\" label=\"加入自选群组\" class=\"addGroupBtn\" (click)='joinGroup()'></button>\r\n\t\t\t<button pButton type=\"button\" label=\"返回\" class=\"addGroupBtn\" (click)='doReturn()'></button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- 模态框 -->\r\n<p-dialog [(visible)]=\"display\" width=\"1600\" height=\"800\">\r\n\t<p-header>\r\n\t\t{{addUpHeader}}\r\n\t</p-header>\r\n\t<app-new-contact-plan *ngIf=\"addDisplay\" [in-value]=\"inValue\" (outValue)=\"newPlanCall($event)\"></app-new-contact-plan>\r\n\t<app-note-model *ngIf=\"nodeDisplay\"></app-note-model>\r\n\t<app-deal-task *ngIf=\"dealDisplay\" (outValue)=\"dealCall($event)\"></app-deal-task>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-follow-detail/custom-follow-detail.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-follow-detail/custom-follow-detail.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .ui-g-12 .ui-g-6 label {\n  display: inline-block;\n  width: 15%;\n  font-size: 14px;\n  padding-right: 5px;\n  text-align: right; }\n\n.ui-g .btn {\n  text-align: center; }\n\n.ui-g .table {\n  text-align: center; }\n\n.ui-g .custNo_a {\n  cursor: pointer;\n  color: #0094D2; }\n\n.ui-g .lookDetail_a {\n  cursor: pointer;\n  color: #0094D2; }\n\n.ui-g .lookDetail_a:hover {\n  text-decoration: underline;\n  color: #0094D2 !important; }\n\n.ui-g .text-right {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vY3VzdG9tLWNoYW5nZS9jdXN0b20tZm9sbG93LWRldGFpbC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1pbmZvcm1hdGlvblxcY3VzdG9tLWNoYW5nZVxcY3VzdG9tLWZvbGxvdy1kZXRhaWxcXGN1c3RvbS1mb2xsb3ctZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSVkscUJBQW9CO0VBQ3BCLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQVI3QjtFQWFRLGtCQUFrQixFQUFBOztBQWIxQjtFQWtCUSxrQkFBa0IsRUFBQTs7QUFsQjFCO0VBc0JRLGVBQWM7RUFDZCxjQUFjLEVBQUE7O0FBdkJ0QjtFQTBCUSxlQUFjO0VBQ2QsY0FBYyxFQUFBOztBQTNCdEI7RUE4QlEsMEJBQTBCO0VBQzFCLHlCQUF3QixFQUFBOztBQS9CaEM7RUFrQ1EsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1pbmZvcm1hdGlvbi9jdXN0b20tY2hhbmdlL2N1c3RvbS1mb2xsb3ctZGV0YWlsL2N1c3RvbS1mb2xsb3ctZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLWd7XHJcbiAgICAudWktZy0xMntcclxuICAgICAgICAudWktZy02e1xyXG4gICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50YWJsZXtcclxuICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAvLyBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvLyBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgfVxyXG4gICAgLmN1c3ROb19he1xyXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMDA5NEQyO1xyXG4gICAgfVxyXG4gICAgLmxvb2tEZXRhaWxfYXtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogIzAwOTREMjtcclxuICAgIH1cclxuICAgIC5sb29rRGV0YWlsX2E6aG92ZXJ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgY29sb3I6IzAwOTREMiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRleHQtcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-follow-detail/custom-follow-detail.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-follow-detail/custom-follow-detail.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: CustomFollowDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFollowDetail", function() { return CustomFollowDetail; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_custom_information_custom_change_custom_follow_detail_bean_CustomFollowDetail_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/custom-information/custom-change/custom-follow-detail/bean/CustomFollowDetail.bean */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-follow-detail/bean/CustomFollowDetail.bean.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { CustType, Gender } from "app/pages/tzb/custom/constant/custOperation.codeValue";







/**
 * 待跟进客户
 */
var CustomFollowDetail = /** @class */ (function () {
    function CustomFollowDetail(routerInfo, httpService, router, commfunc, fb) {
        this.routerInfo = routerInfo;
        this.httpService = httpService;
        this.router = router;
        this.commfunc = commfunc;
        this.fb = fb;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["tableMessage"]; //表格中无数据时显示的内容
        this.selectedAll = [];
        this.checkAll = false;
        this.checkBox = [];
        // custType: any[] = CustType;
        // gender: any[] = Gender;//性别
        this.custType = [];
        this.gender = []; //性别
        this.isYuqi = false;
        this.customFollowDetailBean = new app_pages_tzb_custom_custom_information_custom_change_custom_follow_detail_bean_CustomFollowDetail_bean__WEBPACK_IMPORTED_MODULE_1__["CustomFollowDetailBean"]();
        this.display = false;
        this.addDisplay = false;
        this.nodeDisplay = false;
        this.dealDisplay = false;
        this.chooseData = [];
        this.temDateStart = new Date();
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["CALENDAR_CN"];
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.custType = this.code['CustType'];
        this.gender = this.code['Gender'];
    }
    CustomFollowDetail.prototype.ngOnInit = function () {
        var _this = this;
        //载入当月数据
        this.routerInfo.params.subscribe(function (data) {
            _this.customFollowDetailBean.custType = data.applyingProdType;
        });
        this.customFollowDetailBean.pageNum = 1;
        this.customFollowDetailBean.pageSize = 10;
        this.customFollowDetailBean.statisticsDate = new Date();
        this.queryInit(this.customFollowDetailBean);
    };
    //码值
    CustomFollowDetail.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //初始查询
    CustomFollowDetail.prototype.queryInit = function (data) {
        var _this = this;
        var date = this.transDate(new Date());
        var param = { "pageNum": data.pageNum, "pageSize": data.pageSize, "statisticsDate": date, "custType": data.custType };
        var ob1 = this.httpService.custTOFollowUpDetailQry(param);
        ob1.subscribe(function (data) {
            _this.dataTable = data.infoList;
            _this.totalNum = data.totalNum;
        });
    };
    //点击查询
    CustomFollowDetail.prototype.queryClick = function () {
        var _this = this;
        var date = this.transDate(this.customFollowDetailBean.statisticsDate);
        var param = { "pageNum": this.customFollowDetailBean.pageNum, "pageSize": this.customFollowDetailBean.pageSize, "statisticsDate": date, "custType": this.customFollowDetailBean.custType };
        var ob1 = this.httpService.custTOFollowUpDetailQry(param);
        ob1.subscribe(function (data) {
            _this.dataTable = data.infoList;
            _this.totalNum = data.totalNum;
        });
    };
    //全选按钮
    CustomFollowDetail.prototype.checkAllClick = function () {
        if (this.dataTable) {
            for (var i = 0; i < this.dataTable.length; i++) {
                if (this.checkAll == true) {
                    this.dataTable[i].checkBox = true;
                    this.chooseData.push(this.dataTable[i]);
                }
                else {
                    this.chooseData = [];
                    this.dataTable[i].checkBox = false;
                }
            }
        }
    };
    //单选按钮
    CustomFollowDetail.prototype.checkBoxClick = function (i, data) {
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
        if (this.chooseData.length == this.dataTable.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    };
    //处理日期
    CustomFollowDetail.prototype.transDate = function (value) {
        var time = new Date(value);
        var year = value.getFullYear();
        var month = value.getMonth() + 1 + '';
        var data = value.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var newtime = year + "-" + month + "-" + data;
        return newtime;
    };
    //分页
    CustomFollowDetail.prototype.paginate = function (event) {
        this.customFollowDetailBean.pageSize = event.rows * 1;
        this.customFollowDetailBean.pageNum = event.page + 1;
        this.queryClick();
    };
    //跳转到客户视图
    CustomFollowDetail.prototype.toCustView = function (data) {
        this.commfunc.setSessionData('custNo', data.custNo);
        this.router.navigate(['pages/custom-view']);
    };
    //新建联系计划
    CustomFollowDetail.prototype.newPlan = function () {
        this.addUpHeader = '新建客户联系计划';
        this.dealDisplay = false;
        this.nodeDisplay = false;
        this.display = true;
        this.addDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        this.inValue = arr;
    };
    //新建联系计划-关闭模态框
    CustomFollowDetail.prototype.newPlanCall = function (event) {
        this.addDisplay = false;
        this.display = false;
    };
    //加入群组
    CustomFollowDetail.prototype.joinGroup = function () {
        var arrData = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        var a = JSON.stringify(arrData);
        var param = {
            info: a
        };
        this.router.navigate(['pages/tzb/custom/custom-marketing/group/join-group', param]);
    };
    //发送短信
    CustomFollowDetail.prototype.sendMessage = function () {
        this.addUpHeader = '发送短信';
        this.dealDisplay = false;
        this.addDisplay = false;
        this.display = true;
        this.nodeDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        this.nodeInValue = arr;
    };
    //处理
    CustomFollowDetail.prototype.dealTask = function (data) {
        this.addUpHeader = '客户联系处理';
        this.nodeDisplay = false;
        this.addDisplay = false;
        this.display = true;
        this.dealDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        this.dealInValue = arr;
    };
    //处理回调
    CustomFollowDetail.prototype.dealCall = function () {
        this.dealDisplay = false;
        this.display = false;
    };
    //跳转到个人持有产品
    CustomFollowDetail.prototype.toCustProduct = function (data) {
        this.commfunc.setSessionData('custNo', data.custNo);
        this.router.navigate(['pages/custom-view/view-product-information/own-our-product']);
    };
    //返回
    CustomFollowDetail.prototype.doReturn = function () {
        this.router.navigate(['/pages/tzb/other/workdesk']);
    };
    CustomFollowDetail = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-follow-detail',
            template: __webpack_require__(/*! ./custom-follow-detail.component.html */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-follow-detail/custom-follow-detail.component.html"),
            styles: [__webpack_require__(/*! ./custom-follow-detail.component.scss */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-follow-detail/custom-follow-detail.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], CustomFollowDetail);
    return CustomFollowDetail;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-general-detail/bean/CustomGeneralDetail.bean.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-general-detail/bean/CustomGeneralDetail.bean.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: CustomGeneralDetailBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomGeneralDetailBean", function() { return CustomGeneralDetailBean; });
var CustomGeneralDetailBean = /** @class */ (function () {
    function CustomGeneralDetailBean() {
    }
    return CustomGeneralDetailBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-general-detail/custom-general-detail.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-general-detail/custom-general-detail.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t<label>统计日期：</label>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<div class=\"form-group condition-wrapper\">\r\n\t\t\t\t<monthly-calendar class=\"form-control\" [placeholder]=\"placeholders\" (result)=\"chooseMonth = $event\" [range]=\"{before:50,after:50}\">\r\n\t\t\t\t</monthly-calendar>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t<label>业务类型：</label>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<p-dropdown [options]=\"bussinessType\" class=\"custom-general-p\" [(ngModel)]=\"customGeneralDetailBean.bussinessType\">\r\n\t\t\t</p-dropdown>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" (click)=\"querySecle(chooseMonth)\" label=\"查询\"></button>\r\n\t</div>\r\n\t<div class=\"ui-g-12 table base-table\">\r\n\t\t<p-dataTable [value]=\"dataTable\" [emptyMessage]='tabMesg'>\r\n\t\t\t<p-column>\r\n\t\t\t\t<ng-template let-index=\"rowIndex\" pTemplate=\"header\">\r\n\t\t\t\t\t<p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkAll\" binary=\"false\" (click)=\"checkAllClick()\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<p-checkbox [(ngModel)]=\"col.checkBox\" (click)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custNo\" header=\"客户号\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- <a (click)=\"toCustView(col)\" class=\"custNo_a\">{{col.custNo}}</a> -->\r\n\t\t\t\t\t<a href=\"/#/pages/custom-view?custNo={{col.custNo}}\" target=\"_blank\">{{col.custNo}}</a>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n\t\t\t<p-column field=\"phone\" header=\"手机号码\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<span class=\"name\">{{col.phone}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"deptBal\" header=\"存款余额\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.deptBal==null || col.deptBal=='null' ? 0 : col.deptBal}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.deptBal == null || col.deptBal == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.deptBal != null && col.deptBal != 'null' \">{{col.deptBal | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"finBal\" header=\"理财余额\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.finBal==null || col.finBal=='null' ? 0 : col.finBal}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.finBal == null || col.finBal == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.finBal != null && col.finBal != 'null' \">{{col.finBal | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"loanBal\" header=\"贷款余额\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.loanBal==null || col.loanBal=='null' ? 0 : col.loanBal}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.loanBal == null || col.loanBal == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.loanBal != null && col.loanBal != 'null' \">{{col.loanBal | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"ccOverAmt\" header=\"信用卡透支金额\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.ccOverAmt==null || col.ccOverAmt=='null' ? 0 : col.ccOverAmt}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.ccOverAmt == null || col.ccOverAmt == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.ccOverAmt != null && col.ccOverAmt != 'null' \">{{col.ccOverAmt | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"ftpBeforeDiscount\" header=\"FTP折后收入\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.ftpBeforeDiscount==null || col.ftpBeforeDiscount=='null' ? 0 : col.ftpBeforeDiscount}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.ftpBeforeDiscount == null || col.ftpBeforeDiscount == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.ftpBeforeDiscount != null && col.ftpBeforeDiscount != 'null' \">{{col.ftpBeforeDiscount | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"holdProdNum\" header=\"持有产品数\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t{{col.holdProdNum==null || col.holdProdNum=='null' ? 0 : col.holdProdNum}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column header=\"持有产品详情\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<a (click)=\"toCustProduct(col)\" class=\"lookDetail_a\">查看详情</a>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t</p-dataTable>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<p-paginator rows=\"{{customGeneralDetailBean.pageSize}}\" [first]=\"first\" totalRecords=\"{{totalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<!-- <button pButton type=\"button\" label=\"发送短信\" class=\"messageBtn\" (click)='sendMessage()'></button> -->\r\n\t\t<!-- <button pButton type=\"button\" label=\"新建联系计划\" class=\"emailBtn\" (click)='newPlan()'></button>\r\n\t\t<button pButton type=\"button\" label=\"新建联系记录\" class=\"newBuiltBtn\" (click)='dealTask()'></button> -->\r\n\t\t<button pButton type=\"button\" label=\"加入自选群组\" class=\"addGroupBtn\" (click)='joinGroup()'></button>\r\n\t\t<button pButton type=\"button\" label=\"返回\" class=\"addGroupBtn\" (click)='doReturn()'></button>\r\n\t</div>\r\n</div>\r\n<!-- 模态框 -->\r\n<p-dialog [(visible)]=\"display\" [positionTop]=10>\r\n\t<p-header>\r\n\t\t{{addUpHeader}}\r\n\t</p-header>\r\n\t<app-new-contact-plan *ngIf=\"addDisplay\" [in-value]=\"inValue\" (outValue)=\"newPlanCall($event)\"></app-new-contact-plan>\r\n\t<app-note-model *ngIf=\"nodeDisplay\"></app-note-model>\r\n\t<app-deal-task *ngIf=\"dealDisplay\" (outValue)=\"dealCall($event)\"></app-deal-task>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-general-detail/custom-general-detail.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-general-detail/custom-general-detail.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .ui-g-12 .ui-g-6 label {\n  display: inline-block;\n  width: 10%;\n  font-size: 14px;\n  padding-right: 5px;\n  text-align: right; }\n\n.ui-g .btn {\n  text-align: center; }\n\n.ui-g .table {\n  text-align: center; }\n\n.ui-g .custNo_a {\n  cursor: pointer;\n  color: #0094D2; }\n\n.ui-g .lookDetail_a {\n  cursor: pointer;\n  color: #0094D2; }\n\n.ui-g .lookDetail_a:hover {\n  text-decoration: underline;\n  color: #0094D2 !important; }\n\n.ui-g .name {\n  word-break: break-all; }\n\n.ui-g .text-right {\n  text-align: right;\n  line-height: 28px; }\n\n:host /deep/ .custom-general-p .ui-dropdown {\n  width: 50% !important;\n  min-width: 284px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vY3VzdG9tLWNoYW5nZS9jdXN0b20tZ2VuZXJhbC1kZXRhaWwvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20taW5mb3JtYXRpb25cXGN1c3RvbS1jaGFuZ2VcXGN1c3RvbS1nZW5lcmFsLWRldGFpbFxcY3VzdG9tLWdlbmVyYWwtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSWdCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFSakM7RUFhUSxrQkFBa0IsRUFBQTs7QUFiMUI7RUFrQlEsa0JBQWtCLEVBQUE7O0FBbEIxQjtFQXNCUSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQXZCdEI7RUEwQlEsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUEzQnRCO0VBOEJRLDBCQUEwQjtFQUMxQix5QkFBeUIsRUFBQTs7QUEvQmpDO0VBa0NRLHFCQUFxQixFQUFBOztBQWxDN0I7RUFxQ1EsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLHFCQUFxQjtFQUNyQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWluZm9ybWF0aW9uL2N1c3RvbS1jaGFuZ2UvY3VzdG9tLWdlbmVyYWwtZGV0YWlsL2N1c3RvbS1nZW5lcmFsLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1nIHtcclxuICAgIC51aS1nLTEyIHtcclxuICAgICAgICAudWktZy02IHtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlIHtcclxuICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAvLyBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvLyBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgfVxyXG4gICAgLmN1c3ROb19hIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMwMDk0RDI7XHJcbiAgICB9XHJcbiAgICAubG9va0RldGFpbF9hIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMwMDk0RDI7XHJcbiAgICB9XHJcbiAgICAubG9va0RldGFpbF9hOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICBjb2xvcjogIzAwOTREMiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm5hbWUge1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgIH1cclxuICAgIC50ZXh0LXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbjpob3N0IC9kZWVwLyAuY3VzdG9tLWdlbmVyYWwtcCAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAyODRweCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-general-detail/custom-general-detail.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-general-detail/custom-general-detail.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: CustomGeneralDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomGeneralDetail", function() { return CustomGeneralDetail; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_custom_information_custom_change_custom_general_detail_bean_CustomGeneralDetail_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/custom-information/custom-change/custom-general-detail/bean/CustomGeneralDetail.bean */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-general-detail/bean/CustomGeneralDetail.bean.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { BussinessTypeChange } from "app/pages/tzb/custom/constant/custOperation.codeValue";




/**
 * 客户变动概况
 */
var CustomGeneralDetail = /** @class */ (function () {
    function CustomGeneralDetail(routerInfo, httpService, router, commfunc, fb) {
        this.routerInfo = routerInfo;
        this.httpService = httpService;
        this.router = router;
        this.commfunc = commfunc;
        this.fb = fb;
        this.customGeneralDetailBean = new app_pages_tzb_custom_custom_information_custom_change_custom_general_detail_bean_CustomGeneralDetail_bean__WEBPACK_IMPORTED_MODULE_2__["CustomGeneralDetailBean"]();
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["tableMessage"]; //表格中无数据时显示的内容
        // bussinessType: any[] = BussinessTypeChange;
        this.bussinessType = [];
        this.selectedAll = [];
        this.checkAll = false;
        this.checkBox = [];
        this.display = false;
        this.addDisplay = false;
        this.nodeDisplay = false;
        this.dealDisplay = false;
        this.chooseData = [];
        this.temDateStart = new Date();
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["CALENDAR_CN"];
        this.msgs = [];
        this.chooseMonth = '';
        this.first = 0;
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.bussinessType = this.code['BussinessTypeChange'];
    }
    CustomGeneralDetail.prototype.ngOnInit = function () {
        var _this = this;
        var date = new Date();
        this.year = date.getFullYear();
        this.month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : String(date.getMonth() + 1);
        //载入当月数据
        this.routerInfo.params.subscribe(function (data) {
            _this.customGeneralDetailBean.bussinessType = data.bussinessType;
            _this.custRange = data.custRange;
        });
        this.customGeneralDetailBean.statisticsDate = this.transDate(new Date());
        this.customGeneralDetailBean.pageSize = 10;
        this.customGeneralDetailBean.pageNum = 1;
        if (this.custRange == '1') { //查当月
            this.placeholders = this.year + '-' + this.month;
            this.customGeneralDetailBean.custRange = 'month';
            this.queryInit();
        }
        if (this.custRange == '2') { //查总的
            this.placeholders = this.year + '-' + this.month;
            this.customGeneralDetailBean.custRange = 'day';
            this.queryInitTotal();
        }
    };
    //码值
    CustomGeneralDetail.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //查询按钮
    CustomGeneralDetail.prototype.querySecle = function (dataParam) {
        this.customGeneralDetailBean.pageSize = 10;
        this.customGeneralDetailBean.pageNum = 1;
        this.first = 0;
        this.queryClick(dataParam);
    };
    //当月-初始
    CustomGeneralDetail.prototype.queryInit = function () {
        var _this = this;
        this.httpService.custChangeDetailInfoQry(this.customGeneralDetailBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataTable = data.infoList;
                _this.totalNum = data.totalNum;
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
    //总的-初始
    CustomGeneralDetail.prototype.queryInitTotal = function () {
        var _this = this;
        this.httpService.custChangeDetailInfoQry(this.customGeneralDetailBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataTable = data.infoList;
                _this.totalNum = data.totalNum;
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
    //点击查询
    CustomGeneralDetail.prototype.queryClick = function (dataParam) {
        var _this = this;
        if (this.custRange == '1') { //查当月
            this.customGeneralDetailBean.custRange = 'month';
            if (dataParam == "") {
                this.chooseMonth = this.placeholders;
            }
            else {
                this.chooseMonth = dataParam;
            }
        }
        if (this.custRange == '2') { //查总的
            this.customGeneralDetailBean.custRange = undefined;
            if (dataParam == "") {
                this.chooseMonth = this.placeholders;
            }
            else {
                this.chooseMonth = dataParam;
            }
        }
        var param = {
            pageNum: this.customGeneralDetailBean.pageNum,
            pageSize: this.customGeneralDetailBean.pageSize,
            statisticsDate: this.chooseMonth,
            bussinessType: this.customGeneralDetailBean.bussinessType,
            custRange: this.customGeneralDetailBean.custRange,
        };
        this.httpService.custChangeDetailInfoQry(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataTable = data.infoList;
                _this.totalNum = data.totalNum;
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
    //处理日期
    CustomGeneralDetail.prototype.transDate = function (value) {
        var time = new Date(value);
        var year = value.getFullYear();
        var month = value.getMonth() + 1 + '';
        var data = value.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var newtime = year + "-" + month;
        return newtime;
    };
    //分页
    CustomGeneralDetail.prototype.paginate = function (event) {
        this.customGeneralDetailBean.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.customGeneralDetailBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.customGeneralDetailBean.pageSize;
        this.queryClick(this.chooseMonth);
    };
    //跳转到客户视图
    CustomGeneralDetail.prototype.toCustView = function (data) {
        this.commfunc.setSessionData('custNo', data.custNo);
        this.router.navigate(['pages/custom-view']);
    };
    //跳转到个人持有产品
    CustomGeneralDetail.prototype.toCustProduct = function (data) {
        this.commfunc.setSessionData('custNo', data.custNo);
        this.router.navigate(['pages/custom-view/view-product-information/own-our-product']);
    };
    //全选按钮
    CustomGeneralDetail.prototype.checkAllClick = function () {
        if (this.dataTable) {
            for (var i = 0; i < this.dataTable.length; i++) {
                if (this.checkAll == true) {
                    this.dataTable[i].checkBox = true;
                    this.chooseData.push(this.dataTable[i]);
                }
                else {
                    this.chooseData = [];
                    this.dataTable[i].checkBox = false;
                }
            }
        }
    };
    //单选按钮
    CustomGeneralDetail.prototype.checkBoxClick = function (i, data) {
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
        if (this.chooseData.length == this.dataTable.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    };
    //新建联系计划
    CustomGeneralDetail.prototype.newPlan = function () {
        if (this.chooseData.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择客户！' });
            return;
        }
        this.addUpHeader = '新建客户联系计划';
        this.dealDisplay = false;
        this.nodeDisplay = false;
        this.display = true;
        this.addDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        this.inValue = arr;
    };
    //新建联系计划-关闭模态框
    CustomGeneralDetail.prototype.newPlanCall = function (event) {
        this.addDisplay = false;
        this.display = false;
    };
    //加入群组
    CustomGeneralDetail.prototype.joinGroup = function () {
        if (this.chooseData.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择客户！' });
            return;
        }
        var arrData = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        var a = JSON.stringify(arrData);
        var param = {
            info: a
        };
        this.router.navigate(['pages/tzb/custom/custom-marketing/group/join-group', param]);
    };
    //发送短信
    CustomGeneralDetail.prototype.sendMessage = function () {
        if (this.chooseData.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择客户！' });
            return;
        }
        this.addUpHeader = '发送短信';
        this.dealDisplay = false;
        this.addDisplay = false;
        this.display = true;
        this.nodeDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        this.nodeInValue = arr;
    };
    //处理
    CustomGeneralDetail.prototype.dealTask = function (data) {
        if (this.chooseData.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择客户！' });
            return;
        }
        if (this.chooseData.length > 1) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '仅支持对单个客户进行新建联系记录！' });
            return;
        }
        this.addUpHeader = '客户联系处理';
        this.nodeDisplay = false;
        this.addDisplay = false;
        this.display = true;
        this.dealDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        this.dealInValue = arr;
    };
    //处理回调
    CustomGeneralDetail.prototype.dealCall = function () {
        this.dealDisplay = false;
        this.display = false;
    };
    //返回
    CustomGeneralDetail.prototype.doReturn = function () {
        this.router.navigate(['/pages/tzb/custom/custom-general']);
    };
    CustomGeneralDetail = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-general-detail',
            template: __webpack_require__(/*! ./custom-general-detail.component.html */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-general-detail/custom-general-detail.component.html"),
            styles: [__webpack_require__(/*! ./custom-general-detail.component.scss */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-general-detail/custom-general-detail.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], CustomGeneralDetail);
    return CustomGeneralDetail;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-rank-detail/bean/CustomRankDetail.bean.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-rank-detail/bean/CustomRankDetail.bean.ts ***!
  \********************************************************************************************************************/
/*! exports provided: CustomRankDetailBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRankDetailBean", function() { return CustomRankDetailBean; });
var CustomRankDetailBean = /** @class */ (function () {
    function CustomRankDetailBean() {
    }
    return CustomRankDetailBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-rank-detail/custom-rank-detail.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-rank-detail/custom-rank-detail.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 table\">\r\n\t<p-dataTable [value]=\"dataTable\" [emptyMessage]='tabMesg'>\r\n\t\t<p-headerColumnGroup>\r\n\t\t\t<p-row>\r\n\t\t\t\t<p-column field=\"custNo\" header=\"客户号\"></p-column>\r\n\t\t\t\t<p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n\t\t\t\t<p-column field=\"sex\" header=\"性别\"></p-column>\r\n\t\t\t\t<p-column field=\"age\" header=\"年龄\"></p-column>\r\n\t\t\t\t<p-column field=\"phone\" header=\"手机号\"></p-column>\r\n\t\t\t\t<p-column field=\"deptBal\" header=\"存款余额\"></p-column>\r\n\t\t\t\t<p-column field=\"finBal\" header=\"理财余额\"></p-column>\r\n\t\t\t\t<p-column field=\"loanBal\" header=\"贷款余额\"></p-column>\r\n\t\t\t\t<p-column field=\"ccOverAmt\" header=\"信用卡透支金额\"></p-column>\r\n\t\t\t\t<p-column field=\"ftpBeforeDiscount\" header=\"FTP折扣前收入\"></p-column>\r\n\t\t\t\t<p-column field=\"ftpAfterDiscount\" header=\"FTP折扣后收入\"></p-column>\r\n\t\t\t\t<p-column field=\"ftpBeforeDiscountLastMonth\" header=\"上月FTP折扣前收入\"></p-column>\r\n\t\t\t\t<p-column field=\"ftpAfterDiscountLastMonth\" header=\"上月FTP折扣后收入\"></p-column>\r\n\t\t\t\t<p-column field=\"holdProdNum\" header=\"持有产品件数\"></p-column>\r\n\t\t\t\t<p-column field=\"\" header=\"持有产品详情\"></p-column>\r\n\t\t\t</p-row>\r\n\t\t</p-headerColumnGroup>\r\n\t\t<p-column field=\"custNo\">\r\n\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t<!-- <a (click)=\"toCustView(col)\" class=\"custNo_a\">{{col.custNo}}</a> -->\r\n\t\t\t\t<a href=\"/#/pages/custom-view?custNo={{col.custNo}}\" target=\"_blank\">{{col.custNo}}</a>\r\n\t\t\t</ng-template>\r\n\t\t</p-column>\r\n\t\t<p-column field=\"custName\"></p-column>\r\n\t\t<p-column field=\"sex\">\r\n\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t{{col.sex|codeValuePie:gender}}\r\n\t\t\t</ng-template>\r\n\t\t</p-column>\r\n\t\t<p-column field=\"age\"></p-column>\r\n\t\t<p-column field=\"phone\">\r\n\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t<span class=\"name\">{{col.phone}}</span>\r\n\t\t\t</ng-template>\r\n\t\t</p-column>\r\n\t\t<p-column field=\"deptBal\">\r\n\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t{{col.deptBal==null || col.deptBal=='null' ? 0 : col.deptBal}}\r\n\t\t\t</ng-template>\r\n\t\t</p-column>\r\n\t\t<p-column field=\"finBal\">\r\n\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t{{col.finBal==null || col.finBal=='null' ? 0 : col.finBal}}\r\n\t\t\t</ng-template>\r\n\t\t</p-column>\r\n\t\t<p-column field=\"loanBal\">\r\n\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t{{col.loanBal==null || col.loanBal=='null' ? 0 : col.loanBal}}\r\n\t\t\t</ng-template>\r\n\t\t</p-column>\r\n\t\t<p-column field=\"ccOverAmt\">\r\n\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t{{col.ccOverAmt==null || col.ccOverAmt=='null' ? 0 : col.ccOverAmt}}\r\n\t\t\t</ng-template>\r\n\t\t</p-column>\r\n\t\t<p-column field=\"ftpBeforeDiscount\">\r\n\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t{{col.ftpBeforeDiscount==null || col.ftpBeforeDiscount=='null' ? 0 : col.ftpBeforeDiscount}}\r\n\t\t\t</ng-template>\r\n\t\t</p-column>\r\n\t\t<p-column field=\"ftpAfterDiscount\">\r\n\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t{{col.ftpAfterDiscount==null || col.ftpAfterDiscount=='null' ? 0 : col.ftpAfterDiscount}}\r\n\t\t\t</ng-template>\r\n\t\t</p-column>\r\n\t\t<p-column field=\"ftpBeforeDiscountLastMonth\">\r\n\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t{{col.ftpBeforeDiscountLastMonth==null || col.ftpBeforeDiscountLastMonth=='null' ? 0 : col.ftpBeforeDiscountLastMonth}}\r\n\t\t\t</ng-template>\r\n\t\t</p-column>\r\n\t\t<p-column field=\"ftpAfterDiscountLastMonth\">\r\n\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t{{col.ftpAfterDiscountLastMonth==null || col.ftpAfterDiscountLastMonth=='null' ? 0 : col.ftpAfterDiscountLastMonth}}\r\n\t\t\t</ng-template>\r\n\t\t</p-column>\r\n\t\t<p-column field=\"holdProdNum\">\r\n\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t{{col.holdProdNum==null || col.holdProdNum=='null' ? 0 : col.holdProdNum}}\r\n\t\t\t</ng-template>\r\n\t\t</p-column>\r\n\t\t<p-column field=\"\">\r\n\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t<a (click)=\"toCustProduct(col)\" class=\"lookDetail_a\">查看详情</a>\r\n\t\t\t</ng-template>\r\n\t\t</p-column>\r\n\t</p-dataTable>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n\t<p-paginator rows=\"{{customRankDetailBean.pageSize}}\" totalRecords=\"{{totalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n\t<div class=\"btn\">\r\n\t\t<button pButton type=\"button\" label=\"返回\" class=\"addGroupBtn\" (click)='doReturn()'></button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-rank-detail/custom-rank-detail.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-rank-detail/custom-rank-detail.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  text-align: center; }\n\n.custNo_a {\n  cursor: pointer;\n  color: #0094D2; }\n\n.lookDetail_a {\n  cursor: pointer;\n  color: #0094D2; }\n\n.lookDetail_a:hover {\n  text-decoration: underline;\n  color: #0094D2 !important; }\n\n.name {\n  word-break: break-all; }\n\n.btn {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vY3VzdG9tLWNoYW5nZS9jdXN0b20tcmFuay1kZXRhaWwvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20taW5mb3JtYXRpb25cXGN1c3RvbS1jaGFuZ2VcXGN1c3RvbS1yYW5rLWRldGFpbFxcY3VzdG9tLXJhbmstZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0ksZUFBYztFQUNkLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxlQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUVsQjtFQUNJLDBCQUEwQjtFQUMxQix5QkFBd0IsRUFBQTs7QUFFNUI7RUFDSSxxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWluZm9ybWF0aW9uL2N1c3RvbS1jaGFuZ2UvY3VzdG9tLXJhbmstZGV0YWlsL2N1c3RvbS1yYW5rLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZXtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiAzMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5jdXN0Tm9fYXtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgY29sb3I6ICMwMDk0RDI7XHJcbn1cclxuLmxvb2tEZXRhaWxfYXtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgY29sb3I6ICMwMDk0RDI7XHJcbn1cclxuLmxvb2tEZXRhaWxfYTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6IzAwOTREMiAhaW1wb3J0YW50O1xyXG59XHJcbi5uYW1le1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcbi5idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-rank-detail/custom-rank-detail.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-rank-detail/custom-rank-detail.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: CustomRankDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRankDetail", function() { return CustomRankDetail; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_CustomRankDetail_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/CustomRankDetail.bean */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-rank-detail/bean/CustomRankDetail.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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



// import { BillboardIndicator, BillboardCate, Gender } from "app/pages/tzb/custom/constant/custOperation.codeValue";



/**
 * 客户榜单
 */
var CustomRankDetail = /** @class */ (function () {
    function CustomRankDetail(routerInfo, httpService, router, commfunc, route) {
        this.routerInfo = routerInfo;
        this.httpService = httpService;
        this.router = router;
        this.commfunc = commfunc;
        this.route = route;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"]; //表格中无数据时显示的内容
        // gender: any = Gender;
        // billboardCate: any[] = BillboardCate;
        // billboardIndicator: any[] = BillboardIndicator;
        this.gender = [];
        this.billboardCate = [];
        this.billboardIndicator = [];
        this.customRankDetailBean = new _bean_CustomRankDetail_bean__WEBPACK_IMPORTED_MODULE_1__["CustomRankDetailBean"]();
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.gender = this.code['Gender'];
        this.billboardCate = this.code['BillboardCate'];
        this.billboardIndicator = this.code['BillboardIndicator'];
    }
    CustomRankDetail.prototype.ngOnInit = function () {
        this.customRankDetailBean.pageNum = 1;
        this.customRankDetailBean.pageSize = 10;
        this.customRankDetailBean.billboardIndicator = this.route.snapshot.params['billboardIndicator'];
        this.queryInit(); //查询客户列表
    };
    //码值
    CustomRankDetail.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //初始查询
    CustomRankDetail.prototype.queryInit = function () {
        var _this = this;
        var ob1 = this.httpService.custBillboardInfoQry(this.customRankDetailBean);
        ob1.subscribe(function (data) {
            _this.dataTable = data.custBillboardInfoQryList;
            _this.totalNum = data.totalNum;
        });
    };
    //分页
    CustomRankDetail.prototype.paginate = function (event) {
        this.customRankDetailBean.pageSize = event.rows * 1;
        this.customRankDetailBean.pageNum = event.page + 1;
        this.queryInit();
    };
    //跳转到客户视图
    CustomRankDetail.prototype.toCustView = function (data) {
        this.commfunc.setSessionData('custNo', data.custNo);
        this.router.navigate(['pages/custom-view']);
    };
    //跳转到个人持有产品
    CustomRankDetail.prototype.toCustProduct = function (data) {
        this.commfunc.setSessionData('custNo', data.custNo);
        this.router.navigate(['pages/custom-view/view-product-information/own-our-product']);
    };
    //返回
    CustomRankDetail.prototype.doReturn = function () {
        this.router.navigate(['/pages/tzb/other/workdesk']);
    };
    CustomRankDetail = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-rank-detail',
            template: __webpack_require__(/*! ./custom-rank-detail.component.html */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-rank-detail/custom-rank-detail.component.html"),
            styles: [__webpack_require__(/*! ./custom-rank-detail.component.scss */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-rank-detail/custom-rank-detail.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CustomRankDetail);
    return CustomRankDetail;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-risk-detail/bean/CustomRiskDetail.bean.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-risk-detail/bean/CustomRiskDetail.bean.ts ***!
  \********************************************************************************************************************/
/*! exports provided: CustomRiskDetailBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRiskDetailBean", function() { return CustomRiskDetailBean; });
var CustomRiskDetailBean = /** @class */ (function () {
    function CustomRiskDetailBean() {
    }
    return CustomRiskDetailBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-risk-detail/custom-risk-detail.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-risk-detail/custom-risk-detail.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t<label>统计日期：</label>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<p-calendar [maxDate]=\"temDateStart\" class=\"custom-risk-calendar\" [(ngModel)]=\"statisticsDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n\t\t\t    yearRange=\"1917:2117\" [showIcon]=\"true\" [locale]=\"ch\" [showOtherMonths]=\"false\" dateFormat=\"yy-mm-dd\"></p-calendar>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t<label>风险类型：</label>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<p-dropdown [options]=\"riskType\" class=\"custom-risk-p\" [(ngModel)]=\"customRiskDetailBean.riskType\">\r\n\t\t\t</p-dropdown>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" (click)=\"querySecle()\" label=\"查询\"></button>\r\n\t</div>\r\n\t<div class=\"ui-g-12 table base-table\" *ngIf=\"isYuqi\">\r\n\t\t<p-dataTable [value]=\"dataTable\" [emptyMessage]='tabMesg'>\r\n\t\t\t<p-column>\r\n\t\t\t\t<ng-template let-index=\"rowIndex\" pTemplate=\"header\">\r\n\t\t\t\t\t<p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkAll\" binary=\"false\" (click)=\"checkAllClick()\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<p-checkbox [(ngModel)]=\"col.checkBox\" (click)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"riskType\" header=\"风险类型\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t{{col.riskType|codeValuePie:riskType}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custNo\" header=\"客户号\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- <a (click)=\"toCustView(col)\" class=\"custNo_a\">{{col.custNo}}</a> -->\r\n\t\t\t\t\t<a href=\"/#/pages/custom-view?custNo={{col.custNo}}\" target=\"_blank\">{{col.custNo}}</a>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n\t\t\t<p-column field=\"sex\" header=\"性别\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t{{col.sex|codeValuePie:gender}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"age\" header=\"年龄\"></p-column>\r\n\t\t\t<p-column field=\"phone\" header=\"手机号码\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<span class=\"name\">{{col.phone}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"loanBal\" header=\"贷款余额\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.loanBal==null || col.loanBal=='null' ? 0 : col.loanBal}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.loanBal == null || col.loanBal == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.loanBal != null && col.loanBal != 'null' \">{{col.loanBal | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"overdueAmt\" header=\"逾期金额\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.overdueAmt==null || col.overdueAmt=='null' ? 0 : col.overdueAmt}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.overdueAmt == null || col.overdueAmt == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.overdueAmt != null && col.overdueAmt != 'null' \">{{col.overdueAmt | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"overdueAccrual\" header=\"逾期利息\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.overdueAccrual==null || col.overdueAccrual=='null' ? 0 : col.overdueAccrual}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.overdueAccrual == null || col.overdueAccrual == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.overdueAccrual != null && col.overdueAccrual != 'null' \">{{col.overdueAccrual | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"overdueDays\" header=\"逾期天数\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t{{col.overdueDays==null || col.overdueDays=='null' ? 0 : col.overdueDays}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"debtorAcctBalSum\" header=\"借款人账户余额合计\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.debtorAcctBalSum==null || col.debtorAcctBalSum=='null' ? 0 : col.debtorAcctBalSum}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.debtorAcctBalSum == null || col.debtorAcctBalSum == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.debtorAcctBalSum != null && col.debtorAcctBalSum != 'null' \">{{col.debtorAcctBalSum | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"allofDebtorAcctBalSum\" header=\"共同借款人账户余额合计\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.allofDebtorAcctBalSum==null || col.allofDebtorAcctBalSum=='null' ? 0 : col.allofDebtorAcctBalSum}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.allofDebtorAcctBalSum == null || col.allofDebtorAcctBalSum == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.allofDebtorAcctBalSum != null && col.allofDebtorAcctBalSum != 'null' \">{{col.allofDebtorAcctBalSum | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"relateDebtorAcctBalSum\" header=\"关联人账户余额合计\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.relateDebtorAcctBalSum==null || col.relateDebtorAcctBalSum=='null' ? 0 : col.relateDebtorAcctBalSum}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.relateDebtorAcctBalSum == null || col.relateDebtorAcctBalSum == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.relateDebtorAcctBalSum != null && col.relateDebtorAcctBalSum != 'null' \">{{col.relateDebtorAcctBalSum | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"guarantorAcctBalSum\" header=\"担保人账户余额合计\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.guarantorAcctBalSum==null || col.guarantorAcctBalSum=='null' ? 0 : col.guarantorAcctBalSum}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.guarantorAcctBalSum == null || col.guarantorAcctBalSum == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.guarantorAcctBalSum != null && col.guarantorAcctBalSum != 'null' \">{{col.guarantorAcctBalSum | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t</p-dataTable>\r\n\t</div>\r\n\t<div class=\"ui-g-12 table base-table\" *ngIf=\"isOther\">\r\n\t\t<p-dataTable [value]=\"dataTable\" [emptyMessage]='tabMesg'>\r\n\t\t\t<p-column>\r\n\t\t\t\t<ng-template let-index=\"rowIndex\" pTemplate=\"header\">\r\n\t\t\t\t\t<p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkAll\" binary=\"false\" (click)=\"checkAllClick()\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<p-checkbox [(ngModel)]=\"col.checkBox\" (click)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<!-- <p-column field=\"dataDt\" header=\"数据日期\" *ngIf=\"isDataDt\"></p-column> -->\r\n\t\t\t<p-column field=\"riskType\" header=\"风险类型\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t{{col.riskType|codeValuePie:riskType}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custNo\" header=\"客户号\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- <a (click)=\"toCustView(col)\" class=\"custNo_a\">{{col.custNo}}</a> -->\r\n\t\t\t\t\t<a href=\"/#/pages/custom-view?custNo={{col.custNo}}\" target=\"_blank\">{{col.custNo}}</a>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n\t\t\t<p-column field=\"sex\" header=\"性别\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t{{col.sex|codeValuePie:gender}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"age\" header=\"年龄\"></p-column>\r\n\t\t\t<p-column field=\"phone\" header=\"手机号码\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<span class=\"name\">{{col.phone}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"deptBal\" header=\"存款余额 \">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.deptBal==null || col.deptBal=='null' ? 0 : col.deptBal}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.deptBal == null || col.deptBal == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.deptBal != null && col.deptBal != 'null' \">{{col.deptBal | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"finBal\" header=\"理财余额\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.finBal==null || col.finBal=='null' ? 0 : col.finBal}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.finBal == null || col.finBal == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.finBal != null && col.finBal != 'null' \">{{col.finBal | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"loanBal\" header=\"贷款余额\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.loanBal==null || col.loanBal=='null' ? 0 : col.loanBal}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.loanBal == null || col.loanBal == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.loanBal != null && col.loanBal != 'null' \">{{col.loanBal | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"ccOverAmt\" header=\"信用卡透支金额\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.ccOverAmt==null || col.ccOverAmt=='null' ? 0 : col.ccOverAmt}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.ccOverAmt == null || col.ccOverAmt == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.ccOverAmt != null && col.ccOverAmt != 'null' \">{{col.ccOverAmt | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"ftpBeforeDiscount\" header=\"FTP折扣前收入\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.ftpBeforeDiscount==null || col.ftpBeforeDiscount=='null' ? 0 : col.ftpBeforeDiscount}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.ftpBeforeDiscount == null || col.ftpBeforeDiscount == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.ftpBeforeDiscount != null && col.ftpBeforeDiscount != 'null' \">{{col.ftpBeforeDiscount | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"ftpAfterDiscount\" header=\"FTP折扣后收入\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.ftpAfterDiscount==null || col.ftpAfterDiscount=='null' ? 0 : col.ftpAfterDiscount}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.ftpAfterDiscount == null || col.ftpAfterDiscount == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.ftpAfterDiscount != null && col.ftpAfterDiscount != 'null' \">{{col.ftpAfterDiscount | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"ftpBeforeDiscountLastMonth\" header=\"上月FTP折扣前收入\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.ftpBeforeDiscountLastMonth==null || col.ftpBeforeDiscountLastMonth=='null' ? 0 : col.ftpBeforeDiscountLastMonth}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.ftpBeforeDiscountLastMonth == null || col.ftpBeforeDiscountLastMonth == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.ftpBeforeDiscountLastMonth != null && col.ftpBeforeDiscountLastMonth != 'null' \">{{col.ftpBeforeDiscountLastMonth | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"ftpAfterDiscountLastMonth\" header=\"上月FTP折扣后收入\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.ftpAfterDiscountLastMonth==null || col.ftpAfterDiscountLastMonth=='null' ? 0 : col.ftpAfterDiscountLastMonth}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.ftpAfterDiscountLastMonth == null || col.ftpAfterDiscountLastMonth == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.ftpAfterDiscountLastMonth != null && col.ftpAfterDiscountLastMonth != 'null' \">{{col.ftpAfterDiscountLastMonth | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"holdProdNum\" header=\"持有产品件数\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t{{col.holdProdNum==null || col.holdProdNum=='null' ? 0 : col.holdProdNum}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"\" header=\"持有产品详情\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<a (click)=\"toCustProduct(col)\" class=\"lookDetail_a\">查看详情</a>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t</p-dataTable>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<p-paginator rows=\"{{customRiskDetailBean.pageSize}}\" [first]=\"first\" totalRecords=\"{{totalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n\t\t    (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"btn\">\r\n\t\t\t<!-- <button pButton type=\"button\" label=\"发送短信\" class=\"messageBtn\" (click)='sendMessage()'></button> -->\r\n\t\t\t<!-- <button pButton type=\"button\" label=\"新建联系计划\" class=\"emailBtn\" (click)='newPlan()'></button>\r\n\t\t\t<button pButton type=\"button\" label=\"新建联系记录\" class=\"newBuiltBtn\" (click)='dealTask()'></button> -->\r\n\t\t\t<button pButton type=\"button\" label=\"加入自选群组\" class=\"addGroupBtn\" (click)='joinGroup()'></button>\r\n\t\t\t<button pButton type=\"button\" label=\"返回\" class=\"addGroupBtn\" (click)='doReturn()'></button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- 模态框 -->\r\n<p-dialog [(visible)]=\"display\" width=\"1600\" height=\"800\">\r\n\t<p-header>\r\n\t\t{{addUpHeader}}\r\n\t</p-header>\r\n\t<app-new-contact-plan *ngIf=\"addDisplay\" [in-value]=\"inValue\" (outValue)=\"newPlanCall($event)\"></app-new-contact-plan>\r\n\t<app-note-model *ngIf=\"nodeDisplay\"></app-note-model>\r\n\t<app-deal-task *ngIf=\"dealDisplay\" (outValue)=\"dealCall($event)\"></app-deal-task>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-risk-detail/custom-risk-detail.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-risk-detail/custom-risk-detail.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .ui-g-12 .ui-g-6 label {\n  display: inline-block;\n  width: 10%;\n  font-size: 14px;\n  padding-right: 5px;\n  text-align: right; }\n\n.ui-g .btn {\n  text-align: center; }\n\n.ui-g .table {\n  text-align: center; }\n\n.ui-g .custNo_a {\n  cursor: pointer;\n  color: #0094D2; }\n\n.ui-g .lookDetail_a {\n  cursor: pointer;\n  color: #0094D2; }\n\n.ui-g .lookDetail_a:hover {\n  text-decoration: underline;\n  color: #0094D2 !important; }\n\n.ui-g .name {\n  word-break: break-all; }\n\n.ui-g .text-right {\n  text-align: right;\n  line-height: 25px; }\n\n:host /deep/ .custom-risk-p .ui-dropdown {\n  width: 50% !important;\n  min-width: 284px !important; }\n\n:host/deep/ .custom-risk-calendar .ui-calendar {\n  width: 50%; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .custom-risk-calendar .ui-calendar {\n    width: 76%; }\n  :host /deep/ .custom-risk-p .ui-dropdown {\n    width: 76% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vY3VzdG9tLWNoYW5nZS9jdXN0b20tcmlzay1kZXRhaWwvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20taW5mb3JtYXRpb25cXGN1c3RvbS1jaGFuZ2VcXGN1c3RvbS1yaXNrLWRldGFpbFxcY3VzdG9tLXJpc2stZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSWdCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFSakM7RUFhUSxrQkFBa0IsRUFBQTs7QUFiMUI7RUFrQlEsa0JBQWtCLEVBQUE7O0FBbEIxQjtFQXNCUSxlQUFjO0VBQ2QsY0FBYyxFQUFBOztBQXZCdEI7RUEwQlEsZUFBYztFQUNkLGNBQWMsRUFBQTs7QUEzQnRCO0VBOEJRLDBCQUEwQjtFQUMxQix5QkFBd0IsRUFBQTs7QUEvQmhDO0VBa0NRLHFCQUFxQixFQUFBOztBQWxDN0I7RUFxQ1EsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUd6QjtFQUNJLHFCQUFxQjtFQUNyQiwyQkFBMkIsRUFBQTs7QUFJL0I7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFFSztJQUNHLFVBQVUsRUFBQTtFQUViO0lBQ0cscUJBQXFCLEVBQUEsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1pbmZvcm1hdGlvbi9jdXN0b20tY2hhbmdlL2N1c3RvbS1yaXNrLWRldGFpbC9jdXN0b20tcmlzay1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktZyB7XHJcbiAgICAudWktZy0xMiB7XHJcbiAgICAgICAgLnVpLWctNiB7XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50YWJsZSB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLy8gb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIH1cclxuICAgIC5jdXN0Tm9fYXtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogIzAwOTREMjtcclxuICAgIH1cclxuICAgIC5sb29rRGV0YWlsX2F7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMwMDk0RDI7XHJcbiAgICB9XHJcbiAgICAubG9va0RldGFpbF9hOmhvdmVye1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIGNvbG9yOiMwMDk0RDIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5uYW1le1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgIH1cclxuICAgIC50ZXh0LXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIH1cclxufVxyXG46aG9zdCAvZGVlcC8gLmN1c3RvbS1yaXNrLXAgLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMjg0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8g5p+l6K+i6IyD5Zu0IOaXpeacn+e7hOS7tlxyXG46aG9zdC9kZWVwLyAuY3VzdG9tLXJpc2stY2FsZW5kYXIgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAvLyDmn6Xor6LojIPlm7Qg5pel5pyf57uE5Lu2XHJcbiAgICAgOmhvc3QvZGVlcC8gLmN1c3RvbS1yaXNrLWNhbGVuZGFyIC51aS1jYWxlbmRhciB7XHJcbiAgICAgICAgd2lkdGg6IDc2JTtcclxuICAgIH1cclxuICAgICA6aG9zdCAvZGVlcC8gLmN1c3RvbS1yaXNrLXAgLnVpLWRyb3Bkb3duIHtcclxuICAgICAgICB3aWR0aDogNzYlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-risk-detail/custom-risk-detail.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-risk-detail/custom-risk-detail.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: CustomRiskDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRiskDetail", function() { return CustomRiskDetail; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_custom_information_custom_change_custom_risk_detail_bean_CustomRiskDetail_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/custom-information/custom-change/custom-risk-detail/bean/CustomRiskDetail.bean */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-risk-detail/bean/CustomRiskDetail.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { RiskType, Gender } from "app/pages/tzb/custom/constant/custOperation.codeValue";






/**
 * 风险客户
 */
var CustomRiskDetail = /** @class */ (function () {
    // isDataDt:boolean = false;
    function CustomRiskDetail(routerInfo, httpService, router, commfunc, fb) {
        var _this = this;
        this.routerInfo = routerInfo;
        this.httpService = httpService;
        this.router = router;
        this.commfunc = commfunc;
        this.fb = fb;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["tableMessage"]; //表格中无数据时显示的内容
        this.selectedAll = [];
        this.checkAll = false;
        this.checkBox = [];
        // riskType: any[] = RiskType;
        // gender: any = Gender;
        this.riskType = [];
        this.gender = [];
        this.genderCode = [];
        this.isYuqi = true;
        this.customRiskDetailBean = new app_pages_tzb_custom_custom_information_custom_change_custom_risk_detail_bean_CustomRiskDetail_bean__WEBPACK_IMPORTED_MODULE_3__["CustomRiskDetailBean"]();
        this.display = false;
        this.addDisplay = false;
        this.nodeDisplay = false;
        this.dealDisplay = false;
        this.chooseData = [];
        this.temDateStart = new Date();
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["CALENDAR_CN"];
        this.statisticsDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
        this.first = 0;
        this.msgs = [];
        this.isOther = true;
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.riskType = this.code['RiskType'];
        this.genderCode = this.code['Gender'];
        this.genderCode.forEach(function (element) {
            if (element.value != '') {
                _this.gender.push(element);
            }
        });
    }
    CustomRiskDetail.prototype.ngOnInit = function () {
        var _this = this;
        //载入当月数据
        this.routerInfo.params.subscribe(function (data) {
            _this.customRiskDetailBean.riskType = data.riskType;
        });
        this.customRiskDetailBean.pageNum = 1;
        this.customRiskDetailBean.pageSize = 10;
        this.customRiskDetailBean.statisticsDate = this.transDate(new Date(new Date().getTime() - 24 * 60 * 60 * 1000));
        this.queryInit();
    };
    //码值
    CustomRiskDetail.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //查询按钮
    CustomRiskDetail.prototype.querySecle = function () {
        this.customRiskDetailBean.pageSize = 10;
        this.customRiskDetailBean.pageNum = 1;
        this.first = 0;
        this.queryClick();
    };
    //初始查询
    CustomRiskDetail.prototype.queryInit = function () {
        var _this = this;
        this.dataTable = [];
        if (this.customRiskDetailBean.riskType == '1') {
            // this.isYuqi = true;
            this.isOther = false;
        }
        else {
            this.isYuqi = false;
            // this.isOther = true;
            // if(this.customRiskDetailBean.riskType == '2'){
            // 	this.isDataDt = true;
            // }else{
            // 	this.isDataDt = false;
            // }
        }
        var ob1 = this.httpService.custRiskInfoDetailQry(this.customRiskDetailBean);
        ob1.subscribe(function (data) {
            if (data.infoList) {
                _this.dataTable = data.infoList;
            }
            else if (data.custOverdueInfoList) {
                _this.dataTable = data.custOverdueInfoList;
            }
            _this.totalNum = data.totalNum;
        });
    };
    //点击查询
    CustomRiskDetail.prototype.queryClick = function () {
        var _this = this;
        this.dataTable = [];
        this.chooseData = [];
        this.isYuqi = true;
        this.isOther = true;
        this.checkAll = false;
        var Ttime = new Date();
        if (this.statisticsDate == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择统计日期' });
            return;
        }
        if (this.commfunc.transDateN(this.statisticsDate) > this.commfunc.transDateN(Ttime)) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '统计日期不能大于当前日期' });
            setTimeout(function () {
                _this.statisticsDate = null;
            });
            return;
        }
        this.customRiskDetailBean.statisticsDate = this.transDate(this.statisticsDate);
        if (this.customRiskDetailBean.riskType == '1') {
            // this.isYuqi = true;
            this.isOther = false;
        }
        else {
            this.isYuqi = false;
            // this.isOther = true;
            // if(this.customRiskDetailBean.riskType == '2'){
            // 	this.isDataDt = true;
            // }else{
            // 	this.isDataDt = false;
            // }
        }
        var ob1 = this.httpService.custRiskInfoDetailQry(this.customRiskDetailBean);
        ob1.subscribe(function (data) {
            if (data.infoList) {
                _this.dataTable = data.infoList;
            }
            else if (data.custOverdueInfoList) {
                _this.dataTable = data.custOverdueInfoList;
            }
            _this.totalNum = data.totalNum;
        });
    };
    //全选按钮
    CustomRiskDetail.prototype.checkAllClick = function () {
        if (this.dataTable) {
            for (var i = 0; i < this.dataTable.length; i++) {
                if (this.checkAll == true) {
                    this.dataTable[i].checkBox = true;
                    this.chooseData.push(this.dataTable[i]);
                }
                else {
                    this.chooseData = [];
                    this.dataTable[i].checkBox = false;
                }
            }
        }
    };
    //单选按钮
    CustomRiskDetail.prototype.checkBoxClick = function (i, data) {
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
        if (this.chooseData.length == this.dataTable.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    };
    //处理日期
    CustomRiskDetail.prototype.transDate = function (value) {
        var time = new Date(value);
        var year = value.getFullYear();
        var month = value.getMonth() + 1 + '';
        var data = value.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var newtime = year + "-" + month + "-" + data;
        return newtime;
    };
    //分页
    CustomRiskDetail.prototype.paginate = function (event) {
        this.customRiskDetailBean.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.customRiskDetailBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.customRiskDetailBean.pageSize;
        this.queryClick();
    };
    //跳转到客户视图
    CustomRiskDetail.prototype.toCustView = function (data) {
        this.commfunc.setSessionData('custNo', data.custNo);
        this.router.navigate(['pages/custom-view']);
    };
    //跳转到个人持有产品
    CustomRiskDetail.prototype.toCustProduct = function (data) {
        this.commfunc.setSessionData('custNo', data.custNo);
        this.router.navigate(['pages/custom-view/view-product-information/own-our-product']);
    };
    //新建联系计划
    CustomRiskDetail.prototype.newPlan = function () {
        this.addUpHeader = '新建客户联系计划';
        this.dealDisplay = false;
        this.nodeDisplay = false;
        this.display = true;
        this.addDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        this.inValue = arr;
    };
    //新建联系计划-关闭模态框
    CustomRiskDetail.prototype.newPlanCall = function (event) {
        this.addDisplay = false;
        this.display = false;
    };
    //加入群组
    CustomRiskDetail.prototype.joinGroup = function () {
        var arrData = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        var a = JSON.stringify(arrData);
        var param = {
            info: a
        };
        this.router.navigate(['pages/tzb/custom/custom-marketing/group/join-group', param]);
    };
    //发送短信
    CustomRiskDetail.prototype.sendMessage = function () {
        this.addUpHeader = '发送短信';
        this.dealDisplay = false;
        this.addDisplay = false;
        this.display = true;
        this.nodeDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        this.nodeInValue = arr;
    };
    //处理
    CustomRiskDetail.prototype.dealTask = function (data) {
        this.addUpHeader = '客户联系处理';
        this.nodeDisplay = false;
        this.addDisplay = false;
        this.display = true;
        this.dealDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        this.dealInValue = arr;
    };
    //处理回调
    CustomRiskDetail.prototype.dealCall = function () {
        this.dealDisplay = false;
        this.display = false;
    };
    //返回
    CustomRiskDetail.prototype.doReturn = function () {
        this.router.navigate(['/pages/tzb/custom/custom-general']);
    };
    CustomRiskDetail = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-risk-detail',
            template: __webpack_require__(/*! ./custom-risk-detail.component.html */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-risk-detail/custom-risk-detail.component.html"),
            styles: [__webpack_require__(/*! ./custom-risk-detail.component.scss */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-risk-detail/custom-risk-detail.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], CustomRiskDetail);
    return CustomRiskDetail;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-transaction-detail/bean/CustomTransactionDetail.bean.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-transaction-detail/bean/CustomTransactionDetail.bean.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: CustomTransactionDetailBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTransactionDetailBean", function() { return CustomTransactionDetailBean; });
var CustomTransactionDetailBean = /** @class */ (function () {
    function CustomTransactionDetailBean() {
    }
    return CustomTransactionDetailBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-transaction-detail/custom-transaction-detail.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-transaction-detail/custom-transaction-detail.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t<label>统计日期：</label>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<p-calendar [maxDate]=\"temDateStart\" class=\"custom-transaction-calendar\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" \r\n\t\t\t    [(ngModel)]=\"customTransactionDetailBean.statisticsDate\" [showIcon]=\"true\" [locale]=\"ch\" dateFormat=\"yy-mm-dd\"></p-calendar>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t<label>异动类型：</label>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<p-dropdown [options]=\"abnormalType\" class=\"custom-transaction-p\" [(ngModel)]=\"customTransactionDetailBean.abnormalType\"></p-dropdown>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" (click)=\"queryClick()\" label=\"查询\"></button>\r\n\t</div>\r\n\t<div class=\"ui-g-12 table base-table\">\r\n\t\t<p-dataTable [value]=\"dataTable\" [emptyMessage]='tabMesg'>\r\n\t\t\t<p-column>\r\n\t\t\t\t<ng-template let-index=\"rowIndex\" pTemplate=\"header\">\r\n\t\t\t\t\t<p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkAll\" binary=\"false\" (click)=\"checkAllClick()\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<p-checkbox [(ngModel)]=\"col.checkBox\" (click)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custNo\" header=\"客户号\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- <a (click)=\"toCustView(col)\" class=\"custNo_a\">{{col.custNo}}</a> -->\r\n\t\t\t\t\t<a href=\"/#/pages/custom-view?custNo={{col.custNo}}\" target=\"_blank\">{{col.custNo}}</a>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n\t\t\t<p-column field=\"gender\" header=\"性别\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t{{col.gender|codeValuePie:gender}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"age\" header=\"年龄\"></p-column>\r\n\t\t\t<p-column field=\"phone\" header=\"手机号码\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<span class=\"name\">{{col.phone}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"deptBal\" header=\"存款余额\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.deptBal==null || col.deptBal=='null' ? 0 : col.deptBal}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.deptBal == null || col.deptBal == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.deptBal != null && col.deptBal != 'null' \">{{col.deptBal | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"finBal\" header=\"理财余额\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.finBal==null || col.finBal=='null' ? 0 : col.finBal}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.finBal == null || col.finBal == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.finBal != null && col.finBal != 'null' \">{{col.finBal | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"loanBal\" header=\"贷款余额\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.loanBal==null || col.loanBal=='null' ? 0 : col.loanBal}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.loanBal == null || col.loanBal == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.loanBal != null && col.loanBal != 'null' \">{{col.loanBal | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"ccOverAmt\" header=\"信用卡透支金额\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.ccOverAmt==null || col.ccOverAmt=='null' ? 0 : col.ccOverAmt}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.ccOverAmt == null || col.ccOverAmt == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.ccOverAmt != null && col.ccOverAmt != 'null' \">{{col.ccOverAmt | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"ftpBeforeDiscount\" header=\"FTP折扣前收入\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.ftpBeforeDiscount==null || col.ftpBeforeDiscount=='null' ? 0 : col.ftpBeforeDiscount}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.ftpBeforeDiscount == null || col.ftpBeforeDiscount == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.ftpBeforeDiscount != null && col.ftpBeforeDiscount != 'null' \">{{col.ftpBeforeDiscount | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"ftpAfterDiscount\" header=\"FTP折扣后收入\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.ftpAfterDiscount==null || col.ftpAfterDiscount=='null' ? 0 : col.ftpAfterDiscount}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.ftpAfterDiscount == null || col.ftpAfterDiscount == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.ftpAfterDiscount != null && col.ftpAfterDiscount != 'null' \">{{col.ftpAfterDiscount | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"ftpBeforeDiscountLastMonth\" header=\"上月FTP折扣前收入\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.ftpBeforeDiscountLastMonth==null || col.ftpBeforeDiscountLastMonth=='null' ? 0 : col.ftpBeforeDiscountLastMonth}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.ftpBeforeDiscountLastMonth == null || col.ftpBeforeDiscountLastMonth == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.ftpBeforeDiscountLastMonth != null && col.ftpBeforeDiscountLastMonth != 'null' \">{{col.ftpBeforeDiscountLastMonth | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"ftpAfterDiscountLastMonth\" header=\"上月FTP折扣后收入\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<!-- {{col.ftpAfterDiscountLastMonth==null || col.ftpAfterDiscountLastMonth=='null' ? 0 : col.ftpAfterDiscountLastMonth}} -->\r\n\t\t\t\t\t<span *ngIf=\"col.ftpAfterDiscountLastMonth == null || col.ftpAfterDiscountLastMonth == 'null' \">{{0 | formatMoneyValuePie}}</span>\r\n\t\t\t\t\t<span *ngIf=\"col.ftpAfterDiscountLastMonth != null && col.ftpAfterDiscountLastMonth != 'null' \">{{col.ftpAfterDiscountLastMonth | formatMoneyValuePie}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"holdProdNum\" header=\"持有产品件数\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t{{col.holdProdNum==null || col.holdProdNum=='null' ? 0 : col.holdProdNum}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"\" header=\"持有产品详情\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<a (click)=\"toCustProduct(col)\" class=\"lookDetail_a\">查看详情</a>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t</p-dataTable>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<p-paginator rows=\"{{customTransactionDetailBean.pageSize}}\" totalRecords=\"{{totalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n\t\t    (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"btn\">\r\n\t\t\t<!-- <button pButton type=\"button\" label=\"发送短信\" class=\"messageBtn\" (click)='sendMessage()'></button> -->\r\n\t\t\t<!-- <button pButton type=\"button\" label=\"新建联系计划\" class=\"emailBtn\" (click)='newPlan()'></button>\r\n\t\t\t<button pButton type=\"button\" label=\"新建联系记录\" class=\"newBuiltBtn\" (click)='dealTask()'></button> -->\r\n\t\t\t<button pButton type=\"button\" label=\"加入自选群组\" class=\"addGroupBtn\" (click)='joinGroup()'></button>\r\n\t\t\t<button pButton type=\"button\" label=\"返回\" class=\"addGroupBtn\" (click)='doReturn()'></button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- 模态框 -->\r\n<p-dialog [(visible)]=\"display\" width=\"1600\" height=\"800\">\r\n\t<p-header>\r\n\t\t{{addUpHeader}}\r\n\t</p-header>\r\n\t<app-new-contact-plan *ngIf=\"addDisplay\" [in-value]=\"inValue\" (outValue)=\"newPlanCall($event)\"></app-new-contact-plan>\r\n\t<app-note-model *ngIf=\"nodeDisplay\"></app-note-model>\r\n\t<app-deal-task *ngIf=\"dealDisplay\" (outValue)=\"dealCall($event)\"></app-deal-task>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-transaction-detail/custom-transaction-detail.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-transaction-detail/custom-transaction-detail.component.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .ui-g-12 .ui-g-6 label {\n  display: inline-block;\n  width: 10%;\n  font-size: 14px;\n  padding-right: 5px;\n  text-align: right; }\n\n.ui-g .btn {\n  text-align: center; }\n\n.ui-g .table {\n  text-align: center; }\n\n.ui-g .custNo_a {\n  cursor: pointer;\n  color: #0094D2; }\n\n.ui-g .lookDetail_a {\n  cursor: pointer;\n  color: #0094D2; }\n\n.ui-g .lookDetail_a:hover {\n  text-decoration: underline;\n  color: #0094D2 !important; }\n\n.ui-g .name {\n  word-break: break-all; }\n\n.ui-g .text-right {\n  text-align: right;\n  line-height: 25px; }\n\n:host /deep/ .custom-transaction-p .ui-dropdown {\n  width: 50% !important;\n  min-width: 284px !important; }\n\n:host/deep/ .custom-transaction-calendar .ui-calendar {\n  width: 50%; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .custom-transaction-calendar .ui-calendar {\n    width: 76%; }\n  :host /deep/ .custom-transaction-p .ui-dropdown {\n    width: 76% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vY3VzdG9tLWNoYW5nZS9jdXN0b20tdHJhbnNhY3Rpb24tZGV0YWlsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWluZm9ybWF0aW9uXFxjdXN0b20tY2hhbmdlXFxjdXN0b20tdHJhbnNhY3Rpb24tZGV0YWlsXFxjdXN0b20tdHJhbnNhY3Rpb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSWdCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFSakM7RUFhUSxrQkFBa0IsRUFBQTs7QUFiMUI7RUFrQlEsa0JBQWtCLEVBQUE7O0FBbEIxQjtFQXFCUSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQXRCdEI7RUF5QlEsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUExQnRCO0VBNkJRLDBCQUEwQjtFQUMxQix5QkFBeUIsRUFBQTs7QUE5QmpDO0VBaUNRLHFCQUFxQixFQUFBOztBQWpDN0I7RUFvQ1EsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLHFCQUFxQjtFQUNyQiwyQkFBMkIsRUFBQTs7QUFJL0I7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFFSztJQUNHLFVBQVUsRUFBQTtFQUViO0lBQ0cscUJBQXFCLEVBQUEsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1pbmZvcm1hdGlvbi9jdXN0b20tY2hhbmdlL2N1c3RvbS10cmFuc2FjdGlvbi1kZXRhaWwvY3VzdG9tLXRyYW5zYWN0aW9uLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1nIHtcclxuICAgIC51aS1nLTEyIHtcclxuICAgICAgICAudWktZy02IHtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlIHtcclxuICAgICAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgICAgICAvLyBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLy8gb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIH1cclxuICAgIC5jdXN0Tm9fYSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMDA5NEQyO1xyXG4gICAgfVxyXG4gICAgLmxvb2tEZXRhaWxfYSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMDA5NEQyO1xyXG4gICAgfVxyXG4gICAgLmxvb2tEZXRhaWxfYTpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgY29sb3I6ICMwMDk0RDIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5uYW1lIHtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICB9XHJcbiAgICAudGV4dC1yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuY3VzdG9tLXRyYW5zYWN0aW9uLXAgLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMjg0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8g5p+l6K+i6IyD5Zu0IOaXpeacn+e7hOS7tlxyXG46aG9zdC9kZWVwLyAuY3VzdG9tLXRyYW5zYWN0aW9uLWNhbGVuZGFyIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgLy8g5p+l6K+i6IyD5Zu0IOaXpeacn+e7hOS7tlxyXG4gICAgIDpob3N0L2RlZXAvIC5jdXN0b20tdHJhbnNhY3Rpb24tY2FsZW5kYXIgLnVpLWNhbGVuZGFyIHtcclxuICAgICAgICB3aWR0aDogNzYlO1xyXG4gICAgfVxyXG4gICAgIDpob3N0IC9kZWVwLyAuY3VzdG9tLXRyYW5zYWN0aW9uLXAgLnVpLWRyb3Bkb3duIHtcclxuICAgICAgICB3aWR0aDogNzYlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-transaction-detail/custom-transaction-detail.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-change/custom-transaction-detail/custom-transaction-detail.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: CustomTransactionDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTransactionDetail", function() { return CustomTransactionDetail; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_custom_information_custom_change_custom_transaction_detail_bean_CustomTransactionDetail_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/custom-information/custom-change/custom-transaction-detail/bean/CustomTransactionDetail.bean */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-transaction-detail/bean/CustomTransactionDetail.bean.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AbnormalType, Gender } from "app/pages/tzb/custom/constant/custOperation.codeValue";






/**
 * 异动客户
 */
var CustomTransactionDetail = /** @class */ (function () {
    function CustomTransactionDetail(routerInfo, httpService, router, commfunc, fb) {
        var _this = this;
        this.routerInfo = routerInfo;
        this.httpService = httpService;
        this.router = router;
        this.commfunc = commfunc;
        this.fb = fb;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["tableMessage"]; //表格中无数据时显示的内容
        this.selectedAll = [];
        this.checkAll = false;
        this.checkBox = [];
        // abnormalType: any[] = AbnormalType;
        // gender: any = Gender;
        this.abnormalType = [];
        this.gender = [];
        this.customTransactionDetailBean = new app_pages_tzb_custom_custom_information_custom_change_custom_transaction_detail_bean_CustomTransactionDetail_bean__WEBPACK_IMPORTED_MODULE_2__["CustomTransactionDetailBean"]();
        this.display = false;
        this.addDisplay = false;
        this.nodeDisplay = false;
        this.dealDisplay = false;
        this.chooseData = [];
        this.temDateStart = new Date();
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["CALENDAR_CN"];
        this.msgs = [];
        this.genderCode = [];
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.abnormalType = this.code['AbnormalType'];
        // this.gender = this.code['Gender'];
        this.genderCode = this.code['Gender'];
        this.genderCode.forEach(function (element) {
            if (element.value != '') {
                _this.gender.push(element);
            }
        });
    }
    CustomTransactionDetail.prototype.ngOnInit = function () {
        var _this = this;
        //载入当月数据
        this.routerInfo.params.subscribe(function (data) {
            _this.customTransactionDetailBean.abnormalType = data.abnormalType;
        });
        this.customTransactionDetailBean.pageNum = 1;
        this.customTransactionDetailBean.pageSize = 10;
        this.customTransactionDetailBean.statisticsDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
        this.queryInit(this.customTransactionDetailBean);
    };
    //码值
    CustomTransactionDetail.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //初始查询
    CustomTransactionDetail.prototype.queryInit = function (value) {
        var _this = this;
        var date = this.transDate(new Date(new Date().getTime() - 24 * 60 * 60 * 1000));
        var param = { "pageNum": value.pageNum, "pageSize": value.pageSize, "abnormalType": value.abnormalType, "statisticsDate": date };
        var ob1 = this.httpService.custChangeAbnormalDetailInfoQry(param);
        ob1.subscribe(function (data) {
            _this.dataTable = data.infoList;
            _this.totalNum = data.totalNum;
        });
    };
    //点击查询
    CustomTransactionDetail.prototype.queryClick = function () {
        var _this = this;
        this.dataTable = [];
        this.chooseData = [];
        this.checkAll = false;
        var Ttime = new Date();
        if (this.customTransactionDetailBean.statisticsDate == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择统计日期' });
            return;
        }
        if (this.commfunc.transDateN(this.customTransactionDetailBean.statisticsDate) > this.commfunc.transDateN(Ttime)) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '统计日期不能大于当前日期' });
            setTimeout(function () {
                _this.customTransactionDetailBean.statisticsDate = null;
            });
            return;
        }
        var date = this.transDate(this.customTransactionDetailBean.statisticsDate);
        var param = { "pageNum": this.customTransactionDetailBean.pageNum, "pageSize": this.customTransactionDetailBean.pageSize, "abnormalType": this.customTransactionDetailBean.abnormalType, "statisticsDate": date };
        var ob1 = this.httpService.custChangeAbnormalDetailInfoQry(param);
        ob1.subscribe(function (data) {
            _this.dataTable = data.infoList;
            _this.totalNum = data.totalNum;
        });
    };
    //全选按钮
    CustomTransactionDetail.prototype.checkAllClick = function () {
        if (this.dataTable) {
            for (var i = 0; i < this.dataTable.length; i++) {
                if (this.checkAll == true) {
                    this.dataTable[i].checkBox = true;
                    this.chooseData.push(this.dataTable[i]);
                }
                else {
                    this.chooseData = [];
                    this.dataTable[i].checkBox = false;
                }
            }
        }
    };
    //单选按钮
    CustomTransactionDetail.prototype.checkBoxClick = function (i, data) {
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
        if (this.chooseData.length == this.dataTable.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    };
    //处理日期
    CustomTransactionDetail.prototype.transDate = function (value) {
        var time = new Date(value);
        var year = value.getFullYear();
        var month = value.getMonth() + 1 + '';
        var data = value.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var newtime = year + "-" + month + "-" + data;
        return newtime;
    };
    //分页
    CustomTransactionDetail.prototype.paginate = function (event) {
        this.customTransactionDetailBean.pageSize = event.rows * 1;
        this.customTransactionDetailBean.pageNum = event.page + 1;
        this.queryClick();
    };
    //跳转到客户视图
    CustomTransactionDetail.prototype.toCustView = function (data) {
        this.commfunc.setSessionData('custNo', data.custNo);
        this.router.navigate(['pages/custom-view']);
    };
    //跳转到个人持有产品
    CustomTransactionDetail.prototype.toCustProduct = function (data) {
        this.commfunc.setSessionData('custNo', data.custNo);
        this.router.navigate(['pages/custom-view/view-product-information/own-our-product']);
    };
    //新建联系计划
    CustomTransactionDetail.prototype.newPlan = function () {
        this.addUpHeader = '新建客户联系计划';
        this.dealDisplay = false;
        this.nodeDisplay = false;
        this.display = true;
        this.addDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        this.inValue = arr;
    };
    //新建联系计划-关闭模态框
    CustomTransactionDetail.prototype.newPlanCall = function (event) {
        this.addDisplay = false;
        this.display = false;
    };
    //加入群组
    CustomTransactionDetail.prototype.joinGroup = function () {
        var arrData = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        var a = JSON.stringify(arrData);
        var param = {
            info: a
        };
        this.router.navigate(['pages/tzb/custom/custom-marketing/group/join-group', param]);
    };
    //发送短信
    CustomTransactionDetail.prototype.sendMessage = function () {
        this.addUpHeader = '发送短信';
        this.dealDisplay = false;
        this.addDisplay = false;
        this.display = true;
        this.nodeDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        this.nodeInValue = arr;
    };
    //处理
    CustomTransactionDetail.prototype.dealTask = function (data) {
        this.addUpHeader = '客户联系处理';
        this.nodeDisplay = false;
        this.addDisplay = false;
        this.display = true;
        this.dealDisplay = true;
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.chooseData);
        this.dealInValue = arr;
    };
    //处理回调
    CustomTransactionDetail.prototype.dealCall = function () {
        this.dealDisplay = false;
        this.display = false;
    };
    //返回
    CustomTransactionDetail.prototype.doReturn = function () {
        this.router.navigate(['/pages/tzb/custom/custom-general']);
    };
    CustomTransactionDetail = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-transaction-detail',
            template: __webpack_require__(/*! ./custom-transaction-detail.component.html */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-transaction-detail/custom-transaction-detail.component.html"),
            styles: [__webpack_require__(/*! ./custom-transaction-detail.component.scss */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-transaction-detail/custom-transaction-detail.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], CustomTransactionDetail);
    return CustomTransactionDetail;
}());



/***/ })

}]);
//# sourceMappingURL=custom-change-custom-change-module.js.map