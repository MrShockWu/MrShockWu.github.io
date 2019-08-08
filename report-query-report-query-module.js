(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-query-report-query-module"],{

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/exception-end-report/exception-end-report.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/exception-end-report/exception-end-report.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'异常结束流程报表查询'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">大类编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryExceptionEndReport.bigClassNo\">\r\n\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">小类编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryExceptionEndReport.littleClassNo\">\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">小类编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryExceptionEndReport.littleClassName\">\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">流程：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryExceptionEndReport.processCode\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <div>\r\n      <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst(dt)\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt [value]=\"exceptionEndReportList\" emptyMessage=\"暂无数据\" [lazy]=\"true\" (onLazyLoad)=\"query(dt)\" [rows]=\"paginatorInstance.rowNum\"\r\n      [(totalRecords)]=\"total\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[10,20,30]\" scrollable=\"true\" scrollWidth=\"'100%'\"\r\n      [style]=\"{'text-align':'center'}\">\r\n      <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processName\" header=\"流程名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processName\"> {{item.processName}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customSystemCode\" header=\"流程编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customSystemCode\">{{item.customSystemCode}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"systemCode\" header=\"系统编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.systemCode\">{{item.tasksystemCodeCode}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"doEndProcessNums\" header=\"处理异常结束实例数\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.doEndProcessNums\">{{item.doEndProcessNums}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"timeEndProcessNums\" header=\"超时异常结束实例数\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.timeEndProcessNums\">{{item.timeEndProcessNums}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n<p-growl [value]=\"msg\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/exception-end-report/exception-end-report.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/exception-end-report/exception-end-report.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n.disable-resize {\n  resize: none; }\n\n:host/deep/ .ui-dialog input, :host/deep/ .ui-dialog textarea {\n  width: 30% !important; }\n\n:host/deep/ .ui-dialog .btn {\n  text-align: center; }\n\n:host/deep/ .ui-dialog .btn button {\n    margin: 30px; }\n\n:host/deep/ .ui-dialog label {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvZXhjZXB0aW9uLWVuZC1yZXBvcnQvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6Ylxcd29ya2Zsb3dcXGFjdGl2aXRpLXdvcmstZmxvd1xccmVwb3J0LXF1ZXJ5XFxleGNlcHRpb24tZW5kLXJlcG9ydFxcZXhjZXB0aW9uLWVuZC1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFTSxnQkFBZTtFQUNmLG1CQUFrQixFQUFBOztBQUh4QjtFQU1NLG1CQUFrQixFQUFBOztBQU54QjtFQVNNLHFCQUFxQixFQUFBOztBQU0zQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHFCQUFxQixFQUFBOztBQUR2QjtJQUdNLHNCQUFzQixFQUFBOztBQUg1QjtJQU1NLFlBQVksRUFBQTs7QUFLbEI7RUFDRSxXQUFVLEVBQUE7O0FBR1o7RUFDRSxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRyx3QkFBd0I7RUFDeEIsdUJBQXVCLEVBQUE7O0FBRzFCO0VBQ0cscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdkO0VBQ0UsWUFDRixFQUFBOztBQUVBO0VBRUkscUJBQXFCLEVBQUE7O0FBRnpCO0VBS0ksa0JBQWtCLEVBQUE7O0FBTHRCO0lBT1EsWUFBWSxFQUFBOztBQVBwQjtFQVdJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFMWDtJQVFJLFdBQVcsRUFBQTs7QUFJZjtFQUVJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvZXhjZXB0aW9uLWVuZC1yZXBvcnQvZXhjZXB0aW9uLWVuZC1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1vZHVsZXtcclxuICAucm93TG9jYXRvbntcclxuICAgICAgbWFyZ2luLXRvcDo2MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgfVxyXG4gIC5idG5Mb2NhdGlvbntcclxuICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gIH1cclxuICBpbnB1dHtcclxuICAgICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZHJvcGRvd257XHJcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktY2FsZW5kYXJ7XHJcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIC51aS1kYXRlcGlja2Vye1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpbnB1dHtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxufSBcclxuXHJcblxyXG5zcGFuLnRlbHtcclxuICBjb2xvcjojZjAwO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktY2VsbC1kYXRhe1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvd3tcclxuICAgd2lkdGg6IDEwMDBweCAhaW1wb3J0YW50O1xyXG4gICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJpZ2h0TGF5b3V0e1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIHdpZHRoOiAxNiU7XHJcbiAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmRpc2FibGUtcmVzaXple1xyXG4gIHJlc2l6ZTogbm9uZVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nIHtcclxuICBpbnB1dCx0ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxhYmVse1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXNwaW5uZXIgLnVpLXNwaW5uZXItYnV0dG9ue1xyXG4gIGhlaWdodDogNDklICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgLmZhLWNhcmV0LWRvd24ge1xyXG4gICAgdG9wOiAwLjI1ZW07XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3Bpbm5lci1kb3duIC5mYS1jYXJldC1kb3duIHtcclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcImtleWJvYXJkX2Fycm93X2Rvd25cIjtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/exception-end-report/exception-end-report.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/exception-end-report/exception-end-report.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ExceptionEndReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionEndReportComponent", function() { return ExceptionEndReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _report_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../report-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.service.ts");
/* harmony import */ var _report_query_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../report-query-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExceptionEndReportComponent = /** @class */ (function () {
    function ExceptionEndReportComponent(messageService, confirmationService, reportQueryService) {
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.reportQueryService = reportQueryService;
        this.msg = [];
        // 任务处理时间报表
        this.exceptionEndReportList = [];
        // 查询任务处理时间报表
        this.queryExceptionEndReport = {
            bigClassNo: '',
            littleClassNo: '',
            littleClassName: '',
            processCode: ''
        };
        // 分页实例
        this.paginatorInstance = new _report_query_model__WEBPACK_IMPORTED_MODULE_6__["ExceptionEndReportModel"]();
    }
    ExceptionEndReportComponent.prototype.ngOnInit = function () {
        this.paginatorInstance.rowNum = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].rowNum;
        this.paginatorInstance.startRow = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].startRow;
    };
    // 按照搜索条件查询
    ExceptionEndReportComponent.prototype.queryFirst = function (table) {
        table.first = 0;
        this.query(table);
    };
    ExceptionEndReportComponent.prototype.query = function (table) {
        table.first = table.first || 0;
        table.rows = table.rows || parseInt(_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].rowNum, 10);
        // 每页显示的条数
        this.paginatorInstance.rowNum = table.rows + '';
        // 当前页
        this.paginatorInstance.startRow = (table.first / table.rows) + 1 + '';
        this.querTimeoutProcessReportList(this.queryExceptionEndReport.bigClassNo, this.queryExceptionEndReport.littleClassNo, this.queryExceptionEndReport.littleClassName, this.queryExceptionEndReport.processCode);
    };
    // 查询重置
    ExceptionEndReportComponent.prototype.reset = function () {
        this.queryExceptionEndReport = {
            bigClassNo: '',
            littleClassNo: '',
            littleClassName: '',
            processCode: ''
        };
    };
    // 查询任务处理时间报表
    ExceptionEndReportComponent.prototype.querTimeoutProcessReportList = function (itemType, itemNode, itemName, processCode) {
        var _this = this;
        var bodyParams = {
            itemType: itemType,
            itemNode: itemNode,
            itemName: itemName,
            processCode: processCode,
            pageRows: parseInt(this.paginatorInstance.rowNum, 10),
            curPage: parseInt(this.paginatorInstance.startRow, 10)
        };
        this.reportQueryService.exceptionEndReport(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.exceptionEndReportList = data.pageData[0].result;
                _this.exceptionEndReportList && _this.exceptionEndReportList.length && _this.exceptionEndReportList.map(function (item) {
                    item.customSystemCode = item.processCode.split(":")[0];
                });
                _this.total = data.pageData[0].totalRows;
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    ExceptionEndReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exception-end-report',
            template: __webpack_require__(/*! ./exception-end-report.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/exception-end-report/exception-end-report.component.html"),
            styles: [__webpack_require__(/*! ./exception-end-report.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/exception-end-report/exception-end-report.component.scss")],
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _report_query_service__WEBPACK_IMPORTED_MODULE_5__["ReportQueryService"]])
    ], ExceptionEndReportComponent);
    return ExceptionEndReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/personnel-performance-report/personnel-performance-report.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/personnel-performance-report/personnel-performance-report.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'处理人员绩效报表查询'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">起始时间：</label>\r\n      <p-calendar [(ngModel)]=\"queryStartTime\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showSeconds]=\"true\" [showTime]=\"true\"\r\n        [showIcon]=\"true\" showButtonBar=\"true\"></p-calendar>\r\n\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">截止时间：</label>\r\n      <p-calendar [(ngModel)]=\"queryEndTime\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showSeconds]=\"true\" [showTime]=\"true\"\r\n        [showIcon]=\"true\" showButtonBar=\"true\"></p-calendar>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <div>\r\n      <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst(dt)\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt [value]=\"processHandleTimeReportList\" emptyMessage=\"暂无数据\" [lazy]=\"true\" (onLazyLoad)=\"query(dt)\" [rows]=\"paginatorInstance.rowNum\"\r\n      [(totalRecords)]=\"total\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[10,20,30]\" scrollable=\"true\" scrollWidth=\"'100%'\"\r\n      [style]=\"{'text-align':'center'}\">\r\n      <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"userID\" header=\"用户ID\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.userID\"> {{item.userID}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"taskNums\" header=\"处理任务数\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskNums\">{{item.taskNums}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"taskOutNums\" header=\"超时处理任务数\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskOutNums\">{{item.taskOutNums}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"taskDoTime\" header=\"任务处理平均耗时(毫秒)\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskDoTime\">{{item.taskDoTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n<p-growl [value]=\"msg\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/personnel-performance-report/personnel-performance-report.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/personnel-performance-report/personnel-performance-report.component.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n.disable-resize {\n  resize: none; }\n\n:host/deep/ .ui-dialog input, :host/deep/ .ui-dialog textarea {\n  width: 30% !important; }\n\n:host/deep/ .ui-dialog .btn {\n  text-align: center; }\n\n:host/deep/ .ui-dialog .btn button {\n    margin: 30px; }\n\n:host/deep/ .ui-dialog label {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvcGVyc29ubmVsLXBlcmZvcm1hbmNlLXJlcG9ydC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFx3b3JrZmxvd1xcYWN0aXZpdGktd29yay1mbG93XFxyZXBvcnQtcXVlcnlcXHBlcnNvbm5lbC1wZXJmb3JtYW5jZS1yZXBvcnRcXHBlcnNvbm5lbC1wZXJmb3JtYW5jZS1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFTSxnQkFBZTtFQUNmLG1CQUFrQixFQUFBOztBQUh4QjtFQU1NLG1CQUFrQixFQUFBOztBQU54QjtFQVNNLHFCQUFxQixFQUFBOztBQU0zQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHFCQUFxQixFQUFBOztBQUR2QjtJQUdNLHNCQUFzQixFQUFBOztBQUg1QjtJQU1NLFlBQVksRUFBQTs7QUFLbEI7RUFDRSxXQUFVLEVBQUE7O0FBR1o7RUFDRSxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRyx3QkFBd0I7RUFDeEIsdUJBQXVCLEVBQUE7O0FBRzFCO0VBQ0cscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdkO0VBQ0UsWUFDRixFQUFBOztBQUVBO0VBRUkscUJBQXFCLEVBQUE7O0FBRnpCO0VBS0ksa0JBQWtCLEVBQUE7O0FBTHRCO0lBT1EsWUFBWSxFQUFBOztBQVBwQjtFQVdJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFMWDtJQVFJLFdBQVcsRUFBQTs7QUFJZjtFQUVJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvcGVyc29ubmVsLXBlcmZvcm1hbmNlLXJlcG9ydC9wZXJzb25uZWwtcGVyZm9ybWFuY2UtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tb2R1bGV7XHJcbiAgLnJvd0xvY2F0b257XHJcbiAgICAgIG1hcmdpbi10b3A6NjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG4gIH1cclxuICAuYnRuTG9jYXRpb257XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3due1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFye1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICAudWktZGF0ZXBpY2tlcntcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICB9XHJcbn0gXHJcblxyXG5cclxuc3Bhbi50ZWx7XHJcbiAgY29sb3I6I2YwMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YXtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3d7XHJcbiAgIHdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcclxuICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yaWdodExheW91dHtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICB3aWR0aDogMTYlO1xyXG4gICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5kaXNhYmxlLXJlc2l6ZXtcclxuICByZXNpemU6IG5vbmVcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyB7XHJcbiAgaW5wdXQsdGV4dGFyZWF7XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBsYWJlbHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zcGlubmVyIC51aS1zcGlubmVyLWJ1dHRvbntcclxuICBoZWlnaHQ6IDQ5JSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWluLXdpZHRoOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIC5mYS1jYXJldC1kb3duIHtcclxuICAgIHRvcDogMC4yNWVtO1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXNwaW5uZXItZG93biAuZmEtY2FyZXQtZG93biB7XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJrZXlib2FyZF9hcnJvd19kb3duXCI7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/personnel-performance-report/personnel-performance-report.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/personnel-performance-report/personnel-performance-report.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: PersonnelPerformanceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonnelPerformanceReportComponent", function() { return PersonnelPerformanceReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _report_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../report-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.service.ts");
/* harmony import */ var _report_query_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../report-query-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query-model.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PersonnelPerformanceReportComponent = /** @class */ (function () {
    function PersonnelPerformanceReportComponent(messageService, confirmationService, reportQueryService, commfunc) {
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.reportQueryService = reportQueryService;
        this.commfunc = commfunc;
        this.msg = [];
        // 任务处理时间报表
        this.processHandleTimeReportList = [];
        this.CALENDAR_CN = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        // 分页实例
        this.paginatorInstance = new _report_query_model__WEBPACK_IMPORTED_MODULE_6__["PersonnelPerfomanceReportModel"]();
    }
    PersonnelPerformanceReportComponent.prototype.ngOnInit = function () {
        this.loginSys = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        this.paginatorInstance.rowNum = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].rowNum;
        this.paginatorInstance.startRow = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].startRow;
    };
    // 按照搜索条件查询
    PersonnelPerformanceReportComponent.prototype.queryFirst = function (table) {
        table.first = 0;
        this.query(table);
    };
    PersonnelPerformanceReportComponent.prototype.query = function (table) {
        table.first = table.first || 0;
        table.rows = table.rows || parseInt(_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].rowNum, 10);
        // 每页显示的条数
        this.paginatorInstance.rowNum = table.rows + '';
        // 当前页
        this.paginatorInstance.startRow = (table.first / table.rows) + 1 + '';
        this.queryProcessTimeReportList(this.queryStartTime, this.queryEndTime);
    };
    // 查询重置
    PersonnelPerformanceReportComponent.prototype.reset = function () {
        this.queryStartTime = null;
        this.queryEndTime = null;
    };
    // 查询任务处理时间报表
    PersonnelPerformanceReportComponent.prototype.queryProcessTimeReportList = function (startTime, endTime) {
        var _this = this;
        var beginDate = startTime == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(startTime, _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var endDate = endTime == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(endTime, _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var bodyParams = {
            userID: this.loginSys,
            beginDate: beginDate,
            endDate: endDate,
            pageRows: parseInt(this.paginatorInstance.rowNum, 10),
            curPage: parseInt(this.paginatorInstance.startRow, 10)
        };
        this.reportQueryService.userDoReport(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.processHandleTimeReportList = data.pageData[0].result;
                _this.total = data.pageData[0].totalRows;
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    PersonnelPerformanceReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personnel-performance-report',
            template: __webpack_require__(/*! ./personnel-performance-report.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/personnel-performance-report/personnel-performance-report.component.html"),
            styles: [__webpack_require__(/*! ./personnel-performance-report.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/personnel-performance-report/personnel-performance-report.component.scss")],
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _report_query_service__WEBPACK_IMPORTED_MODULE_5__["ReportQueryService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"]])
    ], PersonnelPerformanceReportComponent);
    return PersonnelPerformanceReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-org-report/process-org-report.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-org-report/process-org-report.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'流程处理报表(机构)查询'\"></header-title>\r\n  <form [formGroup]=\"processHandleForm\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <label class=\"inputLayout\">流程名称：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"processName\" formControlName=\"processName\">\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <label appValidation class=\"rightLayout\">发起人机构：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"orgObj\" formControlName=\"orgObjName\" placeholder=\"必输项\">\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <label appValidation class=\"inputLayout\">流程发起开始时间：</label>\r\n        <p-calendar [(ngModel)]=\"queryStartTimeStart\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n          [showIcon]=\"true\" showButtonBar=\"true\" placeholder=\"必选项\" formControlName=\"processStartName\"></p-calendar>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <label appValidation class=\"rightLayout\">流程发起截止时间：</label>\r\n        <p-calendar [(ngModel)]=\"queryStartTimeEnd\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n          [showIcon]=\"true\" showButtonBar=\"true\" placeholder=\"必选项\" formControlName=\"processEndName\"></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <div>\r\n      <button pButton type=\"button\" label=\"查询\" [disabled]=\"!processHandleForm.valid\" (click)=\"query()\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n  </div>\r\n  <span class=\"icoColor\" style=\"margin-left:94%;\" (click)=\"dt.exportCSV()\">导出</span>\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt exportFilename=\"流程处理报表(机构)\" [value]=\"processHandleReportList\" emptyMessage=\"暂无数据\" scrollable=\"true\" [style]=\"{'text-align':'center'}\">\r\n      <p-headerColumnGroup>\r\n        <p-row>\r\n          <p-column header=\"序号\" rowspan=\"2\" [style]=\"{'width':'70px'}\"></p-column>\r\n          <p-column header=\"机构名称\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"流程名称\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"未完成数量\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"已完成数量\" colspan=\"4\"></p-column>\r\n          <p-column header=\"平均处理时长(h)\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"正常完成平均时长(h)\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"超时完成平均时长(h)\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"流程处理时长(t)\" colspan=\"6\" [style]=\"{'width':'620px'}\"></p-column>\r\n        </p-row>\r\n        <p-row>\r\n          <p-column header=\"正常结束\"></p-column>\r\n          <p-column header=\"提前结束\"></p-column>\r\n          <p-column header=\"超时结束\"></p-column>\r\n          <p-column header=\"手动终止\"></p-column>\r\n\r\n          <p-column header=\"t<=4h\"></p-column>\r\n          <p-column header=\"4h<t<=8h\"></p-column>\r\n          <p-column header=\"8h<t<=12h\"></p-column>\r\n          <p-column header=\"12h<t<=24h\"></p-column>\r\n          <p-column header=\"24h<t<=48h\"></p-column>\r\n          <p-column header=\"t>48h\"></p-column>\r\n        </p-row>\r\n      </p-headerColumnGroup>\r\n\r\n      <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customOrgObj\" header=\"机构名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customOrgObj\">{{item.customOrgObj}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processName\" header=\"流程名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processName\">{{item.processName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"undoCount\" header=\"未完成数量\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.undoCount\">{{item.undoCount}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"normalEndCount\" header=\"正常结束\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.normalEndCount\">{{item.normalEndCount}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"earlyEndCount\" header=\"提前结束\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.earlyEndCount\">{{item.earlyEndCount}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"timeoutEndCount\" header=\"超时结束\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.timeoutEndCount\">{{item.timeoutEndCount}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"manualEndCount\" header=\"手动终止\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.manualEndCount\">{{item.manualEndCount}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"avgDoTime\" header=\"平均处理时长\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.avgDoTime\">{{item.avgDoTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"nomalAvgDoTime\" header=\"正常完成平均时长\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.nomalAvgDoTime\">{{item.nomalAvgDoTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"timOutAvgDoTime\" header=\"超时完成平均时长\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.timOutAvgDoTime\">{{item.timOutAvgDoTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedata4\" header=\"t<=4h\" [style]=\"{'width':'80px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedata4\">{{item.duedata4}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedata4t8\" header=\"4h<t<=8h\" [style]=\"{'width':'110px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedata4t8\">{{item.duedata4t8}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedata8t12\" header=\"8h<t<=12h\" [style]=\"{'width':'110px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedata8t12\">{{item.duedata8t12}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedata12t24\" header=\"12h<t<=24h\" [style]=\"{'width':'110px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedata12t24\">{{item.duedata12t24}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedata24t48\" header=\"24h<t<=48h\" [style]=\"{'width':'110px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedata24t48\">{{item.duedata24t48}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedatat48\" header=\"t>48h\" [style]=\"{'width':'80px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedatat48\">{{item.duedatat48}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n<p-growl [value]=\"msg\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-org-report/process-org-report.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-org-report/process-org-report.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 17%;\n  text-align: right;\n  color: #000; }\n\n.disable-resize {\n  resize: none; }\n\n:host/deep/ .ui-dialog input, :host/deep/ .ui-dialog textarea {\n  width: 30% !important; }\n\n:host/deep/ .ui-dialog .btn {\n  text-align: center; }\n\n:host/deep/ .ui-dialog .btn button {\n    margin: 30px; }\n\n:host/deep/ .ui-dialog label {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvcHJvY2Vzcy1vcmctcmVwb3J0L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHdvcmtmbG93XFxhY3Rpdml0aS13b3JrLWZsb3dcXHJlcG9ydC1xdWVyeVxccHJvY2Vzcy1vcmctcmVwb3J0XFxwcm9jZXNzLW9yZy1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFTSxnQkFBZTtFQUNmLG1CQUFrQixFQUFBOztBQUh4QjtFQU1NLG1CQUFrQixFQUFBOztBQU54QjtFQVNNLHFCQUFxQixFQUFBOztBQU0zQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHFCQUFxQixFQUFBOztBQUR2QjtJQUdNLHNCQUFzQixFQUFBOztBQUg1QjtJQU1NLFlBQVksRUFBQTs7QUFLbEI7RUFDRSxXQUFVLEVBQUE7O0FBR1o7RUFDRSxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRyx3QkFBd0I7RUFDeEIsdUJBQXVCLEVBQUE7O0FBRzFCO0VBQ0cscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdkO0VBQ0UsWUFDRixFQUFBOztBQUVBO0VBRUkscUJBQXFCLEVBQUE7O0FBRnpCO0VBS0ksa0JBQWtCLEVBQUE7O0FBTHRCO0lBT1EsWUFBWSxFQUFBOztBQVBwQjtFQVdJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFMWDtJQVFJLFdBQVcsRUFBQTs7QUFJZjtFQUVJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvcHJvY2Vzcy1vcmctcmVwb3J0L3Byb2Nlc3Mtb3JnLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubW9kdWxle1xyXG4gIC5yb3dMb2NhdG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOjYwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NDBweDtcclxuICB9XHJcbiAgLmJ0bkxvY2F0aW9ue1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93bntcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jYWxlbmRhcntcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgLnVpLWRhdGVwaWNrZXJ7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG59IFxyXG5cclxuXHJcbnNwYW4udGVse1xyXG4gIGNvbG9yOiNmMDA7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGF7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93e1xyXG4gICB3aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmlnaHRMYXlvdXR7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgd2lkdGg6IDE3JTtcclxuICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uZGlzYWJsZS1yZXNpemV7XHJcbiAgcmVzaXplOiBub25lXHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cge1xyXG4gIGlucHV0LHRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgIH1cclxuICB9XHJcbiAgbGFiZWx7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3Bpbm5lciAudWktc3Bpbm5lci1idXR0b257XHJcbiAgaGVpZ2h0OiA0OSUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICAuZmEtY2FyZXQtZG93biB7XHJcbiAgICB0b3A6IDAuMjVlbTtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zcGlubmVyLWRvd24gLmZhLWNhcmV0LWRvd24ge1xyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwia2V5Ym9hcmRfYXJyb3dfZG93blwiO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-org-report/process-org-report.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-org-report/process-org-report.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ProcessOrgReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessOrgReportComponent", function() { return ProcessOrgReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _report_query_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../report-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProcessOrgReportComponent = /** @class */ (function () {
    function ProcessOrgReportComponent(fb, messageService, confirmationService, reportQueryService) {
        this.fb = fb;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.reportQueryService = reportQueryService;
        this.msg = [];
        // 流程处理报表列表
        this.processHandleReportList = [];
        this.CALENDAR_CN = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.createValidators();
    }
    ProcessOrgReportComponent.prototype.createValidators = function () {
        this.processHandleForm = this.fb.group({
            'processName': [''],
            'processStartName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'processEndName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'orgObjName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    ProcessOrgReportComponent.prototype.ngOnInit = function () {
        this.queryStartTimeStart = Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthStartDate"])();
        this.queryStartTimeEnd = Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthEndDate"])();
    };
    ProcessOrgReportComponent.prototype.query = function () {
        this.querProcessHandleReportList(this.queryStartTimeStart, this.queryStartTimeEnd, this.processName, this.orgObj);
    };
    // 查询重置
    ProcessOrgReportComponent.prototype.reset = function () {
        this.queryStartTimeStart = Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthStartDate"])();
        this.queryStartTimeEnd = Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthEndDate"])();
        this.processName = null;
        this.orgObj = null;
    };
    // 查询流程处理报表
    ProcessOrgReportComponent.prototype.querProcessHandleReportList = function (TimeBegin, TimeEnd, processName, orgObj) {
        var _this = this;
        var createTimeBegin = TimeBegin ? Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(TimeBegin, _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["FULL_HORIZONTAL_DATE_FORMAT"]) : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthStartDate"])();
        ;
        var createTimeEnd = TimeEnd ? Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(TimeEnd, _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["FULL_HORIZONTAL_DATE_FORMAT"]) : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthEndDate"])();
        var bodyParams = {
            createTimeBegin: createTimeBegin,
            createTimeEnd: createTimeEnd,
            processName: processName,
            orgObj: orgObj
        };
        this.reportQueryService.wfInstenceOrgReport(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.processHandleReportList = data.pageData[0].result;
                _this.processHandleReportList && _this.processHandleReportList.length && _this.processHandleReportList.map(function (item) {
                    item.customOrgObj = item.orgId ? item.orgName ? item.orgId + " (" + item.orgName + ")" : "" + item.orgId : '';
                });
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    ProcessOrgReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-process-org-report',
            template: __webpack_require__(/*! ./process-org-report.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-org-report/process-org-report.component.html"),
            styles: [__webpack_require__(/*! ./process-org-report.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-org-report/process-org-report.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _report_query_service__WEBPACK_IMPORTED_MODULE_6__["ReportQueryService"]])
    ], ProcessOrgReportComponent);
    return ProcessOrgReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-report/process-report.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-report/process-report.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'流程处理报表(员工)查询'\"></header-title>\r\n  <form [formGroup]=\"processHandleForm\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <label class=\"inputLayout\">流程名称：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"queryProcessHandleReport.processName\" formControlName=\"processName\">\r\n\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <label class=\"rightLayout\">发起人：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"queryProcessHandleReport.userId\" formControlName=\"userIdName\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <label appValidation class=\"inputLayout\">流程发起开始时间：</label>\r\n        <p-calendar [(ngModel)]=\"queryStartTimeStart\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n          [showIcon]=\"true\" showButtonBar=\"true\" placeholder=\"必选项\" formControlName=\"processStartName\"></p-calendar>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <label appValidation class=\"rightLayout\">流程发起截止时间：</label>\r\n        <p-calendar [(ngModel)]=\"queryStartTimeEnd\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n          [showIcon]=\"true\" showButtonBar=\"true\" placeholder=\"必选项\" formControlName=\"processEndName\"></p-calendar>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <label appValidation class=\"inputLayout\">发起人机构：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"queryProcessHandleReport.orgObj\" formControlName=\"orgObjName\" placeholder=\"必输项\">\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <div>\r\n      <button pButton type=\"button\" label=\"查询\" [disabled]=\"!processHandleForm.valid\" (click)=\"query()\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n  </div>\r\n  <span class=\"icoColor\" style=\"margin-left:94%;\" (click)=\"dt.exportCSV()\">导出</span>\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt exportFilename=\"流程处理报表(员工)\" [value]=\"processHandleReportList\" emptyMessage=\"暂无数据\" scrollable=\"true\" [style]=\"{'text-align':'center'}\">\r\n      <p-headerColumnGroup>\r\n        <p-row>\r\n          <p-column header=\"序号\" rowspan=\"2\" [style]=\"{'width':'70px'}\"></p-column>\r\n          <p-column header=\"机构名称\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"流程发起人\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"流程名称\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"未完成数量\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"已完成数量\" colspan=\"4\"></p-column>\r\n          <p-column header=\"平均处理时长(h)\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"正常完成平均时长(h)\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"超时完成平均时长(h)\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"流程处理时长(t)\" colspan=\"6\" [style]=\"{'width':'620px'}\"></p-column>\r\n        </p-row>\r\n        <p-row>\r\n          <p-column header=\"正常结束\"></p-column>\r\n          <p-column header=\"提前结束\"></p-column>\r\n          <p-column header=\"超时结束\"></p-column>\r\n          <p-column header=\"手动终止\"></p-column>\r\n\r\n          <p-column header=\"t<=4h\"></p-column>\r\n          <p-column header=\"4h<t<=8h\"></p-column>\r\n          <p-column header=\"8h<t<=12h\"></p-column>\r\n          <p-column header=\"12h<t<=24h\"></p-column>\r\n          <p-column header=\"24h<t<=48h\"></p-column>\r\n          <p-column header=\"t>48h\"></p-column>\r\n        </p-row>\r\n      </p-headerColumnGroup>\r\n\r\n      <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customOrgObj\" header=\"机构名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customOrgObj\"> {{item.customOrgObj}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customUserName\" header=\"流程发起人\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customUserName\"> {{item.customUserName}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processName\" header=\"流程名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processName\">{{item.processName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"undoCount\" header=\"未完成数量\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.undoCount\">{{item.undoCount}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"normalEndCount\" header=\"正常结束\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.normalEndCount\">{{item.normalEndCount}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"earlyEndCount\" header=\"提前结束\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.earlyEndCount\">{{item.earlyEndCount}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"timeoutEndCount\" header=\"超时结束\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.timeoutEndCount\">{{item.timeoutEndCount}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"manualEndCount\" header=\"手动终止\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.manualEndCount\">{{item.manualEndCount}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"avgDoTime\" header=\"平均处理时长\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.avgDoTime\">{{item.avgDoTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"nomalAvgDoTime\" header=\"正常完成平均时长\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.nomalAvgDoTime\">{{item.nomalAvgDoTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"timOutAvgDoTime\" header=\"超时完成平均时长\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.timOutAvgDoTime\">{{item.timOutAvgDoTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedata4\" header=\"t<=4h\" [style]=\"{'width':'80px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedata4\">{{item.duedata4}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedata4t8\" header=\"4h<t<=8h\" [style]=\"{'width':'110px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedata4t8\">{{item.duedata4t8}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedata8t12\" header=\"8h<t<=12h\" [style]=\"{'width':'110px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedata8t12\">{{item.duedata8t12}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedata12t24\" header=\"12h<t<=24h\" [style]=\"{'width':'110px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedata12t24\">{{item.duedata12t24}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedata24t48\" header=\"24h<t<=48h\" [style]=\"{'width':'110px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedata24t48\">{{item.duedata24t48}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedatat48\" header=\"t>48h\" [style]=\"{'width':'80px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedatat48\">{{item.duedatat48}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n<p-growl [value]=\"msg\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-report/process-report.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-report/process-report.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 17%;\n  text-align: right;\n  color: #000; }\n\n.disable-resize {\n  resize: none; }\n\n:host/deep/ .ui-dialog input, :host/deep/ .ui-dialog textarea {\n  width: 30% !important; }\n\n:host/deep/ .ui-dialog .btn {\n  text-align: center; }\n\n:host/deep/ .ui-dialog .btn button {\n    margin: 30px; }\n\n:host/deep/ .ui-dialog label {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvcHJvY2Vzcy1yZXBvcnQvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6Ylxcd29ya2Zsb3dcXGFjdGl2aXRpLXdvcmstZmxvd1xccmVwb3J0LXF1ZXJ5XFxwcm9jZXNzLXJlcG9ydFxccHJvY2Vzcy1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFTSxnQkFBZTtFQUNmLG1CQUFrQixFQUFBOztBQUh4QjtFQU1NLG1CQUFrQixFQUFBOztBQU54QjtFQVNNLHFCQUFxQixFQUFBOztBQU0zQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHFCQUFxQixFQUFBOztBQUR2QjtJQUdNLHNCQUFzQixFQUFBOztBQUg1QjtJQU1NLFlBQVksRUFBQTs7QUFLbEI7RUFDRSxXQUFVLEVBQUE7O0FBR1o7RUFDRSxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRyx3QkFBd0I7RUFDeEIsdUJBQXVCLEVBQUE7O0FBRzFCO0VBQ0cscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdkO0VBQ0UsWUFDRixFQUFBOztBQUVBO0VBRUkscUJBQXFCLEVBQUE7O0FBRnpCO0VBS0ksa0JBQWtCLEVBQUE7O0FBTHRCO0lBT1EsWUFBWSxFQUFBOztBQVBwQjtFQVdJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFMWDtJQVFJLFdBQVcsRUFBQTs7QUFJZjtFQUVJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvcHJvY2Vzcy1yZXBvcnQvcHJvY2Vzcy1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1vZHVsZXtcclxuICAucm93TG9jYXRvbntcclxuICAgICAgbWFyZ2luLXRvcDo2MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgfVxyXG4gIC5idG5Mb2NhdGlvbntcclxuICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gIH1cclxuICBpbnB1dHtcclxuICAgICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZHJvcGRvd257XHJcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktY2FsZW5kYXJ7XHJcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIC51aS1kYXRlcGlja2Vye1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpbnB1dHtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxufSBcclxuXHJcblxyXG5zcGFuLnRlbHtcclxuICBjb2xvcjojZjAwO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktY2VsbC1kYXRhe1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvd3tcclxuICAgd2lkdGg6IDEwMDBweCAhaW1wb3J0YW50O1xyXG4gICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJpZ2h0TGF5b3V0e1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIHdpZHRoOiAxNyU7XHJcbiAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmRpc2FibGUtcmVzaXple1xyXG4gIHJlc2l6ZTogbm9uZVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nIHtcclxuICBpbnB1dCx0ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxhYmVse1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXNwaW5uZXIgLnVpLXNwaW5uZXItYnV0dG9ue1xyXG4gIGhlaWdodDogNDklICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgLmZhLWNhcmV0LWRvd24ge1xyXG4gICAgdG9wOiAwLjI1ZW07XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3Bpbm5lci1kb3duIC5mYS1jYXJldC1kb3duIHtcclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcImtleWJvYXJkX2Fycm93X2Rvd25cIjtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-report/process-report.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-report/process-report.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ProcessReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessReportComponent", function() { return ProcessReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _report_query_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../report-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.service.ts");
/* harmony import */ var _report_query_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../report-query-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProcessReportComponent = /** @class */ (function () {
    function ProcessReportComponent(fb, messageService, confirmationService, reportQueryService) {
        this.fb = fb;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.reportQueryService = reportQueryService;
        this.msg = [];
        // 流程处理报表列表
        this.processHandleReportList = [];
        this.CALENDAR_CN = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        //   查询实例
        this.queryProcessHandleReport = new _report_query_model__WEBPACK_IMPORTED_MODULE_7__["ProcessHandleReportModel"]();
        this.createValidators();
    }
    ProcessReportComponent.prototype.createValidators = function () {
        this.processHandleForm = this.fb.group({
            'processName': [''],
            'userIdName': [''],
            'processStartName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'processEndName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'orgObjName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    ProcessReportComponent.prototype.ngOnInit = function () {
        this.queryStartTimeStart = Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthStartDate"])();
        this.queryStartTimeEnd = Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthEndDate"])();
    };
    ProcessReportComponent.prototype.query = function () {
        this.querProcessHandleReportList(this.queryStartTimeStart, this.queryStartTimeEnd, this.queryProcessHandleReport.processName, this.queryProcessHandleReport.userId, this.queryProcessHandleReport.orgObj);
    };
    // 查询重置
    ProcessReportComponent.prototype.reset = function () {
        this.queryStartTimeStart = Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthStartDate"])();
        this.queryStartTimeEnd = Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthEndDate"])();
        this.queryProcessHandleReport.processName = null;
        this.queryProcessHandleReport.userId = null;
        this.queryProcessHandleReport.orgObj = null;
    };
    // 查询流程处理报表
    ProcessReportComponent.prototype.querProcessHandleReportList = function (TimeBegin, TimeEnd, processName, startUser, orgObj) {
        var _this = this;
        var createTimeBegin = TimeBegin ? Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(TimeBegin, _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["FULL_HORIZONTAL_DATE_FORMAT"]) : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthStartDate"])();
        ;
        var createTimeEnd = TimeEnd ? Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(TimeEnd, _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["FULL_HORIZONTAL_DATE_FORMAT"]) : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthEndDate"])();
        var bodyParams = {
            createTimeBegin: createTimeBegin,
            createTimeEnd: createTimeEnd,
            processName: processName,
            startUser: startUser,
            orgObj: orgObj
        };
        this.reportQueryService.wfInstencePersonalReport(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.processHandleReportList = data.pageData[0].result;
                _this.processHandleReportList && _this.processHandleReportList.length && _this.processHandleReportList.map(function (item) {
                    item.customUserName = item.userId ? item.userName ? item.userId + " (" + item.userName + ")" : "" + item.userId : '';
                    item.customOrgObj = item.orgId ? item.orgName ? item.orgId + " (" + item.orgName + ")" : "" + item.orgId : '';
                });
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    ProcessReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-process-report',
            template: __webpack_require__(/*! ./process-report.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-report/process-report.component.html"),
            styles: [__webpack_require__(/*! ./process-report.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-report/process-report.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _report_query_service__WEBPACK_IMPORTED_MODULE_6__["ReportQueryService"]])
    ], ProcessReportComponent);
    return ProcessReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-time-report/process-time-report.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-time-report/process-time-report.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'流程处理时间报表查询'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">大类编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryProcessHandleTimeReport.bigClassNo\">\r\n\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">小类编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryProcessHandleTimeReport.littleClassNo\">\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">小类编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryProcessHandleTimeReport.littleClassName\">\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">流程：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryProcessHandleTimeReport.processCode\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <div>\r\n      <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst(dt)\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt [value]=\"processHandleTimeReportList\" emptyMessage=\"暂无数据\" [lazy]=\"true\" (onLazyLoad)=\"query(dt)\" [rows]=\"paginatorInstance.rowNum\"\r\n      [(totalRecords)]=\"total\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[10,20,30]\" scrollable=\"true\" scrollWidth=\"'100%'\"\r\n      [style]=\"{'text-align':'center'}\">\r\n      <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processName\" header=\"流程名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processName\"> {{item.processName}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customSystemCode\" header=\"流程编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customSystemCode\">{{item.customSystemCode}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"systemCode\" header=\"系统编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.systemCode\">{{item.tasksystemCodeCode}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processDoTime\" header=\"流程平均处理时长(毫秒)\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processDoTime\">{{item.processDoTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processMinTime\" header=\"流程最小处理时长(毫秒)\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processMinTime\">{{item.processMinTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processMaxTime\" header=\"流程最大处理时长(毫秒)\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processMaxTime\">{{item.processMaxTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n<p-growl [value]=\"msg\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-time-report/process-time-report.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-time-report/process-time-report.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n.disable-resize {\n  resize: none; }\n\n:host/deep/ .ui-dialog input, :host/deep/ .ui-dialog textarea {\n  width: 30% !important; }\n\n:host/deep/ .ui-dialog .btn {\n  text-align: center; }\n\n:host/deep/ .ui-dialog .btn button {\n    margin: 30px; }\n\n:host/deep/ .ui-dialog label {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvcHJvY2Vzcy10aW1lLXJlcG9ydC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFx3b3JrZmxvd1xcYWN0aXZpdGktd29yay1mbG93XFxyZXBvcnQtcXVlcnlcXHByb2Nlc3MtdGltZS1yZXBvcnRcXHByb2Nlc3MtdGltZS1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFTSxnQkFBZTtFQUNmLG1CQUFrQixFQUFBOztBQUh4QjtFQU1NLG1CQUFrQixFQUFBOztBQU54QjtFQVNNLHFCQUFxQixFQUFBOztBQU0zQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHFCQUFxQixFQUFBOztBQUR2QjtJQUdNLHNCQUFzQixFQUFBOztBQUg1QjtJQU1NLFlBQVksRUFBQTs7QUFLbEI7RUFDRSxXQUFVLEVBQUE7O0FBR1o7RUFDRSxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRyx3QkFBd0I7RUFDeEIsdUJBQXVCLEVBQUE7O0FBRzFCO0VBQ0cscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdkO0VBQ0UsWUFDRixFQUFBOztBQUVBO0VBRUkscUJBQXFCLEVBQUE7O0FBRnpCO0VBS0ksa0JBQWtCLEVBQUE7O0FBTHRCO0lBT1EsWUFBWSxFQUFBOztBQVBwQjtFQVdJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFMWDtJQVFJLFdBQVcsRUFBQTs7QUFJZjtFQUVJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvcHJvY2Vzcy10aW1lLXJlcG9ydC9wcm9jZXNzLXRpbWUtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tb2R1bGV7XHJcbiAgLnJvd0xvY2F0b257XHJcbiAgICAgIG1hcmdpbi10b3A6NjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG4gIH1cclxuICAuYnRuTG9jYXRpb257XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3due1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFye1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICAudWktZGF0ZXBpY2tlcntcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICB9XHJcbn0gXHJcblxyXG5cclxuc3Bhbi50ZWx7XHJcbiAgY29sb3I6I2YwMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YXtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3d7XHJcbiAgIHdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcclxuICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yaWdodExheW91dHtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICB3aWR0aDogMTYlO1xyXG4gICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5kaXNhYmxlLXJlc2l6ZXtcclxuICByZXNpemU6IG5vbmVcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyB7XHJcbiAgaW5wdXQsdGV4dGFyZWF7XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBsYWJlbHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zcGlubmVyIC51aS1zcGlubmVyLWJ1dHRvbntcclxuICBoZWlnaHQ6IDQ5JSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWluLXdpZHRoOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIC5mYS1jYXJldC1kb3duIHtcclxuICAgIHRvcDogMC4yNWVtO1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXNwaW5uZXItZG93biAuZmEtY2FyZXQtZG93biB7XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJrZXlib2FyZF9hcnJvd19kb3duXCI7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-time-report/process-time-report.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-time-report/process-time-report.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ProcessTimeReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessTimeReportComponent", function() { return ProcessTimeReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _report_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../report-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.service.ts");
/* harmony import */ var _report_query_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../report-query-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProcessTimeReportComponent = /** @class */ (function () {
    function ProcessTimeReportComponent(messageService, confirmationService, reportQueryService) {
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.reportQueryService = reportQueryService;
        this.msg = [];
        // 任务处理时间报表
        this.processHandleTimeReportList = [];
        // 查询任务处理时间报表
        this.queryProcessHandleTimeReport = {
            bigClassNo: '',
            littleClassNo: '',
            littleClassName: '',
            processCode: ''
        };
        // 分页实例
        this.paginatorInstance = new _report_query_model__WEBPACK_IMPORTED_MODULE_6__["ProcessTimeReportModel"]();
    }
    ProcessTimeReportComponent.prototype.ngOnInit = function () {
        this.paginatorInstance.rowNum = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].rowNum;
        this.paginatorInstance.startRow = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].startRow;
    };
    // 按照搜索条件查询
    ProcessTimeReportComponent.prototype.queryFirst = function (table) {
        table.first = 0;
        this.query(table);
    };
    ProcessTimeReportComponent.prototype.query = function (table) {
        table.first = table.first || 0;
        table.rows = table.rows || parseInt(_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].rowNum, 10);
        // 每页显示的条数
        this.paginatorInstance.rowNum = table.rows + '';
        // 当前页
        this.paginatorInstance.startRow = (table.first / table.rows) + 1 + '';
        this.queryProcessTimeReportList(this.queryProcessHandleTimeReport.bigClassNo, this.queryProcessHandleTimeReport.littleClassNo, this.queryProcessHandleTimeReport.littleClassName, this.queryProcessHandleTimeReport.processCode);
    };
    // 查询重置
    ProcessTimeReportComponent.prototype.reset = function () {
        this.queryProcessHandleTimeReport = {
            bigClassNo: '',
            littleClassNo: '',
            littleClassName: '',
            processCode: ''
        };
    };
    // 查询任务处理时间报表
    ProcessTimeReportComponent.prototype.queryProcessTimeReportList = function (itemType, itemNode, itemName, processCode) {
        var _this = this;
        var bodyParams = {
            itemType: itemType,
            itemNode: itemNode,
            itemName: itemName,
            processCode: processCode,
            pageRows: parseInt(this.paginatorInstance.rowNum, 10),
            curPage: parseInt(this.paginatorInstance.startRow, 10)
        };
        this.reportQueryService.processTimeReport(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.processHandleTimeReportList = data.pageData[0].result;
                _this.processHandleTimeReportList && _this.processHandleTimeReportList.length && _this.processHandleTimeReportList.map(function (item) {
                    item.customSystemCode = item.processCode.split(":")[0];
                });
                _this.total = data.pageData[0].totalRows;
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    ProcessTimeReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-process-time-report',
            template: __webpack_require__(/*! ./process-time-report.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-time-report/process-time-report.component.html"),
            styles: [__webpack_require__(/*! ./process-time-report.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-time-report/process-time-report.component.scss")],
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _report_query_service__WEBPACK_IMPORTED_MODULE_5__["ReportQueryService"]])
    ], ProcessTimeReportComponent);
    return ProcessTimeReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query-model.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query-model.ts ***!
  \******************************************************************************************/
/*! exports provided: TimeOutWarningModel, TimeOutFlowModel, TaskTimeReportModel, ProcessTimeReportModel, TimeoutTaskReportModel, TimeoutProcessReportModel, ExceptionEndReportModel, PersonnelPerfomanceReportModel, ProcessHandleReportModel, ProcessHandleOrgReportModel, TaskHandleOrgReportModel, TaskHandleReportModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeOutWarningModel", function() { return TimeOutWarningModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeOutFlowModel", function() { return TimeOutFlowModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskTimeReportModel", function() { return TaskTimeReportModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessTimeReportModel", function() { return ProcessTimeReportModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutTaskReportModel", function() { return TimeoutTaskReportModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutProcessReportModel", function() { return TimeoutProcessReportModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionEndReportModel", function() { return ExceptionEndReportModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonnelPerfomanceReportModel", function() { return PersonnelPerfomanceReportModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessHandleReportModel", function() { return ProcessHandleReportModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessHandleOrgReportModel", function() { return ProcessHandleOrgReportModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskHandleOrgReportModel", function() { return TaskHandleOrgReportModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskHandleReportModel", function() { return TaskHandleReportModel; });
// 超时预警类型
var TimeOutWarningModel = /** @class */ (function () {
    function TimeOutWarningModel() {
    }
    return TimeOutWarningModel;
}());

// 超时流程类型
var TimeOutFlowModel = /** @class */ (function () {
    function TimeOutFlowModel() {
    }
    return TimeOutFlowModel;
}());

// 任务处理时间报表类型
var TaskTimeReportModel = /** @class */ (function () {
    function TaskTimeReportModel() {
    }
    return TaskTimeReportModel;
}());

// 流程处理时间报表类型
var ProcessTimeReportModel = /** @class */ (function () {
    function ProcessTimeReportModel() {
    }
    return ProcessTimeReportModel;
}());

// 超时任务统计报表类型
var TimeoutTaskReportModel = /** @class */ (function () {
    function TimeoutTaskReportModel() {
    }
    return TimeoutTaskReportModel;
}());

// 超时流程统计报表类型
var TimeoutProcessReportModel = /** @class */ (function () {
    function TimeoutProcessReportModel() {
    }
    return TimeoutProcessReportModel;
}());

// 异常结束流程报表类型
var ExceptionEndReportModel = /** @class */ (function () {
    function ExceptionEndReportModel() {
    }
    return ExceptionEndReportModel;
}());

// 处理人员绩效类型
var PersonnelPerfomanceReportModel = /** @class */ (function () {
    function PersonnelPerfomanceReportModel() {
    }
    return PersonnelPerfomanceReportModel;
}());

// 流程处理报表(明细)类型
var ProcessHandleReportModel = /** @class */ (function () {
    function ProcessHandleReportModel() {
    }
    return ProcessHandleReportModel;
}());

// 流程处理报表(机构)类型
var ProcessHandleOrgReportModel = /** @class */ (function () {
    function ProcessHandleOrgReportModel() {
    }
    return ProcessHandleOrgReportModel;
}());

// 任务处理报表(明细)类型
var TaskHandleOrgReportModel = /** @class */ (function () {
    function TaskHandleOrgReportModel() {
    }
    return TaskHandleOrgReportModel;
}());

// 任务处理报表(机构)类型
var TaskHandleReportModel = /** @class */ (function () {
    function TaskHandleReportModel() {
    }
    return TaskHandleReportModel;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ReportQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportQueryComponent", function() { return ReportQueryComponent; });
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

var ReportQueryComponent = /** @class */ (function () {
    function ReportQueryComponent() {
    }
    ReportQueryComponent.prototype.ngOnInit = function () {
    };
    ReportQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report-query',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], ReportQueryComponent);
    return ReportQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.constant.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.constant.ts ***!
  \*********************************************************************************************/
/*! exports provided: TIMEOUT_WARNING_API, TIMEOUT_TASK_API, TIMEOUT_FLOW_API, PROCESS_TIME_REPORT, TASK_TIME_REPORT, PROCESS_TOTAL_REPORT, TASK_TOTAL_REPORT, EXCEPRION_END_REPORT, USER_DO_REPORT, PROCESS_REPORT_CONTEXT, TASK_REPORT_CONTEXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_WARNING_API", function() { return TIMEOUT_WARNING_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_TASK_API", function() { return TIMEOUT_TASK_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMEOUT_FLOW_API", function() { return TIMEOUT_FLOW_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROCESS_TIME_REPORT", function() { return PROCESS_TIME_REPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_TIME_REPORT", function() { return TASK_TIME_REPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROCESS_TOTAL_REPORT", function() { return PROCESS_TOTAL_REPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_TOTAL_REPORT", function() { return TASK_TOTAL_REPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXCEPRION_END_REPORT", function() { return EXCEPRION_END_REPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_DO_REPORT", function() { return USER_DO_REPORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROCESS_REPORT_CONTEXT", function() { return PROCESS_REPORT_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASK_REPORT_CONTEXT", function() { return TASK_REPORT_CONTEXT; });
// import { CONTEXT_PATH } from "../common/constant/config";
// 查询超时预警
var TIMEOUT_WARNING_API = {
    listNoTimeOutTaskList: "/workflow/WfProcessCoreController/listNoTimeOutTaskList",
};
// 查询超时任务
var TIMEOUT_TASK_API = {
    listTimeOutTaskList: "/workflow/WfProcessCoreController/listTimeOutTaskList",
};
// 查询超时流程
var TIMEOUT_FLOW_API = {
    listTimeOutWorkFlowList: "/workflow/WfProcessCoreController/listTimeOutWorkFlowList",
};
// 查询流程处理时间报表
var PROCESS_TIME_REPORT = {
    processTimeReport: "/workflow/WfProcessCoreController/processTimeReport",
};
// 查询任务处理时间报表
var TASK_TIME_REPORT = {
    taskTimeReport: "/workflow/WfProcessCoreController/taskTimeReport",
};
// 查询流程统计报表
var PROCESS_TOTAL_REPORT = {
    tiemOutProcessReport: "/workflow/WfProcessCoreController/tiemOutProcessReport",
};
// 查询任务统计报表
var TASK_TOTAL_REPORT = {
    tiemOutTaskReport: "/workflow/WfProcessCoreController/tiemOutTaskReport",
};
// 异常结束报表
var EXCEPRION_END_REPORT = {
    exceptionEndReport: "/workflow/WfProcessCoreController/exceptionEndReport",
};
// 处理人员绩效报表
var USER_DO_REPORT = {
    userDoReport: "/workflow/WfProcessCoreController/userDoReport",
};
// 流程处理报表
var PROCESS_REPORT_CONTEXT = {
    wfInstencePersonalReport: "/workflow/WfReportController/wfInstencePersonalReport",
    wfInstenceOrgReport: "/workflow/WfReportController/wfInstenceOrgReport",
};
//任务处理报表
var TASK_REPORT_CONTEXT = {
    wfTaskflowPersonalReport: "/workflow/WfReportController/wfTaskflowPersonalReport",
    wfTaskflowOrgReport: "/workflow/WfReportController/wfTaskflowOrgReport",
};


/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ReportQueryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportQueryModule", function() { return ReportQueryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _common_shared_module_shared_service_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/shared-module/shared-service.module */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/shared-module/shared-service.module.ts");
/* harmony import */ var _report_query_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-query.routing */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.routing.ts");
/* harmony import */ var _report_query_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report-query.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.component.ts");
/* harmony import */ var _timeout_warning_query_timeout_warning_query_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timeout-warning-query/timeout-warning-query.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-warning-query/timeout-warning-query.component.ts");
/* harmony import */ var _timeout_task_query_timeout_task_query_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timeout-task-query/timeout-task-query.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-query/timeout-task-query.component.ts");
/* harmony import */ var _timeout_flow_query_timeout_flow_query_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./timeout-flow-query/timeout-flow-query.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-flow-query/timeout-flow-query.component.ts");
/* harmony import */ var _report_query_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./report-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.service.ts");
/* harmony import */ var _task_time_report_task_time_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task-time-report/task-time-report.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-time-report/task-time-report.component.ts");
/* harmony import */ var _process_time_report_process_time_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./process-time-report/process-time-report.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-time-report/process-time-report.component.ts");
/* harmony import */ var _timeout_task_report_timeout_task_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timeout-task-report/timeout-task-report.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-report/timeout-task-report.component.ts");
/* harmony import */ var _timeout_process_report_timeout_process_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./timeout-process-report/timeout-process-report.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-process-report/timeout-process-report.component.ts");
/* harmony import */ var _exception_end_report_exception_end_report_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./exception-end-report/exception-end-report.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/exception-end-report/exception-end-report.component.ts");
/* harmony import */ var _personnel_performance_report_personnel_performance_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./personnel-performance-report/personnel-performance-report.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/personnel-performance-report/personnel-performance-report.component.ts");
/* harmony import */ var _process_report_process_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./process-report/process-report.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-report/process-report.component.ts");
/* harmony import */ var _task_report_task_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./task-report/task-report.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-report/task-report.component.ts");
/* harmony import */ var _process_org_report_process_org_report_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./process-org-report/process-org-report.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-org-report/process-org-report.component.ts");
/* harmony import */ var _task_org_report_task_org_report_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./task-org-report/task-org-report.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-org-report/task-org-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var ReportQueryModule = /** @class */ (function () {
    function ReportQueryModule() {
    }
    ReportQueryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _report_query_routing__WEBPACK_IMPORTED_MODULE_5__["ReportQueryRouting"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_3__["FrameworkModule"],
                _common_shared_module_shared_service_module__WEBPACK_IMPORTED_MODULE_4__["SharedServiceModule"]
            ],
            declarations: [
                _report_query_component__WEBPACK_IMPORTED_MODULE_6__["ReportQueryComponent"],
                _timeout_warning_query_timeout_warning_query_component__WEBPACK_IMPORTED_MODULE_7__["TimeoutWarningQueryComponent"],
                _timeout_task_query_timeout_task_query_component__WEBPACK_IMPORTED_MODULE_8__["TimeoutTaskQueryComponent"],
                _timeout_flow_query_timeout_flow_query_component__WEBPACK_IMPORTED_MODULE_9__["TimeoutFLowQueryComponent"],
                _task_time_report_task_time_report_component__WEBPACK_IMPORTED_MODULE_11__["TaskTimeReportComponent"],
                _process_time_report_process_time_report_component__WEBPACK_IMPORTED_MODULE_12__["ProcessTimeReportComponent"],
                _timeout_task_report_timeout_task_report_component__WEBPACK_IMPORTED_MODULE_13__["TimeoutTaskReportComponent"],
                _timeout_process_report_timeout_process_report_component__WEBPACK_IMPORTED_MODULE_14__["TimeoutProcessReportComponent"],
                _exception_end_report_exception_end_report_component__WEBPACK_IMPORTED_MODULE_15__["ExceptionEndReportComponent"],
                _personnel_performance_report_personnel_performance_report_component__WEBPACK_IMPORTED_MODULE_16__["PersonnelPerformanceReportComponent"],
                _process_report_process_report_component__WEBPACK_IMPORTED_MODULE_17__["ProcessReportComponent"],
                _task_report_task_report_component__WEBPACK_IMPORTED_MODULE_18__["TaskReportComponent"],
                _process_org_report_process_org_report_component__WEBPACK_IMPORTED_MODULE_19__["ProcessOrgReportComponent"],
                _task_org_report_task_org_report_component__WEBPACK_IMPORTED_MODULE_20__["TaskOrgReportComponent"],
            ],
            providers: [
                _report_query_service__WEBPACK_IMPORTED_MODULE_10__["ReportQueryService"],
            ]
        })
    ], ReportQueryModule);
    return ReportQueryModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.routing.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.routing.ts ***!
  \********************************************************************************************/
/*! exports provided: routes, ReportQueryRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportQueryRouting", function() { return ReportQueryRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _report_query_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-query.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.component.ts");
/* harmony import */ var _timeout_warning_query_timeout_warning_query_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeout-warning-query/timeout-warning-query.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-warning-query/timeout-warning-query.component.ts");
/* harmony import */ var _timeout_task_query_timeout_task_query_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeout-task-query/timeout-task-query.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-query/timeout-task-query.component.ts");
/* harmony import */ var _timeout_flow_query_timeout_flow_query_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeout-flow-query/timeout-flow-query.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-flow-query/timeout-flow-query.component.ts");
/* harmony import */ var _process_report_process_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process-report/process-report.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-report/process-report.component.ts");
/* harmony import */ var _task_report_task_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-report/task-report.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-report/task-report.component.ts");
/* harmony import */ var _process_org_report_process_org_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./process-org-report/process-org-report.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/process-org-report/process-org-report.component.ts");
/* harmony import */ var _task_org_report_task_org_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-org-report/task-org-report.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-org-report/task-org-report.component.ts");









var routes = [
    {
        path: '',
        component: _report_query_component__WEBPACK_IMPORTED_MODULE_1__["ReportQueryComponent"],
        children: [
            { path: '', redirectTo: 'timeout-warning-query', pathMatch: 'full' },
            { path: 'timeout-warning-query', component: _timeout_warning_query_timeout_warning_query_component__WEBPACK_IMPORTED_MODULE_2__["TimeoutWarningQueryComponent"] },
            { path: 'timeout-task-query', component: _timeout_task_query_timeout_task_query_component__WEBPACK_IMPORTED_MODULE_3__["TimeoutTaskQueryComponent"] },
            { path: 'timeout-flow-query', component: _timeout_flow_query_timeout_flow_query_component__WEBPACK_IMPORTED_MODULE_4__["TimeoutFLowQueryComponent"] },
            { path: 'process-report', component: _process_report_process_report_component__WEBPACK_IMPORTED_MODULE_5__["ProcessReportComponent"] },
            { path: 'task-report', component: _task_report_task_report_component__WEBPACK_IMPORTED_MODULE_6__["TaskReportComponent"] },
            { path: 'process-org-report', component: _process_org_report_process_org_report_component__WEBPACK_IMPORTED_MODULE_7__["ProcessOrgReportComponent"] },
            { path: 'task-org-report', component: _task_org_report_task_org_report_component__WEBPACK_IMPORTED_MODULE_8__["TaskOrgReportComponent"] },
        ]
    }
];
var ReportQueryRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.service.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.service.ts ***!
  \********************************************************************************************/
/*! exports provided: ReportQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportQueryService", function() { return ReportQueryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/service/http.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/service/http.service.ts");
/* harmony import */ var _report_query_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-query.constant */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.constant.ts");
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




// import { RTS_HTTP_URL } from '../common/constant/config';
var ReportQueryService = /** @class */ (function () {
    function ReportQueryService(httpService) {
        var _this = this;
        this.httpService = httpService;
        // 查询超时预警
        this.listNoTimeOutTaskList = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["RTS_HTTP_URL"] + _report_query_constant__WEBPACK_IMPORTED_MODULE_2__["TIMEOUT_WARNING_API"].listNoTimeOutTaskList, params, null); };
        // 查询超时任务
        this.listTimeOutTaskList = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["RTS_HTTP_URL"] + _report_query_constant__WEBPACK_IMPORTED_MODULE_2__["TIMEOUT_TASK_API"].listTimeOutTaskList, params, null); };
        // 查询超时流程
        this.listTimeOutWorkFlowList = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["RTS_HTTP_URL"] + _report_query_constant__WEBPACK_IMPORTED_MODULE_2__["TIMEOUT_FLOW_API"].listTimeOutWorkFlowList, params, null); };
        // 查询流程处理时间报表
        this.processTimeReport = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["RTS_HTTP_URL"] + _report_query_constant__WEBPACK_IMPORTED_MODULE_2__["PROCESS_TIME_REPORT"].processTimeReport, params, null); };
        // 查询任务处理时间报表
        this.taskTimeReport = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["RTS_HTTP_URL"] + _report_query_constant__WEBPACK_IMPORTED_MODULE_2__["TASK_TIME_REPORT"].taskTimeReport, params, null); };
        // 查询流程统计报表
        this.tiemOutProcessReport = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["RTS_HTTP_URL"] + _report_query_constant__WEBPACK_IMPORTED_MODULE_2__["PROCESS_TOTAL_REPORT"].tiemOutProcessReport, params, null); };
        // 查询任务统计报表
        this.tiemOutTaskReport = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["RTS_HTTP_URL"] + _report_query_constant__WEBPACK_IMPORTED_MODULE_2__["TASK_TOTAL_REPORT"].tiemOutTaskReport, params, null); };
        // 查询异常结束报表
        this.exceptionEndReport = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["RTS_HTTP_URL"] + _report_query_constant__WEBPACK_IMPORTED_MODULE_2__["EXCEPRION_END_REPORT"].exceptionEndReport, params, null); };
        // 查询人员绩效报表
        this.userDoReport = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["RTS_HTTP_URL"] + _report_query_constant__WEBPACK_IMPORTED_MODULE_2__["USER_DO_REPORT"].userDoReport, params, null); };
        // 查询流程处理报表（员工）
        this.wfInstencePersonalReport = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["RTS_HTTP_URL"] + _report_query_constant__WEBPACK_IMPORTED_MODULE_2__["PROCESS_REPORT_CONTEXT"].wfInstencePersonalReport, params, null); };
        // 查询流程处理报表（机构）
        this.wfInstenceOrgReport = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["RTS_HTTP_URL"] + _report_query_constant__WEBPACK_IMPORTED_MODULE_2__["PROCESS_REPORT_CONTEXT"].wfInstenceOrgReport, params, null); };
        // 任务流程处理报表（明细）
        this.wfTaskflowPersonalReport = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["RTS_HTTP_URL"] + _report_query_constant__WEBPACK_IMPORTED_MODULE_2__["TASK_REPORT_CONTEXT"].wfTaskflowPersonalReport, params, null); };
        // 任务流程处理报表（机构）
        this.wfTaskflowOrgReport = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["RTS_HTTP_URL"] + _report_query_constant__WEBPACK_IMPORTED_MODULE_2__["TASK_REPORT_CONTEXT"].wfTaskflowOrgReport, params, null); };
    }
    ReportQueryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ReportQueryService);
    return ReportQueryService;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-org-report/task-org-report.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-org-report/task-org-report.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'任务处理报表(机构)查询'\"></header-title>\r\n  <form [formGroup]=\"taskHandleForm\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <label class=\"inputLayout\">流程名称：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"processName\" formControlName=\"processName\">\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <label appValidation class=\"rightLayout\">发起人机构：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"orgObj\" formControlName=\"orgObjName\" placeholder=\"必输项\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <label appValidation class=\"inputLayout\">任务接受开始时间：</label>\r\n        <p-calendar [(ngModel)]=\"queryStartTimeStart\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n          [showIcon]=\"true\" showButtonBar=\"true\" placeholder=\"必选项\" formControlName=\"processStartName\"></p-calendar>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <label appValidation class=\"rightLayout\">任务接受截止时间：</label>\r\n        <p-calendar [(ngModel)]=\"queryStartTimeEnd\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n          [showIcon]=\"true\" showButtonBar=\"true\" placeholder=\"必选项\" formControlName=\"processEndName\"></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </form>\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <div>\r\n      <button pButton type=\"button\" label=\"查询\" [disabled]=\"!taskHandleForm.valid\" (click)=\"query()\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n  </div>\r\n  <span class=\"icoColor\" style=\"margin-left:94%;\" (click)=\"dt.exportCSV()\">导出</span>\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt exportFilename=\"任务处理报表(机构)\" [value]=\"taskHandleReportList\" emptyMessage=\"暂无数据\" scrollable=\"true\" [style]=\"{'text-align':'center'}\">\r\n      <p-headerColumnGroup>\r\n        <p-row>\r\n          <p-column header=\"序号\" rowspan=\"2\" [style]=\"{'width':'70px'}\"></p-column>\r\n          <p-column header=\"机构名称\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"流程名称\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"未处理任务\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"已处理任务\" colspan=\"2\"></p-column>\r\n          <p-column header=\"平均处理时长(h)\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"正常完成平均时长(h)\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"超时完成平均时长(h)\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"流程处理时长(t)\" colspan=\"5\"></p-column>\r\n        </p-row>\r\n        <p-row>\r\n          <p-column header=\"按时处理\"></p-column>\r\n          <p-column header=\"超时处理\"></p-column>\r\n          <p-column header=\"t<=2h\"></p-column>\r\n          <p-column header=\"2h<t<=6h\"></p-column>\r\n          <p-column header=\"6h<t<=12h\"></p-column>\r\n          <p-column header=\"12h<t<=24h\"></p-column>\r\n          <p-column header=\"t>24h\"></p-column>\r\n        </p-row>\r\n      </p-headerColumnGroup>\r\n\r\n      <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"customOrgObj\" header=\"机构名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customOrgObj\">{{item.customOrgObj}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processName\" header=\"流程名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processName\">{{item.processName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"undoCount\" header=\"未处理任务\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.undoCount\">{{item.undoCount}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"notTimeOutCount\" header=\"按时处理\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.notTimeOutCount\">{{item.notTimeOutCount}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"timeOutCount\" header=\"超时处理\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.timeOutCount\">{{item.timeOutCount}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"avgDoTime\" header=\"平均处理时长\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.avgDoTime\">{{item.avgDoTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"nomalAvgDoTime\" header=\"正常完成平均时长\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.nomalAvgDoTime\">{{item.nomalAvgDoTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"timOutAvgDoTime\" header=\"超时完成平均时长\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.timOutAvgDoTime\">{{item.timOutAvgDoTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedata2\" header=\"t<=2h\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedata2\">{{item.duedata2}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedata2t6\" header=\"2h<t<=6h\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedata2t6\">{{item.duedata2t6}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedata6t12\" header=\"6h<t<=12h\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedata6t12\">{{item.duedata6t12}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedata12t24\" header=\"12h<t<=24h\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedata12t24\">{{item.duedata12t24}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedatat24\" header=\"t>24h\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedatat24\">{{item.duedatat24}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n<p-growl [value]=\"msg\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-org-report/task-org-report.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-org-report/task-org-report.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 17%;\n  text-align: right;\n  color: #000; }\n\n.disable-resize {\n  resize: none; }\n\n:host/deep/ .ui-dialog input, :host/deep/ .ui-dialog textarea {\n  width: 30% !important; }\n\n:host/deep/ .ui-dialog .btn {\n  text-align: center; }\n\n:host/deep/ .ui-dialog .btn button {\n    margin: 30px; }\n\n:host/deep/ .ui-dialog label {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvdGFzay1vcmctcmVwb3J0L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHdvcmtmbG93XFxhY3Rpdml0aS13b3JrLWZsb3dcXHJlcG9ydC1xdWVyeVxcdGFzay1vcmctcmVwb3J0XFx0YXNrLW9yZy1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFTSxnQkFBZTtFQUNmLG1CQUFrQixFQUFBOztBQUh4QjtFQU1NLG1CQUFrQixFQUFBOztBQU54QjtFQVNNLHFCQUFxQixFQUFBOztBQU0zQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHFCQUFxQixFQUFBOztBQUR2QjtJQUdNLHNCQUFzQixFQUFBOztBQUg1QjtJQU1NLFlBQVksRUFBQTs7QUFLbEI7RUFDRSxXQUFVLEVBQUE7O0FBR1o7RUFDRSxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRyx3QkFBd0I7RUFDeEIsdUJBQXVCLEVBQUE7O0FBRzFCO0VBQ0cscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdkO0VBQ0UsWUFDRixFQUFBOztBQUVBO0VBRUkscUJBQXFCLEVBQUE7O0FBRnpCO0VBS0ksa0JBQWtCLEVBQUE7O0FBTHRCO0lBT1EsWUFBWSxFQUFBOztBQVBwQjtFQVdJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFMWDtJQVFJLFdBQVcsRUFBQTs7QUFJZjtFQUVJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvdGFzay1vcmctcmVwb3J0L3Rhc2stb3JnLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubW9kdWxle1xyXG4gIC5yb3dMb2NhdG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOjYwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NDBweDtcclxuICB9XHJcbiAgLmJ0bkxvY2F0aW9ue1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93bntcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jYWxlbmRhcntcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgLnVpLWRhdGVwaWNrZXJ7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG59IFxyXG5cclxuXHJcbnNwYW4udGVse1xyXG4gIGNvbG9yOiNmMDA7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGF7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93e1xyXG4gICB3aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmlnaHRMYXlvdXR7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgd2lkdGg6IDE3JTtcclxuICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uZGlzYWJsZS1yZXNpemV7XHJcbiAgcmVzaXplOiBub25lXHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cge1xyXG4gIGlucHV0LHRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgIH1cclxuICB9XHJcbiAgbGFiZWx7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3Bpbm5lciAudWktc3Bpbm5lci1idXR0b257XHJcbiAgaGVpZ2h0OiA0OSUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICAuZmEtY2FyZXQtZG93biB7XHJcbiAgICB0b3A6IDAuMjVlbTtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zcGlubmVyLWRvd24gLmZhLWNhcmV0LWRvd24ge1xyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwia2V5Ym9hcmRfYXJyb3dfZG93blwiO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-org-report/task-org-report.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-org-report/task-org-report.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: TaskOrgReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskOrgReportComponent", function() { return TaskOrgReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _report_query_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../report-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TaskOrgReportComponent = /** @class */ (function () {
    function TaskOrgReportComponent(fb, messageService, confirmationService, reportQueryService) {
        this.fb = fb;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.reportQueryService = reportQueryService;
        this.msg = [];
        // 任务处理报表列表
        this.taskHandleReportList = [];
        this.CALENDAR_CN = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.createValidators();
    }
    TaskOrgReportComponent.prototype.createValidators = function () {
        this.taskHandleForm = this.fb.group({
            'processName': [''],
            'orgObjName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'processStartName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'processEndName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    };
    TaskOrgReportComponent.prototype.ngOnInit = function () {
        this.queryStartTimeStart = Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthStartDate"])();
        this.queryStartTimeEnd = Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthEndDate"])();
    };
    TaskOrgReportComponent.prototype.query = function () {
        this.querProcessHandleReportList(this.queryStartTimeStart, this.queryStartTimeEnd, this.processName, this.orgObj);
    };
    // 查询重置
    TaskOrgReportComponent.prototype.reset = function () {
        this.queryStartTimeStart = Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthStartDate"])();
        this.queryStartTimeEnd = Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthEndDate"])();
        this.processName = null;
    };
    // 查询流程处理报表
    TaskOrgReportComponent.prototype.querProcessHandleReportList = function (TimeBegin, TimeEnd, processName, orgObj) {
        var _this = this;
        var createTimeBegin = TimeBegin ? Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(TimeBegin, _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["FULL_HORIZONTAL_DATE_FORMAT"]) : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthStartDate"])();
        ;
        var createTimeEnd = TimeEnd ? Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(TimeEnd, _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["FULL_HORIZONTAL_DATE_FORMAT"]) : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthEndDate"])();
        var bodyParams = {
            createTimeBegin: createTimeBegin,
            createTimeEnd: createTimeEnd,
            processName: processName,
            orgObj: orgObj
        };
        this.reportQueryService.wfTaskflowOrgReport(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.taskHandleReportList = data.pageData[0].result;
                _this.taskHandleReportList && _this.taskHandleReportList.length && _this.taskHandleReportList.map(function (item) {
                    item.customOrgObj = item.orgId ? item.orgName ? item.orgId + " (" + item.orgName + ")" : "" + item.orgId : '';
                });
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    TaskOrgReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-org-report',
            template: __webpack_require__(/*! ./task-org-report.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-org-report/task-org-report.component.html"),
            styles: [__webpack_require__(/*! ./task-org-report.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-org-report/task-org-report.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _report_query_service__WEBPACK_IMPORTED_MODULE_6__["ReportQueryService"]])
    ], TaskOrgReportComponent);
    return TaskOrgReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-report/task-report.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-report/task-report.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'任务处理报表(员工)查询'\"></header-title>\r\n  <form [formGroup]=\"taskHandleForm\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <label class=\"inputLayout\">流程名称：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"queryTaskHandleReport.processName\" formControlName=\"processName\">\r\n\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <label class=\"rightLayout\">任务处理人：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"queryTaskHandleReport.userId\" formControlName=\"userIdName\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <label appValidation class=\"inputLayout\">任务接受开始时间：</label>\r\n        <p-calendar [(ngModel)]=\"queryStartTimeStart\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n          [showIcon]=\"true\" showButtonBar=\"true\" placeholder=\"必选项\" formControlName=\"processStartName\"></p-calendar>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <label appValidation class=\"rightLayout\">任务接受截止时间：</label>\r\n        <p-calendar [(ngModel)]=\"queryStartTimeEnd\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n          [showIcon]=\"true\" showButtonBar=\"true\" placeholder=\"必选项\" formControlName=\"processEndName\"></p-calendar>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-12 ui-md-6\">\r\n        <label appValidation class=\"inputLayout\">处理人机构：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"queryTaskHandleReport.orgObj\" formControlName=\"orgObjName\" placeholder=\"必输项\">\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <div>\r\n      <button pButton type=\"button\" label=\"查询\" [disabled]=\"!taskHandleForm.valid\" (click)=\"query()\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n  </div>\r\n  <span class=\"icoColor\" style=\"margin-left:94%;\" (click)=\"dt.exportCSV()\">导出</span>\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt exportFilename=\"任务处理报表(员工)\" [value]=\"taskHandleReportList\" emptyMessage=\"暂无数据\" scrollable=\"true\" [style]=\"{'text-align':'center'}\">\r\n      <p-headerColumnGroup>\r\n        <p-row>\r\n          <p-column header=\"序号\" rowspan=\"2\" [style]=\"{'width':'70px'}\"></p-column>\r\n          <p-column header=\"机构名称\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"任务处理人\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"流程名称\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"未处理任务\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"已处理任务\" colspan=\"2\"></p-column>\r\n          <p-column header=\"平均处理时长(h)\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"正常完成平均时长(h)\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"超时完成平均时长(h)\" rowspan=\"2\"></p-column>\r\n          <p-column header=\"流程处理时长(t)\" colspan=\"5\"></p-column>\r\n        </p-row>\r\n        <p-row>\r\n          <p-column header=\"按时处理\"></p-column>\r\n          <p-column header=\"超时处理\"></p-column>\r\n\r\n          <p-column header=\"t<=2h\"></p-column>\r\n          <p-column header=\"2h<t<=6h\"></p-column>\r\n          <p-column header=\"6h<t<=12h\"></p-column>\r\n          <p-column header=\"12h<t<=24h\"></p-column>\r\n          <p-column header=\"t>24h\"></p-column>\r\n        </p-row>\r\n      </p-headerColumnGroup>\r\n\r\n      <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customOrgObj\" header=\"机构名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customOrgObj\"> {{item.customOrgObj}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customUserName\" header=\"任务处理人\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customUserName\"> {{item.customUserName}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processName\" header=\"流程名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processName\">{{item.processName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"undoCount\" header=\"未处理任务\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.undoCount\">{{item.undoCount}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"notTimeOutCount\" header=\"按时处理\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.notTimeOutCount\">{{item.notTimeOutCount}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"timeOutCount\" header=\"超时处理\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.timeOutCount\">{{item.timeOutCount}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"avgDoTime\" header=\"平均处理时长\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.avgDoTime\">{{item.avgDoTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"nomalAvgDoTime\" header=\"正常完成平均时长\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.nomalAvgDoTime\">{{item.nomalAvgDoTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"timOutAvgDoTime\" header=\"超时完成平均时长\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.timOutAvgDoTime\">{{item.timOutAvgDoTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedata2\" header=\"t<=2h\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedata2\">{{item.duedata2}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedata2t6\" header=\"2h<t<=6h\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedata2t6\">{{item.duedata2t6}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedata6t12\" header=\"6h<t<=12h\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedata6t12\">{{item.duedata6t12}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedata12t24\" header=\"12h<t<=24h\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedata12t24\">{{item.duedata12t24}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"duedatat24\" header=\"t>24h\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.duedatat24\">{{item.duedatat24}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n<p-growl [value]=\"msg\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-report/task-report.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-report/task-report.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 17%;\n  text-align: right;\n  color: #000; }\n\n.disable-resize {\n  resize: none; }\n\n:host/deep/ .ui-dialog input, :host/deep/ .ui-dialog textarea {\n  width: 30% !important; }\n\n:host/deep/ .ui-dialog .btn {\n  text-align: center; }\n\n:host/deep/ .ui-dialog .btn button {\n    margin: 30px; }\n\n:host/deep/ .ui-dialog label {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvdGFzay1yZXBvcnQvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6Ylxcd29ya2Zsb3dcXGFjdGl2aXRpLXdvcmstZmxvd1xccmVwb3J0LXF1ZXJ5XFx0YXNrLXJlcG9ydFxcdGFzay1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFTSxnQkFBZTtFQUNmLG1CQUFrQixFQUFBOztBQUh4QjtFQU1NLG1CQUFrQixFQUFBOztBQU54QjtFQVNNLHFCQUFxQixFQUFBOztBQU0zQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHFCQUFxQixFQUFBOztBQUR2QjtJQUdNLHNCQUFzQixFQUFBOztBQUg1QjtJQU1NLFlBQVksRUFBQTs7QUFLbEI7RUFDRSxXQUFVLEVBQUE7O0FBR1o7RUFDRSxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRyx3QkFBd0I7RUFDeEIsdUJBQXVCLEVBQUE7O0FBRzFCO0VBQ0cscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdkO0VBQ0UsWUFDRixFQUFBOztBQUVBO0VBRUkscUJBQXFCLEVBQUE7O0FBRnpCO0VBS0ksa0JBQWtCLEVBQUE7O0FBTHRCO0lBT1EsWUFBWSxFQUFBOztBQVBwQjtFQVdJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFMWDtJQVFJLFdBQVcsRUFBQTs7QUFJZjtFQUVJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvdGFzay1yZXBvcnQvdGFzay1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1vZHVsZXtcclxuICAucm93TG9jYXRvbntcclxuICAgICAgbWFyZ2luLXRvcDo2MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgfVxyXG4gIC5idG5Mb2NhdGlvbntcclxuICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gIH1cclxuICBpbnB1dHtcclxuICAgICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZHJvcGRvd257XHJcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktY2FsZW5kYXJ7XHJcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIC51aS1kYXRlcGlja2Vye1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpbnB1dHtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxufSBcclxuXHJcblxyXG5zcGFuLnRlbHtcclxuICBjb2xvcjojZjAwO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktY2VsbC1kYXRhe1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvd3tcclxuICAgd2lkdGg6IDEwMDBweCAhaW1wb3J0YW50O1xyXG4gICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJpZ2h0TGF5b3V0e1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIHdpZHRoOiAxNyU7XHJcbiAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmRpc2FibGUtcmVzaXple1xyXG4gIHJlc2l6ZTogbm9uZVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nIHtcclxuICBpbnB1dCx0ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxhYmVse1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXNwaW5uZXIgLnVpLXNwaW5uZXItYnV0dG9ue1xyXG4gIGhlaWdodDogNDklICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgLmZhLWNhcmV0LWRvd24ge1xyXG4gICAgdG9wOiAwLjI1ZW07XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3Bpbm5lci1kb3duIC5mYS1jYXJldC1kb3duIHtcclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcImtleWJvYXJkX2Fycm93X2Rvd25cIjtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-report/task-report.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-report/task-report.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: TaskReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskReportComponent", function() { return TaskReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _report_query_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../report-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.service.ts");
/* harmony import */ var _report_query_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../report-query-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TaskReportComponent = /** @class */ (function () {
    function TaskReportComponent(fb, messageService, confirmationService, reportQueryService) {
        this.fb = fb;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.reportQueryService = reportQueryService;
        this.msg = [];
        // 任务处理报表列表
        this.taskHandleReportList = [];
        this.CALENDAR_CN = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        //   查询实例
        this.queryTaskHandleReport = new _report_query_model__WEBPACK_IMPORTED_MODULE_7__["TaskHandleReportModel"]();
        this.createValidators();
    }
    TaskReportComponent.prototype.createValidators = function () {
        this.taskHandleForm = this.fb.group({
            'processName': [''],
            'userIdName': [''],
            'processStartName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'processEndName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'orgObjName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    TaskReportComponent.prototype.ngOnInit = function () {
        this.queryStartTimeStart = Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthStartDate"])();
        this.queryStartTimeEnd = Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthEndDate"])();
    };
    TaskReportComponent.prototype.query = function () {
        this.querProcessHandleReportList(this.queryStartTimeStart, this.queryStartTimeEnd, this.queryTaskHandleReport.processName, this.queryTaskHandleReport.userId, this.queryTaskHandleReport.orgObj);
    };
    // 查询重置
    TaskReportComponent.prototype.reset = function () {
        this.queryStartTimeStart = Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthStartDate"])();
        this.queryStartTimeEnd = Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthEndDate"])();
        this.queryTaskHandleReport.processName = null;
        this.queryTaskHandleReport.userId = null;
    };
    // 查询流程处理报表
    TaskReportComponent.prototype.querProcessHandleReportList = function (TimeBegin, TimeEnd, processName, doActor, orgObj) {
        var _this = this;
        var createTimeBegin = TimeBegin ? Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(TimeBegin, _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["FULL_HORIZONTAL_DATE_FORMAT"]) : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthStartDate"])();
        ;
        var createTimeEnd = TimeEnd ? Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(TimeEnd, _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["FULL_HORIZONTAL_DATE_FORMAT"]) : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["getLastMonthEndDate"])();
        var bodyParams = {
            createTimeBegin: createTimeBegin,
            createTimeEnd: createTimeEnd,
            processName: processName,
            doActor: doActor,
            orgObj: orgObj
        };
        this.reportQueryService.wfTaskflowPersonalReport(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.taskHandleReportList = data.pageData[0].result;
                _this.taskHandleReportList && _this.taskHandleReportList.length && _this.taskHandleReportList.map(function (item) {
                    item.customUserName = item.userId ? item.userName ? item.userId + " (" + item.userName + ")" : "" + item.userId : '';
                    item.customOrgObj = item.orgId ? item.orgName ? item.orgId + " (" + item.orgName + ")" : "" + item.orgId : '';
                });
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    TaskReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-report',
            template: __webpack_require__(/*! ./task-report.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-report/task-report.component.html"),
            styles: [__webpack_require__(/*! ./task-report.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-report/task-report.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _report_query_service__WEBPACK_IMPORTED_MODULE_6__["ReportQueryService"]])
    ], TaskReportComponent);
    return TaskReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-time-report/task-time-report.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-time-report/task-time-report.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'任务处理时间报表查询'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">大类编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTaskHandleTimeReport.bigClassNo\">\r\n\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">小类编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTaskHandleTimeReport.littleClassNo\">\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">小类编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTaskHandleTimeReport.littleClassName\">\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">流程：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTaskHandleTimeReport.processCode\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <div>\r\n      <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst(dt)\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt [value]=\"taskHandleTimeReportList\" emptyMessage=\"暂无数据\" [lazy]=\"true\" (onLazyLoad)=\"query(dt)\" [rows]=\"paginatorInstance.rowNum\"\r\n      [(totalRecords)]=\"total\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[10,20,30]\" scrollable=\"true\" scrollWidth=\"'100%'\"\r\n      [style]=\"{'text-align':'center'}\">\r\n      <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processName\" header=\"流程名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processName\"> {{item.processName}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customSystemCode\" header=\"流程编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customSystemCode\">{{item.customSystemCode}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"systemCode\" header=\"系统编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.systemCode\">{{item.systemCode}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"taskNum\" header=\"节点任务数\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskNum\">{{item.taskNum}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"taskdoTime\" header=\"节点平均处理时长(毫秒)\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskdoTime\">{{item.taskdoTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"taskMinTime\" header=\"节点最小处理时长(毫秒)\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskMinTime\">{{item.taskMinTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"taskMaxTime\" header=\"节点最大处理时长(毫秒)\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processName\">{{item.taskMaxTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n<p-growl [value]=\"msg\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-time-report/task-time-report.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-time-report/task-time-report.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n.disable-resize {\n  resize: none; }\n\n:host/deep/ .ui-dialog input, :host/deep/ .ui-dialog textarea {\n  width: 30% !important; }\n\n:host/deep/ .ui-dialog .btn {\n  text-align: center; }\n\n:host/deep/ .ui-dialog .btn button {\n    margin: 30px; }\n\n:host/deep/ .ui-dialog label {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvdGFzay10aW1lLXJlcG9ydC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFx3b3JrZmxvd1xcYWN0aXZpdGktd29yay1mbG93XFxyZXBvcnQtcXVlcnlcXHRhc2stdGltZS1yZXBvcnRcXHRhc2stdGltZS1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFTSxnQkFBZTtFQUNmLG1CQUFrQixFQUFBOztBQUh4QjtFQU1NLG1CQUFrQixFQUFBOztBQU54QjtFQVNNLHFCQUFxQixFQUFBOztBQU0zQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHFCQUFxQixFQUFBOztBQUR2QjtJQUdNLHNCQUFzQixFQUFBOztBQUg1QjtJQU1NLFlBQVksRUFBQTs7QUFLbEI7RUFDRSxXQUFVLEVBQUE7O0FBR1o7RUFDRSxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRyx3QkFBd0I7RUFDeEIsdUJBQXVCLEVBQUE7O0FBRzFCO0VBQ0cscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdkO0VBQ0UsWUFDRixFQUFBOztBQUVBO0VBRUkscUJBQXFCLEVBQUE7O0FBRnpCO0VBS0ksa0JBQWtCLEVBQUE7O0FBTHRCO0lBT1EsWUFBWSxFQUFBOztBQVBwQjtFQVdJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFMWDtJQVFJLFdBQVcsRUFBQTs7QUFJZjtFQUVJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvdGFzay10aW1lLXJlcG9ydC90YXNrLXRpbWUtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tb2R1bGV7XHJcbiAgLnJvd0xvY2F0b257XHJcbiAgICAgIG1hcmdpbi10b3A6NjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG4gIH1cclxuICAuYnRuTG9jYXRpb257XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3due1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFye1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICAudWktZGF0ZXBpY2tlcntcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICB9XHJcbn0gXHJcblxyXG5cclxuc3Bhbi50ZWx7XHJcbiAgY29sb3I6I2YwMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YXtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3d7XHJcbiAgIHdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcclxuICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yaWdodExheW91dHtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICB3aWR0aDogMTYlO1xyXG4gICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5kaXNhYmxlLXJlc2l6ZXtcclxuICByZXNpemU6IG5vbmVcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyB7XHJcbiAgaW5wdXQsdGV4dGFyZWF7XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBsYWJlbHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zcGlubmVyIC51aS1zcGlubmVyLWJ1dHRvbntcclxuICBoZWlnaHQ6IDQ5JSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWluLXdpZHRoOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIC5mYS1jYXJldC1kb3duIHtcclxuICAgIHRvcDogMC4yNWVtO1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXNwaW5uZXItZG93biAuZmEtY2FyZXQtZG93biB7XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJrZXlib2FyZF9hcnJvd19kb3duXCI7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-time-report/task-time-report.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-time-report/task-time-report.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: TaskTimeReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskTimeReportComponent", function() { return TaskTimeReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _report_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../report-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.service.ts");
/* harmony import */ var _report_query_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../report-query-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TaskTimeReportComponent = /** @class */ (function () {
    function TaskTimeReportComponent(messageService, confirmationService, reportQueryService) {
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.reportQueryService = reportQueryService;
        this.msg = [];
        // 任务处理时间报表
        this.taskHandleTimeReportList = [];
        // 查询任务处理时间报表
        this.queryTaskHandleTimeReport = {
            bigClassNo: '',
            littleClassNo: '',
            littleClassName: '',
            processCode: ''
        };
        // 分页实例
        this.paginatorInstance = new _report_query_model__WEBPACK_IMPORTED_MODULE_6__["TaskTimeReportModel"]();
    }
    TaskTimeReportComponent.prototype.ngOnInit = function () {
        this.paginatorInstance.rowNum = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].rowNum;
        this.paginatorInstance.startRow = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].startRow;
    };
    // 按照搜索条件查询
    TaskTimeReportComponent.prototype.queryFirst = function (table) {
        table.first = 0;
        this.query(table);
    };
    TaskTimeReportComponent.prototype.query = function (table) {
        table.first = table.first || 0;
        table.rows = table.rows || parseInt(_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].rowNum, 10);
        // 每页显示的条数
        this.paginatorInstance.rowNum = table.rows + '';
        // 当前页
        this.paginatorInstance.startRow = (table.first / table.rows) + 1 + '';
        this.queryTaskTimeReportList(this.queryTaskHandleTimeReport.bigClassNo, this.queryTaskHandleTimeReport.littleClassNo, this.queryTaskHandleTimeReport.littleClassName, this.queryTaskHandleTimeReport.processCode);
    };
    // 查询重置
    TaskTimeReportComponent.prototype.reset = function () {
        this.queryTaskHandleTimeReport = {
            bigClassNo: '',
            littleClassNo: '',
            littleClassName: '',
            processCode: ''
        };
    };
    // 查询任务处理时间报表
    TaskTimeReportComponent.prototype.queryTaskTimeReportList = function (itemType, itemNode, itemName, processCode) {
        var _this = this;
        var bodyParams = {
            itemType: itemType,
            itemNode: itemNode,
            itemName: itemName,
            processCode: processCode,
            pageRows: parseInt(this.paginatorInstance.rowNum, 10),
            curPage: parseInt(this.paginatorInstance.startRow, 10)
        };
        this.reportQueryService.taskTimeReport(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.taskHandleTimeReportList = data.pageData[0].result;
                _this.taskHandleTimeReportList && _this.taskHandleTimeReportList.length && _this.taskHandleTimeReportList.map(function (item) {
                    item.customSystemCode = item.processCode.split(":")[0];
                });
                _this.total = data.pageData[0].totalRows;
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    TaskTimeReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-time-report',
            template: __webpack_require__(/*! ./task-time-report.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-time-report/task-time-report.component.html"),
            styles: [__webpack_require__(/*! ./task-time-report.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/task-time-report/task-time-report.component.scss")],
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _report_query_service__WEBPACK_IMPORTED_MODULE_5__["ReportQueryService"]])
    ], TaskTimeReportComponent);
    return TaskTimeReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-flow-query/timeout-flow-query.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-flow-query/timeout-flow-query.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'超时流程查询'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">流程编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTimeoutWarning.bigClassNo\">\r\n    </div>\r\n    <!-- <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">小类名称：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTimeoutWarning.littleClassName\">\r\n    </div> -->\r\n  </div>\r\n  <!-- <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">小类编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTimeoutWarning.littleClassNo\">\r\n    </div>\r\n\r\n  </div> -->\r\n\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <div>\r\n      <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst(dt)\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt [value]=\"timeoutWarningList\" emptyMessage=\"暂无数据\" [lazy]=\"true\" (onLazyLoad)=\"query(dt)\" [rows]=\"paginatorInstance.rowNum\"\r\n      [(totalRecords)]=\"total\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[10,20,30]\" scrollable=\"true\" scrollWidth=\"'100%'\"\r\n      [style]=\"{'text-align':'center'}\">\r\n      <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <!-- <p-column field=\"systemCode\" header=\"系统分类编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.systemCode\">{{item.systemCode}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <p-column field=\"customSystemCode\" header=\"流程编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customSystemCode\">{{item.customSystemCode}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"proccessName\" header=\"流程名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.proccessName\">{{item.proccessName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"customStartUserId\" header=\"流程发起人\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customStartUserId\">{{item.customStartUserId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <!-- <p-column field=\"workState\" header=\"流程运行状态\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.workState | mapValuePie: handleState: 'type' : 'descp'\">\r\n            {{item.workState | mapValuePie: handleState: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <p-column field=\"endType\" header=\"流程结束状态\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.endType  | mapValuePie: endTypes: 'type' : 'descp'\">\r\n            {{item.endType | mapValuePie: endTypes: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"startTime\" header=\"开始时间\" [style]=\"{'width':'200px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.startTime | date: 'y-MM-dd HH:mm'\">\r\n            {{item.startTime | date: 'y-MM-dd HH:mm'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"updateTime\" header=\"处理时间\" [style]=\"{'width':'200px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.updateTime | date: 'y-MM-dd HH:mm'\">\r\n            {{item.updateTime | date: 'y-MM-dd HH:mm'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"endTime\" header=\"截止时间\" [style]=\"{'width':'200px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.endTime | date: 'y-MM-dd HH:mm'\">\r\n            {{item.endTime | date: 'y-MM-dd HH:mm'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"joinUserIds\" header=\"流程审批人员\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.joinUserIds\">{{item.joinUserIds}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"processDesc\" header=\"流程实例简述\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processDesc\">{{item.processDesc}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"wfDesc\" header=\"流程备注\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.wfDesc\">{{item.wfDesc}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n<p-growl [value]=\"msg\"></p-growl>\r\n<p-confirmDialog header=\"Confirmation\" acceptLabel=\"确定\" rejectLabel=\"取消\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-flow-query/timeout-flow-query.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-flow-query/timeout-flow-query.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n.disable-resize {\n  resize: none; }\n\n:host/deep/ .ui-dialog input, :host/deep/ .ui-dialog textarea {\n  width: 30% !important; }\n\n:host/deep/ .ui-dialog .btn {\n  text-align: center; }\n\n:host/deep/ .ui-dialog .btn button {\n    margin: 30px; }\n\n:host/deep/ .ui-dialog label {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvdGltZW91dC1mbG93LXF1ZXJ5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHdvcmtmbG93XFxhY3Rpdml0aS13b3JrLWZsb3dcXHJlcG9ydC1xdWVyeVxcdGltZW91dC1mbG93LXF1ZXJ5XFx0aW1lb3V0LWZsb3ctcXVlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFTSxnQkFBZTtFQUNmLG1CQUFrQixFQUFBOztBQUh4QjtFQU1NLG1CQUFrQixFQUFBOztBQU54QjtFQVNNLHFCQUFxQixFQUFBOztBQU0zQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHFCQUFxQixFQUFBOztBQUR2QjtJQUdNLHNCQUFzQixFQUFBOztBQUg1QjtJQU1NLFlBQVksRUFBQTs7QUFLbEI7RUFDRSxXQUFVLEVBQUE7O0FBR1o7RUFDRSxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRyx3QkFBd0I7RUFDeEIsdUJBQXVCLEVBQUE7O0FBRzFCO0VBQ0cscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdkO0VBQ0UsWUFDRixFQUFBOztBQUVBO0VBRUkscUJBQXFCLEVBQUE7O0FBRnpCO0VBS0ksa0JBQWtCLEVBQUE7O0FBTHRCO0lBT1EsWUFBWSxFQUFBOztBQVBwQjtFQVdJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFMWDtJQVFJLFdBQVcsRUFBQTs7QUFJZjtFQUVJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvdGltZW91dC1mbG93LXF1ZXJ5L3RpbWVvdXQtZmxvdy1xdWVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubW9kdWxle1xyXG4gIC5yb3dMb2NhdG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOjYwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NDBweDtcclxuICB9XHJcbiAgLmJ0bkxvY2F0aW9ue1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93bntcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jYWxlbmRhcntcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgLnVpLWRhdGVwaWNrZXJ7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG59IFxyXG5cclxuXHJcbnNwYW4udGVse1xyXG4gIGNvbG9yOiNmMDA7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGF7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93e1xyXG4gICB3aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmlnaHRMYXlvdXR7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgd2lkdGg6IDE2JTtcclxuICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uZGlzYWJsZS1yZXNpemV7XHJcbiAgcmVzaXplOiBub25lXHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cge1xyXG4gIGlucHV0LHRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgIH1cclxuICB9XHJcbiAgbGFiZWx7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3Bpbm5lciAudWktc3Bpbm5lci1idXR0b257XHJcbiAgaGVpZ2h0OiA0OSUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICAuZmEtY2FyZXQtZG93biB7XHJcbiAgICB0b3A6IDAuMjVlbTtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zcGlubmVyLWRvd24gLmZhLWNhcmV0LWRvd24ge1xyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwia2V5Ym9hcmRfYXJyb3dfZG93blwiO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-flow-query/timeout-flow-query.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-flow-query/timeout-flow-query.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: TimeoutFLowQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutFLowQueryComponent", function() { return TimeoutFLowQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/constant/code.value */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/code.value.ts");
/* harmony import */ var _report_query_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../report-query-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query-model.ts");
/* harmony import */ var _report_query_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../report-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TimeoutFLowQueryComponent = /** @class */ (function () {
    function TimeoutFLowQueryComponent(fb, messageService, confirmationService, reportQueryService) {
        this.fb = fb;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.reportQueryService = reportQueryService;
        this.msg = [];
        // 查询超时预警信息实例
        this.queryTimeoutWarning = new _report_query_model__WEBPACK_IMPORTED_MODULE_7__["TimeOutFlowModel"]();
        // 超时预警信息列表
        this.timeoutWarningList = [];
        // 分页实例
        this.paginatorInstance = new _report_query_model__WEBPACK_IMPORTED_MODULE_7__["TimeOutFlowModel"]();
        // 节点类型
        this.nodeTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["TASK_NODE_TYPES"];
        // 当前任务处理状态
        this.handleState = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["WORK_HANDLE_STATES"];
        // 任务类型
        this.taskTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["TASK_TYPES"];
        // 任务级别
        this.taskRates = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["TASK_RATE"];
        // 任务紧急程度
        this.taskUrgents = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["TASK_URGENT"];
        // 任务处理类型
        this.askHandleTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["TASK_HANDLE_TYPES"];
        // 流程结束类型
        this.endTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["TASK_END_TYPES"];
    }
    TimeoutFLowQueryComponent.prototype.ngOnInit = function () {
        this.paginatorInstance.rowNum = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].rowNum;
        this.paginatorInstance.startRow = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].startRow;
    };
    // 按照搜索条件查询
    TimeoutFLowQueryComponent.prototype.queryFirst = function (table) {
        table.first = 0;
        this.query(table);
    };
    TimeoutFLowQueryComponent.prototype.query = function (table) {
        table.first = table.first || 0;
        table.rows = table.rows || parseInt(_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].rowNum, 10);
        // 每页显示的条数
        this.paginatorInstance.rowNum = table.rows + '';
        // 当前页
        this.paginatorInstance.startRow = (table.first / table.rows) + 1 + '';
        this.queryTimeoutWarningList(this.alarmTime, this.queryTimeoutWarning.bigClassNo, this.queryTimeoutWarning.littleClassNo, this.queryTimeoutWarning.littleClassName);
    };
    // 查询重置
    TimeoutFLowQueryComponent.prototype.reset = function () {
        this.alarmTime = null;
        this.queryTimeoutWarning = new _report_query_model__WEBPACK_IMPORTED_MODULE_7__["TimeOutFlowModel"]();
    };
    // 查询超时流程列表
    TimeoutFLowQueryComponent.prototype.queryTimeoutWarningList = function (alarmTime, itemType, itemNode, itemName) {
        var _this = this;
        var bodyParams = {
            alarmTime: alarmTime + "\u65F6",
            itemType: itemType,
            itemNode: itemNode,
            itemName: itemName,
            pageRows: parseInt(this.paginatorInstance.rowNum, 10),
            curPage: parseInt(this.paginatorInstance.startRow, 10)
        };
        this.reportQueryService.listTimeOutWorkFlowList(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.timeoutWarningList = data.pageData[0].result;
                _this.timeoutWarningList && _this.timeoutWarningList.length && _this.timeoutWarningList.map(function (item) {
                    item.customSystemCode = item.processCode.split(":")[0];
                    item.customStartUserId = item.startUserId ? item.startUserName ? item.startUserId + " (" + item.startUserName + ")" : "" + item.startUserId : '';
                });
                _this.total = data.pageData[0].totalRows;
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    TimeoutFLowQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeout-flow-query',
            template: __webpack_require__(/*! ./timeout-flow-query.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-flow-query/timeout-flow-query.component.html"),
            styles: [__webpack_require__(/*! ./timeout-flow-query.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-flow-query/timeout-flow-query.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _report_query_service__WEBPACK_IMPORTED_MODULE_8__["ReportQueryService"]])
    ], TimeoutFLowQueryComponent);
    return TimeoutFLowQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-process-report/timeout-process-report.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-process-report/timeout-process-report.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'超时流程统计报表查询'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">大类编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTimeoutProcessReport.bigClassNo\">\r\n\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">小类编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTimeoutProcessReport.littleClassNo\">\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">小类编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTimeoutProcessReport.littleClassName\">\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">流程：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTimeoutProcessReport.processCode\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <div>\r\n      <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst(dt)\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt [value]=\"timeoutProcessReportList\" emptyMessage=\"暂无数据\" [lazy]=\"true\" (onLazyLoad)=\"query(dt)\" [rows]=\"paginatorInstance.rowNum\"\r\n      [(totalRecords)]=\"total\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[10,20,30]\" scrollable=\"true\" scrollWidth=\"'100%'\"\r\n      [style]=\"{'text-align':'center'}\">\r\n      <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processName\" header=\"流程名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processName\"> {{item.processName}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customSystemCode\" header=\"流程编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customSystemCode\">{{item.customSystemCode}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"systemCode\" header=\"系统编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.systemCode\">{{item.tasksystemCodeCode}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"timeOutProcessNums\" header=\"超时流程实例数\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.timeOutProcessNums\">{{item.timeOutProcessNums}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"timeOutProcessTime\" header=\"超时处理平均时间\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.timeOutProcessTime\">{{item.timeOutProcessTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n<p-growl [value]=\"msg\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-process-report/timeout-process-report.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-process-report/timeout-process-report.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n.disable-resize {\n  resize: none; }\n\n:host/deep/ .ui-dialog input, :host/deep/ .ui-dialog textarea {\n  width: 30% !important; }\n\n:host/deep/ .ui-dialog .btn {\n  text-align: center; }\n\n:host/deep/ .ui-dialog .btn button {\n    margin: 30px; }\n\n:host/deep/ .ui-dialog label {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvdGltZW91dC1wcm9jZXNzLXJlcG9ydC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFx3b3JrZmxvd1xcYWN0aXZpdGktd29yay1mbG93XFxyZXBvcnQtcXVlcnlcXHRpbWVvdXQtcHJvY2Vzcy1yZXBvcnRcXHRpbWVvdXQtcHJvY2Vzcy1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFTSxnQkFBZTtFQUNmLG1CQUFrQixFQUFBOztBQUh4QjtFQU1NLG1CQUFrQixFQUFBOztBQU54QjtFQVNNLHFCQUFxQixFQUFBOztBQU0zQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHFCQUFxQixFQUFBOztBQUR2QjtJQUdNLHNCQUFzQixFQUFBOztBQUg1QjtJQU1NLFlBQVksRUFBQTs7QUFLbEI7RUFDRSxXQUFVLEVBQUE7O0FBR1o7RUFDRSxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRyx3QkFBd0I7RUFDeEIsdUJBQXVCLEVBQUE7O0FBRzFCO0VBQ0cscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdkO0VBQ0UsWUFDRixFQUFBOztBQUVBO0VBRUkscUJBQXFCLEVBQUE7O0FBRnpCO0VBS0ksa0JBQWtCLEVBQUE7O0FBTHRCO0lBT1EsWUFBWSxFQUFBOztBQVBwQjtFQVdJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFMWDtJQVFJLFdBQVcsRUFBQTs7QUFJZjtFQUVJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvdGltZW91dC1wcm9jZXNzLXJlcG9ydC90aW1lb3V0LXByb2Nlc3MtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tb2R1bGV7XHJcbiAgLnJvd0xvY2F0b257XHJcbiAgICAgIG1hcmdpbi10b3A6NjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG4gIH1cclxuICAuYnRuTG9jYXRpb257XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3due1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFye1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICAudWktZGF0ZXBpY2tlcntcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICB9XHJcbn0gXHJcblxyXG5cclxuc3Bhbi50ZWx7XHJcbiAgY29sb3I6I2YwMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YXtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3d7XHJcbiAgIHdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcclxuICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yaWdodExheW91dHtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICB3aWR0aDogMTYlO1xyXG4gICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5kaXNhYmxlLXJlc2l6ZXtcclxuICByZXNpemU6IG5vbmVcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyB7XHJcbiAgaW5wdXQsdGV4dGFyZWF7XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBsYWJlbHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zcGlubmVyIC51aS1zcGlubmVyLWJ1dHRvbntcclxuICBoZWlnaHQ6IDQ5JSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWluLXdpZHRoOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIC5mYS1jYXJldC1kb3duIHtcclxuICAgIHRvcDogMC4yNWVtO1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXNwaW5uZXItZG93biAuZmEtY2FyZXQtZG93biB7XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJrZXlib2FyZF9hcnJvd19kb3duXCI7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-process-report/timeout-process-report.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-process-report/timeout-process-report.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: TimeoutProcessReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutProcessReportComponent", function() { return TimeoutProcessReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _report_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../report-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.service.ts");
/* harmony import */ var _report_query_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../report-query-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TimeoutProcessReportComponent = /** @class */ (function () {
    function TimeoutProcessReportComponent(messageService, confirmationService, reportQueryService) {
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.reportQueryService = reportQueryService;
        this.msg = [];
        // 任务处理时间报表
        this.timeoutProcessReportList = [];
        // 查询任务处理时间报表
        this.queryTimeoutProcessReport = {
            bigClassNo: '',
            littleClassNo: '',
            littleClassName: '',
            processCode: ''
        };
        // 分页实例
        this.paginatorInstance = new _report_query_model__WEBPACK_IMPORTED_MODULE_6__["TimeoutProcessReportModel"]();
    }
    TimeoutProcessReportComponent.prototype.ngOnInit = function () {
        this.paginatorInstance.rowNum = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].rowNum;
        this.paginatorInstance.startRow = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].startRow;
    };
    // 按照搜索条件查询
    TimeoutProcessReportComponent.prototype.queryFirst = function (table) {
        table.first = 0;
        this.query(table);
    };
    TimeoutProcessReportComponent.prototype.query = function (table) {
        table.first = table.first || 0;
        table.rows = table.rows || parseInt(_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].rowNum, 10);
        // 每页显示的条数
        this.paginatorInstance.rowNum = table.rows + '';
        // 当前页
        this.paginatorInstance.startRow = (table.first / table.rows) + 1 + '';
        this.querTimeoutProcessReportList(this.queryTimeoutProcessReport.bigClassNo, this.queryTimeoutProcessReport.littleClassNo, this.queryTimeoutProcessReport.littleClassName, this.queryTimeoutProcessReport.processCode);
    };
    // 查询重置
    TimeoutProcessReportComponent.prototype.reset = function () {
        this.queryTimeoutProcessReport = {
            bigClassNo: '',
            littleClassNo: '',
            littleClassName: '',
            processCode: ''
        };
    };
    // 查询任务处理时间报表
    TimeoutProcessReportComponent.prototype.querTimeoutProcessReportList = function (itemType, itemNode, itemName, processCode) {
        var _this = this;
        var bodyParams = {
            itemType: itemType,
            itemNode: itemNode,
            itemName: itemName,
            processCode: processCode,
            pageRows: parseInt(this.paginatorInstance.rowNum, 10),
            curPage: parseInt(this.paginatorInstance.startRow, 10)
        };
        this.reportQueryService.tiemOutProcessReport(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.timeoutProcessReportList = data.pageData[0].result;
                _this.timeoutProcessReportList && _this.timeoutProcessReportList.length && _this.timeoutProcessReportList.map(function (item) {
                    item.customSystemCode = item.processCode.split(":")[0];
                });
                _this.total = data.pageData[0].totalRows;
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    TimeoutProcessReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeout-process-report',
            template: __webpack_require__(/*! ./timeout-process-report.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-process-report/timeout-process-report.component.html"),
            styles: [__webpack_require__(/*! ./timeout-process-report.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-process-report/timeout-process-report.component.scss")],
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _report_query_service__WEBPACK_IMPORTED_MODULE_5__["ReportQueryService"]])
    ], TimeoutProcessReportComponent);
    return TimeoutProcessReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-query/timeout-task-query.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-query/timeout-task-query.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'超时任务查询'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">流程编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTimeoutTask.bigClassNo\">\r\n    </div>\r\n    <!-- <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">小类编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTimeoutTask.littleClassNo\">\r\n    </div>-->\r\n  </div>\r\n  <!-- <div class=\"ui-g-12\">\r\n\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">小类名称：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTimeoutTask.littleClassName\">\r\n    </div>\r\n  </div>  -->\r\n\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <div>\r\n      <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst(dt)\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt [value]=\"timeoutTaskList\" emptyMessage=\"暂无数据\" [lazy]=\"true\" (onLazyLoad)=\"query(dt)\" [rows]=\"paginatorInstance.rowNum\"\r\n      [(totalRecords)]=\"total\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[10,20,30]\" scrollable=\"true\" scrollWidth=\"'100%'\"\r\n      [style]=\"{'text-align':'center'}\">\r\n      <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customSystemCode\" header=\"流程编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customSystemCode\">{{item.customSystemCode}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processId\" header=\"流程实例ID\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processId\">{{item.processId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"taskId\" header=\"任务ID\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskId\">{{item.taskId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <!-- <p-column field=\"taskCode\" header=\"任务节点编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskCode\">{{item.taskCode}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <p-column field=\"taskName\" header=\"任务节点名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskName\">{{item.taskName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"taskType\" header=\"任务节点类型\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskType | mapValuePie: businessNodeTypes: 'type' : 'descp'\">\r\n            {{item.taskType | mapValuePie: businessNodeTypes: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"workType\" header=\"任务类型\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.workType | mapValuePie: taskTypes: 'type' : 'descp'\">\r\n            {{item.workType | mapValuePie: taskTypes: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <!-- <p-column field=\"taskUrgent\" header=\"任务紧急程度\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskUrgent | mapValuePie: taskUrgents: 'type' : 'descp'\">\r\n            {{item.taskUrgent | mapValuePie: taskUrgents: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <!-- <p-column field=\"taskBussName\" header=\"任务业务名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskBussName\">{{item.taskBussName}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n\r\n      <p-column field=\"customWorkCreater\" header=\"流程发起人\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customWorkCreater\">{{item.customWorkCreater}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <!-- <p-column field=\"superTaskId\" header=\"上一节点任务Id\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.superTaskId\">{{item.superTaskId}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <!-- <p-column field=\"createDate\" header=\"任务创建时间\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.createDate\">{{item.createDate}} </span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <p-column field=\"startDate\" header=\"任务开始时间\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.startDate | date: 'y-MM-dd HH:mm:ss'\">\r\n            {{item.startDate | date: 'y-MM-dd HH:mm:ss'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"updateDate\" header=\"任务处理时间\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.updateDate | date: 'y-MM-dd HH:mm:ss'\">\r\n            {{item.updateDate | date: 'y-MM-dd HH:mm:ss'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"endDate\" header=\"任务截止时间\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.endDate| date: 'y-MM-dd HH:mm:ss'\">\r\n            {{item.endDate| date: 'y-MM-dd HH:mm:ss'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"workState\" header=\"任务处理状态\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.workState | mapValuePie: processState: 'type' : 'descp'\">\r\n            {{item.workState | mapValuePie: processState: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customdoTaskActor\" header=\"任务处理人员\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customdoTaskActor\">{{item.customdoTaskActor}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <!-- <p-column field=\"wfDesc\" header=\"流程备注\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.wfDesc\">{{item.wfDesc}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n<p-growl [value]=\"msg\"></p-growl>\r\n<p-confirmDialog header=\"Confirmation\" acceptLabel=\"确定\" rejectLabel=\"取消\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-query/timeout-task-query.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-query/timeout-task-query.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n.disable-resize {\n  resize: none; }\n\n:host/deep/ .ui-dialog input, :host/deep/ .ui-dialog textarea {\n  width: 30% !important; }\n\n:host/deep/ .ui-dialog .btn {\n  text-align: center; }\n\n:host/deep/ .ui-dialog .btn button {\n    margin: 30px; }\n\n:host/deep/ .ui-dialog label {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvdGltZW91dC10YXNrLXF1ZXJ5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHdvcmtmbG93XFxhY3Rpdml0aS13b3JrLWZsb3dcXHJlcG9ydC1xdWVyeVxcdGltZW91dC10YXNrLXF1ZXJ5XFx0aW1lb3V0LXRhc2stcXVlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFTSxnQkFBZTtFQUNmLG1CQUFrQixFQUFBOztBQUh4QjtFQU1NLG1CQUFrQixFQUFBOztBQU54QjtFQVNNLHFCQUFxQixFQUFBOztBQU0zQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHFCQUFxQixFQUFBOztBQUR2QjtJQUdNLHNCQUFzQixFQUFBOztBQUg1QjtJQU1NLFlBQVksRUFBQTs7QUFLbEI7RUFDRSxXQUFVLEVBQUE7O0FBR1o7RUFDRSxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRyx3QkFBd0I7RUFDeEIsdUJBQXVCLEVBQUE7O0FBRzFCO0VBQ0cscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdkO0VBQ0UsWUFDRixFQUFBOztBQUVBO0VBRUkscUJBQXFCLEVBQUE7O0FBRnpCO0VBS0ksa0JBQWtCLEVBQUE7O0FBTHRCO0lBT1EsWUFBWSxFQUFBOztBQVBwQjtFQVdJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFMWDtJQVFJLFdBQVcsRUFBQTs7QUFJZjtFQUVJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvdGltZW91dC10YXNrLXF1ZXJ5L3RpbWVvdXQtdGFzay1xdWVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubW9kdWxle1xyXG4gIC5yb3dMb2NhdG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOjYwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NDBweDtcclxuICB9XHJcbiAgLmJ0bkxvY2F0aW9ue1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93bntcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jYWxlbmRhcntcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgLnVpLWRhdGVwaWNrZXJ7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG59IFxyXG5cclxuXHJcbnNwYW4udGVse1xyXG4gIGNvbG9yOiNmMDA7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGF7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93e1xyXG4gICB3aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmlnaHRMYXlvdXR7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgd2lkdGg6IDE2JTtcclxuICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uZGlzYWJsZS1yZXNpemV7XHJcbiAgcmVzaXplOiBub25lXHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cge1xyXG4gIGlucHV0LHRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgIH1cclxuICB9XHJcbiAgbGFiZWx7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3Bpbm5lciAudWktc3Bpbm5lci1idXR0b257XHJcbiAgaGVpZ2h0OiA0OSUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICAuZmEtY2FyZXQtZG93biB7XHJcbiAgICB0b3A6IDAuMjVlbTtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zcGlubmVyLWRvd24gLmZhLWNhcmV0LWRvd24ge1xyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwia2V5Ym9hcmRfYXJyb3dfZG93blwiO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-query/timeout-task-query.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-query/timeout-task-query.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: TimeoutTaskQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutTaskQueryComponent", function() { return TimeoutTaskQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _report_query_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../report-query-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query-model.ts");
/* harmony import */ var _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/constant/code.value */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/code.value.ts");
/* harmony import */ var _report_query_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../report-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TimeoutTaskQueryComponent = /** @class */ (function () {
    function TimeoutTaskQueryComponent(fb, messageService, confirmationService, reportQueryService) {
        this.fb = fb;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.reportQueryService = reportQueryService;
        this.msg = [];
        // 查询超时预警信息实例
        this.queryTimeoutTask = new _report_query_model__WEBPACK_IMPORTED_MODULE_6__["TimeOutWarningModel"]();
        // 超时预警信息列表
        this.timeoutTaskList = [];
        // 分页实例
        this.paginatorInstance = new _report_query_model__WEBPACK_IMPORTED_MODULE_6__["TimeOutWarningModel"]();
        // 节点类型
        this.nodeTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["TASK_NODE_TYPES"];
        // 当前任务处理状态
        this.handleState = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["WORK_HANDLE_STATES"];
        // 任务类型
        this.taskTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["TASK_TYPES"];
        // 任务级别
        this.taskRates = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["TASK_RATE"];
        // 任务紧急程度
        this.taskUrgents = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["TASK_URGENT"];
        // 任务处理类型
        this.askHandleTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["TASK_HANDLE_TYPES"];
        // 节点类型
        this.businessNodeTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["TASK_NODE_TYPES"];
        // 当前任务处理状态
        this.processState = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["WORK_HANDLE_STATES"];
    }
    TimeoutTaskQueryComponent.prototype.ngOnInit = function () {
        this.paginatorInstance.rowNum = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].rowNum;
        this.paginatorInstance.startRow = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].startRow;
    };
    // 按照搜索条件查询
    TimeoutTaskQueryComponent.prototype.queryFirst = function (table) {
        table.first = 0;
        this.query(table);
    };
    TimeoutTaskQueryComponent.prototype.query = function (table) {
        table.first = table.first || 0;
        table.rows = table.rows || parseInt(_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].rowNum, 10);
        // 每页显示的条数
        this.paginatorInstance.rowNum = table.rows + '';
        // 当前页
        this.paginatorInstance.startRow = (table.first / table.rows) + 1 + '';
        this.queryTimeoutWarningList(this.queryTimeoutTask.bigClassNo, this.queryTimeoutTask.littleClassNo, this.queryTimeoutTask.littleClassName);
    };
    // 查询重置
    TimeoutTaskQueryComponent.prototype.reset = function () {
        this.queryTimeoutTask = new _report_query_model__WEBPACK_IMPORTED_MODULE_6__["TimeOutWarningModel"]();
    };
    // 查询超时预警列表
    TimeoutTaskQueryComponent.prototype.queryTimeoutWarningList = function (itemType, itemNode, itemName) {
        var _this = this;
        var bodyParams = {
            itemType: itemType,
            itemNode: itemNode,
            itemName: itemName,
            pageRows: parseInt(this.paginatorInstance.rowNum, 10),
            curPage: parseInt(this.paginatorInstance.startRow, 10)
        };
        this.reportQueryService.listTimeOutTaskList(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.timeoutTaskList = data.pageData[0].result;
                _this.timeoutTaskList && _this.timeoutTaskList.length && _this.timeoutTaskList.map(function (item) {
                    item.customSystemCode = item.processCode.split(":")[0];
                    item.customWorkCreater = item.workCreater ? item.workCreaterName ? item.workCreater + " (" + item.workCreaterName + ")" : "" + item.workCreater : '';
                    item.customdoTaskActor = item.workState === '0' ? item.taskActors : item.doTaskActor;
                });
                _this.total = data.pageData[0].totalRows;
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    TimeoutTaskQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeout-task-query',
            template: __webpack_require__(/*! ./timeout-task-query.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-query/timeout-task-query.component.html"),
            styles: [__webpack_require__(/*! ./timeout-task-query.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-query/timeout-task-query.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _report_query_service__WEBPACK_IMPORTED_MODULE_8__["ReportQueryService"]])
    ], TimeoutTaskQueryComponent);
    return TimeoutTaskQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-report/timeout-task-report.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-report/timeout-task-report.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'超时任务统计报表查询'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">大类编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTimeoutTaskReport.bigClassNo\">\r\n\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">小类编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTimeoutTaskReport.littleClassNo\">\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">小类编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTimeoutTaskReport.littleClassName\">\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">流程：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTimeoutTaskReport.processCode\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <div>\r\n      <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst(dt)\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt [value]=\"timeoutTaskReportList\" emptyMessage=\"暂无数据\" [lazy]=\"true\" (onLazyLoad)=\"query(dt)\" [rows]=\"paginatorInstance.rowNum\"\r\n      [(totalRecords)]=\"total\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[10,20,30]\" scrollable=\"true\" scrollWidth=\"'100%'\"\r\n      [style]=\"{'text-align':'center'}\">\r\n      <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processName\" header=\"流程名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processName\"> {{item.processName}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customSystemCode\" header=\"流程编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customSystemCode\">{{item.customSystemCode}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"systemCode\" header=\"系统编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.systemCode\">{{item.tasksystemCodeCode}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"timeOutTaskNums\" header=\"超时任务数\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.timeOutTaskNums\">{{item.timeOutTaskNums}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"timeOutTaskTime\" header=\"超时处理平均时长(毫秒)\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.timeOutTaskTime\">{{item.timeOutTaskTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n<p-growl [value]=\"msg\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-report/timeout-task-report.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-report/timeout-task-report.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n.disable-resize {\n  resize: none; }\n\n:host/deep/ .ui-dialog input, :host/deep/ .ui-dialog textarea {\n  width: 30% !important; }\n\n:host/deep/ .ui-dialog .btn {\n  text-align: center; }\n\n:host/deep/ .ui-dialog .btn button {\n    margin: 30px; }\n\n:host/deep/ .ui-dialog label {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvdGltZW91dC10YXNrLXJlcG9ydC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFx3b3JrZmxvd1xcYWN0aXZpdGktd29yay1mbG93XFxyZXBvcnQtcXVlcnlcXHRpbWVvdXQtdGFzay1yZXBvcnRcXHRpbWVvdXQtdGFzay1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFTSxnQkFBZTtFQUNmLG1CQUFrQixFQUFBOztBQUh4QjtFQU1NLG1CQUFrQixFQUFBOztBQU54QjtFQVNNLHFCQUFxQixFQUFBOztBQU0zQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHFCQUFxQixFQUFBOztBQUR2QjtJQUdNLHNCQUFzQixFQUFBOztBQUg1QjtJQU1NLFlBQVksRUFBQTs7QUFLbEI7RUFDRSxXQUFVLEVBQUE7O0FBR1o7RUFDRSxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRyx3QkFBd0I7RUFDeEIsdUJBQXVCLEVBQUE7O0FBRzFCO0VBQ0cscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdkO0VBQ0UsWUFDRixFQUFBOztBQUVBO0VBRUkscUJBQXFCLEVBQUE7O0FBRnpCO0VBS0ksa0JBQWtCLEVBQUE7O0FBTHRCO0lBT1EsWUFBWSxFQUFBOztBQVBwQjtFQVdJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFMWDtJQVFJLFdBQVcsRUFBQTs7QUFJZjtFQUVJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvdGltZW91dC10YXNrLXJlcG9ydC90aW1lb3V0LXRhc2stcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tb2R1bGV7XHJcbiAgLnJvd0xvY2F0b257XHJcbiAgICAgIG1hcmdpbi10b3A6NjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG4gIH1cclxuICAuYnRuTG9jYXRpb257XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3due1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFye1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICAudWktZGF0ZXBpY2tlcntcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICB9XHJcbn0gXHJcblxyXG5cclxuc3Bhbi50ZWx7XHJcbiAgY29sb3I6I2YwMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YXtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3d7XHJcbiAgIHdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcclxuICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yaWdodExheW91dHtcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICB3aWR0aDogMTYlO1xyXG4gICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5kaXNhYmxlLXJlc2l6ZXtcclxuICByZXNpemU6IG5vbmVcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyB7XHJcbiAgaW5wdXQsdGV4dGFyZWF7XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBsYWJlbHtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zcGlubmVyIC51aS1zcGlubmVyLWJ1dHRvbntcclxuICBoZWlnaHQ6IDQ5JSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWluLXdpZHRoOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIC5mYS1jYXJldC1kb3duIHtcclxuICAgIHRvcDogMC4yNWVtO1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXNwaW5uZXItZG93biAuZmEtY2FyZXQtZG93biB7XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJrZXlib2FyZF9hcnJvd19kb3duXCI7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-report/timeout-task-report.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-report/timeout-task-report.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: TimeoutTaskReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutTaskReportComponent", function() { return TimeoutTaskReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _report_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../report-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.service.ts");
/* harmony import */ var _report_query_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../report-query-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TimeoutTaskReportComponent = /** @class */ (function () {
    function TimeoutTaskReportComponent(messageService, confirmationService, reportQueryService) {
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.reportQueryService = reportQueryService;
        this.msg = [];
        // 任务处理时间报表
        this.timeoutTaskReportList = [];
        // 查询任务处理时间报表
        this.queryTimeoutTaskReport = {
            bigClassNo: '',
            littleClassNo: '',
            littleClassName: '',
            processCode: ''
        };
        // 分页实例
        this.paginatorInstance = new _report_query_model__WEBPACK_IMPORTED_MODULE_6__["TimeoutTaskReportModel"]();
    }
    TimeoutTaskReportComponent.prototype.ngOnInit = function () {
        this.paginatorInstance.rowNum = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].rowNum;
        this.paginatorInstance.startRow = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].startRow;
    };
    // 按照搜索条件查询
    TimeoutTaskReportComponent.prototype.queryFirst = function (table) {
        table.first = 0;
        this.query(table);
    };
    TimeoutTaskReportComponent.prototype.query = function (table) {
        table.first = table.first || 0;
        table.rows = table.rows || parseInt(_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].rowNum, 10);
        // 每页显示的条数
        this.paginatorInstance.rowNum = table.rows + '';
        // 当前页
        this.paginatorInstance.startRow = (table.first / table.rows) + 1 + '';
        this.querTimeoutTaskReportList(this.queryTimeoutTaskReport.bigClassNo, this.queryTimeoutTaskReport.littleClassNo, this.queryTimeoutTaskReport.littleClassName, this.queryTimeoutTaskReport.processCode);
    };
    // 查询重置
    TimeoutTaskReportComponent.prototype.reset = function () {
        this.queryTimeoutTaskReport = {
            bigClassNo: '',
            littleClassNo: '',
            littleClassName: '',
            processCode: ''
        };
    };
    // 查询任务处理时间报表
    TimeoutTaskReportComponent.prototype.querTimeoutTaskReportList = function (itemType, itemNode, itemName, processCode) {
        var _this = this;
        var bodyParams = {
            itemType: itemType,
            itemNode: itemNode,
            itemName: itemName,
            processCode: processCode,
            pageRows: parseInt(this.paginatorInstance.rowNum, 10),
            curPage: parseInt(this.paginatorInstance.startRow, 10)
        };
        this.reportQueryService.tiemOutTaskReport(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.timeoutTaskReportList = data.pageData[0].result;
                _this.timeoutTaskReportList && _this.timeoutTaskReportList.length && _this.timeoutTaskReportList.map(function (item) {
                    item.customSystemCode = item.processCode.split(":")[0];
                });
                _this.total = data.pageData[0].totalRows;
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    TimeoutTaskReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeout-task-report',
            template: __webpack_require__(/*! ./timeout-task-report.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-report/timeout-task-report.component.html"),
            styles: [__webpack_require__(/*! ./timeout-task-report.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-task-report/timeout-task-report.component.scss")],
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _report_query_service__WEBPACK_IMPORTED_MODULE_5__["ReportQueryService"]])
    ], TimeoutTaskReportComponent);
    return TimeoutTaskReportComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-warning-query/timeout-warning-query.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-warning-query/timeout-warning-query.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'超时预警查询'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">超时预警提前时间：</label>\r\n      <p-spinner [(ngModel)]=\"alarmTime\" [min]=\"1\" placeholder=\"默认单位为小时\"></p-spinner>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">流程编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTimeoutWarning.bigClassNo\">\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">小类编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTimeoutWarning.littleClassNo\">\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">小类名称：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryTimeoutWarning.littleClassName\">\r\n    </div>\r\n  </div> -->\r\n\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <div>\r\n      <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst(dt)\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt [value]=\"timeoutWarningList\" emptyMessage=\"暂无数据\" [lazy]=\"true\" (onLazyLoad)=\"query(dt)\" [rows]=\"paginatorInstance.rowNum\"\r\n      [(totalRecords)]=\"total\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[10,20,30]\" scrollable=\"true\" scrollWidth=\"'100%'\"\r\n      [style]=\"{'text-align':'center'}\">\r\n      <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customSystemCode\" header=\"流程编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customSystemCode\">{{item.customSystemCode}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processId\" header=\"流程实例ID\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processId\">{{item.processId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"taskId\" header=\"任务ID\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskId\">{{item.taskId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <!-- <p-column field=\"taskCode\" header=\"任务节点编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskCode\">{{item.taskCode}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <p-column field=\"taskName\" header=\"任务节点名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskName\">{{item.taskName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"taskType\" header=\"任务节点类型\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskType | mapValuePie: businessNodeTypes: 'type' : 'descp'\">\r\n            {{item.taskType | mapValuePie: businessNodeTypes: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"workType\" header=\"任务类型\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.workType | mapValuePie: taskTypes: 'type' : 'descp'\">\r\n            {{item.workType | mapValuePie: taskTypes: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <!-- <p-column field=\"taskUrgent\" header=\"任务紧急程度\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskUrgent | mapValuePie: taskUrgents: 'type' : 'descp'\">\r\n            {{item.taskUrgent | mapValuePie: taskUrgents: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <!-- <p-column field=\"taskBussName\" header=\"任务业务名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskBussName\">{{item.taskBussName}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n\r\n      <p-column field=\"customWorkCreater\" header=\"流程发起人\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customWorkCreater\">{{item.customWorkCreater}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <!-- <p-column field=\"superTaskId\" header=\"上一节点任务Id\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.superTaskId\">{{item.superTaskId}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <!-- <p-column field=\"createDateStr\" header=\"任务创建时间\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.createDateStr\">{{item.createDateStr}} </span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <p-column field=\"startDateStr\" header=\"任务开始时间\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.startDateStr\">{{item.startDateStr}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"updateDateStr\" header=\"任务更改时间\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.updateDateStr\">{{item.updateDateStr}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"endDateStr\" header=\"任务截止时间\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.endDateStr\"> {{item.endDateStr}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"workState\" header=\"任务处理状态\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.workState | mapValuePie: processState: 'type' : 'descp'\">\r\n            {{item.workState | mapValuePie: processState: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customdoTaskActor\" header=\"任务处理人员\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customdoTaskActor\">{{item.customdoTaskActor}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"wfDesc\" header=\"流程备注\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.wfDesc\">{{item.wfDesc}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n<p-growl [value]=\"msg\"></p-growl>\r\n<p-confirmDialog header=\"Confirmation\" acceptLabel=\"确定\" rejectLabel=\"取消\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-warning-query/timeout-warning-query.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-warning-query/timeout-warning-query.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n.disable-resize {\n  resize: none; }\n\n:host/deep/ .ui-dialog input, :host/deep/ .ui-dialog textarea {\n  width: 30% !important; }\n\n:host/deep/ .ui-dialog .btn {\n  text-align: center; }\n\n:host/deep/ .ui-dialog .btn button {\n    margin: 30px; }\n\n:host/deep/ .ui-dialog label {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n:host/deep/ .ui-spinner {\n  width: 30% !important; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvdGltZW91dC13YXJuaW5nLXF1ZXJ5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHdvcmtmbG93XFxhY3Rpdml0aS13b3JrLWZsb3dcXHJlcG9ydC1xdWVyeVxcdGltZW91dC13YXJuaW5nLXF1ZXJ5XFx0aW1lb3V0LXdhcm5pbmctcXVlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFTSxnQkFBZTtFQUNmLG1CQUFrQixFQUFBOztBQUh4QjtFQU1NLG1CQUFrQixFQUFBOztBQU54QjtFQVNNLHFCQUFxQixFQUFBOztBQU0zQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHFCQUFxQixFQUFBOztBQUR2QjtJQUdNLHNCQUFzQixFQUFBOztBQUg1QjtJQU1NLFlBQVksRUFBQTs7QUFLbEI7RUFDRSxXQUFVLEVBQUE7O0FBR1o7RUFDRSxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRyx3QkFBd0I7RUFDeEIsdUJBQXVCLEVBQUE7O0FBRzFCO0VBQ0cscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdkO0VBQ0UsWUFDRixFQUFBOztBQUVBO0VBRUkscUJBQXFCLEVBQUE7O0FBRnpCO0VBS0ksa0JBQWtCLEVBQUE7O0FBTHRCO0lBT1EsWUFBWSxFQUFBOztBQVBwQjtFQVdJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFMWDtJQVFJLFdBQVcsRUFBQTs7QUFJZjtFQUVJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9yZXBvcnQtcXVlcnkvdGltZW91dC13YXJuaW5nLXF1ZXJ5L3RpbWVvdXQtd2FybmluZy1xdWVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubW9kdWxle1xyXG4gIC5yb3dMb2NhdG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOjYwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NDBweDtcclxuICB9XHJcbiAgLmJ0bkxvY2F0aW9ue1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93bntcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jYWxlbmRhcntcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgLnVpLWRhdGVwaWNrZXJ7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG59IFxyXG5cclxuXHJcbnNwYW4udGVse1xyXG4gIGNvbG9yOiNmMDA7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGF7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93e1xyXG4gICB3aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmlnaHRMYXlvdXR7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgd2lkdGg6IDE2JTtcclxuICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uZGlzYWJsZS1yZXNpemV7XHJcbiAgcmVzaXplOiBub25lXHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cge1xyXG4gIGlucHV0LHRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgIH1cclxuICB9XHJcbiAgbGFiZWx7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcbjpob3N0L2RlZXAvIC51aS1zcGlubmVye1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXNwaW5uZXIgLnVpLXNwaW5uZXItYnV0dG9ue1xyXG4gIGhlaWdodDogNDklICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgLmZhLWNhcmV0LWRvd24ge1xyXG4gICAgdG9wOiAwLjI1ZW07XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3Bpbm5lci1kb3duIC5mYS1jYXJldC1kb3duIHtcclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcImtleWJvYXJkX2Fycm93X2Rvd25cIjtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-warning-query/timeout-warning-query.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-warning-query/timeout-warning-query.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: TimeoutWarningQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutWarningQueryComponent", function() { return TimeoutWarningQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _report_query_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../report-query-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query-model.ts");
/* harmony import */ var _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/constant/code.value */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/code.value.ts");
/* harmony import */ var _report_query_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../report-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/report-query.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TimeoutWarningQueryComponent = /** @class */ (function () {
    function TimeoutWarningQueryComponent(fb, messageService, confirmationService, reportQueryService) {
        this.fb = fb;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.reportQueryService = reportQueryService;
        this.msg = [];
        // 查询超时预警信息实例
        this.queryTimeoutWarning = new _report_query_model__WEBPACK_IMPORTED_MODULE_6__["TimeOutWarningModel"]();
        // 超时预警信息列表
        this.timeoutWarningList = [];
        // 分页实例
        this.paginatorInstance = new _report_query_model__WEBPACK_IMPORTED_MODULE_6__["TimeOutWarningModel"]();
        // 节点类型
        this.nodeTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["TASK_NODE_TYPES"];
        // 当前任务处理状态
        this.handleState = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["WORK_HANDLE_STATES"];
        // 任务类型
        this.taskTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["TASK_TYPES"];
        // 任务级别
        this.taskRates = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["TASK_RATE"];
        // 任务紧急程度
        this.taskUrgents = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["TASK_URGENT"];
        // 任务处理类型
        this.askHandleTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["TASK_HANDLE_TYPES"];
        // 节点类型
        this.businessNodeTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["TASK_NODE_TYPES"];
        // 当前任务处理状态
        this.processState = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["WORK_HANDLE_STATES"];
    }
    TimeoutWarningQueryComponent.prototype.ngOnInit = function () {
        this.paginatorInstance.rowNum = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].rowNum;
        this.paginatorInstance.startRow = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].startRow;
    };
    // 按照搜索条件查询
    TimeoutWarningQueryComponent.prototype.queryFirst = function (table) {
        table.first = 0;
        this.query(table);
    };
    TimeoutWarningQueryComponent.prototype.query = function (table) {
        table.first = table.first || 0;
        table.rows = table.rows || parseInt(_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["paginatorUtils"].rowNum, 10);
        // 每页显示的条数
        this.paginatorInstance.rowNum = table.rows + '';
        // 当前页
        this.paginatorInstance.startRow = (table.first / table.rows) + 1 + '';
        this.queryTimeoutWarningList(this.alarmTime, this.queryTimeoutWarning.bigClassNo, this.queryTimeoutWarning.littleClassNo, this.queryTimeoutWarning.littleClassName);
    };
    // 查询重置
    TimeoutWarningQueryComponent.prototype.reset = function () {
        this.alarmTime = null;
        this.queryTimeoutWarning = new _report_query_model__WEBPACK_IMPORTED_MODULE_6__["TimeOutWarningModel"]();
    };
    // 查询超时预警列表
    TimeoutWarningQueryComponent.prototype.queryTimeoutWarningList = function (alarmTime, itemType, itemNode, itemName) {
        var _this = this;
        var bodyParams = {
            alarmTime: alarmTime ? alarmTime + "\u65F6" : null,
            itemType: itemType,
            itemNode: itemNode,
            itemName: itemName,
            pageRows: parseInt(this.paginatorInstance.rowNum, 10),
            curPage: parseInt(this.paginatorInstance.startRow, 10)
        };
        this.reportQueryService.listNoTimeOutTaskList(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.timeoutWarningList = data.pageData[0].result;
                _this.total = data.pageData[0].totalRows;
                _this.timeoutWarningList && _this.timeoutWarningList.length && _this.timeoutWarningList.map(function (item) {
                    item.customSystemCode = item.processCode.split(":")[0];
                    item.customWorkCreater = item.workCreater ? item.workCreaterName ? item.workCreater + " (" + item.workCreaterName + ")" : "" + item.workCreater : '';
                    item.customdoTaskActor = item.workState === '0' ? item.taskActors : item.doTaskActor;
                });
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    TimeoutWarningQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeout-warning-query',
            template: __webpack_require__(/*! ./timeout-warning-query.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-warning-query/timeout-warning-query.component.html"),
            styles: [__webpack_require__(/*! ./timeout-warning-query.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/report-query/timeout-warning-query/timeout-warning-query.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _report_query_service__WEBPACK_IMPORTED_MODULE_8__["ReportQueryService"]])
    ], TimeoutWarningQueryComponent);
    return TimeoutWarningQueryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=report-query-report-query-module.js.map