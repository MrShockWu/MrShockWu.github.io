(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["field-manage-list-field-manage-list-module"],{

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/bean/field-manage-list.bean.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/bean/field-manage-list.bean.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: FiledManageListBean, addFieldManageBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiledManageListBean", function() { return FiledManageListBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFieldManageBean", function() { return addFieldManageBean; });
var FiledManageListBean = /** @class */ (function () {
    function FiledManageListBean() {
    }
    return FiledManageListBean;
}());

var addFieldManageBean = /** @class */ (function () {
    function addFieldManageBean() {
    }
    return addFieldManageBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-add/field-manage-list-add.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-add/field-manage-list-add.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 文件模板信息-标题 -->\r\n<div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6\" style=\"margin-left: 30%;\">\r\n        <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"true\"></p-steps>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 line-name\"></div>\r\n<div class=\"ui-g-12 title-name\" *ngIf=\"vlaue == '0'\">\r\n    <form [formGroup]=\"userform\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4 padding-0 \">\r\n                <div class=\"ui-g-5 text-r\">\r\n                    <label appValidation>字段英文名：</label>\r\n                </div>\r\n                <div class=\"ui-g-7\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"addFieldManageBean.daField\" formControlName=\"daField\">\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['daField'].valid&&userform.controls['daField'].dirty && isShowTip\">\r\n                        <p [hidden]=\"!userform.hasError('required','daField')\"> 字段英文名不能为空！</p>\r\n                        <p [hidden]=\"!userform.hasError('pattern','daField')\"> 只能为英文、数字、_！</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4 padding-0\">\r\n                <div class=\"ui-g-5 text-r\">\r\n                    <label appValidation>字段中文名：</label>\r\n                </div>\r\n                <div class=\"ui-g-7\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"addFieldManageBean.daName\" formControlName=\"daName\">\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['daName'].valid&&userform.controls['daName'].dirty && isShowTip\">\r\n                        <p [hidden]=\"!userform.hasError('required','daName')\"> 字段中文名不能为空！</p>\r\n                        <p [hidden]=\"!userform.hasError('pattern','daName')\"> 只能为中文！</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4 padding-0\">\r\n                <div class=\"ui-g-5 text-r\">\r\n                    <label appValidation>字符类型：</label>\r\n                </div>\r\n                <div class=\"ui-g-7\">\r\n                    <p-dropdown [options]=\"FiledType\" [(ngModel)]=\"addFieldManageBean.filedType\" formControlName=\"filedType\" (onChange)=\"change()\"></p-dropdown>\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['filedType'].valid&&userform.controls['filedType'].dirty && isShowTip\">\r\n                        <p [hidden]=\"!userform.hasError('required','filedType')\">字符类型不能为空！</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4 padding-0 \">\r\n                <div class=\"ui-g-5 text-r\">\r\n                    <label>字段描述：</label>\r\n                </div>\r\n                <div class=\"ui-g-7\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"addFieldManageBean.describe\" formControlName=\"describe\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4 padding-0\">\r\n                <div class=\"ui-g-5 text-r\">\r\n                    <label appValidation>字段长度：</label>\r\n                </div>\r\n                <div class=\"ui-g-7\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"addFieldManageBean.filedLen\" formControlName=\"filedLen\" >\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['filedLen'].valid&&userform.controls['filedLen'].dirty && isShowTip\">\r\n                        <p [hidden]=\"!userform.hasError('required','filedLen')\">字段长度不能为空！</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4 padding-0\">\r\n                <div class=\"ui-g-5 text-r\">\r\n                    <label appValidation>界面展示形式：</label>\r\n                </div>\r\n                <div class=\"ui-g-7\" *ngIf=\"addFieldManageBean.filedType=='01'||addFieldManageBean.filedType=='02'\">\r\n                    <p-dropdown [options]=\"FiledView\" [(ngModel)]=\"addFieldManageBean.filedView\" formControlName=\"filedView\"></p-dropdown>\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['filedView'].valid&&userform.controls['filedView'].dirty && isShowTip\">\r\n                        <p [hidden]=\"!userform.hasError('required','filedView')\">界面展示形式不能为空！</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-7\" *ngIf=\"addFieldManageBean.filedType=='03'\">\r\n                    <input type=\"text\" pInputText formControlName=\"filedView\" disabled [(ngModel)]=\"kk\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4 padding-0\">\r\n                <div class=\"ui-g-5 text-r\">\r\n                    <label appValidation>实体文件名:</label>\r\n                </div>\r\n                <div class=\"ui-g-7\">\r\n                    <p-dropdown [options]=\"dtEntity\" formControlName=\"entityName\" [(ngModel)]=\"addFieldManageBean.entityName\"></p-dropdown>\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['entityName'].valid&&userform.controls['entityName'].dirty\">\r\n                        <p [hidden]=\"!userform.hasError('required','entityName')\">不可为空！</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"ui-g-12 title-name\" *ngIf=\"vlaue == '1'\">\r\n    <div class=\"ui-g-12 add\">\r\n        <span class=\"icoColor\" (click)=\"add()\">新增</span>\r\n    </div>\r\n    <p-dataTable [value]=\"tableList2\" [style]=\"{'text-align':'center'}\">\r\n        <p-column field=\"fieldNo\" header=\"序号\">\r\n            <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <span>{{ri+1}}</span>\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"fieldValue\" header=\"属性值\">\r\n            <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"car.fieldValue\" />\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"describe\" header=\"属性描述\">\r\n            <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"car.describe\" />\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column header=\"操作\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                <span class=\"tabelDeleteIco\" (click)=\"delete(i)\">删除</span>\r\n            </ng-template>\r\n        </p-column>\r\n    </p-dataTable>\r\n</div>\r\n<div class=\"ui-g-12 btn padding-0 title-name\">\r\n    <span class=\"icoColor\" (click)=\"rest()\">重置</span>\r\n    <button pButton type=\"button\" (click)=\"prev()\" label=\"上一步\" *ngIf=\"vlaue=='1'\"></button>\r\n    <button pButton type=\"button\" (click)=\"next()\" label=\"下一步\" *ngIf=\"vlaue=='0'&&addFieldManageBean.filedView=='02'\"></button>\r\n    <button pButton type=\"button\" (click)=\"saveClick()\" label=\"保存\" *ngIf=\"vlaue=='1'||addFieldManageBean.filedView!='02'\"></button>\r\n    <button pButton type=\"button\" (click)=\"cancel()\" label=\"取消\" *ngIf=\"vlaue=='1'\"></button>\r\n</div>\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-add/field-manage-list-add.component.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-add/field-manage-list-add.component.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-r {\n  text-align: right;\n  padding-top: .75em; }\n\n.padding-0 {\n  padding: 0;\n  margin-right: -19px; }\n\n.field-name {\n  margin-left: -1%; }\n\n.btn {\n  text-align: center; }\n\n.addBtn {\n  background: #FFC107; }\n\n.add {\n  text-align: right; }\n\n.spe {\n  width: 94% !important; }\n\n:host/deep/ .speBtn.ui-button:enabled:not(:focus):hover,\n.speBtn.ui-datepicker-buttonpane > button:enabled:not(:focus):hover {\n  background: #FFC107 !important; }\n\n:host/deep/ .ui-steps-item {\n  width: 50%; }\n\n.title-name {\n  padding-bottom: 0; }\n\n:host/deep/ .ui-steps .ui-steps-item .ui-menuitem-link {\n  background: #fff !important; }\n\n.line-name {\n  background: #efefef;\n  padding: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9idXNpbmVzcy1jZW50ZXItbWFuYWdlL2ZpZWxkLW1hbmFnZS1saXN0L2ZpZWxkLW1hbmFnZS1saXN0LWFkZC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFxidXNpbmVzcy1jZW50ZXItbWFuYWdlXFxmaWVsZC1tYW5hZ2UtbGlzdFxcZmllbGQtbWFuYWdlLWxpc3QtYWRkXFxmaWVsZC1tYW5hZ2UtbGlzdC1hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksVUFBVTtFQUNWLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHFCQUFxQixFQUFBOztBQUd6Qjs7RUFFSSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFFSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSwyQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxtQkFBbUI7RUFDbkIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9idXNpbmVzcy1jZW50ZXItbWFuYWdlL2ZpZWxkLW1hbmFnZS1saXN0L2ZpZWxkLW1hbmFnZS1saXN0LWFkZC9maWVsZC1tYW5hZ2UtbGlzdC1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1yIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IC43NWVtO1xyXG59XHJcblxyXG4ucGFkZGluZy0wIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xOXB4O1xyXG59XHJcbi5maWVsZC1uYW1le1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xJTtcclxufVxyXG4uYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZEJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZDMTA3O1xyXG59XHJcblxyXG4uYWRkIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uc3BlIHtcclxuICAgIHdpZHRoOiA5NCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnNwZUJ0bi51aS1idXR0b246ZW5hYmxlZDpub3QoOmZvY3VzKTpob3ZlcixcclxuLnNwZUJ0bi51aS1kYXRlcGlja2VyLWJ1dHRvbnBhbmU+YnV0dG9uOmVuYWJsZWQ6bm90KDpmb2N1cyk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGQzEwNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3RlcHMtaXRlbSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4udGl0bGUtbmFtZSB7XHJcbiAgICAvLyAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zdGVwcyAudWktc3RlcHMtaXRlbSAudWktbWVudWl0ZW0tbGluayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpbmUtbmFtZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-add/field-manage-list-add.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-add/field-manage-list-add.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: FieldManageListAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldManageListAddComponent", function() { return FieldManageListAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_field_manage_list_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bean/field-manage-list.bean */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/bean/field-manage-list.bean.ts");
/* harmony import */ var _http_business_center_manage_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../http/business-center-manage.http.service */ "./src/app/pages/tzb/common/base-manage/business-center-manage/http/business-center-manage.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FieldManageListAddComponent = /** @class */ (function () {
    function FieldManageListAddComponent(commfunc, router, confirmationService, fb, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.httpService = httpService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addFieldManageBean = new _bean_field_manage_list_bean__WEBPACK_IMPORTED_MODULE_6__["addFieldManageBean"](); //规则信息
        this.msgs = []; //信息提示框
        this.tableList2 = [];
        this.FiledType = [];
        this.FiledView = [];
        this.isShowTip = true;
        this.list = [];
        this.kk = '日期型';
        this.userform = this.fb.group({
            "daField": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[\w]+$/)]),
            "daName": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, , _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[\u4e00-\u9fa5]+$/)]),
            "filedType": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            "describe": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            "filedLen": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            "filedView": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'entityName': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        });
        this.codeValues();
        this.FiledType = this.code['FiledType']; //字段类型
        this.FiledView = this.code['FiledView']; //界面展示形式
        this.dtEntity = this.code['dtEntity']; //实体
        //console.log(this.FiledView)
        this.tableList2 = [{
                fieldValue: '',
                describe: ''
            }];
    }
    FieldManageListAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addFieldManageBean.filedType = this.FiledType[0].value;
        this.addFieldManageBean.filedView = this.FiledView[0].value;
        this.activeIndex = 0;
        this.vlaue = '0';
        this.items = [
            {
                label: '字段基本信息配置',
                command: function (event) {
                    _this.activeIndex = 0;
                }
            },
            {
                label: '字段取值配置',
                command: function (event) {
                    _this.activeIndex = 1;
                }
            },
        ];
    };
    FieldManageListAddComponent.prototype.change = function () {
        if (this.addFieldManageBean.filedType == '03') {
            this.addFieldManageBean.filedView = '03';
        }
        else {
            this.addFieldManageBean.filedView = this.FiledView[0].value;
        }
    };
    //码值
    FieldManageListAddComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //下一步
    FieldManageListAddComponent.prototype.nextclick = function () {
        var _this = this;
        if (this.activeIndex == 0) {
            if (this.addFieldManageBean.filedType == '03') {
                this.addFieldManageBean.filedView = '03';
            }
            this.addFieldManageBean.filedStatus = '0';
            this.httpService.createOrStoreAttrItemOfPms(this.addFieldManageBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.isShowTip = false;
                    _this.activeIndex = _this.activeIndex + 1;
                    _this.vlaue = _this.activeIndex;
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
        }
        else if (this.activeIndex == 1) {
        }
    };
    //下一步
    FieldManageListAddComponent.prototype.next = function () {
        var _this = this;
        this.isShowTip = true;
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
        var param = {
            daField: this.addFieldManageBean.daField
        };
        this.httpService.queryAttrItemListOfPms(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.list = data.fieldsList;
                if (data.fieldsList.length != 0) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '字段英文名已存在' });
                    return;
                }
                else {
                    _this.nextclick();
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
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //上一步
    FieldManageListAddComponent.prototype.prev = function () {
        this.activeIndex = this.activeIndex - 1;
        this.vlaue = this.activeIndex;
    };
    //删除
    FieldManageListAddComponent.prototype.delete = function (i) {
        this.tableList2.splice(i, 1);
        this.tableList2 = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.tableList2);
    };
    //新增
    FieldManageListAddComponent.prototype.add = function () {
        var aa = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.tableList2);
        aa.push({
            fieldValue: '', describe: '',
        });
        this.tableList2 = aa;
    };
    FieldManageListAddComponent.prototype.cancel = function () {
        this.outValue.emit({ display: false });
    };
    //保存查询
    FieldManageListAddComponent.prototype.queryClick = function () {
        var _this = this;
        if (this.addFieldManageBean.filedView == '02') {
            var param = {
                daField: this.addFieldManageBean.daField,
                itemVals: this.tableList2,
                entityName: this.addFieldManageBean.entityName
            };
            this.httpService.createOrStorAttrItemValOfPms(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.outValue.emit({ display: false, flag: true });
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
        }
        else {
            if (this.addFieldManageBean.filedType == '03') {
                this.addFieldManageBean.filedView = '03';
            }
            this.addFieldManageBean.filedStatus = '0';
            this.httpService.createOrStoreAttrItemOfPms(this.addFieldManageBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.isShowTip = false;
                    _this.outValue.emit({ display: false, flag: true });
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
        }
    };
    //保存
    FieldManageListAddComponent.prototype.saveClick = function () {
        var _this = this;
        this.isShowTip = true;
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
        if (this.addFieldManageBean.filedView != '02') {
            var param = {
                daField: this.addFieldManageBean.daField,
            };
            this.httpService.queryAttrItemListOfPms(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.list = data.fieldsList;
                    if (data.fieldsList.length != 0) {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: '字段英文名已存在' });
                        return;
                    }
                    else {
                        _this.queryClick();
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
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
            });
        }
        else {
            this.queryClick();
        }
    };
    FieldManageListAddComponent.prototype.rest = function () {
        if (this.activeIndex == 0) {
            this.isShowTip = false;
            this.addFieldManageBean = new _bean_field_manage_list_bean__WEBPACK_IMPORTED_MODULE_6__["addFieldManageBean"]();
            this.addFieldManageBean.filedStatus = '0';
            this.addFieldManageBean.filedType = this.FiledType[0].value;
            this.addFieldManageBean.filedView = this.FiledView[0].value;
        }
        else if (this.activeIndex == 1) {
            this.tableList2.forEach(function (element) {
                element.fieldValue = '';
                element.describe = '';
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FieldManageListAddComponent.prototype, "outValue", void 0);
    FieldManageListAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'field-manage-list-add',
            template: __webpack_require__(/*! ./field-manage-list-add.component.html */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-add/field-manage-list-add.component.html"),
            styles: [__webpack_require__(/*! ./field-manage-list-add.component.scss */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-add/field-manage-list-add.component.scss")],
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _http_business_center_manage_http_service__WEBPACK_IMPORTED_MODULE_7__["BusinessCenterManageHttp"]])
    ], FieldManageListAddComponent);
    return FieldManageListAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-detail/field-manage-list-detail.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-detail/field-manage-list-detail.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 字段列表详情 -->\r\n<div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'字段基本信息配置'\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 field-name\">\r\n                <span>字段英文名：</span>\r\n            </div>\r\n            <div class=\"ui-g-7\">\r\n                <span class=\"field-echo\">{{detail.daField}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 field-name\">\r\n                <span>字段中文名：</span>\r\n            </div>\r\n            <div class=\"ui-g-7\">\r\n                <span class=\"field-echo\">{{detail.daName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 field-name\">\r\n                <span>字符类型：</span>\r\n            </div>\r\n            <div class=\"ui-g-7\">\r\n                <span class=\"field-echo\">{{detail.filedType|codeValuePie:FiledType}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 field-name\">\r\n                <span>字段描述：</span>\r\n            </div>\r\n            <div class=\"ui-g-7\">\r\n                <span>{{detail.describe}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 field-name\">\r\n                <span>字段长度：</span>\r\n            </div>\r\n            <div class=\"ui-g-7\">\r\n                <span class=\"field-echo\">{{detail.filedLen}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-5 field-name\">\r\n                <span>界面展示形式：</span>\r\n            </div>\r\n            <div class=\"ui-g-7\">\r\n                <span class=\"field-echo\">{{detail.filedView|codeValuePie:FiledView}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 line-name\"></div>\r\n<div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'字段取值配置'\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <p-dataTable [value]=\"tableList2\"  [style]=\"{'text-align':'center'}\">\r\n            <p-column field=\"\" header=\"序号\">\r\n                <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                    <span>{{ri+1}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"fieldValue\" header=\"属性值\"> </p-column>\r\n            <p-column field=\"describe\" header=\"属性描述\"> </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-detail/field-manage-list-detail.component.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-detail/field-manage-list-detail.component.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-t {\n  margin-top: 10px; }\n\n.text-r {\n  text-align: right;\n  padding-top: .75em; }\n\n.padding-0 {\n  padding: 0; }\n\n.btn {\n  text-align: center; }\n\n.addBtn {\n  background: #FFC107; }\n\n.add {\n  text-align: right; }\n\n.spe {\n  width: 94% !important; }\n\n:host/deep/ .speBtn.ui-button:enabled:not(:focus):hover, .speBtn.ui-datepicker-buttonpane > button:enabled:not(:focus):hover {\n  background: #FFC107 !important; }\n\n:host/deep/ .ui-steps-item {\n  width: 50%; }\n\n:host/deep/ .ui-steps.ui-steps-readonly .ui-steps-item {\n  background-color: #fafafa; }\n\n.line-name {\n  background: #efefef;\n  padding: 4px; }\n\n.field-name {\n  text-align: right; }\n\n.field-echo {\n  color: #818181; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9idXNpbmVzcy1jZW50ZXItbWFuYWdlL2ZpZWxkLW1hbmFnZS1saXN0L2ZpZWxkLW1hbmFnZS1saXN0LWRldGFpbC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFxidXNpbmVzcy1jZW50ZXItbWFuYWdlXFxmaWVsZC1tYW5hZ2UtbGlzdFxcZmllbGQtbWFuYWdlLWxpc3QtZGV0YWlsXFxmaWVsZC1tYW5hZ2UtbGlzdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksOEJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0kseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY29tbW9uL2Jhc2UtbWFuYWdlL2J1c2luZXNzLWNlbnRlci1tYW5hZ2UvZmllbGQtbWFuYWdlLWxpc3QvZmllbGQtbWFuYWdlLWxpc3QtZGV0YWlsL2ZpZWxkLW1hbmFnZS1saXN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udGV4dC1yIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IC43NWVtO1xyXG59XHJcblxyXG4ucGFkZGluZy0wIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWRkQnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkMxMDc7XHJcbn1cclxuLmFkZHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5zcGUge1xyXG4gICAgd2lkdGg6IDk0JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuc3BlQnRuLnVpLWJ1dHRvbjplbmFibGVkOm5vdCg6Zm9jdXMpOmhvdmVyLC5zcGVCdG4udWktZGF0ZXBpY2tlci1idXR0b25wYW5lPmJ1dHRvbjplbmFibGVkOm5vdCg6Zm9jdXMpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkMxMDcgIWltcG9ydGFudDtcclxufVxyXG46aG9zdC9kZWVwLyAudWktc3RlcHMtaXRlbSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1zdGVwcy51aS1zdGVwcy1yZWFkb25seSAudWktc3RlcHMtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcbi5saW5lLW5hbWV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcbi5maWVsZC1uYW1le1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmZpZWxkLWVjaG97XHJcbiAgICBjb2xvcjogIzgxODE4MTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-detail/field-manage-list-detail.component.ts":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-detail/field-manage-list-detail.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: FieldManageListDeatilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldManageListDeatilComponent", function() { return FieldManageListDeatilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_business_center_manage_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/business-center-manage.http.service */ "./src/app/pages/tzb/common/base-manage/business-center-manage/http/business-center-manage.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FieldManageListDeatilComponent = /** @class */ (function () {
    function FieldManageListDeatilComponent(commfunc, router, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.msgs = []; //信息提示框
        this.tableList2 = [];
        this.detail = {};
        this.FiledType = [];
        this.codeValues();
        this.FiledType = this.code['FiledType']; //字段类型
        this.FiledView = this.code['FiledView']; //界面展示形式
    }
    FieldManageListDeatilComponent.prototype.ngOnInit = function () {
        this.daField = this.inValue;
        this.entityName = this.inValue1;
        this.echoClick();
    };
    //详情回显
    FieldManageListDeatilComponent.prototype.echoClick = function () {
        var _this = this;
        var param = {
            daField: this.daField,
            entityName: this.entityName
        };
        this.httpService.queryAttrItemInfoOfPms(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.detail = data;
                _this.tableList2 = data.fieldList;
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
    //码值
    FieldManageListDeatilComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FieldManageListDeatilComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FieldManageListDeatilComponent.prototype, "inValue1", void 0);
    FieldManageListDeatilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'field-manage-list-detail',
            template: __webpack_require__(/*! ./field-manage-list-detail.component.html */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-detail/field-manage-list-detail.component.html"),
            styles: [__webpack_require__(/*! ./field-manage-list-detail.component.scss */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-detail/field-manage-list-detail.component.scss")],
        })
        // 字段详情
        ,
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _http_business_center_manage_http_service__WEBPACK_IMPORTED_MODULE_3__["BusinessCenterManageHttp"]])
    ], FieldManageListDeatilComponent);
    return FieldManageListDeatilComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-update/field-manage-list-update.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-update/field-manage-list-update.component.html ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 文件模板信息-标题 -->\r\n<div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6\" style=\"margin-left: 30%;\">\r\n        <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" [readonly]=\"true\"></p-steps>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 line-name\"></div>\r\n<div class=\"ui-g-12 title-name\" *ngIf=\"vlaue == '0'\">\r\n    <form [formGroup]=\"userform\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4 padding-0\">\r\n                <div class=\"ui-g-5 text-r\">\r\n                    <label appValidation>字段英文名：</label>\r\n                </div>\r\n                <div class=\"ui-g-7\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"daField\" formControlName=\"daField\" disabled>\r\n                    <p [hidden]=\"!userform.hasError('required','daField')\"> 字段英文名不能为空！</p>\r\n                    <p [hidden]=\"!userform.hasError('pattern','daField')\"> 只能为英文、数字、_！</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4 padding-0\">\r\n                <div class=\"ui-g-5 text-r\">\r\n                    <label>字段中文名：</label>\r\n                </div>\r\n                <div class=\"ui-g-7\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"daName\" formControlName=\"daName\" disabled>\r\n                    <!-- <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['daName'].valid&&userform.controls['daName'].dirty&& isShowTip\">\r\n                        <p [hidden]=\"!userform.hasError('required','daName')\"> 字段中文名不能为空！</p>\r\n                        <p [hidden]=\"!userform.hasError('pattern','daName')\"> 只能为中文！</p>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4 padding-0\">\r\n                <div class=\"ui-g-5 text-r\">\r\n                    <label appValidation>字符类型：</label>\r\n                </div>\r\n                <div class=\"ui-g-7\">\r\n                    <p-dropdown [options]=\"FiledType\" [(ngModel)]=\"addFieldManageBean.filedType\" formControlName=\"filedType\" (onChange)=\"change()\"></p-dropdown>\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['filedType'].valid&&userform.controls['filedType'].dirty&& isShowTip\">\r\n                        <p [hidden]=\"!userform.hasError('required','filedType')\">字符类型不能为空！</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4 padding-0 \">\r\n                <div class=\"ui-g-5 text-r\">\r\n                    <label >字段描述：</label>\r\n                </div>\r\n                <div class=\"ui-g-7\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"addFieldManageBean.describe\" formControlName=\"describe\">\r\n                    <!-- <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['description'].valid&&userform.controls['description'].dirty&& isShowTip\">\r\n                        <p [hidden]=\"!userform.hasError('required','description')\">字段描述不能为空！</p>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4 padding-0\">\r\n                <div class=\"ui-g-5 text-r\">\r\n                    <label appValidation>字段长度：</label>\r\n                </div>\r\n                <div class=\"ui-g-7\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"addFieldManageBean.filedLen\" formControlName=\"filedLen\">\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['filedLen'].valid&&userform.controls['filedLen'].dirty&& isShowTip\">\r\n                        <p [hidden]=\"!userform.hasError('required','filedLen')\">字段长度不能为空！</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4 padding-0\">\r\n                <div class=\"ui-g-5 text-r\">\r\n                    <label appValidation>界面展示形式：</label>\r\n                </div>\r\n                <div class=\"ui-g-7\" *ngIf=\"addFieldManageBean.filedType=='01'||addFieldManageBean.filedType=='02'\">\r\n                    <p-dropdown [options]=\"FiledView\" [(ngModel)]=\"addFieldManageBean.filedView\" formControlName=\"filedView\"></p-dropdown>\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['filedView'].valid&&userform.controls['filedView'].dirty&& isShowTip\">\r\n                        <p [hidden]=\"!userform.hasError('required','filedView')\">界面展示形式不能为空！</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-7\" *ngIf=\"addFieldManageBean.filedType=='03'\">\r\n                    <input type=\"text\" pInputText formControlName=\"filedView\" disabled [(ngModel)]=\"kk\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <div class=\"ui-g-4=5 text-r\">\r\n                    <label appValidation>实体文件名:</label>\r\n                </div>\r\n                <div class=\"ui-g-7\">\r\n                    <p-dropdown [options]=\"dtEntity\" formControlName=\"entityName\" [(ngModel)]=\"addFieldManageBean.entityName\"></p-dropdown>\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['entityName'].valid&&userform.controls['entityName'].dirty\">\r\n                        <p [hidden]=\"!userform.hasError('required','entityName')\">不可为空！</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"ui-g-12 title-name\" *ngIf=\"vlaue == '1'\">\r\n    <div class=\"ui-g-12 add\">\r\n        <span class=\"icoColor\" (click)=\"add()\">新增</span>\r\n    </div>\r\n    <p-dataTable [value]=\"tableList2\" [style]=\"{'text-align':'center'}\">\r\n        <p-column field=\"fieldNo\" header=\"序号\">\r\n            <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <span>{{ri+1}}</span>\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"fieldValue\" header=\"属性值\">\r\n            <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"car.fieldValue\" />\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"describe\" header=\"属性描述\">\r\n            <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"car.describe\" />\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column header=\"操作\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                <span class=\"tabelDeleteIco\" (click)=\"delete(i)\">删除</span>\r\n            </ng-template>\r\n        </p-column>\r\n    </p-dataTable>\r\n</div>\r\n<div class=\"ui-g-12 btn padding-0 title-name\">\r\n    <span class=\"icoColor\" (click)=\"rest()\">重置</span>\r\n    <button pButton type=\"button\" (click)=\"prev()\" label=\"上一步\" *ngIf=\"vlaue=='1'\"></button>\r\n    <button pButton type=\"button\" (click)=\"next()\" label=\"下一步\" *ngIf=\"vlaue=='0'&&addFieldManageBean.filedView=='02'\"></button>\r\n    <button pButton type=\"button\" (click)=\"saveClick()\" label=\"保存\" *ngIf=\"vlaue=='1'||addFieldManageBean.filedView!='02'\"></button>\r\n    <button pButton type=\"button\" (click)=\"cancel()\" label=\"取消\" *ngIf=\"vlaue=='1'\"></button>\r\n</div>\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-update/field-manage-list-update.component.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-update/field-manage-list-update.component.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-r {\n  text-align: right;\n  padding-top: .75em; }\n\n.padding-0 {\n  padding: 0;\n  margin-right: -19px; }\n\n.field-name {\n  margin-left: -1%; }\n\n.btn {\n  text-align: center; }\n\n.addBtn {\n  background: #FFC107; }\n\n.add {\n  text-align: right; }\n\n.spe {\n  width: 94% !important; }\n\n:host/deep/ .speBtn.ui-button:enabled:not(:focus):hover,\n.speBtn.ui-datepicker-buttonpane > button:enabled:not(:focus):hover {\n  background: #FFC107 !important; }\n\n:host/deep/ .ui-steps-item {\n  width: 50%; }\n\n.title-name {\n  padding-bottom: 0; }\n\n:host/deep/ .ui-steps .ui-steps-item .ui-menuitem-link {\n  background: #fff !important; }\n\n.line-name {\n  background: #efefef;\n  padding: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9idXNpbmVzcy1jZW50ZXItbWFuYWdlL2ZpZWxkLW1hbmFnZS1saXN0L2ZpZWxkLW1hbmFnZS1saXN0LXVwZGF0ZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFxidXNpbmVzcy1jZW50ZXItbWFuYWdlXFxmaWVsZC1tYW5hZ2UtbGlzdFxcZmllbGQtbWFuYWdlLWxpc3QtdXBkYXRlXFxmaWVsZC1tYW5hZ2UtbGlzdC11cGRhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksVUFBVTtFQUNWLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHFCQUFxQixFQUFBOztBQUd6Qjs7RUFFSSw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFFSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSwyQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxtQkFBbUI7RUFDbkIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9idXNpbmVzcy1jZW50ZXItbWFuYWdlL2ZpZWxkLW1hbmFnZS1saXN0L2ZpZWxkLW1hbmFnZS1saXN0LXVwZGF0ZS9maWVsZC1tYW5hZ2UtbGlzdC11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1yIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IC43NWVtO1xyXG59XHJcblxyXG4ucGFkZGluZy0wIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xOXB4O1xyXG59XHJcbi5maWVsZC1uYW1le1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xJTtcclxufVxyXG4uYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZEJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZDMTA3O1xyXG59XHJcblxyXG4uYWRkIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uc3BlIHtcclxuICAgIHdpZHRoOiA5NCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnNwZUJ0bi51aS1idXR0b246ZW5hYmxlZDpub3QoOmZvY3VzKTpob3ZlcixcclxuLnNwZUJ0bi51aS1kYXRlcGlja2VyLWJ1dHRvbnBhbmU+YnV0dG9uOmVuYWJsZWQ6bm90KDpmb2N1cyk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGQzEwNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3RlcHMtaXRlbSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4udGl0bGUtbmFtZSB7XHJcbiAgICAvLyAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zdGVwcyAudWktc3RlcHMtaXRlbSAudWktbWVudWl0ZW0tbGluayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpbmUtbmFtZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-update/field-manage-list-update.component.ts":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-update/field-manage-list-update.component.ts ***!
  \******************************************************************************************************************************************************/
/*! exports provided: FieldManageListUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldManageListUpdateComponent", function() { return FieldManageListUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_business_center_manage_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../http/business-center-manage.http.service */ "./src/app/pages/tzb/common/base-manage/business-center-manage/http/business-center-manage.http.service.ts");
/* harmony import */ var _bean_field_manage_list_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bean/field-manage-list.bean */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/bean/field-manage-list.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FieldManageListUpdateComponent = /** @class */ (function () {
    function FieldManageListUpdateComponent(commfunc, router, confirmationService, httpService, fb) {
        this.commfunc = commfunc;
        this.router = router;
        this.confirmationService = confirmationService;
        this.httpService = httpService;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.msgs = []; //信息提示框
        this.tableList2 = [];
        this.addFieldManageBean = new _bean_field_manage_list_bean__WEBPACK_IMPORTED_MODULE_7__["addFieldManageBean"]();
        this.FiledType = [];
        this.FiledView = [];
        this.isShowTip = true;
        this.kk = '日期型';
        this.userform = this.fb.group({
            "daField": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[\w]+$/)]),
            "daName": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            // , [Validators.required,,Validators.pattern(/^[\u4e00-\u9fa5]+$/)]
            "filedType": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            "describe": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            "filedLen": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            "filedView": new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'entityName': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        });
        this.codeValues();
        this.FiledType = this.code['FiledType']; //字段类型
        this.FiledView = this.code['FiledView']; //界面展示形式
        this.dtEntity = this.code['dtEntity']; //实体
        this.tableList2 = [{
                fieldValue: '',
                describe: ''
            }];
    }
    FieldManageListUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addFieldManageBean.filedType = this.FiledType[0].value;
        this.addFieldManageBean.filedView = this.FiledView[0].value;
        this.daField = this.inValue;
        this.entityName = this.inValue1;
        this.activeIndex = 0;
        this.vlaue = '0';
        this.items = [
            {
                label: '字段基本信息配置',
                command: function (event) {
                    _this.activeIndex = 0;
                }
            },
            {
                label: '字段取值配置',
                command: function (event) {
                    _this.activeIndex = 1;
                }
            },
        ];
        this.echoDetail();
    };
    FieldManageListUpdateComponent.prototype.change = function () {
        if (this.addFieldManageBean.filedType == '03') {
            this.addFieldManageBean.filedView = '03';
        }
        else {
            this.addFieldManageBean.filedView = this.FiledView[0].value;
        }
    };
    //码值
    FieldManageListUpdateComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //下一步
    FieldManageListUpdateComponent.prototype.next = function () {
        var _this = this;
        if (this.activeIndex == 0) {
            this.isShowTip = true;
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
            if (this.addFieldManageBean.filedType == '03') {
                this.addFieldManageBean.filedView = '03';
            }
            this.addFieldManageBean.filedStatus = '0';
            this.addFieldManageBean.daField = this.daField;
            this.addFieldManageBean.daName = this.daName;
            this.httpService.createOrStoreAttrItemOfPms(this.addFieldManageBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.echoDetail();
                    _this.activeIndex = _this.activeIndex + 1;
                    _this.vlaue = _this.activeIndex;
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
        }
        else if (this.activeIndex == 1) {
        }
    };
    //上一步
    FieldManageListUpdateComponent.prototype.prev = function () {
        this.activeIndex = this.activeIndex - 1;
        this.vlaue = this.activeIndex;
    };
    //删除
    FieldManageListUpdateComponent.prototype.delete = function (i) {
        this.tableList2.splice(i, 1);
        this.tableList2 = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.tableList2);
    };
    //修改
    FieldManageListUpdateComponent.prototype.add = function () {
        var aa = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.tableList2);
        aa.push({
            fieldValue: '', describe: '',
        });
        this.tableList2 = aa;
    };
    //保存
    FieldManageListUpdateComponent.prototype.saveClick = function () {
        var _this = this;
        if (this.addFieldManageBean.filedView == '02') { //下拉列表框
            var param = {
                daField: this.daField,
                itemVals: this.tableList2,
                entityName: this.addFieldManageBean.entityName
            };
            this.httpService.createOrStorAttrItemValOfPms(param).subscribe(function (data) {
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
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
            });
        }
        else {
            this.isShowTip = true;
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
            if (this.addFieldManageBean.filedType == '03') {
                this.addFieldManageBean.filedView = '03';
            }
            this.addFieldManageBean.filedStatus = '0';
            this.addFieldManageBean.daField = this.daField;
            this.addFieldManageBean.daName = this.daName;
            this.httpService.createOrStoreAttrItemOfPms(this.addFieldManageBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.isShowTip = false;
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
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
            });
        }
    };
    //先调详情
    FieldManageListUpdateComponent.prototype.echoDetail = function () {
        var _this = this;
        var param = {
            daField: this.daField,
            entityName: this.entityName
        };
        this.httpService.queryAttrItemInfoOfPms(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.addFieldManageBean = data;
                _this.daName = data.daName;
                if (data.fieldList) {
                    _this.tableList2 = data.fieldList;
                }
                else {
                    _this.tableList2 = [{
                            fieldValue: '',
                            describe: ''
                        }];
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
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    FieldManageListUpdateComponent.prototype.rest = function () {
        if (this.activeIndex == 0) {
            this.isShowTip = false;
            this.addFieldManageBean = new _bean_field_manage_list_bean__WEBPACK_IMPORTED_MODULE_7__["addFieldManageBean"]();
            this.addFieldManageBean.filedType = this.FiledType[0].value;
            this.addFieldManageBean.filedView = this.FiledView[0].value;
        }
        else if (this.activeIndex == 1) {
            this.tableList2.forEach(function (element) {
                element.fieldValue = '';
                element.describe = '';
            });
        }
    };
    FieldManageListUpdateComponent.prototype.cancel = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FieldManageListUpdateComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FieldManageListUpdateComponent.prototype, "inValue1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FieldManageListUpdateComponent.prototype, "outValue", void 0);
    FieldManageListUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'field-manage-list-update',
            template: __webpack_require__(/*! ./field-manage-list-update.component.html */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-update/field-manage-list-update.component.html"),
            styles: [__webpack_require__(/*! ./field-manage-list-update.component.scss */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-update/field-manage-list-update.component.scss")],
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            _http_business_center_manage_http_service__WEBPACK_IMPORTED_MODULE_6__["BusinessCenterManageHttp"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], FieldManageListUpdateComponent);
    return FieldManageListUpdateComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 规则信息增加 -->\r\n<div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 module\">\r\n        <header-title [Info]=\"'字段列表查询'\"></header-title>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-3\">\r\n                <div class=\"ui-g-4 text-r\">\r\n                    <label>字段英文名：</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"filedManageListBean.daField\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <div class=\"ui-g-4 text-r\">\r\n                    <label>字段中文名：</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"filedManageListBean.daName\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-3 \">\r\n                <div class=\"ui-g-4 text-r\">\r\n                    <label>字段描述：</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"filedManageListBean.describe\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <div class=\"ui-g-4 text-r\">\r\n                    <label>实体名:</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <p-dropdown [options]=\"dtEntity\" [(ngModel)]=\"filedManageListBean.entityName\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 btn\">\r\n            <button pButton label=\"查询\" (click)=\"queryClick()\"></button>\r\n            <span class=\"icoColor\" (click)=\"reset()\">重置</span>\r\n        </div>\r\n    </div>\r\n    <!-- 字段列表新增 -->\r\n    <div class=\"ui-g-12 module\">\r\n        <div class=\"ui-g-12 text-r\">\r\n            <span class=\"icoColor\" (click)=\"add()\">新增</span>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <p-dataTable [value]=\"list\" scrollable=\"true\" [style]=\"{'text-align':'center'}\">\r\n                <p-column field=\"\" header=\"序号\">\r\n                    <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                        <span>{{ri+1}}</span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"daField\" header=\"字段英文名\"></p-column>\r\n                <p-column field=\"daName\" header=\"字段中文名\"></p-column>\r\n                <p-column field=\"filedType\" header=\"字段类型\">\r\n                    <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                        <span>{{item.filedType|codeValuePie:FiledType}}</span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"description\" header=\"字段描述\"></p-column>\r\n                <p-column field=\"filedLen\" header=\"字段长度\"></p-column>\r\n                <p-column field=\"filedView\" header=\"界面展示形式\">\r\n                    <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                        <span>{{item.filedView|codeValuePie:FiledView}}</span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"filedStatus\" header=\"状态\">\r\n                    <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                        <span>{{item.filedStatus|codeValuePie:FiledStatus}}</span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column header=\"操作\">\r\n                    <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                        <span class=\"tabelDetailIco\" (click)=\"check(col)\">查看</span>\r\n                        <span class=\"tabelUpdateIco\" (click)=\"update(col)\" *ngIf=\"col.filedStatus=='0'\">修改</span>\r\n                        <span (click)=\"delete(col)\" *ngIf=\"col.filedStatus=='0'\" style=\"cursor: pointer;\r\n                        color: #19b0c8;\">停用</span>\r\n                        <!-- <span (click)=\"toNewUse(col)\" *ngIf=\"col.filedStatus=='1'\" style=\"cursor: pointer;\r\n                        color: #19b0c8;\">启用</span> -->\r\n                    </ng-template>\r\n                </p-column>\r\n            </p-dataTable>\r\n            <!-- 分页 -->\r\n            <p-paginator [first]=\"first\" rows=\"{{filedManageListBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"5\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginate($event)\"></p-paginator>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<!-- 添加 -->\r\n<p-dialog *ngIf=\"addDisplay\" [(visible)]=\"addDisplay\" modal=\"true\" class=\"addDialog\">\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <field-manage-list-add *ngIf=\"showFlag=='1'\" (outValue)=\"outValueAdd($event)\"></field-manage-list-add>\r\n    <field-manage-list-update *ngIf=\"showFlag=='2'\" [inValue]=\"inValue2\" [inValue1]=\"inValue3\" (outValue)=\"outValueUpdate($event)\"></field-manage-list-update>\r\n    <field-manage-list-detail *ngIf=\"showFlag=='3'\" [inValue]=\"inValue1\" [inValue1]=\"inValue3\"></field-manage-list-detail>\r\n</p-dialog>\r\n<!-- 删除 -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" style=\"color:#fff;\" label=\"是\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" style=\"color:#fff;\" label=\"否\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n<!-- 提示信息 -->\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-t {\n  margin-top: 10px; }\n\n.text-r {\n  text-align: right;\n  padding-top: .75em; }\n\n.padding-0 {\n  padding: 0; }\n\n.btn {\n  text-align: center; }\n\n.addBtn {\n  background: #FFC107; }\n\n.spe {\n  width: 94% !important; }\n\n:host/deep/ .speBtn.ui-button:enabled:not(:focus):hover, .speBtn.ui-datepicker-buttonpane > button:enabled:not(:focus):hover {\n  background: #FFC107 !important; }\n\n:host/deep/ .addDialog .ui-dialog.ui-shadow {\n  height: 80px !important; }\n\n:host/deep/ .addDialog .ui-dialog .ui-dialog-content {\n  padding: 0 !important;\n  height: 90% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9idXNpbmVzcy1jZW50ZXItbWFuYWdlL2ZpZWxkLW1hbmFnZS1saXN0L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGNvbW1vblxcYmFzZS1tYW5hZ2VcXGJ1c2luZXNzLWNlbnRlci1tYW5hZ2VcXGZpZWxkLW1hbmFnZS1saXN0XFxmaWVsZC1tYW5hZ2UtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSw4QkFBOEIsRUFBQTs7QUFFbEM7RUFFSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxxQkFBcUI7RUFDckIsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY29tbW9uL2Jhc2UtbWFuYWdlL2J1c2luZXNzLWNlbnRlci1tYW5hZ2UvZmllbGQtbWFuYWdlLWxpc3QvZmllbGQtbWFuYWdlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnRleHQtciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiAuNzVlbTtcclxufVxyXG5cclxuLnBhZGRpbmctMCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZEJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZDMTA3O1xyXG59XHJcblxyXG4uc3BlIHtcclxuICAgIHdpZHRoOiA5NCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnNwZUJ0bi51aS1idXR0b246ZW5hYmxlZDpub3QoOmZvY3VzKTpob3Zlciwuc3BlQnRuLnVpLWRhdGVwaWNrZXItYnV0dG9ucGFuZT5idXR0b246ZW5hYmxlZDpub3QoOmZvY3VzKTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZDMTA3ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLmFkZERpYWxvZyAudWktZGlhbG9nLnVpLXNoYWRvd3tcclxuICAgIC8vIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcclxuICAgIC8vIG1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0L2RlZXAvIC5hZGREaWFsb2cgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: FieldManageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldManageListComponent", function() { return FieldManageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bean_field_manage_list_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/field-manage-list.bean */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/bean/field-manage-list.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_business_center_manage_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http/business-center-manage.http.service */ "./src/app/pages/tzb/common/base-manage/business-center-manage/http/business-center-manage.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FieldManageListComponent = /** @class */ (function () {
    function FieldManageListComponent(confirmationService, httpService, commfunc) {
        this.confirmationService = confirmationService;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.addDisplay = false;
        this.msgs = []; //信息提示框
        this.filedManageListBean = new _bean_field_manage_list_bean__WEBPACK_IMPORTED_MODULE_2__["FiledManageListBean"]();
        this.list = [];
        this.first = 0; //首页
        this.FiledType = []; //字段类型
        this.FiledView = []; //界面展示形式
        this.FiledStatus = []; //界面展示形式
        this.codeValues();
        this.FiledView = this.code['FiledView']; //界面展示形式
        this.FiledStatus = this.code['FiledStatus']; //状态
        this.FiledType = this.code['FiledType']; //字段类型
        this.dtEntity = this.code['dtEntity']; //实体
    }
    FieldManageListComponent.prototype.ngOnInit = function () {
        this.filedManageListBean.pageNum = 1;
        this.filedManageListBean.pageSize = 10;
        this.query();
    };
    //码值
    FieldManageListComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //查询
    FieldManageListComponent.prototype.queryClick = function () {
        this.filedManageListBean.pageNum = 1;
        this.filedManageListBean.pageSize = 10;
        this.query();
    };
    FieldManageListComponent.prototype.query = function () {
        var _this = this;
        this.filedManageListBean['doFlag'] = '1';
        this.httpService.queryAttrItemListOfPms(this.filedManageListBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.total = data.total;
                _this.list = data.fieldsList ? data.fieldsList : [];
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
    //重置
    FieldManageListComponent.prototype.reset = function () {
        this.filedManageListBean = new _bean_field_manage_list_bean__WEBPACK_IMPORTED_MODULE_2__["FiledManageListBean"]();
    };
    //分页
    FieldManageListComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.filedManageListBean.pageSize = Number(event.rows);
        //当前页
        var currentPage = event.page + 1;
        //console.log(currentPage)
        this.filedManageListBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.filedManageListBean.pageSize;
        this.query(); //调用查询的方法
    };
    //新增
    FieldManageListComponent.prototype.add = function () {
        this.addDisplay = true;
        this.showFlag = '1';
        this.headerTitle = '字段列表新增';
    };
    //新增回调
    FieldManageListComponent.prototype.outValueAdd = function (param) {
        if (param['flag']) {
            this.query();
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: '提示', detail: "新增成功！" });
        }
        this.addDisplay = param.display;
    };
    //修改
    FieldManageListComponent.prototype.update = function (item) {
        this.addDisplay = true;
        this.showFlag = '2';
        this.headerTitle = '字段列表修改';
        this.inValue2 = item.daField;
        this.inValue3 = item.entityName;
    };
    //修改回调
    FieldManageListComponent.prototype.outValueUpdate = function (event) {
        this.addDisplay = event;
        this.query();
    };
    //详情
    FieldManageListComponent.prototype.check = function (item) {
        this.addDisplay = true;
        this.showFlag = '3';
        this.headerTitle = '字段列表详情';
        this.inValue1 = item.daField;
        this.inValue3 = item.entityName;
    };
    //启用
    FieldManageListComponent.prototype.toNewUse = function (item) {
        this.func(item, '0');
    };
    //停用
    FieldManageListComponent.prototype.delete = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确定要停用' + item.daField + '吗?',
            accept: function () {
                _this.func(item, '1');
            }
        });
    };
    FieldManageListComponent.prototype.func = function (item, filedStatus) {
        var _this = this;
        var param = {
            daField: item.daField,
            filedStatus: filedStatus,
            entityName: item.entityName
        };
        this.httpService.createOrStoreAttrItemOfPms(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.queryClick();
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
    FieldManageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'field-manage-list',
            template: __webpack_require__(/*! ./field-manage-list.component.html */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list.component.html"),
            styles: [__webpack_require__(/*! ./field-manage-list.component.scss */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list.component.scss")],
        }),
        __metadata("design:paramtypes", [primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            _http_business_center_manage_http_service__WEBPACK_IMPORTED_MODULE_4__["BusinessCenterManageHttp"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], FieldManageListComponent);
    return FieldManageListComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list.module.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list.module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: FieldListManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldListManageModule", function() { return FieldListManageModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _field_manage_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field-manage-list.component */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list.component.ts");
/* harmony import */ var _field_manage_list_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./field-manage-list.routing */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list.routing.ts");
/* harmony import */ var _field_manage_list_add_field_manage_list_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./field-manage-list-add/field-manage-list-add.component */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-add/field-manage-list-add.component.ts");
/* harmony import */ var _field_manage_list_detail_field_manage_list_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./field-manage-list-detail/field-manage-list-detail.component */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-detail/field-manage-list-detail.component.ts");
/* harmony import */ var _field_manage_list_update_field_manage_list_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./field-manage-list-update/field-manage-list-update.component */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list-update/field-manage-list-update.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var FieldListManageModule = /** @class */ (function () {
    function FieldListManageModule() {
    }
    FieldListManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _field_manage_list_routing__WEBPACK_IMPORTED_MODULE_5__["FieldListManageRouting"]
            ],
            declarations: [
                _field_manage_list_component__WEBPACK_IMPORTED_MODULE_4__["FieldManageListComponent"],
                _field_manage_list_add_field_manage_list_add_component__WEBPACK_IMPORTED_MODULE_6__["FieldManageListAddComponent"],
                _field_manage_list_detail_field_manage_list_detail_component__WEBPACK_IMPORTED_MODULE_7__["FieldManageListDeatilComponent"],
                _field_manage_list_update_field_manage_list_update_component__WEBPACK_IMPORTED_MODULE_8__["FieldManageListUpdateComponent"]
            ],
        })
    ], FieldListManageModule);
    return FieldListManageModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list.routing.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list.routing.ts ***!
  \********************************************************************************************************************/
/*! exports provided: FieldListManageRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldListManageRouting", function() { return FieldListManageRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _field_manage_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field-manage-list.component */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-manage-list/field-manage-list.component.ts");


var routes = [
    {
        path: '', component: _field_manage_list_component__WEBPACK_IMPORTED_MODULE_1__["FieldManageListComponent"],
    },
];
var FieldListManageRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=field-manage-list-field-manage-list-module.js.map