(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tzb-custom-custom-view-risk-infomation-risk-infomation-module"],{

/***/ "./src/app/pages/tzb/custom/custom-view/risk-infomation/foujue-detail/bean/foujue-detail.bean.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/risk-infomation/foujue-detail/bean/foujue-detail.bean.ts ***!
  \*******************************************************************************************************/
/*! exports provided: FjDetailListBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FjDetailListBean", function() { return FjDetailListBean; });
var FjDetailListBean = /** @class */ (function () {
    function FjDetailListBean() {
    }
    return FjDetailListBean;
}());

;


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/risk-infomation/foujue-detail/foujue-detail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/risk-infomation/foujue-detail/foujue-detail.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 tit\">\r\n            <span>操作类型:</span>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <span>{{fjDetailList.operationType|codeValuePie:loanOperationTypeOptions}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 tit\">\r\n            <span>操作时间:</span>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <span>{{fjDetailList.applyDate}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 tit\">\r\n            <span>业务流程:</span>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <span>无</span>\r\n        </div>\r\n        <div class=\"ui-g-2 tit\">\r\n            <span>否决环节:</span>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <span>{{fjDetailList.operationLink|codeValuePie:loanOperationLinkOptions}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 tit\">\r\n            <span>业务品种:</span>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <span *ngIf=\"(fjDetailList.bussType != null && fjDetailList.bussType != '' && fjDetailList.bussType != 'undefied')\" >{{fjDetailList.bussType|codeValuePie:bussTypeOptions}}</span>\r\n            <span *ngIf=\"(fjDetailList.bussType == null || fjDetailList.bussType == '' || fjDetailList.bussType == 'undefied')\" >无</span>\r\n        </div>\r\n        <div class=\"ui-g-2 tit\">\r\n            <span>否决类型:</span>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <span>{{fjDetailList.vetoType|codeValuePie:loanVetoTypeOpyions}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 tit\">\r\n            <span>二级否决类型:</span>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <span *ngFor=\"let item of subVetoTypeList\" >{{item|codeValuePie:loanSubVetoTypeOptions}},</span>\r\n        </div>\r\n        <div class=\"ui-g-2 tit\">\r\n            <span>拒绝原因:</span>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <span *ngIf=\"(fjDetailList.refuseReason != null && fjDetailList.refuseReason != '' && fjDetailList.refuseReason != 'undefied')\">{{fjDetailList.refuseReason|codeValuePie:refuseReasonOptions}}</span>\r\n            <span *ngIf=\"(fjDetailList.refuseReason == null || fjDetailList.refuseReason == '' || fjDetailList.refuseReason == 'undefied')\">无</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 tit\">\r\n            <span>否决人工号:</span>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <span>{{fjDetailList.vetoerName}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 tit\">\r\n            <span>否决人名称:</span>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <span>{{fjDetailList.personName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 tit\">\r\n            <span>经办机构:</span>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <span>{{fjDetailList.appBranchNo}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 tit\">\r\n            <span>流水号:</span>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <span>{{fjDetailList.seqNo}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <div class=\"ui-g-12\" style=\"text-align:center\">\r\n    <button pButton label=\"关闭\" (click)=\"close()\"></button>\r\n</div> -->\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/risk-infomation/foujue-detail/foujue-detail.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/risk-infomation/foujue-detail/foujue-detail.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tit {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy9yaXNrLWluZm9tYXRpb24vZm91anVlLWRldGFpbC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS12aWV3XFxyaXNrLWluZm9tYXRpb25cXGZvdWp1ZS1kZXRhaWxcXGZvdWp1ZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLXZpZXcvcmlzay1pbmZvbWF0aW9uL2ZvdWp1ZS1kZXRhaWwvZm91anVlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/risk-infomation/foujue-detail/foujue-detail.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/risk-infomation/foujue-detail/foujue-detail.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: FouJueDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FouJueDetailComponent", function() { return FouJueDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _bean_foujue_detail_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/foujue-detail.bean */ "./src/app/pages/tzb/custom/custom-view/risk-infomation/foujue-detail/bean/foujue-detail.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {BussType,LoanVetoType,LoanSubVetoType,RefuseReason,LoanOperationType,LoanOperationLink} from '../../../constant/custView.codeValue';
var FouJueDetailComponent = /** @class */ (function () {
    function FouJueDetailComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.msgs = [];
        this.bussTypeOptions = []; //业务类型
        this.loanVetoTypeOpyions = []; //贷款否决类型
        this.loanSubVetoTypeOptions = []; //贷款否决二级否决类型
        this.refuseReasonOptions = []; //贷款否决拒绝原因
        this.loanOperationTypeOptions = []; //贷款否决操作类型
        this.loanOperationLinkOptions = []; //操作环节  否决环节
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"]; //表格中无数据时显示的内容
        this.fjDetailList = new _bean_foujue_detail_bean__WEBPACK_IMPORTED_MODULE_3__["FjDetailListBean"]();
        this.subVetoTypeList = []; //二级否决类型列表
        this.codeVal();
        this.bussTypeOptions = this.code['BussType'];
        this.loanVetoTypeOpyions = this.code['LoanVetoType'];
        this.loanSubVetoTypeOptions = this.code['LoanSubVetoType'];
        this.refuseReasonOptions = this.code['RefuseReason'];
        this.loanOperationTypeOptions = this.code['LoanOperationType'];
        this.loanOperationLinkOptions = this.code['LoanOperationLink'];
        //-------------------------------------上面是码值
    }
    FouJueDetailComponent.prototype.ngOnInit = function () {
    };
    FouJueDetailComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.inValue && this.inValue != '') {
            var param = {
                number: this.inValue.number
            };
            this.httpService.BZ_0200300000106_LOAN(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.fjDetailList = data;
                    _this.subVetoTypeList = [];
                    var array = data.subVetoType.split(',');
                    var flag_1 = true;
                    array.forEach(function (item, i) {
                        if (item == null || item == "") {
                            return flag_1 = false;
                        }
                        if (flag_1) {
                            _this.subVetoTypeList.push(item);
                        }
                    });
                    console.log(_this.fjDetailList.vetoerName);
                    var item = {
                        tellerId: _this.fjDetailList.vetoerName
                    };
                    _this.httpService.queryTellerById(item).subscribe(function (data) {
                        _this.fjDetailList.personName = data.tellerName;
                        console.log(_this.fjDetailList.personName);
                    });
                    var temp = {
                        flag: "0",
                        orgId: _this.fjDetailList.appBranchNo,
                        rowNum: "10",
                        startRow: "1",
                    };
                    _this.httpService.queryOrgByCombConditions(temp).subscribe(function (data) {
                        if (data.orgInfoList && data.orgInfoList.length > 0) {
                            _this.fjDetailList.appBranchNo = data.orgInfoList[0].orgName;
                        }
                    });
                }
                else {
                    data.returnCode.message ? data.returnCode.message : '调用服务失败';
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            });
        }
    };
    FouJueDetailComponent.prototype.close = function () {
        this.outValue.emit(false);
    };
    //码值
    FouJueDetailComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FouJueDetailComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('in-value'),
        __metadata("design:type", Object)
    ], FouJueDetailComponent.prototype, "inValue", void 0);
    FouJueDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'foujue-detail',
            template: __webpack_require__(/*! ./foujue-detail.component.html */ "./src/app/pages/tzb/custom/custom-view/risk-infomation/foujue-detail/foujue-detail.component.html"),
            styles: [__webpack_require__(/*! ./foujue-detail.component.scss */ "./src/app/pages/tzb/custom/custom-view/risk-infomation/foujue-detail/foujue-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], FouJueDetailComponent);
    return FouJueDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/risk-infomation/list-details/list-details.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/risk-infomation/list-details/list-details.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 detail\">\r\n  <div class=\"ui-g-12\">\r\n    <!-- 第一行 -->\r\n    <div class=\"ui-g-3 text-r\">\r\n      是否我行客户：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.tzbankClientFlag|codeValuePie:tzbankClientFlagOptions}}\r\n    </div>\r\n    <div class=\"ui-g-3 text-r\">\r\n      客户名称：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.clientName}}\r\n    </div>\r\n    <div class=\"ui-g-3 text-r\">\r\n      客户号：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.clientNo}}\r\n    </div>\r\n    <div class=\"ui-g-3 text-r\">\r\n      证件类型：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.globalType|codeValuePie:allIdenTypeOptions}}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <!-- 第二行 -->\r\n    <div class=\"ui-g-3 text-r\">\r\n      证件号码：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.globalId}}\r\n    </div>\r\n    <div class=\"ui-g-3 text-r\">\r\n      一级名单：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.firstLevelList}}\r\n    </div>\r\n    <div class=\"ui-g-3 text-r\">\r\n      二级名单：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.secondLevelList}}\r\n    </div>\r\n    <div class=\"ui-g-3 text-r\">\r\n      风险等级：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.custRiskLevel}}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <!-- 第三行 -->\r\n    <div class=\"ui-g-3 text-r\">\r\n      状态：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.tranStatus|codeValuePie:tranStatusOptions}}\r\n    </div>\r\n    <div class=\"ui-g-3 text-r\">\r\n      主联系人：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.contactManagerId}}\r\n    </div>\r\n    <div class=\"ui-g-3 text-r\">\r\n      主联系人机构：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.orgId}}\r\n    </div>\r\n    <div class=\"ui-g-3 text-r\">\r\n      录入原因：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.reason}}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <!-- 第四行 -->\r\n    <div class=\"ui-g-3 text-r\">\r\n      信息录入方式：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.registerType|codeValuePie:registerTypeOptions}}\r\n    </div>\r\n    <div class=\"ui-g-3 text-r\">\r\n      名单说明：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      <span *ngIf=\"mdzxxBean.description != undefined && mdzxxBean.description != '' && mdzxxBean.description != null\">{{mdzxxBean.description}}</span>\r\n      <span *ngIf=\"mdzxxBean.description == undefined || mdzxxBean.description == '' || mdzxxBean.description == null\">无</span>\r\n    </div>\r\n    <div class=\"ui-g-3 text-r\">\r\n      经办人：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.appUserId}}\r\n    </div>\r\n    <div class=\"ui-g-3 text-r\">\r\n      经办日期：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.inputDate|timeValuePie}}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <!-- 第五行 -->\r\n    <div class=\"ui-g-3 text-r\">\r\n      经办机构：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.appBranchNo}}\r\n    </div>\r\n    <div class=\"ui-g-3 text-r\">\r\n      审批状态：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.approveStatus|codeValuePie:approveStatusOptions}}\r\n    </div>\r\n    <div class=\"ui-g-3 text-r\">\r\n      当前审批阶段：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.curAppStep|codeValuePie:appStepOptions}}\r\n    </div>\r\n    <div class=\"ui-g-3 text-r\">\r\n      上一审批阶段：\r\n    </div>\r\n    <div class=\"ui-g-3 text-l\">\r\n      {{mdzxxBean.preAppStep|codeValuePie:appStepOptions}}\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- <div class=\"ui-g-12\" style=\"text-align:center\">\r\n  <button pButton label=\"返回\" (click)=\"close()\" ></button>\r\n</div> -->"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/risk-infomation/list-details/list-details.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/risk-infomation/list-details/list-details.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail .ui-g-3 {\n  width: 12.5%;\n  padding: 0;\n  min-height: 1px; }\n\n.text-r {\n  text-align: right; }\n\n.text-l {\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy9yaXNrLWluZm9tYXRpb24vbGlzdC1kZXRhaWxzL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLXZpZXdcXHJpc2staW5mb21hdGlvblxcbGlzdC1kZXRhaWxzXFxsaXN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxZQUFZO0VBQ1osVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLXZpZXcvcmlzay1pbmZvbWF0aW9uL2xpc3QtZGV0YWlscy9saXN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsIHtcclxuICAgIC51aS1nLTMge1xyXG4gICAgICAgIHdpZHRoOiAxMi41JTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuICAgIH1cclxufVxyXG5cclxuLnRleHQtciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnRleHQtbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/risk-infomation/list-details/list-details.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/risk-infomation/list-details/list-details.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ListDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDetailsComponent", function() { return ListDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bean/custom-view.bean */ "./src/app/pages/tzb/custom/custom-view/bean/custom-view.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {ALL_IDEN_TYPE,AppStep,RegisterType,TranStatus,TzbankClientFlag,ApproveStatuss,BussType,SubBussType,GuaranteeMode,TranLoanFlag,EffLoanFlag,PayType,CreditType,LoanPurpuseCode,HandleResult,SubVetoType} from '../../../constant/custView.codeValue';
var ListDetailsComponent = /** @class */ (function () {
    function ListDetailsComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.kindDo = '';
        this.mdzxxBean = new _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_2__["MdzxxBean"]();
        this.approveStatusOptions = []; //审批状态
        this.appStepOptions = []; //审批阶段
        this.registerTypeOptions = []; //信息录入方式
        this.tranStatusOptions = []; //名单制状态
        this.tzbankClientFlagOptions = []; //是否我行客户
        this.allIdenTypeOptions = [];
        this.codeVal();
        this.approveStatusOptions = this.code['ApproveStatuss'];
        this.appStepOptions = this.code['AppStep'];
        this.registerTypeOptions = this.code['RegisterType'];
        this.tranStatusOptions = this.code['TranStatus'];
        this.tzbankClientFlagOptions = this.code['TzbankClientFlag'];
        this.allIdenTypeOptions = this.code['ALL_IDEN_TYPE'];
        //---------------------------------------上面是码值
    }
    ListDetailsComponent.prototype.ngOnInit = function () {
        delete this.allIdenTypeOptions[0];
        this.allIdenTypeOptions = this.allIdenTypeOptions;
    };
    ListDetailsComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.inValue && this.inValue != '') {
            var param = {
                pk: this.inValue.pk
            };
            this.httpService.BZ_1300300000102_LOAN(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.mdzxxBean = data;
                    _this.httpService.queryOrgById({ orgId: _this.mdzxxBean.appBranchNo }).subscribe(function (data) {
                        _this.mdzxxBean.appBranchNo = data.orgName;
                    });
                    _this.httpService.queryOrgById({ orgId: _this.mdzxxBean.orgId }).subscribe(function (data) {
                        _this.mdzxxBean.orgId = data.orgName;
                    });
                    _this.httpService.queryTellerById({ tellerId: _this.mdzxxBean.contactManagerId }).subscribe(function (data) {
                        _this.mdzxxBean.contactManagerId = data.tellerName;
                    });
                    _this.httpService.queryTellerById({ tellerId: _this.mdzxxBean.appUserId }).subscribe(function (data) {
                        _this.mdzxxBean.appUserId = data.tellerName;
                    });
                }
            });
        }
    };
    ListDetailsComponent.prototype.close = function () {
        this.outValue.emit(false);
    };
    //码值
    ListDetailsComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ListDetailsComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('in-value'),
        __metadata("design:type", Object)
    ], ListDetailsComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('key-label'),
        __metadata("design:type", Object)
    ], ListDetailsComponent.prototype, "keyLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('kind-do'),
        __metadata("design:type", String)
    ], ListDetailsComponent.prototype, "kindDo", void 0);
    ListDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-details',
            template: __webpack_require__(/*! ./list-details.component.html */ "./src/app/pages/tzb/custom/custom-view/risk-infomation/list-details/list-details.component.html"),
            styles: [__webpack_require__(/*! ./list-details.component.scss */ "./src/app/pages/tzb/custom/custom-view/risk-infomation/list-details/list-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], ListDetailsComponent);
    return ListDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-infomation.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-infomation.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basis-group\">\r\n  <div class=\"top\">\r\n    <div class=\"items\">\r\n      <div style=\"cursor:pointer\" class=\"item\" (click)=\"mdz()\" *ngIf=\"judgeField('X_CUST_M_P010_P148')\" [ngClass]=\"{'show':mdzzlxrs.length==0}\">名单制</div>\r\n      <div style=\"cursor:pointer\" class=\"item\" (click)=\"zjjywl()\" *ngIf=\"judgeField('X_CUST_M_P010_P149')\" [ngClass]=\"{'show':zjzjjywls.length==0}\">资金中介交易</div>\r\n      <div style=\"cursor:pointer\" class=\"item\" (click)=\"dkfj()\" *ngIf=\"judgeField('X_CUST_M_P010_P153')\" [ngClass]=\"{'show':dkfjInfo.length==0}\">贷款否决</div>\r\n      <div style=\"cursor:pointer\" class=\"item\" (click)=\"zxxx()\" *ngIf=\"judgeField('X_CUST_M_P010_P147')\" [ngClass]=\"{'show':zxxxInfo.length==0}\">征信信息</div>\r\n      <div style=\"cursor:pointer\" class=\"item\" *ngIf=\"judgeField('X_CUST_M_P010_P150')\" [ngClass]=\"{'show':precardArray.length==0&&appcardArray.length==0&&aftercardArray.length==0}\">\r\n        <span class=\"xypj-son\">信用评级\r\n          <ul>\r\n            <li class=\"xypj-li1\" (click)=\"xypj1()\" *ngIf=\"judgeField('X_CUST_M_P010_P150_P210')\">预筛选评分结果</li>\r\n            <li class=\"xypj-li2\" (click)=\"xypj2()\" *ngIf=\"judgeField('X_CUST_M_P010_P150_P211')\">信审评分结果</li>\r\n            <li class=\"xypj-li3\" (click)=\"xypj3()\" *ngIf=\"judgeField('X_CUST_M_P010_P150_P212')\">贷后评分结果</li>\r\n          </ul>\r\n        </span>\r\n      </div>\r\n      <div style=\"cursor:pointer\" class=\"item\" (click)=\"wbxx()\" *ngIf=\"judgeField('X_CUST_M_P010_P157')\">外部信息</div>\r\n      <div style=\"cursor:pointer\" class=\"item\" (click)=\"swxx()\" *ngIf=\"judgeField('X_CUST_M_P010_P154')\">税务信息</div>\r\n      <div style=\"cursor:pointer\" class=\"item\" (click)=\"fcxx()\" *ngIf=\"judgeField('X_CUST_M_P010_P156')\">房产信息</div>\r\n      <div style=\"cursor:pointer\" class=\"item\" (click)=\"fxqxx()\" *ngIf=\"judgeField('X_CUST_M_P010_P151')\" [ngClass]=\"{'show':fxqxxs.length==0}\">反洗钱信息</div>\r\n      <div style=\"cursor:pointer\" class=\"item\" (click)=\"khfxpg()\" *ngIf=\"judgeField('X_CUST_M_P010_P152')\" [ngClass]=\"{'show':khfxpgs.length==0}\">客户风险评估</div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- 名单制 -->\r\n  <div class=\"name-list ui-g-12\" id=\"mdzScroll\">\r\n    <div class=\"name-list ui-g-12\" id=\"mdz\" *ngIf=\"mdzzlxrs.length>0 && judgeField('X_CUST_M_P010_P148')\">\r\n      <header-title [Info]=\"'名单制'\"></header-title>\r\n      <!-- 名单制(主联系人和主管，以及总分行人员) -->\r\n      <!-- <div class=\"ui-g-12 info-son\">\r\n          <span>名单制</span>\r\n        </div> -->\r\n      <div class=\"text-c ui-g-12\">\r\n        <p-dataTable [value]=\"mdzzlxrs\" [emptyMessage]=\"tabMesg\" [style]=\"{'text-align':'center'}\">\r\n          <!-- <p-column>\r\n            <ng-template pTemplate=\"header\">\r\n              <p-checkbox name=\"groupname\" label=\"选择\" [(ngModel)]=\"checkAll\" binary=\"true\" (click)=\"checkAllClick()\"></p-checkbox>\r\n            </ng-template>\r\n            <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              <p-checkbox [(ngModel)]=\"col.checkBox\" (onChange)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n            </ng-template>\r\n          </p-column> -->\r\n          <p-column header=\"序号\" [style]=\"{'width':'5%'}\">\r\n            <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              {{i+1}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"reasonMsg\" header=\"录入原因\"></p-column>\r\n          <p-column field=\"description\" header=\"说明\" [style]=\"{'width':'5%'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <span *ngIf=\"col.description != undefined && col.description != '' && col.description != null\">{{col.description}}</span>\r\n              <span *ngIf=\"col.description == undefined || col.description == '' || col.description == null\">无</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"firstLevelList\" header=\"一级名单\" [style]=\"{'width':'8%'}\"></p-column>\r\n          <p-column field=\"secondLevelList\" header=\"二级名单\" [style]=\"{'width':'8%'}\"></p-column>\r\n          <p-column field=\"custRiskLevel\" header=\"风险等级\" [style]=\"{'width':'5%'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <a style=\"cursor:pointer;\" (click)=\"showRiskLevel(col)\">{{col.custRiskLevel|codeValuePie:custRiskLevelOptions}}</a>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"statusType\" header=\"状态\" [style]=\"{'width':'5%'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.statusType|codeValuePie:tranStatusOptions}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"registerType\" header=\"录入方式\" [style]=\"{'width':'9%'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.registerType|codeValuePie:registerTypeOptions}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"inputDate\" header=\"录入日期\" [style]=\"{'width':'9%'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.inputDate|timeValuePie}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"appBranchNo\" header=\"经办机构\" [style]=\"{'width':'10%'}\"></p-column>\r\n          <p-column field=\"operation\" header=\"操作\" [style]=\"{'width':'10%'}\">\r\n            <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              <span class=\"tabelDetailIco\" (click)=\"showListDetails(col)\" *ngIf=\"judgeField('X_CUST_M_P010_P148_P268')\">详情</span>\r\n            </ng-template>\r\n          </p-column>\r\n  \r\n        </p-dataTable>\r\n      </div>\r\n      <div class=\"name-listbtn ui-g-12\">\r\n        <button pButton type=\"button\" label=\"风险等级调整\" (click)=\"dangerTZ()\" *ngIf=\"judgeField('X_CUST_M_P010_P148_P269')\"></button>\r\n        <button pButton type=\"button\" label=\"失效申请\" (click)=\"dangerSX()\" *ngIf=\"judgeField('X_CUST_M_P010_P148_P270')\"></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <!-- 资金中介交易往来 -->\r\n  <div class=\"fund-intermediary ui-g-12\" id=\"zjjywl\" *ngIf=\"zjzjjywls.length>0 && judgeField('X_CUST_M_P010_P149')\">\r\n    <header-title [Info]=\"'资金中介交易'\" id=\"zjjywl\"></header-title>\r\n    <div class=\"text-c ui-g-12\">\r\n      <p-dataTable [value]=\"zjzjjywls\" styleClass=\"intermediary-table\" [emptyMessage]=\"tabMesg\" [style]=\"{'text-align':'center'}\">\r\n        <p-column field=\"txnDt\" header=\"交易日期\"></p-column>\r\n        <p-column field=\"txnOrgId\" header=\"交易机构\"> </p-column>\r\n        <p-column field=\"crDrInd\" header=\"借贷标志\"> </p-column>\r\n        <p-column field=\"txnBal\" header=\"交易金额（元）\" *ngIf=\"judgeField('X_CUST_M_P010_P149_F271')\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{col.txnBal|number:'1.2-2'}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"txnBal\" header=\"交易金额（元）\" *ngIf=\"!judgeField('X_CUST_M_P010_P149_F271')\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            ****\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"txnName\" header=\"交易名称\"> </p-column>\r\n        <p-column field=\"txnOpp\" header=\"交易对手\"> </p-column>\r\n        <p-column field=\"oppAcct\" header=\"对方账号\"> </p-column>\r\n      </p-dataTable>\r\n      <p-paginator rows=\"{{zjzjjywlspageSize}}\" totalRecords=\"{{zjzjjywlstotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginatezjzjjywls($event)\"\r\n        *ngIf=\"zjzjjywls.length>0\" [style]=\"{'position':'relative','z-index':0}\"></p-paginator>\r\n    </div>\r\n  </div>\r\n  <!-- 贷款否决 -->\r\n  <div class=\"fund-intermediary ui-g-12\" id=\"dkfj\" *ngIf=\"dkfjInfo.length>0 && judgeField('X_CUST_M_P010_P153')\">\r\n    <header-title [Info]=\"'贷款否决'\" id=\"dkfj\"></header-title>\r\n    <div class=\"text-c ui-g-12\">\r\n      <p-dataTable [value]=\"dkfjInfo\" styleClass=\"intermediary-table\" [emptyMessage]=\"tabMesg\" [style]=\"{'text-align':'center'}\">\r\n        <p-column field=\"operationType\" header=\"操作类型\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{col.operationType|codeValuePie:loanOperationTypeOptions}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"flowCode\" header=\"业务流程\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            <span *ngIf=\"col.flowCode != undefined && col.flowCode != '' && col.flowCode != null\">{{col.flowCode}}</span>\r\n            <span *ngIf=\"col.flowCode == undefined || col.flowCode == '' || col.flowCode == null\">无</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"bussType\" header=\"业务品种\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            <span *ngIf=\"col.bussType != undefined && col.bussType != '' && col.bussType != null\">{{col.bussType|codeValuePie:bussTypeOptions}}</span>\r\n            <span *ngIf=\"col.bussType == undefined || col.bussType == '' || col.bussType == null\">无</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"vetoType\" header=\"否决类型\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{col.vetoType|codeValuePie:loanVetoTypeOpyions}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"操作\" [style]=\"{'width':'10%'}\" *ngIf=\"judgeField('X_CUST_M_P010_P153_P101')\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            <span class=\"tabelDetailIco\" (click)=\"foujueDetail(col)\">详情</span>\r\n          </ng-template>\r\n        </p-column>\r\n      </p-dataTable>\r\n    </div>\r\n  </div>\r\n  <!-- 征信信息 -->\r\n  <div class=\"zhengxinPage ui-g-12\" id=\"zxxx222\">\r\n    <div class=\"zhengxinPage\" id=\"ZXXX\" *ngIf=\"zxxxInfo.length>0 && judgeField('X_CUST_M_P010_P147')\">\r\n      <header-title [Info]=\"'征信信息'\" id=\"ZXXX\"></header-title>\r\n      <p-dataTable [value]=\"zxxxInfo\" scrollable=\"true\" styleClass=\"intermediary-table\" [emptyMessage]=\"tabMesg\" [style]=\"{'text-align':'center'}\">\r\n        <p-column field=\"crdtReportNo\" header=\"征信报告编号\"></p-column>\r\n        <p-column field=\"clientName\" header=\"客户名称\"></p-column>\r\n        <!-- <p-column field=\"globalType\" header=\"证件类型\" [style]=\"{'width':'120px'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <span *ngIf=\"showReson\">{{col.globalType|codeValuePie:adminOptions}}</span>\r\n              <span *ngIf=\"!showReson\">{{col.globalType|codeValuePie:perOptions}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"globalId\" header=\"证件号码\" [style]=\"{'width':'220px'}\" *ngIf=\"judgeField('X_CUST_M_P010_P147_P212')\"></p-column>\r\n          <p-column field=\"globalId\" header=\"证件号码\" [style]=\"{'width':'220px'}\" *ngIf=\"!judgeField('X_CUST_M_P010_P147_P212')\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              ****\r\n            </ng-template>\r\n          </p-column> -->\r\n        <p-column field=\"queryName\" header=\"查询人\"></p-column>\r\n        <!-- <p-column field=\"departmentCode\" header=\"部门名称\" [style]=\"{'width':'120px'}\"></p-column> -->\r\n        <p-column field=\"queryDate\" header=\"查询日期\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{col.queryDate|timeValuePie}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"reason\" header=\"原因\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            <span *ngIf=\"showReson\">{{col.reason|codeValuePie:reasonQYOptions}}</span>\r\n            <span *ngIf=\"!showReson\">{{col.reason|codeValuePie:reasonGROptions}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"tranStatus\" header=\"交易状态\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            <span>{{col.tranStatus|codeValuePie:statusOptions}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <!-- <p-column field=\"clientNo\" header=\"客户号\" [style]=\"{'width':'150px'}\"></p-column> -->\r\n        <!-- <p-column field=\"bankSystemType\" header=\"银行标识\" [style]=\"{'width':'120px'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <span>{{col.bankSystemType|codeValuePie:bankOptions}}</span>\r\n            </ng-template>\r\n          </p-column> -->\r\n        <p-column header=\"操作\" [style]=\"{'width':'10%'}\" *ngIf=\"judgeField('X_CUST_M_P010_P147_P211')\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            <span class=\"tabelDetailIco\" (click)=\"zxDetail(col)\">详情</span>\r\n          </ng-template>\r\n        </p-column>\r\n      </p-dataTable>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- 信用评级-->\r\n  <div class=\"letter-pj ui-g-12\" id=\"xypj222\">\r\n    <div class=\"ui-g-12 xypj\" *ngIf=\"precardArray.length>0||appcardArray.length>0||aftercardArray.length>0\">\r\n    <div class=\"letter-pj ui-g-12\">\r\n      <header-title [Info]=\"'信用评级'\" *ngIf=\"precardArray.length>0 && judgeField('X_CUST_M_P010_P150')\"></header-title>\r\n    </div>\r\n    <!-- 预筛选评分结果 -->\r\n    <div class=\"ui-g-12 padding-0\" *ngIf=\"judgeField('X_CUST_M_P010_P150_P210')\">\r\n      <div class=\"letter-son letter-info ui-g-12 info-son\" id=\"xypj1\">\r\n        <img src=\"../../../../../../assets/layout/images/custom-view/risk-infomation/erjixiushi.png\" alt=\"\">\r\n        <span id=\"xypj1\">预筛选评分结果</span>\r\n      </div>\r\n      <div class=\"text-c ui-g-12\">\r\n        <p-dataTable [value]=\"precardArray\" [emptyMessage]=\"tabMesg\" [style]=\"{'text-align':'center'}\">\r\n          <p-column field=\"bussType\" header=\"业务品种\" [style]=\"{'width':'13%'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.bussType|codeValuePie:pingfen}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"applyAmt\" header=\"申请金额（元）\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{(col.applyAmt/1)|number:'1.2-2'}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"applyTerm\" header=\"申请期限\"> </p-column>\r\n          <p-column field=\"clientType\" header=\"角色\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.clientType|codeValuePie:clientTypeOptions}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"creidtValue\" header=\"评分\"> </p-column>\r\n          <p-column field=\"creidtLevel\" header=\"评级\"> </p-column>\r\n          <p-column field=\"preDecisionDesc\" header=\"建议\"> </p-column>\r\n          <p-column field=\"generateDate\" header=\"生成日期\"> </p-column>\r\n          <p-column header=\"操作\" [style]=\"{'width':'10%'}\" *ngIf=\"judgeField('X_CUST_M_P010_P150_P210_P211')\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <span class=\"tabelDetailIco\" (click)=\"xinyongPJ(col)\">详情</span>\r\n            </ng-template>\r\n          </p-column>\r\n        </p-dataTable>\r\n      </div>\r\n    </div>\r\n    <!-- 信审评分结果 -->\r\n    <div class=\"ui-g-12 padding-0\" *ngIf=\"appcardArray.length>0 && judgeField('X_CUST_M_P010_P150_P211')\">\r\n      <div class=\"letter-son letter-info ui-g-12 info-son\" id=\"xypj2\">\r\n        <img src=\"../../../../../../assets/layout/images/custom-view/risk-infomation/erjixiushi.png\" alt=\"\">\r\n        <span id=\"xypj2\">信审评分结果</span>\r\n      </div>\r\n      <div class=\"text-c ui-g-12\">\r\n        <p-dataTable [value]=\"appcardArray\" [emptyMessage]=\"tabMesg\" [style]=\"{'text-align':'center'}\">\r\n          <p-column field=\"bussType\" header=\"业务品种\" [style]=\"{'width':'13%'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.bussType|codeValuePie:pingfen}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"applyAmt\" header=\"申请金额（元）\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{(col.applyAmt/1)|number:'1.2-2'}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"clientType\" header=\"角色\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.clientType|codeValuePie:clientTypeOptions}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"creidtValue\" header=\"评分\"> </p-column>\r\n          <p-column field=\"creidtLevel\" header=\"评级\"> </p-column>\r\n          <p-column field=\"preDecisionDesc\" header=\"建议\"> </p-column>\r\n          <p-column field=\"generateDate\" header=\"生成日期\"> </p-column>\r\n          <p-column header=\"操作\" [style]=\"{'width':'10%'}\" *ngIf=\"judgeField('X_CUST_M_P010_P150_P211_P211')\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <span class=\"tabelDetailIco\" (click)=\"xinshenPF(col)\">详情</span>\r\n            </ng-template>\r\n          </p-column>\r\n        </p-dataTable>\r\n      </div>\r\n    </div>\r\n    <!-- 贷后评分结果 -->\r\n    <div class=\"ui-g-12 padding-0\" *ngIf=\"aftercardArray.length>0 && judgeField('X_CUST_M_P010_P150_P212')\">\r\n      <div class=\"letter-son letter-info ui-g-12 info-son\" id=\"xypj3\">\r\n        <img src=\"../../../../../../assets/layout/images/custom-view/risk-infomation/erjixiushi.png\" alt=\"\">\r\n        <span id=\"xypj3\">贷后评分结果</span>\r\n      </div>\r\n      <div class=\"text-c ui-g-12\">\r\n        <p-dataTable [value]=\"aftercardArray\" [emptyMessage]=\"tabMesg\" [style]=\"{'text-align':'center'}\">\r\n          <p-column field=\"bussType\" header=\"业务品种\" [style]=\"{'width':'13%'}\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.bussType|codeValuePie:pingfen}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"applyAmt\" header=\"贷款金额\" *ngIf=\"judgeField('X_CUST_M_P010_P150_P212_P212')\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{(col.applyAmt/1)|number:'1.2-2'}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"applyAmt\" header=\"贷款金额\" *ngIf=\"!judgeField('X_CUST_M_P010_P150_P212_P212')\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              ****\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"checkCreditDate\" header=\"止贷日期\"></p-column>\r\n          <p-column field=\"creidtValue\" header=\"评分\"></p-column>\r\n          <p-column field=\"creidtLevel\" header=\"评级\"></p-column>\r\n          <p-column field=\"orgQueue\" header=\"建议\"></p-column>\r\n          <p-column field=\"generateDate\" header=\"生成日期\"></p-column>\r\n        </p-dataTable>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n  <!-- 税务信息 -->\r\n  <div class=\"letter-pj tax-information ui-g-12\" id=\"swxx\" *ngIf=\"judgeField('X_CUST_M_P010_P154')\">\r\n    <header-title [Info]=\"'税务信息'\" id=\"swxx\"></header-title>\r\n    <span class=\"tax-btn\">\r\n      <!-- <button pButton type=\"button\" label=\"办税密码申请\" class=\"modifyBtn\"  (click)=\"getTaxBlock('1')\" *ngIf=\"judgeField('X_CUST_M_P010_P154_P273')\"></button> -->\r\n      <button pButton type=\"button\" label=\"银税授权申请\" (click)=\"getTaxBlock('2')\" *ngIf=\"judgeField('X_CUST_M_P010_P154_P274')\"></button>\r\n      <button pButton type=\"button\" label=\"外部信息\" (click)=\"wbxx()\" *ngIf=\"judgeField('X_CUST_M_P010_P154_P275')\"></button>\r\n    </span>\r\n    <div class=\"ui-g-12\">\r\n      <div *ngIf=\"taxBlock\">\r\n        <div class=\"ui-g-12 info-son\">\r\n          <span class=\"line\"></span>\r\n          <span>网上办税服务厅密码申请</span>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <form [formGroup]=\"taxForm\">\r\n            <div class=\"require-content\">\r\n              <div class=\"require1\">\r\n                <div class=\"require-left\">\r\n                  <label>纳税人识别号：</label>\r\n                  <input type=\"text\" pInputText name=\"taxpayerIdentNum\" formControlName=\"taxpayerIdentNum\" [(ngModel)]=\"passwordForTax.taxpayerIdentNum\"\r\n                  />\r\n                  <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!taxForm.controls['taxpayerIdentNum'].valid&&taxForm.controls['taxpayerIdentNum'].dirty\">\r\n                    纳税人识别号不能为空!\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"require1\">\r\n                <div class=\"require-left\">\r\n                  <label>法定代表人证件号码：</label>\r\n                  <input type=\"text\" pInputText name=\"legalRepresentNum\" formControlName=\"legalRepresentNum\" [(ngModel)]=\"passwordForTax.legalRepresentNum\"\r\n                  />\r\n                  <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!taxForm.controls['legalRepresentNum'].valid&&taxForm.controls['legalRepresentNum'].dirty\">\r\n                    法定代表人证件号码不能为空!\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"require1\">\r\n                <div class=\"require-left\">\r\n                  <label>短信内容：</label>\r\n                  <input type=\"text\" pInputText name=\"textMessage\" formControlName=\"textMessage\" [(ngModel)]=\"passwordForTax.textMessage\" readonly/>\r\n                </div>\r\n              </div>\r\n              <div class=\"require1\">\r\n                <div class=\"require-left\">\r\n                  <label>发送手机号码：</label>\r\n                  <input type=\"text\" pInputText name=\"recPhoneNo\" formControlName=\"recPhoneNo\" [(ngModel)]=\"passwordForTax.recPhoneNo\" maxlength=\"11\"\r\n                  />\r\n                  <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!taxForm.controls['recPhoneNo'].valid&&taxForm.controls['recPhoneNo'].dirty\">\r\n                    发送手机号码不能为空!\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"btn1\">\r\n                <button pButton type=\"button\" label=\"办税密码申请\" class=\"modifyBtn\" (click)=\"getTaxPassword()\"></button>\r\n              </div>\r\n              <div class=\"prompt\">\r\n                {{retMsg}}\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- 查询 -->\r\n      <div *ngIf=\"missionBlock\">\r\n        <div class=\"ui-g-12 info-son\">\r\n          <span>查询</span>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <form [formGroup]=\"searchTaxForm\">\r\n            <div class=\"require-content\">\r\n              <div class=\"require1\">\r\n                <div class=\"require-left\">\r\n                  <label>纳税人识别号：</label>\r\n                  <input type=\"text\" pInputText name=\"taxpayerIdCode\" formControlName=\"taxpayerIdCode\" [(ngModel)]=\"searchTax.taxpayerIdCode\"\r\n                  />\r\n                  <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!searchTaxForm.controls['taxpayerIdCode'].valid&&searchTaxForm.controls['taxpayerIdCode'].dirty\">\r\n                    纳税人识别号不能为空!\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"require1\">\r\n                <div class=\"require-left\">\r\n                  <label>网上办税服务厅密码：</label>\r\n                  <input type=\"password\" pInputText name=\"password\" formControlName=\"password\" [(ngModel)]=\"searchTax.password\" />\r\n                  <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!searchTaxForm.controls['password'].valid&&searchTaxForm.controls['password'].dirty\">\r\n                    网上办税服务厅密码不能为空!\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"require1\">\r\n                <div class=\"require-left\">\r\n                  <label>法定代表人证件号码：</label>\r\n                  <input type=\"text\" pInputText name=\"globalId\" formControlName=\"globalId\" [(ngModel)]=\"searchTax.globalId\" />\r\n                  <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!searchTaxForm.controls['globalId'].valid&&searchTaxForm.controls['globalId'].dirty\">\r\n                    法定代表人证件号码不能为空!\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"btn1\">\r\n                <button pButton type=\"button\" label=\"银税授权申请\" (click)=\"taxSearch()\"></button>\r\n                <!-- <button pButton type=\"button\" label=\"外部信息\" (click)=\"wbxx()\"></button> -->\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- 反洗钱信息-->\r\n  <div class=\"fund-intermediary ui-g-12\" id=\"fxqxx\" *ngIf=\"fxqxxs.length>0 && judgeField('X_CUST_M_P010_P151')\">\r\n    <header-title [Info]=\"'反洗钱信息'\" id=\"fxqxx\"></header-title>\r\n    <div class=\"text-c ui-g-12\">\r\n      <p-dataTable [value]=\"fxqxxs\" styleClass=\"intermediary-table\" [emptyMessage]=\"tabMesg\" [style]=\"{'text-align':'center'}\">\r\n        <p-column field=\"ifSuspicious\" header=\"是否上报可疑交易\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{col.ifSuspicious|codeValuePie:panduanOptions}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"ifBlacklist\" header=\"是否监控名单\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{col.ifBlacklist|codeValuePie:panduanOptions}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"riskLevel\" header=\"风险等级\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{col.riskLevel|codeValuePie:fxdjOptions}}\r\n          </ng-template>\r\n        </p-column>\r\n        <!-- <p-column field=\"a\" header=\"审核日期\"> </p-column> -->\r\n      </p-dataTable>\r\n      <!-- <p-paginator rows=\"{{fxqxxspageSize}}\" totalRecords=\"{{fxqxxstotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginatefxqxxs($event)\"></p-paginator> -->\r\n    </div>\r\n  </div>\r\n  <!-- 客户风险评估-->\r\n  <div class=\"letter-pj ui-g-12\" id=\"khfxpg\" *ngIf=\"khfxpgs.length>0 && judgeField('X_CUST_M_P010_P152')\">\r\n    <header-title [Info]=\"'客户风险评估'\" id=\"khfxpg\"></header-title>\r\n    <div class=\"text-c ui-g-12\">\r\n      <p-dataTable [value]=\"khfxpgs\" [emptyMessage]=\"tabMesg\" [style]=\"{'text-align':'center'}\">\r\n        <p-column field=\"riskAsseType\" header=\"理财风险评估类型\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{col.riskAsseType|codeValuePie:riskTypeOptions}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"riskAsseDate\" header=\"风险评估日期\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{col.riskAsseDate|timeValuePie}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"effDate\" header=\"评估失效日期\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{col.effDate|timeValuePie}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"evalCustMgr\" header=\"评估人\"> </p-column>\r\n      </p-dataTable>\r\n    </div>\r\n  </div>\r\n  <!-- 贷款否决 -->\r\n  <!-- <div class=\"fund-intermediary ui-g-12\" id=\"dkfj\">\r\n    <header-title [Info]=\"'贷款否决'\" id=\"dkfj\"></header-title>\r\n    <div class=\"text-c ui-g-12\">\r\n      <p-dataTable [value]=\"dkfjInfo\" styleClass=\"intermediary-table\" [emptyMessage]=\"tabMesg\">\r\n        <p-column field=\"operationType\" header=\"操作类型\" [style]=\"{'text-align':'center'}\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{col.operationType|codeValuePie:loanOperationTypeOptions}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"flowCode\" header=\"业务流程\" [style]=\"{'text-align':'center'}\"></p-column>\r\n        <p-column field=\"bussType\" header=\"业务品种\" [style]=\"{'text-align':'center'}\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{col.bussType|codeValuePie:bussTypeOptions}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"vetoType\" header=\"否决类型\" [style]=\"{'text-align':'center'}\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{col.vetoType|codeValuePie:loanVetoTypeOpyions}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"操作\" [style]=\"{'text-align':'center'}\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            <span class=\"tabelDetailIco\" (click)=\"foujueDetail(col)\">详情</span>\r\n          </ng-template>\r\n        </p-column>\r\n      </p-dataTable>\r\n    </div>\r\n  </div> -->\r\n  <!-- 征信信息 -->\r\n  <!-- <div class=\"zhengxinPage ui-g-12\" id=\"ZXXX\">\r\n    <header-title [Info]=\"'征信信息'\" id=\"ZXXX\"></header-title>\r\n    <div class=\"text-c ui-g-12\">\r\n      <p-dataTable [value]=\"zxxxInfo\" styleClass=\"intermediary-table\" [emptyMessage]=\"tabMesg\">\r\n        <p-column field=\"crdtReportNo\" header=\"征信报告编号\" [style]=\"{'text-align':'center'}\"></p-column>\r\n        <p-column field=\"clientName\" header=\"客户名称\" [style]=\"{'text-align':'center'}\"></p-column>\r\n        <p-column field=\"globalType\" header=\"证件类型\" [style]=\"{'text-align':'center'}\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            <span *ngIf=\"showReson\">{{col.globalType|codeValuePie:adminOptions}}</span>\r\n            <span *ngIf=\"!showReson\">{{col.globalType|codeValuePie:perOptions}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"globalId\" header=\"证件号码\" [style]=\"{'text-align':'center'}\"></p-column>\r\n        <p-column field=\"queryName\" header=\"查询人户名\" [style]=\"{'text-align':'center'}\"></p-column>\r\n        <p-column field=\"departmentCode\" header=\"部门代码\" [style]=\"{'text-align':'center'}\"></p-column>\r\n        <p-column field=\"queryDate\" header=\"查询日期\" [style]=\"{'text-align':'center'}\"></p-column>\r\n        <p-column field=\"reason\" header=\"原因\" [style]=\"{'text-align':'center'}\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            <span *ngIf=\"showReson\">{{col.reason|codeValuePie:reasonQYOptions}}</span>\r\n            <span *ngIf=\"!showReson\">{{col.reason|codeValuePie:reasonGROptions}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"tranStatus\" header=\"交易状态\" [style]=\"{'text-align':'center'}\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            <span>{{col.tranStatus|codeValuePie:statusOptions}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"clientNo\" header=\"客户号\" [style]=\"{'text-align':'center'}\"></p-column>\r\n        <p-column field=\"bankSystemType\" header=\"银行标识\" [style]=\"{'text-align':'center'}\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            <span>{{col.bankSystemType|codeValuePie:bankOptions}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"操作\" [style]=\"{'text-align':'center'}\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            <span class=\"tabelDetailIco\" (click)=\"zxDetail(col)\">详情</span>\r\n          </ng-template>\r\n        </p-column>\r\n      </p-dataTable>\r\n    </div>\r\n  </div> -->\r\n  <!-- 税务信息 -->\r\n  <!-- <div class=\"letter-pj tax-information ui-g-12\" id=\"swxx\">\r\n    <header-title [Info]=\"'税务信息'\" id=\"swxx\"></header-title>\r\n    <span class=\"tax-btn\">\r\n          <button pButton type=\"button\" label=\"办税密码申请\" class=\"modifyBtn\"  (click)=\"getTaxBlock('1')\" *ngIf=\"judgeField('X_CUST_M_P010_P154_P273')\"></button>\r\n          <button pButton type=\"button\" label=\"银税授权申请\" (click)=\"getTaxBlock('2')\" *ngIf=\"judgeField('X_CUST_M_P010_P154_P274')\"></button>\r\n          <button pButton type=\"button\" label=\"外部信息\" (click)=\"wbxx()\" *ngIf=\"judgeField('X_CUST_M_P010_P154_P275')\"></button>\r\n        </span>\r\n    <div class=\"ui-g-12\">\r\n      <div *ngIf=\"taxBlock\">\r\n        <div class=\"ui-g-12 info-son\">\r\n          <span class=\"line\"></span>\r\n          <span>网上办税服务厅密码申请</span>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <form [formGroup]=\"taxForm\">\r\n            <div class=\"require-content\">\r\n              <div class=\"require1\">\r\n                <div class=\"require-left\">\r\n                  <label>纳税人识别号：</label>\r\n                  <input type=\"text\" pInputText name=\"taxpayerIdentNum\" formControlName=\"taxpayerIdentNum\" [(ngModel)]=\"passwordForTax.taxpayerIdentNum\"\r\n                  />\r\n                  <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!taxForm.controls['taxpayerIdentNum'].valid&&taxForm.controls['taxpayerIdentNum'].dirty\">\r\n                    纳税人识别号不能为空!\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"require1\">\r\n                <div class=\"require-left\">\r\n                  <label>法定代表人证件号码：</label>\r\n                  <input type=\"text\" pInputText name=\"legalRepresentNum\" formControlName=\"legalRepresentNum\" [(ngModel)]=\"passwordForTax.legalRepresentNum\"\r\n                  />\r\n                  <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!taxForm.controls['legalRepresentNum'].valid&&taxForm.controls['legalRepresentNum'].dirty\">\r\n                    法定代表人证件号码不能为空!\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"require1\">\r\n                <div class=\"require-left\">\r\n                  <label>短信内容：</label>\r\n                  <input type=\"text\" pInputText name=\"textMessage\" formControlName=\"textMessage\" [(ngModel)]=\"passwordForTax.textMessage\" readonly/>\r\n                </div>\r\n              </div>\r\n              <div class=\"require1\">\r\n                <div class=\"require-left\">\r\n                  <label>发送手机号码：</label>\r\n                  <input type=\"text\" pInputText name=\"recPhoneNo\" formControlName=\"recPhoneNo\" [(ngModel)]=\"passwordForTax.recPhoneNo\" maxlength=\"11\"\r\n                  />\r\n                  <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!taxForm.controls['recPhoneNo'].valid&&taxForm.controls['recPhoneNo'].dirty\">\r\n                    发送手机号码不能为空!\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"btn1\">\r\n                <button pButton type=\"button\" label=\"办税密码申请\" class=\"modifyBtn\" (click)=\"getTaxPassword()\"></button>\r\n              </div>\r\n              <div class=\"prompt\">\r\n                {{retMsg}}\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"missionBlock\">\r\n        <div class=\"ui-g-12 info-son\">\r\n          <span>查询</span>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <form [formGroup]=\"searchTaxForm\">\r\n            <div class=\"require-content\">\r\n              <div class=\"require1\">\r\n                <div class=\"require-left\">\r\n                  <label>纳税人识别号：</label>\r\n                  <input type=\"text\" pInputText name=\"taxpayerIdCode\" formControlName=\"taxpayerIdCode\" [(ngModel)]=\"searchTax.taxpayerIdCode\"\r\n                  />\r\n                  <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!searchTaxForm.controls['taxpayerIdCode'].valid&&searchTaxForm.controls['taxpayerIdCode'].dirty\">\r\n                    纳税人识别号不能为空!\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"require1\">\r\n                  <div class=\"require-left\">\r\n                    <label>网上办税服务厅密码：</label>\r\n                    <input type=\"password\" pInputText name=\"password\" formControlName=\"password\" [(ngModel)]=\"searchTax.password\"/>\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!searchTaxForm.controls['password'].valid&&searchTaxForm.controls['password'].dirty\">\r\n                        网上办税服务厅密码不能为空!\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n              <div class=\"require1\">\r\n                <div class=\"require-left\">\r\n                  <label>法定代表人证件号码：</label>\r\n                  <input type=\"text\" pInputText name=\"globalId\" formControlName=\"globalId\" [(ngModel)]=\"searchTax.globalId\" />\r\n                  <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!searchTaxForm.controls['globalId'].valid&&searchTaxForm.controls['globalId'].dirty\">\r\n                    法定代表人证件号码不能为空!\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"btn1\">\r\n                <button pButton type=\"button\" label=\"银税授权申请\" (click)=\"taxSearch()\"></button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n</div>\r\n<!-- <div class=\"aa\" style=\"height:600px;overflow:scroll;\"> -->\r\n<p-dialog *ngIf=\"addDisplay\" [(visible)]=\"addDisplay\" width=\"800\" modal=\"modal\" (onHide)=\"addCall($event)\">\r\n  <p-header>\r\n    {{addUpHeader}}\r\n  </p-header>\r\n  <app-list-details (outValue)=\"addCall($event)\" [in-value]=\"inValue\" [key-label]=\"keyValue\" [kind-do]=\"kindDo\"></app-list-details>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"addDisplay1\" [(visible)]=\"addDisplay1\" width=\"1200\" modal=\"modal\" (onHide)=\"addCall($event)\">\r\n  <p-header>\r\n    {{addUpHeader}}\r\n  </p-header>\r\n  <app-risk-level (outValue)=\"addCall($event)\" [in-value]=\"inValue\" [key-label]=\"keyValue\" [kind-do]=\"kindDo\"></app-risk-level>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"detailFJ\" [(visible)]=\"detailFJ\" width=\"900\" modal=\"modal\" (onHide)=\"addCall($event)\">\r\n  <p-header>\r\n    {{addUpHeader}}\r\n  </p-header>\r\n  <foujue-detail (outValue)=\"addCall($event)\" [in-value]=\"inValue\"></foujue-detail>\r\n</p-dialog>\r\n<!-- </div> -->\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-infomation.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-infomation.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basis-group {\n  font-size: 14px;\n  background-color: #fafafa; }\n  .basis-group .top {\n    padding-top: 12px;\n    width: 98%;\n    margin: 0 auto; }\n  .basis-group .top .items {\n      display: flex;\n      height: 35px;\n      flex-direction: row;\n      background-color: #e5e5e5;\n      border: 1px solid #c6c6c6;\n      border-radius: 3px; }\n  .basis-group .top .items .item {\n        color: #19b0c8;\n        flex-grow: 1;\n        align-items: center;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        text-align: center;\n        border-right: 1px solid #c6c6c6; }\n  .basis-group .top .items .item:hover {\n          background: #fafafa; }\n  .basis-group .top .items .item:last-child {\n        border-right: none; }\n  .basis-group .label {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    flex-direction: column;\n    justify-content: center; }\n  .basis-group .ckresult {\n    display: flex;\n    flex-direction: column;\n    width: 100%; }\n  .basis-group .ckresult .title {\n      display: flex;\n      flex-direction: row; }\n  .basis-group .ckresult .title span {\n        flex: 1;\n        text-align: center;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: left;\n        margin: 0 2px;\n        height: 35px;\n        line-height: 35px; }\n  .basis-group .ckresult .title span b {\n          border-radius: 50%;\n          border: 1px solid gray;\n          width: 20%;\n          text-align: center;\n          display: block; }\n  .basis-group .btn-center {\n    text-align: center; }\n  .basis-group .info-header {\n    padding-top: 10px; }\n  .basis-group .info-son {\n    font-weight: bold; }\n  .basis-group .tableitem {\n    padding-top: 10px; }\n  .basis-group .maintain-btn {\n    text-align: right; }\n  .basis-group .a-style {\n    text-align: right; }\n  .basis-group .titlestyle {\n    text-align: center; }\n  .basis-group .title-bg {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n  .basis-group .ui-g {\n    text-align: center;\n    padding-top: 1px; }\n  .basis-group .ui-g .at-center {\n      display: flex;\n      align-items: center;\n      text-align: center;\n      flex-direction: column;\n      justify-content: center; }\n  .basis-group .ckresult {\n    display: flex;\n    flex-direction: column;\n    width: 100%; }\n  .basis-group .ckresult .title {\n      display: flex;\n      flex-direction: row; }\n  .basis-group .ckresult .title span {\n        flex: 1;\n        text-align: center;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: left;\n        margin: 0 2px;\n        height: 35px;\n        line-height: 35px; }\n  .basis-group .ckresult .title span b {\n          border-radius: 50%;\n          border: 1px solid gray;\n          width: 20%;\n          text-align: center;\n          display: block; }\n  .basis-group .header-title {\n    width: 100%;\n    height: 34px;\n    background-color: #f2f2f2;\n    padding: 7px 0 7px 20px;\n    box-sizing: border-box;\n    display: flex;\n    border-bottom: 1px solid #D7D6D6;\n    justify-content: space-between; }\n  .basis-group .header-title .title-right {\n      display: flex; }\n  .basis-group .header-title .title-right .line {\n        width: 5px;\n        height: 19px;\n        color: #fff;\n        display: inline-block;\n        margin-right: 7px; }\n  .basis-group .header-title .title-right .text {\n        flex: 1;\n        height: 20px;\n        font-size: 14px;\n        line-height: 20px;\n        display: block;\n        font-weight: bold; }\n  .basis-group .header-title a {\n      margin-right: 10px;\n      text-align: center;\n      outline: none;\n      border-radius: 4px;\n      width: 80px; }\n  .basis-group .header-title .btn-look {\n      margin-right: 5px;\n      text-align: center;\n      outline: none;\n      border-radius: 5px;\n      width: 100px; }\n  .basis-group .require-content {\n    padding: 20px 0; }\n  .basis-group .require-content .search-text {\n      margin-left: 109px;\n      margin-bottom: 20px;\n      color: #333399; }\n  .basis-group .require-content .require1 {\n      display: flex;\n      margin-bottom: 30px; }\n  .basis-group .require-content .require1 .require-left,\n      .basis-group .require-content .require1 .require-right {\n        width: 50%;\n        display: flex; }\n  .basis-group .require-content .require1 .require-left label,\n        .basis-group .require-content .require1 .require-right label {\n          width: 180px;\n          display: block;\n          text-align: right;\n          line-height: 35px; }\n  .basis-group .require-content .require1 .require-left .select,\n        .basis-group .require-content .require1 .require-right .select {\n          width: 50%; }\n  .basis-group .require-content .btn1 {\n      width: 35%;\n      text-align: center; }\n  .basis-group .require-content .prompt {\n      color: red;\n      margin: 30px 0 10px 10%; }\n  .basis-group .ui-g-12 {\n    background-color: #fafafa; }\n  .basis-group .xypj-son {\n    position: relative;\n    width: 100%; }\n  .basis-group .xypj-son ul {\n      opacity: 0;\n      position: absolute;\n      top: 143%;\n      width: 150%;\n      padding: 0;\n      margin: 0;\n      z-index: 10;\n      box-shadow: 5px 5px 5px #e4e4e4; }\n  .basis-group .xypj-son ul li {\n        list-style-type: none;\n        text-align: left;\n        padding-left: 18%;\n        height: 35px;\n        line-height: 35px;\n        background-color: #fafafa; }\n  .basis-group .xypj-son:hover {\n    color: #27aec4; }\n  .basis-group .xypj-son:hover ul {\n      opacity: 1; }\n  .basis-group .xypj-son:hover ul li {\n        color: #444; }\n  .basis-group .xypj-son:hover ul .xypj-li1:hover {\n        background-color: #e9f7f8; }\n  .basis-group .xypj-son:hover ul .xypj-li2:hover {\n        background-color: #e9f7f8; }\n  .basis-group .xypj-son:hover ul .xypj-li3:hover {\n        background-color: #e9f7f8; }\n  .basis-group .name-list {\n    background-color: #fafafa;\n    box-shadow: none; }\n  .basis-group .name-list .text-c {\n      text-align: center; }\n  .basis-group .name-list .name-listbtn button {\n      background: #d7e9e8;\n      color: #19b0c8;\n      box-shadow: none;\n      border: 1px solid #a7d3d9;\n      border-bottom: 2px solid #b5d8dd; }\n  .basis-group .fund-intermediary {\n    background-color: #fafafa; }\n  .basis-group .fund-intermediary .text-c {\n      text-align: center;\n      padding: 0;\n      background-color: #f7f7f7; }\n  .basis-group .fund-intermediary .header-title {\n      background-color: #000; }\n  .basis-group .letter-pj .letter-info {\n    height: 30px;\n    line-height: 18px;\n    padding-left: .8em; }\n  .basis-group .letter-pj .letter-son {\n    border-top: 1px dashed #e8e9eb; }\n  .basis-group .letter-pj .text-c {\n    text-align: center; }\n  .basis-group .letter-pj .xypj {\n    margin: 0;\n    padding: 0; }\n  .basis-group .tax-information {\n    position: relative; }\n  .basis-group .tax-information .tax-btn {\n      position: absolute;\n      top: 16px;\n      right: 8px; }\n  .basis-group .zhengxinPage .text-c {\n    text-align: center; }\n  #zjjywl .header-title {\n  background-color: #333399 !important; }\n  .show {\n  color: #b8b8b8 !important;\n  pointer-events: none; }\n  .padding-0 {\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy9yaXNrLWluZm9tYXRpb24vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tdmlld1xccmlzay1pbmZvbWF0aW9uXFxyaXNrLWluZm9tYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YseUJBQXlCLEVBQUE7RUFGN0I7SUFJUSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGNBQWMsRUFBQTtFQU50QjtNQVFZLGFBQWE7TUFDYixZQUFZO01BQ1osbUJBQW1CO01BQ25CLHlCQUF5QjtNQUN6Qix5QkFBeUI7TUFDekIsa0JBQWtCLEVBQUE7RUFiOUI7UUFnQmdCLGNBQWM7UUFDZCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQiwrQkFBK0IsRUFBQTtFQXZCL0M7VUF5Qm9CLG1CQUFtQixFQUFBO0VBekJ2QztRQTZCZ0Isa0JBQ0osRUFBQTtFQTlCWjtJQW9DUSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsdUJBQXVCLEVBQUE7RUF4Qy9CO0lBMkNRLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVyxFQUFBO0VBN0NuQjtNQStDWSxhQUFhO01BQ2IsbUJBQW1CLEVBQUE7RUFoRC9CO1FBa0RnQixPQUFPO1FBQ1Asa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsWUFBWTtRQUNaLGlCQUFpQixFQUFBO0VBMURqQztVQTREb0Isa0JBQWtCO1VBQ2xCLHNCQUFzQjtVQUN0QixVQUFVO1VBQ1Ysa0JBQWtCO1VBQ2xCLGNBQWMsRUFBQTtFQWhFbEM7SUFzRVEsa0JBQWtCLEVBQUE7RUF0RTFCO0lBeUVRLGlCQUFpQixFQUFBO0VBekV6QjtJQTZFUSxpQkFBaUIsRUFBQTtFQTdFekI7SUFnRlEsaUJBQWlCLEVBQUE7RUFoRnpCO0lBbUZRLGlCQUFpQixFQUFBO0VBbkZ6QjtJQXNGUSxpQkFBaUIsRUFBQTtFQXRGekI7SUF5RlEsa0JBQWtCLEVBQUE7RUF6RjFCO0lBOEZRLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCLEVBQUE7RUFoRy9CO0lBbUdRLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtFQXBHeEI7TUFzR1ksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsc0JBQXNCO01BQ3RCLHVCQUF1QixFQUFBO0VBMUduQztJQThHUSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVcsRUFBQTtFQWhIbkI7TUFrSFksYUFBYTtNQUNiLG1CQUFtQixFQUFBO0VBbkgvQjtRQXFIZ0IsT0FBTztRQUNQLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLFlBQVk7UUFDWixpQkFBaUIsRUFBQTtFQTdIakM7VUErSG9CLGtCQUFrQjtVQUNsQixzQkFBc0I7VUFDdEIsVUFBVTtVQUNWLGtCQUFrQjtVQUNsQixjQUFjLEVBQUE7RUFuSWxDO0lBeUlRLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyw4QkFBOEIsRUFBQTtFQWhKdEM7TUFrSlksYUFBYSxFQUFBO0VBbEp6QjtRQW9KZ0IsVUFBVTtRQUNWLFlBQVk7UUFDWixXQUFXO1FBQ1gscUJBQXFCO1FBQ3JCLGlCQUFpQixFQUFBO0VBeEpqQztRQTJKZ0IsT0FBTztRQUNQLFlBQVk7UUFDWixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxpQkFBaUIsRUFBQTtFQWhLakM7TUFvS1ksa0JBQWtCO01BRWxCLGtCQUFrQjtNQUNsQixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTtFQXpLdkI7TUE0S1ksaUJBQWlCO01BRWpCLGtCQUFrQjtNQUNsQixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLFlBQVksRUFBQTtFQWpMeEI7SUF3TFEsZUFBZSxFQUFBO0VBeEx2QjtNQTBMWSxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGNBQWMsRUFBQTtFQTVMMUI7TUErTFksYUFBYTtNQUNiLG1CQUFtQixFQUFBO0VBaE0vQjs7UUFtTWdCLFVBQVU7UUFDVixhQUFhLEVBQUE7RUFwTTdCOztVQXNNb0IsWUFBWTtVQUNaLGNBQWM7VUFDZCxpQkFBaUI7VUFDakIsaUJBQWlCLEVBQUE7RUF6TXJDOztVQTRNb0IsVUFBVSxFQUFBO0VBNU05QjtNQWlOWSxVQUFVO01BQ1Ysa0JBQWtCLEVBQUE7RUFsTjlCO01BcU5ZLFVBQVU7TUFDVix1QkFBdUIsRUFBQTtFQXRObkM7SUEwTlEseUJBQXlCLEVBQUE7RUExTmpDO0lBOE5RLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7RUEvTm5CO01BaU9ZLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsU0FBUztNQUNULFdBQVc7TUFDWCxVQUFVO01BQ1YsU0FBUztNQUNULFdBQVc7TUFDWCwrQkFBK0IsRUFBQTtFQXhPM0M7UUEwT2dCLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFlBQVk7UUFDWixpQkFBaUI7UUFDakIseUJBQXlCLEVBQUE7RUEvT3pDO0lBcVBRLGNBQWMsRUFBQTtFQXJQdEI7TUF1UFksVUFBVSxFQUFBO0VBdlB0QjtRQXlQZ0IsV0FBVyxFQUFBO0VBelAzQjtRQTRQZ0IseUJBQXlCLEVBQUE7RUE1UHpDO1FBK1BnQix5QkFBeUIsRUFBQTtFQS9QekM7UUFrUWdCLHlCQUF5QixFQUFBO0VBbFF6QztJQXVRUSx5QkFBeUI7SUFFekIsZ0JBQWdCLEVBQUE7RUF6UXhCO01BMlFZLGtCQUNKLEVBQUE7RUE1UVI7TUErUWdCLG1CQUFtQjtNQUNuQixjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixnQ0FBZ0MsRUFBQTtFQW5SaEQ7SUF3UlEseUJBQXlCLEVBQUE7RUF4UmpDO01BMlJZLGtCQUFrQjtNQUNsQixVQUFVO01BQ1YseUJBQXlCLEVBQUE7RUE3UnJDO01BaVNZLHNCQUNKLEVBQUE7RUFsU1I7SUFzU1ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtFQXhTOUI7SUEyU1ksOEJBQThCLEVBQUE7RUEzUzFDO0lBOFNZLGtCQUFrQixFQUFBO0VBOVM5QjtJQWlUWSxTQUFRO0lBQ1IsVUFBUyxFQUFBO0VBbFRyQjtJQXNUUSxrQkFBa0IsRUFBQTtFQXRUMUI7TUF3VFksa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxVQUFVLEVBQUE7RUExVHRCO0lBK1RZLGtCQUFrQixFQUFBO0VBWTlCO0VBRVEsb0NBQ0osRUFBQTtFQUVKO0VBQ0cseUJBQXlCO0VBQ3pCLG9CQUFvQixFQUFBO0VBR3ZCO0VBQ0ksVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy9yaXNrLWluZm9tYXRpb24vcmlzay1pbmZvbWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2lzLWdyb3VwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAudG9wIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIC5pdGVtcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M2YzZjNjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogIzVkNWQ1ZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzZjNmM2O1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NEQyO1xyXG4gICAgICAgIC8vIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLy8gbWFyZ2luOiAwIDVweDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNrcmVzdWx0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuLWNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmluZm8taGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5pbmZvLXNvbiB7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjRThFNUU1O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlaXRlbSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubWFpbnRhaW4tYnRuIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5hLXN0eWxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC50aXRsZXN0eWxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGl0bGUtYmcge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDk0RDI7XHJcbiAgICAgICAgLy8gY29sb3I6I2ZmZjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudWktZyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICAgICAgLmF0LWNlbnRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLy8gbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNrcmVzdWx0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMCA3cHggMjBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEN0Q2RDY7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIC50aXRsZS1yaWdodCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7IC8vIGJhY2tncm91bmQ6ICMwMDk0RDI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogIzg3Y2VmYTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWxvb2sge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDsgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogIzg3Y2VmYTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9IC8vIC5iZyB7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTREMjtcclxuICAgIC8vICAgICBjb2xvcjojZmZmO1xyXG4gICAgLy8gfVxyXG4gICAgLnJlcXVpcmUtY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgIC5zZWFyY2gtdGV4dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMDlweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzMzOTk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZXF1aXJlMSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIC5yZXF1aXJlLWxlZnQsXHJcbiAgICAgICAgICAgIC5yZXF1aXJlLXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bjEge1xyXG4gICAgICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9tcHQge1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMCAxMHB4IDEwJTtcclxuICAgICAgICB9XHJcbiAgICB9IC8vIDIuN+mHjeeUu+mhtemdolxyXG4gICAgLnVpLWctMTIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG4gICAgLnh5cGotc29uIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMTQzJTtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4ICNlNGU0ZTQ7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE4JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC54eXBqLXNvbjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICMyN2FlYzQ7XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAueHlwai1saTE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjdmODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAueHlwai1saTI6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjdmODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAueHlwai1saTM6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjdmODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gLy8g5ZCN5Y2V5Yi2XHJcbiAgICAubmFtZS1saXN0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgIDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIC50ZXh0LWMge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hbWUtbGlzdGJ0biB7XHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDdlOWU4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2E3ZDNkOTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjVkOGRkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAvLyDotYTph5HkuK3ku4vkuqTmmJNcclxuICAgIC5mdW5kLWludGVybWVkaWFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICA7XHJcbiAgICAgICAgLnRleHQtYyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlci10aXRsZSB7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwXHJcbiAgICAgICAgfVxyXG4gICAgfSAvLyDkv6HnlKjor4TnuqdcclxuICAgIC5sZXR0ZXItcGoge1xyXG4gICAgICAgIC5sZXR0ZXItaW5mbyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogLjhlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxldHRlci1zb24ge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICNlOGU5ZWI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWMge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC54eXBqe1xyXG4gICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIH1cclxuICAgIH0gLy/nqI7liqHkv6Hmga9cclxuICAgIC50YXgtaW5mb3JtYXRpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAudGF4LWJ0biB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH0gLy/lvoHkv6Hkv6Hmga9cclxuICAgIC56aGVuZ3hpblBhZ2Uge1xyXG4gICAgICAgIC50ZXh0LWMge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyAuYm94U2hhZG93e1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG4vLyB9XHJcbi8vICNtZHosI3pqanl3bCwjeHlwaiwjZnhxeHgsI2toZnhwZywjZGtmaiwjc3d4eHtcclxuLy8gICAgIHBhZGRpbmctdG9wOiA0M3B4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogLTQzcHg7XHJcbi8vIH1cclxuI3pqanl3bCB7XHJcbiAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzk5ICFpbXBvcnRhbnRcclxuICAgIH1cclxufVxyXG4uc2hvdyB7XHJcbiAgIGNvbG9yOiAjYjhiOGI4ICFpbXBvcnRhbnQ7ICBcclxuICAgcG9pbnRlci1ldmVudHM6IG5vbmU7ICBcclxufVxyXG5cclxuLnBhZGRpbmctMCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-infomation.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-infomation.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RiskInfomationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskInfomationComponent", function() { return RiskInfomationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bean_tenType_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bean/tenType.bean */ "./src/app/pages/tzb/custom/custom-view/risk-infomation/bean/tenType.bean.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var _custom_view_bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../custom-view/bean/custom-view.bean */ "./src/app/pages/tzb/custom/custom-view/bean/custom-view.bean.ts");
/* harmony import */ var app_uisftech_common_service_gbk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/@uisftech/common/service/gbk */ "./src/app/@uisftech/common/service/gbk.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Panduan, Fxdj, RiskTypes, AppStep, RegisterType, TranStatus, TzbankClientFlag, ApproveStatuss, ClientType, RiskPingFen, CustRiskLevel } from '../../constant/custView.codeValue';






// import { BussType, LoanVetoType, LoanSubVetoType, RefuseReason, LoanOperationType, LoanOperationLink, ZXReasonQY, ZXReasonGR, ZXstatus, BankBiaozhi, ZXtypeIdenPer, ZXtypeIdenAdmin } from '../../constant/custView.codeValue';
var RiskInfomationComponent = /** @class */ (function () {
    function RiskInfomationComponent(httpService, commfunc, routeInfo, fb, gbk) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.routeInfo = routeInfo;
        this.fb = fb;
        this.gbk = gbk;
        this.bussTypeOptions = []; //业务类型
        this.loanVetoTypeOpyions = []; //贷款否决类型
        this.loanSubVetoTypeOptions = []; //贷款否决二级否决类型
        this.refuseReasonOptions = []; //贷款否决拒绝原因
        this.loanOperationTypeOptions = []; //贷款否决操作类型
        this.loanOperationLinkOptions = []; //操作环节  否决环节
        this.reasonQYOptions = []; //征信企业原因
        this.reasonGROptions = []; //征信个人原因
        this.statusOptions = []; //征信交易状态
        this.showReson = true;
        this.bankOptions = []; //银行标志
        this.perOptions = []; //个人证件类型
        this.adminOptions = []; //企业证件类型
        this.taxBlock = false;
        this.missionBlock = false;
        this.custRiskLevelOptions = [];
        this.msgs = [];
        this.mdzzlxrs = [];
        this.zjzjjywls = [];
        this.zjzjjywlspageNum = 1;
        this.zjzjjywlspageSize = 10;
        this.khfxpgs = [];
        this.fxqxxs = [];
        this.fxqxxspageNum = 1;
        this.fxqxxspageSize = 10;
        this.addDisplay = false;
        this.addDisplay1 = false;
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.zxxxInfo = []; //征信信息列表
        this.pingfen = [];
        this.precardArray = []; //预筛选评分
        this.appcardArray = []; //信审评分
        this.aftercardArray = []; //贷后评分
        this.dkfjInfo = []; //贷款否决列表
        this.detailFJ = false; //贷款否决详情
        this.tenTypeBean = new _bean_tenType_bean__WEBPACK_IMPORTED_MODULE_6__["TenTypeBean"]();
        this.chooseData = [];
        this.checkAll = false;
        this.clientTypeOptions = []; //角色
        this.tabMesg = '没有相关数据显示！'; //表格中无数据时显示的内容
        this.passwordForTax = new _custom_view_bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_9__["PasswordForTax"](); // 办税密码申请
        this.searchTax = new _custom_view_bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_9__["SearchTax"](); // 查询
        this.approveStatusOptions = []; //审批状态
        this.appStepOptions = []; //审批阶段
        this.registerTypeOptions = []; //信息录入方式
        this.tranStatusOptions = []; //名单制状态
        this.tzbankClientFlagOptions = []; //是否我行客户
        this.riskTypeOptions = []; //风险评估类型
        this.fxdjOptions = []; //风险等级码值
        this.panduanOptions = []; //是否码值
        this.codeVal();
        this.custRiskLevelOptions = this.code['CustRiskLevel'];
        this.pingfen = this.code['RiskPingFen'];
        this.clientTypeOptions = this.code['ClientType'];
        this.approveStatusOptions = this.code['ApproveStatuss'];
        this.appStepOptions = this.code['AppStep'];
        this.registerTypeOptions = this.code['RegisterType'];
        this.tranStatusOptions = this.code['TranStatus'];
        this.tzbankClientFlagOptions = this.code['TzbankClientFlag'];
        this.riskTypeOptions = this.code['RiskTypes'];
        this.fxdjOptions = this.code['Fxdj'];
        this.panduanOptions = this.code['Panduan'];
        this.bussTypeOptions = this.code['BussType']; //业务类型
        this.loanVetoTypeOpyions = this.code['LoanVetoType']; //贷款否决类型
        this.loanSubVetoTypeOptions = this.code['LoanSubVetoType']; //贷款否决二级否决类型
        this.refuseReasonOptions = this.code['RefuseReason']; //贷款否决拒绝原因
        this.loanOperationTypeOptions = this.code['LoanOperationType']; //贷款否决操作类型
        this.loanOperationLinkOptions = this.code['LoanOperationLink']; //操作环节  否决环节
        this.reasonQYOptions = this.code['ZXReasonQY']; //征信企业原因
        this.reasonGROptions = this.code['ZXReasonGR']; //征信个人原因
        this.statusOptions = this.code['ZXstatus']; //征信交易状态
        this.bankOptions = this.code['BankBiaozhi']; //银行标志
        this.perOptions = this.code['ZXtypeIdenPer']; //个人证件类型
        this.adminOptions = this.code['ZXtypeIdenAdmin']; //企业证件类型
        //----------------------------------------------------------上面是码值
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
        this.custNo = this.commfunc.getSessionData('custNo');
        this.zxwbPart();
        this.custName = this.commfunc.getSessionDataCH('custName');
        if (this.commfunc.getSessionDataCH('idenType') && this.commfunc.getSessionDataCH('idenType') == '无') {
            this.idenType = this.commfunc.getSessionDataCH('idenType');
        }
        else {
            this.idenType = this.commfunc.getSessionData('idenType');
        }
        this.idenNum = this.commfunc.getSessionDataCH('idenNum');
        //资金中介交易
        this.selectCapitalAgencyTxn();
        //反洗钱
        this.selectAmlInfo();
        //客户风险评估
        this.selectRiskAsseInfo();
        //名单制列表查询
        this.queryMdz();
        //信审评分
        this.queryPf();
        //贷款否决
        this.queryDkfjInfo();
        //征信信息
        this.queryZxxxInfo();
        // this.viewInfoTemplate();
        // this.selectCustInterctInfo();
    }
    RiskInfomationComponent.prototype.ngOnInit = function () {
        this.checkZZM();
        var aaa = this.routeInfo.snapshot.params['numcheck'];
        setTimeout(function () {
            if (aaa == '110') {
                if (document.getElementById('zxxx222') != null) {
                    var s = document.getElementById('zxxx222').offsetTop;
                    document.getElementById('zxxx222').scrollIntoView();
                    window.scrollTo(100, s - 50);
                }
            }
            else if (aaa == '120') {
                if (document.getElementById('xypj222') != null) {
                    var s = document.getElementById('xypj222').offsetTop;
                    document.getElementById('xypj222').scrollIntoView();
                    window.scrollTo(100, s - 50);
                }
            }
            else if (aaa == '130') {
                if (document.getElementById('mdzScroll') != null) {
                    var s = document.getElementById('mdzScroll').offsetTop;
                    document.getElementById('mdzScroll').scrollIntoView();
                    window.scrollTo(100, s - 50);
                }
            }
        });
        // 网上办税服务厅密码申请
        this.taxForm = this.fb.group({
            'taxpayerIdentNum': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'legalRepresentNum': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'textMessage': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'recPhoneNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_8__["checkTel"]])
        });
        // 查询
        this.searchTaxForm = this.fb.group({
            'taxpayerIdCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'globalId': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    RiskInfomationComponent.prototype.ngOnChanges = function () {
    };
    //跳转征信  外部
    RiskInfomationComponent.prototype.zxwbPart = function () {
        var _this = this;
        var param = {
            custNo: this.custNo
        };
        this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.certType = data.idenType;
                _this.certID = data.idenNum;
                _this.custAttr = data.custAttribute;
                _this.custName = data.custName;
                _this.custterm = data.custType;
                if (data.dataSourceId == 'BR00A') {
                    _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_HTTP_XIN"];
                }
                else if (data.dataSourceId == 'BR00B') {
                    _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_HTTP_XIN_C"];
                }
                else if (!data.dataSourceId || data.dataSourceId == '') {
                    _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_HTTP_XIN"];
                }
                var temp = {
                    handleFlag: '1',
                    securdStr: _this.userId,
                    strategy: '1',
                };
                _this.httpService.securdStrService(temp).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.param = data.securdStr;
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
                });
                var item = {
                    handleFlag: '1',
                    securdStr: _this.userId + _this.custNo + _this.custName + _this.certID,
                    strategy: '2',
                };
                _this.httpService.securdStrService(item).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.key = data.securdStr;
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
                });
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
    //名单制
    RiskInfomationComponent.prototype.mdz = function () {
        // document.getElementById('mdz').scrollIntoView();
        if (document.getElementById('mdz') != null) {
            var s = document.getElementById('mdz').offsetTop;
            document.getElementById('mdz').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    //贷款否决
    RiskInfomationComponent.prototype.dkfj = function () {
        if (document.getElementById('dkfj') != null) {
            var s = document.getElementById('dkfj').offsetTop;
            document.getElementById('dkfj').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    //资金中介交易往来
    RiskInfomationComponent.prototype.zjjywl = function () {
        if (document.getElementById('zjjywl') != null) {
            var s = document.getElementById('zjjywl').offsetTop;
            document.getElementById('zjjywl').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    // 预筛选评分结果
    RiskInfomationComponent.prototype.xypj1 = function () {
        if (document.getElementById('xypj1') != null) {
            var s = document.getElementById('xypj1').offsetTop;
            document.getElementById('xypj1').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    // 信审评分结果
    RiskInfomationComponent.prototype.xypj2 = function () {
        if (document.getElementById('xypj2') != null) {
            var s = document.getElementById('xypj2').offsetTop;
            document.getElementById('xypj2').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    // 贷后评分结果
    RiskInfomationComponent.prototype.xypj3 = function () {
        if (document.getElementById('xypj3') != null) {
            var s = document.getElementById('xypj3').offsetTop;
            document.getElementById('xypj3').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    //反洗钱信息
    RiskInfomationComponent.prototype.fxqxx = function () {
        if (document.getElementById('fxqxx') != null) {
            var s = document.getElementById('fxqxx').offsetTop;
            document.getElementById('fxqxx').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    //客户风险评估
    RiskInfomationComponent.prototype.khfxpg = function () {
        if (document.getElementById('khfxpg') != null) {
            var s = document.getElementById('khfxpg').offsetTop;
            document.getElementById('khfxpg').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    //税务信息
    RiskInfomationComponent.prototype.swxx = function () {
        if (document.getElementById('swxx') != null) {
            var s = document.getElementById('swxx').offsetTop;
            document.getElementById('swxx').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    //征信信息
    RiskInfomationComponent.prototype.zxxx = function () {
        if (document.getElementById('ZXXX') != null) {
            var s = document.getElementById('ZXXX').offsetTop;
            document.getElementById('ZXXX').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    //外部信息  涉诉信息
    RiskInfomationComponent.prototype.wbxx = function () {
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        if (!(/Trident\/7\./).test(navigator.userAgent)) {
            // this.commfunc.createBlank(target);
        }
        var url = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_HTTP_WX"] + "eias/support/odap/config/uiresources/crczonghe/QueryLink.jsp?uid=" + this.userId + "&khm=" + this.custNo + "&custname=" + this.gbk.transFormURL.encode(this.custName) + "&certno=" + this.certID + "&custterm=" + this.custterm + "&key=" + this.key;
        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
        var closeOnLoseFocus = 'closeOnLoseFocus';
        this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
    };
    //房产
    RiskInfomationComponent.prototype.fcxx = function () {
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        // this.commfunc.createBlank(target);
        var url = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_HTTP_WX"] + "eias/support/odap/config/uiresources/crczonghe/QueryFxt.jsp?pk=0&userid=" + this.userId;
        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
        var closeOnLoseFocus = 'closeOnLoseFocus';
        this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
    };
    //风险调整
    RiskInfomationComponent.prototype.dangerTZ = function () {
        var _this = this;
        var jieju;
        this.chooseData.forEach(function (item) {
            jieju = item.pk;
        });
        if (jieju == '' || jieju == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            this.tenTypeBean.userId = this.userId;
            this.tenTypeBean.sysCode = '122';
            this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
            this.tenTypeBean.serverName = 'ywsn';
            this.tenTypeBean.validateType = '0';
            this.tenTypeBean.extraInfo = 'ywsn';
            this.tenTypeBean.encryptType = 'HS256';
            var timestamp_1 = new Date().getTime();
            var target = "custLinkForm" + timestamp_1;
            // this.commfunc.createBlank(target);
            this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var tokens = data.tokenCode;
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&pk1=" + jieju + "&urlParam=/plats/platform/jsp/created/MDXX_FXDJ_ADJUST.jsp?isProcModule=no|ActionType=mdfxdjtz|ActionCode=F4099A300D7C3B3CA40A01A1BA97348B|moduleProc=|moduleName=|moduleTable=|moduleCode=74FEE4341907728928A65A52F02475E0|main_moduleCode=74FEE4341907728928A65A52F02475E0|main_moduleName=|main_moduleTable=";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_1, features, closeOnLoseFocus);
                }
            });
        }
    };
    //风险失效
    RiskInfomationComponent.prototype.dangerSX = function () {
        var _this = this;
        var jieju;
        this.chooseData.forEach(function (item) {
            jieju = item.pk;
        });
        if (jieju == '' || jieju == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            this.tenTypeBean.userId = this.userId;
            this.tenTypeBean.sysCode = '122';
            this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
            this.tenTypeBean.serverName = 'ywsn';
            this.tenTypeBean.validateType = '0';
            this.tenTypeBean.extraInfo = 'ywsn';
            this.tenTypeBean.encryptType = 'HS256';
            var timestamp_2 = new Date().getTime();
            var target = "custLinkForm" + timestamp_2;
            // this.commfunc.createBlank(target);
            this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var tokens = data.tokenCode;
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&pk1=" + jieju + "&urlParam=/plats/platform/jsp/created/MDXX_SXSQ_ADJUST.jsp?isProcModule=no|ActionType=mdfxdjtz|ActionCode=78099007A62BFCECF00F527397EBA242|moduleProc=|moduleName=|moduleTable=|moduleCode=74FEE4341907728928A65A52F02475E0|main_moduleCode=74FEE4341907728928A65A52F02475E0|main_moduleName=|main_moduleTable=";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_2, features, closeOnLoseFocus);
                }
            });
        }
    };
    // //税务信息
    // swxx() {
    //   document.getElementById('#swxx').scrollIntoView();
    // }
    // //房产信息
    // fcxx() {
    //   document.getElementById('#fcxx').scrollIntoView();
    // }
    //资金中介交易查询
    RiskInfomationComponent.prototype.selectCapitalAgencyTxn = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageNum: this.zjzjjywlspageNum,
            pageSize: this.zjzjjywlspageSize
        };
        this.httpService.selectCapitalAgencyTxn(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.infoList.forEach(function (item) {
                    _this.httpService.queryOrgById({ orgId: item.txnOrgId }).subscribe(function (data) {
                        if (data.orgName != null) {
                            item.txnOrgId = data.orgName;
                        }
                    });
                });
                _this.zjzjjywls = data.infoList;
                _this.zjzjjywlspageNum = data.pageNum;
                _this.zjzjjywlspageSize = data.pageSize;
                _this.zjzjjywlstotalNum = data.totalNum;
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    RiskInfomationComponent.prototype.paginatezjzjjywls = function (event) {
        this.zjzjjywlspageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.zjzjjywlspageNum = currentPage;
        this.selectCapitalAgencyTxn();
    };
    //反洗钱
    RiskInfomationComponent.prototype.selectAmlInfo = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageSize: this.fxqxxspageSize,
            pageNum: this.fxqxxspageNum
        };
        this.httpService.selectAmlInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.fxqxxs = data.infoList;
                _this.fxqxxspageNum = data.pageNum;
                _this.fxqxxspageSize = data.pageSize;
                _this.fxqxxstotalNum = data.totalNum;
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    RiskInfomationComponent.prototype.paginatefxqxxs = function (event) {
        this.zjzjjywlspageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.zjzjjywlspageNum = currentPage;
        this.selectAmlInfo();
    };
    //理财风险评估
    RiskInfomationComponent.prototype.selectRiskAsseInfo = function () {
        var _this = this;
        var param = {
            custNo: this.custNo
        };
        this.httpService.selectRiskAsseInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var param_1 = [{ riskAsseType: '', riskAsseDate: '', effDate: '', evalCustMgr: '' }];
                param_1[0].riskAsseType = data.riskAsseType;
                param_1[0].riskAsseDate = data.riskAsseDate;
                param_1[0].effDate = data.effDate;
                param_1[0].evalCustMgr = data.evalCustMgr;
                // this.httpService.queryTellerById({tellerId:data.evalCustMgr}).subscribe(item=>{
                //   data.evalCustMgr=item.tellerName;
                //   param[0].evalCustMgr = data.evalCustMgr;
                // });
                if (data.riskAsseType == null && data.riskAsseDate == null && data.effDate == null && data.evalCustMgr == null) {
                    _this.khfxpgs = [];
                }
                else {
                    _this.khfxpgs = param_1;
                }
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //贷款业务全选按钮
    RiskInfomationComponent.prototype.checkAllClick = function () {
        this.chooseData = [];
        for (var i = 0; i < this.mdzzlxrs.length; i++) {
            if (this.checkAll == true) {
                this.mdzzlxrs[i].checkBox = true;
                this.chooseData.push(this.mdzzlxrs[i]);
            }
            else {
                this.chooseData = [];
                this.mdzzlxrs[i].checkBox = false;
            }
        }
    };
    //贷款业务单选按钮
    RiskInfomationComponent.prototype.checkBoxClick = function (i, data) {
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
        if (this.chooseData.length == this.mdzzlxrs.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    };
    //名单制列表查询
    RiskInfomationComponent.prototype.queryMdz = function () {
        var _this = this;
        var param1 = {
            clientNo: this.custNo,
            globalType: this.idenType,
            globalId: this.idenNum,
        };
        //名单制列表查询
        this.httpService.BZ_1300300000105_LOAN(param1).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.infoList.forEach(function (item) {
                    _this.httpService.queryOrgById({ orgId: item.appBranchNo }).subscribe(function (data) {
                        if (data.orgName != null) {
                            item.appBranchNo = data.orgName;
                        }
                    });
                });
                _this.mdzzlxrs = data.infoList;
                _this.checkAll = false;
                _this.chooseData = [];
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //评分
    RiskInfomationComponent.prototype.queryPf = function () {
        var _this = this;
        var param = {
            clientNo: this.custNo,
            clientName: this.custName,
            globalType: this.idenType,
            globalId: this.idenNum,
        };
        this.httpService.BZ_0200300003807_CSS(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.precardArray.length > 0) {
                    data.precardArray.forEach(function (item) {
                        if (item.applyAmt == '' || item.applyAmt == null) {
                            item.applyAmt = 0;
                        }
                    });
                }
                if (data.appcardArray.length > 0) {
                    data.appcardArray.forEach(function (item) {
                        if (item.applyAmt == '' || item.applyAmt == null) {
                            item.applyAmt = 0;
                        }
                    });
                }
                if (data.aftercardArray.length > 0) {
                    data.aftercardArray.forEach(function (item) {
                        if (item.applyAmt == '' || item.applyAmt == null) {
                            item.applyAmt = 0;
                        }
                    });
                }
                _this.precardArray = data.precardArray;
                _this.appcardArray = data.appcardArray;
                _this.aftercardArray = data.aftercardArray;
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //信用评级
    RiskInfomationComponent.prototype.xinyongPJ = function (item) {
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        // this.commfunc.createBlank(target);
        var url = item.scoreReportUrl;
        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
        var closeOnLoseFocus = 'closeOnLoseFocus';
        this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
    };
    //信审评分结果
    RiskInfomationComponent.prototype.xinshenPF = function (item) {
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        // this.commfunc.createBlank(target);
        var url = item.scoreReportUrl;
        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
        var closeOnLoseFocus = 'closeOnLoseFocus';
        this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
    };
    //名单制详情
    RiskInfomationComponent.prototype.showListDetails = function (data) {
        this.inValue = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](data);
        // this.inValue=_.clone({pk:'43B2C43DDF98EEA3E913EB0CAF91936E'});
        this.addDisplay = true;
        this.addUpHeader = '名单制详情';
        document.body.style.overflow = 'hidden';
    };
    //风险等级历史调整
    RiskInfomationComponent.prototype.showRiskLevel = function (data) {
        this.inValue = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](data);
        this.addDisplay1 = true;
        this.addUpHeader = '风险等级历史调整';
        document.body.style.overflow = 'hidden';
    };
    RiskInfomationComponent.prototype.addCall = function (event) {
        this.addDisplay = false;
        this.addDisplay1 = false;
        this.detailFJ = false;
        document.body.style.overflow = 'auto';
    };
    //贷款否决列表查询
    RiskInfomationComponent.prototype.queryDkfjInfo = function () {
        var _this = this;
        var param = {
            clientNo: this.custNo
        };
        // let param = {
        //   clientNo: "1300002163"
        // }
        this.httpService.BZ_0200300000105_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dkfjInfo = data.infoList;
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //贷款否决详情
    RiskInfomationComponent.prototype.foujueDetail = function (data) {
        this.inValue = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](data);
        this.detailFJ = true;
        this.addUpHeader = '贷款否决详情';
        document.body.style.overflow = 'hidden';
    };
    //征信信息查询
    RiskInfomationComponent.prototype.queryZxxxInfo = function () {
        var _this = this;
        var num = '';
        var perId = '';
        var temp = {
            // custNo: "1300002163"
            custNo: this.custNo
        };
        this.httpService.selectCustBriefInfo(temp).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                num = data.custType;
                if (num == '1') {
                    _this.itemParam = 'P'; //个人
                    _this.showReson = false;
                    perId = data.idenNum;
                    var param = {
                        globalId: perId,
                        clientType: _this.itemParam
                    };
                    _this.httpService.BZ_1100300008903_CIQS(param).subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
                            data.infoList.forEach(function (item) {
                                _this.httpService.queryTellerById({ tellerId: item['queryName'] }).subscribe(function (data) {
                                    if (data.tellerName && data.tellerName != '' && data.tellerName != null) {
                                        item['queryName'] = data.tellerName;
                                    }
                                });
                            });
                            _this.zxxxInfo = data.infoList;
                        }
                        else {
                            data.returnCode.message ? data.returnCode.message : '调用服务失败';
                            _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                        }
                    });
                }
                else if (num == '2') {
                    _this.itemParam = 'C';
                    _this.showReson = true;
                    _this.httpService.selectComCustBasicInfo(temp).subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
                            perId = data.signature;
                            if (!perId || perId == '' || perId == null) {
                                return;
                            }
                            var param = {
                                globalId: perId,
                                clientType: _this.itemParam
                            };
                            _this.httpService.BZ_1100300008903_CIQS(param).subscribe(function (data) {
                                if (data.returnCode.code == 'success') {
                                    data.infoList.forEach(function (item) {
                                        _this.httpService.queryTellerById({ tellerId: item['queryName'] }).subscribe(function (data) {
                                            if (data.tellerName && data.tellerName != '' && data.tellerName != null) {
                                                item['queryName'] = data.tellerName;
                                            }
                                        });
                                    });
                                    _this.zxxxInfo = data.infoList;
                                }
                                else {
                                    data.returnCode.message ? data.returnCode.message : '调用服务失败';
                                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                                }
                            });
                        }
                        else {
                            data.returnCode.message ? data.returnCode.message : '调用服务失败';
                            _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                        }
                    });
                }
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //查询中证吗
    RiskInfomationComponent.prototype.checkZZM = function () {
        var _this = this;
        var param = {
            // custNo: "1300002163"
            custNo: this.custNo
        };
        this.httpService.selectComCustBasicInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.zhongzCode = data.signature;
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    RiskInfomationComponent.prototype.zxDetail = function (item) {
        console.log(this.zhongzCode);
        if (this.itemParam == 'P') {
            var timestamp = new Date().getTime();
            var target = "custLinkForm" + timestamp;
            if (!(/Trident\/7\./).test(navigator.userAgent)) {
                // this.commfunc.createBlank(target);
            }
            var url = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_HTTP_ZXNEW"] + "AmarCRQWeb/isoview/person.do?userName=" + encodeURI(item.clientName) + "&userCertType=" + item.globalType + "&userCertNo=" + item.globalId + "&enquId=" + this.userId + "&enquName=" + encodeURI(this.userName) + "&orgId=" + this.orgId + "&orgName=" + encodeURI(this.orgName) + "&queryReson=" + item.reason + "&reportNo=" + item.crdtReportNo + "&xdSysFlag=" + item.bankSystemType + "&source=108030&reportNo=" + item.crdtReportNo;
            var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
            var closeOnLoseFocus = 'closeOnLoseFocus';
            this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
        }
        else if (this.itemParam == 'C') {
            if (!this.zhongzCode || this.zhongzCode == '') {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: "中征码为空!参数不全!" }];
                return;
            }
            else {
                var timestamp = new Date().getTime();
                var target = "custLinkForm" + timestamp;
                if (!(/Trident\/7\./).test(navigator.userAgent)) {
                    // this.commfunc.createBlank(target);
                }
                var url = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_HTTP_ZXNEW"] + "AmarCRQWeb/isoview/company.do?userName=" + encodeURI(item.clientName) + "&userCertType=" + item.globalType + "&userCertNo=" + item.globalId + "&enquId=" + this.userId + "&enquName=" + encodeURI(this.userName) + "&orgId=" + this.orgId + "&orgName=" + encodeURI(this.orgName) + "&queryReson=" + item.reason + "&reportNo=" + item.crdtReportNo + "&xdSysFlag=" + item.bankSystemType + "&source=108030&LoanCardNo=" + this.zhongzCode + "&reportNo=" + item.crdtReportNo;
                var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                var closeOnLoseFocus = 'closeOnLoseFocus';
                this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
            }
        }
    };
    // 时间格式转换
    RiskInfomationComponent.prototype.dateToString = function (date) {
        if (!date) {
            date = new Date();
        }
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hours = date.getHours();
        var mins = date.getMinutes();
        var secs = date.getSeconds();
        var msecs = date.getMilliseconds();
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (mins < 10) {
            mins = '0' + mins;
        }
        if (secs < 10) {
            secs = '0' + secs;
        }
        if (msecs < 10) {
            msecs = '0' + msecs;
        }
        return year + month + day + hours + mins + secs + msecs;
    };
    //查询短信内容
    RiskInfomationComponent.prototype.viewInfoTemplate = function () {
        var _this = this;
        var param = {
            busCodeEnglishName: 'MSG_WSBSFWMM_APPLY',
            messageTempleTotalType: '03',
        };
        this.httpService.viewInfoTemplate(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.passwordForTax.textMessage = data.messageTempleContent;
            }
            else {
                // this.msgs = [{ severity: 'error', summary: '提示', detail: '查询短信内容失败' }];        
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    // 办税密码申请
    RiskInfomationComponent.prototype.getTaxPassword = function () {
        var _this = this;
        //校验的
        for (var i in this.taxForm.controls) {
            this.taxForm.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.taxForm.controls) {
            if (!this.taxForm.controls[i].valid) {
                return;
            }
        }
        var applyTime = new Date();
        var tranDate = this.dateToString(applyTime);
        var branchId = '';
        if (this.commfunc.getSessionData('commonHeader')) {
            branchId = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
        }
        var mapMessage = {
            CUST_NO: this.custNo,
            TAX_PAYER_NUM: this.passwordForTax.taxpayerIdentNum,
            IDEN_NUM: this.passwordForTax.legalRepresentNum
        };
        var param = {
            tranDate: tranDate,
            channelType: '01',
            branchId: branchId,
            msgTempleTranCode: 'MSG_WSBSFWMM_APPLY',
            recPhoneNo: this.passwordForTax.recPhoneNo,
            map: {
                CUST_NO: this.custNo,
                TAX_PAYER_NUM: this.passwordForTax.taxpayerIdentNum,
                IDEN_NUM: this.passwordForTax.legalRepresentNum
            }
        };
        this.httpService.messageSend(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.retMsg = data.retMsg;
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    // 查询
    RiskInfomationComponent.prototype.taxSearch = function () {
        var _this = this;
        //校验的
        for (var i in this.searchTaxForm.controls) {
            this.searchTaxForm.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.searchTaxForm.controls) {
            if (!this.searchTaxForm.controls[i].valid) {
                return;
            }
        }
        var param = {
            taxpayerIdCode: this.searchTax.taxpayerIdCode,
            globalId: this.searchTax.globalId,
            password: this.searchTax.password
        };
        this.httpService.BZ_1100200008504_EIAS(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //权限
    RiskInfomationComponent.prototype.judgeField = function (fId) {
        var ret = this.commfunc.permissionFiledCheck(fId);
        return ret;
        // return true
    };
    RiskInfomationComponent.prototype.selectCustInterctInfo = function () {
        var _this = this;
        var param = {
            partyId: this.custNo,
            channel: '01',
        };
        this.httpService.selectCustInterctInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.searchTax.password = data.interctContent;
            }
        });
    };
    //显示网上办税服务厅密码申请或查询
    RiskInfomationComponent.prototype.getTaxBlock = function (val) {
        if (val == '1') {
            this.taxBlock = true;
            this.missionBlock = false;
        }
        else if (val == '2') {
            this.taxBlock = false;
            this.missionBlock = true;
        }
    };
    //码值
    RiskInfomationComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    RiskInfomationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-risk-infomation',
            template: __webpack_require__(/*! ./risk-infomation.component.html */ "./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-infomation.component.html"),
            styles: [__webpack_require__(/*! ./risk-infomation.component.scss */ "./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-infomation.component.scss")],
            providers: [app_uisftech_common_service_gbk__WEBPACK_IMPORTED_MODULE_10__["GBK"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        })
        /**
         * 风险信息
         */
        ,
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            app_uisftech_common_service_gbk__WEBPACK_IMPORTED_MODULE_10__["GBK"]])
    ], RiskInfomationComponent);
    return RiskInfomationComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-infomation.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-infomation.module.ts ***!
  \****************************************************************************************/
/*! exports provided: RiskInfomationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskInfomationModule", function() { return RiskInfomationModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _risk_infomation_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./risk-infomation.routing */ "./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-infomation.routing.ts");
/* harmony import */ var _risk_infomation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./risk-infomation.component */ "./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-infomation.component.ts");
/* harmony import */ var _list_details_list_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-details/list-details.component */ "./src/app/pages/tzb/custom/custom-view/risk-infomation/list-details/list-details.component.ts");
/* harmony import */ var _risk_level_risk_level_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./risk-level/risk-level.component */ "./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-level/risk-level.component.ts");
/* harmony import */ var _foujue_detail_foujue_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./foujue-detail/foujue-detail.component */ "./src/app/pages/tzb/custom/custom-view/risk-infomation/foujue-detail/foujue-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //客户运营平台 http







var RiskInfomationModule = /** @class */ (function () {
    function RiskInfomationModule() {
    }
    RiskInfomationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__["FrameworkModule"],
                _risk_infomation_routing__WEBPACK_IMPORTED_MODULE_6__["RiskInfomationRouting"]
            ],
            declarations: [
                _risk_infomation_component__WEBPACK_IMPORTED_MODULE_7__["RiskInfomationComponent"],
                _risk_level_risk_level_component__WEBPACK_IMPORTED_MODULE_9__["RiskLevelComponent"],
                _list_details_list_details_component__WEBPACK_IMPORTED_MODULE_8__["ListDetailsComponent"],
                _foujue_detail_foujue_detail_component__WEBPACK_IMPORTED_MODULE_10__["FouJueDetailComponent"]
            ],
            providers: [
                _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CusViewHttpService"]
            ]
        })
    ], RiskInfomationModule);
    return RiskInfomationModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-infomation.routing.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-infomation.routing.ts ***!
  \*****************************************************************************************/
/*! exports provided: routes, RiskInfomationRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskInfomationRouting", function() { return RiskInfomationRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _risk_infomation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./risk-infomation.component */ "./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-infomation.component.ts");


var routes = [
    {
        path: '', component: _risk_infomation_component__WEBPACK_IMPORTED_MODULE_1__["RiskInfomationComponent"],
    }
];
var RiskInfomationRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-level/risk-level.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-level/risk-level.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n  <p-dataTable [value]=\"fxdjtz\"  [emptyMessage]=\"tabMesg\">\r\n    <p-column field=\"beforeRiskLevel\" header=\"调整前风险等级\"  [style]=\"{'text-align':'center'}\"></p-column>   \r\n    <p-column field=\"afterRiskLevel\" header=\"调整后风险等级\"  [style]=\"{'text-align':'center'}\"> </p-column>           \r\n    <p-column field=\"adjustReason\" header=\"调整原因\"  [style]=\"{'text-align':'center'}\">  </p-column>          \r\n    <p-column field=\"appUserId\" header=\"经办人\"  [style]=\"{'text-align':'center'}\">  </p-column>          \r\n    <p-column field=\"appDate\" header=\"经办日期\"  [style]=\"{'text-align':'center'}\">\r\n    <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n      {{col.appDate|timeValuePie}}\r\n    </ng-template>  \r\n    </p-column>           \r\n  </p-dataTable>\r\n</div>\r\n<div class=\"ui-g-12\" style=\"text-align:center\">\r\n  <button pButton label=\"关闭\" (click)=\"close()\" ></button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-level/risk-level.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-level/risk-level.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLXZpZXcvcmlzay1pbmZvbWF0aW9uL3Jpc2stbGV2ZWwvcmlzay1sZXZlbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-level/risk-level.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-level/risk-level.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: RiskLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskLevelComponent", function() { return RiskLevelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RiskLevelComponent = /** @class */ (function () {
    function RiskLevelComponent(httpService) {
        this.httpService = httpService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.kindDo = '';
        this.fxdjtz = [];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"]; //表格中无数据时显示的内容
    }
    RiskLevelComponent.prototype.ngOnInit = function () {
    };
    RiskLevelComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.inValue && this.inValue != '') {
            var param = {
                pk: this.inValue.pk
            };
            this.httpService.BZ_1300300000103_LOAN(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.fxdjtz = data.infoList;
                }
            });
        }
    };
    RiskLevelComponent.prototype.close = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RiskLevelComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('in-value'),
        __metadata("design:type", Object)
    ], RiskLevelComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('key-label'),
        __metadata("design:type", Object)
    ], RiskLevelComponent.prototype, "keyLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('kind-do'),
        __metadata("design:type", String)
    ], RiskLevelComponent.prototype, "kindDo", void 0);
    RiskLevelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-risk-level',
            template: __webpack_require__(/*! ./risk-level.component.html */ "./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-level/risk-level.component.html"),
            styles: [__webpack_require__(/*! ./risk-level.component.scss */ "./src/app/pages/tzb/custom/custom-view/risk-infomation/risk-level/risk-level.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"]])
    ], RiskLevelComponent);
    return RiskLevelComponent;
}());



/***/ })

}]);
//# sourceMappingURL=tzb-custom-custom-view-risk-infomation-risk-infomation-module.js.map