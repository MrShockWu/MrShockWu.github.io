(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routing-current-current-module"],{

/***/ "./src/app/@uisftech/view/routing/current/current.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/current/current.module.ts ***!
  \******************************************************************/
/*! exports provided: CurrentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentModule", function() { return CurrentModule; });
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _current_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./current.routing */ "./src/app/@uisftech/view/routing/current/current.routing.ts");
/* harmony import */ var app_pages_tzb_custom_work_rask_work_rask_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/work-rask/work-rask.module */ "./src/app/pages/tzb/custom/work-rask/work-rask.module.ts");
/* harmony import */ var app_pages_tzb_custom_work_rask_credit_intergration_currentDeposit_currentDepositApprove_currentDepositApprove_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/work-rask/credit-intergration/currentDeposit/currentDepositApprove/currentDepositApprove.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/currentDeposit/currentDepositApprove/currentDepositApprove.component.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CurrentModule = /** @class */ (function () {
    function CurrentModule() {
    }
    CurrentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_6__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_0__["FrameworkModule"],
                _current_routing__WEBPACK_IMPORTED_MODULE_3__["CurrentRouting"],
                app_pages_tzb_custom_work_rask_work_rask_module__WEBPACK_IMPORTED_MODULE_4__["WorkRaskModule"]
            ],
            declarations: [
                app_pages_tzb_custom_work_rask_credit_intergration_currentDeposit_currentDepositApprove_currentDepositApprove_component__WEBPACK_IMPORTED_MODULE_5__["CurrentDepositApproveComponent"]
            ],
            providers: []
        })
    ], CurrentModule);
    return CurrentModule;
}());



/***/ }),

/***/ "./src/app/@uisftech/view/routing/current/current.routing.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@uisftech/view/routing/current/current.routing.ts ***!
  \*******************************************************************/
/*! exports provided: routes, CurrentRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentRouting", function() { return CurrentRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_work_rask_credit_intergration_currentDeposit_currentDepositApprove_currentDepositApprove_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/work-rask/credit-intergration/currentDeposit/currentDepositApprove/currentDepositApprove.component */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/currentDeposit/currentDepositApprove/currentDepositApprove.component.ts");


var routes = [
    {
        //灵活计息
        path: 'currentApprove/:applyId/:custNo',
        component: app_pages_tzb_custom_work_rask_credit_intergration_currentDeposit_currentDepositApprove_currentDepositApprove_component__WEBPACK_IMPORTED_MODULE_1__["CurrentDepositApproveComponent"]
    }
];
var CurrentRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/currentDeposit/currentDepositApprove/bean/currentDepositApprove.bean.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/currentDeposit/currentDepositApprove/bean/currentDepositApprove.bean.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: CurrentDepositApproveBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentDepositApproveBean", function() { return CurrentDepositApproveBean; });
var CurrentDepositApproveBean = /** @class */ (function () {
    function CurrentDepositApproveBean() {
    }
    return CurrentDepositApproveBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/currentDeposit/currentDepositApprove/currentDepositApprove.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/currentDeposit/currentDepositApprove/currentDepositApprove.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'灵活计息活期存款审批'\"></header-title>\r\n</div>\r\n<div class=\"ui-g-11 ui-g-offset-1\">\r\n    <div class=\"ui-g-6\">\r\n        <span class=\"ui-g-3 center\">存款账户:</span>\r\n        <input type=\"text\" disabled pInputText [(ngModel)]=\"depositAccount\" />\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <span class=\"ui-g-3 center\">客户号:</span>\r\n        <input type=\"text\" disabled [(ngModel)]=\"custNo\" pInputText>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <span class=\"ui-g-3 center\">客户名称:</span>\r\n        <input type=\"text\" disabled pInputText [(ngModel)]=\"custName\" />\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <span class=\"ui-g-3 center\">产品类型:</span>\r\n        <input type=\"text\" disabled pInputText [(ngModel)]=\"productType\" />\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <span class=\"ui-g-3 center\">预计存款金额(万元):</span>\r\n        <input type=\"text\" disabled pInputText [(ngModel)]=\"depositAmount\" />\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <span class=\"ui-g-3 center\">存款利率:</span>\r\n        <input type=\"text\" disabled pInputText [(ngModel)]=\"depositRate\" />\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <span class=\"ui-g-3 center\">大客户费用:</span>\r\n        <input type=\"text\" disabled pInputText [(ngModel)]=\"largeCustomerFees\" />\r\n    </div>\r\n</div>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/currentDeposit/currentDepositApprove/currentDepositApprove.component.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/currentDeposit/currentDepositApprove/currentDepositApprove.component.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vd29yay1yYXNrL2NyZWRpdC1pbnRlcmdyYXRpb24vY3VycmVudERlcG9zaXQvY3VycmVudERlcG9zaXRBcHByb3ZlL2N1cnJlbnREZXBvc2l0QXBwcm92ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/work-rask/credit-intergration/currentDeposit/currentDepositApprove/currentDepositApprove.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-rask/credit-intergration/currentDeposit/currentDepositApprove/currentDepositApprove.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: CurrentDepositApproveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentDepositApproveComponent", function() { return CurrentDepositApproveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_currentDepositApprove_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bean/currentDepositApprove.bean */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/currentDeposit/currentDepositApprove/bean/currentDepositApprove.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CurrentDepositApproveComponent = /** @class */ (function () {
    function CurrentDepositApproveComponent(httpService, routeInfo, commfunc) {
        this.httpService = httpService;
        this.routeInfo = routeInfo;
        this.commfunc = commfunc;
        this.msgs = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.depositApproveBean = new _bean_currentDepositApprove_bean__WEBPACK_IMPORTED_MODULE_5__["CurrentDepositApproveBean"]();
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
    CurrentDepositApproveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.codeValues();
        this.productTypeOptions = this.code['ProductTypeCurrent'];
        var param = {
            userId: this.userId,
            orgId: this.orgId,
            applyId: this.routeInfo.snapshot.params['applyId'],
        };
        this.httpService.agencyQueryInterestRate(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.applyId = data.applyId;
                _this.depositAccount = data.depositAccount;
                _this.custNo = data.custNo;
                _this.custName = data.custName;
                _this.productTypeOptions.forEach(function (item) {
                    if (item.value == data.productType) {
                        _this.productType = item.label;
                    }
                });
                _this.depositRate = data.depositRate;
                _this.largeCustomerFees = data.largeCustomerFees;
                _this.depositAmount = data.depositAmount;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '查询成功' });
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
    CurrentDepositApproveComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CurrentDepositApproveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'currentDepositApprove',
            template: __webpack_require__(/*! ./currentDepositApprove.component.html */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/currentDeposit/currentDepositApprove/currentDepositApprove.component.html"),
            styles: [__webpack_require__(/*! ./currentDepositApprove.component.scss */ "./src/app/pages/tzb/custom/work-rask/credit-intergration/currentDeposit/currentDepositApprove/currentDepositApprove.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], CurrentDepositApproveComponent);
    return CurrentDepositApproveComponent;
}());



/***/ })

}]);
//# sourceMappingURL=routing-current-current-module.js.map