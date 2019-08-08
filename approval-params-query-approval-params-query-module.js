(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["approval-params-query-approval-params-query-module"],{

/***/ "./src/app/pages/tzb/workflow/approval-params-query/approval-params-query.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/approval-params-query/approval-params-query.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"module ui-g-12\">\r\n  <div class=\"ui-g-12 query\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-3\">\r\n        <label>客户请求编号：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"approvalParamsQueryBean.custRequestNo\">\r\n      </div>\r\n      <div class=\"ui-g-3\">\r\n        <label>流程实例id：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"approvalParamsQueryBean.processId\">\r\n      </div>\r\n      <div class=\"ui-g-3\">\r\n        <label>任务id：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"approvalParamsQueryBean.taskId\">\r\n      </div>\r\n      <div class=\"ui-g-3\">\r\n        <label>审批人：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"approvalParamsQueryBean.tellerId\">\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-3\">\r\n        <label>权限模板：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"approvalParamsQueryBean.permissionsNo\">\r\n      </div>\r\n      <div class=\"ui-g-3\">\r\n        <label>客户号：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"approvalParamsQueryBean.custNo\">\r\n      </div>\r\n      <div class=\"ui-g-3\">\r\n        <label>申请产品：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"approvalParamsQueryBean.productCode\">\r\n      </div>\r\n      <div class=\"ui-g-3\">\r\n        <label>申请金额：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"approvalParamsQueryBean.applyAmt\">\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-3\">\r\n        <label>审批金额：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"approvalParamsQueryBean.finalApprovalAmount\">\r\n      </div>\r\n      <div class=\"ui-g-3\">\r\n        <label>例外审批层级：</label>\r\n        <p-dropdown [options]=\"outExceptionalPosition\" [(ngModel)]=\"approvalParamsQueryBean.exceptionalPosition\"></p-dropdown>\r\n      </div>\r\n      <div class=\"ui-g-3\">\r\n        <label>申请利率：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"approvalParamsQueryBean.applyInterestRate\">\r\n      </div>\r\n      <div class=\"ui-g-3\">\r\n        <label>执行利率：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"approvalParamsQueryBean.executeInterestRate\">\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-3\">\r\n        <label>积数比例：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"approvalParamsQueryBean.accrualScaleNo\">\r\n      </div>\r\n      <div class=\"ui-g-3\">\r\n        <label>贷款次数：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"approvalParamsQueryBean.loanNum\">\r\n      </div>\r\n      <div class=\"ui-g-3\">\r\n        <label>担保方式：</label>\r\n        <p-dropdown [options]=\"guaranteeType\" [(ngModel)]=\"approvalParamsQueryBean.guaranteeType\"></p-dropdown>\r\n      </div>\r\n\r\n      <div class=\"ui-g-3\">\r\n        <label>申请日期：</label>\r\n        <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2200\" dateFormat=\"yy-mm-dd\"\r\n          [showOtherMonths]=\"false\" [locale]=\"ch\" [(ngModel)]=\"approvalParamsQueryBean.applyDate\"></p-calendar>\r\n      </div>\r\n      <!-- <div class=\"ui-g-3\">\r\n        <label>批断权：</label>\r\n        <p-dropdown [options]=\"authSize\" [(ngModel)]=\"approvalParamsQueryBean.authSize\"></p-dropdown>\r\n      </div> -->\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <!-- <div class=\"ui-g-3\">\r\n        <label>优惠权：</label>\r\n        <p-dropdown [options]=\"preferentialSize\" [(ngModel)]=\"approvalParamsQueryBean.preferentialSize\"></p-dropdown>\r\n      </div>\r\n      <div class=\"ui-g-3\">\r\n        <label>例外审批权：</label>\r\n        <p-dropdown [options]=\"exceptionalSize\" [(ngModel)]=\"approvalParamsQueryBean.exceptionalSize\"></p-dropdown>\r\n      </div> -->\r\n      <div class=\"ui-g-3\">\r\n        <label>审批开始时间：</label>\r\n        <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2200\" dateFormat=\"yy-mm-dd\"\r\n          [showOtherMonths]=\"false\" [locale]=\"ch\" [(ngModel)]=\"approvalParamsQueryBean.approveDateStart\"></p-calendar>\r\n      </div>\r\n\r\n      <div class=\"ui-g-3\">\r\n        <label>审批结束时间：</label>\r\n        <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2200\" dateFormat=\"yy-mm-dd\"\r\n          [showOtherMonths]=\"false\" [locale]=\"ch\" [(ngModel)]=\"approvalParamsQueryBean.approveDateEnd\"></p-calendar>\r\n      </div>\r\n      <div class=\"ui-g-3\">\r\n        <label>止贷日期：</label>\r\n        <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2200\" dateFormat=\"yy-mm-dd\"\r\n          [showOtherMonths]=\"false\" [locale]=\"ch\" [(ngModel)]=\"approvalParamsQueryBean.endDate\"></p-calendar>\r\n      </div>\r\n      <div class=\"ui-g-3\">\r\n        <label>审批数据：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"approvalParamsQueryBean.remark1\">\r\n      </div>\r\n\r\n\r\n      \r\n\r\n\r\n    </div>\r\n    <!-- <div class=\"ui-g-12\">\r\n      \r\n\r\n      <div class=\"ui-g-3\">\r\n        <label>当前时间：</label>\r\n        <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2200\" dateFormat=\"yy-mm-dd\"\r\n          [showOtherMonths]=\"false\" [locale]=\"ch\" [(ngModel)]=\"approvalParamsQueryBean.createDate\"></p-calendar>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12 btn_qry\">\r\n    <button pButton type=\"button\" label=\"查询\" (click)=\"queryClick()\"></button>\r\n    <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n  </div>\r\n  <div class=\"ui-g-12 table\">\r\n    <p-dataTable [value]=\"tableData\" [scrollable]=\"true\">\r\n      <p-column header=\"客户请求编号\" field=\"custRequestNo\"></p-column>\r\n      <p-column header=\"流程实例id\" field=\"processId\"></p-column>\r\n      <p-column header=\"任务id\" field=\"taskId\"></p-column>\r\n      <p-column header=\"审批人\" field=\"tellerId\"></p-column>\r\n      <p-column header=\"权限模板\" field=\"permissionsNo\"></p-column>\r\n      <p-column header=\"客户号\" field=\"custNo\"></p-column>\r\n      <p-column header=\"申请产品\" field=\"productCode\"></p-column>\r\n      <p-column header=\"申请金额\" field=\"applyAmt\"></p-column>\r\n      <p-column header=\"审批金额\" field=\"finalApprovalAmount\"></p-column>\r\n      <p-column header=\"例外审批层级\" field=\"exceptionalPosition\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{col.exceptionalPosition|codeValuePie:outExceptionalPosition}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"申请利率\" field=\"applyInterestRate\"></p-column>\r\n      <p-column header=\"执行利率\" field=\"executeInterestRate\"></p-column>\r\n      <p-column header=\"积数比例\" field=\"accrualScaleNo\"></p-column>\r\n      <p-column header=\"贷款次数\" field=\"loanNum\"></p-column>\r\n      <p-column header=\"担保方式\" field=\"guaranteeType\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{col.guaranteeType|codeValuePie:guaranteeType}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"批断权\" field=\"authSize\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{col.authSize|codeValuePie:authSize}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"优惠权\" field=\"preferentialSize\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{col.preferentialSize|codeValuePie:preferentialSize}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"例外审批权\" field=\"exceptionalSize\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{col.exceptionalSize|codeValuePie:exceptionalSize}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"申请日期\" field=\"applyDate\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{col.applyDate|date:'yyyy-MM-dd'}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"止贷日期\" field=\"endDate\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{col.endDate|date:'yyyy-MM-dd'}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"审批时间\" field=\"approveDate\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{col.approveDate|date:'yyyy-MM-dd'}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"审批数据明细\" field=\"remark1\">\r\n        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n     \r\n          <span class=\"tabelDetailIco\" (click)=\"shenpdetail(col,ri)\">详情</span>\r\n\r\n          \r\n        </ng-template>\r\n      </p-column>\r\n      <!-- <p-column header=\"当前时间\" field=\"createDate\"></p-column> -->\r\n    </p-dataTable>\r\n    <div class=\"ui-g-8 shenpidetail\">\r\n        <p-dialog header=\"审批数据明细\" [(visible)]=\"shendisplay\" >\r\n            <div>{{shenpidetail}}</div>\r\n        </p-dialog>\r\n        \r\n\r\n    </div>\r\n    <p-paginator [first]=\"first\" rows=\"{{approvalParamsQueryBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n      (onPageChange)=\"paginate($event)\"></p-paginator>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/approval-params-query/approval-params-query.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/approval-params-query/approval-params-query.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".query .ui-g-3 {\n  padding: 0.1em 0; }\n\n.query label {\n  display: inline-block;\n  width: 125px;\n  text-align: right; }\n\n.query input {\n  width: 51%; }\n\n.btn_qry {\n  text-align: center; }\n\n.btn_qry button {\n    margin: 30px; }\n\n.table {\n  text-align: center; }\n\n:host/deep/.ui-dropdown {\n  width: 51% !important; }\n\n:host/deep/.ui-calendar {\n  width: 51% !important; }\n\n:host/deep/.shenpidetail .ui-dialog.ui-widget {\n  width: 700px  !important;\n  height: 500px; }\n\n:host/deep/.shenpidetail .ui-dialog.ui-widget .ui-dialog-content {\n    height: 80%;\n    word-break: break-all;\n    word-wrap: break-word; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FwcHJvdmFsLXBhcmFtcy1xdWVyeS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFx3b3JrZmxvd1xcYXBwcm92YWwtcGFyYW1zLXF1ZXJ5XFxhcHByb3ZhbC1wYXJhbXMtcXVlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxnQkFBZ0IsRUFBQTs7QUFGeEI7RUFLUSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQVB6QjtFQVVRLFVBQVUsRUFBQTs7QUFHbEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxZQUFZLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0kscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksd0JBQXVCO0VBRXZCLGFBQWEsRUFBQTs7QUFIakI7SUFLUSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3dvcmtmbG93L2FwcHJvdmFsLXBhcmFtcy1xdWVyeS9hcHByb3ZhbC1wYXJhbXMtcXVlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVlcnl7XHJcbiAgICAudWktZy0ze1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMWVtIDA7XHJcbiAgICB9XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDUxJTtcclxuICAgIH1cclxufVxyXG4uYnRuX3FyeXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuLnRhYmxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjpob3N0L2RlZXAvLnVpLWRyb3Bkb3due1xyXG4gICAgd2lkdGg6IDUxJSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0L2RlZXAvLnVpLWNhbGVuZGFye1xyXG4gICAgd2lkdGg6IDUxJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLy5zaGVucGlkZXRhaWwgLnVpLWRpYWxvZy51aS13aWRnZXR7XHJcbiAgICB3aWR0aDo3MDBweCAgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIC51aS1kaWFsb2ctY29udGVudHtcclxuICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/workflow/approval-params-query/approval-params-query.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/approval-params-query/approval-params-query.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ApprovalParamsQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalParamsQueryComponent", function() { return ApprovalParamsQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _approval_params_query_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approval-params-query.bean */ "./src/app/pages/tzb/workflow/approval-params-query/approval-params-query.bean.ts");
/* harmony import */ var _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
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





var ApprovalParamsQueryComponent = /** @class */ (function () {
    function ApprovalParamsQueryComponent(commfunc, workflowHttpService) {
        this.commfunc = commfunc;
        this.workflowHttpService = workflowHttpService;
        this.approvalParamsQueryBean = new _approval_params_query_bean__WEBPACK_IMPORTED_MODULE_1__["ApprovalParamsQueryBean"]();
        this.first = 0;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        this.shendisplay = false;
    }
    ApprovalParamsQueryComponent.prototype.ngOnInit = function () {
        this.approvalParamsQueryBean.pageNum = 1;
        this.approvalParamsQueryBean.pageSize = 10;
        this.codeValues();
        this.outExceptionalPosition = this.code['outExceptionalPosition']; //转话对象
        this.guaranteeType = this.code['guaranteeType1'];
        this.authSize = this.code['authSize']; //批断权
        this.preferentialSize = this.code['authSize']; //优惠权
        this.exceptionalSize = this.code['authSize'];
        this.query();
    };
    //码值
    ApprovalParamsQueryComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ApprovalParamsQueryComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.approvalParamsQueryBean.pageSize = event.rows * 1;
        //当前页
        this.approvalParamsQueryBean.pageNum = event.page + 1;
        this.first = event.page * this.approvalParamsQueryBean.pageSize;
        this.query();
    };
    //审批数据明细详情
    ApprovalParamsQueryComponent.prototype.shenpdetail = function (item, i) {
        this.shenpidetail = item.remark1;
        this.shendisplay = true;
    };
    ApprovalParamsQueryComponent.prototype.changeDateType = function (date) {
        date = date && typeof date == 'object' ? this.commfunc.transDateN(date).slice(0, 10) : date;
        return date;
    };
    ApprovalParamsQueryComponent.prototype.query = function () {
        var _this = this;
        this.approvalParamsQueryBean.applyDate = this.changeDateType(this.approvalParamsQueryBean.applyDate);
        this.approvalParamsQueryBean.endDate = this.changeDateType(this.approvalParamsQueryBean.endDate);
        this.approvalParamsQueryBean.approveDateStart = this.changeDateType(this.approvalParamsQueryBean.approveDateStart);
        this.approvalParamsQueryBean.approveDateEnd = this.changeDateType(this.approvalParamsQueryBean.approveDateEnd);
        this.approvalParamsQueryBean.createDate = this.changeDateType(this.approvalParamsQueryBean.createDate);
        console.log(this.approvalParamsQueryBean);
        this.workflowHttpService.queryApproveRecords(this.approvalParamsQueryBean).subscribe(function (data) {
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
    };
    ApprovalParamsQueryComponent.prototype.queryClick = function () {
        this.first = 0;
        this.query();
    };
    ApprovalParamsQueryComponent.prototype.reset = function () {
        this.approvalParamsQueryBean = new _approval_params_query_bean__WEBPACK_IMPORTED_MODULE_1__["ApprovalParamsQueryBean"]();
        this.approvalParamsQueryBean.pageNum = 1;
        this.approvalParamsQueryBean.pageSize = 10;
    };
    ApprovalParamsQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approval-params-query',
            template: __webpack_require__(/*! ./approval-params-query.component.html */ "./src/app/pages/tzb/workflow/approval-params-query/approval-params-query.component.html"),
            styles: [__webpack_require__(/*! ./approval-params-query.component.scss */ "./src/app/pages/tzb/workflow/approval-params-query/approval-params-query.component.scss")]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowHttpService"]])
    ], ApprovalParamsQueryComponent);
    return ApprovalParamsQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/approval-params-query/approval-params-query.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/approval-params-query/approval-params-query.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ApprovalParamsQueryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalParamsQueryModule", function() { return ApprovalParamsQueryModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _approval_params_query_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approval-params-query.routing */ "./src/app/pages/tzb/workflow/approval-params-query/approval-params-query.routing.ts");
/* harmony import */ var _approval_params_query_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./approval-params-query.component */ "./src/app/pages/tzb/workflow/approval-params-query/approval-params-query.component.ts");
/* harmony import */ var _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../http/workflow.http.service */ "./src/app/pages/tzb/workflow/http/workflow.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//  工作流
var ApprovalParamsQueryModule = /** @class */ (function () {
    function ApprovalParamsQueryModule() {
    }
    ApprovalParamsQueryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _approval_params_query_routing__WEBPACK_IMPORTED_MODULE_4__["ApprovalParamsQueryRouting"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
            ],
            declarations: [
                _approval_params_query_component__WEBPACK_IMPORTED_MODULE_5__["ApprovalParamsQueryComponent"]
            ],
            providers: [
                _http_workflow_http_service__WEBPACK_IMPORTED_MODULE_6__["WorkflowHttpService"]
            ]
        })
    ], ApprovalParamsQueryModule);
    return ApprovalParamsQueryModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/workflow/approval-params-query/approval-params-query.routing.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/approval-params-query/approval-params-query.routing.ts ***!
  \*******************************************************************************************/
/*! exports provided: routes, ApprovalParamsQueryRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalParamsQueryRouting", function() { return ApprovalParamsQueryRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _approval_params_query_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approval-params-query.component */ "./src/app/pages/tzb/workflow/approval-params-query/approval-params-query.component.ts");


var routes = [
    {
        path: '',
        component: _approval_params_query_component__WEBPACK_IMPORTED_MODULE_1__["ApprovalParamsQueryComponent"],
    }
];
var ApprovalParamsQueryRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=approval-params-query-approval-params-query-module.js.map