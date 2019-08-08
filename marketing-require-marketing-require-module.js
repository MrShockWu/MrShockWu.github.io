(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marketing-require-marketing-require-module"],{

/***/ "./src/app/pages/tzb/custom/marketing/http/marketing.constant.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/http/marketing.constant.ts ***!
  \***********************************************************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
var API = {
    createMarketingCampaignNew: 'createMarketingCampaignNew',
    createCampaignProduct: 'createCampaignProduct',
    createCampaignPromoteAndProduct: 'createCampaignPromoteAndProduct',
    createCampaignCust: 'createCampaignCust',
    createCampaignRequire: 'createCampaignRequire',
    createMarketingCampaignRole: 'createMarketingCampaignRole',
    custMarketWorkflowUnifiedEntrance: 'custMarketWorkflowUnifiedEntrance',
    queryMarketingCampaignById: 'queryMarketingCampaignById',
    createCampaignChannel: 'createCampaignChannel',
    findDocumentTemplate: 'findDocumentTemplate',
    documentDownload: 'documentDownload',
    queryCustomerByTopicId: 'queryCustomerByTopicId',
    doucumentDataDeal: 'doucumentDataDeal',
    findDocumentExamples: 'findDocumentExamples',
    queryCheckCustomer: 'queryCheckCustomer',
    updateCheckCustomer: 'updateCheckCustomer',
    delSelectCustomer: 'delSelectCustomer',
    queryPageControllerList: 'queryPageControllerList',
    getBigDataStatisticsList: 'getBigDataStatisticsList',
    getBigDataStatisticsDetail: 'getBigDataStatisticsDetail',
    queryPageControllerInfoById: 'queryPageControllerInfoById',
    createGlobalSeqNo: 'createGlobalSeqNo',
    campaignCustDataDelete: 'campaignCustDataDelete',
    queryRecommendProduct: 'queryRecommendProduct',
    updateBusiBatchInfo: 'updateBusiBatchInfo',
    updateBusiBatchDetailInfo: 'updateBusiBatchDetailInfo',
    updateCustProductData: 'updateCustProductData',
    updateMarketinggCampaignById: 'updateMarketinggCampaignById',
};


/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/http/marketing.http.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/http/marketing.http.service.ts ***!
  \***************************************************************************/
/*! exports provided: MarketingHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingHttpService", function() { return MarketingHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/http.service */ "./src/app/@uisftech/common/service/http.service.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _marketing_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marketing.constant */ "./src/app/pages/tzb/custom/marketing/http/marketing.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MarketingHttpService = /** @class */ (function () {
    function MarketingHttpService(httpService) {
        this.httpService = httpService;
    }
    //基本要素
    MarketingHttpService.prototype.createMarketingCampaignNew = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createMarketingCampaignNew, params);
    };
    //营销产品创建
    MarketingHttpService.prototype.createCampaignProduct = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createCampaignProduct, params);
    };
    //促销手段
    MarketingHttpService.prototype.createCampaignPromoteAndProduct = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createCampaignPromoteAndProduct, params);
    };
    //营销对象
    MarketingHttpService.prototype.createCampaignCust = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createCampaignCust, params);
    };
    //营销要求
    MarketingHttpService.prototype.createCampaignRequire = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createCampaignRequire, params);
    };
    //角色创建
    MarketingHttpService.prototype.createMarketingCampaignRole = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createMarketingCampaignRole, params);
    };
    //发布
    MarketingHttpService.prototype.custMarketWorkflowUnifiedEntrance = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].custMarketWorkflowUnifiedEntrance, params);
    };
    //复制营销活动
    MarketingHttpService.prototype.queryMarketingCampaignById = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryMarketingCampaignById, params);
    };
    //营销渠道
    MarketingHttpService.prototype.createCampaignChannel = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createCampaignChannel, params);
    };
    //文件导入
    MarketingHttpService.prototype.findDocumentTemplate = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].findDocumentTemplate, params);
    };
    //模板下载
    MarketingHttpService.prototype.documentDownload = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].documentDownload, params);
    };
    MarketingHttpService.prototype.queryCustomerByTopicId = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryCustomerByTopicId, params);
    };
    MarketingHttpService.prototype.doucumentDataDeal = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].doucumentDataDeal, params);
    };
    //查询实例列表
    MarketingHttpService.prototype.findDocumentExamples = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].findDocumentExamples, params);
    };
    MarketingHttpService.prototype.queryCheckCustomer = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryCheckCustomer, params);
    };
    //更新已选择客户
    MarketingHttpService.prototype.updateCheckCustomer = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].updateCheckCustomer, params);
    };
    //删除已选择客户
    MarketingHttpService.prototype.delSelectCustomer = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].delSelectCustomer, params);
    };
    //页面配置
    MarketingHttpService.prototype.queryPageControllerList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryPageControllerList, params);
    };
    //大数据导入名单数据列表
    MarketingHttpService.prototype.getBigDataStatisticsList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].getBigDataStatisticsList, params);
    };
    //大数据导入名单详情
    MarketingHttpService.prototype.getBigDataStatisticsDetail = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].getBigDataStatisticsDetail, params);
    };
    MarketingHttpService.prototype.queryPageControllerInfoById = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS22"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryPageControllerInfoById, params);
    };
    MarketingHttpService.prototype.createGlobalSeqNo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS22"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createGlobalSeqNo, params);
    };
    MarketingHttpService.prototype.campaignCustDataDelete = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS22"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].campaignCustDataDelete, params);
    };
    MarketingHttpService.prototype.queryRecommendProduct = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryRecommendProduct, params);
    };
    //批次列表信息修改
    MarketingHttpService.prototype.updateBusiBatchInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].updateBusiBatchInfo, params);
    };
    //批次明细信息修改
    MarketingHttpService.prototype.updateBusiBatchDetailInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].updateBusiBatchDetailInfo, params);
    };
    MarketingHttpService.prototype.updateCustProductData = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].updateCustProductData, params);
    };
    // 营销活动复核
    MarketingHttpService.prototype.updateMarketinggCampaignById = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _marketing_constant__WEBPACK_IMPORTED_MODULE_3__["API"].updateMarketinggCampaignById, params);
    };
    MarketingHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], MarketingHttpService);
    return MarketingHttpService;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-require/marketing-require.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-require/marketing-require.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\" style=\"padding:0\">\r\n    <!-- <div class=\"ui-g-12\" style=\"text-align:right;\">\r\n        <span class=\"icoColor\" (click)=\"doAdd()\">新增</span>\r\n    </div> -->\r\n    <div class=\"ui-g-12\">\r\n        <p-dataTable [value]=\"requestList\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" class=\"table\">\r\n            <p-column field=\"endtime\" header=\"截至时间\">\r\n                <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                    <p-calendar [showIcon]=\"true\" [disabled]=\"showDisabled\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\"\r\n                        dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [showOtherMonths]=\"false\" [minDate]=\"fromDate\" [(ngModel)]=\"car.endtime\"></p-calendar>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"处理进度要求\">\r\n                <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"car.disposeScheduleRequire\" (blur)=\"onKeyupPercent1($event)\" [disabled]=\"showDisabled\"\r\n                    />\r\n                    <b>%</b>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"营销成功率\">\r\n                <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                    <input type=\"text\" pInputText (blur)=\"onKeyupPercent($event)\" [(ngModel)]=\"car.marketingSucRate\" [disabled]=\"showDisabled\"\r\n                    />\r\n                    <b>%</b>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column >\r\n                <ng-template pTemplate=\"header\">\r\n                    <span>操作</span>\r\n                    <img src=\"../../../../../../../assets/layout/images/add.png\" alt=\"\" (click)=\"doAdd()\">\r\n                </ng-template>\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)=\"toDelete(i)\" class=\"minusIco\">删除</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12 btn-switch\">\r\n        <button pButton type=\"button\" (click)=\"prev()\" label=\"上一步\"></button>\r\n        <button pButton type=\"button\" (click)=\"next()\" label=\"下一步\"></button>\r\n        <span class=\"icoColor\" (click)=\"rest()\">重置</span>\r\n    </div>\r\n</div>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-require/marketing-require.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-require/marketing-require.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-switch {\n  text-align: center; }\n\n:host/deep/ .ui-datatable-scrollable-body {\n  overflow: inherit; }\n\n:host/deep/ .ui-datatable .ui-datatable-data tr td {\n  position: relative; }\n\nb {\n  position: absolute;\n  top: 8px;\n  right: 20px; }\n\n:host/deep/ .ui-calendar.ui-calendar-w-btn input {\n  display: inline-block;\n  height: 25px; }\n\nimg {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  color: #000;\n  margin-left: 10px;\n  cursor: pointer;\n  float: right; }\n\n:host/deep/ .minusIco {\n  margin-left: 43px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvbWFya2V0aW5nLWFjdGl2aXRlL21hcmtldGluZy1yZXF1aXJlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcbWFya2V0aW5nXFxtYXJrZXRpbmctYWN0aXZpdGVcXG1hcmtldGluZy1yZXF1aXJlXFxtYXJrZXRpbmctcmVxdWlyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVyxFQUFBOztBQUVmO0VBQ0kscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUVaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL21hcmtldGluZy9tYXJrZXRpbmctYWN0aXZpdGUvbWFya2V0aW5nLXJlcXVpcmUvbWFya2V0aW5nLXJlcXVpcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXN3aXRjaHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlLXNjcm9sbGFibGUtYm9keXtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS1kYXRhIHRyIHRke1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1jYWxlbmRhci51aS1jYWxlbmRhci13LWJ0biBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbjpob3N0L2RlZXAvIC5taW51c0ljb3tcclxuICAgIG1hcmdpbi1sZWZ0OiA0M3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-require/marketing-require.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-require/marketing-require.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: MarketingRequireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingRequireComponent", function() { return MarketingRequireComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var _http_marketing_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../http/marketing.http.service */ "./src/app/pages/tzb/custom/marketing/http/marketing.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * 营销要求
 */
var MarketingRequireComponent = /** @class */ (function () {
    function MarketingRequireComponent(router, routeInfo, commfunc, marketingHttpService) {
        this.router = router;
        this.routeInfo = routeInfo;
        this.commfunc = commfunc;
        this.marketingHttpService = marketingHttpService;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"];
        this.msgs = [];
        this.display = false;
        this.dataList = [];
        this.requestList = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.fromDate = null;
        this.activiteData = {}; //接收详情数据
        this.url = [];
        this.isNext = false;
        this.showDisabled = false;
    }
    MarketingRequireComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.requestList = [];
        });
        this.marketingCampaignId = this.routeInfo.snapshot.params['marketingCampaignId'];
        this.marketingCampaigntType = this.routeInfo.snapshot.params['marketingCampaigntType'];
        this.fromDate = new Date(this.commfunc.getSessionDataCH('fromDate'));
        // this.deId=this.routeInfo.snapshot.params['deId'];
        this.url = JSON.parse(this.commfunc.getSessionDataCH('markingURL'));
        this.url.forEach(function (element, index) {
            if (element.label == "MarketingRequireComponent") {
                if (index + 1 == _this.url.length) { //判断是最后一个
                    _this.isNext = true;
                }
            }
        });
        if (this.marketingCampaignId) {
            this.echoClick();
        }
        this.flagCopy = this.routeInfo.snapshot.params['flagCopy']; //复制和修改的标识
        // if (this.flagCopy) {
        // 	this.activiteData = JSON.parse(this.routeInfo.snapshot.params['activiteData']);//接收详情的数据
        // 	if (this.activiteData.requireList) {
        // 		this.requestList = this.activiteData.requireList;
        // 		console.log(this.requestList)
        // 		this.requestList.forEach((element, i) => {
        // 			if (element.marketingChannelTimeFrom) {
        // 				this.requestList[i].endtime = new Date(element.endtime);
        // 			}
        // 		});
        // 	}
        // 	if (this.activiteData.statusId == '3') {//状态为已发布进行中时不给修改
        // 		this.showDisabled = true;
        // 	} else {
        // 		this.showDisabled = false;
        // 	}
        // }
        if (this.routeInfo.snapshot.params['relationProductList']) {
            this.dataList = JSON.parse(this.routeInfo.snapshot.params['relationProductList']);
        }
    };
    //新增
    MarketingRequireComponent.prototype.doAdd = function () {
        var aa = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.requestList);
        aa.push({
            endtime: '', disposeScheduleRequire: '', marketingSucRate: ''
        });
        this.requestList = aa;
    };
    //删除
    MarketingRequireComponent.prototype.toDelete = function (i) {
        this.requestList.splice(i, 1);
        this.requestList = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.requestList);
    };
    MarketingRequireComponent.prototype.onKeyupPercent = function (event) {
        if (Object(_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["Equhundered"])(null, event.target.value)) {
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请输入正确的营销成功率' }];
            event.target.value = '';
        }
    };
    MarketingRequireComponent.prototype.onKeyupPercent1 = function (event) {
        if (Object(_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["Equhundered"])(null, event.target.value)) {
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请输入正确的处理进度要求' }];
            event.target.value = '';
        }
    };
    //上一步
    MarketingRequireComponent.prototype.prev = function () {
        var _this = this;
        var param = {};
        if (this.flagCopy) {
            param = {
                marketingCampaignId: this.marketingCampaignId,
                marketingCampaigntType: this.marketingCampaigntType,
                relationProductList: JSON.stringify(this.dataList),
                flagCopy: this.flagCopy,
                tabPrev: 'tabUp'
            };
        }
        else {
            param = {
                marketingCampaignId: this.marketingCampaignId,
                marketingCampaigntType: this.marketingCampaigntType,
                relationProductList: JSON.stringify(this.dataList),
                tabPrev: 'tabUp'
            };
        }
        this.url = JSON.parse(this.commfunc.getSessionDataCH('markingURL'));
        var navUrl = '';
        var indexId = '';
        this.url.forEach(function (element, index) {
            if (element.label == "MarketingRequireComponent") {
                navUrl = _this.url[index - 1].url;
                indexId = _this.url[index - 1].index;
            }
        });
        this.router.navigate([navUrl, param]); //营销渠道
        this.commfunc.setSessionDataCH('index', indexId);
    };
    //下一步
    MarketingRequireComponent.prototype.next = function () {
        var _this = this;
        var param = {};
        if (this.flagCopy) {
            param = {
                marketingCampaignId: this.marketingCampaignId,
                marketingCampaigntType: this.marketingCampaigntType,
                relationProductList: JSON.stringify(this.dataList),
                flagCopy: this.flagCopy,
            };
        }
        else {
            param = {
                marketingCampaignId: this.marketingCampaignId,
                marketingCampaigntType: this.marketingCampaigntType,
                relationProductList: JSON.stringify(this.dataList),
            };
        }
        // if (this.requestList.length > 0) {//有数据则调接口
        for (var _i = 0, _a = this.requestList; _i < _a.length; _i++) {
            var ind = _a[_i];
            if (ind['endtime'] == '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: ' 截至时间不能为空！' });
                return;
            }
            if (ind['disposeScheduleRequire'] == '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '进度要求不能为空！' });
                return;
            }
            if (ind['marketingSucRate'] == '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '营销成功率不能为空！' });
                return;
            }
        }
        this.requestList.forEach(function (element, i) {
            _this.requestList[i].endtime = moment__WEBPACK_IMPORTED_MODULE_3__(element.endtime).format("YYYY-MM-DD");
        });
        var param1 = {
            marketingCampaignId: this.marketingCampaignId,
            requireList: this.requestList,
        };
        this.marketingHttpService.createCampaignRequire(param1).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var paramSum = {
                    marketingCampaignId: _this.marketingCampaignId,
                    type: 'marking',
                    marketingCampaigntType: _this.marketingCampaigntType,
                };
                if (_this.isNext) {
                    _this.router.navigate(['/pages/tzb/custom/marketing/marketing-activite/marketing-activity-detail', paramSum]);
                }
                else {
                    _this.url = JSON.parse(_this.commfunc.getSessionDataCH('markingURL'));
                    var navUrl_1 = '';
                    var indexId_1 = '';
                    _this.url.forEach(function (element, index) {
                        if (element.label == "MarketingRequireComponent") {
                            navUrl_1 = _this.url[index + 1].url;
                            indexId_1 = _this.url[index + 1].index;
                        }
                    });
                    _this.router.navigate([navUrl_1, param]);
                    _this.commfunc.setSessionDataCH('index', indexId_1);
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
        // } 
        // else {//没数据直接跳下一步
        // 	let paramSum = {
        // 		marketingCampaignId: this.marketingCampaignId,
        // 		type: 'marking',
        // 		marketingCampaigntType: this.marketingCampaigntType,
        // 	}
        // 	if (this.isNext) {
        // 		this.router.navigate(['/pages/tzb/custom/marketing/marketing-activite/marketing-activity-detail', paramSum])
        // 	} else {
        // 		this.url = JSON.parse(this.commfunc.getSessionDataCH('markingURL'));
        // 		let navUrl = '';
        // 		let indexId = '';
        // 		this.url.forEach((element, index) => {
        // 			if (element.label == "MarketingRequireComponent") {
        // 				navUrl = this.url[index + 1].url;
        // 				indexId = this.url[index + 1].index;
        // 			}
        // 		});
        // 		this.router.navigate([navUrl, param]);
        // 		this.commfunc.setSessionDataCH('index', indexId)
        // 	}
        // }
    };
    //重置
    MarketingRequireComponent.prototype.rest = function () {
        this.requestList.forEach(function (element) {
            element.endtime = '';
            element.disposeScheduleRequire = '';
            element.marketingSucRate = '';
        });
    };
    //详情
    MarketingRequireComponent.prototype.echoClick = function () {
        var _this = this;
        this.marketingHttpService.queryMarketingCampaignById({ marketingCampaignId: this.marketingCampaignId }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var marketingParam = {
                    marketingObjectType: data.marketingObjectType,
                    exploreCondtionId: data.exploreCondtionId
                };
                _this.commfunc.setSessionDataCH('marketingParam', JSON.stringify(marketingParam));
                if (data.requireList) {
                    _this.requestList = data.requireList;
                    console.log(_this.requestList);
                    _this.requestList.forEach(function (element, i) {
                        if (element.marketingChannelTimeFrom) {
                            _this.requestList[i].endtime = new Date(element.endtime);
                        }
                    });
                }
                if (data.statusId == '3') { //状态为已发布进行中时不给修改
                    _this.showDisabled = true;
                }
                else {
                    _this.showDisabled = false;
                }
            }
        });
    };
    MarketingRequireComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'marketing-require',
            template: __webpack_require__(/*! ./marketing-require.component.html */ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-require/marketing-require.component.html"),
            styles: [__webpack_require__(/*! ./marketing-require.component.scss */ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-require/marketing-require.component.scss")],
            providers: [_http_marketing_http_service__WEBPACK_IMPORTED_MODULE_7__["MarketingHttpService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _http_marketing_http_service__WEBPACK_IMPORTED_MODULE_7__["MarketingHttpService"]])
    ], MarketingRequireComponent);
    return MarketingRequireComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-require/marketing-require.module.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-require/marketing-require.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: MarketingRequireModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingRequireModule", function() { return MarketingRequireModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _marketing_require_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marketing-require.component */ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-require/marketing-require.component.ts");
/* harmony import */ var _marketing_require_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marketing-require.routing */ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-require/marketing-require.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MarketingRequireModule = /** @class */ (function () {
    function MarketingRequireModule() {
    }
    MarketingRequireModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            //促销手段
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"],
                _marketing_require_routing__WEBPACK_IMPORTED_MODULE_6__["MarketingRequireRouting"],
            ],
            declarations: [
                _marketing_require_component__WEBPACK_IMPORTED_MODULE_5__["MarketingRequireComponent"]
            ],
            providers: []
        })
    ], MarketingRequireModule);
    return MarketingRequireModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-require/marketing-require.routing.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-require/marketing-require.routing.ts ***!
  \**************************************************************************************************************/
/*! exports provided: routes, MarketingRequireRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingRequireRouting", function() { return MarketingRequireRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marketing_require_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marketing-require.component */ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-require/marketing-require.component.ts");


var routes = [
    { path: '', component: _marketing_require_component__WEBPACK_IMPORTED_MODULE_1__["MarketingRequireComponent"] }
];
var MarketingRequireRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=marketing-require-marketing-require-module.js.map