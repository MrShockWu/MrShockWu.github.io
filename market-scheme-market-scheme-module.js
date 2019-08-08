(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["market-scheme-market-scheme-module"],{

/***/ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-search/market-scheme-search.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-search/market-scheme-search.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 营销方案-查询 -->\r\n<div class=\"basis-group ui-g-12 module\">\r\n  <!-- msgs -->\r\n  <p-growl [(value)]=\"msgs\" life=\"3000\"></p-growl>\r\n  <div class=\"ui-g-12\">\r\n    <header-title [Info]=\"marketSchemeSearch\"></header-title>\r\n    <div class=\"form-group\">\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-1 ui-g-offset-2 label-css\"><label>客户群群号：</label></div>\r\n          <div class=\"ui-g-3 input-css\"><label><input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"groupMarketPlan.groupId\" ></label></div>\r\n          <div class=\"ui-g-1 label-css\"><label>客户群名称：</label></div>\r\n          <div class=\"ui-g-3 input-css\"><label><input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"groupMarketPlan.groupName\"></label></div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-1 ui-g-offset-2 label-css\"><label>营销方案名称：</label></div>\r\n          <div class=\"ui-g-3 input-css\"><label><input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"groupMarketPlan.marketPlanName\"></label></div>\r\n          <div class=\"ui-g-1 label-css\"><label>营销方案状态：</label></div>\r\n          <div class=\"ui-g-3 input-css\"><label><p-dropdown [options]=\"state\" [(ngModel)]=\"groupMarketPlan.state\" [style]=\"{'width':'290px'}\"></p-dropdown></label></div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-1 ui-g-offset-2 label-css\"><label>创建人：</label></div>\r\n          <div class=\"ui-g-3 input-css\"><label><p-dropdown [options]=\"creater\" [(ngModel)]=\"groupMarketPlan.creater\" [style]=\"{'width':'290px'}\"></p-dropdown></label></div>\r\n          <div class=\"ui-g-1 label-css\"><label>创建时间：</label></div>\r\n          <div class=\"ui-g-3 input-css\"><label><p-calendar [(ngModel)]=\"startDate\"  [showIcon]=\"true\"></p-calendar>至<p-calendar [(ngModel)]=\"endDate\" [showIcon]=\"true\"></p-calendar></label></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 search-btn\">\r\n      <button pButton type=\"button\" label=\"查询\" (click)=\"selGroupMarketPlan()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 table-css\">\r\n       <p-dataTable [emptyMessage]=\"tableMesg\" [value]=\"groupMarketPlan.planList\" scrollable=\"true\" scrollHeight=\"300px\">\r\n        <p-column header=\"序号\" [style]=\"{'text-align':'center'}\">\r\n          <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n            {{i+1}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"营销方案名称\"  [style]=\"{'text-align':'center'}\">\r\n          <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <span> {{groupMarketPlan.planList[ri].marketPlanName}}</span>\r\n          </ng-template>  \r\n        </p-column>\r\n        <p-column  header=\"营销方案状态\"  [style]=\"{'text-align':'center'}\">      \r\n          <ng-template  let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <span>{{groupMarketPlan.planList[ri].state}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"创建人\"  [style]=\"{'text-align':'center'}\">\r\n          <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <span> {{groupMarketPlan.planList[ri].creater}}</span>\r\n          </ng-template>  \r\n        </p-column>\r\n        <p-column header=\"创建日期\"  [style]=\"{'text-align':'center'}\">      \r\n          <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <span> {{groupMarketPlan.planList[ri].createDate}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column  header=\"生效日期\"  [style]=\"{'text-align':'center'}\">\r\n          <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <span> {{groupMarketPlan.planList[ri].startDate}}</span>\r\n          </ng-template>  \r\n        </p-column>\r\n        <p-column  header=\"失效日期\"  [style]=\"{'text-align':'center'}\">      \r\n          <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <span> {{groupMarketPlan.planList[ri].endDate}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"operation\" header=\"操作\" [style]=\"{'text-align':'center'}\">\r\n          <ng-template let-car=\"rowData\" pTemplate=\"body\">\r\n            <div class=\"table-button\">\r\n              <a [routerLink]=\"['/pages/tzb/custom/custom-group/market-scheme']\">查看</a>\r\n            </div>\r\n          </ng-template>\r\n        </p-column>\r\n      </p-dataTable>\r\n      <p-paginator [rows]=\"groupMarketPlan.pageSize\" [totalRecords]=\"groupMarketPlan.totalNum\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-search/market-scheme-search.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-search/market-scheme-search.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basis-group .form-group .label-css {\n  text-align: left; }\n\n.basis-group .form-group .input-css {\n  text-align: left; }\n\n.basis-group .btn-submit {\n  text-align: center; }\n\n.basis-group .search-btn {\n  text-align: center; }\n\n.basis-group .btn-batch-import {\n  text-align: right;\n  text-decoration: underline; }\n\n.basis-group .explain-css {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.basis-group .detail-css {\n  color: red; }\n\n.basis-group .table-css {\n  padding-top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvbWFya2V0LXNjaGVtZS9tYXJrZXQtc2NoZW1lLXNlYXJjaC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1ncm91cFxcbWFya2V0LXNjaGVtZVxcbWFya2V0LXNjaGVtZS1zZWFyY2hcXG1hcmtldC1zY2hlbWUtc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1ksZ0JBQWdCLEVBQUE7O0FBSDVCO0VBTVksZ0JBQWdCLEVBQUE7O0FBTjVCO0VBVVEsa0JBQWtCLEVBQUE7O0FBVjFCO0VBYVEsa0JBQWtCLEVBQUE7O0FBYjFCO0VBZ0JRLGlCQUFpQjtFQUNqQiwwQkFBMEIsRUFBQTs7QUFqQmxDO0VBb0JRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBdEIvQjtFQXlCUSxVQUFVLEVBQUE7O0FBekJsQjtFQTRCUSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWdyb3VwL21hcmtldC1zY2hlbWUvbWFya2V0LXNjaGVtZS1zZWFyY2gvbWFya2V0LXNjaGVtZS1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaXMtZ3JvdXAge1xyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgIC5sYWJlbC1jc3Mge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5wdXQtY3NzIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuLXN1Ym1pdCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1idG4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5idG4tYmF0Y2gtaW1wb3J0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICAgIC5leHBsYWluLWNzcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRldGFpbC1jc3Mge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgICAudGFibGUtY3NzIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-search/market-scheme-search.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-search/market-scheme-search.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: MarketSchemeSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketSchemeSearchComponent", function() { return MarketSchemeSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/common/http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MarketSchemeSearchComponent = /** @class */ (function () {
    function MarketSchemeSearchComponent(httpService, commfunc, routerInfo, CommonHttpService) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.routerInfo = routerInfo;
        this.CommonHttpService = CommonHttpService;
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"];
        this.customGroup = "XXX客户群";
        this.marketSchemeSearch = "营销方案历史记录";
        this.groupMarketPlan = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__["GroupMarketPlanBean"](); // 客户群营销方案
        this.startDate = '';
        this.endDate = '';
        this.msgs = [];
        this.arr = [
            {
                ch: '营销方案名称',
                label: 'YXFAMC'
            },
            {
                ch: '营销方案状态',
                label: 'YXFAZT'
            },
            {
                ch: '创建人',
                label: 'CJR'
            },
            {
                ch: '创建日期',
                label: 'CJMC'
            },
            {
                ch: '生效日期',
                label: 'SHENGXRQ'
            },
            {
                ch: '失效日期',
                label: 'SHIXRQ'
            },
        ];
        this.cars = [
            {
                YXFAMC: 'YXFAMC',
                YXFAZT: 'YXFAZT',
                CJR: 'CJR',
                CJMC: 'CJMC',
                SHENGXRQ: 'SHENGXRQ',
                SHIXRQ: 'SHIXRQ',
            },
            {
                YXFAMC: 'YXFAMC',
                YXFAZT: 'YXFAZT',
                CJR: 'CJR',
                CJMC: 'CJMC',
                SHENGXRQ: 'SHENGXRQ',
                SHIXRQ: 'SHIXRQ',
            },
            {
                YXFAMC: 'YXFAMC',
                YXFAZT: 'YXFAZT',
                CJR: 'CJR',
                CJMC: 'CJMC',
                SHENGXRQ: 'SHENGXRQ',
                SHIXRQ: 'SHIXRQ',
            },
            {
                YXFAMC: 'YXFAMC',
                YXFAZT: 'YXFAZT',
                CJR: 'CJR',
                CJMC: 'CJMC',
                SHENGXRQ: 'SHENGXRQ',
                SHIXRQ: 'SHIXRQ',
            }
        ];
    }
    MarketSchemeSearchComponent.prototype.ngOnInit = function () {
        this.groupMarketPlan.creator = '1';
        this.groupMarketPlan.pageNum = 1;
        this.groupMarketPlan.pageSize = 10;
        this.groupMarketPlan.state = '1';
        this.groupId = this.routerInfo.snapshot.params['groupId'] || this.routerInfo.snapshot.params['id'];
        this.state = [];
        this.state.push({ label: '未审核', value: '1' }, { label: '已审核', value: '2' });
        this.creater = [];
        this.creater.push({ label: '张三', value: '1' }, { label: '李四', value: '2' });
        this.selectGroupMarketPlanCreator();
    };
    MarketSchemeSearchComponent.prototype.selGroupMarketPlan = function () {
        var _this = this;
        // 客户群营销方案查询
        // this.groupMarketPlan.marketPlanName = '1';
        // this.groupMarketPlan.groupId = 'admin1';
        // this.groupMarketPlan.groupName = '1';
        // this.groupMarketPlan.startDate = '';
        // this.groupMarketPlan.endDate = '';
        this.groupMarketPlan.startDate = this.startDate; //开始时间绑定
        this.groupMarketPlan.endDate = this.endDate; //结束时间绑定
        var param = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.groupMarketPlan);
        if (this.groupMarketPlan.groupId == null || this.groupMarketPlan.groupName == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '客户群名称不能为空！' });
            return;
        }
        // if (this.groupMarketPlan.groupName == null || this.groupMarketPlan.groupName == '') {
        //   this.msgs = [];
        //   this.msgs.push({ severity: 'error', summary: '提示', detail: '客户群名称不能为空！' });
        //   return;
        // }
        // if (this.groupMarketPlan.marketPlanName == null || this.groupMarketPlan.marketPlanName == '') {
        //   this.msgs = [];
        //   this.msgs.push({ severity: 'error', summary: '提示', detail: '营销方案名称不能为空！' });
        //   return;
        // }
        if (this.groupMarketPlan.startDate == null || this.groupMarketPlan.startDate == '') {
            param.startDate = '10001010'; //默认开始时间
        }
        else {
            param.startDate = this.commfunc.transDate(param.startDate); //选择开始时间
        }
        if (this.groupMarketPlan.endDate == null || this.groupMarketPlan.endDate == '') {
            param.endDate = '90001010'; //默认结束时间
        }
        else {
            param.endDate = this.commfunc.transDate(param.endDate); //选择结束时间
        }
        //  param = {
        //   groupId: this.groupMarketPlan.groupId,
        //   groupName: this.groupMarketPlan.groupName,
        //   marketPlanName: this.groupMarketPlan.marketPlanName,
        //   state: this.groupMarketPlan.state,      
        //   startDate: this.groupMarketPlan.startDate,
        //   endDate: this.groupMarketPlan.endDate,
        //   pageNum: this.groupMarketPlan.pageNum,
        //   pageSize: this.groupMarketPlan.pageSize,
        // }
        var obs = this.httpService.selectGroupMarketPlan(param);
        obs.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.groupMarketPlan.planList = data.planList;
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '调用服务失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.code }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    MarketSchemeSearchComponent.prototype.paginate = function (event) {
        // 分页
        this.groupMarketPlan.pageNum = event.page + 1;
        this.groupMarketPlan.pageSize = event.rows;
        this.selGroupMarketPlan(); //客户群营销方案查询
    };
    //人员查询
    MarketSchemeSearchComponent.prototype.selectGroupMarketPlanCreator = function () {
        var _this = this;
        var param = {
            groupId: this.groupId
        };
        this.httpService.selectGroupMarketPlanCreator(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.creater = [];
                data.infoList.forEach(function (item) {
                    _this.queryTellerById(item);
                });
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '调用服务失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.code }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //查询人员姓名
    MarketSchemeSearchComponent.prototype.queryTellerById = function (item) {
        var _this = this;
        var params = {
            tellerId: item.creator
        };
        var successFnc = function (data) {
            _this.creater.push({ label: data.tellerName, value: item.creator });
            _this.creater = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](_this.creater);
        };
        this.commfunc.interfaceComFnc(this.CommonHttpService.queryTellerById(params), successFnc, this.msgs);
    };
    MarketSchemeSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-market-scheme-search',
            template: __webpack_require__(/*! ./market-scheme-search.component.html */ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-search/market-scheme-search.component.html"),
            styles: [__webpack_require__(/*! ./market-scheme-search.component.scss */ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-search/market-scheme-search.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_7__["CommonHttpService"]])
    ], MarketSchemeSearchComponent);
    return MarketSchemeSearchComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 content\">\r\n  <!-- 头部 -->\r\n  <div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12 title\">\r\n      <!-- 一级标题 -->\r\n      <header-title [Info]=\"title\"></header-title>\r\n    </div>\r\n    <!-- 主体内容 -->\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-12\">\r\n        <!-- 二级标题 -->\r\n        <header-title [Info]=\"title1\"></header-title>\r\n      </div>\r\n      <div id=\"top\" class=\"ui-g-12\" style=\"height:100px;\"></div>\r\n\r\n      <!-- 基本情况 -->\r\n      <div class=\"ui-g-12\">\r\n        <!-- 制作人员 -->\r\n        <div class=\"ui-g-6\">\r\n          <div class=\"ui-g-3\">\r\n            <label>制作人员：</label>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <input type=\"text\" class=\"marginTop\" [(ngModel)]=\"groupMarketPlanInfoBean.creator\" pInputText disabled=\"true\">\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n          <div class=\"ui-g-3 ui-g-offset-5\">\r\n            <label>编制日期：</label>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <input type=\"text\" class=\"marginTop\" [(ngModel)]=\"groupMarketPlanInfoBean.createDate\" pInputText disabled=\"true\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- 水平分割 0-->\r\n      <div class=\"ui-g-12 paddingNone\">\r\n        <hr>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n          <div class=\"ui-g-3 \">\r\n            <label appValidation>营销方案名：</label>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <input type=\"text\" class=\"marginTop\" [(ngModel)]=\"groupMarketPlanInfoBean.marketPlanName\" pInputText [disabled]=\"editFlag\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- 水平分割 1-->\r\n      <div class=\"ui-g-12 paddingNone\">\r\n        <hr>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <!-- 基本情况 -->\r\n        <div class=\"ui-g-2 basicUi\">\r\n          <div class=\"ui-g-12\">\r\n            <label class=\"basicInfo\">基本情况</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-10\">\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-3 centerText\">\r\n              <label>客户群类型</label>\r\n            </div>\r\n            <div class=\"ui-g-9 centerText\">\r\n              <div class=\"ui-g-6 paddingNone\">\r\n                <p-radioButton name=\"groupname\" value=\"1\" [(ngModel)]=\"selectedValue\" [disabled]=\"editFlag\"></p-radioButton>\r\n                <span>行业客户群</span>\r\n              </div>\r\n              <div class=\"ui-g-6 paddingNone\">\r\n                <p-radioButton name=\"groupname\" value=\"2\" [(ngModel)]=\"selectedValue\" [disabled]=\"editFlag\"></p-radioButton>\r\n                <span>非行业客户群</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12\">\r\n            <textarea cols=\"180\" rows=\"10\" [(ngModel)]=\"groupMarketPlanInfoBean.baseInfo\" [disabled]=\"editFlag\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 水平分割 2-->\r\n      <div class=\"ui-g-12 paddingNone\">\r\n        <hr>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <!-- 群联系人 -->\r\n        <div class=\"ui-g-2 basicUi\">\r\n          <div class=\"ui-g-12\">\r\n            <label class=\"basicInfo\">群联系人</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-10 centerText\">\r\n          <div class=\"ui-g-12 centerText tab\">\r\n            <p-dataTable [value]=\"groupAdminInfoBean.roleList\" [emptyMessage]=\"tableMesg\">\r\n              <p-column header=\"序号\">\r\n                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                  {{i+1}}\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column field=\"groupZone\" header=\"客群区域\"></p-column>\r\n              <p-column field=\"userId\" header=\"联系人工号\"></p-column>\r\n              <p-column field=\"userName\" header=\"联系人姓名\"></p-column>\r\n            </p-dataTable>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 水平分割 3-->\r\n      <div class=\"ui-g-12 paddingNone\">\r\n        <hr>\r\n      </div>\r\n      <div class=\"ui-g-12 \">\r\n        <!-- 中间单位 -->\r\n        <div class=\"ui-g-2 basicUi\">\r\n          <div class=\"ui-g-12 \">\r\n            <label class=\"basicInfo\">中间单位</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-10\">\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-3\">\r\n              <label for=\"\">中间单位</label>\r\n            </div>\r\n            <div class=\"ui-g-9\">\r\n              <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.channelInfo\" [disabled]=\"editFlag\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-3\">\r\n              <label appValidation>关键人</label>\r\n            </div>\r\n            <div class=\"ui-g-9\">\r\n              <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.keymanInfo\" [disabled]=\"editFlag\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-3\">\r\n              <label for=\"\">管理关系及合作意向</label>\r\n            </div>\r\n            <div class=\"ui-g-9\">\r\n              <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.intentionInfo\" [disabled]=\"editFlag\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 水平分割 4-->\r\n      <div class=\"ui-g-12 paddingNone\">\r\n        <hr>\r\n      </div>\r\n      <div class=\"ui-g-12 \">\r\n        <!-- 客户细分 -->\r\n        <div class=\"ui-g-2 basicUi\">\r\n          <div class=\"ui-g-12  \">\r\n            <label class=\"basicInfo\">客户细分</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-10\">\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2\">\r\n              <label for=\"\" class=\"operationInfolabel\">生产经营性客户细分</label>\r\n            </div>\r\n            <div class=\"ui-g-10\">\r\n              <!-- <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.operationInfo\" [disabled]=\"editFlag\"></textarea> -->\r\n              <div style=\"width:100%;height:200px;overflow-x:auto;overflow-y:auto\">\r\n                <table>\r\n                  <tr>\r\n                    <th *ngFor=\"let itemL of dataList\" class=\"ead\">\r\n                      {{itemL.subdibisionName}}\r\n                    </th>\r\n                  </tr>\r\n                  <tr *ngFor=\"let itemH of dataList1;let i1 = index\">\r\n                    <td class=\"ead\">{{itemH.subdibisionName}}</td>\r\n                    <td *ngFor=\"let item of data;let i2 =index\">\r\n                      <input class=\"operationInfoinput\" type=\"text\" pInputText [placeholder]=\"tionInfo\" [disabled]=\"editFlag\" [(ngModel)]=\"paramList[i2][i1].valueType\">\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2\">\r\n              <label for=\"\" class=\"operationInfolabel\">非生产经营性客户细分</label>\r\n            </div>\r\n            <div class=\"ui-g-10\">\r\n              <!-- <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.unoperationInfo\" [disabled]=\"editFlag\"></textarea> -->\r\n              <div style=\"width:100%;height:200px;overflow-x:auto;overflow-y:auto\">\r\n                <table>\r\n                  <tr>\r\n                    <th *ngFor=\"let item1 of dataList2\" class=\"ead\">\r\n                      {{item1.subdibisionName}}\r\n                    </th>\r\n                  </tr>\r\n                  <tr *ngFor=\"let item2 of dataList3;let i11 = index\">\r\n                    <td class=\"ead\">{{item2.subdibisionName}}</td>\r\n                    <td *ngFor=\"let item of undata;let i22 =index\">\r\n                      <input class=\"operationInfoinput\" type=\"text\" pInputText [placeholder]=\"tionInfo\" [disabled]=\"editFlag\" [(ngModel)]=\"unparamList[i22][i11].valueType\">\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-3\">\r\n              <label appValidation>细分需求</label>\r\n            </div>\r\n            <div class=\"ui-g-9\">\r\n              <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.needInfo\" [disabled]=\"editFlag\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 水平分割 5-->\r\n      <div class=\"ui-g-12 paddingNone\">\r\n        <hr>\r\n      </div>\r\n      <div class=\"ui-g-12 tab\">\r\n        <!-- 主要同业竞争 -->\r\n        <div class=\"ui-g-2 basicUi\">\r\n          <div class=\"ui-g-12  \">\r\n            <label class=\"basicInfo\" appValidation>主要同业竞争</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-10 centerText \" *ngIf=\"editFlag\">\r\n          <p-dataTable [value]=\"groupMarketPlanInfoBean.bankList\" [emptyMessage]=\"tableMesg\">\r\n            <p-column field=\"name\" header=\"银行\" [style]=\"{'width':'20%'}\">\r\n              <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"groupMarketPlanInfoBean.bankList[i].bankName\" [disabled]=\"editFlag\">\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column header=\"优势产品和服务\">\r\n              <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"groupMarketPlanInfoBean.bankList[i].advantageDesc\" [disabled]=\"editFlag\">\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column header=\"我行竞争机会\">\r\n              <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"groupMarketPlanInfoBean.bankList[i].chanceDesc\" [disabled]=\"editFlag\">\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n        </div>\r\n        <div class=\"ui-g-10\" *ngIf=\"!editFlag\">\r\n          <div class=\"ui-g-12 rightText\">\r\n            <span (click)=\"addbankListArray()\" class=\"icoColor\">添加</span>\r\n          </div>\r\n          <div class=\"ui-g-12 centerText\">\r\n            <p-dataTable [value]=\"groupMarketPlanInfoBean.bankList\" [emptyMessage]=\"tableMesg\">\r\n              <p-column field=\"name\" header=\"银行\" [style]=\"{'width':'20%'}\">\r\n                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                  <input type=\"text\" pInputText [(ngModel)]=\"groupMarketPlanInfoBean.bankList[i].bankName\" [disabled]=\"editFlag\">\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"优势产品和服务\">\r\n                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                  <input type=\"text\" pInputText [(ngModel)]=\"groupMarketPlanInfoBean.bankList[i].advantageDesc\" [disabled]=\"editFlag\">\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"我行竞争机会\">\r\n                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                  <input type=\"text\" pInputText [(ngModel)]=\"groupMarketPlanInfoBean.bankList[i].chanceDesc\" [disabled]=\"editFlag\">\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"操作\" [style]=\"{'text-align':'center','width':'300px'}\">\r\n                <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <div class=\"table-button\">\r\n                    <span (click)=\"delbankListArray(i)\" class=\"tabelDeleteIco\">删除</span>\r\n                  </div>\r\n                </ng-template>\r\n              </p-column>\r\n            </p-dataTable>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 水平分割 6-->\r\n      <div class=\"ui-g-12 paddingNone\">\r\n        <hr>\r\n      </div>\r\n      <div class=\"ui-g-12 \">\r\n        <!-- 开发目标 -->\r\n        <div class=\"ui-g-2 basicUi\">\r\n          <div class=\"ui-g-12  \">\r\n            <label class=\"basicInfo\" appValidation>开发目标</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-10 centerText\">\r\n          <textarea cols=\"180\" rows=\"12\" [(ngModel)]=\"groupMarketPlanInfoBean.targetInfo\" [disabled]=\"editFlag\"></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 水平分割 7-->\r\n      <div class=\"ui-g-12 paddingNone\">\r\n        <hr>\r\n      </div>\r\n      <div class=\"ui-g-12 \">\r\n        <!-- 获客产品方案 -->\r\n        <div class=\"ui-g-2 basicUi\">\r\n          <div class=\"ui-g-12  \">\r\n            <label class=\"basicInfo\">获客产品方案</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-10\">\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-3\">\r\n              <label appValidation>主打产品</label>\r\n            </div>\r\n            <div class=\"ui-g-9\">\r\n              <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.mainProdInfo\" [disabled]=\"editFlag\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-3\">\r\n              <label for=\"\">交叉销售</label>\r\n            </div>\r\n            <div class=\"ui-g-9\">\r\n              <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.crossSaleInfo\" [disabled]=\"editFlag\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-3\">\r\n              <label appValidation>授信产品参考方案</label>\r\n            </div>\r\n            <div class=\"ui-g-9\">\r\n              <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.creditProdInfo\" [disabled]=\"editFlag\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-3\">\r\n              <label appValidation>授信风险点及规避方式</label>\r\n            </div>\r\n            <div class=\"ui-g-9\">\r\n              <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.riskInfo\" [disabled]=\"editFlag\"></textarea>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 水平分割 8-->\r\n      <div class=\"ui-g-12 paddingNone\">\r\n        <hr>\r\n      </div>\r\n      <div class=\"ui-g-12 textareaBorder tab\">\r\n        <!-- 获客营销活动方案 -->\r\n        <div class=\"ui-g-2 basicUi\">\r\n          <div class=\"ui-g-12  \">\r\n            <label class=\"basicInfo\" appValidation>获客营销活动方案</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-10 centerText\" *ngIf=\"editFlag\">\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-3\">\r\n              <label for=\"\">礼品标准</label>\r\n            </div>\r\n            <div class=\"ui-g-9\">\r\n              <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.giftInfo\" [disabled]=\"editFlag\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 centerText \">\r\n            <p-dataTable [value]=\"groupMarketPlanInfoBean.activityList\" [emptyMessage]=\"tableMesg\">\r\n              <p-column field=\"name\" header=\"活动名称\">\r\n                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                  <textarea cols=\"60\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.activityList[i].activityName\" [disabled]=\"editFlag\"></textarea>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"活动描述\">\r\n                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                  <textarea cols=\"60\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.activityList[i].activityDesc\" [disabled]=\"editFlag\"></textarea>\r\n                </ng-template>\r\n              </p-column>\r\n            </p-dataTable>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-10 \" *ngIf=\"!editFlag\">\r\n          <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-3\">\r\n              <label for=\"\">礼品标准</label>\r\n            </div>\r\n            <div class=\"ui-g-9\">\r\n              <textarea cols=\"100\" rows=\"3\" [(ngModel)]=\"groupMarketPlanInfoBean.giftInfo\" [disabled]=\"editFlag\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12 rightText\">\r\n            <span (click)=\"addactivityListArray()\" class=\"icoColor\">添加</span>\r\n          </div>\r\n          <div class=\"ui-g-12 centerText \">\r\n            <p-dataTable [value]=\"groupMarketPlanInfoBean.activityList\" [emptyMessage]=\"tableMesg\">\r\n              <p-column field=\"name\" header=\"活动名称\">\r\n                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                  <textarea cols=\"60\" rows=\"3\" [disabled]=\"editFlag\" [(ngModel)]=\"groupMarketPlanInfoBean.activityList[i].activityName\"></textarea>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"活动描述\">\r\n                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-col=\"rowData\">\r\n                  <textarea cols=\"60\" rows=\"3\" [disabled]=\"editFlag\" [(ngModel)]=\"groupMarketPlanInfoBean.activityList[i].activityDesc\"></textarea>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"操作\" [style]=\"{'text-align':'center','width':'300px'}\">\r\n                <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n                  <div class=\"table-button\">\r\n                    <span (click)=\"delactivityListArray(i)\" class=\"tabelDeleteIco\">删除</span>\r\n                  </div>\r\n                </ng-template>\r\n              </p-column>\r\n            </p-dataTable>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- 水平分割 9-->\r\n      <div class=\"ui-g-12 paddingNone\">\r\n        <hr>\r\n      </div>\r\n      <div class=\"ui-g-12 heightSet\">\r\n        <!-- 制作人员 -->\r\n        <div class=\"ui-g-6\">\r\n          <div class=\"ui-g-3\">\r\n            <label>创建人：</label>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <input type=\"text\" class=\"marginTop\" [(ngModel)]=\"groupMarketPlanInfoBean.creator\" pInputText disabled=\"true\">\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n          <div class=\"ui-g-3 ui-g-offset-5\">\r\n            <label>创建日期：</label>\r\n          </div>\r\n          <div class=\"ui-g-4\">\r\n            <!-- <p-calendar [(ngModel)]=\"createDate\" [disabled]=\"editFlag\"></p-calendar> -->\r\n            <input type=\"text\" class=\"marginTop\" [(ngModel)]=\"groupMarketPlanInfoBean.createDate\" pInputText disabled=\"true\">\r\n          </div>\r\n        </div>\r\n        <!-- 按钮组 -->\r\n        <div class=\"ui-g-12\" style=\"text-align:center;\">\r\n          <button class=\"searchBtn\" (click)=\"submit()\" *ngIf=\"normalFlag\">提交</button>\r\n          <button class=\"searchBtn\" (click)=\"editGroupMarketPlanInfo()\" *ngIf=\"editFlag && normalFlag\">编辑</button>\r\n          <button class=\"searchBtn\" (click)=\"saveGroupMarketPlanInfo()\" *ngIf=\"!editFlag && normalFlag\">保存</button>\r\n          <button class=\"searchBtn\" (click)=\"deleteGroupMarketPlanInfo()\" *ngIf=\"normalFlag\">删除</button>\r\n          <button class=\"resetBtn\" (click)=\"returnGroupView()\">返回视图</button>\r\n          <!-- <button pButton label=\"提交\" (click)=\"submit()\" *ngIf=\"normalFlag\"></button>\r\n          <button pButton label=\"编辑\" (click)=\"editGroupMarketPlanInfo()\" *ngIf=\"editFlag && normalFlag\"></button>\r\n          <button pButton label=\"保存\" (click)=\"saveGroupMarketPlanInfo()\" *ngIf=\"!editFlag && normalFlag\"></button>\r\n          <button pButton label=\"删除\" (click)=\"deleteGroupMarketPlanInfo()\" *ngIf=\"normalFlag\"></button>\r\n          <button pButton label=\"返回视图\" (click)=\"returnGroupView()\"></button> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\" baseZIndex=\"1\"></p-growl>\r\n\r\n<!-- 返回comfirm -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n  <p-footer>\r\n    <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n    <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n  </p-footer>\r\n</p-confirmDialog>\r\n\r\n<!-- 审批新增处理权限 -->\r\n<p-dialog *ngIf=\"aaaa\" header=\"提交给\" [(visible)]=\"aaaa\" modal=\"true\">\r\n  <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rightText {\n  text-align: right !important; }\n\n.centerText {\n  text-align: center !important; }\n\n.defaultText {\n  text-align: left !important; }\n\n.paddingNone {\n  padding: 0px !important; }\n\n.borderShow {\n  border: 1px solid #ccc; }\n\n.basicUi {\n  font-size: 16px !important; }\n\n@media screen and (min-width: 1571px) {\n    .basicUi {\n      letter-spacing: 5px !important; } }\n\n.basicUi .basicInfo {\n    display: inline-block !important;\n    text-align: center !important;\n    height: 200px !important;\n    width: 200px !important;\n    line-height: 200px !important;\n    font-weight: bold !important;\n    box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.3);\n    background-color: #0094D2 !important;\n    color: #fff !important;\n    border-radius: 2%; }\n\n@media screen and (max-width: 1571px) {\n      .basicUi .basicInfo {\n        height: 80px !important;\n        width: 80px !important;\n        line-height: 80px !important;\n        font-size: 12px !important; } }\n\n.basicUi .basicoperationInfo {\n    display: inline-block !important;\n    text-align: center !important;\n    height: 600px !important;\n    width: 200px !important;\n    line-height: 600px !important;\n    font-weight: bold !important;\n    box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.3);\n    background-color: #19b0c8 !important;\n    color: #fff !important;\n    border-radius: 2%; }\n\n@media screen and (max-width: 1571px) {\n      .basicUi .basicoperationInfo {\n        height: 80px !important;\n        width: 80px !important;\n        line-height: 80px !important;\n        font-size: 12px !important; } }\n\n.operationInfolabel {\n  overflow: auto; }\n\n.operationInfolabel label {\n    background-color: #19b0c8 !important;\n    display: inline-block !important;\n    width: 100%;\n    height: 40px;\n    line-height: 40px;\n    color: #fff;\n    text-align: center;\n    box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.3);\n    border-radius: 2%; }\n\nlabel {\n  font-weight: bold; }\n\n.content {\n  overflow: auto;\n  padding-bottom: 100px; }\n\n.content label {\n    background-color: #0094D2 !important;\n    display: inline-block !important;\n    width: 100%;\n    height: 40px;\n    line-height: 40px;\n    color: #fff;\n    text-align: center;\n    box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.3);\n    border-radius: 2%; }\n\n.content .tab input {\n    border: none;\n    width: 100%; }\n\n.content .tab input:focus {\n    border: 1px solid #aaaaaa; }\n\n.content textarea {\n    width: 100%; }\n\n@media screen and (max-width: 1571px) {\n  * {\n    font-size: 12px !important; }\n    * span {\n      background-size: auto 100%; } }\n\n.marginTop {\n  margin-top: 10px; }\n\n.heightSet {\n  height: 300px;\n  padding-top: 40px; }\n\n.textareaBorder textarea {\n  border: none;\n  width: 100%; }\n\n.textareaBorder textarea:focus {\n  border: 1px solid #aaaaaa; }\n\n.boxShadow {\n  width: 90%;\n  margin: 20px 5% 0 5%; }\n\n.boxShadow:first-child {\n  margin-top: 0px; }\n\ntable {\n  width: 100% !important;\n  height: 100px !important;\n  text-align: center;\n  table-layout: fixed; }\n\n.ead {\n  background: #19b0c8; }\n\n.operationInfoinput {\n  min-width: 100% !important; }\n\n.searchBtn {\n  display: inline-block;\n  width: 75px;\n  height: 30px;\n  cursor: pointer;\n  background: #34cfe6;\n  color: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 15px;\n  margin-left: 15px;\n  outline: none; }\n\n@media screen and (max-width: 1280px) {\n    .searchBtn {\n      margin-left: 5px; } }\n\n.resetBtn {\n  background: white;\n  width: 75px;\n  height: 30px;\n  border-radius: 15px;\n  cursor: pointer;\n  border: 1px solid #e8e8e8;\n  color: #333;\n  margin-left: 15px;\n  outline: none; }\n\n@media screen and (max-width: 1280px) {\n    .resetBtn {\n      margin-left: 5px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvbWFya2V0LXNjaGVtZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1ncm91cFxcbWFya2V0LXNjaGVtZVxcbWFya2V0LXNjaGVtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDRCQUEyQixFQUFBOztBQUcvQjtFQUVJLDZCQUE0QixFQUFBOztBQUdoQztFQUVJLDJCQUEwQixFQUFBOztBQUc5QjtFQUVJLHVCQUFzQixFQUFBOztBQUcxQjtFQUVJLHNCQUFzQixFQUFBOztBQUcxQjtFQUtJLDBCQUF3QixFQUFBOztBQUh4QjtJQUZKO01BR1EsOEJBQTZCLEVBQUEsRUF5Q3BDOztBQTVDRDtJQVFRLGdDQUErQjtJQUMvQiw2QkFBNEI7SUFDNUIsd0JBQXVCO0lBQ3ZCLHVCQUFzQjtJQUN0Qiw2QkFBNEI7SUFDNUIsNEJBQTJCO0lBQzNCLDJDQUEyQztJQUMzQyxvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLGlCQUFpQixFQUFBOztBQUNqQjtNQWxCUjtRQW1CWSx1QkFBc0I7UUFDdEIsc0JBQXFCO1FBQ3JCLDRCQUEyQjtRQUMzQiwwQkFBeUIsRUFBQSxFQUVoQzs7QUF4Qkw7SUEyQlEsZ0NBQStCO0lBQy9CLDZCQUE0QjtJQUM1Qix3QkFBdUI7SUFDdkIsdUJBQXNCO0lBQ3RCLDZCQUE0QjtJQUM1Qiw0QkFBMkI7SUFDM0IsMkNBQTJDO0lBQzNDLG9DQUFvQztJQUNwQyxzQkFBcUI7SUFDckIsaUJBQWlCLEVBQUE7O0FBQ2pCO01BckNSO1FBc0NZLHVCQUFzQjtRQUN0QixzQkFBcUI7UUFDckIsNEJBQTJCO1FBQzNCLDBCQUF5QixFQUFBLEVBRWhDOztBQUVMO0VBQ0ksY0FBYyxFQUFBOztBQURsQjtJQUdRLG9DQUFvQztJQUNwQyxnQ0FBK0I7SUFDL0IsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVTtJQUNWLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MsaUJBQWlCLEVBQUE7O0FBR3pCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQixFQUFBOztBQUZ6QjtJQUlRLG9DQUFvQztJQUNwQyxnQ0FBK0I7SUFDL0IsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MsaUJBQWlCLEVBQUE7O0FBWnpCO0lBZ0JZLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBakJ2QjtJQW9CWSx5QkFBeUIsRUFBQTs7QUFwQnJDO0lBd0JRLFdBQVUsRUFBQTs7QUFNZDtFQURKO0lBRVEsMEJBQXlCLEVBQUE7SUFGakM7TUFJWSwwQkFBMEIsRUFBQSxFQUM3Qjs7QUFJVDtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHckI7RUFFUSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUhuQjtFQU1RLHlCQUF5QixFQUFBOztBQUdqQztFQUVJLFVBQVM7RUFDVCxvQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxlQUFjLEVBQUE7O0FBRWxCO0VBQ0ksc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksMEJBQTBCLEVBQUE7O0FBRTlCO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUNiO0lBWEo7TUFZUSxnQkFBZ0IsRUFBQSxFQUV2Qjs7QUFDRDtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUNiO0lBVko7TUFXUSxnQkFBZ0IsRUFBQSxFQUV2QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWdyb3VwL21hcmtldC1zY2hlbWUvbWFya2V0LXNjaGVtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodFRleHQge1xyXG4gICAgLy8g5Y+z5a+56b2QXHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZW50ZXJUZXh0IHtcclxuICAgIC8vIOawtOW5s+WxheS4rVxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRlZmF1bHRUZXh0IHtcclxuICAgIC8vIOm7mOiupOW3puWvuem9kFxyXG4gICAgdGV4dC1hbGlnbjogbGVmdCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWRkaW5nTm9uZSB7XHJcbiAgICAvLyDmtojpmaRwYWRkaW5nXHJcbiAgICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyU2hvdyB7XHJcbiAgICAvLyDmmL7npLrovrnmoYZcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi5iYXNpY1VpIHtcclxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTcxcHgpIHtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGZvbnQtc2l6ZToxNnB4IWltcG9ydGFudDtcclxuICAgIC5iYXNpY0luZm8ge1xyXG4gICAgICAgIC8vIOW3pmxhYmVsXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwMHB4IWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogLTJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NEQyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyJTtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTcxcHgpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogODBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJhc2ljb3BlcmF0aW9uSW5mbyB7XHJcbiAgICAgICAgLy8g5bembGFiZWxcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2shaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA2MDBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4IWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNjAwcHghaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiAtMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzggIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU3MXB4KSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHghaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ub3BlcmF0aW9uSW5mb2xhYmVse1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjOCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC0ycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMiU7ICAgICAgICBcclxuICAgIH1cclxufVxyXG5sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTREMiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3gtc2hhZG93OiAtMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gICAgfVxyXG4gICAgLnRhYiB7XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWFhYWE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuKiB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTcxcHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXJnaW5Ub3Age1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmhlaWdodFNldCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi50ZXh0YXJlYUJvcmRlciB7XHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWFhYWE7XHJcbiAgICB9XHJcbn1cclxuLmJveFNoYWRvdyB7XHJcbiAgICAvLyBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICBtYXJnaW46MjBweCA1JSAwIDUlO1xyXG59XHJcbi5ib3hTaGFkb3c6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbn1cclxudGFibGV7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG4uZWFke1xyXG4gICAgYmFja2dyb3VuZDogIzE5YjBjODtcclxufVxyXG4ub3BlcmF0aW9uSW5mb2lucHV0e1xyXG4gICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaEJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICMzNGNmZTY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG59XHJcbi5yZXNldEJ0bntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MarketSchemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketSchemeComponent", function() { return MarketSchemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bean_selectGroupAdminInfo_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bean/selectGroupAdminInfo.bean */ "./src/app/pages/tzb/custom/custom-group/market-scheme/bean/selectGroupAdminInfo.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MarketSchemeComponent = /** @class */ (function () {
    function MarketSchemeComponent(httpService, routerInfo, router, confirmationService, commonFunc, fb, commfunc) {
        this.httpService = httpService;
        this.routerInfo = routerInfo;
        this.router = router;
        this.confirmationService = confirmationService;
        this.commonFunc = commonFunc;
        this.fb = fb;
        this.commfunc = commfunc;
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["tableMessage"];
        // 标题
        this.title = 'xxx客户群';
        this.title1 = '营销方案详情页面';
        // 中间量
        this.groupName = '';
        this.groupId = '';
        //  groupOwnerflag: any = 1;
        // 全局可编辑状态
        this.editFlag = true;
        // 隐藏修改删除提交
        this.normalFlag = true;
        // bean
        this.groupMarketPlanInfoBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_3__["GroupMarketPlanInfoBean"](); //客户群营销方案详情
        this.groupAdminInfoBean = new _bean_selectGroupAdminInfo_bean__WEBPACK_IMPORTED_MODULE_6__["GroupAdminInfoBean"](); //客户群管理人员查询
        // 群联系人列表
        this.customGroupContacts = []; //联系人列表中间量
        // 中间单位
        this.channelInfoArr = []; //中间单位
        // 客户细分
        this.customDetailArr = []; //客户细分
        // 获客产品方案
        this.customProductArr = []; //获客产品方案
        //获客活动List
        this.customMarketPlanArr = []; //获客活动List
        // 礼品标准列表中间量
        this.activityNameArr = []; //礼品标准列表中间量
        // 控件
        this.msgs = [];
        this.selectedValue = '1'; // 群类型回显中间量
        this.tionInfo = ''; //客户细分
        this.message = { msg: [] };
        this.loadingShow = { flag: false }; // loading框
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["tableMessage"]; //表格中无数据时显示的内容
        this.dataList = []; //生产行
        this.dataList1 = []; //生产列
        this.dataList2 = []; //非生产行
        this.dataList3 = []; //非生产列
        this.data = [];
        this.undata = [];
        this.paramList = new Array();
        this.unparamList = new Array();
        this.aaaa = false;
        this.userform = fb.group({
            pointerType: [''],
            bussType: [''],
        });
    }
    MarketSchemeComponent.prototype.ngOnInit = function () {
        this.queryClick();
        this.preSet(); //初始化
        // this.selectGroupMarketPlanInfo();//客户群营销方案详情查询
        this.selectGroupAdminInfo(); //客户群管理人员查询
    };
    //列表查询
    MarketSchemeComponent.prototype.queryClick = function () {
        var _this = this;
        var param = Object.assign({}, this.userform.value);
        param['bussType'] = '0';
        param['pointerType'] = '0';
        param['operationType'] = '3';
        this.httpService.subdibisionConfigMain(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList = data.resultList ? data.resultList : [];
                _this.data = _this.dataList.slice(1);
                _this.queryClick1();
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '查询成功！' }];
            }
            else {
                _this.dataList = [];
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    MarketSchemeComponent.prototype.queryClick1 = function () {
        var _this = this;
        var param = Object.assign({}, this.userform.value);
        param['bussType'] = '0';
        param['pointerType'] = '1';
        param['operationType'] = '3';
        this.httpService.subdibisionConfigMain(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList1 = data.resultList ? data.resultList : [];
                _this.data.forEach(function (element, i1) {
                    _this.paramList[i1] = [];
                    _this.dataList1.forEach(function (element1, i) {
                        var obj = { dimensionId: element.subdibisionId, indicatorsId: element1.subdibisionId, valueType: '', bussType: '0' };
                        _this.paramList[i1][i] = obj;
                    });
                });
                _this.queryClick2();
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '查询成功！' }];
            }
            else {
                _this.dataList1 = [];
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    MarketSchemeComponent.prototype.queryClick2 = function () {
        var _this = this;
        var param = Object.assign({}, this.userform.value);
        param['bussType'] = '1';
        param['pointerType'] = '0';
        param['operationType'] = '3';
        this.httpService.subdibisionConfigMain(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList2 = data.resultList ? data.resultList : [];
                _this.undata = _this.dataList2.slice(1);
                _this.queryClick3();
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '查询成功！' }];
            }
            else {
                _this.dataList2 = [];
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    MarketSchemeComponent.prototype.queryClick3 = function () {
        var _this = this;
        var param = Object.assign({}, this.userform.value);
        param['bussType'] = '1';
        param['pointerType'] = '1';
        param['operationType'] = '3';
        this.httpService.subdibisionConfigMain(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList3 = data.resultList ? data.resultList : [];
                _this.undata.forEach(function (element2, i11) {
                    _this.unparamList[i11] = [];
                    _this.dataList3.forEach(function (element3, i0) {
                        var zxc = { dimensionId: element2.subdibisionId, indicatorsId: element3.subdibisionId, valueType: '', bussType: '1' };
                        _this.unparamList[i11][i0] = zxc;
                    });
                });
                _this.selectGroupMarketPlanInfo();
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '查询成功！' }];
            }
            else {
                _this.dataList3 = [];
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    MarketSchemeComponent.prototype.preSet = function () {
        // 链接传参
        if (this.routerInfo.snapshot.params['id']) {
            this.groupId = this.routerInfo.snapshot.params['id'];
        }
        if (this.routerInfo.snapshot.params.groupId) {
            this.groupId = this.routerInfo.snapshot.params.groupId;
        }
        if (this.routerInfo.snapshot.params.col) {
            var colTemp = JSON.parse(this.routerInfo.snapshot.params.col);
            this.groupMarketPlanInfoBean.planId = colTemp.planId;
            this.groupMarketPlanInfoBean.statusId = colTemp.statusId;
            if (colTemp.statusId === '1') {
                this.normalFlag = false;
            }
        }
        if (this.routerInfo.snapshot.params.planId) {
            this.groupMarketPlanInfoBean.planId = this.routerInfo.snapshot.params.planId;
        }
        if (this.routerInfo.snapshot.params.statusId) {
            this.groupMarketPlanInfoBean.statusId = this.routerInfo.snapshot.params.statusId;
            if (this.groupMarketPlanInfoBean.statusId === '1') {
                this.normalFlag = false;
            }
        }
        if (this.routerInfo.snapshot.params.groupName) {
            this.groupName = this.routerInfo.snapshot.params.groupName;
        }
        document.getElementById('top').scrollIntoView(); //返回顶部 
        // if (this.routerInfo.snapshot.params.groupOwnerflag) {
        //   this.groupOwnerflag = this.routerInfo.snapshot.params.groupOwnerflag;
        // }
        // 中间量回值
        this.groupMarketPlanInfoBean.groupName = this.groupName;
        if (this.groupName) {
            this.title = this.groupName + "\u5BA2\u6237\u7FA4"; //一级标题          
        }
        this.groupMarketPlanInfoBean.groupId = this.groupId; //营销方案群号
        this.groupAdminInfoBean.groupId = this.groupId; //管理人员群号
        // 管理人员
        this.groupAdminInfoBean.roleType = '1'; //群联系人类型
        this.groupAdminInfoBean.statusId = '1'; //正常状态
        // 初始化
        // 群类型内容回显
        this.selectedValue = this.groupMarketPlanInfoBean.groupType; //群类型内容回显
    };
    MarketSchemeComponent.prototype.reAssignment = function () {
        //重赋值
        for (var i in this.groupMarketPlanInfoBean.linkmanList) {
            this.groupMarketPlanInfoBean.linkmanList[i] = {
                // 联系人重赋值
                serialNum: '',
                areaName: this.groupMarketPlanInfoBean.linkmanList[i].areaName,
                linkMan: this.groupMarketPlanInfoBean.linkmanList[i].linkMan,
                ContactsItem1: this.customGroupContacts[i].ContactsItem1,
                customItem1: this.customGroupContacts[i].customItem1,
            };
        }
        this.activityNameArr = [];
        for (var i in this.groupMarketPlanInfoBean.activityList) {
            // 获客活动List礼品标准
            this.activityNameArr.push(this.groupMarketPlanInfoBean.activityList[i].activityName);
        }
        this.customMarketPlanArr = [
            // 获客活动List
            {
                name: '礼品标准',
                context: this.activityNameArr.toString(),
            },
        ];
        for (var i in this.groupMarketPlanInfoBean.activityList) {
            // 获客活动List活动方案
            var n = parseInt(i) + 1;
            this.customMarketPlanArr.push({ name: "\u6D3B\u52A8\u65B9\u6848" + n, context: this.groupMarketPlanInfoBean.activityList[i].activityDesc }); // 获客活动List重赋值
        }
    };
    MarketSchemeComponent.prototype.selectGroupMarketPlanInfo = function () {
        var _this = this;
        // 客户群营销方案详情查询
        this.httpService.selectGroupMarketPlanInfo(this.groupMarketPlanInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.groupMarketPlanInfoBean = data;
                _this.groupMarketPlanInfoBean.bankList = data.bankList; //同业List
                _this.groupMarketPlanInfoBean.activityList = data.activityList; //活动List
                _this.selectedValue = _this.groupMarketPlanInfoBean.groupType; //群类型中间量赋值
                //生产经营性客户细分
                _this.data.forEach(function (element, i1) {
                    _this.paramList[i1] = [];
                    _this.dataList1.forEach(function (element1, i) {
                        var obj;
                        _this.groupMarketPlanInfoBean.operationInfoList.forEach(function (element3) {
                            if ((element3.dimensionId == element.subdibisionId) && (element3.indicatorsId == element1.subdibisionId)) {
                                obj = { dimensionId: element.subdibisionId, indicatorsId: element1.subdibisionId, valueType: element3.value, bussType: '0' };
                            }
                        });
                        if (obj) {
                            _this.paramList[i1][i] = obj;
                        }
                        else {
                            _this.paramList[i1][i] = { dimensionId: element.subdibisionId, indicatorsId: element1.subdibisionId, valueType: '', bussType: '0' };
                        }
                    });
                });
                //非生产经营性客户细分
                _this.undata.forEach(function (element, i1) {
                    _this.unparamList[i1] = [];
                    _this.dataList3.forEach(function (element1, i) {
                        var obj;
                        _this.groupMarketPlanInfoBean.unoperationInfoList.forEach(function (element3) {
                            if ((element3.dimensionId == element.subdibisionId) && (element3.indicatorsId == element1.subdibisionId)) {
                                obj = { dimensionId: element.subdibisionId, indicatorsId: element1.subdibisionId, valueType: element3.value, bussType: '1' };
                            }
                        });
                        if (obj) {
                            _this.unparamList[i1][i] = obj;
                        }
                        else {
                            _this.unparamList[i1][i] = { dimensionId: element.subdibisionId, indicatorsId: element1.subdibisionId, valueType: '', bussType: '1' };
                        }
                    });
                });
                // this.reAssignment();//重赋值
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询详情失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    MarketSchemeComponent.prototype.selectGroupAdminInfo = function () {
        var _this = this;
        // 客户群管理人员查询
        this.httpService.selectGroupAdminInfo(this.groupAdminInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.groupAdminInfoBean = data;
                _this.groupAdminInfoBean.roleList = data.roleList;
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    MarketSchemeComponent.prototype.returnGroupView = function () {
        var _this = this;
        // 返回客户群视图
        if (this.editFlag == false) {
            this.confirmationService.confirm({
                message: '编辑的内容未保存，确认返回吗?',
                accept: function () {
                    _this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view', { groupId: _this.groupId, groupName: _this.groupName }]);
                }
            });
        }
        else {
            this.confirmationService.confirm({
                message: '返回客户群视图？',
                accept: function () {
                    _this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view', { groupId: _this.groupId, groupName: _this.groupName }]);
                }
            });
        }
    };
    MarketSchemeComponent.prototype.submit = function () {
        var _this = this;
        // 提交
        // if (this.editFlag == false) {
        //   this.confirmationService.confirm({
        //     message: '编辑的内容未保存，确认提交吗?',
        //     accept: () => {
        //       this.addGroupMarketPlanInfo();
        //       this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view', { groupId: this.groupId, groupName: this.groupName }]);
        //     }
        //   });
        // }
        // else {
        var tempFlag1 = true;
        tempFlag1 = this.isNull(); //非空校验
        if (!tempFlag1) {
            return;
        }
        this.confirmationService.confirm({
            message: '是否提交并返回客户群视图？',
            accept: function () {
                _this.waitSelUserList = _this.commfunc.query('QXXBGLC', {});
                if (!_this.waitSelUserList.erro) {
                    _this.outVal = _this.waitSelUserList.waitSelUserList;
                    _this.aaaa = _this.waitSelUserList.display;
                    var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                    var a = commonHeader.extParam.specifyNextOpers;
                    if (_this.aaaa == true && (a == undefined || a == '' || a == null)) {
                        _this.aaaa = true;
                    }
                    else {
                        _this.addGroupMarketPlanInfo(3);
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: _this.waitSelUserList.erro });
                }
            }
        });
        // }
    };
    MarketSchemeComponent.prototype.outDisplayCall = function (event) {
        this.aaaa = event;
    };
    MarketSchemeComponent.prototype.outValueCall = function (event) {
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.addGroupMarketPlanInfo(3);
    };
    MarketSchemeComponent.prototype.addGroupMarketPlanInfo = function (i) {
        var _this = this;
        this.editFlag = true;
        this.groupMarketPlanInfoBean.operationInfoList = [];
        this.groupMarketPlanInfoBean.unoperationInfoList = [];
        this.paramList.forEach(function (element, i1) {
            var obj = _this.paramList[i1];
            obj.forEach(function (i) {
                var str = { dimensionId: i.dimensionId, indicatorsId: i.indicatorsId, value: i.valueType, bussType: '0' };
                _this.groupMarketPlanInfoBean.operationInfoList.push(str);
            });
        });
        this.unparamList.forEach(function (c, e) {
            var qwe = _this.unparamList[e];
            qwe.forEach(function (w) {
                var asd = { dimensionId: w.dimensionId, indicatorsId: w.indicatorsId, value: w.valueType, bussType: '1' };
                _this.groupMarketPlanInfoBean.unoperationInfoList.push(asd);
            });
        });
        this.groupMarketPlanInfoBean.groupType = this.selectedValue; //群类型中间量虫赋值
        this.groupMarketPlanInfoBean.statusId = i;
        this.httpService.addGroupMarketPlanInfo(this.groupMarketPlanInfoBean).subscribe(function (data) {
            var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
            if (s.extParam.specifyNextOpers) {
                delete s.extParam.specifyNextOpers;
                var commonHeader = s;
                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
            }
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                if (i == 3) {
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: '提交成功!' }];
                }
                else if (i == 2) {
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: '保存成功!' }];
                }
                window.setTimeout(function () {
                    _this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view', { groupId: _this.groupId, groupName: _this.groupName }]);
                }, 500);
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '提交失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    MarketSchemeComponent.prototype.deleteGroupMarketPlanInfo = function () {
        var _this = this;
        // 删除
        this.confirmationService.confirm({
            message: '是否删除并返回客户群视图？',
            accept: function () {
                _this.groupMarketPlanInfoBean.statusId = '1'; //删除-状态默认
                _this.httpService.deleteGroupMarketPlanInfo(_this.groupMarketPlanInfoBean).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: '删除成功!' }];
                        _this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view', { groupId: _this.groupId, groupName: _this.groupName }]);
                    }
                    else {
                        _this.msgs = [];
                        data.returnCode.code ? data.returnCode.code : '删除失败！';
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
                });
            }
        });
    };
    MarketSchemeComponent.prototype.editGroupMarketPlanInfo = function () {
        // 编辑触发
        this.editFlag = false;
        // if (!this.groupMarketPlanInfoBean.bankList || this.groupMarketPlanInfoBean.bankList.length == 0) {
        //   this.bankListPre();//同业预初始
        //   this.reAssignment();//重赋值
        // }
        // if (!this.groupMarketPlanInfoBean.activityList || this.groupMarketPlanInfoBean.activityList.length == 0) {
        //   this.activityListPre();//活动预初始
        //   this.reAssignment();//重赋值
        // }
    };
    MarketSchemeComponent.prototype.saveGroupMarketPlanInfo = function () {
        // 保存触发
        // let tempFlag1 = true;
        // tempFlag1 = this.isNull();//非空校验
        // if (!tempFlag1) {
        //   return;
        // }
        this.editFlag = true;
        this.addGroupMarketPlanInfo(2);
    };
    MarketSchemeComponent.prototype.addbankListArray = function () {
        //同业加行
        if (this.groupMarketPlanInfoBean.bankList) {
            // 同业
            for (var i in this.groupMarketPlanInfoBean.bankList) {
                if (this.groupMarketPlanInfoBean.bankList[i].bankName == '' || this.groupMarketPlanInfoBean.bankList[i].advantageDesc == '' || this.groupMarketPlanInfoBean.bankList[i].chanceDesc == '') {
                    this.msgs = [];
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '请逐条增添，前一条数据不能填空！' }];
                    return;
                }
            }
        }
        var tempArr1 = [];
        var tempArr2 = {};
        tempArr1 = this.groupMarketPlanInfoBean.bankList;
        // 序号未定
        for (var n in tempArr1) {
            tempArr2 = {
                serialNum: '',
                bankName: '',
                advantageDesc: '',
                chanceDesc: '',
            };
        }
        tempArr1.push(tempArr2);
        this.groupMarketPlanInfoBean.bankList = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](tempArr1);
    };
    MarketSchemeComponent.prototype.delbankListArray = function (i) {
        //同业减行
        this.groupMarketPlanInfoBean.bankList.splice(i, 1);
        var tmpArr = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.groupMarketPlanInfoBean.bankList);
        this.groupMarketPlanInfoBean.bankList = tmpArr;
    };
    MarketSchemeComponent.prototype.addactivityListArray = function () {
        //活动List加行
        if (this.groupMarketPlanInfoBean.activityList) {
            // 活动
            for (var i in this.groupMarketPlanInfoBean.activityList) {
                if (this.groupMarketPlanInfoBean.activityList[i].activityName == '' || this.groupMarketPlanInfoBean.activityList[i].activityDesc == '') {
                    this.msgs = [];
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '请逐条增添，前一条数据不能填空！' }];
                    return;
                }
            }
        }
        var tempArr1 = [];
        var tempArr2 = {};
        tempArr1 = this.groupMarketPlanInfoBean.activityList;
        // 序号未定
        for (var n in tempArr1) {
            tempArr2 = {
                serialNum: '',
                activityName: '',
                activityDesc: '',
            };
        }
        tempArr1.push(tempArr2);
        this.groupMarketPlanInfoBean.activityList = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](tempArr1);
    };
    MarketSchemeComponent.prototype.delactivityListArray = function (i) {
        //活动List减行
        this.groupMarketPlanInfoBean.activityList.splice(i, 1);
        var tmpArr = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](this.groupMarketPlanInfoBean.activityList);
        this.groupMarketPlanInfoBean.activityList = tmpArr;
    };
    // 其他
    // 非空校验
    MarketSchemeComponent.prototype.isNull = function () {
        if (!this.groupMarketPlanInfoBean.marketPlanName || this.groupMarketPlanInfoBean.marketPlanName.search(/^\S+$/)) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '营销方案名不能为空' }];
            return false;
        }
        if (!this.groupMarketPlanInfoBean.keymanInfo) {
            // 关键人
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '关键人不能填空！' }];
            return false;
        }
        if (!this.groupMarketPlanInfoBean.needInfo) {
            // 细分需求
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '细分需求不能填空！' }];
            return false;
        }
        if (this.groupMarketPlanInfoBean.bankList) {
            // 同业
            if (this.groupMarketPlanInfoBean.bankList.length === 0) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '同业列表不能为空，请至少填写一条记录！' }];
                return false;
            }
            for (var i in this.groupMarketPlanInfoBean.bankList) {
                if (this.groupMarketPlanInfoBean.bankList[i].bankName == '' || this.groupMarketPlanInfoBean.bankList[i].advantageDesc == '' || this.groupMarketPlanInfoBean.bankList[i].chanceDesc == '') {
                    this.msgs = [];
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '同业列表不能填空，请填写完整或删除空行！' }];
                    return false;
                }
            }
        }
        if (!this.groupMarketPlanInfoBean.targetInfo) {
            // 开发目标
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '开发目标不能填空！' }];
            return false;
        }
        if (!this.groupMarketPlanInfoBean.mainProdInfo) {
            // 主打产品
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '主打产品不能填空！' }];
            return false;
        }
        if (!this.groupMarketPlanInfoBean.creditProdInfo) {
            // 授信产品参考方案
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '授信产品参考方案不能填空！' }];
            return false;
        }
        if (!this.groupMarketPlanInfoBean.riskInfo) {
            // 授信风险点及规避方式
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '授信风险点及规避方式不能填空！' }];
            return false;
        }
        if (!this.groupMarketPlanInfoBean.giftInfo) {
            // 礼品标准
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '礼品标准不能填空！' }];
            return false;
        }
        if (this.groupMarketPlanInfoBean.activityList) {
            // 活动
            if (this.groupMarketPlanInfoBean.activityList.length === 0) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '活动列表不能为空，请至少填写一条记录！' }];
                return false;
            }
            for (var _i = 0, _a = this.groupMarketPlanInfoBean.activityList; _i < _a.length; _i++) {
                var activity = _a[_i];
                if (!activity.activityName || !activity.activityDesc) {
                    this.msgs = [];
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '活动列表不能填空，请填写完整或删除空行！' }];
                    return false;
                }
            }
        }
        return true;
    };
    MarketSchemeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-market-scheme',
            template: __webpack_require__(/*! ./market-scheme.component.html */ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme.component.html"),
            styles: [__webpack_require__(/*! ./market-scheme.component.scss */ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]],
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_9__["Customtools"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_10__["Commfunc"]])
    ], MarketSchemeComponent);
    return MarketSchemeComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme.module.ts ***!
  \*************************************************************************************/
/*! exports provided: MarketSchemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketSchemeModule", function() { return MarketSchemeModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _market_scheme_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./market-scheme.routing */ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme.routing.ts");
/* harmony import */ var _market_scheme_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./market-scheme.component */ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme.component.ts");
/* harmony import */ var _market_scheme_search_market_scheme_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./market-scheme-search/market-scheme-search.component */ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme-search/market-scheme-search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//客户群组
var MarketSchemeModule = /** @class */ (function () {
    function MarketSchemeModule() {
    }
    MarketSchemeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _market_scheme_routing__WEBPACK_IMPORTED_MODULE_4__["MarketSchemeRouting"],
            ],
            declarations: [
                _market_scheme_component__WEBPACK_IMPORTED_MODULE_5__["MarketSchemeComponent"],
                _market_scheme_search_market_scheme_search_component__WEBPACK_IMPORTED_MODULE_6__["MarketSchemeSearchComponent"]
            ],
            exports: [],
            providers: []
        })
    ], MarketSchemeModule);
    return MarketSchemeModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme.routing.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme.routing.ts ***!
  \**************************************************************************************/
/*! exports provided: routes, MarketSchemeRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketSchemeRouting", function() { return MarketSchemeRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _market_scheme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./market-scheme.component */ "./src/app/pages/tzb/custom/custom-group/market-scheme/market-scheme.component.ts");


//客户群组
// import { CustomGroupDeleteComponent } from './custom-group-delete/custom-group-delete.component';//客户群-删除客户群
var routes = [
    {
        path: '', component: _market_scheme_component__WEBPACK_IMPORTED_MODULE_1__["MarketSchemeComponent"] //创建
    }
];
var MarketSchemeRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=market-scheme-market-scheme-module.js.map