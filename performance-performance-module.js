(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["performance-performance-module"],{

/***/ "./src/app/pages/tzb/custom/performance/bean/performance.bean.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/bean/performance.bean.ts ***!
  \***********************************************************************/
/*! exports provided: PerformanceBean, indcatorList, infoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceBean", function() { return PerformanceBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indcatorList", function() { return indcatorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoList", function() { return infoList; });
var PerformanceBean = /** @class */ (function () {
    function PerformanceBean() {
    }
    return PerformanceBean;
}());

//业绩指标List
var indcatorList = /** @class */ (function () {
    function indcatorList() {
    }
    return indcatorList;
}());

//业绩指标自定义设置保存
var infoList = /** @class */ (function () {
    function infoList() {
    }
    return infoList;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping-relation/institutions-mapping-relation.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping-relation/institutions-mapping-relation.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <header-title *ngIf=\"!inValue\" [Info]=\"'创建人力-核心机构映射关系'\"></header-title>\r\n    <header-title *ngIf=\"inValue\" [Info]=\"'人力-核心机构映射关系'\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12\">\r\n            <form [formGroup]=\"userform\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-r\">\r\n                        <label for=\"\" appValidation>人力机构:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-3\">\r\n                        <input type=\"text\" pInputText [(ngModel)]=\"hrOrgId\" maxlength=\"20\" placeholder=\"人力机构码\" (blur)=\"queryHrOrg()\" formControlName=\"hrOrgId\">\r\n                        <div class=\"ui-g-12 padding-0 requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['hrOrgId'].valid&&userform.controls['hrOrgId'].dirty\">\r\n                            <p [hidden]=\"!userform.hasError('required','hrOrgId')\"> 人力机构码不能为空！</p>\r\n                            <p [hidden]=\"!userform.hasError('pattern','hrOrgId')\"> 人力机构码只能输入数字</p>\r\n                            <p [hidden]=\"!userform.hasError('maxLength','hrOrgId')\"> 人力机构码最大长度不能超过20!</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-3\">\r\n                        <input type=\"text\" pInputText [(ngModel)]=\"hrOrgName\" maxlength=\"20\" placeholder=\"人力机构名称\" readonly formControlName=\"hrOrgName\">\r\n                        <div class=\"ui-g-12 padding-0 requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['hrOrgName'].valid&&userform.controls['hrOrgName'].dirty\">\r\n                            <p [hidden]=\"!userform.hasError('required','hrOrgName')\"> 人力机构名称不能为空！</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-2\">\r\n                        <button pButton label=\"选择\" (click)=\"choose(1)\"></button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-2 text-r\">\r\n                        <label for=\"\" appValidation>核心机构:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-3\">\r\n                        <input type=\"text\" pInputText [(ngModel)]=\"coreOrgId\" maxlength=\"20\" placeholder=\"核心机构码\" (blur)=\"queryOrgByCombConditions()\"\r\n                            formControlName=\"coreOrgId\">\r\n                        <div class=\"ui-g-12 padding-0 requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['coreOrgId'].valid&&userform.controls['coreOrgId'].dirty\">\r\n                            <p [hidden]=\"!userform.hasError('required','coreOrgId')\"> 核心机构码不能为空！</p>\r\n                            <p [hidden]=\"!userform.hasError('maxLength','coreOrgId')\"> 核心机构码最大长度不能超过20!</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-3\">\r\n                        <input type=\"text\" pInputText [(ngModel)]=\"coreOrgName\" maxlength=\"20\" placeholder=\"核心机构名称\" readonly formControlName=\"coreOrgName\">\r\n                        <div class=\"ui-g-12 padding-0 requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['coreOrgName'].valid&&userform.controls['coreOrgName'].dirty\">\r\n                            <p [hidden]=\"!userform.hasError('required','coreOrgName')\"> 核心机构名称不能为空！</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-2\">\r\n                        <button pButton label=\"选择\" (click)=\"choose(2)\"></button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"ui-g-12 text-c\">\r\n            <button pButton label=\"保存\" (click)=\"save()\"></button>\r\n            <button pButton label=\"退出\" (click)=\"quit()\"></button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- 模态框 -->\r\n<p-dialog *ngIf=\"display\" [(visible)]=\"display\" [positionTop]=\"50\" width=\"1200\" height=\"900\" baseZIndex=\"1\" class=\"dialog\"\r\n    (onHide)=\"closeBack()\">\r\n    <div class=\"ui-g-12 boxShadow\">\r\n        <div class=\"ui-g-12\" *ngIf=\"contentDisplay == 1\">\r\n            <div class=\"ui-g-4\">\r\n                <label class=\"text text-r\" for=\"\">人力机构码:</label>\r\n                <input class=\"input\" type=\"text\" pInputText [(ngModel)]=\"displayHrOrgId\" maxlength=\"20\">&nbsp;&nbsp;\r\n            </div>\r\n            <div class=\"ui-g-5\">\r\n                <label class=\"text text-r\" for=\"\">人力机构名称:</label>\r\n                <input class=\"input\" type=\"text\" pInputText [(ngModel)]=\"displayHrOrgName\" maxlength=\"20\">&nbsp;&nbsp;\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <button pButton label=\"查询\" (click)=\"choose(1)\"></button>\r\n                <button pButton label=\"重置\" (click)=\"reset(1)\"></button>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <p-dataTable [value]=\"tableData1\" [style]=\"{'text-align':'center'}\" selectionMode=\"single\" width='900' (onRowSelect)=\"onRowSelect($event,1)\"\r\n                    [emptyMessage]='tableMesg'>\r\n                    <p-column field=\"orgId\" header=\"机构码\"></p-column>\r\n                    <p-column field=\"orgName\" header=\"机构名称\"></p-column>\r\n                </p-dataTable>\r\n                <p-paginator [first]=\"first\" rows={{pageSize}} totalRecords={{total}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\" *ngIf=\"contentDisplay == 2\">\r\n            <div class=\"ui-g-6\">\r\n                <label class=\"text text-r\" for=\"\">核心机构码:</label>\r\n                <input class=\"input\" type=\"text\" pInputText [(ngModel)]=\"displayCoreOrgId\" maxlength=\"20\">&nbsp;&nbsp;\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <label class=\"text text-r\" for=\"\">核心机构名称:</label>\r\n                <input class=\"input\" type=\"text\" pInputText [(ngModel)]=\"displayCoreOrgName\" maxlength=\"20\">&nbsp;&nbsp;\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <label class=\"text text-r\" for=\"\">核心机构类型:</label>\r\n                <input class=\"input\" type=\"text\" pInputText [(ngModel)]=\"orgType\" maxlength=\"20\">&nbsp;&nbsp;\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <label class=\"text text-r\" for=\"\">上级机构编码:</label>\r\n                <input class=\"input\" type=\"text\" pInputText [(ngModel)]=\"superiorManageOrg\" maxlength=\"20\">&nbsp;&nbsp;\r\n            </div>\r\n            <div class=\"ui-g-12 text-c\">\r\n                <button pButton label=\"查询\" (click)=\"choose(2)\"></button>\r\n                <button pButton label=\"重置\" (click)=\"reset(2)\"></button>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <p-dataTable [value]=\"tableData2\" [style]=\"{'text-align':'center'}\" selectionMode=\"single\" width='900' (onRowSelect)=\"onRowSelect($event,2)\"\r\n                    [emptyMessage]='tableMesg'>\r\n                    <p-column field=\"orgId\" header=\"机构码\"></p-column>\r\n                    <p-column field=\"orgName\" header=\"机构名称\"></p-column>\r\n                    <!-- <p-column field=\"orgName\" header=\"英文名字\"></p-column> -->\r\n                    <p-column field=\"orgType\" header=\"机构类型\"></p-column>\r\n                    <p-column field=\"superiorManageOrg\" header=\"上级机构编码\"></p-column>\r\n                    <p-column field=\"location\" header=\"机构位置描述\"></p-column>\r\n                </p-dataTable>\r\n                <p-paginator [first]=\"first\" rows={{pageSize}} totalRecords={{total}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</p-dialog>\r\n\r\n<!-- msg -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping-relation/institutions-mapping-relation.component.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping-relation/institutions-mapping-relation.component.scss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-c {\n  text-align: center; }\n\n.text-r {\n  text-align: right; }\n\n.padding-0 {\n  padding: 0; }\n\n.dialog .text {\n  float: left;\n  width: 25%;\n  height: 25px;\n  line-height: 25px; }\n\n.dialog .input {\n  float: left;\n  width: 60%; }\n\n.boxShadow {\n  height: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9wZXJmb3JtYW5jZS9pbnN0aXR1dGlvbnMtbWFwcGluZy9pbnN0aXR1dGlvbnMtbWFwcGluZy1yZWxhdGlvbi9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXHBlcmZvcm1hbmNlXFxpbnN0aXR1dGlvbnMtbWFwcGluZ1xcaW5zdGl0dXRpb25zLW1hcHBpbmctcmVsYXRpb25cXGluc3RpdHV0aW9ucy1tYXBwaW5nLXJlbGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBRVEsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFJbEI7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL3BlcmZvcm1hbmNlL2luc3RpdHV0aW9ucy1tYXBwaW5nL2luc3RpdHV0aW9ucy1tYXBwaW5nLXJlbGF0aW9uL2luc3RpdHV0aW9ucy1tYXBwaW5nLXJlbGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0LXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5wYWRkaW5nLTAge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmRpYWxvZyB7XHJcbiAgICAudGV4dCB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib3hTaGFkb3cge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping-relation/institutions-mapping-relation.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping-relation/institutions-mapping-relation.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: InstitutionsMappingRelationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutionsMappingRelationComponent", function() { return InstitutionsMappingRelationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
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





var InstitutionsMappingRelationComponent = /** @class */ (function () {
    function InstitutionsMappingRelationComponent(httpService, commfunc, fb) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.msgs = [];
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //表格中无数据时显示的内容
        this.first = 1;
        this.pageNum = 1;
        this.pageSize = 10;
        this.display = false;
    }
    InstitutionsMappingRelationComponent.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'hrOrgId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[0-9]*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)]),
            'hrOrgName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'coreOrgId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20)]),
            'coreOrgName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
        if (this.inValue) {
            this.hrOrgId = this.inValue.hrOrgId;
            this.hrOrgName = this.inValue.hrOrgName;
            this.coreOrgId = this.inValue.coreOrgId;
            this.coreOrgName = this.inValue.coreOrgName;
            this.seqId = this.inValue.seqId;
        }
    };
    InstitutionsMappingRelationComponent.prototype.choose = function (i) {
        this.contentDisplay = i;
        this.display = true;
        this.first = 1;
        this.pageNum = 1;
        this.pageSize = 10;
        this.total = 0;
        if (i == 1) {
            this.queryHrOrg('c');
        }
        else if (i == 2) {
            this.queryOrgByCombConditions('c');
        }
    };
    InstitutionsMappingRelationComponent.prototype.reset = function (i) {
        if (i == 1) {
            this.hrOrgId = '';
            this.displayHrOrgId = '';
            this.displayHrOrgName = '';
            this.queryHrOrg('c');
        }
        else if (i == 2) {
            this.displayCoreOrgId = '';
            this.displayCoreOrgName = '';
            this.orgType = '';
            this.superiorManageOrg = '';
            this.queryOrgByCombConditions('c');
        }
    };
    InstitutionsMappingRelationComponent.prototype.closeBack = function () {
        this.displayHrOrgId = '';
        this.displayHrOrgName = '';
        this.displayCoreOrgId = '';
        this.displayCoreOrgName = '';
        this.orgType = '';
        this.superiorManageOrg = '';
    };
    InstitutionsMappingRelationComponent.prototype.queryHrOrg = function (type) {
        var _this = this;
        debugger;
        var inputParams;
        if (type && type == 'c') {
            inputParams = {
                orgId: this.displayHrOrgId,
                orgName: this.displayHrOrgName,
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                isLike: '1'
            };
        }
        else {
            if (!this.hrOrgId) {
                return;
            }
            inputParams = {
                orgId: this.hrOrgId,
                isLike: '0'
            };
        }
        var params = {
            inputParams: inputParams
        };
        this.httpService.queryHrOrg(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (type == 'c') {
                    _this.tableData1 = data.outputParams.resultList;
                    _this.total = data.outputParams.totalNum;
                }
                else {
                    if (data.outputParams.resultList && data.outputParams.resultList.length != 0) {
                        if (data.outputParams.resultList.length == 1) {
                            _this.hrOrgName = data.outputParams.resultList[0].orgName;
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: '条件不唯一，请通过选择' });
                        }
                    }
                    else {
                        _this.hrOrgName = '';
                    }
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    InstitutionsMappingRelationComponent.prototype.queryOrgByCombConditions = function (type) {
        var _this = this;
        var params;
        if (type && type == 'c') {
            params = {
                orgId: this.displayCoreOrgId,
                orgName: this.displayCoreOrgName,
                orgType: this.orgType,
                superiorManageOrg: this.superiorManageOrg,
                flag: '0',
                startRow: this.pageNum,
                rowNum: this.pageSize
            };
        }
        else {
            if (!this.coreOrgId) {
                return;
            }
            params = {
                orgId: this.coreOrgId,
                flag: '1',
            };
        }
        params = params;
        this.httpService.queryOrgByCombConditions(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (type == 'c') {
                    _this.tableData2 = data.orgInfoList;
                    _this.total = data.rowCount;
                }
                else {
                    if (data.orgInfoList && data.orgInfoList.length != 0) {
                        if (data.orgInfoList.length == 1) {
                            _this.coreOrgName = data.orgInfoList[0].orgName;
                            _this.legalFlag = data.orgInfoList[0].legalFlag;
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: '条件不唯一，请通过选择' });
                        }
                    }
                    else {
                        _this.coreOrgName = '';
                    }
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    InstitutionsMappingRelationComponent.prototype.save = function () {
        var _this = this;
        var operType;
        if (!this.inValue) {
            operType = '1';
        }
        else {
            operType = '2';
        }
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
        var params = {
            inputParams: {
                operType: operType,
                hrOrgId: this.hrOrgId,
                coreOrgId: this.coreOrgId,
                bankCode: this.coreOrgId,
                seqId: this.seqId
            }
        };
        this.httpService.modifyCoreandhrOrgMapping(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.outValue.emit(false);
                if (!_this.inValue) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: '新增成功' });
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: '修改成功' });
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    InstitutionsMappingRelationComponent.prototype.quit = function () {
        this.outValue.emit(false);
    };
    InstitutionsMappingRelationComponent.prototype.onRowSelect = function (event, index) {
        console.log(event);
        this.display = false;
        if (index == 1) {
            this.hrOrgId = event.data.orgId;
            this.hrOrgName = event.data.orgName;
        }
        else {
            this.coreOrgId = event.data.orgId;
            this.coreOrgName = event.data.orgName;
            this.legalFlag = event.data.legalFlag;
        }
    };
    //分页
    InstitutionsMappingRelationComponent.prototype.paginate = function (event) {
        var rows = event.rows * 1; //每页显示的条数
        this.pageSize = rows; //当前页
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.first = event.page * this.pageSize;
        if (this.contentDisplay == '1') {
            this.queryHrOrg('c'); //调用查询的方法
        }
        else {
            this.queryOrgByCombConditions('c');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InstitutionsMappingRelationComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InstitutionsMappingRelationComponent.prototype, "outValue", void 0);
    InstitutionsMappingRelationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'institutions-mapping-relation',
            template: __webpack_require__(/*! ./institutions-mapping-relation.component.html */ "./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping-relation/institutions-mapping-relation.component.html"),
            styles: [__webpack_require__(/*! ./institutions-mapping-relation.component.scss */ "./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping-relation/institutions-mapping-relation.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CustomeHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], InstitutionsMappingRelationComponent);
    return InstitutionsMappingRelationComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <header-title [Info]=\"'人力-核心机构映射关系'\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12 padding-5\">\r\n            <div class=\"ui-g-10 ui-g-offset-1\">\r\n                <div class=\"ui-g-6\">\r\n                    <label class=\"text text-r\" for=\"\">人力机构码:</label>\r\n                    <input class=\"input\" type=\"text\" pInputText [(ngModel)]=\"hrOrgId\" maxlength=\"20\">\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <label class=\"text text-r\" for=\"\">人力机构名称:</label>\r\n                    <input class=\"input\" type=\"text\" pInputText [(ngModel)]=\"hrOrgName\" maxlength=\"20\">\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <label class=\"text text-r\" for=\"\">核心机构码:</label>\r\n                    <input class=\"input\" type=\"text\" pInputText [(ngModel)]=\"coreOrgId\" maxlength=\"20\">\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <label class=\"text text-r\" for=\"\">核心机构名称:</label>\r\n                    <input class=\"input\" type=\"text\" pInputText [(ngModel)]=\"coreOrgName\" maxlength=\"20\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 text-c\">\r\n                <button pButton label=\"查询\" (click)=\"query()\"></button>\r\n                <button pButton label=\"重置\" (click)=\"reset()\"></button>\r\n                <button pButton label=\"新增\" (click)=\"add()\"></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-dataTable [value]=\"mapList\" [emptyMessage]=\"tableMesg\" [style]=\"{'textAlign':'center'}\" scrollable=\"true\" scrollWidth=\"'100%'\">\r\n            <p-column field=\"\" header=\"序号\" [style]=\"{'width':'5%'}\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span>{{ri+1}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"coreOrgId\" header=\"核心机构码\"></p-column>\r\n            <p-column field=\"coreOrgName\" header=\"核心机构名称\"></p-column>\r\n            <p-column field=\"hrOrgId\" header=\"人力机构码\"></p-column>\r\n            <p-column field=\"hrOrgName\" header=\"人力机构名称\"></p-column>\r\n            <p-column field=\"lastUpdatedStamp\" header=\"修改时间\"></p-column>\r\n            <p-column field=\"\" header=\"操作\">\r\n                <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    <span class=\"tabelUpdateIco\" (click)=\"update(col)\">修改</span>\r\n                    <span class=\"tabelDeleteIco\" (click)=\"delete(col)\">删除</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows={{pageSize}} totalRecords={{total}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n\r\n<!-- 模态框 -->\r\n<p-dialog *ngIf=\"display\" [(visible)]=\"display\" [positionTop]=\"50\" width=\"900\" modal=\"true\">\r\n    <institutions-mapping-relation [inValue]=\"inValue\" (outValue)=\"outValue($event)\"></institutions-mapping-relation>\r\n</p-dialog>\r\n\r\n<!-- comfirm -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" style=\"color:#fff;\" label=\"是\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" style=\"color:#fff;\" label=\"否\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n\r\n<!-- msg -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-c {\n  text-align: center; }\n\n.text-r {\n  text-align: right; }\n\n.padding-5 {\n  padding-right: 5%; }\n\n.text {\n  float: left;\n  width: 25%;\n  height: 25px;\n  line-height: 25px; }\n\n.input {\n  float: left;\n  width: 60%; }\n\n:host/deep/ .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9wZXJmb3JtYW5jZS9pbnN0aXR1dGlvbnMtbWFwcGluZy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXHBlcmZvcm1hbmNlXFxpbnN0aXR1dGlvbnMtbWFwcGluZ1xcaW5zdGl0dXRpb25zLW1hcHBpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUdkO0VBQ0ksc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL3BlcmZvcm1hbmNlL2luc3RpdHV0aW9ucy1tYXBwaW5nL2luc3RpdHV0aW9ucy1tYXBwaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0LXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5wYWRkaW5nLTUge1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: InstitutionsMappingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutionsMappingComponent", function() { return InstitutionsMappingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InstitutionsMappingComponent = /** @class */ (function () {
    function InstitutionsMappingComponent(httpService, confirmationService, commfunc) {
        this.httpService = httpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"]; //表格中无数据时显示的内容
        this.msgs = [];
        this.first = 1;
        this.pageNum = 1;
        this.pageSize = 10;
        this.display = false;
    }
    InstitutionsMappingComponent.prototype.ngOnInit = function () {
        this.query(); //人力与核心机构映射信息查询
    };
    InstitutionsMappingComponent.prototype.query = function () {
        var _this = this;
        var params = {
            inputParams: {
                coreOrgId: this.coreOrgId,
                coreOrgName: this.coreOrgName,
                hrOrgId: this.hrOrgId,
                hrOrgName: this.hrOrgName,
                bankCode: this.bankCode,
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }
        };
        this.httpService.queryCoreandhrOrgMapping(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.mapList = data.outputParams.resultList;
                _this.total = data.outputParams.totalNum;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    InstitutionsMappingComponent.prototype.reset = function () {
        this.coreOrgId = '';
        this.coreOrgName = '';
        this.hrOrgId = '';
        this.hrOrgName = '';
        this.query();
    };
    InstitutionsMappingComponent.prototype.add = function () {
        this.display = true;
        this.inValue = '';
    };
    InstitutionsMappingComponent.prototype.delete = function (col) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认删除?',
            accept: function () {
                var params = {
                    inputParams: {
                        coreOrgId: col.coreOrgId,
                        hrOrgId: col.hrOrgId,
                        seqId: col.seqId
                    }
                };
                _this.httpService.deleteCoreandhrOrgMapping(params).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.query();
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: '删除成功' });
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
                });
            }
        });
    };
    InstitutionsMappingComponent.prototype.outValue = function (event) {
        this.display = event;
        this.query();
    };
    InstitutionsMappingComponent.prototype.update = function (col) {
        console.log(col);
        this.display = true;
        this.inValue = col;
    };
    //分页
    InstitutionsMappingComponent.prototype.paginate = function (event) {
        var rows = event.rows * 1; //每页显示的条数
        this.pageSize = rows; //当前页
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.first = event.page * this.pageSize;
        this.query(); //调用查询的方法
    };
    InstitutionsMappingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'institutions-mapping',
            template: __webpack_require__(/*! ./institutions-mapping.component.html */ "./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping.component.html"),
            styles: [__webpack_require__(/*! ./institutions-mapping.component.scss */ "./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__["CustomeHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], InstitutionsMappingComponent);
    return InstitutionsMappingComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-details-org/performance-details-org.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-details-org/performance-details-org.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"'业绩详情'\"></header-title>\r\n    </div>\r\n    <!-- 管理角色板块 -->\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <label class=\"text text-r\" for=\"\">机构:</label>\r\n                <input class=\"input\" type=\"text\" pInputText [(ngModel)]=\"orgName\" (click)=\"orgChoose()\">\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <label class=\"text text-r\" for=\"\">员工:</label>\r\n                <input class=\"input\" type=\"text\" pInputText [(ngModel)]=\"userName\" (click)=\"userChoose()\">\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <button pButton label=\"查询\" (click)=\"query()\"></button>\r\n                <button pButton label=\"重置\" (click)=\"reset()\"></button>\r\n            </div>\r\n        </div>\r\n        <!-- 管理角色详情 -->\r\n        <div class=\"ui-g-12\">\r\n            <span class=\"ui-g-3\">数据日期:{{newdate}}</span>\r\n            <div style=\"text-align:right;\">\r\n                <button class=\"btn-class1\" pButton label=\"设置\" *ngIf=\"permissionCheck('SID00007_P002_P004_P001')\" (click)=\"toSet()\"></button>\r\n                <button class=\"btn-class2\" pButton label=\"历史\" *ngIf=\"permissionCheck('SID00007_P002_P004_P002')\" (click)=\"toHistory()\"></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 table treeTable\" style=\"width:100%;overflow-x:scroll;\">\r\n            <p-treeTable [value]=\"adminDetail\" expandedIcon=\"ui-icon-expand-more\" collapsedIcon=\"ui-icon-chevron-right\" scrollable=\"true\"\r\n                selectionMode=\"single\" (onNodeExpand)=\"nodeExpand($event)\" (onNodeSelect)=\"nodeSelect($event)\" id=\"gundam-details\">\r\n                <p-column field=\"objName\" header=\"对象\" [style]=\"{'width':'380px'}\"></p-column>\r\n                <!-- <p-column field=\"dt\" header=\"数据日期\" [style]=\"{'width':'180px'}\"></p-column> -->\r\n                <p-column field=\"{{item.indicatorId}}\" header=\"{{item.indicatorAlias}}\" *ngFor=\"let item of titAdminList\" [style]=\"{'width':'180px'}\"></p-column>\r\n            </p-treeTable>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"text-align:right;\">\r\n        <button pButton label=\"返回工作台\" (click)=\"comeback()\"></button>\r\n    </div>\r\n</div>\r\n\r\n<!-- 折线图 -->\r\n<p-dialog *ngIf=\"display\" [(visible)]=\"display\" header=\"\" modal=\"modal\" title=\"在模态框外任意位置单击鼠标即可关闭折线图\" closable=\"true\" dismissableMask=\"true\">\r\n    <div class=\"lineChart boxShadow\">\r\n        <!-- <button pButton class=\"cancel_btn\" label=\"关闭\" (click)=\"hideChart()\"></button> -->\r\n        <div echarts [options]=\"FTPOption\"></div>\r\n    </div>\r\n</p-dialog>\r\n\r\n<!-- 人员选择模态框 -->\r\n<p-dialog *ngIf=\"userDisplay\" [(visible)]=\"userDisplay\" [positionTop]=\"50\" width=\"900\" modal=\"true\">\r\n    <p-header>\r\n        选择人员\r\n    </p-header>\r\n    <queryUser (outValue)=\"returnOwnerInfo($event)\"></queryUser>\r\n</p-dialog>\r\n\r\n<!-- 机构选择模态框 -->\r\n<p-dialog *ngIf=\"orgDisplay\" [(visible)]=\"orgDisplay\" [positionTop]=\"50\" width=\"900\" modal=\"true\">\r\n    <p-header>\r\n        选择机构\r\n    </p-header>\r\n    <org-tree-component (outValue)=\"returnOrg($event)\"></org-tree-component>\r\n</p-dialog>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-details-org/performance-details-org.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-details-org/performance-details-org.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  text-align: center; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n.btn-class1 {\n  background: #f4c201; }\n\n.btn-class2 {\n  background: #19b0c8; }\n\n.text {\n  float: left;\n  width: 15%;\n  height: 25px;\n  line-height: 25px; }\n\n.input {\n  float: left;\n  width: 85%; }\n\n.text-r {\n  text-align: right; }\n\n:host/deep/ .treeTable span {\n  display: inline-block;\n  width: 100%;\n  height: 100%; }\n\n:host/deep/ .ui-treetable thead tr th:not(:first-child) {\n  text-align: right; }\n\n:host/deep/ .ui-treetable tbody .ui-treetable-row td:first-child span {\n  text-align: left; }\n\n:host/deep/ .ui-treetable tbody .ui-treetable-row td:not(:first-child) span {\n  text-align: right; }\n\n:host/deep/ .ui-treetable tbody .ui-treetable-row td:not(:first-child) span:hover {\n  text-decoration: underline;\n  color: #19b0c8; }\n\n.lineChart {\n  width: 870px;\n  height: 400px; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 500px !important;\n  height: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZS1kZXRhaWxzLW9yZy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXHBlcmZvcm1hbmNlXFxwZXJmb3JtYW5jZS1kZXRhaWxzLW9yZ1xccGVyZm9ybWFuY2UtZGV0YWlscy1vcmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsVUFBVSxFQUFBOztBQUdkO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBRVEscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSXBCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBRVEsZ0JBQWdCLEVBQUE7O0FBSXhCO0VBRVEsaUJBQWlCLEVBQUE7O0FBRnpCO0VBS1EsMEJBQTBCO0VBQzFCLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdqQjtFQUNJLHVCQUF1QjtFQUN2Qix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vcGVyZm9ybWFuY2UvcGVyZm9ybWFuY2UtZGV0YWlscy1vcmcvcGVyZm9ybWFuY2UtZGV0YWlscy1vcmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktY2VsbC1kYXRhIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuLmJ0bi1jbGFzczEge1xyXG4gICAgYmFja2dyb3VuZDogI2Y0YzIwMTtcclxufVxyXG5cclxuLmJ0bi1jbGFzczIge1xyXG4gICAgYmFja2dyb3VuZDogIzE5YjBjODtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbn1cclxuXHJcbi50ZXh0LXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC50cmVlVGFibGUge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXRyZWV0YWJsZSB0aGVhZCB0ciB0aDpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXRyZWV0YWJsZSB0Ym9keSAudWktdHJlZXRhYmxlLXJvdyB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktdHJlZXRhYmxlIHRib2R5IC51aS10cmVldGFibGUtcm93IHRkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgc3Bhbjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5saW5lQ2hhcnQge1xyXG4gICAgd2lkdGg6IDg3MHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-details-org/performance-details-org.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-details-org/performance-details-org.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PerformanceDetailsOrgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceDetailsOrgComponent", function() { return PerformanceDetailsOrgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_performance_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bean/performance.bean */ "./src/app/pages/tzb/custom/performance/bean/performance.bean.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PerformanceDetailsOrgComponent = /** @class */ (function () {
    function PerformanceDetailsOrgComponent(router, httpService, fb, httpServiceCus, commfunc, decimalPipe) {
        this.router = router;
        this.httpService = httpService;
        this.fb = fb;
        this.httpServiceCus = httpServiceCus;
        this.commfunc = commfunc;
        this.decimalPipe = decimalPipe;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["tableMessage"]; //表格中无数据时显示的内容
        this.date = new Date();
        this.msgs = [];
        this.titList = [];
        this.dataList = [];
        this.LastMonthList = [];
        this.LastYearList = [];
        this.LastPeriodList = [];
        this.rank = [];
        this.admin = false;
        this.person = false;
        this.performanceBean = new _bean_performance_bean__WEBPACK_IMPORTED_MODULE_3__["PerformanceBean"]();
        this.orgId = '';
        this.userId = '';
        this.userIdT = '';
        this.userName = '';
        this.orgName = '';
        this.userDisplay = false;
        this.orgDisplay = false;
        this.display = false;
        this.indicatorsType = [
            { value: '01', label: '元' },
            { value: '02', label: '万元' },
            { value: '03', label: '张' },
            { value: '04', label: '个' },
            { value: '05', label: '位' },
        ]; //指标类型
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.user2 = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (this.user.extParam) {
            this.extParam = this.user.extParam;
        }
        this.userIdT = this.user.userId;
    }
    PerformanceDetailsOrgComponent.prototype.ngOnInit = function () {
        if (this.user.extParam.managePermission == 'Y') {
            this.query('init');
        }
        // this.newdate = this.transDate(this.date);
    };
    PerformanceDetailsOrgComponent.prototype.ngAfterViewInit = function () {
        var gundam_details = document.getElementById('gundam-details').getElementsByTagName('th');
        gundam_details[0].style.textAlign = 'center';
    };
    PerformanceDetailsOrgComponent.prototype.userChoose = function () {
        this.userDisplay = true;
    };
    PerformanceDetailsOrgComponent.prototype.returnOwnerInfo = function (event) {
        console.log(event);
        this.userDisplay = false;
        this.userName = event[0].tellerName;
        this.userId = event[0].tellerId;
    };
    PerformanceDetailsOrgComponent.prototype.orgChoose = function () {
        this.orgDisplay = true;
    };
    PerformanceDetailsOrgComponent.prototype.returnOrg = function (event) {
        console.log(event);
        this.orgDisplay = false;
        this.orgName = event.orgName;
        this.orgId = event.orgId;
    };
    PerformanceDetailsOrgComponent.prototype.reset = function () {
        this.userName = '';
        this.userId = '';
        this.orgName = '';
        this.orgId = '';
        this.query();
    };
    PerformanceDetailsOrgComponent.prototype.query = function (data1) {
        var _this = this;
        var params;
        if (data1 && data1 == 'init') {
            params = {
                inputParams: {
                    drillDownType: '1'
                }
            };
        }
        else {
            params = {
                inputParams: {
                    drillDownType: '2',
                    userId: this.userId,
                    orgId: this.orgId,
                }
            };
        }
        this.httpServiceCus.queryMorePerformance(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.newdate = data.outputParams.dataDt;
                _this.titAdminList = data.outputParams.titleList;
                var arrTemp1 = [];
                if (data1 && data1 == 'init') {
                    arrTemp1.push(data.outputParams.parentDataMap);
                    _this.AdminDataList = _this.toChangeTree(arrTemp1);
                    _this.AdminDataList[0]['children'] = _this.toChangeTree(data.outputParams.currDataList);
                    _this.AdminDataList[0]['expanded'] = true;
                }
                else {
                    if (data.outputParams.parentDataMap && JSON.stringify(data.outputParams.parentDataMap) != '{}') {
                        arrTemp1.push(data.outputParams.parentDataMap);
                        _this.AdminDataList = _this.toChangeTree(arrTemp1);
                    }
                    else if (data.outputParams.currDataList && data.outputParams.currDataList.length != 0) {
                        _this.AdminDataList = _this.toChangeTree(data.outputParams.currDataList);
                    }
                    else {
                        _this.AdminDataList = [];
                        if (_this.orgId) {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: '无法搜索到机构业绩数据' });
                        }
                        else if (_this.userId) {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: '无法搜索到员工业绩数据' });
                        }
                    }
                }
                _this.adminDetail = _this.AdminDataList;
                console.log(_this.adminDetail);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //日期格式转换处理
    PerformanceDetailsOrgComponent.prototype.transDate = function (value) {
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
        var newtime = year + "-" + month + "-" + data;
        return newtime;
    };
    //
    PerformanceDetailsOrgComponent.prototype.toChangeTree = function (data) {
        var tempArr = [];
        if (data) {
            data.forEach(function (item) {
                var tempObj = {};
                tempObj['data'] = item;
                tempObj['children'] = [{}];
                if (item.objType == 1) {
                    tempObj['expanded'] = true;
                    tempObj['children'] = [];
                }
                tempArr.push(tempObj);
            });
        }
        return tempArr;
    };
    //获取日期组件的数据
    PerformanceDetailsOrgComponent.prototype.showdata = function (event) {
        this.performanceBean.startDt = this.transDate(event[0]); //开始日期
        this.performanceBean.endDt = this.transDate(event[1]); //结束日期
    };
    //自定义设置
    PerformanceDetailsOrgComponent.prototype.toSet = function () {
        this.router.navigate(["pages/tzb/custom/performance/performance-set"]);
    };
    //历史业绩
    PerformanceDetailsOrgComponent.prototype.toHistory = function () {
        this.router.navigate(["pages/tzb/custom/performance/performance-history"]);
    };
    PerformanceDetailsOrgComponent.prototype.comeback = function () {
        this.router.navigate(["pages/tzb/uisftech-view/workdesk"]);
    };
    PerformanceDetailsOrgComponent.prototype.nodeExpand = function (event) {
        var _this = this;
        console.log(event);
        if (!event.node.data.obj) {
            event.node.children = [];
            return;
        }
        if (event.node['expanded']) {
            event.node['expanded'] = false;
            return;
        }
        var params = {
            inputParams: {
                orgId: event.node.data.obj,
                drillDownType: '3',
            }
        };
        this.httpServiceCus.queryMorePerformance(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.outputParams.currDataList.length == 0) {
                    event.node.children = [];
                }
                else {
                    event.node.children = _this.toChangeTree(data.outputParams.currDataList);
                    event.node['expanded'] = true;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    PerformanceDetailsOrgComponent.prototype.nodeSelect = function (event) {
        console.log(event);
        console.log(event.originalEvent.srcElement);
        var source = event.originalEvent.srcElement;
        var p = source.parentNode;
        var g = Array.from(p.parentNode.children);
        g = g.filter(function (x) { return x['localName'] === 'td'; });
        var index = g.indexOf(p);
        if (index != 0) {
            this.showLine(this.titAdminList[index - 1], event.node.data);
        }
        else {
            this.nodeExpand(event);
        }
    };
    // 展示曲线图
    PerformanceDetailsOrgComponent.prototype.showLine = function (item, data) {
        var _this = this;
        console.log(item);
        var thiss = this;
        var title = '';
        var key = '';
        var xData = [];
        var vData = [];
        var unit = '';
        var decimalPlaces = '';
        var inputParams;
        if (!item) {
            return;
        }
        if (data.objType && data.obj) {
            inputParams = {
                indicatorIdList: [item.indicatorId],
                obj: data.obj,
                objType: data.objType
            };
        }
        var param = {
            inputParams: inputParams
        };
        this.httpService.queryLatelyPerformance(param).subscribe(function (data) {
            _this.lineTU = data.outputParams.currDataList;
            if (_this.lineTU && _this.lineTU.length != 0) {
                unit = data.outputParams.titleList[0].unit;
                decimalPlaces = data.outputParams.titleList[0].decimalPlaces;
                title = item.indicatorAlias;
                key = item.indicatorId;
                _this.lineTU.forEach(function (element, i) {
                    xData.push(element.dataDt);
                    vData.push(element[key]);
                });
                _this.indicatorsType.forEach(function (element2) {
                    if (unit == element2.value) {
                        unit = element2.label;
                    }
                });
            }
            console.log(vData);
            var sortList = vData.map(Number).sort(function (x, y) {
                return x - y;
            });
            var min = sortList[0];
            var max = sortList[sortList.length - 1];
            //配置
            _this.FTPOption = {
                title: {
                    text: title,
                    // subtext:"副标题",
                    x: "center"
                },
                tooltip: {
                    trigger: 'axis',
                },
                legend: {
                    type: 'scroll',
                    orient: "vertical",
                    right: 100,
                    data: [title]
                },
                toolbox: {
                    show: false,
                    feature: {
                        dataZoom: {
                            yAxisIndex: "none"
                        },
                        dataView: { readOnly: false },
                        magicType: { type: ["line", "bar"] },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    name: "月份（月）",
                    type: "category",
                    boundaryGap: 'dataMin',
                    data: xData,
                    axisLabel: {
                        interval: 0,
                        rotate: 15
                    }
                },
                yAxis: {
                    name: "单位:" + unit,
                    type: "value",
                    axisLabel: {
                        formatter: "{value}"
                    }
                },
                series: [
                    {
                        name: title,
                        type: "line",
                        data: vData,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: '#0000FF'
                                },
                                color: function (param) {
                                    if (param.value == max) {
                                        return '#FF0000';
                                    }
                                    else if (param.value == min) {
                                        return '#00FF00';
                                    }
                                    else {
                                        return '#0000FF';
                                    }
                                }
                            }
                        },
                        label: {
                            normal: {
                                show: true,
                                formatter: function (a) {
                                    // console.log(a);
                                    if (parseInt(decimalPlaces) == 2) {
                                        var newstr = thiss.decimalPipe.transform(parseFloat(a.value), '1.2-2');
                                        return newstr;
                                    }
                                }
                            }
                        },
                    },
                ]
            };
        });
        this.display = true;
    };
    // 隐藏折线图
    PerformanceDetailsOrgComponent.prototype.hideChart = function () {
        this.display = false;
    };
    //按钮权限
    PerformanceDetailsOrgComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    PerformanceDetailsOrgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'performance-details-org',
            template: __webpack_require__(/*! ./performance-details-org.component.html */ "./src/app/pages/tzb/custom/performance/performance-details-org/performance-details-org.component.html"),
            styles: [__webpack_require__(/*! ./performance-details-org.component.scss */ "./src/app/pages/tzb/custom/performance/performance-details-org/performance-details-org.component.scss")],
            providers: [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__["CustomeHttpService"], _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__["CustomeHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]])
    ], PerformanceDetailsOrgComponent);
    return PerformanceDetailsOrgComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-details/performance-details.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-details/performance-details.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <header-title [Info]=\"'业绩详情'\"></header-title>\r\n    <!-- 个人板块 -->\r\n    <div class=\"ui-g-12 yj\">\r\n        <div class=\"ui-g-12 person\">\r\n            <span class=\"ui-g-2\">用户:{{userName}}</span>\r\n            <span class=\"ui-g-3\">数据时间:{{datenew}}</span>\r\n            <div style=\"float:right;\">\r\n                <button class=\"btn-class1\" pButton label=\"设置\" *ngIf=\"permissionCheck('SID00007_P002_P004_P001')\" (click)=\"toSet()\"></button>\r\n                <button class=\"btn-class2\" pButton label=\"历史\" *ngIf=\"permissionCheck('SID00007_P002_P004_P002')\" (click)=\"toHistory()\"></button>\r\n                <!-- <span class=\"tabelBySetIco\" (click)=\"toSet()\"  style=\"margin-right:5px;cursor: pointer;\">设置</span>\r\n                <span class=\"tabelHistoryIco\" (click)=\"toHistory()\"  style=\"margin-right:5px;cursor: pointer;\">历史</span> -->\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 table treeTable\" style=\"width:100%;overflow-x:scroll;\">\r\n            <p-treeTable [value]=\"adminDetail\" expandedIcon=\"ui-icon-expand-more\" collapsedIcon=\"ui-icon-chevron-right\" scrollable=\"true\"\r\n                selectionMode=\"single\" id=\"gundam-details\">\r\n                <p-column field=\"dataDt\" header=\"对象\" [style]=\"{'width':'380px'}\"></p-column>\r\n                <!-- <p-column field=\"dt\" header=\"数据日期\" [style]=\"{'width':'180px'}\"></p-column> -->\r\n                <p-column field=\"{{item.indicatorId}}\" header=\"{{item.indicatorAlias}}\" *ngFor=\"let item of titAdminList\" [style]=\"{'width':'180px'}\" class=\"col\"></p-column>\r\n            </p-treeTable>\r\n        </div>\r\n        <!-- 个人详情指标 -->\r\n        <!-- <div class=\"bigTable padding-zero-five\">\r\n            <div class=\"tabletitle\">\r\n                <div class=\"row tabletitle-height1\">\r\n                    <span class=\"tit\">指&nbsp;&nbsp;&nbsp;标</span>\r\n                </div>\r\n                <div class=\"row tabletitle-height2\">\r\n                    <span class=\"tit\">数&nbsp;&nbsp;&nbsp;值</span>\r\n                </div>\r\n                <div class=\"row tabletitle-height2\">\r\n                    <span class=\"tit\">较上月增量</span>\r\n                </div>\r\n                <div class=\"row tabletitle-height2\">\r\n                    <span class=\"tit\">较年初增量</span>\r\n                </div>\r\n                <div class=\"row tabletitle-height2\">\r\n                    <span class=\"tit\">较去年同期</span>\r\n                </div> -->\r\n        <!-- 不要删 -->\r\n        <!-- <div class=\"row RankPage tabletitle-height2\">\r\n\t\t\t\t\t\t\t<span class=\"tit\">排&nbsp;&nbsp;&nbsp;名</span>\r\n\t\t\t\t\t\t\t<p class=\"rankShow\">{{rankName}}</p>\r\n\t\t\t\t\t\t</div> -->\r\n        <!-- 不要删 -->\r\n        <!-- </div>\r\n            <div class=\"datable\">\r\n                <div class=\"data-table-conter\">\r\n                    <div class=\"row tabletitle-height1\">\r\n                        <span class=\"tit\" *ngFor=\"let item of titList\">{{item.indicatorAlias}}({{item.unit}})</span>\r\n                    </div>\r\n                    <div class=\"row tabletitle-height2\" [ngStyle]=\"{'width':titList.length*151+'px'}\">\r\n                        <span *ngFor=\"let item of dataList\" class=\"datable-tr-one\">{{item.value}}</span>\r\n                    </div>\r\n                    <div class=\"row tabletitle-height2\" [ngStyle]=\"{'width':titList.length*151+'px'}\">\r\n                        <span *ngFor=\"let item of LastMonthList\" class=\"datable-tr-two\">{{item.value}}</span>\r\n                    </div>\r\n                    <div class=\"row tabletitle-height2\" [ngStyle]=\"{'width':titList.length*151+'px'}\">\r\n                        <span *ngFor=\"let item of LastYearList\" class=\"datable-tr-one\">{{item.value}}</span>\r\n                    </div>\r\n                    <div class=\"row tabletitle-height2\" [ngStyle]=\"{'width':titList.length*151+'px'}\">\r\n                        <span *ngFor=\"let item of LastPeriodList\" class=\"datable-tr-two\">{{item.value}}</span>\r\n                    </div>\r\n                </div> -->\r\n\r\n        <!-- 不要删 -->\r\n        <!-- <div class=\"row tabletitle-height2\">\r\n\t\t\t\t\t\t\t<span *ngFor=\"let item of rank\" class=\"datable-tr-one\">{{item.value}}</span>\r\n\t\t\t\t\t\t</div> -->\r\n        <!-- 不要删 -->\r\n        <!-- </div>\r\n\r\n        </div> -->\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"text-align:right;\">\r\n        <button pButton label=\"返回工作台\" (click)=\"comeback()\"></button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-details/performance-details.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-details/performance-details.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  text-align: center;\n  display: flex; }\n\n.btn-class1 {\n  background: #f4c201; }\n\n.btn-class2 {\n  background: #19b0c8; }\n\n.yj {\n  background-color: #fafafa !important;\n  margin-bottom: 8px;\n  margin-top: 8px; }\n\n.yj .yjtit {\n    display: flex;\n    flex-wrap: nowrap; }\n\n.yj .headerTitBtn {\n    display: flex;\n    flex-wrap: wrap;\n    height: 42px; }\n\n.yj .bigTable {\n    display: flex;\n    flex-direction: row;\n    width: 99%; }\n\n.yj .bigTable .tabletitle {\n      float: left;\n      width: 108px;\n      display: flex;\n      flex-direction: column; }\n\n.yj .bigTable .tabletitle .row {\n        background-color: #19b0c8;\n        border-bottom: 1px solid #fff;\n        border-right: 1px solid #fff;\n        width: 100%;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center; }\n\n.yj .bigTable .tabletitle .row span {\n          display: inline-block;\n          width: 100%;\n          border-left: none; }\n\n.yj .bigTable .tabletitle .row .tit {\n          color: white;\n          text-align: center;\n          font-size: 14px; }\n\n.yj .bigTable .tabletitle .RankPage {\n        position: relative; }\n\n.yj .bigTable .tabletitle .RankPage:hover {\n          cursor: pointer; }\n\n.yj .bigTable .tabletitle .RankPage:hover span :hover {\n            cursor: pointer; }\n\n.yj .bigTable .tabletitle .RankPage:hover span :hover .rankShow {\n              display: block; }\n\n.yj .bigTable .tabletitle .RankPage:hover .rankShow {\n            display: block; }\n\n.yj .bigTable .tabletitle .RankPage .rankShow {\n          left: 0;\n          top: -13px;\n          position: absolute;\n          display: none;\n          width: 40px;\n          height: 40px;\n          line-height: 40px;\n          background-color: #ccc;\n          text-align: center; }\n\n.yj .bigTable .datable {\n      float: left;\n      width: 99%;\n      display: flex;\n      flex-direction: column;\n      overflow-x: scroll;\n      border-left: 1px solid #fff; }\n\n.yj .bigTable .datable .row {\n        text-align: left;\n        white-space: nowrap;\n        min-width: 100%; }\n\n.yj .bigTable .datable .row:nth-child(1) {\n          background: #d2f1ef; }\n\n.yj .bigTable .datable .row:nth-child(2) {\n          background: #fafafa; }\n\n.yj .bigTable .datable .row:nth-child(3) {\n          background: #efefef; }\n\n.yj .bigTable .datable .row:nth-child(4) {\n          background: #fafafa; }\n\n.yj .bigTable .datable .row:nth-child(5) {\n          background: #efefef; }\n\n.yj .bigTable .datable .row span {\n          line-height: 35px;\n          width: 140px;\n          padding-left: 5px;\n          padding-right: 5px;\n          display: inline-block;\n          text-align: center;\n          border-right: 1px solid #fff; }\n\n@media screen and (max-width: 1280px) {\n          .yj .bigTable .datable .row span {\n            border-right: 2px solid #fff; } }\n\n.yj .bigTable .datable .row .tit {\n          font-size: 14px;\n          background: #d2f1ef;\n          color: #005574; }\n\n.yj .bigTable .datable .row .shuzhi:hover {\n          color: #19b0c8;\n          text-decoration: underline;\n          cursor: pointer; }\n\n.yj .bigTable .tabletitle-height1 {\n      height: 35px; }\n\n.yj .bigTable .tabletitle-height2 {\n      height: 36px; }\n\n.yj .bigTable .datable-tr-one {\n      line-height: 35px !important;\n      background-color: #fafafa; }\n\n.yj .bigTable .datable-tr-two {\n      line-height: 40px !important;\n      background: #ebebeb; }\n\n@media screen and (max-width: 1280px) {\n      .yj .bigTable .datable-tr-two {\n        background: #e1e1e1; } }\n\n:host/deep/ .ui-treetable tbody .ui-treetable-row:not(:first-child) .ui-icon-chevron-right:before {\n  content: unset; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZS1kZXRhaWxzL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxccGVyZm9ybWFuY2VcXHBlcmZvcm1hbmNlLWRldGFpbHNcXHBlcmZvcm1hbmNlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBOztBQXFHakI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFIbkI7SUFLUSxhQUFhO0lBQ2IsaUJBQWlCLEVBQUE7O0FBTnpCO0lBU1EsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZLEVBQUE7O0FBWHBCO0lBZVEsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVLEVBQUE7O0FBakJsQjtNQW1CWSxXQUFXO01BQ1gsWUFBWTtNQUNaLGFBQWE7TUFDYixzQkFBc0IsRUFBQTs7QUF0QmxDO1FBd0JnQix5QkFBeUI7UUFDekIsNkJBQTZCO1FBQzdCLDRCQUE0QjtRQUM1QixXQUFXO1FBQ1gsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsbUJBQW1CLEVBQUE7O0FBL0JuQztVQWlDb0IscUJBQXFCO1VBQ3JCLFdBQVc7VUFDWCxpQkFBaUIsRUFBQTs7QUFuQ3JDO1VBMENvQixZQUFZO1VBQ1osa0JBQWtCO1VBQ2xCLGVBQWUsRUFBQTs7QUE1Q25DO1FBZ0RnQixrQkFBa0IsRUFBQTs7QUFoRGxDO1VBa0RvQixlQUFlLEVBQUE7O0FBbERuQztZQW9Ed0IsZUFBZSxFQUFBOztBQXBEdkM7Y0FzRDRCLGNBQWMsRUFBQTs7QUF0RDFDO1lBMER3QixjQUFjLEVBQUE7O0FBMUR0QztVQThEb0IsT0FBTztVQUNQLFVBQVU7VUFDVixrQkFBa0I7VUFDbEIsYUFBYTtVQUNiLFdBQVc7VUFDWCxZQUFZO1VBQ1osaUJBQWlCO1VBQ2pCLHNCQUFzQjtVQUN0QixrQkFBa0IsRUFBQTs7QUF0RXRDO01BMkVZLFdBQVc7TUFDWCxVQUFVO01BQ1YsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsMkJBQTJCLEVBQUE7O0FBaEZ2QztRQWtGZ0IsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixlQUFlLEVBQUE7O0FBcEYvQjtVQXNGb0IsbUJBQW1CLEVBQUE7O0FBdEZ2QztVQXlGb0IsbUJBQW1CLEVBQUE7O0FBekZ2QztVQTRGb0IsbUJBQW1CLEVBQUE7O0FBNUZ2QztVQStGb0IsbUJBQW1CLEVBQUE7O0FBL0Z2QztVQWtHb0IsbUJBQW1CLEVBQUE7O0FBbEd2QztVQXNHb0IsaUJBQWlCO1VBQ2pCLFlBQVk7VUFDWixpQkFBaUI7VUFDakIsa0JBQWtCO1VBQ2xCLHFCQUFxQjtVQUNyQixrQkFBa0I7VUFDbEIsNEJBQTRCLEVBQUE7O0FBRWhDO1VBOUdoQjtZQWdId0IsNEJBQTRCLEVBQUEsRUFDL0I7O0FBakhyQjtVQXFIb0IsZUFBZTtVQUNmLG1CQUFtQjtVQUNuQixjQUFjLEVBQUE7O0FBdkhsQztVQTBIb0IsY0FBYztVQUNkLDBCQUEwQjtVQUMxQixlQUFlLEVBQUE7O0FBNUhuQztNQWlJWSxZQUFZLEVBQUE7O0FBakl4QjtNQW9JWSxZQUFZLEVBQUE7O0FBcEl4QjtNQXVJWSw0QkFBNEI7TUFDNUIseUJBQXlCLEVBQUE7O0FBeElyQztNQTJJWSw0QkFBNEI7TUFDNUIsbUJBQW1CLEVBQUE7O0FBRXZCO01BOUlSO1FBZ0pnQixtQkFBbUIsRUFBQSxFQUN0Qjs7QUFLYjtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vcGVyZm9ybWFuY2UvcGVyZm9ybWFuY2UtZGV0YWlscy9wZXJmb3JtYW5jZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi8vIC5iaWdUYWJsZSB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGhlaWdodDogMzAwcHg7XHJcbi8vICAgICAudGFibGV0aXRsZSB7XHJcbi8vICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbi8vICAgICAgICAgd2lkdGg6IDExJTtcclxuLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbi8vICAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuLy8gICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4vLyAgICAgICAgIC5yb3cge1xyXG4vLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG4vLyAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuLy8gICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogNDZweDtcclxuLy8gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuLy8gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIHNwYW4ge1xyXG4vLyAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuLy8gICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLnRpdCB7XHJcbi8vICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xyXG4vLyAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgLmRhdGFibGUge1xyXG4vLyAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgICAgICAgIHdpZHRoOiA5MCU7XHJcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuLy8gICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmY7XHJcbi8vICAgICAgICAgLnJvdyB7XHJcbi8vICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogNDZweDtcclxuLy8gICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuLy8gICAgICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4vLyAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2QyZjFlZjtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbi8vICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgJjpudGgtY2hpbGQoNCkge1xyXG4vLyAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAmOm50aC1jaGlsZCg1KSB7XHJcbi8vICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIHNwYW4ge1xyXG4vLyAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbi8vICAgICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbi8vICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuLy8gICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLnRpdCB7XHJcbi8vICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbi8vICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWRmOWZhO1xyXG4vLyAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDU1NzQ7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgLnRhYmxldGl0bGUtaGVpZ2h0MSB7XHJcbi8vICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLnRhYmxldGl0bGUtaGVpZ2h0MiB7XHJcbi8vICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmRhdGFibGUtdHItb25lIHtcclxuLy8gICAgICAgICBsaW5lLWhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbi8vICAgICB9XHJcbi8vICAgICAuZGF0YWJsZS10ci10d28ge1xyXG4vLyAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogI2ViZWJlYjtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLmJ0bi1jbGFzczEge1xyXG4gICAgYmFja2dyb3VuZDogI2Y0YzIwMTtcclxufVxyXG5cclxuLmJ0bi1jbGFzczIge1xyXG4gICAgYmFja2dyb3VuZDogIzE5YjBjODtcclxufVxyXG5cclxuLnlqIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmEgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIC55anRpdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIH1cclxuICAgIC5oZWFkZXJUaXRCdG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGhlaWdodDogNDJweDtcclxuICAgIH1cclxuICAgIC5iaWdUYWJsZSB7XHJcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMTJweDsgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB3aWR0aDogOTklOyAvLyBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIC50YWJsZXRpdGxlIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDhweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IC8vIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lOyAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogIzAwOTREMjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuUmFua1BhZ2Uge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW4gOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmFua1Nob3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJhbmtTaG93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJhbmtTaG93IHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kYXRhYmxlIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5OSU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7IC8vIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2QyZjFlZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDUpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiA2OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkMmYxZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDU1NzQ7IC8vIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2h1emhpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzE5YjBjODtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRhYmxldGl0bGUtaGVpZ2h0MSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRhYmxldGl0bGUtaGVpZ2h0MiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGFibGUtdHItb25lIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGFibGUtdHItdHdvIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ViZWJlYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgICAgICAgLmRhdGFibGUtdHItdHdvIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMWUxZTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS10cmVldGFibGUgdGJvZHkgLnVpLXRyZWV0YWJsZS1yb3c6bm90KDpmaXJzdC1jaGlsZCkgLnVpLWljb24tY2hldnJvbi1yaWdodDpiZWZvcmUge1xyXG4gICAgY29udGVudDogdW5zZXQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-details/performance-details.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-details/performance-details.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PerformanceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceDetailsComponent", function() { return PerformanceDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_performance_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bean/performance.bean */ "./src/app/pages/tzb/custom/performance/bean/performance.bean.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PerformanceDetailsComponent = /** @class */ (function () {
    function PerformanceDetailsComponent(router, routerInfo, httpService, fb, httpServiceCus, commfunc, decimalPipe) {
        this.router = router;
        this.routerInfo = routerInfo;
        this.httpService = httpService;
        this.fb = fb;
        this.httpServiceCus = httpServiceCus;
        this.commfunc = commfunc;
        this.decimalPipe = decimalPipe;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["tableMessage"]; //表格中无数据时显示的内容
        this.date = new Date();
        this.msgs = [];
        this.titList = [];
        this.dataList = [];
        this.LastMonthList = [];
        this.LastYearList = [];
        this.LastPeriodList = [];
        this.rank = [];
        this.admin = false;
        this.person = false;
        this.performanceBean = new _bean_performance_bean__WEBPACK_IMPORTED_MODULE_3__["PerformanceBean"]();
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
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
        // //个人更多数据
        // //业绩首页
        // this.httpService.queryPerformanceFirstPage({ inputParams: {} }).subscribe(data => {
        //     if (data.returnCode.code == 'success') {
        //         let temp1 = [], temp2 = [], temp3 = [], temp4 = [];
        //         let tempObj;
        //         data.outputParams.titleList.forEach(item => {
        //             for (let key in data.outputParams.currDataMap) {
        //                 if (item.indicatorId == key) {
        //                     tempObj = { value: data.outputParams.currDataMap[key], indicatorId: item.indicatorId, indicatorAlias: item.indicatorAlias };
        //                     temp1.push(tempObj);
        //                     break;
        //                 }
        //             }
        //             for (let key in data.outputParams.lastMonthDataMap) {
        //                 if (item.indicatorId == key) {
        //                     tempObj = { value: data.outputParams.lastMonthDataMap[key], indicatorId: item.indicatorId, indicatorAlias: item.indicatorAlias };
        //                     temp2.push(tempObj);
        //                     break;
        //                 }
        //             }
        //             for (let key in data.outputParams.toyearBeginDataMap) {
        //                 if (item.indicatorId == key) {
        //                     tempObj = { value: data.outputParams.toyearBeginDataMap[key], indicatorId: item.indicatorId, indicatorAlias: item.indicatorAlias };
        //                     temp3.push(tempObj);
        //                     break;
        //                 }
        //             }
        //             for (let key in data.outputParams.lastYearNowDataMap) {
        //                 if (item.indicatorId == key) {
        //                     tempObj = { value: data.outputParams.lastYearNowDataMap[key], indicatorId: item.indicatorId, indicatorAlias: item.indicatorAlias };
        //                     temp4.push(tempObj);
        //                     break;
        //                 }
        //             }
        //             this.indicatorsType.forEach(element => {
        //                 if (item.unit == element.value) {
        //                     item.unit = element.label;
        //                 } ''
        //             });
        //         });
        //         this.titList = data.outputParams.titleList;//表头指标
        //         this.dataList = temp1;//数值
        //         this.LastMonthList = temp2;//较上月增量
        //         this.LastYearList = temp3;//较年初增量
        //         this.LastPeriodList = temp4;//较去年同期
        //         this.datenew = data.outputParams.dataDt;//数据日期
        //         console.log(this.dataList);
        //     } else {
        //         this.msgs = [];
        //         this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
        //     }
        // }, err => {
        //     this.msgs = [];
        //     this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        // });
    }
    PerformanceDetailsComponent.prototype.ngOnInit = function () {
        this.newdate = this.transDate(this.date);
        //个人指标详情
        this.perDetail = [];
        if (this.routerInfo.snapshot.params['titList']) {
            this.titAdminList = JSON.parse(this.routerInfo.snapshot.params['titList']);
        }
        debugger;
        if (this.user.extParam.managePermission == 'N') {
            this.queryLatelyPerformance(this.titAdminList);
        }
    };
    //日期格式转换处理
    PerformanceDetailsComponent.prototype.transDate = function (value) {
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
        var newtime = year + "-" + month + "-" + data;
        return newtime;
    };
    //获取日期组件的数据
    PerformanceDetailsComponent.prototype.showdata = function (event) {
        this.performanceBean.startDt = this.transDate(event[0]); //开始日期
        this.performanceBean.endDt = this.transDate(event[1]); //结束日期
    };
    //自定义设置
    PerformanceDetailsComponent.prototype.toSet = function () {
        this.router.navigate(["pages/tzb/custom/performance/performance-set"]);
    };
    //历史业绩
    PerformanceDetailsComponent.prototype.toHistory = function () {
        this.router.navigate(["pages/tzb/custom/performance/performance-history"]);
    };
    PerformanceDetailsComponent.prototype.comeback = function () {
        this.router.navigate(["pages/tzb/uisftech-view/workdesk"]);
    };
    //按钮权限
    PerformanceDetailsComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    PerformanceDetailsComponent.prototype.queryLatelyPerformance = function (list) {
        var _this = this;
        var arrTemp = [];
        if (list && list.length != 0) {
            list.forEach(function (element) {
                arrTemp.push(element.indicatorId);
            });
        }
        var params = {
            inputParams: {
                objType: 1,
                obj: this.userId,
                indicatorIdList: arrTemp
            }
        };
        this.httpServiceCus.queryLatelyPerformance(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.datenew = data.outputParams.dataDt;
                var arrTemp1 = [];
                arrTemp1.push({ dataDt: data.outputParams.objName });
                _this.AdminDataList = _this.toChangeTree(arrTemp1);
                _this.AdminDataList[0]['children'] = _this.toChangeTree(data.outputParams.currDataList);
                _this.AdminDataList[0]['expanded'] = true;
                _this.adminDetail = _this.AdminDataList;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //
    PerformanceDetailsComponent.prototype.toChangeTree = function (data) {
        var tempArr = [];
        if (data) {
            data.forEach(function (item) {
                var tempObj = {};
                tempObj['data'] = item;
                tempObj['children'] = [{}];
                tempArr.push(tempObj);
            });
        }
        return tempArr;
    };
    PerformanceDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-performance-details',
            template: __webpack_require__(/*! ./performance-details.component.html */ "./src/app/pages/tzb/custom/performance/performance-details/performance-details.component.html"),
            styles: [__webpack_require__(/*! ./performance-details.component.scss */ "./src/app/pages/tzb/custom/performance/performance-details/performance-details.component.scss")],
            providers: [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__["CustomeHttpService"], _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_4__["CustomeHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]])
    ], PerformanceDetailsComponent);
    return PerformanceDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-history/bean/achievementIndcatorQryEmpHistory.bean.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-history/bean/achievementIndcatorQryEmpHistory.bean.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AchievementIndcatorQryEmpHistoryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementIndcatorQryEmpHistoryBean", function() { return AchievementIndcatorQryEmpHistoryBean; });
var AchievementIndcatorQryEmpHistoryBean = /** @class */ (function () {
    function AchievementIndcatorQryEmpHistoryBean() {
        this.pageNum = 1; //当前页数
        this.pageSize = 10; //每页条数
    }
    return AchievementIndcatorQryEmpHistoryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-history/bean/achievementIndcatorQryOrgHistory.bean.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-history/bean/achievementIndcatorQryOrgHistory.bean.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AchievementIndcatorQryOrgHistoryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementIndcatorQryOrgHistoryBean", function() { return AchievementIndcatorQryOrgHistoryBean; });
var AchievementIndcatorQryOrgHistoryBean = /** @class */ (function () {
    function AchievementIndcatorQryOrgHistoryBean() {
        this.pageNum = 1; //当前页数
        this.pageSize = 10; //每页条数
    }
    return AchievementIndcatorQryOrgHistoryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-history/history-admin/history-admin.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-history/history-admin/history-admin.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 管理角色板块 -->\r\n<div class=\"ui-g-12\" *ngIf=\"adminPage\">\r\n    <!-- 管理角色查询条件-->\r\n    <div class=\"ui-g-11 ui-g-offset-1\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <label>机构树:</label>\r\n        </div>\r\n        <div class=\"ui-g-8\">\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"treeOrgName\">\r\n            <button pButton label=\"机构树\" (click)=\"orgTreeShow()\"></button>\r\n        </div>\r\n        <div class=\"ui-g-4 tit\">\r\n            <label>数据日期:</label>\r\n        </div>\r\n        <div class=\"ui-g-8 date\">\r\n            <div class=\"form-group condition-wrapper\">\r\n                <monthly-calendar class=\"form-control\" [placeholder]=\"'年-月'\" (result)=\"startDt = $event\" [range]=\"{before:50,after:50}\">\r\n                </monthly-calendar>\r\n            </div>\r\n            <span>至</span>\r\n            <div class=\"form-group condition-wrapper\">\r\n                <monthly-calendar class=\"form-control\" [placeholder]=\"'年-月'\" (result)=\"endDt = $event\" [range]=\"{before:50,after:50}\">\r\n                </monthly-calendar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton label=\"查询\" (click)=\"querySecond()\"></button>\r\n        <button pButton label=\"导出\" (click)=\"outputAdmin()\"></button>\r\n    </div>\r\n    <div style=\"float:right;padding-right:1em;\">\r\n        <span class=\"icoColor\" (click)=\"chooseBtnAdmin()\">选择字段</span>\r\n    </div>\r\n    <!-- 管理角色历史业绩表格 -->\r\n    <div class=\"ui-g-12 datable\">\r\n        <p-dataTable [value]=\"adminData\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"dt\" header=\"数据日期\"></p-column>\r\n            <p-column field=\"jgm\" header=\"机构号\"></p-column>\r\n            <p-column field=\"jgmc\" header=\"机构名称\"></p-column>\r\n            <p-column field={{list.value}} header={{list.dimenName}} *ngFor=\"let list of adminTtitle\"></p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows={{achievementIndcatorQryOrgHistoryBean.pageSize}} totalRecords={{adminTotal}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event,'admin')\"></p-paginator>\r\n    </div>\r\n</div>\r\n<p-dialog *ngIf=\"adminAddPage\" [(visible)]=\"adminAddPage\" modal=\"true\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{personAddHeader}}\r\n    </p-header>\r\n    <div class=\"ui-g-12\">\r\n        <p-checkbox class=\"ui-g-12\" binary=\"true\" label=\"全选\" (click)=\"checkAllAdmin()\" [(ngModel)]=\"isAll\"></p-checkbox>\r\n        <p-checkbox class=\"ui-g-4\" binary=\"true\" label=\"{{item.dimenName}}\" *ngFor=\"let item of arrListAdmin\" [(ngModel)]=\"item.isCheck\"\r\n            (click)=\"doSelectAdmin(item)\"></p-checkbox>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"saveAdmin()\"></button>\r\n    </div>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"orgTreePage\" [(visible)]=\"orgTreePage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <org-tree-component (outValue)=\"treeCall($event)\"></org-tree-component>\r\n</p-dialog>\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n<p-confirmDialog></p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-history/history-admin/history-admin.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-history/history-admin/history-admin.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chooseTit {\n  width: 100px;\n  height: 35px;\n  text-align: center;\n  line-height: 35px;\n  display: inline-block;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  cursor: pointer; }\n\n.searchTitle {\n  display: inline-block;\n  width: 100px;\n  height: 35px;\n  text-align: center;\n  line-height: 35px;\n  margin-right: 30px; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin-right: 20px; }\n\n.datable {\n  text-align: center; }\n\n.active {\n  background: #0094D2 !important; }\n\n.date {\n  display: flex; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n.tit {\n  text-align: right; }\n\n.only-year-month-select[_ngcontent-c8] > input[disabled][_ngcontent-c8] {\n  width: 111px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZS1oaXN0b3J5L2hpc3RvcnktYWRtaW4vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxwZXJmb3JtYW5jZVxccGVyZm9ybWFuY2UtaGlzdG9yeVxcaGlzdG9yeS1hZG1pblxcaGlzdG9yeS1hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUduQjtFQUVJLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1Esa0JBQWtCLEVBQUE7O0FBSTFCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZS1oaXN0b3J5L2hpc3RvcnktYWRtaW4vaGlzdG9yeS1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaG9vc2VUaXQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8vIGJhY2tncm91bmQ6ICMwMDk0RDI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWFyY2hUaXRsZSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMDA5NEQyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7IC8vIGNvbG9yOiNmZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kYXRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA5NEQyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGEge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4udGl0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ub25seS15ZWFyLW1vbnRoLXNlbGVjdFtfbmdjb250ZW50LWM4XT5pbnB1dFtkaXNhYmxlZF1bX25nY29udGVudC1jOF0ge1xyXG4gICAgd2lkdGg6IDExMXB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-history/history-admin/history-admin.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-history/history-admin/history-admin.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: HistoryAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryAdminComponent", function() { return HistoryAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_achievementIndcatorQryOrgHistory_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bean/achievementIndcatorQryOrgHistory.bean */ "./src/app/pages/tzb/custom/performance/performance-history/bean/achievementIndcatorQryOrgHistory.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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




 //机构历史





var HistoryAdminComponent = /** @class */ (function () {
    function HistoryAdminComponent(router, httpService, fb, commfunc, confirmationService) {
        this.router = router;
        this.httpService = httpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.confirmationService = confirmationService;
        this.first = 0;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"]; //表格中无数据时显示的内容
        this.orgTreePage = false;
        this.msgs = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["CALENDAR_CN"];
        this.temData = new Date();
        this.adminAddPage = false;
        this.personAddPage = false;
        this.personAddHeader = '选择字段';
        this.isAll = false;
        this.dateOption = []; //日期
        //默认个人历史表头
        this.perTitle = [
            {
                dimenName: '汇总的FTP净利差数据折扣前',
                orderCode: 1,
                value: 'lcHz',
                isCheck: true,
            },
            {
                dimenName: '存款FTP利差折扣前',
                orderCode: 2,
                value: 'lcCk',
                isCheck: true,
            },
            {
                dimenName: '普通贷款FTP利差折扣前',
                orderCode: 3,
                value: 'lcPtdk',
                isCheck: true,
            },
            {
                dimenName: '消费贷款FTP利差折扣前',
                orderCode: 4,
                value: 'lcXf',
                isCheck: true,
            },
            {
                dimenName: '小本贷款FTP利差折扣前',
                orderCode: 5,
                value: 'lcXbdk',
                isCheck: true,
            },
            {
                dimenName: '信用卡FTP利差折扣前',
                orderCode: 6,
                value: 'lcXyk',
                isCheck: true,
            },
            {
                dimenName: '自助卡FTP利差折扣前',
                orderCode: 7,
                value: 'lcZzk',
                isCheck: true,
            },
            {
                dimenName: '汇总的FTP净利差数据折扣后',
                orderCode: 8,
                value: 'lcHz1',
                isCheck: true,
            },
        ];
        //管理历史表头
        this.adminTtitle = [
            {
                dimenName: '汇总的FTP净利差数据折扣前',
                orderCode: 1,
                value: 'lcHz',
                isCheck: true,
            },
            {
                dimenName: '存款FTP利差折扣前',
                orderCode: 2,
                value: 'lcCk',
                isCheck: true,
            },
            {
                dimenName: '普通贷款FTP利差折扣前',
                orderCode: 3,
                value: 'lcPtdk',
                isCheck: true,
            },
            {
                dimenName: '消费贷款FTP利差折扣前',
                orderCode: 4,
                value: 'lcXf',
                isCheck: true,
            },
            {
                dimenName: '小本贷款FTP利差折扣前',
                orderCode: 5,
                value: 'lcXbdk',
                isCheck: true,
            },
            {
                dimenName: '信用卡FTP利差折扣前',
                orderCode: 6,
                value: 'lcXyk',
                isCheck: true,
            },
            {
                dimenName: '自助卡FTP利差折扣前',
                orderCode: 7,
                value: 'lcZzk',
                isCheck: true,
            },
            {
                dimenName: '汇总的FTP净利差数据折扣后',
                orderCode: 8,
                value: 'lcHz1',
                isCheck: true,
            },
        ];
        //选择字段个人
        this.arrListPerson = [
            {
                dimenName: '汇总的FTP净利差数据折扣前',
                orderCode: 1,
                value: 'lcHz',
                isCheck: true,
            },
            {
                dimenName: '存款FTP利差折扣前',
                orderCode: 2,
                value: 'lcCk',
                isCheck: true,
            },
            {
                dimenName: '普通贷款FTP利差折扣前',
                orderCode: 3,
                value: 'lcPtdk',
                isCheck: true,
            },
            {
                dimenName: '消费贷款FTP利差折扣前',
                orderCode: 4,
                value: 'lcXf',
                isCheck: true,
            },
            {
                dimenName: '小本贷款FTP利差折扣前',
                orderCode: 5,
                value: 'lcXbdk',
                isCheck: true,
            },
            {
                dimenName: '信用卡FTP利差折扣前',
                orderCode: 6,
                value: 'lcXyk',
                isCheck: true,
            },
            {
                dimenName: '自助卡FTP利差折扣前',
                orderCode: 7,
                value: 'lcZzk',
                isCheck: true,
            },
            {
                dimenName: '汇总的FTP净利差数据折扣后',
                orderCode: 8,
                value: 'lcHz1',
                isCheck: true,
            },
            {
                dimenName: '存款FTP利差折扣后',
                orderCode: 9,
                value: 'lcCk1',
            },
            {
                dimenName: '普通贷款FTP利差折扣后',
                orderCode: 10,
                value: 'lcPtdk1',
            },
            {
                dimenName: '消费贷款FTP利差折扣后',
                orderCode: 11,
                value: 'lcXfdk1',
            },
            {
                dimenName: '小本贷款FTP利差折扣后',
                orderCode: 12,
                value: 'lcXbdk1',
            },
            {
                dimenName: '信用卡FTP利差折扣后',
                orderCode: 13,
                value: 'lcXyk1',
            },
            {
                dimenName: '自助卡FTP利差折扣后',
                orderCode: 14,
                value: 'lcZzk1',
            },
            {
                dimenName: '存款日均',
                orderCode: 15,
                value: 'ckRj',
            },
            {
                dimenName: '存款余额',
                orderCode: 16,
                value: 'ckYe',
            },
            {
                dimenName: '（外币）存款日均',
                orderCode: 17,
                value: 'ckWbrj',
            },
            {
                dimenName: '（外币）存款余额',
                orderCode: 18,
                value: 'ckWbye',
            },
            {
                dimenName: '贷款日均',
                orderCode: 19,
                value: 'dkrj',
            },
            {
                dimenName: '贷款余额',
                orderCode: 20,
                value: 'dkye',
            },
            {
                dimenName: '（本月新发放）信用卡张数',
                orderCode: 21,
                value: 'sxXykbs',
            },
            {
                dimenName: '（本月新发放）信用卡授信总额',
                orderCode: 22,
                value: 'sxXykze',
            },
            {
                dimenName: '（本月新发放）授信客户数',
                orderCode: 23,
                value: 'sxSxkhs',
            },
            {
                dimenName: '（本月新发放）授信总额',
                orderCode: 24,
                value: 'sxSxze',
            },
            {
                dimenName: '（本月新发放）预授信客户数',
                orderCode: 25,
                value: 'sxYsxkhs',
            },
            {
                dimenName: '（本月新发放）预授信总额',
                orderCode: 26,
                value: 'sxYsxze',
            },
            {
                dimenName: '（本月新发放）客户数',
                orderCode: 27,
                value: 'sxKhs',
            },
            {
                dimenName: '普通贷款日均',
                orderCode: 28,
                value: 'sxPdrj',
            },
            {
                dimenName: '普通贷款余额',
                orderCode: 29,
                value: 'sxPdye',
            },
            {
                dimenName: '贸易融资日均',
                orderCode: 30,
                value: 'sxRzrj',
            },
            {
                dimenName: '贸易融资余额',
                orderCode: 31,
                value: 'sxRzye',
            },
            {
                dimenName: '小本在管户数',
                orderCode: 32,
                value: 'sxXbhs',
            },
            {
                dimenName: '小本贷款日均',
                orderCode: 33,
                value: 'sxXbrj',
            },
            {
                dimenName: '小本贷款余额',
                orderCode: 34,
                value: 'sxXbye',
            },
            {
                dimenName: '消费贷款日均',
                orderCode: 35,
                value: 'sxXfrj',
            },
            {
                dimenName: '消费贷款余额',
                orderCode: 36,
                value: 'sxXfye',
            },
            {
                dimenName: '信用卡取现日均',
                orderCode: 37,
                value: 'sxXykrj',
            },
            {
                dimenName: '信用卡分期日均',
                orderCode: 38,
                value: 'sxXykye',
            },
            {
                dimenName: '自助卡日均',
                orderCode: 39,
                value: 'sxZzkrj',
            },
            {
                dimenName: '自助卡余额',
                orderCode: 40,
                value: 'sxZzkye',
            },
            {
                dimenName: '累计国际业务结算量',
                orderCode: 41,
                value: 'gjJsl',
            },
            {
                dimenName: '自助卡日均',
                orderCode: 39,
                value: 'sxZzkrj',
            },
            {
                dimenName: '自助卡余额',
                orderCode: 40,
                value: 'sxZzkye',
            },
            {
                dimenName: '累计国际业务结算量',
                orderCode: 41,
                value: 'gjJsl',
            },
        ];
        //选择字段机构
        this.arrListAdmin = [
            {
                dimenName: '汇总的FTP净利差数据折扣前',
                orderCode: 1,
                value: 'lcHz',
                isCheck: true,
            },
            {
                dimenName: '存款FTP利差折扣前',
                orderCode: 2,
                value: 'lcCk',
                isCheck: true,
            },
            {
                dimenName: '普通贷款FTP利差折扣前',
                orderCode: 3,
                value: 'lcPtdk',
                isCheck: true,
            },
            {
                dimenName: '消费贷款FTP利差折扣前',
                orderCode: 4,
                value: 'lcXf',
                isCheck: true,
            },
            {
                dimenName: '小本贷款FTP利差折扣前',
                orderCode: 5,
                value: 'lcXbdk',
                isCheck: true,
            },
            {
                dimenName: '信用卡FTP利差折扣前',
                orderCode: 6,
                value: 'lcXyk',
                isCheck: true,
            },
            {
                dimenName: '自助卡FTP利差折扣前',
                orderCode: 7,
                value: 'lcZzk',
                isCheck: true,
            },
            {
                dimenName: '汇总的FTP净利差数据折扣后',
                orderCode: 8,
                value: 'lcHz1',
                isCheck: true,
            },
            {
                dimenName: '存款FTP利差折扣后',
                orderCode: 9,
                value: 'lcCk1',
            },
            {
                dimenName: '普通贷款FTP利差折扣后',
                orderCode: 10,
                value: 'lcPtdk1',
            },
            {
                dimenName: '消费贷款FTP利差折扣后',
                orderCode: 11,
                value: 'lcXfdk1',
            },
            {
                dimenName: '小本贷款FTP利差折扣后',
                orderCode: 12,
                value: 'lcXbdk1',
            },
            {
                dimenName: '信用卡FTP利差折扣后',
                orderCode: 13,
                value: 'lcXyk1',
            },
            {
                dimenName: '自助卡FTP利差折扣后',
                orderCode: 14,
                value: 'lcZzk1',
            },
            {
                dimenName: '存款日均',
                orderCode: 15,
                value: 'ckRj',
            },
            {
                dimenName: '存款余额',
                orderCode: 16,
                value: 'ckYe',
            },
            {
                dimenName: '（外币）存款日均',
                orderCode: 17,
                value: 'ckWbrj',
            },
            {
                dimenName: '（外币）存款余额',
                orderCode: 18,
                value: 'ckWbye',
            },
            {
                dimenName: '贷款日均',
                orderCode: 19,
                value: 'dkrj',
            },
            {
                dimenName: '贷款余额',
                orderCode: 20,
                value: 'dkye',
            },
            {
                dimenName: '（本月新发放）信用卡张数',
                orderCode: 21,
                value: 'sxXykbs',
            },
            {
                dimenName: '（本月新发放）信用卡授信总额',
                orderCode: 22,
                value: 'sxXykze',
            },
            {
                dimenName: '（本月新发放）授信客户数',
                orderCode: 23,
                value: 'sxSxkhs',
            },
            {
                dimenName: '（本月新发放）授信总额',
                orderCode: 24,
                value: 'sxSxze',
            },
            {
                dimenName: '（本月新发放）预授信客户数',
                orderCode: 25,
                value: 'sxYsxkhs',
            },
            {
                dimenName: '（本月新发放）预授信总额',
                orderCode: 26,
                value: 'sxYsxze',
            },
            {
                dimenName: '（本月新发放）客户数',
                orderCode: 27,
                value: 'sxKhs',
            },
            {
                dimenName: '普通贷款日均',
                orderCode: 28,
                value: 'sxPdrj',
            },
            {
                dimenName: '普通贷款余额',
                orderCode: 29,
                value: 'sxPdye',
            },
            {
                dimenName: '贸易融资日均',
                orderCode: 30,
                value: 'sxRzrj',
            },
            {
                dimenName: '贸易融资余额',
                orderCode: 31,
                value: 'sxRzye',
            },
            {
                dimenName: '小本在管户数',
                orderCode: 32,
                value: 'sxXbhs',
            },
            {
                dimenName: '小本贷款日均',
                orderCode: 33,
                value: 'sxXbrj',
            },
            {
                dimenName: '小本贷款余额',
                orderCode: 34,
                value: 'sxXbye',
            },
            {
                dimenName: '消费贷款日均',
                orderCode: 35,
                value: 'sxXfrj',
            },
            {
                dimenName: '消费贷款余额',
                orderCode: 36,
                value: 'sxXfye',
            },
            {
                dimenName: '信用卡取现日均',
                orderCode: 37,
                value: 'sxXykrj',
            },
            {
                dimenName: '信用卡分期日均',
                orderCode: 38,
                value: 'sxXykye',
            },
            {
                dimenName: '自助卡日均',
                orderCode: 39,
                value: 'sxZzkrj',
            },
            {
                dimenName: '自助卡余额',
                orderCode: 40,
                value: 'sxZzkye',
            },
            {
                dimenName: '累计国际业务结算量',
                orderCode: 41,
                value: 'gjJsl',
            },
            {
                dimenName: '自助卡日均',
                orderCode: 39,
                value: 'sxZzkrj',
            },
            {
                dimenName: '自助卡余额',
                orderCode: 40,
                value: 'sxZzkye',
            },
            {
                dimenName: '累计国际业务结算量',
                orderCode: 41,
                value: 'gjJsl',
            },
            {
                dimenName: '授信条线FTP利差折扣前',
                orderCode: 42,
                value: 'lcSxtx',
            },
            {
                dimenName: '储蓄条线FTP利差折扣前',
                orderCode: 43,
                value: 'lcCxtx',
            },
            {
                dimenName: '授信条线FTP利差折算后',
                orderCode: 44,
                value: 'lcSxtx1',
            },
            {
                dimenName: '储蓄条线FTP利差折算后',
                orderCode: 45,
                value: 'lcCxtx1',
            },
        ];
        this.personData = [];
        this.adminData = [];
        this.adminPage = true;
        this.personPage = false;
        this.achievementIndcatorQryOrgHistoryBean = new _bean_achievementIndcatorQryOrgHistory_bean__WEBPACK_IMPORTED_MODULE_4__["AchievementIndcatorQryOrgHistoryBean"]();
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__["TZB_HTTP_CUS"];
        this.userform = fb.group({
            startDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            endDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.scopeform = fb.group({
            qryScope1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            qryScope2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            orRelation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    HistoryAdminComponent.prototype.ngOnInit = function () {
        this.achievementIndcatorQryOrgHistoryBean.pageSize = 10;
        this.achievementIndcatorQryOrgHistoryBean.pageNum = 1;
        this.item = 1;
        var a = [];
        this.perTitle.sort(function (a, b) {
            return a.orderCode > b.orderCode;
        });
        this.adminTtitle.sort(function (a, b) {
            return a.orderCode > b.orderCode;
        });
    };
    //翻页
    HistoryAdminComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.achievementIndcatorQryOrgHistoryBean.pageSize = event.rows * 1;
        //当前页
        this.achievementIndcatorQryOrgHistoryBean.pageNum = event.page + 1;
        this.first = event.page * this.achievementIndcatorQryOrgHistoryBean.pageSize;
        this.queryAdmin();
    };
    //日期
    HistoryAdminComponent.prototype.showData = function () {
        this.temData = this.startDt;
    };
    HistoryAdminComponent.prototype.querySecond = function () {
        this.achievementIndcatorQryOrgHistoryBean.pageSize = 10;
        this.achievementIndcatorQryOrgHistoryBean.pageNum = 1;
        this.first = 0;
        this.queryAdmin();
    };
    //历史业绩查询(机构角色)
    HistoryAdminComponent.prototype.queryAdmin = function () {
        // this.achievementIndcatorQryOrgHistoryBean.orgNo = this.treeOrgID;
        // this.achievementIndcatorQryOrgHistoryBean.startDt=this.startDt;
        // this.achievementIndcatorQryOrgHistoryBean.endDt=this.endDt;
        // this.httpService.achievementIndcatorQryOrgHistory(this.achievementIndcatorQryOrgHistoryBean).subscribe(data => {
        //     this.adminData = data.infoList;
        //     this.adminTotal = data.totalNum;
        //     if (data.returnCode.code == 'success') {
        //         this.msgs = [];
        //         this.msgs = [{ severity: 'info', summary: '提示', detail: '查询成功' }];
        //     } else {
        //         this.msgs = [];
        //         this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
        //     }
        // }, err => {
        //     this.msgs = [];
        //     this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        // });
    };
    //机构导出
    HistoryAdminComponent.prototype.outputAdmin = function () {
        // let titList = [];
        // titList.push('dt', 'jgmc');
        // this.adminTtitle.forEach(item => {
        //     titList.push(item.value)
        // });
        // let param = {
        //     'orgNo': this.achievementIndcatorQryOrgHistoryBean.orgNo,
        //     'startDt': this.achievementIndcatorQryOrgHistoryBean.startDt,
        //     'endDt': this.achievementIndcatorQryOrgHistoryBean.endDt,
        //     'titList': titList,
        // }
        // this.httpService.achievementIndcatorOrgHistoryExportFile(param).subscribe(data => {
        //     this.fileName = data.fileName;
        //     this.filePath = data.fileUrl;
        //     if (data.returnCode.code == 'success') {
        //         this.msgs = [];
        //         this.msgs = [{ severity: 'info', summary: '提示', detail: '下载成功' }];
        //         open(TZB_CUS_DOWNLOAD + "?fileName=" + this.fileName + "&fileUrl=" + this.filePath + "")
        //     } else {
        //         this.msgs = [];
        //         this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
        //     }
        // }, err => {
        //     this.msgs = [];
        //     this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        // });
    };
    //自定义设置
    HistoryAdminComponent.prototype.toSet = function () {
        this.router.navigate(["pages/tzb/custom/performance/performance-set"]);
    };
    HistoryAdminComponent.prototype.adminChoose = function (i) {
        this.adminPage = true;
        this.personPage = false;
        this.item = i;
        this.achievementIndcatorQryOrgHistoryBean.orgNo = '';
        this.achievementIndcatorQryOrgHistoryBean.startDt = '';
        this.achievementIndcatorQryOrgHistoryBean.endDt = '';
        this.treeOrgName = '';
        this.treeOrgID = '';
    };
    HistoryAdminComponent.prototype.chooseBtn = function () {
        this.personAddPage = true;
    };
    HistoryAdminComponent.prototype.save = function () {
        this.personAddPage = false;
    };
    //机构字段
    HistoryAdminComponent.prototype.chooseBtnAdmin = function () {
        this.adminAddPage = true;
    };
    HistoryAdminComponent.prototype.saveAdmin = function () {
        this.adminAddPage = false;
    };
    //机构全选
    HistoryAdminComponent.prototype.checkAllAdmin = function () {
        var _this = this;
        var isTrue = this.isAll;
        this.adminTtitle = [];
        this.arrListAdmin.forEach(function (item) {
            item['isCheck'] = isTrue;
            if (isTrue) {
                _this.adminTtitle.push(item);
            }
        });
        this.adminTtitle.sort(function (a, b) {
            return a.orderCode > b.orderCode;
        });
    };
    //机构单选
    HistoryAdminComponent.prototype.doSelectAdmin = function (param) {
        var _this = this;
        var all = true;
        if (param.isCheck) {
            this.adminTtitle.push(param);
            this.arrListAdmin.forEach(function (item) {
                all = item.isCheck && all;
            });
        }
        else {
            this.adminTtitle.forEach(function (item, i) {
                if (item.value == param.value) {
                    _this.adminTtitle.splice(i, 1);
                    return;
                }
            });
            all = false;
        }
        this.adminTtitle.sort(function (a, b) {
            return a.orderCode > b.orderCode;
        });
        this.isAll = all;
    };
    HistoryAdminComponent.prototype.orgTreeShow = function () {
        this.orgTreePage = true;
    };
    HistoryAdminComponent.prototype.treeCall = function (param) {
        if (this.adminPage == true) {
            this.orgTreePage = false;
            this.treeOrgName = param.orgName;
            this.treeOrgID = param.orgId;
        }
        else if (this.personPage == true) {
            this.orgTreePage = false;
            this.treePerName = param.orgName;
            this.treePerId = param.orgId;
        }
    };
    HistoryAdminComponent.prototype.perTreeShow = function () {
        this.orgTreePage = true;
    };
    //按钮权限
    HistoryAdminComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    HistoryAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'history-admin',
            template: __webpack_require__(/*! ./history-admin.component.html */ "./src/app/pages/tzb/custom/performance/performance-history/history-admin/history-admin.component.html"),
            styles: [__webpack_require__(/*! ./history-admin.component.scss */ "./src/app/pages/tzb/custom/performance/performance-history/history-admin/history-admin.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], HistoryAdminComponent);
    return HistoryAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-history/history-person/history-person.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-history/history-person/history-person.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 个人查询条件折叠 -->\r\n<div class=\"ui-g-11 ui-g-offset-1\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 tit\">\r\n            <label>个人姓名:</label>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"achievementIndcatorQryEmpHistoryBean.custName\">\r\n        </div>\r\n        <div class=\"ui-g-2 tit\">\r\n            <label>工号:</label>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <input type=\"text\" pInputText [(ngModel)]=\"achievementIndcatorQryEmpHistoryBean.empNo\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 tit\">\r\n            <label>机构树:</label>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"treePerName\">\r\n            <button pButton label=\"选择\" (click)=\"perTreeShow()\"></button>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 tit\">\r\n            <label>数据日期:</label>\r\n        </div>\r\n        <div class=\"ui-g-4 date\">\r\n            <div class=\"form-group condition-wrapper\">\r\n                <monthly-calendar class=\"form-control\" [placeholder]=\"'年-月'\" (result)=\"startDtPer = $event\" [range]=\"{before:50,after:50}\">\r\n                </monthly-calendar>\r\n            </div>\r\n            <span>至</span>\r\n            <div class=\"form-group condition-wrapper\">\r\n                <monthly-calendar class=\"form-control\" [placeholder]=\"'年-月'\" (result)=\"endDtPer = $event\" [range]=\"{before:50,after:50}\">\r\n                </monthly-calendar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n<div class=\"ui-g-12 btn\">\r\n    <button pButton label=\"查询\" (click)=\"queryFirst()\"></button>\r\n    <button pButton label=\"导出\" (click)=\"outputPerson()\"></button>\r\n</div>\r\n<div style=\"float:right;padding-right:1em;\">\r\n    <span class=\"icoColor\" (click)=\"chooseBtn()\">选择字段</span>\r\n</div>\r\n<!-- 个人角色历史业绩 -->\r\n<div class=\"ui-g-12 datable\">\r\n    <p-dataTable [value]=\"personData\" [emptyMessage]=\"tabMesg\">\r\n        <p-column field=\"dt\" header=\"数据日期\"></p-column>\r\n        <p-column field=\"custName\" header=\"姓名\"></p-column>\r\n        <p-column field={{list.value}} header={{list.dimenName}} *ngFor=\"let list of perTitle\"></p-column>\r\n    </p-dataTable>\r\n    <p-paginator [first]=\"first\" rows={{achievementIndcatorQryEmpHistoryBean.pageSize}} totalRecords={{personTotal}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n        (onPageChange)=\"paginate($event)\"></p-paginator>\r\n</div>\r\n\r\n<p-dialog *ngIf=\"personAddPage\" [(visible)]=\"personAddPage\" modal=\"true\" width=\"900\" responsive=\"true\">\r\n    <p-header>\r\n        {{personAddHeader}}\r\n    </p-header>\r\n    <div class=\"ui-g-12\">\r\n        <p-checkbox class=\"ui-g-12\" binary=\"true\" label=\"全选\" (click)=\"checkAll()\" [(ngModel)]=\"isAll\"></p-checkbox>\r\n        <p-checkbox class=\"ui-g-4\" binary=\"true\" label=\"{{item.dimenName}}\" *ngFor=\"let item of arrListPerson\" [(ngModel)]=\"item.isCheck\"\r\n            (click)=\"doSelect(item)\"></p-checkbox>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"save()\"></button>\r\n    </div>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"orgTreePage\" [(visible)]=\"orgTreePage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <org-tree-component (outValue)=\"treeCall($event)\"></org-tree-component>\r\n</p-dialog>\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n<p-confirmDialog></p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-history/history-person/history-person.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-history/history-person/history-person.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chooseTit {\n  width: 100px;\n  height: 35px;\n  text-align: center;\n  line-height: 35px;\n  display: inline-block;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  color: #000;\n  cursor: pointer; }\n\n.searchTitle {\n  display: inline-block;\n  width: 100px;\n  height: 35px;\n  text-align: center;\n  line-height: 35px;\n  margin-right: 30px; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin-right: 20px; }\n\n.datable {\n  text-align: center; }\n\n.active {\n  background: #0094D2 !important; }\n\n.date {\n  display: flex; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n.tit {\n  text-align: right; }\n\n.only-year-month-select[_ngcontent-c8] > input[disabled][_ngcontent-c8] {\n  width: 111px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZS1oaXN0b3J5L2hpc3RvcnktcGVyc29uL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxccGVyZm9ybWFuY2VcXHBlcmZvcm1hbmNlLWhpc3RvcnlcXGhpc3RvcnktcGVyc29uXFxoaXN0b3J5LXBlcnNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUduQjtFQUVJLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1Esa0JBQWtCLEVBQUE7O0FBSTFCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZS1oaXN0b3J5L2hpc3RvcnktcGVyc29uL2hpc3RvcnktcGVyc29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNob29zZVRpdCB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLy8gYmFja2dyb3VuZDogIzAwOTREMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaFRpdGxlIHtcclxuICAgIC8vIGJhY2tncm91bmQ6ICMwMDk0RDI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDsgLy8gY29sb3I6I2ZmZjtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmRhdGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDk0RDIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YSB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi50aXQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5vbmx5LXllYXItbW9udGgtc2VsZWN0W19uZ2NvbnRlbnQtYzhdPmlucHV0W2Rpc2FibGVkXVtfbmdjb250ZW50LWM4XSB7XHJcbiAgICB3aWR0aDogMTExcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-history/history-person/history-person.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-history/history-person/history-person.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: HistoryPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPersonComponent", function() { return HistoryPersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_achievementIndcatorQryEmpHistory_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bean/achievementIndcatorQryEmpHistory.bean */ "./src/app/pages/tzb/custom/performance/performance-history/bean/achievementIndcatorQryEmpHistory.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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




 //个人历史





var HistoryPersonComponent = /** @class */ (function () {
    function HistoryPersonComponent(router, httpService, fb, commfunc, confirmationService) {
        this.router = router;
        this.httpService = httpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.confirmationService = confirmationService;
        this.first = 0;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"]; //表格中无数据时显示的内容
        this.orgTreePage = false;
        this.msgs = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["CALENDAR_CN"];
        this.temData = new Date();
        this.adminAddPage = false;
        this.personAddPage = false;
        this.personAddHeader = '选择字段';
        this.isAll = false;
        this.dateOption = []; //日期
        //默认个人历史表头
        this.perTitle = [
            {
                dimenName: '汇总的FTP净利差数据折扣前',
                orderCode: 1,
                value: 'lcHz',
                isCheck: true,
            },
            {
                dimenName: '存款FTP利差折扣前',
                orderCode: 2,
                value: 'lcCk',
                isCheck: true,
            },
            {
                dimenName: '普通贷款FTP利差折扣前',
                orderCode: 3,
                value: 'lcPtdk',
                isCheck: true,
            },
            {
                dimenName: '消费贷款FTP利差折扣前',
                orderCode: 4,
                value: 'lcXf',
                isCheck: true,
            },
            {
                dimenName: '小本贷款FTP利差折扣前',
                orderCode: 5,
                value: 'lcXbdk',
                isCheck: true,
            },
            {
                dimenName: '信用卡FTP利差折扣前',
                orderCode: 6,
                value: 'lcXyk',
                isCheck: true,
            },
            {
                dimenName: '自助卡FTP利差折扣前',
                orderCode: 7,
                value: 'lcZzk',
                isCheck: true,
            },
            {
                dimenName: '汇总的FTP净利差数据折扣后',
                orderCode: 8,
                value: 'lcHz1',
                isCheck: true,
            },
        ];
        //管理历史表头
        this.adminTtitle = [
            {
                dimenName: '汇总的FTP净利差数据折扣前',
                orderCode: 1,
                value: 'lcHz',
                isCheck: true,
            },
            {
                dimenName: '存款FTP利差折扣前',
                orderCode: 2,
                value: 'lcCk',
                isCheck: true,
            },
            {
                dimenName: '普通贷款FTP利差折扣前',
                orderCode: 3,
                value: 'lcPtdk',
                isCheck: true,
            },
            {
                dimenName: '消费贷款FTP利差折扣前',
                orderCode: 4,
                value: 'lcXf',
                isCheck: true,
            },
            {
                dimenName: '小本贷款FTP利差折扣前',
                orderCode: 5,
                value: 'lcXbdk',
                isCheck: true,
            },
            {
                dimenName: '信用卡FTP利差折扣前',
                orderCode: 6,
                value: 'lcXyk',
                isCheck: true,
            },
            {
                dimenName: '自助卡FTP利差折扣前',
                orderCode: 7,
                value: 'lcZzk',
                isCheck: true,
            },
            {
                dimenName: '汇总的FTP净利差数据折扣后',
                orderCode: 8,
                value: 'lcHz1',
                isCheck: true,
            },
        ];
        //选择字段个人
        this.arrListPerson = [
            {
                dimenName: '汇总的FTP净利差数据折扣前',
                orderCode: 1,
                value: 'lcHz',
                isCheck: true,
            },
            {
                dimenName: '存款FTP利差折扣前',
                orderCode: 2,
                value: 'lcCk',
                isCheck: true,
            },
            {
                dimenName: '普通贷款FTP利差折扣前',
                orderCode: 3,
                value: 'lcPtdk',
                isCheck: true,
            },
            {
                dimenName: '消费贷款FTP利差折扣前',
                orderCode: 4,
                value: 'lcXf',
                isCheck: true,
            },
            {
                dimenName: '小本贷款FTP利差折扣前',
                orderCode: 5,
                value: 'lcXbdk',
                isCheck: true,
            },
            {
                dimenName: '信用卡FTP利差折扣前',
                orderCode: 6,
                value: 'lcXyk',
                isCheck: true,
            },
            {
                dimenName: '自助卡FTP利差折扣前',
                orderCode: 7,
                value: 'lcZzk',
                isCheck: true,
            },
            {
                dimenName: '汇总的FTP净利差数据折扣后',
                orderCode: 8,
                value: 'lcHz1',
                isCheck: true,
            },
            {
                dimenName: '存款FTP利差折扣后',
                orderCode: 9,
                value: 'lcCk1',
            },
            {
                dimenName: '普通贷款FTP利差折扣后',
                orderCode: 10,
                value: 'lcPtdk1',
            },
            {
                dimenName: '消费贷款FTP利差折扣后',
                orderCode: 11,
                value: 'lcXfdk1',
            },
            {
                dimenName: '小本贷款FTP利差折扣后',
                orderCode: 12,
                value: 'lcXbdk1',
            },
            {
                dimenName: '信用卡FTP利差折扣后',
                orderCode: 13,
                value: 'lcXyk1',
            },
            {
                dimenName: '自助卡FTP利差折扣后',
                orderCode: 14,
                value: 'lcZzk1',
            },
            {
                dimenName: '存款日均',
                orderCode: 15,
                value: 'ckRj',
            },
            {
                dimenName: '存款余额',
                orderCode: 16,
                value: 'ckYe',
            },
            {
                dimenName: '（外币）存款日均',
                orderCode: 17,
                value: 'ckWbrj',
            },
            {
                dimenName: '（外币）存款余额',
                orderCode: 18,
                value: 'ckWbye',
            },
            {
                dimenName: '贷款日均',
                orderCode: 19,
                value: 'dkrj',
            },
            {
                dimenName: '贷款余额',
                orderCode: 20,
                value: 'dkye',
            },
            {
                dimenName: '（本月新发放）信用卡张数',
                orderCode: 21,
                value: 'sxXykbs',
            },
            {
                dimenName: '（本月新发放）信用卡授信总额',
                orderCode: 22,
                value: 'sxXykze',
            },
            {
                dimenName: '（本月新发放）授信客户数',
                orderCode: 23,
                value: 'sxSxkhs',
            },
            {
                dimenName: '（本月新发放）授信总额',
                orderCode: 24,
                value: 'sxSxze',
            },
            {
                dimenName: '（本月新发放）预授信客户数',
                orderCode: 25,
                value: 'sxYsxkhs',
            },
            {
                dimenName: '（本月新发放）预授信总额',
                orderCode: 26,
                value: 'sxYsxze',
            },
            {
                dimenName: '（本月新发放）客户数',
                orderCode: 27,
                value: 'sxKhs',
            },
            {
                dimenName: '普通贷款日均',
                orderCode: 28,
                value: 'sxPdrj',
            },
            {
                dimenName: '普通贷款余额',
                orderCode: 29,
                value: 'sxPdye',
            },
            {
                dimenName: '贸易融资日均',
                orderCode: 30,
                value: 'sxRzrj',
            },
            {
                dimenName: '贸易融资余额',
                orderCode: 31,
                value: 'sxRzye',
            },
            {
                dimenName: '小本在管户数',
                orderCode: 32,
                value: 'sxXbhs',
            },
            {
                dimenName: '小本贷款日均',
                orderCode: 33,
                value: 'sxXbrj',
            },
            {
                dimenName: '小本贷款余额',
                orderCode: 34,
                value: 'sxXbye',
            },
            {
                dimenName: '消费贷款日均',
                orderCode: 35,
                value: 'sxXfrj',
            },
            {
                dimenName: '消费贷款余额',
                orderCode: 36,
                value: 'sxXfye',
            },
            {
                dimenName: '信用卡取现日均',
                orderCode: 37,
                value: 'sxXykrj',
            },
            {
                dimenName: '信用卡分期日均',
                orderCode: 38,
                value: 'sxXykye',
            },
            {
                dimenName: '自助卡日均',
                orderCode: 39,
                value: 'sxZzkrj',
            },
            {
                dimenName: '自助卡余额',
                orderCode: 40,
                value: 'sxZzkye',
            },
            {
                dimenName: '累计国际业务结算量',
                orderCode: 41,
                value: 'gjJsl',
            },
            {
                dimenName: '自助卡日均',
                orderCode: 39,
                value: 'sxZzkrj',
            },
            {
                dimenName: '自助卡余额',
                orderCode: 40,
                value: 'sxZzkye',
            },
            {
                dimenName: '累计国际业务结算量',
                orderCode: 41,
                value: 'gjJsl',
            },
        ];
        //选择字段机构
        this.arrListAdmin = [
            {
                dimenName: '汇总的FTP净利差数据折扣前',
                orderCode: 1,
                value: 'lcHz',
                isCheck: true,
            },
            {
                dimenName: '存款FTP利差折扣前',
                orderCode: 2,
                value: 'lcCk',
                isCheck: true,
            },
            {
                dimenName: '普通贷款FTP利差折扣前',
                orderCode: 3,
                value: 'lcPtdk',
                isCheck: true,
            },
            {
                dimenName: '消费贷款FTP利差折扣前',
                orderCode: 4,
                value: 'lcXf',
                isCheck: true,
            },
            {
                dimenName: '小本贷款FTP利差折扣前',
                orderCode: 5,
                value: 'lcXbdk',
                isCheck: true,
            },
            {
                dimenName: '信用卡FTP利差折扣前',
                orderCode: 6,
                value: 'lcXyk',
                isCheck: true,
            },
            {
                dimenName: '自助卡FTP利差折扣前',
                orderCode: 7,
                value: 'lcZzk',
                isCheck: true,
            },
            {
                dimenName: '汇总的FTP净利差数据折扣后',
                orderCode: 8,
                value: 'lcHz1',
                isCheck: true,
            },
            {
                dimenName: '存款FTP利差折扣后',
                orderCode: 9,
                value: 'lcCk1',
            },
            {
                dimenName: '普通贷款FTP利差折扣后',
                orderCode: 10,
                value: 'lcPtdk1',
            },
            {
                dimenName: '消费贷款FTP利差折扣后',
                orderCode: 11,
                value: 'lcXfdk1',
            },
            {
                dimenName: '小本贷款FTP利差折扣后',
                orderCode: 12,
                value: 'lcXbdk1',
            },
            {
                dimenName: '信用卡FTP利差折扣后',
                orderCode: 13,
                value: 'lcXyk1',
            },
            {
                dimenName: '自助卡FTP利差折扣后',
                orderCode: 14,
                value: 'lcZzk1',
            },
            {
                dimenName: '存款日均',
                orderCode: 15,
                value: 'ckRj',
            },
            {
                dimenName: '存款余额',
                orderCode: 16,
                value: 'ckYe',
            },
            {
                dimenName: '（外币）存款日均',
                orderCode: 17,
                value: 'ckWbrj',
            },
            {
                dimenName: '（外币）存款余额',
                orderCode: 18,
                value: 'ckWbye',
            },
            {
                dimenName: '贷款日均',
                orderCode: 19,
                value: 'dkrj',
            },
            {
                dimenName: '贷款余额',
                orderCode: 20,
                value: 'dkye',
            },
            {
                dimenName: '（本月新发放）信用卡张数',
                orderCode: 21,
                value: 'sxXykbs',
            },
            {
                dimenName: '（本月新发放）信用卡授信总额',
                orderCode: 22,
                value: 'sxXykze',
            },
            {
                dimenName: '（本月新发放）授信客户数',
                orderCode: 23,
                value: 'sxSxkhs',
            },
            {
                dimenName: '（本月新发放）授信总额',
                orderCode: 24,
                value: 'sxSxze',
            },
            {
                dimenName: '（本月新发放）预授信客户数',
                orderCode: 25,
                value: 'sxYsxkhs',
            },
            {
                dimenName: '（本月新发放）预授信总额',
                orderCode: 26,
                value: 'sxYsxze',
            },
            {
                dimenName: '（本月新发放）客户数',
                orderCode: 27,
                value: 'sxKhs',
            },
            {
                dimenName: '普通贷款日均',
                orderCode: 28,
                value: 'sxPdrj',
            },
            {
                dimenName: '普通贷款余额',
                orderCode: 29,
                value: 'sxPdye',
            },
            {
                dimenName: '贸易融资日均',
                orderCode: 30,
                value: 'sxRzrj',
            },
            {
                dimenName: '贸易融资余额',
                orderCode: 31,
                value: 'sxRzye',
            },
            {
                dimenName: '小本在管户数',
                orderCode: 32,
                value: 'sxXbhs',
            },
            {
                dimenName: '小本贷款日均',
                orderCode: 33,
                value: 'sxXbrj',
            },
            {
                dimenName: '小本贷款余额',
                orderCode: 34,
                value: 'sxXbye',
            },
            {
                dimenName: '消费贷款日均',
                orderCode: 35,
                value: 'sxXfrj',
            },
            {
                dimenName: '消费贷款余额',
                orderCode: 36,
                value: 'sxXfye',
            },
            {
                dimenName: '信用卡取现日均',
                orderCode: 37,
                value: 'sxXykrj',
            },
            {
                dimenName: '信用卡分期日均',
                orderCode: 38,
                value: 'sxXykye',
            },
            {
                dimenName: '自助卡日均',
                orderCode: 39,
                value: 'sxZzkrj',
            },
            {
                dimenName: '自助卡余额',
                orderCode: 40,
                value: 'sxZzkye',
            },
            {
                dimenName: '累计国际业务结算量',
                orderCode: 41,
                value: 'gjJsl',
            },
            {
                dimenName: '自助卡日均',
                orderCode: 39,
                value: 'sxZzkrj',
            },
            {
                dimenName: '自助卡余额',
                orderCode: 40,
                value: 'sxZzkye',
            },
            {
                dimenName: '累计国际业务结算量',
                orderCode: 41,
                value: 'gjJsl',
            },
            {
                dimenName: '授信条线FTP利差折扣前',
                orderCode: 42,
                value: 'lcSxtx',
            },
            {
                dimenName: '储蓄条线FTP利差折扣前',
                orderCode: 43,
                value: 'lcCxtx',
            },
            {
                dimenName: '授信条线FTP利差折算后',
                orderCode: 44,
                value: 'lcSxtx1',
            },
            {
                dimenName: '储蓄条线FTP利差折算后',
                orderCode: 45,
                value: 'lcCxtx1',
            },
        ];
        this.personData = [];
        this.adminData = [];
        this.adminPage = true;
        this.personPage = false;
        this.achievementIndcatorQryEmpHistoryBean = new _bean_achievementIndcatorQryEmpHistory_bean__WEBPACK_IMPORTED_MODULE_4__["AchievementIndcatorQryEmpHistoryBean"]();
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__["TZB_HTTP_CUS"];
        // this.httpService.dateList({}).subscribe(data => {
        //     this.dateArr = data.dateList;
        //     this.dateOption.push({ value: '', label: '请选择' });
        //     for (var i = 0; i < this.dateArr.length; i++) {
        //         this.dateOption.push({ value: this.dateArr[i], label: this.dateArr[i] });
        //     }
        // })
        this.userform = fb.group({
            startDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            endDt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.scopeform = fb.group({
            qryScope1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            qryScope2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            orRelation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    HistoryPersonComponent.prototype.ngOnInit = function () {
        this.achievementIndcatorQryEmpHistoryBean.pageSize = 10;
        this.achievementIndcatorQryEmpHistoryBean.pageNum = 1;
        this.item = 1;
        var a = [];
        this.perTitle.sort(function (a, b) {
            return a.orderCode > b.orderCode;
        });
        this.adminTtitle.sort(function (a, b) {
            return a.orderCode > b.orderCode;
        });
    };
    //翻页
    HistoryPersonComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.achievementIndcatorQryEmpHistoryBean.pageSize = event.rows * 1;
        //当前页
        this.achievementIndcatorQryEmpHistoryBean.pageNum = event.page + 1;
        this.first = event.page * this.achievementIndcatorQryEmpHistoryBean.pageSize;
        this.queryPerson();
    };
    //日期
    HistoryPersonComponent.prototype.showData = function () {
        this.temData = this.startDt;
    };
    HistoryPersonComponent.prototype.queryFirst = function () {
        this.achievementIndcatorQryEmpHistoryBean.pageSize = 10;
        this.achievementIndcatorQryEmpHistoryBean.pageNum = 1;
        this.first = 0;
        this.queryPerson();
    };
    //历史业绩查询(个人角色)
    HistoryPersonComponent.prototype.queryPerson = function () {
        var _this = this;
        this.achievementIndcatorQryEmpHistoryBean.startDt = this.startDtPer;
        this.achievementIndcatorQryEmpHistoryBean.endDt = this.endDtPer;
        this.achievementIndcatorQryEmpHistoryBean.orgNo = this.treePerId;
        this.httpService.achievementIndcatorQryEmpHistory(this.achievementIndcatorQryEmpHistoryBean).subscribe(function (data) {
            _this.personData = data.infoList;
            _this.personTotal = data.totalNum;
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'info', summary: '提示', detail: '查询成功' }];
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
    //个人历史业绩数据导出下载
    HistoryPersonComponent.prototype.outputPerson = function () {
        var _this = this;
        var titList = [];
        titList.push('dt', 'ch');
        this.perTitle.forEach(function (item) {
            titList.push(item.value);
        });
        var param = {
            'custName': this.achievementIndcatorQryEmpHistoryBean.custName,
            'empNo': this.achievementIndcatorQryEmpHistoryBean.empNo,
            'orgNo': this.achievementIndcatorQryEmpHistoryBean.orgNo,
            'startDt': this.achievementIndcatorQryEmpHistoryBean.startDt,
            'endDt': this.achievementIndcatorQryEmpHistoryBean.endDt,
            'titList': titList,
        };
        this.httpService.achievementIndcatorHistoryExportFile(param).subscribe(function (data) {
            _this.fileName = data.fileName;
            _this.filePath = data.fileUrl;
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'info', summary: '提示', detail: '下载成功' }];
                open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__["TZB_CUS_DOWNLOAD"] + "?fileName=" + _this.fileName + "&fileUrl=" + _this.filePath);
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
    //自定义设置
    HistoryPersonComponent.prototype.toSet = function () {
        this.router.navigate(["pages/tzb/custom/performance/performance-set"]);
    };
    HistoryPersonComponent.prototype.personChoose = function (i) {
        this.personPage = true;
        this.adminPage = false;
        this.item = i;
        this.achievementIndcatorQryEmpHistoryBean.custName = '';
        this.achievementIndcatorQryEmpHistoryBean.empNo = '';
        this.achievementIndcatorQryEmpHistoryBean.orgNo = '';
        this.achievementIndcatorQryEmpHistoryBean.startDt = '';
        this.achievementIndcatorQryEmpHistoryBean.endDt = '';
        this.treePerName = '';
        this.treePerId = '';
    };
    HistoryPersonComponent.prototype.chooseBtn = function () {
        this.personAddPage = true;
    };
    HistoryPersonComponent.prototype.save = function () {
        this.personAddPage = false;
    };
    //个人单选
    HistoryPersonComponent.prototype.doSelect = function (data) {
        var _this = this;
        var all = true;
        if (data.isCheck) {
            this.perTitle.push(data);
            this.arrListPerson.forEach(function (item) {
                all = item.isCheck && all;
            });
        }
        else {
            this.perTitle.forEach(function (item, i) {
                if (item.value == data.value) {
                    _this.perTitle.splice(i, 1);
                    return;
                }
            });
            all = false;
        }
        this.perTitle.sort(function (a, b) {
            return a.orderCode > b.orderCode;
        });
        this.isAll = all;
    };
    //个人全选
    HistoryPersonComponent.prototype.checkAll = function () {
        var _this = this;
        var isTrue = this.isAll;
        this.perTitle = [];
        this.arrListPerson.forEach(function (item) {
            item['isCheck'] = isTrue;
            if (isTrue) {
                _this.perTitle.push(item);
            }
        });
        this.perTitle.sort(function (a, b) {
            return a.orderCode > b.orderCode;
        });
    };
    //机构字段
    HistoryPersonComponent.prototype.chooseBtnAdmin = function () {
        this.adminAddPage = true;
    };
    HistoryPersonComponent.prototype.saveAdmin = function () {
        this.adminAddPage = false;
    };
    //机构全选
    HistoryPersonComponent.prototype.checkAllAdmin = function () {
        var _this = this;
        var isTrue = this.isAll;
        this.adminTtitle = [];
        this.arrListAdmin.forEach(function (item) {
            item['isCheck'] = isTrue;
            if (isTrue) {
                _this.adminTtitle.push(item);
            }
        });
        this.adminTtitle.sort(function (a, b) {
            return a.orderCode > b.orderCode;
        });
    };
    //机构单选
    HistoryPersonComponent.prototype.doSelectAdmin = function (param) {
        var _this = this;
        var all = true;
        if (param.isCheck) {
            this.adminTtitle.push(param);
            this.arrListAdmin.forEach(function (item) {
                all = item.isCheck && all;
            });
        }
        else {
            this.adminTtitle.forEach(function (item, i) {
                if (item.value == param.value) {
                    _this.adminTtitle.splice(i, 1);
                    return;
                }
            });
            all = false;
        }
        this.adminTtitle.sort(function (a, b) {
            return a.orderCode > b.orderCode;
        });
        this.isAll = all;
    };
    HistoryPersonComponent.prototype.orgTreeShow = function () {
        this.orgTreePage = true;
    };
    HistoryPersonComponent.prototype.treeCall = function (param) {
        if (this.adminPage == true) {
            this.orgTreePage = false;
            this.treeOrgName = param.orgName;
            this.treeOrgID = param.orgId;
        }
        else if (this.personPage == true) {
            this.orgTreePage = false;
            this.treePerName = param.orgName;
            this.treePerId = param.orgId;
        }
    };
    HistoryPersonComponent.prototype.perTreeShow = function () {
        this.orgTreePage = true;
    };
    //按钮权限
    HistoryPersonComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    HistoryPersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'history-person',
            template: __webpack_require__(/*! ./history-person.component.html */ "./src/app/pages/tzb/custom/performance/performance-history/history-person/history-person.component.html"),
            styles: [__webpack_require__(/*! ./history-person.component.scss */ "./src/app/pages/tzb/custom/performance/performance-history/history-person/history-person.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], HistoryPersonComponent);
    return HistoryPersonComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-history/performance-history.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-history/performance-history.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 all padding-zero\">\r\n    <div>\r\n        <header-title [Info]=\"'历史业绩查询'\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12 TITbg\">\r\n        <span *ngIf=\"permissionCheck('SID00007_P002_P003_P001') && extParam.managePermission == 'Y'\">\r\n            <span class=\"chooseTit\" [ngClass]=\"{'active':item==1}\" (click)=\"adminChoose(1)\">机构</span>\r\n        </span>\r\n        <span *ngIf=\"permissionCheck('SID00007_P002_P003_P002')\">\r\n            <span class=\"chooseTit\" [ngClass]=\"{'active':item==2}\" (click)=\"personChoose(2)\">个人</span>\r\n        </span>\r\n    </div>\r\n    <div class=\"padding-zero-five\">\r\n        <!-- <p-tabView class=\"tab\" (onChange)=\"tabChange($event)\">\r\n            <p-tabPanel header=\"机构\" *ngIf=\"permissionCheck('SID00007_P002_P003_P001')\"> -->\r\n        <div class=\"ui-g-12\" *ngIf=\"adminPage\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <label>机构树:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-6 sousuoShow\">\r\n                        <input class=\"inputSearch\" id=\"input\" type=\"text\" readonly pInputText [(ngModel)]=\"treeOrgName\">\r\n                        <span class=\"checkSearch\" (click)=\"orgTreeShow()\">选择机构</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <label>数据日期:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8 ui-md-8 date\">\r\n                        <div class=\"form-group condition-wrapper\" *ngIf=\"showmonthAdmin\">\r\n                            <monthly-calendar class=\"form-control\" [placeholder]=\"'年-月'\" [disabled]='false' (result)=\"startDt = $event\" [range]=\"{before:50,after:50}\"\r\n                                [startTime]=\"startDt\">\r\n                            </monthly-calendar>\r\n                        </div>\r\n                        <div class=\"form-group condition-wrapper\" *ngIf=\"!showmonthAdmin\">\r\n                            <monthly-calendar class=\"form-control\" [placeholder]=\"'年-月'\" [disabled]='false' (result)=\"startDt = $event\" [range]=\"{before:50,after:50}\"\r\n                                [startTime]=\"startDt\">\r\n                            </monthly-calendar>\r\n                        </div>\r\n                        <span class=\"titcenter\">至</span>\r\n                        <div class=\"form-group condition-wrapper\" *ngIf=\"showmonthAdmin\">\r\n                            <monthly-calendar class=\"form-control\" [placeholder]=\"'年-月'\" [disabled]='false' (result)=\"endDt = $event\" [range]=\"{before:50,after:50}\"\r\n                                [startTime]=\"endDt\">\r\n                            </monthly-calendar>\r\n                        </div>\r\n                        <div class=\"form-group condition-wrapper\" *ngIf=\"!showmonthAdmin\">\r\n                            <monthly-calendar class=\"form-control\" [placeholder]=\"'年-月'\" [disabled]='false' (result)=\"endDt = $event\" [range]=\"{before:50,after:50}\"\r\n                                [startTime]=\"endDt\">\r\n                            </monthly-calendar>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 btn\">\r\n                <button pButton label=\"查询\" (click)=\"querySecond()\"></button>\r\n                <button pButton label=\"重置\" (click)=\"resetAdmin()\"></button>\r\n            </div>\r\n            <div style=\"float:right;padding-right:1em;\">\r\n                <button class=\"btn_1\" pButton label=\"选择字段\" *ngIf=\"permissionCheck('SID00007_P002_P003_P001_P002')\" (click)=\"chooseBtnAdmin()\"></button>\r\n                <button class=\"btn_2\" pButton label=\"导出\" *ngIf=\"permissionCheck('SID00007_P002_P003_P001_P001')\" (click)=\"outputAdmin('2')\"></button>\r\n                <button class=\"btn_2\" pButton label=\"返回工作台\" (click)=\"comeback()\"></button>\r\n            </div>\r\n            <div class=\"ui-g-12 datable base-table\">\r\n                <p-dataTable class=\"gundam\" [value]=\"adminData\" scrollable=\"true\" [emptyMessage]=\"tabMesg\">\r\n                    <p-column field=\"dataDt\" header=\"数据日期\" [style]=\"{'width':'110px'}\"></p-column>\r\n                    <p-column field=\"orgId\" header=\"机构号\" [style]=\"{'width':'110px'}\"></p-column>\r\n                    <p-column field=\"orgName\" header=\"机构名称\" [style]=\"{'width':'150px'}\"></p-column>\r\n                    <p-column field={{list.indicatorId}} header={{list.indicatorAlias}} *ngFor=\"let list of adminTtitle\" [style]=\"{'width':'190px'}\"></p-column>\r\n                </p-dataTable>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <p-paginator [first]=\"first\" rows={{achievementIndcatorQryOrgHistoryBean.pageSize}} totalRecords={{adminTotal}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                    (onPageChange)=\"paginate($event,'admin')\"></p-paginator>\r\n            </div>\r\n        </div>\r\n        <!-- </p-tabPanel>\r\n            <p-tabPanel header=\"个人\" *ngIf=\"permissionCheck('SID00007_P002_P003_P002')\"> -->\r\n        <div class=\"ui-g-12\" *ngIf=\"personPage\">\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <label>个人姓名:</label>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"achievementIndcatorQryEmpHistoryBean.custName\">\r\n                    <!-- <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"nameShow\">请输入汉字!</div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <label>工号:</label>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input style=\"width: 340px;\" type=\"text\" pInputText [(ngModel)]=\"achievementIndcatorQryEmpHistoryBean.empName\" (blur)=\"tellerCalll()\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <label>机构树:</label>\r\n                </div>\r\n                <div class=\"ui-g-6 sousuoShow\">\r\n                    <input class=\"inputSearch\" id=\"input\" type=\"text\" pInputText readonly [(ngModel)]=\"treePerName\">\r\n                    <span class=\"checkSearch\" (click)=\"perTreeShow()\">选择机构</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <label>数据日期:</label>\r\n                </div>\r\n                <div class=\"ui-g-8 ui-md-8 date\">\r\n                    <div class=\"form-group condition-wrapper\" *ngIf=\"showMonth\">\r\n                        <monthly-calendar class=\"form-control\" [placeholder]=\"'年-月'\" [disabled]='false' (result)=\"startDtPer = $event\" [range]=\"{before:50,after:50}\"\r\n                            [startTime]=\"startDtPer\">\r\n                        </monthly-calendar>\r\n                    </div>\r\n                    <div class=\"form-group condition-wrapper\" *ngIf=\"!showMonth\">\r\n                        <monthly-calendar class=\"form-control\" [placeholder]=\"'年-月'\" [disabled]='false' (result)=\"startDtPer = $event\" [range]=\"{before:50,after:50}\"\r\n                            [startTime]=\"startDtPer\">\r\n                        </monthly-calendar>\r\n                    </div>\r\n                    <span class=\"titcenter\">至</span>\r\n                    <div class=\"form-group condition-wrapper\" *ngIf=\"showMonth\">\r\n                        <monthly-calendar class=\"form-control\" [placeholder]=\"'年-月'\" [disabled]='false' (result)=\"endDtPer = $event\" [range]=\"{before:50,after:50}\"\r\n                            [startTime]=\"endDtPer\">\r\n                        </monthly-calendar>\r\n                    </div>\r\n                    <div class=\"form-group condition-wrapper\" *ngIf=\"!showMonth\">\r\n                        <monthly-calendar class=\"form-control\" [placeholder]=\"'年-月'\" [disabled]='false' (result)=\"endDtPer = $event\" [range]=\"{before:50,after:50}\"\r\n                            [startTime]=\"endDtPer\">\r\n                        </monthly-calendar>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 btn\">\r\n                <button pButton label=\"查询\" (click)=\"queryFirst()\"></button>\r\n                <button pButton label=\"重置\" (click)=\"resetPer()\"></button>\r\n            </div>\r\n            <div style=\"float:right;padding-right:1em;\">\r\n                <button class=\"btn_1\" pButton label=\"选择字段\" *ngIf=\"permissionCheck('SID00007_P002_P003_P002_P002')\" (click)=\"chooseBtn()\"></button>\r\n                <button class=\"btn_2\" pButton label=\"导出\" *ngIf=\"permissionCheck('SID00007_P002_P003_P002_P001')\" (click)=\"outputPerson('2')\"></button>\r\n                <button class=\"btn_2\" pButton label=\"返回工作台\" (click)=\"comeback()\"></button>\r\n            </div>\r\n            <div class=\"ui-g-12 datable base-table\">\r\n                <p-dataTable class=\"gundam\" [value]=\"personData\" scrollable=\"true\" [emptyMessage]=\"tabMesg\">\r\n                    <p-column field=\"dataDt\" header=\"数据日期\" [style]=\"{'width':'110px'}\"></p-column>\r\n                    <p-column field=\"userName\" header=\"姓名\" [style]=\"{'width':'110px'}\"></p-column>\r\n                    <p-column field={{list.indicatorId}} header={{list.indicatorAlias}} *ngFor=\"let list of perTitle\" [style]=\"{'width':'190px'}\"></p-column>\r\n                </p-dataTable>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <p-paginator [first]=\"first\" rows={{achievementIndcatorQryEmpHistoryBean.pageSize}} totalRecords={{personTotal}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                    (onPageChange)=\"paginate($event,'person')\"></p-paginator>\r\n            </div>\r\n        </div>\r\n        <!-- </p-tabPanel>\r\n        </p-tabView> -->\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<p-dialog [(visible)]=\"adminAddPage\" modal=\"true\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{personAddHeader}}\r\n    </p-header>\r\n    <div class=\"ui-g-12\">\r\n        <p-checkbox class=\"ui-g-12\" binary=\"true\" label=\"全选\" (click)=\"checkAllAdmin()\" [(ngModel)]=\"isAll2\"></p-checkbox>\r\n        <p-checkbox class=\"ui-g-4\" binary=\"true\" label=\"{{item.indicatorAlias}}\" *ngFor=\"let item of arrListAdmin\" [(ngModel)]=\"item.isCheck\"\r\n            (click)=\"doSelectAdmin(item)\"></p-checkbox>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"saveAdmin()\"></button>\r\n    </div>\r\n</p-dialog>\r\n<p-dialog [(visible)]=\"personAddPage\" modal=\"true\" width=\"900\" responsive=\"true\">\r\n    <p-header>\r\n        {{personAddHeader}}\r\n    </p-header>\r\n    <div class=\"ui-g-12\">\r\n        <p-checkbox class=\"ui-g-12\" binary=\"true\" label=\"全选\" (click)=\"checkAll()\" [(ngModel)]=\"isAll\"></p-checkbox>\r\n        <p-checkbox class=\"ui-g-4\" binary=\"true\" label=\"{{item.indicatorAlias}}\" *ngFor=\"let item of arrListPerson\" [(ngModel)]=\"item.isCheck\"\r\n            (click)=\"doSelect(item)\"></p-checkbox>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"save()\"></button>\r\n    </div>\r\n</p-dialog>\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n<p-confirmDialog></p-confirmDialog>\r\n<p-dialog *ngIf=\"orgTreePage\" [(visible)]=\"orgTreePage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <org-tree-component *ngIf=\"chooseNum==1\" (outValue)=\"treeCallPer($event)\"></org-tree-component>\r\n    <org-tree-component *ngIf=\"chooseNum==2\" (outValue)=\"treeCallAdmin($event)\"></org-tree-component>\r\n</p-dialog>\r\n\r\n<!-- 人员选择模态框 -->\r\n<p-dialog *ngIf=\"userDisplay\" [(visible)]=\"userDisplay\" [positionTop]=\"50\" width=\"900\" modal=\"true\">\r\n    <p-header>\r\n        选择人员\r\n    </p-header>\r\n    <queryUser (outValue)=\"returnOwnerInfo($event)\"></queryUser>\r\n</p-dialog>\r\n\r\n<tzb-loading [blocked]=\"blockDisplay.flag\" [bgSize]=\"500\" [baseZIndex]=\"12000\"></tzb-loading>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-history/performance-history.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-history/performance-history.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 1024px) {\n  .ui-mp-1,\n  .ui-mp-2,\n  .ui-mp-3,\n  .ui-mp-4,\n  .ui-mp-5,\n  .ui-mp-6,\n  .ui-mp-7,\n  .ui-mp-8,\n  .ui-mp-9,\n  .ui-mp-10,\n  .ui-mp-11,\n  .ui-mp-12 {\n    padding: .5em; }\n  .ui-mp-1 {\n    width: 8.3333%; }\n  .ui-mp-2 {\n    width: 16.6667%; }\n  .ui-mp-3 {\n    width: 25%; }\n  .ui-mp-4 {\n    width: 33.3333%; }\n  .ui-mp-5 {\n    width: 41.6667%; }\n  .ui-mp-6 {\n    width: 50%; }\n  .ui-mp-7 {\n    width: 58.3333%; }\n  .ui-mp-8 {\n    width: 66.6667%; }\n  .ui-mp-9 {\n    width: 75%; }\n  .ui-mp-10 {\n    width: 83.3333%; }\n  .ui-mp-11 {\n    width: 91.6667%; }\n  .ui-mp-12 {\n    width: 100%; } }\n\n.TITbg {\n  background: #ebebeb;\n  padding: 0;\n  margin: 0; }\n\n.chooseTit {\n  width: 80px;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  display: inline-block;\n  cursor: pointer;\n  font-weight: bold; }\n\n.searchTitle {\n  display: inline-block;\n  width: 100px;\n  height: 35px;\n  text-align: center;\n  line-height: 35px;\n  margin-right: 30px; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin-right: 20px; }\n\n.datable {\n  text-align: center; }\n\n.active {\n  color: #19b0c8 !important;\n  border-bottom: 1px solid #19b0c8 !important;\n  background: #fff; }\n\n.date {\n  display: flex; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n.tit {\n  text-align: right; }\n\n.tab {\n  width: 100%;\n  height: 100%; }\n\n.tab .tab-table-1 {\n    width: 100%;\n    height: 500px;\n    overflow: scroll; }\n\n.btn-class1 {\n  background: #f4c201; }\n\n.btn-class2 {\n  background: #19b0c8; }\n\n.chooseOrg {\n  width: 100px;\n  border: 1px solid #19b0c8;\n  text-align: center;\n  background: #19b0c8;\n  color: #fff;\n  height: 23px;\n  line-height: 23px;\n  border-radius: 0px 5px 5px 0px;\n  cursor: pointer; }\n\n.titcenter {\n  height: 26px;\n  line-height: 26px;\n  width: 20px;\n  text-align: center;\n  display: inline-block; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 800px !important;\n  height: auto !important; }\n\n.historyTit {\n  padding: 0px; }\n\n.all {\n  background-color: #fafafa; }\n\n.btn_1 {\n  background: #e6b800; }\n\n.btn_1:hover {\n    background: #dbaf00; }\n\n.btn_2 {\n  background: #19b0c8; }\n\n.btn_2:hover {\n    background: #1598ac; }\n\n.sousuoShow {\n  display: flex; }\n\n.sousuoShow .inputSearch {\n    height: 25px;\n    margin-right: -2px; }\n\n.sousuoShow .checkSearch {\n    width: 104px;\n    height: 25px;\n    background: #19b0c8;\n    color: #fff;\n    border-radius: 0px 3px 3px 0px;\n    line-height: 25px;\n    text-align: center;\n    cursor: pointer; }\n\n:host/deep/ .only-year-month-select[_ngcontent-c14] .form-control[_ngcontent-c14] {\n  width: 130px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZS1oaXN0b3J5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxccGVyZm9ybWFuY2VcXHBlcmZvcm1hbmNlLWhpc3RvcnlcXHBlcmZvcm1hbmNlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTs7Ozs7Ozs7Ozs7O0lBWUksYUFDSixFQUFBO0VBQ0E7SUFDSSxjQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksV0FDSixFQUFBLEVBQUM7O0FBR0w7RUFDSSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFHYjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUdyQjtFQUVJLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1Esa0JBQWtCLEVBQUE7O0FBSTFCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kseUJBQXlCO0VBQ3pCLDJDQUEyQztFQUMzQyxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFGaEI7SUFJUSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQixFQUFBOztBQUl4QjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsZUFBZSxFQUFBOztBQUduQjtFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSx1QkFBdUI7RUFDdkIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLG1CQUFtQixFQUFBOztBQUR2QjtJQUdRLG1CQUFtQixFQUFBOztBQUkzQjtFQUNJLG1CQUFtQixFQUFBOztBQUR2QjtJQUdRLG1CQUFtQixFQUFBOztBQUkzQjtFQUNJLGFBQWEsRUFBQTs7QUFEakI7SUFHUSxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7O0FBSjFCO0lBT1EsWUFBWTtJQUVaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vcGVyZm9ybWFuY2UvcGVyZm9ybWFuY2UtaGlzdG9yeS9wZXJmb3JtYW5jZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpIHtcclxuICAgIC51aS1tcC0xLFxyXG4gICAgLnVpLW1wLTIsXHJcbiAgICAudWktbXAtMyxcclxuICAgIC51aS1tcC00LFxyXG4gICAgLnVpLW1wLTUsXHJcbiAgICAudWktbXAtNixcclxuICAgIC51aS1tcC03LFxyXG4gICAgLnVpLW1wLTgsXHJcbiAgICAudWktbXAtOSxcclxuICAgIC51aS1tcC0xMCxcclxuICAgIC51aS1tcC0xMSxcclxuICAgIC51aS1tcC0xMiB7XHJcbiAgICAgICAgcGFkZGluZzogLjVlbVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTEge1xyXG4gICAgICAgIHdpZHRoOiA4LjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbXAtMiB7XHJcbiAgICAgICAgd2lkdGg6IDE2LjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtMyB7XHJcbiAgICAgICAgd2lkdGg6IDI1JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTQge1xyXG4gICAgICAgIHdpZHRoOiAzMy4zMzMzJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTUge1xyXG4gICAgICAgIHdpZHRoOiA0MS42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTYge1xyXG4gICAgICAgIHdpZHRoOiA1MCVcclxuICAgIH1cclxuICAgIC51aS1tcC03IHtcclxuICAgICAgICB3aWR0aDogNTguMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC04IHtcclxuICAgICAgICB3aWR0aDogNjYuNjY2NyVcclxuICAgIH1cclxuICAgIC51aS1tcC05IHtcclxuICAgICAgICB3aWR0aDogNzUlXHJcbiAgICB9XHJcbiAgICAudWktbXAtMTAge1xyXG4gICAgICAgIHdpZHRoOiA4My4zMzMzJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTExIHtcclxuICAgICAgICB3aWR0aDogOTEuNjY2NyVcclxuICAgIH1cclxuICAgIC51aS1tcC0xMiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgIH1cclxufVxyXG5cclxuLlRJVGJnIHtcclxuICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2hvb3NlVGl0IHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8vIGJhY2tncm91bmQ6ICMwMDk0RDI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNlYXJjaFRpdGxlIHtcclxuICAgIC8vIGJhY2tncm91bmQ6ICMwMDk0RDI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDsgLy8gY29sb3I6I2ZmZjtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmRhdGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMTliMGM4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE5YjBjOCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YSB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi50aXQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50YWIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAudGFiLXRhYmxlLTEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTAwcHg7IC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLWNsYXNzMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRjMjAxO1xyXG59XHJcblxyXG4uYnRuLWNsYXNzMiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xyXG59XHJcblxyXG4uY2hvb3NlT3JnIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxOWIwYzg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRpdGNlbnRlciB7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogODAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaGlzdG9yeVRpdCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5hbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxufVxyXG5cclxuLmJ0bl8xIHtcclxuICAgIGJhY2tncm91bmQ6ICNlNmI4MDA7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZGJhZjAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuXzIge1xyXG4gICAgYmFja2dyb3VuZDogIzE5YjBjODtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxNTk4YWM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zb3VzdW9TaG93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAuaW5wdXRTZWFyY2gge1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0ycHg7XHJcbiAgICB9XHJcbiAgICAuY2hlY2tTZWFyY2gge1xyXG4gICAgICAgIHdpZHRoOiAxMDRweDtcclxuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMTliMGM4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAzcHggM3B4IDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAub25seS15ZWFyLW1vbnRoLXNlbGVjdFtfbmdjb250ZW50LWMxNF0gLmZvcm0tY29udHJvbFtfbmdjb250ZW50LWMxNF0ge1xyXG4gICAgd2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-history/performance-history.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-history/performance-history.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PerformanceHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceHistoryComponent", function() { return PerformanceHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_achievementIndcatorQryEmpHistory_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/achievementIndcatorQryEmpHistory.bean */ "./src/app/pages/tzb/custom/performance/performance-history/bean/achievementIndcatorQryEmpHistory.bean.ts");
/* harmony import */ var _bean_achievementIndcatorQryOrgHistory_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean/achievementIndcatorQryOrgHistory.bean */ "./src/app/pages/tzb/custom/performance/performance-history/bean/achievementIndcatorQryOrgHistory.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_common_directive_monthly_calendar_monthly_calendar_monthly_calendar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/@uisftech/common/directive/monthly-calendar/monthly-calendar/monthly-calendar.component */ "./src/app/@uisftech/common/directive/monthly-calendar/monthly-calendar/monthly-calendar.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




 //个人历史
 //机构历史








var PerformanceHistoryComponent = /** @class */ (function () {
    function PerformanceHistoryComponent(router, httpService, fb, commfunc, confirmationService) {
        this.router = router;
        this.httpService = httpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.confirmationService = confirmationService;
        this.first = 0;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["tableMessage"]; //表格中无数据时显示的内容
        this.orgTreePage = false;
        this.msgs = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["CALENDAR_CN"];
        this.temData = new Date();
        this.adminAddPage = false;
        this.personAddPage = false;
        this.personAddHeader = '选择字段';
        this.isAll = false;
        this.isAll2 = false;
        this.dateOption = []; //日期
        ////////////////////
        this.showthis = true;
        //默认个人历史表头
        this.perTitle = [];
        //选择字段个人
        this.arrListPerson = [];
        // adminHistory: any[];//管理角色历史业绩
        //管理历史表头
        this.adminTtitle = [];
        //选择字段机构
        this.arrListAdmin = [];
        this.userDisplay = false;
        this.flag = false;
        this.personData = [];
        this.adminData = [];
        this.adminPagebtn = false;
        this.adminPage = true;
        this.personPage = false;
        this.achievementIndcatorQryOrgHistoryBean = new _bean_achievementIndcatorQryOrgHistory_bean__WEBPACK_IMPORTED_MODULE_5__["AchievementIndcatorQryOrgHistoryBean"]();
        this.achievementIndcatorQryEmpHistoryBean = new _bean_achievementIndcatorQryEmpHistory_bean__WEBPACK_IMPORTED_MODULE_4__["AchievementIndcatorQryEmpHistoryBean"]();
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_9__["TZB_HTTP_CUS"];
        this.item = 1;
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.nameShow = false; //校验姓名
        this.showMonth = true;
        this.showmonthAdmin = true;
        this.blockDisplay = {
            flag: false
        };
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
        }
        if (this.extParam.managePermission == 'N' || !this.permissionCheck('SID00007_P002_P003_P001')) {
            this.adminPage = false;
            // this.adminPagebtn = true;
            this.personPage = true;
            this.item = 2;
        }
        // if (this.permissionCheck('SID00007_P002_P003_P001')) {
        //     this.adminPage = true;
        //     this.adminPagebtn = true;
        //     this.item = 1;
        // } else {
        //     this.adminPage = false;
        //     this.adminPagebtn = false;
        //     this.personPage = true;
        //     this.item = 2;
        // }
        var data = new Date();
        this.endDt = moment__WEBPACK_IMPORTED_MODULE_12__(data).format('YYYY-MM'); //日期止
        this.startDt = moment__WEBPACK_IMPORTED_MODULE_12__(data).add(-1, 'year').format('YYYY-MM'); //日期起
        this.endDtPer = moment__WEBPACK_IMPORTED_MODULE_12__(data).format('YYYY-MM');
        this.startDtPer = moment__WEBPACK_IMPORTED_MODULE_12__(data).add(-1, 'year').format('YYYY-MM');
    }
    PerformanceHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.queryIndicatorInfoBySceneType({ inputParams: { sceneType: '001' } }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var resultList1_1 = [];
                var resultList2_1 = [];
                var arrTemp1_1 = [];
                var arrTemp2_1 = [];
                var isCheck_1;
                if (data.outputParams.resultList && data.outputParams.resultList.length != 0) {
                    data.outputParams.resultList.forEach(function (element) {
                        if (element.isShow == '1') {
                            isCheck_1 = true;
                            arrTemp1_1.push({ indicatorId: element.indicatorId, indicatorAlias: element.indicatorAlias });
                            arrTemp2_1.push({ indicatorId: element.indicatorId, indicatorAlias: element.indicatorAlias });
                        }
                        else {
                            isCheck_1 = false;
                        }
                        resultList1_1.push({ indicatorId: element.indicatorId, indicatorAlias: element.indicatorAlias, isCheck: isCheck_1 });
                        resultList2_1.push({ indicatorId: element.indicatorId, indicatorAlias: element.indicatorAlias, isCheck: isCheck_1 });
                    });
                }
                _this.adminTtitle = lodash__WEBPACK_IMPORTED_MODULE_11__["clone"](arrTemp1_1); //机构表头
                _this.perTitle = lodash__WEBPACK_IMPORTED_MODULE_11__["clone"](arrTemp2_1); //个人表头
                _this.arrListAdmin = lodash__WEBPACK_IMPORTED_MODULE_11__["clone"](resultList1_1); //机构自定义字段
                _this.arrListPerson = lodash__WEBPACK_IMPORTED_MODULE_11__["clone"](resultList2_1); //个人自定义字段
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
        if (this.adminPage) {
            this.queryAdmin(1); //默认查询机构
        }
        else {
            this.queryPerson(1);
        }
    };
    PerformanceHistoryComponent.prototype.ngOnChanges = function () {
    };
    //翻页
    PerformanceHistoryComponent.prototype.paginate = function (event, item) {
        if (item == 'person') {
            //每页显示的条数
            this.achievementIndcatorQryEmpHistoryBean.pageSize = event.rows * 1;
            //当前页
            this.achievementIndcatorQryEmpHistoryBean.pageNum = event.page + 1;
            this.first = event.page * this.achievementIndcatorQryEmpHistoryBean.pageSize;
            this.queryPerson(2);
        }
        else if (item == 'admin') {
            //每页显示的条数
            this.achievementIndcatorQryOrgHistoryBean.pageSize = event.rows * 1;
            //当前页
            this.achievementIndcatorQryOrgHistoryBean.pageNum = event.page + 1;
            this.first = event.page * this.achievementIndcatorQryOrgHistoryBean.pageSize;
            this.queryAdmin(2);
        }
    };
    //日期
    PerformanceHistoryComponent.prototype.showData = function () {
        if (this.commfunc.transDateN(this.startDtPer) > this.commfunc.transDateN(this.endDtPer)) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '到期日期必须大于开始日期!' }];
            return;
        }
        else if (this.commfunc.transDateN(this.startDt) > this.commfunc.transDateN(this.endDt)) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '到期日期必须大于开始日期!' }];
            return;
        }
    };
    //机构业绩查询
    PerformanceHistoryComponent.prototype.queryFirst = function () {
        this.achievementIndcatorQryEmpHistoryBean.pageSize = 10;
        this.achievementIndcatorQryEmpHistoryBean.pageNum = 1;
        this.first = 0;
        this.queryPerson(2);
    };
    //历史业绩查询(个人角色)
    PerformanceHistoryComponent.prototype.queryPerson = function (i) {
        var _this = this;
        if (!this.nameShow) {
            if (this.startDtPer > this.endDtPer) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '到期日期必须大于开始日期!' }];
                return;
            }
            else {
                var params = {
                    inputParams: {
                        userName: this.achievementIndcatorQryEmpHistoryBean.custName,
                        userId: this.achievementIndcatorQryEmpHistoryBean.empName,
                        orgId: this.treePerId,
                        startDataDt: this.startDtPer ? moment__WEBPACK_IMPORTED_MODULE_12__(this.startDtPer).format('YYYY-MM') : this.startDtPer,
                        endDataDt: this.endDtPer ? moment__WEBPACK_IMPORTED_MODULE_12__(this.endDtPer).format('YYYY-MM') : this.endDtPer,
                        objType: '1',
                        pageNum: this.achievementIndcatorQryEmpHistoryBean.pageNum,
                        pageSize: this.achievementIndcatorQryEmpHistoryBean.pageSize
                    }
                };
                this.httpService.queryHistoryPerformance(params).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.personData = data.outputParams.currDataList;
                        _this.personTotal = data.outputParams.totalNum;
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
        }
    };
    //个人姓名校验-汉字
    PerformanceHistoryComponent.prototype.cusName = function () {
        if (this.achievementIndcatorQryEmpHistoryBean.custName) {
            var reg = /^[\u4E00-\u9FA5]{1,6}$/;
            var checkName = reg.test(this.achievementIndcatorQryEmpHistoryBean.custName);
            if (!checkName) {
                this.nameShow = true;
                return;
            }
            else {
                this.nameShow = false;
                return;
            }
        }
    };
    //个人业绩查询
    PerformanceHistoryComponent.prototype.querySecond = function () {
        this.achievementIndcatorQryOrgHistoryBean.pageSize = 10;
        this.achievementIndcatorQryOrgHistoryBean.pageNum = 1;
        this.first = 0;
        this.queryAdmin(2);
    };
    //历史业绩查询(机构角色)
    PerformanceHistoryComponent.prototype.queryAdmin = function (i) {
        var _this = this;
        if (this.startDt > this.endDt) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '到期日期必须大于开始日期!' }];
            return;
        }
        else {
            var params = {
                inputParams: {
                    orgId: this.treeOrgID,
                    startDataDt: this.startDt ? moment__WEBPACK_IMPORTED_MODULE_12__(this.startDt).format('YYYY-MM') : this.startDt,
                    endDataDt: this.endDt ? moment__WEBPACK_IMPORTED_MODULE_12__(this.endDt).format('YYYY-MM') : this.endDt,
                    objType: '2',
                    pageNum: this.achievementIndcatorQryOrgHistoryBean.pageNum,
                    pageSize: this.achievementIndcatorQryOrgHistoryBean.pageSize
                }
            };
            this.httpService.queryHistoryPerformance(params).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.adminData = data.outputParams.currDataList;
                    _this.adminTotal = data.outputParams.totalNum;
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
    //个人历史业绩数据导出下载
    PerformanceHistoryComponent.prototype.outputPerson = function (i) {
        var _this = this;
        if (Number(this.personTotal) > 50000) {
            this.msgs = [];
            this.msgs = [{ severity: 'info', summary: '提示', detail: '最多支持导出5万条数据' }];
        }
        this.blockDisplay.flag = true;
        var indicatorIdList = ['dataDt', 'userName'];
        if (this.perTitle && this.perTitle.length != 0) {
            this.perTitle.forEach(function (element) {
                indicatorIdList.push(element.indicatorId);
            });
        }
        if (!this.nameShow) {
            var params = {
                inputParams: {
                    exportType: i,
                    userName: this.achievementIndcatorQryEmpHistoryBean.custName,
                    userId: this.achievementIndcatorQryEmpHistoryBean.empNo,
                    orgId: this.treePerId,
                    startDataDt: this.startDtPer ? moment__WEBPACK_IMPORTED_MODULE_12__(this.startDtPer).format('YYYY-MM') : this.startDtPer,
                    endDataDt: this.endDtPer ? moment__WEBPACK_IMPORTED_MODULE_12__(this.endDtPer).format('YYYY-MM') : this.endDtPer,
                    objType: '1',
                    pageNum: this.achievementIndcatorQryOrgHistoryBean.pageNum,
                    pageSize: this.achievementIndcatorQryOrgHistoryBean.pageSize,
                    indicatorIdList: indicatorIdList
                }
            };
            this.httpService.exportPerformance(params).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.fileName = data.outputParams.fileName;
                    _this.filePath = data.outputParams.fileUrl;
                    _this.blockDisplay.flag = false;
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: '下载成功' }];
                    open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_9__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(_this.fileName) + "&fileUrl=" + _this.filePath);
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
    //机构导出
    PerformanceHistoryComponent.prototype.outputAdmin = function (i) {
        var _this = this;
        if (Number(this.adminTotal) > 50000) {
            this.msgs = [];
            this.msgs = [{ severity: 'info', summary: '提示', detail: '最多支持导出5万条数据' }];
        }
        this.blockDisplay.flag = true;
        var indicatorIdList = ['dataDt', 'orgId', 'orgName'];
        if (this.adminTtitle && this.adminTtitle.length != 0) {
            this.adminTtitle.forEach(function (element) {
                indicatorIdList.push(element.indicatorId);
            });
        }
        var params = {
            inputParams: {
                exportType: i,
                orgId: this.treeOrgID,
                startDataDt: this.startDt ? moment__WEBPACK_IMPORTED_MODULE_12__(this.startDt).format('YYYY-MM') : this.startDt,
                endDataDt: this.endDt ? moment__WEBPACK_IMPORTED_MODULE_12__(this.endDt).format('YYYY-MM') : this.endDt,
                objType: '2',
                indicatorIdList: indicatorIdList
            }
        };
        this.httpService.exportPerformance(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.fileName = data.outputParams.fileName;
                _this.filePath = data.outputParams.fileUrl;
                _this.blockDisplay.flag = false;
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '下载成功' }];
                open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_9__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(_this.fileName) + "&fileUrl=" + _this.filePath + "");
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
    //自定义设置
    PerformanceHistoryComponent.prototype.toSet = function () {
        this.router.navigate(["pages/tzb/custom/performance/performance-set"]);
    };
    PerformanceHistoryComponent.prototype.adminChoose = function (i) {
        this.adminPage = true;
        this.personPage = false;
        this.item = i;
        this.achievementIndcatorQryOrgHistoryBean = new _bean_achievementIndcatorQryOrgHistory_bean__WEBPACK_IMPORTED_MODULE_5__["AchievementIndcatorQryOrgHistoryBean"]();
        this.treeOrgName = '';
        this.treeOrgID = '';
        this.first = 0;
        this.queryAdmin(1);
    };
    PerformanceHistoryComponent.prototype.personChoose = function (i) {
        if (this.flag) {
            return;
        }
        this.personPage = true;
        this.adminPage = false;
        this.item = i;
        this.achievementIndcatorQryEmpHistoryBean = new _bean_achievementIndcatorQryEmpHistory_bean__WEBPACK_IMPORTED_MODULE_4__["AchievementIndcatorQryEmpHistoryBean"]();
        this.treePerName = '';
        this.first = 0;
        this.queryPerson(1);
    };
    PerformanceHistoryComponent.prototype.chooseBtn = function () {
        this.personAddPage = true;
    };
    PerformanceHistoryComponent.prototype.save = function () {
        this.personAddPage = false;
    };
    //个人单选
    PerformanceHistoryComponent.prototype.doSelect = function (data) {
        var _this = this;
        var all = true;
        if (data.isCheck) {
            this.perTitle.push(data);
            this.arrListPerson.forEach(function (item) {
                all = item.isCheck && all;
            });
        }
        else {
            try {
                this.perTitle.forEach(function (item, i) {
                    if (item.indicatorId == data.indicatorId) {
                        _this.perTitle.splice(i, 1);
                        throw new Error();
                    }
                });
            }
            catch (error) {
                all = false;
            }
        }
        // all = false;
        this.perTitle.sort(function (a, b) {
            return a.orderCode > b.orderCode;
        });
        this.isAll = all;
        console.log(this.perTitle);
    };
    //个人全选
    PerformanceHistoryComponent.prototype.checkAll = function () {
        debugger;
        var isTrue = this.isAll;
        this.perTitle = [];
        this.arrListPerson.forEach(function (item) {
            item['isCheck'] = isTrue;
        });
        if (this.isAll) {
            this.perTitle = lodash__WEBPACK_IMPORTED_MODULE_11__["clone"](this.arrListPerson);
        }
    };
    //机构字段
    PerformanceHistoryComponent.prototype.chooseBtnAdmin = function () {
        this.adminAddPage = true;
    };
    PerformanceHistoryComponent.prototype.saveAdmin = function () {
        this.adminAddPage = false;
    };
    //机构全选
    PerformanceHistoryComponent.prototype.checkAllAdmin = function () {
        var isTrue = this.isAll2;
        this.adminTtitle = [];
        this.arrListAdmin.forEach(function (item) {
            item['isCheck'] = isTrue;
        });
        if (this.isAll2) {
            this.adminTtitle = lodash__WEBPACK_IMPORTED_MODULE_11__["clone"](this.arrListAdmin);
        }
    };
    //机构单选
    PerformanceHistoryComponent.prototype.doSelectAdmin = function (param) {
        var _this = this;
        var all = true;
        if (param.isCheck) {
            this.adminTtitle.push(param);
            this.arrListAdmin.forEach(function (item) {
                all = item.isCheck && all;
            });
        }
        else {
            try {
                this.adminTtitle.forEach(function (item, i) {
                    if (item.indicatorId == param.indicatorId) {
                        _this.adminTtitle.splice(i, 1);
                        throw new Error();
                    }
                });
            }
            catch (error) {
                all = false;
            }
        }
        this.isAll2 = all;
        console.log(this.adminTtitle);
    };
    PerformanceHistoryComponent.prototype.orgTreeShow = function () {
        this.orgTreePage = true;
        this.chooseNum = 2;
    };
    PerformanceHistoryComponent.prototype.treeCallPer = function (param) {
        this.orgTreePage = false;
        this.treePerName = param.orgName;
        this.treePerId = param.orgId;
    };
    PerformanceHistoryComponent.prototype.treeCallAdmin = function (param) {
        this.orgTreePage = false;
        this.treeOrgName = param.orgName;
        this.treeOrgID = param.orgId;
    };
    PerformanceHistoryComponent.prototype.perTreeShow = function () {
        this.orgTreePage = true;
        this.chooseNum = 1;
    };
    //按钮权限
    PerformanceHistoryComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    PerformanceHistoryComponent.prototype.comeback = function () {
        this.router.navigate(["pages/tzb/uisftech-view/workdesk"]);
    };
    //部门重置
    PerformanceHistoryComponent.prototype.resetAdmin = function () {
        this.treeOrgName = '';
        this.treeOrgID = '';
        this.startDt = '';
        this.endDt = '';
        this.showmonthAdmin = !this.showmonthAdmin;
    };
    //个人重置
    PerformanceHistoryComponent.prototype.resetPer = function () {
        this.achievementIndcatorQryEmpHistoryBean.custName = '';
        this.achievementIndcatorQryEmpHistoryBean.empNo = '';
        this.achievementIndcatorQryEmpHistoryBean.empName = '';
        this.treePerName = '';
        this.treePerId = '';
        this.startDtPer = '';
        this.endDtPer = '';
        // this.showMonth = false;
        this.showMonth = !this.showMonth;
    };
    //////////////////////
    PerformanceHistoryComponent.prototype.tabChange = function (event) {
        var gundam_class = document.getElementsByClassName('gundam');
        gundam_class[event.index].children[0].style.width = '100%';
        this.showthis = false;
        this.showthis = true;
    };
    PerformanceHistoryComponent.prototype.userChoose = function () {
        this.userDisplay = true;
    };
    PerformanceHistoryComponent.prototype.returnOwnerInfo = function (event) {
        console.log(event);
        this.userDisplay = false;
        this.achievementIndcatorQryEmpHistoryBean.empName = event[0].tellerName;
        this.achievementIndcatorQryEmpHistoryBean.empNo = event[0].tellerId;
    };
    PerformanceHistoryComponent.prototype.tellerCalll = function () {
        var _this = this;
        var params = {
            tellerId: this.achievementIndcatorQryEmpHistoryBean.empName
        };
        this.httpService.queryTellerById(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.achievementIndcatorQryEmpHistoryBean.custName = data.tellerName;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(app_uisftech_common_directive_monthly_calendar_monthly_calendar_monthly_calendar_component__WEBPACK_IMPORTED_MODULE_10__["OnlyYearMonthSelectComponent"]),
        __metadata("design:type", app_uisftech_common_directive_monthly_calendar_monthly_calendar_monthly_calendar_component__WEBPACK_IMPORTED_MODULE_10__["OnlyYearMonthSelectComponent"])
    ], PerformanceHistoryComponent.prototype, "child", void 0);
    PerformanceHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-performance-history',
            template: __webpack_require__(/*! ./performance-history.component.html */ "./src/app/pages/tzb/custom/performance/performance-history/performance-history.component.html"),
            styles: [__webpack_require__(/*! ./performance-history.component.scss */ "./src/app/pages/tzb/custom/performance/performance-history/performance-history.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_8__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__["CusOperationHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_8__["Commfunc"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], PerformanceHistoryComponent);
    return PerformanceHistoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-set/bean/delete.bean.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-set/bean/delete.bean.ts ***!
  \**********************************************************************************/
/*! exports provided: PerformanceSetDeleteBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceSetDeleteBean", function() { return PerformanceSetDeleteBean; });
var PerformanceSetDeleteBean = /** @class */ (function () {
    function PerformanceSetDeleteBean() {
    }
    return PerformanceSetDeleteBean;
}());

// export class infolist{
//     indicatorCode:string;
//     dimensionCode:string;
// }


/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-set/performance-set.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-set/performance-set.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"'业绩自定义设置'\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12 cont\">\r\n        <div class=\"ui-g-5 left\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-12 tit\"><img src=\"../../../../../../assets/layout/images/titYJ.png\">指标类别</div>\r\n                <div class=\"ui-g-12 treeDd\">\r\n                    <p-tree [value]=\"treeDate\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\" (onNodeExpand)=\"nodeCheck1($event)\">\r\n                        <ng-template let-node pTemplate=\"default\">\r\n                            <span>{{node.label1}}</span>\r\n                        </ng-template>\r\n                    </p-tree>\r\n                    <!-- <tree-directive tree-value=\"{{treeDate}}\" (treeClick)=\"treeClick($event)\" tree-expan=true tree-select-status=\"false\"></tree-directive> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <div class=\"ui-g-7 right\">\r\n            <div class=\"ui-g-12 dimension\">\r\n                <div class=\"ui-g-12 tit\"><img src=\"../../../../../../assets/layout/images/titYJ.png\">指标维度</div>\r\n                <div class=\"ui-g-12 kuang\">\r\n                    <span *ngFor=\"let item of array;let i = index\">\r\n                    {{item.indicatorAlias}}\r\n                    <span (click)=\"deleteClick(item,i)\"><img class=\"delImg\" src=\"../../../../../../assets/layout/images/deleteYJ.png\"></span>\r\n                    </span>\r\n                    <div class=\"ui-g-12 zhibiaobtn\">\r\n                        <button pButton label=\"确定\" (click)=\"doThis()\"></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 choosePage\">\r\n                <div class=\"ui-g-12 tit\"><img src=\"../../../../../../assets/layout/images/titYJ.png\">已选择的指标</div>\r\n                <!-- 不要删 -->\r\n                <!-- <div class=\"ui-g-12 typeBG\">\r\n                    <span class=\"radiobtn\">排名类别:</span>\r\n                    <p-radioButton class=\"radiobtn\" value=\"1\" label=\"全行\" [(ngModel)]=\"performanceBean.rank1\"></p-radioButton>\r\n                    <p-radioButton class=\"radiobtn\" value=\"2\" label=\"区域\" [(ngModel)]=\"performanceBean.rank1\"></p-radioButton>\r\n                </div> -->\r\n                <!-- 不要删 -->\r\n                <div class=\"ui-g-12 table\">\r\n                    <p-dataTable [value]=\"arrayTemp\" dragdrop=\"true\" [emptyMessage]=\"tabMesg\">\r\n                        <p-column field=\"title\" header=\"指标维度\">\r\n                            <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                {{car.indicatorAlias}}\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <p-column header=\"上升\">\r\n                            <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                <a class=\"biaohzi\" (click)=\"up(car)\"><img src=\"../../../../../../assets/layout/images/upYJ.png\"></a>\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <p-column header=\"下降\">\r\n                            <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                <a class=\"biaohzi\" (click)=\"down(car)\"><img src=\"../../../../../../assets/layout/images/downYJ.png\"></a>\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <p-column header=\"操作\" *ngIf=\"permissionCheck('SID00007_P002_P002_P001')\">\r\n                            <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                <div class=\"table-button\">\r\n                                    <span class=\"tabelDeleteIco\" (click)=\"delete(car)\">删除</span>\r\n                                </div>\r\n                            </ng-template>\r\n                        </p-column>\r\n                    </p-dataTable>\r\n                </div>\r\n               <!-- <div class=\"ui-g-12 tab\">\r\n                    <table id=\"table\" class=\"table\" >\r\n                        <tr>\r\n                            <th>指标维度</th>\r\n                            <th>上升</th>\r\n                            <th>下降</th>\r\n                            <th>操作</th>\r\n                        </tr>\r\n                         <tr>\r\n                            <td>{{arrayTemp.alias}}</td>\r\n                            <td><a class=\"biaohzi\" (click)=\"up(arrayTemp)\"><img src=\"../../../../../../assets/layout/images/upYJ.png\"></a></td>\r\n                            <td><a class=\"biaohzi\" (click)=\"down(arrayTemp)\"><img src=\"../../../../../../assets/layout/images/downYJ.png\"></a></td>\r\n                            <td><span class=\"tabelDeleteIco\" (click)=\"delete(arrayTemp)\">删除</span></td>\r\n                        </tr>\r\n                    </table>\r\n               </div> -->\r\n                <div class=\"ui-g-12 btn\">\r\n                    <button pButton label=\"保存\" (click)=\"save()\"></button>\r\n                    <button pButton label=\"重置\" (click)=\"reset()\"></button>\r\n                    <button pButton label=\"返回工作台\" (click)=\"comeback()\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n        \r\n</div>\r\n\r\n\r\n\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-set/performance-set.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-set/performance-set.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont {\n  display: flex; }\n  .cont .right {\n    display: flex;\n    flex-direction: column;\n    border-left: 1px solid #e6e6e6; }\n  .cont .right .dimension {\n      border-bottom: 1px dashed #ddd; }\n  .cont .right .dimension .kuang {\n        border: 1px solid #e6e6e6;\n        margin-bottom: 15px;\n        margin-top: 15px; }\n  .cont .right .dimension .kuang > span {\n          height: 50px;\n          line-height: 50px;\n          background: #edf9fa;\n          color: #005574;\n          padding: 5px;\n          margin-right: 7px; }\n  .cont .right .dimension .kuang .zhibiaobtn {\n          text-align: right;\n          margin-right: 20px; }\n  .cont .right .choosePage .typeBG {\n      background: #F3F2F2;\n      margin-top: 15px;\n      margin-bottom: 15px; }\n  .cont .right .choosePage .typeBG .radiobtn {\n        margin-right: 20px; }\n  .cont .right .choosePage .table {\n      text-align: center; }\n  .cont .right .choosePage .table .biaohzi {\n        cursor: pointer; }\n  .cont .right .choosePage .btn {\n      text-align: center; }\n  .tit {\n  color: #19b0c8;\n  font-size: 16px; }\n  .tit > img {\n    margin-right: 8px; }\n  .delImg {\n  cursor: pointer; }\n  :host /deep/ .ui-tree .ui-treenode.ui-treenode-leaf > .ui-treenode-content > .ui-tree-toggler {\n  visibility: inherit; }\n  :host /deep/ .ui-datatable .ui-datatable-thead > tr > th .ui-column-title {\n  height: 35px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZS1zZXQvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxwZXJmb3JtYW5jZVxccGVyZm9ybWFuY2Utc2V0XFxwZXJmb3JtYW5jZS1zZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUE7RUFEakI7SUFHUSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QixFQUFBO0VBTHRDO01BT1ksOEJBQThCLEVBQUE7RUFQMUM7UUFTZ0IseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixnQkFBZ0IsRUFBQTtFQVhoQztVQWFvQixZQUFZO1VBQ1osaUJBQWlCO1VBQ2pCLG1CQUFtQjtVQUNuQixjQUFjO1VBQ2QsWUFBWTtVQUNaLGlCQUFpQixFQUFBO0VBbEJyQztVQXFCb0IsaUJBQWlCO1VBQ2pCLGtCQUFrQixFQUFBO0VBdEJ0QztNQTRCZ0IsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixtQkFBbUIsRUFBQTtFQTlCbkM7UUFnQ29CLGtCQUFrQixFQUFBO0VBaEN0QztNQW9DZ0Isa0JBQWtCLEVBQUE7RUFwQ2xDO1FBc0NvQixlQUFlLEVBQUE7RUF0Q25DO01BOERnQixrQkFBa0IsRUFBQTtFQU1sQztFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUE7RUFGbkI7SUFJUSxpQkFBaUIsRUFBQTtFQUl6QjtFQUNJLGVBQWUsRUFBQTtFQUduQjtFQUNJLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9wZXJmb3JtYW5jZS9wZXJmb3JtYW5jZS1zZXQvcGVyZm9ybWFuY2Utc2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5yaWdodCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgICAgICAuZGltZW5zaW9uIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xyXG4gICAgICAgICAgICAua3Vhbmcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgPnNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWRmOWZhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA1NTc0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC56aGliaWFvYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNob29zZVBhZ2Uge1xyXG4gICAgICAgICAgICAudHlwZUJHIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGM0YyRjI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgIC5yYWRpb2J0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50YWJsZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAuYmlhb2h6aSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IC8vIC50YWJ7XHJcbiAgICAgICAgICAgIC8vICAgICAudGFibGV7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGh7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbG9yOiByZ2IoMCwgODUsIDExNik7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiDlvq7ova/pm4Xpu5E7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmOWZhO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICB0ZHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29sb3I6ICM2ZDZkNmQ7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGl0IHtcclxuICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgPmltZyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kZWxJbWcge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLnVpLXRyZWUgLnVpLXRyZWVub2RlLnVpLXRyZWVub2RlLWxlYWY+LnVpLXRyZWVub2RlLWNvbnRlbnQ+LnVpLXRyZWUtdG9nZ2xlciB7XHJcbiAgICB2aXNpYmlsaXR5OiBpbmhlcml0O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLnVpLWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyPnRoIC51aS1jb2x1bW4tdGl0bGUge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance-set/performance-set.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance-set/performance-set.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PerformanceSetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceSetComponent", function() { return PerformanceSetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bean_performance_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/performance.bean */ "./src/app/pages/tzb/custom/performance/bean/performance.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_delete_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean/delete.bean */ "./src/app/pages/tzb/custom/performance/performance-set/bean/delete.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PerformanceSetComponent = /** @class */ (function () {
    function PerformanceSetComponent(changeDetectorRef, httpService, commfunc, router) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"]; //表格中无数据时显示的内容
        this.performanceBean = new _bean_performance_bean__WEBPACK_IMPORTED_MODULE_2__["PerformanceBean"]();
        this.msgs = [];
        this.array = []; //指标维度
        this.tempArr = [];
        this.arrayTemp = []; //已选择的指标
        this.param = {};
        this.temp = [];
        this.treeDate = [];
        this.performanceList = [];
        this.dataTable = [];
        this.currentList = [];
        this.performanceSetDeleteBean = new _bean_delete_bean__WEBPACK_IMPORTED_MODULE_5__["PerformanceSetDeleteBean"]();
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        this.httpService.queryIndicatorTree({ inputParams: { sceneType: '001', indicatorKindId: 'PVL' } }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.outputParams.indicatorMap && data.outputParams.indicatorMap.subIndicatorList) {
                    _this.treeDate = _this.toChangeTree(data.outputParams.indicatorMap.subIndicatorList);
                    console.log(_this.treeDate);
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
        this.querySelfDefineIndicator();
        // this.performanceBean.rank1 = '2';
    }
    //初始化
    PerformanceSetComponent.prototype.ngOnInit = function () {
        this.cols = [
            { field: 'title', header: '指标排序维度' },
            { field: 'up', header: '上升' },
            { field: 'down', header: '下降' },
            { field: 'delete', header: '删除' }
        ];
        // this.array = []
        this.cars = [
            {
                title: '存款FTP折前',
                up: '1',
                down: '2',
                delete: '3'
            },
            {
                title: '存款FTP折前2223',
                up: '3',
                down: '3',
                delete: '4'
            },
            {
                title: '存款FTP折前22234',
                up: '3',
                down: '3',
                delete: '4'
            },
            {
                title: '存款FTP折前222345',
                up: '3',
                down: '3',
                delete: '4'
            }
        ];
    };
    //
    PerformanceSetComponent.prototype.querySelfDefineIndicator = function () {
        var _this = this;
        this.httpService.querySelfDefineIndicator({ inputParams: { sceneType: '001', userId: this.userId } }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.arrayTemp = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](data.outputParams.indicatorList);
                _this.array = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](data.outputParams.indicatorList);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //上
    PerformanceSetComponent.prototype.up = function (car) {
        var carList = JSON.parse(JSON.stringify(this.arrayTemp));
        this.cars = [];
        var i = this.getIndex(carList, car);
        if (i != -1 && i != 0) {
            var a = carList[i - 1];
            carList[i] = a;
            carList[i - 1] = car;
        }
        this.arrayTemp = carList;
        if (carList && carList.length != 0) {
            var lenth = this.array.length;
            this.array = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](this.arrayTemp.concat(this.array.slice(carList.length, lenth)));
        }
    };
    //下
    PerformanceSetComponent.prototype.down = function (car) {
        var carList = JSON.parse(JSON.stringify(this.arrayTemp));
        this.cars = [];
        var i = this.getIndex(carList, car);
        if (i < carList.length - 1) {
            var a = carList[i + 1];
            carList[i] = a;
            carList[i + 1] = car;
        }
        this.arrayTemp = carList;
        if (carList && carList.length != 0) {
            var lenth = this.array.length;
            this.array = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](this.arrayTemp.concat(this.array.slice(carList.length, lenth)));
        }
    };
    //删除
    PerformanceSetComponent.prototype.delete = function (car) {
        this.currentList = [];
        this.currentList.push(car);
        this.performanceSetDeleteBean.infoList = this.currentList;
        var k = this.getIndex(this.array, car);
        if (k != -1) {
            this.array.splice(k, 1);
        }
        var carList = JSON.parse(JSON.stringify(this.arrayTemp));
        var i = this.getIndex(carList, car);
        this.cars = [];
        if (i != -1) {
            carList.splice(i, 1);
        }
        this.arrayTemp = carList;
        this.save();
    };
    //移除自定义
    PerformanceSetComponent.prototype.deleteClick = function (item, i) {
        this.currentList = [];
        this.array.splice(i, 1);
    };
    PerformanceSetComponent.prototype.getIndex = function (list, item) {
        var index = -1;
        for (var i = 0; i < list.length; i++) {
            if (list[i].indicatorId == item.indicatorId) {
                index = i;
                break;
            }
        }
        return index;
    };
    //树选择
    PerformanceSetComponent.prototype.nodeCheck = function (event) {
        var _this = this;
        console.log(event);
        if (event.node.id == '1') {
            if (event.node.value && event.node.value != '' && event.node.label && event.node.label != '') {
                var flag_1 = false;
                this.codename = {
                    indicatorId: event.node.value,
                    indicatorAlias: event.node.label
                };
                this.array.forEach(function (element) {
                    if (event.node.value == element.indicatorId) {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: '已选中指标不可再选' });
                        return flag_1 = true;
                    }
                });
                if (!flag_1) {
                    this.array.push(this.codename);
                }
            }
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: '此指标不可选' });
            return;
        }
    };
    //树展开
    PerformanceSetComponent.prototype.nodeCheck1 = function (event) {
        var _this = this;
        console.log(event);
        var params = {
            inputParams: { sceneType: '001', indicatorKindId: event.node.value }
        };
        this.httpService.queryIndicatorTree(params).subscribe(function (data) {
            var temp = data.outputParams.indicatorMap.subIndicatorList;
            if (temp && temp.length != 0) {
                event.node.children = _this.toChangeTree(temp);
            }
            else {
                event.node.children = [];
            }
        });
    };
    //确定
    PerformanceSetComponent.prototype.doThis = function () {
        this.arrayTemp = lodash__WEBPACK_IMPORTED_MODULE_1__["clone"](this.array);
    };
    //重置
    PerformanceSetComponent.prototype.reset = function () {
        var _this = this;
        var bean = {
            inputParams: {}
        };
        bean['inputParams']['sceneType'] = '001';
        bean['inputParams']['operType'] = '3';
        bean['inputParams']['userId'] = this.userId;
        this.httpService.modifySelfDefineIndicator(bean).subscribe(function (data) {
            _this.querySelfDefineIndicator();
        });
    };
    //保存
    PerformanceSetComponent.prototype.save = function () {
        var _this = this;
        var bean = {
            inputParams: {}
        };
        var arrTemp = [], objTemp = {};
        if (this.arrayTemp && this.arrayTemp.lenth != 0) {
            this.arrayTemp.forEach(function (element) {
                arrTemp.push({ indicatorId: element['indicatorId'] });
            });
        }
        bean['inputParams']['indicatorIdGroup'] = JSON.stringify(arrTemp);
        bean['inputParams']['sceneType'] = '001';
        bean['inputParams']['operType'] = '1';
        bean['inputParams']['userId'] = this.userId;
        this.httpService.modifySelfDefineIndicator(bean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: '保存成功' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //返回工作台
    PerformanceSetComponent.prototype.comeback = function () {
        this.router.navigate(["pages/tzb/uisftech-view/workdesk"]);
    };
    //按钮权限
    PerformanceSetComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    //
    PerformanceSetComponent.prototype.toChangeTree = function (param) {
        var _this = this;
        var tempArr = [];
        param.forEach(function (element1) {
            var tempObj = {};
            if (element1.isAtomIndicator == '1') { //原子指标
                tempObj['id'] = 1;
                tempObj['value'] = element1.indicatorId;
                tempObj['label'] = element1.indicatorAlias;
                tempObj['label1'] = element1.indicatorName;
                tempObj['expanded'] = true;
                if (_this.array && _this.array.length != 0) {
                    _this.array.forEach(function (element2) {
                        if (element1.indicatorId == element2.indicatorId) {
                            tempObj['selectable'] = false;
                        }
                    });
                }
            }
            else {
                tempObj['value'] = element1.indicatorKindId;
                tempObj['label'] = element1.indicatorKindAlias;
                tempObj['label1'] = element1.indicatorKindName;
            }
            tempArr.push(tempObj);
        });
        return tempArr;
    };
    PerformanceSetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-performance-set',
            template: __webpack_require__(/*! ./performance-set.component.html */ "./src/app/pages/tzb/custom/performance/performance-set/performance-set.component.html"),
            styles: [__webpack_require__(/*! ./performance-set.component.scss */ "./src/app/pages/tzb/custom/performance/performance-set/performance-set.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], PerformanceSetComponent);
    return PerformanceSetComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance.module.ts ***!
  \********************************************************************/
/*! exports provided: PerformanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceModule", function() { return PerformanceModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _performance_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./performance.routing */ "./src/app/pages/tzb/custom/performance/performance.routing.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _performance_details_org_performance_details_org_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./performance-details-org/performance-details-org.component */ "./src/app/pages/tzb/custom/performance/performance-details-org/performance-details-org.component.ts");
/* harmony import */ var _performance_details_performance_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./performance-details/performance-details.component */ "./src/app/pages/tzb/custom/performance/performance-details/performance-details.component.ts");
/* harmony import */ var _performance_set_performance_set_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./performance-set/performance-set.component */ "./src/app/pages/tzb/custom/performance/performance-set/performance-set.component.ts");
/* harmony import */ var _performance_history_performance_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./performance-history/performance-history.component */ "./src/app/pages/tzb/custom/performance/performance-history/performance-history.component.ts");
/* harmony import */ var app_pages_tzb_custom_performance_performance_history_history_admin_history_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/custom/performance/performance-history/history-admin/history-admin.component */ "./src/app/pages/tzb/custom/performance/performance-history/history-admin/history-admin.component.ts");
/* harmony import */ var app_pages_tzb_custom_performance_performance_history_history_person_history_person_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/tzb/custom/performance/performance-history/history-person/history-person.component */ "./src/app/pages/tzb/custom/performance/performance-history/history-person/history-person.component.ts");
/* harmony import */ var app_uisftech_common_directive_monthly_calendar_monthly_calendar_monthly_calendar_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/@uisftech/common/directive/monthly-calendar/monthly-calendar/monthly-calendar.module */ "./src/app/@uisftech/common/directive/monthly-calendar/monthly-calendar/monthly-calendar.module.ts");
/* harmony import */ var _institutions_mapping_institutions_mapping_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./institutions-mapping/institutions-mapping.component */ "./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping.component.ts");
/* harmony import */ var _institutions_mapping_institutions_mapping_relation_institutions_mapping_relation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./institutions-mapping/institutions-mapping-relation/institutions-mapping-relation.component */ "./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping-relation/institutions-mapping-relation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//业绩展示
 //业绩详情机构下钻
 //业绩查询
 //自定义设置
 //历史业绩





var PerformanceModule = /** @class */ (function () {
    function PerformanceModule() {
    }
    PerformanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _performance_routing__WEBPACK_IMPORTED_MODULE_4__["PerformanceRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                app_uisftech_common_directive_monthly_calendar_monthly_calendar_monthly_calendar_module__WEBPACK_IMPORTED_MODULE_12__["OnlyYearMonthSelectModule"]
            ],
            declarations: [
                _performance_details_performance_details_component__WEBPACK_IMPORTED_MODULE_7__["PerformanceDetailsComponent"],
                _performance_set_performance_set_component__WEBPACK_IMPORTED_MODULE_8__["PerformanceSetComponent"],
                _performance_history_performance_history_component__WEBPACK_IMPORTED_MODULE_9__["PerformanceHistoryComponent"],
                _performance_details_org_performance_details_org_component__WEBPACK_IMPORTED_MODULE_6__["PerformanceDetailsOrgComponent"],
                app_pages_tzb_custom_performance_performance_history_history_admin_history_admin_component__WEBPACK_IMPORTED_MODULE_10__["HistoryAdminComponent"],
                app_pages_tzb_custom_performance_performance_history_history_person_history_person_component__WEBPACK_IMPORTED_MODULE_11__["HistoryPersonComponent"],
                _institutions_mapping_institutions_mapping_component__WEBPACK_IMPORTED_MODULE_13__["InstitutionsMappingComponent"],
                _institutions_mapping_institutions_mapping_relation_institutions_mapping_relation_component__WEBPACK_IMPORTED_MODULE_14__["InstitutionsMappingRelationComponent"]
            ],
            providers: []
        })
    ], PerformanceModule);
    return PerformanceModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/performance.routing.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/performance.routing.ts ***!
  \*********************************************************************/
/*! exports provided: routes, PerformanceRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceRouting", function() { return PerformanceRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _performance_details_performance_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./performance-details/performance-details.component */ "./src/app/pages/tzb/custom/performance/performance-details/performance-details.component.ts");
/* harmony import */ var _performance_set_performance_set_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./performance-set/performance-set.component */ "./src/app/pages/tzb/custom/performance/performance-set/performance-set.component.ts");
/* harmony import */ var _performance_history_performance_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./performance-history/performance-history.component */ "./src/app/pages/tzb/custom/performance/performance-history/performance-history.component.ts");
/* harmony import */ var _performance_details_org_performance_details_org_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./performance-details-org/performance-details-org.component */ "./src/app/pages/tzb/custom/performance/performance-details-org/performance-details-org.component.ts");
/* harmony import */ var app_pages_tzb_custom_performance_performance_history_history_admin_history_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/performance/performance-history/history-admin/history-admin.component */ "./src/app/pages/tzb/custom/performance/performance-history/history-admin/history-admin.component.ts");
/* harmony import */ var app_pages_tzb_custom_performance_performance_history_history_person_history_person_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/performance/performance-history/history-person/history-person.component */ "./src/app/pages/tzb/custom/performance/performance-history/history-person/history-person.component.ts");
/* harmony import */ var _institutions_mapping_institutions_mapping_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./institutions-mapping/institutions-mapping.component */ "./src/app/pages/tzb/custom/performance/institutions-mapping/institutions-mapping.component.ts");

 //业绩详情
 //自定义设置
 //业绩历史
 //业绩详情机构下钻



var routes = [
    {
        path: '',
        children: [
            {
                path: 'performance-details',
                component: _performance_details_performance_details_component__WEBPACK_IMPORTED_MODULE_1__["PerformanceDetailsComponent"],
            },
            {
                path: 'performance-set',
                component: _performance_set_performance_set_component__WEBPACK_IMPORTED_MODULE_2__["PerformanceSetComponent"]
            },
            {
                path: 'performance-history',
                component: _performance_history_performance_history_component__WEBPACK_IMPORTED_MODULE_3__["PerformanceHistoryComponent"],
                children: [
                    {
                        path: 'history-admin',
                        component: app_pages_tzb_custom_performance_performance_history_history_admin_history_admin_component__WEBPACK_IMPORTED_MODULE_5__["HistoryAdminComponent"]
                    },
                    {
                        path: 'history-person',
                        component: app_pages_tzb_custom_performance_performance_history_history_person_history_person_component__WEBPACK_IMPORTED_MODULE_6__["HistoryPersonComponent"]
                    }
                ]
            },
            {
                path: 'performance-details-org',
                component: _performance_details_org_performance_details_org_component__WEBPACK_IMPORTED_MODULE_4__["PerformanceDetailsOrgComponent"]
            },
            {
                path: 'institutions-mapping',
                component: _institutions_mapping_institutions_mapping_component__WEBPACK_IMPORTED_MODULE_7__["InstitutionsMappingComponent"]
            },
        ]
    }
];
var PerformanceRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=performance-performance-module.js.map