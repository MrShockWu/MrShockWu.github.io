(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workflow-workflow-module"],{

/***/ "./src/app/pages/tzb/workflow/temporayWorkFlow/temporayWorkFlow.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/temporayWorkFlow/temporayWorkFlow.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'流程批量终止'\"></header-title>\r\n    <div class=\"ui-g-12\" style=\"margin-top:20px\">\r\n        <div class=\"ui-g-3\"></div>\r\n        <div class=\"ui-g-3\" style=\"text-align:right\">\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"time\">\r\n        </div>\r\n        <div class=\"ui-g-2\"> 天\r\n            <button pButton type=\"button\" label=\"提交\" (click)='save()' style=\"margin-left:20px\"></button>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/temporayWorkFlow/temporayWorkFlow.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/temporayWorkFlow/temporayWorkFlow.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi93b3JrZmxvdy90ZW1wb3JheVdvcmtGbG93L3RlbXBvcmF5V29ya0Zsb3cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/temporayWorkFlow/temporayWorkFlow.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/temporayWorkFlow/temporayWorkFlow.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TemporayWorkFlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemporayWorkFlowComponent", function() { return TemporayWorkFlowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TemporayWorkFlowComponent = /** @class */ (function () {
    function TemporayWorkFlowComponent(workflowHttpService, confirmationService) {
        this.workflowHttpService = workflowHttpService;
        this.confirmationService = confirmationService;
    }
    TemporayWorkFlowComponent.prototype.ngOnInit = function () {
    };
    TemporayWorkFlowComponent.prototype.save = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要提交吗?',
            accept: function () {
                // 条件
                var param = { days: _this.time };
                _this.workflowHttpService.checkCloseProcess(param).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.meaasge });
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
    TemporayWorkFlowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'temporayWorkFlow',
            template: __webpack_require__(/*! ./temporayWorkFlow.component.html */ "./src/app/pages/tzb/workflow/temporayWorkFlow/temporayWorkFlow.component.html"),
            styles: [__webpack_require__(/*! ./temporayWorkFlow.component.scss */ "./src/app/pages/tzb/workflow/temporayWorkFlow/temporayWorkFlow.component.scss")],
            providers: [_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], TemporayWorkFlowComponent);
    return TemporayWorkFlowComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/bean/flow-catalog.bean.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/bean/flow-catalog.bean.ts ***!
  \*******************************************************************************************/
/*! exports provided: FlowCatalogBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowCatalogBean", function() { return FlowCatalogBean; });
var FlowCatalogBean = /** @class */ (function () {
    function FlowCatalogBean() {
    }
    return FlowCatalogBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-add/flow-catalog-add.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-add/flow-catalog-add.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userform\">\r\n    <div class=\"ui-g-12\">\r\n        <span>父节点：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowCatalogBean.parentName\" disabled formControlName=\"parentName\" name=\"parentName\">\r\n        <div class=\"ui-g-12\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['parentName'].valid&&userform.controls['parentName'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','parentName')\"> 父节点不能为空！</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>名称：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowCatalogBean.name\" formControlName=\"name\" name=\"name\">\r\n        <div class=\"ui-g-12\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['name'].valid&&userform.controls['name'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','name')\"> 名称不能为空！</p>\r\n            <p [hidden]=\"!userform.hasError('pattern','name')\"> 最长允许输入120位且不能有空格!</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>备注：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowCatalogBean.display\" formControlName=\"display\" name=\"display\">\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"保存\" (click)='preserveClick()'></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)='reset()'></button>\r\n    </div>\r\n</form>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-add/flow-catalog-add.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-add/flow-catalog-add.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form span {\n  width: 35%;\n  display: inline-block;\n  text-align: right; }\n\nform input {\n  width: 30%; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LWRlc2lnbi9mbG93LWNhdGFsb2cvZmxvdy1jYXRhbG9nLWFkZC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFx3b3JrZmxvd1xcd29ya2Zsb3ctZGVzaWduXFxmbG93LWNhdGFsb2dcXGZsb3ctY2F0YWxvZy1hZGRcXGZsb3ctY2F0YWxvZy1hZGQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBSnpCO0VBT1EsVUFBVSxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi93b3JrZmxvdy93b3JrZmxvdy1kZXNpZ24vZmxvdy1jYXRhbG9nL2Zsb3ctY2F0YWxvZy1hZGQvZmxvdy1jYXRhbG9nLWFkZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcclxuICAgIHNwYW57XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBpbnB1dHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-add/flow-catalog-add.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-add/flow-catalog-add.ts ***!
  \******************************************************************************************************/
/*! exports provided: FlowCatalogAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowCatalogAdd", function() { return FlowCatalogAdd; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_flow_catalog_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/flow-catalog.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/bean/flow-catalog.bean.ts");
/* harmony import */ var _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlowCatalogAdd = /** @class */ (function () {
    function FlowCatalogAdd(workflowHttpService, fb) {
        this.workflowHttpService = workflowHttpService;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        this.flowCatalogBean = new _bean_flow_catalog_bean__WEBPACK_IMPORTED_MODULE_2__["FlowCatalogBean"]();
    }
    FlowCatalogAdd.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\S{1,120}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'parentName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'display': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    FlowCatalogAdd.prototype.ngOnChanges = function () {
        this.fuzhi();
    };
    FlowCatalogAdd.prototype.fuzhi = function () {
        if (this.inValue !== undefined) {
            this.flowCatalogBean.parentName = this.inValue.text;
            this.flowCatalogBean.parentId = this.inValue.id;
        }
    };
    // 保存
    FlowCatalogAdd.prototype.preserveClick = function () {
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
        this.workflowHttpService.IProcessDirectoryServiceAdd(this.flowCatalogBean).subscribe(function (data) {
            if (data.msg.returnCode.code == "success") {
                _this.outValue.emit(false);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.msg.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败" });
        });
    };
    //重置
    FlowCatalogAdd.prototype.reset = function () {
        this.flowCatalogBean.name = '',
            this.flowCatalogBean.display = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FlowCatalogAdd.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FlowCatalogAdd.prototype, "outValue", void 0);
    FlowCatalogAdd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flow-catalog-add',
            template: __webpack_require__(/*! ./flow-catalog-add.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-add/flow-catalog-add.html"),
            styles: [__webpack_require__(/*! ./flow-catalog-add.scss */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-add/flow-catalog-add.scss")],
            providers: [_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FlowCatalogAdd);
    return FlowCatalogAdd;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-look/flow-catalog-look.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-look/flow-catalog-look.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        父节点：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        名称：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        备注：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-3\"></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"保存\"></button></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"取消\"></button></div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-look/flow-catalog-look.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-look/flow-catalog-look.ts ***!
  \********************************************************************************************************/
/*! exports provided: FlowCatalogLook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowCatalogLook", function() { return FlowCatalogLook; });
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

var FlowCatalogLook = /** @class */ (function () {
    function FlowCatalogLook() {
    }
    FlowCatalogLook.prototype.ngOnInit = function () {
    };
    FlowCatalogLook = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flow-catalog-look',
            template: __webpack_require__(/*! ./flow-catalog-look.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-look/flow-catalog-look.html")
        }),
        __metadata("design:paramtypes", [])
    ], FlowCatalogLook);
    return FlowCatalogLook;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-update/flow-catalog-update.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-update/flow-catalog-update.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userform\">\r\n    <div class=\"ui-g-12\">\r\n        <span>父节点：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowCatalogBean.parentName\" disabled formControlName=\"parentName\">\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>名称：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowCatalogBean.name\" formControlName=\"name\">\r\n        <div class=\"ui-g-12\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['name'].valid&&userform.controls['name'].dirty\">\r\n            <!-- 请输入6位至20位以上大写或小写字母或数字或下划线 -->\r\n            <p [hidden]=\"!userform.hasError('required','name')\"> 名称不能为空！</p>\r\n            <p [hidden]=\"!userform.hasError('pattern','name')\"> 最长允许输入120位且不能有空格!</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>备注：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowCatalogBean.display\" formControlName=\"display\">\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"保存\" (click)='preserveClick()'></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)='reset()'></button>\r\n    </div>\r\n</form>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-update/flow-catalog-update.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-update/flow-catalog-update.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form span {\n  width: 35%;\n  display: inline-block;\n  text-align: right; }\n\nform input {\n  width: 30%; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\n:host/deep/body .ui-dropdown {\n  width: 30% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LWRlc2lnbi9mbG93LWNhdGFsb2cvZmxvdy1jYXRhbG9nLXVwZGF0ZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFx3b3JrZmxvd1xcd29ya2Zsb3ctZGVzaWduXFxmbG93LWNhdGFsb2dcXGZsb3ctY2F0YWxvZy11cGRhdGVcXGZsb3ctY2F0YWxvZy11cGRhdGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBSnpCO0VBT1EsVUFBVSxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLFlBQVksRUFBQTs7QUFHcEI7RUFDSSxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi93b3JrZmxvdy93b3JrZmxvdy1kZXNpZ24vZmxvdy1jYXRhbG9nL2Zsb3ctY2F0YWxvZy11cGRhdGUvZmxvdy1jYXRhbG9nLXVwZGF0ZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcclxuICAgIHNwYW57XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBpbnB1dHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcbjpob3N0L2RlZXAvYm9keSAudWktZHJvcGRvd257XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-update/flow-catalog-update.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-update/flow-catalog-update.ts ***!
  \************************************************************************************************************/
/*! exports provided: FlowCatalogUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowCatalogUpdate", function() { return FlowCatalogUpdate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_flow_catalog_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bean/flow-catalog.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/bean/flow-catalog.bean.ts");
/* harmony import */ var _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlowCatalogUpdate = /** @class */ (function () {
    function FlowCatalogUpdate(workflowHttpService, fb) {
        this.workflowHttpService = workflowHttpService;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        //实体
        this.flowCatalogBean = new _bean_flow_catalog_bean__WEBPACK_IMPORTED_MODULE_1__["FlowCatalogBean"]();
    }
    FlowCatalogUpdate.prototype.ngOnInit = function () {
        console.log(this.inValue);
        this.userform = this.fb.group({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\S{1,120}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'parentName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            'display': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    };
    FlowCatalogUpdate.prototype.ngOnChanges = function () {
        this.fuzhi();
    };
    FlowCatalogUpdate.prototype.fuzhi = function () {
        if (this.inValue !== undefined) {
            console.log(this.inValue, 588);
            this.flowCatalogBean.parentName = this.inValue.parent.text;
            this.flowCatalogBean.parentId = this.inValue.parent.id;
            this.flowCatalogBean.version = this.inValue.version;
            this.flowCatalogBean.name = this.inValue.text;
            this.flowCatalogBean.display = this.inValue.display;
        }
    };
    //修改保存
    FlowCatalogUpdate.prototype.preserveClick = function () {
        var _this = this;
        var param = {
            "id": this.inValue.id,
            "display": this.flowCatalogBean.display,
            "parentName": this.inValue.parent.text,
            "parentId": this.inValue.parent.id,
            "name": this.flowCatalogBean.name,
            "version": this.flowCatalogBean.version
        };
        this.workflowHttpService.IProcessDirectoryServiceUpdate(param).subscribe(function (data) {
            if (data.msg.returnCode.code == "success") {
                _this.outValue.emit(false);
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "保存成功" });
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
    FlowCatalogUpdate.prototype.reset = function () {
        this.flowCatalogBean.name = '',
            this.flowCatalogBean.display = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FlowCatalogUpdate.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FlowCatalogUpdate.prototype, "outValue", void 0);
    FlowCatalogUpdate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flow-catalog-update',
            template: __webpack_require__(/*! ./flow-catalog-update.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-update/flow-catalog-update.html"),
            styles: [__webpack_require__(/*! ./flow-catalog-update.scss */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-update/flow-catalog-update.scss")]
        }),
        __metadata("design:paramtypes", [_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], FlowCatalogUpdate);
    return FlowCatalogUpdate;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header-title [Info]=\"precredit\"></header-title>\r\n\r\n<div class=\"ui-g\" style=\"margin-top:10px;\">\r\n    <div class=\"ui-g-12 ui-md-3\" style=\"border-right:1px solid #888;margin-right:6%\">\r\n        <div class=\"ui-g-12\">\r\n            <button pButton type=\"button\" label=\"增加\" (click)=\"addFile()\" *ngIf=\"permissionCheck('SID02068_P0172')\"></button>\r\n            <button pButton type=\"button\" label=\"修改\" (click)=\"updateFile(item)\" *ngIf=\"permissionCheck('SID02068_P0173')\"></button>\r\n            <button pButton type=\"button\" label=\"删除\" (click)=\"deleteFile(item)\" *ngIf=\"permissionCheck('SID02068_P0174')\"></button>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <p-tree [value]=\"left_tree\" selectionMode=\"single\" [(selection)]=\"selectedFile\" (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\"></p-tree>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8 module\">\r\n        <div class=\"ui-g-12\">\r\n            <!-- <button pButton type=\"button\" label=\"导入\" (click)=\"into()\"></button>\r\n            <button pButton type=\"button\" label=\"导出\" (click)=\"out()\"></button> -->\r\n        </div>\r\n        <span class=\"icoColor\" (click)=\"add()\" *ngIf=\"permissionCheck('SID02068_P0175')\">新增</span>\r\n        <div class=\"ui-g-12 base-table\">\r\n            <p-dataTable [value]=\"tableData\"  [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n                <p-column field=\"code\" header=\"流程编码\"></p-column>\r\n                <p-column field=\"name\" header=\"流程名称\"></p-column>\r\n                <p-column field=\"display\" header=\"流程描述\"></p-column>\r\n                <!-- <p-column field=\"processClass\" header=\"流程回调\"></p-column> -->\r\n                <p-column header=\"操作\">\r\n                    <ng-template let-col let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                        <div class=\"container\">\r\n                            <span class=\"tabelBySetIco\">设置</span>\r\n                            <ul>\r\n                                <li *ngIf=\"permissionCheck('SID02068_P0176')\">\r\n                                    <button class='zdyBtn' (click)=\"design(item)\">设计</button>\r\n                                </li>\r\n                                <li *ngIf=\"permissionCheck('SID02068_P0177')\">\r\n                                    <button class='zdyBtn' (click)=\"release(item)\">发布</button>\r\n                                </li>\r\n                                <li *ngIf=\"permissionCheck('SID02068_P0178')\">\r\n                                    <button class='zdyBtn' (click)=\"maintain(item)\">变量维护</button>\r\n                                </li>\r\n                                <li *ngIf=\"permissionCheck('SID02068_P0179')\">\r\n                                    <button class='zdyBtn' (click)=\"update(item)\">修改</button>\r\n                                </li>\r\n                                <li *ngIf=\"permissionCheck('SID02068_P0180')\">\r\n                                    <button class='zdyBtn' (click)=\"delete(item)\">删除</button>\r\n                                </li>\r\n                                <li *ngIf=\"permissionCheck('SID02068_P0181')\">\r\n                                    <button class='zdyBtn' (click)=\"lookVersion(item)\">查看其他版本</button>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                        <!-- <span class=\"tabelUpdateIco\" (click)='update(item)'>修改</span>\r\n                        <span class=\"tabelDeleteIco\" (click)='delete(item)'>删除</span>\r\n                        <span class=\"tabelDetailIco\" (click)='lookVersion(item)'>查看其他版本</span> -->\r\n                        <!-- <button class='zdyBtn' (click)=\"visit(item)\" >访问控制</button>\r\n                        <button class='zdyBtn' (click)=\"use(item)\">使用情况</button> -->\r\n                    </ng-template>\r\n                </p-column>\r\n            </p-dataTable>\r\n            <!-- 分页 -->\r\n            <!-- <p-paginator rows=\"{{rows}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator> -->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- 弹出框-->\r\n<p-dialog [(visible)]=\"display\" *ngIf='display' modal=\"modal\" width='750' [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <flow-catalog-add *ngIf=\"showModel=='1'\" [inValue]=\"updateAddFileValue\" (outValue)=\"addFileCall($event)\" (queryData)=\"queryData($event)\">\r\n        </flow-catalog-add>\r\n\r\n        <flow-catalog-update *ngIf=\"showModel=='2'\" [inValue]=\"updateFileValue\" (outValue)=\"updateFileCall($event)\"></flow-catalog-update>\r\n        <!-- <flow-catalog-look *ngIf=\"showModel=='3'\"></flow-catalog-look> -->\r\n        <txt-add *ngIf=\"showModel=='4'\" [inValue]=\"updateAddValue\" (outValue)=\"addCall($event)\"></txt-add>\r\n        <txt-update *ngIf=\"showModel=='5'\" [inValueUpdate]=\"updateTable\" [inValue]=\"updateValue\" (outValue)=\"updateCall($event)\"></txt-update>\r\n        <maintain *ngIf=\"showModel=='6'\" [inValue]=\"queryMaintainValue\" (outValue)=\"queryMaintainCall($event)\"></maintain>\r\n        <visit-control *ngIf=\"showModel=='7'\"></visit-control>\r\n        <flow-user *ngIf=\"showModel=='8'\"></flow-user>\r\n        <other-version *ngIf=\"showModel=='9'\" [inValue]=\"visionValue\" (outValue)=\"otherVersion($event)\"></other-version>\r\n        <app-into-flow *ngIf=\"showModel=='10'\" (outValue)=\"outCall($event)\"></app-into-flow>\r\n        <app-out-flow *ngIf=\"showModel=='11'\" (outValue)=\"intoCall($event)\"></app-out-flow>\r\n\r\n    </div>\r\n</p-dialog>\r\n\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!-- <button pButton (click)=\"clickBtb()\"></button> -->\r\n<!-- <p-dialog *ngIf=\"aaaa\" header=\"提交给\" [(visible)]=\"aaaa\">\r\n    <app-examine-approval  [inValue]=\"invalue\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n  </p-dialog> -->\r\n  "

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".zdyBtn {\n  background: #0598e7;\n  border-radius: 5px;\n  border: none;\n  color: #fff; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: auto !important; }\n\n.icoColor {\n  float: right;\n  margin-right: 7px; }\n\n.container:hover > span {\n  display: inline-block;\n  background: transparent;\n  color: #4ab984;\n  cursor: pointer;\n  font-weight: bold;\n  padding: 0px !important; }\n\n:host/deep/.ng-star-inserted {\n  position: relative !important; }\n\n.tabelBySetIco {\n  height: 22px; }\n\n.container {\n  width: 50px;\n  margin: 0 auto; }\n\n.container ul {\n    width: 92px;\n    position: absolute;\n    top: 6px;\n    left: 50%;\n    margin-left: -46px;\n    z-index: 5555;\n    padding: 0;\n    display: none; }\n\n.container li {\n    text-align: center;\n    list-style: none;\n    margin: 1px 0; }\n\n.container li button {\n      cursor: pointer; }\n\n.container:hover > ul {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LWRlc2lnbi9mbG93LWNhdGFsb2cvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6Ylxcd29ya2Zsb3dcXHdvcmtmbG93LWRlc2lnblxcZmxvdy1jYXRhbG9nXFxmbG93LWNhdGFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVc7RUFDWCxXQUFVLEVBQUE7O0FBRWQ7RUFDSSx1QkFBdUI7RUFDdkIsdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsY0FBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUIsRUFBQTs7QUFFekI7RUFDSSw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFGbEI7SUFLUSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0lBQ1YsYUFBYSxFQUFBOztBQVpyQjtJQWVRLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBOztBQWpCckI7TUFtQlksZUFBZSxFQUFBOztBQUkzQjtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi93b3JrZmxvdy93b3JrZmxvdy1kZXNpZ24vZmxvdy1jYXRhbG9nL2Zsb3ctY2F0YWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi56ZHlCdG4ge1xyXG4gICAgYmFja2dyb3VuZDogIzA1OThlNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvd3tcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuLmljb0NvbG9ye1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbn1cclxuLmNvbnRhaW5lcjpob3ZlciA+c3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiByZ2IoNzQsMTg1LDEzMik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6aG9zdC9kZWVwLy5uZy1zdGFyLWluc2VydGVke1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnRhYmVsQnlTZXRJY297XHJcbiAgICAgIGhlaWdodDogMjJweDtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHVse1xyXG4gICAgICAgICAgd2lkdGg6IDkycHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNDZweDtcclxuICAgICAgICAgIHotaW5kZXg6IDU1NTU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBsaXtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICBtYXJnaW46IDFweCAwO1xyXG4gICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuICAuY29udGFpbmVyOmhvdmVyID51bHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FlowCatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowCatalogComponent", function() { return FlowCatalogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bean_flow_catalog_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/flow-catalog.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/bean/flow-catalog.bean.ts");
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






var FlowCatalogComponent = /** @class */ (function () {
    function FlowCatalogComponent(workflowHttpService, confirmationService, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        // 表头
        this.precredit = '流程定义';
        //提示信息
        this.msgs = [];
        this.flowCatalogBean = new _bean_flow_catalog_bean__WEBPACK_IMPORTED_MODULE_3__["FlowCatalogBean"]();
        //模态框的标题
        this.headerTitle = "修改";
        //模态框是否显示
        this.display = false;
        // 新增带入参数
        this.updateAddFileValue = [];
        //新增带入参数
        this.updateAddValue = [];
        //修改参数
        this.updateFileValue = [];
        //删除参数
        this.updateDeleteValue = [];
        // 右边参数
        //修改
        this.updateValue = [];
        this.updateTable = [];
        //test
        this.testSeveice = [];
        this.rows = 10; //每页调数
        this.page = 1; //当前页
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        //定义一个默认初始值是-1，刚开始的时候不显示
        this.act = -1;
    }
    FlowCatalogComponent.prototype.expandRecursive = function (node, isExpand) {
        var _this = this;
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(function (childNode) {
                _this.expandRecursive(childNode, isExpand);
            });
        }
    };
    FlowCatalogComponent.prototype.ngOnInit = function () {
        this.flowCatalogBean.rows = 10;
        this.flowCatalogBean.page = 1;
        this.queryClick();
    };
    //异步展开
    FlowCatalogComponent.prototype.expandAll = function () {
    };
    //点击目录查询
    FlowCatalogComponent.prototype.nodeSelect = function (event) {
        var _this = this;
        this.selectedFile = event.node;
        this.updateDeleteValue = event.node;
        // 流程定义查询
        var params = {
            "uniqueReqData": event.node.id,
            rows: this.flowCatalogBean.rows,
            page: this.flowCatalogBean.page
        };
        this.fileUrl = '';
        this.workflowHttpService.IProcessDefinitionServiceSearch(params).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                if (data.msg.listArray) {
                    _this.tableData = [];
                    data.msg.listArray.forEach(function (v1) {
                        _this.tableData.push(v1);
                    });
                    if (_this.tableData) {
                        _this.tableData.forEach(function (item) {
                            _this.fileUrl = item.fileUrl;
                        });
                    }
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: data.msg.returnCode.code });
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.code });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '错误', detail: '调用服务失败' });
        });
    };
    FlowCatalogComponent.prototype.nodeUnselect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    };
    FlowCatalogComponent.prototype.toTree = function (data) {
        var _this = this;
        data.forEach(function (item) {
            item['label'] = item['text'];
            item['value'] = item;
            if (item.children) {
                _this.toTree(item.children);
            }
        });
        return data;
    };
    //流程目录查询
    FlowCatalogComponent.prototype.queryClick = function () {
        var _this = this;
        var param = {
            uniqueReqData: '-1'
        };
        this.workflowHttpService.IProcessDirectoryServiceSearch(param).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.left_tree = _this.toTree(data.msg.listArray);
                _this.left_tree.forEach(function (node) {
                    _this.expandRecursive(node, true);
                });
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
    //新增修改后的查询服务
    FlowCatalogComponent.prototype.query = function () {
        var _this = this;
        this.workflowHttpService.IProcessDefinitionServiceSearch({ "uniqueReqData": this.updateDeleteValue.id }).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                if (data.msg.listArray) {
                    _this.tableData = [];
                    data.msg.listArray.forEach(function (v1) {
                        _this.tableData.push(v1);
                    });
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.code });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '错误', detail: '调用服务失败' });
        });
    };
    // 文件夹的增删改查
    //  增加文件夹
    FlowCatalogComponent.prototype.addFile = function () {
        this.headerTitle = '流程目录增加';
        this.display = true;
        this.updateAddFileValue = this.selectedFile;
        this.showModel = 1;
    };
    //添加后返回的值
    FlowCatalogComponent.prototype.addFileCall = function (param) {
        this.display = param;
        this.queryClick();
    };
    // 修改文件夹
    FlowCatalogComponent.prototype.updateFile = function (item) {
        this.headerTitle = '流程目录修改';
        this.display = true;
        this.updateFileValue = this.selectedFile;
        this.showModel = 2;
    };
    //修改的回调
    FlowCatalogComponent.prototype.updateFileCall = function (param) {
        var _this = this;
        this.display = param;
        var paramId = {
            uniqueReqData: '-1'
        };
        this.workflowHttpService.IProcessDirectoryServiceSearch(paramId).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.left_tree = _this.toTree(data.msg.listArray);
                _this.left_tree.forEach(function (node) {
                    _this.expandRecursive(node, true);
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: '修改成功' });
                });
            }
        });
    };
    // 删除文件夹
    FlowCatalogComponent.prototype.deleteFile = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                //条件
                var param = { "uniqueReqData": _this.updateDeleteValue.id };
                _this.workflowHttpService.IProcessDirectoryServiceDelete(param).subscribe(function (data) {
                    if (data.msg.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: '删除成功' });
                        _this.queryClick();
                        _this.selectedFile = {};
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message }); //特殊提示信息特殊处理
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "删除失败" });
                });
            }
        });
    };
    // 导入
    FlowCatalogComponent.prototype.into = function () {
        this.headerTitle = '导入';
        this.showModel = 11;
        this.display = true;
    };
    FlowCatalogComponent.prototype.intoCall = function (param) {
        this.display = param;
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '提示', detail: '导入成功' });
    };
    // 导出
    FlowCatalogComponent.prototype.out = function () {
        this.headerTitle = '导出';
        this.showModel = 10;
        this.display = true;
    };
    FlowCatalogComponent.prototype.outCall = function (param) {
        this.display = param;
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '提示', detail: '导出成功，请到浏览器下载目录查看导出文件' });
    };
    /**
     * 流程内容
     */
    // 新增
    FlowCatalogComponent.prototype.add = function () {
        this.headerTitle = '新增流程';
        this.display = true;
        this.updateAddValue = this.selectedFile;
        this.showModel = 4;
    };
    //新增后返回的值
    FlowCatalogComponent.prototype.addCall = function (param) {
        this.display = param;
        this.query();
    };
    // 修改
    FlowCatalogComponent.prototype.update = function (item) {
        this.headerTitle = '流程修改';
        // this.updateValue = this.selectedFile;
        this.updateTable = item;
        this.updateValue = item;
        this.display = true;
        this.showModel = 5;
    };
    //修改的回调
    FlowCatalogComponent.prototype.updateCall = function (param) {
        var _this = this;
        this.display = param;
        this.flowCatalogBean = new _bean_flow_catalog_bean__WEBPACK_IMPORTED_MODULE_3__["FlowCatalogBean"]();
        this.workflowHttpService.IProcessDefinitionServiceSearch({ "uniqueReqData": this.updateDeleteValue.id }).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                if (data.msg.listArray) {
                    _this.tableData = [];
                    data.msg.listArray.forEach(function (v1) {
                        _this.tableData.push(v1);
                    });
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: '流程目录修改成功' });
                }
            }
        });
    };
    //删除流程
    FlowCatalogComponent.prototype.delete = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                //条件
                var param = { "uniqueReqData": item.id };
                _this.workflowHttpService.IProcessDefinitionServiceDeleteProcess(param).subscribe(function (data) {
                    if (data.msg.returnCode) {
                        if (data.msg.returnCode.code == 'success') {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'success', summary: '提示', detail: '删除成功' });
                            _this.query();
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
                        }
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败" });
                });
            }
        });
    };
    // 设计
    FlowCatalogComponent.prototype.design = function (item) {
        window.open('http://' + item.fileUrl + ':8080' + '/wfd/p/editor?id=' + item.code + '&wfversion=' + item.processVersion + '&name=' + item.name);
    };
    //  发布
    FlowCatalogComponent.prototype.release = function (item) {
        var _this = this;
        this.workflowHttpService.IWorkFlowServicedeployProcess({ "uniqueReqData": item.id }).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '发布成功' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败" });
        });
    };
    // 变量维护
    FlowCatalogComponent.prototype.maintain = function (item) {
        this.headerTitle = '流程变量信息';
        this.display = true;
        this.showModel = 6;
        this.queryMaintainValue = item;
    };
    FlowCatalogComponent.prototype.queryMaintainCall = function (param) {
        this.display = param;
        this.queryClick();
    };
    // 访问控制
    FlowCatalogComponent.prototype.visit = function () {
        this.headerTitle = '流程权限列表';
        this.display = true;
        this.showModel = 7;
    };
    // 使用情况
    FlowCatalogComponent.prototype.use = function () {
        this.headerTitle = '流程使用情况';
        this.display = true;
        this.showModel = 8;
    };
    // 查看其他版本
    FlowCatalogComponent.prototype.lookVersion = function (item) {
        this.headerTitle = '流程版本信息';
        this.display = true;
        this.showModel = 9;
        this.visionValue = item;
    };
    //查看其他版本回调
    FlowCatalogComponent.prototype.otherVersion = function (param) {
        this.display = param;
        this.queryClick();
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '提示', detail: '恢复到该版本成功' });
    };
    // 分页 页面显示条数切换
    FlowCatalogComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.flowCatalogBean.rows = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.flowCatalogBean.page = currentPage;
        //调用查询的方法
        this.queryClick();
        this.flowCatalogBean.page = 1;
    };
    //按钮权限
    FlowCatalogComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    FlowCatalogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flow-catalog',
            template: __webpack_require__(/*! ./flow-catalog.component.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog.component.html"),
            styles: [__webpack_require__(/*! ./flow-catalog.component.scss */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], FlowCatalogComponent);
    return FlowCatalogComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-user/flow-user.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-user/flow-user.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n        <p-column field=\"code\" header=\"流程名称\"></p-column>\r\n        <p-column field=\"name\" header=\"当前执行任务\"></p-column>\r\n        <p-column field=\"display\" header=\"开始时间\"></p-column>\r\n    </p-dataTable>\r\n    <!-- 分页 -->\r\n    <p-paginator rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-user/flow-user.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-user/flow-user.ts ***!
  \****************************************************************************************/
/*! exports provided: FlowUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowUser", function() { return FlowUser; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_flow_catalog_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bean/flow-catalog.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/bean/flow-catalog.bean.ts");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//岗位





var FlowUser = /** @class */ (function () {
    function FlowUser(workflowHttpService, confirmationService) {
        this.workflowHttpService = workflowHttpService;
        this.confirmationService = confirmationService;
        this.precredit = '岗位查询';
        this.flowCatalogBean = new _bean_flow_catalog_bean__WEBPACK_IMPORTED_MODULE_1__["FlowCatalogBean"]();
        //每页多少条
        this.pageSize = 10;
        //模态框的标题
        this.headerTitle = "机构详情";
        //模态框是否显示
        this.display = false;
        //提示信息
        this.msgs = [];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
    }
    FlowUser.prototype.ngOnInit = function () {
        // this.FlowCatalogBean.pageSize = 10;
        // this.FlowCatalogBean.pageNum = 1;
        this.queryClick();
    };
    //查询
    FlowUser.prototype.queryClick = function () {
        // this.workflowHttpService.queryPostById(this.maintainBean).subscribe(data => {
        //     if (data.returnCode.code == 'success') {
        //         ;
        //         this.tableData = data.postInfo;
        //         this.total = data.total;
        //         this.msgs = [];
        //         this.msgs.push({ severity: 'success', summary: '提示', detail: '成功查询' });
        //     } else {
        //         this.msgs = [];
        //         this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.code });
        //     }
        // }, error => {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        // })
    };
    //分页
    FlowUser.prototype.paginate = function (event) {
        //每页显示的条数
        // this.pageSize = event.rows;
        // //当前页
        // let currentPage = event.page + 1;
        // this.flowCatalogBean.pageNum = currentPage;
        // //调用查询的方法
        // this.queryClick();
        // this.flowCatalogBean.pageNum = 1;
    };
    //返回的值
    FlowUser.prototype.outValue = function (param) {
        this.display = param.display;
    };
    FlowUser = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flow-user',
            template: __webpack_require__(/*! ./flow-user.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-user/flow-user.html"),
            providers: [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]]
        })
        //岗位管理
        ,
        __metadata("design:paramtypes", [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]])
    ], FlowUser);
    return FlowUser;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/into-flow/bean/into-flow-V.bean.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/into-flow/bean/into-flow-V.bean.ts ***!
  \****************************************************************************************************/
/*! exports provided: IntoFlowVBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntoFlowVBean", function() { return IntoFlowVBean; });
var IntoFlowVBean = /** @class */ (function () {
    function IntoFlowVBean() {
    }
    return IntoFlowVBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/into-flow/into-flow.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/into-flow/into-flow.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n  <div class=\"ui-g-12\" style='height:300px;width:100%;overflow:scroll'>\r\n    <p-tree [value]=\"left_tree\" \r\n      selectionMode=\"single\" \r\n      [(selection)]=\"selectedFile\" \r\n      (onNodeSelect)=\"nodeSelect($event)\" \r\n      (onNodeUnselect)=\"nodeUnselect($event)\">\r\n      <ng-template let-node pTemplate=\"default\">\r\n        <p-checkbox  \r\n          name=\"group1\" \r\n          value={{node.id}} \r\n          label={{node.label}} \r\n          [(ngModel)]=\"selectedList\">\r\n        </p-checkbox>\r\n      </ng-template>\r\n    </p-tree>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <button pButton type=\"button\" label=\"导出\" (click)=\"outputNum()\"></button>\r\n  </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/into-flow/into-flow.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/into-flow/into-flow.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: IntoFlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntoFlowComponent", function() { return IntoFlowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var _bean_into_flow_V_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/into-flow-V.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/into-flow/bean/into-flow-V.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntoFlowComponent = /** @class */ (function () {
    function IntoFlowComponent(workflowHttpService) {
        this.workflowHttpService = workflowHttpService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.intoFlowVBean = new _bean_into_flow_V_bean__WEBPACK_IMPORTED_MODULE_2__["IntoFlowVBean"]();
        //提示信息
        this.msgs = [];
    }
    IntoFlowComponent.prototype.expandRecursive = function (node, isExpand) {
        var _this = this;
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(function (childNode) {
                _this.expandRecursive(childNode, isExpand);
            });
        }
    };
    IntoFlowComponent.prototype.ngOnInit = function () {
        this.queryClick(); //查询树
    };
    //点击目录查询
    IntoFlowComponent.prototype.nodeSelect = function (event) {
        this.selectedFile = event.node;
        this.selectId = event.node.id;
        // 流程定义查询
        // let params = {
        //   "uniqueReqData": event.node.id,
        //   rows: this.intoFlowVBean.rows,
        //   page: this.intoFlowVBean.page
        // }
        // this.workflowHttpService.IProcessDefinitionServiceSearch(params).subscribe((data) => {
        //   if (data.msg.returnCode.code == 'success') {
        //     if (data.msg.listArray) {
        //       this.tableData = [];
        //       data.msg.listArray.forEach((v1) => {
        //         this.tableData.push(v1)
        //       });
        //       this.msgs = [];
        //       this.msgs.push({ severity: 'success', summary: '提示', detail: data.msg.returnCode.code })
        //     }
        //   } else {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.code })
        //   }
        // },
        //   error => {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '错误', detail: '调用服务失败' })
        //   })
    };
    IntoFlowComponent.prototype.nodeUnselect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    };
    IntoFlowComponent.prototype.toTree = function (data) {
        var _this = this;
        data.forEach(function (item) {
            item['label'] = item['text'];
            item['value'] = item;
            if (item.children) {
                _this.toTree(item.children);
            }
        });
        return data;
    };
    //流程目录查询
    IntoFlowComponent.prototype.queryClick = function () {
        var _this = this;
        var param = {
            uniqueReqData: '-1'
        };
        this.workflowHttpService.IProcessDirectoryServiceSearchForDesigner(param).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.left_tree = _this.toTree(data.msg.listArray);
                _this.left_tree.forEach(function (node) {
                    _this.expandRecursive(node, true);
                });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // //勾选
    // onChange(node) {
    //   this.intoFlowVBean.uniqueReqData = node.id;
    //   let arrId = [];
    //   console.log(this.selectedList,222)
    // }
    //导出
    IntoFlowComponent.prototype.outputNum = function () {
        var _this = this;
        var param = {
            uniqueReqData: this.selectedList
        };
        this.workflowHttpService.IProcessDefinitionServiceExportprocess(param).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '导出成功' });
                _this.outValue.emit(false);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], IntoFlowComponent.prototype, "outValue", void 0);
    IntoFlowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-into-flow',
            template: __webpack_require__(/*! ./into-flow.component.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/into-flow/into-flow.component.html")
        }),
        __metadata("design:paramtypes", [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowHttpService"]])
    ], IntoFlowComponent);
    return IntoFlowComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/bean/maintain.bean.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/bean/maintain.bean.ts ***!
  \************************************************************************************************/
/*! exports provided: MaintainBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintainBean", function() { return MaintainBean; });
var MaintainBean = /** @class */ (function () {
    function MaintainBean() {
    }
    return MaintainBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain-add/maintain-add.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain-add/maintain-add.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\r\n    <div class=\"ui-g-12\" id=\"dicCode\" [formGroup]=\"userform\">\r\n        <span>变量编码：</span>\r\n        <p-dropdown [options]=\"list1\" optionLabel=\"label\" placeholder=\"请选择\" [(ngModel)]=\"maintainBean.dicCode\" formControlName=\"dicCode\" (onChange)=\"doChose()\"></p-dropdown>\r\n        <div class=\"ui-g-12\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['dicCode'].valid&&userform.controls['dicCode'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','dicCode')\"> 变量编码不能为空！</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 \" [formGroup]=\"userform\">\r\n        <span>变量名称：</span>\r\n        <!-- <p-dropdown [options]=\"list\" placeholder=\"请选择\" [(ngModel)]=\"maintainBean.aliasName\" formControlName=\"aliasName\" (onChange)=\"doChose1($event)\"></p-dropdown> -->\r\n        <input id=\"input\" type=\"text\" pInputText disabled [(ngModel)]=\"maintainBean.aliasName\" formControlName=\"aliasName\">\r\n        <div class=\"ui-g-12\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['aliasName'].valid&&userform.controls['aliasName'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','aliasName')\"> 变量名称不能为空！</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>变量初始值：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"maintainBean.init\">\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>变量最大值：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"maintainBean.maxValue\">\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>变量最小值：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"maintainBean.minValue\">\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"保存\" (click)='preserveClick()'></button>\r\n    <button pButton type=\"button\" label=\"重置\" (click)='cancel()'></button>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain-add/maintain-add.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain-add/maintain-add.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form span {\n  width: 35%;\n  display: inline-block;\n  text-align: right; }\n\n.form input {\n  width: 30%; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LWRlc2lnbi9mbG93LWNhdGFsb2cvbWFpbnRhaW4vbWFpbnRhaW4tYWRkL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHdvcmtmbG93XFx3b3JrZmxvdy1kZXNpZ25cXGZsb3ctY2F0YWxvZ1xcbWFpbnRhaW5cXG1haW50YWluLWFkZFxcbWFpbnRhaW4tYWRkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGlCQUFpQixFQUFBOztBQUp6QjtFQU9RLFVBQVUsRUFBQTs7QUFHbEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxZQUFZLEVBQUE7O0FBR3BCO0VBQ0kscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvd29ya2Zsb3cvd29ya2Zsb3ctZGVzaWduL2Zsb3ctY2F0YWxvZy9tYWludGFpbi9tYWludGFpbi1hZGQvbWFpbnRhaW4tYWRkLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybXtcclxuICAgIHNwYW57XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBpbnB1dHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93bntcclxuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain-add/maintain-add.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain-add/maintain-add.ts ***!
  \*******************************************************************************************************/
/*! exports provided: MaintainAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintainAdd", function() { return MaintainAdd; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_maintain_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/maintain.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/bean/maintain.bean.ts");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
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





var MaintainAdd = /** @class */ (function () {
    function MaintainAdd(workflowHttpService, fb, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        this.maintainBean = new _bean_maintain_bean__WEBPACK_IMPORTED_MODULE_2__["MaintainBean"]();
    }
    MaintainAdd.prototype.ngOnInit = function () {
        this.query();
        this.maintainBean.wfCode = this.inValue.code;
        this.maintainBean.storeName = this.inValue.storeName;
        this.userform = this.fb.group({
            'dicCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'aliasName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    };
    //新增流程变量维护的查询
    MaintainAdd.prototype.query = function () {
        var _this = this;
        var params = {
            uniqueReqData: "3"
        };
        this.workflowHttpService.IDictConfServicegetDicListByType(params).subscribe(function (data) {
            if (data.msg.returnCode.code == "success") {
                // this.list = this.commfunc.listToLabelvalue(data.msg.listArray, 'name', 'dicCode');
                _this.list1 = _this.commfunc.listToLabelvalue(data.msg.listArray, 'dicCode', 'name');
            }
        });
    };
    //onchange事件
    MaintainAdd.prototype.doChose = function () {
        this.maintainBean.aliasName = this.maintainBean.dicCode['value'];
        // this.maintainBean.aliasName = this.returnValue(event.value, 'label', 'value');
        // this.aName = this.maintainBean.aliasName
    };
    // doChose1(event) {
    //   this.maintainBean.dicCode = this.returnValue(event.value, 'value', 'label');
    // }
    /**
     * 转换值
     * @param param  值
     * @param colum  字段
     */
    // returnValue(param, colum, valueColum) {
    //   let value: string = "";
    //   this.list.forEach(element => {
    //     if (element[colum] === param) {
    //       value = element[valueColum];
    //     }
    //   });
    //   return value;
    // }
    // 新增确定
    MaintainAdd.prototype.preserveClick = function () {
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
        //判断是否有下拉更改之后赋值
        // if (this.aName) {
        //   this.paramMaintain = {
        //     wfCode: this.inValue.code,
        //     storeName: this.inValue.storeName,
        //     aliasName: this.maintainBean.dicCode,
        //     dicCode: this.aName,
        //     // dicCode:dic.value,
        //     init: this.maintainBean.init,
        //     maxValue: this.maintainBean.maxValue,
        //     minValue: this.maintainBean.minValue,
        //     version: '',
        //     id: ''
        //   }
        // } else {
        //   this.maintainBean.version = '',
        //     this.maintainBean.id = '',
        //     this.paramMaintain = this.maintainBean
        // }
        var param = {
            wfCode: this.inValue.code,
            storeName: this.inValue.storeName,
            aliasName: this.maintainBean.dicCode['value'],
            dicCode: this.maintainBean.dicCode['label'],
            init: this.maintainBean.init,
            maxValue: this.maintainBean.maxValue,
            minValue: this.maintainBean.minValue,
            version: '',
            id: ''
        };
        this.workflowHttpService.IDictConfServiceAddProcessVariable(param).subscribe(function (data) {
            if (data.msg.returnCode.code == "success") {
                _this.outValue.emit(false);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.msg.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
        // this.maintainBean = new MaintainBean();
    };
    //取消
    MaintainAdd.prototype.cancel = function () {
        this.dicCode = '';
        this.aliasName = '';
        this.maintainBean = new _bean_maintain_bean__WEBPACK_IMPORTED_MODULE_2__["MaintainBean"]();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaintainAdd.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MaintainAdd.prototype, "outValue", void 0);
    MaintainAdd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'maintain-add',
            template: __webpack_require__(/*! ./maintain-add.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain-add/maintain-add.html"),
            styles: [__webpack_require__(/*! ./maintain-add.scss */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain-add/maintain-add.scss")],
            providers: [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowHttpService"]]
        }),
        __metadata("design:paramtypes", [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], MaintainAdd);
    return MaintainAdd;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain-update/maintain-update.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain-update/maintain-update.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\r\n    <div class=\"ui-g-12\" [formGroup]=\"userform\">\r\n        <span>变量编码：</span>\r\n        <p-dropdown [options]=\"list1\" [placeholder]=\"maintainBean.dicCode\" [(ngModel)]=\"maintainBean.dicCode\" formControlName=\"dicCode\"\r\n            (onChange)=\"doChose($event)\"></p-dropdown>\r\n        <div class=\"ui-g-12\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['dicCode'].valid&&userform.controls['dicCode'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','dicCode')\"> 变量编码不能为空！</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" [formGroup]=\"userform\">\r\n        <span>变量名称：</span>\r\n        <p-dropdown [options]=\"list\" [placeholder]=\"maintainBean.aliasName\" [(ngModel)]=\"maintainBean.aliasName\" formControlName=\"aliasName\"\r\n            (onChange)=\"doChose1($event)\"></p-dropdown>\r\n        <div class=\"ui-g-12\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['aliasName'].valid&&userform.controls['aliasName'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','aliasName')\"> 变量名称不能为空！</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>变量初始值：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"maintainBean.init\">\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>变量最大值：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"maintainBean.maxValue\">\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>变量最小值：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"maintainBean.minValue\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"保存\" (click)='preserveClick()'></button>\r\n    <button pButton type=\"button\" label=\"重置\" (click)='modifyCloseBtn()'></button>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain-update/maintain-update.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain-update/maintain-update.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form span {\n  width: 35%;\n  display: inline-block;\n  text-align: right; }\n\n.form input {\n  width: 30%; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\n:host/deep/.ui-dropdown {\n  width: 30% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LWRlc2lnbi9mbG93LWNhdGFsb2cvbWFpbnRhaW4vbWFpbnRhaW4tdXBkYXRlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHdvcmtmbG93XFx3b3JrZmxvdy1kZXNpZ25cXGZsb3ctY2F0YWxvZ1xcbWFpbnRhaW5cXG1haW50YWluLXVwZGF0ZVxcbWFpbnRhaW4tdXBkYXRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGlCQUFpQixFQUFBOztBQUp6QjtFQU9RLFVBQVUsRUFBQTs7QUFHbEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxZQUFZLEVBQUE7O0FBR3BCO0VBQ0kscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvd29ya2Zsb3cvd29ya2Zsb3ctZGVzaWduL2Zsb3ctY2F0YWxvZy9tYWludGFpbi9tYWludGFpbi11cGRhdGUvbWFpbnRhaW4tdXBkYXRlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybXtcclxuICAgIHNwYW57XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBpbnB1dHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcbjpob3N0L2RlZXAvLnVpLWRyb3Bkb3due1xyXG4gICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain-update/miantain-update.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain-update/miantain-update.ts ***!
  \*************************************************************************************************************/
/*! exports provided: MaintainUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintainUpdate", function() { return MaintainUpdate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_maintain_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bean/maintain.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/bean/maintain.bean.ts");
/* harmony import */ var _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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





var MaintainUpdate = /** @class */ (function () {
    function MaintainUpdate(workflowHttpService, fb, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        //实体
        this.maintainBean = new _bean_maintain_bean__WEBPACK_IMPORTED_MODULE_1__["MaintainBean"]();
    }
    MaintainUpdate.prototype.ngOnInit = function () {
        console.log(521521, this.outValue);
        this.fuzhi();
        this.query();
        this.userform = this.fb.group({
            'dicCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'aliasName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    };
    //新增流程变量维护的查询
    MaintainUpdate.prototype.query = function () {
        var _this = this;
        var params = {
            uniqueReqData: "3"
        };
        this.workflowHttpService.IDictConfServicegetDicListByType(params).subscribe(function (data) {
            if (data.msg.returnCode.code == "success") {
                _this.list = _this.commfunc.listToLabelvalue(data.msg.listArray, 'aliasName', 'dicCode');
                _this.list1 = _this.commfunc.listToLabelvalue(data.msg.listArray, 'dicCode', 'aliasName');
            }
        });
    };
    //onchange事件
    MaintainUpdate.prototype.doChose = function (event) {
        this.maintainBean.aliasName = this.returnValue(event.value, 'label', 'value');
        this.aName = this.maintainBean.aliasName;
    };
    MaintainUpdate.prototype.doChose1 = function (event) {
        this.dicCode = this.returnValue(event.value, 'value', 'label');
    };
    /**
     * 转换值
     * @param param  值
     * @param colum  字段
     */
    MaintainUpdate.prototype.returnValue = function (param, colum, valueColum) {
        var value = "";
        this.list.forEach(function (element) {
            if (element[colum] === param) {
                value = element[valueColum];
            }
        });
        return value;
    };
    MaintainUpdate.prototype.fuzhi = function () {
        if (this.inValue) {
            this.maintainBean = Object.assign({}, this.inValue);
        }
    };
    //提交
    MaintainUpdate.prototype.preserveClick = function () {
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
        //改变下拉框的值的时候，转换值
        if (this.aName) {
            this.maintainBean.aliasName = this.maintainBean.dicCode,
                this.maintainBean.dicCode = this.aName;
        }
        this.workflowHttpService.IDictConfServiceupdateProcessVariable(this.maintainBean).subscribe(function (data) {
            if (data.msg.returnCode.code == "success") {
                _this.outValue.emit(false);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.code });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败" });
        });
    };
    //重置
    MaintainUpdate.prototype.modifyCloseBtn = function () {
        this.maintainBean.init = '';
        this.maintainBean.maxValue = '';
        this.maintainBean.minValue = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaintainUpdate.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MaintainUpdate.prototype, "outValue", void 0);
    MaintainUpdate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'maintain-update',
            template: __webpack_require__(/*! ./maintain-update.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain-update/maintain-update.html"),
            styles: [__webpack_require__(/*! ./maintain-update.scss */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain-update/maintain-update.scss")]
        }),
        __metadata("design:paramtypes", [_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], MaintainUpdate);
    return MaintainUpdate;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <button pButton type=\"button\" label=\"新增\" (click)=\"add()\"></button>\r\n    <!-- <button pButton type=\"button\" label=\"待选变量查询\" (click)=\"waitQuery()\"></button> -->\r\n</div>\r\n<div class=\"ui-g-12 base-table\">\r\n    <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n        <p-column field=\"dicCode\" header=\"变量编码\"></p-column>\r\n        <p-column field=\"aliasName\" header=\"变量名称\"></p-column>\r\n        <p-column field=\"init\" header=\"变量初始值\"></p-column>\r\n        <p-column field=\"maxValue\" header=\"变量最小值\"></p-column>\r\n        <p-column field=\"minValue\" header=\"变量最大值\"></p-column>\r\n        <p-column header=\"操作\">\r\n            <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <span class=\"tabelUpdateIco\" (click)='update(car)'>修改</span>\r\n                <span class=\"tabelDeleteIco\" (click)='delete(car)'>删除</span>\r\n            </ng-template>\r\n        </p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n\r\n<!-- 弹出框-->\r\n<p-dialog [(visible)]=\"display\" *ngIf='display' width='700' [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <maintain-add *ngIf=\"showModel=='1'\" (outValue)=\"addCall($event)\" [inValue]=\"addValue\"></maintain-add>\r\n        <maintain-update *ngIf=\"showModel=='2'\" [inValue]=\"updateValue\" (outValue)=\"updateCall($event)\"></maintain-update>\r\n    </div>\r\n</p-dialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!--申领提示框-->\r\n<p-confirmDialog  class=\"backGround\" header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"确定\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"取消\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host/deep/.ng-tns-c14-3.ui-dialog.ui-confirmdialog.ui-widget.ui-widget-content.ui-corner-all.ui-shadow.ng-trigger.ng-trigger-dialogState {\n  min-width: 0;\n  width: 100px !important;\n  height: auto !important;\n  z-index: 5000 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LWRlc2lnbi9mbG93LWNhdGFsb2cvbWFpbnRhaW4vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6Ylxcd29ya2Zsb3dcXHdvcmtmbG93LWRlc2lnblxcZmxvdy1jYXRhbG9nXFxtYWludGFpblxcbWFpbnRhaW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LWRlc2lnbi9mbG93LWNhdGFsb2cvbWFpbnRhaW4vbWFpbnRhaW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0L2RlZXAvLm5nLXRucy1jMTQtMy51aS1kaWFsb2cudWktY29uZmlybWRpYWxvZy51aS13aWRnZXQudWktd2lkZ2V0LWNvbnRlbnQudWktY29ybmVyLWFsbC51aS1zaGFkb3cubmctdHJpZ2dlci5uZy10cmlnZ2VyLWRpYWxvZ1N0YXRle1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDUwMDAgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain.ts ***!
  \**************************************************************************************/
/*! exports provided: Maintain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Maintain", function() { return Maintain; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_maintain_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/maintain.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/bean/maintain.bean.ts");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Maintain = /** @class */ (function () {
    function Maintain(workflowHttpService, confirmationService) {
        this.workflowHttpService = workflowHttpService;
        this.confirmationService = confirmationService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //bean文件
        this.maintainBean = new _bean_maintain_bean__WEBPACK_IMPORTED_MODULE_1__["MaintainBean"]();
        //模态框是否显示
        this.display = false;
        //修改的参数
        this.updateValue = [];
        //提示信息
        this.msgs = [];
        //表格为空时的提示信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
    }
    Maintain.prototype.ngOnChanges = function () {
        this.fuzhi();
    };
    Maintain.prototype.fuzhi = function () {
        this.maintainB = this.inValue;
    };
    Maintain.prototype.ngOnInit = function () {
        this.query();
    };
    //查询
    Maintain.prototype.query = function () {
        var _this = this;
        var param = { uniqueReqData: this.maintainB.code };
        this.workflowHttpService.IDictConfServicegetProcessDicts(param).subscribe(function (data) {
            if (data.msg.returnCode) {
                if (data.msg.returnCode.code == 'success') {
                    _this.tableData = data.msg.listArray;
                    _this.total = data.total;
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.code });
                }
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // 增加按钮事件
    Maintain.prototype.add = function () {
        this.headerTitle = '流程变量';
        this.display = true;
        this.showModel = '1';
        this.addValue = this.maintainB;
    };
    //添加的回调
    Maintain.prototype.addCall = function (param) {
        var _this = this;
        this.display = param;
        var param1 = { uniqueReqData: this.maintainB.code };
        this.workflowHttpService.IDictConfServicegetProcessDicts(param1).subscribe(function (data) {
            if (data.msg.returnCode) {
                if (data.msg.returnCode.code == 'success') {
                    _this.tableData = data.msg.listArray;
                    _this.total = data.total;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: '新增成功' });
                }
            }
        });
    };
    //修改按钮事件
    Maintain.prototype.update = function (car) {
        this.headerTitle = '流程变量';
        this.display = true;
        this.showModel = '2';
        this.updateValue = car;
    };
    //修改的回调
    Maintain.prototype.updateCall = function (param) {
        var _this = this;
        this.display = param;
        this.maintainBean = new _bean_maintain_bean__WEBPACK_IMPORTED_MODULE_1__["MaintainBean"]();
        var param1 = { uniqueReqData: this.maintainB.code };
        this.workflowHttpService.IDictConfServicegetProcessDicts(param1).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.tableData = data.msg.listArray;
                _this.total = data.total;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '修改成功' });
            }
        });
    };
    //待选变量查询
    Maintain.prototype.waitQuery = function () {
    };
    //删除变量
    Maintain.prototype.delete = function (car) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确定要删除吗',
            accept: function () {
                _this.workflowHttpService.IDictConfServiceDeleteProcessVariable({ "uniqueReqData": car.id }).subscribe(function (data) {
                    if (data.msg.returnCode.code == "success") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: '删除成功' });
                        _this.query();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败" });
                });
            },
            reject: function () {
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Maintain.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], Maintain.prototype, "outValue", void 0);
    Maintain = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'maintain',
            template: __webpack_require__(/*! ./maintain.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain.html"),
            styles: [__webpack_require__(/*! ./maintain.scss */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain.scss")],
            providers: [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]])
    ], Maintain);
    return Maintain;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/bean/other-version.bean.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/bean/other-version.bean.ts ***!
  \**********************************************************************************************************/
/*! exports provided: OtherVersionBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherVersionBean", function() { return OtherVersionBean; });
var OtherVersionBean = /** @class */ (function () {
    function OtherVersionBean() {
    }
    return OtherVersionBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version-backedit/other-version-backedit.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version-backedit/other-version-backedit.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  other-version-backedit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version-backedit/other-version-backedit.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version-backedit/other-version-backedit.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: OtherVersionBackeditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherVersionBackeditComponent", function() { return OtherVersionBackeditComponent; });
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

var OtherVersionBackeditComponent = /** @class */ (function () {
    function OtherVersionBackeditComponent() {
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    OtherVersionBackeditComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OtherVersionBackeditComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OtherVersionBackeditComponent.prototype, "outValue", void 0);
    OtherVersionBackeditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-other-version-backedit',
            template: __webpack_require__(/*! ./other-version-backedit.component.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version-backedit/other-version-backedit.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], OtherVersionBackeditComponent);
    return OtherVersionBackeditComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version-map/other-version-map.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version-map/other-version-map.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  other-version-map works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version-map/other-version-map.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version-map/other-version-map.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: OtherVersionMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherVersionMapComponent", function() { return OtherVersionMapComponent; });
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

var OtherVersionMapComponent = /** @class */ (function () {
    function OtherVersionMapComponent() {
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    OtherVersionMapComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OtherVersionMapComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OtherVersionMapComponent.prototype, "outValue", void 0);
    OtherVersionMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-other-version-map',
            template: __webpack_require__(/*! ./other-version-map.component.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version-map/other-version-map.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], OtherVersionMapComponent);
    return OtherVersionMapComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 base-table\">\r\n    <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n        <p-column field=\"code\" header=\"流程编码\"></p-column>\r\n        <p-column field=\"name\" header=\"流程名称\"></p-column>\r\n        <p-column field=\"processVersion\" header=\"流程版本\"></p-column>\r\n        <p-column field=\"running\" header=\"是否在使用\">\r\n            <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                <span>{{car.running | codeValuePie:running}}</span>\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column field=\"display\" header=\"流程描述\"></p-column>\r\n        <p-column header=\"操作\">\r\n            <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <!-- <span class=\"tabelUpdateIco\" (click)='update(item)'>查看流程图</span>\r\n                <span class=\"tabelDeleteIco\" (click)='delete(item)'>恢复到编辑版本</span> -->\r\n                <!-- <button p-Button (click)='lookVersionMap(car)'>查看流程图</button> -->\r\n                <button class='zdyBtn' (click)=\"lookVersionMap(car)\">查看流程图</button>\r\n                <button class='zdyBtn' (click)='VersionBack(car)'>恢复到该版本</button>\r\n            </ng-template>\r\n        </p-column>\r\n    </p-dataTable>\r\n    <!-- 分页 -->\r\n    <p-paginator rows=\"{{otherVersionBean.rows}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n</div>\r\n<!-- 弹出框-->\r\n<p-dialog [(visible)]=\"display\" appendTo='body' *ngIf='display' modal=\"modal\" width='900' [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <app-other-version-backedit *ngIf=\"showModel=='1'\" [inValue]=\"versionBackEditValue\" (outValue)=\"versionBackEditCall($event)\"></app-other-version-backedit>\r\n        <app-other-version-map *ngIf=\"showModel=='2'\" [inValue]=\"versionMapValue\" (outValue)=\"versionMapCall($event)\"></app-other-version-map>\r\n    </div>\r\n</p-dialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n.zdyBtn {\n  background: #0598e7;\n  border-radius: 5px;\n  border: none;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LWRlc2lnbi9mbG93LWNhdGFsb2cvb3RoZXItdmVyc2lvbi9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFx3b3JrZmxvd1xcd29ya2Zsb3ctZGVzaWduXFxmbG93LWNhdGFsb2dcXG90aGVyLXZlcnNpb25cXG90aGVyLXZlcnNpb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi93b3JrZmxvdy93b3JrZmxvdy1kZXNpZ24vZmxvdy1jYXRhbG9nL290aGVyLXZlcnNpb24vb3RoZXItdmVyc2lvbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YSB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi56ZHlCdG4ge1xyXG4gICAgYmFja2dyb3VuZDogIzA1OThlNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version.ts ***!
  \************************************************************************************************/
/*! exports provided: OtherVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherVersion", function() { return OtherVersion; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bean_other_version_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/other-version.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/bean/other-version.bean.ts");
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




// import { Running } from '../../../constant/codeValue';


var OtherVersion = /** @class */ (function () {
    function OtherVersion(workflowHttpService, confirmationService, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.precredit = '查看其他版本';
        this.otherVersionBean = new _bean_other_version_bean__WEBPACK_IMPORTED_MODULE_3__["OtherVersionBean"]();
        //每页多少条
        this.rows = 10;
        //模态框的标题
        this.headerTitle = "机构详情";
        //模态框是否显示
        this.display = false;
        //提示信息
        this.msgs = [];
        //是否在使用
        this.running = [];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        this.codeValues(); //调用方法，获取全部码值
        this.running = this.code['Running'];
    }
    OtherVersion.prototype.ngOnInit = function () {
        this.otherVersionBean.rows = 10;
        this.otherVersionBean.page = 1;
        this.queryClick();
    };
    //码值
    OtherVersion.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    OtherVersion.prototype.ngOnChanges = function () {
        this.fuzhi();
    };
    OtherVersion.prototype.fuzhi = function () {
        this.otherV = this.inValue;
    };
    //查询
    OtherVersion.prototype.queryClick = function () {
        var _this = this;
        this.otherVersionBean.GID = this.inValue.id;
        this.workflowHttpService.IProcessDefinitionServicegetOtherVersionProcess(this.otherVersionBean).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.tableData = data.msg.data;
                _this.total = data.msg.total;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.msg.returnCode.code });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //分页
    OtherVersion.prototype.paginate = function (event) {
        //每页显示的条数
        this.otherVersionBean.rows = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.otherVersionBean.page = currentPage;
        //调用查询的方法
        this.queryClick();
        this.otherVersionBean.page = 1;
    };
    //查看么流程图
    OtherVersion.prototype.lookVersionMap = function (car) {
        window.open('http://' + car.fileUrl + ':8080' + '/wfd/p/editor?id=' + car.code + '&wfversion=' + car.processVersion + '&name=' + car.name);
    };
    //恢复到编辑状态
    OtherVersion.prototype.VersionBack = function (car) {
        var _this = this;
        this.otherVersionBean.uniqueReqData = car.id;
        this.workflowHttpService.IProcessDefinitionServicetoEditVersion(this.otherVersionBean).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                // this.remaind();
                _this.outValue.emit(false);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.code });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //弹框提示
    OtherVersion.prototype.remaind = function () {
        // this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OtherVersion.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OtherVersion.prototype, "outValue", void 0);
    OtherVersion = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'other-version',
            template: __webpack_require__(/*! ./other-version.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version.html"),
            styles: [__webpack_require__(/*! ./other-version.scss */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version.scss")],
            providers: [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], OtherVersion);
    return OtherVersion;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/out-flow/out-flow.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/out-flow/out-flow.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n     <p-fileUpload name=\"myfile[]\" \r\n              url=\"{{UPLOAD}}\" \r\n              (onUpload)=\"load($event)\" \r\n              multiple=\"multiple\" \r\n              chooseLabel=\"浏览\" \r\n              uploadLabel=\"导入\" \r\n              cancelLabel=\"取消\"\r\n              accept=\"\">\r\n        </p-fileUpload>\r\n    <!--</div>\r\n    <form action=\"/10.1.60.211:4200.do\" enctype=\"multipart/form-data\" method=\"POST\">\r\n        <input type=\"file\" name=\"name\" />\r\n        <input type=\"submit\" value=\"导入\">\r\n    </form> -->\r\n    \r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/out-flow/out-flow.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/out-flow/out-flow.component.ts ***!
  \************************************************************************************************/
/*! exports provided: OutFlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutFlowComponent", function() { return OutFlowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
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




// Commfunc
var OutFlowComponent = /** @class */ (function () {
    function OutFlowComponent(workflowHttpService, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_1__["TZB_CUS_DOWNLOAD"];
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_1__["TZB_CUS_UPLOAD"];
        //提示信息
        this.msgs = [];
        this.uploadedFiles = [];
        this.files = [];
        this.fileList = []; //上传文件列表
    }
    OutFlowComponent.prototype.ngOnInit = function () {
    };
    OutFlowComponent.prototype.load = function (event) {
        var _this = this;
        //上传成功 后台返回的 文件路径 和文件名
        if (event.xhr.response) {
            this.fileList = JSON.parse(event.xhr.response);
            this.detailValue = this.fileList;
            console.log(this.detailValue, this.fileList[0].fileName);
        }
        var param = {
            name: 'wfData',
            fileName: this.fileList[0].fileName,
        };
        //  let commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        // commonHeader['comSERVICE_CODE'] ='IProcessDefinitionRoleService' ;
        // commonHeader['comMESSAGE_CODE'] ='exportprocess' ;
        this.workflowHttpService.IProcessDefinitionServiceImportprocess1(param).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '导入成功' });
                _this.outValue.emit(false);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OutFlowComponent.prototype, "outValue", void 0);
    OutFlowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-out-flow',
            template: __webpack_require__(/*! ./out-flow.component.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/out-flow/out-flow.component.html")
        }),
        __metadata("design:paramtypes", [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], OutFlowComponent);
    return OutFlowComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/txt-add/txt-add.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/txt-add/txt-add.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userform\">\r\n    <div class=\"ui-g-12\">\r\n        <span appValidation>流程所属目录：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowCatalogBean.storeName\" disabled formControlName=\"storeName\">\r\n        <div class=\"ui-g-10\" style=\"color:red; text-align:center\" *ngIf=\"!userform.controls['storeName'].valid&&userform.controls['storeName'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','storeName')\"> 流程所属目录不能为空！</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span appValidation>流程编码</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowCatalogBean.code\" formControlName=\"code\">\r\n        <div class=\"ui-g-10\" style=\"color:red; text-align:center\" *ngIf=\"!userform.controls['code'].valid&&userform.controls['code'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','code')\"> 流程编码不能为空！</p>\r\n            <p [hidden]=\"!userform.hasError('pattern','code')\"> 请输入1位至20位大写或小写字母或数字或下划线!</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span appValidation>流程名称：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowCatalogBean.name\" formControlName=\"name\">\r\n        <div class=\"ui-g-12\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['name'].valid&&userform.controls['name'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','name')\"> 流程名称不能为空！</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>流程描述：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowCatalogBean.display\" formControlName=\"display\">\r\n    </div>\r\n    <!-- <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n            流程回调：\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-8\">\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowCatalogBean.processClass\" formControlName=\"processClass\">\r\n        </div>\r\n    </div> -->\r\n</form>\r\n<div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"保存\" (click)='preserveClick()'></button>\r\n    <button pButton type=\"button\" label=\"重置\" (click)='reset()'></button>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/txt-add/txt-add.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/txt-add/txt-add.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form span {\n  width: 35%;\n  display: inline-block;\n  text-align: right; }\n\nform input {\n  width: 30%; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LWRlc2lnbi9mbG93LWNhdGFsb2cvdHh0LWFkZC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFx3b3JrZmxvd1xcd29ya2Zsb3ctZGVzaWduXFxmbG93LWNhdGFsb2dcXHR4dC1hZGRcXHR4dC1hZGQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBSnpCO0VBT1EsVUFBVSxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi93b3JrZmxvdy93b3JrZmxvdy1kZXNpZ24vZmxvdy1jYXRhbG9nL3R4dC1hZGQvdHh0LWFkZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcclxuICAgIHNwYW57XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBpbnB1dHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/txt-add/txt-add.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/txt-add/txt-add.ts ***!
  \************************************************************************************/
/*! exports provided: TxtAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxtAdd", function() { return TxtAdd; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_flow_catalog_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/flow-catalog.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/bean/flow-catalog.bean.ts");
/* harmony import */ var _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TxtAdd = /** @class */ (function () {
    function TxtAdd(workflowHttpService, fb) {
        this.workflowHttpService = workflowHttpService;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        this.flowCatalogBean = new _bean_flow_catalog_bean__WEBPACK_IMPORTED_MODULE_2__["FlowCatalogBean"]();
    }
    TxtAdd.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'storeName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'code': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[\w]{1,20}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'processClass': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'parentName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'display': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    };
    TxtAdd.prototype.ngOnChanges = function () {
        this.fuzhi();
    };
    TxtAdd.prototype.fuzhi = function () {
        if (this.inValue !== undefined) {
            this.flowCatalogBean.storeName = this.inValue.label;
            this.flowCatalogBean.storeId = this.inValue.id;
        }
    };
    // 新增保存
    TxtAdd.prototype.preserveClick = function () {
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
        this.workflowHttpService.IProcessDefinitionServiceAdd(this.flowCatalogBean).subscribe(function (data) {
            if (data.msg.returnCode.code == "success") {
                _this.outValue.emit(false);
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "保存成功" });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败" });
        });
    };
    //重置
    TxtAdd.prototype.reset = function () {
        this.flowCatalogBean.code = '';
        this.flowCatalogBean.name = '';
        this.flowCatalogBean.display = '';
        this.flowCatalogBean.processClass = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TxtAdd.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TxtAdd.prototype, "outValue", void 0);
    TxtAdd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'txt-add',
            template: __webpack_require__(/*! ./txt-add.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/txt-add/txt-add.html"),
            styles: [__webpack_require__(/*! ./txt-add.scss */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/txt-add/txt-add.scss")],
            providers: [_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], TxtAdd);
    return TxtAdd;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/txt-update/txt-update.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/txt-update/txt-update.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\r\n    <div class=\"ui-g-12\">\r\n        <span>流程所属目录：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowCatalogBean.storeName\" disabled>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>流程编码：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowCatalogBean.code\" disabled>\r\n    </div>\r\n    <div class=\"ui-g-12 \" [formGroup]=\"userform\">\r\n        <span>流程名称：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowCatalogBean.name\" formControlName=\"name\">\r\n        <div class=\"ui-g-12\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['name'].valid&&userform.controls['name'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','name')\"> 流程名称不能为空！</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 \">\r\n        <span>流程描述：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowCatalogBean.display\">\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"保存\" (click)='preserveClick()'></button>\r\n    <button pButton type=\"button\" label=\"重置\" (click)='reset()'></button>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/txt-update/txt-update.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/txt-update/txt-update.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form span {\n  width: 35%;\n  display: inline-block;\n  text-align: right; }\n\n.form input {\n  width: 30%; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LWRlc2lnbi9mbG93LWNhdGFsb2cvdHh0LXVwZGF0ZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFx3b3JrZmxvd1xcd29ya2Zsb3ctZGVzaWduXFxmbG93LWNhdGFsb2dcXHR4dC11cGRhdGVcXHR4dC11cGRhdGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBSnpCO0VBT1EsVUFBVSxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi93b3JrZmxvdy93b3JrZmxvdy1kZXNpZ24vZmxvdy1jYXRhbG9nL3R4dC11cGRhdGUvdHh0LXVwZGF0ZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm17XHJcbiAgICBzcGFue1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxufVxyXG4uYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/txt-update/txt-update.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/txt-update/txt-update.ts ***!
  \******************************************************************************************/
/*! exports provided: TxtUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TxtUpdate", function() { return TxtUpdate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_flow_catalog_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bean/flow-catalog.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/bean/flow-catalog.bean.ts");
/* harmony import */ var _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TxtUpdate = /** @class */ (function () {
    function TxtUpdate(workflowHttpService, fb) {
        this.workflowHttpService = workflowHttpService;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        //实体
        this.flowCatalogBean = new _bean_flow_catalog_bean__WEBPACK_IMPORTED_MODULE_1__["FlowCatalogBean"]();
    }
    TxtUpdate.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
    };
    TxtUpdate.prototype.ngOnChanges = function () {
        this.fuzhi();
    };
    //父级拿到的值
    TxtUpdate.prototype.fuzhi = function () {
        if (this.inValue !== undefined) {
            this.flowCatalogBean.storeName = this.inValue.storeName;
            this.flowCatalogBean.code = this.inValue.code;
            this.flowCatalogBean.name = this.inValue.name;
            this.flowCatalogBean.display = this.inValue.display;
            this.flowCatalogBean.processClass = this.inValue.processClass;
            this.flowCatalogBean.id = this.inValue.id;
        }
    };
    //修改-保存
    TxtUpdate.prototype.preserveClick = function () {
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
        this.flowCatalogBean.wftype = this.inValueUpdate.wftype,
            this.flowCatalogBean.apptype = this.inValueUpdate.apptype,
            this.flowCatalogBean.bizType = this.inValueUpdate.bizType,
            this.workflowHttpService.IProcessDefinitionServiceUpdate(this.flowCatalogBean).subscribe(function (data) {
                if (data.msg.returnCode.code == "success") {
                    _this.outValue.emit(false);
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: data.msg.returnCode.message });
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败" });
            });
    };
    //取消
    TxtUpdate.prototype.reset = function () {
        this.flowCatalogBean.code = '';
        this.flowCatalogBean.name = '';
        this.flowCatalogBean.display = '';
        this.flowCatalogBean.processClass = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TxtUpdate.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TxtUpdate.prototype, "inValueUpdate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TxtUpdate.prototype, "outValue", void 0);
    TxtUpdate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'txt-update',
            template: __webpack_require__(/*! ./txt-update.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/txt-update/txt-update.html"),
            styles: [__webpack_require__(/*! ./txt-update.scss */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/txt-update/txt-update.scss")]
        }),
        __metadata("design:paramtypes", [_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], TxtUpdate);
    return TxtUpdate;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/bean/visit-control.bean.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/bean/visit-control.bean.ts ***!
  \**********************************************************************************************************/
/*! exports provided: VisitControlBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitControlBean", function() { return VisitControlBean; });
var VisitControlBean = /** @class */ (function () {
    function VisitControlBean() {
    }
    return VisitControlBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/flow-power/flow-power.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/flow-power/flow-power.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        工作组：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText >\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        创建权限：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText >\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        管理权限：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText >\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        查询权限：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText >\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        结束权限：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText >\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-3\"></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"保存\" (click)='preserveClick()'></button></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"重置\" (click)='reset()'></button></div>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/flow-power/flow-power.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/flow-power/flow-power.ts ***!
  \********************************************************************************************************/
/*! exports provided: FlowPower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowPower", function() { return FlowPower; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_flow_catalog_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bean/flow-catalog.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/bean/flow-catalog.bean.ts");
/* harmony import */ var _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlowPower = /** @class */ (function () {
    function FlowPower(workflowHttpService, fb) {
        this.workflowHttpService = workflowHttpService;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        this.flowCatalogBean = new _bean_flow_catalog_bean__WEBPACK_IMPORTED_MODULE_2__["FlowCatalogBean"]();
    }
    FlowPower.prototype.ngOnInit = function () {
    };
    // 保存
    FlowPower.prototype.preserveClick = function () {
        var _this = this;
        //提交服务
        this.workflowHttpService.IProcessDefinitionServiceAdd(this.flowCatalogBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.outValue.emit(false);
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "保存成功" });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "后台错误" });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    //重置
    FlowPower.prototype.reset = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FlowPower.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FlowPower.prototype, "outValue", void 0);
    FlowPower = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flow-power',
            template: __webpack_require__(/*! ./flow-power.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/flow-power/flow-power.html"),
            providers: [_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FlowPower);
    return FlowPower;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/visit-control-add/visit-control-add.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/visit-control-add/visit-control-add.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n            工作组：\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-8\">\r\n            <p-dropdown [options]=\"groupType\" placeholder=\"请选择\" [(ngModel)]=\"visitControlBean.groupType\" formControlName=\"groupType\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n            创建权限：\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-8\">\r\n            <p-dropdown [options]=\"canCreate\" placeholder=\"请选择\" [(ngModel)]=\"visitControlBean.canCreate\" formControlName=\"canCreate\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n            管理权限：\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-8\">\r\n            <p-dropdown [options]=\"canManager\" placeholder=\"请选择\" [(ngModel)]=\"visitControlBean.canManager\" formControlName=\"canManager\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n            查询权限：\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-8\">\r\n            <p-dropdown [options]=\"canQuery\" placeholder=\"请选择\" [(ngModel)]=\"visitControlBean.canQuery\" formControlName=\"canQuery\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n            结束权限：\r\n        </div>\r\n        <div class=\"ui-g-12 ui-md-8\">\r\n            <p-dropdown [options]=\"canDelete\" placeholder=\"请选择\" [(ngModel)]=\"visitControlBean.canDelete\" formControlName=\"canDelete\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"保存\" (click)='preserveClick()'></button></div>\r\n            <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"重置\" (click)='reset()'></button></div>\r\n        </div>\r\n    </div>\r\n\r\n</form>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/visit-control-add/visit-control-add.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/visit-control-add/visit-control-add.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: VisitControlAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitControlAddComponent", function() { return VisitControlAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var _bean_visit_control_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/visit-control.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/bean/visit-control.bean.ts");
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



// import { DoYouHave } from '../../../../constant/codeValue'

var VisitControlAddComponent = /** @class */ (function () {
    function VisitControlAddComponent(workflowHttpService, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.commfunc = commfunc;
        this.visitControlBean = new _bean_visit_control_bean__WEBPACK_IMPORTED_MODULE_2__["VisitControlBean"]();
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.msgs = []; //提示信息
        this.canCreate = []; //	流程创建权限
        this.canDelete = []; //流程删除权限
        this.canQuery = []; //流程查询权限
        this.canManager = []; //流程管理权限
        this.codeValues(); //调用方法，获取全部码值
        this.canCreate = this.code['DoYouHave'];
        this.canDelete = this.code['DoYouHave'];
        this.canManager = this.code['DoYouHave'];
        this.canQuery = this.code['DoYouHave'];
    }
    VisitControlAddComponent.prototype.ngOnInit = function () {
    };
    //码值
    VisitControlAddComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //确定按钮
    VisitControlAddComponent.prototype.preserveClick = function () {
        var _this = this;
        this.workflowHttpService.IProcessDefinitionRoleServiceAdd(this.visitControlBean).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.outValue.emit(false);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.msg.returnCode.code });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.code });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //取消按钮
    VisitControlAddComponent.prototype.reset = function () {
        this.visitControlBean = new _bean_visit_control_bean__WEBPACK_IMPORTED_MODULE_2__["VisitControlBean"]();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VisitControlAddComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VisitControlAddComponent.prototype, "outValue", void 0);
    VisitControlAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visit-control-add',
            template: __webpack_require__(/*! ./visit-control-add.component.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/visit-control-add/visit-control-add.component.html"),
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], VisitControlAddComponent);
    return VisitControlAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/visit-control.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/visit-control.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <button pButton type=\"button\" label=\"新增\" (click)=\"add()\"></button>\r\n</div>\r\n<div class=\"ui-g-12 base-table\">\r\n    <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\">\r\n        <p-column field=\"code\" header=\"工作组名称\"></p-column>\r\n        <p-column field=\"name\" header=\"创建权限\"></p-column>\r\n        <p-column field=\"display\" header=\"管理权限\"></p-column>\r\n        <p-column field=\"processClass\" header=\"查询权限\"></p-column>\r\n        <p-column field=\"processClass\" header=\"结束权限\"></p-column>\r\n        <!-- <p-column header=\"操作\">\r\n            <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <span class=\"tabelUpdateIco\" (click)='update(item)'>修改</span>\r\n                <span class=\"tabelDeleteIco\" (click)='delete(item)'>删除</span>\r\n            </ng-template>\r\n        </p-column> -->\r\n    </p-dataTable>\r\n    <!-- 分页 -->\r\n    <p-paginator rows=\"{{visitControlBean.rows}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n</div>\r\n\r\n\r\n<!-- 弹出框-->\r\n<p-dialog [(visible)]=\"display\"  width='600' [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <app-visit-control-add *ngIf=\"showModel=='1'\" (outValue)=\"addFileCall($event)\"></app-visit-control-add>\r\n        <!-- <maintain-update *ngIf=\"showModel=='2'\" [inValue]=\"updateFileValue\" (outValue)=\"updateFileCall($event)\"></maintain-update> -->\r\n    </div>\r\n</p-dialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/visit-control.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/visit-control.ts ***!
  \************************************************************************************************/
/*! exports provided: VisitControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitControl", function() { return VisitControl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bean_visit_control_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/visit-control.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/bean/visit-control.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//岗位

// import { FlowCatalogBean } from '../bean/flow-catalog.bean';



var VisitControl = /** @class */ (function () {
    function VisitControl(workflowHttpService, confirmationService) {
        this.workflowHttpService = workflowHttpService;
        this.confirmationService = confirmationService;
        this.precredit = '访问控制';
        this.visitControlBean = new _bean_visit_control_bean__WEBPACK_IMPORTED_MODULE_3__["VisitControlBean"]();
        //每页多少条
        // pageSize: number = 10;
        //模态框的标题
        this.headerTitle = "访问控制";
        //模态框是否显示
        this.display = false;
        //修改的参数
        this.updateValue = [];
        //提示信息
        this.msgs = [];
    }
    VisitControl.prototype.ngOnInit = function () {
        this.visitControlBean.rows = 10;
        this.visitControlBean.page = 1;
        this.queryClick();
    };
    //查询
    VisitControl.prototype.queryClick = function () {
        var _this = this;
        this.workflowHttpService.IProcessDefinitionRoleServiceGetData(this.visitControlBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.postInfo;
                _this.total = data.total;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '成功查询' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.code });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // 增加按钮事件
    VisitControl.prototype.add = function () {
        this.headerTitle = '变量维护新增';
        this.display = true;
        this.showModel = '1';
    };
    //添加的回调
    VisitControl.prototype.addCall = function (param) {
        this.display = param;
        // this.flowCatalogBean.pageNum = 1;
        this.queryClick();
    };
    // //修改按钮事件
    // update(item) {
    //     this.headerTitle = '变量维护修改';
    //     this.display = true;
    //     this.showModel = '2';
    //     this.updateValue = item;
    // }
    // //修改的回调
    // updateCall(param) {
    //     this.display = param;
    //     this.flowCatalogBean = new FlowCatalogBean();
    //     this.queryClick();
    // }
    //删除按钮事件
    VisitControl.prototype.delete = function (item) {
        // this.confirmationService.confirm({
        //     message: '确认要删除吗?',
        //     accept: () => {
        //         // 条件
        //         let param = { postId: item.postId };
        //         this.commonHttpService.deletePost(param).subscribe(data => {
        //             if (data.returnCode.code == "success") {
        //                 this.msgs = [];
        //                 this.msgs.push({ severity: 'error', summary: '提示', detail: '删除成功' });
        //                 this.queryClick();
        //             } else {
        //                 this.msgs = [];
        //                 this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
        //             }
        //         }, error => {
        //             this.msgs = [];
        //             this.msgs.push({ severity: 'error', summary: '提示', detail: "删除失败" });
        //         })
        //     }
        // });
    };
    //分页
    VisitControl.prototype.paginate = function (event) {
        // //每页显示的条数
        // this.pageSize = event.rows;
        // //当前页
        // let currentPage = event.page + 1;
        // this.flowCatalogBean.pageNum = currentPage;
        // //调用查询的方法
        // this.queryClick();
        // this.flowCatalogBean.pageNum = 1;
    };
    //返回的值
    VisitControl.prototype.outValue = function (param) {
        this.display = param.display;
    };
    VisitControl = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'visit-control',
            template: __webpack_require__(/*! ./visit-control.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/visit-control.html"),
            providers: [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        })
        //岗位管理
        ,
        __metadata("design:paramtypes", [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], VisitControl);
    return VisitControl;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-design/bean/flow-design.bean.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-design/bean/flow-design.bean.ts ***!
  \*****************************************************************************************/
/*! exports provided: FlowDesignBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowDesignBean", function() { return FlowDesignBean; });
var FlowDesignBean = /** @class */ (function () {
    function FlowDesignBean() {
    }
    return FlowDesignBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design-add/flow-design-add.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design-add/flow-design-add.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        流程所属目录：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        流程名称：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        流程编码：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        流程描述：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-3\"></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"保存\"></button></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"重置\"></button></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design-add/flow-design-add.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design-add/flow-design-add.ts ***!
  \***************************************************************************************************/
/*! exports provided: FlowDesignAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowDesignAdd", function() { return FlowDesignAdd; });
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

var FlowDesignAdd = /** @class */ (function () {
    function FlowDesignAdd() {
    }
    FlowDesignAdd.prototype.ngOnInit = function () {
    };
    FlowDesignAdd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flow-design-add',
            template: __webpack_require__(/*! ./flow-design-add.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design-add/flow-design-add.html")
        }),
        __metadata("design:paramtypes", [])
    ], FlowDesignAdd);
    return FlowDesignAdd;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design-look/flow-design-look.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design-look/flow-design-look.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        流程所属目录：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        流程名称：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        流程编码：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        流程描述：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-3\"></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"保存\"></button></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"重置\"></button></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design-look/flow-design-look.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design-look/flow-design-look.ts ***!
  \*****************************************************************************************************/
/*! exports provided: FlowDesignLook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowDesignLook", function() { return FlowDesignLook; });
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

var FlowDesignLook = /** @class */ (function () {
    function FlowDesignLook() {
    }
    FlowDesignLook.prototype.ngOnInit = function () {
    };
    FlowDesignLook = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flow-design-look',
            template: __webpack_require__(/*! ./flow-design-look.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design-look/flow-design-look.html")
        }),
        __metadata("design:paramtypes", [])
    ], FlowDesignLook);
    return FlowDesignLook;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design-update/flow-design-update.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design-update/flow-design-update.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        流程所属目录：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        流程名称：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        流程编码：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        流程描述：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-3\"></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"保存\"></button></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"重置\"></button></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design-update/flow-design-update.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design-update/flow-design-update.ts ***!
  \*********************************************************************************************************/
/*! exports provided: FlowDesignUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowDesignUpdate", function() { return FlowDesignUpdate; });
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

var FlowDesignUpdate = /** @class */ (function () {
    function FlowDesignUpdate() {
    }
    FlowDesignUpdate.prototype.ngOnInit = function () {
    };
    FlowDesignUpdate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flow-design-update',
            template: __webpack_require__(/*! ./flow-design-update.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design-update/flow-design-update.html")
        }),
        __metadata("design:paramtypes", [])
    ], FlowDesignUpdate);
    return FlowDesignUpdate;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header-title [Info]=\"precredit\"></header-title>\r\n\r\n\r\n<div class=\"ui-g\" style=\"margin-top:20px;\">\r\n    <button pButton type=\"button\" label=\"查询\" (click)=\"queryClick()\" style=\"margin-left:25%;\"></button>\r\n    <button pButton type=\"button\" label=\"查看\" (click)=\"look()\" style=\"margin-left:5%;\"></button>\r\n    <button pButton type=\"button\" label=\"增加\" (click)=\"add()\" style=\"margin-left:5%;\"></button>\r\n    <button pButton type=\"button\" label=\"修改\" (click)=\"update()\" style=\"margin-left:5%;\"></button>\r\n    <button pButton type=\"button\" label=\"删除\" (click)=\"delete()\" style=\"margin-left:5%;\"></button>\r\n</div>\r\n\r\n<hr style=\"border:1px solid #888;\">\r\n<!-- 表格 -->\r\n<p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\" >\r\n    <p-column field=\"vin\" header=\"流程编码\"></p-column>\r\n    <p-column field=\"year\" header=\"流程名称\"></p-column>\r\n    <p-column field=\"num\" header=\"流程描述\"></p-column>\r\n\r\n</p-dataTable>\r\n\r\n<!-- 分页 -->\r\n<p-paginator rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\r\n\r\n\r\n<!-- 弹出框-->\r\n<p-dialog [(visible)]=\"display\" modal=\"modal\" width='400' [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <flow-design-add *ngIf=\"showModel=='1'\" (outValue)=\"addCall($event)\"></flow-design-add>\r\n        <flow-design-update *ngIf=\"showModel=='2'\" (outValue)=\"updateCall($event)\"></flow-design-update>\r\n        <flow-design-look *ngIf=\"showModel=='3'\"></flow-design-look>\r\n    </div>\r\n</p-dialog> \r\n\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FlowDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowDesignComponent", function() { return FlowDesignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bean_flow_design_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/flow-design.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-design/bean/flow-design.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlowDesignComponent = /** @class */ (function () {
    function FlowDesignComponent(commonHttpService, confirmationService) {
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        this.precredit = '流程查询';
        //提示信息
        this.msgs = [];
        this.flowDesignBean = new _bean_flow_design_bean__WEBPACK_IMPORTED_MODULE_3__["FlowDesignBean"]();
        //每页多少条
        this.pageSize = '10';
        //模态框的标题
        this.headerTitle = "修改";
        //模态框是否显示
        this.display = false;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
    }
    FlowDesignComponent.prototype.ngOnInit = function () {
    };
    //查询
    FlowDesignComponent.prototype.queryClick = function () {
        // this.commonHttpService.Test(null).subscribe(data => {
        //this.commonHttpService.findAllPagespaymentGatewayConfig(this.powerManageBean).subscribe(data=>{
        //       if (data.errorMessage == null) {
        //           this.tableData = data.returnList;
        //           this.total = data.totalPages;
        //       } else {
        //           this.msgs = [];
        //           this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
        //       }
        //   }, error => {
        //       this.msgs = [];
        //       this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        //   }
        // )
    };
    //分页
    FlowDesignComponent.prototype.paginate = function (event) {
        ;
        //每页显示的条数
        this.pageSize = event.rows;
        //当前页
        var currentPage = event.page + 1 + '';
        this.flowDesignBean.pageNumber = currentPage;
        //调用查询的方法
        this.queryClick();
        this.flowDesignBean.pageNumber = '1';
    };
    // 增加
    FlowDesignComponent.prototype.add = function () {
        this.headerTitle = '流程增加';
        this.display = true;
        this.showModel = 1;
    };
    //添加后返回的值
    FlowDesignComponent.prototype.addCall = function (param) {
        this.display = param;
        // this.administerManageBean.pageNumber = '1';
        this.queryClick();
    };
    // 修改
    FlowDesignComponent.prototype.update = function () {
        this.headerTitle = '流程修改';
        this.display = true;
        this.showModel = 2;
    };
    //修改的回调
    FlowDesignComponent.prototype.updateCall = function (param) {
        this.display = param;
        // this.administerManageBean.pageNumber = '1';
        this.queryClick();
    };
    FlowDesignComponent.prototype.look = function () {
        this.headerTitle = '流程查看';
        this.display = true;
        this.showModel = 3;
    };
    //删除
    FlowDesignComponent.prototype.delete = function () {
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                //条件
                //   let param ={paymentGatewayConfigId:car.paymentGatewayConfigId};
                //   this.commonHttpService.deletePaymentGatewayConfig(param).subscribe(data => {
                //     if(data.errorMessage==null){
                //       this.administerManageBean.pageNumber='1';
                //       this.queryClick();
                //    }else{
                //      this.msgs=[];
                //      this.msgs.push({severity:'error',summary:'提示',detail:data.errorMessage});
                //    }
                //   }, error => {
                //     this.msgs = [];
                //     this.msgs.push({ severity: 'error', summary: '提示', detail: "删除失败" });
                //   })
            }
        });
    };
    FlowDesignComponent.prototype.treeClick = function (param) {
        alert(JSON.stringify(param.data));
    };
    FlowDesignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flow-design',
            template: __webpack_require__(/*! ./flow-design.component.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design.component.html"),
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomeHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], FlowDesignComponent);
    return FlowDesignComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/bean/flow-variate.bean.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-variate/bean/flow-variate.bean.ts ***!
  \*******************************************************************************************/
/*! exports provided: FlowVariateBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowVariateBean", function() { return FlowVariateBean; });
var FlowVariateBean = /** @class */ (function () {
    function FlowVariateBean() {
    }
    return FlowVariateBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-add/flow-variate-add.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-add/flow-variate-add.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userform\">\r\n    <div class=\"ui-g-12\">\r\n        <span appValidation>字典编码：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowVariateBean.dicCode\" formControlName=\"dicCode\">\r\n        <div class=\"ui-g-12\" style=\"color:red; text-align:center\" *ngIf=\"!userform.controls['dicCode'].valid&&userform.controls['dicCode'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','dicCode')\"> 字典编码不能为空！</p>\r\n            <p [hidden]=\"!userform.hasError('pattern','dicCode')\"> 请输入1位至255位大写或小写字母或数字或下划线!</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span appValidation>字典名称：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowVariateBean.name\" formControlName=\"name\">\r\n        <div class=\"ui-g-12\" style=\"color:red; text-align:center\" *ngIf=\"!userform.controls['name'].valid&&userform.controls['name'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','name')\">字典名称不能为空！</p>\r\n            <p [hidden]=\"!userform.hasError('pattern','name')\"> 最长输入255位且不能有空格!</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span appValidation>字典类型：</span>\r\n        <p-dropdown [options]=\"dicTypeSelect\" placeholder=\"请选择\" [(ngModel)]=\"flowVariateBean.dicType\" formControlName=\"dicType\"></p-dropdown>\r\n        <div class=\"ui-g-12\" style=\"color:red; text-align:center\" *ngIf=\"!userform.controls['dicType'].valid&&userform.controls['dicType'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','dicType')\">字典类型不能为空！</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span appValidation>数据类型：</span>\r\n        <p-dropdown [options]=\"typeSelect\" placeholder=\"请选择\" [(ngModel)]=\"flowVariateBean.type\" formControlName=\"type\"></p-dropdown>\r\n        <div class=\"ui-g-12\" style=\"color:red; text-align:center\" *ngIf=\"!userform.controls['type'].valid&&userform.controls['type'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','type')\"> 数据类型不能为空！</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>长度：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowVariateBean.length\" formControlName=\"length\">\r\n        <div class=\"ui-g-12\" style=\"color:red; text-align:center\" *ngIf=\"!userform.controls['length'].valid&&userform.controls['length'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('pattern','length')\"> 请输入数字，长度最多为8位!</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>小数位：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowVariateBean.dot\" formControlName=\"dot\">\r\n        <div class=\"ui-g-12\" style=\"color:red; text-align:center\" *ngIf=\"!userform.controls['dot'].valid&&userform.controls['dot'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('pattern','dot')\">请输入数字，小数位最多保留4位!</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>初始值：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowVariateBean.dicValue\" formControlName=\"dicValue\">\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>备注：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowVariateBean.display\" formControlName=\"display\">\r\n    </div>\r\n</form>\r\n\r\n<div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"保存\" (click)='preserveClick()'></button>\r\n    <button pButton type=\"button\" label=\"重置\" (click)='reset()'></button>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-add/flow-variate-add.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-add/flow-variate-add.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form span {\n  display: inline-block;\n  width: 35% !important;\n  text-align: right; }\n\nform input {\n  width: 30% !important; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\n:host/deep/form .ui-dropdown {\n  width: 30% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LWRlc2lnbi9mbG93LXZhcmlhdGUvZmxvdy12YXJpYXRlLWFkZC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFx3b3JrZmxvd1xcd29ya2Zsb3ctZGVzaWduXFxmbG93LXZhcmlhdGVcXGZsb3ctdmFyaWF0ZS1hZGRcXGZsb3ctdmFyaWF0ZS1hZGQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBSnpCO0VBT1EscUJBQXFCLEVBQUE7O0FBRzdCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1EsWUFBWSxFQUFBOztBQUdwQjtFQUNJLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LWRlc2lnbi9mbG93LXZhcmlhdGUvZmxvdy12YXJpYXRlLWFkZC9mbG93LXZhcmlhdGUtYWRkLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xyXG4gICAgc3BhbntcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDM1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcbjpob3N0L2RlZXAvZm9ybSAudWktZHJvcGRvd257XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-add/flow-variate-add.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-add/flow-variate-add.ts ***!
  \******************************************************************************************************/
/*! exports provided: FlowVariateAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowVariateAdd", function() { return FlowVariateAdd; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_flow_variate_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/flow-variate.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/bean/flow-variate.bean.ts");
/* harmony import */ var _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
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




// import { NumType, DicTypeSelect } from '../../../constant/codeValue'

var FlowVariateAdd = /** @class */ (function () {
    function FlowVariateAdd(workflowHttpService, fb, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //数据类型
        this.typeSelect = [];
        //字典类型
        this.dicTypeSelect = [];
        //提示信息
        this.msgs = [];
        this.flowVariateBean = new _bean_flow_variate_bean__WEBPACK_IMPORTED_MODULE_2__["FlowVariateBean"]();
        this.codeValues(); //调用方法，获取全部码值
        this.typeSelect = this.code['NumType'];
        this.dicTypeSelect = this.code['DicTypeSelect'];
    }
    FlowVariateAdd.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'dicType': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'dicCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[\w]{1,255}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'type': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[\w\u4E00-\u9FA5]{1,255}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'length': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]{1,8}$/)]),
            'dot': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]{1,4}$/)]),
            'dicValue': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'display': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    };
    //码值
    FlowVariateAdd.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    // 保存
    FlowVariateAdd.prototype.preserveClick = function () {
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
        this.workflowHttpService.IDictConfServiceAdd(this.flowVariateBean).subscribe(function (data) {
            if (data.msg.returnCode.code == "success") {
                _this.outValue.emit(false);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.msg.returnCode.code });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    //重置
    FlowVariateAdd.prototype.reset = function () {
        this.flowVariateBean = new _bean_flow_variate_bean__WEBPACK_IMPORTED_MODULE_2__["FlowVariateBean"]();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FlowVariateAdd.prototype, "outValue", void 0);
    FlowVariateAdd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flow-variate-add',
            template: __webpack_require__(/*! ./flow-variate-add.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-add/flow-variate-add.html"),
            styles: [__webpack_require__(/*! ./flow-variate-add.scss */ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-add/flow-variate-add.scss")],
            providers: [_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], FlowVariateAdd);
    return FlowVariateAdd;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-look/flow-variate-look.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-look/flow-variate-look.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        字典编码：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        字典名称：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        数据类型：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <p-dropdown  placeholder=\"请选择\" [style]=\"{'width':'163px'}\"></p-dropdown>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        长度：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        小数位：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        备注：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div><div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        字典类型：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <p-dropdown  placeholder=\"请选择\" [style]=\"{'width':'163px'}\"></p-dropdown>\r\n    </div>\r\n</div><div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        初始值：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-3\"></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"保存\"></button></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"重置\"></button></div>\r\n    </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-look/flow-variate-look.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-look/flow-variate-look.ts ***!
  \********************************************************************************************************/
/*! exports provided: FlowVariateLook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowVariateLook", function() { return FlowVariateLook; });
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

var FlowVariateLook = /** @class */ (function () {
    function FlowVariateLook() {
    }
    FlowVariateLook.prototype.ngOnInit = function () {
    };
    FlowVariateLook = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flow-variate-look',
            template: __webpack_require__(/*! ./flow-variate-look.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-look/flow-variate-look.html")
        }),
        __metadata("design:paramtypes", [])
    ], FlowVariateLook);
    return FlowVariateLook;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-update/bean/flow-varia-updata.bean.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-update/bean/flow-varia-updata.bean.ts ***!
  \********************************************************************************************************************/
/*! exports provided: FlowVariaUpdateBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowVariaUpdateBean", function() { return FlowVariaUpdateBean; });
var FlowVariaUpdateBean = /** @class */ (function () {
    function FlowVariaUpdateBean() {
    }
    return FlowVariaUpdateBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-update/flow-variate-update.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-update/flow-variate-update.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userform\">\r\n    <div class=\"ui-g-12\">\r\n        <span appValidation>字典编码：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowVariaUpdateBean.dicCode\" formControlName=\"dicCode\">\r\n        <div class=\"ui-g-12\" style=\"color:red; text-align:center\" *ngIf=\"!userform.controls['dicCode'].valid&&userform.controls['dicCode'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','dicCode')\"> 字典编码不能为空！</p>\r\n            <p [hidden]=\"!userform.hasError('pattern','dicCode')\"> 请输入1位至255位大写或小写字母或数字或下划线!</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span appValidation>字典名称：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowVariaUpdateBean.name\" formControlName=\"name\">\r\n        <div class=\"ui-g-12\" style=\"color:red; text-align:center\" *ngIf=\"!userform.controls['name'].valid&&userform.controls['name'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','name')\">字典名称不能为空！</p>\r\n            <p [hidden]=\"!userform.hasError('pattern','name')\"> 最长输入255位且不能有空格!</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span appValidation>字典类型：</span>\r\n        <p-dropdown [options]=\"dicType\" placeholder=\"请选择\" [(ngModel)]=\"flowVariaUpdateBean.dicType\" formControlName=\"dicType\"></p-dropdown>\r\n        <div class=\"ui-g-12\" style=\"color:red; text-align:center\" *ngIf=\"!userform.controls['dicType'].valid&&userform.controls['dicType'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','dicType')\">字典类型不能为空！</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span appValidation>数据类型：</span>\r\n        <p-dropdown [options]=\"type\" placeholder=\"请选择\" [(ngModel)]=\"flowVariaUpdateBean.type\" formControlName=\"type\"></p-dropdown>\r\n        <div class=\"ui-g-12\" style=\"color:red; text-align:center\" *ngIf=\"!userform.controls['type'].valid&&userform.controls['type'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('required','type')\"> 数据类型不能为空！</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>长度：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowVariaUpdateBean.length\" formControlName=\"length\">\r\n        <div class=\"ui-g-12\" style=\"color:red; text-align:center\" *ngIf=\"!userform.controls['length'].valid&&userform.controls['length'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('pattern','length')\"> 请输入数字，长度为最多为8位!</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>小数位：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowVariaUpdateBean.dot\" formControlName=\"dot\">\r\n        <div class=\"ui-g-12\" style=\"color:red; text-align:center\" *ngIf=\"!userform.controls['dot'].valid&&userform.controls['dot'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('pattern','dot')\">请输入数字，小数位最多保留4位!</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>初始值：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowVariaUpdateBean.dicValue\" formControlName=\"dicValue\">\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <span>备注：</span>\r\n        <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowVariaUpdateBean.display\" formControlName=\"display\">\r\n    </div>\r\n</form>\r\n<div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"保存\" (click)='preserveClick()'></button>\r\n    <button pButton type=\"button\" label=\"重置\" (click)='modifyCloseBtn()'></button>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-update/flow-variate-update.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-update/flow-variate-update.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form span {\n  display: inline-block;\n  width: 35%;\n  text-align: right; }\n\nform input {\n  width: 30%; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\n:host/deep/form .ui-dropdown {\n  width: 30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LWRlc2lnbi9mbG93LXZhcmlhdGUvZmxvdy12YXJpYXRlLXVwZGF0ZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFx3b3JrZmxvd1xcd29ya2Zsb3ctZGVzaWduXFxmbG93LXZhcmlhdGVcXGZsb3ctdmFyaWF0ZS11cGRhdGVcXGZsb3ctdmFyaWF0ZS11cGRhdGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsaUJBQWlCLEVBQUE7O0FBSnpCO0VBT1EsVUFBVSxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLFlBQVksRUFBQTs7QUFHcEI7RUFDSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvd29ya2Zsb3cvd29ya2Zsb3ctZGVzaWduL2Zsb3ctdmFyaWF0ZS9mbG93LXZhcmlhdGUtdXBkYXRlL2Zsb3ctdmFyaWF0ZS11cGRhdGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxufVxyXG4uYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgIH1cclxufVxyXG46aG9zdC9kZWVwL2Zvcm0gLnVpLWRyb3Bkb3due1xyXG4gICAgd2lkdGg6IDMwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-update/flow-variate-update.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-update/flow-variate-update.ts ***!
  \************************************************************************************************************/
/*! exports provided: FlowVariateUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowVariateUpdate", function() { return FlowVariateUpdate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_flow_varia_updata_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/flow-varia-updata.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-update/bean/flow-varia-updata.bean.ts");
/* harmony import */ var _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
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




// import { NumType, DicTypeSelect } from '../../../constant/codeValue'

var FlowVariateUpdate = /** @class */ (function () {
    function FlowVariateUpdate(workflowHttpService, fb, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        //实体
        this.flowVariaUpdateBean = new _bean_flow_varia_updata_bean__WEBPACK_IMPORTED_MODULE_2__["FlowVariaUpdateBean"]();
        //数据类型
        this.type = [];
        //字典类型
        this.dicType = [];
        this.codeValues(); //调用方法，获取全部码值
        this.type = this.code['NumType'];
        this.dicType = this.code['DicTypeSelect'];
    }
    FlowVariateUpdate.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'dicType': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'dicCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[\w]{1,255}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'type': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[\w\u4E00-\u9FA5]{1,255}$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'length': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]{1,8}$/)]),
            'dot': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[0-9]{1,4}$/)]),
            'dicValue': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'display': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    };
    //码值
    FlowVariateUpdate.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    FlowVariateUpdate.prototype.ngOnChanges = function () {
        this.fuzhi();
    };
    FlowVariateUpdate.prototype.fuzhi = function () {
        this.flowVariaUpdateBean = Object.assign({}, this.inValue);
    };
    //提交
    FlowVariateUpdate.prototype.preserveClick = function () {
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
        this.workflowHttpService.IDictConfServiceUpdate(this.flowVariaUpdateBean).subscribe(function (data) {
            if (data.msg.returnCode.code == "success") {
                _this.outValue.emit(false);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.msg.returnCode.code });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败" });
        });
    };
    //取消
    FlowVariateUpdate.prototype.modifyCloseBtn = function () {
        // this.outValue.emit(false);
        this.flowVariaUpdateBean = new _bean_flow_varia_updata_bean__WEBPACK_IMPORTED_MODULE_2__["FlowVariaUpdateBean"]();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FlowVariateUpdate.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FlowVariateUpdate.prototype, "outValue", void 0);
    FlowVariateUpdate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flow-variate-update',
            template: __webpack_require__(/*! ./flow-variate-update.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-update/flow-variate-update.html"),
            styles: [__webpack_require__(/*! ./flow-variate-update.scss */ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-update/flow-variate-update.scss")],
            providers: [_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], FlowVariateUpdate);
    return FlowVariateUpdate;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"precredit\"></header-title>\r\n    <div class=\"ui-g-12 search\">\r\n        <div class=\"ui-g-4\">\r\n            <label>字典编码：</label>\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowVariateBean.dicCode\">\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <label>字典名称：</label>\r\n            <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowVariateBean.name\">\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <label>字典类型：</label>\r\n            <!-- <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"flowVariateBean.type\"> -->\r\n            <p-dropdown placeholder=\"请选择\" [options]=\"dicType\" [(ngModel)]=\"flowVariateBean.dicType\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"queryClick()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n\r\n\r\n    <!-- 表格 -->\r\n    <div style='text-align:right'>\r\n        <span *ngIf='total'>当前查询结果：\r\n            <span style=\"color:orange\">{{total}}</span>条</span>\r\n        <span class=\"icoColor\" (click)=\"add()\" *ngIf=\"permissionCheck('SID02069_P0182')\">新增</span>\r\n    </div>\r\n    <div class=\"ui-g-12 base-table\">\r\n        <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"dicCode\" [style]=\"{'width':'170px'}\" header=\"字典编码\"></p-column>\r\n            <p-column field=\"name\" header=\"字典名称\"></p-column>\r\n            <p-column field=\"dicType\" header=\"字典类型\">\r\n                <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.dicType | codeValuePie:dicType}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"type\" header=\"数据类型\">\r\n                <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{car.type | codeValuePie:type}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"length\" header=\"字典长度\"></p-column>\r\n            <p-column field=\"dot\" header=\"小数位\"></p-column>\r\n            <p-column field=\"dicValue\" header=\"初始值\"></p-column>\r\n            <p-column field=\"display\" header=\"字典备注\" [style]=\"{'width':'200px'}\"></p-column>\r\n            <p-column header=\"操作\">\r\n                <ng-template let-col let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <!-- <button pButton (click)=\"update(item)\">修改</button>\r\n                        <button pButton (click)=\"delete(item)\">删除</button> -->\r\n                    <span class=\"tabelUpdateIco\" (click)='update(item)' *ngIf=\"permissionCheck('SID02069_P0183')\">修改</span>\r\n                    <span class=\"tabelDeleteIco\" (click)='delete(item)' *ngIf=\"permissionCheck('SID02069_P0184')\">删除</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n\r\n        <!-- 分页 -->\r\n        <p-paginator rows=\"{{flowVariateBean.rows}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n\r\n<!-- 弹出框-->\r\n<p-dialog [(visible)]=\"display\" *ngIf=\"display\" modal=\"modal\" width='750' [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <flow-variate-add *ngIf=\"showModel=='1'\" (outValue)=\"addCall($event)\"></flow-variate-add>\r\n        <flow-variate-update *ngIf=\"showModel=='2'\" [inValue]=\"updateValue\" (outValue)=\"updateCall($event)\"></flow-variate-update>\r\n        <flow-variate-look *ngIf=\"showModel=='3'\"></flow-variate-look>\r\n    </div>\r\n</p-dialog>\r\n\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search label {\n  display: inline-block;\n  width: 28%;\n  text-align: right; }\n\n.search input {\n  width: 50%; }\n\n.tabelUpdateIco {\n  height: 20px !important; }\n\n:host/deep/ .search .ui-dropdown {\n  width: 50% !important; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: auto !important; }\n\n:host/deep/form .ui-dropdown {\n  width: 30% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LWRlc2lnbi9mbG93LXZhcmlhdGUvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6Ylxcd29ya2Zsb3dcXHdvcmtmbG93LWRlc2lnblxcZmxvdy12YXJpYXRlXFxmbG93LXZhcmlhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQixFQUFBOztBQUp6QjtFQU9RLFVBQ0osRUFBQTs7QUFFSjtFQUNJLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLFlBQVksRUFBQTs7QUFJcEI7RUFDSSx1QkFBdUI7RUFDdkIsdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0kscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvd29ya2Zsb3cvd29ya2Zsb3ctZGVzaWduL2Zsb3ctdmFyaWF0ZS9mbG93LXZhcmlhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDI4JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogNTAlXHJcbiAgICB9XHJcbn1cclxuLnRhYmVsVXBkYXRlSWNve1xyXG4gICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnNlYXJjaCAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0L2RlZXAvZm9ybSAudWktZHJvcGRvd257XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FlowVariateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowVariateComponent", function() { return FlowVariateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bean_flow_variate_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/flow-variate.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/bean/flow-variate.bean.ts");
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






// import { NumType, DicTypeSelect } from '../../constant/codeValue'
var FlowVariateComponent = /** @class */ (function () {
    function FlowVariateComponent(workflowHttpService, confirmationService, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.precredit = '流程变量管理';
        //字典类型管道
        this.dicType = [];
        //数据类型
        this.type = [];
        //提示信息
        this.msgs = [];
        this.flowVariateBean = new _bean_flow_variate_bean__WEBPACK_IMPORTED_MODULE_3__["FlowVariateBean"]();
        //模态框的标题
        this.headerTitle = "修改";
        //模态框是否显示
        this.display = false;
        //修改的参数
        this.updateValue = [];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.dicType = this.code['DicTypeSelect'];
        this.type = this.code['NumType'];
    }
    FlowVariateComponent.prototype.ngOnInit = function () {
        this.flowVariateBean.rows = 10;
        this.flowVariateBean.page = 1;
        // this.flowVariateBean.startRow = 0;
        this.queryClick();
        //按回车键查询
        var _thiss = this;
        document.onkeydown = function (event) {
            if (event && event.keyCode === 13) {
                _thiss.queryClick();
            }
        };
    };
    //码值
    FlowVariateComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    FlowVariateComponent.prototype.ngOnChanges = function () {
        this.queryClick();
    };
    // 重置
    FlowVariateComponent.prototype.reset = function () {
        this.flowVariateBean.dicCode = "";
        this.flowVariateBean.type = "";
        this.flowVariateBean.name = "";
        this.flowVariateBean.dicType = "";
    };
    //查询
    FlowVariateComponent.prototype.queryClick = function () {
        var _this = this;
        var dicCode;
        var name;
        var type;
        this.queryParm = { dicCode: this.flowVariateBean.dicCode, name: this.flowVariateBean.name, dicType: this.flowVariateBean.dicType };
        this.flowVariateBean.searchSQL = JSON.stringify(this.queryParm);
        this.workflowHttpService.IDictConfServiceList(this.flowVariateBean).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.tableData = data.msg.data;
                _this.total = data.msg.total;
                if (_this.total == 0) {
                    _this.total1 = '0';
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.msg.returnCode.code });
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
    //分页
    FlowVariateComponent.prototype.paginate = function (event) {
        // ;
        //每页显示的条数
        this.flowVariateBean.rows = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.flowVariateBean.page = currentPage;
        //调用查询的方法
        this.queryClick();
        this.flowVariateBean.page = 1;
    };
    // 增加
    FlowVariateComponent.prototype.add = function () {
        this.headerTitle = '流程字典';
        this.display = true;
        this.showModel = 1;
    };
    //添加后返回的值
    FlowVariateComponent.prototype.addCall = function (param) {
        var _this = this;
        this.display = param;
        var dicCode;
        var name;
        var type;
        this.queryParm = { dicCode: this.flowVariateBean.dicCode, name: this.flowVariateBean.name, type: this.flowVariateBean.type };
        this.flowVariateBean.searchSQL = JSON.stringify(this.queryParm);
        this.workflowHttpService.IDictConfServiceList(this.flowVariateBean).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.tableData = data.msg.data;
                _this.total = data.msg.total;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '新增成功' });
            }
        });
    };
    // // 修改
    FlowVariateComponent.prototype.update = function (item) {
        this.headerTitle = '流程字典';
        this.display = true;
        this.showModel = 2;
        this.updateValue = item;
    };
    //修改的回调
    FlowVariateComponent.prototype.updateCall = function (param) {
        var _this = this;
        this.display = param;
        var dicCode;
        var name;
        var type;
        this.queryParm = { dicCode: this.flowVariateBean.dicCode, name: this.flowVariateBean.name, type: this.flowVariateBean.type };
        this.flowVariateBean.searchSQL = JSON.stringify(this.queryParm);
        this.workflowHttpService.IDictConfServiceList(this.flowVariateBean).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.tableData = data.msg.data;
                _this.total = data.msg.total;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '修改成功' });
            }
        });
    };
    //删除
    FlowVariateComponent.prototype.delete = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                //条件
                // let param = { id: item.id };
                // this.flowVariateBean=item;
                _this.workflowHttpService.IDictConfServiceGetDelete(item).subscribe(function (data) {
                    if (data.msg.returnCode.code == 'success') {
                        _this.queryClick();
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.msg.returnCode.code });
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.errorMessage });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败" });
                });
            }
        });
    };
    //   treeClick(param){
    //     alert(JSON.stringify(param.data));
    //   }
    //返回的值
    FlowVariateComponent.prototype.outValue = function (param) {
        this.display = param.display;
    };
    //按钮权限
    FlowVariateComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    FlowVariateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flow-variate',
            template: __webpack_require__(/*! ./flow-variate.component.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate.component.html"),
            styles: [__webpack_require__(/*! ./flow-variate.component.scss */ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], FlowVariateComponent);
    return FlowVariateComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-version/bean/flow-version.bean.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-version/bean/flow-version.bean.ts ***!
  \*******************************************************************************************/
/*! exports provided: FlowVersionBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowVersionBean", function() { return FlowVersionBean; });
var FlowVersionBean = /** @class */ (function () {
    function FlowVersionBean() {
    }
    return FlowVersionBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-version/flow-version.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-version/flow-version.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header-title [Info]=\"precredit\"></header-title>\r\n\r\n\r\n<div class=\"ui-g\" style=\"margin-top:20px;\">\r\n    <button pButton type=\"button\" label=\"查看\" (click)=\"queryClick()\"></button>\r\n    <!-- <button pButton type=\"button\" label=\"查看\" (click)=\"look()\" style=\"margin-left:5%;\"></button>\r\n    <button pButton type=\"button\" label=\"增加\" (click)=\"add()\" style=\"margin-left:5%;\"></button>\r\n    <button pButton type=\"button\" label=\"修改\" (click)=\"update()\" style=\"margin-left:5%;\"></button>\r\n    <button pButton type=\"button\" label=\"删除\" (click)=\"delete()\" style=\"margin-left:5%;\"></button> -->\r\n</div>\r\n\r\n<hr style=\"border:1px solid #888;\">\r\n<!-- 表格 -->\r\n<p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n    <p-column field=\"vin\" header=\"流程编码\"></p-column>\r\n    <p-column field=\"year\" header=\"流程名称\"></p-column>\r\n    <p-column field=\"num\" header=\"流程版本\"></p-column>\r\n    <p-column field=\"year\" header=\"是否在使用\"></p-column>\r\n    <p-column field=\"num\" header=\"流程描述\"></p-column>\r\n    <p-column header=\"操作\">\r\n        <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <button pButton type=\"button\" label=\"流程版本恢复\" (click)=\"update()\"></button>\r\n            <button pButton type=\"button\" label=\"流程图查看\" (click)=\"delete()\"></button>\r\n        </ng-template>\r\n    </p-column>\r\n</p-dataTable>\r\n\r\n<!-- 分页 -->\r\n<p-paginator rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\r\n\r\n\r\n\r\n<!-- 弹出框-->\r\n<!-- <p-dialog [(visible)]=\"display\" modal=\"modal\" width='400' [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <variate-preserve-add *ngIf=\"showModel=='1'\" (outValue)=\"addCall($event)\"></variate-preserve-add>\r\n        <variate-preserve-update *ngIf=\"showModel=='2'\" (outValue)=\"updateCall($event)\"></variate-preserve-update>\r\n        <variate-preserve-look *ngIf=\"showModel=='3'\"></variate-preserve-look>\r\n    </div>\r\n</p-dialog> \r\n\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog> -->\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/flow-version/flow-version.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/flow-version/flow-version.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FlowVersionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowVersionComponent", function() { return FlowVersionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bean_flow_version_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/flow-version.bean */ "./src/app/pages/tzb/workflow/workflow-design/flow-version/bean/flow-version.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlowVersionComponent = /** @class */ (function () {
    function FlowVersionComponent(commonHttpService, confirmationService) {
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        this.precredit = '流程版本查看';
        //提示信息
        this.msgs = [];
        this.flowVersionBean = new _bean_flow_version_bean__WEBPACK_IMPORTED_MODULE_3__["FlowVersionBean"]();
        //每页多少条
        this.pageSize = '10';
        //模态框的标题
        this.headerTitle = "修改";
        //模态框是否显示
        this.display = false;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
    }
    FlowVersionComponent.prototype.ngOnInit = function () {
    };
    //查询
    FlowVersionComponent.prototype.queryClick = function () {
        // this.commonHttpService.Test(null).subscribe(data => {
        //this.commonHttpService.findAllPagespaymentGatewayConfig(this.powerManageBean).subscribe(data=>{
        //       if (data.errorMessage == null) {
        //           this.tableData = data.returnList;
        //           this.total = data.totalPages;
        //       } else {
        //           this.msgs = [];
        //           this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
        //       }
        //   }, error => {
        //       this.msgs = [];
        //       this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        //   }
        // )
    };
    //分页
    FlowVersionComponent.prototype.paginate = function (event) {
        ;
        //每页显示的条数
        this.pageSize = event.rows;
        //当前页
        var currentPage = event.page + 1 + '';
        this.flowVersionBean.pageNumber = currentPage;
        //调用查询的方法
        this.queryClick();
        this.flowVersionBean.pageNumber = '1';
    };
    // 增加
    FlowVersionComponent.prototype.add = function () {
        this.headerTitle = '流程变量增加';
        this.display = true;
        this.showModel = 1;
    };
    //添加后返回的值
    FlowVersionComponent.prototype.addCall = function (param) {
        this.display = param;
        // this.administerManageBean.pageNumber = '1';
        this.queryClick();
    };
    // 修改
    FlowVersionComponent.prototype.update = function () {
        this.headerTitle = '流程变量修改';
        this.display = true;
        this.showModel = 2;
    };
    //修改的回调
    FlowVersionComponent.prototype.updateCall = function (param) {
        this.display = param;
        // this.administerManageBean.pageNumber = '1';
        this.queryClick();
    };
    FlowVersionComponent.prototype.look = function () {
        this.headerTitle = '流程变量查看';
        this.display = true;
        this.showModel = 3;
    };
    //删除
    FlowVersionComponent.prototype.delete = function (car) {
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                //条件
                //   let param ={paymentGatewayConfigId:car.paymentGatewayConfigId};
                //   this.commonHttpService.deletePaymentGatewayConfig(param).subscribe(data => {
                //     if(data.errorMessage==null){
                //       this.administerManageBean.pageNumber='1';
                //       this.queryClick();
                //    }else{
                //      this.msgs=[];
                //      this.msgs.push({severity:'error',summary:'提示',detail:data.errorMessage});
                //    }
                //   }, error => {
                //     this.msgs = [];
                //     this.msgs.push({ severity: 'error', summary: '提示', detail: "删除失败" });
                //   })
            }
        });
    };
    FlowVersionComponent.prototype.treeClick = function (param) {
        alert(JSON.stringify(param.data));
    };
    FlowVersionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flow-version',
            template: __webpack_require__(/*! ./flow-version.component.html */ "./src/app/pages/tzb/workflow/workflow-design/flow-version/flow-version.component.html"),
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomeHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], FlowVersionComponent);
    return FlowVersionComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/bean/variate-preserve.bean.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/variate-preserve/bean/variate-preserve.bean.ts ***!
  \***************************************************************************************************/
/*! exports provided: VariatePreserveBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariatePreserveBean", function() { return VariatePreserveBean; });
var VariatePreserveBean = /** @class */ (function () {
    function VariatePreserveBean() {
    }
    return VariatePreserveBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve-add/variate-preserve-add.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve-add/variate-preserve-add.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        流程变量：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        初始值：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        最小值：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        最大值：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-3\"></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"保存\"></button></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"重置\"></button></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve-add/variate-preserve-add.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve-add/variate-preserve-add.ts ***!
  \******************************************************************************************************************/
/*! exports provided: VariatePreserveAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariatePreserveAdd", function() { return VariatePreserveAdd; });
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

var VariatePreserveAdd = /** @class */ (function () {
    function VariatePreserveAdd() {
    }
    VariatePreserveAdd.prototype.ngOnInit = function () {
    };
    VariatePreserveAdd = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'variate-preserve-add',
            template: __webpack_require__(/*! ./variate-preserve-add.html */ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve-add/variate-preserve-add.html")
        }),
        __metadata("design:paramtypes", [])
    ], VariatePreserveAdd);
    return VariatePreserveAdd;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve-look/variate-preserve-look.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve-look/variate-preserve-look.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        流程变量：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        初始值：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        最小值：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        最大值：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-3\"></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"保存\"></button></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"重置\"></button></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve-look/variate-preserve-look.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve-look/variate-preserve-look.ts ***!
  \********************************************************************************************************************/
/*! exports provided: VariatePreserveLook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariatePreserveLook", function() { return VariatePreserveLook; });
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

var VariatePreserveLook = /** @class */ (function () {
    function VariatePreserveLook() {
    }
    VariatePreserveLook.prototype.ngOnInit = function () {
    };
    VariatePreserveLook = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'variate-preserve-look',
            template: __webpack_require__(/*! ./variate-preserve-look.html */ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve-look/variate-preserve-look.html")
        }),
        __metadata("design:paramtypes", [])
    ], VariatePreserveLook);
    return VariatePreserveLook;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve-update/variate-preserve-update.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve-update/variate-preserve-update.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        流程变量：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        初始值：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        最小值：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\" style=\"text-align:right;\">\r\n        最大值：\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <input id=\"input\" type=\"text\" pInputText>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-3\"></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"保存\"></button></div>\r\n        <div class=\"ui-g-3\"><button pButton type=\"button\" label=\"重置\"></button></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve-update/variate-preserve-update.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve-update/variate-preserve-update.ts ***!
  \************************************************************************************************************************/
/*! exports provided: VariatePreserveUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariatePreserveUpdate", function() { return VariatePreserveUpdate; });
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

var VariatePreserveUpdate = /** @class */ (function () {
    function VariatePreserveUpdate() {
    }
    VariatePreserveUpdate.prototype.ngOnInit = function () {
    };
    VariatePreserveUpdate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'variate-preserve-update',
            template: __webpack_require__(/*! ./variate-preserve-update.html */ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve-update/variate-preserve-update.html")
        }),
        __metadata("design:paramtypes", [])
    ], VariatePreserveUpdate);
    return VariatePreserveUpdate;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header-title [Info]=\"precredit\"></header-title>\r\n\r\n\r\n<div class=\"ui-g\" style=\"margin-top:20px;\">\r\n    <button pButton type=\"button\" label=\"查询\" (click)=\"queryClick()\" style=\"margin-left:25%;\"></button>\r\n    <button pButton type=\"button\" label=\"查看\" (click)=\"look()\" style=\"margin-left:5%;\"></button>\r\n    <button pButton type=\"button\" label=\"增加\" (click)=\"add()\" style=\"margin-left:5%;\"></button>\r\n    <button pButton type=\"button\" label=\"修改\" (click)=\"update()\" style=\"margin-left:5%;\"></button>\r\n    <button pButton type=\"button\" label=\"删除\" (click)=\"delete()\" style=\"margin-left:5%;\"></button>\r\n</div>\r\n\r\n<hr style=\"border:1px solid #888;\">\r\n<!-- 表格 -->\r\n<p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" emptyMessage=\"没有查找到数据\">\r\n    <p-column field=\"vin\" header=\"变量编码\"></p-column>\r\n    <p-column field=\"year\" header=\"变量名称\"></p-column>\r\n    <p-column field=\"num\" header=\"初始值\"></p-column>\r\n    <p-column field=\"year\" header=\"最小值\"></p-column>\r\n    <p-column field=\"num\" header=\"最大值\"></p-column>\r\n\r\n</p-dataTable>\r\n\r\n<!-- 分页 -->\r\n<p-paginator rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\r\n<hr style=\"border:1px solid #888;\">\r\n<header-title [Info]=\"preserve\"></header-title>\r\n\r\n\r\n<div class=\"ui-g\" style=\"margin-top:20px;\">\r\n    <button pButton type=\"button\" label=\"查询\" (click)=\"queryClick()\" style=\"margin-left:25%;\"></button>\r\n</div>\r\n\r\n<hr style=\"border:1px solid #888;\">\r\n<!-- 表格 -->\r\n<p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" emptyMessage=\"没有查找到数据\">\r\n    <p-column field=\"vin\" header=\"变量编码\"></p-column>\r\n    <p-column field=\"year\" header=\"变量名称\"></p-column>\r\n \r\n\r\n</p-dataTable>\r\n\r\n<!-- 分页 -->\r\n<p-paginator rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\r\n\r\n\r\n<!-- 弹出框-->\r\n<p-dialog [(visible)]=\"display\" modal=\"modal\" width='60%' [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <variate-preserve-add *ngIf=\"showModel=='1'\" (outValue)=\"addCall($event)\"></variate-preserve-add>\r\n        <variate-preserve-update *ngIf=\"showModel=='2'\" (outValue)=\"updateCall($event)\"></variate-preserve-update>\r\n        <variate-preserve-look *ngIf=\"showModel=='3'\"></variate-preserve-look>\r\n    </div>\r\n</p-dialog> \r\n\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: VariatePreserveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariatePreserveComponent", function() { return VariatePreserveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bean_variate_preserve_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/variate-preserve.bean */ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/bean/variate-preserve.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VariatePreserveComponent = /** @class */ (function () {
    function VariatePreserveComponent(commonHttpService, confirmationService) {
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        this.precredit = '流程变量维护查询';
        this.preserve = '待选变量查询';
        //提示信息
        this.msgs = [];
        this.variatePreserveBean = new _bean_variate_preserve_bean__WEBPACK_IMPORTED_MODULE_3__["VariatePreserveBean"]();
        //每页多少条
        this.pageSize = '10';
        //模态框的标题
        this.headerTitle = "修改";
        //模态框是否显示
        this.display = false;
    }
    VariatePreserveComponent.prototype.ngOnInit = function () {
    };
    //查询
    VariatePreserveComponent.prototype.queryClick = function () {
        // this.commonHttpService.Test(null).subscribe(data => {
        //this.commonHttpService.findAllPagespaymentGatewayConfig(this.powerManageBean).subscribe(data=>{
        //       if (data.errorMessage == null) {
        //           this.tableData = data.returnList;
        //           this.total = data.totalPages;
        //       } else {
        //           this.msgs = [];
        //           this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
        //       }
        //   }, error => {
        //       this.msgs = [];
        //       this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        //   }
        // )
    };
    //分页
    VariatePreserveComponent.prototype.paginate = function (event) {
        ;
        //每页显示的条数
        this.pageSize = event.rows;
        //当前页
        var currentPage = event.page + 1 + '';
        this.variatePreserveBean.pageNumber = currentPage;
        //调用查询的方法
        this.queryClick();
        this.variatePreserveBean.pageNumber = '1';
    };
    // 增加
    VariatePreserveComponent.prototype.add = function () {
        this.headerTitle = '流程变量增加';
        this.display = true;
        this.showModel = 1;
    };
    //添加后返回的值
    VariatePreserveComponent.prototype.addCall = function (param) {
        this.display = param;
        // this.administerManageBean.pageNumber = '1';
        this.queryClick();
    };
    // 修改
    VariatePreserveComponent.prototype.update = function () {
        this.headerTitle = '流程变量修改';
        this.display = true;
        this.showModel = 2;
    };
    //修改的回调
    VariatePreserveComponent.prototype.updateCall = function (param) {
        this.display = param;
        // this.administerManageBean.pageNumber = '1';
        this.queryClick();
    };
    VariatePreserveComponent.prototype.look = function () {
        this.headerTitle = '流程变量查看';
        this.display = true;
        this.showModel = 3;
    };
    //删除
    VariatePreserveComponent.prototype.delete = function () {
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                //条件
                //   let param ={paymentGatewayConfigId:car.paymentGatewayConfigId};
                //   this.commonHttpService.deletePaymentGatewayConfig(param).subscribe(data => {
                //     if(data.errorMessage==null){
                //       this.administerManageBean.pageNumber='1';
                //       this.queryClick();
                //    }else{
                //      this.msgs=[];
                //      this.msgs.push({severity:'error',summary:'提示',detail:data.errorMessage});
                //    }
                //   }, error => {
                //     this.msgs = [];
                //     this.msgs.push({ severity: 'error', summary: '提示', detail: "删除失败" });
                //   })
            }
        });
    };
    VariatePreserveComponent.prototype.treeClick = function (param) {
        alert(JSON.stringify(param.data));
    };
    VariatePreserveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'variate-preserve',
            template: __webpack_require__(/*! ./variate-preserve.component.html */ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve.component.html"),
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CustomeHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], VariatePreserveComponent);
    return VariatePreserveComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/workflow-design.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/workflow-design.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-design/workflow-design.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-design/workflow-design.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WorkflowDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowDesignComponent", function() { return WorkflowDesignComponent; });
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

var WorkflowDesignComponent = /** @class */ (function () {
    function WorkflowDesignComponent() {
    }
    WorkflowDesignComponent.prototype.ngOnInit = function () {
    };
    WorkflowDesignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'workflow-design',
            template: __webpack_require__(/*! ./workflow-design.component.html */ "./src/app/pages/tzb/workflow/workflow-design/workflow-design.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], WorkflowDesignComponent);
    return WorkflowDesignComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/already-work/already-work-history/already-work-history.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/already-work/already-work-history/already-work-history.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button pButton (click)='lookFlow()' style='margin-bottom:20px' *ngIf=\"permissionCheck('SID02072_P0188_P001')\">查看流程图</button>\r\n<div class=\"ui-g-12 base-table\">\r\n  <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n    <p-column field=\"wfname\" header=\"流程名称\"></p-column>\r\n    <p-column field=\"taskname\" header=\"任务名称\"></p-column>\r\n    <p-column field=\"approveduser\" header=\"执行人\"></p-column>\r\n    <p-column field=\"approveddate\" header=\"执行时间\"></p-column>\r\n    <p-column field=\"approvedinfo\" header=\"审批意见\"></p-column>\r\n    \r\n  </p-dataTable>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/already-work/already-work-history/already-work-history.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/already-work/already-work-history/already-work-history.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: AlreadyWorkHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlreadyWorkHistoryComponent", function() { return AlreadyWorkHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_already_work_history_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bean/already-work-history.bean */ "./src/app/pages/tzb/workflow/workflow-runtime/already-work/bean/already-work-history.bean.ts");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlreadyWorkHistoryComponent = /** @class */ (function () {
    function AlreadyWorkHistoryComponent(workflowHttpService, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.alreadyWorkHistoryBean = new _bean_already_work_history_bean__WEBPACK_IMPORTED_MODULE_1__["AlreadyWorkHistoryBean"]();
        this.msgs = []; //提示信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //表中无数据提示
    }
    AlreadyWorkHistoryComponent.prototype.ngOnInit = function () {
        this.query();
    };
    //查询列表
    AlreadyWorkHistoryComponent.prototype.query = function () {
        var _this = this;
        var ch = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.alreadyWorkHistoryBean.userId = ch['userId'];
        this.alreadyWorkHistoryBean.wfInsId = this.inValue.processId;
        this.workflowHttpService.IWorkFlowServicequeryApprovedListbywfInsId(this.alreadyWorkHistoryBean).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.tableData = data.msg.listArray;
                _this.tableData.forEach(function (i) {
                    _this.singpath = i.singpath;
                });
                _this.total = data.msg.total;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '流程历史查询成功' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    //查看流程图
    AlreadyWorkHistoryComponent.prototype.lookFlow = function () {
        var _this = this;
        this.queryUrlService();
        setTimeout(function () {
            _this.addEverything();
        }, 1000);
    };
    //拼接url
    AlreadyWorkHistoryComponent.prototype.addEverything = function () {
        window.open('http://' + this.tableData[0].singpath + ':8080' + '/wfd/p/monitor?id=' + this.listData.code + '&wfversion=' + this.listData.processVersion + '&name=' + this.listData.name + '&processid=' + this.tableData[0].wfinstanceid);
    };
    //查询url
    AlreadyWorkHistoryComponent.prototype.queryUrlService = function () {
        var _this = this;
        var paramQ = {
            uniqueReqData: this.tableData[0].wfinstanceid
        };
        this.workflowHttpService.IWorkFlowServicegetWorkFlowIdbypiId(paramQ).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.listData = data.msg;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //按钮权限
    AlreadyWorkHistoryComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlreadyWorkHistoryComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AlreadyWorkHistoryComponent.prototype, "outValue", void 0);
    AlreadyWorkHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-already-work-history',
            template: __webpack_require__(/*! ./already-work-history.component.html */ "./src/app/pages/tzb/workflow/workflow-runtime/already-work/already-work-history/already-work-history.component.html")
        }),
        __metadata("design:paramtypes", [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], AlreadyWorkHistoryComponent);
    return AlreadyWorkHistoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/already-work/already-work.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/already-work/already-work.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"'已办任务查询'\"></header-title>\r\n    <div class='ui-g-12' style='text-align:right' *ngIf='total'>\r\n        <label for=\"\">当前查询结果：</label>\r\n        <span style=\"color:orange\">{{total}}</span>条\r\n    </div>\r\n    <div class='ui-g-12' style='text-align:right' *ngIf='total1'>\r\n        <label for=\"\">当前查询结果：</label>\r\n        <span style=\"color:orange\">{{total1}}</span>条\r\n    </div>\r\n    <hr style=\"border:1px solid #888;\">\r\n    <!-- 表格 -->\r\n    <div class=\"ui-g-12 base-table\">\r\n        <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"processName\" header=\"流程名称\"></p-column>\r\n            <p-column field=\"taskName\" header=\"当前执行任务\"></p-column>\r\n            <p-column field=\"createDate\" header=\"开始时间\"></p-column>\r\n            <p-column field=\"wfDesc\" header=\"流程摘要\"></p-column>\r\n            <p-column header=\"操作\" *ngIf=\"permissionCheck('SID02072_P0188')\">\r\n                <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <!-- <button pButton (click)=\"over()\">撤回</button> -->\r\n                    <button pButton (click)=\"history(car)\">查看流程历史</button>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <!-- 分页 -->\r\n        <p-paginator rows=\"{{alreadyWorkHistoryBean.rows}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n<!-- 弹出框-->\r\n<p-dialog [(visible)]=\"display\" modal=\"modal\" width='900' [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <app-already-work-history *ngIf=\"showModel=='1'\" (outValue)=\"historyCall($event)\" [inValue]=\"historyValue\"></app-already-work-history>\r\n    </div>\r\n</p-dialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/already-work/already-work.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/already-work/already-work.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".labelPlace {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LXJ1bnRpbWUvYWxyZWFkeS13b3JrL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHdvcmtmbG93XFx3b3JrZmxvdy1ydW50aW1lXFxhbHJlYWR5LXdvcmtcXGFscmVhZHktd29yay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LXJ1bnRpbWUvYWxyZWFkeS13b3JrL2FscmVhZHktd29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbFBsYWNlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/already-work/already-work.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/already-work/already-work.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AlreadyWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlreadyWorkComponent", function() { return AlreadyWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var _bean_already_work_history_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/already-work-history.bean */ "./src/app/pages/tzb/workflow/workflow-runtime/already-work/bean/already-work-history.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlreadyWorkComponent = /** @class */ (function () {
    function AlreadyWorkComponent(workflowHttpService, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.commfunc = commfunc;
        //模态框的标题
        this.headerTitle = '查看流程历史';
        //模态框是否显示
        this.display = false;
        //提示信息
        this.msgs = [];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //表中无数据提示
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"]; //时间格式转换
        this.temData = new Date(); //时间格式转换
        this.showTree = false;
        this.alreadyWorkHistoryBean = new _bean_already_work_history_bean__WEBPACK_IMPORTED_MODULE_2__["AlreadyWorkHistoryBean"]();
    }
    AlreadyWorkComponent.prototype.ngOnInit = function () {
        this.alreadyWorkHistoryBean.rows = 10;
        this.alreadyWorkHistoryBean.page = 1;
        this.queryClick();
    };
    //已办任务查询
    AlreadyWorkComponent.prototype.queryClick = function () {
        var _this = this;
        /**
         * 动态获取userId
         */
        this.total1 = '';
        if (this.selectedFile) {
            this.alreadyWorkHistoryBean.processDefinitionId = this.choiceValue;
        }
        this.alreadyWorkHistoryBean.endAfter = this.commfunc.transDateN(this.endAfter);
        var ch = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.alreadyWorkHistoryBean.userId = ch['userId'];
        this.workflowHttpService.IWorkFlowServicegetNoEndTaskList(this.alreadyWorkHistoryBean).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.tableData = data.msg.data;
                _this.total = data.msg.total;
                if (_this.total == 0) {
                    _this.total1 = '0';
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '已办任务查询成功' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //撤回
    AlreadyWorkComponent.prototype.over = function () {
        var _this = this;
        var ch = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var param = {
            userId: 'sys',
            taskId: this.tableData[0].taskId,
            nodeName: this.tableData[0].taskName
        };
        this.workflowHttpService.IWorkFlowServiceback(param).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '撤回成功' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //重置
    AlreadyWorkComponent.prototype.reset = function () {
        this.selectedFile = null;
        this.endAfter = '';
        this.alreadyWorkHistoryBean.processDefinitionId = '';
    };
    //查看历史流程
    AlreadyWorkComponent.prototype.history = function (car) {
        this.headerTitle = '查看流程历史';
        this.display = true;
        this.showModel = '1';
        this.historyValue = car;
    };
    //查看历史流程回调
    AlreadyWorkComponent.prototype.historyCall = function () {
        this.display = false;
        this.queryClick();
    };
    //按钮权限
    AlreadyWorkComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    //分页
    AlreadyWorkComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.alreadyWorkHistoryBean.rows = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.alreadyWorkHistoryBean.page = currentPage;
        //调用查询的方法
        this.queryClick();
        this.alreadyWorkHistoryBean.page = 1;
    };
    AlreadyWorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'already-work',
            template: __webpack_require__(/*! ./already-work.component.html */ "./src/app/pages/tzb/workflow/workflow-runtime/already-work/already-work.component.html"),
            styles: [__webpack_require__(/*! ./already-work.component.scss */ "./src/app/pages/tzb/workflow/workflow-runtime/already-work/already-work.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], AlreadyWorkComponent);
    return AlreadyWorkComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/already-work/bean/already-work-history.bean.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/already-work/bean/already-work-history.bean.ts ***!
  \****************************************************************************************************/
/*! exports provided: AlreadyWorkHistoryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlreadyWorkHistoryBean", function() { return AlreadyWorkHistoryBean; });
var AlreadyWorkHistoryBean = /** @class */ (function () {
    function AlreadyWorkHistoryBean() {
    }
    return AlreadyWorkHistoryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/bean/flowDemo.bean.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/bean/flowDemo.bean.ts ***!
  \*************************************************************************************/
/*! exports provided: FlowDemoBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowDemoBean", function() { return FlowDemoBean; });
var FlowDemoBean = /** @class */ (function () {
    function FlowDemoBean() {
    }
    return FlowDemoBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-demo-over/flow-demo-over.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-demo-over/flow-demo-over.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\" style=\"text-align:center\">\r\n    <div class=\"ui-g-12\">\r\n        <label>结束流程：</label>\r\n        <p-dropdown [options]=\"state\" placeholder=\"请选择\" [(ngModel)]=\"flowDemoBean.state\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <button pButton label=\"确定\" (click)='preserveClick()'></button>\r\n    </div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-demo-over/flow-demo-over.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-demo-over/flow-demo-over.ts ***!
  \************************************************************************************************/
/*! exports provided: FlowDemoOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowDemoOver", function() { return FlowDemoOver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_flowDemo_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bean/flowDemo.bean */ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/bean/flowDemo.bean.ts");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
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




// import { PartyType } from '../../../constant/codeValue';

var FlowDemoOver = /** @class */ (function () {
    function FlowDemoOver(workflowHttpService, confirmationService, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.flowDemoBean = new _bean_flowDemo_bean__WEBPACK_IMPORTED_MODULE_1__["FlowDemoBean"]();
        //提示信息
        this.msgs = [];
        this.state = []; //结束类型
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.state = this.code['PartyType'];
    }
    FlowDemoOver.prototype.ngOnInit = function () {
    };
    //码值
    FlowDemoOver.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    FlowDemoOver.prototype.ngOnChanges = function () {
        this.fuzhi();
    };
    FlowDemoOver.prototype.fuzhi = function () {
        this.flowDemoB = this.inValue;
    };
    //结束流程
    FlowDemoOver.prototype.preserveClick = function () {
        var _this = this;
        var ch = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.flowDemoBean.userId = ch['userId'];
        this.flowDemoBean.piId = this.inValue.processInstanceId;
        // this.flowDemoBean.endFlag='0';
        this.workflowHttpService.IWorkFlowServicedeleteProcessInstance(this.flowDemoBean).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.outValue.emit(false);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '结束流程成功' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FlowDemoOver.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FlowDemoOver.prototype, "outValue", void 0);
    FlowDemoOver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flow-demo-over',
            template: __webpack_require__(/*! ./flow-demo-over.html */ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-demo-over/flow-demo-over.html"),
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], FlowDemoOver);
    return FlowDemoOver;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-demo.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-demo.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\"> \r\n    <header-title [Info]=\"precredit\"></header-title>\r\n    <div class=\"ui-g-12 search\">\r\n        <div class=\"ui-g-4\">\r\n            <span>流程名称：</span>\r\n            <input pInputText type=\"text\" [(ngModel)]=\"selectedFile\" (click)='clickEvn()' readonly class=\"treeInput\">\r\n            <div id='fileTreeExpand' *ngIf=\"showTree\">\r\n                <p-tree [value]=\"left_tree\" selectionMode=\"single\" [(selection)]=\"selectedFile\" (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\">\r\n                </p-tree>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <span>开始日期：</span>\r\n            <p-calendar [showIcon]=\"true\" [(ngModel)]=\"endAfter\" [locale]=\"ch\" (onSelect)=\"showData()\"></p-calendar>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <span>流程实例</span>\r\n            <input pInputText type=\"text\" [(ngModel)]=\"flowDemoBean.processInstanceId\"   class=\"treeInput\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"queryClick()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n    <div class='ui-g-12' style='text-align:right' *ngIf='total'>\r\n        <label for=\"\">当前查询结果：</label>\r\n        <span style=\"color:orange\">{{total}}</span>条\r\n    </div>\r\n    <div class='ui-g-12' style='text-align:right' *ngIf='total1'>\r\n        <label for=\"\">当前查询结果：</label>\r\n        <span style=\"color:orange\">{{total1}}</span>条\r\n    </div>\r\n    <hr style=\"border:1px solid #888;\">\r\n\r\n    <!-- 表格 -->\r\n    <div class=\"ui-g-12 base-table\">\r\n        <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"processDefinitionName\" header=\"流程名称\"></p-column>\r\n            <p-column field=\"endActivityName\" header=\"当前执行任务\"></p-column>\r\n            <p-column field=\"startTime\" header=\"开始时间\"></p-column>\r\n            <p-column field=\"desc\" header=\"流程摘要\"></p-column>\r\n            <p-column field=\"processInstanceId\" header=\"流程实例\"></p-column>\r\n            <p-column header=\"操作\">\r\n                <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <button pButton (click)=\"over(car)\" *ngIf=\"permissionCheck('SID02070_P0186')\">结束流程</button>\r\n                    <button pButton (click)=\"history(car)\" *ngIf=\"permissionCheck('SID02070_P0185')\">查看流程历史</button>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <!-- 分页 -->\r\n        <p-paginator rows=\"{{flowDemoBean.rows}}\" class='ui-paginator-pages' totalRecords={{total}} pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\">\r\n        </p-paginator>\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n<!-- 弹出框-->\r\n<p-dialog [(visible)]=\"display\" *ngIf='display' modal=\"modal\" width='900' [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <flow-demo-over *ngIf=\"showModel=='1'\" (outValue)=\"overCall($event)\" [inValue]=\"overValue\"></flow-demo-over>\r\n        <flow-history *ngIf=\"showModel=='2'\" (outValue)=\"historyCall($event)\" [inValue]=\"historyValue\"></flow-history>\r\n    </div>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-demo.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-demo.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search .ui-g-4 {\n  position: relative;\n  text-align: center; }\n  .search .ui-g-4 span {\n    display: inline-block;\n    width: 15%;\n    text-align: right; }\n  .search .ui-g-4 input {\n    width: 30% !important; }\n  .search .ui-g-4 #fileTreeExpand {\n    height: 280px;\n    width: 305px;\n    overflow: scroll;\n    position: absolute;\n    left: 39%;\n    z-index: 888;\n    background: white;\n    text-align: left; }\n  :host/deep/ .search .ui-calendar {\n  width: 30% !important;\n  min-width: 215px !important; }\n  .btn {\n  text-align: center; }\n  .btn button {\n    margin: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LXJ1bnRpbWUvZmxvdy1kZW1vL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHdvcmtmbG93XFx3b3JrZmxvdy1ydW50aW1lXFxmbG93LWRlbW9cXGZsb3ctZGVtby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtFQUgxQjtJQUtZLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsaUJBQWlCLEVBQUE7RUFQN0I7SUFVWSxxQkFBcUIsRUFBQTtFQVZqQztJQWFZLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtFQUs1QjtFQUNJLHFCQUFxQjtFQUNyQiwyQkFBMkIsRUFBQTtFQUcvQjtFQUNJLGtCQUFrQixFQUFBO0VBRHRCO0lBR1EsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LXJ1bnRpbWUvZmxvdy1kZW1vL2Zsb3ctZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xyXG4gICAgLnVpLWctNCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNmaWxlVHJlZUV4cGFuZCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDVweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAzOSU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDg4ODtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuc2VhcmNoIC51aS1jYWxlbmRhciB7XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDIxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-demo.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-demo.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FlowDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowDemoComponent", function() { return FlowDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var _bean_flowDemo_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/flowDemo.bean */ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/bean/flowDemo.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlowDemoComponent = /** @class */ (function () {
    function FlowDemoComponent(workflowHttpService, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        // 表头
        this.precredit = '流程实例查询';
        //修改的参数
        this.overValue = [];
        //查看历史的参数
        this.historyValue = [];
        //模态框的标题
        this.headerTitle = '修改';
        //模态框是否显示
        this.display = false;
        //提示信息
        this.msgs = [];
        //
        this.addDisplay = false; //流程目录
        this.flowDemoBean = new _bean_flowDemo_bean__WEBPACK_IMPORTED_MODULE_2__["FlowDemoBean"]();
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"]; //时间格式转换
        this.temData = new Date(); //时间格式转换
        this.showTree = false;
    }
    // 树展开需要参数
    FlowDemoComponent.prototype.expandRecursive = function (node, isExpand) {
        var _this = this;
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(function (childNode) {
                _this.expandRecursive(childNode, isExpand);
            });
        }
    };
    FlowDemoComponent.prototype.ngOnInit = function () {
        this.flowDemoBean.rows = 10;
        this.flowDemoBean.page = 1;
        this.queryClick1();
        this.queryClick();
        //按回车键查询
        var _thiss = this;
        document.onkeydown = function (event) {
            if (event && event.keyCode === 13) {
                _thiss.queryClick();
            }
        };
    };
    //流程目录展开
    FlowDemoComponent.prototype.toTree = function (data) {
        var _this = this;
        data.forEach(function (item) {
            item['label'] = item['text'];
            item['value'] = item;
            if (item.children) {
                _this.toTree(item.children);
            }
        });
        return data;
    };
    //选择树的内容
    FlowDemoComponent.prototype.nodeSelect = function (event) {
        if (event.node) {
            this.choiceValue = event.node.value.id;
            this.selectedFile = event.node.label;
            this.showTree = false;
        }
    };
    FlowDemoComponent.prototype.nodeUnselect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    };
    //查询流程目录树
    FlowDemoComponent.prototype.queryClick1 = function () {
        var _this = this;
        this.workflowHttpService.IProcessDirectoryServiceSearchForDesigner({ 'uniqueReqData': '-1' }).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.left_tree = _this.toTree(data.msg.listArray);
                _this.left_tree.forEach(function (node) {
                    _this.expandRecursive(node, true);
                });
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
    //点击查询
    FlowDemoComponent.prototype.queryClick = function () {
        var _this = this;
        this.total1 = '';
        if (this.selectedFile) {
            this.flowDemoBean.processDefinitionId = this.choiceValue;
        }
        this.flowDemoBean.endAfter = this.commfunc.transDateN(this.endAfter);
        var ch = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.flowDemoBean.userId = ch['userId'];
        this.flowDemoBean.state = 'active';
        this.workflowHttpService.IWorkFlowServicegetProcessInsList(this.flowDemoBean).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.tableData = data.msg.data;
                _this.total = data.msg.total;
                if (_this.total == 0) {
                    _this.total1 = '0';
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.msg.returnCode.code });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //流程编号
    //点击事件控制树的显示隐藏
    FlowDemoComponent.prototype.clickEvn = function () {
        this.showTree = !this.showTree;
    };
    //流程编码的回调
    FlowDemoComponent.prototype.treeCall = function (param) {
        this.display = false;
        this.flowDemoBean.id = param.id;
    };
    // 结束流程
    FlowDemoComponent.prototype.over = function (car) {
        this.headerTitle = '结束流程';
        this.display = true;
        this.showModel = 1;
        this.overValue = car;
    };
    //结束流程回调
    FlowDemoComponent.prototype.overCall = function (param) {
        var _this = this;
        this.display = false;
        this.workflowHttpService.IWorkFlowServicegetProcessInsList(this.flowDemoBean).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.tableData = data.msg.data;
                _this.total = data.msg.total;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '结束流程成功' });
            }
        });
    };
    // 查看流程历史
    FlowDemoComponent.prototype.history = function (car) {
        this.headerTitle = '流程版本信息';
        this.display = true;
        this.showModel = 2;
        this.historyValue = car;
    };
    //查看历史的回调
    FlowDemoComponent.prototype.historyCall = function (param) {
        this.display = false;
        // this.queryClick();
    };
    // 重置
    FlowDemoComponent.prototype.reset = function () {
        this.selectedFile = null;
        this.endAfter = null;
        this.flowDemoBean.processDefinitionId = '';
        this.flowDemoBean.processInstanceId = '';
    };
    //分页
    FlowDemoComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.flowDemoBean.rows = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.flowDemoBean.page = currentPage;
        //调用查询的方法
        this.queryClick();
        this.flowDemoBean.page = 1;
    };
    //日期
    FlowDemoComponent.prototype.showData = function () {
        this.temData = this.endAfter;
    };
    //按钮权限
    FlowDemoComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    FlowDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flow-demo',
            template: __webpack_require__(/*! ./flow-demo.component.html */ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-demo.component.html"),
            styles: [__webpack_require__(/*! ./flow-demo.component.scss */ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-demo.component.scss")]
        }),
        __metadata("design:paramtypes", [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], FlowDemoComponent);
    return FlowDemoComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-history/flow-history.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-history/flow-history.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button pButton (click)='lookFlow()' style='margin-bottom:20px' *ngIf=\"permissionCheck('SID02070_P0185_P001')\">查看流程图</button>\r\n<div class=\"ui-g-12 base-table\">\r\n    <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n        <p-column field=\"wfname\" header=\"流程名称\"></p-column>\r\n        <p-column field=\"taskname\" header=\"任务名称\"></p-column>\r\n        <p-column field=\"approveduser\" header=\"执行人\"></p-column>\r\n        <p-column field=\"approveddate\" header=\"执行时间\"></p-column>\r\n        <!-- <p-column field=\"approvedreult\" header=\"审批结果\"></p-column> -->\r\n        <p-column field=\"approvedinfo\" header=\"审批意见\"></p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-history/flow-history.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-history/flow-history.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ui-widget-content {\n  padding: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LXJ1bnRpbWUvZmxvdy1kZW1vL2Zsb3ctaGlzdG9yeS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFx3b3JrZmxvd1xcd29ya2Zsb3ctcnVudGltZVxcZmxvdy1kZW1vXFxmbG93LWhpc3RvcnlcXGZsb3ctaGlzdG9yeS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LXJ1bnRpbWUvZmxvdy1kZW1vL2Zsb3ctaGlzdG9yeS9mbG93LWhpc3Rvcnkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IC9kZWVwLyAudWktd2lkZ2V0LWNvbnRlbnQge1xyXG4gICBwYWRkaW5nOiAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-history/flow-history.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-history/flow-history.ts ***!
  \********************************************************************************************/
/*! exports provided: FlowHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowHistory", function() { return FlowHistory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_flowDemo_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bean/flowDemo.bean */ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/bean/flowDemo.bean.ts");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlowHistory = /** @class */ (function () {
    function FlowHistory(workflowHttpService, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.flowDemoBean = new _bean_flowDemo_bean__WEBPACK_IMPORTED_MODULE_1__["FlowDemoBean"]();
        this.msgs = []; //提示信息
        //表格数据为空的时候显示信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
    }
    FlowHistory.prototype.ngOnInit = function () {
        this.query();
    };
    //查询列表
    FlowHistory.prototype.query = function () {
        var _this = this;
        var ch = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.flowDemoBean.userId = ch['userId'];
        this.flowDemoBean.wfInsId = this.inValue.processInstanceId;
        this.workflowHttpService.IWorkFlowServicequeryApprovedListbywfInsId(this.flowDemoBean).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.tableData = data.msg.listArray;
                _this.total = data.msg.total;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '历史查询成功' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //查看流程图
    FlowHistory.prototype.lookFlow = function () {
        var _this = this;
        this.queryUrlService();
        setTimeout(function () {
            _this.addEverything();
        }, 1000);
    };
    //拼接url
    FlowHistory.prototype.addEverything = function () {
        window.open('http://' + this.tableData[0].singpath + ':8080' + '/wfd/p/monitor?id=' + this.listData.code + '&wfversion=' + this.listData.processVersion + '&name=' + this.listData.name + '&processid=' + this.tableData[0].wfinstanceid);
    };
    //查询url
    FlowHistory.prototype.queryUrlService = function () {
        var _this = this;
        var paramQ = {
            uniqueReqData: this.tableData[0].wfinstanceid
        };
        this.workflowHttpService.IWorkFlowServicegetWorkFlowIdbypiId(paramQ).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.listData = data.msg;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //按钮权限
    FlowHistory.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FlowHistory.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FlowHistory.prototype, "outValue", void 0);
    FlowHistory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flow-history',
            template: __webpack_require__(/*! ./flow-history.html */ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-history/flow-history.html"),
            styles: [__webpack_require__(/*! ./flow-history.scss */ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-history/flow-history.scss")]
        }),
        __metadata("design:paramtypes", [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], FlowHistory);
    return FlowHistory;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/history-flow/bean/history.bean.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/history-flow/bean/history.bean.ts ***!
  \***************************************************************************************/
/*! exports provided: HistoryFlowBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryFlowBean", function() { return HistoryFlowBean; });
var HistoryFlowBean = /** @class */ (function () {
    function HistoryFlowBean() {
        this.state = 'completed'; //流程状态	String
    }
    return HistoryFlowBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/history-flow/flows-history/flows-history.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/history-flow/flows-history/flows-history.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button pButton (click)='lookFlow()' style='margin-bottom:20px' *ngIf=\"permissionCheck('SID02071_P0187_P001')\">查看流程图</button>\r\n<div class=\"ui-g-12 base-table\">\r\n    <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n        <p-column field=\"wfname\" header=\"流程名称\"></p-column>\r\n        <p-column field=\"taskname\" header=\"任务名称\"></p-column>\r\n        <p-column field=\"approveduser\" header=\"执行人\"></p-column>\r\n        <p-column field=\"approveddate\" header=\"执行时间\"></p-column>\r\n        <p-column field=\"approvedinfo\" header=\"审批意见\"></p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/history-flow/flows-history/flows-history.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/history-flow/flows-history/flows-history.ts ***!
  \*************************************************************************************************/
/*! exports provided: FlowsHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowsHistory", function() { return FlowsHistory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_history_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bean/history.bean */ "./src/app/pages/tzb/workflow/workflow-runtime/history-flow/bean/history.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlowsHistory = /** @class */ (function () {
    function FlowsHistory(workflowHttpService, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.historyFlowBean = new _bean_history_bean__WEBPACK_IMPORTED_MODULE_3__["HistoryFlowBean"]();
        this.msgs = []; //提示信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
    }
    FlowsHistory.prototype.ngOnInit = function () {
        this.query();
    };
    FlowsHistory.prototype.ngOnChanges = function () {
        this.fuzhi();
    };
    FlowsHistory.prototype.fuzhi = function () {
        this.flowDemoB = this.inValue;
    };
    //查询列表
    FlowsHistory.prototype.query = function () {
        var _this = this;
        var ch = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.historyFlowBean.userId = ch['userId'];
        this.historyFlowBean.wfInsId = this.inValue.processInstanceId;
        this.workflowHttpService.IWorkFlowServicequeryApprovedListbywfInsId(this.historyFlowBean).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.tableData = data.msg.listArray;
                _this.total = data.msg.total;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '历史查询成功' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    //查看流程图
    FlowsHistory.prototype.lookFlow = function () {
        var _this = this;
        this.queryUrlService();
        setTimeout(function () {
            _this.addEverything();
        }, 1000);
    };
    //拼接url
    FlowsHistory.prototype.addEverything = function () {
        window.open('http://' + this.tableData[0].singpath + ':8080' + '/wfd/p/monitor?id=' + this.listData.code + '&wfversion=' + this.listData.processVersion + '&name=' + this.listData.name + '&processid=' + this.tableData[0].wfinstanceid);
    };
    //查询url
    FlowsHistory.prototype.queryUrlService = function () {
        var _this = this;
        var paramQ = {
            uniqueReqData: this.tableData[0].wfinstanceid
        };
        this.workflowHttpService.IWorkFlowServicegetWorkFlowIdbypiId(paramQ).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.listData = data.msg;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //按钮权限
    FlowsHistory.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FlowsHistory.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FlowsHistory.prototype, "outValue", void 0);
    FlowsHistory = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flows-history',
            template: __webpack_require__(/*! ./flows-history.html */ "./src/app/pages/tzb/workflow/workflow-runtime/history-flow/flows-history/flows-history.html")
        }),
        __metadata("design:paramtypes", [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], FlowsHistory);
    return FlowsHistory;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/history-flow/history-flow.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/history-flow/history-flow.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"precredit\"></header-title>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-4\">\r\n        <div class=\"ui-g-4 labelPlace\">\r\n            流程名称：\r\n        </div>\r\n        <div class=\"ui-g-8\">\r\n            <!-- <p-dropdown [(ngModel)]=\"selectedFile\" [options]=\"left_tree\" placeholder=\"请选择\"  (click)='clickEvn()'></p-dropdown> -->\r\n            <input pInputText type=\"text\" [(ngModel)]=\"selectedFile\" (click)='clickEvn()' readonly class=\"treeInput\">\r\n            <div id='fileTreeExpand' *ngIf=\"showTree\" style='height:280px;width:250px;overflow:scroll'>\r\n                <p-tree [value]=\"left_tree\" selectionMode=\"single\" [(selection)]=\"selectedFile\" (onNodeSelect)=\"nodeSelect($event)\" (onNodeUnselect)=\"nodeUnselect($event)\">\r\n                </p-tree>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-4\">\r\n        <div class=\"ui-g-4 labelPlace\">\r\n            结束状态：\r\n        </div>\r\n        <div class=\"ui-g-8\">\r\n            <p-dropdown [options]=\"states\" placeholder=\"请选择\" [(ngModel)]=\"state\" (onChange)=\"isChange()\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-4\">\r\n        <div class=\"ui-g-4 labelPlace\">\r\n            开始日期：\r\n        </div>\r\n        <div class=\"ui-g-8\">\r\n            <p-calendar [showIcon]=\"true\" [(ngModel)]=\"endAfter\" [locale]=\"ch\" (onSelect)=\"showData()\"></p-calendar>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"ui-g\" style=\"margin-bottom:10px;\">\r\n    <button pButton type=\"button\" label=\"查询\" (click)=\"queryClick()\" style=\"margin-left:40%;\"></button>\r\n    <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\" style=\"margin-left:5%;\"></button>\r\n</div>\r\n\r\n<div class='ui-g-12' style='text-align:right' *ngIf='total'>\r\n    <label for=\"\">当前查询结果：</label>\r\n    <span style=\"color:orange\">{{total}}</span>条\r\n</div>\r\n<hr style=\"border:1px solid #888;\">\r\n\r\n<!-- 表格 -->\r\n<div class=\"ui-g-12 base-table\">\r\n    <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n        <p-column field=\"processDefinitionName\" header=\"流程名称\"></p-column>\r\n        <p-column field=\"endActivityName\" header=\"最后执行任务\"></p-column>\r\n        <p-column field=\"endTime\" header=\"开始时间\"></p-column>\r\n        <p-column field=\"startTime\" header=\"结束时间\"></p-column>\r\n        <p-column field=\"state\" header=\"流程状态\"></p-column>\r\n        <p-column field=\"endUser\" header=\"结束者\"></p-column>\r\n        <p-column field=\"desc\" header=\"流程摘要\"></p-column>\r\n        <p-column header=\"操作\"  *ngIf=\"permissionCheck('SID02071_P0187')\">\r\n            <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <button pButton (click)=\"history(car)\">查看流程历史</button>\r\n            </ng-template>\r\n        </p-column>\r\n    </p-dataTable>\r\n    <!-- 分页 -->\r\n    <p-paginator rows=\"{{historyFlowBean.rows}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n        (onPageChange)=\"paginate($event)\"></p-paginator>\r\n</div>\r\n</div>\r\n\r\n<!-- 弹出框-->\r\n<p-dialog [(visible)]=\"display\" *ngIf=\"display\" modal=\"modal\" width=\"1000\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <flows-history *ngIf=\"showModel=='2'\" (outValue)=\"historyCall($event)\" [inValue]=\"historyValue\"></flows-history>\r\n\r\n    </div>\r\n</p-dialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/history-flow/history-flow.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/history-flow/history-flow.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".labelPlace {\n  text-align: right; }\n\n#fileTreeExpand {\n  position: absolute;\n  z-index: 88888;\n  background: white;\n  left: 17%;\n  width: 305px !important; }\n\n.treeInput {\n  position: relative; }\n\n.base-table button {\n  width: 135px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LXJ1bnRpbWUvaGlzdG9yeS1mbG93L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHdvcmtmbG93XFx3b3JrZmxvdy1ydW50aW1lXFxoaXN0b3J5LWZsb3dcXGhpc3RvcnktZmxvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCx1QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFFUSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvd29ya2Zsb3cvd29ya2Zsb3ctcnVudGltZS9oaXN0b3J5LWZsb3cvaGlzdG9yeS1mbG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsUGxhY2Uge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuI2ZpbGVUcmVlRXhwYW5kIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDg4ODg4OyBcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbGVmdDogMTclOyBcclxuICAgIHdpZHRoOiAzMDVweCAhaW1wb3J0YW50OyBcclxufVxyXG4udHJlZUlucHV0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5iYXNlLXRhYmxle1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxMzVweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/history-flow/history-flow.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/history-flow/history-flow.component.ts ***!
  \********************************************************************************************/
/*! exports provided: HistoryFlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryFlowComponent", function() { return HistoryFlowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var _bean_history_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/history.bean */ "./src/app/pages/tzb/workflow/workflow-runtime/history-flow/bean/history.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { PartyType } from './../../constant/codeValue';

var HistoryFlowComponent = /** @class */ (function () {
    function HistoryFlowComponent(workflowHttpService, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.commfunc = commfunc;
        // 表格中显示的信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        // 表头
        this.precredit = '历史流程查询';
        //修改的参数
        this.updateValue = [];
        //模态框的标题
        this.headerTitle = '修改';
        //模态框是否显示
        this.display = false;
        //提示信息
        this.msgs = [];
        this.states = []; //结束状态
        this.state = 'completed';
        this.historyFlowBean = new _bean_history_bean__WEBPACK_IMPORTED_MODULE_2__["HistoryFlowBean"]();
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"]; //时间格式转换
        this.temData = new Date(); //时间格式转换
        this.showTree = false;
        this.codeValues(); //调用方法，获取全部码值
        this.states = this.code['PartyType'];
    }
    // 树展开需要参数
    HistoryFlowComponent.prototype.expandRecursive = function (node, isExpand) {
        var _this = this;
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(function (childNode) {
                _this.expandRecursive(childNode, isExpand);
            });
        }
    };
    HistoryFlowComponent.prototype.ngOnInit = function () {
        this.historyFlowBean.rows = 10;
        this.historyFlowBean.page = 1;
        this.queryClick();
        this.queryClick1();
        //按回车键查询
        var _thiss = this;
        document.onkeydown = function (event) {
            if (event && event.keyCode === 13) {
                _thiss.queryClick();
            }
        };
    };
    //码值
    HistoryFlowComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //流程目录展开
    HistoryFlowComponent.prototype.toTree = function (data) {
        var _this = this;
        data.forEach(function (item) {
            item['label'] = item['text'];
            item['value'] = item;
            if (item.children) {
                _this.toTree(item.children);
            }
        });
        return data;
    };
    //选择树的内容
    HistoryFlowComponent.prototype.nodeSelect = function (event) {
        if (event.node) {
            this.choiceValue = event.node.value.id;
            this.selectedFile = event.node.label;
            this.showTree = false;
        }
    };
    HistoryFlowComponent.prototype.nodeUnselect = function (event) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    };
    //查询流程目录树
    HistoryFlowComponent.prototype.queryClick1 = function () {
        var _this = this;
        this.workflowHttpService.IProcessDirectoryServiceSearchForDesigner({ 'uniqueReqData': '-1' }).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.left_tree = _this.toTree(data.msg.listArray);
                _this.left_tree.forEach(function (node) {
                    _this.expandRecursive(node, true);
                });
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
    //日期
    HistoryFlowComponent.prototype.showData = function () {
        this.temData = this.endAfter;
    };
    HistoryFlowComponent.prototype.isChange = function () {
        this.changeValue = '1';
    };
    //查询
    HistoryFlowComponent.prototype.queryClick = function () {
        var _this = this;
        if (this.selectedFile) {
            this.historyFlowBean.processDefinitionId = this.choiceValue;
        }
        this.historyFlowBean.endAfter = this.commfunc.transDateN(this.endAfter);
        var ch = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.historyFlowBean.userId = ch['userId'];
        if (this.changeValue) {
            this.historyFlowBean.state = this.state;
        }
        else {
            this.historyFlowBean.state = 'completed';
        }
        this.workflowHttpService.IWorkFlowServicegetProcessInsList(this.historyFlowBean).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.tableData = data.msg.data;
                _this.total = data.msg.total;
                if (_this.total == '0') {
                    _this.total = '0';
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.msg.returnCode.code });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // 重置
    HistoryFlowComponent.prototype.reset = function () {
        this.selectedFile = null;
        this.endAfter = null;
        this.state = 'completed';
        this.historyFlowBean.processDefinitionId = '';
    };
    // 查看流程历史
    HistoryFlowComponent.prototype.history = function (car) {
        this.headerTitle = '查看流程历史';
        this.display = true;
        this.showModel = 2;
        this.historyValue = car;
    };
    HistoryFlowComponent.prototype.historyCall = function ($event) {
        this.display = false;
    };
    //分页
    HistoryFlowComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.historyFlowBean.rows = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.historyFlowBean.page = currentPage;
        //调用查询的方法
        this.queryClick();
        this.historyFlowBean.page = 1;
    };
    //
    //点击事件控制树的显示隐藏
    HistoryFlowComponent.prototype.clickEvn = function () {
        this.showTree = !this.showTree;
    };
    //流程编码的回调
    HistoryFlowComponent.prototype.treeCall = function (param) {
        this.display = false;
        this.historyFlowBean.id = param.id;
    };
    //按钮权限
    HistoryFlowComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    HistoryFlowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'history-flow',
            template: __webpack_require__(/*! ./history-flow.component.html */ "./src/app/pages/tzb/workflow/workflow-runtime/history-flow/history-flow.component.html"),
            styles: [__webpack_require__(/*! ./history-flow.component.scss */ "./src/app/pages/tzb/workflow/workflow-runtime/history-flow/history-flow.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], HistoryFlowComponent);
    return HistoryFlowComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/wait-task/bean/wait-task.bean.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/wait-task/bean/wait-task.bean.ts ***!
  \**************************************************************************************/
/*! exports provided: WaitTaskBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitTaskBean", function() { return WaitTaskBean; });
var WaitTaskBean = /** @class */ (function () {
    function WaitTaskBean() {
    }
    return WaitTaskBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/wait-task/wait-task-history/wait-task-history.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/wait-task/wait-task-history/wait-task-history.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button pButton (click)='lookFlow()' style='margin-bottom:20px' *ngIf=\"permissionCheck('SID02073_P0190_P001')\">查看流程图</button>\r\n<p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n  <p-column field=\"wfname\" header=\"流程名称\"></p-column>\r\n  <p-column field=\"taskname\" header=\"任务名称\"></p-column>\r\n  <p-column field=\"approveduser\" header=\"执行人\"></p-column>\r\n  <p-column field=\"approveddate\" header=\"执行时间\"></p-column>\r\n  <p-column field=\"approvedinfo\" header=\"审批意见\"></p-column>\r\n</p-dataTable>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/wait-task/wait-task-history/wait-task-history.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/wait-task/wait-task-history/wait-task-history.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: WaitTaskHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitTaskHistoryComponent", function() { return WaitTaskHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_wait_task_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bean/wait-task.bean */ "./src/app/pages/tzb/workflow/workflow-runtime/wait-task/bean/wait-task.bean.ts");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WaitTaskHistoryComponent = /** @class */ (function () {
    function WaitTaskHistoryComponent(workflowHttpService, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.waitTaskBean = new _bean_wait_task_bean__WEBPACK_IMPORTED_MODULE_1__["WaitTaskBean"]();
        this.msgs = []; //提示信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
    }
    WaitTaskHistoryComponent.prototype.ngOnInit = function () {
        this.query();
    };
    //查询列表
    WaitTaskHistoryComponent.prototype.query = function () {
        var _this = this;
        var ch = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.waitTaskBean.userId = ch['userId'];
        this.waitTaskBean.wfInsId = this.inValue.processId;
        this.workflowHttpService.IWorkFlowServicequeryApprovedListbywfInsId(this.waitTaskBean).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.tableData = data.msg.listArray;
                _this.total = data.msg.total;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '流程历史查询成功' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    //查看流程图
    WaitTaskHistoryComponent.prototype.lookFlow = function () {
        var _this = this;
        this.queryUrlService();
        setTimeout(function () {
            _this.addEverything();
        }, 1000);
    };
    //拼接url
    WaitTaskHistoryComponent.prototype.addEverything = function () {
        window.open('http://' + this.tableData[0].singpath + ':8080' + '/wfd/p/monitor?id=' + this.listData.code + '&wfversion=' + this.listData.processVersion + '&name=' + this.listData.name + '&processid=' + this.tableData[0].wfinstanceid);
    };
    //查询url
    WaitTaskHistoryComponent.prototype.queryUrlService = function () {
        var _this = this;
        var paramQ = {
            uniqueReqData: this.tableData[0].wfinstanceid
        };
        this.workflowHttpService.IWorkFlowServicegetWorkFlowIdbypiId(paramQ).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.listData = data.msg;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //按钮权限
    WaitTaskHistoryComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WaitTaskHistoryComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WaitTaskHistoryComponent.prototype, "outValue", void 0);
    WaitTaskHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wait-task-history',
            template: __webpack_require__(/*! ./wait-task-history.component.html */ "./src/app/pages/tzb/workflow/workflow-runtime/wait-task/wait-task-history/wait-task-history.component.html")
        }),
        __metadata("design:paramtypes", [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], WaitTaskHistoryComponent);
    return WaitTaskHistoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/wait-task/wait-task.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/wait-task/wait-task.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"precredit\"></header-title>\r\n\r\n<div class='ui-g-12' style='text-align:right' *ngIf='total'>\r\n    <label for=\"\">当前查询结果：</label>\r\n    <span style=\"color:orange\">{{total}}</span>条\r\n</div>\r\n<hr style=\"border:1px solid #888;\">\r\n<!-- 表格 -->\r\n<div class=\"ui-g-12 base-table\">\r\n    <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n        <p-column field=\"processName\" header=\"流程名称\"></p-column>\r\n        <p-column field=\"taskName\" header=\"任务名称\"></p-column>\r\n        <p-column field=\"createDate\" header=\"提交日期\"></p-column>\r\n        <p-column field=\"wfDesc\" header=\"流程概述\"></p-column>\r\n        <p-column header=\"操作\">\r\n            <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <button pButton (click)=\"over()\" *ngIf=\"permissionCheck('SID02073_P0189')\">检入</button>\r\n                <button pButton (click)=\"history(car)\" *ngIf=\"permissionCheck('SID02073_P0190')\">查看流程历史</button>\r\n            </ng-template>\r\n        </p-column>\r\n    </p-dataTable>\r\n    <!-- 分页 -->\r\n    <p-paginator rows=\"{{waitTaskBean.rows}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n</div>\r\n</div>\r\n\r\n<!-- 弹出框-->\r\n<p-dialog [(visible)]=\"display\" modal=\"modal\" width='900' [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <app-wait-task-history *ngIf=\"showModel=='1'\" (outValue)=\"historyCall($event)\" [inValue]=\"historyValue\"></app-wait-task-history>\r\n    </div>\r\n</p-dialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/wait-task/wait-task.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/wait-task/wait-task.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".labelPlace {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LXJ1bnRpbWUvd2FpdC10YXNrL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHdvcmtmbG93XFx3b3JrZmxvdy1ydW50aW1lXFx3YWl0LXRhc2tcXHdhaXQtdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LXJ1bnRpbWUvd2FpdC10YXNrL3dhaXQtdGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbFBsYWNlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/wait-task/wait-task.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/wait-task/wait-task.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WaitTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitTaskComponent", function() { return WaitTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var _bean_wait_task_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/wait-task.bean */ "./src/app/pages/tzb/workflow/workflow-runtime/wait-task/bean/wait-task.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WaitTaskComponent = /** @class */ (function () {
    function WaitTaskComponent(workflowHttpService, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.commfunc = commfunc;
        // 表头
        this.precredit = '待办任务查询';
        //修改的参数
        this.updateValue = [];
        //提示信息
        this.msgs = [];
        //模态框的标题
        this.headerTitle = '修改';
        //模态框是否显示
        this.display = false;
        //bean
        this.waitTaskBean = new _bean_wait_task_bean__WEBPACK_IMPORTED_MODULE_2__["WaitTaskBean"]();
        //表中无数据显示
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        //需传参数
        this.obj = {
            taskId: '',
            operId: ''
        };
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"]; //时间格式转换
        this.temData = new Date(); //时间格式转换
        this.showTree = false;
    }
    WaitTaskComponent.prototype.ngOnInit = function () {
        this.waitTaskBean.rows = 10;
        this.waitTaskBean.page = 1;
        this.queryClick();
    };
    //日期
    WaitTaskComponent.prototype.showData = function () {
        this.temData = this.createDate;
    };
    //查询
    WaitTaskComponent.prototype.queryClick = function () {
        var _this = this;
        /**
       * 动态获取userId
       */
        if (this.selectedFile) {
            this.waitTaskBean.id = this.choiceValue;
        }
        this.waitTaskBean.createDate = this.commfunc.transDateN(this.createDate);
        var ch = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.waitTaskBean.userId = ch['userId'];
        this.waitTaskBean.checkInFlag = 'true';
        this.workflowHttpService.IWorkFlowServicegetCheckTaskList(this.waitTaskBean).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.tableData = data.msg.data;
                _this.total = data.msg.total;
                if (_this.total == '0') {
                    _this.total = '0';
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.code });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //捡入
    WaitTaskComponent.prototype.over = function () {
        var _this = this;
        var ch = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.tableData.forEach(function (item) {
            _this.obj.taskId = item.taskId;
            _this.obj.operId = ch['userId'];
        });
        this.workflowHttpService.IWorkFlowServicecheckInTask(this.obj).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '检入成功' });
                _this.queryClick();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //分页
    WaitTaskComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.waitTaskBean.rows = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.waitTaskBean.page = currentPage;
        //调用查询的方法
        this.queryClick();
        this.waitTaskBean.page = 1;
    };
    //查看历史流程
    WaitTaskComponent.prototype.history = function (car) {
        this.headerTitle = '查看流程历史';
        this.display = true;
        this.showModel = '1';
        this.historyValue = car;
    };
    //查看历史流程回调
    WaitTaskComponent.prototype.historyCall = function (event) {
        this.display = false;
        this.queryClick();
    };
    //按钮权限
    WaitTaskComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    WaitTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'wait-task',
            template: __webpack_require__(/*! ./wait-task.component.html */ "./src/app/pages/tzb/workflow/workflow-runtime/wait-task/wait-task.component.html"),
            styles: [__webpack_require__(/*! ./wait-task.component.scss */ "./src/app/pages/tzb/workflow/workflow-runtime/wait-task/wait-task.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], WaitTaskComponent);
    return WaitTaskComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/will-detection/bean/will-detection.bean.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/will-detection/bean/will-detection.bean.ts ***!
  \************************************************************************************************/
/*! exports provided: WillDetectionBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WillDetectionBean", function() { return WillDetectionBean; });
var WillDetectionBean = /** @class */ (function () {
    function WillDetectionBean() {
    }
    return WillDetectionBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/will-detection/will-detection-history/will-detection-history.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/will-detection/will-detection-history/will-detection-history.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button pButton (click)='lookFlow()' style='margin-bottom:20px' *ngIf=\"permissionCheck('SID02074_P0192_P001')\">查看流程图</button>\r\n<p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n  <p-column field=\"wfname\" header=\"流程名称\"></p-column>\r\n  <p-column field=\"taskname\" header=\"任务名称\"></p-column>\r\n  <p-column field=\"approveduser\" header=\"执行人\"></p-column>\r\n  <p-column field=\"approveddate\" header=\"执行时间\"></p-column>\r\n  <p-column field=\"approvedinfo\" header=\"审批意见\"></p-column>\r\n</p-dataTable>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/will-detection/will-detection-history/will-detection-history.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/will-detection/will-detection-history/will-detection-history.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: WillDetectionHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WillDetectionHistoryComponent", function() { return WillDetectionHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_will_detection_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bean/will-detection.bean */ "./src/app/pages/tzb/workflow/workflow-runtime/will-detection/bean/will-detection.bean.ts");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WillDetectionHistoryComponent = /** @class */ (function () {
    function WillDetectionHistoryComponent(workflowHttpService, commfunc) {
        this.workflowHttpService = workflowHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.willDetectionBean = new _bean_will_detection_bean__WEBPACK_IMPORTED_MODULE_1__["WillDetectionBean"]();
        this.msgs = []; //提示信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
    }
    WillDetectionHistoryComponent.prototype.ngOnInit = function () {
        this.query();
    };
    //查询列表
    WillDetectionHistoryComponent.prototype.query = function () {
        var _this = this;
        var ch = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.willDetectionBean.userId = ch['userId'];
        this.willDetectionBean.wfInsId = this.inValue.processId;
        this.workflowHttpService.IWorkFlowServicequeryApprovedListbywfInsId(this.willDetectionBean).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.tableData = data.msg.listArray;
                _this.total = data.msg.total;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '流程历史查询成功' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务错误' });
        });
    };
    //查看流程图
    WillDetectionHistoryComponent.prototype.lookFlow = function () {
        var _this = this;
        this.queryUrlService();
        setTimeout(function () {
            _this.addEverything();
        }, 1000);
    };
    //拼接url
    WillDetectionHistoryComponent.prototype.addEverything = function () {
        window.open('http://' + this.tableData[0].singpath + ':8080' + '/wfd/p/monitor?id=' + this.listData.code + '&wfversion=' + this.listData.processVersion + '&name=' + this.listData.name + '&processid=' + this.tableData[0].wfinstanceid);
    };
    //查询url
    WillDetectionHistoryComponent.prototype.queryUrlService = function () {
        var _this = this;
        var paramQ = {
            uniqueReqData: this.tableData[0].wfinstanceid
        };
        this.workflowHttpService.IWorkFlowServicegetWorkFlowIdbypiId(paramQ).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.listData = data.msg;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
    };
    //按钮权限
    WillDetectionHistoryComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WillDetectionHistoryComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], WillDetectionHistoryComponent.prototype, "outValue", void 0);
    WillDetectionHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-will-detection-history',
            template: __webpack_require__(/*! ./will-detection-history.component.html */ "./src/app/pages/tzb/workflow/workflow-runtime/will-detection/will-detection-history/will-detection-history.component.html")
        }),
        __metadata("design:paramtypes", [_workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], WillDetectionHistoryComponent);
    return WillDetectionHistoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/will-detection/will-detection.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/will-detection/will-detection.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"precredit\"></header-title>\r\n\r\n<div class='ui-g-12' style='text-align:right' *ngIf='total'>\r\n    <label for=\"\">当前查询结果：</label>\r\n    <span style=\"color:orange\">{{total}}</span>条\r\n</div>\r\n<hr style=\"border:1px solid #888;\">\r\n\r\n<!-- 表格 -->\r\n<div class=\"ui-g-12 base-table\">\r\n    <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n        <p-column field=\"processName\" header=\"流程名称\"></p-column>\r\n        <p-column field=\"taskName\" header=\"任务名称\"></p-column>\r\n        <p-column field=\"createDate\" header=\"提交日期\"></p-column>\r\n        <p-column field=\"wfDesc\" header=\"流程概述\"></p-column>\r\n        <p-column header=\"操作\">\r\n            <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <button pButton (click)=\"over()\" *ngIf=\"permissionCheck('SID02074_P0191')\">检出</button>\r\n                <button pButton (click)=\"history(car)\" *ngIf=\"permissionCheck('SID02074_P0192')\">查看流程历史</button>\r\n            </ng-template>\r\n        </p-column>\r\n    </p-dataTable>\r\n\r\n    <!-- 分页 -->\r\n    <p-paginator rows=\"{{willDetectionBean.rows}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n        (onPageChange)=\"paginate($event)\"></p-paginator>\r\n</div>\r\n</div>\r\n\r\n<!-- 弹出框-->\r\n<p-dialog [(visible)]=\"display\" modal=\"modal\" width='900' [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <app-will-detection-history *ngIf=\"showModel=='1'\" (outValue)=\"historyCall($event)\" [inValue]=\"historyValue\"></app-will-detection-history>\r\n    </div>\r\n</p-dialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/will-detection/will-detection.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/will-detection/will-detection.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".labelPlace {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LXJ1bnRpbWUvd2lsbC1kZXRlY3Rpb24vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6Ylxcd29ya2Zsb3dcXHdvcmtmbG93LXJ1bnRpbWVcXHdpbGwtZGV0ZWN0aW9uXFx3aWxsLWRldGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L3dvcmtmbG93LXJ1bnRpbWUvd2lsbC1kZXRlY3Rpb24vd2lsbC1kZXRlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWxQbGFjZSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/will-detection/will-detection.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/will-detection/will-detection.component.ts ***!
  \************************************************************************************************/
/*! exports provided: WillDetectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WillDetectionComponent", function() { return WillDetectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../workflow/http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bean_will_detection_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/will-detection.bean */ "./src/app/pages/tzb/workflow/workflow-runtime/will-detection/bean/will-detection.bean.ts");
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






var WillDetectionComponent = /** @class */ (function () {
    function WillDetectionComponent(confirmationService, workflowHttpService, commfunc) {
        this.confirmationService = confirmationService;
        this.workflowHttpService = workflowHttpService;
        this.commfunc = commfunc;
        // 表头
        this.precredit = '待检出任务查询';
        //修改的参数
        this.updateValue = [];
        //提示信息
        this.msgs = [];
        //模态框的标题
        this.headerTitle = '查看流程历史';
        //模态框是否显示
        this.display = false;
        //bean
        this.willDetectionBean = new _bean_will_detection_bean__WEBPACK_IMPORTED_MODULE_3__["WillDetectionBean"]();
        //需传参数
        this.obj = {
            taskId: '',
            assignId: '',
            operId: ''
        };
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_CN"]; //时间格式转换
        this.temData = new Date(); //时间格式转换
        this.showTree = false;
    }
    WillDetectionComponent.prototype.ngOnInit = function () {
        this.willDetectionBean.rows = 10;
        this.willDetectionBean.page = 1;
        this.queryClick();
    };
    //日期
    WillDetectionComponent.prototype.showData = function () {
        this.temData = this.createDate;
    };
    //查询
    WillDetectionComponent.prototype.queryClick = function () {
        var _this = this;
        if (this.selectedFile) {
            this.willDetectionBean.id = this.choiceValue;
        }
        this.willDetectionBean.createDate = this.commfunc.transDateN(this.createDate);
        var ch = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.willDetectionBean.userId = ch['userId'];
        this.workflowHttpService.IWorkFlowServicegetCheckTaskList(this.willDetectionBean).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.tableData = data.msg.data;
                _this.total = data.msg.total;
                if (_this.total == '0') {
                    _this.total = '0';
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // 重置
    WillDetectionComponent.prototype.reset = function () {
        this.selectedFile = null;
        this.createDate = null;
    };
    //检出
    WillDetectionComponent.prototype.over = function () {
        var _this = this;
        var ch = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.tableData.forEach(function (item) {
            _this.obj.taskId = item.taskId;
            // this.obj.assignId=ch['userId'];
            _this.obj.assignId = 'sys';
            _this.obj.operId = ch['userId'];
        });
        this.workflowHttpService.IWorkFlowServicecheckOutTask(this.obj).subscribe(function (data) {
            if (data.msg.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '检出成功' });
                _this.queryClick();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.msg.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //分页
    WillDetectionComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.willDetectionBean.rows = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.willDetectionBean.page = currentPage;
        //调用查询的方法
        this.queryClick();
        this.willDetectionBean.page = 1;
    };
    //查看历史流程
    WillDetectionComponent.prototype.history = function (car) {
        this.headerTitle = '查看流程历史';
        this.display = true;
        this.showModel = '1';
        this.historyValue = car;
    };
    //查看历史流程回调
    WillDetectionComponent.prototype.historyCall = function (event) {
        this.display = false;
        this.queryClick();
    };
    //按钮权限
    WillDetectionComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    //点击事件控制树的显示隐藏
    WillDetectionComponent.prototype.clickEvn = function (event) {
        this.showTree = true;
    };
    //流程编码的回调
    WillDetectionComponent.prototype.treeCall = function (param) {
        this.display = false;
        this.willDetectionBean.id = param.id;
    };
    WillDetectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'will-detection',
            template: __webpack_require__(/*! ./will-detection.component.html */ "./src/app/pages/tzb/workflow/workflow-runtime/will-detection/will-detection.component.html"),
            styles: [__webpack_require__(/*! ./will-detection.component.scss */ "./src/app/pages/tzb/workflow/workflow-runtime/will-detection/will-detection.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _workflow_http_workflow_http_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]])
    ], WillDetectionComponent);
    return WillDetectionComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/workflow-runtime.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/workflow-runtime.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow-runtime/workflow-runtime.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow-runtime/workflow-runtime.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WorkflowRuntimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowRuntimeComponent", function() { return WorkflowRuntimeComponent; });
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

var WorkflowRuntimeComponent = /** @class */ (function () {
    function WorkflowRuntimeComponent() {
    }
    WorkflowRuntimeComponent.prototype.ngOnInit = function () {
    };
    WorkflowRuntimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'workflow-runtime',
            template: __webpack_require__(/*! ./workflow-runtime.component.html */ "./src/app/pages/tzb/workflow/workflow-runtime/workflow-runtime.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], WorkflowRuntimeComponent);
    return WorkflowRuntimeComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow.component.ts ***!
  \**********************************************************/
/*! exports provided: WorkflowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowComponent", function() { return WorkflowComponent; });
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

var WorkflowComponent = /** @class */ (function () {
    function WorkflowComponent() {
    }
    WorkflowComponent.prototype.ngOnInit = function () {
    };
    WorkflowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'workflow',
            template: __webpack_require__(/*! ./workflow.component.html */ "./src/app/pages/tzb/workflow/workflow.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], WorkflowComponent);
    return WorkflowComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow.module.ts ***!
  \*******************************************************/
/*! exports provided: WorkflowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowModule", function() { return WorkflowModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _workflow_design_workflow_design_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workflow-design/workflow-design.component */ "./src/app/pages/tzb/workflow/workflow-design/workflow-design.component.ts");
/* harmony import */ var _workflow_runtime_workflow_runtime_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workflow-runtime/workflow-runtime.component */ "./src/app/pages/tzb/workflow/workflow-runtime/workflow-runtime.component.ts");
/* harmony import */ var _workflow_design_flow_catalog_flow_catalog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workflow-design/flow-catalog/flow-catalog.component */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog.component.ts");
/* harmony import */ var _workflow_design_flow_design_flow_design_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workflow-design/flow-design/flow-design.component */ "./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design.component.ts");
/* harmony import */ var _workflow_design_flow_variate_flow_variate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./workflow-design/flow-variate/flow-variate.component */ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate.component.ts");
/* harmony import */ var _workflow_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workflow.routing */ "./src/app/pages/tzb/workflow/workflow.routing.ts");
/* harmony import */ var _workflow_design_flow_catalog_flow_catalog_add_flow_catalog_add__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workflow-design/flow-catalog/flow-catalog-add/flow-catalog-add */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-add/flow-catalog-add.ts");
/* harmony import */ var _workflow_design_flow_catalog_flow_catalog_update_flow_catalog_update__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./workflow-design/flow-catalog/flow-catalog-update/flow-catalog-update */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-update/flow-catalog-update.ts");
/* harmony import */ var _workflow_design_flow_catalog_flow_catalog_look_flow_catalog_look__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./workflow-design/flow-catalog/flow-catalog-look/flow-catalog-look */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog-look/flow-catalog-look.ts");
/* harmony import */ var _workflow_design_flow_variate_flow_variate_add_flow_variate_add__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./workflow-design/flow-variate/flow-variate-add/flow-variate-add */ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-add/flow-variate-add.ts");
/* harmony import */ var _workflow_design_flow_variate_flow_variate_look_flow_variate_look__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./workflow-design/flow-variate/flow-variate-look/flow-variate-look */ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-look/flow-variate-look.ts");
/* harmony import */ var _workflow_design_flow_variate_flow_variate_update_flow_variate_update__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./workflow-design/flow-variate/flow-variate-update/flow-variate-update */ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate-update/flow-variate-update.ts");
/* harmony import */ var _workflow_design_flow_design_flow_design_add_flow_design_add__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./workflow-design/flow-design/flow-design-add/flow-design-add */ "./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design-add/flow-design-add.ts");
/* harmony import */ var _workflow_design_flow_design_flow_design_look_flow_design_look__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./workflow-design/flow-design/flow-design-look/flow-design-look */ "./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design-look/flow-design-look.ts");
/* harmony import */ var _workflow_design_flow_design_flow_design_update_flow_design_update__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./workflow-design/flow-design/flow-design-update/flow-design-update */ "./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design-update/flow-design-update.ts");
/* harmony import */ var _workflow_design_variate_preserve_variate_preserve_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./workflow-design/variate-preserve/variate-preserve.component */ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve.component.ts");
/* harmony import */ var _workflow_design_variate_preserve_variate_preserve_add_variate_preserve_add__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./workflow-design/variate-preserve/variate-preserve-add/variate-preserve-add */ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve-add/variate-preserve-add.ts");
/* harmony import */ var _workflow_design_variate_preserve_variate_preserve_update_variate_preserve_update__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./workflow-design/variate-preserve/variate-preserve-update/variate-preserve-update */ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve-update/variate-preserve-update.ts");
/* harmony import */ var _workflow_design_variate_preserve_variate_preserve_look_variate_preserve_look__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./workflow-design/variate-preserve/variate-preserve-look/variate-preserve-look */ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve-look/variate-preserve-look.ts");
/* harmony import */ var _workflow_design_flow_version_flow_version_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./workflow-design/flow-version/flow-version.component */ "./src/app/pages/tzb/workflow/workflow-design/flow-version/flow-version.component.ts");
/* harmony import */ var _workflow_runtime_already_work_already_work_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./workflow-runtime/already-work/already-work.component */ "./src/app/pages/tzb/workflow/workflow-runtime/already-work/already-work.component.ts");
/* harmony import */ var _workflow_runtime_flow_demo_flow_demo_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./workflow-runtime/flow-demo/flow-demo.component */ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-demo.component.ts");
/* harmony import */ var _workflow_runtime_history_flow_history_flow_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./workflow-runtime/history-flow/history-flow.component */ "./src/app/pages/tzb/workflow/workflow-runtime/history-flow/history-flow.component.ts");
/* harmony import */ var _workflow_runtime_wait_task_wait_task_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./workflow-runtime/wait-task/wait-task.component */ "./src/app/pages/tzb/workflow/workflow-runtime/wait-task/wait-task.component.ts");
/* harmony import */ var _workflow_runtime_will_detection_will_detection_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./workflow-runtime/will-detection/will-detection.component */ "./src/app/pages/tzb/workflow/workflow-runtime/will-detection/will-detection.component.ts");
/* harmony import */ var _workflow_design_flow_catalog_txt_add_txt_add__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./workflow-design/flow-catalog/txt-add/txt-add */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/txt-add/txt-add.ts");
/* harmony import */ var _workflow_design_flow_catalog_txt_update_txt_update__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./workflow-design/flow-catalog/txt-update/txt-update */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/txt-update/txt-update.ts");
/* harmony import */ var _workflow_runtime_flow_demo_flow_demo_over_flow_demo_over__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./workflow-runtime/flow-demo/flow-demo-over/flow-demo-over */ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-demo-over/flow-demo-over.ts");
/* harmony import */ var _workflow_runtime_flow_demo_flow_history_flow_history__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./workflow-runtime/flow-demo/flow-history/flow-history */ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-history/flow-history.ts");
/* harmony import */ var _workflow_runtime_history_flow_flows_history_flows_history__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./workflow-runtime/history-flow/flows-history/flows-history */ "./src/app/pages/tzb/workflow/workflow-runtime/history-flow/flows-history/flows-history.ts");
/* harmony import */ var _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var _workflow_design_flow_catalog_maintain_maintain__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./workflow-design/flow-catalog/maintain/maintain */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain.ts");
/* harmony import */ var _workflow_design_flow_catalog_maintain_maintain_add_maintain_add__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./workflow-design/flow-catalog/maintain/maintain-add/maintain-add */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain-add/maintain-add.ts");
/* harmony import */ var _workflow_design_flow_catalog_maintain_maintain_update_miantain_update__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./workflow-design/flow-catalog/maintain/maintain-update/miantain-update */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/maintain/maintain-update/miantain-update.ts");
/* harmony import */ var _workflow_design_flow_catalog_visit_control_visit_control__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./workflow-design/flow-catalog/visit-control/visit-control */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/visit-control.ts");
/* harmony import */ var _workflow_design_flow_catalog_visit_control_flow_power_flow_power__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./workflow-design/flow-catalog/visit-control/flow-power/flow-power */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/flow-power/flow-power.ts");
/* harmony import */ var _workflow_design_flow_catalog_flow_user_flow_user__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./workflow-design/flow-catalog/flow-user/flow-user */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-user/flow-user.ts");
/* harmony import */ var _workflow_design_flow_catalog_other_version_other_version__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./workflow-design/flow-catalog/other-version/other-version */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _workflow_design_flow_catalog_visit_control_visit_control_add_visit_control_add_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./workflow-design/flow-catalog/visit-control/visit-control-add/visit-control-add.component */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/visit-control/visit-control-add/visit-control-add.component.ts");
/* harmony import */ var _workflow_runtime_already_work_already_work_history_already_work_history_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./workflow-runtime/already-work/already-work-history/already-work-history.component */ "./src/app/pages/tzb/workflow/workflow-runtime/already-work/already-work-history/already-work-history.component.ts");
/* harmony import */ var _workflow_runtime_wait_task_wait_task_history_wait_task_history_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./workflow-runtime/wait-task/wait-task-history/wait-task-history.component */ "./src/app/pages/tzb/workflow/workflow-runtime/wait-task/wait-task-history/wait-task-history.component.ts");
/* harmony import */ var _workflow_runtime_will_detection_will_detection_history_will_detection_history_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./workflow-runtime/will-detection/will-detection-history/will-detection-history.component */ "./src/app/pages/tzb/workflow/workflow-runtime/will-detection/will-detection-history/will-detection-history.component.ts");
/* harmony import */ var _workflow_design_flow_catalog_other_version_other_version_map_other_version_map_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./workflow-design/flow-catalog/other-version/other-version-map/other-version-map.component */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version-map/other-version-map.component.ts");
/* harmony import */ var _workflow_design_flow_catalog_other_version_other_version_backedit_other_version_backedit_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./workflow-design/flow-catalog/other-version/other-version-backedit/other-version-backedit.component */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/other-version/other-version-backedit/other-version-backedit.component.ts");
/* harmony import */ var _workflow_design_flow_catalog_into_flow_into_flow_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./workflow-design/flow-catalog/into-flow/into-flow.component */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/into-flow/into-flow.component.ts");
/* harmony import */ var _workflow_design_flow_catalog_out_flow_out_flow_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./workflow-design/flow-catalog/out-flow/out-flow.component */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/out-flow/out-flow.component.ts");
/* harmony import */ var _workflow_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./workflow.component */ "./src/app/pages/tzb/workflow/workflow.component.ts");
/* harmony import */ var _temporayWorkFlow_temporayWorkFlow_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./temporayWorkFlow/temporayWorkFlow.component */ "./src/app/pages/tzb/workflow/temporayWorkFlow/temporayWorkFlow.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















































//  工作流
var WorkflowModule = /** @class */ (function () {
    function WorkflowModule() {
    }
    WorkflowModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _workflow_routing__WEBPACK_IMPORTED_MODULE_9__["WorkflowRouting"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
            ],
            declarations: [
                _workflow_component__WEBPACK_IMPORTED_MODULE_51__["WorkflowComponent"],
                _workflow_design_workflow_design_component__WEBPACK_IMPORTED_MODULE_4__["WorkflowDesignComponent"],
                _workflow_runtime_workflow_runtime_component__WEBPACK_IMPORTED_MODULE_5__["WorkflowRuntimeComponent"],
                _workflow_design_flow_design_flow_design_component__WEBPACK_IMPORTED_MODULE_7__["FlowDesignComponent"],
                _workflow_design_flow_variate_flow_variate_component__WEBPACK_IMPORTED_MODULE_8__["FlowVariateComponent"],
                _workflow_design_flow_catalog_flow_catalog_component__WEBPACK_IMPORTED_MODULE_6__["FlowCatalogComponent"],
                _workflow_design_flow_catalog_flow_catalog_add_flow_catalog_add__WEBPACK_IMPORTED_MODULE_10__["FlowCatalogAdd"],
                _workflow_design_flow_catalog_flow_catalog_update_flow_catalog_update__WEBPACK_IMPORTED_MODULE_11__["FlowCatalogUpdate"],
                _workflow_design_flow_catalog_flow_catalog_look_flow_catalog_look__WEBPACK_IMPORTED_MODULE_12__["FlowCatalogLook"],
                _workflow_design_flow_catalog_flow_user_flow_user__WEBPACK_IMPORTED_MODULE_40__["FlowUser"],
                _workflow_design_flow_catalog_into_flow_into_flow_component__WEBPACK_IMPORTED_MODULE_49__["IntoFlowComponent"],
                _workflow_design_flow_catalog_out_flow_out_flow_component__WEBPACK_IMPORTED_MODULE_50__["OutFlowComponent"],
                _workflow_design_flow_catalog_txt_add_txt_add__WEBPACK_IMPORTED_MODULE_29__["TxtAdd"],
                _workflow_design_flow_catalog_txt_update_txt_update__WEBPACK_IMPORTED_MODULE_30__["TxtUpdate"],
                _workflow_design_flow_catalog_maintain_maintain__WEBPACK_IMPORTED_MODULE_35__["Maintain"],
                _workflow_design_flow_catalog_maintain_maintain_add_maintain_add__WEBPACK_IMPORTED_MODULE_36__["MaintainAdd"],
                _workflow_design_flow_catalog_maintain_maintain_update_miantain_update__WEBPACK_IMPORTED_MODULE_37__["MaintainUpdate"],
                _workflow_design_flow_catalog_other_version_other_version__WEBPACK_IMPORTED_MODULE_41__["OtherVersion"],
                _workflow_design_flow_catalog_other_version_other_version_map_other_version_map_component__WEBPACK_IMPORTED_MODULE_47__["OtherVersionMapComponent"],
                _workflow_design_flow_catalog_other_version_other_version_backedit_other_version_backedit_component__WEBPACK_IMPORTED_MODULE_48__["OtherVersionBackeditComponent"],
                _workflow_design_flow_catalog_visit_control_visit_control__WEBPACK_IMPORTED_MODULE_38__["VisitControl"],
                _workflow_design_flow_catalog_visit_control_visit_control_add_visit_control_add_component__WEBPACK_IMPORTED_MODULE_43__["VisitControlAddComponent"],
                _workflow_design_flow_variate_flow_variate_add_flow_variate_add__WEBPACK_IMPORTED_MODULE_13__["FlowVariateAdd"],
                _workflow_design_flow_variate_flow_variate_look_flow_variate_look__WEBPACK_IMPORTED_MODULE_14__["FlowVariateLook"],
                _workflow_design_flow_variate_flow_variate_update_flow_variate_update__WEBPACK_IMPORTED_MODULE_15__["FlowVariateUpdate"],
                _workflow_design_flow_design_flow_design_update_flow_design_update__WEBPACK_IMPORTED_MODULE_18__["FlowDesignUpdate"],
                _workflow_design_variate_preserve_variate_preserve_component__WEBPACK_IMPORTED_MODULE_19__["VariatePreserveComponent"],
                _workflow_design_variate_preserve_variate_preserve_add_variate_preserve_add__WEBPACK_IMPORTED_MODULE_20__["VariatePreserveAdd"],
                _workflow_design_variate_preserve_variate_preserve_update_variate_preserve_update__WEBPACK_IMPORTED_MODULE_21__["VariatePreserveUpdate"],
                _workflow_design_variate_preserve_variate_preserve_look_variate_preserve_look__WEBPACK_IMPORTED_MODULE_22__["VariatePreserveLook"],
                _workflow_design_flow_version_flow_version_component__WEBPACK_IMPORTED_MODULE_23__["FlowVersionComponent"],
                _workflow_runtime_already_work_already_work_component__WEBPACK_IMPORTED_MODULE_24__["AlreadyWorkComponent"],
                _workflow_runtime_flow_demo_flow_demo_component__WEBPACK_IMPORTED_MODULE_25__["FlowDemoComponent"],
                _workflow_runtime_history_flow_history_flow_component__WEBPACK_IMPORTED_MODULE_26__["HistoryFlowComponent"],
                _workflow_runtime_wait_task_wait_task_component__WEBPACK_IMPORTED_MODULE_27__["WaitTaskComponent"],
                _workflow_runtime_will_detection_will_detection_component__WEBPACK_IMPORTED_MODULE_28__["WillDetectionComponent"],
                _workflow_runtime_flow_demo_flow_demo_over_flow_demo_over__WEBPACK_IMPORTED_MODULE_31__["FlowDemoOver"],
                _workflow_runtime_flow_demo_flow_history_flow_history__WEBPACK_IMPORTED_MODULE_32__["FlowHistory"],
                _workflow_runtime_history_flow_flows_history_flows_history__WEBPACK_IMPORTED_MODULE_33__["FlowsHistory"],
                _workflow_design_flow_design_flow_design_add_flow_design_add__WEBPACK_IMPORTED_MODULE_16__["FlowDesignAdd"],
                _workflow_design_flow_design_flow_design_look_flow_design_look__WEBPACK_IMPORTED_MODULE_17__["FlowDesignLook"],
                _workflow_design_flow_catalog_visit_control_flow_power_flow_power__WEBPACK_IMPORTED_MODULE_39__["FlowPower"],
                _workflow_runtime_already_work_already_work_history_already_work_history_component__WEBPACK_IMPORTED_MODULE_44__["AlreadyWorkHistoryComponent"],
                _workflow_runtime_wait_task_wait_task_history_wait_task_history_component__WEBPACK_IMPORTED_MODULE_45__["WaitTaskHistoryComponent"],
                _workflow_runtime_will_detection_will_detection_history_will_detection_history_component__WEBPACK_IMPORTED_MODULE_46__["WillDetectionHistoryComponent"],
                _temporayWorkFlow_temporayWorkFlow_component__WEBPACK_IMPORTED_MODULE_52__["TemporayWorkFlowComponent"] //临时
            ],
            providers: [
                _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_34__["WorkflowHttpService"]
            ]
        })
    ], WorkflowModule);
    return WorkflowModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/workflow.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/tzb/workflow/workflow.routing.ts ***!
  \********************************************************/
/*! exports provided: routes, WorkflowRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowRouting", function() { return WorkflowRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _workflow_design_workflow_design_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workflow-design/workflow-design.component */ "./src/app/pages/tzb/workflow/workflow-design/workflow-design.component.ts");
/* harmony import */ var _workflow_runtime_workflow_runtime_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workflow-runtime/workflow-runtime.component */ "./src/app/pages/tzb/workflow/workflow-runtime/workflow-runtime.component.ts");
/* harmony import */ var _workflow_design_flow_catalog_flow_catalog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workflow-design/flow-catalog/flow-catalog.component */ "./src/app/pages/tzb/workflow/workflow-design/flow-catalog/flow-catalog.component.ts");
/* harmony import */ var _workflow_design_flow_design_flow_design_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workflow-design/flow-design/flow-design.component */ "./src/app/pages/tzb/workflow/workflow-design/flow-design/flow-design.component.ts");
/* harmony import */ var _workflow_design_flow_variate_flow_variate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workflow-design/flow-variate/flow-variate.component */ "./src/app/pages/tzb/workflow/workflow-design/flow-variate/flow-variate.component.ts");
/* harmony import */ var _workflow_design_variate_preserve_variate_preserve_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workflow-design/variate-preserve/variate-preserve.component */ "./src/app/pages/tzb/workflow/workflow-design/variate-preserve/variate-preserve.component.ts");
/* harmony import */ var _workflow_design_flow_version_flow_version_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workflow-design/flow-version/flow-version.component */ "./src/app/pages/tzb/workflow/workflow-design/flow-version/flow-version.component.ts");
/* harmony import */ var _workflow_runtime_already_work_already_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./workflow-runtime/already-work/already-work.component */ "./src/app/pages/tzb/workflow/workflow-runtime/already-work/already-work.component.ts");
/* harmony import */ var _workflow_runtime_flow_demo_flow_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workflow-runtime/flow-demo/flow-demo.component */ "./src/app/pages/tzb/workflow/workflow-runtime/flow-demo/flow-demo.component.ts");
/* harmony import */ var _workflow_runtime_history_flow_history_flow_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workflow-runtime/history-flow/history-flow.component */ "./src/app/pages/tzb/workflow/workflow-runtime/history-flow/history-flow.component.ts");
/* harmony import */ var _workflow_runtime_wait_task_wait_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./workflow-runtime/wait-task/wait-task.component */ "./src/app/pages/tzb/workflow/workflow-runtime/wait-task/wait-task.component.ts");
/* harmony import */ var _workflow_runtime_will_detection_will_detection_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./workflow-runtime/will-detection/will-detection.component */ "./src/app/pages/tzb/workflow/workflow-runtime/will-detection/will-detection.component.ts");
/* harmony import */ var _workflow_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./workflow.component */ "./src/app/pages/tzb/workflow/workflow.component.ts");
/* harmony import */ var _temporayWorkFlow_temporayWorkFlow_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./temporayWorkFlow/temporayWorkFlow.component */ "./src/app/pages/tzb/workflow/temporayWorkFlow/temporayWorkFlow.component.ts");















var routes = [
    {
        path: '',
        component: _workflow_component__WEBPACK_IMPORTED_MODULE_13__["WorkflowComponent"],
        children: [
            {
                path: 'workflow-design',
                component: _workflow_design_workflow_design_component__WEBPACK_IMPORTED_MODULE_1__["WorkflowDesignComponent"],
                children: [
                    {
                        path: 'flow-catalog', component: _workflow_design_flow_catalog_flow_catalog_component__WEBPACK_IMPORTED_MODULE_3__["FlowCatalogComponent"]
                    },
                    {
                        path: 'flow-design', component: _workflow_design_flow_design_flow_design_component__WEBPACK_IMPORTED_MODULE_4__["FlowDesignComponent"]
                    },
                    {
                        path: 'flow-variate', component: _workflow_design_flow_variate_flow_variate_component__WEBPACK_IMPORTED_MODULE_5__["FlowVariateComponent"]
                    },
                    {
                        path: 'variate-preserve', component: _workflow_design_variate_preserve_variate_preserve_component__WEBPACK_IMPORTED_MODULE_6__["VariatePreserveComponent"]
                    },
                    {
                        path: 'flow-version', component: _workflow_design_flow_version_flow_version_component__WEBPACK_IMPORTED_MODULE_7__["FlowVersionComponent"]
                    }
                ]
            },
            {
                path: 'workflow-runtime',
                component: _workflow_runtime_workflow_runtime_component__WEBPACK_IMPORTED_MODULE_2__["WorkflowRuntimeComponent"],
                children: [
                    {
                        path: 'already-work', component: _workflow_runtime_already_work_already_work_component__WEBPACK_IMPORTED_MODULE_8__["AlreadyWorkComponent"]
                    },
                    {
                        path: 'flow-demo', component: _workflow_runtime_flow_demo_flow_demo_component__WEBPACK_IMPORTED_MODULE_9__["FlowDemoComponent"]
                    },
                    {
                        path: 'history-flow', component: _workflow_runtime_history_flow_history_flow_component__WEBPACK_IMPORTED_MODULE_10__["HistoryFlowComponent"]
                    },
                    {
                        path: 'wait-task', component: _workflow_runtime_wait_task_wait_task_component__WEBPACK_IMPORTED_MODULE_11__["WaitTaskComponent"]
                    },
                    {
                        path: 'will-detection', component: _workflow_runtime_will_detection_will_detection_component__WEBPACK_IMPORTED_MODULE_12__["WillDetectionComponent"]
                    }
                ]
            },
            { path: 'temporayWorkFlow', component: _temporayWorkFlow_temporayWorkFlow_component__WEBPACK_IMPORTED_MODULE_14__["TemporayWorkFlowComponent"] },
            { path: 'activiti-work-flow', loadChildren: './activiti-work-flow/activiti-work-flow.module#ActivitiWorkFlowModule' },
            { path: 'approvalParams-query', loadChildren: './approval-params-query/approval-params-query.module#ApprovalParamsQueryModule' }
        ]
    }
];
var WorkflowRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=workflow-workflow-module.js.map