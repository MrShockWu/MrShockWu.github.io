(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["work-report-work-report-module"],{

/***/ "./src/app/pages/tzb/custom/work-report/contact-sheet-organization/bean/custContactReportOrgQry.bean.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/contact-sheet-organization/bean/custContactReportOrgQry.bean.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CustContactReportOrgQryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustContactReportOrgQryBean", function() { return CustContactReportOrgQryBean; });
var CustContactReportOrgQryBean = /** @class */ (function () {
    function CustContactReportOrgQryBean() {
    }
    return CustContactReportOrgQryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/contact-sheet-organization/contact-sheet-organization.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/contact-sheet-organization/contact-sheet-organization.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"precredit\" style=\"width:100%;\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12 \">\r\n        <div class=\"ui-g-12\">\r\n            <form [formGroup]=\"userform\">\r\n                <div class=\"ui-g-2 tit\">\r\n                    <span appValidation>机构查询:</span>\r\n                </div>\r\n                <div class=\"ui-g-4 date\">\r\n                    <input type=\"text\" name=\"treeOrgName\" formControlName=\"treeOrgName\" pInputText size=\"30\" readonly [(ngModel)]=\"treeOrgName\">\r\n                    <span class=\"chooseOrg\" (click)=\"perTreeShow()\">选择机构</span>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['treeOrgName'].valid&&userform.controls['treeOrgName'].dirty\">必输项!</span>\r\n                </div>\r\n            </form>\r\n            <div class=\"ui-g-2 tit\">\r\n                <span appValidation>统计月度:</span>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <div class=\"form-group condition-wrapper\">\r\n                    <monthly-calendar class=\"form-control\" [disabled]='false' [placeholder]=\"'年-月'\" (result)=\"dealDate = $event\" [range]=\"{before:50,after:50}\">\r\n                    </monthly-calendar>\r\n                </div>\r\n                <span style=\"color:red;\" *ngIf=\"showMonthDate\" >统计月度必输!</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12 contact-name\">\r\n            <div class=\"ui-g-2 tit\">\r\n                <span>联系主题:</span>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <p-dropdown [options]=\"contactType\" [(ngModel)]=\"custContactReportOrgQryBean.contactTheme\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-2 tit\">\r\n                <span>联系方式:</span>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <p-dropdown [options]=\"interviewType\" [(ngModel)]=\"custContactReportOrgQryBean.contactWay\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 center\">\r\n        <button pButton label=\"查询\" (click)=\"queryFirst()\"></button>\r\n        <button pButton label=\"重置\" (click)=\"chongzhi()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 btn_right\" *ngIf=\"permissionCheck('SID01029_P038')\">\r\n        <button class=\"btn-class1\" pButton label=\"导出\" (click)=\"DownOut()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\">\r\n        <p-dataTable [value]=\"sales\" scrollable=\"true\" [emptyMessage]=\"tabMesg\">\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"no\" header=\"排名\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"orgId\" header=\"机构号\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"contactOrg\" header=\"机构名称\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"contactNum\" header=\"联络客户数\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"ditributeNum\" header=\"管户客户数\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"contactReportNum\" header=\"联络报告笔数\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"contactNumV\" header=\"联络客户覆盖率\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"contactReportNumV\" header=\"联络报告覆盖率\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"contactTheme\" header=\"联系主题\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"contactWay\" header=\"联系方式\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"contactStatus\" header=\"联系状态\"></p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator [first]=\"first\" rows=\"{{custContactReportOrgQryBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<p-dialog *ngIf=\"orgTreePage\" [(visible)]=\"orgTreePage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <org-tree-component (outValue)=\"treeCall($event)\"></org-tree-component>\r\n</p-dialog>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/contact-sheet-organization/contact-sheet-organization.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/contact-sheet-organization/contact-sheet-organization.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact_title {\n  width: 100%;\n  height: 34px;\n  background-color: #f2f2f2;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  margin-bottom: 5px; }\n\n.tit {\n  text-align: right; }\n\n.btn {\n  display: flex;\n  flex-direction: row; }\n\n.table {\n  margin-top: 20px;\n  text-align: center; }\n\n.center {\n  text-align: center; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n.btn_right {\n  text-align: right; }\n\n.btn_right .btn-class1 {\n    background: #f4c201; }\n\n.btn_right .btn-class2 {\n    background: #19b0c8; }\n\n.contact-name {\n  padding-top: 0; }\n\n.contact-name .tit {\n    padding-top: 0; }\n\n.contact-name .ui-g-4 {\n    padding-top: 0; }\n\n.date {\n  display: flex; }\n\n.chooseOrg {\n  width: 100px;\n  border: 1px solid #19b0c8;\n  text-align: center;\n  background: #19b0c8;\n  color: #fff;\n  height: 23px;\n  line-height: 23px;\n  border-radius: 0px 5px 5px 0px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS93b3JrLXJlcG9ydC9jb250YWN0LXNoZWV0LW9yZ2FuaXphdGlvbi9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXHdvcmstcmVwb3J0XFxjb250YWN0LXNoZWV0LW9yZ2FuaXphdGlvblxcY29udGFjdC1zaGVldC1vcmdhbml6YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFFSSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNDLHFCQUFvQixFQUFBOztBQUVyQjtFQUNJLGlCQUFpQixFQUFBOztBQURyQjtJQUdRLG1CQUFtQixFQUFBOztBQUgzQjtJQU1RLG1CQUFtQixFQUFBOztBQUczQjtFQUNJLGNBQWMsRUFBQTs7QUFEbEI7SUFHUSxjQUFjLEVBQUE7O0FBSHRCO0lBTVEsY0FBYyxFQUFBOztBQUd0QjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vd29yay1yZXBvcnQvY29udGFjdC1zaGVldC1vcmdhbml6YXRpb24vY29udGFjdC1zaGVldC1vcmdhbml6YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdF90aXRsZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDsgXHJcbn1cclxuLnRpdHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5idG57XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG59XHJcbi50YWJsZXtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4vL+ihqOagvOWtl+avjeaVsOWtl+iHquWKqOaNouihjFxyXG46aG9zdC9kZWVwLyAudWktY2VsbC1kYXRhe1xyXG5cdHdvcmQtd3JhcDpicmVhay13b3JkO1xyXG59XHJcbi5idG5fcmlnaHR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIC5idG4tY2xhc3Mxe1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNGMyMDE7XHJcbiAgICB9XHJcbiAgICAuYnRuLWNsYXNzMntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xyXG4gICAgfVxyXG59XHJcbi5jb250YWN0LW5hbWV7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIC50aXR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICB9XHJcbiAgICAudWktZy00e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcbi5kYXRle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY2hvb3NlT3Jne1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE5YjBjODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICMxOWIwYzg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogMjNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/contact-sheet-organization/contact-sheet-organization.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/contact-sheet-organization/contact-sheet-organization.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ContactSheetOrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSheetOrganizationComponent", function() { return ContactSheetOrganizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_custContactReportOrgQry_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/custContactReportOrgQry.bean */ "./src/app/pages/tzb/custom/work-report/contact-sheet-organization/bean/custContactReportOrgQry.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContactSheetOrganizationComponent = /** @class */ (function () {
    function ContactSheetOrganizationComponent(httpService, fb, commfunc) {
        this.httpService = httpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.first = 0;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //表格中无数据时显示的内容
        this.msgs = [];
        this.orgTreePage = false;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        this.showMonthDate = false;
        this.precredit = '客户联系报表(机构)';
        this.custContactReportOrgQryBean = new _bean_custContactReportOrgQry_bean__WEBPACK_IMPORTED_MODULE_1__["CustContactReportOrgQryBean"]();
        this.userform = fb.group({
            treeOrgName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ContactSheetOrganizationComponent.prototype.ngOnInit = function () {
        this.codeValues();
        this.contactType = this.code['ContactType'];
        this.interviewType = this.code['InterviewType'];
        this.custContactReportOrgQryBean.pageNum = 1;
        this.custContactReportOrgQryBean.pageSize = 10;
        this.cols = [
            { field: 'no', header: '排名' },
            { field: 'orgId', header: '机构号' },
            { field: 'contactOrg', header: '机构名称' },
            { field: 'contactNum', header: '联络客户数' },
            { field: 'ditributeNum', header: '管户客户数' },
            { field: 'contactReportNum', header: '联络报告笔数' },
            { field: 'contactNumV', header: '联络客户覆盖率' },
            { field: 'contactReportNumV', header: '联络报告覆盖率' },
            { field: 'contactTheme', header: '联系主题' },
            { field: 'contactWay', header: '联系方式' },
            { field: 'contactStatus', header: '联系状态' },
        ];
    };
    //日期转化
    ContactSheetOrganizationComponent.prototype.transDate = function (value) {
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
    ContactSheetOrganizationComponent.prototype.chongzhi = function () {
        this.custContactReportOrgQryBean.contactTheme = '';
        this.custContactReportOrgQryBean.contactWay = '';
        this.treeOrgName = '';
    };
    ContactSheetOrganizationComponent.prototype.queryFirst = function () {
        this.custContactReportOrgQryBean.pageNum = 1;
        this.custContactReportOrgQryBean.pageSize = 10;
        this.first = 0;
        this.queryOrganization();
    };
    //查询
    ContactSheetOrganizationComponent.prototype.queryOrganization = function () {
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
        if (!this.dealDate || this.dealDate == '') {
            this.showMonthDate = true;
        }
        else {
            this.showMonthDate = false;
            console.log(this.dealDate);
            this.custContactReportOrgQryBean.dealDate = this.dealDate;
            this.custContactReportOrgQryBean.orgId = this.treeOrgId;
            this.httpService.customerContactOrg(this.custContactReportOrgQryBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.sales = data.custInfo;
                    _this.total = data.totalNum;
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
            });
        }
    };
    ContactSheetOrganizationComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.custContactReportOrgQryBean.pageSize = event.rows * 1;
        //当前页
        this.custContactReportOrgQryBean.pageNum = event.page + 1;
        this.first = event.page * this.custContactReportOrgQryBean.pageSize;
        this.queryOrganization();
    };
    ContactSheetOrganizationComponent.prototype.treeCall = function (param) {
        this.orgTreePage = false;
        this.treeOrgName = param.orgName;
        this.treeOrgId = param.orgId;
    };
    ContactSheetOrganizationComponent.prototype.perTreeShow = function () {
        this.orgTreePage = true;
    };
    ContactSheetOrganizationComponent.prototype.DownOut = function () {
        var _this = this;
        this.httpService.customerContactOrgExportFile(this.custContactReportOrgQryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"] + "?fileName=" + data.fileName + "&fileUrl=" + data.fileUrl);
                _this.msgs = [];
                _this.msgs = [{ severity: 'info', summary: '提示', detail: '下载成功' }];
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                return;
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
            return;
        });
    };
    //按钮权限
    ContactSheetOrganizationComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    //码值
    ContactSheetOrganizationComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ContactSheetOrganizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-sheet-organization',
            template: __webpack_require__(/*! ./contact-sheet-organization.component.html */ "./src/app/pages/tzb/custom/work-report/contact-sheet-organization/contact-sheet-organization.component.html"),
            styles: [__webpack_require__(/*! ./contact-sheet-organization.component.scss */ "./src/app/pages/tzb/custom/work-report/contact-sheet-organization/contact-sheet-organization.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], ContactSheetOrganizationComponent);
    return ContactSheetOrganizationComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/contact-sheet-staff/bean/custContactReportEmpQry.bean.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/contact-sheet-staff/bean/custContactReportEmpQry.bean.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CustContactReportEmpQryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustContactReportEmpQryBean", function() { return CustContactReportEmpQryBean; });
var CustContactReportEmpQryBean = /** @class */ (function () {
    function CustContactReportEmpQryBean() {
    }
    return CustContactReportEmpQryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/contact-sheet-staff/bean/queryUser.bean.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/contact-sheet-staff/bean/queryUser.bean.ts ***!
  \*****************************************************************************************/
/*! exports provided: QueryUserBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryUserBean", function() { return QueryUserBean; });
var QueryUserBean = /** @class */ (function () {
    function QueryUserBean() {
    }
    return QueryUserBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/contact-sheet-staff/contact-sheet-staff.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/contact-sheet-staff/contact-sheet-staff.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"precredit\" style=\"width:100%;\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 tit\">\r\n                    <span appValidation>机构查询:</span>\r\n                </div>\r\n                <div class=\"ui-g-4 date\">\r\n                    <input type=\"text\" name=\"treeOrgName\" formControlName=\"treeOrgName\" pInputText size=\"30\" [disabled]=\"orgNameShow\" [(ngModel)]=\"treeOrgName\">\r\n                    <span class=\"chooseOrg\" (click)=\"perTreeShow()\">选择机构</span>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['treeOrgName'].valid&&userform.controls['treeOrgName'].dirty\">必输项!</span>\r\n                </div>\r\n                <div class=\"ui-g-2 tit\">\r\n                    <span appValidation>员工:</span>\r\n                </div>\r\n                <div class=\"ui-g-4 date\">\r\n                    <input type=\"text\" placeholder=\"请选择\" pInputText class=\"ui-g-4\" name=\"personName\" formControlName=\"personName\" [disabled]=\"userNameShow\"\r\n                        [(ngModel)]=\"personName\">\r\n                    <span class=\"chooseOrg\" (click)=\"perShow()\">选择员工</span>\r\n                    <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['personName'].valid&&userform.controls['personName'].dirty\">必输项!</span>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"ui-g-12 wait-name\">\r\n            <div class=\"ui-g-2 tit\">\r\n                <span appValidation>统计月度:</span>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <div class=\"form-group condition-wrapper\">\r\n                    <monthly-calendar class=\"form-control\" [disabled]='false' [placeholder]=\"'年-月'\" (result)=\"dealDate = $event\" [range]=\"{before:50,after:50}\">\r\n                    </monthly-calendar>\r\n                </div>\r\n                <span style=\"color:red;\" *ngIf=\"showMonthDate\">统计月度必输!</span>\r\n            </div>\r\n            <div class=\"ui-g-2 tit\">\r\n                <span>联系类型:</span>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <p-dropdown [options]=\"contactType\" [(ngModel)]=\"custContactReportEmpQryBean.contactTheme\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 query-name\">\r\n            <div class=\"ui-g-2 tit\">\r\n                <span>联系方式:</span>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <p-dropdown [options]=\"interviewType\" [(ngModel)]=\"custContactReportEmpQryBean.contactWay\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 center\">\r\n        <button pButton label=\"查询\" (click)=\"queryFirst()\"></button>\r\n        <button pButton label=\"重置\" (click)=\"chongzhi()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 btn_right\" *ngIf=\"permissionCheck('SID01030_P039')\">\r\n        <button class=\"btn-class1\" pButton label=\"导出\" (click)=\"DownOut()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\">\r\n        <p-dataTable [value]=\"sales\" scrollable=\"true\" [emptyMessage]=\"tabMesg\">\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"no\" header=\"排名\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"orgId\" header=\"机构号\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"contactOrg\" header=\"机构名称\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"contactsNo\" header=\"员工号\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"contactsName\" header=\"员工名称\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"contactNum\" header=\"联络客户数\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"ditributeNum\" header=\"管户客户数\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"contactReportNum\" header=\"联络报告笔数\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"contactNumV\" header=\"联络客户覆盖率\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"contactReportNumV\" header=\"联络报告覆盖率\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"contactTheme\" header=\"联系主题\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"contactWay\" header=\"联系方式\"></p-column>\r\n            <p-column [style]=\"{'width':'150px'}\" field=\"contactStatus\" header=\"联系状态\"></p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator [first]=\"first\" rows=\"{{custContactReportEmpQryBean.pageSize}}\" totalRecords=\"{{totaltable}}\" pageLinkSize=\"3\"\r\n            [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event,'table')\"></p-paginator>\r\n    </div>\r\n</div>\r\n<p-dialog *ngIf=\"orgTreePage\" [(visible)]=\"orgTreePage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <org-tree-component (outValue)=\"treeCall($event)\"></org-tree-component>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"personPage\" [(visible)]=\"personPage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <queryUser (outValue)=\"perInfor($event)\" [in-value]=\"parent_value\"></queryUser>\r\n    <!-- <div class=\"ui-g-12 queryUserPage\">\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n            <label class=\"inputLayout\">员工姓名：</label>\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"queryUserBean.tellerName\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工号：</label>\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"queryUserBean.tellerId\">\r\n        </div>\r\n        <div class=\"ui-g-12 textAlignCenter\">\r\n            <button pButton type=\"button\" (click)=\"querySecond()\" label=\"查询\"></button>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <p-dataTable [value]=\"tableData\" [style]=\"{'text-align':'center'}\">\r\n                <p-column>\r\n                    <ng-template pTemplate=\"header\">\r\n                        <p-checkbox name=\"groupname\" label=\"选择\" [(ngModel)]=\"checkAll\" binary=\"true\" (click)=\"checkAllClick()\"></p-checkbox>\r\n                    </ng-template>\r\n                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                        <p-checkbox [(ngModel)]=\"col.checkBox\" (onChange)=\"checkBoxClick(col)\" binary=\"true\"></p-checkbox>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"tellerName\" header=\"员工姓名\"></p-column>\r\n                <p-column field=\"tellerId\" header=\"工号\"></p-column>\r\n                <p-column field=\"email\" header=\"联系邮箱\"></p-column>\r\n                <p-column field=\"mobileNum\" header=\"联系电话\"></p-column>\r\n                <p-column field=\"orgId\" header=\"所属机构号\"></p-column>\r\n                <p-column field=\"orgName\" header=\"所属部门\"></p-column>\r\n            </p-dataTable>\r\n            <p-paginator [first]=\"first\" rows=\"{{queryUserBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginate($event,'teller')\"></p-paginator>\r\n        </div>\r\n        <div class=\"ui-g-12 textCenter\">\r\n            <button pButton type=\"button\" (click)=\"addBtnCom()\" label=\"确定\"></button>\r\n        </div>\r\n    </div> -->\r\n\r\n</p-dialog>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/contact-sheet-staff/contact-sheet-staff.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/contact-sheet-staff/contact-sheet-staff.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact_title {\n  width: 100%;\n  height: 34px;\n  background-color: #f2f2f2;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  margin-bottom: 5px; }\n\n.table {\n  margin-top: 20px;\n  text-align: center; }\n\n.center, .textCenter {\n  text-align: center; }\n\n.tit {\n  text-align: right; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n.queryUserPage {\n  height: 800px;\n  overflow-y: scroll; }\n\n.btn_right {\n  text-align: right;\n  padding: 0; }\n\n.btn_right .btn-class1 {\n    background: #f4c201; }\n\n.btn_right .btn-class2 {\n    background: #19b0c8; }\n\n.wait-name {\n  padding-top: 0; }\n\n.wait-name .tit {\n    padding-top: 0; }\n\n.wait-name .ui-g-4 {\n    padding-top: 0; }\n\n.query-name {\n  padding: 0; }\n\n.query-name .tit {\n    padding-top: 0; }\n\n.query-name .ui-g-4 {\n    padding-top: 0; }\n\n.date {\n  display: flex; }\n\n.chooseOrg {\n  width: 100px;\n  border: 1px solid #19b0c8;\n  text-align: center;\n  background: #19b0c8;\n  color: #fff;\n  height: 23px;\n  line-height: 23px;\n  border-radius: 0px 5px 5px 0px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS93b3JrLXJlcG9ydC9jb250YWN0LXNoZWV0LXN0YWZmL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcd29yay1yZXBvcnRcXGNvbnRhY3Qtc2hlZXQtc3RhZmZcXGNvbnRhY3Qtc2hlZXQtc3RhZmYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0MscUJBQW9CLEVBQUE7O0FBRXJCO0VBQ0ksYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGlCQUFpQjtFQUNqQixVQUFVLEVBQUE7O0FBRmQ7SUFJUSxtQkFBbUIsRUFBQTs7QUFKM0I7SUFPUSxtQkFBbUIsRUFBQTs7QUFHM0I7RUFDSSxjQUFhLEVBQUE7O0FBRGpCO0lBR1EsY0FBYyxFQUFBOztBQUh0QjtJQU1RLGNBQWMsRUFBQTs7QUFHdEI7RUFDSSxVQUFVLEVBQUE7O0FBRGQ7SUFHUSxjQUFjLEVBQUE7O0FBSHRCO0lBTVEsY0FBYyxFQUFBOztBQUd0QjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vd29yay1yZXBvcnQvY29udGFjdC1zaGVldC1zdGFmZi9jb250YWN0LXNoZWV0LXN0YWZmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3RfdGl0bGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7IFxyXG59XHJcbi50YWJsZXtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNlbnRlciwudGV4dENlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGl0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLy/ooajmoLzlrZfmr43mlbDlrZfoh6rliqjmjaLooYxcclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YXtcclxuXHR3b3JkLXdyYXA6YnJlYWstd29yZDtcclxufVxyXG4ucXVlcnlVc2VyUGFnZXtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuLmJ0bl9yaWdodHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC5idG4tY2xhc3Mxe1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNGMyMDE7XHJcbiAgICB9XHJcbiAgICAuYnRuLWNsYXNzMntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xyXG4gICAgfVxyXG59XHJcbi53YWl0LW5hbWV7XHJcbiAgICBwYWRkaW5nLXRvcDowO1xyXG4gICAgLnRpdHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxuICAgIC51aS1nLTR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7ICBcclxuICAgIH1cclxufVxyXG4ucXVlcnktbmFtZXtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAudGl0e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLnVpLWctNHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDsgIFxyXG4gICAgfVxyXG59XHJcbi5kYXRle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY2hvb3NlT3Jne1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE5YjBjODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICMxOWIwYzg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogMjNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/contact-sheet-staff/contact-sheet-staff.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/contact-sheet-staff/contact-sheet-staff.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ContactSheetStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSheetStaffComponent", function() { return ContactSheetStaffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_custContactReportEmpQry_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/custContactReportEmpQry.bean */ "./src/app/pages/tzb/custom/work-report/contact-sheet-staff/bean/custContactReportEmpQry.bean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/common/http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var _bean_queryUser_bean__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bean/queryUser.bean */ "./src/app/pages/tzb/custom/work-report/contact-sheet-staff/bean/queryUser.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ContactSheetStaffComponent = /** @class */ (function () {
    function ContactSheetStaffComponent(httpService, fb, commfunc, commonHttpService, confirmationService) {
        this.httpService = httpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        this.first = 0;
        //选择数据
        this.chooseData = [];
        this.checkAll = false;
        this.headerTitle = "柜员同步";
        //模态框是否显示
        this.display = false;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //表格中无数据时显示的内容
        this.personId = [];
        this.personName = []; //员工
        this.personPage = false;
        this.msgs = [];
        this.orgTreePage = false;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        this.showMonthDate = false;
        this.precredit = '客户联系报表(员工)';
        this.cities = [
            { label: '11', value: '1' }, { label: '22', value: '2' }, { label: '33', value: '3' },
        ];
        this.queryUserBean = new _bean_queryUser_bean__WEBPACK_IMPORTED_MODULE_9__["QueryUserBean"]();
        this.custContactReportEmpQryBean = new _bean_custContactReportEmpQry_bean__WEBPACK_IMPORTED_MODULE_2__["CustContactReportEmpQryBean"]();
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.orgNameShow = false;
        this.userNameShow = false;
        this.userform = fb.group({
            treeOrgName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            personName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
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
            console.log(this.extParam);
        }
        if (this.extParam.managePermission == 'N') {
            this.treeOrgName = this.orgName;
            this.treeOrgId = this.orgId;
            this.orgNameShow = true;
            this.personName = this.userName;
            this.personId = this.userId;
            this.userNameShow = true;
        }
        else {
            this.treeOrgName = '';
            this.treeOrgId = '';
            this.orgNameShow = false;
            this.personName = '';
            this.personId = '';
            this.userNameShow = false;
        }
    }
    ContactSheetStaffComponent.prototype.ngOnInit = function () {
        this.codeValues();
        this.contactType = this.code['ContactType'];
        this.interviewType = this.code['InterviewType'];
        this.custContactReportEmpQryBean.pageNum = 1;
        this.custContactReportEmpQryBean.pageSize = 10;
        this.queryUserBean.pageSize = 10;
        this.queryUserBean.pageNum = 1;
        this.cols = [
            { field: 'no', header: '排名' },
            { field: 'orgId', header: '机构号' },
            { field: 'contactOrg', header: '机构名称' },
            { field: 'contactsNo', header: '员工号' },
            { field: 'contactsName', header: '员工名称' },
            { field: 'contactNum', header: '联络客户数' },
            { field: 'ditributeNum', header: '管户客户数' },
            { field: 'contactReportNum', header: '联络报告笔数' },
            { field: 'contactNumV', header: '联络客户覆盖率' },
            { field: 'contactReportNumV', header: '联络报告覆盖率' },
            { field: 'contactTheme', header: '联系类型' },
            { field: 'contactWay', header: '走访方式' },
            { field: 'contactStatus', header: '联系状态' },
        ];
    };
    //日期转化
    ContactSheetStaffComponent.prototype.transDate = function (value) {
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
    ContactSheetStaffComponent.prototype.paginate = function (event, item) {
        if (item == 'table') {
            //每页显示的条数
            this.custContactReportEmpQryBean.pageSize = event.rows * 1;
            //当前页
            this.custContactReportEmpQryBean.pageNum = event.page + 1;
            this.first = event.page * this.custContactReportEmpQryBean.pageSize;
            this.queryStaff();
        }
        else if (item == 'teller') {
            this.queryUserBean.pageSize = event.rows * 1;
            //当前页
            this.queryUserBean.pageNum = event.page + 1;
            this.first = event.page * this.queryUserBean.pageSize;
            //调用查询的方法
            this.queryClick();
        }
    };
    ContactSheetStaffComponent.prototype.queryFirst = function () {
        this.custContactReportEmpQryBean.pageNum = 1;
        this.custContactReportEmpQryBean.pageSize = 10;
        this.first = 0;
        this.queryStaff();
    };
    //查询
    ContactSheetStaffComponent.prototype.queryStaff = function () {
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
        if (!this.dealDate || this.dealDate == '') {
            this.showMonthDate = true;
        }
        else {
            this.showMonthDate = false;
            this.custContactReportEmpQryBean.contactsNo = this.personId;
            this.custContactReportEmpQryBean.dealDate = this.dealDate;
            this.custContactReportEmpQryBean.orgId = this.treeOrgId;
            this.httpService.customerContactNo(this.custContactReportEmpQryBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.sales = data.custInfo;
                    _this.totaltable = data.totalNum;
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
            });
        }
    };
    ContactSheetStaffComponent.prototype.treeCall = function (param) {
        this.orgTreePage = false;
        this.treeOrgName = param.orgName;
        this.treeOrgId = param.orgId;
        this.parent_value = param.orgId;
    };
    ContactSheetStaffComponent.prototype.perTreeShow = function () {
        this.orgTreePage = true;
    };
    ContactSheetStaffComponent.prototype.DownOut = function () {
        var _this = this;
        this.httpService.customerContactNoExportFile(this.custContactReportEmpQryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_CUS_DOWNLOAD"] + "?fileName=" + data.fileName + "&fileUrl=" + data.fileUrl);
                _this.msgs = [];
                _this.msgs = [{ severity: 'info', summary: '提示', detail: '下载成功' }];
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                return;
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
            return;
        });
    };
    ContactSheetStaffComponent.prototype.chongzhi = function () {
        this.custContactReportEmpQryBean.contactsNo = [];
        this.custContactReportEmpQryBean.contactTheme = "";
        this.custContactReportEmpQryBean.contactWay = "";
        this.treeOrgName = "";
        this.dealDate = "";
        this.personId = [];
        this.personName = [];
        this.custContactReportEmpQryBean.contactsNo = [];
    };
    ContactSheetStaffComponent.prototype.perShow = function () {
        if (this.treeOrgId == '' || !this.treeOrgId) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '机构号为空,请选择机构' }];
            return;
        }
        else {
            this.queryUserBean.orgId = this.treeOrgId;
            this.queryClick();
            this.personPage = true;
        }
    };
    ContactSheetStaffComponent.prototype.perInfor = function (item) {
        this.personPage = false;
        var arr = [];
        var arrlist = [];
        item.forEach(function (temp) {
            arr.push(temp.tellerName);
            arrlist.push(temp.tellerId);
        });
        this.personName = arr;
        this.personId = arrlist;
    };
    ContactSheetStaffComponent.prototype.querySecond = function () {
        this.queryUserBean.pageSize = 10;
        this.queryUserBean.pageNum = 1;
        this.first = 0;
        this.queryClick();
    };
    //员工查询
    ContactSheetStaffComponent.prototype.queryClick = function () {
        var _this = this;
        this.commonHttpService.queryTellerByCombConditions(this.queryUserBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.tellerList;
                _this.total = data.total;
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
    // 重置
    ContactSheetStaffComponent.prototype.reset = function () {
        this.queryUserBean = new _bean_queryUser_bean__WEBPACK_IMPORTED_MODULE_9__["QueryUserBean"]();
    };
    // 增加
    ContactSheetStaffComponent.prototype.followMe = function () {
        this.headerTitle = '柜员同步';
        this.display = true;
        this.showModel = '1';
    };
    //添加后返回的值
    ContactSheetStaffComponent.prototype.addCall = function (param) {
        this.display = param;
        this.queryUserBean.pageNum = 1;
        this.queryClick();
    };
    //全选按钮
    ContactSheetStaffComponent.prototype.checkAllClick = function () {
        this.chooseData = [];
        for (var i = 0; i < this.tableData.length; i++) {
            if (this.checkAll == true) {
                this.tableData[i].checkBox = true;
                this.chooseData.push(this.tableData[i]);
            }
            else {
                this.chooseData = [];
                this.tableData[i].checkBox = false;
            }
        }
    };
    //单选按钮
    ContactSheetStaffComponent.prototype.checkBoxClick = function (data) {
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
        if (this.chooseData.length == this.tableData.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    };
    ContactSheetStaffComponent.prototype.addBtnCom = function () {
        var listCustNo = [];
        var listCustName = [];
        this.chooseData.forEach(function (item) {
            listCustNo.push(item.tellerId);
            listCustName.push(item.tellerName);
        });
        this.personName = listCustName;
        this.personId = listCustNo;
        this.personPage = false;
    };
    //按钮权限
    ContactSheetStaffComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    //码值
    ContactSheetStaffComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ContactSheetStaffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-sheet-staff',
            template: __webpack_require__(/*! ./contact-sheet-staff.component.html */ "./src/app/pages/tzb/custom/work-report/contact-sheet-staff/contact-sheet-staff.component.html"),
            styles: [__webpack_require__(/*! ./contact-sheet-staff.component.scss */ "./src/app/pages/tzb/custom/work-report/contact-sheet-staff/contact-sheet-staff.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"], app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_8__["CommonHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_8__["CommonHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]])
    ], ContactSheetStaffComponent);
    return ContactSheetStaffComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/manage-detail/bean/workTaskProcessDetailQry.bean.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/manage-detail/bean/workTaskProcessDetailQry.bean.ts ***!
  \**************************************************************************************************/
/*! exports provided: WorkTaskProcessDetailQryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkTaskProcessDetailQryBean", function() { return WorkTaskProcessDetailQryBean; });
var WorkTaskProcessDetailQryBean = /** @class */ (function () {
    function WorkTaskProcessDetailQryBean() {
    }
    return WorkTaskProcessDetailQryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/manage-detail/manage-detail.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/manage-detail/manage-detail.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <header-title [Info]=\"precredit\"></header-title>\r\n    <div class=\"ui-g-12 table base-table\">\r\n        <p-dataTable [value]=\"sales\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"scheduleTypeParentId\" header=\"事项大类\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.scheduleTypeParentId|codeValuePie:scheduleTypeOptions}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"scheduleTypeId\" header=\"事项类型\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.scheduleTypeId|codeValuePie:workTaskReportOptions}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"scheduleName\" header=\"事项名称\"></p-column>\r\n            <p-column field=\"actualStartDate\" header=\"事项开始时间\"></p-column>\r\n            <p-column field=\"receiveOrgId\" header=\"处理机构\"></p-column>\r\n            <p-column field=\"receiver\" header=\"处理员工\"></p-column>\r\n            <p-column header=\"详情\" [style]=\"{'width':'80px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"tabelDetailIco\" *ngIf=\"col.display\" (click)=\"toDetail(col)\">详情</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12 paging\">\r\n        <p-paginator [first]=\"first\" rows=\"{{workTaskProcessDetailQryBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/manage-detail/manage-detail.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/manage-detail/manage-detail.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail_title {\n  width: 100%;\n  height: 34px;\n  background-color: #f2f2f2;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  margin-bottom: 5px; }\n\n.table {\n  text-align: center; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host /deep/ .btn {\n  color: #444; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS93b3JrLXJlcG9ydC9tYW5hZ2UtZGV0YWlsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcd29yay1yZXBvcnRcXG1hbmFnZS1kZXRhaWxcXG1hbmFnZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDQyxxQkFBb0IsRUFBQTs7QUFFckI7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL3dvcmstcmVwb3J0L21hbmFnZS1kZXRhaWwvbWFuYWdlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxfdGl0bGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLnRhYmxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi8v6KGo5qC85a2X5q+N5pWw5a2X6Ieq5Yqo5o2i6KGMXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGF7XHJcblx0d29yZC13cmFwOmJyZWFrLXdvcmQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5idG4ge1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/manage-detail/manage-detail.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/manage-detail/manage-detail.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ManageDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageDetailComponent", function() { return ManageDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_workTaskProcessDetailQry_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/workTaskProcessDetailQry.bean */ "./src/app/pages/tzb/custom/work-report/manage-detail/bean/workTaskProcessDetailQry.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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







var ManageDetailComponent = /** @class */ (function () {
    function ManageDetailComponent(httpService, routeInfo, router, commfunc) {
        this.httpService = httpService;
        this.routeInfo = routeInfo;
        this.router = router;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"]; //表格中无数据时显示的内容
        this.first = 0;
        this.precredit = '待办及提醒事项处理明细';
        //模态框的标题
        this.headerTitle = "修改";
        //模态框是否显示
        this.display = false;
        //修改的参数
        this.updateValue = [];
        //提示信息
        this.msgs = [];
        this.workTaskProcessDetailQryBean = new _bean_workTaskProcessDetailQry_bean__WEBPACK_IMPORTED_MODULE_3__["WorkTaskProcessDetailQryBean"]();
    }
    ManageDetailComponent.prototype.ngOnInit = function () {
        this.codeValues();
        this.workTaskType = this.code['WorkTaskType'];
        this.scheduleTypeOptions = this.code['ScheduleTypes']; //大类
        this.workTaskReportOptions = this.code['ItemsType']; //小类
        this.workTaskProcessDetailQryBean.pageNum = 1;
        this.workTaskProcessDetailQryBean.pageSize = 10;
        var items = this.routeInfo.snapshot.params['params'];
        this.temp = JSON.parse(items);
        this.sales = [];
        this.query();
    };
    ManageDetailComponent.prototype.toDetail = function (item) {
        this.router.navigate(["pages/tzb/custom/work-report/shenpi", item]);
    };
    ManageDetailComponent.prototype.query = function () {
        var _this = this;
        this.workTaskProcessDetailQryBean.scheduleName = this.temp.scheduleName;
        this.workTaskProcessDetailQryBean.estimatedStartDt = this.temp.estimatedStartDt;
        this.workTaskProcessDetailQryBean.estimatedEndDt = this.temp.estimatedEndDt;
        this.workTaskProcessDetailQryBean.receiveOrgId = this.temp.receiveOrgId;
        this.workTaskProcessDetailQryBean.receiver = this.temp.receiver;
        this.workTaskProcessDetailQryBean.scheduleTypeParentId = this.temp.scheduleTypeParentId;
        this.workTaskProcessDetailQryBean.scheduleTypeId = this.temp.scheduleTypeId;
        this.workTaskProcessDetailQryBean.statusId = this.temp.statusId;
        this.httpService.workTaskProceMing(this.workTaskProcessDetailQryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_1 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item['receiver'] }).subscribe(function (data) {
                        if (data.tellerName && data.tellerName != '' && data.tellerName != null) {
                            item['receiver'] = data.tellerName;
                        }
                    });
                    _this.httpService.queryOrgById({ orgId: item.receiveOrgId }).subscribe(function (data) {
                        if (data.orgName && data.orgName != null) {
                            item.receiveOrgId = data.orgName;
                        }
                    });
                    if (item.scheduleTypeParentId == '03') {
                        item.display = true;
                    }
                    else {
                        item.display = false;
                    }
                };
                for (var _i = 0, _a = data.custListInfo; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_1(item);
                }
                _this.sales = data.custListInfo;
                _this.total = data.totalNum;
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
    ManageDetailComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.workTaskProcessDetailQryBean.pageSize = event.rows * 1;
        //当前页
        this.workTaskProcessDetailQryBean.pageNum = event.page + 1;
        this.query();
    };
    //排序
    ManageDetailComponent.prototype.paixu = function (item) {
        var _this = this;
        this.workTaskProcessDetailQryBean.havingCondition = item;
        this.workTaskProcessDetailQryBean.receiveOrgId = this.temp.receiveOrgId;
        this.workTaskProcessDetailQryBean.statusId = this.temp.statusId;
        this.httpService.workTaskProceMing(this.workTaskProcessDetailQryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.sales = data.custListInfo;
                _this.total = data.totalNum;
                data.custListInfo.forEach(function (item) {
                    if (item.scheduleTypeParentId == '03') {
                        item.display = true;
                    }
                    else {
                        item.display = false;
                    }
                });
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
    //按钮权限
    ManageDetailComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    //码值
    ManageDetailComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //排序
    ManageDetailComponent.prototype.doSort = function (event) {
        console.log(event);
        // if (event.field == 'deptBal') {
        if (event.order == 1) {
            this.workTaskProcessDetailQryBean.havingCondition = 'field';
            this.query();
        }
        if (event.order == -1) {
            this.workTaskProcessDetailQryBean.havingCondition = 'field Desc';
            this.query();
        }
        //   }
    };
    ManageDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-detail',
            template: __webpack_require__(/*! ./manage-detail.component.html */ "./src/app/pages/tzb/custom/work-report/manage-detail/manage-detail.component.html"),
            styles: [__webpack_require__(/*! ./manage-detail.component.scss */ "./src/app/pages/tzb/custom/work-report/manage-detail/manage-detail.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], ManageDetailComponent);
    return ManageDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/report-organization/bean/workTaskReportOrgQry.bean.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/report-organization/bean/workTaskReportOrgQry.bean.ts ***!
  \****************************************************************************************************/
/*! exports provided: WorkTaskReportOrgQryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkTaskReportOrgQryBean", function() { return WorkTaskReportOrgQryBean; });
var WorkTaskReportOrgQryBean = /** @class */ (function () {
    function WorkTaskReportOrgQryBean() {
    }
    return WorkTaskReportOrgQryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/report-organization/report-organization.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/report-organization/report-organization.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <header-title [Info]=\"precredit\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span appValidation>机构:</span>\r\n                </div>\r\n                <div class=\"ui-g-6 queryinputbtn\">\r\n                    <input class=\"queryinputOrg\" name=\"treeOrgName\" formControlName=\"treeOrgName\" type=\"text\" pInputText [(ngModel)]=\"treeOrgName\"\r\n                        disabled/>\r\n                    <div (click)=\"perTreeShow()\" class=\"clickspan\">\r\n                        <a class=\"a-hand\">\r\n                            <span>...</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['treeOrgName'].valid&&userform.controls['treeOrgName'].dirty\">机构必输!</div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span>事项名称:</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" name=\"scheduleName\" formControlName=\"scheduleName\" pInputText [(ngModel)]=\"workTaskReportOrgQryBean.scheduleName\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span appValidation>事项大类:</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-dropdown name=\"scheduleTypeParentId\" formControlName=\"scheduleTypeParentId\" [options]=\"scheduleTypeOptions\" placeholder=\"请选择\"\r\n                        [(ngModel)]=\"workTaskReportOrgQryBean.scheduleTypeParentId\" (onChange)=\"itemsChange()\"></p-dropdown>\r\n                </div>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['scheduleTypeParentId'].valid&&userform.controls['scheduleTypeParentId'].dirty\">事项大类必输!</div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span>事项类型:</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-dropdown name=\"scheduleTypeId\" formControlName=\"scheduleTypeId\" [options]=\"itemsType\" [(ngModel)]=\"workTaskReportOrgQryBean.scheduleTypeId\"\r\n                        placeholder=\"请选择\" (click)=\"typeChange()\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span appValidation>查询日期:</span>\r\n                </div>\r\n                <div class=\"ui-g-6 date\">\r\n                    <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                        [(ngModel)]=\"estimatedStartDt\" [locale]=\"ch\" formControlName=\"estimatedStartDt\" (onSelect)=\"showStart()\"\r\n                        (onBlur)=\"showStart()\"></p-calendar>\r\n                    <span>至</span>\r\n                    <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                        formControlName=\"estimatedEndDt\" [(ngModel)]=\"estimatedEndDt\" [locale]=\"ch\" (onSelect)=\"showEnd()\" (onBlur)=\"showEnd()\"></p-calendar>\r\n                </div>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['estimatedStartDt'].valid&&userform.controls['estimatedStartDt'].dirty\">开始日期必输!</div>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['estimatedEndDt'].valid&&userform.controls['estimatedEndDt'].dirty\">结束日期必输!</div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton label=\"查询\" (click)=\"queryFirst()\"></button>\r\n        <button pButton label=\"重置\" (click)=\"chongzhi()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 btn_right\" *ngIf=\"permissionCheck('SID01026_P035')\">\r\n        <button class=\"btn-class1\" pButton label=\"导出\" (click)=\"DownOut()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\">\r\n        <p-dataTable [value]=\"sales\" scrollable=\"true\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"receiveOrgId\" header=\"机构号\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column field=\"receiveOrgName\" header=\"机构名称\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column field=\"scheduleTypeParentId\" header=\"事项大类\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.scheduleTypeParentId|codeValuePie:scheduleTypeOptions}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"scheduleTypeId\" header=\"事项类型\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.scheduleTypeId|codeValuePie:workTaskReportOptions}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"scheduleName\" header=\"事项名称\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column field=\"taskNum\" header=\"总任务数\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column *ngIf=\"showWhich==1\" field=\"notDeal\" header=\"未查看\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"toDeatilStyle\" (click)=\"toDetail(col,'notDeal')\">{{col.notDeal}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"showWhich==1\" field=\"beDeal\" header=\"已查看\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"toDeatilStyle\" (click)=\"toDetail(col,'beDeal')\">{{col.beDeal}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"showWhich==1\" field=\"expiredNotDeal\" header=\"过期未查看\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"toDeatilStyle\" (click)=\"toDetail(col,'expiredNotDeal')\">{{col.expiredNotDeal}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"showWhich==1\" field=\"expiredDeal\" header=\"过期已查看\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"toDeatilStyle\" (click)=\"toDetail(col,'expiredDeal')\">{{col.expiredDeal}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"showWhich==2\" field=\"notDeal\" header=\"未处理\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"toDeatilStyle\" (click)=\"toDetail(col,'notDeal')\">{{col.notDeal}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"showWhich==2\" field=\"beDeal\" header=\"已处理\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"toDeatilStyle\" (click)=\"toDetail(col,'beDeal')\">{{col.beDeal}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"showWhich==3\" field=\"beDeal\" header=\"审批中\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"toDeatilStyle\" (click)=\"toDetail(col,'beDeal')\">{{col.beDeal}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"showWhich==3\" field=\"unPassed\" header=\"未通过\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"toDeatilStyle\" (click)=\"toDetail(col,'unPassed')\">{{col.unPassed}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"showWhich==3\" field=\"passed\" header=\"已通过\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"toDeatilStyle\" (click)=\"toDetail(col,'passed')\">{{col.passed}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator [first]=\"first\" rows=\"{{workTaskReportOrgQryBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<p-dialog *ngIf=\"orgTreePage\" [(visible)]=\"orgTreePage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <org-tree-component (outValue)=\"treeCall($event)\"></org-tree-component>\r\n    <!-- <work-org-tree (outValue)=\"treeCall($event)\"></work-org-tree> -->\r\n</p-dialog>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/report-organization/report-organization.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/report-organization/report-organization.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".report_title {\n  width: 100%;\n  height: 34px;\n  background-color: #f2f2f2;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  margin-bottom: 5px; }\n\n.btn,\n.center {\n  text-align: center; }\n\n.table {\n  margin-top: 10px;\n  text-align: center; }\n\n.into {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n\n.date {\n  display: flex;\n  align-items: center; }\n\n.tit {\n  text-align: right; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n.btn_right {\n  text-align: right; }\n\n.btn_right .btn-class1 {\n    background: #f4c201; }\n\n.btn_right .btn-class2 {\n    background: #19b0c8; }\n\n.bottom-name {\n  padding-top: 0; }\n\n.bottom-name .tit {\n    padding-top: 0; }\n\n.bottom-name .ui-g-4 {\n    padding-top: 0; }\n\n.chooseOrg {\n  width: 100px;\n  border: 1px solid #19b0c8;\n  text-align: center;\n  background: #19b0c8;\n  color: #fff;\n  height: 23px;\n  line-height: 23px;\n  border-radius: 0px 5px 5px 0px;\n  cursor: pointer; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-calendar {\n    min-width: 126px; } }\n\n@media screen and (min-width: 1281px) {\n  :host/deep/ .ui-calendar {\n    min-width: 210px; } }\n\n.queryinputbtn {\n  float: left;\n  display: flex; }\n\n.queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n\n.queryinputbtn .clickspan {\n    width: 14%;\n    height: 23px;\n    cursor: pointer; }\n\n.toDeatilStyle {\n  cursor: pointer; }\n\n.toDeatilStyle:hover {\n    text-decoration: underline;\n    color: #19b0c8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS93b3JrLXJlcG9ydC9yZXBvcnQtb3JnYW5pemF0aW9uL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcd29yay1yZXBvcnRcXHJlcG9ydC1vcmdhbml6YXRpb25cXHJlcG9ydC1vcmdhbml6YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFHdEI7O0VBRUksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxpQkFBaUIsRUFBQTs7QUFJckI7RUFDSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxpQkFBaUIsRUFBQTs7QUFEckI7SUFHUSxtQkFBbUIsRUFBQTs7QUFIM0I7SUFNUSxtQkFBbUIsRUFBQTs7QUFJM0I7RUFDSSxjQUFjLEVBQUE7O0FBRGxCO0lBR1EsY0FBYyxFQUFBOztBQUh0QjtJQU1RLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSztJQUNHLGdCQUFnQixFQUFBLEVBQ25COztBQUdMO0VBQ0s7SUFDRyxnQkFBZ0IsRUFBQSxFQUNuQjs7QUFHTDtFQUNJLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBRmpCO0lBSVEsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsMEJBQTBCLEVBQUE7O0FBUGxDO0lBVVEsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksZUFBZSxFQUFBOztBQURuQjtJQUdRLDBCQUEwQjtJQUMxQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL3dvcmstcmVwb3J0L3JlcG9ydC1vcmdhbml6YXRpb24vcmVwb3J0LW9yZ2FuaXphdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXBvcnRfdGl0bGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uYnRuLFxyXG4uY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnRvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLy/ooajmoLzlrZfmr43mlbDlrZfoh6rliqjmjaLooYxcclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YSB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5idG5fcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAuYnRuLWNsYXNzMSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y0YzIwMTtcclxuICAgIH1cclxuICAgIC5idG4tY2xhc3MyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYm90dG9tLW5hbWUge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAudGl0IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxuICAgIC51aS1nLTQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2hvb3NlT3JnIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxOWIwYzg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICA6aG9zdC9kZWVwLyAudWktY2FsZW5kYXIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTI2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MXB4KSB7XHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDIxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucXVlcnlpbnB1dGJ0biB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAucXVlcnlpbnB1dE9yZyB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xyXG4gICAgICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4td2lkdGg6IDY5cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jbGlja3NwYW4ge1xyXG4gICAgICAgIHdpZHRoOiAxNCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLnRvRGVhdGlsU3R5bGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/report-organization/report-organization.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/report-organization/report-organization.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ReportOrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportOrganizationComponent", function() { return ReportOrganizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_workTaskReportOrgQry_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/workTaskReportOrgQry.bean */ "./src/app/pages/tzb/custom/work-report/report-organization/bean/workTaskReportOrgQry.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ReportOrganizationComponent = /** @class */ (function () {
    function ReportOrganizationComponent(httpService, router, fb, commfunc) {
        this.httpService = httpService;
        this.router = router;
        this.fb = fb;
        this.commfunc = commfunc;
        this.first = 0;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"]; //表格中无数据时显示的内容
        this.msgs = [];
        this.temData = new Date();
        this.orgTreePage = false;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_CN"];
        this.estimatedStartDt = null; //
        this.estimatedEndDt = null; //
        this.precredit = '工作任务处理报表(机构)';
        this.cols = [];
        this.sales = [];
        this.itemsType = []; //待办事项类型
        this.showWhich = 2;
        this.workTaskReportOrgQryBean = new _bean_workTaskReportOrgQry_bean__WEBPACK_IMPORTED_MODULE_1__["WorkTaskReportOrgQryBean"]();
        this.userform = fb.group({
            treeOrgName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            estimatedStartDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            estimatedEndDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            scheduleTypeParentId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            scheduleTypeId: [''],
            scheduleName: ['']
        });
    }
    ReportOrganizationComponent.prototype.ngOnInit = function () {
        this.codeValues();
        this.workTaskType = this.code['WorkTaskType'];
        this.scheduleTypeOptions = this.code['ScheduleTypes'];
        this.workTaskReportOptions = this.code['ItemsType'];
        this.workTaskReportOrgQryBean.pageNum = 1;
        this.workTaskReportOrgQryBean.pageSize = 10;
    };
    ReportOrganizationComponent.prototype.showData = function () {
        this.temData = this.estimatedStartDt;
    };
    ReportOrganizationComponent.prototype.showStart = function () {
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
    ReportOrganizationComponent.prototype.showEnd = function () {
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
    ReportOrganizationComponent.prototype.queryFirst = function () {
        this.workTaskReportOrgQryBean.pageNum = 1;
        this.workTaskReportOrgQryBean.pageSize = 10;
        this.first = 0;
        this.query();
    };
    //查询
    ReportOrganizationComponent.prototype.query = function () {
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
        if (this.workTaskReportOrgQryBean.scheduleTypeParentId == '01') {
            this.showWhich = 1;
        }
        else if (this.workTaskReportOrgQryBean.scheduleTypeParentId == '02') {
            this.showWhich = 2;
        }
        else if (this.workTaskReportOrgQryBean.scheduleTypeParentId == '03') {
            this.showWhich = 3;
        }
        this.workTaskReportOrgQryBean.estimatedStartDt = this.commfunc.transDateN(this.estimatedStartDt);
        this.workTaskReportOrgQryBean.estimatedEndDt = this.commfunc.transDateN(this.estimatedEndDt);
        this.workTaskReportOrgQryBean.receiveOrgId = this.treeOrgId;
        this.workTaskReportOrgQryBean.receiveOrgName = this.treeOrgName;
        this.httpService.workTaskProceOrg(this.workTaskReportOrgQryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.sales = data.custListInfo;
                _this.total = data.totalNum;
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
    //跳转起详情页
    ReportOrganizationComponent.prototype.toDetail = function (item, data) {
        item['estimatedStartDt'] = this.commfunc.transDateN(this.estimatedStartDt);
        item['estimatedEndDt'] = this.commfunc.transDateN(this.estimatedEndDt);
        if (data == 'notDeal') {
            item['statusId'] = '01';
        }
        else if (data == 'beDeal') {
            item['statusId'] = '02';
        }
        else if (data == 'expiredNotDeal') {
            item['statusId'] = '03';
        }
        else if (data == 'expiredDeal') {
            item['statusId'] = '04';
        }
        else if (data == 'passed') {
            item['statusId'] = '05';
        }
        else if (data == 'unPassed') {
            item['statusId'] = '06';
        }
        var a = JSON.stringify(item);
        open("/#/pages/tzb/custom/work-report/manage-detail;params=" + encodeURI(a));
    };
    //翻页
    ReportOrganizationComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.workTaskReportOrgQryBean.pageSize = event.rows * 1;
        //当前页
        this.workTaskReportOrgQryBean.pageNum = event.page + 1;
        this.first = event.page * this.workTaskReportOrgQryBean.pageSize;
        this.query();
    };
    ReportOrganizationComponent.prototype.treeCall = function (param) {
        this.orgTreePage = false;
        this.treeOrgName = param.orgName;
        this.treeOrgId = param.orgId;
    };
    ReportOrganizationComponent.prototype.perTreeShow = function () {
        this.orgTreePage = true;
    };
    ReportOrganizationComponent.prototype.DownOut = function () {
        var _this = this;
        if (this.sales == []) {
            this.msgs = [];
            this.msgs = [{ severity: 'info', summary: '提示', detail: '请先查询!' }];
            return;
        }
        else {
            this.httpService.workTaskProceOrgExportFile(this.workTaskReportOrgQryBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(data.fileName) + "&fileUrl=" + data.fileUrl);
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'info', summary: '提示', detail: '下载成功' }];
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    return;
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
                return;
            });
        }
    };
    ReportOrganizationComponent.prototype.chongzhi = function () {
        this.workTaskReportOrgQryBean.scheduleTypeParentId = '';
        this.workTaskReportOrgQryBean.scheduleTypeId = '';
        this.treeOrgName = '';
        this.treeOrgId = '';
        this.estimatedStartDt = null;
        this.estimatedEndDt = null;
        this.workTaskReportOrgQryBean.scheduleName = '';
        this.workTaskReportOrgQryBean.receiveOrgId = '';
        this.workTaskReportOrgQryBean.receiveOrgName = '';
    };
    //按钮权限
    ReportOrganizationComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    //待办任务切换
    ReportOrganizationComponent.prototype.itemsChange = function () {
        var _this = this;
        if (this.workTaskReportOrgQryBean.scheduleTypeParentId == "") {
            this.itemsType = [];
            this.workTaskReportOrgQryBean.scheduleTypeId = '';
        }
        else {
            var params = {
                taskTypeParentId: this.workTaskReportOrgQryBean.scheduleTypeParentId,
                taskTypeKey: 'itemsType'
            };
            this.httpService.taskTypeQry(params).subscribe(function (data) {
                var arr = data.taskTypeList;
                _this.itemsType = [];
                _this.workTaskReportOrgQryBean.scheduleTypeId = '';
                arr.forEach(function (item) {
                    _this.itemsType.push({ label: item.taskTypeName, value: item.taskTypeId });
                });
            });
        }
    };
    ReportOrganizationComponent.prototype.typeChange = function () {
        if (!this.workTaskReportOrgQryBean.scheduleTypeParentId || this.workTaskReportOrgQryBean.scheduleTypeParentId == '') {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请先选择事项大类!' }];
        }
    };
    //码值
    ReportOrganizationComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ReportOrganizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-organization',
            template: __webpack_require__(/*! ./report-organization.component.html */ "./src/app/pages/tzb/custom/work-report/report-organization/report-organization.component.html"),
            styles: [__webpack_require__(/*! ./report-organization.component.scss */ "./src/app/pages/tzb/custom/work-report/report-organization/report-organization.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"]])
    ], ReportOrganizationComponent);
    return ReportOrganizationComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/report-staff/bean/queryUser.bean.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/report-staff/bean/queryUser.bean.ts ***!
  \**********************************************************************************/
/*! exports provided: QueryUserBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryUserBean", function() { return QueryUserBean; });
var QueryUserBean = /** @class */ (function () {
    function QueryUserBean() {
    }
    return QueryUserBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/report-staff/bean/workTaskReportEmpQry.bean.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/report-staff/bean/workTaskReportEmpQry.bean.ts ***!
  \*********************************************************************************************/
/*! exports provided: WorkTaskReportEmpQryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkTaskReportEmpQryBean", function() { return WorkTaskReportEmpQryBean; });
var WorkTaskReportEmpQryBean = /** @class */ (function () {
    function WorkTaskReportEmpQryBean() {
    }
    return WorkTaskReportEmpQryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/report-staff/report-staff.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/report-staff/report-staff.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <header-title [Info]=\"precredit\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span appValidation>机构:</span>\r\n                </div>\r\n                <div class=\"ui-g-6 queryinputbtn\">\r\n                    <input type=\"text\" *ngIf=\"!showPage\" placeholder=\"请选择\" pInputText name=\"treeOrgName\" formControlName=\"treeOrgName\" disabled\r\n                        [(ngModel)]=\"treeOrgName\">\r\n                    <input *ngIf=\"showPage\" class=\"queryinputOrg\" name=\"treeOrgName\" formControlName=\"treeOrgName\" type=\"text\" pInputText [(ngModel)]=\"treeOrgName\"\r\n                        disabled/>\r\n                    <div *ngIf=\"showPage\" (click)=\"perTreeShow()\" class=\"clickspan\">\r\n                        <a class=\"a-hand\">\r\n                            <span>...</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['treeOrgName'].valid&&userform.controls['treeOrgName'].dirty\">机构必输!</div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span>员工:</span>\r\n                </div>\r\n                <div class=\"ui-g-6 queryinputbtn\">\r\n                    <input type=\"text\" *ngIf=\"!showPage\" placeholder=\"请选择\" pInputText name=\"personName\" formControlName=\"personName\" disabled\r\n                        [(ngModel)]=\"personName\">\r\n                    <input *ngIf=\"showPage\" class=\"queryinputOrg\" name=\"personName\" formControlName=\"personName\" type=\"text\" pInputText [(ngModel)]=\"personName\"\r\n                        disabled/>\r\n                    <div (click)=\"perShow()\" *ngIf=\"showPage\" class=\"clickspan\">\r\n                        <a class=\"a-hand\">\r\n                            <span>...</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span appValidation>事项大类:</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-dropdown name=\"scheduleTypeParentId\" formControlName=\"scheduleTypeParentId\" [options]=\"scheduleTypeOptions\" placeholder=\"请选择\"\r\n                        [(ngModel)]=\"workTaskReportEmpQryBean.scheduleTypeParentId\" (onChange)=\"itemsChange()\"></p-dropdown>\r\n                </div>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['scheduleTypeParentId'].valid&&userform.controls['scheduleTypeParentId'].dirty\">事项大类必输!</div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span>事项类型:</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-dropdown name=\"scheduleTypeId\" formControlName=\"scheduleTypeId\" [options]=\"itemsType\" placeholder=\"请选择\" [(ngModel)]=\"workTaskReportEmpQryBean.scheduleTypeId\"\r\n                        (click)=\"typeChange()\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span>事项名称:</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" name=\"scheduleName\" formControlName=\"scheduleName\" pInputText [(ngModel)]=\"workTaskReportEmpQryBean.scheduleName\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span appValidation>查询日期:</span>\r\n                </div>\r\n                <div class=\"ui-g-6 date\">\r\n                    <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                        [(ngModel)]=\"estimatedStartDt\" [locale]=\"ch\" formControlName=\"estimatedStartDt\" (onSelect)=\"showStart()\"\r\n                        (onBlur)=\"showStart()\"></p-calendar>\r\n                    <span>至</span>\r\n                    <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                        formControlName=\"estimatedEndDt\" [(ngModel)]=\"estimatedEndDt\" [locale]=\"ch\" (onSelect)=\"showEnd()\" (onBlur)=\"showEnd()\"></p-calendar>\r\n                </div>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['estimatedStartDt'].valid&&userform.controls['estimatedStartDt'].dirty\">开始日期必输!</div>\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['estimatedEndDt'].valid&&userform.controls['estimatedEndDt'].dirty\">结束日期必输!</div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"ui-g-12 center\">\r\n        <button pButton label=\"查询\" (click)=\"queryFirst()\"></button>\r\n        <button pButton label=\"重置\" (click)=\"chongzhi()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 btn_right\" *ngIf=\"permissionCheck('SID01027_P036')\">\r\n        <button class=\"btn-class1\" pButton label=\"导出\" (click)=\"DownOut()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\">\r\n        <p-dataTable [value]=\"sales\" scrollable=\"true\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"receiveOrgId\" header=\"机构号\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column field=\"receiveOrgName\" header=\"机构名称\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column field=\"receiver\" header=\"员工号\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column field=\"receiverName\" header=\"员工名称\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column field=\"scheduleTypeParentId\" header=\"事项大类\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.scheduleTypeParentId|codeValuePie:scheduleTypeOptions}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"scheduleTypeId\" header=\"事项类型\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.scheduleTypeId|codeValuePie:workTaskReportOptions}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"scheduleName\" header=\"事项名称\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column field=\"taskNum\" header=\"总任务数\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column *ngIf=\"showWhich==1\" field=\"notDeal\" header=\"未查看\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"toDeatilStyle\" (click)=\"toDetail(col,'notDeal')\">{{col.notDeal}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"showWhich==1\" field=\"beDeal\" header=\"已查看\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"toDeatilStyle\" (click)=\"toDetail(col,'beDeal')\">{{col.beDeal}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"showWhich==1\" field=\"expiredNotDeal\" header=\"过期未查看\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"toDeatilStyle\" (click)=\"toDetail(col,'expiredNotDeal')\">{{col.expiredNotDeal}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"showWhich==1\" field=\"expiredDeal\" header=\"过期已查看\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"toDeatilStyle\" (click)=\"toDetail(col,'expiredDeal')\">{{col.expiredDeal}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"showWhich==2\" field=\"notDeal\" header=\"未处理\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"toDeatilStyle\" (click)=\"toDetail(col,'notDeal')\">{{col.notDeal}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"showWhich==2\" field=\"beDeal\" header=\"已处理\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"toDeatilStyle\" (click)=\"toDetail(col,'beDeal')\">{{col.beDeal}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"showWhich==3\" field=\"beDeal\" header=\"审批中\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"toDeatilStyle\" (click)=\"toDetail(col,'beDeal')\">{{col.beDeal}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"showWhich==3\" field=\"unPassed\" header=\"未通过\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"toDeatilStyle\" (click)=\"toDetail(col,'unPassed')\">{{col.unPassed}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"showWhich==3\" field=\"passed\" header=\"已通过\" [style]=\"{'width':'150px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"toDeatilStyle\" (click)=\"toDetail(col,'passed')\">{{col.passed}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator [first]=\"first\" rows=\"{{workTaskReportEmpQryBean.pageSize}}\" totalRecords=\"{{totaltable}}\" pageLinkSize=\"3\"\r\n            [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<p-dialog *ngIf=\"orgTreePage\" [(visible)]=\"orgTreePage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <org-tree-component (outValue)=\"treeCall($event)\"></org-tree-component>\r\n    <!-- <work-org-tree (outValue)=\"treeCall($event)\"></work-org-tree> -->\r\n</p-dialog>\r\n<p-dialog *ngIf=\"personPage\" [(visible)]=\"personPage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <!-- <queryUser (outValue)=\"perInfor($event)\" [in-value]=\"parent_value\"></queryUser> -->\r\n    <app-query-user-list (outValue)=\"perInfor($event)\" [in-value]=\"parent_value\"></app-query-user-list>\r\n</p-dialog>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/report-staff/report-staff.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/report-staff/report-staff.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".report_title {\n  width: 100%;\n  height: 34px;\n  background-color: #f2f2f2;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  margin-bottom: 5px; }\n\n.choose {\n  background: white;\n  border: 1px solid #ccc; }\n\n.table {\n  margin-top: 10px;\n  text-align: center; }\n\n.into {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n\n.center {\n  text-align: center; }\n\n.tit {\n  text-align: right; }\n\n.content {\n  overflow: auto;\n  max-width: 900px;\n  max-height: 700px; }\n\n.textCenter {\n  text-align: center; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n.queryUserPage {\n  height: 800px;\n  overflow-y: scroll; }\n\n.btn_right {\n  text-align: right;\n  padding: 0; }\n\n.btn_right .btn-class1 {\n    background: #f4c201; }\n\n.btn_right .btn-class2 {\n    background: #19b0c8; }\n\n.wait-name {\n  padding-top: 0; }\n\n.wait-name .tit {\n    padding-top: 0; }\n\n.wait-name .ui-g-4 {\n    padding-top: 0; }\n\n.query-name {\n  padding: 0; }\n\n.query-name .tit {\n    padding-top: 0; }\n\n.query-name .ui-g-4 {\n    padding-top: 0; }\n\n.date {\n  display: flex;\n  align-items: center; }\n\n.chooseOrg {\n  width: 100px;\n  border: 1px solid #19b0c8;\n  text-align: center;\n  background: #19b0c8;\n  color: #fff;\n  height: 23px;\n  line-height: 23px;\n  border-radius: 0px 5px 5px 0px;\n  cursor: pointer; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-calendar {\n    min-width: 126px; } }\n\n@media screen and (min-width: 1281px) {\n  :host/deep/ .ui-calendar {\n    min-width: 210px; } }\n\n.queryinputbtn {\n  float: left;\n  display: flex; }\n\n.queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n\n.queryinputbtn .clickspan {\n    width: 14%;\n    height: 23px;\n    cursor: pointer; }\n\n.toDeatilStyle {\n  cursor: pointer; }\n\n.toDeatilStyle:hover {\n    text-decoration: underline;\n    color: #19b0c8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS93b3JrLXJlcG9ydC9yZXBvcnQtc3RhZmYvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFx3b3JrLXJlcG9ydFxccmVwb3J0LXN0YWZmXFxyZXBvcnQtc3RhZmYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUI7RUFDakIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQjtFQUNqQixVQUFVLEVBQUE7O0FBRmQ7SUFJUSxtQkFBbUIsRUFBQTs7QUFKM0I7SUFPUSxtQkFBbUIsRUFBQTs7QUFJM0I7RUFDSSxjQUFjLEVBQUE7O0FBRGxCO0lBR1EsY0FBYyxFQUFBOztBQUh0QjtJQU1RLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSxVQUFVLEVBQUE7O0FBRGQ7SUFHUSxjQUFjLEVBQUE7O0FBSHRCO0lBTVEsY0FBYyxFQUFBOztBQUl0QjtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSztJQUNHLGdCQUFnQixFQUFBLEVBQ25COztBQUdMO0VBQ0s7SUFDRyxnQkFBZ0IsRUFBQSxFQUNuQjs7QUFHTDtFQUNJLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBRmpCO0lBSVEsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsMEJBQTBCLEVBQUE7O0FBUGxDO0lBVVEsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksZUFBZSxFQUFBOztBQURuQjtJQUdRLDBCQUEwQjtJQUMxQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL3dvcmstcmVwb3J0L3JlcG9ydC1zdGFmZi9yZXBvcnQtc3RhZmYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwb3J0X3RpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmNob29zZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW50byB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDcwMHB4O1xyXG59XHJcblxyXG4udGV4dENlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8v6KGo5qC85a2X5q+N5pWw5a2X6Ieq5Yqo5o2i6KGMXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGEge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4ucXVlcnlVc2VyUGFnZSB7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4uYnRuX3JpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC5idG4tY2xhc3MxIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjRjMjAxO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1jbGFzczIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxOWIwYzg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53YWl0LW5hbWUge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAudGl0IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxuICAgIC51aS1nLTQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucXVlcnktbmFtZSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLnRpdCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICB9XHJcbiAgICAudWktZy00IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmRhdGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaG9vc2VPcmcge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE5YjBjODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICMxOWIwYzg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogMjNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgIDpob3N0L2RlZXAvIC51aS1jYWxlbmRhciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMjZweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgxcHgpIHtcclxuICAgICA6aG9zdC9kZWVwLyAudWktY2FsZW5kYXIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMjEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5xdWVyeWlucHV0YnRuIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5xdWVyeWlucHV0T3JnIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgICAgICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNsaWNrc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4udG9EZWF0aWxTdHlsZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICBjb2xvcjogIzE5YjBjODtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/report-staff/report-staff.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/report-staff/report-staff.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ReportStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportStaffComponent", function() { return ReportStaffComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_workTaskReportEmpQry_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/workTaskReportEmpQry.bean */ "./src/app/pages/tzb/custom/work-report/report-staff/bean/workTaskReportEmpQry.bean.ts");
/* harmony import */ var _bean_queryUser_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/queryUser.bean */ "./src/app/pages/tzb/custom/work-report/report-staff/bean/queryUser.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/common/http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ReportStaffComponent = /** @class */ (function () {
    function ReportStaffComponent(router, httpService, fb, commfunc, commonHttpService, confirmationService) {
        this.router = router;
        this.httpService = httpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        //选择数据
        this.chooseData = [];
        this.checkAll = false;
        this.headerTitle = "柜员同步";
        //模态框是否显示
        this.display = false;
        this.first = 0;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"]; //表格中无数据时显示的内容
        this.personId = [];
        this.personName = []; //员工
        this.personPage = false;
        this.cities = [
            { label: '11', value: '1' }, { label: '22', value: '2' }, { label: '33', value: '3' },
        ];
        this.temData = new Date();
        this.msgs = [];
        this.orgTreePage = false;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["CALENDAR_CN"];
        this.estimatedStartDt = null; //
        this.estimatedEndDt = null; //
        this.precredit = '工作任务处理报表(员工)';
        this.itemsType = []; //待办事项类型
        this.queryUserBean = new _bean_queryUser_bean__WEBPACK_IMPORTED_MODULE_2__["QueryUserBean"]();
        this.workTaskReportEmpQryBean = new _bean_workTaskReportEmpQry_bean__WEBPACK_IMPORTED_MODULE_1__["WorkTaskReportEmpQryBean"]();
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.showPage = true;
        this.showWhich = 2;
        this.userform = fb.group({
            treeOrgName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            personName: [''],
            estimatedStartDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            estimatedEndDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            scheduleTypeParentId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            scheduleTypeId: [''],
            scheduleName: [''],
        });
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.user2 = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        this.user3 = this.commfunc.getSessionDataCH('dropDownSelect');
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
        if (this.extParam.managePermission == 'N') {
            if (this.user3) {
                this.treeOrgName = this.user3.split(',')[0];
            }
            else {
                this.treeOrgName = this.orgName;
            }
            this.treeOrgId = this.extParam.orgId;
            this.personName = this.userName;
            this.personId = [];
            this.personId.push(this.userId);
            this.showPage = false;
        }
        else {
            this.treeOrgName = '';
            this.treeOrgId = '';
            this.personName = '';
            this.personId = [];
            this.showPage = true;
        }
    }
    ReportStaffComponent.prototype.ngOnInit = function () {
        this.codeValues();
        this.workTaskType = this.code['WorkTaskType'];
        this.scheduleTypeOptions = this.code['ScheduleTypes'];
        this.workTaskReportOptions = this.code['ItemsType'];
        this.workTaskReportEmpQryBean.pageNum = 1;
        this.workTaskReportEmpQryBean.pageSize = 10;
        this.queryUserBean.pageSize = 10;
        this.queryUserBean.pageNum = 1;
    };
    ReportStaffComponent.prototype.transDate = function (value) {
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
        var newtime = year + "" + month + "" + data;
        return newtime;
        // let  time = new Date(value);
        // let  time1=value.getFullYear() +""+ (value.getMonth() + 1)+''+ value.getDate();
    };
    ReportStaffComponent.prototype.showData = function () {
        this.temData = this.estimatedStartDt;
    };
    ReportStaffComponent.prototype.showStart = function () {
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
    ReportStaffComponent.prototype.showEnd = function () {
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
    ReportStaffComponent.prototype.queryFirst = function () {
        this.workTaskReportEmpQryBean.pageNum = 1;
        this.workTaskReportEmpQryBean.pageSize = 10;
        this.first = 0;
        this.query();
    };
    //查询
    ReportStaffComponent.prototype.query = function () {
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
        //01提醒  02工作任务  03审批
        if (this.workTaskReportEmpQryBean.scheduleTypeParentId == '01') {
            this.showWhich = 1;
        }
        else if (this.workTaskReportEmpQryBean.scheduleTypeParentId == '02') {
            this.showWhich = 2;
        }
        else if (this.workTaskReportEmpQryBean.scheduleTypeParentId == '03') {
            this.showWhich = 3;
        }
        this.workTaskReportEmpQryBean.receiver = this.personId;
        this.workTaskReportEmpQryBean.estimatedStartDt = this.commfunc.transDateN(this.estimatedStartDt);
        this.workTaskReportEmpQryBean.estimatedEndDt = this.commfunc.transDateN(this.estimatedEndDt);
        this.workTaskReportEmpQryBean.receiveOrgId = this.treeOrgId;
        this.workTaskReportEmpQryBean.receiveOrgName = this.treeOrgName;
        this.httpService.workProceMing(this.workTaskReportEmpQryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.sales = data.custListInfo;
                _this.totaltable = data.totalNum;
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
    //跳转详情
    ReportStaffComponent.prototype.toDetail = function (item, data) {
        item['estimatedStartDt'] = this.commfunc.transDateN(this.estimatedStartDt);
        item['estimatedEndDt'] = this.commfunc.transDateN(this.estimatedEndDt);
        if (data == 'notDeal') {
            item['statusId'] = '01';
        }
        else if (data == 'beDeal') {
            item['statusId'] = '02';
        }
        else if (data == 'expiredNotDeal') {
            item['statusId'] = '03';
        }
        else if (data == 'expiredDeal') {
            item['statusId'] = '04';
        }
        else if (data == 'passed') {
            item['statusId'] = '05';
        }
        else if (data == 'unPassed') {
            item['statusId'] = '06';
        }
        var a = JSON.stringify(item);
        open("/#/pages/tzb/custom/work-report/manage-detail;params=" + encodeURI(a));
    };
    ReportStaffComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.workTaskReportEmpQryBean.pageSize = event.rows * 1;
        //当前页
        this.workTaskReportEmpQryBean.pageNum = event.page + 1;
        this.first = event.page * this.workTaskReportEmpQryBean.pageSize;
        this.query();
    };
    ReportStaffComponent.prototype.treeCall = function (param) {
        this.orgTreePage = false;
        this.treeOrgName = param.orgName;
        this.treeOrgId = param.orgId;
        this.parent_value = param.orgId;
    };
    ReportStaffComponent.prototype.perTreeShow = function () {
        this.orgTreePage = true;
    };
    ReportStaffComponent.prototype.DownOut = function () {
        var _this = this;
        this.httpService.workProceMingExportFile(this.workTaskReportEmpQryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_9__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(data.fileName) + "&fileUrl=" + data.fileUrl);
                _this.msgs = [];
                _this.msgs = [{ severity: 'info', summary: '提示', detail: '下载成功' }];
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                return;
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
            return;
        });
    };
    ReportStaffComponent.prototype.chongzhi = function () {
        if (this.showPage == false) {
            this.treeOrgName = this.orgName;
            this.treeOrgId = this.orgId;
            this.personName = this.userName;
            this.personId = [];
            this.personId.push(this.userId);
        }
        else {
            this.treeOrgName = '';
            this.treeOrgId = '';
            this.personId = [];
            this.personName = [];
        }
        this.workTaskReportEmpQryBean.scheduleTypeParentId = '';
        this.workTaskReportEmpQryBean.scheduleTypeId = '';
        this.estimatedStartDt = null;
        this.estimatedEndDt = null;
        this.workTaskReportEmpQryBean.receiver = [];
        this.workTaskReportEmpQryBean.scheduleName = '';
        this.workTaskReportEmpQryBean.receiveOrgId = '';
        this.workTaskReportEmpQryBean.receiveOrgName = '';
    };
    ReportStaffComponent.prototype.perShow = function () {
        if (this.treeOrgId == '' || !this.treeOrgId) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '机构号为空,请选择机构' }];
            return;
        }
        else {
            this.queryClick();
            this.personPage = true;
        }
    };
    ReportStaffComponent.prototype.perInfor = function (item) {
        this.personPage = false;
        var arr = [];
        var arrlist = [];
        item.forEach(function (temp) {
            arr.push(temp.tellerName);
            arrlist.push(temp.tellerId);
        });
        this.personName = arr;
        this.personId = arrlist;
    };
    ReportStaffComponent.prototype.querySecond = function () {
        this.queryUserBean.pageSize = 10;
        this.queryUserBean.pageNum = 1;
        this.first = 0;
        this.queryClick();
    };
    ReportStaffComponent.prototype.queryClick = function () {
        var _this = this;
        this.queryUserBean.orgId = this.treeOrgId;
        this.commonHttpService.queryTellerByCombConditions(this.queryUserBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.tellerList;
                /**
                 * 2018.1.15--
                 */
                var tmpTotal = data.total;
                _this.total = tmpTotal * 1;
                /**
                 * --2018.1.15
                 */
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
    // 重置
    ReportStaffComponent.prototype.reset = function () {
        this.queryUserBean = new _bean_queryUser_bean__WEBPACK_IMPORTED_MODULE_2__["QueryUserBean"]();
    };
    // 增加
    ReportStaffComponent.prototype.followMe = function () {
        this.headerTitle = '柜员同步';
        this.display = true;
        this.showModel = '1';
    };
    //添加后返回的值
    ReportStaffComponent.prototype.addCall = function (param) {
        this.display = param;
        this.queryUserBean.pageNum = 1;
        this.queryClick();
    };
    //全选按钮
    ReportStaffComponent.prototype.checkAllClick = function () {
        this.chooseData = [];
        for (var i = 0; i < this.tableData.length; i++) {
            if (this.checkAll == true) {
                this.tableData[i].checkBox = true;
                this.chooseData.push(this.tableData[i]);
            }
            else {
                this.chooseData = [];
                this.tableData[i].checkBox = false;
            }
        }
    };
    //单选按钮
    ReportStaffComponent.prototype.checkBoxClick = function (data) {
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
        if (this.chooseData.length == this.tableData.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    };
    ReportStaffComponent.prototype.addBtnCom = function () {
        var listCustNo = [];
        var listCustName = [];
        this.chooseData.forEach(function (item) {
            listCustNo.push(item.tellerId);
            listCustName.push(item.tellerName);
        });
        this.personName = listCustName;
        this.personId = listCustNo;
        this.personPage = false;
    };
    //按钮权限
    ReportStaffComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    //待办任务切换
    ReportStaffComponent.prototype.itemsChange = function () {
        var _this = this;
        if (this.workTaskReportEmpQryBean.scheduleTypeParentId == "") {
            this.itemsType = [];
            this.workTaskReportEmpQryBean.scheduleTypeId = '';
        }
        else {
            var params = {
                taskTypeParentId: this.workTaskReportEmpQryBean.scheduleTypeParentId,
                taskTypeKey: 'itemsType'
            };
            this.httpService.taskTypeQry(params).subscribe(function (data) {
                var arr = data.taskTypeList;
                _this.itemsType = [];
                _this.workTaskReportEmpQryBean.scheduleTypeId = '';
                arr.forEach(function (item) {
                    _this.itemsType.push({ label: item.taskTypeName, value: item.taskTypeId });
                });
            });
        }
    };
    ReportStaffComponent.prototype.typeChange = function () {
        if (!this.workTaskReportEmpQryBean.scheduleTypeParentId || this.workTaskReportEmpQryBean.scheduleTypeParentId == '') {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请先选择事项大类!' }];
        }
    };
    //码值
    ReportStaffComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ReportStaffComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-staff',
            template: __webpack_require__(/*! ./report-staff.component.html */ "./src/app/pages/tzb/custom/work-report/report-staff/report-staff.component.html"),
            styles: [__webpack_require__(/*! ./report-staff.component.scss */ "./src/app/pages/tzb/custom/work-report/report-staff/report-staff.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"], app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_10__["CommonHttpService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"],
            app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_10__["CommonHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"]])
    ], ReportStaffComponent);
    return ReportStaffComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/shenpi/bean/scheduleProcessQry.bean.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/shenpi/bean/scheduleProcessQry.bean.ts ***!
  \*************************************************************************************/
/*! exports provided: ScheduleProcessQryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleProcessQryBean", function() { return ScheduleProcessQryBean; });
var ScheduleProcessQryBean = /** @class */ (function () {
    function ScheduleProcessQryBean() {
    }
    return ScheduleProcessQryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/shenpi/shenpi.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/shenpi/shenpi.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <header-title [Info]=\"'审批流程'\"></header-title>\r\n    <div class=\"ui-g-12 table\">\r\n        <p-dataTable [value]=\"sales\" emptyMessage=\"没有查找到数据\">\r\n            <p-column field=\"scheduleId\" header=\"代办编号\"></p-column>\r\n            <p-column field=\"scheduleName\" header=\"任务名称\"></p-column>\r\n            <p-column field=\"receiverName\" header=\"任务接收人名称\"></p-column>\r\n            <p-column field=\"statusId\" header=\"状态\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.statusId|codeValuePie:shenPiOptions}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"createdStamp\" header=\"创建时间\"></p-column>\r\n            <p-column field=\"actualCompletionDate\" header=\"实际结束日期\"></p-column>\r\n            <p-column field=\"lastUpdatedStamp\" header=\"最后修改时间\"></p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator [first]=\"first\" rows=\"{{scheduleProcessQryBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/shenpi/shenpi.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/shenpi/shenpi.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn, .center, .table {\n  text-align: center; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS93b3JrLXJlcG9ydC9zaGVucGkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFx3b3JrLXJlcG9ydFxcc2hlbnBpXFxzaGVucGkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDQyxxQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vd29yay1yZXBvcnQvc2hlbnBpL3NoZW5waS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4sLmNlbnRlciwudGFibGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLy/ooajmoLzlrZfmr43mlbDlrZfoh6rliqjmjaLooYxcclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YXtcclxuXHR3b3JkLXdyYXA6YnJlYWstd29yZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/shenpi/shenpi.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/shenpi/shenpi.component.ts ***!
  \*************************************************************************/
/*! exports provided: ShenPiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShenPiComponent", function() { return ShenPiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_scheduleProcessQry_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean/scheduleProcessQry.bean */ "./src/app/pages/tzb/custom/work-report/shenpi/bean/scheduleProcessQry.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { ShenPi } from '../../constant/custOperation.codeValue';
var ShenPiComponent = /** @class */ (function () {
    function ShenPiComponent(routeInfo, httpService, commfunc) {
        this.routeInfo = routeInfo;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.first = 0;
        this.sales = [];
        this.msgs = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["CALENDAR_CN"];
        this.scheduleProcessQryBean = new _bean_scheduleProcessQry_bean__WEBPACK_IMPORTED_MODULE_5__["ScheduleProcessQryBean"]();
    }
    ShenPiComponent.prototype.ngOnInit = function () {
        this.codeValues();
        this.shenPiOptions = this.code['ShenPi'];
        this.scheduleProcessQryBean.pageSize = 10;
        this.scheduleProcessQryBean.pageNum = 1;
        this.query();
    };
    ShenPiComponent.prototype.query = function () {
        var _this = this;
        this.first = 0;
        this.scheduleProcessQryBean.scheduleId = this.routeInfo.snapshot.params.scheduleId;
        this.httpService.scheduleProcessQry(this.scheduleProcessQryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.sales = data.scheduleProcessList;
                _this.total = data.totalNum;
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
    ShenPiComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.scheduleProcessQryBean.pageSize = event.rows * 1;
        //当前页
        this.scheduleProcessQryBean.pageNum = event.page + 1;
        this.query();
    };
    //码值
    ShenPiComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ShenPiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shenpi',
            template: __webpack_require__(/*! ./shenpi.component.html */ "./src/app/pages/tzb/custom/work-report/shenpi/shenpi.component.html"),
            styles: [__webpack_require__(/*! ./shenpi.component.scss */ "./src/app/pages/tzb/custom/work-report/shenpi/shenpi.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], ShenPiComponent);
    return ShenPiComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/work-org-tree/bean/org-tree.bean.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/work-org-tree/bean/org-tree.bean.ts ***!
  \**********************************************************************************/
/*! exports provided: OrgTreeBean, queryOrgByOrgIdAndRelationshipBean, orgList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgTreeBean", function() { return OrgTreeBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryOrgByOrgIdAndRelationshipBean", function() { return queryOrgByOrgIdAndRelationshipBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orgList", function() { return orgList; });
var OrgTreeBean = /** @class */ (function () {
    function OrgTreeBean() {
    }
    return OrgTreeBean;
}());

var queryOrgByOrgIdAndRelationshipBean = /** @class */ (function () {
    function queryOrgByOrgIdAndRelationshipBean() {
        this.orgId = ''; //机构号
        this.relationshipType = ''; //机构号
        this.orgList = []; //机构号 
    }
    return queryOrgByOrgIdAndRelationshipBean;
}());

var orgList = /** @class */ (function () {
    function orgList() {
        this.orgId = ''; //机构码
        this.orgName = ''; //机构名称
        this.location = ''; //位置描述
    }
    return orgList;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/work-org-tree/work-org-tree.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/work-org-tree/work-org-tree.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 org\">\r\n    <p-tree [value]=\"date1\" *ngIf='isAll' selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\"\r\n        (onNodeExpand)=\"nodeExpend($event)\"></p-tree>\r\n    <p-tree [value]=\"date\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\" (onNodeExpand)=\"nodeExpend($event)\"></p-tree>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/work-org-tree/work-org-tree.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/work-org-tree/work-org-tree.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".org {\n  visibility: show !important;\n  height: 500px; }\n\n.tree {\n  height: 300px !important;\n  overflow: scroll; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS93b3JrLXJlcG9ydC93b3JrLW9yZy10cmVlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcd29yay1yZXBvcnRcXHdvcmstb3JnLXRyZWVcXHdvcmstb3JnLXRyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwyQkFBMkI7RUFDM0IsYUFBYSxFQUFBOztBQUdqQjtFQUNJLHdCQUF3QjtFQUN4QixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vd29yay1yZXBvcnQvd29yay1vcmctdHJlZS93b3JrLW9yZy10cmVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5vcmcge1xyXG4gICAgdmlzaWJpbGl0eTogc2hvdyAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLnRyZWUge1xyXG4gICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/work-org-tree/work-org-treecomponent.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/work-org-tree/work-org-treecomponent.ts ***!
  \**************************************************************************************/
/*! exports provided: WorkOrgTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOrgTreeComponent", function() { return WorkOrgTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var _bean_org_tree_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/org-tree.bean */ "./src/app/pages/tzb/custom/work-report/work-org-tree/bean/org-tree.bean.ts");
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




var WorkOrgTreeComponent = /** @class */ (function () {
    function WorkOrgTreeComponent(customeHttpService, commfunc) {
        this.customeHttpService = customeHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.precredit = '机构树查询';
        this.precredit1 = '机构详情';
        this.aa = false;
        this.test = [];
        this.orgTreeBean = new _bean_org_tree_bean__WEBPACK_IMPORTED_MODULE_2__["OrgTreeBean"]();
        //提示信息
        this.msgs = [];
        this.isAll = false;
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.orgId) {
            this.orgId = this.user.orgId;
        }
    }
    WorkOrgTreeComponent.prototype.ngOnInit = function () {
        this.org = this.orgId;
        this.query();
    };
    //选中
    WorkOrgTreeComponent.prototype.nodeCheck = function (event) {
        this.treeOrgName = event.node.label;
        this.orgEle = { orgId: event.node.orgId, orgName: event.node.orgName, location: event.node.location };
        this.outValue.emit(this.orgEle);
    };
    //点击加号
    WorkOrgTreeComponent.prototype.nodeExpend = function (event) {
        var _this = this;
        this.org = event.node.orgId;
        this.orgTreeBean.orgId = this.org;
        this.orgTreeBean.relationshipType = '-1';
        if (event.node.children && event.node.children.length > 0) {
            return;
        }
        this.customeHttpService.queryOrgByOrgIdAndRelationship(this.orgTreeBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                event.node.children = _this.toTree(data.orgList);
            }
        });
    };
    WorkOrgTreeComponent.prototype.toTree = function (data) {
        if (data) {
            data.forEach(function (item) {
                item['label'] = item['orgName'];
                item['orgId'] = item['orgId'];
                item['location'] = item['location'];
            });
            return data;
        }
    };
    //查询
    WorkOrgTreeComponent.prototype.query = function () {
        var _this = this;
        this.orgTreeBean.orgId = this.org;
        this.orgTreeBean.relationshipType = '0';
        this.customeHttpService.queryOrgByOrgIdAndRelationship(this.orgTreeBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.date = _this.toTree(data.orgList);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'info', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    WorkOrgTreeComponent.prototype.query1 = function () {
        var _this = this;
        this.orgTreeBean.orgId = this.org1;
        this.orgTreeBean.relationshipType = '0';
        this.customeHttpService.queryOrgByOrgIdAndRelationship(this.orgTreeBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.date1 = _this.toTree(data.orgList);
                _this.query();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'info', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //清空
    WorkOrgTreeComponent.prototype.cleanUp = function () {
        this.treeOrgName = '';
        this.orgEle = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WorkOrgTreeComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WorkOrgTreeComponent.prototype, "outValue", void 0);
    WorkOrgTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'work-org-tree',
            template: __webpack_require__(/*! ./work-org-tree.component.html */ "./src/app/pages/tzb/custom/work-report/work-org-tree/work-org-tree.component.html"),
            styles: [__webpack_require__(/*! ./work-org-tree.component.scss */ "./src/app/pages/tzb/custom/work-report/work-org-tree/work-org-tree.component.scss")],
            providers: [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomeHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        })
        /**
         * 机构对应关系
         */
        ,
        __metadata("design:paramtypes", [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomeHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], WorkOrgTreeComponent);
    return WorkOrgTreeComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/work-report.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/work-report.module.ts ***!
  \********************************************************************/
/*! exports provided: WorkReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkReportModule", function() { return WorkReportModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _work_report_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work-report.routing */ "./src/app/pages/tzb/custom/work-report/work-report.routing.ts");
/* harmony import */ var _contact_sheet_organization_contact_sheet_organization_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-sheet-organization/contact-sheet-organization.component */ "./src/app/pages/tzb/custom/work-report/contact-sheet-organization/contact-sheet-organization.component.ts");
/* harmony import */ var _contact_sheet_staff_contact_sheet_staff_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-sheet-staff/contact-sheet-staff.component */ "./src/app/pages/tzb/custom/work-report/contact-sheet-staff/contact-sheet-staff.component.ts");
/* harmony import */ var _manage_detail_manage_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage-detail/manage-detail.component */ "./src/app/pages/tzb/custom/work-report/manage-detail/manage-detail.component.ts");
/* harmony import */ var _report_organization_report_organization_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./report-organization/report-organization.component */ "./src/app/pages/tzb/custom/work-report/report-organization/report-organization.component.ts");
/* harmony import */ var _report_staff_report_staff_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./report-staff/report-staff.component */ "./src/app/pages/tzb/custom/work-report/report-staff/report-staff.component.ts");
/* harmony import */ var _shenpi_shenpi_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shenpi/shenpi.component */ "./src/app/pages/tzb/custom/work-report/shenpi/shenpi.component.ts");
/* harmony import */ var _work_org_tree_work_org_treecomponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./work-org-tree/work-org-treecomponent */ "./src/app/pages/tzb/custom/work-report/work-org-tree/work-org-treecomponent.ts");
/* harmony import */ var app_uisftech_common_directive_monthly_calendar_monthly_calendar_monthly_calendar_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/@uisftech/common/directive/monthly-calendar/monthly-calendar/monthly-calendar.module */ "./src/app/@uisftech/common/directive/monthly-calendar/monthly-calendar/monthly-calendar.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var WorkReportModule = /** @class */ (function () {
    function WorkReportModule() {
    }
    WorkReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _work_report_routing__WEBPACK_IMPORTED_MODULE_5__["WorkReportRouting"],
                app_uisftech_common_directive_monthly_calendar_monthly_calendar_monthly_calendar_module__WEBPACK_IMPORTED_MODULE_13__["OnlyYearMonthSelectModule"]
            ],
            declarations: [
                _contact_sheet_organization_contact_sheet_organization_component__WEBPACK_IMPORTED_MODULE_6__["ContactSheetOrganizationComponent"],
                _contact_sheet_staff_contact_sheet_staff_component__WEBPACK_IMPORTED_MODULE_7__["ContactSheetStaffComponent"],
                _manage_detail_manage_detail_component__WEBPACK_IMPORTED_MODULE_8__["ManageDetailComponent"],
                _report_organization_report_organization_component__WEBPACK_IMPORTED_MODULE_9__["ReportOrganizationComponent"],
                _report_staff_report_staff_component__WEBPACK_IMPORTED_MODULE_10__["ReportStaffComponent"],
                _shenpi_shenpi_component__WEBPACK_IMPORTED_MODULE_11__["ShenPiComponent"],
                _work_org_tree_work_org_treecomponent__WEBPACK_IMPORTED_MODULE_12__["WorkOrgTreeComponent"],
            ],
            providers: []
        })
    ], WorkReportModule);
    return WorkReportModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/work-report.routing.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/work-report.routing.ts ***!
  \*********************************************************************/
/*! exports provided: routes, WorkReportRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkReportRouting", function() { return WorkReportRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_sheet_organization_contact_sheet_organization_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-sheet-organization/contact-sheet-organization.component */ "./src/app/pages/tzb/custom/work-report/contact-sheet-organization/contact-sheet-organization.component.ts");
/* harmony import */ var _contact_sheet_staff_contact_sheet_staff_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-sheet-staff/contact-sheet-staff.component */ "./src/app/pages/tzb/custom/work-report/contact-sheet-staff/contact-sheet-staff.component.ts");
/* harmony import */ var _manage_detail_manage_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-detail/manage-detail.component */ "./src/app/pages/tzb/custom/work-report/manage-detail/manage-detail.component.ts");
/* harmony import */ var _report_organization_report_organization_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report-organization/report-organization.component */ "./src/app/pages/tzb/custom/work-report/report-organization/report-organization.component.ts");
/* harmony import */ var _report_staff_report_staff_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-staff/report-staff.component */ "./src/app/pages/tzb/custom/work-report/report-staff/report-staff.component.ts");
/* harmony import */ var _shenpi_shenpi_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shenpi/shenpi.component */ "./src/app/pages/tzb/custom/work-report/shenpi/shenpi.component.ts");







var routes = [
    {
        path: '',
        children: [
            {
                path: 'contact-sheet-organization',
                component: _contact_sheet_organization_contact_sheet_organization_component__WEBPACK_IMPORTED_MODULE_1__["ContactSheetOrganizationComponent"]
            },
            {
                path: 'contact-sheet-staff',
                component: _contact_sheet_staff_contact_sheet_staff_component__WEBPACK_IMPORTED_MODULE_2__["ContactSheetStaffComponent"]
            },
            {
                path: 'manage-detail',
                component: _manage_detail_manage_detail_component__WEBPACK_IMPORTED_MODULE_3__["ManageDetailComponent"]
            },
            {
                path: 'report-organization',
                component: _report_organization_report_organization_component__WEBPACK_IMPORTED_MODULE_4__["ReportOrganizationComponent"]
            },
            {
                path: 'report-staff',
                component: _report_staff_report_staff_component__WEBPACK_IMPORTED_MODULE_5__["ReportStaffComponent"]
            },
            {
                path: 'shenpi',
                component: _shenpi_shenpi_component__WEBPACK_IMPORTED_MODULE_6__["ShenPiComponent"]
            }
        ]
    }
];
var WorkReportRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=work-report-work-report-module.js.map