(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~batch-precredit-add-batch-precredit-add-module~credit-ccm-credit-ccm-module~custom-list-mana~bf0127bd"],{

/***/ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.constant.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.constant.ts ***!
  \**********************************************************************************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/**
 * 名单模块 接口
 */
var API = {
    addBlackListType: 'addBlackListType',
    selectBlackListType: 'selectBlackListType',
    updateBlackListType: 'updateBlackListType',
    deleteBlackListType: 'deleteBlackListType',
    selectBlackListInfo: 'selectBlackListInfo',
    selectListMaintainLog: 'selectListMaintainLog',
    downLoadListInfo: 'downLoadListInfo',
    selectListQueryLog: 'selectListQueryLog',
    listCallBackFunction: 'listCallBackFunction',
    selectDownListQueryLog: 'selectDownListQueryLog',
    downLoadListTypeInfo: 'downLoadListTypeInfo',
    addBlackListInfo: 'addBlackListInfo',
    updateBlackListInfo: 'updateBlackListInfo',
    loseEfficacyBlackListInfo: 'loseEfficacyBlackListInfo',
    deleteBlackListInfo: 'deleteBlackListInfo',
    selectListTaskInfo: 'selectListTaskInfo',
    addListTaskInfo: 'addListTaskInfo',
    updateListTaskInfo: 'updateListTaskInfo',
    deleteListTaskInfo: 'deleteListTaskInfo',
    imortListTaskInfo: 'imortListTaskInfo',
    selectListLog: 'selectListLog',
    importListTaskInfo: 'importListTaskInfo',
    selectCustBriefInfo: 'selectCustBriefInfo',
    superListOperation: 'superListOperation',
    superListBatchOperation: 'superListBatchOperation',
    selectDownListAnalysis: 'selectDownListAnalysis',
    selectTypes: "selectTypes",
    selectBlackListInfoNew: 'selectBlackListInfoNew',
    selectBlackListInfoAnalysis: 'selectBlackListInfoAnalysis',
    updateListTaskManager: "updateListTaskManager"
};


/***/ }),

/***/ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: CusListManageHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusListManageHttpService", function() { return CusListManageHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-list-manage.http.constant */ "./src/app/pages/tzb/custom/http/custom-list-manage/custom-list-manage.http.constant.ts");
/* harmony import */ var app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/http.service */ "./src/app/@uisftech/common/service/http.service.ts");
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




/**
 * 客户运营平台
 * 名单模块下的接口服务
 */
var CusListManageHttpService = /** @class */ (function () {
    function CusListManageHttpService(httpService) {
        this.httpService = httpService;
    }
    CusListManageHttpService.prototype.addBlackListType = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].addBlackListType, params);
    };
    CusListManageHttpService.prototype.selectBlackListType = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].selectBlackListType, params);
    };
    CusListManageHttpService.prototype.updateBlackListType = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].updateBlackListType, params);
    };
    CusListManageHttpService.prototype.deleteBlackListType = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].deleteBlackListType, params);
    };
    CusListManageHttpService.prototype.selectBlackListInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].selectBlackListInfo, params);
    };
    CusListManageHttpService.prototype.selectBlackListInfoNew = function (params) {
        params = this.httpService.handleParams(params);
        // return this.httpService.post('http://10.1.60.211:8011/ywsn/' + API.selectBlackListInfoNew, params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].selectBlackListInfoNew, params);
    };
    CusListManageHttpService.prototype.selectBlackListInfoAnalysis = function (params) {
        params = this.httpService.handleParams(params);
        // return this.httpService.post('http://10.1.60.211:8011/ywsn/' + API.selectBlackListInfoNew, params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].selectBlackListInfoAnalysis, params);
    };
    CusListManageHttpService.prototype.selectListMaintainLog = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].selectListMaintainLog, params);
    };
    CusListManageHttpService.prototype.downLoadListInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].downLoadListInfo, params);
    };
    CusListManageHttpService.prototype.selectListQueryLog = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].selectListQueryLog, params);
    };
    CusListManageHttpService.prototype.listCallBackFunction = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].listCallBackFunction, params);
    };
    CusListManageHttpService.prototype.selectDownListQueryLog = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].selectDownListQueryLog, params);
    };
    CusListManageHttpService.prototype.downLoadListTypeInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].downLoadListTypeInfo, params);
    };
    //名单信息新增
    CusListManageHttpService.prototype.addBlackListInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].addBlackListInfo, params);
    };
    //名单信息修改
    CusListManageHttpService.prototype.updateBlackListInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].updateBlackListInfo, params);
    };
    //名单信息失效
    CusListManageHttpService.prototype.loseEfficacyBlackListInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].loseEfficacyBlackListInfo, params);
    };
    //名单信息删除
    CusListManageHttpService.prototype.deleteBlackListInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].deleteBlackListInfo, params);
    };
    //任务信息查询
    CusListManageHttpService.prototype.selectListTaskInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].selectListTaskInfo, params);
    };
    //任务信息新增
    CusListManageHttpService.prototype.addListTaskInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].addListTaskInfo, params);
    };
    //任务信息修改
    CusListManageHttpService.prototype.updateListTaskInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].updateListTaskInfo, params);
    };
    //任务信息删除
    CusListManageHttpService.prototype.deleteListTaskInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].deleteListTaskInfo, params);
    };
    //批量导入名单
    CusListManageHttpService.prototype.imortListTaskInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].imortListTaskInfo, params);
    };
    //查询日志
    CusListManageHttpService.prototype.selectListLog = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].selectListLog, params);
    };
    //批量导入名单任务
    CusListManageHttpService.prototype.importListTaskInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].importListTaskInfo, params);
    };
    //客户号查询
    CusListManageHttpService.prototype.selectCustBriefInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].selectCustBriefInfo, params);
    };
    //超管操作
    CusListManageHttpService.prototype.superListOperation = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].superListOperation, params);
    };
    //超管批量
    CusListManageHttpService.prototype.superListBatchOperation = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].superListBatchOperation, params);
    };
    //统计分析文件下载
    CusListManageHttpService.prototype.selectDownListAnalysis = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].selectDownListAnalysis, params);
    };
    //名单类型维护查询
    CusListManageHttpService.prototype.selectTypes = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].selectTypes, params);
    };
    //名单类型维护查询
    CusListManageHttpService.prototype.updateListTaskManager = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_CUS"] + _custom_list_manage_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].updateListTaskManager, params);
    };
    CusListManageHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], CusListManageHttpService);
    return CusListManageHttpService;
}());



/***/ })

}]);
//# sourceMappingURL=default~batch-precredit-add-batch-precredit-add-module~credit-ccm-credit-ccm-module~custom-list-mana~bf0127bd.js.map