(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["power-manage-power-manage-module"],{

/***/ "./src/app/pages/tzb/common/base-manage/power-manage/bean/power-manage.bean.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/power-manage/bean/power-manage.bean.ts ***!
  \*************************************************************************************/
/*! exports provided: PowerManageBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerManageBean", function() { return PowerManageBean; });
var PowerManageBean = /** @class */ (function () {
    function PowerManageBean() {
        // startRow:string;//起始行数
        // rowNum:string;//每页行数
        this.permissionType = 'FEATURES';
    }
    return PowerManageBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/power-manage/power-add-manage/power-add-manage.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/power-manage/power-add-manage/power-add-manage.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userform\">\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12\" style=\"text-align:center\">\r\n            <label appValidation>权限编号：</label>\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"powerManageBean.permissionsId\" formControlName=\"permissionsId\" name=\"permissionsId\">\r\n            <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['permissionsId'].valid&&userform.controls['permissionsId'].dirty\">\r\n                <!-- 请输入6位至20位以上大写或小写字母或数字或下划线 -->\r\n                <p [hidden]=\"!userform.hasError('required','permissionsId')\"> 权限编号不能为空！</p>\r\n                <p [hidden]=\"!userform.hasError('pattern','permissionsId')\"> 请输入1位至20位以上大写或小写字母或数字或下划线!</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12\" style=\"text-align:center\">\r\n            <label appValidation>权限描述：</label>\r\n            <!-- <input id=\"input\" type=\"textare\" pInputTextarea style=\"height:60px;\" [(ngModel)]=\"powerManageBean.permissionsDescription\"\r\n                formControlName=\"permissionsDescription\" name=\"permissionsDescription\"> -->\r\n            <textarea [(ngModel)]=\"powerManageBean.permissionsDescription\" formControlName=\"permissionsDescription\" name=\"permissionsDescription\"\r\n                pInputTextarea rows=\"3\" cols=\"20\" style=\"overflow:auto\"></textarea>\r\n            <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['permissionsDescription'].valid&&userform.controls['permissionsDescription'].dirty\">\r\n                <p [hidden]=\"!userform.hasError('pattern','permissionsDescription')\"> 权限描述必须为1-60位中文且不能有空格！</p>\r\n                <p [hidden]=\"!userform.hasError('required','permissionsDescription')\"> 权限描述不能为空！</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2\"></div>\r\n            <div class=\"ui-g-4\" style=\"text-align:right;\">\r\n                <button pButton type=\"button\" label=\"确定\" (click)='preserveClick()'></button>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <button pButton type=\"button\" label=\"取消\" (click)='modifyCloseBtn()'></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/power-manage/power-add-manage/power-add-manage.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/power-manage/power-add-manage/power-add-manage.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input, textarea {\n  width: 30% !important; }\n\nbutton {\n  margin-top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9wb3dlci1tYW5hZ2UvcG93ZXItYWRkLW1hbmFnZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFxwb3dlci1tYW5hZ2VcXHBvd2VyLWFkZC1tYW5hZ2VcXHBvd2VyLWFkZC1tYW5hZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9wb3dlci1tYW5hZ2UvcG93ZXItYWRkLW1hbmFnZS9wb3dlci1hZGQtbWFuYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCx0ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5idXR0b257XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/power-manage/power-add-manage/power-add-manage.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/power-manage/power-add-manage/power-add-manage.ts ***!
  \************************************************************************************************/
/*! exports provided: PowerAddManage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerAddManage", function() { return PowerAddManage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var _bean_power_manage_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bean/power-manage.bean */ "./src/app/pages/tzb/common/base-manage/power-manage/bean/power-manage.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PowerAddManage = /** @class */ (function () {
    function PowerAddManage(commonHttpService, confirmationService, fb) {
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        this.powerManageBean = new _bean_power_manage_bean__WEBPACK_IMPORTED_MODULE_4__["PowerManageBean"]();
    }
    PowerAddManage.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'permissionsId': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[\w]{1,20}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'permissionsDescription': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^([\u4E00-\u9FA5\(\)\（\）]){1,60}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    // 确定
    PowerAddManage.prototype.preserveClick = function () {
        var _this = this;
        this.powerManageBean.permissionType = 'FEATURES';
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
        // ;
        this.commonHttpService.createPermissions(this.powerManageBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.outValue.emit(false);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    //取消
    PowerAddManage.prototype.modifyCloseBtn = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PowerAddManage.prototype, "outValue", void 0);
    PowerAddManage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'power-add-manage',
            template: __webpack_require__(/*! ./power-add-manage.html */ "./src/app/pages/tzb/common/base-manage/power-manage/power-add-manage/power-add-manage.html"),
            styles: [__webpack_require__(/*! ./power-add-manage.scss */ "./src/app/pages/tzb/common/base-manage/power-manage/power-add-manage/power-add-manage.scss")],
            providers: [_http_common_http_service__WEBPACK_IMPORTED_MODULE_3__["CommonHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_3__["CommonHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], PowerAddManage);
    return PowerAddManage;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/power-manage/power-copy/power-copy.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/power-manage/power-copy/power-copy.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g\">\r\n    <div class=\"ui-g-12\" style=\"text-align:center\" [formGroup]=\"userform\">\r\n      <label appValidation>权限编号：</label>\r\n      <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"powerManageBean.permissionsId\"  formControlName=\"permissionsId\"\r\n        name=\"permissionsId\">\r\n      <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['permissionsId'].valid&&userform.controls['permissionsId'].dirty\">\r\n        <!-- 请输入6位至20位以上大写或小写字母或数字或下划线 -->\r\n        <p [hidden]=\"!userform.hasError('required','permissionsId')\"> 权限编号不能为空！</p>\r\n        <p [hidden]=\"!userform.hasError('pattern','permissionsId')\"> 请输入1位至20位以上大写或小写字母或数字或下划线!</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"text-align:center\" [formGroup]=\"userform\">\r\n      <label appValidation>权限描述：</label>\r\n      <!-- <input id=\"input\" type=\"textare\" size=\"20\" pInputTextarea rows=\"5\" cols=\"35\" [(ngModel)]=\"powerManageBean.permissionsDescription\" formControlName=\"permissionsDescription\" name=\"permissionsDescription\"> -->\r\n      <textarea [(ngModel)]=\"powerManageBean.permissionsDescription\" formControlName=\"permissionsDescription\" name=\"permissionsDescription\"\r\n        pInputTextarea rows=\"3\" cols=\"20\" style=\"overflow:auto\"></textarea>\r\n      <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['permissionsDescription'].valid&&userform.controls['permissionsDescription'].dirty\">\r\n        <p [hidden]=\"!userform.hasError('pattern','permissionsDescription')\"> 权限描述必须为1-60位中文且不能有空格！</p>\r\n        <p [hidden]=\"!userform.hasError('required','permissionsDescription')\">权限描述不能为空！</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-g-offset-4\">\r\n    <p-checkbox value=\"是否复制权限关系\" label=\"是否复制权限关系\" (onChange)='onChanges($event)'></p-checkbox>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g-12 btn\">\r\n  <button pButton type=\"button\" (click)='copyClick()' label=\"确定\"></button>\r\n  <button pButton type=\"button\" (click)='closeClick()' label=\"取消\"></button>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/power-manage/power-copy/power-copy.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/power-manage/power-copy/power-copy.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input, textarea {\n  width: 48%; }\n\nlabel {\n  display: inline-block;\n  width: 50%;\n  text-align: right; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9wb3dlci1tYW5hZ2UvcG93ZXItY29weS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFxwb3dlci1tYW5hZ2VcXHBvd2VyLWNvcHlcXHBvd2VyLWNvcHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVLEVBQUE7O0FBRWQ7RUFDSSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jb21tb24vYmFzZS1tYW5hZ2UvcG93ZXItbWFuYWdlL3Bvd2VyLWNvcHkvcG93ZXItY29weS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LHRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDQ4JTtcclxufVxyXG5sYWJlbHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/power-manage/power-copy/power-copy.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/power-manage/power-copy/power-copy.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PowerCopyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerCopyComponent", function() { return PowerCopyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var _bean_power_manage_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bean/power-manage.bean */ "./src/app/pages/tzb/common/base-manage/power-manage/bean/power-manage.bean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PowerCopyComponent = /** @class */ (function () {
    function PowerCopyComponent(commonHttpService, confirmationService, fb) {
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        //实体
        this.powerManageBean = new _bean_power_manage_bean__WEBPACK_IMPORTED_MODULE_3__["PowerManageBean"]();
        this.isCopyFlag = 'N'; //是否复制权限关系
    }
    PowerCopyComponent.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'permissionsId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[\w]{1,20}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'permissionsDescription': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[\u4E00-\u9FA5\(\)\（\）]{1,60}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        this.powerManageBean = this.inValue;
        this.copyPermissionsId = this.powerManageBean.permissionsId;
    };
    //勾选复制权限事件
    PowerCopyComponent.prototype.onChanges = function (event) {
        if (event) {
            this.isCopyFlag = 'Y';
        }
        else {
            this.isCopyFlag = 'N';
        }
    };
    PowerCopyComponent.prototype.copyClick = function () {
        var _this = this;
        //表单校验
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        var params = {
            copyPermissionsId: this.copyPermissionsId,
            isCopyFlag: this.isCopyFlag,
            permissionsId: this.powerManageBean.permissionsId,
            permissionsDescription: this.powerManageBean.permissionsDescription,
            permissionType: "FEATURES"
        };
        this.commonHttpService.copyPermissions(params).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: "复制成功" });
                _this.outValue.emit({
                    display: false,
                    msg: _this.msgs
                });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    PowerCopyComponent.prototype.closeClick = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PowerCopyComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PowerCopyComponent.prototype, "outValue", void 0);
    PowerCopyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-power-copy',
            template: __webpack_require__(/*! ./power-copy.component.html */ "./src/app/pages/tzb/common/base-manage/power-manage/power-copy/power-copy.component.html"),
            styles: [__webpack_require__(/*! ./power-copy.component.scss */ "./src/app/pages/tzb/common/base-manage/power-manage/power-copy/power-copy.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], PowerCopyComponent);
    return PowerCopyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/power-manage/power-list/power-list.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/power-manage/power-list/power-list.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <p-tree [value]=\"treeList\">\r\n        <ng-template let-node pTemplate=\"default\"> \r\n                <p-checkbox (onChange)=\"onChange(node)\" name=\"group1\" value={{node.data}} label={{node.label}} [(ngModel)]=\"selectedList\"></p-checkbox>\r\n        </ng-template>\r\n    </p-tree>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-6\" style=\"text-align:right;\">\r\n            <button pButton type=\"button\" label=\"保存\" (click)=\"saveClick()\"></button>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n            <button pButton type=\"button\" label=\"取消\"  (click)=\"cancelClick()\"></button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/power-manage/power-list/power-list.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/power-manage/power-list/power-list.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ui-tree .ui-treenode-icon {\n  /* display: inline-block; */\n  /* vertical-align: middle; */\n  width: 0px; }\n\n:host /deep/ .fa-caret-down:before {\n  content: \"remove\"; }\n\n:host /deep/ .fa-caret-right:before {\n  content: \"add\"; }\n\n.isred {\n  background-color: red; }\n\n:host /deep/ .ui-widget-content {\n  background-color: #eee !important; }\n\n:host /deep/ .ui-tree .ui-treenode-content .ui-chkbox {\n  margin: 2px 1.25em !important; }\n\n:host /deep/ .ui-tree {\n  width: 100%; }\n\n:host /deep/ .ui-tree .ui-tree-container {\n  height: 600px; }\n\n:host /deep/ .ui-tree .ui-treenode-icon {\n  /* display: inline-block; */\n  /* vertical-align: middle; */\n  width: 0px; }\n\n:host /deep/ .fa-caret-down:before {\n  content: \"remove\";\n  border: 1px solid #19b0c8;\n  font-size: 18px;\n  color: #666666; }\n\n:host /deep/ .fa-caret-right:before {\n  content: \"add\";\n  color: #666666;\n  font-size: 18px;\n  border: 1px solid #19b0c8; }\n\n.isred {\n  background-color: red; }\n\n:host /deep/ .ui-widget-content {\n  background-color: #eee !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9wb3dlci1tYW5hZ2UvcG93ZXItbGlzdC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFxwb3dlci1tYW5hZ2VcXHBvd2VyLWxpc3RcXHBvd2VyLWxpc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFVLEVBQUE7O0FBRVo7RUFDRyxpQkFBaUIsRUFBQTs7QUFHcEI7RUFDRyxjQUFjLEVBQUE7O0FBRWpCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsaUNBQWlDLEVBQUE7O0FBRW5DO0VBQ0UsNkJBQTZCLEVBQUE7O0FBR2pDO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBRUksYUFBYSxFQUFBOztBQUdqQjtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFVLEVBQUE7O0FBRVo7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBRXpCLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCLEVBQUE7O0FBSTNCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsaUNBQWlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY29tbW9uL2Jhc2UtbWFuYWdlL3Bvd2VyLW1hbmFnZS9wb3dlci1saXN0L3Bvd2VyLWxpc3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IC9kZWVwLy51aS10cmVlIC51aS10cmVlbm9kZS1pY29uIHtcclxuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAgIC8qIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7ICovXHJcbiAgICB3aWR0aDogMHB4O1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8uZmEtY2FyZXQtZG93bjpiZWZvcmUge1xyXG4gICAgIGNvbnRlbnQ6IFwicmVtb3ZlXCI7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IC9kZWVwLyAuZmEtY2FyZXQtcmlnaHQ6YmVmb3JlIHtcclxuICAgICBjb250ZW50OiBcImFkZFwiO1xyXG4gIH1cclxuICAuaXNyZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IC9kZWVwLyAgLnVpLXdpZGdldC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC51aS10cmVlIC51aS10cmVlbm9kZS1jb250ZW50IC51aS1jaGtib3gge1xyXG4gICAgbWFyZ2luOiAycHggMS4yNWVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAudWktdHJlZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC51aS10cmVlIC51aS10cmVlLWNvbnRhaW5lciB7XHJcbiAgICAvLyBtaW4td2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvLnVpLXRyZWUgLnVpLXRyZWVub2RlLWljb24ge1xyXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cclxuICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xyXG4gIHdpZHRoOiAwcHg7XHJcbn1cclxuOmhvc3QgL2RlZXAvLmZhLWNhcmV0LWRvd246YmVmb3JlIHtcclxuICBjb250ZW50OiBcInJlbW92ZVwiO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxOWIwYzg7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICM2NjY2NjY7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuZmEtY2FyZXQtcmlnaHQ6YmVmb3JlIHtcclxuICBjb250ZW50OiBcImFkZFwiO1xyXG4gIGNvbG9yOiAjNjY2NjY2O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMTliMGM4XHJcbiAgLy8gYmFja2dyb3VuZDogIzAwODBiNjtcclxuICAvLyBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcbi5pc3JlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAgLnVpLXdpZGdldC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/power-manage/power-list/power-list.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/power-manage/power-list/power-list.ts ***!
  \************************************************************************************/
/*! exports provided: PowerList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerList", function() { return PowerList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
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



var PowerList = /** @class */ (function () {
    function PowerList(commonHttpService, commfunc, changeDetectorRef) {
        this.commonHttpService = commonHttpService;
        this.commfunc = commfunc;
        this.changeDetectorRef = changeDetectorRef;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        //接受后台返回的数据
        this.treeList = [];
        this.button = [];
        this.menu = [];
        this.selectButton = [];
        this.selectMenu = [];
        //选中的值
        this.selectedList = [];
        //接受父页面传过来的权限标识
        this.permissionsId = '';
        this.permiResList = [];
        this.data = [];
        this.selectList = [];
    }
    PowerList.prototype.ngOnInit = function () {
        var _this = this;
        //查所有的菜单数据
        var param1 = { isAll: '1' };
        this.commonHttpService.getPermSourceListByPermId(param1).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.button = data.items.button;
                _this.menu = data.items.menu;
                _this.treeList = _this.forMenuList(_this.menu, _this.button);
                _this.changeDetectorRef.detectChanges();
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
        //回显详情
        if (this.inValue == null) {
            return;
        }
        //查父页面传过来的权限标识，对应的菜单
        this.data = this.inValue;
        var param2 = { permIdList: this.data.permissionsId.split(',') };
        this.commonHttpService.getPermSourceListByPermId(param2).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.selectButton = data.items.button;
                _this.selectMenu = data.items.menu;
                var selectListAll = _this.forMenuList(_this.selectMenu, _this.selectButton);
                _this.selectedList = [];
                _this.transte(selectListAll, _this);
                selectListAll.forEach(function (element) {
                    _this.selectParent(element, _this);
                });
                _this.changeDetectorRef.detectChanges();
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    PowerList.prototype.ngOnChanges = function () {
        // //查所有的菜单数据
        // let param1 = { isAll: '1' }
        // this.commonHttpService.getPermSourceListByPermId(param1).subscribe(data => {
        //   if (data.returnCode.code == 'success') {
        //     this.button = data.items.button;
        //     this.menu = data.items.menu;
        //     this.treeList = this.forMenuList(this.menu, this.button);
        //     this.changeDetectorRef.detectChanges();
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
        //   } else {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
        //   }
        // }, error => {
        //   this.msgs = [];
        //   this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        // })
        // //回显详情
        // if (this.inValue == null) {
        //   return;
        // }
        // //查父页面传过来的权限标识，对应的菜单
        // this.data = this.inValue;
        // let param2 = { permIdList: this.data.permissionsId.split(',') };
        // this.commonHttpService.getPermSourceListByPermId(param2).subscribe(data => {
        //   if (data.returnCode.code == 'success') {
        //     this.selectButton = data.items.button;
        //     this.selectMenu = data.items.menu;
        //     let selectListAll = this.forMenuList(this.selectMenu, this.selectButton)
        //     this.selectedList = [];
        //     this.transte(selectListAll, this);
        //     selectListAll.forEach(element => {
        //       this.selectParent(element, this);
        //     });
        //     this.changeDetectorRef.detectChanges();
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
        //   } else {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
        //   }
        // }, error => {
        //   this.msgs = [];
        //   this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        // })
    };
    //保存按钮
    PowerList.prototype.saveClick = function () {
        var _this = this;
        this.selectedList.forEach(function (item) {
            _this.permiResList.push({ permiResId: item, permissionsId: _this.data.permissionsId });
        });
        if (this.permiResList.length == 0) {
            this.permiResList = [{ permiResId: '', permissionsId: this.data.permissionsId }];
        }
        var param = { permiResList: this.permiResList };
        this.commonHttpService.maintainPermissionsResource(param).subscribe(function (data) {
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
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
        this.outValue.emit(false);
    };
    //将后台回显传过来的值，只取sourceId将其push到一个数组
    PowerList.prototype.transte = function (list, thiss) {
        list.forEach(function (itemList) {
            thiss.selectedList.push(itemList.data);
            if (itemList.children) {
                thiss.transte(itemList.children, thiss);
            }
        });
    };
    //菜单循环
    PowerList.prototype.checkMenuList = function (param) {
        if (param['items']) {
            return true;
        }
        return false;
    };
    PowerList.prototype.forMenuList = function (param, button) {
        var _this = this;
        var list = [];
        param.forEach(function (element) {
            var el = {};
            //判读是button还是menu,如果是menu前面的图标是 ui-icon-format-align-left，button前面图标是ui-icon-apps
            if (element['sourceTypeId'] == 'FEATURES_MENU') {
                el = { label: element.description, data: element.sourceId, children: [], icon: 'fa ui-icon-format-align-left' };
            }
            else {
                el = { label: element.description, data: element.sourceId, children: [], icon: 'fa ui-icon-apps' };
            }
            // if (element.linkUrl) {
            //   let buttonList = [];
            //   if (button[element.sourceId]) {
            //     button[element.sourceId].forEach(element => {
            //       let but = { label: element.description, data: element.sourceId, children: [], icon: 'fa ui-icon-apps' };
            //       buttonList.push(but);
            //     });
            //   }
            //   el['children'] = buttonList;
            // }
            if (_this.checkMenuList(element)) {
                el['sourceTypeId'] = element.sourceTypeId;
                el['expandedIcon'] = "fa-folder-open";
                el['collapsedIcon'] = "fa-folder";
                el['icon'] = "fa ui-icon-format-align-left";
                el['children'] = _this.forMenuList(element['items'], button);
            }
            list.push(el);
        });
        return list;
    };
    // selectforMenuList(param: Array<any>, button) {
    //   let list: any = [];
    //   param.forEach(element => {
    //     let el = { label: element.description, data: element.sourceId, children: [], icon: 'fa ui-icon-format-align-left', partialSelected: false };
    //     if (element.linkUrl) {
    //       let buttonList = [];
    //       if (button[element.sourceId]) {
    //         button[element.sourceId].forEach(element => {
    //           let but = { label: element.description, data: element.sourceId, children: [], icon: 'fa ui-icon-apps', partialSelected: false };
    //           buttonList.push(but);
    //         });
    //       }
    //       el['children'] = buttonList;
    //     }
    //     if (this.checkMenuList(element)) {
    //       el['sourceTypeId']=element.sourceTypeId;
    //       el['expandedIcon'] = "fa-folder-open";
    //       el['collapsedIcon'] = "fa-folder";
    //       el['icon'] = "fa ui-icon-format-align-left";
    //       el['children'] = this.forMenuList(element['items'], button);
    //     }
    //     list.push(el)
    //   })
    //   return list;  
    // }
    //选中树的时候
    PowerList.prototype.onChange = function (event) {
        if (this.selectedList.length > 0) {
            //判断当前的是否被选中
            if (this.selectedList.indexOf(event.data) != -1) {
                //选中所有子的
                if (event.children) {
                    this.selectCheck(event.children, this);
                }
                //选中某个子的去掉上级的勾勾
                if (event.parent) {
                    //选中上级
                    this.selectParent(event.parent, this);
                }
            }
            else {
                //去掉选中
                if (event.children) {
                    this.unSelectCheck(event.children);
                }
                //去掉某个子的去掉上级的勾勾
                if (event.parent) {
                    this.forSelectParent(event.parent, this);
                }
            }
        }
    };
    //循环去掉上级的选中值
    PowerList.prototype.forSelectParent = function (list, thiss) {
        if (thiss.selectParentList(list.children, thiss)) {
            if (thiss.selectedList.indexOf(list.data) == -1) {
                thiss.selectedList.push(list.data);
            }
        }
        else {
            if (thiss.selectedList.indexOf(list.data) != -1) {
                //判断子是有勾选的
                if (!thiss.selectParentList(list.children, thiss)) {
                    var flag_1 = true; //判断子是否为菜单
                    list.children.forEach(function (el) {
                        if (el.sourceTypeId != 'FEATURES_MENU') {
                            flag_1 = false;
                        }
                    });
                    if (flag_1) {
                        thiss.selectedList.splice(thiss.selectedList.indexOf(list.data), 1);
                    }
                }
            }
        }
        //再次判断是否还有上级
        if (list.parent) {
            // list.children.forEach(element => {
            this.forSelectParent(list.parent, thiss);
            // });
        }
    };
    //判断所有的子是否选中如果选中父也选中
    PowerList.prototype.selectParent = function (list, thiss) {
        if (list) {
            if (thiss.selectedList.indexOf(list.data) == -1) {
                thiss.selectedList.push(list.data);
                if (list.parent) {
                    this.selectParent(list.parent, thiss);
                }
            }
            else {
                if (list.parent) {
                    this.selectParent(list.parent, thiss);
                }
            }
        }
    };
    //判断子是否全去掉,是就去掉父
    PowerList.prototype.selectParentList = function (list, thiss) {
        var status = false;
        if (list) {
            for (var i = 0; i < list.length; i++) {
                var element = list[i];
                if (thiss.selectedList.length > 0) {
                    if (thiss.selectedList.indexOf(element.data) != -1) {
                        status = true;
                    }
                }
                else {
                    status = false;
                    return;
                }
            }
            return status;
        }
    };
    //选中所有的子
    PowerList.prototype.selectCheck = function (list, thiss) {
        var _this = this;
        list.forEach(function (element) {
            if (thiss.selectedList.indexOf(element.data) == -1) {
                thiss.selectedList.push(element.data);
            }
            if (element.children && element.children.length > 0) {
                _this.selectCheck(element.children, thiss);
            }
        });
    };
    //去掉全选
    PowerList.prototype.unSelectCheck = function (list) {
        var _this = this;
        list.forEach(function (element) {
            if (_this.selectedList.length == 1) {
                if (_this.selectedList.indexOf(element.data) != -1) {
                    _this.selectedList = [];
                }
            }
            else {
                if (_this.selectedList.indexOf(element.data) != -1) {
                    _this.selectedList.splice(_this.selectedList.indexOf(element.data), 1);
                }
                if (element.children && element.children.length > 0) {
                    _this.unSelectCheck(element.children);
                }
            }
        });
    };
    //取消按钮
    PowerList.prototype.cancelClick = function () {
        this.selectedList = null;
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PowerList.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PowerList.prototype, "outValue", void 0);
    PowerList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'power-list',
            styles: [__webpack_require__(/*! ./power-list.scss */ "./src/app/pages/tzb/common/base-manage/power-manage/power-list/power-list.scss")],
            template: __webpack_require__(/*! ./power-list.html */ "./src/app/pages/tzb/common/base-manage/power-manage/power-list/power-list.html")
        })
        //分配资源
        ,
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_1__["CommonHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PowerList);
    return PowerList;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/power-manage/power-manage.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/power-manage/power-manage.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 搜索框 -->\r\n<div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"precredit\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n            <label class=\"inputLayout\">权限编号：</label>\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"powerManageBean.permissionsId\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-6\">\r\n            <label>权限描述：</label>\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"powerManageBean.permissionsDescription\">\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"ui-g-12 textAlignCenter\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"query()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"resetClick()\"></button>\r\n    </div>\r\n\r\n    <span class=\"icoColor\" style=\"margin-left:92%;\" (click)=\"add()\" *ngIf=\"permissionCheck('SID02085_P0132')\">新增</span>\r\n    <!-- 表格 -->\r\n    <div class=\"ui-g-12 base-table\">\r\n        <p-dataTable [value]=\"tableData\" [scrollable]=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"permissionsId\" header=\"权限编号\"></p-column>\r\n            <p-column field=\"permissionsDescription\" header=\"权限描述\"></p-column>\r\n            <!-- <p-column field=\"permiResId\" header=\"权限编号\"></p-column>\r\n            <p-column field=\"resType\" header=\"权限类型\"></p-column>\r\n            <p-column field=\"superiorResId\" header=\"超级权限\"></p-column> -->\r\n            <p-column header=\"操作\">\r\n                <ng-template let-col let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <!-- 资源权限暂未开发好，未联调20171213 -->\r\n                    <!-- <button pButton type=\"button\" label=\"分配资源\" (click)='powerList(item)' display ></button> -->\r\n                    <!-- <button pButton type=\"button\" label=\"修改\" (click)='update(item)'></button>\r\n                    <button pButton type=\"button\" label=\"删除\" (click)='delete(item)'></button> -->\r\n                    <span class=\"tabelDealIco\"  (click)=\"powerList(item)\" display *ngIf=\"permissionCheck('SID02085_P0133')\">分配</span>\r\n                    <span class=\"tabelUpdateIco\" (click)=\"update(item)\" *ngIf=\"permissionCheck('SID02085_P0134')\">修改</span>\r\n                    <span class=\"tabelDeleteIco\" (click)=\"delete(item)\" *ngIf=\"permissionCheck('SID02085_P0135')\">删除</span>\r\n                    <span class=\"tabelDetailIco\" (click)=\"copy(item)\" *ngIf=\"permissionCheck('SID02085_P0131')\" >复制</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n\r\n        <!-- 分页 -->\r\n        <p-paginator [first]=\"first\"  rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<!-- 弹窗 -->\r\n<p-dialog *ngIf=\"display\"  [(visible)]=\"display\"   modal=\"modal\"  [responsive]=\"false\" [positionTop]=10 (onHide)=\"hide()\">\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <power-add-manage *ngIf=\"showModel=='1'\" (outValue)=\"addCall($event)\" ></power-add-manage>\r\n        <!-- 分配资源 -->\r\n        <power-list *ngIf=\"showModel=='3'\" [inValue]=\"updateValue\" (outValue)=\"powerListCall($event)\" #powerList></power-list>\r\n        <power-update-manage *ngIf=\"showModel=='2'\" [inValue]=\"updateValue\" (outValue)=\"updateCall($event)\"></power-update-manage>\r\n        <app-power-copy *ngIf=\"showModel=='4'\" [inValue]=\"copyValue\" (outValue)=\"copyCall($event)\"></app-power-copy>\r\n    </div>\r\n</p-dialog>\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/power-manage/power-manage.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/power-manage/power-manage.module.ts ***!
  \**********************************************************************************/
/*! exports provided: PowerManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerManageModule", function() { return PowerManageModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _power_manage_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./power-manage.routing */ "./src/app/pages/tzb/common/base-manage/power-manage/power-manage.routing.ts");
/* harmony import */ var _power_manage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./power-manage */ "./src/app/pages/tzb/common/base-manage/power-manage/power-manage.ts");
/* harmony import */ var _power_add_manage_power_add_manage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./power-add-manage/power-add-manage */ "./src/app/pages/tzb/common/base-manage/power-manage/power-add-manage/power-add-manage.ts");
/* harmony import */ var _power_update_manage_power_update_manage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./power-update-manage/power-update-manage */ "./src/app/pages/tzb/common/base-manage/power-manage/power-update-manage/power-update-manage.ts");
/* harmony import */ var _power_copy_power_copy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./power-copy/power-copy.component */ "./src/app/pages/tzb/common/base-manage/power-manage/power-copy/power-copy.component.ts");
/* harmony import */ var _power_list_power_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./power-list/power-list */ "./src/app/pages/tzb/common/base-manage/power-manage/power-list/power-list.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PowerManageModule = /** @class */ (function () {
    function PowerManageModule() {
    }
    PowerManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _power_manage_routing__WEBPACK_IMPORTED_MODULE_4__["PowerManageRouting"]
            ],
            declarations: [
                _power_manage__WEBPACK_IMPORTED_MODULE_5__["PowerManage"],
                _power_add_manage_power_add_manage__WEBPACK_IMPORTED_MODULE_6__["PowerAddManage"],
                _power_update_manage_power_update_manage__WEBPACK_IMPORTED_MODULE_7__["PowerUpdateManage"],
                _power_copy_power_copy_component__WEBPACK_IMPORTED_MODULE_8__["PowerCopyComponent"],
                _power_list_power_list__WEBPACK_IMPORTED_MODULE_9__["PowerList"]
            ],
            providers: []
        })
    ], PowerManageModule);
    return PowerManageModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/power-manage/power-manage.routing.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/power-manage/power-manage.routing.ts ***!
  \***********************************************************************************/
/*! exports provided: routes, PowerManageRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerManageRouting", function() { return PowerManageRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _power_manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./power-manage */ "./src/app/pages/tzb/common/base-manage/power-manage/power-manage.ts");


var routes = [
    { path: '', component: _power_manage__WEBPACK_IMPORTED_MODULE_1__["PowerManage"] }
];
var PowerManageRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/power-manage/power-manage.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/power-manage/power-manage.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: auto !important; }\n\n[type=\"text\"] {\n  width: 25% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 25% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9wb3dlci1tYW5hZ2UvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY29tbW9uXFxiYXNlLW1hbmFnZVxccG93ZXItbWFuYWdlXFxwb3dlci1tYW5hZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9wb3dlci1tYW5hZ2UvcG93ZXItbWFuYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBSDNCO0VBTVEsbUJBQW1CLEVBQUE7O0FBSTNCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHVCQUF1QixFQUFBOztBQ0YzQjtFRE1JLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9wb3dlci1tYW5hZ2UvcG93ZXItbWFuYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kdWxlIHtcclxuICAgIC5yb3dMb2NhdG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuTG9jYXRpb24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGEge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5bdHlwZT1cInRleHRcIl0ge1xyXG4gICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xyXG59IiwiLm1vZHVsZSAucm93TG9jYXRvbiB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7IH1cblxuLm1vZHVsZSAuYnRuTG9jYXRpb24ge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4OyB9XG5cbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGEge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cblxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3cge1xuICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuW3R5cGU9XCJ0ZXh0XCJdIHtcbiAgd2lkdGg6IDI1JSAhaW1wb3J0YW50OyB9XG5cbjpob3N0L2RlZXAvIC51aS1kcm9wZG93biB7XG4gIHdpZHRoOiAyNSUgIWltcG9ydGFudDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/power-manage/power-manage.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/power-manage/power-manage.ts ***!
  \***************************************************************************/
/*! exports provided: PowerManage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerManage", function() { return PowerManage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_power_manage_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/power-manage.bean */ "./src/app/pages/tzb/common/base-manage/power-manage/bean/power-manage.bean.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
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







var PowerManage = /** @class */ (function () {
    function PowerManage(commonHttpService, confirmationService, fb, commfunc) {
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.commfunc = commfunc;
        // @Input() inValue: any;
        // @Output() outValue: EventEmitter<any> = new EventEmitter();
        // 表格中显示的信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"];
        //页面头部标题
        this.precredit = '权限查询';
        this.powerManageBean = new _bean_power_manage_bean__WEBPACK_IMPORTED_MODULE_1__["PowerManageBean"]();
        //模态框是否显示
        this.display = false;
        //每页多少条
        this.pageSize = 10;
        //提示信息
        this.msgs = [];
        //传出的值
        //  inValue: string;
        //修改的参数
        this.updateValue = [];
        //新增的参数
        this.addValue = [];
        //复制的参数
        this.copyValue = [];
        this.first = 0;
    }
    PowerManage.prototype.ngOnInit = function () {
        this.powerManageBean.pageSize = 10;
        this.powerManageBean.pageNum = 1;
        this.queryClick();
        //按回车键查询
        var _thiss = this;
        document.onkeydown = function (event) {
            if (event && event.keyCode === 13) {
                _thiss.query();
            }
        };
    };
    //查询
    PowerManage.prototype.queryClick = function () {
        var _this = this;
        this.commonHttpService.querySecurityPermissionList(this.powerManageBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.permissionList;
                _this.total = data.total;
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
    PowerManage.prototype.query = function () {
        var _this = this;
        this.first = 0;
        this.powerManageBean.pageNum = 1;
        this.commonHttpService.querySecurityPermissionList(this.powerManageBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.permissionList;
                _this.total = data.total;
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
    // 修改
    PowerManage.prototype.update = function (item) {
        this.headerTitle = '权限描述修改';
        this.display = true;
        this.showModel = '2';
        this.updateValue = item;
    };
    //修改的回调
    PowerManage.prototype.updateCall = function (param) {
        this.display = param;
        // this.powerManageBean.pageNum = 1;
        // this.powerManageBean = new PowerManageBean();
        // this.powerManageBean.pageNum = this.currentPage;
        // this.powerManageBean.pageSize = this.rows;
        this.queryClick();
    };
    //删除事件
    PowerManage.prototype.delete = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                // 条件
                var param = { permissionsId: item.permissionsId };
                _this.commonHttpService.deletePermissions(param).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.meaasge });
                        _this.queryClick();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "删除失败" });
                });
            }
        });
    };
    // 增加按钮事件
    PowerManage.prototype.add = function () {
        this.headerTitle = '权限添加';
        this.display = true;
        this.showModel = '1';
    };
    //添加的回调
    PowerManage.prototype.addCall = function (param) {
        this.display = param;
        // this.powerManageBean.pageNum = 1;
        this.queryClick();
    };
    // 分配资源
    PowerManage.prototype.powerList = function (item) {
        var _this = this;
        this.headerTitle = '功能列表';
        this.display = true;
        this.showModel = '3';
        this.updateValue = item;
        setTimeout(function () {
            _this.updateValue = null;
        }, 200);
    };
    // 分配资源回调
    PowerManage.prototype.powerListCall = function (param) {
        this.display = param;
        this.queryClick();
    };
    PowerManage.prototype.copy = function (item) {
        this.display = true;
        this.showModel = '4';
        this.headerTitle = '权限关系复制';
        this.copyValue = item;
    };
    PowerManage.prototype.copyCall = function (param) {
        this.display = param.display;
        this.msgs = param.msg;
        this.queryClick();
    };
    //重置按钮事件
    PowerManage.prototype.resetClick = function () {
        this.powerManageBean.permissionsId = "";
        this.powerManageBean.permissionsDescription = "";
    };
    //分页
    PowerManage.prototype.paginate = function (event) {
        this.rows = event.rows * 1;
        //每页显示的条数
        this.powerManageBean.pageSize = this.rows;
        //当前页
        this.currentPage = event.page + 1;
        this.powerManageBean.pageNum = this.currentPage;
        this.first = event.rows * event.page;
        //调用查询的方法
        this.queryClick();
        // this.powerManageBean.pageNum = 1;
    };
    //返回的值
    PowerManage.prototype.outValue = function (param) {
        this.display = param.display;
    };
    PowerManage.prototype.hide = function () {
        // this.powesrList.destroy();
    };
    //按钮权限
    PowerManage.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("powerList"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentRef"])
    ], PowerManage.prototype, "powesrList", void 0);
    PowerManage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'power-manage',
            template: __webpack_require__(/*! ./power-manage.html */ "./src/app/pages/tzb/common/base-manage/power-manage/power-manage.html"),
            styles: [__webpack_require__(/*! ./power-manage.scss */ "./src/app/pages/tzb/common/base-manage/power-manage/power-manage.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"]])
    ], PowerManage);
    return PowerManage;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/power-manage/power-update-manage/power-update-manage.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/power-manage/power-update-manage/power-update-manage.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userform\">\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12\" style=\"text-align:center\">\r\n            <label>权限编号：</label>\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"powerManageBean.permissionsId\" disabled formControlName=\"permissionsId\" name=\"permissionsId\">\r\n            <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['permissionsId'].valid&&userform.controls['permissionsId'].dirty\">\r\n                <!-- 请输入6位至20位以上大写或小写字母或数字或下划线 -->\r\n                <p [hidden]=\"!userform.hasError('required','permissionsId')\"> 权限编号不能为空！</p>\r\n                <p [hidden]=\"!userform.hasError('pattern','permissionsId')\"> 请输入1位至20位以上大写或小写字母或数字或下划线!</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\" style=\"text-align:center\">\r\n            <label appValidation>权限描述：</label>\r\n            <!-- <input id=\"input\" type=\"textare\" size=\"20\" pInputTextarea rows=\"5\" cols=\"35\" [(ngModel)]=\"powerManageBean.permissionsDescription\" formControlName=\"permissionsDescription\" name=\"permissionsDescription\"> -->\r\n            <textarea  [(ngModel)]=\"powerManageBean.permissionsDescription\" formControlName=\"permissionsDescription\" name=\"permissionsDescription\" pInputTextarea rows=\"3\" cols=\"20\"  style=\"overflow:auto\"></textarea>\r\n            <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['permissionsDescription'].valid&&userform.controls['permissionsDescription'].dirty\">\r\n                <p [hidden]=\"!userform.hasError('pattern','permissionsDescription')\"> 权限描述必须为1-60位中文且不能有空格！</p>\r\n                <p [hidden]=\"!userform.hasError('required','permissionsDescription')\">权限描述不能为空！</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2\"></div>\r\n            <div class=\"ui-g-4\" style=\"text-align:right;\">\r\n                <button pButton type=\"button\" label=\"确定\" (click)='preserveClick()'></button>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <button pButton type=\"button\" label=\"取消\" (click)='modifyCloseBtn()'></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/power-manage/power-update-manage/power-update-manage.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/power-manage/power-update-manage/power-update-manage.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input, textarea {\n  width: 30% !important; }\n\nbutton {\n  margin-top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9wb3dlci1tYW5hZ2UvcG93ZXItdXBkYXRlLW1hbmFnZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFxwb3dlci1tYW5hZ2VcXHBvd2VyLXVwZGF0ZS1tYW5hZ2VcXHBvd2VyLXVwZGF0ZS1tYW5hZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9wb3dlci1tYW5hZ2UvcG93ZXItdXBkYXRlLW1hbmFnZS9wb3dlci11cGRhdGUtbWFuYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCx0ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5idXR0b257XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/power-manage/power-update-manage/power-update-manage.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/power-manage/power-update-manage/power-update-manage.ts ***!
  \******************************************************************************************************/
/*! exports provided: PowerUpdateManage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerUpdateManage", function() { return PowerUpdateManage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var _bean_power_manage_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bean/power-manage.bean */ "./src/app/pages/tzb/common/base-manage/power-manage/bean/power-manage.bean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PowerUpdateManage = /** @class */ (function () {
    function PowerUpdateManage(commonHttpService, confirmationService, fb) {
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        //实体
        this.powerManageBean = new _bean_power_manage_bean__WEBPACK_IMPORTED_MODULE_3__["PowerManageBean"]();
    }
    PowerUpdateManage.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'permissionsId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[\w]{1,20}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'permissionsDescription': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[\u4E00-\u9FA5\(\)\（\）]{1,60}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    };
    PowerUpdateManage.prototype.ngOnChanges = function () {
        this.fuzhi();
    };
    PowerUpdateManage.prototype.fuzhi = function () {
        // ;
        this.powerManageBean = this.inValue;
    };
    //修改提交
    PowerUpdateManage.prototype.preserveClick = function () {
        var _this = this;
        this.powerManageBean.permissionType = 'FEATURES';
        // 
        // permissionsId
        // permissionsDescription
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
        this.commonHttpService.modifyPermissions(this.powerManageBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.outValue.emit(false);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    //取消
    PowerUpdateManage.prototype.modifyCloseBtn = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PowerUpdateManage.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PowerUpdateManage.prototype, "outValue", void 0);
    PowerUpdateManage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'power-update-manage',
            template: __webpack_require__(/*! ./power-update-manage.html */ "./src/app/pages/tzb/common/base-manage/power-manage/power-update-manage/power-update-manage.html"),
            styles: [__webpack_require__(/*! ./power-update-manage.scss */ "./src/app/pages/tzb/common/base-manage/power-manage/power-update-manage/power-update-manage.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], PowerUpdateManage);
    return PowerUpdateManage;
}());



/***/ })

}]);
//# sourceMappingURL=power-manage-power-manage-module.js.map