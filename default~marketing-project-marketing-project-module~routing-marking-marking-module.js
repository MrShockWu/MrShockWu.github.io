(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~marketing-project-marketing-project-module~routing-marking-marking-module"],{

/***/ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program-detail/marketing-program-detail.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program-detail/marketing-program-detail.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 营销方案详情 -->\r\n<div class=\"ui-g-12 boxShadow\">\r\n    <header-title [Info]=\"'营销方案详情'\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">营销方案编号：</div>\r\n            <div class=\"ui-g-8\">{{totalMessage.marketingProgramId}}</div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n                <button pButton type=\"button\" label=\"已关联营销活动\" (click)=\"relevance()\" *ngIf=\"showFlag\"></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">营销方案名称：</div>\r\n            <div class=\"ui-g-8\">\r\n                {{totalMessage.marketingProgramName}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">状态：</div>\r\n            <div class=\"ui-g-8\">\r\n                {{totalMessage.statusId|codeValuePie:status}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">营销方案创建人：</div>\r\n            <div class=\"ui-g-8\">{{totalMessage.userId}}</div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">营销方案创建机构：</div>\r\n            <div class=\"ui-g-8\">{{totalMessage.orgId}}</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">发布人任职机构：</div>\r\n            <div class=\"ui-g-8\">{{totalMessage.dutyOrg}}</div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">营销方案内容：</div>\r\n            <div class=\"ui-g-8\">{{totalMessage.marketingProgramContent}}</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 table\">\r\n        <div class=\"ui-g-2\">\r\n            营销方案列表：\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <p-dataTable [value]=\"fileList\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n                <p-column field=\"fileName\" header=\"附件名称\">\r\n                    <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n                        <span>{{col.fileName}}</span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column header=\"操作\">\r\n                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                        <span (click)=\"down(col)\" class=\"tabelDownloadIco\">下载</span>\r\n                    </ng-template>\r\n                </p-column>\r\n            </p-dataTable>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-10\" style=\"text-align:center\">\r\n        <button pButton type=\"button\" label=\"返回\" (click)=\"returnBtn()\" *ngIf=\"showFlag\"></button>\r\n    </div>\r\n</div>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program-detail/marketing-program-detail.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program-detail/marketing-program-detail.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-12 .ui-g-6 .ui-g-4 {\n  text-align: right; }\n\n.table .ui-g-2 {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvbWFya2V0aW5nLXByb2plY3QvbWFya2V0aW5nLXByb2dyYW0tZGV0YWlsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcbWFya2V0aW5nXFxtYXJrZXRpbmctcHJvamVjdFxcbWFya2V0aW5nLXByb2dyYW0tZGV0YWlsXFxtYXJrZXRpbmctcHJvZ3JhbS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHWSxpQkFBaUIsRUFBQTs7QUFLN0I7RUFFUSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vbWFya2V0aW5nL21hcmtldGluZy1wcm9qZWN0L21hcmtldGluZy1wcm9ncmFtLWRldGFpbC9tYXJrZXRpbmctcHJvZ3JhbS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktZy0xMntcclxuICAgIC51aS1nLTZ7XHJcbiAgICAgICAgLnVpLWctNHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG59XHJcbi50YWJsZXtcclxuICAgIC51aS1nLTJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program-detail/marketing-program-detail.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program-detail/marketing-program-detail.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: MarketingProgramDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingProgramDetail", function() { return MarketingProgramDetail; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MarketingProgramDetail = /** @class */ (function () {
    function MarketingProgramDetail(routeInfo, cusOperationHttpService, commfunc, router) {
        this.routeInfo = routeInfo;
        this.cusOperationHttpService = cusOperationHttpService;
        this.commfunc = commfunc;
        this.router = router;
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_CUS_DOWNLOAD"]; //下载
        this.fileList = [];
        this.totalMessage = {}; //接收所有的信息
        this.msgs = [];
        this.status = [];
        // 表格中显示的信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        this.showFlag = true;
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.status = this.code['MarketingStatus'];
    }
    MarketingProgramDetail.prototype.ngOnInit = function () {
        if (this.routeInfo.snapshot.params['taskId']) {
            this.showFlag = false;
        }
        else {
            this.showFlag = true;
        }
        this.marketingProgramId = this.routeInfo.snapshot.params['marketingProgramId'];
        this.detailBtn();
    };
    //详情页面
    MarketingProgramDetail.prototype.detailBtn = function () {
        var _this = this;
        var param = {
            marketingProgramId: this.marketingProgramId
        };
        this.cusOperationHttpService.queryMarketingProgramById(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.totalMessage = data;
                _this.fileList = data.fileList;
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
    //码值
    MarketingProgramDetail.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //点击已关联营销活动跳转到营销活动列表查询界面
    MarketingProgramDetail.prototype.relevance = function () {
        var param = {
            marketingProgramId: this.marketingProgramId
        };
        window.open("#/pages/tzb/custom/marketing/marketing-activite/marketing-activity-query;marketingProgramId=" + this.marketingProgramId + "?flag=" + '1', '_blank');
    };
    //下载按钮
    MarketingProgramDetail.prototype.down = function (temp) {
        var name = temp.fileName;
        var path = temp.fileUrl;
        open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(name) + "&fileUrl=" + path);
    };
    MarketingProgramDetail.prototype.returnBtn = function () {
        var param = {
            flag: '9'
        };
        this.commfunc.setSessionDataCH('flagIndex', JSON.stringify(param));
        console.log(this.commfunc.getSessionDataCH('flagIndex'));
        setTimeout(function () {
            window.history.go(-1);
        }, 500);
    };
    MarketingProgramDetail = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'marketing-program-detail',
            template: __webpack_require__(/*! ./marketing-program-detail.component.html */ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program-detail/marketing-program-detail.component.html"),
            styles: [__webpack_require__(/*! ./marketing-program-detail.component.scss */ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program-detail/marketing-program-detail.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MarketingProgramDetail);
    return MarketingProgramDetail;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program/bean/marketingProgram.bean.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program/bean/marketingProgram.bean.ts ***!
  \**************************************************************************************************************/
/*! exports provided: MarketingProgressBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingProgressBean", function() { return MarketingProgressBean; });
var MarketingProgressBean = /** @class */ (function () {
    function MarketingProgressBean() {
    }
    return MarketingProgressBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program/marketing-program.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program/marketing-program.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--创建时候进行发布 -->\r\n<div class=\"ui-g-12 boxShadow\">\r\n\t<header-title [Info]=\"'营销方案创建'\"></header-title>\r\n\t<form [formGroup]=\"userform \">\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-3\">\r\n\t\t\t\t<label appValidation>营销方案名称：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t<input type=\"text\" pInputText formControlName=\"marketingProgramName\" [(ngModel)]=\"marketingProgressBean.marketingProgramName\">\r\n\t\t\t\t<div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['marketingProgramName'].valid&&userform.controls['marketingProgramName'].dirty\">\r\n\t\t\t\t\t<p [hidden]=\"!userform.hasError('required','marketingProgramName')\"> 营销方案名称不能为空！</p>\r\n\t\t\t\t\t<p *ngIf=\"!userform.hasError('required','marketingProgramName') && !userform.hasError('maxLength','marketingProgramName')\">\r\n\t\t\t\t\t\t最大长度不能超过120！</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-3\">\r\n\t\t\t\t<label appValidation>营销方案内容：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t<textarea pInputTextarea autoResize=\"autoResize\" formControlName=\"marketingProgramContent\" [rows]=\"10\" [(ngModel)]=\"marketingProgressBean.marketingProgramContent\"></textarea>\r\n\t\t\t\t<div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['marketingProgramContent'].valid&&userform.controls['marketingProgramContent'].dirty\">\r\n\t\t\t\t\t<p [hidden]=\"!userform.hasError('required','marketingProgramContent')\"> 营销方案内容不能为空！</p>\r\n\t\t\t\t\t<p *ngIf=\"!userform.hasError('required','marketingProgramContent') && !userform.hasError('maxLength','marketingProgramContent')\">\r\n\t\t\t\t\t\t最大长度不能超过250！</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n\t<div class=\"ui-g-offset-3 ui-g-6\">\r\n\t\t<p-fileUpload chooseLabel=\"浏览\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"load($event)\"\r\n\t\t    multiple=\"multiple\"></p-fileUpload>\r\n\t\t<div *ngIf=\"marketingContentFiles.length>0\">\r\n\t\t\t<div class=\"ui-g-12 table\">\r\n\t\t\t\t<p-dataTable [value]=\"marketingProgressBean.fileList\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n\t\t\t\t\t<p-column field=\"fileName\" header=\"附件名称\">\r\n\t\t\t\t\t\t<ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n\t\t\t\t\t\t\t<span>{{col.fileName}}</span>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</p-column>\r\n\t\t\t\t\t<p-column header=\"操作\">\r\n\t\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t\t<span (click)=\"down(col)\" class=\"tabelDownloadIco\">下载</span>\r\n\t\t\t\t\t\t\t<span (click)=\"toShanChu(ri)\" class=\"tabelDeleteIco\">删除</span>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</p-column>\r\n\t\t\t\t</p-dataTable>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-offset-3 ui-g-6 btn-style\">\r\n\t\t<button pButton type=\"button\" label=\"保存\" (click)=\"save()\" ></button>\r\n\t\t<button pButton type=\"button\" label=\"提交\" (click)=\"present()\"></button>\r\n\t</div>\r\n</div>\r\n<!-- 消息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n\t<p-footer>\r\n\t\t<button type=\"button\" pButton icon=\"fa-check\" style=\"color:#fff;\" label=\"是\" (click)=\"cd.accept()\"></button>\r\n\t\t<button type=\"button\" pButton icon=\"fa-close\" style=\"color:#fff;\" label=\"否\" (click)=\"cd.reject()\"></button>\r\n\t</p-footer>\r\n</p-confirmDialog>\r\n<!-- 审批选人 -->\r\n<p-dialog *ngIf=\"dealPerShow\" header=\"提交给\" [(visible)]=\"dealPerShow\"  (onHide)=\"onHideClose()\" >\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program/marketing-program.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program/marketing-program.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-3 {\n  text-align: right; }\n\n.btn-style {\n  text-align: center; }\n\n:host/deep/ .ui-button.ui-button-text-icon-left {\n  width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvbWFya2V0aW5nLXByb2plY3QvbWFya2V0aW5nLXByb2dyYW0vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxtYXJrZXRpbmdcXG1hcmtldGluZy1wcm9qZWN0XFxtYXJrZXRpbmctcHJvZ3JhbVxcbWFya2V0aW5nLXByb2dyYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL21hcmtldGluZy9tYXJrZXRpbmctcHJvamVjdC9tYXJrZXRpbmctcHJvZ3JhbS9tYXJrZXRpbmctcHJvZ3JhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1nLTN7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYnRuLXN0eWxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjpob3N0L2RlZXAvICAudWktYnV0dG9uLnVpLWJ1dHRvbi10ZXh0LWljb24tbGVmdHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program/marketing-program.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program/marketing-program.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: MarketingProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingProgramComponent", function() { return MarketingProgramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_marketingProgram_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bean/marketingProgram.bean */ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program/bean/marketingProgram.bean.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MarketingProgramComponent = /** @class */ (function () {
    function MarketingProgramComponent(router, cusOperationHttpService, route, fb, confirmationService, commfunc) {
        this.router = router;
        this.cusOperationHttpService = cusOperationHttpService;
        this.route = route;
        this.fb = fb;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.marketingProgressBean = new _bean_marketingProgram_bean__WEBPACK_IMPORTED_MODULE_6__["MarketingProgressBean"]();
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_CUS_UPLOAD"]; //导入
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_CUS_DOWNLOAD"]; //下载
        this.fileList = [];
        this.files = [];
        this.msgs = [];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        this.marketingContentFiles = [];
        this.dealPerShow = false; //选人
    }
    MarketingProgramComponent.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'marketingProgramContent': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(250)]),
            "marketingProgramName": new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(120)])
        });
        this.postId = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.postId;
    };
    MarketingProgramComponent.prototype.load = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files.push(file);
            this.fileName = file.fileName;
        }
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            if (JSON.parse(event.xhr.response).success == false) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: JSON.parse(event.xhr.response).errorMsg });
                return;
            }
            else {
                for (var _b = 0, _c = JSON.parse(event.xhr.response); _b < _c.length; _b++) {
                    var i = _c[_b];
                    this.marketingContentFiles.push(i);
                }
                this.marketingProgressBean.fileList = lodash__WEBPACK_IMPORTED_MODULE_7__["clone"](this.marketingContentFiles);
                this.msgs = [];
                this.msgs.push({ severity: 'success', summary: '提示', detail: '上传成功！' });
            }
        }
    };
    //只有点击提交按钮才能进行创建营销活动
    MarketingProgramComponent.prototype.present = function () {
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
        this.marketingProgressBean.operateType = '2';
        //校验营销活动名称不能为空
        if (!this.marketingProgressBean.marketingProgramName) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '营销方案名称不能为空' });
            return;
        }
        this.confirmationService.confirm({
            message: '确定要提交吗?',
            accept: function () {
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                }
                _this.waitSelUserList = _this.commfunc.query('YXHDFHLC', { postId: _this.postId });
                if (!_this.waitSelUserList.erro) {
                    _this.outVal = _this.waitSelUserList.waitSelUserList;
                    var chooseThis = _this.waitSelUserList.display;
                    console.log(_this.dealPerShow);
                    var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                    var a2 = commonHeader.extParam.specifyNextOpers;
                    console.log(a2);
                    if (chooseThis == true && (a2 == undefined || a2 == '' || a2 == null)) {
                        _this.dealPerShow = true;
                    }
                    else {
                        _this.approveClick();
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: _this.waitSelUserList.erro });
                }
            }
        });
    };
    MarketingProgramComponent.prototype.approveClick = function () {
        var _this = this;
        this.cusOperationHttpService.createMarketingProgram(this.marketingProgressBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.marketingProgramId = data.marketingProgramId;
                _this.router.navigate(['/pages/tzb/custom/marketing/marketing-project/query-plan', { marketingProgramId: _this.marketingProgramId }]);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    MarketingProgramComponent.prototype.outDisplayCall = function (event) {
        console.log(event);
        this.dealPerShow = event;
    };
    MarketingProgramComponent.prototype.outValueCall = function (event) {
        console.log(event);
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        console.log(commonHeader);
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.approveClick();
    };
    //点击X，关闭模态框
    MarketingProgramComponent.prototype.onHideClose = function () {
        document.body.style.overflow = 'auto';
        this.dealPerShow = false;
    };
    //点击保存按钮之后跳转到营销方案查询界面-如果点击的是保存按钮则不可以创建营销活动
    MarketingProgramComponent.prototype.save = function () {
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
        this.marketingProgressBean.operateType = '1';
        this.cusOperationHttpService.createMarketingProgram(this.marketingProgressBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.marketingProgramId = data.marketingProgramId;
                _this.router.navigate(['/pages/tzb/custom/marketing/marketing-project/query-plan', { marketingProgramId: _this.marketingProgramId }]);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    //下载按钮
    MarketingProgramComponent.prototype.down = function (temp) {
        var name = temp.fileName;
        var path = temp.fileUrl;
        open(decodeURI(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_CUS_DOWNLOAD"] + "?fileName=" + name + "&fileUrl=" + path));
    };
    MarketingProgramComponent.prototype.toShanChu = function (i) {
        this.marketingProgressBean.fileList.splice(i, 1);
        this.marketingProgressBean.fileList = lodash__WEBPACK_IMPORTED_MODULE_7__["clone"](this.marketingProgressBean.fileList);
    };
    MarketingProgramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-marketing-program',
            template: __webpack_require__(/*! ./marketing-program.component.html */ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program/marketing-program.component.html"),
            styles: [__webpack_require__(/*! ./marketing-program.component.scss */ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program/marketing-program.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__["Commfunc"]])
    ], MarketingProgramComponent);
    return MarketingProgramComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-project.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-project/marketing-project.module.ts ***!
  \******************************************************************************************/
/*! exports provided: MarketProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketProjectModule", function() { return MarketProjectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _marketing_project_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marketing-project.routing */ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-project.routing.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _marketing_program_marketing_program_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marketing-program/marketing-program.component */ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program/marketing-program.component.ts");
/* harmony import */ var _marketing_program_detail_marketing_program_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./marketing-program-detail/marketing-program-detail.component */ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program-detail/marketing-program-detail.component.ts");
/* harmony import */ var _query_plan_query_plan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./query-plan/query-plan.component */ "./src/app/pages/tzb/custom/marketing/marketing-project/query-plan/query-plan.component.ts");
/* harmony import */ var _update_query_plan_update_query_plan_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update-query-plan/update-query-plan.component */ "./src/app/pages/tzb/custom/marketing/marketing-project/update-query-plan/update-query-plan.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MarketProjectModule = /** @class */ (function () {
    function MarketProjectModule() {
    }
    MarketProjectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_5__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _marketing_project_routing__WEBPACK_IMPORTED_MODULE_3__["MarketingProjectRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"]
            ],
            declarations: [
                _marketing_program_marketing_program_component__WEBPACK_IMPORTED_MODULE_6__["MarketingProgramComponent"],
                _marketing_program_detail_marketing_program_detail_component__WEBPACK_IMPORTED_MODULE_7__["MarketingProgramDetail"],
                _query_plan_query_plan_component__WEBPACK_IMPORTED_MODULE_8__["QueryPlanComponent"],
                _update_query_plan_update_query_plan_component__WEBPACK_IMPORTED_MODULE_9__["UpdateQueryPlanComponent"]
            ],
            providers: []
        })
    ], MarketProjectModule);
    return MarketProjectModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-project.routing.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-project/marketing-project.routing.ts ***!
  \*******************************************************************************************/
/*! exports provided: routes, MarketingProjectRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingProjectRouting", function() { return MarketingProjectRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marketing_program_marketing_program_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marketing-program/marketing-program.component */ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program/marketing-program.component.ts");
/* harmony import */ var _marketing_program_detail_marketing_program_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marketing-program-detail/marketing-program-detail.component */ "./src/app/pages/tzb/custom/marketing/marketing-project/marketing-program-detail/marketing-program-detail.component.ts");
/* harmony import */ var _query_plan_query_plan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./query-plan/query-plan.component */ "./src/app/pages/tzb/custom/marketing/marketing-project/query-plan/query-plan.component.ts");




var routes = [
    {
        path: '',
        children: [
            {
                path: 'marketing-program',
                component: _marketing_program_marketing_program_component__WEBPACK_IMPORTED_MODULE_1__["MarketingProgramComponent"]
            },
            {
                path: 'marketing-program-detail',
                component: _marketing_program_detail_marketing_program_detail_component__WEBPACK_IMPORTED_MODULE_2__["MarketingProgramDetail"]
            },
            {
                path: 'query-plan',
                component: _query_plan_query_plan_component__WEBPACK_IMPORTED_MODULE_3__["QueryPlanComponent"]
            }
        ]
    }
];
var MarketingProjectRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-project/query-plan/bean/QueryPlan.bean.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-project/query-plan/bean/QueryPlan.bean.ts ***!
  \************************************************************************************************/
/*! exports provided: QueryPlanBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryPlanBean", function() { return QueryPlanBean; });
var QueryPlanBean = /** @class */ (function () {
    function QueryPlanBean() {
    }
    return QueryPlanBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-project/query-plan/query-plan.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-project/query-plan/query-plan.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 营销方案查询 -->\r\n<div class=\"ui-g-12 boxShadow\">\r\n    <header-title [Info]=\"'营销方案查询'\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 tit\">\r\n                <span>营销方案编号:</span>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"queryPlanBean.marketingProgramId\" class=\"qptextInput\"/>\r\n            </div>\r\n            <div class=\"ui-g-3 tit\">\r\n                <span>营销方案名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"queryPlanBean.marketingProgramName\" class=\"qptextInput\"/>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 toplast\">\r\n            <div class=\"ui-g-2 tit\">\r\n                <span>营销方案状态:</span>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <p-dropdown ng-value=\"请选择\" [(ngModel)]=\"queryPlanBean.statusId\" [options]=\"status\" class=\"qpPropdowna\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-3 tit\">\r\n                <span>营销方案创建人:</span>\r\n            </div>\r\n            <div class=\"ui-g-3 queryinputbtn\">\r\n                <input class=\"queryinputOrg\" type=\"text\" pInputText disabled [(ngModel)]=\"createrName\" />\r\n                <div class=\"clickspan\" (click)=\"userTreeClick()\">\r\n                    <a class=\"a-hand\">\r\n                        <span>...</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 toplast\">\r\n            <div class=\"ui-g-2 tit\">\r\n                <span>营销方案创建机构:</span>\r\n            </div>\r\n            <div class=\"ui-g-3 queryinputbtn\">\r\n                <input class=\"queryinputOrg\" type=\"text\" pInputText disabled [(ngModel)]=\"treeOrgName\" />\r\n                <div class=\"clickspan\" (click)=\"orgTreeShow()\">\r\n                    <a class=\"a-hand\">\r\n                        <span>...</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-3 tit\">\r\n                <span>营销方案创建时间:</span>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                    [locale]=\"ch\" (onSelect)=\"showDataStart()\" (onBlur)=\"onchange1()\" [(ngModel)]=\"startDate\" [maxDate]=\"thruDate\" class=\"qp-calerdar\" [showOtherMonths]=\"false\" ></p-calendar>\r\n                <span>至</span>\r\n                <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                    [locale]=\"ch\" (onSelect)=\"showDataEnd()\" (onBlur)=\"onchange2()\" [(ngModel)]=\"thruDate\" [minDate]=\"startDate\" class=\"qp-calerdar\" [showOtherMonths]=\"false\" ></p-calendar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"query()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12  table base-table\">\r\n        <p-dataTable [value]=\"list\" [style]=\"{'text-align':'center'}\" [emptyMessage]='tabMesg' scrollable=\"true\">\r\n            <p-column header=\"营销方案编号\" field=\"marketingProgramId\"></p-column>\r\n            <p-column header=\"营销方案名称\" field=\"marketingProgramName\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <a (click)=\"toDetail(item)\" class=\"custNo_a\">{{item.marketingProgramName}}</a>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"状态\" field=\"statusId\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span>{{item.statusId|codeValuePie:status}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"创建人\" field=\"userId\"></p-column>\r\n            <p-column header=\"创建人机构\" field=\"orgId\"></p-column>\r\n            <p-column header=\"创建日期\" field=\"createDate\"></p-column>\r\n            <p-column header=\"操作\" field=\"\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)='toRevamp(item)' class=\"tabelUpdateIco\" *ngIf=\"item.statusId=='1'&&orgId==item.orgId&&userId2 == item.userId\">修改</span>\r\n                    <span class=\"tabelUpdateSetIco\" *ngIf=\"item.statusId!='1'||orgId!=item.orgId||userId2 != item.userId\">修改</span>\r\n                    <span (click)='toTerminate(item)' class=\"tabelStopIco\" *ngIf=\"item.statusId=='3'&&orgId==item.orgId&&userId2 == item.userId\">终止</span>\r\n                    <span class=\"tabelStopSetIco\" *ngIf=\"item.statusId!='3'||orgId!=item.orgId||userId2 != item.userId\">终止</span>\r\n                    <span (click)='toDelete(item)' class=\"tabelRepealIco\"  *ngIf=\"item.statusId!='3'&&item.statusId!='4'&&orgId==item.orgId&&userId2 == item.userId\">撤销</span>\r\n                    <span class=\"tabelRepealIco_no\"  *ngIf=\"item.statusId=='3'||item.statusId=='4'||orgId!=item.orgId||userId2 != item.userId\">撤销</span>\r\n                    <span (click)='toIssue(item)' class=\"tabelPublishIco\" *ngIf=\"item.statusId=='1'&&userId2 == item.userId&&orgId==item.orgId\">发布</span>\r\n                    <span class=\"tabelPublishSetIco\" *ngIf=\"item.statusId!='1'||userId2 != item.userId||orgId!=item.orgId\">发布</span>\r\n                    <span (click)='toDetail(item)' class=\"tabelDetailIco\" >查看详情</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator first={{first}} rows=\"{{queryPlanBean.countNum}}\" totalRecords=\"{{totalNum}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"确定\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"取消\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n\r\n<!-- 修改 -->\r\n<p-dialog *ngIf='orgTreePage' [(visible)]=\"orgTreePage\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 (onHide)=\"onHideClose()\"\r\n    class=\"my-cust-overf\">\r\n\t<p-header>修改</p-header>\r\n\t<update-query-plan  [inValue]=\"updateValue\"(outValue)=\"updateCall($event)\"></update-query-plan>\r\n</p-dialog>\r\n<!-- 机构树 -->\r\n<p-dialog *ngIf='orgTreeDisplay' [(visible)]=\"orgTreeDisplay\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 (onHide)=\"onHideClose()\"\r\n    class=\"my-cust-overf\">\r\n\t<p-header>机构树</p-header>\r\n\t<marketing-org-tree  (outValue)=\"treeCall($event)\"></marketing-org-tree>\r\n</p-dialog>\r\n\r\n<!-- 员工 -->\r\n<p-dialog *ngIf=\"personPage\" [(visible)]=\"personPage\" modal=\"modal\" [positionTop]=10 (onHide)=\"onHideClose()\" class=\"my-cust-overf\">\r\n\t<p-header>员工列表</p-header>\r\n\t<app-query-user-list  [in-value]=\"userInValue\" (outValue)=\"perInfor($event)\"></app-query-user-list>\r\n</p-dialog>\r\n\r\n<!-- 审批选人 -->\r\n<p-dialog *ngIf=\"dealPerShow\" header=\"提交给\" [(visible)]=\"dealPerShow\" class=\"my-cust-overf\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\" ></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-project/query-plan/query-plan.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-project/query-plan/query-plan.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn,\n.table {\n  text-align: center; }\n  .btn .custNo_a,\n  .table .custNo_a {\n    cursor: pointer;\n    color: #19b0c8; }\n  .tit {\n  text-align: right; }\n  .time-name {\n  padding: 0; }\n  .sousuoShow {\n  display: flex; }\n  .sousuoShow .inputSearch {\n    height: 25px;\n    margin-right: -2px; }\n  .sousuoShow .checkSearch {\n    width: 104px;\n    height: 25px;\n    background: #19b0c8;\n    color: #fff;\n    border-radius: 0px 5px 5px 0px;\n    line-height: 25px;\n    text-align: center;\n    cursor: pointer; }\n  .queryinputbtn {\n  display: flex; }\n  .clickspan {\n  width: 10%;\n  height: 23px;\n  cursor: pointer; }\n  .queryinputOrg {\n  width: 85.5% !important;\n  border-right: none;\n  min-width: 241px !important; }\n  .toplast {\n  margin-top: -5px; }\n  @media screen and (max-width: 1280px) {\n  :host/deep/ .qp-calerdar .ui-calendar {\n    width: 44.7% !important;\n    min-width: 120.5px !important;\n    background-color: red; }\n  .qptextInput {\n    width: 76% !important;\n    min-width: 270px !important; }\n  :host /deep/ .qpPropdowna .ui-dropdown {\n    width: 76% !important;\n    min-width: 270px !important; }\n  .queryinputOrg {\n    width: 69.5% !important; } }\n  :host/deep/ .qp-calerdar .ui-calendar {\n  width: 45.2%;\n  min-width: 124px;\n  background-color: blue; }\n  .qptextInput {\n  width: 96% !important;\n  min-width: 270px !important; }\n  :host /deep/ .qpPropdowna .ui-dropdown {\n  width: 96% !important;\n  min-width: 270px !important; }\n  :host/deep/ .my-cust-overf .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvbWFya2V0aW5nLXByb2plY3QvcXVlcnktcGxhbi9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXG1hcmtldGluZ1xcbWFya2V0aW5nLXByb2plY3RcXHF1ZXJ5LXBsYW5cXHF1ZXJ5LXBsYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksa0JBQWtCLEVBQUE7RUFGdEI7O0lBSVEsZUFBZTtJQUNmLGNBQWMsRUFBQTtFQUl0QjtFQUNJLGlCQUFpQixFQUFBO0VBRXJCO0VBQ0ksVUFBVSxFQUFBO0VBRWQ7RUFDSSxhQUFhLEVBQUE7RUFEakI7SUFHUSxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7RUFKMUI7SUFPUSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZSxFQUFBO0VBcUJ2QjtFQUdJLGFBQWEsRUFBQTtFQWNqQjtFQUNJLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZSxFQUFBO0VBRW5CO0VBQ0ksdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwyQkFBMkIsRUFBQTtFQUUvQjtFQUNJLGdCQUFnQixFQUFBO0VBR3BCO0VBRUs7SUFDRyx1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLHFCQUFxQixFQUFBO0VBRXpCO0lBQ0kscUJBQXFCO0lBQ3JCLDJCQUEyQixFQUFBO0VBRS9CO0lBQ0kscUJBQXFCO0lBQ3JCLDJCQUEyQixFQUFBO0VBRS9CO0lBQ0ksdUJBQXVCLEVBQUEsRUFDMUI7RUFFTDtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0JBQXNCLEVBQUE7RUFFMUI7RUFDSSxxQkFBcUI7RUFDckIsMkJBQTJCLEVBQUE7RUFFL0I7RUFDSSxxQkFBcUI7RUFDckIsMkJBQTJCLEVBQUE7RUFFL0I7RUFDSSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vbWFya2V0aW5nL21hcmtldGluZy1wcm9qZWN0L3F1ZXJ5LXBsYW4vcXVlcnktcGxhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4sXHJcbi50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAuY3VzdE5vX2F7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udGl0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi50aW1lLW5hbWV7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5zb3VzdW9TaG93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAuaW5wdXRTZWFyY2gge1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0ycHg7XHJcbiAgICB9XHJcbiAgICAuY2hlY2tTZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxMDRweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE5YjBjODtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuLy8gICAgIDpob3N0L2RlZXAvIC51aS1jYWxlbmRhciB7XHJcbi8vICAgICAgICBtaW4td2lkdGg6IDExOHB4O1xyXG4vLyAgICB9XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MXB4KSB7XHJcbi8vICAgICA6aG9zdC9kZWVwLyAudWktY2FsZW5kYXIge1xyXG4vLyAgICAgICAgbWluLXdpZHRoOiAyMDZweDtcclxuLy8gICAgfVxyXG4vLyB9XHJcblxyXG4vLyAuZGF0ZSB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLnF1ZXJ5aW5wdXRidG4ge1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBtaW4td2lkdGg6IDI5OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAucXVlcnlpbnB1dE9yZyB7XHJcbiAgICAvLyAgICAgLy8gYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgLy8gICAgIC8vIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xyXG4gICAgLy8gICAgIC8vIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcclxuICAgIC8vICAgICAvLyBtaW4td2lkdGg6IDY5cHggIWltcG9ydGFudDtcclxuICAgIC8vIH1cclxuICAgIC8vIC5jbGlja3NwYW4ge1xyXG4gICAgLy8gICAgIC8vIHdpZHRoOiAxNCU7XHJcbiAgICAvLyAgICAgLy8gaGVpZ2h0OiAyM3B4O1xyXG4gICAgLy8gICAgIC8vIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8vIH1cclxufVxyXG4uY2xpY2tzcGFuIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnF1ZXJ5aW5wdXRPcmcge1xyXG4gICAgd2lkdGg6IDg1LjUlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBtaW4td2lkdGg6IDI0MXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRvcGxhc3R7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgLy8g5p+l6K+i6IyD5Zu0IOaXpeacn+e7hOS7tlxyXG4gICAgIDpob3N0L2RlZXAvICAucXAtY2FsZXJkYXIgLnVpLWNhbGVuZGFyIHtcclxuICAgICAgICB3aWR0aDogNDQuNyUgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4td2lkdGg6IDEyMC41cHggIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICB9IFxyXG4gICAgLnFwdGV4dElucHV0IHtcclxuICAgICAgICB3aWR0aDogNzYlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgOmhvc3QgL2RlZXAvIC5xcFByb3Bkb3duYSAudWktZHJvcGRvd24ge1xyXG4gICAgICAgIHdpZHRoOiA3NiUgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4td2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucXVlcnlpbnB1dE9yZyB7XHJcbiAgICAgICAgd2lkdGg6IDY5LjUlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuOmhvc3QvZGVlcC8gLnFwLWNhbGVyZGFyIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogNDUuMiU7XHJcbiAgICBtaW4td2lkdGg6IDEyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG4ucXB0ZXh0SW5wdXQge1xyXG4gICAgd2lkdGg6IDk2JSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAucXBQcm9wZG93bmEgLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiA5NiUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMjcwcHggIWltcG9ydGFudDtcclxufVxyXG46aG9zdC9kZWVwLyAubXktY3VzdC1vdmVyZiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudHtcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-project/query-plan/query-plan.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-project/query-plan/query-plan.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: QueryPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryPlanComponent", function() { return QueryPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_QueryPlan_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean/QueryPlan.bean */ "./src/app/pages/tzb/custom/marketing/marketing-project/query-plan/bean/QueryPlan.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QueryPlanComponent = /** @class */ (function () {
    function QueryPlanComponent(router, routeInfo, cusOperationHttpService, commfunc, confirmationService) {
        this.router = router;
        this.routeInfo = routeInfo;
        this.cusOperationHttpService = cusOperationHttpService;
        this.commfunc = commfunc;
        this.confirmationService = confirmationService;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["CALENDAR_CN"];
        this.startDate = null;
        this.thruDate = null;
        this.msgs = [];
        this.isShowTip = true;
        this.orgTreePage = false;
        // 表格中显示的信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"];
        this.queryPlanBean = new _bean_QueryPlan_bean__WEBPACK_IMPORTED_MODULE_5__["QueryPlanBean"]();
        this.first = 0; //分页控制
        this.list = [];
        this.status = []; //营销方案状态
        this.updateValue = [];
        this.orgTreeDisplay = false;
        this.personPage = false;
        this.dealPerShow = false; //选人
        this.paramEnd = {};
        this.num = 0;
        this.showIco = true;
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.status = this.code['MarketingStatusPro'];
        this.orgId = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
        this.userId2 = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        this.postId = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.postId;
    }
    QueryPlanComponent.prototype.ngOnInit = function () {
        this.marketingProgramId = this.routeInfo.snapshot.params['marketingProgramId'];
        this.queryPlanBean.marketingProgramId = this.marketingProgramId;
        this.queryPlanBean.countNum = 10;
        this.queryPlanBean.pageNum = 1;
        this.first = 0;
        this.commfunc.clearSession('flagIndex');
        this.query();
    };
    //查询
    QueryPlanComponent.prototype.query = function () {
        this.doQuery();
    };
    QueryPlanComponent.prototype.doQuery = function () {
        var _this = this;
        if (this.startDate != null || this.startDate != undefined) {
            this.queryPlanBean.startDate = this.commfunc.transDateN(this.startDate);
            this.queryPlanBean.thruDate = this.commfunc.transDateN(this.thruDate);
        }
        this.cusOperationHttpService.queryMarketingProgramList(this.queryPlanBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.totalNum = data.totalCount;
                _this.list = data.returnList;
                if (data.returnList) {
                    for (var _i = 0, _a = data.returnList; _i < _a.length; _i++) {
                        var item = _a[_i];
                        _this.marketProgramId = item.marketingProgramId;
                    }
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    //开始日期
    QueryPlanComponent.prototype.showDataStart = function () {
        var _this = this;
        if (this.startDate && this.thruDate) {
            if (this.startDate > this.thruDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.startDate = null;
                });
            }
        }
    };
    //结束日期
    QueryPlanComponent.prototype.showDataEnd = function () {
        var _this = this;
        if (this.startDate && this.thruDate) {
            if (this.startDate > this.thruDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.thruDate = null;
                });
            }
        }
    };
    //手动输入日期时，失去焦点时进行判断
    QueryPlanComponent.prototype.onchange1 = function () {
        this.showDataStart();
    };
    QueryPlanComponent.prototype.onchange2 = function () {
        this.showDataEnd();
    };
    //点击X，关闭模态框
    QueryPlanComponent.prototype.onHideClose = function () {
        document.body.style.overflow = 'auto';
        this.orgTreeDisplay = false;
        this.personPage = false;
    };
    //机构树的调用
    QueryPlanComponent.prototype.orgTreeShow = function () {
        document.body.style.overflow = 'hidden';
        this.orgTreeDisplay = !this.orgTreeDisplay;
    };
    QueryPlanComponent.prototype.treeCall = function (param) {
        document.body.style.overflow = 'auto';
        this.headerTitle = '机构';
        this.orgTreeDisplay = false;
        this.treeOrgName = param.orgName;
        this.queryPlanBean.orgId = param.orgId;
    };
    //人员模态框
    QueryPlanComponent.prototype.userTreeClick = function () {
        this.headerTitle = '人员';
        document.body.style.overflow = 'hidden';
        if (this.queryPlanBean.orgId == '' || this.queryPlanBean.orgId == undefined || this.queryPlanBean.orgId == null) {
            this.userInValue = '0000';
        }
        else {
            this.userInValue = this.queryPlanBean.orgId;
        }
        this.personPage = !this.personPage;
    };
    //人员回调
    QueryPlanComponent.prototype.perInfor = function (event) {
        this.personPage = false;
        this.createrName = event[0].tellerName;
        this.queryPlanBean.userId = event[0].tellerId;
        this.creater = event[0].tellerId;
    };
    //分页
    QueryPlanComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.queryPlanBean.countNum = Number(event.rows);
        //当前页
        var currentPage = event.page + 1;
        this.queryPlanBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.queryPlanBean.countNum;
        this.doQuery();
    };
    //页码重置
    QueryPlanComponent.prototype.querySecleReset = function () {
        this.queryPlanBean.countNum = 10;
        this.queryPlanBean.pageNum = 1;
        this.first = 0;
    };
    //重置
    QueryPlanComponent.prototype.reset = function () {
        this.treeOrgName = '';
        this.createrName = '';
        this.startDate = null;
        this.thruDate = null;
        this.queryPlanBean = new _bean_QueryPlan_bean__WEBPACK_IMPORTED_MODULE_5__["QueryPlanBean"]();
        this.querySecleReset();
    };
    //码值
    QueryPlanComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //修改按钮
    QueryPlanComponent.prototype.toRevamp = function (data) {
        this.orgTreePage = true;
        this.updateValue = data;
    };
    //修改的回调
    QueryPlanComponent.prototype.updateCall = function (param) {
        this.orgTreePage = param;
        this.doQuery();
    };
    //撤销按钮
    QueryPlanComponent.prototype.toDelete = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要撤销吗?',
            accept: function () {
                var param = {
                    marketingProgramId: item.marketingProgramId,
                };
                _this.cusOperationHttpService.deletedMarketingProgram(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        _this.doQuery();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
                });
            }
        });
    };
    //发布按钮
    QueryPlanComponent.prototype.toIssue = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确定要发布吗?',
            accept: function () {
                _this.num = 1;
                var arr = {};
                arr['marketingProgramId'] = item.marketingProgramId;
                _this.paramObj = {
                    bizType: '01',
                    bizPkFieldMap: arr,
                };
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                }
                _this.waitSelUserList = _this.commfunc.query('YXHDFHLC', { postId: _this.postId });
                if (!_this.waitSelUserList.erro) {
                    _this.outVal = _this.waitSelUserList.waitSelUserList;
                    var chooseThis = _this.waitSelUserList.display;
                    console.log(_this.dealPerShow);
                    var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                    var a2 = commonHeader.extParam.specifyNextOpers;
                    console.log(a2);
                    if (chooseThis == true && (a2 == undefined || a2 == '' || a2 == null)) {
                        _this.dealPerShow = true;
                    }
                    else {
                        _this.approveClick();
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: _this.waitSelUserList.erro });
                }
            }
        });
    };
    //发布审批
    QueryPlanComponent.prototype.approveClick = function () {
        var _this = this;
        this.cusOperationHttpService.custMarketWorkflowUnifiedEntrance(this.paramObj).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.doQuery();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    //终止按钮
    QueryPlanComponent.prototype.toTerminate = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确定要终止吗?',
            accept: function () {
                _this.num = 2;
                _this.paramEnd = {
                    marketingProgramId: item.marketingProgramId,
                    statusId: item.statusId,
                };
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                }
                _this.waitSelUserList = _this.commfunc.query('YXHDFHLC', { postId: _this.postId });
                if (!_this.waitSelUserList.erro) {
                    _this.outVal = _this.waitSelUserList.waitSelUserList;
                    var chooseThis = _this.waitSelUserList.display;
                    console.log(_this.dealPerShow);
                    var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                    var a2 = commonHeader.extParam.specifyNextOpers;
                    console.log(a2);
                    if (chooseThis == true && (a2 == undefined || a2 == '' || a2 == null)) {
                        _this.dealPerShow = true;
                    }
                    else {
                        _this.endClick();
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: _this.waitSelUserList.erro });
                }
            }
        });
    };
    //终止审批
    QueryPlanComponent.prototype.endClick = function () {
        var _this = this;
        this.cusOperationHttpService.terminateMarketingProgram(this.paramEnd).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.doQuery();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    QueryPlanComponent.prototype.outDisplayCall = function (event) {
        console.log(event);
        this.dealPerShow = event;
    };
    QueryPlanComponent.prototype.outValueCall = function (event) {
        console.log(event);
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        console.log(commonHeader);
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        if (this.num == 1) {
            this.approveClick(); //创建
        }
        else if (this.num == 2) {
            this.endClick();
        }
    };
    // outValueCall2 () {
    // 	console.log(event);
    // 	this.outVal = event;
    // 	let ss = '';
    // 	this.outVal.forEach(item => {
    // 		ss += item.tellerId + ','
    // 	});
    // 	let commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
    // 	commonHeader.extParam['specifyNextOpers'] = ss;
    // 	console.log(commonHeader);
    // 	this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
    // 	this.endClick();//终止
    // }
    //查看详情按钮
    //点击营销方案名称查看营销方案详情
    QueryPlanComponent.prototype.toDetail = function (item) {
        this.router.navigate(['/pages/tzb/custom/marketing/marketing-project/marketing-program-detail', item]);
    };
    QueryPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-query-plan',
            template: __webpack_require__(/*! ./query-plan.component.html */ "./src/app/pages/tzb/custom/marketing/marketing-project/query-plan/query-plan.component.html"),
            styles: [__webpack_require__(/*! ./query-plan.component.scss */ "./src/app/pages/tzb/custom/marketing/marketing-project/query-plan/query-plan.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]])
    ], QueryPlanComponent);
    return QueryPlanComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-project/update-query-plan/bean/UpdateQuery.bean.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-project/update-query-plan/bean/UpdateQuery.bean.ts ***!
  \*********************************************************************************************************/
/*! exports provided: UpdateQueryPlanBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateQueryPlanBean", function() { return UpdateQueryPlanBean; });
var UpdateQueryPlanBean = /** @class */ (function () {
    function UpdateQueryPlanBean() {
    }
    return UpdateQueryPlanBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-project/update-query-plan/update-query-plan.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-project/update-query-plan/update-query-plan.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--创建时候进行发布 -->\r\n<div class=\"ui-g-12\">\r\n\t<header-title [Info]=\"'营销方案修改'\"></header-title>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-3\">\r\n\t\t\t<label appValidation>营销方案名称：</label>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<input type=\"text\" pInputText [(ngModel)]=\"updateQueryPlanBean.marketingProgramName\" disabled>\r\n\t\t</div>\r\n\t</div>\r\n\t<form [formGroup]=\"userform \">\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-3\">\r\n\t\t\t\t<label appValidation>营销方案内容：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t<textarea pInputTextarea autoResize=\"autoResize\" formControlName=\"marketingProgramContent\" [rows]=\"10\" [(ngModel)]=\"updateQueryPlanBean.marketingProgramContent\"></textarea>\r\n\t\t\t\t<div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['marketingProgramContent'].valid&&userform.controls['marketingProgramContent'].dirty\">\r\n\t\t\t\t\t<p [hidden]=\"!userform.hasError('required','marketingProgramContent')\"> 营销方案内容不能为空！</p>\r\n\t\t\t\t\t<p *ngIf=\"!userform.hasError('required','marketingProgramContent') && !userform.hasError('maxLength','marketingProgramContent')\">\r\n\t\t\t\t\t\t最大长度不能超过250！</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-3\">\r\n\t\t\t<label>营销方案状态：</label>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<p-dropdown ng-value=\"请选择\" [(ngModel)]=\"updateQueryPlanBean.statusId\"  [options]=\"status\" disabled></p-dropdown>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-offset-3 ui-g-6\">\r\n\t\t<p-fileUpload chooseLabel=\"浏览\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"load($event)\"\r\n\t\t    multiple=\"multiple\" accept=\"application/msword\" maxFileSize=\"10485760\" invalidFileSizeMessageDetail=\"最大10兆\" invalidFileSizeMessageSummary=\"{0}\"\r\n\t\t    invalidFileTypeMessageDetail=\"只能上传word\" invalidFileTypeMessageSummary=\"\"></p-fileUpload>\r\n\r\n\t\t<div *ngIf=\"updateQueryPlanBean.fileList.length>0\">\r\n\t\t\t<div class=\"ui-g-12 table\">\r\n\t\t\t\t<p-dataTable [value]=\"updateQueryPlanBean.fileList\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n\t\t\t\t\t<p-column field=\"fileName\" header=\"附件名称\">\r\n\t\t\t\t\t\t<ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n\t\t\t\t\t\t\t<span>{{col.fileName}}</span>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</p-column>\r\n\t\t\t\t\t<p-column header=\"操作\">\r\n\t\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t\t<span (click)=\"down(col)\" class=\"tabelDownloadIco\">下载</span>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</p-column>\r\n\t\t\t\t</p-dataTable>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-offset-3 ui-g-6 btn-style\">\r\n\t\t<button pButton type=\"button\" label=\"确定修改\" class=\"saveBtn\" (click)=\"modifySaveBtn()\"></button>\r\n\t\t<button pButton type=\"button\" label=\"取消\" class=\"closeBtn\" (click)=\"modifyCloseBtn()\"></button>\r\n\t</div>\r\n</div>\r\n<!-- 消息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-project/update-query-plan/update-query-plan.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-project/update-query-plan/update-query-plan.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-3 {\n  text-align: right; }\n\n.btn-style {\n  text-align: center; }\n\n:host/deep/ .ui-button.ui-button-text-icon-left {\n  width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvbWFya2V0aW5nLXByb2plY3QvdXBkYXRlLXF1ZXJ5LXBsYW4vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxtYXJrZXRpbmdcXG1hcmtldGluZy1wcm9qZWN0XFx1cGRhdGUtcXVlcnktcGxhblxcdXBkYXRlLXF1ZXJ5LXBsYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL21hcmtldGluZy9tYXJrZXRpbmctcHJvamVjdC91cGRhdGUtcXVlcnktcGxhbi91cGRhdGUtcXVlcnktcGxhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1nLTN7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYnRuLXN0eWxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjpob3N0L2RlZXAvICAudWktYnV0dG9uLnVpLWJ1dHRvbi10ZXh0LWljb24tbGVmdHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-project/update-query-plan/update-query-plan.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-project/update-query-plan/update-query-plan.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: UpdateQueryPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateQueryPlanComponent", function() { return UpdateQueryPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_UpdateQuery_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bean/UpdateQuery.bean */ "./src/app/pages/tzb/custom/marketing/marketing-project/update-query-plan/bean/UpdateQuery.bean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
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
 * 营销方案的修改界面
 */
var UpdateQueryPlanComponent = /** @class */ (function () {
    function UpdateQueryPlanComponent(router, cusOperationHttpService, route, commfunc, fb) {
        this.router = router;
        this.cusOperationHttpService = cusOperationHttpService;
        this.route = route;
        this.commfunc = commfunc;
        this.fb = fb;
        this.updateQueryPlanBean = new _bean_UpdateQuery_bean__WEBPACK_IMPORTED_MODULE_6__["UpdateQueryPlanBean"]();
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_CUS_UPLOAD"]; //导入
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_CUS_DOWNLOAD"]; //下载
        this.fileList = [];
        this.files = [];
        this.msgs = [];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"];
        this.marketingContentFiles = [];
        this.userform = this.fb.group({
            'marketingProgramContent': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(250)]),
        });
    }
    UpdateQueryPlanComponent.prototype.ngOnInit = function () {
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.status = this.code['MarketingStatusPro'];
        // this.marketingProgramId=this.inValue.marketingProgramId;
    };
    UpdateQueryPlanComponent.prototype.ngOnChanges = function () {
        //接受父页面传过来的数据(字段组id--contentPurposeTypeId)
        // this.selectParentData = this.inValue;
        this.updateQueryPlanBean = this.inValue;
        var arr = [];
        if (this.inValue.fileList != null) {
            for (var _i = 0, _a = this.inValue.fileList; _i < _a.length; _i++) {
                var item = _a[_i];
                var array = {};
                array['fileName'] = item.fileName;
                array['fileUrl'] = item.fileUrl;
                arr.push(array);
            }
            this.marketingContentFiles = arr;
            this.updateQueryPlanBean.fileList = this.marketingContentFiles;
        }
        else {
            this.updateQueryPlanBean.fileList = [];
        }
    };
    //码值
    UpdateQueryPlanComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    UpdateQueryPlanComponent.prototype.load = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files.push(file);
            this.fileName = file.fileName;
        }
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            if (JSON.parse(event.xhr.response).success == false) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: JSON.parse(event.xhr.response).errorMsg });
                return;
            }
            else {
                for (var _b = 0, _c = JSON.parse(event.xhr.response); _b < _c.length; _b++) {
                    var i = _c[_b];
                    this.marketingContentFiles.push(i);
                }
                this.updateQueryPlanBean.fileList = lodash__WEBPACK_IMPORTED_MODULE_8__["clone"](this.marketingContentFiles);
                this.msgs = [];
                this.msgs.push({ severity: 'success', summary: '提示', detail: '上传成功！' });
            }
        }
    };
    //提交
    UpdateQueryPlanComponent.prototype.modifySaveBtn = function () {
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
        //提交服务
        this.cusOperationHttpService.updateMarketingProgram(this.updateQueryPlanBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.outValue.emit(false);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败" });
        });
    };
    //取消
    UpdateQueryPlanComponent.prototype.modifyCloseBtn = function () {
        this.outValue.emit(false);
    };
    //下载按钮
    UpdateQueryPlanComponent.prototype.down = function (temp) {
        var name = temp.fileName;
        var path = temp.fileUrl;
        open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(name) + "&fileUrl=" + path);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UpdateQueryPlanComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UpdateQueryPlanComponent.prototype, "outValue", void 0);
    UpdateQueryPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'update-query-plan',
            template: __webpack_require__(/*! ./update-query-plan.component.html */ "./src/app/pages/tzb/custom/marketing/marketing-project/update-query-plan/update-query-plan.component.html"),
            styles: [__webpack_require__(/*! ./update-query-plan.component.scss */ "./src/app/pages/tzb/custom/marketing/marketing-project/update-query-plan/update-query-plan.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], UpdateQueryPlanComponent);
    return UpdateQueryPlanComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~marketing-project-marketing-project-module~routing-marking-marking-module.js.map