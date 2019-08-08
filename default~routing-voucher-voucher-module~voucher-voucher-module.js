(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~routing-voucher-voucher-module~voucher-voucher-module"],{

/***/ "./src/app/pages/tzb/custom/marketing/voucher/custom-voucher-manage/bean/custom-voucher-manage.bean.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/custom-voucher-manage/bean/custom-voucher-manage.bean.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CustomVoucherManageBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomVoucherManageBean", function() { return CustomVoucherManageBean; });
var CustomVoucherManageBean = /** @class */ (function () {
    function CustomVoucherManageBean() {
    }
    return CustomVoucherManageBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/custom-voucher-manage/custom-voucher-manage.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/custom-voucher-manage/custom-voucher-manage.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'客户抵用券查询'\"></header-title>\r\n  <div class=\"ui-g-12 query\">\r\n    <div class=\"ui-g-12 uiCont\">\r\n      <div class=\"ui-g-4 uiDiv\">\r\n        <div class=\"ui-g-5\">客户号:</div>\r\n        <div class=\"ui-g-7\">\r\n          <input type=\"text\" pInputText [(ngModel)]=\"customVoucherManageBean.partyId\">\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4 uiDiv\">\r\n        <div class=\"ui-g-5\">抵用券类型名称:</div>\r\n        <div class=\"ui-g-7\">\r\n          <input type=\"text\" pInputText [(ngModel)]=\"customVoucherManageBean.couponTypeName\">\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4 uiDivLast\">\r\n        <div class=\"ui-g-5\">状态:</div>\r\n        <div class=\"ui-g-7\">\r\n          <p-dropdown [options]=\"statusId\" [(ngModel)]=\"customVoucherManageBean.statusId\" class=\"textAlignLeft uifont14\"></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 uiCont\">\r\n      <div class=\"ui-g-4 uiDiv\">\r\n        <div class=\"ui-g-5\">发放日期:</div>\r\n        <div class=\"ui-g-7\">\r\n          <!-- <input type=\"text\" pInputText [(ngModel)]=\"customVoucherManageBean.effectiveDate\"> -->\r\n          <!-- <p-calendar [(ngModel)]=\"effectiveDate\" [showButtonBar]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n          [showOtherMonths]=\"false\" [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\" name=\"startTime\"></p-calendar> -->\r\n          <p-calendar [(ngModel)]=\"effectiveDateStart\" [showButtonBar]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n            [showOtherMonths]=\"false\" [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\" class=\"textDate\" [style]=\"{'min-width':'0px'}\"\r\n             name=\"effectiveDateStart\" (onSelect)=\"selectTime1()\"></p-calendar>\r\n             <span class=\"uiLeft\">至</span>\r\n          <p-calendar [(ngModel)]=\"effectiveDateEnd\" [showButtonBar]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n            [showOtherMonths]=\"false\" [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\" class=\"textDate\" [style]=\"{'min-width':'0px'}\"\r\n              name=\"effectiveDateEnd\" (onSelect)=\"selectTime2()\"></p-calendar>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4 uiDiv\" *ngIf=\"isFlag\" >\r\n        <div class=\"ui-g-5\">主联系人:</div>\r\n        <div class=\"ui-g-7\" style=\"position: relative;\">\r\n          <input type=\"text\" disabled pInputText [(ngModel)]=\"userName\">\r\n          <a (click)=\"chooseWorker()\" class=\"a-hand\">...</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4 uiDivLast\" *ngIf=\"isFlag\" >\r\n        <div class=\"ui-g-5\">发放机构:</div>\r\n        <div class=\"ui-g-7\" style=\"position: relative;\">\r\n          <input type=\"text\" disabled pInputText [(ngModel)]=\"orgName\" >\r\n          <a (click)=\"chooseOrg()\" class=\"a-hand\">...</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n      <button class=\"btnWidth btnMarginRight\" pButton type=\"button\" label=\"查询\" (click)=\"queryClick()\"></button>\r\n      <button class=\"btnWidth\" pButton type=\"button\" label=\"重置\" (click)=\"resetClick()\"></button>\r\n    </div>\r\n  </div>\r\n  <!-- 员工 -->\r\n<p-dialog [(visible)]=\"personPage\" modal=\"modal\" [positionTop]=10  class=\"my-cust-overf\">\r\n  <p-header>员工列表</p-header>\r\n  <!-- <app-query-user-list *ngIf=\"personPage\" [in-value]=\"userInValue\" (outValue)=\"perInfor($event)\"></app-query-user-list> -->\r\n  <applyPerson *ngIf=\"personPage\" [inValue]=\"applyPersonValue\" (outValue)=\"perInfor($event)\"></applyPerson>\r\n</p-dialog>\r\n  <!--机构树-->\r\n<p-dialog *ngIf='orgTreeDisplay' [(visible)]=\"orgTreeDisplay\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10  class=\"my-cust-overf\">\r\n  <p-header>机构树</p-header>\r\n  <org-tree-component *ngIf='orgTreeDisplay' (outValue)=\"treeCall($event)\"></org-tree-component>\r\n</p-dialog>\r\n  <!-- 提示信息 -->\r\n  <p-growl [(value)]=\"msgs\"></p-growl>\r\n  <p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n</div>\r\n\r\n<!--表格-->\r\n<div class=\"ui-g-12 module\">\r\n  <div class=\"ui-g-12 query-result\">\r\n    <div class=\"table\">\r\n      <p-dataTable emptyMessage=\"没有查找到数据\" [value]=\"tableData\" scrollable=\"true\" scrollHeight=\"350px\">\r\n        <p-column field=\"couponId\" header='抵用券编号'></p-column>\r\n        <p-column field=\"partyId\" header='客户号'></p-column>\r\n        <p-column field=\"partyName\" header='客户名称'></p-column>\r\n        <p-column field=\"couponTypeId\" header='抵用券类型编号'></p-column>\r\n        <p-column field=\"couponTypeName\" header='抵用券类型名称'></p-column>\r\n        <p-column field=\"couponAmount\" header='面值'></p-column>\r\n        <p-column field=\"effectiveDate\" header='生效日期'></p-column>\r\n        <p-column field=\"expirationDate\" header='失效日期'></p-column>\r\n        <p-column field=\"deductibleDate\" header='抵扣日期'></p-column>\r\n        <p-column field=\"duebillNo\" header='抵扣借据'></p-column>\r\n        <p-column field=\"userId\" header='主联系人编号'></p-column>\r\n        <p-column field=\"orgId\" header='发放机构'></p-column>\r\n        <p-column field=\"statusId\" header='状态'>\r\n          <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n            <span>{{car.statusId | codeValuePie:statusId}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"\" header='操作'>\r\n          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n            <a class=\"tabelUpdateIco\" (click)=\"invalid(item)\" *ngIf=\"permissionCheck('SID02094_P011')\">失效</a>\r\n          </ng-template>\r\n        </p-column>\r\n      </p-dataTable>\r\n    </div>\r\n    <p-paginator first={{first}} rows=\"{{customVoucherManageBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[5,10,20,30]\"\r\n      (onPageChange)=\"paginate($event)\"></p-paginator>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/custom-voucher-manage/custom-voucher-manage.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/custom-voucher-manage/custom-voucher-manage.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".query {\n  padding: 0px;\n  margin-top: 20px; }\n  .query .ui-g-12 {\n    margin: 0px 0px 28px 0px;\n    height: 25px;\n    padding: 0px; }\n  .query .uiCont {\n    width: 90%;\n    margin-left: 5%; }\n  .query .ui-g-4 {\n    text-align: right;\n    height: 25px;\n    padding: 0px;\n    font-size: 14px; }\n  .query .uiDiv {\n    width: 26%;\n    margin-right: 11%; }\n  .query .uiDivLast {\n    width: 26%;\n    margin-right: 0px; }\n  .query .ui-g-5 {\n    text-align: right;\n    height: 25px;\n    font-size: 14px;\n    line-height: 14px;\n    width: 32%;\n    margin-right: 4.71%; }\n  .query .ui-g-7 {\n    height: 25px;\n    padding: 0px;\n    width: 63.29%; }\n  .query .textRel {\n    position: relative;\n    width: 0px;\n    height: 0px; }\n  .query .textAbs {\n    position: absolute;\n    width: 250px;\n    font-size: 14px;\n    color: #f00;\n    line-height: 20px;\n    height: 20px;\n    top: -16px; }\n  .query .textDate {\n    width: 47%;\n    float: left; }\n  @media screen and (min-width: 1367px) and (max-width: 1919px) {\n    .query .ui-g-5 {\n      text-align: right;\n      height: 25px;\n      font-size: 14px;\n      line-height: 14px;\n      width: 42%;\n      margin-right: 4.71%; }\n    .query .ui-g-7 {\n      height: 25px;\n      padding: 0px;\n      width: 53.29%; }\n    .query .textDate {\n      width: 44%;\n      float: left; } }\n  @media screen and (min-width: 1025px) and (max-width: 1366px) {\n    .query .ui-g-5 {\n      text-align: right;\n      height: 25px;\n      font-size: 14px;\n      line-height: 14px;\n      width: 50%;\n      margin-right: 4.71%; }\n    .query .ui-g-7 {\n      height: 25px;\n      padding: 0px;\n      width: 45.29%; }\n    .query .textDate {\n      width: 43.5%;\n      float: left; } }\n  @media screen and (max-width: 1024px) {\n    .query .ui-g-5 {\n      text-align: right;\n      height: 25px;\n      font-size: 14px;\n      line-height: 14px;\n      width: 60%;\n      margin-right: 4.71%; }\n    .query .ui-g-7 {\n      height: 25px;\n      padding: 0px;\n      width: 35.29%; }\n    .query .textDate {\n      width: 38%;\n      float: left; } }\n  .query .uifont14 {\n    font-size: 14px; }\n  .query .uiLeft {\n    float: left;\n    height: 25px;\n    line-height: 27px;\n    font-size: 14px; }\n  .query .btn {\n    text-align: center;\n    margin: 0px 0px 9px 0px;\n    height: 26px;\n    padding: 0px; }\n  .query .btnWidth {\n    width: 100px; }\n  .query .btnMarginRight {\n    margin-right: 27px; }\n  .query .btnRight {\n    float: right;\n    margin-right: 5%;\n    background: linear-gradient(#ffc107, #ffc107); }\n  body .ui-dialog .ui-dialog-content {\n  padding: 0px; }\n  .add {\n  text-align: right; }\n  .a-hand {\n  border-left: 1px solid #bdbdbd;\n  position: absolute;\n  width: 18%;\n  height: 23px;\n  top: 1px;\n  right: 1px;\n  text-align: center;\n  background: #fbfbf7; }\n  @media screen and (max-width: 1024px) {\n  .a-hand {\n    border-left: 1px solid #bdbdbd;\n    position: absolute;\n    width: 30%;\n    height: 23px;\n    top: 1px;\n    right: -3.8em;\n    text-align: center;\n    background: #fbfbf7; } }\n  .table {\n  text-align: center; }\n  :host/deep/.ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvdm91Y2hlci9jdXN0b20tdm91Y2hlci1tYW5hZ2UvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxtYXJrZXRpbmdcXHZvdWNoZXJcXGN1c3RvbS12b3VjaGVyLW1hbmFnZVxcY3VzdG9tLXZvdWNoZXItbWFuYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBO0VBRnBCO0lBSVEsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixZQUFZLEVBQUE7RUFOcEI7SUFTUSxVQUFVO0lBQ1YsZUFBZSxFQUFBO0VBVnZCO0lBYVEsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZSxFQUFBO0VBaEJ2QjtJQW1CUSxVQUFVO0lBQ1YsaUJBQWlCLEVBQUE7RUFwQnpCO0lBdUJRLFVBQVU7SUFDVixpQkFBaUIsRUFBQTtFQXhCekI7SUEyQlEsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixtQkFBbUIsRUFBQTtFQWhDM0I7SUFtQ1EsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhLEVBQUE7RUFyQ3JCO0lBd0NRLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVyxFQUFBO0VBMUNuQjtJQTZDUSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixVQUFVLEVBQUE7RUFuRGxCO0lBc0RRLFVBQVM7SUFDVCxXQUFXLEVBQUE7RUFFZjtJQXpESjtNQTJEWSxpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsVUFBVTtNQUNWLG1CQUFtQixFQUFBO0lBaEUvQjtNQW1FWSxZQUFZO01BQ1osWUFBWTtNQUNaLGFBQWEsRUFBQTtJQXJFekI7TUF3RVksVUFBUztNQUNULFdBQVcsRUFBQSxFQUNkO0VBRUw7SUE1RUo7TUE4RVksaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLFVBQVU7TUFDVixtQkFBbUIsRUFBQTtJQW5GL0I7TUFzRlksWUFBWTtNQUNaLFlBQVk7TUFDWixhQUFhLEVBQUE7SUF4RnpCO01BMkZZLFlBQVc7TUFDWCxXQUFXLEVBQUEsRUFDZDtFQUVMO0lBL0ZKO01BaUdZLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixVQUFVO01BQ1YsbUJBQW1CLEVBQUE7SUF0Ry9CO01BeUdZLFlBQVk7TUFDWixZQUFZO01BQ1osYUFBYSxFQUFBO0lBM0d6QjtNQThHWSxVQUFTO01BQ1QsV0FBVyxFQUFBLEVBQ2Q7RUFoSFQ7SUFtSFEsZUFBZSxFQUFBO0VBbkh2QjtJQXNIUSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7RUF6SHZCO0lBNEhRLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVksRUFBQTtFQS9IcEI7SUFrSVEsWUFBWSxFQUFBO0VBbElwQjtJQXFJUSxrQkFBa0IsRUFBQTtFQXJJMUI7SUF3SVEsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiw2Q0FBNkMsRUFBQTtFQUlyRDtFQUNDLFlBQVksRUFBQTtFQUViO0VBQ0ksaUJBQWlCLEVBQUE7RUFFckI7RUFDSSw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osUUFBUTtFQUNSLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7RUFFdkI7RUFDSTtJQUNJLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixRQUFRO0lBQ1IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUIsRUFBQSxFQUN0QjtFQUVMO0VBQ0ksa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSx3QkFBd0I7RUFDeEIsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL21hcmtldGluZy92b3VjaGVyL2N1c3RvbS12b3VjaGVyLW1hbmFnZS9jdXN0b20tdm91Y2hlci1tYW5hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAucXVlcnkge1xyXG4vLyAgICAgLnVpLWctMyB7XHJcbi8vICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbi8vICAgICB9XHJcbi8vICAgICAuYnRuIHtcclxuLy8gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICAgICAgYnV0dG9uIHtcclxuLy8gICAgICAgICAgICAgbWFyZ2luOjEwcHggMzBweCAwO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG4ucXVlcnkgeyBcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAudWktZy0xMntcclxuICAgICAgICBtYXJnaW46IDBweCAwcHggMjhweCAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC51aUNvbnQge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgfVxyXG4gICAgLnVpLWctNCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAudWlEaXYge1xyXG4gICAgICAgIHdpZHRoOiAyNiU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMSU7XHJcbiAgICB9XHJcbiAgICAudWlEaXZMYXN0IHtcclxuICAgICAgICB3aWR0aDogMjYlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgLnVpLWctNSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICB3aWR0aDogMzIlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNC43MSU7XHJcbiAgICB9XHJcbiAgICAudWktZy03IHtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIHdpZHRoOiA2My4yOSU7XHJcbiAgICB9XHJcbiAgICAudGV4dFJlbCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAudGV4dEFicyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICNmMDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHRvcDogLTE2cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dERhdGUge1xyXG4gICAgICAgIHdpZHRoOjQ3JTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTM2N3B4KSBhbmQgKG1heC13aWR0aDoxOTE5cHgpe1xyXG4gICAgICAgIC51aS1nLTUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDIlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQuNzElO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudWktZy03IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1My4yOSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0RGF0ZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOjQ0JTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI1cHgpIGFuZCAobWF4LXdpZHRoOjEzNjZweCl7XHJcbiAgICAgICAgLnVpLWctNSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNC43MSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS1nLTcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1LjI5JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHREYXRlIHtcclxuICAgICAgICAgICAgd2lkdGg6NDMuNSU7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KXtcclxuICAgICAgICAudWktZy01IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0LjcxJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVpLWctNyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzUuMjklO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dERhdGUge1xyXG4gICAgICAgICAgICB3aWR0aDozOCU7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51aWZvbnQxNHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAudWlMZWZ0IHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCA5cHggMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuV2lkdGgge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIC5idG5NYXJnaW5SaWdodCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyN3B4O1xyXG4gICAgfVxyXG4gICAgLmJ0blJpZ2h0IHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmYzEwNywgI2ZmYzEwNyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuYm9keSAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmFkZCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYS1oYW5ke1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYmRiZGJkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE4JTtcclxuICAgIGhlaWdodDogMjNweDtcclxuICAgIHRvcDogMXB4O1xyXG4gICAgcmlnaHQ6IDFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmYmZiZjc7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpe1xyXG4gICAgLmEtaGFuZHtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiZGJkYmQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgIHRvcDogMXB4O1xyXG4gICAgICAgIHJpZ2h0OiAtMy44ZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmYmZiZjc7XHJcbiAgICB9XHJcbn1cclxuLnRhYmxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLy51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/custom-voucher-manage/custom-voucher-manage.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/custom-voucher-manage/custom-voucher-manage.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CustomVoucherManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomVoucherManageComponent", function() { return CustomVoucherManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_custom_voucher_manage_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/custom-voucher-manage.bean */ "./src/app/pages/tzb/custom/marketing/voucher/custom-voucher-manage/bean/custom-voucher-manage.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _http_voucher_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../http/voucher.http.service */ "./src/app/pages/tzb/custom/marketing/voucher/http/voucher.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
 * @author 吴仕飞
 */







var CustomVoucherManageComponent = /** @class */ (function () {
    function CustomVoucherManageComponent(voucherHttpService, confirmationService, commfunc, fb) {
        this.voucherHttpService = voucherHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.customVoucherManageBean = new _bean_custom_voucher_manage_bean__WEBPACK_IMPORTED_MODULE_1__["CustomVoucherManageBean"]();
        this.tableData = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"]; //讲英文转化为中文
        //提示信息
        this.msgs = [];
        this.first = 0; //分页控制
        this.statusId = []; //状态
        this.codeValues();
        this.statusId = this.code["CustomVoucherStatus"];
        // this.statusId = [
        //   { label: '请选择', value: '' },
        //   { label: '未抵扣', value: '0' },
        //   { label: '已抵扣', value: '1' },
        //   { label: '失效', value: '2' }
        // ]
    }
    CustomVoucherManageComponent.prototype.ngOnInit = function () {
        this.customVoucherManageBean.pageSize = 10;
        this.customVoucherManageBean.pageNum = 1;
        // this.query();
        var commonHeader = JSON.parse(this.commfunc.getSessionData("commonHeader"));
        this.extParam = commonHeader["extParam"];
        if (this.extParam["managePermission"] == "Y") {
            this.isFlag = true;
        }
        else {
            this.isFlag = false;
        }
    };
    //码值
    CustomVoucherManageComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //选择机构
    CustomVoucherManageComponent.prototype.chooseOrg = function () {
        document.body.style.overflow = 'hidden';
        this.orgTreeDisplay = !this.orgTreeDisplay;
    };
    //机构树回调
    CustomVoucherManageComponent.prototype.treeCall = function (param) {
        document.body.style.overflow = 'auto';
        this.orgTreeDisplay = false;
        this.orgName = param.orgName;
        this.customVoucherManageBean.orgId = param.orgId;
    };
    //选择员工
    CustomVoucherManageComponent.prototype.chooseWorker = function () {
        document.body.style.overflow = 'hidden';
        this.personPage = !this.personPage;
        this.applyPersonValue = this.extParam;
    };
    //员工回调
    CustomVoucherManageComponent.prototype.perInfor = function (param) {
        this.personPage = false;
        this.userName = param[0].tellerName;
        this.customVoucherManageBean.userId = param[0].tellerId;
    };
    //点击查询
    CustomVoucherManageComponent.prototype.queryClick = function () {
        this.first = 0;
        this.customVoucherManageBean.pageNum = 1;
        this.query();
    };
    //日期范围的处理
    CustomVoucherManageComponent.prototype.selectTime1 = function () {
        this.selectTime();
    };
    CustomVoucherManageComponent.prototype.selectTime2 = function () {
        this.selectTime();
    };
    CustomVoucherManageComponent.prototype.selectTime = function () {
        var _this = this;
        if (this.effectiveDateStart && this.effectiveDateEnd) {
            if (this.effectiveDateStart > this.effectiveDateEnd) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.effectiveDateStart = null;
                    _this.effectiveDateEnd = null;
                });
            }
        }
    };
    //重置
    CustomVoucherManageComponent.prototype.resetClick = function () {
        this.customVoucherManageBean.partyId = '';
        this.customVoucherManageBean.couponTypeName = '';
        this.customVoucherManageBean.statusId = '';
        this.orgName = '';
        this.customVoucherManageBean.orgId = '';
        this.userName = '';
        this.customVoucherManageBean.userId = '';
        this.effectiveDateStart = '';
        this.customVoucherManageBean.effectiveDateEnd = '';
        this.effectiveDateEnd = '';
        this.customVoucherManageBean.effectiveDateEnd = '';
    };
    //查询
    CustomVoucherManageComponent.prototype.query = function () {
        var _this = this;
        this.customVoucherManageBean.effectiveDateStart = this.commfunc.transDate(this.effectiveDateStart);
        this.customVoucherManageBean.effectiveDateEnd = this.commfunc.transDate(this.effectiveDateEnd);
        this.voucherHttpService.queryCustomerDiscountCouponUdsp(this.customVoucherManageBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.partyCouponList;
                _this.total = data.totalCount;
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
    CustomVoucherManageComponent.prototype.invalid = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: "确定要执行失效操作吗？",
            accept: function () {
                var param = {
                    couponId: item.couponId,
                    partyId: item.partyId
                };
                _this.voucherHttpService.changeCustomerDiscountCouponStatus(param).subscribe(function (data) {
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
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
                });
            }
        });
    };
    //分页
    CustomVoucherManageComponent.prototype.paginate = function (event) {
        this.rows = event.rows;
        //每页显示的条数
        this.customVoucherManageBean.pageSize = Number(event.rows);
        //当前页
        this.currentPage = event.page + 1;
        this.customVoucherManageBean.pageNum = this.currentPage;
        this.first = event.rows * event.page;
        //调用查询的方法
        this.query();
    };
    //按钮权限
    CustomVoucherManageComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomVoucherManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-voucher-manage',
            template: __webpack_require__(/*! ./custom-voucher-manage.component.html */ "./src/app/pages/tzb/custom/marketing/voucher/custom-voucher-manage/custom-voucher-manage.component.html"),
            styles: [__webpack_require__(/*! ./custom-voucher-manage.component.scss */ "./src/app/pages/tzb/custom/marketing/voucher/custom-voucher-manage/custom-voucher-manage.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], _http_voucher_http_service__WEBPACK_IMPORTED_MODULE_3__["VoucherHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_voucher_http_service__WEBPACK_IMPORTED_MODULE_3__["VoucherHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], CustomVoucherManageComponent);
    return CustomVoucherManageComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/http/voucher.http.constant.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/http/voucher.http.constant.ts ***!
  \**********************************************************************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
//抵用券请求接口
var API = {
    //抵用券
    //客户抵用券查询
    queryCustomerDiscountCouponUdsp: "queryCustomerDiscountCouponUdsp",
    //客户抵用券操作
    changeCustomerDiscountCouponStatus: 'changeCustomerDiscountCouponStatus',
    //抵用券类型新增
    couponTypeCreate: 'couponTypeCreate',
    //抵用券类型查询
    couponTypeQuery: 'couponTypeQuery',
    //抵用券类型修改
    couponTypeUpdate: 'couponTypeUpdate',
    //抵用券申请查询
    queryCouponApplyInfoList: 'queryCouponApplyInfoList',
    //抵用券申请
    createCouponApplyInfo: 'createCouponApplyInfo',
    //抵用券申请修改
    modifyCouponApplyInfo: 'modifyCouponApplyInfo',
    //抵用券删除
    deleteCouponApplyInfo: 'deleteCouponApplyInfo',
    //申请数量、截至日期校验
    checkCouponInfo: 'checkCouponInfo',
    //被介绍客户校验
    checkIntroducedCustomer: 'checkIntroducedCustomer',
    //抵用券详情查询
    queryCustRequestType: 'queryCustRequestType',
};


/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/http/voucher.http.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/http/voucher.http.service.ts ***!
  \*********************************************************************************/
/*! exports provided: VoucherHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherHttpService", function() { return VoucherHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _voucher_http_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voucher.http.constant */ "./src/app/pages/tzb/custom/marketing/voucher/http/voucher.http.constant.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/http.service */ "./src/app/@uisftech/common/service/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VoucherHttpService = /** @class */ (function () {
    function VoucherHttpService(httpService) {
        this.httpService = httpService;
    }
    //抵用券
    VoucherHttpService.prototype.queryCustomerDiscountCouponUdsp = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_ORD"] + _voucher_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].queryCustomerDiscountCouponUdsp, params);
    };
    //客户抵用券操作
    VoucherHttpService.prototype.changeCustomerDiscountCouponStatus = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_ORD"] + _voucher_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].changeCustomerDiscountCouponStatus, params);
    };
    //抵用券类型新增
    VoucherHttpService.prototype.couponTypeCreate = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_ORD"] + _voucher_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].couponTypeCreate, params);
    };
    //抵用券类型查询
    VoucherHttpService.prototype.couponTypeQuery = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_ORD"] + _voucher_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].couponTypeQuery, params);
    };
    //抵用券类型修改
    VoucherHttpService.prototype.couponTypeUpdate = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_ORD"] + _voucher_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].couponTypeUpdate, params);
    };
    //抵用券申请查询
    VoucherHttpService.prototype.queryCouponApplyInfoList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_ORD"] + _voucher_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].queryCouponApplyInfoList, params);
    };
    //抵用券申请
    VoucherHttpService.prototype.createCouponApplyInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_ORD"] + _voucher_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].createCouponApplyInfo, params);
    };
    //抵用券申请修改
    VoucherHttpService.prototype.modifyCouponApplyInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_ORD"] + _voucher_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].modifyCouponApplyInfo, params);
    };
    //抵用券申请删除
    VoucherHttpService.prototype.deleteCouponApplyInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_ORD"] + _voucher_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].deleteCouponApplyInfo, params);
    };
    //抵用券申请数量、截至日期校验
    VoucherHttpService.prototype.checkCouponInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_ORD"] + _voucher_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].checkCouponInfo, params);
    };
    //被介绍客户校验
    VoucherHttpService.prototype.checkIntroducedCustomer = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_ORD"] + _voucher_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].checkIntroducedCustomer, params);
    };
    //抵用券详情
    VoucherHttpService.prototype.queryCustRequestType = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_ORD"] + _voucher_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].queryCustRequestType, params);
    };
    VoucherHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], VoucherHttpService);
    return VoucherHttpService;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-add/applicate-add.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-add/applicate-add.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g queryCont\">\r\n  <div class=\"ui-g-12 query\">\r\n    <div class=\"ui-g-6 ui6\" [formGroup]=\"userform\">\r\n      <label appValidation>客户号：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"voucherApplicateBean.partyId\" (change)=\"doChange()\" formControlName=\"partyId\"\r\n        name=\"partyId\">\r\n      <div class=\"textRel\" *ngIf=\"!userform.controls['partyId'].valid&&userform.controls['partyId'].dirty\">\r\n        <div class=\"textAbs\">\r\n            <span class=\"promptSpan\" [hidden]=\"!userform.hasError('required','partyId')\">客户号不能为空！</span>\r\n            <!-- <p [hidden]=\"!userform.hasError('required','partyId')\"> 客户号不能为空！</p> -->\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['partyId'].valid&&userform.controls['partyId'].dirty\"> -->\r\n        <!-- <p [hidden]=\"!userform.hasError('pattern','partyId')\"> 不能有空格！</p> -->\r\n        <!-- <p [hidden]=\"!userform.hasError('required','partyId')\"> 客户号不能为空！</p>\r\n      </div> -->\r\n    </div>\r\n    <div class=\"ui-g-6 ui6\">\r\n      <label>客户名称：</label>\r\n      <input type=\"text\" disabled pInputText [(ngModel)]=\"voucherApplicateBean.partyName\" name=\"partyName\">\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 query\">\r\n    <div class=\"ui-g-6 ui6\">\r\n      <label>被介绍客户号：</label>\r\n      <input type=\"text\" pInputText (change)=\"doChange1()\" [(ngModel)]=\"voucherApplicateBean.partyIdTo\" name=\"partyIdTo\">\r\n    </div>\r\n\r\n    <div class=\"ui-g-6 ui6\">\r\n      <label>被介绍客户名称：</label>\r\n      <input type=\"text\" disabled pInputText [(ngModel)]=\"voucherApplicateBean.partyIdToName\" name=\"partyIdToName\">\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 queryLast\">\r\n    <div class=\"ui-g-6 ui6\">\r\n      <label class=\"labelWidth\">被介绍客户贷款余额：</label>\r\n      <input id=\"input\" type=\"text\" pInputText disabled [(ngModel)]=\"voucherApplicateBean.loanBalanceTo\" name=\"loanBalanceTo\">\r\n\r\n    </div>\r\n    <div class=\"ui-g-6 ui6\">\r\n      <label class=\"labelWidth\">被介绍客户存款余额：</label>\r\n      <input id=\"input\" type=\"text\" disabled pInputText [(ngModel)]=\"voucherApplicateBean.depositBalanceTo\" name=\"depositBalanceTo\">\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"table ui-g-12\">\r\n  <p-dataTable emptyMessage=\"没有查找到数据\" [value]=\"tableData\" scrollable=\"true\" scrollHeight=\"350px\">\r\n    <p-column [style]=\"{'width':'3%'}\" field=\"\" header=' '></p-column>\r\n    <p-column [style]=\"{'width':'7%'}\">\r\n      <ng-template pTemplate=\"header\">\r\n        <p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkBoxAll\" binary=\"false\" (click)=\"checkBoxAllClick($event)\"></p-checkbox>\r\n      </ng-template>\r\n      <ng-template let-ri=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n        <p-checkbox name=\"group\" [value]=\"ri\" [(ngModel)]=\"selected\" inputId=\"ny\"></p-checkbox>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"couponTypeName\" header='抵用券类型名称'></p-column>\r\n    <p-column field=\"couponAmount\" header='面值（元）'></p-column>\r\n    <p-column field=\"proportion\" header='可抵用比例'></p-column>\r\n    <p-column field=\"validity\" header='有效期'></p-column>\r\n    <p-column field=\"surNum\" header='剩余总数量'></p-column>\r\n    <p-column field=\"onceNum\" header='单次申请上限'></p-column>\r\n    <p-column field=\"number\" header='申请数量'>\r\n      <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-car=\"rowData\">\r\n        <input class=\"inp\" type=\"text\" [(ngModel)]=\"car.number\" pInputText (change)=numChange($event,car)>\r\n        <span class=\"reduce\" (click)=\"reduce(car.number,ri)\">-</span><span class=\"add\" (click)=\"add(car.number,ri)\">+</span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column [style]=\"{'width':'4%'}\" field=\"\" header=' '></p-column>\r\n  </p-dataTable>\r\n</div>\r\n<div class=\"ui-g-12 text\" [formGroup]=\"userform\">\r\n  <label appValidation >申请理由：</label>\r\n  <textarea name=\"applyReason\" formControlName=\"applyReason\" [(ngModel)]=\"voucherApplicateBean.applyReason\"></textarea>\r\n  <div class=\"textRel\" *ngIf=\"!userform.controls['applyReason'].valid&&userform.controls['applyReason'].dirty\">\r\n    <div class=\"textAbs\">\r\n      <span class=\"promptSpan\" [hidden]=\"!userform.hasError('required','applyReason')\">申请理由不能为空！</span>\r\n      <!-- <p [hidden]=\"!userform.hasError('required','applyReason')\"> 申请理由不能为空！</p> -->\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['applyReason'].valid&&userform.controls['applyReason'].dirty\">\r\n    <p [hidden]=\"!userform.hasError('required','applyReason')\"> 申请理由不能为空！</p>\r\n  </div> -->\r\n</div>\r\n<div class=\"ui-g-12 upload\">\r\n  <label >上传附件：</label>\r\n  <p-fileUpload  chooseLabel=\"浏览\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"load($event)\"\r\n    multiple=\"multiple\" invalidFileTypeMessageDetail=\"\" invalidFileTypeMessageSummary=\"\" >\r\n    <ng-template pTemplate=\"content\">\r\n      <ul *ngIf=\"upLoadFiles.length\">\r\n        <li *ngFor=\"let file of upLoadFiles\">\r\n          {{file.name}}-{{file.size}}bytes\r\n        </li>\r\n      </ul>\r\n    </ng-template>\r\n  </p-fileUpload>\r\n  <p-dialog *ngIf=\"dealPerShow\" header=\"提交给\" [(visible)]=\"dealPerShow\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n  </p-dialog>\r\n</div>\r\n<div class=\"ui-g-12 btn\">\r\n  <button class=\"btnRight\" pButton type=\"button\" label=\"保存\" (click)='preserveClick()'></button>\r\n  <button class=\"btnMarginRight\" pButton type=\"button\" label=\"提交\" (click)='submit()'></button>\r\n  <button class=\"btnWidth\" pButton type=\"button\" label=\"取消\" (click)='modifyCloseBtn()'></button>\r\n</div>\r\n<div class=\"ui-g-12 foot\"> </div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-add/applicate-add.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-add/applicate-add.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".promptSpan {\n  height: 14px;\n  width: auto;\n  color: #f00;\n  float: left; }\n\n.queryCont {\n  padding: 0px;\n  border-top: 17px solid #f7f7f7;\n  border-bottom: 17px solid #f7f7f7; }\n\n.query, .queryLast {\n  padding: 0px;\n  margin-top: 29px; }\n\n.query input, .queryLast input {\n    width: 50%; }\n\n.query .ui6, .queryLast .ui6 {\n    padding: 0px;\n    height: 25px; }\n\n.query label, .queryLast label {\n    display: inline-block;\n    width: 39.5%;\n    text-align: right;\n    font-size: 14px; }\n\n.textRel {\n  position: relative;\n  width: 0px;\n  height: 0px; }\n\n.textAbs {\n  position: absolute;\n  width: 250px;\n  font-size: 14px;\n  color: #f00;\n  line-height: 20px;\n  height: 20px;\n  top: 0px;\n  left: 204px; }\n\n.queryLast {\n  margin: 29px 0px; }\n\n.btn {\n  text-align: center;\n  padding: 0px;\n  margin: 94px 0px 46px 0px; }\n\n.btn .btnWidth {\n    width: 100px; }\n\n.btn .btnMarginRight {\n    width: 100px;\n    margin-right: 27px; }\n\n.btn .btnRight {\n    width: 100px;\n    margin-right: 27px;\n    background: linear-gradient(#ffc107, #ffc107); }\n\n.foot {\n  width: 100%;\n  height: 17px;\n  background-color: #f7f7f7;\n  padding: 0px; }\n\n.text label {\n  display: inline-block;\n  width: 20%;\n  text-align: right; }\n\n.text textarea {\n  width: 74.9%;\n  height: 100px;\n  resize: vertical; }\n\n.upload {\n  padding: 0px;\n  margin: 43px 0px 0px 0px;\n  height: 27px; }\n\n.upload label {\n    display: inline-block;\n    width: 20%;\n    text-align: right; }\n\n.text {\n  padding: 0px;\n  margin-top: 32px; }\n\n.reduce,\n.add {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  border-radius: 100%;\n  background: #008aa6;\n  color: #fff;\n  margin-left: 2px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.inp {\n  min-width: 0;\n  width: 60px;\n  height: 25px;\n  font-size: 13px; }\n\n.table {\n  text-align: center;\n  padding: 0px;\n  margin-top: 19px; }\n\n:host/deep/ .ui-fileupload.ui-widget.ng-star-inserted {\n  width: 74%;\n  display: inline-block; }\n\n:host/deep/ .ui-datatable .ui-datatable-thead > tr > th,\n:host/deep/ .ui-datatable .ui-datatable-tfoot > tr > td,\n:host/deep/ .ui-datatable .ui-datatable-data > tr > td {\n  padding: .25em 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvdm91Y2hlci92b3VjaGVyLWFwcGxpY2F0ZS9hcHBsaWNhdGUtYWRkL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcbWFya2V0aW5nXFx2b3VjaGVyXFx2b3VjaGVyLWFwcGxpY2F0ZVxcYXBwbGljYXRlLWFkZFxcYXBwbGljYXRlLWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsaUNBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUZwQjtJQUlRLFVBQVUsRUFBQTs7QUFKbEI7SUFPUSxZQUFZO0lBQ1osWUFBWSxFQUFBOztBQVJwQjtJQVdRLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTs7QUFHdkI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFFBQVE7RUFDUixXQUFXLEVBQUE7O0FBRWY7RUFDSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUg3QjtJQUtRLFlBQVksRUFBQTs7QUFMcEI7SUFRUSxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7O0FBVDFCO0lBWVEsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw2Q0FBNkMsRUFBQTs7QUFHckQ7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBR2hCO0VBRVEscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFKekI7RUFPUSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUd4QjtFQUNJLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsWUFBWSxFQUFBOztBQUhoQjtJQUtRLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsaUJBQWlCLEVBQUE7O0FBR3pCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjs7RUFFSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksVUFBVTtFQUNWLHFCQUFxQixFQUFBOztBQUd6Qjs7O0VBR0ksMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL21hcmtldGluZy92b3VjaGVyL3ZvdWNoZXItYXBwbGljYXRlL2FwcGxpY2F0ZS1hZGQvYXBwbGljYXRlLWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9tcHRTcGFuIHtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgY29sb3I6ICNmMDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4ucXVlcnlDb250IHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci10b3A6IDE3cHggc29saWQgI2Y3ZjdmNzsgXHJcbiAgICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkICNmN2Y3Zjc7IFxyXG59XHJcbi5xdWVyeSwucXVlcnlMYXN0IHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDI5cHg7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC51aTYge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAzOS41JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuLnRleHRSZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG59XHJcbi50ZXh0QWJzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjZjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDIwNHB4O1xyXG59XHJcbi5xdWVyeUxhc3Qge1xyXG4gICAgbWFyZ2luOiAyOXB4IDBweDtcclxufVxyXG5cclxuXHJcbi5idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiA5NHB4IDBweCA0NnB4IDBweDtcclxuICAgIC5idG5XaWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bk1hcmdpblJpZ2h0IHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyN3B4O1xyXG4gICAgfVxyXG4gICAgLmJ0blJpZ2h0IHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyN3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZjMTA3LCAjZmZjMTA3KTtcclxuICAgIH1cclxufVxyXG4uZm9vdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICB3aWR0aDogNzQuOSU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICByZXNpemU6IHZlcnRpY2FsO1xyXG4gICAgfVxyXG59XHJcbi51cGxvYWR7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDQzcHggMHB4IDBweCAwcHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuLnRleHQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxufVxyXG5cclxuLnJlZHVjZSxcclxuLmFkZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDhhYTY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmlucCB7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDE5cHg7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1maWxldXBsb2FkLnVpLXdpZGdldC5uZy1zdGFyLWluc2VydGVkIHtcclxuICAgIHdpZHRoOiA3NCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZD50cj50aCxcclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRmb290PnRyPnRkLFxyXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtZGF0YT50cj50ZCB7XHJcbiAgICBwYWRkaW5nOiAuMjVlbSAwICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-add/applicate-add.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-add/applicate-add.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ApplicateAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicateAddComponent", function() { return ApplicateAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_voucher_applicate_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/voucher-applicate.bean */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/bean/voucher-applicate.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var _http_voucher_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../http/voucher.http.service */ "./src/app/pages/tzb/custom/marketing/voucher/http/voucher.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ApplicateAddComponent = /** @class */ (function () {
    function ApplicateAddComponent(voucherHttpService, cusOperationHttpService, cusViewHttpService, fb, commfunc) {
        this.voucherHttpService = voucherHttpService;
        this.cusOperationHttpService = cusOperationHttpService;
        this.cusViewHttpService = cusViewHttpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.preserveFlag = false;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.voucherApplicateBean = new _bean_voucher_applicate_bean__WEBPACK_IMPORTED_MODULE_2__["VoucherApplicateBean"]();
        this.location = new _bean_voucher_applicate_bean__WEBPACK_IMPORTED_MODULE_2__["Location"]();
        //提示信息
        this.msgs = [];
        this.tableData = []; //列表数据
        this.selected = []; //抵用券类型选择列表
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__["TZB_CUS_UPLOAD"]; //上传路径
        this.upLoadFiles = []; //上传文件名
        this.infoList = []; //上传文件路径
    }
    ApplicateAddComponent.prototype.ngOnInit = function () {
        this.mesg = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.chName = JSON.parse(this.commfunc.getSessionDataCH("chName"));
        this.userform = this.fb.group({
            'partyId': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'applyReason': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        this.voucherTypeQuewry();
    };
    //抵用券类型查询
    ApplicateAddComponent.prototype.voucherTypeQuewry = function () {
        var _this = this;
        var param = {
            statusId: '0',
            branchId: this.locationValue
        };
        this.voucherHttpService.couponTypeQuery(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = _this.commfunc.typeListProcess(data.couponTypeList);
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
    ApplicateAddComponent.prototype.reduce = function (num, index) {
        if (this.tableData[index].number) {
            num--;
            this.tableData[index].number = String(num);
            if (num < 1) {
                this.tableData[index].number = String(1);
            }
            else {
                this.tableData[index].number = String(num);
            }
        }
        else {
            this.tableData[index].number = String(1);
        }
    };
    ApplicateAddComponent.prototype.add = function (num, index) {
        if (this.tableData[index].number) {
            num++;
            this.tableData[index].number = String(num);
        }
        else {
            this.tableData[index].number = String(1);
        }
    };
    //申请数量
    ApplicateAddComponent.prototype.numChange = function (event, car) {
        var val = event.srcElement.value;
        if (!(/^[1-9]\d*$/.test(val))) {
            event.srcElement.value = "";
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '申请数量只能为正整数' });
        }
        else {
            if (Number(val) > Number(car.onceNum)) {
                event.srcElement.value = "";
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '申请数量不能大于单次申请数量上限' });
            }
            if (Number(val) > Number(car.surNum)) {
                event.srcElement.value = "";
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '申请数量不能大于剩余总数量' });
            }
        }
    };
    //选中的类型列表处理
    ApplicateAddComponent.prototype.process = function () {
        var _this = this;
        var listNo = [];
        this.selected.forEach(function (ri) {
            var obj = {};
            obj['couponTypeId'] = _this.tableData[ri].couponTypeId;
            obj['number'] = _this.tableData[ri].number;
            obj['grantEndTime'] = _this.commfunc.getCurrentDate();
            listNo.push(obj);
        });
        return listNo;
    };
    //客户名称查询
    ApplicateAddComponent.prototype.doChange = function () {
        var _this = this;
        this.voucherApplicateBean.partyId = this.voucherApplicateBean.partyId.replace(/(^\s*)|(\s*$)/g, '');
        var param = {
            custNo: this.voucherApplicateBean.partyId,
            principalLinkman: this.mesg["userId"]
        };
        this.cusOperationHttpService.selectCustBriefInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.voucherApplicateBean.partyName = data.custName;
            }
        });
    };
    //存款&贷款查询
    ApplicateAddComponent.prototype.doChange1 = function () {
        var _this = this;
        this.voucherApplicateBean.partyIdTo = this.voucherApplicateBean.partyIdTo.replace(/(^\s*)|(\s*$)/g, '');
        var param = {
            custNo: this.voucherApplicateBean.partyIdTo
        };
        this.cusViewHttpService.selectCustBriefAmtInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.voucherApplicateBean.depositBalanceTo = data.depositsOutstand;
                _this.voucherApplicateBean.loanBalanceTo = data.creditBalance;
            }
        });
        var param1 = {
            custNo: this.voucherApplicateBean.partyIdTo,
            principalLinkman: this.mesg["userId"]
        };
        this.cusOperationHttpService.selectCustBriefInfo(param1).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.voucherApplicateBean.partyIdToName = data.custName;
            }
        });
    };
    //点击上传
    ApplicateAddComponent.prototype.load = function (event) {
        if (JSON.parse(event.xhr.response).success == false) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: JSON.parse(event.xhr.response).errorMsg });
            return;
        }
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.upLoadFiles.push(file);
        }
        var infoList = JSON.parse(event.xhr.response);
        var obj = {};
        for (var _b = 0, infoList_1 = infoList; _b < infoList_1.length; _b++) {
            var item = infoList_1[_b];
            obj["filePath"] = item.fileUrl + item.fileName;
            this.infoList.push(obj);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '文件上传', detail: '上传成功' });
    };
    //多行列表全选按钮
    ApplicateAddComponent.prototype.checkBoxAllClick = function () {
        var list = [];
        if (this.tableData) {
            if (this.checkBoxAll) {
                for (var i = 0; i < this.tableData.length; i++) {
                    if (list.indexOf(i) == -1) {
                        list.push(i);
                    }
                }
            }
            else {
                list = [];
            }
        }
        this.selected = list;
    };
    //保存按钮
    ApplicateAddComponent.prototype.preserveClick = function () {
        this.preSub('0', '保存成功');
        if (this.preserveFlag) {
            this.save('0', '保存成功');
        }
    };
    //提交
    ApplicateAddComponent.prototype.submit = function () {
        this.preSub('1', '提交成功');
        // if(!this.dealPerShow){
        //   this.preSub('1', '提交成功')
        // }
    };
    ApplicateAddComponent.prototype.outValueCall = function (event) {
        var ss = '';
        event.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        // this.preSub('1', '提交成功')
        this.save('1', '提交成功');
    };
    ApplicateAddComponent.prototype.outDisplayCall = function (event) {
        this.dealPerShow = event;
    };
    //保存和提交封装
    ApplicateAddComponent.prototype.preSub = function (flag, msg) {
        var _this = this;
        // //校验的
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        //抵用券类型列表非空校验
        if (this.selected.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择抵用券类型' });
            return;
        }
        var thiss = this;
        var d = new Promise(function (resolve, reject) {
            //主联系人校验
            thiss.cusViewHttpService.selectPartyRelationByAdminDoor({ custList: [{ "custNo": thiss.voucherApplicateBean.partyId }] }).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    resolve({ a: data.custList[0].custInfoList });
                }
                else {
                    thiss.msgs = [];
                    thiss.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                thiss.msgs = [];
                thiss.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        });
        var a = new Promise(function (resolve, reject) {
            //申请数量，发放截至日期校验
            var param = {
                couponTypeList: thiss.process(),
            };
            thiss.voucherHttpService.checkCouponInfo(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    resolve({ b: data.flag });
                }
                else {
                    thiss.msgs = [];
                    thiss.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                thiss.msgs = [];
                thiss.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        });
        var b = new Promise(function (resolve, reject) {
            //被介绍客户校验
            var param1 = {
                partyIdTo: thiss.voucherApplicateBean.partyIdTo
            };
            thiss.voucherHttpService.checkIntroducedCustomer(param1).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    resolve({ c: data.flag });
                }
                else {
                    thiss.msgs = [];
                    thiss.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                thiss.msgs = [];
                thiss.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        });
        //a、b、d全部响应成功后执行c
        var c = Promise.all([d, a, b]);
        c.then(function (res) {
            var firstRes = res[0]['a'];
            var custManagerNosFlag = false;
            var custManagerTypeFlag = false;
            //非主联系人校验
            for (var i = 0; i < firstRes.length; i++) {
                if (firstRes[i]['custManagerNos'] == '0301') {
                    custManagerNosFlag = true;
                    var custManagerTypeList = firstRes[i]['custManagerType'] ? firstRes[i]['custManagerType'].split('|') : [];
                    for (var j = 0; j < custManagerTypeList.length; j++) {
                        if (custManagerTypeList[j] == _this.mesg['userId']) {
                            custManagerTypeFlag = true;
                            break;
                        }
                    }
                    break;
                }
            }
            if (!custManagerNosFlag || !custManagerTypeFlag) {
                thiss.msgs = [];
                thiss.msgs.push({ severity: 'error', summary: '提示', detail: '非主联系人不允许申请' });
                return;
            }
            //申请数量、发放截至日期、被介绍客户好不通过禁止提交和保存
            if (res[1]['b'] != '0' || res[2]['c'] != '0') {
                return;
            }
            // 被介绍客户号不能与客户号相同校验
            if (_this.voucherApplicateBean.partyId == _this.voucherApplicateBean.partyIdTo) {
                thiss.msgs = [];
                thiss.msgs.push({ severity: 'error', summary: '提示', detail: '被介绍客户号不能与客户号相同' });
                return;
            }
            if (flag == '1') {
                thiss.waitSelUserList = _this.commfunc.query('DYQTYLC', {});
                thiss.dealPerShow = _this.waitSelUserList.display;
                thiss.outVal = _this.waitSelUserList.waitSelUserList;
                if (thiss.waitSelUserList.erro) {
                    thiss.msgs = [];
                    thiss.msgs.push({ severity: 'error', summary: '提示', detail: _this.waitSelUserList.erro });
                }
            }
            else {
                _this.preserveFlag = true;
            }
        });
    };
    ApplicateAddComponent.prototype.save = function (flag, msg) {
        var _this = this;
        this.voucherApplicateBean.personName = this.chName['userName'];
        this.voucherApplicateBean.branchIdName = this.chName['orgName'];
        this.voucherApplicateBean.flag = flag;
        this.voucherApplicateBean.couponTypeList = this.process();
        this.voucherApplicateBean.infoList = this.infoList;
        this.voucherHttpService.createCouponApplyInfo(this.voucherApplicateBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.outValue.emit({
                    display: false,
                    message: msg
                });
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
    //取消
    ApplicateAddComponent.prototype.modifyCloseBtn = function () {
        this.outValue.emit({ display: false });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ApplicateAddComponent.prototype, "locationValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ApplicateAddComponent.prototype, "outValue", void 0);
    ApplicateAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applicate-add',
            template: __webpack_require__(/*! ./applicate-add.component.html */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-add/applicate-add.component.html"),
            styles: [__webpack_require__(/*! ./applicate-add.component.scss */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-add/applicate-add.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"], app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"], app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_5__["CusViewHttpService"], _http_voucher_http_service__WEBPACK_IMPORTED_MODULE_6__["VoucherHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_voucher_http_service__WEBPACK_IMPORTED_MODULE_6__["VoucherHttpService"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"],
            app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_5__["CusViewHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"]])
    ], ApplicateAddComponent);
    return ApplicateAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-detail/applicate-detail.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-detail/applicate-detail.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g queryCont\">\r\n  <div class=\"ui-g-12 query\">\r\n    <div class=\"ui-g-6 ui6\" >\r\n      <label appValidation>客户号：</label>\r\n      <input type=\"text\" pInputText disabled [(ngModel)]=\"partyId\"  name=\"partyId\">\r\n      \r\n    </div>\r\n    <div class=\"ui-g-6 ui6\" >\r\n      <label >客户名称：</label>\r\n      <input type=\"text\" pInputText disabled [(ngModel)]=\"partyName\"  name=\"partyName\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 query\">\r\n    <div class=\"ui-g-6 ui6\" >\r\n      <label >被介绍客户号：</label>\r\n      <input type=\"text\" pInputText disabled [(ngModel)]=\"partyIdTo\"  name=\"partyIdTo\">\r\n     \r\n    </div>\r\n\r\n    <div class=\"ui-g-6 ui6\" >\r\n      <label >被介绍客户名称：</label>\r\n      <input type=\"text\" pInputText disabled [(ngModel)]=\"partyIdToName\" name=\"partyIdToName\">\r\n      \r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 queryLast\">\r\n    <div class=\"ui-g-6 ui6\" >\r\n      <label >被介绍客户贷款余额：</label>\r\n      <input type=\"text\" pInputText disabled [(ngModel)]=\"loanBalanceTo\"  name=\"loanBalanceTo\">\r\n      \r\n    </div>\r\n    <div class=\"ui-g-6 ui6\" >\r\n      <label >被介绍客户存款余额：</label>\r\n      <input type=\"text\" pInputText disabled [(ngModel)]=\"depositBalanceTo\"  name=\"depositBalanceTo\">\r\n     \r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"table ui-g-12\">\r\n  <p-dataTable emptyMessage=\"没有查找到数据\" [value]=\"tableData\" scrollable=\"true\" scrollHeight=\"350px\">\r\n\r\n    <p-column field=\"couponTypeName\" header='抵用券类型名称'></p-column>\r\n    <p-column field=\"couponAmount\" header='面值（元）'></p-column>\r\n    <p-column field=\"proportion\" header='可抵用比例'></p-column>\r\n    <p-column field=\"validity\" header='有效期'></p-column>\r\n    <p-column field=\"number\" header='申请数量'>\r\n     \r\n    </p-column>\r\n  </p-dataTable>\r\n</div>\r\n<div class=\"ui-g-12 text\"  >\r\n  <label >申请理由：</label>\r\n  <textarea name=\"applyReason\" disabled [(ngModel)]=\"applyReason\" ></textarea>\r\n  \r\n</div>\r\n<div class=\"ui-g-12 detailBtn\">\r\n  <div class=\"ui-g-4 selectUp\" >\r\n    <button pButton type=\"button\" class=\"selectUpBtn\" label=\"查看上传附件\" (click)='downloadCheck()'></button>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g-12 foot\"> </div>\r\n<!-- <div class=\"ui-g-12 upload\" *ngIf=\"showFlag\">\r\n  <label >上传附件：</label>\r\n  <input id=\"input\" type=\"text\" pInputText disabled [(ngModel)]=\"filePath\"  name=\"filePath\">\r\n</div> -->\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-detail/applicate-detail.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-detail/applicate-detail.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".queryCont {\n  padding: 0px;\n  border-top: 17px solid #f7f7f7;\n  border-bottom: 17px solid #f7f7f7; }\n\n.query, .queryLast {\n  padding: 0px;\n  margin-top: 29px; }\n\n.query input, .queryLast input {\n    width: 50%; }\n\n.query .ui6, .queryLast .ui6 {\n    padding: 0px;\n    height: 25px; }\n\n.query label, .queryLast label {\n    display: inline-block;\n    width: 39.5%;\n    text-align: right;\n    font-size: 14px; }\n\n.queryLast {\n  margin: 29px 0px; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin: 30px; }\n\n.text {\n  padding: 0px;\n  margin-top: 32px; }\n\n.text label {\n    display: inline-block;\n    width: 20%;\n    text-align: right; }\n\n.text textarea {\n    width: 74.9%;\n    height: 100px;\n    resize: vertical; }\n\n.upload {\n  padding: 0px;\n  margin: 43px 0px 0px 0px;\n  height: 27px; }\n\n.upload label {\n    display: inline-block;\n    width: 20%;\n    text-align: right; }\n\n.upload input {\n  width: 74%; }\n\n.table {\n  text-align: center;\n  padding: 0px;\n  margin-top: 19px; }\n\n:host/deep/ .ui-fileupload.ui-widget.ng-star-inserted {\n  width: 74%;\n  display: inline-block; }\n\n.detailBtn {\n  padding: 0px;\n  margin: 46px 0px; }\n\n.selectUp, .selectUpBtn {\n  width: 20%;\n  height: 25px;\n  padding: 0px;\n  margin: 0px; }\n\n.selectUpBtn {\n  width: 100px;\n  float: right; }\n\n.foot {\n  width: 100%;\n  height: 17px;\n  background-color: #f7f7f7;\n  padding: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvdm91Y2hlci92b3VjaGVyLWFwcGxpY2F0ZS9hcHBsaWNhdGUtZGV0YWlsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcbWFya2V0aW5nXFx2b3VjaGVyXFx2b3VjaGVyLWFwcGxpY2F0ZVxcYXBwbGljYXRlLWRldGFpbFxcYXBwbGljYXRlLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsaUNBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUZwQjtJQUlRLFVBQVUsRUFBQTs7QUFKbEI7SUFPUSxZQUFZO0lBQ1osWUFBWSxFQUFBOztBQVJwQjtJQVdRLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTs7QUFHdkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxZQUFZLEVBQUE7O0FBR3BCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUZwQjtJQUlRLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsaUJBQWlCLEVBQUE7O0FBTnpCO0lBU1EsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0IsRUFBQTs7QUFHeEI7RUFDSSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLFlBQVksRUFBQTs7QUFIaEI7SUFLUSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGlCQUFpQixFQUFBOztBQUd6QjtFQUVRLFVBQVUsRUFBQTs7QUFHbEI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFVBQVU7RUFDVixxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUVmO0VBQ0ksWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL21hcmtldGluZy92b3VjaGVyL3ZvdWNoZXItYXBwbGljYXRlL2FwcGxpY2F0ZS1kZXRhaWwvYXBwbGljYXRlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWVyeUNvbnQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMTdweCBzb2xpZCAjZjdmN2Y3OyBcclxuICAgIGJvcmRlci1ib3R0b206IDE3cHggc29saWQgI2Y3ZjdmNzsgXHJcbn1cclxuLnF1ZXJ5LC5xdWVyeUxhc3R7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyOXB4O1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICAudWk2IHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMzkuNSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcbi5xdWVyeUxhc3Qge1xyXG4gICAgbWFyZ2luOiAyOXB4IDBweDtcclxufVxyXG4uYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgIH1cclxufVxyXG4udGV4dHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IDc0LjklO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcclxuICAgIH1cclxufVxyXG4udXBsb2Fke1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiA0M3B4IDBweCAwcHggMHB4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcbi51cGxvYWR7XHJcbiAgICBpbnB1dHtcclxuICAgICAgICB3aWR0aDogNzQlO1xyXG4gICAgfVxyXG59XHJcbi50YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDE5cHg7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWZpbGV1cGxvYWQudWktd2lkZ2V0Lm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gICAgd2lkdGg6IDc0JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uZGV0YWlsQnRue1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiA0NnB4IDBweDtcclxufVxyXG4uc2VsZWN0VXAsLnNlbGVjdFVwQnRuIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uc2VsZWN0VXBCdG4ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5mb290IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgIHBhZGRpbmc6IDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-detail/applicate-detail.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-detail/applicate-detail.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ApplicateDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicateDetailComponent", function() { return ApplicateDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_voucher_applicate_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bean/voucher-applicate.bean */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/bean/voucher-applicate.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _http_voucher_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/voucher.http.service */ "./src/app/pages/tzb/custom/marketing/voucher/http/voucher.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ApplicateDetailComponent = /** @class */ (function () {
    function ApplicateDetailComponent(voucherHttpService, cusViewHttpService, fb, commfunc, route) {
        this.voucherHttpService = voucherHttpService;
        this.cusViewHttpService = cusViewHttpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.route = route;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.voucherApplicateBean = new _bean_voucher_applicate_bean__WEBPACK_IMPORTED_MODULE_3__["VoucherApplicateBean"]();
        //提示信息
        this.msgs = [];
        this.selected = []; //抵用券类型选择列表
        this.upLoadFiles = []; //上传文件名
    }
    ApplicateDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.route.snapshot.params['partyId']) { //审批调用
            this.showFlag = false;
            console.log(this.route.snapshot);
            this.partyId = this.route.snapshot.params['partyId'];
            this.partyName = this.route.snapshot.params['partyName'];
            this.couponApplyId = this.route.snapshot.params['couponApplyId'];
            this.voucherHttpService.queryCouponApplyInfoList({ couponApplyId: this.couponApplyId }).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.applyList = data.applyList[0];
                    _this.partyIdTo = data.applyList[0].partyIdTo;
                    _this.partyIdToName = data.applyList[0].partyIdToName;
                    _this.applyReason = data.applyList[0].applyReason;
                    _this.tableData = data.applyList[0].couponTypeList;
                    _this.backView(_this.partyIdTo);
                }
            });
            //this.route.snapshot.params['couponApplyId']
            // this.voucherHttpService.queryCustRequestType({ custRequestId: this.route.snapshot.params['couponApplyId'] }).subscribe(data => {
            //   if (data.returnCode.code == 'success') {
            //     this.tableData = data.typeList;
            //   }
            // })
        }
        else { //详情调用
            this.voucherApplicateBean = this.inValue;
            this.applyList = this.inValue;
            this.showFlag = true;
            this.partyId = this.inValue.partyId;
            this.partyName = this.inValue.partyName;
            this.partyIdTo = this.inValue.partyIdTo;
            this.partyIdToName = this.inValue.partyIdToName;
            this.loanBalanceTo = this.inValue.loanBalanceTo;
            this.depositBalanceTo = this.inValue.depositBalanceTo;
            this.applyReason = this.inValue.applyReason;
            this.filePath = this.inValue.filePath;
            this.backView(this.partyIdTo);
            // this.query();
            this.tableData = this.inValue.couponTypeList;
        }
    };
    //存款&贷款回显
    ApplicateDetailComponent.prototype.backView = function (custNo) {
        var _this = this;
        var param = {
            custNo: custNo
        };
        this.cusViewHttpService.selectCustBriefAmtInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.depositBalanceTo = data.depositsOutstand;
                _this.loanBalanceTo = data.creditBalance;
            }
        });
    };
    ApplicateDetailComponent.prototype.downloadCheck = function () {
        if (this.applyList.description == null || this.applyList.description == "") {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "暂未上传任何影像" });
            return;
        }
        //获取用户名及ID
        //30301180515141949000454
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        var orgID = commonHeader.orgId;
        var userId = commonHeader.userId;
        var orgName = chName.orgName;
        var userName = chName.userName;
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1 + '';
        var datas = time.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (datas.length < 2) {
            datas = "0" + datas;
        }
        var QUERY_TIME = '' + year + month + this.applyList;
        window.open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__["TZB_HTTP_YXKQ"] + "SunIAS_V7/SunIASRequestServlet.do?UID=MOBILE&OrgID=" + orgID + "&OrgName=" + orgName + "&OrgOwner=" + orgID + "&right=0100000&PWD=cyg&UserID=" + userId + "&UserName=" + userName + "&AppID=SA&info1=BUSI_SERIAL_NO:" + this.applyList.description + ";OBJECT_NAME:APP1009;FILELEVEL:66;RIGHT:1111111;OBJECT_NAME:APP1009;QUERY_TIME:" + QUERY_TIME);
    };
    //点击上传
    ApplicateDetailComponent.prototype.load = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.upLoadFiles.push(file);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '文件上传', detail: event.xhr.reponse });
    };
    ApplicateDetailComponent.prototype.modifyCloseBtn = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ApplicateDetailComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ApplicateDetailComponent.prototype, "outValue", void 0);
    ApplicateDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applicate-detail',
            template: __webpack_require__(/*! ./applicate-detail.component.html */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-detail/applicate-detail.component.html"),
            styles: [__webpack_require__(/*! ./applicate-detail.component.scss */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-detail/applicate-detail.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"], app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_6__["CusViewHttpService"], _http_voucher_http_service__WEBPACK_IMPORTED_MODULE_5__["VoucherHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_voucher_http_service__WEBPACK_IMPORTED_MODULE_5__["VoucherHttpService"],
            app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_6__["CusViewHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ApplicateDetailComponent);
    return ApplicateDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-update/applicate-update.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-update/applicate-update.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g queryCont\">\r\n  <div class=\"ui-g-12 query\">\r\n    <div class=\"ui-g-6 ui6\" [formGroup]=\"userform\">\r\n      <label appValidation>客户号：</label>\r\n      <input type=\"text\" pInputText (change)=\"doChange()\" [(ngModel)]=\"voucherApplicateBean.partyId\" formControlName=\"partyId\"\r\n        name=\"partyId\">\r\n      <div class=\"textRel\" *ngIf=\"!userform.controls['partyId'].valid&&userform.controls['partyId'].dirty\">\r\n        <div class=\"textAbs\">\r\n          <span class=\"promptSpan\" [hidden]=\"!userform.hasError('required','partyId')\">客户号不能为空！</span>\r\n          <!-- <p [hidden]=\"!userform.hasError('required','partyId')\"> 客户号不能为空！</p> -->\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['partyId'].valid&&userform.controls['partyId'].dirty\"> -->\r\n        <!-- <p [hidden]=\"!userform.hasError('pattern','partyId')\"> 不能有空格！</p> -->\r\n        <!-- <p [hidden]=\"!userform.hasError('required','partyId')\"> 客户号不能为空！</p>\r\n      </div> -->\r\n    </div>\r\n    <div class=\"ui-g-6 ui6\">\r\n      <label>客户名称：</label>\r\n      <input type=\"text\" pInputText disabled [(ngModel)]=\"voucherApplicateBean.partyName\" name=\"partyName\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 query\">\r\n    <div class=\"ui-g-6\" >\r\n      <label>被介绍客户号：</label>\r\n      <input type=\"text\" (change)=\"doChange1()\" pInputText [(ngModel)]=\"voucherApplicateBean.partyIdTo\" name=\"partyIdTo\">\r\n     \r\n    </div>\r\n\r\n    <div class=\"ui-g-6 ui6\">\r\n      <label>被介绍客户名称：</label>\r\n      <input type=\"text\" pInputText disabled [(ngModel)]=\"voucherApplicateBean.partyIdToName\" name=\"partyNameTo\">\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 queryLast\">\r\n    <div class=\"ui-g-6 ui6\">\r\n      <label>被介绍客户贷款余额：</label>\r\n      <input type=\"text\" pInputText disabled [(ngModel)]=\"voucherApplicateBean.loanBalanceTo\" name=\"loanBalanceTo\">\r\n\r\n    </div>\r\n    <div class=\"ui-g-6 ui6\">\r\n      <label>被介绍客户存款余额：</label>\r\n      <input type=\"text\" pInputText disabled [(ngModel)]=\"voucherApplicateBean.depositBalanceTo\" name=\"depositBalanceTo\">\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"table ui-g-12\">\r\n  <p-dataTable emptyMessage=\"没有查找到数据\" [value]=\"tableData\" scrollable=\"true\" scrollHeight=\"350px\">\r\n    <p-column [style]=\"{'width':'3%'}\" field=\"\" header=' '></p-column>\r\n    <p-column [style]=\"{'width':'7%'}\">\r\n      <ng-template pTemplate=\"header\">\r\n        <p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkBoxAll\" binary=\"false\" (click)=\"checkBoxAllClick()\"></p-checkbox>\r\n      </ng-template>\r\n      <ng-template let-ri=\"rowIndex\" let-car=\"rowData\" pTemplate=\"body\">\r\n        <p-checkbox name=\"group\" [value]=\"ri\" [(ngModel)]=\"selectedVoucehr\" ></p-checkbox>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"couponTypeName\" header='抵用券类型名称'></p-column>\r\n    <p-column field=\"couponAmount\" header='面值（元）'></p-column>\r\n    <p-column field=\"proportion\" header='可抵用比例'></p-column>\r\n    <p-column field=\"validity\" header='有效期'></p-column>\r\n    <p-column field=\"surNum\" header='剩余总数量'></p-column>\r\n    <p-column field=\"onceNum\" header='单次申请上限'></p-column>\r\n    <p-column field=\"number\" header='申请数量'>\r\n      <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-car=\"rowData\">\r\n        <input class=\"inp\" type=\"text\" [(ngModel)]=\"car.number\" pInputText (change)=numChange($event,car)>\r\n        <span class=\"reduce\" (click)=\"reduce(car.number,ri)\">-</span><span class=\"add\" (click)=\"add(car.number,ri)\">+</span>\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column [style]=\"{'width':'4%'}\" field=\"\" header=' '></p-column>\r\n  </p-dataTable>\r\n</div>\r\n<div class=\"ui-g-12 text\" [formGroup]=\"userform\">\r\n  <label appValidation>申请理由：</label>\r\n  <textarea name=\"applyReason\" formControlName=\"applyReason\" [(ngModel)]=\"voucherApplicateBean.applyReason\" ></textarea>\r\n  <div class=\"textRel\" *ngIf=\"!userform.controls['applyReason'].valid&&userform.controls['applyReason'].dirty\">\r\n    <div class=\"textAbs\">\r\n      <span class=\"promptSpan\" [hidden]=\"!userform.hasError('required','applyReason')\">申请理由不能为空！</span>\r\n      <!-- <p [hidden]=\"!userform.hasError('required','applyReason')\"> 申请理由不能为空！</p> -->\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['applyReason'].valid&&userform.controls['applyReason'].dirty\">\r\n    <p [hidden]=\"!userform.hasError('required','applyReason')\"> 申请理由不能为空！</p>\r\n  </div> -->\r\n</div>\r\n<div class=\"ui-g-12 upload\">\r\n  <label >上传附件：</label>\r\n  <p-fileUpload  chooseLabel=\"浏览\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"load($event)\"\r\n    multiple=\"multiple\" invalidFileTypeMessageDetail=\"\" invalidFileTypeMessageSummary=\"\">\r\n    <ng-template pTemplate=\"content\">\r\n      <ul *ngIf=\"upLoadFiles.length\">\r\n        <li *ngFor=\"let file of upLoadFiles\">\r\n          {{file.name}}-{{file.size}}bytes\r\n        </li>\r\n      </ul>\r\n    </ng-template>\r\n  </p-fileUpload>\r\n\r\n\r\n</div>\r\n<div class=\"ui-g-12 btn\">\r\n  <button class=\"btnRight\" pButton type=\"button\" label=\"保存\" (click)='preserveClick()'></button>\r\n  <button class=\"btnMarginRight\" pButton type=\"button\" label=\"提交\" (click)='submit()'></button>\r\n  <button class=\"btnWidth\" pButton type=\"button\" label=\"取消\" (click)='modifyCloseBtn()'></button>\r\n</div>\r\n<div class=\"ui-g-12 foot\"> </div>\r\n<p-dialog *ngIf=\"dealPerShow\" header=\"提交给\" [(visible)]=\"dealPerShow\">\r\n  <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-update/applicate-update.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-update/applicate-update.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".promptSpan {\n  height: 14px;\n  width: auto;\n  color: #f00;\n  float: left; }\n\n.queryCont {\n  padding: 0px;\n  border-top: 17px solid #f7f7f7;\n  border-bottom: 17px solid #f7f7f7; }\n\n.query, .queryLast {\n  padding: 0px;\n  margin-top: 29px; }\n\n.query input, .queryLast input {\n    width: 50%; }\n\n.query .ui6, .queryLast .ui6 {\n    padding: 0px;\n    height: 25px; }\n\n.query label, .queryLast label {\n    display: inline-block;\n    width: 39.5%;\n    text-align: right;\n    font-size: 14px; }\n\n.textRel {\n  position: relative;\n  width: 0px;\n  height: 0px; }\n\n.textAbs {\n  position: absolute;\n  width: 250px;\n  font-size: 14px;\n  color: #f00;\n  line-height: 20px;\n  height: 20px;\n  top: 0px;\n  left: 204px; }\n\n.queryLast {\n  margin: 29px 0px; }\n\n.btn {\n  text-align: center;\n  padding: 0px;\n  margin: 94px 0px 46px 0px; }\n\n.btn .btnWidth {\n    width: 100px; }\n\n.btn .btnMarginRight {\n    width: 100px;\n    margin-right: 27px; }\n\n.btn .btnRight {\n    width: 100px;\n    margin-right: 27px;\n    background: linear-gradient(#ffc107, #ffc107); }\n\n.foot {\n  width: 100%;\n  height: 17px;\n  background-color: #f7f7f7;\n  padding: 0px; }\n\n.text label {\n  display: inline-block;\n  width: 20%;\n  text-align: right; }\n\n.text textarea {\n  width: 74.9%;\n  height: 100px;\n  resize: vertical; }\n\n.upload {\n  padding: 0px;\n  margin: 43px 0px 0px 0px;\n  height: 27px; }\n\n.upload label {\n    display: inline-block;\n    width: 20%;\n    text-align: right; }\n\n.text {\n  padding: 0px;\n  margin-top: 32px; }\n\n.reduce,\n.add {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 20px;\n  border-radius: 100%;\n  background: #008aa6;\n  color: #fff;\n  margin-left: 2px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.inp {\n  min-width: 0;\n  width: 60px;\n  height: 25px;\n  font-size: 13px; }\n\n.table {\n  text-align: center;\n  padding: 0px;\n  margin-top: 19px; }\n\n:host/deep/ .ui-fileupload.ui-widget.ng-star-inserted {\n  width: 74%;\n  display: inline-block; }\n\n:host/deep/ .ui-datatable .ui-datatable-thead > tr > th,\n:host/deep/ .ui-datatable .ui-datatable-tfoot > tr > td,\n:host/deep/ .ui-datatable .ui-datatable-data > tr > td {\n  padding: .25em 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvdm91Y2hlci92b3VjaGVyLWFwcGxpY2F0ZS9hcHBsaWNhdGUtdXBkYXRlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcbWFya2V0aW5nXFx2b3VjaGVyXFx2b3VjaGVyLWFwcGxpY2F0ZVxcYXBwbGljYXRlLXVwZGF0ZVxcYXBwbGljYXRlLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsaUNBQWlDLEVBQUE7O0FBRXJDO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUZwQjtJQUlRLFVBQVUsRUFBQTs7QUFKbEI7SUFPUSxZQUFZO0lBQ1osWUFBWSxFQUFBOztBQVJwQjtJQVdRLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTs7QUFHdkI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFFBQVE7RUFDUixXQUFXLEVBQUE7O0FBRWY7RUFDSSxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUg3QjtJQUtRLFlBQVksRUFBQTs7QUFMcEI7SUFRUSxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7O0FBVDFCO0lBWVEsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw2Q0FBNkMsRUFBQTs7QUFHckQ7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBR2hCO0VBRVEscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFKekI7RUFPUSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUd4QjtFQUNJLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsWUFBWSxFQUFBOztBQUhoQjtJQUtRLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsaUJBQWlCLEVBQUE7O0FBR3pCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjs7RUFFSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksVUFBVTtFQUNWLHFCQUFxQixFQUFBOztBQUd6Qjs7O0VBR0ksMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL21hcmtldGluZy92b3VjaGVyL3ZvdWNoZXItYXBwbGljYXRlL2FwcGxpY2F0ZS11cGRhdGUvYXBwbGljYXRlLXVwZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9tcHRTcGFuIHtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgY29sb3I6ICNmMDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4ucXVlcnlDb250IHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlci10b3A6IDE3cHggc29saWQgI2Y3ZjdmNzsgXHJcbiAgICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkICNmN2Y3Zjc7IFxyXG59XHJcbi5xdWVyeSwucXVlcnlMYXN0IHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDI5cHg7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC51aTYge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAzOS41JTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuLnRleHRSZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogMHB4O1xyXG59XHJcbi50ZXh0QWJzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjZjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDIwNHB4O1xyXG59XHJcbi5xdWVyeUxhc3Qge1xyXG4gICAgbWFyZ2luOiAyOXB4IDBweDtcclxufVxyXG5cclxuXHJcbi5idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiA5NHB4IDBweCA0NnB4IDBweDtcclxuICAgIC5idG5XaWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bk1hcmdpblJpZ2h0IHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyN3B4O1xyXG4gICAgfVxyXG4gICAgLmJ0blJpZ2h0IHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyN3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZjMTA3LCAjZmZjMTA3KTtcclxuICAgIH1cclxufVxyXG4uZm9vdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICB3aWR0aDogNzQuOSU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICByZXNpemU6IHZlcnRpY2FsO1xyXG4gICAgfVxyXG59XHJcbi51cGxvYWR7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDQzcHggMHB4IDBweCAwcHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuLnRleHQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxufVxyXG5cclxuLnJlZHVjZSxcclxuLmFkZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDhhYTY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmlucCB7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDE5cHg7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1maWxldXBsb2FkLnVpLXdpZGdldC5uZy1zdGFyLWluc2VydGVkIHtcclxuICAgIHdpZHRoOiA3NCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS10aGVhZD50cj50aCxcclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRmb290PnRyPnRkLFxyXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtZGF0YT50cj50ZCB7XHJcbiAgICBwYWRkaW5nOiAuMjVlbSAwICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-update/applicate-update.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-update/applicate-update.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ApplicateUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicateUpdateComponent", function() { return ApplicateUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_voucher_applicate_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/voucher-applicate.bean */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/bean/voucher-applicate.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _http_voucher_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http/voucher.http.service */ "./src/app/pages/tzb/custom/marketing/voucher/http/voucher.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ApplicateUpdateComponent = /** @class */ (function () {
    function ApplicateUpdateComponent(voucherHttpService, cusOperationHttpService, cusViewHttpService, fb, commfunc) {
        this.voucherHttpService = voucherHttpService;
        this.cusOperationHttpService = cusOperationHttpService;
        this.cusViewHttpService = cusViewHttpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.voucherApplicateBean = new _bean_voucher_applicate_bean__WEBPACK_IMPORTED_MODULE_2__["VoucherApplicateBean"]();
        //提示信息
        this.msgs = [];
        this.tableData = [];
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__["TZB_CUS_UPLOAD"];
        this.upLoadFiles = []; //上传文件名
        this.infoList = []; //上传路径
    }
    ApplicateUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mesg = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.chName = JSON.parse(this.commfunc.getSessionDataCH("chName"));
        this.userform = this.fb.group({
            'partyId': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'applyReason': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        this.voucherTypeQuewry();
        this.voucherApplicateBean = this.inValue;
        //存款&贷款回显
        var param = {
            custNo: this.voucherApplicateBean.partyIdTo
        };
        this.cusViewHttpService.selectCustBriefAmtInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.voucherApplicateBean.depositBalanceTo = data.depositsOutstand;
                _this.voucherApplicateBean.loanBalanceTo = data.creditBalance;
            }
        });
    };
    //抵用券类型回显查询
    // query() {
    //   this.orderHttpService.queryCouponApplyInfoList(this.voucherApplicateBean).subscribe(data => {
    //     if (data.returnCode.code == 'success') {
    //       let selected = data.applyList[0].couponTypeList;
    //       this.selectedVoucehr = this.listBackDisplay(selected)
    //     }
    //   })
    // }
    //抵用券类型查询
    ApplicateUpdateComponent.prototype.voucherTypeQuewry = function () {
        var _this = this;
        var param = {
            statusId: '0',
            branchId: this.locationValue
        };
        this.voucherHttpService.couponTypeQuery(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = _this.commfunc.typeListProcess(data.couponTypeList);
                _this.selectedVoucehr = _this.listBackDisplay(_this.inValue.couponTypeList);
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
    //申请数量减少
    ApplicateUpdateComponent.prototype.reduce = function (num, index) {
        if (this.tableData[index].number) {
            num--;
            this.tableData[index].number = String(num);
            if (num < 1) {
                this.tableData[index].number = String(1);
            }
            else {
                this.tableData[index].number = String(num);
            }
        }
        else {
            this.tableData[index].number = String(1);
        }
    };
    //申请数量增加
    ApplicateUpdateComponent.prototype.add = function (num, index) {
        if (this.tableData[index].number) {
            num++;
            this.tableData[index].number = String(num);
        }
        else {
            this.tableData[index].number = String(1);
        }
    };
    //申请数量
    ApplicateUpdateComponent.prototype.numChange = function (event, car) {
        var val = event.srcElement.value;
        if (!(/^[1-9]\d*$/.test(val))) {
            event.srcElement.value = "";
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '申请数量只能为正整数' });
        }
        else {
            if (Number(val) > Number(car.onceNum)) {
                event.srcElement.value = "";
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '申请数量不能大于单次申请数量上限' });
            }
            if (Number(val) > Number(car.surNum)) {
                event.srcElement.value = "";
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '申请数量不能大于剩余总数量' });
            }
        }
    };
    //回显数据处理
    ApplicateUpdateComponent.prototype.listBackDisplay = function (selected) {
        var listNo = [];
        if (selected) {
            for (var i = 0; i < selected.length; i++) {
                for (var j = 0; j < this.tableData.length; j++) {
                    if (this.tableData[j].couponTypeId == selected[i].couponTypeId) {
                        listNo.push(j);
                        this.tableData[j]['number'] = selected[i]['number'];
                        break;
                    }
                }
            }
        }
        return listNo;
    };
    //列表数据处理
    ApplicateUpdateComponent.prototype.process = function () {
        var _this = this;
        var list = [];
        this.selectedVoucehr.forEach(function (ri) {
            var obj = {};
            obj['couponTypeId'] = _this.tableData[ri].couponTypeId;
            obj['number'] = _this.tableData[ri].number;
            obj['grantEndTime'] = _this.commfunc.getCurrentDate();
            list.push(obj);
        });
        return list;
    };
    ApplicateUpdateComponent.prototype.doChange = function () {
        var _this = this;
        this.voucherApplicateBean.partyId = this.voucherApplicateBean.partyId.replace(/(^\s*)|(\s*$)/g, '');
        var param = {
            custNo: this.voucherApplicateBean.partyId,
            principalLinkman: this.mesg["userId"]
        };
        this.cusOperationHttpService.selectCustBriefInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.voucherApplicateBean.partyName = data.custName;
            }
        });
    };
    ApplicateUpdateComponent.prototype.doChange1 = function () {
        var _this = this;
        this.voucherApplicateBean.partyIdTo = this.voucherApplicateBean.partyIdTo.replace(/(^\s*)|(\s*$)/g, '');
        var param = {
            custNo: this.voucherApplicateBean.partyIdTo
        };
        this.cusViewHttpService.selectCustBriefAmtInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.voucherApplicateBean.depositBalanceTo = data.depositsOutstand;
                _this.voucherApplicateBean.loanBalanceTo = data.creditBalance;
            }
        });
        var param1 = {
            custNo: this.voucherApplicateBean.partyIdTo,
            principalLinkman: this.mesg["userId"]
        };
        this.cusOperationHttpService.selectCustBriefInfo(param1).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.voucherApplicateBean.partyIdToName = data.custName;
            }
        });
    };
    //点击上传
    ApplicateUpdateComponent.prototype.load = function (event) {
        if (JSON.parse(event.xhr.response).success == false) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: JSON.parse(event.xhr.response).errorMsg });
            return;
        }
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.upLoadFiles.push(file);
        }
        var infoList = JSON.parse(event.xhr.response);
        var obj = {};
        for (var _b = 0, infoList_1 = infoList; _b < infoList_1.length; _b++) {
            var item = infoList_1[_b];
            obj["filePath"] = item.fileUrl + item.fileName;
            this.infoList.push(obj);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '文件上传', detail: '上传成功' });
    };
    //多行列表全选按钮
    ApplicateUpdateComponent.prototype.checkBoxAllClick = function () {
        var list = [];
        if (this.tableData) {
            if (this.checkBoxAll) {
                for (var i = 0; i < this.tableData.length; i++) {
                    if (list.indexOf(i) == -1) {
                        list.push(i);
                    }
                }
            }
            else {
                list = [];
            }
        }
        this.selectedVoucehr = list;
    };
    //保存按钮
    ApplicateUpdateComponent.prototype.preserveClick = function () {
        this.preSub('0', '保存成功');
    };
    //提交
    ApplicateUpdateComponent.prototype.submit = function () {
        this.waitSelUserList = this.commfunc.query('DYQTYLC', {});
        this.dealPerShow = this.waitSelUserList.display;
        this.outVal = this.waitSelUserList.waitSelUserList;
        if (this.waitSelUserList.erro) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
        }
    };
    ApplicateUpdateComponent.prototype.outValueCall = function (event) {
        var ss = '';
        event.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.preSub('1', '提交成功');
    };
    ApplicateUpdateComponent.prototype.outDisplayCall = function (event) {
        this.dealPerShow = event;
    };
    //保存和提交封装
    ApplicateUpdateComponent.prototype.preSub = function (flag, msg) {
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
        //抵用券类型列表非空校验
        if (this.selectedVoucehr.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择抵用券类型' });
            return;
        }
        var thiss = this;
        var d = new Promise(function (resolve, reject) {
            //主联系人校验
            thiss.cusViewHttpService.selectPartyRelationByAdminDoor({ custList: [{ "custNo": thiss.voucherApplicateBean.partyId }] }).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    resolve({ a: data.custList[0].custInfoList });
                }
                else {
                    thiss.msgs = [];
                    thiss.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                thiss.msgs = [];
                thiss.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        });
        var a = new Promise(function (resolve, reject) {
            //申请数量，发放截至日期校验
            var param = {
                couponTypeList: thiss.process(),
            };
            thiss.voucherHttpService.checkCouponInfo(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    resolve({ b: data.flag });
                }
                else {
                    thiss.msgs = [];
                    thiss.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                thiss.msgs = [];
                thiss.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        });
        var b = new Promise(function (resolve, reject) {
            //被介绍客户校验
            var param1 = {
                partyIdTo: thiss.voucherApplicateBean.partyIdTo
            };
            thiss.voucherHttpService.checkIntroducedCustomer(param1).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    resolve({ c: data.flag });
                }
                else {
                    thiss.msgs = [];
                    thiss.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                thiss.msgs = [];
                thiss.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        });
        //a、b、d全部响应成功后执行c
        var c = Promise.all([d, a, b]);
        c.then(function (res) {
            var firstRes = res[0]['a'];
            var custManagerNosFlag = false;
            var custManagerTypeFlag = false;
            //非主联系人校验
            for (var i = 0; i < firstRes.length; i++) {
                if (firstRes[i]['custManagerNos'] == '0301') {
                    custManagerNosFlag = true;
                    var custManagerTypeList = firstRes[i]['custManagerType'].split('|');
                    for (var j = 0; j < custManagerTypeList.length; j++) {
                        if (custManagerTypeList[j] == _this.mesg['userId']) {
                            custManagerTypeFlag = true;
                            break;
                        }
                    }
                    break;
                }
            }
            if (!custManagerNosFlag || !custManagerTypeFlag) {
                thiss.msgs = [];
                thiss.msgs.push({ severity: 'error', summary: '提示', detail: '非主联系人不允许申请' });
                return;
            }
            //申请数量、发放截至日期、被介绍客户好不通过禁止提交和保存
            if (res[1]['b'] != '0' || res[2]['c'] != '0') {
                return;
            }
            if (_this.voucherApplicateBean.partyId == _this.voucherApplicateBean.partyIdTo) {
                thiss.msgs = [];
                thiss.msgs.push({ severity: 'error', summary: '提示', detail: '被介绍客户号不能与客户号相同' });
                return;
            }
            thiss.voucherApplicateBean.personName = _this.chName['userName'];
            thiss.voucherApplicateBean.branchIdName = _this.chName['orgName'];
            thiss.voucherApplicateBean.flag = flag;
            thiss.voucherApplicateBean.couponTypeList = thiss.process();
            thiss.voucherApplicateBean.infoList = _this.infoList;
            thiss.voucherHttpService.modifyCouponApplyInfo(thiss.voucherApplicateBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    thiss.outValue.emit({
                        display: false,
                        message: msg
                    });
                }
                else {
                    thiss.msgs = [];
                    thiss.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                thiss.msgs = [];
                thiss.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        });
    };
    ApplicateUpdateComponent.prototype.modifyCloseBtn = function () {
        this.outValue.emit({ display: false });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ApplicateUpdateComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ApplicateUpdateComponent.prototype, "locationValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ApplicateUpdateComponent.prototype, "outValue", void 0);
    ApplicateUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applicate-update',
            template: __webpack_require__(/*! ./applicate-update.component.html */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-update/applicate-update.component.html"),
            styles: [__webpack_require__(/*! ./applicate-update.component.scss */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-update/applicate-update.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"], app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"], app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_6__["CusViewHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_voucher_http_service__WEBPACK_IMPORTED_MODULE_4__["VoucherHttpService"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_6__["CusViewHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"]])
    ], ApplicateUpdateComponent);
    return ApplicateUpdateComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applyPerson/applyPerson.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applyPerson/applyPerson.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 content module\">\r\n  <!-- 输入框 -->\r\n  <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-2 inputLayout\">\r\n          <label>员工姓名：</label>\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n          <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"tellerName\">\r\n      </div>\r\n      <div class=\"ui-g-2 inputLayout\">\r\n          <label>工号：</label>\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n          <input id=\"input\" type=\"text\" pInputText [(ngModel)]=\"tellerId\">\r\n      </div>\r\n  </div>\r\n  <div class=\"ui-g-12 textAlignCenter\">\r\n      <button pButton type=\"button\" (click)=\"queryScale()\" label=\"查询\"></button>\r\n      <button pButton type=\"button\" (click)=\"reset()\" label=\"重置\"></button>\r\n  </div>\r\n  <div class=\"ui-g-12 base-table\">\r\n      <p-dataTable [value]=\"tableData\" [style]=\"{'text-align':'center'}\" selectionMode=\"single\" width='900' [(selection)]=\"selectedCar2\"\r\n          (onRowSelect)=\"onRowSelect($event)\" dataKey=\"tellerName\" [emptyMessage]='tabMesg'>\r\n          <p-column field=\"tellerName\" header=\"员工姓名\"></p-column>\r\n          <p-column field=\"tellerId\" header=\"工号\"></p-column>\r\n          <p-column field=\"email\" header=\"联系邮箱\"></p-column>\r\n          <p-column field=\"telphone\" header=\"联系电话\"></p-column>\r\n          <p-column field=\"orgId\" header=\"所属机构号\"></p-column>\r\n          <p-column field=\"orgName\" header=\"所属机构\"></p-column>\r\n      </p-dataTable>\r\n      <!-- 分页 -->\r\n      <p-paginator [first]=\"first\" rows=\"{{pageSize}}\" totalRecords=\"{{totalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginate($event)\"></p-paginator>\r\n  </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applyPerson/applyPerson.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applyPerson/applyPerson.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  max-height: 650px;\n  margin-top: -30px; }\n\n.textCenter {\n  text-align: center; }\n\n.inputLayout {\n  text-align: right; }\n\ninput {\n  width: 200px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvdm91Y2hlci92b3VjaGVyLWFwcGxpY2F0ZS9hcHBseVBlcnNvbi9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXG1hcmtldGluZ1xcdm91Y2hlclxcdm91Y2hlci1hcHBsaWNhdGVcXGFwcGx5UGVyc29uXFxhcHBseVBlcnNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSx1QkFDSixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvdm91Y2hlci92b3VjaGVyLWFwcGxpY2F0ZS9hcHBseVBlcnNvbi9hcHBseVBlcnNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gICAgbWF4LWhlaWdodDo2NTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG59XHJcbi50ZXh0Q2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW5wdXRMYXlvdXR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5pbnB1dHtcclxuICAgIHdpZHRoOjIwMHB4ICFpbXBvcnRhbnRcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applyPerson/applyPerson.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applyPerson/applyPerson.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ApplyPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyPersonComponent", function() { return ApplyPersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/common/http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_voucher_applicate_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bean/voucher-applicate.bean */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/bean/voucher-applicate.bean.ts");
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
 * @author fanhualing 2018-4-23
 */








var ApplyPersonComponent = /** @class */ (function () {
    function ApplyPersonComponent(httpService, commonHttpService, confirmationService, commfunc, fb) {
        this.httpService = httpService;
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.voucherApplicateBean = new _bean_voucher_applicate_bean__WEBPACK_IMPORTED_MODULE_7__["VoucherApplicateBean"]();
        this.first = 0;
        this.totalNum = 0;
        this.personArr = [];
        this.msgs = [];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"];
    }
    ApplyPersonComponent.prototype.ngOnInit = function () {
        this.orgId = this.inValue['orgId'];
        this.pageSize = 10;
        this.pageNum = 1;
        this.query();
    };
    // 点击查询
    ApplyPersonComponent.prototype.queryScale = function () {
        this.pageSize = 10;
        this.pageNum = 1;
        this.first = 0;
        this.query();
    };
    //重置
    ApplyPersonComponent.prototype.reset = function () {
        this.tellerId = '';
        this.tellerName = '';
    };
    // 分页查询
    ApplyPersonComponent.prototype.query = function () {
        var _this = this;
        var param = {
            pageSize: this.pageSize,
            pageNum: this.pageNum,
            tellerName: this.tellerName,
            tellerId: this.tellerId,
            partyId: this.orgId,
            flag: '1' //0-本机构  1-本机构及下属机构
        };
        this.httpService.queryTellersByPartyIdAndRoleId(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.tellerList;
                var tmpTotal = data.total;
                _this.totalNum = tmpTotal * 1;
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
    // 分页
    ApplyPersonComponent.prototype.paginate = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.first = (currentPage - 1) * this.pageSize;
        this.query();
    };
    // 选中一行
    ApplyPersonComponent.prototype.onRowSelect = function (event) {
        this.personArr = [];
        this.personArr.push(event.data);
        this.outValue.emit(this.personArr);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ApplyPersonComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ApplyPersonComponent.prototype, "inValue", void 0);
    ApplyPersonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'applyPerson',
            template: __webpack_require__(/*! ./applyPerson.component.html */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applyPerson/applyPerson.component.html"),
            styles: [__webpack_require__(/*! ./applyPerson.component.scss */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applyPerson/applyPerson.component.scss")]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_6__["CusOperationHttpService"],
            app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_5__["CommonHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ApplyPersonComponent);
    return ApplyPersonComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/bean/voucher-applicate.bean.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/bean/voucher-applicate.bean.ts ***!
  \*****************************************************************************************************/
/*! exports provided: VoucherApplicateBean, Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherApplicateBean", function() { return VoucherApplicateBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
var VoucherApplicateBean = /** @class */ (function () {
    function VoucherApplicateBean() {
    }
    return VoucherApplicateBean;
}());

var Location = /** @class */ (function () {
    function Location() {
    }
    return Location;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/voucher-applicate.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/voucher-applicate.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'抵用券申请查询'\"></header-title>\r\n  <div class=\"ui-g-12 query\">\r\n    <div class=\"ui-g-12 uiCont\">\r\n      <div class=\"ui-g-4 uiDiv\">\r\n        <div class=\"ui-g-5\">客户号:</div>\r\n        <div class=\"ui-g-7\">\r\n          <input type=\"text\" pInputText [(ngModel)]=\"voucherApplicateBean.partyId\">\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4 uiDiv\">\r\n        <div class=\"ui-g-5\">被介绍客户号:</div>\r\n        <div class=\"ui-g-7\">\r\n          <input type=\"text\" pInputText [(ngModel)]=\"voucherApplicateBean.partyIdTo\">\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4 uiDivLast\" >\r\n        <div class=\"ui-g-5\">申请时间:</div>\r\n        <div class=\"ui-g-7\">\r\n          <!-- <p-calendar [(ngModel)]=\"startTime\" [showButtonBar]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n            [showOtherMonths]=\"false\" [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\" (onSelect)=\"selectTime()\"\r\n            name=\"\"></p-calendar> -->\r\n          <p-calendar [(ngModel)]=\"startTime\" [showButtonBar]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n            [showOtherMonths]=\"false\" [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\" class=\"textDate\" [style]=\"{'min-width':'0px'}\"\r\n            (onSelect)=\"selectTime1()\" name=\"startTime\"></p-calendar>\r\n          <span class=\"uiLeft\">至</span>\r\n          <p-calendar [(ngModel)]=\"endTime\" [showButtonBar]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n            [showOtherMonths]=\"false\" [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\" class=\"textDate\" [style]=\"{'min-width':'0px'}\"\r\n            (onSelect)=\"selectTime2()\"  name=\"endTime\"></p-calendar>\r\n          <!-- <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-6\" style=\"color:red;float:left\" *ngIf=\"!userform.controls['startTime'].valid&&userform.controls['startTime'].dirty\">\r\n              <span *ngIf=\"userform.hasError('required','startTime')\">申请开始日期不能为空!</span>\r\n            </div>\r\n            <div class=\"ui-g-6\" style=\"color:red;float:right\" *ngIf=\"!userform.controls['endTime'].valid&&userform.controls['endTime'].dirty\">\r\n              <span *ngIf=\"userform.hasError('required','endTime')\">申请截止日期不能为空!</span>\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"ui-g-12 uiCont\">\r\n      <div class=\"ui-g-4 uiDiv\" *ngIf=\"applyPersonFlag\" >\r\n        <div class=\"ui-g-5\">申请人:</div>\r\n        <div class=\"ui-g-7\" style=\"position:relative\">\r\n          <input type=\"text\" disabled pInputText [(ngModel)]=\"applyPerson\">\r\n          <a (click)=\"openOrgTreeClick()\" class=\"a-hand\">...</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4 uiDiv\">\r\n        <div class=\"ui-g-5\">状态:</div>\r\n        <div class=\"ui-g-7\">\r\n          <p-dropdown [options]=\"statusId\" [(ngModel)]=\"voucherApplicateBean.statusId\" class=\"textAlignLeft uifont14\"></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n      <button pButton type=\"button\" label=\"查询\" (click)=\"queryClick()\" class=\"btnWidth btnMarginRight\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" (click)=\"resetClick()\" class=\"btnWidth\"></button>\r\n      <button pButton type=\"button\" label=\"申请\" (click)=\"applicate()\" *ngIf=\"permissionCheck('SID02093_P011')\" class=\"btnWidth btnRight\"></button>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"ui-g-12 add\">\r\n    \r\n  </div> -->\r\n  <!--表格-->\r\n  <!-- <div class=\"ui-g-12 query-result\">\r\n    \r\n\r\n  </div> -->\r\n  <p-dialog [(visible)]=\"display\" *ngIf=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10 [contentStyle]=\"{'padding':'0px'}\">\r\n    <p-header>\r\n      {{headerTitle}}\r\n    </p-header>\r\n    \r\n      <app-applicate-add *ngIf=\"showModel=='1'\" [locationValue]=\"addValue\" (outValue)=\"applicateCall($event)\"></app-applicate-add>\r\n      <app-applicate-update *ngIf=\"showModel=='2'\" [locationValue]=\"updateLocationValue\" [inValue]=\"updateValue\" (outValue)=\"updateCall($event)\"></app-applicate-update>\r\n      <app-applicate-detail *ngIf=\"showModel=='3'\" [inValue]=\"detailValue\" (outValue)=\"detailCall($event)\"></app-applicate-detail>\r\n\r\n    \r\n  </p-dialog>\r\n  <!-- 员工 -->\r\n  <p-dialog *ngIf='personPage' [(visible)]=\"personPage\" [responsive]=\"true\" class=\"my-cust-contactf\" [positionTop]=10 modal=\"modal\">\r\n    <p-header>员工列表</p-header>\r\n    <applyPerson *ngIf=\"personPage\" [inValue]=\"applyPersonValue\" (outValue)=\"perInfor($event)\"></applyPerson>\r\n  </p-dialog>\r\n  <!-- 提示信息 -->\r\n  <p-growl [(value)]=\"msgs\"></p-growl>\r\n  <p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n</div>\r\n<div class=\"ui-g-12 module\">\r\n  <div class=\"ui-g-12 query-result\">\r\n      <div class=\"table\">\r\n        <p-dataTable emptyMessage=\"没有查找到数据\" [value]=\"tableData\" scrollable=\"true\" scrollHeight=\"350px\">\r\n          <p-column field=\"couponApplyId\" header='申请编号'></p-column>\r\n          <p-column field=\"partyId\" header='客户号'></p-column>\r\n          <p-column field=\"partyName\" header='客户名称'></p-column>\r\n          <p-column field=\"partyIdTo\" header='被介绍客户号'></p-column>\r\n          <p-column field=\"partyIdToName\" header='被介绍客户名称'></p-column>\r\n          <p-column field=\"applyPerson\" header='申请人'></p-column>\r\n          <p-column field=\"startTime\" header='申请时间'></p-column>\r\n          <p-column field=\"branchId\" header='申请机构'></p-column>\r\n          <p-column field=\"statusId\" header='审批状态'>\r\n            <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n              <span>{{car.statusId | codeValuePie:statusId}}</span>\r\n              </ng-template>\r\n            </p-column>\r\n          <p-column field=\"approveStartTime\" header='申请开始时间'></p-column>\r\n          <p-column field=\"approveEndTime\" header='审批结束时间'></p-column>\r\n          <p-column field=\"approveReason\" header='审批意见'></p-column>\r\n          <p-column field=\"\" header='操作' [style]=\"{'width':'200px'}\">\r\n            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n              <a class=\" tabelDetailIco\" (click)=\"detail(item)\">详情</a>\r\n              <a class=\" tabelUpdateIco\" (click)=\"update(item)\" *ngIf=\"permissionCheck('SID02093_P013')\">修改</a>\r\n              <a class=\" tabelDeleteIco\" (click)=\"del(item)\" *ngIf=\"permissionCheck('SID02093_P015')\">删除</a>\r\n              <a class=\" downloadView\" (click)=\"downloadCheck(item)\">影像查询</a>\r\n            </ng-template>\r\n          </p-column>\r\n        </p-dataTable>\r\n      </div>\r\n      <p-paginator first={{first}} rows=\"{{voucherApplicateBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[5,10,20,30]\"\r\n              (onPageChange)=\"paginate($event)\"></p-paginator>\r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/voucher-applicate.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/voucher-applicate.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".query {\n  padding: 0px;\n  margin-top: 20px; }\n  .query .ui-g-12 {\n    margin: 0px 0px 28px 0px;\n    height: 25px;\n    padding: 0px; }\n  .query .uiCont {\n    width: 90%;\n    margin-left: 5%; }\n  .query .ui-g-4 {\n    text-align: right;\n    height: 25px;\n    padding: 0px;\n    font-size: 14px; }\n  .query .uiDiv {\n    width: 26%;\n    margin-right: 11%; }\n  .query .uiDivLast {\n    width: 26%;\n    margin-right: 0px; }\n  .query .ui-g-5 {\n    text-align: right;\n    height: 25px;\n    font-size: 14px;\n    line-height: 14px;\n    width: 32%;\n    margin-right: 4.71%; }\n  .query .ui-g-7 {\n    height: 25px;\n    padding: 0px;\n    width: 63.29%; }\n  .query .textRel {\n    position: relative;\n    width: 0px;\n    height: 0px; }\n  .query .textAbs {\n    position: absolute;\n    width: 250px;\n    font-size: 14px;\n    color: #f00;\n    line-height: 20px;\n    height: 20px;\n    top: -16px; }\n  .query .textDate {\n    width: 47%;\n    float: left; }\n  @media screen and (min-width: 1367px) and (max-width: 1919px) {\n    .query .ui-g-5 {\n      text-align: right;\n      height: 25px;\n      font-size: 14px;\n      line-height: 14px;\n      width: 42%;\n      margin-right: 4.71%; }\n    .query .ui-g-7 {\n      height: 25px;\n      padding: 0px;\n      width: 53.29%; }\n    .query .textDate {\n      width: 44%;\n      float: left; } }\n  @media screen and (min-width: 1025px) and (max-width: 1366px) {\n    .query .ui-g-5 {\n      text-align: right;\n      height: 25px;\n      font-size: 14px;\n      line-height: 14px;\n      width: 50%;\n      margin-right: 4.71%; }\n    .query .ui-g-7 {\n      height: 25px;\n      padding: 0px;\n      width: 45.29%; }\n    .query .textDate {\n      width: 43.5%;\n      float: left; } }\n  @media screen and (max-width: 1024px) {\n    .query .ui-g-5 {\n      text-align: right;\n      height: 25px;\n      font-size: 14px;\n      line-height: 14px;\n      width: 60%;\n      margin-right: 4.71%; }\n    .query .ui-g-7 {\n      height: 25px;\n      padding: 0px;\n      width: 35.29%; }\n    .query .textDate {\n      width: 38%;\n      float: left; } }\n  .query .uifont14 {\n    font-size: 14px; }\n  .query .uiLeft {\n    float: left;\n    height: 25px;\n    line-height: 27px;\n    font-size: 14px; }\n  .query .btn {\n    text-align: center;\n    margin: 0px 0px 9px 0px;\n    height: 26px;\n    padding: 0px; }\n  .query .btnWidth {\n    width: 100px; }\n  .query .btnMarginRight {\n    margin-right: 27px;\n    margin-left: 11.29%; }\n  .query .btnRight {\n    float: right;\n    margin-right: 5%;\n    background: linear-gradient(#ffc107, #ffc107); }\n  body .ui-dialog .ui-dialog-content {\n  padding: 0px; }\n  .add {\n  text-align: right; }\n  .a-hand {\n  border-left: 1px solid #bdbdbd;\n  position: absolute;\n  width: 18%;\n  height: 23px;\n  top: 1px;\n  right: 1px;\n  text-align: center;\n  background: #fbfbf7; }\n  @media screen and (max-width: 1024px) {\n  .a-hand {\n    border-left: 1px solid #bdbdbd;\n    position: absolute;\n    width: 30%;\n    height: 23px;\n    top: 1px;\n    right: -3.8em;\n    text-align: center;\n    background: #fbfbf7; } }\n  .table {\n  text-align: center; }\n  :host/deep/.ui-dialog.ui-shadow {\n  width: 1000px !important;\n  height: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvdm91Y2hlci92b3VjaGVyLWFwcGxpY2F0ZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXG1hcmtldGluZ1xcdm91Y2hlclxcdm91Y2hlci1hcHBsaWNhdGVcXHZvdWNoZXItYXBwbGljYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBO0VBRnBCO0lBSVEsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixZQUFZLEVBQUE7RUFOcEI7SUFTUSxVQUFVO0lBQ1YsZUFBZSxFQUFBO0VBVnZCO0lBYVEsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZSxFQUFBO0VBaEJ2QjtJQW1CUSxVQUFVO0lBQ1YsaUJBQWlCLEVBQUE7RUFwQnpCO0lBdUJRLFVBQVU7SUFDVixpQkFBaUIsRUFBQTtFQXhCekI7SUEyQlEsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixtQkFBbUIsRUFBQTtFQWhDM0I7SUFtQ1EsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhLEVBQUE7RUFyQ3JCO0lBd0NRLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVyxFQUFBO0VBMUNuQjtJQTZDUSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixVQUFVLEVBQUE7RUFuRGxCO0lBc0RRLFVBQVM7SUFDVCxXQUFXLEVBQUE7RUFFZjtJQXpESjtNQTJEWSxpQkFBaUI7TUFDakIsWUFBWTtNQUNaLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsVUFBVTtNQUNWLG1CQUFtQixFQUFBO0lBaEUvQjtNQW1FWSxZQUFZO01BQ1osWUFBWTtNQUNaLGFBQWEsRUFBQTtJQXJFekI7TUF3RVksVUFBUztNQUNULFdBQVcsRUFBQSxFQUNkO0VBRUw7SUE1RUo7TUE4RVksaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLFVBQVU7TUFDVixtQkFBbUIsRUFBQTtJQW5GL0I7TUFzRlksWUFBWTtNQUNaLFlBQVk7TUFDWixhQUFhLEVBQUE7SUF4RnpCO01BMkZZLFlBQVc7TUFDWCxXQUFXLEVBQUEsRUFDZDtFQUVMO0lBL0ZKO01BaUdZLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixVQUFVO01BQ1YsbUJBQW1CLEVBQUE7SUF0Ry9CO01BeUdZLFlBQVk7TUFDWixZQUFZO01BQ1osYUFBYSxFQUFBO0lBM0d6QjtNQThHWSxVQUFTO01BQ1QsV0FBVyxFQUFBLEVBQ2Q7RUFoSFQ7SUFtSFEsZUFBZSxFQUFBO0VBbkh2QjtJQXNIUSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7RUF6SHZCO0lBNEhRLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVksRUFBQTtFQS9IcEI7SUFrSVEsWUFBWSxFQUFBO0VBbElwQjtJQXFJUSxrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUE7RUF0STNCO0lBeUlRLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsNkNBQTZDLEVBQUE7RUFJckQ7RUFDQyxZQUFZLEVBQUE7RUFFYjtFQUNJLGlCQUFpQixFQUFBO0VBRXJCO0VBQ0ksOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFFBQVE7RUFDUixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBO0VBRXZCO0VBQ0k7SUFDSSw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixZQUFZO0lBQ1osUUFBUTtJQUNSLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUEsRUFDdEI7RUFFTDtFQUNJLGtCQUFrQixFQUFBO0VBR3RCO0VBQ0ksd0JBQXdCO0VBQ3hCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvdm91Y2hlci92b3VjaGVyLWFwcGxpY2F0ZS92b3VjaGVyLWFwcGxpY2F0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5xdWVyeSB7XHJcbi8vICAgICAudWktZy0zIHtcclxuLy8gICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5idG4ge1xyXG4vLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICBidXR0b24ge1xyXG4vLyAgICAgICAgICAgICBtYXJnaW46MTBweCAzMHB4IDA7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi5xdWVyeSB7IFxyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIC51aS1nLTEye1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCAyOHB4IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG4gICAgLnVpQ29udCB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICB9XHJcbiAgICAudWktZy00IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC51aURpdiB7XHJcbiAgICAgICAgd2lkdGg6IDI2JTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDExJTtcclxuICAgIH1cclxuICAgIC51aURpdkxhc3Qge1xyXG4gICAgICAgIHdpZHRoOiAyNiU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAudWktZy01IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMiU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0LjcxJTtcclxuICAgIH1cclxuICAgIC51aS1nLTcge1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDYzLjI5JTtcclxuICAgIH1cclxuICAgIC50ZXh0UmVsIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIC50ZXh0QWJzIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogI2YwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgdG9wOiAtMTZweDtcclxuICAgIH1cclxuICAgIC50ZXh0RGF0ZSB7XHJcbiAgICAgICAgd2lkdGg6NDclO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMzY3cHgpIGFuZCAobWF4LXdpZHRoOjE5MTlweCl7XHJcbiAgICAgICAgLnVpLWctNSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MiU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNC43MSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS1nLTcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUzLjI5JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHREYXRlIHtcclxuICAgICAgICAgICAgd2lkdGg6NDQlO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjVweCkgYW5kIChtYXgtd2lkdGg6MTM2NnB4KXtcclxuICAgICAgICAudWktZy01IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0LjcxJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVpLWctNyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDUuMjklO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dERhdGUge1xyXG4gICAgICAgICAgICB3aWR0aDo0My41JTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpe1xyXG4gICAgICAgIC51aS1nLTUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQuNzElO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudWktZy03IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNS4yOSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0RGF0ZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOjM4JTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVpZm9udDE0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC51aUxlZnQge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuYnRuIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDlweCAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC5idG5XaWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bk1hcmdpblJpZ2h0IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI3cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDExLjI5JTtcclxuICAgIH1cclxuICAgIC5idG5SaWdodCB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmMxMDcsICNmZmMxMDcpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbmJvZHkgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gcGFkZGluZzogMHB4O1xyXG59XHJcbi5hZGQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmEtaGFuZHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2JkYmRiZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICB0b3A6IDFweDtcclxuICAgIHJpZ2h0OiAxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmJmYmY3O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KXtcclxuICAgIC5hLWhhbmR7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYmRiZGJkO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGhlaWdodDogMjNweDtcclxuICAgICAgICB0b3A6IDFweDtcclxuICAgICAgICByaWdodDogLTMuOGVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmJmYmY3O1xyXG4gICAgfVxyXG59XHJcbi50YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8udWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/voucher-applicate.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/voucher-applicate.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: VoucherApplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherApplicateComponent", function() { return VoucherApplicateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_voucher_applicate_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/voucher-applicate.bean */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/bean/voucher-applicate.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _http_voucher_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../http/voucher.http.service */ "./src/app/pages/tzb/custom/marketing/voucher/http/voucher.http.service.ts");
/* harmony import */ var app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/common/http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/**
 * @author 吴仕飞
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var VoucherApplicateComponent = /** @class */ (function () {
    function VoucherApplicateComponent(voucherHttpService, commonHttpService, confirmationService, commfunc, fb, router) {
        this.voucherHttpService = voucherHttpService;
        this.commonHttpService = commonHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.router = router;
        this.voucherApplicateBean = new _bean_voucher_applicate_bean__WEBPACK_IMPORTED_MODULE_2__["VoucherApplicateBean"]();
        this.tableData = []; //表格数据
        this.statusId = []; //抵用券状态
        //日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["CALENDAR_CN"]; //讲英文转化为中文
        this.first = 0; //分页控制
        this.msgs = [];
        this.codeValues();
        this.statusId = this.code["applicateStatusId"];
        // this.statusId = [
        //   { label: '请选择', value: '' },
        //   { label: '已创建', value: '0' },
        //   { label: '已申请', value: '1' },
        //   { label: '已驳回', value: '2' },
        //   { label: '已通过', value: '3' }
        // ]
    }
    VoucherApplicateComponent.prototype.ngOnInit = function () {
        // this.userform = this.fb.group({
        //   'startTime': new FormControl('', [Validators.required]),
        //   'endTime': new FormControl('', [Validators.required]),
        // });
        //查询条件初始化
        this.voucherApplicateBean.pageSize = 10;
        this.voucherApplicateBean.pageNum = 1;
        this.commonHeader = JSON.parse(this.commfunc.getSessionData("commonHeader"));
        this.extParam = this.commonHeader["extParam"];
        if (this.extParam["managePermission"] == "Y") {
            this.applyPersonFlag = true;
        }
        else {
            this.applyPersonFlag = false;
        }
        this.query();
        this.locationDes();
    };
    //位置服务查询
    VoucherApplicateComponent.prototype.locationDes = function () {
        var _this = this;
        // let mesg = JSON.parse(this.commfunc.getSessionData("commonHeader"));
        var param = {
            flag: '0',
            orgId: this.commonHeader["orgId"]
        };
        this.commonHttpService.queryOrgByCombConditions(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.locationList = data.orgInfoList[0].location;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        });
    };
    //码值获取
    VoucherApplicateComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    VoucherApplicateComponent.prototype.openOrgTreeClick = function () {
        this.personPage = !this.personPage;
        this.applyPersonValue = this.extParam;
    };
    //申请人
    VoucherApplicateComponent.prototype.perInfor = function (param) {
        this.personPage = false;
        this.applyPerson = param[0].tellerName;
        this.voucherApplicateBean.applyPerson = param[0].tellerId;
    };
    //日期范围的处理
    VoucherApplicateComponent.prototype.selectTime1 = function () {
        this.selectTime();
    };
    VoucherApplicateComponent.prototype.selectTime2 = function () {
        this.selectTime();
    };
    VoucherApplicateComponent.prototype.selectTime = function () {
        var _this = this;
        if (this.startTime && this.endTime) {
            if (this.startTime > this.endTime) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.startTime = null;
                    _this.endTime = null;
                });
            }
        }
    };
    //查询
    VoucherApplicateComponent.prototype.query = function () {
        // 
        var _this = this;
        // //校验的
        // for (const i in this.userform.controls) {
        //   this.userform.controls[i].markAsDirty();
        // }
        // //处理是否提交
        // for (const i in this.userform.controls) {
        //   if (!this.userform.controls[i].valid) {
        //     return;
        //   }
        // }
        this.voucherApplicateBean.startTime = this.commfunc.transDate(this.startTime);
        this.voucherApplicateBean.endTime = this.commfunc.transDate(this.endTime);
        this.voucherHttpService.queryCouponApplyInfoList(this.voucherApplicateBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.applyList;
                _this.total = data.totalCount;
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
    //点击查询
    VoucherApplicateComponent.prototype.queryClick = function () {
        this.first = 0;
        this.voucherApplicateBean.pageNum = 1;
        if (this.startTime && !this.endTime) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '截至日期不能为空' });
            return;
        }
        else if (!this.startTime && this.endTime) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能为空' });
            return;
        }
        this.query();
    };
    //重置
    VoucherApplicateComponent.prototype.resetClick = function () {
        // this.voucherApplicateBean = new VoucherApplicateBean();
        this.voucherApplicateBean.partyId = '';
        this.voucherApplicateBean.partyIdTo = '';
        this.startTime = '';
        this.endTime = '';
        this.applyPerson = '';
        this.voucherApplicateBean.statusId = '';
        this.voucherApplicateBean.applyPerson = '';
    };
    //修改
    VoucherApplicateComponent.prototype.update = function (item) {
        this.updateValue = item;
        if (item.statusId == '0' || item.statusId == '2') {
            this.updateLocationValue = this.locationList;
            this.display = true;
            this.showModel = '2';
            this.headerTitle = '抵用券申请修改';
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '已申请或已通过的不能修改' });
        }
    };
    //修改回调
    VoucherApplicateComponent.prototype.updateCall = function (param) {
        this.display = param.display;
        this.msgs = [];
        this.msgs.push({ severity: "success", summary: "提示", detail: param.message });
        this.query();
    };
    //申请
    VoucherApplicateComponent.prototype.applicate = function () {
        this.headerTitle = '抵用券申请';
        this.addValue = this.locationList;
        this.display = true;
        this.showModel = '1';
    };
    //申请回调
    VoucherApplicateComponent.prototype.applicateCall = function (param) {
        this.display = param.display;
        if (param.message) {
            this.msgs = [];
            this.msgs.push({ severity: "success", summary: "提示", detail: param.message });
        }
        this.query();
    };
    //详情
    VoucherApplicateComponent.prototype.detail = function (item) {
        this.detailValue = item;
        this.display = true;
        this.showModel = '3';
        this.headerTitle = '抵用券申请详情';
    };
    //详情回调
    VoucherApplicateComponent.prototype.detailCall = function (param) {
        this.display = param;
    };
    //删除
    VoucherApplicateComponent.prototype.del = function (item) {
        var _this = this;
        if (item.statusId == '1' || item.statusId == '3') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '已申请或已通过的不能删除' });
            return;
        }
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                // 条件
                var param = { couponApplyId: item.couponApplyId };
                _this.voucherHttpService.deleteCouponApplyInfo(param).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        _this.query();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "删除失败" });
                });
            }
        });
    };
    //上传文件查看
    VoucherApplicateComponent.prototype.downloadCheck = function (data) {
        if (data.description == null || data.description == "") {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "暂未上传任何影像" });
            return;
        }
        //获取用户名及ID
        //30301180515141949000454
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        var orgID = commonHeader.orgId;
        var userId = commonHeader.userId;
        var orgName = chName.orgName;
        var userName = chName.userName;
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1 + '';
        var datas = time.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (datas.length < 2) {
            datas = "0" + datas;
        }
        var QUERY_TIME = '' + year + month + data;
        window.open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_9__["TZB_HTTP_YXKQ"] + "SunIAS_V7/SunIASRequestServlet.do?UID=MOBILE&OrgID=" + orgID + "&OrgName=" + orgName + "&OrgOwner=" + orgID + "&right=0100000&PWD=cyg&UserID=" + userId + "&UserName=" + userName + "&AppID=SA&info1=BUSI_SERIAL_NO:" + data.description + ";OBJECT_NAME:APP1009;FILELEVEL:66;RIGHT:1111111;OBJECT_NAME:APP1009;QUERY_TIME:" + QUERY_TIME);
    };
    //分页
    VoucherApplicateComponent.prototype.paginate = function (event) {
        this.rows = event.rows;
        //每页显示的条数
        this.voucherApplicateBean.pageSize = Number(event.rows);
        //当前页
        this.currentPage = event.page + 1;
        this.voucherApplicateBean.pageNum = this.currentPage;
        this.first = event.rows * event.page;
        //调用查询的方法
        this.query();
    };
    //按钮权限
    VoucherApplicateComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    VoucherApplicateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-voucher-applicate',
            template: __webpack_require__(/*! ./voucher-applicate.component.html */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/voucher-applicate.component.html"),
            styles: [__webpack_require__(/*! ./voucher-applicate.component.scss */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/voucher-applicate.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"], app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_5__["CommonHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_voucher_http_service__WEBPACK_IMPORTED_MODULE_4__["VoucherHttpService"],
            app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_5__["CommonHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], VoucherApplicateComponent);
    return VoucherApplicateComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/bean/voucher-manage.bean.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/bean/voucher-manage.bean.ts ***!
  \***********************************************************************************************/
/*! exports provided: VoucherManageBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherManageBean", function() { return VoucherManageBean; });
var VoucherManageBean = /** @class */ (function () {
    function VoucherManageBean() {
        this.productCode = ""; //可用产品
        this.productRule = '0'; //产品规则
    }
    return VoucherManageBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-add/voucher-add.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-add/voucher-add.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12 ui12\" [formGroup]=\"userform\">\r\n    <div class=\"span\">\r\n      <label class=\"labelWidth\" appValidation>抵用券类型名称：</label>\r\n    </div>\r\n    <div class=\"text\">\r\n      <input type=\"text\" pInputText [(ngModel)]=\"voucherManageBean.couponTypeName\" formControlName=\"couponTypeName\" name=\"couponTypeName\">\r\n      <div class=\"textRel\" *ngIf=\"!userform.controls['couponTypeName'].valid&&userform.controls['couponTypeName'].dirty\">\r\n        <div class=\"textAbs\">\r\n            <span class=\"promptSpan\" [hidden]=\"!userform.hasError('required','couponTypeName')\">抵用券类型名称不能为空！</span>\r\n          <!-- <p [hidden]=\"!userform.hasError('required','couponTypeName')\"> 抵用券类型名称不能为空！</p> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['couponTypeName'].valid&&userform.controls['couponTypeName'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('pattern','couponTypeName')\"> 不能有空格！</p>\r\n      <p [hidden]=\"!userform.hasError('required','couponTypeName')\"> 抵用券类型名称不能为空！</p>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12 ui12\" [formGroup]=\"userform\">\r\n    <div class=\"span\">\r\n      <label class=\"labelWidth\" appValidation>面值（元）：</label>\r\n    </div>\r\n    <div class=\"text\">\r\n      <input type=\"text\" pInputText [(ngModel)]=\"couponAmount\" formControlName=\"couponAmount\" name=\"couponAmount\">\r\n      <div class=\"textRel\" *ngIf=\"!userform.controls['couponAmount'].valid&&userform.controls['couponAmount'].dirty\">\r\n        <div class=\"textAbs\">\r\n          <span class=\"promptSpan\" [hidden]=\"!userform.hasError('pattern','couponAmount')\">面值不能小于1且不能多余两位小数!</span>\r\n          <span class=\"promptSpan\" [hidden]=\"!userform.hasError('required','couponAmount')\">面值不能为空！</span>\r\n          <!-- <p [hidden]=\"!userform.hasError('pattern','couponAmount')\"> </p>\r\n          <p [hidden]=\"!userform.hasError('required','couponAmount')\"> 面值不能为空！</p> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['couponAmount'].valid&&userform.controls['couponAmount'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('pattern','couponAmount')\"> 面值不能小于1且不能多余两位小数！</p>\r\n      <p [hidden]=\"!userform.hasError('required','couponAmount')\"> 面值不能为空！</p>\r\n    </div> -->\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 ui12\" [formGroup]=\"userform\">\r\n    <div class=\"span\">\r\n      <label class=\"labelWidth\" appValidation>有效期（天）：</label>\r\n    </div>\r\n    <div class=\"text\">\r\n      <input type=\"text\" pInputText [(ngModel)]=\"voucherManageBean.validity\" formControlName=\"validity\" name=\"validity\">\r\n      <div class=\"textRel\" *ngIf=\"!userform.controls['validity'].valid&&userform.controls['validity'].dirty\">\r\n        <div class=\"textAbs\">\r\n          <span class=\"promptSpan\" [hidden]=\"!userform.hasError('required','validity')\">有效期不能为空！</span>\r\n          <span class=\"promptSpan\" [hidden]=\"!userform.hasError('pattern','validity')\">有效期只能为正整数</span>\r\n          <!-- <p [hidden]=\"!userform.hasError('required','validity')\">有效期不能为空！</p>\r\n          <p [hidden]=\"!userform.hasError('pattern','validity')\">有效期只能为正整数</p> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['validity'].valid&&userform.controls['validity'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('required','validity')\">有效期不能为空！</p>\r\n      <p [hidden]=\"!userform.hasError('pattern','validity')\">有效期只能为正整数</p>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12 ui12\" [formGroup]=\"userform\">\r\n      <div class=\"span\">\r\n        <label class=\"labelWidth\" appValidation>发放截止时间：</label>\r\n      </div>\r\n      <div class=\"text\">\r\n        <p-calendar [(ngModel)]=\"grantEndTime\" [showButtonBar]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n          [showOtherMonths]=\"false\" [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\" (onSelect)=\"selectTime()\"\r\n          formControlName=\"grantEndTime\" name=\"grantEndTime\"></p-calendar>\r\n        <div class=\"textRel\" *ngIf=\"!userform.controls['proportion'].valid&&userform.controls['proportion'].dirty\">\r\n          <div class=\"textAbs\">\r\n            <span class=\"promptSpan\" [hidden]=\"!userform.hasError('required','grantEndTime')\">发放截至日期不能为空！</span>\r\n            <!-- <p [hidden]=\"!userform.hasError('required','grantEndTime')\"> 发放截至日期不能为空！</p> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['grantEndTime'].valid&&userform.controls['grantEndTime'].dirty\">\r\n        <p [hidden]=\"!userform.hasError('required','grantEndTime')\"> 发放截至日期不能为空！</p>\r\n      </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12 ui12\" [formGroup]=\"userform\">\r\n    <div class=\"span\">\r\n      <label class=\"labelWidth\" appValidation>可发放机构：</label>\r\n    </div>\r\n    <div class=\"text\">\r\n      <input type=\"text\" pInputText (focus)=\"chooseTree()\" [(ngModel)]=\"voucherManageBean.branchId\" formControlName=\"branchId\" name=\"branchId\">\r\n      <div class=\"textRel\" *ngIf=\"!userform.controls['branchId'].valid&&userform.controls['branchId'].dirty\">\r\n        <div class=\"textAbs\">\r\n          <span class=\"promptSpan\" [hidden]=\"!userform.hasError('required','branchId')\">可发放机构不能为空！</span>\r\n          <!-- <p [hidden]=\"!userform.hasError('required','branchId')\"> 可发放机构不能为空！</p> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['branchId'].valid&&userform.controls['branchId'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('required','branchId')\"> 可发放机构不能为空！</p>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12 ui12\" [formGroup]=\"userform\">\r\n    <div class=\"span\">\r\n      <label class=\"labelWidth\" appValidation>产品规则：</label>\r\n    </div>\r\n    <div class=\"text\">\r\n      <p-dropdown [options]=\"productRule\" formControlName=\"productRule\" (onChange)=\"change()\" name=\"productRule\" [(ngModel)]=\"voucherManageBean.productRule\"></p-dropdown>\r\n      <div class=\"textRel\" *ngIf=\"!userform.controls['productRule'].valid&&userform.controls['productRule'].dirty\">\r\n        <div class=\"textAbs\">\r\n          <span class=\"promptSpan\" [hidden]=\"!userform.hasError('required','productRule')\">产品规则不能为空！</span>\r\n          <!-- <p [hidden]=\"!userform.hasError('required','productRule')\"> 产品规则不能为空！</p> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['productRule'].valid&&userform.controls['productRule'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('required','productRule')\"> 产品规则不能为空！</p>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12 ui12\"  *ngIf=\"proFlag\" >\r\n    <div class=\"span\">\r\n      <label class=\"labelWidth\" appValidation>可用产品列表：</label>\r\n    </div>\r\n    <!-- (focus)=\"productList()\" -->\r\n    <div class=\"text\">\r\n      <input type=\"text\" pInputText (focus)=\"productList()\" [(ngModel)]=\"voucherManageBean.productCode\" name=\"productCode\">\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 ui12\" [formGroup]=\"userform\">\r\n    <div class=\"span\">\r\n      <label class=\"labelWidth\" appValidation>可抵用比例（%）：</label>\r\n    </div>\r\n    <div class=\"text\">\r\n      <input type=\"text\" pInputText [(ngModel)]=\"proportion\" formControlName=\"proportion\" name=\"proportion\">\r\n      <div class=\"textRel\" *ngIf=\"!userform.controls['proportion'].valid&&userform.controls['proportion'].dirty\">\r\n        <div class=\"textAbs\">\r\n          <span class=\"promptSpan\" [hidden]=\"!userform.hasError('required','proportion')\">可抵用比例不能为空！</span>\r\n          <span class=\"promptSpan\" [hidden]=\"!userform.hasError('pattern','proportion')\">可抵用比例只能区于1到100之间且不能多余两位小数！</span>\r\n          <!-- <p [hidden]=\"!userform.hasError('required','proportion')\"> 可抵用比例不能为空！</p>\r\n          <p [hidden]=\"!userform.hasError('pattern','proportion')\"> 可抵用比例只能区于1到100之间且不能多余两位小数！</p> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['proportion'].valid&&userform.controls['proportion'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('required','proportion')\"> 可抵用比例不能为空！</p>\r\n      <p [hidden]=\"!userform.hasError('pattern','proportion')\"> 可抵用比例只能区于1到100之间且不能多余两位小数！</p>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12 ui12\" [formGroup]=\"userform\">\r\n    <div class=\"span\">\r\n      <label class=\"labelWidth\" appValidation>单次申请数量上限：</label>\r\n    </div>\r\n    <div class=\"text\">\r\n      <input type=\"text\" pInputText [(ngModel)]=\"voucherManageBean.onceNum\" formControlName=\"onceNum\" name=\"onceNum\">\r\n      <div class=\"textRel\" *ngIf=\"!userform.controls['onceNum'].valid&&userform.controls['onceNum'].dirty\">\r\n        <div class=\"textAbs\">\r\n          <span class=\"promptSpan\" [hidden]=\"!userform.hasError('required','onceNum')\">单次申请数量不能为空！</span>\r\n          <span class=\"promptSpan\" [hidden]=\"!userform.hasError('pattern','onceNum')\">单次申请数量只能为大于0的整数！</span>\r\n          <!-- <p [hidden]=\"!userform.hasError('required','onceNum')\"> 单次申请数量不能为空！</p>\r\n          <p [hidden]=\"!userform.hasError('pattern','onceNum')\"> 单次申请数量只能为大于0的整数！</p> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['onceNum'].valid&&userform.controls['onceNum'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('required','onceNum')\"> 单次申请数量不能为空！</p>\r\n      <p [hidden]=\"!userform.hasError('pattern','onceNum')\"> 单次申请数量只能为大于0的整数！</p>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12 ui12\" [formGroup]=\"userform\">\r\n    <div class=\"span\">\r\n      <label class=\"labelWidth\" appValidation>总数量：</label>\r\n    </div>\r\n    <div class=\"text\">\r\n      <input type=\"text\" pInputText [(ngModel)]=\"voucherManageBean.num\" formControlName=\"num\" name=\"num\">\r\n      <div class=\"textRel\" *ngIf=\"!userform.controls['num'].valid&&userform.controls['num'].dirty\">\r\n        <div class=\"textAbs\">\r\n          <span class=\"promptSpan\" [hidden]=\"!userform.hasError('required','num')\">总数量不能为空！</span>\r\n          <span class=\"promptSpan\" [hidden]=\"!userform.hasError('pattern','num')\">总数量只能为大于0的整数！</span>\r\n          <!-- <p [hidden]=\"!userform.hasError('required','num')\"> 总数量不能为空！</p>\r\n          <p [hidden]=\"!userform.hasError('pattern','num')\"> 总数量只能为大于0的整数！</p> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['num'].valid&&userform.controls['num'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('required','num')\"> 总数量不能为空！</p>\r\n      <p [hidden]=\"!userform.hasError('pattern','num')\"> 总数量只能为大于0的整数！</p>\r\n    </div> -->\r\n  </div>\r\n  <!-- <div class=\"ui-g-12\" [formGroup]=\"userform\">\r\n    <label class=\"labelWidth\" appValidation>状态：</label>\r\n    <p-dropdown [options]=\"statusId\" [(ngModel)]=\"voucherManageBean.statusId\" formControlName=\"statusId\" name=\"statusId\"></p-dropdown>\r\n    <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['statusId'].valid&&userform.controls['statusId'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('required','statusId')\"> 状态不能为空！</p>\r\n    </div>\r\n  </div> -->\r\n</div>\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"确定\" (click)='preserveClick()' class=\"btnWidth btnMarginRight\"></button>\r\n    <button pButton type=\"button\" label=\"取消\" (click)='modifyCloseBtn()' class=\"btnWidth\"></button>\r\n  </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<p-dialog [(visible)]=\"display\" *ngIf=\"display\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div>\r\n    <app-vouvher-tree *ngIf=\"showModel=='1'\" (selectAllValue)=\"chooseCall($event)\"></app-vouvher-tree>\r\n  </div>\r\n\r\n</p-dialog>\r\n\r\n<p-dialog [(visible)]=\"displayTree\" *ngIf=\"displayTree\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-tree [value]=\"treeData\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\"  (onNodeExpand)=\"nodeExpend($event)\" (onNodeSelect)=\"nodeCheck($event)\">\r\n    <!--  -->\r\n    <ng-template let-node pTemplate=\"default\">\r\n      <p-checkbox (onChange)=\"onChange($event,node)\" name=\"group\" value={{node.label}} label={{node.label}} [(ngModel)]=\"selectedList\"></p-checkbox>\r\n    </ng-template>\r\n  </p-tree>\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"确定\" (click)='proClick()'></button>\r\n    <button pButton type=\"button\" label=\"取消\" (click)='proCloseBtn()'></button>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-add/voucher-add.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-add/voucher-add.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".promptSpan {\n  height: 14px;\n  width: auto;\n  color: #f00;\n  float: left; }\n\n.ui12 {\n  width: 70%;\n  margin-left: 15%;\n  padding: 0px;\n  margin-bottom: 18px; }\n\n.labelWidth {\n  display: inline-block;\n  text-align: right; }\n\n.span {\n  float: left;\n  width: 25%;\n  text-align: right; }\n\n.text {\n  float: left;\n  width: 75%; }\n\n@media screen and (max-width: 1919px) {\n  .ui12 {\n    width: 70%;\n    margin-left: 15%;\n    padding: 0px;\n    margin-bottom: 18px; }\n  .labelWidth {\n    display: inline-block;\n    text-align: right; }\n  .span {\n    float: left;\n    width: 27%;\n    text-align: right; }\n  .text {\n    float: left;\n    width: 73%; } }\n\n.textRel {\n  position: relative;\n  width: 0px;\n  height: 0px; }\n\n.textAbs {\n  position: absolute;\n  width: 250px;\n  font-size: 14px;\n  color: #f00;\n  line-height: 20px;\n  height: 20px;\n  top: 0px; }\n\n.btn {\n  text-align: center;\n  margin: 20px 0px 20px 0px;\n  height: 26px;\n  padding: 0px; }\n\n.btnMarginRight {\n  margin-right: 19px; }\n\n.btnWidth {\n  width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvdm91Y2hlci92b3VjaGVyLW1hbmFnZS92b3VjaGVyLWFkZC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXG1hcmtldGluZ1xcdm91Y2hlclxcdm91Y2hlci1tYW5hZ2VcXHZvdWNoZXItYWRkXFx2b3VjaGVyLWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBRWQ7RUFDSTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQixFQUFBO0VBRXZCO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixpQkFBaUIsRUFBQTtFQUVyQjtJQUNJLFdBQVc7SUFDWCxVQUFVLEVBQUEsRUFDYjs7QUFFTDtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUVmO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osUUFBUSxFQUFBOztBQUVaO0VBQ0ksa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUVoQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vbWFya2V0aW5nL3ZvdWNoZXIvdm91Y2hlci1tYW5hZ2Uvdm91Y2hlci1hZGQvdm91Y2hlci1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnByb21wdFNwYW4ge1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBjb2xvcjogI2YwMDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi51aTEyIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxufVxyXG4ubGFiZWxXaWR0aHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5zcGFuIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi50ZXh0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDc1JTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjE5MTlweCl7XHJcbiAgICAudWkxMiB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLmxhYmVsV2lkdGh7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnNwYW4ge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAyNyU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAudGV4dCB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDczJTtcclxuICAgIH1cclxufVxyXG4udGV4dFJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbn1cclxuLnRleHRBYnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRvcDogMHB4O1xyXG59XHJcbi5idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDBweDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4uYnRuTWFyZ2luUmlnaHQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOXB4O1xyXG59XHJcbi5idG5XaWR0aCB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcblxyXG4vLyA6aG9zdC9kZWVwLyAudWktZGlhbG9nLWNvbnRlbnQudWktd2lkZ2V0LWNvbnRlbnR7XHJcbi8vICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuLy8gfSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-add/voucher-add.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-add/voucher-add.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: VoucherAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherAddComponent", function() { return VoucherAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_voucher_manage_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/voucher-manage.bean */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/bean/voucher-manage.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _http_voucher_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http/voucher.http.service */ "./src/app/pages/tzb/custom/marketing/voucher/http/voucher.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _product_manage_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../product-manage/http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VoucherAddComponent = /** @class */ (function () {
    function VoucherAddComponent(voucherHttpService, productPlatformHttpService, fb, commfunc) {
        this.voucherHttpService = voucherHttpService;
        this.productPlatformHttpService = productPlatformHttpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.voucherManageBean = new _bean_voucher_manage_bean__WEBPACK_IMPORTED_MODULE_2__["VoucherManageBean"]();
        this.tableData = []; //表格数据
        //日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["CALENDAR_CN"]; //讲英文转化为中文
        this.statusId = []; //状态
        this.productRule = []; //产品规则
        //提示信息
        this.msgs = [];
        this.allSelectedList = []; //全部选中的值
        this.allProductList = []; //选择的产品列表
        this.temporaryProList = []; //临时列表
        this.proList = [];
        this.proNameList = [];
        this.codeValues(); //调用方法，获取全部码值
        this.statusId = this.code['StatusId2'];
        this.productRule = this.code['ProductRule'];
        // this.statusId = [
        //   { label: '有效', value: '0' },
        // ]
        // this.productRule = [
        //   { label: '全部产品', value: '0' },
        //   { label: '部分产品', value: '1' }
        // ]
    }
    VoucherAddComponent.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'couponTypeName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'couponAmount': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]\d*(\.\d{1,2})?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'validity': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'branchId': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'productRule': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            // 'productCode': new FormControl('', [Validators.required]),
            'proportion': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^100$|^[1-9]\d{0,1}(\.\d{1,2})?$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'grantEndTime': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'onceNum': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'num': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]\d*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        this.voucherManageBean.statusId = '0';
        if (this.voucherManageBean.productRule == '0') {
            this.proFlag = false;
        }
    };
    //码值
    VoucherAddComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //产品规则选择全部隐藏产品列表
    VoucherAddComponent.prototype.change = function () {
        if (this.voucherManageBean.productRule == '0') {
            this.proFlag = false;
        }
        else {
            this.proFlag = true;
        }
    };
    VoucherAddComponent.prototype.productList = function () {
        this.displayTree = true;
        this.query_line();
    };
    //产品列表
    VoucherAddComponent.prototype.query_line = function () {
        var _this = this;
        this.productPlatformHttpService.productCategoryLineQueryList({}).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                var tempArr_1 = [];
                data.productLineList.forEach(function (item) {
                    var tempObj = { id: 'line' };
                    tempObj['label'] = item['productLineName'];
                    tempObj['value'] = item;
                    tempObj['children'] = [{}];
                    tempArr_1.push(tempObj);
                });
                _this.treeData = tempArr_1;
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
    //+号点击
    VoucherAddComponent.prototype.nodeExpend = function (event) {
        var _this = this;
        if (event.node.id == "line") {
            var arr_1 = [];
            this.productPlatformHttpService.productCategoryGroupInfoQueryList({ productLineId: event.node.value.productLineId }).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    data.productGroupInfoList.forEach(function (item) {
                        var tempObj = { id: 'group' };
                        tempObj['label'] = item['groupName'];
                        tempObj['value'] = item;
                        tempObj['children'] = [{}];
                        arr_1.push(tempObj);
                    });
                    event.node.children = arr_1;
                    if (_this.selectedList) {
                        if (_this.selectedList.indexOf(event.node.label) == -1) {
                            _this.unSelectCheck(arr_1, _this);
                        }
                        else {
                            _this.selectCheck(arr_1, _this);
                        }
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        if (event.node.id == "group") {
            var param = {
                groupId: event.node.value.groupId
            };
            var arr_2 = [];
            this.productPlatformHttpService.pdGroupTemplateQuery(param).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    data.groupTempList.forEach(function (item) {
                        var tempObj = { id: 'jichu' };
                        tempObj['label'] = item['tplName'];
                        tempObj['value'] = item;
                        tempObj['children'] = [{}];
                        arr_2.push(tempObj);
                    });
                    event.node.children = arr_2;
                    if (_this.selectedList) {
                        if (_this.selectedList.indexOf(event.node.label) == -1) {
                            _this.unSelectCheck(arr_2, _this);
                        }
                        else {
                            _this.selectCheck(arr_2, _this);
                        }
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        if (event.node.id == "jichu") {
            var arr = [];
            event.node.children = this.nodeCheck(event, event.node);
        }
    };
    //选择的产品
    VoucherAddComponent.prototype.selected = function (list, selectName) {
        var _this = this;
        if (this.selectedList) {
            var a = this.selectedList.indexOf(selectName);
            if (a == -1) { //如果父级去掉勾选将子集在this.allProductList删除
                this.temporaryProList.forEach(function (item) {
                    for (var j = 0; j < _this.allProductList.length; j++) {
                        if (item.productName == _this.allProductList[j].productName) {
                            _this.allProductList.splice(j, 1);
                        }
                    }
                });
                console.log(this.allProductList);
            }
            else { //父级勾选，将子集添加到this.allProductList中，并去除重复
                this.allProductList = this.removeRep(this.allProductList.concat(list));
                console.log(this.allProductList);
            }
        }
    };
    //查询出来的产品全部添加到一个list里面，然后去除重复，取消勾选时再去掉相应的产品
    //基础查可售
    VoucherAddComponent.prototype.baseQuery = function (data, node, selectName) {
        var _this = this;
        var arr = [];
        this.productPlatformHttpService.findAvailableProductList(data).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.temporaryProList = data.resultList;
                _this.selected(data.resultList, selectName);
                if (node.id == "jichu") {
                    _this.baseProduct = data.resultList;
                    _this.baseProduct.forEach(function (item) {
                        var tempObj = { id: 'product' };
                        tempObj['label'] = item['productName'];
                        tempObj['productName'] = item['productName'];
                        tempObj['productId'] = item['productId'];
                        arr.push(tempObj);
                    });
                    //判断基础产品有无勾选，有就将子集勾选上，否则就去掉子集勾选
                    if (_this.selectedList) {
                        if (_this.selectedList.indexOf(node.label) == -1) {
                            _this.unSelectCheck(arr, _this);
                        }
                        else {
                            _this.selectCheck(arr, _this);
                        }
                    }
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
        return arr;
    };
    //点击层级
    VoucherAddComponent.prototype.nodeCheck = function (event, node) {
        var baseProduct = [];
        if (event.node.id == "line") {
            var lineID = event.node.value.productLineId;
            var valueProduct = {
                productLineId: lineID,
                productGroupId: '',
                productTemplateId: '',
                pageSize: 100,
            };
            this.baseQuery(valueProduct, node, event.node.label);
        }
        if (event.node.id == "group") {
            var groupID = event.node.value.groupId;
            var lineID = event.node.value.productLineId;
            var valueProduct = {
                productLineId: lineID,
                productGroupId: groupID,
                productTemplateId: '',
                pageSize: 100,
            };
            this.baseQuery(valueProduct, node, event.node.label);
        }
        if (event.node.id == "jichu") {
            var baseID = event.node.value.tplId;
            var valueProduct = {
                productLineId: '',
                productGroupId: '',
                productTemplateId: baseID,
                pageSize: 100,
            };
            baseProduct = this.baseQuery(valueProduct, node, event.node.label);
        }
        if (event.node.id == "product") {
            this.temporaryProList = [event.node];
            var node_1 = [event.node];
            this.selected(node_1, event.node.productName);
        }
        return baseProduct;
    };
    //产品树
    VoucherAddComponent.prototype.onChange = function (event, node) {
        this.expandAfteronChange(node);
    };
    //去重
    VoucherAddComponent.prototype.removeRep = function (arr) {
        var n = [];
        for (var i = 0; i < arr.length; i++) {
            var flag = true;
            for (var j = 0; j < n.length; j++) {
                if (arr[i].productName == n[j].productName) {
                    flag = false;
                }
            }
            if (flag) {
                n.push(arr[i]);
            }
        }
        return n;
    };
    //产品列表确定
    VoucherAddComponent.prototype.proClick = function () {
        var _this = this;
        this.allProductList.forEach(function (item) {
            _this.proList.push(item.productId);
            _this.proNameList.push(item.productName);
        }); //取出产品名并转换成string
        var toStr = this.proList.join('|');
        this.voucherManageBean.productCode = toStr.length > 0 ? '|' + toStr + '|' : "";
        this.displayTree = false;
    };
    //产品列表取消
    VoucherAddComponent.prototype.proCloseBtn = function () {
        this.displayTree = false;
    };
    //全选
    VoucherAddComponent.prototype.expandAfteronChange = function (node) {
        if (this.selectedList.length > 0) {
            //选中
            if (this.selectedList.indexOf(node.label) != -1) {
                // this.allSelectedList.push(node);
                //选中所有子的
                if (node.children) {
                    this.selectCheck(node.children, this);
                }
            }
            else {
                //去掉选中
                if (node.children) {
                    this.unSelectCheck(node.children, this);
                }
            }
        }
    };
    //选中所有的子
    VoucherAddComponent.prototype.selectCheck = function (list, thiss) {
        var _this = this;
        list.forEach(function (element) {
            if (thiss.selectedList && thiss.selectedList.indexOf(element.label) == -1) {
                thiss.selectedList.push(element.label);
            } //选中子集
            if (element.children && element.children.length > 0) {
                _this.selectCheck(element.children, thiss);
            }
        });
    };
    //去掉全选
    VoucherAddComponent.prototype.unSelectCheck = function (list, thiss) {
        var _this = this;
        list.forEach(function (element) {
            if (thiss.selectedList.length == 1) {
                if (thiss.selectedList.indexOf(element.label) != -1) {
                    thiss.selectedList = [];
                }
            }
            else {
                if (thiss.selectedList.indexOf(element.label) != -1) {
                    thiss.selectedList.splice(thiss.selectedList.indexOf(element.label), 1);
                } //去掉子集选中
                if (element.children && element.children.length > 0) {
                    _this.unSelectCheck(element.children, thiss);
                }
            }
        });
    };
    //机构树选择
    VoucherAddComponent.prototype.chooseTree = function () {
        this.display = true;
        this.headerTitle = "请勾选可用机构";
        this.showModel = "1";
    };
    //机构树选择回调
    VoucherAddComponent.prototype.chooseCall = function (param) {
        this.display = false;
        this.voucherManageBean.branchId = param[0].orgId;
        this.orgName = param[0].orgName;
    };
    //日期处理
    VoucherAddComponent.prototype.selectTime = function () {
        var selectedTime = new Date(this.grantEndTime);
        var nowTime = new Date();
        if (selectedTime.getTime() <= (nowTime.getTime() - 24 * 60 * 60 * 1000)) {
            this.grantEndTime = "";
            this.msgs = [];
            this.msgs.push({ severity: "error", summary: "提示", detail: "截止日期不能需小于当日日期" });
        }
    };
    //确定
    VoucherAddComponent.prototype.preserveClick = function () {
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
        //产品列表校验
        if (this.proFlag && this.voucherManageBean.productCode == "") {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '产品列表不能为空' });
            return;
        }
        this.voucherManageBean.grantEndTime = this.commfunc.transDate(this.grantEndTime);
        this.voucherManageBean.couponAmount = parseFloat(this.couponAmount).toFixed(2);
        this.voucherManageBean.proportion = parseFloat(this.proportion).toFixed(2);
        this.voucherManageBean.branchName = this.orgName;
        var toStr = this.proNameList.join('|');
        this.voucherManageBean.productName = toStr.length > 0 ? '|' + toStr + '|' : "";
        // this.voucherManageBean.productName=this.proNameList.join('|').length > 0 ? '|' + toStr + '|' : "";
        this.voucherHttpService.couponTypeCreate(this.voucherManageBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.outValue.emit({
                    display: false,
                    message: '新增成功'
                });
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
    //取消
    VoucherAddComponent.prototype.modifyCloseBtn = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VoucherAddComponent.prototype, "outValue", void 0);
    VoucherAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-voucher-add',
            template: __webpack_require__(/*! ./voucher-add.component.html */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-add/voucher-add.component.html"),
            styles: [__webpack_require__(/*! ./voucher-add.component.scss */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-add/voucher-add.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], _product_manage_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_7__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_voucher_http_service__WEBPACK_IMPORTED_MODULE_4__["VoucherHttpService"],
            _product_manage_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_7__["ProductManageHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], VoucherAddComponent);
    return VoucherAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-manage.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-manage.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'抵用券类型管理'\"></header-title>\r\n  <div class=\"ui-g-12 query\">\r\n    <div class=\"ui-g-12 uiCont\">\r\n      <div class=\"ui-g-4 uiDiv\">\r\n        <div class=\"ui-g-5\">抵用券类型名称:</div>\r\n        <div class=\"ui-g-7\">\r\n          <input type=\"text\" pInputText [(ngModel)]=\"voucherManageBean.couponTypeName\">\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4 uiDiv\" [formGroup]=\"userform\">\r\n        <div class=\"ui-g-5\">面值:</div>\r\n        <div class=\"ui-g-7\">\r\n          <input type=\"text\" pInputText [(ngModel)]=\"voucherManageBean.couponAmount\" formControlName=\"couponAmount\">\r\n          <div class=\"textRel\" *ngIf=\"!userform.controls['couponAmount'].valid&&userform.controls['couponAmount'].dirty\">\r\n            <div class=\"textAbs\">\r\n                <p [hidden]=\"!userform.hasError('pattern','couponAmount')\"> 面值不能小于1且不能多余两位小数！</p>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['couponAmount'].valid&&userform.controls['couponAmount'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('pattern','couponAmount')\"> 面值不能小于1且不能多余两位小数！</p>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4 uiDivLast\">\r\n        <div class=\"ui-g-5\">状态:</div>\r\n        <div class=\"ui-g-7\">\r\n          <p-dropdown [options]=\"statusId\" [(ngModel)]=\"voucherManageBean.statusId\" class=\"textAlignLeft uifont14\"></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 uiCont\">\r\n      <div class=\"ui-g-4 uiDiv\" [formGroup]=\"userform\">\r\n        <div class=\"ui-g-5\">有效期（天）:</div>\r\n        <div class=\"ui-g-7\">\r\n          <input type=\"text\" pInputText [(ngModel)]=\"voucherManageBean.validity\" formControlName=\"validity\">\r\n          <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['validity'].valid&&userform.controls['validity'].dirty\">\r\n            <p [hidden]=\"!userform.hasError('pattern','validity')\">有效期只能为正整数</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4 uiDiv\">\r\n        <div class=\"ui-g-5\">发放截止时间:</div>\r\n        <div class=\"ui-g-7\">\r\n          <p-calendar [(ngModel)]=\"grantEndTime\" [showButtonBar]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n            [showOtherMonths]=\"false\" [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\" (onSelect)=\"selectTime()\"\r\n            name=\"\"></p-calendar>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4 uiDivLast\">\r\n        <div class=\"ui-g-5\">可用机构:</div>\r\n        <div class=\"ui-g-7\" id=\"orgName\">\r\n          <p-dropdown [options]=\"orgList\" (keyup)=\"inpquery($event)\" class=\"textAlignLeft\" [(ngModel)]=\"voucherManageBean.branchId\"\r\n            placeholder=\"请选择\" filter=\"filter\" [lazy]='true' [editable]='false' name=\"branchId\"></p-dropdown>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 uiCont\">\r\n      <div class=\"ui-g-4 uiDiv\">\r\n        <div class=\"ui-g-5\">产品规则:</div>\r\n        <div class=\"ui-g-7\">\r\n          <p-dropdown [options]=\"productRule\"  (onChange)=\"proChange()\" name=\"productRule\" [(ngModel)]=\"voucherManageBean.productRule\" class=\"textAlignLeft uifont14\"></p-dropdown>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4 uiDiv\"  *ngIf=\"proFlag\">\r\n        <div class=\"ui-g-5\">可用产品:</div>\r\n        <div class=\"ui-g-7\">\r\n          <input id=\"input\" type=\"text\" pInputText (focus)=\"productList()\" [(ngModel)]=\"productCode\" name=\"productCode\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    \r\n    <div class=\"ui-g-12 btn\">\r\n      <button pButton type=\"button\" label=\"查询\" (click)=\"queryClick()\" class=\"btnWidth btnMarginRight\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" (click)=\"resetClick()\" class=\"btnWidth\"></button>\r\n      <button pButton type=\"button\" label=\"新增\" (click)=\"add()\" *ngIf=\"permissionCheck('SID02092_P011')\" class=\"btnWidth btnRight\"></button>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"ui-g-12 add\"> -->\r\n    <!-- <button pButton type=\"button\" label=\"修改\"  (click)=\"update(item)\"></button> -->\r\n    \r\n  <!-- </div> -->\r\n  <!--表格-->\r\n\r\n  <p-dialog [(visible)]=\"display\" *ngIf=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n      {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n      <app-voucher-add *ngIf=\"showModel=='1'\" (outValue)=\"addCall($event)\"></app-voucher-add>\r\n      <app-voucher-update *ngIf=\"showModel=='2'\" [inValue]=\"updateValue\" (outValue)=\"updateCall($event)\"></app-voucher-update>\r\n    </div>\r\n  </p-dialog>\r\n  <p-dialog [(visible)]=\"displayTree\" *ngIf=\"displayTree\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-tree [value]=\"treeData\" selectionMode=\"multiple\"  (onNodeExpand)=\"nodeExpend($event)\" (onNodeSelect)=\"nodeCheck($event)\">\r\n   \r\n    </p-tree>\r\n    \r\n  </p-dialog>\r\n  <!-- 提示信息 -->\r\n  <p-growl [(value)]=\"msgs\"></p-growl>\r\n</div>\r\n<div class=\"ui-g-12 module\">\r\n  <div class=\"ui-g-12 query-result\">\r\n    <div class=\"table\">\r\n      <p-dataTable emptyMessage=\"没有查找到数据\" [value]=\"tableData\" scrollable=\"true\" scrollHeight=\"350px\">\r\n\r\n        <p-column field=\"couponTypeId\" header='抵用券类型编号'></p-column>\r\n        <p-column field=\"couponTypeName\" header='抵用券类型名称'></p-column>\r\n        <p-column field=\"couponAmount\" header='面值（元）'></p-column>\r\n        <p-column field=\"validity\" header='有效期（天）'></p-column>\r\n        <p-column field=\"grantEndTime\" header='发放截至日期'></p-column>\r\n        <p-column field=\"branchName\" header='可用机构'></p-column>\r\n        <p-column field=\"productName\" header='可用产品'></p-column>\r\n        <p-column field=\"proportion\" header='可抵用比例（%）'></p-column>\r\n        <p-column field=\"onceNum\" header='单次申请数量'></p-column>\r\n        <p-column field=\"num\" header='总数量'></p-column>\r\n        <p-column field=\"statusId\" header='状态'>\r\n          <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n            <span>{{car.statusId | codeValuePie:statusId}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"\" header='操作'>\r\n          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n            <a class=\"update tabelUpdateIco\" (click)=\"update(item)\" *ngIf=\"permissionCheck('SID02092_P013')\">修改</a>\r\n          </ng-template>\r\n        </p-column>\r\n      </p-dataTable>\r\n    </div>\r\n    <p-paginator first={{first}} rows=\"{{voucherManageBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[5,10,20,30]\"\r\n      (onPageChange)=\"paginate($event)\"></p-paginator>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-manage.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-manage.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  display: block;\n  -webkit-margin-before: 0px;\n  -webkit-margin-after: 0px;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px; }\n\n.query {\n  padding: 0px;\n  margin-top: 20px; }\n\n.query .ui-g-12 {\n    margin: 0px 0px 18px 0px;\n    height: 25px;\n    padding: 0px; }\n\n.query .uiCont {\n    width: 90%;\n    margin-left: 5%; }\n\n.query .ui-g-4 {\n    text-align: right;\n    height: 25px;\n    padding: 0px;\n    font-size: 14px; }\n\n.query .uiDiv {\n    width: 26%;\n    margin-right: 11%; }\n\n.query .uiDivLast {\n    width: 26%;\n    margin-right: 0px; }\n\n.query .ui-g-5 {\n    text-align: right;\n    height: 25px;\n    font-size: 14px;\n    line-height: 14px;\n    width: 32%;\n    margin-right: 4.71%; }\n\n.query .ui-g-7 {\n    height: 25px;\n    padding: 0px;\n    width: 63.29%; }\n\n.query .textRel {\n    position: relative;\n    width: 0px;\n    height: 0px; }\n\n.query .textAbs {\n    position: absolute;\n    width: 250px;\n    font-size: 14px;\n    color: #f00;\n    line-height: 20px;\n    height: 20px;\n    top: 0px; }\n\n@media screen and (min-width: 1367px) and (max-width: 1919px) {\n    .query .ui-g-5 {\n      text-align: right;\n      height: 25px;\n      font-size: 14px;\n      line-height: 14px;\n      width: 42%;\n      margin-right: 4.71%; }\n    .query .ui-g-7 {\n      height: 25px;\n      padding: 0px;\n      width: 53.29%; } }\n\n@media screen and (min-width: 1025px) and (max-width: 1366px) {\n    .query .ui-g-5 {\n      text-align: right;\n      height: 25px;\n      font-size: 14px;\n      line-height: 14px;\n      width: 50%;\n      margin-right: 4.71%; }\n    .query .ui-g-7 {\n      height: 25px;\n      padding: 0px;\n      width: 45.29%; } }\n\n@media screen and (max-width: 1024px) {\n    .query .ui-g-5 {\n      text-align: right;\n      height: 25px;\n      font-size: 14px;\n      line-height: 14px;\n      width: 60%;\n      margin-right: 4.71%; }\n    .query .ui-g-7 {\n      height: 25px;\n      padding: 0px;\n      width: 35.29%; } }\n\n.query .uifont14 {\n    font-size: 14px; }\n\n.query .btn {\n    text-align: center;\n    margin: 0px 0px 9px 0px;\n    height: 26px;\n    padding: 0px; }\n\n.query .btnWidth {\n    width: 100px; }\n\n.query .btnMarginRight {\n    margin-right: 27px;\n    margin-left: 11.29%; }\n\n.query .btnRight {\n    float: right;\n    margin-right: 5%;\n    background: linear-gradient(#ffc107, #ffc107); }\n\n.add {\n  text-align: right; }\n\n.table {\n  text-align: center; }\n\n:host/deep/.ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvdm91Y2hlci92b3VjaGVyLW1hbmFnZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXG1hcmtldGluZ1xcdm91Y2hlclxcdm91Y2hlci1tYW5hZ2VcXHZvdWNoZXItbWFuYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFGcEI7SUFJUSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLFlBQVksRUFBQTs7QUFOcEI7SUFTUSxVQUFVO0lBQ1YsZUFBZSxFQUFBOztBQVZ2QjtJQWFRLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWUsRUFBQTs7QUFoQnZCO0lBbUJRLFVBQVU7SUFDVixpQkFBaUIsRUFBQTs7QUFwQnpCO0lBdUJRLFVBQVU7SUFDVixpQkFBaUIsRUFBQTs7QUF4QnpCO0lBMkJRLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsbUJBQW1CLEVBQUE7O0FBaEMzQjtJQW1DUSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWEsRUFBQTs7QUFyQ3JCO0lBd0NRLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVyxFQUFBOztBQTFDbkI7SUE2Q1Esa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osUUFBUSxFQUFBOztBQUVaO0lBckRKO01BdURZLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixVQUFVO01BQ1YsbUJBQW1CLEVBQUE7SUE1RC9CO01BK0RZLFlBQVk7TUFDWixZQUFZO01BQ1osYUFBYSxFQUFBLEVBQ2hCOztBQUVMO0lBcEVKO01Bc0VZLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixVQUFVO01BQ1YsbUJBQW1CLEVBQUE7SUEzRS9CO01BOEVZLFlBQVk7TUFDWixZQUFZO01BQ1osYUFBYSxFQUFBLEVBQ2hCOztBQUVMO0lBbkZKO01BcUZZLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixVQUFVO01BQ1YsbUJBQW1CLEVBQUE7SUExRi9CO01BNkZZLFlBQVk7TUFDWixZQUFZO01BQ1osYUFBYSxFQUFBLEVBQ2hCOztBQWhHVDtJQW1HUSxlQUFlLEVBQUE7O0FBbkd2QjtJQXNHUSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZLEVBQUE7O0FBekdwQjtJQTRHUSxZQUFZLEVBQUE7O0FBNUdwQjtJQStHUSxrQkFBa0I7SUFDbEIsbUJBQW1CLEVBQUE7O0FBaEgzQjtJQW1IUSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDZDQUE2QyxFQUFBOztBQUtyRDtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLHVCQUF1QjtFQUN2Qix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vbWFya2V0aW5nL3ZvdWNoZXIvdm91Y2hlci1tYW5hZ2Uvdm91Y2hlci1tYW5hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLXdlYmtpdC1tYXJnaW4tYmVmb3JlOiAwcHg7XHJcbiAgICAtd2Via2l0LW1hcmdpbi1hZnRlcjogMHB4O1xyXG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDBweDtcclxuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogMHB4O1xyXG59XHJcbi5xdWVyeSB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgLnVpLWctMTJ7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDE4cHggMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAudWlDb250IHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIH1cclxuICAgIC51aS1nLTQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLnVpRGl2IHtcclxuICAgICAgICB3aWR0aDogMjYlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTElO1xyXG4gICAgfVxyXG4gICAgLnVpRGl2TGFzdCB7XHJcbiAgICAgICAgd2lkdGg6IDI2JTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIC51aS1nLTUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgd2lkdGg6IDMyJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQuNzElO1xyXG4gICAgfVxyXG4gICAgLnVpLWctNyB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICB3aWR0aDogNjMuMjklO1xyXG4gICAgfVxyXG4gICAgLnRleHRSZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHRBYnMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZjAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTM2N3B4KSBhbmQgKG1heC13aWR0aDoxOTE5cHgpe1xyXG4gICAgICAgIC51aS1nLTUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDIlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQuNzElO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudWktZy03IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1My4yOSU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI1cHgpIGFuZCAobWF4LXdpZHRoOjEzNjZweCl7XHJcbiAgICAgICAgLnVpLWctNSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNC43MSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS1nLTcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1LjI5JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjRweCl7XHJcbiAgICAgICAgLnVpLWctNSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNC43MSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS1nLTcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDM1LjI5JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWlmb250MTR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCA5cHggMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuV2lkdGgge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIC5idG5NYXJnaW5SaWdodCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyN3B4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMS4yOSU7XHJcbiAgICB9XHJcbiAgICAuYnRuUmlnaHQge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZjMTA3LCAjZmZjMTA3KTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLmFkZCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4udGFibGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuOmhvc3QvZGVlcC8udWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbi8vIDpob3N0L2RlZXAvIC51aS10cmVlIC51aS10cmVlbm9kZS51aS10cmVlbm9kZS1sZWFmPi51aS10cmVlbm9kZS1jb250ZW50Pi51aS10cmVlLXRvZ2dsZXJ7XHJcbi8vICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4vLyB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-manage.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-manage.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: VoucherManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherManageComponent", function() { return VoucherManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_voucher_manage_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/voucher-manage.bean */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/bean/voucher-manage.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _http_voucher_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../http/voucher.http.service */ "./src/app/pages/tzb/custom/marketing/voucher/http/voucher.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _common_http_common_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var _product_manage_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../product-manage/http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
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
 * @author 吴仕飞
 */









var VoucherManageComponent = /** @class */ (function () {
    function VoucherManageComponent(voucherHttpService, confirmationService, commonHttpService, productPlatformHttpService, commfunc, fb) {
        this.voucherHttpService = voucherHttpService;
        this.confirmationService = confirmationService;
        this.commonHttpService = commonHttpService;
        this.productPlatformHttpService = productPlatformHttpService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.voucherManageBean = new _bean_voucher_manage_bean__WEBPACK_IMPORTED_MODULE_2__["VoucherManageBean"]();
        this.statusId = []; //抵用券状态
        this.productRule = []; //产品规则
        //日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_CN"]; //讲英文转化为中文
        this.tableData = [];
        this.msgs = []; //提示信息
        this.first = 0; //分页控制
        this.orgList = []; //可用机构
        this.inpFlag = true;
        this.codeValues();
        this.statusId = this.code["StatusId1"];
        this.productRule = this.code['ProductRule'];
        // this.statusId = [
        //   { label: '有效', value: '0' },
        //   { label: '无效', value: '1' }
        // ]
    }
    VoucherManageComponent.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'couponAmount': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]\d*(\.\d{1,2})?$/)]),
            'validity': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[1-9]\d*$/)]),
        });
        this.voucherManageBean.pageSize = 10;
        this.voucherManageBean.pageNum = 1;
        if (this.voucherManageBean.productRule == '0') {
            this.proFlag = false;
        }
        this.query();
        this.orgquery('');
    };
    VoucherManageComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //截至时间
    VoucherManageComponent.prototype.selectTime = function () {
    };
    //产品规则
    VoucherManageComponent.prototype.proChange = function () {
        if (this.voucherManageBean.productRule == '1') {
            this.proFlag = true;
        }
        else {
            this.proFlag = false;
            this.voucherManageBean.productCode = '';
            this.productCode = '';
        }
    };
    VoucherManageComponent.prototype.productList = function () {
        this.displayTree = true;
        this.query_line();
    };
    //产品列表
    VoucherManageComponent.prototype.query_line = function () {
        var _this = this;
        this.productPlatformHttpService.productCategoryLineQueryList({}).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                var tempArr_1 = [];
                data.productLineList.forEach(function (item) {
                    var tempObj = { id: 'line' };
                    tempObj['label'] = item['productLineName'];
                    tempObj['value'] = item;
                    tempObj['children'] = [{}];
                    tempArr_1.push(tempObj);
                });
                _this.treeData = tempArr_1;
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
    //+号点击
    VoucherManageComponent.prototype.nodeExpend = function (event) {
        if (event.node.id == "line") {
            var arr_1 = [];
            this.productPlatformHttpService.productCategoryGroupInfoQueryList({ productLineId: event.node.value.productLineId }).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    data.productGroupInfoList.forEach(function (item) {
                        var tempObj = { id: 'group' };
                        tempObj['label'] = item['groupName'];
                        tempObj['value'] = item;
                        tempObj['children'] = [{}];
                        arr_1.push(tempObj);
                    });
                    event.node.children = arr_1;
                }
            });
        }
        if (event.node.id == "group") {
            var param = {
                groupId: event.node.value.groupId
            };
            var arr_2 = [];
            this.productPlatformHttpService.pdGroupTemplateQuery(param).subscribe(function (data) {
                if (data.returnCode.code == "success") {
                    data.groupTempList.forEach(function (item) {
                        var tempObj = { id: 'jichu' };
                        tempObj['label'] = item['tplName'];
                        tempObj['value'] = item;
                        tempObj['children'] = [{}];
                        arr_2.push(tempObj);
                    });
                    event.node.children = arr_2;
                }
            });
        }
        if (event.node.id == "jichu") {
            var arr = [];
            event.node.children = this.nodeCheck(event, event.node);
        }
    };
    //基础查可售
    VoucherManageComponent.prototype.baseQuery = function (data, node) {
        var arr = [];
        this.productPlatformHttpService.findAvailableProductList(data).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                if (node.id == "jichu") {
                    data.resultList.forEach(function (item) {
                        var tempObj = { id: 'product' };
                        tempObj['label'] = item['productName'];
                        tempObj['productName'] = item['productName'];
                        tempObj['productId'] = item['productId'];
                        arr.push(tempObj);
                    });
                }
            }
        });
        return arr;
    };
    //点击层级
    VoucherManageComponent.prototype.nodeCheck = function (event, node) {
        var baseProduct = [];
        if (event.node.id == "jichu") {
            var baseID = event.node.value.tplId;
            var valueProduct = {
                productLineId: '',
                productGroupId: '',
                productTemplateId: baseID,
                pageSize: 100,
            };
            baseProduct = this.baseQuery(valueProduct, event.node);
        }
        if (event.node.id == "product") {
            this.productCode = event.node.productName;
            this.voucherManageBean.productCode = event.node.productId;
            this.displayTree = false;
        }
        return baseProduct;
    };
    //查询方法
    VoucherManageComponent.prototype.query = function () {
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
        this.voucherHttpService.couponTypeQuery(this.voucherManageBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var tableData_1 = [];
                data.couponTypeList.forEach(function (item) {
                    if (item.productName == null) {
                        item.productName = "全部产品";
                        tableData_1.push(item);
                    }
                    else {
                        tableData_1.push(item);
                    }
                });
                _this.tableData = tableData_1;
                ;
                _this.total = data.total;
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
    //点击查询
    VoucherManageComponent.prototype.queryClick = function () {
        this.first = 0;
        this.voucherManageBean.pageNum = 1;
        this.voucherManageBean.grantEndTime = this.commfunc.transDate(this.grantEndTime);
        this.query();
    };
    //重置
    VoucherManageComponent.prototype.resetClick = function () {
        this.voucherManageBean.couponTypeName = '';
        this.voucherManageBean.couponAmount = null;
        this.voucherManageBean.statusId = '';
        this.voucherManageBean.validity = null;
        this.voucherManageBean.branchId = '';
        this.voucherManageBean.productCode = '';
        this.grantEndTime = '';
        this.voucherManageBean.productCode = '';
        this.productCode = '';
    };
    //可用机构模糊查询
    VoucherManageComponent.prototype.inpquery = function (event) {
        var _this = this;
        if (this.inpFlag) {
            this.inpFlag = false;
            setTimeout(function () {
                _this.inpFlag = true;
                var orgName = event.srcElement.value;
                _this.orgquery(orgName);
            }, 1000);
        }
    };
    //机构模糊查询
    VoucherManageComponent.prototype.orgquery = function (orgName) {
        var _this = this;
        var param = {
            orgName: orgName,
            pageSize: 30,
            OrgStatus: '0'
        };
        this.commonHttpService.queryVagueOrgList(param).subscribe(function (data) {
            if (data.orgList) {
                _this.orgList = _this.commfunc.listToLabelvalue(data.orgList, 'orgName', 'orgId');
            }
        });
    };
    //新增
    VoucherManageComponent.prototype.add = function () {
        this.headerTitle = '抵用券类型新增';
        this.display = true;
        this.showModel = '1';
    };
    //新增回调
    VoucherManageComponent.prototype.addCall = function (param) {
        this.display = param.display;
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '提示', detail: param.Message });
        this.query();
    };
    //修改
    VoucherManageComponent.prototype.update = function (item) {
        this.updateValue = item;
        this.display = true;
        this.showModel = '2';
        this.headerTitle = '抵用券类型修改';
    };
    //修改回调
    VoucherManageComponent.prototype.updateCall = function (param) {
        this.display = param.display;
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: '提示', detail: param.message });
        this.query();
    };
    //分页
    VoucherManageComponent.prototype.paginate = function (event) {
        this.rows = event.rows;
        //每页显示的条数
        this.voucherManageBean.pageSize = Number(event.rows);
        //当前页
        this.currentPage = event.page + 1;
        this.voucherManageBean.pageNum = this.currentPage;
        this.first = event.rows * event.page;
        //调用查询的方法
        this.query();
    };
    //按钮权限
    VoucherManageComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    VoucherManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-voucher-manage',
            template: __webpack_require__(/*! ./voucher-manage.component.html */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-manage.component.html"),
            styles: [__webpack_require__(/*! ./voucher-manage.component.scss */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-manage.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], _common_http_common_http_service__WEBPACK_IMPORTED_MODULE_7__["CommonHttpService"], _product_manage_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_8__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_voucher_http_service__WEBPACK_IMPORTED_MODULE_4__["VoucherHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            _common_http_common_http_service__WEBPACK_IMPORTED_MODULE_7__["CommonHttpService"],
            _product_manage_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_8__["ProductManageHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], VoucherManageComponent);
    return VoucherManageComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-update/voucher-update.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-update/voucher-update.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\" >\r\n    <label class=\"labelWidth\" appValidation>抵用券类型名称：</label>\r\n    <input id=\"input\" type=\"text\" pInputText disabled [(ngModel)]=\"voucherManageBean.couponTypeName\"  name=\"couponTypeName\">\r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['couponTypeName'].valid&&userform.controls['couponTypeName'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('required','couponTypeName')\"> 抵用券类型不能为空！</p>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12\" >\r\n    <label class=\"labelWidth\" appValidation>面值（元）：</label>\r\n    <input id=\"input\" type=\"text\" pInputText disabled [(ngModel)]=\"voucherManageBean.couponAmount\"  name=\"couponAmount\">\r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['couponAmount'].valid&&userform.controls['couponAmount'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('required','couponAmount')\"> 面值不能为空！</p>\r\n    </div> -->\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\" >\r\n    <label class=\"labelWidth\" appValidation>有效期（天）：</label>\r\n    <input id=\"input\" type=\"text\" pInputText disabled [(ngModel)]=\"voucherManageBean.validity\"  name=\"validity\">\r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['validity'].valid&&userform.controls['validity'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('required','validity')\">有效期不能为空！</p>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12\" [formGroup]=\"userform\">\r\n    <label class=\"labelWidth\" appValidation>发放截止时间：</label>\r\n    <p-calendar [(ngModel)]=\"grantEndTime\" [showButtonBar]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n      yearRange=\"1900:2200\" [showOtherMonths]=\"false\" [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\"\r\n      (onSelect)=\"selectTime()\" formControlName=\"grantEndTime\" name=\"grantEndTime\"></p-calendar>\r\n    <div class=\"textRel\" *ngIf=\"!userform.controls['grantEndTime'].valid&&userform.controls['grantEndTime'].dirty\">\r\n      <div class=\"textAbs\">\r\n        <span class=\"promptSpan\" [hidden]=\"!userform.hasError('required','grantEndTime')\">发放截至日期不能为空！</span>\r\n        <!-- <p [hidden]=\"!userform.hasError('required','grantEndTime')\"> 发放截至日期不能为空！</p> -->\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['grantEndTime'].valid&&userform.controls['grantEndTime'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('required','grantEndTime')\"> 发放截至日期不能为空！</p>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12\" >\r\n    <label class=\"labelWidth\" appValidation>可发放机构：</label>\r\n    <input id=\"input\" type=\"text\" pInputText disabled (focus)=\"chooseTree()\" [(ngModel)]=\"voucherManageBean.branchId\"  name=\"branchId\">\r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['branchId'].valid&&userform.controls['branchId'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('required','branchId')\"> 可发放机构不能为空！</p>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12\" >\r\n    <label class=\"labelWidth\" appValidation>产品规则：</label>\r\n    <p-dropdown [options]=\"productRule\" disabled=\"true\"  name=\"productRule\" [(ngModel)]=\"voucherManageBean.productRule\"></p-dropdown>\r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['productRule'].valid&&userform.controls['productRule'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('required','productRule')\"> 产品规则不能为空！</p>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12\"  *ngIf=\"proFlag\" >\r\n    <label class=\"labelWidth\" appValidation>可用产品列表：</label>\r\n    <input id=\"input\" type=\"text\" pInputText disabled [(ngModel)]=\"voucherManageBean.productCode\"  name=\"productCode\">\r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['productCode'].valid&&userform.controls['productCode'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('required','productCode')\"> 可用产品列表不能为空！</p>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12\" >\r\n    <label class=\"labelWidth\" appValidation>可抵用比例（%）：</label>\r\n    <input id=\"input\" type=\"text\" pInputText disabled [(ngModel)]=\"voucherManageBean.proportion\"  name=\"proportion\">\r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['proportion'].valid&&userform.controls['proportion'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('required','proportion')\"> 可抵用比不能为空！</p>\r\n    </div> -->\r\n  </div>\r\n  \r\n  <div class=\"ui-g-12\" >\r\n    <label class=\"labelWidth\" appValidation>单次申请数量上限：</label>\r\n    <input id=\"input\" type=\"text\" pInputText disabled [(ngModel)]=\"voucherManageBean.onceNum\"  name=\"onceNum\">\r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['onceNum'].valid&&userform.controls['onceNum'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('required','onceNum')\"> 单次申请数量上限不能为空！</p>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12\" >\r\n    <label class=\"labelWidth\" appValidation>总数量：</label>\r\n    <input id=\"input\" type=\"text\" pInputText disabled [(ngModel)]=\"voucherManageBean.num\"  name=\"num\">\r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['num'].valid&&userform.controls['num'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('required','num')\"> 总数量不能为空！</p>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12\" >\r\n    <label class=\"labelWidth\" appValidation>状态：</label>\r\n    <p-dropdown [options]=\"statusId\" [style]=\"{'color':'#000'}\" (onChange)=\"changeToEff()\" [(ngModel)]=\"voucherManageBean.statusId\"  name=\"statusId\"></p-dropdown>\r\n    <!-- <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"!userform.controls['statusId'].valid&&userform.controls['statusId'].dirty\">\r\n      <p [hidden]=\"!userform.hasError('required','statusId')\"> 状态不能为空！</p>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"确定\" (click)='preserveClick()' class=\"btnWidth btnMarginRight\"></button>\r\n    <button pButton type=\"button\" label=\"取消\" (click)='modifyCloseBtn()' class=\"btnWidth\"></button>\r\n  </div>\r\n</div>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<p-dialog [(visible)]=\"display\" *ngIf=\"display\"  width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div>\r\n    <org-mutil-all-tree-component *ngIf=\"showModel=='1'\" (selectAllIdValue)=\"chooseCall($event)\"></org-mutil-all-tree-component>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-update/voucher-update.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-update/voucher-update.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".promptSpan {\n  height: 14px;\n  width: auto;\n  color: #f00;\n  float: left; }\n\n.labelWidth {\n  display: inline-block;\n  text-align: right;\n  width: 42%; }\n\ninput {\n  width: 30%; }\n\n.textRel {\n  position: relative;\n  width: 0px;\n  height: 0px; }\n\n.textAbs {\n  position: absolute;\n  width: 250px;\n  font-size: 14px;\n  color: #f00;\n  line-height: 20px;\n  height: 20px;\n  top: -2px;\n  left: 365px; }\n\n.btn {\n  text-align: center;\n  margin: 20px 0px 20px 0px;\n  height: 26px;\n  padding: 0px; }\n\n.btnMarginRight {\n  margin-right: 19px; }\n\n.btnWidth {\n  width: 100px; }\n\n:host/deep/ .ui-dropdown {\n  width: 30% !important; }\n\n:host/deep/ .ui-calendar {\n  width: 30% !important; }\n\n:host/deep/.ui-dropdown-label.ui-inputtext {\n  color: #000000 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9tYXJrZXRpbmcvdm91Y2hlci92b3VjaGVyLW1hbmFnZS92b3VjaGVyLXVwZGF0ZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXG1hcmtldGluZ1xcdm91Y2hlclxcdm91Y2hlci1tYW5hZ2VcXHZvdWNoZXItdXBkYXRlXFx2b3VjaGVyLXVwZGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFFZjtFQUNJLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsVUFBUyxFQUFBOztBQUViO0VBQ0ksVUFDSixFQUFBOztBQUNBO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBRWY7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixTQUFTO0VBQ1QsV0FBVyxFQUFBOztBQUVmO0VBQ0ksa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUVoQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vbWFya2V0aW5nL3ZvdWNoZXIvdm91Y2hlci1tYW5hZ2Uvdm91Y2hlci11cGRhdGUvdm91Y2hlci11cGRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvbXB0U3BhbiB7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGNvbG9yOiAjZjAwO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmxhYmVsV2lkdGh7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHdpZHRoOjQyJTtcclxufVxyXG5pbnB1dHtcclxuICAgIHdpZHRoOiAzMCVcclxufVxyXG4udGV4dFJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbn1cclxuLnRleHRBYnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRvcDogLTJweDtcclxuICAgIGxlZnQ6IDM2NXB4O1xyXG59XHJcbi5idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDBweDtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4uYnRuTWFyZ2luUmlnaHQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxOXB4O1xyXG59XHJcbi5idG5XaWR0aCB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuOmhvc3QvZGVlcC8gIC51aS1kcm9wZG93bntcclxuICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdC9kZWVwLyAudWktY2FsZW5kYXJ7XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QvZGVlcC8udWktZHJvcGRvd24tbGFiZWwudWktaW5wdXR0ZXh0e1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-update/voucher-update.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-update/voucher-update.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: VoucherUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherUpdateComponent", function() { return VoucherUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bean_voucher_manage_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/voucher-manage.bean */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/bean/voucher-manage.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _http_voucher_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http/voucher.http.service */ "./src/app/pages/tzb/custom/marketing/voucher/http/voucher.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VoucherUpdateComponent = /** @class */ (function () {
    function VoucherUpdateComponent(voucherHttpService, fb, commfunc) {
        this.voucherHttpService = voucherHttpService;
        this.fb = fb;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.voucherManageBean = new _bean_voucher_manage_bean__WEBPACK_IMPORTED_MODULE_2__["VoucherManageBean"]();
        //日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["CALENDAR_CN"]; //讲英文转化为中文
        this.statusId = []; //状态
        this.productRule = []; //产品规则
        //提示信息
        this.msgs = [];
        this.codeValues(); //调用方法，获取全部码值
        this.statusId = this.code['StatusId2'];
        this.productRule = this.code['ProductRule'];
        // this.statusId = [
        //   { label: '有效', value: '0' },
        //   { label: '无效', value: '1' }
        // ]
        // this.productRule = [
        //   { label: '全部产品', vlaue: '0' },
        //   { label: '部分产品', value: '1' }
        // ]
    }
    VoucherUpdateComponent.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            // 'couponTypeName': new FormControl('', [Validators.required]),
            // 'couponAmount': new FormControl('', [Validators.required]),
            // 'validity': new FormControl('', [Validators.required]),
            // 'branchId': new FormControl('', [Validators.required]),
            // 'productRule': new FormControl('', [Validators.required]),
            // 'productCode': new FormControl('', [Validators.required]),
            // 'proportion': new FormControl('', [Validators.required]),
            'grantEndTime': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        this.voucherManageBean = this.inValue;
        var time = this.voucherManageBean.grantEndTime;
        this.grantEndTime = new Date(Number(time.slice(0, 4)), Number(time.slice(4, 6)) - 1, Number(time.slice(-2)));
        if (this.voucherManageBean.productRule == '1') {
            this.proFlag = true;
        }
    };
    //码值
    VoucherUpdateComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //产品规则选择全部隐藏产品列表
    VoucherUpdateComponent.prototype.change = function () {
        if (this.voucherManageBean.productRule == '0') {
            this.proFlag = false;
        }
    };
    //机构树选择
    VoucherUpdateComponent.prototype.chooseTree = function () {
        this.display = true;
        this.headerTitle = "请勾选可用机构";
        this.showModel = "1";
    };
    //机构树选择回调
    VoucherUpdateComponent.prototype.chooseCall = function (param) {
        this.display = false;
        this.voucherManageBean.branchId = param.join(',');
    };
    //时间处理
    VoucherUpdateComponent.prototype.selectTime = function () {
        var selectedTime = new Date(this.grantEndTime);
        var nowTime = new Date();
        if (selectedTime.getTime() <= (nowTime.getTime() - 24 * 60 * 60 * 1000)) {
            this.grantEndTime = "";
            this.msgs = [];
            this.msgs.push({ severity: "error", summary: "提示", detail: "截止日期不能小于当前日期" });
        }
    };
    //状态有效校验
    VoucherUpdateComponent.prototype.changeToEff = function () {
        if (this.voucherManageBean.statusId == '0') {
            var now = new Date();
            var nowTime = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            if (this.grantEndTime < nowTime) {
                this.grantEndTime = "";
                this.msgs = [];
                this.msgs.push({ severity: "error", summary: "提示", detail: "截止日期不能小于当前日期" });
            }
        }
    };
    //确定
    VoucherUpdateComponent.prototype.preserveClick = function () {
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
        this.voucherManageBean.grantEndTime = this.commfunc.transDate(this.grantEndTime);
        this.voucherHttpService.couponTypeUpdate(this.voucherManageBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.outValue.emit({
                    display: false,
                    message: '修改成功'
                });
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
    //取消
    VoucherUpdateComponent.prototype.modifyCloseBtn = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VoucherUpdateComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VoucherUpdateComponent.prototype, "outValue", void 0);
    VoucherUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-voucher-update',
            template: __webpack_require__(/*! ./voucher-update.component.html */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-update/voucher-update.component.html"),
            styles: [__webpack_require__(/*! ./voucher-update.component.scss */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-update/voucher-update.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_voucher_http_service__WEBPACK_IMPORTED_MODULE_4__["VoucherHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], VoucherUpdateComponent);
    return VoucherUpdateComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher.component.ts ***!
  \*************************************************************************/
/*! exports provided: VoucherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherComponent", function() { return VoucherComponent; });
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

var VoucherComponent = /** @class */ (function () {
    function VoucherComponent() {
    }
    VoucherComponent.prototype.ngOnInit = function () {
    };
    VoucherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-voucher',
            template: "<router-outlet></router-outlet>",
        }),
        __metadata("design:paramtypes", [])
    ], VoucherComponent);
    return VoucherComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher.module.ts ***!
  \**********************************************************************/
/*! exports provided: VoucherModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherModule", function() { return VoucherModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _voucher_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voucher.routing */ "./src/app/pages/tzb/custom/marketing/voucher/voucher.routing.ts");
/* harmony import */ var _voucher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voucher.component */ "./src/app/pages/tzb/custom/marketing/voucher/voucher.component.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _http_voucher_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http/voucher.http.service */ "./src/app/pages/tzb/custom/marketing/voucher/http/voucher.http.service.ts");
/* harmony import */ var _voucher_manage_voucher_manage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./voucher-manage/voucher-manage.component */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-manage.component.ts");
/* harmony import */ var _voucher_manage_voucher_add_voucher_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./voucher-manage/voucher-add/voucher-add.component */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-add/voucher-add.component.ts");
/* harmony import */ var _voucher_manage_voucher_update_voucher_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./voucher-manage/voucher-update/voucher-update.component */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-update/voucher-update.component.ts");
/* harmony import */ var _voucher_applicate_voucher_applicate_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./voucher-applicate/voucher-applicate.component */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/voucher-applicate.component.ts");
/* harmony import */ var _voucher_applicate_applicate_add_applicate_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./voucher-applicate/applicate-add/applicate-add.component */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-add/applicate-add.component.ts");
/* harmony import */ var _voucher_applicate_applicate_update_applicate_update_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./voucher-applicate/applicate-update/applicate-update.component */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-update/applicate-update.component.ts");
/* harmony import */ var _voucher_applicate_applicate_detail_applicate_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./voucher-applicate/applicate-detail/applicate-detail.component */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applicate-detail/applicate-detail.component.ts");
/* harmony import */ var _custom_voucher_manage_custom_voucher_manage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./custom-voucher-manage/custom-voucher-manage.component */ "./src/app/pages/tzb/custom/marketing/voucher/custom-voucher-manage/custom-voucher-manage.component.ts");
/* harmony import */ var _voucher_applicate_applyPerson_applyPerson_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./voucher-applicate/applyPerson/applyPerson.component */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/applyPerson/applyPerson.component.ts");
/* harmony import */ var app_service_basis_user_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/service/basis/user/user.service */ "./src/app/service/basis/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var VoucherModule = /** @class */ (function () {
    function VoucherModule() {
    }
    VoucherModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__["FrameworkModule"],
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_4__["SharedBasisModule"],
                _voucher_routing__WEBPACK_IMPORTED_MODULE_2__["VoucherRouting"]
            ],
            declarations: [
                _voucher_component__WEBPACK_IMPORTED_MODULE_3__["VoucherComponent"],
                _voucher_manage_voucher_manage_component__WEBPACK_IMPORTED_MODULE_7__["VoucherManageComponent"],
                _voucher_manage_voucher_add_voucher_add_component__WEBPACK_IMPORTED_MODULE_8__["VoucherAddComponent"],
                _voucher_manage_voucher_update_voucher_update_component__WEBPACK_IMPORTED_MODULE_9__["VoucherUpdateComponent"],
                _voucher_applicate_voucher_applicate_component__WEBPACK_IMPORTED_MODULE_10__["VoucherApplicateComponent"],
                _voucher_applicate_applicate_add_applicate_add_component__WEBPACK_IMPORTED_MODULE_11__["ApplicateAddComponent"],
                _voucher_applicate_applicate_update_applicate_update_component__WEBPACK_IMPORTED_MODULE_12__["ApplicateUpdateComponent"],
                _voucher_applicate_applicate_detail_applicate_detail_component__WEBPACK_IMPORTED_MODULE_13__["ApplicateDetailComponent"],
                _custom_voucher_manage_custom_voucher_manage_component__WEBPACK_IMPORTED_MODULE_14__["CustomVoucherManageComponent"],
                _voucher_applicate_applyPerson_applyPerson_component__WEBPACK_IMPORTED_MODULE_15__["ApplyPersonComponent"]
            ],
            providers: [
                app_service_basis_user_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"],
                _http_voucher_http_service__WEBPACK_IMPORTED_MODULE_6__["VoucherHttpService"]
            ]
        })
    ], VoucherModule);
    return VoucherModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/marketing/voucher/voucher.routing.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/marketing/voucher/voucher.routing.ts ***!
  \***********************************************************************/
/*! exports provided: VoucherRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoucherRouting", function() { return VoucherRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _voucher_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voucher.component */ "./src/app/pages/tzb/custom/marketing/voucher/voucher.component.ts");
/* harmony import */ var _voucher_manage_voucher_manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voucher-manage/voucher-manage.component */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-manage/voucher-manage.component.ts");
/* harmony import */ var _voucher_applicate_voucher_applicate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voucher-applicate/voucher-applicate.component */ "./src/app/pages/tzb/custom/marketing/voucher/voucher-applicate/voucher-applicate.component.ts");
/* harmony import */ var _custom_voucher_manage_custom_voucher_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-voucher-manage/custom-voucher-manage.component */ "./src/app/pages/tzb/custom/marketing/voucher/custom-voucher-manage/custom-voucher-manage.component.ts");





var routes = [
    {
        path: '',
        component: _voucher_component__WEBPACK_IMPORTED_MODULE_1__["VoucherComponent"],
        children: [
            { path: "voucher-manage", component: _voucher_manage_voucher_manage_component__WEBPACK_IMPORTED_MODULE_2__["VoucherManageComponent"] },
            { path: "voucher-applicate", component: _voucher_applicate_voucher_applicate_component__WEBPACK_IMPORTED_MODULE_3__["VoucherApplicateComponent"] },
            { path: "custom-voucher-manage", component: _custom_voucher_manage_custom_voucher_manage_component__WEBPACK_IMPORTED_MODULE_4__["CustomVoucherManageComponent"] }
        ]
    },
];
var VoucherRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=default~routing-voucher-voucher-module~voucher-voucher-module.js.map