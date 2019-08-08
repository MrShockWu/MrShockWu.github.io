(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-allot-custom-allot-module"],{

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot-dialog/bean/custom-allot-dialog.bean.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot-dialog/bean/custom-allot-dialog.bean.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: CustomAllotDialogBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAllotDialogBean", function() { return CustomAllotDialogBean; });
var CustomAllotDialogBean = /** @class */ (function () {
    function CustomAllotDialogBean() {
    }
    return CustomAllotDialogBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot-dialog/custom-allot-dialog.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot-dialog/custom-allot-dialog.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-3 text-right\">\r\n      <label>接收机构：</label>\r\n    </div>\r\n    <div class=\"ui-g-9\">\r\n      <input type=\"text\" size=\"30\" pInputText [(ngModel)]=\"customAllotDialogBean.receiveOrgName\" disabled/>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-3 text-right\">\r\n      <label>接收人：</label>\r\n    </div>\r\n    <div class=\"ui-g-9\">\r\n      <p-dropdown [options]=\"peopleList\" [(ngModel)]=\"receiverName\" filter=\"filter\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-3 text-right\">\r\n      <label>备注：</label>\r\n    </div>\r\n    <div class=\"ui-g-9\">\r\n      <textarea rows=\"5\" cols=\"60\" pInputTextarea [(ngModel)]=\"customAllotDialogBean.remarks\"></textarea>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"确定\" class=\"addBtn\" (click)=\"confirmBtn()\"></button>\r\n    <button pButton type=\"button\" label=\"取消\" class=\"adjustBtn\" (click)=\"cancelBtn()\"></button>\r\n  </div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot-dialog/custom-allot-dialog.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot-dialog/custom-allot-dialog.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  overflow: auto;\n  max-height: 700px; }\n  .content .table-s {\n    text-align: center; }\n  .content .btn {\n    text-align: center; }\n  .content .text-right {\n    text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1hbGxvdC9jdXN0b20tYWxsb3QtZGlhbG9nL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLW1hcmtldGluZ1xcY3VzdG9tLWFsbG90XFxjdXN0b20tYWxsb3QtZGlhbG9nXFxjdXN0b20tYWxsb3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLGlCQUFnQixFQUFBO0VBRnBCO0lBSVEsa0JBQWtCLEVBQUE7RUFKMUI7SUFPUSxrQkFBa0IsRUFBQTtFQVAxQjtJQVVRLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1hbGxvdC9jdXN0b20tYWxsb3QtZGlhbG9nL2N1c3RvbS1hbGxvdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDo3MDBweDtcclxuICAgIC50YWJsZS1ze1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHQtcmlnaHR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot-dialog/custom-allot-dialog.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot-dialog/custom-allot-dialog.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: CustomAllotDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAllotDialogComponent", function() { return CustomAllotDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_allot_custom_allot_dialog_bean_custom_allot_dialog_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot-dialog/bean/custom-allot-dialog.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot-dialog/bean/custom-allot-dialog.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomAllotDialogComponent = /** @class */ (function () {
    function CustomAllotDialogComponent(commfunc, router, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.msgs = [];
        this.customAllotDialogBean = new app_pages_tzb_custom_custom_marketing_custom_allot_custom_allot_dialog_bean_custom_allot_dialog_bean__WEBPACK_IMPORTED_MODULE_5__["CustomAllotDialogBean"]();
        this.userName = '';
        this.orgName = '';
        this.userId = '';
        this.orgId = '';
        this.receiverName = '';
        this.dates = [];
        this.user1 = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.user = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (this.user1.userId) {
            this.userId = this.user1.userId;
        }
        if (this.user1.orgId) {
            this.orgId = this.user1.orgId;
        }
        if (this.user.userName) {
            this.userName = this.user.userName;
        }
        if (this.user.orgName) {
            this.orgName = this.user.orgName;
        }
        this.customAllotDialogBean.creater = this.userId;
        this.customAllotDialogBean.createrName = this.userName;
        this.customAllotDialogBean.createOrgId = this.orgId;
        this.customAllotDialogBean.createOrgName = this.orgName;
        this.customAllotDialogBean.receiveOrgName = this.customAllotDialogBean.createOrgName;
        this.customAllotDialogBean.receiveOrgId = this.customAllotDialogBean.createOrgId;
        this.receiverName = '';
        this.customAllotDialogBean.receiverName = '';
        this.customAllotDialogBean.receiver = '';
        this.queryPeopleById();
    }
    CustomAllotDialogComponent.prototype.ngOnInit = function () {
    };
    //确定
    CustomAllotDialogComponent.prototype.confirmBtn = function () {
        var _this = this;
        if (this.inValues.type == '1') {
            this.customAllotDialogBean.operationType = '1'; //分配
        }
        if (this.inValues.type == '2') {
            this.customAllotDialogBean.operationType = '2'; //分配
        }
        if (this.inValues.type == '3') {
            this.customAllotDialogBean.operationType = '3'; //分配
        }
        this.dates = [];
        if (this.inValues.invalue[0]) {
            this.dates = this.inValues.invalue;
        }
        else {
            this.dates.push(this.inValues.invalue);
        }
        this.customAllotDialogBean.custList = this.dates;
        for (var _i = 0, _a = this.peopleList; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.value == this.receiverName) {
                this.customAllotDialogBean.receiverName = i.label;
                this.customAllotDialogBean.receiver = this.receiverName;
                continue;
            }
        }
        this.httpService.insertCustManageData(this.customAllotDialogBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                var a9 = function (data2) { _this.outValue.emit(false); };
                setTimeout(a9, 1000);
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
    //取消
    CustomAllotDialogComponent.prototype.cancelBtn = function () {
        this.outValue.emit(false);
    };
    //机构树
    CustomAllotDialogComponent.prototype.orgTree = function () {
        this.headerTitle = '机构树';
        this.display = true;
    };
    //机构树回调
    CustomAllotDialogComponent.prototype.treeCall = function (param) {
        this.display = false;
        this.customAllotDialogBean.receiveOrgName = param.orgName;
        this.customAllotDialogBean.receiveOrgId = param.orgId;
        this.queryPeopleById();
    };
    //接收联系人
    CustomAllotDialogComponent.prototype.queryPeopleById = function () {
        var _this = this;
        var param = {
            orgId: this.customAllotDialogBean.receiveOrgId,
            pageSize: 1000000,
            tellerStatus: "0"
        };
        this.httpService.queryTellerByCombConditions(param).subscribe(function (data) {
            if (data.tellerList) {
                _this.peopleList = _this.commfunc.listToLabelvalue(data.tellerList, 'tellerName', 'tellerId');
                _this.receiverName = _this.peopleList[0].value;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomAllotDialogComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('in-value'),
        __metadata("design:type", Object)
    ], CustomAllotDialogComponent.prototype, "inValues", void 0);
    CustomAllotDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-allot-dialog',
            template: __webpack_require__(/*! ./custom-allot-dialog.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot-dialog/custom-allot-dialog.component.html"),
            styles: [__webpack_require__(/*! ./custom-allot-dialog.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot-dialog/custom-allot-dialog.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"]])
    ], CustomAllotDialogComponent);
    return CustomAllotDialogComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12 functions\">\r\n   <!-- 我要分配 -->\r\n    <a [routerLink]=\"['my-allot']\" class=\"change\" [ngClass]=\"{'active':show==1}\" (click)=\"allot(1)\" *ngIf=\"permissionCheck('SID01005_P014')\">我要分配</a>\r\n\r\n   <!-- 我的分配 -->\r\n    <a [routerLink]=\"['mine-allot']\" class=\"change\" [ngClass]=\"{'active':show==2}\" (click)=\"allot(2)\" *ngIf=\"permissionCheck('SID01005_P015')\">我的分配</a>\r\n  </div>\r\n  <div class=\"ui-g-12 module padding-one bgcolor\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0; }\n  .functions .change {\n    display: inline-block;\n    font-size: 15px;\n    height: 40px;\n    line-height: 40px;\n    border-radius: 3px 3px 0 0;\n    color: #929292;\n    padding: 0px 30px;\n    font-weight: bold; }\n  .active {\n  border: none !important;\n  background-color: #f7f7f7 !important;\n  color: #003f5c !important; }\n  .padding-one {\n  padding: 1em; }\n  .bgcolor {\n  background: #f7f7f7; }\n  @media screen and (max-width: 1280px) {\n  .functions {\n    border-bottom: 1px solid #dddddd; }\n  .active {\n    background-color: #e5e6e9 !important; }\n  .bgcolor {\n    background: #e5e6e9; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1hbGxvdC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1tYXJrZXRpbmdcXGN1c3RvbS1hbGxvdFxcY3VzdG9tLWFsbG90LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCQTtFQUNJLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZUFBZSxFQUFBO0VBSG5CO0lBS1EscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBO0VBSXpCO0VBQ0ksdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyx5QkFBeUIsRUFBQTtFQUc3QjtFQUNJLFlBQVksRUFBQTtFQUdoQjtFQUNJLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0k7SUFDSSxnQ0FBZ0MsRUFBQTtFQUVwQztJQUNJLG9DQUFvQyxFQUFBO0VBRXhDO0lBQ0ksbUJBQW1CLEVBQUEsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1tYXJrZXRpbmcvY3VzdG9tLWFsbG90L2N1c3RvbS1hbGxvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC51aS1nIHtcclxuLy8gICAgIC5mdW5jdGlvbnMge1xyXG4vLyAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4vLyAgICAgICAgIC5jaGFuZ2Uge1xyXG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuLy8gICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuLy8gICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbi8vICAgICAgICAgICAgIGNvbG9yOiAjYWFhYWFhO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8g5YiH5o2iXHJcbi5mdW5jdGlvbnMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIC5jaGFuZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xyXG4gICAgICAgIGNvbG9yOiAjOTI5MjkyO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDNmNWMgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZGRpbmctb25lIHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuLmJnY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgIC5mdW5jdGlvbnMge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgfVxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTZlOSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJnY29sb3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlNWU2ZTk7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CustomAllotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAllotComponent", function() { return CustomAllotComponent; });
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



var CustomAllotComponent = /** @class */ (function () {
    function CustomAllotComponent(commfunc, router) {
        this.commfunc = commfunc;
        this.router = router;
    }
    CustomAllotComponent.prototype.ngOnChanges = function () {
    };
    CustomAllotComponent.prototype.ngOnInit = function () {
        var stu_1 = this.commfunc.permissionCheck('SID01005_P014');
        var stu_2 = this.commfunc.permissionCheck('SID01005_P015');
        if (stu_1) {
            this.show = 1;
            this.router.navigate(['/pages/tzb/custom/custom-marketing/cus-allot/my-allot']);
        }
        else if (stu_2) {
            this.show = 2;
            this.router.navigate(['/pages/tzb/custom/custom-marketing/cus-allot/mine-allot']);
        }
    };
    //点击切换
    CustomAllotComponent.prototype.allot = function (num) {
        this.show = num;
    };
    //按钮权限
    CustomAllotComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomAllotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-allot',
            template: __webpack_require__(/*! ./custom-allot.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot.component.html"),
            styles: [__webpack_require__(/*! ./custom-allot.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]],
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomAllotComponent);
    return CustomAllotComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot.module.ts ***!
  \***************************************************************************************/
/*! exports provided: CusAllotModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusAllotModule", function() { return CusAllotModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custom_allot_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-allot.routing */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot.routing.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _custom_allot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-allot.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot.component.ts");
/* harmony import */ var _my_allot_my_allot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-allot/my-allot.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/my-allot/my-allot.component.ts");
/* harmony import */ var _mine_allot_mine_allot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mine-allot/mine-allot.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/mine-allot/mine-allot.component.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _custom_allot_dialog_custom_allot_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-allot-dialog/custom-allot-dialog.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot-dialog/custom-allot-dialog.component.ts");
/* harmony import */ var _custom_contact_contact_plan_add_plan_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../custom-contact/contact-plan/add-plan/add-contact/add-contact.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-contact/contact-plan/add-plan/add-contact/add-contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





 //客户运营平台 http
 //客户分配
 //我要分配
 //我的分配

 //调整联系人关系

/**
 * 客户开立模块
 */
var CusAllotModule = /** @class */ (function () {
    function CusAllotModule() {
    }
    CusAllotModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _custom_allot_routing__WEBPACK_IMPORTED_MODULE_3__["CusAllotRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_9__["FrameworkModule"]
            ],
            declarations: [
                _custom_allot_component__WEBPACK_IMPORTED_MODULE_6__["CustomAllotComponent"],
                _my_allot_my_allot_component__WEBPACK_IMPORTED_MODULE_7__["MyAllotComponent"],
                _mine_allot_mine_allot_component__WEBPACK_IMPORTED_MODULE_8__["MineAllotComponent"],
                _custom_allot_dialog_custom_allot_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CustomAllotDialogComponent"],
                _custom_contact_contact_plan_add_plan_add_contact_add_contact_component__WEBPACK_IMPORTED_MODULE_11__["AddContactComponent"]
            ],
            providers: [
                _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"]
            ]
        })
    ], CusAllotModule);
    return CusAllotModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot.routing.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot.routing.ts ***!
  \****************************************************************************************/
/*! exports provided: routes, CusAllotRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusAllotRouting", function() { return CusAllotRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_allot_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-allot.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/custom-allot.component.ts");
/* harmony import */ var _my_allot_my_allot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-allot/my-allot.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/my-allot/my-allot.component.ts");
/* harmony import */ var _mine_allot_mine_allot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mine-allot/mine-allot.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/mine-allot/mine-allot.component.ts");

 //客户分配
 //我要分配
 //我的分配
/* 客户分配
*
*
*/
var routes = [
    {
        path: '',
        component: _custom_allot_component__WEBPACK_IMPORTED_MODULE_1__["CustomAllotComponent"],
        children: [
            { path: '', redirectTo: 'my-allot', pathMatch: 'full' },
            {
                path: 'my-allot', component: _my_allot_my_allot_component__WEBPACK_IMPORTED_MODULE_2__["MyAllotComponent"],
            },
            {
                path: 'mine-allot', component: _mine_allot_mine_allot_component__WEBPACK_IMPORTED_MODULE_3__["MineAllotComponent"],
            },
        ]
    },
];
var CusAllotRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/mine-allot/bean/myDistributeQry.bean.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-allot/mine-allot/bean/myDistributeQry.bean.ts ***!
  \********************************************************************************************************/
/*! exports provided: MyDistributeQryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDistributeQryBean", function() { return MyDistributeQryBean; });
var MyDistributeQryBean = /** @class */ (function () {
    function MyDistributeQryBean() {
    }
    return MyDistributeQryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/mine-allot/mine-allot.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-allot/mine-allot/mine-allot.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g padding-zero module\">\r\n  <div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'我的分配'\"></header-title>\r\n  </div>\r\n  <div class=\"ui-g-12 contactCsstop\">\r\n    <div class=\"ui-g-2 text-right\">\r\n      <label>接收机构：</label>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <input type=\"text\" pInputText class=\"mine-allot-i\" [(ngModel)]=\"myDistributeQryBean.receiveOrgName\" disabled/>\r\n    </div>\r\n    <div class=\"ui-g-2 text-right\">\r\n      <label>接收人：</label>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <p-dropdown [options]=\"peopleList\" class=\"mine-allot-p\" [(ngModel)]=\"receiverName\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 contactCss\">\r\n    <div class=\"ui-g-2 text-right\">\r\n      <label>客户号：</label>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <input type=\"text\" pInputText class=\"mine-allot-i\" [(ngModel)]=\"myDistributeQryBean.custNo\"/>\r\n    </div>\r\n    <div class=\"ui-g-2 text-right\">\r\n      <label>客户姓名：</label>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <input type=\"text\" pInputText class=\"mine-allot-i\" [(ngModel)]=\"myDistributeQryBean.custName\"/>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 contactCss\">\r\n      <div class=\"ui-g-2 text-right\">\r\n        <label>分配时间：</label>\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <p-calendar class=\"mine-allot-calendar\" [(ngModel)]=\"startDate\" [maxDate]=\"endDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n          [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showDataStart()\"></p-calendar>\r\n        至\r\n        <p-calendar class=\"mine-allot-calendar\" [(ngModel)]=\"endDate\" [minDate]=\"startDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n          [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showDataEnd()\"></p-calendar>\r\n      </div>\r\n    </div>\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"查询\" class=\"searchBtn\" (click)=\"querySecle()\"></button>\r\n    <button pButton type=\"button\" label=\"重置\" class=\"resetBtn\" (click)=\"resetBtn()\"></button>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 table base-table\">\r\n    <p-dataTable [value]=\"tableData\" [emptyMessage]=\"tabMesg\">\r\n      <p-column field=\"custNo\" header=\"客户号\">\r\n        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          <a href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}\" target=\"_blank\">{{col.custNo}}</a>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n      <p-column field=\"receiveOrgName\" header=\"接收机构\"></p-column>\r\n      <p-column field=\"receiverName\" header=\"接收人\"></p-column>\r\n      <p-column field=\"createrName\" header=\"分配人\"></p-column>\r\n      <p-column field=\"createDate\" header=\"分配时间\"></p-column>\r\n    </p-dataTable>\r\n    <p-paginator rows=\"{{myDistributeQryBean.pageSize}}\" [first]=\"first\" totalRecords=\"{{totalNum}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n      (onPageChange)=\"paginate($event)\"></p-paginator>\r\n  </div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/mine-allot/mine-allot.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-allot/mine-allot/mine-allot.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-right {\n  text-align: right;\n  line-height: 25px; }\n\n.btn {\n  text-align: center; }\n\n.table {\n  text-align: center; }\n\na {\n  color: #0094D2; }\n\n.contactCss {\n  margin-top: -14px; }\n\n.contactCsstop {\n  margin-top: 10px; }\n\n.mine-allot-i {\n  width: 50% !important;\n  min-width: 284px !important; }\n\n:host/deep/ .mine-allot-calendar .ui-calendar {\n  width: 23.2%; }\n\n:host /deep/ .mine-allot-p .ui-dropdown {\n  width: 50% !important;\n  min-width: 284px !important; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .mine-allot-calendar .ui-calendar {\n    width: 30%; }\n  :host /deep/ .mine-allot-p .ui-dropdown {\n    width: 76% !important; }\n  .mine-allot-i {\n    width: 76% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1hbGxvdC9taW5lLWFsbG90L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLW1hcmtldGluZ1xcY3VzdG9tLWFsbG90XFxtaW5lLWFsbG90XFxtaW5lLWFsbG90LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxxQkFBcUI7RUFDckIsMkJBQTJCLEVBQUE7O0FBSS9CO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLHFCQUFxQjtFQUNyQiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFFSTtJQUNJLFVBQVUsRUFBQTtFQUVkO0lBQ0kscUJBQXFCLEVBQUE7RUFFekI7SUFDSSxxQkFBcUIsRUFBQSxFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLW1hcmtldGluZy9jdXN0b20tYWxsb3QvbWluZS1hbGxvdC9taW5lLWFsbG90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICMwMDk0RDI7XHJcbn1cclxuXHJcbi5jb250YWN0Q3NzIHtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG59XHJcblxyXG4uY29udGFjdENzc3RvcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubWluZS1hbGxvdC1pIHtcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMjg0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8g5p+l6K+i6IyD5Zu0IOaXpeacn+e7hOS7tlxyXG46aG9zdC9kZWVwLyAubWluZS1hbGxvdC1jYWxlbmRhciAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDIzLjIlO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm1pbmUtYWxsb3QtcCAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAyODRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgLy8g5p+l6K+i6IyD5Zu0IOaXpeacn+e7hOS7tlxyXG4gICAgOmhvc3QvZGVlcC8gLm1pbmUtYWxsb3QtY2FsZW5kYXIgLnVpLWNhbGVuZGFyIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG4gICAgOmhvc3QgL2RlZXAvIC5taW5lLWFsbG90LXAgLnVpLWRyb3Bkb3duIHtcclxuICAgICAgICB3aWR0aDogNzYlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWluZS1hbGxvdC1pIHtcclxuICAgICAgICB3aWR0aDogNzYlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/mine-allot/mine-allot.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-allot/mine-allot/mine-allot.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: MineAllotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MineAllotComponent", function() { return MineAllotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _bean_myDistributeQry_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bean/myDistributeQry.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/mine-allot/bean/myDistributeQry.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MineAllotComponent = /** @class */ (function () {
    function MineAllotComponent(commfunc, router, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.myDistributeQryBean = new _bean_myDistributeQry_bean__WEBPACK_IMPORTED_MODULE_6__["MyDistributeQryBean"]();
        this.startDate = null;
        this.endDate = null;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_CN"];
        this.msgs = [];
        this.totalNum = 0;
        this.tableData = [];
        this.first = 0; //分页控制
        this.receiverName = '';
        this.userId = '';
        this.orgId = '';
        this.userName = '';
        this.orgName = '';
        this.user1 = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.user = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (this.user1.userId) {
            this.userId = this.user1.userId;
        }
        if (this.user1.orgId) {
            this.orgId = this.user1.orgId;
        }
        if (this.user.userName) {
            this.userName = this.user.userName;
        }
        if (this.user.orgName) {
            this.orgName = this.user.orgName;
        }
        this.myDistributeQryBean.receiveOrgName = this.orgName;
        this.myDistributeQryBean.receiveOrgId = this.orgId;
        this.queryPeopleById();
    }
    MineAllotComponent.prototype.ngOnInit = function () {
        this.myDistributeQryBean.pageSize = 10;
        this.myDistributeQryBean.pageNum = 1;
    };
    //点击查询-初始化
    MineAllotComponent.prototype.querySecle = function () {
        this.myDistributeQryBean.pageSize = 10;
        this.myDistributeQryBean.pageNum = 1;
        this.first = 0;
        this.searchBtn();
    };
    //分配时间：开始日期
    MineAllotComponent.prototype.showDataStart = function () {
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
    //分配时间：结束日期
    MineAllotComponent.prototype.showDataEnd = function () {
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
    // 我的分配 查询
    MineAllotComponent.prototype.searchBtn = function () {
        var _this = this;
        if (this.myDistributeQryBean.custNo == '') {
            this.myDistributeQryBean.custNo = undefined;
        }
        if (this.myDistributeQryBean.custName == '') {
            this.myDistributeQryBean.custName = undefined;
            this.myDistributeQryBean.custName_LIKE = undefined;
        }
        if (this.myDistributeQryBean.custName != undefined) {
            this.myDistributeQryBean.custName_LIKE = '%' + this.myDistributeQryBean.custName + '%';
        }
        if (this.peopleList) {
            for (var _i = 0, _a = this.peopleList; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.value == this.receiverName) {
                    this.myDistributeQryBean.receiverName = i.label;
                    this.myDistributeQryBean.receiver = this.receiverName;
                    continue;
                }
            }
        }
        if (this.myDistributeQryBean.receiver == '') {
            this.myDistributeQryBean.receiverName = undefined;
            this.myDistributeQryBean.receiver = undefined;
        }
        this.myDistributeQryBean.creater = this.userId;
        this.myDistributeQryBean.operationType = '1';
        this.myDistributeQryBean.createDate_GE = this.commfunc.transDateN(this.startDate);
        this.myDistributeQryBean.createDate_LE = this.commfunc.transDateN(this.endDate);
        if (this.myDistributeQryBean.createDate_GE == "" || this.myDistributeQryBean.createDate_GE == null) {
            this.myDistributeQryBean.createDate_GE = undefined;
        }
        if (this.myDistributeQryBean.createDate_LE == "" || this.myDistributeQryBean.createDate_LE == null) {
            this.myDistributeQryBean.createDate_LE = undefined;
        }
        this.httpService.queryMainContactChangeByAnyKey(this.myDistributeQryBean).subscribe(function (data) {
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
    //机构树
    MineAllotComponent.prototype.orgTree = function () {
        this.headerTitle = '机构树';
        this.display = true;
    };
    //机构树回调
    MineAllotComponent.prototype.treeCall = function (param) {
        this.display = false;
        this.myDistributeQryBean.receiveOrgName = param.orgName;
        this.myDistributeQryBean.receiveOrgId = param.orgId;
        this.queryPeopleById();
    };
    //接收联系人
    MineAllotComponent.prototype.queryPeopleById = function () {
        var _this = this;
        var param = {
            orgId: this.myDistributeQryBean.receiveOrgId,
            pageSize: 1000000
        };
        this.httpService.queryTellerByCombConditions(param).subscribe(function (data) {
            if (data.tellerList) {
                _this.peopleList = _this.commfunc.listToLabelvalue(data.tellerList, 'tellerName', 'tellerId');
                _this.peopleList.unshift({ label: "请选择", value: '' });
            }
        });
    };
    //分页
    MineAllotComponent.prototype.paginate = function (event) {
        this.myDistributeQryBean.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.myDistributeQryBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.myDistributeQryBean.pageSize;
        this.searchBtn();
    };
    //我的分配 重置
    MineAllotComponent.prototype.resetBtn = function () {
        this.myDistributeQryBean = new _bean_myDistributeQry_bean__WEBPACK_IMPORTED_MODULE_6__["MyDistributeQryBean"]();
        this.myDistributeQryBean.pageSize = 10;
        this.myDistributeQryBean.pageNum = 1;
        this.startDate = null;
        this.endDate = null;
        this.first = 0;
        this.peopleList = [];
        this.myDistributeQryBean.receiveOrgName = this.orgName;
        this.myDistributeQryBean.receiveOrgId = this.orgId;
        this.queryPeopleById();
    };
    // 客户号跳转360
    MineAllotComponent.prototype.toCustView = function (data) {
        this.commfunc.setSessionData('custNo', data.custNo);
        this.router.navigate(['pages/custom-view']);
    };
    MineAllotComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    MineAllotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mine-allot',
            template: __webpack_require__(/*! ./mine-allot.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/mine-allot/mine-allot.component.html"),
            styles: [__webpack_require__(/*! ./mine-allot.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/mine-allot/mine-allot.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"]])
    ], MineAllotComponent);
    return MineAllotComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/my-allot/bean/customAllot.bean.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-allot/my-allot/bean/customAllot.bean.ts ***!
  \**************************************************************************************************/
/*! exports provided: CustomAllotBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAllotBean", function() { return CustomAllotBean; });
var CustomAllotBean = /** @class */ (function () {
    function CustomAllotBean() {
    }
    return CustomAllotBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/my-allot/my-allot.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-allot/my-allot/my-allot.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g padding-zero module\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<header-title [Info]=\"'分配列表'\"></header-title>\r\n\t</div>\r\n\t<div class=\"ui-g-12 table base-table\">\r\n\t\t<p-dataTable [value]=\"tableData\" [emptyMessage]=\"tabMesg\">\r\n\t\t\t<p-column>\r\n\t\t\t\t<ng-template let-index=\"rowIndex\" pTemplate=\"header\">\r\n\t\t\t\t\t<p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkAll\" binary=\"false\" (click)=\"checkAllClick($event)\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<p-checkbox [(ngModel)]=\"col.checkBox\" (click)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custNo\" header=\"客户号\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<a href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}\" target=\"_blank\">{{col.custNo}}</a>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"custName\" header=\"客户姓名\"></p-column>\r\n\t\t\t<p-column field=\"balDlyAvgByYear\" header=\"存款日均(本年)\"></p-column>\r\n\t\t\t<p-column field=\"loanDlyAvgByYear\" header=\"贷款日均(本年)\"></p-column>\r\n\t\t\t<p-column field=\"isHoldCrdCard\" header=\"当前是否持有信用卡\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t{{col.isHoldCrdCard|codeValuePie:isHoldCrdCard}}\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"finBal\" header=\"理财余额\"></p-column>\r\n\t\t\t<p-column field=\"ownerManagerName\" header=\"主联系人\"></p-column>\r\n\t\t\t<p-column field=\"\" header=\"操作\" *ngIf=\"permissionCheck('SID01005_P014_P001')\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n\t\t\t\t\t<span (click)=\"doAllot(col)\" class=\"tabelDealIco\">分配</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t</p-dataTable>\r\n\t\t<p-paginator rows=\"{{customAllotBean.pageSize}}\" [first]=\"first\" totalRecords=\"{{totalNum}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n\t\t    (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn\" *ngIf=\"permissionCheck('SID01005_P014_P002')\">\r\n\t\t<button pButton type=\"button\" label=\"批量分配\" (click)=\"doAllot('more')\"></button>\r\n\t</div>\r\n</div>\r\n\r\n<!-- 弹出框 -->\r\n<p-dialog [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 (onHide)=\"onHideClose()\">\r\n\t<p-header>\r\n\t\t管户关系调入\r\n\t</p-header>\r\n\t<div>\r\n\t\t<app-custom-allot-dialog *ngIf=\"display\" [in-value]=\"inValue\" (outValue)=\"doMoreAllotCall($event)\"></app-custom-allot-dialog>\r\n\t</div>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/my-allot/my-allot.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-allot/my-allot/my-allot.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-right {\n  text-align: right; }\n\n.btn {\n  text-align: center; }\n\n.table {\n  text-align: center; }\n\na {\n  color: #0094D2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1hbGxvdC9teS1hbGxvdC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1tYXJrZXRpbmdcXGN1c3RvbS1hbGxvdFxcbXktYWxsb3RcXG15LWFsbG90LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksY0FBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1hbGxvdC9teS1hbGxvdC9teS1hbGxvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LXJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGFibGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiAjMDA5NEQyIDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/my-allot/my-allot.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-allot/my-allot/my-allot.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MyAllotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAllotComponent", function() { return MyAllotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_customAllot_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/customAllot.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/my-allot/bean/customAllot.bean.ts");
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






var MyAllotComponent = /** @class */ (function () {
    function MyAllotComponent(confirmationService, commfunc, httpService) {
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"]; //表格中无数据时显示的内容
        this.customAllotBean = new _bean_customAllot_bean__WEBPACK_IMPORTED_MODULE_4__["CustomAllotBean"]();
        this.first = 0; //分页控制
        this.totalNum = 0;
        this.msgs = [];
        this.tableData = [];
        this.display = false;
        this.checkAll = false;
        this.checkBox = [];
        this.chooseData = [];
        this.isHoldCrdCard = [];
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.isHoldCrdCard = this.code['IsHoldCrdCard'];
    }
    MyAllotComponent.prototype.ngOnInit = function () {
        this.customAllotBean.pageSize = 10;
        this.customAllotBean.pageNum = 1;
        this.querySecle();
    };
    //码值
    MyAllotComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    MyAllotComponent.prototype.querySecle = function () {
        this.customAllotBean.pageSize = 10;
        this.customAllotBean.pageNum = 1;
        this.first = 0;
        this.doQuery();
    };
    //查询
    MyAllotComponent.prototype.doQuery = function () {
        var _this = this;
        this.doClearCheck();
        this.customAllotBean.operationType = '1';
        this.httpService.distributeCustQry(this.customAllotBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.custList;
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
    //清除全选勾选框+单选框
    MyAllotComponent.prototype.doClearCheck = function () {
        this.chooseData = [];
        this.checkAll = false;
    };
    //分页
    MyAllotComponent.prototype.paginate = function (event) {
        this.customAllotBean.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.customAllotBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.customAllotBean.pageSize;
        this.doQuery();
    };
    //全选按钮
    MyAllotComponent.prototype.checkAllClick = function () {
        if (this.tableData) {
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
        }
    };
    //单选按钮
    MyAllotComponent.prototype.checkBoxClick = function (i, data) {
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
    // 分配模态框
    MyAllotComponent.prototype.doAllot = function (param) {
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
                    type: '1'
                };
                this.display = true;
            }
        }
        else {
            this.inValue = {
                invalue: param,
                type: '1'
            };
            this.display = true;
        }
    };
    //分配模态框关闭
    MyAllotComponent.prototype.doMoreAllotCall = function () {
        document.body.style.overflow = 'auto';
        this.display = false;
        this.querySecle();
    };
    MyAllotComponent.prototype.onHideClose = function () {
        document.body.style.overflow = 'auto';
        this.display = false;
        this.querySecle();
    };
    //按钮权限
    MyAllotComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    MyAllotComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    MyAllotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-allot',
            template: __webpack_require__(/*! ./my-allot.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/my-allot/my-allot.component.html"),
            styles: [__webpack_require__(/*! ./my-allot.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-allot/my-allot/my-allot.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        })
        /**
         * 我要分配
         */
        ,
        __metadata("design:paramtypes", [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"]])
    ], MyAllotComponent);
    return MyAllotComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-contact/contact-plan/add-plan/add-contact/add-contact.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-contact/contact-plan/add-plan/add-contact/add-contact.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basis-group\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-2 style-center\">客户号：</div>\r\n                <div class=\"ui-g-10\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"updatePlanBean.custNo\" disabled>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-2 style-center\">客户名称：</div>\r\n                <div class=\"ui-g-10\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"updatePlanBean.custName\"disabled>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-2 style-center\">联系主题：</div>\r\n                <div class=\"ui-g-10\">\r\n                    <p-dropdown [options]=\"lxzt\" [style]=\"{'width':'121px'}\" [(ngModel)]=\"updatePlanBean.contactTheme\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-2 style-center\">联系方式：</div>\r\n                <div class=\"ui-g-10\">\r\n                    <p-dropdown [options]=\"contactWay\" [style]=\"{'width':'121px'}\" [(ngModel)]=\"updatePlanBean.contactWay\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-2 style-center\">联系人工号：</div>\r\n                <div class=\"ui-g-10\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"updatePlanBean.contactsNo\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-2 style-center\">联系人名称：</div>\r\n                <div class=\"ui-g-10\">\r\n                    <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"updatePlanBean.contactsName\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-2 style-center\">计划联系时间：</div>\r\n                <div class=\"ui-g-10\">\r\n                    <p-calendar [(ngModel)]=\"contactDate\" [showIcon]=\"true\" styleClass=\"range\" (onSelect)=\"showData()\" dateFormat=\"yy-mm-dd\"\r\n                        [locale]=\"CALENDAR_CN\"></p-calendar>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 btn-return\">\r\n            <button pButton type=\"button\" label=\"提交\" (click)=\"submit()\"></button>\r\n            <button pButton type=\"button\" label=\"取消\" (click)=\"close()\"></button>\r\n        </div>\r\n    </div>\r\n    <!-- 提示信息 -->\r\n    <p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-contact/contact-plan/add-plan/add-contact/add-contact.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-contact/contact-plan/add-plan/add-contact/add-contact.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basis-group {\n  font-size: 14px; }\n  .basis-group .ui-g {\n    padding-bottom: 1px; }\n  .basis-group .btn-return {\n    text-align: center; }\n  .basis-group .table {\n    text-align: center; }\n  .basis-group .style-right {\n    text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1jb250YWN0L2NvbnRhY3QtcGxhbi9hZGQtcGxhbi9hZGQtY29udGFjdC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1tYXJrZXRpbmdcXGN1c3RvbS1jb250YWN0XFxjb250YWN0LXBsYW5cXGFkZC1wbGFuXFxhZGQtY29udGFjdFxcYWRkLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUE7RUFEbkI7SUFHUSxtQkFBbUIsRUFBQTtFQUgzQjtJQU1RLGtCQUFrQixFQUFBO0VBTjFCO0lBU1Esa0JBQWtCLEVBQUE7RUFUMUI7SUFZUSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLW1hcmtldGluZy9jdXN0b20tY29udGFjdC9jb250YWN0LXBsYW4vYWRkLXBsYW4vYWRkLWNvbnRhY3QvYWRkLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaXMtZ3JvdXAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLnVpLWcge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLXJldHVybiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRhYmxle1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zdHlsZS1yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-contact/contact-plan/add-plan/add-contact/add-contact.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-contact/contact-plan/add-plan/add-contact/add-contact.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: AddContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContactComponent", function() { return AddContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_contact_contact_plan_update_plan_bean_update_plan_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-contact/contact-plan/update-plan/bean/update-plan.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-contact/contact-plan/update-plan/bean/update-plan.bean.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddContactComponent = /** @class */ (function () {
    function AddContactComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.kindDo = '';
        this.updatePlanBean = new app_pages_tzb_custom_custom_marketing_custom_contact_contact_plan_update_plan_bean_update_plan_bean__WEBPACK_IMPORTED_MODULE_2__["UpdatePlanBean"]();
        this.lxzt = [];
        this.contactWay = [];
        this.contactOrg = [];
        this.CALENDAR_CN = [];
        this.msgs = [];
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.lxzt = this.code['Lxzt'];
        this.contactWay = this.code['ContactWays'];
        this.contactOrg = this.code['ContactOrg'];
        this.CALENDAR_CN = {
            "firstDayOfWeek": 0,
            "dayNames": ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            "dayNamesShort": ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            "dayNamesMin": ["日", "一", "二", "三", "四", "五", "六"],
            "monthNames": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            "monthNamesShort": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
        };
    }
    AddContactComponent.prototype.ngOnInit = function () {
    };
    AddContactComponent.prototype.ngOnChanges = function () {
        this.updatePlanBean = this.inValue;
        this.contactDate = new Date(this.updatePlanBean.contactDate);
    };
    //码值
    AddContactComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //提交-保存
    AddContactComponent.prototype.submit = function () {
        var _this = this;
        var ob = this.httpService.updateCustContactProgram(this.updatePlanBean);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.outValue.emit(false);
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
    //关闭
    AddContactComponent.prototype.close = function () {
        this.outValue.emit(false);
    };
    //日期转换
    AddContactComponent.prototype.showData = function () {
        this.updatePlanBean.contactDate = this.commfunc.transDateN(this.contactDate);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AddContactComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('in-value'),
        __metadata("design:type", Object)
    ], AddContactComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('key-label'),
        __metadata("design:type", Object)
    ], AddContactComponent.prototype, "keyLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('kind-do'),
        __metadata("design:type", String)
    ], AddContactComponent.prototype, "kindDo", void 0);
    AddContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-contact',
            template: __webpack_require__(/*! ./add-contact.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-contact/contact-plan/add-plan/add-contact/add-contact.component.html"),
            styles: [__webpack_require__(/*! ./add-contact.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-contact/contact-plan/add-plan/add-contact/add-contact.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], AddContactComponent);
    return AddContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-contact/contact-plan/update-plan/bean/update-plan.bean.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-contact/contact-plan/update-plan/bean/update-plan.bean.ts ***!
  \********************************************************************************************************************/
/*! exports provided: UpdatePlanBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePlanBean", function() { return UpdatePlanBean; });
var UpdatePlanBean = /** @class */ (function () {
    function UpdatePlanBean() {
    }
    return UpdatePlanBean;
}());



/***/ })

}]);
//# sourceMappingURL=custom-allot-custom-allot-module.js.map