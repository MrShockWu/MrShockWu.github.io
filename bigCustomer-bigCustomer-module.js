(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bigCustomer-bigCustomer-module"],{

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomerApprove/bean/bigCusApprove.bean.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomerApprove/bean/bigCusApprove.bean.ts ***!
  \**********************************************************************************************************/
/*! exports provided: BigCusApproveBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigCusApproveBean", function() { return BigCusApproveBean; });
var BigCusApproveBean = /** @class */ (function () {
    function BigCusApproveBean() {
    }
    return BigCusApproveBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomerApprove/bigCustomerApprove.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomerApprove/bigCustomerApprove.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow partStyle\">\r\n    <header-title [Info]=\"detailList.littleClassName\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 tit\">\r\n                <span>大客户编号:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{bigCusApproveBean.bigCustNo}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 tit\">\r\n                <span>客户号:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{bigCusApproveBean.custNo}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 tit\">\r\n                <span>客户名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{bigCusApproveBean.custName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 tit\">\r\n                <span>上年日均存款(万元):</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{(bigCusApproveBean.snrjckSum/1)|number:'1.2-2'}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 tit\">\r\n                <span>上年日均贷款及敞口(万元):</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{(bigCusApproveBean.snrjdkjckSum/1)|number:'1.2-2'}}</span>\r\n            </div>\r\n            <div class=\"ui-g-2 tit\">\r\n                <span>费用单价(万分之):</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <span>{{(bigCusApproveBean.feeunitPrice/1)|number:'1.2-2'}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 tit\">\r\n                <span>存款基期(万元):</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"depositBase\" *ngIf=\"isShow && !isHistory && stop_flag\" (keyup)=\"docheck('1',depositBase)\"\r\n                />\r\n                <input type=\"text\" pInputText [(ngModel)]=\"depositBase\" *ngIf=\"!isShow || isHistory || !stop_flag\" disabled/>\r\n            </div>\r\n            <div class=\"ui-g-2 tit\">\r\n                <span>贷款基期(万元):</span>\r\n            </div>\r\n            <div class=\"ui-g-2\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"loanBase\" *ngIf=\"isShow && !isHistory && stop_flag\" (keyup)=\"docheck('2','loanBase')\"\r\n                />\r\n                <input type=\"text\" pInputText [(ngModel)]=\"loanBase\" *ngIf=\"!isShow || isHistory || !stop_flag\" disabled/>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 functions\">\r\n    <span class=\"change\" [ngClass]=\"{'active':show==2}\" (click)=\"apply(2)\">\r\n        大客户名单信息\r\n    </span>\r\n    <span class=\"change\" [ngClass]=\"{'active':show==3}\" (click)=\"apply(3)\">\r\n        大客户分成信息\r\n    </span>\r\n</div>\r\n<div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12\" *ngIf=\"show==2\">\r\n        <header-title [Info]=\"'大客户名单信息'\"></header-title>\r\n        <div class=\"ui-g-12\" *ngIf=\"firstCodeFlag\">\r\n            <form [formGroup]=\"userform\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span appValidation>客户号:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <input type=\"text\" formControlName=\"custNo\" pInputText (blur)=\"checkPerson()\" [(ngModel)]=\"custNo\" (keyup)=\"onKeyupNumber($event,1)\"\r\n                        />\r\n                        <div class=\"requireLabel\" *ngIf=\"!userform.controls['custNo'].valid&&userform.controls['custNo'].dirty\">\r\n                            客户号不能为空!\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span appValidation>客户名称:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <input type=\"text\" formControlName=\"custName\" disabled pInputText [(ngModel)]=\"custName\" />\r\n                        <div class=\"requireLabel\" *ngIf=\"!userform.controls['custName'].valid&&userform.controls['custName'].dirty\">\r\n                            客户名称不能为空!\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <div class=\"ui-g-12 btn\">\r\n                <button pButton type=\"button\" [disabled]=\"addFlagBtn\" *ngIf=\"stop_flag\" label=\"添加\" (click)=\"add()\"></button>\r\n                <button pButton type=\"button\" label=\"重置\" (click)=\"reset(1)\"></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 table base-table\">\r\n            <p-dataTable [value]=\"data_cuslist\" scrollable=\"true\" scrollHeight=\"300px\" [emptyMessage]=\"tabMesg\">\r\n                <p-column field=\"\" header=\"序号\" [style]=\"{'width':'60px'}\">\r\n                    <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                        {{ri+1}}\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"custNo\" header=\"客户号\" [style]=\"{'width':'110px'}\"></p-column>\r\n                <p-column field=\"custName\" header=\"客户名称\" [style]=\"{'width':'150px'}\"></p-column>\r\n                <p-column field=\"byrjckSum\" header=\"上月日均存款(万元)\" [style]=\"{'width':'120px'}\">\r\n                    <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                        {{(col.byrjckSum/1)|number:'1.2-2'}}\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"byrjdkjckSum\" header=\"上月日均贷款及敞口(万元)\" [style]=\"{'width':'160px'}\">\r\n                    <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                        {{(col.byrjdkjckSum/1)|number:'1.2-2'}}\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"snrjckSum\" header=\"上年日均存款(万元)\" [style]=\"{'width':'120px'}\">\r\n                    <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                        {{(col.snrjckSum/1)|number:'1.2-2'}}\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"snrjdkjckSum\" header=\"上年日均贷款及敞口(万元)\" [style]=\"{'width':'160px'}\">\r\n                    <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                        {{(col.snrjdkjckSum/1)|number:'1.2-2'}}\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"relatedCustName\" header=\"关联人\" [style]=\"{'width':'100px'}\"></p-column>\r\n                <p-column field=\"depositSumType\" header=\"存款累计方式\" [style]=\"{'width':'120px'}\">\r\n                    <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                        {{col.depositSumType|codeValuePie:depositSumTypeOptions}}\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column header=\"操作\" [style]=\"{'width':'80px'}\" *ngIf=\"firstCodeFlag\">\r\n                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                        <span class=\"tabelDeleteSetIco\" *ngIf=\"!stop_flag\">删除</span>\r\n                        <span *ngIf=\"stop_flag\" class=\"tabelDeleteIco\" (click)=\"toDelete(col)\">删除</span>\r\n                    </ng-template>\r\n                </p-column>\r\n            </p-dataTable>\r\n        </div>\r\n        <div class=\"ui-g-12 btn\" *ngIf=\"firstCodeFlag\">\r\n            <button pButton type=\"button\" label=\"全部删除\" *ngIf=\"stop_flag\" (click)=\"deleteAll()\"></button>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"show==3\">\r\n        <header-title [Info]=\"'大客户分成信息'\"></header-title>\r\n        <div class=\"ui-g-12\" *ngIf=\"firstCodeFlag\">\r\n            <form [formGroup]=\"moneyform\">\r\n                <div class=\"ui-g-6\">\r\n                    <div class=\"ui-g-4 tit\">\r\n                        <span appValidation>费用单价:</span>\r\n                    </div>\r\n                    <div class=\"ui-g-5\">\r\n                        <input type=\"text\" formControlName=\"feeunitPrice\" pInputText [(ngModel)]=\"feeunitPrice\" (blur)=\"changeAgain()\" (keyup)=\"checkNumtwo($event)\"\r\n                        />\r\n                        <div class=\"requireLabel\" *ngIf=\"!moneyform.controls['feeunitPrice'].valid&&moneyform.controls['feeunitPrice'].dirty\">\r\n                            费用单价不能为空!\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-2 unit_tit\">\r\n                        <span>单位:元/万元·月</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"header-title\" style=\"position:relative\">\r\n                    <span class=\"line\"></span>\r\n                    <span class=\"text\">录入归属客户经理信息</span>\r\n                    <span class=\"red_tit\">(最多录入五个经理)</span>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <div class=\"ui-g-4 tit\">\r\n                            <span appValidation>协储员号:</span>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <input formControlName=\"custId\" type=\"text\" pInputText [(ngModel)]=\"custId\" (blur)=\"checkNum()\" (keyup)=\"onKeyupNumber($event,2)\"\r\n                            />\r\n                            <div class=\"requireLabel\" *ngIf=\"!moneyform.controls['custId'].valid&&moneyform.controls['custId'].dirty\">\r\n                                协储员号不能为空!\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <div class=\"ui-g-4 tit\">\r\n                            <span appValidation>协储员姓名:</span>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <input formControlName=\"custIdName\" type=\"text\" disabled pInputText [(ngModel)]=\"custIdName\" />\r\n                            <div class=\"requireLabel\" *ngIf=\"!moneyform.controls['custIdName'].valid&&moneyform.controls['custIdName'].dirty\">\r\n                                协储员姓名不能为空!\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4\">\r\n                        <div class=\"ui-g-4 tit\">\r\n                            <span>费用分成比例(%):</span>\r\n                        </div>\r\n                        <div class=\"ui-g-6\">\r\n                            <input formControlName=\"divideRate\" type=\"text\" pInputText [(ngModel)]=\"divideRate\" (keyup)=\"checkNumtwo($event)\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <div class=\"ui-g-12 btn\">\r\n                <button pButton type=\"button\" [disabled]=\"addMoeyFlag\" label=\"添加\" (click)=\"addMoney()\"></button>\r\n                <button pButton type=\"button\" label=\"重置\" (click)=\"reset(2)\"></button>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 table base-table\">\r\n            <p-dataTable [value]=\"dataTable\" scrollable=\"true\" scrollHeight=\"300px\" [emptyMessage]=\"tabMesg\">\r\n                <p-column field=\"\" header=\"序号\">\r\n                    <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                        {{ri+1}}\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"assitUserId\" header=\"协储员号\"></p-column>\r\n                <p-column field=\"assitUserName\" header=\"姓名\"></p-column>\r\n                <p-column field=\"departName\" header=\"部门\"></p-column>\r\n                <p-column field=\"divideRate\" header=\"费用分成比例(%)\">\r\n                    <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                        <input type=\"text\" [disabled]=\"!col.showUpdate\" pInputText [(ngModel)]=\"col.divideRate\" (blur)=\"toUpdateSave(col)\" (keyup)=\"checkNumtwo($event)\"\r\n                        />\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column header=\"操作\" *ngIf=\"firstCodeFlag\">\r\n                    <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                        <div class=\"table-button\">\r\n                            <span *ngIf=\"!col.showUpdate\" class=\"tabelUpdateIco\" (click)=\"toUpdate(col)\">修改</span>\r\n                            <span class=\"tabelDeleteIco\" (click)=\"toDeleteMoney(col)\">删除</span>\r\n                        </div>\r\n                    </ng-template>\r\n                </p-column>\r\n            </p-dataTable>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <examine-page [inValue]=\"dataMap\" [bigCusValue]=\"bigCusValue\"></examine-page>\r\n    </div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomerApprove/bigCustomerApprove.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomerApprove/bigCustomerApprove.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tit {\n  text-align: right;\n  padding-right: 5px !important; }\n\n.ui-g-6 .ui-g-4,\n.ui-g-6 .ui-g-6 {\n  padding: 0; }\n\n.partStyle {\n  margin-bottom: 10px; }\n\n.czdq1 {\n  vertical-align: middle;\n  width: 19px; }\n\n.czdq2 {\n  vertical-align: middle;\n  font-size: 14px;\n  color: #19b0c8; }\n\nspan.span-p2 {\n  margin: 0;\n  float: right;\n  margin-top: -45px; }\n\n.width-p2 {\n  width: 80px !important; }\n\n.functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0; }\n\n.functions .change {\n    display: inline-block;\n    font-size: 15px;\n    height: 35px;\n    line-height: 35px;\n    border-radius: 3px 3px 0 0;\n    color: #929292;\n    padding: 0px 30px;\n    font-weight: bold;\n    cursor: pointer; }\n\n.active {\n  border: none !important;\n  background-color: #f7f7f7 !important;\n  color: #003f5c !important; }\n\n.btn,\n.table {\n  text-align: center; }\n\n.unit_tit {\n  color: #f00; }\n\n.header-title {\n  height: 42px;\n  width: 100%;\n  background-color: #fafafa;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #dadada !important; }\n\n.header-title .line {\n    width: 3px;\n    height: 19px;\n    display: inline-block;\n    margin-right: 13px;\n    background-color: #19b0c8; }\n\n@media screen and (max-width: 1280px) {\n    .header-title .line {\n      height: 17px; } }\n\n.header-title .text {\n    flex: 1;\n    height: 20px;\n    line-height: 20px;\n    display: block;\n    white-space: nowrap;\n    font-size: 16px;\n    color: #545454;\n    width: 25px;\n    font-weight: bold; }\n\n@media screen and (max-width: 1280px) {\n    .header-title .text {\n      font-size: 15px; } }\n\n.header-title .red_tit {\n    position: absolute;\n    left: 200px;\n    color: #f00;\n    font-weight: bold;\n    font-size: 15px; }\n\n.requireLabel {\n  color: #f00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9iaWdDdXN0b21lci9iaWctY3VzLWFwcGx5L2JpZ0N1c3RvbWVyQXBwcm92ZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGJpZ0N1c3RvbWVyXFxiaWctY3VzLWFwcGx5XFxiaWdDdXN0b21lckFwcHJvdmVcXGJpZ0N1c3RvbWVyQXBwcm92ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQiw2QkFBNkIsRUFBQTs7QUFHakM7O0VBR1EsVUFBVSxFQUFBOztBQVFsQjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHNCQUFzQjtFQUN0QixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHNCQUFzQixFQUFBOztBQUkxQjtFQUNJLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUhuQjtJQUtRLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZSxFQUFBOztBQUl2QjtFQUNJLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMseUJBQXlCLEVBQUE7O0FBRzdCOztFQUVJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7RUFDZiwyQ0FBMkMsRUFBQTs7QUFSL0M7SUFVUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIseUJBQXlCLEVBQUE7O0FBRTdCO0lBaEJKO01Ba0JZLFlBQVksRUFBQSxFQUNmOztBQW5CVDtJQXdCUSxPQUFPO0lBQ1AsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQixFQUFBOztBQUVyQjtJQWxDSjtNQW9DWSxlQUFlLEVBQUEsRUFDbEI7O0FBckNUO0lBd0NRLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9iaWdDdXN0b21lci9iaWctY3VzLWFwcGx5L2JpZ0N1c3RvbWVyQXBwcm92ZS9iaWdDdXN0b21lckFwcHJvdmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4ICFpbXBvcnRhbnQ7O1xyXG59XHJcblxyXG4udWktZy02IHtcclxuICAgIC51aS1nLTQsXHJcbiAgICAudWktZy02IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAuYnRuLFxyXG4vLyAudGFibGUge1xyXG4vLyAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcbi5wYXJ0U3R5bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmN6ZHExIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogMTlweDtcclxufVxyXG5cclxuLmN6ZHEyIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzE5YjBjODtcclxufVxyXG5cclxuc3Bhbi5zcGFuLXAyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IC00NXB4O1xyXG59XHJcblxyXG4ud2lkdGgtcDIge1xyXG4gICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8g5YiH5o2iXHJcbi5mdW5jdGlvbnMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIC5jaGFuZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xyXG4gICAgICAgIGNvbG9yOiAjOTI5MjkyO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3ZjcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAzZjVjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4sXHJcbi50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51bml0X3RpdCB7XHJcbiAgICBjb2xvcjogI2YwMDtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RhZGFkYSAhaW1wb3J0YW50O1xyXG4gICAgLmxpbmUge1xyXG4gICAgICAgIHdpZHRoOiAzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRleHQge1xyXG4gICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgICAgLW1zLWZsZXg6IDE7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlZF90aXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAyMDBweDtcclxuICAgICAgICBjb2xvcjogI2YwMDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZXF1aXJlTGFiZWwge1xyXG4gICAgY29sb3I6ICNmMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomerApprove/bigCustomerApprove.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomerApprove/bigCustomerApprove.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: BigCustomerApproveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigCustomerApproveComponent", function() { return BigCustomerApproveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_big_cus_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http/big-cus.http.service */ "./src/app/pages/tzb/custom/bigCustomer/http/big-cus.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var _bean_bigCusApprove_bean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bean/bigCusApprove.bean */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomerApprove/bean/bigCusApprove.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BigCustomerApproveComponent = /** @class */ (function () {
    function BigCustomerApproveComponent(httpService, routeInfo, commfunc, decimalPipe, fb, confirmationService) {
        this.httpService = httpService;
        this.routeInfo = routeInfo;
        this.commfunc = commfunc;
        this.decimalPipe = decimalPipe;
        this.fb = fb;
        this.confirmationService = confirmationService;
        this.msgs = [];
        this.detailList = [];
        this.arrayList = [];
        this.isShow = false;
        this.isHistory = false;
        this.show = 2;
        this.detailItems = {
            custNo: '',
            custName: '',
            snrjckSum: '',
            snrjdkjckSum: '',
            feeunitPrice: '',
            depositBase: '',
            loanBase: '',
        };
        this.data_cuslist = []; //客户名单信息
        this.pageSizeCusList = 100;
        this.pageNumCusList = 1;
        this.dataTable = []; //大客户分成信息
        this.pageSizeDivide = 100;
        this.pageNumDivide = 1;
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.stop_flag = true; //调整进来不可以操作
        this.firstCodeFlag = false; //是否是首节点可以修改
        this.bigCusApproveBean = new _bean_bigCusApprove_bean__WEBPACK_IMPORTED_MODULE_8__["BigCusApproveBean"]();
        this.depositSumTypeOptions = []; //存款累计方式
        //当前名单信息新增删除，数据变化之后重新刷新数据时用的标志
        this.custListFlag = 0;
        this.addFlagBtn = false; //名单信息添加开关
        this.addMoeyFlag = false; //费用信息添加开关
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.user2 = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (this.user.orgId) {
            this.orgId = this.user.orgId;
        }
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
        if (this.user2.userName) {
            this.userName = this.user2.userName;
        }
        if (this.user2.orgName) {
            this.orgName = this.user2.orgName;
        }
    }
    BigCustomerApproveComponent.prototype.ngOnInit = function () {
        this.codeValues();
        this.depositSumTypeOptions = this.code['depositSumTypeBigCus']; //存款累计方式
        this.userform = this.fb.group({
            'custNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            'custName': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
        });
        this.moneyform = this.fb.group({
            'feeunitPrice': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            'custId': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            'custIdName': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            'divideRate': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
        this.detailList = this.routeInfo.snapshot.params;
        console.log(this.detailList);
        if (this.detailList.taskName == '机构专岗' || this.detailList.taskName == '总行机构专岗') {
            this.isShow = true;
        }
        else {
            this.isShow = false;
        }
        this.dataMap = JSON.parse(this.routeInfo.snapshot.params['dataMap']);
        this.flag = this.routeInfo.snapshot.params['markFlag'];
        this.depositBase = this.decimalPipe.transform(this.dataMap.depositBase, '1.2-2');
        this.loanBase = this.decimalPipe.transform(this.dataMap.loanBase, '1.2-2');
        this.bigCustNo = this.dataMap.bigCustNo;
        this.bigId = this.dataMap.bigId;
        //是否从历史进入
        if (this.flag == '1') {
            this.isHistory = false;
        }
        else {
            this.isHistory = true;
        }
        //当前为首节点，并且不是从历史进入
        if (this.routeInfo.snapshot.params['taskRate'] == '1' && this.flag != '2') {
            this.firstCodeFlag = true;
        }
        //大客户费用撤销审批
        if (this.detailList.littleClassNo == "116000") {
            this.firstCodeFlag = false;
            this.isHistory = true;
            this.isShow = false;
        }
        this.queryBase(); //大客户基本信息
        this.queryCusList(); //大客户名单信息
        this.divideInto(); //大客户分成信息
        this.approveUpdate(); //判断是调整还是申请
    };
    BigCustomerApproveComponent.prototype.ngOnChanges = function () {
    };
    BigCustomerApproveComponent.prototype.apply = function (num) {
        this.show = num;
    };
    //码值
    BigCustomerApproveComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    // 修改业务数据
    BigCustomerApproveComponent.prototype.docheck = function (i, param) {
        if (i == '1') {
            if (!this.depositBase) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '存款基期不能为空' });
                return;
            }
        }
        if (i == '2') {
            if (!this.loanBase) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '贷款基期不能为空' });
                return;
            }
        }
        this.dataMap.depositBase = this.commfunc.transform(this.depositBase).toString();
        this.dataMap.loanBase = this.commfunc.transform(this.loanBase).toString();
    };
    //基本信息查询
    BigCustomerApproveComponent.prototype.queryBase = function () {
        var _this = this;
        var param = {
            bigCustNo: this.bigCustNo,
            isHis: '1',
            bigId: this.bigId
        };
        this.httpService.queryBigCustBaseInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.bigCusApproveBean.custNo = data.custNo;
                _this.bigCusApproveBean.custName = data.custName;
                _this.bigCusApproveBean.snrjckSum = data.snrjckSum;
                _this.bigCusApproveBean.snrjdkjckSum = data.snrjdkjckSum;
                _this.bigCusApproveBean.feeunitPrice = data.feeunitPrice;
                _this.bigCusApproveBean.bigCustNo = data.bigCustNo;
                _this.feeunitPrice = data.feeunitPrice;
                _this.saveFeeMon = JSON.parse(JSON.stringify(data.feeunitPrice));
                //大客户费用撤销审批
                if (_this.detailList.littleClassNo == "116000") {
                    _this.depositBase = _this.decimalPipe.transform(data.depositBase, "1.2-2");
                    _this.loanBase = _this.decimalPipe.transform(data.loanBase, "1.2-2");
                }
                //当前名单信息新增删除，数据变化之后重新刷新数据时,数据塞入dataMap传给工作流
                if (_this.custListFlag == 1) {
                    _this.depositBase = _this.decimalPipe.transform(data.depositBase, "1.2-2");
                    _this.loanBase = _this.decimalPipe.transform(data.loanBase, "1.2-2");
                    _this.dataMap.depositBase = _this.commfunc.transform(data.depositBase).toString();
                    _this.dataMap.loanBase = _this.commfunc.transform(data.loanBase).toString();
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    //查询大客户客户名单信息
    BigCustomerApproveComponent.prototype.queryCusList = function () {
        var _this = this;
        var param = {
            bigCustNo: this.bigCustNo,
            pageNum: this.pageNumCusList,
            pageSize: this.pageSizeCusList,
            userName: this.userName,
            operationType: '0',
        };
        this.httpService.queryBigCustInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.data_cuslist = data.bigCustInfoNewList;
                _this.totalCusList = data.totalNum;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    //客户名单信息翻页
    BigCustomerApproveComponent.prototype.paginateCusList = function (event) {
        this.pageSizeCusList = event.rows * 1;
        this.pageNumCusList = event.page + 1;
        this.queryCusList();
    };
    //客户名单信息删除
    BigCustomerApproveComponent.prototype.toDelete = function (data) {
        var _this = this;
        var temp = {
            bigCustId: data.bigId,
        };
        this.httpService.deleteBigCustInfo(temp).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '删除成功!' }];
                _this.queryCusList();
                //当前名单信息新增删除，数据变化之后重新刷新数据
                _this.custListFlag = 1;
                _this.queryBase();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    //大客户名单全部删除
    BigCustomerApproveComponent.prototype.deleteAll = function () {
        var _this = this;
        if (this.data_cuslist.length == 0) {
            this.msgs = [];
            this.msgs = [{ severity: 'success', summary: '提示', detail: '当前表格没有数据,无法进行删除!' }];
            return;
        }
        this.confirmationService.confirm({
            message: '是否确认全部删除?',
            accept: function () {
                var temp = {
                    bigCustNo: _this.data_cuslist[0].bigCustNo,
                };
                _this.httpService.deleteBatchBigCustInfo(temp).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: '删除成功!' }];
                        _this.queryCusList();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
                });
            }
        });
    };
    //大客户分成信息
    BigCustomerApproveComponent.prototype.divideInto = function () {
        var _this = this;
        var param = {
            bigCustNo: this.bigCustNo,
            pageNum: this.pageNumDivide,
            pageSize: this.pageSizeDivide,
            isHis: '1'
        };
        this.httpService.queryBigCustManager(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.bigCustManNewList && data.bigCustManNewList.length > 0) {
                    for (var _i = 0, _a = data.bigCustManNewList; _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.divideRate = JSON.parse(JSON.stringify(item.divideRate * 100)).toFixed(2);
                    }
                    _this.dataTable = data.bigCustManNewList;
                    _this.totalDivide = data.totalNum;
                    _this.bigCusValue = _this.dataTable;
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    //大客户分成信息翻页
    BigCustomerApproveComponent.prototype.paginateDivide = function (event) {
        this.pageSizeDivide = event.rows * 1;
        this.pageNumDivide = event.page + 1;
        this.divideInto();
    };
    //新增客户信息
    BigCustomerApproveComponent.prototype.add = function () {
        var _this = this;
        this.addFlagBtn = true;
        if (!this.custName || this.custName == '') {
            this.showName();
        }
        if (this.custNo != this.on_cust) {
            this.showName();
        }
        if (this.routeInfo.snapshot.params['this_Flag'] == '1') {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '当前大客户信息不可以新增!' }];
            return;
        }
        setTimeout(function () {
            //校验的
            for (var i in _this.userform.controls) {
                _this.userform.controls[i].markAsDirty();
            }
            //处理是否提交
            for (var i in _this.userform.controls) {
                if (!_this.userform.controls[i].valid) {
                    return;
                }
            }
            var params = {
                userName: _this.userName,
                custNo: _this.custNo,
                custName: _this.custName,
                operationType: '0',
                bigCustNo: _this.bigCustNo,
            };
            _this.httpService.addBigCustInfo(params).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.addFlagBtn = false;
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: '新增成功!' }];
                    _this.bigCustNo = data.bigCustNo;
                    if (data.bigId && data.bigId != '' && data.bigId != null) {
                        _this.bigId = data.bigId;
                    }
                    _this.queryCusList();
                    _this.reset(1);
                    //当前名单信息新增删除，数据变化之后重新刷新数据
                    _this.custListFlag = 1;
                    _this.queryBase();
                }
                else {
                    _this.addFlagBtn = false;
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (err) {
                _this.addFlagBtn = false;
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            });
        }, 500);
    };
    //校验
    BigCustomerApproveComponent.prototype.checkPerson = function () {
        var _this = this;
        if (this.custNo && this.custNo != '') {
            this.httpService.findUser({ custNo: this.custNo }).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    if (data.infoList != null) {
                        if (data.infoList.length > 0) {
                            _this.manageId = data.infoList[0].manageId;
                            if (_this.manageId == _this.userId) {
                                _this.showName();
                            }
                            else {
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: '当前登陆人不是该客户的主联系人,请重新输入!' });
                            }
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '提示', detail: '没有可选的主联系人!' });
                        }
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: '没有可选的主联系人!' });
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
            });
        }
    };
    //回显客户名称
    BigCustomerApproveComponent.prototype.showName = function () {
        var _this = this;
        if (this.custNo && this.custNo != '') {
            var param = {
                custNo: this.custNo
            };
            this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.on_cust = JSON.parse(JSON.stringify(_this.custNo));
                    if (data.dataSourceId == 'BR00B' && _this.user.targetId == '101011') {
                        _this.custName = data.custName;
                    }
                    else {
                        if (data.dataSourceId == 'BR00A' && _this.user.targetId == '101010') {
                            _this.custName = data.custName;
                        }
                        else {
                            _this.reset(1);
                            _this.msgs = [];
                            _this.msgs = [{ severity: 'error', summary: '提示', detail: '当前非台行客户!' }];
                            return;
                        }
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            });
        }
    };
    //校验客户号只能输入数字
    BigCustomerApproveComponent.prototype.onKeyupNumber = function (event, num) {
        if (event.target.value != '') {
            if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["checkNumber"])(null, event.target.value)) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '当前输入框内只能输入数字!' }];
                return;
            }
            if (num == 1) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["custNoTen"])(null, event.target.value)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '客户号错误!' }];
                    return;
                }
            }
            else if (num == 2) {
                if (event.target.value == '') {
                    this.custIdName = '';
                }
            }
        }
    };
    //保留两位小数
    BigCustomerApproveComponent.prototype.checkNumtwo = function (event) {
        if (event.target.value != '') {
            if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_7__["decimalNumTwo"])(null, event.target.value)) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '只能输入数字,输入格式请保留两位小数!' }];
                event.target.value = '';
                return;
            }
        }
    };
    //校验工号
    BigCustomerApproveComponent.prototype.checkNum = function () {
        var _this = this;
        if (this.custId && this.custId != '') {
            this.httpService.queryManagerInfo({ assiterId: this.custId }).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    if (data.userId && data.userId != '') {
                        _this.queryUserId(data.userId);
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            });
        }
    };
    BigCustomerApproveComponent.prototype.queryUserId = function (item) {
        var _this = this;
        this.httpService.queryPersonRelListByPartyId({ partyIdList: [item] }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.on_userID = JSON.parse(JSON.stringify(_this.custId));
                if (data.relList.length == 0 || data.relList == null) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "工号错误,请重新输入!" });
                    _this.custId = '';
                    _this.custIdName = '';
                    return;
                }
                if (data.relList[0].statusId != "0") {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "当前客户经理状态有误,请重新输入!" });
                    _this.custId = '';
                    _this.custIdName = '';
                    return;
                }
                _this.custIdName = data.relList[0].lastName;
                _this.partyId = data.relList[0].partyId;
                _this.lastName = data.relList[0].lastName;
                _this.relDepOrgList = data.relList[0].relDepOrgList;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    //重置
    BigCustomerApproveComponent.prototype.reset = function (data) {
        if (data == 1) {
            this.custNo = '';
            this.custName = '';
        }
        else if (data == 2) {
            this.custId = '';
            this.custIdName = '';
            this.divideRate = '';
        }
    };
    //新增大客户费用信息
    BigCustomerApproveComponent.prototype.addMoney = function () {
        var _this = this;
        this.addMoeyFlag = true;
        if (this.custId != this.on_userID) {
            this.checkNum();
        }
        //校验的
        for (var i in this.moneyform.controls) {
            this.moneyform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.moneyform.controls) {
            if (!this.moneyform.controls[i].valid) {
                return;
            }
        }
        if (Number(this.divideRate) == 0) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '分成比例不得为0!' }];
            return;
        }
        if (this.data_cuslist.length == 0) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '名单信息不能为空!' }];
            return;
        }
        if (this.dataTable.length == 5) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '最多录入5个客户经理!' }];
            return;
        }
        if (Number(this.divideRate) > 100) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '分成比例不能大于100%!' }];
            return;
        }
        if (this.dataTable.length >= 1) {
            var sum = Number(this.divideRate);
            for (var _i = 0, _a = this.dataTable; _i < _a.length; _i++) {
                var item = _a[_i];
                sum += Number(item.divideRate);
            }
            if (sum > 100) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '分成比例合计之和必须为100%!' }];
                return;
            }
        }
        if (this.dataTable.length == 4) {
            var sum1 = Number(this.divideRate);
            for (var _b = 0, _c = this.dataTable; _b < _c.length; _b++) {
                var item = _c[_b];
                sum1 += Number(item.divideRate);
            }
            if (sum1 > 100) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '分成比例合计之和必须为100%!' }];
                return;
            }
        }
        var itemParam;
        if (this.divideRate != '' && this.divideRate && this.divideRate != undefined) {
            itemParam = JSON.parse(JSON.stringify(this.divideRate));
        }
        var params = {
            bigCustNo: this.bigCustNo,
            relDepOrgList: this.relDepOrgList,
            orgId: this.orgId,
            orgName: this.orgName,
            feeunitPrice: this.feeunitPrice,
            divideRate: (itemParam / 100).toString(),
            assitUserId: this.custId,
            assitUserName: this.custIdName
        };
        this.httpService.addBigCustManager(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.addMoeyFlag = false;
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '新增成功!' }];
                _this.divideInto();
                _this.reset(2);
                _this.saveFeeMon = JSON.parse(JSON.stringify(_this.feeunitPrice));
            }
            else {
                _this.addMoeyFlag = false;
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.addMoeyFlag = false;
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    //判断是调整还是申请
    BigCustomerApproveComponent.prototype.approveUpdate = function () {
        var _this = this;
        var param = {
            bigCustNo: this.bigCustNo,
            pageSize: 100,
            pageNum: 1
        };
        this.httpService.queryBigCustHistory(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.bigCustHistRelList && data.bigCustHistRelList.length > 0) {
                    if (data.bigCustHistRelList[0].operationType == '0') {
                        _this.stop_flag = true;
                    }
                    else {
                        _this.stop_flag = false;
                    }
                    if (_this.detailList.littleClassNo == "116000") {
                        _this.stop_flag = false;
                    }
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    BigCustomerApproveComponent.prototype.toUpdate = function (data) {
        data.showUpdate = true;
    };
    //修改保存
    BigCustomerApproveComponent.prototype.toUpdateSave = function (item) {
        var _this = this;
        var itemParam = JSON.parse(JSON.stringify(item));
        var param = {
            bigCustId: item.bigId,
            divideRate: (itemParam.divideRate / 100).toString(),
        };
        this.httpService.updateBigCustManager(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                item.showUpdate = false;
                _this.divideInto();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
        });
    };
    //删除
    BigCustomerApproveComponent.prototype.toDeleteMoney = function (data) {
        var _this = this;
        this.confirmationService.confirm({
            message: '是否确人删除?',
            accept: function () {
                var params = {
                    isAll: '1',
                    bigCustNo: data.bigCustNo,
                    bigCustId: data.bigId
                };
                _this.httpService.deleteBigCustManager(params).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: '删除成功!' }];
                        _this.divideInto();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
                });
            }
        });
    };
    //再次修改费用单价
    BigCustomerApproveComponent.prototype.changeAgain = function () {
        var _this = this;
        if (this.feeunitPrice != '' && this.feeunitPrice && (this.feeunitPrice != this.saveFeeMon)) {
            console.log('再次修改费用单价');
            var params = {
                bigCustNo: this.bigCustNo,
                relDepOrgList: [],
                orgId: '',
                orgName: '',
                feeunitPrice: this.feeunitPrice,
                divideRate: '',
                assitUserId: '',
                assitUserName: '',
                bigId: this.bigId,
            };
            this.httpService.addBigCustManager(params).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.dataMap['feeunitPrice'] = _this.commfunc.transform(_this.feeunitPrice).toString();
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
            });
        }
    };
    BigCustomerApproveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bigCustomerApprove',
            template: __webpack_require__(/*! ./bigCustomerApprove.component.html */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomerApprove/bigCustomerApprove.component.html"),
            styles: [__webpack_require__(/*! ./bigCustomerApprove.component.scss */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomerApprove/bigCustomerApprove.component.scss")],
            providers: [_http_big_cus_http_service__WEBPACK_IMPORTED_MODULE_1__["BigCusHttpService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_http_big_cus_http_service__WEBPACK_IMPORTED_MODULE_1__["BigCusHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], BigCustomerApproveComponent);
    return BigCustomerApproveComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-donate/bigcustDonateApprove/bigcustDonateApprove.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-donate/bigcustDonateApprove/bigcustDonateApprove.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 module\" style=\"padding-top:0;padding-bottom:0;\">\r\n        <header-title [Info]=\"'大客户利率浮动审批'\"></header-title>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>事项类型:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{resultList.bigClassName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>事项名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{resultList.littleClassName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>发起人:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{resultList.workCreateName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>创建日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{resultList.createDate}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 module\" style=\"padding-top:0;\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>客户号:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"dataList.custcode\" disabled/>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>客户名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" disabled pInputText [(ngModel)]=\"dataList.custname\" />\r\n            </div>\r\n        </div>\r\n        <form [formGroup]=\"userform \">\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span>存款账号:</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"dataList.accountno\" formControlName=\"accountno\" *ngIf=\"firstCodeFlag\" (blur)=\"showDate(dataList.accountno)\"\r\n                    />\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"dataList.accountno\" disabled formControlName=\"accountno\" *ngIf=\"!firstCodeFlag\"\r\n                    />\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['accountno'].valid&&userform.controls['accountno'].dirty\">\r\n                        <p [hidden]=\"!userform.hasError('pattern','accountno')\"> 请输入正确的存款账号！</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span>开户日期:</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                        [locale]=\"ch\" [(ngModel)]=\"dataList.openacctdate\" [disabled]=\"true\" formControlName=\"openacctdate\" [showOtherMonths]=\"false\"></p-calendar>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span appValidation>存款期限:</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-dropdown [options]=\"Deptimelimit\" [(ngModel)]=\"dataList.deptimelimit\" [disabled]=\"!firstCodeFlag\" formControlName=\"deptimelimit\"></p-dropdown>\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['deptimelimit'].valid&&userform.controls['deptimelimit'].dirty\">\r\n                        <p [hidden]=\"!userform.hasError('required','deptimelimit')\"> 存款期限不能为空！</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span>存款金额(万元):</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"dataList.depcash\" formControlName=\"depcash\" (keyup)=\"onkey($event)\" (blur)=\"textSum(1)\"\r\n                        *ngIf=\"firstCodeFlag\" />\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"dataList.depcash\" disabled formControlName=\"depcash\" *ngIf=\"!firstCodeFlag\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span appValidation>费用单价:</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"dataList.feeprice\" formControlName=\"feeprice\" (keyup)=\"onkey($event)\" (blur)=\"textSum(2)\"\r\n                        *ngIf=\"firstCodeFlag\" />\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"dataList.feeprice\" disabled formControlName=\"feeprice\" *ngIf=\"!firstCodeFlag\"\r\n                    />\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['feeprice'].valid&&userform.controls['feeprice'].dirty\">\r\n                        <p [hidden]=\"!userform.hasError('required','feeprice')\"> 费用单价不能为空！</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span appValidation>中标利率(%):</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"dataList.getrate\" formControlName=\"getrate\" (blur)=\"percenterBtn($event,'1')\"\r\n                        *ngIf=\"firstCodeFlag\" />\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"dataList.getrate\" disabled formControlName=\"getrate\" *ngIf=\"!firstCodeFlag\" />\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['getrate'].valid&&userform.controls['getrate'].dirty\">\r\n                        <p [hidden]=\"!userform.hasError('required','getrate')\"> 中标利率不能为空！</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span appValidation>加价利率(%):</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"dataList.addordonaterate\" formControlName=\"addordonaterate\" (blur)=\"percenterBtn($event,'2')\"\r\n                        *ngIf=\"firstCodeFlag\" />\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"dataList.addordonaterate\" disabled formControlName=\"addordonaterate\" *ngIf=\"!firstCodeFlag\"\r\n                    />\r\n                    <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['addordonaterate'].valid&&userform.controls['addordonaterate'].dirty\">\r\n                        <p [hidden]=\"!userform.hasError('required','addordonaterate')\"> 加价利率不能为空！</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span appValidation>附件:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-fileUpload chooseLabel=\"浏览\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\" myUploader($event)\"\r\n                    multiple=\"multiple\" maxFileSize=\"52428800\" invalidFileSizeMessageDetail=\"超过设定的50MB文件大小!\" invalidFileSizeMessageSummary=\"{0}\"\r\n                    [disabled]=\"!firstCodeFlag\"></p-fileUpload>\r\n                <div *ngFor=\"let item of fileList\">\r\n                    <div class=\"ui-g-12 table\" *ngIf=\"item.fileName!=null&&item.fileName!=''&&fileList.length>0\">\r\n                        <p-dataTable [value]=\"fileList\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n                            <p-column field=\"fileName\" header=\"附件名称\">\r\n                                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n                                    <span>{{col.fileName}}</span>\r\n                                </ng-template>\r\n                            </p-column>\r\n                            <p-column header=\"操作\">\r\n                                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                                    <span (click)=\"down(col)\" class=\"tabelDownloadIco\">下载</span>\r\n                                </ng-template>\r\n                            </p-column>\r\n                        </p-dataTable>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 module\">\r\n        <examine-page [inValueDonate]=\"dataList\"></examine-page>\r\n    </div>\r\n</div>\r\n<!-- 提示 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-donate/bigcustDonateApprove/bigcustDonateApprove.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-donate/bigcustDonateApprove/bigcustDonateApprove.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tit {\n  text-align: right;\n  line-height: 24px; }\n\n.btn,\n.table {\n  text-align: center; }\n\n.ui-g-6 {\n  padding-bottom: 0; }\n\n.ui-g-6 .ui-g-4 {\n    padding-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9iaWdDdXN0b21lci9iaWctY3VzLWRvbmF0ZS9iaWdjdXN0RG9uYXRlQXBwcm92ZS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGJpZ0N1c3RvbWVyXFxiaWctY3VzLWRvbmF0ZVxcYmlnY3VzdERvbmF0ZUFwcHJvdmVcXGJpZ2N1c3REb25hdGVBcHByb3ZlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUdyQjs7RUFFSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFEckI7SUFHUSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vYmlnQ3VzdG9tZXIvYmlnLWN1cy1kb25hdGUvYmlnY3VzdERvbmF0ZUFwcHJvdmUvYmlnY3VzdERvbmF0ZUFwcHJvdmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5idG4sXHJcbi50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnVpLWctNntcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgLnVpLWctNHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-donate/bigcustDonateApprove/bigcustDonateApprove.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-donate/bigcustDonateApprove/bigcustDonateApprove.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: BigCustomerDonateApproveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigCustomerDonateApproveComponent", function() { return BigCustomerDonateApproveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_big_cus_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/big-cus.http.service */ "./src/app/pages/tzb/custom/bigCustomer/http/big-cus.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
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
 * 大客户利息/捐赠申请审批界面-洪满义
 */
var BigCustomerDonateApproveComponent = /** @class */ (function () {
    function BigCustomerDonateApproveComponent(activatedRoute, bigCusHttpService, commfunc, decimalPipe, fb) {
        this.activatedRoute = activatedRoute;
        this.bigCusHttpService = bigCusHttpService;
        this.commfunc = commfunc;
        this.decimalPipe = decimalPipe;
        this.fb = fb;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        this.msgs = [];
        this.resultList = {};
        this.PayType = []; //支付方式
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //表格中无数据时显示的内容
        this.doDeal = [];
        this.dataApprove = [];
        this.dataList = {};
        this.Deptimelimit = [];
        this.UPLOAD = _uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_CUS_UPLOAD"]; //导入
        this.DOWNLOAD = _uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_CUS_DOWNLOAD"]; //下载
        this.fileList = [];
        this.firstCodeFlag = false; //是否是首节点可以修改
        this.openacctdate = null;
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.Deptimelimit = this.code['Deptimelimit']; //存款期限
        this.userform = this.fb.group({
            "accountno": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern(/^[1-9]\d*$/)]),
            "openacctdate": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            "deptimelimit": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            "depcash": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](''),
            "feeprice": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            "getrate": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            "addordonaterate": new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
        });
    }
    BigCustomerDonateApproveComponent.prototype.ngOnInit = function () {
        this.seqno = this.activatedRoute.snapshot.params['seqno'];
        this.resultList = this.activatedRoute.snapshot.params;
        this.dataList = JSON.parse(this.resultList.dataMap);
        this.dataList.depcash = this.decimalPipe.transform(this.dataList.depcash, '1.2-2'); //存款金额(万元)
        this.dataList.feeprice = this.decimalPipe.transform(this.dataList.feeprice, '1.2-2'); //费用单价
        this.dataList.getrate = this.decimalPipe.transform(this.dataList.getrate, '1.4-4'); //中标利率(%);
        this.accountno = this.dataList.accountno; //存款账号
        this.dataList.addordonaterate = this.decimalPipe.transform(this.dataList.addordonaterate, '1.4-4'); //加价利率/捐赠利率(%)
        if (this.dataList.openacctdate) {
            this.dataList.openacctdate = new Date(this.dataList.openacctdate); //日期
            this.openacctDate = this.dataList.openacctdate;
        }
        if (this.dataList.fileList) {
            this.fileList = this.dataList.fileList;
            this.dataList.fileList = this.fileList;
        }
        this.flag = this.activatedRoute.snapshot.params['markFlag']; //判断我的历史中的追回
        if (this.activatedRoute.snapshot.params['taskRate'] == '1' && this.flag != '2') { //首节点是可以进行修改
            this.firstCodeFlag = true;
        }
    };
    //码值
    BigCustomerDonateApproveComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    BigCustomerDonateApproveComponent.prototype.down = function (temp) {
        var name = temp.fileName;
        var path = temp.fileUrl;
        open(_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(name) + "&fileUrl=" + path);
    };
    //上传文件
    BigCustomerDonateApproveComponent.prototype.myUploader = function (event) {
        if (event.xhr.response) {
            if (JSON.parse(event.xhr.response).success == false) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: JSON.parse(event.xhr.response).errorMsg });
                return;
            }
            else {
                this.dataList.fileList = JSON.parse(event.xhr.response);
                this.fileList = this.dataList.fileList;
                this.msgs = [];
                this.msgs.push({ severity: 'success', summary: '提示', detail: '上传成功！' });
            }
        }
    };
    BigCustomerDonateApproveComponent.prototype.onkey = function (event) {
        if (Object(_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_8__["decimalNumTwo"])(null, event.target.value)) {
            this.msgs = [{ severity: 'error', summary: '提示', detail: '输入正确的金额!' }];
            event.target.value = '';
            return;
        }
    };
    BigCustomerDonateApproveComponent.prototype.textSum = function (num) {
        if (num == '1') {
            this.dataList.depcash = this.decimalPipe.transform(this.dataList.depcash, '1.2-2'); //存款金额
        }
        else if (num == '2') {
            this.dataList.feeprice = this.decimalPipe.transform(this.dataList.feeprice, '1.2-2'); //费用单价
        }
    };
    //校验百分比
    BigCustomerDonateApproveComponent.prototype.percenterBtn = function (event, num) {
        if (Object(_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_8__["Equhundered2"])(null, event.target.value)) {
            this.msgs = [{ severity: 'error', summary: '提示', detail: '输入正确的百分比!' }];
            event.target.value = '';
            return;
        }
        if (num == '1') {
            this.dataList.getrate = this.decimalPipe.transform(this.dataList.getrate, '1.4-4'); //中标利率
        }
        else if (num == '2') {
            this.dataList.addordonaterate = this.decimalPipe.transform(this.dataList.addordonaterate, '1.4-4'); //加价利率
        }
    };
    //输入正确的存款账号时，开户日期自动回显
    BigCustomerDonateApproveComponent.prototype.showDate = function (item) {
        var _this = this;
        if (item && item != '') {
            if (item == this.accountno) {
                this.dataList.openacctdate = this.openacctDate;
            }
            else {
                var param = {
                    accountno: item
                };
                this.bigCusHttpService.getAccountInfo(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.dataList.openacctdate = data.openacctdate;
                    }
                    else {
                        _this.dataList.accountno = '';
                        _this.dataList.openacctdate = '';
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败!' }];
                });
            }
        }
        else {
            this.dataList.openacctdate = '';
        }
    };
    BigCustomerDonateApproveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bigcustDonateApprove',
            template: __webpack_require__(/*! ./bigcustDonateApprove.component.html */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-donate/bigcustDonateApprove/bigcustDonateApprove.component.html"),
            styles: [__webpack_require__(/*! ./bigcustDonateApprove.component.scss */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-donate/bigcustDonateApprove/bigcustDonateApprove.component.scss")],
            providers: [_http_big_cus_http_service__WEBPACK_IMPORTED_MODULE_2__["BigCusHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _http_big_cus_http_service__WEBPACK_IMPORTED_MODULE_2__["BigCusHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
    ], BigCustomerDonateApproveComponent);
    return BigCustomerDonateApproveComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/bigCustomer.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/bigCustomer.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 functions\">\r\n    <span>\r\n        <a  *ngIf=\"permissionCheck('SID00027_01_01')\" [routerLink]=\"[ '/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApply']\" class=\"change\" [ngClass]=\"{'active':show==1}\"\r\n            (click)=\"apply(1)\">\r\n            大客户费用申请\r\n        </a>\r\n    </span>\r\n    <span>\r\n        <a *ngIf=\"permissionCheck('SID00027_01_02')\" [routerLink]=\"[ '/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomHistoryQuery']\" class=\"change\" [ngClass]=\"{'active':show==2}\"\r\n            (click)=\"apply(2)\">\r\n            大客户费用历史\r\n        </a>\r\n    </span>\r\n    <span>\r\n        <a *ngIf=\"permissionCheck('SID00027_01_03')\" [routerLink]=\"[ '/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApplyQuery']\" class=\"change\" [ngClass]=\"{'active':show==5}\"\r\n            (click)=\"apply(5)\">\r\n            费用查询维护\r\n        </a>\r\n    </span>\r\n    <span>\r\n        <a *ngIf=\"permissionCheck('SID00027_01_04')\" [routerLink]=\"[ '/pages/tzb/custom/bigCustomer/big-cus-donate/bigCustomDonateApply']\" class=\"change\" [ngClass]=\"{'active':show==3}\"\r\n            (click)=\"apply(3)\">\r\n            利率浮动申请\r\n        </a>\r\n    </span>\r\n    <span>\r\n        <a *ngIf=\"permissionCheck('SID00027_01_05')\" [routerLink]=\"[ '/pages/tzb/custom/bigCustomer/big-cus-donate/bigCustomDonateHistoryQuery']\" class=\"change\" [ngClass]=\"{'active':show==4}\"\r\n            (click)=\"apply(4)\">\r\n            利率浮动申请历史\r\n        </a>\r\n    </span>\r\n    <span>\r\n        <a *ngIf=\"permissionCheck('SID00027_01_06')\" [routerLink]=\"[ '/pages/tzb/custom/bigCustomer/big-cus-donate/bigCustomDonateQuery']\" class=\"change\" [ngClass]=\"{'active':show==6}\"\r\n            (click)=\"apply(6)\">\r\n            利率浮动查询维护\r\n        </a>\r\n    </span>\r\n</div>\r\n<div class=\"ui-g-12 padding-one\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/bigCustomer.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/bigCustomer.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host/deep/ .ui-menubar {\n  border: none;\n  background-color: red !important; }\n\n.flt {\n  float: left;\n  background-color: red; }\n\n.basic {\n  margin-top: 5px;\n  background-color: white; }\n\n.functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0; }\n\n.functions .change {\n    display: inline-block;\n    font-size: 15px;\n    height: 40px;\n    line-height: 40px;\n    border-radius: 3px 3px 0 0;\n    color: #929292;\n    padding: 0px 30px;\n    font-weight: bold; }\n\n.active {\n  border: none !important;\n  background-color: #fafafa  !important;\n  color: #003f5c !important; }\n\n.padding-one {\n  padding: 0; }\n\n.bgcolor {\n  background: #fafafa; }\n\n@media screen and (max-width: 1280px) {\n  .functions {\n    border-bottom: 1px solid #dddddd; }\n    .functions .change {\n      font-size: 14px;\n      padding: 0px 15px; }\n  .active {\n    background-color: #e5e6e9 !important; }\n  .bgcolor {\n    background: #e5e6e9; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9iaWdDdXN0b21lci9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGJpZ0N1c3RvbWVyXFxiaWdDdXN0b21lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixnQ0FDSixFQUFBOztBQUVBO0VBQ0ksV0FBVztFQUNYLHFCQUNKLEVBQUE7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBSG5CO0lBS1EscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLHVCQUF1QjtFQUN2QixxQ0FBcUM7RUFDckMseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksVUFBUyxFQUFBOztBQUdiO0VBQ0ksbUJBQW9CLEVBQUE7O0FBR3hCO0VBQ0k7SUFDSSxnQ0FBZ0MsRUFBQTtJQURwQztNQUdRLGVBQWU7TUFDZixpQkFBaUIsRUFBQTtFQUd6QjtJQUNJLG9DQUFvQyxFQUFBO0VBRXhDO0lBQ0ksbUJBQW1CLEVBQUEsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2JpZ0N1c3RvbWVyL2JpZ0N1c3RvbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QvZGVlcC8gLnVpLW1lbnViYXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmZsdCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZFxyXG59XHJcblxyXG4uYmFzaWMge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8vIOWIh+aNolxyXG4uZnVuY3Rpb25zIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAuY2hhbmdlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICAgICAgICBjb2xvcjogIzkyOTI5MjtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmEgICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwM2Y1YyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFkZGluZy1vbmUge1xyXG4gICAgcGFkZGluZzowO1xyXG59XHJcblxyXG4uYmdjb2xvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhIDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgIC5mdW5jdGlvbnMge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgICAgIC5jaGFuZ2Uge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU2ZTkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5iZ2NvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTVlNmU5O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/bigCustomer.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/bigCustomer.component.ts ***!
  \***********************************************************************/
/*! exports provided: BigCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigCustomerComponent", function() { return BigCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BigCustomerComponent = /** @class */ (function () {
    function BigCustomerComponent(commfunc, router) {
        this.commfunc = commfunc;
        this.router = router;
        this.show = 1;
    }
    BigCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.permissionCheck('SID00027_01_01')) {
            this.show = 1;
        }
        else if (this.permissionCheck('SID00027_01_02')) {
            this.router.navigate(["pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomHistoryQuery"]);
            this.show = 2;
        }
        else if (this.permissionCheck('SID00027_01_03')) {
            this.router.navigate(["pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApplyQuery"]);
            this.show = 5;
        }
        else if (this.permissionCheck('SID00027_01_04')) {
            this.router.navigate(["pages/tzb/custom/bigCustomer/big-cus-donate/bigCustomDonateApply"]);
            this.show = 3;
        }
        else if (this.permissionCheck('SID00027_01_05')) {
            this.router.navigate(["pages/tzb/custom/bigCustomer/big-cus-donate/bigCustomDonateHistoryQuery"]);
            this.show = 4;
        }
        else if (this.permissionCheck('SID00027_01_06')) {
            this.router.navigate(["pages/tzb/custom/bigCustomer/big-cus-donate/bigCustomDonateQuery"]);
            this.show = 6;
        }
        setTimeout(function () {
            _this.judgStatu();
        });
    };
    BigCustomerComponent.prototype.apply = function (num) {
        this.show = num;
    };
    //判断当前路由 改变样式active
    BigCustomerComponent.prototype.judgStatu = function () {
        var _this = this;
        var url = window.location.href;
        var urlSplit = url.split('/');
        urlSplit.map(function (v) {
            if (v === 'bigCustomApply') {
                _this.show = 1;
            }
            else if (v === 'bigCustomHistoryQuery') {
                _this.show = 2;
            }
            else if (v === 'bigCustomApplyQuery') {
                _this.show = 5;
            }
            else if (v === 'bigCustomDonateApply') {
                _this.show = 3;
            }
            else if (v === 'bigCustomDonateHistoryQuery') {
                _this.show = 4;
            }
            else if (v === 'bigCustomDonateQuery') {
                _this.show = 6;
            }
        });
    };
    //绑定权限id
    BigCustomerComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    BigCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bigCustomer',
            template: __webpack_require__(/*! ./bigCustomer.component.html */ "./src/app/pages/tzb/custom/bigCustomer/bigCustomer.component.html"),
            styles: [__webpack_require__(/*! ./bigCustomer.component.scss */ "./src/app/pages/tzb/custom/bigCustomer/bigCustomer.component.scss")],
            providers: [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BigCustomerComponent);
    return BigCustomerComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/bigCustomer.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/bigCustomer.module.ts ***!
  \********************************************************************/
/*! exports provided: BigCustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigCustomerModule", function() { return BigCustomerModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _bigCustomer_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bigCustomer.routing */ "./src/app/pages/tzb/custom/bigCustomer/bigCustomer.routing.ts");
/* harmony import */ var _bigCustomer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bigCustomer.component */ "./src/app/pages/tzb/custom/bigCustomer/bigCustomer.component.ts");
/* harmony import */ var _big_cus_donate_bigcustDonateApprove_bigcustDonateApprove_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./big-cus-donate/bigcustDonateApprove/bigcustDonateApprove.component */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-donate/bigcustDonateApprove/bigcustDonateApprove.component.ts");
/* harmony import */ var _big_cus_apply_bigCustomerApprove_bigCustomerApprove_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./big-cus-apply/bigCustomerApprove/bigCustomerApprove.component */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomerApprove/bigCustomerApprove.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







 //利息捐赠的审批界面

//大客户
var BigCustomerModule = /** @class */ (function () {
    function BigCustomerModule() {
    }
    BigCustomerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"],
                _bigCustomer_routing__WEBPACK_IMPORTED_MODULE_5__["BigCustomerRouting"]
            ],
            declarations: [
                _bigCustomer_component__WEBPACK_IMPORTED_MODULE_6__["BigCustomerComponent"],
                _big_cus_donate_bigcustDonateApprove_bigcustDonateApprove_component__WEBPACK_IMPORTED_MODULE_7__["BigCustomerDonateApproveComponent"],
                _big_cus_apply_bigCustomerApprove_bigCustomerApprove_component__WEBPACK_IMPORTED_MODULE_8__["BigCustomerApproveComponent"]
            ],
            providers: []
        })
    ], BigCustomerModule);
    return BigCustomerModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/bigCustomer.routing.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/bigCustomer.routing.ts ***!
  \*********************************************************************/
/*! exports provided: routes, BigCustomerRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigCustomerRouting", function() { return BigCustomerRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bigCustomer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bigCustomer.component */ "./src/app/pages/tzb/custom/bigCustomer/bigCustomer.component.ts");
/* harmony import */ var _big_cus_donate_bigcustDonateApprove_bigcustDonateApprove_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./big-cus-donate/bigcustDonateApprove/bigcustDonateApprove.component */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-donate/bigcustDonateApprove/bigcustDonateApprove.component.ts");
/* harmony import */ var _big_cus_apply_bigCustomerApprove_bigCustomerApprove_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./big-cus-apply/bigCustomerApprove/bigCustomerApprove.component */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomerApprove/bigCustomerApprove.component.ts");




var routes = [
    {
        path: '',
        component: _bigCustomer_component__WEBPACK_IMPORTED_MODULE_1__["BigCustomerComponent"],
        children: [
            { path: '', redirectTo: 'big-cus-apply', pathMatch: 'full' },
            {
                path: 'big-cus-apply',
                loadChildren: "./big-cus-apply/big-cus-apply.module#BigCusApplyModule"
            },
            {
                path: 'big-cus-donate',
                loadChildren: "./big-cus-donate/big-cus-donate.module#BigCusDonateModule"
            },
        ]
    },
    {
        path: 'bigcustDonateApprove',
        component: _big_cus_donate_bigcustDonateApprove_bigcustDonateApprove_component__WEBPACK_IMPORTED_MODULE_2__["BigCustomerDonateApproveComponent"]
    },
    {
        path: 'bigCustomerApprove',
        component: _big_cus_apply_bigCustomerApprove_bigCustomerApprove_component__WEBPACK_IMPORTED_MODULE_3__["BigCustomerApproveComponent"]
    }
];
var BigCustomerRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=bigCustomer-bigCustomer-module.js.map