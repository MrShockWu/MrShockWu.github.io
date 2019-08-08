(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["business-center-manage-business-center-manage-module"],{

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/business-center-manage.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/business-center-manage.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: BusinessCenterManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessCenterManageComponent", function() { return BusinessCenterManageComponent; });
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

var BusinessCenterManageComponent = /** @class */ (function () {
    function BusinessCenterManageComponent() {
    }
    BusinessCenterManageComponent.prototype.ngOnInit = function () {
    };
    BusinessCenterManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'business-center-config',
            template: '<router-outlet></router-outlet>',
        }),
        __metadata("design:paramtypes", [])
    ], BusinessCenterManageComponent);
    return BusinessCenterManageComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/business-center-manage.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/business-center-manage.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: BusinessCenterManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessCenterManageModule", function() { return BusinessCenterManageModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _business_center_manage_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./business-center-manage.routing */ "./src/app/pages/tzb/common/base-manage/business-center-manage/business-center-manage.routing.ts");
/* harmony import */ var _business_center_manage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./business-center-manage.component */ "./src/app/pages/tzb/common/base-manage/business-center-manage/business-center-manage.component.ts");
/* harmony import */ var _http_business_center_manage_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http/business-center-manage.http.service */ "./src/app/pages/tzb/common/base-manage/business-center-manage/http/business-center-manage.http.service.ts");
/* harmony import */ var _field_approve_field_approve_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./field-approve/field-approve.component */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-approve/field-approve.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var BusinessCenterManageModule = /** @class */ (function () {
    function BusinessCenterManageModule() {
    }
    BusinessCenterManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _business_center_manage_routing__WEBPACK_IMPORTED_MODULE_6__["BusinessCenterManageRouting"]
            ],
            declarations: [
                _business_center_manage_component__WEBPACK_IMPORTED_MODULE_7__["BusinessCenterManageComponent"],
                _field_approve_field_approve_component__WEBPACK_IMPORTED_MODULE_9__["FieldApproveComponent"],
            ],
            providers: [
                _http_business_center_manage_http_service__WEBPACK_IMPORTED_MODULE_8__["BusinessCenterManageHttp"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
                app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            ]
        })
    ], BusinessCenterManageModule);
    return BusinessCenterManageModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/business-center-manage.routing.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/business-center-manage.routing.ts ***!
  \*******************************************************************************************************/
/*! exports provided: BusinessCenterManageRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessCenterManageRouting", function() { return BusinessCenterManageRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _business_center_manage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business-center-manage.component */ "./src/app/pages/tzb/common/base-manage/business-center-manage/business-center-manage.component.ts");
/* harmony import */ var _field_approve_field_approve_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field-approve/field-approve.component */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-approve/field-approve.component.ts");



var routes = [
    {
        path: '', component: _business_center_manage_component__WEBPACK_IMPORTED_MODULE_1__["BusinessCenterManageComponent"],
        children: [
            { path: '', redirectTo: 'template-instance-query', pathMatch: 'full' },
            { path: 'template-instance-query', loadChildren: './template-instance-query/template-instance-query.module#TemplateInstanceQueryModule' },
            { path: 'temp-import-apply', loadChildren: './temp-import-apply/temp-import-apply.module#TempImportApplyModule' },
            { path: 'business-template', loadChildren: './business-template/business-template.module#BusinessTemplateModule' },
            { path: 'field-manage-list', loadChildren: './field-manage-list/field-manage-list.module#FieldListManageModule' },
            { path: 'field-approve', component: _field_approve_field_approve_component__WEBPACK_IMPORTED_MODULE_2__["FieldApproveComponent"] }
        ]
    },
];
var BusinessCenterManageRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-approve/field-approve.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/field-approve/field-approve.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <header-title [Info]=\"'流程实例审批'\"></header-title>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>事项类型:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{resultList.bigClassName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>事项名称:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{resultList.littleClassName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>发起人:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{resultList.workCreateName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>创建日期:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{resultList.createDate}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>模板实例名称:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{dtName}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"txt ui-g-12\" *ngIf=\"txtDisplay\">全部清除！</div>\r\n    <div class=\"ui-g-12 tableContent\" *ngIf=\"this_one\">\r\n        <p-dataTable emptyMessage=\"没有查找到数据\" [value]=\"tableData\" scrollable=\"true\" scrollHeight=\"550px\">\r\n            <!-- <p-column header=\"序号\">\r\n                <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n                    <span>{{index+1}}</span>\r\n                </ng-template>\r\n            </p-column> -->\r\n            <p-column [style]=\"{'width':'11%'}\" *ngFor=\"let item of tableList\" [field]=\"item.daAnotherField\" [header]=\"item.daName\">\r\n                <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    <span *ngIf=\"item.fileList.length != 0\">{{col[item.daAnotherField] | codeValuePie: item.fileList}}</span>\r\n                    <span *ngIf=\"item.fileList.length == 0\">{{col[item.daAnotherField]}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <div class=\"ui-g-12\" *ngIf=\"!txtDisplay\">\r\n            <p-paginator [first]=\"first\" totalRecords=\"{{total}}\" rows=\"{{pageSize}}\" pageLinkSize=\"5\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginate($event)\"></p-paginator>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"this_more\">\r\n        <div class=\"ui-g-6 tit\">\r\n            文件名：{{dataList.fileName}}\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <button pButton type=\"button\" label=\"导出\" (click)='download()'></button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 module\">\r\n    <examine-page></examine-page>\r\n</div>\r\n<!-- 提示 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-approve/field-approve.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/field-approve/field-approve.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tit {\n  text-align: right; }\n\n.tableContent {\n  text-align: center; }\n\n.txt {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9idXNpbmVzcy1jZW50ZXItbWFuYWdlL2ZpZWxkLWFwcHJvdmUvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY29tbW9uXFxiYXNlLW1hbmFnZVxcYnVzaW5lc3MtY2VudGVyLW1hbmFnZVxcZmllbGQtYXBwcm92ZVxcZmllbGQtYXBwcm92ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9idXNpbmVzcy1jZW50ZXItbWFuYWdlL2ZpZWxkLWFwcHJvdmUvZmllbGQtYXBwcm92ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50YWJsZUNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50eHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-approve/field-approve.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/field-approve/field-approve.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: FieldApproveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldApproveComponent", function() { return FieldApproveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_business_center_manage_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http/business-center-manage.http.service */ "./src/app/pages/tzb/common/base-manage/business-center-manage/http/business-center-manage.http.service.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FieldApproveComponent = /** @class */ (function () {
    function FieldApproveComponent(routeInfo, commfunc, httpService) {
        this.routeInfo = routeInfo;
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.msgs = [];
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_COMMON_DOWNLOAD"];
        this.tableData = [];
        this.pageNum = 1;
        this.pageSize = 10;
        this.this_one = false;
        this.this_more = false;
        this.dimensionMaintValueList = []; //利率维度值
        this.first = 0;
    }
    FieldApproveComponent.prototype.ngOnInit = function () {
        // this.resultList = this.routeInfo.snapshot.params;
        this.resultList = JSON.parse(this.commfunc.getSessionDataCH('yhqisp393000'));
        this.dataList = JSON.parse(this.resultList.dataMap);
        debugger;
        console.log(this.dataList);
        if (this.dataList.fileName && this.dataList.filePath) {
            this.this_more = true;
        }
        else {
            this.this_one = true;
            if (this.dataList.modifyInfoMap.deleteFlag) {
                this.tableDataAll = this.dataList.modifyInfoMap.deleteApprovalList;
                this.manageTableData(this.dataList.modifyInfoMap.deleteFlag);
            }
            else {
                this.queryDimensionMaintValueService();
            }
        }
    };
    //列表处理
    FieldApproveComponent.prototype.manageTableData = function (flag) {
        var _this = this;
        if (flag == '1') {
            setTimeout(function () {
                _this.total = _this.tableDataAll.length;
                _this.query1();
                _this.tableList = _this.dataList.modifyInfoMap.tableList;
            });
        }
        else {
            this.this_one = false;
            this.txtDisplay = true;
        }
    };
    FieldApproveComponent.prototype.query1 = function () {
        var list = JSON.parse(JSON.stringify(this.tableDataAll));
        this.tableData = list.splice((this.pageNum - 1) * this.pageSize, this.pageSize);
    };
    //分页
    FieldApproveComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = Number(event.rows);
        //当前页
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.first = (currentPage - 1) * this.pageSize;
        this.query1(); //调用查询的方法
    };
    FieldApproveComponent.prototype.query = function () {
        var _this = this;
        this.httpService.queryDocumentTemplateDetails({ dtId: this.dataList.dtId }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dtId = _this.dataList.dtId;
                _this.dtName = data.result.templateInfo.dtName;
                _this.tableList = data.result.tableList;
                _this.templateInfo = data.result.templateInfo;
                _this.templateTitle = _this.templateInfo['dtName'];
                _this.abledFlag = false;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '查询成功' });
                _this.tableData = [];
                _this.tableData.push(_this.dataList.modifyInfoMap);
                if (_this.tableList && _this.tableList.length > 0) {
                    _this.tableList.forEach(function (element1, i) {
                        if (element1.daField == 'preferentialAccumulationProportion') {
                            _this.tableList[i].daType = '03';
                            _this.tableList[i].fileList = _this.dimensionMaintValueList;
                        }
                        if (_this.tableList[i].fileList && _this.tableList[i].fileList.length > 0) {
                            var arrTemp_1 = [];
                            _this.tableList[i].fileList.forEach(function (element2, ind) {
                                var arr = { label: element2.fieldValue, value: element2.fieldKey };
                                arrTemp_1.push(arr);
                            });
                            _this.tableList[i].fileList = arrTemp_1;
                        }
                    });
                }
                console.log(_this.tableData);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '查询失败' });
            }
        });
    };
    //利率维度值查询
    FieldApproveComponent.prototype.queryDimensionMaintValueService = function () {
        var _this = this;
        var params = {
            dmsnlChiNm: "积数比",
            pageNum: 1,
            pageSize: 10000
        };
        this.httpService.queryDimensionMaintValueService(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                console.log(data);
                _this.dimensionMaintValueList = [];
                if (data.resultList && data.resultList.legnth != 0) {
                    data.resultList.forEach(function (element) {
                        _this.dimensionMaintValueList.push({ fieldKey: element.dmsnlValue, fieldValue: element.dmslValDesc });
                    });
                }
                _this.query();
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
    //管理查询
    FieldApproveComponent.prototype.manageQuery = function () {
        var _this = this;
        this.doFlag = '';
        var searchInfoMap = this.toParam(this.tableList, 'value');
        var param = {
            dtId: this.templateInfo['dtId'],
            entityName: this.templateInfo['entityName'],
            searchInfoMap: searchInfoMap,
            pageNum: this.pageNum,
            pageSize: this.pageSize
        };
        this.httpService.queryPermissionInfoList(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.result.permissionsInfoList) {
                    _this.tableData = data.result.permissionsInfoList;
                }
                else {
                    _this.tableData = [];
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '查询失败' });
            }
        });
    };
    FieldApproveComponent.prototype.toParam = function (list, value) {
        var param;
        if (this.doFlag == '1' || this.doFlag == '2') {
            param = { seqNo: this.index };
        }
        else {
            param = {};
        }
        list.forEach(function (item) {
            if (item[value]) {
                param[item.daAnotherField] = item[value];
            }
        });
        return param;
    };
    //下载
    FieldApproveComponent.prototype.download = function () {
        window.open(this.DOWNLOAD + "?fileName=" + encodeURI(this.dataList.fileName) + "&fileUrl=" + this.dataList.filePath, "_self");
    };
    FieldApproveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'field-approve',
            template: __webpack_require__(/*! ./field-approve.component.html */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-approve/field-approve.component.html"),
            styles: [__webpack_require__(/*! ./field-approve.component.scss */ "./src/app/pages/tzb/common/base-manage/business-center-manage/field-approve/field-approve.component.scss")],
            providers: [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], _http_business_center_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["BusinessCenterManageHttp"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _http_business_center_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["BusinessCenterManageHttp"]])
    ], FieldApproveComponent);
    return FieldApproveComponent;
}());



/***/ })

}]);
//# sourceMappingURL=business-center-manage-business-center-manage-module.js.map