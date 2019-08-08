(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marketing-channel-marketing-channel-module"],{

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

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/bean/marketing-channel.bean.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/bean/marketing-channel.bean.ts ***!
  \****************************************************************************************************************/
/*! exports provided: MarketingChannelBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingChannelBean", function() { return MarketingChannelBean; });
var MarketingChannelBean = /** @class */ (function () {
    function MarketingChannelBean() {
        this.marketingCampaignMap = {
            pushObject: '',
            personId: '',
            personName: '',
            limitOrg: '',
        };
    }
    return MarketingChannelBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/marketing-channel.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/marketing-channel.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\" style=\"padding:0\">\r\n    <header-title [Info]=\"'营销渠道配置'\"></header-title>\r\n    <!-- 任务类型为“信用卡直销”时，前台不展示接触式渠道，主动式渠道只能选择“推送到渠道客户” -->\r\n    <div *ngIf=\"marketingCampaigntType =='12'\">\r\n        <div class=\"ui-g-12\" style=\"padding:0\">\r\n            <div class=\"ui-g-6\">\r\n                <span style=\"font-weight:700;\">推送机构</span>\r\n            </div>\r\n        </div>\r\n        <!-- 推送结构 -->\r\n        <div class=\"ui-g-12\" style=\"padding:0\">\r\n            <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-2 right\">\r\n                    <span>推送机构：</span>\r\n                </div>\r\n                <div class=\"ui-g-2\">\r\n                    <div class=\"queryinputbtn\">\r\n                        <input class=\"queryinputOrg\" type=\"text\" pInputText disabled [(ngModel)]=\"limitOrg\">\r\n                        <div (click)=\"openOrgTreeClick()\" class=\"clickspan\">\r\n                            <a class=\"a-hand\">\r\n                                <span>...</span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- 交叉销售营销渠道 -->\r\n<div class=\"ui-g-12 module\" style=\"padding:0\" *ngIf=\"marketingCampaigntType =='12'\">\r\n    <div class=\"ui-g-12\" style=\"padding:0\">\r\n        <div class=\"ui-g-6\">\r\n            <span style=\"font-weight:700;\">营销渠道</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"padding:0\">\r\n        <div class=\"ui-g-2\">\r\n            <p-checkbox value=\"05\" label=\"客户经理\" [(ngModel)]=\"KJchecked\" (click)=\"pushRule('05')\"></p-checkbox>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\" style=\"padding:0\" *ngIf=\"marketingChannelBean.pushRules && marketingChannelBean.pushRules=='05'\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 right\">\r\n                <span appValidation>推送对象类型：</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <p-dropdown class=\"gundam-dropdown\" [options]=\"pushObj\" [(ngModel)]=\"marketingChannelBean.marketingCampaignMap.pushObject\"\r\n                    (onChange)=\"pushChange($event)\" [disabled]=\"showDisabled\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\"  *ngIf=\"marketingChannelBean.marketingCampaignMap.pushObject=='03'\">\r\n            <div class=\"ui-g-2 right\">\r\n                <span>\r\n                执行人工号：\r\n            </span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n\r\n                <div class=\"queryinputbtn1\">\r\n                    <input type=\"text\" pInputText readonly [(ngModel)]=\"marketingChannelBean.marketingCampaignMap.personId\" disabled class=\"queryinputOrg\"\r\n                    />\r\n                    <div class=\"clickspan\" (click)=\"executeNum()\">\r\n                        <a class=\"a-hand\">\r\n                            <span>...</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\"  *ngIf=\"marketingChannelBean.marketingCampaignMap.pushObject=='03'\">\r\n            <div class=\"ui-g-2 right\">\r\n                <span>\r\n                执行人姓名：\r\n            </span>\r\n            </div>\r\n            <div class=\"ui-g-2\" *ngIf=\"marketingChannelBean.marketingCampaignMap.pushObject=='03'\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"marketingChannelBean.marketingCampaignMap.personName\" disabled/>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"padding:0\">\r\n        <div class=\"ui-g-2 \">\r\n            <p-checkbox value=\"SF\" label=\"综合前端\" [(ngModel)]=\"SFchecked\" (click)=\"pushRule('SF')\"></p-checkbox>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12\" style=\"padding:0\" *ngIf=\"this.releaseMsgSF\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 right\" >\r\n                <span>营销渠道发布信息：</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"releaseMsgSFM\" placeholder=\"请填写该渠道营销话术\" (blur)=\"pushMsg('SF',releaseMsgSFM)\" [disabled]=\"showDisabled\"\r\n                />\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"ui-g-12\" style=\"padding:0\">\r\n        <div class=\"ui-g-2 \">\r\n            <p-checkbox value=\"24MB\" label=\"24小时移动营业厅\" [(ngModel)]=\"TYchecked\" (click)=\"pushRule('24MB')\"></p-checkbox>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12\" style=\"padding:0\" *ngIf=\"this.releaseMsgTB\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 right\">\r\n                <span>营销渠道发布信息：</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"releaseMsgTBM\" placeholder=\"请填写该渠道营销话术\" (blur)=\"pushMsg('24MB',releaseMsgTBM)\" [disabled]=\"showDisabled\"\r\n                />\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"ui-g-12\" style=\"padding:0\">\r\n        <div class=\"ui-g-2 \">\r\n            <p-checkbox value=\"NB\" label=\"网上银行\" [(ngModel)]=\"PBchecked\" (click)=\"pushRule('NB')\"></p-checkbox>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"padding:0\"  *ngIf=\"this.releaseMsgPB\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 right\">\r\n                <span>营销渠道发布信息：</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"releaseMsgPBM\" placeholder=\"请填写该渠道营销话术\" (blur)=\"pushMsg('NB',releaseMsgPBM)\" [disabled]=\"showDisabled\"\r\n                />\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12\" style=\"padding:0\">\r\n        <div class=\"ui-g-2 \">\r\n            <p-checkbox value=\"MB\" label=\"手机银行\" [(ngModel)]=\"checked\" (click)=\"pushRule('MB')\"></p-checkbox>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"padding:0\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 right\" *ngIf=\"this.releaseMsgMB\">\r\n                <span>营销渠道发布信息：</span>\r\n            </div>\r\n            <div class=\"ui-g-2\" *ngIf=\"this.releaseMsgMB\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"releaseMsgMBM\" placeholder=\"请填写该渠道营销话术\" (blur)=\"pushMsg('MB',releaseMsgMBM)\" [disabled]=\"showDisabled\"\r\n                />\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"ui-g-12 btn-switch\">\r\n        <button pButton type=\"button\" (click)=\"prev()\" label=\"上一步\"></button>\r\n        <button pButton type=\"button\" (click)=\"next()\" label=\"下一步\"></button>\r\n        <span class=\"icoColor\" (click)=\"rest()\">重置</span>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 module\" style=\"padding:0\" *ngIf=\"marketingCampaigntType !='12'\">\r\n    <!-- <header-title [Info]=\"'营销渠道配置'\"></header-title> -->\r\n    <!-- 任务类型为“信用卡直销”时，前台不展示接触式渠道，主动式渠道只能选择“推送到渠道客户” -->\r\n    <div *ngIf=\"marketingCampaigntType!='16'\">\r\n        <div class=\"ui-g-12\" style=\"padding:0\">\r\n            <div class=\"ui-g-6\">\r\n                <span style=\"font-weight:700;\">接触式渠道</span>\r\n            </div>\r\n            <!-- <div class=\"ui-g-6 new-add\">\r\n                <span class=\"icoColor\" (click)=\"doAdd('cantact')\">新增</span>\r\n            </div> -->\r\n        </div>\r\n        <!-- 接触式 -->\r\n        <div class=\"ui-g-12\" style=\"padding:0\">\r\n            <p-dataTable [value]=\"passiveChannelList\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" scrollWidth=\"100%\">\r\n                <p-column field=\"passiveChannelId\" header=\"营销渠道\" [style]=\"{'width':'18%'}\">\r\n                    <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                        <p-dropdown [options]=\"PassiveChannelId\" [(ngModel)]=\"car.passiveChannelId\" [disabled]=\"showDisabled\"></p-dropdown>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"releaseMsg\" header=\"营销渠道发布信息\">\r\n                    <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                        <input type=\"text\" pInputText placeholder=\"请填写该渠道营销话术\" [(ngModel)]=\"car.releaseMsg\" [disabled]=\"showDisabled\" />\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"\" [style]=\"{'width':'18%'}\">\r\n                    <ng-template pTemplate=\"header\">\r\n                        <span>操作</span>\r\n                        <img src=\"../../../../../../../assets/layout/images/add.png\" alt=\"\" (click)=\"doAdd('cantact')\">\r\n                    </ng-template>\r\n                    <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                        <span (click)=\"toDelete(i,'cantact')\" class=\"minusIco\">删除</span>\r\n                    </ng-template>\r\n                </p-column>\r\n            </p-dataTable>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- 主动式 -->\r\n<div class=\"ui-g-12 module\" style=\"padding:0\" *ngIf=\"marketingCampaigntType !='12'\">\r\n    <div class=\"ui-g-12 active\" style=\"padding:0\">\r\n        <div class=\"ui-g-12\" style=\"padding:0\">\r\n            <div class=\"ui-g-6\">\r\n                <span style=\"font-weight:700;\">主动式渠道</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\" style=\"padding:0\">\r\n            <div class=\"ui-g-4 rask-rule\">\r\n                <span>\r\n                    任务推送规则：\r\n                </span>\r\n            </div>\r\n            <div class=\"ui-g-8\" style=\"padding:0;\">\r\n                <div class=\"ui-g-4\" *ngIf=\"marketingCampaigntType=='01'||marketingCampaigntType=='12'||marketingCampaigntType=='13'\">\r\n                    <p-dropdown class=\"gundam-dropdown\" [options]=\"raskRule\" [(ngModel)]=\"marketingChannelBean.pushRules\" (onChange)=\"raskChange($event)\"\r\n                        [disabled]=\"showDisabled\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-4\" *ngIf=\"marketingCampaigntType=='02'||marketingCampaigntType=='08'\">\r\n                    <p-dropdown class=\"gundam-dropdown\" [options]=\"raskRule2\" [(ngModel)]=\"marketingChannelBean.pushRules\" (onChange)=\"raskChange($event)\"\r\n                        [disabled]=\"showDisabled\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-4\" *ngIf=\"marketingCampaigntType=='16'\">\r\n                    <p-dropdown class=\"gundam-dropdown\" [options]=\"raskRule3\" [(ngModel)]=\"marketingChannelBean.pushRules\" (onChange)=\"raskChange($event)\"\r\n                        [disabled]=\"showDisabled\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-2\">\r\n                    <button pButton type=\"button\" label=\"岗位选择\" (click)=\"postSelect()\" *ngIf=\"marketingChannelBean.pushRules=='02'\" [disabled]=\"showDisabled\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"marketingChannelBean.pushRules=='02'\" style=\"padding:0\">\r\n        <p-dataTable [value]=\"positionList\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" scrollWidth=\"100%\">\r\n            <p-column field=\"positionId\" header=\"岗位编号\" [style]=\"{'width':'18%'}\"></p-column>\r\n            <p-column field=\"positionName\" header=\"岗位名称\"></p-column>\r\n            <p-column field=\"positionDescription\" header=\"岗位描述\"></p-column>\r\n            <!-- <p-column header=\"操作\" field=\"\" [style]=\"{'width':'18%'}\">\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)=\"toDelete(item,'post')\" class=\"minusIco\">删除</span>\r\n                </ng-template>\r\n            </p-column> -->\r\n            <p-column header=\"\" field=\"\" [style]=\"{'width':'18%'}\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <span class=\"deleteOpera\">操作</span>\r\n                </ng-template>\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)=\"toDelete(item,'post')\" class=\"minusIco\">删除</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <!-- 渠道（客户） -->\r\n    <!-- <div class=\"ui-g-12\" style=\"text-align:right;padding-top:0;\" *ngIf=\"marketingChannelBean.pushRules=='03'\">\r\n        <span class=\"icoColor\" (click)=\"doAdd('channel')\">新增</span>\r\n    </div> -->\r\n    <div class=\"ui-g-12\" *ngIf=\"marketingChannelBean.pushRules=='03'\" style=\"padding:0\">\r\n        <p-dataTable [value]=\"channelList\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" class=\"table\">\r\n            <p-column field=\"channelType\" header=\"渠道\" [style]=\"{'width':'18%'}\">\r\n                <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                    <p-dropdown class=\"gundam-dropdown\" [options]=\"seqFlag\" [(ngModel)]=\"car.channelType\" [disabled]=\"showDisabled\"></p-dropdown>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"消息模板\">\r\n                <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span (click)=\"selectModel(i,'3')\" style=\"color: #19b0c8; cursor: pointer;\">短信通知模板</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"messageName\" header=\" 模板名称\">\r\n                <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                    <input type=\"text\" pInputText readonly [(ngModel)]=\"car.messageName\" />\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"计划推送时间\">\r\n                <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                    <p-calendar [showIcon]=\"true\" [disabled]=\"showDisabled\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\"\r\n                        dateFormat=\"yy-mm-dd\" [locale]=\"ch\" class=\"calendar-date\" [showOtherMonths]=\"false\" [showTime]=\"true\"\r\n                        [(ngModel)]=\"car.marketingChannelTimeFrom\" hourFormat='24'>\r\n                    </p-calendar>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"操作\" field=\"\" [style]=\"{'width':'18%'}\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <span>操作</span>\r\n                    <img src=\"../../../../../../../assets/layout/images/add.png\" alt=\"\" (click)=\"doAdd('channel')\">\r\n                </ng-template>\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)=\"toDelete(i,'channel')\" class=\"minusIco\">删除</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <!-- 据客户所属机构进行分配 据客户所属机构(部门)指定分配到岗位-->\r\n    <div class=\"ui-g-12\" *ngIf=\"marketingChannelBean.pushRules=='04'\" style=\"padding:0\">\r\n        <div class=\"ui-g-6\">\r\n            <span>根据客户所属机构(部门)指定分配到岗位</span>\r\n        </div>\r\n        <!-- <div class=\"ui-g-6\" style=\"text-align:right\">\r\n            <span class=\"icoColor\" (click)=\"doAdd('postOrg')\">新增</span>\r\n        </div> -->\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"marketingChannelBean.pushRules=='04'\" style=\"padding:0\">\r\n        <p-dataTable [value]=\"positionListOrg\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" scrollWidth=\"100%\" class=\"table\">\r\n            <p-column field=\"\" header=\"客户所属机构\" [style]=\"{'width':'18%'}\">\r\n                <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                    <div class=\"queryinputbtn\">\r\n                        <input type=\"text\" pInputText readonly [(ngModel)]=\"car.custMajorName\" disabled class=\"queryinputOrg\" />\r\n                        <div class=\"clickspan\" (click)=\"orgClick('postOrg',i,'1')\">\r\n                            <a class=\"a-hand\">\r\n                                <span>...</span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"positionName\" header=\"岗位名称\">\r\n                <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span class=\"queryinputbtn2\">\r\n                        <input type=\"text\" pInputText readonly [(ngModel)]=\"car.positionName\" disabled class=\"queryinputOrg\" />\r\n                        <span class=\"clickspan1\" (click)=\"postOrg(i)\">\r\n                            <a class=\"a-hand\">\r\n                                <span>...</span>\r\n                    </a>\r\n                    </span>\r\n                    </span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"positionDescription\" header=\"岗位描述\">\r\n                <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span class=\"postDes\">\r\n                        <input type=\"text\" pInputText readonly [(ngModel)]=\"car.positionDescription\" />\r\n                    </span>\r\n                </ng-template>\r\n            </p-column>\r\n\r\n            <p-column header=\"操作\" field=\"\" [style]=\"{'width':'18%'}\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <span>操作</span>\r\n                    <img src=\"../../../../../../../assets/layout/images/add.png\" alt=\"\" (click)=\"doAdd('postOrg')\">\r\n                </ng-template>\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)=\"toDelete(i,'postOrg')\" class=\"minusIco\">删除</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <!-- 据客户所属机构(部门)指定分配到渠道 -->\r\n    <div class=\"ui-g-12\" *ngIf=\"marketingChannelBean.pushRules=='04'\" style=\"padding:0\">\r\n        <div class=\"ui-g-6\">\r\n            <span>根据客户所属机构(部门)指定分配到渠道</span>\r\n        </div>\r\n        <!-- <div class=\"ui-g-6\" style=\"text-align:right\">\r\n            <span class=\"icoColor\" (click)=\"doAdd('channelTypeOrg')\">新增</span>\r\n        </div> -->\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"marketingChannelBean.pushRules=='04'\" style=\"padding:0\">\r\n        <p-dataTable [value]=\"channelOrgList\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" class=\"table\">\r\n            <p-column field=\"\" header=\"客户所属机构\" [style]=\"{'width':'18%'}\">\r\n                <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                    <div class=\"queryinputbtn\">\r\n                        <input type=\"text\" pInputText [(ngModel)]=\"car.channelName\" disabled class=\"queryinputOrg\" />\r\n                        <div class=\"clickspan\" (click)=\"orgClick('channelTypeOrg',i,'2')\">\r\n                            <a class=\"a-hand\">\r\n                                <span>...</span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"channelType\" header=\"渠道\">\r\n                <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                    <p-dropdown class=\"gundam-dropdown\" [options]=\"seqFlag\" [(ngModel)]=\"car.channelType\" [disabled]=\"showDisabled\"></p-dropdown>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"消息模板\">\r\n                <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                    <span (click)=\"selectModel(i,'4')\" style=\"color: #19b0c8; cursor: pointer;\">短信通知模板</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"messageName\" header=\" 模板名称\">\r\n                <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                    <input type=\"text\" pInputText readonly [(ngModel)]=\"car.messageName\" />\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"计划推送时间\">\r\n                <ng-template let-i=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n                    <p-calendar [showIcon]=\"true\" [disabled]=\"showDisabled\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\"\r\n                        dateFormat=\"yy-mm-dd\" [locale]=\"ch\" class=\"calendar-date\" [showOtherMonths]=\"false\" [showTime]=\"true\"\r\n                        [(ngModel)]=\"car.marketingChannelTimeFrom\" hourFormat='24'>\r\n                    </p-calendar>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"操作\" field=\"\" [style]=\"{'width':'18%'}\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <span>操作</span>\r\n                    <img src=\"../../../../../../../assets/layout/images/add.png\" alt=\"\" (click)=\"doAdd('channelTypeOrg')\">\r\n                </ng-template>\r\n                <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)=\"toDelete(i,'channelTypeOrg')\" class=\"minusIco\">删除</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <!-- 自定义执行人分配 -->\r\n    <div class=\"ui-g-12\" *ngIf=\"marketingChannelBean.pushRules=='05'\" style=\"padding:0\">\r\n        <div class=\"ui-g-4 rask-rule\">\r\n            <span>\r\n                推送对象类型：\r\n            </span>\r\n        </div>\r\n        <div class=\"ui-g-8\" style=\"padding:0;\">\r\n            <div class=\"ui-g-4\">\r\n                <p-dropdown class=\"gundam-dropdown\" [options]=\"pushObj\" [(ngModel)]=\"marketingChannelBean.marketingCampaignMap.pushObject\"\r\n                    (onChange)=\"pushChange($event)\" [disabled]=\"showDisabled\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 rask-rule\" *ngIf=\"marketingChannelBean.marketingCampaignMap.pushObject=='03'\">\r\n            <span>\r\n                执行人工号：\r\n            </span>\r\n        </div>\r\n        <div class=\"ui-g-8\" style=\"padding:0;\" *ngIf=\"marketingChannelBean.marketingCampaignMap.pushObject=='03'\">\r\n            <div class=\"ui-g-4\">\r\n                <div class=\"queryinputbtn1\">\r\n                    <input type=\"text\" pInputText readonly [(ngModel)]=\"marketingChannelBean.marketingCampaignMap.personId\" disabled class=\"queryinputOrg\"\r\n                    />\r\n                    <div class=\"clickspan\" (click)=\"executeNum()\">\r\n                        <a class=\"a-hand\">\r\n                            <span>...</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 rask-rule\" *ngIf=\"marketingChannelBean.marketingCampaignMap.pushObject=='03'\">\r\n            <span>\r\n                执行人姓名：\r\n            </span>\r\n        </div>\r\n        <div class=\"ui-g-8\" style=\"padding:0;\" *ngIf=\"marketingChannelBean.marketingCampaignMap.pushObject=='03'\">\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"marketingChannelBean.marketingCampaignMap.personName\" disabled/>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn-switch\">\r\n        <button pButton type=\"button\" (click)=\"prev()\" label=\"上一步\"></button>\r\n        <button pButton type=\"button\" (click)=\"next()\" label=\"下一步\"></button>\r\n        <span class=\"icoColor\" (click)=\"rest()\">重置</span>\r\n    </div>\r\n</div>\r\n<!-- 岗位选择 -->\r\n<p-dialog *ngIf=\"postDisplay\" header=\"岗位选择\" [(visible)]=\"postDisplay\" class=\"select-tree\" [positionTop]=10>\r\n    <select-post (outValue)=\"postValue($event)\"></select-post>\r\n</p-dialog>\r\n<!-- 短信 -->\r\n<p-dialog *ngIf=\"selectmodel\" [(visible)]=\"selectmodel\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 class=\"select-tree\">\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <app-note-model (outValue)=\"noteValue($event)\"></app-note-model>\r\n    </div>\r\n</p-dialog>\r\n<!-- 客户所属机构 -->\r\n<p-dialog [(visible)]=\"orgTreeDisplay\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>机构树</p-header>\r\n    <org-mutil-tree-component *ngIf=\"orgTreeDisplay\" (selectAllValue)=\"treeCall($event)\"></org-mutil-tree-component>\r\n    <!-- <org-mutil-tree-component *ngIf=\"marketingCampaigntType =='12' && orgTreeDisplay\" (selectAllValue)=\"intreeCall($event)\"></org-mutil-tree-component> -->\r\n</p-dialog>\r\n<!-- 员工 -->\r\n<p-dialog [(visible)]=\"personPage\" modal=\"modal\" [positionTop]=10 class=\"my-cust-overf\">\r\n    <p-header>员工列表</p-header>\r\n    <app-query-user-list *ngIf=\"personPage\" [in-value]=\"userInValue\" (outValue)=\"perInfor($event)\"></app-query-user-list>\r\n</p-dialog>\r\n<!-- 机构树 -->\r\n<p-dialog class=\"gundam-display\" *ngIf=\"orgTreeDisplays\" [(visible)]=\"orgTreeDisplays\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10\r\n    (onHide)=\"onHideClose()\">\r\n    <p-header>创建机构</p-header>\r\n    <!-- <org-mutil-all-tree-component (selectAllValue)=\"treeCall($event)\"></org-mutil-all-tree-component> -->\r\n    <org-tree-component (outValue)=\"treeCalls($event)\"></org-tree-component>\r\n</p-dialog>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/marketing-channel.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/marketing-channel.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rask-rule,\n.new-add {\n  text-align: right; }\n\n.right {\n  text-align: right;\n  width: 14%; }\n\n.btn-switch {\n  text-align: center; }\n\n:host/deep/ .ui-datatable-scrollable-body {\n  overflow: inherit; }\n\n.queryinputbtn {\n  width: 100%;\n  float: left;\n  display: flex; }\n\n.queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n\n.queryinputbtn .clickspan {\n    width: 14%;\n    height: 25px; }\n\n.queryinputbtn1 {\n  width: 100%;\n  float: left;\n  display: flex; }\n\n.queryinputbtn1 .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n\n.queryinputbtn1 .clickspan {\n    width: 14%;\n    height: 23px; }\n\n.queryinputbtn2 {\n  display: inline-block;\n  width: 54%; }\n\n.queryinputbtn2 .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n\n.queryinputbtn2 .clickspan1 {\n    display: inline-block;\n    width: 13%;\n    height: 25px;\n    margin-left: -5px;\n    background-color: #fbfbf7;\n    line-height: 25px;\n    border-radius: 0 3px 3px 0;\n    border: 1px solid #bdbdbd; }\n\n.postDes {\n  display: inline-block;\n  width: 54%; }\n\n.deleteOpera {\n  margin-right: 30px !important; }\n\n:host/deep/ .ui-calendar.ui-calendar-w-btn input {\n  display: inline-block;\n  height: 25px; }\n\n:host/deep/ .select-tree .ui-dialog .ui-dialog-content {\n  height: 90% !important;\n  padding-top: 0;\n  padding-bottom: 0; }\n\nimg {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  color: #000;\n  margin-left: 10px;\n  cursor: pointer;\n  float: right; }\n\n.temp-name {\n  display: inline-block;\n  width: 71px;\n  height: 28px;\n  text-align: center;\n  line-height: 28px;\n  white-space: nowrap;\n  color: #fff;\n  background-color: #f8a900;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  border-radius: 3px;\n  font-size: 14px; }\n\n.temp-name:hover {\n  background-color: #e39b00; }\n\n:host/deep/ .minusIco {\n  margin-left: 43px; }\n\n:host/deep/ .ui-dropdown .ui-dropdown-label.ui-inputtext {\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvbWFya2V0aW5nLWFjdGl2aXRlL21hcmtldGluZy1jaGFubmVsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcbWFya2V0aW5nXFxtYXJrZXRpbmctYWN0aXZpdGVcXG1hcmtldGluZy1jaGFubmVsXFxtYXJrZXRpbmctY2hhbm5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxpQkFBaUI7RUFDakIsVUFBVSxFQUFBOztBQUVkO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBSGpCO0lBS1Esa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsMEJBQTBCLEVBQUE7O0FBUmxDO0lBV1EsVUFBVTtJQUNWLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFIakI7SUFLUSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQiwwQkFBMEIsRUFBQTs7QUFSbEM7SUFXUSxVQUFVO0lBQ1YsWUFBWSxFQUFBOztBQUlwQjtFQUNJLHFCQUFxQjtFQUNyQixVQUFVLEVBQUE7O0FBRmQ7SUFJUSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQiwwQkFBMEIsRUFBQTs7QUFQbEM7SUFVUSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIseUJBQXlCLEVBQUE7O0FBSWpDO0VBQ0kscUJBQXFCO0VBQ3JCLFVBQVUsRUFBQTs7QUFFZDtFQUVJLDZCQUE2QixFQUFBOztBQUVqQztFQUNJLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUVaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBR2hCO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvbWFya2V0aW5nLWFjdGl2aXRlL21hcmtldGluZy1jaGFubmVsL21hcmtldGluZy1jaGFubmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhc2stcnVsZSxcclxuLm5ldy1hZGQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDE0JTtcclxufVxyXG4uYnRuLXN3aXRjaCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUtc2Nyb2xsYWJsZS1ib2R5IHtcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG59XHJcblxyXG4ucXVlcnlpbnB1dGJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5xdWVyeWlucHV0T3JnIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgICAgICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNsaWNrc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5xdWVyeWlucHV0YnRuMSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5xdWVyeWlucHV0T3JnIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgICAgICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNsaWNrc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5xdWVyeWlucHV0YnRuMiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTQlO1xyXG4gICAgLnF1ZXJ5aW5wdXRPcmcge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcclxuICAgICAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2xpY2tzcGFuMSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMyU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZjc7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcclxuICAgIH1cclxufVxyXG5cclxuLnBvc3REZXMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDU0JTtcclxufVxyXG4uZGVsZXRlT3BlcmEge1xyXG4gICAgLy8gZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG46aG9zdC9kZWVwLyAudWktY2FsZW5kYXIudWktY2FsZW5kYXItdy1idG4gaW5wdXQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuc2VsZWN0LXRyZWUgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDo0M3g7XHJcbn1cclxuLnRlbXAtbmFtZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA3MXB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhhOTAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4udGVtcC1uYW1lOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzOWIwMDtcclxufVxyXG46aG9zdC9kZWVwLyAubWludXNJY297XHJcbiAgICBtYXJnaW4tbGVmdDogNDNweDtcclxufVxyXG46aG9zdC9kZWVwLyAudWktZHJvcGRvd24gLnVpLWRyb3Bkb3duLWxhYmVsLnVpLWlucHV0dGV4dHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/marketing-channel.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/marketing-channel.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: MarketingChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingChannelComponent", function() { return MarketingChannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_marketing_channel_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bean/marketing-channel.bean */ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/bean/marketing-channel.bean.ts");
/* harmony import */ var _http_marketing_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../http/marketing.http.service */ "./src/app/pages/tzb/custom/marketing/http/marketing.http.service.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
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
 * 营销渠道
 */
var MarketingChannelComponent = /** @class */ (function () {
    function MarketingChannelComponent(router, routeInfo, commfunc, marketingHttpService, confirmationService, httpService) {
        this.router = router;
        this.routeInfo = routeInfo;
        this.commfunc = commfunc;
        this.marketingHttpService = marketingHttpService;
        this.confirmationService = confirmationService;
        this.httpService = httpService;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"];
        this.marketingChannelBean = new _bean_marketing_channel_bean__WEBPACK_IMPORTED_MODULE_7__["MarketingChannelBean"];
        this.PassiveChannelId = []; //渠道标识
        this.passiveChannelList = [];
        this.postDisplay = false;
        this.selectmodel = false;
        this.releaseMsgTB = false;
        this.releaseMsgSF = false;
        this.releaseMsgMB = false;
        this.releaseMsgPB = false;
        this.checked = [];
        this.positionList = []; //分配到岗位
        this.channelList = []; // 渠道（客户）
        this.positionListOrg = []; //据客户所属机构(部门)指定分配到岗位
        this.channelOrgList = []; //据客户所属机构(部门)指定分配到渠道
        this.orgTreeDisplay = false;
        this.orgTreeDisplays = false;
        this.raskRule = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["CALENDAR_CN"];
        this.seqFlag = [];
        this.custMajorName = "";
        this.orgFlag = '';
        this.noteFlag = '';
        this.pushObj = [];
        this.activiteData = {}; //接收详情数据
        this.personPage = false;
        this.dataList = [];
        this.url = [];
        this.isNext = false;
        this.arrPost = []; //所属机构岗位
        this.arrChannel = []; //所属机构渠道
        this.showDisabled = false;
        this.raskRule2 = [];
        this.raskRule3 = [];
        this.raskRule4 = [];
        this.releaseMsgTBM = '';
        this.releaseMsgMBM = '';
        this.releaseMsgSFM = '';
        this.releaseMsgPBM = '';
        this.codeValues(); //调用方法，获取全部码值
        this.PassiveChannelId = this.code['PassiveChannelId']; //渠道标识
        this.raskRule = this.code['RASKRULE']; //任务推送规则
        this.seqFlag = this.code['SEQFlAGS']; //营销渠道标识
        this.raskRule2 = this.code['RASKRULE2'];
        this.pushObj = this.code['pushObj']; //推送对象
        this.raskRule3 = this.code['RaskRule3']; //只能选择推送到渠道客户
        this.raskRule4 = this.code['RASKRULE4']; //只有自定义执行人分配（客户经理）
    }
    MarketingChannelComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.passiveChannelList = [];
        });
        this.orgId = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.orgId; //任职机构
        if (this.routeInfo.snapshot.params['marketingCampaignId']) {
            this.marketingCampaignId = this.routeInfo.snapshot.params['marketingCampaignId'];
            this.batchId = this.routeInfo.snapshot.params['batchId'];
            this.secBatchId = this.routeInfo.snapshot.params['secBatchId'];
            this.dataSource = this.routeInfo.snapshot.params['dataSource'];
        }
        // this.deId=this.routeInfo.snapshot.params['deId'];
        this.marketingCampaigntType = this.routeInfo.snapshot.params['marketingCampaigntType']; //营销活动id
        if (this.marketingCampaigntType && this.marketingCampaigntType != '16' && this.marketingCampaigntType != '12') {
            this.marketingChannelBean.pushRules = this.raskRule[0].value;
        }
        else if (this.marketingCampaigntType && this.marketingCampaigntType == '12') {
            this.marketingChannelBean.pushRules = '';
        }
        else {
            this.marketingChannelBean.pushRules = this.raskRule3[0].value;
        }
        this.flagCopy = this.routeInfo.snapshot.params['flagCopy']; //复制和修改的标识		
        this.url = JSON.parse(this.commfunc.getSessionDataCH('markingURL'));
        this.url.forEach(function (element, index) {
            if (element.label == "MarketingChannelComponent") {
                if (index + 1 == _this.url.length) { //判断是最后一个
                    _this.isNext = true;
                }
            }
        });
        if (this.marketingCampaignId) {
            this.echoClick();
        }
        //任务类型为“信用卡直销”时，前台不展示接触式渠道，主动式渠道只能选择“推送到渠道客户”
        // if (this.marketingCampaigntType && this.marketingCampaigntType == '16') {
        // 	this.marketingChannelBean.pushRules = '03';
        // }
        // if (this.flagCopy) {//修改或复制
        // 	this.activiteData = JSON.parse(this.routeInfo.snapshot.params['activiteData']);//接收详情的数据
        // 	this.marketingChannelBean = this.activiteData;
        // 	this.passiveChannelList = this.marketingChannelBean.passiveChannelList;
        // 	if (this.marketingChannelBean.pushRules == '02') {//岗位
        // 		if (this.activiteData.positionList) {
        // 			this.positionList = this.marketingChannelBean.positionList;
        // 		}
        // 	} else if (this.marketingChannelBean.pushRules == '03') {
        // 		if (this.marketingChannelBean.channelList) {//渠道
        // 			this.channelList = this.marketingChannelBean.channelList;
        // 			this.channelList.forEach((element, i) => {
        // 				if (element.marketingChannelTimeFrom) {
        // 					this.channelList[i].marketingChannelTimeFrom = new Date(element.marketingChannelTimeFrom);
        // 				}
        // 			});
        // 		}
        // 	} else if (this.marketingChannelBean.pushRules == '04') {//根据岗位
        // 		if (this.activiteData.positionList) {
        // 			this.positionListOrg = this.marketingChannelBean.positionList;
        // 		}
        // 		if (this.marketingChannelBean.channelList) {//根据渠道
        // 			this.channelOrgList = this.marketingChannelBean.channelList;
        // 			this.channelOrgList.forEach((element, i) => {
        // 				if (element.marketingChannelTimeFrom) {
        // 					this.channelOrgList[i].marketingChannelTimeFrom = new Date(element.marketingChannelTimeFrom);
        // 				}
        // 			});
        // 		}
        // 	} else if (this.marketingChannelBean.pushRules == '05' || this.marketingChannelBean.pushRules == '') {//自定义执行人分配
        // 		if (this.marketingChannelBean.marketingCampaignMap == null) {
        // 			this.marketingChannelBean.marketingCampaignMap = {};
        // 		}
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
    MarketingChannelComponent.prototype.pushRule = function (item) {
        if (this.checked == '') {
            this.checked[0] = item;
        }
        else {
            debugger;
            var i = 0;
            var length_1 = this.checked.length;
            for (i; i < this.checked.length; i++) {
                if (this.checked[i] == item) {
                    for (var j = i; j < this.checked.length; j++) {
                        if (this.checked[j + 1]) {
                            this.checked[j] = this.checked[j + 1];
                        }
                    }
                    this.checked.length--;
                    break;
                }
            }
            if (i == length_1) {
                this.checked[this.checked.length] = item;
            }
        }
        console.log(this.checked);
        this.releaseMsgTB = false;
        this.releaseMsgMB = false;
        this.releaseMsgSF = false;
        this.releaseMsgPB = false;
        if (item == '05') {
            this.marketingChannelBean.marketingCampaignMap.pushObject = '';
            this.marketingChannelBean.marketingCampaignMap.personId = '';
            this.marketingChannelBean.marketingCampaignMap.personName = '';
        }
        if (item == '24MB') {
            this.releaseMsgTBM = '';
        }
        if (item == 'MB') {
            this.releaseMsgMBM = '';
        }
        if (item == 'SF') {
            this.releaseMsgSFM = '';
        }
        if (item == 'NB') {
            this.releaseMsgPBM = '';
        }
        this.passiveChannelList = [];
        this.marketingChannelBean.pushRules = '';
        for (var _i = 0, _a = this.checked; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i == '05') {
                this.marketingChannelBean.pushRules = '05';
            }
            else {
                var releaseMsgPush = void 0;
                if (i == '24MB') {
                    this.releaseMsgTB = true;
                    releaseMsgPush = this.releaseMsgTBM;
                }
                if (i == 'MB') {
                    this.releaseMsgMB = true;
                    releaseMsgPush = this.releaseMsgMBM;
                }
                if (i == 'SF') {
                    this.releaseMsgSF = true;
                    releaseMsgPush = this.releaseMsgSFM;
                }
                if (i == 'NB') {
                    this.releaseMsgPB = true;
                    releaseMsgPush = this.releaseMsgPBM;
                }
                var aa = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.passiveChannelList);
                aa.push({
                    passiveChannelId: i, releaseMsg: releaseMsgPush
                });
                this.passiveChannelList = aa;
            }
        }
        console.log(this.marketingChannelBean.pushRules);
    };
    MarketingChannelComponent.prototype.pushMsg = function (item, value) {
        console.log(item);
        console.log(value);
        for (var _i = 0, _a = this.passiveChannelList; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.passiveChannelId == item) {
                i.releaseMsg = value;
            }
        }
        console.log(this.passiveChannelList);
    };
    // 推送结构
    MarketingChannelComponent.prototype.perShow = function () {
        this.orgTreeDisplay = true;
    };
    //码值
    MarketingChannelComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //短信模板
    MarketingChannelComponent.prototype.selectModel = function (i, num) {
        this.headerTitle = '短信模板';
        this.noteFlag = num;
        this.selectmodel = true;
        this.allUpdate = i; //赋值获取索引
    };
    //新增
    MarketingChannelComponent.prototype.doAdd = function (param) {
        if (param == 'cantact') {
            //接触式渠道
            var aa = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.passiveChannelList);
            aa.push({
                passiveChannelId: '', releaseMsg: ''
            });
            this.passiveChannelList = aa;
        }
        else if (param == 'postAdd') {
            //主动式渠道-分配给岗位
            var aa = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.positionList);
            aa.push({
                positionId: '', positionName: '', positionDescription: ''
            });
            this.positionList = aa;
        }
        else if (param == 'channel') {
            //分配给渠道客户
            var aa = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.channelList);
            aa.push({
                channelType: '', messageName: '', marketingChannelTimeFrom: '', messageId: '',
            });
            this.channelList = aa;
        }
        else if (param == 'postOrg') { //据客户所属机构(部门)指定分配到岗位
            var aa = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.positionListOrg);
            aa.push({
                positionDescription: "", positionId: "", positionName: "", custOrgList: []
            });
            this.positionListOrg = aa;
        }
        else if (param == 'channelTypeOrg') {
            var aa = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.channelOrgList);
            aa.push({
                channelType: '', messageName: '', marketingChannelTimeFrom: '', messageId: '', custOrgList: []
            });
            this.channelOrgList = aa;
        }
    };
    //删除
    MarketingChannelComponent.prototype.toDelete = function (i, param) {
        if (param == 'cantact') { //接触式渠道
            this.passiveChannelList.splice(i, 1);
            this.passiveChannelList = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.passiveChannelList);
        }
        else if (param == 'post') { //主动式渠道-分配给岗位
            this.positionList.splice(i, 1);
            this.positionList = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.positionList);
        }
        else if (param == 'channel') { //分配给渠道客户
            this.channelList.splice(i, 1);
            this.channelList = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.channelList);
        }
        else if (param == 'postOrg') { //据客户所属机构(部门)指定分配到岗位
            this.positionListOrg.splice(i, 1);
            this.positionListOrg = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.positionListOrg);
        }
        else if (param == 'channelTypeOrg') {
            this.channelOrgList.splice(i, 1);
            this.channelOrgList = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.channelOrgList);
        }
    };
    //营销渠道-主动式渠道岗位选择
    MarketingChannelComponent.prototype.postSelect = function () {
        this.postDisplay = true;
    };
    //含有机构的岗位选择
    MarketingChannelComponent.prototype.postOrg = function (i) {
        this.postDisplay = true;
        this.indexPost = i;
    };
    //短信的回显模板名称
    MarketingChannelComponent.prototype.noteValue = function (event) {
        if (event == false) {
            this.selectmodel = event;
        }
        else {
            this.selectmodel = false;
            if (this.noteFlag == '3') {
                if (event[0].templateId) {
                    this.channelList[this.allUpdate]['messageName'] = event[0].templateName;
                    this.channelList[this.allUpdate]['messageId'] = event[0].templateId;
                }
            }
            else if (this.noteFlag == '4') {
                if (event[0].templateId) {
                    this.channelOrgList[this.allUpdate]['messageName'] = event[0].templateName;
                    this.channelOrgList[this.allUpdate]['messageId'] = event[0].templateId;
                }
            }
        }
    };
    //岗位选择回显的数据
    MarketingChannelComponent.prototype.postValue = function (event) {
        if (event == false) {
            this.postDisplay = event;
        }
        else {
            this.postDisplay = false;
            if (this.marketingChannelBean.pushRules == '02') {
                this.positionList = event;
            }
            else if (this.marketingChannelBean.pushRules == '04') {
                for (var _i = 0, event_1 = event; _i < event_1.length; _i++) {
                    var item = event_1[_i];
                    this.positionListOrg[this.indexPost].positionDescription = item.positionDescription;
                    this.positionListOrg[this.indexPost].positionId = item.positionId;
                    this.positionListOrg[this.indexPost].positionName = item.positionName;
                }
            }
        }
    };
    // intreeCall(param) {
    // 	debugger;
    // 	console.log(param);
    // 	this.orgTreeDisplay = false;
    // 	this.limitOrg = param.orgName;
    // 	console.log(this.limitOrg);
    // }
    // 浏览器滚动条状态 - 滚动
    MarketingChannelComponent.prototype.onHideClose = function () {
        document.body.style.overflow = 'auto';
    };
    // 交叉销售机构初始化
    MarketingChannelComponent.prototype.startOrg = function (item) {
        var _this = this;
        var param = {
            relationshipType: '0',
            orgId: item,
        };
        this.httpService.queryOrgByOrgIdAndRelationship(param).subscribe(function (res) {
            if (res.returnCode.code == "success") {
                _this.limitOrg = res.orgList[0].orgName;
                _this.marketingChannelBean.marketingCampaignMap.limitOrg = res.orgList[0].orgId;
            }
        });
    };
    // 交叉销售机构
    MarketingChannelComponent.prototype.openOrgTreeClick = function () {
        this.orgTreeDisplays = !this.orgTreeDisplays;
        document.body.style.overflow = 'hidden';
    };
    // 交叉销售机构树回调
    MarketingChannelComponent.prototype.treeCalls = function (param) {
        this.limitOrg = param.orgName;
        this.marketingChannelBean.marketingCampaignMap.limitOrg = param.orgId;
        this.orgTreeDisplays = false;
        document.body.style.overflow = 'auto';
    };
    //机构树回调
    MarketingChannelComponent.prototype.treeCall = function (param) {
        var _this = this;
        console.log(param);
        if (param == false) {
            this.orgTreeDisplay = param;
        }
        else {
            // if (this.marketingCampaigntType && this.marketingCampaigntType == '12') {
            // 	this.marketingChannelBean.marketingCampaignMap.limitOrg = param[0].orgName;
            // 	this.orgTreeDisplay = false;
            // } else {
            document.body.style.overflow = 'auto';
            this.orgTreeDisplay = false;
            if (this.orgFlag == '1') {
                var custMajorName = this.positionListOrg[this.indexPost].custOrgList;
                if (custMajorName) {
                    custMajorName.forEach(function (item) {
                        if (_this.arrPost.indexOf(item) != -1) {
                            _this.arrPost.splice(_this.arrPost.indexOf(item), 1);
                        }
                    });
                }
                this.positionListOrg[this.indexPost].custMajorName = '';
                this.positionListOrg[this.indexPost].custOrgList = [];
                param.forEach(function (item) {
                    if (_this.arrPost.indexOf(item.orgId) == -1) {
                        _this.arrPost.push(item.orgId);
                        if (_this.positionListOrg[_this.indexPost]['custMajorName']) {
                            _this.positionListOrg[_this.indexPost].custMajorName += item.orgName + ",";
                            var param_1 = {
                                orgId: item.orgId
                            };
                            _this.positionListOrg[_this.indexPost].custOrgList.push(param_1);
                        }
                        else {
                            var param_2 = {
                                orgId: item.orgId
                            };
                            _this.positionListOrg[_this.indexPost].custMajorName = item.orgName + ",";
                            _this.positionListOrg[_this.indexPost].custOrgList.push(param_2);
                        }
                    }
                });
                if (this.positionListOrg[this.indexPost]['custMajorName'] == '') {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '客户所属机构不能重复' });
                }
            }
            else if (this.orgFlag == '2') { //渠道
                var channelName = this.channelOrgList[this.indexPost].custOrgList;
                channelName.forEach(function (item) {
                    if (_this.arrChannel.indexOf(item) != -1) {
                        _this.arrChannel.splice(_this.arrChannel.indexOf(item), 1);
                    }
                });
                this.channelOrgList[this.indexPost].channelName = '';
                this.channelOrgList[this.indexPost].custOrgList = [];
                param.forEach(function (item) {
                    if (_this.arrChannel.indexOf(item.orgId) == -1) {
                        _this.arrChannel.push(item.orgId);
                        if (_this.channelOrgList[_this.indexPost]['channelName']) {
                            _this.channelOrgList[_this.indexPost].channelName += item.orgName + ",";
                            var param_3 = {
                                orgId: item.orgId
                            };
                            _this.channelOrgList[_this.indexPost].custOrgList.push(param_3);
                        }
                        else {
                            var param_4 = {
                                orgId: item.orgId
                            };
                            _this.channelOrgList[_this.indexPost].channelName = item.orgName + ",";
                            _this.channelOrgList[_this.indexPost].custOrgList.push(param_4);
                        }
                    }
                });
                console.log(this.arrChannel);
                console.log(this.channelOrgList[this.indexPost].custOrgList);
                if (this.channelOrgList[this.indexPost]['custMajorName'] == '') {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '客户所属机构不能重复' });
                }
            }
        }
    };
    //所属机构
    MarketingChannelComponent.prototype.orgClick = function (param, index, num) {
        this.orgFlag = num;
        this.orgTreeDisplay = true;
        this.indexPost = index;
        // this.positionListOrg[this.indexPost].custOrgList;
    };
    //上一步
    MarketingChannelComponent.prototype.prev = function () {
        var _this = this;
        var param = {};
        if (this.marketingCampaigntType != '12') {
            if (this.flagCopy) {
                param = {
                    marketingCampaignId: this.marketingCampaignId,
                    relationProductList: JSON.stringify(this.dataList),
                    marketingCampaigntType: this.marketingCampaigntType,
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
                    // deId:this.deId
                };
            }
        }
        else {
            if (this.flagCopy) {
                param = {
                    marketingCampaignId: this.marketingCampaignId,
                    relationProductList: JSON.stringify(this.dataList),
                    marketingCampaigntType: this.marketingCampaigntType,
                    flagCopy: this.flagCopy,
                    tabPrev: 'tabUp',
                    batchId: this.batchId,
                    dataSource: this.dataSource,
                    secBatchId: this.secBatchId,
                };
            }
            else {
                param = {
                    marketingCampaignId: this.marketingCampaignId,
                    marketingCampaigntType: this.marketingCampaigntType,
                    relationProductList: JSON.stringify(this.dataList),
                    tabPrev: 'tabUp',
                    batchId: this.batchId,
                    dataSource: this.dataSource,
                    secBatchId: this.secBatchId,
                };
            }
        }
        this.url = JSON.parse(this.commfunc.getSessionDataCH('markingURL'));
        var navUrl = '';
        var indexId = '';
        this.url.forEach(function (element, index) {
            if (element.label == "MarketingChannelComponent") {
                navUrl = _this.url[index - 1].url;
                indexId = _this.url[index - 1].index;
            }
        });
        this.router.navigate([navUrl, param]); //促销手段
        this.commfunc.setSessionDataCH('index', indexId);
    };
    //点击下一步
    MarketingChannelComponent.prototype.next = function () {
        var _this = this;
        //任务类型为“信用卡直销”时，前台不展示接触式渠道，主动式渠道只能选择“推送到渠道客户”
        // if (this.marketingCampaigntType && this.marketingCampaigntType == '16') {
        // 	this.marketingChannelBean.pushRules = '03';
        // }
        if (this.marketingChannelBean.pushRules == '03') {
            var aa = [];
            for (var _i = 0, _a = this.channelList; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item['channelType'] == '') {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '渠道名称不能为空！' });
                    return;
                }
                if (aa.length <= 0) {
                    aa.push(item['channelType']);
                }
                else {
                    if (aa.indexOf(item['channelType']) != -1) {
                        this.msgs = [];
                        this.msgs.push({ severity: 'error', summary: '提示', detail: '渠道类型不能重复！' });
                        return;
                    }
                }
                if (item['messageId'] == '') {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '消息模板不能为空！' });
                    return;
                }
            }
        }
        if (this.marketingChannelBean.pushRules == '04') {
            for (var _b = 0, _c = this.channelOrgList; _b < _c.length; _b++) {
                var item = _c[_b];
                if (item['channelType'] == '') {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '渠道名称不能为空！' });
                    return;
                }
                if (item['messageId'] == '') {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '消息模板不能为空！' });
                    return;
                }
            }
        }
        if (this.marketingCampaigntType == '12') {
            if (!this.checked || this.checked == '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择营销渠道！' });
                return;
            }
        }
        if (this.marketingChannelBean.pushRules == '05' && this.marketingCampaigntType == '12') {
            if (this.marketingChannelBean.marketingCampaignMap.pushObject == '') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '推送对象类型不能为空！' });
                return;
            }
            // if (this.marketingChannelBean.marketingCampaignMap.pushObject == '03') {
            // 	if (this.marketingChannelBean.marketingCampaignMap.personId == '') {
            // 		this.msgs = [];
            // 		this.msgs.push({ severity: 'error', summary: '提示', detail: '执行人工号不能为空！' });
            // 		return;
            // 	}
            // 	if (this.marketingChannelBean.marketingCampaignMap.personName == '') {
            // 		this.msgs = [];
            // 		this.msgs.push({ severity: 'error', summary: '提示', detail: '执行人姓名不能为空！' });
            // 		return;
            // 	}
            // }
        }
        var param = {};
        var positionList = JSON.parse(JSON.stringify(this.positionListOrg)); //岗位
        if (this.marketingChannelBean.pushRules == '04') {
            // 删除channelOrgList对象数组中的channelName属性
            var channelList_1 = JSON.parse(JSON.stringify(this.channelOrgList)); //渠道
            if (channelList_1.length > 0) {
                channelList_1.forEach(function (element, i) {
                    if (element.marketingChannelTimeFrom) {
                        channelList_1[i].marketingChannelTimeFrom = moment__WEBPACK_IMPORTED_MODULE_4__(element.marketingChannelTimeFrom).format("YYYY-MM-DD HH:mm:ss");
                    }
                });
            }
            positionList.forEach(function (item) {
                delete item.custMajorName;
                if (item['custOrgList']) {
                    for (var i = 0; i < item['custOrgList'].length; i++) {
                        item['custOrgList'][i] = item['custOrgList'][i];
                    }
                }
            });
            channelList_1.forEach(function (element) {
                delete element.channelName;
                if (element['custOrgList']) {
                    for (var i = 0; i < element['custOrgList'].length; i++) {
                        element['custOrgList'][i] = element['custOrgList'][i];
                    }
                }
            });
            param = {
                marketingCampaignId: this.marketingCampaignId,
                passiveChannelList: this.passiveChannelList,
                pushRules: this.marketingChannelBean.pushRules,
                positionList: positionList,
                channelList: channelList_1,
            };
        }
        else {
            var channelList_2 = JSON.parse(JSON.stringify(this.channelList)); //渠道
            console.log(channelList_2);
            var list_1 = [];
            if (channelList_2.length > 0) {
                channelList_2.forEach(function (element, i) {
                    if (element.marketingChannelTimeFrom) {
                        channelList_2[i].marketingChannelTimeFrom = moment__WEBPACK_IMPORTED_MODULE_4__(element.marketingChannelTimeFrom).format("YYYY-MM-DD HH:mm:ss");
                    }
                });
            }
            if (channelList_2.length > 0) {
                channelList_2.forEach(function (element, i) {
                    list_1.push({
                        marketingChannelTimeFrom: element.marketingChannelTimeFrom,
                        channelType: element.channelType,
                        messageId: element.messageId,
                        messageName: element.messageName,
                    });
                });
            }
            channelList_2 = list_1;
            param = {
                marketingCampaignId: this.marketingCampaignId,
                passiveChannelList: this.passiveChannelList,
                pushRules: this.marketingChannelBean.pushRules,
                positionList: this.positionList,
                channelList: channelList_2,
                marketingCampaignMap: this.marketingChannelBean.marketingCampaignMap,
            };
        }
        this.marketingHttpService.createCampaignChannel(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (_this.marketingCampaigntType == '12') {
                    // 更新批次明细
                    var parames = {
                        batchId: _this.batchId,
                        secBatchId: _this.secBatchId,
                        marketingCampaignId: _this.marketingCampaignId,
                    };
                    _this.marketingHttpService.updateBusiBatchDetailInfo(parames).subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
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
                    var paramess = {
                        batchId: _this.batchId,
                        secBatchId: _this.secBatchId,
                        marketingCampaignId: _this.marketingCampaignId,
                    };
                    _this.marketingHttpService.updateCustProductData(paramess).subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
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
                var param_5 = {};
                if (_this.flagCopy) {
                    param_5 = {
                        marketingCampaignId: _this.marketingCampaignId,
                        marketingCampaigntType: _this.marketingCampaigntType,
                        relationProductList: JSON.stringify(_this.dataList),
                        flagCopy: _this.flagCopy,
                    };
                }
                else {
                    param_5 = {
                        marketingCampaignId: _this.marketingCampaignId,
                        marketingCampaigntType: _this.marketingCampaigntType,
                        relationProductList: JSON.stringify(_this.dataList),
                    };
                }
                var paramSum = {};
                if (_this.marketingCampaigntType != '12') {
                    paramSum = {
                        marketingCampaignId: _this.marketingCampaignId,
                        type: 'marking',
                        marketingCampaigntType: _this.marketingCampaigntType,
                    };
                }
                else {
                    paramSum = {
                        marketingCampaignId: _this.marketingCampaignId,
                        type: 'marking',
                        marketingCampaigntType: _this.marketingCampaigntType,
                        batchId: _this.batchId,
                        dataSource: _this.dataSource,
                        secBatchId: _this.secBatchId,
                    };
                }
                if (_this.isNext) {
                    _this.router.navigate(['/pages/tzb/custom/marketing/marketing-activite/marketing-activity-detail', paramSum]);
                }
                else {
                    _this.url = JSON.parse(_this.commfunc.getSessionDataCH('markingURL'));
                    var navUrl_1 = '';
                    var indexId_1 = '';
                    _this.url.forEach(function (element, index) {
                        if (element.label == "MarketingChannelComponent") {
                            navUrl_1 = _this.url[index + 1].url;
                            indexId_1 = _this.url[index + 1].index;
                        }
                    });
                    _this.router.navigate([navUrl_1, param_5]); //促销手段
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
    };
    //任务类型
    MarketingChannelComponent.prototype.raskChange = function (event) {
        var _this = this;
        //任务类型为“信用卡直销”时，前台不展示接触式渠道，主动式渠道只能选择“推送到渠道客户”
        if (this.marketingCampaigntType && this.marketingCampaigntType == '16' && this.marketingChannelBean.pushRules != '03'
            && this.marketingChannelBean.pushRules != '12') {
            this.marketingChannelBean.pushRules = '03';
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '当前只能选择推送到渠道客户!' });
            return;
        }
        setTimeout(function () {
            _this.positionList = [];
            _this.channelList = [];
            _this.positionListOrg = [];
            _this.channelOrgList = [];
        });
        if (event.value == '02') { //推送到岗位
            this.positionListOrg = [];
            this.channelOrgList = [];
            this.channelList = [];
            this.marketingChannelBean.marketingCampaignMap = {};
        }
        else if (event.value == '04') { //根据客户推送渠道和岗位
            this.positionList = [];
            this.channelList = [];
            this.marketingChannelBean.marketingCampaignMap = {};
        }
        else if (event.value == '03') { //推送到渠道
            this.positionListOrg = [];
            this.channelOrgList = [];
            this.positionList = [];
            this.marketingChannelBean.marketingCampaignMap = {};
        }
        else if (event.value == '05') { //自定义
            this.positionListOrg = [];
            this.channelOrgList = [];
            this.positionList = [];
            this.channelList = [];
            this.marketingChannelBean.marketingCampaignMap = {};
        }
    };
    //推送对象
    MarketingChannelComponent.prototype.pushChange = function (event) {
        if (this.marketingCampaigntType == '12') {
            if (event.value == '01' || event.value == '02') { //除主联系人
                this.marketingChannelBean.marketingCampaignMap = {
                    pushObject: this.marketingChannelBean.marketingCampaignMap.pushObject,
                    limitOrg: this.marketingChannelBean.marketingCampaignMap.limitOrg,
                };
            }
        }
        else {
            if (event.value == '01' || event.value == '02') { //除主联系人
                this.marketingChannelBean.marketingCampaignMap = { pushObject: this.marketingChannelBean.marketingCampaignMap.pushObject };
            }
        }
    };
    //重置
    MarketingChannelComponent.prototype.rest = function () {
        this.passiveChannelList = [];
        this.marketingChannelBean.pushRules = '01';
        this.positionListOrg = [];
        this.channelOrgList = [];
        this.positionList = [];
        this.channelList = [];
        this.marketingChannelBean.marketingCampaignMap = {};
    };
    //执行工号
    MarketingChannelComponent.prototype.executeNum = function () {
        this.personPage = true;
        this.userInValue = this.orgId;
    };
    //回掉
    MarketingChannelComponent.prototype.perInfor = function (item) {
        this.personPage = false;
        if (item.length > 0) {
            this.marketingChannelBean.marketingCampaignMap.personId = item[0].tellerId;
            this.marketingChannelBean.marketingCampaignMap.personName = item[0].tellerName;
        }
    };
    //详情
    MarketingChannelComponent.prototype.echoClick = function () {
        var _this = this;
        this.marketingHttpService.queryMarketingCampaignById({ marketingCampaignId: this.marketingCampaignId }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var marketingParam = {
                    marketingObjectType: data.marketingObjectType,
                    exploreCondtionId: data.exploreCondtionId
                };
                _this.commfunc.setSessionDataCH('marketingParam', JSON.stringify(marketingParam));
                _this.marketingChannelBean = data;
                _this.passiveChannelList = _this.marketingChannelBean.passiveChannelList;
                if (_this.marketingChannelBean.pushRules == '02') { //岗位
                    if (data.positionList) {
                        _this.positionList = _this.marketingChannelBean.positionList;
                    }
                }
                else if (_this.marketingChannelBean.pushRules == '03') {
                    if (_this.marketingChannelBean.channelList) { //渠道
                        _this.channelList = _this.marketingChannelBean.channelList;
                        _this.channelList.forEach(function (element, i) {
                            if (element.marketingChannelTimeFrom) {
                                _this.channelList[i].marketingChannelTimeFrom = new Date(element.marketingChannelTimeFrom);
                            }
                        });
                    }
                    //渠道marketingCampaignMap 赋值为空Map yao_shenrong 
                    if (_this.marketingChannelBean.marketingCampaignMap == null) {
                        _this.marketingChannelBean.marketingCampaignMap = {};
                    }
                }
                else if (_this.marketingChannelBean.pushRules == '04') { //根据岗位
                    if (data.positionList) {
                        _this.positionListOrg = _this.marketingChannelBean.positionList;
                        _this.positionListOrg.forEach(function (element, i) {
                            var orgId = "";
                            if (element.custOrgList) {
                                _this.positionListOrg[i]['custMajorName'] = "";
                                element.custOrgList.forEach(function (item) {
                                    orgId = item.orgId;
                                    _this.queryPartyGroupListByPartyId(orgId, i);
                                });
                            }
                        });
                    }
                    if (_this.marketingChannelBean.channelList) { //根据渠道
                        _this.channelOrgList = _this.marketingChannelBean.channelList;
                        _this.channelOrgList.forEach(function (element, i) {
                            if (element.marketingChannelTimeFrom) {
                                _this.channelOrgList[i].marketingChannelTimeFrom = new Date(element.marketingChannelTimeFrom);
                            }
                            if (element.custOrgList) {
                                _this.channelOrgList[i]['channelName'] = "";
                                var orgId_1 = "";
                                element.custOrgList.forEach(function (item) {
                                    orgId_1 = item.orgId;
                                    _this.queryPartyGroupListByPartyId1(orgId_1, i);
                                });
                            }
                        });
                    }
                }
                else if (_this.marketingChannelBean.pushRules == '05') { //自定义执行人分配
                    if (_this.marketingChannelBean.marketingCampaignMap == null) {
                        _this.marketingChannelBean.marketingCampaignMap = {};
                    }
                }
                else if (_this.marketingCampaigntType != '16' && (data.pushRules == '01' || data.pushRules == '')) {
                    if (_this.marketingCampaigntType && _this.marketingCampaigntType == '12') {
                        _this.marketingChannelBean.pushRules = '';
                        if (_this.marketingChannelBean.marketingCampaignMap == null) {
                            _this.marketingChannelBean.marketingCampaignMap = {};
                        }
                        if (!_this.flagCopy) {
                            _this.startOrg(_this.orgId);
                        }
                    }
                    else {
                        _this.marketingChannelBean.pushRules = _this.raskRule[0].value;
                    }
                }
                else if (_this.marketingCampaigntType == '16' && (data.pushRules == '03' || data.pushRules == '')) {
                    _this.marketingChannelBean.pushRules = _this.raskRule3[0].value;
                }
                if (data.statusId == '3') { //状态为已发布进行中时不给修改
                    _this.showDisabled = true;
                }
                else {
                    _this.showDisabled = false;
                }
                if (_this.marketingCampaigntType && _this.marketingCampaigntType == '12' && _this.flagCopy) {
                    _this.startOrg(_this.marketingChannelBean.marketingCampaignMap.limitOrg);
                    var check = [];
                    for (var i = 0; i < _this.marketingChannelBean.passiveChannelList.length; i++) {
                        check[i] = _this.marketingChannelBean.passiveChannelList[i];
                        _this.checked[i] = _this.marketingChannelBean.passiveChannelList[i].passiveChannelId;
                    }
                    if (_this.marketingChannelBean.pushRules == '05') {
                        _this.KJchecked = '05';
                        _this.checked[_this.checked.length] = '05';
                    }
                    for (var _i = 0, check_1 = check; _i < check_1.length; _i++) {
                        var i = check_1[_i];
                        if (i.passiveChannelId == '24MB') {
                            _this.releaseMsgTB = true;
                            _this.releaseMsgTBM = i.releaseMsg;
                            _this.TYchecked = '24MB';
                        }
                        if (i.passiveChannelId == 'MB') {
                            _this.releaseMsgMB = true;
                            _this.releaseMsgMBM = i.releaseMsg;
                        }
                        if (i.passiveChannelId == 'SF') {
                            _this.releaseMsgSF = true;
                            _this.releaseMsgSFM = i.releaseMsg;
                            _this.SFchecked = 'SF';
                        }
                        if (i.passiveChannelId == 'NB') {
                            _this.releaseMsgPB = true;
                            _this.releaseMsgPBM = i.releaseMsg;
                            _this.PBchecked = 'NB';
                        }
                    }
                }
            }
        });
    };
    //查询机构名称-岗位
    MarketingChannelComponent.prototype.queryPartyGroupListByPartyId = function (orgId, i) {
        var _this = this;
        var params = {
            partyIdList: [orgId]
        };
        this.httpService.queryPartyGroupListByPartyId(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.partyGroupList.length > 0) {
                    _this.positionListOrg[i]['custMajorName'] += data.partyGroupList[0].groupName + ',';
                }
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '调用服务失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //查询机构名称-渠道
    MarketingChannelComponent.prototype.queryPartyGroupListByPartyId1 = function (orgId, i) {
        var _this = this;
        var params = {
            partyIdList: [orgId]
        };
        this.httpService.queryPartyGroupListByPartyId(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.partyGroupList.length > 0) {
                    _this.channelOrgList[i]['channelName'] += data.partyGroupList[0].groupName + ',';
                }
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '调用服务失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    MarketingChannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'marketing-channel',
            template: __webpack_require__(/*! ./marketing-channel.component.html */ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/marketing-channel.component.html"),
            styles: [__webpack_require__(/*! ./marketing-channel.component.scss */ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/marketing-channel.component.scss")],
            providers: [_http_marketing_http_service__WEBPACK_IMPORTED_MODULE_8__["MarketingHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"],
            _http_marketing_http_service__WEBPACK_IMPORTED_MODULE_8__["MarketingHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_9__["CusOperationHttpService"]])
    ], MarketingChannelComponent);
    return MarketingChannelComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/marketing-channel.module.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/marketing-channel.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: MarketingChannelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingChannelModule", function() { return MarketingChannelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _marketing_channel_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marketing-channel.routing */ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/marketing-channel.routing.ts");
/* harmony import */ var _marketing_channel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marketing-channel.component */ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/marketing-channel.component.ts");
/* harmony import */ var _select_post_select_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-post/select-post.component */ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/select-post/select-post.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MarketingChannelModule = /** @class */ (function () {
    function MarketingChannelModule() {
    }
    MarketingChannelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            //促销手段
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"],
                _marketing_channel_routing__WEBPACK_IMPORTED_MODULE_5__["MarketingChannelRouting"],
            ],
            declarations: [
                _marketing_channel_component__WEBPACK_IMPORTED_MODULE_6__["MarketingChannelComponent"],
                _select_post_select_post_component__WEBPACK_IMPORTED_MODULE_7__["SelectPost"]
            ],
            providers: []
        })
    ], MarketingChannelModule);
    return MarketingChannelModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/marketing-channel.routing.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/marketing-channel.routing.ts ***!
  \**************************************************************************************************************/
/*! exports provided: routes, MarketingChannelRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingChannelRouting", function() { return MarketingChannelRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marketing_channel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marketing-channel.component */ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/marketing-channel.component.ts");


var routes = [
    { path: '', component: _marketing_channel_component__WEBPACK_IMPORTED_MODULE_1__["MarketingChannelComponent"] },
];
var MarketingChannelRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/select-post/bean/select-post.bean.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/select-post/bean/select-post.bean.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: SelectPostBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPostBean", function() { return SelectPostBean; });
var SelectPostBean = /** @class */ (function () {
    function SelectPostBean() {
    }
    return SelectPostBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/select-post/select-post.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/select-post/select-post.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-4 \">\r\n\t\t\t<div class=\"ui-g-6 title\">\r\n\t\t\t\t<label>岗位编号：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t<input type=\"text\" pInputText [(ngModel)]=\"selectPostBean.postId\"/>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4 \">\r\n\t\t\t<div class=\"ui-g-6 title\">\r\n\t\t\t\t<label>岗位名称：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t<input type=\"text\" pInputText [(ngModel)]=\"selectPostBean.postName\"/>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<div class=\"ui-g-12\">\r\n\t\t\t\t<button pButton type=\"button\" label=\"查询\" (click)='query()'></button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<p-dataTable [value]=\"dataList\"  scrollable=\"true\" [style]=\"{'text-align':'center'}\" scrollWidth=\"100%\">\r\n\t\t\t<p-column header=\"选择\" field=\"\" [style]=\"{'width':'100px'}\">\r\n\t\t\t\t<ng-template let-item=\"rowData\" pTemplate=\"body\" let-i=\"rowIndex\">\r\n\t\t\t\t\t<p-radioButton name=\"{{ri}}\" [value]='item.postId' [(ngModel)]=\"selectedCities\" (onClick)=\"checkClick2(item,$event)\"></p-radioButton>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"postId\" header=\"岗位编号\"></p-column>\r\n\t\t\t<p-column field=\"postName\" header=\"岗位名称\"></p-column>\r\n\t\t\t<p-column field=\"description\" header=\"岗位描述\"></p-column>\r\n\t\t</p-dataTable>\r\n\t\t<p-paginator [first]=\"first\" rows=\"{{selectPostBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n\t\t    (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn-swith\">\r\n\t\t<span class=\"temp-name\" (click)='reClick()'>确定</span>\r\n\t\t<button pButton type=\"button\" label=\"取消\" (click)='cancel()'></button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/select-post/select-post.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/select-post/select-post.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-swith {\n  text-align: center; }\n\n.title {\n  text-align: right; }\n\n.temp-name {\n  display: inline-block;\n  width: 71px;\n  height: 28px;\n  text-align: center;\n  line-height: 28px;\n  white-space: nowrap;\n  color: #fff;\n  background-color: #f8a900;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  border-radius: 3px;\n  font-size: 14px; }\n\n.temp-name:hover {\n  background-color: #e39b00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvbWFya2V0aW5nLWFjdGl2aXRlL21hcmtldGluZy1jaGFubmVsL3NlbGVjdC1wb3N0L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcbWFya2V0aW5nXFxtYXJrZXRpbmctYWN0aXZpdGVcXG1hcmtldGluZy1jaGFubmVsXFxzZWxlY3QtcG9zdFxcc2VsZWN0LXBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0kseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL21hcmtldGluZy9tYXJrZXRpbmctYWN0aXZpdGUvbWFya2V0aW5nLWNoYW5uZWwvc2VsZWN0LXBvc3Qvc2VsZWN0LXBvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXN3aXRoIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4udGVtcC1uYW1le1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDcxcHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGE5MDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi50ZW1wLW5hbWU6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTM5YjAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/select-post/select-post.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/select-post/select-post.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: SelectPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPost", function() { return SelectPost; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_select_post_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/select-post.bean */ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/select-post/bean/select-post.bean.ts");
/* harmony import */ var _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
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





/**
 * 岗位选择
 */
var SelectPost = /** @class */ (function () {
    function SelectPost(commfunc, cusOperationHttpService) {
        this.commfunc = commfunc;
        this.cusOperationHttpService = cusOperationHttpService;
        this.fileDisplay = false;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataList = [];
        this.selectedCities = [];
        this.checkListPro = [];
        this.selectPostBean = new _bean_select_post_bean__WEBPACK_IMPORTED_MODULE_1__["SelectPostBean"]();
        //提示信息
        this.msgs = [];
        this.first = 0; //分页控制
        this.postList = [];
        this.tabMesg = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"];
    }
    SelectPost.prototype.ngOnInit = function () {
        this.marketingCampaignId = this.inValue,
            this.selectPostBean.pageNum = 1;
        this.selectPostBean.pageSize = 10;
        this.first = 0;
        this.query();
    };
    SelectPost.prototype.toDetail = function (item) {
        this.fileDisplay = true;
    };
    //单选值
    SelectPost.prototype.checkClick2 = function (item, event) {
        this.checkListPro = [item];
    };
    //查询
    SelectPost.prototype.query = function () {
        this.selectPostBean.pageNum = 1;
        this.selectPostBean.pageSize = 10;
        this.first = 0;
        this.queryClick();
    };
    SelectPost.prototype.queryClick = function () {
        var _this = this;
        this.cusOperationHttpService.queryPostById(this.selectPostBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList = data.postInfoList;
                _this.total = data.total;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    //重置
    SelectPost.prototype.newQuery = function () {
        this.selectPostBean = new _bean_select_post_bean__WEBPACK_IMPORTED_MODULE_1__["SelectPostBean"]();
        this.querySecleReset();
    };
    //页码重置
    SelectPost.prototype.querySecleReset = function () {
        this.selectPostBean.pageSize = 10;
        this.selectPostBean.pageNum = 1;
        this.first = 0;
        this.queryClick();
    };
    //分页
    SelectPost.prototype.paginate = function (event) {
        //每页显示的条数
        this.selectPostBean.pageSize = Number(event.rows);
        //当前页
        var currentPage = event.page + 1;
        this.selectPostBean.pageNum = currentPage;
        this.first = event.page * this.selectPostBean.pageSize;
        //调用查询的方法
        this.queryClick();
    };
    //确定
    SelectPost.prototype.reClick = function () {
        var obj = {};
        this.checkListPro.forEach(function (element) {
            obj['positionId'] = element.postId,
                obj['positionName'] = element.postName,
                obj['positionDescription'] = element.description;
        });
        this.postList.push(obj);
        this.outValue.emit(this.postList);
        // let param ={
        // 	marketingCampaigntId:this.marketingCampaigntId,
        // 	positionList:this.postList,
        // }
        // this.cusOperationHttpService.createOrStoreTopicPosition(param).subscribe(data=>{
        // 	if (data.returnCode.code == 'success') {
        //      this.outValue.emit(data.positionList);
        // 		this.msgs = [];
        // 		this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
        // 	}else{
        // 		this.msgs = [];
        // 		this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
        // 	}
        // },error=>{
        // 	this.msgs = [];
        // 	this.msgs.push({ severity: 'success', summary: '提示', detail:'调用服务失败'});
        // })
    };
    //取消
    SelectPost.prototype.cancel = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelectPost.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SelectPost.prototype, "outValue", void 0);
    SelectPost = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-post',
            template: __webpack_require__(/*! ./select-post.component.html */ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/select-post/select-post.component.html"),
            styles: [__webpack_require__(/*! ./select-post.component.scss */ "./src/app/pages/tzb/custom/marketing/marketing-activite/marketing-channel/select-post/select-post.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"]],
        }),
        __metadata("design:paramtypes", [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"]])
    ], SelectPost);
    return SelectPost;
}());



/***/ })

}]);
//# sourceMappingURL=marketing-channel-marketing-channel-module.js.map