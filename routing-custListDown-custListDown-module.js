(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routing-custListDown-custListDown-module"],{

/***/ "./src/app/@uisftech/view/routing/custListDown/custListDown.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/custListDown/custListDown.module.ts ***!
  \****************************************************************************/
/*! exports provided: OtherCustListDownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCustListDownModule", function() { return OtherCustListDownModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custListDown_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custListDown.routing */ "./src/app/@uisftech/view/routing/custListDown/custListDown.routing.ts");
/* harmony import */ var app_pages_tzb_custom_custom_information_advanced_search_list_download_approve_list_download_approve_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/custom-information/advanced-search/list-download-approve/list-download-approve.component */ "./src/app/pages/tzb/custom/custom-information/advanced-search/list-download-approve/list-download-approve.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_information_advanced_search_custom_search_download_custom_search_download_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/custom-information/advanced-search/custom-search-download/custom-search-download.component */ "./src/app/pages/tzb/custom/custom-information/advanced-search/custom-search-download/custom-search-download.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var OtherCustListDownModule = /** @class */ (function () {
    function OtherCustListDownModule() {
    }
    OtherCustListDownModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _custListDown_routing__WEBPACK_IMPORTED_MODULE_4__["OtherCustListDownRouting"],
            ],
            declarations: [
                app_pages_tzb_custom_custom_information_advanced_search_list_download_approve_list_download_approve_component__WEBPACK_IMPORTED_MODULE_5__["ListDownloadApproveComponent"],
                app_pages_tzb_custom_custom_information_advanced_search_custom_search_download_custom_search_download_component__WEBPACK_IMPORTED_MODULE_6__["CustomSearchDownloadComponent"]
            ],
            providers: []
        })
    ], OtherCustListDownModule);
    return OtherCustListDownModule;
}());



/***/ }),

/***/ "./src/app/@uisftech/view/routing/custListDown/custListDown.routing.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/custListDown/custListDown.routing.ts ***!
  \*****************************************************************************/
/*! exports provided: routes, OtherCustListDownRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherCustListDownRouting", function() { return OtherCustListDownRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_custom_information_advanced_search_list_download_approve_list_download_approve_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/custom-information/advanced-search/list-download-approve/list-download-approve.component */ "./src/app/pages/tzb/custom/custom-information/advanced-search/list-download-approve/list-download-approve.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_information_advanced_search_custom_search_download_custom_search_download_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/custom-information/advanced-search/custom-search-download/custom-search-download.component */ "./src/app/pages/tzb/custom/custom-information/advanced-search/custom-search-download/custom-search-download.component.ts");



var routes = [
    {
        //客户名单下载
        path: 'a/b/:fileId',
        component: app_pages_tzb_custom_custom_information_advanced_search_list_download_approve_list_download_approve_component__WEBPACK_IMPORTED_MODULE_1__["ListDownloadApproveComponent"]
    },
    {
        //搜客客户名单下载
        path: 'a/c/:fileId',
        component: app_pages_tzb_custom_custom_information_advanced_search_custom_search_download_custom_search_download_component__WEBPACK_IMPORTED_MODULE_2__["CustomSearchDownloadComponent"]
    }
];
var OtherCustListDownRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/advanced-search/custom-search-download/custom-search-download.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/advanced-search/custom-search-download/custom-search-download.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n  <header-title [Info]=\"'下载中心审批'\"></header-title>\r\n  <div class=\"ui-g-12 table base-table\">\r\n    <p-dataTable [value]=\"dataTable\" [emptyMessage]=\"tabMesg\">\r\n      <p-column field=\"fileName\" header=\"下载名称\" [style]=\"{'width':'320px'}\"></p-column>\r\n      <p-column field=\"sourceName\" header=\"下载来源\"></p-column>\r\n      <p-column field=\"queryRange\" header=\"搜索范围\"></p-column>\r\n      <p-column field=\"queryCondition\" header=\"搜索条件\" [style]=\"{'width':'300px','overflow': 'hidden','text-overflow': 'ellipsis','white-space': 'nowrap'}\">\r\n        <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n          <span  title=\"{{col.queryCondition}}\">{{col.queryCondition}}</span>\r\n      </ng-template>\r\n      </p-column>\r\n      <p-column field=\"totalNum\" header=\"客户名单数\"></p-column>\r\n      <p-column field=\"initiatedTime\" header=\"发起时间\"></p-column>\r\n      <p-column field=\"operateName\" header=\"下载操作人\"></p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/advanced-search/custom-search-download/custom-search-download.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/advanced-search/custom-search-download/custom-search-download.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basic {\n  margin-top: 30px; }\n  .basic .text_right {\n    text-align: right; }\n  .basic input {\n    width: 40%; }\n  .table {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYWR2YW5jZWQtc2VhcmNoL2N1c3RvbS1zZWFyY2gtZG93bmxvYWQvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20taW5mb3JtYXRpb25cXGFkdmFuY2VkLXNlYXJjaFxcY3VzdG9tLXNlYXJjaC1kb3dubG9hZFxcY3VzdG9tLXNlYXJjaC1kb3dubG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBR1EsaUJBQWlCLEVBQUE7RUFIekI7SUFNUSxVQUFVLEVBQUE7RUFJbEI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWluZm9ybWF0aW9uL2FkdmFuY2VkLXNlYXJjaC9jdXN0b20tc2VhcmNoLWRvd25sb2FkL2N1c3RvbS1zZWFyY2gtZG93bmxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaWMge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIC50ZXh0X3JpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/advanced-search/custom-search-download/custom-search-download.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/advanced-search/custom-search-download/custom-search-download.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: CustomSearchDownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSearchDownloadComponent", function() { return CustomSearchDownloadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
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





var CustomSearchDownloadComponent = /** @class */ (function () {
    function CustomSearchDownloadComponent(httpService, route, commfunc, activeRoute) {
        this.httpService = httpService;
        this.route = route;
        this.commfunc = commfunc;
        this.activeRoute = activeRoute;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //表格中无数据时显示的内容
        this.fileId = '';
        this.downloadSource = '';
        this.fileName = '';
        this.initiatedDate = '';
        this.operateNo = '';
        this.operateName = '';
        this.msgs = [];
        this.downloadSourceCode = [];
        this.dataTable = [];
        this.codeValues();
        this.downloadSourceCode = this.code['DownloadSourceCode'];
    }
    CustomSearchDownloadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.queryParams = JSON.parse(params.data);
            console.log(_this.queryParams);
        });
        this.fileId = this.route.snapshot.params['fileId'],
            this.doQuery();
    };
    //码值
    CustomSearchDownloadComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //审批-详情
    CustomSearchDownloadComponent.prototype.doQuery = function () {
        var _this = this;
        var params = {
            fileId: this.fileId
        };
        var ob = this.httpService.queryDownloadCenterApproveProcess(params);
        ob.subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.dataTable = data.returnList;
                _this.dataTable[0].fileName = _this.queryParams['fileName'];
                _this.dataTable[0].queryCondition = _this.queryParams['queryCondition'];
                _this.dataTable[0].totalNum = _this.queryParams['totalNum'];
                if (_this.queryParams['queryRange'] == '1') {
                    _this.dataTable[0].queryRange = '全部客户';
                }
                else if (_this.queryParams['queryRange'] == '2') {
                    _this.dataTable[0].queryRange = '下辖主联系客户';
                }
                else if (_this.queryParams['queryRange'] == '3') {
                    _this.dataTable[0].queryRange = '下辖协储员客户';
                }
                console.log(_this.dataTable);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    CustomSearchDownloadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-search-download',
            template: __webpack_require__(/*! ./custom-search-download.component.html */ "./src/app/pages/tzb/custom/custom-information/advanced-search/custom-search-download/custom-search-download.component.html"),
            styles: [__webpack_require__(/*! ./custom-search-download.component.scss */ "./src/app/pages/tzb/custom/custom-information/advanced-search/custom-search-download/custom-search-download.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CustomSearchDownloadComponent);
    return CustomSearchDownloadComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/advanced-search/list-download-approve/list-download-approve.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/advanced-search/list-download-approve/list-download-approve.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n  <header-title [Info]=\"'下载中心审批'\"></header-title>\r\n  <div class=\"ui-g-12 table base-table\">\r\n    <p-dataTable [value]=\"dataTable\" [emptyMessage]=\"tabMesg\">\r\n      <p-column field=\"fileName\" header=\"下载名称\"></p-column>\r\n      <p-column field=\"sourceName\" header=\"下载来源\"></p-column>\r\n      <p-column field=\"initiatedTime\" header=\"发起时间\"></p-column>\r\n      <p-column field=\"operateName\" header=\"下载操作人\"></p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/advanced-search/list-download-approve/list-download-approve.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/advanced-search/list-download-approve/list-download-approve.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basic {\n  margin-top: 30px; }\n  .basic .text_right {\n    text-align: right; }\n  .basic input {\n    width: 40%; }\n  .table {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vYWR2YW5jZWQtc2VhcmNoL2xpc3QtZG93bmxvYWQtYXBwcm92ZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1pbmZvcm1hdGlvblxcYWR2YW5jZWQtc2VhcmNoXFxsaXN0LWRvd25sb2FkLWFwcHJvdmVcXGxpc3QtZG93bmxvYWQtYXBwcm92ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBR1EsaUJBQWlCLEVBQUE7RUFIekI7SUFNUSxVQUFVLEVBQUE7RUFJbEI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWluZm9ybWF0aW9uL2FkdmFuY2VkLXNlYXJjaC9saXN0LWRvd25sb2FkLWFwcHJvdmUvbGlzdC1kb3dubG9hZC1hcHByb3ZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2ljIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAudGV4dF9yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/advanced-search/list-download-approve/list-download-approve.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/advanced-search/list-download-approve/list-download-approve.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ListDownloadApproveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDownloadApproveComponent", function() { return ListDownloadApproveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
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





var ListDownloadApproveComponent = /** @class */ (function () {
    function ListDownloadApproveComponent(httpService, route, commfunc) {
        this.httpService = httpService;
        this.route = route;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //表格中无数据时显示的内容
        this.fileId = '';
        this.downloadSource = '';
        this.fileName = '';
        this.initiatedDate = '';
        this.operateNo = '';
        this.operateName = '';
        this.msgs = [];
        this.downloadSourceCode = [];
        this.dataTable = [];
        this.codeValues();
        this.downloadSourceCode = this.code['DownloadSourceCode'];
    }
    ListDownloadApproveComponent.prototype.ngOnInit = function () {
        this.fileId = this.route.snapshot.params['fileId'],
            this.doQuery();
    };
    //码值
    ListDownloadApproveComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //审批-详情
    ListDownloadApproveComponent.prototype.doQuery = function () {
        var _this = this;
        var params = {
            fileId: this.fileId
        };
        var ob = this.httpService.queryDownloadCenterApproveProcess(params);
        ob.subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.dataTable = data.returnList;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
        });
    };
    ListDownloadApproveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-download-approve',
            template: __webpack_require__(/*! ./list-download-approve.component.html */ "./src/app/pages/tzb/custom/custom-information/advanced-search/list-download-approve/list-download-approve.component.html"),
            styles: [__webpack_require__(/*! ./list-download-approve.component.scss */ "./src/app/pages/tzb/custom/custom-information/advanced-search/list-download-approve/list-download-approve.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], ListDownloadApproveComponent);
    return ListDownloadApproveComponent;
}());



/***/ })

}]);
//# sourceMappingURL=routing-custListDown-custListDown-module.js.map