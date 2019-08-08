(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["big-cus-apply-big-cus-apply-module"],{

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/big-cus-apply.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/big-cus-apply.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BigCusApplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigCusApplyComponent", function() { return BigCusApplyComponent; });
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

var BigCusApplyComponent = /** @class */ (function () {
    function BigCusApplyComponent() {
    }
    BigCusApplyComponent.prototype.ngOnInit = function () {
    };
    BigCusApplyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'big-cus-apply',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], BigCusApplyComponent);
    return BigCusApplyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/big-cus-apply.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/big-cus-apply.module.ts ***!
  \************************************************************************************/
/*! exports provided: BigCusApplyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigCusApplyModule", function() { return BigCusApplyModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _big_cus_apply_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./big-cus-apply.routing */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/big-cus-apply.routing.ts");
/* harmony import */ var _big_cus_apply_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./big-cus-apply.component */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/big-cus-apply.component.ts");
/* harmony import */ var _bigCustomApply_bigCustomApply_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bigCustomApply/bigCustomApply.component */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApply/bigCustomApply.component.ts");
/* harmony import */ var _bigCustomHistoryQuery_bigCustomHistoryQuery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bigCustomHistoryQuery/bigCustomHistoryQuery.component */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomHistoryQuery/bigCustomHistoryQuery.component.ts");
/* harmony import */ var _bigCustomApplyQuery_bigCustomApplyQuery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bigCustomApplyQuery/bigCustomApplyQuery.component */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApplyQuery/bigCustomApplyQuery.component.ts");
/* harmony import */ var _bigCustomDetail_bigCustomDetail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bigCustomDetail/bigCustomDetail.component */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomDetail/bigCustomDetail.component.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






 //大客户费用资格申请
 //大客户费用历史查询

 //大客户费用详情

var BigCusApplyModule = /** @class */ (function () {
    function BigCusApplyModule() {
    }
    BigCusApplyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_10__["FrameworkModule"],
                _big_cus_apply_routing__WEBPACK_IMPORTED_MODULE_4__["BigCusApplyRouting"]
            ],
            declarations: [
                _big_cus_apply_component__WEBPACK_IMPORTED_MODULE_5__["BigCusApplyComponent"],
                _bigCustomApply_bigCustomApply_component__WEBPACK_IMPORTED_MODULE_6__["BigCustomApplyComponent"],
                _bigCustomHistoryQuery_bigCustomHistoryQuery_component__WEBPACK_IMPORTED_MODULE_7__["BigCustomHistoryQueryComponent"],
                _bigCustomApplyQuery_bigCustomApplyQuery_component__WEBPACK_IMPORTED_MODULE_8__["BigCustomApplyQueryComponent"],
                _bigCustomDetail_bigCustomDetail_component__WEBPACK_IMPORTED_MODULE_9__["BigCustomDetailComponent"],
            ],
            providers: []
        })
    ], BigCusApplyModule);
    return BigCusApplyModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/big-cus-apply.routing.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/big-cus-apply.routing.ts ***!
  \*************************************************************************************/
/*! exports provided: routes, BigCusApplyRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigCusApplyRouting", function() { return BigCusApplyRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bigCustomApply_bigCustomApply_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bigCustomApply/bigCustomApply.component */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApply/bigCustomApply.component.ts");
/* harmony import */ var _bigCustomHistoryQuery_bigCustomHistoryQuery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bigCustomHistoryQuery/bigCustomHistoryQuery.component */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomHistoryQuery/bigCustomHistoryQuery.component.ts");
/* harmony import */ var _bigCustomApplyQuery_bigCustomApplyQuery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bigCustomApplyQuery/bigCustomApplyQuery.component */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApplyQuery/bigCustomApplyQuery.component.ts");
/* harmony import */ var _bigCustomDetail_bigCustomDetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bigCustomDetail/bigCustomDetail.component */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomDetail/bigCustomDetail.component.ts");

 //大客户费用资格申请
 //大客户费用历史查询

 //大客户费用详情
var routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'bigCustomApply', pathMatch: 'full' },
            {
                path: 'bigCustomApply',
                component: _bigCustomApply_bigCustomApply_component__WEBPACK_IMPORTED_MODULE_1__["BigCustomApplyComponent"]
            },
            {
                path: 'bigCustomHistoryQuery',
                component: _bigCustomHistoryQuery_bigCustomHistoryQuery_component__WEBPACK_IMPORTED_MODULE_2__["BigCustomHistoryQueryComponent"],
            },
            {
                path: 'bigCustomApplyQuery',
                component: _bigCustomApplyQuery_bigCustomApplyQuery_component__WEBPACK_IMPORTED_MODULE_3__["BigCustomApplyQueryComponent"],
            },
            {
                path: 'bigCustomDetail',
                component: _bigCustomDetail_bigCustomDetail_component__WEBPACK_IMPORTED_MODULE_4__["BigCustomDetailComponent"]
            },
        ]
    }
];
var BigCusApplyRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApply/bigCustomApply.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApply/bigCustomApply.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\" *ngIf=\"step_one&&permissionCheck('SID00027_01_01')\">\r\n    <!-- <header-title [Info]=\"'大客户费用申请'\"></header-title> -->\r\n    <div class=\"ui-g-12\">\r\n        <form [formGroup]=\"userform\">\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span appValidation>客户号:</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" formControlName=\"custNo\" pInputText (blur)=\"checkPerson()\" [(ngModel)]=\"custNo\" (keyup)=\"onKeyupNumber($event,1)\"\r\n                    />\r\n                    <div class=\"requireLabel\" *ngIf=\"!userform.controls['custNo'].valid&&userform.controls['custNo'].dirty && isShowTip\">\r\n                        客户号不能为空!\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span appValidation>客户名称:</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" formControlName=\"custName\" disabled pInputText [(ngModel)]=\"custName\" />\r\n                    <div class=\"requireLabel\" *ngIf=\"!userform.controls['custName'].valid&&userform.controls['custName'].dirty && isShowTip\">\r\n                        客户名称不能为空!\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" [disabled]=\"addFlagBtn\" *ngIf=\"stop_flag\" label=\"添加\" (click)=\"add()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"reset(1)\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\">\r\n        <p-dataTable [value]=\"data_one\" scrollable=\"true\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"\" header=\"序号\" [style]=\"{'width':'80px'}\">\r\n                <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                    <span *ngIf=\"!col.sumshow\">{{ri+1}}</span>\r\n                    <span *ngIf=\"col.sumshow\">合计</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"custNo\" header=\"客户号\" [style]=\"{'width':'110px'}\"></p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column field=\"byrjckSum\" header=\"上月日均存款(万元)\" [style]=\"{'width':'120px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{(col.byrjckSum/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"byrjdkjckSum\" header=\"上月日均贷款及敞口(万元)\" [style]=\"{'width':'160px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{(col.byrjdkjckSum/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"snrjckSum\" header=\"上年日均存款(万元)\" [style]=\"{'width':'120px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{(col.snrjckSum/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"snrjdkjckSum\" header=\"上年日均贷款及敞口(万元)\" [style]=\"{'width':'160px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{(col.snrjdkjckSum/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"relatedCustName\" header=\"关联人\" [style]=\"{'width':'120px'}\"></p-column>\r\n            <p-column field=\"depositSumType\" header=\"存款累计方式\" [style]=\"{'width':'120px'}\">\r\n                <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                    {{col.depositSumType|codeValuePie:depositSumTypeOptions}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"操作\" [style]=\"{'width':'80px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <div class=\"table-button\" *ngIf=\"!col.sumshow\">\r\n                        <span class=\"tabelDeleteIco\" *ngIf=\"stop_flag\" (click)=\"toDelete(col)\">删除</span>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows={{pageSizeOne}} totalRecords={{total_one}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginateOne($event)\"></p-paginator>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <!-- <button pButton type=\"button\" label=\"全部删除\" *ngIf=\"stop_flag\" (click)=\"deleteAll()\"></button> -->\r\n        <button pButton type=\"button\" label=\"下一步\" (click)=\"toNext(1)\"></button>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g-12 boxShadow\" *ngIf=\"step_two\">\r\n    <header-title [Info]=\"'费用单价'\"></header-title>\r\n    <form [formGroup]=\"moneyform\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-3 tit\">\r\n                <span appValidation style=\"margin-right:20px;\">费用单价:</span>\r\n            </div>\r\n            <div class=\"ui-g-5\">\r\n                <input type=\"text\" formControlName=\"feeunitPrice\" pInputText [(ngModel)]=\"feeunitPrice\" (blur)=\"changeAgain()\" (keyup)=\"checkNumtwo($event)\"\r\n                    style=\"margin-left:-20px;\" />\r\n                <div class=\"requireLabel\" *ngIf=\"!moneyform.controls['feeunitPrice'].valid&&moneyform.controls['feeunitPrice'].dirty&& isShowTip\">\r\n                    费用单价不能为空!\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-2 unit_tit\">\r\n                <span>(单位:元/万元·月)</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"header-title\" style=\"position:relative\">\r\n            <!-- <span class=\"line\"></span>\r\n            <span class=\"text\">分成协储员</span> -->\r\n            <header-title [Info]=\"'分成协储员'\"></header-title>\r\n            <!-- <span class=\"red_tit\">(最多录入五个经理)</span> -->\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span appValidation>协储员号:</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input formControlName=\"custId\" type=\"text\" pInputText [(ngModel)]=\"custId\" (blur)=\"checkNum()\" (keyup)=\"onKeyupNumber($event,2)\"\r\n                    />\r\n                    <div class=\"requireLabel\" *ngIf=\"!moneyform.controls['custId'].valid&&moneyform.controls['custId'].dirty&& isShowTip\">\r\n                        协储员号不能为空!\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span appValidation>协储员姓名:</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input formControlName=\"custIdName\" type=\"text\" disabled pInputText [(ngModel)]=\"custIdName\" />\r\n                    <div class=\"requireLabel\" *ngIf=\"!moneyform.controls['custIdName'].valid&&moneyform.controls['custIdName'].dirty&& isShowTip\">\r\n                        协储员姓名不能为空!\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <div class=\"ui-g-4 tit\">\r\n                    <span>费用分成比例(%):</span>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input formControlName=\"divideRate\" type=\"text\" pInputText [(ngModel)]=\"divideRate\" (keyup)=\"checkNumtwo($event)\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" [disabled]=\"addMoeyFlag\" label=\"添加\" (click)=\"addMoney()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"reset(2)\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\">\r\n        <p-dataTable [value]=\"data_two\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"\" header=\"序号\" [style]=\"{'width':'80px'}\">\r\n                <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                    {{ri+1}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"assitUserId\" header=\"协储员号\"></p-column>\r\n            <p-column field=\"assitUserName\" header=\"姓名\"></p-column>\r\n            <p-column field=\"departName\" header=\"归属部门\"></p-column>\r\n            <p-column field=\"divideRate\" header=\"费用分成比例(%)\">\r\n                <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                    <input type=\"text\" [disabled]=\"!col.showUpdate\" pInputText [(ngModel)]=\"col.divideRate\" (blur)=\"toUpdateSave(col)\" (keyup)=\"checkNumtwo($event)\"\r\n                    />\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"操作\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <div class=\"table-button\">\r\n                        <span *ngIf=\"!col.showUpdate\" class=\"tabelUpdateIco\" (click)=\"toUpdate(col)\">修改</span>\r\n                        <!-- <span *ngIf=\"col.showUpdate\" class=\"tabelSaveIco\" (click)=\"toUpdateSave(col)\">保存</span> -->\r\n                        <span class=\"tabelDeleteIco\" (click)=\"toDeleteMoney(col)\">删除</span>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows={{pageSizeTwo}} totalRecords={{total_two}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginateTwo($event)\"></p-paginator>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <!-- <button pButton type=\"button\" label=\"全部删除\" (click)=\"deleteALLMoney()\"></button> -->\r\n        <button pButton type=\"button\" label=\"上一步\" (click)=\"toNext(2)\"></button>\r\n        <button pButton type=\"button\" label=\"提交\" (click)=\"commit()\"></button>\r\n    </div>\r\n</div>\r\n\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n\r\n<!-- 选人服务 -->\r\n<p-dialog *ngIf=\"downloadPerson\" header=\"提交给\" modal=\"modal\" width='435' [(visible)]=\"downloadPerson\" (onHide)=\"downloadHide()\"\r\n    class=\"dialog\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApply/bigCustomApply.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApply/bigCustomApply.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn,\n.table {\n  text-align: center; }\n\n.tit {\n  text-align: right;\n  line-height: 24px; }\n\n.unit_tit {\n  color: #f00; }\n\n.header-title {\n  height: 42px;\n  width: 100%;\n  background-color: #fafafa;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  border-bottom: 1px solid #dadada !important; }\n\n.header-title .line {\n    width: 3px;\n    height: 19px;\n    display: inline-block;\n    margin-right: 13px;\n    background-color: #19b0c8; }\n\n@media screen and (max-width: 1280px) {\n    .header-title .line {\n      height: 17px; } }\n\n.header-title .text {\n    flex: 1;\n    height: 20px;\n    line-height: 20px;\n    display: block;\n    white-space: nowrap;\n    font-size: 16px;\n    color: #545454;\n    width: 25px;\n    font-weight: bold; }\n\n@media screen and (max-width: 1280px) {\n    .header-title .text {\n      font-size: 15px; } }\n\n.header-title .red_tit {\n    position: absolute;\n    left: 200px;\n    color: #f00;\n    font-weight: bold;\n    font-size: 15px; }\n\n.requireLabel {\n  color: #f00; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9iaWdDdXN0b21lci9iaWctY3VzLWFwcGx5L2JpZ0N1c3RvbUFwcGx5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcYmlnQ3VzdG9tZXJcXGJpZy1jdXMtYXBwbHlcXGJpZ0N1c3RvbUFwcGx5XFxiaWdDdXN0b21BcHBseS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZUFBZTtFQUNmLDJDQUEyQyxFQUFBOztBQVIvQztJQVVRLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUIsRUFBQTs7QUFFN0I7SUFoQko7TUFrQlksWUFBWSxFQUFBLEVBQ2Y7O0FBbkJUO0lBd0JRLE9BQU87SUFDUCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCLEVBQUE7O0FBRXJCO0lBbENKO01Bb0NZLGVBQWUsRUFBQSxFQUNsQjs7QUFyQ1Q7SUF3Q1Esa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2JpZ0N1c3RvbWVyL2JpZy1jdXMtYXBwbHkvYmlnQ3VzdG9tQXBwbHkvYmlnQ3VzdG9tQXBwbHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLFxyXG4udGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGl0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi51bml0X3RpdCB7XHJcbiAgICBjb2xvcjogI2YwMDtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RhZGFkYSAhaW1wb3J0YW50O1xyXG4gICAgLmxpbmUge1xyXG4gICAgICAgIHdpZHRoOiAzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRleHQge1xyXG4gICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgICAgLW1zLWZsZXg6IDE7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlZF90aXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAyMDBweDtcclxuICAgICAgICBjb2xvcjogI2YwMDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZXF1aXJlTGFiZWwge1xyXG4gICAgY29sb3I6ICNmMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApply/bigCustomApply.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApply/bigCustomApply.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: BigCustomApplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigCustomApplyComponent", function() { return BigCustomApplyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_big_cus_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/big-cus.http.service */ "./src/app/pages/tzb/custom/bigCustomer/http/big-cus.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var BigCustomApplyComponent = /** @class */ (function () {
    function BigCustomApplyComponent(router, confirmationService, httpService, decimalPipe, fb, commfunc, routeInfo, cusOperationHttpService, customeHttpService) {
        this.router = router;
        this.confirmationService = confirmationService;
        this.httpService = httpService;
        this.decimalPipe = decimalPipe;
        this.fb = fb;
        this.commfunc = commfunc;
        this.routeInfo = routeInfo;
        this.cusOperationHttpService = cusOperationHttpService;
        this.customeHttpService = customeHttpService;
        this.first = 0;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"]; //表格中无数据时显示的内容
        this.pageSizeOne = 10; //
        this.pageSizeTwo = 10; //
        this.msgs = [];
        this.step_one = true;
        this.step_two = false;
        this.data_one = [];
        this.data_two = [];
        this.showUpdate = true;
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.depositSumTypeOptions = []; //存款累计方式
        this.sumshow = false;
        this.stop_flag = true; //调整进来不可以操作
        //选人
        this.downloadPerson = false;
        this.isShowTip = true; //校验隐藏
        this.money_flag = 0; //修改费用单价的标志
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
    BigCustomApplyComponent.prototype.ngOnInit = function () {
        this.codeValues();
        this.depositSumTypeOptions = this.code['depositSumTypeBigCus']; //存款累计方式
        this.pageNumOne = 1;
        this.pageNumTwo = 1;
        this.pageSizeOne = 10;
        this.pageSizeTwo = 10;
        this.userform = this.fb.group({
            'custNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'custName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
        this.moneyform = this.fb.group({
            'feeunitPrice': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'custId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'custIdName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'divideRate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        console.log(this.routeInfo.snapshot.params);
        if (this.routeInfo.snapshot.params['this_Flag']) {
            this.bigCustNo = this.routeInfo.snapshot.params['bigCustNo'];
            this.bigId = this.routeInfo.snapshot.params['bigId'];
            this.queryBigCus();
            this.queryMoney();
            this.queryBase(); //查询费用单价
        }
        else {
            this.data_one = [];
            this.data_two = [];
        }
        if (this.routeInfo.snapshot.params['this_Flag'] == '1') {
            this.stop_flag = false;
        }
        else {
            this.stop_flag = true;
        }
    };
    //码值
    BigCustomApplyComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //校验
    BigCustomApplyComponent.prototype.checkPerson = function () {
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
    BigCustomApplyComponent.prototype.showName = function () {
        var _this = this;
        this.isShowTip = true;
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
                            _this.isShowTip = false;
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
    BigCustomApplyComponent.prototype.onKeyupNumber = function (event, num) {
        if (event.target.value != '') {
            if (num == 1) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_8__["checkNumber"])(null, event.target.value)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '当前输入框内只能输入数字!' }];
                    return;
                }
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_8__["custNoTen"])(null, event.target.value)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '客户号错误!' }];
                    return;
                }
            }
            else if (num == 2) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_8__["checkEnAndNum"])(null, event.target.value)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '协储员号错误!' }];
                    return;
                }
            }
        }
        else {
            if (num == 2) {
                this.custIdName = '';
            }
            else if (num == 1) {
                this.custName = '';
            }
        }
    };
    //校验工号
    BigCustomApplyComponent.prototype.checkNum = function () {
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
    BigCustomApplyComponent.prototype.queryUserId = function (item) {
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
    //上下一步
    BigCustomApplyComponent.prototype.toNext = function (data) {
        if (data == 1) {
            if (this.data_one.length == 0 || (this.data_one.length == 1 && this.data_one[0].custNo == '' && this.data_one[0].custName == '')) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: "请先录入大客户名单信息!" });
                return;
            }
            this.step_one = false;
            this.step_two = true;
        }
        else if (data == 2) {
            this.step_one = true;
            this.step_two = false;
        }
    };
    //查询大客户客户信息
    BigCustomApplyComponent.prototype.queryBigCus = function () {
        var _this = this;
        var items = {
            bigCustNo: this.bigCustNo,
            operationType: '0',
            pageSize: this.pageSizeOne,
            pageNum: this.pageNumOne,
            userName: this.userName
        };
        this.httpService.queryBigCustInfo(items).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.bigCustInfoNewList && data.bigCustInfoNewList.length > 0) {
                    _this.data_one = data.bigCustInfoNewList;
                    var sum1 = 0;
                    var sum2 = 0;
                    var sum3 = 0;
                    var sum4 = 0;
                    for (var _i = 0, _a = _this.data_one; _i < _a.length; _i++) {
                        var item = _a[_i];
                        sum1 += item.byrjckSum;
                        sum2 += item.byrjdkjckSum;
                        sum3 += item.snrjckSum;
                        sum4 += item.snrjdkjckSum;
                    }
                    var temp = {
                        "custNo": "",
                        "custName": "",
                        "byrjckSum": sum1,
                        "byrjdkjckSum": sum2,
                        "snrjckSum": sum3,
                        "snrjdkjckSum": sum4,
                        "relatedCustName": "",
                        "depositSumType": "",
                    };
                    _this.data_one.push(temp);
                    for (var _b = 0, _c = _this.data_one; _b < _c.length; _b++) {
                        var param = _c[_b];
                        if (param.custNo == "" &&
                            param.custName == "" &&
                            param.relatedCustName == "" &&
                            param.depositSumType == "") {
                            param.sumshow = true;
                        }
                    }
                }
                else {
                    _this.data_one = [];
                }
                _this.total_one = data.totalNum;
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
    //翻页
    BigCustomApplyComponent.prototype.paginateOne = function (event) {
        //每页显示的条数
        this.pageSizeOne = event.rows * 1;
        //当前页
        this.pageNumOne = event.page + 1;
        this.first = event.page * this.pageSizeOne;
        this.queryBigCus();
    };
    //新增客户信息
    BigCustomApplyComponent.prototype.add = function () {
        var _this = this;
        this.addFlagBtn = true;
        this.isShowTip = true;
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
                    _this.isShowTip = false;
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: '新增成功!' }];
                    _this.bigCustNo = data.bigCustNo;
                    if (data.bigId && data.bigId != '' && data.bigId != null) {
                        _this.bigId = data.bigId;
                    }
                    _this.queryBigCus();
                    _this.reset(1);
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
    //单个删除
    BigCustomApplyComponent.prototype.toDelete = function (data) {
        var _this = this;
        if (this.routeInfo.snapshot.params['this_Flag'] == '1') {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '当前大客户信息不可以删除!' }];
            return;
        }
        this.confirmationService.confirm({
            message: '是否确认删除?',
            accept: function () {
                var temp = {
                    bigCustId: data.bigId,
                };
                _this.httpService.deleteBigCustInfo(temp).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: '删除成功!' }];
                        _this.queryBigCus();
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
    //全部删除
    BigCustomApplyComponent.prototype.deleteAll = function () {
        var _this = this;
        if (this.routeInfo.snapshot.params['this_Flag'] == '1') {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '当前大客户信息不可以删除!' }];
            return;
        }
        if (this.data_one.length == 0) {
            this.msgs = [];
            this.msgs = [{ severity: 'success', summary: '提示', detail: '当前表格没有数据,无法进行删除!' }];
            return;
        }
        this.confirmationService.confirm({
            message: '是否确认全部删除?',
            accept: function () {
                var temp = {
                    bigCustNo: _this.data_one[0].bigCustNo,
                };
                _this.httpService.deleteBatchBigCustInfo(temp).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: '删除成功!' }];
                        _this.queryBigCus();
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
    //重置
    BigCustomApplyComponent.prototype.reset = function (data) {
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
    BigCustomApplyComponent.prototype.addMoney = function () {
        var _this = this;
        this.addMoeyFlag = true;
        this.isShowTip = true;
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
        if (this.data_two.length == 5) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '最多录入5个客户经理!' }];
            return;
        }
        if (Number(this.divideRate) > 100) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '分成比例不能大于100%!' }];
            return;
        }
        if (this.data_two.length >= 1) {
            var sum = Number(this.divideRate);
            for (var _i = 0, _a = this.data_two; _i < _a.length; _i++) {
                var item = _a[_i];
                sum += Number(item.divideRate);
            }
            if (sum > 100) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '分成比例合计之和必须为100%!' }];
                return;
            }
        }
        if (this.data_two.length == 4) {
            var sum1 = Number(this.divideRate);
            for (var _b = 0, _c = this.data_two; _b < _c.length; _b++) {
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
                _this.isShowTip = false;
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '新增成功!' }];
                _this.queryMoney();
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
    BigCustomApplyComponent.prototype.toUpdate = function (data) {
        data.showUpdate = true;
    };
    //修改保存
    BigCustomApplyComponent.prototype.toUpdateSave = function (item) {
        var _this = this;
        var itemParam = JSON.parse(JSON.stringify(item));
        var param = {
            bigCustId: item.bigId,
            divideRate: (itemParam.divideRate / 100).toString(),
        };
        this.httpService.updateBigCustManager(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                item.showUpdate = false;
                _this.queryMoney();
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
    //查询大客户分成信息
    BigCustomApplyComponent.prototype.queryMoney = function () {
        var _this = this;
        var params = {
            bigCustNo: this.bigCustNo,
            pageSize: this.pageSizeTwo,
            pageNum: this.pageNumTwo,
            isHis: '1'
        };
        this.httpService.queryBigCustManager(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.bigCustManNewList && data.bigCustManNewList.length > 0) {
                    for (var _i = 0, _a = data.bigCustManNewList; _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.divideRate = JSON.parse(JSON.stringify(item.divideRate * 100)).toFixed(2);
                    }
                    _this.data_two = data.bigCustManNewList;
                }
                else {
                    _this.data_two = [];
                }
                _this.total_two = data.totalNum;
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
    //基本信息查询
    BigCustomApplyComponent.prototype.queryBase = function () {
        var _this = this;
        var param = {
            bigCustNo: this.bigCustNo,
            isHis: '1',
            bigId: this.bigId
        };
        this.httpService.queryBigCustBaseInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.feeunitPrice = data.feeunitPrice;
                _this.saveFeeMon = JSON.parse(JSON.stringify(_this.feeunitPrice));
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
    //翻页
    BigCustomApplyComponent.prototype.paginateTwo = function (event) {
        //每页显示的条数
        this.pageSizeTwo = event.rows * 1;
        //当前页
        this.pageNumTwo = event.page + 1;
        this.first = event.page * this.pageSizeTwo;
        this.queryMoney();
    };
    //删除
    BigCustomApplyComponent.prototype.toDeleteMoney = function (data) {
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
                        _this.queryMoney();
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
    //全部删除费用信息
    BigCustomApplyComponent.prototype.deleteALLMoney = function () {
        var _this = this;
        if (this.data_two.length == 0) {
            this.msgs = [];
            this.msgs = [{ severity: 'success', summary: '提示', detail: '当前表格没有数据,无法进行删除!' }];
            return;
        }
        this.confirmationService.confirm({
            message: '是否确认全部删除?',
            accept: function () {
                var params = {
                    isAll: '0',
                    bigCustNo: _this.data_two[0].bigCustNo,
                    bigCustId: _this.data_two[0].bigId
                };
                _this.httpService.deleteBigCustManager(params).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: '全部删除成功!' }];
                        _this.queryMoney();
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
    //提交
    BigCustomApplyComponent.prototype.commit = function () {
        var _this = this;
        if (this.data_two.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: "请先录入客户经理信息!" });
            return;
        }
        if (this.data_two.length == 1) {
            var sum = 0;
            for (var _i = 0, _a = this.data_two; _i < _a.length; _i++) {
                var item = _a[_i];
                sum += Number(item.divideRate);
            }
            if (sum != 100) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '分成比例合计必须为100%!请修改!' }];
                return;
            }
        }
        if (this.data_two.length > 1) {
            var sum = 0;
            for (var _b = 0, _c = this.data_two; _b < _c.length; _b++) {
                var item = _c[_b];
                sum += Number(item.divideRate);
            }
            if (sum != 100) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '分成比例合计之和必须为100%!' }];
                return;
            }
        }
        this.confirmationService.confirm({
            message: '是否确认提交?',
            accept: function () {
                // setTimeout(() => this.toSubmit(), 100);
                _this.submitNum = '1';
                _this.submit_1();
            }
        });
    };
    // //提交审批
    // toSubmit() {
    //     this.confirmationService.confirm({
    //         message: '是否已享受差异化?',
    //         accept: () => {
    //             this.submitNum = '0';
    //             this.submit_1();
    //         },
    //         reject: () => {
    //             this.submitNum = '1';
    //             this.submit_1();
    //         }
    //     });
    // }
    BigCustomApplyComponent.prototype.submit_1 = function () {
        if (this.money_flag != 1) {
            this.changeAgain();
        }
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (s.extParam.specifyNextOpers) {
            delete s.extParam.specifyNextOpers;
            var commonHeader = s;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        }
        this.waitSelUserList = this.commfunc.query('DKHFYSQ', {});
        if (!this.waitSelUserList.erro) {
            this.outVal = this.waitSelUserList.waitSelUserList;
            var chooseThis = this.waitSelUserList.display;
            var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            var a2 = commonHeader.extParam.specifyNextOpers;
            if (chooseThis == true && (a2 == undefined || a2 == '' || a2 == null)) {
                this.downloadPerson = true;
            }
            else {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '没有审批人无法提交!' }];
                return;
                // this.submit_2();
            }
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
        }
    };
    //再次修改费用单价
    BigCustomApplyComponent.prototype.changeAgain = function () {
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
                    _this.money_flag = 1;
                    _this.saveFeeMon = JSON.parse(JSON.stringify(_this.feeunitPrice));
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
    //提交审批
    BigCustomApplyComponent.prototype.submit_2 = function () {
        var _this = this;
        var param = {
            bigCustNo: this.bigCustNo,
            bigId: this.bigId,
            isDiff: this.submitNum
        };
        this.httpService.approveBigCustApplication(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '提交成功!' }];
                setTimeout(function () {
                    _this.router.navigate(["pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomHistoryQuery"]);
                }, 1000);
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
    //保留两位小数
    BigCustomApplyComponent.prototype.checkNumtwo = function (event) {
        if (event.target.value != '') {
            if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_8__["decimalNumTwo"])(null, event.target.value)) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '只能输入数字,输入格式请保留两位小数!' }];
                event.target.value = '';
                return;
            }
        }
    };
    BigCustomApplyComponent.prototype.outDisplayCall = function (event) {
        this.downloadPerson = event;
    };
    BigCustomApplyComponent.prototype.outValueCall = function (event) {
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.submit_2();
    };
    BigCustomApplyComponent.prototype.downloadHide = function () {
        this.downloadPerson = false;
    };
    //绑定权限id
    BigCustomApplyComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    BigCustomApplyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bigCustomApply',
            template: __webpack_require__(/*! ./bigCustomApply.component.html */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApply/bigCustomApply.component.html"),
            styles: [__webpack_require__(/*! ./bigCustomApply.component.scss */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApply/bigCustomApply.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"], _http_big_cus_http_service__WEBPACK_IMPORTED_MODULE_5__["BigCusHttpService"], app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_10__["CustomeHttpService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _http_big_cus_http_service__WEBPACK_IMPORTED_MODULE_5__["BigCusHttpService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_9__["CusOperationHttpService"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_10__["CustomeHttpService"]])
    ], BigCustomApplyComponent);
    return BigCustomApplyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApplyQuery/bean/bigCusQry.bean.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApplyQuery/bean/bigCusQry.bean.ts ***!
  \*******************************************************************************************************/
/*! exports provided: BigCusQryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigCusQryBean", function() { return BigCusQryBean; });
var BigCusQryBean = /** @class */ (function () {
    function BigCusQryBean() {
    }
    return BigCusQryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApplyQuery/bigCustomApplyQuery.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApplyQuery/bigCustomApplyQuery.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\" *ngIf=\"permissionCheck('SID00027_01_03')\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>大客户编号:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"bigCusQryBean.bigCustNo\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>创建人:</span>\r\n            </div>\r\n            <div class=\"ui-g-6 queryinputbtn\">\r\n                <input class=\"queryinputOrg\" type=\"text\" placeholder=\"请选择\" pInputText disabled [(ngModel)]=\"personName\">\r\n                <div (click)=\"perShow()\" class=\"clickspan\">\r\n                    <a class=\"a-hand\">\r\n                        <span>...</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>客户号:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"bigCusQryBean.custNo\" (blur)=\"showName()\" (keyup)=\"onKeyupNumber($event,2)\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>客户名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText disabled [(ngModel)]=\"bigCusQryBean.custName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>所属机构:</span>\r\n            </div>\r\n            <div class=\"ui-g-6 queryinputbtn\">\r\n                <input class=\"queryinputOrg\" type=\"text\" pInputText [(ngModel)]=\"treeOrgName\" disabled/>\r\n                <div (click)=\"perTreeShow()\" class=\"clickspan\">\r\n                    <a class=\"a-hand\">\r\n                        <span>...</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>费用单价(万分之):</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input class=\"inputClass\" type=\"text\" pInputText [(ngModel)]=\"bigCusQryBean.feeStart\" (blur)=\"checkfee(1)\" (keyup)=\"checkNumtwo($event)\"\r\n                />\r\n                <span>至</span>\r\n                <input class=\"inputClass\" type=\"text\" pInputText [(ngModel)]=\"bigCusQryBean.feeEnd\" (blur)=\"checkfee(2)\" (keyup)=\"checkNumtwo($event)\"\r\n                />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>状态:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"bigCusStatusOptions\" placeholder=\"请选择\" [(ngModel)]=\"bigCusQryBean.statusId\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>创建日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-calendar [(ngModel)]=\"startDate\" [maxDate]=\"endDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"chectStart()\" (onBlur)=\"chectStart()\"></p-calendar>\r\n                至\r\n                <p-calendar [(ngModel)]=\"endDate\" [minDate]=\"startDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"chectEnd()\" (onBlur)=\"chectEnd()\"></p-calendar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" (click)=\"queryFirst()\" label=\"查询\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\">\r\n        <p-dataTable [value]=\"dataTable\" scrollable=\"true\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"bigCustNo\" header=\"大客户编号\" [style]=\"{'width':'110px'}\"></p-column>\r\n            <p-column field=\"custNo\" header=\"客户号\" [style]=\"{'width':'110px'}\"></p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column field=\"feeunitPrice\" header=\"费用单价(万分之)\" [style]=\"{'width':'140px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{(col.feeunitPrice/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"depositBase\" header=\"存款基期(万元)\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{(col.depositBase/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanBase\" header=\"贷款及敞口基期(万元)\" [style]=\"{'width':'140px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{(col.loanBase/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"createrName\" header=\"创建人\" [style]=\"{'width':'120px'}\"></p-column>\r\n            <p-column field=\"createdDate\" header=\"创建日期\" [style]=\"{'width':'120px'}\"></p-column>\r\n            <p-column field=\"statusId\" header=\"状态\" [style]=\"{'width':'100px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.statusId|codeValuePie:bigCusStatusOptions}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"操作\" [style]=\"{'width':'130px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <div class=\"table-button\">\r\n                        <span class=\"tabelDetailIco\" (click)=\"toDetail(col)\" *ngIf=\"permissionCheck('SID00027_01_03_01')\">详情</span>\r\n                        <span class=\"tabelDetailSetIco\" *ngIf=\"!permissionCheck('SID00027_01_03_01')\">详情</span>\r\n                        <span class=\"tabelAdjustIco\" *ngIf=\"col.statusId!='04'&&permissionCheck('SID00027_01_03_02')&&(col.manageId==userId)\" (click)=\"toUpdate(col)\">调整</span>\r\n                        <span class=\"tabelAdjustIco_no\" *ngIf=\"col.statusId=='04'||!permissionCheck('SID00027_01_03_02')||(col.manageId!=userId)\">调整</span>\r\n                        <span class=\"tabelRepealIco\" *ngIf=\"col.statusId!='04'&&permissionCheck('SID00027_01_03_03')&&(col.manageId==userId)\" (click)=\"toGetBack(col)\">撤销</span>\r\n                        <span class=\"tabelRepealIco_no\" *ngIf=\"col.statusId=='04'||!permissionCheck('SID00027_01_03_03')||(col.manageId!=userId)\">撤销</span>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows={{bigCusQryBean.pageSize}} totalRecords={{total}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<p-dialog *ngIf=\"detailPage\" [(visible)]=\"detailPage\" modal=\"true\" responsive=\"true\">\r\n    <p-header>\r\n        {{detailHeader}}\r\n    </p-header>\r\n    <bigCustomDetail [dataValue]=\"inValue\"></bigCustomDetail>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"orgTreePage\" [(visible)]=\"orgTreePage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <org-tree-component [inValue]=\"inValue_data\" (outValue)=\"treeCall($event)\"></org-tree-component>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"personPage\" [(visible)]=\"personPage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <queryUser (outValue)=\"perInfor($event)\"></queryUser>\r\n</p-dialog>\r\n\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n<!-- 选人服务 -->\r\n<p-dialog *ngIf=\"downloadPerson\" header=\"提交给\" modal=\"modal\" width='435' [(visible)]=\"downloadPerson\" (onHide)=\"downloadHide()\"\r\n    class=\"dialog\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApplyQuery/bigCustomApplyQuery.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApplyQuery/bigCustomApplyQuery.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table,\n.btn {\n  text-align: center; }\n\n.tit {\n  text-align: right;\n  line-height: 24px;\n  padding-right: 5px !important; }\n\n.ui-g-6 .ui-g-4,\n.ui-g-6 .ui-g-6 {\n  padding: 0; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-calendar {\n    min-width: 128px;\n    width: 45% !important; }\n  .inputClass {\n    min-width: 128px;\n    width: 45% !important; } }\n\n@media screen and (min-width: 1280px) {\n  :host/deep/ .ui-calendar {\n    width: 47%; }\n  .inputClass {\n    width: 47%; } }\n\n.queryinputbtn {\n  float: left;\n  display: flex; }\n\n.queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n\n.queryinputbtn .clickspan {\n    width: 14%;\n    height: 23px;\n    cursor: pointer; }\n\n:host/deep/ .ui-dialog .ui-dialog-content {\n  padding: 1em 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9iaWdDdXN0b21lci9iaWctY3VzLWFwcGx5L2JpZ0N1c3RvbUFwcGx5UXVlcnkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxiaWdDdXN0b21lclxcYmlnLWN1cy1hcHBseVxcYmlnQ3VzdG9tQXBwbHlRdWVyeVxcYmlnQ3VzdG9tQXBwbHlRdWVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDZCQUE2QixFQUFBOztBQUdqQzs7RUFHUSxVQUFVLEVBQUE7O0FBS2xCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0s7SUFDRyxnQkFBZ0I7SUFDaEIscUJBQXFCLEVBQUE7RUFFekI7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCLEVBQUEsRUFDeEI7O0FBR0w7RUFDSztJQUNHLFVBQVUsRUFBQTtFQUVkO0lBQ0ksVUFBVSxFQUFBLEVBQ2I7O0FBR0w7RUFDSSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUZqQjtJQUlRLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLDBCQUEwQixFQUFBOztBQVBsQztJQVVRLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZSxFQUFBOztBQUl2QjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9iaWdDdXN0b21lci9iaWctY3VzLWFwcGx5L2JpZ0N1c3RvbUFwcGx5UXVlcnkvYmlnQ3VzdG9tQXBwbHlRdWVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSxcclxuLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWktZy02IHtcclxuICAgIC51aS1nLTQsXHJcbiAgICAudWktZy02IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL+ihqOagvOWtl+avjeaVsOWtl+iHquWKqOaNouihjFxyXG46aG9zdC9kZWVwLyAudWktY2VsbC1kYXRhIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICA6aG9zdC9kZWVwLyAudWktY2FsZW5kYXIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTI4cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmlucHV0Q2xhc3Mge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTI4cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODBweCkge1xyXG4gICAgIDpob3N0L2RlZXAvIC51aS1jYWxlbmRhciB7XHJcbiAgICAgICAgd2lkdGg6IDQ3JTtcclxuICAgIH1cclxuICAgIC5pbnB1dENsYXNzIHtcclxuICAgICAgICB3aWR0aDogNDclO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucXVlcnlpbnB1dGJ0biB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAucXVlcnlpbnB1dE9yZyB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xyXG4gICAgICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4td2lkdGg6IDY5cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jbGlja3NwYW4ge1xyXG4gICAgICAgIHdpZHRoOiAxNCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMWVtIDFlbTsgLy8gaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApplyQuery/bigCustomApplyQuery.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApplyQuery/bigCustomApplyQuery.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: BigCustomApplyQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigCustomApplyQueryComponent", function() { return BigCustomApplyQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _http_big_cus_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/big-cus.http.service */ "./src/app/pages/tzb/custom/bigCustomer/http/big-cus.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var _bean_bigCusQry_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bean/bigCusQry.bean */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApplyQuery/bean/bigCusQry.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BigCustomApplyQueryComponent = /** @class */ (function () {
    function BigCustomApplyQueryComponent(router, commfunc, httpService, confirmationService) {
        this.router = router;
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.confirmationService = confirmationService;
        this.inValue_data = 'take';
        this.first = 0;
        this.msgs = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //表格中无数据时显示的内容
        this.pageSize = 10; //
        this.pageNum = 1; //
        //总页数
        this.total = '10';
        this.detailHeader = '大客户费用详情';
        this.detailPage = false;
        this.orgTreePage = false;
        this.personId = [];
        this.personName = []; //员工
        this.personPage = false;
        //单选全选
        this.chooseData = [];
        this.checkAll = false;
        this.dataTable = [];
        this.startDate = null; //开始日期
        this.endDate = null; //结束日期
        this.today_time = new Date();
        this.manageId = String;
        this.bigCusStatusOptions = [];
        this.approveStatusOptions = []; //大客户费用资格审批状态
        this.operationTypeOptions = []; //大客户操作类型
        this.bigCusQryBean = new _bean_bigCusQry_bean__WEBPACK_IMPORTED_MODULE_7__["BigCusQryBean"]();
        this.custManagerNosFlag = false;
        //选人
        this.downloadPerson = false;
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
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
    BigCustomApplyQueryComponent.prototype.ngOnInit = function () {
        this.codeValues();
        this.bigCusStatusOptions = this.code['statusbigCus']; //大客户费用资格状态
        this.approveStatusOptions = this.code['approveStatusbigCus']; //大客户费用资格审批状态
        this.operationTypeOptions = this.code['operationType']; //大客户操作类型
        this.bigCusQryBean.pageNum = 1;
        this.bigCusQryBean.pageSize = 10;
        this.query();
    };
    BigCustomApplyQueryComponent.prototype.toDetail = function (data) {
        data['detail_Flag'] = '0';
        this.detailPage = true;
        this.inValue = data;
    };
    //机构回掉
    BigCustomApplyQueryComponent.prototype.treeCall = function (param) {
        this.orgTreePage = false;
        if (param.orgId == 'T0000') {
            param.orgId = '0000';
        }
        this.treeOrgName = param.orgName;
        this.treeOrgId = param.orgId;
    };
    //机构弹框
    BigCustomApplyQueryComponent.prototype.perTreeShow = function () {
        this.orgTreePage = true;
    };
    //创建人弹框
    BigCustomApplyQueryComponent.prototype.perShow = function () {
        this.personPage = true;
    };
    //创建人回调
    BigCustomApplyQueryComponent.prototype.perInfor = function (item) {
        this.personPage = false;
        this.personName = item[0].tellerName;
        this.personId = item[0].tellerId;
    };
    //码值
    BigCustomApplyQueryComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //翻页
    BigCustomApplyQueryComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.bigCusQryBean.pageSize = event.rows * 1;
        //当前页
        this.bigCusQryBean.pageNum = event.page + 1;
        this.first = event.page * this.bigCusQryBean.pageSize;
        this.query();
    };
    //查询
    BigCustomApplyQueryComponent.prototype.queryFirst = function () {
        this.bigCusQryBean.pageNum = 1;
        this.bigCusQryBean.pageSize = 10;
        this.first = 0;
        this.query();
    };
    //回显客户名称
    BigCustomApplyQueryComponent.prototype.showName = function () {
        var _this = this;
        if (this.bigCusQryBean.custNo && this.bigCusQryBean.custNo != '') {
            var param = {
                custNo: this.bigCusQryBean.custNo
            };
            this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.bigCusQryBean.custName = data.custName;
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
    BigCustomApplyQueryComponent.prototype.query = function () {
        var _this = this;
        if (this.treeOrgId && this.treeOrgId != '') {
            this.bigCusQryBean.createrOrg = this.treeOrgId;
        }
        if (this.personId && this.personId != '') {
            this.bigCusQryBean.creater = this.personId;
        }
        this.bigCusQryBean.createdDateStart = this.commfunc.transDateN(this.startDate);
        this.bigCusQryBean.createdDateEnd = this.commfunc.transDateN(this.endDate);
        this.httpService.queryBigCustRegister(this.bigCusQryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataTable = data.bigCustRegisterRelList;
                _this.total = data.totalNum;
                _this.dataTable.forEach(function (item, index) {
                    _this.httpService.findUser({ custNo: _this.dataTable[index].custNo }).subscribe(function (dataUser) {
                        if (dataUser.returnCode.code == 'success') {
                            if (dataUser.infoList != null) {
                                if (dataUser.infoList.length > 0) {
                                    _this.manageId = dataUser.infoList[0].manageId;
                                    _this.dataTable[index]['manageId'] = _this.manageId;
                                    //console.log( this.dataTable);
                                }
                            }
                        }
                    });
                });
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
    BigCustomApplyQueryComponent.prototype.reset = function () {
        this.treeOrgId = '';
        this.treeOrgName = '';
        this.bigCusQryBean.creater = '';
        this.personId = '';
        this.personName = '';
        this.bigCusQryBean.bigCustNo = '';
        this.bigCusQryBean.custNo = '';
        this.bigCusQryBean.custName = '';
        this.startDate = null;
        this.endDate = null;
        this.bigCusQryBean.statusId = '';
        this.bigCusQryBean.createdDateStart = '';
        this.bigCusQryBean.createdDateEnd = '';
        this.bigCusQryBean.feeStart = null;
        this.bigCusQryBean.feeEnd = null;
    };
    //校验客户号只能输入数字
    BigCustomApplyQueryComponent.prototype.onKeyupNumber = function (event, num) {
        if (event.target.value != '') {
            if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(null, event.target.value)) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '当前输入框内只能输入数字!' }];
                return;
            }
            if (num == 2) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["custNoTen"])(null, event.target.value)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '客户号错误!' }];
                    return;
                }
            }
        }
    };
    //保留两位小数
    BigCustomApplyQueryComponent.prototype.checkNumtwo = function (event) {
        if (event.target.value != '') {
            if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["decimalNumTwo"])(null, event.target.value)) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '只能输入数字,输入格式请保留两位小数!' }];
                event.target.value = '';
                return;
            }
        }
    };
    //校验费用单价
    BigCustomApplyQueryComponent.prototype.checkfee = function (data) {
        if (this.bigCusQryBean.feeStart && this.bigCusQryBean.feeStart != null && this.bigCusQryBean.feeEnd && this.bigCusQryBean.feeEnd != null) {
            if (this.bigCusQryBean.feeStart > this.bigCusQryBean.feeEnd) {
                if (data == 1) {
                    this.msgs = [];
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '最小费用单价不能大于最大费用单价' }];
                    this.bigCusQryBean.feeStart = null;
                }
                else if (data == 2) {
                    this.msgs = [];
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '最大费用单价不能大于最小费用单价' }];
                    this.bigCusQryBean.feeEnd = null;
                }
            }
        }
    };
    //开始日期
    BigCustomApplyQueryComponent.prototype.chectStart = function () {
        if (this.endDate && this.endDate != null && this.startDate && this.startDate != null) {
            if (this.startDate > this.endDate) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '开始时间不能大于结束日期' }];
                this.startDate = null;
                return;
            }
        }
    };
    //结束日期
    BigCustomApplyQueryComponent.prototype.chectEnd = function () {
        if (this.endDate && this.endDate != null && this.startDate && this.startDate != null) {
            if (this.startDate > this.endDate) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '开始时间不能大于结束日期' }];
                this.endDate = null;
                return;
            }
        }
    };
    //调整
    BigCustomApplyQueryComponent.prototype.toUpdate = function (item) {
        var _this = this;
        var param = {
            bigCustNo: item.bigCustNo,
            userName: this.userName,
        };
        this.httpService.updateBigCustHistory(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                item['bigId'] = data.bigId;
                item['bigCustNo'] = data.bigCustNo;
                item['this_Flag'] = '1';
                _this.router.navigate(["pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApply", item]);
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
    //撤销审批
    BigCustomApplyQueryComponent.prototype.toGetBack = function (data) {
        var _this = this;
        this.backBigCusNo = data.bigCustNo;
        this.confirmationService.confirm({
            message: '是否确认撤销?',
            accept: function () {
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                }
                _this.waitSelUserList = _this.commfunc.query('DKHFYCX', {});
                if (!_this.waitSelUserList.erro) {
                    _this.outVal = _this.waitSelUserList.waitSelUserList;
                    var chooseThis = _this.waitSelUserList.display;
                    var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                    var a2 = commonHeader.extParam.specifyNextOpers;
                    if (chooseThis == true && (a2 == undefined || a2 == '' || a2 == null)) {
                        _this.downloadPerson = true;
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: '没有审批人无法撤销!' }];
                        return;
                        // this.comeBack();
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: _this.waitSelUserList.erro });
                }
            }
        });
    };
    //撤销
    BigCustomApplyQueryComponent.prototype.comeBack = function () {
        var _this = this;
        var param = {
            bigCustNo: this.backBigCusNo,
            userName: this.userName,
        };
        this.httpService.approveBigCustRevoke(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '撤销成功!' }];
                _this.queryFirst();
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
    BigCustomApplyQueryComponent.prototype.outDisplayCall = function (event) {
        this.downloadPerson = event;
    };
    BigCustomApplyQueryComponent.prototype.outValueCall = function (event) {
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.comeBack();
    };
    BigCustomApplyQueryComponent.prototype.downloadHide = function () {
        this.downloadPerson = false;
    };
    //绑定权限id
    BigCustomApplyQueryComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    BigCustomApplyQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bigCustomApplyQuery',
            template: __webpack_require__(/*! ./bigCustomApplyQuery.component.html */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApplyQuery/bigCustomApplyQuery.component.html"),
            styles: [__webpack_require__(/*! ./bigCustomApplyQuery.component.scss */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApplyQuery/bigCustomApplyQuery.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"], _http_big_cus_http_service__WEBPACK_IMPORTED_MODULE_3__["BigCusHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _http_big_cus_http_service__WEBPACK_IMPORTED_MODULE_3__["BigCusHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], BigCustomApplyQueryComponent);
    return BigCustomApplyQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomDetail/bigCustomDetail.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomDetail/bigCustomDetail.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 functions\">\r\n    <span class=\"change\" [ngClass]=\"{'active':show==1}\" (click)=\"apply(1)\">\r\n        基本信息\r\n    </span>\r\n    <span class=\"change\" [ngClass]=\"{'active':show==2}\" (click)=\"apply(2)\">\r\n        大客户名单信息\r\n    </span>\r\n    <span class=\"change\" [ngClass]=\"{'active':show==3}\" (click)=\"apply(3)\">\r\n        大客户分成信息\r\n    </span>\r\n    <!-- <span class=\"change\" [ngClass]=\"{'active':show==4}\" (click)=\"apply(4)\">\r\n        工作流历史\r\n    </span> -->\r\n</div>\r\n<div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12\" *ngIf=\"show==1\">\r\n        <header-title [Info]=\"'基本信息'\"></header-title>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>大客户编号:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{detailItems.bigCustNo}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>客户号:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{detailItems.custNo}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>客户名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{detailItems.custName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>上年日均存款(万元):</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{(detailItems.snrjckSum/1)|number:'1.2-2'}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>上年日均贷款及敞口(万元):</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{(detailItems.snrjdkjckSum/1)|number:'1.2-2'}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>费用单价(万分之):</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{(detailItems.feeunitPrice/1)|number:'1.2-2'}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>存款基期(万元):</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{(detailItems.depositBase/1)|number:'1.2-2'}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>贷款及敞口基期(万元):</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{(detailItems.loanBase/1)|number:'1.2-2'}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"show==2\">\r\n        <header-title [Info]=\"'大客户名单信息'\"></header-title>\r\n        <div class=\"ui-g-12 table base-table\">\r\n            <p-dataTable [value]=\"data_cuslist\" scrollable=\"true\" [emptyMessage]=\"tabMesg\">\r\n                <p-column field=\"\" header=\"序号\" [style]=\"{'width':'60px'}\">\r\n                    <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                        {{ri+1}}\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"custNo\" header=\"客户号\" [style]=\"{'width':'110px'}\"></p-column>\r\n                <p-column field=\"custName\" header=\"客户名称\" [style]=\"{'width':'150px'}\"></p-column>\r\n                <p-column field=\"byrjckSum\" header=\"上月日均存款(万元)\" [style]=\"{'width':'120px'}\">\r\n                    <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                        {{(col.byrjckSum/1)|number:'1.2-2'}}\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"byrjdkjckSum\" header=\"上月日均贷款及敞口(万元)\" [style]=\"{'width':'160px'}\">\r\n                    <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                        {{(col.byrjdkjckSum/1)|number:'1.2-2'}}\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"snrjckSum\" header=\"上年日均存款(万元)\" [style]=\"{'width':'120px'}\">\r\n                    <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                        {{(col.snrjckSum/1)|number:'1.2-2'}}\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"snrjdkjckSum\" header=\"上年日均贷款及敞口(万元)\" [style]=\"{'width':'160px'}\">\r\n                    <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                        {{(col.snrjdkjckSum/1)|number:'1.2-2'}}\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"relatedCustName\" header=\"关联人\" [style]=\"{'width':'100px'}\"></p-column>\r\n                <p-column field=\"depositSumType\" header=\"存款累计方式\" [style]=\"{'width':'120px'}\">\r\n                    <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                        {{col.depositSumType|codeValuePie:depositSumTypeOptions}}\r\n                    </ng-template>\r\n                </p-column>\r\n            </p-dataTable>\r\n            <p-paginator [first]=\"first\" rows={{pageSizeCusList}} totalRecords={{totalCusList}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginateCusList($event)\"></p-paginator>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"show==3\">\r\n        <header-title [Info]=\"'大客户分成信息'\"></header-title>\r\n        <div class=\"ui-g-12 table base-table\">\r\n            <p-dataTable [value]=\"dataTable\" scrollable=\"true\" [emptyMessage]=\"tabMesg\">\r\n                <p-column field=\"\" header=\"序号\">\r\n                    <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                        {{ri+1}}\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"assitUserId\" header=\"协储员号\"></p-column>\r\n                <p-column field=\"assitUserName\" header=\"姓名\"></p-column>\r\n                <p-column field=\"departName\" header=\"部门\"></p-column>\r\n                <p-column field=\"divideRate\" header=\"费用分成比例(%)\">\r\n                    <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                        {{(col.divideRate/1)|number:'1.2-2'}}\r\n                    </ng-template>\r\n                </p-column>\r\n            </p-dataTable>\r\n            <p-paginator [first]=\"first\" rows={{pageSizeDivide}} totalRecords={{totalDivide}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginateDivide($event)\"></p-paginator>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12\" *ngIf=\"show==4\">\r\n        <header-title [Info]=\"'工作流历史'\"></header-title>\r\n        <div class=\"ui-g-12 table base-table\">\r\n            <p-dataTable [value]=\"dataApprove\" [emptyMessage]=\"tabMesg\">\r\n                <p-column field=\"receiverName\" header=\"审批人\"></p-column>\r\n                <p-column field=\"taskPhase\" header=\"审批阶段\"></p-column>\r\n                <p-column field=\"actualCompletionDate\" header=\"审批日期\"></p-column>\r\n                <p-column field=\"statusId\" header=\"审批结果\">\r\n                    <ng-template let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                        {{item.statusId|codeValuePie:doDeal}}\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column field=\"apprOpinion\" header=\"审批意见\"></p-column>\r\n            </p-dataTable>\r\n        </div>\r\n    </div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomDetail/bigCustomDetail.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomDetail/bigCustomDetail.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0; }\n  .functions .change {\n    display: inline-block;\n    font-size: 15px;\n    height: 35px;\n    line-height: 35px;\n    border-radius: 3px 3px 0 0;\n    color: #929292;\n    padding: 0px 30px;\n    font-weight: bold;\n    cursor: pointer; }\n  .active {\n  border: none !important;\n  background-color: #f7f7f7 !important;\n  color: #003f5c !important; }\n  .tit {\n  text-align: right;\n  padding-right: 5px !important; }\n  .ui-g-6 .ui-g-4,\n.ui-g-6 .ui-g-6 {\n  padding: 0; }\n  .btn,\n.table {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9iaWdDdXN0b21lci9iaWctY3VzLWFwcGx5L2JpZ0N1c3RvbURldGFpbC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGJpZ0N1c3RvbWVyXFxiaWctY3VzLWFwcGx5XFxiaWdDdXN0b21EZXRhaWxcXGJpZ0N1c3RvbURldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZUFBZSxFQUFBO0VBSG5CO0lBS1EscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7RUFJdkI7RUFDSSx1QkFBdUI7RUFDdkIsb0NBQW9DO0VBQ3BDLHlCQUF5QixFQUFBO0VBRzdCO0VBQ0ksaUJBQWlCO0VBQ2pCLDZCQUE2QixFQUFBO0VBR2pDOztFQUdRLFVBQVUsRUFBQTtFQUlsQjs7RUFFSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vYmlnQ3VzdG9tZXIvYmlnLWN1cy1hcHBseS9iaWdDdXN0b21EZXRhaWwvYmlnQ3VzdG9tRGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5YiH5o2iXHJcbi5mdW5jdGlvbnMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIC5jaGFuZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xyXG4gICAgICAgIGNvbG9yOiAjOTI5MjkyO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3ZjcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAzZjVjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHggIWltcG9ydGFudDs7XHJcbn1cclxuXHJcbi51aS1nLTYge1xyXG4gICAgLnVpLWctNCxcclxuICAgIC51aS1nLTYge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4sXHJcbi50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomDetail/bigCustomDetail.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomDetail/bigCustomDetail.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: BigCustomDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigCustomDetailComponent", function() { return BigCustomDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_big_cus_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http/big-cus.http.service */ "./src/app/pages/tzb/custom/bigCustomer/http/big-cus.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BigCustomDetailComponent = /** @class */ (function () {
    function BigCustomDetailComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"]; //表格中无数据时显示的内容
        this.show = 1;
        this.first = 0;
        this.data = [];
        this.pageSize = 10; //
        this.pageNum = 1; //
        //总页数
        this.total = '10';
        this.msgs = [];
        this.detailItems = {
            custNo: '',
            custName: '',
            snrjckSum: '',
            snrjdkjckSum: '',
            feeunitPrice: '',
            depositBase: '',
            loanBase: '',
            bigCustNo: '',
        };
        this.data_cuslist = []; //客户名单信息
        this.pageSizeCusList = 10;
        this.pageNumCusList = 1;
        this.dataTable = []; //大客户分成信息
        this.pageSizeDivide = 10;
        this.pageNumDivide = 1;
        this.dataApprove = [];
        this.doDeal = [];
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.depositSumTypeOptions = []; //存款累计方式
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
    BigCustomDetailComponent.prototype.ngOnInit = function () {
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.doDeal = this.code['DoDeal'];
        this.depositSumTypeOptions = this.code['depositSumTypeBigCus']; //存款累计方式
        this.pageSizeCusList = 10;
        this.pageNumCusList = 1;
        console.log(this.dataValue);
        this.bigCustNo = this.dataValue.bigCustNo;
        this.bigId = this.dataValue.bigId;
        this.queryBase(); //大客户基本信息
        this.queryCusList(); //大客户名单信息
        this.divideInto(); //大客户分成信息
    };
    BigCustomDetailComponent.prototype.ngOnChanges = function () {
    };
    //码值
    BigCustomDetailComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    BigCustomDetailComponent.prototype.apply = function (num) {
        this.show = num;
    };
    //基本信息查询
    BigCustomDetailComponent.prototype.queryBase = function () {
        var _this = this;
        var isthis = '';
        if (this.dataValue.detail_Flag && this.dataValue.detail_Flag == '1') {
            isthis = '1';
        }
        else if (this.dataValue.detail_Flag && this.dataValue.detail_Flag == '0') {
            isthis = '0';
        }
        var param = {
            bigCustNo: this.bigCustNo,
            isHis: isthis,
            bigId: this.bigId
        };
        this.httpService.queryBigCustBaseInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.detailItems.custNo = data.custNo;
                _this.detailItems.custName = data.custName;
                _this.detailItems.snrjckSum = data.snrjckSum;
                _this.detailItems.snrjdkjckSum = data.snrjdkjckSum;
                _this.detailItems.feeunitPrice = data.feeunitPrice;
                _this.detailItems.depositBase = data.depositBase;
                _this.detailItems.loanBase = data.loanBase;
                _this.detailItems.bigCustNo = data.bigCustNo;
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
    BigCustomDetailComponent.prototype.queryCusList = function () {
        var _this = this;
        var param = {
            bigCustNo: this.bigCustNo,
            pageNum: this.pageNumCusList,
            pageSize: this.pageSizeCusList,
            userName: this.userName
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
    BigCustomDetailComponent.prototype.paginateCusList = function (event) {
        this.pageSizeCusList = event.rows * 1;
        this.pageNumCusList = event.page + 1;
        this.queryCusList();
    };
    //客户名单信息删除
    BigCustomDetailComponent.prototype.toDelete = function (data) {
        var _this = this;
        var temp = {
            bigCustId: data.bigId,
        };
        this.httpService.deleteBigCustInfo(temp).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '删除成功!' }];
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
    //大客户分成信息
    BigCustomDetailComponent.prototype.divideInto = function () {
        var _this = this;
        var isthis = '';
        if (this.dataValue.detail_Flag && this.dataValue.detail_Flag == '1') {
            isthis = '1'; //历史  是
        }
        else if (this.dataValue.detail_Flag && this.dataValue.detail_Flag == '0') {
            isthis = '0'; //查询  否
        }
        var param = {
            bigCustNo: this.dataValue['bigCustNo'],
            pageNum: this.pageNumDivide,
            pageSize: this.pageSizeDivide,
            isHis: isthis
        };
        this.httpService.queryBigCustManager(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.bigCustManNewList && data.bigCustManNewList.length > 0) {
                    for (var _i = 0, _a = data.bigCustManNewList; _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.divideRate = JSON.parse(JSON.stringify(item.divideRate * 100));
                    }
                    _this.dataTable = data.bigCustManNewList;
                    _this.totalDivide = data.totalNum;
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
    BigCustomDetailComponent.prototype.paginateDivide = function (event) {
        this.pageSizeDivide = event.rows * 1;
        this.pageNumDivide = event.page + 1;
        this.divideInto();
    };
    // 查询(历史)审批记录
    BigCustomDetailComponent.prototype.bpmQueryTaskList = function () {
        var _this = this;
        var param = {
            processId: '115000',
            isAllNode: true,
        };
        this.httpService.bpmQueryTaskList(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.dataApprove = data.pageData.result;
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigCustomDetailComponent.prototype, "dataValue", void 0);
    BigCustomDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bigCustomDetail',
            template: __webpack_require__(/*! ./bigCustomDetail.component.html */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomDetail/bigCustomDetail.component.html"),
            styles: [__webpack_require__(/*! ./bigCustomDetail.component.scss */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomDetail/bigCustomDetail.component.scss")],
            providers: [_http_big_cus_http_service__WEBPACK_IMPORTED_MODULE_1__["BigCusHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_big_cus_http_service__WEBPACK_IMPORTED_MODULE_1__["BigCusHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], BigCustomDetailComponent);
    return BigCustomDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomHistoryQuery/bean/bigCusHisQry.bean.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomHistoryQuery/bean/bigCusHisQry.bean.ts ***!
  \************************************************************************************************************/
/*! exports provided: BigCusHisQryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigCusHisQryBean", function() { return BigCusHisQryBean; });
var BigCusHisQryBean = /** @class */ (function () {
    function BigCusHisQryBean() {
    }
    return BigCusHisQryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomHistoryQuery/bigCustomHistoryQuery.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomHistoryQuery/bigCustomHistoryQuery.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\" *ngIf=\"permissionCheck('SID00027_01_02')\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>大客户编号:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"bigCusHisQryBean.bigCustNo\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>创建人:</span>\r\n            </div>\r\n            <div class=\"ui-g-6 queryinputbtn\">\r\n                <input class=\"queryinputOrg\" type=\"text\" placeholder=\"请选择\" pInputText disabled [(ngModel)]=\"personName\">\r\n                <div (click)=\"perShow()\" class=\"clickspan\">\r\n                    <a class=\"a-hand\">\r\n                        <span>...</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>所属机构:</span>\r\n            </div>\r\n            <div class=\"ui-g-6 queryinputbtn\">\r\n                <input class=\"queryinputOrg\" placeholder=\"请选择\" type=\"text\" pInputText [(ngModel)]=\"treeOrgName\" disabled/>\r\n                <div (click)=\"perTreeShow()\" class=\"clickspan\">\r\n                    <a class=\"a-hand\">\r\n                        <span>...</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>客户号:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"bigCusHisQryBean.custNo\" (keyup)=\"onKeyupNumber($event,2)\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>客户名称:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"bigCusHisQryBean.custName\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>操作类型:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"operationTypeOptions\" placeholder=\"请选择\" [(ngModel)]=\"bigCusHisQryBean.operationType\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>状态:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"bigCusStatusOptions\" placeholder=\"请选择\" [(ngModel)]=\"bigCusHisQryBean.statusId\"></p-dropdown>\r\n            </div>\r\n        </div> -->\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>审批状态:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"approveStatusOptions\" placeholder=\"请选择\" [(ngModel)]=\"bigCusHisQryBean.approveStatus\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>创建日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-calendar [(ngModel)]=\"startDate\" [maxDate]=\"endDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"chectStart()\" (onBlur)=\"chectStart()\"></p-calendar>\r\n                至\r\n                <p-calendar [(ngModel)]=\"endDate\" [minDate]=\"startDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"chectEnd()\" (onBlur)=\"chectEnd()\"></p-calendar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\">\r\n        <p-dataTable [value]=\"dataTable\" scrollable=\"true\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"bigCustNo\" header=\"大客户编号\" [style]=\"{'width':'110px'}\"></p-column>\r\n            <p-column field=\"custNo\" header=\"客户号\" [style]=\"{'width':'110px'}\"></p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column field=\"feeunitPrice\" header=\"费用单价(万分之)\" [style]=\"{'width':'140px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{(col.feeunitPrice/1)|number:'1.2-2'}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"createrName\" header=\"创建人\" [style]=\"{'width':'120px'}\"></p-column>\r\n            <p-column field=\"createdStamp\" header=\"创建日期\" [style]=\"{'width':'120px'}\">\r\n                <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    {{col.createdStamp|timeValuePie}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"operationType\" header=\"操作类型\" [style]=\"{'width':'120px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.operationType|codeValuePie:operationTypeOptions}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"approveStatus\" header=\"审批状态\" [style]=\"{'width':'90px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.approveStatus|codeValuePie:approveStatusOptions}}\r\n                </ng-template>\r\n            </p-column>\r\n            <!-- <p-column field=\"currentApproveStatus\" header=\"当前审批阶段\" [style]=\"{'width':'140px'}\"></p-column> -->\r\n            <p-column header=\"操作\" [style]=\"{'width':'160px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <div class=\"table-button\">\r\n                        <span class=\"tabelDetailIco\" (click)=\"toDetail(col)\" *ngIf=\"permissionCheck('SID00027_01_02_01')\">详情</span>\r\n                        <span class=\"tabelDetailSetIco\" *ngIf=\"!permissionCheck('SID00027_01_02_01')\">详情</span>\r\n                        <span class=\"tabelUpdateIco\" *ngIf=\"col.approveStatus=='0'&&permissionCheck('SID00027_01_02_02')&&(col.manageId==userId)\" (click)=\"toUpdate(col)\">修改</span>\r\n                        <span class=\"tabelUpdateSetIco\" *ngIf=\"col.approveStatus!='0'||!permissionCheck('SID00027_01_02_02')||(col.manageId!=userId)\">修改</span>\r\n                        <span class=\"tabelDeleteIco\" *ngIf=\"col.approveStatus=='0'&&permissionCheck('SID00027_01_02_03')&&(col.manageId==userId)\" (click)=\"toDelete(col)\">删除</span>\r\n                        <span class=\"tabelDeleteSetIco\" *ngIf=\"col.approveStatus!='0'||!permissionCheck('SID00027_01_02_03')||(col.manageId!=userId)\">删除</span>\r\n                        <span class=\"tabelSubmitIco\" *ngIf=\"col.approveStatus=='0'&&permissionCheck('SID00027_01_02_04')&&(col.manageId==userId)\" (click)=\"commit(col)\">提交</span>\r\n                        <span class=\"tabelSubmitIco_no\" *ngIf=\"col.approveStatus!='0'||!permissionCheck('SID00027_01_02_04')&&(col.manageId!=userId)\">提交</span>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows={{bigCusHisQryBean.pageSize}} totalRecords={{total}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n\r\n<p-dialog *ngIf=\"orgTreePage\" [(visible)]=\"orgTreePage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <org-tree-component [inValue]=\"inValue\" (outValue)=\"treeCall($event)\"></org-tree-component>\r\n</p-dialog>\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n<p-dialog *ngIf=\"detailPage\" [(visible)]=\"detailPage\" modal=\"true\" responsive=\"true\">\r\n    <p-header>\r\n        {{detailHeader}}\r\n    </p-header>\r\n    <bigCustomDetail [dataValue]=\"dataValue\"></bigCustomDetail>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"personPage\" [(visible)]=\"personPage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <queryUser (outValue)=\"perInfor($event)\"></queryUser>\r\n</p-dialog>\r\n\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n\r\n<!-- 选人服务 -->\r\n<p-dialog *ngIf=\"downloadPerson\" header=\"提交给\" modal=\"modal\" width='435' [(visible)]=\"downloadPerson\" (onHide)=\"downloadHide()\"\r\n    class=\"dialog\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomHistoryQuery/bigCustomHistoryQuery.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomHistoryQuery/bigCustomHistoryQuery.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tit {\n  text-align: right;\n  line-height: 24px;\n  padding-right: 5px !important; }\n\n.ui-g-6 .ui-g-4,\n.ui-g-6 .ui-g-6 {\n  padding: 0; }\n\n.btn,\n.table {\n  text-align: center; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-calendar {\n    min-width: 128px;\n    width: 45% !important; } }\n\n@media screen and (min-width: 1280px) {\n  :host/deep/ .ui-calendar {\n    width: 47%; } }\n\n.queryinputbtn {\n  float: left;\n  display: flex; }\n\n.queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n\n.queryinputbtn .clickspan {\n    width: 14%;\n    height: 23px;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9iaWdDdXN0b21lci9iaWctY3VzLWFwcGx5L2JpZ0N1c3RvbUhpc3RvcnlRdWVyeS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGJpZ0N1c3RvbWVyXFxiaWctY3VzLWFwcGx5XFxiaWdDdXN0b21IaXN0b3J5UXVlcnlcXGJpZ0N1c3RvbUhpc3RvcnlRdWVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsNkJBQTZCLEVBQUE7O0FBR2pDOztFQUdRLFVBQVUsRUFBQTs7QUFJbEI7O0VBRUksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0s7SUFDRyxnQkFBZ0I7SUFDaEIscUJBQXFCLEVBQUEsRUFDeEI7O0FBR0w7RUFDSztJQUNHLFVBQVUsRUFBQSxFQUNiOztBQUdMO0VBQ0ksV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFGakI7SUFJUSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQiwwQkFBMEIsRUFBQTs7QUFQbEM7SUFVUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vYmlnQ3VzdG9tZXIvYmlnLWN1cy1hcHBseS9iaWdDdXN0b21IaXN0b3J5UXVlcnkvYmlnQ3VzdG9tSGlzdG9yeVF1ZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS1nLTYge1xyXG4gICAgLnVpLWctNCxcclxuICAgIC51aS1nLTYge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4sXHJcbi50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDEyOHB4O1xyXG4gICAgICAgIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjgwcHgpIHtcclxuICAgICA6aG9zdC9kZWVwLyAudWktY2FsZW5kYXIge1xyXG4gICAgICAgIHdpZHRoOiA0NyU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5xdWVyeWlucHV0YnRuIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5xdWVyeWlucHV0T3JnIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgICAgICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNsaWNrc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomHistoryQuery/bigCustomHistoryQuery.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomHistoryQuery/bigCustomHistoryQuery.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: BigCustomHistoryQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigCustomHistoryQueryComponent", function() { return BigCustomHistoryQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_big_cus_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/big-cus.http.service */ "./src/app/pages/tzb/custom/bigCustomer/http/big-cus.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var _bean_bigCusHisQry_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bean/bigCusHisQry.bean */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomHistoryQuery/bean/bigCusHisQry.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BigCustomHistoryQueryComponent = /** @class */ (function () {
    function BigCustomHistoryQueryComponent(commfunc, router, httpService, confirmationService) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.confirmationService = confirmationService;
        this.inValue = 'take';
        this.msgs = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"]; //表格中无数据时显示的内容
        this.pageSize = 10; //
        this.pageNum = 1; //
        //总页数
        this.total = '10';
        this.detailHeader = '大客户费用详情';
        this.detailPage = false;
        this.orgTreePage = false;
        this.personId = [];
        this.personName = []; //员工
        this.personPage = false;
        this.bigCusStatusOptions = []; //大客户费用资格状态
        this.approveStatusOptions = []; //大客户费用资格审批状态
        this.operationTypeOptions = []; //大客户操作类型
        this.first = 0;
        this.dataTable = [];
        this.startDate = null; //开始日期
        this.endDate = null; //结束日期
        this.bigCusHisQryBean = new _bean_bigCusHisQry_bean__WEBPACK_IMPORTED_MODULE_7__["BigCusHisQryBean"]();
        //选人
        this.downloadPerson = false;
        this.updateListValue = [];
    }
    BigCustomHistoryQueryComponent.prototype.ngOnInit = function () {
        this.codeValues();
        this.bigCusStatusOptions = this.code['statusbigCus']; //大客户费用资格状态
        this.approveStatusOptions = this.code['approveStatusbigCus']; //大客户费用资格审批状态
        this.operationTypeOptions = this.code['operationType']; //大客户操作类型
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.userId = s.userId;
        console.log(this.userId);
        this.bigCusHisQryBean.pageNum = 1;
        this.bigCusHisQryBean.pageSize = 10;
        this.query();
    };
    //详情
    BigCustomHistoryQueryComponent.prototype.toDetail = function (data) {
        data['detail_Flag'] = '1';
        this.detailPage = true;
        this.dataValue = data;
    };
    //机构回调
    BigCustomHistoryQueryComponent.prototype.treeCall = function (param) {
        this.orgTreePage = false;
        if (param.orgId == 'T0000') {
            param.orgId = '0000';
        }
        this.treeOrgName = param.orgName;
        this.treeOrgId = param.orgId;
    };
    //机构弹框
    BigCustomHistoryQueryComponent.prototype.perTreeShow = function () {
        this.orgTreePage = true;
    };
    //创建人弹框
    BigCustomHistoryQueryComponent.prototype.perShow = function () {
        this.personPage = true;
    };
    //创建人回调
    BigCustomHistoryQueryComponent.prototype.perInfor = function (item) {
        console.log(item);
        this.personPage = false;
        this.personName = item[0].tellerName;
        this.personId = item[0].tellerId;
    };
    //码值
    BigCustomHistoryQueryComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //修改
    BigCustomHistoryQueryComponent.prototype.toUpdate = function (data) {
        data['this_Flag'] = '0';
        this.router.navigate(["pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomApply", data]);
    };
    //删除
    BigCustomHistoryQueryComponent.prototype.toDelete = function (data) {
        var _this = this;
        this.confirmationService.confirm({
            message: '是否确认删除?',
            accept: function () {
                _this.httpService.deleteBigCustHistory({ bigId: data.bigId }).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: '删除成功!' }];
                        _this.query();
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
    //翻页
    BigCustomHistoryQueryComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.bigCusHisQryBean.pageSize = event.rows * 1;
        //当前页
        this.bigCusHisQryBean.pageNum = event.page + 1;
        this.first = event.page * this.bigCusHisQryBean.pageSize;
        this.query();
    };
    //查询
    BigCustomHistoryQueryComponent.prototype.queryFirst = function () {
        this.bigCusHisQryBean.pageNum = 1;
        this.bigCusHisQryBean.pageSize = 10;
        this.first = 0;
        this.query();
    };
    BigCustomHistoryQueryComponent.prototype.query = function () {
        var _this = this;
        if (this.treeOrgId && this.treeOrgId != '') {
            this.bigCusHisQryBean.createrOrg = this.treeOrgId;
        }
        if (this.personId && this.personId != '') {
            this.bigCusHisQryBean.creater = this.personId;
        }
        this.bigCusHisQryBean.createdDateStart = this.commfunc.transDateN(this.startDate);
        this.bigCusHisQryBean.createdDateEnd = this.commfunc.transDateN(this.endDate);
        this.httpService.queryBigCustHistory(this.bigCusHisQryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataTable = data.bigCustHistRelList;
                _this.dataTable.forEach(function (item, index) {
                    _this.httpService.findUser({ custNo: _this.dataTable[index].custNo }).subscribe(function (dataUser) {
                        if (dataUser.returnCode.code == 'success') {
                            if (dataUser.infoList != null) {
                                if (dataUser.infoList.length > 0) {
                                    _this.manageId = dataUser.infoList[0].manageId;
                                    _this.dataTable[index]['manageId'] = _this.manageId;
                                    //console.log( this.dataTable);
                                }
                            }
                        }
                    });
                });
                _this.total = data.totalNum;
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
    BigCustomHistoryQueryComponent.prototype.reset = function () {
        this.bigCusHisQryBean.createrOrg = '';
        this.treeOrgId = '';
        this.treeOrgName = '';
        this.bigCusHisQryBean.creater = '';
        this.personId = '';
        this.personName = '';
        this.bigCusHisQryBean.bigCustNo = '';
        this.bigCusHisQryBean.custNo = '';
        this.bigCusHisQryBean.custName = '';
        this.startDate = null;
        this.endDate = null;
        this.bigCusHisQryBean.operationType = '';
        this.bigCusHisQryBean.statusId = '';
        this.bigCusHisQryBean.approveStatus = '';
    };
    //校验客户号只能输入数字
    BigCustomHistoryQueryComponent.prototype.onKeyupNumber = function (event, num) {
        if (event.target.value != '') {
            if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["checkNumber"])(null, event.target.value)) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '当前输入框内只能输入数字!' }];
                return;
            }
            if (num == 2) {
                if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["custNoTen"])(null, event.target.value)) {
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '客户号错误!' }];
                    return;
                }
            }
        }
    };
    //开始日期
    BigCustomHistoryQueryComponent.prototype.chectStart = function () {
        if (this.endDate && this.endDate != null && this.startDate && this.startDate != null) {
            if (this.startDate > this.endDate) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '开始时间不能大于结束日期' }];
                this.startDate = null;
                return;
            }
        }
    };
    //结束日期
    BigCustomHistoryQueryComponent.prototype.chectEnd = function () {
        if (this.endDate && this.endDate != null && this.startDate && this.startDate != null) {
            if (this.startDate > this.endDate) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: '开始时间不能大于结束日期' }];
                this.endDate = null;
                return;
            }
        }
    };
    //提交
    BigCustomHistoryQueryComponent.prototype.commit = function (col) {
        var _this = this;
        this.updateListValue = col;
        this.confirmationService.confirm({
            message: '是否确认提交?',
            accept: function () {
                // setTimeout(() => this.toSubmit(), 100);
                _this.submitNum = '1';
                _this.submit_1();
            }
        });
    };
    // //提交审批
    // toSubmit() {
    //     this.confirmationService.confirm({
    //         message: '是否已享受差异化?',
    //         accept: () => {
    //             this.submitNum = '0';
    //             this.submit_1();
    //         },
    //         reject: () => {
    //             this.submitNum = '1';
    //             this.submit_1();
    //         }
    //     });
    // }
    BigCustomHistoryQueryComponent.prototype.submit_1 = function () {
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (s.extParam.specifyNextOpers) {
            delete s.extParam.specifyNextOpers;
            var commonHeader = s;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        }
        this.waitSelUserList = this.commfunc.query('DKHFYSQ', {});
        if (!this.waitSelUserList.erro) {
            this.outVal = this.waitSelUserList.waitSelUserList;
            var chooseThis = this.waitSelUserList.display;
            var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            var a2 = commonHeader.extParam.specifyNextOpers;
            if (chooseThis == true && (a2 == undefined || a2 == '' || a2 == null)) {
                this.downloadPerson = true;
            }
            else {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '没有审批人无法提交!' }];
                return;
            }
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
        }
    };
    //提交审批
    BigCustomHistoryQueryComponent.prototype.submit_2 = function () {
        var _this = this;
        var param = {
            bigCustNo: this.updateListValue.bigCustNo,
            bigId: this.updateListValue.bigId,
            isDiff: this.submitNum
        };
        this.httpService.approveBigCustApplication(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '提交成功!' }];
                _this.queryFirst();
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
    BigCustomHistoryQueryComponent.prototype.outDisplayCall = function (event) {
        this.downloadPerson = event;
    };
    BigCustomHistoryQueryComponent.prototype.outValueCall = function (event) {
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.submit_2();
    };
    BigCustomHistoryQueryComponent.prototype.downloadHide = function () {
        this.downloadPerson = false;
    };
    //绑定权限id
    BigCustomHistoryQueryComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    BigCustomHistoryQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bigCustomHistoryQuery',
            template: __webpack_require__(/*! ./bigCustomHistoryQuery.component.html */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomHistoryQuery/bigCustomHistoryQuery.component.html"),
            styles: [__webpack_require__(/*! ./bigCustomHistoryQuery.component.scss */ "./src/app/pages/tzb/custom/bigCustomer/big-cus-apply/bigCustomHistoryQuery/bigCustomHistoryQuery.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"], _http_big_cus_http_service__WEBPACK_IMPORTED_MODULE_3__["BigCusHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _http_big_cus_http_service__WEBPACK_IMPORTED_MODULE_3__["BigCusHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]])
    ], BigCustomHistoryQueryComponent);
    return BigCustomHistoryQueryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=big-cus-apply-big-cus-apply-module.js.map