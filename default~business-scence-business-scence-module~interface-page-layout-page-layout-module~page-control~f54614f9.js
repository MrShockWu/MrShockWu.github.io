(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~business-scence-business-scence-module~interface-page-layout-page-layout-module~page-control~f54614f9"],{

/***/ "./src/app/pages/tzb/interface/page-layout/http/interface.http.constant.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/interface/page-layout/http/interface.http.constant.ts ***!
  \*********************************************************************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/**
 * 界面配置
 * 接口
 */
var API = {
    queryPageControllerInfoById: 'queryPageControllerInfoById',
    queryPageElementInfoById: 'queryPageElementInfoById',
    queryPageRulesControllerInfoById: 'queryPageRulesControllerInfoById',
    pageCollectListByBusinessId: 'pageCollectListByBusinessId',
    dualPageControllerInfo: 'dualPageControllerInfo',
    queryPageDetailInfo: 'queryPageDetailInfo',
    queryPageListByPageCollectId: 'queryPageListByPageCollectId',
    queryPageControllerByCollectId: 'queryPageControllerByCollectId',
    queryPageControllerList: 'queryPageControllerList',
    queryPageControllerDetail: 'queryPageControllerDetail',
    querBusinessSenceList: 'querBusinessSenceList',
    createPageDefinition: 'createPageDefinition',
    updatePageDefinition: 'updatePageDefinition',
    dualPageElementAssoc: 'dualPageElementAssoc',
    queryPageDefinitionList: 'queryPageDefinitionList',
    createPageCollectDefinition: 'createPageCollectDefinition',
    updatePageCollectDefinition: 'updatePageCollectDefinition',
    dualPageRulesController: 'dualPageRulesController',
    queryPageCollectDefinitionList: 'queryPageCollectDefinitionList',
    queryPageCollectDefinitionDetail: 'queryPageCollectDefinitionDetail',
    createBusinessSenceDefinition: 'createBusinessSenceDefinition',
    updateBusinessSenceDefinition: 'updateBusinessSenceDefinition',
    dualBusinessSenceCollectAssoc: 'dualBusinessSenceCollectAssoc',
    queryAttrItemList: 'queryAttrItemList',
    queryInterfaceModuleList: 'queryInterfaceModuleList',
    queryInterfaceModuleDetail: 'queryInterfaceModuleDetail'
};


/***/ }),

/***/ "./src/app/pages/tzb/interface/page-layout/http/interface.http.servive.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/tzb/interface/page-layout/http/interface.http.servive.ts ***!
  \********************************************************************************/
/*! exports provided: InterfaceHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterfaceHttpService", function() { return InterfaceHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/http.service */ "./src/app/@uisftech/common/service/http.service.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface.http.constant */ "./src/app/pages/tzb/interface/page-layout/http/interface.http.constant.ts");
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
 * 产品
 * 模块下的接口服务
 */
var InterfaceHttpService = /** @class */ (function () {
    function InterfaceHttpService(httpService) {
        this.httpService = httpService;
    }
    //根据业务场景ID、页面集ID查询页面控制信息
    InterfaceHttpService.prototype.queryPageControllerInfoById = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryPageControllerInfoById, params);
    };
    //根据页面ID查询页面元素信息
    InterfaceHttpService.prototype.queryPageElementInfoById = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryPageElementInfoById, params);
    };
    //根据页面集ID、页面ID查询页面控制规则信息
    InterfaceHttpService.prototype.queryPageRulesControllerInfoById = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryPageRulesControllerInfoById, params);
    };
    //根据业务场景ID查询页面集信息
    InterfaceHttpService.prototype.pageCollectListByBusinessId = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].pageCollectListByBusinessId, params);
    };
    //页面集页面控制维护
    InterfaceHttpService.prototype.dualPageControllerInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].dualPageControllerInfo, params);
    };
    //根据页面ID查询页面的详情信息
    InterfaceHttpService.prototype.queryPageDetailInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryPageDetailInfo, params);
    };
    //根据页面集ID查询页面的列表信息
    InterfaceHttpService.prototype.queryPageListByPageCollectId = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryPageListByPageCollectId, params);
    };
    //根据业务场景ID查询页面控制列表信息
    InterfaceHttpService.prototype.queryPageControllerByCollectId = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryPageControllerByCollectId, params);
    };
    //页面控制列表查询
    InterfaceHttpService.prototype.queryPageControllerList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryPageControllerList, params);
    };
    //页面控制详情查询
    InterfaceHttpService.prototype.queryPageControllerDetail = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryPageControllerDetail, params);
    };
    //业务场景列表查询
    InterfaceHttpService.prototype.querBusinessSenceList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].querBusinessSenceList, params);
    };
    //页面配置
    InterfaceHttpService.prototype.createPageDefinition = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createPageDefinition, params);
    };
    //页面修改
    InterfaceHttpService.prototype.updatePageDefinition = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].updatePageDefinition, params);
    };
    //页面与页面元素关联关系维护
    InterfaceHttpService.prototype.dualPageElementAssoc = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].dualPageElementAssoc, params);
    };
    //页面列表查询
    InterfaceHttpService.prototype.queryPageDefinitionList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryPageDefinitionList, params);
    };
    //页面集配置
    InterfaceHttpService.prototype.createPageCollectDefinition = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createPageCollectDefinition, params);
    };
    //页面集修改
    InterfaceHttpService.prototype.updatePageCollectDefinition = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].updatePageCollectDefinition, params);
    };
    //页面集页面规则配置
    InterfaceHttpService.prototype.dualPageRulesController = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].dualPageRulesController, params);
    };
    //页面集列表查询
    InterfaceHttpService.prototype.queryPageCollectDefinitionList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryPageCollectDefinitionList, params);
    };
    //页面集详情查询
    InterfaceHttpService.prototype.queryPageCollectDefinitionDetail = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryPageCollectDefinitionDetail, params);
    };
    //业务场景配置
    InterfaceHttpService.prototype.createBusinessSenceDefinition = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].createBusinessSenceDefinition, params);
    };
    //业务场景修改
    InterfaceHttpService.prototype.updateBusinessSenceDefinition = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].updateBusinessSenceDefinition, params);
    };
    //业务场景和页面集关联关系维护
    InterfaceHttpService.prototype.dualBusinessSenceCollectAssoc = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].dualBusinessSenceCollectAssoc, params);
    };
    InterfaceHttpService.prototype.queryAttrItemList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryAttrItemList, params);
    };
    InterfaceHttpService.prototype.queryInterfaceModuleList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryInterfaceModuleList, params);
    };
    InterfaceHttpService.prototype.queryInterfaceModuleDetail = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS1"] + _interface_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryInterfaceModuleDetail, params);
    };
    InterfaceHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], InterfaceHttpService);
    return InterfaceHttpService;
}());



/***/ })

}]);
//# sourceMappingURL=default~business-scence-business-scence-module~interface-page-layout-page-layout-module~page-control~f54614f9.js.map