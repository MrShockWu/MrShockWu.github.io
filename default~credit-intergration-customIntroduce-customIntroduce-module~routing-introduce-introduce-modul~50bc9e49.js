(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~credit-intergration-customIntroduce-customIntroduce-module~routing-introduce-introduce-modul~50bc9e49"],{

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/applyApproval/applyApproval.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/applyApproval/applyApproval.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow partStyle\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>事项类型:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.bigClassName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>事项类型:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.littleClassName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>发起人:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.workCreateName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>创建日期:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.createDate}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 boxShadow\">\r\n    <header-title [Info]=\"'客户介绍客户申请审批'\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 right\">\r\n                <span>介绍人客户号:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{applyApproveBean.introducerId}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">\r\n                <span>介绍人客户名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{applyApproveBean.introducerName}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">\r\n                <span>生效日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{applyApproveBean.fromDate}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 right\">\r\n                <span>到期日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{applyApproveBean.thruDate}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">\r\n                <span>介绍人存款账号:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{applyApproveBean.introducerAcctId}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">\r\n                <span>审批状态:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{applyApproveBean.relaStatus|codeValuePie:relaStatusOptions}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 right\">\r\n                <span>经办人:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{applyApproveBean.createdUserName}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">\r\n                <span>经办机构:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{applyApproveBean.createdOrgName}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">\r\n                <span>修改日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{applyApproveBean.lastUpdatedStamp}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 right\">\r\n                <span>银行代码:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{applyApproveBean.bankCode}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"coverShowFlag\">\r\n        <form [formGroup]=\"introform\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-4 right\">\r\n                        <span appValidation>被介绍人客户号:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <input formControlName=\"cust2No\" type=\"text\" pInputText [(ngModel)]=\"list_one.cust2No\" (blur)=\"myFunction2()\" (keyup)=\"onKeyupNumber($event)\"\r\n                        />\r\n                        <span class=\"requireLabel\" *ngIf=\"!introform.controls['cust2No'].valid&&introform.controls['cust2No'].dirty&& isShowTip\">介绍客户名称不能为空!</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-4 right\">\r\n                        <span appValidation>被介绍人客户名称:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <input formControlName=\"cust2Name\" type=\"text\" disabled pInputText [(ngModel)]=\"list_one.cust2Name\" />\r\n                        <span class=\"requireLabel\" *ngIf=\"!introform.controls['cust2Name'].valid&&introform.controls['cust2Name'].dirty&& isShowTip\">介绍客户名称不能为空!</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"ui-g-12 btn\">\r\n            <button pButton type=\"button\" label=\"添加\" (click)=\"add()\"></button>\r\n            <button pButton type=\"button\" label=\"重置\" (click)=\"chongzhi()\"></button>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 table\">\r\n        <p-dataTable [value]=\"cust2List\" [emptyMessage]=\"tabMesg\" scrollable=\"true\" scrollHeight=\"350px\">\r\n            <p-column field=\"applyId\" header='客户介绍客户编号'></p-column>\r\n            <p-column field=\"coverIntroduceId\" header='被介绍人客户号'></p-column>\r\n            <p-column field=\"coverIntroduceName\" header=\"被介绍人客户名称\"></p-column>\r\n            <p-column header=\"操作\" *ngIf=\"coverShowFlag\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <div class=\"table-button\">\r\n                        <span class=\"tabelDeleteIco\" (click)=\"delete(col)\">删除</span>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows={{pageSizeCover}} totalRecords={{totalCover}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginateCover($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n    <examine-page [inValue]=\"inValue\"></examine-page>\r\n</div>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/applyApproval/applyApproval.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/applyApproval/applyApproval.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn,\n.table {\n  text-align: center; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n.right {\n  text-align: right; }\n\n.partStyle {\n  margin-bottom: 10px; }\n\n.tit {\n  text-align: right; }\n\n.btn_1 {\n  background: #e6b800; }\n\n.btn_1:hover {\n    background: #dbaf00; }\n\n.partStyle {\n  margin-bottom: 10px; }\n\n.requireLabel {\n  color: #f00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS93b3JrLXJhc2svY3JlZGl0LWludGVyZ3JhdGlvbi9jdXN0b21JbnRyb2R1Y2UvYXBwbHlBcHByb3ZhbC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXHdvcmstcmFza1xcY3JlZGl0LWludGVyZ3JhdGlvblxcY3VzdG9tSW50cm9kdWNlXFxhcHBseUFwcHJvdmFsXFxhcHBseUFwcHJvdmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGtCQUFrQixFQUFBOztBQUl0QjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLG1CQUFtQixFQUFBOztBQUR2QjtJQUdRLG1CQUFtQixFQUFBOztBQUkzQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vd29yay1yYXNrL2NyZWRpdC1pbnRlcmdyYXRpb24vY3VzdG9tSW50cm9kdWNlL2FwcGx5QXBwcm92YWwvYXBwbHlBcHByb3ZhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4sXHJcbi50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8v6KGo5qC85a2X5q+N5pWw5a2X6Ieq5Yqo5o2i6KGMXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGEge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5wYXJ0U3R5bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnRpdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmJ0bl8xIHtcclxuICAgIGJhY2tncm91bmQ6ICNlNmI4MDA7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZGJhZjAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGFydFN0eWxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5yZXF1aXJlTGFiZWwge1xyXG4gICAgY29sb3I6ICNmMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/applyApproval/applyApproval.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/applyApproval/applyApproval.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ApplyApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyApprovalComponent", function() { return ApplyApprovalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_applyApproval_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean/applyApproval.bean */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/applyApproval/bean/applyApproval.bean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customIntroduceApply_bean_addCustIntroduceApply_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../customIntroduceApply/bean/addCustIntroduceApply.bean */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApply/bean/addCustIntroduceApply.bean.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ApplyApprovalComponent = /** @class */ (function () {
    function ApplyApprovalComponent(httpService, routeInfo, commfunc, fb, datePipe) {
        this.httpService = httpService;
        this.routeInfo = routeInfo;
        this.commfunc = commfunc;
        this.fb = fb;
        this.datePipe = datePipe;
        this.first = 0;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"]; //表格中无数据时显示的内容
        this.msgs = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.applyApproveBean = new _bean_applyApproval_bean__WEBPACK_IMPORTED_MODULE_5__["ApplyApproveBean"]();
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.list_one = new _customIntroduceApply_bean_addCustIntroduceApply_bean__WEBPACK_IMPORTED_MODULE_7__["Cust2List"]();
        this.checkFlag = false; //校验是否成功
        //单笔校验
        this.cust2List = [];
        //单笔校验
        this.custList = {
            coverCustId: '',
            coverCustName: '',
            remarksInfo: '',
            applyId: '',
            relaId: '',
        };
        this.arr = [];
        this.pageSizeCover = 10;
        this.pageNumCover = 1;
        this.coverShowFlag = false; //审批是否可修改
        this.detailList = [];
        this.isShowTip = true; //校验隐藏
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
    ApplyApprovalComponent.prototype.ngOnInit = function () {
        this.introform = this.fb.group({
            'cust2No': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            'cust2Name': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
        });
        this.codeValues();
        this.relaStatusOptions = this.code['relaStatusIntro']; //状态
        this.custIntroduceParam = JSON.parse(this.commfunc.getSessionDataCH('custIntroduce'));
        // console.log(this.custIntroduceParam)
        if (this.custIntroduceParam) {
            this.detailList = this.custIntroduceParam;
            this.approveList = JSON.parse(this.custIntroduceParam['dataMap']);
            this.inValue = this.approveList;
            // console.log(this.inValue)
            this.operationTypeIn = this.approveList['operationType'];
            this.applyId = this.approveList['applyId'];
            // this.applyApproveBean = this.approveList.introduceServiceDetailListMap.pageList[0];
            // this.cust2List = this.approveList.introduceServiceDetailListMap.pageList;
            this.query();
            this.flag = this.custIntroduceParam['markFlag'];
            if (this.custIntroduceParam['taskRate'] == '1' && this.flag != '2') {
                this.coverShowFlag = true;
            }
        }
    };
    ApplyApprovalComponent.prototype.query = function () {
        var _this = this;
        var temp = {
            operationNum: this.approveList['applyId'],
            operationType: this.approveList['operationType'],
            pageSize: this.pageSizeCover,
            pageNum: this.pageNumCover
        };
        this.httpService.introduceServiceDetailList(temp).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.pageList && data.pageList.length > 0) {
                    _this.applyApproveBean = data.pageList[0];
                    _this.cust2List = data.pageList;
                    _this.totalCover = data.totalNum;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '没有数据!' });
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
    //码值
    ApplyApprovalComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //被介绍客户名称回显
    ApplyApprovalComponent.prototype.myFunction2 = function () {
        var _this = this;
        if (this.list_one.cust2No && this.list_one.cust2No != '') {
            if (this.applyApproveBean.introducerId == this.list_one.cust2No) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '介绍人、被介绍人不能是同一个客户!' }];
                return;
            }
            var param = {
                custNo: this.list_one.cust2No
            };
            this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.list_one.cust2Name = data.custName;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            });
        }
    };
    //校验客户号只能输入数字
    ApplyApprovalComponent.prototype.onKeyupNumber = function (event) {
        if (event.target.value != '') {
            if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_9__["checkNumber"])(null, event.target.value)) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '当前输入框内只能输入数字!' }];
                event.target.value = '';
                return;
            }
            if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_9__["custNoTen"])(null, event.target.value)) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '客户号错误!' }];
                event.target.value = '';
                return;
            }
        }
        else {
            this.list_one.cust2Name = '';
        }
    };
    //被介绍添加
    ApplyApprovalComponent.prototype.add = function () {
        var _this = this;
        this.isShowTip = true;
        //校验的
        for (var i in this.introform.controls) {
            this.introform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.introform.controls) {
            if (!this.introform.controls[i].valid) {
                return;
            }
        }
        if (this.applyApproveBean.introducerId && this.applyApproveBean.introducerId != ''
            && this.applyApproveBean.introducerName && this.applyApproveBean.introducerName != ''
            && this.applyApproveBean.introducerAcctId && this.applyApproveBean.introducerAcctId != ''
            && this.applyApproveBean.thruDate && this.applyApproveBean.thruDate != null
            && this.applyApproveBean.fromDate && this.applyApproveBean.fromDate != null) {
            var temp = {
                applyId: this.applyId,
                custId: this.applyApproveBean.introducerId,
                custName: this.applyApproveBean.introducerName,
                custAcctNo: this.applyApproveBean.introducerAcctId,
                fromDate: this.datePipe.transform(this.applyApproveBean.fromDate, 'yyyy-MM-dd'),
                thruDate: this.datePipe.transform(this.applyApproveBean.thruDate, 'yyyy-MM-dd'),
                coverCustId: this.list_one.cust2No,
                coverCustName: this.list_one.cust2Name,
                createLoginName: this.userName,
                createOrgName: this.orgName,
            };
            var flag_1 = false;
            for (var _i = 0, _a = this.cust2List; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.coverIntroduceId == this.list_one.cust2No) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '被介绍客户号重复!' });
                    return flag_1 = true;
                }
            }
            this.httpService.ckCovIntroService(temp).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.isShowTip = false;
                    _this.custList.coverIntroduceId = data.coverCustId;
                    _this.custList.coverIntroduceName = data.coverCustName;
                    _this.applyId = data.applyId;
                    _this.custList.applyId = data.applyId;
                    _this.custList.relaId = data.relaId;
                    if (!flag_1) {
                        var b = JSON.parse(JSON.stringify(_this.custList));
                        for (var _i = 0, _a = _this.cust2List; _i < _a.length; _i++) {
                            var i = _a[_i];
                            _this.arr.push(i);
                        }
                        _this.arr.push(b);
                        _this.cust2List = JSON.parse(JSON.stringify(_this.arr));
                        _this.arr = [];
                    }
                    _this.list_one = new _customIntroduceApply_bean_addCustIntroduceApply_bean__WEBPACK_IMPORTED_MODULE_7__["Cust2List"]();
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    return;
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
            });
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '介绍人信息不全!' });
            return;
        }
    };
    ApplyApprovalComponent.prototype.getIndex = function (list, item) {
        var index = -1;
        for (var i = 0; i < list.length; i++) {
            if (list[i].coverIntroduceId == item.coverIntroduceId) {
                index = i;
                break;
            }
        }
        return index;
    };
    //删除
    ApplyApprovalComponent.prototype.delete = function (car) {
        var _this = this;
        var carList = JSON.parse(JSON.stringify(this.cust2List));
        var i = this.getIndex(carList, car);
        carList.splice(i, 1);
        this.cust2List = carList;
        this.arr = [];
        var temp = {
            applyId: car.applyId,
            relaIds: [car.relaId],
        };
        this.httpService.introduceServiceDelete(temp).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '删除成功!' });
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
    ApplyApprovalComponent.prototype.paginateCover = function (event) {
        var _this = this;
        //每页显示的条数
        this.pageSizeCover = event.rows * 1;
        //当前页
        this.pageNumCover = event.page + 1;
        this.first = event.page * event.rows;
        var param = {
            operationNum: this.applyApproveBean.applyId,
            operationType: this.operationTypeIn,
            pageSize: this.pageSizeCover,
            pageNum: this.pageNumCover
        };
        this.httpService.introduceServiceDetailList(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.cust2List = data.pageList;
                _this.totalCover = data.totalNum;
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //重置
    ApplyApprovalComponent.prototype.chongzhi = function () {
        this.list_one.cust2No = '';
        this.list_one.cust2Name = '';
    };
    ApplyApprovalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'applyApproval',
            template: __webpack_require__(/*! ./applyApproval.component.html */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/applyApproval/applyApproval.component.html"),
            styles: [__webpack_require__(/*! ./applyApproval.component.scss */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/applyApproval/applyApproval.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]])
    ], ApplyApprovalComponent);
    return ApplyApprovalComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/applyApproval/bean/applyApproval.bean.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/applyApproval/bean/applyApproval.bean.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ApplyApproveBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyApproveBean", function() { return ApplyApproveBean; });
var ApplyApproveBean = /** @class */ (function () {
    function ApplyApproveBean() {
    }
    return ApplyApproveBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduce.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduce.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 functions\">\r\n        <span *ngIf=\"showTable&&permissionCheck('SID00027_02_01')\">\r\n            <a [routerLink]=\"[ '/pages/tzb/custom/work-rask/customIntroduce/customIntroduceApply']\" class=\"change\" [ngClass]=\"{'active':show==4}\"\r\n                (click)=\"apply(4)\">\r\n                客户介绍客户申请\r\n            </a>\r\n        </span>\r\n        <span *ngIf=\"permissionCheck('SID00027_02_02')\">\r\n            <a [routerLink]=\"[ '/pages/tzb/custom/work-rask/customIntroduce/customIntroduceApplyQuery']\" class=\"change\" [ngClass]=\"{'active':show==1}\"\r\n                (click)=\"apply(1)\">\r\n                客户介绍客户申请历史\r\n            </a>\r\n        </span>\r\n        <span *ngIf=\"permissionCheck('SID00027_02_03')\">\r\n            <a [routerLink]=\"[ '/pages/tzb/custom/work-rask/customIntroduce/customIntroduceRelationshipQuery']\" class=\"change\" [ngClass]=\"{'active':show==2}\"\r\n                (click)=\"apply(2)\">\r\n                介绍关系查询维护\r\n            </a>\r\n        </span>\r\n        <span *ngIf=\"permissionCheck('SID00027_02_04')\">\r\n            <a [routerLink]=\"[ '/pages/tzb/custom/work-rask/customIntroduce/customIntroduceRepealQuery']\" class=\"change\" [ngClass]=\"{'active':show==3}\"\r\n                (click)=\"apply(3)\">\r\n                客户介绍客户撤销历史\r\n            </a>\r\n        </span>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduce.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduce.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host/deep/ .ui-menubar {\n  border: none;\n  background-color: red !important; }\n\n.flt {\n  float: left;\n  background-color: red; }\n\n.basic {\n  margin-top: 5px;\n  background-color: white; }\n\n.functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0;\n  background: #efefef;\n  padding-top: 0; }\n\n.functions .change {\n    display: inline-block;\n    font-size: 15px;\n    height: 40px;\n    line-height: 40px;\n    border-radius: 3px 3px 0 0;\n    color: #929292;\n    padding: 0px 20px;\n    font-weight: bold; }\n\n.active {\n  border: none !important;\n  background-color: #fafafa !important;\n  color: #003f5c !important; }\n\n@media screen and (max-width: 1280px) {\n  .functions {\n    border-bottom: 1px solid #dddddd; }\n    .functions .change {\n      font-size: 14px;\n      padding: 0px 15px; }\n  .active {\n    background-color: #fff !important; }\n  .bgcolor {\n    background: #e5e6e9; } }\n\n.tit_bg {\n  background: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS93b3JrLXJhc2svY3JlZGl0LWludGVyZ3JhdGlvbi9jdXN0b21JbnRyb2R1Y2UvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFx3b3JrLXJhc2tcXGNyZWRpdC1pbnRlcmdyYXRpb25cXGN1c3RvbUludHJvZHVjZVxcY3VzdG9tSW50cm9kdWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGdDQUNKLEVBQUE7O0FBRUE7RUFDSSxXQUFXO0VBQ1gscUJBQ0osRUFBQTs7QUFFQTtFQUNJLGVBQWU7RUFDZix1QkFBdUIsRUFBQTs7QUFJM0I7RUFDSSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUxsQjtJQU9RLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSx1QkFBdUI7RUFDdkIsb0NBQW9DO0VBQ3BDLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJO0lBQ0ksZ0NBQWdDLEVBQUE7SUFEcEM7TUFHUSxlQUFlO01BQ2YsaUJBQWlCLEVBQUE7RUFHekI7SUFDSSxpQ0FBaUMsRUFBQTtFQUVyQztJQUNJLG1CQUFtQixFQUFBLEVBQ3RCOztBQUdMO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL3dvcmstcmFzay9jcmVkaXQtaW50ZXJncmF0aW9uL2N1c3RvbUludHJvZHVjZS9jdXN0b21JbnRyb2R1Y2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC9kZWVwLyAudWktbWVudWJhciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudFxyXG59XHJcblxyXG4uZmx0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkXHJcbn1cclxuXHJcbi5iYXNpYyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLy8g5YiH5o2iXHJcbi5mdW5jdGlvbnMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIC5jaGFuZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xyXG4gICAgICAgIGNvbG9yOiAjOTI5MjkyO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDNmNWMgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgIC5mdW5jdGlvbnMge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgICAgIC5jaGFuZ2Uge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5iZ2NvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTVlNmU5O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGl0X2JnIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduce.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduce.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CustomIntroduceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomIntroduceComponent", function() { return CustomIntroduceComponent; });
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



var CustomIntroduceComponent = /** @class */ (function () {
    function CustomIntroduceComponent(commfunc, router) {
        this.commfunc = commfunc;
        this.router = router;
        this.showTable = false;
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.extParam) {
            this.extParam = this.user.extParam;
        }
    }
    CustomIntroduceComponent.prototype.ngOnInit = function () {
        var _this = this;
        if ((this.extParam["khjskhXDZHG"] == "khjskhXDZHG_value" || this.extParam["khjskhBZKHJL"] == "khjskhBZKHJL_value") && this.permissionCheck('SID00027_02_01')) {
            this.showTable = true;
            this.show = 4;
        }
        else if (this.permissionCheck('SID00027_02_02')) {
            this.router.navigate(["pages/tzb/custom/work-rask/customIntroduce/customIntroduceApplyQuery"]);
            this.show = 1;
        }
        else if (this.permissionCheck('SID00027_02_03')) {
            this.router.navigate(["pages/tzb/custom/work-rask/customIntroduce/customIntroduceRelationshipQuery"]);
            this.show = 2;
        }
        else if (this.permissionCheck('SID00027_02_04')) {
            this.router.navigate(["pages/tzb/custom/work-rask/customIntroduce/customIntroduceRepealQuery"]);
            this.show = 3;
        }
        setTimeout(function () {
            _this.judgStatu();
        });
    };
    CustomIntroduceComponent.prototype.apply = function (num) {
        this.show = num;
    };
    //判断当前路由 改变样式active
    CustomIntroduceComponent.prototype.judgStatu = function () {
        var _this = this;
        var url = window.location.href;
        var urlSplit = url.split('/');
        urlSplit.map(function (v) {
            if (v === 'customIntroduceApply') {
                _this.show = 4;
            }
            else if (v === 'customIntroduceApplyQuery') {
                _this.show = 1;
            }
            else if (v === 'customIntroduceRelationshipQuery') {
                _this.show = 2;
            }
            else if (v === 'customIntroduceRepealQuery') {
                _this.show = 3;
            }
        });
    };
    //按钮权限
    CustomIntroduceComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomIntroduceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customIntroduce',
            template: __webpack_require__(/*! ./customIntroduce.component.html */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduce.component.html"),
            styles: [__webpack_require__(/*! ./customIntroduce.component.scss */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduce.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomIntroduceComponent);
    return CustomIntroduceComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduce.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduce.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CustomIntroduceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomIntroduceModule", function() { return CustomIntroduceModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customIntroduce_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customIntroduce.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduce.component.ts");
/* harmony import */ var _customIntroduce_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customIntroduce.routing */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduce.routing.ts");
/* harmony import */ var _applyApproval_applyApproval_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./applyApproval/applyApproval.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/applyApproval/applyApproval.component.ts");
/* harmony import */ var _repealApproval_repealApproval_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./repealApproval/repealApproval.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/repealApproval/repealApproval.component.ts");
/* harmony import */ var _customIntroduceApply_customIntroduceApply_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customIntroduceApply/customIntroduceApply.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApply/customIntroduceApply.component.ts");
/* harmony import */ var _customIntroduceRepeal_customIntroduceRepeal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customIntroduceRepeal/customIntroduceRepeal.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepeal/customIntroduceRepeal.component.ts");
/* harmony import */ var _customIntroduceApplyQuery_customIntroduceApplyQuery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customIntroduceApplyQuery/customIntroduceApplyQuery.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApplyQuery/customIntroduceApplyQuery.component.ts");
/* harmony import */ var _customIntroduceRepealQuery_customIntroduceRepealQuery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customIntroduceRepealQuery/customIntroduceRepealQuery.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepealQuery/customIntroduceRepealQuery.component.ts");
/* harmony import */ var _customIntroduceRelationshipQuery_customIntroduceRelationshipQuery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./customIntroduceRelationshipQuery/customIntroduceRelationshipQuery.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRelationshipQuery/customIntroduceRelationshipQuery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var CustomIntroduceModule = /** @class */ (function () {
    function CustomIntroduceModule() {
    }
    CustomIntroduceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _customIntroduce_routing__WEBPACK_IMPORTED_MODULE_5__["CustomIntroduceRouting"]
            ],
            declarations: [
                _customIntroduce_component__WEBPACK_IMPORTED_MODULE_4__["CustomIntroduceComponent"],
                _applyApproval_applyApproval_component__WEBPACK_IMPORTED_MODULE_6__["ApplyApprovalComponent"],
                _repealApproval_repealApproval_component__WEBPACK_IMPORTED_MODULE_7__["RepealApprovalComponent"],
                _customIntroduceApply_customIntroduceApply_component__WEBPACK_IMPORTED_MODULE_8__["CustomIntroduceApplyComponent"],
                _customIntroduceRepeal_customIntroduceRepeal_component__WEBPACK_IMPORTED_MODULE_9__["CustomIntroduceRepealComponent"],
                _customIntroduceApplyQuery_customIntroduceApplyQuery_component__WEBPACK_IMPORTED_MODULE_10__["CustomIntroduceApplyQueryComponent"],
                _customIntroduceRepealQuery_customIntroduceRepealQuery_component__WEBPACK_IMPORTED_MODULE_11__["CustomIntroduceRepealQueryComponent"],
                _customIntroduceRelationshipQuery_customIntroduceRelationshipQuery_component__WEBPACK_IMPORTED_MODULE_12__["CustomIntroduceRelationshipQueryComponent"]
            ],
            providers: []
        })
    ], CustomIntroduceModule);
    return CustomIntroduceModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduce.routing.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduce.routing.ts ***!
  \***********************************************************************************************************/
/*! exports provided: CustomIntroduceRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomIntroduceRouting", function() { return CustomIntroduceRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customIntroduce_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customIntroduce.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduce.component.ts");
/* harmony import */ var _customIntroduceApply_customIntroduceApply_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customIntroduceApply/customIntroduceApply.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApply/customIntroduceApply.component.ts");
/* harmony import */ var _customIntroduceRepeal_customIntroduceRepeal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customIntroduceRepeal/customIntroduceRepeal.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepeal/customIntroduceRepeal.component.ts");
/* harmony import */ var _customIntroduceApplyQuery_customIntroduceApplyQuery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customIntroduceApplyQuery/customIntroduceApplyQuery.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApplyQuery/customIntroduceApplyQuery.component.ts");
/* harmony import */ var _customIntroduceRepealQuery_customIntroduceRepealQuery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customIntroduceRepealQuery/customIntroduceRepealQuery.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepealQuery/customIntroduceRepealQuery.component.ts");
/* harmony import */ var _customIntroduceRelationshipQuery_customIntroduceRelationshipQuery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customIntroduceRelationshipQuery/customIntroduceRelationshipQuery.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRelationshipQuery/customIntroduceRelationshipQuery.component.ts");
/* harmony import */ var _applyApproval_applyApproval_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./applyApproval/applyApproval.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/applyApproval/applyApproval.component.ts");
/* harmony import */ var _repealApproval_repealApproval_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./repealApproval/repealApproval.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/repealApproval/repealApproval.component.ts");









var routes = [
    {
        path: '',
        component: _customIntroduce_component__WEBPACK_IMPORTED_MODULE_1__["CustomIntroduceComponent"],
        children: [
            {
                path: 'customIntroduceApply',
                component: _customIntroduceApply_customIntroduceApply_component__WEBPACK_IMPORTED_MODULE_2__["CustomIntroduceApplyComponent"]
            },
            {
                path: 'customIntroduceRepeal',
                component: _customIntroduceRepeal_customIntroduceRepeal_component__WEBPACK_IMPORTED_MODULE_3__["CustomIntroduceRepealComponent"]
            },
            {
                path: 'customIntroduceApplyQuery',
                component: _customIntroduceApplyQuery_customIntroduceApplyQuery_component__WEBPACK_IMPORTED_MODULE_4__["CustomIntroduceApplyQueryComponent"]
            },
            {
                path: 'customIntroduceRepealQuery',
                component: _customIntroduceRepealQuery_customIntroduceRepealQuery_component__WEBPACK_IMPORTED_MODULE_5__["CustomIntroduceRepealQueryComponent"]
            },
            {
                path: 'customIntroduceRelationshipQuery',
                component: _customIntroduceRelationshipQuery_customIntroduceRelationshipQuery_component__WEBPACK_IMPORTED_MODULE_6__["CustomIntroduceRelationshipQueryComponent"]
            },
        ]
    },
    {
        path: 'applyApproval',
        component: _applyApproval_applyApproval_component__WEBPACK_IMPORTED_MODULE_7__["ApplyApprovalComponent"]
    },
    {
        path: 'repealApproval',
        component: _repealApproval_repealApproval_component__WEBPACK_IMPORTED_MODULE_8__["RepealApprovalComponent"]
    }
];
var CustomIntroduceRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApply/bean/addCustIntroduceApply.bean.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApply/bean/addCustIntroduceApply.bean.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: AddCustIntroduceApplyBean, Cust2List, ExTableList, BussinessMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustIntroduceApplyBean", function() { return AddCustIntroduceApplyBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cust2List", function() { return Cust2List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExTableList", function() { return ExTableList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BussinessMap", function() { return BussinessMap; });
//客户介绍客户申请
var AddCustIntroduceApplyBean = /** @class */ (function () {
    function AddCustIntroduceApplyBean() {
    }
    return AddCustIntroduceApplyBean;
}());

//单笔录入
var Cust2List = /** @class */ (function () {
    function Cust2List() {
    }
    return Cust2List;
}());

//批量录入
var ExTableList = /** @class */ (function () {
    function ExTableList() {
    }
    return ExTableList;
}());

var BussinessMap = /** @class */ (function () {
    function BussinessMap() {
    }
    return BussinessMap;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApply/customIntroduceApply.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApply/customIntroduceApply.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\" *ngIf=\"permissionCheck('SID00027_02_01')\">\r\n    <div class=\"ui-g-12\" *ngIf=\"firstPage\">\r\n        <header-title [Info]=\"'客户介绍客户申请'\"></header-title>\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-4 right\">\r\n                        <span appValidation>介绍人客户号:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <input type=\"text\" name=\"custNo\" formControlName=\"custNo\" pInputText [(ngModel)]=\"addCustIntroduceApplyBean.custNo\" (blur)=\"myFunction()\"\r\n                            (keyup)=\"onKeyupNumber($event,1)\" />\r\n                        <span class=\"requireLabel\" *ngIf=\"!userform.controls['custNo'].valid&&userform.controls['custNo'].dirty && isShowTip\">介绍客户号不能为空!</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-4 right\">\r\n                        <span appValidation>介绍人客户名称:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <input type=\"text\" disabled name=\"custName\" formControlName=\"custName\" pInputText [(ngModel)]=\"addCustIntroduceApplyBean.custName\"\r\n                        />\r\n                        <span class=\"requireLabel\" *ngIf=\"!userform.controls['custName'].valid&&userform.controls['custName'].dirty && isShowTip\">介绍客户名称不能为空!</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-4 right\">\r\n                        <span appValidation>介绍人存款账号:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <input type=\"text\" name=\"custAcctNo\" formControlName=\"custAcctNo\" pInputText [(ngModel)]=\"addCustIntroduceApplyBean.custAcctNo\"\r\n                        />\r\n                        <span class=\"requireLabel\" *ngIf=\"!userform.controls['custAcctNo'].valid&&userform.controls['custAcctNo'].dirty && isShowTip\">介绍客户账号不能为空!</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-4 right\">\r\n                        <span appValidation>生效日期:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <p-calendar disabled=\"true\" [maxDate]=\"thruDate\" [showOtherMonths]=\"false\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                            yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" name=\"fromDate\" formControlName=\"fromDate\" [showIcon]=\"true\"\r\n                            [locale]=\"ch\" [(ngModel)]=\"fromDate\"></p-calendar>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-4 right\">\r\n                        <span appValidation>到期日期:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <p-calendar [showIcon]=\"true\" [minDate]=\"fromDate\" [showOtherMonths]=\"false\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                            yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" name=\"thruDate\" formControlName=\"thruDate\" [locale]=\"ch\"\r\n                            [(ngModel)]=\"thruDate\" (onSelect)=\"checkDate()\" (onBlur)=\"checkDate()\"></p-calendar>\r\n                        <span class=\"requireLabel\" *ngIf=\"!userform.controls['thruDate'].valid&&userform.controls['thruDate'].dirty && isShowTip\">到期日期不能为空!</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <!-- <hr/>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 right\">\r\n                    <span>经办人:</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" disabled pInputText [(ngModel)]=\"userName\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 right\">\r\n                    <span>经办日期:</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-calendar disabled=\"true\" dateFormat=\"yy-mm-dd\" [showIcon]=\"true\" [locale]=\"ch\" [(ngModel)]=\"date\"></p-calendar>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 right\">\r\n                    <span>经办机构:</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" disabled pInputText [(ngModel)]=\"orgName\" />\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n        <div class=\"ui-g-12 btn\">\r\n            <button pButton type=\"button\" label=\"下一步\" (click)=\"toNext(1)\"></button>\r\n            <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 cusInfor\" *ngIf=\"secondPage\">\r\n        <header-title [Info]=\"'被介绍客户'\"></header-title>\r\n        <div class=\"ui-g-12 chooseTit\">\r\n            <p-radioButton class=\"ui-g-4\" name=\"qryScope1\" value=\"1\" label=\"客户录入\" [(ngModel)]=\"isChecked\" (click)=\"cusCreate()\"></p-radioButton>\r\n            <p-radioButton class=\"ui-g-4\" name=\"qryScope1\" value=\"2\" label=\"模板批量导入\" [(ngModel)]=\"isChecked\" (click)=\"import1() \"></p-radioButton>\r\n        </div>\r\n        <div class=\"ui-g-12\" *ngIf=\"customcreate\">\r\n            <form [formGroup]=\"introform\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-4 right\">\r\n                            <span appValidation>被介绍客户号:</span>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <input formControlName=\"cust2No\" type=\"text\" pInputText [(ngModel)]=\"list_one.cust2No\" (blur)=\"myFunction2()\" (keyup)=\"onKeyupNumber($event,2)\"\r\n                            />\r\n                            <span class=\"requireLabel\" *ngIf=\"!introform.controls['cust2No'].valid&&introform.controls['cust2No'].dirty && isShowTip\">介绍客户名称不能为空!</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-4 right\">\r\n                            <span appValidation>被介绍客户名称:</span>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <input formControlName=\"cust2Name\" type=\"text\" disabled pInputText [(ngModel)]=\"list_one.cust2Name\" />\r\n                            <span class=\"requireLabel\" *ngIf=\"!introform.controls['cust2Name'].valid&&introform.controls['cust2Name'].dirty && isShowTip\">介绍客户名称不能为空!</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <div class=\"ui-g-12 btn\">\r\n                <button pButton type=\"button\" label=\"添加\" (click)=\"add()\"></button>\r\n                <button pButton type=\"button\" label=\"重置\" (click)=\"chongzhi()\"></button>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <button class=\"btn_1\" pButton type=\"submit\" label=\"点击展开查询\" *ngIf=\"qryshow==1\" (click)=\"showQry(1)\"></button>\r\n                <button class=\"btn_1\" pButton type=\"submit\" label=\"点击收起查询\" *ngIf=\"qryshow==2\" (click)=\"showQry(2)\"></button>\r\n            </div>\r\n            <div class=\"ui-g-12\" *ngIf=\"qryshowPage\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-4 right\">\r\n                        <span>被介绍客户号:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <input type=\"text\" pInputText [(ngModel)]=\"coverIntroducerId\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-4 right\">\r\n                        <span>被介绍客户名称:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <input type=\"text\" pInputText [(ngModel)]=\"coverIntroducerName\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 btn\" *ngIf=\"qryshowPage\">\r\n                <button pButton type=\"button\" label=\"查询\" (click)=\"queryCover(1)\"></button>\r\n                <button pButton type=\"button\" label=\"重置\" (click)=\"chongzhiCover(1)\"></button>\r\n            </div>\r\n            <div class=\"ui-g-12 table base-table\">\r\n                <p-dataTable [value]=\"dataOne\" [emptyMessage]=\"tabMesg\">\r\n                    <p-column field=\"coverCustId\" header=\"被介绍人客户号\"></p-column>\r\n                    <p-column field=\"coverCustName\" header=\"被介绍人客户名称\"></p-column>\r\n                    <p-column header=\"操作\">\r\n                        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                            <div class=\"table-button\">\r\n                                <span class=\"tabelDeleteIco\" (click)=\"delete(col,1)\">删除</span>\r\n                            </div>\r\n                        </ng-template>\r\n                    </p-column>\r\n                </p-dataTable>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12 bulkImport\" *ngIf=\"bulkImport\">\r\n            <div class=\"ui-g-12\">\r\n                <strong>Excel文件格式说明：</strong>\r\n                <br/> *Excel文件中潜在客户名称为必输项。\r\n                <br/> *Excel文件最大不能超过200行记录。\r\n                <br/> *Excel文件中客户号不能为空，并且不能重复\r\n                <br/> *更多注意事项请查看模板中的“填报说明”。\r\n                <br/> *请先下载模板：\r\n                <a href=\"{{DOWNLOAD}}?fileName=khjskhImport.xls&fileUrl=/copdata/moban\" style=\"color:red\">下载模板</a>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <!-- <strong>批量创建（Ecxel文件导入）</strong>\r\n                <br/> -->\r\n                <p-fileUpload chooseLabel=\"浏览\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"myUploader($event)\"\r\n                    multiple=\"multiple\"></p-fileUpload>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <button class=\"btn_1\" pButton type=\"submit\" label=\"点击展开查询\" *ngIf=\"qryshowMore==1\" (click)=\"showQryMore(1)\"></button>\r\n                <button class=\"btn_1\" pButton type=\"submit\" label=\"点击收起查询\" *ngIf=\"qryshowMore==2\" (click)=\"showQryMore(2)\"></button>\r\n            </div>\r\n            <div class=\"ui-g-12\" *ngIf=\"qryshowPageMore\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-4 right\">\r\n                        <span>被介绍客户号:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <input type=\"text\" pInputText [(ngModel)]=\"coverIntroducerIdEx\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-4 right\">\r\n                        <span>被介绍客户名称:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <input type=\"text\" pInputText [(ngModel)]=\"coverIntroducerNameEx\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 btn\" *ngIf=\"qryshowPageMore\">\r\n                <button pButton type=\"button\" label=\"查询\" (click)=\"queryCover(2)\"></button>\r\n                <button pButton type=\"button\" label=\"重置\" (click)=\"chongzhiCover(2)\"></button>\r\n            </div>\r\n            <div class=\"ui-g-12 table base-table\">\r\n                <p-dataTable [value]=\"excleTable\" [emptyMessage]=\"tabMesg\">\r\n                    <p-column field=\"coverIntroduceId\" header=\"被介绍人客户号\"></p-column>\r\n                    <p-column field=\"coverIntroduceName\" header=\"被介绍人客户名称\"></p-column>\r\n                    <p-column header=\"操作\">\r\n                        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                            <div class=\"table-button\">\r\n                                <span class=\"tabelDeleteIco\" (click)=\"delete(col,2)\">删除</span>\r\n                            </div>\r\n                        </ng-template>\r\n                    </p-column>\r\n                </p-dataTable>\r\n                <p-paginator [first]=\"first\" rows={{pageSizeCover}} totalRecords={{totalCover}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginateCover($event)\"></p-paginator>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 btn\">\r\n\r\n            <button pButton type=\"button\" label=\"上一步\" (click)=\"toNext(2)\"></button>\r\n            <button pButton type=\"button\" label=\"提交\" (click)=\"commit()\"></button>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n\r\n<!-- 选人服务 -->\r\n<p-dialog *ngIf=\"choosePerson\" header=\"提交给\" modal=\"modal\" width='435' [(visible)]=\"choosePerson\" (onHide)=\"choosePersonHide()\"\r\n    class=\"style_dialog\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>\r\n<!-- 错误展示 -->\r\n<p-dialog *ngIf=\"errorPage\" [(visible)]=\"errorPage\" header=\"被介绍人校验失败展示\" modal=\"modal\" width='435' (onHide)=\"closeBack()\"\r\n    class=\"style_dialog\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12\">\r\n            <span>本次共导入名单{{sumNum}}条,</span>\r\n            <span>成功{{successNum}}条,</span>\r\n            <span>失败{{failedNum}}条</span>\r\n        </div>\r\n        <div class=\"ui-g-12 table base-table\">\r\n            <p-dataTable [value]=\"excleFailedTable\" [emptyMessage]=\"tabMesg\">\r\n                <p-column field=\"coverCustId\" header=\"被介绍人客户号\"></p-column>\r\n                <p-column field=\"coverIntroducerName\" header=\"被介绍人客户名称\"></p-column>\r\n                <p-column field=\"remarksInfo\" header=\"客户说明\"></p-column>\r\n            </p-dataTable>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <button pButton type=\"button\" label=\"关闭\" (click)=\"closeBack()\"></button>\r\n        </div>\r\n    </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApply/customIntroduceApply.component.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApply/customIntroduceApply.component.scss ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".BigTit {\n  display: flex;\n  flex-direction: row;\n  background: #eaeaea;\n  padding: 0; }\n  .BigTit .titBgColor {\n    width: 230px;\n    height: 45px;\n    text-align: center;\n    line-height: 45px;\n    display: inline-block;\n    cursor: pointer; }\n  .btn,\n.table {\n  text-align: center; }\n  .functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0; }\n  .functions .change {\n    display: inline-block;\n    font-size: 15px;\n    height: 40px;\n    line-height: 40px;\n    border-radius: 3px 3px 0 0;\n    color: #929292;\n    padding: 0px 30px;\n    font-weight: bold;\n    cursor: pointer; }\n  .active {\n  border: none !important;\n  background-color: #f7f7f7 !important;\n  color: #003f5c !important; }\n  .center {\n  text-align: right; }\n  .bgcolor {\n  background: #f7f7f7; }\n  .btn_1 {\n  background: #e6b800; }\n  .btn_1:hover {\n    background: #dbaf00; }\n  .right {\n  text-align: right;\n  padding-right: 5px !important; }\n  .ui-g-6 .ui-g-4,\n.ui-g-6 .ui-g-6 {\n  padding: 0; }\n  .requireLabel {\n  color: #ff0000; }\n  :host/deep/ .style_dialog .ui-dialog.ui-shadow {\n  width: 60% !important;\n  height: 500px !important; }\n  :host/deep/ .style_dialog .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n  .cusInfor {\n  position: relative; }\n  .shadow {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 200px;\n  background: rgba(0, 0, 0, 0.1);\n  z-index: 1000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS93b3JrLXJhc2svY3JlZGl0LWludGVyZ3JhdGlvbi9jdXN0b21JbnRyb2R1Y2UvY3VzdG9tSW50cm9kdWNlQXBwbHkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFx3b3JrLXJhc2tcXGNyZWRpdC1pbnRlcmdyYXRpb25cXGN1c3RvbUludHJvZHVjZVxcY3VzdG9tSW50cm9kdWNlQXBwbHlcXGN1c3RvbUludHJvZHVjZUFwcGx5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsVUFBVSxFQUFBO0VBSmQ7SUFNUSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGVBQWUsRUFBQTtFQVN2Qjs7RUFFSSxrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZUFBZSxFQUFBO0VBSG5CO0lBS1EscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7RUFJdkI7RUFDSSx1QkFBdUI7RUFDdkIsb0NBQW9DO0VBQ3BDLHlCQUF5QixFQUFBO0VBRzdCO0VBQ0ksaUJBQWlCLEVBQUE7RUFHckI7RUFDSSxtQkFBbUIsRUFBQTtFQUd2QjtFQUNJLG1CQUFtQixFQUFBO0VBRHZCO0lBR1EsbUJBQW1CLEVBQUE7RUFJM0I7RUFDSSxpQkFBaUI7RUFDakIsNkJBQTZCLEVBQUE7RUFHakM7O0VBR1EsVUFBVSxFQUFBO0VBSWxCO0VBQ0ksY0FBYyxFQUFBO0VBR2xCO0VBQ0kscUJBQXFCO0VBQ3JCLHdCQUF3QixFQUFBO0VBRzVCO0VBQ0ksc0JBQXNCLEVBQUE7RUFHMUI7RUFDSSxrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vd29yay1yYXNrL2NyZWRpdC1pbnRlcmdyYXRpb24vY3VzdG9tSW50cm9kdWNlL2N1c3RvbUludHJvZHVjZUFwcGx5L2N1c3RvbUludHJvZHVjZUFwcGx5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkJpZ1RpdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLnRpdEJnQ29sb3Ige1xyXG4gICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC5hY3RpdmV7XHJcbi8vICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmEgIWltcG9ydGFudDtcclxuLy8gICAgIGNvbG9yOiAjMTliMGM4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE5YjBjODtcclxuLy8gfVxyXG4uYnRuLFxyXG4udGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZnVuY3Rpb25zIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAuY2hhbmdlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICAgICAgICBjb2xvcjogIzkyOTI5MjtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwM2Y1YyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYmdjb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG59XHJcblxyXG4uYnRuXzEge1xyXG4gICAgYmFja2dyb3VuZDogI2U2YjgwMDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkYmFmMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweCAhaW1wb3J0YW50OztcclxufVxyXG5cclxuLnVpLWctNiB7XHJcbiAgICAudWktZy00LFxyXG4gICAgLnVpLWctNiB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5cclxuLnJlcXVpcmVMYWJlbCB7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnN0eWxlX2RpYWxvZyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5zdHlsZV9kaWFsb2cgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c0luZm9yIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNoYWRvdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApply/customIntroduceApply.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApply/customIntroduceApply.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: CustomIntroduceApplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomIntroduceApplyComponent", function() { return CustomIntroduceApplyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_addCustIntroduceApply_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/addCustIntroduceApply.bean */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApply/bean/addCustIntroduceApply.bean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var CustomIntroduceApplyComponent = /** @class */ (function () {
    function CustomIntroduceApplyComponent(fb, router, commfunc, httpService, ce, datePipe, confirmationService, routeInfo) {
        this.fb = fb;
        this.router = router;
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.ce = ce;
        this.datePipe = datePipe;
        this.confirmationService = confirmationService;
        this.routeInfo = routeInfo;
        this.first = 0;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"]; //表格中无数据时显示的内容
        this.msgs = [];
        this.items = [];
        this.fromDate = null;
        this.thruDate = null;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["CALENDAR_CN"];
        this.isChecked = '1';
        this.customcreate = true;
        this.bulkImport = false;
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_CUS_UPLOAD"];
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_CUS_DOWNLOAD"];
        //批量校验
        this.exTableList = {
            coverCustId: '',
            coverCustName: '',
            remarksInfo: '',
            applyId: '',
            relaId: '',
        };
        //单笔校验
        this.cust2List = {
            coverCustId: '',
            coverCustName: '',
            remarksInfo: '',
            applyId: '',
            relaId: '',
        };
        this.dataOne = []; //单笔录入
        this.arr = [];
        this.uploadedFiles = [];
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.date = new Date();
        this.cars = [];
        //隐藏查询
        this.qryshow = 1;
        this.qryshowPage = false;
        //批量导入查询
        this.qryshowMore = 1;
        this.qryshowPageMore = false;
        this.excleTable = []; //文件导入失败列表
        this.excleListSuccess = []; //文件导入成功列表
        this.groupTable = []; //客户群失败列表
        this.groupListSuccess = []; //客户群成功列表
        this.yesOrNo = false;
        this.applyId = ""; //申请批次号
        this.checkFlag = false; //校验标志
        this.addCustIntroduceApplyBean = new _bean_addCustIntroduceApply_bean__WEBPACK_IMPORTED_MODULE_4__["AddCustIntroduceApplyBean"]();
        this.list_one = new _bean_addCustIntroduceApply_bean__WEBPACK_IMPORTED_MODULE_4__["Cust2List"]();
        this.list_exTable = new _bean_addCustIntroduceApply_bean__WEBPACK_IMPORTED_MODULE_4__["ExTableList"]();
        //选人
        this.choosePerson = false;
        this.firstPage = true; //第一步
        this.secondPage = false; //第二步
        this.excleFailedTable = []; //校验失败的展示列表
        this.errorPage = false; //校验失败的展示弹框
        //批量被介绍的分页
        this.pageSizeCover = 10;
        this.pageNumCover = 1;
        this.isShowTip = true; //校验隐藏
        this.changePart = 0; //上下一步切换
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
        this.userform = fb.group({
            custNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            custName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            custAcctNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            fromDate: [''],
            thruDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.introform = this.fb.group({
            'cust2No': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'cust2Name': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        });
    }
    CustomIntroduceApplyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.codeValues();
        this.relaStatusOptions = this.code['relaStatusIntro']; //状态
        this.updateList = this.routeInfo.snapshot.params;
        this.fromDate = this.date;
        this.dateEnd = moment__WEBPACK_IMPORTED_MODULE_9__().add(1, 'year').format('Y-MM-DD');
        this.thruDate = new Date(this.dateEnd);
        //console.log(this.routeInfo.snapshot.params)
        if (this.updateList['updateFlag'] == '0') {
            var temp = {
                operationType: '1',
                reStas: '1,4',
                relaStatus: 'relaStatus',
                operationNum: this.updateList['operationNum']
            };
            var items = {
                operationNum: this.updateList['operationNum'],
                operationType: '1',
            };
            this.httpService.introduceServiceList(items).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    if (data.pageList && data.pageList.length > 0) {
                        var updateArray_1 = [];
                        data.pageList.forEach(function (item, i) {
                            if (_this.updateList.operationNum == item.operationNum) {
                                updateArray_1.push(item);
                            }
                        });
                        _this.applyId = updateArray_1[0].operationNum;
                        _this.addCustIntroduceApplyBean.custNo = updateArray_1[0].introducerId;
                        _this.addCustIntroduceApplyBean.custName = updateArray_1[0].introducerName;
                        _this.addCustIntroduceApplyBean.custAcctNo = updateArray_1[0].introducerAcctId;
                        _this.fromDate = new Date(updateArray_1[0].fromDate);
                        _this.thruDate = new Date(updateArray_1[0].thruDate);
                        _this.userName = updateArray_1[0].applicantUserName;
                        _this.date = updateArray_1[0].createdStamp;
                        _this.orgName = updateArray_1[0].applicantOrgName;
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
            this.httpService.introduceServiceDetailList(temp).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    if (data.pageList && data.pageList.length > 0) {
                        var updateArray_2 = [];
                        data.pageList.forEach(function (item, i) {
                            if (_this.updateList.operationNum == item.applyId) {
                                updateArray_2.push(item);
                            }
                        });
                        var arrTable = [];
                        var arr = [];
                        arr.push({
                            coverCustId: updateArray_2[0].coverIntroduceId,
                            coverCustName: updateArray_2[0].coverIntroduceName,
                            applyId: updateArray_2[0].applyId,
                            relaId: updateArray_2[0].relaId,
                        });
                        arrTable.push({
                            coverIntroduceId: updateArray_2[0].coverIntroduceId,
                            coverIntroduceName: updateArray_2[0].coverIntroduceName,
                            applyId: updateArray_2[0].applyId,
                            relaId: updateArray_2[0].relaId,
                        });
                        if (updateArray_2.length > 1) {
                            var newarr = updateArray_2.slice(1);
                            for (var _i = 0, newarr_1 = newarr; _i < newarr_1.length; _i++) {
                                var item = newarr_1[_i];
                                if (item.applyId == updateArray_2[0].applyId) {
                                    arr.push({
                                        coverCustId: item.coverIntroduceId,
                                        coverCustName: item.coverIntroduceName,
                                        applyId: item.applyId,
                                        relaId: item.relaId,
                                    });
                                    arrTable.push({
                                        coverIntroduceId: item.coverIntroduceId,
                                        coverIntroduceName: item.coverIntroduceName,
                                        applyId: item.applyId,
                                        relaId: item.relaId,
                                    });
                                }
                            }
                        }
                        if (data.pageList[0].introducerType == '0') {
                            _this.dataOne = arr;
                            _this.isChecked = '1';
                            _this.customcreate = true;
                            _this.bulkImport = false;
                        }
                        else if (data.pageList[0].introducerType == '1') {
                            _this.excleTable = arrTable;
                            _this.isChecked = '2';
                            _this.customcreate = false;
                            _this.bulkImport = true;
                        }
                    }
                    else {
                        return;
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
        }
    };
    //页面销毁之前调用
    CustomIntroduceApplyComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        if (this.updateList['updateFlag'] == '0') {
            return;
        }
        this.introduceCheck();
        if (this.addCustIntroduceApplyBean.custNo && this.addCustIntroduceApplyBean.custNo != ''
            && this.addCustIntroduceApplyBean.custName && this.addCustIntroduceApplyBean.custName != ''
            && this.addCustIntroduceApplyBean.custAcctNo && this.addCustIntroduceApplyBean.custAcctNo != ''
            && this.thruDate && this.thruDate != null
            && this.fromDate && this.fromDate != null) {
            var temp = {
                applyId: this.applyId,
                custId: this.addCustIntroduceApplyBean.custNo,
                custName: this.addCustIntroduceApplyBean.custName,
                custAcctNo: this.addCustIntroduceApplyBean.custAcctNo,
                fromDate: this.datePipe.transform(this.fromDate, 'yyyy-MM-dd'),
                thruDate: this.datePipe.transform(this.thruDate, 'yyyy-MM-dd'),
                coverCustId: this.list_one.cust2No,
                coverCustName: this.list_one.cust2Name,
                createLoginName: this.userName,
                createOrgName: this.orgName,
            };
            this.httpService.ckCovIntroService(temp).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    return;
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
            });
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请先录入介绍人客户信息!' });
            return;
        }
    };
    //码值
    CustomIntroduceApplyComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //客户录入
    CustomIntroduceApplyComponent.prototype.cusCreate = function () {
        this.customcreate = true;
        this.bulkImport = false;
        this.isChecked = '1';
    };
    //批量导入
    CustomIntroduceApplyComponent.prototype.import1 = function () {
        this.isChecked = '2';
        this.customcreate = false;
        this.bulkImport = true;
    };
    //提交审批
    CustomIntroduceApplyComponent.prototype.commit = function () {
        var _this = this;
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
        if ((!this.dataOne || this.dataOne.length == 0) && (!this.excleTable || this.excleTable.length == 0)) {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: '提示', detail: '必须选择一种被介绍客户录入方式!' });
            return;
        }
        else {
            this.confirmationService.confirm({
                message: '是否提交审批?',
                accept: function () {
                    _this.submit_1();
                }
            });
        }
    };
    //提交1
    CustomIntroduceApplyComponent.prototype.submit_1 = function () {
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (s.extParam.specifyNextOpers) {
            delete s.extParam.specifyNextOpers;
            var commonHeader = s;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        }
        this.waitSelUserList = this.commfunc.query('KHJSKHLC', {});
        if (!this.waitSelUserList.erro) {
            this.outVal = this.waitSelUserList.waitSelUserList;
            var chooseThis = this.waitSelUserList.display;
            var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            var a2 = commonHeader.extParam.specifyNextOpers;
            if (chooseThis == true && (a2 == undefined || a2 == '' || a2 == null)) {
                this.choosePerson = true;
            }
            else {
                this.submit_2();
            }
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
        }
    };
    //提交2
    CustomIntroduceApplyComponent.prototype.submit_2 = function () {
        var _this = this;
        var params = {
            applyId: this.applyId,
            operationType: "1",
        };
        this.httpService.approveCustIntroduceCust(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '提交成功' });
                setTimeout(function () {
                    _this.router.navigate(["pages/tzb/custom/work-rask/customIntroduce/customIntroduceApplyQuery"]);
                }, 2000);
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
    CustomIntroduceApplyComponent.prototype.outDisplayCall = function (event) {
        this.choosePerson = event;
    };
    CustomIntroduceApplyComponent.prototype.outValueCall = function (event) {
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.submit_2();
    };
    CustomIntroduceApplyComponent.prototype.choosePersonHide = function () {
        this.choosePerson = false;
    };
    //被介绍添加
    CustomIntroduceApplyComponent.prototype.add = function () {
        var _this = this;
        if (this.temp_No != this.list_one.cust2No) {
            this.myFunction2();
        }
        this.isShowTip = true;
        //校验的
        for (var i in this.introform.controls) {
            this.introform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.introform.controls) {
            if (!this.introform.controls[i].valid) {
                return;
            }
        }
        if (this.addCustIntroduceApplyBean.custNo && this.addCustIntroduceApplyBean.custNo != ''
            && this.addCustIntroduceApplyBean.custName && this.addCustIntroduceApplyBean.custName != ''
            && this.addCustIntroduceApplyBean.custAcctNo && this.addCustIntroduceApplyBean.custAcctNo != ''
            && this.thruDate && this.thruDate != null
            && this.fromDate && this.fromDate != null) {
            var temp = {
                applyId: this.applyId,
                custId: this.addCustIntroduceApplyBean.custNo,
                custName: this.addCustIntroduceApplyBean.custName,
                custAcctNo: this.addCustIntroduceApplyBean.custAcctNo,
                fromDate: this.datePipe.transform(this.fromDate, 'yyyy-MM-dd'),
                thruDate: this.datePipe.transform(this.thruDate, 'yyyy-MM-dd'),
                coverCustId: this.list_one.cust2No,
                coverCustName: this.list_one.cust2Name,
                createLoginName: this.userName,
                createOrgName: this.orgName,
            };
            var flag_1 = false;
            for (var _i = 0, _a = this.dataOne; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.coverCustId == this.list_one.cust2No) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '被介绍客户号重复!' });
                    return flag_1 = true;
                }
            }
            this.httpService.ckCovIntroService(temp).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.isShowTip = false;
                    _this.cust2List.remarksInfo = data.remarksInfo;
                    _this.cust2List.coverCustId = data.coverCustId;
                    _this.cust2List.coverCustName = data.coverCustName;
                    _this.applyId = data.applyId;
                    _this.cust2List.applyId = data.applyId;
                    _this.cust2List.relaId = data.relaId;
                    if (!flag_1) {
                        var b = JSON.parse(JSON.stringify(_this.cust2List));
                        for (var _i = 0, _a = _this.dataOne; _i < _a.length; _i++) {
                            var i = _a[_i];
                            _this.arr.push(i);
                        }
                        _this.arr.push(b);
                        _this.dataOne = JSON.parse(JSON.stringify(_this.arr));
                        _this.arr = [];
                    }
                    _this.list_one = new _bean_addCustIntroduceApply_bean__WEBPACK_IMPORTED_MODULE_4__["Cust2List"]();
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    return;
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
            });
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请先录入介绍人客户信息!' });
            return;
        }
    };
    CustomIntroduceApplyComponent.prototype.getIndex = function (list, item) {
        var index = -1;
        for (var i = 0; i < list.length; i++) {
            if (list[i].coverIntroduceId == item.coverIntroduceId) {
                index = i;
                break;
            }
        }
        return index;
    };
    CustomIntroduceApplyComponent.prototype.getIndex_one = function (list, item) {
        var index = -1;
        for (var i = 0; i < list.length; i++) {
            if (list[i].coverCustId == item.coverCustId) {
                index = i;
                break;
            }
        }
        return index;
    };
    //删除
    CustomIntroduceApplyComponent.prototype.delete = function (car, num) {
        var _this = this;
        if (num == 1) {
            var carList = JSON.parse(JSON.stringify(this.dataOne));
            var i = this.getIndex_one(carList, car);
            carList.splice(i, 1);
            this.dataOne = carList;
            this.arr = [];
        }
        else if (num == 2) {
            var carList = JSON.parse(JSON.stringify(this.excleTable));
            var i = this.getIndex(carList, car);
            carList.splice(i, 1);
            this.excleTable = carList;
            this.arr = [];
        }
        var temp = {
            applyId: car.applyId,
            relaIds: [car.relaId],
        };
        this.httpService.introduceServiceDelete(temp).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '删除成功!' });
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
    //文件导入
    CustomIntroduceApplyComponent.prototype.myUploader = function (event) {
        var _this = this;
        if (!this.addCustIntroduceApplyBean.custNo
            || !this.addCustIntroduceApplyBean.custName
            || !this.addCustIntroduceApplyBean.custAcctNo
            || !this.thruDate) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请先录入介绍人客户信息!' });
            return;
        }
        else {
            if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
                this.uploadedFiles = JSON.parse(event.xhr.response);
                if (this.uploadedFiles.length > 1) {
                    this.msgs = [];
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '不支持上传多个文件！' }];
                    return;
                }
                if (JSON.parse(event.xhr.response).success == false) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: JSON.parse(event.xhr.response).errorMsg });
                    return;
                }
            }
            var temp = {
                applyId: this.applyId,
                custId: this.addCustIntroduceApplyBean.custNo,
                custName: this.addCustIntroduceApplyBean.custName,
                custAcctNo: this.addCustIntroduceApplyBean.custAcctNo,
                fromDate: this.datePipe.transform(this.fromDate, 'yyyy-MM-dd'),
                thruDate: this.datePipe.transform(this.thruDate, 'yyyy-MM-dd'),
                createLoginName: this.userName,
                createOrgName: this.orgName,
                fileName: this.uploadedFiles[0].fileName,
                fileUrl: this.uploadedFiles[0].fileUrl
            };
            this.httpService.ckBatchCovIntroService(temp).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.applyId = data.applyId;
                    _this.excleFailedTable = data.ckFailResultList;
                    _this.sumNum = data.totalNum;
                    _this.successNum = data.successNum;
                    _this.failedNum = data.failNum;
                    _this.moreCusCheck();
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: '批量导入校验成功!' });
                    _this.errorPage = true;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    return;
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
                return;
            });
        }
    };
    //重置
    CustomIntroduceApplyComponent.prototype.chongzhi = function () {
        this.list_one.cust2No = '';
        this.list_one.cust2Name = '';
    };
    //客户号回显客户名称
    CustomIntroduceApplyComponent.prototype.myFunction = function () {
        var _this = this;
        if (this.addCustIntroduceApplyBean.custNo && this.addCustIntroduceApplyBean.custNo != '') {
            if (this.addCustIntroduceApplyBean.custNo == this.list_one.cust2No) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '介绍人、被介绍人不能是同一个客户!' }];
                return;
            }
            var param = {
                custNo: this.addCustIntroduceApplyBean.custNo
            };
            this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.addCustIntroduceApplyBean.custName = data.custName;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            });
        }
    };
    //被介绍客户名称回显
    CustomIntroduceApplyComponent.prototype.myFunction2 = function () {
        var _this = this;
        if (this.list_one.cust2No && this.list_one.cust2No != '') {
            if (this.addCustIntroduceApplyBean.custNo == this.list_one.cust2No) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '介绍人、被介绍人不能是同一个客户!' }];
                return;
            }
            var param = {
                custNo: this.list_one.cust2No
            };
            this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.list_one.cust2Name = data.custName;
                    _this.temp_No = JSON.parse(JSON.stringify(_this.list_one.cust2No));
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                    _this.temp_No = JSON.parse(JSON.stringify(_this.list_one.cust2No));
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
                _this.temp_No = JSON.parse(JSON.stringify(_this.list_one.cust2No));
            });
        }
        else {
            this.list_one.cust2Name = '';
        }
    };
    //到期日期大于当前，小于T+365
    CustomIntroduceApplyComponent.prototype.checkDate = function () {
        if (this.fromDate && this.thruDate) {
            if (this.thruDate < this.fromDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '到期日期必须大于生效日期!' });
                this.thruDate = null;
                return;
            }
            if (this.datePipe.transform(this.thruDate, 'yyyy-MM-dd') > this.dateEnd) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '到期日期必须小于' + this.dateEnd });
                this.thruDate = null;
                return;
            }
        }
    };
    //隐藏查询条件
    CustomIntroduceApplyComponent.prototype.showQry = function (data) {
        if (data == 1) {
            this.qryshowPage = true;
            this.qryshow = 2;
        }
        else if (data == 2) {
            this.qryshowPage = false;
            this.qryshow = 1;
        }
    };
    //批量导入查询
    CustomIntroduceApplyComponent.prototype.showQryMore = function (data) {
        if (data == 1) {
            this.qryshowPageMore = true;
            this.qryshowMore = 2;
        }
        else if (data == 2) {
            this.qryshowPageMore = false;
            this.qryshowMore = 1;
        }
    };
    //介绍人校验
    CustomIntroduceApplyComponent.prototype.introduceCheck = function () {
        var _this = this;
        this.isShowTip = true;
        if (this.addCustIntroduceApplyBean.custNo && this.addCustIntroduceApplyBean.custNo != ''
            && this.addCustIntroduceApplyBean.custName && this.addCustIntroduceApplyBean.custName != ''
            && this.addCustIntroduceApplyBean.custAcctNo && this.addCustIntroduceApplyBean.custAcctNo != ''
            && this.thruDate && this.thruDate != null
            && this.fromDate && this.fromDate != null) {
            var param = {
                applyId: this.applyId,
                custId: this.addCustIntroduceApplyBean.custNo,
                custName: this.addCustIntroduceApplyBean.custName,
                custAcctNo: this.addCustIntroduceApplyBean.custAcctNo,
                fromDate: this.datePipe.transform(this.fromDate, 'yyyy-MM-dd'),
                thruDate: this.datePipe.transform(this.thruDate, 'yyyy-MM-dd'),
                createLoginName: this.userName,
                createOrgName: this.orgName,
            };
            this.httpService.ckIntroService(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.isShowTip = false;
                    _this.checkFlag = true;
                    _this.custNo1 = _this.addCustIntroduceApplyBean.custNo;
                    _this.custAcctNo1 = _this.addCustIntroduceApplyBean.custAcctNo;
                    _this.thruDate1 = _this.addCustIntroduceApplyBean.thruDate;
                    if (data.applyId && data.applyId != '' && data.applyId != null) {
                        _this.applyId = data.applyId;
                    }
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: '贡献积数赠送到有效介绍账号，如为定期账号销户将无法赠送!' });
                    //只有点击上下一步时才切换
                    if (_this.checkFlag && _this.changePart == 1) {
                        _this.firstPage = false;
                        _this.secondPage = true;
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
        }
    };
    //被介绍模糊查询
    CustomIntroduceApplyComponent.prototype.queryCover = function (item) {
        var _this = this;
        if (item == 1) {
            var temp = {
                operationNum: this.applyId,
                custNo: this.addCustIntroduceApplyBean.custNo,
                coverIntroducerId: this.coverIntroducerId,
                coverIntroducerName: this.coverIntroducerName,
                operationType: '1',
                relaStatus: 'relaStatus'
            };
            this.httpService.introduceServiceDetailList(temp).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var array = [];
                    if (data.pageList && data.pageList.length > 0) {
                        for (var _i = 0, _a = data.pageList; _i < _a.length; _i++) {
                            var item_1 = _a[_i];
                            array.push({
                                coverCustId: item_1.coverIntroduceId,
                                coverCustName: item_1.coverIntroduceName,
                                remarksInfo: item_1.remarksInfo,
                                applyId: item_1.applyId,
                                relaId: item_1.relaId,
                                relaStatus: item_1.relaStatus
                            });
                        }
                        _this.dataOne = array;
                    }
                    else {
                        _this.dataOne = [];
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            });
        }
        else if (item == 2) {
            var temp = {
                operationNum: this.applyId,
                custNo: this.addCustIntroduceApplyBean.custNo,
                coverIntroducerId: this.coverIntroducerIdEx,
                coverIntroducerName: this.coverIntroducerNameEx,
                operationType: '1',
                relaStatus: 'relaStatus'
            };
            this.httpService.introduceServiceDetailList(temp).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    if (data.pageList && data.pageList.length > 0) {
                        _this.excleTable = data.pageList;
                    }
                    else {
                        _this.excleTable = [];
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            });
        }
    };
    //被介绍客户模糊查询重置
    CustomIntroduceApplyComponent.prototype.chongzhiCover = function (item) {
        if (item == 1) {
            this.coverIntroducerName = '';
            this.coverIntroducerId = '';
        }
        else if (item == 2) {
            this.coverIntroducerIdEx = '';
            this.coverIntroducerNameEx = '';
        }
    };
    //批量校验回显
    CustomIntroduceApplyComponent.prototype.moreCusCheck = function () {
        var _this = this;
        var param = {
            operationNum: this.applyId,
            operationType: '1',
            relaStatus: 'relaStatus',
            pageSize: this.pageSizeCover,
            pageNum: this.pageNumCover
        };
        this.httpService.introduceServiceDetailList(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var arr = [];
                for (var _i = 0, _a = data.pageList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    arr.push({
                        coverIntroduceId: item.coverIntroduceId,
                        coverIntroduceName: item.coverIntroduceName,
                        remarksInfo: item.remarksInfo,
                        applyId: item.applyId,
                        relaId: item.relaId,
                        relaStatus: item.relaStatus
                    });
                }
                _this.excleTable = arr;
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    CustomIntroduceApplyComponent.prototype.paginateCover = function (event) {
        //每页显示的条数
        this.pageSizeCover = event.rows * 1;
        //当前页
        this.pageNumCover = event.page + 1;
        this.first = event.page * event.rows;
        this.moreCusCheck();
    };
    //校验客户号只能输入数字
    CustomIntroduceApplyComponent.prototype.onKeyupNumber = function (event, num) {
        if (event.target.value != '') {
            if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_11__["checkNumber"])(null, event.target.value)) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '当前输入框内只能输入数字!' }];
                event.target.value = '';
                return;
            }
            if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_11__["custNoTen"])(null, event.target.value)) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '客户号错误!' }];
                event.target.value = '';
                return;
            }
        }
        else {
            if (num == 1) {
                this.addCustIntroduceApplyBean.custName = '';
            }
            else if (num == 2) {
                this.list_one.cust2Name = '';
            }
        }
    };
    //上一步下一步
    CustomIntroduceApplyComponent.prototype.toNext = function (num) {
        this.checkFlag = false;
        this.changePart = 1;
        if (num == 1) {
            if (this.addCustIntroduceApplyBean.custNo && this.addCustIntroduceApplyBean.custNo != ''
                && this.addCustIntroduceApplyBean.custName && this.addCustIntroduceApplyBean.custName != ''
                && this.addCustIntroduceApplyBean.custAcctNo && this.addCustIntroduceApplyBean.custAcctNo != ''
                && this.thruDate && this.thruDate != null) {
                this.introduceCheck();
            }
            else {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '必输项不能为空!' }];
                return;
            }
        }
        else if (num == 2) {
            this.firstPage = true;
            this.secondPage = false;
        }
    };
    //介绍人重置
    CustomIntroduceApplyComponent.prototype.reset = function () {
        this.addCustIntroduceApplyBean.custNo = '';
        this.addCustIntroduceApplyBean.custName = '';
        this.addCustIntroduceApplyBean.custAcctNo = '';
        this.addCustIntroduceApplyBean.fromDate = '';
        this.addCustIntroduceApplyBean.thruDate = '';
        this.thruDate = null;
        this.fromDate = new Date();
        this.checkFlag = false;
        this.userName = this.user2.userName;
        this.orgName = this.user2.orgName;
        this.date = new Date();
        this.isShowTip = false;
    };
    //关闭错误弹框
    CustomIntroduceApplyComponent.prototype.closeBack = function () {
        this.errorPage = false;
    };
    //按钮权限
    CustomIntroduceApplyComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomIntroduceApplyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customIntroduceApply',
            template: __webpack_require__(/*! ./customIntroduceApply.component.html */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApply/customIntroduceApply.component.html"),
            styles: [__webpack_require__(/*! ./customIntroduceApply.component.scss */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApply/customIntroduceApply.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_8__["CusOperationHttpService"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_8__["CusOperationHttpService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CustomIntroduceApplyComponent);
    return CustomIntroduceApplyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApplyQuery/bean/queryCustIntroduceApply.bean.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApplyQuery/bean/queryCustIntroduceApply.bean.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: QueryCustIntroduceApplyBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryCustIntroduceApplyBean", function() { return QueryCustIntroduceApplyBean; });
var QueryCustIntroduceApplyBean = /** @class */ (function () {
    function QueryCustIntroduceApplyBean() {
    }
    return QueryCustIntroduceApplyBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApplyQuery/customIntroduceApplyQuery.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApplyQuery/customIntroduceApplyQuery.component.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\" *ngIf=\"permissionCheck('SID00027_02_02')\">\r\n    <!-- <header-title [Info]=\"'客户介绍客户申请历史'\"></header-title> -->\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>介绍人客户号:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"queryCustIntroduceApplyBean.introduceId\" (keyup)=\"onKeyupNumber($event)\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>介绍人客户名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"queryCustIntroduceApplyBean.introducerName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>生效日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-calendar [(ngModel)]=\"fromDate\" [maxDate]=\"thruDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"showStart()\" (onBlur)=\"showStart()\"></p-calendar>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>到期日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-calendar [(ngModel)]=\"thruDate\" [minDate]=\"fromDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"showEnd()\" (onBlur)=\"showEnd()\"></p-calendar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"chongzhi()\"></button>\r\n    </div>\r\n    <div style=\"float:right;padding-right:1em;\">\r\n        <span class=\"icoColor\" (click)=\"chooseBtn()\">选择字段</span>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\" style=\"width:100%;overflow-x:scroll;\">\r\n        <p-dataTable [value]=\"data\" scorllable=\"true\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field={{list.value}} header={{list.label}} *ngFor=\"let list of tableData\" [style]=\"{'width':'155px'}\"></p-column>\r\n            <p-column header=\"操作\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <div class=\"table-button\">\r\n                        <span *ngIf=\"col.detailshow&&permissionCheck('SID00027_02_02_01')\" class=\"tabelDetailIco\" (click)=\"toDetail(col)\">详情</span>\r\n                        <span *ngIf=\"!col.detailshow||!permissionCheck('SID00027_02_02_01')\" class=\"tabelDetailSetIco\">详情</span>\r\n                        <span *ngIf=\"col.updateshow&&permissionCheck('SID00027_02_02_02')&&(col.manageId==userId)\" class=\"tabelUpdateIco\" (click)=\"toUpdate(col)\">修改</span>\r\n                        <span *ngIf=\"!col.updateshow||!permissionCheck('SID00027_02_02_02')||(col.manageId!=userId)\" class=\"tabelUpdateSetIco\">修改</span>\r\n                        <span *ngIf=\"col.deleteshow&&permissionCheck('SID00027_02_02_03')&&(col.manageId==userId)\" class=\"tabelDeleteIco\" (click)=\"toDelete(col)\">删除</span>\r\n                        <span *ngIf=\"!col.deleteshow||!permissionCheck('SID00027_02_02_03')||(col.manageId!=userId)\" class=\"tabelDeleteSetIco\">删除</span>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator [first]=\"first\" rows={{queryCustIntroduceApplyBean.pageSize}} totalRecords={{total}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n\r\n\r\n<p-dialog *ngIf=\"addPage\" [(visible)]=\"addPage\" modal=\"true\" width=\"900\" height=\"600\">\r\n    <p-header>\r\n        {{addHeader}}\r\n    </p-header>\r\n    <div class=\"ui-g-12\">\r\n        <p-checkbox class=\"ui-g-12\" binary=\"true\" label=\"全选\" (click)=\"checkAll()\" [(ngModel)]=\"isAll\"></p-checkbox>\r\n        <p-checkbox class=\"ui-g-4\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of arrList\" [(ngModel)]=\"item.isCheck\" (click)=\"doSelect(item)\"></p-checkbox>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"save()\"></button>\r\n    </div>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"detailPage\" [(visible)]=\"detailPage\" modal=\"true\" width=\"900\" [responsive]=\"true\">\r\n    <p-header>\r\n        {{detailHeader}}\r\n    </p-header>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 titi\">\r\n            <span>介绍人客户号:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.introducerId}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 titi\">\r\n            <span>介绍人客户名称:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.introducerName}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 titi\">\r\n            <span>生效日期:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.fromDate}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 titi\">\r\n            <span>到期日期:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.thruDate}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 titi\">\r\n            <span>介绍人存款账号:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.introducerAcctId}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 titi\">\r\n            <span>经办人:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.createdUserName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 titi\">\r\n            <span>经办日期:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.createdStamp}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 titi\">\r\n            <span>经办机构:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.createdOrgName}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 titi\">\r\n            <span>修改日期:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.lastUpdatedStamp}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 titi\">\r\n            <span>银行代码:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.bankCode}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 titi\">\r\n            <span>审批状态:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.relaStatus|codeValuePie:relaStatusOptions}}</span>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12 table  base-table\">\r\n            <p-dataTable [value]=\"itemTable\" [style]=\"{'text-align':'center'}\" [emptyMessage]='tabMesg' scrollable=\"true\" scrollHeight=\"350px\">\r\n                <p-column field=\"approvalUserId\" header=\"审批人\"></p-column>\r\n                <p-column field=\"remark1\" header=\"审批阶段\"></p-column>\r\n                <p-column field=\"approvalDate\" header=\"审批日期\"></p-column>\r\n                <p-column field=\"remark2\" header=\"审批结果\">\r\n                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                        {{col.remark2|codeValuePie:remarkOption}}\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"remark3\" header=\"审批意见\"></p-column>\r\n            </p-dataTable>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"ui-g-12 base-table table\">\r\n        <p-dataTable [value]=\"dataDetail\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"applyId\" header=\"客户介绍客户编号\"></p-column>\r\n            <p-column field=\"coverIntroduceId\" header=\"被介绍人客户号\"></p-column>\r\n            <p-column field=\"coverIntroduceName\" header=\"被介绍人客户名称\"></p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows={{pageSizeCover}} totalRecords={{totalCover}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginateCover($event)\"></p-paginator>\r\n    </div>\r\n</p-dialog>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApplyQuery/customIntroduceApplyQuery.component.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApplyQuery/customIntroduceApplyQuery.component.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0; }\n  .functions .change {\n    display: inline-block;\n    font-size: 15px;\n    height: 40px;\n    line-height: 40px;\n    border-radius: 3px 3px 0 0;\n    color: #929292;\n    padding: 0px 30px;\n    font-weight: bold;\n    cursor: pointer; }\n  .active {\n  border: none !important;\n  background-color: #f7f7f7 !important;\n  color: #003f5c !important; }\n  .right,\n.titi {\n  text-align: right;\n  padding-right: 5px !important; }\n  .ui-g-6 .ui-g-4,\n.ui-g-6 .ui-g-6 {\n  padding: 0; }\n  .bgcolor {\n  background: #f7f7f7; }\n  .table,\n.btn {\n  text-align: center; }\n  .label {\n  text-align: right; }\n  :host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS93b3JrLXJhc2svY3JlZGl0LWludGVyZ3JhdGlvbi9jdXN0b21JbnRyb2R1Y2UvY3VzdG9tSW50cm9kdWNlQXBwbHlRdWVyeS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXHdvcmstcmFza1xcY3JlZGl0LWludGVyZ3JhdGlvblxcY3VzdG9tSW50cm9kdWNlXFxjdXN0b21JbnRyb2R1Y2VBcHBseVF1ZXJ5XFxjdXN0b21JbnRyb2R1Y2VBcHBseVF1ZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7RUFIbkI7SUFLUSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTtFQUl2QjtFQUNJLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMseUJBQXlCLEVBQUE7RUFHN0I7O0VBRUksaUJBQWlCO0VBQ2pCLDZCQUE2QixFQUFBO0VBR2pDOztFQUdRLFVBQVUsRUFBQTtFQUlsQjtFQUNJLG1CQUFtQixFQUFBO0VBR3ZCOztFQUVJLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksaUJBQWlCLEVBQUE7RUFJckI7RUFDSSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vd29yay1yYXNrL2NyZWRpdC1pbnRlcmdyYXRpb24vY3VzdG9tSW50cm9kdWNlL2N1c3RvbUludHJvZHVjZUFwcGx5UXVlcnkvY3VzdG9tSW50cm9kdWNlQXBwbHlRdWVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdW5jdGlvbnMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIC5jaGFuZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xyXG4gICAgICAgIGNvbG9yOiAjOTI5MjkyO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3ZjcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAzZjVjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yaWdodCxcclxuLnRpdGkge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHggIWltcG9ydGFudDs7XHJcbn1cclxuXHJcbi51aS1nLTYge1xyXG4gICAgLnVpLWctNCxcclxuICAgIC51aS1nLTYge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iZ2NvbG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbn1cclxuXHJcbi50YWJsZSxcclxuLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLy/ooajmoLzlrZfmr43mlbDlrZfoh6rliqjmjaLooYxcclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YSB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApplyQuery/customIntroduceApplyQuery.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApplyQuery/customIntroduceApplyQuery.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: CustomIntroduceApplyQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomIntroduceApplyQueryComponent", function() { return CustomIntroduceApplyQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_queryCustIntroduceApply_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/queryCustIntroduceApply.bean */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApplyQuery/bean/queryCustIntroduceApply.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomIntroduceApplyQueryComponent = /** @class */ (function () {
    function CustomIntroduceApplyQueryComponent(router, httpService, commfunc) {
        this.router = router;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.userId = ''; //登录人编号
        this.remarkOption = []; //审批结果
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"]; //表格中无数据时显示的内容
        this.first = 0;
        this.msgs = [];
        this.fromDate = null;
        this.thruDate = null;
        this.dataDetail = []; //详情表
        //每页多少条
        this.date = new Date();
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["CALENDAR_CN"];
        this.addHeader = '选择字段';
        this.addPage = false;
        this.detailHeader = '详情';
        this.detailPage = false;
        this.detailList = {
            applyId: '',
            introducerId: '',
            introducerName: '',
            fromDate: '',
            thruDate: '',
            introducerAcctId: '',
            createdUserName: '',
            createdOrgName: '',
            bankCode: '',
            createdStamp: '',
            lastUpdatedStamp: '',
            relaStatus: '',
        };
        this.isAll = false;
        this.tableData = [];
        this.arrList = [];
        this.data = [];
        this.itemTable = []; //审批表
        this.detailshow = false;
        this.updateshow = false;
        this.deleteshow = false;
        this.queryCustIntroduceApplyBean = new _bean_queryCustIntroduceApply_bean__WEBPACK_IMPORTED_MODULE_4__["QueryCustIntroduceApplyBean"]();
        this.pageSizeCover = 10;
        this.pageNumCover = 1;
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
    }
    CustomIntroduceApplyQueryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.codeValues();
        this.shenPiOptions = this.code['ShenPi'];
        this.relaStatusOptions = this.code['relaStatusIntro']; //状态
        this.regisStatuOptions = this.code['regisStatuIntro']; //登记簿状态
        this.operationTypeOptions = this.code['operationTypeIntro']; //操作类型
        this.remarkOption = this.code['RemarkOption']; //审批结果
        this.pageSizeDetail = 10;
        this.pageNumDetail = 1;
        this.queryCustIntroduceApplyBean.pageSize = 10;
        this.queryCustIntroduceApplyBean.pageNum = 1;
        var param = {
            businessType: "CustIntroduce",
            funcType: "ApplyQuery",
        };
        this.httpService.getDisplayFields(param).subscribe(function (data) {
            var str = data.fields;
            var checkThis = true;
            for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
                var item = str_1[_i];
                if (item.isCheck == true) {
                    item.isCheck = true;
                    _this.tableData.push(item);
                    checkThis = item.isCheck && checkThis;
                }
                else if (item.isCheck == false) {
                    item.isCheck = false;
                    checkThis = false;
                }
            }
            _this.arrList = str;
            _this.isAll = checkThis;
        });
        this.tableData.sort(function (a, b) {
            return a.num * 1 - b.num * 1;
        });
        this.queryFirst();
    };
    CustomIntroduceApplyQueryComponent.prototype.toCustomIntroduceRepealQuery = function () {
        this.router.navigate(["pages/tzb/custom/work-rask/customIntroduce/customIntroduceRepealQuery"]);
    };
    CustomIntroduceApplyQueryComponent.prototype.toCustomIntroduceRelationshipQuery = function () {
        this.router.navigate(["pages/tzb/custom/work-rask/customIntroduce/customIntroduceRelationshipQuery"]);
    };
    CustomIntroduceApplyQueryComponent.prototype.toCustomIntroduceApply = function () {
        this.router.navigate(["pages/tzb/custom/work-rask/customIntroduce/customIntroduceApply"]);
    };
    //翻页
    CustomIntroduceApplyQueryComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.queryCustIntroduceApplyBean.pageSize = event.rows * 1;
        //当前页
        this.queryCustIntroduceApplyBean.pageNum = event.page + 1;
        this.first = event.page * event.rows;
        this.query();
    };
    CustomIntroduceApplyQueryComponent.prototype.chooseBtn = function () {
        this.addPage = true;
    };
    //单选
    CustomIntroduceApplyQueryComponent.prototype.doSelect = function (data) {
        var _this = this;
        var cellThis = true;
        if (data.isCheck) {
            this.tableData.push(data);
            this.arrList.forEach(function (item) {
                cellThis = item.isCheck && cellThis;
            });
        }
        else {
            this.tableData.forEach(function (item, i) {
                if (item.value == data.value) {
                    _this.tableData.splice(i, 1);
                    return;
                }
            });
            cellThis = false;
        }
        this.tableData.sort(function (a, b) {
            return a.num * 1 - b.num * 1;
        });
        this.isAll = cellThis;
    };
    //全选
    CustomIntroduceApplyQueryComponent.prototype.checkAll = function () {
        var _this = this;
        var isTrue = this.isAll;
        this.tableData = [];
        this.arrList.forEach(function (item) {
            item['isCheck'] = isTrue;
            if (isTrue) {
                _this.tableData.push(item);
            }
        });
        this.tableData.sort(function (a, b) {
            return a.num * 1 - b.num * 1;
        });
    };
    //详情
    CustomIntroduceApplyQueryComponent.prototype.toDetail = function (item) {
        var _this = this;
        this.itemCover = item;
        this.first = 0;
        var param = {
            operationNum: item.operationNum,
            operationType: '1',
            pageSize: this.pageSizeCover,
            pageNum: this.pageNumCover
        };
        this.httpService.introduceServiceDetailList(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.pageList && data.pageList.length > 0) {
                    _this.detailList = data.pageList[0];
                    _this.dataDetail = data.pageList;
                }
                else {
                    _this.detailList = [];
                    _this.dataDetail = [];
                }
                _this.totalCover = data.totalNum;
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
        this.detailPage = true;
    };
    //字段保存
    CustomIntroduceApplyQueryComponent.prototype.save = function () {
        var _this = this;
        this.addPage = false;
        var arr = [];
        this.tableData.forEach(function (item) {
            arr.push(item.value);
        });
        var param = {
            businessType: "CustIntroduce",
            funcType: "ApplyQuery",
            fields: arr,
        };
        this.httpService.getDisplayFields(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //生效日期
    CustomIntroduceApplyQueryComponent.prototype.showStart = function () {
        var _this = this;
        if (this.fromDate && this.fromDate != null && this.thruDate && this.thruDate != null) {
            if (this.fromDate.getTime() > this.thruDate.getTime()) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '生效日期必须小于到期日期!' }];
                setTimeout(function () {
                    _this.fromDate = null;
                });
                return;
            }
        }
    };
    //到期日期
    CustomIntroduceApplyQueryComponent.prototype.showEnd = function () {
        var _this = this;
        if (this.fromDate && this.fromDate != null && this.thruDate && this.thruDate != null) {
            if (this.fromDate.getTime() > this.thruDate.getTime()) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '到期日期必须大于生效日期!' }];
                setTimeout(function () {
                    _this.thruDate = null;
                });
                return;
            }
        }
    };
    CustomIntroduceApplyQueryComponent.prototype.queryFirst = function () {
        this.queryCustIntroduceApplyBean.pageSize = 10;
        this.queryCustIntroduceApplyBean.pageNum = 1;
        this.first = 0;
        this.query();
    };
    //查询
    CustomIntroduceApplyQueryComponent.prototype.query = function () {
        var _this = this;
        this.queryCustIntroduceApplyBean.relaStatus = "1,2,3,4";
        this.queryCustIntroduceApplyBean.operationType = "1";
        this.queryCustIntroduceApplyBean.fromDate = this.commfunc.transDateN(this.fromDate);
        this.queryCustIntroduceApplyBean.thruDate = this.commfunc.transDateN(this.thruDate);
        this.httpService.introduceServiceList(this.queryCustIntroduceApplyBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.pageList && data.pageList.length > 0) {
                    var _loop_1 = function (item) {
                        _this.httpService.findUser({ custNo: item.introducerId }).subscribe(function (dataUser) {
                            if (dataUser.returnCode.code == 'success') {
                                if (dataUser.infoList != null) {
                                    if (dataUser.infoList.length > 0) {
                                        _this.manageId = dataUser.infoList[0].manageId;
                                        item['manageId'] = _this.manageId;
                                        //console.log( data.pageList);
                                    }
                                }
                            }
                        });
                        if (item.relaStatus == '1' || item.relaStatus == '2' || item.relaStatus == '3' ||
                            item.relaStatus == '4' || item.relaStatus == '6' ||
                            item.relaStatus == '10') {
                            item.detailshow = true;
                        }
                        if (item.relaStatus == '1' || item.relaStatus == '4' ||
                            item.relaStatus == '10') {
                            item.updateshow = true;
                        }
                        if (item.relaStatus == '1') {
                            item.deleteshow = true;
                        }
                        for (var _i = 0, _a = _this.relaStatusOptions; _i < _a.length; _i++) {
                            var temp = _a[_i];
                            if (item.relaStatus == temp.value) {
                                item.relaStatus = temp.label;
                            }
                        }
                        for (var _b = 0, _c = _this.regisStatuOptions; _b < _c.length; _b++) {
                            var temp = _c[_b];
                            if (item.regisStatu == temp.value) {
                                item.regisStatu = temp.label;
                            }
                        }
                        for (var _d = 0, _e = _this.operationTypeOptions; _d < _e.length; _d++) {
                            var temp = _e[_d];
                            if (item.operationType == temp.value) {
                                item.operationType = temp.label;
                            }
                        }
                    };
                    for (var _i = 0, _a = data.pageList; _i < _a.length; _i++) {
                        var item = _a[_i];
                        _loop_1(item);
                    }
                    _this.data = data.pageList;
                    _this.total = data.totalNum;
                }
                else {
                    _this.data = [];
                    _this.total = data.totalNum;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    CustomIntroduceApplyQueryComponent.prototype.chongzhi = function () {
        this.queryCustIntroduceApplyBean = new _bean_queryCustIntroduceApply_bean__WEBPACK_IMPORTED_MODULE_4__["QueryCustIntroduceApplyBean"]();
        this.fromDate = null;
        this.thruDate = null;
        this.queryCustIntroduceApplyBean.pageSize = 10;
        this.queryCustIntroduceApplyBean.pageNum = 1;
    };
    //码值
    CustomIntroduceApplyQueryComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //修改
    CustomIntroduceApplyQueryComponent.prototype.toUpdate = function (data) {
        data['updateFlag'] = '0';
        this.router.navigate(["pages/tzb/custom/work-rask/customIntroduce/customIntroduceApply", data]);
    };
    //校验客户号只能输入数字
    CustomIntroduceApplyQueryComponent.prototype.onKeyupNumber = function (event) {
        if (event.target.value != '') {
            if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(null, event.target.value)) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '当前输入框内只能输入数字!' }];
                event.target.value = '';
                return;
            }
            if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["custNoTen"])(null, event.target.value)) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '客户号错误!' }];
                event.target.value = '';
                return;
            }
        }
    };
    //删除
    CustomIntroduceApplyQueryComponent.prototype.toDelete = function (car) {
        var _this = this;
        var temp = {
            applyId: car.operationNum,
            relaIds: car.relaIds,
        };
        this.httpService.introduceServiceDelete(temp).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '删除成功!' });
                _this.queryFirst();
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
    CustomIntroduceApplyQueryComponent.prototype.paginateCover = function (event) {
        var _this = this;
        //每页显示的条数
        this.pageSizeCover = event.rows * 1;
        //当前页
        this.pageNumCover = event.page + 1;
        this.first = event.page * event.rows;
        var param = {
            operationNum: this.itemCover.applyId,
            operationType: '1',
            pageSize: this.pageSizeCover,
            pageNum: this.pageNumCover
        };
        this.httpService.introduceServiceDetailList(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataDetail = data.pageList;
                _this.totalCover = data.totalNum;
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //按钮权限
    CustomIntroduceApplyQueryComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomIntroduceApplyQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customIntroduceApplyQuery',
            template: __webpack_require__(/*! ./customIntroduceApplyQuery.component.html */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApplyQuery/customIntroduceApplyQuery.component.html"),
            styles: [__webpack_require__(/*! ./customIntroduceApplyQuery.component.scss */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceApplyQuery/customIntroduceApplyQuery.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], CustomIntroduceApplyQueryComponent);
    return CustomIntroduceApplyQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRelationshipQuery/bean/queryCustIntroduceRela.bean.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRelationshipQuery/bean/queryCustIntroduceRela.bean.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: QueryCustIntroduceRelaBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryCustIntroduceRelaBean", function() { return QueryCustIntroduceRelaBean; });
var QueryCustIntroduceRelaBean = /** @class */ (function () {
    function QueryCustIntroduceRelaBean() {
    }
    return QueryCustIntroduceRelaBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRelationshipQuery/customIntroduceRelationshipQuery.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRelationshipQuery/customIntroduceRelationshipQuery.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\" *ngIf=\"permissionCheck('SID00027_02_03')\">\r\n    <!-- <header-title [Info]=\"'介绍关系查询维护'\"></header-title> -->\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>介绍人客户号:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"queryCustIntroduceRelaBean.custNo\" (keyup)=\"onKeyupNumber($event)\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>介绍人客户名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"queryCustIntroduceRelaBean.introducerName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>被介绍人客户号:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"queryCustIntroduceRelaBean.coverIntroducerId\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>被介绍人客户名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"queryCustIntroduceRelaBean.coverIntroducerName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>生效日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-calendar [(ngModel)]=\"fromDate\" [maxDate]=\"thruDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"showStart()\" (onBlur)=\"showStart()\"></p-calendar>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>到期日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-calendar [(ngModel)]=\"thruDate\" [minDate]=\"fromDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"showEnd()\" (onBlur)=\"showEnd()\"></p-calendar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"chongzhi()\"></button>\r\n    </div>\r\n    <div style=\"float:right;padding-right:1em;\">\r\n        <span class=\"icoColor\" (click)=\"chooseBtn()\">选择字段</span>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\" style=\"width:100%;overflow-x:scroll;\">\r\n        <p-dataTable [value]=\"datas\" scorllable=\"true\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field={{list.value}} header={{list.label}} *ngFor=\"let list of tableData\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column header=\"操作\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <div class=\"table-button\">\r\n                        <span *ngIf=\"!col.showThis||(col.manageId!=userId)\" class=\"tabelRepealIco_no\">撤销申请</span>\r\n                        <span *ngIf=\"col.showThis&&(col.manageId==userId)\" class=\"tabelRepealIco\" (click)=\"toBack(col)\">撤销申请</span>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator [first]=\"first\" rows={{queryCustIntroduceRelaBean.pageSize}} totalRecords={{total}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n\r\n<p-dialog [(visible)]=\"addPage\" modal=\"true\" width=\"1200\" height=\"600\">\r\n    <p-header>\r\n        {{addHeader}}\r\n    </p-header>\r\n    <div class=\"ui-g-12\">\r\n        <p-checkbox class=\"ui-g-12\" binary=\"true\" label=\"全选\" (click)=\"checkAll()\" [(ngModel)]=\"isAll\"></p-checkbox>\r\n        <p-checkbox class=\"ui-g-4\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of titleList\" [(ngModel)]=\"item.isCheck\"\r\n            (click)=\"doSelect(item)\"></p-checkbox>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"save()\"></button>\r\n    </div>\r\n</p-dialog>\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n\r\n<!-- 选人服务 -->\r\n<p-dialog *ngIf=\"choosePerson\" header=\"提交给\" modal=\"modal\" width='435' [(visible)]=\"choosePerson\" (onHide)=\"choosePersonHide()\"\r\n    class=\"style_dialog\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRelationshipQuery/customIntroduceRelationshipQuery.component.scss":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRelationshipQuery/customIntroduceRelationshipQuery.component.scss ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0; }\n  .functions .change {\n    display: inline-block;\n    font-size: 15px;\n    height: 40px;\n    line-height: 40px;\n    border-radius: 3px 3px 0 0;\n    color: #929292;\n    padding: 0px 30px;\n    font-weight: bold;\n    cursor: pointer; }\n  .active {\n  border: none !important;\n  background-color: #f7f7f7 !important;\n  color: #003f5c !important; }\n  .right {\n  text-align: right;\n  padding-right: 5px !important; }\n  .ui-g-6 .ui-g-4,\n.ui-g-6 .ui-g-6 {\n  padding: 0; }\n  .bgcolor {\n  background: #f7f7f7; }\n  .table,\n.btn,\n.center {\n  text-align: center; }\n  .label {\n  text-align: right; }\n  :host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n  :host/deep/ .style_dialog .ui-dialog.ui-shadow {\n  width: 60% !important;\n  height: 500px !important; }\n  :host/deep/ .style_dialog .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS93b3JrLXJhc2svY3JlZGl0LWludGVyZ3JhdGlvbi9jdXN0b21JbnRyb2R1Y2UvY3VzdG9tSW50cm9kdWNlUmVsYXRpb25zaGlwUXVlcnkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFx3b3JrLXJhc2tcXGNyZWRpdC1pbnRlcmdyYXRpb25cXGN1c3RvbUludHJvZHVjZVxcY3VzdG9tSW50cm9kdWNlUmVsYXRpb25zaGlwUXVlcnlcXGN1c3RvbUludHJvZHVjZVJlbGF0aW9uc2hpcFF1ZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7RUFIbkI7SUFLUSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTtFQUl2QjtFQUNJLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMseUJBQXlCLEVBQUE7RUFHN0I7RUFDSSxpQkFBaUI7RUFDakIsNkJBQTZCLEVBQUE7RUFHakM7O0VBR1EsVUFBVSxFQUFBO0VBSWxCO0VBQ0ksbUJBQW1CLEVBQUE7RUFHdkI7OztFQUdJLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksaUJBQWlCLEVBQUE7RUFJckI7RUFDSSxxQkFBcUIsRUFBQTtFQUd6QjtFQUNJLHFCQUFxQjtFQUNyQix3QkFBd0IsRUFBQTtFQUc1QjtFQUNJLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS93b3JrLXJhc2svY3JlZGl0LWludGVyZ3JhdGlvbi9jdXN0b21JbnRyb2R1Y2UvY3VzdG9tSW50cm9kdWNlUmVsYXRpb25zaGlwUXVlcnkvY3VzdG9tSW50cm9kdWNlUmVsYXRpb25zaGlwUXVlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVuY3Rpb25zIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAuY2hhbmdlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICAgICAgICBjb2xvcjogIzkyOTI5MjtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwM2Y1YyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHggIWltcG9ydGFudDs7XHJcbn1cclxuXHJcbi51aS1nLTYge1xyXG4gICAgLnVpLWctNCxcclxuICAgIC51aS1nLTYge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iZ2NvbG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbn1cclxuXHJcbi50YWJsZSxcclxuLmJ0bixcclxuLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLy/ooajmoLzlrZfmr43mlbDlrZfoh6rliqjmjaLooYxcclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YSB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5zdHlsZV9kaWFsb2cgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuc3R5bGVfZGlhbG9nIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRelationshipQuery/customIntroduceRelationshipQuery.component.ts":
/*!***************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRelationshipQuery/customIntroduceRelationshipQuery.component.ts ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: CustomIntroduceRelationshipQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomIntroduceRelationshipQueryComponent", function() { return CustomIntroduceRelationshipQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_queryCustIntroduceRela_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/queryCustIntroduceRela.bean */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRelationshipQuery/bean/queryCustIntroduceRela.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CustomIntroduceRelationshipQueryComponent = /** @class */ (function () {
    function CustomIntroduceRelationshipQueryComponent(router, commfunc, httpService, confirmationService) {
        this.router = router;
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.confirmationService = confirmationService;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"]; //表格中无数据时显示的内容
        this.msgs = [];
        this.first = 0;
        this.fromDate = null;
        this.thruDate = null;
        this.addHeader = '选择字段';
        this.addPage = false;
        this.detailHeader = '详情';
        this.detailPage = false;
        this.date = new Date();
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["CALENDAR_CN"];
        this.isAll = false;
        this.datas = [];
        this.detailList = {
            relaId: '',
            custNo: '',
            custName: '',
            cust2No: '',
            cust2Name: '',
            fromDate: '',
            thruDate: '',
            custAcctNo: '',
            relaStatus: '',
            createdDate: '',
            userId: '',
            orgId: '',
        };
        this.titleList = [];
        this.tableData = [];
        this.showThis = true;
        this.queryCustIntroduceRelaBean = new _bean_queryCustIntroduceRela_bean__WEBPACK_IMPORTED_MODULE_4__["QueryCustIntroduceRelaBean"]();
        //选人
        this.choosePerson = false;
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        console.log(this.userId);
    }
    CustomIntroduceRelationshipQueryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.codeValues();
        this.shenPiOptions = this.code['ShenPi'];
        this.relaStatusOptions = this.code['relaStatusIntro']; //状态
        this.regisStatuOptions = this.code['regisStatuIntro']; //登记簿状态
        this.operationTypeOptions = this.code['operationTypeIntro']; //操作类型
        this.queryCustIntroduceRelaBean.pageSize = 10;
        this.queryCustIntroduceRelaBean.pageNum = 1;
        var param = {
            businessType: "CustIntroduce",
            funcType: "DetailQuery",
        };
        this.httpService.getDisplayFields(param).subscribe(function (data) {
            var str = data.fields;
            var checkThis = true;
            for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
                var item = str_1[_i];
                if (item.isCheck == true) {
                    item.isCheck = true;
                    _this.tableData.push(item);
                    checkThis = item.isCheck && checkThis;
                }
                else if (item.isCheck == false) {
                    item.isCheck = false;
                    checkThis = false;
                }
            }
            _this.titleList = str;
            _this.isAll = checkThis;
        });
        this.tableData.sort(function (a, b) {
            return a.num > b.num;
        });
        this.queryFirst();
    };
    CustomIntroduceRelationshipQueryComponent.prototype.toCustomIntroduceApplyQuery = function () {
        this.router.navigate(["pages/tzb/custom/work-rask/customIntroduce/customIntroduceApplyQuery"]);
    };
    CustomIntroduceRelationshipQueryComponent.prototype.toCustomIntroduceRepealQuery = function () {
        this.router.navigate(["pages/tzb/custom/work-rask/customIntroduce/customIntroduceRepealQuery"]);
    };
    CustomIntroduceRelationshipQueryComponent.prototype.toCustomIntroduceApply = function () {
        this.router.navigate(["pages/tzb/custom/work-rask/customIntroduce/customIntroduceApply"]);
    };
    CustomIntroduceRelationshipQueryComponent.prototype.chooseBtn = function () {
        this.addPage = true;
    };
    //单选
    CustomIntroduceRelationshipQueryComponent.prototype.doSelect = function (data) {
        var _this = this;
        var sb = true;
        if (data.isCheck) {
            this.tableData.push(data);
            this.titleList.forEach(function (item) {
                sb = item.isCheck && sb;
            });
        }
        else {
            this.tableData.forEach(function (item, i) {
                if (item.value == data.value) {
                    _this.tableData.splice(i, 1);
                    return;
                }
            });
            sb = false;
        }
        this.tableData.sort(function (a, b) {
            return a.num * 1 - b.num * 1;
        });
        this.isAll = sb;
    };
    //全选
    CustomIntroduceRelationshipQueryComponent.prototype.checkAll = function () {
        var _this = this;
        var isTrue = this.isAll;
        this.tableData = [];
        this.titleList.forEach(function (item) {
            item['isCheck'] = isTrue;
            if (isTrue) {
                _this.tableData.push(item);
            }
        });
        this.tableData.sort(function (a, b) {
            return a.num * 1 - b.num * 1;
        });
    };
    CustomIntroduceRelationshipQueryComponent.prototype.save = function () {
        var _this = this;
        this.addPage = false;
        var arr = [];
        this.tableData.forEach(function (item) {
            arr.push(item.value);
        });
        var param = {
            businessType: "CustIntroduce",
            funcType: "DetailQuery",
            fields: arr,
        };
        this.httpService.getDisplayFields(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //生效日期
    CustomIntroduceRelationshipQueryComponent.prototype.showStart = function () {
        var _this = this;
        if (this.fromDate && this.fromDate != null && this.thruDate && this.thruDate != null) {
            if (this.fromDate.getTime() > this.thruDate.getTime()) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '生效日期必须小于到期日期!' }];
                setTimeout(function () {
                    _this.fromDate = null;
                });
                return;
            }
        }
    };
    //到期日期
    CustomIntroduceRelationshipQueryComponent.prototype.showEnd = function () {
        var _this = this;
        if (this.fromDate && this.fromDate != null && this.thruDate && this.thruDate != null) {
            if (this.fromDate.getTime() > this.thruDate.getTime()) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '到期日期必须大于生效日期!' }];
                setTimeout(function () {
                    _this.thruDate = null;
                });
                return;
            }
        }
    };
    CustomIntroduceRelationshipQueryComponent.prototype.queryFirst = function () {
        this.queryCustIntroduceRelaBean.pageSize = 10;
        this.queryCustIntroduceRelaBean.pageNum = 1;
        this.first = 0;
        this.query();
    };
    CustomIntroduceRelationshipQueryComponent.prototype.query = function () {
        var _this = this;
        this.queryCustIntroduceRelaBean.relaStatus = "3,5,6,9,10";
        this.queryCustIntroduceRelaBean.operationType = "1";
        this.queryCustIntroduceRelaBean.fromDate = this.commfunc.transDateN(this.fromDate);
        this.queryCustIntroduceRelaBean.thruDate = this.commfunc.transDateN(this.thruDate);
        this.httpService.query4CustIntrouceRelationList(this.queryCustIntroduceRelaBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.pageList && data.pageList.length > 0) {
                    var _loop_1 = function (item) {
                        _this.httpService.findUser({ custNo: item.introducerId }).subscribe(function (dataUser) {
                            if (dataUser.returnCode.code == 'success') {
                                if (dataUser.infoList != null) {
                                    if (dataUser.infoList.length > 0) {
                                        _this.manageId = dataUser.infoList[0].manageId;
                                        item['manageId'] = _this.manageId;
                                        //console.log( data.pageList);
                                    }
                                }
                            }
                        });
                        if (item.regisStatu == '1' || item.regisStatu == '3') {
                            item.showThis = true;
                        }
                        else {
                            item.showThis = false;
                        }
                        if (item.relaStatus == '9' || item.relaStatus == '6') {
                            item.regisStatu = '失效';
                            item.showThis = false;
                        }
                        if (item.relaStatus == '5') {
                            item.showThis = false;
                        }
                        for (var _i = 0, _a = _this.relaStatusOptions; _i < _a.length; _i++) {
                            var temp = _a[_i];
                            if (item.relaStatus == temp.value) {
                                item.relaStatus = temp.label;
                            }
                        }
                        for (var _b = 0, _c = _this.regisStatuOptions; _b < _c.length; _b++) {
                            var temp = _c[_b];
                            if (item.regisStatu == temp.value) {
                                item.regisStatu = temp.label;
                            }
                        }
                        for (var _d = 0, _e = _this.operationTypeOptions; _d < _e.length; _d++) {
                            var temp = _e[_d];
                            if (item.operationType == temp.value) {
                                item.operationType = temp.label;
                            }
                        }
                    };
                    for (var _i = 0, _a = data.pageList; _i < _a.length; _i++) {
                        var item = _a[_i];
                        _loop_1(item);
                    }
                    _this.datas = data.pageList;
                    _this.total = data.totalNum;
                }
                else {
                    _this.datas = [];
                    _this.total = data.totalNum;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    CustomIntroduceRelationshipQueryComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.queryCustIntroduceRelaBean.pageSize = event.rows * 1;
        //当前页
        this.queryCustIntroduceRelaBean.pageNum = event.page + 1;
        this.first = event.page * event.rows;
        this.query();
    };
    CustomIntroduceRelationshipQueryComponent.prototype.chongzhi = function () {
        this.queryCustIntroduceRelaBean.custNo = '';
        this.queryCustIntroduceRelaBean.introducerName = '';
        this.queryCustIntroduceRelaBean.coverIntroducerId = '';
        this.queryCustIntroduceRelaBean.coverIntroducerName = '';
        this.queryCustIntroduceRelaBean.fromDate = '';
        this.queryCustIntroduceRelaBean.thruDate = '';
        this.fromDate = null;
        this.thruDate = null;
    };
    //撤销
    CustomIntroduceRelationshipQueryComponent.prototype.toBack = function (data) {
        var _this = this;
        this.confirmationService.confirm({
            message: '是否提交撤销审批?',
            accept: function () {
                _this.backList = data;
                _this.submit_1();
            }
        });
    };
    //提交1
    CustomIntroduceRelationshipQueryComponent.prototype.submit_1 = function () {
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (s.extParam.specifyNextOpers) {
            delete s.extParam.specifyNextOpers;
            var commonHeader_1 = s;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
        }
        this.waitSelUserList = this.commfunc.query('KHJSKHLC', {});
        this.outVal = this.waitSelUserList.waitSelUserList;
        var chooseThis = this.waitSelUserList.display;
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var a2 = commonHeader.extParam.specifyNextOpers;
        if (chooseThis == true && (a2 == undefined || a2 == '' || a2 == null)) {
            this.choosePerson = true;
        }
        else {
            this.submit_2();
        }
    };
    CustomIntroduceRelationshipQueryComponent.prototype.submit_2 = function () {
        var _this = this;
        var params = {
            applyId: this.backList.applyId,
            operationType: '2',
            relaId: this.backList.relaId,
            introducerId: this.backList.introducerId,
            introducerName: this.backList.introducerName,
            applicantUserId: this.backList.createdUserId,
        };
        this.httpService.approveCustIntroduceCust(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '提交成功' });
                _this.queryFirst();
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    CustomIntroduceRelationshipQueryComponent.prototype.outDisplayCall = function (event) {
        this.choosePerson = event;
    };
    CustomIntroduceRelationshipQueryComponent.prototype.outValueCall = function (event) {
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.submit_2();
    };
    CustomIntroduceRelationshipQueryComponent.prototype.choosePersonHide = function () {
        this.choosePerson = false;
    };
    //码值
    CustomIntroduceRelationshipQueryComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //校验客户号只能输入数字
    CustomIntroduceRelationshipQueryComponent.prototype.onKeyupNumber = function (event) {
        if (event.target.value != '') {
            if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(null, event.target.value)) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '当前输入框内只能输入数字!' }];
                event.target.value = '';
                return;
            }
            if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["custNoTen"])(null, event.target.value)) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '客户号错误!' }];
                event.target.value = '';
                return;
            }
        }
    };
    //按钮权限
    CustomIntroduceRelationshipQueryComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomIntroduceRelationshipQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customIntroduceRelationshipQuery',
            template: __webpack_require__(/*! ./customIntroduceRelationshipQuery.component.html */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRelationshipQuery/customIntroduceRelationshipQuery.component.html"),
            styles: [__webpack_require__(/*! ./customIntroduceRelationshipQuery.component.scss */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRelationshipQuery/customIntroduceRelationshipQuery.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__["CusOperationHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]])
    ], CustomIntroduceRelationshipQueryComponent);
    return CustomIntroduceRelationshipQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepeal/bean/cancelCustIntroduceApply.bean.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepeal/bean/cancelCustIntroduceApply.bean.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: CancelCustIntroduceApplyBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelCustIntroduceApplyBean", function() { return CancelCustIntroduceApplyBean; });
var CancelCustIntroduceApplyBean = /** @class */ (function () {
    function CancelCustIntroduceApplyBean() {
    }
    return CancelCustIntroduceApplyBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepeal/customIntroduceRepeal.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepeal/customIntroduceRepeal.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 functions\">\r\n    <span class=\"change\" (click)=\"toCustomIntroduceApply()\">客户介绍客户申请</span>\r\n    <span class=\"change active\">客户介绍客户撤销申请</span>\r\n</div>\r\n<div class=\"ui-g-12 bgcolor\">\r\n    <form [formGroup]=\"userform\">\r\n        <div class=\"ui-g-12\">\r\n            <header-title [Info]=\"'客户介绍客户撤销申请'\"></header-title>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 center\">\r\n                <span appValidation>客户介绍客户编号:</span>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" name=\"relaId\" formControlName=\"relaId\" pInputText [(ngModel)]=\"cancelCustIntroduceApplyBean.relaId\" (blur)=\"myFunction()\"\r\n                />\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['relaId'].valid&&userform.controls['relaId'].dirty\">介绍客户号不能为空!</span>\r\n            </div>\r\n            <div class=\"ui-g-2 center\">\r\n                <span appValidation>介绍客户号:</span>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" name=\"custNo\" formControlName=\"custNo\" disabled pInputText [(ngModel)]=\"custNo\" />\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['custNo'].valid&&userform.controls['custNo'].dirty\">介绍客户号不能为空!</span>\r\n            </div>\r\n            <div class=\"ui-g-2 center\">\r\n                <span appValidation>介绍客户名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" name=\"custName\" formControlName=\"custName\" disabled pInputText [(ngModel)]=\"custName\" />\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['custName'].valid&&userform.controls['custName'].dirty\">介绍客户号不能为空!</span>\r\n            </div>\r\n            <div class=\"ui-g-2 center\">\r\n                <span appValidation>介绍客户账号:</span>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" name=\"custAcctNo\" formControlName=\"custAcctNo\" disabled pInputText [(ngModel)]=\"custAcctNo\" />\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['custAcctNo'].valid&&userform.controls['custAcctNo'].dirty\">介绍客户号不能为空!</span>\r\n            </div>\r\n            <div class=\"ui-g-2 center\">\r\n                <span appValidation>被介绍客户号:</span>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" name=\"cust2No\" formControlName=\"cust2No\" disabled pInputText [(ngModel)]=\"cust2No\" />\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['cust2No'].valid&&userform.controls['cust2No'].dirty\">介绍客户号不能为空!</span>\r\n            </div>\r\n            <div class=\"ui-g-2 center\">\r\n                <span appValidation>被介绍客户名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" name=\"cust2Name\" formControlName=\"cust2Name\" disabled pInputText [(ngModel)]=\"cust2Name\" />\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['cust2Name'].valid&&userform.controls['cust2Name'].dirty\">介绍客户号不能为空!</span>\r\n            </div>\r\n            <div class=\"ui-g-2 center\">\r\n                <span appValidation>生效日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                    name=\"fromDate\" formControlName=\"fromDate\" disabled=\"true\" [locale]=\"ch\" [(ngModel)]=\"fromDate\"></p-calendar>\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['fromDate'].valid&&userform.controls['fromDate'].dirty\">介绍客户号不能为空!</span>\r\n            </div>\r\n            <div class=\"ui-g-2 center\">\r\n                <span appValidation>到期日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                    name=\"thruDate\" formControlName=\"thruDate\" disabled=\"true\" [locale]=\"ch\" [(ngModel)]=\"thruDate\"></p-calendar>\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['thruDate'].valid&&userform.controls['thruDate'].dirty\">介绍客户号不能为空!</span>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <hr/>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 center\">\r\n            <span>经办人:</span>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <input type=\"text\" disabled pInputText [(ngModel)]=\"userName\" />\r\n        </div>\r\n        <div class=\"ui-g-2 center\">\r\n            <span>经办日期:</span>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <p-calendar disabled=\"true\" [showIcon]=\"true\" [locale]=\"ch\" [(ngModel)]=\"date\"></p-calendar>\r\n        </div>\r\n        <div class=\"ui-g-2 center\">\r\n            <span>经办机构:</span>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <input type=\"text\" disabled pInputText [(ngModel)]=\"orgName\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"提交\" (click)=\"commit()\"></button>\r\n    </div>\r\n</div>\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepeal/customIntroduceRepeal.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepeal/customIntroduceRepeal.component.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  text-align: center; }\n\n.functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0; }\n\n.functions .change {\n    display: inline-block;\n    font-size: 15px;\n    height: 40px;\n    line-height: 40px;\n    border-radius: 3px 3px 0 0;\n    color: #929292;\n    padding: 0px 30px;\n    font-weight: bold;\n    cursor: pointer; }\n\n.active {\n  border: none !important;\n  background-color: #f7f7f7 !important;\n  color: #003f5c !important; }\n\n.center {\n  text-align: right; }\n\n.bgcolor {\n  background: #f7f7f7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS93b3JrLXJhc2svY3JlZGl0LWludGVyZ3JhdGlvbi9jdXN0b21JbnRyb2R1Y2UvY3VzdG9tSW50cm9kdWNlUmVwZWFsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcd29yay1yYXNrXFxjcmVkaXQtaW50ZXJncmF0aW9uXFxjdXN0b21JbnRyb2R1Y2VcXGN1c3RvbUludHJvZHVjZVJlcGVhbFxcY3VzdG9tSW50cm9kdWNlUmVwZWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUhuQjtJQUtRLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZSxFQUFBOztBQUl2QjtFQUNJLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL3dvcmstcmFzay9jcmVkaXQtaW50ZXJncmF0aW9uL2N1c3RvbUludHJvZHVjZS9jdXN0b21JbnRyb2R1Y2VSZXBlYWwvY3VzdG9tSW50cm9kdWNlUmVwZWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLkJpZ1RpdHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxuLy8gICAgIHBhZGRpbmc6IDA7XHJcbi8vICAgICAudGl0QmdDb2xvciB7XHJcbi8vICAgICAgICAgd2lkdGg6IDIzMHB4O1xyXG4vLyAgICAgICAgIGhlaWdodDogNDVweDtcclxuLy8gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbi8vICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyAuYWN0aXZle1xyXG4vLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjb2xvcjogIzE5YjBjOCAhaW1wb3J0YW50O1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxOWIwYzg7XHJcbi8vIH1cclxuLmJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZnVuY3Rpb25zIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAuY2hhbmdlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICAgICAgICBjb2xvcjogIzkyOTI5MjtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwM2Y1YyAhaW1wb3J0YW50O1xyXG59XHJcbi5jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYmdjb2xvcntcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepeal/customIntroduceRepeal.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepeal/customIntroduceRepeal.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: CustomIntroduceRepealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomIntroduceRepealComponent", function() { return CustomIntroduceRepealComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_cancelCustIntroduceApply_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/cancelCustIntroduceApply.bean */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepeal/bean/cancelCustIntroduceApply.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomIntroduceRepealComponent = /** @class */ (function () {
    function CustomIntroduceRepealComponent(router, fb, httpService, commfunc, confirmationService) {
        this.router = router;
        this.fb = fb;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.confirmationService = confirmationService;
        this.msgs = [];
        this.date = new Date();
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_CN"];
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.cancelCustIntroduceApplyBean = new _bean_cancelCustIntroduceApply_bean__WEBPACK_IMPORTED_MODULE_2__["CancelCustIntroduceApplyBean"]();
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
        this.userform = fb.group({
            relaId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            custNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            custName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            custAcctNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            cust2No: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            cust2Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            fromDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            thruDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    }
    CustomIntroduceRepealComponent.prototype.ngOnInit = function () {
    };
    CustomIntroduceRepealComponent.prototype.toCustomIntroduceApply = function () {
        this.router.navigate(["pages/tzb/custom/work-rask/customIntroduce/customIntroduceApply"]);
    };
    CustomIntroduceRepealComponent.prototype.myFunction = function () {
        var _this = this;
        var param = {
            relaId: this.cancelCustIntroduceApplyBean.relaId
        };
        this.httpService.getCustIntroduceInfoFromRelaId(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custNo = data.custNo;
                _this.custName = data.custName;
                _this.custAcctNo = data.custAcctNo;
                _this.cust2No = data.cust2No;
                _this.cust2Name = data.cust2Name;
                _this.fromDate = new Date(data.fromDate);
                _this.thruDate = new Date(data.thruDate);
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
    CustomIntroduceRepealComponent.prototype.commit = function () {
        var _this = this;
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
        this.confirmationService.confirm({
            message: '请确认该文件提交?',
            accept: function () {
                _this.httpService.cancelCustIntroduceApply(_this.cancelCustIntroduceApplyBean).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: '提交成功' });
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
        });
    };
    CustomIntroduceRepealComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customIntroduceRepeal',
            template: __webpack_require__(/*! ./customIntroduceRepeal.component.html */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepeal/customIntroduceRepeal.component.html"),
            styles: [__webpack_require__(/*! ./customIntroduceRepeal.component.scss */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepeal/customIntroduceRepeal.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]])
    ], CustomIntroduceRepealComponent);
    return CustomIntroduceRepealComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepealQuery/bean/queryCancelCustIntroduceApply.bean.ts":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepealQuery/bean/queryCancelCustIntroduceApply.bean.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: QueryCancelCustIntroduceApplyBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryCancelCustIntroduceApplyBean", function() { return QueryCancelCustIntroduceApplyBean; });
var QueryCancelCustIntroduceApplyBean = /** @class */ (function () {
    function QueryCancelCustIntroduceApplyBean() {
    }
    return QueryCancelCustIntroduceApplyBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepealQuery/customIntroduceRepealQuery.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepealQuery/customIntroduceRepealQuery.component.html ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\" *ngIf=\"permissionCheck('SID00027_02_04')\">\r\n    <!-- <header-title [Info]=\"'客户介绍客户撤销历史'\"></header-title> -->\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>介绍人客户号:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"queryCancelCustIntroduceApplyBean.custNo\" (keyup)=\"onKeyupNumber($event)\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>介绍人客户名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"queryCancelCustIntroduceApplyBean.introducerName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>被介绍人客户号:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"queryCancelCustIntroduceApplyBean.coverIntroducerId\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>被介绍人客户名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"queryCancelCustIntroduceApplyBean.coverIntroducerName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>生效日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-calendar [(ngModel)]=\"fromDate\" [maxDate]=\"thruDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"showStart()\" (onBlur)=\"showStart()\"></p-calendar>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 right\">\r\n                <span>到期日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-calendar [(ngModel)]=\"thruDate\" [minDate]=\"fromDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"showEnd()\" (onBlur)=\"showEnd()\"></p-calendar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"chongzhi()\"></button>\r\n    </div>\r\n    <div style=\"float:right;padding-right:1em;\">\r\n        <span class=\"icoColor\" (click)=\"chooseBtn()\">选择字段</span>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\" style=\"width:100%;overflow-x:scroll;\">\r\n        <p-dataTable [value]=\"data\" scorllable=\"true\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field={{list.value}} header={{list.label}} *ngFor=\"let list of tableData\" [style]=\"{'width':'180px'}\"></p-column>\r\n            <p-column header=\"操作\" [style]=\"{'width':'180px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <div class=\"table-button\">\r\n                        <span class=\"tabelDetailIco\" (click)=\"toDetail(col)\">详情</span>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator [first]=\"first\" rows={{queryCancelCustIntroduceApplyBean.pageSize}} totalRecords={{total}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n\r\n<p-dialog *ngIf=\"addPage\" [(visible)]=\"addPage\" modal=\"true\" width=\"1200\" height=\"600\">\r\n    <p-header>\r\n        {{addHeader}}\r\n    </p-header>\r\n    <div class=\"ui-g-12\">\r\n        <p-checkbox class=\"ui-g-12\" binary=\"true\" label=\"全选\" (click)=\"checkAll()\" [(ngModel)]=\"isAll\"></p-checkbox>\r\n        <p-checkbox class=\"ui-g-4\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of arrList\" [(ngModel)]=\"item.isCheck\" (click)=\"doSelect(item)\"></p-checkbox>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"save()\"></button>\r\n    </div>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"detailPage\" [(visible)]=\"detailPage\" modal=\"true\" responsive=\"true\">\r\n    <p-header>\r\n        {{detailHeader}}\r\n    </p-header>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 right\">\r\n            <span>介绍人客户号:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.introducerId}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 right\">\r\n            <span>介绍人客户名称:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.introducerName}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 right\">\r\n            <span>生效日期:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.fromDate}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 right\">\r\n            <span>到期日期:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.thruDate}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 right\">\r\n            <span>介绍人存款账号:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.introducerAcctId}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 right\">\r\n            <span>经办人:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.createdUserName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 right\">\r\n            <span>经办日期:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.createdStamp}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 right\">\r\n            <span>经办机构:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.createdOrgName}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 right\">\r\n            <span>修改日期:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.lastUpdatedStamp}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 right\">\r\n            <span>银行代码:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.bankCode}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 right\">\r\n            <span>审批状态:</span>\r\n        </div>\r\n        <div class=\"ui-g-2\">\r\n            <span>{{detailList.relaStatus|codeValuePie:relaStatusOptions}}</span>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12 table  base-table\">\r\n            <p-dataTable [value]=\"itemTable\" [style]=\"{'text-align':'center'}\" [emptyMessage]='tabMesg' scrollable=\"true\" scrollHeight=\"350px\">\r\n                <p-column field=\"approvalUserId\" header=\"审批人\"></p-column>\r\n                <p-column field=\"remark1\" header=\"审批阶段\"></p-column>\r\n                <p-column field=\"approvalDate\" header=\"审批日期\"></p-column>\r\n                <p-column field=\"remark2\" header=\"审批结果\"></p-column>\r\n                <p-column field=\"remark3\" header=\"审批意见\"></p-column>\r\n            </p-dataTable>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"ui-g-12 base-table table\">\r\n        <p-dataTable [value]=\"dataDetail\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"applyId\" header=\"客户介绍客户编号\"></p-column>\r\n            <!-- <p-column field=\"introducerId\" header=\"介绍人客户号\"></p-column>\r\n            <p-column field=\"introducerName\" header=\"介绍人客户名称\"></p-column> -->\r\n            <p-column field=\"coverIntroduceId\" header=\"被介绍人客户号\"></p-column>\r\n            <p-column field=\"coverIntroduceName\" header=\"被介绍人客户名称\"></p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows={{pageSizeCover}} totalRecords={{totalCover}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginateCover($event)\"></p-paginator>\r\n    </div>\r\n</p-dialog>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepealQuery/customIntroduceRepealQuery.component.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepealQuery/customIntroduceRepealQuery.component.scss ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0; }\n  .functions .change {\n    display: inline-block;\n    font-size: 15px;\n    height: 40px;\n    line-height: 40px;\n    border-radius: 3px 3px 0 0;\n    color: #929292;\n    padding: 0px 30px;\n    font-weight: bold;\n    cursor: pointer; }\n  .active {\n  border: none !important;\n  background-color: #f7f7f7 !important;\n  color: #003f5c !important; }\n  .right {\n  text-align: right;\n  padding-right: 5px !important; }\n  .ui-g-6 .ui-g-4,\n.ui-g-6 .ui-g-6 {\n  padding: 0; }\n  .bgcolor {\n  background: #f7f7f7; }\n  .table,\n.btn,\n.center {\n  text-align: center; }\n  .label {\n  text-align: right; }\n  :host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS93b3JrLXJhc2svY3JlZGl0LWludGVyZ3JhdGlvbi9jdXN0b21JbnRyb2R1Y2UvY3VzdG9tSW50cm9kdWNlUmVwZWFsUXVlcnkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFx3b3JrLXJhc2tcXGNyZWRpdC1pbnRlcmdyYXRpb25cXGN1c3RvbUludHJvZHVjZVxcY3VzdG9tSW50cm9kdWNlUmVwZWFsUXVlcnlcXGN1c3RvbUludHJvZHVjZVJlcGVhbFF1ZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7RUFIbkI7SUFLUSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTtFQUl2QjtFQUNJLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMseUJBQXlCLEVBQUE7RUFHN0I7RUFDSSxpQkFBaUI7RUFDakIsNkJBQTZCLEVBQUE7RUFHakM7O0VBR1EsVUFBVSxFQUFBO0VBSWxCO0VBQ0ksbUJBQW1CLEVBQUE7RUFHdkI7OztFQUdJLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksaUJBQWlCLEVBQUE7RUFJckI7RUFDSSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vd29yay1yYXNrL2NyZWRpdC1pbnRlcmdyYXRpb24vY3VzdG9tSW50cm9kdWNlL2N1c3RvbUludHJvZHVjZVJlcGVhbFF1ZXJ5L2N1c3RvbUludHJvZHVjZVJlcGVhbFF1ZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bmN0aW9ucyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlZjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgLmNoYW5nZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XHJcbiAgICAgICAgY29sb3I6ICM5MjkyOTI7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDNmNWMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS1nLTYge1xyXG4gICAgLnVpLWctNCxcclxuICAgIC51aS1nLTYge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iZ2NvbG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbn1cclxuXHJcbi50YWJsZSxcclxuLmJ0bixcclxuLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLy/ooajmoLzlrZfmr43mlbDlrZfoh6rliqjmjaLooYxcclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YSB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepealQuery/customIntroduceRepealQuery.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepealQuery/customIntroduceRepealQuery.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: CustomIntroduceRepealQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomIntroduceRepealQueryComponent", function() { return CustomIntroduceRepealQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_queryCancelCustIntroduceApply_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/queryCancelCustIntroduceApply.bean */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepealQuery/bean/queryCancelCustIntroduceApply.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomIntroduceRepealQueryComponent = /** @class */ (function () {
    function CustomIntroduceRepealQueryComponent(router, httpService, commfunc) {
        this.router = router;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"]; //表格中无数据时显示的内容
        this.first = 0;
        this.msgs = [];
        this.fromDate = null;
        this.thruDate = null;
        //每页多少条
        this.pageSizeCover = 10;
        this.pageNumCover = 1;
        this.date = new Date();
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["CALENDAR_CN"];
        this.addHeader = '选择字段';
        this.addPage = false;
        this.detailHeader = '详情';
        this.detailPage = false;
        this.isAll = false;
        this.tableData = [];
        this.arrList = [];
        this.data = [];
        this.detailList = {
            introducerId: '',
            introducerName: '',
            introducerAcctId: '',
            fromDate: '',
            thruDate: '',
            createdUserName: '',
            createdStamp: '',
            lastUpdatedStamp: '',
            bankCode: '',
            regisStatu: '',
        };
        this.itemTable = []; //审批表
        this.dataDetail = [
            {
                relaId: '',
                custNo: '',
                custName: '',
                cust2No: '',
                cust2Name: '',
            }
        ]; //详情表
        this.queryCancelCustIntroduceApplyBean = new _bean_queryCancelCustIntroduceApply_bean__WEBPACK_IMPORTED_MODULE_4__["QueryCancelCustIntroduceApplyBean"]();
    }
    CustomIntroduceRepealQueryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.codeValues();
        this.shenPiOptions = this.code['ShenPi'];
        this.relaStatusOptions = this.code['introRepealStatus']; //撤销专用状态
        this.regisStatuOptions = this.code['regisStatuIntro']; //登记簿状态
        this.operationTypeOptions = this.code['operationTypeIntro']; //操作类型
        this.queryCancelCustIntroduceApplyBean.pageSize = 10;
        this.queryCancelCustIntroduceApplyBean.pageNum = 1;
        var param = {
            businessType: "CustIntroduce",
            funcType: "RepealDetailQuery",
        };
        this.httpService.getDisplayFields(param).subscribe(function (data) {
            var str = data.fields;
            var checkThis = true;
            for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
                var item = str_1[_i];
                if (item.isCheck == true) {
                    item.isCheck = true;
                    _this.tableData.push(item);
                    checkThis = item.isCheck && checkThis;
                }
                else if (item.isCheck == false) {
                    item.isCheck = false;
                    checkThis = false;
                }
            }
            _this.arrList = str;
            _this.isAll = checkThis;
        });
        this.tableData.sort(function (a, b) {
            return a.num > b.num;
        });
        this.queryFirst();
    };
    CustomIntroduceRepealQueryComponent.prototype.toCustomIntroduceApplyQuery = function () {
        this.router.navigate(["pages/tzb/custom/work-rask/customIntroduce/customIntroduceApplyQuery"]);
    };
    CustomIntroduceRepealQueryComponent.prototype.toCustomIntroduceRelationshipQuery = function () {
        this.router.navigate(["pages/tzb/custom/work-rask/customIntroduce/customIntroduceRelationshipQuery"]);
    };
    CustomIntroduceRepealQueryComponent.prototype.toCustomIntroduceApply = function () {
        this.router.navigate(["pages/tzb/custom/work-rask/customIntroduce/customIntroduceApply"]);
    };
    CustomIntroduceRepealQueryComponent.prototype.chooseBtn = function () {
        this.addPage = true;
    };
    //生效日期
    CustomIntroduceRepealQueryComponent.prototype.showStart = function () {
        var _this = this;
        if (this.fromDate && this.fromDate != null && this.thruDate && this.thruDate != null) {
            if (this.fromDate.getTime() > this.thruDate.getTime()) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '生效日期必须小于到期日期!' }];
                setTimeout(function () {
                    _this.fromDate = null;
                });
                return;
            }
        }
    };
    //到期日期
    CustomIntroduceRepealQueryComponent.prototype.showEnd = function () {
        var _this = this;
        if (this.fromDate && this.fromDate != null && this.thruDate && this.thruDate != null) {
            if (this.fromDate.getTime() > this.thruDate.getTime()) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '到期日期必须大于生效日期!' }];
                setTimeout(function () {
                    _this.thruDate = null;
                });
                return;
            }
        }
    };
    CustomIntroduceRepealQueryComponent.prototype.queryFirst = function () {
        this.queryCancelCustIntroduceApplyBean.pageSize = 10;
        this.queryCancelCustIntroduceApplyBean.pageNum = 1;
        this.first = 0;
        this.query();
    };
    //翻页
    CustomIntroduceRepealQueryComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.queryCancelCustIntroduceApplyBean.pageSize = event.rows * 1;
        //当前页
        this.queryCancelCustIntroduceApplyBean.pageNum = event.page + 1;
        this.first = event.page * event.rows;
        this.query();
    };
    //单选
    CustomIntroduceRepealQueryComponent.prototype.doSelect = function (data) {
        var _this = this;
        var sb = true;
        if (data.isCheck) {
            this.tableData.push(data);
            this.arrList.forEach(function (item) {
                sb = item.isCheck && sb;
            });
        }
        else {
            this.tableData.forEach(function (item, i) {
                if (item.value == data.value) {
                    _this.tableData.splice(i, 1);
                    return;
                }
            });
            sb = false;
        }
        this.tableData.sort(function (a, b) {
            return a.num * 1 - b.num * 1;
        });
        this.isAll = sb;
    };
    //全选
    CustomIntroduceRepealQueryComponent.prototype.checkAll = function () {
        var _this = this;
        var isTrue = this.isAll;
        this.tableData = [];
        this.arrList.forEach(function (item) {
            item['isCheck'] = isTrue;
            if (isTrue) {
                _this.tableData.push(item);
            }
        });
        this.tableData.sort(function (a, b) {
            return a.num * 1 - b.num * 1;
        });
    };
    //详情
    CustomIntroduceRepealQueryComponent.prototype.toDetail = function (item) {
        var _this = this;
        var temp2 = '';
        for (var _i = 0, _a = this.relaStatusOptions; _i < _a.length; _i++) {
            var data_item = _a[_i];
            if (item.relaStatus == data_item.label) {
                temp2 = data_item.value;
            }
        }
        this.itemCover = item;
        this.first = 0;
        var temp = '';
        if (item.relaStatus == '5' || item.relaStatus == '撤销审批中'
            || item.relaStatus == '3' || item.relaStatus == '撤销审批未通过') {
            temp = '1';
        }
        else {
            temp = '2';
        }
        var param = {
            operationNum: item.applyId,
            operationType: temp,
            pageNum: this.pageNumCover,
            pageSize: this.pageSizeCover,
            relaStatus: temp2
        };
        this.httpService.introduceServiceDetailList(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.pageList && data.pageList.length > 0) {
                    _this.detailList = data.pageList[0];
                    _this.dataDetail = data.pageList;
                }
                else {
                    _this.detailList = [];
                    _this.dataDetail = [];
                }
                _this.totalCover = data.totalNum;
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
        this.detailPage = true;
    };
    CustomIntroduceRepealQueryComponent.prototype.save = function () {
        var _this = this;
        this.addPage = false;
        var arr = [];
        this.tableData.forEach(function (item) {
            arr.push(item.value);
        });
        var param = {
            businessType: "CustIntroduce",
            funcType: "RepealDetailQuery",
            fields: arr,
        };
        this.httpService.getDisplayFields(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    CustomIntroduceRepealQueryComponent.prototype.query = function () {
        var _this = this;
        this.queryCancelCustIntroduceApplyBean.operationType = "2";
        this.queryCancelCustIntroduceApplyBean.fromDate = this.commfunc.transDateN(this.fromDate);
        this.queryCancelCustIntroduceApplyBean.thruDate = this.commfunc.transDateN(this.thruDate);
        this.httpService.introduceServiceDetailList(this.queryCancelCustIntroduceApplyBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.pageList && data.pageList.length > 0) {
                    for (var _i = 0, _a = data.pageList; _i < _a.length; _i++) {
                        var item = _a[_i];
                        for (var _b = 0, _c = _this.relaStatusOptions; _b < _c.length; _b++) {
                            var temp = _c[_b];
                            if (item.relaStatus == temp.value) {
                                item.relaStatus = temp.label;
                            }
                        }
                        for (var _d = 0, _e = _this.regisStatuOptions; _d < _e.length; _d++) {
                            var temp = _e[_d];
                            if (item.regisStatu == temp.value) {
                                item.regisStatu = temp.label;
                            }
                        }
                        for (var _f = 0, _g = _this.operationTypeOptions; _f < _g.length; _f++) {
                            var temp = _g[_f];
                            if (item.operationType == temp.value) {
                                item.operationType = temp.label;
                            }
                        }
                    }
                    _this.data = data.pageList;
                    _this.total = data.totalNum;
                }
                else {
                    _this.data = [];
                    _this.total = data.totalNum;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    CustomIntroduceRepealQueryComponent.prototype.chongzhi = function () {
        this.queryCancelCustIntroduceApplyBean.custNo = '';
        this.queryCancelCustIntroduceApplyBean.introducerName = '';
        this.queryCancelCustIntroduceApplyBean.coverIntroducerId = '';
        this.queryCancelCustIntroduceApplyBean.coverIntroducerName = '';
        this.queryCancelCustIntroduceApplyBean.fromDate = '';
        this.queryCancelCustIntroduceApplyBean.thruDate = '';
        this.fromDate = null;
        this.thruDate = null;
    };
    //码值
    CustomIntroduceRepealQueryComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //校验客户号只能输入数字
    CustomIntroduceRepealQueryComponent.prototype.onKeyupNumber = function (event) {
        if (event.target.value != '') {
            if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(null, event.target.value)) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '当前输入框内只能输入数字!' }];
                event.target.value = '';
                return;
            }
            if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["custNoTen"])(null, event.target.value)) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '客户号错误!' }];
                event.target.value = '';
                return;
            }
        }
    };
    CustomIntroduceRepealQueryComponent.prototype.paginateCover = function (event) {
        var _this = this;
        //每页显示的条数
        this.pageSizeCover = event.rows * 1;
        //当前页
        this.pageNumCover = event.page + 1;
        this.first = event.page * event.rows;
        var param = {
            operationNum: this.itemCover.applyId,
            operationType: '2',
            pageSize: this.pageSizeCover,
            pageNum: this.pageNumCover
        };
        this.httpService.introduceServiceDetailList(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataDetail = data.pageList;
                _this.totalCover = data.totalNum;
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //按钮权限
    CustomIntroduceRepealQueryComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomIntroduceRepealQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customIntroduceRepealQuery',
            template: __webpack_require__(/*! ./customIntroduceRepealQuery.component.html */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepealQuery/customIntroduceRepealQuery.component.html"),
            styles: [__webpack_require__(/*! ./customIntroduceRepealQuery.component.scss */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/customIntroduceRepealQuery/customIntroduceRepealQuery.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], CustomIntroduceRepealQueryComponent);
    return CustomIntroduceRepealQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/repealApproval/bean/repealApproval.bean.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/repealApproval/bean/repealApproval.bean.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: RepealApproveBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepealApproveBean", function() { return RepealApproveBean; });
var RepealApproveBean = /** @class */ (function () {
    function RepealApproveBean() {
    }
    return RepealApproveBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/repealApproval/repealApproval.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/repealApproval/repealApproval.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow partStyle\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>事项类型:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.bigClassName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>事项类型:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.littleClassName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>发起人:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.workCreateName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>创建日期:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.createDate}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 boxShadow\">\r\n    <header-title [Info]=\"'客户介绍客户撤销审批'\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 right\">\r\n                <span>客户介绍客户编号:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{repealApproveBean.applyId}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">\r\n                <span>介绍人客户号:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{repealApproveBean.introducerId}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">\r\n                <span>介绍人客户名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{repealApproveBean.introducerName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 right\">\r\n                <span>被介绍人客户号:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{repealApproveBean.coverIntroduceId}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">\r\n                <span>被介绍人客户名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{repealApproveBean.coverIntroduceName}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">\r\n                <span>生效日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{repealApproveBean.fromDate}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 right\">\r\n                <span>到期日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{repealApproveBean.thruDate}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">\r\n                <span>介绍人存款账号:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{repealApproveBean.introducerAcctId}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">\r\n                <span>审批状态:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{repealApproveBean.relaStatus|codeValuePie:relaStatusOptions}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 right\">\r\n                <span>经办人:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{repealApproveBean.createdUserName}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">\r\n                <span>经办机构:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{repealApproveBean.createdOrgName}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">\r\n                <span>经办日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{repealApproveBean.createdStamp}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 right\">\r\n                <span>修改日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{repealApproveBean.lastUpdatedStamp}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">\r\n                <span>银行代码:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{repealApproveBean.bankCode}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <examine-page></examine-page>\r\n    </div>\r\n</div>\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/repealApproval/repealApproval.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/repealApproval/repealApproval.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn,\n.center,\n.table {\n  text-align: center; }\n\n.right {\n  text-align: right;\n  width: 15%; }\n\n.partStyle {\n  margin-bottom: 10px; }\n\n.tit {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS93b3JrLXJhc2svY3JlZGl0LWludGVyZ3JhdGlvbi9jdXN0b21JbnRyb2R1Y2UvcmVwZWFsQXBwcm92YWwvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFx3b3JrLXJhc2tcXGNyZWRpdC1pbnRlcmdyYXRpb25cXGN1c3RvbUludHJvZHVjZVxccmVwZWFsQXBwcm92YWxcXHJlcGVhbEFwcHJvdmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUI7RUFDakIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL3dvcmstcmFzay9jcmVkaXQtaW50ZXJncmF0aW9uL2N1c3RvbUludHJvZHVjZS9yZXBlYWxBcHByb3ZhbC9yZXBlYWxBcHByb3ZhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4sXHJcbi5jZW50ZXIsXHJcbi50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbi5wYXJ0U3R5bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnRpdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/repealApproval/repealApproval.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/repealApproval/repealApproval.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: RepealApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepealApprovalComponent", function() { return RepealApprovalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_repealApproval_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bean/repealApproval.bean */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/repealApproval/bean/repealApproval.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RepealApprovalComponent = /** @class */ (function () {
    function RepealApprovalComponent(httpService, routeInfo, commfunc, fb, datePipe) {
        this.httpService = httpService;
        this.routeInfo = routeInfo;
        this.commfunc = commfunc;
        this.fb = fb;
        this.datePipe = datePipe;
        this.msgs = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.repealApproveBean = new _bean_repealApproval_bean__WEBPACK_IMPORTED_MODULE_7__["RepealApproveBean"]();
        this.detailList = [];
    }
    RepealApprovalComponent.prototype.ngOnInit = function () {
        this.codeValues();
        this.relaStatusOptions = this.code['introRepealStatus']; //撤销专用状态
        //console.log(this.routeInfo.snapshot.params)
        this.custIntroduceParam = JSON.parse(this.commfunc.getSessionDataCH('custIntroduce'));
        if (this.custIntroduceParam) {
            this.detailList = this.custIntroduceParam;
            this.approveList = JSON.parse(this.custIntroduceParam['dataMap']);
            this.query();
        }
    };
    RepealApprovalComponent.prototype.query = function () {
        var _this = this;
        var temp = {
            operationNum: this.approveList['applyId'],
            operationType: this.approveList['operationType'],
        };
        this.httpService.introduceServiceDetailList(temp).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.pageList && data.pageList.length > 0) {
                    for (var _i = 0, _a = data.pageList; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.applyId == _this.approveList['applyId']) {
                            _this.repealApproveBean = item;
                        }
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '没有数据!' });
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
    //码值
    RepealApprovalComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    RepealApprovalComponent.prototype.approveUpdate = function () {
        var _this = this;
        var param = {
            applyId: this.applyId,
            relaStatus: '1'
        };
        this.httpService.takeBackCustIntroduceCustApprove(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    RepealApprovalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'repealApproval',
            template: __webpack_require__(/*! ./repealApproval.component.html */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/repealApproval/repealApproval.component.html"),
            styles: [__webpack_require__(/*! ./repealApproval.component.scss */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/customIntroduce/repealApproval/repealApproval.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], RepealApprovalComponent);
    return RepealApprovalComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~credit-intergration-customIntroduce-customIntroduce-module~routing-introduce-introduce-modul~50bc9e49.js.map