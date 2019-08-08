(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~batch-precredit-add-batch-precredit-add-module~btn-page-btn-page-module~credit-ccm-credit-cc~7fb44095"],{

/***/ "./src/app/pages/tzb/custom/custom-contact-new/custom-contact-list/bean/custom-contact-list.bean.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-contact-new/custom-contact-list/bean/custom-contact-list.bean.ts ***!
  \**********************************************************************************************************/
/*! exports provided: QueryUnprocessedCommunicationEventBean, CustomTenTypeBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryUnprocessedCommunicationEventBean", function() { return QueryUnprocessedCommunicationEventBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTenTypeBean", function() { return CustomTenTypeBean; });
// c查询类
var QueryUnprocessedCommunicationEventBean = /** @class */ (function () {
    function QueryUnprocessedCommunicationEventBean() {
        this.marketingContactWay = []; //	联系方式
        this.marketingContactTheme = []; //	联系主题
        this.statusId = []; //	处理状态
        this.contactSource = []; //	计划来源
        this.pageNum = 1; //	页码
        this.pageSize = 10; //	页数
    }
    return QueryUnprocessedCommunicationEventBean;
}());

var CustomTenTypeBean = /** @class */ (function () {
    function CustomTenTypeBean() {
    }
    return CustomTenTypeBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/approve-page/approve-page.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/approve-page/approve-page.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"module\" id='appR'>\r\n    <div class=\"ui-g-12\" *ngIf=\"!nodata\">\r\n        <div class=\"ui-g-2\">\r\n            <div class=\"div2\">\r\n                <div class=\"middle\">\r\n                    <div class=\"leftMenu\">\r\n                        <div class=\"menu_list\">\r\n                            <ul>\r\n                                <li class=\"datali\" *ngFor=\"let pro of ulData\">\r\n                                    <img class=\"xiala\" src=\"../../../../../../assets/layout/images/menu.png\" />\r\n                                    <p title='{{pro.bigClassName}}' class=\"fuMenu\" style=\"display:flex;\">\r\n                                        <span style='flex:1;'> {{pro.bigClassName}}</span>\r\n                                        <span style=\"color:red!important;\" *ngIf=\"pro.bigtimeOutCount!=0\">{{pro.bigtimeOutCount}}</span>\r\n                                        <i *ngIf=\"pro.bigtimeOutCount&&pro.bigtimeOutCount!=0\">|</i>\r\n                                        <span style=\"margin-right:10px;\">{{pro.bigsysCount}}</span>\r\n                                    </p>\r\n                                    <div class=\"div1\">\r\n                                        <p title=\"{{nav.littleClassName}}\" (click)='navclick(nav)' class=\"zcd\" *ngFor=\"let nav of pro.childpage\">\r\n                                            <span *ngIf=\"nav.url&&nav.orgtype=='TZ'&& general\" class='ct'>T</span>\r\n                                            <span *ngIf=\"nav.url&&nav.orgtype=='CZ'&& general\" class='ct'>C</span>\r\n                                            <span class=\"littlename\"> {{nav.littleClassName}}</span>\r\n                                            <span style=\"color:red!important;\" *ngIf=\"nav.timeOutCount!=0\">{{nav.timeOutCount}}</span>\r\n                                            <i *ngIf=\"nav.timeOutCount&&nav.timeOutCount!=0\">|</i>\r\n                                            <span style=\"margin-right:10px;\">{{nav.sysCount}}</span>\r\n                                        </p>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-10\">\r\n            <app-approved-items *ngIf=\"disinNav\" [inNav]=\"inNav\"></app-approved-items>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"nodata\" class=\"noData\"></div>\r\n</div>\r\n<!-- 旋转 -->\r\n<div class=\"ui-g-12\" *ngIf=\"maskLayer\">\r\n    <div id=\"popWindow\" class=\"popWindow\" style=\"display:block\"></div>\r\n    <div class=\"maskLayer ui-g-12\">\r\n        <img src=\"../../../../../../../../assets/layout/images/loading1.gif\" alt=\"\" class=\"maskLayer\">\r\n    </div>\r\n</div>\r\n<!--提示消息-->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/approve-page/approve-page.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/approve-page/approve-page.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .tit {\n  text-align: right; }\n\n.module .btn {\n  text-align: center; }\n\n.module .div2 {\n  background-color: #fff;\n  height: 600px;\n  position: relative;\n  padding: 10px; }\n\n.module .div2:after {\n    content: ' ';\n    border-right: 2px solid #efefef;\n    display: inline-block;\n    width: 2px;\n    height: 97%;\n    position: absolute;\n    right: 13px;\n    top: 3%; }\n\n.module .div2 li {\n    list-style: none; }\n\n.module .pd4 {\n  padding: 7px 0 !important; }\n\n:host/deep/ .ui-panel .ui-panel-titlebar {\n  background-color: white !important;\n  border-bottom: 1px solid white !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr > th .ui-column-title {\n  font-size: 13px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS9hcHByb3ZlLXBhZ2UvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxyZW1pbmRlci1kb1xcYmFja2xvZy1kZXRhaWxcXGJ0bi1wYWdlXFxhcHByb3ZlLXBhZ2VcXGFwcHJvdmUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGlCQUFpQixFQUFBOztBQUZ6QjtFQUtRLGtCQUFrQixFQUFBOztBQUwxQjtFQVFRLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFYckI7SUFhWSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTyxFQUFBOztBQXBCbkI7SUF1QlksZ0JBQ0osRUFBQTs7QUF4QlI7RUEyQlEseUJBQXlCLEVBQUE7O0FBR2pDO0VBQ0ksa0NBQWtDO0VBQ2xDLHlDQUF5QyxFQUFBOztBQUU3QztFQUNJLDBCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS9hcHByb3ZlLXBhZ2UvYXBwcm92ZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZXtcclxuICAgIC50aXR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuYnRue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5kaXYyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcgJztcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2VmZWZlZjtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDk3JTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTNweDtcclxuICAgICAgICAgICAgdG9wOiAzJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucGQ0e1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLXBhbmVsIC51aS1wYW5lbC10aXRsZWJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdC9kZWVwLyAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGggLnVpLWNvbHVtbi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTNweCFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/approve-page/approve-page.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/approve-page/approve-page.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ApprovePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovePageComponent", function() { return ApprovePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_approvePage_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bean/approvePage.bean */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/approve-page/bean/approvePage.bean.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //事项类型的接口








/**
 * 审批事项
 */
var ApprovePageComponent = /** @class */ (function () {
    function ApprovePageComponent(router, routeInfo, cusOperationHttpService, customeHttpService, activatedRouter, commfunc, sanitizer) {
        this.router = router;
        this.routeInfo = routeInfo;
        this.cusOperationHttpService = cusOperationHttpService;
        this.customeHttpService = customeHttpService;
        this.activatedRouter = activatedRouter;
        this.commfunc = commfunc;
        this.sanitizer = sanitizer;
        this.disinNav = false;
        this.list = []; //接收后台数据
        this.startTime = null;
        this.endTime = null;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["CALENDAR_CN"]; //讲英文转化为中文
        this.userId = '';
        //提示信息
        this.msgs = [];
        this.approvePageBean = new _bean_approvePage_bean__WEBPACK_IMPORTED_MODULE_6__["ApprovePageBean"]();
        this.ulData = [];
        this.general = false;
        this.nodata = false;
        this.maskLayer = true;
        this.codeValues(); //调用方法，获取全部码值
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
    }
    ApprovePageComponent.prototype.ngOnInit = function () {
        //判断是否是总行或者集团
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var a = commonHeader.extParam.operatingLevel;
        if (a == 'GROUP' || a == 'GENERAL_BANK' || a == 'GENERAL_BANK_DT') {
            this.general = true;
        }
        else {
            this.general = false;
        }
        var session = window.sessionStorage;
        if (session.getItem('bussinessWhere')) {
            var bussinessWhere = session.getItem('bussinessWhere');
            if (bussinessWhere.indexOf('startUserId') != -1) {
                var t = bussinessWhere.split('=');
                this.approvePageBean.startUserId = t[1];
            }
            else {
                this.approvePageBean.bussinessWhere = bussinessWhere;
            }
        }
        this.loanApprCountByTypeQry();
        if (this.commfunc.getSessionDataCH('markFlag')) {
            this.commfunc.clearSession('markFlag');
        }
        if (this.commfunc.getSessionDataCH('taskId')) {
            this.commfunc.clearSession('taskId');
        }
        if (this.commfunc.getSessionDataCH('bpmQueryTaskOnlyList')) {
            this.commfunc.clearSession('bpmQueryTaskOnlyList');
        }
    };
    ApprovePageComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    //信贷-审批事项
    ApprovePageComponent.prototype.loanApprCountByTypeQry = function () {
        var _this = this;
        var param = {};
        var ob = this.customeHttpService.loanApprCountByTypeQry(param);
        ob.subscribe(function (data) {
            var tempArr = [];
            if (data.resultList && data.resultList.length > 0) {
                data.resultList.forEach(function (item) {
                    var tempObj = {};
                    tempObj['scheduleTypeId'] = item.scheduleTypeId;
                    tempObj['littleClassName'] = item.scheduleName;
                    tempObj['sysCount'] = item.countNum;
                    tempObj['url'] = item.url;
                    tempObj['flag'] = item.flag;
                    tempArr.push(tempObj);
                });
            }
            _this.queryNewList(tempArr);
        });
    };
    // disapprove: boolean = false;
    // 查询待办列表（汇总）
    ApprovePageComponent.prototype.queryNewList = function (datas) {
        var _this = this;
        this.nodata = false;
        this.maskLayer = true;
        this.approvePageBean.taskPoolFlag = '3';
        this.approvePageBean.itemType = 'KHLX';
        this.approvePageBean.itemCtrl = '1';
        this.approvePageBean.endFlag = '0';
        this.approvePageBean.userId = this.userId;
        this.approvePageBean.nodeType = '0'; // 待办
        this.customeHttpService.bpmQueryUnDoTaskCountGroup(this.approvePageBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.list = data.pageData.result;
                // if (this.list.length > 0) {
                //   this.disapprove = true;
                // }
                if (_this.list.length > 0 || (datas && datas.length > 0)) {
                    if (datas && datas.length > 0) {
                        _this.approve(_this.list, datas);
                    }
                    else {
                        _this.approve(_this.list);
                    }
                }
                else {
                    _this.nodata = true;
                    jquery__WEBPACK_IMPORTED_MODULE_7__('#appR').height(700);
                    _this.maskLayer = false;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    ApprovePageComponent.prototype.approve = function (list, datas) {
        var _this = this;
        var approvelist = [];
        var _loop_1 = function (i) {
            var element = this_1.list[i];
            var filterResult = approvelist.filter(function (x) { return x.bigClassNo == element['bigClassNo']; });
            var exist = filterResult && filterResult.length;
            var temp = null;
            if (exist) {
                temp = {
                    littleClassName: element['littleClassName'],
                    littleClassNo: element['littleClassNo'],
                    sysCount: element['sysCount'],
                    timeOutCount: element['timeOutCount'],
                    urgentCount: element['urgentCount'],
                    systemCode: element['systemCode']
                };
                filterResult[0].childpage.push(temp);
                filterResult[0].bigsysCount = filterResult[0].bigsysCount + element['sysCount'];
            }
            else {
                temp = {
                    bigClassName: element['bigClassName'],
                    bigClassNo: element['bigClassNo'],
                    bigsysCount: element['sysCount'],
                    bigtimeOutCount: element['timeOutCount'],
                    bigurgentCount: element['urgentCount'],
                    childpage: [
                        {
                            littleClassName: element['littleClassName'],
                            littleClassNo: element['littleClassNo'],
                            sysCount: element['sysCount'],
                            timeOutCount: element['timeOutCount'],
                            urgentCount: element['urgentCount'],
                            systemCode: element['systemCode']
                        }
                    ]
                };
                approvelist.push(temp);
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.list.length; i++) {
            _loop_1(i);
        }
        // for (let t = 0; t < approvelist.length; t++) {
        //   const e = approvelist[t];
        //   if (e.bigClassNo == 'SXSX') {
        //     let pag = {
        //       littleClassName: '所有授信事项',
        //       littleClassNo: e['bigClassNo'],
        //       sysCount: e['bigsysCount'],
        //       timeOutCount: e['bigtimeOutCount'],
        //       urgentCount: e['bigurgentCount'],
        //       systemCode: 'SXSX:授信事项;SXSX:授信事项',
        //       biaoji: '手工加全部',
        //     }
        //     e.childpage.unshift(pag)
        //     break;
        //   }
        // }
        if (datas) {
            var loandate = [];
            var loandate1_1 = null;
            if (datas && datas.length > 0) {
                loandate1_1 = {
                    bigClassName: '信贷系统',
                    bigsysCount: 0 * 1,
                    childpage: []
                };
                datas.forEach(function (e) {
                    if (e.index != 0) {
                        loandate1_1.bigsysCount = loandate1_1.bigsysCount * 1 + e.sysCount * 1;
                    }
                    loandate1_1.childpage.push({
                        littleClassName: e.littleClassName,
                        sysCount: e.sysCount,
                        scheduleTypeId: e.scheduleTypeId,
                        url: e.url,
                        orgtype: e.flag
                    });
                });
                loandate.push(loandate1_1);
            }
            approvelist = approvelist.concat(loandate);
        }
        console.log(approvelist);
        this.ulData = approvelist;
        var session = window.sessionStorage;
        if (session.getItem('workliuCode')) {
            var f = session.getItem('workliuCode');
            var d = f.split('&');
            if (!approvelist[d[0]]) {
                d[0] = '0';
                d[1] = '0';
            }
            else if (!approvelist[d[1]]) {
                d[1] = '0';
            }
            var a = d[0] + '&' + d[1];
            session.setItem('workliuCode', a);
            this.inNav = approvelist[d[0]].childpage[d[1]];
        }
        else {
            this.inNav = approvelist[0].childpage[0];
        }
        setTimeout(function () {
            _this.start();
            _this.maskLayer = false;
        }, 1500);
        this.disinNav = true;
    };
    ApprovePageComponent.prototype.navclick = function (item) {
        var _this = this;
        if (this.commfunc.getSessionDataCH('workliuCode')) {
            this.commfunc.clearSession('workliuCode');
            this.commfunc.clearSession('workliuData');
        }
        if (this.commfunc.getSessionDataCH('custdata')) {
            this.commfunc.clearSession('custdata');
        }
        for (var t = 0; t < this.ulData.length; t++) {
            for (var j = 0; j < this.ulData[t].childpage.length; j++) {
                if (this.ulData[t].childpage[j].littleClassNo == item.littleClassNo) {
                    var session = window.sessionStorage;
                    var a = t + '&' + j;
                    var b = JSON.stringify(item);
                    session.setItem('workliuCode', a);
                    session.setItem('workliuData', b);
                    break;
                }
            }
        }
        if (item.url && item.url != '') {
            if (this.commfunc.getSessionDataCH('workliuCode')) {
                this.commfunc.clearSession('workliuCode');
                this.commfunc.clearSession('workliuData');
            }
            //信贷工作任务处理
            var timestamp_1 = new Date().getTime();
            var target = "custLinkForm" + timestamp_1;
            //审批事项中的信贷
            var user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            var userId_1 = user.userId;
            var targetId = user.targetId;
            var params = {
                userId: this.userId,
                sysCode: '122',
                casServerLoginUrl: 'http://10.1.39.140:8011/searchPaymentTool',
                serverName: 'ywsn',
                validateType: '0',
                extraInfo: 'ywsn',
                encryptType: 'HS256',
            };
            this.customeHttpService.tokenApply(params).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var token = data.tokenCode;
                    var url = item.url + '&suid=' + userId_1 + '&token=' + token;
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_1, features, closeOnLoseFocus);
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
        this.inNav = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](item);
    };
    //码值
    ApprovePageComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ApprovePageComponent.prototype.start = function () {
        jquery__WEBPACK_IMPORTED_MODULE_7__(document).ready(function () {
            // if (this.disapprove) {
            var session = window.sessionStorage;
            if (session.getItem('bussinessWhere')) {
                jquery__WEBPACK_IMPORTED_MODULE_7__('.menu_list ul li').eq(0).children('.div1').show().children('.zcd').eq(0).addClass('removes');
            }
            else if (session.getItem('workliuCode')) {
                var f = session.getItem('workliuCode');
                var d = f.split('&');
                jquery__WEBPACK_IMPORTED_MODULE_7__('.menu_list ul li').eq(d[0]).children('.div1').show().children('.zcd').eq(d[1]).addClass('removes');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_7__('.menu_list ul li').eq(0).children('.div1').show().children('.zcd').eq(0).addClass('removes');
            }
            // }else{
            //   $('.menu_list ul li').eq(0).children('.div1').show();
            // }
            //绑定元素点击事件
            jquery__WEBPACK_IMPORTED_MODULE_7__(".menu_list ul li").click(function () {
                //判断对象是显示还是隐藏
                if (jquery__WEBPACK_IMPORTED_MODULE_7__(this).children(".div1").is(":hidden")) {
                    //表示隐藏
                    if (!jquery__WEBPACK_IMPORTED_MODULE_7__(this).children(".div1").is(":animated")) {
                        jquery__WEBPACK_IMPORTED_MODULE_7__(this).children(".xiala").css({ 'transform': 'rotate(180deg)' });
                        //如果当前没有进行动画，则添加新动画
                        jquery__WEBPACK_IMPORTED_MODULE_7__(this).children(".div1").animate({
                            height: 'show'
                        }, 200)
                            //siblings遍历div1的元素
                            .end().siblings().find(".div1").hide(200);
                        jquery__WEBPACK_IMPORTED_MODULE_7__(this).siblings().children(".xiala").css({ 'transform': 'rotate(360deg)' });
                        // $(this).children('.div1').children('.zcd').siblings().removeClass("removes");
                        // $(this).siblings().children('.div1').children('.zcd').removeClass("removes");
                        // $(this).children('.div1').children('.zcd').eq(0).addClass('removes');
                        // let aname = $(this).children('.div1').children('.zcd').eq(0)[0].title;
                        // console.log(aname, 'rrrrrrrr')
                    }
                }
                else {
                    //表示显示
                    if (!jquery__WEBPACK_IMPORTED_MODULE_7__(this).children(".div1").is(":animated")) {
                        jquery__WEBPACK_IMPORTED_MODULE_7__(this).children(".xiala").css({ 'transform': 'rotate(360deg)' });
                        jquery__WEBPACK_IMPORTED_MODULE_7__(this).children(".div1").animate({
                            height: 'hide'
                        }, 200)
                            .end().siblings().find(".div1").hide(200);
                    }
                }
            });
            //阻止事件冒泡，子元素不再继承父元素的点击事件
            jquery__WEBPACK_IMPORTED_MODULE_7__('.div1').click(function (e) {
                e.stopPropagation();
            });
            //点击子菜单为子菜单添加样式，并移除所有其他子菜单样式
            jquery__WEBPACK_IMPORTED_MODULE_7__(".menu_list ul li .div1 .zcd").click(function () {
                //设置当前菜单为选中状态的样式，并移除同类同级别的其他元素的样式
                jquery__WEBPACK_IMPORTED_MODULE_7__(this).addClass("removes").siblings().removeClass("removes");
                //遍历获取所有父菜单元素
                jquery__WEBPACK_IMPORTED_MODULE_7__(".div1").each(function () {
                    //判断当前的父菜单是否是隐藏状态
                    if (jquery__WEBPACK_IMPORTED_MODULE_7__(this).is(":hidden")) {
                        //如果是隐藏状态则移除其样式
                        jquery__WEBPACK_IMPORTED_MODULE_7__(this).children(".zcd").removeClass("removes");
                    }
                });
            });
        });
    };
    ApprovePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approve-page',
            template: __webpack_require__(/*! ./approve-page.component.html */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/approve-page/approve-page.component.html"),
            styles: [__webpack_require__(/*! ./approve-page.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/approve-page/approve-page.component.scss"), __webpack_require__(/*! ./../menu-tree-ul.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/menu-tree-ul.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__["CustomeHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__["CustomeHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]])
    ], ApprovePageComponent);
    return ApprovePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/approve-page/bean/approvePage.bean.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/approve-page/bean/approvePage.bean.ts ***!
  \************************************************************************************************************/
/*! exports provided: ApprovePageBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovePageBean", function() { return ApprovePageBean; });
var ApprovePageBean = /** @class */ (function () {
    function ApprovePageBean() {
    }
    return ApprovePageBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/bean/btnPage.bean.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/bean/btnPage.bean.ts ***!
  \*******************************************************************************************/
/*! exports provided: BtnPageBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnPageBean", function() { return BtnPageBean; });
var BtnPageBean = /** @class */ (function () {
    function BtnPageBean() {
    }
    return BtnPageBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/btn-page.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/btn-page.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g module\">\r\n  <!--\r\n  我的待办 1 审批事项 工作任务 客户联系 提醒事项 \r\n  已办事项 2 全部 我审批的 我发起的 信贷已办 办结 追回 \r\n  办结事项 3 全部 我审批的 我发起的 客户联系 信贷已办 办结 追回 \r\n  提醒历史 4 全部 已建计划 未建计划 \r\n  任务池   5 任务池 任务池历史 -->\r\n  <div class=\"ui-g-12 functions\" *ngIf=\"flag!='4'\">\r\n    <span class=\"whole\" *ngIf=\"permissionCheck('SID00000_P011_P212')&&flag=='1'||flag==null\">\r\n      <a class=\"change\" [ngClass]=\"{'active':show==1}\" (click)=\"cut(1)\">审批事项</a>\r\n      <span *ngIf=\"approve&&approve!=0\" class=\"weibiao\">{{approve}}</span>\r\n    </span>\r\n    <span class=\"whole\" *ngIf=\"permissionCheck('SID00000_P011_P213')&&flag=='1'||flag==null\">\r\n      <a class=\"change\" [ngClass]=\"{'active':show==2}\" (click)=\"cut(2)\">工作任务</a>\r\n      <span *ngIf=\"task&&task!=0\" class=\"weibiao\">{{task}}</span>\r\n    </span>\r\n\r\n    <span class=\"whole\" *ngIf=\"permissionCheck('SID00000_P011_P214')&&flag=='1'||flag==null\">\r\n      <a class=\"change\" [ngClass]=\"{'active':show==5}\" (click)=\"cut(5)\">提醒事项</a>\r\n      <!-- <span *ngIf=\"tiptol&&tiptol!=0\" class=\"weibiao\">{{tiptol}}</span> -->\r\n      <span *ngIf=\"tiptol&&tiptol!=0&&tiptol<100\" class=\"weibiao\">{{tiptol}}</span>\r\n      <span *ngIf=\"tiptol&&tiptol!=0&&tiptol>99\" class=\"weibiao\">99+</span>\r\n    </span>\r\n    <span class=\"whole\" *ngIf=\"permissionCheck('SID00000_P011_P211')&&flag=='1' || flag==null\">\r\n      <a class=\"change\" [ngClass]=\"{'active':show==6}\" (click)=\"cut(6)\">客户联系</a>\r\n      <span *ngIf=\"KHtol&&KHtol!=0\" class=\"weibiao\">{{KHtol}}</span>\r\n    </span>\r\n\r\n    <span class=\"whole\" *ngIf=\"permissionCheck('SID00000_P013_P003')&&flag=='5'\">\r\n      <a class=\"change\" [ngClass]=\"{'active':show==10}\" (click)=\"cut(10)\">任务池</a>\r\n    </span>\r\n    <span class=\"whole\" *ngIf=\"permissionCheck('SID00000_P013_P004')&&flag=='5'\">\r\n      <a class=\"change\" [ngClass]=\"{'active':show==11}\" (click)=\"cut(11)\">任务池历史</a>\r\n    </span>\r\n\r\n    <span class=\"whole\" *ngIf=\"permissionCheck('SID00000_P012_P216')&&(flag=='2' || flag=='3')\">\r\n      <a style='margin-left: 50px!important;' class=\"change loan\" (click)=\"haveDo(1)\">信贷已办事项</a>\r\n    </span>\r\n    <span class=\"whole\" *ngIf=\"permissionCheck('SID00000_P012_P217')&&(flag=='2' || flag=='3')\">\r\n      <a class=\"change loan\" (click)=\"haveDo(2)\">信贷办结事项</a>\r\n    </span>\r\n    <span class=\"whole\" *ngIf=\"permissionCheck('SID00000_P012_P215')&&(flag=='2' || flag=='3')\">\r\n      <a class=\"change loan\" (click)=\"haveDo(3)\">信贷追回事项</a>\r\n    </span>\r\n\r\n    <span class=\"whole\" *ngIf=\"permissionCheck('SID00000_P013_P001')&&flag=='5'\">\r\n      <a class=\"change loan\" (click)=\"haveDo(10)\">电销任务</a>\r\n    </span>\r\n\r\n    <!-- <span class=\"whole\" *ngIf=\"flag=='2'\">\r\n      <a class=\"change\" [ngClass]=\"{'active':show==4}\" (click)=\"cut(4)\" [routerLink]=\"['./one-approve-page']\">一期历史数据</a>\r\n    </span> -->\r\n\r\n    <span class='search' *ngIf=\"show!='5'\">\r\n      <div class=\"opt\">\r\n        <p-dropdown [options]=\"customerTypes\" [(ngModel)]=\"cusrtomerType\" (onChange)=\"change()\"></p-dropdown>\r\n      </div>\r\n      <div class=\"header-query-more header-quert-input\">\r\n        <input type=\"text\" placeholder=\"请输入搜索内容\" [(ngModel)]=\"customerInt\" (keydown)=\"customKeyDown($event)\">\r\n        <img src=\"../../../../../assets/layout/images/searchMore.png\" (click)=\"queryData()\">\r\n      </div>\r\n    </span>\r\n\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<!--提示消息-->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<p-dialog *ngIf=\"peopleDisplay\" [(visible)]=\"peopleDisplay\" width=\"800\" [responsive]=\"true\" modal='modal'>\r\n  <app-query-orguser-list (outValue)=\"choicesaleUser($event)\"></app-query-orguser-list>\r\n</p-dialog>\r\n\r\n<div class=\"foot\" *ngIf=\"disUrgentcont&&datalist\">\r\n  <p class=\"foot-title\">\r\n    <span style=\"flex:11;\">{{titlefig}}</span>\r\n    <span style=\"flex:1; text-align:center;cursor: pointer;\">\r\n      <span (click)=\"close()\" class=\"icon iconfont\">&#xe6aa;</span>\r\n    </span>\r\n  </p>\r\n  <div class=\"foot-cont\">\r\n    <p>\r\n      <span>事项类型：</span>\r\n      <span>{{datalist.littleClassName}}</span>\r\n    </p>\r\n    <p>\r\n      <span>客户号：</span>\r\n      <a style=\"cursor: pointer;\" (click)='custview()'>{{datalist.varMap.dataMap['custNo']}}</a>\r\n    </p>\r\n    <p>\r\n      <span>客户名称：</span>\r\n      <span>{{custname}}</span>\r\n    </p>\r\n    <p>\r\n      <span>上一处理人：</span>\r\n      <span>{{datalist.varMap.beforUserData['userName']}}</span>\r\n    </p>\r\n    <p>\r\n      <span>到达时间：</span>\r\n      <span>{{datalist.createDate}}</span>\r\n    </p>\r\n  </div>\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton label=\"是\" (click)=\"Yes(datalist)\"></button>\r\n    <button pButton label=\"否\" (click)=\"close()\"></button>\r\n  </div>\r\n</div>\r\n<div id='yinying' *ngIf=\"disUrgent\"></div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/btn-page.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/btn-page.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module {\n  margin-top: 8px; }\n  .module .functions > span {\n    position: relative; }\n  .module .functions {\n    width: calc(100% - 50px);\n    height: 50px;\n    border-bottom: 1px solid #ccc;\n    padding-left: 20px;\n    margin: 0 auto; }\n  .module .functions .whole {\n      line-height: 31px;\n      background: white;\n      padding-left: 0; }\n  .module .functions .whole .change {\n        line-height: 1.5em;\n        vertical-align: middle;\n        font-weight: bold;\n        padding: 0.5em 1em;\n        color: #424242;\n        cursor: pointer; }\n  .module .functions .whole .weibiao {\n        display: inline-block;\n        background: lightcoral;\n        color: white;\n        width: 30px;\n        height: 20px;\n        line-height: 20px;\n        border-radius: 10px;\n        text-align: center;\n        position: absolute;\n        right: 0;\n        top: -15px;\n        cursor: pointer; }\n  .module .functions .loan {\n      border: 1px solid #34cfe6;\n      margin-left: 20px;\n      line-height: 1em !important;\n      padding: 0.25em 1em !important; }\n  .module .functions .search {\n      width: 320px;\n      display: flex;\n      flex-direction: row;\n      float: right;\n      margin-top: 10px; }\n  .module .functions .search .opt {\n        width: 100px; }\n  .module .functions .search .header-query-more {\n        position: relative;\n        vertical-align: middle;\n        left: 30px; }\n  .module .functions .search .header-query-more.header-quert-input {\n          height: 22px;\n          line-height: 22px;\n          border-radius: 5px;\n          font-size: 15px;\n          border: 1px solid #d2d2d2; }\n  .module .functions .search .header-query-more.header-quert-input input {\n            height: 16px;\n            line-height: 16px;\n            font-size: 15px;\n            -webkit-appearance: button;\n            outline: none;\n            text-indent: 5px;\n            width: calc(100% - 20px);\n            width: -moz-calc(100% - 20px);\n            text-overflow: ellipsis;\n            border: none; }\n  .module .functions .search .header-query-more.header-quert-input input:focus {\n              border: none; }\n  .module .functions .search .header-query-more.header-quert-input img {\n            position: absolute;\n            right: 4px;\n            width: 14px;\n            height: 14px;\n            top: 4px; }\n  .active {\n  position: relative;\n  border: none !important;\n  color: #19b0c8 !important;\n  border-bottom-width: 0px;\n  padding: 1.2em 2em 1.2em 1.2em !important; }\n  .active:before {\n  content: '';\n  width: 50px;\n  height: 1px;\n  background: #19b0c8;\n  display: inline-block;\n  position: absolute;\n  bottom: -2px;\n  right: 36%; }\n  .foot {\n  position: fixed;\n  right: 50%;\n  bottom: 50%;\n  width: 400px;\n  height: 300px;\n  border-radius: 0px;\n  background: white;\n  transform: translate(50%, 50%);\n  z-index: 99999; }\n  .foot .btn {\n    text-align: center; }\n  .foot-title {\n  width: calc(100% - 25px);\n  background: #00738a;\n  color: white;\n  margin: 0 0;\n  padding: 5px 0 5px 25px;\n  display: flex;\n  flex-direction: row; }\n  .foot-cont {\n  width: calc(100% - 16px);\n  margin: 0 auto;\n  position: relative;\n  height: 200px; }\n  .foot-cont p {\n  margin: 15px 30px;\n  font-weight: bolder; }\n  #yinying {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background: #58575c;\n  z-index: 9999;\n  opacity: .8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXHJlbWluZGVyLWRvXFxiYWNrbG9nLWRldGFpbFxcYnRuLXBhZ2VcXGJ0bi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBO0VBRG5CO0lBR1Esa0JBQWtCLEVBQUE7RUFIMUI7SUFNUSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsY0FBYyxFQUFBO0VBVnRCO01BWVksaUJBQWlCO01BQ2pCLGlCQUFnQjtNQUNoQixlQUFlLEVBQUE7RUFkM0I7UUFnQmdCLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsZUFBZSxFQUFBO0VBckIvQjtRQXdCZ0IscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsUUFBTztRQUNQLFVBQVM7UUFDVCxlQUFlLEVBQUE7RUFuQy9CO01BdUNZLHlCQUF5QjtNQUN6QixpQkFBaUI7TUFDakIsMkJBQTJCO01BQzNCLDhCQUE4QixFQUFBO0VBMUMxQztNQTZDWSxZQUFZO01BQ1osYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osZ0JBQWdCLEVBQUE7RUFqRDVCO1FBbURnQixZQUFZLEVBQUE7RUFuRDVCO1FBc0RnQixrQkFBa0I7UUFDbEIsc0JBQXNCO1FBQ3RCLFVBQVMsRUFBQTtFQXhEekI7VUEwRG9CLFlBQVk7VUFDWixpQkFBaUI7VUFDakIsa0JBQWtCO1VBQ2xCLGVBQWU7VUFDZix5QkFBeUIsRUFBQTtFQTlEN0M7WUFnRXdCLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsZUFBZTtZQUNmLDBCQUEwQjtZQUMxQixhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLHdCQUF3QjtZQUV4Qiw2QkFBNkI7WUFDN0IsdUJBQXVCO1lBQ3ZCLFlBQVksRUFBQTtFQTFFcEM7Y0E0RTRCLFlBQVksRUFBQTtFQTVFeEM7WUFnRndCLGtCQUFrQjtZQUNsQixVQUFVO1lBQ1YsV0FBVztZQUNYLFlBQVk7WUFDWixRQUFRLEVBQUE7RUFRaEM7RUFDSSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIseUNBQXdDLEVBQUE7RUFFNUM7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVSxFQUFBO0VBRWQ7RUFDSSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGNBQWEsRUFBQTtFQVRqQjtJQVdRLGtCQUFrQixFQUFBO0VBRzFCO0VBQ0ksd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixhQUFZO0VBQ1osbUJBQW1CLEVBQUE7RUFFdkI7RUFDSSx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUNKLEVBQUE7RUFFQTtFQUNJLGlCQUFpQjtFQUNqQixtQkFDSixFQUFBO0VBQ0E7RUFDSSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFZO0VBQ1osV0FDSixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS9idG4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGUge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgLmZ1bmN0aW9ucz5zcGFue1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5mdW5jdGlvbnMge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIC53aG9sZXtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgLmNoYW5nZSB7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQyNDI0MjtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC53ZWliaWFve1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRjb3JhbDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICAgICAgICAgIHRvcDotMTVweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuICAgICAgICAubG9hbntcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM0Y2ZlNjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4yNWVtIDFlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIC5zZWFyY2h7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAub3B0e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkZXItcXVlcnktbW9yZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDozMHB4O1xyXG4gICAgICAgICAgICAgICAgJi5oZWFkZXItcXVlcnQtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogLW1vei1jYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzE5YjBjOCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4O1xyXG4gICAgcGFkZGluZzoxLjJlbSAyZW0gMS4yZW0gMS4yZW0gIWltcG9ydGFudDtcclxufVxyXG4uYWN0aXZlOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMnB4O1xyXG4gICAgcmlnaHQ6IDM2JTtcclxufVxyXG4uZm9vdHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICBib3R0b206IDUwJTtcclxuICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlICw1MCUpO1xyXG4gICAgei1pbmRleDo5OTk5OTtcclxuICAgIC5idG4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4uZm9vdC10aXRsZXtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDczOGE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDAgMDtcclxuICAgIHBhZGRpbmc6IDVweCAwIDVweCAyNXB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4uZm9vdC1jb250e1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6MjAwcHhcclxufVxyXG5cclxuLmZvb3QtY29udCBwe1xyXG4gICAgbWFyZ2luOiAxNXB4IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyXHJcbn1cclxuI3lpbnlpbmd7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzU4NTc1YztcclxuICAgIHotaW5kZXg6OTk5OTtcclxuICAgIG9wYWNpdHk6IC44XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/btn-page.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/btn-page.component.ts ***!
  \********************************************************************************************/
/*! exports provided: BtnPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnPageComponent", function() { return BtnPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BtnPageComponent = /** @class */ (function () {
    function BtnPageComponent(commfunc, route, router, httpService, activatedRouter, creditCcmService, httpService1) {
        this.commfunc = commfunc;
        this.route = route;
        this.router = router;
        this.httpService = httpService;
        this.activatedRouter = activatedRouter;
        this.creditCcmService = creditCcmService;
        this.httpService1 = httpService1;
        //提示信息
        this.stopFlag = true;
        this.msgs = [];
        this.show = 1;
        this.CREDIT = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_XIN"]; //台行
        this.CREDITTOWN = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_XIN_C"]; //村镇
        this.cusrtomerType = '00';
        this.customerTypes = [
            { label: '客户号', value: '00' },
            { label: '客户名称', value: '01' },
            { label: '群号', value: '02' },
            { label: '群名称', value: '03' },
            { label: '发起人', value: '04' },
        ];
        this.peopleDisplay = false;
        this.disUrgent = false;
        this.disUrgentcont = false;
    }
    BtnPageComponent.prototype.ngOnInit = function () {
        if (this.commfunc.getSessionDataCH('bussinessWhere')) {
            this.commfunc.clearSession('bussinessWhere');
        }
        this.flag = this.route.snapshot.queryParams.flag;
        if (this.flag == '1') {
            this.nodegroup(); //查询呆板数量
        }
        if (this.route.snapshot.queryParams.totalNum) {
            this.show = this.route.snapshot.queryParams.totalNum;
            if (this.route.snapshot.queryParams.totalNum == '10' || this.route.snapshot.queryParams.totalNum == '11') {
                var session_1 = window.sessionStorage;
                session_1.setItem('taskpooltype', 'false');
            }
            else {
                this.commfunc.clearSession('taskpooltype');
            }
        }
        var session = window.sessionStorage;
        if (session.getItem('custdata')) {
            // if (session.getItem('workliuData')) {
            // 	this.liusystemCode = JSON.parse(session.getItem('workliuData')).systemCode;
            // 	console.log(this.liusystemCode, '判断是否为SXSX事项')
            // }
            var custdata = JSON.parse(session.getItem('custdata'));
            if (custdata.custdata) {
                console.log(custdata.custdata, '判断客户号');
                var customerInt = custdata.custdata;
                this.custname = custdata.custname;
                this.liusystemCode = custdata.bigClassNo;
                this.bussinessWhereA = '(query_Indexa=' + "'" + customerInt + "'" + ' or ' + 'query_Indexb=' + "'" + customerInt + "'" + ' or '
                    + 'query_Indexc=' + "'" + customerInt + "'" + ' or ' + 'query_Indexd=' + "'" + customerInt + "'" + ')';
                this.queryUndoTaskList();
            }
        }
    };
    BtnPageComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    // 查询待办列表
    BtnPageComponent.prototype.queryUndoTaskList = function (k) {
        var _this = this;
        this.datalist = null;
        if (!this.liusystemCode) {
            return;
        }
        // let arr = this.liusystemCode.split(';');
        // let a = arr[0].split(':');
        // let b = arr[1].split(':');
        // if (a[0] != 'SXSX') { return; }
        if (this.liusystemCode != 'SXSX') {
            return;
        }
        var pram = {
            userId: JSON.parse(this.commfunc.getSessionData('commonHeader')).userId,
            itemType: this.liusystemCode,
            // itemType: a[0],
            // itemNode: b[0],
            taskPoolFlag: '3',
            bussinessWhere: this.bussinessWhereA,
        };
        console.log(pram);
        this.httpService.bpmQueryUnDoTaskList(pram).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.tableListA = data.pageData.result;
                console.log(_this.tableListA.length, '判断客户号下是否为多任务');
                if (_this.tableListA.length > 0) {
                    var taskIdlist = '';
                    for (var p = 0; p < _this.tableListA.length; p++) {
                        var ele = _this.tableListA[p];
                        taskIdlist += ele.taskId + ',';
                    }
                    taskIdlist = (taskIdlist.substring(taskIdlist.length - 1) == ',') ? taskIdlist.substring(0, taskIdlist.length - 1) : taskIdlist;
                    var session = window.sessionStorage;
                    var custdata = JSON.parse(session.getItem('custdata'));
                    console.log(taskIdlist, '判断客户号下为多任务taskId');
                    console.log(custdata.taskId, '判断任务taskId');
                    console.log(taskIdlist.indexOf(custdata.taskId), '判断客户号下为多任务taskId的索引');
                    if (taskIdlist.indexOf(custdata.taskId) == -1) {
                        _this.disUrgent = true;
                        _this.disUrgentcont = true;
                        _this.tableListA[0].createDate = _this.tableListA[0].createDate.slice(0, 16);
                        _this.datalist = _this.tableListA[0];
                        _this.titlefig = '是否继续处理' + _this.custname + '的其他事项';
                    }
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    BtnPageComponent.prototype.Yes = function (data) {
        var _this = this;
        if (data.viewFlag == '0' && data.workState == '0') {
            // 告诉工作流该实例被查看
            var parm = {
                taskId: data.taskId,
                userId: JSON.parse(this.commfunc.getSessionData('commonHeader')).userId
            };
            this.httpService.bpmViewTaskInfo(parm).subscribe(function (data) { });
        }
        if (this.commfunc.getSessionDataCH('custdata')) {
            this.commfunc.clearSession('custdata');
            var custdata = {
                custdata: data.varMap.dataMap['custNo'],
                taskId: data.taskId,
                custname: data.varMap.dataMap['custName'],
                bigClassNo: data.bigClassNo
            };
            this.commfunc.setSessionDataCH('custdata', JSON.stringify(custdata));
        }
        this.commfunc.setSessionData('task', data.taskType);
        if (this.activatedRouter.snapshot.queryParams['flag'] == '2') {
            data['markFlag'] = '2';
        }
        else {
            data['markFlag'] = '1';
        }
        if (!(data.varMap.taskCategoryId.indexOf('RUM0005') < 0) || !(data.varMap.taskCategoryId.indexOf('RUM0009') < 0) || !(data.varMap.taskCategoryId.indexOf('RUM_0020') < 0) || !(data.varMap.taskCategoryId.indexOf('RUM_0026') < 0) || (!(data.varMap.taskCategoryId.indexOf('RUM0004') < 0)
            && !(data.littleClassNo.indexOf("RUM_0025") < 0))) {
            var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            var post_name = JSON.parse(this.commfunc.getSessionDataCH('postIdList'));
            var products_1 = '';
            if (data.varMap.dataMap.productNo) {
                products_1 = data.varMap.dataMap.productNo;
            }
            else {
                products_1 = data.varMap.dataMap.productId;
            }
            var params = {};
            if (data.varMap.taskCategoryId == "RUM_0020" || data.varMap.taskCategoryId == "RUM_0026") {
                params = {
                    businessType: "17",
                    'roleId': post_name,
                    'viewIndex': 1,
                    'viewSize': 100,
                };
            }
            else if (data.littleClassNo == "RUM_0025" && data.varMap.taskCategoryId == "RUM0004") {
                params = {
                    businessType: "18",
                    'roleId': post_name,
                    'viewIndex': 1,
                    'viewSize': 100,
                };
            }
            else {
                params = {
                    'productNo': products_1,
                    'roleId': post_name,
                    'viewIndex': 1,
                    'viewSize': 100,
                };
            }
            var flag_1 = '';
            if (this.activatedRouter.snapshot.queryParams['flag'] == '2') {
                flag_1 = '2';
            }
            else {
                flag_1 = '';
            }
            this.creditCcmService.queryViewRelations(params).subscribe(function (datas) {
                if (datas.returnCode.code === 'success') {
                    if (datas.list.length > 0) {
                        var param_1, pageParams = void 0, littleClassNo = void 0;
                        if (!(data.varMap.taskCategoryId.indexOf('RUM0009') < 0)) {
                            var viewId_1 = [];
                            datas.list.forEach(function (e) {
                                if (e.viewName.match('卡要素')) {
                                    viewId_1.push({ a: e.viewConfigId, b: e.viewName });
                                }
                            });
                            _this.commfunc.setSessionDataCH('viewId', JSON.stringify(viewId_1));
                            for (var i = 0; i < datas.list.length; i++) {
                                if (datas.list[i].viewName.match('卡要素')) {
                                    _this.stopFlag = false;
                                    param_1 = {
                                        'viewConfigId': datas.list[i]['viewConfigId'],
                                        'viewName': datas.list[i]['viewName'],
                                        'flag': true //审批标识
                                    };
                                    pageParams = {
                                        'viewConfigId': datas.list[i]['viewConfigId'],
                                        'viewName': datas.list[i]['viewName'],
                                        'custNo': data.varMap.dataMap.custNo,
                                        'custName': data.varMap.dataMap.custName,
                                        'custRequestNo': data.varMap.custRequestNo,
                                        'productNo': products_1,
                                        'productName': data.varMap.dataMap.productName,
                                        'isView': '',
                                        'businessType': data.varMap.dataMap.businessType,
                                        'processId': data.processId,
                                        'taskId': data.taskId,
                                        'workCreater': data.workCreater,
                                        'guaranteeType': data.varMap.dataMap.guaranteeType,
                                        'applyAmt': data.varMap.dataMap.applyAmt,
                                        'varMap': data.varMap,
                                        'taskRate': data.taskRate,
                                        'custRequestId': data.varMap.custRequestId,
                                        'endDate': data.varMap.dataMap.endDate,
                                        'taskType': data.taskType,
                                        'stageType': data.varMap.stageType,
                                        'taskName': data.taskName,
                                        'assActorId': data.varMap.dataMap['assActorId'],
                                        'requestSeqNo': data.varMap.requestSeqNo,
                                        'flag': flag_1
                                    };
                                    break;
                                }
                            }
                        }
                        else {
                            var viewId_2 = [];
                            datas.list.forEach(function (e) {
                                if (!e.viewName.match('卡要素')) {
                                    viewId_2.push({ a: e.viewConfigId, b: e.viewName });
                                }
                            });
                            _this.commfunc.setSessionDataCH('viewId', JSON.stringify(viewId_2));
                            for (var i = 0; i < datas.list.length; i++) {
                                var str = '卡要素';
                                if (datas.list[i].viewName.indexOf(str) == -1) {
                                    _this.stopFlag = false;
                                    param_1 = {
                                        'viewConfigId': datas.list[i]['viewConfigId'],
                                        'viewName': datas.list[i]['viewName'],
                                    };
                                    pageParams = {
                                        'viewConfigId': datas.list[i]['viewConfigId'],
                                        'viewName': datas.list[i]['viewName'],
                                        'custNo': data.varMap.dataMap.custNo,
                                        'custName': data.varMap.dataMap.custName,
                                        'custRequestNo': data.varMap.custRequestNo,
                                        'productNo': products_1,
                                        'productName': data.varMap.dataMap.productName,
                                        'isView': '',
                                        'businessType': data.varMap.dataMap.businessType,
                                        'processId': data.processId,
                                        'taskId': data.taskId,
                                        'workCreater': data.workCreater,
                                        'guaranteeType': data.varMap.dataMap.guaranteeType,
                                        'applyAmt': data.varMap.dataMap.applyAmt,
                                        'varMap': data.varMap,
                                        'taskRate': data.taskRate,
                                        'custRequestId': data.varMap.custRequestId,
                                        'endDate': data.varMap.dataMap.endDate,
                                        'stageType': data.varMap.stageType,
                                        'taskName': data.taskName,
                                        'taskType': data.taskType,
                                        'assActorId': data.varMap.dataMap['assActorId'],
                                        'requestSeqNo': data.varMap.requestSeqNo,
                                        'flag': flag_1,
                                        'mainFlowNo': data.mainFlowNo,
                                        'taskCode': data.taskCode,
                                        'workType': data.workType,
                                        'ckhs': 'Y',
                                        'workUsrService': data.workUsrService,
                                    };
                                    break;
                                }
                            }
                        }
                        if (_this.commfunc.getSessionDataCH('queryCreditQuestions')) {
                            _this.commfunc.clearSession('queryCreditQuestions'); //清除共同借款人
                        }
                        if (_this.commfunc.getSessionDataCH('queryFacProcessQuestions')) {
                            _this.commfunc.clearSession('queryFacProcessQuestions'); //清除担保人
                        }
                        if (_this.stopFlag) {
                            _this.msgs = [{ severity: 'info', summary: '错误', detail: '产品和岗位未关联页面,请配置关联页面' }];
                        }
                        littleClassNo = data.littleClassNo;
                        var commonHeader_1 = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        commonHeader_1['extParam']['littleClassNo'] = littleClassNo;
                        _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
                        var worktype = { worktype: data.workType };
                        if (flag_1 == '2') {
                            param_1['ckhs'] = 'Y';
                        }
                        // 批量预授信转授信需要判断是否展示是否预授信字段
                        if (data.varMap.taskCategoryId == 'RUM0005' && data.varMap.taskType == '17') {
                            param_1['isPreApproval'] = '1';
                        }
                        if (_this.commfunc.getSessionDataCH('creditDataWorkFlow')) {
                            _this.commfunc.clearSession('creditDataWorkFlow');
                        }
                        _this.commfunc.setSessionDataCH('creditDataWorkFlow', JSON.stringify(pageParams));
                        _this.commfunc.setSessionDataCH('workType', JSON.stringify(worktype));
                        // RUM_0020 RUM_0026批量预授信
                        if (data.varMap.taskCategoryId == "RUM_0026") {
                            // 获取批量预授信客户群信息
                            var batchDetail = new Promise(function (resolve) {
                                _this.queryBatchDetail(data.varMap.dataMap, resolve);
                            });
                            var batchGroup = new Promise(function (resolve) {
                                _this.queryGroupInfo(data.varMap.dataMap, resolve);
                            });
                            Promise.all([batchDetail, batchGroup]).then(function (res) {
                                var datas = {
                                    detailData: res[0]["detailDtas"],
                                    groupData: res[1]["groupDtas"],
                                    self: '2',
                                    selfTwo: '1'
                                };
                                param_1['batchIsNo'] = 'Y';
                                _this.commfunc.setSessionDataCH('groupBranchData', JSON.stringify(datas));
                                _this.router.navigate(['/pages/tzb/custom/credit-ccm/viewPage', JSON.stringify({ businessType: "17", notApply: '2' })]);
                            });
                        }
                        else {
                            _this.router.navigate(['/pages/tzb/custom/credit-ccm/viewPage', JSON.stringify(param_1)]);
                        }
                    }
                    else {
                        _this.msgs = [{ severity: 'info', summary: '错误', detail: '产品和岗位未关联页面,请配置关联页面' }];
                    }
                }
                else {
                    _this.msgs = [{ severity: 'error', summary: '错误', detail: datas.returnCode.message }];
                }
            });
        }
        else if (!(data.varMap.systemIdCode.indexOf('RUM0011') < 0) && data.workUsrService.indexOf('?') == -1) {
            // 参数
            var paramVarMap = {
                createDate: data.createDate,
                processId: data.processId,
                taskId: data.taskId,
                bigClassName: data.bigClassName,
                littleClassName: data.littleClassName,
                workCreateName: data.workCreaterName,
                processCode: data.processCode,
                markFlag: data.markFlag,
                scheduleType: 'choose',
                dataMap: JSON.stringify(data.varMap.dataMap),
                taskName: data.taskName,
                taskRate: data.taskRate,
                littleClassNo: data.littleClassNo,
                mainFlowNo: data.mainFlowNo,
                workType: data.workType,
            };
            this.commfunc.setSessionDataCH('overdue-params-from-reminder-do', JSON.stringify(paramVarMap));
            var littleClassNo = data.littleClassNo;
            var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            commonHeader['extParam']['littleClassNo'] = littleClassNo;
            commonHeader['globalSeqNo'] = data.mainFlowNo;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
            // let post_name = JSON.parse(this.commfunc.getSessionDataCH('postIdList'));
            // let post_name = JSON.parse(this.commfunc.getSessionDataCH('postIdList'));
            var post_name = [commonHeader['extParam']['postId']]; //逾期只传当前岗位ID
            var params = {
                businessType: "08",
                'roleId': post_name,
                'viewIndex': 1,
                'viewSize': 100,
            };
            this.creditCcmService.queryViewRelations(params).subscribe(function (datas) {
                if (datas.returnCode.code === 'success') {
                    if (datas.list.length > 0) {
                        var viewId_3 = [];
                        datas.list.forEach(function (e) {
                            // if (e.viewName.match('卡要素')) {
                            viewId_3.push({ a: e.viewConfigId, b: e.viewName });
                            // }
                        });
                        _this.commfunc.setSessionDataCH('viewId', JSON.stringify(viewId_3));
                        _this.router.navigate(["/pages/tzb/custom/overdue/overdue-case", {
                                from: 'reminder-do',
                                taskId: data.taskId,
                                processId: data.processId,
                            }]);
                    }
                    else {
                        _this.msgs = [{ severity: 'info', summary: '错误', detail: '产品和岗位未关联页面,请配置关联页面' }];
                    }
                }
                else {
                    _this.msgs = [{ severity: 'error', summary: '错误', detail: datas.returnCode.message }];
                }
            });
        }
        else {
            this.commfunc.toDisposeSchedule(data);
        }
    };
    BtnPageComponent.prototype.close = function () {
        this.disUrgent = false;
        this.disUrgentcont = false;
        if (this.commfunc.getSessionDataCH('custdata')) {
            this.commfunc.clearSession('custdata');
        }
    };
    BtnPageComponent.prototype.change = function () {
        this.cusrtomerType == null;
        if (this.cusrtomerType == '04') {
            this.peopleDisplay = true;
        }
    };
    // 人员
    BtnPageComponent.prototype.choicesaleUser = function (e) {
        this.customerInt = null;
        this.customerInt = e[0].tellerName;
        this.peopleDisplay = false;
        this.startid = e[0].tellerId;
    };
    BtnPageComponent.prototype.custview = function () {
        this.commfunc.setSessionData('custNo', this.datalist.varMap.dataMap['custNo']);
        window.open('#/pages/custom-view/general', '_blank');
    };
    //输入回车调用方法
    BtnPageComponent.prototype.customKeyDown = function (key) {
        if (window.event['keyCode'] == 13) {
            this.queryData();
        }
    };
    BtnPageComponent.prototype.queryData = function () {
        if (this.commfunc.getSessionDataCH('bussinessWhere')) {
            this.commfunc.clearSession('bussinessWhere');
        }
        var bussinessWhere = null;
        if (this.cusrtomerType == '00') {
            bussinessWhere = '(query_Indexa=' + "'" + this.customerInt + "'" + ' or ' + 'query_Indexb=' + "'" + this.customerInt + "'" + ' or '
                + 'query_Indexc=' + "'" + this.customerInt + "'" + ' or ' + 'query_Indexd=' + "'" + this.customerInt + "'" + ')';
        }
        else if (this.cusrtomerType == '01') {
            bussinessWhere = '(query_Indexa like ' + "'" + this.customerInt + "%'" + ' or ' + 'query_Indexb like ' + "'" + this.customerInt + "%'" + ' or '
                + 'query_Indexc like ' + "'" + this.customerInt + "%'" + ' or ' + 'query_Indexd like ' + "'" + this.customerInt + "%'" + ')';
        }
        else if (this.cusrtomerType == '02') {
            bussinessWhere = '(query_Indexa=' + "'" + this.customerInt + "'" + ' or ' + 'query_Indexb=' + "'" + this.customerInt + "'" + ' or '
                + 'query_Indexc=' + "'" + this.customerInt + "'" + ' or ' + 'query_Indexd=' + "'" + this.customerInt + "'" + ')';
        }
        else if (this.cusrtomerType == '03') {
            bussinessWhere = '(query_Indexa like ' + "'" + this.customerInt + "%'" + ' or ' + 'query_Indexb like ' + "'" + this.customerInt + "%'" + ' or '
                + 'query_Indexc like ' + "'" + this.customerInt + "%'" + ' or ' + 'query_Indexd like ' + "'" + this.customerInt + "%'" + ')';
        }
        else if (this.cusrtomerType == '04') {
            bussinessWhere = 'startUserId=' + this.startid;
        }
        if (bussinessWhere && this.customerInt) {
            var session = window.sessionStorage;
            session.setItem('bussinessWhere', bussinessWhere);
            var url = window.location.href;
            var c = void 0;
            if (url.indexOf('?') != -1) {
                var a = url.split('?');
                var h = a[0];
                if (h.indexOf('-search-search') != -1) {
                    var k = h.split('');
                    var j = k.length - 7;
                    var g = h.slice(0, j);
                    c = g + '?';
                }
                else {
                    c = h + '-search?';
                }
                var Url = c + a[1];
                var arr = Url.split('#');
                this.router.navigateByUrl(arr[1]);
            }
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入查询内容' });
        }
    };
    BtnPageComponent.prototype.nodegroup = function () {
        this.node();
        this.cust();
        this.tip();
    };
    BtnPageComponent.prototype.node = function () {
        var _this = this;
        var pram = {
            itemType: 'KHLX',
            itemNode: '0308_01',
            itemCtrl: '1',
            taskPoolFlag: '3',
            userId: JSON.parse(this.commfunc.getSessionData('commonHeader')).userId
        };
        this.httpService.bpmQueryUnDoNodeTypeCountGroup(pram).subscribe(function (data) {
            data.pageData.result.forEach(function (el) {
                if (el.nodeType == 'approve') {
                    if (el.sysCount < 100) {
                        _this.approve = el.sysCount;
                    }
                    else {
                        _this.approve = '99+';
                    }
                }
                else if (el.nodeType == 'task') {
                    if (el.sysCount < 100) {
                        _this.task = el.sysCount;
                    }
                    else {
                        _this.task = '99+';
                    }
                }
            });
        });
    };
    BtnPageComponent.prototype.cust = function () {
        var _this = this;
        var param = {
            nodeType: "1",
            itemType: 'KHLX',
            itemNode: '0308_01',
            itemCtrl: '0',
            userId: JSON.parse(this.commfunc.getSessionData('commonHeader')).userId,
        };
        this.httpService.bpmQueryUnDoTaskList(param).subscribe(function (data) {
            if (data.pageData.totalRows < 100) {
                _this.KHtol = data.pageData.totalRows;
            }
            else {
                _this.KHtol = '99+';
            }
        });
    };
    BtnPageComponent.prototype.tip = function () {
        var _this = this;
        this.tiptol = 0;
        var param = {};
        var ob = this.httpService.queryCopReminderTaskSum(param);
        ob.subscribe(function (data) {
            data.resultList.forEach(function (el) {
                _this.tiptol = _this.tiptol + el['countNum'];
            });
        });
    };
    BtnPageComponent.prototype.cut = function (num) {
        if (this.commfunc.getSessionDataCH('workliuCode')) {
            this.commfunc.clearSession('workliuCode');
            this.commfunc.clearSession('workliuData');
        }
        // 我的待办1 已办事项2 办结事项3 提醒历史4 任务池5
        // 审批事项1 工作任务2 全部7 我审批的3 我发起的4 提醒事项5 客户联系6 已建计划8 未建计划9 任务池10 任务池历史11
        if (this.flag == '1' || this.flag == null) {
            if (num == 1) {
                this.router.navigate(['/pages/tzb/custom/reminder-do/backlog-detail/btn-page/approve-page'], { queryParams: { flag: '1', totalNum: num } });
            }
            if (num == 2) {
                this.router.navigate(['/pages/tzb/custom/reminder-do/backlog-detail/btn-page2/workdesk-page'], { queryParams: { flag: '1', totalNum: num } });
            }
            if (num == 5) {
                this.router.navigate(['/pages/tzb/custom/reminder-do/backlog-detail/btn-page3/tip-page'], { queryParams: { flag: '1', totalNum: num } });
            }
            if (num == 6) {
                this.router.navigate(['/pages/tzb/custom/reminder-do/backlog-detail/btn-page4/coustomer-contact'], { queryParams: { flag: '1', totalNum: num } });
            }
        }
        else if (this.flag == '4') {
            if (num == '8') {
                this.router.navigate(['/pages/tzb/custom/reminder-do/backlog-detail/btn-page2/tip-page'], { queryParams: { flag: this.flag, totalNum: num } });
            }
            if (num == '9') {
                this.router.navigate(['/pages/tzb/custom/reminder-do/backlog-detail/btn-page3/tip-page'], { queryParams: { flag: this.flag, totalNum: num } });
            }
        }
        else if (this.flag == '5') {
            if (num == '10') {
                this.router.navigate(['/pages/tzb/custom/reminder-do/backlog-detail/btn-page4/task-pool'], { queryParams: { flag: this.flag, totalNum: num } });
            }
            if (num == '11') {
                this.router.navigate(['/pages/tzb/custom/reminder-do/backlog-detail/btn-page3/task-pool'], { queryParams: { flag: this.flag, totalNum: num } });
            }
        }
    };
    //按钮权限
    BtnPageComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    //查询详细信息
    BtnPageComponent.prototype.queryBatchDetail = function (item, resolve) {
        var _this = this;
        var params = {
            batchId: item.batchId
        };
        this.httpService1.queryBatchPreCreditInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var datas = {
                    batchId: data.batchId,
                    operType: data.operType,
                    state: data.state,
                    groupId: data.groupId,
                    groupName: data.groupName,
                    productId: data.productId,
                    productName: data.productName,
                    guaranteeType: data.guaranteeType,
                    contractType: data.contractType,
                    endDate: data.endDate,
                    rateKind: data.rateKind,
                    returnKind: data.returnKind,
                    note: data.note,
                    operId: data.operId,
                    operName: data.operName,
                    bankId: data.bankId,
                    bankName: data.bankName,
                    acDate: data.acDate,
                    Permissioncontrol: data.permissionControler
                };
                resolve({
                    detailDtas: datas
                });
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    // 客户群信息查询queryCustGroupInfo
    BtnPageComponent.prototype.queryGroupInfo = function (item, resolve) {
        var _this = this;
        var params = {
            "permissionFlag": "1",
            "advanceInput": "0",
            "groupType": "0",
            "pageNum": 1,
            "pageSize": 10,
            "conditionList": [
                [
                    {
                        "field": "group_id",
                        "operator": "=",
                        "value": item.groupId
                    }
                ]
            ],
        };
        this.httpService1.queryCustGroupInfo(params).subscribe(function (result) {
            if (result.returnCode.code == 'success') {
                var data = result.resultList[0] || {};
                var datas = {
                    cust_num: data.open_num || null,
                    valid_cust_num: data.valid_cust_num || null,
                    valid_cov_rate: data.valid_ratio || null,
                    crdt_cust_num: data.CRDT_CUST_NUM || null,
                    pre_crdt_amt: data.pre_credit_limit || null,
                    // crdt_cust_num:data.cust_num || null,//已授信客户数
                    crdt_amt: data.CRDT_AMT || null,
                    crdt_bal: data.CRDT_BAL || null,
                    loan_cust_num: data.LOAN_CUST_NUM || null,
                    // crdt_amt:data.cust_num || null,//已用信额度总和
                    CRDT_AMT_USED: data.CRDT_AMT_USED,
                    GROUP_ID: data.group_id || null,
                    GROUP_NAME: data.group_name || null,
                    GROUP_TYPE: data.group_type || null,
                    GROUP_OWNER_NAME: data.group_owner || null,
                    GROUP_OWNER_ID: data.group_owner_id || null,
                    GROUP_LINKMANNAME: data.group_of_contacts || null,
                    GROUP_LINKMANID: data.group_of_contacts_id || null,
                    ORG_NAME: data.org_id || null,
                    ADDRESS: data.address_message || null,
                    PRODUCT_CODE: data.featured_products || null,
                    INT: data.INT || null,
                    ORG_ID: data.ORG_ID || null,
                    subGroupType: data.subGroupType || null //所属区域
                };
                resolve({
                    groupDtas: datas
                });
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: result.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    BtnPageComponent.prototype.haveDo = function (num) {
        var _this = this;
        if (num == 10) {
            this.router.navigateByUrl('/pages/tzb/custom/teleMarketing/telemarketing-list');
        }
        //已办
        if (num == 1) {
            var timestamp_1 = new Date().getTime();
            var target = "custLinkForm" + timestamp_1;
            // this.commfunc.createBlank(target);
            var use = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            this.userId = use.userId;
            var pra = {
                userId: this.userId,
                sysCode: '122',
                casServerLoginUrl: 'http://10.1.39.140:8011/searchPaymentTool',
                serverName: 'ywsn',
                validateType: '0',
                extraInfo: 'ywsn',
                encryptType: 'HS256',
            };
            this.httpService.tokenApply(pra).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var use_1 = JSON.parse(_this.commfunc.getSessionData('commonHeader')).userId;
                    var tokens = data.tokenCode;
                    var targetId = JSON.parse(_this.commfunc.getSessionData('commonHeader')).targetId;
                    //台行
                    if (targetId == '101010') {
                        var url = _this.CREDIT + 'plats/FrontController?&token=' + tokens + '&suid=' + use_1 + '&urlParam=/plats/FrontController?commandType=9931|SYS_PROC_STATS=ps_already|moduleCode=5C0D554AEFD6766A04AF876AD2AF503F|moduleProc=00000|isProcModule=yes|main_moduleCode=5C0D554AEFD6766A04AF876AD2AF503F';
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_1, features, closeOnLoseFocus);
                        //村镇
                    }
                    else if (targetId == '101011') {
                        var url = _this.CREDITTOWN + 'plats/FrontController?&token=' + tokens + '&suid=' + use_1 + '&urlParam=/plats/FrontController?commandType=9931|SYS_PROC_STATS=ps_already|moduleCode=5C0D554AEFD6766A04AF876AD2AF503F|moduleProc=00000|isProcModule=yes|main_moduleCode=5C0D554AEFD6766A04AF876AD2AF503F';
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_1, features, closeOnLoseFocus);
                    }
                }
            });
        }
        //办结
        if (num == 2) {
            var timestamp_2 = new Date().getTime();
            var target = "custLinkForm" + timestamp_2;
            // this.commfunc.createBlank(target);
            var use = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            this.userId = use.userId;
            var pra = {
                userId: this.userId,
                sysCode: '122',
                casServerLoginUrl: 'http://10.1.39.140:8011/searchPaymentTool',
                serverName: 'ywsn',
                validateType: '0',
                extraInfo: 'ywsn',
                encryptType: 'HS256',
            };
            this.httpService.tokenApply(pra).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var use_2 = JSON.parse(_this.commfunc.getSessionData('commonHeader')).userId;
                    var tokens = data.tokenCode;
                    var targetId = JSON.parse(_this.commfunc.getSessionData('commonHeader')).targetId;
                    //台行
                    if (targetId == '101010') {
                        var url = _this.CREDIT + 'plats/FrontController?&token=' + tokens + '&suid=' + use_2 + '&urlParam=/plats/FrontController?commandType=9931|SYS_PROC_STATS=ps_finished|moduleCode=C91EBE5F6A74E9DB4ED79A52A9C0BF5C|moduleProc=00000|isProcModule=yes|main_moduleCode=C91EBE5F6A74E9DB4ED79A52A9C0BF5C';
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_2, features, closeOnLoseFocus);
                    }
                    else if (targetId == '101011') { //村镇
                        var url = _this.CREDITTOWN + 'plats/FrontController?&token=' + tokens + '&suid=' + use_2 + '&urlParam=/plats/FrontController?commandType=9931|SYS_PROC_STATS=ps_finished|moduleCode=C91EBE5F6A74E9DB4ED79A52A9C0BF5C|moduleProc=00000|isProcModule=yes|main_moduleCode=C91EBE5F6A74E9DB4ED79A52A9C0BF5C';
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_2, features, closeOnLoseFocus);
                    }
                }
            });
        }
        //追回
        if (num == 3) {
            var timestamp_3 = new Date().getTime();
            var target = "custLinkForm" + timestamp_3;
            // this.commfunc.createBlank(target);
            var use = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            this.userId = use.userId;
            var pra = {
                userId: this.userId,
                sysCode: '122',
                casServerLoginUrl: 'http://10.1.39.140:8011/searchPaymentTool',
                serverName: 'ywsn',
                validateType: '0',
                extraInfo: 'ywsn',
                encryptType: 'HS256',
            };
            this.httpService.tokenApply(pra).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var use_3 = JSON.parse(_this.commfunc.getSessionData('commonHeader')).userId;
                    var tokens = data.tokenCode;
                    var targetId = JSON.parse(_this.commfunc.getSessionData('commonHeader')).targetId;
                    //台行
                    if (targetId == '101010') {
                        var url = _this.CREDIT + 'plats/FrontController?&token=' + tokens + '&suid=' + use_3 + '&urlParam=/plats/FrontController?commandType=9931|SYS_PROC_STATS=ps_back|moduleCode=PROC_BACK|moduleTable=|moduleName=|moduleProc=0000|ActionCode=procview|ActionType=|isProcModule=yes|main_moduleCode=PROC_BACK|main_moduleTable=|main_moduleName=|getResXType=|XMethodType=|getShowXType=';
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_3, features, closeOnLoseFocus);
                    }
                    else if (targetId == '101011') { //村镇
                        var url = _this.CREDITTOWN + 'plats/FrontController?&token=' + tokens + '&suid=' + use_3 + '&urlParam=/plats/FrontController?commandType=9931|SYS_PROC_STATS=ps_back|moduleCode=PROC_BACK|moduleTable=|moduleName=|moduleProc=0000|ActionCode=procview|ActionType=|isProcModule=yes|main_moduleCode=PROC_BACK|main_moduleTable=|main_moduleName=|getResXType=|XMethodType=|getShowXType=';
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_3, features, closeOnLoseFocus);
                    }
                }
            });
        }
    };
    BtnPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-btn-page',
            template: __webpack_require__(/*! ./btn-page.component.html */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/btn-page.component.html"),
            styles: [__webpack_require__(/*! ./btn-page.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/btn-page.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_5__["CreditCcmService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__["CustomeHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_5__["CreditCcmService"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__["CusOperationHttpService"]])
    ], BtnPageComponent);
    return BtnPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/btn-page.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/btn-page.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: BtnPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnPageModule", function() { return BtnPageModule; });
/* harmony import */ var _sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _btn_page_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./btn-page.routing */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/btn-page.routing.ts");
/* harmony import */ var _btn_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./btn-page.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/btn-page.component.ts");
/* harmony import */ var _approve_page_approve_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./approve-page/approve-page.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/approve-page/approve-page.component.ts");
/* harmony import */ var _workdesk_page_workdesk_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workdesk-page/workdesk-page.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/workdesk-page/workdesk-page.component.ts");
/* harmony import */ var _tip_page_tip_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tip-page/tip-page.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/tip-page/tip-page.component.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _oneHistory_one_approved_items_one_approved_items_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./oneHistory/one-approved-items/one-approved-items.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approved-items/one-approved-items.component.ts");
/* harmony import */ var _oneHistory_one_approve_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./oneHistory/one-approve-page.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approve-page.component.ts");
/* harmony import */ var app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_task_pool_task_pool_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool.component.ts");
/* harmony import */ var app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_handling_matters_handling_matters_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters.component.ts");
/* harmony import */ var app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_handling_matters_handling_matters_items_handling_matters_items_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters-items/handling-matters-items.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters-items/handling-matters-items.component.ts");
/* harmony import */ var app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_customer_contact_coustomer_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/coustomer-contact.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/coustomer-contact.component.ts");
/* harmony import */ var app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_task_pool_task_pool_items_task_pool_items_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool-items/task-pool-items.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool-items/task-pool-items.component.ts");
/* harmony import */ var _uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../@uisftech/tzb/udatatable/datatable */ "./src/app/@uisftech/tzb/udatatable/datatable.ts");
/* harmony import */ var _uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../@uisftech/tzb/upaginator/upaginator.module */ "./src/app/@uisftech/tzb/upaginator/upaginator.module.ts");
/* harmony import */ var app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_work_none_work_none_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none.component.ts");
/* harmony import */ var app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_work_none_work_none_items_work_none_items_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none-items/work-none-items.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none-items/work-none-items.component.ts");
/* harmony import */ var _customer_contact_customer_contact_detail_customer_contact_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./customer-contact/customer-contact-detail/customer-contact-detail.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/customer-contact-detail/customer-contact-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var BtnPageModule = /** @class */ (function () {
    function BtnPageModule() {
    }
    BtnPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_9__["FrameworkModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _btn_page_routing__WEBPACK_IMPORTED_MODULE_4__["BtnPageRouting"],
                _uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_17__["UDataTableModule"],
                _uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_18__["UPaginatorModule"],
            ],
            declarations: [
                _btn_page_component__WEBPACK_IMPORTED_MODULE_5__["BtnPageComponent"],
                _approve_page_approve_page_component__WEBPACK_IMPORTED_MODULE_6__["ApprovePageComponent"],
                _workdesk_page_workdesk_page_component__WEBPACK_IMPORTED_MODULE_7__["WorkdeskPageComponent"],
                _tip_page_tip_page_component__WEBPACK_IMPORTED_MODULE_8__["TipPageComponent"],
                _oneHistory_one_approved_items_one_approved_items_component__WEBPACK_IMPORTED_MODULE_10__["OneApprovedItemsComponent"],
                _oneHistory_one_approve_page_component__WEBPACK_IMPORTED_MODULE_11__["OneApprovePageComponent"],
                app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_task_pool_task_pool_component__WEBPACK_IMPORTED_MODULE_12__["TaskPoolComponent"],
                app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_handling_matters_handling_matters_component__WEBPACK_IMPORTED_MODULE_13__["HandlingMattersComponent"],
                app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_handling_matters_handling_matters_items_handling_matters_items_component__WEBPACK_IMPORTED_MODULE_14__["HandlingMmattersItemsComponent"],
                app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_customer_contact_coustomer_contact_component__WEBPACK_IMPORTED_MODULE_15__["CoustomerContactComponent"],
                app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_task_pool_task_pool_items_task_pool_items_component__WEBPACK_IMPORTED_MODULE_16__["TaskPoolItemsComponent"],
                app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_work_none_work_none_items_work_none_items_component__WEBPACK_IMPORTED_MODULE_20__["WorkNoneItemsComponent"],
                app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_work_none_work_none_component__WEBPACK_IMPORTED_MODULE_19__["WorkNoneComponent"],
                _customer_contact_customer_contact_detail_customer_contact_detail_component__WEBPACK_IMPORTED_MODULE_21__["CustomerContactDetailComponent"]
            ],
            exports: [
                _approve_page_approve_page_component__WEBPACK_IMPORTED_MODULE_6__["ApprovePageComponent"],
                app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_work_none_work_none_component__WEBPACK_IMPORTED_MODULE_19__["WorkNoneComponent"],
                app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_handling_matters_handling_matters_component__WEBPACK_IMPORTED_MODULE_13__["HandlingMattersComponent"],
                _tip_page_tip_page_component__WEBPACK_IMPORTED_MODULE_8__["TipPageComponent"],
                app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_customer_contact_coustomer_contact_component__WEBPACK_IMPORTED_MODULE_15__["CoustomerContactComponent"],
                app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_handling_matters_handling_matters_items_handling_matters_items_component__WEBPACK_IMPORTED_MODULE_14__["HandlingMmattersItemsComponent"]
            ],
            providers: []
        })
    ], BtnPageModule);
    return BtnPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/btn-page.routing.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/btn-page.routing.ts ***!
  \******************************************************************************************/
/*! exports provided: BtnPageRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnPageRouting", function() { return BtnPageRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _btn_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn-page.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/btn-page.component.ts");
/* harmony import */ var _approve_page_approve_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./approve-page/approve-page.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/approve-page/approve-page.component.ts");
/* harmony import */ var _workdesk_page_workdesk_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workdesk-page/workdesk-page.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/workdesk-page/workdesk-page.component.ts");
/* harmony import */ var _tip_page_tip_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tip-page/tip-page.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/tip-page/tip-page.component.ts");
/* harmony import */ var _tip_page_reminders_reminders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tip-page/reminders/reminders.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/tip-page/reminders/reminders.component.ts");
/* harmony import */ var _workdesk_page_worktask_worktask_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workdesk-page/worktask/worktask.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/workdesk-page/worktask/worktask.component.ts");
/* harmony import */ var _approve_page_approved_items_approved_items_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./approve-page/approved-items/approved-items.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/approve-page/approved-items/approved-items.component.ts");
/* harmony import */ var _oneHistory_one_approve_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./oneHistory/one-approve-page.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approve-page.component.ts");
/* harmony import */ var _oneHistory_one_approved_items_one_approved_items_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./oneHistory/one-approved-items/one-approved-items.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approved-items/one-approved-items.component.ts");
/* harmony import */ var app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_task_pool_task_pool_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool.component.ts");
/* harmony import */ var app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_task_pool_task_pool_items_task_pool_items_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool-items/task-pool-items.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool-items/task-pool-items.component.ts");
/* harmony import */ var app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_handling_matters_handling_matters_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters.component.ts");
/* harmony import */ var app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_customer_contact_coustomer_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/coustomer-contact.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/coustomer-contact.component.ts");
/* harmony import */ var app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_work_none_work_none_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none.component */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none.component.ts");















//页面
var routes = [
    {
        path: '',
        component: _btn_page_component__WEBPACK_IMPORTED_MODULE_1__["BtnPageComponent"],
        children: [
            { path: '', redirectTo: 'approve-page', pathMatch: 'full' },
            { path: 'approve-page', component: _approve_page_approve_page_component__WEBPACK_IMPORTED_MODULE_2__["ApprovePageComponent"] },
            { path: 'workdesk-page', component: _workdesk_page_workdesk_page_component__WEBPACK_IMPORTED_MODULE_3__["WorkdeskPageComponent"] },
            { path: 'tip-page', component: _tip_page_tip_page_component__WEBPACK_IMPORTED_MODULE_4__["TipPageComponent"] },
            { path: 'reminders', component: _tip_page_reminders_reminders_component__WEBPACK_IMPORTED_MODULE_5__["RemindersComponent"] },
            { path: 'worktask', component: _workdesk_page_worktask_worktask_component__WEBPACK_IMPORTED_MODULE_6__["WorktaskComponent"] },
            { path: 'approved-items', component: _approve_page_approved_items_approved_items_component__WEBPACK_IMPORTED_MODULE_7__["ApprovedItemsComponent"] },
            { path: 'one-approved-items', component: _oneHistory_one_approved_items_one_approved_items_component__WEBPACK_IMPORTED_MODULE_9__["OneApprovedItemsComponent"] },
            { path: 'one-approve-page', component: _oneHistory_one_approve_page_component__WEBPACK_IMPORTED_MODULE_8__["OneApprovePageComponent"] },
            { path: 'task-pool', component: app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_task_pool_task_pool_component__WEBPACK_IMPORTED_MODULE_10__["TaskPoolComponent"] },
            { path: 'task-pool-items', component: app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_task_pool_task_pool_items_task_pool_items_component__WEBPACK_IMPORTED_MODULE_11__["TaskPoolItemsComponent"] },
            { path: 'handling-matters', component: app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_handling_matters_handling_matters_component__WEBPACK_IMPORTED_MODULE_12__["HandlingMattersComponent"] },
            // { path: 'handling-matters-items', component: HandlingMmattersItemsComponent },
            { path: 'coustomer-contact', component: app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_customer_contact_coustomer_contact_component__WEBPACK_IMPORTED_MODULE_13__["CoustomerContactComponent"] },
            { path: 'work-none', component: app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_work_none_work_none_component__WEBPACK_IMPORTED_MODULE_14__["WorkNoneComponent"] },
            { path: 'approve-page-search', component: _approve_page_approve_page_component__WEBPACK_IMPORTED_MODULE_2__["ApprovePageComponent"] },
            { path: 'approve-page-search-search', component: _approve_page_approve_page_component__WEBPACK_IMPORTED_MODULE_2__["ApprovePageComponent"] },
            { path: 'workdesk-page-search', component: _workdesk_page_workdesk_page_component__WEBPACK_IMPORTED_MODULE_3__["WorkdeskPageComponent"] },
            { path: 'workdesk-page-search-search', component: _workdesk_page_workdesk_page_component__WEBPACK_IMPORTED_MODULE_3__["WorkdeskPageComponent"] },
            { path: 'tip-page-search-search', component: _tip_page_tip_page_component__WEBPACK_IMPORTED_MODULE_4__["TipPageComponent"] },
            { path: 'tip-page-search', component: _tip_page_tip_page_component__WEBPACK_IMPORTED_MODULE_4__["TipPageComponent"] },
            { path: 'coustomer-contact-search-search', component: app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_customer_contact_coustomer_contact_component__WEBPACK_IMPORTED_MODULE_13__["CoustomerContactComponent"] },
            { path: 'coustomer-contact-search', component: app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_customer_contact_coustomer_contact_component__WEBPACK_IMPORTED_MODULE_13__["CoustomerContactComponent"] },
            { path: 'work-none-search-search', component: app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_work_none_work_none_component__WEBPACK_IMPORTED_MODULE_14__["WorkNoneComponent"] },
            { path: 'work-none-search', component: app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_work_none_work_none_component__WEBPACK_IMPORTED_MODULE_14__["WorkNoneComponent"] },
            { path: 'handling-matters-search-search', component: app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_handling_matters_handling_matters_component__WEBPACK_IMPORTED_MODULE_12__["HandlingMattersComponent"] },
            { path: 'handling-matters-search', component: app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_handling_matters_handling_matters_component__WEBPACK_IMPORTED_MODULE_12__["HandlingMattersComponent"] },
            { path: 'task-pool-search-search', component: app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_task_pool_task_pool_component__WEBPACK_IMPORTED_MODULE_10__["TaskPoolComponent"] },
            { path: 'task-pool-search', component: app_pages_tzb_custom_reminder_do_backlog_detail_btn_page_task_pool_task_pool_component__WEBPACK_IMPORTED_MODULE_10__["TaskPoolComponent"] },
        ]
    }
];
var BtnPageRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/coustomer-contact.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/coustomer-contact.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-4\" *ngFor=\"let item of queryList\" style=\"text-align:right\">\r\n      <label>{{item.label}}:</label>\r\n      <p-dropdown *ngIf=\"item.label == '联系主题'\" [options]=\"linkageTheme\" [(ngModel)]=\"item.value\" [name]=\"item.key\" placeholder=\"请选择\"\r\n        class=\"summarycontactPropdowna\"></p-dropdown>\r\n      <!-- <p-dropdown *ngIf=\"item.label == '客户号'\" [options]=\"contactInformation\" [(ngModel)]=\"item.value\" [name]=\"item.key\" \r\n          placeholder=\"请选择\" class=\"summarycontactPropdowna\" ></p-dropdown> -->\r\n      <p-dropdown *ngIf=\"item.label == '计划来源'\" [options]=\"tourcesPlanning\" [(ngModel)]=\"item.value\" [name]=\"item.key\" placeholder=\"请选择\"\r\n        class=\"summarycontactPropdowna\"></p-dropdown>\r\n      <input class=\"summarycontactPropdown\" type=\"text\" *ngIf=\"item.label == '客户号'\" [(ngModel)]=\"item.value\" [name]=\"item.key\">\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n      <button pButton label=\"查询\" (click)=\"queryTask()\"></button>\r\n      <button pButton label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 table\">\r\n      <u-dataTable [value]=\"list\" [style]=\"{'text-align':'center'}\" [emptyMessage]='tabMesg' scrollable=\"true\">\r\n        <p-column field=\"Index\" header=\"序号\" [style]=\"{width:'100px'}\">\r\n          <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            {{ ri+1 }}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column [style]=\"{'width':'30px'}\">\r\n          <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <span class='imgOrFont'>\r\n              <!-- <span *ngIf=\"car.priority=='1'\" class=\"icon iconfont img_display tzbicon-point\" style=\"color:red;\"></span>            -->\r\n            <span title=\"紧急\" *ngIf=\"car.priority=='1'\" style=\"color:red;cursor: pointer; font-weight: bolder;margin-left:-10px;font-size:13px!important;\">急</span>\r\n            <!-- <span title=\"追回\" *ngIf=\"item.workType=='5'\" style=\"color:darkgreen;cursor: pointer; font-weight: bolder;margin-left:-10px;font-size:13px!important;\">追</span>\r\n            <span title=\"被退回\" *ngIf=\"item.workType=='4' || item.workType=='7'\" style=\"color:chocolate;cursor: pointer; font-weight: bolder;margin-left:-10px;font-size:13px!important;\">退</span> -->\r\n            </span>\r\n          </ng-template>\r\n        </p-column>\r\n        <!-- by zhangjun  客户号排序 -->\r\n        <p-column>\r\n          <ng-template pTemplate=\"header\">\r\n            <span style='cursor: pointer;'>客户号</span>\r\n            <span style='cursor: pointer;color:chocolate;' (click)=\"sorttable('cust')\" *ngIf='sortdis1' class=\"icon iconfont\">&#xe61c;</span>\r\n            <span style='cursor: pointer;color:chocolate;' (click)=\"sorttable('cust',1)\" *ngIf='!sortdis1&&asc' class=\"icon iconfont\">&#xe8fb;</span>\r\n            <span style='cursor: pointer;color:chocolate;' (click)=\"sorttable('cust',2)\" *ngIf='!sortdis1&&desc' class=\"icon iconfont\">&#xe629;</span>\r\n          </ng-template>\r\n          <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <a style=\"cursor: pointer;\" (click)='tocust(car)'>{{car.obCustomercode}}</a>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"客户名称\" field=\"obName\"></p-column>\r\n        <p-column header=\"联系方式\" field=\"marketingContactWay\">\r\n          <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n            <span>{{item.marketingContactWay | codeValuePie:contactInformation}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"联系主题\" field=\"marketingContactTheme\" [style]=\"{'width':'100px','overflow': 'hidden','text-overflow': 'ellipsis','white-space': 'nowrap'}\">\r\n          <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n            <!-- <span>{{item.marketingContactTheme | codeValuePie:linkageTheme}}</span> -->\r\n            <span title=\"{{item.marketingContactTheme | codeValuePie:linkageTheme:','}}\">{{item.marketingContactTheme | codeValuePie:linkageTheme:','}}</span>\r\n\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"contactSource\" header=\"计划来源\">\r\n          <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n            <span>{{item.contactSource | codeValuePie:tourcesPlanning}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"计划联系时间\" field=\"fromDate\"></p-column>\r\n        <p-column>\r\n          <ng-template pTemplate=\"header\">\r\n            <span style='cursor: pointer;'>创建日期</span>\r\n            <span style='cursor: pointer;color:chocolate;' (click)=\"sorttable('time')\" *ngIf='sortdis3' class=\"icon iconfont\">&#xe61c;</span>\r\n            <span style='cursor: pointer;color:chocolate;' (click)=\"sorttable('time',1)\" *ngIf='!sortdis3&&asc' class=\"icon iconfont\">&#xe8fb;</span>\r\n            <span style='cursor: pointer;color:chocolate;' (click)=\"sorttable('time',2)\" *ngIf='!sortdis3&&desc' class=\"icon iconfont\">&#xe629;</span>\r\n          </ng-template>\r\n          <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n            <span>{{item.createDate}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <!-- by zhangjun  创建时间排序 -->\r\n        <p-column header=\"备注\" field=\"remark1\"></p-column>\r\n        <p-column header=\"处理状态\">\r\n          <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n            <!-- <span style=\"color:red!important;\" *ngIf=\"item.isTimeout!='0'\">超时&nbsp;&nbsp;</span> -->\r\n            <span *ngIf=\"item.viewFlag=='1'\">已查看</span>\r\n            <span *ngIf=\"item.viewFlag=='0'\">未查看</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"操作\" field=\"\">\r\n          <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n            <!-- <span (click)='details(item)' class=\"tabelDealIco\">详情</span> -->\r\n            <span (click)='toDisposeSchedule(item)' class=\"tabelDealIco\">处理</span>\r\n          </ng-template>\r\n        </p-column>\r\n      </u-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <u-paginator first={{first}} rows=\"{{pageRows}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n        (onPageChange)=\"paginate($event)\"></u-paginator>\r\n    </div>\r\n  </div>\r\n  <!--提示消息-->\r\n  <p-growl [(value)]=\"msgs\"></p-growl>\r\n  <!-- 模态框 -->\r\n  <p-dialog [(visible)]=\"display\" [positionTop]=\"50\" width=\"500\" modal=\"true\">\r\n    <p-header>详情</p-header>\r\n    <customer-contact-detail [inValue]=\"inValueDetaile\" (outValue)=\"detailsReturn($event)\"></customer-contact-detail>\r\n  </p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/coustomer-contact.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/coustomer-contact.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .ui-g-12 .ui-g-6 {\n  display: flex; }\n  .module .ui-g-12 .ui-g-6 label {\n    display: block;\n    width: 30%;\n    text-align: right;\n    padding: 0 20px; }\n  .module .ui-g-12 .ui-g-6 .input-name {\n    width: 100% !important; }\n  .module .ui-g-12 .ui-g-6 .items-name {\n    width: 100% !important; }\n  .module .btn {\n  text-align: center; }\n  .imgOrFont .img_no_display {\n  display: none; }\n  .imgOrFont:hover .img_no_display {\n  display: inline-block;\n  color: #0094D2;\n  cursor: pointer;\n  font-weight: bold;\n  padding: 0px !important; }\n  .imgOrFont:hover .img_display {\n  display: none; }\n  :host /deep/ .summarycontactPropdowna .ui-dropdown {\n  width: 50% !important;\n  min-width: 276px !important;\n  text-align: center; }\n  .summarycontactPropdown {\n  width: 50% !important;\n  min-width: 270px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS9jdXN0b21lci1jb250YWN0L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxccmVtaW5kZXItZG9cXGJhY2tsb2ctZGV0YWlsXFxidG4tcGFnZVxcY3VzdG9tZXItY29udGFjdFxcY291c3RvbWVyLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHVyxhQUFhLEVBQUE7RUFIeEI7SUFLZSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7RUFSOUI7SUFXZ0Isc0JBQXNCLEVBQUE7RUFYdEM7SUFjZSxzQkFBc0IsRUFBQTtFQWRyQztFQW1CUSxrQkFBa0IsRUFBQTtFQUcxQjtFQUVRLGFBQWEsRUFBQTtFQUZyQjtFQU1ZLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUIsRUFBQTtFQVZuQztFQWFZLGFBQWEsRUFBQTtFQUl6QjtFQUNJLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUE7RUFFdEI7RUFDSSxxQkFBcUI7RUFDckIsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL3JlbWluZGVyLWRvL2JhY2tsb2ctZGV0YWlsL2J0bi1wYWdlL2N1c3RvbWVyLWNvbnRhY3QvY291c3RvbWVyLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kdWxle1xyXG4gICAgLnVpLWctMTIge1xyXG4gICAgICAgIC51aS1nLTYge1xyXG4gICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlucHV0LW5hbWV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLml0ZW1zLW5hbWV7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbi5pbWdPckZvbnQge1xyXG4gICAgLmltZ19ub19kaXNwbGF5IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmltZ19ub19kaXNwbGF5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwOTREMjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWdfZGlzcGxheSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjpob3N0IC9kZWVwLyAuc3VtbWFyeWNvbnRhY3RQcm9wZG93bmEgLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMjc2cHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3VtbWFyeWNvbnRhY3RQcm9wZG93bntcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMjcwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/coustomer-contact.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/coustomer-contact.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: CoustomerContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoustomerContactComponent", function() { return CoustomerContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var _custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../custom-contact-new/custom-constant/custom-code-value */ "./src/app/pages/tzb/custom/custom-contact-new/custom-constant/custom-code-value.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //事项类型的接口





/**
 * 提醒事项
 */
var CoustomerContactComponent = /** @class */ (function () {
    function CoustomerContactComponent(router, cusOperationHttpService, customeHttpService, activatedRouter, commfunc, routeInfo) {
        this.router = router;
        this.cusOperationHttpService = cusOperationHttpService;
        this.customeHttpService = customeHttpService;
        this.activatedRouter = activatedRouter;
        this.commfunc = commfunc;
        this.routeInfo = routeInfo;
        this.first = 1;
        //表格中无数据时显示的内容
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        this.littleEvent = [];
        this.itemsSmallType = [];
        this.list = []; //接收后台数据
        //提示信息
        this.msgs = [];
        this.pageRows = 10;
        this.userId = '';
        this.display = false;
        this.queryList = [
            {
                label: '客户号',
                key: 'query_indexc',
                value: ''
            }, {
                label: '联系主题',
                key: 'query_indexb',
                value: ''
            }, {
                label: '计划来源',
                key: 'query_indexd',
                value: ''
            },
        ];
        this.contactInformation = _custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_6__["ContactInformation"]; //联系方式
        this.processingStarts = _custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_6__["TaskStatusQueryTwo"]; //处理状态
        this.linkageTheme = _custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_6__["LinkageTheme"]; // 联系主题
        this.tourcesPlanning = _custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_6__["TourcesPlanning"]; // 计划来源
        this.sortdis1 = true;
        this.sortdis2 = true;
        this.sortdis3 = true;
        this.asc = false;
        this.desc = false;
        this.peopleDisplay = false;
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.littleEvent = this.code['ScheduleType'];
    }
    CoustomerContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.queryParams.subscribe(function (params) {
            console.log(params);
            _this.flag = params.flag;
        });
        //客户联系处理成功提示
        this.detailList = this.routeInfo.snapshot.params;
        console.log(this.detailList);
        // if (this.detailList && this.detailList.code) {
        //   this.msgs = [];
        //   this.msgs.push({ severity: 'success', summary: '提示', detail: "处理成功" });
        // }
        this.queryTask();
    };
    CoustomerContactComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    //点击处理按钮
    CoustomerContactComponent.prototype.toDisposeSchedule = function (item) {
        var _this = this;
        // 告诉工作流该实例被查看
        var parm = {
            taskId: item.taskId,
            userId: JSON.parse(this.commfunc.getSessionData('commonHeader')).userId
        };
        var params = {
            isFront: 0,
            communicationEventId: item.communicationEventId
        };
        this.cusOperationHttpService.updateContactWorkEffortStatus(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.customeHttpService.bpmViewTaskInfo(parm).subscribe(function (data) { });
                _this.router.navigate(['/pages/tzb/custom/custom-contact-new/custom-contact-list-handle', { varMap: JSON.stringify({ dataMap: item }), flag: 1 }]);
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
    //码值
    CoustomerContactComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    // 详情按钮
    CoustomerContactComponent.prototype.details = function (item) {
        this.display = true;
        this.inValueDetaile = item;
    };
    //客户联系
    CoustomerContactComponent.prototype.queryTask = function () {
        var _this = this;
        var par = '';
        for (var _i = 0, _a = this.queryList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.key && item.value) {
                if (!par) {
                    par = item.key + "=" + ("'" + item.value + "'");
                }
                else {
                    par = par + (" and " + item.key + "=" + ("'" + item.value + "'"));
                }
            }
        }
        var session = window.sessionStorage;
        if (session.getItem('bussinessWhere')) {
            this.bussinessWhereDATA = session.getItem('bussinessWhere');
            var a = this.bussinessWhereDATA + ' and ' + par;
            if (par != '') {
                this.bussinessWhere = a;
            }
            else {
                this.bussinessWhere = this.bussinessWhereDATA;
            }
        }
        else {
            this.bussinessWhere = par;
        }
        var queryOrder; // by zj
        if (this.queryOrder) {
            queryOrder = this.queryOrder;
        }
        var param = {
            // systemCode: "0308:客户联系;0308_01:客户联系_工作任务",
            nodeType: "1",
            pageRows: this.pageRows,
            curPage: this.curPage,
            itemType: 'KHLX',
            itemNode: '0308_01',
            itemCtrl: '0',
            userId: JSON.parse(this.commfunc.getSessionData('commonHeader')).userId,
            bussinessWhere: this.bussinessWhere,
            queryOrder: queryOrder,
        };
        this.customeHttpService.bpmQueryUnDoTaskList(param).subscribe(function (data) {
            _this.total = data.pageData.totalRows;
            _this.list = [];
            data.pageData.result.forEach(function (element) {
                element.varMap.dataMap['taskId'] = element.taskId; // by zj 添加taskid
                element.varMap.dataMap['createDate'] = element.createDate.slice(0, 16); // by zj
                element.varMap.dataMap['fromDate'] = element.varMap.dataMap['fromDate'].slice(0, 16); // by zjl
                element.varMap.dataMap['viewFlag'] = element.viewFlag; // by zjl  添加处理状态
                // element.varMap.dataMap['isTimeout'] = element.isTimeout;// by zjl  添加超时时间
                _this.list.push(element.varMap.dataMap);
            });
            console.log(_this.list);
        });
    };
    //跳转客户视图
    CoustomerContactComponent.prototype.tocust = function (car) {
        this.commfunc.setSessionData('custNo', car.obCustomercode); //客户号的取值 by zj
        window.open('#/pages/custom-view/general', '_blank');
    };
    // 分页
    CoustomerContactComponent.prototype.paginate = function (event) {
        this.pageRows = event.rows * 1;
        var currentPage = event.page + 1;
        this.curPage = currentPage;
        this.first = (currentPage - 1) * this.pageRows;
        this.queryTask();
    };
    CoustomerContactComponent.prototype.querySecle = function () {
    };
    // 升降序
    CoustomerContactComponent.prototype.sorttable = function (typ, key) {
        if (key && key == '1') { //升
            this.asc = false;
            this.desc = true;
            this.sortfuntion(typ, '1');
        }
        else if (key && key == '2') { //降
            this.asc = true;
            this.desc = false;
            this.sortfuntion(typ, '2');
        }
        else {
            if (typ == 'cust') {
                this.sortdis1 = false;
                this.sortdis2 = true;
                this.sortdis3 = true;
            }
            else if (typ == 'amt') {
                this.sortdis1 = true;
                this.sortdis2 = false;
                this.sortdis3 = true;
            }
            else if (typ == 'time') {
                this.sortdis1 = true;
                this.sortdis2 = true;
                this.sortdis3 = false;
            }
            this.asc = true; //默认升序
            this.sorttable(typ, '1');
        }
    };
    CoustomerContactComponent.prototype.sortfuntion = function (typ, key) {
        if (typ == 'time') {
            if (key == '1') {
                this.queryOrder = 'create_date asc'; //从小到大
            }
            if (key == '2') {
                this.queryOrder = 'create_date desc'; //从大到小
            }
            this.queryTask();
        }
        else if (typ == 'cust') {
            if (key == '1') {
                this.queryOrder = 'query_Indexc asc'; //从小到大
            }
            if (key == '2') {
                this.queryOrder = 'query_Indexc desc'; //从大到小
            }
            this.queryTask();
        }
    };
    CoustomerContactComponent.prototype.reset = function () {
        this.queryList = [
            {
                label: '客户号',
                key: 'query_indexc',
                value: ''
            }, {
                label: '联系主题',
                key: 'query_indexb',
                value: ''
            }, {
                label: '计划来源',
                key: 'query_indexd',
                value: ''
            },
        ];
        this.pageRows = 10;
        this.pageNum = 1;
        this.first = 0;
        this.queryTask();
    };
    CoustomerContactComponent.prototype.detailsReturn = function (event) {
        this.display = event.display;
    };
    // 分配
    CoustomerContactComponent.prototype.tatchClick = function () {
        this.peopleDisplay = true;
    };
    CoustomerContactComponent.prototype.choicesaleUser = function (evet) {
    };
    CoustomerContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'coustomer-contact',
            template: __webpack_require__(/*! ./coustomer-contact.component.html */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/coustomer-contact.component.html"),
            styles: [__webpack_require__(/*! ./coustomer-contact.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/coustomer-contact.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_5__["CustomeHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_5__["CustomeHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CoustomerContactComponent);
    return CoustomerContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/customer-contact-detail/customer-contact-detail.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/customer-contact-detail/customer-contact-detail.component.html ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1>客户清单详情</h1> -->\r\n<div class=\"details\">\r\n    <div class=\"body-top\">\r\n        <div class=\"body-top-input\">\r\n            <div class=\"input-text\">\r\n                <span class=\"text-name\">客户号:</span>\r\n                <a style=\"cursor: pointer;\" (click)='tocust()'>{{communicationEventBean.custId}}</a>\r\n                <!-- <input type=\"text\" pInputText disabled [(ngModel)]=\"communicationEventBean.custId\" class=\"summarycontactPropdowna\"> -->\r\n            </div>\r\n        </div>\r\n        <div class=\"body-top-input\">\r\n            <div class=\"input-text\">\r\n                <span class=\"text-name\">客户名称:</span>\r\n                <input type=\"text\" pInputText disabled [(ngModel)]=\"communicationEventBean.custName\" class=\"summarycontactPropdowna\">\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"body-top-input\">\r\n            <div class=\"input-text\">\r\n                <span class=\"text-name\">计划来源:</span>\r\n                <p-dropdown [options]=\"customerSource\" placeholder=\" \" disabled [(ngModel)]=\"communicationEventBean.contactSource\" class=\"summarycontactPropdowna\" ></p-dropdown>\r\n            </div>\r\n        </div> -->\r\n        <div class=\"body-top-input\">\r\n            <div class=\"input-text\">\r\n                <span class=\"text-name\">联系方式:</span>\r\n                <p-dropdown [options]=\"contactInformation\" placeholder=\" \" disabled [(ngModel)]=\"communicationEventBean.marketingContactWay\"\r\n                    class=\"summarycontactPropdowna\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"body-top-input-bottom\">\r\n            <div class=\"input-text\">\r\n                <span class=\"text-name\">联系主题:</span>\r\n                <span>{{communicationEventBean.marketingContactTheme | codeValuePie:linkageTheme : ','}}</span>\r\n                <!-- <input type=\"text\" pInputText disabled [(ngModel)]=\"communicationEventBean.marketingContactTheme | codeValuePie:linkageTheme : ','\" class=\"summarycontactPropdowna\"> -->\r\n                <!-- <p-multiSelect [maxSelectedLabels]=\"100\" defaultLabel='请选择' [options]=\"linkageTheme\" [(ngModel)]=\"communicationEventBean.marketingContactTheme\" ></p-multiSelect> -->\r\n            </div>\r\n        </div>\r\n        <div class=\"body-top-input-bottom\">\r\n            <div class=\"input-text\">\r\n                <label class=\"text-name\">计划联系时间:</label>\r\n                <input type=\"text\" pInputText disabled [(ngModel)]=\"communicationEventBean.fromDate\" class=\"summarycontactPropdowna\">\r\n            </div>\r\n        </div>\r\n        <div class=\"body-top-input\">\r\n            <div class=\"input-text\">\r\n                <span class=\"text-name\">上次联系时间</span>\r\n                <input type=\"text\" pInputText disabled [(ngModel)]=\"communicationEventBean.lastTimeContact\" class=\"summarycontactPropdowna\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"remarks\">\r\n        <span class=\"remarks-text\">备注:</span>\r\n        <textarea class=\"remarks-textarea\" disabled [(ngModel)]=\"communicationEventBean.remark\" name=\"\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\r\n    </div>\r\n    <div class=\"priority\">\r\n        <span class=\"priority-text\">优先级:</span>\r\n        <p-dropdown [options]=\"triority\" disabled placeholder=\" \" [(ngModel)]=\"communicationEventBean.priority\" class=\"summarycontactPropdowna\"></p-dropdown>\r\n    </div>\r\n    <div class=\"modify-botton\">\r\n        <button pButton label=\"返回\" class=\"button_reset\" (click)=\"reset()\"></button>\r\n    </div>\r\n</div>\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/customer-contact-detail/customer-contact-detail.component.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/customer-contact-detail/customer-contact-detail.component.scss ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details {\n  width: 98%;\n  height: 392px;\n  background-color: #fff; }\n  .details .body-top {\n    width: 100%;\n    height: 147px;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap; }\n  .details .body-top .body-top-input {\n      height: 50px;\n      align-items: center;\n      width: 50%; }\n  .details .body-top .body-top-input .input-text {\n        margin-top: 15px;\n        margin-left: 20px;\n        display: flex; }\n  .details .body-top .body-top-input .input-text .text-name {\n          width: 107px;\n          display: block;\n          text-align: right;\n          margin-right: 6px; }\n  .details .body-top .body-top-input .input-text .summarycontactPropdowna {\n          width: 37% !important;\n          min-width: 276px !important; }\n  .details .body-top .body-top-input-bottom {\n      height: 54px;\n      align-items: center;\n      width: 50%; }\n  .details .body-top .body-top-input-bottom .input-text {\n        margin-top: 15px;\n        margin-left: 20px;\n        display: flex; }\n  .details .body-top .body-top-input-bottom .input-text .text-name {\n          width: 107px;\n          display: block;\n          text-align: right;\n          margin-right: 6px; }\n  .details .body-top .body-top-input-bottom .input-text .summarycontactPropdowna {\n          width: 37% !important;\n          min-width: 276px !important; }\n  .details .body-top .body-top-input-bottom .btn-time {\n        margin-left: 134px; }\n  .details .body-top .body-top-input-bottom .btn-time .button-itme {\n          border-radius: 0;\n          margin: 0;\n          border: #ddd 1px solid;\n          width: 92px; }\n  .details .remarks {\n    width: 100%;\n    height: 117px;\n    display: flex;\n    margin-top: 49px; }\n  .details .remarks .remarks-text {\n      display: block;\n      width: 124px;\n      text-align: right;\n      margin-right: 7px; }\n  .details .remarks .remarks-textarea {\n      width: 82%; }\n  .details .priority {\n    width: 100%;\n    display: flex;\n    margin-top: 10px; }\n  .details .priority .priority-text {\n      display: block;\n      width: 124px;\n      text-align: right;\n      margin-right: 7px; }\n  .details .modify-botton {\n    margin: 0 auto;\n    margin-top: 53px;\n    width: 84px; }\n  :host /deep/ .summarycontactPropdowna .ui-dropdown {\n  width: 50% !important;\n  min-width: 276px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS9jdXN0b21lci1jb250YWN0L2N1c3RvbWVyLWNvbnRhY3QtZGV0YWlsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxccmVtaW5kZXItZG9cXGJhY2tsb2ctZGV0YWlsXFxidG4tcGFnZVxcY3VzdG9tZXItY29udGFjdFxcY3VzdG9tZXItY29udGFjdC1kZXRhaWxcXGN1c3RvbWVyLWNvbnRhY3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQUgxQjtJQUtRLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixlQUFlLEVBQUE7RUFUdkI7TUFXWSxZQUFZO01BQ1osbUJBQW1CO01BQ25CLFVBQVUsRUFBQTtFQWJ0QjtRQWVnQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGFBQWEsRUFBQTtFQWpCN0I7VUFtQm9CLFlBQVk7VUFDWixjQUFjO1VBQ2QsaUJBQWlCO1VBQ2pCLGlCQUFpQixFQUFBO0VBdEJyQztVQXlCb0IscUJBQXFCO1VBQ3JCLDJCQUEyQixFQUFBO0VBMUIvQztNQStCWSxZQUFZO01BQ1osbUJBQW1CO01BQ25CLFVBQVUsRUFBQTtFQWpDdEI7UUFtQ2dCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsYUFBYSxFQUFBO0VBckM3QjtVQXVDb0IsWUFBWTtVQUNaLGNBQWM7VUFDZCxpQkFBaUI7VUFDakIsaUJBQWlCLEVBQUE7RUExQ3JDO1VBNkNvQixxQkFBcUI7VUFDckIsMkJBQTJCLEVBQUE7RUE5Qy9DO1FBbURnQixrQkFBa0IsRUFBQTtFQW5EbEM7VUFxRG9CLGdCQUFnQjtVQUNoQixTQUFTO1VBQ1Qsc0JBQXNCO1VBQ3RCLFdBQVcsRUFBQTtFQXhEL0I7SUE4RFEsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCLEVBQUE7RUFqRXhCO01BbUVZLGNBQWM7TUFDZCxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGlCQUFpQixFQUFBO0VBdEU3QjtNQXlFWSxVQUFVLEVBQUE7RUF6RXRCO0lBNkVRLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCLEVBQUE7RUEvRXhCO01BaUZZLGNBQWM7TUFDZCxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGlCQUFpQixFQUFBO0VBcEY3QjtJQXdGUSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBQTtFQUluQjtFQUNJLHFCQUFxQjtFQUNyQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vcmVtaW5kZXItZG8vYmFja2xvZy1kZXRhaWwvYnRuLXBhZ2UvY3VzdG9tZXItY29udGFjdC9jdXN0b21lci1jb250YWN0LWRldGFpbC9jdXN0b21lci1jb250YWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOehruiupOWfuuacrOimgee0oFxyXG4uZGV0YWlscyB7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgaGVpZ2h0OiAzOTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAuYm9keS10b3Age1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTQ3cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC5ib2R5LXRvcC1pbnB1dCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgLmlucHV0LXRleHQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIC50ZXh0LW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDdweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zdW1tYXJ5Y29udGFjdFByb3Bkb3duYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM3JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjc2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYm9keS10b3AtaW5wdXQtYm90dG9tIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAuaW5wdXQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgLnRleHQtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnN1bW1hcnljb250YWN0UHJvcGRvd25hIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzclICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNzZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi10aW1lIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMzRweDtcclxuICAgICAgICAgICAgICAgIC5idXR0b24taXRtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAjZGRkIDFweCBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZW1hcmtzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDExN3B4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDlweDtcclxuICAgICAgICAucmVtYXJrcy10ZXh0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjRweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVtYXJrcy10ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MiU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByaW9yaXR5IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgLnByaW9yaXR5LXRleHQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDEyNHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1vZGlmeS1ib3R0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUzcHg7XHJcbiAgICAgICAgd2lkdGg6IDg0cHg7XHJcbiAgICB9XHJcbn1cclxuLy8g5LiL5ouJ5qGGXHJcbjpob3N0IC9kZWVwLyAuc3VtbWFyeWNvbnRhY3RQcm9wZG93bmEgLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMjc2cHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/customer-contact-detail/customer-contact-detail.component.ts":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/customer-contact-detail/customer-contact-detail.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: CustomerContactDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerContactDetailComponent", function() { return CustomerContactDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../custom-contact-new/custom-constant/custom-code-value */ "./src/app/pages/tzb/custom/custom-contact-new/custom-constant/custom-code-value.ts");
/* harmony import */ var _custom_contact_new_custom_contact_list_bean_custom_contact_list_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../custom-contact-new/custom-contact-list/bean/custom-contact-list.bean */ "./src/app/pages/tzb/custom/custom-contact-new/custom-contact-list/bean/custom-contact-list.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomerContactDetailComponent = /** @class */ (function () {
    function CustomerContactDetailComponent(commfunc, httpService) {
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ch = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.contactInformation = _custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_2__["ContactInformation"]; // 联系方式
        this.linkageTheme = _custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_2__["LinkageTheme"]; // 联系主题
        this.triority = _custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_2__["PriorityQuery"]; // 优先级
        this.customerSource = _custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_2__["CustomerSource"]; // 计划来源
        this.communicationEventBean = new _custom_contact_new_custom_contact_list_bean_custom_contact_list_bean__WEBPACK_IMPORTED_MODULE_3__["QueryUnprocessedCommunicationEventBean"]();
    }
    CustomerContactDetailComponent.prototype.ngOnInit = function () {
    };
    CustomerContactDetailComponent.prototype.ngOnChanges = function () {
        console.log(this.inValue);
        if (this.inValue) {
            // this.communicationEventBean= this.inValue;
            this.communicationEventId = this.inValue.communicationEventId;
            this.queryConWorkEffortDetailInfo();
        }
    };
    CustomerContactDetailComponent.prototype.reset = function () {
        this.outValue.emit({ dispaly: false });
    };
    // 客户联系进度跟踪查询
    CustomerContactDetailComponent.prototype.queryConWorkEffortDetailInfo = function () {
        var _this = this;
        var param = {
            workEffortId: this.workEffortId,
            communicationEventId: this.communicationEventId,
        };
        this.httpService.queryConWorkEffortDetailInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.communicationEventBean = data;
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
    //跳转客户视图
    CustomerContactDetailComponent.prototype.tocust = function () {
        this.commfunc.setSessionData('custNo', this.communicationEventBean.custId); //客户号的取值 by zj
        window.open('#/pages/custom-view/general', '_blank');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomerContactDetailComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomerContactDetailComponent.prototype, "outValue", void 0);
    CustomerContactDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customer-contact-detail',
            template: __webpack_require__(/*! ./customer-contact-detail.component.html */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/customer-contact-detail/customer-contact-detail.component.html"),
            styles: [__webpack_require__(/*! ./customer-contact-detail.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/customer-contact/customer-contact-detail/customer-contact-detail.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"]])
    ], CustomerContactDetailComponent);
    return CustomerContactDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/bean/handling-matters.bean.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/bean/handling-matters.bean.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: taskpoolPageBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskpoolPageBean", function() { return taskpoolPageBean; });
var taskpoolPageBean = /** @class */ (function () {
    function taskpoolPageBean() {
    }
    return taskpoolPageBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters-items/handling-matters-items.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters-items/handling-matters-items.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\" style=\"width:100%\">\r\n    <div class=\"ui-g-12\" *ngIf=\"(this.queryList && this.queryList.length>0)\">\r\n        <div class=\"ui-g-4 queryHeader\" *ngFor=\"let item of queryList\" style=\"text-align:right;font-size:13px;\">\r\n            <label>{{item.label}}:</label>\r\n            <input type=\"text\" [(ngModel)]=\"item.key\" *ngIf=\"item.i != 'createDateFrom' && item.i != 'startUserId' && item.i != 'createDateTo'\">\r\n            <input type=\"text\" [(ngModel)]=\"startUserId\" *ngIf=\"item.i == 'startUserId'\">\r\n            <p-calendar class=\"calendar-name\" [showIcon]=\"true\" [(ngModel)]=\"item.key\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [showOtherMonths]=\"false\" *ngIf=\"item.i == 'createDateFrom' || item.i == 'createDateTo'\"></p-calendar>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\" *ngIf=\"(this.queryList && this.queryList.length>0)\">\r\n        <button pButton label=\"查询\" (click)=\"querySecle()\"></button>\r\n        <button pButton label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 table\">\r\n        <u-dataTable [value]=\"tableList\" [style]=\"{'text-align':'center'}\" [emptyMessage]='tabMesg' scrollable=\"true\">\r\n            <p-column field=\"Index\" header=\"序号\" [style]=\"{width:'38px','font-size':'13px'}\">\r\n                <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{ ri+1 }}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngFor=\"let pro of tableTitleListonly\" field=\"{{pro.field}}\" header=\"{{pro.header}}\" [style]=\"{'width':'82px','font-size':'13px','letter-spacing':'0px'}\"></p-column>\r\n            <p-column *ngFor=\"let items of tableTitleList\" field=\"{{items.field}}\" header=\"{{items.header}}\" [style]=\"{'width':'80px','font-size':'13px','letter-spacing':'0px'}\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span *ngIf=\"(items.field != 'taskName')&&(items.field != 'workCreaterAgencyId') && item.varMap.dataMap && item.varMap.taskCategoryId != '0308_01'&& item.varMap.taskCategoryId != '134000'\">\r\n                        <span *ngIf=\"items.field=='taskType'\">{{item.varMap.dataMap[items.field]|codeValuePie:approveParams}}</span>\r\n                        <span *ngIf=\"items.field!='taskType'\">{{item.varMap.dataMap[items.field]}}</span>\r\n                    </span>\r\n                    <span *ngIf=\"(items.field == 'taskName')&&(item.littleClassNo!='DXLC')\">{{item.taskName}}</span>\r\n                    <span *ngIf=\"(items.field == 'taskName')&&(item.littleClassNo=='DXLC')\">{{item.varMap.dataMap.taskName}}</span>\r\n                    <span *ngIf=\"items.field == 'workCreaterAgencyId'\">{{item.workCreaterAgencyName}}</span>\r\n                    <span *ngIf=\"item.varMap.dataMap && item.varMap.taskCategoryId == '0308_01'\">\r\n                        <span *ngIf=\"items.field == 'contactSource'\">{{item.varMap.dataMap[items.field] | codeValuePie:tourcesPlanning}}</span>\r\n                        <span *ngIf=\"items.field == 'marketingContactWay'\">{{item.varMap.dataMap[items.field] | codeValuePie:contactInformation}}</span>\r\n                        <span *ngIf=\"items.field == 'marketingContactTheme'\">{{item.varMap.dataMap[items.field]| codeValuePie:linkageTheme:','}}</span>\r\n                        <span *ngIf=\"items.field!='contactSource'&&items.field!='marketingContactWay'&&items.field!='marketingContactTheme'\">{{item.varMap.dataMap[items.field]}}</span>\r\n                    </span>\r\n                    <span *ngIf=\"item.varMap.dataMap && item.varMap.taskCategoryId == '134000'\">\r\n                        <span *ngIf=\"items.field == 'contactSoure'\">{{item.varMap.dataMap[items.field] | codeValuePie:tourcesPlanning}}</span>\r\n                        <span *ngIf=\"items.field == 'marketingContactWay'\">{{item.varMap.dataMap[items.field] | codeValuePie:contactInformation}}</span>\r\n                        <span *ngIf=\"items.field == 'marketingContactTheme'\">{{item.varMap.dataMap[items.field]| codeValuePie:linkageTheme:','}}</span>\r\n                        <span *ngIf=\"items.field == 'pushObject'\">{{item.varMap.dataMap[items.field]| codeValuePie:PushType2}}</span>\r\n                        <span *ngIf=\"items.field!='contactSoure'&&items.field!='marketingContactWay'&&items.field!='marketingContactTheme'&&items.field!='pushObject'\">{{item.varMap.dataMap[items.field]}}</span>\r\n                    </span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"发起人\" field=\"workCreaterName\" [style]=\"{'width':'80px','font-size':'13px'}\"></p-column>\r\n            <p-column header=\"到达时间\" field=\"createDate\" [style]=\"{'width':'80px','font-size':'13px'}\"></p-column>\r\n            <p-column header=\"处理时间\" field=\"updateDate\" [style]=\"{'width':'80px','font-size':'13px'}\"></p-column>\r\n            <p-column header='操作' field='' [style]=\"{'width':'120px','font-size':'13px'}\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)='toDoExam(item)' class=\"tableApprove\" style=\"font-size:12px;\">详情</span>\r\n                    <span (click)=\"viewProcessSchedule(item)\" class=\"historyIco\" style=\"font-size:12px;\">流程</span>\r\n                    <span (click)='ViewApprovalpath(item)' class=\"tabelApprovalPathIco\" style=\"font-size:12px;\">轨迹</span>\r\n                    <span (click)='toStop(item)' class=\"tabelStopIco\" style=\"font-size:12px;\" *ngIf=\"!item.disstop&&item.workCreater == userId&&workarr&&workarr.indexOf('1')!=-1\">终止</span>\r\n                    <span class=\"tabelStopSetIco\" style=\"font-size:12px;\" *ngIf=\"item.workCreater == userId&&item.disstop\">终止</span>\r\n                    <span (click)=\"backBtn(item)\" class=\"tabelRepealIco\" style=\"font-size:12px;\" *ngIf=\"workarr&&workarr.indexOf('2')!=-1\">追回</span>\r\n                    <span (click)='workerCall(2,item)' class=\"tableForwardIco\" style=\"font-size:12px;\" *ngIf=\"workarr&&workarr.indexOf('3')!=-1\">转发</span>\r\n                    <span class='imgOrFont' (click)='workerCall(3,item)' *ngIf=\"workarr&&workarr.indexOf('4')!=-1\">\r\n                        <span style=\"font-size: 20px!important;color: #19b0c8;\" class=\"icon iconfont img_display\">&#xe633;</span>\r\n                        <span class=\"img_no_display\" style=\"font-size:12px;\">转分配</span>\r\n                    </span>\r\n                    <span class='imgOrFont' (click)='workerCall(4,item)' *ngIf=\"workarr&&workarr.indexOf('5')!=-1\">\r\n                        <span style=\"font-size: 20px!important;color: #19b0c8;\" class=\"icon iconfont img_display\">&#xe633;</span>\r\n                        <span class=\"img_no_display\" style=\"font-size:12px;\">转办</span>\r\n                    </span>\r\n                </ng-template>\r\n            </p-column>\r\n        </u-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"pageRows\">\r\n        <u-paginator first={{first}} rows=\"{{pageRows}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\">\r\n        </u-paginator>\r\n    </div>\r\n</div>\r\n\r\n<!--提示消息-->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!--审批详情弹框-->\r\n<p-dialog header=\"审批详情\" [(visible)]=\"creditApproveDisplay\" modal=\"modal\" [responsive]=\"false\" [positionTop]=10 class=\"my-workdesk-contactf\"\r\n    (onHide)=\"closeFirtproc()\">\r\n    <app-work-approve-detail *ngIf=\"creditApproveDisplay1\" (outValue)=\"creditApproveCall($event)\" [processId]=\"processId\"></app-work-approve-detail>\r\n    <app-credit-approve-detail *ngIf=\"creditApproveDisplay2\" (outValue)=\"creditApproveCall($event)\" [processId]=\"processId\" [taskId]=\"nowTaskId\"></app-credit-approve-detail>\r\n</p-dialog>\r\n<!-- 现转发 by zj -->\r\n<p-dialog [(visible)]=\"personPage\" header=\"人员机构选择\" *ngIf=\"personPage\" modal=\"modal\" class=\"my-cust-overf\">\r\n    <forward-menber-tree (outValue)=\"peopleCall($event)\"></forward-menber-tree>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters-items/handling-matters-items.component.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters-items/handling-matters-items.component.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .btn {\n  text-align: center; }\n\n.module .custNo_a {\n  cursor: pointer;\n  color: #19b0c8; }\n\n.module .imgOrFont .img_no_display {\n  display: none; }\n\n.module .imgOrFont:hover .img_no_display {\n  display: inline-block;\n  color: #0094D2;\n  cursor: pointer;\n  font-weight: bold;\n  padding: 0px !important; }\n\n.module .imgOrFont:hover .img_display {\n  display: none; }\n\n.name-thing {\n  padding-bottom: 0; }\n\n.name-thing .ui-g-4 {\n    padding-bottom: 0; }\n\n.name-thing .ui-g-4 .ui-g-6 {\n      text-align: right; }\n\n.name-thing2 {\n  padding-bottom: 0; }\n\n.name-thing2 .ui-g-4 {\n    padding-top: 0; }\n\n.name-thing2 .ui-g-4 .ui-g-6 {\n      text-align: right; }\n\n.cont100 {\n  width: 100%;\n  height: 25px;\n  margin: 16px 0px 10px 0px; }\n\n.cont33 {\n  float: left;\n  width: 33%;\n  height: 25px; }\n\n.cont30 {\n  float: left;\n  width: 30%;\n  height: 25px;\n  line-height: 25px;\n  font-size: 14px; }\n\n.cont60 {\n  float: left;\n  width: 60%;\n  height: 25px; }\n\n.textAligin {\n  text-align: right;\n  line-height: 25px; }\n\n:host /deep/ .my-workdesk-contactf .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .my-workdesk-contactf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n:host/deep/.queryHeader .ui-calendar {\n  width: 173px; }\n\n.queryHeader input {\n  width: 173px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS9oYW5kbGluZy1tYXR0ZXJzL2hhbmRsaW5nLW1hdHRlcnMtaXRlbXMvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxyZW1pbmRlci1kb1xcYmFja2xvZy1kZXRhaWxcXGJ0bi1wYWdlXFxoYW5kbGluZy1tYXR0ZXJzXFxoYW5kbGluZy1tYXR0ZXJzLWl0ZW1zXFxoYW5kbGluZy1tYXR0ZXJzLWl0ZW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFOdEI7RUFVWSxhQUFhLEVBQUE7O0FBVnpCO0VBY2dCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUIsRUFBQTs7QUFsQnZDO0VBcUJnQixhQUFhLEVBQUE7O0FBSzdCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRHJCO0lBR1EsaUJBQWlCLEVBQUE7O0FBSHpCO01BS1csaUJBQWlCLEVBQUE7O0FBSzVCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRHJCO0lBR1EsY0FBYyxFQUFBOztBQUh0QjtNQUtXLGlCQUFpQixFQUFBOztBQU01QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL3JlbWluZGVyLWRvL2JhY2tsb2ctZGV0YWlsL2J0bi1wYWdlL2hhbmRsaW5nLW1hdHRlcnMvaGFuZGxpbmctbWF0dGVycy1pdGVtcy9oYW5kbGluZy1tYXR0ZXJzLWl0ZW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZXtcclxuICAgIC5idG4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jdXN0Tm9fYXtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICB9XHJcbiAgICAuaW1nT3JGb250IHtcclxuICAgICAgICAuaW1nX25vX2Rpc3BsYXkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgLmltZ19ub19kaXNwbGF5IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA5NEQyO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW1nX2Rpc3BsYXkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubmFtZS10aGluZ3tcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgLnVpLWctNHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAudWktZy02e1xyXG4gICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5uYW1lLXRoaW5nMntcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgLnVpLWctNHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAudWktZy02e1xyXG4gICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4uY29udDEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbjogMTZweCAwcHggMTBweCAwcHg7XHJcbn1cclxuXHJcbi5jb250MzMge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMzMlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uY29udDMwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY29udDYwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG4udGV4dEFsaWdpbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG5cclxuOmhvc3QgL2RlZXAvIC5teS13b3JrZGVzay1jb250YWN0ZiAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5teS13b3JrZGVzay1jb250YWN0ZiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG46aG9zdC9kZWVwLy5xdWVyeUhlYWRlciAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDE3M3B4O1xyXG59XHJcbi5xdWVyeUhlYWRlciBpbnB1dHtcclxuICAgIHdpZHRoOiAxNzNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters-items/handling-matters-items.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters-items/handling-matters-items.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: HandlingMmattersItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandlingMmattersItemsComponent", function() { return HandlingMmattersItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/common/service/http.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/service/http.service.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/tzb/common/http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/tzb/custom/custom-contact-new/custom-constant/custom-code-value */ "./src/app/pages/tzb/custom/custom-contact-new/custom-constant/custom-code-value.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
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
 * @author fanhualing 2018-8-1 查询审批事项
 */















var HandlingMmattersItemsComponent = /** @class */ (function () {
    function HandlingMmattersItemsComponent(commonHttpService, customeHttpService, httpService, commfunc, router, activatedRouter, confirmationService, creditCcmService, processInstanceManagementService) {
        var _this = this;
        this.commonHttpService = commonHttpService;
        this.customeHttpService = customeHttpService;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.confirmationService = confirmationService;
        this.creditCcmService = creditCcmService;
        this.processInstanceManagementService = processInstanceManagementService;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"];
        this.scheduleTypeId3 = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.itemsSmallType = [];
        this.msgs = [];
        this.first = 0;
        this.tableList = [];
        this.approveParams = [];
        this.tableTitleList = [];
        this.queryList = [];
        this.stopFlag = true;
        this.creditApproveDisplay = false;
        this.creditApproveDisplay1 = false;
        this.creditApproveDisplay2 = false;
        this.contactInformation = app_pages_tzb_custom_custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_12__["ContactInformation"]; //联系方式
        this.linkageTheme = app_pages_tzb_custom_custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_12__["LinkageTheme"]; //联系主题
        this.tourcesPlanning = app_pages_tzb_custom_custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_12__["TourcesPlanning"]; //计划来源
        this.PushType2 = app_pages_tzb_custom_custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_12__["PushType2"]; // 推送类型
        this.personPage = false;
        //事项小类动态业务数据展示
        /**
         *
         * @param queryType 查询类型：0-查询条件;1-表头
         * @param taskCategoryId 流程模板编号
         * @param nodeCode 流程节点编号
         */
        this.tableTitleListonly = [];
        this.codeValues();
        this.scheduleTypeId3 = this.code['ScheduleType'];
        this.itemsSmallType = this.code['ItemType'];
        this.approveParams = this.code['approveParams'];
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
        this.activatedRouter.queryParams.subscribe(function (params) {
            _this.flag = params.flag;
            _this.num = params.totalNum;
        });
    }
    HandlingMmattersItemsComponent.prototype.ngOnInit = function () {
        //授信页面的提交标识
        this.pageInit();
    };
    HandlingMmattersItemsComponent.prototype.ngOnChanges = function () {
        this.pageInit();
    };
    HandlingMmattersItemsComponent.prototype.pageInit = function () {
        var _this = this;
        this.taskId = null;
        this.tasktype = null;
        this.workarr = null;
        var par = {
            limit: "10",
            page: "1",
            paramName: 'workEndFunctionConfig',
        };
        this.commonHttpService.queryCommonParamService(par).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.returnCommonParamList && data.returnCommonParamList.length > 0) {
                    var arr = data.returnCommonParamList[0];
                    _this.commonHttpService.queryCommonParamItemService(arr).subscribe(function (data1) {
                        if (data1.returnCode.code == 'success') {
                            if (data1.returnCommonParamItemList && data1.returnCommonParamItemList.length > 0) {
                                for (var p = 0; p < data1.returnCommonParamItemList.length; p++) {
                                    var el = data1.returnCommonParamItemList[p];
                                    if (el.paramItemName == _this.inNav['littleClassNo']) {
                                        _this.workarr = el.paramItemValue;
                                        break;
                                    }
                                }
                            }
                        }
                    });
                }
            }
        });
        if (this.commfunc.getSessionDataCH('saveMSGIdentyfy') && this.commfunc.getSessionDataCH('saveMSGIdentyfy') == 'true') {
            this.commfunc.clearSession('saveMSGIdentyfy');
        }
        this.paramNUM = '1';
        var session = window.sessionStorage;
        if (session.getItem('para')) {
            session.removeItem('para');
        }
        this.querySecle('1');
    };
    HandlingMmattersItemsComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    HandlingMmattersItemsComponent.prototype.querySecle = function (isOnit) {
        var param = '';
        if (isOnit != '1') { // 如果非初始化查询
            for (var _i = 0, _a = this.queryList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.key && item.i) {
                    // debugger
                    if (!param && item.i != 'createDateFrom' && item.i != 'createDateTo') {
                        param = item.i + "=" + ("'" + item.key + "'");
                    }
                    else if (param && item.i != 'createDateFrom' && item.i != 'createDateTo') {
                        param = param + (" and " + item.i + "=" + ("'" + item.key + "'"));
                    }
                    else if (!param && item.i == 'createDateFrom' && item.key) {
                        item.key = this.commfunc.transDateN(item.key);
                        param = "create_date>" + ("'" + item.key + "'");
                    }
                    else if (!param && item.i == 'createDateTo' && item.key) {
                        item.key = this.commfunc.transDateN(item.key);
                        param = "create_date<" + ("'" + item.key + "'");
                    }
                    else if (param && item.i == 'createDateFrom' && item.key) {
                        item.key = this.commfunc.transDateN(item.key);
                        param = param + (" and create_date > " + ("'" + item.key + "'"));
                    }
                    else if (param && item.i == 'createDateTo' && item.key) {
                        item.key = this.commfunc.transDateN(item.key);
                        param = param + (" and create_date < " + ("'" + item.key + "'"));
                    }
                }
            }
        }
        var session = window.sessionStorage;
        if (session.getItem('bussinessWhere')) {
            this.bussinessWhereDATA = session.getItem('bussinessWhere');
            if (this.bussinessWhereDATA.indexOf('startUserId') != -1) {
                var t = this.bussinessWhereDATA.split('=');
                this.startUserId = t[1];
                if (param != '') {
                    this.bussinessWhere = param;
                }
            }
            else {
                var a = this.bussinessWhereDATA + ' and ' + param;
                if (param != '') {
                    this.bussinessWhere = a;
                }
                else {
                    this.bussinessWhere = this.bussinessWhereDATA;
                }
            }
        }
        else {
            this.bussinessWhere = param;
        }
        if (session.getItem('month')) {
            this.startDate = JSON.parse(session.getItem('month')).startDate;
            this.endDate = JSON.parse(session.getItem('month')).endDate;
            if (this.bussinessWhere != '') {
                this.bussinessWhere = this.bussinessWhere + 'and' + "('" + this.startDate + "' <" + "create_date" + ' and create_date' + "<'" + this.endDate + "')";
            }
            else {
                this.bussinessWhere = "'" + this.startDate + "' <" + "create_date" + ' and create_date' + "<'" + this.endDate + "'";
            }
        }
        this.pageRows = 10;
        this.curPage = 1;
        this.first = 0;
        this.bpmQueryTaskList();
    };
    // 重置
    HandlingMmattersItemsComponent.prototype.reset = function () {
        for (var _i = 0, _a = this.queryList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.key) {
                item.key = '';
            }
        }
        this.bussinessWhere = '';
        this.workCreateName = undefined;
        this.startUserId = undefined;
        this.pageRows = 10;
        this.curPage = 1;
        this.first = 0;
        this.querySecle();
    };
    //办结事项任务明细查询
    HandlingMmattersItemsComponent.prototype.bpmQueryTaskList = function () {
        var _this = this;
        this.mainitemType = null;
        var nodeType;
        var startUserId;
        var bussinessWhere;
        if (this.num == '3') {
            nodeType = 0;
        }
        else if (this.num == '4') {
            nodeType = 1;
        }
        if (this.bussinessWhere) {
            bussinessWhere = this.bussinessWhere;
        }
        if (this.startUserId) {
            startUserId = this.startUserId;
        }
        if (this.inNav) {
            var arr = this.inNav.systemCode.split(';');
            this.itemType = arr[0].split(':');
            this.itemNode = arr[1].split(':');
        }
        else {
            var arr = ["RUM:信贷任务", "DXLC:电销任务流程"];
            this.itemType = arr[0].split(':');
            this.itemNode = arr[1].split(':');
        }
        this.mainitemType = this.itemType[0];
        var pram = {
            userId: this.userId,
            isAllNode: false,
            isEndProcess: true,
            // systemCode: this.inNav.systemCode,
            itemType: this.itemType[0],
            itemNode: this.itemNode[0],
            first: this.first,
            curPage: this.curPage,
            pageRows: this.pageRows,
            nodeType: nodeType,
            bussinessWhere: bussinessWhere,
            startUserId: startUserId
        };
        this.customeHttpService.bpmQueryTaskOnlyList(pram).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                data.pageData.result.forEach(function (el) {
                    el.createDate = el.createDate.slice(0, 16);
                    el.updateDate = el.updateDate.slice(0, 16);
                });
                _this.tableList = data.pageData.result;
                _this.total = data.pageData.totalRows;
                if (_this.paramNUM == '1') {
                    var param = '';
                    if (data.pageData.result[0].littleClassNo) {
                        param = data.pageData.result[0].littleClassNo;
                    }
                    //动态业务参数查询条件
                    _this.queryTaskNoteMessage('1', param);
                    //动态业务参数表头
                    _this.queryTaskNoteMessage('2', param);
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 关闭审批详情
    HandlingMmattersItemsComponent.prototype.closeFirtproc = function () {
        this.nowTaskId = undefined;
        this.creditApproveDisplay = false;
        this.creditApproveDisplay1 = false;
        this.creditApproveDisplay2 = false;
    };
    // 审批详情弹框回调方法
    HandlingMmattersItemsComponent.prototype.creditApproveCall = function () {
        this.creditApproveDisplay1 = false;
        this.creditApproveDisplay2 = false;
        this.creditApproveDisplay = false;
    };
    // 查看流程进度
    HandlingMmattersItemsComponent.prototype.viewProcessSchedule = function (item) {
        var processCodeParam = encodeURIComponent(item.processCode);
        var params = "/" + item.processCode + "/" + item.processId + "/" + item.processState + "/userId001/sysCode001/tokenCode001";
        this.processInstanceManagementService.toActivitiSchedule(params);
    };
    // 查看审批轨迹
    HandlingMmattersItemsComponent.prototype.ViewApprovalpath = function (item) {
        this.processId = item.processId;
        if (item.littleClassNo == 'RUM0001') {
            this.nowTaskId = 'sub';
            this.creditApproveDisplay2 = true;
        }
        else {
            this.nowTaskId = undefined;
            this.creditApproveDisplay1 = true;
        }
        this.creditApproveDisplay = true;
    };
    // 分页
    HandlingMmattersItemsComponent.prototype.paginate = function (event) {
        this.pageRows = event.rows * 1;
        var currentPage = event.page + 1;
        this.curPage = currentPage;
        this.first = (currentPage - 1) * this.pageRows;
        this.bpmQueryTaskList();
    };
    // 流程终止
    HandlingMmattersItemsComponent.prototype.toStop = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要终止?',
            accept: function () {
                var param = {
                    userId: _this.userId,
                    taskId: item.taskId,
                    tranType: 'A0',
                    doResion: '4',
                };
                _this.customeHttpService.bpmUserTaskManage(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        item['disstop'] = true;
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
                });
            }
        });
    };
    //追回
    HandlingMmattersItemsComponent.prototype.backBtn = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要追回?',
            accept: function () {
                var param = {
                    userId: _this.userId,
                    taskId: item.taskId,
                    tranType: 'A1',
                    doResion: '3',
                };
                if (item.mainFlowNo) {
                    _this.setSerialNumber(item.mainFlowNo);
                }
                _this.customeHttpService.bpmUserTaskManage(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
                });
            }
        });
    };
    HandlingMmattersItemsComponent.prototype.workerCall = function (i, item) {
        if (i) {
            this.tasktype = i;
        }
        ;
        this.taskId = item.taskId;
        this.personPage = true;
    };
    // 现转发
    HandlingMmattersItemsComponent.prototype.peopleCall = function (peoplearr) {
        var _this = this;
        this.personPage = false;
        var a = [];
        var b = [];
        var c;
        var d;
        var msg;
        for (var i = 0; i < peoplearr.length; i++) {
            a.push(peoplearr[i]['tellerId']); //取出转人ID
            b.push(peoplearr[i]['tellerName']); //取出转人名称
        }
        if (this.tasktype) {
            if (this.tasktype == '2') {
                d = '转发';
            }
            else if (this.tasktype == '3') {
                d = '转分配';
            }
            else if (this.tasktype == '4') {
                d = '转办';
            }
        }
        if (b.length > 3) {
            c = b.splice(0, 3).join(',');
            msg = '确认' + d + c + '等' + peoplearr.length + '名人员?';
        }
        else {
            msg = '确认' + d + b + peoplearr.length + '名人员?';
        }
        this.musId = a.join(',');
        this.confirmationService.confirm({
            message: msg,
            accept: function () {
                if (_this.tasktype && _this.tasktype == '2') {
                    var param = {
                        userId: _this.userId,
                        taskId: _this.taskId,
                        targetUserId: _this.musId,
                        taskType: '0',
                    };
                    _this.processInstanceManagementService.bpmadditionTask(param).subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
                            _this.msgs = [];
                            _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                        }
                    }, function (error) {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
                    });
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '服务暂没！！！攻城狮在捉急弄' }];
                }
            },
        });
    };
    HandlingMmattersItemsComponent.prototype.setSerialNumber = function (serialNum) {
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader['globalSeqNo'] = serialNum;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
    };
    // 详情查看-传入标识markFlag
    HandlingMmattersItemsComponent.prototype.toDoExam = function (data) {
        var _this = this;
        debugger;
        var worktype = { worktype: data.workType };
        this.commfunc.setSessionDataCH('workType', JSON.stringify(worktype));
        // 客户联系进入详情标识
        data['detailFlag'] = 1;
        if (this.activatedRouter.snapshot.queryParams['flag'] == '3') {
            data['markFlag'] = '2';
        }
        else {
            data['markFlag'] = '1';
        }
        if (!(data.varMap.taskCategoryId.indexOf('RUM0005') < 0) ||
            !(data.varMap.taskCategoryId.indexOf('RUM0009') < 0) ||
            !(data.varMap.taskCategoryId.indexOf('RUM_0020') < 0) ||
            !(data.varMap.taskCategoryId.indexOf('XYKZCRGSPLC') < 0) ||
            !(data.varMap.taskCategoryId.indexOf('RUM_0023') < 0) ||
            !(data.varMap.taskCategoryId.indexOf('RUM_0022') < 0)) {
            var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            var post_name = JSON.parse(this.commfunc.getSessionDataCH('postIdList'));
            var products_1 = '';
            if (data.varMap.dataMap.productNo) {
                products_1 = data.varMap.dataMap.productNo;
            }
            else {
                products_1 = data.varMap.dataMap.productId;
            }
            var params = {};
            if (data.varMap.taskCategoryId == "RUM_0020") {
                params = {
                    businessType: "17",
                    'roleId': post_name,
                    'viewIndex': 1,
                    'viewSize': 100,
                };
            }
            else {
                params = {
                    'productNo': products_1,
                    'roleId': post_name,
                    'viewIndex': 1,
                    'viewSize': 100,
                };
            }
            //如果flag为‘3’则是从办结进入的
            var flag_1 = '';
            if (this.activatedRouter.snapshot.queryParams['flag'] == '3') {
                flag_1 = '2';
            }
            else {
                flag_1 = '';
            }
            this.creditCcmService.queryViewRelations(params).subscribe(function (datas) {
                if (datas.returnCode.code === 'success') {
                    if (datas.list.length > 0) {
                        var param_1, pageParams = void 0, littleClassNo = void 0;
                        if (!(data.varMap.taskCategoryId.indexOf('RUM0009') < 0)) {
                            var viewId_1 = [];
                            datas.list.forEach(function (e) {
                                if (e.viewName.match('卡要素')) {
                                    viewId_1.push({ a: e.viewConfigId, b: e.viewName });
                                }
                            });
                            _this.commfunc.setSessionDataCH('viewId', JSON.stringify(viewId_1));
                            for (var i = 0; i < datas.list.length; i++) {
                                if (datas.list[i].viewName.match('卡要素')) {
                                    _this.stopFlag = false;
                                    param_1 = {
                                        'viewConfigId': datas.list[i]['viewConfigId'],
                                        'viewName': datas.list[i]['viewName'],
                                        'flag': true //审批标识
                                    };
                                    pageParams = {
                                        'viewConfigId': datas.list[i]['viewConfigId'],
                                        'viewName': datas.list[i]['viewName'],
                                        'custNo': data.varMap.dataMap.custNo,
                                        'custName': data.varMap.dataMap.custName,
                                        'custRequestNo': data.varMap.custRequestNo,
                                        'productNo': products_1,
                                        'productName': data.varMap.dataMap.productName,
                                        'isView': '',
                                        'businessType': data.varMap.dataMap.businessType,
                                        'processId': data.processId,
                                        'taskId': data.taskId,
                                        'workCreater': data.workCreater,
                                        'guaranteeType': data.varMap.dataMap.guaranteeType,
                                        'applyAmt': data.varMap.dataMap.applyAmt,
                                        'varMap': data.varMap,
                                        'taskRate': data.taskRate,
                                        'custRequestId': data.varMap.custRequestId,
                                        'endDate': data.varMap.dataMap.endDate,
                                        'taskType': data.taskType,
                                        'stageType': data.varMap.stageType,
                                        'taskName': data.taskName,
                                        'assActorId': data.varMap.dataMap['assActorId'],
                                        'requestSeqNo': data.varMap.requestSeqNo,
                                        'flag': flag_1,
                                        'processState': data.processState,
                                    };
                                    break;
                                }
                            }
                        }
                        else {
                            var viewId_2 = [];
                            datas.list.forEach(function (e) {
                                if (!e.viewName.match('卡要素')) {
                                    viewId_2.push({ a: e.viewConfigId, b: e.viewName });
                                }
                            });
                            _this.commfunc.setSessionDataCH('viewId', JSON.stringify(viewId_2));
                            for (var i = 0; i < datas.list.length; i++) {
                                var str = '卡要素';
                                if (datas.list[i].viewName.indexOf(str) == -1) {
                                    _this.stopFlag = false;
                                    param_1 = {
                                        'viewConfigId': datas.list[i]['viewConfigId'],
                                        'viewName': datas.list[i]['viewName'],
                                    };
                                    pageParams = {
                                        'viewConfigId': datas.list[i]['viewConfigId'],
                                        'viewName': datas.list[i]['viewName'],
                                        'custNo': data.varMap.dataMap.custNo,
                                        'custName': data.varMap.dataMap.custName,
                                        'custRequestNo': data.varMap.custRequestNo,
                                        'productNo': products_1,
                                        'productName': data.varMap.dataMap.productName,
                                        'isView': '',
                                        'businessType': data.varMap.dataMap.businessType,
                                        'processId': data.processId,
                                        'taskId': data.taskId,
                                        'workCreater': data.workCreater,
                                        'guaranteeType': data.varMap.dataMap.guaranteeType,
                                        'applyAmt': data.varMap.dataMap.applyAmt,
                                        'varMap': data.varMap,
                                        'taskRate': data.taskRate,
                                        'custRequestId': data.varMap.custRequestId,
                                        'endDate': data.varMap.dataMap.endDate,
                                        'stageType': data.varMap.stageType,
                                        'taskName': data.taskName,
                                        'taskType': data.taskType,
                                        'assActorId': data.varMap.dataMap['assActorId'],
                                        'requestSeqNo': data.varMap.requestSeqNo,
                                        'flag': flag_1,
                                        'processState': data.processState,
                                        'mainFlowNo': data.mainFlowNo,
                                        'taskCode': data.taskCode,
                                        'workType': data.workType
                                    };
                                    break;
                                }
                            }
                        }
                        if (_this.stopFlag) {
                            _this.msgs = [{ severity: 'info', summary: '错误', detail: '产品和岗位未关联页面,请配置关联页面' }];
                        }
                        littleClassNo = data.littleClassNo;
                        var commonHeader_1 = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        commonHeader_1['extParam']['littleClassNo'] = littleClassNo;
                        _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
                        if (data.varMap.taskCategoryId == "RUM_0023" || data.varMap.taskCategoryId == "RUM_0022") {
                            pageParams['custRequestNo'] = data.varMap.dataMap.custRequestNo;
                        }
                        _this.commfunc.setSessionDataCH('creditDataWorkFlow', JSON.stringify(pageParams));
                        if (flag_1 == '2') {
                            param_1['ckhs'] = 'Y';
                        }
                        // RUM_0020 批量预授信
                        if (data.varMap.taskCategoryId == "RUM_0020") {
                            _this.commfunc.setSessionDataCH('approvalBatchBean', JSON.stringify({
                                batchId: data.varMap.dataMap.batchId || null,
                                groupId: data.varMap.dataMap.groupId || null
                            }));
                            // 获取批量预授信客户群信息
                            var batchDetail = new Promise(function (resolve) {
                                var params = {
                                    "advanceInput": "0",
                                    "groupType": "0",
                                    "pageNum": 1,
                                    "pageSize": 10,
                                    "conditionList": [
                                        [
                                            {
                                                "field": "group_id",
                                                "operator": "=",
                                                "value": data.varMap.dataMap.groupId
                                            }
                                        ]
                                    ],
                                };
                                _this.httpService.queryCustGroupInfo(params).subscribe(function (result) {
                                    if (result.returnCode.code == 'success') {
                                        var data_1 = result.resultList[0] || {};
                                        console.log("oop");
                                        var datas_1 = {
                                            cust_num: data_1.open_Num || null,
                                            valid_cust_num: data_1.valid_cust_num || null,
                                            valid_cov_rate: data_1.valid_ratio || null,
                                            crdt_cust_num: data_1.CRDT_CUST_NUM || null,
                                            pre_crdt_amt: data_1.pre_crdt_amt || null,
                                            // crdt_cust_num:data.cust_num || null,//已授信客户数
                                            pre_crdt_cust_num: data_1.PRE_CRDT_CUST_NUM,
                                            crdt_amt: data_1.CRDT_AMT || null,
                                            crdt_bal: data_1.CRDT_BAL || null,
                                            loan_cust_num: data_1.LOAN_CUST_NUM || null,
                                            // crdt_amt:data.cust_num || null,//已用信额度总和
                                            GROUP_ID: data_1.group_id || null,
                                            GROUP_NAME: data_1.group_name || null,
                                            GROUP_TYPE: data_1.group_type || null,
                                            GROUP_OWNER_NAME: data_1.group_owner || null,
                                            GROUP_LINKMANNAME: data_1.group_of_contacts || null,
                                            ORG_NAME: data_1.org_id || null,
                                            ADDRESS: data_1.address_message || null,
                                            PRODUCT_CODE: data_1.featured_products || null,
                                            INT: data_1.INT || null,
                                            GROUP_OWNER_ID: data_1.group_owner || null,
                                            ORG_ID: data_1.create_org_id || null,
                                        };
                                        resolve({
                                            groupDtas: datas_1
                                        });
                                    }
                                    else {
                                        _this.msgs = [{ severity: 'error', summary: '提示', detail: result.returnCode.message }];
                                    }
                                }, function (error) {
                                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
                                });
                            });
                            Promise.all([batchDetail]).then(function (res) {
                                var datas = {
                                    detailData: res[0]["detailDtas"]
                                };
                                console.log(datas);
                                _this.commfunc.setSessionDataCH('groupBranchData', JSON.stringify(datas));
                                _this.router.navigate(['/pages/tzb/custom/credit-ccm/viewPage', JSON.stringify(param_1)]);
                                // this.queryViewRelations(item, notApply);
                            });
                        }
                        else {
                            _this.router.navigate(['/pages/tzb/custom/credit-ccm/viewPage', JSON.stringify(param_1)]);
                        }
                    }
                    else {
                        _this.msgs = [{ severity: 'info', summary: '错误', detail: '产品和岗位未关联页面,请配置关联页面' }];
                    }
                }
                else {
                    _this.msgs = [{ severity: 'error', summary: '错误', detail: datas.returnCode.message }];
                }
            });
        }
        else {
            this.commfunc.toDisposeSchedule(data);
        }
    };
    //页面信息查询
    HandlingMmattersItemsComponent.prototype.queryViewRelations = function (products, post_name, resolve) {
        var _this = this;
        var params = {
            productNo: products,
            roleId: post_name,
            viewIndex: 1,
            viewSize: 100,
        };
        this.creditCcmService.queryViewRelations(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                resolve({ viewData: data.list });
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    //点击客户号跳转
    HandlingMmattersItemsComponent.prototype.toCustView = function (data) {
        if (data.relationKey == 'party') {
            this.commfunc.setSessionData('custNo', data.partyOrGroupNo);
            window.open('#/pages/custom-view/general', '_blank');
        }
        else if (data.relationKey == 'partyGroup') {
            window.open("#/pages/tzb/custom/custom-group/custom-group-view?groupId=" + data.partyOrGroupNo, '_blank');
        }
    };
    // ---------------以下保留之前代码-------------------------------
    // 进入审批
    HandlingMmattersItemsComponent.prototype.toDisposeSchedule = function (item) {
        this.commfunc.doDeal(item);
    };
    HandlingMmattersItemsComponent.prototype.queryTaskNoteMessage = function (queryType, taskCategoryId) {
        var _this = this;
        var param = {
            queryType: queryType,
            taskCategoryId: taskCategoryId
        };
        this.httpService.queryTaskNoteMessage(param).subscribe(function (data) {
            if (data.returnCode.code = 'success') {
                //查询条件
                if (queryType == '1') {
                    _this.queryList = [];
                    if (data.taskNoteMessageList && data.taskNoteMessageList.length > 0) {
                        var item = data.taskNoteMessageList[0]['textMsg'];
                        for (var i in item) {
                            var obj = {};
                            if (item.hasOwnProperty(i)) {
                                obj['i'] = item[i].split('|')[0];
                                obj['key'] = '';
                                obj['label'] = item[i].split('|')[1];
                                _this.queryList.push(obj);
                                _this.queryList = lodash__WEBPACK_IMPORTED_MODULE_13__["clone"](_this.queryList);
                            }
                        }
                    }
                    else {
                        _this.queryList = [];
                    }
                    _this.queryList.push({ i: "startUserId", key: "", label: "发起人" }, { i: "createDateFrom", key: "", label: "创建起始日期" }, { i: "createDateTo", key: "", label: "创建截止日期" });
                    console.log(_this.queryList);
                }
                //查询表头
                if (queryType == '2') {
                    _this.tableTitleListonly = [];
                    _this.tableTitleList = [];
                    var item = void 0;
                    if (_this.itemType && _this.itemType == 'SXSX') {
                        _this.tableTitleListonly.push({ field: "littleClassName", header: "事项名称" });
                    }
                    item = lodash__WEBPACK_IMPORTED_MODULE_13__["clone"](data.taskNoteMessageList[0]['textMsg']);
                    for (var i in item) {
                        var obj = {};
                        if (item.hasOwnProperty(i)) {
                            obj['field'] = item[i].split('|')[0];
                            obj['header'] = item[i].split('|')[1];
                            _this.tableTitleList.push(obj);
                        }
                    }
                    console.log(_this.tableTitleList);
                }
                _this.paramNUM = '2';
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HandlingMmattersItemsComponent.prototype, "inNav", void 0);
    HandlingMmattersItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'handling-matters-items',
            template: __webpack_require__(/*! ./handling-matters-items.component.html */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters-items/handling-matters-items.component.html"),
            styles: [__webpack_require__(/*! ./handling-matters-items.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters-items/handling-matters-items.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomeHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_7__["CreditCcmService"], app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_8__["ProcessInstanceManagementService"], app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"], primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_10__["MessageService"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_11__["CommonHttpService"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomeHttpService"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"],
            app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_7__["CreditCcmService"],
            app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_8__["ProcessInstanceManagementService"]])
    ], HandlingMmattersItemsComponent);
    return HandlingMmattersItemsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"module\" id='appR'>\r\n    <div class=\"ui-g-12\" *ngIf=\"!nodata\">\r\n        <div class=\"ui-g-2\">\r\n            <div class=\"div2\">\r\n                <div class=\"middle\">\r\n                    <div class=\"leftMenu\">\r\n                        <div class=\"menu_list\">\r\n                            <ul>\r\n                                <li class=\"\" *ngFor=\"let pro of ulData\">\r\n                                    <img class=\"xiala\" src=\"../../../../../../assets/layout/images/menu.png\" />\r\n                                    <p title='{{pro.bigClassName}}' class=\"fuMenu\" style=\"display:flex;\">\r\n                                        <span style='flex:1;'> {{pro.bigClassName}}</span>\r\n                                        <span style=\"color:red!important;\" *ngIf=\"pro.bigtimeOutCount!=0\">{{pro.bigtimeOutCount}}</span>\r\n                                        <i *ngIf=\"pro.bigtimeOutCount!=0\">|</i>\r\n                                        <span style=\"margin-right:10px;\">{{pro.bigsysCount}}</span>\r\n                                    </p>\r\n                                    <div class=\"div1\">\r\n                                        <p title=\"{{nav.littleClassName}}\" (click)='navclick(nav)' class=\"zcd\" *ngFor=\"let nav of pro.childpage\">\r\n                                            <!-- <span class='ct'>T</span>\r\n                                            <span class='ct'>C</span> -->\r\n                                            <span class=\"littlename\"> {{nav.littleClassName}}</span>\r\n                                            <span style=\"color:red!important;\" *ngIf=\"nav.timeOutCount!=0\">{{nav.timeOutCount}}</span>\r\n                                            <i *ngIf=\"nav.timeOutCount!=0\">|</i>\r\n                                            <span style=\"margin-right:10px;\">{{nav.sysCount}}</span>\r\n                                        </p>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-10\">\r\n            <handling-matters-items *ngIf=\"disinNav\" [inNav]=\"inNav\"></handling-matters-items>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"nodata\" class=\"noData\"></div>\r\n</div>\r\n<!-- 旋转 -->\r\n<div class=\"ui-g-12\" *ngIf=\"maskLayer\">\r\n    <div id=\"popWindow\" class=\"popWindow\" style=\"display:block\"></div>\r\n    <div class=\"maskLayer ui-g-12\">\r\n        <img src=\"../../../../../../../../assets/layout/images/loading1.gif\" alt=\"\" class=\"maskLayer\">\r\n    </div>\r\n</div>\r\n<!--提示消息-->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .tit {\n  text-align: right; }\n\n.module .btn {\n  text-align: center; }\n\n.module .div2 {\n  background-color: #fff;\n  height: 600px;\n  position: relative;\n  padding: 10px; }\n\n.module .div2:after {\n    content: ' ';\n    border-right: 2px solid #efefef;\n    display: inline-block;\n    width: 2px;\n    height: 97%;\n    position: absolute;\n    right: 13px;\n    top: 3%; }\n\n.module .div2 li {\n    list-style: none; }\n\n.module .pd4 {\n  padding: 7px 0 !important; }\n\n:host/deep/ .ui-panel .ui-panel-titlebar {\n  background-color: white !important;\n  border-bottom: 1px solid white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS9oYW5kbGluZy1tYXR0ZXJzL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxccmVtaW5kZXItZG9cXGJhY2tsb2ctZGV0YWlsXFxidG4tcGFnZVxcaGFuZGxpbmctbWF0dGVyc1xcaGFuZGxpbmctbWF0dGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGlCQUFpQixFQUFBOztBQUZ6QjtFQUtRLGtCQUFrQixFQUFBOztBQUwxQjtFQVFRLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFYckI7SUFhWSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTyxFQUFBOztBQXBCbkI7SUF1QlksZ0JBQ0osRUFBQTs7QUF4QlI7RUEyQlEseUJBQXlCLEVBQUE7O0FBR2pDO0VBQ0ksa0NBQWtDO0VBQ2xDLHlDQUF5QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS9oYW5kbGluZy1tYXR0ZXJzL2hhbmRsaW5nLW1hdHRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kdWxle1xyXG4gICAgLnRpdHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRpdjIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyAnO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTclO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICB0b3A6IDMlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wZDR7XHJcbiAgICAgICAgcGFkZGluZzogN3B4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG46aG9zdC9kZWVwLyAudWktcGFuZWwgLnVpLXBhbmVsLXRpdGxlYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: HandlingMattersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandlingMattersComponent", function() { return HandlingMattersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_handling_matters_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean/handling-matters.bean */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/bean/handling-matters.bean.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
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

 //事项类型的接口







/**
 * 办结事项
 */
var HandlingMattersComponent = /** @class */ (function () {
    function HandlingMattersComponent(router, routeInfo, cusOperationHttpService, customeHttpService, activatedRouter, commfunc, sanitizer) {
        this.router = router;
        this.routeInfo = routeInfo;
        this.cusOperationHttpService = cusOperationHttpService;
        this.customeHttpService = customeHttpService;
        this.activatedRouter = activatedRouter;
        this.commfunc = commfunc;
        this.sanitizer = sanitizer;
        this.disinNav = false;
        this.list = []; //接收后台数据
        this.startTime = null;
        this.endTime = null;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["CALENDAR_CN"]; //讲英文转化为中文
        this.userId = '';
        //提示信息
        this.msgs = [];
        this.taskpoolPageBean = new _bean_handling_matters_bean__WEBPACK_IMPORTED_MODULE_5__["taskpoolPageBean"]();
        this.ulData = [];
        this.nodata = false;
        this.maskLayer = true;
        this.codeValues(); //调用方法，获取全部码值
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
    }
    HandlingMattersComponent.prototype.ngOnInit = function () {
        var _this = this;
        //判断是否是总行或者集团
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var a = commonHeader.extParam.operatingLevel;
        this.activatedRouter.queryParams.subscribe(function (params) {
            _this.flag = params.flag;
            _this.num = params.totalNum;
            if (params.startDate) {
                _this.startDate = params.startDate;
                _this.endDate = params.endDate;
                console.log(_this.startDate, _this.endDate);
            }
        });
        this.queryNewList();
        if (this.commfunc.getSessionDataCH('markFlag')) {
            this.commfunc.clearSession('markFlag');
        }
        if (this.commfunc.getSessionDataCH('taskId')) {
            this.commfunc.clearSession('taskId');
        }
        if (this.commfunc.getSessionDataCH('bpmQueryTaskOnlyList')) {
            this.commfunc.clearSession('bpmQueryTaskOnlyList');
        }
    };
    HandlingMattersComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    // 查询列表
    HandlingMattersComponent.prototype.queryNewList = function () {
        var _this = this;
        this.nodata = false;
        this.maskLayer = true;
        var nodeType;
        var bussinessWhere;
        var startUserId;
        var session = window.sessionStorage;
        if (session.getItem('bussinessWhere')) {
            var bussinessWhere_1 = session.getItem('bussinessWhere');
            if (bussinessWhere_1.indexOf('startUserId') != -1) {
                var t = bussinessWhere_1.split('=');
                this.startUserId = t[1];
            }
            else {
                this.bussinessWhere = bussinessWhere_1;
            }
        }
        if (session.getItem('month')) {
            this.startDate = JSON.parse(session.getItem('month')).startDate;
            this.endDate = JSON.parse(session.getItem('month')).endDate;
            this.bussinessWhere = "'" + this.startDate + "' <" + "create_date" + ' and create_date' + "<'" + this.endDate + "'";
        }
        if (this.bussinessWhere) {
            bussinessWhere = this.bussinessWhere;
        }
        if (this.startUserId) {
            startUserId = this.startUserId;
        }
        var pram = {
            nodeType: nodeType,
            isEndProcess: true,
            userId: JSON.parse(this.commfunc.getSessionData('commonHeader')).userId,
            pageRows: 10000,
            curPage: 1,
            bussinessWhere: bussinessWhere,
            startUserId: startUserId
        };
        this.customeHttpService.bpmQueryTaskOnlyCountGroup(pram).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                if (data.pageData.result && data.pageData.result.length > 0) {
                    _this.list = data.pageData.result;
                    _this.approve(_this.list);
                }
                else {
                    _this.nodata = true;
                    jquery__WEBPACK_IMPORTED_MODULE_6__('#appR').height(700);
                    _this.maskLayer = false;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    HandlingMattersComponent.prototype.approve = function (list) {
        var _this = this;
        var approvelist = [];
        if (this.list.length > 0) {
            var _loop_1 = function (i) {
                var element = this_1.list[i];
                var filterResult = approvelist.filter(function (x) { return x.bigClassNo == element['bigClassNo']; });
                var exist = filterResult && filterResult.length;
                var temp = null;
                if (exist) {
                    temp = {
                        littleClassName: element['littleClassName'],
                        littleClassNo: element['littleClassNo'],
                        sysCount: element['sysCount'],
                        timeOutCount: element['timeOutCount'],
                        urgentCount: element['urgentCount'],
                        systemCode: element['systemCode']
                    };
                    filterResult[0].childpage.push(temp);
                    filterResult[0].bigsysCount = filterResult[0].bigsysCount + element['sysCount'];
                }
                else {
                    temp = {
                        bigClassName: element['bigClassName'],
                        bigClassNo: element['bigClassNo'],
                        bigsysCount: element['sysCount'],
                        bigtimeOutCount: element['timeOutCount'],
                        bigurgentCount: element['urgentCount'],
                        childpage: [
                            {
                                littleClassName: element['littleClassName'],
                                littleClassNo: element['littleClassNo'],
                                sysCount: element['sysCount'],
                                timeOutCount: element['timeOutCount'],
                                urgentCount: element['urgentCount'],
                                systemCode: element['systemCode']
                            }
                        ]
                    };
                    approvelist.push(temp);
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.list.length; i++) {
                _loop_1(i);
            }
            this.ulData = approvelist;
            var session = window.sessionStorage;
            if (session.getItem('workliuCode')) {
                var f = session.getItem('workliuCode');
                var d = f.split('&');
                if (!approvelist[d[0]]) {
                    d[0] = '0';
                    d[1] = '0';
                }
                else if (!approvelist[d[1]]) {
                    d[1] = '0';
                }
                var a = d[0] + '&' + d[1];
                session.setItem('workliuCode', a);
                this.inNav = approvelist[d[0]].childpage[d[1]];
            }
            else {
                this.inNav = approvelist[0].childpage[0];
            }
            setTimeout(function () {
                _this.start();
                _this.maskLayer = false;
            }, 1500);
            this.disinNav = true;
        }
    };
    HandlingMattersComponent.prototype.navclick = function (item) {
        if (this.commfunc.getSessionDataCH('workliuCode')) {
            this.commfunc.clearSession('workliuCode');
            this.commfunc.clearSession('workliuData');
        }
        for (var t = 0; t < this.ulData.length; t++) {
            for (var j = 0; j < this.ulData[t].childpage.length; j++) {
                if (this.ulData[t].childpage[j].littleClassNo == item.littleClassNo) {
                    var session = window.sessionStorage;
                    var a = t + '&' + j;
                    var b = JSON.stringify(item);
                    session.setItem('workliuCode', a);
                    session.setItem('workliuData', b);
                    break;
                }
            }
        }
        this.inNav = item;
    };
    //码值
    HandlingMattersComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    HandlingMattersComponent.prototype.start = function () {
        jquery__WEBPACK_IMPORTED_MODULE_6__(document).ready(function () {
            var session = window.sessionStorage;
            if (session.getItem('bussinessWhere')) {
                jquery__WEBPACK_IMPORTED_MODULE_6__('.menu_list ul li').eq(0).children('.div1').show().children('.zcd').eq(0).addClass('removes');
            }
            else if (session.getItem('workliuCode')) {
                var f = session.getItem('workliuCode');
                var d = f.split('&');
                jquery__WEBPACK_IMPORTED_MODULE_6__('.menu_list ul li').eq(d[0]).children('.div1').show().children('.zcd').eq(d[1]).addClass('removes');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_6__('.menu_list ul li').eq(0).children('.div1').show().children('.zcd').eq(0).addClass('removes');
            }
            //绑定元素点击事件
            jquery__WEBPACK_IMPORTED_MODULE_6__(".menu_list ul li").click(function () {
                //判断对象是显示还是隐藏
                if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".div1").is(":hidden")) {
                    //表示隐藏
                    if (!jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".div1").is(":animated")) {
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".xiala").css({ 'transform': 'rotate(180deg)' });
                        //如果当前没有进行动画，则添加新动画
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".div1").animate({
                            height: 'show'
                        }, 200)
                            //siblings遍历div1的元素
                            .end().siblings().find(".div1").hide(200);
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).siblings().children(".xiala").css({ 'transform': 'rotate(360deg)' });
                    }
                }
                else {
                    //表示显示
                    if (!jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".div1").is(":animated")) {
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".xiala").css({ 'transform': 'rotate(360deg)' });
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".div1").animate({
                            height: 'hide'
                        }, 200)
                            .end().siblings().find(".div1").hide(200);
                    }
                }
            });
            //阻止事件冒泡，子元素不再继承父元素的点击事件
            jquery__WEBPACK_IMPORTED_MODULE_6__('.div1').click(function (e) {
                e.stopPropagation();
            });
            //点击子菜单为子菜单添加样式，并移除所有其他子菜单样式
            jquery__WEBPACK_IMPORTED_MODULE_6__(".menu_list ul li .div1 .zcd").click(function () {
                //设置当前菜单为选中状态的样式，并移除同类同级别的其他元素的样式
                jquery__WEBPACK_IMPORTED_MODULE_6__(this).addClass("removes").siblings().removeClass("removes");
                //遍历获取所有父菜单元素
                jquery__WEBPACK_IMPORTED_MODULE_6__(".div1").each(function () {
                    //判断当前的父菜单是否是隐藏状态
                    if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).is(":hidden")) {
                        //如果是隐藏状态则移除其样式
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".zcd").removeClass("removes");
                    }
                });
            });
        });
    };
    HandlingMattersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'handling-matters',
            template: __webpack_require__(/*! ./handling-matters.component.html */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters.component.html"),
            styles: [__webpack_require__(/*! ./handling-matters.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/handling-matters/handling-matters.component.scss"), __webpack_require__(/*! ./../menu-tree-ul.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/menu-tree-ul.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomeHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomeHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]])
    ], HandlingMattersComponent);
    return HandlingMattersComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/menu-tree-ul.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/menu-tree-ul.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".middle {\n  width: 100%;\n  margin: 0px auto; }\n\n.middle .leftMenu {\n  width: 100%;\n  height: auto;\n  float: left; }\n\n.middle .leftMenu .topMenu {\n  height: 42px;\n  background-color: #0065a5; }\n\n.middle .leftMenu .topMenu img {\n  margin: 11px;\n  float: left; }\n\n.middle .leftMenu .topMenu .changeMenu {\n  cursor: pointer; }\n\n.middle .leftMenu .topMenu .banshi {\n  padding-left: 23px; }\n\n.middle .leftMenu .topMenu .menuTitle {\n  text-align: center;\n  color: #424242;\n  float: left;\n  line-height: 42px;\n  font-size: 16px;\n  width: 120px; }\n\n.menu_list {\n  width: 100%; }\n\n.menu_list ul {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    width: 100%; }\n\n.menu_list ul li {\n  display: block;\n  text-align: center;\n  width: 100%; }\n\n.menu_list ul li .fuMenu {\n  font-size: 13px;\n  cursor: pointer;\n  height: 45px;\n  line-height: 45px;\n  text-align: left;\n  width: calc(100% - 20px);\n  float: right;\n  margin: 0;\n  padding: 0;\n  font-weight: bolder;\n  color: #000; }\n\n.menu_list ul li .fuMenu > span:nth-child(1) {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 13px; }\n\n.menu_list ul li .xiala {\n  float: left;\n  margin-left: 0;\n  margin-top: 20px; }\n\n.menu_list ul li .div1 {\n  width: 100%;\n  height: auto;\n  float: left; }\n\n.menu_list ul li .div1 .zcd {\n  color: #424242;\n  font-size: 13px;\n  height: 36px;\n  cursor: pointer;\n  line-height: 36px;\n  text-align: left;\n  width: calc(100% - 10px);\n  margin: 0 0;\n  padding: 0 0;\n  float: right;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-right: 1px;\n  border-radius: 18px; }\n\n.menu_list ul li .div1 .zcd .littlename {\n    flex: 1;\n    margin-left: 10px;\n    width: calc(100% - 30px);\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap; }\n\n.menu_list ul li .div1 .zcd .ct {\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    border: 1px solid #0FB9EF;\n    line-height: 14px;\n    text-align: center;\n    color: #0FB9EF; }\n\n.menu_list ul li .div1 .zcd > span:nth-child(1) {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin-left: 5px; }\n\n.div1 {\n  height: 200px;\n  display: none; }\n\n.menu_list ul li .div1 .zcd:hover {\n  color: #0FB9EF !important;\n  background-color: #d2f1ef; }\n\n.removes {\n  color: #0FB9EF !important;\n  background-color: #d2f1ef; }\n\n.search {\n  width: 320px;\n  display: flex;\n  flex-direction: row;\n  float: right;\n  margin-top: -40px;\n  margin-right: 20px; }\n\n.search .opt {\n    width: 100px; }\n\n.search .header-query-more {\n    position: relative;\n    vertical-align: middle;\n    left: 30px; }\n\n.search .header-query-more.header-quert-input {\n      height: 22px;\n      line-height: 22px;\n      border-radius: 5px;\n      font-size: 15px;\n      border: 1px solid #d2d2d2; }\n\n.search .header-query-more.header-quert-input input {\n        height: 16px;\n        line-height: 16px;\n        font-size: 15px;\n        -webkit-appearance: button;\n        outline: none;\n        text-indent: 5px;\n        width: calc(100% - 20px);\n        width: -moz-calc(100% - 20px);\n        text-overflow: ellipsis;\n        border: none; }\n\n.search .header-query-more.header-quert-input input:focus {\n          border: none; }\n\n.search .header-query-more.header-quert-input img {\n        position: absolute;\n        right: 4px;\n        width: 14px;\n        height: 14px;\n        top: 4px; }\n\n.noData {\n  position: fixed;\n  top: 300px;\n  left: 50%;\n  transform: translate(0, -50%);\n  z-index: 100; }\n\n.popWindow {\n  background-color: #000;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: .5;\n  z-index: 888888888;\n  position: absolute; }\n\n.maskLayer {\n  position: absolute;\n  width: 550px;\n  height: 400px;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  z-index: 999999999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXHJlbWluZGVyLWRvXFxiYWNrbG9nLWRldGFpbFxcYnRuLXBhZ2VcXG1lbnUtdHJlZS11bC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFFakI7RUFDQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFFWjtFQUNDLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFFMUI7RUFDQyxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUVaO0VBQ0MsZUFBZSxFQUFBOztBQUVoQjtFQUNDLGtCQUFrQixFQUFBOztBQUVuQjtFQUNDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUViO0VBQ0MsV0FBVyxFQUFBOztBQURaO0lBR1EsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVcsRUFBQTs7QUFHbkI7RUFDQyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFFWjtFQUNDLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3JCLFlBQVk7RUFDWixTQUFTO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7O0FBWFo7SUFhRSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0MsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFFakI7RUFDQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFFWjtFQUNDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQWhCcEI7SUFrQkUsT0FBTTtJQUNOLGlCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTs7QUF2QnJCO0lBMEJFLFdBQVU7SUFDVixZQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixpQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWUsRUFBQTs7QUFoQ2pCO0lBb0NFLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQixFQUFBOztBQUdsQjtFQUNDLGFBQWE7RUFDYixhQUFhLEVBQUE7O0FBRWQ7RUFDQyx5QkFBeUI7RUFDdEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0MseUJBQXlCO0VBQ3pCLHlCQUF5QixFQUFBOztBQUcxQjtFQUNDLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBTm5CO0lBUUUsWUFBWSxFQUFBOztBQVJkO0lBV0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixVQUFTLEVBQUE7O0FBYlg7TUFlRyxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YseUJBQXlCLEVBQUE7O0FBbkI1QjtRQXFCSSxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZiwwQkFBMEI7UUFDMUIsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQix3QkFBd0I7UUFFeEIsNkJBQTZCO1FBQzdCLHVCQUF1QjtRQUN2QixZQUFZLEVBQUE7O0FBL0JoQjtVQWlDSyxZQUFZLEVBQUE7O0FBakNqQjtRQXFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFdBQVc7UUFDWCxZQUFZO1FBQ1osUUFBUSxFQUFBOztBQUtaO0VBQ0MsZUFBZTtFQUNmLFVBQVM7RUFDVCxTQUFRO0VBQ1IsNkJBQThCO0VBQzlCLFlBQVcsRUFBQTs7QUFHVjtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFDRixFQUFBOztBQUNGO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFhO0VBQ2IsT0FBTztFQUNQLE1BQU07RUFDTixTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7RUFDWixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vcmVtaW5kZXItZG8vYmFja2xvZy1kZXRhaWwvYnRuLXBhZ2UvbWVudS10cmVlLXVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5taWRkbGV7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luOiAwcHggYXV0bztcclxufVxyXG4ubWlkZGxlIC5sZWZ0TWVudXtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLm1pZGRsZSAubGVmdE1lbnUgLnRvcE1lbnV7XHJcblx0aGVpZ2h0OiA0MnB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDY1YTU7XHJcbn1cclxuLm1pZGRsZSAubGVmdE1lbnUgLnRvcE1lbnUgaW1ne1xyXG5cdG1hcmdpbjogMTFweDtcclxuXHRmbG9hdDogbGVmdDtcclxufVxyXG4ubWlkZGxlIC5sZWZ0TWVudSAudG9wTWVudSAuY2hhbmdlTWVudXtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1pZGRsZSAubGVmdE1lbnUgLnRvcE1lbnUgLmJhbnNoaXtcclxuXHRwYWRkaW5nLWxlZnQ6IDIzcHg7XHJcbn1cclxuLm1pZGRsZSAubGVmdE1lbnUgLnRvcE1lbnUgLm1lbnVUaXRsZXtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6ICM0MjQyNDI7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0bGluZS1oZWlnaHQ6IDQycHg7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdHdpZHRoOiAxMjBweDtcclxufVxyXG4ubWVudV9saXN0IHtcclxuXHR3aWR0aDogMTAwJTtcclxuICAgIHVse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG4ubWVudV9saXN0IHVsIGxpe1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG4ubWVudV9saXN0IHVsIGxpIC5mdU1lbnV7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRoZWlnaHQ6IDQ1cHg7XHJcblx0bGluZS1oZWlnaHQ6IDQ1cHg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHR3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdGNvbG9yOiAjMDAwO1xyXG5cdCY+c3BhbjpudGgtY2hpbGQoMSl7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdH1cclxufVxyXG4ubWVudV9saXN0IHVsIGxpIC54aWFsYXtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5tZW51X2xpc3QgdWwgbGkgLmRpdjEge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRmbG9hdDogbGVmdDtcclxufVxyXG4ubWVudV9saXN0IHVsIGxpIC5kaXYxIC56Y2R7XHJcblx0Y29sb3I6ICM0MjQyNDI7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdGhlaWdodDogMzZweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0bGluZS1oZWlnaHQ6IDM2cHg7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHR3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcblx0bWFyZ2luOiAwIDA7XHJcblx0cGFkZGluZzogMCAwO1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luLXJpZ2h0OiAxcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMThweDtcclxuXHQubGl0dGxlbmFtZXtcclxuXHRcdGZsZXg6MTtcclxuXHRcdG1hcmdpbi1sZWZ0OjEwcHg7XHJcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdH1cclxuXHQuY3R7XHJcblx0XHR3aWR0aDoxNHB4O1xyXG5cdFx0aGVpZ2h0OjE0cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjMEZCOUVGO1xyXG5cdFx0bGluZS1oZWlnaHQ6MTRweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAgIzBGQjlFRjtcclxuXHRcclxuXHR9XHJcblx0Jj5zcGFuOm50aC1jaGlsZCgxKXtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHRtYXJnaW4tbGVmdDogNXB4O1xyXG5cdH1cclxufVxyXG4uZGl2MSB7XHJcblx0aGVpZ2h0OiAyMDBweDtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbi5tZW51X2xpc3QgdWwgbGkgLmRpdjEgLnpjZDpob3ZlcnsgXHJcblx0Y29sb3I6ICMwRkI5RUYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmYxZWY7IFxyXG4gICAgLy8gd2lkdGg6Y2FsYygxMDAlIC0gMjBweCk7XHJcbn1cclxuLnJlbW92ZXN7XHJcblx0Y29sb3I6ICMwRkI5RUYgIWltcG9ydGFudDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmMWVmOyBcclxuXHQvLyB3aWR0aDpjYWxjKDEwMCUgLSAyMHB4KSFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaHtcclxuXHR3aWR0aDogMzIwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGZsb2F0OiByaWdodDtcclxuXHRtYXJnaW4tdG9wOiAtNDBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblx0Lm9wdHtcclxuXHRcdHdpZHRoOiAxMDBweDtcclxuXHR9XHJcblx0LmhlYWRlci1xdWVyeS1tb3JlIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0XHRsZWZ0OjMwcHg7XHJcblx0XHQmLmhlYWRlci1xdWVydC1pbnB1dCB7XHJcblx0XHRcdGhlaWdodDogMjJweDtcclxuXHRcdFx0bGluZS1oZWlnaHQ6IDIycHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZDJkMmQyO1xyXG5cdFx0XHRpbnB1dCB7XHJcblx0XHRcdFx0aGVpZ2h0OiAxNnB4O1xyXG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTVweDtcclxuXHRcdFx0XHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxuXHRcdFx0XHRvdXRsaW5lOiBub25lO1xyXG5cdFx0XHRcdHRleHQtaW5kZW50OiA1cHg7XHJcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG5cdFx0XHRcdHdpZHRoOiAtd2Via2l0LWNhbGMoMTAwJSAtIDIwcHgpO1xyXG5cdFx0XHRcdHdpZHRoOiAtbW96LWNhbGMoMTAwJSAtIDIwcHgpO1xyXG5cdFx0XHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHQmOmZvY3VzIHtcclxuXHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aW1nIHtcclxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0cmlnaHQ6IDRweDtcclxuXHRcdFx0XHR3aWR0aDogMTRweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDE0cHg7XHJcblx0XHRcdFx0dG9wOiA0cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLm5vRGF0YXtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOjMwMHB4O1xyXG5cdGxlZnQ6NTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKDAgLCAtNTAlKTtcclxuXHR6LWluZGV4OjEwMDtcclxufVxyXG4gIC8v6JKZ5bGCXHJcbiAgLnBvcFdpbmRvd3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIHotaW5kZXg6IDg4ODg4ODg4ODtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gIH1cclxuLm1hc2tMYXllcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOjU1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHotaW5kZXg6IDk5OTk5OTk5OTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/bean/approvePage.bean.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/bean/approvePage.bean.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ApprovePageBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovePageBean", function() { return ApprovePageBean; });
var ApprovePageBean = /** @class */ (function () {
    function ApprovePageBean() {
    }
    return ApprovePageBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approve-page.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approve-page.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n    <!-- <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">事项类型：</label>\r\n      <p-dropdown [options]=\"itemsSmallType\" [(ngModel)]=\"btnPageBean.scheduleTypeId\" placeholder='请选择' class=\"items-name\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">事项名称：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"btnPageBean.scheduleName\" class=\"input-name\">\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton label=\"查询\" (click)=\"queryClick()\"></button>\r\n    <button pButton label=\"重置\" (click)=\"cleanClick()\"></button>\r\n  </div> -->\r\n    <div class=\"ui-g-12 base-table\">\r\n        <p-dataTable [value]=\"list\" [style]=\"{'text-align':'center'}\" [emptyMessage]='tabMesg' scrollable=\"true\">\r\n            <p-column header=\"机构\" field=\"flag\" *ngIf=\"general\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span *ngIf=\"item.flag=='TZ'\">台行</span>\r\n                    <span *ngIf=\"item.flag=='CZ'\">村镇</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"事项类型\" field=\"scheduleTypeId\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span>{{item.scheduleTypeId|codeValuePie:littleEvent}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"事项名称\" field=\"scheduleName\"></p-column>\r\n            <p-column header=\"数量\" field=\"countNum\"></p-column>\r\n            <p-column header=\"操作\" field=\"\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)='toDisposeSchedule(item)' class=\"tabelDealIco\">处理</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n</div>\r\n<!--提示消息-->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approve-page.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approve-page.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .ui-g-12 {\n  background: #f7f8f9; }\n\n.module .btn {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS9vbmVIaXN0b3J5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxccmVtaW5kZXItZG9cXGJhY2tsb2ctZGV0YWlsXFxidG4tcGFnZVxcb25lSGlzdG9yeVxcb25lLWFwcHJvdmUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLG1CQUFtQixFQUFBOztBQUYzQjtFQW9CUSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vcmVtaW5kZXItZG8vYmFja2xvZy1kZXRhaWwvYnRuLXBhZ2Uvb25lSGlzdG9yeS9vbmUtYXBwcm92ZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZXtcclxuICAgIC51aS1nLTEyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmOGY5O1xyXG4gICAgICAgIC8vIC51aS1nLTYge1xyXG4gICAgICAgIC8vICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLy8gICAgbGFiZWx7XHJcbiAgICAgICAgLy8gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIC8vICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIC8vICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAvLyAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgIC8vICAgIH1cclxuICAgICAgICAvLyAgICAgLmlucHV0LW5hbWV7XHJcbiAgICAgICAgLy8gICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgLml0ZW1zLW5hbWV7XHJcbiAgICAgICAgLy8gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approve-page.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approve-page.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: OneApprovePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneApprovePageComponent", function() { return OneApprovePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_btnPage_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bean/btnPage.bean */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/bean/btnPage.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_approvePage_bean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bean/approvePage.bean */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/bean/approvePage.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //事项类型的接口







/**
 * 审批事项
 */
var OneApprovePageComponent = /** @class */ (function () {
    function OneApprovePageComponent(router, routeInfo, cusOperationHttpService, customeHttpService, activatedRouter, commfunc) {
        this.router = router;
        this.routeInfo = routeInfo;
        this.cusOperationHttpService = cusOperationHttpService;
        this.customeHttpService = customeHttpService;
        this.activatedRouter = activatedRouter;
        this.commfunc = commfunc;
        //表格中无数据时显示的内容
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        this.littleEvent = [];
        this.btnPageBean = new _bean_btnPage_bean__WEBPACK_IMPORTED_MODULE_3__["BtnPageBean"]();
        this.itemsSmallType = [];
        this.list = []; //接收后台数据
        //提示信息
        this.msgs = [];
        this.userId = '';
        this.display = false;
        this.approvePageBean = new _bean_approvePage_bean__WEBPACK_IMPORTED_MODULE_8__["ApprovePageBean"]();
        this.tableList = [];
        this.general = false;
        this.codeValues(); //调用方法，获取全部码值
        this.littleEvent = this.code['ScheduleType'];
        this.itemsSmallType = this.code['ItemType'];
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.userId = this.user.userId;
    }
    OneApprovePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //判断是否是总行或者集团
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var a = commonHeader.extParam.operatingLevel;
        if (a == 'GROUP' || a == 'GENERAL_BANK' || a == 'GENERAL_BANK_DT') {
            this.general = true;
        }
        else {
            this.general = false;
        }
        this.activatedRouter.queryParams.subscribe(function (params) {
            _this.flag = params.flag;
        });
        // this.queryCopApprTaskSum();
        // this.querySecle();
        this.approvePageBean.pageRows = 10000000;
        this.approvePageBean.curPage = 1;
        this.first = 0;
        if (this.flag == '2') {
            this.queryCopApprTaskSum();
        }
    };
    OneApprovePageComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    //客户运营-审批事项
    OneApprovePageComponent.prototype.queryCopApprTaskSum = function () {
        var _this = this;
        var param = {};
        if (this.flag == '2') {
            param = { statusId: '1' };
        }
        var ob = this.customeHttpService.queryCopApprTaskSum(param);
        ob.subscribe(function (data) {
            _this.list = data.resultList;
        });
    };
    // 初始页码查询
    OneApprovePageComponent.prototype.querySecle = function () {
        this.queryCopApprTaskSum();
    };
    //点击审批按钮
    OneApprovePageComponent.prototype.toDisposeSchedule = function (item) {
        var _this = this;
        if (item.url && item.url != '') {
            //信贷工作任务处理
            var timestamp_1 = new Date().getTime();
            var target = "custLinkForm" + timestamp_1;
            // this.commfunc.createBlank(target);
            //审批事项中的信贷
            var user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            var userId_1 = user.userId;
            var targetId_1 = user.targetId;
            var params = {
                userId: this.userId,
                sysCode: '122',
                casServerLoginUrl: 'http://10.1.39.140:8011/searchPaymentTool',
                serverName: 'ywsn',
                validateType: '0',
                extraInfo: 'ywsn',
                encryptType: 'HS256',
            };
            this.customeHttpService.tokenApply(params).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var token = data.tokenCode;
                    if (targetId_1 == '101010') {
                        _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_HTTP_XIN"];
                    }
                    else if (targetId_1 == '101011') {
                        _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_HTTP_XIN_C"];
                    }
                    var url = _this.HTTPIPDress + 'plats/FrontController?urlParam=' + item.url + '&suid=' + userId_1 + '&token=' + token;
                    console.log(url);
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_1, features, closeOnLoseFocus);
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
            if (item.systemCode) {
                this.commfunc.setSessionDataCH('systemCode', JSON.stringify(item.systemCode));
            }
            if (this.flag == '1' || !this.flag) {
                this.router.navigate(['/pages/tzb/custom/reminder-do/backlog-detail/btn-page/one-approved-items', { scheduleTypeId: item.scheduleTypeId, scheduleName: item.scheduleName }], { queryParams: { flag: this.flag, 'id': '2' } });
            }
            if (this.flag == '2') {
                this.router.navigate(['/pages/tzb/custom/reminder-do/backlog-detail/btn-pages/one-approved-items', { scheduleTypeId: item.scheduleTypeId, scheduleName: item.scheduleName }], { queryParams: { flag: this.flag, 'id': '2' } });
            }
        }
    };
    //码值
    OneApprovePageComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    OneApprovePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-one-approve-page',
            template: __webpack_require__(/*! ./one-approve-page.component.html */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approve-page.component.html"),
            styles: [__webpack_require__(/*! ./one-approve-page.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approve-page.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_5__["CustomeHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_5__["CustomeHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"]])
    ], OneApprovePageComponent);
    return OneApprovePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approved-items/one-approved-items.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approved-items/one-approved-items.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\" style=\"width:100%\">\r\n    <div class=\"first-name\">\r\n        <div class=\"ui-g-12 name-thing2\">\r\n            <div class=\"ui-g-4\">\r\n                <div class=\"ui-g-6\">\r\n                    <label for=\"\">客户号/群号：</label>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"taskBean.partyOrGroupNo\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <div class=\"ui-g-6\">\r\n                    <label for=\"\">客户姓名/群名：</label>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"taskBean.partyOrGroupName\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <div class=\"ui-g-12\">\r\n                    <button pButton label=\"查询\" (click)=\"doQuery()\"></button>\r\n                    <button pButton label=\"重置\" (click)=\"reclean()\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\">\r\n        <p-dataTable [value]=\"list\" [style]=\"{'text-align':'center'}\" [emptyMessage]='tabMesg' scrollable=\"true\">\r\n            <p-column header=\"事项类型\" field=\"scheduleTypeId\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    {{item.scheduleTypeId|codeValuePie:scheduleTypeId3}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"事项名称\" field=\"scheduleName\"></p-column>\r\n            <p-column header=\"发起人\" field=\"createrName\"></p-column>\r\n            <p-column header=\"客户号/群号\" field=\"partyOrGroupNo\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <a (click)=\"toCustView(item)\" class=\"custNo_a\">{{item.partyOrGroupNo}}</a>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"客户姓名/群名\" field=\"partyOrGroupName\"></p-column>\r\n            <p-column header=\"创建日期\" field=\"createDate\"></p-column>\r\n            <p-column header=\"流程实例\" field=\"processId\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span *ngIf=\"item.subSysId!=='LOAN'\">{{item.processId}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"操作\" field=\"\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)='toDisposeSchedule(item)' class=\"tableApprove\"style=\"font-size:12px;\">审批</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <div class=\"ui-g-12\" >\r\n            <p-paginator first={{first}} rows=\"{{taskBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginate($event)\"></p-paginator>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<!--提示消息-->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approved-items/one-approved-items.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approved-items/one-approved-items.component.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .btn {\n  text-align: center; }\n\n.module .custNo_a {\n  cursor: pointer;\n  color: #19b0c8; }\n\n.name-thing {\n  padding-bottom: 0; }\n\n.name-thing .ui-g-4 {\n    padding-bottom: 0; }\n\n.name-thing .ui-g-4 .ui-g-6 {\n      text-align: right; }\n\n.name-thing2 {\n  padding-bottom: 0; }\n\n.name-thing2 .ui-g-4 {\n    padding-top: 0; }\n\n.name-thing2 .ui-g-4 .ui-g-6 {\n      text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS9vbmVIaXN0b3J5L29uZS1hcHByb3ZlZC1pdGVtcy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXHJlbWluZGVyLWRvXFxiYWNrbG9nLWRldGFpbFxcYnRuLXBhZ2VcXG9uZUhpc3RvcnlcXG9uZS1hcHByb3ZlZC1pdGVtc1xcb25lLWFwcHJvdmVkLWl0ZW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFEckI7SUFHUSxpQkFBaUIsRUFBQTs7QUFIekI7TUFLVyxpQkFBaUIsRUFBQTs7QUFLNUI7RUFDSSxpQkFBaUIsRUFBQTs7QUFEckI7SUFHUSxjQUFjLEVBQUE7O0FBSHRCO01BS1csaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL3JlbWluZGVyLWRvL2JhY2tsb2ctZGV0YWlsL2J0bi1wYWdlL29uZUhpc3Rvcnkvb25lLWFwcHJvdmVkLWl0ZW1zL29uZS1hcHByb3ZlZC1pdGVtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGV7XHJcbiAgICAuYnRuIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY3VzdE5vX2F7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgfVxyXG59XHJcbi5uYW1lLXRoaW5ne1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAudWktZy00e1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIC51aS1nLTZ7XHJcbiAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLm5hbWUtdGhpbmcye1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAudWktZy00e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIC51aS1nLTZ7XHJcbiAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approved-items/one-approved-items.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approved-items/one-approved-items.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: OneApprovedItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneApprovedItemsComponent", function() { return OneApprovedItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_backlog_detail_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../bean/backlog-detail.bean */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/bean/backlog-detail.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
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
 * @author fanhualing 2018-8-1 查询审批事项
 */









var OneApprovedItemsComponent = /** @class */ (function () {
    function OneApprovedItemsComponent(customeHttpService, httpService, commfunc, router, activatedRouter) {
        this.customeHttpService = customeHttpService;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.activatedRouter = activatedRouter;
        //表格中无数据时显示的内容
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"];
        this.scheduleTypeId3 = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.list = []; //后台返回的数据
        this.items = [];
        this.temData = new Date();
        this.mesg = {};
        this.taskBean = new _bean_backlog_detail_bean__WEBPACK_IMPORTED_MODULE_5__["BacklogDetailBean"]();
        this.showFlag = true;
        this.itemsSmallType = [];
        //提示信息
        this.msgs = [];
        this.estimatedStartDateBegin = null;
        this.estimatedStartDateTo = null;
        this.first = 0; //分页控制
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.scheduleTypeId3 = this.code['ScheduleType'];
    }
    OneApprovedItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskBean.pageNum = 1;
        this.taskBean.pageSize = 10;
        var session = window.sessionStorage;
        if (session.getItem('para')) {
            session.removeItem('para');
        }
        // if(this.activatedRouter.snapshot.params['flag']=='2'){
        // 	this.taskBean.statusId = '1';
        // }
        this.activatedRouter.queryParams.subscribe(function (params) {
            if (params.flag == '2') {
                _this.taskBean.statusId = '1';
            }
            ;
        });
        this.taskBean.scheduleTypeId = this.activatedRouter.snapshot.params['scheduleTypeId'];
        this.itemsBigChange();
        this.taskBean.scheduleName = this.activatedRouter.snapshot.params['scheduleName'];
        this.doQuery();
    };
    //查询
    OneApprovedItemsComponent.prototype.doQuery = function () {
        var _this = this;
        this.customeHttpService.queryApprList(this.taskBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.total = data.total;
                _this.list = data.resultList;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    //点击客户号跳转
    OneApprovedItemsComponent.prototype.toCustView = function (data) {
        if (data.relationKey == 'party') {
            this.commfunc.setSessionData('custNo', data.partyOrGroupNo);
            window.open('#/pages/custom-view/general', '_blank');
        }
        else if (data.relationKey == 'partyGroup') {
            window.open("#/pages/tzb/custom/custom-group/custom-group-view?groupId=" + data.partyOrGroupNo, '_blank');
        }
    };
    //重置
    OneApprovedItemsComponent.prototype.reclean = function () {
        this.taskBean.partyOrGroupNo = '';
        this.taskBean.partyOrGroupName = '';
    };
    //事项大类切换
    OneApprovedItemsComponent.prototype.itemsBigChange = function () {
        var _this = this;
        var params = {
            taskTypeParentId: '03',
            taskTypeKey: 'itemsType'
        };
        this.httpService.taskTypeQry(params).subscribe(function (data) {
            var arr = data.taskTypeList;
            _this.itemsSmallType = [{ label: '请选择', value: '' }];
            if (arr) {
                arr.forEach(function (item) {
                    _this.itemsSmallType.push({ label: item.taskTypeName, value: item.taskTypeId });
                });
            }
        });
    };
    // 分页
    OneApprovedItemsComponent.prototype.paginate = function (event) {
        this.taskBean.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.taskBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.taskBean.pageSize;
        this.doQuery();
    };
    OneApprovedItemsComponent.prototype.toDisposeSchedule = function (item) {
        this.commfunc.doDealHis(item);
    };
    OneApprovedItemsComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    OneApprovedItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-one-approved-items',
            template: __webpack_require__(/*! ./one-approved-items.component.html */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approved-items/one-approved-items.component.html"),
            styles: [__webpack_require__(/*! ./one-approved-items.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/oneHistory/one-approved-items/one-approved-items.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomeHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomeHttpService"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], OneApprovedItemsComponent);
    return OneApprovedItemsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/bean/taskpoolPage.bean.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/bean/taskpoolPage.bean.ts ***!
  \**********************************************************************************************************/
/*! exports provided: taskpoolPageBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskpoolPageBean", function() { return taskpoolPageBean; });
var taskpoolPageBean = /** @class */ (function () {
    function taskpoolPageBean() {
    }
    return taskpoolPageBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool-items/bean/taskpoolItems.bean.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool-items/bean/taskpoolItems.bean.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ApprovedItemsBean, BackApproveDetailBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedItemsBean", function() { return ApprovedItemsBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackApproveDetailBean", function() { return BackApproveDetailBean; });
var ApprovedItemsBean = /** @class */ (function () {
    function ApprovedItemsBean() {
    }
    return ApprovedItemsBean;
}());

var BackApproveDetailBean = /** @class */ (function () {
    function BackApproveDetailBean() {
    }
    return BackApproveDetailBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool-items/task-pool-items.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool-items/task-pool-items.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\" style=\"width:100%\">\r\n    <div class=\"ui-g-12\" *ngIf=\"(this.queryList && this.queryList.length>0)\">\r\n        <div class=\"ui-g-4 queryHeader\" *ngFor=\"let item of queryList\" style=\"text-align:right;font-size:13px;\">\r\n            <label>{{item.label}}:</label>\r\n            <input type=\"text\" [(ngModel)]=\"item.key\" *ngIf=\"item.i != 'createDateFrom' && item.i != 'startUserId' && item.i != 'createDateTo'\">\r\n            <input type=\"text\" [(ngModel)]=\"startUserId\" *ngIf=\"item.i == 'startUserId'\">\r\n            <p-calendar class=\"calendar-name\" [showIcon]=\"true\" [(ngModel)]=\"item.key\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [showOtherMonths]=\"false\" *ngIf=\"item.i == 'createDateFrom' || item.i == 'createDateTo'\"></p-calendar>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\" *ngIf=\"(this.queryList && this.queryList.length>0)\">\r\n        <button pButton label=\"查询\" (click)=\"querySecle()\"></button>\r\n        <button pButton label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 table\">\r\n        <u-dataTable [value]=\"tableList\" [style]=\"{'text-align':'center'}\" [emptyMessage]='tabMesg' scrollable=\"true\">\r\n            <p-column [style]=\"{'width':'20px'}\">\r\n                <ng-template *ngIf=\"permissionCheck('SID00000_P013_P002')\" let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox [(ngModel)]=\"col.checkBox\" (click)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngFor=\"let pro of tableTitleListonly\" field=\"{{pro.field}}\" header=\"{{pro.header}}\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column header=\"实例编号\" field=\"processId\"></p-column>\r\n            <p-column header=\"事项名称\" field=\"littleClassName\"></p-column>\r\n\r\n            <p-column *ngFor=\"let items of tableTitleList\" field=\"{{items.field}}\" header=\"{{items.header}}\">\r\n                <ng-template *ngIf=\"!discustpool\" let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span *ngIf=\"(items.field != 'taskName')&&(items.field != 'workCreaterAgencyId') && item.varMap.dataMap\">\r\n                        <span *ngIf=\"items.field=='taskType'\">{{item.varMap.dataMap[items.field]|codeValuePie:approveParams}}</span>\r\n                        <span *ngIf=\"items.field!='taskType'\">{{item.varMap.dataMap[items.field]}}</span>\r\n                    </span>\r\n                    <span *ngIf=\"(items.field == 'taskName')&&(item.littleClassNo!='DXLC')\">{{item.taskName}}</span>\r\n                    <span *ngIf=\"(items.field == 'taskName')&&(item.littleClassNo=='DXLC')\">{{item.varMap.dataMap.taskName}}</span>\r\n                    <span *ngIf=\"items.field == 'workCreaterAgencyId'\">{{item.workCreaterAgencyName}}</span>\r\n                </ng-template>\r\n                <ng-template *ngIf=\"discustpool\" let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span *ngIf=\"items.type == '0'\">{{item.varMap.dataMap[items.field]}}</span>\r\n                    <span *ngIf=\"items.type == '1'&&items.field !='workState'\">{{item[items.field]}}</span>\r\n                    <span *ngIf=\"items.type == '1'&&items.field =='workState'\">{{item.workState | codeValuePie:workFlowState}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"发起人\" field=\"workCreaterName\"></p-column>\r\n            <p-column header=\"创建日期\" field=\"createDate\"></p-column>\r\n            <p-column header=\"处理状态\" field=\"workState\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span>{{item.workState | codeValuePie:workFlowState}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header='操作' field='' [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)='toDoExam(item)' class=\"tableApprove\" style=\"font-size:12px;\">详情</span>\r\n                    <span *ngIf=\"flage!='11'\" (click)='toDoCheckIn(item)' class=\"tabelDealIco\">领用</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </u-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"approvedItemsBean.pageRows\">\r\n        <u-paginator first={{first}} rows=\"{{approvedItemsBean.pageRows}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></u-paginator>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"!approvedItemsBean.pageRows\">\r\n        <u-paginator first={{first}} rows=\"{{backApproveDetailBean.pageRows}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></u-paginator>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <button [disabled]='bathable' *ngIf=\"flage!='11'&&permissionCheck('SID00000_P013_P002')\" pButton label=\"分配\" (click)=\"bath(1)\"></button>\r\n        <button [disabled]='bathable' *ngIf=\"flage=='11'&&permissionCheck('SID00000_P013_P002')\" pButton label=\"分配\" (click)=\"bath(2)\"></button>\r\n        <button *ngIf=\"flage=='11'&&tableList.length>0\" pButton label=\"下载\" (click)='download()'></button>\r\n    </div>\r\n</div>\r\n\r\n<!--提示消息-->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<p-dialog *ngIf=\"peopleDisplay\" header=\"任务分配给\" [(visible)]=\"peopleDisplay\" width=\"800\" [responsive]=\"true\" modal='modal'>\r\n    <app-query-user-list [in-value]=\"'0000'\" (outValue)=\"choicesaleUser($event)\"></app-query-user-list>\r\n</p-dialog>\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool-items/task-pool-items.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool-items/task-pool-items.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .btn {\n  text-align: center; }\n\n.module .custNo_a {\n  cursor: pointer;\n  color: #19b0c8; }\n\n.name-thing {\n  padding-bottom: 0; }\n\n.name-thing .ui-g-4 {\n    padding-bottom: 0; }\n\n.name-thing .ui-g-4 .ui-g-6 {\n      text-align: right; }\n\n.name-thing2 {\n  padding-bottom: 0; }\n\n.name-thing2 .ui-g-4 {\n    padding-top: 0; }\n\n.name-thing2 .ui-g-4 .ui-g-6 {\n      text-align: right; }\n\n.cont100 {\n  width: 100%;\n  height: 25px;\n  margin: 16px 0px 10px 0px; }\n\n.cont33 {\n  float: left;\n  width: 33%;\n  height: 25px; }\n\n.cont30 {\n  float: left;\n  width: 30%;\n  height: 25px;\n  line-height: 25px;\n  font-size: 14px; }\n\n.cont60 {\n  float: left;\n  width: 60%;\n  height: 25px; }\n\n.textAligin {\n  text-align: right;\n  line-height: 25px; }\n\n:host /deep/ .my-workdesk-contactf .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .my-workdesk-contactf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n:host/deep/.queryHeader .ui-calendar {\n  width: 173px; }\n\n.queryHeader input {\n  width: 173px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS90YXNrLXBvb2wvdGFzay1wb29sLWl0ZW1zL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxccmVtaW5kZXItZG9cXGJhY2tsb2ctZGV0YWlsXFxidG4tcGFnZVxcdGFzay1wb29sXFx0YXNrLXBvb2wtaXRlbXNcXHRhc2stcG9vbC1pdGVtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQixFQUFBOztBQUYxQjtFQUtRLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRHJCO0lBR1EsaUJBQWlCLEVBQUE7O0FBSHpCO01BS1csaUJBQWlCLEVBQUE7O0FBSzVCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRHJCO0lBR1EsY0FBYyxFQUFBOztBQUh0QjtNQUtXLGlCQUFpQixFQUFBOztBQU01QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL3JlbWluZGVyLWRvL2JhY2tsb2ctZGV0YWlsL2J0bi1wYWdlL3Rhc2stcG9vbC90YXNrLXBvb2wtaXRlbXMvdGFzay1wb29sLWl0ZW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZXtcclxuICAgIC5idG4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jdXN0Tm9fYXtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICB9XHJcbn1cclxuLm5hbWUtdGhpbmd7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIC51aS1nLTR7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgLnVpLWctNntcclxuICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4ubmFtZS10aGluZzJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIC51aS1nLTR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgLnVpLWctNntcclxuICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLmNvbnQxMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW46IDE2cHggMHB4IDEwcHggMHB4O1xyXG59XHJcblxyXG4uY29udDMzIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLmNvbnQzMCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNvbnQ2MCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuLnRleHRBbGlnaW4ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG5cclxuXHJcbjpob3N0IC9kZWVwLyAubXktd29ya2Rlc2stY29udGFjdGYgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAubXktd29ya2Rlc2stY29udGFjdGYgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuOmhvc3QvZGVlcC8ucXVlcnlIZWFkZXIgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxNzNweDtcclxufVxyXG4ucXVlcnlIZWFkZXIgaW5wdXR7XHJcbiAgICB3aWR0aDogMTczcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool-items/task-pool-items.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool-items/task-pool-items.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: TaskPoolItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPoolItemsComponent", function() { return TaskPoolItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_backlog_detail_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../bean/backlog-detail.bean */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/bean/backlog-detail.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_taskpoolItems_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bean/taskpoolItems.bean */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool-items/bean/taskpoolItems.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/common/service/http.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/service/http.service.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/pages/tzb/common/http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_telemarketing_http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/pages/tzb/custom/telemarketing/http/telemarketing.http.service */ "./src/app/pages/tzb/custom/telemarketing/http/telemarketing.http.service.ts");
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
 * @author fanhualing 2018-8-1 查询审批事项
 */


















var TaskPoolItemsComponent = /** @class */ (function () {
    function TaskPoolItemsComponent(commonHttpService, customeHttpService, httpService, commfunc, router, activatedRouter, confirmationService, creditCcmService, processInstanceManagementService, teleMarketingHttpService) {
        var _this = this;
        this.commonHttpService = commonHttpService;
        this.customeHttpService = customeHttpService;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.confirmationService = confirmationService;
        this.creditCcmService = creditCcmService;
        this.processInstanceManagementService = processInstanceManagementService;
        this.teleMarketingHttpService = teleMarketingHttpService;
        this.approvedItemsBean = new _bean_taskpoolItems_bean__WEBPACK_IMPORTED_MODULE_7__["ApprovedItemsBean"]();
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"];
        this.scheduleTypeId3 = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.itemsSmallType = [];
        this.msgs = [];
        this.first = 0;
        this.tableList = [];
        this.approveParams = [];
        this.workFlowState = [];
        this.taskBean = new _bean_backlog_detail_bean__WEBPACK_IMPORTED_MODULE_5__["BacklogDetailBean"]();
        this.tableTitleList = [];
        this.queryList = [];
        this.creditApproveDisplay = false;
        this.stopFlag = true;
        this.creditApproveDisplay1 = false;
        this.creditApproveDisplay2 = false;
        this.peopleDisplay = false;
        this.mus = [];
        this.bathable = true;
        this.discustpool = false;
        // 处理好的数据
        this.custpoolarray = [
            { i: "query_Indexb", key: "", label: "客户群号" },
            { i: "query_Indexc", key: "", label: "客户群名称" },
            // { i: "doTaskActor", key: "", label: "业务处理人" },
            // { i: "workType", key: "", label: "审批状态" },
            // { i: "startDate", key: "", label: "创建起始时间" },
            // { i: "endDate", key: "", label: "创建截止时间" },
            // { i: "workCreaterAgencyName", key: "", label: "任务发起机构" },
            { i: "startUserId", key: "", label: "发起人" },
            { i: "createDateFrom", key: "", label: "创建起始日期" },
            { i: "createDateTo", key: "", label: "创建截止日期" }
        ];
        this.custpooltitle = [
            { field: "groupId", header: "客户群号", type: '0' },
            { field: "groupName", header: "客户群名称", type: '0' },
            { field: "doTaskActor", header: "业务处理人", type: '1' },
            // { field: "workState", header: "审批状态", type: '1' },
            { field: "updateDate", header: "处理时间", type: '1' },
            { field: "workCreaterAgencyName", header: "任务发起机构", type: '1' },
        ];
        //事项小类动态业务数据展示
        /**
         *
         * @param queryType 查询类型：0-查询条件;1-表头
         * @param taskCategoryId 流程模板编号
         * @param nodeCode 流程节点编号
         */
        this.tableTitleListonly = [];
        this.codeValues();
        this.scheduleTypeId3 = this.code['ScheduleType'];
        this.itemsSmallType = this.code['ItemType'];
        this.approveParams = this.code['approveParams'];
        this.workFlowState = [
            { value: "", label: "请选择" },
            { value: "0", label: "未处理" },
            { value: "1", label: "已处理" },
        ];
        activatedRouter.queryParams.subscribe(function (queryParams) {
            _this.flage = queryParams.totalNum;
        });
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
    }
    TaskPoolItemsComponent.prototype.ngOnInit = function () {
        this.pageInit();
    };
    TaskPoolItemsComponent.prototype.ngOnChanges = function () {
        this.pageInit();
    };
    TaskPoolItemsComponent.prototype.pageInit = function () {
        if (this.commfunc.getSessionDataCH('saveMSGIdentyfy') && this.commfunc.getSessionDataCH('saveMSGIdentyfy') == 'true') {
            this.commfunc.clearSession('saveMSGIdentyfy');
        }
        this.paramNUM = '1';
        var session = window.sessionStorage;
        if (session.getItem('para')) {
            session.removeItem('para');
        }
        this.querySecle('1');
    };
    TaskPoolItemsComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    TaskPoolItemsComponent.prototype.querySecle = function (isOnit) {
        var param = '';
        if (isOnit != '1') { // 如果非初始化查询
            for (var _i = 0, _a = this.queryList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.key && item.i) {
                    // debugger
                    if (!param && item.i != 'createDateFrom' && item.i != 'createDateTo') {
                        param = item.i + "=" + ("'" + item.key + "'");
                    }
                    else if (param && item.i != 'createDateFrom' && item.i != 'createDateTo') {
                        param = param + (" and " + item.i + "=" + ("'" + item.key + "'"));
                    }
                    else if (!param && item.i == 'createDateFrom' && item.key) {
                        item.key = this.commfunc.transDateN(item.key);
                        param = "create_date>" + ("'" + item.key + "'");
                    }
                    else if (!param && item.i == 'createDateTo' && item.key) {
                        item.key = this.commfunc.transDateN(item.key);
                        param = "create_date<" + ("'" + item.key + "'");
                    }
                    else if (param && item.i == 'createDateFrom' && item.key) {
                        item.key = this.commfunc.transDateN(item.key);
                        param = param + (" and create_date > " + ("'" + item.key + "'"));
                    }
                    else if (param && item.i == 'createDateTo' && item.key) {
                        item.key = this.commfunc.transDateN(item.key);
                        param = param + (" and create_date < " + ("'" + item.key + "'"));
                    }
                }
            }
        }
        this.approvedItemsBean.bussinessWhere = param;
        this.first = 0;
        this.approvedItemsBean.curPage = 1;
        this.approvedItemsBean.pageRows = 10;
        var session = window.sessionStorage;
        if (session.getItem('bussinessWhere')) {
            this.bussinessWhereDATA = session.getItem('bussinessWhere');
            if (this.bussinessWhereDATA.indexOf('startUserId') != -1) {
                var t = this.bussinessWhereDATA.split('=');
                this.approvedItemsBean.startUserId = t[1];
                if (param != '') {
                    this.approvedItemsBean.bussinessWhere = param;
                }
            }
            else {
                var a = this.bussinessWhereDATA + ' and ' + param;
                if (param != '') {
                    this.approvedItemsBean.bussinessWhere = a;
                }
                else {
                    this.approvedItemsBean.bussinessWhere = this.bussinessWhereDATA;
                }
            }
        }
        else {
            this.approvedItemsBean.bussinessWhere = param;
        }
        if (this.activatedRouter.snapshot.queryParams['totalNum'] == '11') {
            this.approvedItemsBean.taskPoolFlag = '2';
            this.queryUndoTaskList1();
        }
        else if (this.activatedRouter.snapshot.queryParams['totalNum'] == '10') {
            this.approvedItemsBean.taskPoolFlag = '1';
            this.queryUndoTaskList();
        }
    };
    //任务领用
    TaskPoolItemsComponent.prototype.toDoCheckIn = function (data2) {
        var _this = this;
        var params = {
            userId: this.userId,
            taskId: data2.taskId,
            tranType: "C0"
        };
        this.customeHttpService.taskCheckInOut(params).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.msgs = [];
                _this.msgs.push({ severity: "success", summary: '提示', detail: data.returnCode.message });
                var obj = data.processId;
                var obj1 = data.taskId;
                _this.DXcheck(data2, data2.littleClassNo);
                _this.bulid(obj, obj1);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    TaskPoolItemsComponent.prototype.DXcheck = function (map, key) {
        var _this = this;
        var par = {
            limit: "10",
            page: "1",
            paramName: 'dxTaskToDoCheckIn',
            paramItemName: key,
        };
        this.commonHttpService.queryCommonParamService(par).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.returnCommonParamList && data.returnCommonParamList.length > 0) {
                    var arr = data.returnCommonParamList[0];
                    _this.commonHttpService.queryCommonParamItemService(arr).subscribe(function (data1) {
                        if (data1.returnCode.code == 'success') {
                            if (data1.returnCommonParamItemList && data1.returnCommonParamItemList.length > 0) {
                                for (var p = 0; p < data1.returnCommonParamItemList.length; p++) {
                                    var el = data1.returnCommonParamItemList[p];
                                    if (el.paramItemName == key) {
                                        var par_1 = void 0;
                                        if (key == 'DXLC' || key == 'XYKZX_DXLC' || key == 'PLYSX_DXLC') { //电销
                                            par_1 = {
                                                dataList: [map.varMap.dataMap],
                                                userId: _this.userId
                                            };
                                        }
                                        else {
                                            par_1 = {
                                                dataMap: map.varMap.dataMap
                                            };
                                        }
                                        _this.customeHttpService[el.paramItemValue](par_1).subscribe(function (dat) {
                                            if (dat.returnCode.code == 'success') {
                                            }
                                            else {
                                                _this.msgs.push({ severity: 'error', summary: '提示', detail: dat.returnCode.message });
                                            }
                                        }, function (err) {
                                            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
                                        });
                                    }
                                }
                            }
                        }
                    });
                }
            }
        });
    };
    TaskPoolItemsComponent.prototype.bulid = function (obj, obj1) {
        var _this = this;
        // 领用跳转
        this.confirmationService.confirm({
            message: '领用成功,是否处理刚领用的待办任务?',
            accept: function () {
                var par = {
                    userId: _this.userId,
                    // processId: obj,
                    taskId: obj1,
                };
                _this.customeHttpService.bpmQueryUnDoTaskList(par).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.commfunc.clearSession('taskpooltype');
                        var parem = data.pageData.result[0];
                        _this.commfunc.toDisposeSchedule(parem);
                    }
                    else {
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (err) {
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
                });
            },
            reject: function () {
                _this.queryUndoTaskList(1);
            }
        });
    };
    // 批量选择
    TaskPoolItemsComponent.prototype.checkBoxClick = function (ri, col) {
        if (col['checkBox'] == true) {
            this.mus.push(col.taskId);
        }
        if (col['checkBox'] == false) {
            for (var i = 0; i < this.mus.length; i++) {
                if (this.mus[i] == col['taskId']) {
                    this.mus.splice(i, 1);
                    break;
                }
            }
        }
        if (this.mus.length > 0) {
            this.bathable = false;
        }
        else {
            this.bathable = true;
        }
    };
    // 人员
    TaskPoolItemsComponent.prototype.choicesaleUser = function (e) {
        var _this = this;
        this.customerInt = null;
        this.customerInt = e[0].tellerId;
        this.peopleDisplay = false;
        this.confirmationService.confirm({
            message: '确认将' + this.mus.length + '条待办任务分配于' + e[0].orgName + '员工' + e[0].tellerName + '?',
            accept: function () {
                /**
                 * 工作流
                 */
                var params = {
                    userId: _this.userId,
                    taskIdList: _this.mus,
                    tranType: _this.tranType,
                    userIdMap: {
                        userId: _this.customerInt,
                    }
                };
                _this.customeHttpService.taskBatchCheckIn(params).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        if (_this.activatedRouter.snapshot.queryParams['totalNum'] == '11') {
                            _this.approvedItemsBean.taskPoolFlag = '2';
                            _this.queryUndoTaskList1();
                        }
                        else if (_this.activatedRouter.snapshot.queryParams['totalNum'] == '10') {
                            _this.approvedItemsBean.taskPoolFlag = '1';
                            _this.queryUndoTaskList();
                        }
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                });
                /**
                 * 电销-分配
                 */
                console.log(_this.mus);
                // debugger
                var dataList = [], flag = true;
                _this.mus.forEach(function (element1) {
                    _this.tableList.forEach(function (element2) {
                        if ((element1 == element2.taskId) && (element2.littleClassNo == 'DXLC' || element2.littleClassNo == 'XYKZX_DXLC' || element2.littleClassNo == 'PLYSX_DXLC')) {
                            flag = false;
                            dataList.push(element2.varMap.dataMap);
                        }
                    });
                });
                if (!flag) {
                    var param = {
                        dataList: dataList,
                        userId: _this.customerInt
                    };
                    _this.customeHttpService.updateWorkEffortCommInfoTwo(param).subscribe(function (data) {
                        if (data.returnCode.code == "success") {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'success', summary: '提示', detail: '保存成功' });
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                        }
                    }, function (error) {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
                    });
                }
            }
        });
    };
    TaskPoolItemsComponent.prototype.taskBatchCheckIn = function () {
    };
    //批量领用
    TaskPoolItemsComponent.prototype.bath = function (key) {
        this.tranType = null;
        this.peopleDisplay = true;
        this.tranType = key;
    };
    // 重置
    TaskPoolItemsComponent.prototype.reset = function () {
        for (var _i = 0, _a = this.queryList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.key) {
                item.key = '';
            }
        }
        this.approvedItemsBean.bussinessWhere = '';
        this.workCreateName = undefined;
        this.approvedItemsBean.startUserId = undefined;
        this.approvedItemsBean.pageRows = 10;
        this.approvedItemsBean.curPage = 1;
        this.first = 0;
        this.querySecle();
    };
    // 查询任务池待办列表
    TaskPoolItemsComponent.prototype.queryUndoTaskList = function (k) {
        var _this = this;
        this.approvedItemsBean.userId = this.userId;
        var arr = this.inNav.systemCode.split(';');
        var a = arr[0].split(':');
        var b = arr[1].split(':');
        this.approvedItemsBean.itemNode = b[0];
        this.approvedItemsBean.itemType = a[0];
        this.customeHttpService.bpmQueryUnDoTaskList(this.approvedItemsBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.tableList = lodash__WEBPACK_IMPORTED_MODULE_13__["clone"](data.pageData.result);
                _this.total = lodash__WEBPACK_IMPORTED_MODULE_13__["clone"](data.pageData.totalRows);
                if (_this.paramNUM == '1') {
                    var param = _this.approvedItemsBean.itemNode;
                    //动态业务参数查询条件
                    _this.queryTaskNoteMessage('1', param);
                    //动态业务参数表头
                    _this.queryTaskNoteMessage('2', param);
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 查询任务池历史待办列表
    TaskPoolItemsComponent.prototype.queryUndoTaskList1 = function (k) {
        var _this = this;
        this.discustpool = false;
        this.approvedItemsBean.userId = this.userId;
        var arr = this.inNav.systemCode.split(';');
        var a = arr[0].split(':');
        var b = arr[1].split(':');
        this.approvedItemsBean.itemType = a[0];
        this.approvedItemsBean.itemNode = b[0];
        this.customeHttpService.bpmQueryTaskList(this.approvedItemsBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.tableList = lodash__WEBPACK_IMPORTED_MODULE_13__["clone"](data.pageData.result);
                _this.total = lodash__WEBPACK_IMPORTED_MODULE_13__["clone"](data.pageData.totalRows);
                if (_this.approvedItemsBean.itemNode == '384000' || _this.approvedItemsBean.itemNode == '145000') {
                    _this.discustpool = true;
                    _this.queryList = _this.custpoolarray;
                    _this.tableTitleList = _this.custpooltitle;
                }
                else {
                    if (_this.paramNUM == '1') {
                        var param = _this.approvedItemsBean.itemNode;
                        //动态业务参数查询条件
                        _this.queryTaskNoteMessage('1', param);
                        //动态业务参数表头
                        _this.queryTaskNoteMessage('2', param);
                    }
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 分页
    TaskPoolItemsComponent.prototype.paginate = function (event) {
        this.approvedItemsBean.pageRows = event.rows * 1;
        var currentPage = event.page + 1;
        this.approvedItemsBean.curPage = currentPage;
        this.first = (currentPage - 1) * this.approvedItemsBean.pageRows;
        if (this.activatedRouter.snapshot.queryParams['totalNum'] == '11') {
            this.approvedItemsBean.taskPoolFlag = '2';
            this.queryUndoTaskList1();
        }
        else if (this.activatedRouter.snapshot.queryParams['totalNum'] == '10') {
            this.approvedItemsBean.taskPoolFlag = '1';
            this.queryUndoTaskList();
        }
    };
    //按钮权限
    TaskPoolItemsComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    // 详情查看-传入标识markFlag
    TaskPoolItemsComponent.prototype.toDoExam = function (data) {
        var _this = this;
        var worktype = { worktype: data.workType };
        this.commfunc.setSessionDataCH('workType', JSON.stringify(worktype));
        if (this.activatedRouter.snapshot.queryParams['totalNum'] == '11') {
            data['markFlag'] = '5';
        }
        else {
            data['markFlag'] = '5';
        }
        if (!(data.varMap.taskCategoryId.indexOf('RUM0005') < 0) ||
            !(data.varMap.taskCategoryId.indexOf('RUM0009') < 0) ||
            !(data.varMap.taskCategoryId.indexOf('RUM_0020') < 0) ||
            !(data.varMap.taskCategoryId.indexOf('XYKZCRGSPLC') < 0)) {
            var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            var post_name = JSON.parse(this.commfunc.getSessionDataCH('postIdList'));
            var products_1 = '';
            if (data.varMap.dataMap.productNo) {
                products_1 = data.varMap.dataMap.productNo;
            }
            else {
                products_1 = data.varMap.dataMap.productId;
            }
            var params = {};
            if (data.varMap.taskCategoryId == "RUM_0020") {
                params = {
                    businessType: "17",
                    'roleId': post_name,
                    'viewIndex': 1,
                    'viewSize': 100,
                };
            }
            else {
                params = {
                    'productNo': products_1,
                    'roleId': post_name,
                    'viewIndex': 1,
                    'viewSize': 100,
                };
            }
            // const params = {
            // 	productNo: products,
            // 	roleId: post_name,
            // 	viewIndex: 1,
            // 	viewSize: 100,
            // };
            var flag_1 = '';
            if (this.activatedRouter.snapshot.queryParams['totalNum'] == '11') {
                flag_1 = '2';
            }
            else {
                flag_1 = '';
            }
            this.creditCcmService.queryViewRelations(params).subscribe(function (datas) {
                if (datas.returnCode.code === 'success') {
                    if (datas.list.length > 0) {
                        var param_1, pageParams = void 0, littleClassNo = void 0;
                        if (!(data.varMap.taskCategoryId.indexOf('RUM0009') < 0)) {
                            var viewId_1 = [];
                            datas.list.forEach(function (e) {
                                if (e.viewName.match('卡要素')) {
                                    viewId_1.push({ a: e.viewConfigId, b: e.viewName });
                                }
                            });
                            _this.commfunc.setSessionDataCH('viewId', JSON.stringify(viewId_1));
                            for (var i = 0; i < datas.list.length; i++) {
                                if (datas.list[i].viewName.match('卡要素')) {
                                    _this.stopFlag = false;
                                    param_1 = {
                                        'viewConfigId': datas.list[i]['viewConfigId'],
                                        'viewName': datas.list[i]['viewName'],
                                        'flag': true //审批标识
                                    };
                                    pageParams = {
                                        'viewConfigId': datas.list[i]['viewConfigId'],
                                        'viewName': datas.list[i]['viewName'],
                                        'custNo': data.varMap.dataMap.custNo,
                                        'custName': data.varMap.dataMap.custName,
                                        'custRequestNo': data.varMap.custRequestNo,
                                        'productNo': products_1,
                                        'productName': data.varMap.dataMap.productName,
                                        'isView': '',
                                        'businessType': data.varMap.dataMap.businessType,
                                        'processId': data.processId,
                                        'taskId': data.taskId,
                                        'workCreater': data.workCreater,
                                        'guaranteeType': data.varMap.dataMap.guaranteeType,
                                        'applyAmt': data.varMap.dataMap.applyAmt,
                                        'varMap': data.varMap,
                                        'taskRate': data.taskRate,
                                        'custRequestId': data.varMap.custRequestId,
                                        'endDate': data.varMap.dataMap.endDate,
                                        'taskType': data.taskType,
                                        'stageType': data.varMap.stageType,
                                        'taskName': data.taskName,
                                        'assActorId': data.varMap.dataMap['assActorId'],
                                        'requestSeqNo': data.varMap.requestSeqNo,
                                        'flag': flag_1,
                                        'processState': data.processState,
                                    };
                                    break;
                                }
                            }
                        }
                        else {
                            var viewId_2 = [];
                            datas.list.forEach(function (e) {
                                if (!e.viewName.match('卡要素')) {
                                    viewId_2.push({ a: e.viewConfigId, b: e.viewName });
                                }
                            });
                            _this.commfunc.setSessionDataCH('viewId', JSON.stringify(viewId_2));
                            for (var i = 0; i < datas.list.length; i++) {
                                var str = '卡要素';
                                if (datas.list[i].viewName.indexOf(str) == -1) {
                                    _this.stopFlag = false;
                                    param_1 = {
                                        'viewConfigId': datas.list[i]['viewConfigId'],
                                        'viewName': datas.list[i]['viewName'],
                                    };
                                    pageParams = {
                                        'viewConfigId': datas.list[i]['viewConfigId'],
                                        'viewName': datas.list[i]['viewName'],
                                        'custNo': data.varMap.dataMap.custNo,
                                        'custName': data.varMap.dataMap.custName,
                                        'custRequestNo': data.varMap.custRequestNo,
                                        'productNo': products_1,
                                        'productName': data.varMap.dataMap.productName,
                                        'isView': '',
                                        'businessType': data.varMap.dataMap.businessType,
                                        'processId': data.processId,
                                        'taskId': data.taskId,
                                        'workCreater': data.workCreater,
                                        'guaranteeType': data.varMap.dataMap.guaranteeType,
                                        'applyAmt': data.varMap.dataMap.applyAmt,
                                        'varMap': data.varMap,
                                        'taskRate': data.taskRate,
                                        'custRequestId': data.varMap.custRequestId,
                                        'endDate': data.varMap.dataMap.endDate,
                                        'stageType': data.varMap.stageType,
                                        'taskName': data.taskName,
                                        'taskType': data.taskType,
                                        'assActorId': data.varMap.dataMap['assActorId'],
                                        'requestSeqNo': data.varMap.requestSeqNo,
                                        'flag': flag_1,
                                        'processState': data.processState,
                                        'mainFlowNo': data.mainFlowNo,
                                        'taskCode': data.taskCode,
                                        'workType': data.workType
                                    };
                                    break;
                                }
                            }
                        }
                        if (_this.stopFlag) {
                            _this.msgs = [{ severity: 'info', summary: '错误', detail: '产品和岗位未关联页面,请配置关联页面' }];
                        }
                        littleClassNo = data.littleClassNo;
                        var commonHeader_1 = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        commonHeader_1['extParam']['littleClassNo'] = littleClassNo;
                        _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
                        _this.commfunc.setSessionDataCH('creditDataWorkFlow', JSON.stringify(pageParams));
                        if (flag_1 == '2') {
                            param_1['ckhs'] = 'Y';
                        }
                        if (data.varMap.taskCategoryId == "RUM_0020") {
                            _this.commfunc.setSessionDataCH('approvalBatchBean', JSON.stringify({
                                batchId: data.varMap.dataMap.batchId || null,
                                groupId: data.varMap.dataMap.groupId || null
                            }));
                            // 获取批量预授信客户群信息
                            var batchDetail = new Promise(function (resolve) {
                                var params = {
                                    "advanceInput": "0",
                                    "groupType": "0",
                                    "pageNum": 1,
                                    "pageSize": 10,
                                    "conditionList": [
                                        [
                                            {
                                                "field": "group_id",
                                                "operator": "=",
                                                "value": data.varMap.dataMap.groupId
                                            }
                                        ]
                                    ],
                                };
                                _this.httpService.queryCustGroupInfo(params).subscribe(function (result) {
                                    if (result.returnCode.code == 'success') {
                                        var data_1 = result.resultList[0] || {};
                                        console.log("oop");
                                        var datas_1 = {
                                            cust_num: data_1.open_Num || null,
                                            valid_cust_num: data_1.valid_cust_num || null,
                                            valid_cov_rate: data_1.valid_ratio || null,
                                            crdt_cust_num: data_1.CRDT_CUST_NUM || null,
                                            pre_crdt_amt: data_1.pre_crdt_amt || null,
                                            // crdt_cust_num:data.cust_num || null,//已授信客户数
                                            pre_crdt_cust_num: data_1.PRE_CRDT_CUST_NUM,
                                            crdt_amt: data_1.CRDT_AMT || null,
                                            crdt_bal: data_1.CRDT_BAL || null,
                                            loan_cust_num: data_1.LOAN_CUST_NUM || null,
                                            // crdt_amt:data.cust_num || null,//已用信额度总和
                                            GROUP_ID: data_1.group_id || null,
                                            GROUP_NAME: data_1.group_name || null,
                                            GROUP_TYPE: data_1.group_type || null,
                                            GROUP_OWNER_NAME: data_1.group_owner || null,
                                            GROUP_LINKMANNAME: data_1.group_of_contacts || null,
                                            ORG_NAME: data_1.org_id || null,
                                            ADDRESS: data_1.address_message || null,
                                            PRODUCT_CODE: data_1.featured_products || null,
                                            INT: data_1.INT || null,
                                            GROUP_OWNER_ID: data_1.group_owner || null,
                                            ORG_ID: data_1.create_org_id || null,
                                        };
                                        resolve({
                                            groupDtas: datas_1
                                        });
                                    }
                                    else {
                                        _this.msgs = [{ severity: 'error', summary: '提示', detail: result.returnCode.message }];
                                    }
                                }, function (error) {
                                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
                                });
                            });
                            Promise.all([batchDetail]).then(function (res) {
                                var datas = {
                                    detailData: res[0]["detailDtas"]
                                };
                                console.log(datas);
                                _this.commfunc.setSessionDataCH('groupBranchData', JSON.stringify(datas));
                                _this.router.navigate(['/pages/tzb/custom/credit-ccm/viewPage', JSON.stringify(param_1)]);
                            });
                        }
                        else {
                            _this.router.navigate(['/pages/tzb/custom/credit-ccm/viewPage', JSON.stringify(param_1)]);
                        }
                    }
                    else {
                        _this.msgs = [{ severity: 'info', summary: '错误', detail: '产品和岗位未关联页面,请配置关联页面' }];
                    }
                }
                else {
                    _this.msgs = [{ severity: 'error', summary: '错误', detail: datas.returnCode.message }];
                }
            });
        }
        else {
            this.commfunc.toDisposeSchedule(data);
        }
    };
    TaskPoolItemsComponent.prototype.download = function () {
        var _this = this;
        this.approvedItemsBean.userId = this.userId;
        var arr = this.inNav.systemCode.split(';');
        var a = arr[0].split(':');
        var b = arr[1].split(':');
        this.approvedItemsBean.itemType = a[0];
        this.approvedItemsBean.itemNode = b[0];
        this.customeHttpService.downloadUndoTaskExcel(this.approvedItemsBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                var file = data.file;
                var arr_1 = file.split('/');
                var fileUrl = '';
                for (var j = 1; j < arr_1.length - 1; j++) {
                    fileUrl += '/' + arr_1[j];
                }
                fileUrl = fileUrl + '/';
                var fileName = arr_1[arr_1.length - 1];
                open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_14__["RTS_HTTP_URL"] + "/workflow/FileDownload?fileName=" + encodeURI(fileName) + "&fileUrl=" + fileUrl, '_blank');
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    //页面信息查询
    TaskPoolItemsComponent.prototype.queryViewRelations = function (products, post_name, resolve) {
        var _this = this;
        var params = {
            productNo: products,
            roleId: post_name,
            viewIndex: 1,
            viewSize: 100,
        };
        this.creditCcmService.queryViewRelations(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                resolve({ viewData: data.list });
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    //点击客户号跳转
    TaskPoolItemsComponent.prototype.toCustView = function (data) {
        if (data.relationKey == 'party') {
            this.commfunc.setSessionData('custNo', data.partyOrGroupNo);
            window.open('#/pages/custom-view/general', '_blank');
        }
        else if (data.relationKey == 'partyGroup') {
            window.open("#/pages/tzb/custom/custom-group/custom-group-view?groupId=" + data.partyOrGroupNo, '_blank');
        }
    };
    // ---------------以下保留之前代码-------------------------------
    // 进入审批
    TaskPoolItemsComponent.prototype.toDisposeSchedule = function (item) {
        this.commfunc.doDeal(item);
    };
    TaskPoolItemsComponent.prototype.queryTaskNoteMessage = function (queryType, taskCategoryId) {
        var _this = this;
        var param = {
            queryType: queryType,
            taskCategoryId: taskCategoryId
        };
        this.httpService.queryTaskNoteMessage(param).subscribe(function (data) {
            if (data.returnCode.code = 'success') {
                //查询条件
                if (queryType == '1') {
                    _this.queryList = [];
                    if (data.taskNoteMessageList && data.taskNoteMessageList.length > 0) {
                        var item = data.taskNoteMessageList[0]['textMsg'];
                        for (var i in item) {
                            var obj = {};
                            if (item.hasOwnProperty(i)) {
                                obj['i'] = item[i].split('|')[0];
                                obj['key'] = '';
                                obj['label'] = item[i].split('|')[1];
                                _this.queryList.push(obj);
                                _this.queryList = lodash__WEBPACK_IMPORTED_MODULE_13__["clone"](_this.queryList);
                            }
                        }
                    }
                    else {
                        _this.queryList = [];
                    }
                    _this.queryList.push({ i: "startUserId", key: "", label: "发起人" }, { i: "createDateFrom", key: "", label: "创建起始日期" }, { i: "createDateTo", key: "", label: "创建截止日期" });
                    console.log(_this.queryList);
                }
                //查询表头
                if (queryType == '2') {
                    _this.tableTitleListonly = [];
                    _this.tableTitleList = [];
                    var item = void 0;
                    if (_this.approvedItemsBean.itemType && _this.approvedItemsBean.itemType == 'SXSX') {
                        _this.tableTitleListonly.push({ field: "littleClassName", header: "事项名称" });
                    }
                    item = lodash__WEBPACK_IMPORTED_MODULE_13__["clone"](data.taskNoteMessageList[0]['textMsg']);
                    for (var i in item) {
                        var obj = {};
                        if (item.hasOwnProperty(i)) {
                            obj['field'] = item[i].split('|')[0];
                            obj['header'] = item[i].split('|')[1];
                            _this.tableTitleList.push(obj);
                        }
                    }
                    console.log(_this.tableTitleList);
                }
                _this.paramNUM = '2';
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaskPoolItemsComponent.prototype, "inNav", void 0);
    TaskPoolItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'task-pool-items',
            template: __webpack_require__(/*! ./task-pool-items.component.html */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool-items/task-pool-items.component.html"),
            styles: [__webpack_require__(/*! ./task-pool-items.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool-items/task-pool-items.component.scss")],
            providers: [app_pages_tzb_custom_telemarketing_http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_16__["TeleMarketingHttpService"], _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomeHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"], app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_9__["CreditCcmService"], app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_10__["ProcessInstanceManagementService"], app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_11__["HttpService"], primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_12__["MessageService"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_15__["CommonHttpService"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomeHttpService"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"],
            app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_9__["CreditCcmService"],
            app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_10__["ProcessInstanceManagementService"],
            app_pages_tzb_custom_telemarketing_http_telemarketing_http_service__WEBPACK_IMPORTED_MODULE_16__["TeleMarketingHttpService"]])
    ], TaskPoolItemsComponent);
    return TaskPoolItemsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"module\" id='appR'>\r\n    <div class=\"ui-g-12\" *ngIf=\"!nodata\">\r\n        <div class=\"ui-g-2\">\r\n            <div class=\"div2\">\r\n                <div class=\"middle\">\r\n                    <div class=\"leftMenu\">\r\n                        <div class=\"menu_list\">\r\n                            <ul>\r\n                                <li class=\"\" *ngFor=\"let pro of ulData\">\r\n                                    <img class=\"xiala\" src=\"../../../../../../assets/layout/images/menu.png\" />\r\n                                    <p title='{{pro.bigClassName}}' class=\"fuMenu\" style=\"display:flex;\">\r\n                                        <span style='flex:1;'> {{pro.bigClassName}}</span>\r\n                                        <span style=\"color:red!important;\" *ngIf=\"pro.bigtimeOutCount!=0\">{{pro.bigtimeOutCount}}</span>\r\n                                        <i *ngIf=\"pro.bigtimeOutCount!=0\">|</i>\r\n                                        <span style=\"margin-right:10px;\">{{pro.bigsysCount}}</span>\r\n                                    </p>\r\n                                    <div class=\"div1\">\r\n                                        <p title=\"{{nav.littleClassName}}\" (click)='navclick(nav)' class=\"zcd\" *ngFor=\"let nav of pro.childpage\">\r\n                                            <!-- <span class='ct'>T</span>\r\n                                            <span class='ct'>C</span> -->\r\n                                            <span class=\"littlename\"> {{nav.littleClassName}}</span>\r\n                                            <span style=\"color:red!important;\" *ngIf=\"nav.timeOutCount!=0\">{{nav.timeOutCount}}</span>\r\n                                            <i *ngIf=\"nav.timeOutCount!=0\">|</i>\r\n                                            <span style=\"margin-right:10px;\">{{nav.sysCount}}</span>\r\n                                        </p>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-10\">\r\n            <task-pool-items *ngIf=\"disinNav\" [inNav]=\"inNav\"></task-pool-items>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"nodata\" class=\"noData\"></div>\r\n</div>\r\n<!-- 旋转 -->\r\n<div class=\"ui-g-12\" *ngIf=\"maskLayer\">\r\n    <div id=\"popWindow\" class=\"popWindow\" style=\"display:block\"></div>\r\n    <div class=\"maskLayer ui-g-12\">\r\n        <img src=\"../../../../../../../../assets/layout/images/loading1.gif\" alt=\"\" class=\"maskLayer\">\r\n    </div>\r\n</div>\r\n<!--提示消息-->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .tit {\n  text-align: right; }\n\n.module .btn {\n  text-align: center; }\n\n.module .div2 {\n  background-color: #fff;\n  height: 600px;\n  position: relative;\n  padding: 10px; }\n\n.module .div2:after {\n    content: ' ';\n    border-right: 2px solid #efefef;\n    display: inline-block;\n    width: 2px;\n    height: 97%;\n    position: absolute;\n    right: 13px;\n    top: 3%; }\n\n.module .div2 li {\n    list-style: none; }\n\n.module .pd4 {\n  padding: 7px 0 !important; }\n\n:host/deep/ .ui-panel .ui-panel-titlebar {\n  background-color: white !important;\n  border-bottom: 1px solid white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS90YXNrLXBvb2wvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxyZW1pbmRlci1kb1xcYmFja2xvZy1kZXRhaWxcXGJ0bi1wYWdlXFx0YXNrLXBvb2xcXHRhc2stcG9vbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGlCQUFpQixFQUFBOztBQUZ6QjtFQUtRLGtCQUFrQixFQUFBOztBQUwxQjtFQVFRLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFYckI7SUFhWSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTyxFQUFBOztBQXBCbkI7SUF1QlksZ0JBQ0osRUFBQTs7QUF4QlI7RUEyQlEseUJBQXlCLEVBQUE7O0FBR2pDO0VBQ0ksa0NBQWtDO0VBQ2xDLHlDQUF5QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS90YXNrLXBvb2wvdGFzay1wb29sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZXtcclxuICAgIC50aXR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuYnRue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5kaXYyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcgJztcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2VmZWZlZjtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDk3JTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTNweDtcclxuICAgICAgICAgICAgdG9wOiAzJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucGQ0e1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLXBhbmVsIC51aS1wYW5lbC10aXRsZWJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TaskPoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPoolComponent", function() { return TaskPoolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_taskpoolPage_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean/taskpoolPage.bean */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/bean/taskpoolPage.bean.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
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

 //事项类型的接口







/**
 * 任务池事项
 */
var TaskPoolComponent = /** @class */ (function () {
    function TaskPoolComponent(router, routeInfo, cusOperationHttpService, customeHttpService, activatedRouter, commfunc, sanitizer) {
        this.router = router;
        this.routeInfo = routeInfo;
        this.cusOperationHttpService = cusOperationHttpService;
        this.customeHttpService = customeHttpService;
        this.activatedRouter = activatedRouter;
        this.commfunc = commfunc;
        this.sanitizer = sanitizer;
        this.disinNav = false;
        this.list = []; //接收后台数据
        this.startTime = null;
        this.endTime = null;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["CALENDAR_CN"]; //讲英文转化为中文
        this.userId = '';
        //提示信息
        this.msgs = [];
        this.taskpoolPageBean = new _bean_taskpoolPage_bean__WEBPACK_IMPORTED_MODULE_5__["taskpoolPageBean"]();
        this.ulData = [];
        this.nodata = false;
        this.maskLayer = true;
        this.codeValues(); //调用方法，获取全部码值
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
    }
    TaskPoolComponent.prototype.ngOnInit = function () {
        var _this = this;
        //判断是否是总行或者集团
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var a = commonHeader.extParam.operatingLevel;
        this.activatedRouter.queryParams.subscribe(function (params) {
            _this.flag = params.flag;
            _this.num = params.totalNum;
        });
        if (this.commfunc.getSessionDataCH('markFlag')) {
            this.commfunc.clearSession('markFlag');
        }
        if (this.commfunc.getSessionDataCH('taskId')) {
            this.commfunc.clearSession('taskId');
        }
        if (this.commfunc.getSessionDataCH('bpmQueryTaskOnlyList')) {
            this.commfunc.clearSession('bpmQueryTaskOnlyList');
        }
        this.queryNewList();
    };
    TaskPoolComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    // 查询任务池待办列表（汇总）
    TaskPoolComponent.prototype.queryNewList = function () {
        var _this = this;
        this.nodata = false;
        this.maskLayer = true;
        var session = window.sessionStorage;
        if (session.getItem('bussinessWhere')) {
            var bussinessWhere = session.getItem('bussinessWhere');
            if (bussinessWhere.indexOf('startUserId') != -1) {
                var t = bussinessWhere.split('=');
                this.taskpoolPageBean.startUserId = t[1];
            }
            else {
                this.taskpoolPageBean.bussinessWhere = bussinessWhere;
            }
        }
        this.taskpoolPageBean.endFlag = '0';
        this.taskpoolPageBean.userId = this.userId;
        if (this.num == '10') {
            this.taskpoolPageBean.taskPoolFlag = '1';
            this.customeHttpService.bpmQueryUnDoTaskCountGroup(this.taskpoolPageBean).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    if (data.pageData.result && data.pageData.result.length > 0) {
                        _this.list = data.pageData.result;
                        _this.approve(_this.list);
                    }
                    else {
                        _this.nodata = true;
                        jquery__WEBPACK_IMPORTED_MODULE_6__('#appR').height(700);
                        _this.maskLayer = false;
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
            });
        }
        else if (this.num == '11') {
            this.taskpoolPageBean.taskPoolFlag = '2';
            this.customeHttpService.bpmQueryTaskOnlyCountGroup(this.taskpoolPageBean).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    if (data.pageData.result && data.pageData.result.length > 0) {
                        _this.list = data.pageData.result;
                        _this.approve(_this.list);
                    }
                    else {
                        _this.nodata = true;
                        jquery__WEBPACK_IMPORTED_MODULE_6__('#appR').height(700);
                        _this.maskLayer = false;
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
            });
        }
    };
    TaskPoolComponent.prototype.approve = function (list) {
        var _this = this;
        var approvelist = [];
        if (this.list.length > 0) {
            var _loop_1 = function (i) {
                var element = this_1.list[i];
                var filterResult = approvelist.filter(function (x) { return x.bigClassNo == element['bigClassNo']; });
                var exist = filterResult && filterResult.length;
                var temp = null;
                if (exist) {
                    temp = {
                        littleClassName: element['littleClassName'],
                        littleClassNo: element['littleClassNo'],
                        sysCount: element['sysCount'],
                        timeOutCount: element['timeOutCount'],
                        urgentCount: element['urgentCount'],
                        systemCode: element['systemCode']
                    };
                    filterResult[0].childpage.push(temp);
                    filterResult[0].bigsysCount = filterResult[0].bigsysCount + element['sysCount'];
                }
                else {
                    temp = {
                        bigClassName: element['bigClassName'],
                        bigClassNo: element['bigClassNo'],
                        bigsysCount: element['sysCount'],
                        bigtimeOutCount: element['timeOutCount'],
                        bigurgentCount: element['urgentCount'],
                        childpage: [
                            {
                                littleClassName: element['littleClassName'],
                                littleClassNo: element['littleClassNo'],
                                sysCount: element['sysCount'],
                                timeOutCount: element['timeOutCount'],
                                urgentCount: element['urgentCount'],
                                systemCode: element['systemCode']
                            }
                        ]
                    };
                    approvelist.push(temp);
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.list.length; i++) {
                _loop_1(i);
            }
            this.ulData = approvelist;
            setTimeout(function () {
                _this.start();
                _this.maskLayer = false;
            }, 1500);
            var session = window.sessionStorage;
            if (session.getItem('workliuCode')) {
                var f = session.getItem('workliuCode');
                var d = f.split('&');
                if (!approvelist[d[0]]) {
                    d[0] = '0';
                    d[1] = '0';
                }
                else if (!approvelist[d[1]]) {
                    d[1] = '0';
                }
                var a = d[0] + '&' + d[1];
                session.setItem('workliuCode', a);
                this.inNav = approvelist[d[0]].childpage[d[1]];
            }
            else {
                this.inNav = approvelist[0].childpage[0];
            }
            setTimeout(function () {
                _this.start();
                _this.maskLayer = false;
            }, 1500);
            this.disinNav = true;
        }
    };
    TaskPoolComponent.prototype.navclick = function (item) {
        if (this.commfunc.getSessionDataCH('workliuCode')) {
            this.commfunc.clearSession('workliuCode');
            this.commfunc.clearSession('workliuData');
        }
        for (var t = 0; t < this.ulData.length; t++) {
            for (var j = 0; j < this.ulData[t].childpage.length; j++) {
                if (this.ulData[t].childpage[j].littleClassNo == item.littleClassNo) {
                    var session = window.sessionStorage;
                    var a = t + '&' + j;
                    var b = JSON.stringify(item);
                    session.setItem('workliuCode', a);
                    session.setItem('workliuData', b);
                    break;
                }
            }
        }
        this.inNav = item;
    };
    //码值
    TaskPoolComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    TaskPoolComponent.prototype.start = function () {
        jquery__WEBPACK_IMPORTED_MODULE_6__(document).ready(function () {
            var session = window.sessionStorage;
            if (session.getItem('bussinessWhere')) {
                jquery__WEBPACK_IMPORTED_MODULE_6__('.menu_list ul li').eq(0).children('.div1').show().children('.zcd').eq(0).addClass('removes');
            }
            else if (session.getItem('workliuCode')) {
                var f = session.getItem('workliuCode');
                var d = f.split('&');
                jquery__WEBPACK_IMPORTED_MODULE_6__('.menu_list ul li').eq(d[0]).children('.div1').show().children('.zcd').eq(d[1]).addClass('removes');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_6__('.menu_list ul li').eq(0).children('.div1').show().children('.zcd').eq(0).addClass('removes');
            }
            //绑定元素点击事件
            jquery__WEBPACK_IMPORTED_MODULE_6__(".menu_list ul li").click(function () {
                //判断对象是显示还是隐藏
                if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".div1").is(":hidden")) {
                    //表示隐藏
                    if (!jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".div1").is(":animated")) {
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".xiala").css({ 'transform': 'rotate(180deg)' });
                        //如果当前没有进行动画，则添加新动画
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".div1").animate({
                            height: 'show'
                        }, 200)
                            //siblings遍历div1的元素
                            .end().siblings().find(".div1").hide(200);
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).siblings().children(".xiala").css({ 'transform': 'rotate(360deg)' });
                    }
                }
                else {
                    //表示显示
                    if (!jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".div1").is(":animated")) {
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".xiala").css({ 'transform': 'rotate(360deg)' });
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".div1").animate({
                            height: 'hide'
                        }, 200)
                            .end().siblings().find(".div1").hide(200);
                    }
                }
            });
            //阻止事件冒泡，子元素不再继承父元素的点击事件
            jquery__WEBPACK_IMPORTED_MODULE_6__('.div1').click(function (e) {
                e.stopPropagation();
            });
            //点击子菜单为子菜单添加样式，并移除所有其他子菜单样式
            jquery__WEBPACK_IMPORTED_MODULE_6__(".menu_list ul li .div1 .zcd").click(function () {
                //设置当前菜单为选中状态的样式，并移除同类同级别的其他元素的样式
                jquery__WEBPACK_IMPORTED_MODULE_6__(this).addClass("removes").siblings().removeClass("removes");
                //遍历获取所有父菜单元素
                jquery__WEBPACK_IMPORTED_MODULE_6__(".div1").each(function () {
                    //判断当前的父菜单是否是隐藏状态
                    if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).is(":hidden")) {
                        //如果是隐藏状态则移除其样式
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".zcd").removeClass("removes");
                    }
                });
            });
        });
    };
    TaskPoolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'task-pool',
            template: __webpack_require__(/*! ./task-pool.component.html */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool.component.html"),
            styles: [__webpack_require__(/*! ./task-pool.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/task-pool/task-pool.component.scss"), __webpack_require__(/*! ./../menu-tree-ul.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/menu-tree-ul.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomeHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomeHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]])
    ], TaskPoolComponent);
    return TaskPoolComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/tip-page/tip-page.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/tip-page/tip-page.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <div class=\"ui-g-2\">\r\n    <div class=\"div2\">\r\n      <div class=\"middle\">\r\n        <div class=\"leftMenu\">\r\n          <div class=\"menu_list\">\r\n            <ul>\r\n              <li class=\"\" *ngFor=\"let pro of list\">\r\n                <img class=\"xiala\" src=\"../../../../../../assets/layout/images/menu.png\" />\r\n                <p class=\"fuMenu\" style=\"display:flex;\">\r\n                  <span style='flex:1;'> {{pro.titlename}}</span>\r\n                  <span style=\"margin-right:10px;\">{{pro.countNum}}</span>\r\n                </p>\r\n                <div class=\"div1\">\r\n                  <p (click)='navclick(nav)' class=\"zcd\" *ngFor=\"let nav of pro.childpage\">\r\n                    <span style='flex:1;margin-left:10px;'> {{nav.scheduleName}}</span>\r\n                    <span style=\"margin-right:10px;\">{{nav.countNum}}</span>\r\n                  </p>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-10\">\r\n    <app-reminders *ngIf=\"disinNav\" [inNav]=\"inNav\"></app-reminders>\r\n  </div>\r\n</div>\r\n<!--提示消息-->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/tip-page/tip-page.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/tip-page/tip-page.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .ui-g-12 {\n  background: #f7f8f9; }\n  .module .ui-g-12 .ui-g-6 {\n    display: flex; }\n  .module .ui-g-12 .ui-g-6 label {\n      display: block;\n      width: 30%;\n      text-align: right;\n      padding: 0 20px; }\n  .module .ui-g-12 .ui-g-6 .input-name {\n      width: 100% !important; }\n  .module .ui-g-12 .ui-g-6 .items-name {\n      width: 100% !important; }\n  .module .btn {\n  text-align: center; }\n  .module .div2 {\n  background-color: #fff;\n  height: 600px;\n  position: relative;\n  padding: 10px; }\n  .module .div2:after {\n    content: ' ';\n    border-right: 2px solid #efefef;\n    display: inline-block;\n    width: 2px;\n    height: 97%;\n    position: absolute;\n    right: 13px;\n    top: 3%; }\n  .module .div2 li {\n    list-style: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS90aXAtcGFnZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXHJlbWluZGVyLWRvXFxiYWNrbG9nLWRldGFpbFxcYnRuLXBhZ2VcXHRpcC1wYWdlXFx0aXAtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLG1CQUFtQixFQUFBO0VBRjNCO0lBSVksYUFBYSxFQUFBO0VBSnpCO01BTWdCLGNBQWM7TUFDZCxVQUFVO01BQ1YsaUJBQWlCO01BQ2pCLGVBQWUsRUFBQTtFQVQvQjtNQVlnQixzQkFBc0IsRUFBQTtFQVp0QztNQWVnQixzQkFBc0IsRUFBQTtFQWZ0QztFQW9CUSxrQkFBa0IsRUFBQTtFQXBCMUI7RUF1QlEsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBO0VBMUJyQjtJQTRCWSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTyxFQUFBO0VBbkNuQjtJQXNDWSxnQkFDSixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS90aXAtcGFnZS90aXAtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGUge1xyXG4gICAgLnVpLWctMTIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmN2Y4Zjk7XHJcbiAgICAgICAgLnVpLWctNiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbnB1dC1uYW1lIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW1zLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5kaXYyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcgJztcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2VmZWZlZjtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDk3JTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTNweDtcclxuICAgICAgICAgICAgdG9wOiAzJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/tip-page/tip-page.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/tip-page/tip-page.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TipPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipPageComponent", function() { return TipPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_btnPage_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bean/btnPage.bean */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/bean/btnPage.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //事项类型的接口







/**
 * 提醒事项
 */
var TipPageComponent = /** @class */ (function () {
    function TipPageComponent(router, cusOperationHttpService, customeHttpService, activatedRouter, commfunc, httpService) {
        this.router = router;
        this.cusOperationHttpService = cusOperationHttpService;
        this.customeHttpService = customeHttpService;
        this.activatedRouter = activatedRouter;
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.disinNav = false;
        this.ulData = [];
        //表格中无数据时显示的内容
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"];
        this.littleEvent = [];
        this.btnPageBean = new _bean_btnPage_bean__WEBPACK_IMPORTED_MODULE_3__["BtnPageBean"]();
        this.itemsSmallType = [];
        this.list = []; //接收后台数据
        //提示信息
        this.msgs = [];
        this.userId = '';
        this.display = false;
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.littleEvent = this.code['ScheduleType'];
    }
    TipPageComponent.prototype.ngOnInit = function () {
        var url = window.location.href;
        if (url.indexOf('?') != -1) {
            var a = url.split('?');
            var b = a[1].split('&');
            var c = b[0].split('=');
            this.flag = c[1];
        }
        var session = window.sessionStorage;
        if (session.getItem('bussinessWhere')) {
            var bussinessWhere = session.getItem('bussinessWhere');
            this.bussinessWhere = bussinessWhere.split('or');
            this.partyOrGroupNo = this.bussinessWhere[0].replace(/[^0-9]/ig, '');
        }
        this.itemsBigChange();
        this.queryCopReminderTaskSum();
    };
    TipPageComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    //事项大类切换
    TipPageComponent.prototype.itemsBigChange = function () {
        var _this = this;
        var params = {
            taskTypeParentId: '01',
            taskTypeKey: 'itemsType'
        };
        this.cusOperationHttpService.taskTypeQry(params).subscribe(function (data) {
            var arr = data.taskTypeList;
            _this.itemsSmallType = [{ label: '请选择', value: '' }];
            if (arr) {
                arr.forEach(function (item) {
                    _this.itemsSmallType.push({ label: item.taskTypeName, value: item.taskTypeId });
                });
            }
        });
    };
    //点击处理按钮
    TipPageComponent.prototype.toDisposeSchedule = function (item) {
        // this.router.navigate(['/pages/tzb/custom/reminder-do/backlog-detail/btn-page3/reminders', { scheduleTypeId: item.scheduleTypeId, scheduleName: item.scheduleName }], { queryParams: { flag: this.flag, 'id': '4' } });
    };
    //码值
    TipPageComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //提醒事项
    TipPageComponent.prototype.queryCopReminderTaskSum = function () {
        var _this = this;
        var param = {};
        if (this.flag == '4') {
            param = { statusId: '1' };
        }
        if (this.partyOrGroupNo) {
            param = {
                statusId: '1',
                custId: this.partyOrGroupNo
            };
        }
        var ob = this.customeHttpService.queryCopReminderTaskSum(param);
        var approvelist = [];
        ob.subscribe(function (data) {
            _this.list = data.resultList;
            if (_this.list && _this.list.length > 0) {
                var _loop_1 = function (i) {
                    var element = _this.list[i];
                    var filterResult = approvelist.filter(function (x) { return x.scheduleTypeId == element['scheduleTypeId']; });
                    var exist = filterResult && filterResult.length;
                    var temp = null;
                    if (exist) {
                        temp = {
                            countNum: element['countNum'],
                            createDate: element['createDate'],
                            isNew: element['isNew'],
                            scheduleName: element['scheduleName'],
                            scheduleTypeId: element['scheduleTypeId'],
                            statusId: element['statusId'],
                            subSysId: element['subSysId'],
                            taskCategoryId: element['taskCategoryId'],
                        };
                        filterResult[0].childpage.push(temp);
                        filterResult[0].countNum = filterResult[0].countNum + element['countNum'];
                    }
                    else {
                        temp = {
                            countNum: element['countNum'],
                            scheduleName: element['scheduleName'],
                            scheduleTypeId: element['scheduleTypeId'],
                            taskCategoryId: element['taskCategoryId'],
                            childpage: [
                                {
                                    countNum: element['countNum'],
                                    createDate: element['createDate'],
                                    isNew: element['isNew'],
                                    scheduleName: element['scheduleName'],
                                    scheduleTypeId: element['scheduleTypeId'],
                                    statusId: element['statusId'],
                                    subSysId: element['subSysId'],
                                    taskCategoryId: element['taskCategoryId'],
                                }
                            ]
                        };
                        approvelist.push(temp);
                    }
                };
                for (var i = 0; i < _this.list.length; i++) {
                    _loop_1(i);
                }
                approvelist.forEach(function (el) {
                    for (var i = 0; i < _this.littleEvent.length; i++) {
                        if (el.scheduleTypeId == _this.littleEvent[i].value) {
                            el['titlename'] = _this.littleEvent[i].label;
                            break;
                        }
                    }
                });
            }
            _this.list = lodash__WEBPACK_IMPORTED_MODULE_7__["clone"](approvelist);
            setTimeout(function () {
                _this.start();
            }, 1500);
            _this.disinNav = true;
            _this.inNav = _this.list[0];
            if (_this.partyOrGroupNo) {
                _this.inNav['partyOrGroupNo'] = _this.partyOrGroupNo;
            }
        });
    };
    TipPageComponent.prototype.navclick = function (item) {
        this.inNav = item;
        if (this.partyOrGroupNo) {
            this.inNav['partyOrGroupNo'] = this.partyOrGroupNo;
        }
    };
    TipPageComponent.prototype.start = function () {
        jquery__WEBPACK_IMPORTED_MODULE_8__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_8__('.menu_list ul li').eq(0).children('.div1').show().children('.zcd').eq(0).addClass('removes');
            //     绑定元素点击事件
            jquery__WEBPACK_IMPORTED_MODULE_8__(".menu_list ul li").click(function () {
                //判断对象是显示还是隐藏
                if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).children(".div1").is(":hidden")) {
                    //表示隐藏
                    if (!jquery__WEBPACK_IMPORTED_MODULE_8__(this).children(".div1").is(":animated")) {
                        jquery__WEBPACK_IMPORTED_MODULE_8__(this).children(".xiala").css({ 'transform': 'rotate(180deg)' });
                        //如果当前没有进行动画，则添加新动画
                        jquery__WEBPACK_IMPORTED_MODULE_8__(this).children(".div1").animate({
                            height: 'show'
                        }, 200)
                            //siblings遍历div1的元素
                            .end().siblings().find(".div1").hide(200);
                        jquery__WEBPACK_IMPORTED_MODULE_8__(this).siblings().children(".xiala").css({ 'transform': 'rotate(360deg)' });
                    }
                }
                else {
                    //表示显示
                    if (!jquery__WEBPACK_IMPORTED_MODULE_8__(this).children(".div1").is(":animated")) {
                        jquery__WEBPACK_IMPORTED_MODULE_8__(this).children(".xiala").css({ 'transform': 'rotate(360deg)' });
                        jquery__WEBPACK_IMPORTED_MODULE_8__(this).children(".div1").animate({
                            height: 'hide'
                        }, 200)
                            .end().siblings().find(".div1").hide(200);
                    }
                }
            });
            //阻止事件冒泡，子元素不再继承父元素的点击事件
            jquery__WEBPACK_IMPORTED_MODULE_8__('.div1').click(function (e) {
                e.stopPropagation();
            });
            //点击子菜单为子菜单添加样式，并移除所有其他子菜单样式
            jquery__WEBPACK_IMPORTED_MODULE_8__(".menu_list ul li .div1 .zcd").click(function () {
                //设置当前菜单为选中状态的样式，并移除同类同级别的其他元素的样式
                jquery__WEBPACK_IMPORTED_MODULE_8__(this).addClass("removes").siblings().removeClass("removes");
                //遍历获取所有父菜单元素
                jquery__WEBPACK_IMPORTED_MODULE_8__(".div1").each(function () {
                    //判断当前的父菜单是否是隐藏状态
                    if (jquery__WEBPACK_IMPORTED_MODULE_8__(this).is(":hidden")) {
                        //如果是隐藏状态则移除其样式
                        jquery__WEBPACK_IMPORTED_MODULE_8__(this).children(".zcd").removeClass("removes");
                    }
                });
            });
        });
    };
    TipPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tip-page',
            template: __webpack_require__(/*! ./tip-page.component.html */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/tip-page/tip-page.component.html"),
            styles: [__webpack_require__(/*! ./tip-page.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/tip-page/tip-page.component.scss"), __webpack_require__(/*! ./../menu-tree-ul.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/menu-tree-ul.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_6__["CustomeHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_6__["CustomeHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"]])
    ], TipPageComponent);
    return TipPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none-items/work-none-items.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none-items/work-none-items.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\" style=\"width:100%\">\r\n    <div class=\"ui-g-12\" *ngIf=\"(this.queryList && this.queryList.length>0)\">\r\n        <div class=\"ui-g-4 queryHeader\" *ngFor=\"let item of queryList\" style=\"text-align:right;font-size:13px;\">\r\n            <label>{{item.label}}:</label>\r\n            <input type=\"text\" [(ngModel)]=\"item.key\" *ngIf=\"item.i != 'createDateFrom' && item.i != 'startUserId' && item.i != 'createDateTo'\">\r\n            <input type=\"text\" [(ngModel)]=\"startUserId\" *ngIf=\"item.i == 'startUserId'\">\r\n            <p-calendar class=\"calendar-name\" [showIcon]=\"true\" [(ngModel)]=\"item.key\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [showOtherMonths]=\"false\" *ngIf=\"item.i == 'createDateFrom' || item.i == 'createDateTo'\"></p-calendar>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\" *ngIf=\"(this.queryList && this.queryList.length>0)\">\r\n        <button pButton label=\"查询\" (click)=\"querySecle()\"></button>\r\n        <button pButton label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 table\">\r\n        <u-dataTable [value]=\"tableList\" [style]=\"{'text-align':'center'}\" [emptyMessage]='tabMesg' scrollable=\"true\">\r\n            <p-column field=\"Index\" header=\"序号\" [style]=\"{width:'38px','font-size':'13px'}\">\r\n                <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{ ri+1 }}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngFor=\"let pro of tableTitleListonly\" field=\"{{pro.field}}\" header=\"{{pro.header}}\" [style]=\"{'width':'82px','font-size':'13px','letter-spacing':'0px'}\"></p-column>\r\n            <p-column *ngFor=\"let items of tableTitleList\" field=\"{{items.field}}\" header=\"{{items.header}}\" [style]=\"{'width':'80px','font-size':'13px','letter-spacing':'0px'}\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span *ngIf=\"(items.field != 'taskName')&&(items.field != 'workCreaterAgencyId') && item.varMap.dataMap && item.varMap.taskCategoryId != '134000'\">\r\n                        <span *ngIf=\"items.field=='taskType'\">{{item.varMap.dataMap[items.field]|codeValuePie:approveParams}}</span>\r\n                        <span *ngIf=\"items.field!='taskType'\">{{item.varMap.dataMap[items.field]}}</span>\r\n                    </span>\r\n                    <span *ngIf=\"(items.field == 'taskName')&&(item.littleClassNo!='DXLC')\">{{item.taskName}}</span>\r\n                    <span *ngIf=\"(items.field == 'taskName')&&(item.littleClassNo=='DXLC')\">{{item.varMap.dataMap.taskName}}</span>\r\n                    <span *ngIf=\"items.field == 'workCreaterAgencyId'\">{{item.workCreaterAgencyName}}</span>\r\n                    <span *ngIf=\"item.varMap.dataMap && item.varMap.taskCategoryId == '134000'\">\r\n                        <span *ngIf=\"items.field == 'contactSoure'\">{{item.varMap.dataMap[items.field] | codeValuePie:tourcesPlanning}}</span>\r\n                        <span *ngIf=\"items.field == 'marketingContactWay'\">{{item.varMap.dataMap[items.field] | codeValuePie:contactInformation}}</span>\r\n                        <span *ngIf=\"items.field == 'marketingContactTheme'\"  title=\"{{item.marketingContactTheme | codeValuePie:linkageTheme:','}}\">{{item.varMap.dataMap[items.field]| codeValuePie:linkageTheme:','}}</span>\r\n                        <span *ngIf=\"items.field == 'pushObject'\">{{item.varMap.dataMap[items.field]| codeValuePie:PushType2}}</span>\r\n                        <span *ngIf=\"items.field!='contactSoure'&&items.field!='marketingContactWay'&&items.field!='marketingContactTheme'&&items.field!='pushObject'\">{{item.varMap.dataMap[items.field]}}</span>\r\n                    </span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"发起人\" field=\"workCreaterName\" [style]=\"{'width':'80px','font-size':'13px'}\"></p-column>\r\n            <p-column header=\"到达时间\" field=\"createDate\" [style]=\"{'width':'80px','font-size':'13px'}\"></p-column>\r\n            <p-column header=\"处理时间\" field=\"updateDate\" [style]=\"{'width':'80px','font-size':'13px'}\"></p-column>\r\n            <p-column header=\"状态\" field=\"\" *ngIf=\"whFlag == '1'\" [style]=\"{'width':'80px','font-size':'13px'}\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span style=\"color:red!important;\" *ngIf=\"item.isTimeout!='0'\">超时&nbsp;&nbsp;</span>\r\n                    <span *ngIf=\"item.viewFlag=='1'\">已查看</span>\r\n                    <span *ngIf=\"item.viewFlag=='0'\">未查看</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header='操作' field='' [style]=\"{'width':'120px','font-size':'13px'}\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)='toDoExam(item)' class=\"tableApprove\" style=\"font-size:12px;\">详情</span>\r\n                    <span (click)=\"viewProcessSchedule(item)\" class=\"historyIco\" style=\"font-size:12px;\">流程</span>\r\n                    <span (click)='ViewApprovalpath(item)' class=\"tabelApprovalPathIco\" style=\"font-size:12px;\">轨迹</span>\r\n                    <span (click)='toStop(item)' class=\"tabelStopIco\" style=\"font-size:12px;\" *ngIf=\"!item.disstop&&item.workCreater == userId&&workarr&&workarr.indexOf('1')!=-1\">终止</span>\r\n                    <span class=\"tabelStopSetIco\" style=\"font-size:12px;\" *ngIf=\"item.workCreater == userId&&item.disstop\">终止</span>\r\n                    <span (click)=\"backBtn(item)\" class=\"tabelRepealIco\" style=\"font-size:12px;\" *ngIf=\"workarr&&workarr.indexOf('2')!=-1\">追回</span>\r\n                    <span (click)='workerCall(2,item)' class=\"tableForwardIco\" style=\"font-size:12px;\" *ngIf=\"workarr&&workarr.indexOf('3')!=-1\">转发</span>\r\n                    <span class='imgOrFont' (click)='workerCall(3,item)' *ngIf=\"workarr&&workarr.indexOf('4')!=-1\">\r\n                        <span style=\"font-size: 20px!important;color: #19b0c8;\" class=\"icon iconfont img_display\">&#xe633;</span>\r\n                        <span class=\"img_no_display\" style=\"font-size:12px;\">分配</span>\r\n                    </span>\r\n                    <span class='imgOrFont' (click)='workerCall(4,item)' *ngIf=\"workarr&&workarr.indexOf('5')!=-1\">\r\n                        <span style=\"font-size: 20px!important;color: #19b0c8;\" class=\"icon iconfont img_display\">&#xe633;</span>\r\n                        <span class=\"img_no_display\" style=\"font-size:12px;\">转办</span>\r\n                    </span>\r\n                </ng-template>\r\n            </p-column>\r\n        </u-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"pageRows\">\r\n        <u-paginator first={{first}} rows=\"{{pageRows}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\">\r\n        </u-paginator>\r\n    </div>\r\n</div>\r\n\r\n<!--提示消息-->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!--审批详情弹框-->\r\n<p-dialog header=\"审批详情\" [(visible)]=\"creditApproveDisplay\" modal=\"modal\" [responsive]=\"false\" [positionTop]=10 class=\"my-workdesk-contactf\"\r\n    (onHide)=\"closeFirtproc()\">\r\n    <app-work-approve-detail *ngIf=\"creditApproveDisplay1\" (outValue)=\"creditApproveCall($event)\" [processId]=\"processId\"></app-work-approve-detail>\r\n    <app-credit-approve-detail *ngIf=\"creditApproveDisplay2\" (outValue)=\"creditApproveCall($event)\" [processId]=\"processId\" [taskId]=\"nowTaskId\"></app-credit-approve-detail>\r\n</p-dialog>\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n<!-- 现转发 by zj -->\r\n<p-dialog [(visible)]=\"personPage\" header=\"人员机构选择\" *ngIf=\"personPage\" modal=\"modal\" class=\"my-cust-overf\">\r\n    <forward-menber-tree (outValue)=\"peopleCall($event)\"></forward-menber-tree>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none-items/work-none-items.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none-items/work-none-items.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .btn {\n  text-align: center; }\n\n.module .custNo_a {\n  cursor: pointer;\n  color: #19b0c8; }\n\n.module .imgOrFont .img_no_display {\n  display: none; }\n\n.module .imgOrFont:hover .img_no_display {\n  display: inline-block;\n  color: #0094D2;\n  cursor: pointer;\n  font-weight: bold;\n  padding: 0px !important; }\n\n.module .imgOrFont:hover .img_display {\n  display: none; }\n\n.name-thing {\n  padding-bottom: 0; }\n\n.name-thing .ui-g-4 {\n    padding-bottom: 0; }\n\n.name-thing .ui-g-4 .ui-g-6 {\n      text-align: right; }\n\n.name-thing2 {\n  padding-bottom: 0; }\n\n.name-thing2 .ui-g-4 {\n    padding-top: 0; }\n\n.name-thing2 .ui-g-4 .ui-g-6 {\n      text-align: right; }\n\n.cont100 {\n  width: 100%;\n  height: 25px;\n  margin: 16px 0px 10px 0px; }\n\n.cont33 {\n  float: left;\n  width: 33%;\n  height: 25px; }\n\n.cont30 {\n  float: left;\n  width: 30%;\n  height: 25px;\n  line-height: 25px;\n  font-size: 14px; }\n\n.cont60 {\n  float: left;\n  width: 60%;\n  height: 25px; }\n\n.textAligin {\n  text-align: right;\n  line-height: 25px; }\n\n:host /deep/ .my-workdesk-contactf .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .my-workdesk-contactf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n:host/deep/.queryHeader .ui-calendar {\n  width: 173px; }\n\n.queryHeader input {\n  width: 173px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS93b3JrLW5vbmUvd29yay1ub25lLWl0ZW1zL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxccmVtaW5kZXItZG9cXGJhY2tsb2ctZGV0YWlsXFxidG4tcGFnZVxcd29yay1ub25lXFx3b3JrLW5vbmUtaXRlbXNcXHdvcmstbm9uZS1pdGVtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQixFQUFBOztBQUYxQjtFQUtRLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBTnRCO0VBVVksYUFBYSxFQUFBOztBQVZ6QjtFQWNnQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsdUJBQXVCLEVBQUE7O0FBbEJ2QztFQXFCZ0IsYUFBYSxFQUFBOztBQUs3QjtFQUNJLGlCQUFpQixFQUFBOztBQURyQjtJQUdRLGlCQUFpQixFQUFBOztBQUh6QjtNQUtXLGlCQUFpQixFQUFBOztBQUs1QjtFQUNJLGlCQUFpQixFQUFBOztBQURyQjtJQUdRLGNBQWMsRUFBQTs7QUFIdEI7TUFLVyxpQkFBaUIsRUFBQTs7QUFNNUI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUlyQjtFQUNJLHVCQUF1QjtFQUN2QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxXQUFXLEVBQUE7O0FBRWY7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS93b3JrLW5vbmUvd29yay1ub25lLWl0ZW1zL3dvcmstbm9uZS1pdGVtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGV7XHJcbiAgICAuYnRuIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY3VzdE5vX2F7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgfVxyXG4gICAgLmltZ09yRm9udCB7XHJcbiAgICAgICAgLmltZ19ub19kaXNwbGF5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIC5pbWdfbm9fZGlzcGxheSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwOTREMjtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmltZ19kaXNwbGF5IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm5hbWUtdGhpbmd7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIC51aS1nLTR7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgLnVpLWctNntcclxuICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4ubmFtZS10aGluZzJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIC51aS1nLTR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgLnVpLWctNntcclxuICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLmNvbnQxMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW46IDE2cHggMHB4IDEwcHggMHB4O1xyXG59XHJcblxyXG4uY29udDMzIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLmNvbnQzMCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNvbnQ2MCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuLnRleHRBbGlnaW4ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG5cclxuXHJcbjpob3N0IC9kZWVwLyAubXktd29ya2Rlc2stY29udGFjdGYgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAubXktd29ya2Rlc2stY29udGFjdGYgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuOmhvc3QvZGVlcC8ucXVlcnlIZWFkZXIgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAxNzNweDtcclxufVxyXG4ucXVlcnlIZWFkZXIgaW5wdXR7XHJcbiAgICB3aWR0aDogMTczcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none-items/work-none-items.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none-items/work-none-items.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: WorkNoneItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkNoneItemsComponent", function() { return WorkNoneItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/common/service/http.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/service/http.service.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/tzb/common/http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var app_pages_tzb_custom_custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/pages/tzb/custom/custom-contact-new/custom-constant/custom-code-value */ "./src/app/pages/tzb/custom/custom-contact-new/custom-constant/custom-code-value.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var WorkNoneItemsComponent = /** @class */ (function () {
    function WorkNoneItemsComponent(commonHttpService, customeHttpService, httpService, commfunc, router, activatedRouter, confirmationService, creditCcmService, processInstanceManagementService) {
        var _this = this;
        this.commonHttpService = commonHttpService;
        this.customeHttpService = customeHttpService;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.confirmationService = confirmationService;
        this.creditCcmService = creditCcmService;
        this.processInstanceManagementService = processInstanceManagementService;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"];
        this.scheduleTypeId3 = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.itemsSmallType = [];
        this.msgs = [];
        this.first = 0;
        this.tableList = [];
        this.approveParams = [];
        this.tableTitleList = [];
        this.queryList = [];
        this.stopFlag = true;
        this.creditApproveDisplay = false;
        this.creditApproveDisplay1 = false;
        this.creditApproveDisplay2 = false;
        this.contactInformation = app_pages_tzb_custom_custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_13__["ContactInformation"]; //联系方式
        this.linkageTheme = app_pages_tzb_custom_custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_13__["LinkageTheme"]; //联系主题
        this.tourcesPlanning = app_pages_tzb_custom_custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_13__["TourcesPlanning"]; //计划来源
        this.PushType2 = app_pages_tzb_custom_custom_contact_new_custom_constant_custom_code_value__WEBPACK_IMPORTED_MODULE_13__["PushType2"]; // 推送类型
        this.disstop = false;
        this.personPage = false;
        //事项小类动态业务数据展示
        /**
         *
         * @param queryType 查询类型：0-查询条件;1-表头
         * @param taskCategoryId 流程模板编号
         * @param nodeCode 流程节点编号
         */
        this.tableTitleListonly = [];
        this.codeValues();
        this.scheduleTypeId3 = this.code['ScheduleType'];
        this.itemsSmallType = this.code['ItemType'];
        this.approveParams = this.code['approveParams'];
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
        this.activatedRouter.queryParams.subscribe(function (params) {
            _this.flag = params.flag;
            _this.num = params.totalNum;
        });
    }
    WorkNoneItemsComponent.prototype.ngOnInit = function () {
        this.pageInit();
    };
    WorkNoneItemsComponent.prototype.ngOnChanges = function () {
        this.pageInit();
    };
    WorkNoneItemsComponent.prototype.pageInit = function () {
        var _this = this;
        this.taskId = null;
        this.tasktype = null;
        this.workarr = null;
        var par = {
            limit: "10",
            page: "1",
            paramName: 'work-noneFunctionConfig',
        };
        this.commonHttpService.queryCommonParamService(par).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.returnCommonParamList && data.returnCommonParamList.length > 0) {
                    var arr = data.returnCommonParamList[0];
                    _this.commonHttpService.queryCommonParamItemService(arr).subscribe(function (data1) {
                        if (data1.returnCode.code == 'success') {
                            if (data1.returnCommonParamItemList && data1.returnCommonParamItemList.length > 0) {
                                for (var p = 0; p < data1.returnCommonParamItemList.length; p++) {
                                    var el = data1.returnCommonParamItemList[p];
                                    if (el.paramItemName == _this.inNav['littleClassNo']) {
                                        _this.workarr = el.paramItemValue;
                                        break;
                                    }
                                }
                            }
                        }
                    });
                }
            }
        });
        if (this.commfunc.getSessionDataCH('saveMSGIdentyfy') && this.commfunc.getSessionDataCH('saveMSGIdentyfy') == 'true') {
            this.commfunc.clearSession('saveMSGIdentyfy');
        }
        this.paramNUM = '1';
        var session = window.sessionStorage;
        if (session.getItem('para')) {
            session.removeItem('para');
        }
        this.querySecle('1');
    };
    WorkNoneItemsComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    WorkNoneItemsComponent.prototype.querySecle = function (isOnit) {
        var param = '';
        if (isOnit != '1') {
            for (var _i = 0, _a = this.queryList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.key && item.i) {
                    // debugger
                    if (!param && item.i != 'createDateFrom' && item.i != 'createDateTo') {
                        param = item.i + "=" + ("'" + item.key + "'");
                    }
                    else if (param && item.i != 'createDateFrom' && item.i != 'createDateTo') {
                        param = param + (" and " + item.i + "=" + ("'" + item.key + "'"));
                    }
                    else if (!param && item.i == 'createDateFrom' && item.key) {
                        item.key = this.commfunc.transDateN(item.key);
                        param = "create_date>" + ("'" + item.key + "'");
                    }
                    else if (!param && item.i == 'createDateTo' && item.key) {
                        item.key = this.commfunc.transDateN(item.key);
                        param = "create_date<" + ("'" + item.key + "'");
                    }
                    else if (param && item.i == 'createDateFrom' && item.key) {
                        item.key = this.commfunc.transDateN(item.key);
                        param = param + (" and create_date > " + ("'" + item.key + "'"));
                    }
                    else if (param && item.i == 'createDateTo' && item.key) {
                        item.key = this.commfunc.transDateN(item.key);
                        param = param + (" and create_date < " + ("'" + item.key + "'"));
                    }
                }
            }
        }
        var session = window.sessionStorage;
        if (session.getItem('bussinessWhere')) {
            this.bussinessWhereDATA = session.getItem('bussinessWhere');
            if (this.bussinessWhereDATA.indexOf('startUserId') != -1) {
                var t = this.bussinessWhereDATA.split('=');
                this.startUserId = t[1];
                if (param != '') {
                    this.bussinessWhere = param;
                }
            }
            else {
                var a = this.bussinessWhereDATA + ' and ' + param;
                if (param != '') {
                    this.bussinessWhere = a;
                }
                else {
                    this.bussinessWhere = this.bussinessWhereDATA;
                }
            }
        }
        else {
            this.bussinessWhere = param;
        }
        if (session.getItem('month')) {
            this.startDate = JSON.parse(session.getItem('month')).startDate;
            this.endDate = JSON.parse(session.getItem('month')).endDate;
            if (this.bussinessWhere != '') {
                this.bussinessWhere = this.bussinessWhere + 'and' + "('" + this.startDate + "' <" + "create_date" + ' and create_date' + "<'" + this.endDate + "')";
            }
            else {
                this.bussinessWhere = "'" + this.startDate + "' <" + "create_date" + ' and create_date' + "<'" + this.endDate + "'";
            }
        }
        this.pageRows = 10;
        this.curPage = 1;
        this.first = 0;
        this.bpmQueryTaskList();
    };
    // 重置
    WorkNoneItemsComponent.prototype.reset = function () {
        for (var _i = 0, _a = this.queryList; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.key) {
                item.key = '';
            }
        }
        this.bussinessWhere = '';
        this.workCreateName = undefined;
        this.startUserId = undefined;
        this.pageRows = 10;
        this.curPage = 1;
        this.first = 0;
        this.querySecle();
    };
    // 终止按钮
    WorkNoneItemsComponent.prototype.toStop = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要终止?',
            accept: function () {
                var param = {
                    userId: _this.userId,
                    taskId: item.taskId,
                    tranType: 'A0',
                    doResion: '4',
                };
                _this.customeHttpService.bpmUserTaskManage(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        item['disstop'] = true;
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
                });
            }
        });
    };
    WorkNoneItemsComponent.prototype.doUp = function () {
        var _this = this;
        setTimeout(function () {
            // 	this.pageRows = 10;
            // 	this.curPage = 1;
            // 	this.querySecle();
            var session = window.sessionStorage;
            var url = window.location.href;
            var c;
            if (url.indexOf('?') != -1) {
                var a = url.split('?');
                var h = a[0];
                if (h.indexOf('-search-search') != -1) {
                    var k = h.split('');
                    var j = k.length - 7;
                    var g = h.slice(0, j);
                    c = g + '?';
                }
                else {
                    c = h + '-search?';
                }
                var Url = c + a[1];
                var arr = Url.split('#');
                _this.router.navigateByUrl(arr[1]);
            }
        }, 300);
    };
    //办结事项任务明细查询
    WorkNoneItemsComponent.prototype.bpmQueryTaskList = function () {
        var _this = this;
        this.itemType = null;
        var nodeType;
        var startUserId;
        var bussinessWhere;
        if (this.num == '3') {
            nodeType = 0;
        }
        else if (this.num == '4') {
            nodeType = 1;
        }
        if (this.bussinessWhere) {
            bussinessWhere = this.bussinessWhere;
        }
        if (this.startUserId) {
            startUserId = this.startUserId;
        }
        var arr = this.inNav.systemCode.split(';');
        var a = arr[0].split(':');
        var b = arr[1].split(':');
        this.itemType = a[0];
        var pram = {
            userId: this.userId,
            isAllNode: false,
            isEndProcess: false,
            itemType: a[0],
            itemNode: b[0],
            first: this.first,
            curPage: this.curPage,
            pageRows: this.pageRows,
            nodeType: nodeType,
            bussinessWhere: bussinessWhere,
            startUserId: startUserId,
        };
        this.customeHttpService.bpmQueryTaskOnlyList(pram).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                data.pageData.result.forEach(function (el) {
                    el.createDate = el.createDate.slice(0, 16);
                    el.updateDate = el.updateDate.slice(0, 16);
                });
                _this.tableList = lodash__WEBPACK_IMPORTED_MODULE_12__["clone"](data.pageData.result);
                _this.total = lodash__WEBPACK_IMPORTED_MODULE_12__["clone"](data.pageData.totalRows);
                if (_this.paramNUM == '1') {
                    var param = '';
                    if (data.pageData.result[0].littleClassNo) {
                        param = data.pageData.result[0].littleClassNo;
                    }
                    //动态业务参数查询条件
                    _this.queryTaskNoteMessage('1', param);
                    //动态业务参数表头
                    _this.queryTaskNoteMessage('2', param);
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    // 关闭审批详情
    WorkNoneItemsComponent.prototype.closeFirtproc = function () {
        this.nowTaskId = undefined;
        this.creditApproveDisplay = false;
        this.creditApproveDisplay1 = false;
        this.creditApproveDisplay2 = false;
    };
    // 审批详情弹框回调方法
    WorkNoneItemsComponent.prototype.creditApproveCall = function () {
        this.creditApproveDisplay1 = false;
        this.creditApproveDisplay2 = false;
        this.creditApproveDisplay = false;
    };
    // 查看流程进度
    WorkNoneItemsComponent.prototype.viewProcessSchedule = function (item) {
        var processCodeParam = encodeURIComponent(item.processCode);
        var params = "/" + item.processCode + "/" + item.processId + "/" + item.processState + "/userId001/sysCode001/tokenCode001";
        this.processInstanceManagementService.toActivitiSchedule(params);
    };
    // 查看审批轨迹
    WorkNoneItemsComponent.prototype.ViewApprovalpath = function (item) {
        this.processId = item.processId;
        if (item.littleClassNo == 'RUM0001') {
            this.nowTaskId = 'sub';
            this.creditApproveDisplay2 = true;
        }
        else {
            this.nowTaskId = undefined;
            this.creditApproveDisplay1 = true;
        }
        this.creditApproveDisplay = true;
    };
    // 分页
    WorkNoneItemsComponent.prototype.paginate = function (event) {
        this.pageRows = event.rows * 1;
        var currentPage = event.page + 1;
        this.curPage = currentPage;
        this.first = (currentPage - 1) * this.pageRows;
        this.bpmQueryTaskList();
    };
    //追回
    WorkNoneItemsComponent.prototype.backBtn = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要追回?',
            accept: function () {
                var param = {
                    userId: _this.userId,
                    taskId: item.taskId,
                    tranType: 'A1',
                    doResion: '3',
                };
                if (item.mainFlowNo) {
                    _this.setSerialNumber(item.mainFlowNo);
                }
                _this.customeHttpService.bpmUserTaskManage(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
                });
            }
        });
    };
    WorkNoneItemsComponent.prototype.workerCall = function (i, item) {
        if (i) {
            this.tasktype = i;
        }
        ;
        this.taskId = item.taskId;
        this.personPage = true;
    };
    // 现转发
    WorkNoneItemsComponent.prototype.peopleCall = function (peoplearr) {
        var _this = this;
        this.personPage = false;
        var a = [];
        var b = [];
        var c;
        var d;
        var msg;
        for (var i = 0; i < peoplearr.length; i++) {
            a.push(peoplearr[i]['tellerId']); //取出转人ID
            b.push(peoplearr[i]['tellerName']); //取出转人名称
        }
        if (this.tasktype) {
            if (this.tasktype == '2') {
                d = '转发';
            }
            else if (this.tasktype == '3') {
                d = '转分配';
            }
            else if (this.tasktype == '4') {
                d = '转办';
            }
        }
        if (b.length > 3) {
            c = b.splice(0, 3).join(',');
            msg = '确认' + d + c + '等' + peoplearr.length + '名人员?';
        }
        else {
            msg = '确认' + d + b + peoplearr.length + '名人员?';
        }
        this.musId = a.join(',');
        this.confirmationService.confirm({
            message: msg,
            accept: function () {
                if (_this.tasktype && _this.tasktype == '2') {
                    var param = {
                        userId: _this.userId,
                        taskId: _this.taskId,
                        targetUserId: _this.musId,
                        taskType: '0',
                    };
                    _this.processInstanceManagementService.bpmadditionTask(param).subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
                            _this.msgs = [];
                            _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                        }
                    }, function (error) {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
                    });
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '服务暂没！！！攻城狮在捉急弄' }];
                }
            },
        });
    };
    WorkNoneItemsComponent.prototype.setSerialNumber = function (serialNum) {
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader['globalSeqNo'] = serialNum;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
    };
    // 详情查看-传入标识markFlag
    WorkNoneItemsComponent.prototype.toDoExam = function (data) {
        var _this = this;
        console.log("ad");
        // 客户联系跳入详情标识
        data['detailFlag'] = 2; // 客户联系进入详情标识： 1： 办结事项进入详情； 2：已办事项
        var worktype = { worktype: data.workType };
        this.commfunc.setSessionDataCH('workType', JSON.stringify(worktype));
        if (this.activatedRouter.snapshot.queryParams['flag'] == '2') {
            data['markFlag'] = '2';
        }
        else {
            data['markFlag'] = '1';
        }
        if (!(data.varMap.taskCategoryId.indexOf('RUM0005') < 0) ||
            !(data.varMap.taskCategoryId.indexOf('RUM0009') < 0) ||
            !(data.varMap.taskCategoryId.indexOf('RUM_0020') < 0) ||
            !(data.varMap.taskCategoryId.indexOf('XYKZCRGSPLC') < 0) ||
            !(data.varMap.taskCategoryId.indexOf('RUM_0023') < 0) ||
            !(data.varMap.taskCategoryId.indexOf('RUM_0022') < 0)) {
            var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            var post_name = JSON.parse(this.commfunc.getSessionDataCH('postIdList'));
            var products_1 = '';
            if (data.varMap.dataMap.productNo) {
                products_1 = data.varMap.dataMap.productNo;
            }
            else {
                products_1 = data.varMap.dataMap.productId;
            }
            var params = {};
            if (data.varMap.taskCategoryId == "RUM_0020" || data.varMap.taskCategoryId == "RUM_0026") {
                params = {
                    businessType: "17",
                    'roleId': post_name,
                    'viewIndex': 1,
                    'viewSize': 100,
                };
            }
            else {
                params = {
                    'productNo': products_1,
                    'roleId': post_name,
                    'viewIndex': 1,
                    'viewSize': 100,
                };
            }
            //如果flag为‘2’则是从已办进入的
            var flag_1 = '';
            if (this.activatedRouter.snapshot.queryParams['flag'] == '2') {
                flag_1 = '2';
            }
            else {
                flag_1 = '';
            }
            this.creditCcmService.queryViewRelations(params).subscribe(function (datas) {
                if (datas.returnCode.code === 'success') {
                    if (datas.list.length > 0) {
                        var param_1, pageParams_1, littleClassNo = void 0;
                        if (!(data.varMap.taskCategoryId.indexOf('RUM0009') < 0)) {
                            var viewId_1 = [];
                            datas.list.forEach(function (e) {
                                if (e.viewName.match('卡要素')) {
                                    viewId_1.push({ a: e.viewConfigId, b: e.viewName });
                                }
                            });
                            _this.commfunc.setSessionDataCH('viewId', JSON.stringify(viewId_1));
                            for (var i = 0; i < datas.list.length; i++) {
                                if (datas.list[i].viewName.match('卡要素')) {
                                    _this.stopFlag = false;
                                    param_1 = {
                                        'viewConfigId': datas.list[i]['viewConfigId'],
                                        'viewName': datas.list[i]['viewName'],
                                        'flag': true //审批标识
                                    };
                                    pageParams_1 = {
                                        'viewConfigId': datas.list[i]['viewConfigId'],
                                        'viewName': datas.list[i]['viewName'],
                                        'custNo': data.varMap.dataMap.custNo,
                                        'custName': data.varMap.dataMap.custName,
                                        'custRequestNo': data.varMap.custRequestNo,
                                        'productNo': products_1,
                                        'productName': data.varMap.dataMap.productName,
                                        'isView': '',
                                        'businessType': data.varMap.dataMap.businessType,
                                        'processId': data.processId,
                                        'taskId': data.taskId,
                                        'workCreater': data.workCreater,
                                        'guaranteeType': data.varMap.dataMap.guaranteeType,
                                        'applyAmt': data.varMap.dataMap.applyAmt,
                                        'varMap': data.varMap,
                                        'taskRate': data.taskRate,
                                        'custRequestId': data.varMap.custRequestId,
                                        'endDate': data.varMap.dataMap.endDate,
                                        'taskType': data.taskType,
                                        'stageType': data.varMap.stageType,
                                        'taskName': data.taskName,
                                        'assActorId': data.varMap.dataMap['assActorId'],
                                        'requestSeqNo': data.varMap.requestSeqNo,
                                        'flag': flag_1,
                                        'processState': data.processState,
                                    };
                                    break;
                                }
                            }
                        }
                        else {
                            var viewId_2 = [];
                            datas.list.forEach(function (e) {
                                if (!e.viewName.match('卡要素')) {
                                    viewId_2.push({ a: e.viewConfigId, b: e.viewName });
                                }
                            });
                            _this.commfunc.setSessionDataCH('viewId', JSON.stringify(viewId_2));
                            for (var i = 0; i < datas.list.length; i++) {
                                var str = '卡要素';
                                if (datas.list[i].viewName.indexOf(str) == -1) {
                                    _this.stopFlag = false;
                                    param_1 = {
                                        'viewConfigId': datas.list[i]['viewConfigId'],
                                        'viewName': datas.list[i]['viewName'],
                                    };
                                    pageParams_1 = {
                                        'viewConfigId': datas.list[i]['viewConfigId'],
                                        'viewName': datas.list[i]['viewName'],
                                        'custNo': data.varMap.dataMap.custNo,
                                        'custName': data.varMap.dataMap.custName,
                                        'custRequestNo': data.varMap.custRequestNo,
                                        'productNo': products_1,
                                        'productName': data.varMap.dataMap.productName,
                                        'isView': '',
                                        'businessType': data.varMap.dataMap.businessType,
                                        'processId': data.processId,
                                        'taskId': data.taskId,
                                        'workCreater': data.workCreater,
                                        'guaranteeType': data.varMap.dataMap.guaranteeType,
                                        'applyAmt': data.varMap.dataMap.applyAmt,
                                        'varMap': data.varMap,
                                        'taskRate': data.taskRate,
                                        'custRequestId': data.varMap.custRequestId,
                                        'endDate': data.varMap.dataMap.endDate,
                                        'stageType': data.varMap.stageType,
                                        'taskName': data.taskName,
                                        'taskType': data.taskType,
                                        'assActorId': data.varMap.dataMap['assActorId'],
                                        'requestSeqNo': data.varMap.requestSeqNo,
                                        'flag': flag_1,
                                        'processState': data.processState,
                                        'mainFlowNo': data.mainFlowNo,
                                        'taskCode': data.taskCode,
                                        'workType': data.workType
                                    };
                                    break;
                                }
                            }
                        }
                        if (_this.stopFlag) {
                            _this.msgs = [{ severity: 'info', summary: '错误', detail: '产品和岗位未关联页面,请配置关联页面' }];
                        }
                        littleClassNo = data.littleClassNo;
                        var commonHeader_1 = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        commonHeader_1['extParam']['littleClassNo'] = littleClassNo;
                        _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
                        if (data.varMap.taskCategoryId == "RUM_0023" || data.varMap.taskCategoryId == "RUM_0022") {
                            pageParams_1['custRequestNo'] = data.varMap.dataMap.custRequestNo;
                        }
                        _this.commfunc.setSessionDataCH('creditDataWorkFlow', JSON.stringify(pageParams_1));
                        if (flag_1 == '2') {
                            param_1['ckhs'] = 'Y';
                        }
                        // RUM_0020批量预授信
                        if (data.varMap.taskCategoryId == "RUM_0026" || data.varMap.taskCategoryId == "RUM_0020") {
                            // console.log("pp")
                            // this.commfunc.setSessionDataCH('approvalBatchBean', JSON.stringify({
                            // 	batchId: data.varMap.dataMap.batchId || null,
                            // 	groupId: data.varMap.dataMap.groupId || null
                            // }));
                            // 获取批量预授信客户群信息
                            var batchDetail = new Promise(function (resolve) {
                                _this.queryBatchDetail(data.varMap.dataMap, resolve);
                            });
                            var batchGroup = new Promise(function (resolve) {
                                _this.queryGroupInfo(data.varMap.dataMap, resolve);
                            });
                            Promise.all([batchDetail, batchGroup]).then(function (res) {
                                var datas = {
                                    detailData: res[0]["detailDtas"],
                                    groupData: res[1]["groupDtas"],
                                    self: '3',
                                    selfTwo: '2',
                                    worktype: data.workType || null
                                };
                                param_1['batchIsNo'] = 'Y';
                                _this.commfunc.setSessionDataCH('groupBranchData', JSON.stringify(datas));
                                var batchworktype = '0';
                                if (data.taskRate == '1' && (data.workType == '4' || data.workType == '5' || data.workType == '7')) {
                                    batchworktype = '1';
                                }
                                // 追回 plRecover
                                // 追回
                                console.log(pageParams_1);
                                _this.commfunc.setSessionDataCH('inputParam', JSON.stringify({ transferCreditData: pageParams_1 }));
                                _this.router.navigate(['/pages/tzb/custom/credit-ccm/viewPage', JSON.stringify({ plRecover: '1', businessType: "17", notApply: '2', worktype: batchworktype })]);
                                // businessType: "17", notApply: notApply,
                                // this.router.navigate(['/pages/tzb/custom/credit-ccm/viewPage', JSON.stringify({ businessType: "17", notApply: '2', worktype: batchworktype })]);
                                // this.queryViewRelations(item, notApply);
                            });
                        }
                        else {
                            _this.router.navigate(['/pages/tzb/custom/credit-ccm/viewPage', JSON.stringify(param_1)]);
                        }
                    }
                    else {
                        _this.msgs = [{ severity: 'info', summary: '错误', detail: '产品和岗位未关联页面,请配置关联页面' }];
                    }
                }
                else {
                    _this.msgs = [{ severity: 'error', summary: '错误', detail: datas.returnCode.message }];
                }
            });
        }
        // else if(data.varMap.taskCategoryId == 'RUM0011' ) {
        // 	    let param = 
        // 		this.commfunc.setSessionDataCH('overdue-params-from-reminder-do', JSON.stringify(param));
        // 		this.router.navigate(["/pages/tzb/custom/overdue/overdue-case", { from: 'reminder-do' }])
        // }
        else if (!(data.varMap.systemIdCode.indexOf('RUM0011') < 0)) {
            // 参数
            var paramVarMap = {
                createDate: data.varMap.createDate,
                processId: data.varMap.processId,
                taskId: data.taskId,
                bigClassName: data.varMap.bigClassName,
                littleClassName: data.varMap.littleClassName,
                workCreateName: data.varMap.workCreaterName,
                processCode: data.varMap.processCode,
                markFlag: data['markFlag'],
                scheduleType: 'choose',
                dataMap: JSON.stringify(data.varMap.dataMap),
                taskName: data.varMap.taskName,
                taskRate: data.varMap.taskRate,
                littleClassNo: data.varMap.littleClassNo,
                mainFlowNo: data.mainFlowNo,
                workType: data.varMap.workType,
            };
            this.commfunc.setSessionDataCH('overdue-params-from-reminder-do', JSON.stringify(paramVarMap));
            //跳转模块化
            // let commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            var littleClassNo = data.littleClassNo;
            var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            commonHeader['extParam']['littleClassNo'] = littleClassNo;
            commonHeader['globalSeqNo'] = data.mainFlowNo;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
            // let post_name = JSON.parse(this.commfunc.getSessionDataCH('postIdList'));
            // let post_name = JSON.parse(this.commfunc.getSessionDataCH('postIdList'));
            var post_name = [commonHeader['extParam']['postId']]; //逾期只传当前岗位ID
            var params = {
                businessType: "08",
                'roleId': post_name,
                'viewIndex': 1,
                'viewSize': 100,
            };
            this.creditCcmService.queryViewRelations(params).subscribe(function (datas) {
                if (datas.returnCode.code === 'success') {
                    if (datas.list.length > 0) {
                        var viewId_3 = [];
                        datas.list.forEach(function (e) {
                            // if (e.viewName.match('卡要素')) {
                            viewId_3.push({ a: e.viewConfigId, b: e.viewName });
                            // }
                        });
                        _this.commfunc.setSessionDataCH('viewId', JSON.stringify(viewId_3));
                        // let param = {
                        // }
                        // this.router.navigate(['/pages/tzb/custom/credit-ccm/viewPage', JSON.stringify(param)]);
                        // /pages/tzb/custom/overdue/overdue-case
                        _this.router.navigate(["/pages/tzb/custom/overdue/overdue-case", {
                                from: 'reminder-do',
                                taskId: data.taskId,
                                processId: data.processId,
                                detail: '1'
                            }]);
                    }
                    else {
                        _this.msgs = [{ severity: 'info', summary: '错误', detail: '产品和岗位未关联页面,请配置关联页面' }];
                    }
                }
                else {
                    _this.msgs = [{ severity: 'error', summary: '错误', detail: datas.returnCode.message }];
                }
            });
        }
        else {
            this.commfunc.toDisposeSchedule(data);
        }
    };
    // 客户群信息查询queryCustGroupInfo
    WorkNoneItemsComponent.prototype.queryGroupInfo = function (item, resolve) {
        var _this = this;
        var params = {
            "permissionFlag": "1",
            "advanceInput": "0",
            "groupType": "0",
            "pageNum": 1,
            "pageSize": 10,
            "conditionList": [
                [
                    {
                        "field": "group_id",
                        "operator": "=",
                        "value": item.groupId
                    }
                ]
            ],
        };
        this.httpService.queryCustGroupInfo(params).subscribe(function (result) {
            if (result.returnCode.code == 'success') {
                var data = result.resultList[0] || {};
                console.log("oop");
                var datas = {
                    cust_num: data.open_num || null,
                    valid_cust_num: data.valid_cust_num || null,
                    valid_cov_rate: data.valid_ratio || null,
                    crdt_cust_num: data.CRDT_CUST_NUM || null,
                    pre_crdt_amt: data.pre_credit_limit || null,
                    // crdt_cust_num:data.cust_num || null,//已授信客户数
                    pre_crdt_cust_num: data.PRE_CRDT_CUST_NUM,
                    crdt_amt: data.CRDT_AMT || null,
                    crdt_bal: data.CRDT_BAL || null,
                    loan_cust_num: data.LOAN_CUST_NUM || null,
                    // crdt_amt:data.cust_num || null,//已用信额度总和
                    CRDT_AMT_USED: data.CRDT_AMT_USED,
                    GROUP_ID: data.group_id || null,
                    GROUP_NAME: data.group_name || null,
                    GROUP_TYPE: data.group_type || null,
                    GROUP_OWNER_NAME: data.group_owner || null,
                    GROUP_OWNER_ID: data.group_owner_id || null,
                    GROUP_LINKMANNAME: data.group_of_contacts || null,
                    GROUP_LINKMANID: data.group_of_contacts_id || null,
                    ORG_NAME: data.org_id || null,
                    ADDRESS: data.address_message || null,
                    PRODUCT_CODE: data.featured_products || null,
                    INT: data.INT || null,
                    ORG_ID: data.create_org_id || null,
                    subGroupType: data.subGroupType || null //所属区域
                };
                resolve({
                    groupDtas: datas
                });
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: result.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    //查询详细信息
    WorkNoneItemsComponent.prototype.queryBatchDetail = function (item, resolve) {
        var _this = this;
        var params = {
            batchId: item.batchId
        };
        this.httpService.queryBatchPreCreditInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var datas = {
                    batchId: data.batchId,
                    operType: data.operType,
                    state: data.state,
                    groupId: data.groupId,
                    groupName: data.groupName,
                    productId: data.productId,
                    productName: data.productName,
                    guaranteeType: data.guaranteeType,
                    contractType: data.contractType,
                    endDate: data.endDate,
                    rateKind: data.rateKind,
                    returnKind: data.returnKind,
                    note: data.note,
                    operId: data.operId,
                    operName: data.operName,
                    bankId: data.bankId,
                    bankName: data.bankName,
                    acDate: data.acDate,
                    Permissioncontrol: data.permissionControler
                };
                resolve({
                    detailDtas: datas
                });
                // this.commfunc.setSessionDataCH('groupBranchData', JSON.stringify(datas))
                // this.queryViewRelations(item);
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    //页面信息查询
    WorkNoneItemsComponent.prototype.queryViewRelations = function (products, post_name, resolve) {
        var _this = this;
        var params = {
            productNo: products,
            roleId: post_name,
            viewIndex: 1,
            viewSize: 100,
        };
        this.creditCcmService.queryViewRelations(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                resolve({ viewData: data.list });
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    //点击客户号跳转
    WorkNoneItemsComponent.prototype.toCustView = function (data) {
        if (data.relationKey == 'party') {
            this.commfunc.setSessionData('custNo', data.partyOrGroupNo);
            window.open('#/pages/custom-view/general', '_blank');
        }
        else if (data.relationKey == 'partyGroup') {
            window.open("#/pages/tzb/custom/custom-group/custom-group-view?groupId=" + data.partyOrGroupNo, '_blank');
        }
    };
    // ---------------以下保留之前代码-------------------------------
    // 进入审批
    WorkNoneItemsComponent.prototype.toDisposeSchedule = function (item) {
        this.commfunc.doDeal(item);
    };
    WorkNoneItemsComponent.prototype.queryTaskNoteMessage = function (queryType, taskCategoryId) {
        var _this = this;
        var param = {
            queryType: queryType,
            taskCategoryId: taskCategoryId
        };
        this.httpService.queryTaskNoteMessage(param).subscribe(function (data) {
            if (data.returnCode.code = 'success') {
                //查询条件
                if (queryType == '1') {
                    _this.queryList = [];
                    if (data.taskNoteMessageList && data.taskNoteMessageList.length > 0) {
                        var item = data.taskNoteMessageList[0]['textMsg'];
                        for (var i in item) {
                            var obj = {};
                            if (item.hasOwnProperty(i)) {
                                obj['i'] = item[i].split('|')[0];
                                obj['key'] = '';
                                obj['label'] = item[i].split('|')[1];
                                _this.queryList.push(obj);
                                _this.queryList = lodash__WEBPACK_IMPORTED_MODULE_12__["clone"](_this.queryList);
                            }
                        }
                    }
                    else {
                        _this.queryList = [];
                    }
                    _this.queryList.push({ i: "startUserId", key: "", label: "发起人" }, { i: "createDateFrom", key: "", label: "创建起始日期" }, { i: "createDateTo", key: "", label: "创建截止日期" });
                    console.log(_this.queryList);
                }
                //查询表头
                if (queryType == '2') {
                    _this.tableTitleListonly = [];
                    _this.tableTitleList = [];
                    var item = void 0;
                    if (_this.itemType && _this.itemType == 'SXSX') {
                        _this.tableTitleListonly.push({ field: "littleClassName", header: "事项名称" });
                    }
                    item = lodash__WEBPACK_IMPORTED_MODULE_12__["clone"](data.taskNoteMessageList[0]['textMsg']);
                    for (var i in item) {
                        var obj = {};
                        if (item.hasOwnProperty(i)) {
                            obj['field'] = item[i].split('|')[0];
                            obj['header'] = item[i].split('|')[1];
                            _this.tableTitleList.push(obj);
                        }
                    }
                    console.log(_this.tableTitleList);
                }
                _this.paramNUM = '2';
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WorkNoneItemsComponent.prototype, "inNav", void 0);
    WorkNoneItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'work-none-items',
            template: __webpack_require__(/*! ./work-none-items.component.html */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none-items/work-none-items.component.html"),
            styles: [__webpack_require__(/*! ./work-none-items.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none-items/work-none-items.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomeHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_7__["CreditCcmService"], app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_8__["ProcessInstanceManagementService"], app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"], primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_10__["MessageService"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_11__["CommonHttpService"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CustomeHttpService"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"],
            app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_7__["CreditCcmService"],
            app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_8__["ProcessInstanceManagementService"]])
    ], WorkNoneItemsComponent);
    return WorkNoneItemsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"module\" id='appR'>\r\n    <div class=\"ui-g-12\" *ngIf=\"!nodata\">\r\n        <div class=\"ui-g-2\">\r\n            <div class=\"div2\">\r\n                <div class=\"middle\">\r\n                    <div class=\"leftMenu\">\r\n                        <div class=\"menu_list\">\r\n                            <ul>\r\n                                <li class=\"\" *ngFor=\"let pro of ulData\">\r\n                                    <img class=\"xiala\" src=\"../../../../../../assets/layout/images/menu.png\" />\r\n                                    <p title='{{pro.bigClassName}}' class=\"fuMenu\" style=\"display:flex;\">\r\n                                        <span style='flex:1;'> {{pro.bigClassName}}</span>\r\n                                        <span style=\"color:red!important;\" *ngIf=\"pro.bigtimeOutCount!=0\">{{pro.bigtimeOutCount}}</span>\r\n                                        <i *ngIf=\"pro.bigtimeOutCount!=0\">|</i>\r\n                                        <span style=\"margin-right:10px;\">{{pro.bigsysCount}}</span>\r\n                                    </p>\r\n                                    <div class=\"div1\">\r\n                                        <p title=\"{{nav.littleClassName}}\" (click)='navclick(nav)' class=\"zcd\" *ngFor=\"let nav of pro.childpage\">\r\n                                            <!-- <span class='ct'>T</span>\r\n                                            <span class='ct'>C</span> -->\r\n                                            <span class=\"littlename\"> {{nav.littleClassName}}</span>\r\n                                            <span style=\"color:red!important;\" *ngIf=\"nav.timeOutCount!=0\">{{nav.timeOutCount}}</span>\r\n                                            <i *ngIf=\"nav.timeOutCount!=0\">|</i>\r\n                                            <span style=\"margin-right:10px;\">{{nav.sysCount}}</span>\r\n                                        </p>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-10\">\r\n            <work-none-items *ngIf=\"disinNav\" [inNav]=\"inNav\"></work-none-items>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"nodata\" class=\"noData\"></div>\r\n</div>\r\n<!-- 旋转 -->\r\n<div class=\"ui-g-12\" *ngIf=\"maskLayer\">\r\n    <div id=\"popWindow\" class=\"popWindow\" style=\"display:block\"></div>\r\n    <div class=\"maskLayer ui-g-12\">\r\n        <img src=\"../../../../../../../../assets/layout/images/loading1.gif\" alt=\"\" class=\"maskLayer\">\r\n    </div>\r\n</div>\r\n<!--提示消息-->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .tit {\n  text-align: right; }\n\n.module .btn {\n  text-align: center; }\n\n.module .div2 {\n  background-color: #fff;\n  height: 600px;\n  position: relative;\n  padding: 10px; }\n\n.module .div2:after {\n    content: ' ';\n    border-right: 2px solid #efefef;\n    display: inline-block;\n    width: 2px;\n    height: 97%;\n    position: absolute;\n    right: 13px;\n    top: 3%; }\n\n.module .div2 li {\n    list-style: none; }\n\n.module .pd4 {\n  padding: 7px 0 !important; }\n\n.module .imgOrFont .img_no_display {\n  display: none; }\n\n.module .imgOrFont:hover .img_no_display {\n  display: inline-block;\n  color: #0094D2;\n  cursor: pointer;\n  font-weight: bold;\n  padding: 0px !important; }\n\n.module .imgOrFont:hover .img_display {\n  display: none; }\n\n:host/deep/ .ui-panel .ui-panel-titlebar {\n  background-color: white !important;\n  border-bottom: 1px solid white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS93b3JrLW5vbmUvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxyZW1pbmRlci1kb1xcYmFja2xvZy1kZXRhaWxcXGJ0bi1wYWdlXFx3b3JrLW5vbmVcXHdvcmstbm9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGlCQUFpQixFQUFBOztBQUZ6QjtFQUtRLGtCQUFrQixFQUFBOztBQUwxQjtFQVFRLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFYckI7SUFhWSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTyxFQUFBOztBQXBCbkI7SUF1QlksZ0JBQ0osRUFBQTs7QUF4QlI7RUEyQlEseUJBQXlCLEVBQUE7O0FBM0JqQztFQStCWSxhQUFhLEVBQUE7O0FBL0J6QjtFQW1DZ0IscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHVCQUF1QixFQUFBOztBQXZDdkM7RUEwQ2dCLGFBQWEsRUFBQTs7QUFLN0I7RUFDSSxrQ0FBa0M7RUFDbEMseUNBQXlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL3JlbWluZGVyLWRvL2JhY2tsb2ctZGV0YWlsL2J0bi1wYWdlL3dvcmstbm9uZS93b3JrLW5vbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kdWxle1xyXG4gICAgLnRpdHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRpdjIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyAnO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTclO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICB0b3A6IDMlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wZDR7XHJcbiAgICAgICAgcGFkZGluZzogN3B4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pbWdPckZvbnQge1xyXG4gICAgICAgIC5pbWdfbm9fZGlzcGxheSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAuaW1nX25vX2Rpc3BsYXkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDk0RDI7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbWdfZGlzcGxheSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjpob3N0L2RlZXAvIC51aS1wYW5lbCAudWktcGFuZWwtdGl0bGViYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: WorkNoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkNoneComponent", function() { return WorkNoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
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

 //事项类型的接口







/**
 * 已办事项
 */
var WorkNoneComponent = /** @class */ (function () {
    function WorkNoneComponent(router, routeInfo, cusOperationHttpService, customeHttpService, activatedRouter, commfunc, sanitizer) {
        this.router = router;
        this.routeInfo = routeInfo;
        this.cusOperationHttpService = cusOperationHttpService;
        this.customeHttpService = customeHttpService;
        this.activatedRouter = activatedRouter;
        this.commfunc = commfunc;
        this.sanitizer = sanitizer;
        this.disinNav = false;
        this.list = []; //接收后台数据
        this.startTime = null;
        this.endTime = null;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["CALENDAR_CN"]; //讲英文转化为中文
        this.userId = '';
        //提示信息
        this.msgs = [];
        this.ulData = [];
        this.listtype = true;
        this.nodata = false;
        this.maskLayer = true;
        this.codeValues(); //调用方法，获取全部码值
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
    }
    WorkNoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        //判断是否是总行或者集团
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var a = commonHeader.extParam.operatingLevel;
        this.activatedRouter.queryParams.subscribe(function (params) {
            _this.flag = params.flag;
            _this.num = params.totalNum;
            // if (params.startDate) {
            //   let arr = params.startDate.split('.');
            //   let arr1 = params.endDate.split('.');
            //   let session = window.sessionStorage;
            //   let arrlist = {
            //     startDate: arr[0] + '-' + arr[1] + '-' + arr[2],
            //     endDate: arr1[0] + '-' + arr1[1] + '-' + arr1[2]
            //   }
            //   session.setItem('month', JSON.stringify(arrlist));
            // }
        });
        this.queryNewList();
        if (this.commfunc.getSessionDataCH('markFlag')) {
            this.commfunc.clearSession('markFlag');
        }
        if (this.commfunc.getSessionDataCH('taskId')) {
            this.commfunc.clearSession('taskId');
        }
        if (this.commfunc.getSessionDataCH('bpmQueryTaskOnlyList')) {
            this.commfunc.clearSession('bpmQueryTaskOnlyList');
        }
    };
    WorkNoneComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    WorkNoneComponent.prototype.listclick = function (i) {
        if (i == 1) {
            this.listtype = false;
        }
        if (i == 2) {
            this.listtype = true;
        }
    };
    // 查询列表
    WorkNoneComponent.prototype.queryNewList = function () {
        var _this = this;
        this.nodata = false;
        this.maskLayer = true;
        var bussinessWhere;
        var startUserId;
        var session = window.sessionStorage;
        if (session.getItem('bussinessWhere')) {
            var bussinessWhere_1 = session.getItem('bussinessWhere');
            console.log(bussinessWhere_1);
            if (bussinessWhere_1.indexOf('startUserId') != -1) {
                var t = bussinessWhere_1.split('=');
                this.startUserId = t[1];
            }
            else {
                this.bussinessWhere = bussinessWhere_1;
            }
        }
        if (session.getItem('month')) {
            this.startDate = JSON.parse(session.getItem('month')).startDate;
            this.endDate = JSON.parse(session.getItem('month')).endDate;
            this.bussinessWhere = "'" + this.startDate + "' <" + "create_date" + ' and create_date' + "<'" + this.endDate + "'";
        }
        if (this.bussinessWhere) {
            bussinessWhere = this.bussinessWhere;
        }
        if (this.startUserId) {
            startUserId = this.startUserId;
        }
        var nodeType;
        var pram = {
            nodeType: nodeType,
            isEndProcess: false,
            userId: JSON.parse(this.commfunc.getSessionData('commonHeader')).userId,
            pageRows: 10000,
            curPage: 1,
            bussinessWhere: bussinessWhere,
            startUserId: startUserId,
        };
        this.customeHttpService.bpmQueryTaskOnlyCountGroup(pram).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                if (data.pageData.result && data.pageData.result.length > 0) {
                    _this.list = data.pageData.result;
                    _this.approve(_this.list);
                }
                else {
                    _this.nodata = true;
                    jquery__WEBPACK_IMPORTED_MODULE_6__('#appR').height(700);
                    _this.maskLayer = false;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    WorkNoneComponent.prototype.approve = function (list) {
        var _this = this;
        var approvelist = [];
        if (this.list.length > 0) {
            var _loop_1 = function (i) {
                var element = this_1.list[i];
                var filterResult = approvelist.filter(function (x) { return x.bigClassNo == element['bigClassNo']; });
                var exist = filterResult && filterResult.length;
                var temp = null;
                if (exist) {
                    temp = {
                        littleClassName: element['littleClassName'],
                        littleClassNo: element['littleClassNo'],
                        sysCount: element['sysCount'],
                        timeOutCount: element['timeOutCount'],
                        urgentCount: element['urgentCount'],
                        systemCode: element['systemCode']
                    };
                    filterResult[0].childpage.push(temp);
                    filterResult[0].bigsysCount = filterResult[0].bigsysCount + element['sysCount'];
                }
                else {
                    temp = {
                        bigClassName: element['bigClassName'],
                        bigClassNo: element['bigClassNo'],
                        bigsysCount: element['sysCount'],
                        bigtimeOutCount: element['timeOutCount'],
                        bigurgentCount: element['urgentCount'],
                        childpage: [
                            {
                                littleClassName: element['littleClassName'],
                                littleClassNo: element['littleClassNo'],
                                sysCount: element['sysCount'],
                                timeOutCount: element['timeOutCount'],
                                urgentCount: element['urgentCount'],
                                systemCode: element['systemCode']
                            }
                        ]
                    };
                    approvelist.push(temp);
                }
            };
            var this_1 = this;
            for (var i = 0; i < this.list.length; i++) {
                _loop_1(i);
            }
            // this.ulData = approvelist;
            this.ulData = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](approvelist);
            var session = window.sessionStorage;
            if (session.getItem('workliuCode')) {
                var f = session.getItem('workliuCode');
                var d = f.split('&');
                if (!approvelist[d[0]]) {
                    d[0] = '0';
                    d[1] = '0';
                }
                else if (!approvelist[d[1]]) {
                    d[1] = '0';
                }
                var a = d[0] + '&' + d[1];
                session.setItem('workliuCode', a);
                this.inNav = approvelist[d[0]].childpage[d[1]];
            }
            else {
                this.inNav = approvelist[0].childpage[0];
            }
            setTimeout(function () {
                _this.start();
                _this.maskLayer = false;
            }, 1500);
            this.disinNav = true;
        }
    };
    WorkNoneComponent.prototype.navclick = function (item) {
        if (this.commfunc.getSessionDataCH('workliuCode')) {
            this.commfunc.clearSession('workliuCode');
            this.commfunc.clearSession('workliuData');
        }
        for (var t = 0; t < this.ulData.length; t++) {
            for (var j = 0; j < this.ulData[t].childpage.length; j++) {
                if (this.ulData[t].childpage[j].littleClassNo == item.littleClassNo) {
                    var session = window.sessionStorage;
                    var a = t + '&' + j;
                    var b = JSON.stringify(item);
                    session.setItem('workliuCode', a);
                    session.setItem('workliuData', b);
                    break;
                }
            }
        }
        this.inNav = item;
    };
    //码值
    WorkNoneComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    WorkNoneComponent.prototype.start = function () {
        jquery__WEBPACK_IMPORTED_MODULE_6__(document).ready(function () {
            var session = window.sessionStorage;
            if (session.getItem('bussinessWhere')) {
                jquery__WEBPACK_IMPORTED_MODULE_6__('.menu_list ul li').eq(0).children('.div1').show().children('.zcd').eq(0).addClass('removes');
            }
            else if (session.getItem('workliuCode')) {
                var f = session.getItem('workliuCode');
                var d = f.split('&');
                jquery__WEBPACK_IMPORTED_MODULE_6__('.menu_list ul li').eq(d[0]).children('.div1').show().children('.zcd').eq(d[1]).addClass('removes');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_6__('.menu_list ul li').eq(0).children('.div1').show().children('.zcd').eq(0).addClass('removes');
            }
            //绑定元素点击事件
            jquery__WEBPACK_IMPORTED_MODULE_6__(".menu_list ul li").click(function () {
                //判断对象是显示还是隐藏
                if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".div1").is(":hidden")) {
                    //表示隐藏
                    if (!jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".div1").is(":animated")) {
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".xiala").css({ 'transform': 'rotate(180deg)' });
                        //如果当前没有进行动画，则添加新动画
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".div1").animate({
                            height: 'show'
                        }, 200)
                            //siblings遍历div1的元素
                            .end().siblings().find(".div1").hide(200);
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).siblings().children(".xiala").css({ 'transform': 'rotate(360deg)' });
                    }
                }
                else {
                    //表示显示
                    if (!jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".div1").is(":animated")) {
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".xiala").css({ 'transform': 'rotate(360deg)' });
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".div1").animate({
                            height: 'hide'
                        }, 200)
                            .end().siblings().find(".div1").hide(200);
                    }
                }
            });
            //阻止事件冒泡，子元素不再继承父元素的点击事件
            jquery__WEBPACK_IMPORTED_MODULE_6__('.div1').click(function (e) {
                e.stopPropagation();
            });
            //点击子菜单为子菜单添加样式，并移除所有其他子菜单样式
            jquery__WEBPACK_IMPORTED_MODULE_6__(".menu_list ul li .div1 .zcd").click(function () {
                //设置当前菜单为选中状态的样式，并移除同类同级别的其他元素的样式
                jquery__WEBPACK_IMPORTED_MODULE_6__(this).addClass("removes").siblings().removeClass("removes");
                //遍历获取所有父菜单元素
                jquery__WEBPACK_IMPORTED_MODULE_6__(".div1").each(function () {
                    //判断当前的父菜单是否是隐藏状态
                    if (jquery__WEBPACK_IMPORTED_MODULE_6__(this).is(":hidden")) {
                        //如果是隐藏状态则移除其样式
                        jquery__WEBPACK_IMPORTED_MODULE_6__(this).children(".zcd").removeClass("removes");
                    }
                });
            });
        });
    };
    WorkNoneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'work-none',
            template: __webpack_require__(/*! ./work-none.component.html */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none.component.html"),
            styles: [__webpack_require__(/*! ./work-none.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/work-none/work-none.component.scss"), __webpack_require__(/*! ./../menu-tree-ul.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/menu-tree-ul.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__["CustomeHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__["CustomeHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]])
    ], WorkNoneComponent);
    return WorkNoneComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/workdesk-page/workdesk-page.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/workdesk-page/workdesk-page.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"module\" id='appR'>\r\n  <div class=\"ui-g-12\" *ngIf=\"!nodata\">\r\n    <div class=\"ui-g-2\">\r\n      <div class=\"div2\">\r\n        <div class=\"middle\">\r\n          <div class=\"leftMenu\">\r\n            <div class=\"menu_list\">\r\n              <ul>\r\n                <li class=\"\" *ngFor=\"let pro of ulData\">\r\n                  <img class=\"xiala\" src=\"../../../../../../assets/layout/images/menu.png\" />\r\n                  <p title='{{pro.bigClassName}}' class=\"fuMenu\" style=\"display:flex;\">\r\n                    <span style='flex:1;'> {{pro.bigClassName}}</span>\r\n                    <span style=\"color:red!important;\" *ngIf=\"pro.bigtimeOutCount!=0\">{{pro.bigtimeOutCount}}</span>\r\n                    <i *ngIf=\"pro.bigtimeOutCount&&pro.bigtimeOutCount!=0\">|</i>\r\n                    <span style=\"margin-right:10px;\">{{pro.countNum}}</span>\r\n                  </p>\r\n                  <div class=\"div1\">\r\n                    <p title=\"{{nav.scheduleName}}\" (click)='navclick(nav)' class=\"zcd\" *ngFor=\"let nav of pro.childpage\">\r\n                      <!-- <span class='ct'>T</span>\r\n                      <span class='ct'>C</span> -->\r\n                      <span class=\"littlename\"> {{nav.scheduleName}}</span>\r\n                      <span style=\"color:red!important;\" *ngIf=\"nav.timeOutCount&&nav.timeOutCount!=0\">{{nav.timeOutCount}}</span>\r\n                      <i *ngIf=\"nav.timeOutCount&&nav.timeOutCount!=0\">|</i>\r\n                      <span style=\"margin-right:10px;\">{{nav.countNum}}</span>\r\n                    </p>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-10\">\r\n      <app-worktask *ngIf=\"disinNav\" [inNav]=\"inNav\"></app-worktask>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"nodata\" class=\"noData\"></div>\r\n</div>\r\n<!--提示消息-->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!-- 旋转 -->\r\n<div class=\"ui-g-12\" *ngIf=\"maskLayer\">\r\n    <div id=\"popWindow\" class=\"popWindow\" style=\"display:block\"></div>\r\n    <div class=\"maskLayer ui-g-12\">\r\n        <img src=\"../../../../../../../../assets/layout/images/loading1.gif\" alt=\"\" class=\"maskLayer\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/workdesk-page/workdesk-page.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/workdesk-page/workdesk-page.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .ui-g-12 {\n  background: #f7f8f9; }\n  .module .ui-g-12 .ui-g-6 {\n    display: flex; }\n  .module .ui-g-12 .ui-g-6 label {\n      display: block;\n      width: 30%;\n      text-align: right;\n      padding: 0 20px; }\n  .module .ui-g-12 .ui-g-6 .input-name {\n      width: 100% !important; }\n  .module .ui-g-12 .ui-g-6 .items-name {\n      width: 100% !important; }\n  .module .btn {\n  text-align: center; }\n  .module .div2 {\n  background-color: #fff;\n  height: 600px;\n  position: relative;\n  padding: 10px; }\n  .module .div2:after {\n    content: ' ';\n    border-right: 2px solid #efefef;\n    display: inline-block;\n    width: 2px;\n    height: 97%;\n    position: absolute;\n    right: 13px;\n    top: 3%; }\n  .module .div2 li {\n    list-style: none; }\n  :host/deep/ .u-datatable .ui-datatable-thead > tr > th .ui-column-title {\n  font-size: 13px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9yZW1pbmRlci1kby9iYWNrbG9nLWRldGFpbC9idG4tcGFnZS93b3JrZGVzay1wYWdlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxccmVtaW5kZXItZG9cXGJhY2tsb2ctZGV0YWlsXFxidG4tcGFnZVxcd29ya2Rlc2stcGFnZVxcd29ya2Rlc2stcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLG1CQUFtQixFQUFBO0VBRjNCO0lBSVksYUFBYSxFQUFBO0VBSnpCO01BTWdCLGNBQWM7TUFDZCxVQUFVO01BQ1YsaUJBQWlCO01BQ2pCLGVBQWUsRUFBQTtFQVQvQjtNQVlnQixzQkFBc0IsRUFBQTtFQVp0QztNQWVnQixzQkFBc0IsRUFBQTtFQWZ0QztFQW9CUSxrQkFBa0IsRUFBQTtFQXBCMUI7RUF1QlEsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBO0VBMUJyQjtJQTRCWSxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTyxFQUFBO0VBbkNuQjtJQXNDWSxnQkFDSixFQUFBO0VBR1I7RUFDSSwwQkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vcmVtaW5kZXItZG8vYmFja2xvZy1kZXRhaWwvYnRuLXBhZ2Uvd29ya2Rlc2stcGFnZS93b3JrZGVzay1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZSB7XHJcbiAgICAudWktZy0xMiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y3ZjhmOTtcclxuICAgICAgICAudWktZy02IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmlucHV0LW5hbWUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbXMtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRpdjIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyAnO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTclO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICB0b3A6IDMlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG46aG9zdC9kZWVwLyAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZCA+IHRyID4gdGggLnVpLWNvbHVtbi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTNweCFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/workdesk-page/workdesk-page.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/workdesk-page/workdesk-page.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: WorkdeskPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkdeskPageComponent", function() { return WorkdeskPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_btnPage_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bean/btnPage.bean */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/bean/btnPage.bean.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //事项类型的接口








/**
 * 工作任务
 */
var WorkdeskPageComponent = /** @class */ (function () {
    function WorkdeskPageComponent(router, routeInfo, cusOperationHttpService, customeHttpService, activatedRouter, commfunc) {
        this.router = router;
        this.routeInfo = routeInfo;
        this.cusOperationHttpService = cusOperationHttpService;
        this.customeHttpService = customeHttpService;
        this.activatedRouter = activatedRouter;
        this.commfunc = commfunc;
        this.disinNav = false;
        this.ulData = [];
        //表格中无数据时显示的内容
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"];
        this.littleEvent = [];
        this.btnPageBean = new _bean_btnPage_bean__WEBPACK_IMPORTED_MODULE_3__["BtnPageBean"]();
        this.itemsSmallType = [];
        this.list = []; //接收后台数据
        //提示信息
        this.msgs = [];
        this.userId = '';
        this.display = false;
        this.nodata = false;
        this.maskLayer = true;
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.littleEvent = this.code['ScheduleType'];
    }
    WorkdeskPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.queryParams.subscribe(function (params) {
            _this.flag = params.flag;
        });
        var session = window.sessionStorage;
        if (session.getItem('bussinessWhere')) {
            var bussinessWhere = session.getItem('bussinessWhere');
            if (bussinessWhere.indexOf('startUserId') != -1) {
                var t = bussinessWhere.split('=');
                this.startUserId = t[1];
            }
            else {
                this.bussinessWhere = bussinessWhere;
            }
        }
        this.queryCopWorkTaskSum();
        // this.loanScheduleCountByTypeQry()
        if (this.commfunc.getSessionDataCH('markFlag')) {
            this.commfunc.clearSession('markFlag');
        }
        if (this.commfunc.getSessionDataCH('taskId')) {
            this.commfunc.clearSession('taskId');
        }
        if (this.commfunc.getSessionDataCH('bpmQueryTaskOnlyList')) {
            this.commfunc.clearSession('bpmQueryTaskOnlyList');
        }
    };
    WorkdeskPageComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    //码值
    WorkdeskPageComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //客户运营-工作任务
    WorkdeskPageComponent.prototype.queryCopWorkTaskSum = function () {
        var _this = this;
        var param = {};
        if (this.flag == '2') {
            param = { statusId: '1' };
        }
        var ob = this.customeHttpService.queryCopWorkTaskSum(param);
        ob.subscribe(function (data) {
            if (_this.flag == '2') {
                _this.list = data.resultList;
            }
            else {
                if (data.resultList && data.resultList.length > 0) {
                    _this.loanScheduleCountByTypeQry(data.resultList);
                }
                else {
                    _this.loanScheduleCountByTypeQry([]);
                }
            }
        });
    };
    //信贷-工作任务
    WorkdeskPageComponent.prototype.loanScheduleCountByTypeQry = function (datas) {
        var _this = this;
        var param = {};
        if (this.flag == '2') {
            param = { statusId: '1' };
        }
        var ob = this.customeHttpService.loanScheduleCountByTypeQry(param);
        ob.subscribe(function (data) {
            var arr = [];
            if (data.resultList && data.resultList.length > 0) {
                var array = data.resultList.concat(datas);
                arr.push.apply(arr, array);
            }
            else {
                arr.push.apply(arr, datas);
            }
            _this.bpmQueryUnDoTaskCountGroup(arr);
        });
    };
    // 查询待办列表（汇总）
    WorkdeskPageComponent.prototype.bpmQueryUnDoTaskCountGroup = function (datse) {
        var _this = this;
        this.nodata = false;
        this.maskLayer = true;
        var user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var userId = user.userId;
        var bussinessWhere;
        var startUserId;
        if (this.bussinessWhere) {
            bussinessWhere = this.bussinessWhere;
        }
        if (this.startUserId) {
            startUserId = this.startUserId;
        }
        var params = {
            taskPoolFlag: '3',
            itemType: 'KHLX',
            itemCtrl: '1',
            pageRows: 10000000,
            curPage: 1,
            endFlag: '0',
            userId: userId,
            nodeType: '1',
            bussinessWhere: bussinessWhere,
            startUserId: startUserId,
        };
        this.customeHttpService.bpmQueryUnDoTaskCountGroup(params).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                var arre = [];
                if (data.pageData.result && data.pageData.result.length > 0 || datse.length != 0) {
                    if (data.pageData.result && data.pageData.result.length > 0) {
                        var arres_1 = [];
                        data.pageData.result.forEach(function (itemn) {
                            arres_1.push({ timeOutCount: itemn.timeOutCount, scheduleTypeId: itemn.bigClassNo, littleClassNo: itemn.littleClassNo, scheduleName: itemn.littleClassName, countNum: itemn.sysCount, bigClassName: itemn.bigClassName, bigClassNo: itemn.bigClassNo, systemCode: itemn.systemCode, workFlag: 'new' });
                        });
                        _this.workrove(datse, arres_1);
                    }
                    else {
                        _this.workrove(datse);
                    }
                }
                else {
                    _this.nodata = true;
                    jquery__WEBPACK_IMPORTED_MODULE_9__('#appR').height(700);
                    _this.maskLayer = false;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    WorkdeskPageComponent.prototype.workrove = function (datse, worklist) {
        var _this = this;
        var loandate = [];
        var loandate1 = null;
        var copdate = [];
        var copdate1 = null;
        if (datse && datse.length > 0) {
            loandate1 = { bigClassName: '信贷系统', countNum: 0 * 1, childpage: [] };
            copdate1 = { bigClassName: '客运任务', countNum: 0 * 1, childpage: [] };
            datse.forEach(function (e) {
                if (e.subSysId && e.subSysId == "COP") {
                    copdate1.countNum = copdate1.countNum * 1 + e.countNum * 1;
                    copdate1.childpage.push(e);
                }
                else {
                    loandate1.countNum = loandate1.countNum * 1 + e.countNum * 1;
                    loandate1.childpage.push(e);
                }
            });
        }
        ;
        loandate.push(loandate1);
        copdate.push(copdate1);
        loandate = copdate.concat(loandate);
        console.log(loandate, '2222');
        var workrovelist = [];
        var arr = [];
        if (worklist) {
            var _loop_1 = function (i) {
                var element = worklist[i];
                var filterResult = workrovelist.filter(function (x) { return x.bigClassNo == element['bigClassNo']; });
                var exist = filterResult && filterResult.length;
                var temp = null;
                if (exist) {
                    temp = {
                        scheduleName: element['scheduleName'],
                        littleClassNo: element['littleClassNo'],
                        countNum: element['countNum'],
                        timeOutCount: element['timeOutCount'],
                        urgentCount: element['urgentCount'],
                        systemCode: element['systemCode'],
                        workFlag: element['workFlag']
                    };
                    filterResult[0].childpage.push(temp);
                    filterResult[0].countNum = filterResult[0].countNum + element['countNum'];
                    filterResult[0].bigtimeOutCount = filterResult[0].bigtimeOutCount + element['timeOutCount'];
                    filterResult[0].bigurgentCount = filterResult[0].bigurgentCount + element['urgentCount'];
                }
                else {
                    temp = {
                        bigClassName: element['bigClassName'],
                        bigClassNo: element['bigClassNo'],
                        countNum: element['countNum'],
                        bigtimeOutCount: element['timeOutCount'],
                        bigurgentCount: element['urgentCount'],
                        childpage: [
                            {
                                scheduleName: element['scheduleName'],
                                littleClassNo: element['littleClassNo'],
                                countNum: element['countNum'],
                                timeOutCount: element['timeOutCount'],
                                urgentCount: element['urgentCount'],
                                systemCode: element['systemCode'],
                                workFlag: element['workFlag']
                            }
                        ]
                    };
                    workrovelist.push(temp);
                }
            };
            for (var i = 0; i < worklist.length; i++) {
                _loop_1(i);
            }
        }
        // for (let t = 0; t < workrovelist.length; t++) {
        //   const e = workrovelist[t];
        //   if (e.bigClassNo == 'SXSX') {
        //     let pag = {
        //       scheduleName: '所有授信事项',
        //       littleClassNo: e['bigClassNo'],
        //       countNum: e['countNum'],
        //       timeOutCount: e['bigtimeOutCount'],
        //       urgentCount: e['bigurgentCount'],
        //       systemCode: 'SXSX:授信事项;SXSX:授信事项',
        //       biaoji: '手工加全部',
        //     }
        //     e.childpage.unshift(pag)
        //     break;
        //   }
        // }
        var arrays = workrovelist.concat(loandate);
        console.log(arrays, 'ff');
        arr.push.apply(arr, arrays);
        this.ulData = arr;
        var session = window.sessionStorage;
        if (session.getItem('workliuCode')) {
            var f = session.getItem('workliuCode');
            var d = f.split('&');
            if (!arr[d[0]]) {
                d[0] = '0';
                d[1] = '0';
            }
            else if (!arr[d[1]]) {
                d[1] = '0';
            }
            var a = d[0] + '&' + d[1];
            session.setItem('workliuCode', a);
            this.inNav = arr[d[0]].childpage[d[1]];
        }
        else {
            this.inNav = arr[0].childpage[0];
        }
        setTimeout(function () {
            _this.start();
            _this.maskLayer = false;
        }, 1500);
        this.disinNav = true;
    };
    WorkdeskPageComponent.prototype.navclick = function (item) {
        var _this = this;
        if (item.littleClassNo) {
            if (this.commfunc.getSessionDataCH('workliuCode')) {
                this.commfunc.clearSession('workliuCode');
                this.commfunc.clearSession('workliuData');
            }
            for (var t = 0; t < this.ulData.length; t++) {
                for (var j = 0; j < this.ulData[t].childpage.length; j++) {
                    if (this.ulData[t].childpage[j].littleClassNo == item.littleClassNo) {
                        var session = window.sessionStorage;
                        var a = t + '&' + j;
                        var b = JSON.stringify(item);
                        session.setItem('workliuCode', a);
                        session.setItem('workliuData', b);
                        break;
                    }
                }
            }
        }
        if (item.url && item.url != '') {
            if (this.commfunc.getSessionDataCH('workliuCode')) {
                this.commfunc.clearSession('workliuCode');
                this.commfunc.clearSession('workliuData');
            }
            //信贷工作任务处理
            var timestamp_1 = new Date().getTime();
            var target = "custLinkForm" + timestamp_1;
            // this.commfunc.createBlank(target);
            //审批事项中的信贷
            var user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            var userId_1 = user.userId;
            var targetId_1 = user.targetId;
            var params = {
                userId: this.userId,
                sysCode: '122',
                casServerLoginUrl: 'http://10.1.39.140:8011/searchPaymentTool',
                serverName: 'ywsn',
                validateType: '0',
                extraInfo: 'ywsn',
                encryptType: 'HS256',
            };
            this.customeHttpService.tokenApply(params).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var token = data.tokenCode;
                    if (targetId_1 == '101010') {
                        _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__["TZB_HTTP_XIN"];
                    }
                    else if (targetId_1 == '101011') {
                        _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__["TZB_HTTP_XIN_C"];
                    }
                    var url = _this.HTTPIPDress + 'plats/FrontController?urlParam=' + item.url + '&suid=' + userId_1 + '&token=' + token;
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_1, features, closeOnLoseFocus);
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
        // else if (item.littleClassNo == 'DXLC' || item.littleClassNo == 'XYKZX_DXLC') {    //电销  XYKZX_DXLC(信用卡直销_电销岗)
        //   if (this.flag == '1' || !this.flag) {//待办
        //     let param = { bigClassNo: item.bigClassNo, littleClassName: item.scheduleName, littleClassNo: item.littleClassNo, Historyflag: 'isWait' }
        //     this.commfunc.setSessionDataCH('bpmQueryTaskOnlyList', JSON.stringify(param));
        //     this.router.navigate(['/pages/tzb/custom/teleMarketing/outer-rask'], { queryParams: { flag: this.flag, 'id': '3' } });
        //   }
        // } 
        else {
            if (item.systemCode) {
                this.commfunc.setSessionDataCH('systemCode', JSON.stringify(item.systemCode));
            }
            this.inNav = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](item);
        }
    };
    WorkdeskPageComponent.prototype.start = function () {
        jquery__WEBPACK_IMPORTED_MODULE_9__(document).ready(function () {
            var session = window.sessionStorage;
            if (session.getItem('bussinessWhere')) {
                jquery__WEBPACK_IMPORTED_MODULE_9__('.menu_list ul li').eq(0).children('.div1').show().children('.zcd').eq(0).addClass('removes');
            }
            else if (session.getItem('workliuCode')) {
                var f = session.getItem('workliuCode');
                var d = f.split('&');
                jquery__WEBPACK_IMPORTED_MODULE_9__('.menu_list ul li').eq(d[0]).children('.div1').show().children('.zcd').eq(d[1]).addClass('removes');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_9__('.menu_list ul li').eq(0).children('.div1').show().children('.zcd').eq(0).addClass('removes');
            }
            //     //绑定元素点击事件
            jquery__WEBPACK_IMPORTED_MODULE_9__(".menu_list ul li").click(function () {
                //判断对象是显示还是隐藏
                if (jquery__WEBPACK_IMPORTED_MODULE_9__(this).children(".div1").is(":hidden")) {
                    //表示隐藏
                    if (!jquery__WEBPACK_IMPORTED_MODULE_9__(this).children(".div1").is(":animated")) {
                        jquery__WEBPACK_IMPORTED_MODULE_9__(this).children(".xiala").css({ 'transform': 'rotate(180deg)' });
                        //如果当前没有进行动画，则添加新动画
                        jquery__WEBPACK_IMPORTED_MODULE_9__(this).children(".div1").animate({
                            height: 'show'
                        }, 200)
                            //siblings遍历div1的元素
                            .end().siblings().find(".div1").hide(200);
                        jquery__WEBPACK_IMPORTED_MODULE_9__(this).siblings().children(".xiala").css({ 'transform': 'rotate(360deg)' });
                    }
                }
                else {
                    //表示显示
                    if (!jquery__WEBPACK_IMPORTED_MODULE_9__(this).children(".div1").is(":animated")) {
                        jquery__WEBPACK_IMPORTED_MODULE_9__(this).children(".xiala").css({ 'transform': 'rotate(360deg)' });
                        jquery__WEBPACK_IMPORTED_MODULE_9__(this).children(".div1").animate({
                            height: 'hide'
                        }, 200)
                            .end().siblings().find(".div1").hide(200);
                    }
                }
            });
            //阻止事件冒泡，子元素不再继承父元素的点击事件
            jquery__WEBPACK_IMPORTED_MODULE_9__('.div1').click(function (e) {
                e.stopPropagation();
            });
            //点击子菜单为子菜单添加样式，并移除所有其他子菜单样式
            jquery__WEBPACK_IMPORTED_MODULE_9__(".menu_list ul li .div1 .zcd").click(function () {
                //设置当前菜单为选中状态的样式，并移除同类同级别的其他元素的样式
                jquery__WEBPACK_IMPORTED_MODULE_9__(this).addClass("removes").siblings().removeClass("removes");
                //遍历获取所有父菜单元素
                jquery__WEBPACK_IMPORTED_MODULE_9__(".div1").each(function () {
                    //判断当前的父菜单是否是隐藏状态
                    if (jquery__WEBPACK_IMPORTED_MODULE_9__(this).is(":hidden")) {
                        //如果是隐藏状态则移除其样式
                        jquery__WEBPACK_IMPORTED_MODULE_9__(this).children(".zcd").removeClass("removes");
                    }
                });
            });
        });
    };
    WorkdeskPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workdesk-page',
            template: __webpack_require__(/*! ./workdesk-page.component.html */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/workdesk-page/workdesk-page.component.html"),
            styles: [__webpack_require__(/*! ./workdesk-page.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/workdesk-page/workdesk-page.component.scss"), __webpack_require__(/*! ./../menu-tree-ul.component.scss */ "./src/app/pages/tzb/custom/reminder-do/backlog-detail/btn-page/menu-tree-ul.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_6__["CustomeHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_6__["CustomeHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"]])
    ], WorkdeskPageComponent);
    return WorkdeskPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/http/telemarketing.constant.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/http/telemarketing.constant.ts ***!
  \*******************************************************************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
var API = {
    addCustCommunication: 'addCustCommunication',
    queryLoanDetailInfo: 'queryLoanDetailInfo',
    queryPreCreditDetailInfo: 'queryPreCreditDetailInfo',
    terminateCommunication: 'terminateCommunication',
    BZ_11003000105_02: 'BZ_11003000105_02',
    queryHistoryCommunicationEventResultDetail: 'queryHistoryCommunicationEventResultDetail',
    selectCustBriefInfo: 'selectCustBriefInfo',
    queryContactMechTypeList: 'queryContactMechTypeList',
    queryCommunicationEventTypeList: 'queryCommunicationEventTypeList',
    queryHistoryCommunicationEventResultList: 'queryHistoryCommunicationEventResultList',
    queryCustCommunicationList: 'queryCustCommunicationList',
    queryCustCommunicationDetail: 'queryCustCommunicationDetail',
    getSoftphoneInfo: 'getSoftphoneInfo',
    bpmNextTask: 'bpmNextTask',
    creationContractDitel: 'creationContractDitel',
    queryCustCommunicationWorkList: 'queryCustCommunicationWorkList',
    custCommunicationExport: 'custCommunicationExport',
    selectMsgTemplate: 'selectMsgTemplate',
    queryCustContactNumbers: 'queryCustContactNumbers',
    isCommunicationPost: 'isCommunicationPost',
    batchAllotCommunication: 'batchAllotCommunication',
    batchActivate: 'batchActivate',
    signAffirm: 'signAffirm',
    queryCreditData: 'queryCreditData',
    selectContractDitel: 'selectContractDitel',
};


/***/ }),

/***/ "./src/app/pages/tzb/custom/telemarketing/http/telemarketing.http.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/telemarketing/http/telemarketing.http.service.ts ***!
  \***********************************************************************************/
/*! exports provided: TeleMarketingHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeleMarketingHttpService", function() { return TeleMarketingHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/http.service */ "./src/app/@uisftech/common/service/http.service.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./telemarketing.constant */ "./src/app/pages/tzb/custom/telemarketing/http/telemarketing.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeleMarketingHttpService = /** @class */ (function () {
    function TeleMarketingHttpService(httpService) {
        this.httpService = httpService;
    }
    //电销批量分配 by zj 20190615
    TeleMarketingHttpService.prototype.batchAllotCommunication = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].batchAllotCommunication, params);
    };
    //电销批量激活 by zj 20190615
    TeleMarketingHttpService.prototype.batchActivate = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].batchActivate, params);
    };
    TeleMarketingHttpService.prototype.queryCreditData = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryCreditData, params);
    };
    //电销
    TeleMarketingHttpService.prototype.addCustCommunication = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].addCustCommunication, params);
    };
    //查询贷款产品信息
    TeleMarketingHttpService.prototype.queryLoanDetailInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryLoanDetailInfo, params);
    };
    TeleMarketingHttpService.prototype.signAffirm = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].signAffirm, params);
    };
    TeleMarketingHttpService.prototype.creationContractDitel = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].creationContractDitel, params);
    };
    TeleMarketingHttpService.prototype.selectContractDitel = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].selectContractDitel, params);
    };
    //查询单笔批量预授信信息
    TeleMarketingHttpService.prototype.queryPreCreditDetailInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryPreCreditDetailInfo, params);
    };
    //外呼业务禁拨名单查询
    TeleMarketingHttpService.prototype.BZ_11003000105_02 = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].BZ_11003000105_02, params);
    };
    //中止联系事件
    TeleMarketingHttpService.prototype.terminateCommunication = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].terminateCommunication, params);
    };
    //新增联络历史详情查询
    TeleMarketingHttpService.prototype.queryHistoryCommunicationEventResultDetail = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryHistoryCommunicationEventResultDetail, params);
    };
    //客户信息
    TeleMarketingHttpService.prototype.selectCustBriefInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].selectCustBriefInfo, params);
    };
    TeleMarketingHttpService.prototype.queryContactMechTypeList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS3"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryContactMechTypeList, params);
    };
    TeleMarketingHttpService.prototype.queryCommunicationEventTypeList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS3"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryCommunicationEventTypeList, params);
    };
    TeleMarketingHttpService.prototype.queryHistoryCommunicationEventResultList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS3"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryHistoryCommunicationEventResultList, params);
    };
    TeleMarketingHttpService.prototype.queryCustCommunicationList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryCustCommunicationList, params);
    };
    TeleMarketingHttpService.prototype.queryCustCommunicationDetail = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryCustCommunicationDetail, params);
    };
    TeleMarketingHttpService.prototype.getSoftphoneInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].getSoftphoneInfo, params);
    };
    TeleMarketingHttpService.prototype.bpmNextTask = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].bpmNextTask, params);
    };
    TeleMarketingHttpService.prototype.queryCustCommunicationWorkList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryCustCommunicationWorkList, params);
    };
    TeleMarketingHttpService.prototype.custCommunicationExport = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].custCommunicationExport, params);
    };
    TeleMarketingHttpService.prototype.selectMsgTemplate = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS4"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].selectMsgTemplate, params);
    };
    //客户号码查询
    TeleMarketingHttpService.prototype.queryCustContactNumbers = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryCustContactNumbers, params);
    };
    //校验是否是登录人电销
    TeleMarketingHttpService.prototype.isCommunicationPost = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS"] + _telemarketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].isCommunicationPost, params);
    };
    TeleMarketingHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], TeleMarketingHttpService);
    return TeleMarketingHttpService;
}());



/***/ })

}]);
//# sourceMappingURL=default~batch-precredit-add-batch-precredit-add-module~btn-page-btn-page-module~credit-ccm-credit-cc~7fb44095.js.map