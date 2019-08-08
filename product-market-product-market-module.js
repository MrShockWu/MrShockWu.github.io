(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-market-product-market-module"],{

/***/ "./src/app/pages/tzb/product-manage/product-market/channel-management/bean/channel-management.bean.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/channel-management/bean/channel-management.bean.ts ***!
  \************************************************************************************************************/
/*! exports provided: ChannelManagementBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelManagementBean", function() { return ChannelManagementBean; });
var ChannelManagementBean = /** @class */ (function () {
    function ChannelManagementBean() {
        this.pageNum = 1; //			当前页号
        this.pageSize = 10; //			每页显示数量
    }
    return ChannelManagementBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-add/channel-management-add.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-add/channel-management-add.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n  <form [formGroup]=\"userform\">\r\n    <div class=\"ui-g-12 ui-md-12 form_item\">\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px;\">\r\n        <span appValidation>渠道编号:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <!-- <input name=\"channelId1\" disabled formControlName=\"channelId1\" [(ngModel)]=\"channelId1\" type=\"text\" pInputText class=\"ui-inputtext-new\"\r\n          style=\"width:25%;min-width: 70px;\">\r\n        <input name=\"channelId2\" maxlength=\"6\" formControlName=\"channelId2\" [(ngModel)]=\"channelId2\" type=\"text\" pInputText class=\"ui-inputtext-new\"\r\n          style=\"width:52%;\">\r\n        <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['channelId2'].valid&&userform.controls['channelId2'].dirty\">\r\n          <span [hidden]=\"!userform.hasError('pattern','channelId2')\">渠道编号只可输入数字！</span>\r\n          <span [hidden]=\"!userform.hasError('required','channelId2')\"> 请填写渠道编号！</span>\r\n        </span> -->\r\n        <input name=\"channelId\" formControlName=\"channelId\" maxlength=\"8\" [(ngModel)]=\"channelManagementBean.channelId\" type=\"text\" pInputText\r\n          class=\"ui-inputtext-new\" style=\"width:80%;\">\r\n        <span class=\"requireLabel\" style=\"color:red;\"  *ngIf=\"!userform.controls['channelId'].valid&&userform.controls['channelId'].dirty\">\r\n            <span [hidden]=\"!userform.hasError('pattern','channelId')\">渠道编号输入不合法！</span>\r\n        <span [hidden]=\"!userform.hasError('required','channelId')\"> 请填写渠道编号！</span>\r\n        </span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px;\">\r\n        <span appValidation>渠道名称:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <input name=\"channelName\" formControlName=\"channelName\" maxlength=\"60\" [(ngModel)]=\"channelManagementBean.channelName\" type=\"text\"\r\n          pInputText class=\"ui-inputtext-new\" style=\"width:80%;\">\r\n        <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['channelName'].valid&&userform.controls['channelName'].dirty\">\r\n          <span [hidden]=\"!userform.hasError('required','channelName')\"> 请填写渠道名称！</span>\r\n        </span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px;\">\r\n        <span>Serve Code:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <input name=\"serverCode\" formControlName=\"serverCode\" [(ngModel)]=\"channelManagementBean.serverCode\" type=\"text\" pInputText\r\n          class=\"ui-inputtext-new\" style=\"width:80%;\">\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px;\">\r\n        <span>系统编号:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <input name=\"systemCode\" formControlName=\"systemCode\" [(ngModel)]=\"channelManagementBean.systemCode\" type=\"text\" pInputText\r\n          class=\"ui-inputtext-new\" style=\"width:80%;\">\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px;\">\r\n        <span appValidation>渠道类型:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <div style=\"width:80%;\">\r\n          <p-dropdown styleClass=\"ui-dropdown-new\" name=\"channelType\" formControlName=\"channelType\" [(ngModel)]=\"channelManagementBean.channelType\"\r\n            [options]=\"siteType\"></p-dropdown>\r\n          <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['channelType'].valid&&userform.controls['channelType'].dirty\">\r\n            <span [hidden]=\"!userform.hasError('required','channelType')\"> 请填写渠道类型！</span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px;\">\r\n        <span>esb场景号:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <input name=\"situationCode\" formControlName=\"situationCode\" [(ngModel)]=\"channelManagementBean.situationCode\" type=\"text\"\r\n          pInputText class=\"ui-inputtext-new\" style=\"width:80%;\">\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px;\">\r\n        <span>描述:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-10\">\r\n        <textarea name=\"channelDescription\" formControlName=\"channelDescription\" maxlength=\"200\" [(ngModel)]=\"channelManagementBean.channelDescription\"\r\n          pInputTextarea class=\"ui-inputtextarea-new\" style=\"width:92%;\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 text_center\">\r\n      <div style=\"width: 90px;display: inline-block;\">\r\n        <div class=\"ui-btn2-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton type=\"button\" style=\"width: 60px;\" (click)=\"addCloseBtn()\" label=\"取消\"></button>\r\n        </div>\r\n      </div>\r\n      <span>&nbsp;</span>\r\n      <div style=\"width: 90px;display: inline-block;\">\r\n        <div class=\"ui-btn1-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton type=\"button\" [disabled]='iscompele' (click)=\"addSaveBtn()\" style=\"width: 60px;\" label=\"确定\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-add/channel-management-add.component.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-add/channel-management-add.component.scss ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container :host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL3Byb2R1Y3QtbWFya2V0L2NoYW5uZWwtbWFuYWdlbWVudC9jaGFubmVsLW1hbmFnZW1lbnQtYWRkL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHByb2R1Y3QtbWFuYWdlXFxwcm9kdWN0LW1hcmtldFxcY2hhbm5lbC1tYW5hZ2VtZW50XFxjaGFubmVsLW1hbmFnZW1lbnQtYWRkXFxjaGFubmVsLW1hbmFnZW1lbnQtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvcHJvZHVjdC1tYW5hZ2UvcHJvZHVjdC1tYXJrZXQvY2hhbm5lbC1tYW5hZ2VtZW50L2NoYW5uZWwtbWFuYWdlbWVudC1hZGQvY2hhbm5lbC1tYW5hZ2VtZW50LWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgLnRleHRfY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAgOmhvc3QgL2RlZXAvIC5mb3JtX2l0ZW0ge1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-add/channel-management-add.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-add/channel-management-add.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: ChannelManagementAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelManagementAddComponent", function() { return ChannelManagementAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _bean_channel_management_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../bean/channel-management.bean */ "./src/app/pages/tzb/product-manage/product-market/channel-management/bean/channel-management.bean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChannelManagementAddComponent = /** @class */ (function () {
    function ChannelManagementAddComponent(productManageHttpService, fb, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // bean
        this.channelManagementBean = new _bean_channel_management_bean__WEBPACK_IMPORTED_MODULE_2__["ChannelManagementBean"]();
        //提示信息
        this.msgs = [];
        this.iscompele = false;
        this.channelId1 = 'CHNL';
        this.channelId2 = '';
        this.userform = fb.group({
            channelId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-zA-z]{2}[0-9]{6}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            // channelId1: ['', Validators.required],
            // channelId2: new FormControl('', [Validators.pattern(/^[0-9]\d*$/), Validators.required]),
            channelName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            channelDescription: [''],
            serverCode: [''],
            systemCode: [''],
            situationCode: [''],
            channelType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.codeValues(); // 调用方法，获取全部码值
        this.siteType = this.code['SiteType'];
        this.siteType.unshift({ 'label': '请选择', 'Value': '' });
        this.siteType = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.siteType);
    }
    ChannelManagementAddComponent.prototype.ngOnInit = function () {
        // this.getSeqNo();
    };
    // 码值
    ChannelManagementAddComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; // code是自己声明的变量
    };
    // 获取默认编号
    ChannelManagementAddComponent.prototype.getSeqNo = function () {
        var _this = this;
        var parms = {
            seqType: 'CHANNEL',
        };
        this.productManageHttpService.getSeqNo(parms).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.channelId2 = data.seqNo;
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
    //添加
    ChannelManagementAddComponent.prototype.addSaveBtn = function () {
        var _this = this;
        this.iscompele = true;
        // 验证
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                this.iscompele = false;
                return;
            }
        }
        // let channelId2 = this.channelId2.split('');
        // if (channelId2.length == 6) {
        //   this.channelManagementBean.channelId = this.channelId1 + this.channelId2;
        // 提交服务
        this.productManageHttpService.productChannelCreate(this.channelManagementBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.channelManagementBean = new _bean_channel_management_bean__WEBPACK_IMPORTED_MODULE_2__["ChannelManagementBean"]();
                var parm = {
                    display: false,
                    code: data.returnCode.message
                };
                _this.outValue.emit(parm);
                _this.iscompele = false;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                _this.iscompele = false;
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
            _this.iscompele = false;
        });
        // } else {
        //   this.msgs = [];
        //   this.msgs.push({ severity: 'error', summary: '提示', detail: "编号必须是CHNL+6位数字!" });
        //   this.iscompele = false;
        // }
    };
    //取消
    ChannelManagementAddComponent.prototype.addCloseBtn = function () {
        var parm = {
            display: false,
            code: 'cancelModel'
        };
        this.outValue.emit(parm);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ChannelManagementAddComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChannelManagementAddComponent.prototype, "inValue", void 0);
    ChannelManagementAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channel-management-add',
            template: __webpack_require__(/*! ./channel-management-add.component.html */ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-add/channel-management-add.component.html"),
            styles: [__webpack_require__(/*! ./channel-management-add.component.scss */ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-add/channel-management-add.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        })
        /**
         * 渠道站点-站点配置-新增
         */
        ,
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], ChannelManagementAddComponent);
    return ChannelManagementAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-details/channel-management-details.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-details/channel-management-details.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"ui-g form_item\">\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n        <span>渠道编号:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <span>{{channelManagementBean.channelId}}</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n        <span>渠道名称:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <span> {{channelManagementBean.channelName}}</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n        <span>Serve Code:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <span>{{channelManagementBean.serverCode}}</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n        <span>系统编号:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <span> {{channelManagementBean.systemCode}}</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n        <span>渠道类型:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <span>{{channelManagementBean.channelType|codeValuePie:siteType}}</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n        <span>esb场景号:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <span> {{channelManagementBean.situationCode}}</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n        <span>站点描述:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-10\">\r\n        <span>{{channelManagementBean.channelDescription}}</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n        <span>创建人:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <span>{{creater}}</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n        <span>创建时间:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <span> {{creatertime}}</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n        <span>最后修改人:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <span>{{laster}}</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\">\r\n        <span>最后修改时间:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <span> {{lastertime}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 text_center\">\r\n      <div style=\"width: 90px;display: inline-block;\">\r\n        <div class=\"ui-btn2-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton type=\"button\" style=\"width: 60px;\" (click)=\"closeClick()\" label=\"关闭\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-details/channel-management-details.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-details/channel-management-details.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: ChannelManagementDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelManagementDetailsComponent", function() { return ChannelManagementDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _bean_channel_management_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../bean/channel-management.bean */ "./src/app/pages/tzb/product-manage/product-market/channel-management/bean/channel-management.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChannelManagementDetailsComponent = /** @class */ (function () {
    function ChannelManagementDetailsComponent(productManageHttpService, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // bean
        this.channelManagementBean = new _bean_channel_management_bean__WEBPACK_IMPORTED_MODULE_2__["ChannelManagementBean"]();
        //提示信息
        this.msgs = [];
        this.creater = '';
        this.creatertime = '';
        this.laster = '';
        this.lastertime = '';
        this.codeValues(); //调用方法，获取全部码值
        this.siteType = this.code['SiteType'];
        this.siteType.unshift({ 'label': '请选择', 'Value': '' });
        this.siteType = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.siteType);
    }
    ChannelManagementDetailsComponent.prototype.ngOnInit = function () {
    };
    ChannelManagementDetailsComponent.prototype.ngOnChanges = function () {
        this.query();
    };
    //码值
    ChannelManagementDetailsComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ChannelManagementDetailsComponent.prototype.query = function () {
        var _this = this;
        var parm = { channelId: this.inValue };
        this.productManageHttpService.productChannelDetail(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.channelManagementBean = data;
                _this.creater = data.createdUser;
                _this.laster = data.lastUpdatedUser;
                var creatert = new Date(data.createdStamp);
                var createrts = new Date(data.lastUpdatedStamp);
                _this.creatertime = _this.commfunc.transDateN(creatert);
                _this.lastertime = _this.commfunc.transDateN(createrts);
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
    // 关闭
    ChannelManagementDetailsComponent.prototype.closeClick = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ChannelManagementDetailsComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChannelManagementDetailsComponent.prototype, "inValue", void 0);
    ChannelManagementDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channel-management-details',
            template: __webpack_require__(/*! ./channel-management-details.component.html */ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-details/channel-management-details.component.html"),
            styles: [__webpack_require__(/*! ./../channel-management-add/channel-management-add.component.scss */ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-add/channel-management-add.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], ChannelManagementDetailsComponent);
    return ChannelManagementDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-modify/channel-management-modify.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-modify/channel-management-modify.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n  <form [formGroup]=\"userform\">\r\n    <div class=\"ui-g-12 ui-md-12 form_item\">\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px;\">\r\n        <span appValidation>渠道编号:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <input name=\"channelId\" disabled formControlName=\"channelId\" [(ngModel)]=\"channelManagementBean.channelId\" type=\"text\" pInputText\r\n          class=\"ui-inputtext-new\" style=\"width:80%;\">\r\n        <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['channelId'].valid&&userform.controls['channelId'].dirty\">\r\n          <!-- <span [hidden]=\"!userform.hasError('pattern','channelId')\">渠道编号输入不合法！</span> -->\r\n          <span [hidden]=\"!userform.hasError('required','channelId')\"> 请填写渠道编号！</span>\r\n        </span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px;\">\r\n        <span appValidation>渠道名称:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <input name=\"channelName\" formControlName=\"channelName\" maxlength=\"60\" [(ngModel)]=\"channelManagementBean.channelName\" type=\"text\"\r\n          pInputText class=\"ui-inputtext-new\" style=\"width:80%;\">\r\n        <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['channelName'].valid&&userform.controls['channelName'].dirty\">\r\n          <span [hidden]=\"!userform.hasError('required','channelName')\"> 请填写渠道名称！</span>\r\n        </span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px;\">\r\n        <span>Serve Code:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <input name=\"serverCode\" formControlName=\"serverCode\" [(ngModel)]=\"channelManagementBean.serverCode\" type=\"text\" pInputText\r\n          class=\"ui-inputtext-new\" style=\"width:80%;\">\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px;\">\r\n        <span>系统编号:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <input name=\"systemCode\" formControlName=\"systemCode\" [(ngModel)]=\"channelManagementBean.systemCode\" type=\"text\" pInputText\r\n          class=\"ui-inputtext-new\" style=\"width:80%;\">\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px;\">\r\n        <span appValidation>渠道类型:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <div style=\"width:80%;\">\r\n          <p-dropdown name=\"channelType\" styleClass=\"ui-dropdown-new\" formControlName=\"channelType\" [(ngModel)]=\"channelManagementBean.channelType\"\r\n            [options]=\"siteType\"></p-dropdown>\r\n          <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['channelType'].valid&&userform.controls['channelType'].dirty\">\r\n            <span [hidden]=\"!userform.hasError('required','channelType')\"> 请填写渠道类型！</span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px;\">\r\n        <span>esb场景号:</span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <input name=\"situationCode\" formControlName=\"situationCode\" [(ngModel)]=\"channelManagementBean.situationCode\" type=\"text\"\r\n          pInputText class=\"ui-inputtext-new\" style=\"width:80%;\">\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12\">\r\n        <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px;\">\r\n          <span>描述:</span>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-10\">\r\n          <textarea name=\"channelDescription\" formControlName=\"channelDescription\" maxlength=\"200\" [(ngModel)]=\"channelManagementBean.channelDescription\"\r\n            pInputTextarea class=\"ui-inputtextarea-new\" style=\"width:92%;\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 text_center\">\r\n      <div style=\"width: 90px;display: inline-block;\">\r\n        <div class=\"ui-btn2-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton type=\"button\" style=\"width: 60px;\" (click)=\"modifyCloseBtn()\" label=\"取消\"></button>\r\n        </div>\r\n      </div>\r\n      <span>&nbsp;</span>\r\n      <div style=\"width: 90px;display: inline-block;\">\r\n        <div class=\"ui-btn1-div\">\r\n          <p class=\"place-div first\"></p>\r\n          <p class=\"place-div last\"></p>\r\n          <button pButton type=\"button\" [disabled]='iscompele' (click)=\"modifyBtn()\" style=\"width: 60px;\" label=\"确定\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-modify/channel-management-modify.component.ts":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-modify/channel-management-modify.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: ChannelManagementModifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelManagementModifyComponent", function() { return ChannelManagementModifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _bean_channel_management_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../bean/channel-management.bean */ "./src/app/pages/tzb/product-manage/product-market/channel-management/bean/channel-management.bean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChannelManagementModifyComponent = /** @class */ (function () {
    function ChannelManagementModifyComponent(productManageHttpService, fb, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // bean
        this.channelManagementBean = new _bean_channel_management_bean__WEBPACK_IMPORTED_MODULE_2__["ChannelManagementBean"]();
        this.iscompele = false;
        //提示信息
        this.msgs = [];
        this.userform = fb.group({
            channelId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            channelName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            channelDescription: [''],
            serverCode: [''],
            systemCode: [''],
            situationCode: [''],
            channelType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.codeValues(); //调用方法，获取全部码值
        this.siteType = this.code['SiteType'];
        this.siteType.unshift({ 'label': '请选择', 'Value': '' });
        this.siteType = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.siteType);
    }
    ChannelManagementModifyComponent.prototype.ngOnInit = function () {
        this.refresh();
        this.query();
    };
    ChannelManagementModifyComponent.prototype.ngOnChanges = function () {
    };
    //码值
    ChannelManagementModifyComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ChannelManagementModifyComponent.prototype.refresh = function () {
        this.channelManagementBean = Object.assign({}, this.inValue);
    };
    ChannelManagementModifyComponent.prototype.query = function () {
        var _this = this;
        var parm = { channelId: this.inValue };
        this.productManageHttpService.productChannelDetail(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.channelManagementBean = data;
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
    //修改
    ChannelManagementModifyComponent.prototype.modifyBtn = function () {
        var _this = this;
        this.iscompele = true;
        // 验证
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                this.iscompele = false;
                return;
            }
        }
        //提交服务
        this.productManageHttpService.productChannelUpdate(this.channelManagementBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                var parm = {
                    display: false,
                    code: data.returnCode.message
                };
                _this.outValue.emit(parm);
                _this.iscompele = false;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                _this.iscompele = false;
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
            _this.iscompele = false;
        });
    };
    //取消
    ChannelManagementModifyComponent.prototype.modifyCloseBtn = function () {
        var parm = {
            display: false,
            code: 'cancelModel'
        };
        this.outValue.emit(parm);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ChannelManagementModifyComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChannelManagementModifyComponent.prototype, "inValue", void 0);
    ChannelManagementModifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channel-management-modify',
            template: __webpack_require__(/*! ./channel-management-modify.component.html */ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-modify/channel-management-modify.component.html"),
            styles: [__webpack_require__(/*! ./../channel-management-add/channel-management-add.component.scss */ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-add/channel-management-add.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], ChannelManagementModifyComponent);
    return ChannelManagementModifyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n  <div class=\"ui-grid-row\">\r\n    <div class=\"ui-grid-col-12\">\r\n      <ul class=\"ui-breadcrumb-new\">\r\n        <li class=\"active\">\r\n          <a>\r\n            <span class=\"icon iconfont tzbicon-home\"></span>&nbsp;首页</a>\r\n        </li>\r\n        <li>\r\n          <a>产品管理</a>\r\n        </li>\r\n        <li>\r\n          <a>渠道管理</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui-md-12\">\r\n    <div class=\"ui-g-12 ui-md-12 module\">\r\n      <div class=\"ui-g-12 ui-md-12 form_item\">\r\n        <div class=\"ui-g-12 ui-md-3 form_item_label\" style=\"line-height: 30px;\">\r\n          渠道编号:\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2\">\r\n          <input type=\"text\" pInputText class=\"ui-inputtext-new\" [(ngModel)]=\"channelManagementBean.channelId\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2 form_item_label\" style=\"line-height: 30px;\">\r\n          渠道名称:\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-2\">\r\n          <input type=\"text\" pInputText class=\"ui-inputtext-new\" [(ngModel)]=\"channelManagementBean.channelName\">\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-12 text_center\">\r\n          <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn1-div\">\r\n              <p class=\"place-div first\"></p>\r\n              <p class=\"place-div last\"></p>\r\n              <button pButton type=\"button\" (click)=\"querySecle()\" style=\"width: 60px;\" label=\"查询\"></button>\r\n            </div>\r\n          </div>\r\n          <span>&nbsp;</span>\r\n          <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn2-div\">\r\n              <p class=\"place-div first\"></p>\r\n              <p class=\"place-div last\"></p>\r\n              <button pButton type=\"button\" style=\"width: 60px;\" (click)=\"resetClick()\" label=\"重置\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12 module emargin\">\r\n      <div class=\"ui-g-12 ui-md-12 text_right\">\r\n        <div style=\"width: 90px;display: inline-block;\">\r\n          <div class=\"ui-btn1-div\">\r\n            <p class=\"place-div first\"></p>\r\n            <p class=\"place-div last\"></p>\r\n            <button pButton type=\"button\" (click)=\"addClick()\" style=\"width: 60px;\" label=\"新增\"></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-12\">\r\n        <u-dataTable [value]=\"site_list\" emptyMessage=\"没有查找到数据\" [scrollable]=\"true\" scrollHeight=\"500px\" [style]=\"{'text-align':'center'}\">\r\n          <p-column [style]=\"{'text-align':'center','width': '10%'}\">\r\n            <ng-template pTemplate=\"header\">\r\n              <label>序号</label>\r\n            </ng-template>\r\n            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              <label>{{ri+1}}</label>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center','width': '20%','word-break':'break-word'}\" field=\"channelId\" header=\"渠道编号\">\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center','width': '20%','word-break':'break-word'}\" field=\"channelName\" header=\"渠道名称\">\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center','width': '25%','word-break':'break-word'}\" field=\"channelDescription\" header=\"渠道描述\">\r\n            <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n              <span *ngIf=\"item.channelDescription !=null && item.channelDescription.length > 15\">{{item.channelDescription.substring(0,15)}}...</span>\r\n              <span *ngIf=\"item.channelDescription != null && item.channelDescription.length <= 15\">{{item.channelDescription}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column [style]=\"{'text-align':'center','width': '25%'}\">\r\n            <ng-template pTemplate=\"header\">\r\n              <label>操作</label>\r\n            </ng-template>\r\n            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n              <span class=\"icon iconfont\" pTooltip=\"详情\" tooltipPosition=\"top\" (click)=\"detailClick(item)\" style=\"color:#34cfe6;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe679;</span>\r\n              <span class=\"icon iconfont\" pTooltip=\"修改\" tooltipPosition=\"top\" (click)=\"modifyClick(item)\" style=\"color:#87d068;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe63b;</span>\r\n              <span class=\"icon iconfont\" pTooltip=\"删除\" tooltipPosition=\"top\" (click)=\"deleteClick(item)\" style=\"color:#fe5a48;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\">&#xe673;</span>\r\n            </ng-template>\r\n          </p-column>\r\n        </u-dataTable>\r\n        <div style=\"float:right;padding-top:100px;\">\r\n          <u-paginator [first]=\"first\" rows=\"{{channelManagementBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></u-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 删除提示框-->\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf='display' [(visible)]=\"display\" modal=\"modal\" width=\"1200\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div class=\"overflow\">\r\n    <app-channel-management-add *ngIf=\"showModel=='1'\" (outValue)=\"addCall($event)\"></app-channel-management-add>\r\n    <app-channel-management-modify *ngIf=\"showModel=='2'\" [inValue]=\"updateValue\" (outValue)=\"updateCall($event)\"></app-channel-management-modify>\r\n    <app-channel-management-details *ngIf=\"showModel=='3'\" [inValue]=\"updateValue\" (outValue)=\"detailsCall($event)\"></app-channel-management-details>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .emargin {\n  margin: 10px 0px; }\n\n.container :host /deep/ .form_item {\n  margin: 15px 0 !important; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-dialog.ui-shadow {\n    width: 550px !important; }\n  .overflow {\n    height: 600px;\n    overflow: scroll;\n    overflow-x: hidden;\n    overflow-y: auto; } }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  min-width: 900px !important;\n  height: 60% !important;\n  min-height: 600px !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f2f2f2 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new .active {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new .active a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new li :hover a {\n    color: #004257 !important; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover {\n  cursor: default; }\n\n:host/deep/ ul.ui-breadcrumb-new:hover a {\n    color: #004257 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3Byb2R1Y3QtbWFuYWdlL3Byb2R1Y3QtbWFya2V0L2NoYW5uZWwtbWFuYWdlbWVudC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxwcm9kdWN0LW1hbmFnZVxccHJvZHVjdC1tYXJrZXRcXGNoYW5uZWwtbWFuYWdlbWVudFxcY2hhbm5lbC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEsZ0JBQWdCLEVBQUE7O0FBUnhCO0VBV1EseUJBQXlCLEVBQUE7O0FBSWpDO0VBQ0s7SUFDRyx1QkFBc0IsRUFBQTtFQUUxQjtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBLEVBQ25COztBQUdMO0VBQ0ksdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksZUFBZSxFQUFBOztBQURuQjtJQUdRLHlCQUF5QixFQUFBOztBQUloQztFQUNHLGVBQWUsRUFBQTs7QUFEbEI7SUFHTyx5QkFBeUIsRUFBQTs7QUFJaEM7RUFDRyxlQUFlLEVBQUE7O0FBRGxCO0lBR08seUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvcHJvZHVjdC1tYW5hZ2UvcHJvZHVjdC1tYXJrZXQvY2hhbm5lbC1tYW5hZ2VtZW50L2NoYW5uZWwtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgLnRleHRfY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuZW1hcmdpbiB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIH1cclxuICAgICA6aG9zdCAvZGVlcC8gLmZvcm1faXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICA6aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICAgICAgd2lkdGg6IDU1MHB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5vdmVyZmxvdyB7XHJcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS1kYXRhIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkN2Q3ZDcgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gdWwudWktYnJlYWRjcnVtYi1uZXcgLmFjdGl2ZSB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4gOmhvc3QvZGVlcC8gdWwudWktYnJlYWRjcnVtYi1uZXcgbGkgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0MjU3ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiA6aG9zdC9kZWVwLyB1bC51aS1icmVhZGNydW1iLW5ldzpob3ZlciB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ChannelManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelManagementComponent", function() { return ChannelManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bean_channel_management_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/channel-management.bean */ "./src/app/pages/tzb/product-manage/product-market/channel-management/bean/channel-management.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
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
//  渠道管理-查询 熊正好 2019.3.28


 //删除



var ChannelManagementComponent = /** @class */ (function () {
    function ChannelManagementComponent(productManageHttpService, confirmationService, commfunc) {
        this.productManageHttpService = productManageHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //列表无数据
        // bean
        this.channelManagementBean = new _bean_channel_management_bean__WEBPACK_IMPORTED_MODULE_3__["ChannelManagementBean"]();
        //头标题
        this.all_title = '渠道管理';
        //修改的参数
        this.updateValue = [];
        //提示信息
        this.msgs = [];
        this.first = 0; //分页控制
        this.display = false;
        // 列表
        this.site_list = []; //渠道列表
        this.codeValues(); //调用方法，获取全部码值
        this.siteType = this.code['SiteType'];
    }
    ChannelManagementComponent.prototype.ngOnInit = function () {
        this.queryClick();
    };
    //码值
    ChannelManagementComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    // 重置
    ChannelManagementComponent.prototype.resetClick = function () {
        this.channelManagementBean = new _bean_channel_management_bean__WEBPACK_IMPORTED_MODULE_3__["ChannelManagementBean"]();
    };
    //查询始终第一页
    ChannelManagementComponent.prototype.querySecle = function () {
        this.channelManagementBean.pageSize = 10;
        this.channelManagementBean.pageNum = 1;
        this.first = 0;
        this.queryClick();
    };
    //  查询
    ChannelManagementComponent.prototype.queryClick = function () {
        var _this = this;
        this.channelManagementBean.channelCode = this.channelManagementBean.channelId;
        this.productManageHttpService.productChannelList(this.channelManagementBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.site_list = data.productChannelList;
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
    //删除
    ChannelManagementComponent.prototype.deleteClick = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                //条件
                var param = {
                    channelId: item.channelId,
                    toStatus: item.toStatus
                };
                _this.productManageHttpService.productChannelDelete(param).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        _this.first = 0;
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
    //新增
    ChannelManagementComponent.prototype.addClick = function () {
        this.display = true;
        this.headerTitle = '新增';
        this.showModel = '1';
    };
    //新增的回调
    ChannelManagementComponent.prototype.addCall = function (param) {
        if (param.code == 'cancelModel') {
            this.display = param.display;
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: '提示', detail: param.code });
            this.display = param.display;
        }
        this.first = 0;
        this.queryClick();
    };
    // 修改按钮
    ChannelManagementComponent.prototype.modifyClick = function (item) {
        this.display = true;
        this.headerTitle = '修改';
        this.showModel = '2';
        this.updateValue = item.channelId;
    };
    //修改的回调
    ChannelManagementComponent.prototype.updateCall = function (param) {
        if (param.code == 'cancelModel') {
            this.display = param.display;
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: '提示', detail: param.code });
            this.display = param.display;
        }
        this.first = 0;
        this.queryClick();
    };
    //详情
    ChannelManagementComponent.prototype.detailClick = function (item) {
        this.display = true;
        this.headerTitle = '详情';
        this.showModel = '3';
        this.updateValue = item.channelId;
    };
    //详情的回调
    ChannelManagementComponent.prototype.detailsCall = function (param) {
        this.display = param;
    };
    // //初始化渠道
    // intital(item) {
    //   this.display = true;
    //   this.headerTitle = '初始化渠道';
    //   this.showModel = '4';
    //   // this.updateValue = item.channelId;
    // }
    // //初始化渠道回调
    // intitalCall(param) {
    //   if (param.code == 'cancelModel') {
    //     this.display = param.display;
    //   } else {
    //     this.msgs = [];
    //     this.msgs.push({ severity: 'success', summary: '提示', detail: param.code });
    //     this.display = param.display;
    //   }
    //   this.first = 0;
    //   this.queryClick();
    // }
    //分页
    ChannelManagementComponent.prototype.paginate = function (event) {
        // ;
        //每页显示的条数
        this.channelManagementBean.pageSize = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.channelManagementBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.channelManagementBean.pageSize;
        //调用查询的方法
        this.queryClick();
        this.channelManagementBean.pageNum = 1;
    };
    //按钮权限
    ChannelManagementComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    ChannelManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channel-management',
            template: __webpack_require__(/*! ./channel-management.component.html */ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management.component.html"),
            styles: [__webpack_require__(/*! ./channel-management.component.scss */ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management.component.scss")],
            providers: [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        })
        /**
         * 渠道站点-渠道管理
         */
        ,
        __metadata("design:paramtypes", [_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_1__["ProductManageHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], ChannelManagementComponent);
    return ChannelManagementComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/product-launch.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/product-launch.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/product-launch.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/product-launch.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9wcm9kdWN0LW1hbmFnZS9wcm9kdWN0LW1hcmtldC9wcm9kdWN0LWxhdW5jaC9wcm9kdWN0LWxhdW5jaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-launch/product-launch.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-launch/product-launch.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ProductLaunchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductLaunchComponent", function() { return ProductLaunchComponent; });
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

var ProductLaunchComponent = /** @class */ (function () {
    function ProductLaunchComponent() {
    }
    ProductLaunchComponent.prototype.ngOnInit = function () {
    };
    ProductLaunchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-launch',
            template: __webpack_require__(/*! ./product-launch.component.html */ "./src/app/pages/tzb/product-manage/product-market/product-launch/product-launch.component.html"),
            styles: [__webpack_require__(/*! ./product-launch.component.scss */ "./src/app/pages/tzb/product-manage/product-market/product-launch/product-launch.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductLaunchComponent);
    return ProductLaunchComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-market.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-market.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductMarketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductMarketModule", function() { return ProductMarketModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _product_market_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-market.routing */ "./src/app/pages/tzb/product-manage/product-market/product-market.routing.ts");
/* harmony import */ var _channel_management_channel_management_details_channel_management_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./channel-management/channel-management-details/channel-management-details.component */ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-details/channel-management-details.component.ts");
/* harmony import */ var _channel_management_channel_management_modify_channel_management_modify_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./channel-management/channel-management-modify/channel-management-modify.component */ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-modify/channel-management-modify.component.ts");
/* harmony import */ var _channel_management_channel_management_add_channel_management_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./channel-management/channel-management-add/channel-management-add.component */ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management-add/channel-management-add.component.ts");
/* harmony import */ var _channel_management_channel_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./channel-management/channel-management.component */ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management.component.ts");
/* harmony import */ var _product_launch_product_launch_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-launch/product-launch.component */ "./src/app/pages/tzb/product-manage/product-market/product-launch/product-launch.component.ts");
/* harmony import */ var _uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../@uisftech/tzb/upaginator/upaginator.module */ "./src/app/@uisftech/tzb/upaginator/upaginator.module.ts");
/* harmony import */ var _uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../@uisftech/tzb/udatatable/datatable */ "./src/app/@uisftech/tzb/udatatable/datatable.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//客户组件



 //渠道管理详情
 //渠道管理修改
 //渠道管理新增
 //渠道管理
//页面



var ProductMarketModule = /** @class */ (function () {
    function ProductMarketModule() {
    }
    ProductMarketModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _product_market_routing__WEBPACK_IMPORTED_MODULE_3__["ProductMarketRouting"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__["SharedBasisModule"],
                _uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_10__["UDataTableModule"],
                _uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_9__["UPaginatorModule"],
            ],
            declarations: [
                _channel_management_channel_management_component__WEBPACK_IMPORTED_MODULE_7__["ChannelManagementComponent"],
                _channel_management_channel_management_add_channel_management_add_component__WEBPACK_IMPORTED_MODULE_6__["ChannelManagementAddComponent"],
                _channel_management_channel_management_modify_channel_management_modify_component__WEBPACK_IMPORTED_MODULE_5__["ChannelManagementModifyComponent"],
                _channel_management_channel_management_details_channel_management_details_component__WEBPACK_IMPORTED_MODULE_4__["ChannelManagementDetailsComponent"],
                _product_launch_product_launch_component__WEBPACK_IMPORTED_MODULE_8__["ProductLaunchComponent"],
            ],
            entryComponents: [],
            providers: []
        })
    ], ProductMarketModule);
    return ProductMarketModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-market/product-market.routing.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-market/product-market.routing.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductMarketRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductMarketRouting", function() { return ProductMarketRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _channel_management_channel_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./channel-management/channel-management.component */ "./src/app/pages/tzb/product-manage/product-market/channel-management/channel-management.component.ts");

//页面
 //渠道管理
var routes = [
    {
        path: 'channel-management', component: _channel_management_channel_management_component__WEBPACK_IMPORTED_MODULE_1__["ChannelManagementComponent"],
    },
    {
        path: 'product-launch', loadChildren: './product-launch/product-launch.module#ProductLaunchModule',
    },
];
var ProductMarketRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=product-market-product-market-module.js.map