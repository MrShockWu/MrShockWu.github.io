(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["performance-analysis-performance-analysis-module"],{

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/balance-detail/balance-detail.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/balance-detail/balance-detail.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <p-dataTable [value]=\"tableResult0\" [style]=\"{'text-align':'center'}\">\r\n            <!-- <p-column header='机构/人员' field=\"orgOrdUser\"></p-column> -->\r\n            <!-- <p-column header='业绩指标项' field=\"programId\">\r\n                                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                            {{col.programId|codeValuePie:BdAchievementYe}}\r\n                                    </ng-template>\r\n                            </p-column> -->\r\n            <p-column header='二级产品' field=\"secondProduct\"></p-column>\r\n\r\n            <p-column header='业绩值(万元)' field=\"amount\"> </p-column>\r\n    </p-dataTable>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/balance-detail/balance-detail.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/balance-detail/balance-detail.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vYWNoaWV2ZW1lbnQtdGFzay9wZXJmb3JtYW5jZS1hbmFseXNpcy9iYWxhbmNlLWRldGFpbC9iYWxhbmNlLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/balance-detail/balance-detail.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/balance-detail/balance-detail.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: BalanceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceDetailComponent", function() { return BalanceDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean */ "./src/app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean.ts");
/* harmony import */ var app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/http/achievement-search.service */ "./src/app/pages/tzb/custom/achievement-task/http/achievement-search.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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





var BalanceDetailComponent = /** @class */ (function () {
    function BalanceDetailComponent(commfunc, router, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.queryBdAchievementDetail = new app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_1__["QueryBdAchievementDetail"]();
        this.ArrayD = [
            //一级目录
            { "sel": 'L1001', name: '授信业务产品' },
            { "sel": 'L1002', name: '存款业务产品' },
            { "sel": 'L1003', name: '理财业务产品' },
            { "sel": 'L1004', name: '银行卡' },
            { "sel": 'L1005', name: '国际业务产品' },
            //二级目录
            { "sel": 'L2001', name: '一般贷款' },
            { "sel": 'L2002', name: '小本贷款' },
            { "sel": 'L2004', name: '时贷通' },
            { "sel": 'L2005', name: '自助卡' },
            { "sel": 'L2006', name: '消费信贷' },
            { "sel": 'L2007', name: '承兑' },
            { "sel": 'L2008', name: '保函' },
            { "sel": 'L2009', name: '贴现' },
            { "sel": 'L2010', name: '委托贷款' },
            { "sel": 'L2048', name: 'E融卡' },
            { "sel": 'L2011', name: '金添储蓄' },
            { "sel": 'L2012', name: '个人活期' },
            { "sel": 'L2013', name: '单位活期存款' },
            { "sel": 'L2014', name: '单位定期存款' },
            { "sel": 'L2015', name: '保证金存款' },
            { "sel": 'L2016', name: '其他存款' },
            { "sel": 'L2017', name: '理财产品' },
            { "sel": 'L2018', name: '“周周盈”稳进账理财计划' },
            { "sel": 'L2019', name: '机构理财计划' },
            { "sel": 'L2003', name: '借记卡类授信' },
            { "sel": 'L2020', name: '信用卡类授信' },
            { "sel": 'L2021', name: '准贷记卡' },
            { "sel": 'L2022', name: '出口贸易融资' },
            { "sel": 'L2023', name: '进口贸易融资' },
            { "sel": 'L2024', name: '一般贷款' },
            { "sel": 'L2025', name: '国内信用证融资' },
            { "sel": 'L2026', name: '国际结算' },
            { "sel": 'L2046', name: '结售汇业务' },
            { "sel": 'L2047', name: '国际业务存款' },
        ];
        this.msgs = []; //提示信息
        this.tableResult0 = [];
    }
    BalanceDetailComponent.prototype.ngOnInit = function () {
        this.codeVal();
        this.BdAchievementDetail = this.code['BdAchievementDetail']; //我的业绩
        this.orgOrdUser = this.inValue.orgOrdUser;
        this.queryBdAchievementDetail.levelNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.operatingLevel;
        if (JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.managePermission == "Y") {
            this.queryBdAchievementDetail.orgNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.orgId;
        }
        else if (JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.managePermission == "N") {
            this.queryBdAchievementDetail.relationNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        }
        this.queryBdAchievementDetail.indexType = this.inValue.indexType;
        this.queryBdAchievementDetail.signType = this.inValue.signType;
        this.queryBdAchievementDetail.arrType = this.inValue.arrType;
        this.queryBdAchievementDetail.timeTypeId = this.inValue.timeTypeId;
        this.queryBdAchievementDetail.startTime = this.inValue.startTime;
        this.queryBdAchievementDetail.endTime = this.inValue.endTime;
        this.queryBdAchievementDetail.relationNo = this.inValue.relationNo;
        this.queryBdAchievementDetail.orgNo = this.inValue.orgNo;
        this.queryBdAchievementDetail.levelNo = this.inValue.levelNo;
        this.Detail();
    };
    BalanceDetailComponent.prototype.Detail = function () {
        var _this = this;
        this.httpService.queryBdAchievementDetail(this.queryBdAchievementDetail).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                for (var i = 0; i < data.resultList.length; i++) {
                    for (var j = 0; j < _this.ArrayD.length; j++) {
                        if (data.resultList[i].secondProduct == _this.ArrayD[j].sel) {
                            data.resultList[i].secondProduct = _this.ArrayD[j].name;
                            _this.tableResult0 = data.resultList;
                        }
                    }
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //码值
    BalanceDetailComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BalanceDetailComponent.prototype, "inValue", void 0);
    BalanceDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'balance-detail',
            template: __webpack_require__(/*! ./balance-detail.component.html */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/balance-detail/balance-detail.component.html"),
            styles: [__webpack_require__(/*! ./balance-detail.component.scss */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/balance-detail/balance-detail.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__["AchievementHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__["AchievementHttpService"]])
    ], BalanceDetailComponent);
    return BalanceDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/balance-view/balance-view.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/balance-view/balance-view.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n        <div class='ui-g-12'>\r\n                <div style=\"text-align:right;\">\r\n                        <button pButton type=\"button\" label=\"图表切换\" (click)=\"iconSwitch()\"></button>\r\n                </div>\r\n                <div class=\"bg-div\" *ngIf=\"display1\">\r\n                        <div class=\"itemType\">{{queryBdAchievementDetail.indexType|codeValuePie:BdAchievementDetail}}</div>\r\n                        <div echarts [options]=\"Acde\"></div>\r\n                </div>\r\n                <div class=\"bg-div\" *ngIf=\"display5\">\r\n                        <div class=\"itemType\">{{queryBdAchievementDetail.indexType|codeValuePie:BdAchievementDetail}}</div>\r\n                        <div class=\"ki\">\r\n                                产品种类:&nbsp;&nbsp;\r\n                        </div>\r\n                        <div class=\"tot\">\r\n                                <div class=\"eve\" *ngFor=\"let secondProduct of secondProductC\">\r\n                                        <div class=\"de\" (click)=\"First(secondProduct)\"> &nbsp;&nbsp;{{secondProduct}}</div>\r\n                                </div>\r\n                        </div>\r\n                        <div echarts [options]=\"Acde\"></div>\r\n\r\n                        <div style=\"text-align:right;margin-top:40px;\" *ngIf=\"display6\">\r\n                                <button pButton type=\"button\" label=\"关闭\" (click)=\"sedLine()\"></button>\r\n                        </div>\r\n                        <div *ngIf=\"display6\" echarts [options]=\"secDet\" (click)=\"sedLine()\"></div>\r\n                </div>\r\n                <div *ngIf=\"display2\">\r\n                        <div class=\"ui-g-12\">\r\n                                <div class=\"d2\">\r\n                                        <p-dataTable [value]=\"tableResult0\" [style]=\"{'text-align':'center'}\">\r\n\r\n                                                <p-column header='二级产品' field=\"secondProduct\"></p-column>\r\n\r\n                                                <p-column header='业绩值(万元)' field=\"amount\"> </p-column>\r\n                                        </p-dataTable>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n                <div *ngIf=\"display3\">\r\n                        <div class=\"ui-g-12\">\r\n                                <div class=\"d2\">\r\n                                        <p-dataTable [value]=\"tableResult0\" [style]=\"{'text-align':'center'}\">\r\n                                                <p-column header='一级产品'>\r\n                                                        <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                                                                <span (click)=\"Fir(col)\" class=\"fir\">{{col.secondProduct }}</span>\r\n                                                        </ng-template>\r\n                                                </p-column>\r\n                                                <p-column header='业绩值(万元)' field=\"amount\"> </p-column>\r\n                                        </p-dataTable>\r\n                                        <div style=\"text-align:right;margin-top:40px;\" *ngIf=\"display4\">\r\n                                                <button pButton type=\"button\" label=\"关闭\" (click)=\"clo()\"></button>\r\n                                        </div>\r\n                                        <p-dataTable [value]=\"resultList1\" [style]=\"{'text-align':'center'}\" *ngIf=\"display4\" (click)=\"clo()\">\r\n                                                <p-column header='二级产品' field=\"secondProduct\"></p-column>\r\n                                                <p-column header='业绩值(万元)' field=\"amount\"> </p-column>\r\n                                        </p-dataTable>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/balance-view/balance-view.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/balance-view/balance-view.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-div {\n  overflow: hidden; }\n  .bg-div .itemType {\n    margin-left: 26px;\n    margin-top: 10px; }\n  .bg-div .ki {\n    margin-left: 25px; }\n  .bg-div .tot {\n    position: absolute;\n    margin-left: 80px;\n    margin-top: -25px; }\n  .bg-div .tot .eve {\n      float: left; }\n  .bg-div .tot .eve .de {\n        margin-left: 20px;\n        width: 120px;\n        height: 30px;\n        background: #19b0c8;\n        border-radius: 4px;\n        text-align: center;\n        padding-top: 5px; }\n  .bg-div .tot .eve .de:hover {\n          cursor: pointer;\n          color: #ffffff; }\n  .d2 {\n  height: 600px;\n  overflow: auto; }\n  .fir {\n  border-bottom: 2px solid #19b0c8; }\n  .fir:hover {\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9hY2hpZXZlbWVudC10YXNrL3BlcmZvcm1hbmNlLWFuYWx5c2lzL2JhbGFuY2Utdmlldy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGFjaGlldmVtZW50LXRhc2tcXHBlcmZvcm1hbmNlLWFuYWx5c2lzXFxiYWxhbmNlLXZpZXdcXGJhbGFuY2Utdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBR1EsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0VBSnhCO0lBT1EsaUJBQWlCLEVBQUE7RUFQekI7SUFVUSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBO0VBWnpCO01BY1ksV0FBVyxFQUFBO0VBZHZCO1FBZ0JnQixpQkFBaUI7UUFDakIsWUFBWTtRQUNaLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixnQkFBZ0IsRUFBQTtFQXRCaEM7VUF3Qm9CLGVBQWU7VUFDZixjQUFjLEVBQUE7RUFPbEM7RUFDSSxhQUFhO0VBQ2IsY0FBYyxFQUFBO0VBR2xCO0VBQ0ksZ0NBQWdDLEVBQUE7RUFEcEM7SUFHUSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2FjaGlldmVtZW50LXRhc2svcGVyZm9ybWFuY2UtYW5hbHlzaXMvYmFsYW5jZS12aWV3L2JhbGFuY2Utdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1kaXYge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC5pdGVtVHlwZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI2cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5raSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAudG90IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8vIGRpc3BsYXk6IGZsb2F0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICAgICAgIC5ldmUge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgLmRlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzE5YjBjODtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kMiB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5maXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxOWIwYzg7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/balance-view/balance-view.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/balance-view/balance-view.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: BalanceViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceViewComponent", function() { return BalanceViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean */ "./src/app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean.ts");
/* harmony import */ var app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/http/achievement-search.service */ "./src/app/pages/tzb/custom/achievement-task/http/achievement-search.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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





var BalanceViewComponent = /** @class */ (function () {
    function BalanceViewComponent(commfunc, router, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.queryBdAchievementDetail = new app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_1__["QueryBdAchievementDetail"]();
        this.queryBdAchievementFtp = new app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_1__["QueryBdAchievementFtp"]();
        this.ArrayD = [
            //一级目录
            { "sel": 'L1001', name: '授信业务产品' },
            { "sel": 'L1002', name: '存款业务产品' },
            { "sel": 'L1003', name: '理财业务产品' },
            { "sel": 'L1004', name: '银行卡' },
            { "sel": 'L1005', name: '国际业务产品' },
            //二级目录
            { "sel": 'L2001', name: '一般贷款' },
            { "sel": 'L2002', name: '小本贷款' },
            { "sel": 'L2004', name: '时贷通' },
            { "sel": 'L2005', name: '自助卡' },
            { "sel": 'L2006', name: '消费信贷' },
            { "sel": 'L2007', name: '承兑' },
            { "sel": 'L2008', name: '保函' },
            { "sel": 'L2009', name: '贴现' },
            { "sel": 'L2010', name: '委托贷款' },
            { "sel": 'L2048', name: 'E融卡' },
            { "sel": 'L2011', name: '金添储蓄' },
            { "sel": 'L2012', name: '个人活期' },
            { "sel": 'L2013', name: '单位活期存款' },
            { "sel": 'L2014', name: '单位定期存款' },
            { "sel": 'L2015', name: '保证金存款' },
            { "sel": 'L2016', name: '其他存款' },
            { "sel": 'L2017', name: '理财产品' },
            { "sel": 'L2018', name: '“周周盈”稳进账理财计划' },
            { "sel": 'L2019', name: '机构理财计划' },
            { "sel": 'L2003', name: '借记卡类授信' },
            { "sel": 'L2020', name: '信用卡类授信' },
            { "sel": 'L2021', name: '准贷记卡' },
            { "sel": 'L2022', name: '出口贸易融资' },
            { "sel": 'L2023', name: '进口贸易融资' },
            { "sel": 'L2024', name: '一般贷款' },
            { "sel": 'L2025', name: '国内信用证融资' },
            { "sel": 'L2026', name: '国际结算' },
            { "sel": 'L2046', name: '结售汇业务' },
            { "sel": 'L2047', name: '国际业务存款' },
        ];
        this.display1 = true;
        this.display2 = false;
        this.display3 = false;
        this.display4 = false;
        this.display5 = true;
        this.display6 = false;
        this.tableResult0 = [];
        this.tableResult1 = [];
        this.msgs = []; //提示信息
        this.amountC = [];
        this.amountC1 = [];
        this.secondProductC = [];
        this.secondProductC1 = [];
    }
    BalanceViewComponent.prototype.ngOnInit = function () {
        this.codeVal();
        this.BdAchievementDetail = this.code['BdAchievementDetail']; //我的业绩
        this.queryBdAchievementFtp.indexType = this.inValue.indexType;
        this.queryBdAchievementFtp.signType = this.inValue.signType;
        this.queryBdAchievementFtp.arrType = this.inValue.arrType;
        this.queryBdAchievementFtp.timeTypeId = this.inValue.timeTypeId;
        this.queryBdAchievementFtp.startTime = this.inValue.startTime;
        this.queryBdAchievementFtp.endTime = this.inValue.endTime;
        this.queryBdAchievementFtp.relationNo = this.inValue.relationNo;
        this.queryBdAchievementFtp.orgNo = this.inValue.orgNo;
        this.queryBdAchievementFtp.levelNo = this.inValue.levelNo;
        this.queryBdAchievementDetail.indexType = this.inValue.indexType;
        this.queryBdAchievementDetail.signType = this.inValue.signType;
        this.queryBdAchievementDetail.arrType = this.inValue.arrType;
        this.queryBdAchievementDetail.timeTypeId = this.inValue.timeTypeId;
        this.queryBdAchievementDetail.startTime = this.inValue.startTime;
        this.queryBdAchievementDetail.endTime = this.inValue.endTime;
        this.queryBdAchievementDetail.relationNo = this.inValue.relationNo;
        this.queryBdAchievementDetail.orgNo = this.inValue.orgNo;
        this.queryBdAchievementDetail.levelNo = this.inValue.levelNo;
        if (this.inValue.indexType == "4") {
            this.display5 = true;
            this.display1 = false;
        }
        else {
            this.display1 = true;
            this.display5 = false;
        }
        this.Detail();
    };
    BalanceViewComponent.prototype.iconSwitch = function () {
        if (this.queryBdAchievementDetail.indexType == "4") {
            this.display1 = false;
            this.display5 = !this.display5;
            this.display3 = !this.display3;
        }
        else {
            this.display5 = false;
            this.display1 = !this.display1;
            this.display2 = !this.display2;
        }
    };
    BalanceViewComponent.prototype.Detail = function () {
        var _this = this;
        this.httpService.queryBdAchievementDetail(this.queryBdAchievementDetail).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                for (var i = 0; i < data.resultList.length; i++) {
                    _this.amountC.push(data.resultList[i].amount);
                    for (var j = 0; j < _this.ArrayD.length; j++) {
                        if (data.resultList[i].secondProduct == _this.ArrayD[j].sel) {
                            _this.secondProductC.push(_this.ArrayD[j].name);
                            data.resultList[i].secondProduct = _this.ArrayD[j].name;
                            _this.tableResult0 = data.resultList;
                        }
                    }
                    _this.Det();
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    BalanceViewComponent.prototype.Det = function () {
        this.Acde = {
            color: ['#37c27f'],
            title: {
                text: '(单位.万元)',
                textStyle: {
                    fontSize: '12',
                },
                x: '20px',
                y: '5px',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: this.secondProductC,
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    data: [0, 20, 40, 60, 80]
                }
            ],
            series: [
                {
                    color: ['green'],
                    data: this.amountC,
                    type: 'bar',
                    //设置圆柱的宽度
                    barWidth: 30
                }
            ]
        };
    };
    BalanceViewComponent.prototype.Fir = function (col) {
        var _this = this;
        this.display4 = true;
        this.secondProduct = col.secondProduct;
        for (var l = 0; l < this.ArrayD.length; l++) {
            if (this.secondProduct == this.ArrayD[l].name) {
                this.queryBdAchievementFtp.firstProduct = this.ArrayD[l].sel;
                this.httpService.queryBdAchievementFtp(this.queryBdAchievementFtp).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        // this.resultList1 = data.resultList;
                        for (var n = 0; n < data.resultList.length; n++) {
                            for (var m = 0; m < _this.ArrayD.length; m++) {
                                if (data.resultList[n].secondProduct == _this.ArrayD[m].sel) {
                                    data.resultList[n].secondProduct = _this.ArrayD[m].name;
                                    _this.resultList1 = data.resultList;
                                }
                            }
                        }
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: "任务查询成功！" });
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
                });
            }
        }
    };
    BalanceViewComponent.prototype.clo = function () {
        this.display4 = false;
    };
    BalanceViewComponent.prototype.sedLine = function () {
        this.display6 = false;
    };
    BalanceViewComponent.prototype.First = function (secondProduct) {
        var _this = this;
        if (secondProduct) {
            this.display6 = true;
        }
        for (var i = 0; i < this.ArrayD.length; i++) {
            if (this.ArrayD[i].name == secondProduct) {
                this.queryBdAchievementFtp.firstProduct = this.ArrayD[i].sel;
            }
        }
        this.amountC1 = [];
        this.secondProductC1 = [];
        this.httpService.queryBdAchievementFtp(this.queryBdAchievementFtp).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                for (var n = 0; n < data.resultList.length; n++) {
                    _this.amountC1.push(data.resultList[n].amount);
                    for (var m = 0; m < _this.ArrayD.length; m++) {
                        if (data.resultList[n].secondProduct == _this.ArrayD[m].sel) {
                            data.resultList[n].secondProduct = _this.ArrayD[m].name;
                        }
                    }
                    _this.secondProductC1.push(data.resultList[n].secondProduct);
                }
                _this.SecDet();
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: "任务查询成功！" });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    BalanceViewComponent.prototype.SecDet = function () {
        this.secDet = {
            color: ['#37c27f'],
            title: {
                text: '(单位.万元)',
                textStyle: {
                    fontSize: '12',
                },
                x: '20px',
                y: '5px',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: this.secondProductC1,
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    data: [0, 20, 40, 60, 80]
                }
            ],
            series: [
                {
                    color: ['green'],
                    data: this.amountC1,
                    type: 'bar',
                    //设置圆柱的宽度
                    barWidth: 30
                }
            ]
        };
    };
    //码值
    BalanceViewComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BalanceViewComponent.prototype, "inValue", void 0);
    BalanceViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'balance-view',
            template: __webpack_require__(/*! ./balance-view.component.html */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/balance-view/balance-view.component.html"),
            styles: [__webpack_require__(/*! ./balance-view.component.scss */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/balance-view/balance-view.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__["AchievementHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__["AchievementHttpService"]])
    ], BalanceViewComponent);
    return BalanceViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/grow-detail/grow-detail.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/grow-detail/grow-detail.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <p-dataTable [value]=\"tableResult0\" [style]=\"{'text-align':'center'}\">\r\n            <p-column header='日期' field=\"dt\"></p-column>\r\n            <p-column header='增长率' field=\"lastPeriodGrowth\"> </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/grow-detail/grow-detail.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/grow-detail/grow-detail.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vYWNoaWV2ZW1lbnQtdGFzay9wZXJmb3JtYW5jZS1hbmFseXNpcy9ncm93LWRldGFpbC9ncm93LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/grow-detail/grow-detail.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/grow-detail/grow-detail.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: GrowDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowDetailComponent", function() { return GrowDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean */ "./src/app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean.ts");
/* harmony import */ var app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/http/achievement-search.service */ "./src/app/pages/tzb/custom/achievement-task/http/achievement-search.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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





var GrowDetailComponent = /** @class */ (function () {
    function GrowDetailComponent(commfunc, router, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.queryBdAchievementDetail = new app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_1__["QueryBdAchievementDetail"]();
        this.ArrayD = [
            //一级目录
            { "sel": 'L1001', name: '授信业务产品' },
            { "sel": 'L1002', name: '存款业务产品' },
            { "sel": 'L1003', name: '理财业务产品' },
            { "sel": 'L1004', name: '银行卡' },
            { "sel": 'L1005', name: '国际业务产品' },
            //二级目录
            { "sel": 'L2001', name: '一般贷款' },
            { "sel": 'L2002', name: '小本贷款' },
            { "sel": 'L2004', name: '时贷通' },
            { "sel": 'L2005', name: '自助卡' },
            { "sel": 'L2006', name: '消费信贷' },
            { "sel": 'L2007', name: '承兑' },
            { "sel": 'L2008', name: '保函' },
            { "sel": 'L2009', name: '贴现' },
            { "sel": 'L2010', name: '委托贷款' },
            { "sel": 'L2048', name: 'E融卡' },
            { "sel": 'L2011', name: '金添储蓄' },
            { "sel": 'L2012', name: '个人活期' },
            { "sel": 'L2013', name: '单位活期存款' },
            { "sel": 'L2014', name: '单位定期存款' },
            { "sel": 'L2015', name: '保证金存款' },
            { "sel": 'L2016', name: '其他存款' },
            { "sel": 'L2017', name: '理财产品' },
            { "sel": 'L2018', name: '“周周盈”稳进账理财计划' },
            { "sel": 'L2019', name: '机构理财计划' },
            { "sel": 'L2003', name: '借记卡类授信' },
            { "sel": 'L2020', name: '信用卡类授信' },
            { "sel": 'L2021', name: '准贷记卡' },
            { "sel": 'L2022', name: '出口贸易融资' },
            { "sel": 'L2023', name: '进口贸易融资' },
            { "sel": 'L2024', name: '一般贷款' },
            { "sel": 'L2025', name: '国内信用证融资' },
            { "sel": 'L2026', name: '国际结算' },
            { "sel": 'L2046', name: '结售汇业务' },
            { "sel": 'L2047', name: '国际业务存款' },
        ];
        this.msgs = []; //提示信息
        this.tableResult0 = [];
    }
    GrowDetailComponent.prototype.ngOnInit = function () {
        this.codeVal();
        this.BdAchievementDetail = this.code['BdAchievementDetail']; //我的业绩
        this.orgOrdUser = this.inValue.orgOrdUser;
        this.queryBdAchievementDetail.levelNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.operatingLevel;
        if (JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.managePermission == "Y") {
            this.queryBdAchievementDetail.orgNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.orgId;
        }
        else if (JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.managePermission == "N") {
            this.queryBdAchievementDetail.relationNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        }
        this.queryBdAchievementDetail.indexType = this.inValue.indexType;
        this.queryBdAchievementDetail.signType = this.inValue.signType;
        this.queryBdAchievementDetail.arrType = this.inValue.arrType;
        this.queryBdAchievementDetail.timeTypeId = this.inValue.timeTypeId;
        this.queryBdAchievementDetail.startTime = this.inValue.startTime;
        this.queryBdAchievementDetail.endTime = this.inValue.endTime;
        this.queryBdAchievementDetail.relationNo = this.inValue.relationNo;
        this.queryBdAchievementDetail.orgNo = this.inValue.orgNo;
        this.queryBdAchievementDetail.levelNo = this.inValue.levelNo;
        this.Detail();
    };
    GrowDetailComponent.prototype.Detail = function () {
        var _this = this;
        this.httpService.queryBdAchievementDetail(this.queryBdAchievementDetail).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.tableResult0 = data.resultList;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //码值
    GrowDetailComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GrowDetailComponent.prototype, "inValue", void 0);
    GrowDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grow-detail',
            template: __webpack_require__(/*! ./grow-detail.component.html */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/grow-detail/grow-detail.component.html"),
            styles: [__webpack_require__(/*! ./grow-detail.component.scss */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/grow-detail/grow-detail.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__["AchievementHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__["AchievementHttpService"]])
    ], GrowDetailComponent);
    return GrowDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/grow-view/grow-view.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/grow-view/grow-view.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class='ui-g-12'>\r\n        <div style=\"text-align:right;\">\r\n            <button pButton type=\"button\" label=\"图表切换\" (click)=\"iconSwitch()\"></button>\r\n        </div>\r\n        <div class=\"bg-div\" *ngIf=\"display1\">\r\n            <div class=\"tit\">{{queryBdAchievementDetail.indexType|codeValuePie:BdAchievementDetail}}增长率</div>\r\n            <div echarts [options]=\"GrowD\"></div>\r\n            <div>\r\n            </div>\r\n        </div>\r\n        <div class=\"bg-div\" *ngIf=\"display2\">\r\n            <p-dataTable [value]=\"tableResult0\" [style]=\"{'text-align':'center'}\">\r\n                <p-column header='日期' field=\"dt\"></p-column>\r\n                <p-column header='增长率' field=\"lastPeriodGrowth\"> </p-column>\r\n            </p-dataTable>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/grow-view/grow-view.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/grow-view/grow-view.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-div {\n  overflow: hidden; }\n  .bg-div .tit {\n    margin-left: 10px;\n    margin-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9hY2hpZXZlbWVudC10YXNrL3BlcmZvcm1hbmNlLWFuYWx5c2lzL2dyb3ctdmlldy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGFjaGlldmVtZW50LXRhc2tcXHBlcmZvcm1hbmNlLWFuYWx5c2lzXFxncm93LXZpZXdcXGdyb3ctdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBR1EsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vYWNoaWV2ZW1lbnQtdGFzay9wZXJmb3JtYW5jZS1hbmFseXNpcy9ncm93LXZpZXcvZ3Jvdy12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWRpdiB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLnRpdHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/grow-view/grow-view.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/grow-view/grow-view.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: GrowViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowViewComponent", function() { return GrowViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean */ "./src/app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean.ts");
/* harmony import */ var app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/http/achievement-search.service */ "./src/app/pages/tzb/custom/achievement-task/http/achievement-search.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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





var GrowViewComponent = /** @class */ (function () {
    function GrowViewComponent(commfunc, router, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.queryBdAchievementDetail = new app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_1__["QueryBdAchievementDetail"]();
        this.msgs = []; //提示信息
        this.dtC = [];
        this.lastPeriodGrowthC = [];
        this.display1 = true;
        this.display2 = false;
        this.tableResult0 = [];
    }
    GrowViewComponent.prototype.ngOnInit = function () {
        this.codeVal();
        this.BdAchievementDetail = this.code['BdAchievementDetail']; //我的业绩
        this.queryBdAchievementDetail.levelNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.operatingLevel;
        if (JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.managePermission == "Y") {
            this.queryBdAchievementDetail.orgNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.orgId;
        }
        else if (JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.managePermission == "N") {
            this.queryBdAchievementDetail.relationNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        }
        this.queryBdAchievementDetail.indexType = this.inValue.indexType;
        this.queryBdAchievementDetail.signType = this.inValue.signType;
        this.queryBdAchievementDetail.arrType = this.inValue.arrType;
        this.queryBdAchievementDetail.timeTypeId = this.inValue.timeTypeId;
        this.queryBdAchievementDetail.startTime = this.inValue.startTime;
        this.queryBdAchievementDetail.endTime = this.inValue.endTime;
        this.queryBdAchievementDetail.relationNo = this.inValue.relationNo;
        this.queryBdAchievementDetail.orgNo = this.inValue.orgNo;
        this.queryBdAchievementDetail.levelNo = this.inValue.levelNo;
        this.year = this.commfunc.getCurrentDate().substring(0, 4);
        this.month = this.commfunc.getCurrentDate().substring(4, 6);
        if (this.inValue.timeTypeId == "1") {
            this.growDw = "天数";
        }
        else {
            this.growDw = "月份";
        }
        this.Detail();
    };
    GrowViewComponent.prototype.iconSwitch = function () {
        this.display1 = !this.display1;
        this.display2 = !this.display2;
    };
    GrowViewComponent.prototype.Dt = function () {
        if (this.month == "01" || this.month == "03" || this.month == "05" || this.month == "07" || this.month == "08" || this.month == "10" || this.month == "12") {
            this.dtC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        }
        else if (this.month == "04" || this.month == "06" || this.month == "09" || this.month == "11") {
            this.dtC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        }
        //平年(判断二月份)
        if (parseInt(this.year) % 4 == 0 && this.month == "02") {
            this.dtC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
        }
        else if (parseInt(this.year) % 4 != 0 && this.month == "02") {
            this.dtC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
        }
    };
    GrowViewComponent.prototype.Detail = function () {
        var _this = this;
        this.httpService.queryBdAchievementDetail(this.queryBdAchievementDetail).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.tableResult0 = data.resultList;
                for (var i = 0; i < data.resultList.length; i++) {
                    if (_this.inValue.timeTypeId == "0") {
                        _this.dtC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
                    }
                    else if (_this.inValue.timeTypeId == "1") {
                        _this.Dt();
                    }
                    else {
                        _this.dtC.push(data.resultList[i].dt);
                    }
                    _this.lastPeriodGrowthC.push(data.resultList[i].lastPeriodGrowth);
                }
                _this.Det();
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    GrowViewComponent.prototype.Det = function () {
        this.GrowD = {
            xAxis: [
                {
                    name: this.growDw,
                    type: 'category',
                    data: this.dtC,
                }
            ],
            yAxis: [
                {
                    name: '增长率',
                    type: 'value',
                }
            ],
            series: [
                {
                    data: this.lastPeriodGrowthC,
                    type: 'line',
                }
            ]
        };
    };
    //码值
    GrowViewComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GrowViewComponent.prototype, "inValue", void 0);
    GrowViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grow-view',
            template: __webpack_require__(/*! ./grow-view.component.html */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/grow-view/grow-view.component.html"),
            styles: [__webpack_require__(/*! ./grow-view.component.scss */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/grow-view/grow-view.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__["AchievementHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__["AchievementHttpService"]])
    ], GrowViewComponent);
    return GrowViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/index-setting/index-setting.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/index-setting/index-setting.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p-pickList [source]=\"power\" [target]=\"selectPower\" [responsive]=\"true\" [showSourceControls]=\"false\" [showTargetControls]=\"false\"\r\n    sourceHeader=\"可选择的度量指标\" targetHeader=\"已选择的度量指标\"  filterBy=\"label\"\r\n    [metaKeySelection]=\"false\">\r\n    <ng-template let-col pTemplate=\"item\">\r\n        <div style=\"width:100%;text-align:center;\" class=\"ui-helper-clearfix\">\r\n            <li></li>\r\n        </div>\r\n    </ng-template>\r\n</p-pickList> -->\r\n<div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-2\" style=\"text-align:right;\">机构:</div>\r\n        <div class=\"ui-g-4\">\r\n            <input type=\"text\" pInputText (focus)=\"orgSelect()\" [(ngModel)]=\"treeOrgName\">\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-2\" style=\"text-align:right;\">人员:</div>\r\n        <div class=\"ui-g-4\">\r\n            <input type=\"text\" placeholder=\"请选择\" pInputText (focus)=\"userSelect()\" [(ngModel)]=\"personName\">\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12\">\r\n    <table border=\"1\" cellspacing=\"0\" width=\"600px\">\r\n        <tr>\r\n            <th>机构/人员</th>\r\n            <th >指标</th>\r\n            <th >指标设置</th>\r\n        </tr>\r\n        <tr>\r\n            <td rowspan=\"6\"></td>\r\n            <td>存款余额</td>\r\n            <td>\r\n                <input placeholder=\"请输入指标值\">\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>贷款余额</td>\r\n            <td>\r\n                <input placeholder=\"请输入指标值\">\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>FTP利润</td>\r\n            <td>\r\n                <input placeholder=\"请输入指标值\">\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>信用卡透支余额</td>\r\n            <td>\r\n                <input placeholder=\"请输入指标值\">\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>存款日均</td>\r\n            <td>\r\n                <input placeholder=\"请输入指标值\">\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>贷款日均</td>\r\n            <td>\r\n                <input placeholder=\"请输入指标值\">\r\n            </td>\r\n        </tr>\r\n    </table>\r\n\r\n</div>\r\n\r\n<div class=\"progress\" *ngIf=\"orgTreePage || personPage\">\r\n    <p-dialog *ngIf=\"orgTreePage\" [(visible)]=\"orgTreePage\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n        <org-tree-component (outValue)=\"treeCall($event)\"></org-tree-component>\r\n    </p-dialog>\r\n    <p-dialog *ngIf=\"personPage\" [(visible)]=\"personPage\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n        <queryUser (outValue)=\"perInfor($event)\"></queryUser>\r\n    </p-dialog>\r\n</div>\r\n<!-- 按钮 -->\r\n<div class='ui-g-12'>\r\n    <div class=\"ui-g-12 ui-md-12\" style=\"text-align:center;\">\r\n        <button pButton type=\"button\" label=\"确定\"></button>\r\n        <button pButton type=\"button\" label=\"取消\"></button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/index-setting/index-setting.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/index-setting/index-setting.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host/deep/.progress .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 800px !important;\n  min-width: 0px !important;\n  min-height: 0px !important; }\n\n:host/deep/.progress .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9hY2hpZXZlbWVudC10YXNrL3BlcmZvcm1hbmNlLWFuYWx5c2lzL2luZGV4LXNldHRpbmcvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxhY2hpZXZlbWVudC10YXNrXFxwZXJmb3JtYW5jZS1hbmFseXNpc1xcaW5kZXgtc2V0dGluZ1xcaW5kZXgtc2V0dGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLDBCQUEwQixFQUFBOztBQUU5QjtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vYWNoaWV2ZW1lbnQtdGFzay9wZXJmb3JtYW5jZS1hbmFseXNpcy9pbmRleC1zZXR0aW5nL2luZGV4LXNldHRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC9kZWVwLy5wcm9ncmVzcyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogODAwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG46aG9zdC9kZWVwLy5wcm9ncmVzcyAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7ICAgIFxyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/index-setting/index-setting.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/index-setting/index-setting.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: IndexSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexSettingComponent", function() { return IndexSettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexSettingComponent = /** @class */ (function () {
    function IndexSettingComponent(commfunc) {
        this.commfunc = commfunc;
        //表格中无数据显示的内容
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"];
        this.msgs = [];
        this.index1 = ">可选择的度量指标";
        this.index2 = ">已选择的度量指标";
        this.selectPower = [];
        this.orgTreePage = false;
        this.personPage = false;
        var dropDownSelect = this.commfunc.getSessionDataCH('dropDownSelect');
        this.treeOrgName = dropDownSelect.split(",")[0];
    }
    IndexSettingComponent.prototype.ngOnInit = function () {
    };
    IndexSettingComponent.prototype.perInfor = function (item) {
        this.personPage = false;
        this.personName = item[0].tellerName;
        this.personId = item[0].tellerId;
    };
    IndexSettingComponent.prototype.treeCall = function (param) {
        this.orgTreePage = false;
        this.treeOrgName = param.orgName;
    };
    IndexSettingComponent.prototype.orgSelect = function () {
        this.orgTreePage = true;
    };
    IndexSettingComponent.prototype.userSelect = function () {
        this.personPage = true;
    };
    IndexSettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'index-setting',
            template: __webpack_require__(/*! ./index-setting.component.html */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/index-setting/index-setting.component.html"),
            styles: [__webpack_require__(/*! ./index-setting.component.scss */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/index-setting/index-setting.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], IndexSettingComponent);
    return IndexSettingComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-achievement/more-achievement.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-achievement/more-achievement.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"float: left;\">选中的值:</div>\r\n<div style=\"float: left;\" *ngFor=\"let sel of selectedValues\">{{sel}}</div> -->\r\n\r\n<div style=\"text-align:right;\">\r\n        <button pButton type=\"button\" label=\"图表切换\" (click)=\"iconSwitch()\"></button>\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"select()\"></button>\r\n</div>\r\n<div class=\"ui-g-12\" *ngIf=\"display1\">\r\n        <!-- 存款余额 真实业绩 -->\r\n        <div *ngFor=\"let item of resultList\">\r\n                <div class=\"ui-g-4\">\r\n                        <div class=\"bg-fl\">\r\n                                <p-checkbox value=\"{{item.program}}\" [(ngModel)]=\"selectedValues\" (onChange)=\"check(item)\"></p-checkbox>\r\n                                <div class=\"wz\"> {{item.program}}.{{item.program|codeValuePie:BdAchievementYe}}</div>\r\n                                <div (click)=\"bv(item.program)\" class=\"v-det\">查看详情></div>\r\n                                <div class=\"the\">当前排名:{{item.sameLevelOrder}}</div>\r\n                                <img src=\"../assets/pages/images/gram_0{{item.program}}.png\" class=\"theme\">\r\n                                <div class=\"typeface\">\r\n                                        <div>{{item.amount}}</div>\r\n                                        <div>(单位.万元)</div>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g-12\" *ngIf=\"display2\">\r\n        <!-- 存款余额 指标业绩-->\r\n        <div *ngFor=\"let item of saveCustom\">\r\n                <div class=\"ui-g-4\">\r\n                        <div class=\"bg-div\">\r\n                                <p-checkbox class=\"position:absolute;z-index:100\" value=\"{{item.program}}\" [(ngModel)]=\"selectedValues\" (onChange)=\"check(item)\"></p-checkbox>\r\n                                <div class=\"wen-l\"> {{item.program}}.{{item.program|codeValuePie:BdAchievementYe}}</div>\r\n                                <div class=\"wen-i\" (click)=\"bv(item.program)\">查看详情></div>\r\n                                <div class=\"the\">当前排名:{{item.sameLevelOrder}}</div>\r\n                                <div echarts class=\"bg-div2\" [options]=\"item.opt\"></div>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g-12\" *ngIf=\"display3\">\r\n        <p-dataTable [value]=\"resultList\" [style]=\"{'text-align':'center'}\">\r\n                <p-column header='机构/人员' field=\"orgOrdUser\"></p-column>\r\n                <p-column header='业绩指标项' field=\"program\">\r\n                        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                {{col.program|codeValuePie:BdAchievementYe}}\r\n                        </ng-template>\r\n                </p-column>\r\n                <p-column header='业绩值' field=\"amount\"> </p-column>\r\n                <p-column header='业绩任务值' field=\"arrangementValue\" *ngIf=\"resultList[0].arrangementValue\"></p-column>\r\n                <p-column header='业绩达成率' field=\"yearTask\" *ngIf=\"resultList[0].yearTask\"></p-column>\r\n                <p-column header='排名' field=\"sameLevelOrder\"></p-column>\r\n        </p-dataTable>\r\n</div>\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n\r\n<p-dialog *ngIf=\"dia\" [(visible)]=\"dia\" modal=\"modal\" width=\"850\" [responsive]=\"true\" [positionTop]=10>\r\n        <p-header>\r\n                {{param|codeValuePie:BdAchievementDetail}}\r\n        </p-header>\r\n        <div>\r\n                <balance-view [inValue]=\"AchiDetail\"></balance-view>\r\n        </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-achievement/more-achievement.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-achievement/more-achievement.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-fl {\n  height: 350px;\n  background-color: #ededed; }\n  .bg-fl .the {\n    padding-left: 400px;\n    font-size: 15px;\n    margin-top: -10px;\n    font-size: 15px; }\n  .bg-fl .v-det {\n    text-align: left;\n    padding-left: 20px;\n    font-size: small;\n    color: #19b0c8;\n    z-index: 10; }\n  .bg-fl .v-det:hover {\n      cursor: pointer; }\n  .bg-fl .pm {\n    float: right;\n    padding-right: 5%; }\n  .bg-fl .pm:hover {\n      cursor: pointer; }\n  .bg-fl .theme {\n    margin: 0 auto;\n    display: block;\n    padding-left: 5%; }\n  .bg-fl .typeface {\n    margin-top: -80px;\n    text-align: center; }\n  .bg-fl .wz {\n    position: absolute;\n    margin-left: 2%;\n    margin-top: -20PX; }\n  .bg-div {\n  height: 350px;\n  background-color: #ededed; }\n  .bg-div .wen-l {\n    padding-left: 20px;\n    margin-top: -20px;\n    z-index: 10; }\n  .bg-div .wen-i {\n    position: absolute;\n    padding-left: 20px;\n    font-size: small;\n    color: #19b0c8;\n    z-index: 10; }\n  .bg-div .wen-i:hover {\n      cursor: pointer; }\n  .bg-div .the {\n    padding-left: 400px;\n    font-size: 15px;\n    margin-top: -10px;\n    font-size: 15px; }\n  .bg-div .pm {\n    z-index: 100;\n    position: relative;\n    float: right;\n    padding-right: 5%; }\n  .bg-div .pm:hover {\n      cursor: pointer;\n      z-index: 100; }\n  .bg-div .bg-div2 {\n    height: 380px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9hY2hpZXZlbWVudC10YXNrL3BlcmZvcm1hbmNlLWFuYWx5c2lzL21vcmUtYWNoaWV2ZW1lbnQvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxhY2hpZXZlbWVudC10YXNrXFxwZXJmb3JtYW5jZS1hbmFseXNpc1xcbW9yZS1hY2hpZXZlbWVudFxcbW9yZS1hY2hpZXZlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYix5QkFBeUIsRUFBQTtFQUY3QjtJQUlRLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTtFQVB2QjtJQVdRLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXLEVBQUE7RUFmbkI7TUFpQlksZUFBZSxFQUFBO0VBakIzQjtJQXFCUSxZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUF0QnpCO01Bd0JZLGVBQWUsRUFBQTtFQXhCM0I7SUE0QlEsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTtFQTlCeEI7SUFpQ1EsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0VBbEMxQjtJQXFDUSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBSXpCO0VBQ0ksYUFBYTtFQUNiLHlCQUF5QixFQUFBO0VBRjdCO0lBS1Esa0JBQWtCO0lBQ2xCLGlCQUFrQjtJQUNsQixXQUFXLEVBQUE7RUFQbkI7SUFVUSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVyxFQUFBO0VBZG5CO01BZ0JZLGVBQWUsRUFBQTtFQWhCM0I7SUFvQlEsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZSxFQUFBO0VBdkJ2QjtJQTBCUSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFQTdCekI7TUErQlksZUFBZTtNQUNmLFlBQVksRUFBQTtFQWhDeEI7SUFxQ1EsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9hY2hpZXZlbWVudC10YXNrL3BlcmZvcm1hbmNlLWFuYWx5c2lzL21vcmUtYWNoaWV2ZW1lbnQvbW9yZS1hY2hpZXZlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1mbCB7XHJcbiAgICBoZWlnaHQ6IDM1MHB4OyAvLyAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICAgIC50aGUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIC52LWRldCB7XHJcbiAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucG0ge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aGVtZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIH1cclxuICAgIC50eXBlZmFjZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTgwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnd6IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMFBYO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmctZGl2IHtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gICAgLndlbi1sIHtcclxuICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0gMjBweDtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgIH1cclxuICAgIC53ZW4taSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRoZSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnBtIHtcclxuICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJnLWRpdjIge1xyXG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzgwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-achievement/more-achievement.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-achievement/more-achievement.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: MoreAchievementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreAchievementComponent", function() { return MoreAchievementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean */ "./src/app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean.ts");
/* harmony import */ var app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/http/achievement-search.service */ "./src/app/pages/tzb/custom/achievement-task/http/achievement-search.service.ts");
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





var MoreAchievementComponent = /** @class */ (function () {
    function MoreAchievementComponent(commfunc, router, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.queryBdAchievementYe = new app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_2__["QueryBdAchievementYe"]();
        this.selectClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //单机事件
        this.display1 = false;
        this.display2 = false;
        this.display3 = false;
        this.selectedValues = ['1', '2', '3'];
        this.selectedValues1 = ['1', '2', '3'];
        this.msgs = []; //提示信息
        this.saveCustom = [];
        this.dia = false;
    }
    MoreAchievementComponent.prototype.ngOnInit = function () {
        this.codeVal();
        this.BdAchievementYe = this.code['BdAchievementYe']; //我的业绩
        this.BdAchievementDetail = this.code['BdAchievementDetail']; //我的业绩
        this.queryBdAchievementYe.timeTypeId = this.inValue.timeTypeId;
        this.queryBdAchievementYe.levelNo = this.inValue.levelNo;
        this.queryBdAchievementYe.startTime = this.inValue.startTime;
        this.queryBdAchievementYe.endTime = this.inValue.endTime;
        this.queryBdAchievementYe.signType = this.inValue.signType;
        this.queryBdAchievementYe.arrType = "0";
        this.queryBdAchievementYe.relationNo = this.inValue.relationNo;
        this.queryBdAchievementYe.orgNo = this.inValue.orgNo;
        this.queryBdAchievementYe.levelNo = this.inValue.levelNo;
        if (this.inValue.signType == "1") {
            this.display1 = true;
            this.display2 = false;
        }
        else if (this.inValue.signType == "2") {
            this.display1 = false;
            this.display2 = true;
        }
        this.queryAlways();
        this.AchievementYe();
    };
    MoreAchievementComponent.prototype.bv = function (item) {
        var param = {
            indexType: item,
            signType: this.inValue.signType,
            arrType: '0',
            timeTypeId: this.inValue.timeTypeId,
            startTime: this.inValue.startTime,
            endTime: this.inValue.endTime,
            relationNo: this.inValue.relationNo,
            orgNo: this.inValue.orgNo,
            levelNo: this.inValue.levelNo,
        };
        this.AchiDetail = param;
        this.dia = true;
        this.title = item;
        //	this.dia = true;
    };
    MoreAchievementComponent.prototype.queryAlways = function () {
        var _this = this;
        var user = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        var orgId = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
        var param = {
            listShowsIdType: '1',
            listShowsIdModule: 'myPFM',
            createOrg: orgId,
            createdByUserLogin: user
        };
        this.httpService.selectUserListShow(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.selectedValues = JSON.parse(data.exploreConditionObject).myPFM;
            }
        });
    };
    //码值
    MoreAchievementComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    MoreAchievementComponent.prototype.AchievementYe = function () {
        var _this = this;
        this.httpService.queryBdAchievementYe(this.queryBdAchievementYe).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.resultList = data.resultList;
                if (_this.inValue.signType == "2") {
                    for (var _i = 0, _a = _this.resultList; _i < _a.length; _i++) {
                        var i = _a[_i];
                        var obj = {};
                        obj['program'] = i.program;
                        obj['sameLevelOrder'] = i.sameLevelOrder;
                        obj['opt'] = {
                            tooltip: {
                                formatter: "{a} <br/>{b}:{c}%"
                            },
                            toolbox: {},
                            series: [
                                {
                                    name: '业务指标',
                                    type: "gauge",
                                    detail: { formatter: '{value}%' },
                                    data: [{ value: parseFloat(i.yearTask), name: '完成率' }]
                                }
                            ]
                        };
                        _this.saveCustom.push(obj);
                    }
                }
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: "任务查询成功！" });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    MoreAchievementComponent.prototype.iconSwitch = function () {
        if (this.inValue.signType == "1") {
            this.display1 = !this.display1;
            this.display3 = !this.display3;
        }
        else if (this.inValue.signType == "2") {
            this.display2 = !this.display2;
            this.display3 = !this.display3;
        }
    };
    MoreAchievementComponent.prototype.check = function (item) {
        if (this.selectedValues.length) {
            if (this.selectedValues.length > 3) {
                for (var i = 0; i < this.selectedValues.length; i++) {
                    if (i > 2) {
                        this.selectedValues[i] = undefined;
                        if (this.selectedValues[i] == undefined) {
                            this.selectedValues.splice(i, 1);
                            i--;
                        }
                    }
                }
                this.msgs.push({ severity: 'error', summary: '提示', detail: "只能选中三个显示在页面中！" });
            }
            else {
                if (this.selectedValues[i] != undefined) {
                    this.selectedValues.push(this.selectedValues[i]);
                }
            }
        }
        else {
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请选这其中的显示在页面中！" });
        }
    };
    MoreAchievementComponent.prototype.select = function () {
        var _this = this;
        var user = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        var orgId = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
        var param = {
            listShowsIdType: '1',
            listShowsIdModule: 'myPFM',
            createOrg: orgId,
            createdByUserLogin: user,
            exploreConditionObject: JSON.stringify({ myPFM: this.selectedValues })
        };
        this.httpService.addUserListShow(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.selectClick.emit(_this.selectedValues);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MoreAchievementComponent.prototype, "selectClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MoreAchievementComponent.prototype, "inValue", void 0);
    MoreAchievementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'more-achievement',
            template: __webpack_require__(/*! ./more-achievement.component.html */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-achievement/more-achievement.component.html"),
            styles: [__webpack_require__(/*! ./more-achievement.component.scss */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-achievement/more-achievement.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_3__["AchievementHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_3__["AchievementHttpService"]])
    ], MoreAchievementComponent);
    return MoreAchievementComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-avecontrast/more-avecontrast.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-avecontrast/more-avecontrast.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:right;\">\r\n    <button pButton type=\"button\" label=\"图表切换\" (click)=\"iconSwitch()\"></button>\r\n    <button pButton type=\"button\" label=\"确定\" (click)=\"select()\"></button>\r\n\r\n</div>\r\n<div class=\"ui-g-12\" *ngIf=\"display1\">\r\n    <div *ngFor=\"let item of resultList\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"bg\">\r\n                <p-checkbox name=\"groupname\" value=\"{{item.program}}\" [(ngModel)]=\"selectedValues\" (onChange)=\"check(item)\"></p-checkbox>\r\n                <div class=\"grow\">{{item.program}}.{{item.program|codeValuePie:BdAchievementGrow}}</div>\r\n                <div (click)=\"grow(item.program)\" class=\"v-det\">查看详情></div>\r\n                <div echarts class=\"bg-div\" [options]=\"Grow0\" *ngIf=\"item.program==1\"></div>\r\n                <div echarts class=\"bg-div\" [options]=\"Grow1\" *ngIf=\"item.program==2\"></div>\r\n                <div echarts class=\"bg-div\" [options]=\"Grow2\" *ngIf=\"item.program==3\"></div>\r\n                <div echarts class=\"bg-div\" [options]=\"Grow3\" *ngIf=\"item.program==4\"></div>\r\n                <!-- <div class=\"sm-st\">\r\n                    <div class=\"bl\"></div>\r\n                    <div class=\"transverse\">\r\n                        <div class=\"lb\" style=\"background-color:red;\"></div>\r\n                        <span class=\"wz\"> 我的{{item.program|codeValuePie:BdAchievementGrow}}</span>\r\n                    </div>\r\n                    <div class=\"transverse\">\r\n                        <div class=\"lb\" style=\"background-color:yellow;\"></div>\r\n                        <span class=\"wz\">部门平均{{item.program|codeValuePie:BdAchievementGrow}}</span>\r\n                    </div>\r\n                    <div class=\"transverse\">\r\n                        <div class=\"lb\" style=\"background-color:orange;\"></div>\r\n                        <span class=\"wz\">部门最低{{item.program|codeValuePie:BdAchievementGrow}}</span>\r\n                    </div>\r\n                    <div class=\"transverse\">\r\n                        <div class=\"lb\" style=\"background-color:green;\"></div>\r\n                        <span class=\"wz\">部门最高{{item.program|codeValuePie:BdAchievementGrow}}</span>\r\n                    </div>\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12\" *ngIf=\"display2\">\r\n    <div>{{title0|codeValuePie:BdAchievementGrow}}</div>\r\n    <p-dataTable [value]=\"tableResult0\" [style]=\"{'text-align':'center'}\">\r\n        <p-column header='月份' field=\"dt\"></p-column>\r\n        <p-column header='我的值' field=\"amount\"> </p-column>\r\n        <p-column header='平均值' field=\"sameLevelAverAmount\"></p-column>\r\n        <p-column header='最高值' field=\"sameLevelOrderMax\"></p-column>\r\n        <p-column header='最低值' field=\"sameLevelOrderMin\"></p-column> -->\r\n    </p-dataTable>\r\n    <div>{{title1|codeValuePie:BdAchievementGrow}}</div>\r\n    <p-dataTable [value]=\"tableResult1\" [style]=\"{'text-align':'center'}\">\r\n        <p-column header='月份' field=\"dt\"></p-column>\r\n        <p-column header='我的值' field=\"amount\"> </p-column>\r\n        <p-column header='平均值' field=\"sameLevelAverAmount\"></p-column>\r\n        <p-column header='最高值' field=\"sameLevelOrderMax\"></p-column>\r\n        <p-column header='最低值' field=\"sameLevelOrderMin\"></p-column> -->\r\n    </p-dataTable>\r\n    <div>{{title2|codeValuePie:BdAchievementGrow}}</div>\r\n    <p-dataTable [value]=\"tableResult2\" [style]=\"{'text-align':'center'}\">\r\n        <p-column header='月份' field=\"dt\"></p-column>\r\n        <p-column header='我的值' field=\"amount\"> </p-column>\r\n        <p-column header='平均值' field=\"sameLevelAverAmount\"></p-column>\r\n        <p-column header='最高值' field=\"sameLevelOrderMax\"></p-column>\r\n        <p-column header='最低值' field=\"sameLevelOrderMin\"></p-column> -->\r\n    </p-dataTable>\r\n    <div>{{title3|codeValuePie:BdAchievementGrow}}</div>\r\n    <p-dataTable [value]=\"tableResult3\" [style]=\"{'text-align':'center'}\">\r\n        <p-column header='月份' field=\"dt\"></p-column>\r\n        <p-column header='我的值' field=\"amount\"> </p-column>\r\n        <p-column header='平均值' field=\"sameLevelAverAmount\"></p-column>\r\n        <p-column header='最高值' field=\"sameLevelOrderMax\"></p-column>\r\n        <p-column header='最低值' field=\"sameLevelOrderMin\"></p-column> -->\r\n    </p-dataTable>\r\n\r\n\r\n</div>\r\n\r\n\r\n<p-dialog *ngIf=\"dia\" [(visible)]=\"dia\" modal=\"modal\" width=\"850\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{item|codeValuePie:BdAchievementDetail}}\r\n    </p-header>\r\n    <div>\r\n        <grow-view [inValue]=\"GrowDetail\"></grow-view>\r\n    </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-avecontrast/more-avecontrast.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-avecontrast/more-avecontrast.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  height: 350px;\n  background-color: #ededed; }\n  .bg .bg-div {\n    height: 300px; }\n  .bg .sm-st {\n    display: flex; }\n  .bg .sm-st .bl {\n      float: left; }\n  .bg .sm-st .transverse {\n      float: left;\n      width: 25%;\n      height: 20px; }\n  .bg .sm-st .transverse .lb {\n        width: 10px;\n        height: 10px;\n        border-radius: 5px; }\n  .bg .sm-st .transverse .wz {\n        position: absolute;\n        padding-left: 15px;\n        margin-top: -14px; }\n  .grow {\n  margin-left: 20px;\n  margin-top: -20px; }\n  .v-det {\n  position: absolute;\n  text-align: left;\n  margin-left: 180px;\n  margin-top: -20px;\n  font-size: small;\n  color: #19b0c8;\n  z-index: 10; }\n  .v-det:hover {\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9hY2hpZXZlbWVudC10YXNrL3BlcmZvcm1hbmNlLWFuYWx5c2lzL21vcmUtYXZlY29udHJhc3QvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxhY2hpZXZlbWVudC10YXNrXFxwZXJmb3JtYW5jZS1hbmFseXNpc1xcbW9yZS1hdmVjb250cmFzdFxcbW9yZS1hdmVjb250cmFzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYix5QkFBeUIsRUFBQTtFQUY3QjtJQUlRLGFBQWEsRUFBQTtFQUpyQjtJQU9RLGFBQWEsRUFBQTtFQVByQjtNQVVZLFdBQVcsRUFBQTtFQVZ2QjtNQWFZLFdBQVc7TUFDWCxVQUFVO01BQ1YsWUFBWSxFQUFBO0VBZnhCO1FBaUJnQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQixFQUFBO0VBbkJsQztRQXNCZ0Isa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixpQkFBaUIsRUFBQTtFQU1qQztFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtFQUdyQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVcsRUFBQTtFQVBmO0lBU1EsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9hY2hpZXZlbWVudC10YXNrL3BlcmZvcm1hbmNlLWFuYWx5c2lzL21vcmUtYXZlY29udHJhc3QvbW9yZS1hdmVjb250cmFzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICAgIC5iZy1kaXYge1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICAuc20tc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IC8vICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgLmJsIHtcclxuICAgICAgICAgICAgLy8gd2lkdGg6IDIlOyAvLyBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudHJhbnN2ZXJzZSB7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIC5sYiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAud3oge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ncm93IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuXHJcbi52LWRldCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-avecontrast/more-avecontrast.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-avecontrast/more-avecontrast.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: MoreAvecontrastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreAvecontrastComponent", function() { return MoreAvecontrastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean */ "./src/app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean.ts");
/* harmony import */ var app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/http/achievement-search.service */ "./src/app/pages/tzb/custom/achievement-task/http/achievement-search.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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





var MoreAvecontrastComponent = /** @class */ (function () {
    function MoreAvecontrastComponent(commfunc, router, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.queryBdAchievementGrow = new app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_1__["QueryBdAchievementGrow"]();
        this.selectClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //单机事件
        this.display1 = true;
        this.display2 = false;
        this.dia = false;
        this.msgs = []; //提示信息
        this.dtC = [];
        this.dtC0 = [];
        this.amountC0 = [];
        this.sameLevelAverAmountC0 = [];
        this.sameLevelOrderMaxC0 = [];
        this.sameLevelOrderMinC0 = [];
        this.dtC1 = [];
        this.amountC1 = [];
        this.sameLevelAverAmountC1 = [];
        this.sameLevelOrderMaxC1 = [];
        this.sameLevelOrderMinC1 = [];
        this.dtC2 = [];
        this.amountC2 = [];
        this.sameLevelAverAmountC2 = [];
        this.sameLevelOrderMaxC2 = [];
        this.sameLevelOrderMinC2 = [];
        this.dtC3 = [];
        this.amountC3 = [];
        this.sameLevelAverAmountC3 = [];
        this.sameLevelOrderMaxC3 = [];
        this.sameLevelOrderMinC3 = [];
        this.selectedValues = [];
        this.tableResult0 = [];
        this.tableResult1 = [];
        this.tableResult2 = [];
        this.tableResult3 = [];
    }
    MoreAvecontrastComponent.prototype.ngOnInit = function () {
        this.codeVal();
        this.BdAchievementGrow = this.code['BdAchievementGrow']; //我的成长
        this.BdAchievementDetail = this.code['BdAchievementDetail']; //我的业绩
        this.queryBdAchievementGrow.startTime = this.inValue.startTime;
        this.queryBdAchievementGrow.endTime = this.inValue.endTime;
        this.queryBdAchievementGrow.timeTypeId = this.inValue.timeTypeId;
        this.queryBdAchievementGrow.signType = this.inValue.signType;
        this.queryBdAchievementGrow.relationNo = this.inValue.relationNo;
        this.queryBdAchievementGrow.orgNo = this.inValue.orgNo;
        this.queryBdAchievementGrow.levelNo = this.inValue.levelNo;
        this.queryBdAchievementGrow.arrType = "0";
        this.year = this.commfunc.getCurrentDate().substring(0, 4);
        this.month = this.commfunc.getCurrentDate().substring(4, 6);
        if (this.inValue.timeTypeId == "1") {
            this.growDw = "天数";
        }
        else {
            this.growDw = "月份";
        }
        this.queryAlways();
        this.AchievementGrow();
    };
    MoreAvecontrastComponent.prototype.grow = function (item) {
        var param = {
            indexType: item,
            signType: this.inValue.signType,
            arrType: '1',
            timeTypeId: this.inValue.timeTypeId,
            startTime: this.inValue.startTime,
            endTime: this.inValue.endTime,
            relationNo: this.inValue.relationNo,
            orgNo: this.inValue.orgNo,
            levelNo: this.inValue.levelNo,
        };
        this.GrowDetail = param;
        this.title = item;
        this.dia = true;
    };
    MoreAvecontrastComponent.prototype.queryAlways = function () {
        var _this = this;
        var user = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        var orgId = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
        var param = {
            listShowsIdType: '1',
            listShowsIdModule: 'myGrow',
            createOrg: orgId,
            createdByUserLogin: user
        };
        this.httpService.selectUserListShow(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.selectedValues = JSON.parse(data.exploreConditionObject).myGrow;
            }
        });
    };
    MoreAvecontrastComponent.prototype.AchievementGrow = function () {
        var _this = this;
        this.queryBdAchievementGrow.arrType = "1";
        this.resultList0 = [];
        this.tableResult0 = [];
        this.tableResult1 = [];
        this.tableResult2 = [];
        this.tableResult3 = [];
        this.dtC0 = [];
        this.amountC0 = [];
        this.sameLevelAverAmountC0 = [];
        this.sameLevelOrderMaxC0 = [];
        this.sameLevelOrderMinC0 = [];
        this.dtC1 = [];
        this.amountC1 = [];
        this.sameLevelAverAmountC1 = [];
        this.sameLevelOrderMaxC1 = [];
        this.sameLevelOrderMinC1 = [];
        this.dtC2 = [];
        this.amountC2 = [];
        this.sameLevelAverAmountC2 = [];
        this.sameLevelOrderMaxC2 = [];
        this.sameLevelOrderMinC2 = [];
        this.dtC3 = [];
        this.amountC3 = [];
        this.sameLevelAverAmountC3 = [];
        this.sameLevelOrderMaxC3 = [];
        this.sameLevelOrderMinC3 = [];
        this.httpService.queryBdAchievementGrow(this.queryBdAchievementGrow).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.resultList0 = data.resultList;
                _this.title0 = data.resultList[0].program;
                _this.title1 = data.resultList[1].program;
                _this.title2 = data.resultList[2].program;
                _this.title3 = data.resultList[3].program;
                _this.tableResult0 = data.resultList[0].programList;
                _this.tableResult1 = data.resultList[1].programList;
                _this.tableResult2 = data.resultList[2].programList;
                _this.tableResult3 = data.resultList[3].programList;
                _this.resultList = data.resultList;
                _this.Growup();
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: "任务查询成功！" });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    MoreAvecontrastComponent.prototype.Dt = function () {
        if (this.month == "01" || this.month == "03" || this.month == "05" || this.month == "07" || this.month == "08" || this.month == "10" || this.month == "12") {
            this.dtC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
            this.dtC0 = this.dtC;
            this.dtC1 = this.dtC;
            this.dtC2 = this.dtC;
            this.dtC3 = this.dtC;
        }
        else if (this.month == "04" || this.month == "06" || this.month == "09" || this.month == "11") {
            this.dtC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
            this.dtC0 = this.dtC;
            this.dtC1 = this.dtC;
            this.dtC2 = this.dtC;
            this.dtC3 = this.dtC;
        }
        //平年(判断二月份)
        if (parseInt(this.year) % 4 == 0 && this.month == "02") {
            this.dtC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29];
            this.dtC0 = this.dtC;
            this.dtC1 = this.dtC;
            this.dtC2 = this.dtC;
            this.dtC3 = this.dtC;
        }
        else if (parseInt(this.year) % 4 != 0 && this.month == "02") {
            this.dtC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28];
            this.dtC0 = this.dtC;
            this.dtC1 = this.dtC;
            this.dtC2 = this.dtC;
            this.dtC3 = this.dtC;
        }
    };
    MoreAvecontrastComponent.prototype.Growup = function () {
        for (var j = 0; j < this.resultList[0].programList.length; j++) {
            if (this.inValue.timeTypeId == "0") {
                this.dtC0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            }
            else if (this.inValue.timeTypeId == "1") {
                this.Dt();
            }
            else {
                this.dtC0.push(this.resultList[0].programList[j].dt);
            }
            this.amountC0.push(this.resultList[0].programList[j].amount);
            this.sameLevelAverAmountC0.push(this.resultList[0].programList[j].sameLevelAverAmount);
            this.sameLevelOrderMaxC0.push(this.resultList[0].programList[j].sameLevelOrderMax);
            this.sameLevelOrderMinC0.push(this.resultList[0].programList[j].sameLevelOrderMin);
            this.Grow0 = {
                color: ['#3398DB'],
                title: {
                    text: '(单位.万元)',
                    textStyle: {
                        fontSize: '12',
                    },
                    x: '6px',
                    y: '12px',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: { data: ['我的存款日均', '部门平均存款日均', '部门最低存款日均', '部门最高存款日均'] },
                grid: {
                    left: 70,
                    bottom: '17%'
                },
                xAxis: [
                    {
                        name: this.growDw,
                        boundaryGap: false,
                        type: 'category',
                        data: this.dtC0,
                    }
                ],
                yAxis: [
                    {}
                ],
                series: [
                    {
                        name: '我的存款日均',
                        color: ['red'],
                        data: this.amountC0,
                        type: 'line',
                        lineStyle: {
                            normal: {
                                width: 5,
                            }
                        }
                    }, {
                        name: '部门平均存款日均',
                        color: ['yellow',],
                        data: this.sameLevelAverAmountC0,
                        type: 'line'
                    }, {
                        name: '部门最低存款日均',
                        color: ['orange',],
                        data: this.sameLevelOrderMinC0,
                        type: 'line'
                    }, {
                        name: '部门最高存款日均',
                        color: ['green',],
                        data: this.sameLevelOrderMaxC0,
                        type: 'line'
                    }
                ]
            };
        }
        for (var j = 0; j < this.resultList[1].programList.length; j++) {
            if (this.inValue.timeTypeId == "0") {
                this.dtC1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            }
            else if (this.inValue.timeTypeId == "1") {
                this.Dt();
            }
            else {
                this.dtC1.push(this.resultList[1].programList[j].dt);
            }
            this.amountC1.push(this.resultList[1].programList[j].amount);
            this.sameLevelAverAmountC1.push(this.resultList[1].programList[j].sameLevelAverAmount);
            this.sameLevelOrderMaxC1.push(this.resultList[1].programList[j].sameLevelOrderMax);
            this.sameLevelOrderMinC1.push(this.resultList[1].programList[j].sameLevelOrderMin);
            this.Grow1 = {
                color: ['#3398DB'],
                title: {
                    text: '(单位.万元)',
                    textStyle: {
                        fontSize: '12',
                    },
                    x: '6px',
                    y: '12px',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: { data: ['我的贷款日均', '部门平均贷款日均', '部门最低贷款日均', '部门最高贷款日均'] },
                grid: {
                    left: 70,
                    bottom: '17%'
                },
                xAxis: [
                    {
                        name: this.growDw,
                        boundaryGap: false,
                        type: 'category',
                        data: this.dtC1,
                    }
                ],
                yAxis: [
                    {}
                ],
                series: [
                    {
                        name: '我的贷款日均',
                        color: ['red'],
                        data: this.amountC1,
                        type: 'line',
                        lineStyle: {
                            normal: {
                                width: 5,
                            }
                        }
                    }, {
                        name: '部门平均贷款日均',
                        color: ['yellow',],
                        data: this.sameLevelAverAmountC1,
                        type: 'line'
                    }, {
                        name: '部门最低贷款日均',
                        color: ['orange',],
                        data: this.sameLevelOrderMinC1,
                        type: 'line'
                    }, {
                        name: '部门最高贷款日均',
                        color: ['green',],
                        data: this.sameLevelOrderMaxC1,
                        type: 'line'
                    }
                ]
            };
        }
        for (var j = 0; j < this.resultList[2].programList.length; j++) {
            if (this.inValue.timeTypeId == "0") {
                this.dtC2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            }
            else if (this.inValue.timeTypeId == "1") {
                this.Dt();
            }
            else {
                this.dtC2.push(this.resultList[2].programList[j].dt);
            }
            this.amountC2.push(this.resultList[2].programList[j].amount);
            this.sameLevelAverAmountC2.push(this.resultList[2].programList[j].sameLevelAverAmount);
            this.sameLevelOrderMaxC2.push(this.resultList[2].programList[j].sameLevelOrderMax);
            this.sameLevelOrderMinC2.push(this.resultList[2].programList[j].sameLevelOrderMin);
            this.Grow2 = {
                color: ['#3398DB'],
                title: {
                    text: '(单位.万元)',
                    textStyle: {
                        fontSize: '12',
                    },
                    x: '6px',
                    y: '12px',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: { data: ['我的信用卡透支余额', '部门平均信用卡透支余额', '部门最低信用卡透支余额', '部门最高信用卡透支余额'] },
                grid: {
                    left: 70,
                    bottom: '17%'
                },
                xAxis: [
                    {
                        name: this.growDw,
                        boundaryGap: false,
                        type: 'category',
                        data: this.dtC2,
                    }
                ],
                yAxis: [
                    {}
                ],
                series: [
                    {
                        name: '我的信用卡透支余额',
                        color: ['red'],
                        data: this.amountC2,
                        type: 'line',
                        lineStyle: {
                            normal: {
                                width: 5,
                            }
                        }
                    }, {
                        name: '部门平均信用卡透支余额',
                        color: ['yellow',],
                        data: this.sameLevelAverAmountC2,
                        type: 'line'
                    }, {
                        name: '部门最低信用卡透支余额',
                        color: ['orange',],
                        data: this.sameLevelOrderMinC2,
                        type: 'line'
                    }, {
                        name: '部门最高信用卡透支余额',
                        color: ['green',],
                        data: this.sameLevelOrderMaxC2,
                        type: 'line'
                    }
                ]
            };
        }
        for (var j = 0; j < this.resultList[3].programList.length; j++) {
            if (this.inValue.timeTypeId == "0") {
                this.dtC3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            }
            else if (this.inValue.timeTypeId == "1") {
                this.Dt();
            }
            else {
                this.dtC3.push(this.resultList[3].programList[j].dt);
            }
            this.amountC3.push(this.resultList[3].programList[j].amount);
            this.sameLevelAverAmountC3.push(this.resultList[3].programList[j].sameLevelAverAmount);
            this.sameLevelOrderMaxC3.push(this.resultList[3].programList[j].sameLevelOrderMax);
            this.sameLevelOrderMinC3.push(this.resultList[3].programList[j].sameLevelOrderMin);
            this.Grow3 = {
                color: ['#3398DB'],
                title: {
                    text: '(单位.万元)',
                    textStyle: {
                        fontSize: '12',
                    },
                    x: '6px',
                    y: '12px',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: { data: ['我的FTP利润', '部门平均FTP利润', '部门最低FTP利润', '部门最高FTP利润'] },
                grid: {
                    left: 70,
                    bottom: '17%'
                },
                xAxis: [
                    {
                        name: this.growDw,
                        boundaryGap: false,
                        type: 'category',
                        data: this.dtC3,
                    }
                ],
                yAxis: [
                    {}
                ],
                series: [
                    {
                        name: '我的FTP利润',
                        color: ['red'],
                        data: this.amountC3,
                        type: 'line',
                        lineStyle: {
                            normal: {
                                width: 5,
                            }
                        }
                    }, {
                        name: '部门平均FTP利润',
                        color: ['yellow',],
                        data: this.sameLevelAverAmountC3,
                        type: 'line'
                    }, {
                        name: '部门最低FTP利润',
                        color: ['orange',],
                        data: this.sameLevelOrderMinC3,
                        type: 'line'
                    }, {
                        name: '部门最高FTP利润',
                        color: ['green',],
                        data: this.sameLevelOrderMaxC3,
                        type: 'line'
                    }
                ]
            };
        }
    };
    //码值
    MoreAvecontrastComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    MoreAvecontrastComponent.prototype.iconSwitch = function () {
        this.display1 = !this.display1;
        this.display2 = !this.display2;
    };
    MoreAvecontrastComponent.prototype.check = function (item) {
        if (this.selectedValues.length) {
            if (this.selectedValues.length > 2) {
                for (var i = 0; i < this.selectedValues.length; i++) {
                    if (i > 1) {
                        this.selectedValues[i] = undefined;
                        if (this.selectedValues[i] == undefined) {
                            this.selectedValues.splice(i, 1);
                            i--;
                        }
                    }
                }
                this.msgs.push({ severity: 'error', summary: '提示', detail: "只能选中二个显示在页面中！" });
            }
            else {
                if (this.selectedValues[i] != undefined) {
                    this.selectedValues.push(this.selectedValues[i]);
                }
            }
        }
        else {
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请选这其中的显示在页面中！" });
        }
    };
    MoreAvecontrastComponent.prototype.select = function () {
        var _this = this;
        var user = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        var orgId = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
        var param = {
            listShowsIdType: '1',
            listShowsIdModule: 'myGrow',
            createOrg: orgId,
            createdByUserLogin: user,
            exploreConditionObject: JSON.stringify({ myGrow: this.selectedValues })
        };
        this.httpService.addUserListShow(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.selectClick.emit(false);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MoreAvecontrastComponent.prototype, "selectClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MoreAvecontrastComponent.prototype, "inValue", void 0);
    MoreAvecontrastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'more-avecontrast',
            template: __webpack_require__(/*! ./more-avecontrast.component.html */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-avecontrast/more-avecontrast.component.html"),
            styles: [__webpack_require__(/*! ./more-avecontrast.component.scss */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-avecontrast/more-avecontrast.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__["AchievementHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__["AchievementHttpService"]])
    ], MoreAvecontrastComponent);
    return MoreAvecontrastComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-ratio/more-ratio.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-ratio/more-ratio.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:right;\">\r\n    <button pButton type=\"button\" label=\"图表切换\" (click)=\"iconSwitch()\"></button>\r\n    <button pButton type=\"button\" label=\"确定\" (click)=\"select()\"></button>\r\n</div>\r\n<div class=\"ui-g-12\" *ngIf=\"display1\">\r\n    <div *ngFor=\"let item of resultList\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"bg-div\">\r\n                <p-checkbox name=\"groupname\" value=\"{{item.program}}\" [(ngModel)]=\"selectedValues2\" (onChange)=\"check(item)\"></p-checkbox>\r\n                <div class=\"wz\"> {{item.program}}.{{item.program|codeValuePie:BdAchievementCon}}</div>\r\n                <span class=\"wen-i\" (click)=\"con(item.program)\">查看详情></span>\r\n                <div echarts [options]=\"Con0\" *ngIf=\"item.program==1\"></div>\r\n                <div echarts [options]=\"Con1\" *ngIf=\"item.program==2\"></div>\r\n                <div echarts [options]=\"Con2\" *ngIf=\"item.program==3\"></div>\r\n                <div echarts [options]=\"Con3\" *ngIf=\"item.program==4\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n<div class=\"ui-g-12\" *ngIf=\"display2\">\r\n    <p-dataTable [value]=\"resultList\" [style]=\"{'text-align':'center'}\">\r\n        <p-column header='机构/人员' field=\"orgOrdUser\"></p-column>\r\n        <p-column header='业绩指标项' field=\"program\">\r\n            <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{col.program|codeValuePie:BdAchievementYe}}\r\n            </ng-template>\r\n        </p-column>\r\n        <p-column header='业绩值' field=\"amount\"> </p-column>\r\n        <p-column header='占比' field=\"proportion\"> </p-column>\r\n        <p-column header='部门业绩值' field=\"higherAmount\"> </p-column>\r\n    </p-dataTable>\r\n</div>\r\n\r\n<p-dialog *ngIf=\"dia\" [(visible)]=\"dia\" modal=\"modal\" width=\"850\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{param|codeValuePie:BdAchievementDetail}}\r\n    </p-header>\r\n    <div>\r\n        <view-ratio [inValue]=\"ConDetail\"></view-ratio>\r\n    </div>\r\n</p-dialog>\r\n\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-ratio/more-ratio.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-ratio/more-ratio.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-12 {\n  overflow: hidden; }\n  .ui-g-12 .bg-div {\n    height: 400px; }\n  .ui-g-12 .bg-div .check {\n      position: absolute;\n      z-index: 10; }\n  .ui-g-12 .bg-div .pm {\n      float: right;\n      padding-right: 5%; }\n  .ui-g-12 .bg-div .pm:hover {\n        cursor: pointer; }\n  .ui-g-12 .wz {\n    position: absolute;\n    margin-left: 2%;\n    margin-top: -20PX; }\n  .ui-g-12 .wen-i {\n    position: absolute;\n    margin-top: 20px;\n    font-size: small;\n    color: #19b0c8;\n    z-index: 10; }\n  .ui-g-12 .wen-i:hover {\n      cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9hY2hpZXZlbWVudC10YXNrL3BlcmZvcm1hbmNlLWFuYWx5c2lzL21vcmUtcmF0aW8vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxhY2hpZXZlbWVudC10YXNrXFxwZXJmb3JtYW5jZS1hbmFseXNpc1xcbW9yZS1yYXRpb1xcbW9yZS1yYXRpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBR1EsYUFBYSxFQUFBO0VBSHJCO01BS1ksa0JBQWtCO01BQ2xCLFdBQVcsRUFBQTtFQU52QjtNQXNCWSxZQUFZO01BQ1osaUJBQWlCLEVBQUE7RUF2QjdCO1FBeUJnQixlQUFlLEVBQUE7RUF6Qi9CO0lBOEJRLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFoQ3pCO0lBbUNRLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXLEVBQUE7RUF2Q25CO01BeUNZLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vYWNoaWV2ZW1lbnQtdGFzay9wZXJmb3JtYW5jZS1hbmFseXNpcy9tb3JlLXJhdGlvL21vcmUtcmF0aW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktZy0xMiB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLmJnLWRpdiB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAuY2hlY2sge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIH0gLy8gLndlbi1sIHtcclxuICAgICAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgLy8gICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyAud2VuLWkge1xyXG4gICAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmctbGVmdDogMTIwcHg7XHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgLy8gICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgIC8vICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLnBtIHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAud3oge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwUFg7XHJcbiAgICB9XHJcbiAgICAud2VuLWkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-ratio/more-ratio.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-ratio/more-ratio.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: MoreRatioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreRatioComponent", function() { return MoreRatioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean */ "./src/app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean.ts");
/* harmony import */ var app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/http/achievement-search.service */ "./src/app/pages/tzb/custom/achievement-task/http/achievement-search.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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





var MoreRatioComponent = /** @class */ (function () {
    function MoreRatioComponent(commfunc, router, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.queryBdAchievementCon = new app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_1__["QueryBdAchievementCon"]();
        this.resultList = [];
        this.selectClick2 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //单机事件
        this.display1 = true;
        this.display2 = false;
        this.dia = false;
        this.selectedValues2 = ['1', '2', '3'];
        this.msgs = []; //提示信息
    }
    MoreRatioComponent.prototype.ngOnInit = function () {
        this.codeVal();
        this.BdAchievementCon = this.code['BdAchievementCon']; //我的贡献
        this.BdAchievementDetail = this.code['BdAchievementDetail']; //我的业绩
        this.queryBdAchievementCon.startTime = this.inValue.startTime;
        this.queryBdAchievementCon.endTime = this.inValue.endTime;
        this.queryBdAchievementCon.signType = this.inValue.signType;
        this.queryBdAchievementCon.timeTypeId = this.inValue.timeTypeId;
        this.queryBdAchievementCon.relationNo = this.inValue.relationNo;
        this.queryBdAchievementCon.orgNo = this.inValue.orgNo;
        this.queryBdAchievementCon.levelNo = this.inValue.levelNo;
        this.queryBdAchievementCon.indexType = this.inValue.indexType;
        this.queryBdAchievementCon.arrType = "2";
        this.queryAlways();
        this.AchievementCon();
    };
    MoreRatioComponent.prototype.con = function (item) {
        var param = {
            arrType: '2',
            indexType: item,
            signType: this.inValue.signType,
            timeTypeId: this.inValue.timeTypeId,
            startTime: this.inValue.startTime,
            endTime: this.inValue.endTime,
            relationNo: this.inValue.relationNo,
            orgNo: this.inValue.orgNo,
            levelNo: this.inValue.levelNo,
        };
        this.ConDetail = param;
        this.title = item;
        this.dia = true;
    };
    //码值
    MoreRatioComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    MoreRatioComponent.prototype.queryAlways = function () {
        var _this = this;
        var user = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        var orgId = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
        var param = {
            listShowsIdType: '1',
            listShowsIdModule: 'myCTB',
            createOrg: orgId,
            createdByUserLogin: user
        };
        this.httpService.selectUserListShow(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.selectedValues2 = JSON.parse(data.exploreConditionObject).myCTB;
            }
        });
    };
    MoreRatioComponent.prototype.AchievementCon = function () {
        var _this = this;
        this.httpService.queryBdAchievementCon(this.queryBdAchievementCon).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.resultList = data.resultList;
                _this.contribution();
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: "任务查询成功！" });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    MoreRatioComponent.prototype.contribution = function () {
        for (var i = 0; i < this.resultList.length; i++) {
            this.Con0 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}:{c}({d}%)"
                },
                title: {
                    text: '(单位.万元)',
                    textStyle: {
                        fontSize: '12',
                    },
                    x: '15px',
                    y: '30px',
                },
                // legend: {
                // 	orient: 'vertical',
                // 	y: 'top',
                // 	x: 'right',
                // 	data: ['存款日均', '部门存款日均'],
                // },
                series: [
                    {
                        name: '存款日均',
                        type: 'pie',
                        radius: '70%',
                        center: ['50%', '50%'],
                        data: [
                            { value: this.resultList[i]['amount'], name: '存款日均', itemStyle: { color: '#37c27f' } },
                            { value: this.resultList[i]['higherAmount'], name: '部门存款日均', itemStyle: { color: '#0e6287' } },
                        ],
                        itemStyle: {
                            // emphasis: {
                            shadowBlur: 10,
                            shadowOffset: 0,
                            shadowColor: 'rgba(0,0,0,.5)'
                            // }
                        },
                        labelLine: {
                            length: 0
                        }
                    }
                ]
            };
            this.Con1 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}:{c}({d}%)"
                },
                title: {
                    text: '(单位.万元)',
                    textStyle: {
                        fontSize: '12',
                    },
                    x: '15px',
                    y: '30px',
                },
                // legend: {
                // 	orient: 'vertical',
                // 	y: 'top',
                // 	x: 'right',
                // 	data: ['贷款日均', '部门贷款日均']
                // },
                series: [
                    {
                        name: '贷款日均',
                        type: 'pie',
                        radius: '70%',
                        center: ['50%', '50%'],
                        data: [
                            { value: this.resultList[i]['amount'], name: '贷款日均', itemStyle: { color: '#37c27f' } },
                            { value: this.resultList[i]['higherAmount'], name: '部门贷款日均', itemStyle: { color: '#0e6287' } },
                        ],
                        itemStyle: {
                            // emphasis: {
                            shadowBlur: 10,
                            shadowOffset: 0,
                            shadowColor: 'rgba(0,0,0,.5)'
                            // }
                        },
                        labelLine: {
                            length: 0
                        }
                    }
                ]
            };
            this.Con2 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}:{c}({d}%)"
                },
                title: {
                    text: '(单位.万元)',
                    textStyle: {
                        fontSize: '12',
                    },
                    x: '15px',
                    y: '30px',
                },
                // legend: {
                // 	orient: 'vertical',
                // 	y: 'top',
                // 	x: 'right',
                // 	data: ['信用卡透支余额', '部门信用卡透支余额']
                // },
                series: [
                    {
                        name: '信用卡透支余额',
                        type: 'pie',
                        radius: '70%',
                        center: ['50%', '50%'],
                        data: [
                            { value: this.resultList[i]['amount'], name: '信用卡透支余额', itemStyle: { color: '#37c27f' } },
                            { value: this.resultList[i]['higherAmount'], name: '部门信用卡透支余额', itemStyle: { color: '#0e6287' } },
                        ],
                        itemStyle: {
                            // emphasis: {
                            shadowBlur: 10,
                            shadowOffset: 0,
                            shadowColor: 'rgba(0,0,0,.5)'
                            // }
                        },
                        labelLine: {
                            length: 0
                        }
                    }
                ]
            };
            this.Con3 = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}:{c}({d}%)"
                },
                title: {
                    text: '(单位.万元)',
                    textStyle: {
                        fontSize: '12',
                    },
                    x: '15px',
                    y: '30px',
                },
                // legend: {
                // 	orient: 'vertical',
                // 	y: 'top',
                // 	x: 'right',
                // 	data: ['FTP利润', '部门FTP利润']
                // },
                series: [
                    {
                        name: 'FTP利润',
                        type: 'pie',
                        radius: '70%',
                        center: ['50%', '50%'],
                        data: [
                            { value: this.resultList[i]['amount'], name: 'FTP利润', itemStyle: { color: '#37c27f' } },
                            { value: this.resultList[i]['higherAmount'], name: '部门FTP利润', itemStyle: { color: '#0e6287' } },
                        ],
                        itemStyle: {
                            // emphasis: {
                            shadowBlur: 10,
                            shadowOffset: 0,
                            shadowColor: 'rgba(0,0,0,.5)'
                            // }
                        },
                        labelLine: {
                            length: 0
                        }
                    }
                ]
            };
        }
        //饼图
    };
    MoreRatioComponent.prototype.iconSwitch = function () {
        this.display1 = !this.display1;
        this.display2 = !this.display2;
        // alert(1);
    };
    MoreRatioComponent.prototype.check = function (event) {
        if (this.selectedValues2.length) {
            if (this.selectedValues2.length > 3) {
                for (var i = 0; i < this.selectedValues2.length; i++) {
                    if (i > 2) {
                        this.selectedValues2[i] = undefined;
                        if (this.selectedValues2[i] == undefined) {
                            this.selectedValues2.splice(i, 1);
                            i--;
                        }
                    }
                }
                this.msgs.push({ severity: 'error', summary: '提示', detail: "只能选中三个显示在页面中！" });
            }
            else {
                if (this.selectedValues2[i] != undefined) {
                    this.selectedValues2.push(this.selectedValues2[i]);
                }
            }
        }
        else {
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请选这其中的显示在页面中！" });
        }
    };
    MoreRatioComponent.prototype.select = function () {
        var _this = this;
        var user = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        var orgId = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
        var param = {
            listShowsIdType: '1',
            listShowsIdModule: 'myCTB',
            createOrg: orgId,
            createdByUserLogin: user,
            exploreConditionObject: JSON.stringify({ myCTB: this.selectedValues2 })
        };
        this.httpService.addUserListShow(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.selectClick2.emit(_this.selectedValues2);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MoreRatioComponent.prototype, "selectClick2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MoreRatioComponent.prototype, "inValue", void 0);
    MoreRatioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'more-ratio',
            template: __webpack_require__(/*! ./more-ratio.component.html */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-ratio/more-ratio.component.html"),
            styles: [__webpack_require__(/*! ./more-ratio.component.scss */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-ratio/more-ratio.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__["AchievementHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__["AchievementHttpService"]])
    ], MoreRatioComponent);
    return MoreRatioComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/performance-analysis.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/performance-analysis.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 第一部分 -->\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-2 leftBtn\">\r\n        <div class=\"ui-g-4 column\">\r\n            <label class=\"ye\" title=\"业绩分析数据分为实际业绩和考核业绩(与工资挂钩的业绩)。\r\n            真实业绩:实际的业绩值;指标业绩:考核的业绩值。\">业绩:</label>\r\n        </div>\r\n        <div class=\"ui-g-8\">\r\n            <p-dropdown placeholder='选择业绩' [style]=\"{'text-align':'left'}\" [options]=\"RealOrTarget\" [(ngModel)]=\"signType\" (onChange)=\"onChange1()\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-2 leftBtn\">\r\n        <div class=\"ui-g-3 column\">\r\n            <label style=\"float:right;margin-top:4px;\">时间:</label>\r\n        </div>\r\n        <div class=\"ui-g-7\">\r\n            <p-dropdown [style]=\"{'text-align':'left'}\" [options]=\"timeType\" [(ngModel)]=\"timeTypeId\" (onChange)=\"onChange()\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- 非自定义月 -->\r\n    <div class=\"ui-g-4\" *ngIf=\"notCustomMonth\">\r\n        <div class=\"ui-g-4\">\r\n            <p-calendar [disabled]=\"!isqueryTimePerformanc\" [showIcon]=\"true\" [locale]=\"ch\" dateFormat=\"yy-mm-dd\" yearRange=\"1900:2200\"\r\n                [(ngModel)]=\"startTime\"></p-calendar>\r\n        </div>\r\n        <div class=\"ui-g-1\" style=\"text-align:center;\">\r\n            至\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <p-calendar [disabled]=\"!isqueryTimePerformanc\" [showIcon]=\"true\" [locale]=\"ch\" dateFormat=\"yy-mm-dd\" yearRange=\"1900:2200\"\r\n                [(ngModel)]=\"endTime\"></p-calendar>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!-- 自定义月 -->\r\n    <div class=\"ui-g-4\" *ngIf=\"customMonth\">\r\n        <div class=\"ui-g-4\" style=\"margin-top:-2px;\">\r\n            <monthly-calendar [range]=\"{before:50,after:50}\" placeholder=\"请选择相应的开始月份\" (result)=\"startMonth = $event\">\r\n            </monthly-calendar>\r\n        </div>\r\n        <div class=\"ui-g-1\" style=\"text-align:center;\">\r\n            至\r\n        </div>\r\n        <div class=\"ui-g-4\" style=\"margin-top:-2px;\">\r\n            <monthly-calendar [range]=\"{before:50,after:50}\" placeholder=\"请选择相应的结束月份\" (result)=\"endMonth = $event\">\r\n            </monthly-calendar>\r\n        </div>\r\n        <div class=\"ui-g-3\" *ngIf=\"isqueryTimePerformanc\">\r\n            <button pButton type=\"button\" label=\"查询\" (click)=\"queryTimePerformanc()\"></button>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-3\" *ngIf=\"per\">\r\n        <div class=\"ui-g-5 column\">\r\n            <label style=\"float:right;margin-top:4px;\">机构/人员名称:</label>\r\n        </div>\r\n        <div class=\"ui-g-7\">\r\n            <input type=\"text\" class=\"gov\" placeholder=\"请选择\" pInputText (focus)=\"orgSelect()\" [(ngModel)]=\"treeOrgName\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-1 rightBtn\">\r\n        <button pButton type=\"button\" label=\"图表切换\" (click)=\"businessSwitch()\"></button>\r\n    </div>\r\n</div>\r\n\r\n<!-- 第二部分 -->\r\n<div class=\"ui-g-12 module padding-tauto\" *ngIf=\"display3\">\r\n    <!-- 第一行 -->\r\n    <div class=\"ui-g-12 padding-tauto\">\r\n        <header-title [Info]=\"headerTitle\"></header-title>\r\n        <div class=\"formor\" (click)=\"formor(1)\">更多></div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"display1\">\r\n        <div *ngFor=\"let item0 of resultList0\">\r\n            <div class=\"ui-g-4\" (click)=\"bv(item0.program)\">\r\n                <div class=\"bg-fl\">\r\n\r\n                    <div class=\"wen-fl\">{{item0.program|codeValuePie:BdAchievementYe}}</div>\r\n                    <div (click)=\"bv(item0.program)\" class=\"v-det\">查看详情></div>\r\n                    <!-- <img src=\"../assets/pages/images/ranki.png\" class=\"pm\" *ngIf=\"rank\"> -->\r\n                    <div class=\"the\" *ngIf=\"rank\">当前排名:{{item0.sameLevelOrder}}</div>\r\n\r\n                    <div class=\"theme\">\r\n                        <img src=\"../assets/pages/images/gram_0{{item0.program}}.png\">\r\n                    </div>\r\n                    <div class=\"typeface\">\r\n                        <div>{{item0.amount}}</div>\r\n                        <div>(单位.万元)</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"ui-g-12\" *ngIf=\"display2\">\r\n        <!-- 存款余额 -->\r\n        <div *ngFor=\"let item0 of saveCustom\">\r\n            <div class=\"ui-g-4\" (click)=\"bv(item0.program)\">\r\n                <div class=\"bg-div\">\r\n                    <div class=\"wen-l\">{{item0.program|codeValuePie:BdAchievementYe}}</div>\r\n                    <div class=\"wen-i\" (click)=\"bv(item0.program)\">查看详情></div>\r\n                    <!-- <img src=\"../assets/pages/images/ranki.png\" class=\"pm\" *ngIf=\"rank\"> -->\r\n                    <div class=\"the\" *ngIf=\"rank\">当前排名:{{item0.sameLevelOrder}}</div>\r\n                    <div echarts class=\"bg-div2\" [options]=\"item0.opt\"></div>\r\n                    <div style=\"text-align:center;\">\r\n                        <div>指标值:{{item0.amount}}</div>\r\n                        <div>任务值:{{item0.arrangementValue}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- 第三部分 -->\r\n    <!-- 第二行 -->\r\n\r\n    <div class=\"ui-g-12 padding-tauto\">\r\n        <header-title [Info]=\"'我的贡献'\"></header-title>\r\n        <div class=\"formor\" (click)=\"formor(2)\">更多></div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n        <div *ngFor=\"let item1 of resultList1\">\r\n            <div class=\"ui-g-4\" (click)=\"con(item1.program)\">\r\n                <div class=\"bg-div\">\r\n                    <div class=\"wen-l\">{{item1.program|codeValuePie:BdAchievementCon}}</div>\r\n                    <span class=\"wen-i\" (click)=\"con(item1.program)\">查看详情></span>\r\n                    <div echarts class=\"bg-div\" [options]=\"Con0\" *ngIf=\"item1.program==1\"></div>\r\n                    <div echarts class=\"bg-div\" [options]=\"Con1\" *ngIf=\"item1.program==2\"></div>\r\n                    <div echarts class=\"bg-div\" [options]=\"Con2\" *ngIf=\"item1.program==3\"></div>\r\n                    <div echarts class=\"bg-div\" [options]=\"Con3\" *ngIf=\"item1.program==4\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- 第四部分 -->\r\n    <!-- 第三行 -->\r\n\r\n    <div class=\"ui-g-12 padding-tauto\">\r\n        <header-title [Info]=\"'我的成长'\"></header-title>\r\n        <div class=\"formor\" (click)=\"formor(3)\">更多></div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n        <div *ngFor=\"let item2 of resultList2\">\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"bg\">\r\n                    <div class=\"tit_\">\r\n                        <span class=\"grow\">{{item2.program|codeValuePie:BdAchievementGrow}}</span>\r\n                        <span (click)=\"grow(item2.program)\" class=\"v-det\">查看详情></span>\r\n                    </div>\r\n                    <div echarts class=\"bg-div\" [options]=\"Grow0\" *ngIf=\"item2.program==1\"></div>\r\n                    <div echarts class=\"bg-div\" [options]=\"Grow1\" *ngIf=\"item2.program==2\"></div>\r\n                    <div echarts class=\"bg-div\" [options]=\"Grow2\" *ngIf=\"item2.program==3\"></div>\r\n                    <div echarts class=\"bg-div\" [options]=\"Grow3\" *ngIf=\"item2.program==4\"></div>\r\n                    <!-- <div class=\"sm-st\">\r\n                        <div class=\"bl\"></div>\r\n                        <div class=\"transverse\">\r\n                            <div class=\"lb\" style=\"background-color:red;\"></div>\r\n                            <span class=\"wz\"> 我的{{item2.program|codeValuePie:BdAchievementGrow}}</span>\r\n                        </div>\r\n                        <div class=\"transverse\">\r\n                            <div class=\"lb\" style=\"background-color:yellow;\"></div>\r\n                            <span class=\"wz\">部门平均{{item2.program|codeValuePie:BdAchievementGrow}}</span>\r\n                        </div>\r\n                        <div class=\"transverse\">\r\n                            <div class=\"lb\" style=\"background-color:orange;\"></div>\r\n                            <span class=\"wz\">部门最低{{item2.program|codeValuePie:BdAchievementGrow}}</span>\r\n                        </div>\r\n                        <div class=\"transverse\">\r\n                            <div class=\"lb\" style=\"background-color:green;\"></div>\r\n                            <span class=\"wz\">部门最高{{item2.program|codeValuePie:BdAchievementGrow}}</span>\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g-12 module\" *ngIf=\"display4\">\r\n    <!-- 我的业绩 -->\r\n    <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"headerTitle\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"display5\">\r\n        <p-dataTable [value]=\"tableResult0\" [style]=\"{'text-align':'center'}\" (onRowSelect)=\"onRowSelect($event)\" selectionMode=\"single\"\r\n            [emptyMessage]='tabMesg'>\r\n            <p-column header='机构/人员' field=\"orgOrdUser\" [style]=\"{'text-align':'center'}\"></p-column>\r\n            <p-column header='业绩指标项' field=\"program\" [style]=\"{'text-align':'center'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.program|codeValuePie:BdAchievementYe}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header='业绩值' field=\"amount\" [style]=\"{'text-align':'center'}\"> </p-column>\r\n            <!-- <p-column header='业绩任务值' field=\"arrangementValue\" *ngIf=\"tableResult0[0].arrangementValue\" [style]=\"{'text-align':'center'}\"></p-column>-->\r\n            <p-column header='业绩任务值' field=\"arrangementValue\" *ngIf=\"dis_play5\" [style]=\"{'text-align':'center'}\"></p-column>\r\n\r\n            <p-column header='业绩达成率' field=\"yearTask\" *ngIf=\"dis_play5\" [style]=\"{'text-align':'center'}\"></p-column>\r\n            <p-column header='排名' field=\"sameLevelOrder\" [style]=\"{'text-align':'center'}\"></p-column>\r\n        </p-dataTable>\r\n    </div>\r\n\r\n    <!-- 我的贡献 -->\r\n    <div class=\"ui-g-12 padding-tauto\">\r\n        <header-title [Info]=\"'我的贡献'\"></header-title>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12\">\r\n            <p-dataTable [value]=\"tableResult1\" [style]=\"{'text-align':'center'}\" (onRowSelect)=\"onRowSelect1($event)\" selectionMode=\"single\">\r\n                <p-column header='机构/人员' field=\"orgOrdUser\"></p-column>\r\n                <p-column header='业绩指标项' field=\"program\">\r\n                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                        {{col.program|codeValuePie:BdAchievementYe}}\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column header='业绩值' field=\"amount\"> </p-column>\r\n                <p-column header='占比' field=\"proportion\"> </p-column>\r\n                <p-column header='部门业绩值' field=\"higherAmount\"> </p-column>\r\n            </p-dataTable>\r\n        </div>\r\n\r\n\r\n        <!-- 我的成长 -->\r\n        <div class=\"ui-g-12 padding-tauto\">\r\n            <header-title [Info]=\"'我的成长'\"></header-title>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12 \">\r\n            <table border=\"1\" cellspacing=\"0\" width=\"600px\">\r\n                <tr style=\"background-color:#d2f1ef\">\r\n                    <th>机构/人员</th>\r\n                    <th>业绩指标项</th>\r\n                    <th>业绩指标项</th>\r\n                    <th *ngFor=\"let item of tableResult2[0]?.programList\">{{item.dt}}</th>\r\n                </tr>\r\n                <tbody *ngFor=\"let item of tableResult2\" style=\"border-bottom:1px solid #ebebeb\" selectionMode=\"single\">\r\n                    <tr>\r\n                        <td rowspan=\"4\" (click)=\"choose(item)\">{{item.orgOrdUser}}</td>\r\n                        <td rowspan=\"4\" (click)=\"choose(item)\">{{item.program|codeValuePie:BdAchievementYe}}</td>\r\n                        <td (click)=\"choose(item)\">业绩值</td>\r\n                        <td *ngFor=\"let i of item.programList\" (click)=\"choose(item)\">{{i.amount}}</td>\r\n                    </tr>\r\n                    <tr style=\"background-color:#ebebeb\">\r\n                        <td>同级平均业绩值</td>\r\n                        <td *ngFor=\"let i of item.programList\">{{i.sameLevelAverAmount}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>部门最高值</td>\r\n                        <td *ngFor=\"let i of item.programList\">{{i.sameLevelOrderMax}}</td>\r\n                    </tr>\r\n                    <tr style=\"background-color:#ebebeb\">\r\n                        <td>部门最低值</td>\r\n                        <td *ngFor=\"let i of item.programList\">{{i.sameLevelOrderMin}}</td>\r\n                    </tr>\r\n                </tbody>\r\n\r\n            </table>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!-- 弹框 -->\r\n<!-- <div *ngIf=\"dia\"> -->\r\n<p-dialog *ngIf=\"dia\" [(visible)]=\"dia\" modal=\"modal\" width=\"850\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{item|codeValuePie:BdAchievementDetail}}\r\n    </p-header>\r\n    <div>\r\n        <balance-view [inValue]=\"AchiDetail\" *ngIf=\"showNum==1\"></balance-view>\r\n        <view-ratio [inValue]=\"ConDetail\" *ngIf=\"showNum==2\"></view-ratio>\r\n        <grow-view [inValue]=\"GrowDetail\" *ngIf=\"showNum==3\"></grow-view>\r\n    </div>\r\n</p-dialog>\r\n\r\n\r\n<p-dialog *ngIf=\"more\" [(visible)]=\"more\" modal=\"modal\" width=\"850\" [responsive]=\"true\" [positionTop]=10 height=\"500\">\r\n    <p-header>\r\n        {{title}}\r\n    </p-header>\r\n    <div>\r\n        <more-achievement [inValue]=\"AchiMore\" *ngIf=\"showMore==1\" (selectClick)=\"selectClick($event)\"></more-achievement>\r\n        <more-ratio [inValue]=\"ConMore\" *ngIf=\"showMore==2\" (selectClick2)=\"selectClick2($event)\"></more-ratio>\r\n        <more-avecontrast [inValue]=\"GrowMore\" *ngIf=\"showMore==3\" (selectClick)=\"selectClick3($event)\"></more-avecontrast>\r\n    </div>\r\n</p-dialog>\r\n\r\n\r\n<p-dialog *ngIf=\"orgTreePage\" [(visible)]=\"orgTreePage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <org-tree-component (outValue)=\"treeCall($event)\" style=\"float: left;width:40%;overflow:auto;\"></org-tree-component>\r\n    <div style=\"float: left;width:60%;overflow:auto;padding-top: 40px;\">\r\n        <app-query-user-list *ngIf=\"perVis\" (outValue)=\"perInfor($event)\" [in-value]=\"userInValue\"></app-query-user-list>\r\n    </div>\r\n    <div class=\"sure\">\r\n        <button pButton type=\"button\" (click)=\"sure()\" label=\"确定\"></button>\r\n    </div>\r\n</p-dialog>\r\n\r\n\r\n<p-dialog *ngIf=\"detail\" [(visible)]=\"detail\" modal=\"modal\" width=\"850\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{name|codeValuePie:BdAchievementDetail}}\r\n    </p-header>\r\n    <div>\r\n        <balance-detail [inValue]=\"BalanceDetail\" *ngIf=\"showDetail==1\"></balance-detail>\r\n        <ratio-detail [inValue]=\"RatioDetail\" *ngIf=\"showDetail==2\"></ratio-detail>\r\n        <grow-detail [inValue]=\"GrowDetail\" *ngIf=\"showDetail==3\"></grow-detail>\r\n    </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/performance-analysis.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/performance-analysis.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .leftBtn {\n  text-align: left; }\n  .ui-g .leftBtn .ye {\n    float: right;\n    margin-top: 4px; }\n  .ui-g .leftBtn .ye:hover {\n      cursor: pointer; }\n  .ui-g .rightBtn {\n  text-align: right;\n  margin-top: 6px; }\n  .iconSwitch:hover {\n  cursor: pointer; }\n  .gov:hover {\n  cursor: pointer; }\n  .bg-fl {\n  height: 400px;\n  background-color: #ededed; }\n  .bg-fl .wen-fl {\n    position: absolute;\n    text-align: left;\n    padding-left: 20px;\n    padding-top: 5px;\n    z-index: 10; }\n  .bg-fl .v-det {\n    position: absolute;\n    text-align: left;\n    padding-left: 120px;\n    padding-top: 5px;\n    font-size: small;\n    color: #19b0c8;\n    z-index: 10; }\n  .bg-fl .v-det:hover {\n      cursor: pointer; }\n  .bg-fl .pm {\n    margin-left: 420px; }\n  .bg-fl .pm:hover {\n      cursor: pointer; }\n  .bg-fl .the {\n    float: right;\n    font-size: 18px;\n    color: #d02525; }\n  .bg-fl .theme {\n    padding-top: 10%;\n    text-align: center; }\n  .bg-fl .typeface {\n    margin-top: -120px;\n    text-align: center; }\n  .bg-div {\n  height: 400px; }\n  .bg-div .wen-l {\n    position: absolute;\n    padding-left: 20px;\n    padding-top: 5px;\n    z-index: 10; }\n  .bg-div .wen-i {\n    position: absolute;\n    padding-left: 120px;\n    padding-top: 5px;\n    font-size: small;\n    color: #19b0c8;\n    z-index: 10; }\n  .bg-div .wen-i:hover {\n      cursor: pointer; }\n  .bg-div .pm {\n    z-index: 100;\n    position: relative;\n    margin-left: 420px; }\n  .bg-div .pm:hover {\n      cursor: pointer;\n      z-index: 100; }\n  .bg-div .the {\n    float: right;\n    font-size: 18px;\n    color: #ab4b4b;\n    position: relative;\n    z-index: 1000; }\n  .bg-div .bg-div2 {\n    height: 350px; }\n  .bg {\n  height: 400px;\n  background-color: #ededed; }\n  .bg .v-det {\n    text-align: left;\n    padding-left: 20px;\n    font-size: small;\n    color: #19b0c8;\n    z-index: 10; }\n  .bg .v-det:hover {\n      cursor: pointer; }\n  .bg .bg-div {\n    height: 360px;\n    margin-top: 10px; }\n  .bg .sm-st {\n    display: flex;\n    margin-top: 6px; }\n  .bg .sm-st .bl {\n      width: 4%;\n      height: 10px;\n      float: left; }\n  .bg .sm-st .transverse {\n      float: left;\n      width: 24%;\n      height: 20px; }\n  .bg .sm-st .transverse .lb {\n        width: 10px;\n        height: 10px;\n        border-radius: 5px; }\n  .bg .sm-st .transverse .wz {\n        position: absolute;\n        padding-left: 15px;\n        margin-top: -14px; }\n  .module .functions {\n  height: 50px; }\n  .module .functions .whole {\n    line-height: 31px;\n    background: #efefef;\n    padding-left: 0; }\n  .module .functions .whole .change {\n      line-height: 1.5em;\n      vertical-align: middle;\n      font-weight: bold;\n      padding: 0.5em 1em;\n      color: #7a7a7a;\n      cursor: pointer; }\n  .active {\n  position: relative;\n  border: none !important;\n  color: #19b0c8 !important;\n  border-bottom-width: 0px;\n  background: #fafafa !important;\n  padding: 1.5em .6em 1em 1em !important; }\n  .active:before {\n  content: '';\n  width: 22px;\n  height: 2px;\n  background: #19b0c8;\n  display: inline-block;\n  position: absolute;\n  bottom: 0;\n  right: 35%; }\n  .formor {\n  text-align: right;\n  margin-top: -20px;\n  color: #757575; }\n  .borde {\n  border-right: 1px solid #ebebeb;\n  height: 400px;\n  overflow: auto; }\n  :host/deep/.progress .ui-dialog.ui-shadow {\n  width: 700px !important;\n  height: 600px !important;\n  min-width: 0px !important;\n  min-height: 0px !important; }\n  :host/deep/.progress .ui-dialog .ui-dialog-content {\n  height: 90%; }\n  table {\n  border-collapse: collapse;\n  width: 100%; }\n  table,\nth,\ntd {\n  border: none;\n  height: 35px;\n  text-align: center; }\n  .grow {\n  margin-left: 10px;\n  padding-top: 5px; }\n  .sure {\n  text-align: center;\n  margin-top: 42%; }\n  :host/deep/ .ui-dialog .ui-dialog-content {\n  height: 90%; }\n  :host/deep/ .form-control .ng-untouched .ng-pristine {\n  height: 20px; }\n  .tit_ {\n  padding-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9hY2hpZXZlbWVudC10YXNrL3BlcmZvcm1hbmNlLWFuYWx5c2lzL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcYWNoaWV2ZW1lbnQtdGFza1xccGVyZm9ybWFuY2UtYW5hbHlzaXNcXHBlcmZvcm1hbmNlLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRVEsZ0JBQWdCLEVBQUE7RUFGeEI7SUFJWSxZQUFZO0lBQ1osZUFBZSxFQUFBO0VBTDNCO01BT2dCLGVBQWUsRUFBQTtFQVAvQjtFQVlRLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7RUFJdkI7RUFFUSxlQUFlLEVBQUE7RUFJdkI7RUFFUSxlQUFlLEVBQUE7RUFLdkI7RUFDSSxhQUFhO0VBQ2IseUJBQXlCLEVBQUE7RUFGN0I7SUFJUSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVyxFQUFBO0VBUm5CO0lBV1Esa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVyxFQUFBO0VBakJuQjtNQW1CWSxlQUFlLEVBQUE7RUFuQjNCO0lBdUJRLGtCQUFrQixFQUFBO0VBdkIxQjtNQTBCWSxlQUFlLEVBQUE7RUExQjNCO0lBZ0NRLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYyxFQUFBO0VBbEN0QjtJQXFDUSxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7RUF0QzFCO0lBNENRLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTtFQUkxQjtFQUNJLGFBQWEsRUFBQTtFQURqQjtJQUdRLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBQTtFQU5uQjtJQVNRLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVyxFQUFBO0VBZG5CO01BZ0JZLGVBQWUsRUFBQTtFQWhCM0I7SUFvQlEsWUFBWTtJQUNaLGtCQUFrQjtJQUVsQixrQkFBa0IsRUFBQTtFQXZCMUI7TUF5QlksZUFBZTtNQUNmLFlBQVksRUFBQTtFQTFCeEI7SUFnQ1EsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGFBQWEsRUFBQTtFQXBDckI7SUF3Q1EsYUFBYSxFQUFBO0VBSXJCO0VBQ0ksYUFBYTtFQUNiLHlCQUF5QixFQUFBO0VBRjdCO0lBS1EsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUVsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVcsRUFBQTtFQVZuQjtNQVlZLGVBQWUsRUFBQTtFQVozQjtJQWdCUSxhQUFhO0lBQ2IsZ0JBQWdCLEVBQUE7RUFqQnhCO0lBb0JRLGFBQWE7SUFDYixlQUFlLEVBQUE7RUFyQnZCO01BdUJZLFNBQVM7TUFDVCxZQUFZO01BQ1osV0FBVyxFQUFBO0VBekJ2QjtNQTRCWSxXQUFXO01BQ1gsVUFBVTtNQUNWLFlBQVksRUFBQTtFQTlCeEI7UUFnQ2dCLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCLEVBQUE7RUFsQ2xDO1FBcUNnQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGlCQUFpQixFQUFBO0VBT2pDO0VBRVEsWUFBWSxFQUFBO0VBRnBCO0lBSVksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlLEVBQUE7RUFOM0I7TUFRZ0Isa0JBQWtCO01BQ2xCLHNCQUFzQjtNQUN0QixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxlQUFlLEVBQUE7RUFNL0I7RUFDSSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLHNDQUFzQyxFQUFBO0VBRzFDO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVUsRUFBQTtFQUdkO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7RUFHbEI7RUFDSSwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGNBQWMsRUFBQTtFQUdsQjtFQUNJLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLDBCQUEwQixFQUFBO0VBRzlCO0VBQ0ksV0FBVyxFQUFBO0VBR2Y7RUFDSSx5QkFBeUI7RUFDekIsV0FBVyxFQUFBO0VBR2Y7OztFQUdJLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBO0VBR25CO0VBQ0ksV0FBVyxFQUFBO0VBR2Y7RUFDSSxZQUFZLEVBQUE7RUFHaEI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vYWNoaWV2ZW1lbnQtdGFzay9wZXJmb3JtYW5jZS1hbmFseXNpcy9wZXJmb3JtYW5jZS1hbmFseXNpcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOesrOS4gOmDqOWIhlxyXG4udWktZyB7XHJcbiAgICAubGVmdEJ0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDsgLy9tYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgLnllIHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJpZ2h0QnRuIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pY29uU3dpdGNoIHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmdvdiB7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v56ys5LqM6YOo5YiGXHJcbi5iZy1mbCB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4OyAvLyAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICAgIC53ZW4tZmwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgfVxyXG4gICAgLnYtZGV0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICBjb2xvcjogIzE5YjBjODtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wbSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQyMHB4OyAvLyBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgLy8gcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aGUge1xyXG4gICAgICAgIC8vIG1hcmdpbi10b3A6IC02MHB4O1xyXG4gICAgICAgIC8vIG1hcmdpbi1sZWZ0OiA3NSU7IC8vICBtYXJnaW4tbGVmdDogNDQxcHg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogI2QwMjUyNTtcclxuICAgIH1cclxuICAgIC50aGVtZSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8vIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiAyNSU7XHJcbiAgICB9XHJcbiAgICAudHlwZWZhY2Uge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iZy1kaXYge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIC53ZW4tbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgfVxyXG4gICAgLndlbi1pIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMjBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucG0ge1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8vIGZsb2F0OiByaWdodDtcclxuICAgICAgICAvLyBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MjBweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRoZSB7XHJcbiAgICAgICAgLy8gIG1hcmdpbi10b3A6IC02MHB4O1xyXG4gICAgICAgIC8vICBtYXJnaW4tbGVmdDogNDQxcHg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogI2FiNGI0YjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgIH1cclxuICAgIC5iZy1kaXYyIHtcclxuICAgICAgICAvLyBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmcge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XHJcbiAgICAudi1kZXQge1xyXG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAvLyBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJnLWRpdiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnNtLXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAuYmwge1xyXG4gICAgICAgICAgICB3aWR0aDogNCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50cmFuc3ZlcnNlIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgLmxiIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC53eiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy/nrKzkuInpg6jliIZcclxuLm1vZHVsZSB7XHJcbiAgICAuZnVuY3Rpb25zIHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgLndob2xlIHtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgLmNoYW5nZSB7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07IC8vIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjN2E3YTdhO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMxOWIwYzggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmYWZhZmEgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEuNWVtIC42ZW0gMWVtIDFlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aXZlOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDM1JTtcclxufVxyXG5cclxuLmZvcm1vciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbn1cclxuXHJcbi5ib3JkZSB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLy5wcm9ncmVzcyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogNzAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjAwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8ucHJvZ3Jlc3MgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGFibGUsXHJcbnRoLFxyXG50ZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncm93IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLnN1cmUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNDIlO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmZvcm0tY29udHJvbCAubmctdW50b3VjaGVkIC5uZy1wcmlzdGluZSB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi50aXRfe1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/performance-analysis.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/performance-analysis.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: PerformanceAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceAnalysisComponent", function() { return PerformanceAnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean */ "./src/app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean.ts");
/* harmony import */ var app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/http/achievement-search.service */ "./src/app/pages/tzb/custom/achievement-task/http/achievement-search.service.ts");
/* harmony import */ var app_uisftech_common_http_uisftech_common_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/http/uisftech-common-http.service */ "./src/app/@uisftech/common/http/uisftech-common-http.service.ts");
/* harmony import */ var app_uisftech_common_component_org_tree_bean_org_tree_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/component/org-tree/bean/org-tree.bean */ "./src/app/@uisftech/common/component/org-tree/bean/org-tree.bean.ts");
/* harmony import */ var _http_achievement_search_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../http/achievement-search.constant */ "./src/app/pages/tzb/custom/achievement-task/http/achievement-search.constant.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PerformanceAnalysisComponent = /** @class */ (function () {
    function PerformanceAnalysisComponent(commfunc, router, httpService, uisftechCommonHttpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.uisftechCommonHttpService = uisftechCommonHttpService;
        this.TZB_HTTP_CUS1 = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__["TZB_HTTP_CUS1"];
        this.queryBdAchievementYe = new app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_3__["QueryBdAchievementYe"]();
        this.queryBdAchievementCon = new app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_3__["QueryBdAchievementCon"]();
        this.queryBdAchievementGrow = new app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_3__["QueryBdAchievementGrow"]();
        this.orgTreeBean = new app_uisftech_common_component_org_tree_bean_org_tree_bean__WEBPACK_IMPORTED_MODULE_6__["OrgTreeBean"]();
        this.ArrayD = [
            { "sel": 'L2001', name: '一般贷款' },
            { "sel": 'L2002', name: '小本贷款' },
            { "sel": 'L2004', name: '时贷通' },
            { "sel": 'L2005', name: '自助卡' },
            { "sel": 'L2006', name: '消费信贷' },
            { "sel": 'L2007', name: '承兑' },
            { "sel": 'L2008', name: '保函' },
            { "sel": 'L2009', name: '贴现' },
            { "sel": 'L2010', name: '委托贷款' },
            { "sel": 'L2048', name: 'E融卡' },
            { "sel": 'L2011', name: '金添储蓄' },
            { "sel": 'L2012', name: '个人活期' },
            { "sel": 'L2013', name: '单位活期存款' },
            { "sel": 'L2014', name: '单位定期存款' },
            { "sel": 'L2015', name: '保证金存款' },
            { "sel": 'L2016', name: '其他存款' },
            { "sel": 'L2017', name: '理财产品' },
            { "sel": 'L2018', name: '“周周盈”稳进账理财计划' },
            { "sel": 'L2019', name: '机构理财计划' },
            { "sel": 'L2003', name: '借记卡类授信' },
            { "sel": 'L2020', name: '信用卡类授信' },
            { "sel": 'L2021', name: '准贷记卡' },
            { "sel": 'L2022', name: '出口贸易融资' },
            { "sel": 'L2023', name: '进口贸易融资' },
            { "sel": 'L2024', name: '一般贷款' },
            { "sel": 'L2025', name: '国内信用证融资' },
            { "sel": 'L2026', name: '国际结算' },
            { "sel": 'L2046', name: '结售汇业务' },
            { "sel": 'L2047', name: '国际业务存款' },
        ];
        this.orgType = [
            { label: '机构', value: '1' },
            { label: '人员', value: '0' },
        ];
        this.orgTreePage = false;
        // 页面
        this.display = false;
        this.display1 = true; //
        this.display2 = false;
        this.display3 = true;
        this.display4 = false;
        this.display5 = true;
        this.display6 = false;
        //弹框
        //存款日均/贷款日均/存款日均 ;存款日均占比/贷款日均占比/存款日均占比  
        this.dia = false;
        this.headerTitle = "我的业绩"; //真实业绩，指标业绩
        this.more = false;
        this.msgs = []; //提示信息
        this.currentyear = true;
        this.currentmonth = false;
        //存款日均 指标业绩
        this.saveCustom = [];
        this.dtC = [];
        this.dtC0 = [];
        this.amountC0 = [];
        this.sameLevelAverAmountC0 = [];
        this.sameLevelOrderMaxC0 = [];
        this.sameLevelOrderMinC0 = [];
        this.dtC1 = [];
        this.amountC1 = [];
        this.sameLevelAverAmountC1 = [];
        this.sameLevelOrderMaxC1 = [];
        this.sameLevelOrderMinC1 = [];
        this.dtC2 = [];
        this.amountC2 = [];
        this.sameLevelAverAmountC2 = [];
        this.sameLevelOrderMaxC2 = [];
        this.sameLevelOrderMinC2 = [];
        this.dtC3 = [];
        this.amountC3 = [];
        this.sameLevelAverAmountC3 = [];
        this.sameLevelOrderMaxC3 = [];
        this.sameLevelOrderMinC3 = [];
        this.tableResult0 = [];
        this.tableResult1 = [];
        this.tableResult2 = [];
        this.c1 = [];
        this.c2 = [];
        this.isqueryTimePerformanc = false;
        this.table0 = [];
        this.result0 = [];
        this.table1 = [];
        this.result1 = [];
        this.perforMance1 = ['1', '2', '3'];
        this.perforMance2 = ['1', '2', '3'];
        this.perforMance3 = ['1', '2'];
        this.Array = [];
        this.perVis = false;
        this.per = false;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_9__["tableMessage"];
        this.detail = false;
        this.rank = true;
        this.startMonth = '';
        this.endMonth = '';
        this.notCustomMonth = true; //非自定义月
        this.customMonth = false; //自定义月
        this.legendName = [];
        this.dis_play5 = false;
        var dropDownSelect = this.commfunc.getSessionDataCH('dropDownSelect');
        this.treeOrgName = dropDownSelect.split(",")[0];
    }
    PerformanceAnalysisComponent.prototype.ngOnInit = function () {
        this.codeVal();
        this.BdAchievementYe = this.code['BdAchievementYe']; //我的业绩
        this.BdAchievementCon = this.code['BdAchievementCon']; //我的贡献
        this.BdAchievementGrow = this.code['BdAchievementGrow']; //我的成长
        this.BdAchievementDetail = this.code['BdAchievementDetail']; //业绩详情
        this.ch = {
            "startTimeOfWeek": 0,
            "dayNames": ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            "dayNamesShort": ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            "dayNamesMin": ["日", "一", "二", "三", "四", "五", "六"],
            "monthNames": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            "monthNamesShort": ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            today: 'Today',
            clear: 'Clear'
        };
        this.timeType = [
            { label: '本年', value: '0' },
            { label: '本月', value: '1' },
            { label: '前推一年', value: '2' },
            { label: '自定义月', value: '3' },
        ];
        this.RealOrTarget = [
            { label: '真实业绩', value: '1' },
            { label: '指标业绩', value: '2' },
        ];
        this.signType = '1';
        this.timeTypeId = '0';
        this.ymd();
        this.CurrentYear();
        this.queryBdAchievementYe.startTime = this.startTime;
        this.queryBdAchievementCon.startTime = this.startTime;
        this.queryBdAchievementGrow.startTime = this.startTime;
        this.queryBdAchievementYe.endTime = this.endTime;
        this.queryBdAchievementCon.endTime = this.endTime;
        this.queryBdAchievementGrow.endTime = this.endTime;
        this.queryBdAchievementYe.signType = '1';
        this.queryBdAchievementCon.signType = '1';
        this.queryBdAchievementGrow.signType = '1';
        //机构编号
        if (JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.managePermission == "Y") {
            this.queryBdAchievementYe.orgNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.orgId;
            this.queryBdAchievementCon.orgNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.orgId;
            this.queryBdAchievementGrow.orgNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.orgId;
            this.orgNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.orgId;
            this.queryBdAchievementYe.relationNo = '';
            this.queryBdAchievementCon.relationNo = '';
            this.queryBdAchievementGrow.relationNo = '';
            this.relationNo = '';
            this.per = true;
            //人员编号
        }
        else if (JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.managePermission == "N") {
            this.queryBdAchievementYe.relationNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
            this.queryBdAchievementCon.relationNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
            this.queryBdAchievementGrow.relationNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
            this.relationNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
            this.queryBdAchievementYe.orgNo = '';
            this.queryBdAchievementCon.orgNo = '';
            this.queryBdAchievementGrow.orgNo = '';
            this.orgNo = '';
            this.per = false;
        }
        //机构级别
        this.queryBdAchievementYe.levelNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.operatingLevel;
        this.queryBdAchievementCon.levelNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.operatingLevel;
        this.queryBdAchievementGrow.levelNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.operatingLevel;
        this.levelNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.operatingLevel;
        this.queryBdAchievementYe.timeTypeId = '0';
        this.queryBdAchievementCon.timeTypeId = '0';
        this.queryBdAchievementGrow.timeTypeId = '0';
        this.awaylsPerformance1();
        this.awaylsPerformance2();
        this.awaylsPerformance3();
        this.growDw = "月份";
    };
    //我的业绩表格选择
    PerformanceAnalysisComponent.prototype.onRowSelect = function (event) {
        if (this.timeTypeId == "3") {
            if (!this.startTime) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "初始时间不能为空！" });
                return;
            }
            if (!this.endTime) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "结束时间不能为空！" });
                return;
            }
            if (parseInt(this.commfunc.transDateN(this.endTime).replace(/-/g, "")) <= parseInt(this.commfunc.transDateN(this.startTime).replace(/-/g, ""))) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中开始时间不能大于结束时间！" });
                return;
            }
            if (parseInt(this.commfunc.transDateN(this.startTime).replace(/-/g, "")) > parseInt(this.commfunc.getCurrentDate()) - 1) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中开始时间不能大于当前时间的前一天！" });
                return;
            }
            if (parseInt(this.commfunc.transDateN(this.endTime).replace(/-/g, "")) > parseInt(this.commfunc.getCurrentDate()) - 1) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中结束时间不能大于当前时间的前一天！" });
                return;
            }
        }
        var param = {
            indexType: event.data.program,
            signType: this.signType,
            arrType: '0',
            timeTypeId: this.timeTypeId,
            startTime: this.startTime,
            endTime: this.endTime,
            relationNo: this.relationNo,
            orgNo: this.orgNo,
            levelNo: this.levelNo,
        };
        this.name = event.data.program;
        this.BalanceDetail = param;
        this.detail = true;
        this.title = event.data.program;
        this.showDetail = 1;
    };
    //我的贡献表格选择
    PerformanceAnalysisComponent.prototype.onRowSelect1 = function (event) {
        if (this.timeTypeId == "3") {
            if (!this.startTime) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "初始时间不能为空！" });
                return;
            }
            if (!this.endTime) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "结束时间不能为空！" });
                return;
            }
            if (parseInt(this.commfunc.transDateN(this.endTime).replace(/-/g, "")) <= parseInt(this.commfunc.transDateN(this.startTime).replace(/-/g, ""))) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中开始时间不能大于结束时间！" });
                return;
            }
            if (parseInt(this.commfunc.transDateN(this.startTime).replace(/-/g, "")) > parseInt(this.commfunc.getCurrentDate()) - 1) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中开始时间不能大于当前时间的前一天！" });
                return;
            }
            if (parseInt(this.commfunc.transDateN(this.endTime).replace(/-/g, "")) > parseInt(this.commfunc.getCurrentDate()) - 1) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中结束时间不能大于当前时间的前一天！" });
                return;
            }
        }
        var param = {
            indexType: event.data.program,
            signType: this.signType,
            arrType: '2',
            timeTypeId: this.timeTypeId,
            startTime: this.startTime,
            endTime: this.endTime,
            relationNo: this.relationNo,
            orgNo: this.orgNo,
            levelNo: this.levelNo,
        };
        this.name = event.data.program;
        this.RatioDetail = param;
        this.detail = true;
        this.title = event.data.program;
        this.showDetail = 2;
    };
    //我的成长表格选择
    PerformanceAnalysisComponent.prototype.choose = function (item) {
        if (this.timeTypeId == "3") {
            if (!this.startTime) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "初始时间不能为空！" });
                return;
            }
            if (!this.endTime) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "结束时间不能为空！" });
                return;
            }
            if (parseInt(this.commfunc.transDateN(this.endTime).replace(/-/g, "")) <= parseInt(this.commfunc.transDateN(this.startTime).replace(/-/g, ""))) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中开始时间不能大于结束时间！" });
                return;
            }
            if (parseInt(this.commfunc.transDateN(this.startTime).replace(/-/g, "")) > parseInt(this.commfunc.getCurrentDate()) - 1) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中开始时间不能大于当前时间的前一天！" });
                return;
            }
            if (parseInt(this.commfunc.transDateN(this.endTime).replace(/-/g, "")) > parseInt(this.commfunc.getCurrentDate()) - 1) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中结束时间不能大于当前时间的前一天！" });
                return;
            }
        }
        var param = {
            indexType: item.program,
            signType: this.signType,
            arrType: '1',
            timeTypeId: this.timeTypeId,
            startTime: this.startTime,
            endTime: this.endTime,
            relationNo: this.relationNo,
            orgNo: this.orgNo,
            levelNo: this.levelNo,
        };
        this.name = item.program;
        this.GrowDetail = param;
        this.detail = true;
        this.title = item.program;
        this.showDetail = 3;
    };
    PerformanceAnalysisComponent.prototype.awaylsPerformance1 = function () {
        var user = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        var orgId = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
        var param = {
            listShowsIdType: '1',
            listShowsIdModule: 'myPFM',
            createOrg: orgId,
            createdByUserLogin: user
        };
        this.awaylsPerformance(param);
    };
    PerformanceAnalysisComponent.prototype.awaylsPerformance2 = function () {
        var user = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        var orgId = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
        var param = {
            listShowsIdType: '1',
            listShowsIdModule: 'myCTB',
            createOrg: orgId,
            createdByUserLogin: user
        };
        this.awaylsPerformance(param);
    };
    PerformanceAnalysisComponent.prototype.awaylsPerformance3 = function () {
        var user = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        var orgId = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
        var param = {
            listShowsIdType: '1',
            listShowsIdModule: 'myGrow',
            createOrg: orgId,
            createdByUserLogin: user
        };
        this.awaylsPerformance(param);
    };
    //获取常用指标变量
    PerformanceAnalysisComponent.prototype.awaylsPerformance = function (item) {
        var TZB_HTTP_CUS = this.TZB_HTTP_CUS1 + _http_achievement_search_constant__WEBPACK_IMPORTED_MODULE_7__["API"].selectUserListShow;
        // let params = this.commfunc.handleParams(item)
        var _self = this;
        jquery__WEBPACK_IMPORTED_MODULE_10__["ajax"]({
            url: TZB_HTTP_CUS,
            type: 'POST',
            data: JSON.stringify(item),
            async: false,
            headers: {
                'x-ajax': '1',
                'Content-Type': 'application/json'
            },
            dataType: 'json',
            success: function (data) {
                if (data.exploreConditionObject) {
                    if (JSON.parse(data.exploreConditionObject).myPFM) {
                        if (JSON.parse(data.exploreConditionObject).myPFM) {
                            _self.perforMance1 = JSON.parse(data.exploreConditionObject).myPFM;
                        }
                        else {
                            _self.perforMance1 = ['1', '2', '3'];
                        }
                        _self.AchievementYe(_self.perforMance1); //我的业绩
                    }
                    if (JSON.parse(data.exploreConditionObject).myCTB) {
                        if (JSON.parse(data.exploreConditionObject).myCTB) {
                            _self.perforMance2 = JSON.parse(data.exploreConditionObject).myCTB;
                        }
                        else {
                            _self.perforMance2 = ['1', '2', '3'];
                        }
                        _self.AchievementCon(_self.perforMance2); //我的贡献
                    }
                    if (JSON.parse(data.exploreConditionObject).myGrow) {
                        if (JSON.parse(data.exploreConditionObject).myGrow) {
                            _self.perforMance3 = JSON.parse(data.exploreConditionObject).myGrow;
                        }
                        else {
                            _self.perforMance3 = ['1', '2'];
                        }
                        _self.AchievementGrow(_self.perforMance3);
                    }
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    };
    PerformanceAnalysisComponent.prototype.AchievementYe = function (item) {
        var _this = this;
        this.saveCustom = [];
        this.resultList0 = [];
        this.queryBdAchievementYe.arrType = "0";
        this.tableResult0 = [];
        this.httpService.queryBdAchievementYe(this.queryBdAchievementYe).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                if (data.resultList && data.resultList.length > 0) {
                    _this.tableResult0 = data.resultList;
                    if (data.resultList[0].yearTask) {
                        _this.dis_play5 = true;
                    }
                    else {
                        _this.dis_play5 = false;
                    }
                }
                else {
                    _this.tableResult0 = [];
                    _this.dis_play5 = false;
                }
                for (var _i = 0, item_1 = item; _i < item_1.length; _i++) {
                    var i = item_1[_i];
                    for (var _a = 0, _b = data.resultList; _a < _b.length; _a++) {
                        var j = _b[_a];
                        if (i == j.program) {
                            _this.resultList0.push(j);
                        }
                    }
                }
                if (_this.signType == '2') {
                    for (var _c = 0, _d = _this.resultList0; _c < _d.length; _c++) {
                        var i = _d[_c];
                        var obj = {};
                        obj['program'] = i.program;
                        obj['sameLevelOrder'] = i.sameLevelOrder;
                        obj['amount'] = i.amount;
                        obj['arrangementValue'] = i.arrangementValue;
                        // 	this.amount = i.amount;
                        //   this.arrangementValue=i.arrangementValue;
                        obj['opt'] = {
                            tooltip: {
                                formatter: "{a} <br/>{b}:{c}%"
                            },
                            toolbox: {},
                            series: [
                                {
                                    name: '业务指标',
                                    type: "gauge",
                                    detail: { formatter: '{value}%' },
                                    data: [{ value: parseFloat(i.yearTask), name: '完成率' }]
                                }
                            ]
                        };
                        _this.saveCustom.push(obj);
                    }
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
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    PerformanceAnalysisComponent.prototype.AchievementCon = function (item) {
        var _this = this;
        this.resultList1 = [];
        this.queryBdAchievementCon.arrType = "2";
        this.tableResult1 = [];
        this.httpService.queryBdAchievementCon(this.queryBdAchievementCon).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                if (data.resultList && data.resultList.length > 0) {
                    _this.tableResult1 = data.resultList;
                    for (var i = 0; i < data.resultList.length; i++) {
                        data.resultList[i].proportion = data.resultList[i].proportion + "%";
                    }
                    for (var _i = 0, item_2 = item; _i < item_2.length; _i++) {
                        var i_1 = item_2[_i];
                        for (var _a = 0, _b = data.resultList; _a < _b.length; _a++) {
                            var j = _b[_a];
                            if (i_1 == j.program) {
                                _this.resultList1.push(j);
                            }
                        }
                    }
                }
                else {
                    _this.tableResult1 = [];
                }
                _this.contribution();
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    PerformanceAnalysisComponent.prototype.AchievementGrow = function (item) {
        var _this = this;
        this.resultList2 = [];
        this.dtC0 = [];
        this.amountC0 = [];
        this.sameLevelAverAmountC0 = [];
        this.sameLevelOrderMaxC0 = [];
        this.sameLevelOrderMinC0 = [];
        this.dtC1 = [];
        this.amountC1 = [];
        this.sameLevelAverAmountC1 = [];
        this.sameLevelOrderMaxC1 = [];
        this.sameLevelOrderMinC1 = [];
        this.dtC2 = [];
        this.amountC2 = [];
        this.sameLevelAverAmountC2 = [];
        this.sameLevelOrderMaxC2 = [];
        this.sameLevelOrderMinC2 = [];
        this.dtC3 = [];
        this.amountC3 = [];
        this.sameLevelAverAmountC3 = [];
        this.sameLevelOrderMaxC3 = [];
        this.sameLevelOrderMinC3 = [];
        this.queryBdAchievementGrow.arrType = "1";
        this.tableResult2 = [];
        this.httpService.queryBdAchievementGrow(this.queryBdAchievementGrow).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                if (data.resultList && data.resultList.length > 0) {
                    _this.tableResult2 = data.resultList;
                    for (var _i = 0, item_3 = item; _i < item_3.length; _i++) {
                        var i = item_3[_i];
                        for (var _a = 0, _b = data.resultList; _a < _b.length; _a++) {
                            var j = _b[_a];
                            if (i == j.program) {
                                _this.resultList2.push(j);
                            }
                        }
                    }
                }
                else {
                    _this.tableResult2 = [];
                }
                _this.Growup();
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    PerformanceAnalysisComponent.prototype.Dt = function () {
        if (this.month == "01" || this.month == "03" || this.month == "05" || this.month == "07" || this.month == "08" || this.month == "10" || this.month == "12") {
            this.dtC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
            this.dtC0 = this.dtC;
            this.dtC1 = this.dtC;
            this.dtC2 = this.dtC;
            this.dtC3 = this.dtC;
        }
        else if (this.month == "04" || this.month == "06" || this.month == "09" || this.month == "11") {
            this.dtC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
            this.dtC0 = this.dtC;
            this.dtC1 = this.dtC;
            this.dtC2 = this.dtC;
            this.dtC3 = this.dtC;
        }
        //平年(判断二月份)
        if (parseInt(this.year) % 4 == 0 && this.month == "02") {
            this.dtC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29];
            this.dtC0 = this.dtC;
            this.dtC1 = this.dtC;
            this.dtC2 = this.dtC;
            this.dtC3 = this.dtC;
        }
        else if (parseInt(this.year) % 4 != 0 && this.month == "02") {
            this.dtC0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28];
            this.dtC0 = this.dtC;
            this.dtC1 = this.dtC;
            this.dtC2 = this.dtC;
            this.dtC3 = this.dtC;
        }
    };
    PerformanceAnalysisComponent.prototype.Growup = function () {
        for (var l = 0; l < this.resultList2.length; l++) {
            if (this.resultList2[l].program == "1") {
                //	this.legendName = ['我的存款日均', '部门平均存款日均', '部门最低存款日均', '部门最高存款日均']
                for (var j = 0; j < this.resultList2[l].programList.length; j++) {
                    if (this.timeTypeId == "0") {
                        this.dtC0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
                    }
                    else if (this.timeTypeId == "1") {
                        this.Dt();
                    }
                    else {
                        this.dtC0.push(this.resultList2[l].programList[j].dt); //日期
                    }
                    this.amountC0.push(this.resultList2[l].programList[j].amount); //我的
                    this.sameLevelAverAmountC0.push(this.resultList2[l].programList[j].sameLevelAverAmount); //平均
                    this.sameLevelOrderMaxC0.push(this.resultList2[l].programList[j].sameLevelOrderMax); //最高
                    this.sameLevelOrderMinC0.push(this.resultList2[l].programList[j].sameLevelOrderMin); //最低
                    this.Grow0 = {
                        color: ['#3398DB'],
                        title: {
                            text: '(单位.万元)',
                            textStyle: {
                                fontSize: '12',
                            },
                            x: '6px',
                            y: '10px',
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        legend: { data: ['我的存款日均', '部门平均存款日均', '部门最低存款日均', '部门最高存款日均'] },
                        grid: {
                            left: 70,
                            bottom: '17%'
                        },
                        xAxis: [
                            {
                                name: this.growDw,
                                boundaryGap: false,
                                type: 'category',
                                data: this.dtC0,
                            }
                        ],
                        yAxis: [
                            {}
                        ],
                        series: [
                            {
                                name: '我的存款日均',
                                color: ['red'],
                                data: this.amountC0,
                                type: 'line',
                                lineStyle: {
                                    normal: {
                                        width: 5,
                                    }
                                }
                            }, {
                                name: '部门平均存款日均',
                                color: ['yellow',],
                                data: this.sameLevelAverAmountC0,
                                type: 'line'
                            }, {
                                name: '部门最低存款日均',
                                color: ['orange',],
                                data: this.sameLevelOrderMinC0,
                                type: 'line'
                            }, {
                                name: '部门最高存款日均',
                                color: ['green',],
                                data: this.sameLevelOrderMaxC0,
                                type: 'line'
                            }
                        ]
                    };
                }
            }
            else if (this.resultList2[l].program == "2") {
                for (var j = 0; j < this.resultList2[l].programList.length; j++) {
                    if (this.timeTypeId == "0") {
                        this.dtC1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
                    }
                    else if (this.timeTypeId == "1") {
                        this.Dt();
                    }
                    else {
                        this.dtC1.push(this.resultList2[l].programList[j].dt);
                    }
                    this.amountC1.push(this.resultList2[l].programList[j].amount);
                    this.sameLevelAverAmountC1.push(this.resultList2[l].programList[j].sameLevelAverAmount);
                    this.sameLevelOrderMaxC1.push(this.resultList2[l].programList[j].sameLevelOrderMax);
                    this.sameLevelOrderMinC1.push(this.resultList2[l].programList[j].sameLevelOrderMin);
                    this.Grow1 = {
                        color: ['#3398DB'],
                        title: {
                            text: '(单位.万元)',
                            textStyle: {
                                fontSize: '12',
                            },
                            x: '6px',
                            y: '10px',
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        legend: { data: ['我的贷款日均', '部门平均贷款日均', '部门最低贷款日均', '部门最高贷款日均'] },
                        grid: {
                            left: 70,
                            bottom: '17%'
                        },
                        xAxis: [
                            {
                                name: this.growDw,
                                boundaryGap: false,
                                type: 'category',
                                data: this.dtC1,
                            }
                        ],
                        yAxis: [
                            {}
                        ],
                        series: [
                            {
                                name: '我的贷款日均',
                                color: ['red'],
                                data: this.amountC1,
                                type: 'line',
                                lineStyle: {
                                    normal: {
                                        width: 5,
                                    }
                                }
                            }, {
                                name: '部门平均贷款日均',
                                color: ['yellow',],
                                data: this.sameLevelAverAmountC1,
                                type: 'line'
                            }, {
                                name: '部门最低贷款日均',
                                color: ['orange',],
                                data: this.sameLevelOrderMinC1,
                                type: 'line'
                            }, {
                                name: '部门最高贷款日均',
                                color: ['green',],
                                data: this.sameLevelOrderMaxC1,
                                type: 'line'
                            }
                        ]
                    };
                }
            }
            else if (this.resultList2[l].program == "3") {
                for (var j = 0; j < this.resultList2[l].programList.length; j++) {
                    if (this.timeTypeId == "0") {
                        this.dtC2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
                    }
                    else if (this.timeTypeId == "1") {
                        this.Dt();
                    }
                    else {
                        this.dtC2.push(this.resultList2[l].programList[j].dt);
                    }
                    this.amountC2.push(this.resultList2[l].programList[j].amount);
                    this.sameLevelAverAmountC2.push(this.resultList2[l].programList[j].sameLevelAverAmount);
                    this.sameLevelOrderMaxC2.push(this.resultList2[l].programList[j].sameLevelOrderMax);
                    this.sameLevelOrderMinC2.push(this.resultList2[l].programList[j].sameLevelOrderMin);
                    this.Grow2 = {
                        color: ['#3398DB'],
                        title: {
                            text: '(单位.万元)',
                            textStyle: {
                                fontSize: '12',
                            },
                            x: '6px',
                            y: '10px',
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        legend: { data: ['我的信用卡透支余额', '部门平均信用卡透支余额', '部门最低信用卡透支余额', '部门最高信用卡透支余额'] },
                        grid: {
                            left: 70,
                            bottom: '17%'
                        },
                        xAxis: [
                            {
                                name: this.growDw,
                                boundaryGap: false,
                                type: 'category',
                                data: this.dtC2,
                            }
                        ],
                        yAxis: [
                            {}
                        ],
                        series: [
                            {
                                name: '我的信用卡透支余额',
                                color: ['red'],
                                data: this.amountC2,
                                type: 'line',
                                lineStyle: {
                                    normal: {
                                        width: 5,
                                    }
                                }
                            }, {
                                name: '部门平均信用卡透支余额',
                                color: ['yellow',],
                                data: this.sameLevelAverAmountC2,
                                type: 'line'
                            }, {
                                name: '部门最低信用卡透支余额',
                                color: ['orange',],
                                data: this.sameLevelOrderMinC2,
                                type: 'line'
                            }, {
                                name: '部门最高信用卡透支余额',
                                color: ['green',],
                                data: this.sameLevelOrderMaxC2,
                                type: 'line'
                            }
                        ]
                    };
                }
            }
            else if (this.resultList2[l].program == "4") {
                for (var j = 0; j < this.resultList2[l].programList.length; j++) {
                    if (this.timeTypeId == "0") {
                        this.dtC3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
                    }
                    else if (this.timeTypeId == "1") {
                        this.Dt();
                    }
                    else {
                        this.dtC3.push(this.resultList2[l].programList[j].dt);
                    }
                    this.amountC3.push(this.resultList2[l].programList[j].amount);
                    this.sameLevelAverAmountC3.push(this.resultList2[l].programList[j].sameLevelAverAmount);
                    this.sameLevelOrderMaxC3.push(this.resultList2[l].programList[j].sameLevelOrderMax);
                    this.sameLevelOrderMinC3.push(this.resultList2[l].programList[j].sameLevelOrderMin);
                    this.Grow3 = {
                        color: ['#3398DB'],
                        title: {
                            text: '(单位.万元)',
                            textStyle: {
                                fontSize: '12',
                            },
                            x: '6px',
                            y: '10px',
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        legend: { data: ['我的FTP利润', '部门平均FTP利润', '部门最低FTP利润', '部门最高FTP利润'] },
                        grid: {
                            left: 70,
                            bottom: '17%'
                        },
                        xAxis: [
                            {
                                name: this.growDw,
                                boundaryGap: false,
                                type: 'category',
                                data: this.dtC3,
                            }
                        ],
                        yAxis: [
                            {}
                        ],
                        series: [
                            {
                                name: '我的FTP利润',
                                color: ['red'],
                                data: this.amountC3,
                                type: 'line',
                                lineStyle: {
                                    normal: {
                                        width: 5,
                                    }
                                }
                            }, {
                                name: '部门平均FTP利润',
                                color: ['yellow',],
                                data: this.sameLevelAverAmountC3,
                                type: 'line'
                            }, {
                                name: '部门最低FTP利润',
                                color: ['orange',],
                                data: this.sameLevelOrderMinC3,
                                type: 'line'
                            }, {
                                name: '部门最高FTP利润',
                                color: ['green',],
                                data: this.sameLevelOrderMaxC3,
                                type: 'line'
                            }
                        ]
                    };
                }
            }
        }
    };
    PerformanceAnalysisComponent.prototype.contribution = function () {
        for (var i = 0; i < this.resultList1.length; i++) {
            if (this.resultList1[i].program == "1") {
                this.Con0 = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}:{c}({d}%)"
                    },
                    title: {
                        text: '(单位.万元)',
                        textStyle: {
                            fontSize: '12',
                        },
                        x: '15px',
                        y: '30px',
                    },
                    // legend: {
                    // 	orient: 'vertical',
                    // 	x: 'right',
                    // 	data: ['存款日均', '部门存款日均'],
                    // },
                    series: [
                        {
                            name: '存款日均',
                            type: 'pie',
                            radius: '70%',
                            center: ['50%', '50%'],
                            data: [
                                { value: this.resultList1[i]['amount'], name: '存款日均', itemStyle: { color: '#37c27f' } },
                                { value: this.resultList1[i]['higherAmount'], name: '部门存款日均', itemStyle: { color: '#0e6287' } },
                            ],
                            itemStyle: {
                                // emphasis: {
                                shadowBlur: 10,
                                shadowOffset: 0,
                                shadowColor: 'rgba(0,0,0,.5)'
                                // }
                            },
                            labelLine: {
                                length: 0
                            }
                        }
                    ]
                };
            }
            else if (this.resultList1[i].program == "2") {
                this.Con1 = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}:{c}({d}%)"
                    },
                    title: {
                        text: '(单位.万元)',
                        textStyle: {
                            fontSize: '12',
                        },
                        x: '15px',
                        y: '30px',
                    },
                    // legend: {
                    // 	orient: 'vertical',
                    // 	y: 'top',
                    // 	x: 'right',
                    // 	data: ['贷款日均', '部门贷款日均']
                    // },
                    series: [
                        {
                            name: '贷款日均',
                            type: 'pie',
                            radius: '70%',
                            center: ['50%', '50%'],
                            data: [
                                { value: this.resultList1[i]['amount'], name: '贷款日均', itemStyle: { color: '#37c27f' } },
                                { value: this.resultList1[i]['higherAmount'], name: '部门贷款日均', itemStyle: { color: '#0e6287' } },
                            ],
                            itemStyle: {
                                // emphasis: {
                                shadowBlur: 10,
                                shadowOffset: 0,
                                shadowColor: 'rgba(0,0,0,.5)'
                                // }
                            },
                            labelLine: {
                                length: 0
                            }
                        }
                    ]
                };
            }
            else if (this.resultList1[i].program == "3") {
                this.Con2 = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}:{c}({d}%)"
                    },
                    title: {
                        text: '(单位.万元)',
                        textStyle: {
                            fontSize: '12',
                        },
                        x: '15px',
                        y: '30px',
                    },
                    // legend: {
                    // 	orient: 'vertical',
                    // 	y: 'top',
                    // 	x: 'right',
                    // 	data: ['信用卡透支余额', '部门信用卡透支余额']
                    // },
                    series: [
                        {
                            name: '信用卡透支余额',
                            type: 'pie',
                            radius: '70%',
                            center: ['50%', '50%'],
                            data: [
                                { value: this.resultList1[i]['amount'], name: '信用卡透支余额', itemStyle: { color: '#37c27f' } },
                                { value: this.resultList1[i]['higherAmount'], name: '部门信用卡透支余额', itemStyle: { color: '#0e6287' } },
                            ],
                            itemStyle: {
                                // emphasis: {
                                shadowBlur: 10,
                                shadowOffset: 0,
                                shadowColor: 'rgba(0,0,0,.5)'
                                // }
                            },
                            labelLine: {
                                length: 0
                            }
                        }
                    ]
                };
            }
            else if (this.resultList1[i].program == "4") {
                this.Con3 = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}:{c}({d}%)"
                    },
                    title: {
                        text: '(单位.万元)',
                        textStyle: {
                            fontSize: '12',
                        },
                        x: '15px',
                        y: '30px',
                    },
                    // legend: {
                    // 	orient: 'vertical',
                    // 	y: 'top',
                    // 	x: 'right',
                    // 	data: ['FTP利润', '部门FTP利润']
                    // },
                    series: [
                        {
                            name: 'FTP利润',
                            type: 'pie',
                            radius: '70%',
                            center: ['50%', '50%'],
                            data: [
                                { value: this.resultList1[i]['amount'], name: 'FTP利润', itemStyle: { color: '#37c27f' } },
                                { value: this.resultList1[i]['higherAmount'], name: '部门FTP利润', itemStyle: { color: '#0e6287' } },
                            ],
                            itemStyle: {
                                // emphasis: {
                                shadowBlur: 10,
                                shadowOffset: 0,
                                shadowColor: 'rgba(0,0,0,.5)'
                                // }
                            },
                            labelLine: {
                                length: 0
                            }
                        }
                    ]
                };
            }
        }
    };
    //码值
    PerformanceAnalysisComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    PerformanceAnalysisComponent.prototype.selectClick = function (selectedValues) {
        this.more = false;
        this.awaylsPerformance1();
        this.awaylsPerformance2();
        this.awaylsPerformance3();
        // this.AchievementYe();
    };
    PerformanceAnalysisComponent.prototype.selectClick2 = function (selectedValues2) {
        this.more = false;
        this.awaylsPerformance1();
        this.awaylsPerformance2();
        this.awaylsPerformance3();
    };
    PerformanceAnalysisComponent.prototype.selectClick3 = function (selectedValues3) {
        this.more = false;
        this.awaylsPerformance1();
        this.awaylsPerformance2();
        this.awaylsPerformance3();
    };
    PerformanceAnalysisComponent.prototype.bv = function (item0) {
        if (this.timeTypeId == "3") {
            if (!this.startMonth) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "初始时间不能为空！" });
                return;
            }
            if (!this.endMonth) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "结束时间不能为空！" });
                return;
            }
            if (parseInt(this.startMonth.replace(/-/g, "")) > parseInt(this.commfunc.getCurrentDate().substring(0, 6))) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中开始时间不能大于当前月份！" });
                return;
            }
            if (parseInt(this.endMonth.replace(/-/g, "")) > parseInt(this.commfunc.getCurrentDate().substring(0, 6))) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中结束时间不能大于当前月份！" });
                return;
            }
            if (parseInt(this.startMonth.replace(/-/g, "")) >= parseInt(this.endMonth.replace(/-/g, ""))) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中开始月份不能大于或等于结束月份！" });
                return;
            }
            if (this.startMonth) {
                this.startTime = this.startMonth;
            }
            if (this.endMonth) {
                this.endTime = this.endMonth;
            }
        }
        var param = {
            indexType: item0,
            signType: this.signType,
            arrType: '0',
            timeTypeId: this.timeTypeId,
            startTime: this.startTime,
            endTime: this.endTime,
            relationNo: this.relationNo,
            orgNo: this.orgNo,
            levelNo: this.levelNo,
        };
        this.AchiDetail = param;
        this.dia = true;
        this.title = item0;
        this.showNum = 1;
    };
    PerformanceAnalysisComponent.prototype.con = function (item1) {
        if (this.timeTypeId == "3") {
            if (!this.startMonth) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "初始时间不能为空！" });
                return;
            }
            if (!this.endMonth) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "结束时间不能为空！" });
                return;
            }
            if (parseInt(this.startMonth.replace(/-/g, "")) > parseInt(this.commfunc.getCurrentDate().substring(0, 6))) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中开始时间不能大于当前月份！" });
                return;
            }
            if (parseInt(this.endMonth.replace(/-/g, "")) > parseInt(this.commfunc.getCurrentDate().substring(0, 6))) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中结束时间不能大于当前月份！" });
                return;
            }
            if (parseInt(this.startMonth.replace(/-/g, "")) >= parseInt(this.endMonth.replace(/-/g, ""))) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中开始月份不能大于或等于结束月份！" });
                return;
            }
            if (this.startMonth) {
                this.startTime = this.startMonth;
            }
            if (this.endMonth) {
                this.endTime = this.endMonth;
            }
        }
        var param = {
            indexType: item1,
            signType: this.signType,
            arrType: '2',
            timeTypeId: this.timeTypeId,
            startTime: this.startTime,
            endTime: this.endTime,
            relationNo: this.relationNo,
            orgNo: this.orgNo,
            levelNo: this.levelNo,
        };
        this.ConDetail = param;
        this.title = item1;
        this.showNum = 2;
        this.dia = true;
    };
    PerformanceAnalysisComponent.prototype.grow = function (item2) {
        if (this.timeTypeId == "3") {
            if (!this.startMonth) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "初始时间不能为空！" });
                return;
            }
            if (!this.endMonth) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "结束时间不能为空！" });
                return;
            }
            if (parseInt(this.startMonth.replace(/-/g, "")) > parseInt(this.commfunc.getCurrentDate().substring(0, 6))) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中开始时间不能大于当前月份！" });
                return;
            }
            if (parseInt(this.endMonth.replace(/-/g, "")) > parseInt(this.commfunc.getCurrentDate().substring(0, 6))) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中结束时间不能大于当前月份！" });
                return;
            }
            if (parseInt(this.startMonth.replace(/-/g, "")) >= parseInt(this.endMonth.replace(/-/g, ""))) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中开始月份不能大于或等于结束月份！" });
                return;
            }
            if (this.startMonth) {
                this.startTime = this.startMonth;
            }
            if (this.endMonth) {
                this.endTime = this.endMonth;
            }
        }
        var param = {
            indexType: item2,
            signType: this.signType,
            arrType: '1',
            timeTypeId: this.timeTypeId,
            startTime: this.startTime,
            endTime: this.endTime,
            relationNo: this.relationNo,
            orgNo: this.orgNo,
            levelNo: this.levelNo,
        };
        this.GrowDetail = param;
        this.title = item2;
        this.showNum = 3;
        this.dia = true;
    };
    PerformanceAnalysisComponent.prototype.formor = function (param) {
        if (this.timeTypeId == "3") {
            if (!this.startMonth) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "初始时间不能为空！" });
                return;
            }
            if (!this.endMonth) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "结束时间不能为空！" });
                return;
            }
            if (parseInt(this.startMonth.replace(/-/g, "")) > parseInt(this.commfunc.getCurrentDate().substring(0, 6))) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中开始时间不能大于当前月份！" });
                return;
            }
            if (parseInt(this.endMonth.replace(/-/g, "")) > parseInt(this.commfunc.getCurrentDate().substring(0, 6))) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中结束时间不能大于当前月份！" });
                return;
            }
            if (parseInt(this.startMonth.replace(/-/g, "")) >= parseInt(this.endMonth.replace(/-/g, ""))) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中开始月份不能大于或等于结束月份！" });
                return;
            }
            if (this.startMonth) {
                this.startTime = this.startMonth;
            }
            if (this.endMonth) {
                this.endTime = this.endMonth;
            }
        }
        if (param == 1) {
            var param_1 = {
                signType: this.signType,
                timeTypeId: this.timeTypeId,
                startTime: this.startTime,
                endTime: this.endTime,
                relationNo: this.relationNo,
                orgNo: this.orgNo,
                levelNo: this.levelNo,
            };
            this.AchiMore = param_1;
            this.title = "业绩";
            this.more = true;
            this.showMore = 1;
        }
        else if (param == 2) {
            var param_2 = {
                signType: this.signType,
                timeTypeId: this.timeTypeId,
                startTime: this.startTime,
                endTime: this.endTime,
                relationNo: this.relationNo,
                orgNo: this.orgNo,
                levelNo: this.levelNo,
            };
            this.ConMore = param_2;
            this.title = "占比";
            this.more = true;
            this.showMore = 2;
        }
        else if (param == 3) {
            var param_3 = {
                signType: this.signType,
                timeTypeId: this.timeTypeId,
                startTime: this.startTime,
                endTime: this.endTime,
                relationNo: this.relationNo,
                orgNo: this.orgNo,
                levelNo: this.levelNo,
            };
            this.GrowMore = param_3;
            this.title = "平均";
            this.more = true;
            this.showMore = 3;
        }
    };
    PerformanceAnalysisComponent.prototype.zb = function () {
        this.display = true;
        this.title = "指标设置";
    };
    PerformanceAnalysisComponent.prototype.onChange1 = function () {
        //真实业绩
        if (this.signType == "1") {
            this.queryBdAchievementYe.signType = "1";
            this.queryBdAchievementCon.signType = "1";
            this.queryBdAchievementGrow.signType = "1";
            this.display1 = true;
            this.display2 = false;
            this.AchievementYe(this.perforMance1); //我的业绩
            this.AchievementCon(this.perforMance2); //我的贡献
            this.AchievementGrow(this.perforMance3); //我的成长
            //指标业绩
        }
        else if (this.signType == "2") {
            this.queryBdAchievementYe.signType = "2";
            this.queryBdAchievementCon.signType = "2";
            this.queryBdAchievementGrow.signType = "2";
            this.display1 = false;
            this.display2 = true;
            this.AchievementYe(this.perforMance1); //我的业绩
            this.AchievementCon(this.perforMance2); //我的贡献
            this.AchievementGrow(this.perforMance3); //我的成长
        }
    };
    PerformanceAnalysisComponent.prototype.businessSwitch = function () {
        var _this = this;
        this.display3 = !this.display3;
        this.display4 = !this.display4;
        if (this.tableResult0.length == 0) {
            setTimeout(function () {
                _this.tableResult0 = [];
            });
        }
        if (this.tableResult1.length == 0) {
            setTimeout(function () {
                _this.tableResult1 = [];
            });
        }
        if (this.tableResult2.length == 0) {
            setTimeout(function () {
                _this.tableResult2 = [];
            });
        }
    };
    PerformanceAnalysisComponent.prototype.CurrentYear = function () {
        this.startTime = this.year + "-01-01";
        this.endTime = this.year + "-" + this.month + "-" + this.day;
        this.currentyear = true;
        this.currentmonth = false;
        this.queryBdAchievementYe.timeTypeId = "0";
        this.queryBdAchievementCon.timeTypeId = "0";
        this.queryBdAchievementGrow.timeTypeId = "0";
    };
    PerformanceAnalysisComponent.prototype.ymd = function () {
        this.year = this.commfunc.getCurrentDate().substring(0, 4);
        this.month = this.commfunc.getCurrentDate().substring(4, 6);
        this.month1 = parseInt(this.month) - 1 + '';
        this.day = parseInt(this.commfunc.getCurrentDate().substring(6, 8)) - 1 + '';
        //判断1号前一天是0的情况
        if (this.day == "0") {
            if (this.month1 == "1" || this.month1 == "3" || this.month1 == "5" || this.month1 == "7" || this.month1 == "8" || this.month1 == "10" || this.month1 == "12") {
                this.day = "31";
            }
            else if (this.month1 == "4" || this.month1 == "6" || this.month1 == "9" || this.month1 == "11") {
                this.day = "30";
            }
            //平年(判断二月份)
            if (parseInt(this.year) % 4 == 0 && this.month1 == "2") {
                this.day = "28";
            }
            else if (parseInt(this.year) % 4 != 0 && this.month1 == "2") {
                this.day = "27";
            }
            this.month = this.month1;
        }
        if (this.day.length == 1) {
            this.day = "0" + this.day;
        }
        else if (this.day.length == 2) {
            this.day = this.day;
        }
    };
    PerformanceAnalysisComponent.prototype.onChange = function () {
        this.ymd();
        //本年
        if (this.timeTypeId == "0") {
            this.notCustomMonth = true;
            this.customMonth = false;
            this.rank = true;
            this.isqueryTimePerformanc = false;
            this.CurrentYear();
            this.AchievementYe(this.perforMance1); //我的业绩
            this.AchievementCon(this.perforMance2); //我的贡献
            this.AchievementGrow(this.perforMance3);
            this.growDw = "月份";
            //本月
        }
        else if (this.timeTypeId == "1") {
            this.notCustomMonth = true;
            this.customMonth = false;
            this.rank = true;
            this.startTime = this.year + "-" + this.month + "-01";
            this.endTime = this.year + "-" + this.month + "-" + this.day;
            this.currentyear = false;
            this.currentmonth = true;
            // this.queryBdAchievementYe.timeTypeId = "1";
            this.queryBdAchievementYe.timeTypeId = "1";
            this.queryBdAchievementCon.timeTypeId = "1";
            this.queryBdAchievementGrow.timeTypeId = "1";
            this.queryBdAchievementYe.startTime = this.startTime;
            this.queryBdAchievementCon.startTime = this.startTime;
            this.queryBdAchievementGrow.startTime = this.startTime;
            this.queryBdAchievementYe.endTime = this.endTime;
            this.queryBdAchievementCon.endTime = this.endTime;
            this.queryBdAchievementGrow.endTime = this.endTime;
            this.isqueryTimePerformanc = false;
            this.AchievementYe(this.perforMance1); //我的业绩
            this.AchievementCon(this.perforMance2); //我的贡献
            this.AchievementGrow(this.perforMance3);
            this.growDw = "天数";
            //前推一年
        }
        else if (this.timeTypeId == "2") {
            this.notCustomMonth = true;
            this.customMonth = false;
            this.rank = false;
            this.endTime = parseInt(this.year) + "-" + this.month + "-" + this.day;
            this.month = parseInt(this.month) + 1 + '';
            if (this.month == "13") {
                this.month = "1";
            }
            if (this.month.length == 1) {
                this.month = "0" + this.month;
            }
            else if (this.month.length == 2) {
                this.month = this.month;
            }
            this.startTime = parseInt(this.year) - 1 + "-" + this.month + "-01";
            this.queryBdAchievementYe.timeTypeId = "2";
            this.queryBdAchievementCon.timeTypeId = "2";
            this.queryBdAchievementGrow.timeTypeId = "2";
            this.queryBdAchievementYe.startTime = this.startTime;
            this.queryBdAchievementCon.startTime = this.startTime;
            this.queryBdAchievementGrow.startTime = this.startTime;
            this.queryBdAchievementYe.endTime = this.endTime;
            this.queryBdAchievementCon.endTime = this.endTime;
            this.queryBdAchievementGrow.endTime = this.endTime;
            this.isqueryTimePerformanc = false;
            this.AchievementYe(this.perforMance1); //我的业绩
            this.AchievementCon(this.perforMance2); //我的贡献
            this.AchievementGrow(this.perforMance3);
            this.growDw = "月份";
            //自定义月
        }
        else if (this.timeTypeId == "3") {
            this.notCustomMonth = false;
            this.customMonth = true;
            this.rank = false;
            this.startTime = '';
            this.endTime = '';
            this.queryBdAchievementYe.startTime = "";
            this.queryBdAchievementCon.startTime = "";
            this.queryBdAchievementGrow.startTime = "";
            this.queryBdAchievementYe.endTime = "";
            this.queryBdAchievementCon.endTime = "";
            this.queryBdAchievementGrow.endTime = "";
            this.queryBdAchievementYe.timeTypeId = "3";
            this.queryBdAchievementCon.timeTypeId = "3";
            this.queryBdAchievementGrow.timeTypeId = "3";
            this.isqueryTimePerformanc = true;
            this.growDw = "月份";
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: '提示', detail: "请选择相应的自定义月份，然后点击查询！" });
        }
    };
    //自定义年月查询业绩
    PerformanceAnalysisComponent.prototype.queryTimePerformanc = function () {
        if (!this.startMonth) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "初始时间不能为空！" });
            return;
        }
        if (!this.endMonth) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "结束时间不能为空！" });
            return;
        }
        if (parseInt(this.startMonth.replace(/-/g, "")) > parseInt(this.commfunc.getCurrentDate().substring(0, 6))) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中开始时间不能大于当前月份！" });
            return;
        }
        if (parseInt(this.endMonth.replace(/-/g, "")) > parseInt(this.commfunc.getCurrentDate().substring(0, 6))) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中结束时间不能大于当前月份！" });
            return;
        }
        if (parseInt(this.startMonth.replace(/-/g, "")) >= parseInt(this.endMonth.replace(/-/g, ""))) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "自定义月中开始月份不能大于或等于结束月份！" });
            return;
        }
        this.queryBdAchievementYe.startTime = this.startMonth;
        this.queryBdAchievementCon.startTime = this.startMonth;
        this.queryBdAchievementGrow.startTime = this.startMonth;
        this.queryBdAchievementYe.endTime = this.endMonth;
        this.queryBdAchievementCon.endTime = this.endMonth;
        this.queryBdAchievementGrow.endTime = this.endMonth;
        this.AchievementYe(this.perforMance1); //我的业绩
        this.AchievementCon(this.perforMance2); //我的贡献
        this.AchievementGrow(this.perforMance3);
    };
    PerformanceAnalysisComponent.prototype.treeCall = function (param) {
        var _this = this;
        this.treeOrgName = param.orgName;
        this.treeOrgId = param.orgId;
        if (param != null) {
            this.userInValue = this.treeOrgId;
            this.perVis = true;
        }
        this.queryBdAchievementYe.relationNo = '';
        this.queryBdAchievementCon.relationNo = '';
        this.queryBdAchievementGrow.relationNo = '';
        this.queryBdAchievementYe.orgNo = param.orgId;
        this.queryBdAchievementCon.orgNo = param.orgId;
        this.queryBdAchievementGrow.orgNo = param.orgId;
        this.orgTreeBean.orgId = param.orgId;
        this.orgTreeBean.relationshipType = '0';
        this.orgNo = param.orgId;
        this.relationNo = '';
        this.uisftechCommonHttpService.queryOrgByOrgIdAndRelationship(this.orgTreeBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.queryBdAchievementYe.levelNo = data.orgList[0].operatingLevel;
                _this.queryBdAchievementCon.levelNo = data.orgList[0].operatingLevel;
                _this.queryBdAchievementGrow.levelNo = data.orgList[0].operatingLevel;
                _this.levelNo = data.orgList[0].operatingLevel;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'info', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
        this.AchievementYe(this.perforMance1); //我的业绩
        this.AchievementCon(this.perforMance2); //我的贡献
        this.AchievementGrow(this.perforMance3);
    };
    PerformanceAnalysisComponent.prototype.perInfor = function (item) {
        if (item.length != null) {
            this.treeOrgName = item[0].tellerName;
            this.queryBdAchievementYe.orgNo = '';
            this.queryBdAchievementCon.orgNo = '';
            this.queryBdAchievementGrow.orgNo = '';
            this.queryBdAchievementYe.levelNo = '';
            this.queryBdAchievementCon.levelNo = '';
            this.queryBdAchievementGrow.levelNo = '';
            this.queryBdAchievementYe.relationNo = item[0].tellerId;
            this.queryBdAchievementCon.relationNo = item[0].tellerId;
            this.queryBdAchievementGrow.relationNo = item[0].tellerId;
            this.orgNo = '';
            this.levelNo = '';
            this.relationNo = item[0].tellerId;
            this.AchievementYe(this.perforMance1); //我的业绩
            this.AchievementCon(this.perforMance2); //我的贡献
            this.AchievementGrow(this.perforMance3);
        }
    };
    PerformanceAnalysisComponent.prototype.orgSelect = function () {
        this.orgTreePage = true;
    };
    PerformanceAnalysisComponent.prototype.sure = function () {
        this.orgTreePage = false;
    };
    PerformanceAnalysisComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'performance-analysis',
            template: __webpack_require__(/*! ./performance-analysis.component.html */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/performance-analysis.component.html"),
            styles: [__webpack_require__(/*! ./performance-analysis.component.scss */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/performance-analysis.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_4__["AchievementHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_4__["AchievementHttpService"], app_uisftech_common_http_uisftech_common_http_service__WEBPACK_IMPORTED_MODULE_5__["UisftechCommonHttpService"]])
    ], PerformanceAnalysisComponent);
    return PerformanceAnalysisComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/performance-analysis.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/performance-analysis.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PerformanceAnalysisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceAnalysisModule", function() { return PerformanceAnalysisModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _performance_analysis_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./performance-analysis.routing */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/performance-analysis.routing.ts");
/* harmony import */ var _performance_analysis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./performance-analysis.component */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/performance-analysis.component.ts");
/* harmony import */ var _index_setting_index_setting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-setting/index-setting.component */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/index-setting/index-setting.component.ts");
/* harmony import */ var _balance_view_balance_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./balance-view/balance-view.component */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/balance-view/balance-view.component.ts");
/* harmony import */ var _grow_view_grow_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grow-view/grow-view.component */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/grow-view/grow-view.component.ts");
/* harmony import */ var _view_ratio_view_ratio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-ratio/view-ratio.component */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/view-ratio/view-ratio.component.ts");
/* harmony import */ var _more_achievement_more_achievement_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./more-achievement/more-achievement.component */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-achievement/more-achievement.component.ts");
/* harmony import */ var _more_ratio_more_ratio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./more-ratio/more-ratio.component */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-ratio/more-ratio.component.ts");
/* harmony import */ var _more_avecontrast_more_avecontrast_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./more-avecontrast/more-avecontrast.component */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/more-avecontrast/more-avecontrast.component.ts");
/* harmony import */ var _balance_detail_balance_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./balance-detail/balance-detail.component */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/balance-detail/balance-detail.component.ts");
/* harmony import */ var _ratio_detail_ratio_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ratio-detail/ratio-detail.component */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/ratio-detail/ratio-detail.component.ts");
/* harmony import */ var _grow_detail_grow_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grow-detail/grow-detail.component */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/grow-detail/grow-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { BalanceLoanComponent } from './balance-loan/balance-loan.component';

// import { LoanRatioComponent } from './loan-ratio/loan-ratio.component';
// import { DepositRatioComponent } from './deposit-ratio/deposit-ratio.component';






var PerformanceAnalysisModule = /** @class */ (function () {
    function PerformanceAnalysisModule() {
    }
    PerformanceAnalysisModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_2__["FrameworkModule"],
                _performance_analysis_routing__WEBPACK_IMPORTED_MODULE_4__["PerformanceAnalysisRouting"]
            ],
            declarations: [
                _performance_analysis_component__WEBPACK_IMPORTED_MODULE_5__["PerformanceAnalysisComponent"],
                _index_setting_index_setting_component__WEBPACK_IMPORTED_MODULE_6__["IndexSettingComponent"],
                _balance_view_balance_view_component__WEBPACK_IMPORTED_MODULE_7__["BalanceViewComponent"],
                _view_ratio_view_ratio_component__WEBPACK_IMPORTED_MODULE_9__["ViewRatioComponent"],
                _grow_view_grow_view_component__WEBPACK_IMPORTED_MODULE_8__["GrowViewComponent"],
                _more_achievement_more_achievement_component__WEBPACK_IMPORTED_MODULE_10__["MoreAchievementComponent"],
                _more_ratio_more_ratio_component__WEBPACK_IMPORTED_MODULE_11__["MoreRatioComponent"],
                _more_avecontrast_more_avecontrast_component__WEBPACK_IMPORTED_MODULE_12__["MoreAvecontrastComponent"],
                _balance_detail_balance_detail_component__WEBPACK_IMPORTED_MODULE_13__["BalanceDetailComponent"],
                _ratio_detail_ratio_detail_component__WEBPACK_IMPORTED_MODULE_14__["RatioDetailComponent"],
                _grow_detail_grow_detail_component__WEBPACK_IMPORTED_MODULE_15__["GrowDetailComponent"],
            ],
            providers: []
        })
    ], PerformanceAnalysisModule);
    return PerformanceAnalysisModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/performance-analysis.routing.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/performance-analysis.routing.ts ***!
  \********************************************************************************************************/
/*! exports provided: routes, PerformanceAnalysisRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceAnalysisRouting", function() { return PerformanceAnalysisRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _performance_analysis_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./performance-analysis.component */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/performance-analysis.component.ts");


// import { IndexSettingComponent } from './index-setting/index-setting.component';
// import { BalanceViewComponent } from './balance-view/balance-view.component';
// import { BalanceDepositComponent } from './balance-deposit/balance-deposit.component';
// import { BalanceLoanComponent } from './balance-loan/balance-loan.component';
// import { ViewRatioComponent } from './view-ratio/view-ratio.component';
// import { LoanRatioComponent }  from './loan-ratio/loan-ratio.component';
// import { DepositRatioComponent } from './deposit-ratio/deposit-ratio.component';
// import { MoreAchievementComponent } from './more-achievement/more-achievement.component';
// import { MoreRatioComponent } from './more-ratio/more-ratio.component';
// import { MoreAvecontrastComponent } from './more-avecontrast/more-avecontrast.component';
var routes = [
    {
        path: '',
        component: _performance_analysis_component__WEBPACK_IMPORTED_MODULE_1__["PerformanceAnalysisComponent"],
    }
];
var PerformanceAnalysisRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/ratio-detail/ratio-detail.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/ratio-detail/ratio-detail.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n\r\n    <div class=\"ui-g-12\">\r\n        <div>我的贡献值</div>\r\n        <p-dataTable [value]=\"tableResult0\" [style]=\"{'text-align':'center'}\">\r\n            <p-column header='二级产品' field=\"secondProduct\"></p-column>\r\n            <p-column header='贡献值' field=\"contribution\"> </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div>部门贡献值</div>\r\n        <p-dataTable [value]=\"tableResult1\" [style]=\"{'text-align':'center'}\">\r\n            <p-column header='二级产品' field=\"secondProduct\"></p-column>\r\n            <p-column header='贡献值' field=\"contribution\"> </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/ratio-detail/ratio-detail.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/ratio-detail/ratio-detail.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vYWNoaWV2ZW1lbnQtdGFzay9wZXJmb3JtYW5jZS1hbmFseXNpcy9yYXRpby1kZXRhaWwvcmF0aW8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/ratio-detail/ratio-detail.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/ratio-detail/ratio-detail.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: RatioDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatioDetailComponent", function() { return RatioDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean */ "./src/app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean.ts");
/* harmony import */ var app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/http/achievement-search.service */ "./src/app/pages/tzb/custom/achievement-task/http/achievement-search.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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





var RatioDetailComponent = /** @class */ (function () {
    function RatioDetailComponent(commfunc, router, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.queryBdAchievementDetail = new app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_1__["QueryBdAchievementDetail"]();
        this.ArrayD = [
            //一级目录
            { "sel": 'L1001', name: '授信业务产品' },
            { "sel": 'L1002', name: '存款业务产品' },
            { "sel": 'L1003', name: '理财业务产品' },
            { "sel": 'L1004', name: '银行卡' },
            { "sel": 'L1005', name: '国际业务产品' },
            //二级目录
            { "sel": 'L2001', name: '一般贷款' },
            { "sel": 'L2002', name: '小本贷款' },
            { "sel": 'L2004', name: '时贷通' },
            { "sel": 'L2005', name: '自助卡' },
            { "sel": 'L2006', name: '消费信贷' },
            { "sel": 'L2007', name: '承兑' },
            { "sel": 'L2008', name: '保函' },
            { "sel": 'L2009', name: '贴现' },
            { "sel": 'L2010', name: '委托贷款' },
            { "sel": 'L2048', name: 'E融卡' },
            { "sel": 'L2011', name: '金添储蓄' },
            { "sel": 'L2012', name: '个人活期' },
            { "sel": 'L2013', name: '单位活期存款' },
            { "sel": 'L2014', name: '单位定期存款' },
            { "sel": 'L2015', name: '保证金存款' },
            { "sel": 'L2016', name: '其他存款' },
            { "sel": 'L2017', name: '理财产品' },
            { "sel": 'L2018', name: '“周周盈”稳进账理财计划' },
            { "sel": 'L2019', name: '机构理财计划' },
            { "sel": 'L2003', name: '借记卡类授信' },
            { "sel": 'L2020', name: '信用卡类授信' },
            { "sel": 'L2021', name: '准贷记卡' },
            { "sel": 'L2022', name: '出口贸易融资' },
            { "sel": 'L2023', name: '进口贸易融资' },
            { "sel": 'L2024', name: '一般贷款' },
            { "sel": 'L2025', name: '国内信用证融资' },
            { "sel": 'L2026', name: '国际结算' },
            { "sel": 'L2046', name: '结售汇业务' },
            { "sel": 'L2047', name: '国际业务存款' },
        ];
        this.msgs = []; //提示信息
        this.tableResult0 = []; //我的
        this.tableResult1 = []; //部门
    }
    RatioDetailComponent.prototype.ngOnInit = function () {
        this.codeVal();
        this.BdAchievementDetail = this.code['BdAchievementDetail']; //我的业绩
        this.queryBdAchievementDetail.levelNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.operatingLevel;
        if (JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.managePermission == "Y") {
            this.queryBdAchievementDetail.orgNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.orgId;
        }
        else if (JSON.parse(this.commfunc.getSessionData('commonHeader')).extParam.managePermission == "N") {
            this.queryBdAchievementDetail.relationNo = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        }
        this.queryBdAchievementDetail.indexType = this.inValue.indexType;
        this.queryBdAchievementDetail.signType = this.inValue.signType;
        this.queryBdAchievementDetail.arrType = this.inValue.arrType;
        this.queryBdAchievementDetail.timeTypeId = this.inValue.timeTypeId;
        this.queryBdAchievementDetail.startTime = this.inValue.startTime;
        this.queryBdAchievementDetail.endTime = this.inValue.endTime;
        this.queryBdAchievementDetail.relationNo = this.inValue.relationNo;
        this.queryBdAchievementDetail.orgNo = this.inValue.orgNo;
        this.queryBdAchievementDetail.levelNo = this.inValue.levelNo;
        this.Detail();
    };
    RatioDetailComponent.prototype.Detail = function () {
        var _this = this;
        this.httpService.queryBdAchievementDetail(this.queryBdAchievementDetail).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                for (var i = 0; i < data.resultList.length; i++) {
                    for (var j = 0; j < _this.ArrayD.length; j++) {
                        if (data.resultList[i].secondProduct == _this.ArrayD[j].sel) {
                            data.resultList[i].secondProduct = _this.ArrayD[j].name;
                            _this.tableResult0 = data.resultList;
                        }
                    }
                }
                for (var n = 0; n < data.resultList.length; n++) {
                    for (var m = 0; m < _this.ArrayD.length; m++) {
                        if (data.resultListFist[n].secondProduct == _this.ArrayD[m].sel) {
                            data.resultListFist[n].secondProduct = _this.ArrayD[m].name;
                            _this.tableResult1 = data.resultListFist;
                        }
                    }
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //码值
    RatioDetailComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RatioDetailComponent.prototype, "inValue", void 0);
    RatioDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ratio-detail',
            template: __webpack_require__(/*! ./ratio-detail.component.html */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/ratio-detail/ratio-detail.component.html"),
            styles: [__webpack_require__(/*! ./ratio-detail.component.scss */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/ratio-detail/ratio-detail.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__["AchievementHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__["AchievementHttpService"]])
    ], RatioDetailComponent);
    return RatioDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/view-ratio/view-ratio.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/view-ratio/view-ratio.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n        <div class=\"ui-g-12\">\r\n                <div>{{queryBdAchievementDetail.indexType|codeValuePie:BdAchievementDetail}}</div>\r\n                <div class=\"ui-g-5\">\r\n                        <div class=\"bg-div\">\r\n                                <div>我的{{queryBdAchievementDetail.indexType|codeValuePie:BdAchievementDetail}}</div>\r\n                                <div echarts [options]=\"MyRatio\"></div>\r\n                        </div>\r\n                </div>\r\n                <div class=\"ui-g-2\" style=\"text-align:center;\">\r\n                        <img src=\"../assets/pages/images/vs.png\" class=\"vs\">\r\n                        <div class=\"contrast\" (click)=\"iconSwitch()\">贡献对比</div>\r\n                </div>\r\n                <div class=\"ui-g-5\">\r\n                        <div class=\"bg-div\">\r\n                                <div>第一名的{{queryBdAchievementDetail.indexType|codeValuePie:BdAchievementDetail}}</div>\r\n                                <div echarts [options]=\"DepartmentRatio\"></div>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n        <div class=\"ui-g-12\" *ngIf=\"display\">\r\n\r\n                <div echarts class=\"bg-div\" [options]=\"LineContrast\"></div>\r\n        </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/view-ratio/view-ratio.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/view-ratio/view-ratio.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-12 {\n  overflow: hidden; }\n  .ui-g-12 .vs {\n    padding-top: 20%; }\n  .ui-g-12 .contrast {\n    background-color: #008aa6;\n    width: 60%;\n    margin-left: 20%;\n    height: 40px;\n    border-radius: 5px;\n    padding-top: 10px; }\n  .ui-g-12 .contrast:hover {\n      cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9hY2hpZXZlbWVudC10YXNrL3BlcmZvcm1hbmNlLWFuYWx5c2lzL3ZpZXctcmF0aW8vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxhY2hpZXZlbWVudC10YXNrXFxwZXJmb3JtYW5jZS1hbmFseXNpc1xcdmlldy1yYXRpb1xcdmlldy1yYXRpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBO0VBRHBCO0lBR1EsZ0JBQWdCLEVBQUE7RUFIeEI7SUFNUSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBO0VBWHpCO01BYVksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9hY2hpZXZlbWVudC10YXNrL3BlcmZvcm1hbmNlLWFuYWx5c2lzL3ZpZXctcmF0aW8vdmlldy1yYXRpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1nLTEyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAudnMge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgICB9XHJcbiAgICAuY29udHJhc3Qge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDhhYTY7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/view-ratio/view-ratio.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/achievement-task/performance-analysis/view-ratio/view-ratio.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ViewRatioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRatioComponent", function() { return ViewRatioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean */ "./src/app/pages/tzb/custom/achievement-task/bean/TaskArrangement.bean.ts");
/* harmony import */ var app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/achievement-task/http/achievement-search.service */ "./src/app/pages/tzb/custom/achievement-task/http/achievement-search.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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





var ViewRatioComponent = /** @class */ (function () {
    function ViewRatioComponent(commfunc, router, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.queryBdAchievementDetail = new app_pages_tzb_custom_achievement_task_bean_TaskArrangement_bean__WEBPACK_IMPORTED_MODULE_1__["QueryBdAchievementDetail"]();
        this.display = false;
        this.msgs = []; //提示信息
        this.contributionC = [];
        this.secondProductC = [];
        this.contributionC1 = [];
        this.secondProductC1 = [];
        this.array1 = [];
        this.array2 = [];
        this.array1Name = [];
        this.array2Name = [];
        this.array1Value = [];
        this.array2Value = [];
        this.ArrayD = [
            //一级目录
            { "sel": 'L1001', name: '授信业务产品' },
            { "sel": 'L1002', name: '存款业务产品' },
            { "sel": 'L1003', name: '理财业务产品' },
            { "sel": 'L1004', name: '银行卡' },
            { "sel": 'L1005', name: '国际业务产品' },
            //二级目录
            { "sel": 'L2001', name: '一般贷款' },
            { "sel": 'L2002', name: '小本贷款' },
            { "sel": 'L2004', name: '时贷通' },
            { "sel": 'L2005', name: '自助卡' },
            { "sel": 'L2006', name: '消费信贷' },
            { "sel": 'L2007', name: '承兑' },
            { "sel": 'L2008', name: '保函' },
            { "sel": 'L2009', name: '贴现' },
            { "sel": 'L2010', name: '委托贷款' },
            { "sel": 'L2048', name: 'E融卡' },
            { "sel": 'L2011', name: '金添储蓄' },
            { "sel": 'L2012', name: '个人活期' },
            { "sel": 'L2013', name: '单位活期存款' },
            { "sel": 'L2014', name: '单位定期存款' },
            { "sel": 'L2015', name: '保证金存款' },
            { "sel": 'L2016', name: '其他存款' },
            { "sel": 'L2017', name: '理财产品' },
            { "sel": 'L2018', name: '“周周盈”稳进账理财计划' },
            { "sel": 'L2019', name: '机构理财计划' },
            { "sel": 'L2003', name: '借记卡类授信' },
            { "sel": 'L2020', name: '信用卡类授信' },
            { "sel": 'L2021', name: '准贷记卡' },
            { "sel": 'L2022', name: '出口贸易融资' },
            { "sel": 'L2023', name: '进口贸易融资' },
            { "sel": 'L2024', name: '一般贷款' },
            { "sel": 'L2025', name: '国内信用证融资' },
            { "sel": 'L2026', name: '国际结算' },
            { "sel": 'L2046', name: '结售汇业务' },
            { "sel": 'L2047', name: '国际业务存款' },
        ];
        this.ArrayName = [];
    }
    ViewRatioComponent.prototype.ngOnInit = function () {
        this.codeVal();
        this.BdAchievementDetail = this.code['BdAchievementDetail']; //我的业绩
        this.queryBdAchievementDetail.indexType = this.inValue.indexType;
        this.queryBdAchievementDetail.signType = this.inValue.signType;
        this.queryBdAchievementDetail.arrType = this.inValue.arrType;
        this.queryBdAchievementDetail.timeTypeId = this.inValue.timeTypeId;
        this.queryBdAchievementDetail.startTime = this.inValue.startTime;
        this.queryBdAchievementDetail.endTime = this.inValue.endTime;
        this.queryBdAchievementDetail.relationNo = this.inValue.relationNo;
        this.queryBdAchievementDetail.orgNo = this.inValue.orgNo;
        this.queryBdAchievementDetail.levelNo = this.inValue.levelNo;
        if (this.inValue.indexType == "1") {
            this.ConDw0 = "我的存款日均";
            this.ConDw1 = "第一名的存款日均";
        }
        else if (this.inValue.indexType == "2") {
            this.ConDw0 = "我的贷款日均";
            this.ConDw1 = "第一名的贷款日均";
        }
        else if (this.inValue.indexType == "3") {
            this.ConDw0 = "我的信用卡透支余额";
            this.ConDw1 = "第一名的信用卡透支余额";
        }
        else if (this.inValue.indexType == "4") {
            this.ConDw0 = "我的FTP利润";
            this.ConDw1 = "第一名的FTP利润";
        }
        this.Detail();
    };
    ViewRatioComponent.prototype.Detail = function () {
        var _this = this;
        this.httpService.queryBdAchievementDetail(this.queryBdAchievementDetail).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                if (data.resultList) {
                    for (var _i = 0, _a = data.resultList; _i < _a.length; _i++) {
                        var i = _a[_i];
                        // this.Array = ['L2004', 'L2001']
                        // for (var i = 0; i < this.Array.length; i++) {
                        // 	for (var j = 0; j < this.ArrayD.length; j++) {
                        // 		if (this.Array[i] == this.ArrayD[j].sel) {
                        // 			console.log(this.ArrayD[j].name);
                        // 		}
                        // 	}
                        // }
                        var obj = {};
                        obj['value'] = i.contribution;
                        for (var _b = 0, _c = _this.ArrayD; _b < _c.length; _b++) {
                            var k = _c[_b];
                            if (i.secondProduct == k.sel) {
                                _this.secondProductC.push(k.name);
                                _this.array1Name.push(k.name);
                                obj['name'] = k.name;
                            }
                        }
                        //	console.log(this.secondProductC);
                        _this.contributionC.push(i.contribution);
                        // this.secondProductC.push(i.secondProduct);
                        _this.array1.push(obj);
                        _this.array1Value.push(i.contribution);
                    }
                }
                if (data.resultListFist) {
                    for (var _d = 0, _e = data.resultListFist; _d < _e.length; _d++) {
                        var j = _e[_d];
                        var obj = {};
                        obj['value'] = j.contribution;
                        for (var _f = 0, _g = _this.ArrayD; _f < _g.length; _f++) {
                            var l = _g[_f];
                            if (j.secondProduct == l.sel) {
                                _this.secondProductC1.push(l.name);
                                _this.array2Name.push(l.name);
                                obj['name'] = l.name;
                            }
                        }
                        _this.contributionC1.push(j.contribution);
                        //	this.secondProductC1.push(j.secondProduct);
                        _this.array2.push(obj);
                        //this.array2Name.push(j.secondProduct);
                        _this.array2Value.push(j.contribution);
                    }
                }
                if (_this.secondProductC1.length >= _this.secondProductC1) {
                    _this.ArrayName = _this.secondProductC1;
                }
                else {
                    _this.ArrayName = _this.secondProductC;
                }
                //console.log(this.secondProductC1)
                _this.Det();
                _this.Line();
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    ViewRatioComponent.prototype.Line = function () {
        this.LineContrast = {
            title: {
                text: '产品种类',
                textStyle: {
                    fontSize: '12',
                },
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: [this.ConDw0, this.ConDw1],
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                name: '贡献',
                scale: true,
                textStyle: {
                    fontSize: '10',
                },
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: this.ArrayName,
            },
            series: [
                {
                    name: this.ConDw0,
                    type: 'bar',
                    data: this.contributionC,
                },
                {
                    name: this.ConDw1,
                    type: 'bar',
                    data: this.contributionC1
                }
            ]
        };
    };
    ViewRatioComponent.prototype.Det = function () {
        this.MyRatio = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}:{c}({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'center',
                //y:'300px',
                y: 'right',
                data: this.array1Name,
            },
            series: [
                {
                    name: '我的',
                    type: 'pie',
                    radius: '70%',
                    center: ['50%', '50%'],
                    data: this.array1,
                    itemStyle: {
                        // emphasis: {
                        shadowBlur: 10,
                        shadowOffset: 0,
                        shadowColor: 'rgba(0,0,0,.5)'
                        // }
                    },
                    labelLine: {
                        length: 0
                    }
                }
            ]
        };
        this.DepartmentRatio = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}:{c}({d}%)"
            },
            // title: {
            // text: '部门存款余额',
            // textStyle: {
            // 	fontSize: '12',
            // },
            // x: '20px',
            // y: '5px',
            // subtext: '查看详情>'
            // },
            legend: {
                orient: 'vertical',
                x: 'center',
                //y:'300px',
                y: 'right',
                data: this.array2Name,
            },
            series: [
                {
                    name: '部门的',
                    type: 'pie',
                    radius: '70%',
                    center: ['50%', '50%'],
                    data: this.array2,
                    itemStyle: {
                        // emphasis: {
                        shadowBlur: 10,
                        shadowOffset: 0,
                        shadowColor: 'rgba(0,0,0,.5)'
                        // }
                    },
                    labelLine: {
                        length: 0
                    }
                }
            ]
        };
    };
    //码值
    ViewRatioComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ViewRatioComponent.prototype.iconSwitch = function () {
        this.display = !this.display;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ViewRatioComponent.prototype, "inValue", void 0);
    ViewRatioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'view-ratio',
            template: __webpack_require__(/*! ./view-ratio.component.html */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/view-ratio/view-ratio.component.html"),
            styles: [__webpack_require__(/*! ./view-ratio.component.scss */ "./src/app/pages/tzb/custom/achievement-task/performance-analysis/view-ratio/view-ratio.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__["AchievementHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_pages_tzb_custom_achievement_task_http_achievement_search_service__WEBPACK_IMPORTED_MODULE_2__["AchievementHttpService"]])
    ], ViewRatioComponent);
    return ViewRatioComponent;
}());



/***/ })

}]);
//# sourceMappingURL=performance-analysis-performance-analysis-module.js.map