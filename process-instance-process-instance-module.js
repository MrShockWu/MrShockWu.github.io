(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["process-instance-process-instance-module"],{

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/already-tasks-query/already-tasks-query.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/already-tasks-query/already-tasks-query.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'已办任务查询'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">流程名称：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryToDoTask.processName\">\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">流程实例ID：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryToDoTask.processId\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">任务节点类型：</label>\r\n      <p-dropdown [options]=\"businessNodeTypes\" [(ngModel)]=\"selectedQueryTaskType\" optionLabel=\"descp\" placeholder=\"请选择\" [autoWidth]=\"false\"></p-dropdown>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">任务节点名称：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryToDoTask.taskName\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">处理人员：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryToDoTask.doTaskActor\">\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">处理结果：</label>\r\n      <p-dropdown [options]=\"approveResult\" [(ngModel)]=\"selectedQueryApproveResult\" optionLabel=\"descp\" placeholder=\"请选择\" [autoWidth]=\"false\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">任务生成起始时间：</label>\r\n      <p-calendar [(ngModel)]=\"queryStartTimeStart\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n        [showIcon]=\"true\" showButtonBar=\"true\" placeholder=\"任务的创建时间>=此时间\"></p-calendar>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">任务生成截止时间：</label>\r\n      <p-calendar [(ngModel)]=\"queryStartTimeEnd\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n        [showIcon]=\"true\" showButtonBar=\"true\" placeholder=\"任务的创建时间<=此时间\"></p-calendar>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">任务完成起始时间：</label>\r\n      <p-calendar [(ngModel)]=\"queryEndTimeStart\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n        [showIcon]=\"true\" showButtonBar=\"true\" placeholder=\"任务的结束时间>=此时间\"></p-calendar>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">任务完成截止时间：</label>\r\n      <p-calendar [(ngModel)]=\"queryEndTimeEnd\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n        [showIcon]=\"true\" showButtonBar=\"true\" placeholder=\"任务的结束时间<=此时间\"></p-calendar>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">是否超时完成：</label>\r\n      <p-dropdown [options]=\"isTimeOuts\" [(ngModel)]=\"querySelectedIsTimeOut\" optionLabel=\"descp\" placeholder=\"请选择\" [autoWidth]=\"false\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">任务ID：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryToDoTask.taskId\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst(dt)\"></button>\r\n    <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n  </div>\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt [value]=\"queryApproveds\" emptyMessage=\"暂无数据\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" scrollable=\"true\"\r\n      scrollWidth=\"'100%'\" [lazy]=\"true\" (onLazyLoad)=\"query(dt)\" [rows]=\"paginatorInstance.rowNum\" [(totalRecords)]=\"total\"\r\n      [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[10,20,30]\">\r\n      <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processId\" header=\"实例ID\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processId\">{{item.processId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processName\" header=\"流程名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processName\">{{item.processName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"taskId\" header=\"任务ID\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskId\">{{item.taskId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n\r\n      <p-column field=\"taskName\" header=\"任务节点名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskName\">{{item.taskName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <!-- <p-column field=\"taskDefId\" header=\"任务节点定义ID\">\r\n          <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n            <span [title]=\"item.taskDefId\">{{item.taskDefId}}</span>\r\n          </ng-template>\r\n        </p-column> -->\r\n\r\n      <p-column field=\"taskType\" header=\"任务节点类型\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskType | mapValuePie: businessNodeTypes: 'type' : 'descp'\">\r\n            {{item.taskType | mapValuePie: businessNodeTypes: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n\r\n      <!-- <p-column field=\"workType\" header=\"任务类型\">\r\n          <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n            <span [title]=\"item.workType | mapValuePie: taskTypes: 'type' : 'descp'\">\r\n              {{item.workType | mapValuePie: taskTypes: 'type' : 'descp'}}\r\n            </span>\r\n          </ng-template>\r\n        </p-column> -->\r\n\r\n      <!-- <p-column field=\"taskRate\" header=\"任务级别\">\r\n          <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n            <span [title]=\"item.taskRate | mapValuePie: taskRates: 'type' : 'descp'\">\r\n              {{item.taskRate | mapValuePie: taskRates: 'type' : 'descp'}}\r\n            </span>\r\n          </ng-template>\r\n        </p-column> -->\r\n      <!-- \r\n        <p-column field=\"taskUrgent\" header=\"当前任务紧急程度\">\r\n          <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n            <span [title]=\"item.taskUrgent | mapValuePie: degreeOfEmergency: 'type' : 'descp'\">\r\n              {{item.taskUrgent | mapValuePie: degreeOfEmergency: 'type' : 'descp'}}\r\n            </span>\r\n          </ng-template>\r\n        </p-column> -->\r\n\r\n      <!-- <p-column field=\"taskBussName\" header=\"任务业务名称\">\r\n          <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n            <span [title]=\"item.taskBussName\">{{item.taskBussName}}</span>\r\n          </ng-template>\r\n        </p-column> -->\r\n\r\n\r\n      <!-- \r\n        <p-column field=\"systemCode\" header=\"系统编码\">\r\n          <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n            <span [title]=\"item.systemCode\">{{item.systemCode}}</span>\r\n          </ng-template>\r\n        </p-column> -->\r\n\r\n      <p-column field=\"customWorkCreater\" header=\"发起人\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customWorkCreater\">{{item.customWorkCreater}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"startDate\" header=\"流程发起时间\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.startDate \">\r\n            {{item.startDate }}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"customDoTaskActorName\" header=\"处理人\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customDoTaskActorName\">{{item.customDoTaskActorName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"startDate\" header=\"任务生成时间\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.startDate \">\r\n            {{item.startDate }}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"endDate\" header=\"任务完成时间\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.endDate \">\r\n            {{item.endDate }}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n\r\n      <p-column field=\"doResult\" header=\"处理结果\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.doResult | mapValuePie: approveResult: 'type' : 'descp'\">\r\n            {{item.doResult | mapValuePie: approveResult: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"doRemark\" header=\"处理意见\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.doRemark\">{{item.doRemark}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"isTimeout\" header=\"是否超时完成\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.isTimeout | mapValuePie: isTimeOuts: 'type' : 'descp'\">\r\n            {{item.isTimeout | mapValuePie: isTimeOuts: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/already-tasks-query/already-tasks-query.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/already-tasks-query/already-tasks-query.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9wcm9jZXNzLWluc3RhbmNlL2FscmVhZHktdGFza3MtcXVlcnkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6Ylxcd29ya2Zsb3dcXGFjdGl2aXRpLXdvcmstZmxvd1xccHJvY2Vzcy1pbnN0YW5jZVxcYWxyZWFkeS10YXNrcy1xdWVyeVxcYWxyZWFkeS10YXNrcy1xdWVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVNLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQUE7O0FBSHhCO0VBTU0sbUJBQWtCLEVBQUE7O0FBTnhCO0VBU00scUJBQXFCLEVBQUE7O0FBTTNCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UscUJBQXFCLEVBQUE7O0FBRHZCO0lBR00sc0JBQXNCLEVBQUE7O0FBSDVCO0lBTU0sWUFBWSxFQUFBOztBQUtsQjtFQUNFLFdBQVUsRUFBQTs7QUFHWjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNHLHdCQUF3QjtFQUN4Qix1QkFBdUIsRUFBQTs7QUFHMUI7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvd29ya2Zsb3cvYWN0aXZpdGktd29yay1mbG93L3Byb2Nlc3MtaW5zdGFuY2UvYWxyZWFkeS10YXNrcy1xdWVyeS9hbHJlYWR5LXRhc2tzLXF1ZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZHVsZXtcclxuICAucm93TG9jYXRvbntcclxuICAgICAgbWFyZ2luLXRvcDo2MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgfVxyXG4gIC5idG5Mb2NhdGlvbntcclxuICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gIH1cclxuICBpbnB1dHtcclxuICAgICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZHJvcGRvd257XHJcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktY2FsZW5kYXJ7XHJcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIC51aS1kYXRlcGlja2Vye1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBpbnB1dHtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxufSBcclxuXHJcblxyXG5zcGFuLnRlbHtcclxuICBjb2xvcjojZjAwO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktY2VsbC1kYXRhe1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvd3tcclxuICAgd2lkdGg6IDEwMDBweCAhaW1wb3J0YW50O1xyXG4gICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJpZ2h0TGF5b3V0e1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTYlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/already-tasks-query/already-tasks-query.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/already-tasks-query/already-tasks-query.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: AlreadyTasksQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlreadyTasksQueryComponent", function() { return AlreadyTasksQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _process_instance_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../process-instance-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-model.ts");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../process-definition/process-definition-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-definition/process-definition-model.ts");
/* harmony import */ var _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/constant/code.value */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/code.value.ts");
/* harmony import */ var _check_task_query_check_task_query_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../check-task-query/check-task-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/check-task-query.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AlreadyTasksQueryComponent = /** @class */ (function () {
    function AlreadyTasksQueryComponent(messageService, checkTaskQueryService) {
        this.messageService = messageService;
        this.checkTaskQueryService = checkTaskQueryService;
        this.msgs = [];
        this.CALENDAR_CN = _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["CALENDAR_CN"];
        this.queryApproveds = [];
        this.queryToDoTask = new _process_instance_model__WEBPACK_IMPORTED_MODULE_1__["CheckTaskModel"]();
        // 分页实例
        this.paginatorInstance = new _process_instance_model__WEBPACK_IMPORTED_MODULE_1__["CheckTaskModel"]();
        // 登录名
        this.loginSys = '';
        // 流程是否结束
        this.processEndFlags = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["IS_PROCESS_END"];
        // 查询中选中的流程是否结束标志
        this.selectedEndFlag = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_5__["DictionaryTypeModel"]();
        // 流程结束类型
        this.processEndTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["TASK_END_TYPES"];
        // 查询中选中的流程结束类型
        this.selectedEndType = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_5__["DictionaryTypeModel"]();
        // 节点类型
        this.businessNodeTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["TASK_NODE_TYPES"];
        // 查询中选中的节点类型
        this.selectedQueryTaskType = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_5__["DictionaryTypeModel"]();
        // 当前任务处理状态
        this.processState = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["WORK_HANDLE_STATES"];
        // 任务类型
        this.taskTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["TASK_TYPES"];
        // 任务紧急程度
        this.taskUrgents = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["TASK_URGENT"];
        // 审批结果
        this.approveResult = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["APPROVE_RESULT"];
        // 查询中选中的处理结果
        this.selectedQueryApproveResult = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_5__["DictionaryTypeModel"]();
        // 是否超时
        this.isTimeOuts = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["PROCESS_ISTIMEOUT"];
        // 查询条件中选中的是否超时
        this.querySelectedIsTimeOut = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_5__["DictionaryTypeModel"]();
    }
    AlreadyTasksQueryComponent.prototype.ngOnInit = function () {
        this.loginSys = sessionStorage.getItem('sys');
        this.paginatorInstance.rowNum = _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["paginatorUtils"].rowNum;
        this.paginatorInstance.startRow = _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["paginatorUtils"].startRow;
        this.showRecords = 0;
    };
    // 按照搜索条件查询
    AlreadyTasksQueryComponent.prototype.queryFirst = function (table) {
        table.first = 0;
        this.query(table);
    };
    AlreadyTasksQueryComponent.prototype.query = function (table) {
        table.first = table.first || 0;
        table.rows = table.rows || parseInt(_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["paginatorUtils"].rowNum, 10);
        // 每页显示的条数
        this.paginatorInstance.rowNum = table.rows + '';
        // 当前页
        this.paginatorInstance.startRow = (table.first / table.rows) + 1 + '';
        this.getToDoTasksList(this.queryToDoTask.processName, this.queryToDoTask.processId, this.selectedQueryTaskType.type, this.queryToDoTask.taskName, this.queryToDoTask.doTaskActor, this.selectedQueryApproveResult.type, this.queryStartTimeStart, this.queryStartTimeEnd, this.queryEndTimeStart, this.queryEndTimeEnd, this.querySelectedIsTimeOut.type, this.queryToDoTask.taskId);
    };
    // 查询的重置
    AlreadyTasksQueryComponent.prototype.reset = function () {
        this.queryToDoTask.processCode = null;
        this.queryToDoTask.processName = null;
        this.queryToDoTask.workCreater = null;
        this.queryToDoTask.processId = null;
        this.queryToDoTask.taskName = null;
        this.queryToDoTask.doTaskActor = null;
        this.queryToDoTask.taskId = null;
        this.selectedQueryTaskType = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_5__["DictionaryTypeModel"]();
        this.selectedQueryApproveResult = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_5__["DictionaryTypeModel"]();
        this.querySelectedIsTimeOut = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_5__["DictionaryTypeModel"]();
        this.queryStartTimeStart = null;
        this.queryStartTimeEnd = null;
        this.queryEndTimeStart = null;
        this.queryEndTimeEnd = null;
    };
    // 获取已办任务列表
    AlreadyTasksQueryComponent.prototype.getToDoTasksList = function (processName, processId, nodeType, nodeName, doTaskActor, doResult, queryStartTimeStart, queryStartTimeEnd, queryEndTimeStart, queryEndTimeEnd, isTimeout, taskId) {
        var _this = this;
        var createBeginTime = queryStartTimeStart == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(queryStartTimeStart, _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var startBeginTime = queryStartTimeStart == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(queryStartTimeStart, _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var createEndTime = queryStartTimeEnd == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(queryStartTimeEnd, _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var startEndTime = queryStartTimeEnd == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(queryStartTimeEnd, _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var closeBeginTime = queryEndTimeStart == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(queryEndTimeStart, _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var closeEndTime = queryEndTimeEnd == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(queryEndTimeEnd, _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var bodyParams = {
            processName: processName,
            processId: processId,
            nodeType: nodeType,
            nodeName: nodeName,
            doTaskActor: doTaskActor,
            doResult: doResult,
            workState: '1',
            startBeginTime: startBeginTime,
            startEndTime: startEndTime,
            closeBeginTime: closeBeginTime,
            closeEndTime: closeEndTime,
            isTimeout: isTimeout,
            taskId: taskId,
            // userId: this.loginSys,
            pageRows: parseInt(this.paginatorInstance.rowNum, 10),
            curPage: parseInt(this.paginatorInstance.startRow, 10)
        };
        this.checkTaskQueryService.getCheckTasks(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.queryApproveds = data.pageData[0].result;
                _this.queryApproveds && _this.queryApproveds.length && _this.queryApproveds.map(function (item) {
                    item.customSystemCode = item.processCode.split(":")[0];
                    item.customWorkCreater = item.workCreater ? item.workCreaterName ? item.workCreater + " (" + item.workCreaterName + ")" : "" + item.workCreater : '';
                    item.customDoTaskActorName = item.doTaskActor ? item.doTaskActorName ? item.doTaskActor + " (" + item.doTaskActorName + ")" : "" + item.doTaskActor : '';
                });
                _this.total = data.pageData[0].totalRows;
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    AlreadyTasksQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-already-tasks-query',
            template: __webpack_require__(/*! ./already-tasks-query.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/already-tasks-query/already-tasks-query.component.html"),
            styles: [__webpack_require__(/*! ./already-tasks-query.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/already-tasks-query/already-tasks-query.component.scss")]
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _check_task_query_check_task_query_service__WEBPACK_IMPORTED_MODULE_7__["CheckTaskQueryService"]])
    ], AlreadyTasksQueryComponent);
    return AlreadyTasksQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/check-task-query.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/check-task-query.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'待办任务查询'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">流程名称：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryToDoTask.processName\">\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">流程实例ID：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryToDoTask.processId\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">任务节点类型：</label>\r\n      <p-dropdown [options]=\"businessNodeTypes\" [(ngModel)]=\"selectedQueryTaskType\" optionLabel=\"descp\" placeholder=\"请选择\" [autoWidth]=\"false\"></p-dropdown>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">任务节点名称：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryToDoTask.taskName\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">处理人员：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryToDoTask.doTaskActor\">\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">任务状态：</label>\r\n      <p-dropdown [options]=\"queryTaskStatus\" [(ngModel)]=\"selectedQueryTaskStatus\" optionLabel=\"descp\" placeholder=\"请选择\" [autoWidth]=\"false\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">任务生成起始时间：</label>\r\n      <p-calendar [(ngModel)]=\"queryStartTimeStart\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n        [showIcon]=\"true\" showButtonBar=\"true\" placeholder=\"任务的创建时间>=此时间\"></p-calendar>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">任务生成截止时间：</label>\r\n      <p-calendar [(ngModel)]=\"queryStartTimeEnd\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n        [showIcon]=\"true\" showButtonBar=\"true\" placeholder=\"任务的创建时间<=此时间\"></p-calendar>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">任务到期起始时间：</label>\r\n      <p-calendar [(ngModel)]=\"queryEndTimeStart\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n        [showIcon]=\"true\" showButtonBar=\"true\" placeholder=\"任务的结束时间>=此时间\"></p-calendar>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">任务到期截止时间：</label>\r\n      <p-calendar [(ngModel)]=\"queryEndTimeEnd\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n        [showIcon]=\"true\" showButtonBar=\"true\" placeholder=\"任务的结束时间<=此时间\"></p-calendar>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">是否超时：</label>\r\n      <p-dropdown [options]=\"isTimeOuts\" [(ngModel)]=\"querySelectedIsTimeOut\" optionLabel=\"descp\" placeholder=\"请选择\" [autoWidth]=\"false\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">任务ID：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryToDoTask.taskId\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst(dt)\"></button>\r\n    <button pButton type=\"button\" label=\"重置\" (click)=\"reset(dt)\"></button>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt [value]=\"toDoTasks\" emptyMessage=\"暂无数据\" selectionMode=\"single\" [(selection)]=\"selectedToDoTask\" [lazy]=\"true\"\r\n      (onLazyLoad)=\"query(dt)\" [rows]=\"paginatorInstance.rowNum\" [(totalRecords)]=\"total\" [paginator]=\"true\" [pageLinks]=\"3\"\r\n      [rowsPerPageOptions]=\"[10,20,30]\" scrollable=\"true\" scrollWidth=\"'100%'\" [style]=\"{'text-align':'center'}\">\r\n      <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <!-- <p-column field=\"taskCode\" header=\"任务节点编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskCode\">{{item.taskCode}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n\r\n      <p-column field=\"processId\" header=\"实例ID\" [style]=\"{'width':'100px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processId\">{{item.processId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processName\" header=\"流程名称\" [style]=\"{'width':'160px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processName\">{{item.processName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"taskId\" header=\"任务ID\" [style]=\"{'width':'100px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskId\">{{item.taskId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"taskName\" header=\"任务节点名称\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskName\">{{item.taskName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <!-- <p-column field=\"taskDefId\" header=\"任务节点定义ID\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskDefId\">{{item.taskDefId}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n\r\n      <p-column field=\"taskType\" header=\"任务节点类型\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskType | mapValuePie: businessNodeTypes: 'type' : 'descp'\">\r\n            {{item.taskType | mapValuePie: businessNodeTypes: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <!-- <p-column field=\"workType\" header=\"任务类型\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.workType | mapValuePie: taskTypes: 'type' : 'descp'\">\r\n            {{item.workType | mapValuePie: taskTypes: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column> -->\r\n\r\n      <!-- <p-column field=\"taskRate\" header=\"任务级别\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskRate | mapValuePie: taskRates: 'type' : 'descp'\">\r\n            {{item.taskRate | mapValuePie: taskRates: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <!-- \r\n      <p-column field=\"taskUrgent\" header=\"当前任务紧急程度\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskUrgent | mapValuePie: degreeOfEmergency: 'type' : 'descp'\">\r\n            {{item.taskUrgent | mapValuePie: degreeOfEmergency: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column> -->\r\n\r\n      <!-- <p-column field=\"taskBussName\" header=\"任务业务名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskBussName\">{{item.taskBussName}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n\r\n      <!-- \r\n      <p-column field=\"systemCode\" header=\"系统编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.systemCode\">{{item.systemCode}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n\r\n      <p-column field=\"customWorkCreater\" header=\"发起人\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customWorkCreater\">{{item.customWorkCreater}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"startDate\" header=\"流程发起时间\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.startDate \">\r\n            {{item.startDate }}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"taskActorsName\" header=\"处理人\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskActorsName\">{{item.taskActorsName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"startDate\" header=\"任务生成时间\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.startDate \">\r\n            {{item.startDate }}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"estEndDate\" header=\"任务到期时间\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.estEndDate\">\r\n            {{item.estEndDate}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"isTimeout\" header=\"是否超时\" [style]=\"{'width':'100px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.isTimeout | mapValuePie: isTimeOuts: 'type' : 'descp'\">\r\n            {{item.isTimeout | mapValuePie: isTimeOuts: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <!-- <p-column field=\"taskDoInfo\" header=\"任务催办信息\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskDoInfo\">{{item.taskDoInfo}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n\r\n      <!-- \r\n      <p-column field=\"varMap.serviceName\" header=\"来源\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span>{{item.varMap.serviceName ? '规则引擎' : '工作流平台'}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n\r\n      <p-column field=\"workState\" header=\"任务状态\" [style]=\"{'width':'100px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.workState | mapValuePie: queryTaskStatus: 'type' : 'descp'\">\r\n            {{item.workState | mapValuePie: queryTaskStatus: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <!-- <p-column field=\"taskDoState\" header=\"催办状态\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskDoState | mapValuePie: taskDoStateArray: 'type' : 'descp'\">\r\n            {{item.taskDoState | mapValuePie: taskDoStateArray: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <p-column header=\"操作\" [style]=\"{'width': '240px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span class=\"tableListIcon operateBtn\" (click)=\"taskModalShow(3)\" *ngIf=\"permissionCheck('SID01065_22_P001')\" title=\"任务跳转\"></span>\r\n          <span class=\"tabelImgIcon operateBtn\" (click)=\"taskModalShow(2)\" *ngIf=\"permissionCheck('SID01065_22_P002')\" title=\"任务终止\"></span>\r\n          <span class=\"tabelHangeIcon operateBtn\" (click)=\"taskModalShow(5)\" *ngIf=\"permissionCheck('SID01065_22_P003')\" title=\"更换处理人员\"></span>\r\n          <span class=\"tabelEndIcon operateBtn\" (click)=\"taskModalShow(1)\" *ngIf=\"permissionCheck('SID01065_22_P004')\" title=\"任务挂起\"></span>\r\n          <span class=\"tabelTimeoutIcon operateBtn\" (click)=\"taskModalShow(6)\" *ngIf=\"permissionCheck('SID01065_22_P005')\" title=\"任务催办\"></span>\r\n          <span class=\"tabelForceEndIcon operateBtn\" (click)=\"recoveryHangTask()\" *ngIf=\"permissionCheck('SID01065_22_P006')\" title=\"任务挂起恢复\"></span>\r\n          <span class=\"tabelOverTimeIcon\" (click)=\"taskModalShow(7)\" *ngIf=\"permissionCheck('SID01065_22_P007')\" title=\"任务超时延长\"></span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- <p-contextMenu #cm [model]=\"items\"></p-contextMenu> -->\r\n\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n<p-confirmDialog header=\"Confirmation\" acceptLabel=\"确定\" rejectLabel=\"取消\" icon=\"fa fa-question-circle\" width=\"425\">\r\n</p-confirmDialog>\r\n\r\n\r\n<p-dialog [(visible)]=\"dialogParam.display\" modal=\"modal\" header=\"{{dialogParam.headerTitle}}\">\r\n  <app-task-manage [inValue]=\"selectedToDoTask\" [taskType]=\"taskType\" [isRest]=\"isRest\" (outValueEventEmitter)=\"callBack($event)\"></app-task-manage>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/check-task-query.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/check-task-query.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n:host/deep/ .fa-editor:before {\n  color: #757575; }\n\n:host/deep/ .ui-contextmenu {\n  background: #fff; }\n\n:host/deep/ .ui-contextmenu .ui-menuitem-text {\n    color: #000; }\n\n.textAlignCenter button {\n  height: 29px; }\n\n:host/deep/ .ui-dialog.ui-dialog-draggable .ui-dialog-content {\n  min-height: 500px; }\n\n.operateBtn {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-right: 5px;\n  background-size: cover; }\n\n.tableListIcon {\n  background-image: url('shenpi.png'); }\n\n.tabelImgIcon {\n  background-image: url('table-look.png'); }\n\n.tabelHangeIcon {\n  background-image: url('table_repeal.png'); }\n\n.tabelEndIcon {\n  background-image: url('dealwith.png'); }\n\n.tabelTimeoutIcon {\n  background-image: url('table-update.png'); }\n\n.tabelForceEndIcon {\n  background-image: url('table-submit.png'); }\n\n.tabelOverTimeIcon {\n  background-image: url('table_adjust.png'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9wcm9jZXNzLWluc3RhbmNlL2NoZWNrLXRhc2stcXVlcnkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6Ylxcd29ya2Zsb3dcXGFjdGl2aXRpLXdvcmstZmxvd1xccHJvY2Vzcy1pbnN0YW5jZVxcY2hlY2stdGFzay1xdWVyeVxcY2hlY2stdGFzay1xdWVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVNLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQUE7O0FBSHhCO0VBTU0sbUJBQWtCLEVBQUE7O0FBTnhCO0VBU00scUJBQXFCLEVBQUE7O0FBTTNCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UscUJBQXFCLEVBQUE7O0FBRHZCO0lBR00sc0JBQXNCLEVBQUE7O0FBSDVCO0lBTU0sWUFBWSxFQUFBOztBQUtsQjtFQUNFLFdBQVUsRUFBQTs7QUFHWjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNHLHdCQUF3QjtFQUN4Qix1QkFBdUIsRUFBQTs7QUFHMUI7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2I7RUFDQSxjQUFjLEVBQUE7O0FBRWQ7RUFDRSxnQkFBZ0IsRUFBQTs7QUFEbEI7SUFHSSxXQUFXLEVBQUE7O0FBR2Y7RUFFSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLG1DQUEyRSxFQUFBOztBQUU3RTtFQUNFLHVDQUErRSxFQUFBOztBQUVqRjtFQUNFLHlDQUFpRixFQUFBOztBQUVuRjtFQUNFLHFDQUE2RSxFQUFBOztBQUUvRTtFQUNFLHlDQUFpRixFQUFBOztBQUVuRjtFQUNFLHlDQUFpRixFQUFBOztBQUVuRjtFQUNFLHlDQUFpRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9wcm9jZXNzLWluc3RhbmNlL2NoZWNrLXRhc2stcXVlcnkvY2hlY2stdGFzay1xdWVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGV7XHJcbiAgLnJvd0xvY2F0b257XHJcbiAgICAgIG1hcmdpbi10b3A6NjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG4gIH1cclxuICAuYnRuTG9jYXRpb257XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3due1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFye1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICAudWktZGF0ZXBpY2tlcntcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICB9XHJcbn0gXHJcblxyXG5cclxuc3Bhbi50ZWx7XHJcbiAgY29sb3I6I2YwMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YXtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3d7XHJcbiAgIHdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcclxuICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yaWdodExheW91dHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDE2JTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmZhLWVkaXRvcjpiZWZvcmV7XHJcbmNvbG9yOiAjNzU3NTc1O1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1jb250ZXh0bWVudSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAudWktbWVudWl0ZW0tdGV4dHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxufVxyXG4udGV4dEFsaWduQ2VudGVyIHtcclxuICBidXR0b257XHJcbiAgICBoZWlnaHQ6IDI5cHg7XHJcbiAgfVxyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktZGlhbG9nLWRyYWdnYWJsZSAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4ub3BlcmF0ZUJ0bntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi50YWJsZUxpc3RJY29ue1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvbGF5b3V0L2ltYWdlcy9zaGVucGkucG5nKTtcclxufVxyXG4udGFiZWxJbWdJY29ue1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvbGF5b3V0L2ltYWdlcy90YWJsZS1sb29rLnBuZyk7XHJcbn1cclxuLnRhYmVsSGFuZ2VJY29ue1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvbGF5b3V0L2ltYWdlcy90YWJsZV9yZXBlYWwucG5nKTtcclxufVxyXG4udGFiZWxFbmRJY29ue1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvbGF5b3V0L2ltYWdlcy9kZWFsd2l0aC5wbmcpO1xyXG59XHJcbi50YWJlbFRpbWVvdXRJY29ue1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvbGF5b3V0L2ltYWdlcy90YWJsZS11cGRhdGUucG5nKTtcclxufVxyXG4udGFiZWxGb3JjZUVuZEljb257XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9sYXlvdXQvaW1hZ2VzL3RhYmxlLXN1Ym1pdC5wbmcpO1xyXG59XHJcbi50YWJlbE92ZXJUaW1lSWNvbntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2xheW91dC9pbWFnZXMvdGFibGVfYWRqdXN0LnBuZyk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/check-task-query.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/check-task-query.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: CheckTaskQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckTaskQueryComponent", function() { return CheckTaskQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _process_instance_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../process-instance-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-model.ts");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _check_task_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check-task-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/check-task-query.service.ts");
/* harmony import */ var _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../process-definition/process-definition-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-definition/process-definition-model.ts");
/* harmony import */ var _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/constant/code.value */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/code.value.ts");
/* harmony import */ var _process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../process-instance-management/process-instance-management.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CheckTaskQueryComponent = /** @class */ (function () {
    function CheckTaskQueryComponent(commfunc, messageService, checkTaskQueryService, processInstanceManagementService) {
        this.commfunc = commfunc;
        this.messageService = messageService;
        this.checkTaskQueryService = checkTaskQueryService;
        this.processInstanceManagementService = processInstanceManagementService;
        this.msgs = [];
        // 待办任务列表
        this.toDoTasks = [];
        // 查询代办任务实例
        this.queryToDoTask = new _process_instance_model__WEBPACK_IMPORTED_MODULE_1__["CheckTaskModel"]();
        // 分页实例
        this.paginatorInstance = new _process_instance_model__WEBPACK_IMPORTED_MODULE_1__["CheckTaskModel"]();
        // 选中的单行待办任务实例
        this.selectedToDoTask = new _process_instance_model__WEBPACK_IMPORTED_MODULE_1__["CheckTaskModel"]();
        // 控制流程版本信息显示
        this.processVerInfoDisplay = false;
        // 查询到的审批记录列表
        this.queryApproveds = [];
        // 流程定义
        this.processDefinition = null;
        // 登录用户
        this.loginSys = '';
        this.CALENDAR_CN = _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["CALENDAR_CN"];
        // 是否包含未开始任务
        this.queryUnstartedTask = [];
        // 查询条件选中的是否包含未开始任务
        this.selectedUnstartedTask = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_6__["DictionaryTypeModel"]();
        // 任务紧急程度
        this.degreeOfEmergency = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["TASK_URGENT"];
        // 当前任务催办状态
        this.taskDoStateArray = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["TASK_DO_TYPES"];
        // 节点类型
        this.businessNodeTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["TASK_NODE_TYPES"];
        // 查询中选中的节点类型
        this.selectedQueryTaskType = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_6__["DictionaryTypeModel"]();
        // 代办任务状态
        this.queryTaskStatus = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["CHECK_TASK_STATES"];
        // 查血条件选中的任务状态
        this.selectedQueryTaskStatus = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_6__["DictionaryTypeModel"]();
        // 任务类型
        this.taskTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["TASK_TYPES"];
        // 任务级别
        this.taskRates = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["TASK_RATE"];
        this.dialogParam = {
            display: false,
            headerTitle: ''
        };
        // 右功能键
        // items: MenuItem[];
        // 控制管理类型
        this.manageType = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["MANAGE_TASKS_TYPES"];
        // 是否超时
        this.isTimeOuts = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["PROCESS_ISTIMEOUT"];
        // 查询条件中选中的是否超时
        this.querySelectedIsTimeOut = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_6__["DictionaryTypeModel"]();
        this.queryUnstartedTask = [
            { type: '', descp: '全部' },
            { type: '0', descp: '不包含' },
            { type: '1', descp: '包含' }
        ];
    }
    CheckTaskQueryComponent.prototype.ngOnInit = function () {
        this.loginSys = sessionStorage.getItem('sys');
        this.paginatorInstance.rowNum = _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["paginatorUtils"].rowNum;
        this.paginatorInstance.startRow = _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["paginatorUtils"].startRow;
        // this.items = [
        // {
        //   label: '任务取消', icon: 'fa ui-icon-edit', command: (event) => {
        //     this.taskModalShow(0);
        //   }
        // },
        //   {
        //     label: '任务跳转', command: (event) => {
        //       this.taskModalShow(3);
        //     }
        //   },
        //   {
        //     label: '任务终止', command: (event) => {
        //       this.taskModalShow(2);
        //     }
        //   },
        //   {
        //     label: '更换处理人员', command: (event) => {
        //       this.taskModalShow(5);
        //     }
        //   },
        //   {
        //     label: '任务挂起', command: (event) => {
        //       this.taskModalShow(1);
        //     }
        //   },
        //   {
        //     label: '任务催办', command: (event) => {
        //       this.taskModalShow(6);
        //     }
        //   },
        //   {
        //     label: '任务挂起恢复', command: (event) => {
        //       this.recoveryHangTask();
        //     }
        //   },
        //   {
        //     label: '任务超时延长', command: (event) => {
        //       this.taskModalShow(7);
        //     }
        //   },
        // ];
    };
    // 查询重置
    CheckTaskQueryComponent.prototype.reset = function (dt) {
        this.queryToDoTask.processName = null;
        this.queryToDoTask.processId = null;
        this.queryToDoTask.taskName = null;
        this.queryToDoTask.doTaskActor = null;
        this.queryToDoTask.taskId = null;
        this.selectedQueryTaskType = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_6__["DictionaryTypeModel"]();
        this.selectedQueryTaskStatus = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_6__["DictionaryTypeModel"]();
        this.querySelectedIsTimeOut = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_6__["DictionaryTypeModel"]();
        this.queryStartTimeStart = null;
        this.queryStartTimeEnd = null;
        this.queryEndTimeStart = null;
        this.queryEndTimeEnd = null;
        this.queryFirst(dt);
    };
    CheckTaskQueryComponent.prototype.queryFirst = function (table) {
        table.first = 0;
        this.query(table);
    };
    // 按照搜索条件查询
    CheckTaskQueryComponent.prototype.query = function (table) {
        table.first = table.first || 0;
        table.rows = table.rows || parseInt(_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["paginatorUtils"].rowNum, 10);
        // 每页显示的条数
        this.paginatorInstance.rowNum = table.rows + '';
        // 当前页
        this.paginatorInstance.startRow = (table.first / table.rows) + 1 + '';
        this.getToDoTasksList(this.queryToDoTask.processName, this.queryToDoTask.processId, this.selectedQueryTaskType.type, this.queryToDoTask.taskName, this.queryToDoTask.doTaskActor, this.selectedQueryTaskStatus.type, this.queryStartTimeStart, this.queryStartTimeEnd, this.queryEndTimeStart, this.queryEndTimeEnd, this.querySelectedIsTimeOut.type, this.queryToDoTask.taskId);
    };
    // 获取待办任务列表
    CheckTaskQueryComponent.prototype.getToDoTasksList = function (processName, processId, nodeType, nodeName, doTaskActor, workState, queryStartTimeStart, queryStartTimeEnd, queryEndTimeStart, queryEndTimeEnd, isTimeout, taskId) {
        var _this = this;
        var workStates = !workState ? ['0', '2'] : ["" + workState];
        var createBeginTime = queryStartTimeStart == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(queryStartTimeStart, _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var startBeginTime = queryStartTimeStart == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(queryStartTimeStart, _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var createEndTime = queryStartTimeEnd == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(queryStartTimeEnd, _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var startEndTime = queryStartTimeEnd == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(queryStartTimeEnd, _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var closeBeginTime = queryEndTimeStart == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(queryEndTimeStart, _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var closeEndTime = queryEndTimeEnd == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(queryEndTimeEnd, _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var bodyParams = {
            processName: processName,
            processId: processId,
            nodeType: nodeType,
            nodeName: nodeName,
            doTaskActor: doTaskActor,
            workStates: workStates,
            workState: workState,
            startBeginTime: startBeginTime,
            startEndTime: startEndTime,
            closeBeginTime: closeBeginTime,
            closeEndTime: closeEndTime,
            isTimeout: isTimeout,
            taskId: taskId,
            // userId: this.loginSys,
            pageRows: parseInt(this.paginatorInstance.rowNum, 10),
            curPage: parseInt(this.paginatorInstance.startRow, 10)
        };
        this.checkTaskQueryService.getCheckTasks(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.toDoTasks = data.pageData[0].result;
                _this.toDoTasks && _this.toDoTasks.length && _this.toDoTasks.map(function (item) {
                    item.customSystemCode = item.processCode.split(":")[0];
                    item.customWorkCreater = item.workCreater ? item.workCreaterName ? item.workCreater + " (" + item.workCreaterName + ")" : "" + item.workCreater : '';
                });
                _this.total = data.pageData[0].totalRows;
            });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    // 任务模态框显示
    CheckTaskQueryComponent.prototype.taskModalShow = function (index) {
        if (this.selectedToDoTask && (this.selectedToDoTask.workState === '2')) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["showMessage"])(this.messageService, 'error', '此任务已经挂起,要进行其他操作前请先挂起恢复！');
            return;
        }
        this.isRest = !this.isRest;
        this.dialogParam.headerTitle = this.manageType[index].descp;
        this.taskType = this.manageType[index].type;
        this.dialogParam.display = true;
    };
    // 任务管理保存后关闭模态框
    CheckTaskQueryComponent.prototype.callBack = function (event) {
        this.dialogParam.display = !event;
        this.getToDoTasksList(this.queryToDoTask.processName, this.queryToDoTask.processId, this.selectedQueryTaskType.type, this.queryToDoTask.taskName, this.queryToDoTask.doTaskActor, this.selectedQueryTaskStatus.type, this.queryStartTimeStart, this.queryStartTimeEnd, this.queryEndTimeStart, this.queryEndTimeEnd, this.querySelectedIsTimeOut.type);
    };
    // 挂起任务恢复
    CheckTaskQueryComponent.prototype.recoveryHangTask = function () {
        var _this = this;
        if (this.selectedToDoTask && (this.selectedToDoTask.workState !== '2')) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["showMessage"])(this.messageService, 'error', '挂起状态才有此功能');
            return;
        }
        var bodyParams = {
            userId: this.loginSys,
            processId: this.selectedToDoTask.processId,
            taskId: this.selectedToDoTask.taskId,
            tranType: 'M4'
        };
        this.processInstanceManagementService.taskManage(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.getToDoTasksList(_this.queryToDoTask.processName, _this.queryToDoTask.processId, _this.selectedQueryTaskType.type, _this.queryToDoTask.taskName, _this.queryToDoTask.doTaskActor, _this.selectedQueryTaskStatus.type, _this.queryStartTimeStart, _this.queryStartTimeEnd, _this.queryEndTimeStart, _this.queryEndTimeEnd, _this.querySelectedIsTimeOut.type);
            }, true, { message: '恢复成功！', errorMsg: '恢复失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    //按钮权限
    CheckTaskQueryComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CheckTaskQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-check-task-query',
            template: __webpack_require__(/*! ./check-task-query.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/check-task-query.component.html"),
            styles: [__webpack_require__(/*! ./check-task-query.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/check-task-query.component.scss")]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__["Commfunc"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _check_task_query_service__WEBPACK_IMPORTED_MODULE_5__["CheckTaskQueryService"],
            _process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_8__["ProcessInstanceManagementService"]])
    ], CheckTaskQueryComponent);
    return CheckTaskQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/check-task-query.service.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/check-task-query.service.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: CheckTaskQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckTaskQueryService", function() { return CheckTaskQueryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/service/http.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/service/http.service.ts");
/* harmony import */ var _process_instance_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../process-instance.constant */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance.constant.ts");
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




// import { RTS_HTTP_URL } from '../../common/constant/config';
var CheckTaskQueryService = /** @class */ (function () {
    function CheckTaskQueryService(httpService) {
        var _this = this;
        this.httpService = httpService;
        // 查询任务列表
        this.getCheckTasks = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["RTS_HTTP_URL"] + _process_instance_constant__WEBPACK_IMPORTED_MODULE_2__["TO_DO_TASKS_API"].getCheckTaskList, params, null); };
        // 获取审批记录列表
        this.queryApprovedList = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["RTS_HTTP_URL"] + _process_instance_constant__WEBPACK_IMPORTED_MODULE_2__["PROCESS_INSTANCE_MANAGE_API"].queryApprovedList, params, null); };
    }
    CheckTaskQueryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], CheckTaskQueryService);
    return CheckTaskQueryService;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/task-manage/target-node/target-node.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/task-manage/target-node/target-node.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 base-table\">\r\n  <p-dataTable [value]=\"targetNodes\" emptyMessage=\"暂无数据\" scrollable=\"true\" [style]=\"{'text-align':'center'}\" scrollable=\"true\"\r\n    scrollWidth=\"'100%'\" selectionMode=\"single\" [(selection)]=\"selectedTargetNode\" (onRowClick)=\"selceteTargetNode($event.data)\">\r\n    <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n      <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n        <span>{{index+1}} </span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"nodeName\" header=\"节点名称\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <span [title]=\"item.nodeName\">{{item.nodeName}}</span>\r\n      </ng-template>\r\n    </p-column>\r\n\r\n    <p-column field=\"nodeType\" header=\"节点类型\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <span [title]=\"item.nodeType | mapValuePie: nodeTypes: 'type' : 'descp'\">\r\n          {{item.nodeType | mapValuePie: nodeTypes: 'type' : 'descp'}}\r\n        </span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"nodeId\" header=\"节点ID\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <span [title]=\"item.nodeId\">{{item.nodeId}}</span>\r\n      </ng-template>\r\n    </p-column>\r\n  </p-dataTable>\r\n\r\n  <p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/task-manage/target-node/target-node.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/task-manage/target-node/target-node.component.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n.disable-resize {\n  resize: none; }\n\n:host/deep/ .ui-dialog input, :host/deep/ .ui-dialog textarea {\n  width: 30% !important; }\n\n:host/deep/ .ui-dialog .btn {\n  text-align: center; }\n\n:host/deep/ .ui-dialog .btn button {\n    margin: 30px; }\n\n:host/deep/ .ui-dialog label {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9wcm9jZXNzLWluc3RhbmNlL2NoZWNrLXRhc2stcXVlcnkvdGFzay1tYW5hZ2UvdGFyZ2V0LW5vZGUvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6Ylxcd29ya2Zsb3dcXGFjdGl2aXRpLXdvcmstZmxvd1xccHJvY2Vzcy1pbnN0YW5jZVxcY2hlY2stdGFzay1xdWVyeVxcdGFzay1tYW5hZ2VcXHRhcmdldC1ub2RlXFx0YXJnZXQtbm9kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVNLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQUE7O0FBSHhCO0VBTU0sbUJBQWtCLEVBQUE7O0FBTnhCO0VBU00scUJBQXFCLEVBQUE7O0FBTTNCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UscUJBQXFCLEVBQUE7O0FBRHZCO0lBR00sc0JBQXNCLEVBQUE7O0FBSDVCO0lBTU0sWUFBWSxFQUFBOztBQUtsQjtFQUNFLFdBQVUsRUFBQTs7QUFHWjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNHLHdCQUF3QjtFQUN4Qix1QkFBdUIsRUFBQTs7QUFHMUI7RUFDRyxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2Q7RUFDRSxZQUNGLEVBQUE7O0FBRUE7RUFFSSxxQkFBcUIsRUFBQTs7QUFGekI7RUFLSSxrQkFBa0IsRUFBQTs7QUFMdEI7SUFPUSxZQUFZLEVBQUE7O0FBUHBCO0VBV0ksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixxQkFBcUIsRUFBQTs7QUFJekI7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixlQUFlO0VBQ2YsU0FBUyxFQUFBOztBQUxYO0lBUUksV0FBVyxFQUFBOztBQUlmO0VBRUksOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvd29ya2Zsb3cvYWN0aXZpdGktd29yay1mbG93L3Byb2Nlc3MtaW5zdGFuY2UvY2hlY2stdGFzay1xdWVyeS90YXNrLW1hbmFnZS90YXJnZXQtbm9kZS90YXJnZXQtbm9kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubW9kdWxle1xyXG4gIC5yb3dMb2NhdG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOjYwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NDBweDtcclxuICB9XHJcbiAgLmJ0bkxvY2F0aW9ue1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93bntcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jYWxlbmRhcntcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgLnVpLWRhdGVwaWNrZXJ7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG59IFxyXG5cclxuXHJcbnNwYW4udGVse1xyXG4gIGNvbG9yOiNmMDA7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGF7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93e1xyXG4gICB3aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmlnaHRMYXlvdXR7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgd2lkdGg6IDE2JTtcclxuICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uZGlzYWJsZS1yZXNpemV7XHJcbiAgcmVzaXplOiBub25lXHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cge1xyXG4gIGlucHV0LHRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgIH1cclxuICB9XHJcbiAgbGFiZWx7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3Bpbm5lciAudWktc3Bpbm5lci1idXR0b257XHJcbiAgaGVpZ2h0OiA0OSUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICAuZmEtY2FyZXQtZG93biB7XHJcbiAgICB0b3A6IDAuMjVlbTtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zcGlubmVyLWRvd24gLmZhLWNhcmV0LWRvd24ge1xyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwia2V5Ym9hcmRfYXJyb3dfZG93blwiO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/task-manage/target-node/target-node.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/task-manage/target-node/target-node.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: TargetNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetNodeComponent", function() { return TargetNodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../process-instance-management/process-instance-management.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service.ts");
/* harmony import */ var _process_instance_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../process-instance-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-model.ts");
/* harmony import */ var _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/constant/code.value */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/code.value.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TargetNodeComponent = /** @class */ (function () {
    function TargetNodeComponent(messageService, confirmationService, processInstanceManagementService) {
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.processInstanceManagementService = processInstanceManagementService;
        this.msgs = [];
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // 节点列表
        this.targetNodes = [];
        // 选中的节点
        this.selectedTargetNode = new _process_instance_model__WEBPACK_IMPORTED_MODULE_5__["TargetNodeModel"]();
        // 节点类型
        this.nodeTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["TASK_NODE_TYPES"];
    }
    TargetNodeComponent.prototype.ngOnInit = function () {
    };
    // 获取节点列表
    TargetNodeComponent.prototype.getTargetNodeList = function (taskId) {
        var _this = this;
        var bodyParams = {
            taskId: taskId,
            tranType: ''
        };
        this.processInstanceManagementService.queryWorkflowDefNode(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_3__["handleResult"])(data, _this.messageService, function () {
                _this.targetNodes = data.pageData[0].result;
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_3__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    TargetNodeComponent.prototype.selceteTargetNode = function (event) {
        this.outValue.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TargetNodeComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TargetNodeComponent.prototype, "outValue", void 0);
    TargetNodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-target-node',
            template: __webpack_require__(/*! ./target-node.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/task-manage/target-node/target-node.component.html"),
            styles: [__webpack_require__(/*! ./target-node.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/task-manage/target-node/target-node.component.scss")],
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            _process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_4__["ProcessInstanceManagementService"]])
    ], TargetNodeComponent);
    return TargetNodeComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/task-manage/task-manage.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/task-manage/task-manage.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <label>流程实例ID:</label>\r\n    <input type=\"text\" pInputText [ngModel]=\"inValue?.processId\" readonly>\r\n  </div>\r\n  <div class=\"ui-g-12\" *ngIf=\"taskType === taskControlType[2].type\">\r\n    <label>流程终止类型:</label>\r\n    <p-dropdown [options]=\"processEndTypes\" [(ngModel)]=\"selectedProcessEndType\" optionLabel=\"descp\" placeholder=\"请选择类型\" [autoWidth]=\"false\"></p-dropdown>\r\n  </div>\r\n  <div class=\"ui-g-12\" *ngIf=\"taskType === taskControlType[0].type || taskType === taskControlType[1].type || taskType === taskControlType[2].type || taskType === taskControlType[3].type || taskType === taskControlType[5].type\">\r\n    <label *ngIf=\"taskType === taskControlType[0].type\">取消原因:</label>\r\n    <label *ngIf=\"taskType === taskControlType[1].type\">挂起原因:</label>\r\n    <label *ngIf=\"taskType === taskControlType[2].type\">终止原因:</label>\r\n    <label *ngIf=\"taskType === taskControlType[3].type\">跳转原因:</label>\r\n    <label *ngIf=\"taskType === taskControlType[5].type\">更改处理人员原因:</label>\r\n    <textarea pInputTextarea [(ngModel)]=\"hangTaskInstance.doResion\"></textarea>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\" *ngIf=\"taskType === taskControlType[0].type || taskType === taskControlType[3].type\">\r\n    <label appValidation>目标节点:</label>\r\n    <input type=\"text\" pInputText readonly [(ngModel)]=\"hangTaskInstance.orderNode\" placeholder=\"必选项\">\r\n    <span class=\"icoColor2\" (click)=\"selectedTargetNode(targetNode)\">选择</span>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12\" *ngIf=\"taskType === taskControlType[3].type || taskType === taskControlType[5].type\">\r\n    <label>目标人员:</label>\r\n    <input type=\"text\" pInputText [(ngModel)]=\"hangTaskInstance.orderUser\">\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12\" *ngIf=\"taskType === taskControlType[6].type\">\r\n    <label>催办补充信息:</label>\r\n    <textarea pInputTextarea [(ngModel)]=\"hangTaskInstance.askDoInfo\"></textarea>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12\" *ngIf=\"taskType === taskControlType[7].type\">\r\n    <label>超时截止时间:</label>\r\n    <p-calendar [(ngModel)]=\"outTimeEnd\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n      [showIcon]=\"true\" showButtonBar=\"true\"></p-calendar>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" (click)=\"saveTaskManage()\" label=\"保存\"></button>\r\n    <button pButton type=\"button\" (click)=\"resetTaskManage()\" label=\"重置\"></button>\r\n  </div>\r\n</div>\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n\r\n\r\n\r\n<p-dialog [(visible)]=\"dialogParam.display\" modal=\"modal\" header=\"{{dialogParam.headerTitle}}\">\r\n  <app-target-node #targetNode (outValue)=\"callBack($event)\"></app-target-node>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/task-manage/task-manage.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/task-manage/task-manage.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "isred {\n  background-color: red; }\n\n:host/deep/ .ui-contextmenu {\n  background: #fff; }\n\n:host/deep/ .ui-spinner {\n  width: 30% !important; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n.module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\ninput, textarea {\n  width: 30% !important; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\nlabel {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n:host/deep/ .ui-dialog .ui-dropdown {\n  width: 30% !important; }\n\n.btn-add {\n  float: right; }\n\n.icoColor2 {\n  display: inline-block;\n  width: 75px;\n  height: 24px;\n  text-align: center;\n  line-height: 24px;\n  white-space: nowrap;\n  color: #fff;\n  background-color: #19b0c8;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  border-radius: 3px;\n  font-size: 14px; }\n\n.icoColor2:hover {\n  background-color: #058da1; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\ninput:-moz-read-only, textarea:-moz-read-only {\n  background-color: #ebebe4;\n  opacity: 0.6;\n  filter: Alpha(Opacity=35);\n  /* background-image: none; */\n  cursor: auto !important; }\n\ninput:read-only, textarea:read-only {\n  background-color: #ebebe4;\n  opacity: 0.6;\n  filter: Alpha(Opacity=35);\n  /* background-image: none; */\n  cursor: auto !important; }\n\n:host/deep/ .ui-dialog.ui-dialog-draggable .ui-dialog-content {\n  min-height: 350px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9wcm9jZXNzLWluc3RhbmNlL2NoZWNrLXRhc2stcXVlcnkvdGFzay1tYW5hZ2UvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6Ylxcd29ya2Zsb3dcXGFjdGl2aXRpLXdvcmstZmxvd1xccHJvY2Vzcy1pbnN0YW5jZVxcY2hlY2stdGFzay1xdWVyeVxcdGFzay1tYW5hZ2VcXHRhc2stbWFuYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UscUJBQXFCLEVBQUE7O0FBSXZCO0VBQ0UscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0csd0JBQXdCO0VBQ3hCLHVCQUF1QixFQUFBOztBQUcxQjtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFFYjtFQUVNLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQUE7O0FBSHhCO0VBTU0sbUJBQWtCLEVBQUE7O0FBTnhCO0VBU00scUJBQXFCLEVBQUE7O0FBTTNCO0VBQ0UscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRHBCO0lBR00sWUFBWSxFQUFBOztBQUdsQjtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCLEVBQUE7O0FBSXZCO0VBQ0UscUJBQXFCLEVBQUE7O0FBSXZCO0VBQ0UsWUFBWSxFQUFBOztBQUlkO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLHlCQUF5QixFQUFBOztBQUUzQjtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGVBQWU7RUFDZixTQUFTLEVBQUE7O0FBTFg7SUFRSSxXQUFXLEVBQUE7O0FBSWY7RUFFSSw4QkFBOEIsRUFBQTs7QUFJbEM7RUFDRSx5QkFBb0M7RUFDcEMsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qiw0QkFBQTtFQUNBLHVCQUF1QixFQUFBOztBQUx6QjtFQUNFLHlCQUFvQztFQUNwQyxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDRCQUFBO0VBQ0EsdUJBQXVCLEVBQUE7O0FBSXpCO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvd29ya2Zsb3cvYWN0aXZpdGktd29yay1mbG93L3Byb2Nlc3MtaW5zdGFuY2UvY2hlY2stdGFzay1xdWVyeS90YXNrLW1hbmFnZS90YXNrLW1hbmFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlzcmVkeyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgfVxyXG46aG9zdC9kZWVwLyAudWktY29udGV4dG1lbnUge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zcGlubmVye1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGF7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93e1xyXG4gICB3aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmlnaHRMYXlvdXR7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxNiU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLm1vZHVsZXtcclxuICAucm93TG9jYXRvbntcclxuICAgICAgbWFyZ2luLXRvcDo2MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgfVxyXG4gIC5idG5Mb2NhdGlvbntcclxuICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gIH1cclxuICBpbnB1dHtcclxuICAgICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5pbnB1dCx0ZXh0YXJlYXtcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYnV0dG9ue1xyXG4gICAgICBtYXJnaW46IDMwcHg7XHJcbiAgfVxyXG59XHJcbmxhYmVse1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyAudWktZHJvcGRvd257XHJcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmJ0bi1hZGQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICAvLyB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmljb0NvbG9yMiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA3NXB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5pY29Db2xvcjI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNThkYTE7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLXNwaW5uZXIgLnVpLXNwaW5uZXItYnV0dG9ue1xyXG4gIGhlaWdodDogNDklICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgLmZhLWNhcmV0LWRvd24ge1xyXG4gICAgdG9wOiAwLjI1ZW07XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3Bpbm5lci1kb3duIC5mYS1jYXJldC1kb3duIHtcclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcImtleWJvYXJkX2Fycm93X2Rvd25cIjtcclxuICB9XHJcbn1cclxuXHJcbmlucHV0OnJlYWQtb25seSwgdGV4dGFyZWE6cmVhZC1vbmx5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIyOCk7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGZpbHRlcjogQWxwaGEoT3BhY2l0eT0zNSk7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgKi9cclxuICBjdXJzb3I6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktZGlhbG9nLWRyYWdnYWJsZSAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/task-manage/task-manage.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/task-manage/task-manage.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: TaskManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskManageComponent", function() { return TaskManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _process_instance_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../process-instance-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-model.ts");
/* harmony import */ var _common_constant_code_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/constant/code.value */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/code.value.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../process-instance-management/process-instance-management.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service.ts");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../process-definition/process-definition-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-definition/process-definition-model.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TaskManageComponent = /** @class */ (function () {
    function TaskManageComponent(messageService, processInstanceManagementService, commfunc) {
        this.messageService = messageService;
        this.processInstanceManagementService = processInstanceManagementService;
        this.commfunc = commfunc;
        this.msgs = [];
        this.outValueEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // 任务挂起实例
        this.hangTaskInstance = new _process_instance_model__WEBPACK_IMPORTED_MODULE_2__["HangTaskModel"]();
        // 控制管理类型
        this.taskControlType = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_3__["MANAGE_TASKS_TYPES"];
        // 日期格式
        this.CALENDAR_CN = _common_constant_config__WEBPACK_IMPORTED_MODULE_6__["CALENDAR_CN"];
        // 流程截止类型集合
        this.processEndTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_3__["PROCESS_TERMINATED_TYPES"];
        // 选中流程截止类型
        this.selectedProcessEndType = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_7__["DictionaryTypeModel"]();
        this.dialogParam = {
            display: false,
            headerTitle: ''
        };
    }
    TaskManageComponent.prototype.ngOnInit = function () {
        this.loginSys = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
    };
    TaskManageComponent.prototype.ngOnChanges = function () {
        this.resetTaskManage();
    };
    // 保存任务管理
    TaskManageComponent.prototype.saveTaskManage = function () {
        var bodyParams = {};
        if (this.taskType === this.taskControlType[0].type) {
            // 取消
            bodyParams = {
                userId: this.loginSys,
                processId: this.inValue.processId,
                taskId: this.inValue.taskId,
                tranType: this.taskType,
                doResion: this.hangTaskInstance.doResion,
                orderNode: this.hangTaskInstance.orderNode
            };
        }
        else if (this.taskType === this.taskControlType[1].type) {
            // 挂起
            bodyParams = {
                userId: this.loginSys,
                processId: this.inValue.processId,
                taskId: this.inValue.taskId,
                tranType: this.taskType,
                doResion: this.hangTaskInstance.doResion
            };
        }
        else if (this.taskType === this.taskControlType[2].type) {
            // 终止
            bodyParams = {
                userId: this.loginSys,
                processId: this.inValue.processId,
                taskId: this.inValue.taskId,
                tranType: this.taskType,
                doResion: this.hangTaskInstance.doResion,
                cancelType: this.selectedProcessEndType.type || this.processEndTypes[0].type
            };
        }
        else if (this.taskType === this.taskControlType[3].type) {
            if (!this.hangTaskInstance.orderNode) {
                Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_1__["showMessage"])(this.messageService, 'error', '请选择跳转的目标节点！');
                return;
            }
            // 跳转
            bodyParams = {
                userId: this.loginSys,
                processId: this.inValue.processId,
                taskId: this.inValue.taskId,
                tranType: this.taskType,
                doResion: this.hangTaskInstance.doResion,
                targetId: this.hangTaskInstance.orderNode,
                agentUserId: this.hangTaskInstance.orderUser
            };
        }
        else if (this.taskType === this.taskControlType[5].type) {
            // 更改处理人员
            bodyParams = {
                userId: this.inValue.taskActors,
                processId: this.inValue.processId,
                taskId: this.inValue.taskId,
                tranType: this.taskType,
                doResion: this.hangTaskInstance.doResion,
                agentUserId: this.hangTaskInstance.orderUser
            };
        }
        else if (this.taskType === this.taskControlType[6].type) {
            // 催办
            bodyParams = {
                userId: this.loginSys,
                processId: this.inValue.processId,
                taskId: this.inValue.taskId,
                tranType: this.taskType,
                askDoInfo: this.hangTaskInstance.askDoInfo
            };
        }
        else if (this.taskType === this.taskControlType[7].type) {
            var outTime = this.outTimeEnd == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(this.outTimeEnd, _common_constant_config__WEBPACK_IMPORTED_MODULE_6__["FULL_HORIZONTAL_DATE_FORMAT"]);
            // 超时延长
            bodyParams = {
                userId: this.loginSys,
                processId: this.inValue.processId,
                taskId: this.inValue.taskId,
                tranType: this.taskType,
                outTime: outTime
            };
        }
        this.commomSaveTaskManage(bodyParams);
    };
    // 保存的通用处理函数
    TaskManageComponent.prototype.commomSaveTaskManage = function (bodyParams) {
        var _this = this;
        this.processInstanceManagementService.taskManage(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_1__["handleResult"])(data, _this.messageService, function () {
                _this.outValueEventEmitter.emit(event);
            }, true, { message: '保存成功！', errorMsg: '保存失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_1__["handleError"])(err, _this.messageService, function () {
                _this.outValueEventEmitter.emit(event);
            });
        });
    };
    // 重置任务配置
    TaskManageComponent.prototype.resetTaskManage = function () {
        this.hangTaskInstance.doResion = null;
        this.hangTaskInstance.orderNode = null;
        this.hangTaskInstance.orderUser = null;
        this.hangTaskInstance.askDoInfo = null;
        this.selectedProcessEndType = Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_1__["findObject"])('2', this.processEndTypes, 'type');
        this.outTimeEnd = null;
    };
    // 选择目标节点
    TaskManageComponent.prototype.selectedTargetNode = function (targetNode) {
        this.dialogParam.display = true;
        this.dialogParam.headerTitle = "\u4EFB\u52A1ID\u4E3A\u3010" + this.inValue.taskId + "\u3011\u7684\u8282\u70B9\u5217\u8868";
        targetNode.getTargetNodeList(this.inValue.taskId);
    };
    // 从节点上传上来的值
    TaskManageComponent.prototype.callBack = function (event) {
        console.log(event);
        this.dialogParam.display = !event;
        this.hangTaskInstance.orderNode = event.nodeId;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaskManageComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TaskManageComponent.prototype, "taskType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TaskManageComponent.prototype, "isRest", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TaskManageComponent.prototype, "outValueEventEmitter", void 0);
    TaskManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-manage',
            template: __webpack_require__(/*! ./task-manage.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/task-manage/task-manage.component.html"),
            styles: [__webpack_require__(/*! ./task-manage.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/task-manage/task-manage.component.scss")]
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_5__["ProcessInstanceManagementService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_8__["Commfunc"]])
    ], TaskManageComponent);
    return TaskManageComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/history-instance/history-instance.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/history-instance/history-instance.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'历史实例查询'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">流程实例ID：</label>\r\n      <input\r\n        type=\"text\"\r\n        pInputText\r\n        [(ngModel)]=\"queryApprovalInstance.processId\"\r\n      />\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">流程编码：</label>\r\n      <input\r\n        type=\"text\"\r\n        pInputText\r\n        [(ngModel)]=\"queryApprovalInstance.processCode\"\r\n      />\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <!-- <label class=\"inputLayout\">流程编码：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"queryApprovalInstance.processCode\"> -->\r\n      <label class=\"inputLayout\">流程名称：</label>\r\n      <input\r\n        type=\"text\"\r\n        pInputText\r\n        [(ngModel)]=\"queryApprovalInstance.proccessName\"\r\n      />\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">流程发起人：</label>\r\n      <input\r\n        type=\"text\"\r\n        pInputText\r\n        [(ngModel)]=\"queryApprovalInstance.startUserId\"\r\n      />\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">流程状态：</label>\r\n      <p-dropdown\r\n        [options]=\"processEndTypes\"\r\n        [(ngModel)]=\"selectedEndType\"\r\n        optionLabel=\"descp\"\r\n        placeholder=\"请选择\"\r\n        [autoWidth]=\"false\"\r\n      ></p-dropdown>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">是否超时：</label>\r\n      <p-dropdown\r\n        [options]=\"isTimeOuts\"\r\n        [(ngModel)]=\"querySelectedIsTimeOut\"\r\n        optionLabel=\"descp\"\r\n        placeholder=\"请选择\"\r\n        [autoWidth]=\"false\"\r\n      ></p-dropdown>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">流程发起起始时间：</label>\r\n      <p-calendar\r\n        [(ngModel)]=\"queryStartTime\"\r\n        [locale]=\"CALENDAR_CN\"\r\n        dateFormat=\"yy-mm-dd\"\r\n        [showTime]=\"true\"\r\n        [showSeconds]=\"true\"\r\n        [showIcon]=\"true\"\r\n        showButtonBar=\"true\"\r\n        placeholder=\"流程实例的创建时间>=此时间\"\r\n      ></p-calendar>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">流程发起截止时间：</label>\r\n      <p-calendar\r\n        [(ngModel)]=\"queryEndTime\"\r\n        [locale]=\"CALENDAR_CN\"\r\n        dateFormat=\"yy-mm-dd\"\r\n        [showTime]=\"true\"\r\n        [showSeconds]=\"true\"\r\n        [showIcon]=\"true\"\r\n        showButtonBar=\"true\"\r\n        placeholder=\"流程实例的创建时间<=此时间\"\r\n      ></p-calendar>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">流程结束起始时间：</label>\r\n      <p-calendar\r\n        [(ngModel)]=\"queryEndTimeStart\"\r\n        [locale]=\"CALENDAR_CN\"\r\n        dateFormat=\"yy-mm-dd\"\r\n        [showTime]=\"true\"\r\n        [showSeconds]=\"true\"\r\n        [showIcon]=\"true\"\r\n        showButtonBar=\"true\"\r\n        placeholder=\"流程实例的结束时间>=此时间\"\r\n      ></p-calendar>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">流程结束截止时间：</label>\r\n      <p-calendar\r\n        [(ngModel)]=\"queryEndTimeEnd\"\r\n        [locale]=\"CALENDAR_CN\"\r\n        dateFormat=\"yy-mm-dd\"\r\n        [showTime]=\"true\"\r\n        [showSeconds]=\"true\"\r\n        [showIcon]=\"true\"\r\n        showButtonBar=\"true\"\r\n        placeholder=\"流程实例的结束时间<=此时间\"\r\n      ></p-calendar>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">发起人机构：</label>\r\n      <input\r\n        type=\"text\"\r\n        pInputText\r\n        [(ngModel)]=\"queryApprovalInstance.orgObj\"\r\n      />\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <button\r\n      pButton\r\n      type=\"button\"\r\n      label=\"查询\"\r\n      (click)=\"queryFirst(dt)\"\r\n    ></button>\r\n    <button pButton type=\"button\" label=\"重置\" (click)=\"reset(dt)\"></button>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable\r\n      #dt\r\n      [value]=\"approvalInstances\"\r\n      emptyMessage=\"暂无数据\"\r\n      selectionMode=\"single\"\r\n      [(selection)]=\"selectedProcessInstance\"\r\n      [lazy]=\"true\"\r\n      (onLazyLoad)=\"query(dt)\"\r\n      [rows]=\"paginatorInstance.rowNum\"\r\n      [(totalRecords)]=\"total\"\r\n      [paginator]=\"true\"\r\n      [pageLinks]=\"3\"\r\n      [rowsPerPageOptions]=\"[10, 20, 30]\"\r\n      scrollable=\"true\"\r\n      scrollWidth=\"'100%'\"\r\n      [style]=\"{ 'text-align': 'center' }\"\r\n    >\r\n      <p-column header=\"序号\" [style]=\"{ width: '70px' }\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customOrgObj\" header=\"机构名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customOrgObj\"> {{item.customOrgObj}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processId\" header=\"实例ID\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processId\">{{item.processId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customSystemCode\" header=\"流程编码\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customSystemCode\">{{\r\n            item.customSystemCode\r\n          }}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"proccessName\" header=\"流程名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.proccessName\">{{ item.proccessName }}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"customStartUserId\" header=\"发起人\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customStartUserId\">{{\r\n            item.customStartUserId\r\n          }}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"startTime\" header=\"发起时间\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.startTime\">\r\n            {{item.startTime}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <!-- <p-column field=\"updateTime\" header=\"流程更新时间\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.updateTime | date: 'y-MM-dd HH:mm'\">\r\n            {{item.updateTime | date: 'y-MM-dd HH:mm'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <p-column field=\"endTime\" header=\"结束时间\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.endTime\">\r\n            {{item.endTime}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <!-- <p-column field=\"joinUserIds\" header=\"流程审批人员列表\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.joinUserIds\">{{item.joinUserIds}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <p-column field=\"endType\" header=\"流程状态\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span\r\n            [title]=\"item.endType | mapValuePie: processEndTypes:'type':'descp'\"\r\n          >\r\n            {{ item.endType | mapValuePie: processEndTypes:\"type\":\"descp\" }}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <!-- <p-column field=\"workState\" header=\"流程运行状态\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.workState | mapValuePie: processEndFlags: 'type' : 'descp'\">\r\n            {{item.workState | mapValuePie: processEndFlags: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column> -->\r\n\r\n      <!-- <p-column field=\"processInstDesc\" header=\"流程实例简述\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processInstDesc\">{{item.processInstDesc}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <p-column field=\"isTimeout\" header=\"是否超时\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span\r\n            [title]=\"item.isTimeout | mapValuePie: isTimeOuts:'type':'descp'\"\r\n          >\r\n            {{ item.isTimeout | mapValuePie: isTimeOuts:\"type\":\"descp\" }}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"操作\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span class=\"tableApprove\" (click)=\"getApprovedList(item)\">流程表单</span>\r\n          <span class=\"tabelDetailIco\" (click)=\"viewProcessSchedule(item)\">流程图</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n<p-confirmDialog\r\n  header=\"Confirmation\"\r\n  acceptLabel=\"确定\"\r\n  rejectLabel=\"取消\"\r\n  icon=\"fa fa-question-circle\"\r\n  width=\"425\"\r\n></p-confirmDialog>\r\n\r\n<!-- \r\n<div *ngFor=\"let item of approvalRecorsArray; let i = index\">\r\n  <p-dialog [(visible)]=\"item.show \" modal=\"modal\" header=\"{{item.title}}\" [baseZIndex]=\"i+1\">\r\n    <app-approval-records #approvalRecords [inValue]=\"selectedProcessInstance\" [isChange]='isChange' [processId]=\"item.processId\"\r\n      (outValue)=\"callBackChildApprovalRecord($event)\" [flag]=\"item.flag\"></app-approval-records>\r\n  </p-dialog>\r\n</div> -->\r\n\r\n<p-dialog [(visible)]=\"approvalDisplay\" modal=\"modal\" header=\"流程审批记录\">\r\n  <app-approval-records\r\n    #approvalRecords\r\n    [inValue]=\"selectedProcessInstance\"\r\n    [isChange]=\"isChange\"\r\n  ></app-approval-records>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/history-instance/history-instance.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/history-instance/history-instance.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n:host/deep/ .ui-dialog.ui-dialog-draggable .ui-dialog-content {\n  min-height: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9wcm9jZXNzLWluc3RhbmNlL2hpc3RvcnktaW5zdGFuY2UvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6Ylxcd29ya2Zsb3dcXGFjdGl2aXRpLXdvcmstZmxvd1xccHJvY2Vzcy1pbnN0YW5jZVxcaGlzdG9yeS1pbnN0YW5jZVxcaGlzdG9yeS1pbnN0YW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVNLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQUE7O0FBSHhCO0VBTU0sbUJBQWtCLEVBQUE7O0FBTnhCO0VBU00scUJBQXFCLEVBQUE7O0FBTTNCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UscUJBQXFCLEVBQUE7O0FBRHZCO0lBR00sc0JBQXNCLEVBQUE7O0FBSDVCO0lBTU0sWUFBWSxFQUFBOztBQUtsQjtFQUNFLFdBQVUsRUFBQTs7QUFHWjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNHLHdCQUF3QjtFQUN4Qix1QkFBdUIsRUFBQTs7QUFHMUI7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi93b3JrZmxvdy9hY3Rpdml0aS13b3JrLWZsb3cvcHJvY2Vzcy1pbnN0YW5jZS9oaXN0b3J5LWluc3RhbmNlL2hpc3RvcnktaW5zdGFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kdWxle1xyXG4gIC5yb3dMb2NhdG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOjYwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NDBweDtcclxuICB9XHJcbiAgLmJ0bkxvY2F0aW9ue1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93bntcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jYWxlbmRhcntcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgLnVpLWRhdGVwaWNrZXJ7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG59IFxyXG5cclxuXHJcbnNwYW4udGVse1xyXG4gIGNvbG9yOiNmMDA7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGF7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93e1xyXG4gICB3aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmlnaHRMYXlvdXR7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxNiU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktZGlhbG9nLWRyYWdnYWJsZSAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/history-instance/history-instance.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/history-instance/history-instance.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: HistoryInstanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryInstanceComponent", function() { return HistoryInstanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _process_instance_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../process-instance-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-model.ts");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../process-definition/process-definition-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-definition/process-definition-model.ts");
/* harmony import */ var _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/constant/code.value */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/code.value.ts");
/* harmony import */ var _process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../process-instance-management/process-instance-management.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HistoryInstanceComponent = /** @class */ (function () {
    function HistoryInstanceComponent(messageService, processInstanceManagementService) {
        this.messageService = messageService;
        this.processInstanceManagementService = processInstanceManagementService;
        this.msgs = [];
        this.CALENDAR_CN = _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["CALENDAR_CN"];
        // 流程实例列表
        this.approvalInstances = [];
        // 查询条件实例
        this.queryApprovalInstance = new _process_instance_model__WEBPACK_IMPORTED_MODULE_1__["ProcessInstanceModel"]();
        // 分页实例
        this.paginatorInstance = new _process_instance_model__WEBPACK_IMPORTED_MODULE_1__["ProcessInstanceModel"]();
        // 表格中选中的单行流程实例
        this.selectedProcessInstance = new _process_instance_model__WEBPACK_IMPORTED_MODULE_1__["ProcessInstanceModel"]();
        // 控制流程版本信息显示
        this.processVerInfoDisplay = false;
        // 查询到的已审批列表
        this.queryApproveds = [];
        // 登录名
        this.loginSys = '';
        // 流程是否结束
        this.processEndFlags = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["IS_PROCESS_END"];
        // 查询中选中的流程是否结束标志
        this.selectedEndFlag = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_5__["DictionaryTypeModel"]();
        // 流程状态
        this.processEndTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["TASK_END_TYPES"];
        // 查询中选中的流程状态
        this.selectedEndType = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_5__["DictionaryTypeModel"]();
        // 类型
        this.businessNodeTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["TASK_NODE_TYPES"];
        // 当前任务处理状态
        this.processState = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["WORK_HANDLE_STATES"];
        // 是否超时
        this.isTimeOuts = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["PROCESS_ISTIMEOUT"];
        // 查询条件中选中的是否超时
        this.querySelectedIsTimeOut = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_5__["DictionaryTypeModel"]();
        this.isChange = false;
        this.approvalDisplay = false;
    }
    HistoryInstanceComponent.prototype.ngOnInit = function () {
        this.loginSys = sessionStorage.getItem('sys');
        this.paginatorInstance.rowNum = _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["paginatorUtils"].rowNum;
        this.paginatorInstance.startRow = _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["paginatorUtils"].startRow;
    };
    // 按照搜索条件查询
    HistoryInstanceComponent.prototype.queryFirst = function (table) {
        table.first = 0;
        this.query(table);
    };
    HistoryInstanceComponent.prototype.query = function (table) {
        table.first = table.first || 0;
        table.rows = table.rows || parseInt(_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["paginatorUtils"].rowNum, 10);
        // 每页显示的条数
        this.paginatorInstance.rowNum = table.rows + '';
        // 当前页
        this.paginatorInstance.startRow = (table.first / table.rows) + 1 + '';
        this.getProcessInstanceList(this.queryApprovalInstance.processId, this.queryApprovalInstance.processCode, this.queryApprovalInstance.proccessName, this.queryApprovalInstance.startUserId, this.selectedEndType.type, this.querySelectedIsTimeOut.type, this.queryStartTime, this.queryEndTime, this.queryEndTimeStart, this.queryEndTimeEnd, this.queryApprovalInstance.orgObj);
    };
    // 获取审批实例列表
    HistoryInstanceComponent.prototype.getProcessInstanceList = function (processId, processCode, proccessName, startUser, endType, isTimeout, createTimeStart, createTimeEnd, endTimeStart, endTimeEnds, orgObj) {
        var _this = this;
        var startTimeBegin = createTimeStart == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(createTimeStart, _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var startTimeEnd = createTimeEnd == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(createTimeEnd, _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var endTimeBegin = endTimeStart == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(endTimeStart, _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var endTimeEnd = endTimeEnds == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(endTimeEnds, _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var bodyParams = {
            processId: processId,
            processCode: processCode,
            proccessName: proccessName,
            startUser: startUser,
            // userId: this.loginSys,
            endType: endType,
            isTimeout: isTimeout,
            workState: '1',
            startTimeBegin: startTimeBegin,
            startTimeEnd: startTimeEnd,
            endTimeBegin: endTimeBegin,
            endTimeEnd: endTimeEnd,
            orgObj: orgObj,
            pageRows: parseInt(this.paginatorInstance.rowNum, 10),
            curPage: parseInt(this.paginatorInstance.startRow, 10)
        };
        this.processInstanceManagementService.searchProcessInstanceList(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.approvalInstances = data.pageData[0].result;
                _this.total = data.pageData[0].totalRows;
                _this.approvalInstances && _this.approvalInstances.length && _this.approvalInstances.map(function (item) {
                    item.customSystemCode = item.processCode.split(":")[0];
                    item.customStartUserId = item.startUserId ? item.startUserIdName ? item.startUserId + " (" + item.startUserIdName + ")" : "" + item.startUserId : '';
                    item.customOrgObj = item.orgId ? item.orgName ? item.orgId + " (" + item.orgName + ")" : "" + item.orgId : '';
                });
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    HistoryInstanceComponent.prototype.getApprovedList = function (item) {
        this.selectedProcessInstance = item;
        // 调用子组件onChange事件
        this.isChange = !this.isChange;
        this.approvalDisplay = true;
    };
    // 查询重置
    HistoryInstanceComponent.prototype.reset = function (dt) {
        this.queryApprovalInstance.processId = null;
        this.queryApprovalInstance.processCode = null;
        this.queryApprovalInstance.proccessName = null;
        this.queryApprovalInstance.startUserId = null;
        this.queryApprovalInstance.orgObj = null;
        this.selectedEndType = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_5__["DictionaryTypeModel"]();
        this.querySelectedIsTimeOut = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_5__["DictionaryTypeModel"]();
        this.queryStartTime = null;
        this.queryEndTime = null;
        this.queryEndTimeStart = null;
        this.queryEndTimeEnd = null;
        this.queryFirst(dt);
    };
    // 查看流程进度
    HistoryInstanceComponent.prototype.viewProcessSchedule = function (item) {
        var processCodeParam = encodeURIComponent(item.processCode);
        var params = "/" + item.processCode + "/" + item.processId + "/" + item.workState + "/userId001/sysCode001/tokenCode001";
        this.processInstanceManagementService.toActivitiSchedule(params);
    };
    HistoryInstanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history-instance',
            template: __webpack_require__(/*! ./history-instance.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/history-instance/history-instance.component.html"),
            styles: [__webpack_require__(/*! ./history-instance.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/history-instance/history-instance.component.scss")]
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_7__["ProcessInstanceManagementService"]])
    ], HistoryInstanceComponent);
    return HistoryInstanceComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/event-service-detail/event-service-detail.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/event-service-detail/event-service-detail.component.html ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <label> 事件服务名称:</label>\r\n    <input type=\"text\" pInputText [ngModel]=\"eventService.name\" readonly>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <label>调用类型:</label>\r\n    <input type=\"text\" pInputText [ngModel]=\"eventService.callType | mapValuePie: eventServiceCallType: 'type' : 'descp'\" readonly>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <label>调用模式:</label>\r\n    <textarea pInputTextarea [ngModel]=\"eventService.callMode | mapValuePie: eventServiceCallMode: 'type' : 'descp'\" readonly></textarea>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <label>调用服务:</label>\r\n    <textarea pInputTextarea [ngModel]=\"eventService.callService\" readonly></textarea>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <label>调用方法:</label>\r\n    <input type=\"text\" pInputText [ngModel]=\"eventService.callMethod\" readonly>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <label>参数获取方式:</label>\r\n    <input type=\"text\" pInputText [ngModel]=\"eventService.callParamflag | mapValuePie: eventServiceCallParamflag: 'type' : 'descp'\"\r\n      readonly>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <label>创建时间:</label>\r\n    <input type=\"text\" pInputText [ngModel]=\"eventService.createTime  | date: 'y-MM-dd HH:mm:ss'\" readonly>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <label>更新时间:</label>\r\n    <input type=\"text\" pInputText [ngModel]=\"eventService.updateTime  | date: 'y-MM-dd HH:mm:ss'\" readonly>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" (click)=\"closeDialog()\" label=\"关闭\"></button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/event-service-detail/event-service-detail.component.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/event-service-detail/event-service-detail.component.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n.module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\ninput, textarea {\n  width: 30% !important; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\nlabel {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n:host/deep/ .ui-dialog .ui-dropdown {\n  width: 30% !important; }\n\n.btn-add {\n  float: right; }\n\n.icoColor2 {\n  display: inline-block;\n  width: 75px;\n  height: 24px;\n  text-align: center;\n  line-height: 24px;\n  white-space: nowrap;\n  color: #fff;\n  background-color: #19b0c8;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  border-radius: 3px;\n  font-size: 14px; }\n\n.icoColor2:hover {\n  background-color: #058da1; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\ninput:-moz-read-only, textarea:-moz-read-only {\n  background-color: #ebebe4;\n  opacity: 0.6;\n  filter: Alpha(Opacity=35);\n  /* background-image: none; */\n  cursor: auto !important; }\n\ninput:read-only, textarea:read-only {\n  background-color: #ebebe4;\n  opacity: 0.6;\n  filter: Alpha(Opacity=35);\n  /* background-image: none; */\n  cursor: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9wcm9jZXNzLWluc3RhbmNlL21hbnVhbC1leGNlcHRpb24taW5mb3JtYXRpb24vZXZlbnQtc2VydmljZS1kZXRhaWwvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6Ylxcd29ya2Zsb3dcXGFjdGl2aXRpLXdvcmstZmxvd1xccHJvY2Vzcy1pbnN0YW5jZVxcbWFudWFsLWV4Y2VwdGlvbi1pbmZvcm1hdGlvblxcZXZlbnQtc2VydmljZS1kZXRhaWxcXGV2ZW50LXNlcnZpY2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUViO0VBRU0sZ0JBQWU7RUFDZixtQkFBa0IsRUFBQTs7QUFIeEI7RUFNTSxtQkFBa0IsRUFBQTs7QUFOeEI7RUFTTSxxQkFBcUIsRUFBQTs7QUFNM0I7RUFDRSxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSxrQkFBa0IsRUFBQTs7QUFEcEI7SUFHTSxZQUFZLEVBQUE7O0FBR2xCO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixxQkFBcUIsRUFBQTs7QUFJdkI7RUFDRSxxQkFBcUIsRUFBQTs7QUFJdkI7RUFDRSxZQUFZLEVBQUE7O0FBSWQ7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRTNCO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFMWDtJQVFJLFdBQVcsRUFBQTs7QUFJZjtFQUVJLDhCQUE4QixFQUFBOztBQUlsQztFQUNFLHlCQUFvQztFQUNwQyxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDRCQUFBO0VBQ0EsdUJBQXVCLEVBQUE7O0FBTHpCO0VBQ0UseUJBQW9DO0VBQ3BDLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsNEJBQUE7RUFDQSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi93b3JrZmxvdy9hY3Rpdml0aS13b3JrLWZsb3cvcHJvY2Vzcy1pbnN0YW5jZS9tYW51YWwtZXhjZXB0aW9uLWluZm9ybWF0aW9uL2V2ZW50LXNlcnZpY2UtZGV0YWlsL2V2ZW50LXNlcnZpY2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuXHJcblxyXG4ucmlnaHRMYXlvdXR7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxNiU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLm1vZHVsZXtcclxuICAucm93TG9jYXRvbntcclxuICAgICAgbWFyZ2luLXRvcDo2MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgfVxyXG4gIC5idG5Mb2NhdGlvbntcclxuICAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gIH1cclxuICBpbnB1dHtcclxuICAgICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5pbnB1dCx0ZXh0YXJlYXtcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYnV0dG9ue1xyXG4gICAgICBtYXJnaW46IDMwcHg7XHJcbiAgfVxyXG59XHJcbmxhYmVse1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyAudWktZHJvcGRvd257XHJcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmJ0bi1hZGQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICAvLyB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmljb0NvbG9yMiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA3NXB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5pY29Db2xvcjI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNThkYTE7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLXNwaW5uZXIgLnVpLXNwaW5uZXItYnV0dG9ue1xyXG4gIGhlaWdodDogNDklICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgLmZhLWNhcmV0LWRvd24ge1xyXG4gICAgdG9wOiAwLjI1ZW07XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3Bpbm5lci1kb3duIC5mYS1jYXJldC1kb3duIHtcclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcImtleWJvYXJkX2Fycm93X2Rvd25cIjtcclxuICB9XHJcbn1cclxuXHJcbmlucHV0OnJlYWQtb25seSwgdGV4dGFyZWE6cmVhZC1vbmx5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIyOCk7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGZpbHRlcjogQWxwaGEoT3BhY2l0eT0zNSk7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgKi9cclxuICBjdXJzb3I6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/event-service-detail/event-service-detail.component.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/event-service-detail/event-service-detail.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: EventServiceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventServiceDetailComponent", function() { return EventServiceDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constant_code_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/constant/code.value */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/code.value.ts");
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _manual_exception_information_manual_exception_information_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../manual-exception-information/manual-exception-information.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/manual-exception-information.service.ts");
/* harmony import */ var _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../process-definition/process-definition-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-definition/process-definition-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventServiceDetailComponent = /** @class */ (function () {
    function EventServiceDetailComponent(messageService, confirmationService, manualExceptionInformationService) {
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.manualExceptionInformationService = manualExceptionInformationService;
        this.msg = [];
        this.outValueEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // 事件服务实例
        this.eventService = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_6__["EventServiceListModel"]();
        // 调用类型
        this.eventServiceCallType = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_1__["EVENT_SERVICE_CALL_TYPE"];
        // 调用模式
        this.eventServiceCallMode = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_1__["EVENT_SERVICE_CALL_MODE"];
        // 参数获取方式
        this.eventServiceCallParamflag = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_1__["EVENT_SERVICE_CALL_PARAMS_FLAG"];
    }
    EventServiceDetailComponent.prototype.ngOnInit = function () {
    };
    // 根据事件服务ID获取事件服务信息
    EventServiceDetailComponent.prototype.getEventServiceDetail = function (id) {
        var _this = this;
        if (!id) {
            return;
        }
        var bodyParams = {
            id: id
        };
        this.manualExceptionInformationService.selectById(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_2__["handleResult"])(data, _this.messageService, function () {
                _this.eventService = data.pageData[0].result[0];
            });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_2__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    EventServiceDetailComponent.prototype.closeDialog = function () {
        this.outValueEmitter.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EventServiceDetailComponent.prototype, "outValueEmitter", void 0);
    EventServiceDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-service-detail',
            template: __webpack_require__(/*! ./event-service-detail.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/event-service-detail/event-service-detail.component.html"),
            styles: [__webpack_require__(/*! ./event-service-detail.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/event-service-detail/event-service-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            _manual_exception_information_manual_exception_information_service__WEBPACK_IMPORTED_MODULE_5__["ManualExceptionInformationService"]])
    ], EventServiceDetailComponent);
    return EventServiceDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/manual-exception-information.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/manual-exception-information.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'异常查询'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">流程编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryExceptionInstance.expProcCode\">\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">流程实例ID：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryExceptionInstance.expProcId\">\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">节点任务ID：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryExceptionInstance.expTaskId\">\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">异常节点类型：</label>\r\n      <p-dropdown [options]=\"queryNodeTypes\" [(ngModel)]=\"selectedNodeType\" optionLabel=\"descp\" placeholder=\"请选择\"\r\n        [autoWidth]=\"false\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">异常状态：</label>\r\n      <p-dropdown [options]=\"exceptionStatus\" [(ngModel)]=\"queryExceptionStatus\" optionLabel=\"descp\" placeholder=\"请选择\"\r\n        [autoWidth]=\"false\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">异常节点名称：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryExceptionInstance.expNodeName\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">异常发生起始时间：</label>\r\n      <p-calendar [(ngModel)]=\"startDate\" dataType=\"string\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\"\r\n        [showTime]=\"true\" [showSeconds]=\"true\" [showIcon]=\"true\" showButtonBar=\"true\"></p-calendar>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">异常发生结束时间：</label>\r\n      <p-calendar [(ngModel)]=\"endDate\" dataType=\"string\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\"\r\n        [showSeconds]=\"true\" [showIcon]=\"true\" showButtonBar=\"true\"></p-calendar>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">异常类型：</label>\r\n      <p-dropdown [options]=\"expTypeOption\" [(ngModel)]=\"expType\" optionLabel=\"descp\" placeholder=\"请选择\"\r\n        [autoWidth]=\"false\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <button pButton type=\"button\" (click)=\"queryFirst(dt)\" label=\"查询\"></button>\r\n    <button pButton type=\"button\" (click)=\"reset(dt)\" label=\"重置\"></button>\r\n  </div>\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt [value]=\"exceptionInformations\" emptyMessage=\"暂无数据\" selectionMode=\"single\"\r\n      [(selection)]=\"selectedExceptionInformation\" [lazy]=\"true\" (onLazyLoad)=\"query(dt)\"\r\n      [rows]=\"paginatorInstance.rowNum\" [(totalRecords)]=\"total\" [paginator]=\"true\" [pageLinks]=\"3\"\r\n      [rowsPerPageOptions]=\"[10,20,30]\" scrollable=\"true\" scrollWidth=\"'100%'\" [style]=\"{'text-align':'center'}\">\r\n      <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customSystemCode\" header=\"流程编码\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customSystemCode\">{{item.customSystemCode}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"expProcId\" header=\"流程实例ID\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.expProcId\">{{item.expProcId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"expTaskId\" header=\"节点任务ID\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.expTaskId\">{{item.expTaskId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"expNodeType\" header=\"异常节点类型\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.expNodeType | mapValuePie: queryNodeTypes: 'type' : 'descp'\">\r\n            {{item.expNodeType | mapValuePie: queryNodeTypes: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"expNodeName\" header=\"异常节点名称\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.expNodeName\">{{item.expNodeName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <!-- <p-column field=\"expMode\" header=\"异常模式\">\r\n            <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                <span [title]=\"item.expType | mapValuePie: exceptionPatterns: 'type' : 'descp'\">\r\n                    {{item.expMode | mapValuePie: exceptionPatterns: 'type' : 'descp'}}\r\n                </span>\r\n            </ng-template>\r\n        </p-column> -->\r\n      <!-- <p-column field=\"expMessage\" header=\"异常信息\">\r\n            <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                <span [title]=\"item.expMessage\">{{item.expMessage}}</span>\r\n            </ng-template>\r\n        </p-column> -->\r\n\r\n      <!-- <p-column field=\"evtServiceId\" header=\"事件服务ID\">\r\n            <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                <span [title]=\"item.evtServiceId\">{{item.evtServiceId}}</span>\r\n            </ng-template>\r\n        </p-column> -->\r\n\r\n      <!-- <p-column field=\"expNodeType\" header=\"异常节点类型\" >\r\n          <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n            <span [title]=\"item.expNodeType\">{{item.expNodeType}}</span>\r\n          </ng-template>\r\n        </p-column> -->\r\n      <p-column field=\"createTime\" header=\"异常发生时间\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.createTime | date: 'y-MM-dd HH:mm:ss'\">\r\n            {{item.createTime | date: 'y-MM-dd HH:mm:ss'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"expDoFlag\" header=\"处理状态\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.expDoFlag | mapValuePie: handleStatus: 'type' : 'descp'\">\r\n            {{item.expDoFlag | mapValuePie: handleStatus: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"updateTime\" header=\"异常处理时间\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.updateTime | date: 'y-MM-dd HH:mm:ss'\">\r\n            {{item.updateTime | date: 'y-MM-dd HH:mm:ss'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"expType\" header=\"异常类型\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.expType\">{{item.expType | mapValuePie: expTypeOption: 'type' : 'descp'}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"expUserId\" header=\"处理人员\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.expUserId\">{{item.expUserId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"expNums\" header=\"处理次数\" [style]=\"{'width':'100px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.expNums\">{{item.expNums}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"操作\" [style]=\"{'width': '240px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span class=\"tableApprove\" (click)=\"ignoreFunc(item, dt)\" *ngIf=\"item.expDoFlag == '0'\">忽略</span>\r\n          <span class=\"tabelUpdateIco\" (click)=\"dealException(item)\" *ngIf=\"item.expDoFlag == '0'\">异常处理</span>\r\n          <!-- <span class=\"tabelDetailIco\" (click)=\"showEventService(eventService,item)\">服务详情</span> -->\r\n          <span class=\"tabelDealIco\" (click)=\"showManualInfo(item)\">异常信息</span>\r\n          <span class=\"tabelDetailIco\" (click)=\"toActivitiPage(item)\" *ngIf=\"item.expType !== 'F4'\">流程图</span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n<p-confirmDialog header=\"Confirmation\" acceptLabel=\"确定\" rejectLabel=\"取消\" icon=\"fa fa-question-circle\" width=\"425\">\r\n</p-confirmDialog>\r\n\r\n<p-dialog [(visible)]=\"dialogParam.display\" modal=\"modal\" [header]=\"dialogParam.headerTitle\">\r\n  <app-event-service-detail #eventService (outValueEmitter)=\"callBack($event)\"></app-event-service-detail>\r\n</p-dialog>\r\n\r\n\r\n<!-- <p-dialog [(visible)]=\"handleExceptionDisplay\" width=\"600\" height=\"400\" modal=\"modal\">\r\n          <p-header *ngIf=\"isIgnoreHandle\">\r\n              人工忽略异常\r\n          </p-header>\r\n          <p-header *ngIf=\"isInterventionHandle\">\r\n              人工干预处理异常\r\n          </p-header>\r\n          <div class=\"dialog-containe\">\r\n              <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n                  <form [formGroup]=\"exceptionHandleForm\">\r\n                      <div class=\"ui-grid-row edit-row\">\r\n                          <div class=\"ui-grid-col-4 edit-text\">\r\n                              <span appValidation></span> 异常处理人员ID:\r\n                          </div>\r\n                          <div class=\"ui-grid-col-6 edit-context\">\r\n                              <input type=\"text\" pInputText [(ngModel)]=\"exceptionHandle.expDoUserId\" formControlName=\"expDoUserIdName\" placeholder=\"必输项\">\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"ui-grid-row edit-row\" *ngIf=\"isInterventionHandle\">\r\n                          <div class=\"ui-grid-col-4 edit-text\">\r\n                              <span appValidation></span> 指定处理人员ID:\r\n                          </div>\r\n                          <div class=\"ui-grid-col-6 edit-context\">\r\n                              <input type=\"text\" pInputText [(ngModel)]=\"exceptionHandle.expUserId\" formControlName=\"expUserIdName\" placeholder=\"必输项\">\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"ui-grid-row edit-row\">\r\n                          <div class=\"ui-grid-col-4 edit-text\">\r\n                              异常处理备注:\r\n                          </div>\r\n                          <div class=\"ui-grid-col-6 edit-context\">\r\n                              <textarea pInputTextarea class=\"disable-resize\" [(ngModel)]=\"exceptionHandle.expDoMessage\" formControlName=\"expDoMessageName\"></textarea>\r\n                          </div>\r\n                      </div>\r\n                  </form>\r\n                  <div class=\"ui-grid-row btn-row\">\r\n                      <div class=\"edit-btn\">\r\n                          <button pButton type=\"button\" (click)=\"saveExcetionHandle(dt)\" [disabled]=\"!exceptionHandleForm.valid\" label=\"保存\"></button>\r\n                          <button pButton type=\"button\" (click)=\"resetExcetionHandle()\" label=\"重置\"></button>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </p-dialog>\r\n      \r\n      \r\n      <p-dialog [(visible)]=\"viewExceptionDisplay\" width=\"600\" height=\"700\" modal=\"modal\" header=\"查看异常详细信息\">\r\n          <div class=\"dialog-containe\">\r\n              <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          异常类型:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <input type=\"text\" pInputText readonly [ngModel]=\"singExceptionInformation.expType | mapValuePie: exceptionTypes: 'type' : 'descp'\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          异常模式:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <input type=\"text\" pInputText readonly [ngModel]=\"singExceptionInformation.expMode | mapValuePie: exceptionPatterns: 'type' : 'descp'\">\r\n                      </div>\r\n                  </div>\r\n      \r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          异常补充信息:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <textarea pInputTextarea class=\"disable-resize\" readonly [ngModel]=\"singExceptionInformation.expMessage\"></textarea>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          流程编码:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <input type=\"text\" pInputText readonly [ngModel]=\"singExceptionInformation.expProcessCode\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          异常流程实例ID:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <input type=\"text\" pInputText readonly [ngModel]=\"singExceptionInformation.expProcessId\">\r\n                      </div>\r\n                  </div>\r\n      \r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          异常任务ID:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <input type=\"text\" pInputText readonly [ngModel]=\"singExceptionInformation.expTaskId\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          异常级别:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <input type=\"text\" pInputText readonly [ngModel]=\"singExceptionInformation.expRate\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          异常节点类型:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <input type=\"text\" pInputText readonly [ngModel]=\"singExceptionInformation.expNodeType\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          异常节点名称:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <input type=\"text\" pInputText readonly [ngModel]=\"singExceptionInformation.expNodeName\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          异常处理状态:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <input type=\"text\" pInputText readonly [ngModel]=\"singExceptionInformation.expDoFlag\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          异常处理状态:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <input type=\"text\" pInputText readonly [ngModel]=\"singExceptionInformation.expDoFlag | mapValuePie: handleStatus: 'type' : 'descp'\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          异常发生时间:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <input type=\"text\" pInputText readonly [ngModel]=\"singExceptionInformation.expCrtTime\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          异常处理时间:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <input type=\"text\" pInputText readonly [ngModel]=\"singExceptionInformation.expEndTime\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          异常处理人员:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <input type=\"text\" pInputText readonly [ngModel]=\"singExceptionInformation.expDoUserId\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          异常处理方式:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <input type=\"text\" pInputText readonly [ngModel]=\"singExceptionInformation.expDoType | mapValuePie: handleTypes: 'type' : 'descp'\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          异常处理备注:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <textarea pInputTextarea class=\"disable-resize\" readonly [ngModel]=\"singExceptionInformation.expDoMessage\"></textarea>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          指定处理人员:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <input type=\"text\" pInputText readonly [ngModel]=\"singExceptionInformation.expUserId\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          原定处理人员:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <input type=\"text\" pInputText readonly [ngModel]=\"singExceptionInformation.expOldUserId\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          已处理次数:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <input type=\"text\" pInputText readonly [ngModel]=\"singExceptionInformation.expNums\">\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row edit-row\">\r\n                      <div class=\"ui-grid-col-4 edit-text\">\r\n                          异常业务数据:\r\n                      </div>\r\n                      <div class=\"ui-grid-col-6 edit-context\">\r\n                          <input type=\"text\" pInputText readonly [ngModel]=\"singExceptionInformation.expTranData\">\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </p-dialog> -->\r\n\r\n<p-dialog [(visible)]=\"viewExceptionDisplay\" modal=\"modal\" header=\"查看异常信息\">\r\n  <div class=\"dialog-containe\">\r\n    <div class=\"ui-grid-col-12\">\r\n      <textarea pInputTextarea readonly [(ngModel)]=\"exceptionMessage\" [rows]=\"8\" [cols]=\"32\"></textarea>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" (click)=\"viewExceptionDisplay= false\" label=\"关闭\"></button>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/manual-exception-information.component.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/manual-exception-information.component.scss ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\ninput:-moz-read-only, textarea:-moz-read-only {\n  background-color: #ebebe4;\n  opacity: 0.6;\n  filter: Alpha(Opacity=35);\n  /* background-image: none; */\n  cursor: auto !important; }\n\ninput:read-only, textarea:read-only {\n  background-color: #ebebe4;\n  opacity: 0.6;\n  filter: Alpha(Opacity=35);\n  /* background-image: none; */\n  cursor: auto !important; }\n\n.textAlignCenter button {\n  height: 29px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9wcm9jZXNzLWluc3RhbmNlL21hbnVhbC1leGNlcHRpb24taW5mb3JtYXRpb24vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6Ylxcd29ya2Zsb3dcXGFjdGl2aXRpLXdvcmstZmxvd1xccHJvY2Vzcy1pbnN0YW5jZVxcbWFudWFsLWV4Y2VwdGlvbi1pbmZvcm1hdGlvblxcbWFudWFsLWV4Y2VwdGlvbi1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQUE7O0FBSDFCO0VBTVEsbUJBQWtCLEVBQUE7O0FBTjFCO0VBU1EscUJBQXFCLEVBQUE7O0FBTTdCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0kscUJBQXFCLEVBQUE7O0FBRHpCO0lBR1Esc0JBQXNCLEVBQUE7O0FBSDlCO0lBTVEsWUFBWSxFQUFBOztBQUtwQjtFQUNJLFdBQVUsRUFBQTs7QUFHZDtFQUNJLHFCQUFxQixFQUFBOztBQUV4QjtFQUNJLHdCQUF3QjtFQUN4Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2Y7RUFDRyxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixlQUFlO0VBQ2YsU0FBUyxFQUFBOztBQUxaO0lBUUssV0FBVyxFQUFBOztBQUlmO0VBRUksOEJBQThCLEVBQUE7O0FBS3BDO0VBQ0UseUJBQW9DO0VBQ3BDLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsNEJBQUE7RUFDQSx1QkFBdUIsRUFBQTs7QUFMekI7RUFDRSx5QkFBb0M7RUFDcEMsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qiw0QkFBQTtFQUNBLHVCQUF1QixFQUFBOztBQUl6QjtFQUVJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi93b3JrZmxvdy9hY3Rpdml0aS13b3JrLWZsb3cvcHJvY2Vzcy1pbnN0YW5jZS9tYW51YWwtZXhjZXB0aW9uLWluZm9ybWF0aW9uL21hbnVhbC1leGNlcHRpb24taW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kdWxle1xyXG4gICAgLnJvd0xvY2F0b257XHJcbiAgICAgICAgbWFyZ2luLXRvcDo2MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NDBweDtcclxuICAgIH1cclxuICAgIC5idG5Mb2NhdGlvbntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgICB9XHJcbiAgICBpbnB1dHtcclxuICAgICAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3due1xyXG4gICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktY2FsZW5kYXJ7XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICAudWktZGF0ZXBpY2tlcntcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG59IFxyXG5cclxuXHJcbnNwYW4udGVse1xyXG4gICAgY29sb3I6I2YwMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YXtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuIH1cclxuIDpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93e1xyXG4gICAgIHdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcclxuICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAucmlnaHRMYXlvdXR7XHJcbiAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgIHdpZHRoOiAxNiU7XHJcbiAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgY29sb3I6ICMwMDA7XHJcbiB9XHJcblxyXG4gOmhvc3QvZGVlcC8gLnVpLXNwaW5uZXIgLnVpLXNwaW5uZXItYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiA0OSUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgXHJcbiAgICAuZmEtY2FyZXQtZG93biB7XHJcbiAgICAgIHRvcDogMC4yNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICA6aG9zdC9kZWVwLyAudWktc3Bpbm5lci1kb3duIC5mYS1jYXJldC1kb3duIHtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJrZXlib2FyZF9hcnJvd19kb3duXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuaW5wdXQ6cmVhZC1vbmx5LCB0ZXh0YXJlYTpyZWFkLW9ubHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjI4KTtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgZmlsdGVyOiBBbHBoYShPcGFjaXR5PTM1KTtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAqL1xyXG4gIGN1cnNvcjogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLnRleHRBbGlnbkNlbnRlciB7XHJcbiAgYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiAyOXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/manual-exception-information.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/manual-exception-information.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: ManualExceptionInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualExceptionInformationComponent", function() { return ManualExceptionInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _process_instance_process_instance_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../process-instance/process-instance-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-model.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _manual_exception_information_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manual-exception-information.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/manual-exception-information.service.ts");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/constant/code.value */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/code.value.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ManualExceptionInformationComponent = /** @class */ (function () {
    function ManualExceptionInformationComponent(messageService, manualExceptionInformationService) {
        this.messageService = messageService;
        this.manualExceptionInformationService = manualExceptionInformationService;
        this.msgs = [];
        // 异常类型
        this.exceptionTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["EXCEPTION_TYPE"];
        // 查询条件中选中的异常类型
        this.queryExceptionType = new _process_instance_process_instance_model__WEBPACK_IMPORTED_MODULE_1__["EngTypeModel"]();
        // 异常模式
        this.exceptionPatterns = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["EXCEPTION_PATTERN"];
        // 异常状态
        this.exceptionStatus = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["EXCEPTION_STATUS"];
        // 查询条件中的异常状态
        this.queryExceptionStatus = new _process_instance_process_instance_model__WEBPACK_IMPORTED_MODULE_1__["EngTypeModel"]();
        // 查询条件中选中的异常模式
        this.queryExceptionPattern = new _process_instance_process_instance_model__WEBPACK_IMPORTED_MODULE_1__["EngTypeModel"]();
        // 异常节点类型
        this.queryNodeTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["TASK_NODE_TYPES"];
        // 查询条件中选中的异常节点类型
        this.selectedNodeType = new _process_instance_process_instance_model__WEBPACK_IMPORTED_MODULE_1__["EngTypeModel"]();
        // 异常信息列表
        this.exceptionInformations = [];
        // 单选选中的一行异常信息实例
        this.selectedExceptionInformation = new _process_instance_process_instance_model__WEBPACK_IMPORTED_MODULE_1__["ExceptionInformationModel"]();
        //查询条件中的异常实例
        this.queryExceptionInstance = new _process_instance_process_instance_model__WEBPACK_IMPORTED_MODULE_1__["ExceptionInformationModel"]();
        // 分页实例
        this.paginatorInstance = new _process_instance_process_instance_model__WEBPACK_IMPORTED_MODULE_1__["ExceptionInformationModel"]();
        this.CALENDAR_CN = _common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        // 处理状态
        this.handleStatus = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["EXCEPTION_HANDLE"];
        // 通过ID获取的单个异常信息
        this.singExceptionInformation = new _process_instance_process_instance_model__WEBPACK_IMPORTED_MODULE_1__["SingleExceptionInformationModel"]();
        this.dialogParam = {
            display: false,
            headerTitle: ''
        };
        // 异常信息模态框显隐
        this.viewExceptionDisplay = false;
        // 异常类型下拉框
        this.expTypeOption = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["EXP_TYPE"];
        // 异常类型
        this.expType = new _process_instance_process_instance_model__WEBPACK_IMPORTED_MODULE_1__["EngTypeModel"]();
    }
    ManualExceptionInformationComponent.prototype.ngOnInit = function () {
        this.paginatorInstance.rowNum = _common_constant_config__WEBPACK_IMPORTED_MODULE_4__["paginatorUtils"].rowNum;
        this.paginatorInstance.startRow = _common_constant_config__WEBPACK_IMPORTED_MODULE_4__["paginatorUtils"].startRow;
    };
    // 获取异常信息列表
    ManualExceptionInformationComponent.prototype.getExceptionList = function (expProcCode, expProcId, expTaskId, expNodeType, expNodeName, startTime, endTime, expDoFlag, expType) {
        var _this = this;
        var bodyParams = {
            expProcCode: expProcCode,
            expProcId: expProcId,
            expTaskId: expTaskId,
            expNodeType: expNodeType,
            expNodeName: expNodeName,
            startTime: startTime,
            endTime: endTime,
            expDoFlag: expDoFlag,
            expType: expType,
            pageRows: parseInt(this.paginatorInstance.rowNum, 10),
            curPage: parseInt(this.paginatorInstance.startRow, 10)
        };
        this.manualExceptionInformationService.getExceptionList(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_5__["handleResult"])(data, _this.messageService, function () {
                _this.exceptionInformations = data.pageData[0].result;
                _this.total = data.pageData[0].totalRows;
                _this.exceptionInformations && _this.exceptionInformations.length && _this.exceptionInformations.map(function (item) {
                    item.customSystemCode = item.expProcCode.split(":")[0];
                });
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_5__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    ManualExceptionInformationComponent.prototype.queryFirst = function (table) {
        table.first = 0;
        this.query(table);
    };
    // 按照搜索条件查询
    ManualExceptionInformationComponent.prototype.query = function (table) {
        table.first = table.first || 0;
        table.rows = table.rows || parseInt(_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["paginatorUtils"].rowNum, 10);
        // 每页显示的条数
        this.paginatorInstance.rowNum = table.rows + '';
        // 当前页
        this.paginatorInstance.startRow = (table.first / table.rows) + 1 + '';
        this.getExceptionList(this.queryExceptionInstance.expProcCode, this.queryExceptionInstance.expProcId, this.queryExceptionInstance.expTaskId, this.selectedNodeType.type, this.queryExceptionInstance.expNodeName, this.startDate, this.endDate, this.queryExceptionStatus.type, this.expType.type);
    };
    // 重置查询
    ManualExceptionInformationComponent.prototype.reset = function (dt) {
        this.queryExceptionStatus = new _process_instance_process_instance_model__WEBPACK_IMPORTED_MODULE_1__["EngTypeModel"]();
        this.selectedNodeType = new _process_instance_process_instance_model__WEBPACK_IMPORTED_MODULE_1__["EngTypeModel"]();
        this.queryExceptionInstance = new _process_instance_process_instance_model__WEBPACK_IMPORTED_MODULE_1__["ExceptionInformationModel"]();
        this.startDate = null;
        this.endDate = null;
        this.expType = new _process_instance_process_instance_model__WEBPACK_IMPORTED_MODULE_1__["EngTypeModel"]();
        this.queryFirst(dt);
    };
    // 异常处理
    ManualExceptionInformationComponent.prototype.dealException = function (item) {
        var _this = this;
        var bodyParams = {
            id: item.id
        };
        this.manualExceptionInformationService.dealExpDo(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_5__["handleResult"])(data, _this.messageService, function () {
                _this.getExceptionList();
            }, true, { message: ' 处理成功', errorMsg: '处理失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_5__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    // 双击显示事件服务信息
    ManualExceptionInformationComponent.prototype.showEventService = function (eventService, item) {
        eventService.getEventServiceDetail(item.evtServiceId);
        this.dialogParam.headerTitle = "\u4E8B\u4EF6\u670D\u52A1ID\u4E3A\u3010" + item.evtServiceId + "\u3011\u7684\u4E8B\u4EF6\u670D\u52A1\u8BE6\u60C5";
        this.dialogParam.display = true;
    };
    ManualExceptionInformationComponent.prototype.callBack = function (event) {
        this.dialogParam.display = !event;
    };
    // 忽略功能
    ManualExceptionInformationComponent.prototype.ignoreFunc = function (item, table) {
        var _this = this;
        console.log(item);
        if (item.expDoFlag === '2') {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_5__["showMessage"])(this.messageService, 'error', '已是忽略状态！');
            return;
        }
        var bodyParams = {
            id: item.id + '',
            expDoFlag: '2'
        };
        this.manualExceptionInformationService.updateExceptionData(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_5__["handleResult"])(data, _this.messageService, function () {
                _this.query(table);
            }, true, { message: '忽略成功！', errorMsg: '忽略失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_5__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    // 查看异常信息
    ManualExceptionInformationComponent.prototype.showManualInfo = function (item) {
        this.exceptionMessage = item.expMessage;
        this.viewExceptionDisplay = true;
    };
    // 查看流程图
    ManualExceptionInformationComponent.prototype.toActivitiPage = function (item) {
        var _this = this;
        this.manualExceptionInformationService.getShowProcessUrl({ processId: item.expProcId })
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_5__["handleResult"])(data, _this.messageService, function () {
                if (data.pageData[0].urlAddr) {
                    var urlAddr = data.pageData[0].urlAddr;
                    var url = urlAddr.slice(urlAddr.indexOf('workflow-app'));
                    console.log(url);
                    _this.manualExceptionInformationService.toActivitiSchedule(url);
                }
                else {
                    Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_5__["showMessage"])(_this.messageService, 'error', '获取流程图URL失败!');
                }
            }, true, { errorMsg: '获取流程图URL失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_5__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    ManualExceptionInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manual-exception-information',
            template: __webpack_require__(/*! ./manual-exception-information.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/manual-exception-information.component.html"),
            styles: [__webpack_require__(/*! ./manual-exception-information.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/manual-exception-information.component.scss")]
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _manual_exception_information_service__WEBPACK_IMPORTED_MODULE_3__["ManualExceptionInformationService"]])
    ], ManualExceptionInformationComponent);
    return ManualExceptionInformationComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/manual-exception-information.service.ts":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/manual-exception-information.service.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: ManualExceptionInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualExceptionInformationService", function() { return ManualExceptionInformationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/service/http.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/service/http.service.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _process_instance_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../process-instance.constant */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { RTS_HTTP_URL } from '../../common/constant/config';
var ManualExceptionInformationService = /** @class */ (function () {
    function ManualExceptionInformationService(httpService) {
        var _this = this;
        this.httpService = httpService;
        // 查询异常信息列表
        this.getExceptionList = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["RTS_HTTP_URL"] + _process_instance_constant__WEBPACK_IMPORTED_MODULE_3__["EXCEPTION_API"].selectList, params, null); };
        // 异常管理
        this.dealExpDo = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["RTS_HTTP_URL"] + _process_instance_constant__WEBPACK_IMPORTED_MODULE_3__["EXCEPTION_API"].dealExpDo, params, null); };
        // 根据时间ID获取事件服务
        this.selectById = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["RTS_HTTP_URL"] + _process_instance_constant__WEBPACK_IMPORTED_MODULE_3__["EXCEPTION_API"].selectById, params, null); };
        // 忽略功能
        this.updateExceptionData = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["RTS_HTTP_URL"] + _process_instance_constant__WEBPACK_IMPORTED_MODULE_3__["EXCEPTION_API"].updateExceptionData, params, null); };
        // 跳转到流程设计器
        this.toActivitiSchedule = function (params) { return window.open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["ACTIVITI_HTTP_URL"] + ("/" + params)); };
        // 查询查看流程图的url
        this.getShowProcessUrl = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["RTS_HTTP_URL"] + _process_instance_constant__WEBPACK_IMPORTED_MODULE_3__["EXCEPTION_API"].getShowProcessUrl, params, null); };
    }
    ManualExceptionInformationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], ManualExceptionInformationService);
    return ManualExceptionInformationService;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/message-sending-query/message-sending-query.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/message-sending-query/message-sending-query.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'发送消息查询'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">发送内容：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryMessageSend.smsCotent\">\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">发送方式：</label>\r\n      <p-dropdown [options]=\"sendTypes\" [(ngModel)]=\"selectedSendType\" optionLabel=\"descp\" placeholder=\"请选择\" [autoWidth]=\"false\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">任务ID：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryMessageSend.taskId\">\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">接受人员：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryMessageSend.userId\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <button pButton type=\"button\" label=\"查询\" (click)=\"query()\"></button>\r\n    <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n  </div>\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt [value]=\"messageSendList\" emptyMessage=\"暂无数据\" [style]=\"{'text-align':'center'}\" scrollable=\"true\" scrollWidth=\"'100%'\">\r\n      <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{ pager.first - 0 + index + 1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"taskId\" header=\"任务ID\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskId\">{{item.taskId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"procExtId\" header=\"流程实例ID\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.procExtId\">{{item.procExtId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"type\" header=\"发送方式\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.type | mapValuePie: sendTypes: 'type' : 'descp'\">\r\n            {{item.type | mapValuePie: sendTypes: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"smsCotent\" header=\"发送内容\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.smsCotent\">{{item.smsCotent}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"smsTime\" header=\"发送次数\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.smsTime\">{{item.smsTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"userId\" header=\"接受人员\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.userId\">{{item.userId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"smsAddress\" header=\"接受地址\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.smsAddress\">{{item.smsAddress}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"result\" header=\"发送结果\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.result | mapValuePie: sendResults: 'type' : 'descp'\">\r\n            {{item.result | mapValuePie: sendResults: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"createTime\" header=\"创建时间\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.createTime\">{{item.createTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"updateTime\" header=\"更新时间\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.updateTime\">{{item.updateTime}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <!-- <p-column field=\"operator\" header=\"操作人\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.operator\">{{item.operator}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n    </p-dataTable>\r\n    <p-paginator [rows]=\"pager.rows\" [first]=\"pager.first\" [totalRecords]=\"pager.totalRecords\" (onPageChange)=\"paginate($event)\"\r\n      [rowsPerPageOptions]=\"pager.rowsPerPageOptions\" [pageLinkSize]=\"pager.pageLinkSize\"></p-paginator>\r\n  </div>\r\n</div>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/message-sending-query/message-sending-query.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/message-sending-query/message-sending-query.component.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9wcm9jZXNzLWluc3RhbmNlL21lc3NhZ2Utc2VuZGluZy1xdWVyeS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFx3b3JrZmxvd1xcYWN0aXZpdGktd29yay1mbG93XFxwcm9jZXNzLWluc3RhbmNlXFxtZXNzYWdlLXNlbmRpbmctcXVlcnlcXG1lc3NhZ2Utc2VuZGluZy1xdWVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVNLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQUE7O0FBSHhCO0VBTU0sbUJBQWtCLEVBQUE7O0FBTnhCO0VBU00scUJBQXFCLEVBQUE7O0FBTTNCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UscUJBQXFCLEVBQUE7O0FBRHZCO0lBR00sc0JBQXNCLEVBQUE7O0FBSDVCO0lBTU0sWUFBWSxFQUFBOztBQUtsQjtFQUNFLFdBQVUsRUFBQTs7QUFHWjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNHLHdCQUF3QjtFQUN4Qix1QkFBdUIsRUFBQTs7QUFHMUI7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvd29ya2Zsb3cvYWN0aXZpdGktd29yay1mbG93L3Byb2Nlc3MtaW5zdGFuY2UvbWVzc2FnZS1zZW5kaW5nLXF1ZXJ5L21lc3NhZ2Utc2VuZGluZy1xdWVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGV7XHJcbiAgLnJvd0xvY2F0b257XHJcbiAgICAgIG1hcmdpbi10b3A6NjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG4gIH1cclxuICAuYnRuTG9jYXRpb257XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3due1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFye1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICAudWktZGF0ZXBpY2tlcntcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICB9XHJcbn0gXHJcblxyXG5cclxuc3Bhbi50ZWx7XHJcbiAgY29sb3I6I2YwMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YXtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3d7XHJcbiAgIHdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcclxuICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yaWdodExheW91dHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDE2JTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/message-sending-query/message-sending-query.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/message-sending-query/message-sending-query.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: MessageSendingQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageSendingQueryComponent", function() { return MessageSendingQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../process-definition/process-definition-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-definition/process-definition-model.ts");
/* harmony import */ var _process_instance_message_sending_query_message_sending_query_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../process-instance/message-sending-query/message-sending-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/message-sending-query/message-sending-query.service.ts");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/constant/code.value */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/code.value.ts");
/* harmony import */ var _process_instance_process_instance_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../process-instance/process-instance-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MessageSendingQueryComponent = /** @class */ (function () {
    function MessageSendingQueryComponent(messageService, confirmationService, messageSendingQueryService) {
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.messageSendingQueryService = messageSendingQueryService;
        this.msgs = [];
        // 分页
        this.pager = new _common_constant_config__WEBPACK_IMPORTED_MODULE_6__["Pager"]();
        // 发送结果
        this.sendResults = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["SEND_RESULT_TYPE"];
        // 发送类型
        this.sendTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_7__["SEND_MESSAGE_TYPE"];
        // 查询条件中选中的发送类型
        this.selectedSendType = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_4__["DictionaryTypeModel"]();
        // 查询回来的消息列表
        this.messageSendList = [];
        // 查询的发送消息实例
        this.queryMessageSend = new _process_instance_process_instance_model__WEBPACK_IMPORTED_MODULE_8__["SendMessageModel"]();
    }
    MessageSendingQueryComponent.prototype.ngOnInit = function () {
        this.getSendMessageList(this.queryMessageSend.smsCotent, this.selectedSendType.type, this.queryMessageSend.taskId, this.queryMessageSend.userId);
    };
    // 按照搜索条件查询
    MessageSendingQueryComponent.prototype.query = function () {
        this.pager.first = '0';
        this.pager.page = '1';
        this.getSendMessageList(this.queryMessageSend.smsCotent, this.selectedSendType.type, this.queryMessageSend.taskId, this.queryMessageSend.userId);
    };
    // 查询的重置
    MessageSendingQueryComponent.prototype.reset = function () {
        this.queryMessageSend.smsCotent = null;
        this.queryMessageSend.taskId = null;
        ;
        this.queryMessageSend.userId = null;
        this.selectedSendType = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_4__["DictionaryTypeModel"]();
    };
    // 分页
    MessageSendingQueryComponent.prototype.paginate = function (event) {
        console.log(event.first);
        this.pager.first = event.first;
        this.pager.rows = event.rows;
        this.pager.page = event.page + 1;
        this.getSendMessageList(this.queryMessageSend.smsCotent, this.selectedSendType.type, this.queryMessageSend.taskId, this.queryMessageSend.userId);
    };
    // 获取已办任务列表
    MessageSendingQueryComponent.prototype.getSendMessageList = function (smsCotent, type, taskId, userId) {
        var _this = this;
        var bodyParams = {
            smsCotent: smsCotent,
            type: type,
            taskId: taskId,
            userId: userId,
            pageRows: parseInt(this.pager.rows, 10),
            curPage: parseInt(this.pager.page, 10)
        };
        this.messageSendingQueryService.listWfMessage(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_3__["handleResult"])(data, _this.messageService, function () {
                _this.messageSendList = data.pageData[0].result;
                _this.pager.totalRecords = data.pageData[0].totalRows;
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_3__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    MessageSendingQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-sending-query',
            template: __webpack_require__(/*! ./message-sending-query.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/message-sending-query/message-sending-query.component.html"),
            styles: [__webpack_require__(/*! ./message-sending-query.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/message-sending-query/message-sending-query.component.scss")]
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            _process_instance_message_sending_query_message_sending_query_service__WEBPACK_IMPORTED_MODULE_5__["MessageSendingQueryService"]])
    ], MessageSendingQueryComponent);
    return MessageSendingQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/message-sending-query/message-sending-query.service.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/message-sending-query/message-sending-query.service.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: MessageSendingQueryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageSendingQueryService", function() { return MessageSendingQueryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/service/http.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/service/http.service.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _process_instance_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../process-instance.constant */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { RTS_HTTP_URL } from '../../common/constant/config';
var MessageSendingQueryService = /** @class */ (function () {
    function MessageSendingQueryService(httpService) {
        var _this = this;
        this.httpService = httpService;
        // 查询消息发送列表
        this.listWfMessage = function (params) { return _this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["RTS_HTTP_URL"] + _process_instance_constant__WEBPACK_IMPORTED_MODULE_3__["SEND_MESSAGE_API"].listWfMessage, params, null); };
    }
    MessageSendingQueryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], MessageSendingQueryService);
    return MessageSendingQueryService;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/approval-records/approval-records.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/approval-records/approval-records.component.html ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 base-table\">\r\n  <p-dataTable [value]=\"queryApproveds\" emptyMessage=\"暂无数据\" scrollable=\"true\" [style]=\"{'text-align':'center'}\"\r\n    scrollable=\"true\" scrollWidth=\"'100%'\">\r\n    <p-headerColumnGroup>\r\n      <p-row>\r\n        <p-column header=\"序号\" [style]=\"{'width':'50px'}\"></p-column>\r\n        <p-column header=\"流程实例ID\" [style]=\"{'width':'100px'}\"></p-column>\r\n        <p-column header=\"任务ID\" [style]=\"{'width':'100px'}\"></p-column>\r\n        <p-column header=\"节点类型\" [style]=\"{'width':'100px'}\"></p-column>\r\n        <p-column header=\"节点名称\" [style]=\"{'width':'100px'}\"></p-column>\r\n        <p-column header=\"提交时间\" [style]=\"{'width':'120px'}\"></p-column>\r\n        <p-column header=\"处理人员\" [style]=\"{'width':'100px'}\"></p-column>\r\n        <p-column header=\"处理时间\" [style]=\"{'width':'120px'}\"></p-column>\r\n        <p-column header=\"处理状态\" [style]=\"{'width':'100px'}\"></p-column>\r\n        <p-column header=\"处理结果\" [style]=\"{'width':'100px'}\"></p-column>\r\n        <p-column header=\"处理意见\" [style]=\"{'width':'200px'}\"></p-column>\r\n        <p-column header=\"渠道号\" [style]=\"{'width':'100px'}\"></p-column>\r\n        <p-column header=\"紧急程度\" [style]=\"{'width':'100px'}\"></p-column>\r\n        <!-- <p-column header=\"查看状态\" [style]=\"{'width':'100px'}\"></p-column> -->\r\n        <!-- <p-column header=\"查看人员列表\" colspan=\"5\" [style]=\"{'width':'700px'}\"></p-column> -->\r\n        <p-column header=\"操作\"  [style]=\"{'width':'100px'}\"></p-column>\r\n      </p-row>\r\n      <!-- <p-row>\r\n        <p-column header=\"查看人员id\" [style]=\"{'width':'140px'}\"></p-column>\r\n        <p-column header=\"查看人员姓名\" [style]=\"{'width':'140px'}\"></p-column>\r\n        <p-column header=\"第一次查看时间\" [style]=\"{'width':'240px'}\"></p-column>\r\n        <p-column header=\"最近查看时间\" [style]=\"{'width':'240px'}\"></p-column>\r\n        <p-column header=\"查看次数\" [style]=\"{'width':'140px'}\"></p-column>\r\n      </p-row> -->\r\n    </p-headerColumnGroup>\r\n    <p-column header=\"序号\" [style]=\"{'width':'50px'}\">\r\n      <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n        <span>{{index+1}} </span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"processId\" header=\"流程实例ID\" [style]=\"{'width':'100px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <span [title]=\"item.processId\">{{item.processId}}</span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"taskId\" header=\"任务ID\" [style]=\"{'width':'100px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <span [title]=\"item.taskId\">{{item.taskId}}</span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"taskType\" header=\"节点类型\" [style]=\"{'width':'100px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <span [title]=\"item.taskType | mapValuePie: businessNodeTypes: 'type' : 'descp'\">\r\n          {{item.taskType | mapValuePie: businessNodeTypes: 'type' : 'descp'}}\r\n        </span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"taskName\" header=\"节点名称\" [style]=\"{'width':'100px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <span [title]=\"item.taskName\">{{item.taskName}}</span>\r\n      </ng-template>\r\n    </p-column>\r\n\r\n    <!-- <p-column field=\"workState\" header=\"审批状态\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <span [title]=\"item.workState | mapValuePie: processState: 'type' : 'descp'\">\r\n          {{item.workState | mapValuePie: processState: 'type' : 'descp'}}\r\n        </span>\r\n      </ng-template>\r\n    </p-column> -->\r\n    <p-column field=\"startDate\" header=\"提交时间\" [style]=\"{'width':'120px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <span [title]=\"item.startDate\">\r\n          {{item.startDate}}\r\n        </span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"customdoTaskActor\" header=\"处理人员\" [style]=\"{'width':'100px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <span [title]=\"item.customdoTaskActor\">{{item.customdoTaskActor}}</span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"updateDate\" header=\"处理时间\" [style]=\"{'width':'120px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <span [title]=\"item.updateDate\">\r\n          {{item.updateDate}}\r\n        </span>\r\n      </ng-template>\r\n    </p-column>\r\n\r\n    <p-column field=\"workState\" header=\"处理状态\" [style]=\"{'width':'100px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <span [title]=\"item.workState | mapValuePie: processState: 'type' : 'descp'\">\r\n          {{item.workState | mapValuePie: processState: 'type' : 'descp'}}\r\n        </span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"doResult\" header=\"处理结果\" [style]=\"{'width':'100px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <span [title]=\"item.doResult | mapValuePie: approveResult: 'type' : 'descp'\">\r\n          {{item.doResult | mapValuePie: approveResult: 'type' : 'descp'}}\r\n        </span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"doRemark\" header=\"处理意见\" [style]=\"{'width':'200px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <span [title]=\"item.doRemark\">{{item.doRemark}}</span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"tranChannel\" header=\"渠道号\" [style]=\"{'width':'100px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <span [title]=\"item.varMap.tranChannel\">{{item.varMap.tranChannel}}</span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"taskUrgent\" header=\"紧急程度\" [style]=\"{'width':'100px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <span title=\"{{ item.varMap.taskUrgent | mapValuePie: taskUrgent: 'type' : 'descp'}}\">{{item.varMap.taskUrgent | mapValuePie: taskUrgent: 'type' : 'descp'}}</span>\r\n      </ng-template>\r\n    </p-column>\r\n    <!-- <p-column field=\"viewFlag\" header=\"查看状态\" [style]=\"{'width':'100px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <span title=\"{{item.viewFlag | mapValuePie: VIEW_FLAG: 'type' : 'descp'}}\">{{item.viewFlag | mapValuePie: VIEW_FLAG: 'type' : 'descp'}}</span>\r\n      </ng-template>\r\n    </p-column> -->\r\n    <!-- <p-column field=\"viewUserList\" [style]=\"{'width':'140px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <div *ngFor=\"let element of item.viewUserList\">{{element.userId }}</div>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"viewUserList\" [style]=\"{'width':'140px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <div *ngFor=\"let element of item.viewUserList\">{{element.userName }}</div>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"viewUserList\" [style]=\"{'width':'140px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <div *ngFor=\"let element of item.viewUserList\" class=\"noWrap\" title=\"{{element.viewFirstTime}}\">\r\n          {{element.viewFirstTime}}\r\n        </div>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"viewUserList\" [style]=\"{'width':'140px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <div *ngFor=\"let element of item.viewUserList\"  class=\"noWrap\" title=\"{{element.viewCurTime}}\">\r\n          {{element.viewCurTime}}\r\n        </div>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"viewUserList\" [style]=\"{'width':'140px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <div *ngFor=\"let element of item.viewUserList\">\r\n          {{element.viewCount }}\r\n        </div>\r\n      </ng-template>\r\n    </p-column> -->\r\n    <p-column header=\"操作\" [style]=\"{'width':'100px'}\">\r\n      <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        <span class=\"tabelDetailIco\" *ngIf=\"item.taskType === 'subproc'\" (click)=\"viewChildApproveList(item)\">流程表单</span>\r\n      </ng-template>\r\n    </p-column>\r\n  </p-dataTable>\r\n  <p-paginator [rows]=\"pager.rows\" [first]=\"pager.first\" [totalRecords]=\"pager.totalRecords\" (onPageChange)=\"paginate($event)\"\r\n    [rowsPerPageOptions]=\"pager.rowsPerPageOptions\" [pageLinkSize]=\"pager.pageLinkSize\"></p-paginator>\r\n</div>\r\n\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n\r\n\r\n<div *ngFor=\"let item of approvalRecorsArray; let i = index\">\r\n  <p-dialog [(visible)]=\"item.show \" header=\"{{item.title}}\" [baseZIndex]=\"i+1\">\r\n    <app-child-approval-record #approvalRecords [isChange]='isChildChange' [taskId]=\"item.taskId\" (outValue)=\"callBackChildApprovalRecord($event)\"></app-child-approval-record>\r\n  </p-dialog>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/approval-records/approval-records.component.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/approval-records/approval-records.component.scss ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n.disable-resize {\n  resize: none; }\n\n:host/deep/ .ui-dialog input, :host/deep/ .ui-dialog textarea {\n  width: 30% !important; }\n\n:host/deep/ .ui-dialog .btn {\n  text-align: center; }\n\n:host/deep/ .ui-dialog .btn button {\n    margin: 30px; }\n\n:host/deep/ .ui-dialog label {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\n:host/deep/ .ui-dialog .ui-paginator .ui-dropdown {\n  width: 40px !important; }\n\n:host/deep/ .ui-dialog input {\n  width: 40px !important; }\n\n.noWrap {\n  width: 100% !important;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9wcm9jZXNzLWluc3RhbmNlL3Byb2Nlc3MtaW5zdGFuY2UtbWFuYWdlbWVudC9hcHByb3ZhbC1yZWNvcmRzL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHdvcmtmbG93XFxhY3Rpdml0aS13b3JrLWZsb3dcXHByb2Nlc3MtaW5zdGFuY2VcXHByb2Nlc3MtaW5zdGFuY2UtbWFuYWdlbWVudFxcYXBwcm92YWwtcmVjb3Jkc1xcYXBwcm92YWwtcmVjb3Jkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVNLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQUE7O0FBSHhCO0VBTU0sbUJBQWtCLEVBQUE7O0FBTnhCO0VBU00scUJBQXFCLEVBQUE7O0FBTTNCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UscUJBQXFCLEVBQUE7O0FBRHZCO0lBR00sc0JBQXNCLEVBQUE7O0FBSDVCO0lBTU0sWUFBWSxFQUFBOztBQUtsQjtFQUNFLFdBQVUsRUFBQTs7QUFHWjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNHLHdCQUF3QjtFQUN4Qix1QkFBdUIsRUFBQTs7QUFHMUI7RUFDRyxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2Q7RUFDRSxZQUNGLEVBQUE7O0FBRUE7RUFFSSxxQkFBcUIsRUFBQTs7QUFGekI7RUFLSSxrQkFBa0IsRUFBQTs7QUFMdEI7SUFPUSxZQUFZLEVBQUE7O0FBUHBCO0VBV0ksVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixxQkFBcUIsRUFBQTs7QUFJekI7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixlQUFlO0VBQ2YsU0FBUyxFQUFBOztBQUxYO0lBUUksV0FBVyxFQUFBOztBQUlmO0VBRUksOEJBQThCLEVBQUE7O0FBSWxDO0VBQ0Usc0JBQXFCLEVBQUE7O0FBR3ZCO0VBQ0Usc0JBQXFCLEVBQUE7O0FBR3ZCO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvd29ya2Zsb3cvYWN0aXZpdGktd29yay1mbG93L3Byb2Nlc3MtaW5zdGFuY2UvcHJvY2Vzcy1pbnN0YW5jZS1tYW5hZ2VtZW50L2FwcHJvdmFsLXJlY29yZHMvYXBwcm92YWwtcmVjb3Jkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubW9kdWxle1xyXG4gIC5yb3dMb2NhdG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOjYwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NDBweDtcclxuICB9XHJcbiAgLmJ0bkxvY2F0aW9ue1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93bntcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jYWxlbmRhcntcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgLnVpLWRhdGVwaWNrZXJ7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG59IFxyXG5cclxuXHJcbnNwYW4udGVse1xyXG4gIGNvbG9yOiNmMDA7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGF7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93e1xyXG4gICB3aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmlnaHRMYXlvdXR7XHJcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgd2lkdGg6IDE2JTtcclxuICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uZGlzYWJsZS1yZXNpemV7XHJcbiAgcmVzaXplOiBub25lXHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cge1xyXG4gIGlucHV0LHRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgIH1cclxuICB9XHJcbiAgbGFiZWx7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktc3Bpbm5lciAudWktc3Bpbm5lci1idXR0b257XHJcbiAgaGVpZ2h0OiA0OSUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICAuZmEtY2FyZXQtZG93biB7XHJcbiAgICB0b3A6IDAuMjVlbTtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zcGlubmVyLWRvd24gLmZhLWNhcmV0LWRvd24ge1xyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwia2V5Ym9hcmRfYXJyb3dfZG93blwiO1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyAudWktcGFnaW5hdG9yIC51aS1kcm9wZG93biB7XHJcbiAgd2lkdGg6NDBweCAhaW1wb3J0YW50O1xyXG4gIFxyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cgaW5wdXR7XHJcbiAgd2lkdGg6NDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm9XcmFwe1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/approval-records/approval-records.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/approval-records/approval-records.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: ApprovalRecordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalRecordsComponent", function() { return ApprovalRecordsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _process_instance_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../process-instance-management.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service.ts");
/* harmony import */ var _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/constant/code.value */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/code.value.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApprovalRecordsComponent = /** @class */ (function () {
    function ApprovalRecordsComponent(messageService, confirmationService, processInstanceManagementService) {
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.processInstanceManagementService = processInstanceManagementService;
        this.msgs = [];
        // 查询到的已审批列表
        this.queryApproveds = [];
        // 类型
        this.businessNodeTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["TASK_NODE_TYPES"];
        // 当前任务处理状态
        this.processState = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["WORK_HANDLE_STATES"];
        // 审批结果
        this.approveResult = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["APPROVE_RESULT"];
        // 分页
        this.pager = new _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["Pager"]();
        // 控制子流程审批列表显隐
        this.childDisplay = false;
        this.isChildChange = false;
        // 子流程嵌套数组
        this.approvalRecorsArray = [
            { show: false, taskId: '', title: '子流程审批信息' }
        ];
        // 紧急程度
        this.taskUrgent = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["ADVANCE_LEVEL"];
        // 查看状态
        this.VIEW_FLAG = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_6__["VIEW_FLAG"];
    }
    ApprovalRecordsComponent.prototype.ngOnChanges = function () {
        this.pager.page = '1';
        this.pager.first = '0';
        this.inValue && this.inValue.processId && this.getApprovedList(this.inValue.processId);
    };
    // 获取审批记录列表
    ApprovalRecordsComponent.prototype.getApprovedList = function (processId) {
        var _this = this;
        if (!processId) {
            return;
        }
        var bodyParams = {
            processId: processId,
            pageRows: parseInt(this.pager.rows, 10),
            curPage: parseInt(this.pager.page, 10)
        };
        this.processInstanceManagementService.queryApprovedList(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.queryApproveds = data.pageData[0].result;
                _this.pager.totalRecords = data.pageData[0].totalRows;
                _this.queryApproveds && _this.queryApproveds.length && _this.queryApproveds.map(function (item) {
                    item.customdoTaskActor = item.workState === '0' ? item.taskActorsName : item.doTaskActorName;
                });
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    // 分页
    ApprovalRecordsComponent.prototype.paginate = function (event) {
        this.pager.first = event.first;
        this.pager.rows = event.rows;
        this.pager.page = event.page + 1;
        this.getApprovedList(this.inValue.processId);
    };
    ApprovalRecordsComponent.prototype.viewChildApproveList = function (item) {
        this.isChildChange = !this.isChildChange;
        this.approvalRecorsArray[0].show = true;
        this.approvalRecorsArray[0].taskId = item.taskId;
    };
    ApprovalRecordsComponent.prototype.callBackChildApprovalRecord = function (event) {
        this.approvalRecorsArray.push({ show: true, taskId: event, title: '子流程审批列表' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ApprovalRecordsComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ApprovalRecordsComponent.prototype, "isChange", void 0);
    ApprovalRecordsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approval-records',
            template: __webpack_require__(/*! ./approval-records.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/approval-records/approval-records.component.html"),
            styles: [__webpack_require__(/*! ./approval-records.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/approval-records/approval-records.component.scss")],
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _process_instance_management_service__WEBPACK_IMPORTED_MODULE_5__["ProcessInstanceManagementService"]])
    ], ApprovalRecordsComponent);
    return ApprovalRecordsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/approval-records/child-approval-record/child-approval-record.component.html":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/approval-records/child-approval-record/child-approval-record.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'子流程信息'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">流程实例ID：</label>\r\n      <input type=\"text\" readonly pInputText [ngModel]=\"subflowInstance[0]?.processId\">\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">流程状态：</label>\r\n      <input type=\"text\" readonly pInputText [ngModel]=\"subflowInstance[0]?.processState  | mapValuePie: processWorkTypes: 'type' : 'descp'\">\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">流程名称：</label>\r\n      <input type=\"text\" readonly pInputText [ngModel]=\"subflowInstance[0]?.processName\">\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">流程编码：</label>\r\n      <input type=\"text\" readonly pInputText [ngModel]=\"subflowInstance[0]?.customProcessCode\">\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">发起人：</label>\r\n      <input type=\"text\" readonly pInputText [ngModel]=\"subflowInstance[0]?.customWorkCreater\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt [value]=\"subApprovalRecords\" emptyMessage=\"暂无数据\" scrollable=\"true\" scrollWidth=\"'100%'\" [style]=\"{'text-align':'center'}\">\r\n      <p-column header=\"序号\" [style]=\"{'width':'50px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processId\" header=\"流程实例ID\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processId\">{{item.processId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"taskId\" header=\"任务ID\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskId\">{{item.taskId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"taskType\" header=\"节点类型\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskType | mapValuePie: businessNodeTypes: 'type' : 'descp'\">\r\n            {{item.taskType | mapValuePie: businessNodeTypes: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"taskName\" header=\"节点名称\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.taskName\">{{item.taskName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <!-- <p-column field=\"workState\" header=\"审批状态\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.workState | mapValuePie: processState: 'type' : 'descp'\">\r\n            {{item.workState | mapValuePie: processState: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <p-column field=\"startDate\" header=\"提交时间\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.startDate | date: 'y-MM-dd HH:mm:ss'\">\r\n            {{item.startDate | date: 'y-MM-dd HH:mm:ss'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customdoTaskActor\" header=\"处理人员\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customdoTaskActor\">{{item.customdoTaskActor}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"updateDate\" header=\"处理时间\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.updateDate | date: 'y-MM-dd HH:mm:ss'\">\r\n            {{item.updateDate | date: 'y-MM-dd HH:mm:ss'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"workState\" header=\"处理状态\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.workState | mapValuePie: processState: 'type' : 'descp'\">\r\n            {{item.workState | mapValuePie: processState: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"doResult\" header=\"处理结果\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.doResult | mapValuePie: approveResult: 'type' : 'descp'\">\r\n            {{item.doResult | mapValuePie: approveResult: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"doRemark\" header=\"处理意见\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.doRemark\">{{item.doRemark}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"操作\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n        \r\n          <span class=\"tableApprove\" *ngIf=\"item.taskType === 'subproc'\" (click)=\"showChildApproveList(item)\">流程表单</span>\r\n         <span class=\"tableApprove\" *ngIf=\"item.taskType === 'approve'&&item.taskName!=='董事长'||item.taskName==='客户经理'\" (click)=\"showChildApproveList(item)\">审批参数</span>\r\n         \r\n\r\n         \r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n    <p-paginator [rows]=\"pager.rows\" [first]=\"pager.first\" [totalRecords]=\"pager.totalRecords\" (onPageChange)=\"paginate($event)\"\r\n      [rowsPerPageOptions]=\"pager.rowsPerPageOptions\" [pageLinkSize]=\"pager.pageLinkSize\"></p-paginator>\r\n  </div>\r\n</div>\r\n\r\n\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n<p-confirmDialog header=\"Confirmation\" acceptLabel=\"确定\" rejectLabel=\"取消\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n\r\n<p-dialog [(visible)]=\"dialog.display\"  header=\"{{dialog.title}}\"  >\r\n  <div class=\"ui-g-12 table\">\r\n    <p-dataTable [value]=\"dialog.tableData\" [scrollable]=\"true\">\r\n      <p-column header=\"客户请求编号\" field=\"custRequestNo\"></p-column>\r\n      <p-column header=\"流程实例id\" field=\"processId\"></p-column>\r\n      <p-column header=\"任务id\" field=\"taskId\"></p-column>\r\n      <p-column header=\"审批人\" field=\"tellerId\"></p-column>\r\n      <p-column header=\"权限模板\" field=\"permissionsNo\"></p-column>\r\n      <p-column header=\"客户号\" field=\"custNo\"></p-column>\r\n      <p-column header=\"申请产品\" field=\"productCode\"></p-column>\r\n      <p-column header=\"申请金额\" field=\"applyAmt\"></p-column>\r\n      <p-column header=\"审批金额\" field=\"finalApprovalAmount\"></p-column>\r\n      <p-column header=\"例外审批层级\" field=\"exceptionalPosition\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{col.exceptionalPosition|codeValuePie:outExceptionalPosition}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"申请利率\" field=\"applyInterestRate\"></p-column>\r\n      <p-column header=\"执行利率\" field=\"executeInterestRate\"></p-column>\r\n      <p-column header=\"积数比例\" field=\"accrualScaleNo\"></p-column>\r\n      <p-column header=\"贷款次数\" field=\"loanNum\"></p-column>\r\n      <p-column header=\"担保方式\" field=\"guaranteeType\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{col.guaranteeType|codeValuePie:guaranteeType}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"批断权\" field=\"authSize\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{col.authSize|codeValuePie:authSize}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"优惠权\" field=\"preferentialSize\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n         \r\n          {{col.preferentialSize|codeValuePie:preferentialSize}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"例外审批权\" field=\"exceptionalSize\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n        \r\n          {{col.exceptionalSize|codeValuePie:exceptionalSize}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"申请日期\" field=\"applyDate\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n         \r\n          {{col.applyDate|date:'yyyy-MM-dd'}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"止贷日期\" field=\"endDate\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{col.endDate|date:'yyyy-MM-dd'}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"审批时间\" field=\"approveDate\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{col.approveDate|date:'yyyy-MM-dd'}}\r\n        </ng-template>\r\n      </p-column>\r\n      <!-- <p-column header=\"当前时间\" field=\"createDate\"></p-column> -->\r\n    </p-dataTable>\r\n    <!-- <p-paginator [first]=\"first\" rows=\"{{approvalParamsQueryBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n      (onPageChange)=\"paginate($event)\"></p-paginator> -->\r\n  </div>\r\n\r\n \r\n  \r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/approval-records/child-approval-record/child-approval-record.component.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/approval-records/child-approval-record/child-approval-record.component.scss ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 58% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 90% !important;\n  height: auto !important;\n  text-align: center; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n:host/deep/ .ui-dialog.ui-dialog-draggable .ui-dialog-content {\n  min-height: 450px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9wcm9jZXNzLWluc3RhbmNlL3Byb2Nlc3MtaW5zdGFuY2UtbWFuYWdlbWVudC9hcHByb3ZhbC1yZWNvcmRzL2NoaWxkLWFwcHJvdmFsLXJlY29yZC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFx3b3JrZmxvd1xcYWN0aXZpdGktd29yay1mbG93XFxwcm9jZXNzLWluc3RhbmNlXFxwcm9jZXNzLWluc3RhbmNlLW1hbmFnZW1lbnRcXGFwcHJvdmFsLXJlY29yZHNcXGNoaWxkLWFwcHJvdmFsLXJlY29yZFxcY2hpbGQtYXBwcm92YWwtcmVjb3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRU0sZ0JBQWU7RUFDZixtQkFBa0IsRUFBQTs7QUFIeEI7RUFNTSxtQkFBa0IsRUFBQTs7QUFOeEI7RUFTTSxxQkFBcUIsRUFBQTs7QUFNM0I7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxxQkFBcUIsRUFBQTs7QUFEdkI7SUFHTSxzQkFBc0IsRUFBQTs7QUFINUI7SUFNTSxZQUFZLEVBQUE7O0FBS2xCO0VBQ0UsV0FBVSxFQUFBOztBQUdaO0VBQ0UscUJBQXFCLEVBQUE7O0FBRXZCO0VBQ0cscUJBQW9CO0VBQ3BCLHVCQUFzQjtFQUN0QixrQkFFSCxFQUFBOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvd29ya2Zsb3cvYWN0aXZpdGktd29yay1mbG93L3Byb2Nlc3MtaW5zdGFuY2UvcHJvY2Vzcy1pbnN0YW5jZS1tYW5hZ2VtZW50L2FwcHJvdmFsLXJlY29yZHMvY2hpbGQtYXBwcm92YWwtcmVjb3JkL2NoaWxkLWFwcHJvdmFsLXJlY29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGV7XHJcbiAgLnJvd0xvY2F0b257XHJcbiAgICAgIG1hcmdpbi10b3A6NjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG4gIH1cclxuICAuYnRuTG9jYXRpb257XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NTBweDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICAgIHdpZHRoOiA1OCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3due1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFye1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICAudWktZGF0ZXBpY2tlcntcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgaW5wdXR7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICB9XHJcbn0gXHJcblxyXG5cclxuc3Bhbi50ZWx7XHJcbiAgY29sb3I6I2YwMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YXtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3d7XHJcbiAgIHdpZHRoOjkwJSAhaW1wb3J0YW50O1xyXG4gICBoZWlnaHQ6YXV0byAhaW1wb3J0YW50O1xyXG4gICB0ZXh0LWFsaWduOmNlbnRlclxyXG4gICBcclxufVxyXG5cclxuLnJpZ2h0TGF5b3V0e1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTYlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLWRpYWxvZy1kcmFnZ2FibGUgLnVpLWRpYWxvZy1jb250ZW50IHtcclxuICBtaW4taGVpZ2h0OiA0NTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/approval-records/child-approval-record/child-approval-record.component.ts":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/approval-records/child-approval-record/child-approval-record.component.ts ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: ChildApprovalRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildApprovalRecordComponent", function() { return ChildApprovalRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _common_constant_code_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/constant/code.value */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/code.value.ts");
/* harmony import */ var _process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../process-instance-management/process-instance-management.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service.ts");
/* harmony import */ var _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
/* harmony import */ var _approval_params_query_approval_params_query_bean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../approval-params-query/approval-params-query.bean */ "./src/app/pages/tzb/workflow/approval-params-query/approval-params-query.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ChildApprovalRecordComponent = /** @class */ (function () {
    function ChildApprovalRecordComponent(messageService, confirmationService, processInstanceManagementService, workflowHttpService, commfunc) {
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.processInstanceManagementService = processInstanceManagementService;
        this.workflowHttpService = workflowHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.approvalParamsQueryBean = new _approval_params_query_approval_params_query_bean__WEBPACK_IMPORTED_MODULE_8__["ApprovalParamsQueryBean"]();
        this.first = 0;
        this.ch = _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.msgs = [];
        // 子流程审批记录列表
        this.subApprovalRecords = [];
        //子流程节点
        this.subflowInstance = [];
        // 分页
        this.pager = new _common_constant_config__WEBPACK_IMPORTED_MODULE_1__["Pager"]();
        // 流程运行状态
        this.processWorkTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_5__["WORK_STATUS_TYPE"];
        // 类型
        this.businessNodeTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_5__["TASK_NODE_TYPES"];
        // 是否超时
        this.isTimeOuts = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_5__["PROCESS_ISTIMEOUT"];
        // 当前任务处理状态
        this.processState = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_5__["WORK_HANDLE_STATES"];
        // 审批结果
        this.approveResult = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_5__["APPROVE_RESULT"];
        // 子流程嵌套数组
        this.approvalRecorsArray = [
            { show: false, processId: '', flag: false, title: '子流程信息' }
        ];
        this.dialog = {
            display: false,
            title: '审批参数',
            workflowHttpService: this.workflowHttpService,
            total: 0,
            tableData: [],
            show: function (taskId) {
                this.display = true;
                this.queryApproveRecords(taskId);
            },
            hide: function () {
                this.display = false;
            },
            //请求数据
            queryApproveRecords: function (taskId) {
                var _this = this;
                this.workflowHttpService.queryApproveRecords({ taskId: taskId }).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.total = data.totalSize;
                        data.list.forEach(function (item) {
                            if (item.authSize > 0) {
                                item.authSize = '1';
                            }
                            if (item.preferentialSize > 0) {
                                item.preferentialSize = '1';
                            }
                            if (item.exceptionalSize > 0) {
                                item.exceptionalSize = '1';
                            }
                        });
                        _this.tableData = data.list || [];
                    }
                });
            }
        };
        this.codeValues();
        this.outExceptionalPosition = this.code['outExceptionalPosition'].slice(1); //例外审批层级
        this.guaranteeType = this.code['guaranteeType1']; //担保方式
        this.authSize = this.code['authSize']; //批断权
        this.preferentialSize = this.code['authSize']; //优惠权
        this.exceptionalSize = this.code['authSize']; //例外审批权
    }
    ChildApprovalRecordComponent.prototype.ngOnChanges = function () {
        this.pager.page = '1';
        this.pager.first = '0';
        this.taskId && this.getChildApprovedList(this.taskId);
    };
    // 获取审批记录列表
    ChildApprovalRecordComponent.prototype.getChildApprovedList = function (mainTaskId) {
        var _this = this;
        var bodyParams = {
            mainTaskId: mainTaskId,
            isAllNode: false,
            pageRows: parseInt(this.pager.rows, 10),
            curPage: parseInt(this.pager.page, 10)
        };
        this.processInstanceManagementService.queryChildTaskList(bodyParams)
            .subscribe(function (data) {
            // console.log(data.pageData.result[0].workList[0].taskId )
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleResult"])(data, _this.messageService, function () {
                _this.subflowInstance = data.pageData[0].result;
                _this.subApprovalRecords = _this.subflowInstance ? _this.subflowInstance[0].workList : [];
                _this.subApprovalRecords && _this.subApprovalRecords.length && _this.subApprovalRecords.map(function (item, i) {
                    // console.log(item)
                    if (i + 1 < _this.subApprovalRecords.length) {
                        _this.showTaskId = _this.subApprovalRecords[i + 1].taskId;
                        // console.log(this.subApprovalRecords[i+1].taskId)
                        console.log(item.taskId);
                    }
                    item.customdoTaskActor = item.workState === '0' ? item.taskActorsName : item.doTaskActorName;
                });
                _this.pager.totalRecords = _this.subflowInstance && _this.subflowInstance[0].workList && Array.isArray(_this.subflowInstance[0].workList) ? "" + _this.subflowInstance[0].workList.length : '';
                _this.subflowInstance && _this.subflowInstance.length && _this.subflowInstance.map(function (item) {
                    item.customProcessCode = item.processCode.split(":")[0];
                    item.customWorkCreater = item.workCreater ? item.workCreaterName ? item.workCreater + " (" + item.workCreaterName + ")" : "" + item.workCreater : '';
                });
            }, true, { errorMsg: '查询失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_4__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    // 分页
    ChildApprovalRecordComponent.prototype.paginate = function (event) {
        this.pager.first = event.first;
        this.pager.rows = event.rows;
        this.pager.page = event.page + 1;
        this.getChildApprovedList(this.taskId);
    };
    ChildApprovalRecordComponent.prototype.showChildApproveList = function (item, i) {
        // console.log(item)
        if (item.taskType === 'task' || item.taskType === 'approve') {
            this.dialog.show(this.showTaskId);
        }
        else if (item.taskType === 'subproc') {
            this.outValue.emit(item.taskId);
            console.log(item);
            console.log(i);
        }
    };
    // 码值
    ChildApprovalRecordComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChildApprovalRecordComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ChildApprovalRecordComponent.prototype, "isChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChildApprovalRecordComponent.prototype, "taskId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ChildApprovalRecordComponent.prototype, "outValue", void 0);
    ChildApprovalRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-child-approval-record',
            template: __webpack_require__(/*! ./child-approval-record.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/approval-records/child-approval-record/child-approval-record.component.html"),
            styles: [__webpack_require__(/*! ./child-approval-record.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/approval-records/child-approval-record/child-approval-record.component.scss")]
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_6__["ProcessInstanceManagementService"],
            _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_7__["WorkflowHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__["Commfunc"]])
    ], ChildApprovalRecordComponent);
    return ChildApprovalRecordComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/hang-task/hang-task.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/hang-task/hang-task.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\">\r\n    <label>流程实例ID:</label>\r\n    <input type=\"text\" pInputText [ngModel]=\"inValue?.processId\" readonly>\r\n  </div>\r\n  <div class=\"ui-g-12\" *ngIf=\"taskType === taskControlType[2].type\">\r\n    <label>流程终止类型:</label>\r\n    <p-dropdown [options]=\"processEndTypes\" [(ngModel)]=\"selectedProcessEndType\" optionLabel=\"descp\" placeholder=\"请选择类型\" [autoWidth]=\"false\"></p-dropdown>\r\n  </div>\r\n  <div class=\"ui-g-12\" *ngIf=\"taskType === taskControlType[1].type || taskType === taskControlType[2].type\">\r\n    <label *ngIf=\"taskType === taskControlType[1].type\">挂起原因:</label>\r\n    <label *ngIf=\"taskType === taskControlType[2].type\">终止原因:</label>\r\n    <textarea pInputTextarea [(ngModel)]=\"hangTaskInstance.doResion\"></textarea>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\" *ngIf=\"taskType === taskControlType[7].type\">\r\n    <label>超时截止时间:</label>\r\n    <p-calendar [(ngModel)]=\"outTimeEnd\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n      [showIcon]=\"true\" showButtonBar=\"true\"></p-calendar>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" (click)=\"saveTaskManage()\" label=\"保存\"></button>\r\n    <button pButton type=\"button\" (click)=\"resetTaskManage()\" label=\"重置\"></button>\r\n  </div>\r\n</div>\r\n\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/hang-task/hang-task.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/hang-task/hang-task.component.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "isred {\n  background-color: red; }\n\n:host/deep/ .ui-contextmenu {\n  background: #fff; }\n\n:host/deep/ .ui-spinner {\n  width: 30% !important; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n.module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\ninput, textarea {\n  width: 30% !important; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\nlabel {\n  width: 35%;\n  text-align: right;\n  display: inline-block; }\n\n:host/deep/ .ui-dialog .ui-dropdown {\n  width: 30% !important; }\n\n.btn-add {\n  float: right; }\n\n.icoColor2 {\n  display: inline-block;\n  width: 75px;\n  height: 24px;\n  text-align: center;\n  line-height: 24px;\n  white-space: nowrap;\n  color: #fff;\n  background-color: #19b0c8;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  border-radius: 3px;\n  font-size: 14px; }\n\n.icoColor2:hover {\n  background-color: #058da1; }\n\n:host/deep/ .ui-spinner .ui-spinner-button {\n  height: 49% !important;\n  border: 1px solid #ccc;\n  min-width: 30px;\n  font-size: 14px;\n  margin: 0; }\n\n:host/deep/ .ui-spinner .ui-spinner-button .fa-caret-down {\n    top: 0.25em; }\n\n:host/deep/ .ui-spinner-down .fa-caret-down:before {\n  content: \"keyboard_arrow_down\"; }\n\ninput:-moz-read-only, textarea:-moz-read-only {\n  background-color: #ebebe4;\n  opacity: 0.6;\n  filter: Alpha(Opacity=35);\n  /* background-image: none; */\n  cursor: auto !important; }\n\ninput:read-only, textarea:read-only {\n  background-color: #ebebe4;\n  opacity: 0.6;\n  filter: Alpha(Opacity=35);\n  /* background-image: none; */\n  cursor: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9wcm9jZXNzLWluc3RhbmNlL3Byb2Nlc3MtaW5zdGFuY2UtbWFuYWdlbWVudC9oYW5nLXRhc2svRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6Ylxcd29ya2Zsb3dcXGFjdGl2aXRpLXdvcmstZmxvd1xccHJvY2Vzcy1pbnN0YW5jZVxccHJvY2Vzcy1pbnN0YW5jZS1tYW5hZ2VtZW50XFxoYW5nLXRhc2tcXGhhbmctdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHFCQUFxQixFQUFBOztBQUl2QjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNHLHdCQUF3QjtFQUN4Qix1QkFBdUIsRUFBQTs7QUFHMUI7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBRWI7RUFFTSxnQkFBZTtFQUNmLG1CQUFrQixFQUFBOztBQUh4QjtFQU1NLG1CQUFrQixFQUFBOztBQU54QjtFQVNNLHFCQUFxQixFQUFBOztBQU0zQjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLGtCQUFrQixFQUFBOztBQURwQjtJQUdNLFlBQVksRUFBQTs7QUFHbEI7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHFCQUFxQixFQUFBOztBQUl2QjtFQUNFLHFCQUFxQixFQUFBOztBQUl2QjtFQUNFLFlBQVksRUFBQTs7QUFJZDtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixlQUFlO0VBQ2YsU0FBUyxFQUFBOztBQUxYO0lBUUksV0FBVyxFQUFBOztBQUlmO0VBRUksOEJBQThCLEVBQUE7O0FBSWxDO0VBQ0UseUJBQW9DO0VBQ3BDLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsNEJBQUE7RUFDQSx1QkFBdUIsRUFBQTs7QUFMekI7RUFDRSx5QkFBb0M7RUFDcEMsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qiw0QkFBQTtFQUNBLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9wcm9jZXNzLWluc3RhbmNlL3Byb2Nlc3MtaW5zdGFuY2UtbWFuYWdlbWVudC9oYW5nLXRhc2svaGFuZy10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaXNyZWR7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICB9XHJcbjpob3N0L2RlZXAvIC51aS1jb250ZXh0bWVudSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXNwaW5uZXJ7XHJcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YXtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3d7XHJcbiAgIHdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcclxuICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yaWdodExheW91dHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDE2JTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4ubW9kdWxle1xyXG4gIC5yb3dMb2NhdG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOjYwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206NDBweDtcclxuICB9XHJcbiAgLmJ0bkxvY2F0aW9ue1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgfVxyXG4gIGlucHV0e1xyXG4gICAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmlucHV0LHRleHRhcmVhe1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG4uYnRue1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBidXR0b257XHJcbiAgICAgIG1hcmdpbjogMzBweDtcclxuICB9XHJcbn1cclxubGFiZWx7XHJcbiAgd2lkdGg6IDM1JTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcblxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nIC51aS1kcm9wZG93bntcclxuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uYnRuLWFkZCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIC8vIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uaWNvQ29sb3IyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmljb0NvbG9yMjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1OGRhMTtcclxufVxyXG46aG9zdC9kZWVwLyAudWktc3Bpbm5lciAudWktc3Bpbm5lci1idXR0b257XHJcbiAgaGVpZ2h0OiA0OSUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICAuZmEtY2FyZXQtZG93biB7XHJcbiAgICB0b3A6IDAuMjVlbTtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1zcGlubmVyLWRvd24gLmZhLWNhcmV0LWRvd24ge1xyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwia2V5Ym9hcmRfYXJyb3dfZG93blwiO1xyXG4gIH1cclxufVxyXG5cclxuaW5wdXQ6cmVhZC1vbmx5LCB0ZXh0YXJlYTpyZWFkLW9ubHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjI4KTtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgZmlsdGVyOiBBbHBoYShPcGFjaXR5PTM1KTtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAqL1xyXG4gIGN1cnNvcjogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/hang-task/hang-task.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/hang-task/hang-task.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: HangTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HangTaskComponent", function() { return HangTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _process_instance_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../process-instance-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-model.ts");
/* harmony import */ var _process_instance_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../process-instance-management.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service.ts");
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_constant_code_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/constant/code.value */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/code.value.ts");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../process-definition/process-definition-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-definition/process-definition-model.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HangTaskComponent = /** @class */ (function () {
    function HangTaskComponent(messageService, ProcessInstanceManagementService, commfunc) {
        this.messageService = messageService;
        this.ProcessInstanceManagementService = ProcessInstanceManagementService;
        this.commfunc = commfunc;
        this.msgs = [];
        this.outValueEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // 任务挂起实例
        this.hangTaskInstance = new _process_instance_model__WEBPACK_IMPORTED_MODULE_1__["HangTaskModel"]();
        // 控制管理类型
        this.taskControlType = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_5__["MANAGE_TASKS_TYPES"];
        // 日期格式
        this.CALENDAR_CN = _common_constant_config__WEBPACK_IMPORTED_MODULE_6__["CALENDAR_CN"];
        // 任务终止类型集合
        this.processEndTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_5__["TASK_TERMINATED_TYPES"];
        // 选中任务截止类型
        this.selectedProcessEndType = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_7__["DictionaryTypeModel"]();
    }
    HangTaskComponent.prototype.ngOnInit = function () {
        this.loginSys = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
    };
    HangTaskComponent.prototype.ngOnChanges = function () {
        this.isRest && this.resetTaskManage();
    };
    // 保存任务管理
    HangTaskComponent.prototype.saveTaskManage = function () {
        var bodyParams = {};
        if (this.taskType === this.taskControlType[1].type) {
            // 挂起
            bodyParams = {
                userId: this.loginSys,
                processId: this.inValue.processId,
                tranType: this.taskType,
                doResion: this.hangTaskInstance.doResion
            };
        }
        else if (this.taskType === this.taskControlType[2].type) {
            // 终止
            bodyParams = {
                userId: this.loginSys,
                processId: this.inValue.processId,
                tranType: this.taskType,
                doResion: this.hangTaskInstance.doResion,
                cancelType: this.selectedProcessEndType.type || this.processEndTypes[0].type
            };
        }
        else if (this.taskType === this.taskControlType[7].type) {
            var outTime = this.outTimeEnd == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(this.outTimeEnd, _common_constant_config__WEBPACK_IMPORTED_MODULE_6__["FULL_HORIZONTAL_DATE_FORMAT"]);
            // 超时延长
            bodyParams = {
                userId: this.loginSys,
                processId: this.inValue.processId,
                tranType: this.taskType,
                outTime: outTime
            };
        }
        this.commomSaveTaskManage(bodyParams);
    };
    // 保存的通用处理函数
    HangTaskComponent.prototype.commomSaveTaskManage = function (bodyParams) {
        var _this = this;
        this.ProcessInstanceManagementService.taskManage(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_3__["handleResult"])(data, _this.messageService, function () {
                _this.outValueEventEmitter.emit(event);
            }, true, { message: '保存成功！', errorMsg: '保存失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_3__["handleError"])(err, _this.messageService, function () {
                _this.outValueEventEmitter.emit(event);
            });
        });
    };
    // 重置任务配置
    HangTaskComponent.prototype.resetTaskManage = function () {
        this.hangTaskInstance.doResion = null;
        this.selectedProcessEndType = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_7__["DictionaryTypeModel"]();
        this.outTimeEnd = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HangTaskComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HangTaskComponent.prototype, "taskType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], HangTaskComponent.prototype, "isRest", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HangTaskComponent.prototype, "outValueEventEmitter", void 0);
    HangTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hang-task',
            template: __webpack_require__(/*! ./hang-task.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/hang-task/hang-task.component.html"),
            styles: [__webpack_require__(/*! ./hang-task.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/hang-task/hang-task.component.scss")]
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _process_instance_management_service__WEBPACK_IMPORTED_MODULE_2__["ProcessInstanceManagementService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_8__["Commfunc"]])
    ], HangTaskComponent);
    return HangTaskComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'流程实例查询'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">流程实例ID：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryApprovalInstance.processId\">\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">流程编码：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryApprovalInstance.processCode\">\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">流程名称：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryApprovalInstance.proccessName\">\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">流程发起人：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryApprovalInstance.startUserId\">\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">流程状态：</label>\r\n      <p-dropdown [options]=\"processEndTypes\" [(ngModel)]=\"selectedEndType\" optionLabel=\"descp\" placeholder=\"请选择\" [autoWidth]=\"false\"></p-dropdown>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">是否超时：</label>\r\n      <p-dropdown [options]=\"isTimeOuts\" [(ngModel)]=\"querySelectedIsTimeOut\" optionLabel=\"descp\" placeholder=\"请选择\" [autoWidth]=\"false\"></p-dropdown>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">流程发起起始时间：</label>\r\n      <p-calendar [(ngModel)]=\"queryStartTime\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n        [showIcon]=\"true\" showButtonBar=\"true\" placeholder=\"流程实例的创建时间>=此时间\"></p-calendar>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"rightLayout\">流程发起截止时间：</label>\r\n      <p-calendar [(ngModel)]=\"queryEndTime\" [locale]=\"CALENDAR_CN\" dateFormat=\"yy-mm-dd\" [showTime]=\"true\" [showSeconds]=\"true\"\r\n        [showIcon]=\"true\" showButtonBar=\"true\" placeholder=\"流程实例的创建时间<=此时间\"></p-calendar>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n      <label class=\"inputLayout\">发起人机构：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"queryApprovalInstance.orgObj\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n    <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst(dt)\"></button>\r\n    <button pButton type=\"button\" label=\"重置\" (click)=\"reset(dt)\"></button>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 base-table\">\r\n    <p-dataTable #dt [value]=\"approvalInstances\" emptyMessage=\"暂无数据\" selectionMode=\"single\" [(selection)]=\"selectedProcessInstance\"\r\n      [lazy]=\"true\" (onLazyLoad)=\"query(dt)\" [rows]=\"paginatorInstance.rowNum\" [(totalRecords)]=\"total\" [paginator]=\"true\"\r\n      [pageLinks]=\"3\" [rowsPerPageOptions]=\"[10,20,30]\" scrollable=\"true\" scrollWidth=\"'100%'\" [style]=\"{'text-align':'center'}\">\r\n      <p-column header=\"序号\" [style]=\"{'width':'70px'}\">\r\n        <ng-template let-index=\"rowIndex\" pTemplate=\"body\">\r\n          <span>{{index+1}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customOrgObj\" header=\"机构名称\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customOrgObj\"> {{item.customOrgObj}} </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"processId\" header=\"实例ID\" [style]=\"{'width':'100px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processId\">{{item.processId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"customSystemCode\" header=\"流程编码\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customSystemCode\">{{item.customSystemCode}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"proccessName\" header=\"流程名称\" [style]=\"{'width':'140px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.proccessName\">{{item.proccessName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column header=\"发起人\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.customStartUserId\">{{item.customStartUserId}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"发起时间\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.startTime \">\r\n            {{item.startTime }}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"最后处理时间\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.updateTime \">\r\n            {{item.updateTime }}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"截止时间\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.endTime\">\r\n            {{item.endTime }}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n\r\n      <p-column field=\"estEndDate\" header=\"超时时间\" [style]=\"{'width':'120px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.estEndDate\">\r\n            {{item.estEndDate}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <!-- <p-column field=\"joinUserIds\" header=\"流程审批人员列表\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.joinUserIds\">{{item.joinUserIds}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <p-column field=\"endType\" header=\"流程状态\" [style]=\"{'width':'100px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.endType | mapValuePie: isAllProcessStatus: 'type' : 'descp'\">\r\n            {{item.endType | mapValuePie: isAllProcessStatus: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"isTimeout\" header=\"是否超时\" [style]=\"{'width':'100px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.isTimeout | mapValuePie: isTimeOuts: 'type' : 'descp'\">\r\n            {{item.isTimeout | mapValuePie: isTimeOuts: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <!-- <p-column field=\"endType\" header=\"流程结束类型\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.endType | mapValuePie: processEndTypes: 'type' : 'descp'\">\r\n            {{item.endType | mapValuePie: processEndTypes: 'type' : 'descp'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <!-- <p-column field=\"processDesc\" header=\"流程实例简述\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span [title]=\"item.processDesc\">{{item.processDesc}}</span>\r\n        </ng-template>\r\n      </p-column> -->\r\n      <p-column header=\"操作\" [style]=\"{'width': '240px'}\">\r\n        <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n          <span class=\"tableListIcon operateBtn\" (click)=\"getApprovedList(item)\" title=\"流程表单\"></span>\r\n          <span class=\"tabelImgIcon operateBtn\" (click)=\"viewProcessSchedule(item)\" title=\"流程图\"></span>\r\n          <span class=\"tabelHangIcon operateBtn\" (click)=\"taskModalShow(1)\" *ngIf=\"permissionCheck('SID01065_21_P001')\" title=\"流程挂起\"></span>\r\n          <span class=\"tabelHangRevIcon operateBtn\" (click)=\"recoveryHangTask()\" *ngIf=\"permissionCheck('SID01065_21_P002')\" title=\"流程挂起恢复\"></span>\r\n          <span class=\"tabelEndIcon operateBtn\" (click)=\"taskModalShow(2)\" *ngIf=\"permissionCheck('SID01065_21_P003')\" title=\"流程终止\"></span>\r\n          <span class=\"tabelTimeoutIcon operateBtn\" (click)=\"taskModalShow(7)\" *ngIf=\"permissionCheck('SID01065_21_P004')\" title=\"流程超时延长\"></span>\r\n          <span class=\"tabelForceEndIcon operateBtn\" (click)=\"taskModalShow(8)\" *ngIf=\"permissionCheck('SID01065_21_P005')\" title=\"流程强制终止\"></span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n\r\n<!-- <p-contextMenu #cm [model]=\"items\"></p-contextMenu> -->\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n<p-confirmDialog header=\"Confirmation\" acceptLabel=\"确定\" rejectLabel=\"取消\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n\r\n<p-dialog class=\"my-dialog\" [(visible)]=\"approvalDisplay\" modal=\"modal\" header=\"流程审批记录\">\r\n  <app-approval-records #approvalRecords [inValue]=\"selectedProcessInstance\" [isChange]='isChange'></app-approval-records>\r\n</p-dialog>\r\n\r\n\r\n<p-dialog class=\"my-dialog\" [(visible)]=\"dialogParam.display && dialogParam.isHangTask\" modal=\"modal\" header=\"{{dialogParam.headerTitle}}\">\r\n  <app-hang-task [inValue]=\"selectedProcessInstance\" [taskType]=\"taskType\" [isRest]=\"isRest\" (outValueEventEmitter)=\"callBack($event)\"></app-hang-task>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.component.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.component.scss ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .rowLocaton {\n  margin-top: 60px;\n  margin-bottom: 40px; }\n\n.module .btnLocation {\n  margin-bottom: 50px; }\n\n.module input {\n  width: 30% !important; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar .ui-datepicker {\n    width: 100% !important; }\n\n:host/deep/ .ui-calendar input {\n    height: 25px; }\n\nspan.tel {\n  color: #f00; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n.rightLayout {\n  display: inline-block;\n  width: 16%;\n  text-align: right;\n  color: #000; }\n\n:host/deep/ .fa-editor:before {\n  color: #757575; }\n\n:host/deep/ .ui-contextmenu {\n  background: #fff; }\n\n:host/deep/ .ui-contextmenu .ui-menuitem-text {\n    color: #000; }\n\n:host/deep/ .ui-dialog.ui-dialog-draggable .ui-dialog-content {\n  min-height: 500px; }\n\n.operateBtn {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-right: 5px;\n  background-size: cover; }\n\n.tableListIcon {\n  background-image: url('shenpi.png'); }\n\n.tabelImgIcon {\n  background-image: url('table-look.png'); }\n\n.tabelHangIcon {\n  background-image: url('table_adjust.png'); }\n\n.tabelHangRevIcon {\n  background-image: url('table_repeal.png'); }\n\n.tabelEndIcon {\n  background-image: url('dealwith.png'); }\n\n.tabelTimeoutIcon {\n  background-image: url('table-update.png'); }\n\n.tabelForceEndIcon {\n  background-image: url('table-submit.png'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9wcm9jZXNzLWluc3RhbmNlL3Byb2Nlc3MtaW5zdGFuY2UtbWFuYWdlbWVudC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFx3b3JrZmxvd1xcYWN0aXZpdGktd29yay1mbG93XFxwcm9jZXNzLWluc3RhbmNlXFxwcm9jZXNzLWluc3RhbmNlLW1hbmFnZW1lbnRcXHByb2Nlc3MtaW5zdGFuY2UtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGdCQUFlO0VBQ2YsbUJBQWtCLEVBQUE7O0FBSDFCO0VBTVEsbUJBQWtCLEVBQUE7O0FBTjFCO0VBU1EscUJBQXFCLEVBQUE7O0FBTTdCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0kscUJBQXFCLEVBQUE7O0FBRHpCO0lBR1Esc0JBQXNCLEVBQUE7O0FBSDlCO0lBTVEsWUFBWSxFQUFBOztBQUtwQjtFQUNJLFdBQVUsRUFBQTs7QUFHZDtFQUNJLHFCQUFxQixFQUFBOztBQUV4QjtFQUNJLHdCQUF3QjtFQUN4Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDRyxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2Y7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRGxCO0lBR0ksV0FBVyxFQUFBOztBQUtmO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLG1DQUEyRSxFQUFBOztBQUU3RTtFQUNFLHVDQUErRSxFQUFBOztBQUVqRjtFQUNFLHlDQUFpRixFQUFBOztBQUVuRjtFQUNFLHlDQUFpRixFQUFBOztBQUVuRjtFQUNFLHFDQUE2RSxFQUFBOztBQUUvRTtFQUNFLHlDQUFpRixFQUFBOztBQUVuRjtFQUNFLHlDQUFpRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FjdGl2aXRpLXdvcmstZmxvdy9wcm9jZXNzLWluc3RhbmNlL3Byb2Nlc3MtaW5zdGFuY2UtbWFuYWdlbWVudC9wcm9jZXNzLWluc3RhbmNlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kdWxle1xyXG4gICAgLnJvd0xvY2F0b257XHJcbiAgICAgICAgbWFyZ2luLXRvcDo2MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206NDBweDtcclxuICAgIH1cclxuICAgIC5idG5Mb2NhdGlvbntcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgICB9XHJcbiAgICBpbnB1dHtcclxuICAgICAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3due1xyXG4gICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktY2FsZW5kYXJ7XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICAudWktZGF0ZXBpY2tlcntcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG59IFxyXG5cclxuXHJcbnNwYW4udGVse1xyXG4gICAgY29sb3I6I2YwMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YXtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuIH1cclxuIDpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93e1xyXG4gICAgIHdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcclxuICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiAucmlnaHRMYXlvdXR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTYlO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmZhLWVkaXRvcjpiZWZvcmV7XHJcbiAgY29sb3I6ICM3NTc1NzU7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWNvbnRleHRtZW51IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIC51aS1tZW51aXRlbS10ZXh0e1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1kaWFsb2ctZHJhZ2dhYmxlIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5vcGVyYXRlQnRue1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnRhYmxlTGlzdEljb257XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9sYXlvdXQvaW1hZ2VzL3NoZW5waS5wbmcpO1xyXG59XHJcbi50YWJlbEltZ0ljb257XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9sYXlvdXQvaW1hZ2VzL3RhYmxlLWxvb2sucG5nKTtcclxufVxyXG4udGFiZWxIYW5nSWNvbntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2xheW91dC9pbWFnZXMvdGFibGVfYWRqdXN0LnBuZyk7XHJcbn1cclxuLnRhYmVsSGFuZ1Jldkljb257XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9sYXlvdXQvaW1hZ2VzL3RhYmxlX3JlcGVhbC5wbmcpO1xyXG59XHJcbi50YWJlbEVuZEljb257XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9sYXlvdXQvaW1hZ2VzL2RlYWx3aXRoLnBuZyk7XHJcbn1cclxuLnRhYmVsVGltZW91dEljb257XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9sYXlvdXQvaW1hZ2VzL3RhYmxlLXVwZGF0ZS5wbmcpO1xyXG59XHJcbi50YWJlbEZvcmNlRW5kSWNvbntcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2xheW91dC9pbWFnZXMvdGFibGUtc3VibWl0LnBuZyk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.component.ts":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: ProcessInstanceManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessInstanceManagementComponent", function() { return ProcessInstanceManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _process_instance_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../process-instance-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-model.ts");
/* harmony import */ var _common_func_common_func__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/func/common-func */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/func/common-func.ts");
/* harmony import */ var _process_instance_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./process-instance-management.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service.ts");
/* harmony import */ var _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../process-definition/process-definition-model */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-definition/process-definition-model.ts");
/* harmony import */ var _common_constant_code_value__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/constant/code.value */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/code.value.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProcessInstanceManagementComponent = /** @class */ (function () {
    function ProcessInstanceManagementComponent(commfunc, messageService, processInstanceManagementService) {
        this.commfunc = commfunc;
        this.messageService = messageService;
        this.processInstanceManagementService = processInstanceManagementService;
        this.msgs = [];
        this.CALENDAR_CN = _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["CALENDAR_CN"];
        // 流程实例列表
        this.approvalInstances = [];
        // 查询条件实例
        this.queryApprovalInstance = new _process_instance_model__WEBPACK_IMPORTED_MODULE_4__["ProcessInstanceModel"]();
        // 分页实例
        this.paginatorInstance = new _process_instance_model__WEBPACK_IMPORTED_MODULE_4__["ProcessInstanceModel"]();
        // 表格中选中的单行流程实例
        this.selectedProcessInstance = new _process_instance_model__WEBPACK_IMPORTED_MODULE_4__["ProcessInstanceModel"]();
        // // 控制流程版本信息显示
        // processVerInfoDisplay = false;
        // 查询到的已审批列表
        this.queryApproveds = [];
        // 登录名
        this.loginSys = '';
        // 流程是否结束
        this.processEndFlags = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_8__["IS_PROCESS_END"];
        // 查询中选中的流程是否结束标志
        this.selectedEndFlag = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_7__["DictionaryTypeModel"]();
        // 全部的流程状态
        this.isAllProcessStatus = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_8__["TASK_END_TYPES"];
        // 流程状态
        this.processEndTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_8__["FLOW_STATUS_TYPES"];
        // 查询中选中的流程状态
        this.selectedEndType = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_7__["DictionaryTypeModel"]();
        // 类型
        this.businessNodeTypes = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_8__["TASK_NODE_TYPES"];
        // 是否超时
        this.isTimeOuts = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_8__["PROCESS_ISTIMEOUT"];
        // 查询条件中选中的是否超时
        this.querySelectedIsTimeOut = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_7__["DictionaryTypeModel"]();
        // 当前任务处理状态
        this.processState = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_8__["WORK_HANDLE_STATES"];
        this.dialogParam = {
            display: false,
            showModel: '',
            isApprovalRecords: false,
            isHangTask: false,
            headerTitle: ''
        };
        // 右功能键
        // items: MenuItem[];
        // 控制管理类型
        this.manageType = _common_constant_code_value__WEBPACK_IMPORTED_MODULE_8__["MANAGE_TASKS_TYPES"];
        // 传递给子组件让子组件内容置空
        this.isRest = 0;
        this.isChange = false;
        // 控制流程审批记录模态框显隐
        this.approvalDisplay = false;
    }
    ProcessInstanceManagementComponent.prototype.ngOnInit = function () {
        this.loginSys = sessionStorage.getItem('sys');
        this.paginatorInstance.rowNum = _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["paginatorUtils"].rowNum;
        this.paginatorInstance.startRow = _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["paginatorUtils"].startRow;
        // this.items = [
        //   {
        //     label: '流程挂起', command: (event) => {
        //       this.taskModalShow(1);
        //     }
        //   },
        //   {
        //     label: '流程挂起恢复', command: (event) => {
        //       this.recoveryHangTask();
        //     }
        //   },
        //   {
        //     label: '流程终止', command: (event) => {
        //       this.taskModalShow(2);
        //     }
        //   },
        //   {
        //     label: '流程超时延长', command: (event) => {
        //       this.taskModalShow(7);
        //     }
        //   },
        //   {
        //     label: '流程强制终止', command: (event) => {
        //       this.taskModalShow(8);
        //     }
        //   }
        // ];
    };
    // 按照搜索条件查询
    ProcessInstanceManagementComponent.prototype.queryFirst = function (table) {
        table.first = 0;
        this.query(table);
    };
    ProcessInstanceManagementComponent.prototype.query = function (table) {
        table.first = table.first || 0;
        table.rows = table.rows || parseInt(_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["paginatorUtils"].rowNum, 10);
        // 每页显示的条数
        this.paginatorInstance.rowNum = table.rows + '';
        // 当前页
        this.paginatorInstance.startRow = (table.first / table.rows) + 1 + '';
        this.getProcessInstanceList(this.queryApprovalInstance.processId, this.queryApprovalInstance.processCode, this.queryApprovalInstance.proccessName, this.queryApprovalInstance.startUserId, this.selectedEndType.type, this.querySelectedIsTimeOut.type, this.queryStartTime, this.queryEndTime, this.queryApprovalInstance.orgObj);
    };
    // 获取未审批流程实例列表
    ProcessInstanceManagementComponent.prototype.getProcessInstanceList = function (processId, processCode, proccessName, startUser, endType, isTimeout, createTimeBegin, createTimeEnd, orgObj) {
        var _this = this;
        var endTypes = !endType ? ['0', '1'] : ["" + endType];
        var startTimeBegin = createTimeBegin == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(createTimeBegin, _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var startTimeEnd = createTimeEnd == null ? null : Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(createTimeEnd, _common_constant_config__WEBPACK_IMPORTED_MODULE_2__["FULL_HORIZONTAL_DATE_FORMAT"]);
        var bodyParams = {
            processId: processId,
            processCode: processCode,
            proccessName: proccessName,
            startUser: startUser,
            // userId: this.loginSys,
            endTypes: endTypes,
            endType: endType,
            isTimeout: isTimeout,
            workState: '0',
            startTimeBegin: startTimeBegin,
            startTimeEnd: startTimeEnd,
            orgObj: orgObj,
            pageRows: parseInt(this.paginatorInstance.rowNum, 10),
            curPage: parseInt(this.paginatorInstance.startRow, 10)
        };
        this.processInstanceManagementService.searchProcessInstanceList(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_5__["handleResult"])(data, _this.messageService, function () {
                _this.approvalInstances = data.pageData[0].result;
                _this.total = data.pageData[0].totalRows;
                _this.approvalInstances && _this.approvalInstances.length && _this.approvalInstances.map(function (item) {
                    item.customSystemCode = item.processCode.split(":")[0];
                    item.customStartUserId = item.startUserId ? item.startUserIdName ? item.startUserId + " (" + item.startUserIdName + ")" : "" + item.startUserId : '';
                    item.customOrgObj = item.orgId ? item.orgName ? item.orgId + " (" + item.orgName + ")" : "" + item.orgId : '';
                });
            });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_5__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    ProcessInstanceManagementComponent.prototype.getApprovedList = function (item) {
        this.selectedProcessInstance = item;
        // 调用子组件onChange事件
        this.isChange = !this.isChange;
        this.approvalDisplay = true;
    };
    // 查询重置
    ProcessInstanceManagementComponent.prototype.reset = function (dt) {
        this.queryApprovalInstance.processId = null;
        this.queryApprovalInstance.processCode = null;
        this.queryApprovalInstance.proccessName = null;
        this.queryApprovalInstance.startUserId = null;
        this.queryApprovalInstance.orgObj = null;
        this.selectedEndType = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_7__["DictionaryTypeModel"]();
        this.querySelectedIsTimeOut = new _process_definition_process_definition_model__WEBPACK_IMPORTED_MODULE_7__["DictionaryTypeModel"]();
        this.queryStartTime = null;
        this.queryEndTime = null;
        this.queryFirst(dt);
    };
    // 查看流程进度
    ProcessInstanceManagementComponent.prototype.viewProcessSchedule = function (item) {
        var processCodeParam = encodeURIComponent(item.processCode);
        var params = "/" + item.processCode + "/" + item.processId + "/" + item.workState + "/userId001/sysCode001/tokenCode001";
        this.processInstanceManagementService.toActivitiSchedule(params);
    };
    // 任务模态框显示
    ProcessInstanceManagementComponent.prototype.taskModalShow = function (index) {
        if (this.selectedProcessInstance && (this.selectedProcessInstance.endType === '1')) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_5__["showMessage"])(this.messageService, 'error', '此流程已经挂起,要进行其他操作前请先挂起恢复！');
            return;
        }
        this.isRest++;
        this.dialogParam.isApprovalRecords = false;
        this.dialogParam.isHangTask = true;
        this.dialogParam.headerTitle = this.manageType[index].descp;
        this.taskType = this.manageType[index].type;
        this.dialogParam.display = true;
    };
    // 任务管理保存后关闭模态框
    ProcessInstanceManagementComponent.prototype.callBack = function (event) {
        this.dialogParam.display = !event;
        this.getProcessInstanceList(this.queryApprovalInstance.processId, this.queryApprovalInstance.processCode, this.queryApprovalInstance.proccessName, this.queryApprovalInstance.startUserId, this.selectedEndType.type, this.querySelectedIsTimeOut.type, this.queryStartTime, this.queryEndTime);
    };
    // 挂起任务恢复
    ProcessInstanceManagementComponent.prototype.recoveryHangTask = function () {
        var _this = this;
        if (this.selectedProcessInstance && (this.selectedProcessInstance.endType !== '1')) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_5__["showMessage"])(this.messageService, 'error', '挂起状态才有此功能');
            return;
        }
        var bodyParams = {
            userId: this.loginSys,
            processId: this.selectedProcessInstance.processId,
            // taskId: this.selectedToDoTask.taskId,
            tranType: 'M4'
        };
        this.processInstanceManagementService.taskManage(bodyParams)
            .subscribe(function (data) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_5__["handleResult"])(data, _this.messageService, function () {
                _this.getProcessInstanceList(_this.queryApprovalInstance.processId, _this.queryApprovalInstance.processCode, _this.queryApprovalInstance.proccessName, _this.queryApprovalInstance.startUserId, _this.selectedEndType.type, _this.querySelectedIsTimeOut.type, _this.queryStartTime, _this.queryEndTime);
            }, true, { message: '恢复成功！', errorMsg: '恢复失败' });
        }, function (err) {
            Object(_common_func_common_func__WEBPACK_IMPORTED_MODULE_5__["handleError"])(err, _this.messageService, function () {
            });
        });
    };
    //按钮权限
    ProcessInstanceManagementComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    ProcessInstanceManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-process-instance-management',
            template: __webpack_require__(/*! ./process-instance-management.component.html */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.component.html"),
            styles: [__webpack_require__(/*! ./process-instance-management.component.scss */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.component.scss")]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _process_instance_management_service__WEBPACK_IMPORTED_MODULE_6__["ProcessInstanceManagementService"]])
    ], ProcessInstanceManagementComponent);
    return ProcessInstanceManagementComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ProcessInstanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessInstanceComponent", function() { return ProcessInstanceComponent; });
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

var ProcessInstanceComponent = /** @class */ (function () {
    function ProcessInstanceComponent() {
    }
    ProcessInstanceComponent.prototype.ngOnInit = function () { };
    ProcessInstanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-process-instance',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], ProcessInstanceComponent);
    return ProcessInstanceComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: ProcessInstanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessInstanceModule", function() { return ProcessInstanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _process_instance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process-instance.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance.component.ts");
/* harmony import */ var _process_instance_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./process-instance.routing */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance.routing.ts");
/* harmony import */ var _process_instance_management_process_instance_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./process-instance-management/process-instance-management.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.component.ts");
/* harmony import */ var _process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./process-instance-management/process-instance-management.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.service.ts");
/* harmony import */ var _check_task_query_check_task_query_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./check-task-query/check-task-query.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/check-task-query.component.ts");
/* harmony import */ var _check_task_query_check_task_query_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./check-task-query/check-task-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/check-task-query.service.ts");
/* harmony import */ var _common_shared_module_shared_service_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/shared-module/shared-service.module */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/shared-module/shared-service.module.ts");
/* harmony import */ var _history_instance_history_instance_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./history-instance/history-instance.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/history-instance/history-instance.component.ts");
/* harmony import */ var _already_tasks_query_already_tasks_query_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./already-tasks-query/already-tasks-query.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/already-tasks-query/already-tasks-query.component.ts");
/* harmony import */ var _process_instance_management_hang_task_hang_task_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./process-instance-management/hang-task/hang-task.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/hang-task/hang-task.component.ts");
/* harmony import */ var _check_task_query_task_manage_task_manage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./check-task-query/task-manage/task-manage.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/task-manage/task-manage.component.ts");
/* harmony import */ var _manual_exception_information_manual_exception_information_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manual-exception-information/manual-exception-information.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/manual-exception-information.component.ts");
/* harmony import */ var _manual_exception_information_manual_exception_information_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./manual-exception-information/manual-exception-information.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/manual-exception-information.service.ts");
/* harmony import */ var _manual_exception_information_event_service_detail_event_service_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./manual-exception-information/event-service-detail/event-service-detail.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/event-service-detail/event-service-detail.component.ts");
/* harmony import */ var _check_task_query_task_manage_target_node_target_node_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./check-task-query/task-manage/target-node/target-node.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/task-manage/target-node/target-node.component.ts");
/* harmony import */ var _message_sending_query_message_sending_query_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./message-sending-query/message-sending-query.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/message-sending-query/message-sending-query.component.ts");
/* harmony import */ var _message_sending_query_message_sending_query_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./message-sending-query/message-sending-query.service */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/message-sending-query/message-sending-query.service.ts");
/* harmony import */ var _process_instance_process_instance_management_approval_records_child_approval_record_child_approval_record_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../process-instance/process-instance-management/approval-records/child-approval-record/child-approval-record.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/approval-records/child-approval-record/child-approval-record.component.ts");
/* harmony import */ var _process_instance_process_instance_management_approval_records_approval_records_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../process-instance/process-instance-management/approval-records/approval-records.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/approval-records/approval-records.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var ProcessInstanceModule = /** @class */ (function () {
    function ProcessInstanceModule() {
    }
    ProcessInstanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _process_instance_routing__WEBPACK_IMPORTED_MODULE_6__["ProcessInstanceRouting"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"],
                _common_shared_module_shared_service_module__WEBPACK_IMPORTED_MODULE_11__["SharedServiceModule"]
            ],
            declarations: [
                _process_instance_component__WEBPACK_IMPORTED_MODULE_5__["ProcessInstanceComponent"],
                _process_instance_management_process_instance_management_component__WEBPACK_IMPORTED_MODULE_7__["ProcessInstanceManagementComponent"],
                _check_task_query_check_task_query_component__WEBPACK_IMPORTED_MODULE_9__["CheckTaskQueryComponent"],
                _process_instance_process_instance_management_approval_records_approval_records_component__WEBPACK_IMPORTED_MODULE_23__["ApprovalRecordsComponent"],
                _history_instance_history_instance_component__WEBPACK_IMPORTED_MODULE_12__["HistoryInstanceComponent"],
                _already_tasks_query_already_tasks_query_component__WEBPACK_IMPORTED_MODULE_13__["AlreadyTasksQueryComponent"],
                _process_instance_management_hang_task_hang_task_component__WEBPACK_IMPORTED_MODULE_14__["HangTaskComponent"],
                _check_task_query_task_manage_task_manage_component__WEBPACK_IMPORTED_MODULE_15__["TaskManageComponent"],
                _manual_exception_information_manual_exception_information_component__WEBPACK_IMPORTED_MODULE_16__["ManualExceptionInformationComponent"],
                _manual_exception_information_event_service_detail_event_service_detail_component__WEBPACK_IMPORTED_MODULE_18__["EventServiceDetailComponent"],
                _check_task_query_task_manage_target_node_target_node_component__WEBPACK_IMPORTED_MODULE_19__["TargetNodeComponent"],
                _message_sending_query_message_sending_query_component__WEBPACK_IMPORTED_MODULE_20__["MessageSendingQueryComponent"],
                _process_instance_process_instance_management_approval_records_child_approval_record_child_approval_record_component__WEBPACK_IMPORTED_MODULE_22__["ChildApprovalRecordComponent"],
            ],
            providers: [
                _process_instance_management_process_instance_management_service__WEBPACK_IMPORTED_MODULE_8__["ProcessInstanceManagementService"],
                _check_task_query_check_task_query_service__WEBPACK_IMPORTED_MODULE_10__["CheckTaskQueryService"],
                _manual_exception_information_manual_exception_information_service__WEBPACK_IMPORTED_MODULE_17__["ManualExceptionInformationService"],
                _message_sending_query_message_sending_query_service__WEBPACK_IMPORTED_MODULE_21__["MessageSendingQueryService"],
            ]
        })
    ], ProcessInstanceModule);
    return ProcessInstanceModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance.routing.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance.routing.ts ***!
  \****************************************************************************************************/
/*! exports provided: routes, ProcessInstanceRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessInstanceRouting", function() { return ProcessInstanceRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _process_instance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./process-instance.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance.component.ts");
/* harmony import */ var _process_instance_management_process_instance_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./process-instance-management/process-instance-management.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/process-instance-management/process-instance-management.component.ts");
/* harmony import */ var _check_task_query_check_task_query_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-task-query/check-task-query.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/check-task-query/check-task-query.component.ts");
/* harmony import */ var _history_instance_history_instance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history-instance/history-instance.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/history-instance/history-instance.component.ts");
/* harmony import */ var _already_tasks_query_already_tasks_query_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./already-tasks-query/already-tasks-query.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/already-tasks-query/already-tasks-query.component.ts");
/* harmony import */ var _manual_exception_information_manual_exception_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manual-exception-information/manual-exception-information.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/manual-exception-information/manual-exception-information.component.ts");
/* harmony import */ var _message_sending_query_message_sending_query_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message-sending-query/message-sending-query.component */ "./src/app/pages/tzb/workflow/activiti-work-flow/process-instance/message-sending-query/message-sending-query.component.ts");








var routes = [
    {
        path: '',
        component: _process_instance_component__WEBPACK_IMPORTED_MODULE_1__["ProcessInstanceComponent"],
        children: [
            { path: '', redirectTo: 'process-instance-management', pathMatch: 'full' },
            { path: 'process-instance-management', component: _process_instance_management_process_instance_management_component__WEBPACK_IMPORTED_MODULE_2__["ProcessInstanceManagementComponent"] },
            { path: 'history-instance', component: _history_instance_history_instance_component__WEBPACK_IMPORTED_MODULE_4__["HistoryInstanceComponent"] },
            { path: 'check-task-query', component: _check_task_query_check_task_query_component__WEBPACK_IMPORTED_MODULE_3__["CheckTaskQueryComponent"] },
            { path: 'already-tasks-query', component: _already_tasks_query_already_tasks_query_component__WEBPACK_IMPORTED_MODULE_5__["AlreadyTasksQueryComponent"] },
            { path: 'manual-exception-information', component: _manual_exception_information_manual_exception_information_component__WEBPACK_IMPORTED_MODULE_6__["ManualExceptionInformationComponent"] },
            { path: 'message-sending-query', component: _message_sending_query_message_sending_query_component__WEBPACK_IMPORTED_MODULE_7__["MessageSendingQueryComponent"] },
        ]
    }
];
var ProcessInstanceRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=process-instance-process-instance-module.js.map