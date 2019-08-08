(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-manage-order-manage-module"],{

/***/ "./src/app/pages/tzb/order/order-center/order-manage/order-exception-handle/bean/order-exception-handle.bean.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-manage/order-exception-handle/bean/order-exception-handle.bean.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: OrderExceptionHandleBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderExceptionHandleBean", function() { return OrderExceptionHandleBean; });
var OrderExceptionHandleBean = /** @class */ (function () {
    function OrderExceptionHandleBean() {
        this.orderHeader = {
            orderNo: '',
            appBranchNo: '',
            appUserId: '',
            orderStatus: '',
            coreSeqNo: '',
            queryStartDate: '',
            queryEndDate: '',
            payStatus: '',
            fulStatus: '',
            settleAcctNo: '',
            minAmt: '',
            maxAmt: '',
            bankNo: '',
            paySeqNo: '',
            tranType: '',
            salesChannelEnumId: '',
        };
        this.pageParam = {
            pageNumber: Number,
            pageSize: Number,
        };
        this.orderItems = {
            productCode: '',
        };
    }
    return OrderExceptionHandleBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-manage/order-exception-handle/order-exception-handle.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-manage/order-exception-handle/order-exception-handle.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userform\">\r\n  <div class=\"ui-g-12 order-exception-handle\">\r\n    <header-title [Info]=\"'订单异常处理'\"></header-title>\r\n    <!-- 查询条件 -->\r\n    <div class=\"ui-g-12 query-criteria\">\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n          <div class=\"label\">订单编号：</div>\r\n          <input type=\"text\" name=\"orderNo\" formControlName=\"orderNo\" pInputText [(ngModel)]=\"orderExceptionHandleBean.orderHeader.orderNo\"\r\n          />\r\n        </div>\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['orderNo'].valid&&userform.controls['orderNo'].dirty&&flag\">\r\n          <span *ngIf=\"userform.hasError('maxlength','orderNo')\">订单编号不能超过16位!</span>\r\n          <!-- <span *ngIf=\"userform.controls['orderNo'].errors['required']\">订单编号不能为空！</span> -->\r\n          <span *ngIf=\"userform.hasError('specialSymbol','orderNo')\">订单编号不支持特殊字符！</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n          <div class=\"label\">机构号：</div>\r\n          <input type=\"text\" pInputText name=\"appBranchNo\" formControlName=\"appBranchNo\" [(ngModel)]=\"orderExceptionHandleBean.orderHeader.appBranchNo\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 query-criteria\">\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n          <div class=\"label\">柜员号：</div>\r\n          <input type=\"text\" pInputText name=\"appUserId\" formControlName=\"appUserId\" [(ngModel)]=\"orderExceptionHandleBean.orderHeader.appUserId\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n          <div class=\"label\" >订单状态：</div>\r\n          <p-dropdown [options]=\"orderStatus\" name=\"orderStatus\" formControlName=\"orderStatus\" [(ngModel)]=\"orderExceptionHandleBean.orderHeader.orderStatus\"></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 query-criteria\">\r\n      <!-- <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n          <div  class=\"label\">流水号：</div>\r\n          <input type=\"text\" name=\"coreSeqNo\" formControlName=\"coreSeqNo\" pInputText [(ngModel)]=\"orderExceptionHandleBean.orderHeader.coreSeqNo\"\r\n          />\r\n        </div>\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['coreSeqNo'].valid&&userform.controls['coreSeqNo'].dirty\">\r\n          <span *ngIf=\"userform.hasError('maxlength','coreSeqNo')\">流水号不能超过50位!</span>\r\n          <span *ngIf=\"userform.controls['coreSeqNo'].errors['required']\">流水号不能为空！</span>\r\n          <span *ngIf=\"userform.hasError('specialSymbol','coreSeqNo')\">流水号不支持特殊字符！</span>\r\n        </div> \r\n      </div> -->\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"first-query\">\r\n          <div class=\"label\" style=\"display:inline-block;width:200px;text-align:right\">交易日期：</div>\r\n          <p-calendar [(ngModel)]=\"dealDateFrom\" [showIcon]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\" [style]=\"{'width':'15%'}\"\r\n            name=\"dealDateFrom\" formControlName=\"dealDateFrom\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n            [showOtherMonths]=\"false\" [readonlyInput]=\"true\" (onSelect)=\"selectTime1()\"></p-calendar>\r\n          <!-- <p-calendar *ngIf=\"!dealDateTo\" [(ngModel)]=\"dealDateFrom\" [maxDate]=\"dealDateTo\" [showIcon]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\" [style]=\"{'width':'200px'}\" name=\"dealDateFrom\" formControlName=\"dealDateFrom\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"  [showOtherMonths]=\"false\" [readonlyInput]=\"true\" (onSelect)=\"selectTime1()\"></p-calendar> -->\r\n          至\r\n          <p-calendar [(ngModel)]=\"dealDateTo\" [showIcon]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\" [style]=\"{'width':'15%'}\" name=\"dealDateTo\"\r\n            formControlName=\"dealDateTo\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showOtherMonths]=\"false\"\r\n            [readonlyInput]=\"true\" (onSelect)=\"selectTime2()\"></p-calendar>\r\n          <!-- <p-calendar *ngIf=\"!dealDateFrom\" [(ngModel)]=\"dealDateTo\" [minDate]=\"dealDateFrom\" [showIcon]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\" [style]=\"{'width':'200px'}\" name=\"dealDateTo\" formControlName=\"dealDateTo\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"  [showOtherMonths]=\"false\" [readonlyInput]=\"true\" (onSelect)=\"selectTime2()\"></p-calendar> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"btn\">\r\n      <button pButton type=\"button\" label=\"查询\" class=\"queryBtn\" (click)=\"queryClick()\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" class=\"resetBtn\" (click)=\"resetClick()\"></button>\r\n    </div>\r\n    <!--表格-->\r\n    <div class=\"ui-g-12 juery-result\">\r\n      <div class=\"table\">\r\n        <!-- <p-dataTable [value]=\"tableData\" emptyMessage=\"没有查找到数据\" scrollable=\"true\" scrollHeight=\"300px\" scrollWidth=\"'100%'\">\r\n          <p-column field=\"number\" header='序号' [style]=\"{'width':'100px'}\">\r\n            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              <span>{{ri+1}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"orderNo\" header='订单编号'></p-column>\r\n          <p-column field=\"orderStatus\" header='订单状态'></p-column>\r\n          <p-column field=\"coreSeqNo\" header='流水号'></p-column>\r\n          <p-column field=\"ccy\" header='币种'></p-column>\r\n          <p-column field=\"orderAmt\" header='交易金额'></p-column>\r\n          <p-column field=\"appBranchNo\" header='机构号'></p-column>\r\n          <p-column field=\"appUserId\" header='柜员号'></p-column>\r\n          <p-column field=\"oriTranDate\" header='交易日期'></p-column>\r\n          <p-column field=\"operate\" header='操作'>\r\n            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n              <a class=\"detail unusualIco\" (click)=\"exceptionClick(item)\">异常处理</a>\r\n            </ng-template>\r\n          </p-column>\r\n        </p-dataTable> -->\r\n        <p-dataTable emptyMessage=\"没有查找到数据\" [value]=\"tableData\" scrollable=\"true\" scrollHeight=\"350px\" >\r\n          <p-column field=\"number\" header='序号' [style]=\"{'width':'60px'}\">\r\n            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              <span>{{ri+1}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"orderNo\" header='订单号' [style]=\"{'width':'130px'}\"></p-column>\r\n          <p-column field=\"appBranchNo\" header='经办机构' [style]=\"{'width':'85px'}\"></p-column>\r\n          <p-column field=\"appUserId\" header='经办柜员' [style]=\"{'width':'85px'}\"></p-column>\r\n          <p-column field=\"paySeqNo\" header='核心支付流水号' [style]=\"{'width':'130px'}\"></p-column>\r\n          <p-column field=\"deliverSeqNo\" header='核心交付流水号' [style]=\"{'width':'130px'}\"></p-column>\r\n          <p-column field=\"orderStatus\" header='订单状态' [style]=\"{'width':'85px'}\"></p-column>\r\n          <p-column field=\"paymentStatus\" header='支付状态' [style]=\"{'width':'85px'}\"></p-column>\r\n          <p-column field=\"deliverStatus\" header='交付状态' [style]=\"{'width':'85px'}\"></p-column>\r\n          <p-column field=\"acctNo\" header='交易帐/卡号' [style]=\"{'width':'220px'}\"></p-column>\r\n          <p-column field=\"orderAmt\" header='订单金额' [style]=\"{'width':'140px'}\"></p-column>\r\n          <p-column field=\"oriTranDate\" header='原交易日期' [style]=\"{'width':'135px'}\"></p-column>\r\n          <p-column field=\"productCode\" header='产品编号' [style]=\"{'width':'220px'}\"></p-column>\r\n          <p-column field=\"tranType\" header='交易类型' [style]=\"{'width':'120px'}\"></p-column>\r\n          <p-column field=\"sourceChanel\" header='来源渠道' [style]=\"{'width':'85px'}\"></p-column>\r\n          <p-column field=\"bankSystemType\" header='银行标识' [style]=\"{'width':'85px'}\"></p-column>\r\n          <p-column field=\"operate\" header='操作' [style]=\"{'width':'100px'}\" *ngIf=\"permissionCheck('SID02064_P0160_P001')\">\r\n            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n              <a class=\"detail unusualIco\" (click)=\"exceptionClick(item)\">异常处理</a>\r\n            </ng-template>\r\n          </p-column>\r\n        </p-dataTable>\r\n      </div>\r\n      <p-paginator first={{first}} rows=\"{{orderExceptionHandleBean.pageParam.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\"\r\n        [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n  </div>\r\n</form>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-manage/order-exception-handle/order-exception-handle.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-manage/order-exception-handle/order-exception-handle.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.order-exception-handle {\n  margin-top: 10px;\n  padding: 0;\n  padding-bottom: 50px; }\n.order-exception-handle .query-criteria {\n    padding: 0 30px;\n    margin-top: 15px; }\n.order-exception-handle .query-criteria .ui-g-6 {\n      height: 90px; }\n.order-exception-handle .query-criteria .ui-g-6 .first-query .label {\n        width: 200px;\n        display: inline-block;\n        text-align: right;\n        line-height: 35px; }\n.order-exception-handle .query-criteria .ui-g-6 .first-query input {\n        width: 30%; }\n.order-exception-handle .query-criteria .ui-g-6 .requireLabel {\n        margin-left: 200px; }\n.order-exception-handle .btn {\n    text-align: center; }\n.order-exception-handle .btn .queryBtn,\n    .order-exception-handle .btn .resetBtn {\n      width: 100px;\n      margin: 15px 0; }\n.order-exception-handle .btn .queryBtn {\n      margin-right: 50px; }\n.order-exception-handle .juery-result {\n    padding: 0 30px;\n    border-top: 1px solid #9e9d9d; }\n.order-exception-handle .juery-result .addBtn {\n      width: 100px;\n      margin-top: 15px; }\n.order-exception-handle .juery-result .table {\n      border: 1px solid #bdbdbd;\n      text-align: center;\n      margin: 15px 0; }\n.order-exception-handle .juery-result .table .modify {\n        margin-right: 20px; }\n.order-exception-handle .juery-result .table .unusualIco {\n        background-position: center; }\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n:host/deep/.ui-dropdown {\n  width: 30% !important; }\n/*\r\n *日历组件的样式修改开始\r\n */\n:host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important; }\n:host/deep/ .ui-datepicker select.ui-datepicker-month {\n  width: 40%;\n  font-size: 16px !important; }\n:host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n/*\r\n*日历组件的样式修改结束\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL29yZGVyL29yZGVyLWNlbnRlci9vcmRlci1tYW5hZ2Uvb3JkZXItZXhjZXB0aW9uLWhhbmRsZS9vcmRlci1leGNlcHRpb24taGFuZGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy90emIvb3JkZXIvb3JkZXItY2VudGVyL29yZGVyLW1hbmFnZS9vcmRlci1leGNlcHRpb24taGFuZGxlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXG9yZGVyXFxvcmRlci1jZW50ZXJcXG9yZGVyLW1hbmFnZVxcb3JkZXItZXhjZXB0aW9uLWhhbmRsZVxcb3JkZXItZXhjZXB0aW9uLWhhbmRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG9CQUFvQixFQUFBO0FBSHhCO0lBS1EsZUFBZTtJQUNmLGdCQUFnQixFQUFBO0FBTnhCO01BUVksWUFBWSxFQUFBO0FBUnhCO1FBV29CLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGlCQUFpQixFQUFBO0FBZHJDO1FBaUJvQixVQUFVLEVBQUE7QUFqQjlCO1FBd0JnQixrQkFBa0IsRUFBQTtBQXhCbEM7SUE2QlEsa0JBQWtCLEVBQUE7QUE3QjFCOztNQWdDWSxZQUFZO01BQ1osY0FBYyxFQUFBO0FBakMxQjtNQW9DWSxrQkFBa0IsRUFBQTtBQXBDOUI7SUF3Q1EsZUFBZTtJQUNmLDZCQUE2QixFQUFBO0FBekNyQztNQTJDWSxZQUFZO01BQ1osZ0JBQWdCLEVBQUE7QUE1QzVCO01BK0NZLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsY0FBYyxFQUFBO0FBakQxQjtRQW1EZ0Isa0JBQWtCLEVBQUE7QUFuRGxDO1FBc0RnQiwyQkFBMkIsRUFBQTtBQU0zQztFQUNJLHFCQUFxQixFQUFBO0FBRXhCO0VBQ0kscUJBQXFCLEVBQUE7QUFFekI7O0VEakJDO0FDcUJEO0VBQ0csVUFBUztFQUNULDBCQUEwQixFQUFBO0FBRzlCO0VBQ0csVUFBUztFQUNULDBCQUEwQixFQUFBO0FBRzdCO0VBQ0csY0FBYSxFQUFBO0FBRWhCOztDRHBCQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9vcmRlci9vcmRlci1jZW50ZXIvb3JkZXItbWFuYWdlL29yZGVyLWV4Y2VwdGlvbi1oYW5kbGUvb3JkZXItZXhjZXB0aW9uLWhhbmRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5vcmRlci1leGNlcHRpb24taGFuZGxlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7IH1cbiAgLm9yZGVyLWV4Y2VwdGlvbi1oYW5kbGUgLnF1ZXJ5LWNyaXRlcmlhIHtcbiAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDsgfVxuICAgIC5vcmRlci1leGNlcHRpb24taGFuZGxlIC5xdWVyeS1jcml0ZXJpYSAudWktZy02IHtcbiAgICAgIGhlaWdodDogOTBweDsgfVxuICAgICAgLm9yZGVyLWV4Y2VwdGlvbi1oYW5kbGUgLnF1ZXJ5LWNyaXRlcmlhIC51aS1nLTYgLmZpcnN0LXF1ZXJ5IC5sYWJlbCB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7IH1cbiAgICAgIC5vcmRlci1leGNlcHRpb24taGFuZGxlIC5xdWVyeS1jcml0ZXJpYSAudWktZy02IC5maXJzdC1xdWVyeSBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAzMCU7IH1cbiAgICAgIC5vcmRlci1leGNlcHRpb24taGFuZGxlIC5xdWVyeS1jcml0ZXJpYSAudWktZy02IC5yZXF1aXJlTGFiZWwge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjAwcHg7IH1cbiAgLm9yZGVyLWV4Y2VwdGlvbi1oYW5kbGUgLmJ0biB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgLm9yZGVyLWV4Y2VwdGlvbi1oYW5kbGUgLmJ0biAucXVlcnlCdG4sXG4gICAgLm9yZGVyLWV4Y2VwdGlvbi1oYW5kbGUgLmJ0biAucmVzZXRCdG4ge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgbWFyZ2luOiAxNXB4IDA7IH1cbiAgICAub3JkZXItZXhjZXB0aW9uLWhhbmRsZSAuYnRuIC5xdWVyeUJ0biB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7IH1cbiAgLm9yZGVyLWV4Y2VwdGlvbi1oYW5kbGUgLmp1ZXJ5LXJlc3VsdCB7XG4gICAgcGFkZGluZzogMCAzMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOWU5ZDlkOyB9XG4gICAgLm9yZGVyLWV4Y2VwdGlvbi1oYW5kbGUgLmp1ZXJ5LXJlc3VsdCAuYWRkQnRuIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7IH1cbiAgICAub3JkZXItZXhjZXB0aW9uLWhhbmRsZSAuanVlcnktcmVzdWx0IC50YWJsZSB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAxNXB4IDA7IH1cbiAgICAgIC5vcmRlci1leGNlcHRpb24taGFuZGxlIC5qdWVyeS1yZXN1bHQgLnRhYmxlIC5tb2RpZnkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cbiAgICAgIC5vcmRlci1leGNlcHRpb24taGFuZGxlIC5qdWVyeS1yZXN1bHQgLnRhYmxlIC51bnVzdWFsSWNvIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XG5cbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGEge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cblxuOmhvc3QvZGVlcC8udWktZHJvcGRvd24ge1xuICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7IH1cblxuLypcclxuICrml6Xljobnu4Tku7bnmoTmoLflvI/kv67mlLnlvIDlp4tcclxuICovXG46aG9zdC9kZWVwLyAudWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci15ZWFyIHtcbiAgd2lkdGg6IDUwJTtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXItbW9udGgge1xuICB3aWR0aDogNDAlO1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDsgfVxuXG46aG9zdC9kZWVwLyAudWktYnV0dG9uLnVpLWJ1dHRvbi1zZWNvbmRhcnkudWktc3RhdGUtZGVmYXVsdCB7XG4gIGNvbG9yOiAjZmZmZmZmOyB9XG5cbi8qXHJcbirml6Xljobnu4Tku7bnmoTmoLflvI/kv67mlLnnu5PmnZ9cclxuKi9cbiIsIi8vIOiuouWNleW8guW4uOWkhOeQhlxyXG4ub3JkZXItZXhjZXB0aW9uLWhhbmRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4OyAvL+afpeivouadoeS7tlxyXG4gICAgLnF1ZXJ5LWNyaXRlcmlhIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAudWktZy02e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgIC5maXJzdC1xdWVyeSB7XHJcbiAgICAgICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucmVxdWlyZUxhYmVsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAucXVlcnlCdG4sXHJcbiAgICAgICAgLnJlc2V0QnRuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnF1ZXJ5QnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH0gLy/mn6Xor6Lnu5PmnpxcclxuICAgIC5qdWVyeS1yZXN1bHQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzllOWQ5ZDtcclxuICAgICAgICAuYWRkQnRuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGFibGUge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgICAgICAubW9kaWZ5IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudW51c3VhbEljb3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vL+ihqOagvOWtl+avjeOAgeaVsOWtl+iHquWKqOaNouihjFxyXG46aG9zdC9kZWVwLyAudWktY2VsbC1kYXRhe1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gfVxyXG4gOmhvc3QvZGVlcC8udWktZHJvcGRvd257XHJcbiAgICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLypcclxuICrml6Xljobnu4Tku7bnmoTmoLflvI/kv67mlLnlvIDlp4tcclxuICovXHJcbiAvL+mAieaLqeW5tOS7vVxyXG4gOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXIteWVhcntcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcbi8v6YCJ5oup5pyI5Lu9XHJcbjpob3N0L2RlZXAvIC51aS1kYXRlcGlja2VyIHNlbGVjdC51aS1kYXRlcGlja2VyLW1vbnRoe1xyXG4gICB3aWR0aDo0MCU7XHJcbiAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG59XHJcbi8v5riF56m644CB5LuK5aSp5Lik5Liq5oyJ6ZKu55qE5a2X5L2T6aKc6ImyXHJcbjpob3N0L2RlZXAvIC51aS1idXR0b24udWktYnV0dG9uLXNlY29uZGFyeS51aS1zdGF0ZS1kZWZhdWx0e1xyXG4gICBjb2xvcjojZmZmZmZmO1xyXG59XHJcbi8qXHJcbirml6Xljobnu4Tku7bnmoTmoLflvI/kv67mlLnnu5PmnZ9cclxuKi8iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-manage/order-exception-handle/order-exception-handle.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-manage/order-exception-handle/order-exception-handle.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: OrderExceptionHandleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderExceptionHandleComponent", function() { return OrderExceptionHandleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_order_exception_handle_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/order-exception-handle.bean */ "./src/app/pages/tzb/order/order-center/order-manage/order-exception-handle/bean/order-exception-handle.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _http_order_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../http/order.http.service */ "./src/app/pages/tzb/order/http/order.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { OrderStatus } from '../../../constant/codeValue'
//订单异常处理
var OrderExceptionHandleComponent = /** @class */ (function () {
    function OrderExceptionHandleComponent(fb, orderHttpService, commfunc) {
        this.fb = fb;
        this.orderHttpService = orderHttpService;
        this.commfunc = commfunc;
        //表数据
        this.tableData = [];
        //订单状态
        this.orderStatus = [];
        //详情模态框
        this.exceptionDisplay = false;
        //bean 
        this.orderExceptionHandleBean = new _bean_order_exception_handle_bean__WEBPACK_IMPORTED_MODULE_2__["OrderExceptionHandleBean"]();
        this.first = 0;
        //提示信息
        this.msgs = [];
        //交易日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_CN"]; //英文转化为中文
        this.dealDateFrom = new Date();
        this.dealDateTo = new Date();
        //点击重置按钮，验证信息隐藏
        this.flag = true;
        this.orderExceptionHandleBean.pageParam.pageSize = 10;
        this.orderExceptionHandleBean.pageParam.pageNumber = 1;
        this.codeValues(); //调用方法，获取全部码值
        this.orderStatus = this.code['OrderStatus'];
    }
    OrderExceptionHandleComponent.prototype.ngOnInit = function () {
        //订单状态初始化
        this.orderExceptionHandleBean.orderHeader.orderStatus = 'ORDER_APPROVED';
        //表单校验
        this.userform = this.fb.group({
            'orderNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(16), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["specialSymbol"]])),
            'appBranchNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'appUserId': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'orderStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'coreSeqNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'dealDateFrom': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            'dealDateTo': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
        //订单状态下拉框
        // this.orderHttpService.queryOrderStatus({}).subscribe(data => {
        //   if (data.returnCode.code == 'success') {
        //     this.orderStatus = this.commfunc.toChangeTree(data.orderStatusList, "description", "orderStatus");
        //     this.orderStatus.unshift({ label: "请选择", value: '' });
        //     console.log(this.orderStatus)
        //   } else {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
        //   }
        // }, error => {
        //   this.msgs = [];
        //   this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        // })
        // this.query();
    };
    //码值
    OrderExceptionHandleComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //查询点击事件
    OrderExceptionHandleComponent.prototype.queryClick = function () {
        this.orderExceptionHandleBean.pageParam.pageNumber = 1;
        this.first = 0;
        this.query();
    };
    //查询方法
    OrderExceptionHandleComponent.prototype.query = function () {
        var _this = this;
        //校验的
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //点击查询，验证不通过出现提示信息
        this.flag = true;
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        //查询时间
        this.orderExceptionHandleBean.orderHeader.queryStartDate = this.commfunc.transDateN(this.dealDateFrom);
        this.orderExceptionHandleBean.orderHeader.queryEndDate = this.commfunc.transDateN(this.dealDateTo);
        //去除字符串左右空格
        for (var items in this.orderExceptionHandleBean) {
            for (var item in this.orderExceptionHandleBean[items]) {
                this.orderExceptionHandleBean[items][item] = this.trim(this.orderExceptionHandleBean[items][item]);
            }
        }
        this.orderHttpService.queryOrderList(this.orderExceptionHandleBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.orderList;
                _this.total = data.pageParam.totalCount + '';
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
    //异常处理按钮
    OrderExceptionHandleComponent.prototype.exceptionClick = function (item) {
        var _this = this;
        var param = {
            orderNo: item.orderNo,
            coreSeqNo: item.coreSeqNo //流水号
        };
        this.orderHttpService.compensateOrderExt(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '异常处理提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '异常处理提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '异常处理提示', detail: '调用服务失败！' });
        });
    };
    //分页
    OrderExceptionHandleComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.orderExceptionHandleBean.pageParam.pageSize = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.orderExceptionHandleBean.pageParam.pageNumber = currentPage;
        this.first = event.page * event.rows;
        //调用查询的方法
        this.query();
    };
    //重置
    OrderExceptionHandleComponent.prototype.resetClick = function () {
        this.orderExceptionHandleBean = new _bean_order_exception_handle_bean__WEBPACK_IMPORTED_MODULE_2__["OrderExceptionHandleBean"]();
        this.dealDateFrom = null; //清空开始日期
        this.dealDateTo = null; //清空结束日期
        this.orderExceptionHandleBean.pageParam.pageSize = 10;
        this.orderExceptionHandleBean.pageParam.pageNumber = 1;
        //点击重置按钮，信息提示消失
        this.flag = false;
    };
    //去除字符串的左右空格方法
    OrderExceptionHandleComponent.prototype.trim = function (str) {
        if (typeof str == "string") {
            return str.replace(/^\s*|\s*$/, "");
        }
        else {
            return str;
        }
    };
    //日期范围的处理
    OrderExceptionHandleComponent.prototype.selectTime1 = function () {
        var _this = this;
        if (this.dealDateFrom && this.dealDateTo) {
            if (this.dealDateFrom > this.dealDateTo) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.dealDateFrom = null;
                });
            }
        }
    };
    OrderExceptionHandleComponent.prototype.selectTime2 = function () {
        var _this = this;
        if (this.dealDateFrom && this.dealDateTo) {
            if (this.dealDateFrom > this.dealDateTo) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.dealDateTo = null;
                });
            }
        }
    };
    //按钮权限
    OrderExceptionHandleComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    OrderExceptionHandleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-exception-handle',
            template: __webpack_require__(/*! ./order-exception-handle.component.html */ "./src/app/pages/tzb/order/order-center/order-manage/order-exception-handle/order-exception-handle.component.html"),
            styles: [__webpack_require__(/*! ./order-exception-handle.component.scss */ "./src/app/pages/tzb/order/order-center/order-manage/order-exception-handle/order-exception-handle.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _http_order_http_service__WEBPACK_IMPORTED_MODULE_4__["OrderHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"]])
    ], OrderExceptionHandleComponent);
    return OrderExceptionHandleComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-manage/order-manage.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-manage/order-manage.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p-menubar [model]=\"items1\" class=\"flt\" *ngIf=\"permissionCheck('SID02064_P0159')\"></p-menubar>\r\n<p-menubar [model]=\"items2\" class=\"flt\" *ngIf=\"permissionCheck('SID02064_P0160')\"></p-menubar> -->\r\n<div class=\"ui-g-12 functions\">\r\n        <span *ngIf=\"permissionCheck('SID02064_P0159')\">\r\n                <a [routerLink]=\"[ '/pages/tzb/order/order-center/order-manage/order-query']\" class=\"change\" [ngClass]=\"{'active':show==1}\"\r\n                        (click)=\"apply(1)\">\r\n                        订单查询\r\n                </a>\r\n        </span>\r\n        <span *ngIf=\"permissionCheck('SID02064_P0160')\">\r\n                <a [routerLink]=\"[ '/pages/tzb/order/order-center/order-manage/order-exception-handle']\" class=\"change\" [ngClass]=\"{'active':show==2}\"\r\n                        (click)=\"apply(2)\">\r\n                        订单异常处理\r\n                </a>\r\n        </span>\r\n        <!-- <span>\r\n                <a [routerLink]=\"[ '/pages/tzb/order/order-center/order-manage/voucher-manage']\" class=\"change\" [ngClass]=\"{'active':show==3}\"\r\n                        (click)=\"apply(3)\">\r\n                        抵用券类型管理\r\n                </a>\r\n        </span>\r\n        <span>\r\n                <a [routerLink]=\"[ '/pages/tzb/order/order-center/order-manage/voucher-applicate']\" class=\"change\" [ngClass]=\"{'active':show==4}\"\r\n                        (click)=\"apply(4)\">\r\n                        抵用券申请\r\n                </a>\r\n        </span>\r\n        <span>\r\n                <a [routerLink]=\"[ '/pages/tzb/order/order-center/order-manage/custom-voucher-manage']\" class=\"change\" [ngClass]=\"{'active':show==5}\"\r\n                        (click)=\"apply(5)\">\r\n                        客户抵用券管理\r\n                </a>\r\n        </span> -->\r\n</div>\r\n<div class=\"ui-g-12 module\">\r\n        <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-manage/order-manage.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-manage/order-manage.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host/deep/ .ui-menubar {\n  border: none; }\n\n.flt {\n  float: left; }\n\n.functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0; }\n\n.functions .change {\n    display: inline-block;\n    font-size: 15px;\n    height: 40px;\n    line-height: 40px;\n    border-radius: 3px 3px 0 0;\n    color: #929292;\n    padding: 0px 30px;\n    font-weight: bold; }\n\n.active {\n  border: none !important;\n  background-color: #f7f7f7 !important;\n  color: #003f5c !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL29yZGVyL29yZGVyLWNlbnRlci9vcmRlci1tYW5hZ2UvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6Ylxcb3JkZXJcXG9yZGVyLWNlbnRlclxcb3JkZXItbWFuYWdlXFxvcmRlci1tYW5hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksV0FBVyxFQUFBOztBQUVmO0VBQ0ksZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBSG5CO0lBS1EscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvb3JkZXIvb3JkZXItY2VudGVyL29yZGVyLW1hbmFnZS9vcmRlci1tYW5hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC9kZWVwLyAudWktbWVudWJhcntcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4uZmx0IHtcclxuICAgIGZsb2F0OiBsZWZ0OyAgICBcclxufVxyXG4uZnVuY3Rpb25zIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAuY2hhbmdlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICAgICAgICBjb2xvcjogIzkyOTI5MjtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3ZjcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAzZjVjICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-manage/order-manage.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-manage/order-manage.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OrderManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderManageComponent", function() { return OrderManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//订单管理
var OrderManageComponent = /** @class */ (function () {
    function OrderManageComponent(commfunc) {
        this.commfunc = commfunc;
    }
    OrderManageComponent.prototype.ngOnInit = function () {
        this.items1 = [
            {
                label: '订单查询',
                routerLink: '/pages/tzb/order/order-center/order-manage/order-query'
            }
        ];
        this.items2 = [
            {
                label: '订单异常处理',
                routerLink: '/pages/tzb/order/order-center/order-manage/order-exception-handle'
            }
        ];
        // this.items3 = [
        //   {
        //     label: '订单异常处理',
        //     routerLink: '/pages/tzb/order/order-center/order-manage/order-exception-handle'
        //   }
        // ]
        this.judgStatu();
    };
    OrderManageComponent.prototype.judgStatu = function () {
        var _this = this;
        var url = window.location.href;
        var urlSplit = url.split('/');
        urlSplit.map(function (v) {
            if (v === 'order-query') {
                _this.show = 1;
            }
            else if (v === 'order-exception-handle') {
                _this.show = 2;
            }
            // else if (v === 'voucher-manage') {
            //   this.show = 3;
            // }else if (v === 'voucher-applicate') {
            //   this.show = 4;
            // }else if (v === 'voucher-applicate') {
            //   this.show = 5;
            // }
        });
    };
    OrderManageComponent.prototype.apply = function (num) {
        this.show = num;
    };
    //按钮权限
    OrderManageComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    OrderManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-manage',
            template: __webpack_require__(/*! ./order-manage.component.html */ "./src/app/pages/tzb/order/order-center/order-manage/order-manage.component.html"),
            styles: [__webpack_require__(/*! ./order-manage.component.scss */ "./src/app/pages/tzb/order/order-center/order-manage/order-manage.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], OrderManageComponent);
    return OrderManageComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-manage/order-manage.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-manage/order-manage.module.ts ***!
  \**********************************************************************************/
/*! exports provided: OrderManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderManageModule", function() { return OrderManageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../../service/basis/authority/authority.service */ "./src/app/service/basis/authority/authority.service.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _order_manage_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-manage.routing */ "./src/app/pages/tzb/order/order-center/order-manage/order-manage.routing.ts");
/* harmony import */ var _http_order_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../http/order.http.service */ "./src/app/pages/tzb/order/http/order.http.service.ts");
/* harmony import */ var _order_manage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-manage.component */ "./src/app/pages/tzb/order/order-center/order-manage/order-manage.component.ts");
/* harmony import */ var _order_query_order_query_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order-query/order-query.component */ "./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query.component.ts");
/* harmony import */ var _order_query_order_query_detail_order_query_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-query/order-query-detail/order-query-detail.component */ "./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query-detail/order-query-detail.component.ts");
/* harmony import */ var _order_exception_handle_order_exception_handle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order-exception-handle/order-exception-handle.component */ "./src/app/pages/tzb/order/order-center/order-manage/order-exception-handle/order-exception-handle.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//客户组件



//页面

//订单查询

 //详情
//订单异常处理

// import { VoucherManageComponent } from './voucher-manage/voucher-manage.component';
// import { VoucherAddComponent } from './voucher-manage/voucher-add/voucher-add.component';
// import { VoucherUpdateComponent } from './voucher-manage/voucher-update/voucher-update.component';
// import { VoucherApplicateComponent } from './voucher-applicate/voucher-applicate.component';
// import {ApplicateAddComponent} from './voucher-applicate/applicate-add/applicate-add.component'
// import {ApplicateUpdateComponent} from './voucher-applicate/applicate-update/applicate-update.component'
// import {ApplicateDetailComponent} from './voucher-applicate/applicate-detail/applicate-detail.component'
// import { CustomVoucherManageComponent } from './custom-voucher-manage/custom-voucher-manage.component';
// 订单管理
var OrderManageModule = /** @class */ (function () {
    function OrderManageModule() {
    }
    OrderManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_3__["NgxEchartsModule"],
                _order_manage_routing__WEBPACK_IMPORTED_MODULE_5__["OrderManageRouting"]
            ],
            declarations: [
                _order_manage_component__WEBPACK_IMPORTED_MODULE_7__["OrderManageComponent"],
                _order_exception_handle_order_exception_handle_component__WEBPACK_IMPORTED_MODULE_10__["OrderExceptionHandleComponent"],
                _order_query_order_query_component__WEBPACK_IMPORTED_MODULE_8__["OrderQueryComponent"],
                _order_query_order_query_detail_order_query_detail_component__WEBPACK_IMPORTED_MODULE_9__["OrderQueryDetail"],
            ],
            entryComponents: [],
            providers: [
                _service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_2__["AuthorityService"],
                _http_order_http_service__WEBPACK_IMPORTED_MODULE_6__["OrderHttpService"]
            ]
        })
    ], OrderManageModule);
    return OrderManageModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-manage/order-manage.routing.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-manage/order-manage.routing.ts ***!
  \***********************************************************************************/
/*! exports provided: OrderManageRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderManageRouting", function() { return OrderManageRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_manage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-manage.component */ "./src/app/pages/tzb/order/order-center/order-manage/order-manage.component.ts");
/* harmony import */ var _order_exception_handle_order_exception_handle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-exception-handle/order-exception-handle.component */ "./src/app/pages/tzb/order/order-center/order-manage/order-exception-handle/order-exception-handle.component.ts");
/* harmony import */ var _order_query_order_query_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-query/order-query.component */ "./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query.component.ts");

//页面



// import { VoucherManageComponent } from './voucher-manage/voucher-manage.component';
// import { VoucherApplicateComponent } from './voucher-applicate/voucher-applicate.component';
// import { CustomVoucherManageComponent } from './custom-voucher-manage/custom-voucher-manage.component'
var routes = [
    {
        path: '',
        component: _order_manage_component__WEBPACK_IMPORTED_MODULE_1__["OrderManageComponent"],
        children: [
            { path: '', redirectTo: 'order-query', pathMatch: 'full' },
            {
                path: 'order-query', component: _order_query_order_query_component__WEBPACK_IMPORTED_MODULE_3__["OrderQueryComponent"],
            },
            {
                path: 'order-exception-handle', component: _order_exception_handle_order_exception_handle_component__WEBPACK_IMPORTED_MODULE_2__["OrderExceptionHandleComponent"],
            },
        ]
    },
];
var OrderManageRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-manage/order-query/bean/order-query.bean.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-manage/order-query/bean/order-query.bean.ts ***!
  \************************************************************************************************/
/*! exports provided: OrderQueryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderQueryBean", function() { return OrderQueryBean; });
var OrderQueryBean = /** @class */ (function () {
    function OrderQueryBean() {
        //订单头信息
        this.orderHeader = {
            orderNo: '',
            appBranchNo: '',
            appUserId: '',
            queryStartDate: '',
            queryEndDate: '',
            orderStatus: '',
            payStatus: '',
            fulStatus: '',
            settleAcctNo: '',
            minAmt: '',
            maxAmt: '',
            bankNo: '',
            paySeqNo: '',
            tranType: '',
            salesChannelEnumId: '',
            fulSeqNo: ''
        };
        this.orderItems = {
            productCode: '',
        };
        this.pageParam = {
            pageNumber: Number,
            pageSize: Number,
        };
    }
    return OrderQueryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query-detail/order-query-detail.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query-detail/order-query-detail.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">客户号：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.clientNo\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">合同号：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.contractNo\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">借据号：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.duebillNo\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">币种：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.ccy\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">订单金额：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.orderAmt\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">产品编号：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.productCode\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">原交易日期：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.oriTranDate\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">来源渠道：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.sourceChanel\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">订单号：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.orderNo\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">订单状态：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.orderStatus\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">经办机构：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.appBranchNo\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">经办柜员：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.appUserId\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">到期日期：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.matureDate\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">期数：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.period\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">存贷积数比：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.depositRatioPlot\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">计息方式：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.interestMode\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">还款方式：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.repayType\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">结算账号：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.settleAcctNo\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">账户序号：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.acctSerialNo\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">归还利息：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.returnInterest\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">应收本金：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.accountsPrincipalAmt\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">应收利息：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.accountsInterest\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">归还本金：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.returnPrincipalAmt\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">还逾期利息：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.returnOverInterest\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">应收逾期利息：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.accountsOverInterest\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">总挂息利息：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.hangInterestAll\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">违约金：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.breakProAmt\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">收息方式：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.getherInterrestMode\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">免息额度：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.freeIntLimit\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">实收利息：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.paidInterest\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">备注：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.remark\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">挂息日期：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.hangInterestDate\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">交易类型：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.tranType\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">存折号：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.depBookId\" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 content\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">支付状态：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.orderPreferenceStatus \" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"first-query\">\r\n            <div class=\"label\">交付状态：</div>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"list.orderFulfillmentStatus \" disabled=\"true\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-4 ui-g-offset-4 btn\">\r\n    <button pButton type=\"button\" label=\"确定\" class=\"closeBtn\" (click)=\"addCloseBtn()\"></button>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query-detail/order-query-detail.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query-detail/order-query-detail.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .ui-g-6 {\n  text-align: center; }\n  .content .ui-g-6 .first-query .label {\n    width: 150px;\n    display: inline-block;\n    text-align: right;\n    line-height: 35px; }\n  .content .ui-g-6 .first-query input {\n    height: 35px; }\n  .content .ui-g-6 .requireLabel {\n    margin-left: 130px; }\n  .btn {\n  text-align: center; }\n  .btn .saveBtn,\n  .btn .closeBtn {\n    width: 110px;\n    height: 35px;\n    margin-top: 30px; }\n  .btn .saveBtn {\n    margin-right: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL29yZGVyL29yZGVyLWNlbnRlci9vcmRlci1tYW5hZ2Uvb3JkZXItcXVlcnkvb3JkZXItcXVlcnktZGV0YWlsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXG9yZGVyXFxvcmRlci1jZW50ZXJcXG9yZGVyLW1hbmFnZVxcb3JkZXItcXVlcnlcXG9yZGVyLXF1ZXJ5LWRldGFpbFxcb3JkZXItcXVlcnktZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRVEsa0JBQWtCLEVBQUE7RUFGMUI7SUFNZ0IsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7RUFUakM7SUFZZ0IsWUFBWSxFQUFBO0VBWjVCO0lBZ0JZLGtCQUFrQixFQUFBO0VBSTlCO0VBQ0ksa0JBQWtCLEVBQUE7RUFEdEI7O0lBSVEsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTtFQU54QjtJQVNRLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL29yZGVyL29yZGVyLWNlbnRlci9vcmRlci1tYW5hZ2Uvb3JkZXItcXVlcnkvb3JkZXItcXVlcnktZGV0YWlsL29yZGVyLXF1ZXJ5LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8v6K+m5oOFXHJcbi5jb250ZW50IHtcclxuICAgIC51aS1nLTZ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC5maXJzdC1xdWVyeSB7XHJcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmVxdWlyZUxhYmVsIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLnNhdmVCdG4sXHJcbiAgICAuY2xvc2VCdG4ge1xyXG4gICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuICAgIC5zYXZlQnRue1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIC50YWJsZSB7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbi8vICAgICAubW9kaWZ5IHtcclxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbi8vICAgICB9XHJcbi8vIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query-detail/order-query-detail.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query-detail/order-query-detail.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: OrderQueryDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderQueryDetail", function() { return OrderQueryDetail; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_order_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../http/order.http.service */ "./src/app/pages/tzb/order/http/order.http.service.ts");
/* harmony import */ var _bean_order_query_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../bean/order-query.bean */ "./src/app/pages/tzb/order/order-center/order-manage/order-query/bean/order-query.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// 修改
var OrderQueryDetail = /** @class */ (function () {
    function OrderQueryDetail(fb, orderHttpService) {
        this.fb = fb;
        this.orderHttpService = orderHttpService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        //实体
        this.orderQueryBean = new _bean_order_query_bean__WEBPACK_IMPORTED_MODULE_3__["OrderQueryBean"]();
        //表数据
        this.tableData = [];
        //接受调接口后返回的回显数据
        this.list = [];
    }
    OrderQueryDetail.prototype.ngOnInit = function () {
    };
    OrderQueryDetail.prototype.ngOnChanges = function () {
        var _this = this;
        var param = {
            orderNo: this.inValue['orderNo'],
            coreSeqNo: this.inValue['coreSeqNo'],
            clientNo: this.inValue['clientNo'] //客户号
        };
        //详情接口
        this.orderHttpService.queryOrderDetail(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.orderDetailList[0]) {
                    _this.list = data.orderDetailList[0];
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '订单详情回显提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '订单详情回显提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '订单详情回显提示', detail: "调用服务失败" });
        });
    };
    //确定按钮进行关闭
    OrderQueryDetail.prototype.addCloseBtn = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OrderQueryDetail.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OrderQueryDetail.prototype, "outValue", void 0);
    OrderQueryDetail = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'order-query-detail',
            styles: [__webpack_require__(/*! ./order-query-detail.component.scss */ "./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query-detail/order-query-detail.component.scss")],
            template: __webpack_require__(/*! ./order-query-detail.component.html */ "./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query-detail/order-query-detail.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _http_order_http_service__WEBPACK_IMPORTED_MODULE_2__["OrderHttpService"]])
    ], OrderQueryDetail);
    return OrderQueryDetail;
}());



/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 order-query\">\r\n  <header-title [Info]=\"'订单查询'\"></header-title>\r\n  <!-- 查询条件 -->\r\n  <div class=\"ui-g-12 query-criteria\">\r\n    <div class=\"ui-g-4\" [formGroup]=\"userform\">\r\n      <label>订单编号：</label>\r\n      <input type=\"text\" pInputText formControlName=\"orderNo\" name=\"orderNo\" style=\"width:50%;\" [(ngModel)]=\"orderQueryBean.orderHeader.orderNo\">\r\n      <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['orderNo'].valid&&userform.controls['orderNo'].dirty\">\r\n        <span *ngIf=\"userform.hasError('maxlength','orderNo')\">订单编号不能超过20位!</span>\r\n        <span *ngIf=\"userform.hasError('specialSymbol','orderNo')\">订单编号不支持特殊字符！</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" [formGroup]=\"userform\">\r\n      <label>产品编号：</label>\r\n      <input type=\"text\" pInputText formControlName=\"productCode\" name=\"productCode\" style=\"width:50%;\" [(ngModel)]=\"orderQueryBean.orderItems.productCode\">\r\n      <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['productCode'].valid&&userform.controls['productCode'].dirty\">\r\n        <span *ngIf=\"userform.hasError('specialSymbol','productCode')\">产品编号不支持特殊字符！</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <div class=\"ui-g-12\" [formGroup]=\"userform\">\r\n        <label appValidation style=\"width:135px;\">查询时间：</label>\r\n        <p-calendar [(ngModel)]=\"queryStartDate\"  [showButtonBar]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n          yearRange=\"1900:2200\" [showOtherMonths]=\"false\" [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\"\r\n          [style]=\"{'width':'24%'}\" (onSelect)=\"selectTime1()\" formControlName=\"queryStartDate\" name=\"queryStartDate\"></p-calendar>\r\n        至\r\n        <p-calendar [(ngModel)]=\"queryEndDate\"  [showButtonBar]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n          yearRange=\"1900:2200\" [showOtherMonths]=\"false\" [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\"\r\n          [style]=\"{'width':'24%'}\" (onSelect)=\"selectTime2()\" formControlName=\"queryEndDate\" name=\"queryEndDate\"></p-calendar>\r\n        <div class=\"ui-g-12\">\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['queryStartDate'].valid&&userform.controls['queryStartDate'].dirty\">\r\n            <span *ngIf=\"userform.hasError('required','queryStartDate')\">初始日期不能为空!</span>\r\n          </div>\r\n          <div class=\"requireLabel\" style=\"color:red;margin-left:51%\" *ngIf=\"!userform.controls['queryEndDate'].valid&&userform.controls['queryEndDate'].dirty\">\r\n            <span *ngIf=\"userform.hasError('required','queryEndDate')\">截止日期不能为空!</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 query-criteria\">\r\n    <div class=\"ui-g-4\" [formGroup]=\"userform\">\r\n      <label>柜员号：</label>\r\n      <input type=\"text\" pInputText formControlName=\"appUserId\" name=\"appUserId\" style=\"width:50%;\" [(ngModel)]=\"orderQueryBean.orderHeader.appUserId\">\r\n      <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['appUserId'].valid&&userform.controls['appUserId'].dirty\">\r\n        <span *ngIf=\"userform.hasError('specialSymbol','appUserId')\">柜员号不支持特殊字符！</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" [formGroup]=\"userform\">\r\n      <label>核心支付流水号：</label>\r\n      <input type=\"text\" pInputText formControlName=\"paySeqNo\" name=\"paySeqNo\" style=\"width:50%;\" [(ngModel)]=\"orderQueryBean.orderHeader.paySeqNo\">\r\n      <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['paySeqNo'].valid&&userform.controls['paySeqNo'].dirty\">\r\n        <span *ngIf=\"userform.hasError('specialSymbol','paySeqNo')\">核心支付流水号不支持特殊字符！</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" [formGroup]=\"userform\">\r\n      <label>核心交付流水号：</label>\r\n      <input type=\"text\" pInputText formControlName=\"fulSeqNo\" name=\"fulSeqNo\" style=\"width:50%;\" [(ngModel)]=\"orderQueryBean.orderHeader.fulSeqNo\">\r\n      <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['fulSeqNo'].valid&&userform.controls['fulSeqNo'].dirty\">\r\n        <span *ngIf=\"userform.hasError('specialSymbol','fulSeqNo')\">核心交付流水号不支持特殊字符！</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 query-criteria\">\r\n    <div class=\"ui-g-4\">\r\n      <label>订单状态：</label>\r\n      <p-dropdown [options]=\"orderStatus\" [(ngModel)]=\"orderQueryBean.orderHeader.orderStatus\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <label>支付状态：</label>\r\n      <p-dropdown [options]=\"payStatus\" [(ngModel)]=\"orderQueryBean.orderHeader.payStatus\"></p-dropdown>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <label>交付状态：</label>\r\n      <p-dropdown [options]=\"fulStatus\" [(ngModel)]=\"orderQueryBean.orderHeader.fulStatus\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 query-criteria\">\r\n    <div class=\"ui-g-4\" [formGroup]=\"userform\">\r\n      <label>机构号：</label>\r\n      <input type=\"text\" pInputText formControlName=\"appBranchNo\" name=\"appBranchNo\" style=\"width:50%;\" [(ngModel)]=\"orderQueryBean.orderHeader.appBranchNo\">\r\n      <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['appBranchNo'].valid&&userform.controls['appBranchNo'].dirty\">\r\n        <span *ngIf=\"userform.hasError('specialSymbol','appBranchNo')\">机构号不支持特殊字符！</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-4\" [formGroup]=\"userform\">\r\n      <label>账/卡号：</label>\r\n      <input type=\"text\" pInputText formControlName=\"settleAcctNo\" name=\"settleAcctNo\" style=\"width:50%;\" [(ngModel)]=\"orderQueryBean.orderHeader.settleAcctNo\">\r\n      <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['settleAcctNo'].valid&&userform.controls['settleAcctNo'].dirty\">\r\n        <span *ngIf=\"userform.hasError('specialSymbol','settleAcctNo')\">账/卡号不支持特殊字符！</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <div class=\"ui-g-12\" [formGroup]=\"userform\">\r\n        <label>交易金额：</label>\r\n        <input style=\"width:23%;\" type=\"text\" pInputText formControlName=\"minAmt\" name=\"minAmt\" [(ngModel)]=\"orderQueryBean.orderHeader.minAmt\" />\r\n                --\r\n        <input style=\"width:23%;\" type=\"text\" pInputText formControlName=\"maxAmt\" name=\"maxAmt\" [(ngModel)]=\"orderQueryBean.orderHeader.maxAmt\" />\r\n      </div>\r\n      <div class=\"ui-g-12\" [formGroup]=\"userform\">\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['minAmt'].valid&&userform.controls['minAmt'].dirty\">\r\n          <span *ngIf=\"userform.hasError('specialSymbol','minAmt')\">最小金额不支持特殊字符！</span>\r\n        </div>\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['maxAmt'].valid&&userform.controls['maxAmt'].dirty\">\r\n          <span *ngIf=\"userform.hasError('specialSymbol','maxAmt')\">最大金额不支持特殊字符！</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 query-criteria\">\r\n    <div class=\"ui-g-4\">\r\n      <label>交易类型：</label>\r\n      <p-dropdown [options]=\"tranType\" [(ngModel)]=\"orderQueryBean.orderHeader.tranType\"></p-dropdown>\r\n      <!-- <input type=\"text\" pInputText [(ngModel)]=\"orderQueryBean.orderHeader.tranType\" /> -->\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <label>来源渠道：</label>\r\n      <p-dropdown [options]=\"salesChannelEnumId\" [(ngModel)]=\"orderQueryBean.orderHeader.salesChannelEnumId\"></p-dropdown>\r\n      <!-- <input type=\"text\" pInputText [(ngModel)]=\"orderQueryBean.orderHeader.salesChannelEnumId\" /> -->\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <label>银行标识：</label>\r\n      <p-dropdown [options]=\"bankNo\" [(ngModel)]=\"orderQueryBean.orderHeader.bankNo\"></p-dropdown>\r\n      <!-- <input type=\"text\" pInputText [(ngModel)]=\"orderQueryBean.orderItems.bankNo\" /> -->\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"查询\" class=\"queryBtn\" (click)=\"queryClick()\"></button>\r\n    <button pButton type=\"button\" label=\"重置\" class=\"resetBtn\" (click)=\"resetClick()\"></button>\r\n  </div>\r\n  <!--表格-->\r\n  <div class=\"ui-g-12 juery-result\">\r\n    <div class=\"table\" >\r\n      <p-dataTable emptyMessage=\"没有查找到数据\" [value]=\"tableData\" scrollable=\"true\" scrollHeight=\"350px\" >\r\n        <p-column field=\"number\" header='序号' [style]=\"{'width':'60px'}\">\r\n          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <span>{{ri+1}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"orderNo\" header='订单号' [style]=\"{'width':'130px'}\"></p-column>\r\n        <p-column field=\"appBranchNo\" header='经办机构' [style]=\"{'width':'85px'}\"></p-column>\r\n        <p-column field=\"appUserId\" header='经办柜员' [style]=\"{'width':'85px'}\"></p-column>\r\n        <p-column field=\"paySeqNo\" header='核心支付流水号' [style]=\"{'width':'130px'}\"></p-column>\r\n        <p-column field=\"deliverSeqNo\" header='核心交付流水号' [style]=\"{'width':'130px'}\"></p-column>\r\n        <p-column field=\"orderStatus\" header='订单状态' [style]=\"{'width':'85px'}\"></p-column>\r\n        <p-column field=\"paymentStatus\" header='支付状态' [style]=\"{'width':'85px'}\"></p-column>\r\n        <p-column field=\"deliverStatus\" header='交付状态' [style]=\"{'width':'85px'}\"></p-column>\r\n        <p-column field=\"acctNo\" header='交易帐/卡号' [style]=\"{'width':'220px'}\"></p-column>\r\n        <p-column field=\"orderAmt\" header='订单金额' [style]=\"{'width':'140px'}\"></p-column>\r\n        <p-column field=\"oriTranDate\" header='原交易日期' [style]=\"{'width':'135px'}\"></p-column>\r\n        <p-column field=\"productCode\" header='产品编号' [style]=\"{'width':'220px'}\"></p-column>\r\n        <p-column field=\"tranType\" header='交易类型' [style]=\"{'width':'120px'}\"></p-column>\r\n        <p-column field=\"sourceChanel\" header='来源渠道' [style]=\"{'width':'85px'}\"></p-column>\r\n        <p-column field=\"bankSystemType\" header='银行标识' [style]=\"{'width':'85px'}\"></p-column>\r\n        <p-column field=\"errorInfo\" header='错误信息' [style]=\"{'width':'200px'}\"></p-column>\r\n        <!-- <p-column field=\"coreSeqNo\" header='核心流水号'></p-column> -->\r\n        <!-- <p-column field=\"clientNo\" header='客户号'></p-column>\r\n        <p-column field=\"contractNo\" header='合同号'></p-column>\r\n        <p-column field=\"duebillNo\" header='借据号'></p-column>\r\n        <p-column field=\"ccy\" header='币种'></p-column> -->\r\n        <!-- <p-column field=\"operate\" header='操作'>\r\n          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n            <a class=\"detail tabelDetailIco\" (click)=\"detailClick(item)\">详情</a>\r\n          </ng-template>\r\n        </p-column> -->\r\n      </p-dataTable>\r\n    </div>\r\n    <p-paginator first={{first}} rows=\"{{orderQueryBean.pageParam.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[5,10,20,30]\"\r\n      (onPageChange)=\"paginate($event)\"></p-paginator>\r\n  </div>\r\n</div>\r\n\r\n<!-- 弹出框-->\r\n<p-dialog *ngIf=\"display\" [(visible)]=\"display\" modal=\"modal\" width=\"950\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div>\r\n    <order-query-detail *ngIf=\"showModel=='1'\" [inValue]=\"updateValue\" (outValue)=\"detailCall($event)\"></order-query-detail>\r\n  </div>\r\n</p-dialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.order-query {\n  margin-top: 10px;\n  padding: 0;\n  padding-bottom: 50px; }\n.order-query .query-criteria {\n    padding: 0 30px;\n    margin-top: 15px; }\n.order-query .query-criteria label {\n      display: inline-block;\n      width: 150px;\n      text-align: right; }\n.order-query .btn {\n    text-align: center; }\n.order-query .btn .queryBtn,\n    .order-query .btn .resetBtn {\n      width: 100px;\n      margin: 30px; }\n.order-query .juery-result {\n    padding: 0 30px;\n    border-top: 1px solid #9e9d9d; }\n.order-query .juery-result .addBtn {\n      width: 100px;\n      margin-top: 15px; }\n.order-query .juery-result .table {\n      border: 1px solid #bdbdbd;\n      text-align: center;\n      margin: 15px 0; }\n.order-query .juery-result .table .modify {\n        margin-right: 20px; }\n:host/deep/ .order-query .query-criteria .ui-dropdown {\n  width: 50% !important; }\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n/*\r\n *日历组件的样式修改开始\r\n */\n:host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important; }\n:host/deep/ .ui-datepicker select.ui-datepicker-month {\n  width: 40%;\n  font-size: 16px !important; }\n:host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n/*\r\n*日历组件的样式修改结束\r\n*/\n.requireLabel {\n  margin-left: 150px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL29yZGVyL29yZGVyLWNlbnRlci9vcmRlci1tYW5hZ2Uvb3JkZXItcXVlcnkvb3JkZXItcXVlcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3R6Yi9vcmRlci9vcmRlci1jZW50ZXIvb3JkZXItbWFuYWdlL29yZGVyLXF1ZXJ5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXG9yZGVyXFxvcmRlci1jZW50ZXJcXG9yZGVyLW1hbmFnZVxcb3JkZXItcXVlcnlcXG9yZGVyLXF1ZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysb0JBQW9CLEVBQUE7QUFIeEI7SUFLUSxlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7QUFOeEI7TUFRWSxxQkFBcUI7TUFDckIsWUFBWTtNQUNaLGlCQUFpQixFQUFBO0FBVjdCO0lBY1Esa0JBQWtCLEVBQUE7QUFkMUI7O01BaUJZLFlBQVk7TUFDWixZQUFZLEVBQUE7QUFsQnhCO0lBdUJRLGVBQWU7SUFDZiw2QkFBNkIsRUFBQTtBQXhCckM7TUEwQlksWUFBWTtNQUNaLGdCQUFnQixFQUFBO0FBM0I1QjtNQThCWSx5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLGNBQWMsRUFBQTtBQWhDMUI7UUFrQ2dCLGtCQUFrQixFQUFBO0FBS2xDO0VBQ0kscUJBQXFCLEVBQUE7QUFHekI7RUFDSSxxQkFBcUIsRUFBQTtBQUV4Qjs7RURSQztBQ1lEO0VBQ0csVUFBUztFQUNULDBCQUEwQixFQUFBO0FBRzlCO0VBQ0csVUFBUztFQUNULDBCQUEwQixFQUFBO0FBRzdCO0VBQ0csY0FBYSxFQUFBO0FBRWhCOztDRFhDO0FDZUQ7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9vcmRlci9vcmRlci1jZW50ZXIvb3JkZXItbWFuYWdlL29yZGVyLXF1ZXJ5L29yZGVyLXF1ZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLm9yZGVyLXF1ZXJ5IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7IH1cbiAgLm9yZGVyLXF1ZXJ5IC5xdWVyeS1jcml0ZXJpYSB7XG4gICAgcGFkZGluZzogMCAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7IH1cbiAgICAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gIC5vcmRlci1xdWVyeSAuYnRuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAub3JkZXItcXVlcnkgLmJ0biAucXVlcnlCdG4sXG4gICAgLm9yZGVyLXF1ZXJ5IC5idG4gLnJlc2V0QnRuIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIG1hcmdpbjogMzBweDsgfVxuICAub3JkZXItcXVlcnkgLmp1ZXJ5LXJlc3VsdCB7XG4gICAgcGFkZGluZzogMCAzMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOWU5ZDlkOyB9XG4gICAgLm9yZGVyLXF1ZXJ5IC5qdWVyeS1yZXN1bHQgLmFkZEJ0biB7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XG4gICAgLm9yZGVyLXF1ZXJ5IC5qdWVyeS1yZXN1bHQgLnRhYmxlIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDE1cHggMDsgfVxuICAgICAgLm9yZGVyLXF1ZXJ5IC5qdWVyeS1yZXN1bHQgLnRhYmxlIC5tb2RpZnkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cblxuOmhvc3QvZGVlcC8gLm9yZGVyLXF1ZXJ5IC5xdWVyeS1jcml0ZXJpYSAudWktZHJvcGRvd24ge1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDsgfVxuXG4vKlxyXG4gKuaXpeWOhue7hOS7tueahOagt+W8j+S/ruaUueW8gOWni1xyXG4gKi9cbjpob3N0L2RlZXAvIC51aS1kYXRlcGlja2VyIHNlbGVjdC51aS1kYXRlcGlja2VyLXllYXIge1xuICB3aWR0aDogNTAlO1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDsgfVxuXG46aG9zdC9kZWVwLyAudWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci1tb250aCB7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50OyB9XG5cbjpob3N0L2RlZXAvIC51aS1idXR0b24udWktYnV0dG9uLXNlY29uZGFyeS51aS1zdGF0ZS1kZWZhdWx0IHtcbiAgY29sb3I6ICNmZmZmZmY7IH1cblxuLypcclxuKuaXpeWOhue7hOS7tueahOagt+W8j+S/ruaUuee7k+adn1xyXG4qL1xuLnJlcXVpcmVMYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDsgfVxuIiwiLy/orqLljZXmn6Xor6JcclxuLm9yZGVyLXF1ZXJ5IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7IC8v5p+l6K+i5p2h5Lu2XHJcbiAgICAucXVlcnktY3JpdGVyaWEge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAucXVlcnlCdG4sXHJcbiAgICAgICAgLnJlc2V0QnRuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSAvL+afpeivoue7k+aenFxyXG4gICAgLmp1ZXJ5LXJlc3VsdCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOWU5ZDlkO1xyXG4gICAgICAgIC5hZGRCdG4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YWJsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgICAgIC5tb2RpZnkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjpob3N0L2RlZXAvIC5vcmRlci1xdWVyeSAucXVlcnktY3JpdGVyaWEgLnVpLWRyb3Bkb3due1xyXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG59XHJcbi8v6KGo5qC85a2X5q+N44CB5pWw5a2X6Ieq5Yqo5o2i6KGMXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGF7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiB9XHJcbiAvKlxyXG4gKuaXpeWOhue7hOS7tueahOagt+W8j+S/ruaUueW8gOWni1xyXG4gKi9cclxuIC8v6YCJ5oup5bm05Lu9XHJcbiA6aG9zdC9kZWVwLyAudWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci15ZWFye1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy/pgInmi6nmnIjku71cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXItbW9udGh7XHJcbiAgIHdpZHRoOjQwJTtcclxuICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy/muIXnqbrjgIHku4rlpKnkuKTkuKrmjInpkq7nmoTlrZfkvZPpopzoibJcclxuOmhvc3QvZGVlcC8gLnVpLWJ1dHRvbi51aS1idXR0b24tc2Vjb25kYXJ5LnVpLXN0YXRlLWRlZmF1bHR7XHJcbiAgIGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuLypcclxuKuaXpeWOhue7hOS7tueahOagt+W8j+S/ruaUuee7k+adn1xyXG4qL1xyXG5cclxuLnJlcXVpcmVMYWJlbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query.component.ts ***!
  \************************************************************************************************/
/*! exports provided: OrderQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderQueryComponent", function() { return OrderQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_order_query_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/order-query.bean */ "./src/app/pages/tzb/order/order-center/order-manage/order-query/bean/order-query.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _http_order_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../http/order.http.service */ "./src/app/pages/tzb/order/http/order.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { bankNo, salesChannelEnumId, tranType } from '../../../constant/codeValue';
//订单查询（订单概要查询）
var OrderQueryComponent = /** @class */ (function () {
    function OrderQueryComponent(orderHttpService, confirmationService, commfunc, fb) {
        this.orderHttpService = orderHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.fb = fb;
        //表数据
        this.tableData = [];
        //下拉框
        this.orderStatus = []; //订单状态
        this.payStatus = []; //支付状态
        this.fulStatus = []; //交付状态
        this.bankNo = []; //银行标识
        this.salesChannelEnumId = []; //来源渠道
        this.tranType = []; //交易类型
        // bean
        this.orderQueryBean = new _bean_order_query_bean__WEBPACK_IMPORTED_MODULE_1__["OrderQueryBean"]();
        //模态框
        this.headerTitle = "详情"; //模态框的标题
        this.display = false; //模态框是否显示
        //修改的参数
        this.updateValue = [];
        this.first = 0;
        //提示信息
        this.msgs = [];
        //日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"]; //讲英文转化为中文
        this.queryStartDate = new Date();
        this.queryEndDate = new Date();
        this.orderQueryBean.pageParam.pageSize = 10;
        this.orderQueryBean.pageParam.pageNumber = 1;
        this.codeValues(); //调用方法，获取全部码值
        this.bankNo = this.code['bankNo'];
        this.salesChannelEnumId = this.code['salesChannelEnumId'];
        this.tranType = this.code['tranType'];
    }
    OrderQueryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.preSet();
        //调查询
        // this.query();
        //订单状态下拉框
        this.orderHttpService.queryOrderStatus({}).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.orderStatus = _this.commfunc.toChangeTree(data.orderStatusList, "description", "orderStatus");
                _this.orderStatus.unshift({ label: "请选择", value: '' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
        //支付状态查询
        this.orderHttpService.queryOrderPayStatus({}).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.payStatus = _this.commfunc.toChangeTree(data.orderPayStatusList, "description", "orderStatus");
                _this.payStatus.unshift({ label: "请选择", value: '' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
        //交付状态查询
        this.orderHttpService.queryOrderFulStatus({}).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.fulStatus = _this.commfunc.toChangeTree(data.orderFulStatusList, "description", "orderStatus");
                _this.fulStatus.unshift({ label: "请选择", value: '' });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
        //按回车键查询
        var _thiss = this;
        document.onkeydown = function (event) {
            if (event && event.keyCode === 13) {
                _thiss.queryClick();
            }
        };
    };
    //码值
    OrderQueryComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    OrderQueryComponent.prototype.preSet = function () {
        //表单校验
        this.userform = this.fb.group({
            'orderNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(20), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["specialSymbol"]])),
            'queryStartDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            'queryEndDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            'appBranchNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["specialSymbol"]])),
            'paySeqNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["specialSymbol"]])),
            'fulSeqNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["specialSymbol"]])),
            'appUserId': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["specialSymbol"]])),
            'productCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["specialSymbol"]])),
            'settleAcctNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["specialSymbol"]])),
            'minAmt': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["specialSymbol"]])),
            'maxAmt': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["specialSymbol"]]))
        });
    };
    //查询点击事件
    OrderQueryComponent.prototype.queryClick = function () {
        var _this = this;
        //校验的
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        //交易金额范围处理
        if (this.orderQueryBean.orderHeader.minAmt && this.orderQueryBean.orderHeader.maxAmt) {
            if (this.orderQueryBean.orderHeader.minAmt > this.orderQueryBean.orderHeader.maxAmt) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '最小交易金额不能大于最大交易金额' });
                setTimeout(function () {
                    _this.orderQueryBean.orderHeader.maxAmt = '';
                });
                return;
            }
        }
        this.orderQueryBean.pageParam.pageNumber = 1;
        this.first = 0;
        this.query();
    };
    //查询
    OrderQueryComponent.prototype.query = function () {
        var _this = this;
        //查询时间
        this.orderQueryBean.orderHeader.queryStartDate = this.commfunc.transDateN(this.queryStartDate);
        this.orderQueryBean.orderHeader.queryEndDate = this.commfunc.transDateN(this.queryEndDate);
        this.orderHttpService.queryOrderList(this.orderQueryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.orderList;
                _this.total = data.pageParam.totalCount + '';
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
    //详情按钮事件
    OrderQueryComponent.prototype.detailClick = function (item) {
        this.headerTitle = '订单详情';
        this.display = true;
        this.showModel = '1';
        this.updateValue = item;
    };
    //详情的回调
    OrderQueryComponent.prototype.detailCall = function (param) {
        this.display = param;
        this.query();
    };
    //分页
    OrderQueryComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.orderQueryBean.pageParam.pageSize = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.orderQueryBean.pageParam.pageNumber = currentPage;
        this.first = event.page * event.rows;
        //调用查询的方法
        this.query();
    };
    //重置
    OrderQueryComponent.prototype.resetClick = function () {
        this.orderQueryBean = new _bean_order_query_bean__WEBPACK_IMPORTED_MODULE_1__["OrderQueryBean"]();
        this.queryStartDate = new Date();
        this.queryEndDate = new Date();
        this.orderQueryBean.pageParam.pageSize = 10;
        this.orderQueryBean.pageParam.pageNumber = 1;
    };
    //日期范围的处理
    OrderQueryComponent.prototype.selectTime1 = function () {
        this.selectTime(1);
    };
    OrderQueryComponent.prototype.selectTime2 = function () {
        this.queryStartDate.getHours() == new Date().getHours() ? this.selectTime(2) : this.selectTime(1);
    };
    OrderQueryComponent.prototype.selectTime = function (a) {
        var _this = this;
        if (this.queryStartDate && this.queryEndDate) {
            if (this.queryStartDate > this.queryEndDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.queryStartDate = null;
                    _this.queryEndDate = null;
                });
            }
            var startTime = this.queryStartDate.getTime();
            var endTime = this.queryEndDate.getTime();
            var time = Math.floor((endTime - startTime) / 1000 / 3600 / 24) + a;
            if (time > 7) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期和结束日期间隔不能大于七天' });
                setTimeout(function () {
                    _this.queryStartDate = null;
                    _this.queryEndDate = null;
                });
            }
        }
    };
    OrderQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-query',
            template: __webpack_require__(/*! ./order-query.component.html */ "./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query.component.html"),
            styles: [__webpack_require__(/*! ./order-query.component.scss */ "./src/app/pages/tzb/order/order-center/order-manage/order-query/order-query.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_order_http_service__WEBPACK_IMPORTED_MODULE_3__["OrderHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], OrderQueryComponent);
    return OrderQueryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=order-manage-order-manage-module.js.map