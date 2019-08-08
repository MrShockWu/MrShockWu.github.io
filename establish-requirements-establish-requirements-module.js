(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["establish-requirements-establish-requirements-module"],{

/***/ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-detail/bean/establish-requirements-detail.bean.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/establish-requirements/establish-requirements-detail/bean/establish-requirements-detail.bean.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: EstablishRequirementsDetailBean, SelectByPageBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablishRequirementsDetailBean", function() { return EstablishRequirementsDetailBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectByPageBean", function() { return SelectByPageBean; });
var EstablishRequirementsDetailBean = /** @class */ (function () {
    function EstablishRequirementsDetailBean() {
    }
    return EstablishRequirementsDetailBean;
}());

var SelectByPageBean = /** @class */ (function () {
    function SelectByPageBean() {
    }
    return SelectByPageBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-detail/establish-requirements-detail.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/establish-requirements/establish-requirements-detail/establish-requirements-detail.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow cont\">\r\n    <header-title [Info]=\"'客户基本信息'\"></header-title>\r\n    <div class=\"cont100\">\r\n        <div class=\"cont25\">\r\n            <div class=\"cont30 textAligin\">\r\n                <span style=\"color:#f00;\"></span>客户号：\r\n            </div>\r\n            <div class=\"cont60\">\r\n                {{bean.custNo}}\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"cont25\">\r\n            <div class=\"cont30 textAligin\">\r\n                <span style=\"color:#f00;\"></span>客户名称：\r\n            </div>\r\n            <div class=\"cont60\">\r\n                {{bean.custName}}\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"cont25\">\r\n            <div class=\"cont30 textAligin\">\r\n                <span style=\"color:#f00;\"></span>证件号码：\r\n            </div>\r\n            <div class=\"cont60\">\r\n                {{bean.globalId}}\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"cont25\">\r\n            <div class=\"cont30 textAligin\">\r\n                <span style=\"color:#f00;\"></span>手机号码：\r\n            </div>\r\n            <div class=\"cont60\">\r\n                {{bean.custPhone}}\r\n            </div>\r\n  \r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 boxShadow cont\">\r\n    <header-title [Info]=\"'客户申请信息'\"></header-title>\r\n    <div class=\"cont100\">\r\n        <div class=\"cont25\">\r\n            <div class=\"cont30 textAligin\">\r\n                <span style=\"color:#f00;\">*</span>产品名称：\r\n            </div>\r\n            <div class=\"cont60\">\r\n                {{bean.productName}}\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"cont25\">\r\n            <div class=\"cont30 textAligin\">\r\n                <span style=\"color:#f00;\">*</span>担保方式：\r\n            </div>\r\n            <div class=\"cont60\">\r\n                {{bean.guaranteeMode|codeValuePie:guaranteeMode}}\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"cont25\">\r\n            <div class=\"cont30 textAligin\">\r\n                <span style=\"color:#f00;\">*</span>申请金额：\r\n            </div>\r\n            <div class=\"cont60\">\r\n                {{bean.loanAmt}}\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"cont25\">\r\n            <div class=\"cont30 textAligin\">\r\n                <span style=\"color:#f00;\">*</span>到期日期：\r\n            </div>\r\n            <div class=\"cont60\">\r\n                {{bean.matureDate}}\r\n            </div>\r\n \r\n        </div>\r\n    </div>\r\n    <div class=\"cont100\">\r\n        <div class=\"cont25\">\r\n            <div class=\"cont30 textAligin\">\r\n                <span style=\"color:#f00;\">*</span>客户来源：\r\n            </div>\r\n            <div class=\"cont60\">\r\n                {{bean.customerSource|codeValuePie:customerSource}}\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g-12 boxShadow cont\">\r\n    <header-title [Info]=\"'征信授权信息'\"></header-title>\r\n    <div class=\"cont100table\">\r\n        <p-dataTable [(value)]=\"tablelist\" [style]=\"{'text-align':'center'}\">\r\n            <p-column field=\"associatesType\" header=\"客户类型\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.associatesType|codeValuePie:associatesTypeListAll}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"associatesCustNo\" header=\"授权人客户号\"></p-column>\r\n            <p-column field=\"associatesEnterName\" header=\"企业名称\" *ngIf=\"associatesExsit\"></p-column>\r\n            <p-column field=\"associatesCreditCode\" header=\"中征码\" *ngIf=\"associatesExsit\"></p-column>\r\n            <p-column field=\"associatesCustName\" header=\"授权人名称\"></p-column>\r\n            <p-column field=\"globalId\" header=\"身份证号码\"></p-column>\r\n            <p-column field=\"associatesCardNo\" header=\"银行卡号\"></p-column>\r\n            <p-column field=\"phoneNo\" header=\"手机号码\"></p-column>\r\n            <p-column field=\"creditReasons\" header=\"征信查询原因\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.creditReasons|codeValuePie:creditReasonsListAll}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"creditStatus\" header=\"状态\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.creditStatus|codeValuePie:creditStatus}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"操作\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"tabelReportIco\" (click)=\"queryZxxxInfo(col)\" *ngIf=\"col.creditStatus == '04'\">查看征信报告</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows=\"{{selectByPageBean.pageSize}}\" totalRecords=\"{{totalNum}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g-12 boxShadow cont\">\r\n    <header-title [Info]=\"'经办人信息'\"></header-title>\r\n    <div class=\"cont100 cont100margin\">\r\n        <div class=\"cont33\">\r\n            <div class=\"cont30 textAligin\">\r\n                <span style=\"color:#f00;\">*</span>经办人：\r\n            </div>\r\n            <div class=\"cont60\">\r\n                {{bean.userName}}\r\n            </div>\r\n  \r\n        </div>\r\n        <div class=\"cont33\">\r\n            <div class=\"cont30 textAligin\">\r\n                <span style=\"color:#f00;\">*</span>经办日期：\r\n            </div>\r\n            <div class=\"cont60\">\r\n                {{bean.applyDate}}\r\n            </div>\r\n    \r\n        </div>\r\n        <div class=\"cont33\">\r\n            <div class=\"cont30 textAligin\">\r\n                <span style=\"color:#f00;\">*</span>经办机构：\r\n            </div>\r\n            <div class=\"cont60\">\r\n                {{bean.orgName}}\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"cont100btn\" *ngIf=\"showBtn\" >\r\n        <button pButton class=\"btn1\" (click)=\"doBack()\" label=\"返回\"></button>\r\n    </div>\r\n</div>\r\n\r\n<!-- 提示 -->\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n\r\n<p-dialog *ngIf=\"reportDisplay\" [(visible)]=\"reportDisplay\" modal=\"true\" class=\"reportTitle\">\r\n    <p-header>征信报告</p-header>\r\n    <establish-requirements-zxbg [custInfo]=\"custInfo\" ></establish-requirements-zxbg>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-detail/establish-requirements-detail.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/establish-requirements/establish-requirements-detail/establish-requirements-detail.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont {\n  box-shadow: none;\n  margin-bottom: 4px;\n  padding-top: 0px;\n  background-color: #fafafa; }\n\n.cont100 {\n  width: 100%;\n  height: 25px;\n  margin: 16px 0px 10px 0px; }\n\n.cont100margin {\n  width: 100%;\n  height: 25px;\n  margin: 26px 0px 30px 0px; }\n\n.cont100table {\n  width: 100%;\n  height: auto;\n  margin: 0px 0px 2px 0px; }\n\n.cont15 {\n  float: left;\n  width: 15%;\n  height: 25px;\n  line-height: 25px; }\n\n.cont20 {\n  float: left;\n  width: 20%;\n  height: 25px;\n  line-height: 25px; }\n\n.cont25 {\n  float: left;\n  width: 25%;\n  height: 25px;\n  line-height: 25px; }\n\n.cont30 {\n  float: left;\n  width: 30%;\n  height: 25px;\n  line-height: 25px;\n  font-size: 14px; }\n\n.cont33 {\n  float: left;\n  width: 33%;\n  height: 25px;\n  line-height: 25px; }\n\n.cont70 {\n  float: left;\n  width: 70%;\n  height: 25px;\n  line-height: 25px; }\n\n.cont10 {\n  float: left;\n  width: 10%;\n  height: 25px;\n  line-height: 25px; }\n\n.cont5 {\n  float: left;\n  width: 5%;\n  height: 25px; }\n\n.cont50 {\n  float: left;\n  width: 50%;\n  height: 25px;\n  line-height: 25px; }\n\n.cont60 {\n  float: left;\n  width: 60%;\n  height: 25px;\n  line-height: 25px; }\n\n.cont40 {\n  float: left;\n  width: 40%;\n  height: 25px;\n  line-height: 25px;\n  font-size: 14px; }\n\n.textAligin {\n  text-align: right; }\n\n.btn {\n  padding: 0px;\n  width: 100px;\n  float: right;\n  height: 25px; }\n\n.cont100btn {\n  width: 100%;\n  height: 25px;\n  margin: 30px 0px 24px 0px;\n  text-align: center; }\n\n.btn1 {\n  padding: 0px;\n  width: 100px;\n  height: 25; }\n\n.btn_color {\n  background: linear-gradient(#ffc107, #ffc107); }\n\n.ui_re {\n  width: 0px;\n  height: 0px;\n  float: left;\n  position: relative; }\n\n.ui_abs {\n  position: absolute;\n  width: 50px;\n  height: 25px;\n  color: #f00;\n  font-size: 13px;\n  line-height: 25px;\n  text-align: center; }\n\n.ui_bx {\n  color: #f00; }\n\n.cont60Cp {\n  float: left;\n  width: 60%;\n  height: 25px; }\n\n.queryinputbtn {\n  width: 100%;\n  float: left;\n  display: flex; }\n\n.queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n\n.queryinputbtn .clickspan {\n    width: 14%;\n    height: 23px;\n    cursor: pointer; }\n\n.cont100btn {\n  width: 100%;\n  height: 25px;\n  margin: 30px 0px 24px 0px;\n  text-align: center; }\n\n.btn1 {\n  padding: 0px;\n  width: 100px;\n  height: 25; }\n\n:host /deep/ .cardStatusAdjustmentProf .ui-dialog.ui-shadow {\n  height: 90% !important; }\n\n:host/deep/ .cardStatusAdjustmentProf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n:host /deep/ .reportTitle .ui-dialog .ui-dialog-titlebar {\n  text-align: center; }\n\n:host /deep/ .reportTitle .ui-dialog .ui-dialog-content {\n  background: #f3f3f4; }\n\n:host/deep/ .reportTitle .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 300px !important; }\n\n:host/deep/ .ui-datatable table {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9lc3RhYmxpc2gtcmVxdWlyZW1lbnRzL2VzdGFibGlzaC1yZXF1aXJlbWVudHMtZGV0YWlsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcZXN0YWJsaXNoLXJlcXVpcmVtZW50c1xcZXN0YWJsaXNoLXJlcXVpcmVtZW50cy1kZXRhaWxcXGVzdGFibGlzaC1yZXF1aXJlbWVudHMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsU0FBUztFQUNULFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFHZDtFQUNJLDZDQUE2QyxFQUFBOztBQUdqRDtFQUNJLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUhqQjtJQUtRLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLDBCQUEwQixFQUFBOztBQVJsQztJQVdRLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZSxFQUFBOztBQUl2QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdkO0VBRUksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHdCQUF3QixFQUFBOztBQUU1QjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9lc3RhYmxpc2gtcmVxdWlyZW1lbnRzL2VzdGFibGlzaC1yZXF1aXJlbWVudHMtZGV0YWlsL2VzdGFibGlzaC1yZXF1aXJlbWVudHMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcblxyXG4uY29udDEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbjogMTZweCAwcHggMTBweCAwcHg7XHJcbn1cclxuXHJcbi5jb250MTAwbWFyZ2luIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luOiAyNnB4IDBweCAzMHB4IDBweDtcclxufVxyXG5cclxuLmNvbnQxMDB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMHB4IDBweCAycHggMHB4O1xyXG59XHJcblxyXG4uY29udDE1IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uY29udDIwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uY29udDI1IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uY29udDMwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY29udDMzIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uY29udDcwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uY29udDEwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uY29udDUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5jb250NTAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5jb250NjAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5jb250NDAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi50ZXh0QWxpZ2luIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLmNvbnQxMDBidG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW46IDMwcHggMHB4IDI0cHggMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuMSB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDI1O1xyXG59XHJcblxyXG4uYnRuX2NvbG9yIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZjMTA3LCAjZmZjMTA3KTtcclxufVxyXG5cclxuLnVpX3JlIHtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udWlfYWJzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgY29sb3I6ICNmMDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnVpX2J4IHtcclxuICAgIGNvbG9yOiAjZjAwO1xyXG59XHJcblxyXG4uY29udDYwQ3Age1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4ucXVlcnlpbnB1dGJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5xdWVyeWlucHV0T3JnIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgICAgICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNsaWNrc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udDEwMGJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbjogMzBweCAwcHggMjRweCAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4xIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMjU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuY2FyZFN0YXR1c0FkanVzdG1lbnRQcm9mIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIC8vIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmNhcmRTdGF0dXNBZGp1c3RtZW50UHJvZiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5yZXBvcnRUaXRsZSAudWktZGlhbG9nIC51aS1kaWFsb2ctdGl0bGViYXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjpob3N0IC9kZWVwLyAucmVwb3J0VGl0bGUgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogI2YzZjNmNDtcclxufVxyXG46aG9zdC9kZWVwLyAucmVwb3J0VGl0bGUgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSB0YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-detail/establish-requirements-detail.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/establish-requirements/establish-requirements-detail/establish-requirements-detail.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: EstablishRequirementsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablishRequirementsDetailComponent", function() { return EstablishRequirementsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_establish_requirements_detail_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/establish-requirements-detail.bean */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-detail/bean/establish-requirements-detail.bean.ts");
/* harmony import */ var _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
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
 * @author fanhualing 2018-8-31 客户申请信息录入
 */






var EstablishRequirementsDetailComponent = /** @class */ (function () {
    function EstablishRequirementsDetailComponent(httpService, commfunc, route, router) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.route = route;
        this.router = router;
        this.bean = new _bean_establish_requirements_detail_bean__WEBPACK_IMPORTED_MODULE_2__["EstablishRequirementsDetailBean"]();
        this.selectByPageBean = new _bean_establish_requirements_detail_bean__WEBPACK_IMPORTED_MODULE_2__["SelectByPageBean"]();
        this.ch = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_CN"];
        this.creditStatus = []; // 征信状态
        this.customerSource = []; //客户来源
        this.guaranteeMode = []; //担保方式
        this.tablelist = [];
        this.totalNum = 0;
        this.first = 0;
        this.theRequest = [];
        this.arrayList = [];
        this.arrayListDetailInfo = [];
        this.showBtn = true;
        this.associatesTypeListAll = []; // 关联类型-所有
        this.creditReasonsListAll = []; // 征信查询原因-所有
        this.fxdjOptions = []; //风险等级码值
        this.panduanOptions = []; //是否码值
        this.showReson = true;
        this.zxxxInfo = []; //征信信息列表
        this.reportDisplay = false;
        this.progress = false;
        this.associatesExsit = false;
        //调用码值
        this.codeValues();
        this.associatesTypeListAll = this.code['associatesTypeListAll'];
        this.creditReasonsListAll = this.code['creditReasonsListAll']; // 征信查询原因-所有
        this.creditStatus = this.code['creditStatusList'];
        this.customerSource = this.code['customerSource'];
        this.guaranteeMode = this.code['GuaranteeModeCustRequest'];
        // 判断报文头有无人员、节点信息-清空
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (s.extParam.specifyNextOpers) {
            delete s.extParam.specifyNextOpers;
        }
        if (s.extParam.specifyNextNode) {
            delete s.extParam.specifyNextNode;
        }
        var commonHeader = s;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        if (this.route.snapshot.params) {
            if (this.route.snapshot.params['taskId']) {
                var url = location.href; //获取url中？后面的参数
                if (url.indexOf(";") != -1) {
                    var str = url.substr(1);
                    var strs = str.split(";");
                    for (var i = 0; i < strs.length; i++) {
                        this.theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
                    }
                }
                this.arrayList = JSON.parse(this.route.snapshot.params['dataMap']);
                this.bean.custRequestId = this.arrayList.custRequestId;
                this.selectByPageBean.custRequestId = this.arrayList.custRequestId;
                this.showBtn = false;
            }
            else {
                this.bean.custRequestId = this.route.snapshot.params.custRequestId;
                this.selectByPageBean.custRequestId = this.route.snapshot.params.custRequestId;
                this.showBtn = true;
            }
        }
        this.selectByPageBean.pageSize = 10;
        this.selectByPageBean.pageNum = 1;
        this.first = 0;
        this.queryBasicInfo();
        this.queryZxsqInfo();
    }
    // 获取码值
    EstablishRequirementsDetailComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    EstablishRequirementsDetailComponent.prototype.ngOnInit = function () {
    };
    // 查询基本信息
    EstablishRequirementsDetailComponent.prototype.queryBasicInfo = function () {
        var _this = this;
        // 查询基本信息
        var ob = this.httpService.getCustRequestInfo({ custRequestId: this.bean.custRequestId });
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                for (var item in data) {
                    if (item && item == 'loanAmt') {
                        var loanAmt = data[item];
                        if (loanAmt && loanAmt.toString().indexOf(",") == -1) {
                            loanAmt = _this.commfunc.formatMoney(loanAmt, 2);
                        }
                        _this.bean[item] = loanAmt;
                    }
                    else {
                        _this.bean[item] = data[item];
                    }
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 查询征信授权信息
    EstablishRequirementsDetailComponent.prototype.queryZxsqInfo = function () {
        var _this = this;
        // 查询服务
        var ob1 = this.httpService.selectCusstRequestAssociatesList(this.selectByPageBean);
        ob1.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                debugger;
                _this.tablelist = data.associatesList == null ? [] : data.associatesList;
                _this.totalNum = data.totalNum;
                var bool_1 = false;
                _this.tablelist.forEach(function (element) {
                    // 判断是否存在企业客户
                    if (element.associatesEnterName && element.associatesEnterName != '' && element.associatesEnterName != null && element.associatesEnterName != undefined
                        || element.associatesCreditCode && element.associatesCreditCode != '' && element.associatesCreditCode != null && element.associatesCreditCode != undefined) {
                        bool_1 = true;
                    }
                });
                if (bool_1) {
                    _this.associatesExsit = true;
                }
                else {
                    _this.associatesExsit = false;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 返回
    EstablishRequirementsDetailComponent.prototype.doBack = function () {
        var paramNo = {
            custNo: this.bean.custNo,
        };
        this.router.navigate(['/pages/tzb/custom/establish-requirements/establish-requirements-query', paramNo]);
    };
    //分页
    EstablishRequirementsDetailComponent.prototype.paginate = function (event) {
        this.selectByPageBean.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.selectByPageBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.selectByPageBean.pageSize;
        this.queryZxsqInfo();
    };
    //征信信息查询
    EstablishRequirementsDetailComponent.prototype.queryZxxxInfo = function (col) {
        if (col.associatesEnterName) { //企业名称有值传中征码
            this.custInfo = { globalId: col.associatesCreditCode, clientType: 'C', associatesCreditCode: col.associatesCreditCode };
            this.reportDisplay = true;
        }
        else { //没值传身份证
            this.custInfo = { globalId: col.globalId, clientType: 'P' };
            this.reportDisplay = true;
        }
    };
    EstablishRequirementsDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'establishRequirementsDetail',
            template: __webpack_require__(/*! ./establish-requirements-detail.component.html */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-detail/establish-requirements-detail.component.html"),
            styles: [__webpack_require__(/*! ./establish-requirements-detail.component.scss */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-detail/establish-requirements-detail.component.scss")],
            providers: [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EstablishRequirementsDetailComponent);
    return EstablishRequirementsDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-query/bean/establish-requirements-query.bean.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/establish-requirements/establish-requirements-query/bean/establish-requirements-query.bean.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: EstablishRequirementsQueryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablishRequirementsQueryBean", function() { return EstablishRequirementsQueryBean; });
var EstablishRequirementsQueryBean = /** @class */ (function () {
    function EstablishRequirementsQueryBean() {
    }
    return EstablishRequirementsQueryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-query/establish-requirements-query.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/establish-requirements/establish-requirements-query/establish-requirements-query.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 查询 -->\r\n<div class=\"ui-g-12 boxShadow cont\">\r\n    <header-title [Info]=\"'客户申请信息'\"></header-title>\r\n    <div class=\"cont100\">\r\n        <div class=\"cont10\"></div>\r\n        <div class=\"cont30\">\r\n            <div class=\"cont40 textAligin\">产品名称：</div>\r\n            <div class=\"cont60Cp\">\r\n                <div class=\"queryinputbtn\">\r\n                    <input type=\"text\" [(ngModel)]=\"prodName\" class=\"queryinputOrg\" pInputText readonly>\r\n                    <div class=\"clickspan\">\r\n                        <a (click)=\"choosePro()\" style=\"cursor: pointer;\">\r\n                            <span>...</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"cont5\"></div>\r\n        <div class=\"cont30\">\r\n            <div class=\"cont40 textAligin\">状态：</div>\r\n            <div class=\"cont60\">\r\n                <p-dropdown [options]=\"statusList\" [(ngModel)]=\"bean.statusId\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"cont5\"></div>\r\n        <div class=\"cont10\">\r\n        </div>\r\n        <div class=\"cont10\"></div>\r\n    </div>\r\n    <div class=\"ui-g-12 btnQuery\">\r\n        <button pButton label=\"查询\" (click)=\"querySecle()\"></button>\r\n        <button pButton label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n</div>\r\n\r\n<!-- 表格 -->\r\n<div class=\"ui-g-12 boxShadow cont\">\r\n    <header-title [Info]=\"'申请登记列表'\"></header-title>\r\n    <div class=\"cont100\">\r\n        <button pButton class=\"btn btn_color\" label=\"新增\" (click)=\"toAdd()\" *ngIf=\"permissionCheck('X_CUST_M_P015_P014_P001')\" ></button>\r\n    </div>\r\n    <div class=\"cont100table\" style=\"overflow-x:scroll;width:100%;text-align:center;margin-top:-10px;\">\r\n        <p-dataTable [(value)]=\"tablelist\" class=\"table\" [emptyMessage]='tabMesg'>\r\n            <p-column field=\"custRequestId\" header=\"流水号\"></p-column>\r\n            <p-column field=\"custAttribute\" header=\"客户类型\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.custAttribute|codeValuePie:custAttribute}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"custNo\" header=\"客户号\" [style]=\"{'width':'10%'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <a href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}\" target=\"_blank\">{{col.custNo}}</a>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n            <p-column field=\"productName\" header=\"产品名称\"></p-column>\r\n            <p-column field=\"guaranteeMode\" header=\"担保方式\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.guaranteeMode|codeValuePie:guaranteeMode}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanAmt\" header=\"申请金额(元)\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.loanAmt | formatMoneyValuePie}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"statusId\" header=\"状态\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.statusId|codeValuePie:statusList}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"userName\" header=\"经办人\"></p-column>\r\n            <p-column field=\"applyDate\" header=\"经办日期\"></p-column>\r\n            <p-column field=\"orgName\" header=\"经办机构\"></p-column>\r\n            <p-column field=\"\" header=\"操作\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n                    <span (click)=\"toDetails(item)\" class=\"tabelDetailIco\">查看</span>\r\n\r\n                    <span (click)=\"toEdit(item)\" class=\"tabelUpdateIco\" *ngIf=\"item.statusId == '00' && permissionCheck('X_CUST_M_P015_P014_P003')\">修改</span>\r\n                    <span class=\"tabelUpdateSetIco\" *ngIf=\"item.statusId != '00'\">修改</span>\r\n\r\n                    <span (click)=\"toDelete(item)\" class=\"tabelDeleteIco\" *ngIf=\"item.statusId == '00' && permissionCheck('X_CUST_M_P015_P014_P002')\">删除</span>\r\n                    <span class=\"tabelDeleteSetIco\" *ngIf=\"item.statusId != '00'\">删除</span>\r\n\r\n                    <span (click)=\"toVeto(item)\" class=\"tabelVetoIco\" *ngIf=\"item.statusId == '00' && permissionCheck('X_CUST_M_P015_P014_P005')\">否决</span>\r\n                    \r\n                    <span (click)=\"toCommit(item)\" class=\"tabelCommitIco\" *ngIf=\"item.statusId == '00' && isCommitDis && permissionCheck('X_CUST_M_P015_P014_P004')\">提交</span>\r\n                    <span class=\"tabelCommitZhIco\" *ngIf=\"((item.statusId == '00') && (!isCommitDis))\">提交</span>\r\n         \r\n                    <span class=\"tabelSubmitSetIco\" *ngIf=\"item.statusId != '00'\">提交</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator rows={{bean.pageSize}} [first]=\"first\" totalRecords={{totalNum}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n\r\n<!-- 提示 -->\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n\r\n<!-- 选择产品 -->\r\n<p-dialog header=\"选择产品\" *ngIf=\"selectProductDisplay\" [(visible)]=\"selectProductDisplay\" (onHide)=\"closeSetting1()\" modal=\"true\"\r\n    class=\"cardStatusAdjustmentProf\">\r\n    <select-product-component *ngIf=\"selectProductDisplay\" [isCatelog]=\"isCatelog\" (outValue)=\"productCall($event)\"></select-product-component>\r\n</p-dialog>\r\n\r\n<!-- 删除-->\r\n<p-confirmDialog appendTo=\"body\" class=\"backGround\" basezIndex='2' header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"确定\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"取消\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n\r\n<p-dialog styleClass=\"function\" [(visible)]=\"display\" modal=\"modal\" [positionTop]=200 class=\"my-cust-overf\" *ngIf=\"display\"\r\n    (onHide)=\"onHideClose()\">\r\n    <p-header>否决</p-header>\r\n    <!-- 否决 -->\r\n    <ul class=\"veto\" *ngIf=\"display\">\r\n        <li class=\"\">\r\n            <span class=\"veto-tip\">一级原因：</span>\r\n            <div class=\"veto-select\">\r\n                <p-dropdown [options]=\"vetoFirsts\" [(ngModel)]=\"firstVetoReason\" (onChange)=\"vetoChange($event)\"></p-dropdown>\r\n            </div>\r\n        </li>\r\n        <li class=\"\">\r\n            <span class=\"veto-tip\">二级原因：</span>\r\n            <div class=\"veto-select\">\r\n                <!-- 个人因素 -->\r\n                <p-dropdown [options]=\"vetoOption\" [(ngModel)]=\"secondVetoReason\" (onChange)=\"vetoChangeTwoReson($event)\"></p-dropdown>\r\n            </div>\r\n\r\n        </li>\r\n        <li class=\"\" *ngIf=\"bzIsshow\" >\r\n            <span class=\"veto-tip\">备注：</span>\r\n            <div class=\"veto-select\">\r\n                <!-- 个人因素 -->\r\n                <textarea rows=\"3\" pInputTextarea [(ngModel)]=\"comments\" ></textarea>\r\n            </div>\r\n        </li>\r\n        <li class=\"btnVeto\">\r\n            <button pButton type=\"button\" label=\"否决\" class=\"icoColor\" (click)=\"vetoClick()\"></button>\r\n            <button pButton type=\"button\" label=\"取消\" (click)=\"close()\"></button>\r\n        </li>\r\n    </ul>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-query/establish-requirements-query.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/establish-requirements/establish-requirements-query/establish-requirements-query.component.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont {\n  box-shadow: none;\n  margin-bottom: 4px;\n  padding-top: 0px;\n  background-color: #fafafa; }\n\n.cont100 {\n  width: 100%;\n  height: 25px;\n  margin: 16px 0px 10px 0px; }\n\n.cont100table {\n  width: 100%;\n  height: auto;\n  margin: 0px 0px 2px 0px; }\n\n.cont15 {\n  float: left;\n  width: 15%;\n  height: 25px; }\n\n.cont20 {\n  float: left;\n  width: 20%;\n  height: 25px; }\n\n.cont30 {\n  float: left;\n  width: 30%;\n  height: 25px; }\n\n.cont10 {\n  float: left;\n  width: 10%;\n  height: 25px; }\n\n.cont5 {\n  float: left;\n  width: 5%;\n  height: 25px; }\n\n.cont50 {\n  float: left;\n  width: 50%;\n  height: 25px; }\n\n.cont60 {\n  float: left;\n  width: 60%;\n  height: 25px; }\n\n.cont40 {\n  float: left;\n  width: 40%;\n  height: 25px;\n  line-height: 25px;\n  font-size: 14px; }\n\n.textAligin {\n  text-align: right; }\n\n.btn {\n  padding: 0px;\n  width: 100px;\n  float: right;\n  height: 25; }\n\n.btnQuery {\n  text-align: center; }\n\n.btn_color {\n  background: linear-gradient(#ffc107, #ffc107); }\n\n.cont60Cp {\n  float: left;\n  width: 60%;\n  height: 25px; }\n\n.queryinputbtn {\n  width: 100%;\n  float: left;\n  display: flex; }\n\n.queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n\n.queryinputbtn .clickspan {\n    width: 14%;\n    height: 23px;\n    cursor: pointer; }\n\n:host /deep/ .cardStatusAdjustmentProf .ui-dialog.ui-shadow {\n  height: 90% !important; }\n\n:host/deep/ .cardStatusAdjustmentProf .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n:host/deep/ .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n:host/deep/ .isAddDisplay .ui-dialog.ui-shadow {\n  width: 430px !important;\n  height: 250px !important;\n  min-width: 0 !important;\n  min-height: 0 !important;\n  overflow: auto; }\n\n:host/deep/ .ui-datatable table {\n  text-align: center;\n  table-layout: inherit;\n  white-space: nowrap; }\n\n:host/deep/ .my-cust-overf .ui-dialog.ui-shadow {\n  width: 542px !important;\n  height: 400px !important;\n  border-radius: 10px !important;\n  min-width: 0 !important;\n  min-height: 0 !important;\n  padding: 0 !important; }\n\n.veto {\n  width: 356px;\n  margin: auto;\n  margin-top: 10px;\n  list-style-type: none;\n  color: #000;\n  padding: 1em 0;\n  zoom: 1; }\n\n.veto::after {\n    content: '';\n    clear: both; }\n\n.veto li {\n    margin-top: 25px;\n    height: 26px;\n    line-height: 26px; }\n\n.veto li:first-child {\n      margin-top: 0; }\n\n.veto li .veto-tip {\n      display: block;\n      float: left;\n      text-align: right;\n      width: 75px;\n      font-size: 14px; }\n\n.veto li .veto-tip.turn-tip {\n        width: 90px; }\n\n.veto li .veto-select {\n      float: right;\n      width: 270px !important; }\n\n.veto li .veto-select.turn-select {\n        width: 255px !important; }\n\n.btnVeto {\n  text-align: center;\n  margin-left: 18px;\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.btnVeto .icoColor {\n    background: #ffc107; }\n\n.btnVeto .icoColor:hover {\n      background: #ffc107; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9lc3RhYmxpc2gtcmVxdWlyZW1lbnRzL2VzdGFibGlzaC1yZXF1aXJlbWVudHMtcXVlcnkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxlc3RhYmxpc2gtcmVxdWlyZW1lbnRzXFxlc3RhYmxpc2gtcmVxdWlyZW1lbnRzLXF1ZXJ5XFxlc3RhYmxpc2gtcmVxdWlyZW1lbnRzLXF1ZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxTQUFTO0VBQ1QsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdkO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksNkNBQTZDLEVBQUE7O0FBR2pEO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBSGpCO0lBS1Esa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsMEJBQTBCLEVBQUE7O0FBUmxDO0lBV1EsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlLEVBQUE7O0FBSXZCO0VBRUksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGNBQWMsRUFBQTs7QUFJbEI7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIscUJBQW9CLEVBQUE7O0FBRXhCO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxjQUFhO0VBQ2IsT0FBTyxFQUFBOztBQVBYO0lBU1EsV0FBVztJQUNYLFdBQVcsRUFBQTs7QUFWbkI7SUFhUSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQixFQUFBOztBQWZ6QjtNQWlCWSxhQUFhLEVBQUE7O0FBakJ6QjtNQW9CWSxjQUFjO01BQ2QsV0FBVztNQUNYLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsZUFBZSxFQUFBOztBQXhCM0I7UUEwQmdCLFdBQVcsRUFBQTs7QUExQjNCO01BOEJZLFlBQVk7TUFDWix1QkFBdUIsRUFBQTs7QUEvQm5DO1FBaUNnQix1QkFBc0IsRUFBQTs7QUFLdEM7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFKdkI7SUFNUSxtQkFBbUIsRUFBQTs7QUFOM0I7TUFRWSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vZXN0YWJsaXNoLXJlcXVpcmVtZW50cy9lc3RhYmxpc2gtcmVxdWlyZW1lbnRzLXF1ZXJ5L2VzdGFibGlzaC1yZXF1aXJlbWVudHMtcXVlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbn1cclxuXHJcbi5jb250MTAwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luOiAxNnB4IDBweCAxMHB4IDBweDtcclxufVxyXG5cclxuLmNvbnQxMDB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMHB4IDBweCAycHggMHB4O1xyXG59XHJcblxyXG4uY29udDE1IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLmNvbnQyMCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5jb250MzAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uY29udDEwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLmNvbnQ1IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uY29udDUwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLmNvbnQ2MCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5jb250NDAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi50ZXh0QWxpZ2luIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGhlaWdodDogMjU7XHJcbn1cclxuXHJcbi5idG5RdWVyeXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bl9jb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmYzEwNywgI2ZmYzEwNyk7XHJcbn1cclxuXHJcbi5jb250NjBDcCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5xdWVyeWlucHV0YnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLnF1ZXJ5aW5wdXRPcmcge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcclxuICAgICAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2xpY2tzcGFuIHtcclxuICAgICAgICB3aWR0aDogMTQlO1xyXG4gICAgICAgIGhlaWdodDogMjNweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuY2FyZFN0YXR1c0FkanVzdG1lbnRQcm9mIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIC8vIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmNhcmRTdGF0dXNBZGp1c3RtZW50UHJvZiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50e1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdC9kZWVwLyAuaXNBZGREaXNwbGF5IC51aS1kaWFsb2cudWktc2hhZG93e1xyXG4gICAgd2lkdGg6IDQzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSB0YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGluaGVyaXQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbjpob3N0L2RlZXAvIC5teS1jdXN0LW92ZXJmIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA1NDJweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOjAgIWltcG9ydGFudDtcclxufVxyXG4udmV0byB7XHJcbiAgICB3aWR0aDogMzU2cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBwYWRkaW5nOjFlbSAwO1xyXG4gICAgem9vbTogMTtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuICAgIGxpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZldG8tdGlwIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgJi50dXJuLXRpcHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52ZXRvLXNlbGVjdCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICYudHVybi1zZWxlY3R7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoyNTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5idG5WZXRvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OjE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIC5pY29Db2xvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmYzEwNztcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYzEwNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-query/establish-requirements-query.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/establish-requirements/establish-requirements-query/establish-requirements-query.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: EstablishRequirementsQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablishRequirementsQueryComponent", function() { return EstablishRequirementsQueryComponent; });
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_establish_requirements_query_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/establish-requirements-query.bean */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-query/bean/establish-requirements-query.bean.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
/* harmony import */ var app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/common/http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var app_pages_tzb_customCenter_http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/customCenter/http/custom-center.http.service */ "./src/app/pages/tzb/customCenter/http/custom-center.http.service.ts");
/* harmony import */ var app_pages_tzb_customCenter_customer_distribution_bean_business_information_bean__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/customCenter/customer-distribution/bean/business-information.bean */ "./src/app/pages/tzb/customCenter/customer-distribution/bean/business-information.bean.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
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
 * @author fanhualing 2018-8-31 客户请求名单列表查询
 */












var EstablishRequirementsQueryComponent = /** @class */ (function () {
    function EstablishRequirementsQueryComponent(httpService, commfunc, route, confirmationService, router, creditCcmService, commonHttpService, customCenterHttpService, httpViewService) {
        var _this = this;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.route = route;
        this.confirmationService = confirmationService;
        this.router = router;
        this.creditCcmService = creditCcmService;
        this.commonHttpService = commonHttpService;
        this.customCenterHttpService = customCenterHttpService;
        this.httpViewService = httpViewService;
        this.bean = new _bean_establish_requirements_query_bean__WEBPACK_IMPORTED_MODULE_2__["EstablishRequirementsQueryBean"]();
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"]; //表格中无数据时显示的内容
        this.first = 0;
        this.totalNum = 0;
        this.statusList = []; //状态列表
        this.selectProductDisplay = false; //弹出框
        this.isCatelog = true;
        this.associatesType = []; // 关联类型
        this.custAttribute = []; // 客户属性
        this.guaranteeMode = []; //担保方式
        this.display = false;
        this.vetoFirsts = []; //否决的一级原因
        this.personVeto = [];
        this.financeVeto = [];
        this.manageVeto = [];
        this.serveVeto = [];
        this.otherVeto = [];
        this.vetoOption = [];
        this.bzIsshow = false;
        this.isCommitDis = true;
        this.VetoData = [];
        this.postNameVeto = '';
        this.bussinessMap = new app_pages_tzb_customCenter_customer_distribution_bean_business_information_bean__WEBPACK_IMPORTED_MODULE_10__["BussinessMap"]();
        this.appproResultBean = new app_pages_tzb_customCenter_customer_distribution_bean_business_information_bean__WEBPACK_IMPORTED_MODULE_10__["AppproResultBean"]();
        this.subApproveMapBean = new app_pages_tzb_customCenter_customer_distribution_bean_business_information_bean__WEBPACK_IMPORTED_MODULE_10__["SubApproveMapBean"]();
        this.reasonOne = ''; // 否决一级原因
        this.reasonTwo = ''; // 否决二级原因
        //调用码值
        this.codeValues();
        this.custAttribute = this.code['CUST_ATTRIBUTES'];
        this.associatesType = this.code['associatesTypeList'];
        this.statusList = this.code['EstablishRequireStatus'];
        this.guaranteeMode = this.code['GuaranteeModeCustRequest'];
        this.vetoFirsts = this.code['VETOFIRDTS']; //一级原因
        this.personVeto = this.code['personVeto']; //二级原因-个人原因
        this.financeVeto = this.code['financeVeto']; //财务因素
        this.manageVeto = this.code['manageVeto']; //经营因素
        this.serveVeto = this.code['serveVeto']; //服务因素
        this.otherVeto = this.code['otherVeto']; //其他原因
        // 判断报文头有无人员、节点信息-清空
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var postIdparam = s.extParam['postId'];
        if (s.extParam.specifyNextOpers) {
            delete s.extParam.specifyNextOpers;
        }
        if (s.extParam.specifyNextNode) {
            delete s.extParam.specifyNextNode;
        }
        var commonHeader = s;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        if (this.route.snapshot.params) {
            this.bean.custNo = this.route.snapshot.params.custNo;
        }
        this.bean.custRequestTypeId = 'LOAN_REQUEST'; //请求类型标识-申请;
        // 经办人信息
        this.user1 = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.user = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (this.user1.userId) {
            this.userId = this.user1.userId;
        }
        if (this.user1.orgId) {
            this.orgId = this.user1.orgId;
        }
        if (this.user.userName) {
            this.userName = this.user.userName;
        }
        if (this.user.orgName) {
            this.orgName = this.user.orgName;
        }
        // 判断缓存里面有没有custRequestIdSave;
        if (this.commfunc.getSessionDataCH('custRequestIdSave')) {
            this.commfunc.clearSession('custRequestIdSave');
        }
        var Postparam = {
            pageSize: '999999',
            postId: postIdparam,
        };
        this.commonHttpService.queryVaguePostList(Postparam).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                if (data.postList && data.postList.length > 0) {
                    _this.postNameVeto = data.postList[0].postName;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    }
    // 获取码值
    EstablishRequirementsQueryComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    EstablishRequirementsQueryComponent.prototype.ngOnInit = function () {
        this.first = 0;
        this.bean.pageSize = 10;
        this.bean.pageNum = 1;
        this.bean.statusId = '00';
        this.querySecle();
    };
    //按钮权限
    EstablishRequirementsQueryComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    // 初始化表格
    EstablishRequirementsQueryComponent.prototype.querySecle = function () {
        this.bean.pageSize = 10;
        this.bean.pageNum = 1;
        this.first = 0;
        this.doQuery();
    };
    // 查询
    EstablishRequirementsQueryComponent.prototype.doQuery = function () {
        var _this = this;
        // 状态
        if (this.bean.statusId == '' || this.bean.statusId == null) {
            this.bean.statusId = undefined;
        }
        // 产品
        if (this.bean.productNo == '') {
            this.bean.productNo = undefined;
        }
        if (this.bean.productName == '') {
            this.bean.productName = undefined;
        }
        // 查询服务
        var ob = this.httpService.findCustRequestInfoList(this.bean);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tablelist = data.custRequestList == null ? [] : data.custRequestList;
                _this.totalNum = data.totalNum;
                _this.isCommitDis = true;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                _this.isCommitDis = true;
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            _this.isCommitDis = true;
        });
    };
    // 分页
    EstablishRequirementsQueryComponent.prototype.paginate = function (event) {
        this.bean.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.bean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.bean.pageSize;
        this.doQuery();
    };
    // 重置
    EstablishRequirementsQueryComponent.prototype.reset = function () {
        this.bean.productNo = undefined;
        this.bean.productName = undefined;
        this.bean.statusId = undefined;
        this.prodName = undefined;
    };
    // 选择产品
    EstablishRequirementsQueryComponent.prototype.choosePro = function () {
        this.selectProductDisplay = true;
    };
    // 关闭模态框
    EstablishRequirementsQueryComponent.prototype.closeSetting1 = function () {
        this.selectProductDisplay = false;
    };
    // 选择产品回调
    EstablishRequirementsQueryComponent.prototype.productCall = function (event) {
        if (event && event.length > 0) {
            this.prodName = event[0].productName;
            this.bean.productNo = event[0].productId;
            this.bean.productName = event[0].productName;
        }
        this.selectProductDisplay = false;
    };
    // 新增 
    EstablishRequirementsQueryComponent.prototype.toAdd = function () {
        if (this.commfunc.getSessionDataCH('lonkuan')) {
            this.commfunc.clearSession('lonkuan');
        }
        if (this.commfunc.getSessionDataCH('add')) {
            this.commfunc.clearSession('add');
        }
        var paramNo = {
            custNo: this.bean.custNo,
        };
        this.router.navigate(['/pages/tzb/custom/establish-requirements/establish-requirements-save', paramNo]);
    };
    // 详情
    EstablishRequirementsQueryComponent.prototype.toDetails = function (item) {
        var paramNo = {
            custNo: this.bean.custNo,
            custRequestId: item.custRequestId
        };
        this.router.navigate(['/pages/tzb/custom/establish-requirements/establish-requirements-detail', paramNo]);
    };
    // 修改
    EstablishRequirementsQueryComponent.prototype.toEdit = function (item) {
        var paramNo = {
            custNo: this.bean.custNo,
            custRequestId: item.custRequestId
        };
        this.router.navigate(['/pages/tzb/custom/establish-requirements/establish-requirements-save', paramNo]);
    };
    // 提交
    EstablishRequirementsQueryComponent.prototype.toCommit = function (item) {
        var _this = this;
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader['globalSeqNo'] = '';
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        var paramGlob = {};
        this.httpService.createGlobalSeqNo(paramGlob).subscribe(function (datatt) {
            if (datatt.returnCode.code == 'success') {
                var commonHeader_1 = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                commonHeader_1['globalSeqNo'] = datatt.globalSeqNo;
                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
                _this.doSub(item);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: datatt.returnCode.message });
                _this.doSub(item);
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            _this.doSub(item);
        });
    };
    EstablishRequirementsQueryComponent.prototype.doSub = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要提交?',
            accept: function () {
                _this.isCommitDis = false;
                var param = {
                    custRequestId: item.custRequestId,
                    operationType: '03',
                };
                _this.httpService.saveOrUpdateCustRequest(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        commonHeader['globalSeqNo'] = '';
                        _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                        _this.querySecle();
                        _this.router.navigate(['/pages/tzb/custom/reminder-do/backlog-detail/btn-page2/workdesk-page'], { queryParams: { flag: '1', totalNum: '2' } });
                    }
                    else {
                        _this.isCommitDis = true;
                        var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        commonHeader['globalSeqNo'] = '';
                        _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.isCommitDis = true;
                    var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                    commonHeader['globalSeqNo'] = '';
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                });
            }
        });
    };
    // 删除
    EstablishRequirementsQueryComponent.prototype.toDelete = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除?',
            accept: function () {
                var param = {
                    custRequestId: item.custRequestId,
                    operationType: '04',
                };
                _this.httpService.saveOrUpdateCustRequest(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.querySecle();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                });
            }
        });
    };
    // 否决
    EstablishRequirementsQueryComponent.prototype.toVeto = function (item) {
        this.VetoData = [];
        this.VetoData.push(item);
        this.display = true;
        this.custRequestId = item.custRequestId;
    };
    //否决
    EstablishRequirementsQueryComponent.prototype.vetoClick = function () {
        var _this = this;
        if (this.firstVetoReason == '' || this.firstVetoReason == undefined || this.firstVetoReason == null) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请选择一级原因' }];
            return;
        }
        if (this.secondVetoReason == '' || this.secondVetoReason == undefined || this.secondVetoReason == null) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请选择二级原因' }];
            return;
        }
        // 判断是否是-其他
        if (this.secondVetoReason == '4110') {
            if (this.comments == '' || this.comments == undefined || this.comments == null) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '备注不能为空' }];
                return;
            }
        }
        if (this.VetoData[0].chanelType && (this.VetoData[0].chanelType == '2' || this.VetoData[0].chanelType == '1')) {
            var Vetoparam = {
                oneVetoReason: this.firstVetoReason,
                twoVetoReason: this.secondVetoReason,
                applyDate: this.VetoData[0]['applyDate'],
                voteId: this.userId,
                voteOrg: this.orgId,
                votePost: this.postNameVeto,
                voteReason: this.comments,
                custNo: this.VetoData[0]['custNo'],
                globalType: this.VetoData[0]['globalType'],
                globalId: this.VetoData[0]['globalId'],
                loanPurpuse: this.VetoData[0]['loanPurpuse'],
                taskType: this.VetoData[0]['taskType'],
                workEffortId: this.VetoData[0]['workEffortId'],
                requestSeqNo: this.VetoData[0]['custRequestId'],
                dataSource: '02',
                bussType: this.VetoData[0]['bussType'],
            };
            this.customCenterHttpService.voteApplicant(Vetoparam).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.display = false;
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: '否决成功!' }];
                    _this.disposeSchedule();
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
            });
        }
        else {
            var param = {
                custRequestId: this.custRequestId,
                operationType: '05',
                firstVetoReason: this.firstVetoReason,
                secondVetoReason: this.secondVetoReason,
                defeatRemark: this.comments,
                userId: this.userId,
            };
            this.httpService.saveOrUpdateCustRequest(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    // this.display = false;
                    _this.close();
                    _this.querySecle();
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
            });
        }
    };
    //next节点
    EstablishRequirementsQueryComponent.prototype.disposeSchedule = function () {
        var _this = this;
        // 否决原因
        this.vetoFirsts.forEach(function (element) {
            if (element.value == _this.firstVetoReason) {
                _this.reasonOne = element.label;
            }
        });
        if (!this.bzIsshow) { // 无备注-否决原因
            this.vetoOption.forEach(function (element) {
                if (element.value == _this.secondVetoReason) {
                    _this.reasonTwo = element.label;
                }
            });
            this.subApproveMapBean.info = this.reasonOne + ',' + this.reasonTwo;
        }
        else { // 有备注-否决原因
            this.reasonTwo = this.comments;
            this.subApproveMapBean.info = this.reasonOne + ',' + this.comments;
        }
        this.bussinessMap.approve = '1'; // 否决标识
        this.subApproveMapBean.result = '1'; // 否决标识
        this.appproResultBean.bussinessMap = this.bussinessMap;
        this.appproResultBean.userId = this.userId;
        this.appproResultBean.approveMap = this.subApproveMapBean;
        this.appproResultBean.taskId = this.VetoData[0]['taskId'];
        this.customCenterHttpService.bpmNextTask(this.appproResultBean).subscribe(function (data) {
            var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
            if (data.returnCode.code == 'success') {
                _this.close();
                _this.querySecle();
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                _this.close();
                _this.querySecle();
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
            _this.close();
            _this.querySecle();
        });
    };
    // 切换否决原因
    EstablishRequirementsQueryComponent.prototype.vetoChange = function (event) {
        this.comments = '';
        this.bzIsshow = false;
        if (event.value == '06') {
            this.vetoOption = this.personVeto;
        }
        else if (event.value == '07') {
            this.vetoOption = this.financeVeto;
        }
        else if (event.value == '08') {
            this.vetoOption = this.manageVeto;
        }
        else if (event.value == '09') {
            this.vetoOption = this.serveVeto;
        }
        else if (event.value == '10') {
            this.vetoOption = this.otherVeto;
        }
        if (event.value == '') {
            this.secondVetoReason = '';
            this.vetoOption = [];
        }
        else {
            this.secondVetoReason = this.vetoOption[0].value;
        }
    };
    // 切换二级原因
    EstablishRequirementsQueryComponent.prototype.vetoChangeTwoReson = function (event) {
        this.comments = '';
        if (event.value == '4110') {
            this.bzIsshow = true;
        }
        else {
            this.bzIsshow = false;
        }
    };
    EstablishRequirementsQueryComponent.prototype.close = function () {
        this.display = false;
        this.vetoOption = [];
        this.firstVetoReason = '';
        this.secondVetoReason = '';
        this.comments = '';
        this.bzIsshow = false;
    };
    //关闭模态框
    EstablishRequirementsQueryComponent.prototype.onHideClose = function () {
        this.display = false;
        this.vetoOption = [];
        this.firstVetoReason = '';
        this.secondVetoReason = '';
        this.comments = '';
        this.bzIsshow = false;
    };
    EstablishRequirementsQueryComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    EstablishRequirementsQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'establishRequirementsQuery',
            template: __webpack_require__(/*! ./establish-requirements-query.component.html */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-query/establish-requirements-query.component.html"),
            styles: [__webpack_require__(/*! ./establish-requirements-query.component.scss */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-query/establish-requirements-query.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_0__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"], app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_7__["CreditCcmService"], app_pages_tzb_customCenter_http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_9__["CustomCenterHttpService"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_0__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_7__["CreditCcmService"],
            app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_8__["CommonHttpService"],
            app_pages_tzb_customCenter_http_custom_center_http_service__WEBPACK_IMPORTED_MODULE_9__["CustomCenterHttpService"],
            app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_11__["CusViewHttpService"]])
    ], EstablishRequirementsQueryComponent);
    return EstablishRequirementsQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-save/bean/establish-requirements-save.bean.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/establish-requirements/establish-requirements-save/bean/establish-requirements-save.bean.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: EstablishRequirementsSaveBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablishRequirementsSaveBean", function() { return EstablishRequirementsSaveBean; });
var EstablishRequirementsSaveBean = /** @class */ (function () {
    function EstablishRequirementsSaveBean() {
    }
    return EstablishRequirementsSaveBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-save/establish-requirements-save.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/establish-requirements/establish-requirements-save/establish-requirements-save.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 establish-requirement-add\" *ngIf=\"addDisplay\">\r\n    <div class=\"ui-g-12 boxShadow cont\">\r\n        <header-title [Info]=\"'客户基本信息'\"></header-title>\r\n        <div class=\"cont100\">\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\"></span>客户号：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <input type=\"text\" [(ngModel)]=\"bean.custNo\" pInputText disabled>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='customerNoDispaly'>\r\n                    <div class=\"ui_abs\">*必填</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\"></span>客户名称：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <input type=\"text\" [(ngModel)]=\"bean.custName\" pInputText disabled>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='customerNameDispaly'>\r\n                    <div class=\"ui_abs\">*必填</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\"></span>证件号码：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <input type=\"text\" [(ngModel)]=\"bean.globalId\" pInputText disabled>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='certificatesNoDispaly'>\r\n                    <div class=\"ui_abs\">*必填</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"cont100\">\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\"></span>手机号码：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <input type=\"text\" [(ngModel)]=\"bean.custPhone\" pInputText disabled>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='phoneNoDispaly'>\r\n                    <div class=\"ui_abs\">*必填</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 boxShadow cont\">\r\n        <header-title [Info]=\"'客户申请信息'\"></header-title>\r\n        <div class=\"cont100\">\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\">*</span>产品名称：\r\n                </div>\r\n                <div class=\"cont60Cp\">\r\n                    <div class=\"queryinputbtn\">\r\n                        <input type=\"text\" [(ngModel)]=\"prodName\" class=\"queryinputOrg\" pInputText readonly>\r\n                        <div class=\"clickspan\">\r\n                            <a (click)=\"choosePro()\" style=\"cursor: pointer;\">\r\n                                <span>...</span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='productNameDispaly'>\r\n                    <div class=\"ui_abs\">*必选</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\">*</span>担保方式：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <p-dropdown [options]=\"guaranteeMode\" placeholder=\"请选择\" class=\"establishDrop\" [(ngModel)]=\"bean.guaranteeMode\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='guaranteeModeDispaly'>\r\n                    <div class=\"ui_abs\">*必选</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\">*</span>申请金额(元)：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <input type=\"text\" [(ngModel)]=\"bean.loanAmt\" pInputText (keyup)=\"docheck(bean.loanAmt)\" (blur)=\"onKeyupNumber()\">\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='applicationAmountDispaly'>\r\n                    <div class=\"ui_abs\">*必填</div>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n        <div class=\"cont100\">\r\n                <div class=\"cont33\">\r\n                        <div class=\"cont30 textAligin\">\r\n                            <span style=\"color:#f00;\">*</span>到期日期：\r\n                        </div>\r\n                        <div class=\"cont60\">\r\n                            <p-calendar [(ngModel)]=\"matureDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" [showIcon]=\"true\"\r\n                                dateFormat=\"yy-mm-dd\" [showOtherMonths]=\"false\" [locale]=\"ch\" (onSelect)=\"showDataTime('matureDate')\"\r\n                                (onBlur)=\"handInputDate('matureDate')\" class=\"establishcalendar\"></p-calendar>\r\n                        </div>\r\n                        <div class=\"ui_re\" *ngIf='expireDateDispaly'>\r\n                            <div class=\"ui_abs\">*必填</div>\r\n                        </div>\r\n                    </div>\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\">*</span>客户来源：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <p-dropdown [options]=\"customerSourceOption\" placeholder=\"请选择\" class=\"establishDrop\" [(ngModel)]=\"bean.customerSource\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='applicationAmountDispaly'>\r\n                    <div class=\"ui_abs\">*必填</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <establish-requirements-zxsq-info [inValue]=\"bean\" (outValue)=\"addCall($event)\"></establish-requirements-zxsq-info>\r\n\r\n    <div class=\"ui-g-12 boxShadow cont\">\r\n        <header-title [Info]=\"'经办人信息'\"></header-title>\r\n        <div class=\"cont100 cont100margin\">\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\">*</span>经办人：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <input type=\"text\" disabled [(ngModel)]=\"userName\" pInputText>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='managerDispaly'>\r\n                    <div class=\"ui_abs\">*必填</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\">*</span>经办日期：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <input type=\"text\" [(ngModel)]=\"applyDate\" pInputText disabled>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='operationDateDispaly'>\r\n                    <div class=\"ui_abs\">*必填</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\">*</span>经办机构：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <input type=\"text\" disabled [(ngModel)]=\"orgName\" pInputText>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='agencyDispaly'>\r\n                    <div class=\"ui_abs\">*必填</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"cont100btn\">\r\n            <button pButton class=\"btn1 btn_color\" label=\"保存\" (click)=\"saveJy()\" *ngIf=\"permissionCheck('X_CUST_M_P015_P014_P007')\"></button>\r\n            <button pButton class=\"btn1 \" (click)=\"doUp()\" label=\"返回\"></button>\r\n            <button pButton class=\"btn1 \" label=\"重置\" (click)=\"reset()\"></button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 establish-requirement-add\" *ngIf=\"upDisplay\">\r\n    <div class=\"ui-g-12 boxShadow cont\">\r\n        <header-title [Info]=\"'客户基本信息'\"></header-title>\r\n        <div class=\"cont100\">\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\"></span>客户号：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <input type=\"text\" [(ngModel)]=\"bean.custNo\" pInputText disabled>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='customerNoDispaly'>\r\n                    <div class=\"ui_abs\">*必填</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\"></span>客户名称：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <input type=\"text\" [(ngModel)]=\"bean.custName\" pInputText disabled>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='customerNameDispaly'>\r\n                    <div class=\"ui_abs\">*必填</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\"></span>证件号码：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <input type=\"text\" [(ngModel)]=\"bean.globalId\" pInputText disabled>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='certificatesNoDispaly'>\r\n                    <div class=\"ui_abs\">*必填</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"cont100\">\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\"></span>手机号码：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <input type=\"text\" [(ngModel)]=\"bean.custPhone\" pInputText disabled>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='phoneNoDispaly'>\r\n                    <div class=\"ui_abs\">*必填</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 boxShadow cont\">\r\n        <header-title [Info]=\"'客户申请信息'\"></header-title>\r\n        <div class=\"cont100\">\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\">*</span>产品名称：\r\n                </div>\r\n                <div class=\"cont60Cp\">\r\n                    <div class=\"queryinputbtn\">\r\n                        <input type=\"text\" [(ngModel)]=\"prodName\" class=\"queryinputOrg\" pInputText readonly>\r\n                        <div class=\"clickspan\">\r\n                            <a (click)=\"choosePro()\" style=\"cursor: pointer;\">\r\n                                <span>...</span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='productNameDispaly'>\r\n                    <div class=\"ui_abs\">*必选</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\">*</span>担保方式：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <p-dropdown [options]=\"guaranteeMode\" placeholder=\"请选择\" class=\"establishDrop\" [(ngModel)]=\"bean.guaranteeMode\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='guaranteeModeDispaly'>\r\n                    <div class=\"ui_abs\">*必选</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\">*</span>申请金额(元)：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <input type=\"text\" [(ngModel)]=\"bean.loanAmt\" pInputText (keyup)=\"docheck(bean.loanAmt)\" (blur)=\"onKeyupNumber()\">\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='applicationAmountDispaly'>\r\n                    <div class=\"ui_abs\">*必填</div>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n        <div class=\"cont100\">\r\n                <div class=\"cont33\">\r\n                        <div class=\"cont30 textAligin\">\r\n                            <span style=\"color:#f00;\">*</span>到期日期：\r\n                        </div>\r\n                        <div class=\"cont60\">\r\n                            <p-calendar [(ngModel)]=\"matureDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" [showIcon]=\"true\"\r\n                                dateFormat=\"yy-mm-dd\" [showOtherMonths]=\"false\" [locale]=\"ch\" (onSelect)=\"showDataTime('matureDate')\"\r\n                                (onBlur)=\"handInputDate('matureDate')\" class=\"establishcalendar\"></p-calendar>\r\n                        </div>\r\n                        <div class=\"ui_re\" *ngIf='expireDateDispaly'>\r\n                            <div class=\"ui_abs\">*必填</div>\r\n                        </div>\r\n                    </div>\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\">*</span>客户来源：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <p-dropdown [options]=\"customerSourceOption\" placeholder=\"请选择\" class=\"establishDrop\" [(ngModel)]=\"bean.customerSource\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='applicationAmountDispaly'>\r\n                    <div class=\"ui_abs\">*必填</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <establish-requirements-zxsq-info [inValue]=\"bean\" (outValue)=\"addCall($event)\"></establish-requirements-zxsq-info>\r\n\r\n    <div class=\"ui-g-12 boxShadow cont\">\r\n        <header-title [Info]=\"'经办人信息'\"></header-title>\r\n        <div class=\"cont100 cont100margin\">\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\">*</span>经办人：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <input type=\"text\" disabled [(ngModel)]=\"userName\" pInputText>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='managerDispaly'>\r\n                    <div class=\"ui_abs\">*必填</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\">*</span>经办日期：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <input type=\"text\" [(ngModel)]=\"applyDate\" pInputText disabled>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='operationDateDispaly'>\r\n                    <div class=\"ui_abs\">*必填</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"cont33\">\r\n                <div class=\"cont30 textAligin\">\r\n                    <span style=\"color:#f00;\">*</span>经办机构：\r\n                </div>\r\n                <div class=\"cont60\">\r\n                    <input type=\"text\" disabled [(ngModel)]=\"orgName\" pInputText>\r\n                </div>\r\n                <div class=\"ui_re\" *ngIf='agencyDispaly'>\r\n                    <div class=\"ui_abs\">*必填</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"cont100btn\">\r\n            <button pButton class=\"btn1 btn_color\" label=\"保存\" (click)=\"saveJy()\" [disabled]=\"isStatus\"></button>\r\n            <button pButton class=\"btn1 \" (click)=\"doUp()\" label=\"返回\" [disabled]=\"isStatus\"></button>\r\n            <button pButton class=\"btn1 \" label=\"重置\" (click)=\"reset()\" [disabled]=\"isStatus\"></button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- 提示 -->\r\n<p-growl [value]=\"msgs\" [baseZIndex]=20></p-growl>\r\n\r\n<!-- 选择产品 -->\r\n<p-dialog header=\"选择产品\" *ngIf=\"selectProductDisplay\" [(visible)]=\"selectProductDisplay\" (onHide)=\"closeSetting1()\" modal=\"true\"\r\n    class=\"cardStatusAdjustmentProf\">\r\n    <select-product-component *ngIf=\"selectProductDisplay\" [disabledPro]=\"disabledPro\"  [isCatelog]=\"isCatelog\" (outValue)=\"productCall($event)\"></select-product-component>\r\n</p-dialog>\r\n\r\n<!-- 员工 -->\r\n<p-dialog *ngIf=\"nodeDisplay\" header=\"选择客群\" [style]=\"{'width':'900px'}\" [(visible)]=\"nodeDisplay\" modal=\"modal\" [responsive]=\"true\"\r\n    (onHide)=\"closeNode()\">\r\n    <!-- 提示 -->\r\n    <p-growl [value]=\"msgs_1\"></p-growl>\r\n    <div class=\"ui-g-12 base-table\">\r\n        <p-dataTable [value]=\"nodeList\" [scrollable]=\"true\" [style]=\"{'text-align':'center'}\" [emptyMessage]=\"'暂无数据'\">\r\n            <p-column header=\"选择\" field=\"\" [style]=\"{'text-align':'center','width':'8%'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-radioButton name=\"group1\" [value]=\"col.projectId\" [(ngModel)]=\"checkOneNode\"></p-radioButton>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"供应链协议编号\" field=\"projectId\"></p-column>\r\n            <p-column header=\"供应链协议名称\" field=\"projectName\"></p-column>\r\n            <p-column header=\"供应链客群编号\" field=\"partyClassificationGroupId\"></p-column>\r\n            <p-column header=\"协议利率(‰)\" field=\"interest\"></p-column>\r\n        </p-dataTable>\r\n        <div class=\"ui-g-12\" style=\"text-align:center\">\r\n            <button pButton label=\"确定\" (click)=\"doSubmitNode()\"></button>\r\n        </div>\r\n    </div>\r\n</p-dialog>\r\n\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"继续提交\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"返回修改\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n<p-dialog header=\"提示\" *ngIf=\"isAddDisplay\" [(visible)]=\"isAddDisplay\" modal=\"true\" class=\"isAddDisplay\">\r\n    <div>{{message}}</div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-save/establish-requirements-save.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/establish-requirements/establish-requirements-save/establish-requirements-save.component.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont {\n  box-shadow: none;\n  margin-bottom: 4px;\n  padding-top: 0px;\n  background-color: #fafafa; }\n\n.cont100 {\n  width: 100%;\n  height: 25px;\n  margin: 16px 0px 10px 0px; }\n\n.cont100margin {\n  width: 100%;\n  height: 25px;\n  margin: 26px 0px 30px 0px; }\n\n.cont100table {\n  width: 100%;\n  height: auto;\n  margin: 0px 0px 2px 0px; }\n\n.cont15 {\n  float: left;\n  width: 15%;\n  height: 25px; }\n\n.cont20 {\n  float: left;\n  width: 20%;\n  height: 25px; }\n\n.cont25 {\n  float: left;\n  width: 25%;\n  height: 25px; }\n\n.cont30 {\n  float: left;\n  width: 38%;\n  height: 25px;\n  line-height: 25px;\n  font-size: 14px; }\n\n.cont33 {\n  float: left;\n  width: 33%;\n  height: 25px; }\n\n.cont70 {\n  float: left;\n  width: 70%;\n  height: 25px; }\n\n.cont10 {\n  float: left;\n  width: 10%;\n  height: 25px; }\n\n.cont5 {\n  float: left;\n  width: 5%;\n  height: 25px; }\n\n.cont50 {\n  float: left;\n  width: 50%;\n  height: 25px; }\n\n.cont60 {\n  float: left;\n  width: 44%;\n  height: 25px; }\n\n.cont40 {\n  float: left;\n  width: 40%;\n  height: 25px;\n  line-height: 25px;\n  font-size: 14px; }\n\n.textAligin {\n  text-align: right; }\n\n.btn {\n  padding: 0px;\n  width: 100px;\n  float: right;\n  height: 25px; }\n\n.cont100btn {\n  width: 100%;\n  height: 25px;\n  margin: 30px 0px 24px 0px;\n  text-align: center; }\n\n.btn1 {\n  padding: 0px;\n  width: 100px;\n  height: 25; }\n\n.btn_color {\n  background: linear-gradient(#ffc107, #ffc107); }\n\n.ui_re {\n  width: 0px;\n  height: 0px;\n  float: left;\n  position: relative; }\n\n.ui_abs {\n  position: absolute;\n  width: 50px;\n  height: 25px;\n  color: #f00;\n  font-size: 13px;\n  line-height: 25px;\n  text-align: center; }\n\n.ui_bx {\n  color: #f00; }\n\n.cont60Cp {\n  float: left;\n  width: 44%;\n  height: 25px; }\n\n.queryinputbtn {\n  width: 100%;\n  float: left;\n  display: flex; }\n\n.queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 133px !important; }\n\n.queryinputbtn .clickspan {\n    width: 14%;\n    height: 23px;\n    cursor: pointer;\n    min-width: 25px; }\n\n:host/deep/ .isAddDisplay .ui-dialog.ui-shadow {\n  width: 430px !important;\n  height: 250px !important;\n  min-width: 0 !important;\n  min-height: 0 !important;\n  overflow: auto; }\n\n:host /deep/ .cardStatusAdjustmentProf .ui-dialog.ui-shadow {\n  height: 90% !important; }\n\n:host/deep/ .cardStatusAdjustmentProf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n:host/deep/ .establish-requirement-add .ui-inputtext {\n  font-size: 14px !important;\n  height: 25px !important; }\n\n:host/deep/ .establish-requirement-add .ui-dropdown label.ui-dropdown-label {\n  font-size: 14px !important;\n  height: 25px !important;\n  color: #424242 !important; }\n\n:host/deep/ .establishDrop .ui-dropdown {\n  min-width: 160px !important; }\n\n:host/deep/ .establishcalendar .ui-calendar {\n  background-color: red;\n  min-width: 160px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9lc3RhYmxpc2gtcmVxdWlyZW1lbnRzL2VzdGFibGlzaC1yZXF1aXJlbWVudHMtc2F2ZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGVzdGFibGlzaC1yZXF1aXJlbWVudHNcXGVzdGFibGlzaC1yZXF1aXJlbWVudHMtc2F2ZVxcZXN0YWJsaXNoLXJlcXVpcmVtZW50cy1zYXZlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsU0FBUztFQUNULFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFHZDtFQUNJLDZDQUE2QyxFQUFBOztBQUdqRDtFQUNJLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUhqQjtJQUtRLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLDJCQUEyQixFQUFBOztBQVJuQztJQVdRLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsY0FBYyxFQUFBOztBQUdsQjtFQUVJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLDBCQUEwQjtFQUMxQix1QkFBdUIsRUFBQTs7QUFJM0I7RUFDSSwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHlCQUF5QixFQUFBOztBQUk3QjtFQUNJLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLHFCQUFxQjtFQUNyQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vZXN0YWJsaXNoLXJlcXVpcmVtZW50cy9lc3RhYmxpc2gtcmVxdWlyZW1lbnRzLXNhdmUvZXN0YWJsaXNoLXJlcXVpcmVtZW50cy1zYXZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcblxyXG4uY29udDEwMCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbjogMTZweCAwcHggMTBweCAwcHg7XHJcbn1cclxuXHJcbi5jb250MTAwbWFyZ2luIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luOiAyNnB4IDBweCAzMHB4IDBweDtcclxufVxyXG5cclxuLmNvbnQxMDB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMHB4IDBweCAycHggMHB4O1xyXG59XHJcblxyXG4uY29udDE1IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLmNvbnQyMCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5jb250MjUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uY29udDMwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDM4JTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY29udDMzIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLmNvbnQ3MCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5jb250MTAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uY29udDUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5jb250NTAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uY29udDYwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDQ0JTtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLmNvbnQ0MCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnRleHRBbGlnaW4ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uY29udDEwMGJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIG1hcmdpbjogMzBweCAwcHggMjRweCAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4xIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMjU7XHJcbn1cclxuXHJcbi5idG5fY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmMxMDcsICNmZmMxMDcpO1xyXG59XHJcblxyXG4udWlfcmUge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51aV9hYnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBjb2xvcjogI2YwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udWlfYngge1xyXG4gICAgY29sb3I6ICNmMDA7XHJcbn1cclxuXHJcbi5jb250NjBDcCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0NCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5xdWVyeWlucHV0YnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLnF1ZXJ5aW5wdXRPcmcge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcclxuICAgICAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7IC8vIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTMzcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jbGlja3NwYW4ge1xyXG4gICAgICAgIHdpZHRoOiAxNCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtaW4td2lkdGg6IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5pc0FkZERpc3BsYXkgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDQzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDAgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmNhcmRTdGF0dXNBZGp1c3RtZW50UHJvZiAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICAvLyB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5jYXJkU3RhdHVzQWRqdXN0bWVudFByb2YgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5lc3RhYmxpc2gtcmVxdWlyZW1lbnQtYWRkIC51aS1pbnB1dHRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDsgLy8gY29sb3I6ICM0MjQyNDIgIWltcG9ydGFudDtcclxuICAgIC8vIG1pbi13aWR0aDogMTYwcHg7IC8vIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5lc3RhYmxpc2gtcmVxdWlyZW1lbnQtYWRkIC51aS1kcm9wZG93biBsYWJlbC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM0MjQyNDIgIWltcG9ydGFudDtcclxuICAgIC8vIG1pbi13aWR0aDogMTYwcHg7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5lc3RhYmxpc2hEcm9wIC51aS1kcm9wZG93biB7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5lc3RhYmxpc2hjYWxlbmRhciAudWktY2FsZW5kYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgbWluLXdpZHRoOiAxNjBweCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-save/establish-requirements-save.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/establish-requirements/establish-requirements-save/establish-requirements-save.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: EstablishRequirementsSaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablishRequirementsSaveComponent", function() { return EstablishRequirementsSaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_establish_requirements_save_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/establish-requirements-save.bean */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-save/bean/establish-requirements-save.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.constant */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.constant.ts");
/* harmony import */ var app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/@uisftech/common/service/http.service */ "./src/app/@uisftech/common/service/http.service.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
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
 * @author fanhualing 2018-8-31 客户申请信息录入
 */
















var EstablishRequirementsSaveComponent = /** @class */ (function () {
    function EstablishRequirementsSaveComponent(httpViewService, httpService, commfunc, route, router, decimalPipe, confirmationService, creditCcmService, httpService1) {
        this.httpViewService = httpViewService;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.route = route;
        this.router = router;
        this.decimalPipe = decimalPipe;
        this.confirmationService = confirmationService;
        this.creditCcmService = creditCcmService;
        this.httpService1 = httpService1;
        this.bean = new _bean_establish_requirements_save_bean__WEBPACK_IMPORTED_MODULE_2__["EstablishRequirementsSaveBean"]();
        this.ch = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        this.selectProductDisplay = false; //弹出框
        this.guaranteeMode = []; //担保方式
        this.customerSourceDefault = []; //客户来源固定列表
        this.customerSource = []; //客户来源全部列表
        this.customerSourceOption = []; //客户来源
        this.matureDate = null;
        //定义当前时间
        this.matureDateEnd = null;
        this.isCatelog = true;
        this.isSave = false;
        this.addDisplay = false;
        this.upDisplay = false;
        this.isDaiBan = false;
        this.theRequest = [];
        this.arrayList = [];
        this.arrayListDetailInfo = [];
        this.nodeList = [];
        this.sureBtn = false;
        this.nodeDisplay = false;
        this.StartMonthDate = null;
        this.EndMonthDate = null;
        this.isStatus = false; // 从待办补录(判断客户是否是该主联系人)
        this.isAddDisplay = false;
        this.isDaiBanFlag = '2';
        this.chooseProducts = [];
        this.same = true;
        this.isCheckFlag = false; //校验是否通过
        //added by yuanzhenghe end
        this.disabledPro = false; //按钮置灰  by huj++
        // 判断报文头有无人员、节点信息-清空
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (s.extParam.specifyNextOpers) {
            delete s.extParam.specifyNextOpers;
        }
        if (s.extParam.specifyNextNode) {
            delete s.extParam.specifyNextNode;
        }
        var commonHeader = s;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        // 经办日期
        // this.applyDate = this.commfunc.transDateN(new Date());
        // 码值
        this.codeValues();
        this.customerSourceDefault = this.code['customerSourceDefault'];
        this.customerSource = this.code['customerSource'];
        this.user1 = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.user = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        // 经办人信息
        if (this.user1.userId) {
            this.userId = this.user1.userId;
        }
        if (this.user1.orgId) {
            this.orgId = this.user1.orgId;
        }
        if (this.user.userName) {
            this.userName = this.user.userName;
        }
        if (this.user.orgName) {
            this.orgName = this.user.orgName;
        }
        // url参数
        if (this.route.snapshot.params) { // 修改
            if (this.route.snapshot.params['taskId'] || this.route.snapshot.params['processId']) {
                var url = location.href; //获取url中？后面的参数
                if (url.indexOf(";") != -1) {
                    var str = url.substr(1);
                    var strs = str.split(";");
                    for (var i = 0; i < strs.length; i++) {
                        this.theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
                    }
                }
                this.arrayList = JSON.parse(this.route.snapshot.params['dataMap']);
                this.bean.custRequestId = this.arrayList.custRequestId;
                this.isDaiBan = true;
            }
            else {
                this.isDaiBan = false;
                this.bean.custRequestId = this.route.snapshot.params.custRequestId;
                this.bean.custNo = this.route.snapshot.params.custNo;
            }
        }
        if (!this.applyDate) {
            this.queryNowTime();
        }
        // if (!this.matureDate) {
        //     let endTime = moment(new Date(this.applyDate)).add(5, 'year').format('Y-MM-DD');
        //     this.matureDate =  new Date(endTime);
        //      this.bean.matureDate = this.commfunc.transDateN(this.matureDate); 
        // }
    }
    EstablishRequirementsSaveComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.applyDate) {
            this.queryNowTime();
        }
        this.bean.creditType = '0001'; // 信用卡
        if (!this.isDaiBan) {
            // 判断是否有缓存
            if (this.bean.custRequestId == undefined || this.bean.custRequestId == null || this.bean.custRequestId == "") {
                if (this.commfunc.getSessionDataCH('custRequestIdSave')) {
                    this.bean.custRequestId = this.commfunc.getSessionDataCH('custRequestIdSave');
                }
            }
            // 客户来源，优先取后台返回码值，无知，则取固定值
            var param1 = {
                custNo: this.bean.custNo,
                chanelType: '01',
            };
            // 客户基本信息
            var param = {
                custNo: this.bean.custNo
            };
            this.httpViewService.selectCustBriefInfo(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.bean.custName = data.custName;
                    _this.bean.custPhone = data.contactWay;
                    _this.bean.globalId = data.idenNum;
                    _this.bean.globalType = data.idenType;
                    _this.bean.custAttribute = data.custAttribute;
                    _this.bean.custType = data.custType;
                    _this.bean.signature = data.signature;
                }
            });
            // custRequestId有值则进行修改操作，无值为新增操作
            if (this.bean.custRequestId != undefined && this.bean.custRequestId != '' && this.bean.custRequestId != null) {
                this.upDisplay = true;
                this.addDisplay = false;
                this.customerSourceOption = [];
                this.httpService.selectCustSource(param1).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        if (data.custSource != null && data.custSource != undefined && data.custSource != '') {
                            _this.customerSource.forEach(function (element) {
                                if (element.value == data.custSource) {
                                    _this.customerSourceOption.push(element);
                                }
                            });
                            _this.bean.customerSource = data.custSource;
                            _this.queryDetail();
                        }
                        else {
                            _this.customerSourceOption = _this.customerSourceDefault;
                            _this.queryDetail();
                        }
                    }
                    else {
                        _this.customerSourceOption = _this.customerSourceDefault;
                        _this.queryDetail();
                    }
                }, function (error) {
                    _this.customerSourceOption = _this.customerSourceDefault;
                    _this.queryDetail();
                });
            }
            else {
                this.customerSourceOption = [];
                this.addDisplay = true;
                this.upDisplay = false;
                this.bean.applyDate = this.applyDate;
                this.bean.userId = this.userId;
                this.bean.userName = this.userName;
                this.bean.orgId = this.orgId;
                this.bean.orgName = this.orgName;
            }
        }
        else {
            this.addDisplay = false;
            this.upDisplay = true;
            // 客户基本信息
            if (this.arrayList) {
                this.bean.custNo = this.arrayList.custNo;
                this.bean.custName = this.arrayList.custName;
                this.bean.custPhone = this.arrayList.custPhone;
                this.bean.globalId = this.arrayList.globalId;
                this.bean.globalType = this.arrayList.globalType;
                this.bean.custAttribute = this.arrayList.custAttribute;
                this.queryDetail();
                // 客户基本信息
                if (this.arrayList.custNo != undefined && this.arrayList.custNo != null && this.arrayList.custNo != '') {
                    var paramNo = {
                        custNo: this.arrayList.custNo
                    };
                    this.httpViewService.selectCustBriefInfo(paramNo).subscribe(function (dataman) {
                        if (dataman.returnCode.code == 'success') {
                            if (dataman.principalLinkman != _this.userId) {
                                _this.isDaiBanFlag = '1';
                                _this.isStatus = true;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: '登录者与客户主联系人不一致，无权操作，请先调整客户主联系人' });
                            }
                            else {
                                _this.isDaiBanFlag = '2';
                                _this.isStatus = false;
                            }
                            _this.bean.signature = dataman.signature;
                            _this.bean.globalType = dataman.idenType;
                            _this.bean.custType = dataman.custType;
                            _this.bean.isDaiBanFlag = _this.isDaiBanFlag;
                            _this.bean = lodash__WEBPACK_IMPORTED_MODULE_7__["clone"](_this.bean);
                        }
                    });
                }
            }
        }
    };
    // 获取码值
    EstablishRequirementsSaveComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    // 重置
    EstablishRequirementsSaveComponent.prototype.reset = function () {
        this.bean.productNo = undefined;
        this.bean.productName = undefined;
        this.bean.guaranteeMode = undefined;
        this.bean.loanAmt = undefined;
        this.matureDate = undefined;
        this.bean.matureDate = undefined;
        this.bean.customerSource = undefined;
        this.prodId = undefined;
        this.prodName = undefined;
    };
    //申请金额校验
    EstablishRequirementsSaveComponent.prototype.onKeyupNumber = function () {
        if (this.bean.loanAmt) {
            this.bean.loanAmt = this.commfunc.transform(this.bean.loanAmt) + '';
        }
        // 校验金额上下限
        if (this.minJe) {
            if (parseInt(this.bean.loanAmt) < parseInt(this.minJe)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '申请金额最低金额不能低于' + this.minJe + '!' });
                return;
            }
        }
        if (this.maxJe) {
            if (parseInt(this.bean.loanAmt) > parseInt(this.maxJe)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '申请金额最高金额不能高于' + this.maxJe + '!' });
                return;
            }
        }
        var regAmtJy = /^([1-9][0-9]*[0]{2})?$/;
        if (!regAmtJy.test(this.bean.loanAmt) && parseInt(this.bean.loanAmt) != 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '申请金额必须为100的整数倍!' });
            return;
        }
        this.bean.loanAmt = this.decimalPipe.transform(this.bean.loanAmt, '1.2-2'); //申请金额
        // this.advanceCp();
    };
    // 分层信息，提示
    EstablishRequirementsSaveComponent.prototype.saveJy = function () {
        // 1) 判断当前的客户是否为生产经营性客户; 如果为生产经营客户;
        // 当客户的选择产品与分层控制提示的产品不一致时;
        // 点击保存按钮弹出一个界面，弹出界面包含“继续提交”“返回修改”二个按钮;
        // 2) 其他情况，点击保存按钮进入列表页面。
        // if (this.categoryName == '信用卡产品') {//证件类型是否是身份证
        //     if (this.bean.globalType == '0') {
        //         this.advanceCp();
        //     } else {
        //         this.msgs = [];
        //         this.msgs.push({ severity: 'error', summary: '提示', detail: '信用卡产品发起时，客户的证件类型不是身份证，无法新增！' });
        //     }
        // } else {
        this.advanceCp();
        // }
    };
    // 保存
    EstablishRequirementsSaveComponent.prototype.save = function () {
        debugger;
        if (this.prodName == undefined || this.prodName == '' || this.prodName == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择产品！' });
            return;
        }
        if (this.bean.guaranteeMode == undefined || this.bean.guaranteeMode == '' || this.bean.guaranteeMode == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择担保方式！' });
            return;
        }
        if (this.bean.loanAmt == undefined || this.bean.loanAmt == '' || this.bean.loanAmt == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入申请金额！' });
            return;
        }
        else {
            if (this.bean.loanAmt) {
                this.bean.loanAmt = this.commfunc.transform(this.bean.loanAmt) + '';
            }
            var regAmt = /^[0-9]*(\.[0-9]{0,2})?$/;
            if (!regAmt.test(this.bean.loanAmt)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '申请金额输入格式有误！' });
                return;
            }
            // 校验金额上下限
            if (this.minJe) {
                if (parseInt(this.bean.loanAmt) < parseInt(this.minJe)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '申请金额最低金额不能低于' + this.minJe + '!' });
                    return;
                }
            }
            if (this.maxJe) {
                if (parseInt(this.bean.loanAmt) > parseInt(this.maxJe)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '申请金额最高金额不能高于' + this.maxJe + '!' });
                    return;
                }
            }
            var regAmtJy = /^([1-9][0-9]*[0]{2})?$/;
            if (!regAmtJy.test(this.bean.loanAmt) && parseInt(this.bean.loanAmt) != 0) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '申请金额必须为100的整数倍!' });
                return;
            }
        }
        if (this.matureDate == undefined || this.matureDate == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入到期日期！' });
            return;
        }
        if (this.bean.customerSource == undefined || this.bean.customerSource == '' || this.bean.customerSource == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择客户来源！' });
            return;
        }
        this.bean.matureDate = this.commfunc.transDateN(this.matureDate); // 到期日期
        // this.checkPro();
        // 客户申请信息
        this.bean.chanelType = '01'; // 渠道类型 01-前端
        // this.bean.loanAmt = this.decimalPipe.transform(this.bean.loanAmt, '1.2-2');//申请金额 
        this.bean = lodash__WEBPACK_IMPORTED_MODULE_7__["clone"](this.bean);
        this.isSave = true;
    };
    // 校验产品
    EstablishRequirementsSaveComponent.prototype.checkPro = function () {
        var _this = this;
        debugger;
        // 申请金额
        var loanAmt = '';
        if (this.bean.loanAmt) {
            loanAmt = this.commfunc.transform(this.bean.loanAmt) + '';
        }
        else {
            loanAmt = undefined;
        }
        var param = {
            custNo: this.bean.custNo,
            productNo: this.prodId,
            loanAmt: loanAmt,
            matureDate: this.bean.matureDate,
        };
        //by huj start++
        var param_max = {
            custNo: this.bean.custNo,
            currentProductNo: this.prodId
        };
        debugger;
        this.creditCcmService.bussimutexCheck(param_max).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                //是否互斥"  1是,2否
                debugger;
                if (data.mutexFlag != null && data.mutexFlag == '1') {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '该客户已存在其它有效产品,请检查!' });
                    _this.prodName = undefined;
                    _this.prodId = undefined;
                    _this.bean.productNo = undefined;
                    _this.bean.productName = undefined;
                }
                else {
                    _this.httpService.checkProductRule(param).subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
                            // 客户申请信息
                            // this.bean.chanelType = '01'; // 渠道类型 01-前端
                            // this.bean = _.clone(this.bean);
                            // this.isSave = true;
                            _this.queryProType();
                        }
                        else {
                            // 借款人年龄只提示不强控、其他强控
                            if (data.returnCode.code == 'CCP61010' || data.returnCode.code == 'CCP61011') {
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'info', summary: '提示', detail: data.returnCode.message });
                                // 客户申请信息
                                // this.bean.chanelType = '01'; // 渠道类型 01-前端
                                // this.bean = _.clone(this.bean);
                                // this.isSave = true;
                                _this.queryProType();
                            }
                            else {
                                _this.prodName = undefined;
                                _this.prodId = undefined;
                                _this.bean.productNo = undefined;
                                _this.bean.productName = undefined;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                            }
                            // this.bean.loanAmt = this.decimalPipe.transform(this.bean.loanAmt, '1.2-2');//申请金额 
                        }
                    }, function (error) {
                        _this.prodName = undefined;
                        _this.prodId = undefined;
                        _this.bean.productNo = undefined;
                        _this.bean.productName = undefined;
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                    });
                }
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败（产品互斥）!' });
        });
        //by huj end++
    };
    // 回调
    EstablishRequirementsSaveComponent.prototype.addCall = function (event) {
        var _this = this;
        if (this.isSave) {
            if (event.addData > 0) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '当前页面存在未提交的征信授权信息！' });
                return;
            }
            if (event.custRequestIdAdd != undefined && event.custRequestIdAdd != null && event.custRequestIdAdd != '' && event.custRequestIdAdd != "undefined") {
                this.bean.operationType = '02'; // 02-修改
                this.bean.custRequestId = event.custRequestIdAdd; // 客户请求标识
            }
            else {
                this.bean.operationType = '01'; // 01-增加
                if (this.bean.custRequestId) {
                    delete this.bean.custRequestId;
                }
            }
            if (this.bean.loanAmt) {
                this.bean.loanAmt = this.commfunc.transform(this.bean.loanAmt) + '';
            }
            // 删除金额最大值和最小值
            if (this.bean.minAmt) {
                delete this.bean.minAmt;
            }
            if (this.bean.maxAmt) {
                delete this.bean.maxAmt;
            }
            if (this.bean.isDaiBanFlag) {
                delete this.bean.isDaiBanFlag;
            }
            this.httpService.saveOrUpdateCustRequest(this.bean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.bean.custRequestId = data.custRequestId; // 客户请求标识
                    if (_this.bean.operationType == '02') {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: "保存成功！" });
                    }
                    else if (_this.bean.operationType == '01') {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: "保存成功！" });
                    }
                    _this.bean.loanAmt = _this.decimalPipe.transform(_this.bean.loanAmt, '1.2-2'); //申请金额 
                    _this.doUp();
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    _this.bean.loanAmt = _this.decimalPipe.transform(_this.bean.loanAmt, '1.2-2'); //申请金额 
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            });
            this.isSave = false;
            // }
        }
    };
    // 修改详情数据获取
    EstablishRequirementsSaveComponent.prototype.queryDetail = function () {
        var _this = this;
        var param = {
            custRequestId: this.bean.custRequestId
        };
        // 查询服务
        var ob = this.httpService.getCustRequestInfo(param);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.bean.productNo = data.productNo;
                _this.bean.productName = data.productName;
                _this.bean.bussType = data.bussType;
                _this.prodName = data.productName;
                _this.bean.guaranteeMode = data.guaranteeMode;
                _this.loanAmt = data.loanAmt + '';
                _this.bean.loanAmt = _this.decimalPipe.transform(_this.loanAmt, '1.2-2'); //申请金额
                _this.bean.customerSource = data.customerSource;
                // 到期日期
                if (data.matureDate) {
                    _this.matureDate = new Date(data.matureDate);
                    _this.bean.matureDate = data.matureDate;
                }
                else {
                    _this.matureDate = null;
                    _this.bean.matureDate = null;
                }
                // 申请日期
                _this.bean.applyDate = data.applyDate;
                // 经办人信息
                _this.bean.orgId = _this.orgId;
                _this.bean.orgName = _this.orgName;
                _this.orgName = _this.orgName;
                _this.bean.userId = _this.userId;
                _this.bean.userName = _this.userName;
                _this.userName = _this.userName;
                _this.bean.chanelType = data.chanelType;
                // 金链条融资协议编号、客群编号
                _this.bean.groupId = data.groupId;
                _this.bean.goldChainId = data.goldChainId;
                if (_this.bean.productNo != undefined && _this.bean.productNo != null && _this.bean.productNo != '') {
                    _this.prodId = _this.bean.productNo;
                    _this.getProInfo(_this.bean.productNo);
                    _this.getProType();
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 取消+保存（返回上一页面）
    EstablishRequirementsSaveComponent.prototype.doUp = function () {
        var _this = this;
        setTimeout(function () {
            var paramNo = {
                custNo: _this.bean.custNo
            };
            _this.router.navigate(['/pages/tzb/custom/establish-requirements/establish-requirements-query', paramNo]);
        }, 500);
    };
    // 校验申请金额
    EstablishRequirementsSaveComponent.prototype.docheck = function (param) {
        if (this.bean.loanAmt != '' && this.bean.loanAmt != null && this.bean.loanAmt != undefined) {
            var regAmt = /^[0-9]*(\.[0-9]{0,2})?$/;
            if (!regAmt.test(param)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '申请金额输入格式有误！' });
                return;
            }
        }
    };
    // 根据客户选择产品和金额进行推荐-客户分层查询
    EstablishRequirementsSaveComponent.prototype.advanceCp = function () {
        var _this = this;
        this.same = true;
        if (this.bean.loanAmt) {
            this.bean.loanAmt = this.commfunc.transform(this.bean.loanAmt) + '';
        }
        var paramAdvicepro = {
            partyId: this.bean.custNo,
            custName: this.bean.custName,
            globalId: this.bean.globalId,
            orgCode: this.orgId,
            requestAmt: this.bean.loanAmt,
            businessType: this.bean.bussType,
            customerAttribute: this.bean.custAttribute,
            custType: this.bean.custType,
            globalType: this.bean.globalType,
            signatureType: "LC",
            signature: this.bean.signature,
        };
        this.httpService.customerSegmentation(paramAdvicepro).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // 如果有值
                debugger;
                if (data.description != null && data.description != '' && data.description != undefined) {
                    _this.same = false;
                    _this.messageInfo = '建议该客户发放' + data.description + '产品。';
                    // this.msgs = [];
                    // this.msgs.push({ severity: 'info', summary: '提示', detail: '建议该客户发放' + data.description + '产品，请检查！' });
                }
                if (_this.bean.custAttribute == '2' && !_this.same) {
                    _this.confirmationService.confirm({
                        message: _this.messageInfo,
                        accept: function () {
                            _this.save();
                        }
                    });
                }
                else {
                    _this.save();
                }
                _this.bean.loanAmt = _this.decimalPipe.transform(_this.bean.loanAmt, '1.2-2'); //申请金额
            }
            else {
                _this.bean.loanAmt = _this.decimalPipe.transform(_this.bean.loanAmt, '1.2-2'); //申请金额
            }
        });
    };
    // 选择产品
    EstablishRequirementsSaveComponent.prototype.choosePro = function () {
        debugger;
        this.selectProductDisplay = true;
    };
    // 关闭模态框
    EstablishRequirementsSaveComponent.prototype.closeSetting1 = function () {
        this.selectProductDisplay = false;
    };
    // 选择产品回调
    EstablishRequirementsSaveComponent.prototype.productCall = function (event) {
        //判断 业务申请互斥登记
        // 2019000263 信用卡申请登记时控制证件号为18位身份证号，不允许15位身份证号发起申请；信用卡申请时，个人只能为身份证。
        if (event && event.length > 0) {
            debugger;
            this.prodName = event[0].productName;
            this.prodId = event[0].productId;
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择产品' });
            return;
        }
        // 原：查询产品类型  现：先校验
        this.checkPro();
    };
    // 查询产品类型
    EstablishRequirementsSaveComponent.prototype.queryProType = function () {
        var _this = this;
        // 查询产品类型
        var paramproType = {
            productNo: this.prodId,
        };
        //by huj++
        var param_pre = {
            custNo: this.bean.custNo,
            productNo: this.prodId,
        };
        this.disabledPro = true; // huj++
        this.httpService.queryCustProductType(paramproType).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // 产品类型
                debugger;
                var prodType_1 = data.productType;
                // by huj start   update 20170725 信用开不用判断到期在途
                if (prodType_1 == 'loan') {
                    _this.creditCcmService.queryPreCreditByCustNo(param_pre).subscribe(function (data) {
                        if (data.returnCode.code === 'success') {
                            if (data.preflag != null && data.preflag == 'true') {
                                _this.prodName = undefined;
                                _this.prodId = undefined;
                                _this.bean.productNo = undefined;
                                _this.bean.productName = undefined;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: '当前客户存在到期预处理任务未处理结束，不允许新增!' });
                                _this.disabledPro = false; // huj++
                                return;
                            }
                            else {
                                _this.bean.tranType = '03';
                                _this.toAdd(prodType_1);
                                _this.disabledPro = false; // huj++
                            }
                        }
                    }, function (error) {
                        _this.disabledPro = false; // huj++
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败（查询到期预处理在途数据）!' });
                    });
                }
                else {
                    _this.disabledPro = false; // huj++
                    if (prodType_1 == 'credit') {
                        _this.bean.tranType = '04';
                        var param = {
                            custNo: _this.bean.custNo
                        };
                        var params = _this.httpService1.handleParams(param);
                        var erro_1 = '';
                        jquery__WEBPACK_IMPORTED_MODULE_12__["ajax"]({
                            url: app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_15__["TZB_HTTP_CUS"] + app_pages_tzb_custom_http_custom_operation_custom_operation_http_constant__WEBPACK_IMPORTED_MODULE_13__["API"].selectCustBriefInfo,
                            type: 'POST',
                            data: JSON.stringify(params),
                            async: false,
                            headers: {
                                'x-ajax': '1',
                                'Content-Type': 'application/json'
                            },
                            dataType: 'json',
                            success: function (dataVal) {
                                debugger;
                                if (dataVal.returnCode.code == 'success') {
                                    var num = void 0;
                                    num = dataVal.custType;
                                    if (num == '1') { //个人
                                        _this.idenType = dataVal.idenType;
                                        _this.idenNum = dataVal.idenNum;
                                        debugger;
                                        //如果证件类型是身份证
                                        if (_this.idenType == '0') {
                                            debugger;
                                            if (_this.idenNum.length == 15) {
                                                _this.msgs = [];
                                                _this.msgs.push({ severity: 'error', summary: '提示', detail: '信用卡申请登记不允许15位身份证号发起申请' });
                                                _this.reset();
                                                _this.isCheckFlag = true;
                                                return;
                                            }
                                        }
                                        else {
                                            //个人只能为只允许办信用卡的证件类型：身份证0、军官证3、外国护照2、中国护照17、港澳通行证、港澳居民居住证18、台湾居民居住证19、台湾同胞来往内地通行证6 中的一种
                                            if (_this.idenType == '0' || _this.idenType == '2' || _this.idenType == '3' || _this.idenType == '5' || _this.idenType == '6' || _this.idenType == '17' || _this.idenType == '18' || _this.idenType == '19') {
                                                return true;
                                            }
                                            else {
                                                _this.msgs = [];
                                                _this.msgs.push({ severity: 'error', summary: '提示', detail: '信用卡申请人证件类型不符合要求，请确认！' });
                                                _this.reset();
                                                _this.isCheckFlag = true;
                                                return;
                                            }
                                        }
                                    }
                                    else if (num == '2') { //企业
                                        return true;
                                    }
                                }
                                else {
                                    erro_1 = data.returnCode.message;
                                }
                            },
                            error: function (erro) {
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: erro });
                                return;
                            }
                        });
                        if (_this.isCheckFlag) {
                            return;
                        }
                        if (_this.bean.chanelType && (_this.bean.chanelType == '2' || _this.bean.chanelType == '1')) {
                            if (_this.bean.tranType && _this.bean.tranType != '04') {
                                _this.prodName = undefined;
                                _this.prodId = undefined;
                                _this.bean.productNo = undefined;
                                _this.bean.productName = undefined;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: '客户渠道端申请信用卡产品，所选产品与客户申请产品不符' });
                                return;
                            }
                            else {
                                _this.getProductDetail();
                            }
                        }
                        else {
                            _this.getProductDetail();
                        }
                    }
                    else if (prodType_1 == 'loan' || prodType_1 == 'maxAmt') { // add maxAmt by huj+
                        _this.bean.tranType = '03';
                        _this.toAdd(prodType_1);
                    }
                }
                // by huj end 
            }
            else {
                _this.disabledPro = false; // huj++
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.disabledPro = false; // huj++
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    //按钮权限
    EstablishRequirementsSaveComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    EstablishRequirementsSaveComponent.prototype.toAdd = function (type) {
        var _this = this;
        var param = {
            clientNo: this.bean.custNo,
            appUserId: this.userId,
            toProcessingFlag: '0',
            appBranchNo: this.orgId,
        };
        this.creditCcmService.BZ_0200200002504_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.handleFlag == '0' && type != 'maxAmt') {
                    _this.isAddDisplay = true;
                    _this.message = data.reason;
                }
                else {
                    if (_this.bean.chanelType && (_this.bean.chanelType == '2' || _this.bean.chanelType == '1')) {
                        if (_this.bean.tranType && _this.bean.tranType != '04') {
                            _this.prodName = undefined;
                            _this.prodId = undefined;
                            _this.bean.productNo = undefined;
                            _this.bean.productName = undefined;
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: '客户渠道端申请信用卡产品，所选产品与客户申请产品不符' });
                            return;
                        }
                        else {
                            _this.getProductDetail('add');
                        }
                    }
                    else {
                        _this.getProductDetail('add');
                    }
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 查询产品信息
    EstablishRequirementsSaveComponent.prototype.getProductDetail = function (type) {
        var _this = this;
        this.bean.guaranteeMode = undefined;
        this.bean.loanAmt = undefined; // 清空申请金额
        this.bean.customerSource = undefined;
        this.customerSourceOption = [];
        this.guaranteeMode = [];
        this.bean.guaranteeMode = undefined;
        var pro = {
            productId: this.prodId,
            queryType: '9',
        };
        var flag;
        this.httpService.getAvailableProduct(pro).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // 
                var productFeatureTypeList = [];
                var productFeatureList = [];
                var productFeatureListQX = [];
                var productFeatureListJe = [];
                var productFeatureCategoryList = [];
                var productFeatureCategoryWayList = [];
                if (data.productFeatureList && data.productFeatureList.length > 0) {
                    for (var i = 0; i < data.productFeatureList.length; i++) {
                        if (data.productFeatureList[i].productFeatureCategoryId == 'PC00000003') {
                            productFeatureTypeList = data.productFeatureList[i].productFeatureTypeList;
                            break;
                        }
                    }
                    for (var i = 0; i < data.productFeatureList.length; i++) { // 担保方式
                        if (data.productFeatureList[i].productFeatureCategoryId == 'PC00000005') {
                            productFeatureCategoryList = data.productFeatureList[i].productFeatureTypeList;
                            break;
                        }
                    }
                    if (productFeatureTypeList.length > 0) {
                        for (var j = 0; j < productFeatureTypeList.length; j++) {
                            if (productFeatureTypeList[j].productFeatureTypeId == 'PCA0000172') {
                                productFeatureList = productFeatureTypeList[j].productFeatureList;
                                break;
                            }
                        }
                        for (var k = 0; k < productFeatureTypeList.length; k++) {
                            if (productFeatureTypeList[k].productFeatureTypeId == 'PCA0000014') {
                                productFeatureListQX = productFeatureTypeList[k].productFeatureList;
                                break;
                            }
                        }
                        for (var b = 0; b < productFeatureTypeList.length; b++) {
                            if (productFeatureTypeList[b].productFeatureTypeId == 'PCA0000012') {
                                productFeatureListJe = productFeatureTypeList[b].productFeatureList;
                                break;
                            }
                        }
                    }
                    if (productFeatureCategoryList.length > 0) {
                        for (var j = 0; j < productFeatureCategoryList.length; j++) {
                            if (productFeatureCategoryList[j].productFeatureTypeId == 'PCA0000022') {
                                productFeatureCategoryWayList = productFeatureCategoryList[j].productFeatureList;
                                break;
                            }
                        }
                    }
                    if (productFeatureList.length > 0) {
                        for (var m = 0; m < productFeatureList.length; m++) {
                            if (productFeatureList[m].productFeatureLocalCode == '1') {
                                flag = '1';
                                break;
                            }
                        }
                    }
                    // if (productFeatureCategoryWayList.length > 0) {
                    //     this.guaranteeMode = [];
                    //     this.guaranteeMode.push({ label: '请选择', value: '' })
                    //     for (let n = 0; n < productFeatureCategoryWayList.length; n++) {
                    //         this.guaranteeMode.push(
                    //             { label: productFeatureCategoryWayList[n].productFeatureName, value: productFeatureCategoryWayList[n].productFeatureLocalCode }
                    //         )
                    //     }
                    // }
                    if (productFeatureListQX.length > 0) {
                        // 设置期限的最大值和最小值
                        var startMonth = productFeatureListQX[0].min; //过去min个月
                        var endMonth = productFeatureListQX[0].max; //往后max个月
                        var minStartMonth = moment__WEBPACK_IMPORTED_MODULE_9__(new Date(_this.applyDate)).add(startMonth, 'month').format('Y-MM-DD');
                        var MaxEndMonth = moment__WEBPACK_IMPORTED_MODULE_9__(new Date(_this.applyDate)).add(endMonth, 'month').format('Y-MM-DD');
                        var minStartDate = moment__WEBPACK_IMPORTED_MODULE_9__(new Date(minStartMonth)).format('Y-MM-DD');
                        if (startMonth && startMonth != null) {
                            _this.StartMonthDate = new Date(minStartDate);
                        }
                        if (endMonth && endMonth != null) {
                            _this.EndMonthDate = new Date(MaxEndMonth);
                        }
                        if (type) {
                            // this.matureDate = null;
                            // this.bean.matureDate = null;
                            _this.queryProductAttributeList(_this.prodId, 'loan', 'add');
                        }
                        else {
                            // let endTime = moment(new Date(this.applyDate)).add(5, 'year').format('Y-MM-DD');
                            // this.matureDate = new Date(endTime);
                            _this.matureDate = _this.EndMonthDate;
                            _this.bean.matureDate = _this.commfunc.transDateN(_this.matureDate);
                            _this.queryProductAttributeList(_this.prodId, 'credit', 'add');
                        }
                    }
                    if (productFeatureListJe.length > 0) {
                        // 设置金额的最大值和最小值
                        var startminJe = productFeatureListJe[0].min; //最小金额
                        var endmaxJe = productFeatureListJe[0].max; //最大金额
                        if (startminJe && startminJe != null) {
                            _this.minJe = startminJe;
                            _this.bean.minAmt = _this.minJe;
                        }
                        if (endmaxJe && endmaxJe != null) {
                            _this.maxJe = endmaxJe;
                            _this.bean.maxAmt = _this.maxJe;
                        }
                    }
                }
                // if (flag == '1') {
                // 是供应链
                var clientNo = {
                    clientNo: _this.bean.custNo,
                    productCode: _this.prodId,
                };
                _this.httpService.supplyChainCoopAndGroupInfo(clientNo).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.nodeList = data.infoList == null ? [] : data.infoList;
                        if (_this.nodeList.length > 0) {
                            _this.msgs_1 = [];
                            _this.nodeDisplay = true;
                        }
                        else {
                            if (flag == '1') {
                                _this.nodeDisplay = false;
                                _this.prodName = undefined;
                                _this.prodId = undefined;
                                _this.bean.productNo = undefined;
                                _this.bean.productName = undefined;
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: "本客户不允许申请本产品" });
                                return;
                            }
                            else {
                                _this.bean.groupId = undefined;
                                _this.bean.goldChainId = undefined;
                                _this.bean.applyInterestRate = undefined;
                                _this.doShowPro();
                            }
                        }
                    }
                    else {
                        _this.prodName = undefined;
                        _this.prodId = undefined;
                        _this.bean.productNo = undefined;
                        _this.bean.productName = undefined;
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.prodName = undefined;
                    _this.prodId = undefined;
                    _this.bean.productNo = undefined;
                    _this.bean.productName = undefined;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                });
                // } else {
                //     this.bean.groupId = undefined;
                //     this.bean.goldChainId = undefined;
                //     this.bean.applyInterestRate = undefined;
                //     this.doShowPro()
                // }
            }
            else {
                _this.prodName = undefined;
                _this.prodId = undefined;
                _this.bean.productNo = undefined;
                _this.bean.productName = undefined;
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.prodName = undefined;
            _this.prodId = undefined;
            _this.bean.productNo = undefined;
            _this.bean.productName = undefined;
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 查询产品期限
    EstablishRequirementsSaveComponent.prototype.getProInfo = function (proId) {
        var _this = this;
        var pro = {
            productId: proId,
            queryType: '9',
        };
        this.httpService.getAvailableProduct(pro).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // 
                var productFeatureTypeList = [];
                var productFeatureList = [];
                var productFeatureListQX = [];
                var productFeatureCategoryList = [];
                var productFeatureCategoryWayList = [];
                var productFeatureListJe = [];
                if (data.productFeatureList && data.productFeatureList.length > 0) {
                    for (var i = 0; i < data.productFeatureList.length; i++) {
                        if (data.productFeatureList[i].productFeatureCategoryId == 'PC00000003') {
                            productFeatureTypeList = data.productFeatureList[i].productFeatureTypeList;
                            break;
                        }
                    }
                    if (productFeatureTypeList.length > 0) {
                        for (var k = 0; k < productFeatureTypeList.length; k++) {
                            if (productFeatureTypeList[k].productFeatureTypeId == 'PCA0000014') {
                                productFeatureListQX = productFeatureTypeList[k].productFeatureList;
                                break;
                            }
                        }
                        for (var b = 0; b < productFeatureTypeList.length; b++) {
                            if (productFeatureTypeList[b].productFeatureTypeId == 'PCA0000012') {
                                productFeatureListJe = productFeatureTypeList[b].productFeatureList;
                                break;
                            }
                        }
                    }
                    for (var i = 0; i < data.productFeatureList.length; i++) { // 担保方式
                        if (data.productFeatureList[i].productFeatureCategoryId == 'PC00000005') {
                            productFeatureCategoryList = data.productFeatureList[i].productFeatureTypeList;
                            break;
                        }
                    }
                    if (productFeatureCategoryList.length > 0) {
                        for (var j = 0; j < productFeatureCategoryList.length; j++) {
                            if (productFeatureCategoryList[j].productFeatureTypeId == 'PCA0000022') {
                                productFeatureCategoryWayList = productFeatureCategoryList[j].productFeatureList;
                                break;
                            }
                        }
                    }
                    // if (productFeatureCategoryWayList.length > 0) {
                    //     this.guaranteeMode = [];
                    //     this.guaranteeMode.push({ label: '请选择', value: '' })
                    //     for (let n = 0; n < productFeatureCategoryWayList.length; n++) {
                    //         this.guaranteeMode.push(
                    //             { label: productFeatureCategoryWayList[n].productFeatureName, value: productFeatureCategoryWayList[n].productFeatureLocalCode }
                    //         )
                    //     }
                    // }
                    if (productFeatureListQX.length > 0) {
                        // 设置期限的最大值和最小值
                        var startMonth = productFeatureListQX[0].min; //过去min个月
                        var endMonth = productFeatureListQX[0].max; //往后max个月
                        var minStartMonth = moment__WEBPACK_IMPORTED_MODULE_9__(new Date(_this.applyDate)).add(startMonth, 'month').format('Y-MM-DD');
                        var MaxEndMonth = moment__WEBPACK_IMPORTED_MODULE_9__(new Date(_this.applyDate)).add(endMonth, 'month').format('Y-MM-DD');
                        var minStartDate = moment__WEBPACK_IMPORTED_MODULE_9__(new Date(minStartMonth)).format('Y-MM-DD');
                        if (startMonth && startMonth != null) {
                            _this.StartMonthDate = new Date(minStartDate);
                        }
                        if (endMonth && endMonth != null) {
                            _this.EndMonthDate = new Date(MaxEndMonth);
                        }
                        // this.queryProductAttributeList(proId);
                    }
                    if (productFeatureListJe.length > 0) {
                        // 设置金额的最大值和最小值
                        var startminJe = productFeatureListJe[0].min; //最小金额
                        var endmaxJe = productFeatureListJe[0].max; //最大金额
                        if (startminJe && startminJe != null) {
                            _this.minJe = startminJe;
                            _this.bean.minAmt = _this.minJe;
                        }
                        if (endmaxJe && endmaxJe != null) {
                            _this.maxJe = endmaxJe;
                            _this.bean.maxAmt = _this.maxJe;
                        }
                    }
                }
                // 查询主担保方式
                _this.queryProductAttributeList(proId, '', 'detail');
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    EstablishRequirementsSaveComponent.prototype.doShowPro = function () {
        var _this = this;
        var parampro = {
            productId: this.prodId,
        };
        this.httpService.findAvailableProductList(parampro).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.bussinessType = '';
                _this.bussinessType = data.resultList[0].cateNum;
                if (_this.bussinessType != '' && _this.bussinessType != undefined && _this.bussinessType != null) {
                    _this.bean.bussType = _this.bussinessType;
                    _this.bean.productName = _this.prodName;
                    _this.bean.productNo = _this.prodId;
                    _this.selectProductDisplay = false;
                    // this.judgingPerod();
                    _this.getProType();
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '产品业务品种编码不存在' });
                    _this.prodName = undefined;
                    _this.prodId = undefined;
                    _this.bean.productName = undefined;
                    _this.bean.productNo = undefined;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                _this.prodName = undefined;
                _this.prodId = undefined;
                _this.bean.productName = undefined;
                _this.bean.productNo = undefined;
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            _this.prodName = undefined;
            _this.prodId = undefined;
            _this.bean.productName = undefined;
            _this.bean.productNo = undefined;
        });
    };
    // 判断产品是否为'PCA0000014'
    // judgingPerod() {
    // }
    //判断产品互斥
    // productMutex(){
    //     debugger;
    //     this.selectProductDisplay = true;
    //     const params = {
    //         custNo: this.bean.custNo,
    //         currentProductNo:this.prodId
    //     };
    //     this.creditCcmService.bussimutexCheck(params).subscribe(data => {
    //         if (data.returnCode.code === 'success') {
    //             //是否互斥"  1是,2否
    //             debugger;
    //             if (data.mutexFlag != null && data.mutexFlag == '1') {
    //                return false;
    //             } 
    //         }
    //     }, error => {  
    //         return false;
    //     });
    //     this.selectProductDisplay = false;
    //     return true;
    // }
    // 查询产品类型
    EstablishRequirementsSaveComponent.prototype.getProType = function () {
        var _this = this;
        var paramproType = {
            productNo: this.prodId,
        };
        this.httpService.queryCustProductType(paramproType).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // 产品类型
                var prodType = data.productType;
                if (prodType == 'credit') {
                    _this.bean.tranType = '04';
                }
                else if (prodType == 'loan') {
                    _this.bean.tranType = '03';
                }
                _this.getCustSource();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 查询客户来源
    EstablishRequirementsSaveComponent.prototype.getCustSource = function () {
        var _this = this;
        var querySource = {
            tranType: this.bean.tranType,
            custNo: this.bean.custNo,
            chanelType: '01',
        };
        this.httpService.selectCustSource(querySource).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.customerSourceOption = [];
                if (data.custSource != null && data.custSource != undefined && data.custSource != '') {
                    _this.customerSource.forEach(function (element) {
                        if (element.value == data.custSource) {
                            _this.customerSourceOption.push(element);
                        }
                    });
                    _this.bean.customerSource = data.custSource;
                }
                else {
                    _this.customerSourceOption = _this.customerSourceDefault;
                }
            }
            else {
                _this.customerSourceOption = _this.customerSourceDefault;
            }
        }, function (error) {
            _this.customerSourceOption = _this.customerSourceDefault;
        });
    };
    // 手动输入日期
    EstablishRequirementsSaveComponent.prototype.handInputDate = function (param) {
        if (this.prodName == '' || this.prodName == null || this.prodName == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请先选择产品' });
            this.matureDate = undefined;
            this.bean.matureDate = undefined;
            return;
        }
        if (param == 'matureDate') {
            if (this.matureDate != null && this.matureDate != undefined) {
                // this.bean.matureDate = this.commfunc.transDateN(this.matureDate); // 到期日期
                this.showDataTime('matureDate');
            }
        }
    };
    // 选择日期
    EstablishRequirementsSaveComponent.prototype.showData = function (param) {
        if (this.prodName == '' || this.prodName == null || this.prodName == undefined) {
            this.matureDate = null;
            this.bean.matureDate = undefined;
            // let endTime = moment(new Date(this.applyDate)).add(5, 'year').format('Y-MM-DD');
            // this.matureDate =  new Date(endTime);
            // this.bean.matureDate = this.commfunc.transDateN(this.matureDate); 
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请先选择产品' });
            return;
        }
    };
    // 选中日期
    EstablishRequirementsSaveComponent.prototype.showDataTime = function (param) {
        var _this = this;
        if (this.prodName == '' || this.prodName == null || this.prodName == undefined) {
            this.matureDate = null;
            this.bean.matureDate = undefined;
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请先选择产品' });
            return;
        }
        var StartMonthDateString = null;
        var StartMonthDateMax = null;
        var EndMonthDateString = null;
        var EndMonthDateMin = null;
        if (this.StartMonthDate) {
            StartMonthDateString = this.commfunc.transDateN(this.StartMonthDate);
            StartMonthDateMax = new Date(this.getMinMaxDate(StartMonthDateString, 'min'));
        }
        if (this.EndMonthDate) {
            EndMonthDateString = this.commfunc.transDateN(this.EndMonthDate);
            EndMonthDateMin = new Date(this.getMinMaxDate(EndMonthDateString, 'max'));
        }
        if (StartMonthDateMax && EndMonthDateMin) {
            if (this.matureDate < StartMonthDateMax || this.matureDate > EndMonthDateMin) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择' + StartMonthDateString + '至' + EndMonthDateString + '期间范围内的日期！' });
                setTimeout(function () {
                    if (_this.bean.tranType == '04') {
                        // let endTime = moment(new Date(this.applyDate)).add(5, 'year').format('Y-MM-DD');
                        // this.matureDate = new Date(endTime);
                        _this.matureDate = _this.EndMonthDate;
                        _this.bean.matureDate = _this.commfunc.transDateN(_this.matureDate);
                    }
                    else {
                        _this.matureDate = null;
                        _this.bean.matureDate = undefined;
                    }
                });
            }
            else {
                this.bean.matureDate = this.commfunc.transDateN(this.matureDate); // 到期日期
            }
        }
        else {
            this.bean.matureDate = this.commfunc.transDateN(this.matureDate); // 到期日期 
        }
    };
    // 获取今天最大最小日期
    EstablishRequirementsSaveComponent.prototype.getMinMaxDate = function (timeParam, param) {
        var time = new Date(timeParam);
        var year = time.getFullYear();
        var month = time.getMonth() + 1 + '';
        var data = time.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var todayTime;
        if (param == 'min') {
            todayTime = year + "/" + month + "/" + data + ' 00:00:00';
        }
        if (param == 'max') {
            todayTime = year + "/" + month + "/" + data + ' 23:59:59';
        }
        return todayTime;
    };
    // 选择节点
    EstablishRequirementsSaveComponent.prototype.doSubmitNode = function () {
        var _this = this;
        if (this.checkOneNode == null || this.checkOneNode == undefined || this.checkOneNode == '') {
            this.msgs_1 = [];
            this.msgs_1 = [{ severity: 'error', summary: '提示', detail: '请选择一条记录' }];
            return;
        }
        this.chooseProducts = [];
        this.nodeList.forEach(function (element) {
            if (element.projectId == _this.checkOneNode) {
                _this.groupId = element.partyClassificationGroupId;
                _this.goldChainId = element.projectId;
                _this.applyInterestRate = element.interest;
                _this.chooseProducts.push(element);
            }
        });
        // 分配联系人 - 需要和当前操作人工号一致 ，如果不一致
        if (!this.chooseProducts[0]['allocateContacts'] || (this.chooseProducts[0]['allocateContacts'] && this.chooseProducts[0]['allocateContacts'] == '0')) {
            this.msgs_1 = [];
            this.msgs_1 = [{ severity: 'error', summary: '提示', detail: '该客户未分配联系人，暂不能发起贷款申请' }];
            return;
        }
        // if (this.chooseProducts[0]['allocateContacts'] != this.userId) {
        //     this.msgs_1 = [];
        //     this.msgs_1 = [{ severity: 'error', summary: '提示', detail: '客户在该客群中分配联系人' + this.chooseProducts[0]['allocateContacts'] + '和当前操作人不一致' }];
        //     return
        // }
        // 黑名单客户标志 - 如果黑名单标志  不等于 0 （空或1）
        if (this.chooseProducts[0]['blackCustFlag'] != '0') {
            this.msgs_1 = [];
            this.msgs_1 = [{ severity: 'error', summary: '提示', detail: '客户在该客群中为黑名单客户或未资质审查' }];
            return;
        }
        var todaydate = new Date(this.applyDate);
        //  协议起始日期 - 当前日期需 大于等于  协议起始日期
        if (this.chooseProducts[0]['projectBeginDate'] != null && this.chooseProducts[0]['projectBeginDate'] != undefined && this.chooseProducts[0]['projectBeginDate'] != '') {
            var projectBeginDate = new Date(this.getMinMaxDate(this.chooseProducts[0]['projectBeginDate'], 'min'));
            if (todaydate < projectBeginDate) {
                this.msgs_1 = [];
                this.msgs_1 = [{ severity: 'error', summary: '提示', detail: '该供应链协议未到执行日期' }];
                return;
            }
        }
        // 协议结束日期 - 当前日期需 小于等于  协议结束日期
        if (this.chooseProducts[0]['projectEndDate'] != null && this.chooseProducts[0]['projectEndDate'] != undefined && this.chooseProducts[0]['projectEndDate'] != '') {
            var projectEndDate = new Date(this.getMinMaxDate(this.chooseProducts[0]['projectEndDate'], 'max'));
            if (todaydate > projectEndDate) {
                this.msgs_1 = [];
                this.msgs_1 = [{ severity: 'error', summary: '提示', detail: '该供应链协议已到期' }];
                return;
            }
        }
        // 金链条融资协议编号、客群编号、协议利率
        this.bean.groupId = this.groupId;
        this.bean.goldChainId = this.goldChainId;
        this.bean.applyInterestRate = this.applyInterestRate;
        this.nodeDisplay = false;
        this.doShowPro();
    };
    // 关闭节点模态框
    EstablishRequirementsSaveComponent.prototype.closeNode = function () {
        this.nodeDisplay = false;
        this.nodeList = [];
        this.checkOneNode = undefined;
        this.prodName = undefined;
        this.prodId = undefined;
        this.bean.groupId = undefined;
        this.bean.goldChainId = undefined;
        this.bean.applyInterestRate = undefined;
    };
    // 查询当前时间
    EstablishRequirementsSaveComponent.prototype.queryNowTime = function () {
        var _this = this;
        var nowTime = {};
        var erro = '';
        var params = this.httpService1.handleParams(nowTime);
        jquery__WEBPACK_IMPORTED_MODULE_12__["ajax"]({
            url: app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_15__["TZB_HTTP_CUS"] + app_pages_tzb_custom_http_custom_operation_custom_operation_http_constant__WEBPACK_IMPORTED_MODULE_13__["API"].queryNowTime,
            type: 'POST',
            data: JSON.stringify(params),
            async: false,
            headers: {
                'x-ajax': '1',
                'Content-Type': 'application/json'
            },
            dataType: 'json',
            success: function (data) {
                if (data.returnCode.code == 'success') {
                    // 经办日期
                    if (data.nowDate) {
                        var time = data.nowDate.split(' '); //时间格式2018-01-03 00:00:00，截取年月日
                        _this.applyDate = _this.commfunc.transDateN(new Date(time[0]));
                    }
                }
                else {
                    erro = data.returnCode.message;
                }
            },
            error: function (err) {
                erro = '调用服务失败';
            }
        });
        if (erro != '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: erro });
            return;
        }
    };
    // 到期日期初始化
    EstablishRequirementsSaveComponent.prototype.queryProductAttributeList = function (prodId, type, op) {
        var _this = this;
        var s1 = '', s2 = '';
        var params = {
            'productId': prodId,
            'custRequestNo': '000000'
        };
        this.creditCcmService.queryProductAttributes(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.productFeatureList.forEach(function (item) {
                    // 担保方式
                    if (item.productFeatureTypeId == "PCA0000022") {
                        _this.guaranteeMode = [];
                        _this.guaranteeMode.push({ label: '请选择', value: '' });
                        for (var n = 0; n < item.productFeatureList.length; n++) {
                            _this.guaranteeMode.push({ label: item.productFeatureList[n].productFeatureName, value: item.productFeatureList[n].productFeatureLocalCode });
                        }
                    }
                    if (item.productFeatureTypeId == "PCA0010060") {
                        if (item.PCA0010060) {
                            s1 = item.PCA0010060;
                        }
                        else {
                            s1 = item.productFeatureList[0].productFeatureLocalCode;
                        }
                    }
                    if (item.productFeatureTypeId == "PCA0010061") {
                        if (item.PCA0010061) {
                            s2 = item.PCA0010061;
                        }
                        else {
                            s2 = item.productFeatureList[0].def;
                        }
                    }
                });
                if (type == 'loan') {
                    if (s1 != '' && s1 != null) {
                        if (s1 == '01') {
                            _this.matureDate = null;
                            _this.bean.matureDate = null;
                        }
                        else if (s1 == '02') {
                            _this.matureDate = _this.EndMonthDate;
                            _this.bean.matureDate = _this.commfunc.transDateN(_this.matureDate);
                        }
                        else if (s1 == '03') {
                            _this.matureDate = _this.StartMonthDate;
                            _this.bean.matureDate = _this.commfunc.transDateN(_this.matureDate);
                        }
                        else if (s1 == '04') {
                            if (s2 != '' && s2 != null) {
                                _this.matureDate = new Date(moment__WEBPACK_IMPORTED_MODULE_9__(new Date(_this.applyDate)).add(s2, 'month').format('Y-MM-DD'));
                                _this.bean.matureDate = _this.commfunc.transDateN(_this.matureDate);
                            }
                            else {
                                _this.matureDate = null;
                                _this.bean.matureDate = null;
                            }
                        }
                        else {
                            _this.matureDate = null;
                            _this.bean.matureDate = null;
                        }
                    }
                    else {
                        _this.matureDate = null;
                        _this.bean.matureDate = null;
                    }
                }
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    EstablishRequirementsSaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'establishRequirementsSave',
            template: __webpack_require__(/*! ./establish-requirements-save.component.html */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-save/establish-requirements-save.component.html"),
            styles: [__webpack_require__(/*! ./establish-requirements-save.component.scss */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-save/establish-requirements-save.component.scss")],
            providers: [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], _credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_11__["CreditCcmService"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_6__["CusViewHttpService"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_8__["CusOperationHttpService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            _credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_11__["CreditCcmService"],
            app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_14__["HttpService"]])
    ], EstablishRequirementsSaveComponent);
    return EstablishRequirementsSaveComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-verification/bean/establish-requirements-verification.bean.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/establish-requirements/establish-requirements-verification/bean/establish-requirements-verification.bean.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: EstablishRVBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablishRVBean", function() { return EstablishRVBean; });
var EstablishRVBean = /** @class */ (function () {
    function EstablishRVBean() {
    }
    return EstablishRVBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-verification/establish-requirements-verification.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/establish-requirements/establish-requirements-verification/establish-requirements-verification.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g basic-establish-requirements\">\r\n\r\n    <!-- 查询条件 -->\r\n    <div class=\"ui-g-12 boxShadow contx\">\r\n        <header-title [Info]=\"'验真配置中心'\"></header-title>\r\n        <div class=\"contCenter\">\r\n            <div class=\"title\">验真类型：</div>\r\n            <div class=\"text\">\r\n                <input id=\"input\" type=\"text\" class=\"establishInput\" size=\"30\" pInputText [(ngModel)]=\"establishRVBean.verifyPhase\">\r\n            </div>\r\n            <div class=\"btn\">\r\n                <button pButton class=\"btn\" label=\"查询\" (click)=\"querySecle()\"></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- 查询列表 -->\r\n\r\n    <div class=\"ui-g-12 pro_chose cus_chose boxShadow\">\r\n        <div class=\"ui-g-12 conright ui-g-nopad\">\r\n            <!-- 按钮 -->\r\n            <div class=\"ui-g-12 btn-add\">\r\n                <span class=\"icoColor\" (click)=\"doAdd()\">新增</span>\r\n            </div>\r\n            <!-- 表头 -->\r\n            <div class=\"tit\">\r\n                <div class=\"cont\">\r\n                    <span class=\"bg \">\r\n                        序号\r\n                    </span>\r\n                    <span class=\"bg \">\r\n                        验真类型\r\n                    </span>\r\n                    <span class=\"bg \">\r\n                        有效历史天数\r\n                    </span>\r\n                    <span class=\"bg \">\r\n                        验真顺序\r\n                    </span>\r\n                    <span class=\"bg\">\r\n                        操作\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <!-- 表格 -->\r\n            <div class=\"titdan\" *ngFor=\"let items of tableList;let i = index\">\r\n                <div class=\"cont\">\r\n                    <span class=\"rowspan\">\r\n                        <!-- 序号 -->\r\n                        <!-- {{items.seqNo}} -->\r\n                        <!-- 查询 序号-->\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"items.seqNo\" *ngIf=\"operate == '1'\" readonly unselectable = 'on'>\r\n                        <!-- 新增 序号-->\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"items.seqNo\" *ngIf=\"operate == '2' && i < tableList.length-1\"\r\n                            readonly unselectable = 'on'>\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"items.seqNo\" *ngIf=\"operate == '2' && i == tableList.length-1\">\r\n                        <!-- 修改 序号-->\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"items.seqNo\" *ngIf=\"operate == '3' && i== upNo\" readonly unselectable = 'on'>\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"items.seqNo\" *ngIf=\"operate == '3' && i!= upNo\" readonly unselectable = 'on'>\r\n                    </span>\r\n                    <span class=\"rowspan\">\r\n                        <!-- 查询 验真类型-->\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"items.verifyPhase\" *ngIf=\"operate == '1'\" readonly unselectable = 'on' clsss=\"estaInput\">\r\n                        <!-- 新增 验真类型-->\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"items.verifyPhase\" *ngIf=\"operate == '2' && i < tableList.length-1\"\r\n                            readonly unselectable = 'on'>\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"items.verifyPhase\" *ngIf=\"operate == '2' && i == tableList.length-1\">\r\n                        <!-- 修改 验真类型-->\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"items.verifyPhase\" *ngIf=\"operate == '3' && i== upNo\" readonly unselectable = 'on'>\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"items.verifyPhase\" *ngIf=\"operate == '3' && i!= upNo\" readonly unselectable = 'on'>\r\n                    </span>\r\n\r\n                    <span class=\"rowspan\">\r\n                        <!-- 查询 有效历史天数-->\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"items.effectiveDays\" *ngIf=\"operate == '1'\" readonly unselectable = 'on'>\r\n                        <!-- 新增 有效历史天数-->\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"items.effectiveDays\" *ngIf=\"operate == '2' && i < tableList.length-1\"\r\n                            readonly unselectable = 'on'>\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"items.effectiveDays\" *ngIf=\"operate == '2' && i == tableList.length-1\">\r\n                        <!-- 修改 有效历史天数-->\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"items.effectiveDays\" *ngIf=\"operate == '3' && i== upNo\">\r\n                        <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"items.effectiveDays\" *ngIf=\"operate == '3' && i!= upNo\" readonly unselectable = 'on'>\r\n                    </span>\r\n\r\n                    <span class=\"rowspan\">\r\n                        <!-- 验真顺序-->\r\n                        <div *ngFor=\"let item of items.channelNo;let j = index\" class=\"kkk\">\r\n                            <!-- 查询 -->\r\n                            <p-dropdown [options]=\"orderDataList\" placeholder=\"请选择\" class=\"ttt\" [(ngModel)]=\"items.channelNo[j]\" *ngIf=\"operate == '1'\"\r\n                                disabled=\"true\"></p-dropdown>\r\n                            <!-- 新增 -->\r\n                            <p-dropdown [options]=\"orderDataList\" placeholder=\"请选择\" class=\"ttt\" [(ngModel)]=\"items.channelNo[j]\" *ngIf=\"operate == '2' && i < tableList.length-1\"\r\n                                disabled=\"true\"></p-dropdown>\r\n                            <p-dropdown [options]=\"orderDataList\" placeholder=\"请选择\" class=\"ttt\" [(ngModel)]=\"items.channelNo[j]\" *ngIf=\"operate == '2' && i == tableList.length-1\"></p-dropdown>\r\n                            <!-- 修改 -->\r\n                            <p-dropdown [options]=\"orderDataList\" placeholder=\"请选择\" class=\"ttt\" [(ngModel)]=\"items.channelNo[j]\" *ngIf=\"operate == '3' && i== upNo\"></p-dropdown>\r\n                            <p-dropdown [options]=\"orderDataList\" placeholder=\"请选择\" class=\"ttt\" [(ngModel)]=\"items.channelNo[j]\" *ngIf=\"operate == '3' && i!= upNo\"\r\n                                disabled=\"true\"></p-dropdown>\r\n                        </div>\r\n                    </span>\r\n                    <!-- 操作 -->\r\n                    <span class=\"rowspan\">\r\n                        <span (click)=\"toAdd(items)\" class=\"tabelSaveIco\" *ngIf=\"items.flag == '1'\">保存</span>\r\n                        <span (click)=\"toEdit(items,i)\" class=\"tabelUpdateIco\" *ngIf=\"items.flag != '1' && upOrSave == '3'\">编辑</span>\r\n                        <span (click)=\"toEdit(items,i)\" class=\"tabelUpdateIco\" *ngIf=\"items.flag != '1' && upOrSave == 'save' && i!= upNo\">编辑</span>\r\n                        <span (click)=\"toSave(items,i)\" class=\"tabelSaveIco\" *ngIf=\"items.flag != '1' && upOrSave == 'save' && i== upNo\">保存</span>\r\n                        <span (click)=\"toDelete(items,i)\" class=\"tabelDeleteIco\">撤销</span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <p-paginator rows={{establishRVBean.pageSize}} [first]=\"first\" totalRecords={{totalNum}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                    (onPageChange)=\"paginate($event)\" class=\"ddd\"></p-paginator>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- 提示 -->\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n\r\n<!-- 删除提示框 -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"确定\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"取消\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-verification/establish-requirements-verification.component.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/establish-requirements/establish-requirements-verification/establish-requirements-verification.component.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contx {\n  box-shadow: none;\n  margin-bottom: 4px;\n  padding-top: 0px;\n  background-color: #fafafa; }\n\n.contCenter {\n  width: 470px;\n  height: 25px;\n  margin: 16px auto 10px auto; }\n\n.title {\n  float: left;\n  width: 75px;\n  text-align: right;\n  line-height: 25px;\n  height: 25px;\n  font-size: 14px; }\n\n.text {\n  float: left;\n  width: 270px;\n  height: 25px;\n  margin-right: 25px; }\n\n.btn {\n  padding: 0px;\n  width: 100px;\n  float: left;\n  height: 25px; }\n\n.btnAlign {\n  text-align: center; }\n\n.cont100table {\n  width: 100%;\n  height: auto;\n  margin: 5px 0px 0px 0px; }\n\n.orderData {\n  width: 130px;\n  float: left;\n  height: 25px; }\n\n.btnArea {\n  text-align: right;\n  padding-right: 0px; }\n\n.btn-add {\n  text-align: right;\n  padding-right: 0px; }\n\n.btn-class1 {\n  display: inline-block;\n  width: 63px;\n  height: 25px;\n  line-height: 25px;\n  text-align: center;\n  color: #fff;\n  border-radius: 3px;\n  margin-right: 106px;\n  background: #f4c201; }\n\n.btn-class1:hover {\n    cursor: pointer; }\n\n.pro_chose {\n  display: flex;\n  flex-direction: row; }\n\n.pro_chose .result-color {\n    color: #c6a380; }\n\n.pro_chose .cursor-pointer {\n    cursor: pointer; }\n\n.pro_chose .conright {\n    display: flex;\n    flex-wrap: wrap; }\n\n.pro_chose .conright .tit {\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      margin-bottom: 3px;\n      background-color: #d2f1ef; }\n\n.pro_chose .conright .tit .cont {\n        background-color: #d2f1ef;\n        display: flex;\n        padding: 0;\n        flex: 1;\n        text-align: center;\n        justify-content: center;\n        align-items: center;\n        margin-left: 4px;\n        height: 35px;\n        line-height: 35px; }\n\n.pro_chose .conright .tit .cont .bg:nth-child(1) {\n          width: 13% !important;\n          margin-left: 4px;\n          height: 35px; }\n\n.pro_chose .conright .tit .cont .bg:nth-child(2) {\n          width: 25% !important;\n          margin-left: 4px;\n          height: 35px; }\n\n.pro_chose .conright .tit .cont .bg:nth-child(2) input {\n            margin-top: 5px; }\n\n.pro_chose .conright .tit .cont .bg:nth-child(3) {\n          width: 25% !important;\n          margin-left: 4px;\n          height: 35px; }\n\n.pro_chose .conright .tit .cont .bg:nth-child(4) {\n          width: 25% !important;\n          margin-left: 4px;\n          height: 35px; }\n\n.pro_chose .conright .tit .cont .bg:nth-child(5) {\n          width: 12% !important;\n          margin-left: 4px;\n          height: 35px; }\n\n.pro_chose .conright .tit .tit:nth-child(2n+2) {\n        background-color: #efefef; }\n\n.pro_chose .conright .tit .tit:nth-child(1) {\n        background-color: #d2f1ef; }\n\n.pro_chose .conright .titdan {\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      margin-bottom: 3px;\n      background-color: #fafafa; }\n\n.pro_chose .conright .titdan .cont {\n        display: flex;\n        padding: 0;\n        flex: 1;\n        text-align: center; }\n\n.pro_chose .conright .titdan .cont .rowspan:nth-child(1) {\n          height: 35px;\n          width: 13% !important;\n          margin-left: 4px;\n          line-height: 35px; }\n\n.pro_chose .conright .titdan .cont .rowspan:nth-child(2) {\n          height: 35px;\n          width: 25% !important;\n          margin-left: 4px; }\n\n.pro_chose .conright .titdan .cont .rowspan:nth-child(3) {\n          height: 35px;\n          width: 25% !important;\n          margin-left: 4px; }\n\n.pro_chose .conright .titdan .cont .rowspan:nth-child(4) {\n          display: block;\n          flex-direction: row;\n          width: 23% !important;\n          height: 35px;\n          margin-left: 4px; }\n\n.pro_chose .conright .titdan .cont .rowspan:nth-child(5) {\n          width: 12% !important;\n          height: 35px;\n          margin-left: 4px; }\n\n.pro_chose .conright .titdan:nth-child(2n+2) {\n      background-color: #efefef; }\n\n.pro_chose .conright .tit:nth-child(1) {\n      background-color: #fafafa; }\n\n.cus_chose .cont .calendar-date {\n  width: 50% !important; }\n\n.cus_chose .cont label {\n  width: 20% !important; }\n\n.orderDataTitle {\n  width: 12px;\n  float: left;\n  font-size: 12px;\n  height: 25px;\n  line-height: 25px;\n  margin-top: 5px; }\n\n.orderAdd {\n  float: left;\n  width: 30px;\n  height: 21px;\n  margin: 2px 0px 2px 5px;\n  background-position-x: 4px;\n  background-position-y: 1px;\n  margin-top: 6px; }\n\n.orderSub {\n  float: left;\n  width: 30px;\n  height: 21px;\n  margin: 2px 0px;\n  margin-top: 6px; }\n\n:host /deep/ .ttt .ui-dropdown {\n  width: 100% !important;\n  float: left;\n  margin-top: 5px !important; }\n\n.ddd {\n  padding: 0px; }\n\n.tabelUpdateIco {\n  line-height: 35px;\n  min-width: 30px; }\n\n.tabelDeleteIco {\n  line-height: 35px;\n  min-width: 30px; }\n\n.tabelSaveIco {\n  line-height: 35px;\n  min-width: 30px; }\n\n.establishInput {\n  margin-top: 0px !important;\n  text-align: left !important; }\n\ninput {\n  margin-top: 5px !important;\n  text-align: center;\n  min-width: 90px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9lc3RhYmxpc2gtcmVxdWlyZW1lbnRzL2VzdGFibGlzaC1yZXF1aXJlbWVudHMtdmVyaWZpY2F0aW9uL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcZXN0YWJsaXNoLXJlcXVpcmVtZW50c1xcZXN0YWJsaXNoLXJlcXVpcmVtZW50cy12ZXJpZmljYXRpb25cXGVzdGFibGlzaC1yZXF1aXJlbWVudHMtdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQ0osRUFBQTs7QUFFQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBSW5CLG1CQUFtQixFQUFBOztBQVp2QjtJQVVRLGVBQWUsRUFBQTs7QUFLdkI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUE7O0FBRnZCO0lBSVEsY0FBYyxFQUFBOztBQUp0QjtJQU9RLGVBQWUsRUFBQTs7QUFQdkI7SUFVUSxhQUFhO0lBQ2IsZUFBZSxFQUFBOztBQVh2QjtNQWFZLFdBQVc7TUFDWCxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQix5QkFBeUIsRUFBQTs7QUFqQnJDO1FBbUJnQix5QkFBeUI7UUFDekIsYUFBYTtRQUNiLFVBQVU7UUFDVixPQUFPO1FBQ1Asa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixpQkFBaUIsRUFBQTs7QUE1QmpDO1VBOEJvQixxQkFBcUI7VUFDckIsZ0JBQWdCO1VBQ2hCLFlBQVksRUFBQTs7QUFoQ2hDO1VBbUNvQixxQkFBcUI7VUFDckIsZ0JBQWdCO1VBQ2hCLFlBQVksRUFBQTs7QUFyQ2hDO1lBdUN3QixlQUFlLEVBQUE7O0FBdkN2QztVQTJDb0IscUJBQXFCO1VBQ3JCLGdCQUFnQjtVQUNoQixZQUFZLEVBQUE7O0FBN0NoQztVQWdEb0IscUJBQXFCO1VBQ3JCLGdCQUFnQjtVQUNoQixZQUFZLEVBQUE7O0FBbERoQztVQXFEb0IscUJBQXFCO1VBQ3JCLGdCQUFnQjtVQUNoQixZQUFZLEVBQUE7O0FBdkRoQztRQTJEZ0IseUJBQXlCLEVBQUE7O0FBM0R6QztRQThEZ0IseUJBQXlCLEVBQUE7O0FBOUR6QztNQWtFWSxXQUFXO01BQ1gsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIseUJBQXlCLEVBQUE7O0FBdEVyQztRQXdFZ0IsYUFBYTtRQUNiLFVBQVU7UUFDVixPQUFPO1FBQ1Asa0JBQWtCLEVBQUE7O0FBM0VsQztVQTZFb0IsWUFBWTtVQUNaLHFCQUFxQjtVQUNyQixnQkFBZ0I7VUFDaEIsaUJBQWlCLEVBQUE7O0FBaEZyQztVQW1Gb0IsWUFBWTtVQUNaLHFCQUFxQjtVQUNyQixnQkFBZ0IsRUFBQTs7QUFyRnBDO1VBd0ZvQixZQUFZO1VBQ1oscUJBQXFCO1VBQ3JCLGdCQUFnQixFQUFBOztBQTFGcEM7VUE2Rm9CLGNBQWM7VUFDZCxtQkFBbUI7VUFDbkIscUJBQXFCO1VBQ3JCLFlBQVk7VUFDWixnQkFBZ0IsRUFBQTs7QUFqR3BDO1VBb0dvQixxQkFBcUI7VUFDckIsWUFBWTtVQUNaLGdCQUFnQixFQUFBOztBQXRHcEM7TUEyR1kseUJBQXlCLEVBQUE7O0FBM0dyQztNQThHWSx5QkFBeUIsRUFBQTs7QUFLckM7RUFJWSxxQkFBb0IsRUFBQTs7QUFKaEM7RUFPWSxxQkFBcUIsRUFBQTs7QUFLakM7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFPbkI7RUFDSSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSwwQkFBMEI7RUFDMUIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2VzdGFibGlzaC1yZXF1aXJlbWVudHMvZXN0YWJsaXNoLXJlcXVpcmVtZW50cy12ZXJpZmljYXRpb24vZXN0YWJsaXNoLXJlcXVpcmVtZW50cy12ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHgge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG59XHJcblxyXG4uY29udENlbnRlciB7XHJcbiAgICB3aWR0aDogNDcwcHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW46IDE2cHggYXV0byAxMHB4IGF1dG87XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjcwcHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5idG5BbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLmNvbnQxMDB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xyXG59XHJcbi5vcmRlckRhdGEge1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbn1cclxuLmJ0bkFyZWEge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5idG4tYWRkIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uYnRuLWNsYXNzMSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNjNweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwNnB4O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgYmFja2dyb3VuZDogI2Y0YzIwMTtcclxufVxyXG5cclxuLnByb19jaG9zZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC5yZXN1bHQtY29sb3Ige1xyXG4gICAgICAgIGNvbG9yOiAjYzZhMzgwO1xyXG4gICAgfVxyXG4gICAgLmN1cnNvci1wb2ludGVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY29ucmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC50aXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4OyAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmMWVmO1xyXG4gICAgICAgICAgICAuY29udCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJmMWVmO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgLmJnOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJnOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5iZzpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5iZzpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5iZzpudGgtY2hpbGQoNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMiUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGl0Om50aC1jaGlsZCgybisyKSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXQ6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkMmYxZWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGRhbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICAgIC5jb250IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLy8gbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgIC5yb3dzcGFuOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMyUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJvd3NwYW46bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucm93c3BhbjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yb3dzcGFuOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjMlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucm93c3BhbjpudGgtY2hpbGQoNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMiUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0ZGFuOm50aC1jaGlsZCgybisyKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXQ6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXNfY2hvc2Uge1xyXG4gICAgLmNvbnQge1xyXG4gICAgICAgIC8vIHNwYW4sXHJcbiAgICAgICAgLmNhbGVuZGFyLWRhdGUge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ub3JkZXJEYXRhVGl0bGUge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4ub3JkZXJBZGQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMjFweDtcclxuICAgIG1hcmdpbjogMnB4IDBweCAycHggNXB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDFweDtcclxuICAgIG1hcmdpbi10b3A6IDZweDsgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5vcmRlclN1YiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgbWFyZ2luOiAycHggMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4OyAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4ua2trIHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC50dHQgLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGRkIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnRhYmVsVXBkYXRlSWNvIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWluLXdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4udGFiZWxEZWxldGVJY28ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICBtaW4td2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi50YWJlbFNhdmVJY297XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIG1pbi13aWR0aDogMzBweDtcclxufVxyXG5cclxuLmVzdGFibGlzaElucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHggIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1pbi13aWR0aDogOTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-verification/establish-requirements-verification.component.ts":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/establish-requirements/establish-requirements-verification/establish-requirements-verification.component.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: EstablishRequirementsVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablishRequirementsVerificationComponent", function() { return EstablishRequirementsVerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _bean_establish_requirements_verification_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/establish-requirements-verification.bean */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-verification/bean/establish-requirements-verification.bean.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
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
 * @author fanhualing 2018-8-16 验真配置中心
 */






var EstablishRequirementsVerificationComponent = /** @class */ (function () {
    function EstablishRequirementsVerificationComponent(commfunc, httpService, confirmationService) {
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.confirmationService = confirmationService;
        this.operate = '1'; // 操作类型->定义：查询(query)：'1'  新增(add)：'2'  修改(update)：'3'
        this.establishRVBean = new _bean_establish_requirements_verification_bean__WEBPACK_IMPORTED_MODULE_2__["EstablishRVBean"]();
        this.msgs = [];
        this.first = 0;
        this.totalNum = 0;
        this.tableList = [];
        this.queryList = [];
        // 验真顺序内容选择列表
        this.orderDataList = [];
        this.upOrSave = '3';
        this.sanyaosuadd2Next = [];
        this.siyaosuadd2Next = [];
        this.sanyaosuaddNext = [];
        this.siyaosuaddNext = [];
        this.updateOtherColtwo = [];
        this.updateOtherColthree = [];
        this.sanyaosuaddAdd2Next = [];
        this.sanyaosuaddAddNext = [];
        //调用码值
        this.codeValues();
        this.orderDataList = this.code['orderDataList'];
    }
    EstablishRequirementsVerificationComponent.prototype.ngOnInit = function () {
        this.querySecle();
    };
    EstablishRequirementsVerificationComponent.prototype.querySecle = function () {
        this.establishRVBean.pageSize = 10;
        this.establishRVBean.pageNum = 1;
        this.first = 0;
        this.query();
    };
    // 查询(1)
    EstablishRequirementsVerificationComponent.prototype.query = function () {
        var _this = this;
        if (this.establishRVBean.verifyPhase && this.establishRVBean.verifyPhase == '') {
            this.establishRVBean.verifyPhase = undefined;
        }
        var ob = this.httpService.findVerifyConfigList(this.establishRVBean);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.queryList = data.verifyRelList == null ? [] : data.verifyRelList;
                _this.totalNum = data.totalNum;
                _this.operate = '1';
                _this.tableList = [];
                if (_this.queryList.length > 0) {
                    _this.queryList.forEach(function (element, index) {
                        var sr = {};
                        sr['effectiveDays'] = element.effectiveDays;
                        sr['seqNo'] = element.seqNo;
                        sr['verifyPhase'] = element.verifyPhase;
                        if (element.channelNo.indexOf(',') != -1) {
                            sr['channelNo'] = element.channelNo.split(',');
                        }
                        else {
                            var a = [];
                            a.push(element.channelNo);
                            sr['channelNo'] = a;
                        }
                        _this.tableList.push(sr);
                    });
                }
                else {
                    _this.tableList = _this.queryList;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 分页
    EstablishRequirementsVerificationComponent.prototype.paginate = function (event) {
        this.establishRVBean.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.establishRVBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.establishRVBean.pageSize;
        this.query();
    };
    // 删除一行
    EstablishRequirementsVerificationComponent.prototype.toDelete = function (items, i) {
        var _this = this;
        if (items.seqNo == '') {
            this.tableList.splice(i, 1);
            this.operate = '1';
        }
        else {
            this.confirmationService.confirm({
                message: '确认要删除吗?',
                accept: function () {
                    var param = {
                        seqNo: items.seqNo,
                        operationType: '03',
                    };
                    var ob3 = _this.httpService.verifyElement(param);
                    ob3.subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
                            _this.operate = '1';
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                            _this.querySecle();
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                        }
                    }, function (error) {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
                    });
                }
            });
        }
    };
    // 新增一行-操作类型'2'
    EstablishRequirementsVerificationComponent.prototype.doAdd = function () {
        // 判断当前是否存在未保存的数据
        var bool = true;
        this.tableList.forEach(function (element) {
            if (element.flag && element.flag == '1') {
                bool = false;
            }
        });
        if (!bool) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '当前页面存在未保存的验真配置信息' });
            return;
        }
        // 添加一条
        this.operate = '2';
        var arr = {
            seqNo: '',
            verifyPhase: '',
            effectiveDays: '0',
            channelNo: [''],
            flag: '1'
        };
        this.tableList.push(arr);
    };
    // 新增时-保存
    EstablishRequirementsVerificationComponent.prototype.toAdd = function (item) {
        var _this = this;
        if (item.seqNo == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '序号不能为空' });
            return;
        }
        else {
            var regAmt = /^[0-9]*$/;
            if (!regAmt.test(item.seqNo)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '序号只能是数字' });
                return;
            }
        }
        if (item.verifyPhase == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '验真类型不能为空' });
            return;
        }
        if (item.effectiveDays == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '有效历史天数不能为空' });
            return;
        }
        else {
            var regAmt = /^[0-9]*$/;
            if (!regAmt.test(item.effectiveDays)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '有效历史天数只能是数字' });
                return;
            }
        }
        var bool = true;
        var mm;
        item.channelNo.forEach(function (element, index) {
            if (bool) {
                if (element == undefined || element == '') {
                    bool = false;
                    mm = index + 1;
                }
            }
        });
        if (!bool) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '验真渠道不能为空' });
            return;
        }
        var param = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](item);
        // 如果存在新增标识-删除
        if (param.flag) {
            delete param.flag;
            // delete param.seqNo
        }
        // 操作类型-'01'新增
        param['operationType'] = '01';
        var ss = '';
        var s1 = '';
        param.channelNo.forEach(function (item) {
            ss += item + ',';
        });
        if (ss != '') {
            if (ss.charAt(ss.length - 1) == ',') {
                s1 = ss.substring(0, ss.length - 1);
            }
            else {
                s1 = ss;
            }
        }
        if (param.channelNo) {
            delete param.channelNo;
        }
        param['channelNo'] = s1;
        var ob2 = this.httpService.verifyElement(param);
        ob2.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.operate = '1';
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.querySecle();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 修改一行-操作类型'3'
    EstablishRequirementsVerificationComponent.prototype.toEdit = function (item, i) {
        this.upNo = i;
        var param = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](item);
        this.operate = '3';
        this.upOrSave = 'save';
    };
    // 修改时-保存
    EstablishRequirementsVerificationComponent.prototype.toSave = function (item, i) {
        var _this = this;
        if (item.verifyPhase == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '验真类型不能为空' });
            return;
        }
        if (item.effectiveDays == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '有效历史天数不能为空' });
            return;
        }
        else {
            var regAmt = /^[0-9]*$/;
            if (!regAmt.test(item.effectiveDays)) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '有效历史天数只能是数字' });
                return;
            }
        }
        var bool = true;
        var mm;
        item.channelNo.forEach(function (element, index) {
            if (bool) {
                if (element == undefined || element == '') {
                    bool = false;
                    mm = index + 1;
                }
            }
        });
        if (!bool) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '验真渠道不能为空' });
            return;
        }
        var param = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](item);
        param['operationType'] = '02';
        var ss = '';
        var s1 = '';
        param.channelNo.forEach(function (item) {
            ss += item + ',';
        });
        if (ss != '') {
            if (ss.charAt(ss.length - 1) == ',') {
                s1 = ss.substring(0, ss.length - 1);
            }
            else {
                s1 = ss;
            }
        }
        if (param.channelNo) {
            delete param.channelNo;
        }
        param['channelNo'] = s1;
        var ob2 = this.httpService.verifyElement(param);
        ob2.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.operate = '1';
                _this.upOrSave = '3';
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.querySecle();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 获取码值
    EstablishRequirementsVerificationComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    EstablishRequirementsVerificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'establishRequirementsVerification',
            template: __webpack_require__(/*! ./establish-requirements-verification.component.html */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-verification/establish-requirements-verification.component.html"),
            styles: [__webpack_require__(/*! ./establish-requirements-verification.component.scss */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-verification/establish-requirements-verification.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"]])
    ], EstablishRequirementsVerificationComponent);
    return EstablishRequirementsVerificationComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/establish-requirements/establish-requirements.module.ts ***!
  \******************************************************************************************/
/*! exports provided: EstablishRequirementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablishRequirementsModule", function() { return EstablishRequirementsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _establish_requirements_query_establish_requirements_query_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./establish-requirements-query/establish-requirements-query.component */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-query/establish-requirements-query.component.ts");
/* harmony import */ var _establish_requirements_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./establish-requirements.routing */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements.routing.ts");
/* harmony import */ var _establish_requirements_save_establish_requirements_save_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./establish-requirements-save/establish-requirements-save.component */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-save/establish-requirements-save.component.ts");
/* harmony import */ var _establish_requirements_verification_establish_requirements_verification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./establish-requirements-verification/establish-requirements-verification.component */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-verification/establish-requirements-verification.component.ts");
/* harmony import */ var app_pages_tzb_custom_establish_requirements_establish_requirements_detail_establish_requirements_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/establish-requirements/establish-requirements-detail/establish-requirements-detail.component */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-detail/establish-requirements-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var EstablishRequirementsModule = /** @class */ (function () {
    function EstablishRequirementsModule() {
    }
    EstablishRequirementsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _establish_requirements_routing__WEBPACK_IMPORTED_MODULE_5__["EstablishRequirementsRouting"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_2__["FrameworkModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            declarations: [
                _establish_requirements_query_establish_requirements_query_component__WEBPACK_IMPORTED_MODULE_4__["EstablishRequirementsQueryComponent"],
                _establish_requirements_save_establish_requirements_save_component__WEBPACK_IMPORTED_MODULE_6__["EstablishRequirementsSaveComponent"],
                _establish_requirements_verification_establish_requirements_verification_component__WEBPACK_IMPORTED_MODULE_7__["EstablishRequirementsVerificationComponent"],
                app_pages_tzb_custom_establish_requirements_establish_requirements_detail_establish_requirements_detail_component__WEBPACK_IMPORTED_MODULE_8__["EstablishRequirementsDetailComponent"],
            ],
            providers: []
        })
    ], EstablishRequirementsModule);
    return EstablishRequirementsModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements.routing.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/establish-requirements/establish-requirements.routing.ts ***!
  \*******************************************************************************************/
/*! exports provided: routes, EstablishRequirementsRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablishRequirementsRouting", function() { return EstablishRequirementsRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _establish_requirements_query_establish_requirements_query_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./establish-requirements-query/establish-requirements-query.component */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-query/establish-requirements-query.component.ts");
/* harmony import */ var _establish_requirements_save_establish_requirements_save_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./establish-requirements-save/establish-requirements-save.component */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-save/establish-requirements-save.component.ts");
/* harmony import */ var _establish_requirements_verification_establish_requirements_verification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./establish-requirements-verification/establish-requirements-verification.component */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-verification/establish-requirements-verification.component.ts");
/* harmony import */ var app_pages_tzb_custom_establish_requirements_establish_requirements_detail_establish_requirements_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/establish-requirements/establish-requirements-detail/establish-requirements-detail.component */ "./src/app/pages/tzb/custom/establish-requirements/establish-requirements-detail/establish-requirements-detail.component.ts");





var routes = [
    {
        path: '',
        children: [
            { path: 'establish-requirements-query', component: _establish_requirements_query_establish_requirements_query_component__WEBPACK_IMPORTED_MODULE_1__["EstablishRequirementsQueryComponent"] },
            { path: 'establish-requirements-save', component: _establish_requirements_save_establish_requirements_save_component__WEBPACK_IMPORTED_MODULE_2__["EstablishRequirementsSaveComponent"] },
            { path: 'establish-requirements-verification', component: _establish_requirements_verification_establish_requirements_verification_component__WEBPACK_IMPORTED_MODULE_3__["EstablishRequirementsVerificationComponent"] },
            { path: 'establish-requirements-detail', component: app_pages_tzb_custom_establish_requirements_establish_requirements_detail_establish_requirements_detail_component__WEBPACK_IMPORTED_MODULE_4__["EstablishRequirementsDetailComponent"] }
        ]
    }
];
var EstablishRequirementsRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=establish-requirements-establish-requirements-module.js.map