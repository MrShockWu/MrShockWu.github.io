(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deposit-product-flexible-pricing-deposit-product-flexible-pricing-module"],{

/***/ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product-exam/add-deposit-product-exam.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product-exam/add-deposit-product-exam.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>事项类型:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{detailList.bigClassName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>事项类型:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{detailList.littleClassName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>发起人:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{detailList.workCreateName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <div class=\"ui-g-4 tit\">\r\n                <span>创建日期:</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{detailList.createDate}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n        <p-dataTable [value]=\"tabTable\" [style]=\"{'text-align':'center'}\" scrollable=\"true\" scrollWidth=\"'100%'\">\r\n            <!-- <p-column field=\"custId\" header=\"客户号\"></p-column>\r\n            <p-column field=\"custName\" header=\"客户姓名\"></p-column>\r\n            <p-column field=\"currency\" header=\"币种\"></p-column>\r\n            <p-column field=\"accountNo\" header=\"存款账户号\"></p-column>\r\n            <p-column field=\"subjectNum\" header=\"科目号\"></p-column>\r\n            <p-column field=\"accountProductType\" header=\"账户产品类型\"></p-column>\r\n            <p-column field=\"productType\" header=\"产品类型\"></p-column>\r\n            <p-column field=\"depositAmount\" header=\"存款金额\"></p-column>\r\n            <p-column field=\"floatPoint\" header=\"浮动加点\"></p-column>\r\n            <p-column field=\"floatRatio\" header=\"浮动加比\"></p-column>\r\n            <p-column field=\"appointAverageDaily\" header=\"约定日均\"></p-column>\r\n            <p-column field=\"executeRate\" header=\"执行利率\"></p-column>\r\n            <p-column field=\"bigCustMark\" header=\"大客户费用标识\"></p-column>\r\n            <p-column field=\"applyReason\" header=\"申请理由\"></p-column>\r\n            <p-column field=\"fileName\" header=\"文件名\"></p-column> -->\r\n            <p-column field=\"{{item.value}}\" header=\"{{item.label}}\" *ngFor=\"let item of fieldHeaderList1\"></p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"fieldHeaderList2 && fieldHeaderList2.length != 0\">\r\n        <p-dataTable [value]=\"tabTable\" [style]=\"{'text-align':'center'}\" scrollable=\"true\" scrollWidth=\"'100%'\">\r\n            <p-column field=\"{{item.value}}\" header=\"{{item.label}}\" *ngFor=\"let item of fieldHeaderList2\"></p-column>\r\n        </p-dataTable>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n        <examine-page [flexiblePricing]=\"flexiblePricing\"></examine-page>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product-exam/add-deposit-product-exam.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product-exam/add-deposit-product-exam.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vZGVwb3NpdC1wcm9kdWN0LWZsZXhpYmxlLXByaWNpbmcvYWRkLWRlcG9zaXQtcHJvZHVjdC1leGFtL2FkZC1kZXBvc2l0LXByb2R1Y3QtZXhhbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product-exam/add-deposit-product-exam.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product-exam/add-deposit-product-exam.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: AddDepositProductExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDepositProductExamComponent", function() { return AddDepositProductExamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddDepositProductExamComponent = /** @class */ (function () {
    function AddDepositProductExamComponent(httpService, commfunc, activatedRoute) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.activatedRoute = activatedRoute;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"];
        this.msgs = [];
        this.tabTable = [];
        this.fieldList = [
            { label: '序号', value: 'seqNo' },
            { label: '客户号', value: 'custId' },
            { label: '客户姓名', value: 'custName' },
            { label: '币种', value: 'currency' },
            { label: '存款账户号', value: 'accountNo' },
            { label: '科目号', value: 'subjectNum' },
            { label: '账户产品类型', value: 'accountProductType' },
            { label: '产品类型', value: 'productType' },
            { label: '存款金额', value: 'depositAmount' },
            { label: '原约定利率', value: 'originalExecuteRate' },
            { label: '浮动加点', value: 'floatPoint' },
            { label: '浮动加比', value: 'floatRatio' },
            { label: '约定日均', value: 'appointAverageDaily' },
            { label: '执行利率', value: 'executeRate' },
            { label: '是否赠送积数比例标识', value: 'isProductRatio' },
            { label: '大客户费用标识', value: 'bigCustMark' },
            { label: '申请理由', value: 'applyReason' },
            { label: '文件url', value: 'filePath' },
            { label: '文件名', value: 'fileName' },
            { label: '状态', value: 'status' },
            { label: '创建人', value: 'creater' },
            { label: '创建人名称', value: 'createrName' },
            { label: '创建人机构', value: 'createrOrg' },
            { label: '创建人机构名称', value: 'createrOrgName' },
            { label: '亲情账户1', value: 'famAccoAcctNo1' },
            { label: '亲情账户2', value: 'famAccoAcctNo2' },
            { label: '亲情账户3', value: 'famAccoAcctNo3' },
            { label: '亲情账户4', value: 'famAccoAcctNo4' },
            { label: '亲情账户5', value: 'famAccoAcctNo5' },
        ];
        this.flexiblePricing = true;
    }
    AddDepositProductExamComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 获取参数
        this.activatedRoute.params.subscribe(function (params) {
            _this.detailList = params;
        });
        if (this.detailList.seqNo) {
            this.queryFlexibleDepositInterest({ seqNo: this.detailList.seqNo });
        }
    };
    AddDepositProductExamComponent.prototype.queryFlexibleDepositInterest = function (params) {
        var _this = this;
        this.httpService.queryFlexibleDepositInterest(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tabTable = data.resultList;
                if (data.resultList && data.resultList.length != 0) {
                    _this.fieldHeaderList1 = [];
                    _this.fieldHeaderList2 = [];
                    _this.fieldList.forEach(function (element) {
                        for (var item in data.resultList[0]) {
                            if (element.value == item && data.resultList[0][item]) {
                                var objTemp = { label: element.label, value: item };
                                if (element.value == 'famAccoAcctNo1' || element.value == 'famAccoAcctNo2' || element.value == 'famAccoAcctNo3' || element.value == 'famAccoAcctNo4' || element.value == 'famAccoAcctNo5') {
                                    _this.fieldHeaderList2.push(objTemp);
                                }
                                else {
                                    _this.fieldHeaderList1.push(objTemp);
                                }
                            }
                        }
                    });
                    console.log(_this.fieldHeaderList2);
                    console.log(_this.fieldHeaderList1);
                }
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    AddDepositProductExamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-deposit-product-exam',
            template: __webpack_require__(/*! ./add-deposit-product-exam.component.html */ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product-exam/add-deposit-product-exam.component.html"),
            styles: [__webpack_require__(/*! ./add-deposit-product-exam.component.scss */ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product-exam/add-deposit-product-exam.component.scss")]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AddDepositProductExamComponent);
    return AddDepositProductExamComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product/add-deposit-product.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product/add-deposit-product.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"'存款账户利率浮动申请'\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12 padding-0\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">存款账号/卡号：</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"accountNo\" [readonly]=\"flag1\" (blur)=\"query()\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">序号：</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"acctSerialNo\" (blur)=\"query()\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">客户号:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"custId\" [readonly]=\"flag2\">\r\n                <!--  (keydown)=\"keydown($event)\" -->\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">客户名称:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"custName\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">产品类型:</div>\r\n            <div class=\"ui-g-4\">\r\n                <p-dropdown [options]=\"productTypeList\" [(ngModel)]=\"productType\" (onChange)=\"productChange()\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- 外币字段 -->\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"display9\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">币种:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"currencyLabel\" disabled=\"true\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"familyIdentification\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">家庭标识:</div>\r\n            <div class=\"ui-g-4\">\r\n                <p-dropdown [options]=\"countTypeList\" [(ngModel)]=\"countType\" (onChange)=\"countTypeChange()\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"familyAccountDisplay\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">亲情账户1:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"famAccoAcctNo1\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"familyAccountDisplay\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">亲情账户序号1:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"famAccoAcctNo1ASN\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"familyAccountDisplay\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">亲情账户2:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"famAccoAcctNo2\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"familyAccountDisplay\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">亲情账户序号2:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"famAccoAcctNo2ASN\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"familyAccountDisplay\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">亲情账户3:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"famAccoAcctNo3\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"familyAccountDisplay\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">亲情账户序号3:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"famAccoAcctNo3ASN\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"familyAccountDisplay\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">亲情账户4:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"famAccoAcctNo4\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"familyAccountDisplay\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">亲情账户序号4:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"famAccoAcctNo4ASN\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"familyAccountDisplay\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">亲情账户5:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"famAccoAcctNo5\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"familyAccountDisplay\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">亲情账户序号5:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"famAccoAcctNo5ASN\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"display1\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">存款金额:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"depositAmount\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"display2\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">申请利率:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"executeRate\" [disabled]=\"readonly2\" (input)=\"float()\">\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"ui-g-12 padding-0\" *ngIf=\"display2\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">申请利率:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"executeRate\" [readonly]=\"readonly2\" (input)=\"float()\">\r\n            </div>\r\n        </div> -->\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"display3\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">加点:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"floatPoint\" (input)=\"float()\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"display4\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">浮动比例:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"floatRatio\" (input)=\"float()\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"display5\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">约定日均:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"appointAverageDaily\" readonly [disabled]=\"disabled1\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"display6\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">约定日均利率:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"appointAverageDailyRate\" readonly [disabled]=\"disabled1\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"display7\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">执行利率:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"executeRate2\" readonly>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"display8\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">大客户费用:</div>\r\n            <div class=\"ui-g-4\">\r\n                <p-dropdown [options]=\"bigCustMarkFlag\" [(ngModel)]=\"bigCustMark\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\">\r\n            <!--  *ngIf=\"display7\" -->\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">申请理由:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"applyReason\">\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 padding-0\">\r\n            <div class=\"ui-g-3\"></div>\r\n            <div class=\"ui-g-2 textAlign\">附件:</div>\r\n            <div class=\"ui-g-4\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"file\" (click)=\"showDialog(2)\">\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"ui-g-12 padding-0\"> -->\r\n        <!-- <div class=\"ui-g-4\">\r\n                <label for=\"\">产品类型:</label>\r\n                <p-dropdown [options]=\"productTypeList\" [(ngModel)]=\"productType\" (onChange)=\"productChange()\"></p-dropdown>\r\n            </div>\r\n            <div class=\"ui-g-4\" *ngIf=\"display1\">\r\n                <label for=\"\">存款金额:</label>\r\n                <input type=\"text\" pInputText [(ngModel)]=\"depositAmount\">\r\n            </div> -->\r\n        <!-- <div class=\"ui-g-4\" *ngIf=\"display2\">\r\n                <label for=\"\">申请利率:</label>\r\n                <input type=\"text\" pInputText [(ngModel)]=\"executeRate\" [readonly]=\"readonly2\" (input)=\"float()\">\r\n            </div> -->\r\n        <!-- <div class=\"ui-g-4\" *ngIf=\"display3\">\r\n                <label for=\"\">加点:</label>\r\n                <input type=\"text\" pInputText [(ngModel)]=\"floatPoint\" (input)=\"float()\">\r\n            </div> -->\r\n        <!-- <div class=\"ui-g-4\" *ngIf=\"display4\">\r\n                <label for=\"\">浮动比例:</label>\r\n                <input type=\"text\" pInputText [(ngModel)]=\"floatRatio\" (input)=\"float()\">\r\n            </div> -->\r\n        <!-- <div class=\"ui-g-4\" *ngIf=\"display5\">\r\n                <label for=\"\">约定日均:</label>\r\n                <input type=\"text\" pInputText [(ngModel)]=\"appointAverageDaily\" readonly>\r\n            </div>\r\n            <div class=\"ui-g-4\" *ngIf=\"display6\">\r\n                <label for=\"\">约定日均利率:</label>\r\n                <input type=\"text\" pInputText [(ngModel)]=\"appointAverageDailyRate\" readonly>\r\n            </div> -->\r\n        <!-- <div class=\"ui-g-4\" *ngIf=\"display7\">\r\n                <label for=\"\">执行利率:</label>\r\n                <input type=\"text\" pInputText [(ngModel)]=\"executeRate2\" readonly>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"\">大客户费用:</label>\r\n                <p-dropdown [options]=\"bigCustMarkFlag\" [(ngModel)]=\"bigCustMark\"></p-dropdown>\r\n            </div> -->\r\n        <!-- <div class=\"ui-g-4\">\r\n                <label for=\"\">申请理由:</label>\r\n                <input type=\"text\" pInputText [(ngModel)]=\"applyReason\">\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"\">附件:</label>\r\n                <input type=\"text\" pInputText [(ngModel)]=\"file\" (click)=\"showDialog(2)\">\r\n            </div> -->\r\n        <!-- </div> -->\r\n        <div class=\"ui-g-12 text-c\">\r\n            <button pButton label=\"保存\" (click)=\"submit1('0')\"></button>\r\n            <button pButton label=\"提交\" (click)=\"submit1('1')\"></button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- 存款列表 -->\r\n<p-dialog *ngIf=\"dialogDisplay\" [(visible)]=\"dialogDisplay\" modal=\"modal\" [positionTop]=10>\r\n    <div>这是存款列表</div>\r\n</p-dialog>\r\n\r\n<!-- 数据口径上传 -->\r\n<p-dialog *ngIf=\"uploadDisplay\" [(visible)]=\"uploadDisplay\" [responsive]=\"true\" [positionTop]=10 modal=\"true\">\r\n    <p-fileUpload accept=\".doc\" invalidFileTypeMessageDetail=\"只能上传doc\" invalidFileTypeMessageSummary=\"\" chooseLabel=\"浏览\" uploadLabel=\"上传\"\r\n        cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"onBeforeSend($event)\">\r\n    </p-fileUpload>\r\n</p-dialog>\r\n\r\n<!-- msg -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<p-dialog *ngIf=\"dealPerShow\" [(visible)]=\"dealPerShow\" header=\"提交给\" baseZIndex=\"1\" modal=\"true\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product/add-deposit-product.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product/add-deposit-product.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding-0 {\n  padding: 0; }\n\n.text-c {\n  text-align: center; }\n\n.ui-g-4 label {\n  float: left;\n  width: 110px;\n  height: 25px;\n  line-height: 25px; }\n\n.textAlign {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9kZXBvc2l0LXByb2R1Y3QtZmxleGlibGUtcHJpY2luZy9hZGQtZGVwb3NpdC1wcm9kdWN0L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcZGVwb3NpdC1wcm9kdWN0LWZsZXhpYmxlLXByaWNpbmdcXGFkZC1kZXBvc2l0LXByb2R1Y3RcXGFkZC1kZXBvc2l0LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFFUSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFPekI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vZGVwb3NpdC1wcm9kdWN0LWZsZXhpYmxlLXByaWNpbmcvYWRkLWRlcG9zaXQtcHJvZHVjdC9hZGQtZGVwb3NpdC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRpbmctMCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udGV4dC1jIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnVpLWctNCB7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIH0gLy8gaW5wdXQge1xyXG4gICAgLy8gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgLy8gICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5NXB4KTtcclxuICAgIC8vIH1cclxufVxyXG5cclxuLnRleHRBbGlnbiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLy8gOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3duIHtcclxuLy8gICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA5NXB4KSAhaW1wb3J0YW50O1xyXG4vLyB9Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product/add-deposit-product.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product/add-deposit-product.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: AddDepositProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDepositProductComponent", function() { return AddDepositProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddDepositProductComponent = /** @class */ (function () {
    // isAddFlag : boolean = false;
    function AddDepositProductComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.outValueEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"];
        this.msgs = [];
        this.bigCustMarkFlag = [
            { label: '请选择', value: '' },
            { label: '是', value: '1' },
            { label: '否', value: '0' }
        ];
        this.flag1 = false;
        this.flag2 = false;
        this.dialogDisplay = false;
        this.display1 = false;
        this.display2 = false;
        this.display3 = false;
        this.display4 = false;
        this.display5 = false;
        this.display6 = false;
        this.display7 = false;
        this.display8 = false;
        this.display9 = false;
        this.uploadDisplay = false;
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_4__["TZB_CUS_UPLOAD"];
        this.readonly2 = false;
        this.disabled1 = false;
        this.dealPerShow = false;
        this.bussinessMap = {
            amountLevel: '',
            amountLevelMode: ''
        };
        this.countTypeList = [
            { label: '单户', value: '0' },
            { label: '家庭', value: '1' }
        ];
        this.familyAccountDisplay = false;
        this.famAccoAcctNo1 = '';
        this.famAccoAcctNo2 = '';
        this.famAccoAcctNo3 = '';
        this.famAccoAcctNo4 = '';
        this.famAccoAcctNo5 = '';
        this.famAccoAcctNo1ASN = '';
        this.famAccoAcctNo2ASN = '';
        this.famAccoAcctNo3ASN = '';
        this.famAccoAcctNo4ASN = '';
        this.famAccoAcctNo5ASN = '';
        this.familyIdentification = false;
        this.currencyCode = [
            { label: '请选择', value: '' },
            { label: '人民币', value: 'RMB' },
            { label: '英镑', value: 'GBP' },
            { label: '港币', value: 'HKD' },
            { label: '美元', value: 'USD' },
            { label: '日元', value: 'JPY' },
            { label: '欧元', value: 'EUR' }
        ];
    }
    AddDepositProductComponent.prototype.ngOnInit = function () {
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (s.extParam.specifyNextOpers || s.extParam.bussinessMap) {
            delete s.extParam.specifyNextOpers;
            delete s.extParam.bussinessMap;
            var commonHeader = s;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        }
        if (this.inValueItem) {
            this.accountNo = this.inValueItem;
            this.flag1 = true;
            this.queryDepositAccountInfo();
        }
        else {
            this.accountNo = '';
            this.flag1 = false;
        }
    };
    AddDepositProductComponent.prototype.productChange = function () {
        this.accountProductType = this.accountProductTypeLocal;
        this.executeRate = this.executeRateLocal;
        this.appointAverageDailyRate = this.appointAverageDailyRateLocal;
        this.appointAverageDaily = this.appointAverageDailyLocal;
        this.currency = this.currencyValue;
        this.floatPoint = '';
        this.floatRatio = '';
        if (this.productTypeList.length > 1) {
            this.returnFalse();
            if (this.currency == 'CNY') {
                this.readonly2 = false;
                this.disabled1 = false;
                this.display8 = true;
                this.display9 = false;
                switch (this.accountProductType) {
                    case '1': //201活期科目
                    case '4': //活期保证金
                        if (this.productType == '3') {
                            this.returnTrue([1, 2, 7]);
                        }
                        else if (this.productType == '4') {
                            this.readonly2 = true;
                            this.returnTrue([1, 2, 3, 4, 7]);
                        }
                        else if (this.productType == '1') {
                            this.returnTrue([1, 2, 5, 6, 7]);
                            this.executeRate = this.appointAverageDailyRate;
                            this.executeRate2 = this.executeRate;
                            this.disabled1 = true;
                        }
                        else if (this.productType == '2') {
                            this.returnTrue([]);
                        }
                        break;
                    case '2': //215定期科目
                    case '5': //定期保证金
                        if (this.productType == '3') {
                            this.returnTrue([1, 2, 7]);
                            this.executeRate2 = this.executeRate;
                        }
                        else if (this.productType == '1') {
                            this.disabled1 = true;
                            this.executeRate = this.appointAverageDailyRate;
                            this.returnTrue([1, 2, 5, 6, 7]);
                            this.executeRate2 = this.appointAverageDailyRateLocal;
                        }
                        else if (this.productType == '2') {
                            this.readonly2 = true;
                            this.returnTrue([]);
                        }
                        break;
                    case '3': //215定期财运通科目
                        // if(this.productType == '1'){
                        //   this.returnTrue([1, 2, 3, 4, 7]);
                        // }else if(this.productType == '4'){
                        //   this.returnTrue([1, 2, 3, 4, 7]);
                        // }
                        this.readonly2 = true;
                        this.returnTrue([1, 3, 4]);
                        break;
                }
            }
            else { //外币
                this.returnTrue([2]);
            }
        }
    };
    AddDepositProductComponent.prototype.countTypeChange = function () {
        if (this.countType && this.countType == '1') {
            this.familyAccountDisplay = true;
        }
        else {
            this.familyAccountDisplay = false;
            this.famAccoAcctNo1 = '';
            this.famAccoAcctNo2 = '';
            this.famAccoAcctNo3 = '';
            this.famAccoAcctNo4 = '';
            this.famAccoAcctNo5 = '';
            this.famAccoAcctNo1ASN = '';
            this.famAccoAcctNo2ASN = '';
            this.famAccoAcctNo3ASN = '';
            this.famAccoAcctNo4ASN = '';
            this.famAccoAcctNo5ASN = '';
        }
    };
    AddDepositProductComponent.prototype.float = function () {
        if (this.display3 && this.display4) {
            //利率*（1+浮动比例/100）+上浮点数/100
            if (this.executeRate && this.floatRatio && this.floatPoint) {
                if (Number(this.executeRate) + '' == 'NaN' || Number(this.floatRatio) + '' == 'NaN' || Number(this.floatPoint) + '' == 'NaN') {
                    return;
                }
                this.appointAverageDailyRate = this.executeRate;
                this.executeRate2 = parseFloat(this.executeRate) * (1 + parseFloat(this.floatRatio) / 100) + parseFloat(this.floatPoint) / 100 + '';
                console.log(this.executeRate2);
            }
        }
        else {
            this.executeRate2 = this.executeRate;
        }
    };
    AddDepositProductComponent.prototype.query = function () {
        if (this.accountNo) {
            if (this.accountNo == '') {
                this.flag2 = false;
            }
            else {
                this.queryDepositAccountInfo();
            }
        }
    };
    AddDepositProductComponent.prototype.keydown = function (event) {
        var e = event || window.event;
        console.log(e.keyCode);
        if (e && e.keyCode == 13) { //enter 键盘事件
            this.dialogDisplay = true;
            this.selectImportHoldDepositInfo();
        }
    };
    AddDepositProductComponent.prototype.showDialog = function (i) {
        if (i == 2) {
            this.uploadDisplay = true;
        }
    };
    AddDepositProductComponent.prototype.queryDepositAccountInfo = function () {
        var _this = this;
        var params = {
            accountNo: this.accountNo,
            acctSerialNo: this.acctSerialNo,
        };
        this.httpService.queryDepositAccountInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.returnFalse();
                _this.bigCustMark = '';
                _this.productType = '';
                _this.flag2 = true;
                _this.custId = data.custId;
                _this.custName = data.custName;
                _this.productTypeList = data.productTypeList;
                if (data.productTypeList && data.productTypeList.length != 0) {
                    _this.productTypeList = _this.transList(data.productTypeList);
                }
                _this.accountProductTypeLocal = data.accountProductType;
                _this.executeRateLocal = data.executeRate;
                _this.appointAverageDailyRateLocal = data.appointAverageDailyRate;
                _this.appointAverageDailyLocal = data.appointAverageDaily;
                _this.currencyValue = data.currency;
                //外币
                if (data.currency && (data.currency == 'GBP' || data.currency == 'HKD' || data.currency == 'USD' || data.currency == 'EUR' || data.currency == 'JPY')) {
                    _this.familyIdentification = true;
                    _this.countType = '0';
                    _this.display8 = false;
                    _this.display9 = true;
                    _this.currencyCode.forEach(function (el) {
                        if (el.value == _this.currencyValue) {
                            _this.currencyLabel = el.label;
                        }
                    });
                    // this.currency = data.currency;
                }
                else {
                    _this.familyIdentification = false;
                    _this.countType = '';
                    _this.famAccoAcctNo1 = '';
                    _this.famAccoAcctNo2 = '';
                    _this.famAccoAcctNo3 = '';
                    _this.famAccoAcctNo4 = '';
                    _this.famAccoAcctNo5 = '';
                    _this.famAccoAcctNo1ASN = '';
                    _this.famAccoAcctNo2ASN = '';
                    _this.famAccoAcctNo3ASN = '';
                    _this.famAccoAcctNo4ASN = '';
                    _this.famAccoAcctNo5ASN = '';
                }
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    AddDepositProductComponent.prototype.selectImportHoldDepositInfo = function () {
        var _this = this;
        var params = {
            custNo: this.custId
        };
        this.httpService.selectImportHoldDepositInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.flag1 = true;
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    AddDepositProductComponent.prototype.transList = function (list) {
        var temp = [{ label: '请选择', value: '' }];
        for (var k in list) {
            var tempObj = { label: '', value: '' };
            tempObj['value'] = k;
            tempObj['label'] = list[k];
            temp.push(tempObj);
        }
        return temp;
    };
    AddDepositProductComponent.prototype.returnFalse = function () {
        this.display1 = false;
        this.display2 = false;
        this.display3 = false;
        this.display4 = false;
        this.display5 = false;
        this.display6 = false;
        this.display7 = false;
    };
    AddDepositProductComponent.prototype.returnTrue = function (list) {
        var _this = this;
        if (list && list.length != 0) {
            list.forEach(function (element) {
                _this["display" + element] = true;
            });
        }
    };
    // 上传点击,需跨域
    AddDepositProductComponent.prototype.onBeforeSend = function (event) {
        if (event.xhr.response) {
            this.fileList = JSON.parse(event.xhr.response);
            if (this.fileList.hasOwnProperty('errorMsg')) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: this.fileList.errorMsg });
                return;
            }
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: '提示', detail: '上传成功' });
            this.filePath = this.fileList[0].fileUrl;
            this.fileName = this.fileList[0].fileName;
            this.file = this.fileList[0].fileName;
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '获取服务器列表失败！' }];
        }
    };
    AddDepositProductComponent.prototype.submit1 = function (i) {
        var _this = this;
        debugger;
        if (i == '0') { //保存
            this.submit2(i);
        }
        else {
            var floatPoint = void 0;
            if (this.floatPoint) {
                floatPoint = this.floatPoint;
            }
            else {
                floatPoint = '0';
            }
            var params = {
                custId: this.custId,
                custName: this.custName,
                currency: this.currency,
                accountNo: this.accountNo,
                accountProductType: this.accountProductType,
                productType: this.productType,
                depositAmount: this.depositAmount,
                floatPoint: floatPoint,
                floatRatio: this.floatRatio,
                appointAverageDaily: this.appointAverageDaily,
                // executeRate: this.executeRate2,
                isProductRatio: '0',
                bigCustMark: this.bigCustMark,
                applyReason: this.applyReason,
                filePath: this.filePath,
                fileName: this.fileName,
                operationType: i,
                acctSerialNo: this.acctSerialNo,
            };
            this.executeRate2 ? params['executeRate'] = this.executeRate2 : params['executeRate'] = this.executeRate;
            this.countType ? params['countType'] = this.countType : params['countType'] = '';
            this.httpService.queryFlexibleDepositOrgPost(params).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.bussinessMap.amountLevel = data.amountLevel;
                    _this.bussinessMap.amountLevelMode = data.amountLevelMode;
                    _this.waitSelUserList = _this.commfunc.query('CKZH_LHJX', { amountLevel: data.amountLevel, amountLevelMode: data.amountLevelMode }); //选人
                    if (!_this.waitSelUserList.erro) {
                        _this.outVal = _this.waitSelUserList.waitSelUserList;
                        var chooseThis = _this.waitSelUserList.display;
                        var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        var a = commonHeader.extParam.specifyNextOpers;
                        if (chooseThis == true && (a == undefined || a == '' || a == null)) {
                            _this.dealPerShow = true;
                        }
                        else {
                            _this.submit2(i);
                        }
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: _this.waitSelUserList.erro });
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
            });
        }
    };
    AddDepositProductComponent.prototype.submit2 = function (i) {
        var _this = this;
        var floatPoint;
        if (this.floatPoint) {
            floatPoint = this.floatPoint;
        }
        else {
            floatPoint = '0';
        }
        var tempObj = {};
        for (var i_1 = 1; i_1 <= 5; i_1++) {
            tempObj["famAccoAcctNo" + i_1] = this["famAccoAcctNo" + i_1];
            tempObj["famAccoAcctNo" + i_1 + "ASN"] = this["famAccoAcctNo" + i_1 + "ASN"];
        }
        var params = {
            custId: this.custId,
            custName: this.custName,
            currency: this.currency,
            accountNo: this.accountNo,
            accountProductType: this.accountProductType,
            productType: this.productType,
            depositAmount: this.depositAmount,
            floatPoint: floatPoint,
            floatRatio: this.floatRatio,
            appointAverageDaily: this.appointAverageDaily,
            // executeRate: this.executeRate2,
            isProductRatio: '0',
            bigCustMark: this.bigCustMark,
            applyReason: this.applyReason,
            filePath: this.filePath,
            fileName: this.fileName,
            operationType: i,
            acctSerialNo: this.acctSerialNo,
        };
        Object.assign(params, tempObj);
        console.log(params);
        this.executeRate2 ? params['executeRate'] = this.executeRate2 : params['executeRate'] = this.executeRate;
        this.countType ? params['countType'] = this.countType : params['countType'] = '';
        this.httpService.createFlexibleDepositInterest(params).subscribe(function (data) {
            var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
            if (s.extParam.specifyNextOpers) {
                delete s.extParam.specifyNextOpers;
            }
            if (s.bussinessMap) {
                delete s.bussinessMap;
            }
            var commonHeader = s;
            _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
            if (data.returnCode.code == 'success') {
                _this.uploadDisplay = false;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '调用成功' });
                _this.outValueEmit.emit(true);
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //
    AddDepositProductComponent.prototype.outDisplayCall = function (event) {
        this.dealPerShow = event;
    };
    //选人回调
    AddDepositProductComponent.prototype.outValueCall = function (event) {
        console.log(event);
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        debugger;
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        commonHeader['bussinessMap'] = this.bussinessMap;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.submit2('1');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddDepositProductComponent.prototype, "outValueEmit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddDepositProductComponent.prototype, "inValueItem", void 0);
    AddDepositProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-deposit-product',
            template: __webpack_require__(/*! ./add-deposit-product.component.html */ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product/add-deposit-product.component.html"),
            styles: [__webpack_require__(/*! ./add-deposit-product.component.scss */ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product/add-deposit-product.component.scss")]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], AddDepositProductComponent);
    return AddDepositProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/deposit-product-flexible-pricing.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/deposit-product-flexible-pricing/deposit-product-flexible-pricing.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n    <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"'存款灵活定价查询'\"></header-title>\r\n    </div>\r\n    <form [formGroup]=\"selectForm\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-2\"></div>\r\n                <div class=\"ui-g-4\" style=\"text-align: right;\">\r\n                    客户号：\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" pInputText formControlName=\"custId\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4\" style=\"text-align: right;\">\r\n                    客户姓名：\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" pInputText formControlName=\"custName\">\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-2\"></div>\r\n                <div class=\"ui-g-4\" style=\"text-align: right;\">\r\n                    存款账户号：\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <input type=\"text\" pInputText formControlName=\"accountNo\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4\" style=\"text-align: right;\">\r\n                    币种：\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-dropdown [options]=\"currencyCode\" formControlName=\"currency\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-2\"></div>\r\n                <div class=\"ui-g-4\" style=\"text-align: right;\">\r\n                    状态：\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <p-dropdown [options]=\"status\" formControlName=\"status\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-12 btn-return\">\r\n                <button type=\"button\" (click)=\"doquery()\">查询</button>\r\n                <button type=\"button\" (click)=\"reset()\">重置</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"btn-add\" style=\"text-align: right\">\r\n            <span class=\"icoColor\" (click)=\"add()\" *ngIf=\"permissionCheck('SID00027_05_P001')\">新增</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 tab\">\r\n        <p-dataTable [style]=\"{'width':'100%'}\" scrollable=\"true\" scrollWidth=\"'100%'\" [value]=\"tabTable\">\r\n            <!-- <p-column [style]=\"{'width':'80px'}\" selectionMode=\"single\"></p-column> -->\r\n            <p-column header=\"序号\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span>{{ri+1}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"custId\" header=\"客户号\"></p-column>\r\n            <p-column field=\"custName\" header=\"客户姓名\" [style]=\"{'width':'200px'}\"></p-column>\r\n            <p-column field=\"accountNo\" header=\"存款账户号\" [style]=\"{'width':'200px'}\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span *ngIf=\"item.status != '待复核' && item.status != '已签约'\" class=\"groupNumStyle\" (click)=\"toDetail(item)\">{{item.accountNo}}</span>\r\n                    <span *ngIf=\"item.status == '待复核' || item.status == '已签约'\">{{item.accountNo}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"币种\">\r\n                <ng-template let-item=\"rowData\" pTemplate=\"body\">\r\n                    <span>{{item.currency | codeValuePie:currencyCode}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"productType\" header=\"产品类型\"></p-column>\r\n            <p-column field=\"depositAmount\" header=\"存款金额\"></p-column>\r\n            <p-column field=\"executeRate\" header=\"执行利率\"></p-column>\r\n            <p-column field=\"bigCustMark\" header=\"大客户费用标识\"></p-column>\r\n            <p-column field=\"createrName\" header=\"创建人\"></p-column>\r\n            <p-column field=\"createdStamp\" header=\"创建时间\"></p-column>\r\n            <!-- <p-column field=\"approvedTime\" header=\"审批结束时间\"></p-column> -->\r\n            <p-column field=\"status\" header=\"状态\"></p-column>\r\n            <p-column field=\"\" header=\"详情\">\r\n                <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n                    <span class=\"tabelDetailIco\" (click)=\"toSee(col)\">查看</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <!-- 分页 -->\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator [first]=\"first\" [rows]=\"pageSize\" [totalRecords]=\"totalNum\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n\r\n<tzb-loading [blocked]=\"loadingShow.flag\"></tzb-loading>\r\n\r\n<p-dialog [(visible)]=\"dialogDisplay\" *ngIf=\"dialogDisplay\" modal=\"true\" width=\"1000\" height=\"800\" baseZIndex=\"2\" (onHide)=\"onHide()\">\r\n    <p-header>\r\n        {{modalName}}\r\n    </p-header>\r\n    <add-deposit-product *ngIf=\"dialogDisplay\" (outValueEmit)=\"call($event)\" [inValueItem]=\"inValueItem\"></add-deposit-product>\r\n</p-dialog>\r\n\r\n<p-dialog [(visible)]=\"famliyDisplay\" *ngIf=\"famliyDisplay\" modal=\"true\" width=\"1000\" height=\"800\" baseZIndex=\"2\" (onHide)=\"onHide()\">\r\n    <div class=\"ui-g-12 padding-0\" *ngIf=\"dataObj.famAccoAcctNo1\">\r\n        <div class=\"ui-g-3\"></div>\r\n        <div class=\"ui-g-2 textAlign\">亲情账户1：</div>\r\n        <div class=\"ui-g-4\">\r\n            <label for=\"\">{{dataObj.famAccoAcctNo1}}</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-0\" *ngIf=\"dataObj.famAccoAcctNo2\">\r\n        <div class=\"ui-g-3\"></div>\r\n        <div class=\"ui-g-2 textAlign\">亲情账户2：</div>\r\n        <div class=\"ui-g-4\">\r\n            <label for=\"\">{{dataObj.famAccoAcctNo2}}</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-0\" *ngIf=\"dataObj.famAccoAcctNo3\">\r\n        <div class=\"ui-g-3\"></div>\r\n        <div class=\"ui-g-2 textAlign\">亲情账户3：</div>\r\n        <div class=\"ui-g-4\">\r\n            <label for=\"\">{{dataObj.famAccoAcctNo3}}</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-0\" *ngIf=\"dataObj.famAccoAcctNo4\">\r\n        <div class=\"ui-g-3\"></div>\r\n        <div class=\"ui-g-2 textAlign\">亲情账户4：</div>\r\n        <div class=\"ui-g-4\">\r\n            <label for=\"\">{{dataObj.famAccoAcctNo4}}</label>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 padding-0\" *ngIf=\"dataObj.famAccoAcctNo5\">\r\n        <div class=\"ui-g-3\"></div>\r\n        <div class=\"ui-g-2 textAlign\">亲情账户5：</div>\r\n        <div class=\"ui-g-4\">\r\n            <label for=\"\">{{dataObj.famAccoAcctNo5}}</label>\r\n        </div>\r\n    </div>\r\n</p-dialog>\r\n\r\n<!-- msg -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/deposit-product-flexible-pricing.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/deposit-product-flexible-pricing/deposit-product-flexible-pricing.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-return {\n  text-align: center; }\n  .btn-return button {\n    width: 80px;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 30px;\n    outline: none;\n    text-decoration: none;\n    border: none;\n    cursor: pointer; }\n  .btn-return :nth-child(1) {\n    background-color: white;\n    color: #333333;\n    border: 1px solid #999; }\n  .btn-return :nth-child(2) {\n    margin-left: 30px;\n    background-color: #34CFE6;\n    color: white; }\n  :host/deep/ .ui-datatable table {\n  text-align: center; }\n  :host/deep/ .ui-dialog.ui-shadow {\n  width: 60% !important;\n  height: 85% !important;\n  min-width: 900px !important;\n  min-height: 600px !important; }\n  :host/deep/ .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n  .groupNumStyle {\n  color: #19b0c8;\n  cursor: pointer; }\n  .textAlign {\n  text-align: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9kZXBvc2l0LXByb2R1Y3QtZmxleGlibGUtcHJpY2luZy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGRlcG9zaXQtcHJvZHVjdC1mbGV4aWJsZS1wcmljaW5nXFxkZXBvc2l0LXByb2R1Y3QtZmxleGlibGUtcHJpY2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBO0VBRHRCO0lBR1EsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWUsRUFBQTtFQVZ2QjtJQWFRLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsc0JBQXNCLEVBQUE7RUFmOUI7SUFrQlEsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZLEVBQUE7RUFHcEI7RUFDSSxrQkFBa0IsRUFBQTtFQUV0QjtFQUNJLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QixFQUFBO0VBR2hDO0VBQ0ksc0JBQXNCLEVBQUE7RUFHMUI7RUFDSSxjQUFjO0VBQ2QsZUFBZSxFQUFBO0VBR25CO0VBQ0ksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2RlcG9zaXQtcHJvZHVjdC1mbGV4aWJsZS1wcmljaW5nL2RlcG9zaXQtcHJvZHVjdC1mbGV4aWJsZS1wcmljaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1yZXR1cm57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIDpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuICAgIH1cclxuICAgIDpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0Q0ZFNjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSB0YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3d7XHJcbiAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogNjAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdyb3VwTnVtU3R5bGUge1xyXG4gICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0QWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/deposit-product-flexible-pricing.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/deposit-product-flexible-pricing/deposit-product-flexible-pricing.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: DepositProductPlexiblePricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositProductPlexiblePricingComponent", function() { return DepositProductPlexiblePricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DepositProductPlexiblePricingComponent = /** @class */ (function () {
    function DepositProductPlexiblePricingComponent(httpService, commfunc, fb, messageService, commonFunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.messageService = messageService;
        this.commonFunc = commonFunc;
        this.tabTable = []; // 查询结果
        this.loadingShow = { flag: false }; // loading框
        this.pageSize = '10'; //每页条数
        this.startIndex = '1'; //当前页数
        this.first = 0;
        this.dialogDisplay = false;
        this.msgs = [];
        this.famliyDisplay = false;
        this.currencyCode = [
            { label: '请选择', value: '' },
            { label: '人民币', value: 'CNY' },
            { label: '英镑', value: 'GBP' },
            { label: '港币', value: 'HKD' },
            { label: '美元', value: 'USD' },
            { label: '日元', value: 'JPY' },
            { label: '欧元', value: 'EUR' }
        ];
        this.status = [
            { label: '请选择', value: '' },
            { label: '已保存', value: '0' },
            { label: '已否决', value: '3' },
            { label: '已签约', value: '2' },
            { label: '待复核', value: '1' },
            { label: '已解约', value: '4' },
        ];
    }
    DepositProductPlexiblePricingComponent.prototype.ngOnInit = function () {
        this.selectForm = this.fb.group({
            'custId': [''],
            'custName': [''],
            'accountNo': [''],
            'currency': [''],
            'status': [''],
        });
        this.query();
    };
    // 点击查询
    DepositProductPlexiblePricingComponent.prototype.doquery = function () {
        this.first = 0;
        this.startIndex = '1';
        this.query();
    };
    // 重置
    DepositProductPlexiblePricingComponent.prototype.reset = function () {
        this.selectForm.reset();
        this.query();
    };
    DepositProductPlexiblePricingComponent.prototype.paginate = function (event) {
        // 每页显示的条数;
        this.pageSize = event.rows;
        // 当前页
        this.startIndex = event.page + 1 + '';
        this.first = event.first;
        // 调用查询的方法
        this.query();
    };
    DepositProductPlexiblePricingComponent.prototype.query = function (isMessage) {
        var _this = this;
        var params = {
            pageSize: this.pageSize,
            startIndex: this.startIndex
        };
        for (var key in this.selectForm.value) {
            if (this.selectForm.value[key]) {
                params[key] = this.selectForm.value[key];
            }
        }
        var configParam = {
            httpService: this.httpService,
            loadingFlag: true,
            messageFlag: !isMessage,
            inputParam: params,
            message: this.messageService,
            injectName: 'queryFlexibleDepositInterest',
            loadingShow: this.loadingShow,
            messageInfo: '查询成功',
        };
        this.commonFunc.haddleData(configParam, function (bodyData) {
            if (bodyData) {
                console.log(bodyData);
                _this.tabTable = bodyData.resultList;
                _this.totalNum = bodyData.totalNum;
            }
        });
    };
    DepositProductPlexiblePricingComponent.prototype.add = function () {
        this.dialogDisplay = true;
    };
    DepositProductPlexiblePricingComponent.prototype.call = function (event) {
        this.dialogDisplay = false;
        this.inValueItem = '';
        if (event) {
            this.query(true);
        }
    };
    DepositProductPlexiblePricingComponent.prototype.onHide = function () {
        this.inValueItem = '';
    };
    DepositProductPlexiblePricingComponent.prototype.toDetail = function (data) {
        this.inValueItem = data.accountNo;
        this.dialogDisplay = true;
    };
    DepositProductPlexiblePricingComponent.prototype.toSee = function (col) {
        console.log(col);
        //外币
        if (col.currency && (col.currency == 'GBP' || col.currency == 'HKD' || col.currency == 'USD' || col.currency == 'EUR' || col.currency == 'JPY')) {
            /**
             * 家庭展示亲情号码
             * 0 单户 不展示
             * 1 家庭 展示
             */
            if (col.countType && col.countType == '1') {
                this.dataObj = col;
                this.famliyDisplay = true;
            }
        }
    };
    //按钮权限
    DepositProductPlexiblePricingComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    DepositProductPlexiblePricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deposit-product-flexible-pricing',
            template: __webpack_require__(/*! ./deposit-product-flexible-pricing.component.html */ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/deposit-product-flexible-pricing.component.html"),
            styles: [__webpack_require__(/*! ./deposit-product-flexible-pricing.component.scss */ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/deposit-product-flexible-pricing.component.scss")]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_5__["Customtools"]])
    ], DepositProductPlexiblePricingComponent);
    return DepositProductPlexiblePricingComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/deposit-product-flexible-pricing.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/deposit-product-flexible-pricing/deposit-product-flexible-pricing.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: DepositProductFlexiblePricingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositProductFlexiblePricingModule", function() { return DepositProductFlexiblePricingModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _deposit_product_flexible_pricing_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deposit-product-flexible-pricing.routing */ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/deposit-product-flexible-pricing.routing.ts");
/* harmony import */ var _deposit_product_flexible_pricing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deposit-product-flexible-pricing.component */ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/deposit-product-flexible-pricing.component.ts");
/* harmony import */ var _add_deposit_product_add_deposit_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-deposit-product/add-deposit-product.component */ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product/add-deposit-product.component.ts");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/http/customUtil */ "./src/app/pages/tzb/custom/http/customUtil.ts");
/* harmony import */ var _add_deposit_product_exam_add_deposit_product_exam_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-deposit-product-exam/add-deposit-product-exam.component */ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product-exam/add-deposit-product-exam.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DepositProductFlexiblePricingModule = /** @class */ (function () {
    function DepositProductFlexiblePricingModule() {
    }
    DepositProductFlexiblePricingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _deposit_product_flexible_pricing_routing__WEBPACK_IMPORTED_MODULE_4__["DepositProductFlexiblePricingRouting"]
            ],
            declarations: [
                _deposit_product_flexible_pricing_component__WEBPACK_IMPORTED_MODULE_5__["DepositProductPlexiblePricingComponent"],
                _add_deposit_product_add_deposit_product_component__WEBPACK_IMPORTED_MODULE_6__["AddDepositProductComponent"],
                _add_deposit_product_exam_add_deposit_product_exam_component__WEBPACK_IMPORTED_MODULE_9__["AddDepositProductExamComponent"]
            ],
            providers: [
                primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_7__["MessageService"],
                app_pages_tzb_custom_http_customUtil__WEBPACK_IMPORTED_MODULE_8__["Customtools"],
            ]
        })
    ], DepositProductFlexiblePricingModule);
    return DepositProductFlexiblePricingModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/deposit-product-flexible-pricing.routing.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/deposit-product-flexible-pricing/deposit-product-flexible-pricing.routing.ts ***!
  \***************************************************************************************************************/
/*! exports provided: routes, DepositProductFlexiblePricingRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositProductFlexiblePricingRouting", function() { return DepositProductFlexiblePricingRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _deposit_product_flexible_pricing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deposit-product-flexible-pricing.component */ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/deposit-product-flexible-pricing.component.ts");
/* harmony import */ var _add_deposit_product_exam_add_deposit_product_exam_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-deposit-product-exam/add-deposit-product-exam.component */ "./src/app/pages/tzb/custom/deposit-product-flexible-pricing/add-deposit-product-exam/add-deposit-product-exam.component.ts");



var routes = [
    {
        path: '', component: _deposit_product_flexible_pricing_component__WEBPACK_IMPORTED_MODULE_1__["DepositProductPlexiblePricingComponent"]
    },
    {
        path: 'add-deposit-product-exam', component: _add_deposit_product_exam_add_deposit_product_exam_component__WEBPACK_IMPORTED_MODULE_2__["AddDepositProductExamComponent"]
    }
];
var DepositProductFlexiblePricingRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=deposit-product-flexible-pricing-deposit-product-flexible-pricing-module.js.map