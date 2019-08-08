(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-assignment-post-assignment-module"],{

/***/ "./src/app/pages/tzb/common/base-manage/post-assignment/add-moules-filer/add-moules-filer.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/post-assignment/add-moules-filer/add-moules-filer.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 box\">\r\n    <strong class=\"down-div\">批量导入</strong>\r\n    <br/>\r\n    <!-- accept=\".xls\" invalidFileTypeMessageDetail=\"只能上传Excel\" invalidFileTypeMessageSummary=\"\"-->\r\n    <p-fileUpload chooseLabel=\"浏览\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"load($event)\"\r\n        multiple=\"multiple\">\r\n    </p-fileUpload>\r\n    <div *ngIf=\"files.length>0\">\r\n        <span *ngFor=\"let item of files\">{{item.name}}</span>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 box\">\r\n    <strong class=\"down-div\">模板下载</strong>\r\n    <br/>\r\n    <a class=\"down-a\" href=\"{{DOWNLOAD}}/?fileUrl=/pmsdata/xwzh/&fileName=tellerOrgPostFile.xlsx\">下载模板</a>\r\n</div>\r\n<div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"确定\" (click)=\"query()\"></button>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/post-assignment/add-moules-filer/add-moules-filer.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/post-assignment/add-moules-filer/add-moules-filer.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  font-weight: bold; }\n\n.down-div {\n  display: inline-block;\n  padding-bottom: 9px; }\n\n.down-a {\n  display: block;\n  width: 81px;\n  padding: 5px 8px;\n  background-color: #19b0c8;\n  margin: 9px 0px 15px;\n  text-align: center;\n  color: #fff;\n  border-radius: 3px; }\n\nlabel {\n  width: 35%;\n  display: inline-block;\n  text-align: right; }\n\n.btn {\n  text-align: center;\n  margin: 30px 0 0; }\n\n.box {\n  height: 160px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9wb3N0LWFzc2lnbm1lbnQvYWRkLW1vdWxlcy1maWxlci9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFxwb3N0LWFzc2lnbm1lbnRcXGFkZC1tb3VsZXMtZmlsZXJcXGFkZC1tb3VsZXMtZmlsZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9wb3N0LWFzc2lnbm1lbnQvYWRkLW1vdWxlcy1maWxlci9hZGQtbW91bGVzLWZpbGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmRvd24tZGl2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctYm90dG9tOiA5cHg7XHJcbn1cclxuXHJcbi5kb3duLWEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogODFweDtcclxuICAgIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG4gICAgbWFyZ2luOiA5cHggMHB4IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMzBweCAwIDA7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gICAgaGVpZ2h0OiAxNjBweCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/post-assignment/add-moules-filer/add-moules-filer.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/post-assignment/add-moules-filer/add-moules-filer.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AddMoulesFilerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMoulesFilerComponent", function() { return AddMoulesFilerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddMoulesFilerComponent = /** @class */ (function () {
    function AddMoulesFilerComponent(commonHttpService, commfunc) {
        this.commonHttpService = commonHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileList = []; //上传文件列表
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_COMMON_DOWNLOAD"]; //下载
        this.files = [];
    }
    AddMoulesFilerComponent.prototype.ngOnInit = function () {
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_COMMON_UPLOAD"] + '/?path=upload';
    };
    AddMoulesFilerComponent.prototype.load = function (event) {
        var _this = this;
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.files = [];
            this.files.push(file);
        }
        if (event.xhr.response) {
            this.fileList = JSON.parse(event.xhr.response);
            if (this.fileList.hasOwnProperty('errorMsg')) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: this.fileList.errorMsg }];
            }
        }
        if (this.fileList.length > 0) {
            var param = {};
            param = {
                localPath: this.fileList[0].filePath,
                fileName: this.fileList[0].fileName,
            };
            this.commonHttpService.uploadPostInfo(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                }
                else {
                    data.returnCode.code ? data.returnCode.code : '调用服务失败';
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            });
        }
    };
    //确认
    AddMoulesFilerComponent.prototype.query = function () {
        var parems = {};
        this.outValue.emit(parems);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddMoulesFilerComponent.prototype, "outValue", void 0);
    AddMoulesFilerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-moules-filer',
            template: __webpack_require__(/*! ./add-moules-filer.component.html */ "./src/app/pages/tzb/common/base-manage/post-assignment/add-moules-filer/add-moules-filer.component.html"),
            styles: [__webpack_require__(/*! ./add-moules-filer.component.scss */ "./src/app/pages/tzb/common/base-manage/post-assignment/add-moules-filer/add-moules-filer.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_1__["CommonHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], AddMoulesFilerComponent);
    return AddMoulesFilerComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/post-assignment/add-power-window/add-power-window.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/post-assignment/add-power-window/add-power-window.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 box\" >\r\n  <div class=\"ui-g-12\" id=\"orgAddId\">\r\n    <label>机构编号：</label>\r\n       <p-dropdown [options]=\"list1\" (keyup)=\"inpquery($event)\" [(ngModel)]=\"orgId\" placeholder=\"请选择或者输入\" filter=\"filter\" (onChange)=\"doChose($event)\"></p-dropdown>\r\n  </div>\r\n  <div class=\"ui-g-12\" id=\"orgAddName\">\r\n      <label>机构名称：</label>\r\n      <!-- <input type=\"text\" pInputText [(ngModel)]=\"postAssignmentBean.tellerName\"> -->\r\n      <p-dropdown  [options]=\"list\" (keyup)=\"inpquery($event)\" [(ngModel)]=\"orgName\" placeholder=\"请选择或者输入\" filter=\"filter\" (onChange)=\"doChose1($event)\"></p-dropdown>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 btn\" >\r\n    <button pButton type=\"button\" label=\"确定\" (click)=\"query()\"></button>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/post-assignment/add-power-window/add-power-window.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/post-assignment/add-power-window/add-power-window.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  width: 35%;\n  display: inline-block;\n  text-align: right; }\n\n.btn {\n  text-align: center;\n  margin: 30px 0 0; }\n\n.box {\n  height: 260px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9wb3N0LWFzc2lnbm1lbnQvYWRkLXBvd2VyLXdpbmRvdy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFxwb3N0LWFzc2lnbm1lbnRcXGFkZC1wb3dlci13aW5kb3dcXGFkZC1wb3dlci13aW5kb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jb21tb24vYmFzZS1tYW5hZ2UvcG9zdC1hc3NpZ25tZW50L2FkZC1wb3dlci13aW5kb3cvYWRkLXBvd2VyLXdpbmRvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5sYWJlbHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAzMHB4IDAgMDtcclxufVxyXG4uYm94e1xyXG4gICAgaGVpZ2h0OiAyNjBweCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/post-assignment/add-power-window/add-power-window.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/post-assignment/add-power-window/add-power-window.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AddPowerWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPowerWindowComponent", function() { return AddPowerWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_post_assignment_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bean/post-assignment.bean */ "./src/app/pages/tzb/common/base-manage/post-assignment/bean/post-assignment.bean.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
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




var AddPowerWindowComponent = /** @class */ (function () {
    function AddPowerWindowComponent(commonHttpService, commfunc) {
        this.commonHttpService = commonHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.postAssignmentBean = new _bean_post_assignment_bean__WEBPACK_IMPORTED_MODULE_1__["PostAssignmentBean"]();
        this.msgs = []; //提示信息
        this.list = []; //机构模糊查询的下拉框
        this.list1 = []; //机构模糊查询的下拉框
        this.inpFlag = true;
    }
    AddPowerWindowComponent.prototype.ngOnInit = function () {
        this.orgquery('', '');
    };
    //机构查询
    AddPowerWindowComponent.prototype.inpquery = function ($event) {
        var _this = this;
        if (this.inpFlag) {
            this.inpFlag = false;
            setTimeout(function () {
                _this.inpFlag = true;
                var orgAddId = document.getElementById('orgAddId').getElementsByTagName('input')[1].value;
                var orgAddName = document.getElementById('orgAddName').getElementsByTagName('input')[1].value;
                // this.orgquery($event.path[0].value)
                _this.orgquery(orgAddId, orgAddName);
            }, 1000);
        }
    };
    AddPowerWindowComponent.prototype.orgquery = function (orgId, orgName) {
        var _this = this;
        var param = {
            orgId: orgId,
            orgName: orgName,
            pageSize: '30'
        };
        this.commonHttpService.queryVagueOrgListLevel(param).subscribe(function (data) {
            if (data.orgList) {
                _this.list = _this.commfunc.listToLabelvalue(data.orgList, 'orgName', 'orgId');
                _this.list1 = _this.commfunc.listToLabelvalue(data.orgList, 'orgId', 'orgName');
            }
        });
    };
    //onchange事件
    AddPowerWindowComponent.prototype.doChose = function (event) {
        this.orgName = this.returnValue(event.value, 'label', 'value');
    };
    AddPowerWindowComponent.prototype.doChose1 = function (event) {
        this.orgId = this.returnValue(event.value, 'value', 'label');
    };
    /**
  * 转换值
  * @param param  值
  * @param colum  字段
  */
    AddPowerWindowComponent.prototype.returnValue = function (param, colum, valueColum) {
        var value = "";
        this.list.forEach(function (element) {
            if (element[colum] === param) {
                value = element[valueColum];
            }
        });
        return value;
    };
    //加入权限确定机构
    AddPowerWindowComponent.prototype.query = function () {
        var _this = this;
        this.postAssignmentBean.orgId = this.orgName;
        this.postAssignmentBean.orgName = this.orgId;
        this.commonHttpService.queryOrgByCombConditions(this.postAssignmentBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.returnList;
                if (data.returnList) {
                    _this.tableData.forEach(function (element) {
                        _this.postAssignmentBean.orgId = element.orgId,
                            _this.postAssignmentBean.orgName = element.orgName;
                    });
                }
                _this.outValue.emit(_this.postAssignmentBean);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '查询机构成功' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddPowerWindowComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddPowerWindowComponent.prototype, "inValue", void 0);
    AddPowerWindowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-power-window',
            template: __webpack_require__(/*! ./add-power-window.component.html */ "./src/app/pages/tzb/common/base-manage/post-assignment/add-power-window/add-power-window.component.html"),
            styles: [__webpack_require__(/*! ./add-power-window.component.scss */ "./src/app/pages/tzb/common/base-manage/post-assignment/add-power-window/add-power-window.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], AddPowerWindowComponent);
    return AddPowerWindowComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/post-assignment/bean/post-assignment.bean.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/post-assignment/bean/post-assignment.bean.ts ***!
  \*******************************************************************************************/
/*! exports provided: PostAssignmentBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAssignmentBean", function() { return PostAssignmentBean; });
var PostAssignmentBean = /** @class */ (function () {
    function PostAssignmentBean() {
    }
    return PostAssignmentBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/post-assignment/bean/post-orgPosition.bean.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/post-assignment/bean/post-orgPosition.bean.ts ***!
  \********************************************************************************************/
/*! exports provided: PostOrgPositionBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostOrgPositionBean", function() { return PostOrgPositionBean; });
var PostOrgPositionBean = /** @class */ (function () {
    function PostOrgPositionBean() {
    }
    return PostOrgPositionBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/post-assignment/bean/postMember.bean.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/post-assignment/bean/postMember.bean.ts ***!
  \**************************************************************************************/
/*! exports provided: PostMemberBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostMemberBean", function() { return PostMemberBean; });
var PostMemberBean = /** @class */ (function () {
    function PostMemberBean() {
    }
    return PostMemberBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/post-assignment/post-assignment.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/post-assignment/post-assignment.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"precredit\"></header-title>\r\n  <!-- 机构选择 -->\r\n  <div class=\"ui-g-4\">\r\n    <!-- <div class=\"ui-g-12\"> -->\r\n    <!-- <b>机构选择</b> -->\r\n    <!-- <p-dropdown [options]=\"legalFlag\" [(ngModel)]=\"postAssignmentBean.legalFlag\" (onChange)='choceLegalFlag()'></p-dropdown> -->\r\n    <!-- </div> -->\r\n    <div class=\"ui-g-12\">\r\n      <input pInputText type=\"text\" [(ngModel)]=\"postAssignmentBean.orgName\">\r\n      <button pButton type=\"button\" label=\"机构定位\" (click)=\"markPosition()\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" (click)=\"startPosition()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12\">\r\n          <div id=\"location\" style='height:440px;width:100%;overflow:scroll;position:relative' class=\"ui-g-12\">\r\n            <tree-directive selectedMark={{choiceOrgName}} tree-value=\"{{treeList}}\" (treeClick)=\"treeClick($event)\" tree-expan='{{aa}}'\r\n              tree-select-status=\"false\"></tree-directive>\r\n          </div>\r\n          <!-- <p-tree value=\"{{test}}\"></p-tree> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- 机构柜员 机构岗位 -->\r\n  <!-- 机构柜员 -->\r\n  <div class=\"ui-g-4 module\" *ngIf=\"queryQuick\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-12\">\r\n        <b>机构柜员</b>\r\n        <!-- <input pInputText type=\"text\"   [(ngModel)]=\"orgId\" placeholder=\"当前操作机构号\"> -->\r\n        <label style='color:orange' *ngIf=\"orgName\">当前操作机构:</label>\r\n        <span>{{orgName}}</span>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12\">\r\n          <button pButton type=\"button\" label=\"快速查询\" (click)=\"quickClick()\" *ngIf=\"permissionCheck('SID02059_P0145')\"></button>\r\n          <button pButton type=\"button\" label=\"加入权限\" (click)=\"addPower1()\" *ngIf=\"permissionCheck('SID02059_P0146')\"></button>\r\n          <button pButton type=\"button\" label=\"删除权限\" (click)=\"deletePower1()\" *ngIf=\"permissionCheck('SID02059_P0147')\"></button>\r\n          <!-- <button pButton type=\"button\" label=\"柜员同步\" (click)=\"followMe()\" *ngIf=\"permissionCheck('SID02060_P0149')\"></button> -->\r\n          <button pButton type=\"button\" label=\"批量导入\" (click)=\"addmudels()\"  *ngIf=\"permissionCheck('SID02059_P0149')\"></button>\r\n        </div>\r\n        <div class=\"ui-g-12 base-table\">\r\n          <p-dataTable [value]=\"tableData\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n            <p-column header=\"选择\" field=\"number\" [style]=\"{'width':'100px'}\">\r\n              <ng-template let-ri=\"rowIndex\" let-col='rowData' pTemplate=\"body\">\r\n                <p-radioButton name=\"group1\" [value]=\"col.tellerId\" [(ngModel)]=\"checkValue\" (onClick)=\"choicePeople(col)\"></p-radioButton>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"tellerId\" header=\"柜员编号\"></p-column>\r\n            <p-column field=\"tellerName\" header=\"柜员名称\"></p-column>\r\n          </p-dataTable>\r\n          <p-paginator rows=\"{{postMemberBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- 快速查询显示机构人员岗位显示 -->\r\n  <div class=\"ui-g-4 module\" *ngIf=\"queryQuick1\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-12\">\r\n        <b>机构柜员</b>\r\n        <label style='color:orange'>当前操作机构:</label>\r\n        <span *ngIf=\"orgName\">{{orgName}}</span>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12\">\r\n          <button pButton type=\"button\" label=\"加入权限\" (click)=\"addPower()\"></button>\r\n          <button pButton type=\"button\" label=\"删除权限\" (click)=\"deletePower()\"></button>\r\n          <button pButton type=\"button\" label=\"柜员同步\" (click)=\"followMe()\" *ngIf=\"permissionCheck('SID02059_P0150')\"></button>\r\n          <button pButton type=\"button\" label=\"返回\" (click)=\"goBack()\"></button>\r\n        </div>\r\n        <div class=\"ui-g-12 base-table\">\r\n          <p-dataTable [value]=\"tableDataWithParty\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tabMesg\">\r\n            <p-column header=\"选择\" field=\"number\" [style]=\"{'width':'100px'}\">\r\n              <ng-template let-ri=\"rowIndex\" let-col='rowData' pTemplate=\"body\">\r\n                <p-radioButton name=\"group1\" [value]=\"col.partyId\" [(ngModel)]=\"checkValue\" (onClick)=\"choicePeople1(col)\"></p-radioButton>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"userLoginId\" header=\"柜员编号\"></p-column>\r\n            <p-column field=\"userName\" header=\"柜员名称\"></p-column>\r\n            <p-column field=\"partyId\" header=\"机构编号\"></p-column>\r\n            <p-column field=\"partyName\" header=\"机构名称\"></p-column>\r\n          </p-dataTable>\r\n          <p-paginator rows=\"{{postAssignmentBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate1($event)\"></p-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- 机构岗位 -->\r\n  <div class=\"ui-g-4 module\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-12\">\r\n        <b>岗位列表</b>\r\n      </div>\r\n      <div class=\"ui-g-12 postassign\">\r\n        <div class=\"ui-g-5\">\r\n          <span>岗位编号：</span>\r\n          <input pInputText type=\"text\" [(ngModel)]=\"postAssignmentBean.postId\">\r\n        </div>\r\n        <div class=\"ui-g-5\">\r\n          <span>岗位名称：</span>\r\n          <input pInputText type=\"text\" [(ngModel)]=\"postAssignmentBean.postName\">\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\" *ngIf=\"permissionCheck('SID02059_P0148')\">\r\n        <button pButton type=\"button\" label=\"保存\" (click)=\"savePower()\"></button>\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"postQuery()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n      </div>\r\n      <div class=\"ui-g-12 base-table\">\r\n        <div class=\"ui-g-12\" style='height:460px;width:100%;overflow:scroll'>\r\n          <p-tree [value]=\"positionTableData\" [emptyMessage]=\"tabMesg\" class=\"treeName\" #expandingTree>\r\n            <ng-template let-node pTemplate=\"default\">\r\n              <p-checkbox name=\"group1\" *ngIf=\"node.postId !== ''\" value={{node.postId}} (onChange)=\"postChange(node,$event,node.postId)\" label={{node.postLabel}} [(ngModel)]=\"checkValue1\"></p-checkbox>\r\n              <span *ngIf=\"node.postId == ''\">{{node.label}}</span>\r\n            </ng-template>\r\n          </p-tree>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- http://localhost:4200/#/pages/tzb/back-manage/base-manage/post-assignment -->\r\n</div>\r\n\r\n<!-- 弹出框-->\r\n<p-dialog [(visible)]=\"display\" *ngIf=\"display\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div>\r\n    <app-quick-query-message *ngIf=\"showModel=='1'\" [inValue]=\"inVule\" (outValue)=\"quickQueryCall($event)\"></app-quick-query-message>\r\n    <app-add-power-window *ngIf=\"showModel=='2'\" (outValue)=\"addPowerCall($event)\" [inValue]=\"addPowerInVule\"></app-add-power-window>\r\n    <add-moules-filer *ngIf=\"showModel=='3'\" (outValue)=\"addfilerCall($event)\"></add-moules-filer>\r\n    <app-user-in-step *ngIf=\"showModel=='4'\" (outValue)=\"addCall($event)\"></app-user-in-step>\r\n\r\n  </div>\r\n</p-dialog>\r\n\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/post-assignment/post-assignment.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/post-assignment/post-assignment.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 30% !important;\n  margin-left: 10.5% !important; }\n\n.postassign input {\n  margin-left: 0 !important; }\n\n:host /deep/ .ui-widget-content {\n  width: 100%; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: auto !important; }\n\n:host/deep/.ui-tree.ui-tree-container {\n  overflow: visible; }\n\n:host /deep/ .ui-tree .ui-treenode-icon {\n  width: 0px; }\n\n:host /deep/ .treeName .fa-caret-down:before {\n  content: \"remove\";\n  border: 1px solid #19b0c8;\n  font-size: 14px;\n  color: #666666;\n  position: absolute;\n  top: 7px;\n  left: 8px; }\n\n:host /deep/ .fa-caret-right:before {\n  content: \"add\";\n  color: #666666;\n  border: 1px solid #19b0c8;\n  font-size: 14px;\n  position: absolute;\n  top: 7px;\n  left: 8px; }\n\n.isred {\n  background-color: red; }\n\n:host /deep/ .treeName .ui-treenode-selectable .fa-caret-down:before {\n  content: \"remove\";\n  border: 1px solid #19b0c8;\n  font-size: 14px;\n  color: #666666;\n  position: absolute;\n  top: 7px;\n  left: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9wb3N0LWFzc2lnbm1lbnQvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY29tbW9uXFxiYXNlLW1hbmFnZVxccG9zdC1hc3NpZ25tZW50XFxwb3N0LWFzc2lnbm1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDckIsNkJBQTZCLEVBQUE7O0FBR2pDO0VBRVEseUJBQXlCLEVBQUE7O0FBSWpDO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFHYjtFQUNJLGNBQWM7RUFDZCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFHYjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jb21tb24vYmFzZS1tYW5hZ2UvcG9zdC1hc3NpZ25tZW50L3Bvc3QtYXNzaWdubWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMC41JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucG9zdGFzc2lnbiB7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC51aS13aWRnZXQtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTsgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8udWktdHJlZS51aS10cmVlLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvLnVpLXRyZWUgLnVpLXRyZWVub2RlLWljb24ge1xyXG4gICAgd2lkdGg6IDBweDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC50cmVlTmFtZSAuZmEtY2FyZXQtZG93bjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJyZW1vdmVcIjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxOWIwYzg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogN3B4O1xyXG4gICAgbGVmdDogOHB4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmZhLWNhcmV0LXJpZ2h0OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcImFkZFwiO1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTliMGM4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3cHg7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5pc3JlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAudHJlZU5hbWUgLnVpLXRyZWVub2RlLXNlbGVjdGFibGUgLmZhLWNhcmV0LWRvd246YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwicmVtb3ZlXCI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTliMGM4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDdweDtcclxuICAgIGxlZnQ6IDhweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/post-assignment/post-assignment.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/post-assignment/post-assignment.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PostAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAssignmentComponent", function() { return PostAssignmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_post_assignment_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/post-assignment.bean */ "./src/app/pages/tzb/common/base-manage/post-assignment/bean/post-assignment.bean.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var _bean_postMember_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/postMember.bean */ "./src/app/pages/tzb/common/base-manage/post-assignment/bean/postMember.bean.ts");
/* harmony import */ var _bean_post_orgPosition_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/post-orgPosition.bean */ "./src/app/pages/tzb/common/base-manage/post-assignment/bean/post-orgPosition.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_http_uisftech_common_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/http/uisftech-common-http.service */ "./src/app/@uisftech/common/http/uisftech-common-http.service.ts");
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



// import { LegalFlag, OperatingLevel,  OrgStatus } from '../../constant/common.codeValue';






var PostAssignmentComponent = /** @class */ (function () {
    function PostAssignmentComponent(commonHttpService, commfunc, uisftechCommonHttpService) {
        var _this = this;
        this.commonHttpService = commonHttpService;
        this.commfunc = commfunc;
        this.uisftechCommonHttpService = uisftechCommonHttpService;
        this.postList = [];
        this.postLists = [];
        this.precredit = '分配岗位'; //页面左上角标题
        this.postAssignmentBean = new _bean_post_assignment_bean__WEBPACK_IMPORTED_MODULE_1__["PostAssignmentBean"]();
        this.postMemberBean = new _bean_postMember_bean__WEBPACK_IMPORTED_MODULE_3__["PostMemberBean"](); //机构人员
        this.postOrgPositionBean = new _bean_post_orgPosition_bean__WEBPACK_IMPORTED_MODULE_4__["PostOrgPositionBean"](); //机构岗位
        this.msgs = []; //提示信息
        this.test = [];
        this.treeList = '';
        this.treeList2 = ""; //台州银行
        this.treeList1 = ''; //村镇银行
        this.legalFlag = []; //机构标识
        this.display = false; //模态框是否显示
        this.headerTitle = "快速查询"; //模态框的标题
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"]; // 表格中无数据显示的信息
        this.list = {
            orgId: "",
            superiorManageOrg: "",
            orgName: "",
            orgType: "",
            operatingLevel: "",
            orgStatus: "",
            roleType: "",
            legalFlag: ""
        };
        this.checkValue2 = [];
        this.selectedHero = this.peopleArr;
        this.postIdList = []; //岗位勾选组成的数组
        this.checkValue1 = []; //岗位列表初始化清空
        this.aa = false;
        this.createDate = new Date();
        this.codeValues(); //调用方法，获取全部码值
        // this.legalFlag = this.code['LegalFlag'];
        this.creat_user = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        this.userName = JSON.parse(this.commfunc.getSessionDataCH('chName')).userName;
        console.log(this.createDate);
        var data = {
            tellerId: this.creat_user,
        };
        this.uisftechCommonHttpService.searchMaxPostOrgIdByUserId(data).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.org = data.orgId;
                var param = { orgId: _this.org };
                _this.queryCzBank(param);
                var datas = {
                    orgId: _this.org,
                    relationshipType: '0',
                };
                _this.uisftechCommonHttpService.queryOrgByOrgIdAndRelationship(datas).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.orgName = data.orgList[0].orgName;
                        // this.postMemberBean.orgId = this.org;
                        // this.legalFlag = [
                        //   { label: '请选择', value: '' },
                        //   { label: this.orgName, value: this.org },
                        // ];
                    }
                });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        });
    }
    PostAssignmentComponent.prototype.ngOnInit = function () {
        this.postAssignmentBean.pageNum = '1';
        this.postAssignmentBean.pageSize = '10';
        this.postOrgPositionBean.pageNum = 1;
        this.postOrgPositionBean.pageSize = 10;
        this.postMemberBean.pageNum = '1';
        this.postMemberBean.pageSize = '10';
        this.queryQuick = '1';
        this.queryQuick1 = '';
        this.postAssignmentBean.legalFlag = '';
    };
    //码值
    PostAssignmentComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    /**
     * 机构树相关服务
     */
    //选择银行标识
    // choceLegalFlag() {
    // if (this.postAssignmentBean.legalFlag == '1') {
    //   let param = { orgId: 'T0000' }
    //   this.queryCzBank(param)
    // }
    // if (this.postAssignmentBean.legalFlag== '2') {
    //   let param = { orgId: 'C0000' }
    //   this.queryCzBank(param)
    // }
    //   if (this.postAssignmentBean.legalFlag) {
    //     let param = { orgId: this.org }
    //     this.queryCzBank(param)
    //   }
    // }
    PostAssignmentComponent.prototype.forMenuList = function (param) {
        var _this = this;
        var list = [];
        if (!param) {
            return;
        }
        param.forEach(function (element) {
            var el = { label: element.orgName, data: element.orgId, children: [] };
            if (_this.checkMenuList(element)) {
                el['expandedIcon'] = "fa-folder-open";
                el['collapsedIcon'] = "fa-folder";
                el['icon'] = "fa-file-video-o";
                el['children'] = _this.forMenuList(element['subOrg']);
            }
            list.push(el);
        });
        return list;
    };
    //菜单循环
    PostAssignmentComponent.prototype.checkMenuList = function (param) {
        if (param['subOrg'] && param['subOrg'].length > 0) {
            return true;
        }
        return false;
    };
    //查询台州银行或村镇银行
    PostAssignmentComponent.prototype.queryCzBank = function (param) {
        var _this = this;
        this.commonHttpService.queryOrgTreeList(param).subscribe(function (data) {
            _this.treeList1 = JSON.stringify(_this.forMenuList(data.orgList));
            _this.treeList = _this.treeList1;
            if (_this.treeList || _this.treeList1) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '查询机构成功' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        });
    };
    //点击树中机构
    PostAssignmentComponent.prototype.treeClick = function (event) {
        var _this = this;
        this.checkValue1 = [];
        this.checkValues = [];
        this.postIdList = [];
        this.postList = [];
        this.postLists = [];
        this.postOrgPositionBean.userLoginId = '';
        this.postuserName = '';
        this.postAssignmentBean = new _bean_post_assignment_bean__WEBPACK_IMPORTED_MODULE_1__["PostAssignmentBean"]();
        this.postAssignmentBean.orgId = event.data; //查柜员用
        this.postMemberBean.orgId = event.data;
        this.firstOrgName = event.label;
        this.firstOrgId = event.data;
        this.orgName = event.label;
        this.partyId = event.data;
        this.partyName = event.label;
        this.goBackPartyId = event.data;
        this.goBackPartyName = event.label;
        this.postMemberBean.pageNum = '1';
        this.postMemberBean.pageSize = '10';
        //点击某机构获取id后传给下面方法调取查询柜员的服务
        this.commonHttpService.queryTellerByCombConditions(this.postMemberBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.tellerList;
                for (var i = 0; i < data.tellerList.length; i++) {
                    // for (let j=0;j< this.tableDataWithParty.length;j++) {
                    data.tellerList[i].userLoginId = data.tellerList[i].tellerId;
                    data.tellerList[i].userName = data.tellerList[i].tellerName;
                    data.tellerList[i].partyId = data.tellerList[i].orgId;
                    data.tellerList[i].partyName = data.tellerList[i].orgName;
                    // arr.push(this.tableDataWithParty[j]);
                    // }
                }
                _this.tableDataWithParty = data.tellerList;
                _this.total = data.total;
                _this.postAssignmentBean.pageSize = _this.postMemberBean.pageSize;
                _this.postAssignmentBean.pageNum = _this.postMemberBean.pageNum;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '查询柜员成功' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
        //如果第二次点击机构树上的机构，需要去清空岗位
        this.positionTableData = [];
    };
    //机构定位
    PostAssignmentComponent.prototype.markPosition = function () {
        var _this = this;
        this.choiceOrgName = this.postAssignmentBean.orgName;
        this.aa = true;
        setTimeout(function () {
            _this.position(_this.choiceOrgName);
        }, 10);
    };
    //定位
    PostAssignmentComponent.prototype.position = function (a) {
        var location = document.getElementById('location');
        var ele = location.getElementsByTagName('span');
        var arr = [];
        for (var i in ele) {
            // if (ele[i].innerText.match(a) != null) {
            //   arr.push(ele[i]);
            //   if (arr.length >= 3) {
            //     break;
            //   }
            // }
            if (ele[i].innerText.match(a) != null) {
                arr.push(ele[i]);
                break;
            }
        }
        var top = arr[0].offsetTop;
        var parent = arr[0].offsetParent;
        while (parent != null) {
            top += parent.offsetTop;
            parent = parent.offsetParent;
            location.scrollTop = top - 400;
        }
    };
    //重置
    PostAssignmentComponent.prototype.startPosition = function () {
        this.postAssignmentBean.orgName = "";
        // this.markPosition();
        this.aa = false;
    };
    /**
     *
     * 机构柜员相关操作及方法
     */
    PostAssignmentComponent.prototype.postChange = function (node, event, id) {
        if (event) {
            this.postIdList.push(node.postId);
            this.postList.push({ postId: node.postId, postName: node.postName });
        }
        else {
            var indexof = this.postIdList.indexOf(id);
            indexof != -1 ? this.postIdList.splice(indexof, 1) : this.postIdList;
            for (var i = 0; i < this.postList.length; i++) {
                if (this.postList[i].postId == id) {
                    this.postList.splice(i, 1);
                    break;
                }
            }
        }
        console.log(this.postList);
    };
    //勾选柜员查岗位（初次查询界面 已更新）
    PostAssignmentComponent.prototype.choicePeople = function (col) {
        var _this = this;
        this.checkValue1 = [];
        this.checkValues = [];
        this.postIdList = [];
        this.postList = [];
        this.postLists = [];
        this.postOrgPositionBean.partyId = col.orgId;
        this.postOrgPositionBean.userLoginId = col.tellerId;
        this.postuserName = col.tellerName;
        this.peopleMessage = col;
        this.orgName = this.firstOrgName;
        this.commonHttpService.queryPostBytellerIdAndOrgIdLevel(this.postOrgPositionBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.postInfoListForYY.length) {
                    for (var _i = 0, _a = data.postInfoListForYY; _i < _a.length; _i++) {
                        var i = _a[_i];
                        if (i.exitFlag == '0') {
                            _this.checkValue1.push(i.postId);
                            console.log(_this.checkValue1);
                            _this.postIdList.push(i.postId);
                            _this.postList.push({ postId: i.postId, postName: i.postName });
                        }
                    }
                    _this.checkValues = lodash__WEBPACK_IMPORTED_MODULE_8__["clone"](_this.checkValue1);
                    _this.postLists = lodash__WEBPACK_IMPORTED_MODULE_8__["clone"](_this.postList);
                }
                var params = [
                    {
                        postId: "",
                        postName: "当前岗位",
                        children: data.postInfoListForYY,
                    },
                    {
                        postId: "",
                        postName: "总行层级岗位",
                        children: data.postInfoListForJt,
                    }, {
                        postId: "",
                        postName: "分行及支行层级岗位",
                        children: data.postInfoListForFh,
                    },
                ];
                _this.positionTableData = _this.toTree(params);
                // this.isUnfold=true;
                _this.positionTableData.forEach(function (node) {
                    _this.expandedClick(node, true); //默认岗位的树是展开的
                });
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '查询机构岗位成功' });
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
    //勾选柜员查岗位（第二次查询界面 ）
    PostAssignmentComponent.prototype.choicePeople1 = function (col) {
        var _this = this;
        this.checkValue1 = [];
        this.checkValues = [];
        this.postList = [];
        this.postLists = [];
        this.postIdList = [];
        this.postOrgPositionBean.partyId = col.partyId;
        this.postOrgPositionBean.userLoginId = col.userLoginId;
        this.postuserName = col.userName;
        this.peopleMessage = col;
        this.orgName = this.firstOrgName;
        this.commonHttpService.queryPostBytellerIdAndOrgIdLevel(this.postOrgPositionBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                for (var _i = 0, _a = data.postInfoListForYY; _i < _a.length; _i++) {
                    var i = _a[_i];
                    if (i.exitFlag == '0') {
                        _this.checkValue1.push(i.postId);
                        _this.postIdList.push(i.postId);
                        _this.postList.push({ postId: i.postId, postName: i.postName });
                    }
                }
                _this.checkValues = lodash__WEBPACK_IMPORTED_MODULE_8__["clone"](_this.checkValue1);
                _this.postLists = lodash__WEBPACK_IMPORTED_MODULE_8__["clone"](_this.postList);
                var params = [
                    {
                        postId: "",
                        postName: "当前岗位",
                        children: data.postInfoListForYY,
                    }, {
                        postId: "",
                        postName: "总行层级岗位",
                        children: data.postInfoListForJt,
                    }, {
                        postId: "",
                        postName: "分行及支行层级岗位",
                        children: data.postInfoListForFh,
                    },
                ];
                _this.positionTableData = _this.toTree(params);
                // this.isUnfold=true;
                _this.positionTableData.forEach(function (node) {
                    _this.expandedClick(node, true); //默认岗位的树是展开的
                });
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '查询机构岗位成功' });
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
    //岗位列表查询
    PostAssignmentComponent.prototype.postQuery = function () {
        var _this = this;
        var param = {
            postId: this.postAssignmentBean.postId,
            postName: this.postAssignmentBean.postName,
            pageSize: "999999",
        };
        this.commonHttpService.queryPostByIdAndLevel(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var params = [
                    {
                        postId: "",
                        postName: "总行层级岗位",
                        children: data.postInfoListForJt,
                    }, {
                        postId: "",
                        postName: "分行及支行层级岗位",
                        children: data.postInfoListForFh,
                    },
                ];
                _this.positionTableData = _this.toTree(params);
                // this.isUnfold=true;
                _this.positionTableData.forEach(function (node) {
                    _this.expandedClick(node, true); //默认岗位的树是展开的
                });
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '查询机构岗位成功' });
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
    //岗位列表默认展开
    PostAssignmentComponent.prototype.expandedClick = function (node, isUnfold) {
        var _this = this;
        node.expanded = isUnfold;
        if (node.children) {
            node.children.forEach(function (childNode) {
                _this.expandedClick(childNode, isUnfold);
            });
        }
    };
    //数聚树数据整理
    PostAssignmentComponent.prototype.toTree = function (data) {
        var _this = this;
        if (data) {
            data.forEach(function (item) {
                item['label'] = item['postName'];
                item['postId'] = item['postId'];
                item['postLabel'] = item['postId'] + "_" + item['postName'];
                if (item['children']) {
                    item['children'] = _this.toTree(item['children']);
                }
                ;
            });
            return data;
        }
    };
    //重置
    PostAssignmentComponent.prototype.reset = function () {
        this.postAssignmentBean.postId = "";
        this.postAssignmentBean.postName = "";
    };
    //根据机构查柜员
    PostAssignmentComponent.prototype.queryPeopleById = function () {
        var _this = this;
        this.commonHttpService.queryTellerByCombConditions(this.postMemberBean).subscribe(function (data) {
            if (data.tellerList) {
                _this.peopleList = _this.commfunc.listToLabelvalue(data.tellerList, 'tellerName', 'tellerId');
            }
            if (data.returnCode.code == 'success') {
                _this.tableData = data.tellerList;
                _this.total = data.total;
                var arrPeople = [];
                for (var _i = 0, _a = _this.tableData; _i < _a.length; _i++) {
                    var i = _a[_i];
                    var arrInfo = i.tellerId + "    " + i.tellerName;
                    arrPeople.push(arrInfo);
                }
                _this.peopleArr = arrPeople;
                _this.total = data.total;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '查询柜员成功' });
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
    //快速查询
    PostAssignmentComponent.prototype.quickClick = function () {
        this.headerTitle = '快速查询';
        this.display = true;
        this.showModel = 1;
        this.inVule = { label: this.orgName, value: this.postMemberBean.orgId };
    };
    //快速查询回调
    PostAssignmentComponent.prototype.quickQueryCall = function (event) {
        this.display = event.a;
        this.postAssignmentBean = event.b;
        // this.tableDataWithParty = event.a;
        // this.total = event.b;
        this.positionTableData = [];
        this.queryQuick1 = '1';
        this.queryQuick = '';
        // this.checkValue = false;
        this.checkValue1 = [];
        this.checkValues = [];
        this.postIdList = [];
        this.postList = [];
        this.postLists = [];
        this.confirmQuery(this.postAssignmentBean);
    };
    //快速查询分页
    PostAssignmentComponent.prototype.paginate1 = function (event) {
        if (this.queryQuick1) {
            //每页显示的条数
            this.postAssignmentBean.pageSize = event.rows;
            var currentPage = event.page + 1 + '';
            this.postAssignmentBean.pageNum = currentPage;
            this.confirmQuery(this.postAssignmentBean);
        }
        else {
            this.postMemberBean.pageSize = event.rows;
            //当前页
            var currentPage = event.page + 1 + '';
            this.postMemberBean.pageNum = currentPage;
            //调用查询的方法
            this.queryCenter();
        }
    };
    PostAssignmentComponent.prototype.queryCenter = function () {
        var _this = this;
        this.commonHttpService.queryTellerByCombConditions(this.postMemberBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                for (var i = 0; i < data.tellerList.length; i++) {
                    // for (let j=0;j< this.tableDataWithParty.length;j++) {
                    data.tellerList[i].userLoginId = data.tellerList[i].tellerId;
                    data.tellerList[i].userName = data.tellerList[i].tellerName;
                    data.tellerList[i].partyId = data.tellerList[i].orgId;
                    data.tellerList[i].partyName = data.tellerList[i].orgName;
                    // arr.push(this.tableDataWithParty[j]);
                    // }
                }
                _this.tableDataWithParty = data.tellerList;
                _this.total = data.total;
                _this.postAssignmentBean.pageSize = _this.postMemberBean.pageSize;
                _this.postAssignmentBean.pageNum = _this.postMemberBean.pageNum;
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
    PostAssignmentComponent.prototype.confirmQuery = function (param) {
        var _this = this;
        this.commonHttpService.queryTellersByOrgLevel(param).subscribe(function (data) {
            if (data.returnCode.code = 'success') {
                _this.tableDataWithParty = data.orgTellerList;
                _this.total = data.total;
                _this.tableData = data.orgTellerList;
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
    //返回按钮
    PostAssignmentComponent.prototype.goBack = function (a) {
        this.queryQuick1 = '';
        this.queryQuick = '1';
        //返回重新查询机构人员
        // this.choicePeople1(a);
        this.positionTableData = [];
        this.partyId = this.goBackPartyId;
        this.orgName = this.goBackPartyName;
        this.partyName = this.goBackPartyName;
        this.tableData = [];
        this.tableDataWithParty = [];
        if (this.partyId) {
            this.queryPeopleById();
        }
    };
    //增加权限-快速查询
    PostAssignmentComponent.prototype.addPower = function () {
        if (this.peopleMessage && this.peopleMessage.userLoginId) {
            this.headerTitle = '加入权限';
            this.display = true;
            this.showModel = 2;
            // this.addPowerInVule = { orgId: this.org }
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择一条数据！' });
            return;
        }
    };
    PostAssignmentComponent.prototype.addPower1 = function () {
        if (this.peopleMessage && this.peopleMessage.tellerId) {
            this.headerTitle = '加入权限';
            this.display = true;
            this.showModel = 2;
            // this.addPowerInVule = { orgId: this.org }
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择一条数据！' });
            return;
        }
    };
    //柜员同步-初始化
    PostAssignmentComponent.prototype.followMe = function () {
        this.headerTitle = '柜员同步';
        this.display = true;
        this.showModel = '4';
    };
    //柜员同步
    PostAssignmentComponent.prototype.addCall = function (param) {
        this.display = param;
        this.confirmQuery(this.postAssignmentBean);
    };
    //加入权限回调 已更新 
    /**
     *
     * @param event 加入权限回调的时候岗位列表重新查询 ??
     * 打印看下第一次勾选存的postOrgPositionBean还有没有值
     */
    PostAssignmentComponent.prototype.addPowerCall = function (event) {
        var _this = this;
        this.checkValue1 = [];
        this.checkValues = [];
        this.postIdList = [];
        this.postList = [];
        this.postLists = [];
        this.display = false;
        this.postOrgPositionBean.partyId = event.orgId;
        this.partyId = event.orgId;
        this.orgName = event.orgName;
        this.partyName = event.orgName;
        this.commonHttpService.queryPostInfoByPostTeller(this.postOrgPositionBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // this.postQuery();
                var param = {
                    partyId: _this.postOrgPositionBean.partyId,
                    userLoginId: _this.postOrgPositionBean.userLoginId
                };
                _this.queryClick(param);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '查询机构岗位成功' });
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
    PostAssignmentComponent.prototype.queryClick = function (col) {
        var _this = this;
        this.checkValue1 = [];
        this.checkValues = [];
        this.postIdList = [];
        this.postList = [];
        this.postLists = [];
        this.postOrgPositionBean.partyId = col.partyId;
        this.postOrgPositionBean.userLoginId = col.userLoginId;
        this.postuserName = col.userName;
        this.commonHttpService.queryPostBytellerIdAndOrgIdLevel(this.postOrgPositionBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                for (var _i = 0, _a = data.postInfoListForYY; _i < _a.length; _i++) {
                    var i = _a[_i];
                    if (i.exitFlag == '0') {
                        _this.checkValue1.push(i.postId);
                        _this.postIdList.push(i.postId);
                        _this.postList.push({ postId: i.postId, postName: i.postName });
                    }
                }
                _this.checkValues = lodash__WEBPACK_IMPORTED_MODULE_8__["clone"](_this.checkValue1);
                _this.postLists = lodash__WEBPACK_IMPORTED_MODULE_8__["clone"](_this.postList);
                var params = [
                    {
                        postId: "",
                        postName: "当前岗位",
                        children: data.postInfoListForYY,
                    }, {
                        postId: "",
                        postName: "总行层级岗位",
                        children: data.postInfoListForJt,
                    }, {
                        postId: "",
                        postName: "分行及支行层级岗位",
                        children: data.postInfoListForFh,
                    },
                ];
                _this.positionTableData = _this.toTree(params);
                // this.isUnfold=true;
                _this.positionTableData.forEach(function (node) {
                    _this.expandedClick(node, true); //默认岗位的树是展开的
                });
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '查询机构岗位成功' });
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
    //删除权限
    PostAssignmentComponent.prototype.deletePower = function () {
        var _this = this;
        debugger;
        if (this.peopleMessage && this.peopleMessage.userLoginId && this.peopleMessage.partyId) {
            var param_1 = {
                userLoginId: this.peopleMessage.userLoginId,
                partyId: this.peopleMessage.partyId
            };
            this.commonHttpService.deleteOrgPostTellerRelationByTellerId(param_1).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.createOperateRecode1();
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: '删除成功' });
                    _this.queryOrgPosition(param_1);
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
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择一条数据！' });
            return;
        }
    };
    //删除权限
    PostAssignmentComponent.prototype.deletePower1 = function () {
        var _this = this;
        debugger;
        if (this.peopleMessage && this.peopleMessage.tellerId) {
            this.peopleMessage.userLoginId = this.peopleMessage.tellerId;
            this.peopleMessage.partyId = this.partyId;
            var param_2 = {
                userLoginId: this.peopleMessage.userLoginId,
                partyId: this.peopleMessage.partyId
            };
            this.commonHttpService.deleteOrgPostTellerRelationByTellerId(param_2).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.createOperateRecode1();
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: '删除成功' });
                    _this.queryOrgPosition(param_2);
                    _this.queryPeopleById();
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
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择一条数据！' });
            return;
        }
    };
    //批量导入
    PostAssignmentComponent.prototype.addmudels = function () {
        this.headerTitle = '批量导入';
        this.display = true;
        this.showModel = 3;
    };
    //批量导入回调
    PostAssignmentComponent.prototype.addfilerCall = function (event) {
        this.display = false;
    };
    //柜员分页
    PostAssignmentComponent.prototype.paginate = function (event) {
        // ;
        //每页显示的条数
        this.postMemberBean.pageSize = event.rows;
        //当前页
        var currentPage = event.page + 1 + '';
        this.postMemberBean.pageNum = currentPage;
        //调用查询的方法
        this.queryPeopleById();
        // this.postMemberBean.pageNum = '1';
    };
    /**
     * 机构岗位相关操作
     */
    //删除岗位后 查询机构岗位
    PostAssignmentComponent.prototype.queryOrgPosition = function (param) {
        var _this = this;
        this.checkValue1 = [];
        this.checkValues = [];
        this.postIdList = [];
        this.postList = [];
        this.postLists = [];
        this.commonHttpService.queryPostInfoByPostTeller(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.postQuery();
                // this.positionTableData = data.postInfoList;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '查询机构岗位成功' });
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
    //岗位分页
    PostAssignmentComponent.prototype.paginatePosition = function (event) {
        // ;
        //每页显示的条数
        this.postOrgPositionBean.pageSize = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.postOrgPositionBean.pageNum = currentPage;
        //调用查询的方法
        // this.queryOrgPosition();
        this.postOrgPositionBean.pageNum = 1;
    };
    //保存权限
    //partyId机构标识   userLoginId人员标识  postIdList岗位标识
    PostAssignmentComponent.prototype.savePower = function () {
        var _this = this;
        if (this.queryQuick1) {
            this.positionParam = {
                postIdList: this.postIdList,
                partyId: this.postOrgPositionBean.partyId,
                userLoginId: this.peopleMessage.userLoginId
            };
        }
        else {
            this.positionParam = {
                postIdList: this.postIdList,
                partyId: this.postOrgPositionBean.partyId,
                userLoginId: this.postOrgPositionBean.userLoginId
            };
        }
        if (this.positionParam.postIdList.length != 0 && this.positionParam.userLoginId) {
            this.commonHttpService.updateOrgPostTellerRelation(this.positionParam).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.createOperateRecode();
                    _this.queryClick(_this.positionParam);
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: '保存成功' });
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
            this.partyName = this.firstOrgName;
            this.partyId = this.firstOrgId;
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '机构柜员或岗位不能为空' });
        }
    };
    //按钮权限
    PostAssignmentComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    PostAssignmentComponent.prototype.createOperateRecode = function () {
        var _this = this;
        var lastRecode = {}; //原信息
        var nowRecode = {}; //现信息
        if (this.queryQuick1) {
            lastRecode = {
                tellerId: this.peopleMessage.userLoginId,
                tellerName: this.peopleMessage.userName,
                postList: this.postLists,
                orgId: this.peopleMessage.partyId,
                orgName: this.peopleMessage.partyName,
                operateTellerId: this.creat_user,
                operateTellerName: this.userName,
            };
            nowRecode = {
                tellerId: this.peopleMessage.userLoginId,
                tellerName: this.peopleMessage.userName,
                postList: this.postList,
                orgId: this.peopleMessage.partyId,
                orgName: this.peopleMessage.partyName,
                operateTellerId: this.creat_user,
                operateTellerName: this.userName,
            };
        }
        else {
            lastRecode = {
                tellerId: this.postOrgPositionBean.userLoginId,
                tellerName: this.postuserName,
                postList: this.postLists,
                orgId: this.partyId,
                orgName: this.partyName,
                operateTellerId: this.creat_user,
                operateTellerName: this.userName,
            };
            nowRecode = {
                tellerId: this.postOrgPositionBean.userLoginId,
                tellerName: this.postuserName,
                postList: this.postList,
                orgId: this.partyId,
                orgName: this.partyName,
                operateTellerId: this.creat_user,
                operateTellerName: this.userName,
            };
        }
        var Param = {
            externalIdType: 'POST',
            fromOperateRecode: JSON.stringify(lastRecode),
            toOperateRecode: JSON.stringify(nowRecode),
            applyDate: this.commfunc.getNowFormatDate(),
        };
        this.commonHttpService.createOperateRecode(Param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
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
    //删除权限调用
    PostAssignmentComponent.prototype.createOperateRecode1 = function () {
        var _this = this;
        var lastRecode = {}; //原信息
        var nowRecode = {}; //现信息
        if (this.queryQuick1) {
            lastRecode = {
                tellerId: this.peopleMessage.userLoginId,
                tellerName: this.peopleMessage.userName,
                postList: this.postLists,
                orgId: this.peopleMessage.partyId,
                orgName: this.peopleMessage.partyName,
                operateTellerId: this.creat_user,
                operateTellerName: this.userName,
            };
            nowRecode = {
                tellerId: this.peopleMessage.userLoginId,
                tellerName: this.peopleMessage.userName,
                postList: [],
                orgId: this.peopleMessage.partyId,
                orgName: this.peopleMessage.partyName,
                operateTellerId: this.creat_user,
                operateTellerName: this.userName,
            };
        }
        else {
            lastRecode = {
                tellerId: this.peopleMessage.tellerId,
                tellerName: this.peopleMessage.tellerName,
                postList: this.postLists,
                orgId: this.partyId,
                orgName: this.partyName,
                operateTellerId: this.creat_user,
                operateTellerName: this.userName,
            };
            nowRecode = {
                tellerId: this.peopleMessage.tellerId,
                tellerName: this.peopleMessage.tellerName,
                postList: [],
                orgId: this.partyId,
                orgName: this.partyName,
                operateTellerId: this.creat_user,
                operateTellerName: this.userName,
            };
        }
        var Param = {
            externalIdType: 'POST',
            fromOperateRecode: JSON.stringify(lastRecode),
            toOperateRecode: JSON.stringify(nowRecode),
            applyDate: this.commfunc.getNowFormatDate(),
        };
        this.commonHttpService.createOperateRecode(Param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expandingTree'),
        __metadata("design:type", Array)
    ], PostAssignmentComponent.prototype, "checkValues", void 0);
    PostAssignmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-assignment',
            template: __webpack_require__(/*! ./post-assignment.component.html */ "./src/app/pages/tzb/common/base-manage/post-assignment/post-assignment.component.html"),
            styles: [__webpack_require__(/*! ./post-assignment.component.scss */ "./src/app/pages/tzb/common/base-manage/post-assignment/post-assignment.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"],
            app_uisftech_common_http_uisftech_common_http_service__WEBPACK_IMPORTED_MODULE_7__["UisftechCommonHttpService"]])
    ], PostAssignmentComponent);
    return PostAssignmentComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/post-assignment/post-assignment.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/post-assignment/post-assignment.module.ts ***!
  \****************************************************************************************/
/*! exports provided: PostAssignmentComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAssignmentComponentModule", function() { return PostAssignmentComponentModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _post_assignment_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-assignment.routing */ "./src/app/pages/tzb/common/base-manage/post-assignment/post-assignment.routing.ts");
/* harmony import */ var _post_assignment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-assignment.component */ "./src/app/pages/tzb/common/base-manage/post-assignment/post-assignment.component.ts");
/* harmony import */ var _quick_query_message_quick_query_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quick-query-message/quick-query-message.component */ "./src/app/pages/tzb/common/base-manage/post-assignment/quick-query-message/quick-query-message.component.ts");
/* harmony import */ var _add_power_window_add_power_window_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-power-window/add-power-window.component */ "./src/app/pages/tzb/common/base-manage/post-assignment/add-power-window/add-power-window.component.ts");
/* harmony import */ var _add_moules_filer_add_moules_filer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-moules-filer/add-moules-filer.component */ "./src/app/pages/tzb/common/base-manage/post-assignment/add-moules-filer/add-moules-filer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PostAssignmentComponentModule = /** @class */ (function () {
    function PostAssignmentComponentModule() {
    }
    PostAssignmentComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _post_assignment_routing__WEBPACK_IMPORTED_MODULE_4__["PostAssignmentComponentRouting"],
            ],
            declarations: [
                _post_assignment_component__WEBPACK_IMPORTED_MODULE_5__["PostAssignmentComponent"],
                _quick_query_message_quick_query_message_component__WEBPACK_IMPORTED_MODULE_6__["QuickQueryMessageComponent"],
                _add_power_window_add_power_window_component__WEBPACK_IMPORTED_MODULE_7__["AddPowerWindowComponent"],
                _add_moules_filer_add_moules_filer_component__WEBPACK_IMPORTED_MODULE_8__["AddMoulesFilerComponent"],
            ],
            providers: []
        })
    ], PostAssignmentComponentModule);
    return PostAssignmentComponentModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/post-assignment/post-assignment.routing.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/post-assignment/post-assignment.routing.ts ***!
  \*****************************************************************************************/
/*! exports provided: routes, PostAssignmentComponentRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAssignmentComponentRouting", function() { return PostAssignmentComponentRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_assignment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-assignment.component */ "./src/app/pages/tzb/common/base-manage/post-assignment/post-assignment.component.ts");


var routes = [
    { path: '', component: _post_assignment_component__WEBPACK_IMPORTED_MODULE_1__["PostAssignmentComponent"] }
];
var PostAssignmentComponentRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/post-assignment/quick-query-message/quick-query-manage.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/post-assignment/quick-query-message/quick-query-manage.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  width: 30%; }\n\nlabel {\n  display: inline-block;\n  width: 34%;\n  text-align: right; }\n\n.btn {\n  text-align: center;\n  margin: 30px 0 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9wb3N0LWFzc2lnbm1lbnQvcXVpY2stcXVlcnktbWVzc2FnZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjb21tb25cXGJhc2UtbWFuYWdlXFxwb3N0LWFzc2lnbm1lbnRcXHF1aWNrLXF1ZXJ5LW1lc3NhZ2VcXHF1aWNrLXF1ZXJ5LW1hbmFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVSxFQUFBOztBQUVkO0VBQ0kscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY29tbW9uL2Jhc2UtbWFuYWdlL3Bvc3QtYXNzaWdubWVudC9xdWljay1xdWVyeS1tZXNzYWdlL3F1aWNrLXF1ZXJ5LW1hbmFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XHJcbiAgICB3aWR0aDogMzAlO1xyXG59XHJcbmxhYmVse1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDM0JTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDMwcHggMCAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/post-assignment/quick-query-message/quick-query-message.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/post-assignment/quick-query-message/quick-query-message.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12\">\r\n        <label for=\"\">柜员编号</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"postAssignmentBean.userLoginId\">\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <label for=\"\">柜员名称</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"postAssignmentBean.userName\">\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <label for=\"\">岗位编号</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"postAssignmentBean.postId\">\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <label for=\"\">岗位名称</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"postAssignmentBean.postName\">\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <label for=\"\">机构编号</label>\r\n        <!-- <input type=\"text\" pInputText [(ngModel)]=\"postAssignmentBean.orgId\"> (keyup)=\"inpquery($event)\" filter=\"filter\" -->\r\n        <p-dropdown [options]=\"orgIdList\" lass=\"textAlignLeft\" (onChange)=\"orgIdChange()\" (keyup)=\"inpquery($event)\" filter=\"filter\"\r\n            [(ngModel)]=\"orgId\" placeholder=\"请选择\" [lazy]='true' [editable]='false'></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <label for=\"\">机构名称</label>\r\n        <!-- <input type=\"text\" pInputText [(ngModel)]=\"postAssignmentBean.orgName\"> -->\r\n        <p-dropdown [options]=\"orgNameList\" class=\"textAlignLeft\" (onChange)=\"orgNameChange()\" (keyup)=\"inpquery($event)\" filter=\"filter\"\r\n            [(ngModel)]=\"orgName\" placeholder=\"请选择\" [lazy]='true' [editable]='false'></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"confirmQuery()\"></button>\r\n    </div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/post-assignment/quick-query-message/quick-query-message.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/post-assignment/quick-query-message/quick-query-message.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: QuickQueryMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickQueryMessageComponent", function() { return QuickQueryMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_post_assignment_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bean/post-assignment.bean */ "./src/app/pages/tzb/common/base-manage/post-assignment/bean/post-assignment.bean.ts");
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
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




var QuickQueryMessageComponent = /** @class */ (function () {
    function QuickQueryMessageComponent(commonHttpService, commfunc) {
        this.commonHttpService = commonHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.postAssignmentBean = new _bean_post_assignment_bean__WEBPACK_IMPORTED_MODULE_1__["PostAssignmentBean"]();
        this.msgs = []; //提示信息
        this.inpFlag = true;
        this.orgIdList = [];
        this.orgNameList = [];
    }
    QuickQueryMessageComponent.prototype.ngOnInit = function () {
        console.log(this.inValue);
        this.postAssignmentBean.pageNum = '1';
        this.postAssignmentBean.pageSize = '10';
        this.orgquery('');
    };
    QuickQueryMessageComponent.prototype.inpquery = function (event) {
        var _this = this;
        if (this.inpFlag) {
            this.inpFlag = false;
            setTimeout(function () {
                _this.inpFlag = true;
                var orgContent = event.srcElement.value;
                _this.orgquery(orgContent);
            }, 1000);
        }
    };
    //机构模糊查询
    QuickQueryMessageComponent.prototype.orgquery = function (orgContent) {
        var _this = this;
        // this.orgNameList = [
        //   // { label: '请选择', value: '' },
        //   { label: this.inValue.label, value: this.inValue.value },
        // ];
        // this.orgIdList = [
        //   // { label: '请选择', value: '' },
        //   { label: this.inValue.value, value: this.inValue.label },
        // ];
        // this.orgId = this.orgIdList[0].value;
        // this.orgName = this.orgNameList[0].value;
        // this.postAssignmentBean.orgId = this.orgIdList[0].label;
        // this.postAssignmentBean.orgName = this.orgNameList[0].label;
        var param = {
            orgId: /\w/.test(orgContent) ? orgContent : "",
            orgName: /\w/.test(orgContent) ? "" : orgContent,
            pageSize: 30,
            OrgStatus: '0'
        };
        this.commonHttpService.queryVagueOrgList(param).subscribe(function (data) {
            if (data.orgList) {
                _this.orgNameList = _this.commfunc.listToLabelvalue(data.orgList, 'orgName', 'orgId');
                _this.orgIdList = _this.commfunc.listToLabelvalue(data.orgList, 'orgId', 'orgName');
            }
        });
    };
    QuickQueryMessageComponent.prototype.orgIdChange = function () {
        this.exchange(this.orgIdList);
    };
    QuickQueryMessageComponent.prototype.orgNameChange = function () {
        this.exchange(this.orgNameList);
    };
    QuickQueryMessageComponent.prototype.exchange = function (list) {
        for (var i = 0; i < list.length; i++) {
            if (/\w/.test(list[0].label)) {
                if (list[i].value == this.orgId) {
                    this.postAssignmentBean.orgId = list[i].label;
                }
            }
            else {
                if (list[i].value == this.orgName) {
                    this.postAssignmentBean.orgName = list[i].label;
                }
            }
        }
    };
    //快速查询确定按钮 已更新
    QuickQueryMessageComponent.prototype.confirmQuery = function () {
        var event = {
            a: false,
            b: this.postAssignmentBean
        };
        this.outValue.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuickQueryMessageComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], QuickQueryMessageComponent.prototype, "outValue", void 0);
    QuickQueryMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quick-query-message',
            template: __webpack_require__(/*! ./quick-query-message.component.html */ "./src/app/pages/tzb/common/base-manage/post-assignment/quick-query-message/quick-query-message.component.html"),
            styles: [__webpack_require__(/*! ./quick-query-manage.scss */ "./src/app/pages/tzb/common/base-manage/post-assignment/quick-query-message/quick-query-manage.scss")]
        }),
        __metadata("design:paramtypes", [_http_common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], QuickQueryMessageComponent);
    return QuickQueryMessageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=post-assignment-post-assignment-module.js.map