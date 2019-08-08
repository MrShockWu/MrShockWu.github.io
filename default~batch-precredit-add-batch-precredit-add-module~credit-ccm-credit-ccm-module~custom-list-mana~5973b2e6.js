(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~batch-precredit-add-batch-precredit-add-module~credit-ccm-credit-ccm-module~custom-list-mana~5973b2e6"],{

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-add/custom-black-add.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-add/custom-black-add.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-deal\">\r\n    <div class=\"ui-g-12\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>是否我行客户:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"isMybankCustList\" formControlName=\"isMybankCust\" (onChange)=\"isMybank()\"></p-dropdown>\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['isMybankCust'].valid&&userform.controls['isMybankCust'].dirty\">\r\n                            <span *ngIf=\"userform.controls['isMybankCust'].errors['required']\">请输入是否我行客户！</span>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"bankown\" class=\"ui-g-2 text-right\">\r\n                        <label appValidation>客户类别:</label>\r\n                    </div>\r\n                    <div *ngIf=\"bankown\" class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"customerTypeList\" (onChange)=\"iscustomer()\" formControlName=\"customerType\"></p-dropdown>\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['customerType'].valid&&userform.controls['customerType'].dirty\">\r\n                            <span *ngIf=\"userform.controls['customerType'].errors['required']\">请输入客户类别！</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bank\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>客户号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4 queryinputbtn\">\r\n                        <input class=\"queryinputOrg\" disabled pInputText formControlName=\"partyId\">\r\n                        <div (click)=\"perTreeShow()\" class=\"clickspan\">\r\n                            <a class=\"a-hand\">\r\n                                <span>...</span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label *ngIf=\"!cust\">客户名称:</label>\r\n                        <label *ngIf=\"cust\" appValidation>客户名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\">\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['custName'].valid&&userform.controls['custName'].dirty\">\r\n                            <span *ngIf=\"userform.controls['custName'].errors['required']\">请输入客户名称！</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label *ngIf=\"cust\">证件类型:</label>\r\n                        <label *ngIf=\"!cust\" appValidation>证件类型:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"idTypeList\" formControlName=\"idType\" (onChange)=\"idTypeChange($event)\"></p-dropdown>\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['idType'].valid&&userform.controls['idType'].dirty\">\r\n                            <span *ngIf=\"userform.controls['idType'].errors['required']\">请输入证件类型！</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label *ngIf=\"cust && !custType\">证件号:</label>\r\n                        <label *ngIf=\"!cust\" appValidation>证件号:</label>\r\n                        <label *ngIf=\"custType\" appValidation>证件号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"idNo\">\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['idNo'].valid&&userform.controls['idNo'].dirty\">\r\n                            <span *ngIf=\"userform.controls['idNo'].errors['required']\">请输入证件号！</span>\r\n                            <span *ngIf=\"userform.hasError('maxlength','idNo')\">证件号不能超过18位!</span>\r\n                            <span *ngIf=\"userform.hasError('checkEnAndNum','idNo')\">证件号码输入有误!</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>联系电话:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"cellphone\">\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['cellphone'].valid&&userform.controls['cellphone'].dirty\">\r\n                            <span *ngIf=\"userform.hasError('maxlength','cellphone')\">联系电话不能超过20位!</span>\r\n                            <span *ngIf=\"userform.hasError('pattern','cellphone')\">联系电话输入有误!</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>联系地址:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"contactAddress\">\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['contactAddress'].valid&&userform.controls['contactAddress'].dirty\">\r\n                            <span *ngIf=\"userform.hasError('maxlength','contactAddress')\">联系地址不能超过255位!</span>\r\n                            <span *ngIf=\"userform.hasError('specialSymbol','contactAddress')\">联系地址不支持特殊字符！!</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>一级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"listTypeOneList\" formControlName=\"listTypeOne\" (onChange)=\"listType(1)\"></p-dropdown>\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['listTypeOne'].valid&&userform.controls['listTypeOne'].dirty\">\r\n                            <span *ngIf=\"userform.controls['listTypeOne'].errors['required']\">请输入一级名单！</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>二级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"listTypeTwoList\" formControlName=\"listTypeTwo\" (onChange)=\"listType(2)\"></p-dropdown>\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['listTypeTwo'].valid&&userform.controls['listTypeTwo'].dirty\">\r\n                            <span *ngIf=\"userform.controls['listTypeTwo'].errors['required']\">请输入二级名单！</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label *ngIf=\"risk\">风险管控等级:</label>\r\n                        <label *ngIf=\"!risk\"  appValidation>风险管控等级:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"listTypeIdList\" formControlName=\"listTypeId\" (onChange)=\"listType(3)\"></p-dropdown>\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['listTypeId'].valid&&userform.controls['listTypeId'].dirty\">\r\n                            <span *ngIf=\"userform.controls['listTypeId'].errors['required']\">请选择风险管控等级！</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>状态:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"statusIdList\" formControlName=\"statusId\" [disabled]=\"true\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>分类编码:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"classifyId\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>录入方式:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"inListTypeList\" formControlName=\"inListType\" [disabled]=\"true\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>录入原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <textarea rows=\"5\" cols=\"60\" maxlength=\"255\" placeholder=\"最大输入255字数\" pInputTextarea formControlName=\"toListReason\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 btn-return\">\r\n                <button pButton type=\"button\" label=\"保存\" (click)=\"doSave(1)\" [disabled]=\"!userform.valid&&AshPlacing\"></button>\r\n                <button pButton type=\"button\" label=\"提交\" (click)=\"doSave(2)\" [disabled]=\"!userform.valid&&AshPlacing\"></button>\r\n                <button pButton type=\"button\" label=\"返回\" (click)=\"doReset()\"></button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<tzb-loading [blocked]=\"loadingShow.flag\"></tzb-loading>\r\n<!-- 提交 -->\r\n<p-dialog *ngIf=\"dealPerShow\" header=\"提交给\" [(visible)]=\"dealPerShow\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>\r\n<!-- 客户查询 -->\r\n<!-- <p-dialog #dialog *ngIf=\"display\" header=\"客户查询\" [(visible)]=\"display\" modal=\"modal\" draggable=\"false\">\r\n    <app-customer-list-center (outValue)=\"getMsg($event)\"></app-customer-list-center>\r\n</p-dialog> -->\r\n<p-dialog #dialog header=\"客户查询\" [(visible)]=\"display\" modal=\"modal\">\r\n    <app-customer-list-center (outValue)=\"getMsg($event)\"></app-customer-list-center>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-add/custom-black-add.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-add/custom-black-add.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-deal {\n  max-height: 650px !important; }\n  .my-deal .btn-return {\n    margin-top: 10px !important;\n    text-align: center; }\n  .my-deal .text-right {\n    text-align: right; }\n  .my-deal .ui-g-12 {\n    margin-top: -12px; }\n  .queryinputbtn {\n  float: left;\n  display: flex; }\n  .queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n  .queryinputbtn .clickspan {\n    width: 14%;\n    height: 25px;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLWJsYWNrLWxpc3QvY3VzdG9tLWJsYWNrLWFkZC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1saXN0LW1hbmFnZVxcY3VzdG9tLWJsYWNrLWxpc3RcXGN1c3RvbS1ibGFjay1hZGRcXGN1c3RvbS1ibGFjay1hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBNEIsRUFBQTtFQURoQztJQUdRLDJCQUEyQjtJQUMzQixrQkFBa0IsRUFBQTtFQUoxQjtJQU9RLGlCQUFpQixFQUFBO0VBUHpCO0lBVVEsaUJBQWlCLEVBQUE7RUFHekI7RUFDSSxXQUFXO0VBQ1gsYUFBYSxFQUFBO0VBRmpCO0lBSVEsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsMEJBQTBCLEVBQUE7RUFQbEM7SUFVUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWxpc3QtbWFuYWdlL2N1c3RvbS1ibGFjay1saXN0L2N1c3RvbS1ibGFjay1hZGQvY3VzdG9tLWJsYWNrLWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1kZWFsIHtcclxuICAgIG1heC1oZWlnaHQ6IDY1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAuYnRuLXJldHVybiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0LXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC51aS1nLTEye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gICAgfVxyXG59XHJcbi5xdWVyeWlucHV0YnRuIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5xdWVyeWlucHV0T3JnIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgICAgICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNsaWNrc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-add/custom-black-add.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-add/custom-black-add.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: CustomBlackAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomBlackAdd", function() { return CustomBlackAdd; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/components/dialog/dialog */ "./node_modules/primeng/components/dialog/dialog.js");
/* harmony import */ var primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomBlackAdd = /** @class */ (function () {
    function CustomBlackAdd(httpService, messageService, commonFunc, commfunc, fb) {
        this.httpService = httpService;
        this.messageService = messageService;
        this.commonFunc = commonFunc;
        this.commfunc = commfunc;
        this.fb = fb;
        this.display = false;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.outValue2 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadingShow = { flag: false }; // loading框
        this.msgs = [];
        this.today = new Date(); //日期
        this.bank = false; //本行
        this.bankown = false; //非本行
        this.jbxx = []; //名单码值
        this.reList = []; //类型表
        this.dealPerShow = false;
        this.risk = false; // 风险管控登记
        this.AshPlacing = true; // 置灰
        this.custType = false; //证件类型是否选择
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        this.userName = chName.userName;
        this.orgName = chName.orgName;
        this.userform = fb.group({
            isMybankCust: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            customerType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            partyId: [''],
            custName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            statusId: ['Y'],
            listTypeOne: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            listTypeTwo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            listTypeId: [''],
            idType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            idNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cellphone: [''],
            contactAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["specialSymbol"]]],
            inListType: ['1'],
            classifyId: [''],
            toListReason: [''],
            registerUserName: [''],
            registerOrgName: [""],
        });
    }
    CustomBlackAdd.prototype.ngOnInit = function () {
        console.log(this.user, "this.user");
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        console.log(chName, "chName");
        this.queryOrgName();
        this.codeValues(); //调用方法，获取全部码值
        this.query();
        this.isMybankCustList = this.code['isMybankCust'];
        this.customerTypeList = this.code['customerType'];
        this.statusIdList = this.code['statusId'];
        this.inListTypeList = this.code['inListType'];
        this.idTypeList = this.code['CERT_TYPE'];
        this.isMybank();
        this.AshPlacing = true;
    };
    CustomBlackAdd.prototype.queryOrgName = function () {
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        for (var i = 0; i < chName.orgList.length; i++) {
            if (this.user.extParam.orgId == chName.orgList[i].orgId) {
                this.orgName = chName.orgList[i].orgName;
            }
        }
        console.log(this.orgName, "111111111");
    };
    //码值
    CustomBlackAdd.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //是否我行客户
    CustomBlackAdd.prototype.isMybank = function () {
        this.cust = false;
        if (this.userform.value.isMybankCust == 'Y' || this.userform.value.isMybankCust == '') {
            this.bank = true;
            this.bankown = false;
            this.userform.removeControl('idType');
            this.userform.removeControl('customerType');
            this.userform.removeControl('idNo');
            this.userform.removeControl('cellphone');
            this.userform.addControl('partyId', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["checkNumber"]]));
        }
        else if (this.userform.value.isMybankCust == 'N') {
            this.bank = false;
            this.bankown = true;
            this.userform.removeControl('partyId');
            this.userform.addControl('customerType', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
            this.userform.addControl('idType', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
            this.userform.addControl('cellphone', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/)]));
            this.userform.addControl('idNo', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(32), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["checkEnAndNum"]]));
            this.userform.addControl('custName', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
        }
    };
    // 个人和企业
    CustomBlackAdd.prototype.iscustomer = function () {
        debugger;
        if (this.userform.value.isMybankCust == 'N' && this.userform.value.customerType == '2') { //企业
            this.cust = true;
            this.userform.removeControl('partyId');
            this.userform.removeControl('idType');
            this.userform.removeControl('idNo');
            this.userform.removeControl('custName');
            this.userform.addControl('idType', this.fb.control(''));
            this.userform.addControl('idNo', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(32), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["checkEnAndNum"]]));
            this.userform.addControl('customerType', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
            this.userform.addControl('custName', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
            this.userform.addControl('cellphone', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/)]));
        }
        if (this.userform.value.isMybankCust == 'N' && this.userform.value.customerType == '1') {
            this.cust = false;
            this.userform.removeControl('partyId');
            this.userform.removeControl('custName');
            this.userform.removeControl('idType');
            this.userform.removeControl('idNo');
            this.userform.addControl('custName', this.fb.control(''));
            this.userform.addControl('customerType', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
            this.userform.addControl('idType', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
            this.userform.addControl('cellphone', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/)]));
            this.userform.addControl('idNo', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(32), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["checkEnAndNum"]]));
        }
    };
    // 证件类型 是否身份证或其他
    CustomBlackAdd.prototype.idTypeChange = function (event) {
        console.log(event);
        if (this.userform.value.isMybankCust == 'N' && event.value && event.value == '0') {
            if (this.cust) {
                this.custType = true;
            }
            this.userform.removeControl('idNo');
            this.userform.addControl('idNo', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(18), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["checkEnAndNum"]]));
        }
        else if (this.userform.value.isMybankCust == 'N' && event.value && event.value != '0' && this.userform.value.customerType == '1') {
            this.userform.removeControl('idNo');
            this.userform.addControl('idNo', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
        }
        else if (this.userform.value.isMybankCust == 'N' && event.value && event.value != '0' && this.userform.value.customerType == '2') {
            this.custType = true;
            this.userform.removeControl('idNo');
            this.userform.addControl('idNo', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
        }
        if (!event.value) {
            this.custType = false;
            this.userform.removeControl('idNo');
            this.userform.addControl('idNo', this.fb.control(''));
        }
    };
    //名单联动
    CustomBlackAdd.prototype.listType = function (i) {
        var _this = this;
        if (i == '1') {
            var param = {};
            param['listTypeHierarchy'] = 2;
            param['parentListTypeId'] = this.userform.value.listTypeOne;
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var list = data.returnList;
                    if (data.returnList.length == 0) {
                        _this.risk = true;
                        _this.jbxx = [];
                        _this.userform.get('classifyId').setValue("");
                    }
                    else {
                        _this.risk = false;
                        var list_1 = data.returnList;
                        _this.jbxx = [];
                        list_1.forEach(function (element) {
                            var obj = {};
                            obj['label'] = element.listTypeName;
                            obj['value'] = element.listTypeId;
                            _this.jbxx.push(obj);
                        });
                    }
                    _this.jbxx.unshift({ label: '请选择', value: '' });
                    _this.listTypeTwoList = _this.jbxx;
                    _this.userform.get('listTypeTwo').setValue('');
                    _this.userform.get('listTypeTwo').updateValueAndValidity();
                    _this.msgs = [];
                    _this.listTypeIdList = []; //清空风险管控等级
                    // this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            });
        }
        else if (i == '2') {
            var param = {};
            param['listTypeHierarchy'] = 3;
            param['parentListTypeId'] = this.userform.value.listTypeTwo;
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.reList = data.returnList;
                    if (data.returnList.length == 0) {
                        _this.risk = true;
                        _this.jbxx = [];
                        _this.userform.get('classifyId').setValue("");
                        _this.userform.get('classifyId').updateValueAndValidity();
                        _this.userform.get('listTypeId').clearValidators();
                        _this.userform.get('listTypeId').updateValueAndValidity();
                    }
                    else {
                        _this.risk = false;
                        var list = data.returnList;
                        _this.jbxx = [];
                        list.forEach(function (element) {
                            var obj = {};
                            obj['label'] = element.listTypeName;
                            obj['value'] = element.listTypeId;
                            _this.jbxx.push(obj);
                        });
                        _this.userform.get('listTypeId').setValue('');
                        _this.userform.get('listTypeId').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                        _this.userform.get('listTypeId').updateValueAndValidity();
                    }
                    _this.jbxx.unshift({ label: '请选择', value: '' });
                    _this.listTypeIdList = _this.jbxx;
                    _this.msgs = [];
                    // this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            });
        }
        else if (i == '3') {
            for (var e = 0; e < this.reList.length; e++) {
                if (this.userform.value.listTypeId == this.reList[e].listTypeId) {
                    this.userform.get('classifyId').setValue(this.reList[e].classifyId);
                }
            }
        }
    };
    //查询
    CustomBlackAdd.prototype.query = function () {
        var _this = this;
        var param = {};
        param['listTypeHierarchy'] = 1;
        this.httpService.selectBlackListType(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var list = data.returnList;
                list.forEach(function (element) {
                    var obj = {};
                    obj['label'] = element.listTypeName;
                    obj['value'] = element.listTypeId;
                    _this.jbxx.push(obj);
                });
                _this.jbxx.unshift({ label: '请选择', value: '' });
                _this.listTypeOneList = _this.jbxx;
                _this.msgs = [];
                //  this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    // 保存/提交
    CustomBlackAdd.prototype.doSave = function (i) {
        var _this = this;
        if (i == '1') {
            this.msgs = [];
            var param = Object.assign({}, this.userform.value);
            param['registerOrg'] = this.user.extParam.orgId;
            param['registerUser'] = this.user.userId;
            param['registerUserName'] = this.userName;
            param['registerOrgName'] = this.orgName;
            param['approvalStatus'] = 'AA';
            param['operationType'] = '1001';
            param['registerTime'] = this.commfunc.transDateN(this.today);
            if (!this.userform.value.listTypeId && !this.risk) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '请选择风险管控等级!' }];
                return;
            }
            else if (this.risk) {
                param['listTypeId'] = '';
            }
            else {
                for (var e = 0; e < this.reList.length; e++) {
                    if (this.userform.value.listTypeId == this.reList[e].listTypeId) {
                        param['listTypeId'] = this.reList[e].listTypeId;
                    }
                }
            }
            this.AshPlacing = false;
            //console.log(param,"1111111111111")
            this.httpService.addListTaskInfo(param).subscribe(function (data) {
                _this.AshPlacing = true;
                if (data.returnCode.code == 'success') {
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                    setTimeout(function () {
                        _this.outValue.emit(false);
                    }, 1000);
                }
                else {
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (err) {
                _this.AshPlacing = true;
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            });
        }
        else if (i == '2') {
            this.waitSelUserList = this.commfunc.query('KHYY_MDJSP', {});
            if (!this.waitSelUserList.erro) {
                this.outVal = this.waitSelUserList.waitSelUserList;
                var perPageShow = this.waitSelUserList.display;
                if (perPageShow == true) {
                    this.dealPerShow = true;
                }
                else {
                    var param = Object.assign({}, this.userform.value);
                    param['registerOrg'] = this.user.extParam.orgId;
                    param['registerUser'] = this.user.userId;
                    param['registerUserName'] = this.userName;
                    param['registerOrgName'] = this.orgName;
                    param['approvalStatus'] = 'AB';
                    param['operationType'] = '1001';
                    param['registerTime'] = this.commfunc.transDateN(this.today);
                    for (var e = 0; e < this.reList.length; e++) {
                        if (this.userform.value.listTypeId == this.reList[e].listTypeId) {
                            param['listTypeId'] = this.reList[e].listTypeId;
                        }
                    }
                    this.AshPlacing = false;
                    this.httpService.addListTaskInfo(param).subscribe(function (data) {
                        _this.AshPlacing = true;
                        if (data.returnCode.code == 'success') {
                            _this.msgs = [];
                            _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                            setTimeout(function () {
                                _this.outValue.emit(false);
                            }, 1000);
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                        }
                    }, function (err) {
                        _this.AshPlacing = true;
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
                    });
                }
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
            }
        }
    };
    CustomBlackAdd.prototype.outDisplayCall = function (event) {
        var _this = this;
        // this.dealPerShow = event;
        setTimeout(function () {
            _this.dealPerShow = event;
        }, 4000);
    };
    CustomBlackAdd.prototype.outValueCall = function (event) {
        var _this = this;
        this.outVal = event;
        var ss = '';
        var specifyNextNode = '';
        var outFlowId;
        this.outVal.forEach(function (item) {
            ss += item.tellerId;
            specifyNextNode = item.userBank;
            outFlowId = item.outFlowId;
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        commonHeader.extParam['specifyNextNode'] = outFlowId;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        var param = Object.assign({}, this.userform.value);
        param['registerOrg'] = this.user.extParam.orgId;
        param['registerUser'] = this.user.userId;
        param['registerUserName'] = this.userName;
        param['registerOrgName'] = this.orgName;
        param['approvalStatus'] = 'AB';
        param['operationType'] = '1001';
        param['registerTime'] = this.commfunc.transDateN(this.today);
        param['authUser'] = ss;
        param['author'] = specifyNextNode;
        for (var e = 0; e < this.reList.length; e++) {
            if (this.userform.value.listTypeId == this.reList[e].listTypeId) {
                param['listTypeId'] = this.reList[e].listTypeId;
            }
        }
        this.httpService.addListTaskInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // this.outValue.emit(false);
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                setTimeout(function () {
                    _this.outValue.emit(false);
                }, 1000);
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
            var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
            if (s.extParam.specifyNextOpers || s.extParam.specifyNextNode) {
                delete s.extParam.specifyNextOpers;
                delete s.extParam.specifyNextNode;
                var commonHeader_1 = s;
                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    // 返回
    CustomBlackAdd.prototype.doReset = function () {
        this.outValue.emit(false);
    };
    // 客户查询弹框
    CustomBlackAdd.prototype.perTreeShow = function () {
        this.display = true;
    };
    // 客户查询关闭传值
    CustomBlackAdd.prototype.getMsg = function (e) {
        this.userform.get('partyId').setValue(e.custNo);
        this.userform.get('custName').setValue(e.custName);
        this.display = false;
    };
    CustomBlackAdd.prototype.ngAfterViewInit = function () {
        this.cancelDialogShake();
    };
    CustomBlackAdd.prototype.cancelDialogShake = function () {
        if (this.dialog) {
            this.dialog.center = function () {
                var elementWidth = this.domHandler.getOuterWidth(this.containerViewChild.nativeElement);
                var elementHeight = this.domHandler.getOuterHeight(this.containerViewChild.nativeElement);
                if (elementWidth === 0 && elementHeight === 0) {
                    this.containerViewChild.nativeElement.style.visibility = 'hidden';
                    this.containerViewChild.nativeElement.style.display = 'block';
                    elementWidth = this.domHandler.getOuterWidth(this.containerViewChild.nativeElement);
                    elementHeight = this.domHandler.getOuterHeight(this.containerViewChild.nativeElement);
                    this.containerViewChild.nativeElement.style.display = 'none';
                    this.containerViewChild.nativeElement.style.visibility = 'visible';
                }
                var viewport = this.domHandler.getViewport();
                var x = Math.max(Math.ceil((viewport.width - elementWidth)) / 2, 0);
                var y = Math.max(Math.ceil((viewport.height - elementHeight)) / 2, 0);
                // 解决抖动问题
                if (!this.containerViewChild.nativeElement.style.left ||
                    !this.containerViewChild.nativeElement.style.top ||
                    Math.abs(this.containerViewChild.nativeElement.style.left - x) > 5 ||
                    Math.abs(this.containerViewChild.nativeElement.style.top - y) > 5) {
                    this.containerViewChild.nativeElement.style.left = x + 'px';
                    this.containerViewChild.nativeElement.style.top = y + 'px';
                }
            };
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomBlackAdd.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomBlackAdd.prototype, "outValue2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dialog'),
        __metadata("design:type", primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7__["Dialog"])
    ], CustomBlackAdd.prototype, "dialog", void 0);
    CustomBlackAdd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-black-add',
            template: __webpack_require__(/*! ./custom-black-add.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-add/custom-black-add.component.html"),
            styles: [__webpack_require__(/*! ./custom-black-add.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-add/custom-black-add.component.scss")],
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["CusListManageHttpService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_6__["Customtools"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CustomBlackAdd);
    return CustomBlackAdd;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-batch/custom-black-batch.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-batch/custom-black-batch.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-deal\">\r\n    <div class=\"ui-g-12\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>上传文件:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <p-fileUpload accept=\".xls\" invalidFileTypeMessageDetail=\"只能上传Excel\" invalidFileTypeMessageSummary=\"\" chooseLabel=\"浏览\" uploadLabel=\"上传\"\r\n                            cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"load($event)\">\r\n                        </p-fileUpload>\r\n                        <div *ngIf=\"files.length>0\">\r\n                            <span *ngFor=\"let item of files\">{{item.name}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-2\">\r\n                        <a style=\"color:red;cursor: pointer;line-height:35px;\" (click)=\"downword()\">模板下载</a>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>一级名单分类:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"listTypeOneList\" formControlName=\"listTypeOne\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"inStock\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>名单来源:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-10\">\r\n                        <input type=\"text\" pInputText formControlName=\"sourceDes\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>录入方式:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.inListType | codeValuePie:inListTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"inStock\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>录入原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"toListReason\"></textarea>\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['toListReason'].valid&&userform.controls['toListReason'].dirty\">\r\n                        <span *ngIf=\"userform.hasError('maxlength','toListReason')\">录入原因不能超过255位!</span>\r\n                        <span *ngIf=\"userform.hasError('specialSymbol','toListReason')\">录入原因不支持特殊字符！</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"outStock\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>出库原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <textarea rows=\"5\" cols=\"60\" maxlength=\"255\" placeholder=\"最大输入字数255\" pInputTextarea formControlName=\"toListReason\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办人:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerUserName\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办机构:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerOrgName\" pInputText disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办时间:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerTime\" pInputText disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 btn-return\">\r\n                <!-- <button pButton type=\"button\" label=\"保存\" (click)=\"doSave(1)\" [disabled]=\"!userform.valid\"></button>\r\n                <button pButton type=\"button\" label=\"提交\" (click)=\"doSave(2)\" [disabled]=\"!userform.valid\"></button> -->\r\n                <span *ngIf=\"!userform.valid\">\r\n                    <button pButton type=\"button\" label=\"保存\" (click)=\"doSave(1)\" [disabled]=\"!userform.valid\"></button>\r\n                    <button pButton type=\"button\" label=\"提交\" (click)=\"doSave(2)\" [disabled]=\"!userform.valid\"></button>\r\n                </span>\r\n                <span *ngIf=\"userform.valid\">\r\n                    <button pButton type=\"button\" label=\"保存\" (click)=\"doSave(1)\" [disabled]=\"!fileSuccess\"></button>\r\n                    <button pButton type=\"button\" label=\"提交\" (click)=\"doSave(2)\" [disabled]=\"!fileSuccess\"></button>\r\n                </span>\r\n                <button pButton type=\"button\" label=\"返回\" (click)=\"doReset()\"></button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<tzb-loading [blocked]=\"loadingShow.flag\"></tzb-loading>\r\n<!-- 提交 -->\r\n<p-dialog *ngIf=\"dealPerShow\" header=\"提交给\" [(visible)]=\"dealPerShow\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-batch/custom-black-batch.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-batch/custom-black-batch.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-deal {\n  max-height: 650px !important; }\n  .my-deal .btn-return {\n    margin-top: 10px !important;\n    text-align: center; }\n  .my-deal .text-right {\n    text-align: right; }\n  .my-deal .ui-g-12 {\n    margin-top: -12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLWJsYWNrLWxpc3QvY3VzdG9tLWJsYWNrLWJhdGNoL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWxpc3QtbWFuYWdlXFxjdXN0b20tYmxhY2stbGlzdFxcY3VzdG9tLWJsYWNrLWJhdGNoXFxjdXN0b20tYmxhY2stYmF0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBNEIsRUFBQTtFQURoQztJQUdRLDJCQUEyQjtJQUMzQixrQkFBa0IsRUFBQTtFQUoxQjtJQU9RLGlCQUFpQixFQUFBO0VBUHpCO0lBVVEsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1saXN0LW1hbmFnZS9jdXN0b20tYmxhY2stbGlzdC9jdXN0b20tYmxhY2stYmF0Y2gvY3VzdG9tLWJsYWNrLWJhdGNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWRlYWwge1xyXG4gICAgbWF4LWhlaWdodDogNjUwcHggIWltcG9ydGFudDtcclxuICAgIC5idG4tcmV0dXJuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHQtcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnVpLWctMTJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-batch/custom-black-batch.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-batch/custom-black-batch.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: CustomBlackBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomBlackBatch", function() { return CustomBlackBatch; });
/* harmony import */ var app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
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







var CustomBlackBatch = /** @class */ (function () {
    function CustomBlackBatch(httpService, messageService, commonFunc, commfunc, fb) {
        this.httpService = httpService;
        this.messageService = messageService;
        this.commonFunc = commonFunc;
        this.commfunc = commfunc;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadingShow = { flag: false }; // loading框
        this.msgs = [];
        this.inStock = false; //入库
        this.outStock = false; //出库
        // 文件
        this.files = [];
        this.fileList = [];
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_UPLOAD"]; // 上传
        this.today = new Date(); //日期
        this.jbxx = []; //名单码值
        this.dealPerShow = false;
        this.fileSuccess = false; // 文件是否上传
        this.userform = fb.group({
            listTypeOne: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sourceDes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            inListType: ['2', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            toListReason: [''],
            registerUser: [''],
            registerUserName: [''],
            registerOrg: [''],
            registerOrgName: [''],
            registerTime: [''],
            filePath: [''],
            fileName: [''],
        });
    }
    CustomBlackBatch.prototype.ngOnInit = function () {
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        this.userName = chName.userName;
        this.orgName = chName.orgName;
        this.codeValues(); //调用方法，获取全部码值
        this.isMybankCustList = this.code['isMybankCust'];
        this.customerTypeList = this.code['customerType'];
        this.statusIdList = this.code['statusId'];
        this.inListTypeList = this.code['inListType'];
        if (this.inValue == '1') { //入库页面
            this.inStock = true;
            this.outStock = false;
        }
        else if (this.inValue == '2') { //出库页面
            this.inStock = false;
            this.outStock = true;
            this.userform.removeControl('sourceDes');
            this.userform.removeControl('inListType');
        }
        this.userform.get('registerUser').setValue(this.user.userId);
        this.userform.get('registerUserName').setValue(this.userName);
        this.userform.get('registerOrg').setValue(this.user.extParam.orgId);
        this.userform.get('registerOrgName').setValue(this.orgName);
        this.userform.get('registerTime').setValue(this.commfunc.transDateN(this.today));
        this.query();
        this.queryOrgName();
    };
    CustomBlackBatch.prototype.queryOrgName = function () {
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        for (var i = 0; i < chName.orgList.length; i++) {
            if (this.user.extParam.orgId == chName.orgList[i].orgId) {
                this.orgName = chName.orgList[i].orgName;
            }
        }
        console.log(this.orgName, "111111111");
    };
    //码值
    CustomBlackBatch.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //查询
    CustomBlackBatch.prototype.query = function () {
        var _this = this;
        var param = {};
        param['listTypeHierarchy'] = 1;
        this.httpService.selectBlackListType(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var list = data.returnList;
                list.forEach(function (element) {
                    var obj = {};
                    obj['label'] = element.listTypeName;
                    obj['value'] = element.listTypeId;
                    _this.jbxx.push(obj);
                });
                _this.jbxx.unshift({ label: '请选择', value: '' });
                _this.listTypeOneList = _this.jbxx;
                _this.msgs = [];
                //this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    // 按模板-文件上传
    CustomBlackBatch.prototype.load = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files = [];
            this.files.push(file);
        }
        if (event.xhr.response) {
            this.fileList = JSON.parse(event.xhr.response);
            if (this.fileList.length > 0) {
                this.fileSuccess = true;
            }
            else {
                this.fileSuccess = false;
            }
            if (this.fileList.success == false) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: this.fileList.errorMsg });
                this.files = [];
                return;
            }
        }
        if (this.fileList[0]) {
            this.userform.get('filePath').setValue(this.fileList[0].fileUrl);
            this.userform.get('fileName').setValue(this.fileList[0].fileName);
        }
    };
    // 保存/提交
    CustomBlackBatch.prototype.doSave = function (i) {
        var _this = this;
        if (this.inValue == '1') { //入库
            if (i == '1') { //入库保存
                var param = Object.assign({}, this.userform.value);
                param['operationType'] = '1002';
                param['approvalStatus'] = 'AA';
                param['registerOrg'] = this.user.extParam.orgId;
                param['registerUser'] = this.user.userId;
                param['registerUserName'] = this.userName;
                param['registerOrgName'] = this.orgName;
                this.httpService.importListTaskInfo(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        setTimeout(function () {
                            _this.outValue.emit(false);
                        }, 1000);
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
                });
            }
            if (i == '2') { //入库提交
                this.waitSelUserList = this.commfunc.query('KHYY_MDJSP', {});
                if (!this.waitSelUserList.erro) {
                    this.outVal = this.waitSelUserList.waitSelUserList;
                    var perPageShow = this.waitSelUserList.display;
                    if (perPageShow == true) {
                        this.dealPerShow = true;
                    }
                    else {
                        var param = Object.assign({}, this.userform.value);
                        param['operationType'] = '1002';
                        param['approvalStatus'] = 'AB';
                        param['registerOrg'] = this.user.extParam.orgId;
                        param['registerUser'] = this.user.userId;
                        param['registerUserName'] = this.userName;
                        param['registerOrgName'] = this.orgName;
                        this.httpService.importListTaskInfo(param).subscribe(function (data) {
                            if (data.returnCode.code == 'success') {
                                _this.msgs = [];
                                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                                _this.outValue.emit(false);
                            }
                            else {
                                _this.msgs = [];
                                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                            }
                        }, function (err) {
                            _this.msgs = [];
                            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
                        });
                    }
                }
                else {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
                }
            }
        }
        else if (this.inValue == '2') { //出库
            if (i == '1') { //出库保存
                var param = Object.assign({}, this.userform.value);
                param['operationType'] = '1004';
                param['approvalStatus'] = 'AA';
                param['registerOrg'] = this.user.extParam.orgId;
                param['registerUser'] = this.user.userId;
                param['registerUserName'] = this.userName;
                param['registerOrgName'] = this.orgName;
                this.httpService.importListTaskInfo(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        setTimeout(function () {
                            _this.outValue.emit(false);
                        }, 1000);
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
                });
            }
            if (i == '2') { //出库提交
                this.waitSelUserList = this.commfunc.query('KHYY_MDJSP', {});
                if (!this.waitSelUserList.erro) {
                    this.outVal = this.waitSelUserList.waitSelUserList;
                    var perPageShow = this.waitSelUserList.display;
                    if (perPageShow == true) {
                        this.dealPerShow = true;
                    }
                    else {
                        var param = Object.assign({}, this.userform.value);
                        param['operationType'] = '1004';
                        param['approvalStatus'] = 'AB';
                        param['registerOrg'] = this.user.extParam.orgId;
                        param['registerUser'] = this.user.userId;
                        param['registerUserName'] = this.userName;
                        param['registerOrgName'] = this.orgName;
                        this.httpService.importListTaskInfo(param).subscribe(function (data) {
                            if (data.returnCode.code == 'success') {
                                _this.outValue.emit(false);
                                _this.msgs = [];
                                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                            }
                            else {
                                _this.msgs = [];
                                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                            }
                        }, function (err) {
                            _this.msgs = [];
                            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
                        });
                    }
                }
                else {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
                }
            }
        }
    };
    CustomBlackBatch.prototype.outDisplayCall = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.dealPerShow = event;
        }, 4000);
    };
    CustomBlackBatch.prototype.outValueCall = function (event) {
        var _this = this;
        this.outVal = event;
        var ss = '';
        var specifyNextNode = '';
        var outFlowId;
        this.outVal.forEach(function (item) {
            ss += item.tellerId;
            specifyNextNode = item.userBank;
            outFlowId = item.outFlowId;
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        commonHeader.extParam['specifyNextNode'] = outFlowId;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        if (this.inValue == '1') {
            var param = Object.assign({}, this.userform.value);
            param['operationType'] = '1002';
            param['approvalStatus'] = 'AB';
            param['registerOrg'] = this.user.extParam.orgId;
            param['registerUser'] = this.user.userId;
            param['registerUserName'] = this.userName;
            param['registerOrgName'] = this.orgName;
            param['authUser'] = ss;
            param['author'] = specifyNextNode;
            this.httpService.importListTaskInfo(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    // this.outValue.emit(false);
                    // this.msgs = [];
                    // this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                    setTimeout(function () {
                        _this.outValue.emit(false);
                    }, 1000);
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            });
        }
        else if (this.inValue == '2') {
            var param = Object.assign({}, this.userform.value);
            param['operationType'] = '1004';
            param['approvalStatus'] = 'AB';
            param['registerOrg'] = this.user.extParam.orgId;
            param['registerUser'] = this.user.userId;
            param['registerUserName'] = this.userName;
            param['registerOrgName'] = this.orgName;
            param['authUser'] = ss;
            param['author'] = specifyNextNode;
            this.httpService.importListTaskInfo(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    //     this.outValue.emit(false);
                    //     this.msgs = [];
                    //    this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                    setTimeout(function () {
                        _this.outValue.emit(false);
                    }, 1000);
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            });
        }
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (s.extParam.specifyNextOpers || s.extParam.specifyNextNode) {
            delete s.extParam.specifyNextOpers;
            delete s.extParam.specifyNextNode;
            var commonHeader_1 = s;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
        }
    };
    // 返回
    CustomBlackBatch.prototype.doReset = function () {
        this.outValue.emit(false);
    };
    // 模板下载
    CustomBlackBatch.prototype.downword = function () {
        if (this.inValue == '1') {
            open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI("listManagerInImport.xls") + "&fileUrl=" + "/copdata/moban/", '_blank');
        }
        else if (this.inValue == '2') {
            open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI("listManagerOutImport.xls") + "&fileUrl=" + "/copdata/moban/", '_blank');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], CustomBlackBatch.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CustomBlackBatch.prototype, "inValue", void 0);
    CustomBlackBatch = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'custom-black-batch',
            template: __webpack_require__(/*! ./custom-black-batch.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-batch/custom-black-batch.component.html"),
            styles: [__webpack_require__(/*! ./custom-black-batch.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-batch/custom-black-batch.component.scss")],
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_0__["CusListManageHttpService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__["Customtools"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CustomBlackBatch);
    return CustomBlackBatch;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-detail/custom-black-detail.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-detail/custom-black-detail.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-deal\">\r\n    <div class=\"ui-g-12\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>是否我行客户:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.isMybankCust | codeValuePie:isMybankCustList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\" *ngIf=\"!bank\">\r\n                        <label>客户类型:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\" *ngIf=\"!bank\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.customerType | codeValuePie:customerTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bank\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"partyId\" disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>证件类型:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.idType | codeValuePie:idTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>证件号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"idNo\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>联系电话:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"cellphone\" disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>联系地址:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"contactAddress\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>一级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.listTypeOne | codeValuePie:listTypeOneList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>二级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.listTypeTwo | codeValuePie:listTypeTwoList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>风险管控等级:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.listTypeName}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>状态:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.statusId | codeValuePie:statusIdList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>分类编码:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"classifyId\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>录入方式:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.inListType | codeValuePie:inListTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>录入原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"toListReason\" disabled></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <header-title [Info]=\"'名单调整历史'\"></header-title>\r\n            </div>\r\n            <div class=\"ui-g-12 base-table\" style=\"overflow-x:scroll;width:100%;text-align:center;margin-top:-10px;\">\r\n                <p-dataTable [value]=\"dataList\" class=\"table\" [emptyMessage]='tabMesg'>\r\n                    <p-column field=\"listTaskId\" header=\"任务编号\" [style]=\"{'width':'100px'}\">\r\n                        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                            <span class=\"colorImport\" (click)=\"Jump(col)\">{{col.listTaskId}}</span>\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column field=\"operationType\" header=\"操作类型\" [style]=\"{'width':'100px'}\">\r\n                        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                            <span>{{item.operationType | codeValuePie:operationTypeList}}</span>\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column field=\"registerUserName\" header=\"经办人\" [style]=\"{'width':'100px'}\"></p-column>\r\n                    <p-column field=\"registerTime\" header=\"经办日期\" [style]=\"{'width':'100px'}\"></p-column>\r\n                    <p-column field=\"registerOrgName\" header=\"经办机构\" [style]=\"{'width':'100px'}\"></p-column>\r\n                    <p-column field=\"approvalStatus\" header=\"审批状态\" [style]=\"{'width':'100px'}\">\r\n                        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                            <span>{{item.approvalStatus | codeValuePie:approvalStatusList}}</span>\r\n                        </ng-template>\r\n                    </p-column>\r\n                </p-dataTable>\r\n            </div>\r\n            <div class=\"ui-g-12 btn-return\">\r\n                <button pButton type=\"button\" label=\"返回\" (click)=\"doReset()\"></button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<tzb-loading [blocked]=\"loadingShow.flag\"></tzb-loading>\r\n<!-- 模态框 新增-->\r\n<p-dialog #dialog [(visible)]=\"dealPerShow\" *ngIf=\"dealPerShow\" modal=\"modal\" class=\"contact-track-f\">\r\n    <p-header>\r\n        单个名单任务详情\r\n    </p-header>\r\n    <custom-mission-detail [inValue]=\"inValue\" [modifyValue]=\"modifyValue\" (outValue)=\"detailCall($event)\"></custom-mission-detail>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-detail/custom-black-detail.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-detail/custom-black-detail.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-deal {\n  max-height: 650px !important; }\n  .my-deal .btn-return {\n    margin-top: 10px !important;\n    text-align: center; }\n  .my-deal .text-right {\n    text-align: right; }\n  .my-deal .ui-g-12 {\n    margin-top: -12px; }\n  .my-deal .colorImport {\n    color: #0094D2;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLWJsYWNrLWxpc3QvY3VzdG9tLWJsYWNrLWRldGFpbC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1saXN0LW1hbmFnZVxcY3VzdG9tLWJsYWNrLWxpc3RcXGN1c3RvbS1ibGFjay1kZXRhaWxcXGN1c3RvbS1ibGFjay1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBNEIsRUFBQTtFQURoQztJQUdRLDJCQUEyQjtJQUMzQixrQkFBa0IsRUFBQTtFQUoxQjtJQU9RLGlCQUFpQixFQUFBO0VBUHpCO0lBVVEsaUJBQWlCLEVBQUE7RUFWekI7SUFhUSxjQUFjO0lBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLWJsYWNrLWxpc3QvY3VzdG9tLWJsYWNrLWRldGFpbC9jdXN0b20tYmxhY2stZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWRlYWwge1xyXG4gICAgbWF4LWhlaWdodDogNjUwcHggIWltcG9ydGFudDtcclxuICAgIC5idG4tcmV0dXJuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHQtcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnVpLWctMTJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgICB9XHJcbiAgICAuY29sb3JJbXBvcnQge1xyXG4gICAgICAgIGNvbG9yOiAjMDA5NEQyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-detail/custom-black-detail.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-detail/custom-black-detail.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: CustomBlackDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomBlackDetail", function() { return CustomBlackDetail; });
/* harmony import */ var app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/components/dialog/dialog */ "./node_modules/primeng/components/dialog/dialog.js");
/* harmony import */ var primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomBlackDetail = /** @class */ (function () {
    function CustomBlackDetail(httpService, messageService, commonFunc, commfunc, fb) {
        this.httpService = httpService;
        this.messageService = messageService;
        this.commonFunc = commonFunc;
        this.commfunc = commfunc;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadingShow = { flag: false }; // loading框
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"]; //表格中无数据时显示的内容
        this.msgs = [];
        this.adjust = false; //调整
        this.efficacy = false; //失效
        this.delete = false; //删除
        this.bank = false; //本行
        this.bankown = false; //非本行
        this.jbxx = []; //名单码值
        this.reList = []; //类型表
        this.dealPerShow = false;
        this.dataList = [];
        this.userform = fb.group({
            isMybankCust: [''],
            customerType: [''],
            partyId: [''],
            custName: [''],
            statusId: ['Y'],
            listTypeOne: [''],
            listTypeTwo: [''],
            listTypeId: [''],
            idType: [''],
            idNo: [''],
            cellphone: [''],
            contactAddress: [''],
            inListType: ['1'],
            classifyId: [''],
            toListReason: [''],
            listTypeName: [''],
        });
    }
    CustomBlackDetail.prototype.ngOnInit = function () {
        this.codeValues(); //调用方法，获取全部码值
        this.isMybankCustList = this.code['isMybankCust'];
        this.customerTypeList = this.code['customerType'];
        this.statusIdList = this.code['statusId'];
        this.inListTypeList = this.code['inListType'];
        this.idTypeList = this.code['CERT_TYPE'];
        this.approvalStatusList = this.code['approvalStatus'];
        this.operationTypeList = this.code['operation'];
        if (this.inValue) {
            console.log(this.inValue, "传入的值");
            debugger;
            this.userform.get('listTypeName').setValue(this.inValue.listTypeName);
            this.userform.get('isMybankCust').setValue(this.inValue.isMybankCust);
            this.userform.get('customerType').setValue(this.inValue.customerType);
            this.userform.get('partyId').setValue(this.inValue.partyId);
            this.userform.get('custName').setValue(this.inValue.custName);
            this.userform.get('statusId').setValue(this.inValue.statusId);
            this.userform.get('listTypeOne').setValue(this.inValue.listTypeOne);
            this.userform.get('listTypeTwo').setValue(this.inValue.listTypeTwo);
            this.userform.get('inListType').setValue(this.inValue.inListType);
            this.userform.get('classifyId').setValue(this.inValue.classifyId);
            this.userform.get('toListReason').setValue(this.inValue.toListReason);
            this.userform.get('listTypeId').setValue(this.inValue.listTypeId);
        }
        this.queryClick();
        this.isMybank();
        for (var e = 0; e < 3; e++) {
            this.listType(e);
        }
    };
    //码值
    CustomBlackDetail.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //是否我行客户
    CustomBlackDetail.prototype.isMybank = function () {
        if (this.inValue.isMybankCust == 'Y') {
            this.bank = true;
            this.bankown = false;
        }
        else if (this.inValue.isMybankCust == 'N') {
            this.bank = false;
            this.bankown = true;
            this.userform.get('idType').setValue(this.inValue.idType);
            this.userform.get('idNo').setValue(this.inValue.idNo);
            this.userform.get('cellphone').setValue(this.inValue.cellphone);
            this.userform.get('contactAddress').setValue(this.inValue.contactAddress);
        }
    };
    //名单联动
    CustomBlackDetail.prototype.listType = function (i) {
        var _this = this;
        if (i == '0') {
            var param = {};
            param['listTypeHierarchy'] = 1;
            var configParam = {
                httpService: this.httpService,
                loadingFlag: true,
                messageFlag: true,
                inputParam: param,
                message: this.messageService,
                injectName: 'selectBlackListType',
                loadingShow: this.loadingShow,
                messageInfo: '查询成功',
            };
            // this.commonFunc.haddleData(configParam, (bodyData) => {
            //     if (bodyData) {
            //         let list = bodyData.returnList;
            //         list.forEach(element => {
            //             let obj = {};
            //             obj['label'] = element.listTypeName;
            //             obj['value'] = element.listTypeId;
            //             this.jbxx.push(obj);
            //         });
            //         this.jbxx.unshift({ label: '请选择', value: '' });
            //         this.listTypeOneList = this.jbxx;
            //     }
            // });
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var list = data.returnList;
                    list.forEach(function (element) {
                        var obj = {};
                        obj['label'] = element.listTypeName;
                        obj['value'] = element.listTypeId;
                        _this.jbxx.push(obj);
                    });
                    _this.jbxx.unshift({ label: '请选择', value: '' });
                    _this.listTypeOneList = _this.jbxx;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            });
        }
        else if (i == '1') {
            var param = {};
            param['listTypeHierarchy'] = 2;
            param['parentListTypeId'] = this.inValue.listTypeOne;
            // const configParam = {
            //     httpService: this.httpService,
            //     loadingFlag: true,
            //     messageFlag: true,
            //     inputParam: param,
            //     message: this.messageService,
            //     injectName: 'selectBlackListType',
            //     loadingShow: this.loadingShow,
            //     messageInfo: '查询成功',
            // }
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var list = data.returnList;
                    _this.jbxx = [];
                    list.forEach(function (element) {
                        var obj = {};
                        obj['label'] = element.listTypeName;
                        obj['value'] = element.listTypeId;
                        _this.jbxx.push(obj);
                    });
                    _this.jbxx.unshift({ label: '请选择', value: '' });
                    _this.listTypeTwoList = _this.jbxx;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            });
            // this.commonFunc.haddleData(configParam, (bodyData) => {
            //     if (bodyData) {
            // let list = bodyData.returnList;
            // this.jbxx = [];
            // list.forEach(element => {
            //     let obj = {};
            //     obj['label'] = element.listTypeName;
            //     obj['value'] = element.listTypeId;
            //     this.jbxx.push(obj);
            // });
            // this.jbxx.unshift({ label: '请选择', value: '' });
            // this.listTypeTwoList = this.jbxx;
            //     }
            // });
        }
        else if (i == '2') {
            var param = {};
            param['listTypeHierarchy'] = 3;
            param['parentListTypeId'] = this.inValue.listTypeTwo;
            // const configParam = {
            //     httpService: this.httpService,
            //     loadingFlag: true,
            //     messageFlag: true,
            //     inputParam: param,
            //     message: this.messageService,
            //     injectName: 'selectBlackListType',
            //     loadingShow: this.loadingShow,
            //     messageInfo: '查询成功',
            // }
            // this.commonFunc.haddleData(configParam, (bodyData) => {
            //     if (bodyData) {
            //         this.reList = bodyData.returnList;
            //         let list = bodyData.returnList;
            //         this.jbxx = [];
            //         list.forEach(element => {
            //             let obj = {};
            //             obj['label'] = element.listTypeName;
            //             obj['value'] = element.listTypeId;
            //             this.jbxx.push(obj);
            //         });
            //         this.jbxx.unshift({ label: '请选择', value: '' });
            //         this.listTypeIdList = this.jbxx;
            //     }
            // });
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.reList = data.returnList;
                    var list = data.returnList;
                    _this.jbxx = [];
                    list.forEach(function (element) {
                        var obj = {};
                        obj['label'] = element.listTypeName;
                        obj['value'] = element.listTypeId;
                        _this.jbxx.push(obj);
                    });
                    _this.jbxx.unshift({ label: '请选择', value: '' });
                    _this.listTypeIdList = _this.jbxx;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            });
        }
        else if (i == '3') {
            for (var e = 0; e < this.reList.length; e++) {
                if (this.inValue.listTypeId == this.reList[e].listTypeId) {
                    this.userform.get('classifyId').setValue(this.reList[e].classifyId);
                }
            }
        }
    };
    //列表查询
    CustomBlackDetail.prototype.queryClick = function () {
        var _this = this;
        var param = { blackListId: this.inValue.blackListId };
        // const configParam = {
        //     httpService: this.httpService,
        //     loadingFlag: true,
        //     messageFlag: true,
        //     inputParam: param,
        //     message: this.messageService,
        //     injectName: 'selectListTaskInfo',
        //     loadingShow: this.loadingShow,
        //     messageInfo: '查询成功',
        // }
        // this.commonFunc.haddleData(configParam, (bodyData) => {
        //     if (bodyData) {
        //         this.dataList = bodyData.returnList ? bodyData.returnList : [];
        //     } else {
        //         this.dataList = [];
        //     }
        // });
        this.httpService.selectListTaskInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList = data.returnList ? data.returnList : [];
            }
            else {
                _this.dataList = [];
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.dataList = [];
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 编号事件
    CustomBlackDetail.prototype.Jump = function (data) {
        debugger;
        this.modifyValue = { listTaskId: data.listTaskId, taskFlowId: data.taskFlowId };
        this.inValue = '';
        this.dealPerShow = true;
    };
    // 编号事件回调
    CustomBlackDetail.prototype.detailCall = function () {
        // this.outValue.emit(false);
        this.dealPerShow = false;
    };
    // 返回
    CustomBlackDetail.prototype.doReset = function () {
        this.outValue.emit(false);
    };
    CustomBlackDetail.prototype.cancelDialogShake = function () {
        if (this.dialog) {
            this.dialog.center = function () {
                var elementWidth = this.domHandler.getOuterWidth(this.containerViewChild.nativeElement);
                var elementHeight = this.domHandler.getOuterHeight(this.containerViewChild.nativeElement);
                if (elementWidth === 0 && elementHeight === 0) {
                    this.containerViewChild.nativeElement.style.visibility = 'hidden';
                    this.containerViewChild.nativeElement.style.display = 'block';
                    elementWidth = this.domHandler.getOuterWidth(this.containerViewChild.nativeElement);
                    elementHeight = this.domHandler.getOuterHeight(this.containerViewChild.nativeElement);
                    this.containerViewChild.nativeElement.style.display = 'none';
                    this.containerViewChild.nativeElement.style.visibility = 'visible';
                }
                var viewport = this.domHandler.getViewport();
                var x = Math.max(Math.ceil((viewport.width - elementWidth)) / 2, 0);
                var y = Math.max(Math.ceil((viewport.height - elementHeight)) / 2, 0);
                // 解决抖动问题
                if (!this.containerViewChild.nativeElement.style.left ||
                    !this.containerViewChild.nativeElement.style.top ||
                    Math.abs(this.containerViewChild.nativeElement.style.left - x) > 5 ||
                    Math.abs(this.containerViewChild.nativeElement.style.top - y) > 5) {
                    this.containerViewChild.nativeElement.style.left = x + 'px';
                    this.containerViewChild.nativeElement.style.top = y + 'px';
                }
            };
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dialog'),
        __metadata("design:type", primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7__["Dialog"])
    ], CustomBlackDetail.prototype, "dialog", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], CustomBlackDetail.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CustomBlackDetail.prototype, "inValue", void 0);
    CustomBlackDetail = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'custom-black-detail',
            template: __webpack_require__(/*! ./custom-black-detail.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-detail/custom-black-detail.component.html"),
            styles: [__webpack_require__(/*! ./custom-black-detail.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-detail/custom-black-detail.component.scss")],
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_0__["CusListManageHttpService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__["Customtools"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CustomBlackDetail);
    return CustomBlackDetail;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-list.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 main_part\" *ngIf=\"permissionCheck('SID00053_P001_01')\">\r\n    <div class=\"ui-g-10\" style=\"margin:0 8.3333%;\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g-4\">\r\n                <div class=\"ui-g-5 tit\">客户号:</div>\r\n                <div class=\"ui-g-7\">\r\n                    <!-- <div class=\"queryinputbtn\">\r\n                        <input type=\"text\" class=\"queryinputOrg\" pInputText disabled formControlName=\"partyId\" />\r\n                        <div (click)=\"perTreeShow()\" class=\"clickspan\">\r\n                            <a class=\"a-hand\">\r\n                                <span>...</span>\r\n                            </a>\r\n                        </div>\r\n                    </div> -->\r\n                    <input type=\"text\" placeholder=\"请输入10位客户号\" maxlength=\"10\" pInputText formControlName=\"partyId\">\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['partyId'].valid&&userform.controls['partyId'].dirty\">\r\n                        <span *ngIf=\"userform.hasError('maxlength','partyId')\">客户号不能超过10位!</span>\r\n                        <span *ngIf=\"userform.hasError('checkNumber','partyId')\">客户号只能为数字类型！</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <div class=\"ui-g-5 tit\">客户名称:</div>\r\n                <div class=\"ui-g-7\">\r\n                    <!-- <input disabled pInputText formControlName=\"custName\"> -->\r\n                    <input type=\"text\" pInputText formControlName=\"custName\">\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['custName'].valid&&userform.controls['custName'].dirty\">\r\n                        <span *ngIf=\"userform.hasError('maxlength','custName')\">客户名称不能超过100位!</span>\r\n                        <span *ngIf=\"userform.hasError('specialSymbol','custName')\">客户名称不支持特殊字符！</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <div class=\"ui-g-5 tit\">证件号码:</div>\r\n                <div class=\"ui-g-7\">\r\n                    <input type=\"text\" pInputText formControlName=\"idNo\">\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['idNo'].valid&&userform.controls['idNo'].dirty\">\r\n                        <span *ngIf=\"userform.hasError('maxlength','idNo')\">证件号码不能超过32位!</span>\r\n                        <span *ngIf=\"userform.value.idNo!=null&&userform.value.idNo!=''&&userform.hasError('checkCard','idNo')\">证件号码输入有误!</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div style=\"margin:50px 0 25px 0;\" class=\"ui-g-12 btn\">\r\n        <button pButton label=\"查询\" (click)=\"query()\"></button>\r\n        <button pButton label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <button pButton label=\"入库申请\" class=\"iscolor\" (click)=\"add()\" *ngIf=\"permissionCheck('SID00053_P001_01_01')\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\" id='blackTable'>\r\n        <p-dataTable [value]=\"dataList\" [emptyMessage]=\"tabMesg\" scrollable=\"true\">\r\n            <p-column header=\"序号\" [style]=\"{'width':'50px'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span>{{ri+1}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngFor=\"let item of tableHead\" [header]=\"item.label\" [field]=\"item.value\" [style]=\"{width:item.wth}\">\r\n                <ng-template let-col=\"rowData\" pTemplate=\"body\" *ngIf=\"item.value=='listTypeName'\">\r\n                    <span>{{col.listTypeName}}</span>\r\n                    <!-- <a class=\"riskRangeClass\"  *ngIf=\"col.adjustmentNum!='0'\" (click)=\"riskNumber(col)\">[{{col.adjustmentNum}}]</a> -->\r\n                    <!-- <span class=\"riskRangeClass\" *ngIf=\"col.adjustmentNum!='0'\" (click)=\"riskNumber(col)\">{{col.adjustmentNum}}</span> -->\r\n                </ng-template>\r\n                <ng-template let-col=\"rowData\" pTemplate=\"body\" *ngIf=\"item.value=='inListType'\">\r\n                    <span>{{col.inListType|codeValuePie:inListTypeList}}</span>\r\n                </ng-template>\r\n                <ng-template let-col=\"rowData\" pTemplate=\"body\" *ngIf=\"item.value=='statusId'\">\r\n                    <span>{{col.statusId|codeValuePie:statusIdList}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"操作\" [style]=\"{'width':'180px'}\">\r\n                <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n                    <!-- <span (click)=\"modify(col,1)\" *ngIf=\"col.operateFlag\" class=\"tabelPublishIco\">等级调整</span>\r\n                    <span (click)=\"modify(col,2)\" *ngIf=\"col.operateFlag\" class=\"tabelDeleteIco\">失效申请</span>\r\n                    <span (click)=\"modify(col,3)\" *ngIf=\"col.dataFlag&&permissionCheck('SID00053_P001_01_04')\" class=\"tabelUpdateIco\">出库申请</span>\r\n                   -->\r\n                    <span class='imgOrFont' (click)=\"modify(col,1)\" *ngIf=\"col.operateFlag&&permissionCheck('SID00053_P001_01_05')\">\r\n                        <span class=\"icon iconfont tzbicon-dengji img_display\"></span>\r\n                        <span class=\"img_no_display\">等级调整</span>\r\n                    </span>\r\n                    <span class='imgOrFont' (click)=\"modify(col,2)\" *ngIf=\"col.operateFlag&&permissionCheck('SID00053_P001_01_06')\">\r\n                        <span class=\"icon iconfont tzbicon-shixiao img_display\"></span>\r\n                        <span class=\"img_no_display\">失效申请</span>\r\n                    </span>\r\n                    <span class='imgOrFont' (click)=\"modify(col,3)\" *ngIf=\"col.dataFlag&&permissionCheck('SID00053_P001_01_04')\">\r\n                        <span class=\"icon iconfont tzbicon-chuku img_display\"></span>\r\n                        <span class=\"img_no_display\">出库申请</span>\r\n                    </span>\r\n                    <span (click)=\"detail(col)\"  class=\"tabelDetailIco\">详情</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator rows={{pageSize}} [first]=\"first\" totalRecords={{totalNum}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <button pButton label=\"批量入库申请\" (click)=\"batch(1)\" *ngIf=\"permissionCheck('SID00053_P001_01_02')\"></button>\r\n        <button pButton label=\"批量出库申请\" (click)=\"batch(2)\" *ngIf=\"permissionCheck('SID00053_P001_01_03')\"></button>\r\n    </div>\r\n</div>\r\n<!-- 客户查询 -->\r\n<p-dialog *ngIf=\"discustom\" header=\"客户查询\" [(visible)]=\"discustom\" modal=\"modal\">\r\n    <app-customer-list-center (outValue)=\"getMsg($event)\"></app-customer-list-center>\r\n</p-dialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<tzb-loading [blocked]=\"loadingShow.flag\"></tzb-loading>\r\n<!-- 模态框 新增-->\r\n<p-dialog #dialog [(visible)]=\"display\" *ngIf=\"display\" modal=\"modal\" class=\"my-cust-contactf\"> \r\n    <p-header>\r\n        {{addUpHeader}}\r\n    </p-header>\r\n    <custom-black-add *ngIf=\"showModel=='1'\" (outValue)=\"addCall($event)\"></custom-black-add>\r\n    <!-- <custom-black-add *ngIf=\"showModel=='1'\" (outValue)=\"addCall($event)\" (outValue2)=\"addCall2($event)\"></custom-black-add> -->\r\n    <custom-black-update *ngIf=\"showModel=='2'\" [inValue]=\"inValue\" [modifyValue]=\"modifyValue\" (outValue)=\"updateCall($event)\"></custom-black-update>\r\n    <custom-black-batch *ngIf=\"showModel=='3'\" [inValue]=\"inValue\" (outValue)=\"batchCall($event)\"></custom-black-batch>\r\n    <custom-black-detail *ngIf=\"showModel=='4'\" [inValue]=\"inValue\" (outValue)=\"detailCall($event)\"></custom-black-detail>\r\n</p-dialog>\r\n<p-dialog [(visible)]=\"riskdisplay\" *ngIf=\"riskdisplay\" modal=\"modal\" class=\"cooperationDirection\">\r\n    <p-header>\r\n        调整历史查询\r\n    </p-header>\r\n    <div class=\"ui-g-12 base-table\" style=\"overflow-x:scroll;width:100%;text-align:center;margin-top:-10px;\">\r\n        <p-dataTable [value]=\"riskList\" class=\"table\" [emptyMessage]='tabMesg'>\r\n            <p-column field=\"partyId\" header=\"客户号\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"relatedListTypeIdName\" header=\"调整前风险管控等级\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"listTypeName\" header=\"调整后风险管控等级\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"releaseReason\" header=\"调整原因\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"registerUserName\" header=\"经办人\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"registerTime\" header=\"经办日期\" [style]=\"{'width':'100px'}\"></p-column>\r\n        </p-dataTable>\r\n    </div>\r\n</p-dialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-list.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-list.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_part {\n  background: #fff; }\n  .main_part .tit {\n    text-align: right; }\n  .main_part .btn {\n    text-align: center; }\n  .main_part .pd4 {\n    padding: 6px 0 !important; }\n  .main_part input[pInputText] {\n    min-width: 80px !important; }\n  .main_part .queryinputbtn {\n    float: left;\n    display: flex;\n    width: 100%;\n    position: relative;\n    cursor: pointer; }\n  .main_part .queryinputbtn .queryinputOrg {\n      border-right: none;\n      border-radius: 3px 0 0 3px;\n      width: 85% !important;\n      min-width: 69px !important; }\n  .main_part .queryinputbtn .clickspan {\n      width: 14%;\n      height: 22px;\n      cursor: pointer; }\n  .main_part .iscolor {\n    background: #ffc900;\n    float: right; }\n  .iconfont {\n  font-size: 20px;\n  color: #19b0c8; }\n  .imgOrFont {\n  margin: 0 5px; }\n  .imgOrFont .img_no_display {\n    display: none; }\n  .imgOrFont:hover .img_no_display {\n    display: inline-block;\n    color: #0094D2;\n    cursor: pointer;\n    font-weight: bold;\n    padding: 0px !important; }\n  .imgOrFont:hover .img_display {\n    display: none; }\n  .ui-g {\n  padding-bottom: 3px; }\n  .table {\n  text-align: center; }\n  .text-right {\n  text-align: right; }\n  .contactCss {\n  margin-top: -14px; }\n  .contactCsstop {\n  margin-top: 10px; }\n  .btn-add {\n  text-align: right; }\n  :host /deep/ .contactPropdowna .ui-dropdown {\n  width: 50% !important;\n  min-width: 284px !important; }\n  :host /deep/ .contactThemdowna .ui-dropdown {\n  width: 24.6% !important;\n  min-width: 139px !important; }\n  .trackcontactInput {\n  width: 50% !important;\n  min-width: 284px !important; }\n  :host /deep/ .my-cust-contactf .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n  :host/deep/ .my-cust-contactf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n  :host /deep/ .cooperationDirection .ui-dialog.ui-shadow {\n  width: 70% !important;\n  height: 90% !important; }\n  :host/deep/ .cooperationDirection .ui-dialog .ui-dialog-content {\n  height: 90%; }\n  .org-name {\n  display: flex; }\n  :host/deep/ .contact-calendar .ui-calendar {\n  width: 23.2%; }\n  @media screen and (max-width: 1280px) {\n  :host/deep/ .contact-calendar .ui-calendar {\n    width: 30%; }\n  :host /deep/ .contactPropdowna .ui-dropdown {\n    width: 76% !important; }\n  :host /deep/ .contactThemdowna .ui-dropdown {\n    width: 36% !important; }\n  .trackcontactInput {\n    width: 76% !important; } }\n  .riskRangeClass {\n  background: red;\n  border-radius: 5px;\n  color: white;\n  cursor: pointer; }\n  :host/deep/ #blackTable .ui-datatable .ui-datatable-data > tr > td > span {\n  display: flex;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLWJsYWNrLWxpc3QvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tbGlzdC1tYW5hZ2VcXGN1c3RvbS1ibGFjay1saXN0XFxjdXN0b20tYmxhY2stbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBR1EsaUJBQWlCLEVBQUE7RUFIekI7SUFNUSxrQkFBa0IsRUFBQTtFQU4xQjtJQVNRLHlCQUF5QixFQUFBO0VBVGpDO0lBWVEsMEJBQTBCLEVBQUE7RUFabEM7SUFlUSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZSxFQUFBO0VBbkJ2QjtNQXFCWSxrQkFBa0I7TUFDbEIsMEJBQTBCO01BQzFCLHFCQUFxQjtNQUNyQiwwQkFBMEIsRUFBQTtFQXhCdEM7TUEyQlksVUFBVTtNQUNWLFlBQVk7TUFDWixlQUFlLEVBQUE7RUE3QjNCO0lBaUNRLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7RUFHcEI7RUFDSSxlQUFlO0VBQ2YsY0FBYyxFQUFBO0VBRWxCO0VBQ0ksYUFBYSxFQUFBO0VBRGpCO0lBR1EsYUFBYSxFQUFBO0VBSHJCO0lBT1kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHVCQUF1QixFQUFBO0VBWG5DO0lBY1ksYUFBYSxFQUFBO0VBSXpCO0VBQ0ksbUJBQW1CLEVBQUE7RUFFdkI7RUFDSSxrQkFBa0IsRUFBQTtFQUV0QjtFQUNJLGlCQUFpQixFQUFBO0VBRXJCO0VBQ0ksaUJBQWlCLEVBQUE7RUFFckI7RUFDSSxnQkFBZ0IsRUFBQTtFQUVwQjtFQUNJLGlCQUFpQixFQUFBO0VBRXJCO0VBQ0kscUJBQXFCO0VBQ3JCLDJCQUEyQixFQUFBO0VBRS9CO0VBQ0ksdUJBQXVCO0VBQ3ZCLDJCQUEyQixFQUFBO0VBRS9CO0VBQ0kscUJBQXFCO0VBQ3JCLDJCQUEyQixFQUFBO0VBRS9CO0VBQ0ksdUJBQXVCO0VBQ3ZCLHNCQUFzQixFQUFBO0VBRTFCO0VBQ0ksV0FBVyxFQUFBO0VBRWY7RUFDSSxxQkFBcUI7RUFDckIsc0JBQXNCLEVBQUE7RUFFMUI7RUFDSSxXQUFXLEVBQUE7RUFFZjtFQUNJLGFBQWEsRUFBQTtFQUVqQjtFQUNJLFlBQVksRUFBQTtFQUVoQjtFQUVLO0lBQ0csVUFBVSxFQUFBO0VBRWI7SUFDRyxxQkFBcUIsRUFBQTtFQUV4QjtJQUNHLHFCQUFxQixFQUFBO0VBRXpCO0lBQ0kscUJBQXFCLEVBQUEsRUFDeEI7RUFFTDtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFJbEIsWUFBWTtFQUVaLGVBQWUsRUFBQTtFQUduQjtFQUNJLGFBQWE7RUFDYix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWxpc3QtbWFuYWdlL2N1c3RvbS1ibGFjay1saXN0L2N1c3RvbS1ibGFjay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fcGFydHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAudGl0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmJ0bntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAucGQ0e1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpbnB1dFtwSW5wdXRUZXh0XXtcclxuICAgICAgICBtaW4td2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5xdWVyeWlucHV0YnRuIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgLnF1ZXJ5aW5wdXRPcmcge1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xpY2tzcGFuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlzY29sb3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmM5MDA7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcbi5pY29uZm9udCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzE5YjBjODtcclxufVxyXG4uaW1nT3JGb250IHtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAuaW1nX25vX2Rpc3BsYXkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAuaW1nX25vX2Rpc3BsYXkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA5NEQyO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZ19kaXNwbGF5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnVpLWcge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxufVxyXG4udGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50ZXh0LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5jb250YWN0Q3NzIHtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG59XHJcbi5jb250YWN0Q3NzdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmJ0bi1hZGQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5jb250YWN0UHJvcGRvd25hIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDI4NHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5jb250YWN0VGhlbWRvd25hIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMjQuNiUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTM5cHggIWltcG9ydGFudDtcclxufVxyXG4udHJhY2tjb250YWN0SW5wdXQge1xyXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAyODRweCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAubXktY3VzdC1jb250YWN0ZiAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLm15LWN1c3QtY29udGFjdGYgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5jb29wZXJhdGlvbkRpcmVjdGlvbiAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0L2RlZXAvIC5jb29wZXJhdGlvbkRpcmVjdGlvbiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG4ub3JnLW5hbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG46aG9zdC9kZWVwLyAuY29udGFjdC1jYWxlbmRhciAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDIzLjIlO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAvLyDmn6Xor6LojIPlm7Qg5pel5pyf57uE5Lu2XHJcbiAgICAgOmhvc3QvZGVlcC8gLmNvbnRhY3QtY2FsZW5kYXIgLnVpLWNhbGVuZGFyIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG4gICAgIDpob3N0IC9kZWVwLyAuY29udGFjdFByb3Bkb3duYSAudWktZHJvcGRvd24ge1xyXG4gICAgICAgIHdpZHRoOiA3NiUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICA6aG9zdCAvZGVlcC8gLmNvbnRhY3RUaGVtZG93bmEgLnVpLWRyb3Bkb3duIHtcclxuICAgICAgICB3aWR0aDogMzYlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudHJhY2tjb250YWN0SW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA3NiUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4ucmlza1JhbmdlQ2xhc3N7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvLyB3aWR0aDogMjBweDtcclxuICAgIC8vIGhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8vIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG46aG9zdC9kZWVwLyAjYmxhY2tUYWJsZSAudWktZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtZGF0YT50cj50ZD5zcGFue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-list.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-list.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CustomBlackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomBlackListComponent", function() { return CustomBlackListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/components/dialog/dialog */ "./node_modules/primeng/components/dialog/dialog.js");
/* harmony import */ var primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { tableMessage } from "app/@uisftech/common/constant/config";

var CustomBlackListComponent = /** @class */ (function () {
    function CustomBlackListComponent(httpService, messageService, commonFunc, commfunc, fb) {
        this.httpService = httpService;
        this.messageService = messageService;
        this.commonFunc = commonFunc;
        this.commfunc = commfunc;
        this.fb = fb;
        this.msgs = [];
        this.loadingShow = { flag: false }; // loading框
        this.tabMesg = '没有相关数据显示！'; //表格中无数据时显示的内容
        this.first = 0; //分页控制
        this.pageNum = 1; //当前页数
        this.pageSize = 10; //每页条数
        this.dataList = [];
        this.riskList = [];
        this.display = false; //模态框
        this.riskdisplay = false; //模态框
        this.inValue = []; //调整/失效/删除/批量出入库传参
        this.tableHead = [{
                label: '客户号', value: 'partyId', wth: '100px'
            }, {
                label: '客户名称', value: 'custName', wth: '80px'
            }, {
                label: '证件号码', value: 'idNo', wth: '180px'
            }, {
                label: '一级名单', value: 'listTypeOneName', wth: '140px'
            }, {
                label: '二级名单', value: 'listTypeTwoName', wth: '140px'
            }, {
                label: '风险管控等级', value: 'listTypeName', wth: '120px'
            },
            // {
            //     label: '录入原因', value: 'toListReason', wth: '100px'
            // }, 
            {
                label: '生成日期', value: 'registerTime', wth: '120px'
            }, {
                label: '录入方式', value: 'inListType', wth: '80px'
            }, {
                label: '录入机构', value: 'registerOrgName', wth: '150px'
            }, {
                label: '主联系人', value: 'mainUserName', wth: '100px'
            }, {
                label: '主联系人机构', value: 'mainOrgName', wth: '120px'
            }, {
                label: '状态', value: 'statusId', wth: '50px'
            }];
        this.codeValues(); //调用方法，获取全部码值
        this.idTypeList = this.code['CERT_TYPE'];
        this.statusIdList = this.code['statusId'];
        this.inListTypeList = this.code['inListType'];
        this.userform = fb.group({
            partyId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["checkNumber"]]],
            custName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["specialSymbol"]]],
            // idNo: ['', [Validators.maxLength(32), checkNumber]],//证件号码非数校验
            idNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["checkCard"]]],
        });
    }
    CustomBlackListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        this.managePermission = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.managePermission;
        setTimeout(function () {
            _this.dataList = [];
        });
        console.log(this.statusIdList, this.inListTypeList);
    };
    // key: boolean = false;//现行判断该客户号客户名称存不存在
    //客户号事件
    // partydetail() {
    //     if (this.userform.value.partyId) {
    //         const param = {};
    //         param['custNo'] = this.userform.value.partyId;
    //         this.httpService.selectCustBriefInfo(param).subscribe(data => {
    //             if (data.returnCode.code == 'success') {
    //                 this.userform.get('custName').setValue(data.custName);
    //                 this.key = true;
    //             } else {
    //                 this.msgs = [];
    //                 this.msgs.push({ severity: 'error', summary: '提示', detail: '该客户号不存在!' });
    //                 this.
    //             }
    //         }, err => {
    //             this.msgs = [];
    //             this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
    //         });
    //     }
    // }
    //查询
    CustomBlackListComponent.prototype.query = function () {
        this.loadingShow.flag = true;
        if (!this.userform.value.partyId && !this.userform.value.custName && !this.userform.value.idNo) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '客户号/客户名称/证件号码不能同时为空' });
            this.loadingShow.flag = false;
            return;
        }
        else if (this.userform.value.partyId || this.userform.value.idNo || this.userform.value.custName) {
            this.pageSize = 10;
            this.pageNum = 1;
            this.first = 0;
            this.queryClick();
        }
    };
    //列表查询
    CustomBlackListComponent.prototype.queryClick = function () {
        var _this = this;
        var param = Object.assign({}, this.userform.value);
        param['pageSize'] = this.pageSize;
        param['pageNum'] = this.pageNum;
        param['registerUserName'] = JSON.parse(this.commfunc.getSessionDataCH('chName')).userName;
        param['operationType'] = '1007';
        this.httpService.selectBlackListInfoNew(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList = data.returnList ? data.returnList : [];
                _this.totalNum = data.total;
                _this.msgs = [];
                //this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.dataList = [];
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
            _this.loadingShow.flag = false;
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    // 新增
    CustomBlackListComponent.prototype.add = function () {
        this.display = true;
        this.showModel = 1;
        this.addUpHeader = '入库申请';
    };
    // 新增回调
    CustomBlackListComponent.prototype.addCall = function (param) {
        this.display = param;
        this.pageNum = 1;
        if (this.userform.value.partyId || this.userform.value.custName || this.userform.value.idNo) {
            this.query();
        }
    };
    // 新增回调
    CustomBlackListComponent.prototype.addCall2 = function (param) {
        console.log(param);
        this.msgs = [];
        this.msgs = [{ severity: 'success', summary: '提示', detail: param }];
    };
    // 调整/失效/出库
    CustomBlackListComponent.prototype.modify = function (col, i) {
        this.inValue = col;
        this.modifyValue = i;
        this.display = true;
        this.showModel = 2;
        if (i == '1') {
            this.addUpHeader = '风险管控等级调整';
        }
        else if (i == '2') {
            this.addUpHeader = '名单失效申请';
        }
        else if (i == '3') {
            this.addUpHeader = '出库申请';
        }
    };
    // 调整/失效/出库回调
    CustomBlackListComponent.prototype.updateCall = function (param) {
        this.display = param;
        this.pageNum = 1;
        if (this.userform.value.partyId || this.userform.value.custName || this.userform.value.idNo) {
            this.query();
        }
    };
    // 详情
    CustomBlackListComponent.prototype.detail = function (col, i) {
        this.display = true;
        this.inValue = col;
        this.showModel = 4;
        this.modifyValue = i;
        this.addUpHeader = '名单详情';
    };
    // 详情回调
    CustomBlackListComponent.prototype.detailCall = function (param) {
        this.display = param;
    };
    //批量出入库
    CustomBlackListComponent.prototype.batch = function (col) {
        this.inValue = col;
        this.display = true;
        this.showModel = 3;
        if (col == '1') {
            this.addUpHeader = '批量入库申请';
        }
        else if (col == '2') {
            this.addUpHeader = '批量出库申请';
        }
    };
    // 批量出入库回调
    CustomBlackListComponent.prototype.batchCall = function (param) {
        this.display = param;
        this.pageNum = 1;
        if (this.userform.value.partyId || this.userform.value.custName || this.userform.value.idNo) {
            this.query();
        }
    };
    //风险等级事件
    CustomBlackListComponent.prototype.riskNumber = function (col) {
        var _this = this;
        this.riskdisplay = true;
        var param = {
            isMybankCust: col.isMybankCust,
            partyId: col.partyId,
            idNo: col.idNo,
            custName: col.custName,
            customerType: col.customerType,
            approvalStatus: '0',
            operationType: '1005',
        };
        this.httpService.selectListTaskInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.riskList = data.returnList ? data.returnList : [];
                _this.msgs = [];
                // this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.riskList = [];
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    // 重置
    CustomBlackListComponent.prototype.reset = function () {
        this.userform.get('partyId').setValue(null);
        this.userform.get('custName').setValue(null);
        this.userform.get('idNo').setValue(null);
        this.dataList = [];
    };
    CustomBlackListComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = event.rows;
        this.pageNum = event.page + 1;
        this.first = event.first;
        if (!this.userform.value.partyId && !this.userform.value.custName && !this.userform.value.idNo) {
            this.dataList = [];
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '客户号/客户名称/证件号码不能同时为空' });
        }
        else {
            this.queryClick();
        }
    };
    // 客户查询弹框
    CustomBlackListComponent.prototype.perTreeShow = function () {
        this.discustom = true;
    };
    // 客户查询关闭传值
    CustomBlackListComponent.prototype.getMsg = function (e) {
        this.userform.get('partyId').setValue(e.custNo);
        this.userform.get('custName').setValue(e.custName);
        this.discustom = false;
    };
    //码值
    CustomBlackListComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //按钮权限
    CustomBlackListComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomBlackListComponent.prototype.cancelDialogShake = function () {
        if (this.dialog) {
            this.dialog.center = function () {
                var elementWidth = this.domHandler.getOuterWidth(this.containerViewChild.nativeElement);
                var elementHeight = this.domHandler.getOuterHeight(this.containerViewChild.nativeElement);
                if (elementWidth === 0 && elementHeight === 0) {
                    this.containerViewChild.nativeElement.style.visibility = 'hidden';
                    this.containerViewChild.nativeElement.style.display = 'block';
                    elementWidth = this.domHandler.getOuterWidth(this.containerViewChild.nativeElement);
                    elementHeight = this.domHandler.getOuterHeight(this.containerViewChild.nativeElement);
                    this.containerViewChild.nativeElement.style.display = 'none';
                    this.containerViewChild.nativeElement.style.visibility = 'visible';
                }
                var viewport = this.domHandler.getViewport();
                var x = Math.max(Math.ceil((viewport.width - elementWidth)) / 2, 0);
                var y = Math.max(Math.ceil((viewport.height - elementHeight)) / 2, 0);
                // 解决抖动问题
                if (!this.containerViewChild.nativeElement.style.left ||
                    !this.containerViewChild.nativeElement.style.top ||
                    Math.abs(this.containerViewChild.nativeElement.style.left - x) > 5 ||
                    Math.abs(this.containerViewChild.nativeElement.style.top - y) > 5) {
                    this.containerViewChild.nativeElement.style.left = x + 'px';
                    this.containerViewChild.nativeElement.style.top = y + 'px';
                }
            };
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dialog'),
        __metadata("design:type", primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7__["Dialog"])
    ], CustomBlackListComponent.prototype, "dialog", void 0);
    CustomBlackListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-black-list',
            template: __webpack_require__(/*! ./custom-black-list.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-list.component.html"),
            styles: [__webpack_require__(/*! ./custom-black-list.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-list.component.scss")],
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_6__["CusListManageHttpService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_3__["Customtools"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CustomBlackListComponent);
    return CustomBlackListComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-update/custom-black-update.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-update/custom-black-update.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-deal\">\r\n    <div class=\"ui-g-12\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>是否我行客户:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.isMybankCust | codeValuePie:isMybankCustList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\" *ngIf=\"!bank\">\r\n                        <label appValidation>客户类型:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\" *ngIf=\"!bank\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.customerType | codeValuePie:customerTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bank\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>客户号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"partyId\" disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>证件类型:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.idType | codeValuePie:idTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>证件号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"idNo\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>联系电话:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"cellphone\" disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>联系地址:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"contactAddress\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>一级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.listTypeOne | codeValuePie:listTypeOneList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>二级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.listTypeTwo | codeValuePie:listTypeTwoList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>风险管控等级:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.listTypeId | codeValuePie:listTypeIdList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>状态:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.statusId | codeValuePie:statusIdList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>分类编码:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"classifyId\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>录入方式:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.inListType | codeValuePie:inListTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>录入原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"toListReason\" disabled></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"adjust\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>调整风险管控等级为:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"listTypeIdList\" formControlName=\"relatedListTypeIdName\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"adjust\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>调整原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"releaseReason\"></textarea>\r\n                    <!-- <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['releaseReason'].valid&&userform.controls['releaseReason'].dirty\">\r\n                        <span *ngIf=\"userform.hasError('maxlength','releaseReason')\">调整原因不能超过255位!</span>\r\n                        <span *ngIf=\"userform.hasError('specialSymbol','releaseReason')\">调整原因不支持特殊字符！</span>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"efficacy\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>失效原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"releaseReason\"></textarea>\r\n                    <!-- <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['releaseReason'].valid&&userform.controls['releaseReason'].dirty\">\r\n                        <span *ngIf=\"userform.hasError('maxlength','releaseReason')\">失效原因不能超过255位!</span>\r\n                        <span *ngIf=\"userform.hasError('specialSymbol','releaseReason')\">失效原因不支持特殊字符！</span>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"delete\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办人:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerUser\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办机构:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerOrg\" pInputText disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"delete\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>删除原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"releaseReason\"></textarea>\r\n                    <!-- <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['releaseReason'].valid&&userform.controls['releaseReason'].dirty\">\r\n                        <span *ngIf=\"userform.hasError('maxlength','releaseReason')\">删除原因不能超过255位!</span>\r\n                        <span *ngIf=\"userform.hasError('specialSymbol','releaseReason')\">删除原因不支持特殊字符！</span>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 btn-return\">\r\n                <button pButton type=\"button\" label=\"保存\" (click)=\"doSave(1)\" [disabled]=\"!userform.valid\"></button>\r\n                <button pButton type=\"button\" label=\"提交\" (click)=\"doSave(2)\" [disabled]=\"!userform.valid\"></button>\r\n                <button pButton type=\"button\" label=\"返回\" (click)=\"doReset()\"></button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<tzb-loading [blocked]=\"loadingShow.flag\"></tzb-loading>\r\n<!-- 提交 -->\r\n<p-dialog *ngIf=\"dealPerShow\" header=\"提交给\" [(visible)]=\"dealPerShow\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-update/custom-black-update.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-update/custom-black-update.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-deal {\n  max-height: 650px !important; }\n  .my-deal .btn-return {\n    margin-top: 10px !important;\n    text-align: center; }\n  .my-deal .text-right {\n    text-align: right; }\n  .my-deal .ui-g-12 {\n    margin-top: -12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLWJsYWNrLWxpc3QvY3VzdG9tLWJsYWNrLXVwZGF0ZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1saXN0LW1hbmFnZVxcY3VzdG9tLWJsYWNrLWxpc3RcXGN1c3RvbS1ibGFjay11cGRhdGVcXGN1c3RvbS1ibGFjay11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBNEIsRUFBQTtFQURoQztJQUdRLDJCQUEyQjtJQUMzQixrQkFBa0IsRUFBQTtFQUoxQjtJQU9RLGlCQUFpQixFQUFBO0VBUHpCO0lBVVEsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1saXN0LW1hbmFnZS9jdXN0b20tYmxhY2stbGlzdC9jdXN0b20tYmxhY2stdXBkYXRlL2N1c3RvbS1ibGFjay11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktZGVhbCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2NTBweCAhaW1wb3J0YW50O1xyXG4gICAgLmJ0bi1yZXR1cm4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dC1yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAudWktZy0xMntcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-update/custom-black-update.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-update/custom-black-update.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: CustomBlackUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomBlackUpdate", function() { return CustomBlackUpdate; });
/* harmony import */ var app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomBlackUpdate = /** @class */ (function () {
    function CustomBlackUpdate(httpService, messageService, commonFunc, commfunc, fb) {
        this.httpService = httpService;
        this.messageService = messageService;
        this.commonFunc = commonFunc;
        this.commfunc = commfunc;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadingShow = { flag: false }; // loading框
        this.msgs = [];
        this.adjust = false; //调整
        this.efficacy = false; //失效
        this.delete = false; //删除
        this.bank = false; //本行
        this.bankown = false; //非本行
        this.jbxx = []; //名单码值
        this.reList = []; //类型表
        this.dealPerShow = false;
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        this.userName = chName.userName;
        this.orgName = chName.orgName;
        this.userform = fb.group({
            isMybankCust: [''],
            customerType: [''],
            partyId: [''],
            custName: [''],
            statusId: [''],
            listTypeOne: [''],
            listTypeTwo: [''],
            inListType: [''],
            classifyId: [''],
            toListReason: [''],
            listTypeId: [''],
            relatedListTypeIdName: [''],
            idType: [''],
            idNo: [''],
            cellphone: [''],
            contactAddress: [''],
            releaseReason: [''],
            registerUser: [''],
            registerOrg: [''],
            blackListId: [''],
            relatedListTaskId: [''],
            registerUserName: [''],
            registerOrgName: [""],
        });
    }
    CustomBlackUpdate.prototype.ngOnInit = function () {
        this.queryOrgName();
        this.codeValues(); //调用方法，获取全部码值
        this.isMybankCustList = this.code['isMybankCust'];
        this.customerTypeList = this.code['customerType'];
        this.statusIdList = this.code['statusId'];
        this.inListTypeList = this.code['inListType'];
        this.idTypeList = this.code['CERT_TYPE'];
        if (this.modifyValue == '1') { //调整页面
            this.adjust = true;
            this.efficacy = false;
            this.delete = false;
        }
        else if (this.modifyValue == '2') { //失效页面
            this.adjust = false;
            this.efficacy = true;
            this.delete = false;
        }
        else if (this.modifyValue == '3') { //删除页面
            this.adjust = false;
            this.efficacy = false;
            this.delete = true;
        }
        if (this.inValue) {
            this.userform.get('isMybankCust').setValue(this.inValue.isMybankCust);
            this.userform.get('customerType').setValue(this.inValue.customerType);
            this.userform.get('partyId').setValue(this.inValue.partyId);
            this.userform.get('custName').setValue(this.inValue.custName);
            this.userform.get('statusId').setValue(this.inValue.statusId);
            this.userform.get('listTypeOne').setValue(this.inValue.listTypeOne);
            this.userform.get('listTypeTwo').setValue(this.inValue.listTypeTwo);
            this.userform.get('inListType').setValue(this.inValue.inListType);
            this.userform.get('classifyId').setValue(this.inValue.classifyId);
            this.userform.get('toListReason').setValue(this.inValue.toListReason);
            this.userform.get('listTypeId').setValue(this.inValue.listTypeId);
            this.userform.get('registerUser').setValue(this.inValue.registerUser);
            this.userform.get('registerOrg').setValue(this.inValue.registerOrg);
            this.userform.get('blackListId').setValue(this.inValue.blackListId);
            this.userform.get('relatedListTaskId').setValue(this.inValue.listTaskId);
            this.userform.get('idType').setValue(this.inValue.idType);
            this.userform.get('idNo').setValue(this.inValue.idNo);
        }
        this.isMybank();
        this.query();
        for (var e = 0; e < 3; e++) {
            this.listType(e);
        }
    };
    CustomBlackUpdate.prototype.queryOrgName = function () {
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        for (var i = 0; i < chName.orgList.length; i++) {
            if (this.user.extParam.orgId == chName.orgList[i].orgId) {
                this.orgName = chName.orgList[i].orgName;
            }
        }
        console.log(this.orgName, "111111111");
    };
    //码值
    CustomBlackUpdate.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //是否我行客户
    CustomBlackUpdate.prototype.isMybank = function () {
        if (this.userform.value.isMybankCust == 'Y') {
            this.bank = true;
            this.bankown = false;
        }
        else if (this.userform.value.isMybankCust == 'N') {
            this.bank = false;
            this.bankown = true;
            this.userform.get('idType').setValue(this.inValue.idType);
            this.userform.get('idNo').setValue(this.inValue.idNo);
            this.userform.get('cellphone').setValue(this.inValue.cellphone);
            this.userform.get('contactAddress').setValue(this.inValue.contactAddress);
        }
    };
    //查询
    CustomBlackUpdate.prototype.query = function () {
        var _this = this;
        var param = {};
        param['listTypeHierarchy'] = 1;
        this.httpService.selectBlackListType(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var list = data.returnList;
                list.forEach(function (element) {
                    var obj = {};
                    obj['label'] = element.listTypeName;
                    obj['value'] = element.listTypeId;
                    _this.jbxx.push(obj);
                });
                _this.jbxx.unshift({ label: '请选择', value: '' });
                _this.listTypeOneList = _this.jbxx;
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
    //名单联动
    CustomBlackUpdate.prototype.listType = function (i) {
        var _this = this;
        if (i == '1') {
            var param = {};
            param['listTypeHierarchy'] = 2;
            param['parentListTypeId'] = this.inValue.listTypeOne;
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var list = data.returnList;
                    _this.jbxx = [];
                    list.forEach(function (element) {
                        var obj = {};
                        obj['label'] = element.listTypeName;
                        obj['value'] = element.listTypeId;
                        _this.jbxx.push(obj);
                    });
                    _this.jbxx.unshift({ label: '请选择', value: '' });
                    _this.listTypeTwoList = _this.jbxx;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            });
        }
        else if (i == '2') {
            var param = {};
            param['listTypeHierarchy'] = 3;
            param['parentListTypeId'] = this.inValue.listTypeTwo;
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.reList = data.returnList;
                    var list = data.returnList;
                    _this.jbxx = [];
                    list.forEach(function (element) {
                        var obj = {};
                        obj['label'] = element.listTypeName;
                        obj['value'] = element.listTypeId;
                        _this.jbxx.push(obj);
                    });
                    _this.jbxx.unshift({ label: '请选择', value: '' });
                    _this.listTypeIdList = _this.jbxx;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            });
        }
        else {
        }
    };
    // 保存/提交  modifyValue 1- 等级调整   2-失效申请 3- 出库申请
    CustomBlackUpdate.prototype.doSave = function (i) {
        var _this = this;
        if (this.modifyValue == '1') { //调整
            console.log("this.userform.value.relatedListTypeIdName", this.userform.value.relatedListTypeIdName);
            if (this.userform.value.relatedListTypeIdName == "") {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择调整后的风险管控等级' });
                return;
            }
            if (this.userform.value.relatedListTypeIdName != this.userform.value.listTypeId) {
                if (i == '1') { //调整保存
                    var param = Object.assign({}, this.userform.value);
                    // param['toListReason'] = this.userform.value.releaseReason;
                    param['listTypeId'] = this.userform.value.relatedListTypeIdName;
                    param['approvalStatus'] = 'AA';
                    param['operationType'] = '1005';
                    param['registerUserName'] = this.userName;
                    param['registerOrgName'] = this.orgName;
                    param['registerOrg'] = this.user.extParam.orgId;
                    param['registerUser'] = this.user.userId;
                    console.log(param, "1111111111");
                    this.httpService.addListTaskInfo(param).subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
                            // this.outValue.emit(false);
                            _this.msgs = [];
                            _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                            setTimeout(function () {
                                _this.outValue.emit(false);
                            }, 1000);
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                        }
                    }, function (err) {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
                    });
                }
                if (i == '2') { //调整提交
                    this.waitSelUserList = this.commfunc.query('KHYY_MDJSP', {});
                    if (!this.waitSelUserList.erro) {
                        this.outVal = this.waitSelUserList.waitSelUserList;
                        var perPageShow = this.waitSelUserList.display;
                        if (perPageShow == true) {
                            this.dealPerShow = true;
                        }
                        else {
                            var param = Object.assign({}, this.userform.value);
                            // param['toListReason'] = this.userform.value.releaseReason;
                            param['listTypeId'] = this.userform.value.relatedListTypeIdName;
                            param['approvalStatus'] = 'AB';
                            param['operationType'] = '1005';
                            param['registerUserName'] = this.userName;
                            param['registerOrgName'] = this.orgName;
                            param['registerOrg'] = this.user.extParam.orgId;
                            param['registerUser'] = this.user.userId;
                            this.httpService.addListTaskInfo(param).subscribe(function (data) {
                                if (data.returnCode.code == 'success') {
                                    // this.outValue.emit(false);
                                    _this.msgs = [];
                                    _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                                    setTimeout(function () {
                                        _this.outValue.emit(false);
                                    }, 1000);
                                }
                                else {
                                    _this.msgs = [];
                                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                                }
                            }, function (err) {
                                _this.msgs = [];
                                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
                            });
                        }
                    }
                    else {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
                    }
                }
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '风险管控等级与原等级一样，请重新调整！' });
            }
        }
        else if (this.modifyValue == '2') { //失效
            if (i == '1') { //失效保存
                var param = Object.assign({}, this.userform.value);
                // param['toListReason'] = this.userform.value.releaseReason;
                param['approvalStatus'] = 'AA';
                param['operationType'] = '1006';
                param['registerUserName'] = this.userName;
                param['registerOrgName'] = this.orgName;
                param['registerOrg'] = this.user.extParam.orgId;
                param['registerUser'] = this.user.userId;
                this.httpService.addListTaskInfo(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        // this.outValue.emit(false);
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        setTimeout(function () {
                            _this.outValue.emit(false);
                        }, 1000);
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                });
            }
            if (i == '2') { //失效提交
                this.waitSelUserList = this.commfunc.query('KHYY_MDJSP', {});
                if (!this.waitSelUserList.erro) {
                    this.outVal = this.waitSelUserList.waitSelUserList;
                    var perPageShow = this.waitSelUserList.display;
                    if (perPageShow == true) {
                        this.dealPerShow = true;
                    }
                    else {
                        var param = Object.assign({}, this.userform.value);
                        // param['toListReason'] = this.userform.value.releaseReason;
                        param['operationType'] = '1006';
                        param['approvalStatus'] = 'AB';
                        param['registerUserName'] = this.userName;
                        param['registerOrgName'] = this.orgName;
                        param['registerOrg'] = this.user.extParam.orgId;
                        param['registerUser'] = this.user.userId;
                        this.httpService.addListTaskInfo(param).subscribe(function (data) {
                            if (data.returnCode.code == 'success') {
                                // this.outValue.emit(false);
                                _this.msgs = [];
                                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                                setTimeout(function () {
                                    _this.outValue.emit(false);
                                }, 1000);
                            }
                            else {
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                            }
                        }, function (error) {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                        });
                    }
                }
                else {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
                }
            }
        }
        else if (this.modifyValue == '3') { //出库
            if (i == '1') { //出库保存
                var param = Object.assign({}, this.userform.value);
                // param['toListReason'] = this.userform.value.releaseReason;
                param['operationType'] = '1003';
                param['approvalStatus'] = 'AA';
                param['registerUserName'] = this.userName;
                param['registerOrgName'] = this.orgName;
                param['registerOrg'] = this.user.extParam.orgId;
                param['registerUser'] = this.user.userId;
                this.httpService.addListTaskInfo(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        // this.outValue.emit(false);
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        setTimeout(function () {
                            _this.outValue.emit(false);
                        }, 1000);
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                });
            }
            if (i == '2') { //出库提交
                this.waitSelUserList = this.commfunc.query('KHYY_MDJSP', {});
                if (!this.waitSelUserList.erro) {
                    this.outVal = this.waitSelUserList.waitSelUserList;
                    var perPageShow = this.waitSelUserList.display;
                    if (perPageShow == true) {
                        this.dealPerShow = true;
                    }
                    else {
                        var param = Object.assign({}, this.userform.value);
                        // param['toListReason'] = this.userform.value.releaseReason;
                        param['operationType'] = '1003';
                        param['approvalStatus'] = 'AB';
                        param['registerUserName'] = this.userName;
                        param['registerOrgName'] = this.orgName;
                        param['registerOrg'] = this.user.extParam.orgId;
                        param['registerUser'] = this.user.userId;
                        this.httpService.addListTaskInfo(param).subscribe(function (data) {
                            if (data.returnCode.code == 'success') {
                                // this.outValue.emit(false);
                                _this.msgs = [];
                                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                                setTimeout(function () {
                                    _this.outValue.emit(false);
                                }, 1000);
                            }
                            else {
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                            }
                        }, function (error) {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                        });
                    }
                }
                else {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
                }
            }
        }
    };
    CustomBlackUpdate.prototype.outDisplayCall = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.dealPerShow = event;
        }, 4000);
    };
    CustomBlackUpdate.prototype.outValueCall = function (event) {
        var _this = this;
        this.outVal = event;
        console.log(this.outVal);
        var ss = '';
        var outFlowId;
        var specifyNextNode = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId;
            specifyNextNode = item.userBank;
            outFlowId = item.outFlowId;
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        commonHeader.extParam['specifyNextNode'] = outFlowId;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        //modifyValue 1- 等级调整   2-失效申请 3- 出库申请
        if (this.modifyValue == '1') {
            var param = Object.assign({}, this.userform.value);
            // param['toListReason'] = this.userform.value.releaseReason;
            param['listTypeId'] = this.userform.value.relatedListTypeIdName;
            param['operationType'] = '1005';
            param['authUser'] = ss;
            param['author'] = specifyNextNode;
            param['approvalStatus'] = 'AB';
            param['registerUserName'] = this.userName;
            param['registerOrgName'] = this.orgName;
            param['registerOrg'] = this.user.extParam.orgId;
            param['registerUser'] = this.user.userId;
            this.httpService.addListTaskInfo(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    // this.outValue.emit(false);
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                    setTimeout(function () {
                        _this.outValue.emit(false);
                    }, 1000);
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            });
        }
        else if (this.modifyValue == '2') {
            var param = Object.assign({}, this.userform.value);
            // param['toListReason'] = this.userform.value.releaseReason;
            param['operationType'] = '1006';
            param['authUser'] = ss;
            param['author'] = specifyNextNode;
            param['approvalStatus'] = 'AB';
            param['registerUserName'] = this.userName;
            param['registerOrgName'] = this.orgName;
            param['registerOrg'] = this.user.extParam.orgId;
            param['registerUser'] = this.user.userId;
            this.httpService.addListTaskInfo(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    // this.outValue.emit(false);
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                    setTimeout(function () {
                        _this.outValue.emit(false);
                    }, 1000);
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            });
        }
        else if (this.modifyValue == '3') {
            var param = Object.assign({}, this.userform.value);
            // param['toListReason'] = this.userform.value.releaseReason;
            param['operationType'] = '1003';
            param['specifyNextOpers'] = ss;
            param['specifyNextNode'] = specifyNextNode;
            param['approvalStatus'] = 'AB';
            param['registerUserName'] = this.userName;
            param['registerOrgName'] = this.orgName;
            param['registerOrg'] = this.user.extParam.orgId;
            param['registerUser'] = this.user.userId;
            this.httpService.addListTaskInfo(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    // this.outValue.emit(false);
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                    setTimeout(function () {
                        _this.outValue.emit(false);
                    }, 1000);
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            });
        }
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (s.extParam.specifyNextOpers || s.extParam.specifyNextNode) {
            delete s.extParam.specifyNextOpers;
            delete s.extParam.specifyNextNode;
            var commonHeader_1 = s;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
        }
    };
    // 返回
    CustomBlackUpdate.prototype.doReset = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], CustomBlackUpdate.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CustomBlackUpdate.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CustomBlackUpdate.prototype, "modifyValue", void 0);
    CustomBlackUpdate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'custom-black-update',
            template: __webpack_require__(/*! ./custom-black-update.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-update/custom-black-update.component.html"),
            styles: [__webpack_require__(/*! ./custom-black-update.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-update/custom-black-update.component.scss")],
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_0__["CusListManageHttpService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__["Customtools"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CustomBlackUpdate);
    return CustomBlackUpdate;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-element-manage/custom-element-manage.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-element-manage/custom-element-manage.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow my-deal\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 text-right\">\r\n            <span>事项类型:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.bigClassName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 text-right\">\r\n            <span>事项类型:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.littleClassName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 text-right\">\r\n            <span>发起人:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.workCreateName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 text-right\">\r\n            <span>创建日期:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.createDate}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 boxShadow my-deal\">\r\n    <header-title [Info]=\"'名单入库申请审批'\" *ngIf=\"ruku\"></header-title>\r\n    <header-title [Info]=\"'名单出库申请审批'\" *ngIf=\"chuku\"></header-title>\r\n    <header-title [Info]=\"'名单批量入库申请审批'\" *ngIf=\"piliangruku\"></header-title>\r\n    <header-title [Info]=\"'名单批量出库申请审批'\" *ngIf=\"piliangchuku\"></header-title>\r\n    <header-title [Info]=\"'名单等级调整申请审批'\" *ngIf=\"dengjitiaozheng\"></header-title>\r\n    <header-title [Info]=\"'名单失效申请审批'\" *ngIf=\"shixiao\"></header-title>\r\n    <div class=\"ui-g-12\" *ngIf=\"operationTypeD\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>是否我行客户:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.isMybankCust | codeValuePie:isMybankCustList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\"  *ngIf=\"!bank\" >\r\n                        <label appValidation>客户类型:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\" *ngIf=\"!bank\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.customerType | codeValuePie:customerTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bank\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>客户号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"partyId\" disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label *ngIf='this.userform.value.customerType!=2' appValidation>证件类型:</label>\r\n                        <label *ngIf='this.userform.value.customerType==2'>证件类型:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.idType | codeValuePie:idTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label *ngIf='this.userform.value.customerType!=2' appValidation>证件号:</label>\r\n                        <label *ngIf='this.userform.value.customerType==2'>证件号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"idNo\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>联系电话:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"cellphone\" disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>联系地址:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"contactAddress\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>一级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.listTypeOne | codeValuePie:listTypeOneList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>二级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.listTypeTwo | codeValuePie:listTypeTwoList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>风险管控等级:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\" *ngIf=\"beanExam.operationType == '1005'\" >\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.relatedlistTypeId | codeValuePie:listTypeIdList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-4\" *ngIf=\"beanExam.operationType !== '1005'&&beanExam.operationType!='1001'\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.listTypeId | codeValuePie:listTypeIdList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-4\" *ngIf=\"beanExam.operationType !== '1005'&&beanExam.operationType=='1001'\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.relatedlistTypeId | codeValuePie:listTypeIdList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>状态:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.statusId | codeValuePie:statusIdList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>分类编码:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"classifyId\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>录入方式:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.inListType | codeValuePie:inListTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>录入原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10 mart\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"toListReason\" disabled></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"dengjitiaozheng\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>调整风险管控等级为:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.listTypeId | codeValuePie:listTypeIdList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"dengjitiaozheng\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>调整原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10 mart\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"releaseReason\" disabled></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"shixiao\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>失效原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10 mart\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"releaseReason\" disabled></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"chuku\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办人:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerUserName\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办机构:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerOrgName\" pInputText disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"chuku\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>删除原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10 mart\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"releaseReason\" disabled></textarea>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"operationTypeP\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>上传文件:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <!-- <p-fileUpload accept=\".xls\" invalidFileTypeMessageDetail=\"只能上传Excel\" invalidFileTypeMessageSummary=\"\" chooseLabel=\"浏览\" uploadLabel=\"上传\"\r\n                            cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"load($event)\">\r\n                        </p-fileUpload> -->\r\n                        <div *ngIf=\"fileList.length>0\">\r\n                         \r\n                            <a  href=\"{{downloadurl}}\" target=\"_blank\">{{fileList[0]['fileName']}}</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>一级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.listTypeOne | codeValuePie:listTypeOneList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"piliangruku\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>名单来源:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"sourceDes\" disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>录入方式:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.inListType | codeValuePie:inListTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"piliangruku\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>录入原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10 mart\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"toListReason\" disabled></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"piliangchuku\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>出库原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10 mart\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"toListReason\" disabled></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办人:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerUserName\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办机构:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerOrgName\" pInputText disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办时间:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerTime\" pInputText disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <examine-page [mainFlowNo]=\"mainFlowNo\"></examine-page>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-element-manage/custom-element-manage.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-element-manage/custom-element-manage.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-deal {\n  max-height: 700px !important; }\n  .my-deal .text-right {\n    text-align: right; }\n  .my-deal .mart {\n    margin: 3px 0 !important; }\n  :host /deep/ .account-integral-overf .ui-dialog.ui-shadow {\n  height: 500px !important; }\n  :host/deep/ .account-integral-overf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLWVsZW1lbnQtbWFuYWdlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWxpc3QtbWFuYWdlXFxjdXN0b20tZWxlbWVudC1tYW5hZ2VcXGN1c3RvbS1lbGVtZW50LW1hbmFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUE0QixFQUFBO0VBRGhDO0lBR1EsaUJBQWlCLEVBQUE7RUFIekI7SUFNUSx3QkFBd0IsRUFBQTtFQUdoQztFQUNJLHdCQUF3QixFQUFBO0VBRTVCO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLWVsZW1lbnQtbWFuYWdlL2N1c3RvbS1lbGVtZW50LW1hbmFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1kZWFsIHtcclxuICAgIG1heC1oZWlnaHQ6IDcwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAudGV4dC1yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAubWFydCB7XHJcbiAgICAgICAgbWFyZ2luOiAzcHggMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbjpob3N0IC9kZWVwLyAuYWNjb3VudC1pbnRlZ3JhbC1vdmVyZiAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLmFjY291bnQtaW50ZWdyYWwtb3ZlcmYgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-element-manage/custom-element-manage.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-element-manage/custom-element-manage.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CustomElementManage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomElementManage", function() { return CustomElementManage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_element_adjustment_account_integral_account_integral_exam_bean_account_integral_exam_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/element-adjustment/account-integral/account-integral-exam/bean/account-integral-exam.bean */ "./src/app/pages/tzb/element-adjustment/account-integral/account-integral-exam/bean/account-integral-exam.bean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CustomElementManage = /** @class */ (function () {
    function CustomElementManage(commfunc, 
    // public httpService: CusOperationHttpService,
    routeInfo, httpService, messageService, commonFunc, fb) {
        this.commfunc = commfunc;
        this.routeInfo = routeInfo;
        this.httpService = httpService;
        this.messageService = messageService;
        this.commonFunc = commonFunc;
        this.fb = fb;
        this.loadingShow = { flag: false }; // loading框
        this.bank = false; //本行
        this.bankown = false; //非本行
        this.jbxx = []; //名单码值
        this.reList = []; //类型表
        this.dataList = [];
        this.detailList = []; //基本数据
        this.operationTypeD = false; //单
        this.operationTypeP = false; //批
        this.ruku = false; //入库
        this.chuku = false; //出库
        this.piliangruku = false; //批量入库
        this.piliangchuku = false; //批量出库
        this.dengjitiaozheng = false; //等级调整
        this.shixiao = false; //失效
        this.tiaozhenglishi = false; //调整历史
        this.bean = new app_pages_tzb_element_adjustment_account_integral_account_integral_exam_bean_account_integral_exam_bean__WEBPACK_IMPORTED_MODULE_5__["CardElementsAdjustmentBean"]();
        this.ch = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["CALENDAR_CN"];
        this.nameList = [];
        this.noPromptDispaly = false;
        this.adjustmentTypeList = [];
        this.adjustmentModeList = [];
        this.consumeOverdrawQuotaType = [];
        this.adjustOrientation = [];
        this.tablelist = [];
        this.zhanghudanhu = false;
        this.xianedanhu = false;
        this.zhanghupiliang = false;
        this.xianepiliang = false;
        this.first = 0;
        this.totalNum = 0;
        this.canUp = false;
        this.isHistory = false;
        this.updataDisplay = false;
        this.Display = false;
        this.tabMesg = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"]; //表格中无数据时显示的内容
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__["TZB_CUS_DOWNLOAD"]; //added by yuanzhenghe
        this.downloadurl = "";
        debugger;
        // 获取参数
        this.detailList = this.routeInfo.snapshot.params;
        this.beanExam = JSON.parse(this.routeInfo.snapshot.params.dataMap);
        console.log('beanExam:', this.beanExam);
        // this.bean = JSON.parse(this.routeInfo.snapshot.params.dataMap)
        this.bean.pageSize = 10;
        this.bean.pageNum = 1;
        this.first = 0;
        this.taskRate = this.routeInfo.snapshot.params['taskRate'];
        this.flag = this.routeInfo.snapshot.params['markFlag'];
        this.mainFlowNo = this.routeInfo.snapshot.params['mainFlowNo'];
        if (this.flag == '1') {
            this.isHistory = false;
        }
        else {
            this.isHistory = true;
        }
        if (this.taskRate == '1' && !this.isHistory) {
            this.canUp = true;
        }
        else {
            this.canUp = false;
        }
        this.userform = fb.group({
            isMybankCust: [''],
            customerType: [''],
            partyId: [''],
            custName: [''],
            statusId: ['Y'],
            listTypeOne: [''],
            listTypeTwo: [''],
            listTypeId: [''],
            idType: [''],
            idNo: [''],
            cellphone: [''],
            contactAddress: [''],
            inListType: ['1'],
            classifyId: [''],
            toListReason: [''],
            relatedlistTypeId: [''],
            registerUser: [''],
            registerUserName: [''],
            registerOrg: [''],
            registerOrgName: [''],
            sourceDes: [''],
            registerTime: [''],
            filePath: [''],
            fileName: [''],
            releaseReason: [''],
        });
    }
    CustomElementManage.prototype.ngOnInit = function () {
        var time = new Date(this.beanExam['registerTime']);
        var time1 = this.commfunc.transDateN(time);
        this.beanExam['registerTime'] = time1;
        this.codeValues();
        this.isMybankCustList = this.code['isMybankCust'];
        this.customerTypeList = this.code['customerType'];
        this.statusIdList = this.code['statusId'];
        this.inListTypeList = this.code['inListType'];
        this.idTypeList = this.code['CERT_TYPE'];
        this.approvalStatusList = this.code['approvalStatus'];
        this.operationTypeList = this.code['operation'];
        debugger;
        if (this.beanExam.operationType == '1001') { //入库
            this.operationTypeD = true;
            this.ruku = true;
        }
        else if (this.beanExam.operationType == '1002') { //批量入库
            this.operationTypeP = true;
            this.piliangruku = true;
            this.tiaozhenglishi = true;
        }
        else if (this.beanExam.operationType == '1003') { //出库
            this.operationTypeD = true;
            this.chuku = true;
            this.userform.get('registerUser').setValue(this.beanExam.registerUser);
            this.userform.get('registerUserName').setValue(this.beanExam.registerUserName);
            this.userform.get('registerOrg').setValue(this.beanExam.registerOrg);
            this.userform.get('registerOrgName').setValue(this.beanExam.registerOrgName);
            this.userform.get('relatedlistTypeId').setValue(this.beanExam.listTypeId);
        }
        else if (this.beanExam.operationType == '1004') { //批量出库
            this.operationTypeP = true;
            this.piliangchuku = true;
            this.tiaozhenglishi = true;
            this.userform.removeControl('sourceDes');
            this.userform.removeControl('inListType');
        }
        else if (this.beanExam.operationType == '1005') { //等级调整
            this.operationTypeD = true;
            this.dengjitiaozheng = true;
            this.userform.get('relatedlistTypeId').setValue(this.beanExam.relatedlistTypeId);
        }
        else if (this.beanExam.operationType == '1006') { //失效
            this.operationTypeD = true;
            this.shixiao = true;
        }
        if (this.beanExam.operationType == '1002' || this.beanExam.operationType == '1004') {
            this.userform.get('registerUser').setValue(this.beanExam.registerUser);
            this.userform.get('registerUserName').setValue(this.beanExam.registerUserName);
            this.userform.get('registerOrg').setValue(this.beanExam.registerOrg);
            this.userform.get('registerOrgName').setValue(this.beanExam.registerOrgName);
            this.userform.get('registerTime').setValue(this.beanExam.registerTime);
            this.userform.get('releaseReason').setValue(this.beanExam.releaseReason);
            this.userform.get('toListReason').setValue(this.beanExam.toListReason);
            this.userform.get('listTypeOne').setValue(this.beanExam.listTypeOne);
            if (this.beanExam.operationType == '1002') {
                this.userform.get('inListType').setValue(this.beanExam.inListType);
                this.userform.get('sourceDes').setValue(this.beanExam.sourceDes);
            }
            if (this.beanExam.filePath) {
                var arr = this.beanExam.filePath.split('/');
                var path = '';
                for (var j = 1; j < arr.length - 1; j++) {
                    path += '/' + arr[j];
                }
                path = path + '/';
                // this.userform.value.filePath = path;
                var donwname = arr[arr.length - 1];
                //this.downloadurl = this.DOWNLOAD +"?fileName=" + this.beanExam.filePath;
                debugger;
                //let aa = this.beanExam.fileName;
                var aa = donwname;
                this.beanExam.fileUrl = path;
                debugger;
                // window.open(TZB_CUS_DOWNLOAD + "?fileName=" + encodeURI(aa) + "&fileUrl=" + this.beanExam.fileUrl)
                this.downloadurl = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(aa) + "&fileUrl=" + this.beanExam.fileUrl;
                console.log(this.downloadurl);
                this.fileList = [{
                        fileName: arr[arr.length - 1]
                    }];
            }
            // this.queryClick();
        }
        else {
            this.userform.get('isMybankCust').setValue(this.beanExam.isMybankCust);
            this.userform.get('customerType').setValue(this.beanExam.customerType);
            this.userform.get('partyId').setValue(this.beanExam.partyId);
            this.userform.get('custName').setValue(this.beanExam.custName);
            this.userform.get('statusId').setValue(this.beanExam.statusId);
            this.userform.get('listTypeOne').setValue(this.beanExam.listTypeOne);
            this.userform.get('listTypeTwo').setValue(this.beanExam.listTypeTwo);
            this.userform.get('inListType').setValue(this.beanExam.inListType);
            this.userform.get('classifyId').setValue(this.beanExam.classifyId);
            this.userform.get('toListReason').setValue(this.beanExam.toListReason);
            if (this.beanExam.operationType == '1001') {
                this.userform.get('relatedlistTypeId').setValue(this.beanExam.listTypeId);
            }
            else {
                this.userform.get('listTypeId').setValue(this.beanExam.listTypeId);
            }
            this.userform.get('releaseReason').setValue(this.beanExam.releaseReason);
        }
        this.isMybank();
        for (var e = 0; e < 3; e++) {
            this.listType(e);
        }
    };
    //码值
    CustomElementManage.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //是否我行客户
    CustomElementManage.prototype.isMybank = function () {
        if (this.beanExam.isMybankCust == 'Y') {
            this.bank = true;
            this.bankown = false;
        }
        else if (this.beanExam.isMybankCust == 'N') {
            this.bank = false;
            this.bankown = true;
            this.userform.get('idType').setValue(this.beanExam.idType);
            this.userform.get('idNo').setValue(this.beanExam.idNo);
            this.userform.get('cellphone').setValue(this.beanExam.cellphone);
            this.userform.get('contactAddress').setValue(this.beanExam.contactAddress);
        }
    };
    //名单联动
    CustomElementManage.prototype.listType = function (i) {
        var _this = this;
        if (i == '0') {
            var param = {};
            param['listTypeHierarchy'] = 1;
            // const configParam = {
            //     httpService: this.httpService,
            //     loadingFlag: true,
            //     messageFlag: true,
            //     inputParam: param,
            //     message: this.messageService,
            //     injectName: 'selectBlackListType',
            //     loadingShow: this.loadingShow,
            //     messageInfo: '查询成功',
            // }
            // this.commonFunc.haddleData(configParam, (bodyData) => {
            //     if (bodyData) {
            //         let list = bodyData.returnList;
            //         list.forEach(element => {
            //             let obj = {};
            //             obj['label'] = element.listTypeName;
            //             obj['value'] = element.listTypeId;
            //             this.jbxx.push(obj);
            //         });
            //         this.jbxx.unshift({ label: '请选择', value: '' });
            //         this.listTypeOneList = this.jbxx;
            //     }
            // });
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var list = data.returnList;
                    list.forEach(function (element) {
                        var obj = {};
                        obj['label'] = element.listTypeName;
                        obj['value'] = element.listTypeId;
                        _this.jbxx.push(obj);
                    });
                    _this.jbxx.unshift({ label: '请选择', value: '' });
                    _this.listTypeOneList = _this.jbxx;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            });
        }
        else if (i == '1') {
            var param = {};
            param['listTypeHierarchy'] = 2;
            param['parentListTypeId'] = this.beanExam.listTypeOne;
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var list = data.returnList;
                    _this.jbxx = [];
                    list.forEach(function (element) {
                        var obj = {};
                        obj['label'] = element.listTypeName;
                        obj['value'] = element.listTypeId;
                        _this.jbxx.push(obj);
                    });
                    _this.jbxx.unshift({ label: '请选择', value: '' });
                    _this.listTypeTwoList = _this.jbxx;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            });
            // const configParam = {
            //     httpService: this.httpService,
            //     loadingFlag: true,
            //     messageFlag: true,
            //     inputParam: param,
            //     message: this.messageService,
            //     injectName: 'selectBlackListType',
            //     loadingShow: this.loadingShow,
            //     messageInfo: '查询成功',
            // }
            // this.commonFunc.haddleData(configParam, (bodyData) => {
            //     if (bodyData) {
            //         let list = bodyData.returnList;
            //         this.jbxx = [];
            //         list.forEach(element => {
            //             let obj = {};
            //             obj['label'] = element.listTypeName;
            //             obj['value'] = element.listTypeId;
            //             this.jbxx.push(obj);
            //         });
            //         this.jbxx.unshift({ label: '请选择', value: '' });
            //         this.listTypeTwoList = this.jbxx;
            //     }
            // });
        }
        else if (i == '2') {
            var param = {};
            param['listTypeHierarchy'] = 3;
            param['parentListTypeId'] = this.beanExam.listTypeTwo;
            // const configParam = {
            //     httpService: this.httpService,
            //     loadingFlag: true,
            //     messageFlag: true,
            //     inputParam: param,
            //     message: this.messageService,
            //     injectName: 'selectBlackListType',
            //     loadingShow: this.loadingShow,
            //     messageInfo: '查询成功',
            // }
            // this.commonFunc.haddleData(configParam, (bodyData) => {
            //     if (bodyData) {
            //         this.reList = bodyData.returnList;
            //         let list = bodyData.returnList;
            //         this.jbxx = [];
            //         list.forEach(element => {
            //             let obj = {};
            //             obj['label'] = element.listTypeName;
            //             obj['value'] = element.listTypeId;
            //             this.jbxx.push(obj);
            //         });
            //         this.jbxx.unshift({ label: '请选择', value: '' });
            //         this.listTypeIdList = this.jbxx;
            //     }
            // });
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.reList = data.returnList;
                    var list = data.returnList;
                    _this.jbxx = [];
                    list.forEach(function (element) {
                        var obj = {};
                        obj['label'] = element.listTypeName;
                        obj['value'] = element.listTypeId;
                        _this.jbxx.push(obj);
                    });
                    _this.jbxx.unshift({ label: '请选择', value: '' });
                    _this.listTypeIdList = _this.jbxx;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            });
        }
        else if (i == '3') {
            for (var e = 0; e < this.reList.length; e++) {
                if (this.beanExam.listTypeId == this.reList[e].listTypeId) {
                    this.userform.get('classifyId').setValue(this.reList[e].classifyId);
                }
            }
        }
    };
    CustomElementManage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-element-manage',
            template: __webpack_require__(/*! ./custom-element-manage.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-element-manage/custom-element-manage.component.html"),
            styles: [__webpack_require__(/*! ./custom-element-manage.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-element-manage/custom-element-manage.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_9__["CusListManageHttpService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_8__["MessageService"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_7__["Customtools"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], CustomElementManage);
    return CustomElementManage;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-analy/bean/custom-list-analy.bean.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-list-analy/bean/custom-list-analy.bean.ts ***!
  \******************************************************************************************************/
/*! exports provided: AnayBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnayBean", function() { return AnayBean; });
var AnayBean = /** @class */ (function () {
    function AnayBean() {
    }
    return AnayBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-analy/custom-list-analy.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-list-analy/custom-list-analy.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 main_part\">\r\n  <div class=\"ui-g-12 padding\">\r\n    <div class=\"ui-g-4 pd4\">\r\n      <div class=\"ui-g-3 tit\">录入日期:</div>\r\n      <div class=\"ui-g-7\" style=\"display:flex;\">\r\n        <div class=\"ui-g-6\" style=\"padding:0 0 !important;\">\r\n          <p-calendar class=\"calendar-name\" [showIcon]=\"true\" [showButtonBar]=\"true\" [readonlyInput]=\"true\" [(ngModel)]=\"queryStartDate\"\r\n            [maxDate]=\"newdateTime\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n            [locale]=\"ch\" [showOtherMonths]=\"false\"></p-calendar>\r\n        </div>\r\n        <span style=\"padding:0 2px !important;\">—</span>\r\n        <div class=\"ui-g-6\" style=\"padding:0 0 !important;\">\r\n          <p-calendar class=\"calendar-name\" [showIcon]=\"true\" [showButtonBar]=\"true\" [readonlyInput]=\"true\" [(ngModel)]=\"queryEndDate\"\r\n            [minDate]=\"queryStartDate\" [maxDate]=\"newdateTime\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\"\r\n            dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [showOtherMonths]=\"false\"></p-calendar>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <div class=\"ui-g-3 tit\">机构:</div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"queryinputbtn\">\r\n          <input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"AnayBean.registerOrgName\" />\r\n          <div (click)=\"openOrg('handle')\" class=\"clickspan\">\r\n            <a class=\"a-hand\">\r\n              <span>...</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <div class=\"ui-g-5 tit\">经办人/主联系人:</div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"queryinputbtn\">\r\n          <input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"AnayBean.mainUserName\" />\r\n          <div (click)=\"openPeople()\" class=\"clickspan\">\r\n            <a class=\"a-hand\">\r\n              <span>...</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 padding\">\r\n    <div class=\"ui-g-4\">\r\n      <div class=\"ui-g-3 tit\">状态：</div>\r\n      <div class=\"ui-g-7\">\r\n        <p-dropdown [options]=\"statusIds\" [(ngModel)]=\"AnayBean.statusId\" placeholder=\"请选择\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-8\" style=\"display:flex;flex-direction: row;align-items: center\">\r\n      <div class=\"ui-g-2 tit\" style=\"width:12.5%!important;\">名单类别:</div>\r\n      <div class=\"ui-g-10\" style=\"padding:0!important;\">\r\n        <div class=\"ui-g-4\">\r\n          <p-dropdown [options]=\"fastlistbz\" (onChange)=\"nextlistbox($event)\" [(ngModel)]=\"AnayBean.listTypeOne\"></p-dropdown>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <p-dropdown [options]=\"nextlistbz\" (onChange)=\"nextlistboxs($event)\" [(ngModel)]=\"AnayBean.listTypeTwo\"></p-dropdown>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <p-dropdown [options]=\"nextlistbzs\" [(ngModel)]=\"AnayBean.listTypeId\"></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div style=\"margin:25px 0 25px 0;\" class=\"ui-g-12 btn\">\r\n    <button pButton label=\"查询\" (click)=\"queryClick()\"></button>\r\n    <button pButton label=\"重置\" (click)=\"resetClick()\"></button>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <p style=\"font-size:14px;\">\r\n      <span>共收录名单：</span>\r\n      <span style=\"color:#FF0000\">{{totalSum}}</span>条;&nbsp;&nbsp;\r\n      <span>上月新增名单:</span>\r\n      <span style=\"color:#FF0000\">{{totalMonthSum}}</span>条;&nbsp;&nbsp;\r\n      <span>昨日新增名单:</span>\r\n      <span style=\"color:#FF0000\">{{totalDaySum}}</span>条;</p>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 table base-table\">\r\n    <p-dataTable [value]=\"tableData\" [scrollable]=\"true\">\r\n      <p-column field=\"number\" header='序号' [style]=\"{'width':'60px'}\">\r\n        <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{ri+1}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"partyId\" header='客户号' [style]=\"{'width':'120px'}\"> </p-column>\r\n      <p-column field=\"custName\" header='客户名称' [style]=\"{'width':'90px'}\"></p-column>\r\n      <p-column field=\"idType\" header='证件类型' [style]=\"{'width':'90px'}\">\r\n        <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          <span *ngIf=\"col.idType != ''\">{{col.idType | codeValuePie:idenTypes}}</span>\r\n          <span *ngIf=\"col.idType == ''\">{{col.idType}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"idNo\" header='证件号码' [style]=\"{'width':'235px'}\"> </p-column>\r\n      <p-column field=\"contactAddress\" header='联系地址' [style]=\"{'width':'185px'}\"></p-column>\r\n      <p-column field=\"cellphone\" header='联系电话' [style]=\"{'width':'180px'}\"></p-column>\r\n      <p-column field=\"listTypeOneName\" header='一级名单' [style]=\"{'width':'150px'}\"></p-column>\r\n      <p-column field=\"listTypeTwoName\" header='二级名单' [style]=\"{'width':'140px'}\"></p-column>\r\n      <p-column field=\"listTypeName\" header='风险等级' [style]=\"{'width':'90px'}\"></p-column>\r\n      <p-column field=\"toListReason\" header='录入原因' [style]=\"{'width':'400px'}\"></p-column>\r\n      <p-column field=\"inListType\" header='录入方式' [style]=\"{'width':'80px'}\">\r\n        <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n          <span>{{col.inListType|codeValuePie:inListTypeList}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"registerTime\" header='生成日期' [style]=\"{'width':'120px'}\"></p-column>\r\n      <p-column field=\"registerUserName\" header='录入人姓名' [style]=\"{'width':'135px'}\"></p-column>\r\n      <p-column field=\"registerOrgName\" header='录入机构名称' [style]=\"{'width':'250px'}\"></p-column>\r\n      <p-column field=\"mainUserName\" header='主联系人' [style]=\"{'width':'85px'}\"></p-column>\r\n      <p-column field=\"mainOrgName\" header='主联系人机构' [style]=\"{'width':'250px'}\"></p-column>\r\n    </p-dataTable>\r\n    <p-paginator first={{first}} rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,30,50,200]\"\r\n      (onPageChange)=\"paginate($event)\"></p-paginator>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <button pButton type=\"button\" label=\"下载\" class=\"queryBtn\" (click)=\"downlon()\"></button>\r\n  </div>\r\n</div>\r\n\r\n<p-dialog *ngIf='orgTreeDisplay' [(visible)]=\"orgTreeDisplay\" modal=\"modal\" [responsive]=\"true\" (onHide)=\"onHideClose()\"\r\n  class=\"contact-track-f\">\r\n  <p-header>机构树</p-header>\r\n  <org-tree-component *ngIf='orgTreeDisplay' (outValue)=\"treeCall($event)\"></org-tree-component>\r\n</p-dialog>\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!--选择员工-->\r\n<p-dialog [(visible)]=\"userDisplay\" [responsive]=\"true\" [positionTop]=10 modal=\"modal\" class=\"contact-track-f\">\r\n  <p-header>\r\n    员工列表\r\n  </p-header>\r\n  <queryUser *ngIf=\"userDisplay\" [in-value]=\"userInValue\" (outValue)=\"workerCall($event)\"></queryUser>\r\n</p-dialog>\r\n<tzb-loading [blocked]=\"loadingShow.flag\"></tzb-loading>\r\n<p-confirmDialog header=\"{{headerTitle}}\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n  <p-footer>\r\n    <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n    <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n  </p-footer>\r\n</p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-analy/custom-list-analy.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-list-analy/custom-list-analy.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.main_part {\n  background: #fff; }\n.main_part .tit {\n    text-align: right; }\n.main_part .padding {\n    padding: 0; }\n.main_part .table {\n    text-align: center; }\n.main_part .btn {\n    text-align: center; }\n.main_part .pd4 {\n    padding: 6px 0 !important; }\n.main_part input[pInputText] {\n    min-width: 80px !important; }\n.main_part .queryinputbtn {\n    float: left;\n    display: flex;\n    width: 100%;\n    position: relative;\n    cursor: pointer; }\n.main_part .queryinputbtn .queryinputOrg {\n      border-right: none;\n      border-radius: 3px 0 0 3px;\n      width: 85% !important;\n      min-width: 69px !important; }\n.main_part .queryinputbtn .clickspan {\n      width: 14%;\n      height: 22px;\n      cursor: pointer; }\n:host/deep/.calendar-name .ui-calendar {\n  min-width: 90px !important; }\n.order-query {\n  margin-top: 10px;\n  padding: 0;\n  padding-bottom: 50px; }\n.order-query .query-criteria {\n    padding: 0 30px; }\n.order-query .query-criteria label {\n      display: inline-block;\n      width: 150px;\n      text-align: right; }\n.order-query /deep/ .ui-g-12 {\n    padding: 0px !important; }\n.order-query /deep/ .ui-g-12 .ui-g-6 {\n      width: 30%;\n      margin-left: 13%; }\n.order-query .btn {\n    text-align: center; }\n.order-query .btn .queryBtn,\n    .order-query .btn .resetBtn {\n      width: 100px;\n      margin: 30px; }\n.order-query .juery-result {\n    padding: 0 30px;\n    height: 400px; }\n.order-query .juery-result .addBtn {\n      width: 100px;\n      margin-top: 15px; }\n.order-query .juery-result .table {\n      border: 1px solid #bdbdbd;\n      text-align: center;\n      margin: 15px 0; }\n.order-query .juery-result .table .modify {\n        margin-right: 20px; }\n.bg {\n  background: #fdfdfd; }\n:host/deep/ .order-query .query-criteria .ui-dropdown {\n  width: 50% !important; }\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n/*\r\n*日历组件的样式修改开始\r\n*/\n:host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important; }\n:host/deep/ .ui-datepicker select.ui-datepicker-month {\n  width: 40%;\n  font-size: 16px !important; }\n:host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n:host/deep/ #dro .ui-dropdown {\n  width: 24% !important; }\n/*\r\n*日历组件的样式修改结束\r\n*/\n.requireLabel {\n  margin-left: 150px; }\n.ui_re {\n  width: 0px;\n  height: 0px;\n  float: left;\n  position: relative; }\n.cont60 {\n  float: left;\n  width: 51%;\n  height: 25px; }\n.cont30 {\n  float: left;\n  width: 115px;\n  height: 25px;\n  line-height: 25px;\n  font-size: 14px; }\n.textAligin {\n  text-align: right;\n  line-height: 25px; }\n:host /deep/ .contact-track-f .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n:host/deep/ .contact-track-f .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLWxpc3QtYW5hbHkvY3VzdG9tLWxpc3QtYW5hbHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWxpc3QtbWFuYWdlL2N1c3RvbS1saXN0LWFuYWx5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWxpc3QtbWFuYWdlXFxjdXN0b20tbGlzdC1hbmFseVxcY3VzdG9tLWxpc3QtYW5hbHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksZ0JBQWdCLEVBQUE7QUFEcEI7SUFHUSxpQkFBaUIsRUFBQTtBQUh6QjtJQU1RLFVBQVUsRUFBQTtBQU5sQjtJQVNRLGtCQUFrQixFQUFBO0FBVDFCO0lBWVEsa0JBQWtCLEVBQUE7QUFaMUI7SUFlUSx5QkFBeUIsRUFBQTtBQWZqQztJQWtCUSwwQkFBMEIsRUFBQTtBQWxCbEM7SUFxQlEsV0FBVztJQUNYLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTtBQXpCdkI7TUEyQlksa0JBQWtCO01BQ2xCLDBCQUEwQjtNQUMxQixxQkFBcUI7TUFDckIsMEJBQTBCLEVBQUE7QUE5QnRDO01BaUNZLFVBQVU7TUFDVixZQUFZO01BQ1osZUFBZSxFQUFBO0FBSTNCO0VBQ0ksMEJBQTBCLEVBQUE7QUFJOUI7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG9CQUFvQixFQUFBO0FBSHRCO0lBS00sZUFBZSxFQUFBO0FBTHJCO01BT1UscUJBQXFCO01BQ3JCLFlBQVk7TUFDWixpQkFBaUIsRUFBQTtBQVQzQjtJQWFJLHVCQUF1QixFQUFBO0FBYjNCO01BZVEsVUFBUztNQUNULGdCQUFnQixFQUFBO0FBaEJ4QjtJQW9CTSxrQkFBa0IsRUFBQTtBQXBCeEI7O01BdUJVLFlBQVk7TUFDWixZQUFZLEVBQUE7QUF4QnRCO0lBNkJNLGVBQWU7SUFDZixhQUFZLEVBQUE7QUE5QmxCO01BZ0NVLFlBQVk7TUFDWixnQkFBZ0IsRUFBQTtBQWpDMUI7TUFvQ1UseUJBQXlCO01BQ3pCLGtCQUFrQjtNQUNsQixjQUFjLEVBQUE7QUF0Q3hCO1FBd0NjLGtCQUFrQixFQUFBO0FBS2hDO0VBQ0ksbUJBQW1CLEVBQUE7QUFFdkI7RUFDRSxxQkFBcUIsRUFBQTtBQUd2QjtFQUNFLHFCQUFxQixFQUFBO0FBRXZCOztDRHBCQztBQ3dCRDtFQUNFLFVBQVM7RUFDVCwwQkFBMEIsRUFBQTtBQUc1QjtFQUNDLFVBQVM7RUFDVCwwQkFBMEIsRUFBQTtBQUczQjtFQUNDLGNBQWEsRUFBQTtBQUVkO0VBQ0kscUJBQXFCLEVBQUE7QUFFekI7O0NEdkJDO0FDMkJEO0VBQ0Usa0JBQWtCLEVBQUE7QUFTcEI7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTtBQVN0QjtFQUNJLFdBQVc7RUFDWCxVQUFTO0VBQ1QsWUFBWSxFQUFBO0FBRWhCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTtBQUVuQjtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtBQUVyQjtFQUNJLHVCQUF1QjtFQUN2QixzQkFBc0IsRUFBQTtBQUUxQjtFQUNJLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLWxpc3QtYW5hbHkvY3VzdG9tLWxpc3QtYW5hbHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubWFpbl9wYXJ0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxuICAubWFpbl9wYXJ0IC50aXQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gIC5tYWluX3BhcnQgLnBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDA7IH1cbiAgLm1haW5fcGFydCAudGFibGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAubWFpbl9wYXJ0IC5idG4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAubWFpbl9wYXJ0IC5wZDQge1xuICAgIHBhZGRpbmc6IDZweCAwICFpbXBvcnRhbnQ7IH1cbiAgLm1haW5fcGFydCBpbnB1dFtwSW5wdXRUZXh0XSB7XG4gICAgbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7IH1cbiAgLm1haW5fcGFydCAucXVlcnlpbnB1dGJ0biB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgLm1haW5fcGFydCAucXVlcnlpbnB1dGJ0biAucXVlcnlpbnB1dE9yZyB7XG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbiAgICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcbiAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50OyB9XG4gICAgLm1haW5fcGFydCAucXVlcnlpbnB1dGJ0biAuY2xpY2tzcGFuIHtcbiAgICAgIHdpZHRoOiAxNCU7XG4gICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuOmhvc3QvZGVlcC8uY2FsZW5kYXItbmFtZSAudWktY2FsZW5kYXIge1xuICBtaW4td2lkdGg6IDkwcHggIWltcG9ydGFudDsgfVxuXG4ub3JkZXItcXVlcnkge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDsgfVxuICAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIHtcbiAgICBwYWRkaW5nOiAwIDMwcHg7IH1cbiAgICAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gIC5vcmRlci1xdWVyeSAvZGVlcC8gLnVpLWctMTIge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50OyB9XG4gICAgLm9yZGVyLXF1ZXJ5IC9kZWVwLyAudWktZy0xMiAudWktZy02IHtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgICBtYXJnaW4tbGVmdDogMTMlOyB9XG4gIC5vcmRlci1xdWVyeSAuYnRuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAub3JkZXItcXVlcnkgLmJ0biAucXVlcnlCdG4sXG4gICAgLm9yZGVyLXF1ZXJ5IC5idG4gLnJlc2V0QnRuIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIG1hcmdpbjogMzBweDsgfVxuICAub3JkZXItcXVlcnkgLmp1ZXJ5LXJlc3VsdCB7XG4gICAgcGFkZGluZzogMCAzMHB4O1xuICAgIGhlaWdodDogNDAwcHg7IH1cbiAgICAub3JkZXItcXVlcnkgLmp1ZXJ5LXJlc3VsdCAuYWRkQnRuIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7IH1cbiAgICAub3JkZXItcXVlcnkgLmp1ZXJ5LXJlc3VsdCAudGFibGUge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMTVweCAwOyB9XG4gICAgICAub3JkZXItcXVlcnkgLmp1ZXJ5LXJlc3VsdCAudGFibGUgLm1vZGlmeSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDsgfVxuXG4uYmcge1xuICBiYWNrZ3JvdW5kOiAjZmRmZGZkOyB9XG5cbjpob3N0L2RlZXAvIC5vcmRlci1xdWVyeSAucXVlcnktY3JpdGVyaWEgLnVpLWRyb3Bkb3duIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50OyB9XG5cbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGEge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cblxuLypcclxuKuaXpeWOhue7hOS7tueahOagt+W8j+S/ruaUueW8gOWni1xyXG4qL1xuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXIteWVhciB7XG4gIHdpZHRoOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50OyB9XG5cbjpob3N0L2RlZXAvIC51aS1kYXRlcGlja2VyIHNlbGVjdC51aS1kYXRlcGlja2VyLW1vbnRoIHtcbiAgd2lkdGg6IDQwJTtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QvZGVlcC8gLnVpLWJ1dHRvbi51aS1idXR0b24tc2Vjb25kYXJ5LnVpLXN0YXRlLWRlZmF1bHQge1xuICBjb2xvcjogI2ZmZmZmZjsgfVxuXG46aG9zdC9kZWVwLyAjZHJvIC51aS1kcm9wZG93biB7XG4gIHdpZHRoOiAyNCUgIWltcG9ydGFudDsgfVxuXG4vKlxyXG4q5pel5Y6G57uE5Lu255qE5qC35byP5L+u5pS557uT5p2fXHJcbiovXG4ucmVxdWlyZUxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4OyB9XG5cbi51aV9yZSB7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5jb250NjAge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDUxJTtcbiAgaGVpZ2h0OiAyNXB4OyB9XG5cbi5jb250MzAge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDExNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE0cHg7IH1cblxuLnRleHRBbGlnaW4ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7IH1cblxuOmhvc3QgL2RlZXAvIC5jb250YWN0LXRyYWNrLWYgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xuICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDsgfVxuXG46aG9zdC9kZWVwLyAuY29udGFjdC10cmFjay1mIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcbiAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDsgfVxuIiwiLm1haW5fcGFydHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAudGl0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnBhZGRpbmd7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC50YWJsZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYnRue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5wZDR7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlucHV0W3BJbnB1dFRleHRde1xyXG4gICAgICAgIG1pbi13aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnF1ZXJ5aW5wdXRidG4ge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAucXVlcnlpbnB1dE9yZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA2OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbGlja3NwYW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTQlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuOmhvc3QvZGVlcC8uY2FsZW5kYXItbmFtZSAudWktY2FsZW5kYXIge1xyXG4gICAgbWluLXdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4vL+iuouWNleafpeivolxyXG4ub3JkZXItcXVlcnkge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDsgLy/mn6Xor6LmnaHku7ZcclxuICAucXVlcnktY3JpdGVyaWEge1xyXG4gICAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIC9kZWVwLyAudWktZy0xMntcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgLnVpLWctNntcclxuICAgICAgICB3aWR0aDozMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEzJTtcclxuICAgIH1cclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLnF1ZXJ5QnRuLFxyXG4gICAgICAucmVzZXRCdG4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gIH0gLy/mn6Xor6Lnu5PmnpxcclxuICAuanVlcnktcmVzdWx0IHtcclxuICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICBoZWlnaHQ6NDAwcHg7XHJcbiAgICAgIC5hZGRCdG4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgfVxyXG4gICAgICAudGFibGUge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgICAgLm1vZGlmeSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcbi5iZ3tcclxuICAgIGJhY2tncm91bmQ6ICNmZGZkZmQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLm9yZGVyLXF1ZXJ5IC5xdWVyeS1jcml0ZXJpYSAudWktZHJvcGRvd257XHJcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG59XHJcbi8v6KGo5qC85a2X5q+N44CB5pWw5a2X6Ieq5Yqo5o2i6KGMXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGF7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbi8qXHJcbirml6Xljobnu4Tku7bnmoTmoLflvI/kv67mlLnlvIDlp4tcclxuKi9cclxuLy/pgInmi6nlubTku71cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXIteWVhcntcclxuICB3aWR0aDo1MCU7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy/pgInmi6nmnIjku71cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXItbW9udGh7XHJcbiB3aWR0aDo0MCU7XHJcbiBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG4vL+a4heepuuOAgeS7iuWkqeS4pOS4quaMiemSrueahOWtl+S9k+minOiJslxyXG46aG9zdC9kZWVwLyAudWktYnV0dG9uLnVpLWJ1dHRvbi1zZWNvbmRhcnkudWktc3RhdGUtZGVmYXVsdHtcclxuIGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuOmhvc3QvZGVlcC8gI2RybyAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDI0JSAhaW1wb3J0YW50O1xyXG59XHJcbi8qXHJcbirml6Xljobnu4Tku7bnmoTmoLflvI/kv67mlLnnu5PmnZ9cclxuKi9cclxuXHJcbi5yZXF1aXJlTGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxufVxyXG4vLyAuY2xpY2tzcGFuIHtcclxuLy8gICAgIHdpZHRoOiA0MHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAyM3B4O1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IC00MnB4O1xyXG4vLyB9XHJcbi51aV9yZSB7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4vLyAuY2xpY2tzcGFuIHtcclxuLy8gICAgIHdpZHRoOiA0MHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAyM3B4O1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IC00MnB4O1xyXG4vLyB9XHJcbi5jb250NjAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDo1MSU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuLmNvbnQzMCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMTVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi50ZXh0QWxpZ2luIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5jb250YWN0LXRyYWNrLWYgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0L2RlZXAvIC5jb250YWN0LXRyYWNrLWYgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-analy/custom-list-analy.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-list-analy/custom-list-analy.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CustomListAnalyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomListAnalyComponent", function() { return CustomListAnalyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var _bean_custom_list_analy_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bean/custom-list-analy.bean */ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-analy/bean/custom-list-analy.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomListAnalyComponent = /** @class */ (function () {
    function CustomListAnalyComponent(cusOperationHttpService, confirmationService, commfunc, fb, router) {
        this.cusOperationHttpService = cusOperationHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.router = router;
        //表数据
        this.tableData = [];
        this.loadingShow = { flag: false }; // loading框
        this.statusIds = [
            { label: "请选择", value: "" },
            { label: "有效", value: "Y" },
            { label: "无效", value: "N" },
        ];
        this.fastlistbz = [{ label: "请选择", value: "" }];
        this.nextlistbz = [{ label: "请选择", value: "" }];
        this.nextlistbzs = [{ label: "请选择", value: "" }];
        this.first = 0;
        this.totalDaySum = 0;
        this.totalMonthSum = 0;
        this.totalSum = 0;
        this.orgTreeDisplay = false;
        this.personPage = false;
        //提示信息
        this.msgs = [];
        //日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_CN"]; //讲英文转化为中文
        this.queryStartDate = null;
        this.queryEndDate = null;
        this.dateTime = new Date();
        this.pageSize = 10;
        this.pageNumber = 1;
        this.AnayBean = new _bean_custom_list_analy_bean__WEBPACK_IMPORTED_MODULE_7__["AnayBean"]();
        this.idenTypes = [];
        this.newdateTime = new Date();
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        this.codeValues(); //调用方法，获取全部码值
        this.inListTypeList = this.code['inListType'];
    }
    CustomListAnalyComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.AnayBean.registerOrg = this.user.extParam.orgId;
        // this.AnayBean.registerOrgName = this.chName.orgName;
        this.idenTypes = this.code['ALL_IDEN_TYPE'];
        // this.AnayBean.statusId = 'Y';
        this.fastlistbox();
        // this.queryClick();
        setTimeout(function () {
            _this.tableData = [];
        });
    };
    //码值
    CustomListAnalyComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CustomListAnalyComponent.prototype.openOrg = function (param) {
        this.orgTreeDisplay = true;
        // this.ownerOrgInValue = 'noShow'
    };
    CustomListAnalyComponent.prototype.onHideClose = function () {
        this.personPage = false;
        this.orgTreeDisplay = false;
    };
    CustomListAnalyComponent.prototype.treeCall = function (param) {
        this.orgTreeDisplay = false;
        this.AnayBean.registerOrgName = param.orgName;
        this.AnayBean.registerOrg = param.orgId;
    };
    CustomListAnalyComponent.prototype.fastlistbox = function () {
        var _this = this;
        this.nextlistbz = [{ label: "请选择", value: "" }];
        this.nextlistbzs = [{ label: "请选择", value: "" }];
        var pams = {
            listTypeHierarchy: 1,
        };
        this.cusOperationHttpService.selectBlackListType(pams).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.returnList.forEach(function (item) {
                    _this.fastlistbz.push({ label: item.listTypeName, value: item.listTypeId });
                });
            }
        });
    };
    //nextlistbox 二级名单下拉框
    CustomListAnalyComponent.prototype.nextlistbox = function (e) {
        var _this = this;
        this.AnayBean.listTypeTwo = null;
        this.AnayBean.listTypeId = null;
        this.nextlistbz = [{ label: "请选择", value: "" }];
        this.nextlistbzs = [{ label: "请选择", value: "" }];
        var pams = {
            parentListTypeId: e.value,
            listTypeHierarchy: 2,
        };
        this.cusOperationHttpService.selectBlackListType(pams).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.returnList.forEach(function (item) {
                    _this.nextlistbz.push({ label: item.listTypeName, value: item.listTypeId });
                });
            }
        });
    };
    //nextlistboxs 三级级名单下拉框
    CustomListAnalyComponent.prototype.nextlistboxs = function (t) {
        var _this = this;
        this.AnayBean.listTypeId = null;
        this.nextlistbzs = [{ label: "请选择", value: "" }];
        var pams = {
            parentListTypeId: t.value,
            listTypeHierarchy: 3,
        };
        this.cusOperationHttpService.selectBlackListType(pams).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.returnList.forEach(function (item) {
                    _this.nextlistbzs.push({ label: item.listTypeName, value: item.listTypeId });
                });
            }
        });
    };
    //查询
    CustomListAnalyComponent.prototype.queryClick = function () {
        var _this = this;
        this.loadingShow.flag = true;
        //查询时间
        this.AnayBean.pageSize = this.pageSize;
        this.AnayBean.pageNum = this.pageNum;
        this.AnayBean.operationType = '1008';
        this.AnayBean.registerUserName = this.chName.userName;
        this.AnayBean.registerTimeStart = null;
        this.AnayBean.registerTimeEnd = null;
        if (this.queryStartDate) {
            this.AnayBean.registerTimeStart = this.commfunc.transDateN(this.queryStartDate);
        }
        if (this.queryStartDate) {
            this.AnayBean.registerTimeEnd = this.commfunc.transDateN(this.queryEndDate);
        }
        if (!this.queryEndDate) { //如果没有输入最后录入时间 默认最后日期为当前
            this.AnayBean.registerTimeEnd = this.commfunc.transDateN(this.dateTime);
        }
        this.cusOperationHttpService.selectBlackListInfoAnalysis(this.AnayBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.totalDaySum = data.totalDaySum;
                _this.totalMonthSum = data.totalMonthSum;
                _this.totalSum = data.totalSum;
                _this.total = data.total;
                _this.tableData = data.returnList;
                _this.loadingShow.flag = false;
                _this.msgs = [];
                //  this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.loadingShow.flag = false;
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.loadingShow.flag = false;
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //分页
    CustomListAnalyComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.first = event.page * event.rows;
        //调用查询的方法
        this.queryClick();
    };
    //重置
    CustomListAnalyComponent.prototype.resetClick = function () {
        this.queryStartDate = null;
        this.queryEndDate = null;
        this.dateTime = new Date();
        this.pageSize = 10;
        this.pageNum = 1;
        this.AnayBean = new _bean_custom_list_analy_bean__WEBPACK_IMPORTED_MODULE_7__["AnayBean"]();
        this.AnayBean.statusId = '';
        this.fastlistbz = [{ label: "请选择", value: "" }];
        this.nextlistbz = [{ label: "请选择", value: "" }];
        this.nextlistbzs = [{ label: "请选择", value: "" }];
        this.fastlistbox();
        //调用查询的方法
        this.queryClick();
    };
    // 选择主联系人
    CustomListAnalyComponent.prototype.openPeople = function () {
        this.userDisplay = true;
    };
    CustomListAnalyComponent.prototype.workerCall = function (e) {
        this.userDisplay = false;
        this.AnayBean.mainUserName = e[0].tellerName;
        this.AnayBean.mainUser = e[0].tellerId;
    };
    // 文件下崽
    CustomListAnalyComponent.prototype.downlon = function () {
        var _this = this;
        this.AnayBean.operationType = '1009';
        this.AnayBean.registerUserName = this.chName.userName;
        this.AnayBean.registerTimeStart = null;
        this.AnayBean.registerTimeEnd = null;
        this.AnayBean.pageSize = null;
        this.AnayBean.pageNum = null;
        if (this.queryStartDate) {
            this.AnayBean.registerTimeStart = this.commfunc.transDateN(this.queryStartDate);
        }
        if (this.queryEndDate) {
            this.AnayBean.registerTimeEnd = this.commfunc.transDateN(this.queryEndDate);
        }
        if (!this.queryEndDate) { //如果没有输入最后录入时间 默认最后日期为当前
            this.AnayBean.registerTimeEnd = this.commfunc.transDateN(this.newdateTime);
        }
        this.cusOperationHttpService.selectDownListAnalysis(this.AnayBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.fileName = data.fileName;
                _this.fileUrl = data.fileUrl;
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                // this.headerTitle = "下载提示";
                // this.confirmationService.confirm({
                //   message: "是否下载统计分析文件？",
                //   accept: () => {
                //     if (this.fileName) {
                //       open(TZB_CUS_DOWNLOAD + "?fileName=" + encodeURI(this.fileName) + "&fileUrl=" + this.fileUrl, '_blank');
                //     } else {
                //       this.msgs = [];
                //       this.msgs.push({ severity: 'error', summary: '提示', detail: '所要下载文件不存在' });
                //     }
                //   },
                //   reject: () => { }
                // });
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
    CustomListAnalyComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomListAnalyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-list-analy',
            template: __webpack_require__(/*! ./custom-list-analy.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-analy/custom-list-analy.component.html"),
            styles: [__webpack_require__(/*! ./custom-list-analy.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-analy/custom-list-analy.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_6__["CusListManageHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomListAnalyComponent);
    return CustomListAnalyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-log/bean/custom-list-log.bean.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-list-log/bean/custom-list-log.bean.ts ***!
  \**************************************************************************************************/
/*! exports provided: LogBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogBean", function() { return LogBean; });
var LogBean = /** @class */ (function () {
    function LogBean() {
    }
    return LogBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-log/custom-list-log.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-list-log/custom-list-log.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 order-query bg\">\r\n  <!-- 查询条件 -->\r\n  <div class=\"ui-g-12 query-criteria\">\r\n    <div class=\"ui-g-6\">\r\n      <div class=\"ui-g-12\">\r\n        <label style=\"width:130px;\">操作日期：</label>\r\n        <p-calendar [(ngModel)]=\"queryStartDate\" [maxDate]=\"newdateTime\" [showButtonBar]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n          yearRange=\"1900:2200\" [showOtherMonths]=\"false\" [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\"\r\n          [style]=\"{'width':'24%'}\" name=\"queryStartDate\"></p-calendar>\r\n        —\r\n        <p-calendar [(ngModel)]=\"queryEndDate\" [minDate]=\"queryStartDate\" [maxDate]=\"newdateTime\" [showButtonBar]=\"true\" [monthNavigator]=\"true\"\r\n          [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showOtherMonths]=\"false\" [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\"\r\n          [locale]=\"ch\" [style]=\"{'width':'24%'}\" name=\"queryEndDate\"></p-calendar>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <div class=\"cont30 textAligin\">\r\n        操作员号：\r\n      </div>\r\n      <div class=\"cont60\">\r\n        <input type=\"text\" disabled pInputText name=\"registerUser\" style=\"width:85%;\" [(ngModel)]=\"LogBean.registerUser\">\r\n      </div>\r\n      <div class=\"ui_re\">\r\n        <div class=\"clickspan\" (click)=\"chooseWorker()\">\r\n          <a class=\"a-hand\">\r\n            <span>...</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 query-criteria\">\r\n    <div class=\"ui-g-6\">\r\n      <label style=\"width:130px;\">操作员姓名：</label>\r\n      <input type=\"text\" pInputText disabled name=\"registerUserName\" style=\"width:54%;\" [(ngModel)]=\"LogBean.registerUserName\">\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label style=\"width:130px !important;\">操作类型：</label>\r\n      <p-dropdown [options]=\"operationTypes\" [(ngModel)]=\"LogBean.operationType\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"查询\" class=\"queryBtn\" (click)=\"queryClick()\"></button>\r\n    <button pButton type=\"button\" label=\"重置\" class=\"resetBtn\" (click)=\"resetClick()\"></button>\r\n  </div>\r\n  <!--表格-->\r\n  <div class=\"ui-g-12 juery-result\">\r\n    <div class=\"table base-table\">\r\n      <p-dataTable emptyMessage=\"没有查找到数据\" [(value)]=\"tableData\" [scrollable]=\"true\" [style]=\"{'text-align':'center'}\" scrollHeight=\"350px\">\r\n        <p-column field=\"number\" header='序号' [style]=\"{'width':'60px'}\">\r\n          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <span>{{ri+1}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"registerTime\" header='操作日期' [style]=\"{'width':'100px'}\"></p-column>\r\n        <p-column field=\"executeTime\" header='操作时间' [style]=\"{'width':'100px'}\"></p-column>\r\n        <p-column field=\"registerUser\" header='操作员' [style]=\"{'width':'100px'}\"></p-column>\r\n        <p-column field=\"registerUserName\" header='操作员姓名' [style]=\"{'width':'120px'}\"></p-column>\r\n        <p-column field=\"operationType\" header='操作类型' [style]=\"{'width':'100px'}\">\r\n          <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{col['operationType']|codeValuePie:operationTypes}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"registerOrg\" header='操作对象' [style]=\"{'width':'250px'}\">\r\n          <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            <span *ngIf=\"col.operationType!=='1007'&&col.operationType!=='1008'&&col.operationType!=='1009'&&col.operationType!=='1010'\">{{col['logResult']}}</span>\r\n            <span *ngIf=\"col.operationType=='1007'||col.operationType=='1008'||col.operationType=='1009'||col.operationType=='1010'\">{{col['logQuery']}}</span>\r\n            <!-- <span >{{col['logResult']}}</span> -->\r\n          </ng-template>\r\n        </p-column>\r\n      </p-dataTable>\r\n    </div>\r\n    <p-paginator first={{first}} rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[5,10,20,30]\"\r\n      (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    <div class=\"ui-g-12\">\r\n      <button pButton type=\"button\" label=\"下载\" class=\"queryBtn\" (click)=\"downlon()\"></button>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<p-dialog *ngIf=\"personPage\" [(visible)]=\"personPage\" modal=\"modal\" (onHide)=\"onHideClose()\" class=\"contact-track-f\">\r\n  <p-header>员工列表</p-header>\r\n  <app-query-user-list *ngIf=\"personPage\" [in-value]=\"userInValue\" (outValue)=\"perInfor($event)\"></app-query-user-list>\r\n</p-dialog>\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<p-confirmDialog header=\"{{headerTitle}}\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n  <p-footer>\r\n    <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n    <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n  </p-footer>\r\n</p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-log/custom-list-log.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-list-log/custom-list-log.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.order-query {\n  margin-top: 10px;\n  padding: 0;\n  padding-bottom: 50px; }\n.order-query .query-criteria {\n    padding: 0 30px; }\n.order-query .query-criteria label {\n      display: inline-block;\n      width: 150px;\n      text-align: right; }\n.order-query /deep/ .ui-g-12 {\n    padding: 0px !important; }\n.order-query /deep/ .ui-g-12 .ui-g-6 {\n      width: 30%;\n      margin-left: 13%; }\n@media screen and (max-width: 1550px) {\n    .order-query .ui-g-6 {\n      width: 42%;\n      margin-left: 8%; }\n    .order-query .query-criteria {\n      padding: 0 30px; }\n      .order-query .query-criteria label {\n        display: inline-block;\n        width: 120px !important;\n        text-align: right; } }\n.order-query .btn {\n    text-align: center; }\n.order-query .btn .queryBtn,\n    .order-query .btn .resetBtn {\n      width: 100px;\n      margin: 30px; }\n.order-query .juery-result {\n    padding: 0 30px;\n    height: 400px; }\n.order-query .juery-result .addBtn {\n      width: 100px;\n      margin-top: 15px; }\n.order-query .juery-result .table {\n      border: 1px solid #bdbdbd;\n      text-align: center;\n      margin: 15px 0; }\n.order-query .juery-result .table .modify {\n        margin-right: 20px; }\n.bg {\n  background: #fdfdfd; }\n:host/deep/ .order-query .query-criteria .ui-dropdown {\n  width: 50% !important; }\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n/*\r\n*日历组件的样式修改开始\r\n*/\n:host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important; }\n:host/deep/ .ui-datepicker select.ui-datepicker-month {\n  width: 40%;\n  font-size: 16px !important; }\n:host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n:host/deep/ #dro .ui-dropdown {\n  width: 24% !important; }\n/*\r\n*日历组件的样式修改结束\r\n*/\n.requireLabel {\n  margin-left: 150px; }\n.clickspan {\n  width: 40px;\n  height: 23px;\n  cursor: pointer;\n  position: absolute;\n  margin-left: -42px; }\n.ui_re {\n  width: 0px;\n  height: 0px;\n  float: left;\n  position: relative; }\n.clickspan {\n  width: 40px;\n  height: 23px;\n  cursor: pointer;\n  position: absolute;\n  margin-left: -42px; }\n.cont60 {\n  float: left;\n  width: 51%;\n  height: 25px; }\n.cont30 {\n  float: left;\n  width: 130px;\n  height: 25px;\n  line-height: 25px;\n  font-size: 14px; }\n.textAligin {\n  text-align: right;\n  line-height: 25px; }\n.a_btn {\n  width: 75px;\n  display: block;\n  overflow: hidden;\n  background: #19b0c8;\n  background: linear-gradient(#19b0c8, #19b0c8);\n  border-radius: 3px;\n  border: 1px solid #0f6eac;\n  color: #FFFFFF;\n  font-size: 14px;\n  height: 1.9em;\n  padding: 0 1.5em;\n  line-height: 2.0em;\n  border: 0 none;\n  height: 28.5px;\n  margin-right: 5px;\n  text-align: center;\n  float: left; }\n:host /deep/ .contact-track-f .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n:host/deep/ .contact-track-f .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLWxpc3QtbG9nL2N1c3RvbS1saXN0LWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLWxpc3QtbG9nL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWxpc3QtbWFuYWdlXFxjdXN0b20tbGlzdC1sb2dcXGN1c3RvbS1saXN0LWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG9CQUFvQixFQUFBO0FBSHRCO0lBS00sZUFBZSxFQUFBO0FBTHJCO01BT1UscUJBQXFCO01BQ3JCLFlBQVk7TUFDWixpQkFBaUIsRUFBQTtBQVQzQjtJQWVJLHVCQUF1QixFQUFBO0FBZjNCO01BaUJRLFVBQVM7TUFDVCxnQkFBZ0IsRUFBQTtBQUl0QjtJQXRCRjtNQXdCUSxVQUFTO01BQ1QsZUFBZSxFQUFBO0lBekJ2QjtNQTRCUSxlQUFlLEVBQUE7TUE1QnZCO1FBOEJZLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsaUJBQWlCLEVBQUEsRUFDcEI7QUFqQ1Q7SUFxQ00sa0JBQWtCLEVBQUE7QUFyQ3hCOztNQXdDVSxZQUFZO01BQ1osWUFBWSxFQUFBO0FBekN0QjtJQThDTSxlQUFlO0lBRWYsYUFBWSxFQUFBO0FBaERsQjtNQWtEVSxZQUFZO01BQ1osZ0JBQWdCLEVBQUE7QUFuRDFCO01Bc0RVLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsY0FBYyxFQUFBO0FBeER4QjtRQTBEYyxrQkFBa0IsRUFBQTtBQUtoQztFQUNJLG1CQUFtQixFQUFBO0FBRXZCO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxxQkFBcUIsRUFBQTtBQUV2Qjs7Q0RsQkM7QUNzQkQ7RUFDRSxVQUFTO0VBQ1QsMEJBQTBCLEVBQUE7QUFHNUI7RUFDQyxVQUFTO0VBQ1QsMEJBQTBCLEVBQUE7QUFHM0I7RUFDQyxjQUFhLEVBQUE7QUFFZDtFQUNJLHFCQUFxQixFQUFBO0FBRXpCOztDRHJCQztBQ3lCRDtFQUNFLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0FBRXRCO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7QUFFdEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFFdEI7RUFDSSxXQUFXO0VBQ1gsVUFBUztFQUNULFlBQVksRUFBQTtBQUVoQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7QUFFbkI7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUFFckI7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsY0FBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0FBRWY7RUFDSSx1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7QUFFMUI7RUFDSSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWxpc3QtbWFuYWdlL2N1c3RvbS1saXN0LWxvZy9jdXN0b20tbGlzdC1sb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ub3JkZXItcXVlcnkge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDsgfVxuICAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIHtcbiAgICBwYWRkaW5nOiAwIDMwcHg7IH1cbiAgICAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gIC5vcmRlci1xdWVyeSAvZGVlcC8gLnVpLWctMTIge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50OyB9XG4gICAgLm9yZGVyLXF1ZXJ5IC9kZWVwLyAudWktZy0xMiAudWktZy02IHtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgICBtYXJnaW4tbGVmdDogMTMlOyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NTBweCkge1xuICAgIC5vcmRlci1xdWVyeSAudWktZy02IHtcbiAgICAgIHdpZHRoOiA0MiU7XG4gICAgICBtYXJnaW4tbGVmdDogOCU7IH1cbiAgICAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIHtcbiAgICAgIHBhZGRpbmc6IDAgMzBweDsgfVxuICAgICAgLm9yZGVyLXF1ZXJ5IC5xdWVyeS1jcml0ZXJpYSBsYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9IH1cbiAgLm9yZGVyLXF1ZXJ5IC5idG4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgIC5vcmRlci1xdWVyeSAuYnRuIC5xdWVyeUJ0bixcbiAgICAub3JkZXItcXVlcnkgLmJ0biAucmVzZXRCdG4ge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgbWFyZ2luOiAzMHB4OyB9XG4gIC5vcmRlci1xdWVyeSAuanVlcnktcmVzdWx0IHtcbiAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDsgfVxuICAgIC5vcmRlci1xdWVyeSAuanVlcnktcmVzdWx0IC5hZGRCdG4ge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTVweDsgfVxuICAgIC5vcmRlci1xdWVyeSAuanVlcnktcmVzdWx0IC50YWJsZSB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAxNXB4IDA7IH1cbiAgICAgIC5vcmRlci1xdWVyeSAuanVlcnktcmVzdWx0IC50YWJsZSAubW9kaWZ5IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XG5cbi5iZyB7XG4gIGJhY2tncm91bmQ6ICNmZGZkZmQ7IH1cblxuOmhvc3QvZGVlcC8gLm9yZGVyLXF1ZXJ5IC5xdWVyeS1jcml0ZXJpYSAudWktZHJvcGRvd24ge1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDsgfVxuXG4vKlxyXG4q5pel5Y6G57uE5Lu255qE5qC35byP5L+u5pS55byA5aeLXHJcbiovXG46aG9zdC9kZWVwLyAudWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci15ZWFyIHtcbiAgd2lkdGg6IDUwJTtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXItbW9udGgge1xuICB3aWR0aDogNDAlO1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDsgfVxuXG46aG9zdC9kZWVwLyAudWktYnV0dG9uLnVpLWJ1dHRvbi1zZWNvbmRhcnkudWktc3RhdGUtZGVmYXVsdCB7XG4gIGNvbG9yOiAjZmZmZmZmOyB9XG5cbjpob3N0L2RlZXAvICNkcm8gLnVpLWRyb3Bkb3duIHtcbiAgd2lkdGg6IDI0JSAhaW1wb3J0YW50OyB9XG5cbi8qXHJcbirml6Xljobnu4Tku7bnmoTmoLflvI/kv67mlLnnu5PmnZ9cclxuKi9cbi5yZXF1aXJlTGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTUwcHg7IH1cblxuLmNsaWNrc3BhbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDIzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLTQycHg7IH1cblxuLnVpX3JlIHtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLmNsaWNrc3BhbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDIzcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLTQycHg7IH1cblxuLmNvbnQ2MCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTElO1xuICBoZWlnaHQ6IDI1cHg7IH1cblxuLmNvbnQzMCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4udGV4dEFsaWdpbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMjVweDsgfVxuXG4uYV9idG4ge1xuICB3aWR0aDogNzVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICMxOWIwYzg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMTliMGM4LCAjMTliMGM4KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGY2ZWFjO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDEuOWVtO1xuICBwYWRkaW5nOiAwIDEuNWVtO1xuICBsaW5lLWhlaWdodDogMi4wZW07XG4gIGJvcmRlcjogMCBub25lO1xuICBoZWlnaHQ6IDI4LjVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7IH1cblxuOmhvc3QgL2RlZXAvIC5jb250YWN0LXRyYWNrLWYgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xuICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDsgfVxuXG46aG9zdC9kZWVwLyAuY29udGFjdC10cmFjay1mIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcbiAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDsgfVxuIiwiLy/orqLljZXmn6Xor6JcclxuLm9yZGVyLXF1ZXJ5IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7IC8v5p+l6K+i5p2h5Lu2XHJcbiAgLnF1ZXJ5LWNyaXRlcmlhIHtcclxuICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgL2RlZXAvIC51aS1nLTEye1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAudWktZy02e1xyXG4gICAgICAgIHdpZHRoOjMwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTMlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOjE1NTBweCkge1xyXG4gICAgLnVpLWctNntcclxuICAgICAgICB3aWR0aDo0MiU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gICAgfVxyXG4gICAgLnF1ZXJ5LWNyaXRlcmlhIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC5xdWVyeUJ0bixcclxuICAgICAgLnJlc2V0QnRuIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICB9IC8v5p+l6K+i57uT5p6cXHJcbiAgLmp1ZXJ5LXJlc3VsdCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgXHJcbiAgICAgIGhlaWdodDo0MDBweDtcclxuICAgICAgLmFkZEJ0biB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50YWJsZSB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgICAubW9kaWZ5IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuLmJne1xyXG4gICAgYmFja2dyb3VuZDogI2ZkZmRmZDtcclxufVxyXG46aG9zdC9kZWVwLyAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIC51aS1kcm9wZG93bntcclxuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLy/ooajmoLzlrZfmr43jgIHmlbDlrZfoh6rliqjmjaLooYxcclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YXtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuLypcclxuKuaXpeWOhue7hOS7tueahOagt+W8j+S/ruaUueW8gOWni1xyXG4qL1xyXG4vL+mAieaLqeW5tOS7vVxyXG46aG9zdC9kZWVwLyAudWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci15ZWFye1xyXG4gIHdpZHRoOjUwJTtcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG4vL+mAieaLqeaciOS7vVxyXG46aG9zdC9kZWVwLyAudWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci1tb250aHtcclxuIHdpZHRoOjQwJTtcclxuIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcbi8v5riF56m644CB5LuK5aSp5Lik5Liq5oyJ6ZKu55qE5a2X5L2T6aKc6ImyXHJcbjpob3N0L2RlZXAvIC51aS1idXR0b24udWktYnV0dG9uLXNlY29uZGFyeS51aS1zdGF0ZS1kZWZhdWx0e1xyXG4gY29sb3I6I2ZmZmZmZjtcclxufVxyXG46aG9zdC9kZWVwLyAjZHJvIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMjQlICFpbXBvcnRhbnQ7XHJcbn1cclxuLypcclxuKuaXpeWOhue7hOS7tueahOagt+W8j+S/ruaUuee7k+adn1xyXG4qL1xyXG5cclxuLnJlcXVpcmVMYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG59XHJcbi5jbGlja3NwYW4ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTQycHg7XHJcbn1cclxuLnVpX3JlIHtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jbGlja3NwYW4ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTQycHg7XHJcbn1cclxuLmNvbnQ2MCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOjUxJTtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG4uY29udDMwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnRleHRBbGlnaW4ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxufVxyXG4uYV9idG57XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6ICMxOWIwYzg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzE5YjBjOCwgIzE5YjBjOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGY2ZWFjO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDEuOWVtO1xyXG4gICAgcGFkZGluZzogMCAxLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjBlbTtcclxuICAgIGJvcmRlcjogMCBub25lO1xyXG4gICAgaGVpZ2h0OjI4LjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG46aG9zdCAvZGVlcC8gLmNvbnRhY3QtdHJhY2stZiAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLmNvbnRhY3QtdHJhY2stZiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-log/custom-list-log.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-list-log/custom-list-log.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CustomListLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomListLogComponent", function() { return CustomListLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var _bean_custom_list_log_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bean/custom-list-log.bean */ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-log/bean/custom-list-log.bean.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CustomListLogComponent = /** @class */ (function () {
    function CustomListLogComponent(cusOperationHttpService, confirmationService, commfunc, fb, router) {
        this.cusOperationHttpService = cusOperationHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.router = router;
        //表数据
        this.tableData = [];
        this.operationTypes = [
            { value: "", label: "请选择" },
            { value: "1001", label: "名单入库" },
            { value: "1002", label: "名单批量入库" },
            { value: "1003", label: "名单出库" },
            { value: "1004", label: "名单批量出库" },
            { value: "1005", label: "名单等级调整" },
            { value: "1006", label: "名单失效" },
            { value: "1007", label: "名单查询" },
            { value: "1008", label: "名单分析" },
            { value: "1009", label: "名单分析下载" },
            { value: "1010", label: "名单查询日志下载" },
        ];
        this.LogBean = new _bean_custom_list_log_bean__WEBPACK_IMPORTED_MODULE_7__["LogBean"]();
        this.first = 0;
        //提示信息
        this.msgs = [];
        //日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_CN"]; //讲英文转化为中文
        this.dataDate = new Date();
        this.display3 = false;
        this.personPage = false;
        this.queryStartDate = null;
        this.queryEndDate = null;
        this.pageSize = 10;
        this.pageNumber = 1;
        this.newdateTime = new Date();
        this.downkey = false;
        this.codeValues(); //调用方法，获取全部码值
    }
    CustomListLogComponent.prototype.ngOnInit = function () {
        this.pageSize = 10;
        this.pageNum = 1;
        this.first = 1;
        //this.queryClick();
    };
    //码值
    CustomListLogComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CustomListLogComponent.prototype.downlon = function () {
        var _this = this;
        this.downkey = true;
        this.LogBean.registerTimeStart = null;
        this.LogBean.registerTimeEnd = null;
        if (this.queryStartDate) {
            this.LogBean.registerTimeStart = this.commfunc.transDateN(this.queryStartDate);
        }
        if (this.queryEndDate) {
            this.LogBean.registerTimeEnd = this.commfunc.transDateN(this.queryEndDate);
        }
        if (!this.queryEndDate) { //如果没有输入最后录入时间 默认最后日期为当前
            this.LogBean.registerTimeEnd = this.commfunc.transDateN(this.dataDate);
        }
        this.cusOperationHttpService.selectDownListQueryLog(this.LogBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.fileName = data.fileName;
                _this.fileUrl = data.fileUrl;
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                // this.config()
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
    CustomListLogComponent.prototype.config = function () {
        var _this = this;
        this.headerTitle = "下载提示";
        this.confirmationService.confirm({
            message: "是否下载操作日志？",
            accept: function () {
                if (_this.fileName) {
                    open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(_this.fileName) + "&fileUrl=" + _this.fileUrl, '_blank');
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '所要下载文件不存在' });
                }
            },
            reject: function () { }
        });
    };
    //查询
    CustomListLogComponent.prototype.queryClick = function () {
        var _this = this;
        //查询时间
        this.LogBean.pageSize = this.pageSize;
        this.LogBean.pageNum = this.pageNum;
        this.LogBean.registerTimeStart = null;
        this.LogBean.registerTimeEnd = null;
        if (this.queryStartDate) {
            this.LogBean.registerTimeStart = this.commfunc.transDateN(this.queryStartDate);
        }
        if (this.queryEndDate) {
            this.LogBean.registerTimeEnd = this.commfunc.transDateN(this.queryEndDate);
        }
        if (!this.queryEndDate) { //如果没有输入最后录入时间 默认最后日期为当前
            this.LogBean.registerTimeEnd = this.commfunc.transDateN(this.dataDate);
        }
        this.cusOperationHttpService.selectListQueryLog(this.LogBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.returnList;
                _this.total = data.total;
                _this.msgs = [];
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
    CustomListLogComponent.prototype.chooseWorker = function () {
        this.userInValue = '0000';
        this.personPage = !this.personPage;
    };
    CustomListLogComponent.prototype.perInfor = function (item) {
        this.personPage = false;
        if (item.length > 0) {
            this.LogBean.registerUser = item[0].tellerId;
            this.LogBean.registerUserName = item[0].tellerName;
        }
    };
    //关闭模态框
    CustomListLogComponent.prototype.onHideClose = function () {
        this.personPage = false;
    };
    //分页
    CustomListLogComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.first = event.page * event.rows;
        //调用查询的方法
        this.queryClick();
    };
    //重置
    CustomListLogComponent.prototype.resetClick = function () {
        this.queryStartDate = null;
        this.queryEndDate = null;
        this.pageSize = 10;
        this.pageNum = 1;
        this.LogBean = new _bean_custom_list_log_bean__WEBPACK_IMPORTED_MODULE_7__["LogBean"]();
    };
    CustomListLogComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomListLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-list-log',
            template: __webpack_require__(/*! ./custom-list-log.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-log/custom-list-log.component.html"),
            styles: [__webpack_require__(/*! ./custom-list-log.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-log/custom-list-log.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_6__["CusListManageHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomListLogComponent);
    return CustomListLogComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-manage.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-list-manage.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 functions\">\r\n        <a [routerLink]=\"['custom-black-list']\" class=\"change\" [ngClass]=\"{'active':show==1}\" (click)=\"allot(1)\"    *ngIf=\"permissionCheck('SID00053_P001_01')\">名单调整申请</a>\r\n        <a [routerLink]=\"['custom-mission-list']\" class=\"change\" [ngClass]=\"{'active':show==2}\" (click)=\"allot(2)\"  *ngIf=\"permissionCheck('SID00053_P001_02')\">名单调整历史</a>\r\n        <a [routerLink]=\"['custom-style-manage']\" class=\"change\" [ngClass]=\"{'active':show==3}\" (click)=\"allot(3)\"  *ngIf=\"permissionCheck('SID00053_P001_03')\">名单类型维护</a>\r\n        <a [routerLink]=\"['custom-list-analy']\" class=\"change\" [ngClass]=\"{'active':show==4}\" (click)=\"allot(4)\"  *ngIf=\"permissionCheck('SID00053_P001_04')\">名单统计分析</a>\r\n        <a [routerLink]=\"['custom-list-log']\" class=\"change\" [ngClass]=\"{'active':show==5}\" (click)=\"allot(5)\"    *ngIf=\"permissionCheck('SID00053_P001_05')\" >名单操作日志</a>\r\n        <a [routerLink]=\"['custom-manage']\" class=\"change\" [ngClass]=\"{'active':show==6}\" (click)=\"allot(6)\" *ngIf=\"permissionCheck('SID00053_P001_06')\">名单后台维护</a>\r\n    </div>\r\n    <div class=\"ui-g-12 module padding-one bgcolor\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-manage.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-list-manage.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0; }\n  .functions .change {\n    display: inline-block;\n    font-size: 15px;\n    height: 40px;\n    line-height: 40px;\n    border-radius: 3px 3px 0 0;\n    color: #929292;\n    padding: 0px 30px;\n    font-weight: bold; }\n  .active {\n  border: none !important;\n  background-color: #f7f7f7 !important;\n  color: #003f5c !important; }\n  .padding-one {\n  padding: 1em; }\n  .bgcolor {\n  background: #f7f7f7; }\n  @media screen and (max-width: 1280px) {\n  .functions {\n    border-bottom: 1px solid #dddddd; }\n  .active {\n    background-color: #e5e6e9 !important; }\n  .bgcolor {\n    background: #e5e6e9; } }\n  :host/deep/.ui-dialog-mask {\n  z-index: 2222 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tbGlzdC1tYW5hZ2VcXGN1c3RvbS1saXN0LW1hbmFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZUFBZSxFQUFBO0VBSG5CO0lBS1EscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBO0VBR3pCO0VBQ0ksdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyx5QkFBeUIsRUFBQTtFQUU3QjtFQUNJLFlBQVksRUFBQTtFQUVoQjtFQUNJLG1CQUFtQixFQUFBO0VBRXZCO0VBQ0k7SUFDSSxnQ0FBZ0MsRUFBQTtFQUVwQztJQUNJLG9DQUFvQyxFQUFBO0VBRXhDO0lBQ0ksbUJBQW1CLEVBQUEsRUFDdEI7RUFFTDtFQUNJLHdCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLWxpc3QtbWFuYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bmN0aW9ucyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlZjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgLmNoYW5nZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XHJcbiAgICAgICAgY29sb3I6ICM5MjkyOTI7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuLmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3ZjcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAzZjVjICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBhZGRpbmctb25lIHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG4uYmdjb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAuZnVuY3Rpb25zIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU2ZTkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5iZ2NvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTVlNmU5O1xyXG4gICAgfVxyXG59XHJcbjpob3N0L2RlZXAvLnVpLWRpYWxvZy1tYXNrIHtcclxuICAgIHotaW5kZXg6IDIyMjIhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-manage.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-list-manage.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomListManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomListManageComponent", function() { return CustomListManageComponent; });
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



var CustomListManageComponent = /** @class */ (function () {
    function CustomListManageComponent(commfunc, router) {
        this.commfunc = commfunc;
        this.router = router;
        this.show = 1;
    }
    CustomListManageComponent.prototype.ngOnInit = function () {
        var stu_1 = 1; // 名单调整申请
        var stu_2 = 2; // 名单调整历史
        var stu_3 = 3; // 名单类型维护
        var stu_4 = 4; // 名单统计分析
        var stu_5 = 5; // 名单操作日志
        var stu_6 = this.commfunc.permissionCheck('SID00053_P001_P001'); // 超管
        if (stu_1) {
            this.show = 1;
            this.router.navigate(['/pages/tzb/custom/custom-list-manage/custom-black-list']);
        }
        else if (stu_2) {
            this.show = 2;
            this.router.navigate(['/pages/tzb/custom/custom-list-manage/custom-mission-list']);
        }
        else if (stu_3) {
            this.show = 3;
            this.router.navigate(['/pages/tzb/custom/custom-list-manage/custom-style-manage']);
        }
        else if (stu_4) {
            this.show = 4;
            this.router.navigate(['/pages/tzb/custom/custom-list-manage/custom-list-analy']);
        }
        else if (stu_5) {
            this.show = 5;
            this.router.navigate(['/pages/tzb/custom/custom-list-manage/custom-list-log']);
        }
        else if (stu_6) {
            this.show = 6;
            this.router.navigate(['/pages/tzb/custom/custom-list-manage/custom-manage']);
        }
    };
    CustomListManageComponent.prototype.ngOnChanges = function () {
    };
    // 切换标签
    CustomListManageComponent.prototype.allot = function (num) {
        this.show = num;
    };
    //按钮权限
    CustomListManageComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomListManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-list-manage',
            template: __webpack_require__(/*! ./custom-list-manage.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-manage.component.html"),
            styles: [__webpack_require__(/*! ./custom-list-manage.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-manage.component.scss")]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomListManageComponent);
    return CustomListManageComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-manage.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-list-manage.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomListManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomListManageModule", function() { return CustomListManageModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _custom_list_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-list-manage.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-manage.component.ts");
/* harmony import */ var _custom_list_manage_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-list-manage.routing */ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-manage.routing.ts");
/* harmony import */ var _http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var _custom_list_analy_custom_list_analy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-list-analy/custom-list-analy.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-analy/custom-list-analy.component.ts");
/* harmony import */ var _custom_list_log_custom_list_log_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-list-log/custom-list-log.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-log/custom-list-log.component.ts");
/* harmony import */ var _custom_style_manage_custom_style_manage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-style-manage/custom-style-manage.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-style-manage.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service.ts");
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/common/service/http.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/service/http.service.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_black_list_custom_black_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-list.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-list.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_black_list_custom_black_add_custom_black_add_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-add/custom-black-add.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-add/custom-black-add.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_black_list_custom_black_batch_custom_black_batch_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-batch/custom-black-batch.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-batch/custom-black-batch.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_black_list_custom_black_detail_custom_black_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-detail/custom-black-detail.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-detail/custom-black-detail.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_black_list_custom_black_update_custom_black_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-update/custom-black-update.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-update/custom-black-update.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_mission_list_custom_mission_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-list.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-list.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_mission_list_custom_mission_detail_custom_mission_detail_componetn__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-detail/custom-mission-detail.componetn */ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-detail/custom-mission-detail.componetn.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_mission_list_custom_mission_update_custom_mission_update_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-update/custom-mission-update.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-update/custom-mission-update.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_element_manage_custom_element_manage_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-element-manage/custom-element-manage.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-element-manage/custom-element-manage.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_manage_custom_manage_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_manage_custom_manage_add_custom_manage_add_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-add/custom-manage-add.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-add/custom-manage-add.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_manage_custom_manage_batch_custom_manage_batch_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-batch/custom-manage-batch.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-batch/custom-manage-batch.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_manage_custom_manage_detail_custom_manage_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-detail/custom-manage-detail.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-detail/custom-manage-detail.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_manage_custom_manage_update_custom_manage_update_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-update/custom-manage-update.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-update/custom-manage-update.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_style_manage_custom_add_modify_custom_add_modify_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-add-modify/custom-add-modify.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-add-modify/custom-add-modify.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var CustomListManageModule = /** @class */ (function () {
    function CustomListManageModule() {
    }
    CustomListManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _custom_list_manage_routing__WEBPACK_IMPORTED_MODULE_6__["CustomListManageRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"]
            ],
            declarations: [
                _custom_list_analy_custom_list_analy_component__WEBPACK_IMPORTED_MODULE_8__["CustomListAnalyComponent"],
                _custom_list_log_custom_list_log_component__WEBPACK_IMPORTED_MODULE_9__["CustomListLogComponent"],
                _custom_style_manage_custom_style_manage_component__WEBPACK_IMPORTED_MODULE_10__["CustomStyleManageComponent"],
                _custom_list_manage_component__WEBPACK_IMPORTED_MODULE_5__["CustomListManageComponent"],
                app_pages_tzb_custom_custom_list_manage_custom_black_list_custom_black_list_component__WEBPACK_IMPORTED_MODULE_17__["CustomBlackListComponent"],
                app_pages_tzb_custom_custom_list_manage_custom_black_list_custom_black_add_custom_black_add_component__WEBPACK_IMPORTED_MODULE_18__["CustomBlackAdd"],
                app_pages_tzb_custom_custom_list_manage_custom_black_list_custom_black_batch_custom_black_batch_component__WEBPACK_IMPORTED_MODULE_19__["CustomBlackBatch"],
                app_pages_tzb_custom_custom_list_manage_custom_black_list_custom_black_detail_custom_black_detail_component__WEBPACK_IMPORTED_MODULE_20__["CustomBlackDetail"],
                app_pages_tzb_custom_custom_list_manage_custom_black_list_custom_black_update_custom_black_update_component__WEBPACK_IMPORTED_MODULE_21__["CustomBlackUpdate"],
                app_pages_tzb_custom_custom_list_manage_custom_mission_list_custom_mission_list_component__WEBPACK_IMPORTED_MODULE_22__["CustomMissionListComponent"],
                app_pages_tzb_custom_custom_list_manage_custom_mission_list_custom_mission_detail_custom_mission_detail_componetn__WEBPACK_IMPORTED_MODULE_23__["CustomMissionDetail"],
                app_pages_tzb_custom_custom_list_manage_custom_mission_list_custom_mission_update_custom_mission_update_component__WEBPACK_IMPORTED_MODULE_24__["CustomMissionUpdate"],
                app_pages_tzb_custom_custom_list_manage_custom_element_manage_custom_element_manage_component__WEBPACK_IMPORTED_MODULE_25__["CustomElementManage"],
                app_pages_tzb_custom_custom_list_manage_custom_manage_custom_manage_component__WEBPACK_IMPORTED_MODULE_26__["customManage"],
                app_pages_tzb_custom_custom_list_manage_custom_manage_custom_manage_add_custom_manage_add_component__WEBPACK_IMPORTED_MODULE_27__["CustomManageAdd"],
                app_pages_tzb_custom_custom_list_manage_custom_manage_custom_manage_batch_custom_manage_batch_component__WEBPACK_IMPORTED_MODULE_28__["CustomManageBatch"],
                app_pages_tzb_custom_custom_list_manage_custom_manage_custom_manage_detail_custom_manage_detail_component__WEBPACK_IMPORTED_MODULE_29__["CustomManageDetail"],
                app_pages_tzb_custom_custom_list_manage_custom_manage_custom_manage_update_custom_manage_update_component__WEBPACK_IMPORTED_MODULE_30__["CustomManageUpdate"],
                app_pages_tzb_custom_custom_list_manage_custom_style_manage_custom_add_modify_custom_add_modify_component__WEBPACK_IMPORTED_MODULE_31__["CustomAddModify"] //风险等级修改新增
            ],
            providers: [
                _http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_7__["CusListManageHttpService"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_11__["ConfirmationService"],
                primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_12__["MessageService"],
                app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_13__["Customtools"],
                app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_14__["CreditCcmService"],
                app_pages_tzb_workflow_activiti_work_flow_process_instance_process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_15__["ProcessInstanceManagementService"],
                app_pages_tzb_workflow_activiti_work_flow_common_service_http_service__WEBPACK_IMPORTED_MODULE_16__["HttpService"],
            ],
            exports: [
                app_pages_tzb_custom_custom_list_manage_custom_black_list_custom_black_detail_custom_black_detail_component__WEBPACK_IMPORTED_MODULE_20__["CustomBlackDetail"],
            ]
        })
    ], CustomListManageModule);
    return CustomListManageModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-manage.routing.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-list-manage.routing.ts ***!
  \***********************************************************************************/
/*! exports provided: routes, CustomListManageRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomListManageRouting", function() { return CustomListManageRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_list_analy_custom_list_analy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-list-analy/custom-list-analy.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-analy/custom-list-analy.component.ts");
/* harmony import */ var _custom_list_log_custom_list_log_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-list-log/custom-list-log.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-log/custom-list-log.component.ts");
/* harmony import */ var _custom_style_manage_custom_style_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-style-manage/custom-style-manage.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-style-manage.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_list_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-list-manage.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-list-manage.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_black_list_custom_black_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-list.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-list.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_mission_list_custom_mission_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-list.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-list.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_element_manage_custom_element_manage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-element-manage/custom-element-manage.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-element-manage/custom-element-manage.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_manage_custom_manage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_black_list_custom_black_detail_custom_black_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-detail/custom-black-detail.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-black-list/custom-black-detail/custom-black-detail.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_list_manage_custom_mission_list_custom_mission_update_custom_mission_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-update/custom-mission-update.component */ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-update/custom-mission-update.component.ts");











var routes = [
    {
        path: '',
        component: app_pages_tzb_custom_custom_list_manage_custom_list_manage_component__WEBPACK_IMPORTED_MODULE_4__["CustomListManageComponent"],
        children: [
            { path: 'custom-black-list', component: app_pages_tzb_custom_custom_list_manage_custom_black_list_custom_black_list_component__WEBPACK_IMPORTED_MODULE_5__["CustomBlackListComponent"] },
            { path: 'custom-mission-list', component: app_pages_tzb_custom_custom_list_manage_custom_mission_list_custom_mission_list_component__WEBPACK_IMPORTED_MODULE_6__["CustomMissionListComponent"] },
            { path: 'custom-list-analy', component: _custom_list_analy_custom_list_analy_component__WEBPACK_IMPORTED_MODULE_1__["CustomListAnalyComponent"] },
            { path: 'custom-list-log', component: _custom_list_log_custom_list_log_component__WEBPACK_IMPORTED_MODULE_2__["CustomListLogComponent"] },
            { path: 'custom-style-manage', component: _custom_style_manage_custom_style_manage_component__WEBPACK_IMPORTED_MODULE_3__["CustomStyleManageComponent"] },
            { path: 'custom-manage', component: app_pages_tzb_custom_custom_list_manage_custom_manage_custom_manage_component__WEBPACK_IMPORTED_MODULE_8__["customManage"] },
            { path: 'CustomBlackDetail', component: app_pages_tzb_custom_custom_list_manage_custom_black_list_custom_black_detail_custom_black_detail_component__WEBPACK_IMPORTED_MODULE_9__["CustomBlackDetail"] },
        ]
    },
    { path: 'custom-element-manage', component: app_pages_tzb_custom_custom_list_manage_custom_element_manage_custom_element_manage_component__WEBPACK_IMPORTED_MODULE_7__["CustomElementManage"] },
    { path: 'CustomMissionUpdate', component: app_pages_tzb_custom_custom_list_manage_custom_mission_list_custom_mission_update_custom_mission_update_component__WEBPACK_IMPORTED_MODULE_10__["CustomMissionUpdate"] },
];
var CustomListManageRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-add/custom-manage-add.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-add/custom-manage-add.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-deal\">\r\n    <div class=\"ui-g-12\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>是否我行客户:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"isMybankCustList\" formControlName=\"isMybankCust\" (onChange)=\"isMybank()\"></p-dropdown>\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['isMybankCust'].valid&&userform.controls['isMybankCust'].dirty\">\r\n                            <span *ngIf=\"userform.controls['isMybankCust'].errors['required']\">请输入是否我行客户！</span>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"bankown\" class=\"ui-g-2 text-right\">\r\n                        <label appValidation>客户类别:</label>\r\n                    </div>\r\n                    <div *ngIf=\"bankown\" class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"customerTypeList\" (onChange)=\"iscustomer()\" formControlName=\"customerType\"></p-dropdown>\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['customerType'].valid&&userform.controls['customerType'].dirty\">\r\n                            <span *ngIf=\"userform.controls['customerType'].errors['required']\">请输入客户类别！</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bank\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>客户号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4 queryinputbtn\">\r\n                        <input class=\"queryinputOrg\" disabled pInputText formControlName=\"partyId\">\r\n                        <div (click)=\"perTreeShow()\" class=\"clickspan\">\r\n                            <a class=\"a-hand\">\r\n                                <span>...</span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label *ngIf=\"!cust\">客户名称:</label>\r\n                        <label *ngIf=\"cust\" appValidation>客户名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\">\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['custName'].valid&&userform.controls['custName'].dirty\">\r\n                            <span *ngIf=\"userform.controls['custName'].errors['required']\">请输入客户名称！</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label *ngIf=\"cust\">证件类型:</label>\r\n                        <label *ngIf=\"!cust\" appValidation>证件类型:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"idTypeList\" formControlName=\"idType\" (onChange)=\"idTypeChange($event)\"></p-dropdown>\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['idType'].valid&&userform.controls['idType'].dirty\">\r\n                            <span *ngIf=\"userform.controls['idType'].errors['required']\">请输入证件类型！</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label *ngIf=\"cust && !custType\">证件号:</label>\r\n                        <label *ngIf=\"!cust\" appValidation>证件号:</label>\r\n                        <label *ngIf=\"custType\" appValidation>证件号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"idNo\">\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['idNo'].valid&&userform.controls['idNo'].dirty\">\r\n                            <span *ngIf=\"userform.controls['idNo'].errors['required']\">请输入证件号！</span>\r\n                            <span *ngIf=\"userform.hasError('maxlength','idNo')\">证件号不能超过18位!</span>\r\n                            <span *ngIf=\"userform.hasError('checkEnAndNum','idNo')\">证件号码输入有误!</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>联系电话:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"cellphone\">\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['cellphone'].valid&&userform.controls['cellphone'].dirty\">\r\n                            <span *ngIf=\"userform.hasError('maxlength','cellphone')\">联系电话不能超过20位!</span>\r\n                            <span *ngIf=\"userform.hasError('pattern','cellphone')\">联系电话输入有误!</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>联系地址:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"contactAddress\">\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['contactAddress'].valid&&userform.controls['contactAddress'].dirty\">\r\n                            <span *ngIf=\"userform.hasError('maxlength','contactAddress')\">联系地址不能超过255位!</span>\r\n                            <span *ngIf=\"userform.hasError('specialSymbol','contactAddress')\">联系地址不支持特殊字符！!</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>一级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"listTypeOneList\" formControlName=\"listTypeOne\" (onChange)=\"listType(1)\"></p-dropdown>\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['listTypeOne'].valid&&userform.controls['listTypeOne'].dirty\">\r\n                            <span *ngIf=\"userform.controls['listTypeOne'].errors['required']\">请输入一级名单！</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>二级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"listTypeTwoList\" formControlName=\"listTypeTwo\" (onChange)=\"listType(2)\"></p-dropdown>\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['listTypeTwo'].valid&&userform.controls['listTypeTwo'].dirty\">\r\n                            <span *ngIf=\"userform.controls['listTypeTwo'].errors['required']\">请输入二级名单！</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label *ngIf=\"risk\">风险管控等级:</label>\r\n                        <label *ngIf=\"!risk\"  appValidation>风险管控等级:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"listTypeIdList\" formControlName=\"listTypeId\" (onChange)=\"listType(3)\"></p-dropdown>\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['listTypeId'].valid&&userform.controls['listTypeId'].dirty\">\r\n                            <span *ngIf=\"userform.controls['listTypeId'].errors['required']\">请输入风险管控等级！</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>状态:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"statusIdList\" formControlName=\"statusId\" [disabled]=\"true\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>分类编码:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"classifyId\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>录入方式:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"inListTypeList\" formControlName=\"inListType\" [disabled]=\"true\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>录入原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <textarea rows=\"5\" cols=\"60\" maxlength=\"255\" placeholder=\"最大输入255字数\" pInputTextarea formControlName=\"toListReason\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 btn-return\">\r\n                <!-- <button pButton type=\"button\" label=\"保存\" (click)=\"doSave(1)\" [disabled]=\"!userform.valid\"></button> -->\r\n                <button pButton type=\"button\" label=\"提交\" (click)=\"doSave(2)\" [disabled]=\"!userform.valid == !Ashplacing\"></button>\r\n                <button pButton type=\"button\" label=\"返回\" (click)=\"doReset()\"></button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<tzb-loading [blocked]=\"loadingShow.flag\"></tzb-loading>\r\n<!-- 客户查询 -->\r\n<!-- <p-dialog  #dialog *ngIf=\"display\" header=\"客户查询\" [(visible)]=\"display\" modal=\"modal\">\r\n    <app-customer-list-center (outValue)=\"getMsg($event)\"></app-customer-list-center>\r\n</p-dialog> -->\r\n<p-dialog #dialog header=\"客户查询\" [(visible)]=\"display\" modal=\"modal\">\r\n    <app-customer-list-center (outValue)=\"getMsg($event)\"></app-customer-list-center>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-add/custom-manage-add.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-add/custom-manage-add.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-deal {\n  max-height: 650px !important; }\n  .my-deal .btn-return {\n    margin-top: 10px !important;\n    text-align: center; }\n  .my-deal .text-right {\n    text-align: right; }\n  .my-deal .ui-g-12 {\n    margin-top: -12px; }\n  .queryinputbtn {\n  float: left;\n  display: flex; }\n  .queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n  .queryinputbtn .clickspan {\n    width: 14%;\n    height: 25px;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLW1hbmFnZS9jdXN0b20tbWFuYWdlLWFkZC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1saXN0LW1hbmFnZVxcY3VzdG9tLW1hbmFnZVxcY3VzdG9tLW1hbmFnZS1hZGRcXGN1c3RvbS1tYW5hZ2UtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQTRCLEVBQUE7RUFEaEM7SUFHUSwyQkFBMkI7SUFDM0Isa0JBQWtCLEVBQUE7RUFKMUI7SUFPUSxpQkFBaUIsRUFBQTtFQVB6QjtJQVVRLGlCQUFpQixFQUFBO0VBR3pCO0VBQ0ksV0FBVztFQUNYLGFBQWEsRUFBQTtFQUZqQjtJQUlRLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLDBCQUEwQixFQUFBO0VBUGxDO0lBVVEsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1saXN0LW1hbmFnZS9jdXN0b20tbWFuYWdlL2N1c3RvbS1tYW5hZ2UtYWRkL2N1c3RvbS1tYW5hZ2UtYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWRlYWwge1xyXG4gICAgbWF4LWhlaWdodDogNjUwcHggIWltcG9ydGFudDtcclxuICAgIC5idG4tcmV0dXJuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHQtcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnVpLWctMTJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgICB9XHJcbn1cclxuLnF1ZXJ5aW5wdXRidG4ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLnF1ZXJ5aW5wdXRPcmcge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcclxuICAgICAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2xpY2tzcGFuIHtcclxuICAgICAgICB3aWR0aDogMTQlO1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-add/custom-manage-add.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-add/custom-manage-add.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: CustomManageAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomManageAdd", function() { return CustomManageAdd; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/components/dialog/dialog */ "./node_modules/primeng/components/dialog/dialog.js");
/* harmony import */ var primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomManageAdd = /** @class */ (function () {
    function CustomManageAdd(httpService, messageService, commonFunc, commfunc, fb) {
        this.httpService = httpService;
        this.messageService = messageService;
        this.commonFunc = commonFunc;
        this.commfunc = commfunc;
        this.fb = fb;
        this.display = false;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadingShow = { flag: false }; // loading框
        this.msgs = [];
        this.today = new Date(); //日期
        this.bank = false; //本行
        this.bankown = false; //非本行
        this.jbxx = []; //名单码值
        this.reList = []; //类型表
        this.Ashplacing = false;
        this.risk = false; // 风险管控登记
        this.custType = false; //证件类型是否选择
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        this.userName = chName.userName;
        this.orgName = chName.orgName;
        this.userform = fb.group({
            isMybankCust: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            customerType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            partyId: [''],
            custName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            statusId: ['Y'],
            listTypeOne: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            listTypeTwo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            listTypeId: [''],
            idType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            idNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cellphone: [''],
            contactAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["specialSymbol"]]],
            inListType: ['1'],
            classifyId: [''],
            toListReason: [''],
            registerUserName: [''],
            registerOrgName: [""],
        });
    }
    CustomManageAdd.prototype.ngOnInit = function () {
        console.log(this.userName, this.orgName);
        console.log(JSON.parse(this.commfunc.getSessionDataCH('chName')), "11111111111");
        this.codeValues(); //调用方法，获取全部码值
        this.query();
        this.isMybankCustList = this.code['isMybankCust'];
        this.customerTypeList = this.code['customerType'];
        this.statusIdList = this.code['statusId'];
        this.inListTypeList = this.code['inListType'];
        this.idTypeList = this.code['CERT_TYPE'];
        this.isMybank();
        console.log(this.user, "报文头");
        //   console.log(this.userName,this.orgName)  
        this.queryOrgName();
    };
    CustomManageAdd.prototype.queryOrgName = function () {
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        for (var i = 0; i < chName.orgList.length; i++) {
            if (this.user.extParam.orgId == chName.orgList[i].orgId) {
                this.orgName = chName.orgList[i].orgName;
            }
        }
        console.log(this.orgName, "111111111");
    };
    //码值
    CustomManageAdd.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //是否我行客户
    CustomManageAdd.prototype.isMybank = function () {
        this.cust = false;
        if (this.userform.value.isMybankCust == 'Y' || this.userform.value.isMybankCust == '') {
            this.bank = true;
            this.bankown = false;
            this.userform.removeControl('idType');
            this.userform.removeControl('customerType');
            this.userform.removeControl('idNo');
            this.userform.removeControl('cellphone');
            this.userform.addControl('partyId', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["checkNumber"]]));
        }
        else if (this.userform.value.isMybankCust == 'N') {
            this.bank = false;
            this.bankown = true;
            this.userform.removeControl('partyId');
            this.userform.addControl('customerType', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
            this.userform.addControl('idType', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
            this.userform.addControl('cellphone', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/)]));
            this.userform.addControl('idNo', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(32), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["checkEnAndNum"]]));
            this.userform.addControl('custName', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
        }
    };
    // 个人和企业
    CustomManageAdd.prototype.iscustomer = function () {
        if (this.userform.value.isMybankCust == 'N' && this.userform.value.customerType == '2') { //企业
            this.cust = true;
            this.userform.removeControl('partyId');
            this.userform.removeControl('idType');
            this.userform.removeControl('idNo');
            this.userform.removeControl('custName');
            this.userform.addControl('idType', this.fb.control(''));
            this.userform.addControl('idNo', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(32), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["checkEnAndNum"]]));
            this.userform.addControl('customerType', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
            this.userform.addControl('custName', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
            this.userform.addControl('cellphone', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/)]));
        }
        if (this.userform.value.isMybankCust == 'N' && this.userform.value.customerType == '1') {
            this.cust = false;
            this.userform.removeControl('partyId');
            this.userform.removeControl('custName');
            this.userform.removeControl('idType');
            this.userform.removeControl('idNo');
            this.userform.addControl('custName', this.fb.control(''));
            this.userform.addControl('customerType', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
            this.userform.addControl('idType', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
            this.userform.addControl('cellphone', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/)]));
            this.userform.addControl('idNo', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(32), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["checkEnAndNum"]]));
        }
    };
    // 证件类型 是否身份证或其他
    CustomManageAdd.prototype.idTypeChange = function (event) {
        console.log(event);
        if (this.userform.value.isMybankCust == 'N' && event.value && event.value == '0') {
            if (this.cust) {
                this.custType = true;
            }
            this.userform.removeControl('idNo');
            this.userform.addControl('idNo', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(18), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["checkEnAndNum"]]));
        }
        else if (this.userform.value.isMybankCust == 'N' && event.value && event.value != '0' && this.userform.value.customerType == '1') {
            this.userform.removeControl('idNo');
            this.userform.addControl('idNo', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
        }
        else if (this.userform.value.isMybankCust == 'N' && event.value && event.value != '0' && this.userform.value.customerType == '2') {
            this.custType = true;
            this.userform.removeControl('idNo');
            this.userform.addControl('idNo', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
        }
        if (!event.value) {
            this.custType = false;
            this.userform.removeControl('idNo');
            this.userform.addControl('idNo', this.fb.control(''));
        }
    };
    //名单联动
    CustomManageAdd.prototype.listType = function (i) {
        var _this = this;
        if (i == '1') {
            var param = {};
            param['listTypeHierarchy'] = 2;
            param['parentListTypeId'] = this.userform.value.listTypeOne;
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var list = data.returnList;
                    if (data.returnList.length == 0) {
                        _this.risk = true;
                        _this.jbxx = [];
                        _this.userform.get('classifyId').setValue("");
                    }
                    else {
                        _this.risk = false;
                        var list_1 = data.returnList;
                        _this.jbxx = [];
                        list_1.forEach(function (element) {
                            var obj = {};
                            obj['label'] = element.listTypeName;
                            obj['value'] = element.listTypeId;
                            _this.jbxx.push(obj);
                        });
                    }
                    _this.jbxx.unshift({ label: '请选择', value: '' });
                    _this.listTypeTwoList = _this.jbxx;
                    _this.userform.get('listTypeTwo').setValue('');
                    _this.userform.get('listTypeTwo').updateValueAndValidity();
                    _this.msgs = [];
                    _this.listTypeIdList = []; //清空风险管控等级
                    // this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            });
        }
        else if (i == '2') {
            var param = {};
            param['listTypeHierarchy'] = 3;
            param['parentListTypeId'] = this.userform.value.listTypeTwo;
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.reList = data.returnList;
                    if (data.returnList.length == 0) {
                        _this.risk = true;
                        _this.jbxx = [];
                        _this.userform.get('classifyId').setValue("");
                        _this.userform.get('classifyId').updateValueAndValidity();
                        _this.userform.get('listTypeId').clearValidators();
                        _this.userform.get('listTypeId').updateValueAndValidity();
                    }
                    else {
                        _this.risk = false;
                        var list = data.returnList;
                        _this.jbxx = [];
                        list.forEach(function (element) {
                            var obj = {};
                            obj['label'] = element.listTypeName;
                            obj['value'] = element.listTypeId;
                            _this.jbxx.push(obj);
                        });
                        _this.userform.get('listTypeId').setValue('');
                        _this.userform.get('listTypeId').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
                        _this.userform.get('listTypeId').updateValueAndValidity();
                    }
                    _this.jbxx.unshift({ label: '请选择', value: '' });
                    _this.listTypeIdList = _this.jbxx;
                    _this.msgs = [];
                    // this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            });
        }
        else if (i == '3') {
            for (var e = 0; e < this.reList.length; e++) {
                if (this.userform.value.listTypeId == this.reList[e].listTypeId) {
                    this.userform.get('classifyId').setValue(this.reList[e].classifyId);
                }
            }
        }
    };
    //查询
    CustomManageAdd.prototype.query = function () {
        var _this = this;
        var param = {};
        param['listTypeHierarchy'] = 1;
        this.httpService.selectBlackListType(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var list = data.returnList;
                list.forEach(function (element) {
                    var obj = {};
                    obj['label'] = element.listTypeName;
                    obj['value'] = element.listTypeId;
                    _this.jbxx.push(obj);
                });
                _this.jbxx.unshift({ label: '请选择', value: '' });
                _this.listTypeOneList = _this.jbxx;
                _this.msgs = [];
                // this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    // 保存/提交
    CustomManageAdd.prototype.doSave = function (i) {
        var _this = this;
        if (i == '1') {
            var param = Object.assign({}, this.userform.value);
            param['registerOrg'] = this.user.extParam.orgId;
            param['registerUser'] = this.user.userId;
            param['approvalStatus'] = 'AA';
            param['operationType'] = '1001';
            param['registerTime'] = this.commfunc.transDateN(this.today);
            if (!this.userform.value.listTypeId && !this.risk) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '请选择风险管控等级!' }];
                return;
            }
            else if (this.risk) {
                param['listTypeId'] = '';
            }
            else {
                for (var e = 0; e < this.reList.length; e++) {
                    if (this.userform.value.listTypeId == this.reList[e].listTypeId) {
                        param['listTypeId'] = this.reList[e].listTypeId;
                    }
                }
            }
            param['registerUserName'] = this.userName;
            param['registerOrgName'] = this.orgName;
            this.httpService.superListOperation(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                    setTimeout(function () {
                        _this.outValue.emit(false);
                    }, 1000);
                    // this.outValue.emit(false);
                    // this.msgs = [];
                    // this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            });
        }
        else if (i == '2') {
            var param = Object.assign({}, this.userform.value);
            param['registerOrg'] = this.user.extParam.orgId;
            param['registerUser'] = this.user.userId;
            param['registerUserName'] = this.userName;
            param['registerOrgName'] = this.orgName;
            param['approvalStatus'] = '0';
            param['operationType'] = '1001';
            param['registerTime'] = this.commfunc.transDateN(this.today);
            for (var e = 0; e < this.reList.length; e++) {
                if (this.userform.value.listTypeId == this.reList[e].listTypeId) {
                    param['listTypeId'] = this.reList[e].listTypeId;
                }
            }
            this.Ashplacing = true;
            this.httpService.superListOperation(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                    setTimeout(function () {
                        _this.outValue.emit(false);
                    }, 1000);
                    // this.outValue.emit(false);
                    // this.msgs = [];
                    //  this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                }
                else {
                    _this.Ashplacing = false;
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (err) {
                _this.Ashplacing = false;
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            });
        }
    };
    // 返回
    CustomManageAdd.prototype.doReset = function () {
        this.outValue.emit(false);
    };
    // 客户查询弹框
    CustomManageAdd.prototype.perTreeShow = function () {
        this.display = true;
    };
    // 客户查询关闭传值
    CustomManageAdd.prototype.getMsg = function (e) {
        this.userform.get('partyId').setValue(e.custNo);
        this.userform.get('custName').setValue(e.custName);
        this.display = false;
    };
    CustomManageAdd.prototype.ngAfterViewInit = function () {
        this.cancelDialogShake();
    };
    CustomManageAdd.prototype.cancelDialogShake = function () {
        if (this.dialog) {
            this.dialog.center = function () {
                var elementWidth = this.domHandler.getOuterWidth(this.containerViewChild.nativeElement);
                var elementHeight = this.domHandler.getOuterHeight(this.containerViewChild.nativeElement);
                if (elementWidth === 0 && elementHeight === 0) {
                    this.containerViewChild.nativeElement.style.visibility = 'hidden';
                    this.containerViewChild.nativeElement.style.display = 'block';
                    elementWidth = this.domHandler.getOuterWidth(this.containerViewChild.nativeElement);
                    elementHeight = this.domHandler.getOuterHeight(this.containerViewChild.nativeElement);
                    this.containerViewChild.nativeElement.style.display = 'none';
                    this.containerViewChild.nativeElement.style.visibility = 'visible';
                }
                var viewport = this.domHandler.getViewport();
                var x = Math.max(Math.ceil((viewport.width - elementWidth)) / 2, 0);
                var y = Math.max(Math.ceil((viewport.height - elementHeight)) / 2, 0);
                // 解决抖动问题
                if (!this.containerViewChild.nativeElement.style.left ||
                    !this.containerViewChild.nativeElement.style.top ||
                    Math.abs(this.containerViewChild.nativeElement.style.left - x) > 5 ||
                    Math.abs(this.containerViewChild.nativeElement.style.top - y) > 5) {
                    this.containerViewChild.nativeElement.style.left = x + 'px';
                    this.containerViewChild.nativeElement.style.top = y + 'px';
                }
            };
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomManageAdd.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dialog'),
        __metadata("design:type", primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_7__["Dialog"])
    ], CustomManageAdd.prototype, "dialog", void 0);
    CustomManageAdd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-manage-add',
            template: __webpack_require__(/*! ./custom-manage-add.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-add/custom-manage-add.component.html"),
            styles: [__webpack_require__(/*! ./custom-manage-add.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-add/custom-manage-add.component.scss")],
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["CusListManageHttpService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_6__["Customtools"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CustomManageAdd);
    return CustomManageAdd;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-batch/custom-manage-batch.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-batch/custom-manage-batch.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-deal\">\r\n    <div class=\"ui-g-12\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>上传文件:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <p-fileUpload accept=\".xls\" invalidFileTypeMessageDetail=\"只能上传Excel\" invalidFileTypeMessageSummary=\"\" chooseLabel=\"浏览\" uploadLabel=\"上传\"\r\n                            cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"load($event)\">\r\n                        </p-fileUpload>\r\n                        <div *ngIf=\"files.length>0\">\r\n                            <span *ngFor=\"let item of files\">{{item.name}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-2\">\r\n                        <a style=\"color:red;cursor: pointer;line-height:35px;\" (click)=\"downword()\">模板下载</a>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>一级名单分类:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"listTypeOneList\" formControlName=\"listTypeOne\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"inStock\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>名单来源:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-10\">\r\n                        <input type=\"text\" pInputText formControlName=\"sourceDes\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>录入方式:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.inListType | codeValuePie:inListTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"inStock\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>录入原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"toListReason\"></textarea>\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['toListReason'].valid&&userform.controls['toListReason'].dirty\">\r\n                        <span *ngIf=\"userform.hasError('maxlength','toListReason')\">录入原因不能超过255位!</span>\r\n                        <span *ngIf=\"userform.hasError('specialSymbol','toListReason')\">录入原因不支持特殊字符！</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"outStock\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>出库原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <textarea rows=\"5\" cols=\"60\" maxlength=\"255\" placeholder=\"最大输入字数255\" pInputTextarea formControlName=\"toListReason\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办人:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerUserName\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办机构:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerOrgName\" pInputText disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办时间:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerTime\" pInputText disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 btn-return\">\r\n                <!-- <button pButton type=\"button\" label=\"保存\" (click)=\"doSave(1)\" [disabled]=\"!userform.valid\"></button> -->\r\n                <button pButton type=\"button\" label=\"提交\" (click)=\"doSave(2)\" [disabled]=\"!userform.valid == !Ashplacing\"></button>\r\n                <span *ngIf=\"!userform.valid\">\r\n                    <button pButton type=\"button\" label=\"提交\" (click)=\"doSave(2)\" [disabled]=\"!userform.valid == !Ashplacing\"></button>\r\n                </span>\r\n                <span *ngIf=\"userform.valid\">\r\n                    <button pButton type=\"button\" label=\"提交\" (click)=\"doSave(2)\" [disabled]=\"!fileSuccess == !Ashplacing\"></button>\r\n                </span>\r\n                <button pButton type=\"button\" label=\"返回\" (click)=\"doReset()\"></button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<tzb-loading [blocked]=\"loadingShow.flag\"></tzb-loading>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-batch/custom-manage-batch.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-batch/custom-manage-batch.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-deal {\n  max-height: 650px !important; }\n  .my-deal .btn-return {\n    margin-top: 10px !important;\n    text-align: center; }\n  .my-deal .text-right {\n    text-align: right; }\n  .my-deal .ui-g-12 {\n    margin-top: -12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLW1hbmFnZS9jdXN0b20tbWFuYWdlLWJhdGNoL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWxpc3QtbWFuYWdlXFxjdXN0b20tbWFuYWdlXFxjdXN0b20tbWFuYWdlLWJhdGNoXFxjdXN0b20tbWFuYWdlLWJhdGNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQTRCLEVBQUE7RUFEaEM7SUFHUSwyQkFBMkI7SUFDM0Isa0JBQWtCLEVBQUE7RUFKMUI7SUFPUSxpQkFBaUIsRUFBQTtFQVB6QjtJQVVRLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLW1hbmFnZS9jdXN0b20tbWFuYWdlLWJhdGNoL2N1c3RvbS1tYW5hZ2UtYmF0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktZGVhbCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2NTBweCAhaW1wb3J0YW50O1xyXG4gICAgLmJ0bi1yZXR1cm4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dC1yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAudWktZy0xMntcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-batch/custom-manage-batch.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-batch/custom-manage-batch.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: CustomManageBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomManageBatch", function() { return CustomManageBatch; });
/* harmony import */ var app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
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







var CustomManageBatch = /** @class */ (function () {
    function CustomManageBatch(httpService, messageService, commonFunc, commfunc, fb) {
        this.httpService = httpService;
        this.messageService = messageService;
        this.commonFunc = commonFunc;
        this.commfunc = commfunc;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadingShow = { flag: false }; // loading框
        this.msgs = [];
        this.inStock = false; //入库
        this.outStock = false; //出库
        // 文件
        this.files = [];
        this.fileList = [];
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_UPLOAD"]; // 上传
        this.today = new Date(); //日期
        this.jbxx = []; //名单码值
        this.Ashplacing = false;
        this.fileSuccess = false; // 文件是否上传
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        this.userName = chName.userName;
        this.orgName = chName.orgName;
        this.userform = fb.group({
            listTypeOne: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sourceDes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            inListType: ['2', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            toListReason: [''],
            registerUser: [''],
            registerOrg: [''],
            registerTime: [''],
            filePath: [''],
            fileName: [''],
            registerUserName: [''],
            registerOrgName: [""],
        });
    }
    CustomManageBatch.prototype.ngOnInit = function () {
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.codeValues(); //调用方法，获取全部码值
        this.isMybankCustList = this.code['isMybankCust'];
        this.customerTypeList = this.code['customerType'];
        this.statusIdList = this.code['statusId'];
        this.inListTypeList = this.code['inListType'];
        if (this.inValue == '1') { //入库页面
            this.inStock = true;
            this.outStock = false;
        }
        else if (this.inValue == '2') { //出库页面
            this.inStock = false;
            this.outStock = true;
            this.userform.removeControl('sourceDes');
            this.userform.removeControl('inListType');
        }
        this.userform.get('registerUser').setValue(this.user.userId);
        this.userform.get('registerUserName').setValue(this.userName);
        this.userform.get('registerOrg').setValue(this.user.extParam.orgId);
        this.userform.get('registerOrgName').setValue(this.orgName);
        this.userform.get('registerTime').setValue(this.commfunc.transDateN(this.today));
        this.query();
        this.queryOrgName();
    };
    CustomManageBatch.prototype.queryOrgName = function () {
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        for (var i = 0; i < chName.orgList.length; i++) {
            if (this.user.extParam.orgId == chName.orgList[i].orgId) {
                this.orgName = chName.orgList[i].orgName;
            }
        }
        console.log(this.orgName, "111111111");
    };
    //码值
    CustomManageBatch.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //查询
    CustomManageBatch.prototype.query = function () {
        var _this = this;
        var param = {};
        param['listTypeHierarchy'] = 1;
        this.httpService.selectBlackListType(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var list = data.returnList;
                list.forEach(function (element) {
                    var obj = {};
                    obj['label'] = element.listTypeName;
                    obj['value'] = element.listTypeId;
                    _this.jbxx.push(obj);
                });
                _this.jbxx.unshift({ label: '请选择', value: '' });
                _this.listTypeOneList = _this.jbxx;
                _this.msgs = [];
                // this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    // 按模板-文件上传
    CustomManageBatch.prototype.load = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files = [];
            this.files.push(file);
        }
        if (event.xhr.response) {
            this.fileList = JSON.parse(event.xhr.response);
            if (this.fileList.length > 0) {
                this.fileSuccess = true;
            }
            else {
                this.fileSuccess = false;
            }
            if (this.fileList.success == false) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: this.fileList.errorMsg });
                this.files = [];
                return;
            }
        }
        if (this.fileList[0]) {
            this.userform.get('filePath').setValue(this.fileList[0].fileUrl);
            this.userform.get('fileName').setValue(this.fileList[0].fileName);
        }
    };
    // 保存/提交
    CustomManageBatch.prototype.doSave = function (i) {
        var _this = this;
        if (this.inValue == '1') { //入库
            if (i == '1') { //入库保存
                var param = Object.assign({}, this.userform.value);
                param['operationType'] = '1002';
                param['approvalStatus'] = 'AA';
                param['registerOrg'] = this.user.extParam.orgId;
                param['registerUser'] = this.user.userId;
                param['registerUserName'] = this.userName;
                param['registerOrgName'] = this.orgName;
                this.Ashplacing = true;
                this.httpService.superListBatchOperation(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        // this.outValue.emit(false);
                        // this.msgs = [];
                        //  this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        setTimeout(function () {
                            _this.outValue.emit(false);
                        }, 1000);
                    }
                    else {
                        _this.Ashplacing = false;
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.Ashplacing = false;
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
                });
            }
            if (i == '2') { //入库提交
                var param = Object.assign({}, this.userform.value);
                param['registerOrg'] = this.user.extParam.orgId;
                param['registerUser'] = this.user.userId;
                param['registerUserName'] = this.userName;
                param['registerOrgName'] = this.orgName;
                param['operationType'] = '1002';
                param['approvalStatus'] = '0';
                this.Ashplacing = true;
                this.httpService.superListBatchOperation(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        // this.outValue.emit(false);
                        // this.msgs = [];
                        // this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        setTimeout(function () {
                            _this.outValue.emit(false);
                        }, 1000);
                    }
                    else {
                        _this.Ashplacing = false;
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.Ashplacing = false;
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
                });
            }
        }
        else if (this.inValue == '2') { //出库
            if (i == '1') { //出库保存
                var param = Object.assign({}, this.userform.value);
                param['operationType'] = '1004';
                param['approvalStatus'] = 'AA';
                param['registerOrg'] = this.user.extParam.orgId;
                param['registerUser'] = this.user.userId;
                param['registerUserName'] = this.userName;
                param['registerOrgName'] = this.orgName;
                this.Ashplacing = true;
                this.httpService.superListBatchOperation(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        // this.outValue.emit(false);
                        // this.msgs = [];
                        // this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        setTimeout(function () {
                            _this.outValue.emit(false);
                        }, 1000);
                    }
                    else {
                        _this.Ashplacing = false;
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.Ashplacing = false;
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
                });
            }
            if (i == '2') { //出库提交
                var param = Object.assign({}, this.userform.value);
                param['operationType'] = '1004';
                param['approvalStatus'] = '0';
                param['registerOrg'] = this.user.extParam.orgId;
                param['registerUser'] = this.user.userId;
                param['registerUserName'] = this.userName;
                param['registerOrgName'] = this.orgName;
                this.Ashplacing = true;
                this.httpService.superListBatchOperation(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        // this.outValue.emit(false);
                        // this.msgs = [];
                        // this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        setTimeout(function () {
                            _this.outValue.emit(false);
                        }, 1000);
                    }
                    else {
                        _this.Ashplacing = false;
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.Ashplacing = false;
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
                });
            }
        }
    };
    // 返回
    CustomManageBatch.prototype.doReset = function () {
        this.outValue.emit(false);
    };
    // 模板下载
    CustomManageBatch.prototype.downword = function () {
        if (this.inValue == '1') {
            open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI("listManagerInImport.xls") + "&fileUrl=" + "/copdata/moban/", '_blank');
        }
        else if (this.inValue == '2') {
            open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI("listManagerOutImport.xls") + "&fileUrl=" + "/copdata/moban/", '_blank');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], CustomManageBatch.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CustomManageBatch.prototype, "inValue", void 0);
    CustomManageBatch = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'custom-manage-batch',
            template: __webpack_require__(/*! ./custom-manage-batch.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-batch/custom-manage-batch.component.html"),
            styles: [__webpack_require__(/*! ./custom-manage-batch.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-batch/custom-manage-batch.component.scss")],
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_0__["CusListManageHttpService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__["Customtools"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CustomManageBatch);
    return CustomManageBatch;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-detail/custom-manage-detail.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-detail/custom-manage-detail.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-deal\">\r\n    <div class=\"ui-g-12\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>是否我行客户:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.isMybankCust | codeValuePie:isMybankCustList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\" *ngIf=\"!bank\">\r\n                        <label>客户类型:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\" *ngIf=\"!bank\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.customerType | codeValuePie:customerTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bank\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"partyId\" disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>证件类型:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.idType | codeValuePie:idTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>证件号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"idNo\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>联系电话:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"cellphone\" disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>联系地址:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"contactAddress\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>一级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.listTypeOne | codeValuePie:listTypeOneList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>二级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.listTypeTwo | codeValuePie:listTypeTwoList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>风险管控等级:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.listTypeId | codeValuePie:listTypeIdList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>状态:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.statusId | codeValuePie:statusIdList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>分类编码:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"classifyId\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>录入方式:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.inListType | codeValuePie:inListTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>录入原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"toListReason\" disabled></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <header-title [Info]=\"'名单调整历史'\"></header-title>\r\n            </div>\r\n            <div class=\"ui-g-12 base-table\" style=\"overflow-x:scroll;width:100%;text-align:center;margin-top:-10px;\">\r\n                <p-dataTable [value]=\"dataList\" class=\"table\" [emptyMessage]='tabMesg'>\r\n                    <p-column field=\"listTaskId\" header=\"任务编号\" [style]=\"{'width':'100px'}\">\r\n                        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                            <span class=\"colorImport\" (click)=\"Jump(col)\">{{col.listTaskId}}</span>\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column field=\"operationType\" header=\"操作类型\" [style]=\"{'width':'100px'}\">\r\n                        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                            <span>{{item.operationType | codeValuePie:operationTypeList}}</span>\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column field=\"registerUserName\" header=\"经办人\" [style]=\"{'width':'100px'}\"></p-column>\r\n                    <p-column field=\"registerTime\" header=\"经办日期\" [style]=\"{'width':'100px'}\"></p-column>\r\n                    <p-column field=\"registerOrgName\" header=\"经办机构\" [style]=\"{'width':'100px'}\"></p-column>\r\n                    <p-column field=\"approvalStatus\" header=\"审批状态\" [style]=\"{'width':'100px'}\">\r\n                        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                            <span>{{item.approvalStatus | codeValuePie:approvalStatusList}}</span>\r\n                        </ng-template>\r\n                    </p-column>\r\n                </p-dataTable>\r\n            </div>\r\n            <div class=\"ui-g-12 btn-return\">\r\n                <button pButton type=\"button\" label=\"返回\" (click)=\"doReset()\"></button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<tzb-loading [blocked]=\"loadingShow.flag\"></tzb-loading>\r\n<!-- 模态框 新增-->\r\n<p-dialog [(visible)]=\"dealPerShow\" *ngIf=\"dealPerShow\" modal=\"modal\" class=\"contact-track-f\">\r\n    <p-header>\r\n        单个名单任务详情\r\n    </p-header>\r\n    <custom-mission-detail [inValue]=\"inValue\" [modifyValue]=\"modifyValue\" (outValue)=\"detailCall($event)\"></custom-mission-detail>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-detail/custom-manage-detail.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-detail/custom-manage-detail.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-deal {\n  max-height: 650px !important; }\n  .my-deal .btn-return {\n    margin-top: 10px !important;\n    text-align: center; }\n  .my-deal .text-right {\n    text-align: right; }\n  .my-deal .ui-g-12 {\n    margin-top: -12px; }\n  .my-deal .colorImport {\n    color: #0094D2;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLW1hbmFnZS9jdXN0b20tbWFuYWdlLWRldGFpbC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1saXN0LW1hbmFnZVxcY3VzdG9tLW1hbmFnZVxcY3VzdG9tLW1hbmFnZS1kZXRhaWxcXGN1c3RvbS1tYW5hZ2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQTRCLEVBQUE7RUFEaEM7SUFHUSwyQkFBMkI7SUFDM0Isa0JBQWtCLEVBQUE7RUFKMUI7SUFPUSxpQkFBaUIsRUFBQTtFQVB6QjtJQVVRLGlCQUFpQixFQUFBO0VBVnpCO0lBYVEsY0FBYztJQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWxpc3QtbWFuYWdlL2N1c3RvbS1tYW5hZ2UvY3VzdG9tLW1hbmFnZS1kZXRhaWwvY3VzdG9tLW1hbmFnZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktZGVhbCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2NTBweCAhaW1wb3J0YW50O1xyXG4gICAgLmJ0bi1yZXR1cm4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dC1yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAudWktZy0xMntcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICAgIH1cclxuICAgIC5jb2xvckltcG9ydCB7XHJcbiAgICAgICAgY29sb3I6ICMwMDk0RDI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-detail/custom-manage-detail.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-detail/custom-manage-detail.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: CustomManageDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomManageDetail", function() { return CustomManageDetail; });
/* harmony import */ var app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomManageDetail = /** @class */ (function () {
    function CustomManageDetail(httpService, messageService, commonFunc, commfunc, fb) {
        this.httpService = httpService;
        this.messageService = messageService;
        this.commonFunc = commonFunc;
        this.commfunc = commfunc;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadingShow = { flag: false }; // loading框
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"]; //表格中无数据时显示的内容
        this.msgs = [];
        this.adjust = false; //调整
        this.efficacy = false; //失效
        this.delete = false; //删除
        this.bank = false; //本行
        this.bankown = false; //非本行
        this.jbxx = []; //名单码值
        this.reList = []; //类型表
        this.dealPerShow = false;
        this.dataList = [];
        this.userform = fb.group({
            isMybankCust: [''],
            customerType: [''],
            partyId: [''],
            custName: [''],
            statusId: ['Y'],
            listTypeOne: [''],
            listTypeTwo: [''],
            listTypeId: [''],
            idType: [''],
            idNo: [''],
            cellphone: [''],
            contactAddress: [''],
            inListType: ['1'],
            classifyId: [''],
            toListReason: [''],
        });
    }
    CustomManageDetail.prototype.ngOnInit = function () {
        this.codeValues(); //调用方法，获取全部码值
        this.isMybankCustList = this.code['isMybankCust'];
        this.customerTypeList = this.code['customerType'];
        this.statusIdList = this.code['statusId'];
        this.inListTypeList = this.code['inListType'];
        this.idTypeList = this.code['CERT_TYPE'];
        this.approvalStatusList = this.code['approvalStatus'];
        this.operationTypeList = this.code['operation'];
        if (this.inValue) {
            this.userform.get('isMybankCust').setValue(this.inValue.isMybankCust);
            this.userform.get('customerType').setValue(this.inValue.customerType);
            this.userform.get('partyId').setValue(this.inValue.partyId);
            this.userform.get('custName').setValue(this.inValue.custName);
            this.userform.get('statusId').setValue(this.inValue.statusId);
            this.userform.get('listTypeOne').setValue(this.inValue.listTypeOne);
            this.userform.get('listTypeTwo').setValue(this.inValue.listTypeTwo);
            this.userform.get('inListType').setValue(this.inValue.inListType);
            this.userform.get('classifyId').setValue(this.inValue.classifyId);
            this.userform.get('toListReason').setValue(this.inValue.toListReason);
            this.userform.get('listTypeId').setValue(this.inValue.listTypeId);
        }
        this.queryClick();
        this.isMybank();
        for (var e = 0; e < 3; e++) {
            this.listType(e);
        }
    };
    //码值
    CustomManageDetail.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //是否我行客户
    CustomManageDetail.prototype.isMybank = function () {
        if (this.inValue.isMybankCust == 'Y') {
            this.bank = true;
            this.bankown = false;
        }
        else if (this.inValue.isMybankCust == 'N') {
            this.bank = false;
            this.bankown = true;
            this.userform.get('idType').setValue(this.inValue.idType);
            this.userform.get('idNo').setValue(this.inValue.idNo);
            this.userform.get('cellphone').setValue(this.inValue.cellphone);
            this.userform.get('contactAddress').setValue(this.inValue.contactAddress);
        }
    };
    //名单联动
    CustomManageDetail.prototype.listType = function (i) {
        var _this = this;
        if (i == '0') {
            var param = {};
            param['listTypeHierarchy'] = 1;
            // const configParam = {
            //     httpService: this.httpService,
            //     loadingFlag: true,
            //     messageFlag: true,
            //     inputParam: param,
            //     message: this.messageService,
            //     injectName: 'selectBlackListType',
            //     loadingShow: this.loadingShow,
            //     messageInfo: '查询成功',
            // }
            // this.commonFunc.haddleData(configParam, (bodyData) => {
            //     if (bodyData) {
            // let list = bodyData.returnList;
            // list.forEach(element => {
            //     let obj = {};
            //     obj['label'] = element.listTypeName;
            //     obj['value'] = element.listTypeId;
            //     this.jbxx.push(obj);
            // });
            // this.jbxx.unshift({ label: '请选择', value: '' });
            // this.listTypeOneList = this.jbxx;
            //     }
            // });
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var list = data.returnList;
                    list.forEach(function (element) {
                        var obj = {};
                        obj['label'] = element.listTypeName;
                        obj['value'] = element.listTypeId;
                        _this.jbxx.push(obj);
                    });
                    _this.jbxx.unshift({ label: '请选择', value: '' });
                    _this.listTypeOneList = _this.jbxx;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            });
        }
        else if (i == '1') {
            var param = {};
            param['listTypeHierarchy'] = 2;
            param['parentListTypeId'] = this.inValue.listTypeOne;
            // const configParam = {
            //     httpService: this.httpService,
            //     loadingFlag: true,
            //     messageFlag: true,
            //     inputParam: param,
            //     message: this.messageService,
            //     injectName: 'selectBlackListType',
            //     loadingShow: this.loadingShow,
            //     messageInfo: '查询成功',
            // }
            // this.commonFunc.haddleData(configParam, (bodyData) => {
            //     if (bodyData) {
            //         let list = bodyData.returnList;
            //         this.jbxx = [];
            //         list.forEach(element => {
            //             let obj = {};
            //             obj['label'] = element.listTypeName;
            //             obj['value'] = element.listTypeId;
            //             this.jbxx.push(obj);
            //         });
            //         this.jbxx.unshift({ label: '请选择', value: '' });
            //         this.listTypeTwoList = this.jbxx;
            //     }
            // });
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var list = data.returnList;
                    _this.jbxx = [];
                    list.forEach(function (element) {
                        var obj = {};
                        obj['label'] = element.listTypeName;
                        obj['value'] = element.listTypeId;
                        _this.jbxx.push(obj);
                    });
                    _this.jbxx.unshift({ label: '请选择', value: '' });
                    _this.listTypeTwoList = _this.jbxx;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            });
        }
        else if (i == '2') {
            var param = {};
            param['listTypeHierarchy'] = 3;
            param['parentListTypeId'] = this.inValue.listTypeTwo;
            // const configParam = {
            //     httpService: this.httpService,
            //     loadingFlag: true,
            //     messageFlag: true,
            //     inputParam: param,
            //     message: this.messageService,
            //     injectName: 'selectBlackListType',
            //     loadingShow: this.loadingShow,
            //     messageInfo: '查询成功',
            // }
            // this.commonFunc.haddleData(configParam, (bodyData) => {
            //     if (bodyData) {
            //         this.reList = bodyData.returnList;
            //         let list = bodyData.returnList;
            //         this.jbxx = [];
            //         list.forEach(element => {
            //             let obj = {};
            //             obj['label'] = element.listTypeName;
            //             obj['value'] = element.listTypeId;
            //             this.jbxx.push(obj);
            //         });
            //         this.jbxx.unshift({ label: '请选择', value: '' });
            //         this.listTypeIdList = this.jbxx;
            //     }
            // });
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.reList = data.returnList;
                    var list = data.returnList;
                    _this.jbxx = [];
                    list.forEach(function (element) {
                        var obj = {};
                        obj['label'] = element.listTypeName;
                        obj['value'] = element.listTypeId;
                        _this.jbxx.push(obj);
                    });
                    _this.jbxx.unshift({ label: '请选择', value: '' });
                    _this.listTypeIdList = _this.jbxx;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            });
        }
        else if (i == '3') {
            for (var e = 0; e < this.reList.length; e++) {
                if (this.inValue.listTypeId == this.reList[e].listTypeId) {
                    this.userform.get('classifyId').setValue(this.reList[e].classifyId);
                }
            }
        }
    };
    //列表查询
    CustomManageDetail.prototype.queryClick = function () {
        var _this = this;
        var param = { blackListId: this.inValue.blackListId };
        // const configParam = {
        //     httpService: this.httpService,
        //     loadingFlag: true,
        //     messageFlag: true,
        //     inputParam: param,
        //     message: this.messageService,
        //     injectName: 'selectListTaskInfo',
        //     loadingShow: this.loadingShow,
        //     messageInfo: '查询成功',
        // }
        // this.commonFunc.haddleData(configParam, (bodyData) => {
        //     if (bodyData) {
        //         this.dataList = bodyData.returnList ? bodyData.returnList : [];
        //     } else {
        //         this.dataList = [];
        //     }
        // });
        this.httpService.selectListTaskInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList = data.returnList ? data.returnList : [];
            }
            else {
                _this.msgs = [];
                _this.dataList = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 编号事件
    CustomManageDetail.prototype.Jump = function (data) {
        this.modifyValue = { listTaskId: data.listTaskId, taskFlowId: data.taskFlowId };
        this.inValue = '';
        this.dealPerShow = true;
    };
    // 编号事件回调
    CustomManageDetail.prototype.detailCall = function () {
        this.dealPerShow = false;
        // this.outValue.emit(false);
    };
    // 返回
    CustomManageDetail.prototype.doReset = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], CustomManageDetail.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CustomManageDetail.prototype, "inValue", void 0);
    CustomManageDetail = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'custom-manage-detail',
            template: __webpack_require__(/*! ./custom-manage-detail.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-detail/custom-manage-detail.component.html"),
            styles: [__webpack_require__(/*! ./custom-manage-detail.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-detail/custom-manage-detail.component.scss")],
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_0__["CusListManageHttpService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__["Customtools"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CustomManageDetail);
    return CustomManageDetail;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-update/custom-manage-update.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-update/custom-manage-update.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-deal\">\r\n    <div class=\"ui-g-12\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>是否我行客户:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.isMybankCust | codeValuePie:isMybankCustList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\" *ngIf=\"!bank\">\r\n                        <label appValidation>客户类型:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\" *ngIf=\"!bank\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.customerType | codeValuePie:customerTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bank\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>客户号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"partyId\" disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>证件类型:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.idType | codeValuePie:idTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>证件号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"idNo\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>联系电话:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"cellphone\" disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>联系地址:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"contactAddress\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>一级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.listTypeOne | codeValuePie:listTypeOneList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>二级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.listTypeTwo | codeValuePie:listTypeTwoList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>风险管控等级:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.listTypeId | codeValuePie:listTypeIdList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>状态:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.statusId | codeValuePie:statusIdList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>分类编码:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"classifyId\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>录入方式:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.inListType | codeValuePie:inListTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>录入原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"toListReason\" disabled></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"adjust\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>调整风险管控等级为:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"listTypeIdList\" formControlName=\"relatedListTypeIdName\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"adjust\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>调整原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"releaseReason\"></textarea>\r\n                    <!-- <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['releaseReason'].valid&&userform.controls['releaseReason'].dirty\">\r\n                        <span *ngIf=\"userform.hasError('maxlength','releaseReason')\">调整原因不能超过255位!</span>\r\n                        <span *ngIf=\"userform.hasError('specialSymbol','releaseReason')\">调整原因不支持特殊字符！</span>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"efficacy\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>失效原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"releaseReason\"></textarea>\r\n                    <!-- <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['releaseReason'].valid&&userform.controls['releaseReason'].dirty\">\r\n                        <span *ngIf=\"userform.hasError('maxlength','releaseReason')\">失效原因不能超过255位!</span>\r\n                        <span *ngIf=\"userform.hasError('specialSymbol','releaseReason')\">失效原因不支持特殊字符！</span>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"delete\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办人:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerUser\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办机构:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerOrg\" pInputText disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"delete\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>删除原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"releaseReason\"></textarea>\r\n                    <!-- <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['releaseReason'].valid&&userform.controls['releaseReason'].dirty\">\r\n                        <span *ngIf=\"userform.hasError('maxlength','releaseReason')\">删除原因不能超过255位!</span>\r\n                        <span *ngIf=\"userform.hasError('specialSymbol','releaseReason')\">删除原因不支持特殊字符！</span>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 btn-return\">\r\n                <!-- <button pButton type=\"button\" label=\"保存\" (click)=\"doSave(1)\" [disabled]=\"!userform.valid\"></button> -->\r\n                <button pButton type=\"button\" label=\"提交\" (click)=\"doSave(2)\" [disabled]=\"!userform.valid == !Ashplacing\"></button>\r\n                <button pButton type=\"button\" label=\"返回\" (click)=\"doReset()\"></button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<tzb-loading [blocked]=\"loadingShow.flag\"></tzb-loading>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-update/custom-manage-update.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-update/custom-manage-update.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-deal {\n  max-height: 650px !important; }\n  .my-deal .btn-return {\n    margin-top: 10px !important;\n    text-align: center; }\n  .my-deal .text-right {\n    text-align: right; }\n  .my-deal .ui-g-12 {\n    margin-top: -12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLW1hbmFnZS9jdXN0b20tbWFuYWdlLXVwZGF0ZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1saXN0LW1hbmFnZVxcY3VzdG9tLW1hbmFnZVxcY3VzdG9tLW1hbmFnZS11cGRhdGVcXGN1c3RvbS1tYW5hZ2UtdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQTRCLEVBQUE7RUFEaEM7SUFHUSwyQkFBMkI7SUFDM0Isa0JBQWtCLEVBQUE7RUFKMUI7SUFPUSxpQkFBaUIsRUFBQTtFQVB6QjtJQVVRLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLW1hbmFnZS9jdXN0b20tbWFuYWdlLXVwZGF0ZS9jdXN0b20tbWFuYWdlLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1kZWFsIHtcclxuICAgIG1heC1oZWlnaHQ6IDY1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAuYnRuLXJldHVybiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0LXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC51aS1nLTEye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-update/custom-manage-update.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-update/custom-manage-update.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: CustomManageUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomManageUpdate", function() { return CustomManageUpdate; });
/* harmony import */ var app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomManageUpdate = /** @class */ (function () {
    function CustomManageUpdate(httpService, messageService, commonFunc, commfunc, fb) {
        this.httpService = httpService;
        this.messageService = messageService;
        this.commonFunc = commonFunc;
        this.commfunc = commfunc;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadingShow = { flag: false }; // loading框
        this.msgs = [];
        this.adjust = false; //调整
        this.efficacy = false; //失效
        this.delete = false; //删除
        this.bank = false; //本行
        this.bankown = false; //非本行
        this.jbxx = []; //名单码值
        this.reList = []; //类型表
        this.Ashplacing = false;
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        this.userName = chName.userName;
        this.orgName = chName.orgName;
        this.userform = fb.group({
            isMybankCust: [''],
            customerType: [''],
            partyId: [''],
            custName: [''],
            statusId: [''],
            listTypeOne: [''],
            listTypeTwo: [''],
            inListType: [''],
            classifyId: [''],
            toListReason: [''],
            listTypeId: [''],
            relatedListTypeIdName: [''],
            idType: [''],
            idNo: [''],
            cellphone: [''],
            contactAddress: [''],
            releaseReason: [''],
            registerUser: [''],
            registerOrg: [''],
            blackListId: [''],
            relatedListTaskId: [''],
            registerUserName: [''],
            registerOrgName: [""],
        });
    }
    CustomManageUpdate.prototype.ngOnInit = function () {
        this.queryOrgName();
        this.codeValues(); //调用方法，获取全部码值
        this.isMybankCustList = this.code['isMybankCust'];
        this.customerTypeList = this.code['customerType'];
        this.statusIdList = this.code['statusId'];
        this.inListTypeList = this.code['inListType'];
        this.idTypeList = this.code['CERT_TYPE'];
        if (this.modifyValue == '1') { //调整页面
            this.adjust = true;
            this.efficacy = false;
            this.delete = false;
        }
        else if (this.modifyValue == '2') { //失效页面
            this.adjust = false;
            this.efficacy = true;
            this.delete = false;
        }
        else if (this.modifyValue == '3') { //删除页面
            this.adjust = false;
            this.efficacy = false;
            this.delete = true;
        }
        if (this.inValue) {
            console.log(this.inValue);
            this.userform.get('isMybankCust').setValue(this.inValue.isMybankCust);
            this.userform.get('customerType').setValue(this.inValue.customerType);
            this.userform.get('partyId').setValue(this.inValue.partyId);
            this.userform.get('custName').setValue(this.inValue.custName);
            this.userform.get('statusId').setValue(this.inValue.statusId);
            this.userform.get('listTypeOne').setValue(this.inValue.listTypeOne);
            this.userform.get('listTypeTwo').setValue(this.inValue.listTypeTwo);
            this.userform.get('inListType').setValue(this.inValue.inListType);
            this.userform.get('classifyId').setValue(this.inValue.classifyId);
            this.userform.get('toListReason').setValue(this.inValue.toListReason);
            this.userform.get('listTypeId').setValue(this.inValue.listTypeId);
            this.userform.get('registerUser').setValue(this.inValue.registerUser);
            this.userform.get('registerOrg').setValue(this.inValue.registerOrg);
            this.userform.get('blackListId').setValue(this.inValue.blackListId);
            this.userform.get('relatedListTaskId').setValue(this.inValue.listTaskId);
            this.userform.get('idType').setValue(this.inValue.idType);
            this.userform.get('idNo').setValue(this.inValue.idNo);
        }
        this.isMybank();
        this.query();
        for (var e = 0; e < 3; e++) {
            this.listType(e);
        }
    };
    CustomManageUpdate.prototype.queryOrgName = function () {
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        for (var i = 0; i < chName.orgList.length; i++) {
            if (this.user.extParam.orgId == chName.orgList[i].orgId) {
                this.orgName = chName.orgList[i].orgName;
            }
        }
        console.log(this.orgName, "111111111");
    };
    //码值
    CustomManageUpdate.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //是否我行客户
    CustomManageUpdate.prototype.isMybank = function () {
        if (this.userform.value.isMybankCust == 'Y') {
            this.bank = true;
            this.bankown = false;
        }
        else if (this.userform.value.isMybankCust == 'N') {
            this.bank = false;
            this.bankown = true;
            this.userform.get('idType').setValue(this.inValue.idType);
            this.userform.get('idNo').setValue(this.inValue.idNo);
            this.userform.get('cellphone').setValue(this.inValue.cellphone);
            this.userform.get('contactAddress').setValue(this.inValue.contactAddress);
        }
    };
    //查询
    CustomManageUpdate.prototype.query = function () {
        var _this = this;
        var param = {};
        param['listTypeHierarchy'] = 1;
        this.httpService.selectBlackListType(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var list = data.returnList;
                list.forEach(function (element) {
                    var obj = {};
                    obj['label'] = element.listTypeName;
                    obj['value'] = element.listTypeId;
                    _this.jbxx.push(obj);
                });
                _this.jbxx.unshift({ label: '请选择', value: '' });
                _this.listTypeOneList = _this.jbxx;
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
    //名单联动
    CustomManageUpdate.prototype.listType = function (i) {
        var _this = this;
        if (i == '1') {
            var param = {};
            param['listTypeHierarchy'] = 2;
            param['parentListTypeId'] = this.inValue.listTypeOne;
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var list = data.returnList;
                    _this.jbxx = [];
                    list.forEach(function (element) {
                        var obj = {};
                        obj['label'] = element.listTypeName;
                        obj['value'] = element.listTypeId;
                        _this.jbxx.push(obj);
                    });
                    _this.jbxx.unshift({ label: '请选择', value: '' });
                    _this.listTypeTwoList = _this.jbxx;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            });
        }
        else if (i == '2') {
            var param = {};
            param['listTypeHierarchy'] = 3;
            param['parentListTypeId'] = this.inValue.listTypeTwo;
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.reList = data.returnList;
                    var list = data.returnList;
                    _this.jbxx = [];
                    list.forEach(function (element) {
                        var obj = {};
                        obj['label'] = element.listTypeName;
                        obj['value'] = element.listTypeId;
                        _this.jbxx.push(obj);
                    });
                    _this.jbxx.unshift({ label: '请选择', value: '' });
                    _this.listTypeIdList = _this.jbxx;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            });
        }
        else {
        }
    };
    // 保存/提交  modifyValue 1- 等级调整   2-失效申请 3- 出库申请
    CustomManageUpdate.prototype.doSave = function (i) {
        var _this = this;
        if (this.modifyValue == '1') { //调整
            if (this.userform.value.relatedListTypeIdName != this.userform.value.listTypeId) {
                if (i == '1') { //调整保存
                    var param = Object.assign({}, this.userform.value);
                    // param['toListReason'] = this.userform.value.releaseReason;
                    param['listTypeId'] = this.userform.value.relatedListTypeIdName;
                    param['approvalStatus'] = 'AA';
                    param['operationType'] = '1005';
                    param['blackListId'] = this.userform.value.blackListId;
                    param['registerUserName'] = this.userName;
                    param['registerOrgName'] = this.orgName;
                    param['registerOrg'] = this.user.extParam.orgId;
                    param['registerUser'] = this.user.userId;
                    console.log(param, "22222222222222222");
                    this.Ashplacing = true;
                    this.httpService.superListOperation(param).subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
                            // this.outValue.emit(false);
                            _this.msgs = [];
                            _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                            setTimeout(function () {
                                _this.outValue.emit(false);
                            }, 1000);
                        }
                        else {
                            _this.Ashplacing = false;
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                        }
                    }, function (error) {
                        _this.Ashplacing = false;
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                    });
                }
                if (i == '2') { //调整提交
                    var param = Object.assign({}, this.userform.value);
                    // param['toListReason'] = this.userform.value.releaseReason;
                    param['listTypeId'] = this.userform.value.relatedListTypeIdName;
                    param['approvalStatus'] = '0';
                    param['operationType'] = '1005';
                    param['blackListId'] = this.userform.value.blackListId;
                    param['registerUserName'] = this.userName;
                    param['registerOrgName'] = this.orgName;
                    param['registerOrg'] = this.user.extParam.orgId;
                    param['registerUser'] = this.user.userId;
                    this.Ashplacing = true;
                    this.httpService.superListOperation(param).subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
                            // this.outValue.emit(false);
                            _this.msgs = [];
                            _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                            setTimeout(function () {
                                _this.outValue.emit(false);
                            }, 1000);
                        }
                        else {
                            _this.Ashplacing = false;
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                        }
                    }, function (error) {
                        _this.Ashplacing = false;
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                    });
                }
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '风险管控等级与原等级一样，请重新调整！' });
            }
        }
        else if (this.modifyValue == '2') { //失效
            if (i == '1') { //失效保存
                var param = Object.assign({}, this.userform.value);
                // param['toListReason'] = this.userform.value.releaseReason;
                param['approvalStatus'] = 'AA';
                param['operationType'] = '1006';
                param['blackListId'] = this.userform.value.blackListId;
                param['registerUserName'] = this.userName;
                param['registerOrgName'] = this.orgName;
                param['registerOrg'] = this.user.extParam.orgId;
                param['registerUser'] = this.user.userId;
                this.Ashplacing = true;
                this.httpService.superListOperation(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        // this.outValue.emit(false);
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        setTimeout(function () {
                            _this.outValue.emit(false);
                        }, 1000);
                    }
                    else {
                        _this.Ashplacing = false;
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.Ashplacing = false;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                });
            }
            if (i == '2') { //失效提交
                var param = Object.assign({}, this.userform.value);
                // param['toListReason'] = this.userform.value.releaseReason;
                param['operationType'] = '1006';
                param['approvalStatus'] = '0';
                param['registerUserName'] = this.userName;
                param['registerOrgName'] = this.orgName;
                param['registerOrg'] = this.user.extParam.orgId;
                param['registerUser'] = this.user.userId;
                param['blackListId'] = this.userform.value.blackListId;
                this.Ashplacing = true;
                this.httpService.superListOperation(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        // this.outValue.emit(false);
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        setTimeout(function () {
                            _this.outValue.emit(false);
                        }, 1000);
                    }
                    else {
                        _this.Ashplacing = false;
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.Ashplacing = false;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                });
            }
        }
        else if (this.modifyValue == '3') { //出库
            if (i == '1') { //出库保存
                var param = Object.assign({}, this.userform.value);
                // param['toListReason'] = this.userform.value.releaseReason;
                param['operationType'] = '1003';
                param['approvalStatus'] = 'AA';
                param['registerUserName'] = this.userName;
                param['registerOrgName'] = this.orgName;
                param['registerOrg'] = this.user.extParam.orgId;
                param['registerUser'] = this.user.userId;
                param['blackListId'] = this.userform.value.blackListId;
                this.Ashplacing = true;
                this.httpService.superListOperation(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        setTimeout(function () {
                            _this.outValue.emit(false);
                        }, 1000);
                        // this.outValue.emit(false);
                    }
                    else {
                        _this.Ashplacing = false;
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.Ashplacing = false;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                });
            }
            if (i == '2') { //出库提交
                var param = Object.assign({}, this.userform.value);
                // param['toListReason'] = this.userform.value.releaseReason;
                param['operationType'] = '1003';
                param['approvalStatus'] = '0';
                param['registerUserName'] = this.userName;
                param['registerOrgName'] = this.orgName;
                param['registerOrg'] = this.user.extParam.orgId;
                param['registerUser'] = this.user.userId;
                param['blackListId'] = this.userform.value.blackListId;
                this.Ashplacing = true;
                this.httpService.superListOperation(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        // this.outValue.emit(false);
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        setTimeout(function () {
                            _this.outValue.emit(false);
                        }, 1000);
                    }
                    else {
                        _this.Ashplacing = false;
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.Ashplacing = false;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                });
            }
        }
    };
    // 返回
    CustomManageUpdate.prototype.doReset = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", Object)
    ], CustomManageUpdate.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CustomManageUpdate.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], CustomManageUpdate.prototype, "modifyValue", void 0);
    CustomManageUpdate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'custom-manage-update',
            template: __webpack_require__(/*! ./custom-manage-update.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-update/custom-manage-update.component.html"),
            styles: [__webpack_require__(/*! ./custom-manage-update.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage-update/custom-manage-update.component.scss")],
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_0__["CusListManageHttpService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__["Customtools"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CustomManageUpdate);
    return CustomManageUpdate;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 main_part\">\r\n    <div class=\"ui-g-10\" style=\"margin:0 8.3333%;\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g-4\">\r\n                <div class=\"ui-g-5 tit\">客户号:</div>\r\n                <div class=\"ui-g-7\">\r\n                    <!-- <div class=\"queryinputbtn\">\r\n                        <input type=\"text\" class=\"queryinputOrg\" pInputText disabled formControlName=\"partyId\" />\r\n                        <div (click)=\"perTreeShow()\" class=\"clickspan\">\r\n                            <a class=\"a-hand\">\r\n                                <span>...</span>\r\n                            </a>\r\n                        </div>\r\n                    </div> -->\r\n                    <input type=\"text\" placeholder=\"请输入10位客户号\" maxlength=\"10\" pInputText formControlName=\"partyId\">\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['partyId'].valid&&userform.controls['partyId'].dirty\">\r\n                        <span *ngIf=\"userform.hasError('maxlength','partyId')\">客户号不能超过10位!</span>\r\n                        <span *ngIf=\"userform.hasError('checkNumber','partyId')\">客户号只能为数字类型！</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <div class=\"ui-g-5 tit\">客户名称:</div>\r\n                <div class=\"ui-g-7\">\r\n                    <!-- <input disabled pInputText formControlName=\"custName\"> -->\r\n                    <input type=\"text\" pInputText formControlName=\"custName\">\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['custName'].valid&&userform.controls['custName'].dirty\">\r\n                        <span *ngIf=\"userform.hasError('maxlength','custName')\">客户名称不能超过100位!</span>\r\n                        <span *ngIf=\"userform.hasError('specialSymbol','custName')\">客户名称不支持特殊字符！</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <div class=\"ui-g-5 tit\">证件号码:</div>\r\n                <div class=\"ui-g-7\">\r\n                    <input type=\"text\" pInputText formControlName=\"idNo\">\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['idNo'].valid&&userform.controls['idNo'].dirty\">\r\n                        <span *ngIf=\"userform.hasError('maxlength','idNo')\">证件号码不能超过32位!</span>\r\n                        <span *ngIf=\"userform.value.idNo!=null&&userform.value.idNo!=''&&userform.hasError('checkCard','idNo')\">证件号码输入有误!</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </form>\r\n        <div class=\"ui-g-10\" style=\"display:flex;flex-direction: row;align-items: center\">\r\n            <div class=\"ui-g-3 tit\" style=\"width:16%!important;\">名单类别:</div>\r\n            <div class=\"ui-g-9\" style=\"padding:0!important;\">\r\n                <div class=\"ui-g-4\">\r\n                    <p-dropdown [options]=\"fastlistbz\" (onChange)=\"nextlistbox($event)\" [(ngModel)]=\"listTypeOne\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <p-dropdown [options]=\"nextlistbz\" (onChange)=\"nextlistboxs($event)\" [(ngModel)]=\"listTypeTwo\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <p-dropdown [options]=\"nextlistbzs\" [(ngModel)]=\"listTypeId\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div style=\"margin:50px 0 25px 0;\" class=\"ui-g-12 btn\">\r\n        <button pButton label=\"查询\" (click)=\"query()\"></button>\r\n        <button pButton label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <button pButton label=\"入库申请\" class=\"iscolor\" (click)=\"add()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\" id='manageTable'>\r\n        <p-dataTable [value]=\"dataList\" [emptyMessage]='tabMesg' [scrollable]=\"true\">\r\n            <p-column header=\"序号\" [style]=\"{'width':'50px'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span>{{ri+1}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngFor=\"let item of tableHead\" [header]=\"item.label\" [field]=\"item.value\" [style]=\"{width:item.wth}\">\r\n                <ng-template let-col=\"rowData\" pTemplate=\"body\" *ngIf=\"item.value=='listTypeName'\">\r\n                    <span>{{col.listTypeName}}</span>\r\n                    <!-- <a class=\"riskRangeClass\"  *ngIf=\"col.adjustmentNum!='0'\" (click)=\"riskNumber(col)\">[{{col.adjustmentNum}}]</a> -->\r\n                    <!-- <span class=\"riskRangeClass\"  *ngIf=\"col.adjustmentNum!='0'\" (click)=\"riskNumber(col)\">{{col.adjustmentNum}}</span> -->\r\n                </ng-template>\r\n                <ng-template let-col=\"rowData\" pTemplate=\"body\" *ngIf=\"item.value=='inListType'\">\r\n                    <span>{{col.inListType | codeValuePie:inListTypeList}}</span>\r\n                </ng-template>\r\n                <ng-template let-col=\"rowData\" pTemplate=\"body\" *ngIf=\"item.value=='statusId'\">\r\n                    <span>{{col.statusId | codeValuePie:statusIdList}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"操作\" [style]=\"{'width':'180px'}\">\r\n                <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n                    <span class='imgOrFont' (click)=\"modify(col,1)\" *ngIf=\"col.operateFlag&&permissionCheck('SID00053_P001_01_05')\">\r\n                        <span class=\"icon iconfont tzbicon-dengji img_display\"></span>\r\n                        <span class=\"img_no_display\">等级调整</span>\r\n                    </span>\r\n                    <span class='imgOrFont' (click)=\"modify(col,2)\" *ngIf=\"col.operateFlag&&permissionCheck('SID00053_P001_01_06')\">\r\n                        <span class=\"icon iconfont tzbicon-shixiao img_display\"></span>\r\n                        <span class=\"img_no_display\">失效申请</span>\r\n                    </span>\r\n                    <span class='imgOrFont' (click)=\"modify(col,3)\" *ngIf=\"col.dataFlag&&permissionCheck('SID00053_P001_01_04')\">\r\n                        <span class=\"icon iconfont tzbicon-chuku img_display\"></span>\r\n                        <span class=\"img_no_display\">出库申请</span>\r\n                    </span>\r\n                    <span (click)=\"detail(col)\" class=\"tabelDetailIco\">详情</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator rows={{pageSize}} [first]=\"first\" totalRecords={{totalNum}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <button pButton label=\"批量入库申请\" (click)=\"batch(1)\"></button>\r\n        <button pButton label=\"批量出库申请\" (click)=\"batch(2)\"></button>\r\n    </div>\r\n</div>\r\n<!-- 客户查询 -->\r\n<p-dialog *ngIf=\"discustom\" header=\"客户查询\" [(visible)]=\"discustom\" modal=\"modal\">\r\n    <app-customer-list-center (outValue)=\"getMsg($event)\"></app-customer-list-center>\r\n</p-dialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<tzb-loading [blocked]=\"loadingShow.flag\"></tzb-loading>\r\n<!-- 模态框 新增-->\r\n<p-dialog #dialog [(visible)]=\"display\" *ngIf=\"display\" modal=\"modal\" class=\"my-cust-contactf\">\r\n    <p-header>\r\n        {{addUpHeader}}\r\n    </p-header>\r\n    <custom-manage-add *ngIf=\"showModel=='1'\" (outValue)=\"addCall($event)\"></custom-manage-add>\r\n    <custom-manage-update *ngIf=\"showModel=='2'\" [inValue]=\"inValue\" [modifyValue]=\"modifyValue\" (outValue)=\"updateCall($event)\"></custom-manage-update>\r\n    <custom-manage-batch *ngIf=\"showModel=='3'\" [inValue]=\"inValue\" (outValue)=\"batchCall($event)\"></custom-manage-batch>\r\n    <custom-manage-detail *ngIf=\"showModel=='4'\" [inValue]=\"inValue\" (outValue)=\"detailCall($event)\"></custom-manage-detail>\r\n</p-dialog>\r\n<p-dialog [(visible)]=\"riskdisplay\" *ngIf=\"riskdisplay\" modal=\"modal\" class=\"cooperationDirection\">\r\n    <p-header>\r\n        调整历史查询\r\n    </p-header>\r\n    <div class=\"ui-g-12 base-table\" style=\"overflow-x:scroll;width:100%;text-align:center;margin-top:-10px;\">\r\n        <p-dataTable [value]=\"riskList\" class=\"table\" [emptyMessage]='tabMesg'>\r\n            <p-column field=\"partyId\" header=\"客户号\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"relatedListTypeIdName\" header=\"调整前风险管控等级\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"listTypeName\" header=\"调整后风险管控等级\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"toListReason\" header=\"调整原因\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"registerUserName\" header=\"经办人\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"registerTime\" header=\"经办日期\" [style]=\"{'width':'100px'}\"></p-column>\r\n        </p-dataTable>\r\n    </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main_part {\n  background: #fff; }\n  .main_part .tit {\n    text-align: right; }\n  .main_part .btn {\n    text-align: center; }\n  .main_part .pd4 {\n    padding: 6px 0 !important; }\n  .main_part input[pInputText] {\n    min-width: 80px !important; }\n  .main_part .queryinputbtn {\n    float: left;\n    display: flex;\n    width: 100%;\n    position: relative;\n    cursor: pointer; }\n  .main_part .queryinputbtn .queryinputOrg {\n      border-right: none;\n      border-radius: 3px 0 0 3px;\n      width: 85% !important;\n      min-width: 69px !important; }\n  .main_part .queryinputbtn .clickspan {\n      width: 14%;\n      height: 22px;\n      cursor: pointer; }\n  .main_part .iscolor {\n    background: #ffc900;\n    float: right; }\n  .ui-g {\n  padding-bottom: 3px; }\n  .table {\n  text-align: center; }\n  .text-right {\n  text-align: right; }\n  .contactCss {\n  margin-top: -14px; }\n  .contactCsstop {\n  margin-top: 10px; }\n  .btn-add {\n  text-align: right; }\n  :host /deep/ .contactPropdowna .ui-dropdown {\n  width: 50% !important;\n  min-width: 284px !important; }\n  :host /deep/ .contactThemdowna .ui-dropdown {\n  width: 24.6% !important;\n  min-width: 139px !important; }\n  .trackcontactInput {\n  width: 50% !important;\n  min-width: 284px !important; }\n  :host /deep/ .my-cust-contactf .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n  :host/deep/ .my-cust-contactf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n  :host /deep/ .cooperationDirection .ui-dialog.ui-shadow {\n  width: 70% !important;\n  height: 90% !important; }\n  :host/deep/ .cooperationDirection .ui-dialog .ui-dialog-content {\n  height: 90%; }\n  .org-name {\n  display: flex; }\n  :host/deep/ .contact-calendar .ui-calendar {\n  width: 23.2%; }\n  .iconfont {\n  font-size: 20px;\n  color: #19b0c8; }\n  .imgOrFont {\n  margin: 0 5px; }\n  .imgOrFont .img_no_display {\n    display: none; }\n  .imgOrFont:hover .img_no_display {\n    display: inline-block;\n    color: #0094D2;\n    cursor: pointer;\n    font-weight: bold;\n    padding: 0px !important; }\n  .imgOrFont:hover .img_display {\n    display: none; }\n  @media screen and (max-width: 1280px) {\n  :host/deep/ .contact-calendar .ui-calendar {\n    width: 30%; }\n  :host /deep/ .contactPropdowna .ui-dropdown {\n    width: 76% !important; }\n  :host /deep/ .contactThemdowna .ui-dropdown {\n    width: 36% !important; }\n  .trackcontactInput {\n    width: 76% !important; } }\n  .riskRangeClass {\n  background: #FF5151;\n  border-radius: 5px;\n  color: white;\n  cursor: pointer; }\n  :host/deep/ #blackTable .ui-datatable .ui-datatable-data > tr > td > span {\n  display: flex;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLW1hbmFnZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1saXN0LW1hbmFnZVxcY3VzdG9tLW1hbmFnZVxcY3VzdG9tLW1hbmFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBR1EsaUJBQWlCLEVBQUE7RUFIekI7SUFNUSxrQkFBa0IsRUFBQTtFQU4xQjtJQVNRLHlCQUF5QixFQUFBO0VBVGpDO0lBWVEsMEJBQTBCLEVBQUE7RUFabEM7SUFlUSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZSxFQUFBO0VBbkJ2QjtNQXFCWSxrQkFBa0I7TUFDbEIsMEJBQTBCO01BQzFCLHFCQUFxQjtNQUNyQiwwQkFBMEIsRUFBQTtFQXhCdEM7TUEyQlksVUFBVTtNQUNWLFlBQVk7TUFDWixlQUFlLEVBQUE7RUE3QjNCO0lBaUNRLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7RUFHcEI7RUFDSSxtQkFBbUIsRUFBQTtFQUV2QjtFQUNJLGtCQUFrQixFQUFBO0VBRXRCO0VBQ0ksaUJBQWlCLEVBQUE7RUFFckI7RUFDSSxpQkFBaUIsRUFBQTtFQUVyQjtFQUNJLGdCQUFnQixFQUFBO0VBRXBCO0VBQ0ksaUJBQWlCLEVBQUE7RUFFckI7RUFDSSxxQkFBcUI7RUFDckIsMkJBQTJCLEVBQUE7RUFFL0I7RUFDSSx1QkFBdUI7RUFDdkIsMkJBQTJCLEVBQUE7RUFFL0I7RUFDSSxxQkFBcUI7RUFDckIsMkJBQTJCLEVBQUE7RUFFL0I7RUFDSSx1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7RUFFMUI7RUFDSSxXQUFXLEVBQUE7RUFFZjtFQUNJLHFCQUFxQjtFQUNyQixzQkFBc0IsRUFBQTtFQUUxQjtFQUNJLFdBQVcsRUFBQTtFQUVmO0VBQ0ksYUFBYSxFQUFBO0VBRWpCO0VBQ0ksWUFBWSxFQUFBO0VBRWhCO0VBQ0ksZUFBZTtFQUNmLGNBQWMsRUFBQTtFQUVsQjtFQUNJLGFBQWEsRUFBQTtFQURqQjtJQUdRLGFBQWEsRUFBQTtFQUhyQjtJQU9ZLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1QkFBdUIsRUFBQTtFQVhuQztJQWNZLGFBQWEsRUFBQTtFQUt6QjtFQUVLO0lBQ0csVUFBVSxFQUFBO0VBRWI7SUFDRyxxQkFBcUIsRUFBQTtFQUV4QjtJQUNHLHFCQUFxQixFQUFBO0VBRXpCO0lBQ0kscUJBQXFCLEVBQUEsRUFDeEI7RUFFTDtFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFJbEIsWUFBWTtFQUVaLGVBQWUsRUFBQTtFQUduQjtFQUNJLGFBQWE7RUFDYix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWxpc3QtbWFuYWdlL2N1c3RvbS1tYW5hZ2UvY3VzdG9tLW1hbmFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX3BhcnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLnRpdHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnBkNHtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW5wdXRbcElucHV0VGV4dF17XHJcbiAgICAgICAgbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucXVlcnlpbnB1dGJ0biB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIC5xdWVyeWlucHV0T3JnIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcclxuICAgICAgICAgICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDY5cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNsaWNrc3BhbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pc2NvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZjOTAwO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxufVxyXG4udWktZyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xyXG59XHJcbi50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmNvbnRhY3RDc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogLTE0cHg7XHJcbn1cclxuLmNvbnRhY3RDc3N0b3Age1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4uYnRuLWFkZCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG46aG9zdCAvZGVlcC8gLmNvbnRhY3RQcm9wZG93bmEgLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMjg0cHggIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gLmNvbnRhY3RUaGVtZG93bmEgLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAyNC42JSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAxMzlweCAhaW1wb3J0YW50O1xyXG59XHJcbi50cmFja2NvbnRhY3RJbnB1dCB7XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDI4NHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5teS1jdXN0LWNvbnRhY3RmIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdC9kZWVwLyAubXktY3VzdC1jb250YWN0ZiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG46aG9zdCAvZGVlcC8gLmNvb3BlcmF0aW9uRGlyZWN0aW9uIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLmNvb3BlcmF0aW9uRGlyZWN0aW9uIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcbi5vcmctbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbjpob3N0L2RlZXAvIC5jb250YWN0LWNhbGVuZGFyIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMjMuMiU7XHJcbn1cclxuLmljb25mb250IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMTliMGM4O1xyXG59XHJcbi5pbWdPckZvbnQge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIC5pbWdfbm9fZGlzcGxheSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5pbWdfbm9fZGlzcGxheSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgY29sb3I6ICMwMDk0RDI7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1nX2Rpc3BsYXkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgIC8vIOafpeivouiMg+WbtCDml6XmnJ/nu4Tku7ZcclxuICAgICA6aG9zdC9kZWVwLyAuY29udGFjdC1jYWxlbmRhciAudWktY2FsZW5kYXIge1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcbiAgICAgOmhvc3QgL2RlZXAvIC5jb250YWN0UHJvcGRvd25hIC51aS1kcm9wZG93biB7XHJcbiAgICAgICAgd2lkdGg6IDc2JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgIDpob3N0IC9kZWVwLyAuY29udGFjdFRoZW1kb3duYSAudWktZHJvcGRvd24ge1xyXG4gICAgICAgIHdpZHRoOiAzNiUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50cmFja2NvbnRhY3RJbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDc2JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5yaXNrUmFuZ2VDbGFzc3tcclxuICAgIGJhY2tncm91bmQ6ICNGRjUxNTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvLyB3aWR0aDogMjBweDtcclxuICAgIC8vIGhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8vIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG46aG9zdC9kZWVwLyAjYmxhY2tUYWJsZSAudWktZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtZGF0YT50cj50ZD5zcGFue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: customManage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customManage", function() { return customManage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/components/dialog/dialog */ "./node_modules/primeng/components/dialog/dialog.js");
/* harmony import */ var primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var customManage = /** @class */ (function () {
    function customManage(cusOperationHttpService, httpService, messageService, commonFunc, commfunc, fb) {
        this.cusOperationHttpService = cusOperationHttpService;
        this.httpService = httpService;
        this.messageService = messageService;
        this.commonFunc = commonFunc;
        this.commfunc = commfunc;
        this.fb = fb;
        this.msgs = [];
        this.loadingShow = { flag: false }; // loading框
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["tableMessage"]; //表格中无数据时显示的内容
        this.first = 0; //分页控制
        this.pageNum = 1; //当前页数
        this.pageSize = 10; //每页条数
        this.dataList = [];
        this.riskList = [];
        this.display = false; //模态框
        this.riskdisplay = false; //模态框
        this.inValue = []; //调整/失效/删除/批量出入库传参
        this.cellphoneList = []; //号码列表
        this.fastlistbz = [{ label: "请选择", value: "" }];
        this.nextlistbz = [{ label: "请选择", value: "" }];
        this.nextlistbzs = [{ label: "请选择", value: "" }];
        this.tableHead = [{
                label: '客户号', value: 'partyId', wth: '100px'
            }, {
                label: '客户名称', value: 'custName', wth: '80px'
            }, {
                label: '证件号码', value: 'idNo', wth: '180px'
            }, {
                label: '一级名单', value: 'listTypeOneName', wth: '140px'
            }, {
                label: '二级名单', value: 'listTypeTwoName', wth: '140px'
            }, {
                label: '风险管控等级', value: 'listTypeName', wth: '120px'
            },
            // {
            //     label: '录入原因', value: 'toListReason', wth: '200px'
            // }, 
            {
                label: '生成日期', value: 'registerTime', wth: '120px'
            }, {
                label: '录入方式', value: 'inListType', wth: '80px'
            }, {
                label: '录入机构', value: 'registerOrgName', wth: '150px'
            }, {
                label: '主联系人', value: 'mainUserName', wth: '100px'
            }, {
                label: '主联系人机构', value: 'mainOrgName', wth: '120px'
            }, {
                label: '状态', value: 'statusId', wth: '50px'
            }];
        this.userform = fb.group({
            partyId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["checkNumber"]]],
            custName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["specialSymbol"]]],
            // idNo: ['', [Validators.maxLength(32), checkNumber]],//证件号码非数校验
            idNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["checkCard"]]],
        });
    }
    customManage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.dataList = [];
        });
        this.codeValues(); //调用方法，获取全部码值
        this.idTypeList = this.code['CERT_TYPE'];
        this.statusIdList = this.code['statusId'];
        this.inListTypeList = this.code['inListType'];
        this.fastlistbox();
    };
    // key: boolean = false;//现行判断该客户号客户名称存不存在
    //客户号事件
    // partydetail() {
    //     if (this.userform.value.partyId) {
    //         const param = {};
    //         param['custNo'] = this.userform.value.partyId;
    //         this.httpService.selectCustBriefInfo(param).subscribe(data => {
    //             if (data.returnCode.code == 'success') {
    //                 this.userform.get('custName').setValue(data.custName);
    //             } else {
    //                 this.msgs = [];
    //                 this.msgs.push({ severity: 'error', summary: '提示', detail: '该客户号不存在!' });
    //             }
    //         }, err => {
    //             this.msgs = [];
    //             this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
    //         });
    //     }
    // }
    customManage.prototype.fastlistbox = function () {
        var _this = this;
        this.nextlistbz = [{ label: "请选择", value: "" }];
        this.nextlistbzs = [{ label: "请选择", value: "" }];
        var pams = {
            listTypeHierarchy: 1,
        };
        this.cusOperationHttpService.selectBlackListType(pams).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.returnList.forEach(function (item) {
                    _this.fastlistbz.push({ label: item.listTypeName, value: item.listTypeId });
                });
            }
        });
    };
    //nextlistbox 二级名单下拉框
    customManage.prototype.nextlistbox = function (e) {
        var _this = this;
        this.nextlistbz = [{ label: "请选择", value: "" }];
        this.nextlistbzs = [{ label: "请选择", value: "" }];
        var pams = {
            parentListTypeId: e.value,
            listTypeHierarchy: 2,
        };
        this.cusOperationHttpService.selectBlackListType(pams).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.returnList.forEach(function (item) {
                    _this.nextlistbz.push({ label: item.listTypeName, value: item.listTypeId });
                });
            }
        });
    };
    //nextlistboxs 三级级名单下拉框
    customManage.prototype.nextlistboxs = function (t) {
        var _this = this;
        this.nextlistbzs = [{ label: "请选择", value: "" }];
        var pams = {
            parentListTypeId: t.value,
            listTypeHierarchy: 3,
        };
        this.cusOperationHttpService.selectBlackListType(pams).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.returnList.forEach(function (item) {
                    _this.nextlistbzs.push({ label: item.listTypeName, value: item.listTypeId });
                });
            }
        });
    };
    //查询
    customManage.prototype.query = function () {
        if (!this.userform.value.partyId && !this.userform.value.custName && !this.userform.value.idNo && !this.listTypeOne && !this.listTypeTwo && !this.listTypeId) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入查询条件' });
            this.loadingShow.flag = false;
            return;
        }
        else if (this.userform.value.partyId || this.userform.value.custName || this.userform.value.idNo || this.listTypeOne || this.listTypeTwo || this.listTypeId) {
            this.pageSize = 10;
            this.pageNum = 1;
            this.first = 0;
            this.queryClick();
        }
    };
    //列表查询
    customManage.prototype.queryClick = function () {
        var _this = this;
        this.loadingShow.flag = true;
        var param = Object.assign({}, this.userform.value);
        param['pageSize'] = this.pageSize;
        param['pageNum'] = this.pageNum;
        param['registerUserName'] = JSON.parse(this.commfunc.getSessionDataCH('chName')).userName;
        param['listTypeOne'] = this.listTypeOne;
        param['listTypeTwo'] = this.listTypeTwo;
        param['listTypeId'] = this.listTypeId;
        param['operationType'] = '1007';
        this.httpService.selectBlackListInfoNew(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList = data.returnList ? data.returnList : [];
                _this.totalNum = data.total;
                _this.msgs = [];
                // this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.dataList = [];
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
            _this.loadingShow.flag = false;
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            _this.loadingShow.flag = false;
        });
    };
    // 新增
    customManage.prototype.add = function () {
        this.display = true;
        this.showModel = 1;
        this.addUpHeader = '入库申请';
    };
    // 新增回调
    customManage.prototype.addCall = function (param) {
        this.display = param;
        this.pageNum = 1;
        if (this.userform.value.partyId || this.userform.value.custName || this.userform.value.idNo || this.listTypeOne || this.listTypeTwo || this.listTypeId) {
            this.query();
        }
    };
    // 调整/失效/出库
    customManage.prototype.modify = function (col, i) {
        this.inValue = col;
        this.modifyValue = i;
        this.display = true;
        this.showModel = 2;
        if (i == '1') {
            this.addUpHeader = '风险管控等级调整';
        }
        else if (i == '2') {
            this.addUpHeader = '名单失效申请';
        }
        else if (i == '3') {
            this.addUpHeader = '出库申请';
        }
        if (this.userform.value.partyId || this.userform.value.custName || this.userform.value.idNo || this.listTypeOne || this.listTypeTwo || this.listTypeId) {
            this.query();
        }
    };
    // 调整/失效/出库回调
    customManage.prototype.updateCall = function (param) {
        this.display = param;
        this.pageNum = 1;
        if (this.userform.value.partyId || this.userform.value.custName || this.userform.value.idNo || this.listTypeOne || this.listTypeTwo || this.listTypeId) {
            this.query();
        }
    };
    // 详情
    customManage.prototype.detail = function (col, i) {
        this.display = true;
        this.inValue = col;
        this.showModel = 4;
        this.modifyValue = i;
        this.addUpHeader = '名单详情';
    };
    // 详情回调
    customManage.prototype.detailCall = function (param) {
        this.display = param;
    };
    //批量出入库
    customManage.prototype.batch = function (col) {
        this.inValue = col;
        this.display = true;
        this.showModel = 3;
        if (col == '1') {
            this.addUpHeader = '批量入库申请';
        }
        else if (col == '2') {
            this.addUpHeader = '批量出库申请';
        }
    };
    // 批量出入库回调
    customManage.prototype.batchCall = function (param) {
        this.display = param;
        this.pageNum = 1;
        if (this.userform.value.partyId || this.userform.value.custName || this.userform.value.idNo || this.listTypeOne || this.listTypeTwo || this.listTypeId) {
            this.query();
        }
    };
    //风险等级事件
    customManage.prototype.riskNumber = function (col) {
        var _this = this;
        this.riskdisplay = true;
        var param = {
            isMybankCust: col.isMybankCust,
            partyId: col.partyId,
            idNo: col.idNo,
            custName: col.custName,
            customerType: col.customerType,
            approvalStatus: '0',
            operationType: '1005',
        };
        this.httpService.selectListTaskInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.riskList = data.returnList ? data.returnList : [];
                _this.msgs = [];
                //  this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.riskList = [];
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    // 重置
    customManage.prototype.reset = function () {
        this.userform.get('partyId').setValue(null);
        this.userform.get('custName').setValue(null);
        this.userform.get('idNo').setValue(null);
        this.listTypeOne = "";
        this.listTypeTwo = "";
        this.listTypeId = "";
        this.dataList = [];
    };
    customManage.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = event.rows;
        this.pageNum = event.page + 1;
        this.first = event.first;
        if (!this.userform.value.partyId && !this.userform.value.custName && !this.userform.value.idNo && !this.listTypeOne && !this.listTypeTwo && !this.listTypeId) {
            this.dataList = [];
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入查询条件' });
        }
        else {
            this.loadingShow.flag = true;
            this.queryClick();
        }
    };
    // 客户查询弹框
    customManage.prototype.perTreeShow = function () {
        this.discustom = true;
    };
    // 客户查询关闭传值
    customManage.prototype.getMsg = function (e) {
        this.userform.get('partyId').setValue(e.custNo);
        this.userform.get('custName').setValue(e.custName);
        this.discustom = false;
    };
    //码值
    customManage.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //按钮权限
    customManage.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    customManage.prototype.cancelDialogShake = function () {
        if (this.dialog) {
            this.dialog.center = function () {
                var elementWidth = this.domHandler.getOuterWidth(this.containerViewChild.nativeElement);
                var elementHeight = this.domHandler.getOuterHeight(this.containerViewChild.nativeElement);
                if (elementWidth === 0 && elementHeight === 0) {
                    this.containerViewChild.nativeElement.style.visibility = 'hidden';
                    this.containerViewChild.nativeElement.style.display = 'block';
                    elementWidth = this.domHandler.getOuterWidth(this.containerViewChild.nativeElement);
                    elementHeight = this.domHandler.getOuterHeight(this.containerViewChild.nativeElement);
                    this.containerViewChild.nativeElement.style.display = 'none';
                    this.containerViewChild.nativeElement.style.visibility = 'visible';
                }
                var viewport = this.domHandler.getViewport();
                var x = Math.max(Math.ceil((viewport.width - elementWidth)) / 2, 0);
                var y = Math.max(Math.ceil((viewport.height - elementHeight)) / 2, 0);
                // 解决抖动问题
                if (!this.containerViewChild.nativeElement.style.left ||
                    !this.containerViewChild.nativeElement.style.top ||
                    Math.abs(this.containerViewChild.nativeElement.style.left - x) > 5 ||
                    Math.abs(this.containerViewChild.nativeElement.style.top - y) > 5) {
                    this.containerViewChild.nativeElement.style.left = x + 'px';
                    this.containerViewChild.nativeElement.style.top = y + 'px';
                }
            };
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dialog'),
        __metadata("design:type", primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_8__["Dialog"])
    ], customManage.prototype, "dialog", void 0);
    customManage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-manage',
            template: __webpack_require__(/*! ./custom-manage.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage.component.html"),
            styles: [__webpack_require__(/*! ./custom-manage.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-manage/custom-manage.component.scss")],
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_6__["CusListManageHttpService"],
            app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_6__["CusListManageHttpService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_3__["Customtools"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], customManage);
    return customManage;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-detail/custom-mission-detail.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-detail/custom-mission-detail.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-deal\">\r\n    <div class=\"ui-g-12\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g\" *ngIf=\"inStock\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>操作类型:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.operationType | codeValuePie:operationTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>是否我行客户:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.isMybankCust | codeValuePie:isMybankCustList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bank\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"partyId\" disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>证件类型:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.idType | codeValuePie:idTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>证件号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"idNo\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>联系电话:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"cellphone\" disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>联系地址:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"contactAddress\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"inStock\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>一级名单分类:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"listTypeOneName\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>二级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"listTypeTwoName\" pInputText disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"inStock\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>风险管控等级:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\" *ngIf='adjust'>\r\n                        <input type=\"text\" formControlName=\"relatedListTypeIdName\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-4\" *ngIf='!adjust'>\r\n                        <input type=\"text\" formControlName=\"listTypeName\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>状态:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.statusId | codeValuePie:statusIdList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"inStock\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>分类编码:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"classifyId\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>录入方式:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.inListType | codeValuePie:inListTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"outStock\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>一级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"listTypeOneName\" pInputText disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"outStock\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>名单文件:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <button pButton type=\"button\" label=\"下载\" (click)=\"download()\"></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"outStock1\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>名单来源:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"sourceDes\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>录入方式:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.inListType | codeValuePie:inListTypeList}}\" [disabled]=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"!delete\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>录入原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"toListReason\" disabled></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"adjust\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>调整风险管控等级为:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"listTypeName\" pInputText disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"adjust\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>调整原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10  mart\">\r\n                    <textarea disabled rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"releaseReason\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"outStock\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办人:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerUserName\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办机构:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerOrgName\" pInputText disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"outStock\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办日期:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerTime\" pInputText disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"efficacy\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>失效原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10  mart\">\r\n                    <textarea disabled rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"releaseReason\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"delete\">\r\n                <div class=\"ui-g-2 text-right\" *ngIf=\"delete2\" >\r\n                    <label>出库原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-2 text-right\" *ngIf=\"!delete2\" >\r\n                    <label>删除原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10  mart\"  *ngIf=\"!delete2\" >\r\n                    <textarea disabled rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"releaseReason\"></textarea>\r\n                </div>\r\n                <div class=\"ui-g-10  mart\"   *ngIf=\"delete2\">\r\n                    <textarea disabled rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"toListReason\"></textarea>\r\n                </div>\r\n                \r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"lookkey\">\r\n        <header-title [Info]=\"'审批历史'\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12 table  base-table\" *ngIf=\"lookkey\">\r\n        <app-work-approve-detail [processId]=\"nowProcessId\"></app-work-approve-detail>\r\n    </div>\r\n    <div class=\"ui-g-12 btn-return\">\r\n        <button pButton type=\"button\" label=\"返回\" (click)=\"doReset()\"></button>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<tzb-loading [blocked]=\"loadingShow.flag\"></tzb-loading>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-detail/custom-mission-detail.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-detail/custom-mission-detail.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-deal {\n  max-height: 650px !important; }\n  .my-deal .btn-return {\n    margin-top: 10px !important;\n    text-align: center; }\n  .my-deal .text-right {\n    text-align: right; }\n  .my-deal .ui-g-12 {\n    margin-top: -12px; }\n  :host /deep/ .contact-track-f .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n  :host/deep/ .contact-track-f .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLW1pc3Npb24tbGlzdC9jdXN0b20tbWlzc2lvbi1kZXRhaWwvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tbGlzdC1tYW5hZ2VcXGN1c3RvbS1taXNzaW9uLWxpc3RcXGN1c3RvbS1taXNzaW9uLWRldGFpbFxcY3VzdG9tLW1pc3Npb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQTRCLEVBQUE7RUFEaEM7SUFHUSwyQkFBMkI7SUFDM0Isa0JBQWtCLEVBQUE7RUFKMUI7SUFPUSxpQkFBaUIsRUFBQTtFQVB6QjtJQVVRLGlCQUFpQixFQUFBO0VBR3pCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHNCQUFzQixFQUFBO0VBRTFCO0VBQ0ksc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1saXN0LW1hbmFnZS9jdXN0b20tbWlzc2lvbi1saXN0L2N1c3RvbS1taXNzaW9uLWRldGFpbC9jdXN0b20tbWlzc2lvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktZGVhbCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2NTBweCAhaW1wb3J0YW50O1xyXG4gICAgLmJ0bi1yZXR1cm4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dC1yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAudWktZy0xMntcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICAgIH1cclxufVxyXG46aG9zdCAvZGVlcC8gLmNvbnRhY3QtdHJhY2stZiAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLmNvbnRhY3QtdHJhY2stZiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-detail/custom-mission-detail.componetn.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-detail/custom-mission-detail.componetn.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: CustomMissionDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMissionDetail", function() { return CustomMissionDetail; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
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







var CustomMissionDetail = /** @class */ (function () {
    function CustomMissionDetail(httpService, messageService, commonFunc, commfunc, fb) {
        this.httpService = httpService;
        this.messageService = messageService;
        this.commonFunc = commonFunc;
        this.commfunc = commfunc;
        this.fb = fb;
        this.delete2 = false;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadingShow = { flag: false }; // loading框
        this.msgs = [];
        this.dataList = [];
        this.inStock = false; //单个客户
        this.outStock = false; //批量客户
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"]; // 下载
        this.bank = false; //本行
        this.bankown = false; //非本行
        this.adjust = false; //调整
        this.efficacy = false; //失效
        this.delete = false; //删除
        this.diskey = true;
        this.userform = fb.group({
            operationType: [''],
            isMybankCust: [''],
            partyId: [''],
            custName: [''],
            listTypeOneName: [''],
            listTypeTwoName: [''],
            listTypeName: [''],
            statusId: [''],
            classifyId: [''],
            inListType: [''],
            toListReason: [''],
            sourceDes: [''],
            registerUserName: [''],
            registerOrgName: [''],
            registerTime: [''],
            filePath: [''],
            fileName: [''],
            idType: [''],
            idNo: [''],
            cellphone: [''],
            contactAddress: [''],
            relatedListTypeIdName: [''],
            relatedlistTypeId: [''],
            releaseReason: ['']
        });
    }
    CustomMissionDetail.prototype.ngOnInit = function () {
        this.codeValues(); //调用方法，获取全部码值
        this.isMybankCustList = this.code['isMybankCust'];
        this.customerTypeList = this.code['customerType'];
        this.statusIdList = this.code['statusId'];
        this.inListTypeList = this.code['inListType'];
        this.operationTypeList = this.code['operation'];
        this.idTypeList = this.code['CERT_TYPE'];
        debugger;
        console.log(this.modifyValue.listTaskId, "this.modifyValue.listTaskId");
        if (this.modifyValue == '1') { //单人页面
            this.bank = true;
            this.inStock = true;
            this.outStock = false;
            this.isMybank();
            debugger;
        }
        else if (this.modifyValue == '2') { //批量页面
            this.bank = false;
            this.inStock = false;
            this.outStock = true;
            this.userform.get('sourceDes').setValue(this.inValue.sourceDes);
        }
        else if (this.modifyValue.listTaskId) {
            this.inStock = true;
            this.outStock = false;
            this.querySed();
        }
        ;
        if (this.inValue) {
            this.userform.get('operationType').setValue(this.inValue.operationType);
            this.userform.get('isMybankCust').setValue(this.inValue.isMybankCust);
            this.userform.get('partyId').setValue(this.inValue.partyId);
            this.userform.get('custName').setValue(this.inValue.custName);
            this.userform.get('listTypeOneName').setValue(this.inValue.listTypeOneName);
            this.userform.get('listTypeTwoName').setValue(this.inValue.listTypeTwoName);
            this.userform.get('listTypeName').setValue(this.inValue.listTypeName);
            this.userform.get('statusId').setValue(this.inValue.statusId);
            this.userform.get('classifyId').setValue(this.inValue.classifyId);
            this.userform.get('inListType').setValue(this.inValue.inListType);
            this.userform.get('toListReason').setValue(this.inValue.toListReason);
            this.userform.get('registerUserName').setValue(this.inValue.registerUserName);
            this.userform.get('registerOrgName').setValue(this.inValue.registerOrgName);
            this.userform.get('registerTime').setValue(this.inValue.registerTime);
            console.log(this.inValue.operationType);
            if (this.inValue.operationType == '1005') { //调整页面
                this.adjust = true;
                this.efficacy = false;
                this.delete = false;
                this.userform.get('relatedListTypeIdName').setValue(this.inValue.relatedListTypeIdName);
                this.userform.get('releaseReason').setValue(this.inValue.releaseReason);
            }
            else if (this.inValue.operationType == '1006') { //失效页面
                this.adjust = false;
                this.efficacy = true;
                this.delete = false;
                this.diskey = true;
                this.userform.get('releaseReason').setValue(this.inValue.releaseReason);
            }
            else if (this.inValue.operationType == '1003') { //出库页面
                this.adjust = false;
                this.efficacy = false;
                this.delete = true;
                this.diskey = true;
                this.userform.get('releaseReason').setValue(this.inValue.releaseReason);
            }
            else if (this.inValue.operationType == '1004') { //批量出库
                this.outStock1 = false;
                this.delete = true;
                this.delete2 = true;
                // alert("批量出库")
                this.userform.get('releaseReason').setValue(this.inValue.releaseReason);
            }
            else if (this.inValue.operationType == '1002') { //批量入库
                this.outStock1 = true;
                this.delete = false;
                // alert("批量入库")
                this.userform.get('releaseReason').setValue(this.inValue.releaseReason);
            }
        }
        debugger;
        console.log(this.inValue, "this.inValue", this.modifyValue.taskFlowId, "this.modifyValue");
        if (this.inValue.taskFlowId || this.modifyValue.taskFlowId) {
            this.nowProcessId = this.inValue.taskFlowId || this.modifyValue.taskFlowId;
            this.lookkey = true;
        }
        else if (this.modifyValue.listTaskId) {
            this.nowProcessId = this.modifyValue.listTaskId;
            this.lookkey = true;
        }
        else {
            this.lookkey = false;
        }
    };
    //码值
    CustomMissionDetail.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //是否我行客户
    CustomMissionDetail.prototype.isMybank = function () {
        if (this.inValue.isMybankCust == 'Y' || this.inValue.isMybankCust == '') {
            this.bank = true;
            this.bankown = false;
        }
        else if (this.inValue.isMybankCust == 'N') {
            this.bank = false;
            this.bankown = true;
            this.userform.get('idType').setValue(this.inValue.idType);
            this.userform.get('idNo').setValue(this.inValue.idNo);
            this.userform.get('cellphone').setValue(this.inValue.cellphone);
            this.userform.get('contactAddress').setValue(this.inValue.contactAddress);
        }
    };
    //查询-
    CustomMissionDetail.prototype.querySed = function () {
        var _this = this;
        var param = { listTaskId: this.modifyValue.listTaskId };
        this.httpService.selectListTaskInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList = data.returnList ? data.returnList : [];
                _this.userform.get('operationType').setValue(_this.dataList[0].operationType);
                _this.userform.get('isMybankCust').setValue(_this.dataList[0].isMybankCust);
                _this.userform.get('partyId').setValue(_this.dataList[0].partyId);
                _this.userform.get('custName').setValue(_this.dataList[0].custName);
                _this.userform.get('listTypeOneName').setValue(_this.dataList[0].listTypeOneName);
                _this.userform.get('listTypeTwoName').setValue(_this.dataList[0].listTypeTwoName);
                _this.userform.get('listTypeName').setValue(_this.dataList[0].listTypeName);
                _this.userform.get('statusId').setValue(_this.dataList[0].statusId);
                _this.userform.get('classifyId').setValue(_this.dataList[0].classifyId);
                _this.userform.get('inListType').setValue(_this.dataList[0].inListType);
                _this.userform.get('toListReason').setValue(_this.dataList[0].toListReason);
                _this.userform.get('registerUserName').setValue(_this.dataList[0].registerUserName);
                _this.userform.get('registerOrgName').setValue(_this.dataList[0].registerOrgName);
                _this.userform.get('registerTime').setValue(_this.dataList[0].registerTime);
                if (_this.dataList[0].operationType == '1005') { //调整页面
                    _this.adjust = true;
                    _this.efficacy = false;
                    _this.delete = false;
                    _this.userform.get('relatedListTypeIdName').setValue(_this.dataList[0].relatedListTypeIdName);
                    _this.userform.get('releaseReason').setValue(_this.dataList[0].releaseReason);
                }
                else if (_this.dataList[0].operationType == '1006') { //失效页面
                    _this.adjust = false;
                    _this.efficacy = true;
                    _this.delete = false;
                    _this.diskey = true;
                    _this.userform.get('releaseReason').setValue(_this.dataList[0].releaseReason);
                }
                else if (_this.dataList[0].operationType == '1003') { //出库页面
                    _this.adjust = false;
                    _this.efficacy = false;
                    _this.delete = true;
                    _this.diskey = true;
                    _this.userform.get('releaseReason').setValue(_this.dataList[0].releaseReason);
                    _this.outStock = false;
                }
                else if (_this.inValue.operationType == '1004') { //批量出库
                    _this.outStock1 = false;
                    _this.delete = true;
                    _this.userform.get('releaseReason').setValue(_this.dataList[0].releaseReason);
                }
                else if (_this.inValue.operationType == '1002') { //批量出库
                    _this.outStock1 = true;
                    _this.delete = false;
                    _this.userform.get('releaseReason').setValue(_this.dataList[0].releaseReason);
                }
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
    //下载模板
    CustomMissionDetail.prototype.download = function () {
        // let obj = this.inValue.filePath.lastIndexOf('/');
        // let fileName = this.inValue.filePath.substring(0, obj) + '/';
        // let filePath = this.inValue.filePath.substring(obj + 1);
        // window.open(this.DOWNLOAD + "?fileName=" + encodeURI(fileName) + "&filePath=" + filePath, "_self")
        var arr = this.inValue.filePath.split('/');
        var path = '';
        for (var j = 1; j < arr.length - 1; j++) {
            path += '/' + arr[j];
        }
        path = path + '/';
        var donwname = arr[arr.length - 1];
        open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(donwname) + "&fileUrl=" + path, '_blank');
    };
    // 返回
    CustomMissionDetail.prototype.doReset = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomMissionDetail.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomMissionDetail.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomMissionDetail.prototype, "modifyValue", void 0);
    CustomMissionDetail = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-mission-detail',
            template: __webpack_require__(/*! ./custom-mission-detail.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-detail/custom-mission-detail.component.html"),
            styles: [__webpack_require__(/*! ./custom-mission-detail.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-detail/custom-mission-detail.component.scss")],
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["CusListManageHttpService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__["Customtools"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CustomMissionDetail);
    return CustomMissionDetail;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-list.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g padding-zero module\">\r\n    <div class=\"ui-g-12 contactCss\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g-12 contactCsstop\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2\">\r\n                        <label></label>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-3\">\r\n                            <p-radioButton name=\"groupname1\" value=\"1\" label=\"单个客户管理\" formControlName=\"operaType\" (click)=\"singlebatch()\"></p-radioButton>\r\n                        </div>\r\n                        <div class=\"ui-g-3\">\r\n                            <p-radioButton name=\"groupname1\" value=\"2\" label=\"批量客户管理\" formControlName=\"operaType\" (click)=\"singlebatch()\"></p-radioButton>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 padding\">\r\n                <div class=\"ui-g-12 padding\">\r\n                    <div class=\"ui-g-4 padding\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <label>操作类型:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <p-dropdown [options]=\"operationTypeListD\" class=\"trackcontactPropdowna\" formControlName=\"operationType\" *ngIf=\"single\"></p-dropdown>\r\n                            <p-dropdown [options]=\"operationTypeListP\" class=\"trackcontactPropdowna\" formControlName=\"operationType\" *ngIf=\"batch\"></p-dropdown>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 padding\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <label>经办机构:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-6 position\">\r\n                            <input id=\"input\" class=\"contactTrackInput\" type=\"text\" pInputText formControlName=\"registerOrgName\" disabled>\r\n                            <div class=\"clickspan\" (click)=\"openTree('org')\">\r\n                                <a class=\"a-hand\">\r\n                                    <span>...</span>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 padding\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <label>经办人:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-6 position\">\r\n                            <input id=\"input\" class=\"contactTrackInput\" type=\"text\" pInputText formControlName=\"registerUserName\" disabled>\r\n                            <div class=\"clickspan\" (click)=\"openTree('user')\">\r\n                                <a class=\"a-hand\">\r\n                                    <span>...</span>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 padding\">\r\n                    <div class=\"ui-g-4 padding\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <label>客户号:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <input type=\"text\" class=\"trackcontactInput\" pInputText formControlName=\"partyId\">\r\n                            <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['partyId'].valid&&userform.controls['partyId'].dirty\">\r\n                                <span *ngIf=\"userform.hasError('maxlength','partyId')\">客户号不能超过20位!</span>\r\n                                <span *ngIf=\"userform.hasError('checkNumber','partyId')\">客户号不支持特殊字符！</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 padding\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <label>客户名称:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <input type=\"text\" class=\"trackcontactInput\" pInputText formControlName=\"custName\">\r\n                            <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['custName'].valid&&userform.controls['custName'].dirty\">\r\n                                <span *ngIf=\"userform.hasError('maxlength','custName')\">客户名称不能超过100位!</span>\r\n                                <span *ngIf=\"userform.hasError('specialSymbol','custName')\">客户名称不支持特殊字符！</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 padding\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <label>证件号码:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <input type=\"text\" pInputText class=\"trackcontactInput\" formControlName=\"idNo\">\r\n                            <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['idNo'].valid&&userform.controls['idNo'].dirty\">\r\n                                <span *ngIf=\"userform.hasError('maxlength','idNo')\">证件号码不能超过32位!</span>\r\n                                <span *ngIf=\"userform.hasError('checkEnAndNum','idNo')\">证件号码输入有误!</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12 padding\">\r\n                    <div class=\"ui-g-4 padding\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <label>经办日期:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <div class=\"ui-g-6 calendarStyle padding\">\r\n                                <p-calendar formControlName=\"registerTimeStart\" class=\"track-contact-calendar\" [showButtonBar]=\"true\" [monthNavigator]=\"true\"\r\n                                [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [showOtherMonths]=\"false\"\r\n                                [locale]=\"ch\" (onSelect)=\"showTime('plan','start')\" (onBlur)=\"handInputDate('plan','start')\"></p-calendar>\r\n                            </div>\r\n                            <label>至</label>\r\n                            <div class=\"ui-g-6 calendarStyle padding\" style=\"float:right;\">\r\n                                <p-calendar formControlName=\"registerTimeEnd\" class=\"track-contact-calendar\" [showButtonBar]=\"true\" [monthNavigator]=\"true\"\r\n                                [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [showOtherMonths]=\"false\"\r\n                                [locale]=\"ch\" (onSelect)=\"showTime('plan','end')\" (onBlur)=\"handInputDate('plan','end')\"></p-calendar>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 padding\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <label>审批状态:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <p-dropdown [options]=\"approvalStatusList\" class=\"trackcontactPropdowna\" formControlName=\"approvalStatus\"></p-dropdown>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 padding\" *ngIf=\"batch\">\r\n                        <div class=\"ui-g-4 text-right\">\r\n                            <label>一级名单:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <p-dropdown [options]=\"listTypeOneList\" class=\"trackcontactPropdowna\" formControlName=\"listTypeOne\"></p-dropdown>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"ui-g-12 table\">\r\n        <button pButton label=\"查询\" (click)=\"query()\"></button>\r\n        <button pButton label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12 base-table\" style=\"overflow-x:scroll;width:100%;text-align:center;margin-top:-10px;\" *ngIf=\"single\">\r\n        <p-dataTable [value]=\"dataList\" class=\"table\" [emptyMessage]='tabMesg'> -->\r\n    <div class=\"ui-g-12 table base-table\" *ngIf=\"single\">\r\n        <p-dataTable [value]=\"dataList\" emptyMessage=\"没有查找到数据\">\r\n            <p-column field=\"partyId\" header=\"客户号\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"idNo\" header=\"证件号码\" [style]=\"{'width':'160px'}\"></p-column>\r\n            <p-column field=\"registerUserName\" header=\"经办人\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"registerTime\" header=\"经办日期\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"registerOrgName\" header=\"经办机构\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"approvalStatus\" header=\"审批状态\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.approvalStatus | codeValuePie:approvalStatusList}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"operationType\" header=\"操作类型\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.operationType | codeValuePie:operationTypeList}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"操作\" [style]=\"{'width':'120px'}\">\r\n                <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n                    <span (click)=\"update(col,'1')\" *ngIf=\"col.registerUser==user.userId&&col.approvalStatus!=0&&col.approvalStatus!='AB'&&col.approvalStatus!=1\" class=\"tabelUpdateIco\">修改</span>\r\n                    <span (click)=\"delete(col)\" *ngIf=\"col.registerUser==user.userId&&col.approvalStatus!=0&&col.approvalStatus!='AB'&&col.approvalStatus!=1\" class=\"tabelDeleteIco\">删除</span>\r\n                    <span (click)=\"detail(col,'1')\" class=\"tabelDetailIco\">查看</span>\r\n                    <span (click)=\"modify(col)\" *ngIf=\"col.registerUser==user.userId&&col.approvalStatus!=0&&col.approvalStatus!='AB'&&col.approvalStatus!=1\" class=\"tabelPublishIco\">提交</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12 base-table\" style=\"overflow-x:scroll;width:100%;text-align:center;margin-top:-10px;\" *ngIf=\"batch\">\r\n        <p-dataTable [value]=\"dataList\" class=\"table\" [emptyMessage]='tabMesg'> -->\r\n    <div class=\"ui-g-12 table base-table\" *ngIf=\"batch\">\r\n        <p-dataTable [value]=\"dataList\" emptyMessage=\"没有查找到数据\">\r\n            <p-column header=\"序号\" [style]=\"{'width':'60px'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span>{{ri+1}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"cusDisplay\" field=\"partyId\" header=\"客户号\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column *ngIf=\"cusDisplay\" field=\"custName\" header=\"客户名称\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column *ngIf=\"cusDisplay\" field=\"idNo\" header=\"证件号码\" [style]=\"{'width':'160px'}\"></p-column>\r\n            <p-column field=\"filePath\" header=\"上传文件路径\" [style]=\"{'width':'120px'}\"></p-column>\r\n            <p-column field=\"registerUserName\" header=\"经办人\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"registerTime\" header=\"经办日期\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"registerOrgName\" header=\"经办机构\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"listTypeOneName\" header=\"一级名单\" [style]=\"{'width':'120px'}\"></p-column>\r\n            <p-column field=\"approvalStatus\" header=\"审批状态\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.approvalStatus | codeValuePie:approvalStatusList}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"operationType\" header=\"操作类型\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.operationType | codeValuePie:operationTypeList}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"操作\" [style]=\"{'width':'120px'}\">\r\n                <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n                    <span (click)=\"update(col,'2')\" *ngIf=\"col.registerUser==user.userId&&col.approvalStatus!=0&&col.approvalStatus!='AB'&&!cusDisplay&&col.approvalStatus!=1\" class=\"tabelUpdateIco\">修改</span>\r\n                    <span (click)=\"delete(col)\" *ngIf=\"col.registerUser==user.userId&&col.approvalStatus!=0&&col.approvalStatus!='AB'&&!cusDisplay&&col.approvalStatus!=1\" class=\"tabelDeleteIco\">删除</span>\r\n                    <span (click)=\"detail(col,'2')\" class=\"tabelDetailIco\">查看</span>\r\n                    <span (click)=\"modify(col)\" *ngIf=\"col.registerUser==user.userId&&col.approvalStatus!=0&&col.approvalStatus!='AB'&&!cusDisplay&&col.approvalStatus!=1\" class=\"tabelPublishIco\">提交</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator rows={{pageSize}} [first]=\"first\" totalRecords={{totalNum}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<tzb-loading [blocked]=\"loadingShow.flag\"></tzb-loading>\r\n<!-- 模态框 新增-->\r\n<p-dialog #dialog [(visible)]=\"display\" *ngIf=\"display\" modal=\"modal\" class=\"contact-track-f\">\r\n    <p-header>\r\n        {{addUpHeader}}\r\n    </p-header>\r\n    <custom-mission-update *ngIf=\"showModel=='1'\" [inValue]=\"inValue\" [modifyValue]=\"modifyValue\" (outValue)=\"updateCall($event)\"></custom-mission-update>\r\n    <custom-mission-detail *ngIf=\"showModel=='2'\" [inValue]=\"inValue\" [modifyValue]=\"modifyValue\" (outValue)=\"detailCall($event)\"></custom-mission-detail>\r\n</p-dialog>\r\n<!-- 删除-->\r\n<p-confirmDialog appendTo=\"body\" class=\"backGround\" basezIndex='2' header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"确定\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"取消\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n<!--选择机构-->\r\n<p-dialog [(visible)]=\"orgTreeDisplay\" [responsive]=\"true\" [positionTop]=10 modal=\"modal\" class=\"contact-track-f\">\r\n    <p-header>\r\n        机构树\r\n    </p-header>\r\n    <org-tree-component (outValue)=\"contacttreeCall($event)\"></org-tree-component>\r\n</p-dialog>\r\n<!--选择员工-->\r\n<p-dialog [(visible)]=\"userTreeDisplay\" [responsive]=\"true\" [positionTop]=10 modal=\"modal\" class=\"contact-track-f\">\r\n    <p-header>\r\n        员工列表\r\n    </p-header>\r\n    <queryUser *ngIf=\"userTreeDisplay\" [in-value]=\"userInValue\" (outValue)=\"workerCall($event)\"></queryUser>\r\n</p-dialog>\r\n<!-- 提交 -->\r\n<p-dialog *ngIf=\"dealPerShow\" header=\"提交给\" [(visible)]=\"dealPerShow\" class=\"contact-track-f\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-list.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-list.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g {\n  padding-bottom: 3px; }\n\n.org-name {\n  display: flex; }\n\n.contactTrackInput {\n  width: 43.4% !important;\n  border-right: none;\n  min-width: 258px !important; }\n\n.text-right {\n  text-align: right; }\n\n.table {\n  text-align: center; }\n\n.name {\n  word-break: break-all; }\n\n.contactCss {\n  margin-top: -14px; }\n\n.contactCsstop {\n  margin-top: 10px; }\n\na {\n  color: #28B0C6; }\n\n.clickspan {\n  width: 12%;\n  height: 23px;\n  position: absolute;\n  top: 7px;\n  right: 10px; }\n\n.position {\n  position: relative; }\n\n.padding {\n  padding: 0; }\n\n.calendarStyle {\n  padding: 0 !important;\n  width: 47% !important; }\n\n:host /deep/ .contact-track-f .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .track-contact-calendar .ui-calendar {\n  width: 23.2%; }\n\n:host /deep/ .trackcontactPropdowna .ui-dropdown {\n  width: 50% !important;\n  min-width: 284px !important; }\n\n.trackcontactInput {\n  width: 50% !important;\n  min-width: 284px !important; }\n\n:host/deep/ .contact-track-f .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .track-contact-calendar .ui-calendar {\n    width: 30%;\n    min-width: 80px !important; }\n  :host /deep/ .trackcontactPropdowna .ui-dropdown {\n    min-width: 190px !important; }\n  .trackcontactInput {\n    min-width: 190px !important; }\n  .contactTrackInput {\n    min-width: 170px !important; }\n  .clickspan {\n    right: 0px !important; }\n  .calendarStyle {\n    width: 45% !important; } }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .clickspan {\n    top: 6px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLW1pc3Npb24tbGlzdC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1saXN0LW1hbmFnZVxcY3VzdG9tLW1pc3Npb24tbGlzdFxcY3VzdG9tLW1pc3Npb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVyxFQUFBOztBQUVmO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0kscUJBQW9CO0VBQ3BCLHFCQUFvQixFQUFBOztBQUV4QjtFQUNJLHVCQUF1QjtFQUN2QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0kscUJBQXFCO0VBQ3JCLDJCQUEyQixFQUFBOztBQUUvQjtFQUNJLHFCQUFxQjtFQUNyQiwyQkFBMkIsRUFBQTs7QUFFL0I7RUFDSSxzQkFBc0IsRUFBQTs7QUFFMUI7RUFFSztJQUNHLFVBQVU7SUFDViwwQkFBMEIsRUFBQTtFQUU3QjtJQUNHLDJCQUEyQixFQUFBO0VBRS9CO0lBQ0ksMkJBQTJCLEVBQUE7RUFFL0I7SUFDRywyQkFBMkIsRUFBQTtFQUU5QjtJQUNJLHFCQUFxQixFQUFBO0VBRXpCO0lBQ0kscUJBQXFCLEVBQUEsRUFDeEI7O0FBRUw7RUFDSTtJQUNJLG1CQUFtQixFQUFBLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLW1pc3Npb24tbGlzdC9jdXN0b20tbWlzc2lvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLWcge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcclxufVxyXG4ub3JnLW5hbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY29udGFjdFRyYWNrSW5wdXQge1xyXG4gICAgd2lkdGg6IDQzLjQlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBtaW4td2lkdGg6IDI1OHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubmFtZSB7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuLmNvbnRhY3RDc3Mge1xyXG4gICAgbWFyZ2luLXRvcDogLTE0cHg7XHJcbn1cclxuLmNvbnRhY3RDc3N0b3Age1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5hIHtcclxuICAgIGNvbG9yOiAjMjhCMEM2O1xyXG59XHJcbi5jbGlja3NwYW4ge1xyXG4gICAgd2lkdGg6IDEyJTtcclxuICAgIGhlaWdodDogMjNweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogN3B4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnBvc2l0aW9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wYWRkaW5ne1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uY2FsZW5kYXJTdHlsZXtcclxuICAgIHBhZGRpbmc6MCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6NDclICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5jb250YWN0LXRyYWNrLWYgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcbi8vIOafpeivouiMg+WbtCDml6XmnJ/nu4Tku7ZcclxuOmhvc3QvZGVlcC8gLnRyYWNrLWNvbnRhY3QtY2FsZW5kYXIgLnVpLWNhbGVuZGFyIHtcclxuICAgIHdpZHRoOiAyMy4yJTtcclxufVxyXG46aG9zdCAvZGVlcC8gLnRyYWNrY29udGFjdFByb3Bkb3duYSAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAyODRweCAhaW1wb3J0YW50O1xyXG59XHJcbi50cmFja2NvbnRhY3RJbnB1dCB7XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDI4NHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLmNvbnRhY3QtdHJhY2stZiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAvLyDmn6Xor6LojIPlm7Qg5pel5pyf57uE5Lu2XHJcbiAgICAgOmhvc3QvZGVlcC8gLnRyYWNrLWNvbnRhY3QtY2FsZW5kYXIgLnVpLWNhbGVuZGFyIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgIDpob3N0IC9kZWVwLyAudHJhY2tjb250YWN0UHJvcGRvd25hIC51aS1kcm9wZG93biB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxOTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRyYWNrY29udGFjdElucHV0IHtcclxuICAgICAgICBtaW4td2lkdGg6IDE5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdFRyYWNrSW5wdXQge1xyXG4gICAgICAgbWluLXdpZHRoOiAxNzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNsaWNrc3BhbntcclxuICAgICAgICByaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2FsZW5kYXJTdHlsZXtcclxuICAgICAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0Om5vbmUpLCgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpe1xyXG4gICAgLmNsaWNrc3BhbntcclxuICAgICAgICB0b3A6IDZweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-list.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-list.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CustomMissionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMissionListComponent", function() { return CustomMissionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/components/dialog/dialog */ "./node_modules/primeng/components/dialog/dialog.js");
/* harmony import */ var primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CustomMissionListComponent = /** @class */ (function () {
    function CustomMissionListComponent(confirmationService, httpService, messageService, commonFunc, commfunc, fb) {
        this.confirmationService = confirmationService;
        this.httpService = httpService;
        this.messageService = messageService;
        this.commonFunc = commonFunc;
        this.commfunc = commfunc;
        this.fb = fb;
        this.msgs = [];
        this.message = { msg: [] };
        this.loadingShow = { flag: false }; // loading框
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["tableMessage"]; //表格中无数据时显示的内容
        this.first = 0; //分页控制
        this.pageNum = 1; //当前页数
        this.pageSize = 10; //每页条数
        this.dataList = [];
        this.display = false; //模态框
        this.single = false; //单个客户
        this.batch = false; //批量客户
        this.inValue = []; //传参
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["CALENDAR_CN"]; //日期控件
        this.orgTreeDisplay = false; //模态框
        this.userTreeDisplay = false; //模态框
        this.jbxx = []; //名单码值
        this.dealPerShow = false;
        this.cusDisplay = false; //批量客户管理客户号
        this.userform = fb.group({
            operaType: ['1'],
            operationType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            partyId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["checkNumber"]]],
            custName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["specialSymbol"]]],
            listTypeOne: [''],
            idNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["checkEnAndNum"]]],
            registerUser: [''],
            registerTimeStart: [''],
            registerTimeEnd: [''],
            registerOrg: [''],
            approvalStatus: [''],
            upListTaskId: [''],
            registerOrgName: [''],
            registerUserName: [''],
        });
    }
    CustomMissionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        this.userName = chName.userName;
        this.orgName = chName.orgName;
        this.codeValues(); //调用方法，获取全部码值
        this.operationTypeList = this.code['operation'];
        this.operationTypeListD = this.code['operationTypeD'];
        this.operationTypeListP = this.code['operationTypeP'];
        this.approvalStatusList = this.code['approvalStatus'];
        this.singlebatch();
        setTimeout(function () {
            _this.dataList = [];
        });
        this.queryOrgName();
    };
    CustomMissionListComponent.prototype.queryOrgName = function () {
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        for (var i = 0; i < chName.orgList.length; i++) {
            if (this.user.extParam.orgId == chName.orgList[i].orgId) {
                this.orgName = chName.orgList[i].orgName;
            }
        }
        console.log(this.orgName, "111111111");
    };
    //码值
    CustomMissionListComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //查询
    CustomMissionListComponent.prototype.queryType = function () {
        var _this = this;
        var param = {};
        param['listTypeHierarchy'] = 1;
        this.httpService.selectBlackListType(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var list = data.returnList;
                _this.jbxx = [];
                list.forEach(function (element) {
                    var obj = {};
                    obj['label'] = element.listTypeName;
                    obj['value'] = element.listTypeId;
                    _this.jbxx.push(obj);
                });
                _this.jbxx.unshift({ label: '请选择', value: '' });
                _this.listTypeOneList = _this.jbxx;
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
    //单个/批量客户
    CustomMissionListComponent.prototype.singlebatch = function () {
        var _this = this;
        if (this.userform.value.operaType == '1') {
            this.single = true;
            this.batch = false;
            setTimeout(function () {
                _this.dataList = [];
            });
            this.clear();
            this.userform.get('operationType').setValue('');
        }
        else if (this.userform.value.operaType == '2') {
            this.single = false;
            this.batch = true;
            setTimeout(function () {
                _this.dataList = [];
            });
            this.clear();
            this.queryType();
        }
    };
    // 选择机构/选择员工
    CustomMissionListComponent.prototype.openTree = function (param) {
        if (param == 'org') {
            this.orgTreeDisplay = !this.orgTreeDisplay;
        }
        else {
            this.userTreeDisplay = !this.userTreeDisplay;
        }
    };
    // 关闭-机构模态框
    CustomMissionListComponent.prototype.contacttreeCall = function (param) {
        this.orgTreeDisplay = false;
        this.userform.addControl('registerOrgName', this.fb.control(''));
        this.userform.get('registerOrg').setValue(param.orgId);
        this.userform.get('registerOrgName').setValue(param.orgName);
    };
    // 关闭-员工模态框
    CustomMissionListComponent.prototype.workerCall = function (item) {
        this.userTreeDisplay = false;
        if (item.length > 0) {
            this.userform.addControl('registerUserName', this.fb.control(''));
            this.userform.get('registerUser').setValue(item[0].tellerId);
            this.userform.get('registerUserName').setValue(item[0].tellerName);
        }
    };
    // 开始、结束日期判断
    CustomMissionListComponent.prototype.showTime = function (param1, param2) {
        var _this = this;
        if (param1 == 'plan') {
            var registerTimeStart = this.commfunc.transDateN(this.userform.value.registerTimeStart);
            var registerTimeEnd = this.commfunc.transDateN(this.userform.value.registerTimeEnd);
            if (registerTimeStart && registerTimeEnd) {
                if (registerTimeStart > registerTimeEnd) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                    setTimeout(function () {
                        if (param2 == "start") {
                            _this.userform.value.registerTimeStart = null;
                        }
                        else {
                            _this.userform.value.planContactTimeTo = null;
                        }
                    });
                }
            }
        }
    };
    // 手动输入日期
    CustomMissionListComponent.prototype.handInputDate = function (param1, param2) {
        this.showTime(param1, param2);
    };
    //客户号事件
    // partydetail() {
    //     const param = {};
    //     param['custNo'] = this.userform.value.partyId;
    //     if (this.batch) {
    //         this.cusDisplay = true;
    //     }
    //     this.httpService.selectCustBriefInfo(param).subscribe(data => {
    //         if (data.returnCode.code == 'success') {
    //             this.userform.get('custName').setValue(data.custName);
    //         } else {
    //             this.msgs = [];
    //             this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
    //         }
    //     }, err => {
    //         this.msgs = [];
    //         this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
    //     });
    // }
    //查询
    CustomMissionListComponent.prototype.query = function () {
        this.pageSize = 10;
        this.pageNum = 1;
        this.first = 0;
        if (this.userform.value.partyId || this.userform.value.custName || this.userform.value.idNo) {
            if (this.batch) {
                this.cusDisplay = true;
            }
        }
        this.queryClick();
    };
    //列表查询
    CustomMissionListComponent.prototype.queryClick = function () {
        var _this = this;
        // alert(1111)
        this.userform.removeControl('registerUserName');
        this.userform.removeControl('registerOrgName');
        var param = Object.assign({}, this.userform.value);
        param['pageSize'] = this.pageSize;
        param['pageNum'] = this.pageNum;
        param['registerTimeStart'] = this.commfunc.transDateN(this.userform.value.registerTimeStart);
        param['registerTimeEnd'] = this.commfunc.transDateN(this.userform.value.registerTimeEnd);
        this.httpService.selectListTaskInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList = data.returnList ? data.returnList : [];
                _this.totalNum = data.total;
            }
            else {
                _this.msgs = [];
                _this.dataList = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 修改
    CustomMissionListComponent.prototype.update = function (col, i) {
        this.inValue = col;
        this.modifyValue = i;
        this.display = true;
        this.showModel = 1;
        if (this.userform.value.operaType == '1') {
            if (this.userform.value.operationType == '1001') {
                this.addUpHeader = '单个名单入库修改';
            }
            else if (this.userform.value.operationType == '1003') {
                this.addUpHeader = '单个名单出库修改';
            }
            else if (this.userform.value.operationType == '1005') {
                this.addUpHeader = '单个名单等级调整修改';
            }
            else if (this.userform.value.operationType == '1006') {
                this.addUpHeader = '单个名单失效修改';
            }
        }
        else if (this.userform.value.operaType == '2') {
            if (this.userform.value.operationType == '1002') {
                this.addUpHeader = '批量入库修改';
            }
            else if (this.userform.value.operationType == '1004') {
                this.addUpHeader = '批量出库修改';
            }
        }
    };
    // 修改回调
    CustomMissionListComponent.prototype.updateCall = function (param) {
        this.display = param;
        this.pageNum = 1;
        // if (this.userform.value.operationType) {
        //     this.queryClick();
        // }
        this.queryClick();
    };
    // 详情
    CustomMissionListComponent.prototype.detail = function (col, i) {
        this.modifyValue = i;
        this.inValue = col;
        console.log(this.inValue, "入参111111111111111111111111111");
        this.display = true;
        this.showModel = 2;
        if (this.userform.value.operaType == '1') {
            this.addUpHeader = '单个名单任务详情';
        }
        else if (this.userform.value.operaType == '2') {
            if (this.userform.value.operationType == '1002') {
                this.addUpHeader = '批量入库申请详情';
            }
            else if (this.userform.value.operationType == '1004') {
                this.addUpHeader = '批量出库申请详情';
            }
        }
    };
    // 详情回调
    CustomMissionListComponent.prototype.detailCall = function (param) {
        this.display = param;
        this.pageNum = 1;
    };
    // 删除
    CustomMissionListComponent.prototype.delete = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除?',
            accept: function () {
                var param = {
                    listTaskId: item.listTaskId,
                };
                _this.httpService.deleteListTaskInfo(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                        // if (this.userform.value.operationType) {
                        _this.queryClick();
                        // }
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                });
            },
            reject: function () {
            }
        });
    };
    // 提交
    CustomMissionListComponent.prototype.modify = function (item) {
        var _this = this;
        this.keylistTypeOne = item.listTypeOne;
        this.keylistTypeTwo = item.listTypeTwo;
        this.listTask = item.listTaskId;
        this.operationType = item.operationType;
        this.waitSelUserList = this.commfunc.query('KHYY_MDJSP', {});
        if (!this.waitSelUserList.erro) {
            this.outVal = this.waitSelUserList.waitSelUserList;
            var perPageShow = this.waitSelUserList.display;
            if (perPageShow == true) {
                this.dealPerShow = true;
            }
            else {
                var param = { listTaskId: item.listTaskId, operationType: item.operationType };
                param['registerUserName'] = this.userName;
                param['registerOrgName'] = this.orgName;
                param['registerOrg'] = this.user.extParam.orgId;
                param['registerUser'] = this.user.userId;
                param['lastUpdatedChannel'] = '2';
                console.log(param, "1111111111111111111");
                this.httpService.updateListTaskInfo(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.dealPerShow = false;
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                });
            }
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
        }
    };
    CustomMissionListComponent.prototype.outDisplayCall = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.dealPerShow = event;
        }, 4000);
    };
    CustomMissionListComponent.prototype.outValueCall = function (event) {
        var _this = this;
        console.log(event, "传值");
        this.outVal = event;
        var ss = '';
        var specifyNextNode = '';
        var outFlowId;
        this.outVal.forEach(function (item) {
            ss += item.tellerId;
            specifyNextNode = item.orgBank;
            outFlowId = item.outFlowId;
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        commonHeader.extParam['specifyNextNode'] = outFlowId;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        var param = { listTaskId: this.listTask, operationType: this.operationType };
        param['lastAuthUser'] = ss;
        param['lastAuthOrg'] = specifyNextNode;
        param['lastUpdateOrg'] = this.user.extParam.orgId;
        param['lastUpdateUser'] = this.user.userId;
        param['approvalStatus'] = 'AB';
        param['listTypeOne'] = this.keylistTypeOne;
        param['listTypeTwo'] = this.keylistTypeTwo;
        param['registerUserName'] = this.userName;
        param['registerOrgName'] = this.orgName;
        param['registerOrg'] = this.user.extParam.orgId;
        param['registerUser'] = this.user.userId;
        this.httpService.updateListTaskInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // this.dealPerShow = false;
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                setTimeout(function () {
                    _this.dealPerShow = false;
                }, 1000);
                _this.queryClick();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (s.extParam.specifyNextOpers || s.extParam.specifyNextNode) {
            delete s.extParam.specifyNextOpers;
            delete s.extParam.specifyNextNode;
            var commonHeader_1 = s;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
        }
    };
    // 重置
    CustomMissionListComponent.prototype.reset = function () {
        this.userform.get('operaType').setValue(1);
        this.clear();
        this.singlebatch();
        this.cusDisplay = false;
    };
    // 初始化数据
    CustomMissionListComponent.prototype.clear = function () {
        this.userform.addControl('registerUserName', this.fb.control(''));
        this.userform.addControl('registerOrgName', this.fb.control(''));
        this.userform.get('operationType').setValue('');
        this.userform.get('partyId').setValue('');
        this.userform.get('listTypeOne').setValue('');
        this.userform.get('idNo').setValue('');
        this.userform.get('custName').setValue('');
        this.userform.get('registerUser').setValue('');
        this.userform.get('registerTimeStart').setValue('');
        this.userform.get('registerTimeEnd').setValue('');
        this.userform.get('registerOrg').setValue('');
        this.userform.get('approvalStatus').setValue('');
        this.userform.get('registerUserName').setValue('');
        this.userform.get('registerOrgName').setValue('');
    };
    CustomMissionListComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = event.rows;
        this.pageNum = event.page + 1;
        this.first = event.first;
        // if (this.userform.value.operationType) {
        //     this.queryClick();
        // }
        this.queryClick();
    };
    CustomMissionListComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomMissionListComponent.prototype.ngAfterViewInit = function () {
        this.cancelDialogShake();
    };
    CustomMissionListComponent.prototype.cancelDialogShake = function () {
        if (this.dialog) {
            this.dialog.center = function () {
                var elementWidth = this.domHandler.getOuterWidth(this.containerViewChild.nativeElement);
                var elementHeight = this.domHandler.getOuterHeight(this.containerViewChild.nativeElement);
                if (elementWidth === 0 && elementHeight === 0) {
                    this.containerViewChild.nativeElement.style.visibility = 'hidden';
                    this.containerViewChild.nativeElement.style.display = 'block';
                    elementWidth = this.domHandler.getOuterWidth(this.containerViewChild.nativeElement);
                    elementHeight = this.domHandler.getOuterHeight(this.containerViewChild.nativeElement);
                    this.containerViewChild.nativeElement.style.display = 'none';
                    this.containerViewChild.nativeElement.style.visibility = 'visible';
                }
                var viewport = this.domHandler.getViewport();
                var x = Math.max(Math.ceil((viewport.width - elementWidth)) / 2, 0);
                var y = Math.max(Math.ceil((viewport.height - elementHeight)) / 2, 0);
                // 解决抖动问题
                if (!this.containerViewChild.nativeElement.style.left ||
                    !this.containerViewChild.nativeElement.style.top ||
                    Math.abs(this.containerViewChild.nativeElement.style.left - x) > 5 ||
                    Math.abs(this.containerViewChild.nativeElement.style.top - y) > 5) {
                    this.containerViewChild.nativeElement.style.left = x + 'px';
                    this.containerViewChild.nativeElement.style.top = y + 'px';
                }
            };
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dialog'),
        __metadata("design:type", primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_9__["Dialog"])
    ], CustomMissionListComponent.prototype, "dialog", void 0);
    CustomMissionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-mission-list',
            template: __webpack_require__(/*! ./custom-mission-list.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-list.component.html"),
            styles: [__webpack_require__(/*! ./custom-mission-list.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-list.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"],
            app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_6__["CusListManageHttpService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_3__["Customtools"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CustomMissionListComponent);
    return CustomMissionListComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-update/custom-mission-update.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-update/custom-mission-update.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <div class=\"ui-g-12 boxShadow my-deal\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 text-right\">\r\n            <span>事项类型:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.bigClassName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 text-right\">\r\n            <span>事项类型:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.littleClassName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 text-right\">\r\n            <span>发起人:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.workCreateName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 text-right\">\r\n            <span>创建日期:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.createDate}}</span>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n<div class=\"ui-g-12 my-deal\">\r\n    <header-title *ngIf=\"webtype=='1'\" [Info]=\"Header\"></header-title>\r\n    <div class=\"ui-g-12\" [ngClass]=\"{'martop':webtype=='1'}\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g\" *ngIf=\"inStock\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>是否我行客户:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.isMybankCust | codeValuePie:isMybankCustList}}\" disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\" *ngIf=\"!bank\">\r\n                        <label appValidation>客户类型:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\" *ngIf=\"!bank\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.customerType | codeValuePie:customerTypeList}}\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bank\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>客户号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"partyId\" disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>客户名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\" *ngIf=\"!diskey\">\r\n                        <input type=\"text\" pInputText formControlName=\"custName\" *ngIf=\"diskey\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label *ngIf='this.userform.value.customerType!=2' appValidation>证件类型:</label>\r\n                        <label *ngIf='this.userform.value.customerType==2'>证件类型:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"idTypeList\" formControlName=\"idType\" [disabled]=\"diskey\"></p-dropdown>\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['idType'].valid&&userform.controls['idType'].dirty\">\r\n                            <span *ngIf=\"userform.controls['idType'].errors['required']\">请输入证件类型！</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label *ngIf='this.userform.value.customerType!=2' appValidation>证件号:</label>\r\n                        <label *ngIf='this.userform.value.customerType==2'>证件号:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"idNo\" *ngIf=\"!diskey\">\r\n                        <input type=\"text\" pInputText formControlName=\"idNo\" *ngIf=\"diskey\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"bankown\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>联系电话:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"cellphone\" *ngIf=\"!diskey\">\r\n                        <input type=\"text\" pInputText formControlName=\"cellphone\" *ngIf=\"diskey\" disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>联系地址:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText formControlName=\"contactAddress\" *ngIf=\"!diskey\">\r\n                        <input type=\"text\" pInputText formControlName=\"contactAddress\" *ngIf=\"diskey\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\" *ngIf=\"inStock\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>一级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [disabled]=\"diskey\" [options]=\"listTypeOneList\" formControlName=\"listTypeOne\" (onChange)=\"listType(1,$event,true)\"></p-dropdown>\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['listTypeOne'].valid&&userform.controls['listTypeOne'].dirty\">\r\n                            <span *ngIf=\"userform.controls['listTypeOne'].errors['required']\">请输入一级名单！</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>二级名单:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [disabled]=\"diskey\" [options]=\"listTypeTwoList\" formControlName=\"listTypeTwo\" (onChange)=\"listType(2,$event,true)\"></p-dropdown>\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['listTypeTwo'].valid&&userform.controls['listTypeTwo'].dirty\">\r\n                            <span *ngIf=\"userform.controls['listTypeTwo'].errors['required']\">请输入二级名单！</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\" *ngIf=\"inStock\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>风险管控等级:</label>\r\n                    </div>\r\n                    <!-- 个人入库修改-->\r\n                    <div class=\"ui-g-4\" *ngIf=\"!adjust\">\r\n                        <p-dropdown [disabled]=\"diskey\" [options]=\"listTypeIdList\" formControlName=\"listTypeId\" (onChange)=\"listType(3,$event,true)\"></p-dropdown>\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['listTypeId'].valid&&userform.controls['listTypeId'].dirty\">\r\n                            <span *ngIf=\"userform.controls['listTypeId'].errors['required']\">请输入风险管控等级！</span>\r\n                        </div>\r\n                    </div>\r\n                    <!-- 风险等级调整 -->\r\n                    <div class=\"ui-g-4\" *ngIf=\"adjust\">\r\n                        <p-dropdown [disabled]=\"diskey\" [options]=\"listTypeIdList\" formControlName=\"relatedlistTypeId\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>状态:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.statusId | codeValuePie:statusIdList}}\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"inStock\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>分类编码:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"classifyId\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>录入方式:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.inListType | codeValuePie:inListTypeList}}\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- 批量 -->\r\n            <div class=\"ui-g\" *ngIf=\"outStock\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>上传文件:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <p-fileUpload accept=\".xls\" invalidFileTypeMessageDetail=\"只能上传Excel\" invalidFileTypeMessageSummary=\"\" chooseLabel=\"浏览\" uploadLabel=\"上传\"\r\n                            cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"load($event)\">\r\n                        </p-fileUpload>\r\n                        <div *ngIf=\"fileList.length>0\">\r\n                            <span>{{fileList[0]['fileName']}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"outStock\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>一级名单分类:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"listTypeOneList\" formControlName=\"listTypeOne\"></p-dropdown>\r\n                        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['listTypeOne'].valid&&userform.controls['listTypeOne'].dirty\">\r\n                            <span *ngIf=\"userform.controls['listTypeOne'].errors['required']\">请输入一级名单！</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"outStock&&!diskey1\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>名单来源:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"sourceDes\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>录入方式:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" pInputText value=\"{{this.userform.value.inListType | codeValuePie:inListTypeList}}\" disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label *ngIf=\"!diskey1\">录入原因:</label>\r\n                    <label *ngIf=\"diskey1\">出库原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10  mart\">\r\n                    <textarea *ngIf=\"!diskey\" rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"toListReason\"></textarea>\r\n                    <textarea *ngIf=\"diskey\" rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"toListReason\" disabled></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"adjust\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label appValidation>调整风险管控等级为:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <p-dropdown [options]=\"listTypeIdList\" formControlName=\"listTypeId\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"adjust\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>调整原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10  mart\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"releaseReason\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"efficacy\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>失效原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10  mart\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"releaseReason\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"kk\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办人:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerUserName\" pInputText disabled>\r\n                    </div>\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办机构:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerOrgName\" pInputText disabled>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\" *ngIf=\"kk1\">\r\n                    <div class=\"ui-g-2 text-right\">\r\n                        <label>经办时间:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <input type=\"text\" formControlName=\"registerTime\" pInputText disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g\" *ngIf=\"delete\">\r\n                <div class=\"ui-g-2 text-right\">\r\n                    <label>删除原因:</label>\r\n                </div>\r\n                <div class=\"ui-g-10  mart\">\r\n                    <textarea rows=\"5\" cols=\"60\" pInputTextarea formControlName=\"releaseReason\"></textarea>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12 btn-return\">\r\n                <button pButton type=\"button\" (click)=\"doSave(1)\" [disabled]=\"!userform.valid\" label=\"保存\" *ngIf=\"webtype !== '1'\"></button>\r\n                <button pButton type=\"button\" (click)=\"doSave(2)\" [disabled]=\"!userform.valid\" label=\"提交\"></button>\r\n                <!-- <button pButton type=\"button\" (click)=\"doSave(1)\"  label=\"保存\"></button>\r\n                <button pButton type=\"button\" (click)=\"doSave(2)\"  label=\"提交\"></button> -->\r\n                <button pButton type=\"button\" label=\"返回\" (click)=\"doReset()\"></button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<!-- <div class=\"ui-g-12\" *ngIf=\"lookkey\">\r\n    <header-title [Info]=\"'审批历史'\"></header-title>\r\n</div>\r\n<div class=\"ui-g-12 table  base-table\" *ngIf=\"lookkey\">\r\n    <app-work-approve-detail [processId]=\"nowProcessId\"></app-work-approve-detail>\r\n</div> -->\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<tzb-loading [blocked]=\"loadingShow.flag\"></tzb-loading>\r\n<!-- 提交 -->\r\n<p-dialog *ngIf=\"dealPerShow\" header=\"提交给\" [(visible)]=\"dealPerShow\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-update/custom-mission-update.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-update/custom-mission-update.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-deal {\n  max-height: 700px !important;\n  background-color: #fff; }\n  .my-deal .btn-return {\n    margin-top: 10px !important;\n    text-align: center; }\n  .my-deal .text-right {\n    text-align: right; }\n  .my-deal .ui-g-12 {\n    margin-top: -12px;\n    background-color: #fff; }\n  .my-deal .martop {\n    padding: 0;\n    width: 90%;\n    margin: 30px 5% 0 5%; }\n  .my-deal .mart {\n    margin: 3px 0 !important; }\n  @media screen and (min-width: 1281px) {\n  .my-deal .martop {\n    width: 60%;\n    margin: 30px 15% 0 17.5%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLW1pc3Npb24tbGlzdC9jdXN0b20tbWlzc2lvbi11cGRhdGUvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tbGlzdC1tYW5hZ2VcXGN1c3RvbS1taXNzaW9uLWxpc3RcXGN1c3RvbS1taXNzaW9uLXVwZGF0ZVxcY3VzdG9tLW1pc3Npb24tdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBO0VBRjFCO0lBSVEsMkJBQTJCO0lBQzNCLGtCQUFrQixFQUFBO0VBTDFCO0lBUVEsaUJBQWlCLEVBQUE7RUFSekI7SUFXUSxpQkFBaUI7SUFDakIsc0JBQXNCLEVBQUE7RUFaOUI7SUFlUSxVQUFVO0lBQ1YsVUFBVTtJQUNWLG9CQUFvQixFQUFBO0VBakI1QjtJQW9CUSx3QkFBd0IsRUFBQTtFQUdoQztFQUNJO0lBRVEsVUFBVTtJQUNWLHdCQUF3QixFQUFBLEVBQzNCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLW1pc3Npb24tbGlzdC9jdXN0b20tbWlzc2lvbi11cGRhdGUvY3VzdG9tLW1pc3Npb24tdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWRlYWwge1xyXG4gICAgbWF4LWhlaWdodDogNzAwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAuYnRuLXJldHVybiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0LXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC51aS1nLTEye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAubWFydG9we1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IDMwcHggNSUgMCA1JTtcclxuICAgIH1cclxuICAgIC5tYXJ0IHtcclxuICAgICAgICBtYXJnaW46IDNweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgxcHgpIHtcclxuICAgIC5teS1kZWFsIHtcclxuICAgICAgICAubWFydG9we1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMTUlIDAgMTcuNSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-update/custom-mission-update.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-update/custom-mission-update.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: CustomMissionUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMissionUpdate", function() { return CustomMissionUpdate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CustomMissionUpdate = /** @class */ (function () {
    function CustomMissionUpdate(customService, activatedRoute, httpService, messageService, commonFunc, commfunc, fb) {
        var _this = this;
        this.customService = customService;
        this.activatedRoute = activatedRoute;
        this.httpService = httpService;
        this.messageService = messageService;
        this.commonFunc = commonFunc;
        this.commfunc = commfunc;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadingShow = { flag: false }; // loading框
        this.msgs = [];
        this.inStock = false; //单个客户
        this.outStock = false; //批量客户
        // 文件
        this.files = [];
        this.fileList = [];
        // 上传、下载
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_CUS_DOWNLOAD"];
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_CUS_UPLOAD"];
        this.jbxx = [{ label: '请选择', value: '' }]; //名单码值
        this.reList = []; //类型表
        this.bank = false; //本行
        this.bankown = false; //非本行
        this.dealPerShow = false;
        this.adjust = false; //调整
        this.efficacy = false; //失效
        this.delete = false; //删除
        this.diskey = false; //禁输置灰标识
        this.diskey1 = false; //批量出库的来源方式标识
        this.kk = false;
        this.kk1 = false;
        this.lookkey = false;
        //名单联动
        this.jbxx1 = [{ label: '请选择', value: '' }];
        this.workword = 0;
        debugger;
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        this.userName = chName.userName;
        this.orgName = chName.orgName;
        this.activatedRoute.queryParams.subscribe(function (queryParams) {
            if (JSON.stringify(queryParams) == '{}' && JSON.stringify(_this.activatedRoute['snapshot']['params']) != '{}') {
                // if (this.inValue.taskFlowId || this.modifyValue.taskFlowId) {
                //     this.nowProcessId = this.inValue.taskFlowId || this.modifyValue.taskFlowId;
                //     this.lookkey = true
                // } else {
                //     this.lookkey = false
                // }
                _this.taskId = _this.activatedRoute['snapshot']['params'].taskId;
                var detprm = JSON.parse(_this.activatedRoute['snapshot']['params']['dataMap']);
                // console.log(this.activatedRoute['snapshot']['params'], "路由传参")
                _this.detailList = _this.activatedRoute['snapshot']['params'];
                _this.webtype = '1';
                if (detprm['operationType'] == '1001') { //单个名单入库修改
                    _this.modifyValue = '1';
                    _this.Header = '单个名单入库修改';
                }
                else if (detprm['operationType'] == '1003') { //单个名单出库修改
                    _this.modifyValue = '1';
                    _this.Header = '单个名单出库修改';
                }
                else if (detprm['operationType'] == '1005') { //单个名单等级调整修改
                    _this.modifyValue = '1';
                    _this.Header = '单个名单等级调整修改';
                }
                else if (detprm['operationType'] == '1006') { //单个名单失效修改
                    _this.modifyValue = '1';
                    _this.Header = '单个名单失效修改';
                }
                else if (detprm['operationType'] == '1002') { //批量入库修改
                    _this.modifyValue = '2';
                    _this.Header = '批量入库修改';
                }
                else if (detprm['operationType'] == '1004') { //批量出库修改'
                    _this.modifyValue = '2';
                    _this.Header = '批量出库修改';
                }
                _this.inValue = detprm;
            }
            else {
            }
        });
        // MDJLCFQR
        this.userform = fb.group({
            isMybankCust: [''],
            customerType: [''],
            partyId: [''],
            custName: [''],
            listTypeOne: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            listTypeTwo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            listTypeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            statusId: [''],
            classifyId: [''],
            inListType: [''],
            sourceDes: [''],
            idType: [''],
            idNo: [''],
            cellphone: [''],
            contactAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["specialSymbol"]]],
            // toListReason: ['', [Validators.maxLength(255), specialSymbol]],//录入原因
            toListReason: [''],
            registerUser: [''],
            registerOrg: [''],
            registerTime: [''],
            filePath: [''],
            fileName: [''],
            releaseReason: [''],
            relatedListTypeIdName: [''],
            relatedlistTypeId: [''],
            registerUserName: [''],
            registerOrgName: [""],
        });
    }
    CustomMissionUpdate.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.codeValues(); //调用方法，获取全部码值
        this.isMybankCustList = this.code['isMybankCust'];
        this.customerTypeList = this.code['customerType'];
        this.statusIdList = this.code['statusId'];
        this.inListTypeList = this.code['inListType'];
        this.idTypeList = this.code['CERT_TYPE'];
        // console.log(this.inValue, "this.inValue")
        this.query(); //一级名单
        var a = [this.inValue.listTypeOne, this.inValue.listTypeTwo, this.inValue.listTypeId];
        var _loop_1 = function (e) {
            var b = {
                value: a[e - 1]
            };
            setTimeout(function () {
                _this.listType(e, b);
            }, 200);
        };
        for (var e = 1; e < 3; e++) {
            _loop_1(e);
        }
        if (this.modifyValue == '1') { //单个任务
            debugger;
            if (this.inValue.operationType == '1005') { //调整页面
                this.adjust = true;
                this.efficacy = false;
                this.delete = false;
                this.diskey = true;
                this.userform.get('relatedlistTypeId').setValue(this.inValue.relatedlistTypeId);
            }
            else if (this.inValue.operationType == '1006') { //失效页面
                this.adjust = false;
                this.efficacy = true;
                this.delete = false;
                this.diskey = true;
            }
            else if (this.inValue.operationType == '1003') { //出库页面
                this.adjust = false;
                this.efficacy = false;
                this.delete = true;
                this.diskey = true;
                this.kk = true;
            }
            else if (this.inValue.operationType == '1001') { //入库申请
                this.userform.removeControl('partyId');
                this.userform.removeControl('customerType');
                this.userform.addControl('partyId', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["checkNumber"]]));
                if (this.userform.value.isMybankCust == 'N') {
                    this.userform.addControl('customerType', this.fb.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
                }
                else {
                    this.userform.addControl('customerType', this.fb.control(''));
                }
            }
            this.bank = true;
            this.inStock = true;
            this.outStock = false;
            this.userform.get('partyId').setValue(this.inValue.partyId);
            this.userform.get('isMybankCust').setValue(this.inValue.isMybankCust);
            this.userform.get('customerType').setValue(this.inValue.customerType);
            this.userform.get('custName').setValue(this.inValue.custName);
            this.userform.get('listTypeOne').setValue(this.inValue.listTypeOne);
            this.userform.get('listTypeTwo').setValue(this.inValue.listTypeTwo);
            this.userform.get('listTypeId').setValue(this.inValue.listTypeId);
            this.userform.get('statusId').setValue(this.inValue.statusId);
            this.userform.get('classifyId').setValue(this.inValue.classifyId);
            this.userform.get('toListReason').setValue(this.inValue.toListReason);
            this.userform.get('registerUserName').setValue(this.inValue.registerUserName);
            this.userform.get('registerOrgName').setValue(this.inValue.registerOrgName);
            this.userform.get('releaseReason').setValue(this.inValue.releaseReason);
            this.userform.get('idType').setValue(this.inValue.idType);
            this.userform.get('idNo').setValue(this.inValue.idNo);
            this.isMybank();
        }
        else if (this.modifyValue == '2') { //批量客户页面
            debugger;
            this.bank = false;
            this.inStock = false;
            this.outStock = true;
            this.kk = true;
            this.kk1 = true;
            this.userform.removeControl('partyId');
            this.userform.removeControl('customerType');
            this.userform.removeControl('listTypeTwo');
            this.userform.removeControl('listTypeId');
            this.userform.addControl('listTypeTwo', this.fb.control(''));
            this.userform.addControl('listTypeId', this.fb.control(''));
            this.userform.get('sourceDes').setValue(this.inValue.sourceDes);
            this.userform.get('registerUserName').setValue(this.inValue.registerUserName);
            this.userform.get('registerOrgName').setValue(this.inValue.registerOrgName);
            this.userform.get('registerTime').setValue(this.inValue.registerTime);
            this.userform.get('idType').setValue(this.inValue.idType);
            this.userform.get('idNo').setValue(this.inValue.idNo);
            this.userform.get('filePath').setValue(this.inValue.filePath);
            if (this.inValue.operationType == '1004') { //批量出库页面
                this.diskey1 = true;
            }
        }
        if (this.inValue) {
            debugger;
            this.userform.get('listTypeOne').setValue(this.inValue.listTypeOne);
            this.userform.get('inListType').setValue(this.inValue.inListType);
            this.userform.get('toListReason').setValue(this.inValue.toListReason);
            if (this.inValue.filePath) {
                var arr = this.inValue.filePath.split('/');
                var path = '';
                for (var j = 1; j < arr.length - 1; j++) {
                    path += '/' + arr[j];
                }
                path = path + '/';
                // this.userform.value.filePath = path;
                var donwname = arr[arr.length - 1];
                this.fileList = [{
                        fileName: arr[arr.length - 1]
                    }];
            }
        }
        this.queryOrgName();
    };
    CustomMissionUpdate.prototype.queryOrgName = function () {
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        // console.log(this.user, "this.user")
        for (var i = 0; i < chName.orgList.length; i++) {
            if (this.user.extParam.orgId == chName.orgList[i].orgId) {
                this.orgName = chName.orgList[i].orgName;
            }
        }
    };
    //码值
    CustomMissionUpdate.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //查询
    CustomMissionUpdate.prototype.query = function () {
        var _this = this;
        this.jbxx = [{ label: '请选择', value: '' }];
        var param = {};
        param['listTypeHierarchy'] = 1;
        this.httpService.selectBlackListType(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var list = data.returnList;
                list.forEach(function (element) {
                    var obj = {};
                    obj['label'] = element.listTypeName;
                    obj['value'] = element.listTypeId;
                    _this.jbxx.push(obj);
                });
                _this.listTypeOneList = _this.jbxx;
                _this.jbxx = null;
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
    CustomMissionUpdate.prototype.listType = function (i, t, j) {
        var _this = this;
        debugger;
        this.jbxx = [{ label: '请选择', value: '' }];
        if (i == '1') {
            if (j == true) {
                this.listTypeTwoList = null;
            }
            var param = {};
            param['listTypeHierarchy'] = 2;
            param['parentListTypeId'] = t.value;
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var list = data.returnList;
                    list.forEach(function (element) {
                        var obj = {};
                        obj['label'] = element.listTypeName;
                        obj['value'] = element.listTypeId;
                        _this.jbxx.push(obj);
                    });
                    _this.listTypeTwoList = _this.jbxx;
                    _this.jbxx = [{ label: '请选择', value: '' }];
                    //this.listTypeIdList = [];  //清空风险管控等级
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            });
        }
        else if (i == '2') {
            if (j == true) {
                this.listTypeIdList = null;
            }
            var param = {};
            param['listTypeHierarchy'] = 3;
            param['parentListTypeId'] = t.value;
            this.httpService.selectBlackListType(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.reList = data.returnList;
                    _this.reList = data.returnList;
                    if (data.returnList.length == 0) {
                        _this.userform.get('classifyId').setValue("");
                    }
                    var list = data.returnList;
                    list.forEach(function (element) {
                        var obj = {};
                        obj['label'] = element.listTypeName;
                        obj['value'] = element.listTypeId;
                        _this.jbxx1.push(obj);
                    });
                    _this.listTypeIdList = _this.jbxx1;
                    _this.jbxx1 = [{ label: '请选择', value: '' }];
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            });
        }
        else if (i == '3') {
            this.jbxx = [{ label: '请选择', value: '' }];
            for (var e = 0; e < this.reList.length; e++) {
                if (j == true) {
                    if (this.userform.value.listTypeId == this.reList[e].listTypeId) {
                        this.userform.get('classifyId').setValue(this.reList[e].classifyId);
                    }
                }
            }
        }
    };
    //是否我行客户
    CustomMissionUpdate.prototype.isMybank = function () {
        if (this.userform.value.isMybankCust == 'Y' || this.userform.value.isMybankCust == '') {
            this.bank = true;
            this.bankown = false;
            this.userform.removeControl('idType');
            this.userform.removeControl('idNo');
            this.userform.removeControl('cellphone');
        }
        else if (this.userform.value.isMybankCust == 'N') {
            this.bank = false;
            this.bankown = true;
            this.userform.removeControl('partyId');
            this.userform.addControl('idType', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
            this.userform.addControl('cellphone', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/)]));
            this.userform.addControl('idNo', this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(32), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_4__["checkCard"]]));
            this.userform.get('idType').setValue(this.inValue.idType);
            this.userform.get('idNo').setValue(this.inValue.idNo);
            this.userform.get('cellphone').setValue(this.inValue.cellphone);
            this.userform.get('contactAddress').setValue(this.inValue.contactAddress);
        }
    };
    //客户号事件
    CustomMissionUpdate.prototype.partydetail = function () {
        var _this = this;
        var param = {};
        param['custNo'] = this.userform.value.partyId;
        this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.userform.get('custName').setValue(data.custName);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    // 按模板-文件上传
    CustomMissionUpdate.prototype.load = function (event) {
        // isUpdateFile
        if (event.xhr.response) {
            this.fileList = JSON.parse(event.xhr.response);
            if (this.fileList.success == false) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: this.fileList.errorMsg });
                return;
            }
        }
        if (this.fileList[0]) {
            this.workword = 1;
            this.userform.get('filePath').setValue(this.fileList[0].fileUrl);
            this.userform.get('fileName').setValue(this.fileList[0].fileName);
        }
    };
    //提交前传递一下信息
    CustomMissionUpdate.prototype.updateListTaskManager = function () {
        var _this = this;
        var param = {
            inputParams: { listTaskId: this.inValue.listTaskId }
        };
        this.httpService.updateListTaskManager(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // console.log(data, "111111111111111111")
                // console.log(param, "2222222")
                var message = data.returnCode.message;
                _this.doReset(message);
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
    // 保存/提交
    CustomMissionUpdate.prototype.doSave = function (i, funtype) {
        var _this = this;
        if (this.modifyValue == '1') {
            if (this.userform.value.listTypeId == this.userform.value.relatedlistTypeId) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '风险管控等级与原等级一样，请重新调整！' });
                return false;
            }
            //单个客户
            if (i == '1') { //单个客户保存
                var param = Object.assign({}, this.userform.value);
                param['lastUpdateOrg'] = this.user.extParam.orgId;
                param['lastUpdateUser'] = this.user.userId;
                param['registerUserName'] = this.userName;
                param['registerOrgName'] = this.orgName;
                param['registerOrg'] = this.user.extParam.orgId;
                param['registerUser'] = this.user.userId;
                param['listTaskId'] = this.inValue.listTaskId;
                // param['listTypeId'] = this.inValue.listTypeId;
                param['approvalStatus'] = 'AA';
                param['operationType'] = this.inValue.operationType;
                // console.log('入参', param)
                this.httpService.updateListTaskInfo(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var message = data.returnCode.message;
                        if (_this.webtype !== '1') {
                            _this.doReset(message);
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs = [{ severity: 'success', summary: '提示', detail: message }];
                            setTimeout(function () {
                                window.history.go(-1);
                            }, 1000);
                        }
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                });
            }
            if (i == '2') { //单个客户提交
                this.waitSelUserList = this.commfunc.query('KHYY_MDJSP', {});
                if (!this.waitSelUserList.erro) {
                    this.outVal = this.waitSelUserList.waitSelUserList;
                    var perPageShow = this.waitSelUserList.display;
                    if (perPageShow == true && !funtype) {
                        this.dealPerShow = true;
                    }
                    else {
                        var param = Object.assign({}, this.userform.value);
                        param['lastUpdateOrg'] = this.user.extParam.orgId;
                        param['lastUpdateUser'] = this.user.userId;
                        param['listTaskId'] = this.inValue.listTaskId;
                        param['registerUserName'] = this.userName;
                        param['registerOrgName'] = this.orgName;
                        param['registerOrg'] = this.user.extParam.orgId;
                        param['registerUser'] = this.user.userId;
                        // param['listTypeId'] = this.inValue.listTypeId;
                        param['approvalStatus'] = 'AB';
                        param['operationType'] = this.inValue.operationType;
                        // console.log(funtype);
                        if (!funtype) {
                            param['lastUpdatedChannel'] = '1';
                        }
                        else if (funtype) {
                            param['lastUpdatedChannel'] = '3';
                        }
                        this.httpService.updateListTaskInfo(param).subscribe(function (data) {
                            if (data.returnCode.code == 'success') {
                                var message = data.returnCode.message;
                                _this.doReset(message);
                            }
                            else {
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                            }
                        }, function (error) {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                        });
                    }
                }
                else {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
                }
            }
        }
        else if (this.modifyValue == '2') { //批量客户
            if (i == '1') { //批量客户保存
                var param = Object.assign({}, this.userform.value);
                param['lastUpdateOrg'] = this.user.extParam.orgId;
                param['lastUpdateUser'] = this.user.userId;
                param['registerUserName'] = this.userName;
                param['registerOrgName'] = this.orgName;
                param['registerOrg'] = this.user.extParam.orgId;
                param['registerUser'] = this.user.userId;
                param['listTaskId'] = this.inValue.listTaskId;
                // param['listTypeId'] = this.inValue.listTypeId;
                param['approvalStatus'] = 'AA';
                param['operationType'] = this.inValue.operationType;
                if (this.workword == 1) {
                    param['isUpdateFile'] = 'Y';
                }
                this.httpService.updateListTaskInfo(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var message = data.returnCode.message;
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: message }];
                        _this.doReset(message);
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                });
            }
            if (i == '2') { //批量客户提交
                this.waitSelUserList = this.commfunc.query('KHYY_MDJSP', {});
                if (!this.waitSelUserList.erro) {
                    this.outVal = this.waitSelUserList.waitSelUserList;
                    var perPageShow = this.waitSelUserList.display;
                    if (perPageShow == true && !funtype) {
                        this.dealPerShow = true;
                    }
                    else {
                        var param = Object.assign({}, this.userform.value);
                        param['lastUpdateOrg'] = this.user.extParam.orgId;
                        param['lastUpdateUser'] = this.user.userId;
                        param['listTaskId'] = this.inValue.listTaskId;
                        // param['listTypeId'] = this.inValue.listTypeId;
                        param['approvalStatus'] = 'AB';
                        param['operationType'] = this.inValue.operationType;
                        param['registerUserName'] = this.userName;
                        param['registerOrgName'] = this.orgName;
                        param['registerOrg'] = this.user.extParam.orgId;
                        param['registerUser'] = this.user.userId;
                        if (!funtype) {
                            param['lastUpdatedChannel'] = '1';
                        }
                        else if (funtype) {
                            param['lastUpdatedChannel'] = '3';
                        }
                        if (this.workword == 1) {
                            param['isUpdateFile'] = 'Y';
                        }
                        this.httpService.updateListTaskInfo(param).subscribe(function (data) {
                            if (data.returnCode.code == 'success') {
                                var message = data.returnCode.message;
                                _this.msgs = [];
                                _this.msgs = [{ severity: 'success', summary: '提示', detail: message }];
                                _this.doReset(message);
                            }
                            else {
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                            }
                        }, function (error) {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                        });
                    }
                }
                else {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
                }
            }
        }
    };
    CustomMissionUpdate.prototype.outDisplayCall = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.dealPerShow = event;
        }, 4000);
    };
    CustomMissionUpdate.prototype.outValueCall = function (event) {
        var _this = this;
        this.outVal = event;
        var ss = '';
        var outFlowId;
        var specifyNextNode = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId;
            specifyNextNode = item.userBank;
            outFlowId = item.outFlowId;
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        commonHeader.extParam['specifyNextNode'] = outFlowId;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        if (this.modifyValue == '1') {
            var param = Object.assign({}, this.userform.value);
            param['lastAuthUser'] = ss;
            param['lastAuthOrg'] = specifyNextNode;
            param['lastUpdateOrg'] = this.user.extParam.orgId;
            param['lastUpdateUser'] = this.user.userId;
            param['listTaskId'] = this.inValue.listTaskId;
            // // param['listTypeId'] = this.inValue.listTypeId;
            param['approvalStatus'] = 'AB';
            param['operationType'] = this.inValue.operationType;
            param['blackListId'] = this.inValue.blackListId;
            param['isAdjust'] = this.inValue.isAdjust;
            param['taskId'] = this.taskId;
            param['userId'] = this.user.userId;
            if (this.webtype == '1') {
                var bussinessMap = {
                    specifyNextOpers: ss,
                    specifyNextNode: outFlowId,
                    dataMap: {}
                };
                Object.assign(bussinessMap['dataMap'], this.userform.value);
                param["approveMap"] = { result: "0" };
                param.bussinessMap = bussinessMap;
                param.bussinessMap.dataMap['lastAuthUser'] = ss;
                param.bussinessMap.dataMap['lastAuthOrg'] = specifyNextNode;
                param.bussinessMap.dataMap['lastUpdateOrg'] = this.user.extParam.orgId;
                param.bussinessMap.dataMap['lastUpdateUser'] = this.user.userId;
                param.bussinessMap.dataMap['listTaskId'] = this.inValue.listTaskId;
                param.bussinessMap.dataMap['approvalStatus'] = 'AB';
                param.bussinessMap.dataMap['blackListId'] = this.inValue.blackListId;
                param.bussinessMap.dataMap['operationType'] = this.inValue.operationType;
                param['isAdjust'] = this.inValue.isAdjust;
                this.customService.bpmNextTask(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var message = data.returnCode.message;
                        _this.doSave(2, 'backtype');
                        _this.updateListTaskManager();
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: message }];
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                });
            }
            else {
                param['registerUserName'] = this.userName;
                param['registerOrgName'] = this.orgName;
                param['registerOrg'] = this.user.extParam.orgId;
                param['registerUser'] = this.user.userId;
                this.httpService.updateListTaskInfo(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var message = data.returnCode.message;
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: message }];
                        _this.doReset(message);
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                });
            }
        }
        else if (this.modifyValue == '2') {
            var param = Object.assign({}, this.userform.value);
            param['lastAuthUser'] = ss;
            param['lastAuthOrg'] = specifyNextNode;
            param['lastUpdateOrg'] = this.user.extParam.orgId;
            param['lastUpdateUser'] = this.user.userId;
            param['listTaskId'] = this.inValue.listTaskId;
            // param['listTypeId'] = this.inValue.listTypeId;
            param['approvalStatus'] = 'AB';
            param['blackListId'] = this.inValue.blackListId;
            param['operationType'] = this.inValue.operationType;
            param['isAdjust'] = this.inValue.isAdjust;
            param['taskId'] = this.taskId;
            param['userId'] = this.user.userId;
            param["approveMap"] = { result: "0" };
            if (this.workword == 1) {
                param['isUpdateFile'] = 'Y';
            }
            if (this.webtype == '1') {
                var bussinessMap = {
                    specifyNextOpers: ss,
                    specifyNextNode: outFlowId,
                    dataMap: {}
                };
                Object.assign(bussinessMap['dataMap'], this.userform.value);
                param.bussinessMap = bussinessMap;
                param.bussinessMap.dataMap['lastAuthUser'] = ss;
                param.bussinessMap.dataMap['lastAuthOrg'] = specifyNextNode;
                param.bussinessMap.dataMap['lastUpdateOrg'] = this.user.extParam.orgId;
                param.bussinessMap.dataMap['lastUpdateUser'] = this.user.userId;
                param.bussinessMap.dataMap['listTaskId'] = this.inValue.listTaskId;
                param.bussinessMap.dataMap['approvalStatus'] = 'AB';
                param.bussinessMap.dataMap['blackListId'] = this.inValue.blackListId;
                param.bussinessMap.dataMap['operationType'] = this.inValue.operationType;
                param['isAdjust'] = this.inValue.isAdjust;
                this.customService.bpmNextTask(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var message = data.returnCode.message;
                        _this.doSave(2, 'backtype');
                        _this.updateListTaskManager();
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: message }];
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                });
            }
            else {
                param['registerUserName'] = this.userName;
                param['registerOrgName'] = this.orgName;
                param['registerOrg'] = this.user.extParam.orgId;
                param['registerUser'] = this.user.userId;
                this.httpService.updateListTaskInfo(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var message = data.returnCode.message;
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: message }];
                        _this.doReset(message);
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                });
            }
        }
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (s.extParam.specifyNextOpers || s.extParam.specifyNextNode) {
            delete s.extParam.specifyNextOpers;
            delete s.extParam.specifyNextNode;
            var commonHeader_1 = s;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
        }
    };
    // 返回
    CustomMissionUpdate.prototype.doReset = function (message) {
        var _this = this;
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '提示', detail: '提交成功!' });
        if (this.webtype == '1') {
            window.history.go(-1);
        }
        else {
            setTimeout(function () {
                _this.outValue.emit(false);
            }, 300);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomMissionUpdate.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomMissionUpdate.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomMissionUpdate.prototype, "modifyValue", void 0);
    CustomMissionUpdate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-mission-update',
            template: __webpack_require__(/*! ./custom-mission-update.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-update/custom-mission-update.component.html"),
            styles: [__webpack_require__(/*! ./custom-mission-update.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-mission-list/custom-mission-update/custom-mission-update.component.scss")],
        }),
        __metadata("design:paramtypes", [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_9__["CustomeHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
            app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["CusListManageHttpService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_6__["Customtools"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CustomMissionUpdate);
    return CustomMissionUpdate;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/bean/custom-style-manage.bean.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/bean/custom-style-manage.bean.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AddBean, FastListBen, NextListBen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBean", function() { return AddBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FastListBen", function() { return FastListBen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextListBen", function() { return NextListBen; });
var AddBean = /** @class */ (function () {
    function AddBean() {
    }
    return AddBean;
}());

var FastListBen = /** @class */ (function () {
    function FastListBen() {
    }
    return FastListBen;
}());

var NextListBen = /** @class */ (function () {
    function NextListBen() {
    }
    return NextListBen;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-add-modify/custom-add-modify.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-add-modify/custom-add-modify.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 风控等级板块 修改 -->\r\n<div class=\"ui-g-12 main_part\">\r\n  <div class=\"ui-g-10 clear_centen\">\r\n    <div class=\"ui-g-6\">\r\n      <div class=\"ui-g-5 tit\">\r\n        <label appValidation>风险管控等级编号:</label>\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <input *ngIf=\"muste==1\" type=\"text\" maxlength=\"2\" pInputText [(ngModel)]=\"AddBean.typeId\" (keyup)=\"Typechange($event)\">\r\n        <input *ngIf=\"muste==2\" type=\"text\" pInputText [(ngModel)]=\"AddBean.typeId\" disabled>\r\n      </div>\r\n      <div class=\"ui-g-1\" style=\"color:red;padding:0;line-height:35px;\">\r\n        <span *ngIf=\"AddBean.typeId==''||AddBean.typeId==null\">必输</span>\r\n        <span *ngIf=\"typekey\" style=\"position: absolute;\">请输入数字类型</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-6 \">\r\n      <div class=\"ui-g-5 tit \">\r\n        <label appValidation>管控等级:</label>\r\n      </div>\r\n      <div class=\"ui-g-6 \">\r\n        <input type=\"text \" pInputText [(ngModel)]=\"AddBean.riskRange \" (keyup)=\"riskchange($event) \">\r\n      </div>\r\n      <div class=\"ui-g-1 \" style=\"color:red;padding:0;line-height:35px; \">\r\n        <span *ngIf=\"AddBean.riskRange==''||AddBean.riskRange==null\">必输</span>\r\n        <span *ngIf=\"sevrenkey\" style=\"position: absolute;\">请输入大于0的正整数</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-6 \">\r\n      <div class=\"ui-g-5 tit \">\r\n        <label appValidation>一级名单:</label>\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <!-- <p-dropdown [options]=\"fastlistbz\" [(ngModel)]=\"AddBean.listTypeOneId\" (onChange)=\"nextlistbox(AddBean.listTypeOneId)\" #a></p-dropdown> -->\r\n        <p-dropdown class=\"bbb\" [options]=\"fastlistbz\" [(ngModel)]=\"AddBean.listTypeOneId\" (onChange)=\"nextlistbox(AddBean.listTypeOneId)\"></p-dropdown>\r\n      </div>\r\n      <div class=\"ui-g-1 \" style=\"color:red;padding:0;line-height:35px; \">\r\n        <span *ngIf=\"AddBean.listTypeOneId==''||AddBean.listTypeOneId ==null \">必输</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-6 \">\r\n      <div class=\"ui-g-5 tit \">\r\n        <label appValidation>二级名单:</label>\r\n      </div>\r\n      <div class=\"ui-g-6 \">\r\n        <p-dropdown [options]=\"nextlistbz \" [(ngModel)]=\"AddBean.parentListTypeId\" (onChange)=\"checklist(a)\" #a> </p-dropdown>\r\n      </div>\r\n      <div class=\"ui-g-1 \" style=\"color:red;padding:0;line-height:35px; \">\r\n        <span *ngIf=\"AddBean.parentListTypeId==''||AddBean.parentListTypeId==null \">必输</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-6 \">\r\n      <div class=\"ui-g-5 tit \">\r\n        <label appValidation>风险管控等级名称:</label>\r\n      </div>\r\n      <div class=\"ui-g-6 \">\r\n        <input type=\"text \" pInputText [(ngModel)]=\"AddBean.listTypeName \">\r\n      </div>\r\n      <div class=\"ui-g-1 \" style=\"color:red;padding:0;line-height:35px; \">\r\n        <span *ngIf=\"AddBean.listTypeName ==''||AddBean.listTypeName ==null \">必输</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-6 \">\r\n      <div class=\"ui-g-5 tit \">\r\n        <label appValidation>是否有限的录入权限:</label>\r\n      </div>\r\n      <div class=\"ui-g-6 \">\r\n        <p-dropdown [options]=\"orderStatusId \" [(ngModel)]=\"AddBean.isEnteringAuth\"></p-dropdown>\r\n      </div>\r\n      <div class=\"ui-g-1 \" style=\"color:red;padding:0;line-height:35px;\">\r\n        <span *ngIf=\"AddBean.isEnteringAuth==''||AddBean.isEnteringAuth==null \">必输</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-6 \">\r\n      <div class=\"ui-g-5 tit \">\r\n        <label appValidation>借款人是否提示和控制:</label>\r\n      </div>\r\n      <div class=\"ui-g-6 \">\r\n        <p-dropdown [options]=\"orderStatusId\" [(ngModel)]=\"AddBean.isBorrowAuth\"></p-dropdown>\r\n      </div>\r\n      <div class=\"ui-g-1 \" style=\"color:red;padding:0;line-height:35px;\">\r\n        <span *ngIf=\"AddBean.isBorrowAuth==''||AddBean.isBorrowAuth==null\">必输</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-6 \">\r\n      <div class=\"ui-g-5 tit \">\r\n        <label appValidation>担保人是否提示和控制:</label>\r\n      </div>\r\n      <div class=\"ui-g-6 \">\r\n        <p-dropdown [options]=\"orderStatusId \" [(ngModel)]=\"AddBean.isBoudsmanAuth \"></p-dropdown>\r\n      </div>\r\n      <div class=\"ui-g-1 \" style=\"color:red;padding:0;line-height:35px; \">\r\n        <span *ngIf=\"AddBean.isBoudsmanAuth==''||AddBean.isBoudsmanAuth==null \">必输</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-6 \">\r\n      <div class=\"ui-g-5 tit \">\r\n        <label appValidation>借款人关联人是否提示和控制:</label>\r\n      </div>\r\n      <div class=\"ui-g-6 \">\r\n        <p-dropdown [options]=\"orderStatusId \" [(ngModel)]=\"AddBean.isBorrowRelevance \"></p-dropdown>\r\n      </div>\r\n      <div class=\"ui-g-1 \" style=\"color:red;padding:0;line-height:35px; \">\r\n        <span *ngIf=\"AddBean.isBorrowRelevance==''||AddBean.isBorrowRelevance==null \">必输</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-6 \">\r\n      <div class=\"ui-g-5 tit \">\r\n        <label appValidation>担保人关联人是否提示和控制:</label>\r\n      </div>\r\n      <div class=\"ui-g-6 \">\r\n        <p-dropdown [options]=\"orderStatusId \" [(ngModel)]=\"AddBean.isBoudsmanRelevance \"></p-dropdown>\r\n      </div>\r\n      <div class=\"ui-g-1 \" style=\"color:red;padding:0;line-height:35px; \">\r\n        <span *ngIf=\"AddBean.isBoudsmanRelevance==''||AddBean.isBoudsmanRelevance==null \">必输</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-6 \">\r\n      <div class=\"ui-g-5 tit \">\r\n        <label appValidation>自动失效时长（月):</label>\r\n      </div>\r\n      <div class=\"ui-g-6 \">\r\n        <input type=\"text \" pInputText [(ngModel)]=\"AddBean.isVaildTime \" (keyup)=\"monthchange($event) \">\r\n      </div>\r\n      <div class=\"ui-g-1 \" style=\"color:red;padding:0;line-height:35px; \">\r\n        <span *ngIf=\"AddBean.isVaildTime==''||AddBean.isVaildTime==null \">必输</span>\r\n        <span *ngIf=\"monthkey\" style=\"position: absolute;\">请输入数字类型</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 \">\r\n      <div class=\"ui-g-3 tit \">定义:</div>\r\n      <div class=\"ui-g-9 \" style=\"width:71%!important; \">\r\n        <textarea pInputTextarea [(ngModel)]=\"AddBean.comments \" name=\"comments \"></textarea>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 btn \">\r\n    <button pButton type=\"button \" label=\"保存\" class=\"queryBtn \" (click)=\"save() \"></button>\r\n    <!-- <button pButton type=\"button \" label=\"保存 \" class=\"queryBtn \" (click)=\"cerat() \"></button> -->\r\n    <button pButton type=\"button \" label=\"返回\" class=\"resetBtn \" (click)=\"back() \"></button>\r\n  </div>\r\n</div>\r\n<p-growl [(value)]=\"msgs \" [style]=\"{ 'z-index': '1100'} \"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-add-modify/custom-add-modify.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-add-modify/custom-add-modify.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.main_part {\n  background: #fff; }\n.main_part .tit {\n    text-align: right; }\n.main_part .table {\n    text-align: center; }\n.main_part .btn {\n    text-align: center; }\n.main_part .pd4 {\n    padding: 7px 0 !important; }\n.main_part input[pInputText] {\n    min-width: 80px !important; }\n.clear_centen {\n  margin: 0 8.3333%; }\n@media screen and (max-width: 1550px) {\n  .clear_centen {\n    margin: 0 0;\n    width: 96%; } }\n.order-query {\n  margin-top: 10px;\n  padding: 0;\n  padding-bottom: 0px; }\n.order-query .tit {\n    text-align: right; }\n.order-query .query-criteria {\n    padding: 0 30px; }\n.order-query .query-criteria .tit {\n      text-align: right; }\n.order-query .query-criteria .dy {\n      width: 12.5% !important; }\n.order-query .query-criteria .dys {\n      width: 75% !important; }\n.order-query .btn {\n    text-align: center; }\n.order-query .btn .queryBtn,\n    .order-query .btn .resetBtn {\n      width: 100px;\n      margin: 30px; }\n.juery-result {\n  padding: 0 30px;\n  height: 400px;\n  overflow: auto; }\n.juery-result .addBtn {\n    width: 100px;\n    margin-top: 15px; }\n.juery-result .table {\n    border: 1px solid #bdbdbd;\n    text-align: center;\n    margin: 15px 0; }\n.juery-result .table .modify {\n      margin-right: 20px; }\n.bg {\n  background: #fdfdfd;\n  height: 230px; }\n.iscolor {\n  background: #ffc900;\n  float: right; }\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n/*\r\n*日历组件的样式修改开始\r\n*/\n:host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important; }\n:host/deep/ .ui-datepicker select.ui-datepicker-month {\n  width: 40%;\n  font-size: 16px !important; }\n:host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n:host/deep/ #dro .ui-dropdown {\n  width: 24% !important; }\n/*\r\n*日历组件的样式修改结束\r\n*/\n.tax-information {\n  position: relative;\n  height: 50px; }\n.tax-information .tax-btn {\n    position: absolute;\n    top: 22px;\n    right: 8px; }\n.btn {\n  text-align: center; }\n.btn .queryBtn,\n  .btn .resetBtn {\n    width: 100px;\n    margin: 30px; }\n.requireLabel {\n  margin-left: 150px; }\n.delete {\n  z-index: 1111 !important; }\n.a_btn {\n  width: 75px;\n  display: block;\n  overflow: hidden;\n  background: #19b0c8;\n  background: linear-gradient(#19b0c8, #19b0c8);\n  border-radius: 3px;\n  border: 1px solid #0f6eac;\n  color: #FFFFFF;\n  font-size: 14px;\n  height: 1.9em;\n  padding: 0 1.5em;\n  line-height: 2.0em;\n  border: 0 none;\n  height: 28.5px;\n  margin-right: 5px;\n  text-align: center;\n  float: left; }\n:host/deep/ .ui-dialog .ui-dialog-content {\n  height: 730px !important;\n  overflow: hidden; }\n:host/deep/ .ui-confirmdialog.ui-dialog .ui-dialog-content {\n  height: 80px !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLXN0eWxlLW1hbmFnZS9jdXN0b20tYWRkLW1vZGlmeS9jdXN0b20tYWRkLW1vZGlmeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLXN0eWxlLW1hbmFnZS9jdXN0b20tYWRkLW1vZGlmeS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1saXN0LW1hbmFnZVxcY3VzdG9tLXN0eWxlLW1hbmFnZVxcY3VzdG9tLWFkZC1tb2RpZnlcXGN1c3RvbS1hZGQtbW9kaWZ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGdCQUFnQixFQUFBO0FBRHBCO0lBR1EsaUJBQWlCLEVBQUE7QUFIekI7SUFNUSxrQkFBa0IsRUFBQTtBQU4xQjtJQVNRLGtCQUFrQixFQUFBO0FBVDFCO0lBWVEseUJBQXlCLEVBQUE7QUFaakM7SUFlUSwwQkFBMEIsRUFBQTtBQUlsQztFQUNJLGlCQUFnQixFQUFBO0FBRXBCO0VBQ0k7SUFDSSxXQUFVO0lBQ1YsVUFBVSxFQUFBLEVBQ2I7QUFHTDtFQU1FLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsbUJBQW1CLEVBQUE7QUFSckI7SUFFUSxpQkFBaUIsRUFBQTtBQUZ6QjtJQVVNLGVBQWUsRUFBQTtBQVZyQjtNQVlRLGlCQUFpQixFQUFBO0FBWnpCO01BZVEsdUJBQXFCLEVBQUE7QUFmN0I7TUFrQlEscUJBQW1CLEVBQUE7QUFsQjNCO0lBc0JNLGtCQUFrQixFQUFBO0FBdEJ4Qjs7TUF5QlUsWUFBWTtNQUNaLFlBQVksRUFBQTtBQU90QjtFQUVJLGVBQWU7RUFFZixhQUFZO0VBQ1osY0FBYyxFQUFBO0FBTGxCO0lBT1EsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0FBUnhCO0lBV1EseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixjQUFjLEVBQUE7QUFidEI7TUFlWSxrQkFBa0IsRUFBQTtBQUk5QjtFQUNJLG1CQUFtQjtFQUVuQixhQUFhLEVBQUE7QUFHakI7RUFDSSxtQkFBbUI7RUFDbkIsWUFBWSxFQUFBO0FBTWhCO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7O0NEN0JDO0FDaUNEO0VBQ0UsVUFBUztFQUNULDBCQUEwQixFQUFBO0FBRzVCO0VBQ0MsVUFBUztFQUNULDBCQUEwQixFQUFBO0FBRzNCO0VBQ0MsY0FBYSxFQUFBO0FBRWQ7RUFDSSxxQkFBcUIsRUFBQTtBQUV6Qjs7Q0RoQ0M7QUNtQ0Q7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0FBRmhCO0lBSVEsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVLEVBQUE7QUFHbEI7RUFDSSxrQkFBa0IsRUFBQTtBQUR0Qjs7SUFJUSxZQUFZO0lBQ1osWUFBWSxFQUFBO0FBRXBCO0VBQ0Usa0JBQWtCLEVBQUE7QUFFcEI7RUFDSSx3QkFBd0IsRUFBQTtBQUU1QjtFQUNJLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw2Q0FBNkM7RUFDN0Msa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxjQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7QUFFZjtFQUNJLHdCQUF1QjtFQUN2QixnQkFBZ0IsRUFBQTtBQUVwQjtFQUNJLHVCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLXN0eWxlLW1hbmFnZS9jdXN0b20tYWRkLW1vZGlmeS9jdXN0b20tYWRkLW1vZGlmeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5tYWluX3BhcnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmOyB9XG4gIC5tYWluX3BhcnQgLnRpdCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgLm1haW5fcGFydCAudGFibGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAubWFpbl9wYXJ0IC5idG4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAubWFpbl9wYXJ0IC5wZDQge1xuICAgIHBhZGRpbmc6IDdweCAwICFpbXBvcnRhbnQ7IH1cbiAgLm1haW5fcGFydCBpbnB1dFtwSW5wdXRUZXh0XSB7XG4gICAgbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7IH1cblxuLmNsZWFyX2NlbnRlbiB7XG4gIG1hcmdpbjogMCA4LjMzMzMlOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NTBweCkge1xuICAuY2xlYXJfY2VudGVuIHtcbiAgICBtYXJnaW46IDAgMDtcbiAgICB3aWR0aDogOTYlOyB9IH1cblxuLm9yZGVyLXF1ZXJ5IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDBweDsgfVxuICAub3JkZXItcXVlcnkgLnRpdCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgLm9yZGVyLXF1ZXJ5IC5xdWVyeS1jcml0ZXJpYSB7XG4gICAgcGFkZGluZzogMCAzMHB4OyB9XG4gICAgLm9yZGVyLXF1ZXJ5IC5xdWVyeS1jcml0ZXJpYSAudGl0IHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gICAgLm9yZGVyLXF1ZXJ5IC5xdWVyeS1jcml0ZXJpYSAuZHkge1xuICAgICAgd2lkdGg6IDEyLjUlICFpbXBvcnRhbnQ7IH1cbiAgICAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIC5keXMge1xuICAgICAgd2lkdGg6IDc1JSAhaW1wb3J0YW50OyB9XG4gIC5vcmRlci1xdWVyeSAuYnRuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAub3JkZXItcXVlcnkgLmJ0biAucXVlcnlCdG4sXG4gICAgLm9yZGVyLXF1ZXJ5IC5idG4gLnJlc2V0QnRuIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIG1hcmdpbjogMzBweDsgfVxuXG4uanVlcnktcmVzdWx0IHtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogYXV0bzsgfVxuICAuanVlcnktcmVzdWx0IC5hZGRCdG4ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XG4gIC5qdWVyeS1yZXN1bHQgLnRhYmxlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDE1cHggMDsgfVxuICAgIC5qdWVyeS1yZXN1bHQgLnRhYmxlIC5tb2RpZnkge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XG5cbi5iZyB7XG4gIGJhY2tncm91bmQ6ICNmZGZkZmQ7XG4gIGhlaWdodDogMjMwcHg7IH1cblxuLmlzY29sb3Ige1xuICBiYWNrZ3JvdW5kOiAjZmZjOTAwO1xuICBmbG9hdDogcmlnaHQ7IH1cblxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDsgfVxuXG4vKlxyXG4q5pel5Y6G57uE5Lu255qE5qC35byP5L+u5pS55byA5aeLXHJcbiovXG46aG9zdC9kZWVwLyAudWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci15ZWFyIHtcbiAgd2lkdGg6IDUwJTtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXItbW9udGgge1xuICB3aWR0aDogNDAlO1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDsgfVxuXG46aG9zdC9kZWVwLyAudWktYnV0dG9uLnVpLWJ1dHRvbi1zZWNvbmRhcnkudWktc3RhdGUtZGVmYXVsdCB7XG4gIGNvbG9yOiAjZmZmZmZmOyB9XG5cbjpob3N0L2RlZXAvICNkcm8gLnVpLWRyb3Bkb3duIHtcbiAgd2lkdGg6IDI0JSAhaW1wb3J0YW50OyB9XG5cbi8qXHJcbirml6Xljobnu4Tku7bnmoTmoLflvI/kv67mlLnnu5PmnZ9cclxuKi9cbi50YXgtaW5mb3JtYXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTBweDsgfVxuICAudGF4LWluZm9ybWF0aW9uIC50YXgtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMnB4O1xuICAgIHJpZ2h0OiA4cHg7IH1cblxuLmJ0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuYnRuIC5xdWVyeUJ0bixcbiAgLmJ0biAucmVzZXRCdG4ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW46IDMwcHg7IH1cblxuLnJlcXVpcmVMYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDsgfVxuXG4uZGVsZXRlIHtcbiAgei1pbmRleDogMTExMSAhaW1wb3J0YW50OyB9XG5cbi5hX2J0biB7XG4gIHdpZHRoOiA3NXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogIzE5YjBjODtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxOWIwYzgsICMxOWIwYzgpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZjZlYWM7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogMS45ZW07XG4gIHBhZGRpbmc6IDAgMS41ZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjBlbTtcbiAgYm9yZGVyOiAwIG5vbmU7XG4gIGhlaWdodDogMjguNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbG9hdDogbGVmdDsgfVxuXG46aG9zdC9kZWVwLyAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XG4gIGhlaWdodDogNzMwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG46aG9zdC9kZWVwLyAudWktY29uZmlybWRpYWxvZy51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcbiAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7IH1cbiIsIi5tYWluX3BhcnR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLnRpdHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC50YWJsZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYnRue1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5wZDR7XHJcbiAgICAgICAgcGFkZGluZzogN3B4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlucHV0W3BJbnB1dFRleHRde1xyXG4gICAgICAgIG1pbi13aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG59XHJcbi5jbGVhcl9jZW50ZW57XHJcbiAgICBtYXJnaW46MCA4LjMzMzMlO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDoxNTUwcHgpe1xyXG4gICAgLmNsZWFyX2NlbnRlbntcclxuICAgICAgICBtYXJnaW46MCAwO1xyXG4gICAgICAgIHdpZHRoOiA5NiU7XHJcbiAgICB9O1xyXG59XHJcbi8v6K6i5Y2V5p+l6K+iXHJcbi5vcmRlci1xdWVyeSB7XHJcbiAgICAudGl0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4vLyBwb3NpdGlvbjphYnNvbHV0ZTtcclxuLy8gdG9wOjA7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7IC8v5p+l6K+i5p2h5Lu2XHJcbiAgLnF1ZXJ5LWNyaXRlcmlhIHtcclxuICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICAudGl0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmR5e1xyXG4gICAgICAgIHdpZHRoOjEyLjUlIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5keXN7XHJcbiAgICAgICAgd2lkdGg6NzUlIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLnF1ZXJ5QnRuLFxyXG4gICAgICAucmVzZXRCdG4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICAgIFxyXG4gIH0gXHJcbn1cclxuLy/mn6Xor6Lnu5PmnpxcclxuLmp1ZXJ5LXJlc3VsdCB7XHJcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiBcclxuICAgIGhlaWdodDo0MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgLmFkZEJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAudGFibGUge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgIC5tb2RpZnkge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5iZ3tcclxuICAgIGJhY2tncm91bmQ6ICNmZGZkZmQ7XHJcbiAgICAvLyBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxuICAgIC8vIGhlaWdodDogNDYwcHg7XHJcbn1cclxuLmlzY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZDogI2ZmYzkwMDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4vLyA6aG9zdC9kZWVwLyAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIC51aS1kcm9wZG93bntcclxuLy8gICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy/ooajmoLzlrZfmr43jgIHmlbDlrZfoh6rliqjmjaLooYxcclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YXtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi8qXHJcbirml6Xljobnu4Tku7bnmoTmoLflvI/kv67mlLnlvIDlp4tcclxuKi9cclxuLy/pgInmi6nlubTku71cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXIteWVhcntcclxuICB3aWR0aDo1MCU7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy/pgInmi6nmnIjku71cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXItbW9udGh7XHJcbiB3aWR0aDo0MCU7XHJcbiBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG4vL+a4heepuuOAgeS7iuWkqeS4pOS4quaMiemSrueahOWtl+S9k+minOiJslxyXG46aG9zdC9kZWVwLyAudWktYnV0dG9uLnVpLWJ1dHRvbi1zZWNvbmRhcnkudWktc3RhdGUtZGVmYXVsdHtcclxuIGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuOmhvc3QvZGVlcC8gI2RybyAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDI0JSAhaW1wb3J0YW50O1xyXG59XHJcbi8qXHJcbirml6Xljobnu4Tku7bnmoTmoLflvI/kv67mlLnnu5PmnZ9cclxuKi9cclxuLnRheC1pbmZvcm1hdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAudGF4LWJ0biB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMjJweDtcclxuICAgICAgICByaWdodDogOHB4O1xyXG4gICAgfVxyXG59IFxyXG4uYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC5xdWVyeUJ0bixcclxuICAgIC5yZXNldEJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgIH19XHJcbi5yZXF1aXJlTGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxufVxyXG4uZGVsZXRle1xyXG4gICAgei1pbmRleDogMTExMSAhaW1wb3J0YW50O1xyXG59XHJcbi5hX2J0bntcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogIzE5YjBjODtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMTliMGM4LCAjMTliMGM4KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwZjZlYWM7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGhlaWdodDogMS45ZW07XHJcbiAgICBwYWRkaW5nOiAwIDEuNWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuMGVtO1xyXG4gICAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgICBoZWlnaHQ6MjguNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50e1xyXG4gICAgaGVpZ2h0OiA3MzBweCFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1jb25maXJtZGlhbG9nLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDgwcHghaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-add-modify/custom-add-modify.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-add-modify/custom-add-modify.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: CustomAddModify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAddModify", function() { return CustomAddModify; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var _bean_custom_style_manage_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bean/custom-style-manage.bean */ "./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/bean/custom-style-manage.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomAddModify = /** @class */ (function () {
    function CustomAddModify(cusOperationHttpService, confirmationService, commfunc, fb, router) {
        this.cusOperationHttpService = cusOperationHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.router = router;
        this.muste = 1;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.headerTitle = '';
        this.FastListBen = new _bean_custom_style_manage_bean__WEBPACK_IMPORTED_MODULE_7__["FastListBen"]();
        this.orderStatusId = [
            { label: "请选择", value: "" },
            { label: "是", value: "Y" },
            { label: "否", value: "N" },
        ];
        this.nextlistbzs = [{ label: "请选择", value: "" }];
        this.fastlistbz = [{ label: "请选择", value: "" }];
        this.nextlistbz = [{ label: "请选择", value: "" }];
        this.msgs = [];
        this.AddBean = new _bean_custom_style_manage_bean__WEBPACK_IMPORTED_MODULE_7__["AddBean"]();
        // 等级
        this.sevrenkey = false;
        // 月
        this.monthkey = false;
        // 等级编号
        this.typekey = false;
        this.codeValues(); //调用方法，获取全部码值
    }
    CustomAddModify.prototype.ngOnInit = function () {
        this.fastlistbox();
    };
    CustomAddModify.prototype.alldis = function () {
        var _this = this;
        if (this.AddBean.typeId && this.AddBean.riskRange && this.AddBean.listTypeOneId && this.AddBean.parentListTypeId
            && this.AddBean.listTypeName && this.AddBean.isEnteringAuth && this.AddBean.isBorrowAuth && this.AddBean.isBoudsmanAuth
            && this.AddBean.isBorrowRelevance && this.AddBean.isBoudsmanRelevance && this.AddBean.isVaildTime) {
            if (this.muste == 1) {
                this.cerat();
            }
            else { //修改保存
                this.cusOperationHttpService.updateBlackListType(this.AddBean).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.back();
                        _this.msgs = [];
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
            }
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请检查必输项！' });
        }
    };
    //新增名单 -保存
    CustomAddModify.prototype.cerat = function () {
        var _this = this;
        // this.AddBean.riskRange = Number(this.AddBean.riskRange);
        this.AddBean.listTypeHierarchy = 3; //层级默认传3
        this.cusOperationHttpService.addBlackListType(this.AddBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.back();
                _this.msgs = [];
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
    // 保存
    CustomAddModify.prototype.save = function () {
        this.alldis();
    };
    // submitadd() {
    //   this.AddBean.riskRange = Number(this.AddBean.riskRange);
    //   this.AddBean.listTypeHierarchy = 3;//层级默认传3
    //   this.cusOperationHttpService.listCallBackFunction(this.AddBean).subscribe(data => {
    //     if (data.returnCode.code == 'success') {
    //       this.msgs = [];
    //       this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
    //     }
    //   })
    // }
    // // 风险等级提交
    // submit() {
    //   this.cusOperationHttpService.listCallBackFunction(this.AddBean).subscribe(data => {
    //     if (data.returnCode.code == 'success') {
    //       this.msgs = [];
    //       this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
    //     } else {
    //       this.msgs = [];
    //       this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
    //     }
    //   }, error => {
    //     this.msgs = [];
    //     this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
    //   })
    // }
    //fastlistbox 一级名单下拉框
    CustomAddModify.prototype.fastlistbox = function () {
        var _this = this;
        var pams = {
            listTypeHierarchy: 1,
        };
        this.cusOperationHttpService.selectBlackListType(pams).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.returnList.forEach(function (item) {
                    _this.fastlistbz.push({ label: item.listTypeName, value: item.listTypeId });
                });
                if (_this.modifyValue) {
                    _this.muste = 2;
                    debugger;
                    _this.nextlistbox(_this.modifyValue.listTypeOneId);
                    setTimeout(function () {
                        _this.AddBean = _this.modifyValue;
                        console.log(_this.AddBean, "传参11111111111");
                    }, 500);
                }
                else {
                    _this.AddBean.isEnteringAuth = "N",
                        _this.AddBean.isBorrowAuth = "Y",
                        _this.AddBean.isBoudsmanAuth = "Y",
                        _this.AddBean.isBorrowRelevance = "Y",
                        _this.AddBean.isBoudsmanRelevance = "Y";
                }
            }
        });
    };
    //nextlistbox 二级名单下拉框
    CustomAddModify.prototype.nextlistbox = function (a) {
        var _this = this;
        console.log('a:', a);
        // console.log(a.value,a.label)
        // console.log(typeof a)
        // let parentListTypeId = (typeof a) == 'string' ? a : a.value;
        // if(typeof a !== "string"){
        //   this.AddBean.listTypeOneName=a.label,
        //   this.AddBean.listTypeOneId=a.value      
        // }
        for (var i = 0; i < this.fastlistbz.length; i++) {
            if (this.AddBean.listTypeOneId == this.fastlistbz[i].value) {
                this.AddBean.listTypeOneName = this.fastlistbz[i].label;
                console.log(this.AddBean.listTypeOneId);
                console.log(this.AddBean.listTypeOneName);
                console.log(this.fastlistbz, "数组");
            }
        }
        this.AddBean.parentListTypeId = "";
        this.nextlistbzs = [{ label: "请选择", value: "" }];
        this.nextlistbz = [{ label: "请选择", value: "" }];
        var pams = {
            parentListTypeId: a,
            listTypeHierarchy: 2,
        };
        this.cusOperationHttpService.selectBlackListType(pams).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.returnList.forEach(function (item) {
                    _this.nextlistbz.push({ label: item.listTypeName, value: item.listTypeId });
                });
            }
        });
    };
    CustomAddModify.prototype.checklist = function (a) {
        console.log(a, "b");
        console.log(a.value, a.label);
        this.AddBean.listTypeTwoName = a.label,
            this.AddBean.listTypeTwoId = a.value;
    };
    CustomAddModify.prototype.nextlistbzsd = function (s) {
        var _this = this;
        this.nextlistbzs = [{ label: "请选择", value: "" }];
        var pams = {
            parentListTypeId: s,
            listTypeHierarchy: 3,
        };
        this.cusOperationHttpService.selectBlackListType(pams).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.returnList.forEach(function (item) {
                    _this.nextlistbzs.push({ label: item.listTypeName, value: item.listTypeId });
                });
            }
        });
    };
    //码值
    CustomAddModify.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
    };
    // 返回关闭
    CustomAddModify.prototype.back = function () {
        this.outValue.emit({ display: false });
    };
    CustomAddModify.prototype.riskchange = function (event) {
        if (Number(event.target.value) == 0) {
            this.sevrenkey = false;
            // alert(Number(event.target.value))
            // event.target.value = '';
            // return
        }
        else if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["checkZzNum"])(null, event.target.value)) {
            this.sevrenkey = true;
            event.target.value = '';
            return;
        }
        else {
            this.sevrenkey = false;
        }
    };
    CustomAddModify.prototype.monthchange = function (event) {
        console.log(event.target.value);
        if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["checkNumber"])(null, event.target.value)) {
            this.monthkey = true;
            event.target.value = '';
            return;
        }
        else {
            this.monthkey = false;
        }
    };
    CustomAddModify.prototype.Typechange = function (event) {
        if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["checkNumber"])(null, event.target.value)) {
            this.typekey = true;
            event.target.value = '';
            return;
        }
        else {
            this.typekey = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomAddModify.prototype, "modifyValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomAddModify.prototype, "outValue", void 0);
    CustomAddModify = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-add-modify',
            template: __webpack_require__(/*! ./custom-add-modify.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-add-modify/custom-add-modify.component.html"),
            styles: [__webpack_require__(/*! ./custom-add-modify.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-add-modify/custom-add-modify.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_6__["CusListManageHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomAddModify);
    return CustomAddModify;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-style-manage.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-style-manage.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 main_part\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-4\">\r\n      <div class=\"ui-g-5 tit\">一级名单:</div>\r\n      <div class=\"ui-g-7\">\r\n        <p-dropdown [options]=\"fastlistbz\" [(ngModel)]=\"fastlistbzs\" (onChange)=\"nextlistbox(fastlistbzs)\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <div class=\"ui-g-5 tit\">二级名单:</div>\r\n      <div class=\"ui-g-7\">\r\n        <p-dropdown [options]=\"nextlistbz\" [(ngModel)]=\"parentListTypeId\" (onChange)=\"nextlistbzsd(parentListTypeId)\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <div class=\"ui-g-5 tit\">风险管控等级:</div>\r\n      <div class=\"ui-g-7\">\r\n        <!-- <p-dropdown [options]=\"nextlistbzs\" [(ngModel)]=\"riskRange\"></p-dropdown> -->\r\n        <p-dropdown [options]=\"nextlistbzs\" [(ngModel)]=\"listTypeId\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div style=\"margin:50px 0 25px 0;\" class=\"ui-g-12 btn\">\r\n    <button pButton label=\"查询\" (click)=\"queryClick(1,true)\"></button>\r\n    <button pButton label=\"重置\" (click)=\"resetClick()\"></button>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <button pButton label=\"新增\" class=\"iscolor\" (click)=\"add()\"></button>\r\n  </div>\r\n  <div class=\"ui-g-12 table base-table\">\r\n    <p-dataTable [value]=\"tableData\" [scrollable]=\"true\">\r\n      <p-column field=\"typeId\" header=\"编号\" [style]=\"{width:'80px'}\"></p-column>\r\n      <p-column field=\"listTypeOneName\" header='一级名单' [style]=\"{'width':'150px'}\"></p-column>\r\n      <p-column field=\"listTypeTwoName\" header='二级名单' [style]=\"{'width':'150px'}\"></p-column>\r\n      <p-column field=\"listTypeName\" header='风险管控等级' [style]=\"{'width':'150px'}\"></p-column>\r\n      <p-column field=\"isVaildTime\" header='自动失效时长（月）' [style]=\"{'width':'160px'}\"></p-column>\r\n      <p-column field=\"classifyId\" header='分类编号' [style]=\"{'width':'150px'}\"></p-column>\r\n      <p-column field=\"riskRange\" header='管控等级' [style]=\"{'width':'150px'}\"></p-column>\r\n      <p-column field=\"paymentStatus\" header='操作' [style]=\"{'width':'150px'}\">\r\n        <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n          <span (click)=\"update(col)\" class=\"tabelUpdateIco\">修改</span>\r\n          <span (click)=\"delete(col)\" class=\"tabelDeleteIco\">删除</span>\r\n          <span (click)=\"detail(col)\" class=\"tabelDetailIco\">详情</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n    <p-paginator first={{first}} rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,30,50,200]\"\r\n      (onPageChange)=\"paginate($event)\"></p-paginator>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <button pButton type=\"button\" label=\"一级名单维护\" class=\"queryBtn\" (click)=\"fastmanage()\"></button>\r\n    <button pButton type=\"button\" label=\"二级名单维护\" class=\"queryBtn\" (click)=\"lastmanage()\"></button>\r\n    <button [disabled]='downkey' pButton type=\"button\" label=\"下载\" class=\"queryBtn\" (click)=\"downlon()\"></button>\r\n  </div>\r\n</div>\r\n<!-- 一级名单维护 -->\r\n<p-dialog modal=\"modal\" [(visible)]=\"display1\">\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <p style=\"display: flex;flex-direction: row;\">\r\n    <span style=\"flex:1;text-align: left;font-weight: bolder;\">一级名单维护列表</span>\r\n    <span style=\"flex:1;text-align: right;\">\r\n      <button pButton label=\"新增\" (click)=\"add1()\"></button>\r\n    </span>\r\n  </p>\r\n  <div class=\"ui-g-12 juery-result\">\r\n    <div class=\"table base-table\">\r\n      <p-dataTable [(value)]=\"tableData1\" [scrollable]=\"true\" [style]=\"{'text-align':'center'}\" scrollHeight=\"350px\">\r\n        <p-column field=\"typeId\" header='编号' [style]=\"{'width':'80px'}\"></p-column>\r\n        <p-column field=\"listTypeName\" header='一级名单名称' [style]=\"{'width':'180px'}\"></p-column>\r\n        <p-column field=\"comments\" header='定义' [style]=\"{'width':'180px'}\"></p-column>\r\n        <p-column field=\"\" header='操作' [style]=\"{'width':'180px'}\">\r\n          <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n            <span (click)=\"updatefast(col)\" class=\"tabelUpdateIco\">修改</span>\r\n            <span (click)=\"deletefast(col)\" class=\"tabelDeleteIco\">删除</span>\r\n          </ng-template>\r\n        </p-column>\r\n      </p-dataTable>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 order-query bg\" *ngIf=\"fastlist\">\r\n    <form>\r\n      <div class=\"ui-g-10 query-criteria\" style=\"margin:0 8.3333%;\">\r\n        <div class=\"ui-g-6\">\r\n          <div class=\"ui-g-3 tit\">\r\n            编号:\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <input type=\"text\" [disabled]=\"!isadd1\" maxlength=\"2\" pInputText name=\"typeId\" [(ngModel)]=\"typeId\">\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n          <div class=\"ui-g-3 tit\">\r\n            一级名单名称:\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText name=\"listTypeName\" [(ngModel)]=\"listTypeName\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-10 query-criteria\" style=\"margin:0 8.3333%;\">\r\n        <div class=\"ui-g-3 dy\" style=\"text-align:right;\">\r\n          定义:\r\n        </div>\r\n        <div class=\"ui-g-7 dys\" style=\"text-align:right;\">\r\n          <textarea pInputTextarea [(ngModel)]=\"comments\" name=\"comments\"></textarea>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"ui-g-12 btn\">\r\n      <button pButton type=\"button\" label=\"保存\" class=\"queryBtn\" (click)=\"save1()\"></button>\r\n      <button pButton type=\"button\" label=\"取消\" class=\"resetBtn\" (click)=\"back1()\"></button>\r\n    </div>\r\n  </div>\r\n</p-dialog>\r\n<!-- 二级名单维护 -->\r\n<p-dialog modal=\"modal\" [(visible)]=\"display2\" (onHide)=\"closeSetting2()\">\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <p style=\"display: flex;flex-direction: row;\">\r\n    <span style=\"flex:1;text-align: left;font-weight: bolder;\">二级名单维护列表</span>\r\n    <span style=\"flex:1;text-align: right;\">\r\n      <button pButton label=\"新建\" (click)=\"add2()\"></button>\r\n    </span>\r\n  </p>\r\n  <div class=\"ui-g-12 juery-result\">\r\n    <div class=\"table base-table\">\r\n      <p-dataTable [(value)]=\"tableData2\" [scrollable]=\"true\" [style]=\"{'text-align':'center'}\" scrollHeight=\"350px\">\r\n        <p-column field=\"typeId\" header='编号' [style]=\"{'width':'80px'}\"> </p-column>\r\n        <p-column field=\"listTypeOneName\" header='一级名单名称' [style]=\"{'width':'180px'}\"></p-column>\r\n        <p-column field=\"listTypeTwoName\" header='二级名单名称' [style]=\"{'width':'180px'}\"></p-column>\r\n        <p-column field=\"comments\" header='定义' [style]=\"{'width':'180px'}\"></p-column>\r\n        <p-column field=\"\" header='操作' [style]=\"{'width':'180px'}\">\r\n          <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n            <span (click)=\"updatefast1(col)\" class=\"tabelUpdateIco\">修改</span>\r\n            <span (click)=\"deletefast1(col)\" class=\"tabelDeleteIco\">删除</span>\r\n          </ng-template>\r\n        </p-column>\r\n      </p-dataTable>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 order-query bg\" *ngIf=\"lastlist\">\r\n    <form>\r\n      <div class=\"ui-g-10 query-criteria\" style=\"margin:0 8.3333%;\">\r\n        <div class=\"ui-g-6\">\r\n          <div class=\"ui-g-5 tit\">\r\n            编号:\r\n          </div>\r\n          <div class=\"ui-g-7\">\r\n            <input type=\"text\" [disabled]=\"!isadd2\" maxlength=\"2\" pInputText name=\"typeIds\" [(ngModel)]=\"typeIds\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-10 query-criteria\" style=\"margin:0 8.3333%; display: flex;\r\n      justify-content: center\">\r\n        <div class=\"ui-g-6\">\r\n          <div class=\"ui-g-5 tit\">\r\n            一级大类:\r\n          </div>\r\n          <div class=\"ui-g-7\">\r\n            <p-dropdown [options]=\"fastlistbz\" [(ngModel)]=\"parentListTypeIds\" placeholder=\"请选择\" name=\"parentListTypeIds\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n          <div class=\"ui-g-6 tit\">\r\n            二级名单名称:\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <input type=\"text\" pInputText name=\"listTypeNames\" [(ngModel)]=\"listTypeNames\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-10 query-criteria\" style=\"margin:0 8.3333%;\">\r\n        <div class=\"ui-g-4 dy\" style=\"text-align:right;\">\r\n          定义:\r\n        </div>\r\n        <div class=\"ui-g-8 dys\" style=\"text-align:right;\">\r\n          <textarea pInputTextarea [(ngModel)]=\"commentss\" name=\"commentss\"></textarea>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <div class=\"ui-g-12 btn\">\r\n      <button pButton type=\"button\" label=\"保存\" class=\"queryBtn\" (click)=\"save2()\"></button>\r\n      <button pButton type=\"button\" label=\"取消\" class=\"resetBtn\" (click)=\"back2()\"></button>\r\n    </div>\r\n  </div>\r\n\r\n</p-dialog>\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<p-confirmDialog header=\"{{headerTitle1}}\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n  <p-footer>\r\n    <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n    <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n  </p-footer>\r\n</p-confirmDialog>\r\n<!-- 风控等级板块 新增修改详情 -->\r\n<p-dialog modal=\"modal\" [(visible)]=\"dismus3\">\r\n  <p-header>{{headerTitle}}</p-header>\r\n  <div class=\"ui-g-12 main_part\">\r\n    <div class=\"ui-g-10\" style=\"margin:0 8.3333%;\">\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-6 tit\">\r\n          <label appValidation>风险管控等级编号:</label>\r\n        </div>\r\n        <div class=\"ui-g-5\">\r\n          <input type=\"text\" pInputText disabled=\"true\" [(ngModel)]=\"AddBean.typeId\">\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-6 tit\">\r\n          <label appValidation>管控等级:</label>\r\n        </div>\r\n        <div class=\"ui-g-5\">\r\n          <input type=\"number\" pInputText disabled=\"true\" [(ngModel)]=\"AddBean.riskRange\">\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-6 tit\">\r\n          <label appValidation>一级名单:</label>  \r\n        </div>\r\n        <div class=\"ui-g-5\">\r\n          <input type=\"text\" disabled=\"true\" pInputText [(ngModel)]=\"AddBean.listTypeOneName\">\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-6 tit\">\r\n          <label appValidation>二级名单:</label>\r\n        </div>\r\n        <div class=\"ui-g-5\">\r\n          <input type=\"text\" pInputText disabled=\"true\" [(ngModel)]=\"AddBean.listTypeTwoName\">\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-6 tit\">\r\n          <label appValidation>风险管控等级名称:</label>\r\n        </div>\r\n        <div class=\"ui-g-5\">\r\n          <input type=\"text\" pInputText disabled=\"true\" [(ngModel)]=\"AddBean.listTypeName\">\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-6 tit\">\r\n          <label appValidation>是否有限的录入权限:</label>\r\n        </div>\r\n        <div class=\"ui-g-5\">\r\n          <p-dropdown [options]=\"orderStatusId\" disabled=\"true\" [(ngModel)]=\"AddBean.isEnteringAuth\"></p-dropdown>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-6 tit\">\r\n          <label appValidation>借款人是否提示和控制:</label>\r\n        </div>\r\n        <div class=\"ui-g-5\">\r\n          <p-dropdown [options]=\"orderStatusId\" disabled=\"true\" [(ngModel)]=\"AddBean.isBorrowAuth\"></p-dropdown>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-6 tit\">\r\n          <label appValidation>担保人是否提示和控制:</label>\r\n        </div>\r\n        <div class=\"ui-g-5\">\r\n          <p-dropdown [options]=\"orderStatusId\" disabled=\"true\" [(ngModel)]=\"AddBean.isBoudsmanAuth\"></p-dropdown>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-6 tit\">\r\n          <label appValidation>借款人关联人是否提示和控制:</label>\r\n        </div>\r\n        <div class=\"ui-g-5\">\r\n          <p-dropdown [options]=\"orderStatusId\" disabled=\"true\" [(ngModel)]=\"AddBean.isBorrowRelevance\"></p-dropdown>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-6 tit\">\r\n          <label appValidation>担保人关联人是否提示和控制:</label>\r\n        </div>\r\n        <div class=\"ui-g-5\">\r\n          <p-dropdown [options]=\"orderStatusId\" disabled=\"true\" [(ngModel)]=\"AddBean.isBoudsmanRelevance\"></p-dropdown>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-6 tit\">\r\n          <label appValidation>自动失效时长（月):</label>\r\n        </div>\r\n        <div class=\"ui-g-5\">\r\n          <input type=\"text\" pInputText disabled=\"true\" [(ngModel)]=\"AddBean.isVaildTime\">\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-3 tit\">定义:</div>\r\n        <div class=\"ui-g-9\" style=\"width:71%!important;\">\r\n          <textarea pInputTextarea disabled=\"true\" [(ngModel)]=\"AddBean.comments\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"返回\" class=\"resetBtn\" (click)=\"back()\"></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</p-dialog>\r\n\r\n<!-- 修改新增 -->\r\n<p-dialog modal=\"modal\" *ngIf=\"dismus4\" [(visible)]=\"dismus4\" (onHide)=\"closeSetting()\">\r\n  <p-header>{{headerTitle}}</p-header>\r\n  <custom-add-modify [modifyValue]=\"modifyValue\" (outValue)=\"modifyCall($event)\"></custom-add-modify>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-style-manage.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-style-manage.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.main_part {\n  background: #fff; }\n.main_part .tit {\n    text-align: right; }\n.main_part .table {\n    text-align: center; }\n.main_part .btn {\n    text-align: center; }\n.main_part .pd4 {\n    padding: 7px 0 !important; }\n.main_part input[pInputText] {\n    min-width: 80px !important; }\n.main_part .ui-g-12, .main_part .ui-g-4 {\n    padding-left: 0;\n    padding-right: 0; }\n.clearmargin {\n  margin: 0 0.888%; }\n@media screen and (max-width: 1550px) {\n  .clearmargin {\n    margin: 0 ,0; } }\n.order-query {\n  margin-top: 10px;\n  padding: 0;\n  padding-bottom: 0px; }\n.order-query .tit {\n    text-align: right; }\n.order-query .query-criteria {\n    padding: 0 30px; }\n.order-query .query-criteria .tit {\n      text-align: right; }\n.order-query .query-criteria .dy {\n      width: 20% !important; }\n.order-query .query-criteria .dys {\n      width: 80% !important; }\n.order-query .btn {\n    text-align: center; }\n.order-query .btn .queryBtn,\n    .order-query .btn .resetBtn {\n      width: 100px;\n      margin: 20px; }\n.juery-result {\n  padding: 0 30px;\n  height: 400px; }\n.juery-result .addBtn {\n    width: 100px;\n    margin-top: 15px; }\n.juery-result .table {\n    border: 1px solid #bdbdbd;\n    text-align: center;\n    margin: 15px 0; }\n.juery-result .table .modify {\n      margin-right: 20px; }\n.bg {\n  background: #fdfdfd;\n  height: 230px; }\n.iscolor {\n  background: #ffc900;\n  float: right; }\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n/*\r\n*日历组件的样式修改开始\r\n*/\n:host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important; }\n:host/deep/ .ui-datepicker select.ui-datepicker-month {\n  width: 40%;\n  font-size: 16px !important; }\n:host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n:host/deep/ #dro .ui-dropdown {\n  width: 24% !important; }\n/*\r\n*日历组件的样式修改结束\r\n*/\n.tax-information {\n  position: relative;\n  height: 50px; }\n.tax-information .tax-btn {\n    position: absolute;\n    top: 22px;\n    right: 8px; }\n.btn {\n  text-align: center; }\n.btn .queryBtn,\n  .btn .resetBtn {\n    width: 100px;\n    margin: 20px; }\n.requireLabel {\n  margin-left: 150px; }\n.delete {\n  z-index: 1111 !important; }\n.a_btn {\n  width: 75px;\n  display: block;\n  overflow: hidden;\n  background: #19b0c8;\n  background: linear-gradient(#19b0c8, #19b0c8);\n  border-radius: 3px;\n  border: 1px solid #0f6eac;\n  color: #FFFFFF;\n  font-size: 14px;\n  height: 1.9em;\n  padding: 0 1.5em;\n  line-height: 2.0em;\n  border: 0 none;\n  height: 28.5px;\n  margin-right: 5px;\n  text-align: center;\n  float: left; }\n:host/deep/ .ui-dialog .ui-dialog-content {\n  height: 730px !important; }\n:host/deep/ .ui-confirmdialog.ui-dialog .ui-dialog-content {\n  height: 80px !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbGlzdC1tYW5hZ2UvY3VzdG9tLXN0eWxlLW1hbmFnZS9jdXN0b20tc3R5bGUtbWFuYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1saXN0LW1hbmFnZS9jdXN0b20tc3R5bGUtbWFuYWdlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWxpc3QtbWFuYWdlXFxjdXN0b20tc3R5bGUtbWFuYWdlXFxjdXN0b20tc3R5bGUtbWFuYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGdCQUFnQixFQUFBO0FBRHBCO0lBR1EsaUJBQWlCLEVBQUE7QUFIekI7SUFNUSxrQkFBa0IsRUFBQTtBQU4xQjtJQVNRLGtCQUFrQixFQUFBO0FBVDFCO0lBWVEseUJBQXlCLEVBQUE7QUFaakM7SUFlUSwwQkFBMEIsRUFBQTtBQWZsQztJQWtCUSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7QUFHeEI7RUFDSSxnQkFDSixFQUFBO0FBQ0E7RUFDSTtJQUNJLFlBQ0osRUFBQSxFQUFDO0FBR0w7RUFNRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG1CQUFtQixFQUFBO0FBUnJCO0lBRVEsaUJBQWlCLEVBQUE7QUFGekI7SUFVTSxlQUFlLEVBQUE7QUFWckI7TUFZUSxpQkFBaUIsRUFBQTtBQVp6QjtNQWVRLHFCQUFtQixFQUFBO0FBZjNCO01Ba0JRLHFCQUFtQixFQUFBO0FBbEIzQjtJQXNCTSxrQkFBa0IsRUFBQTtBQXRCeEI7O01BeUJVLFlBQVk7TUFDWixZQUFZLEVBQUE7QUFPdEI7RUFFSSxlQUFlO0VBRWYsYUFBWSxFQUFBO0FBSmhCO0lBT1EsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0FBUnhCO0lBV1EseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixjQUFjLEVBQUE7QUFidEI7TUFlWSxrQkFBa0IsRUFBQTtBQUk5QjtFQUNJLG1CQUFtQjtFQUVuQixhQUFhLEVBQUE7QUFHakI7RUFDSSxtQkFBbUI7RUFDbkIsWUFBWSxFQUFBO0FBTWhCO0VBQ0UscUJBQXFCLEVBQUE7QUFFdkI7O0NEN0JDO0FDaUNEO0VBQ0UsVUFBUztFQUNULDBCQUEwQixFQUFBO0FBRzVCO0VBQ0MsVUFBUztFQUNULDBCQUEwQixFQUFBO0FBRzNCO0VBQ0MsY0FBYSxFQUFBO0FBRWQ7RUFDSSxxQkFBcUIsRUFBQTtBQUV6Qjs7Q0RoQ0M7QUNtQ0Q7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0FBRmhCO0lBSVEsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVLEVBQUE7QUFHbEI7RUFDSSxrQkFBa0IsRUFBQTtBQUR0Qjs7SUFJUSxZQUFZO0lBQ1osWUFBWSxFQUFBO0FBRXBCO0VBQ0Usa0JBQWtCLEVBQUE7QUFFcEI7RUFDSSx3QkFBd0IsRUFBQTtBQUU1QjtFQUNJLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw2Q0FBNkM7RUFDN0Msa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxjQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7QUFFZjtFQUNJLHdCQUF1QixFQUFBO0FBRzNCO0VBQ0ksdUJBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1saXN0LW1hbmFnZS9jdXN0b20tc3R5bGUtbWFuYWdlL2N1c3RvbS1zdHlsZS1tYW5hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubWFpbl9wYXJ0IHtcbiAgYmFja2dyb3VuZDogI2ZmZjsgfVxuICAubWFpbl9wYXJ0IC50aXQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gIC5tYWluX3BhcnQgLnRhYmxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLm1haW5fcGFydCAuYnRuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLm1haW5fcGFydCAucGQ0IHtcbiAgICBwYWRkaW5nOiA3cHggMCAhaW1wb3J0YW50OyB9XG4gIC5tYWluX3BhcnQgaW5wdXRbcElucHV0VGV4dF0ge1xuICAgIG1pbi13aWR0aDogODBweCAhaW1wb3J0YW50OyB9XG4gIC5tYWluX3BhcnQgLnVpLWctMTIsIC5tYWluX3BhcnQgLnVpLWctNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7IH1cblxuLmNsZWFybWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAuODg4JTsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTUwcHgpIHtcbiAgLmNsZWFybWFyZ2luIHtcbiAgICBtYXJnaW46IDAgLDA7IH0gfVxuXG4ub3JkZXItcXVlcnkge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMHB4OyB9XG4gIC5vcmRlci1xdWVyeSAudGl0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxuICAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIHtcbiAgICBwYWRkaW5nOiAwIDMwcHg7IH1cbiAgICAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIC50aXQge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIC5keSB7XG4gICAgICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7IH1cbiAgICAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIC5keXMge1xuICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50OyB9XG4gIC5vcmRlci1xdWVyeSAuYnRuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAub3JkZXItcXVlcnkgLmJ0biAucXVlcnlCdG4sXG4gICAgLm9yZGVyLXF1ZXJ5IC5idG4gLnJlc2V0QnRuIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIG1hcmdpbjogMjBweDsgfVxuXG4uanVlcnktcmVzdWx0IHtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBoZWlnaHQ6IDQwMHB4OyB9XG4gIC5qdWVyeS1yZXN1bHQgLmFkZEJ0biB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7IH1cbiAgLmp1ZXJ5LXJlc3VsdCAudGFibGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMTVweCAwOyB9XG4gICAgLmp1ZXJ5LXJlc3VsdCAudGFibGUgLm1vZGlmeSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cblxuLmJnIHtcbiAgYmFja2dyb3VuZDogI2ZkZmRmZDtcbiAgaGVpZ2h0OiAyMzBweDsgfVxuXG4uaXNjb2xvciB7XG4gIGJhY2tncm91bmQ6ICNmZmM5MDA7XG4gIGZsb2F0OiByaWdodDsgfVxuXG46aG9zdC9kZWVwLyAudWktY2VsbC1kYXRhIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkOyB9XG5cbi8qXHJcbirml6Xljobnu4Tku7bnmoTmoLflvI/kv67mlLnlvIDlp4tcclxuKi9cbjpob3N0L2RlZXAvIC51aS1kYXRlcGlja2VyIHNlbGVjdC51aS1kYXRlcGlja2VyLXllYXIge1xuICB3aWR0aDogNTAlO1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDsgfVxuXG46aG9zdC9kZWVwLyAudWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci1tb250aCB7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50OyB9XG5cbjpob3N0L2RlZXAvIC51aS1idXR0b24udWktYnV0dG9uLXNlY29uZGFyeS51aS1zdGF0ZS1kZWZhdWx0IHtcbiAgY29sb3I6ICNmZmZmZmY7IH1cblxuOmhvc3QvZGVlcC8gI2RybyAudWktZHJvcGRvd24ge1xuICB3aWR0aDogMjQlICFpbXBvcnRhbnQ7IH1cblxuLypcclxuKuaXpeWOhue7hOS7tueahOagt+W8j+S/ruaUuee7k+adn1xyXG4qL1xuLnRheC1pbmZvcm1hdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MHB4OyB9XG4gIC50YXgtaW5mb3JtYXRpb24gLnRheC1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIycHg7XG4gICAgcmlnaHQ6IDhweDsgfVxuXG4uYnRuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5idG4gLnF1ZXJ5QnRuLFxuICAuYnRuIC5yZXNldEJ0biB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbjogMjBweDsgfVxuXG4ucmVxdWlyZUxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4OyB9XG5cbi5kZWxldGUge1xuICB6LWluZGV4OiAxMTExICFpbXBvcnRhbnQ7IH1cblxuLmFfYnRuIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzE5YjBjOCwgIzE5YjBjOCk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzBmNmVhYztcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAxLjllbTtcbiAgcGFkZGluZzogMCAxLjVlbTtcbiAgbGluZS1oZWlnaHQ6IDIuMGVtO1xuICBib3JkZXI6IDAgbm9uZTtcbiAgaGVpZ2h0OiAyOC41cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0OyB9XG5cbjpob3N0L2RlZXAvIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcbiAgaGVpZ2h0OiA3MzBweCAhaW1wb3J0YW50OyB9XG5cbjpob3N0L2RlZXAvIC51aS1jb25maXJtZGlhbG9nLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xuICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDsgfVxuIiwiLm1haW5fcGFydHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAudGl0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnRhYmxle1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5idG57XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnBkNHtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW5wdXRbcElucHV0VGV4dF17XHJcbiAgICAgICAgbWluLXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudWktZy0xMiwudWktZy00IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxufVxyXG4uY2xlYXJtYXJnaW57XHJcbiAgICBtYXJnaW46MCAwLjg4OCVcclxufVxyXG5AbWVkaWEgIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxNTUwcHgpe1xyXG4gICAgLmNsZWFybWFyZ2lue1xyXG4gICAgICAgIG1hcmdpbjogMCAsMCBcclxuICAgIH1cclxufVxyXG4vL+iuouWNleafpeivolxyXG4ub3JkZXItcXVlcnkge1xyXG4gICAgLnRpdHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuLy8gcG9zaXRpb246YWJzb2x1dGU7XHJcbi8vIHRvcDowO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4OyAvL+afpeivouadoeS7tlxyXG4gIC5xdWVyeS1jcml0ZXJpYSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgLnRpdHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5keXtcclxuICAgICAgICB3aWR0aDoyMCUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmR5c3tcclxuICAgICAgICB3aWR0aDo4MCUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYnRuIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAucXVlcnlCdG4sXHJcbiAgICAgIC5yZXNldEJ0biB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgICAgXHJcbiAgfSBcclxufVxyXG4vL+afpeivoue7k+aenFxyXG4uanVlcnktcmVzdWx0IHtcclxuICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDAgMzBweDtcclxuIFxyXG4gICAgaGVpZ2h0OjQwMHB4O1xyXG4gICAgLy8gb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAuYWRkQnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC50YWJsZSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgLm1vZGlmeSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJne1xyXG4gICAgYmFja2dyb3VuZDogI2ZkZmRmZDtcclxuICAgIC8vIGhlaWdodDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgLy8gaGVpZ2h0OiA0NjBweDtcclxufVxyXG4uaXNjb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZjOTAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi8vIDpob3N0L2RlZXAvIC5vcmRlci1xdWVyeSAucXVlcnktY3JpdGVyaWEgLnVpLWRyb3Bkb3due1xyXG4vLyAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuLy8gfVxyXG4vL+ihqOagvOWtl+avjeOAgeaVsOWtl+iHquWKqOaNouihjFxyXG46aG9zdC9kZWVwLyAudWktY2VsbC1kYXRhe1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG4vKlxyXG4q5pel5Y6G57uE5Lu255qE5qC35byP5L+u5pS55byA5aeLXHJcbiovXHJcbi8v6YCJ5oup5bm05Lu9XHJcbjpob3N0L2RlZXAvIC51aS1kYXRlcGlja2VyIHNlbGVjdC51aS1kYXRlcGlja2VyLXllYXJ7XHJcbiAgd2lkdGg6NTAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcbi8v6YCJ5oup5pyI5Lu9XHJcbjpob3N0L2RlZXAvIC51aS1kYXRlcGlja2VyIHNlbGVjdC51aS1kYXRlcGlja2VyLW1vbnRoe1xyXG4gd2lkdGg6NDAlO1xyXG4gZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy/muIXnqbrjgIHku4rlpKnkuKTkuKrmjInpkq7nmoTlrZfkvZPpopzoibJcclxuOmhvc3QvZGVlcC8gLnVpLWJ1dHRvbi51aS1idXR0b24tc2Vjb25kYXJ5LnVpLXN0YXRlLWRlZmF1bHR7XHJcbiBjb2xvcjojZmZmZmZmO1xyXG59XHJcbjpob3N0L2RlZXAvICNkcm8gLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAyNCUgIWltcG9ydGFudDtcclxufVxyXG4vKlxyXG4q5pel5Y6G57uE5Lu255qE5qC35byP5L+u5pS557uT5p2fXHJcbiovXHJcbi50YXgtaW5mb3JtYXRpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgLnRheC1idG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDIycHg7XHJcbiAgICAgICAgcmlnaHQ6IDhweDtcclxuICAgIH1cclxufSBcclxuLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAucXVlcnlCdG4sXHJcbiAgICAucmVzZXRCdG4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICB9fVxyXG4ucmVxdWlyZUxhYmVsIHtcclxuICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbn1cclxuLmRlbGV0ZXtcclxuICAgIHotaW5kZXg6IDExMTEgIWltcG9ydGFudDtcclxufVxyXG4uYV9idG57XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6ICMxOWIwYzg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzE5YjBjOCwgIzE5YjBjOCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMGY2ZWFjO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDEuOWVtO1xyXG4gICAgcGFkZGluZzogMCAxLjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjBlbTtcclxuICAgIGJvcmRlcjogMCBub25lO1xyXG4gICAgaGVpZ2h0OjI4LjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudHtcclxuICAgIGhlaWdodDogNzMwcHghaW1wb3J0YW50O1xyXG4gICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG46aG9zdC9kZWVwLyAudWktY29uZmlybWRpYWxvZy51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50e1xyXG4gICAgaGVpZ2h0OiA4MHB4IWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-style-manage.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-style-manage.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CustomStyleManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomStyleManageComponent", function() { return CustomStyleManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts");
/* harmony import */ var _bean_custom_style_manage_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean/custom-style-manage.bean */ "./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/bean/custom-style-manage.bean.ts");
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







var CustomStyleManageComponent = /** @class */ (function () {
    function CustomStyleManageComponent(cusOperationHttpService, confirmationService, commfunc, router) {
        this.cusOperationHttpService = cusOperationHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.router = router;
        this.dismus4 = false;
        this.dismus3 = false;
        this.dismus1 = false;
        this.dismus2 = false;
        this.pageNum = 1;
        this.isaddtpid = false;
        this.isadd2 = false;
        this.isadd1 = false;
        this.tableData = [];
        this.first = 1;
        this.headerTitle = '';
        this.display = false;
        this.display1 = false;
        this.fastlist = false;
        this.display2 = false;
        this.lastlist = false;
        this.isdeil = false;
        this.isadd = false;
        this.isdelete = false;
        this.FastListBen = new _bean_custom_style_manage_bean__WEBPACK_IMPORTED_MODULE_5__["FastListBen"]();
        this.tableData1 = []; //一级名列表
        this.tableData2 = []; //一级名列表
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"];
        this.orderStatusId = [
            { label: "请选择", value: "" },
            { label: "是", value: "Y" },
            { label: "否", value: "N" },
        ];
        this.nextlistbzs = [{ label: "请选择", value: "" }];
        this.fastlistbz = [{ label: "请选择", value: "" }];
        this.nextlistbz = [{ label: "请选择", value: "" }];
        this.msgs = [];
        this.AddBean = new _bean_custom_style_manage_bean__WEBPACK_IMPORTED_MODULE_5__["AddBean"]();
        this.nextListBen = new _bean_custom_style_manage_bean__WEBPACK_IMPORTED_MODULE_5__["NextListBen"]();
        this.downkey = false;
        this.codeValues(); //调用方法，获取全部码值
    }
    CustomStyleManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageSize = 10;
        this.first = 1;
        //this.queryClick(2);
        setTimeout(function () {
            _this.tableData = [];
        });
        document.onkeydown = function (e) {
            var code, targetType, event;
            if (!e) {
                event = window.event;
            }
            else {
                event = e;
            }
            if (e.keyCode) {
                code = e.keyCode;
            }
            else if (e.which) {
                code = e.which;
            }
            if (code == 8) {
                if (!(event.srcElement.type)) {
                    e.preventDefault();
                    e.returnValue = false;
                    return false;
                }
                targetType = event.srcElement.type.toUpperCase();
                if ((targetType != 'TEXT' && targetType != 'TEXTAREA' && targetType != 'PASSWORD')) {
                    e.preventDefault();
                    e.returnValue = false;
                }
            }
            return true;
        };
        this.fastlistbox();
    };
    //分页
    CustomStyleManageComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.first = event.page * event.rows;
        //调用查询的方法
        if (this.fastlistbzs || this.parentListTypeId || this.listTypeId) {
            this.queryClick(1);
        }
        else {
            this.queryClick(2);
        }
    };
    //查询
    CustomStyleManageComponent.prototype.queryClick = function (i, key) {
        var _this = this;
        var pams;
        var listTypeId;
        // let parentListTypeId;
        // let listTypeHierarchy;
        if (i == 1) {
            if (this.fastlistbzs) {
                listTypeId = this.fastlistbzs;
            }
            if (this.fastlistbzs && this.parentListTypeId) {
                listTypeId = this.parentListTypeId;
            }
            if (this.fastlistbzs && this.parentListTypeId && this.listTypeId) {
                listTypeId = this.listTypeId;
            }
            // if (!this.fastlistbzs && !this.parentListTypeId && !this.listTypeId) {
            //   listTypeHierarchy = 3
            // }
            if (key && key == true) {
                this.pageNum = 1;
                this.pageSize = 10;
                this.first = 1;
            }
            pams = {
                listTypeId: listTypeId,
                // parentListTypeId,
                // listTypeHierarchy,
                pageSize: this.pageSize,
                pageNum: this.pageNum,
                first: this.first,
            };
        }
        if (i == 2) {
            pams = {
                // listTypeHierarchy: 3,
                pageSize: this.pageSize,
                pageNum: this.pageNum,
                first: this.first,
            };
        }
        this.cusOperationHttpService.selectTypes(pams).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = [];
                _this.tableData = data.returnList;
                _this.total = data.total;
                _this.msgs = [];
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
    // 维护明细列表删除
    CustomStyleManageComponent.prototype.delete = function (col) {
        var i = 3;
        this.deletefast(col, i);
    };
    //删除公共
    CustomStyleManageComponent.prototype.alldelete = function (col) {
        var _this = this;
        this.cusOperationHttpService.deleteBlackListType(col).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.isdelete = false;
                _this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                // 删除之后会回调
                console.log(_this.delmenutype, "删除毁掉");
                if (_this.delmenutype == 2) {
                    _this.lastmanage(); //二级菜单删除
                }
                else if (_this.delmenutype == 3) {
                    _this.queryClick(1); //告诉为维护明细列表删除维护
                }
                else {
                    _this.fastmanage(); //一级菜单删除
                }
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
    // 一级名单保存
    CustomStyleManageComponent.prototype.save1 = function () {
        var _this = this;
        if (!this.isadd1) {
            var pams = {
                typeId: this.typeId,
                listTypeName: this.listTypeName,
                comments: this.comments,
                listTypeId: this.listTypeId,
            };
            this.cusOperationHttpService.updateBlackListType(pams).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.fastmanage();
                    _this.typeId = null;
                    _this.listTypeName = null;
                    _this.comments = null;
                    _this.msgs = [];
                    //   this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        else {
            var pams = {
                typeId: this.typeId,
                listTypeName: this.listTypeName,
                comments: this.comments,
                listTypeHierarchy: '1',
            };
            this.cusOperationHttpService.addBlackListType(pams).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.fastmanage();
                    _this.typeId = null;
                    _this.listTypeName = null;
                    _this.comments = null;
                    _this.msgs = [];
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
        }
    };
    // 二级名单保存
    CustomStyleManageComponent.prototype.save2 = function () {
        var _this = this;
        debugger;
        if (!this.isadd2) {
            var pams = {
                typeId: this.typeIds,
                listTypeName: this.listTypeNames,
                comments: this.commentss,
                listTypeId: this.listTypeIds,
                parentListTypeId: this.parentListTypeIds,
                listTypeHierarchy: '2',
            };
            this.cusOperationHttpService.updateBlackListType(pams).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.lastmanage();
                    _this.typeIds = null;
                    _this.listTypeNames = null;
                    _this.commentss = null;
                    _this.listTypeIds = null;
                    _this.parentListTypeIds = null;
                    _this.msgs = [];
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
        }
        else {
            var pams = {
                typeId: this.typeIds,
                listTypeName: this.listTypeNames,
                comments: this.commentss,
                parentListTypeId: this.parentListTypeIds,
                listTypeHierarchy: '2',
            };
            this.cusOperationHttpService.addBlackListType(pams).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.lastmanage();
                    _this.typeIds = null;
                    _this.listTypeNames = null;
                    _this.commentss = null;
                    _this.listTypeIds = null;
                    _this.parentListTypeIds = null;
                    _this.msgs = [];
                    //  this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
    };
    // 一级名单修改
    CustomStyleManageComponent.prototype.updatefast = function (col) {
        this.isadd1 = false;
        this.fastlist = true;
        this.typeId = col.typeId;
        this.listTypeName = col.listTypeName;
        this.comments = col.comments;
        this.listTypeId = col.listTypeId;
        this.typeId = col.typeId;
    };
    // 二级名单修改
    CustomStyleManageComponent.prototype.updatefast1 = function (col) {
        this.isadd2 = false;
        this.lastlist = true;
        //后面改代码的人注意不要用bean中的类去赋值对list有影响。
        this.typeIds = col.typeId;
        this.listTypeNames = col.listTypeName;
        this.commentss = col.comments;
        this.listTypeIds = col.listTypeId;
        this.parentListTypeIds = col.parentListTypeId;
        this.typeIds = col.typeId;
    };
    CustomStyleManageComponent.prototype.deletefast = function (col, i) {
        var _this = this;
        this.headerTitle1 = "删除提示";
        this.isdelete = true;
        this.confirmationService.confirm({
            message: "确定删除？",
            accept: function () {
                if (i) {
                    _this.delmenutype = i;
                }
                else {
                    _this.delmenutype = 1;
                }
                _this.alldelete(col);
            },
            reject: function () {
                ;
            }
        });
    };
    CustomStyleManageComponent.prototype.deletefast1 = function (col) {
        var i = 2; //告诉为二级菜单里面删除维护
        this.deletefast(col, i);
    };
    CustomStyleManageComponent.prototype.add = function () {
        this.dismus4 = true;
        this.headerTitle = '风险管控等级新增';
        this.modifyValue = null;
    };
    CustomStyleManageComponent.prototype.update = function (col) {
        this.headerTitle = '风险管控等级修改';
        this.dismus4 = true;
        this.modifyValue = col;
        console.log(this.modifyValue, "回显信息22222222");
        console.log(this.modifyValue.listTypeOneName);
        console.log(this.modifyValue.parentListTypeId, "parentListTypeId");
    };
    CustomStyleManageComponent.prototype.detail = function (col) {
        this.dismus3 = true;
        this.AddBean = col;
        this.headerTitle = '风险管控等级详情';
    };
    //fastlistbox 一级名单下拉框
    CustomStyleManageComponent.prototype.fastlistbox = function () {
        var _this = this;
        this.parentListTypeId = "",
            this.listTypeId = '';
        var pams = {
            listTypeHierarchy: 1,
        };
        this.cusOperationHttpService.selectBlackListType(pams).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.fastlistbz = [{ label: "请选择", value: "" }];
                data.returnList.forEach(function (item) {
                    _this.fastlistbz.push({ label: item.listTypeName, value: item.listTypeId });
                });
                console.log(_this.fastlistbz[0].value);
                //this.nextlistbox(this.fastlistbz[0].value)
            }
        });
    };
    //nextlistbox 二级名单下拉框
    CustomStyleManageComponent.prototype.nextlistbox = function (s) {
        var _this = this;
        this.parentListTypeId = "",
            this.listTypeId = '';
        this.nextlistbzs = [{ label: "请选择", value: "" }];
        this.nextlistbz = [{ label: "请选择", value: "" }];
        var pams = {
            parentListTypeId: s,
            listTypeHierarchy: 2,
        };
        this.cusOperationHttpService.selectBlackListType(pams).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.returnList.forEach(function (item) {
                    _this.nextlistbz.push({ label: item.listTypeName, value: item.listTypeId });
                });
            }
        });
    };
    CustomStyleManageComponent.prototype.nextlistbzsd = function (s) {
        var _this = this;
        this.listTypeId = '';
        this.nextlistbzs = [{ label: "请选择", value: "" }];
        var pams = {
            parentListTypeId: s,
            listTypeHierarchy: 3,
        };
        this.cusOperationHttpService.selectBlackListType(pams).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.returnList.forEach(function (item) {
                    _this.nextlistbzs.push({ label: item.listTypeName, value: item.listTypeId });
                });
            }
        });
    };
    // 一级维护
    CustomStyleManageComponent.prototype.fastmanage = function () {
        var _this = this;
        this.headerTitle = '一级名单维护';
        this.display1 = true;
        // this.fastlist = false;
        var pams = {
            listTypeHierarchy: 1,
        };
        this.cusOperationHttpService.selectBlackListType(pams).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData1 = data.returnList ? data.returnList : [];
                _this.msgs = [];
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
    // 二级维护
    CustomStyleManageComponent.prototype.lastmanage = function () {
        var _this = this;
        this.headerTitle = '二级名单维护';
        this.display2 = true;
        // this.lastlist = false;
        var pams = {
            listTypeHierarchy: 2,
        };
        this.cusOperationHttpService.selectBlackListType(pams).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData2 = data.returnList ? data.returnList : [];
                _this.msgs = [];
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
        //fastlistbox 一级名单下拉框
        this.fastlistbox();
    };
    // 一级新增
    CustomStyleManageComponent.prototype.add1 = function () {
        this.isadd1 = true;
        this.typeId = null;
        this.listTypeName = null;
        this.comments = null;
        this.listTypeId = null;
        this.typeId = null;
        // this.FastListBen = new FastListBen();
        this.fastlist = true;
    };
    // 二级新增
    CustomStyleManageComponent.prototype.add2 = function () {
        this.isadd2 = true;
        // this.nextListBen = new NextListBen();
        this.typeIds = null;
        this.listTypeNames = null;
        this.commentss = null;
        this.listTypeIds = null;
        this.parentListTypeIds = null;
        this.typeIds = null;
        this.lastlist = true;
    };
    // 返回关闭
    CustomStyleManageComponent.prototype.back = function () {
        this.dismus3 = false;
    };
    CustomStyleManageComponent.prototype.back1 = function () {
        this.fastlist = false;
    };
    CustomStyleManageComponent.prototype.back2 = function () {
        this.lastlist = false;
    };
    //重置
    CustomStyleManageComponent.prototype.resetClick = function () {
        this.fastlistbzs = null;
        this.parentListTypeId = null;
        // this.riskRange = null;
        this.listTypeId = null;
        this.nextlistbz = [{ label: "请选择", value: "" }];
        this.nextlistbzs = [{ label: "请选择", value: "" }];
        this.pageSize = 10;
        this.pageNum = 1;
        this.first = 1;
        this.queryClick(2);
    };
    // 下载
    CustomStyleManageComponent.prototype.downlon = function () {
        var _this = this;
        this.downkey = true;
        this.headerTitle1 = "下载提示";
        var pams = {
            listTypeId: this.listTypeId,
            parentListTypeId: this.parentListTypeId,
            riskRange: this.riskRange,
        };
        this.cusOperationHttpService.downLoadListTypeInfo(pams).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.fileName = data.fileName;
                _this.fileUrl = data.fileUrl;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.config();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                _this.downkey = false;
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            _this.downkey = false;
        });
    };
    // 下载弹框
    CustomStyleManageComponent.prototype.config = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: "是否要下载",
            accept: function () {
                _this.downkey = false;
                if (_this.fileName) {
                    open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(_this.fileName) + "&fileUrl=" + _this.fileUrl, '_blank');
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '所要下载文件不存在' });
                }
            },
            reject: function () {
                _this.downkey = false;
            }
        });
    };
    //码值
    CustomStyleManageComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
    };
    CustomStyleManageComponent.prototype.modifyCall = function (e) {
        this.dismus4 = e.display;
        this.queryClick(1);
    };
    CustomStyleManageComponent.prototype.closeSetting = function () {
        //调用查询的方法
        if (this.fastlistbzs || this.parentListTypeId || this.listTypeId) {
            this.queryClick(1);
            //alert(11111111)
        }
        else {
            this.resetClick();
            //alert(222222222)
        }
    };
    CustomStyleManageComponent.prototype.closeSetting2 = function () {
        this.resetClick();
    };
    CustomStyleManageComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomStyleManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-style-manage',
            template: __webpack_require__(/*! ./custom-style-manage.component.html */ "./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-style-manage.component.html"),
            styles: [__webpack_require__(/*! ./custom-style-manage.component.scss */ "./src/app/pages/tzb/custom/custom-list-manage/custom-style-manage/custom-style-manage.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_list_manage_custom_list_manage_http_service__WEBPACK_IMPORTED_MODULE_4__["CusListManageHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomStyleManageComponent);
    return CustomStyleManageComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/element-adjustment/account-integral/account-integral-exam/bean/account-integral-exam.bean.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/element-adjustment/account-integral/account-integral-exam/bean/account-integral-exam.bean.ts ***!
  \************************************************************************************************************************/
/*! exports provided: CardElementsAdjustmentBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardElementsAdjustmentBean", function() { return CardElementsAdjustmentBean; });
var CardElementsAdjustmentBean = /** @class */ (function () {
    function CardElementsAdjustmentBean() {
    }
    return CardElementsAdjustmentBean;
}());



/***/ })

}]);
//# sourceMappingURL=default~batch-precredit-add-batch-precredit-add-module~credit-ccm-credit-ccm-module~custom-list-mana~5973b2e6.js.map