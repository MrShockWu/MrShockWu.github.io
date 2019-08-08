(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-model-data-custom-model-data-module"],{

/***/ "./src/app/pages/tzb/custom/custom-information/custom-model-data/bean/custom-model-data.bean.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-model-data/bean/custom-model-data.bean.ts ***!
  \******************************************************************************************************/
/*! exports provided: CustomModelDataBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomModelDataBean", function() { return CustomModelDataBean; });
var CustomModelDataBean = /** @class */ (function () {
    function CustomModelDataBean() {
    }
    return CustomModelDataBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-model-data/custom-model-data.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-model-data/custom-model-data.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12 query_style\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-3 right\">模型名称:</div>\r\n            <div class=\"ui-g-3\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"customModelDataBean.model_name\" />\r\n            </div>\r\n            <!-- <div class=\"ui-g-2 right\">推送日期:</div>\r\n            <div class=\"ui-g-2\">\r\n                <p-calendar [showIcon]=\"true\" [(ngModel)]=\"startDate\" [maxDate]=\"endDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showDataStart()\" (onBlur)=\"showDataStart()\"></p-calendar>\r\n                <span>至</span>\r\n                <p-calendar [showIcon]=\"true\" [(ngModel)]=\"endDate\" [minDate]=\"startDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showDataEnd()\" (onBlur)=\"showDataEnd()\"></p-calendar>\r\n            </div> -->\r\n            <div class=\"ui-g-3 right\">状态:</div>\r\n            <div class=\"ui-g-3\">\r\n                <p-dropdown [options]=\"modelStatOptions\" [(ngModel)]=\"customModelDataBean.model_stat\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"query()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n    <div style=\"float:right;padding-right:1em;\">\r\n        <button pButton type=\"button\" label=\"新增\" (click)=\"add(1)\" *ngIf=\"permissionCheck('SID00001_P026_P001')\"></button>\r\n        <button pButton type=\"button\" label=\"选择字段\" class=\"icoColor\" (click)=\"chooseBtn()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\">\r\n        <p-dataTable [value]=\"modelTable\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field={{list.value}} *ngFor=\"let list of tableData\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <div (click)=\"sort(list.sort)\">{{list.label}}</div>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" *ngIf=\"list.value=='modelStat'\" let-item=\"rowData\">\r\n                    <span>{{item.modelStat|codeValuePie:modelStatOptions}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"操作\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span *ngIf=\"col.modelStat != 1\" (click)=\"toUp(col)\" class=\"tabelDetailIco\">启用</span>\r\n                    <span *ngIf=\"col.modelStat == 1\" (click)=\"toStop(col)\" class=\"tabelDetailIco\">停用</span>\r\n                    <span *ngIf=\"col.modelStat != 1\" (click)=\"toUpdate(col)\" class=\"tabelUpdateIco\">修改</span>\r\n                    <span *ngIf=\"col.modelStat != 1\" (click)=\"toDelete(col)\" class=\"tabelDeleteIco\">删除</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows={{pageSize}} totalRecords={{total}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n\r\n<p-dialog [(visible)]=\"addPage\" modal=\"true\" width=\"1200\" height=\"600\">\r\n    <p-header>\r\n        {{addHeader}}\r\n    </p-header>\r\n    <div class=\"ui-g-12\">\r\n        <p-checkbox class=\"ui-g-12\" binary=\"true\" label=\"全选\" (click)=\"checkAll()\" [(ngModel)]=\"isAll\"></p-checkbox>\r\n        <p-checkbox class=\"ui-g-4\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of arrList\" [(ngModel)]=\"item.isCheck\" (click)=\"doSelect(item)\"></p-checkbox>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"save()\"></button>\r\n    </div>\r\n</p-dialog>\r\n<p-dialog [(visible)]=\"corresTem\" width=\"1000\" height=\"500\">\r\n    <div class=\"ui-g-12 apply\">\r\n        <div class=\"ui-g-12 body-box\">\r\n            <div class=\"ui-g-12 pageList\" *ngFor=\"let item of tasklistChildren\">\r\n                <div class=\"ui-g-12 title\">\r\n                    <p-radioButton value=\"{{item.tempId}}\" name=\"tempId\" label=\"{{item.tempName}}\" [(ngModel)]=\"tempId\"></p-radioButton>\r\n                    <li>{{item.tempContent}}</li>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"submit_1()\"></button>\r\n    </div>\r\n</p-dialog>\r\n<!--新增/修改-->\r\n<p-dialog *ngIf=\"addCorresTem\" [(visible)]=\"addCorresTem\" class=\"addDialog\" width=\"1000\" modal=\"true\">\r\n    <div class=\"ui-g-12 padding-r\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-6\" [formGroup]=\"addForm\">\r\n                <div class=\"ui-g-4 text-r\" appValidation>模型名称:</div>\r\n                <div class=\"ui-g-8\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"modelName\" formControlName=\"modelName\">\r\n                </div>\r\n                <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!addForm.controls['modelName'].valid&&addForm.controls['modelName'].dirty\">\r\n                    <p [hidden]=\"!addForm.hasError('required','modelName')\"> 模型名称不能为空！</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\" [formGroup]=\"addForm\">\r\n                <div class=\"ui-g-4 text-r\" appValidation>模型说明:</div>\r\n                <div class=\"ui-g-8\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"modelDescription\" formControlName=\"modelDescription\">\r\n                </div>\r\n                <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!addForm.controls['modelDescription'].valid&&addForm.controls['modelDescription'].dirty\">\r\n                    <p [hidden]=\"!addForm.hasError('required','modelDescription')\"> 模型说明不能为空！</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\" [formGroup]=\"addForm\">\r\n                <div class=\"ui-g-4 text-r\" appValidation>大数据模型分类标识:</div>\r\n                <div class=\"ui-g-8\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"tagId\" formControlName=\"tagId\" (blur)=\"queryModelInfoList(2)\" [readonly]=\"whether\">\r\n                </div>\r\n                <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!addForm.controls['tagId'].valid&&addForm.controls['tagId'].dirty\">\r\n                    <p [hidden]=\"!addForm.hasError('required','tagId')\">大数据模型分类标识不能为空！</p>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"ui-g-6\" [formGroup]=\"addForm\">\r\n                <div class=\"ui-g-4 text-r\" appValidation>推送时间:</div>\r\n                <div class=\"ui-g-8\">\r\n                    <p-calendar formControlName=\"modelDate\" [maxDate]=\"maxDate\" [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                        yearRange=\"1917:2200\" dateFormat=\"yy-mm-dd\" [showOtherMonths]=\"false\" [locale]=\"ch\" [(ngModel)]=\"modelDate\"></p-calendar>\r\n                </div>\r\n                <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!addForm.controls['modelDate'].valid&&addForm.controls['modelDate'].dirty\">\r\n                    <p [hidden]=\"!addForm.hasError('required','modelDate')\"> 推送时间不能为空！</p>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"保存\" (click)=\"save2()\"></button>\r\n    </div>\r\n</p-dialog>\r\n<p-growl [(value)]=\"msgs\" baseZIndex=\"3\"></p-growl>\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-model-data/custom-model-data.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-model-data/custom-model-data.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right {\n  text-align: right;\n  width: 14%; }\n\n.table,\n.btn {\n  text-align: center; }\n\n.query_style .ui-g-12 {\n  padding: 0; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-calendar {\n    min-width: 76px !important;\n    width: 43% !important; } }\n\n@media screen and (min-width: 1280px) {\n  :host/deep/ .ui-calendar {\n    width: 45%;\n    min-width: 128px; }\n  :host/deep/ .addDialog .ui-calendar {\n    width: 100%; } }\n\n.padding-r {\n  padding-right: 5%; }\n\n.text-r {\n  text-align: right; }\n\n:host/deep/ .addDialog .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n:host/deep/ .tabelDetailSetIco:hover {\n  background: transparent;\n  color: #999;\n  cursor: pointer;\n  font-weight: bold;\n  padding: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vY3VzdG9tLW1vZGVsLWRhdGEvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20taW5mb3JtYXRpb25cXGN1c3RvbS1tb2RlbC1kYXRhXFxjdXN0b20tbW9kZWwtZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixVQUFVLEVBQUE7O0FBR2Q7O0VBRUksa0JBQWtCLEVBQUE7O0FBR3RCO0VBRVEsVUFBVSxFQUFBOztBQUlsQjtFQUNLO0lBQ0csMEJBQTBCO0lBQzFCLHFCQUFxQixFQUFBLEVBQ3hCOztBQUdMO0VBQ0s7SUFDRyxVQUFVO0lBQ1YsZ0JBQWdCLEVBQUE7RUFFbkI7SUFDRyxXQUFXLEVBQUEsRUFDZDs7QUFHTDtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWluZm9ybWF0aW9uL2N1c3RvbS1tb2RlbC1kYXRhL2N1c3RvbS1tb2RlbC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDE0JTtcclxufVxyXG5cclxuLnRhYmxlLFxyXG4uYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnF1ZXJ5X3N0eWxlIHtcclxuICAgIC51aS1nLTEyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgIDpob3N0L2RlZXAvIC51aS1jYWxlbmRhciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA3NnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDQzJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODBweCkge1xyXG4gICAgIDpob3N0L2RlZXAvIC51aS1jYWxlbmRhciB7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTsgXHJcbiAgICAgICAgbWluLXdpZHRoOiAxMjhweDtcclxuICAgIH1cclxuICAgICA6aG9zdC9kZWVwLyAuYWRkRGlhbG9nIC51aS1jYWxlbmRhciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYWRkaW5nLXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbn1cclxuXHJcbi50ZXh0LXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5hZGREaWFsb2cgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC50YWJlbERldGFpbFNldEljbzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-model-data/custom-model-data.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-model-data/custom-model-data.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CustomModelDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomModelDataComponent", function() { return CustomModelDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _bean_custom_model_data_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean/custom-model-data.bean */ "./src/app/pages/tzb/custom/custom-information/custom-model-data/bean/custom-model-data.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomModelDataComponent = /** @class */ (function () {
    function CustomModelDataComponent(httpService, confirmationService, commfunc, route, router, fb) {
        this.httpService = httpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        this.first = 0;
        this.pageSize = 10;
        this.pageNum = 1;
        this.total = 0;
        this.msgs = [];
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.modelTable = [];
        this.addPage = false;
        this.corresTem = false;
        this.isAll = false;
        this.addHeader = '选择字段';
        this.startDate = null;
        this.endDate = null;
        this.tableData = [];
        this.arrList = [];
        this.modelNameOptions = []; //模板名称
        this.modelStatOptions = []; //状态
        this.customModelDataBean = new _bean_custom_model_data_bean__WEBPACK_IMPORTED_MODULE_5__["CustomModelDataBean"]();
        this.addCorresTem = false;
        this.maxDate = new Date();
        this.whether = true;
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (this.chName.orgId) {
            this.orgId = this.user.orgId;
        }
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
        this.userName = this.chName['userName'];
    }
    CustomModelDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.codeVal();
        this.modelStatOptions = this.code['Model_Stat']; //模型状态
        this.customModelDataBean.pageSize = 10;
        this.customModelDataBean.pageNum = 1;
        // 查询选择字段的数据
        var param = {
            businessType: "CrossSelling",
            funcType: "ModelInfo",
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
        // 查询表格里的内容
        this.query();
    };
    //码值
    CustomModelDataComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CustomModelDataComponent.prototype.showDataStart = function () {
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
    CustomModelDataComponent.prototype.showDataEnd = function () {
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
    //选择字段
    CustomModelDataComponent.prototype.chooseBtn = function () {
        this.addPage = true;
    };
    //单选
    CustomModelDataComponent.prototype.doSelect = function (data) {
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
    CustomModelDataComponent.prototype.checkAll = function () {
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
    //选择字段保存
    CustomModelDataComponent.prototype.save = function () {
        this.addMsg();
        this.addPage = false;
    };
    CustomModelDataComponent.prototype.addMsg = function () {
        var _this = this;
        this.addPage = false;
        var arr = [];
        this.tableData.forEach(function (item) {
            arr.push(item.value);
        });
        var param = {
            businessType: "CrossSelling",
            funcType: "ModelInfo",
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
    //查询
    CustomModelDataComponent.prototype.query = function () {
        this.customModelDataBean.pageSize = 10;
        this.customModelDataBean.pageNum = 1;
        this.first = 0;
        this.queryModelInfoList(1);
    };
    CustomModelDataComponent.prototype.queryModelInfoList = function (i, type) {
        var _this = this;
        if (i == 2 && this.whether) {
            return;
        }
        var params;
        if (i == 1) {
            params = {
                modelName: this.customModelDataBean.model_name,
                modelDateStart: this.commfunc.transDateN(this.startDate),
                modelDateEnd: this.commfunc.transDateN(this.endDate),
                modelStat: this.customModelDataBean.model_stat,
                pageNum: this.customModelDataBean.pageNum,
                pageSize: this.customModelDataBean.pageSize,
            };
        }
        else if (i == 2) {
            if (!this.tagId || this.tagId == '') {
                return;
            }
            else {
                params = {
                    tagId: this.tagId
                };
            }
        }
        this.httpService.queryModelInfoList(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (i == 1) {
                    _this.modelTable = data.moduleList;
                    _this.total = data.totalNum;
                }
                else if (i == 2) {
                    if (data.bdTotalNum == 0) {
                        _this.tagId = '';
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: '该大数据模型标识不存在！' }];
                        return;
                    }
                    if (data.moduleList && data.moduleList.length > 0) {
                        _this.tagId = '';
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: '该大数据模型已存在！' }];
                        return;
                    }
                    if (type && type == 1) {
                        var params_1 = {
                            tagId: _this.tagId,
                            modelOperatorName: _this.userName,
                            modelOperatorId: _this.userId,
                            modelName: _this.modelName,
                            modelDes: _this.modelDescription
                        };
                        _this.httpService.createModelInfo(params_1).subscribe(function (data) {
                            if (data.returnCode.code == 'success') {
                                _this.addCorresTem = false;
                                _this.query();
                            }
                            else {
                                _this.msgs = [];
                                data.returnCode.message ? data.returnCode.message : '新增失败！';
                                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                            }
                        }, function (err) {
                            _this.msgs = [];
                            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
                        });
                    }
                }
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //重置
    CustomModelDataComponent.prototype.reset = function () {
        this.startDate = null;
        this.endDate = null;
        this.customModelDataBean = new _bean_custom_model_data_bean__WEBPACK_IMPORTED_MODULE_5__["CustomModelDataBean"]();
    };
    //翻页
    CustomModelDataComponent.prototype.paginate = function (event) {
        this.customModelDataBean.pageSize = event.rows * 1;
        //当前页
        this.customModelDataBean.pageNum = event.page + 1;
        this.first = event.page * this.customModelDataBean.pageSize;
        this.queryModelInfoList(1);
    };
    // 启用
    CustomModelDataComponent.prototype.toUp = function (col) {
        var _this = this;
        var params = {
            modelId: col.modelId,
        };
        this.httpService.queryModelTempInfoList(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tasklistChildren = data.modelTempInfoList;
                _this.modelId = col.modelId;
                _this.corresTem = true;
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    CustomModelDataComponent.prototype.submit_1 = function () {
        var _this = this;
        var params = {
            modelId: this.modelId,
            modelTempId: this.tempId,
            modelOperatorId: this.userId,
            modelOperatorName: this.userName,
            createdOrgId: this.orgId,
            createdOrgName: this.chName.orgName,
            modelStat: this.tempStat = '1',
        };
        this.httpService.updateModelInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.corresTem = false;
                _this.queryModelInfoList(1);
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '修改失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    // 停用
    CustomModelDataComponent.prototype.toStop = function (data) {
        var _this = this;
        this.confirmationService.confirm({
            message: '是否停用?',
            accept: function () {
                _this.backList = data;
                _this.submit_2();
            }
        });
    };
    //删除
    CustomModelDataComponent.prototype.toDelete = function (col) {
        var _this = this;
        this.confirmationService.confirm({
            message: '是否删除?',
            accept: function () {
                var params = {
                    modelId: col.modelId
                };
                _this.httpService.deleteModelInfo(params).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.query();
                    }
                    else {
                        _this.msgs = [];
                        data.returnCode.message ? data.returnCode.message : '修改失败！';
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
                });
            }
        });
    };
    //修改
    CustomModelDataComponent.prototype.toUpdate = function (col) {
        this.add(2, col);
    };
    CustomModelDataComponent.prototype.submit_2 = function () {
        var _this = this;
        var params = {
            modelId: this.backList.modelId,
            createdOrgId: this.orgId,
            createdOrgName: this.chName.orgName,
            modelOperatorId: this.userId,
            modelOperatorName: this.userName,
            modelStat: this.tempStat = '2',
        };
        this.httpService.updateModelInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.query();
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '修改失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //交叉销售多模型配置新增接口
    CustomModelDataComponent.prototype.add = function (num, col) {
        this.flag = num;
        console.log(col);
        if (this.flag && this.flag == 2) {
            this.whether = true;
            this.bean = col;
            this.modelName = this.bean.modelName;
            this.modelDescription = this.bean.modelDes;
            this.tagId = this.bean.tagId;
        }
        else {
            this.whether = false;
            this.modelName = '';
            this.modelDescription = '';
            this.tagId = '';
            this.modelDate = null;
        }
        this.addCorresTem = true;
        this.addForm = this.fb.group({
            'modelName': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            'modelDescription': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            'tagId': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
        });
    };
    CustomModelDataComponent.prototype.save2 = function () {
        var _this = this;
        //校验的
        for (var i in this.addForm.controls) {
            this.addForm.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.addForm.controls) {
            if (!this.addForm.controls[i].valid) {
                return;
            }
        }
        // let modelName, modelDes;
        // if (this.modelName && this.modelName.lenght != 0) {
        //     modelName = this.modelName.filter((item) => {
        //         return item.value == this.tagId
        //     })
        // }
        // if (this.modelDescription && this.modelDescription.lenght != 0) {
        //     modelDes = this.modelDescription.filter((item) => {
        //         return item.value == this.tagId
        //     })
        // }
        if (this.flag == 1) {
            this.queryModelInfoList(2, 1);
        }
        else {
            this.bean.modelName = this.modelName;
            this.bean.modelDes = this.modelDescription;
            this.bean.tagId = this.tagId;
            this.httpService.updateModelInfo(this.bean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.addCorresTem = false;
                    _this.query();
                }
                else {
                    _this.msgs = [];
                    data.returnCode.message ? data.returnCode.message : '修改失败！';
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
            });
        }
    };
    //按钮权限
    CustomModelDataComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomModelDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-model-data',
            template: __webpack_require__(/*! ./custom-model-data.component.html */ "./src/app/pages/tzb/custom/custom-information/custom-model-data/custom-model-data.component.html"),
            styles: [__webpack_require__(/*! ./custom-model-data.component.scss */ "./src/app/pages/tzb/custom/custom-information/custom-model-data/custom-model-data.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__["CusOperationHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], CustomModelDataComponent);
    return CustomModelDataComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-model-data/custom-model-data.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-model-data/custom-model-data.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: CustomModelDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomModelDataModule", function() { return CustomModelDataModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _custom_model_data_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-model-data.routing */ "./src/app/pages/tzb/custom/custom-information/custom-model-data/custom-model-data.routing.ts");
/* harmony import */ var _custom_model_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-model-data.component */ "./src/app/pages/tzb/custom/custom-information/custom-model-data/custom-model-data.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CustomModelDataModule = /** @class */ (function () {
    function CustomModelDataModule() {
    }
    CustomModelDataModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _custom_model_data_routing__WEBPACK_IMPORTED_MODULE_5__["CustomModelDataRouting"]
            ],
            declarations: [
                _custom_model_data_component__WEBPACK_IMPORTED_MODULE_6__["CustomModelDataComponent"]
            ],
            providers: []
        })
    ], CustomModelDataModule);
    return CustomModelDataModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-model-data/custom-model-data.routing.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-model-data/custom-model-data.routing.ts ***!
  \****************************************************************************************************/
/*! exports provided: routes, CustomModelDataRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomModelDataRouting", function() { return CustomModelDataRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_model_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-model-data.component */ "./src/app/pages/tzb/custom/custom-information/custom-model-data/custom-model-data.component.ts");


var routes = [
    {
        path: '',
        component: _custom_model_data_component__WEBPACK_IMPORTED_MODULE_1__["CustomModelDataComponent"],
    },
];
var CustomModelDataRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=custom-model-data-custom-model-data-module.js.map