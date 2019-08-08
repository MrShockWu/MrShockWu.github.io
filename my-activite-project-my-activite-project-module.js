(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-activite-project-my-activite-project-module"],{

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with-detail/deal-with-detail.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with-detail/deal-with-detail.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n  <div class=\"ui-g-12 module\">\r\n    <p-accordion [multiple]=\"true\" class=\"gundam-accordion\">\r\n      <p-accordionTab header=\"营销基本要素\" [(selected)]=\"trueOrFalse[0]\" class=\"clearfix\">\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销活动名称：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.campaignName}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销关键字：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.remark}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销活动时间：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.fromDate}}至{{totalMessage.thruDate}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销监控时间：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.marMonitoringTimeFrom}}至{{totalMessage.marMonitoringTimeTo}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销方案：\r\n            </div>\r\n            <div class=\"ui-g-6\" (click)=\"btnDetail()\" style=\"color:#19b0c8;  cursor: pointer;\">\r\n              {{totalMessage.marketingProgramName}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销活动状态：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.statusId |codeValuePie:status}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销活动说明：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.marketingContentDes}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <!-- <div *ngIf=\"fileList1.length>0\"> -->\r\n            <p-dataTable [value]=\"fileList1\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n              <p-column field=\"fileName\" header=\"附件名称\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n                  <span>{{col.fileName}}</span>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"操作\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)=\"down(col)\" class=\"tabelDownloadIco\" >下载</span>\r\n                </ng-template>\r\n              </p-column>\r\n            </p-dataTable>\r\n            <!-- </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销目标：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.marketingTargetDes}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-6 \">\r\n            <!-- <div *ngIf=\"fileList2.length>0\"> -->\r\n            <p-dataTable [value]=\"fileList2\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n              <p-column field=\"fileName\" header=\"附件名称\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n                  <span>{{col.fileName}}</span>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"操作\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)=\"down(col)\" class=\"tabelDownloadIco\" >下载</span>\r\n                </ng-template>\r\n              </p-column>\r\n            </p-dataTable>\r\n            <!-- </div> -->\r\n          </div>\r\n        </div>\r\n      </p-accordionTab>\r\n    </p-accordion>\r\n  </div>\r\n  <div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"'营销跟进任务'\"></header-title>\r\n      <div class=\"ui-g-12 rask\">\r\n        <div class=\"rask1\">营销跟进任务</div>\r\n        <div class=\"rask2\">\r\n          <span *ngIf=\"totalNum != 0\">本次营销活动下发给你的客户{{totalNum}}名，请及时按要求跟进</span>\r\n          <span *ngIf=\"totalNum == 0\">未有未跟进客户</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 list\">\r\n        <div>\r\n          <span>营销沟通清单</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 table\">\r\n        <p-dataTable [value]=\"items1\" [emptyMessage]=\"tabMesg\" scrollable=\"true\" scrollHeight=\"350px\" scrollWidth=\"'100%'\">\r\n          <p-column field=\"custNo\" header=\"客户号\">\r\n            <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              <a href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}\" target=\"_blank\">{{col.custNo}}</a>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"custName\" header=\"客户姓名\"></p-column>\r\n          <p-column field=\"gender\" header=\"性别\">\r\n            <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              {{col.gender|codeValuePie:sexOpt}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"property\" header=\"总资产\"></p-column>\r\n          <p-column field=\"liabilities\" header=\"总负债\"></p-column>\r\n          <p-column field=\"phone\" header=\"电话号码\"></p-column>\r\n          <p-column field=\"s\" header=\"其他提醒\"></p-column>\r\n          <p-column field=\"status\" header=\"跟进状态\">\r\n            <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              {{col.status|codeValuePie:followStatus}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"operation\" header=\"操作\" [sortable]=\"false\" [style]=\"{'width':'150px'}\">\r\n            <ng-template let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              <span (click)=\"followDetail(car)\"  *ngIf=\"car.status=='1'\" class=\"tabelDetailIco\">查看详情</span>\r\n              <!-- <button pButton type=\"button\" label=\"查看详情\" (click)=\"followDetail(car)\" *ngIf=\"car.status=='1'||car.status=='2'\"></button> -->\r\n            </ng-template>\r\n          </p-column>\r\n        </p-dataTable>\r\n        <p-paginator rows=\"{{dealWithBean.countNum}}\" totalRecords=\"{{totalNum}}\" (onPageChange)=\"paginate($event)\" [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n      </div>\r\n      <div class=\"ui-g-12\" style=\"text-align:center\">\r\n          <button pButton type=\"button\" label=\"返回\" (click)=\"returnBtn()\"></button>\r\n      </div>\r\n  </div>\r\n</div>\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf=\"display\" [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n      {{headerTitle}}\r\n    </p-header>\r\n    <app-follow-up-deal-detail [inValue]=\"inValue\" (outValue)=\"followUpDetailCall($event)\"></app-follow-up-deal-detail>\r\n  </p-dialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!--点击提交按钮时，会跳出还有多少个客户未-->\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with-detail/deal-with-detail.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with-detail/deal-with-detail.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-12 .text-right {\n  text-align: right; }\n\n.ui-g-12 .ui-g-4 {\n  text-align: right; }\n\n.ui-g-12 .marketing-basic {\n  display: flex;\n  width: 100%;\n  height: 34px;\n  background-color: #f2f2f2;\n  padding: 7px 0 7px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #D7D6D6;\n  margin-top: 20px; }\n\n.ui-g-12 .marketing-basic .line {\n    display: inline-block;\n    width: 5px;\n    height: 19px; }\n\n.ui-g-12 .marketing-basic .left {\n    margin-left: 10px; }\n\n.ui-g-12 .marketing-basic .right {\n    margin-left: 88%;\n    cursor: pointer; }\n\n.ui-g-12 .marketing-basic .active {\n    display: block; }\n\n.ui-g-12 .rask {\n  display: flex; }\n\n.ui-g-12 .rask .rask1 {\n    width: 10%;\n    height: 34px;\n    text-align: center;\n    line-height: 34px;\n    color: #f2f2f2;\n    background: #19b0c8; }\n\n.ui-g-12 .rask .rask2 {\n    height: 34px;\n    width: 90%;\n    background: #fff;\n    line-height: 34px;\n    padding-left: 5px; }\n\n.ui-g-12 .list div {\n  height: 34px;\n  width: 100%;\n  line-height: 34px;\n  background: #fff; }\n\n.ui-g-12 .list div span {\n    padding-left: 20px; }\n\n.ui-g-12 .btn {\n  text-align: center; }\n\n.ui-g-12 .table {\n  text-align: center; }\n\n.ui-g-12 a {\n  color: #19b0c8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvbXktYWN0aXZpdGUtcHJvamVjdC9kZWFsLXdpdGgtZGV0YWlsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcbWFya2V0aW5nXFxteS1hY3Rpdml0ZS1wcm9qZWN0XFxkZWFsLXdpdGgtZGV0YWlsXFxkZWFsLXdpdGgtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUJBQWlCLEVBQUE7O0FBRnpCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLGdCQUFnQixFQUFBOztBQWZ4QjtJQWlCWSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFlBQVksRUFBQTs7QUFuQnhCO0lBc0JZLGlCQUFpQixFQUFBOztBQXRCN0I7SUF5QlksZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTs7QUExQjNCO0lBNkJZLGNBQWMsRUFBQTs7QUE3QjFCO0VBaUNRLGFBQWEsRUFBQTs7QUFqQ3JCO0lBbUNZLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQWtCLEVBQUE7O0FBeEM5QjtJQTJDWSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7O0FBL0M3QjtFQW9EWSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUF2RDVCO0lBeURnQixrQkFBa0IsRUFBQTs7QUF6RGxDO0VBOERRLGtCQUFrQixFQUFBOztBQTlEMUI7RUFpRVEsa0JBQWtCLEVBQUE7O0FBakUxQjtFQW9FUSxjQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL21hcmtldGluZy9teS1hY3Rpdml0ZS1wcm9qZWN0L2RlYWwtd2l0aC1kZXRhaWwvZGVhbC13aXRoLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1nLTEyIHtcclxuICAgIC50ZXh0LXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC51aS1nLTR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAubWFya2V0aW5nLWJhc2ljIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAwIDdweCAyMHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEN0Q2RDY7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAubGluZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOXB4OyAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjODdjZWZhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGVmdCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogODglO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucmFzayB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAucmFzazEge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7IC8vIGJhY2tncm91bmQtY29sb3I6ICM4N2NlZmE7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiMxOWIwYzg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yYXNrMiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5saXN0IHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGFibGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGF7XHJcbiAgICAgICAgY29sb3I6ICMxOWIwYzggOyAgIFxyXG4gICAgICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with-detail/deal-with-detail.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with-detail/deal-with-detail.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: DealWithDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealWithDetail", function() { return DealWithDetail; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _deal_with_bean_deal_with_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../deal-with/bean/deal-with.bean */ "./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with/bean/deal-with.bean.ts");
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
 * 我的营销页面-查看详情按钮
 */








var DealWithDetail = /** @class */ (function () {
    function DealWithDetail(httpService, routeInfo, commfunc, router, confirmationService) {
        var _this = this;
        this.httpService = httpService;
        this.routeInfo = routeInfo;
        this.commfunc = commfunc;
        this.router = router;
        this.confirmationService = confirmationService;
        this.dealWithBean = new _deal_with_bean_deal_with_bean__WEBPACK_IMPORTED_MODULE_7__["DealWithBean"]();
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"]; //表格中无数据时显示的内容
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_CUS_DOWNLOAD"]; //下载
        this.title = "营销跟进任务";
        this.cars = [];
        this.display = false;
        this.items = [];
        this.items1 = [];
        this.updateValue = [];
        this.msgs = [];
        // followUpDeatilDisplay: boolean = false;
        this.marketingCampaignName = '';
        this.workId = '';
        this.fileList1 = [];
        this.fileList2 = [];
        this.totalMessage = [];
        this.prdAndPromRelList = [];
        this.status = [];
        this.sexOpt = [];
        this.followStatus = [];
        this.trueOrFalse = new Array(1); //折叠面板收起、展开
        this.productList = [
            {
                productId: '',
                productName: '',
            }
        ];
        this.codeValues(); //调用方法，获取全部码值
        this.status = this.code['MarketingStatus'];
        this.sexOpt = this.code["SexOpt"]; //性别
        this.followStatus = this.code['FollowUpStatus']; //跟进状态
        this.marketingCampaignId = this.routeInfo.snapshot.params['marketingCampaignId'];
        var ob = this.httpService.queryMarketingCampaignById({ marketingCampaignId: this.marketingCampaignId });
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.totalMessage = data;
                _this.fileList1 = data.marketingContentFileList; //营销活动说明
                _this.fileList2 = data.marketingTargetFileList; //营销目标
                _this.marketingProgramId = data.marketingProgramId;
                if (_this.totalMessage.channelList) {
                    for (var i = 0; i < _this.totalMessage.channelList.length; i++) {
                        _this.channelReleaseMsg = _this.totalMessage.channelList[i].channelReleaseMsg;
                    }
                }
                if (data.prdAndPromRelList) {
                    _this.prdAndPromRelList = data.prdAndPromRelList || []; //促销手段和关联产品
                    _this.prdAndPromRelList.forEach(function (element, i) {
                        var arr = [];
                        if (element.productList.length > 0) {
                            for (var _i = 0, _a = element.productList; _i < _a.length; _i++) {
                                var item = _a[_i];
                                var array = {};
                                array['productId'] = item.productId,
                                    array['productName'] = item.productName,
                                    arr.push(array);
                            }
                            _this.productList = arr;
                        }
                    });
                }
                _this.paramFollow = {
                    channelReleaseMsg: _this.channelReleaseMsg,
                    productList: _this.productList,
                };
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示详细', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示详细', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示详细', detail: '调用服务失败' });
        });
    }
    //初始化
    DealWithDetail.prototype.ngOnInit = function () {
        this.commfunc.clearSession('flagIndex');
        // this.marketingCampaignId = this.routeInfo.snapshot.params['marketingCampaignId'];
        this.workId = this.routeInfo.snapshot.params['workId'];
        this.marketingCampaignName = this.routeInfo.snapshot.params['marketingCampaignName'];
        this.dealWithBean.marketingCampaignId = this.marketingCampaignId;
        this.dealWithBean.workId = this.workId;
        this.dealWithBean.countNum = 10;
        this.dealWithBean.pageNum = 1;
        this.queryClick();
    };
    //码值
    DealWithDetail.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //跟进客户列表查询
    DealWithDetail.prototype.queryClick = function () {
        var _this = this;
        var ob = this.httpService.queryMarketingCampaignCustList(this.dealWithBean);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.items1 = data.marketingTargetList;
                _this.totalNum = data.totalNum;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示跟进', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示跟进', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示跟进', detail: '调用服务失败' });
        });
    };
    //查看
    DealWithDetail.prototype.followDetail = function (car) {
        this.headerTitle = "查看详情";
        this.inValue = { list: car, workId: this.dealWithBean.workId, marketingCampaignId: this.marketingCampaignId, paramFollow: this.paramFollow, marketingCampaignName: this.marketingCampaignName, marketingContentFileList: this.fileList1 };
        this.display = true;
    };
    //返回的值
    DealWithDetail.prototype.followUpDetailCall = function (param) {
        this.display = false;
        this.queryClick();
    };
    //返回的值
    DealWithDetail.prototype.outValue = function (param) {
        this.display = param.display;
    };
    //分页
    DealWithDetail.prototype.paginate = function (event) {
        this.dealWithBean.countNum = event.rows * 1;
        var currentPage = event.page + 1;
        this.dealWithBean.pageNum = currentPage;
        this.queryClick();
    };
    //点击页面营销方案中的查看详情按钮跳转营销方案详情页面
    DealWithDetail.prototype.btnDetail = function () {
        this.router.navigate(['/pages/tzb/custom/marketing/marketing-project/marketing-program-detail', { marketingProgramId: this.marketingProgramId }]);
    };
    //下载按钮
    DealWithDetail.prototype.down = function (temp) {
        var name = temp.fileName;
        var path = temp.fileUrl;
        open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(name) + "&fileUrl=" + path);
    };
    //返回按钮
    DealWithDetail.prototype.returnBtn = function () {
        setTimeout(function () {
            window.history.go(-1);
        }, 500);
    };
    DealWithDetail.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    DealWithDetail = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deal-with-detail',
            template: __webpack_require__(/*! ./deal-with-detail.component.html */ "./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with-detail/deal-with-detail.component.html"),
            styles: [__webpack_require__(/*! ./deal-with-detail.component.scss */ "./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with-detail/deal-with-detail.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]])
    ], DealWithDetail);
    return DealWithDetail;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with/bean/deal-with.bean.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with/bean/deal-with.bean.ts ***!
  \*************************************************************************************************/
/*! exports provided: DealWithBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealWithBean", function() { return DealWithBean; });
var DealWithBean = /** @class */ (function () {
    function DealWithBean() {
    }
    return DealWithBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with/deal-with.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with/deal-with.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n\t<div class=\"ui-g-12 module\">\r\n\t\t<p-accordion [multiple]=\"true\" class=\"gundam-accordion\">\r\n\t\t\t<p-accordionTab header=\"营销基本要素\" [(selected)]=\"trueOrFalse[0]\" class=\"clearfix\">\r\n\t\t\t\t<div class=\"ui-g-12\">\r\n\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t\t\t\t营销活动名称：\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t\t{{totalMessage.campaignName}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t\t\t\t营销关键字：\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t\t{{totalMessage.remark}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-g-12\">\r\n\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t\t\t\t营销活动时间：\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t\t{{totalMessage.fromDate}}至{{totalMessage.thruDate}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t\t\t\t营销监控时间：\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t\t{{totalMessage.marMonitoringTimeFrom}}至{{totalMessage.marMonitoringTimeTo}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-g-12\">\r\n\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t\t\t\t营销方案：\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"ui-g-6\" (click)=\"btnDetail()\" style=\"color:#19b0c8;  cursor: pointer;\">\r\n\t\t\t\t\t\t\t{{totalMessage.marketingProgramName}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- <div class=\"ui-g-2\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button pButton type=\"button\" label=\"查看详情\" (click)=\"btnDetail()\"></button>\r\n\t\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t\t\t\t营销活动状态：\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t\t{{totalMessage.statusId |codeValuePie:status}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-g-12\">\r\n\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t\t\t\t营销活动说明：\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t\t{{totalMessage.marketingContentDes}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t<!-- <div *ngIf=\"fileList1.length>0\"> -->\r\n\t\t\t\t\t\t<p-dataTable [value]=\"fileList1\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n\t\t\t\t\t\t\t<p-column field=\"fileName\" header=\"附件名称\">\r\n\t\t\t\t\t\t\t\t<ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n\t\t\t\t\t\t\t\t\t<span>{{col.fileName}}</span>\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t</p-column>\r\n\t\t\t\t\t\t\t<p-column header=\"操作\">\r\n\t\t\t\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t\t\t\t<span (click)=\"down(col)\" class=\"tabelDownloadIco\">下载</span>\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t</p-column>\r\n\t\t\t\t\t\t</p-dataTable>\r\n\t\t\t\t\t\t<!-- </div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"ui-g-12\">\r\n\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t\t\t\t营销目标：\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t\t\t\t{{totalMessage.marketingTargetDes}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"ui-g-6 \">\r\n\t\t\t\t\t\t<!-- <div *ngIf=\"fileList2.length>0\"> -->\r\n\t\t\t\t\t\t<p-dataTable [value]=\"fileList2\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n\t\t\t\t\t\t\t<p-column field=\"fileName\" header=\"附件名称\">\r\n\t\t\t\t\t\t\t\t<ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n\t\t\t\t\t\t\t\t\t<span>{{col.fileName}}</span>\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t</p-column>\r\n\t\t\t\t\t\t\t<p-column header=\"操作\">\r\n\t\t\t\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t\t\t\t<span (click)=\"down(col)\" class=\"tabelDownloadIco\">下载</span>\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t</p-column>\r\n\t\t\t\t\t\t</p-dataTable>\r\n\t\t\t\t\t\t<!-- </div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</p-accordionTab>\r\n\t\t</p-accordion>\r\n\t</div>\r\n\r\n\t<div class=\"ui-g-12 module\">\r\n\t\t<header-title [Info]=\"'营销跟进任务'\"></header-title>\r\n\t\t<div class=\"ui-g-12 rask\">\r\n\r\n\t\t\t<div class=\"rask1 \">营销跟进任务</div>\r\n\t\t\t<div class=\"rask2\">\r\n\t\t\t\t<span *ngIf=\"totalNum != 0\">本次营销活动下发给你的客户\r\n\t\t\t\t\t<span style=\" color: #0094D2 \">{{totalNum}}</span>名，请及时按要求跟进</span>\r\n\t\t\t\t<span *ngIf=\"totalNum == 0\">未有未跟进客户</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12 list\">\r\n\t\t\t<div>\r\n\t\t\t\t<span>营销沟通清单</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12 table\">\r\n\t\t\t<p-dataTable [value]=\"items1\" [emptyMessage]=\"tabMesg\">\r\n\t\t\t\t<p-column field=\"custName\" header=\"客户姓名\"></p-column>\r\n\t\t\t\t<p-column field=\"custNo\" header=\"客户号\">\r\n\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t<a href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}\" target=\"_blank\">{{col.custNo}}</a>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</p-column>\r\n\t\t\t\t<p-column field=\"gender\" header=\"性别\">\r\n\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t{{col.gender|codeValuePie:sexOpt}}\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</p-column>\r\n\t\t\t\t<p-column field=\"property\" header=\"总资产\"></p-column>\r\n\t\t\t\t<p-column field=\"liabilities\" header=\"总负债\"></p-column>\r\n\t\t\t\t<p-column field=\"nextContactTime\" header=\"下次联络时间\"></p-column>\r\n\t\t\t\t<p-column field=\"status\" header=\"跟进状态\">\r\n\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t{{col.status|codeValuePie:followStatus}}\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</p-column>\r\n\t\t\t\t<p-column field=\"operation\" header=\"我要跟进\" [sortable]=\"false\">\r\n\t\t\t\t\t<ng-template let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t<span (click)=\"follow(car)\" *ngIf=\"car.status=='0'||car.status=='2'\" class=\"tabelDealIco\">我要跟进</span>\r\n\t\t\t\t\t\t<span (click)=\"followDetail(car)\" *ngIf=\"car.status=='1'\" class=\"tabelDetailIco\">查看详情</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</p-column>\r\n\t\t\t</p-dataTable>\r\n\t\t\t<p-paginator rows=\"{{dealWithBean.countNum}}\" totalRecords=\"{{totalNum}}\" (onPageChange)=\"paginate($event)\" [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12 btn\">\r\n\t\t\t<button pButton type=\"button\" label=\"返回\" (click)=\"returnBtn()\"></button>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</div>\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf=\"display\" [(visible)]=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n\t<p-header>\r\n\t\t{{headerTitle}}\r\n\t</p-header>\r\n\t<follow-up (outValue)=\"followUpCall($event)\" [inValue]=\"inValue\" *ngIf=\"showModel=='1'\"></follow-up>\r\n\t<app-follow-up-deal-detail [inValue]=\"inValue\" (outValue)=\"followUpDetailCall($event)\" *ngIf=\"showModel=='2'\"></app-follow-up-deal-detail>\r\n</p-dialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!--点击提交按钮时，会跳出还有多少个客户未-->\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with/deal-with.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with/deal-with.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-12 .text-right {\n  text-align: right; }\n\n.ui-g-12 .ui-g-4 {\n  text-align: right; }\n\n.ui-g-12 .marketing-basic {\n  display: flex;\n  width: 100%;\n  height: 34px;\n  background-color: #f2f2f2;\n  padding: 7px 0 7px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #D7D6D6;\n  margin-top: 20px; }\n\n.ui-g-12 .marketing-basic .line {\n    display: inline-block;\n    width: 5px;\n    height: 19px; }\n\n.ui-g-12 .marketing-basic .left {\n    margin-left: 10px; }\n\n.ui-g-12 .marketing-basic .right {\n    margin-left: 88%;\n    cursor: pointer; }\n\n.ui-g-12 .marketing-basic .active {\n    display: block; }\n\n.ui-g-12 .rask {\n  display: flex; }\n\n.ui-g-12 .rask .rask1 {\n    width: 10%;\n    height: 34px;\n    text-align: center;\n    line-height: 34px;\n    background-color: #d2f1ef;\n    background: #19b0c8; }\n\n.ui-g-12 .rask .rask2 {\n    height: 34px;\n    width: 90%;\n    background: #fff;\n    line-height: 34px;\n    padding-left: 5px; }\n\n.ui-g-12 .list div {\n  height: 34px;\n  width: 100%;\n  line-height: 34px;\n  background: #fff; }\n\n.ui-g-12 .list div span {\n    padding-left: 20px; }\n\n.ui-g-12 .btn {\n  text-align: center; }\n\n.ui-g-12 .table {\n  text-align: center; }\n\n.ui-g-12 a {\n  color: #19b0c8; }\n\n.name {\n  word-break: break-all; }\n\n:host/deep/ .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvbXktYWN0aXZpdGUtcHJvamVjdC9kZWFsLXdpdGgvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxtYXJrZXRpbmdcXG15LWFjdGl2aXRlLXByb2plY3RcXGRlYWwtd2l0aFxcZGVhbC13aXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUJBQWlCLEVBQUE7O0FBRnpCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLGdCQUFnQixFQUFBOztBQWZ4QjtJQWlCWSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFlBQVksRUFBQTs7QUFuQnhCO0lBc0JZLGlCQUFpQixFQUFBOztBQXRCN0I7SUF5QlksZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTs7QUExQjNCO0lBNkJZLGNBQWMsRUFBQTs7QUE3QjFCO0VBaUNRLGFBQWEsRUFBQTs7QUFqQ3JCO0lBbUNZLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsbUJBQW1CLEVBQUE7O0FBeEMvQjtJQTJDWSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7O0FBL0M3QjtFQW9EWSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUF2RDVCO0lBeURnQixrQkFBa0IsRUFBQTs7QUF6RGxDO0VBOERRLGtCQUFrQixFQUFBOztBQTlEMUI7RUFpRVEsa0JBQWtCLEVBQUE7O0FBakUxQjtFQXFFSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0kscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL21hcmtldGluZy9teS1hY3Rpdml0ZS1wcm9qZWN0L2RlYWwtd2l0aC9kZWFsLXdpdGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktZy0xMiB7XHJcbiAgICAudGV4dC1yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAudWktZy00e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLm1hcmtldGluZy1iYXNpYyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMCA3cHggMjBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDdENkQ2O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTlweDsgLy8gYmFja2dyb3VuZC1jb2xvcjogIzg3Y2VmYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDg4JTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJhc2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLnJhc2sxIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNHB4OyAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjODdjZWZhO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmMWVmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmFzazIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGlzdCB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGF7XHJcbiAgICBjb2xvcjogIzE5YjBjODsgIFxyXG4gICAgfVxyXG59XHJcbi5uYW1le1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50e1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with/deal-with.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with/deal-with.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DealWithComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealWithComponent", function() { return DealWithComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _bean_deal_with_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bean/deal-with.bean */ "./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with/bean/deal-with.bean.ts");
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
 * 点击我的营销页面中的我要跟进-处理的按钮
 */
var DealWithComponent = /** @class */ (function () {
    function DealWithComponent(httpService, routeInfo, commfunc, router, confirmationService) {
        var _this = this;
        this.httpService = httpService;
        this.routeInfo = routeInfo;
        this.commfunc = commfunc;
        this.router = router;
        this.confirmationService = confirmationService;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"]; //表格中无数据时显示的内容
        this.cars = [];
        this.display = false;
        this.dealWithBean = new _bean_deal_with_bean__WEBPACK_IMPORTED_MODULE_7__["DealWithBean"]();
        this.items = [];
        this.items1 = [];
        this.followUpDisplay = false;
        this.updateValue = [];
        this.msgs = [];
        this.marketingCampaignId = '';
        this.workId = '';
        // followUpDeatilDisplay: boolean = false;
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"]; //下载
        this.trueOrFalse = new Array(1); //折叠面板收起、展开
        this.totalMessage = [];
        this.fileList1 = [];
        this.fileList2 = [];
        this.prdAndPromRelList = []; //产品列表
        this.status = [];
        this.sexOpt = [];
        this.followStatus = [];
        this.productList = [
            {
                productId: '',
                productName: '',
            }
        ];
        this.codeValues(); //调用方法，获取全部码值
        this.status = this.code['MarketingStatus'];
        this.sexOpt = this.code["SexOpt"];
        this.followStatus = this.code['FollowUpStatus'];
        var param = this.routeInfo.snapshot.params['marketingCampaignId'];
        this.inValue_2 = this.routeInfo.snapshot.params;
        var ob = this.httpService.queryMarketingCampaignById({ marketingCampaignId: param });
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.totalMessage = data;
                _this.fileList1 = data.marketingContentFileList; //营销活动说明
                _this.fileList2 = data.marketingTargetFileList; //营销目标
                _this.marketingProgramId = data.marketingProgramId;
                if (_this.totalMessage.channelList) {
                    for (var i = 0; i < _this.totalMessage.channelList.length; i++) {
                        _this.channelReleaseMsg = _this.totalMessage.channelList[i].channelReleaseMsg;
                    }
                }
                if (data.prdAndPromRelList) {
                    _this.prdAndPromRelList = data.prdAndPromRelList || []; //促销手段和关联产品
                    _this.prdAndPromRelList.forEach(function (element, i) {
                        var arr = [];
                        if (element.productList.length > 0) {
                            for (var _i = 0, _a = element.productList; _i < _a.length; _i++) {
                                var item = _a[_i];
                                var array = {};
                                array['productId'] = item.productId,
                                    array['productName'] = item.productName,
                                    arr.push(array);
                            }
                            _this.productList = arr;
                        }
                    });
                }
                _this.paramFollow = {
                    channelReleaseMsg: _this.channelReleaseMsg,
                    productList: _this.productList,
                };
                console.log(_this.paramFollow);
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示详细', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示详细', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示详细', detail: '调用服务失败' });
        });
    }
    //初始化
    DealWithComponent.prototype.ngOnInit = function () {
        this.commfunc.clearSession('flagIndex');
        this.marketingCampaignId = this.routeInfo.snapshot.params['marketingCampaignId'];
        if (this.routeInfo.snapshot.params['workId']) {
            this.workId = this.routeInfo.snapshot.params['workId'];
        }
        else if (this.routeInfo.snapshot.params['workEffortId']) {
            this.workId = this.routeInfo.snapshot.params['workEffortId'];
        }
        this.marketingCampaignName = this.routeInfo.snapshot.params['marketingCampaignName'];
        this.dealWithBean.marketingCampaignId = this.marketingCampaignId;
        this.dealWithBean.workId = this.workId;
        this.dealWithBean.countNum = 10;
        this.dealWithBean.pageNum = 1;
        this.queryClick();
    };
    //码值
    DealWithComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //跟进客户列表查询
    DealWithComponent.prototype.queryClick = function () {
        var _this = this;
        var ob = this.httpService.queryMarketingCampaignCustList(this.dealWithBean);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.items1 = data.marketingTargetList;
                _this.totalNum = data.totalNum;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示跟进', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示跟进', detail: '调用服务失败' });
        });
    };
    //我要跟进
    DealWithComponent.prototype.follow = function (car) {
        this.headerTitle = "跟进处理";
        this.inValue = { custNo: car.custNo, custName: car.custName, workId: this.dealWithBean.workId, phone: car.phone, marketingCampaignId: this.marketingCampaignId, paramFollow: this.paramFollow, marketingCampaignName: this.marketingCampaignName, marketingContentFileList: this.fileList1 };
        this.display = true;
        this.showModel = '1';
    };
    //返回的值
    DealWithComponent.prototype.followUpCall = function (param) {
        this.display = false;
        this.dealWithBean.pageNum = 1;
        this.queryClick();
    };
    //查看详情
    DealWithComponent.prototype.followDetail = function (car) {
        this.headerTitle = "查看详情";
        this.inValue = { list: car, workId: this.dealWithBean.workId, marketingCampaignId: this.marketingCampaignId, paramFollow: this.paramFollow, marketingCampaignName: this.marketingCampaignName, marketingContentFileList: this.fileList1 };
        this.display = true;
        this.showModel = '2';
    };
    //返回的值
    DealWithComponent.prototype.followUpDetailCall = function (param) {
        this.display = false;
        this.dealWithBean.pageNum = 1;
        this.queryClick();
    };
    //点击营销流转
    DealWithComponent.prototype.move = function () {
        this.router.navigate(['/pages/tzb/custom/marketing/my-activite-projec/rask-move', { marketingCampaignId: this.marketingCampaignId }]);
    };
    //提交按钮
    // sub() {
    // 	this.marketingCampaignId = this.routeInfo.snapshot.params['marketingCampaignId'];
    // 	this.workId = this.routeInfo.snapshot.params['workId'];
    // 	let ob = this.httpService.countNotFeedbackCust({ marketingCampaignId: this.marketingCampaignId, workId: this.workId });
    // 	ob.subscribe(data => {
    // 		if (data.returnCode.code == 'success') {
    // 			this.total = data.totalCount;
    // 		} else {
    // 			this.msgs = [];
    // 			this.msgs.push({ severity: 'error', summary: '提示跟进', detail: data.returnCode.message });
    // 		}
    // 		this.confirmationService.confirm({
    // 			message: '还有' + this.total + '未跟进' + ',' + '请及时跟进' + '。',
    // 			accept: () => {
    // 				this.httpService.stopMarketingCampaignWorkEffort({ marketingCampaignId: this.marketingCampaignId, workId: this.workId }).subscribe(data => {
    // 					if (data.returnCode.code == 'success') {
    // 					} else {
    // 						this.msgs = [];
    // 						this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
    // 					}
    // 				}, error => {
    // 					this.msgs = [];
    // 					this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
    // 				})
    // 			}
    // 		})
    // 	}, error => {
    // 		this.msgs = [];
    // 		this.msgs.push({ severity: 'error', summary: '提示跟进', detail: '调用服务失败' });
    // 	})
    // }
    //分页
    DealWithComponent.prototype.paginate = function (event) {
        this.dealWithBean.countNum = event.rows * 1;
        var currentPage = event.page + 1;
        this.dealWithBean.pageNum = currentPage;
        this.queryClick();
    };
    //点击页面营销方案中的查看详情按钮跳转营销方案详情页面
    DealWithComponent.prototype.btnDetail = function () {
        this.router.navigate(['/pages/tzb/custom/marketing/marketing-project/marketing-program-detail', { marketingProgramId: this.marketingProgramId }]);
    };
    //下载按钮
    DealWithComponent.prototype.down = function (temp) {
        var name = temp.fileName;
        var path = temp.fileUrl;
        open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(name) + "&fileUrl=" + path);
    };
    //返回按钮
    DealWithComponent.prototype.returnBtn = function () {
        setTimeout(function () {
            window.history.go(-1);
        }, 500);
    };
    DealWithComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    DealWithComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deal-with',
            template: __webpack_require__(/*! ./deal-with.component.html */ "./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with/deal-with.component.html"),
            styles: [__webpack_require__(/*! ./deal-with.component.scss */ "./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with/deal-with.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]])
    ], DealWithComponent);
    return DealWithComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up-deal-detail/follow-up-deal-detail.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up-deal-detail/follow-up-deal-detail.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 我要跟进 -->\r\n<div class=\"basic\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span>营销话术：</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<input type=\"text\" pInputText [(ngModel)]=\"channelReleaseMsg\" disabled>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div *ngIf=\"fileList.length>0\">\r\n\t\t\t\t<div class=\"ui-g-12 table\">\r\n\t\t\t\t\t<p-dataTable [value]=\"fileList\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n\t\t\t\t\t\t<p-column field=\"fileName\" header=\"附件名称\">\r\n\t\t\t\t\t\t\t<ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n\t\t\t\t\t\t\t\t<span>{{col.fileName}}</span>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</p-column>\r\n\t\t\t\t\t\t<p-column header=\"操作\">\r\n\t\t\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t\t\t<span (click)=\"down(col)\" class=\"tabelDownloadIco\">下载</span>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</p-column>\r\n\t\t\t\t\t</p-dataTable>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span>活动产品：</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<span class=\"product-style\">\r\n\t\t\t\t\t<span *ngFor=\"let item of productList\">{{item.productName}}&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span>客户名称：</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<input type=\"text\" pInputText [(ngModel)]=\"custName\" disabled>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span>联系电话：</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<input type=\"text\" pInputText [(ngModel)]=\"phone\" disabled>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span>联系方式：</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<p-dropdown [options]=\"contactWay\" disabled [(ngModel)]=\"dataList.cotactWay\"></p-dropdown>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span>联系情况：</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<p-radioButton name=\"contactEquity\" label=\"未联系\" value=\"0\" disabled [(ngModel)]=\"dataList.contactEquity\"></p-radioButton>\r\n\t\t\t\t<p-radioButton name=\"contactEquity\" label=\"联系成功\" value=\"1\" disabled [(ngModel)]=\"dataList.contactEquity\"></p-radioButton>\r\n\t\t\t\t<p-radioButton name=\"contactEquity\" label=\"联系失败，信息有误\" value=\"2\" disabled [(ngModel)]=\"dataList.contactEquity\"></p-radioButton>\r\n\t\t\t\t<p-radioButton name=\"contactEquity\" label=\"需再次联系\" value=\"3\" disabled [(ngModel)]=\"dataList.contactEquity\"></p-radioButton>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span>感兴趣与否：</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<p-radioButton name=\"whetherInterested\" label=\"感兴趣\" value=\"0\" disabled [(ngModel)]=\"dataList.whetherInterested\"></p-radioButton>\r\n\t\t\t\t<p-radioButton name=\"whetherInterested\" label=\"不感兴趣\" value=\"1\" disabled [(ngModel)]=\"dataList.whetherInterested\"></p-radioButton>\r\n\t\t\t\t<p-radioButton name=\"whetherInterested\" label=\"待定\" value=\"2\" disabled [(ngModel)]=\"dataList.whetherInterested\"></p-radioButton>\r\n\t\t\t\t<p-radioButton name=\"whetherInterested\" label=\"购买\" value=\"3\" disabled [(ngModel)]=\"dataList.whetherInterested\"></p-radioButton>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span>再次联系时间：</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t<!-- <input type=\"text\" pInputText [(ngModel)]=\"\" disabled/> -->\r\n\t\t\t\t<p-calendar [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" [(ngModel)]=\"dataList.nextContactTime\" [showTime]=\"true\"\r\n\t\t\t\t\t[showSeconds]=\"true\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [disabled]=\"true\"></p-calendar>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn-center\">\r\n\t\t<button pButton type=\"button\" label=\"关闭\" (click)=\"close()\"></button>\r\n\t</div>\r\n</div>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up-deal-detail/follow-up-deal-detail.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up-deal-detail/follow-up-deal-detail.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basic .ui-g-4 {\n  text-align: right; }\n\n.basic .product-style {\n  display: inline-block;\n  width: 100%;\n  line-height: 25px;\n  border: 1px solid #dbdbdb;\n  border-radius: 3px;\n  background: #f3f3ef; }\n\n.basic .btn-center {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvbXktYWN0aXZpdGUtcHJvamVjdC9mb2xsb3ctdXAtZGVhbC1kZXRhaWwvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxtYXJrZXRpbmdcXG15LWFjdGl2aXRlLXByb2plY3RcXGZvbGxvdy11cC1kZWFsLWRldGFpbFxcZm9sbG93LXVwLWRlYWwtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUJBQWlCLEVBQUE7O0FBRnpCO0VBS1EscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFWM0I7RUFhUSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vbWFya2V0aW5nL215LWFjdGl2aXRlLXByb2plY3QvZm9sbG93LXVwLWRlYWwtZGV0YWlsL2ZvbGxvdy11cC1kZWFsLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNpYyB7XHJcbiAgICAudWktZy00e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnByb2R1Y3Qtc3R5bGV7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmM2YzZWY7XHJcbiAgICB9XHJcbiAgICAuYnRuLWNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up-deal-detail/follow-up-deal-detail.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up-deal-detail/follow-up-deal-detail.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: FollowUpDealDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowUpDealDetailComponent", function() { return FollowUpDealDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { CusOperationHttpService } from '.http/custom-operation/custom-operation.http.service';





var FollowUpDealDetailComponent = /** @class */ (function () {
    function FollowUpDealDetailComponent(httpService, router, confirmationService, commfunc) {
        this.httpService = httpService;
        this.router = router;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.msgs = [];
        this.interestedDispaly = false;
        this.contactDateDispaly = false;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_CN"];
        this.contactWay = [];
        this.fileList = [];
        this.dataList = {};
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"]; //下载
    }
    //初始化
    FollowUpDealDetailComponent.prototype.ngOnInit = function () {
        this.codeValues(); //调用方法，获取全部码值
        this.contactWay = this.code['CONTACTWAY']; //联系方式
    };
    //码值
    FollowUpDealDetailComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    FollowUpDealDetailComponent.prototype.ngOnChanges = function () {
        if (this.inValue) {
            if (this.inValue.paramFollow) {
                this.channelReleaseMsg = this.inValue.paramFollow.channelReleaseMsg;
                this.productList = this.inValue.paramFollow.productList;
            }
            this.custName = this.inValue.list.custName;
            this.phone = this.inValue.list.phone;
            this.marketingCampaignId = this.inValue.marketingCampaignId;
            this.custNo = this.inValue.list.custNo;
            this.fileList = this.inValue.marketingContentFileList;
            // this.nextContactTime=this.inValue.list.nextContactTime;//下次联系时间
        }
        this.query();
    };
    FollowUpDealDetailComponent.prototype.query = function () {
        var _this = this;
        var param = {
            marketingCampaignId: this.marketingCampaignId,
            custNo: this.custNo,
        };
        var ob = this.httpService.queryMarketingPersonnelDispose(param);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList = data;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务异常" });
        });
    };
    //取消
    FollowUpDealDetailComponent.prototype.close = function () {
        this.outValue.emit(false);
    };
    //下载按钮
    FollowUpDealDetailComponent.prototype.down = function (temp) {
        var name = temp.fileName;
        var path = temp.fileUrl;
        open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(name) + "&fileUrl=" + path);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FollowUpDealDetailComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FollowUpDealDetailComponent.prototype, "inValue_2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FollowUpDealDetailComponent.prototype, "outValue", void 0);
    FollowUpDealDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-follow-up-deal-detail',
            template: __webpack_require__(/*! ./follow-up-deal-detail.component.html */ "./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up-deal-detail/follow-up-deal-detail.component.html"),
            styles: [__webpack_require__(/*! ./follow-up-deal-detail.component.scss */ "./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up-deal-detail/follow-up-deal-detail.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], FollowUpDealDetailComponent);
    return FollowUpDealDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up/bean/follow-up.bean.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up/bean/follow-up.bean.ts ***!
  \*************************************************************************************************/
/*! exports provided: FollowUpBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowUpBean", function() { return FollowUpBean; });
var FollowUpBean = /** @class */ (function () {
    function FollowUpBean() {
        this.nextContactTime = ''; //
    }
    return FollowUpBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up/follow-up.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up/follow-up.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 我要跟进 -->\r\n<div class=\"basic\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<label>营销话术：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<input type=\"text\" pInputText [(ngModel)]=\"channelReleaseMsg\" disabled>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div *ngIf=\"fileList.length>0\">\r\n\t\t\t\t<div class=\"ui-g-12 table\">\r\n\t\t\t\t\t<p-dataTable [value]=\"fileList\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n\t\t\t\t\t\t<p-column field=\"fileName\" header=\"附件名称\">\r\n\t\t\t\t\t\t\t<ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n\t\t\t\t\t\t\t\t<span>{{col.fileName}}</span>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</p-column>\r\n\t\t\t\t\t\t<p-column header=\"操作\">\r\n\t\t\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t\t\t<span (click)=\"down(col)\" class=\"tabelDownloadIco\">下载</span>\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</p-column>\r\n\t\t\t\t\t</p-dataTable>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 \">\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<label>活动产品：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<span class=\"product-style\">\r\n\t\t\t\t\t<span *ngFor=\"let item of productList\">{{item.productName}}&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<label>客户名称：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<input type=\"text\" pInputText [(ngModel)]=\"custName\" disabled>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<label>联系电话：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<input type=\"text\" pInputText [(ngModel)]=\"phone\" disabled>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<label appValidation>联系方式：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<p-dropdown [options]=\"contactWay\" [(ngModel)]=\"followUpBean.contactWay\"></p-dropdown>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isContactWay\">\r\n\t\t\t\t\t请选择联系方式！\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"ui-g-12 \">\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<label appValidation>联系情况：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<p-radioButton name=\"contactEquity\" label=\"未联系\" value=\"0\" [(ngModel)]=\"followUpBean.contactEquity\"></p-radioButton>\r\n\t\t\t\t<p-radioButton name=\"contactEquity\" label=\"联系成功\" value=\"1\" [(ngModel)]=\"followUpBean.contactEquity\"></p-radioButton>\r\n\t\t\t\t<p-radioButton name=\"contactEquity\" label=\"联系失败，信息有误\" value=\"2\" [(ngModel)]=\"followUpBean.contactEquity\"></p-radioButton>\r\n\t\t\t\t<p-radioButton name=\"contactEquity\" label=\"需再次联系\" value=\"3\" [(ngModel)]=\"followUpBean.contactEquity\"></p-radioButton>\r\n\t\t\t\t<div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isContactEquity\">\r\n\t\t\t\t\t请选择联系情况！\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<label appValidation>感兴趣与否：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<p-radioButton name=\"whereInterested\" label=\"感兴趣\" value=\"0\" [(ngModel)]=\"followUpBean.whereInterested\"></p-radioButton>\r\n\t\t\t\t<p-radioButton name=\"whereInterested\" label=\"不感兴趣\" value=\"1\" [(ngModel)]=\"followUpBean.whereInterested\"></p-radioButton>\r\n\t\t\t\t<p-radioButton name=\"whereInterested\" label=\"待定\" value=\"2\" [(ngModel)]=\"followUpBean.whereInterested\"></p-radioButton>\r\n\t\t\t\t<p-radioButton name=\"whereInterested\" label=\"购买\" value=\"3\" [(ngModel)]=\"followUpBean.whereInterested\"></p-radioButton>\r\n\t\t\t\t<div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isWhetherInterested\">\r\n\t\t\t\t\t请选择是否感兴趣！\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<label appValidation>再次联系时间：</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<p-calendar [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" [(ngModel)]=\"nextContactTime\" [showIcon]=\"true\"\r\n\t\t\t\t\t(onSelect)=\"showData()\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [showOtherMonths]=\"false\" [minDate]=\"temData\"></p-calendar>\r\n\t\t\t\t<span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"isNextContactTime\">\r\n\t\t\t\t\t请选择下次联系时间！\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn-center\">\r\n\t\t<button pButton type=\"button\" label=\"确定\" (click)=\"comfirm()\"></button>\r\n\t</div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!--点击提交按钮时，会跳出还有多少个客户未-->\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up/follow-up.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up/follow-up.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basic .ui-g-4 {\n  text-align: right; }\n\n.basic .product-style {\n  display: inline-block;\n  width: 100%;\n  line-height: 25px;\n  border: 1px solid #dbdbdb;\n  border-radius: 3px;\n  background: #f3f3ef; }\n\n.basic .btn-center {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvbXktYWN0aXZpdGUtcHJvamVjdC9mb2xsb3ctdXAvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxtYXJrZXRpbmdcXG15LWFjdGl2aXRlLXByb2plY3RcXGZvbGxvdy11cFxcZm9sbG93LXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUJBQWlCLEVBQUE7O0FBRnpCO0VBS1EscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFWM0I7RUFhUSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vbWFya2V0aW5nL215LWFjdGl2aXRlLXByb2plY3QvZm9sbG93LXVwL2ZvbGxvdy11cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNpYyB7XHJcbiAgICAudWktZy00e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyAgICAgIFxyXG4gICAgfVxyXG4gICAgLnByb2R1Y3Qtc3R5bGV7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmM2YzZWY7XHJcbiAgICB9XHJcbiAgICAuYnRuLWNlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up/follow-up.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up/follow-up.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: FollowUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowUpComponent", function() { return FollowUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bean_follow_up_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bean/follow-up.bean */ "./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up/bean/follow-up.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var FollowUpComponent = /** @class */ (function () {
    function FollowUpComponent(httpService, router, confirmationService, commfunc, fb) {
        this.httpService = httpService;
        this.router = router;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.followUpBean = new _bean_follow_up_bean__WEBPACK_IMPORTED_MODULE_6__["FollowUpBean"]();
        this.msgs = [];
        this.productList = [];
        this.interestedDispaly = false;
        this.contactDateDispaly = false;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["CALENDAR_CN"];
        // contactWay: any = ContactWay;
        this.undisplay = false;
        this.updateValue = [];
        this.isContactWay = false;
        this.isContactEquity = false;
        this.isWhetherInterested = false;
        this.isNextContactTime = false;
        this.contactWay = [];
        this.fileList = [];
        // display: boolean = false;
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_9__["TZB_CUS_DOWNLOAD"]; //下载
        this.temData = new Date();
        this.codeValues(); //调用方法，获取全部码值
        this.contactWay = this.code['CONTACTWAY']; //联系方式
    }
    //初始化
    FollowUpComponent.prototype.ngOnInit = function () {
    };
    //码值
    FollowUpComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    FollowUpComponent.prototype.ngOnChanges = function () {
        if (this.inValue) {
            this.channelReleaseMsg = this.inValue.paramFollow.channelReleaseMsg;
            this.productList = this.inValue.paramFollow.productList;
            // for (let i=0;i<this.productList.length;i++) {
            //   this.productName=this.productList[i].productName
            // }
            console.log(this.productName);
            this.custName = this.inValue.custName;
            this.phone = this.inValue.phone;
            this.followUpBean.custNo = this.inValue.custNo;
            this.followUpBean.marketingCampaignId = this.inValue.marketingCampaignId;
            this.followUpBean.workId = this.inValue.workId;
            this.fileList = this.inValue.marketingContentFileList;
        }
        this.nextContactTime = '';
    };
    //确定按钮
    FollowUpComponent.prototype.comfirm = function () {
        var _this = this;
        //如果时间存在-转换
        if (this.nextContactTime) {
            this.followUpBean.nextContactTime = moment__WEBPACK_IMPORTED_MODULE_5__(this.nextContactTime).format("YYYY-MM-DD");
        }
        //联系方式-校验不为空
        if (this.followUpBean.contactWay == '' || this.followUpBean.contactWay == undefined || this.followUpBean.contactWay == null) {
            this.isContactWay = true;
            return;
        }
        else {
            this.isContactWay = false;
        }
        //联系情况-校验不为空
        if (this.followUpBean.contactEquity == '' || this.followUpBean.contactEquity == undefined || this.followUpBean.contactEquity == null) {
            this.isContactEquity = true;
            return;
        }
        else {
            this.isContactEquity = false;
        }
        //感兴趣
        if (this.followUpBean.whereInterested == '' || this.followUpBean.whereInterested == undefined || this.followUpBean.whereInterested == null) {
            this.isWhetherInterested = true;
            return;
        }
        else {
            this.isWhetherInterested = false;
        }
        //需再次联系
        if (this.followUpBean.nextContactTime == '' || this.followUpBean.nextContactTime == undefined || this.followUpBean.nextContactTime == null) {
            this.isNextContactTime = true;
            return;
        }
        else {
            this.isNextContactTime = false;
        }
        var ob = this.httpService.marketingPersonnelDispose(this.followUpBean);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.outValue.emit(false);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务异常" });
        });
    };
    FollowUpComponent.prototype.updateCall = function (param) {
        this.undisplay = param;
    };
    //日期转换
    FollowUpComponent.prototype.showData = function () {
        // this.followUpBean.nextContactTime = this.commfunc.transDate(this.nextContactTime);
        this.isNextContactTime = false;
    };
    //下载按钮
    FollowUpComponent.prototype.down = function (temp) {
        var name = temp.fileName;
        var path = temp.fileUrl;
        open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_9__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(name) + "&fileUrl=" + path);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FollowUpComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FollowUpComponent.prototype, "inValue_2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FollowUpComponent.prototype, "outValue", void 0);
    FollowUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'follow-up',
            template: __webpack_require__(/*! ./follow-up.component.html */ "./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up/follow-up.component.html"),
            styles: [__webpack_require__(/*! ./follow-up.component.scss */ "./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up/follow-up.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__["CusOperationHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], FollowUpComponent);
    return FollowUpComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-activite-project.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/my-activite-project.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: MyProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectModule", function() { return MyProjectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _my_activite_project_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-activite-project.routing */ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-activite-project.routing.ts");
/* harmony import */ var _deal_with_deal_with_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deal-with/deal-with.component */ "./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with/deal-with.component.ts");
/* harmony import */ var _deal_with_detail_deal_with_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deal-with-detail/deal-with-detail.component */ "./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with-detail/deal-with-detail.component.ts");
/* harmony import */ var _my_marketing_my_marketing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-marketing/my-marketing.component */ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/my-marketing.component.ts");
/* harmony import */ var _my_marketing_rask_move_rask_move_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-marketing/rask-move/rask-move.component */ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/rask-move/rask-move.component.ts");
/* harmony import */ var _rask_move_detail_rask_move_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rask-move-detail/rask-move-detail.component */ "./src/app/pages/tzb/custom/marketing/my-activite-project/rask-move-detail/rask-move-detail.component.ts");
/* harmony import */ var _follow_up_follow_up_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./follow-up/follow-up.component */ "./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up/follow-up.component.ts");
/* harmony import */ var _follow_up_deal_detail_follow_up_deal_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./follow-up-deal-detail/follow-up-deal-detail.component */ "./src/app/pages/tzb/custom/marketing/my-activite-project/follow-up-deal-detail/follow-up-deal-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { StopComponent } from './stop/stop.component';


//我的营销
var MyProjectModule = /** @class */ (function () {
    function MyProjectModule() {
    }
    MyProjectModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _my_activite_project_routing__WEBPACK_IMPORTED_MODULE_5__["MyProjectRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"]
            ],
            declarations: [
                _deal_with_deal_with_component__WEBPACK_IMPORTED_MODULE_6__["DealWithComponent"],
                _deal_with_detail_deal_with_detail_component__WEBPACK_IMPORTED_MODULE_7__["DealWithDetail"],
                _my_marketing_my_marketing_component__WEBPACK_IMPORTED_MODULE_8__["MyMarketingComponent"],
                _my_marketing_rask_move_rask_move_component__WEBPACK_IMPORTED_MODULE_9__["RaskMoveComponent"],
                _rask_move_detail_rask_move_detail_component__WEBPACK_IMPORTED_MODULE_10__["RaskMoveDetailComponent"],
                // StopComponent,
                _follow_up_follow_up_component__WEBPACK_IMPORTED_MODULE_11__["FollowUpComponent"],
                _follow_up_deal_detail_follow_up_deal_detail_component__WEBPACK_IMPORTED_MODULE_12__["FollowUpDealDetailComponent"]
            ],
            providers: []
        })
    ], MyProjectModule);
    return MyProjectModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-activite-project.routing.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/my-activite-project.routing.ts ***!
  \***********************************************************************************************/
/*! exports provided: routes, MyProjectRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectRouting", function() { return MyProjectRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _deal_with_deal_with_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deal-with/deal-with.component */ "./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with/deal-with.component.ts");
/* harmony import */ var _deal_with_detail_deal_with_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deal-with-detail/deal-with-detail.component */ "./src/app/pages/tzb/custom/marketing/my-activite-project/deal-with-detail/deal-with-detail.component.ts");
/* harmony import */ var _my_marketing_my_marketing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-marketing/my-marketing.component */ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/my-marketing.component.ts");
/* harmony import */ var _my_marketing_rask_move_rask_move_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-marketing/rask-move/rask-move.component */ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/rask-move/rask-move.component.ts");
/* harmony import */ var _rask_move_detail_rask_move_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rask-move-detail/rask-move-detail.component */ "./src/app/pages/tzb/custom/marketing/my-activite-project/rask-move-detail/rask-move-detail.component.ts");






var routes = [
    {
        path: '',
        children: [
            {
                path: 'deal-with',
                component: _deal_with_deal_with_component__WEBPACK_IMPORTED_MODULE_1__["DealWithComponent"]
            },
            {
                path: 'deal-with-detail',
                component: _deal_with_detail_deal_with_detail_component__WEBPACK_IMPORTED_MODULE_2__["DealWithDetail"]
            },
            {
                path: 'my-marketing',
                component: _my_marketing_my_marketing_component__WEBPACK_IMPORTED_MODULE_3__["MyMarketingComponent"]
            },
            {
                path: 'my-marketing',
                component: _my_marketing_my_marketing_component__WEBPACK_IMPORTED_MODULE_3__["MyMarketingComponent"]
            },
            {
                path: 'rask-move',
                component: _my_marketing_rask_move_rask_move_component__WEBPACK_IMPORTED_MODULE_4__["RaskMoveComponent"]
            },
            {
                path: 'rask-move-detail',
                component: _rask_move_detail_rask_move_detail_component__WEBPACK_IMPORTED_MODULE_5__["RaskMoveDetailComponent"]
            }
        ]
    }
];
var MyProjectRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/bean/qryMyMarket.bean.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/bean/qryMyMarket.bean.ts ***!
  \******************************************************************************************************/
/*! exports provided: QryMyMarketBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QryMyMarketBean", function() { return QryMyMarketBean; });
var QryMyMarketBean = /** @class */ (function () {
    function QryMyMarketBean() {
    }
    return QryMyMarketBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/my-marketing.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/my-marketing.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g module\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<header-title [Info]=\"'我的营销'\"></header-title>\r\n\t</div>\r\n\t<div class=\"ui-g-12\" style=\" padding: 0;\">\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4 text-right\">\r\n\t\t\t\t<span>营销活动名称：</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t<input type=\"text\" pInputText class=\"ui-g-12\" [(ngModel)]=\"qryMyMarketBean.campaignName\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4 text-right\">\r\n\t\t\t\t<span>营销活动时间：</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-6 date\">\r\n\t\t\t\t<p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n\t\t\t\t    [locale]=\"ch\" class=\"calendar-name\" (onSelect)=\"showDataStart()\" (onBlur)=\"onchange1()\" [(ngModel)]=\"marketingTimeFrom\"\r\n\t\t\t\t    [maxDate]=\"marketingTimeTo\" [showOtherMonths]=\"false\"></p-calendar>\r\n\t\t\t\t<span>至</span>\r\n\t\t\t\t<p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n\t\t\t\t    [locale]=\"ch\" class=\"calendar-name\" (onSelect)=\"showDataEnd()\" (onBlur)=\"onchange2()\" [(ngModel)]=\"marketingTimeTo\" [minDate]=\"marketingTimeFrom\"\r\n\t\t\t\t    [showOtherMonths]=\"false\"></p-calendar>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12\"  style=\" padding: 0;\">\r\n\t\t<div class=\"ui-g-6\">\r\n\t\t\t<div class=\"ui-g-4 text-right\">\r\n\t\t\t\t<span>营销活动发布机构：</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t<div class=\"queryinputbtn\">\r\n\t\t\t\t\t<input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"custMajorName\" disabled/>\r\n\t\t\t\t\t<div class=\"clickspan\" (click)=\"chooseOrg()\">\r\n\t\t\t\t\t\t<a class=\"a-hand\">\r\n\t\t\t\t\t\t\t<span>...</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn-center\">\r\n\t\t<button pButton type=\"button\" label=\"查询\" (click)=\"check()\"></button>\r\n\t\t<button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n\t</div>\r\n\t<div class=\"ui-g\">\r\n\t\t<div class=\"ui-g-12 base-table table \">\r\n\t\t\t<p-dataTable [value]=\"dataList\" [emptyMessage]=\"tabMesg\" scrollable=\"true\" [style]=\"{'text-align':'center'}\">\r\n\t\t\t\t<p-column field=\"campaignName\" header=\"营销活动名称\"></p-column>\r\n\t\t\t\t<p-column field=\"fromDate\" header=\"营销活动开始时间\"></p-column>\r\n\t\t\t\t<p-column field=\"thruDate\" header=\"营销活动结束时间\"></p-column>\r\n\t\t\t\t<p-column field=\"marMonitoringTimeFrom\" header=\"监测开始时间\"></p-column>\r\n\t\t\t\t<p-column field=\"marMonitoringTimeTo\" header=\"监测结束时间\"></p-column>\r\n\t\t\t\t<p-column field=\"releaseUserId\" header=\"营销活动发起人\"></p-column>\r\n\t\t\t\t<!-- <p-column field=\"releaseUserName\" header=\"发起人名称\"></p-column> -->\r\n\t\t\t\t<p-column field=\"releaseOrgId\" header=\"发起机构\"></p-column>\r\n\t\t\t\t<!-- <p-column field=\"releaseOrgName\" header=\"发起机构名称\"></p-column> -->\r\n\t\t\t\t<p-column field=\"statusId\" header=\"营销活动状态\">\r\n\t\t\t\t\t<ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n\t\t\t\t\t\t<span>{{item.statusId|codeValuePie:status}}</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</p-column>\r\n\t\t\t\t<p-column field=\"workStatus\" header=\"工作任务状态\" [style]=\"{'width':'10%'}\">\r\n\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t{{col.workStatus|codeValuePie:WorkStatus}}\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</p-column>\r\n\t\t\t\t<p-column field=\"taskType\" header=\"任务种类\" [style]=\"{'width':'10%'}\">\r\n\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t{{col.taskType|codeValuePie:taskType}}\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</p-column>\r\n\t\t\t\t<p-column field=\"workId\" header=\"工作任务ID\" hidden=\"true\" [style]=\"{'width':'10%'}\"></p-column>\r\n\t\t\t\t<p-column field=\"\" header=\"操作\" [sortable]=\"false\">\r\n\t\t\t\t\t<ng-template let-ri=\"rowData\" pTemplate=\"body\">\r\n\t\t\t\t\t\t<!--   -->\r\n\t\t\t\t\t\t<span class=\"tabelDealIco\" (click)='toDisposeSchedule(ri)' *ngIf=\"ri.workStatus=='0'||ri.workStatus=='1'||ri.workStatus=='2'\">处理</span>\r\n\t\t\t\t\t\t<!--   -->\r\n\t\t\t\t\t\t<span (click)='toDetail(ri)' class=\"tabelDetailIco\" *ngIf=\"ri.workStatus=='3'||ri.workStatus=='9'\">查看详情</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</p-column>\r\n\t\t\t</p-dataTable>\r\n\t\t\t<p-paginator first={{first}} rows=\"{{qryMyMarketBean.countNum}}\" totalRecords=\"{{totalNum}}\" (onPageChange)=\"paginate($event)\"\r\n\t\t\t    [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!--机构树-->\r\n<p-dialog *ngIf='orgTreeDisplay' [(visible)]=\"orgTreeDisplay\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 class=\"my-cust-overf\">\r\n\t<p-header>机构树</p-header>\r\n\t<marketing-activityOrg-tree *ngIf='orgTreeDisplay' (outValue)=\"treeCall($event)\"></marketing-activityOrg-tree>\r\n</p-dialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/my-marketing.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/my-marketing.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .table {\n  text-align: center; }\n\n.ui-g .text-right {\n  text-align: right; }\n\n.ui-g .btn-center {\n  text-align: center; }\n\n.queryinputbtn {\n  width: 100%;\n  float: left;\n  display: flex; }\n\n.queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n\n.queryinputbtn .clickspan {\n    width: 15%;\n    height: 23px;\n    cursor: pointer; }\n\n.date {\n  align-items: center; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .calendar-name .ui-calendar {\n    width: 44.7% !important;\n    min-width: 120.5px !important; } }\n\n:host/deep/ .calendar-name .ui-calendar {\n  width: 45.2%;\n  min-width: 124px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvbXktYWN0aXZpdGUtcHJvamVjdC9teS1tYXJrZXRpbmcvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxtYXJrZXRpbmdcXG15LWFjdGl2aXRlLXByb2plY3RcXG15LW1hcmtldGluZ1xcbXktbWFya2V0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEsa0JBQWtCLEVBQUE7O0FBRzFCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBSGpCO0lBS1Esa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsMEJBQTBCLEVBQUE7O0FBUmxDO0lBV1EsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlLEVBQUE7O0FBR3ZCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBRUs7SUFDRyx1QkFBdUI7SUFDdkIsNkJBQTZCLEVBQUEsRUFDaEM7O0FBRUw7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL21hcmtldGluZy9teS1hY3Rpdml0ZS1wcm9qZWN0L215LW1hcmtldGluZy9teS1tYXJrZXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnVpLWcge1xyXG4gICAgLnRhYmxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dC1yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuYnRuLWNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbi5xdWVyeWlucHV0YnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLnF1ZXJ5aW5wdXRPcmcge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcclxuICAgICAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2xpY2tzcGFuIHtcclxuICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgIGhlaWdodDogMjNweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuLmRhdGUge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgLy8g5p+l6K+i6IyD5Zu0IOaXpeacn+e7hOS7tlxyXG4gICAgIDpob3N0L2RlZXAvICAuY2FsZW5kYXItbmFtZSAudWktY2FsZW5kYXIge1xyXG4gICAgICAgIHdpZHRoOiA0NC43JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTIwLjVweCAhaW1wb3J0YW50O1xyXG4gICAgfSBcclxufVxyXG46aG9zdC9kZWVwLyAuY2FsZW5kYXItbmFtZSAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDQ1LjIlO1xyXG4gICAgbWluLXdpZHRoOiAxMjRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/my-marketing.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/my-marketing.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: MyMarketingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMarketingComponent", function() { return MyMarketingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_qryMyMarket_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean/qryMyMarket.bean */ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/bean/qryMyMarket.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { MarketingActivityBean } from '../marketing-activity-query/bean/MarketingActivity.bean';


/**
 * 我的营销
 */
var MyMarketingComponent = /** @class */ (function () {
    function MyMarketingComponent(cusOperationHttpService, commfunc, router) {
        this.cusOperationHttpService = cusOperationHttpService;
        this.commfunc = commfunc;
        this.router = router;
        // marketingActivityBean: MarketingActivityBean = new MarketingActivityBean();
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //表格中无数据时显示的内容
        this.calendar = [];
        this.dataList = [];
        // pageSize: number = 10;
        this.msgs = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_CN"];
        this.marketingTimeFrom = null;
        this.marketingTimeTo = null;
        //机构树模态框
        this.orgTreeDisplay = false; //模态框是否展示
        this.treeOrgName = '';
        this.qryMyMarketBean = new _bean_qryMyMarket_bean__WEBPACK_IMPORTED_MODULE_5__["QryMyMarketBean"]();
        this.status = [];
        this.WorkStatus = [];
        this.taskType = [];
        this.countNum = 10;
        this.pageNum = 1;
        this.first = 0; //分页控制
        this.codeValues(); //调用方法，获取全部码值
        this.status = this.code['MarketingStatus'];
        this.WorkStatus = this.code['WORKSTATUS']; //工作任务状态
        this.taskType = this.code['TASKTYPE']; //任务种类
    }
    //初始化
    MyMarketingComponent.prototype.ngOnInit = function () {
        this.qryMyMarketBean.countNum = 10;
        this.qryMyMarketBean.pageNum = 1;
        this.first = 0;
        this.check();
    };
    MyMarketingComponent.prototype.check = function () {
        this.queryClick();
    };
    //查询按钮
    MyMarketingComponent.prototype.queryClick = function () {
        var _this = this;
        this.qryMyMarketBean.marketingTimeFrom = this.commfunc.transDateN(this.marketingTimeFrom);
        this.qryMyMarketBean.marketingTimeTo = this.commfunc.transDateN(this.marketingTimeTo);
        var ob = this.cusOperationHttpService.queryMarketingCampaignUndoList(this.qryMyMarketBean);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataList = data.returnList;
                _this.totalNum = data.totalCount;
                data.returnList.forEach(function (element) {
                    if (element.taskType == '') {
                        element.taskType = null; //任务种类
                    }
                    if (element.workStatus == '') {
                        element.workStatus = null; //工作任务状态
                    }
                    if (element.statusId == '') {
                        element.statusId = null; //营销活动状态
                    }
                });
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    //页码重置
    MyMarketingComponent.prototype.querySecleReset = function () {
        this.qryMyMarketBean.countNum = 10;
        this.qryMyMarketBean.pageNum = 1;
        this.first = 0;
    };
    //码值
    MyMarketingComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //选择机构
    MyMarketingComponent.prototype.chooseOrg = function () {
        document.body.style.overflow = 'hidden';
        this.orgTreeDisplay = !this.orgTreeDisplay;
    };
    //机构树回调
    MyMarketingComponent.prototype.treeCall = function (param) {
        document.body.style.overflow = 'auto';
        this.orgTreeDisplay = false;
        this.custMajorName = param.orgName;
        this.qryMyMarketBean.releaseOrg = param.orgId;
    };
    //开始日期
    MyMarketingComponent.prototype.showDataStart = function () {
        var _this = this;
        if (this.marketingTimeFrom && this.marketingTimeTo) {
            if (this.marketingTimeFrom > this.marketingTimeTo) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.marketingTimeFrom = null;
                });
            }
        }
    };
    //结束日期
    MyMarketingComponent.prototype.showDataEnd = function () {
        var _this = this;
        if (this.marketingTimeFrom && this.marketingTimeTo) {
            if (this.marketingTimeFrom > this.marketingTimeTo) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.marketingTimeTo = null;
                });
            }
        }
    };
    //手动输入日期时，失去焦点时进行判断
    MyMarketingComponent.prototype.onchange1 = function () {
        this.showDataStart();
    };
    MyMarketingComponent.prototype.onchange2 = function () {
        this.showDataEnd();
    };
    //重置按钮
    MyMarketingComponent.prototype.reset = function () {
        this.qryMyMarketBean = new _bean_qryMyMarket_bean__WEBPACK_IMPORTED_MODULE_5__["QryMyMarketBean"]();
        this.marketingTimeFrom = null;
        this.marketingTimeTo = null;
        this.custMajorName = '';
        this.querySecleReset();
    };
    //分页
    MyMarketingComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.qryMyMarketBean.countNum = Number(event.rows);
        //当前页
        var currentPage = event.page + 1;
        this.qryMyMarketBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.qryMyMarketBean.countNum;
        this.queryClick();
    };
    //按钮权限
    MyMarketingComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    //点击处理按钮
    MyMarketingComponent.prototype.toDisposeSchedule = function (item) {
        if (item.taskType == '1002') {
            this.router.navigate(['/pages/tzb/custom/marketing/my-activite-project/deal-with', item]); //营销人员跟进页面
        }
        else if (item.taskType == '1008') {
            this.router.navigate(['/pages/tzb/custom/marketing/my-activite-project/rask-move', item]); //任务流转-分配人员
        }
    };
    //点击查看详情
    MyMarketingComponent.prototype.toDetail = function (item) {
        if (item.taskType == '1002') {
            this.router.navigate(['/pages/tzb/custom/marketing/my-activite-project/deal-with-detail', item]);
        }
        else if (item.taskType == '1008') {
            this.router.navigate(['/pages/tzb/custom/marketing/my-activite-project/rask-move-detail', item]);
        }
    };
    MyMarketingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-marketing',
            template: __webpack_require__(/*! ./my-marketing.component.html */ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/my-marketing.component.html"),
            styles: [__webpack_require__(/*! ./my-marketing.component.scss */ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/my-marketing.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MyMarketingComponent);
    return MyMarketingComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/rask-move/bean/rask-move.bean.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/rask-move/bean/rask-move.bean.ts ***!
  \**************************************************************************************************************/
/*! exports provided: RaskMoveBean, DistributeBean, QueryUserBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaskMoveBean", function() { return RaskMoveBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributeBean", function() { return DistributeBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryUserBean", function() { return QueryUserBean; });
var RaskMoveBean = /** @class */ (function () {
    function RaskMoveBean() {
    }
    return RaskMoveBean;
}());

var DistributeBean = /** @class */ (function () {
    function DistributeBean() {
    }
    return DistributeBean;
}());

var QueryUserBean = /** @class */ (function () {
    function QueryUserBean() {
    }
    return QueryUserBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/rask-move/rask-move.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/rask-move/rask-move.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n  <div class=\"ui-g-12 module\">\r\n    <p-accordion [multiple]=\"true\">\r\n      <p-accordionTab header=\"营销基本要素\" [selected]=\"trueOrFalse\" class=\"clearfix\">\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销活动名称：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.campaignName}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销关键字：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.remark}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销活动时间：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.fromDate}}至{{totalMessage.thruDate}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销监控时间：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.marMonitoringTimeFrom}}至{{totalMessage.marMonitoringTimeTo}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销方案：\r\n            </div>\r\n            <div class=\"ui-g-6\" (click)=\"btnDetail()\" style=\"color:#19b0c8;  cursor: pointer;\">\r\n              {{totalMessage.marketingProgramName}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销活动状态：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.statusId |codeValuePie:status}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销活动说明：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.marketingContentDes}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <!-- <div *ngIf=\"fileList1.length>0\"> -->\r\n            <p-dataTable [value]=\"fileList1\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n              <p-column field=\"fileName\" header=\"附件名称\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n                  <span>{{col.fileName}}</span>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"操作\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)=\"down(col)\" class=\"tabelDownloadIco\" >下载</span> \r\n                </ng-template>\r\n              </p-column>\r\n            </p-dataTable>\r\n            <!-- </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销目标：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.marketingTargetDes}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-6 \">\r\n            <!-- <div *ngIf=\"fileList2.length>0\"> -->\r\n            <p-dataTable [value]=\"fileList2\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n              <p-column field=\"fileName\" header=\"附件名称\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n                  <span>{{col.fileName}}</span>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"操作\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)=\"down(col)\" class=\"tabelDownloadIco\" >下载</span> \r\n                </ng-template>\r\n              </p-column>\r\n            </p-dataTable>\r\n            <!-- </div> -->\r\n          </div>\r\n        </div>\r\n      </p-accordionTab>\r\n    </p-accordion>\r\n  </div>\r\n  <div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"'营销流转任务'\"></header-title>\r\n    <div class=\"ui-g-12 rask\">\r\n      <div class=\"rask1\">营销流转任务</div>\r\n      <div class=\"rask2\">\r\n        <span *ngIf=\"items.customerNum != 0\">本次营销活动下还有{{items.customerNum}}名客户未分配，请及时按要求分配</span>\r\n        <span *ngIf=\"items.customerNum == 0\">未有未分配客户</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <header-title [Info]=\"'营销人员分配'\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12 table\">\r\n      <p-dataTable [value]=\"items.distributeInformationList\" [emptyMessage]=\"tabMesg\" scrollable=\"true\" scrollHeight=\"350px\" scrollWidth=\"'100%'\">\r\n        <p-headerColumnGroup>\r\n          <p-row>\r\n            <p-column header=\"用户ID\" colspan=\"1\"></p-column>\r\n            <p-column header=\"姓名\" colspan=\"1\"></p-column>\r\n            <p-column header=\"客户数\" colspan=\"1\"></p-column>\r\n            <p-column header=\"总资产\" colspan=\"1\"></p-column>\r\n            <p-column header=\"户均资产\" colspan=\"1\"></p-column>\r\n            <p-column header=\"总负债\" colspan=\"1\"></p-column>\r\n            <p-column header=\"户均负债\" colspan=\"1\"></p-column>\r\n          </p-row>\r\n        </p-headerColumnGroup>\r\n        <p-column field=\"manageId\"></p-column>\r\n        <p-column field=\"name\"></p-column>\r\n        <p-column field=\"customerNum\"></p-column>\r\n        <p-column field=\"propertyTotal\"></p-column>\r\n        <p-column field=\"propertyTotalAverage\"></p-column>\r\n        <p-column field=\"propertyTotalAverage\"></p-column>\r\n        <p-column field=\"liabilitiesTotalAverage\"></p-column>\r\n        <p-footerColumnGroup>\r\n          <p-row>\r\n            <p-column footer=\"无主联系人\"></p-column>\r\n            <p-column>\r\n              <ng-template pTemplate=\"footer\">\r\n                <span>分配人员</span>\r\n                <!-- <span class=\"btn\" *ngIf=\"Property1\">\r\n                  <img class=\"gundam-addimg\" src=\"../../../../../../../assets/layout/images/gundam-addseach/add.png\" alt=\"\" (click)=\"doAddFirst()\">\r\n                </span> -->\r\n                <!-- <span class=\"btn\"> -->\r\n                  <img class=\"gundam-addimg\" src=\"../../../../../../../../assets/layout/images/add.png\" alt=\"\" (click)=\"doAdd()\">\r\n                <!-- </span> -->\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column>\r\n              <ng-template pTemplate=\"footer\">\r\n                <span>{{items.customerNum}}</span>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column>\r\n              <ng-template pTemplate=\"footer\">\r\n                <span>{{items.propertyTotal}}</span>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column>\r\n              <ng-template pTemplate=\"footer\">\r\n                <span>{{items.propertyTotalAverage}}</span>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column>\r\n              <ng-template pTemplate=\"footer\">\r\n                <span>{{items.liabilitiesTotal}}</span>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column>\r\n              <ng-template pTemplate=\"footer\">\r\n                <span>{{items.liabilitiesTotalAverage}}</span>\r\n              </ng-template>\r\n            </p-column>\r\n          </p-row>\r\n        </p-footerColumnGroup>\r\n      </p-dataTable>\r\n      <p-paginator rows=\"{{raskMoveBean.countNum}}\" totalRecords=\"{{totalNum}}\" (onPageChange)=\"paginate($event)\" [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n    </div>\r\n    <div class=\"ui-g-12 body2\">\r\n      <div class=\"ui-g-4 ui-g-offset-1 title-left fenpei\" *ngIf=\"Property\">\r\n        <div class=\"ui-g-12\" *ngFor=\"let ind of list;let i=index\" style=\"text-align:center\">\r\n          <input type=\"text\" pInputText [(ngModel)]=\"list[i].tellerName\" readonly  (click)=\"chooseWorker(i)\" style=\"cursor: pointer; display: inline-block;\r\n          width: 10%;\"/>\r\n          <span>分配</span>\r\n          <input type=\"text\" style=\"border: none;\r\n              outline: none;\r\n              border-radius: 5px;\r\n              width: 10%;\r\n              height: 23px;\" [(ngModel)]=\"ind.customerNum\">人\r\n            <!-- <span class=\"reduce\"> -->\r\n            <img (click)=\"reduce(i)\" class=\"gundam-subimg\" src=\"../../../../../../../../assets/layout/images/table-detele.png\"\r\n              alt=\"\">\r\n          <!-- </span> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n      <button pButton type=\"button\" label=\"确定并提交\" (click)=\"comfirm()\"></button>\r\n      <button pButton type=\"button\" label=\"返回\" (click)=\"returnBtn()\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<p-dialog [(visible)]=\"personPage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10 >\r\n    <p-header>员工列表</p-header>\r\n    <app-query-user-list *ngIf=\"personPage\" [in-value]=\"userInValue\" (outValue)=\"perInfor($event)\"></app-query-user-list>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/rask-move/rask-move.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/rask-move/rask-move.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-12 .text-right {\n  text-align: right; }\n\n.ui-g-12 .ui-g-4 {\n  text-align: right; }\n\n.ui-g-12 .marketing-basic {\n  display: flex;\n  width: 100%;\n  height: 34px;\n  background-color: #f2f2f2;\n  padding: 7px 0 7px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #D7D6D6;\n  margin-top: 20px; }\n\n.ui-g-12 .marketing-basic .line {\n    display: inline-block;\n    width: 5px;\n    height: 19px; }\n\n.ui-g-12 .marketing-basic .left {\n    margin-left: 10px; }\n\n.ui-g-12 .marketing-basic .right {\n    margin-left: 88%;\n    cursor: pointer; }\n\n.ui-g-12 .marketing-basic .active {\n    display: block; }\n\n.ui-g-12 .rask {\n  display: flex; }\n\n.ui-g-12 .rask .rask1 {\n    width: 10%;\n    height: 34px;\n    text-align: center;\n    line-height: 34px;\n    background: #19b0c8; }\n\n.ui-g-12 .rask .rask2 {\n    height: 34px;\n    width: 90%;\n    background: #fff;\n    line-height: 34px;\n    padding-left: 5px; }\n\n.ui-g-12 .list div {\n  height: 34px;\n  width: 100%;\n  line-height: 34px;\n  background: #fff; }\n\n.ui-g-12 .list div span {\n    padding-left: 20px; }\n\n.ui-g-12 .btn {\n  text-align: center; }\n\n.ui-g-12 .table {\n  text-align: center; }\n\n.ui-g-12 a {\n  color: #0094D2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvbXktYWN0aXZpdGUtcHJvamVjdC9teS1tYXJrZXRpbmcvcmFzay1tb3ZlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcbWFya2V0aW5nXFxteS1hY3Rpdml0ZS1wcm9qZWN0XFxteS1tYXJrZXRpbmdcXHJhc2stbW92ZVxccmFzay1tb3ZlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUJBQWlCLEVBQUE7O0FBRnpCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLGdCQUFnQixFQUFBOztBQWZ4QjtJQWlCWSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFlBQVksRUFBQTs7QUFuQnhCO0lBc0JZLGlCQUFpQixFQUFBOztBQXRCN0I7SUF5QlksZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTs7QUExQjNCO0lBNkJZLGNBQWMsRUFBQTs7QUE3QjFCO0VBaUNRLGFBQWEsRUFBQTs7QUFqQ3JCO0lBbUNZLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTs7QUF2Qy9CO0lBMENZLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTs7QUE5QzdCO0VBbURZLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQXRENUI7SUF3RGdCLGtCQUFrQixFQUFBOztBQXhEbEM7RUE2RFEsa0JBQWtCLEVBQUE7O0FBN0QxQjtFQWdFUSxrQkFBa0IsRUFBQTs7QUFoRTFCO0VBb0VJLGNBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vbWFya2V0aW5nL215LWFjdGl2aXRlLXByb2plY3QvbXktbWFya2V0aW5nL3Jhc2stbW92ZS9yYXNrLW1vdmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktZy0xMiB7XHJcbiAgICAudGV4dC1yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAudWktZy00e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLm1hcmtldGluZy1iYXNpYyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMCA3cHggMjBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDdENkQ2O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTlweDsgLy8gYmFja2dyb3VuZC1jb2xvcjogIzg3Y2VmYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxlZnQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDg4JTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJhc2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLnJhc2sxIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNHB4OyAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjODdjZWZhO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmFzazIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGlzdCB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGF7XHJcbiAgICBjb2xvcjogIzAwOTREMiA7ICBcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/rask-move/rask-move.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/rask-move/rask-move.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: RaskMoveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaskMoveComponent", function() { return RaskMoveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _bean_rask_move_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bean/rask-move.bean */ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/rask-move/bean/rask-move.bean.ts");
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
 * 任务流转
 */
var RaskMoveComponent = /** @class */ (function () {
    function RaskMoveComponent(routeInfo, router, cusOperationHttpService, commfunc) {
        var _this = this;
        this.routeInfo = routeInfo;
        this.router = router;
        this.cusOperationHttpService = cusOperationHttpService;
        this.commfunc = commfunc;
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_CUS_DOWNLOAD"]; //下载
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"]; //表格中无数据时显示的内容
        this.raskMoveBean = new _bean_rask_move_bean__WEBPACK_IMPORTED_MODULE_6__["RaskMoveBean"]();
        this.distributeBean = new _bean_rask_move_bean__WEBPACK_IMPORTED_MODULE_6__["DistributeBean"]();
        this.queryUserBean = new _bean_rask_move_bean__WEBPACK_IMPORTED_MODULE_6__["QueryUserBean"]();
        this.pageNum = 1;
        this.countNum = 10;
        this.userList = [];
        this.totalMessage = [];
        this.items = [];
        this.list = [];
        this.msgs = [];
        this.fileList1 = [];
        this.fileList2 = [];
        this.temp1 = {
            tellerId: '',
            tellerName: '',
            customerNum: '',
        };
        this.status = [];
        this.personPage = false;
        this.isPersonNo = false;
        this.isSure = false;
        this.Property = false;
        this.codeValues(); //调用方法，获取全部码值
        this.status = this.code['MarketingStatus'];
        var param = this.routeInfo.snapshot.params['marketingCampaignId'];
        var ob = this.cusOperationHttpService.queryMarketingCampaignById({ marketingCampaignId: param });
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.totalMessage = data;
                _this.fileList1 = data.marketingContentFileList; //营销活动说明
                _this.fileList2 = data.marketingTargetFileList; //营销目标
                _this.marketingProgramId = data.marketingProgramId;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.userId) {
            this.queryUserBean.userLoginId = this.user.userId;
        }
        this.queryUserBean.partyId = this.routeInfo.snapshot.params['userOrgId'];
        this.queryUserBean.postId = '1';
        this.queryUserBean.pageNum = 1;
        this.queryUserBean.countNum = 10;
    }
    //初始化
    RaskMoveComponent.prototype.ngOnInit = function () {
        this.commfunc.clearSession('flagIndex');
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.extParam) {
            this.extParam = this.user.extParam;
            console.log(this.extParam);
        }
        if (this.routeInfo.snapshot.params['workId']) {
            this.raskMoveBean.workId = this.routeInfo.snapshot.params['workId'];
        }
        else if (this.routeInfo.snapshot.params['workEffortId']) {
            this.raskMoveBean.workId = this.routeInfo.snapshot.params['workEffortId'];
        }
        this.raskMoveBean.marketingCampaignId = this.routeInfo.snapshot.params['marketingCampaignId'];
        this.raskMoveBean.countNum = 10;
        this.raskMoveBean.pageNum = 1;
        this.table();
    };
    //营销人员分配客户统计信息查询
    RaskMoveComponent.prototype.table = function () {
        var _this = this;
        var ob = this.cusOperationHttpService.queryMarketingPersonnelDistribute(this.raskMoveBean);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.items = data;
                _this.totalNum = data.totalNum;
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
    //码值
    RaskMoveComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //选择员工
    RaskMoveComponent.prototype.chooseWorker = function (i) {
        console.log(event);
        document.body.style.overflow = 'hidden';
        this.personPage = true;
        this.orgId = this.extParam.orgId;
        this.userInValue = this.orgId;
        this.index = i;
    };
    //员工回调
    RaskMoveComponent.prototype.perInfor = function (item) {
        this.isSure = true;
        document.body.style.overflow = 'auto';
        this.personPage = false;
        if (item.length > 0) {
            for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
                var i = _a[_i];
                if (!i.tellerName) {
                    i.tellerId = item[0].tellerId;
                    i.tellerName = item[0].tellerName;
                    console.log(this.list);
                    return;
                }
            }
            this.list.push(item[0]);
        }
    };
    //确认并提交按钮
    RaskMoveComponent.prototype.comfirm = function () {
        var _this = this;
        this.distributeBean.marketingCampaignId = this.raskMoveBean.marketingCampaignId;
        this.distributeBean.workId = this.raskMoveBean.workId;
        var ch = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        this.distributeBean.userName = ch['userName'];
        var car = [];
        this.list.forEach(function (ind) {
            var cars = {};
            cars['manageId'] = ind.tellerId;
            cars['name'] = ind.tellerName;
            cars['customerNum'] = ind.customerNum;
            car.push(cars);
        });
        this.distributeBean.distributeList = car;
        //联系人
        if (!this.isSure) {
            this.isPersonNo = true;
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择主联系人' });
            return;
        }
        else {
            this.isPersonNo = false;
        }
        var ob = this.cusOperationHttpService.marketingPersonnelDistribute(this.distributeBean);
        ob.subscribe(function (data) {
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
    };
    //点击增加btn
    RaskMoveComponent.prototype.doAdd = function () {
        this.Property = true;
        this.list.push(this.copyObj(this.temp1));
    };
    //删除一行
    RaskMoveComponent.prototype.reduce = function (i) {
        this.list.splice(i, 1);
    };
    /**
    * 对象拷贝
    */
    RaskMoveComponent.prototype.copyObj = function (obj) {
        var temp = {};
        for (var i in obj) {
            temp[i] = obj[i];
        }
        return temp;
    };
    //分页
    RaskMoveComponent.prototype.paginate = function (event) {
        this.raskMoveBean.countNum = event.rows * 1;
        var currentPage = event.page + 1;
        this.raskMoveBean.pageNum = currentPage;
        this.table();
    };
    //点击页面营销方案中的查看详情按钮跳转营销方案详情页面
    RaskMoveComponent.prototype.btnDetail = function () {
        this.router.navigate(['/pages/tzb/custom/marketing/marketing-project/marketing-program-detail', { marketingProgramId: this.marketingProgramId }]);
    };
    //返回上一页
    RaskMoveComponent.prototype.returnBtn = function () {
        setTimeout(function () {
            window.history.go(-1);
        }, 500);
    };
    //下载按钮
    RaskMoveComponent.prototype.down = function (temp) {
        var name = temp.fileName;
        var path = temp.fileUrl;
        open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(name) + "&fileUrl=" + path);
    };
    RaskMoveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rask-move',
            template: __webpack_require__(/*! ./rask-move.component.html */ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/rask-move/rask-move.component.html"),
            styles: [__webpack_require__(/*! ./rask-move.component.scss */ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/rask-move/rask-move.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], RaskMoveComponent);
    return RaskMoveComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/rask-move-detail/rask-move-detail.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/rask-move-detail/rask-move-detail.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n  <div class=\"module\">\r\n    <p-accordion [multiple]=\"true\">\r\n      <p-accordionTab header=\"营销基本要素\" [selected]=\"trueOrFalse\" class=\"clearfix\">\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销活动名称：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.campaignName}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销关键字：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.remark}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销活动时间：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.fromDate}}至{{totalMessage.thruDate}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销监控时间：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.marMonitoringTimeFrom}}至{{totalMessage.marMonitoringTimeTo}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销方案：\r\n            </div>\r\n            <div class=\"ui-g-6\" (click)=\"btnDetail()\" style=\"color:#19b0c8;  cursor: pointer;\">\r\n              {{totalMessage.marketingProgramName}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销活动状态：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.statusId |codeValuePie:status}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销活动说明：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.marketingContentDes}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-6\">\r\n            <!-- <div *ngIf=\"fileList1.length>0\"> -->\r\n            <p-dataTable [value]=\"fileList1\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n              <p-column field=\"fileName\" header=\"附件名称\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n                  <span>{{col.fileName}}</span>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"操作\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)=\"down(col)\" class=\"tabelDownloadIco\" >下载</span> \r\n                </ng-template>\r\n              </p-column>\r\n            </p-dataTable>\r\n            <!-- </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4\">\r\n              营销目标：\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n              {{totalMessage.marketingTargetDes}}\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-6 \">\r\n            <!-- <div *ngIf=\"fileList2.length>0\"> -->\r\n            <p-dataTable [value]=\"fileList2\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n              <p-column field=\"fileName\" header=\"附件名称\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n                  <span>{{col.fileName}}</span>\r\n                </ng-template>\r\n              </p-column>\r\n              <p-column header=\"操作\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)=\"down(col)\" class=\"tabelDownloadIco\" >下载</span> \r\n                </ng-template>\r\n              </p-column>\r\n            </p-dataTable>\r\n            <!-- </div> -->\r\n          </div>\r\n        </div>\r\n      </p-accordionTab>\r\n    </p-accordion>\r\n  </div>\r\n  <div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"'营销流转任务'\"></header-title>\r\n    <div class=\"ui-g-12 rask\">\r\n      <div class=\"rask1\">营销流转任务</div>\r\n      <div class=\"rask2\">\r\n        <span *ngIf=\"items.customerNum != 0\">本次营销活动下还有{{items.customerNum}}名客户未分配</span>\r\n        <span *ngIf=\"items.customerNum == 0\">未有未分配客户</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <header-title [Info]=\"'营销人员分配'\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12 table\">\r\n      <p-dataTable [value]=\"items.distributeInformationList\" [emptyMessage]=\"tabMesg\" scrollable=\"true\" scrollHeight=\"350px\" scrollWidth=\"'100%'\">\r\n        <p-headerColumnGroup>\r\n          <p-row>\r\n            <p-column header=\"用户ID\" colspan=\"1\"></p-column>\r\n            <p-column header=\"姓名\" colspan=\"1\"></p-column>\r\n            <p-column header=\"客户数\" colspan=\"1\"></p-column>\r\n            <p-column header=\"总资产\" colspan=\"1\"></p-column>\r\n            <p-column header=\"户均资产\" colspan=\"1\"></p-column>\r\n            <p-column header=\"总负债\" colspan=\"1\"></p-column>\r\n            <p-column header=\"户均负债\" colspan=\"1\"></p-column>\r\n          </p-row>\r\n        </p-headerColumnGroup>\r\n        <p-column field=\"manageId\"></p-column>\r\n        <p-column field=\"name\"></p-column>\r\n        <p-column field=\"customerNum\"></p-column>\r\n        <p-column field=\"propertyTotal\"></p-column>\r\n        <p-column field=\"propertyTotalAverage\"></p-column>\r\n        <p-column field=\"propertyTotalAverage\"></p-column>\r\n        <p-column field=\"liabilitiesTotalAverage\"></p-column>\r\n        <p-footerColumnGroup>\r\n          <p-row>\r\n            <p-column footer=\"无主联系人\"></p-column>\r\n            <p-column>\r\n              <ng-template pTemplate=\"footer\">\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column>\r\n              <ng-template pTemplate=\"footer\">\r\n                <span>{{items.customerNum}}</span>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column>\r\n              <ng-template pTemplate=\"footer\">\r\n                <span>{{items.propertyTotal}}</span>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column>\r\n              <ng-template pTemplate=\"footer\">\r\n                <span>{{items.propertyTotalAverage}}</span>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column>\r\n              <ng-template pTemplate=\"footer\">\r\n                <span>{{items.liabilitiesTotal}}</span>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column>\r\n              <ng-template pTemplate=\"footer\">\r\n                <span>{{items.liabilitiesTotalAverage}}</span>\r\n              </ng-template>\r\n            </p-column>\r\n          </p-row>\r\n        </p-footerColumnGroup>\r\n      </p-dataTable>\r\n      <p-paginator rows=\"{{raskMoveBean.countNum}}\" totalRecords=\"{{totalNum}}\" (onPageChange)=\"paginate($event)\" [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"text-align:center\">\r\n      <button pButton type=\"button\" label=\"返回\" (click)=\"returnBtn()\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/rask-move-detail/rask-move-detail.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/rask-move-detail/rask-move-detail.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-12 .text-right {\n  text-align: right; }\n\n.ui-g-12 .ui-g-4 {\n  text-align: right; }\n\n.ui-g-12 .marketing-basic {\n  display: flex;\n  width: 100%;\n  height: 34px;\n  background-color: #f2f2f2;\n  padding: 7px 0 7px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #D7D6D6;\n  margin-top: 20px; }\n\n.ui-g-12 .marketing-basic .line {\n    display: inline-block;\n    width: 5px;\n    height: 19px; }\n\n.ui-g-12 .marketing-basic .left {\n    margin-left: 10px; }\n\n.ui-g-12 .marketing-basic .right {\n    margin-left: 88%;\n    cursor: pointer; }\n\n.ui-g-12 .marketing-basic .active {\n    display: block; }\n\n.ui-g-12 .rask {\n  display: flex; }\n\n.ui-g-12 .rask .rask1 {\n    width: 10%;\n    height: 34px;\n    text-align: center;\n    line-height: 34px;\n    background: #19b0c8; }\n\n.ui-g-12 .rask .rask2 {\n    height: 34px;\n    width: 90%;\n    background: #fff;\n    line-height: 34px;\n    padding-left: 5px; }\n\n.ui-g-12 .list div {\n  height: 34px;\n  width: 100%;\n  line-height: 34px;\n  background: #fff; }\n\n.ui-g-12 .list div span {\n    padding-left: 20px; }\n\n.ui-g-12 .btn {\n  text-align: center; }\n\n.ui-g-12 .table {\n  text-align: center; }\n\n.ui-g-12 a {\n  color: #0094D2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvbXktYWN0aXZpdGUtcHJvamVjdC9yYXNrLW1vdmUtZGV0YWlsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcbWFya2V0aW5nXFxteS1hY3Rpdml0ZS1wcm9qZWN0XFxyYXNrLW1vdmUtZGV0YWlsXFxyYXNrLW1vdmUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsaUJBQWlCLEVBQUE7O0FBRnpCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLGdCQUFnQixFQUFBOztBQWZ4QjtJQWlCWSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFlBQVksRUFBQTs7QUFuQnhCO0lBc0JZLGlCQUFpQixFQUFBOztBQXRCN0I7SUF5QlksZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTs7QUExQjNCO0lBNkJZLGNBQWMsRUFBQTs7QUE3QjFCO0VBaUNRLGFBQWEsRUFBQTs7QUFqQ3JCO0lBbUNZLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTs7QUF2Qy9CO0lBMENZLFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTs7QUE5QzdCO0VBbURZLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQXRENUI7SUF3RGdCLGtCQUFrQixFQUFBOztBQXhEbEM7RUE2RFEsa0JBQWtCLEVBQUE7O0FBN0QxQjtFQWdFUSxrQkFBa0IsRUFBQTs7QUFoRTFCO0VBbUVJLGNBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vbWFya2V0aW5nL215LWFjdGl2aXRlLXByb2plY3QvcmFzay1tb3ZlLWRldGFpbC9yYXNrLW1vdmUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLWctMTIge1xyXG4gICAgLnRleHQtcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnVpLWctNHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5tYXJrZXRpbmctYmFzaWMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgICAgcGFkZGluZzogN3B4IDAgN3B4IDIwcHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Q3RDZENjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE5cHg7IC8vIGJhY2tncm91bmQtY29sb3I6ICM4N2NlZmE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZWZ0IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4OCU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yYXNrIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5yYXNrMSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzRweDsgLy8gYmFja2dyb3VuZC1jb2xvcjogIzg3Y2VmYTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzE5YjBjODtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJhc2syIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxpc3Qge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50YWJsZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBhe1xyXG4gICAgY29sb3I6ICMwMDk0RDIgOyAgXHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/my-activite-project/rask-move-detail/rask-move-detail.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/my-activite-project/rask-move-detail/rask-move-detail.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: RaskMoveDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaskMoveDetailComponent", function() { return RaskMoveDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _my_marketing_rask_move_bean_rask_move_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../my-marketing/rask-move/bean/rask-move.bean */ "./src/app/pages/tzb/custom/marketing/my-activite-project/my-marketing/rask-move/bean/rask-move.bean.ts");
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
 * 任务流转详情
 */
var RaskMoveDetailComponent = /** @class */ (function () {
    function RaskMoveDetailComponent(routeInfo, route, cusOperationHttpService, commfunc) {
        var _this = this;
        this.routeInfo = routeInfo;
        this.route = route;
        this.cusOperationHttpService = cusOperationHttpService;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"]; //表格中无数据时显示的内容
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_CUS_DOWNLOAD"]; //下载
        this.raskMoveBean = new _my_marketing_rask_move_bean_rask_move_bean__WEBPACK_IMPORTED_MODULE_6__["RaskMoveBean"]();
        this.queryUserBean = new _my_marketing_rask_move_bean_rask_move_bean__WEBPACK_IMPORTED_MODULE_6__["QueryUserBean"]();
        this.Property = false;
        this.pageSize = 10;
        this.userList = [];
        this.item = [];
        this.items = [];
        this.list = [{}];
        this.msgs = [];
        this.temp1 = {
            manageId: '',
            name: '',
            customerNum: '',
        };
        this.totalMessage = [];
        this.fileList1 = [];
        this.fileList2 = [];
        this.status = [];
        this.codeValues(); //调用方法，获取全部码值
        this.status = this.code['MarketingStatus'];
        //营销详情
        var param = this.routeInfo.snapshot.params['marketingCampaignId'];
        var ob = this.cusOperationHttpService.queryMarketingCampaignById({ marketingCampaignId: param });
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.totalMessage = data;
                _this.marketingProgramId = data.marketingProgramId;
                _this.fileList1 = data.marketingContentFileList; //营销活动说明
                _this.fileList2 = data.marketingTargetFileList; //营销目标
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.userId) {
            this.queryUserBean.userLoginId = this.user.userId;
        }
        this.queryUserBean.partyId = this.routeInfo.snapshot.params['userOrgId'];
        this.queryUserBean.postId = '1';
        this.queryUserBean.pageNum = 1;
        this.queryUserBean.countNum = 10;
    }
    RaskMoveDetailComponent.prototype.ngOnInit = function () {
        this.commfunc.clearSession('flagIndex');
        this.raskMoveBean.marketingCampaignId = this.routeInfo.snapshot.params['marketingCampaignId'];
        this.raskMoveBean.workId = this.routeInfo.snapshot.params['workId'];
        this.raskMoveBean.countNum = 10;
        this.raskMoveBean.pageNum = 1;
        this.table();
    };
    //码值
    RaskMoveDetailComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //营销人员分配
    RaskMoveDetailComponent.prototype.table = function () {
        var _this = this;
        var ob = this.cusOperationHttpService.queryMarketingPersonnelDistribute(this.raskMoveBean);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.items = data;
                _this.totalNum = data.totalNum;
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
    //分页
    RaskMoveDetailComponent.prototype.paginate = function (event) {
        this.raskMoveBean.countNum = event.rows * 1;
        var currentPage = event.page + 1;
        this.raskMoveBean.pageNum = currentPage;
        this.table();
    };
    //点击页面营销方案中的查看详情按钮跳转营销方案详情页面
    RaskMoveDetailComponent.prototype.btnDetail = function () {
        this.route.navigate(['/pages/tzb/custom/marketing/marketing-project/marketing-program-detail', { marketingProgramId: this.marketingProgramId }]);
    };
    RaskMoveDetailComponent.prototype.returnBtn = function () {
        setTimeout(function () {
            window.history.go(-1);
        }, 500);
    };
    //下载按钮
    RaskMoveDetailComponent.prototype.down = function (temp) {
        var name = temp.fileName;
        var path = temp.fileUrl;
        open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(name) + "&fileUrl=" + path);
    };
    RaskMoveDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rask-move-detail',
            template: __webpack_require__(/*! ./rask-move-detail.component.html */ "./src/app/pages/tzb/custom/marketing/my-activite-project/rask-move-detail/rask-move-detail.component.html"),
            styles: [__webpack_require__(/*! ./rask-move-detail.component.scss */ "./src/app/pages/tzb/custom/marketing/my-activite-project/rask-move-detail/rask-move-detail.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], RaskMoveDetailComponent);
    return RaskMoveDetailComponent;
}());



/***/ })

}]);
//# sourceMappingURL=my-activite-project-my-activite-project-module.js.map