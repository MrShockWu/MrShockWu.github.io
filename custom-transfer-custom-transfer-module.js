(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-transfer-custom-transfer-module"],{

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/account-manager.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/account-manager.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n\t<div class=\"ui-g-12 functions\">\r\n\t\t<a [routerLink]=\"[ '/pages/tzb/custom/custom-marketing/cus-transfer/account-manager/custom-mind-transfer']\" class=\"change\"\r\n\t\t    [ngClass]=\"{'active':show==1}\" (click)=\"apply(1)\" *ngIf=\"permissionCheck('SID01004_P009')\">我要转让</a>\r\n\t\t<a [routerLink]=\"[ '/pages/tzb/custom/custom-marketing/cus-transfer/account-manager/custom-batch-transfer']\" class=\"change\"\r\n\t\t    [ngClass]=\"{'active':show==2}\" (click)=\"apply(2)\" *ngIf=\"permissionCheck('SID01004_P010')\">客户批量转让</a>\r\n\t\t<a [routerLink]=\"[ '/pages/tzb/custom/custom-marketing/cus-transfer/account-manager/custom-me-transfer']\" class=\"change\" [ngClass]=\"{'active':show==3}\"\r\n\t\t    (click)=\"apply(3)\" *ngIf=\"permissionCheck('SID01004_P011')\">我的转让</a>\r\n\t\t<a [routerLink]=\"[ '/pages/tzb/custom/custom-marketing/cus-transfer/account-manager/custom-wait-transfer']\" class=\"change\"\r\n\t\t    [ngClass]=\"{'active':show==4}\" (click)=\"apply(4)\" *ngIf=\"permissionCheck('SID01004_P012')\">待审批转让<span class=\"span-name\">({{totalNum}})</span></a>\r\n\t\t<a [routerLink]=\"[ '/pages/tzb/custom/custom-marketing/cus-transfer/account-manager/custom-already-transfer']\" class=\"change\"\r\n\t\t    [ngClass]=\"{'active':show==5}\" (click)=\"apply(5)\" *ngIf=\"permissionCheck('SID01004_P013')\">已审批转让</a>\r\n\t</div>\r\n</div>\r\n<div class=\"ui-g-12 module padding-one bgcolor\">\r\n\t<router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/account-manager.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/account-manager.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .functions {\n  background: #e7eaec;\n  padding-bottom: 0; }\n  .ui-g .functions .prim {\n    display: inline-block;\n    width: 200px;\n    height: 50px;\n    line-height: 50px;\n    text-align: center;\n    border-radius: 3px;\n    color: #aaaaaa; }\n  .ui-g .user .account {\n  display: inline-block;\n  width: 80px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  color: #fff; }\n  .ui-g .user .branch {\n  display: inline-block;\n  width: 80px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  color: #fff; }\n  .span-name {\n  color: red; }\n  .functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0; }\n  .functions .change {\n    display: inline-block;\n    font-size: 15px;\n    height: 40px;\n    line-height: 40px;\n    border-radius: 3px 3px 0 0;\n    color: #929292;\n    padding: 0px 30px;\n    font-weight: bold; }\n  .active {\n  border: none !important;\n  background-color: #f7f7f7 !important;\n  color: #003f5c !important; }\n  .padding-one {\n  padding: 1em; }\n  .bgcolor {\n  background: #f7f7f7; }\n  @media screen and (max-width: 1280px) {\n  .functions {\n    border-bottom: 1px solid #dddddd; }\n  .active {\n    background-color: #e5e6e9 !important; }\n  .bgcolor {\n    background: #e5e6e9; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS10cmFuc2Zlci9hY2NvdW50LW1hbmFnZXIvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tbWFya2V0aW5nXFxjdXN0b20tdHJhbnNmZXJcXGFjY291bnQtbWFuYWdlclxcYWNjb3VudC1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBO0VBSHpCO0lBS1kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYyxFQUFBO0VBWDFCO0VBZ0JZLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0VBckJ2QjtFQXdCWSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTtFQWF2QjtFQUNJLFVBQVUsRUFBQTtFQUlkO0VBQ0ksZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7RUFIbkI7SUFLUSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7RUFJekI7RUFDSSx1QkFBdUI7RUFDdkIsb0NBQW9DO0VBQ3BDLHlCQUF5QixFQUFBO0VBRzdCO0VBQ0ksWUFBWSxFQUFBO0VBR2hCO0VBQ0ksbUJBQW1CLEVBQUE7RUFFdkI7RUFDSTtJQUNJLGdDQUFnQyxFQUFBO0VBRXBDO0lBQ0ksb0NBQW9DLEVBQUE7RUFFeEM7SUFDSSxtQkFBbUIsRUFBQSxFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLW1hcmtldGluZy9jdXN0b20tdHJhbnNmZXIvYWNjb3VudC1tYW5hZ2VyL2FjY291bnQtbWFuYWdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1nIHtcclxuICAgIC5mdW5jdGlvbnMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlN2VhZWM7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgLnByaW0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYWFhYWFhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51c2VyIHtcclxuICAgICAgICAuYWNjb3VudCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5icmFuY2gge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gLmFjdGl2ZSB7XHJcbi8vICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbi8vICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gICAgIGNvbG9yOiAjMDczNzRkICFpbXBvcnRhbnQ7XHJcbi8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZWFlYyAhaW1wb3J0YW50O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XHJcbi8vIH1cclxuLnNwYW4tbmFtZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4vLyDliIfmjaJcclxuLmZ1bmN0aW9ucyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlZjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgLmNoYW5nZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XHJcbiAgICAgICAgY29sb3I6ICM5MjkyOTI7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwM2Y1YyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFkZGluZy1vbmUge1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcblxyXG4uYmdjb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAuZnVuY3Rpb25zIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU2ZTkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5iZ2NvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTVlNmU5O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/account-manager.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/account-manager.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AccountManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountManager", function() { return AccountManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountManager = /** @class */ (function () {
    function AccountManager(httpService, commfunc, router) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        // show: number;
        this.nav1 = true;
        this.nav2 = false;
        this.nav3 = false;
        this.totalNum = 0;
        this.flag = false;
    }
    AccountManager.prototype.ngOnInit = function () {
        var stu_1 = this.commfunc.permissionCheck('SID01004_P009');
        var stu_2 = this.commfunc.permissionCheck('SID01004_P010');
        var stu_3 = this.commfunc.permissionCheck('SID01004_P011');
        var stu_4 = this.commfunc.permissionCheck('SID01004_P012');
        var stu_5 = this.commfunc.permissionCheck('SID01004_P013');
        if (stu_1) {
            this.show = 1;
            this.router.navigate(['/pages/tzb/custom/custom-marketing/cus-transfer/account-manager/custom-mind-transfer']);
        }
        else if (stu_2) {
            this.show = 2;
            this.router.navigate(['/pages/tzb/custom/custom-marketing/cus-transfer/account-manager/custom-batch-transfer']);
        }
        else if (stu_3) {
            this.show = 3;
            this.router.navigate(['/pages/tzb/custom/custom-marketing/cus-transfer/account-manager/custom-me-transfer']);
        }
        else if (stu_4) {
            this.show = 4;
            this.router.navigate(['/pages/tzb/custom/custom-marketing/cus-transfer/account-manager/custom-wait-transfer']);
        }
        else if (stu_5) {
            this.show = 5;
            this.router.navigate(['/pages/tzb/custom/custom-marketing/cus-transfer/account-manager/custom-already-transfer']);
        }
        this.doQuery();
    };
    AccountManager.prototype.apply = function (num) {
        this.show = num;
    };
    //查询
    AccountManager.prototype.doQuery = function () {
        var _this = this;
        var param = {
            pageSize: 10,
            pageNum: 1,
            operationType: '3',
            taskCategoryId: '278000',
            isAppr: '0',
        };
        this.httpService.queryWaitApprApplyFor(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.totalNum = data.total;
            }
            else {
            }
        }, function (error) {
        });
    };
    //按钮权限
    AccountManager.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    AccountManager = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'account-manager',
            template: __webpack_require__(/*! ./account-manager.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/account-manager.component.html"),
            styles: [__webpack_require__(/*! ./account-manager.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/account-manager.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AccountManager);
    return AccountManager;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-already-transfer/bean/customAlreadyTransfer.bean.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-already-transfer/bean/customAlreadyTransfer.bean.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: CustomAlreadyTransfer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAlreadyTransfer", function() { return CustomAlreadyTransfer; });
var CustomAlreadyTransfer = /** @class */ (function () {
    function CustomAlreadyTransfer() {
    }
    return CustomAlreadyTransfer;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-already-transfer/custom-already-transfer.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-already-transfer/custom-already-transfer.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g padding-zero module\">\r\n  <div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'已审批转让搜索条件'\"></header-title>\r\n  </div>\r\n  <div class=\"ui-g-12 contactCsstop\">\r\n    <div class=\"ui-g-2 text-right\">\r\n      <label>客户号：</label>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <input type=\"text\" class=\"transfer-already-i\" pInputText [(ngModel)]=\"customAlreadyTransfer.custNo\">\r\n    </div>\r\n    <div class=\"ui-g-2 text-right\">\r\n      <label>客户姓名：</label>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <input type=\"text\" class=\"transfer-already-i\" pInputText [(ngModel)]=\"customAlreadyTransfer.custName\">\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 contactCss\">\r\n    <div class=\"ui-g-2 text-right\">\r\n      <label>审批状态：</label>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <p-dropdown [options]=\"isStatus\" class=\"transfer-already-p\" ng-value=\"请选择\" [(ngModel)]=\"customAlreadyTransfer.stu\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-2 text-right\">\r\n      <label>转让申请时间：</label>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <p-calendar class=\"transfer-already-calendar\" [(ngModel)]=\"startDate\" [maxDate]=\"endDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n        [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showDataStart()\"></p-calendar>\r\n      至\r\n      <p-calendar class=\"transfer-already-calendar\" [(ngModel)]=\"endDate\" [minDate]=\"startDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n        [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showDataEnd()\"></p-calendar>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" (click)=\"querySecle()\" label=\"查询\"></button>\r\n    <button pButton type=\"button\" (click)=\"resetBtn()\" label=\"重置\"></button>\r\n  </div>\r\n  <div class=\"ui-g-12 query\">\r\n    <header-title [Info]=\"'已审批转让查询结果'\"></header-title>\r\n  </div>\r\n  <div class=\"ui-g-12 table base-table\">\r\n    <p-dataTable [value]=\"tableData\" [emptyMessage]=\"tabMesg\">\r\n      <p-column field=\"custNo\" header=\"客户号\">\r\n        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          <a href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}\" target=\"_blank\">{{col.custNo}}</a>\r\n          <!-- <a (click)=\"toCustView(col)\" style=\"cursor:pointer;\">{{col.custNo}}</a> -->\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"custName\" header=\"客户姓名\"></p-column>\r\n      <p-column field=\"ownerManagerName\" header=\"主联系人\"></p-column>\r\n      <p-column field=\"ownerOrgName\" header=\"所属机构\"></p-column>\r\n      <p-column field=\"createOrgName\" header=\"转让人所属机构\"></p-column>\r\n      <p-column field=\"createrName\" header=\"转让人姓名\"></p-column>\r\n      <p-column field=\"receiveOrgName\" header=\"受让人所属机构\"></p-column>\r\n      <p-column field=\"receiverName\" header=\"受让人姓名\"></p-column>\r\n      <p-column field=\"createDate\" header=\"转让时间\" hidden=\"true\"></p-column>\r\n      <p-column field=\"statusId\" header=\"审批状态\">\r\n        <ng-template let-car=\"rowData\" pTemplate=\"body\">\r\n          <span>{{car.statusId|codeValuePie:isStatus}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"apprDate\" header=\"审批结束时间\"></p-column>\r\n      <p-column field=\"\" header=\"操作\" *ngIf=\"permissionCheck('SID01004_P013_P001')\">\r\n        <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n          <span (click)=\"doDetail(col)\" class=\"tabelDetailIco\">查看详情</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n    <p-paginator rows=\"{{customAlreadyTransfer.pageSize}}\" [first]=\"first\" totalRecords=\"{{totalNum}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n      (onPageChange)=\"paginate($event)\"></p-paginator>\r\n  </div>\r\n</div>\r\n\r\n  <!-- 弹出框 -->\r\n  <p-dialog [(visible)]=\"display\" modal=\"modal\" class=\"already-transfer-f\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n      审批流程\r\n    </p-header>\r\n    <div>\r\n      <app-custom-batch-detail *ngIf=\"display\" [in-value]=\"inValue\" (outValue)=\"doDetailClose($event)\"></app-custom-batch-detail>\r\n    </div>\r\n  </p-dialog>\r\n\r\n  <!-- 提示信息 -->\r\n  <p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-already-transfer/custom-already-transfer.component.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-already-transfer/custom-already-transfer.component.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-right {\n  text-align: right; }\n\n.btn {\n  text-align: center; }\n\n.table {\n  text-align: center; }\n\n.contactCss {\n  margin-top: -14px; }\n\n.contactCsstop {\n  margin-top: 10px; }\n\na {\n  color: #0094D2; }\n\n.transfer-already-i {\n  width: 50% !important;\n  min-width: 284px !important; }\n\n:host /deep/ .already-transfer-f .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .already-transfer-f .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n:host/deep/ .transfer-already-calendar .ui-calendar {\n  width: 23.2%; }\n\n:host /deep/ .transfer-already-p .ui-dropdown {\n  width: 50% !important;\n  min-width: 284px !important; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .transfer-already-calendar .ui-calendar {\n    width: 30%; }\n  :host /deep/ .transfer-already-p .ui-dropdown {\n    width: 76% !important; }\n  .transfer-already-i {\n    width: 76% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS10cmFuc2Zlci9hY2NvdW50LW1hbmFnZXIvY3VzdG9tLWFscmVhZHktdHJhbnNmZXIvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tbWFya2V0aW5nXFxjdXN0b20tdHJhbnNmZXJcXGFjY291bnQtbWFuYWdlclxcY3VzdG9tLWFscmVhZHktdHJhbnNmZXJcXGN1c3RvbS1hbHJlYWR5LXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLHFCQUFxQjtFQUNyQiwyQkFBMkIsRUFBQTs7QUFJaEM7RUFDSSx1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksV0FBVyxFQUFBOztBQUlkO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLHFCQUFxQjtFQUNyQiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFFSztJQUNHLFVBQVUsRUFBQTtFQUViO0lBQ0cscUJBQXFCLEVBQUE7RUFFekI7SUFDSSxxQkFBcUIsRUFBQSxFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLW1hcmtldGluZy9jdXN0b20tdHJhbnNmZXIvYWNjb3VudC1tYW5hZ2VyL2N1c3RvbS1hbHJlYWR5LXRyYW5zZmVyL2N1c3RvbS1hbHJlYWR5LXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC50ZXh0LXJpZ2h0IHtcclxuICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuIH1cclxuXHJcbiAuYnRuIHtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcblxyXG4gLnRhYmxlIHtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcblxyXG4gLmNvbnRhY3RDc3Mge1xyXG4gICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG4gfVxyXG5cclxuIC5jb250YWN0Q3NzdG9wIHtcclxuICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gfVxyXG5cclxuIGEge1xyXG4gICAgIGNvbG9yOiAjMDA5NEQyO1xyXG4gfVxyXG5cclxuIC50cmFuc2Zlci1hbHJlYWR5LWkge1xyXG4gICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICBtaW4td2lkdGg6IDI4NHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gLy/mqKHmgIHmoYZcclxuOmhvc3QgL2RlZXAvIC5hbHJlYWR5LXRyYW5zZmVyLWYgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0L2RlZXAvIC5hbHJlYWR5LXRyYW5zZmVyLWYgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuIC8vIOafpeivouiMg+WbtCDml6XmnJ/nu4Tku7ZcclxuIDpob3N0L2RlZXAvIC50cmFuc2Zlci1hbHJlYWR5LWNhbGVuZGFyIC51aS1jYWxlbmRhciB7XHJcbiAgICAgd2lkdGg6IDIzLjIlO1xyXG4gfVxyXG5cclxuIDpob3N0IC9kZWVwLyAudHJhbnNmZXItYWxyZWFkeS1wIC51aS1kcm9wZG93biB7XHJcbiAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgIG1pbi13aWR0aDogMjg0cHggIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgIC8vIOafpeivouiMg+WbtCDml6XmnJ/nu4Tku7ZcclxuICAgICAgOmhvc3QvZGVlcC8gLnRyYW5zZmVyLWFscmVhZHktY2FsZW5kYXIgLnVpLWNhbGVuZGFyIHtcclxuICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICB9XHJcbiAgICAgIDpob3N0IC9kZWVwLyAudHJhbnNmZXItYWxyZWFkeS1wIC51aS1kcm9wZG93biB7XHJcbiAgICAgICAgIHdpZHRoOiA3NiUgIWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgICAgLnRyYW5zZmVyLWFscmVhZHktaSB7XHJcbiAgICAgICAgIHdpZHRoOiA3NiUgIWltcG9ydGFudDtcclxuICAgICB9XHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-already-transfer/custom-already-transfer.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-already-transfer/custom-already-transfer.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: CustomAlreadyTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAlreadyTransferComponent", function() { return CustomAlreadyTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_customAlreadyTransfer_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/customAlreadyTransfer.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-already-transfer/bean/customAlreadyTransfer.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { TransferStaus,} from '../../../../constant/custOperation.codeValue';




var CustomAlreadyTransferComponent = /** @class */ (function () {
    function CustomAlreadyTransferComponent(httpService, commfunc, router) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //表格中无数据时显示的内容
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        this.customAlreadyTransfer = new _bean_customAlreadyTransfer_bean__WEBPACK_IMPORTED_MODULE_1__["CustomAlreadyTransfer"]();
        this.first = 0; //分页控制
        this.totalNum = 0;
        this.tableData = [];
        this.msgs = []; //提示信息
        this.transferStaus = []; //是都有信用卡管道
        this.startDate = null;
        this.endDate = null;
        this.isStatus = [];
        this.orgId = '';
        this.userId = '';
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.transferStaus = this.code['TransferStaus'];
        this.isStatus = this.code['IsStatusTransferAlready'];
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
    }
    CustomAlreadyTransferComponent.prototype.ngOnInit = function () {
        this.customAlreadyTransfer.pageSize = 10;
        this.customAlreadyTransfer.pageNum = 1;
    };
    //码值
    CustomAlreadyTransferComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //点击查询-初始化
    CustomAlreadyTransferComponent.prototype.querySecle = function () {
        this.customAlreadyTransfer.pageSize = 10;
        this.customAlreadyTransfer.pageNum = 1;
        this.first = 0;
        this.searchBtn();
    };
    // 已转让 查询
    CustomAlreadyTransferComponent.prototype.searchBtn = function () {
        var _this = this;
        //校验客户号
        if (this.customAlreadyTransfer.custNo == '') {
            this.customAlreadyTransfer.custNo = undefined;
        }
        var reg = /^[0-9]*$/;
        if (this.customAlreadyTransfer.custNo != undefined) {
            if (this.customAlreadyTransfer.custNo != '') {
                if (!reg.test(this.customAlreadyTransfer.custNo)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入正确客户号！' });
                    return;
                }
            }
        }
        //校验客户姓名
        if (this.customAlreadyTransfer.custName == '') {
            this.customAlreadyTransfer.custName = undefined;
            this.customAlreadyTransfer.custName_LIKE = undefined;
        }
        var reg1 = /^[\u4e00-\u9fa5]{0,}$/;
        if (this.customAlreadyTransfer.custName != undefined) {
            if (this.customAlreadyTransfer.custName != '') {
                if (!reg1.test(this.customAlreadyTransfer.custName)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入正确客户姓名！' });
                    return;
                }
            }
        }
        //客户姓名有值赋值
        if (this.customAlreadyTransfer.custName != undefined) {
            this.customAlreadyTransfer.custName_LIKE = '%' + this.customAlreadyTransfer.custName + '%';
        }
        //审批状态
        if (!this.customAlreadyTransfer.stu) {
            var arr = [];
            arr.push('0');
            arr.push('1');
            this.customAlreadyTransfer.statusId_IN = arr;
        }
        else {
            if (this.customAlreadyTransfer.stu == '0') {
                var arr = [];
                arr.push('0');
                this.customAlreadyTransfer.statusId_IN = arr;
            }
            else {
                var arr = [];
                arr.push('1');
                this.customAlreadyTransfer.statusId_IN = arr;
            }
        }
        this.customAlreadyTransfer.taskCategoryId = '278000';
        this.customAlreadyTransfer.operationType = '3';
        this.customAlreadyTransfer.isAppr = '1'; //已审批
        this.customAlreadyTransfer.createDate_GE = this.commfunc.transDateN(this.startDate);
        this.customAlreadyTransfer.createDate_LE = this.commfunc.transDateN(this.endDate);
        this.httpService.queryWaitApprApplyFor(this.customAlreadyTransfer).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.resultList;
                _this.totalNum = data.total;
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    // 重置
    CustomAlreadyTransferComponent.prototype.resetBtn = function () {
        this.customAlreadyTransfer = new _bean_customAlreadyTransfer_bean__WEBPACK_IMPORTED_MODULE_1__["CustomAlreadyTransfer"]();
        this.customAlreadyTransfer.pageSize = 10;
        this.customAlreadyTransfer.pageNum = 1;
        this.startDate = null;
        this.endDate = null;
        this.first = 0;
    };
    //点击客户号跳转360视图
    CustomAlreadyTransferComponent.prototype.toCustView = function (data) {
        this.commfunc.setSessionData('custNo', data.custNo);
        this.router.navigate(['pages/custom-view']);
    };
    //计划联系时间：开始日期
    CustomAlreadyTransferComponent.prototype.showDataStart = function () {
        var _this = this;
        if (this.startDate && this.endDate) {
            if (this.startDate > this.endDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.startDate = null;
                });
            }
        }
    };
    //计划联系时间：结束日期
    CustomAlreadyTransferComponent.prototype.showDataEnd = function () {
        var _this = this;
        if (this.startDate && this.endDate) {
            if (this.startDate > this.endDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.endDate = null;
                });
            }
        }
    };
    //分页
    CustomAlreadyTransferComponent.prototype.paginate = function (event) {
        this.customAlreadyTransfer.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.customAlreadyTransfer.pageNum = currentPage;
        this.first = (currentPage - 1) * this.customAlreadyTransfer.pageSize;
        this.searchBtn();
    };
    //查看详情
    CustomAlreadyTransferComponent.prototype.doDetail = function (data) {
        this.display = true;
        this.inValue = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](data.batchNo);
        this.headerTitle = '查看详情';
    };
    //查看详情关闭
    CustomAlreadyTransferComponent.prototype.doDetailClose = function () {
        this.display = false;
    };
    //按钮权限
    CustomAlreadyTransferComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomAlreadyTransferComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    CustomAlreadyTransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-already-transfer',
            template: __webpack_require__(/*! ./custom-already-transfer.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-already-transfer/custom-already-transfer.component.html"),
            styles: [__webpack_require__(/*! ./custom-already-transfer.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-already-transfer/custom-already-transfer.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CustomAlreadyTransferComponent);
    return CustomAlreadyTransferComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/bean/custom-batch.bean.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/bean/custom-batch.bean.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: CustomBatchBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomBatchBean", function() { return CustomBatchBean; });
var CustomBatchBean = /** @class */ (function () {
    function CustomBatchBean() {
    }
    return CustomBatchBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/bean/customBatchTransfer.bean.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/bean/customBatchTransfer.bean.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: CustomBatchTransferBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomBatchTransferBean", function() { return CustomBatchTransferBean; });
var CustomBatchTransferBean = /** @class */ (function () {
    function CustomBatchTransferBean() {
    }
    return CustomBatchTransferBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-detail/custom-batch-detail.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-detail/custom-batch-detail.component.html ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable [value]=\"chooseData\" [emptyMessage]=\"tabMesg\">\r\n      <p-column field=\"scheduleId\" header=\"代办编号\"></p-column>\r\n      <p-column field=\"scheduleName\" header=\"任务名称\"></p-column>\r\n      <p-column field=\"actualCompletionDate\" header=\"实际结束日期\"></p-column>\r\n      <p-column field=\"receiverName\" header=\"任务接收人名称\"[style]=\"{'width':'150px'}\"></p-column>\r\n      <p-column field=\"statusId\" header=\"状态\">\r\n        <ng-template let-car=\"rowData\" pTemplate=\"body\">\r\n          <span>{{car.statusId|codeValuePie:isStatus}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"createdStamp\" header=\"创建时间\"></p-column>\r\n      <p-column field=\"lastUpdatedStamp\" header=\"最后修改时间\"></p-column>\r\n    </p-dataTable>\r\n  </div>\r\n  <div class=\"ui-g-12 btn\">\r\n    <button type=\"text\" pButton class=\"ui-button-primary\" label=\"返回\" (click)='close()'></button>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-detail/custom-batch-detail.component.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-detail/custom-batch-detail.component.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  overflow: auto;\n  max-height: 700px;\n  text-align: center; }\n\n.btn {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS10cmFuc2Zlci9hY2NvdW50LW1hbmFnZXIvY3VzdG9tLWJhdGNoLXRyYW5zZmVyL2N1c3RvbS1iYXRjaC1kZXRhaWwvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tbWFya2V0aW5nXFxjdXN0b20tdHJhbnNmZXJcXGFjY291bnQtbWFuYWdlclxcY3VzdG9tLWJhdGNoLXRyYW5zZmVyXFxjdXN0b20tYmF0Y2gtZGV0YWlsXFxjdXN0b20tYmF0Y2gtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLW1hcmtldGluZy9jdXN0b20tdHJhbnNmZXIvYWNjb3VudC1tYW5hZ2VyL2N1c3RvbS1iYXRjaC10cmFuc2Zlci9jdXN0b20tYmF0Y2gtZGV0YWlsL2N1c3RvbS1iYXRjaC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDcwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idG57XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-detail/custom-batch-detail.component.ts":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-detail/custom-batch-detail.component.ts ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: CustomBatchDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomBatchDetailComponent", function() { return CustomBatchDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
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



// import { IsStatusTransfer } from "app/pages/tzb/custom/constant/custOperation.codeValue";
var CustomBatchDetailComponent = /** @class */ (function () {
    function CustomBatchDetailComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tablelist = [];
        this.totalNum = 0;
        this.msgs = [];
        this.param = {};
        this.isStatus = [];
        this.chooseData = [];
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.isStatus = this.code['IsStatusTransfer'];
    }
    CustomBatchDetailComponent.prototype.ngOnChanges = function () {
        if (this.inValue) {
            this.param = { businessId: this.inValue };
            this.doQuery();
        }
    };
    //码值
    CustomBatchDetailComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CustomBatchDetailComponent.prototype.doQuery = function () {
        var _this = this;
        this.httpService.qryProcessByBusId(this.param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tablelist = data.recordList;
                if (_this.tablelist) {
                    if (_this.tablelist.length > 0) {
                        _this.tablelist.forEach(function (element, index) {
                            if (element.statusId == null) {
                                _this.tablelist[index].statusId = '00';
                            }
                        });
                    }
                }
                _this.chooseData = _this.tablelist;
                _this.totalNum = data.totalNum;
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    //关闭
    CustomBatchDetailComponent.prototype.close = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomBatchDetailComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('in-value'),
        __metadata("design:type", Object)
    ], CustomBatchDetailComponent.prototype, "inValue", void 0);
    CustomBatchDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-batch-detail',
            template: __webpack_require__(/*! ./custom-batch-detail.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-detail/custom-batch-detail.component.html"),
            styles: [__webpack_require__(/*! ./custom-batch-detail.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-detail/custom-batch-detail.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], CustomBatchDetailComponent);
    return CustomBatchDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-transfer.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-transfer.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g padding-zero module\">\r\n  <div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'客户查询条件'\"></header-title>\r\n  </div>\r\n  <!-- 查询范围 -->\r\n  <div class=\"ui-g-12 padd-s\">\r\n    <div class=\"ui-g-12\">\r\n      <p-radioButton name=\"custType\" label=\"名单导入\" value=\"1\" [(ngModel)]=\"custType\" (click)=\"changeCustType('1')\" *ngIf=\"permissionCheck('SID01004_P010_P001')\"></p-radioButton>\r\n      <p-radioButton name=\"custType\" label=\"按存款日均筛选\" value=\"2\" [(ngModel)]=\"custType\" (click)=\"changeCustType('2')\" *ngIf=\"permissionCheck('SID01004_P010_P002')\"></p-radioButton>\r\n      <p-radioButton name=\"custType\" label=\"按贷款日均筛选\" value=\"3\" [(ngModel)]=\"custType\" (click)=\"changeCustType('3')\" *ngIf=\"permissionCheck('SID01004_P010_P003')\"></p-radioButton>\r\n      <p-radioButton name=\"custType\" label=\"按信用卡筛选\" value=\"4\" [(ngModel)]=\"custType\" (click)=\"changeCustType('4')\" *ngIf=\"permissionCheck('SID01004_P010_P004')\"></p-radioButton>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- 按名单导入查询 -->\r\n  <div class=\"ui-g-12 padd-s\" *ngIf=\"Property1\">\r\n    <div class=\"ui-g-12\">\r\n      <strong>(Ecxel导入)</strong>\r\n      <br/>\r\n      <p-fileUpload name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"load($event)\" multiple=\"multiple\" chooseLabel=\"浏览\" uploadLabel=\"上传\"\r\n        cancelLabel=\"取消\">\r\n      </p-fileUpload>\r\n      <div *ngIf=\"files.length>0\">\r\n        <span *ngFor=\"let item of files\">{{item.name}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\" *ngIf=\"Propertym\">\r\n      <p-dataTable [value]=\"tablelist\" [emptyMessage]=\"tabMesg\">\r\n        <p-column field=\"custNo\" header=\"客户号\">\r\n          <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <a href=\"/#/pages/custom-view?custNo={{col.custNo}}\" target=\"_blank\">{{col.custNo}}</a>\r\n            <!-- <a (click)=\"toCustView(col)\" style=\"cursor:pointer;\">{{col.custNo}}</a> -->\r\n          </ng-template>\r\n          <!-- <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          <a (click)=\"toCustView(col)\" style=\"cursor:pointer;\">{{col.custNo}}</a>\r\n        </ng-template> -->\r\n        </p-column>\r\n        <p-column field=\"custName\" header=\"客户姓名\"></p-column>\r\n        <p-column field=\"idenType\" header=\"证件类型\">\r\n          <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            {{col.idenType|codeValuePie:cert_type}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"idenNum\" header=\"证件号码\">\r\n          <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n            <span class=\"name\">{{car.idenNum}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"tel\" header=\"手机号码\">\r\n          <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n            <span class=\"name\">{{car.tel}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"ownerManagerName\" header=\"主联系人\"></p-column>\r\n        <p-column field=\"balDlyAvgByYear\" header=\"存款日均(本年)\"></p-column>\r\n        <p-column field=\"loanDlyAvgByYear\" header=\"贷款日均(本年)\"></p-column>\r\n        <p-column field=\"isHoldCrdCard\" header=\"当前是否持有信用卡\">\r\n          <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            {{col.isHoldCrdCard|codeValuePie:isHoldCrdCard}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"finBal\" header=\"理财余额\"></p-column>\r\n      </p-dataTable>\r\n      <p-paginator rows=\"{{customBatchBean.pageSize}}\" [first]=\"first1\" totalRecords=\"{{totalNum}}\" (onPageChange)=\"paginate($event,'customBatchBean')\"\r\n        [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n    </div>\r\n    <div class=\"ui-g-12 btn-center\" *ngIf=\"Propertym\">\r\n      <button pButton type=\"button\" label=\"转让\" (click)=\"doAllotImport()\"></button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- 按存款日均筛选 -->\r\n  <div class=\"ui-g-12 padd-s\" *ngIf=\"Property2\">\r\n    <div class=\"ui-g-12 text-left\">\r\n      <label>存款日均(本年)：</label>\r\n    <!-- </div>\r\n    <div class=\"ui-g-4\"> -->\r\n      <input type=\"text\" pInputText [(ngModel)]=\"customBatchTransferBean.balDlyAvgByYearStart\">至\r\n      <input type=\"text\" pInputText [(ngModel)]=\"customBatchTransferBean.balDlyAvgByYearEnd\">元\r\n    </div>\r\n  </div>\r\n\r\n  <!-- 按贷款日均筛选 -->\r\n  <div class=\"ui-g-12 padd-s\" *ngIf=\"Property3\">\r\n    <div class=\"ui-g-12 text-left\">\r\n      <label>贷款日均(本年)：</label>\r\n    <!-- </div>\r\n    <div class=\"ui-g-4\"> -->\r\n      <input type=\"text\" pInputText [(ngModel)]=\"customBatchTransferBean.loanDlyAvgByYearStart\">至\r\n      <input type=\"text\" pInputText [(ngModel)]=\"customBatchTransferBean.loanDlyAvgByYearEnd\">元\r\n    </div>\r\n  </div>\r\n\r\n  <!-- 按信用卡筛选 -->\r\n  <div class=\"ui-g-12 padd-s\" *ngIf=\"Property4\">\r\n    <div class=\"ui-g-12 text-left\">\r\n      <label>当前是否持有信用卡(是/否)：</label>\r\n      <p-radioButton name=\"isHoldCrdCard\" label=\"是\" value=\"0\" [(ngModel)]=\"customBatchTransferBean.isHoldCrdCard\"></p-radioButton>\r\n      <p-radioButton name=\"isHoldCrdCard\" label=\"否\" value=\"1\" [(ngModel)]=\"customBatchTransferBean.isHoldCrdCard\"></p-radioButton>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 btn\" *ngIf=\"!Property1\">\r\n    <button type=\"text\" pButton class=\"ui-button-primary\" label=\"查询\" (click)='querySecle()'></button>\r\n    <button type=\"text\" pButton class=\"ui-button-primary\" label=\"重置\" (click)='doReset()'></button>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\" *ngIf=\"!Property1\">\r\n    <header-title [Info]=\"'客户查询结果'\"></header-title>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 table base-table\" *ngIf=\"!Property1\">\r\n      <p-dataTable [value]=\"tablelist\" [emptyMessage]=\"tabMesg\">\r\n        <p-column>\r\n          <ng-template let-index=\"rowIndex\" pTemplate=\"header\">\r\n            <p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkAll\" binary=\"false\" (click)=\"checkAllClick($event)\"></p-checkbox>\r\n          </ng-template>\r\n          <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <p-checkbox [(ngModel)]=\"col.checkBox\" (click)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"custNo\" header=\"客户号\">\r\n          <!-- <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          <a (click)=\"toCustView(col)\" style=\"cursor:pointer;\">{{col.custNo}}</a>\r\n        </ng-template> -->\r\n          <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <a href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}\" target=\"_blank\">{{col.custNo}}</a>\r\n            <!-- <a (click)=\"toCustView(col)\" style=\"cursor:pointer;\">{{col.custNo}}</a> -->\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"custName\" header=\"客户姓名\"></p-column>\r\n        <p-column field=\"idenType\" header=\"证件类型\">\r\n          <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            {{col.idenType|codeValuePie:cert_type}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"idenNum\" header=\"证件号码\">\r\n          <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n            <span class=\"name\">{{car.idenNum}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"tel\" header=\"手机号码\">\r\n          <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n            <span class=\"name\">{{car.tel}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"ownerManagerName\" header=\"主联系人\"></p-column>\r\n        <p-column field=\"balDlyAvgByYear\" header=\"存款日均(本年)\"></p-column>\r\n        <p-column field=\"loanDlyAvgByYear\" header=\"贷款日均(本年)\"></p-column>\r\n        <p-column field=\"isHoldCrdCard\" header=\"当前是否持有信用卡\">\r\n          <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            {{col.isHoldCrdCard|codeValuePie:isHoldCrdCard}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"finBal\" header=\"理财余额\"></p-column>\r\n      </p-dataTable>\r\n      <p-paginator rows=\"{{customBatchTransferBean.pageSize}}\" [first]=\"first2\" totalRecords=\"{{totalNum}}\" (onPageChange)=\"paginate($event,'other')\"\r\n        [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 tip-s\" *ngIf=\"Property1\">\r\n      Excel文件格式说明：\r\n      <br> Excel文件中潜在客户号为必输项。\r\n      <br> Excel文件最大不能超过200行记录。\r\n      <br> 更多注意事项请查看模板中的“填报说明”。\r\n      <br> 请先下载模板：\r\n      <a href=\"{{DOWNLOAD}}/?fileUrl=/copdata/moban/&fileName=customerManageTransfer.xls\">模板下载</a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 btn-center\" *ngIf=\"Property2&&permissionCheck('SID01004_P010_P002_P001')\">\r\n    <button pButton type=\"button\" label=\"转让\" (click)=\"doAllot('more')\"></button>\r\n  </div>\r\n  <div class=\"ui-g-12 btn-center\" *ngIf=\"Property3&&permissionCheck('SID01004_P010_P003_P001')\">\r\n    <button pButton type=\"button\" label=\"转让\" (click)=\"doAllot('more')\"></button>\r\n  </div>\r\n  <div class=\"ui-g-12 btn-center\" *ngIf=\"Property4&&permissionCheck('SID01004_P010_P004_P001')\">\r\n    <button pButton type=\"button\" label=\"转让\" (click)=\"doAllot('more')\"></button>\r\n  </div>\r\n</div>\r\n\r\n<!-- 弹出框 -->\r\n<!-- <p-dialog [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    客户转让\r\n  </p-header>\r\n  <div>\r\n    <app-custom-transfer-dialog [in-value]=\"inValue\" (outValue)=\"doMoreAllotCall($event)\"></app-custom-transfer-dialog>\r\n  </div>\r\n</p-dialog> -->\r\n\r\n<!-- 选择机构树的弹窗 -->\r\n<p-dialog *ngIf='orgdisplay' [(visible)]=\"orgdisplay\" modal=\"modal\" width=\"800\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div>\r\n    <org-tree-component (outValue)=\"treeCall($event)\"></org-tree-component>\r\n  </div>\r\n</p-dialog>\r\n\r\n<!-- 弹出框 -->\r\n<p-dialog [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 (onHide)=\"onHideClose()\">\r\n  <p-header>\r\n    管户关系调入\r\n  </p-header>\r\n  <div>\r\n    <app-custom-transfer-dialog *ngIf=\"display\" [in-value]=\"inValue\" (outValueBean)=\"addCallBean($event)\" (outValue)=\"doMoreAllotCall($event)\"></app-custom-transfer-dialog>\r\n  </div>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<p-dialog [(visible)]=\"aaaa\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    提交给\r\n  </p-header>\r\n  <app-examine-approval *ngIf=\"aaaa\" [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-transfer.component.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-transfer.component.scss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: #0094D2; }\n\n.text-right {\n  text-align: right; }\n\n.padd-s {\n  margin-top: 20px; }\n\n.text-left {\n  text-align: left; }\n\n.btn-center {\n  text-align: center; }\n\n.btn {\n  text-align: center; }\n\n.tip-s {\n  padding-top: 20px; }\n\n.radio-s {\n  padding-left: 5px; }\n\n.table {\n  text-align: center; }\n\n.name {\n  word-break: break-all; }\n\na {\n  color: #0094D2; }\n\ninput {\n  width: 15%; }\n\n@media screen and (max-width: 1280px) {\n  input {\n    width: 14%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS10cmFuc2Zlci9hY2NvdW50LW1hbmFnZXIvY3VzdG9tLWJhdGNoLXRyYW5zZmVyL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLW1hcmtldGluZ1xcY3VzdG9tLXRyYW5zZmVyXFxhY2NvdW50LW1hbmFnZXJcXGN1c3RvbS1iYXRjaC10cmFuc2ZlclxcY3VzdG9tLWJhdGNoLXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGNBQWUsRUFBQTs7QUFJbkI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFFSTtJQUNJLFVBQVUsRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS10cmFuc2Zlci9hY2NvdW50LW1hbmFnZXIvY3VzdG9tLWJhdGNoLXRyYW5zZmVyL2N1c3RvbS1iYXRjaC10cmFuc2Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgY29sb3I6ICMwMDk0RDI7XHJcbn1cclxuLnRleHQtcmlnaHR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4ucGFkZC1ze1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4udGV4dC1sZWZ0e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uYnRuLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50aXAtc3tcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5yYWRpby1ze1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLnRhYmxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbn1cclxuLm5hbWV7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiAjMDA5NEQyIDtcclxufVxyXG5cclxuLy8g5p+l6K+i6IyD5Zu0IOaXpeacn+e7hOS7tlxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogMTUlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgLy8g5p+l6K+i6IyD5Zu0IOaXpeacn+e7hOS7tlxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxNCU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-transfer.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-transfer.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: CustomBatchTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomBatchTransferComponent", function() { return CustomBatchTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_customBatchTransfer_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean/customBatchTransfer.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/bean/customBatchTransfer.bean.ts");
/* harmony import */ var _bean_custom_batch_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bean/custom-batch.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/bean/custom-batch.bean.ts");
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






// import { CERT_TYPE, IsHoldCrdCard } from "app/pages/tzb/custom/constant/custOperation.codeValue";


var CustomBatchTransferComponent = /** @class */ (function () {
    function CustomBatchTransferComponent(httpService, commfunc, router) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["tableMessage"]; //表格中无数据时显示的内容
        this.customBatchTransferBean = new _bean_customBatchTransfer_bean__WEBPACK_IMPORTED_MODULE_5__["CustomBatchTransferBean"]();
        this.customBatchBean = new _bean_custom_batch_bean__WEBPACK_IMPORTED_MODULE_6__["CustomBatchBean"]();
        this.first1 = 0; //分页控制
        this.first2 = 0; //分页控制
        this.tablelist = [];
        this.totalNum = 0;
        this.cert_type = [];
        this.isHoldCrdCard = [];
        this.checkAll = false;
        this.checkBox = [];
        this.chooseData = [];
        this.files = [];
        this.fileList = []; //上传文件列表
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_1__["TZB_CUS_DOWNLOAD"];
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_1__["TZB_CUS_UPLOADCQ"];
        this.msgs = []; //提示信息
        //模态框的标题
        this.headerTitle = "修改";
        //模态框是否显示
        this.display = false;
        this.orgdisplay = false;
        //显示哪项
        this.Property1 = true;
        this.Property2 = false;
        this.Property3 = false;
        this.Property4 = false;
        //名单导入
        this.Propertym = false;
        this.aaaa = false;
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.cert_type = this.code['CERT_TYPE'];
        this.isHoldCrdCard = this.code['IsHoldCrdCard'];
    }
    //初始化
    CustomBatchTransferComponent.prototype.ngOnInit = function () {
        //默认选中名单导入
        this.custType = '1';
        this.customBatchTransferBean.pageSize = 10;
        this.customBatchTransferBean.pageNum = 1;
        this.customBatchBean.pageSize = 10;
        this.customBatchBean.pageNum = 1;
        this.first1 = 0;
        this.first2 = 0;
    };
    //码值
    CustomBatchTransferComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //上传
    CustomBatchTransferComponent.prototype.load = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.Propertym = false;
            this.tablelist = [];
            this.files = [];
            this.files.push(file);
        }
        if (event.xhr.response) { //上传成功 后台返回的 文件路径 和文件名
            this.fileList = JSON.parse(event.xhr.response);
            if (this.fileList.success == false) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: this.fileList.message });
                this.files = [];
                return;
            }
        }
        if (this.fileList[0]) {
            this.customBatchBean.fileUrl = this.fileList[0].fileUrl;
            this.customBatchBean.fileName = this.fileList[0].fileName;
            this.doQueryList();
        }
    };
    //查询名单导入列表
    CustomBatchTransferComponent.prototype.doQueryList = function () {
        var _this = this;
        this.doClearCheck();
        this.httpService.transferCustBatchQry(this.customBatchBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.Propertym = true;
                _this.tablelist = data.batchFileImportInfo;
                _this.totalNum = data.totalNum;
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: '上传成功' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务异常' });
        });
    };
    //清除全选勾选框+单选框
    CustomBatchTransferComponent.prototype.doClearCheck = function () {
        this.chooseData = [];
        this.checkAll = false;
    };
    //查询初始化
    CustomBatchTransferComponent.prototype.querySecle = function () {
        this.customBatchTransferBean.pageSize = 10;
        this.customBatchTransferBean.pageNum = 1;
        this.first2 = 0;
        this.doQuery();
    };
    //查询
    CustomBatchTransferComponent.prototype.doQuery = function () {
        var _this = this;
        this.doClearCheck();
        //存款日均校验
        if (this.Property2) {
            var regBalDly = /^[0-9]{0,7}(\.[0-9]{0,7})?$/;
            if (this.customBatchTransferBean.balDlyAvgByYearStart) {
                if (!regBalDly.test(this.customBatchTransferBean.balDlyAvgByYearStart)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '开始存款日均值输入不正确' });
                    return;
                }
            }
            if (this.customBatchTransferBean.balDlyAvgByYearEnd) {
                if (!regBalDly.test(this.customBatchTransferBean.balDlyAvgByYearEnd)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '结束存款日均值输入不正确' });
                    return;
                }
            }
            //开始存款日均值不能大于结束存款日均值
            if (this.customBatchTransferBean.balDlyAvgByYearStart && this.customBatchTransferBean.balDlyAvgByYearEnd) {
                this.startNum = parseFloat(this.customBatchTransferBean.balDlyAvgByYearStart);
                this.endNum = parseFloat(this.customBatchTransferBean.balDlyAvgByYearEnd);
                if (this.startNum > this.endNum) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '开始存款日均值不能大于结束存款日均值' });
                    setTimeout(function () {
                        _this.customBatchTransferBean.balDlyAvgByYearEnd = '';
                    });
                    return;
                }
            }
        }
        //贷款日均校验
        if (this.Property3) {
            var regBalDly = /^[0-9]{0,7}(\.[0-9]{0,7})?$/;
            if (this.customBatchTransferBean.loanDlyAvgByYearStart) {
                if (!regBalDly.test(this.customBatchTransferBean.loanDlyAvgByYearStart)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '开始贷款日均值输入不正确' });
                    return;
                }
            }
            if (this.customBatchTransferBean.loanDlyAvgByYearEnd) {
                if (!regBalDly.test(this.customBatchTransferBean.loanDlyAvgByYearEnd)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '结束贷款日均值输入不正确！' });
                    return;
                }
            }
            //开始贷款日均值不能大于结束贷款日均值
            if (this.customBatchTransferBean.loanDlyAvgByYearStart && this.customBatchTransferBean.loanDlyAvgByYearEnd) {
                this.startNum = parseFloat(this.customBatchTransferBean.loanDlyAvgByYearStart);
                this.endNum = parseFloat(this.customBatchTransferBean.loanDlyAvgByYearEnd);
                if (this.startNum > this.endNum) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '开始贷款日均值不能大于结束贷款日均值' });
                    setTimeout(function () {
                        _this.customBatchTransferBean.loanDlyAvgByYearEnd = '';
                    });
                    return;
                }
            }
        }
        this.customBatchTransferBean.operationType = '3';
        this.httpService.distributeCustQry(this.customBatchTransferBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tablelist = data.custList;
                _this.totalNum = data.totalCount;
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    //重置
    CustomBatchTransferComponent.prototype.doReset = function () {
        this.customBatchTransferBean = new _bean_customBatchTransfer_bean__WEBPACK_IMPORTED_MODULE_5__["CustomBatchTransferBean"]();
        this.customBatchTransferBean.pageSize = 10;
        this.customBatchTransferBean.pageNum = 1;
        this.first2 = 0;
    };
    //更改查询条件
    CustomBatchTransferComponent.prototype.changeCustType = function (param) {
        this.totalNum = 0;
        this.doEmpty();
        this.doReset();
        if (param == '1') {
            this.Property1 = true;
            this.Propertym = false;
            this.display = false;
            if (this.files) {
                this.files = [];
            }
        }
        if (param == '2') {
            this.Property2 = true;
            this.tablelist = [];
        }
        if (param == '3') {
            this.Property3 = true;
            this.tablelist = [];
        }
        if (param == '4') {
            this.Property4 = true;
            this.tablelist = [];
        }
    };
    //清空
    CustomBatchTransferComponent.prototype.doEmpty = function () {
        this.Property1 = false;
        this.Property2 = false;
        this.Property3 = false;
        this.Property4 = false;
    };
    //全选按钮
    CustomBatchTransferComponent.prototype.checkAllClick = function () {
        if (this.tablelist) {
            for (var i = 0; i < this.tablelist.length; i++) {
                if (this.checkAll == true) {
                    this.tablelist[i].checkBox = true;
                    this.chooseData.push(this.tablelist[i]);
                }
                else {
                    this.chooseData = [];
                    this.tablelist[i].checkBox = false;
                }
            }
        }
    };
    //单选按钮
    CustomBatchTransferComponent.prototype.checkBoxClick = function (i, data) {
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
        if (this.chooseData.length == this.tablelist.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    };
    //转让-弹出框
    CustomBatchTransferComponent.prototype.tran = function () {
        this.headerTitle = '客户转让';
        this.display = true;
        this.showModel = '2';
        this.Invalue = 'zr';
    };
    //公共参数项
    CustomBatchTransferComponent.prototype.detail = function (item) {
        this.headerTitle = '客户批量申领';
        this.display = true;
        this.showModel = '1';
        this.detailValue = item;
    };
    CustomBatchTransferComponent.prototype.detailCall = function (param) {
        this.display = param;
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '提示', detail: '批量转让成功' });
    };
    //点击客户号跳转360视图
    CustomBatchTransferComponent.prototype.toCustView = function (data) {
        this.commfunc.setSessionData('custNo', data.custNo);
        this.router.navigate(['pages/custom-view']);
    };
    //分页
    CustomBatchTransferComponent.prototype.paginate = function (event, param) {
        //名单导入
        if (param == 'customBatchBean') {
            this.customBatchBean.pageSize = event.rows * 1;
            var currentPage = event.page + 1;
            this.customBatchBean.pageNum = currentPage;
            this.first1 = (currentPage - 1) * this.customBatchBean.pageSize;
            this.doQueryList();
        }
        //其他
        if (param == 'other') {
            this.customBatchTransferBean.pageSize = event.rows * 1;
            var currentPage = event.page + 1;
            this.customBatchTransferBean.pageNum = currentPage;
            this.first2 = (currentPage - 1) * this.customBatchTransferBean.pageSize;
            this.doQuery();
        }
    };
    //转让
    CustomBatchTransferComponent.prototype.doAllot = function (param) {
        if (param == 'more') {
            if (this.chooseData.length == 0) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择客户！' });
                return;
            }
            else {
                this.inValue = {
                    invalue: this.chooseData,
                    type: '3'
                };
                this.display = true;
            }
        }
        else {
            this.inValue = {
                invalue: param,
                type: '3'
            };
            this.display = true;
        }
    };
    //转让关闭
    CustomBatchTransferComponent.prototype.doMoreAllotCall = function (param) {
        if (param == false) {
            this.tablelist = [];
            this.display = false;
            this.querySecle();
        }
        else {
            this.display = false;
            this.outVal = param.outVal;
            this.aaaa = param.aaaa;
        }
    };
    //机构树
    CustomBatchTransferComponent.prototype.orgTree = function () {
        this.headerTitle = '机构树';
        this.orgdisplay = true;
    };
    CustomBatchTransferComponent.prototype.treeCall = function (param) {
        this.orgdisplay = false;
        this.empOrgName = param.orgName;
    };
    //导入转让
    CustomBatchTransferComponent.prototype.doAllotImport = function () {
        if (this.tablelist.length > 0) {
            this.inValue = {
                invalue: this.tablelist,
                type: '3'
            };
            this.display = true;
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择客户！' });
            return;
        }
    };
    //多个-分配关闭
    // doMoreAllotCall(param) {
    //   if (param == false) {
    //     this.tablelist = [];
    //     this.custtomMindTransferBean.custNo = undefined;
    //     this.display = false;
    //   } else {
    //     this.display = false;
    //     this.outVal = param.outVal;
    //     this.aaaa = param.aaaa;
    //   }
    // }
    CustomBatchTransferComponent.prototype.onHideClose = function () {
        document.body.style.overflow = 'auto';
        // this.tablelist = [];
        this.Propertym = false;
        this.display = false;
        if (this.files) {
            this.files = [];
        }
        this.totalNum = 0;
        this.querySecle();
    };
    CustomBatchTransferComponent.prototype.outDisplayCall = function (event) {
        this.aaaa = event;
        this.display = false;
    };
    CustomBatchTransferComponent.prototype.outValueCall = function (event) {
        var _this = this;
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.httpService.insertCustManageData(this.outValBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader_1 = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
                }
                _this.aaaa = false;
                _this.display = false;
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: '调用服务成功！' });
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
    };
    CustomBatchTransferComponent.prototype.addCallBean = function (event) {
        this.outValBean = event;
    };
    //按钮权限
    CustomBatchTransferComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomBatchTransferComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    CustomBatchTransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-batch-transfer',
            template: __webpack_require__(/*! ./custom-batch-transfer.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-transfer.component.html"),
            styles: [__webpack_require__(/*! ./custom-batch-transfer.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-transfer.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CustomBatchTransferComponent);
    return CustomBatchTransferComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-me-transfer/bean/myTransferedCustQry.bean.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-me-transfer/bean/myTransferedCustQry.bean.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: MyTransferedCustQryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTransferedCustQryBean", function() { return MyTransferedCustQryBean; });
var MyTransferedCustQryBean = /** @class */ (function () {
    function MyTransferedCustQryBean() {
    }
    return MyTransferedCustQryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-me-transfer/custom-me-transfer.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-me-transfer/custom-me-transfer.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g padding-zero module\">\r\n  <div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'转让搜索条件'\"></header-title>\r\n  </div>\r\n  <div class=\"ui-g-12 contactCsstop\">\r\n    <div class=\"ui-g-2 text-right\">\r\n      <label>客户号：</label>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <input type=\"text\" class=\"transfer-me-i\" pInputText [(ngModel)]=\"myTransferedCustQryBean.custNo\">\r\n    </div>\r\n    <div class=\"ui-g-2 text-right\">\r\n      <label>客户姓名：</label>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <input type=\"text\" class=\"transfer-me-i\" pInputText [(ngModel)]=\"myTransferedCustQryBean.custName\">\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 contactCss\">\r\n    <div class=\"ui-g-2 text-right\">\r\n      <label>转让状态：</label>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <p-dropdown [options]=\"isStatusQuery\" class=\"transfer-me-p\" [(ngModel)]=\"myTransferedCustQryBean.stu\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-2 text-right\">\r\n      <label>转让申请时间：</label>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <p-calendar class=\"transfer-me-calendar\" [(ngModel)]=\"startDate\" [maxDate]=\"endDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n        [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showDataStart()\"></p-calendar>\r\n      至\r\n      <p-calendar class=\"transfer-me-calendar\" [(ngModel)]=\"endDate\" [minDate]=\"startDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n        [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showDataEnd()\"></p-calendar>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 btn\">\r\n    <button type=\"text\" pButton class=\"ui-button-primary\" label=\"查询\" (click)=\"querySecle()\"></button>\r\n    <button type=\"text\" pButton class=\"ui-button-primary\" label=\"重置\" (click)=\"resetBtn()\"></button>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'转让查询结果'\"></header-title>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 table base-table\">\r\n    <p-dataTable [value]=\"tableData\" [emptyMessage]=\"tabMesg\">\r\n      <p-column field=\"custNo\" header=\"客户号\">\r\n        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          <a href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}\" target=\"_blank\">{{col.custNo}}</a>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"custName\" header=\"客户姓名\"></p-column>\r\n      <p-column header=\"主联系人机构\">\r\n        <ng-template let-car=\"rowData\" pTemplate=\"body\">\r\n          <span *ngIf=\"car.statusId == s1 || car.statusId == s4\">{{car.ownerOrgName}}</span>\r\n          <span *ngIf=\"car.statusId == s2 || car.statusId == s3\">{{car.receiveOrgName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"ownerManagerName\" header=\"主联系人姓名\">\r\n        <ng-template let-car=\"rowData\" pTemplate=\"body\">\r\n          <span *ngIf=\"car.statusId == s1 || car.statusId == s4\">{{car.ownerManagerName}}</span>\r\n          <span *ngIf=\"car.statusId == s2 || car.statusId == s3\">{{car.receiverName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"createrName\" header=\"转让人\"></p-column>\r\n      <p-column field=\"createDate\" header=\"转让时间\"></p-column>\r\n      <p-column field=\"statusId\" header=\"转让状态\">\r\n        <ng-template let-car=\"rowData\" pTemplate=\"body\">\r\n          <!-- <span>{{car.statusId|codeValuePie:isStatusList}}</span> -->\r\n          <span *ngIf=\"car.statusId == s1\">待审批</span>\r\n          <span *ngIf=\"car.statusId == s2\">转让成功</span>\r\n          <span *ngIf=\"car.statusId == s3\">转让成功</span>\r\n          <span *ngIf=\"car.statusId == s4\">转让失败</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"\" header=\"查看审批详情\" *ngIf=\"permissionCheck('SID01004_P011_P001')\">\r\n        <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n          <span (click)=\"doDetail(col)\" class=\"tabelDetailIco\" *ngIf=\"col.statusId != s3\" >查看详情</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n    <p-paginator rows=\"{{myTransferedCustQryBean.pageSize}}\" [first]=\"first\" totalRecords=\"{{totalNum}}\" (onPageChange)=\"paginate($event)\"\r\n      [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n  </div>\r\n</div>\r\n\r\n<!-- 弹出框 -->\r\n<p-dialog [(visible)]=\"display\" modal=\"modal\" class=\"custom-transfer-f\" [positionTop]=10 (onHide)=\"onHideClose()\">\r\n  <p-header>\r\n    审批流程\r\n  </p-header>\r\n  <div>\r\n    <app-custom-batch-detail *ngIf=\"display\" [in-value]=\"inValue\" (outValue)=\"doDetailClose($event)\"></app-custom-batch-detail>\r\n  </div>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-me-transfer/custom-me-transfer.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-me-transfer/custom-me-transfer.component.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-right {\n  text-align: right; }\n\n.btn {\n  text-align: center; }\n\n.table {\n  text-align: center; }\n\n.contactCss {\n  margin-top: -14px; }\n\n.contactCsstop {\n  margin-top: 10px; }\n\na {\n  color: #0094D2; }\n\n.transfer-me-i {\n  width: 50% !important;\n  min-width: 284px !important; }\n\n:host /deep/ .custom-transfer-f .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .custom-transfer-f .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n:host/deep/ .transfer-me-calendar .ui-calendar {\n  width: 23.2%; }\n\n:host /deep/ .transfer-me-p .ui-dropdown {\n  width: 50% !important;\n  min-width: 284px !important; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .transfer-me-calendar .ui-calendar {\n    width: 30%; }\n  :host /deep/ .transfer-me-p .ui-dropdown {\n    width: 76% !important; }\n  .transfer-me-i {\n    width: 76% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS10cmFuc2Zlci9hY2NvdW50LW1hbmFnZXIvY3VzdG9tLW1lLXRyYW5zZmVyL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLW1hcmtldGluZ1xcY3VzdG9tLXRyYW5zZmVyXFxhY2NvdW50LW1hbmFnZXJcXGN1c3RvbS1tZS10cmFuc2ZlclxcY3VzdG9tLW1lLXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLHFCQUFxQjtFQUNyQiwyQkFBMkIsRUFBQTs7QUFJL0I7RUFDSSx1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksV0FBVyxFQUFBOztBQUlmO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLHFCQUFxQjtFQUNyQiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFFSTtJQUNJLFVBQVUsRUFBQTtFQUVkO0lBQ0kscUJBQXFCLEVBQUE7RUFFekI7SUFDSSxxQkFBcUIsRUFBQSxFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLW1hcmtldGluZy9jdXN0b20tdHJhbnNmZXIvYWNjb3VudC1tYW5hZ2VyL2N1c3RvbS1tZS10cmFuc2Zlci9jdXN0b20tbWUtdHJhbnNmZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWN0Q3NzIHtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG59XHJcblxyXG4uY29udGFjdENzc3RvcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjMDA5NEQyO1xyXG59XHJcblxyXG4udHJhbnNmZXItbWUtaSB7XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDI4NHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8v5qih5oCB5qGGXHJcbjpob3N0IC9kZWVwLyAuY3VzdG9tLXRyYW5zZmVyLWYgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0L2RlZXAvIC5jdXN0b20tdHJhbnNmZXItZiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudHtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4vLyDmn6Xor6LojIPlm7Qg5pel5pyf57uE5Lu2XHJcbjpob3N0L2RlZXAvIC50cmFuc2Zlci1tZS1jYWxlbmRhciAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDIzLjIlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLnRyYW5zZmVyLW1lLXAgLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMjg0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgIC8vIOafpeivouiMg+WbtCDml6XmnJ/nu4Tku7ZcclxuICAgIDpob3N0L2RlZXAvIC50cmFuc2Zlci1tZS1jYWxlbmRhciAudWktY2FsZW5kYXIge1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcbiAgICA6aG9zdCAvZGVlcC8gLnRyYW5zZmVyLW1lLXAgLnVpLWRyb3Bkb3duIHtcclxuICAgICAgICB3aWR0aDogNzYlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudHJhbnNmZXItbWUtaSB7XHJcbiAgICAgICAgd2lkdGg6IDc2JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-me-transfer/custom-me-transfer.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-me-transfer/custom-me-transfer.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: CustomMeTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMeTransferComponent", function() { return CustomMeTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_myTransferedCustQry_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/myTransferedCustQry.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-me-transfer/bean/myTransferedCustQry.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
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
 * 我的转让
 */






// import { IsStatusTransfer,IsStatusTransferList,IsStatusQueryT } from './../../../../constant/custOperation.codeValue';

var CustomMeTransferComponent = /** @class */ (function () {
    function CustomMeTransferComponent(httpService, commfunc, router) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //表格中无数据时显示的内容
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        this.myTransferedCustQryBean = new _bean_myTransferedCustQry_bean__WEBPACK_IMPORTED_MODULE_1__["MyTransferedCustQryBean"]();
        this.first = 0; //分页控制
        this.totalNum = 0;
        this.tableData = [];
        this.msgs = []; //提示信息
        this.startDate = null;
        this.endDate = null;
        this.isStatusQuery = []; //转让查询
        this.isStatus = []; //申领状态
        this.isStatusList = []; //申领状态
        this.orgId = '';
        this.userId = '';
        this.s1 = '00'; //待审批
        this.s2 = '0'; //转让成功
        this.s3 = '01'; //转让成功
        this.s4 = '1'; //转让失败
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.isStatusQuery = this.code['IsStatusQueryT'];
        this.isStatus = this.code['IsStatusTransfer'];
        this.isStatusList = this.code['IsStatusTransferList'];
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
    }
    CustomMeTransferComponent.prototype.ngOnInit = function () {
        this.myTransferedCustQryBean.pageSize = 10;
        this.myTransferedCustQryBean.pageNum = 1;
    };
    //码值
    CustomMeTransferComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //点击查询-初始化
    CustomMeTransferComponent.prototype.querySecle = function () {
        this.myTransferedCustQryBean.pageSize = 10;
        this.myTransferedCustQryBean.pageNum = 1;
        this.first = 0;
        this.searchBtn();
    };
    // 我的转让 查询
    CustomMeTransferComponent.prototype.searchBtn = function () {
        var _this = this;
        //校验客户号
        if (this.myTransferedCustQryBean.custNo == '') {
            this.myTransferedCustQryBean.custNo = undefined;
        }
        var reg = /^[0-9]*$/;
        if (this.myTransferedCustQryBean.custNo != undefined) {
            if (this.myTransferedCustQryBean.custNo != '') {
                if (!reg.test(this.myTransferedCustQryBean.custNo)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入正确客户号！' });
                    return;
                }
            }
        }
        //校验客户姓名
        if (this.myTransferedCustQryBean.custName == '') {
            this.myTransferedCustQryBean.custName = undefined;
            this.myTransferedCustQryBean.custName_LIKE = undefined;
        }
        var reg1 = /^[\u4e00-\u9fa5]{0,}$/;
        if (this.myTransferedCustQryBean.custName != undefined) {
            if (this.myTransferedCustQryBean.custName != '') {
                if (!reg1.test(this.myTransferedCustQryBean.custName)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入正确客户姓名！' });
                    return;
                }
            }
        }
        //客户姓名有值赋值
        if (this.myTransferedCustQryBean.custName != undefined) {
            this.myTransferedCustQryBean.custName_LIKE = '%' + this.myTransferedCustQryBean.custName + '%';
        }
        //审批状态
        if (!this.myTransferedCustQryBean.stu) {
            var arr = [];
            arr.push('00');
            arr.push('01');
            arr.push('0');
            arr.push('1');
            this.myTransferedCustQryBean.statusId_IN = arr;
        }
        else {
            if (this.myTransferedCustQryBean.stu == '00') {
                var arr = [];
                arr.push('00');
                this.myTransferedCustQryBean.statusId_IN = arr;
            }
            if (this.myTransferedCustQryBean.stu == '0') {
                var arr = [];
                arr.push('0');
                arr.push('01');
                this.myTransferedCustQryBean.statusId_IN = arr;
            }
            if (this.myTransferedCustQryBean.stu == '1') {
                var arr = [];
                arr.push('1');
                this.myTransferedCustQryBean.statusId_IN = arr;
            }
        }
        this.myTransferedCustQryBean.creater = this.user.userId;
        this.myTransferedCustQryBean.operationType = '3';
        this.myTransferedCustQryBean.createDate_GE = this.commfunc.transDateN(this.startDate);
        this.myTransferedCustQryBean.createDate_LE = this.commfunc.transDateN(this.endDate);
        if (this.myTransferedCustQryBean.createDate_GE == "" || this.myTransferedCustQryBean.createDate_GE == null) {
            this.myTransferedCustQryBean.createDate_GE = undefined;
        }
        if (this.myTransferedCustQryBean.createDate_LE == "" || this.myTransferedCustQryBean.createDate_LE == null) {
            this.myTransferedCustQryBean.createDate_LE = undefined;
        }
        this.httpService.queryMainContactChangeByAnyKey(this.myTransferedCustQryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.resultList;
                _this.totalNum = data.total;
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    // 重置
    CustomMeTransferComponent.prototype.resetBtn = function () {
        this.myTransferedCustQryBean = new _bean_myTransferedCustQry_bean__WEBPACK_IMPORTED_MODULE_1__["MyTransferedCustQryBean"]();
        this.myTransferedCustQryBean.pageSize = 10;
        this.myTransferedCustQryBean.pageNum = 1;
        this.startDate = null;
        this.endDate = null;
        this.first = 0;
    };
    //分页
    CustomMeTransferComponent.prototype.paginate = function (event) {
        this.myTransferedCustQryBean.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.myTransferedCustQryBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.myTransferedCustQryBean.pageSize;
        this.searchBtn();
    };
    //点击客户号跳转360视图
    CustomMeTransferComponent.prototype.toCustView = function (data) {
        this.commfunc.setSessionData('custNo', data.custNo);
        this.router.navigate(['pages/custom-view']);
    };
    //计划联系时间：开始日期
    CustomMeTransferComponent.prototype.showDataStart = function () {
        var _this = this;
        if (this.startDate && this.endDate) {
            if (this.startDate > this.endDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.startDate = null;
                });
            }
        }
    };
    //计划联系时间：结束日期
    CustomMeTransferComponent.prototype.showDataEnd = function () {
        var _this = this;
        if (this.startDate && this.endDate) {
            if (this.startDate > this.endDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.endDate = null;
                });
            }
        }
    };
    //查看详情
    CustomMeTransferComponent.prototype.doDetail = function (data) {
        document.body.style.overflow = 'hidden';
        var arr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](data);
        this.inValue = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](arr.batchNo);
        this.display = true;
        this.headerTitle = '查看详情';
    };
    //查看详情关闭
    CustomMeTransferComponent.prototype.doDetailClose = function () {
        document.body.style.overflow = 'auto';
        this.display = false;
    };
    CustomMeTransferComponent.prototype.onHideClose = function () {
        document.body.style.overflow = 'auto';
        this.display = false;
    };
    //按钮权限
    CustomMeTransferComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomMeTransferComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    CustomMeTransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-me-transfer',
            template: __webpack_require__(/*! ./custom-me-transfer.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-me-transfer/custom-me-transfer.component.html"),
            styles: [__webpack_require__(/*! ./custom-me-transfer.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-me-transfer/custom-me-transfer.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CustomMeTransferComponent);
    return CustomMeTransferComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-mind-transfer/bean/custtomMindTransfer.bean.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-mind-transfer/bean/custtomMindTransfer.bean.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: CusttomMindTransferBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusttomMindTransferBean", function() { return CusttomMindTransferBean; });
var CusttomMindTransferBean = /** @class */ (function () {
    function CusttomMindTransferBean() {
    }
    return CusttomMindTransferBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-mind-transfer/custom-mind-transfer.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-mind-transfer/custom-mind-transfer.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g padding-zero module\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<header-title [Info]=\"'客户查询条件'\"></header-title>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-6 ui-g-offset-4\">\r\n\t\t\t<label>客户号:</label>\r\n\t\t\t<input type=\"text\" pInputText [(ngModel)]=\"custtomMindTransferBean.custNo\">\r\n\t\t\t<button pButton type=\"button\" label=\"查询\" (click)=\"querySecle()\"></button>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<header-title [Info]=\"'客户查询结果'\"></header-title>\r\n\t</div>\r\n\t<div class=\"ui-g-12 list-s\">\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t客户号：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0\">\r\n\t\t\t\t\t\t<a href=\"/#/pages/custom-view?custNo={{compileStr(tablelist[0].custNo)}}\" target=\"_blank\">{{tablelist[0].custNo}}</a> \r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t客户姓名：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0\">{{tablelist[0].custName}}</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t证件类型：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0\"> {{tablelist[0].idenType | codeValuePie:cert_type}}</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t证件号码：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0\">{{tablelist[0].idenNum}}</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t手机号码：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0\">{{tablelist[0].tel}}</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t主联系人：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0 && OwnerDisplay\">{{tablelist[0].ownerManagerName}}({{tablelist[0].ownerOrgName}})</span>\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0 && !OwnerDisplay\">-</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t存款日均(本年)：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0\">{{tablelist[0].balDlyAvgByYear}}</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t贷款日均(本年)：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0\">{{tablelist[0].loanDlyAvgByYear}}</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t当前是否持有信用卡：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0\">{{tablelist[0].isHoldCrdCard | codeValuePie:isHoldCrdCard}}</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t理财余额(当前)：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0\">{{tablelist[0].finBal}}</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"ui-g-12 btn-center\" *ngIf=\"permissionCheck('SID01004_P009_P001')\">\r\n\t\t<button pButton type=\"button\" label=\"我要转让\" (click)=\"doAllot('more')\"></button>\r\n\t</div>\r\n</div>\r\n\r\n<!-- 弹出框 -->\r\n<p-dialog [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 (onHide)=\"onHideClose()\">\r\n\t<p-header>\r\n\t\t管户关系调入\r\n\t</p-header>\r\n\t<div>\r\n\t\t<app-custom-transfer-dialog *ngIf=\"display\" [in-value]=\"inValue\" (outValueBean)=\"addCallBean($event)\" (outValue)=\"doMoreAllotCall($event)\"></app-custom-transfer-dialog>\r\n\t</div>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<p-dialog [(visible)]=\"aaaa\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10>\r\n\t<p-header>\r\n\t\t提交给\r\n\t</p-header>\r\n\t<app-examine-approval *ngIf=\"aaaa\" [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-mind-transfer/custom-mind-transfer.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-mind-transfer/custom-mind-transfer.component.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  text-align: center; }\n\n.btn-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.list-s {\n  margin-top: 20px;\n  margin-bottom: 40px; }\n\ninput {\n  width: 200px !important; }\n\na {\n  color: #0094D2; }\n\n:host /deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS10cmFuc2Zlci9hY2NvdW50LW1hbmFnZXIvY3VzdG9tLW1pbmQtdHJhbnNmZXIvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tbWFya2V0aW5nXFxjdXN0b20tdHJhbnNmZXJcXGFjY291bnQtbWFuYWdlclxcY3VzdG9tLW1pbmQtdHJhbnNmZXJcXGN1c3RvbS1taW5kLXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJLGNBQWUsRUFBQTs7QUFFbkI7RUFDSSx1QkFBdUI7RUFDdkIsdUJBQ0osRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLW1hcmtldGluZy9jdXN0b20tdHJhbnNmZXIvYWNjb3VudC1tYW5hZ2VyL2N1c3RvbS1taW5kLXRyYW5zZmVyL2N1c3RvbS1taW5kLXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idG4tY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50ZXh0LXJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmxpc3Qtc3tcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbmlucHV0e1xyXG4gICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiAjMDA5NEQyIDtcclxufVxyXG46aG9zdCAvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3d7XHJcbiAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-mind-transfer/custom-mind-transfer.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-mind-transfer/custom-mind-transfer.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: CustomMindTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMindTransferComponent", function() { return CustomMindTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _bean_custtomMindTransfer_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/custtomMindTransfer.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-mind-transfer/bean/custtomMindTransfer.bean.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { CERT_TYPE, IsHoldCrdCard } from "app/pages/tzb/custom/constant/custOperation.codeValue";
/**
 * 我要转让
 */
var CustomMindTransferComponent = /** @class */ (function () {
    function CustomMindTransferComponent(httpService, commfunc, router) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //暂无数据
        this.msgs = [];
        this.custtomMindTransferBean = new _bean_custtomMindTransfer_bean__WEBPACK_IMPORTED_MODULE_4__["CusttomMindTransferBean"]();
        this.first = 0; //分页控制
        this.totalNum = 0;
        this.tablelist = [];
        this.cert_type = [];
        this.isHoldCrdCard = [];
        this.chooseData = [];
        this.display = false;
        this.OwnerDisplay = false;
        this.aaaa = false;
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.cert_type = this.code['CERT_TYPE'];
        this.isHoldCrdCard = this.code['IsHoldCrdCard'];
    }
    CustomMindTransferComponent.prototype.ngOnInit = function () {
        this.custtomMindTransferBean.pageSize = 10;
        this.custtomMindTransferBean.pageNum = 1;
    };
    //码值
    CustomMindTransferComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //查询初始化
    CustomMindTransferComponent.prototype.querySecle = function () {
        this.custtomMindTransferBean.pageSize = 10;
        this.custtomMindTransferBean.pageNum = 1;
        this.first = 0;
        this.doQuery();
    };
    //查询
    CustomMindTransferComponent.prototype.doQuery = function () {
        var _this = this;
        // 是否输入客户号
        if (this.custtomMindTransferBean.custNo == undefined ||
            this.custtomMindTransferBean.custNo == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入客户号' });
            return;
        }
        // 只允许输入数字
        var reg = /^[0-9]*$/;
        if (this.custtomMindTransferBean.custNo != undefined) {
            if (this.custtomMindTransferBean.custNo != '') {
                if (!reg.test(this.custtomMindTransferBean.custNo)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '只允许输入数字' });
                    return;
                }
            }
        }
        this.custtomMindTransferBean.operationType = '3';
        this.httpService.distributeCustQry(this.custtomMindTransferBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tablelist = data.custList;
                if (_this.tablelist.length > 0) {
                    if (_this.tablelist[0].ownerManagerName == '' || _this.tablelist[0].ownerManagerName == null) {
                        _this.tablelist[0].ownerManagerName = '-';
                        _this.OwnerDisplay = false;
                    }
                    else {
                        _this.OwnerDisplay = true;
                    }
                    _this.chooseData = _this.tablelist[0];
                }
                else {
                    _this.chooseData = [];
                }
                _this.totalNum = data.totalCount;
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    //分页
    CustomMindTransferComponent.prototype.paginate = function (event) {
        this.custtomMindTransferBean.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.custtomMindTransferBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.custtomMindTransferBean.pageSize;
        this.doQuery();
    };
    //点击客户号跳转360视图
    CustomMindTransferComponent.prototype.toCustView = function (data) {
        this.commfunc.setSessionData('custNo', data[0].custNo);
        window.open("" + 'localhost:4200' + '#/pages/tzb/custom/custom-information/mine-custom/mine-custom-overview2', '_blank');
    };
    //分配
    CustomMindTransferComponent.prototype.doAllot = function (param) {
        document.body.style.overflow = 'hidden';
        if (param == 'more') {
            if (this.chooseData.length == 0) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择客户！' });
                return;
            }
            else {
                this.inValue = {
                    invalue: this.chooseData,
                    type: '3'
                };
                this.display = true;
            }
        }
        else {
            this.inValue = {
                invalue: param,
                type: '3'
            };
            this.display = true;
        }
    };
    //多个-分配关闭
    CustomMindTransferComponent.prototype.doMoreAllotCall = function (param) {
        if (param == false) {
            this.tablelist = [];
            this.chooseData = [];
            this.custtomMindTransferBean.custNo = undefined;
            this.display = false;
        }
        else {
            this.display = false;
            this.outVal = param.outVal;
            this.aaaa = param.aaaa;
        }
    };
    CustomMindTransferComponent.prototype.onHideClose = function () {
        document.body.style.overflow = 'auto';
        this.tablelist = [];
        this.chooseData = [];
        this.custtomMindTransferBean.custNo = undefined;
        this.display = false;
    };
    CustomMindTransferComponent.prototype.outDisplayCall = function (event) {
        this.aaaa = event;
        this.display = false;
    };
    CustomMindTransferComponent.prototype.outValueCall = function (event) {
        var _this = this;
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.httpService.insertCustManageData(this.outValBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader_1 = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
                }
                _this.aaaa = false;
                _this.display = false;
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: '调用服务成功！' });
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
    };
    CustomMindTransferComponent.prototype.addCallBean = function (event) {
        this.outValBean = event;
        this.tablelist = [];
    };
    //按钮权限
    CustomMindTransferComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomMindTransferComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    CustomMindTransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-mind-transfer',
            template: __webpack_require__(/*! ./custom-mind-transfer.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-mind-transfer/custom-mind-transfer.component.html"),
            styles: [__webpack_require__(/*! ./custom-mind-transfer.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-mind-transfer/custom-mind-transfer.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CustomMindTransferComponent);
    return CustomMindTransferComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/bean/customWaitTransfer.bean.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/bean/customWaitTransfer.bean.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: CustomWaitTransfer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomWaitTransfer", function() { return CustomWaitTransfer; });
var CustomWaitTransfer = /** @class */ (function () {
    function CustomWaitTransfer() {
    }
    return CustomWaitTransfer;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/custom-wait-transfer.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/custom-wait-transfer.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g padding-zero module\">\r\n  <div class=\"ui-g-12 query\">\r\n    <header-title [Info]=\"'待审批转让查询结果'\"></header-title>\r\n  </div>\r\n  <div class=\"ui-g-12 table base-table\">\r\n    <p-dataTable [value]=\"tablelist\" [emptyMessage]=\"tabMesg\">\r\n      <p-column field=\"ownerOrgName\" header='转让人所属机构'></p-column>\r\n      <p-column field=\"ownerManagerName\" header=\"转让人姓名\"></p-column>\r\n      <p-column field=\"receiveOrgName\" header=\"受让人所属机构\"></p-column>\r\n      <p-column field=\"receiverName\" header=\"受让人姓名\"></p-column>\r\n      <p-column field=\"receiver\" header=\"受让人Id\" hidden=\"true\"></p-column>\r\n      <p-column field=\"counts\" header=\"客户数量\">\r\n        <ng-template let-car=\"rowData\" pTemplate=\"body\">\r\n          <a (click)='transferList(car)' class=\"custNo_a\">{{car.counts}}</a>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"createDate\" header=\"申请时间\"></p-column>\r\n      <p-column field=\"\" header=\"操作\" *ngIf=\"permissionCheck('SID01004_P012_P001')\">\r\n        <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n          <span (click)=\"doExam(col)\" class=\"tabelDealIco\">审批</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n    <p-paginator rows=\"{{customWaitTransfer.pageSize}}\" [first]=\"first\" totalRecords=\"{{totalNum}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n      (onPageChange)=\"paginate($event)\"></p-paginator>\r\n  </div>\r\n</div>\r\n\r\n<!-- 弹出框 -->\r\n<p-dialog [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    客户列表\r\n  </p-header>\r\n  <div>\r\n    <app-wait-transfer-list [in-value]=\"inValue\" (outValue)=\"transferCall()\"></app-wait-transfer-list>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/custom-wait-transfer.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/custom-wait-transfer.component.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  text-align: center; }\n\n.custNo_a {\n  cursor: pointer;\n  color: #0094D2; }\n\na {\n  color: #0094D2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS10cmFuc2Zlci9hY2NvdW50LW1hbmFnZXIvY3VzdG9tLXdhaXQtdHJhbnNmZXIvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tbWFya2V0aW5nXFxjdXN0b20tdHJhbnNmZXJcXGFjY291bnQtbWFuYWdlclxcY3VzdG9tLXdhaXQtdHJhbnNmZXJcXGN1c3RvbS13YWl0LXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksZUFBYztFQUNkLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxjQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1tYXJrZXRpbmcvY3VzdG9tLXRyYW5zZmVyL2FjY291bnQtbWFuYWdlci9jdXN0b20td2FpdC10cmFuc2Zlci9jdXN0b20td2FpdC10cmFuc2Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY3VzdE5vX2F7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGNvbG9yOiAjMDA5NEQyO1xyXG59XHJcbmF7XHJcbiAgICBjb2xvcjogIzAwOTREMiA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/custom-wait-transfer.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/custom-wait-transfer.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: CustomWaitTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomWaitTransferComponent", function() { return CustomWaitTransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_customWaitTransfer_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/customWaitTransfer.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/bean/customWaitTransfer.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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



// import { IsHoldCrdCard } from "app/pages/tzb/custom/constant/custOperation.codeValue";



var CustomWaitTransferComponent = /** @class */ (function () {
    function CustomWaitTransferComponent(httpService, router, commfunc) {
        this.httpService = httpService;
        this.router = router;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //表格中无数据时显示的内容
        this.first = 0; //分页控制
        this.customWaitTransfer = new _bean_customWaitTransfer_bean__WEBPACK_IMPORTED_MODULE_2__["CustomWaitTransfer"]();
        this.msgs = [];
        this.tablelist = [];
        this.tableDataT = [];
        this.totalNum = 0;
        this.isHoldCrdCard = [];
        this.datalist = [];
        this.mesg = {};
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.isHoldCrdCard = this.code['IsHoldCrdCard'];
    }
    CustomWaitTransferComponent.prototype.ngOnInit = function () {
        this.customWaitTransfer.pageSize = 10;
        this.customWaitTransfer.pageNum = 1;
        this.querySecle();
    };
    //码值
    CustomWaitTransferComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //查询初始化
    CustomWaitTransferComponent.prototype.querySecle = function () {
        this.customWaitTransfer.pageSize = 10;
        this.customWaitTransfer.pageNum = 1;
        this.first = 0;
        this.doQuery();
    };
    //查询
    CustomWaitTransferComponent.prototype.doQuery = function () {
        var _this = this;
        this.customWaitTransfer.taskCategoryId = '278000';
        this.customWaitTransfer.operationType = '3';
        this.customWaitTransfer.isAppr = '0'; //未审批
        this.httpService.queryWaitApprApplyFor(this.customWaitTransfer).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tablelist = data.resultList;
                _this.totalNum = data.total;
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    //分页
    CustomWaitTransferComponent.prototype.paginate = function (event) {
        this.customWaitTransfer.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.customWaitTransfer.pageNum = currentPage;
        this.first = (currentPage - 1) * this.customWaitTransfer.pageSize;
        this.doQuery();
    };
    //审批
    CustomWaitTransferComponent.prototype.doExam = function (dataParam) {
        var _this = this;
        this.mesg['scheduleId'] = dataParam.scheduleId;
        this.mesg['taskCategoryId'] = dataParam.taskCategoryId;
        this.commfunc.setSessionData('para', JSON.stringify(this.mesg));
        var param = { scheduleId: dataParam.scheduleId, taskCategoryId: dataParam.taskCategoryId };
        var ob = this.httpService.qryScheduleByCondition(param);
        ob.subscribe(function (data) {
            _this.paramData = {
                scheduleId: data.scheduleId,
                createDate: data.createDate,
                creater: data.creater,
                createrName: data.createrName,
                scheduleName: data.scheduleName,
                scheduleTypeId: data.scheduleTypeId,
                statusId: dataParam.statusId,
                subSysId: data.subSysId,
            };
            _this.router.navigate(['/pages/tzb/uisftech-view/check/marking/a/b/c/' + dataParam.operationType + "/" + dataParam.approveNo + "/" + dataParam.batchNo + "/" + dataParam.scheduleId + "/" + dataParam.taskCategoryId, _this.paramData]);
        });
    };
    //审批关闭
    CustomWaitTransferComponent.prototype.doExamClose = function () {
        this.display = false;
    };
    //弹出名单
    CustomWaitTransferComponent.prototype.transferList = function (data) {
        this.display = true;
        this.inValue = data;
    };
    //关闭模态框
    CustomWaitTransferComponent.prototype.transferCall = function () {
        this.display = false;
    };
    //按钮权限
    CustomWaitTransferComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomWaitTransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-wait-transfer',
            template: __webpack_require__(/*! ./custom-wait-transfer.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/custom-wait-transfer.component.html"),
            styles: [__webpack_require__(/*! ./custom-wait-transfer.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/custom-wait-transfer.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], CustomWaitTransferComponent);
    return CustomWaitTransferComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/wait-transfer-list/bean/waitTransferList.bean.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/wait-transfer-list/bean/waitTransferList.bean.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: WaitTransferListBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitTransferListBean", function() { return WaitTransferListBean; });
var WaitTransferListBean = /** @class */ (function () {
    function WaitTransferListBean() {
    }
    return WaitTransferListBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/wait-transfer-list/wait-transfer-list.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/wait-transfer-list/wait-transfer-list.component.html ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 content\">\r\n  <div class=\"ui-g-12 table base-table\">\r\n    <p-dataTable [value]=\"tablelist\" [emptyMessage]=\"tabMesg\">\r\n      <p-column field=\"custNo\" header=\"客户号\">\r\n        <!-- <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  <a (click)=\"toCustView(col)\" style=\"cursor:pointer;\">{{col.custNo}}</a>\r\n                </ng-template> -->\r\n        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          <a href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}\" target=\"_blank\">{{col.custNo}}</a>\r\n          <!-- <a (click)=\"toCustView(col)\" style=\"cursor:pointer;\">{{col.custNo}}</a> -->\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"custName\" header=\"客户姓名\"></p-column>\r\n      <p-column field=\"balDlyAvgByYear\" header=\"存款日均(本年)\"></p-column>\r\n      <p-column field=\"loanDlyAvgByYear\" header=\"贷款日均(本年)\"></p-column>\r\n      <p-column field=\"isHoldCrdCard\" header=\"当前是否持有信用卡\">\r\n        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          {{col.isHoldCrdCard|codeValuePie:isHoldCrdCard}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"finBal\" header=\"理财余额\"></p-column>\r\n      <p-column field=\"ownerManagerName\" header=\"主联系人\"></p-column>\r\n    </p-dataTable>\r\n    <p-paginator rows=\"{{waitTransferListBean.pageSize}}\" [first]=\"first\" totalRecords=\"{{totalNum}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n      (onPageChange)=\"paginate($event)\"></p-paginator>\r\n  </div>\r\n  <div class=\"ui-g-12 btn-center\">\r\n    <button pButton type=\"button\" label=\"返回\" (click)=\"doClose()\"></button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/wait-transfer-list/wait-transfer-list.component.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/wait-transfer-list/wait-transfer-list.component.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  overflow: auto;\n  max-width: 900px;\n  max-height: 700px;\n  width: 900px;\n  height: 700px; }\n  .content .table {\n    text-align: center; }\n  .content .btn-center {\n    text-align: center; }\n  a {\n  color: #0094D2; }\n  a:hover {\n  text-decoration: underline;\n  color: #0094D2 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS10cmFuc2Zlci9hY2NvdW50LW1hbmFnZXIvY3VzdG9tLXdhaXQtdHJhbnNmZXIvd2FpdC10cmFuc2Zlci1saXN0L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLW1hcmtldGluZ1xcY3VzdG9tLXRyYW5zZmVyXFxhY2NvdW50LW1hbmFnZXJcXGN1c3RvbS13YWl0LXRyYW5zZmVyXFx3YWl0LXRyYW5zZmVyLWxpc3RcXHdhaXQtdHJhbnNmZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhLEVBQUE7RUFMakI7SUFPUSxrQkFBa0IsRUFBQTtFQVAxQjtJQVVRLGtCQUFrQixFQUFBO0VBRzFCO0VBQ0ksY0FBZSxFQUFBO0VBRW5CO0VBQ0ksMEJBQTBCO0VBQzFCLHlCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS10cmFuc2Zlci9hY2NvdW50LW1hbmFnZXIvY3VzdG9tLXdhaXQtdHJhbnNmZXIvd2FpdC10cmFuc2Zlci1saXN0L3dhaXQtdHJhbnNmZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgbWF4LWhlaWdodDo3MDBweDtcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICAudGFibGV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1jZW50ZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbmF7XHJcbiAgICBjb2xvcjogIzAwOTREMiA7XHJcbn1cclxuYTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6IzAwOTREMiAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/wait-transfer-list/wait-transfer-list.component.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/wait-transfer-list/wait-transfer-list.component.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: WaitTransferListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitTransferListComponent", function() { return WaitTransferListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _bean_waitTransferList_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/waitTransferList.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/wait-transfer-list/bean/waitTransferList.bean.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
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





// import { IsHoldCrdCard } from "app/pages/tzb/custom/constant/custOperation.codeValue";
var WaitTransferListComponent = /** @class */ (function () {
    function WaitTransferListComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"]; //表格中无数据时显示的内容
        this.first = 0; //分页控制
        this.waitTransferListBean = new _bean_waitTransferList_bean__WEBPACK_IMPORTED_MODULE_2__["WaitTransferListBean"]();
        this.tablelist = [];
        this.totalNum = 0;
        this.msgs = [];
        this.isHoldCrdCard = [];
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.isHoldCrdCard = this.code['IsHoldCrdCard'];
    }
    //初始化
    WaitTransferListComponent.prototype.ngOnInit = function () {
    };
    WaitTransferListComponent.prototype.ngOnChanges = function () {
        this.waitTransferListBean.pageSize = 10;
        this.waitTransferListBean.pageNum = 1;
        this.querySecle();
    };
    //码值
    WaitTransferListComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //查询初始化
    WaitTransferListComponent.prototype.querySecle = function () {
        this.waitTransferListBean.pageSize = 10;
        this.waitTransferListBean.pageNum = 1;
        this.first = 0;
        this.doQuery();
    };
    //查询
    WaitTransferListComponent.prototype.doQuery = function () {
        var _this = this;
        if (this.inValue) {
            this.waitTransferListBean.batchNo = this.inValue.batchNo;
            this.waitTransferListBean.receiver = this.inValue.receiver;
        }
        this.waitTransferListBean.statusId = '1';
        this.waitTransferListBean.operationType = '3';
        this.httpService.queryMainContactChangeByAnyKey(this.waitTransferListBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tablelist = data.resultList;
                _this.totalNum = data.total;
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    //分页
    WaitTransferListComponent.prototype.paginate = function (event) {
        this.waitTransferListBean.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.waitTransferListBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.waitTransferListBean.pageSize;
        this.doQuery();
    };
    //返回关闭模态框
    WaitTransferListComponent.prototype.doClose = function () {
        this.outValue.emit(false);
    };
    WaitTransferListComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WaitTransferListComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('in-value'),
        __metadata("design:type", Object)
    ], WaitTransferListComponent.prototype, "inValue", void 0);
    WaitTransferListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wait-transfer-list',
            template: __webpack_require__(/*! ./wait-transfer-list.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/wait-transfer-list/wait-transfer-list.component.html"),
            styles: [__webpack_require__(/*! ./wait-transfer-list.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/wait-transfer-list/wait-transfer-list.component.scss")]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], WaitTransferListComponent);
    return WaitTransferListComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/custom-transfer.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/custom-transfer.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/custom-transfer.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/custom-transfer.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLW1hcmtldGluZy9jdXN0b20tdHJhbnNmZXIvY3VzdG9tLXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/custom-transfer.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/custom-transfer.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CustomTransfer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTransfer", function() { return CustomTransfer; });
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

var CustomTransfer = /** @class */ (function () {
    function CustomTransfer() {
    }
    CustomTransfer.prototype.ngOnInit = function () {
    };
    CustomTransfer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-transfer',
            template: __webpack_require__(/*! ./custom-transfer.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/custom-transfer.component.html"),
            styles: [__webpack_require__(/*! ./custom-transfer.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/custom-transfer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomTransfer);
    return CustomTransfer;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/custom-transfer.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/custom-transfer.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: CusTransferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusTransferModule", function() { return CusTransferModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custom_transfer_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-transfer.routing */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/custom-transfer.routing.ts");
/* harmony import */ var _account_manager_account_manager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-manager/account-manager.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/account-manager.component.ts");
/* harmony import */ var _custom_transfer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-transfer.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/custom-transfer.component.ts");
/* harmony import */ var _account_manager_custom_mind_transfer_custom_mind_transfer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account-manager/custom-mind-transfer/custom-mind-transfer.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-mind-transfer/custom-mind-transfer.component.ts");
/* harmony import */ var _account_manager_custom_batch_transfer_custom_batch_transfer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account-manager/custom-batch-transfer/custom-batch-transfer.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-transfer.component.ts");
/* harmony import */ var _account_manager_custom_me_transfer_custom_me_transfer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account-manager/custom-me-transfer/custom-me-transfer.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-me-transfer/custom-me-transfer.component.ts");
/* harmony import */ var _account_manager_custom_batch_transfer_custom_batch_detail_custom_batch_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account-manager/custom-batch-transfer/custom-batch-detail/custom-batch-detail.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-detail/custom-batch-detail.component.ts");
/* harmony import */ var _account_manager_custom_wait_transfer_custom_wait_transfer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account-manager/custom-wait-transfer/custom-wait-transfer.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/custom-wait-transfer.component.ts");
/* harmony import */ var _account_manager_custom_already_transfer_custom_already_transfer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./account-manager/custom-already-transfer/custom-already-transfer.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-already-transfer/custom-already-transfer.component.ts");
/* harmony import */ var _account_manager_custom_wait_transfer_wait_transfer_list_wait_transfer_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./account-manager/custom-wait-transfer/wait-transfer-list/wait-transfer-list.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/wait-transfer-list/wait-transfer-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//客户转让
 //客户经理
 //客户转让
 //我要转让
 //客户批量转让
 //我的转让




var CusTransferModule = /** @class */ (function () {
    function CusTransferModule() {
    }
    CusTransferModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _custom_transfer_routing__WEBPACK_IMPORTED_MODULE_4__["CusTransferRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"]
            ],
            declarations: [
                _custom_transfer_component__WEBPACK_IMPORTED_MODULE_6__["CustomTransfer"],
                _account_manager_custom_mind_transfer_custom_mind_transfer_component__WEBPACK_IMPORTED_MODULE_7__["CustomMindTransferComponent"],
                _account_manager_custom_batch_transfer_custom_batch_transfer_component__WEBPACK_IMPORTED_MODULE_8__["CustomBatchTransferComponent"],
                _account_manager_custom_me_transfer_custom_me_transfer_component__WEBPACK_IMPORTED_MODULE_9__["CustomMeTransferComponent"],
                _account_manager_account_manager_component__WEBPACK_IMPORTED_MODULE_5__["AccountManager"],
                _account_manager_custom_batch_transfer_custom_batch_detail_custom_batch_detail_component__WEBPACK_IMPORTED_MODULE_10__["CustomBatchDetailComponent"],
                _account_manager_custom_wait_transfer_custom_wait_transfer_component__WEBPACK_IMPORTED_MODULE_11__["CustomWaitTransferComponent"],
                _account_manager_custom_already_transfer_custom_already_transfer_component__WEBPACK_IMPORTED_MODULE_12__["CustomAlreadyTransferComponent"],
                _account_manager_custom_wait_transfer_wait_transfer_list_wait_transfer_list_component__WEBPACK_IMPORTED_MODULE_13__["WaitTransferListComponent"],
            ],
            providers: []
        })
    ], CusTransferModule);
    return CusTransferModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/custom-transfer.routing.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-transfer/custom-transfer.routing.ts ***!
  \**********************************************************************************************/
/*! exports provided: routes, CusTransferRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusTransferRouting", function() { return CusTransferRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _account_manager_account_manager_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-manager/account-manager.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/account-manager.component.ts");
/* harmony import */ var _custom_transfer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-transfer.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/custom-transfer.component.ts");
/* harmony import */ var _account_manager_custom_mind_transfer_custom_mind_transfer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-manager/custom-mind-transfer/custom-mind-transfer.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-mind-transfer/custom-mind-transfer.component.ts");
/* harmony import */ var _account_manager_custom_batch_transfer_custom_batch_transfer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-manager/custom-batch-transfer/custom-batch-transfer.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-batch-transfer/custom-batch-transfer.component.ts");
/* harmony import */ var _account_manager_custom_me_transfer_custom_me_transfer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-manager/custom-me-transfer/custom-me-transfer.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-me-transfer/custom-me-transfer.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_transfer_account_manager_custom_already_transfer_custom_already_transfer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-already-transfer/custom-already-transfer.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-already-transfer/custom-already-transfer.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_transfer_account_manager_custom_wait_transfer_custom_wait_transfer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/custom-wait-transfer.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-transfer/account-manager/custom-wait-transfer/custom-wait-transfer.component.ts");

//客户转让
 //客户经理
 //客户转让
 //我要转让
 //客户批量转让
 //我的转让


var routes = [
    {
        path: '',
        component: _custom_transfer_component__WEBPACK_IMPORTED_MODULE_2__["CustomTransfer"],
        children: [
            {
                path: 'account-manager',
                component: _account_manager_account_manager_component__WEBPACK_IMPORTED_MODULE_1__["AccountManager"],
                children: [
                    {
                        path: '', redirectTo: 'custom-mind-transfer', component: _account_manager_custom_mind_transfer_custom_mind_transfer_component__WEBPACK_IMPORTED_MODULE_3__["CustomMindTransferComponent"]
                    },
                    {
                        path: 'custom-mind-transfer', component: _account_manager_custom_mind_transfer_custom_mind_transfer_component__WEBPACK_IMPORTED_MODULE_3__["CustomMindTransferComponent"]
                    },
                    {
                        path: 'custom-batch-transfer', component: _account_manager_custom_batch_transfer_custom_batch_transfer_component__WEBPACK_IMPORTED_MODULE_4__["CustomBatchTransferComponent"]
                    },
                    {
                        path: 'custom-me-transfer', component: _account_manager_custom_me_transfer_custom_me_transfer_component__WEBPACK_IMPORTED_MODULE_5__["CustomMeTransferComponent"]
                    },
                    {
                        path: 'custom-wait-transfer', component: app_pages_tzb_custom_custom_marketing_custom_transfer_account_manager_custom_wait_transfer_custom_wait_transfer_component__WEBPACK_IMPORTED_MODULE_7__["CustomWaitTransferComponent"]
                    },
                    {
                        path: 'custom-already-transfer', component: app_pages_tzb_custom_custom_marketing_custom_transfer_account_manager_custom_already_transfer_custom_already_transfer_component__WEBPACK_IMPORTED_MODULE_6__["CustomAlreadyTransferComponent"]
                    },
                ]
            },
        ]
    },
];
var CusTransferRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=custom-transfer-custom-transfer-module.js.map