(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-information-display-custom-information-display-module"],{

/***/ "./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-display-detail/custom-display-detail.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-display-detail/custom-display-detail.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g content\">\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">客户号：</label>\r\n      <span>{{inValue.partyId}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">当事人名称：</label>\r\n      <span>{{inValue.partyName}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">系统信用评价：</label>\r\n      <span>{{inValue.sysCreditEval}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">评价人姓名：</label>\r\n      <span>{{inValue.evalName}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">信用评价：</label>\r\n      <span>{{inValue.creditEval | codeValuePie : groupCreditEval}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">不良嗜好：</label>\r\n      <span>{{inValue.badHabits | codeValuePie : groupBadHabits}}</span>\r\n    </div>\r\n    <!-- <div class=\"ui-g-6\">\r\n      <label for=\"\">信用评价原因：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"inValue.creditEvalCause\" readonly=\"true\">\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">收入来源：</label>\r\n      <span>{{inValue.sourceOfIncome | codeValuePie : groupSourceOfIncome}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">家庭年收入级别：</label>\r\n      <span>{{inValue.incomeLevel | codeValuePie : groupIncomeLevel}}</span>\r\n    </div>\r\n    <!-- <div class=\"ui-g-6\">\r\n      <label for=\"\">不良嗜好原因：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"inValue.badHabitsCause\" readonly=\"true\">\r\n    </div> -->\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">车辆状况：</label>\r\n      <span>{{inValue.carFlag | codeValuePie : groupCarFlag}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">家庭关系是否稳定：</label>\r\n      <span>{{inValue.familyStableFlag | codeValuePie : groupFamilyStableFlag}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">健康状况：</label>\r\n      <span>{{inValue.healthFlag | codeValuePie : groupHealthFlag}}</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">建议额度：</label>\r\n      <span>{{inValue.offerLines | codeValuePie : groupOfferLines}}</span>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">信贷员建议：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"inValue.loanOfficerAdvises\" readonly=\"true\">\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">系统是否目标授信客户：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"inValue.sysTargetCustFlag\" readonly=\"true\">\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">是否目标授信客户：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"inValue.targetCustFlag\" readonly=\"true\">\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">系统是否目标授信客户：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"inValue.sysTargetCustFlag\" readonly=\"true\">\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">是否预授信：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"inValue.creditFlag\" readonly=\"true\">\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">修改原因：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"inValue.reason\" readonly=\"true\">\r\n    </div>\r\n  </div> -->\r\n  <div class=\"ui-g-12\">\r\n    <!-- <div class=\"ui-g-6\">\r\n      <label for=\"\">授信备注：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"inValue.remark\" readonly=\"true\">\r\n    </div> -->\r\n    <div class=\"ui-g-6\">\r\n      <label for=\"\">评价时间：</label>\r\n      <span>{{inValue.fromDate}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\" style=\"text-align:center;\">\r\n    <button pButton type=\"button\" label=\"返回\" (click)=\"close()\"></button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-display-detail/custom-display-detail.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-display-detail/custom-display-detail.component.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .ui-g-12 .ui-g-6 {\n  display: flex; }\n  .ui-g .ui-g-12 .ui-g-6 label {\n    display: block;\n    width: 30%;\n    text-align: right; }\n  .content {\n  overflow: auto;\n  height: 600px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWluZm9ybWF0aW9uLWRpc3BsYXkvY3VzdG9tLWRpc3BsYXktZGV0YWlsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWdyb3VwXFxjdXN0b20taW5mb3JtYXRpb24tZGlzcGxheVxcY3VzdG9tLWRpc3BsYXktZGV0YWlsXFxjdXN0b20tZGlzcGxheS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHWSxhQUFhLEVBQUE7RUFIekI7SUFLZ0IsY0FBYztJQUNkLFVBQVM7SUFDVCxpQkFBaUIsRUFBQTtFQUtqQztFQUNJLGNBQWM7RUFFZCxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1ncm91cC9jdXN0b20taW5mb3JtYXRpb24tZGlzcGxheS9jdXN0b20tZGlzcGxheS1kZXRhaWwvY3VzdG9tLWRpc3BsYXktZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLWd7XHJcbiAgICAudWktZy0xMntcclxuICAgICAgICAudWktZy02e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MzAlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAvLyB3aWR0aDo5MDBweDtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-display-detail/custom-display-detail.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-display-detail/custom-display-detail.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: CustomDisplayDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDisplayDetailComponent", function() { return CustomDisplayDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {ActivatedRoute} from "@angular/router";


var CustomDisplayDetailComponent = /** @class */ (function () {
    function CustomDisplayDetailComponent(cusViewHttpService, commfunc) {
        this.cusViewHttpService = cusViewHttpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.items = [];
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.groupHealthFlag = this.code['GroupHealthFlag'];
        this.groupCreditEval = this.code['GroupCreditEval'];
        this.groupSourceOfIncome = this.code['GroupSourceOfIncome'];
        this.groupFamilyStableFlag = this.code['GroupFamilyStableFlags'];
        this.groupBadHabits = this.code['GroupBadHabits'];
        this.groupCarFlag = this.code['GroupCarFlag'];
        this.groupIncomeLevel = this.code['GroupIncomeLevel'];
        this.groupOfferLines = this.code['GroupOfferLinese'];
    }
    CustomDisplayDetailComponent.prototype.ngOnInit = function () {
    };
    CustomDisplayDetailComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //关闭
    CustomDisplayDetailComponent.prototype.close = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CustomDisplayDetailComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomDisplayDetailComponent.prototype, "inValue", void 0);
    CustomDisplayDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-display-detail',
            template: __webpack_require__(/*! ./custom-display-detail.component.html */ "./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-display-detail/custom-display-detail.component.html"),
            styles: [__webpack_require__(/*! ./custom-display-detail.component.scss */ "./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-display-detail/custom-display-detail.component.scss")],
            providers: [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], CustomDisplayDetailComponent);
    return CustomDisplayDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-information-display.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-information-display.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 content\">\r\n  <div class=\"ui-g-12 title\">\r\n    <header-title [Info]=\"title\"></header-title>\r\n  </div>\r\n  <div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12 title\">\r\n      <header-title [Info]=\"title1\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div *ngIf=\"canEdite\" class=\"ui-g-10 cont\">\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">客户名称</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input type=\"text\" [(ngModel)]=\"data.custMap.custName\" disabled=\"true\" pInputText>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">客户号</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input type=\"text\" [(ngModel)]=\"custNo\" disabled=\"true\" pInputText>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">户序号</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input class=\"input-doorNum\" pInputText type=\"text\" (click)=\"toCustomInfo(data.custMap)\" readonly [(ngModel)]=\"data.custMap.doorNum\">\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">与户主关系</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <p-dropdown disabled=\"true\" [options]=\"relType\" [(ngModel)]=\"data.custMap.relType\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">证件类型</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <p-dropdown disabled=\"true\" [options]=\"idenType\" [(ngModel)]=\"data.custMap.idenType\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">证件号码</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input type=\"text\" [(ngModel)]=\"data.custMap.idenNum\" disabled=\"true\" pInputText>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">联系地址</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input type=\"text\" [(ngModel)]=\"data.custMap.address\" disabled=\"true\" pInputText>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">手机号码</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input type=\"text\" [(ngModel)]=\"data.custMap.telNum\" disabled=\"true\" pInputText>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">所属行业</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input type=\"text\" [(ngModel)]=\"data.custMap.industry\" disabled=\"true\" pInputText>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- 等有了在考虑 -->\r\n        <!-- <div class=\"ui-g-4\">\r\n          <label class=\"bodyBgColor\" for=\"\">是否目标客户</label>\r\n          <p-dropdown [options]=\"relType_arr\"></p-dropdown>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <label class=\"bodyBgColor\" for=\"\">目标客户类型</label>\r\n          <input type=\"text\" pInputText>\r\n        </div> -->\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">联系人</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input [(ngModel)]=\"data.custMap.contacts\" type=\"text\" disabled=\"true\" pInputText>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">是否目标客户</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <!-- <input [(ngModel)]=\"data.custMap.targetCustFlag\" type=\"text\" disabled=\"true\" pInputText> -->\r\n            <p-dropdown disabled=\"true\" [options]=\"isNot2\" [(ngModel)]=\"data.custMap.targetCustFlag\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">黑名单标识</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <!-- <input [(ngModel)]=\"data.custMap.targetCustFlag\" type=\"text\" disabled=\"true\" pInputText> -->\r\n            <p-dropdown disabled placeholder=\" \" [options]=\"blackCustFlag\" [(ngModel)]=\"data.custMap.blackCustFlag\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">备注</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input [(ngModel)]=\"data.custMap.description\" type=\"text\" disabled=\"true\" pInputText title=\"{{data.custMap.description}}\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!canEdite\" class=\"ui-g-10 cont\">\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">客户名称</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input type=\"text\" [(ngModel)]=\"data.custMap.custName\" disabled=\"true\" pInputText>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">客户号</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input type=\"text\" [(ngModel)]=\"custNo\" disabled=\"true\" pInputText>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">户序号</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input type=\"text\" [(ngModel)]=\"data.custMap.doorNum\" pInputText>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">与户主关系</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <p-dropdown [options]=\"relType\" [(ngModel)]=\"data.custMap.relType\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">证件类型</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <p-dropdown [options]=\"idenType\" [(ngModel)]=\"data.custMap.idenType\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">证件号码</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input type=\"text\" [(ngModel)]=\"data.custMap.idenNum\" pInputText>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">联系地址</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input type=\"text\" [(ngModel)]=\"data.custMap.address\" pInputText>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">手机号码</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input type=\"text\" [(ngModel)]=\"data.custMap.telNum\" pInputText>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">所属行业</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input type=\"text\" [(ngModel)]=\"data.custMap.industry\" pInputText>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">联系人</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input [(ngModel)]=\"data.custMap.contacts\" type=\"text\" pInputText>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">是否目标客户</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <!-- <input [(ngModel)]=\"data.custMap.targetCustFlag\" type=\"text\" disabled=\"true\" pInputText> -->\r\n            <p-dropdown [options]=\"isNot2\" [(ngModel)]=\"data.custMap.targetCustFlag\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">黑名单标识</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <!-- <input [(ngModel)]=\"data.custMap.targetCustFlag\" type=\"text\" disabled=\"true\" pInputText> -->\r\n            <p-dropdown [disabled]=\"!blackFlag\" placeholder=\" \" [options]=\"blackCustFlag\" [(ngModel)]=\"data.custMap.blackCustFlag\"></p-dropdown>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-4\" [formGroup]=\"userform\">\r\n          <div class=\"ui-g-4\">\r\n            <label class=\"bodyBgColor\" for=\"\">备注</label>\r\n          </div>\r\n          <div class=\"ui-g-8\">\r\n            <input [(ngModel)]=\"data.custMap.description\" type=\"text\" pInputText formControlName=\"description\" title=\"{{data.custMap.description}}\">\r\n          </div>\r\n          <div class=\"verify\" style=\"color:red;\" *ngIf=\"!userform.controls['description'].valid&&userform.controls['description'].dirty\">\r\n            <!-- 备注不能为空！ -->\r\n            <span *ngIf=\"userform.hasError('required','description')\">备注不能为空！</span>\r\n            <span *ngIf=\"!userform.hasError('required','description') && !userform.hasError('maxLength','description')\"> 最大长度不能超过1000！</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-2 btn\">\r\n        <button *ngIf=\"canEdite && permissionCheck('SID00002_P027_P001_P002_P007_P001')\" pButton type=\"button\" (click)=\"editInfo()\" class=\"ui-button-primary\" label=\"编辑\"></button>\r\n        <button *ngIf=\"!canEdite && permissionCheck('SID00002_P027_P001_P002_P007_P001')\" pButton type=\"button\" (click)=\"savaInfo()\" class=\"ui-button-primary\" label=\"保存\"></button>\r\n        <button *ngIf=\"custNo != '' && permissionCheck('SID00002_P027_P001_P002_P007_P002')\" pButton type=\"button\" (click)=\"jumpToEv()\" class=\"ui-button-primary\" label=\"客户评价\"></button>\r\n        <button *ngIf=\"permissionCheck('SID00002_P027_P001_P002_P007_P003')\" pButton type=\"button\" (click)=\"newPlan()\" class=\"ui-button-primary\" label=\"新建联系计划\"></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12 title\">\r\n      <div class=\"header-title\">\r\n        <div class=\"title-right\">\r\n          <span class=\"line bodyBgColor\"></span>\r\n          <span class=\"text\">营销记录</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <p-dataTable [emptyMessage]=\"tableMesg\" [value]=\"items\">\r\n        <p-column field=\"a\" header=\"\"></p-column>\r\n        <p-column field=\"b\" header=\"\"></p-column>\r\n        <p-column field=\"c\" header=\"\"></p-column>\r\n        <p-column field=\"d\" header=\"\"></p-column>\r\n        <p-column field=\"e\" header=\"\"></p-column>\r\n        <p-column header=\"操作\">\r\n          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <a>\r\n              <button pButton type=\"button\" label=\"查看详情\"></button>\r\n            </a>\r\n          </ng-template>\r\n        </p-column>\r\n      </p-dataTable>\r\n    </div>\r\n    <div>\r\n      <div class=\"ui-g-12\">\r\n        <p-paginator rows=\"10\" [first]=\"first1\" totalRecords=\"10\" (onPageChange)=\"itemPaginate($event)\" [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <!--第三方评价记录-->\r\n  <div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12 title\">\r\n      <header-title [Info]=\"'第三方评价记录'\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <p-dataTable [emptyMessage]=\"tableMesg\" [value]=\"selectGroupEvalInfoBean.evalList\">\r\n        <p-column field=\"evalName\" header=\"评价人\"></p-column>\r\n        <p-column field=\"fromDate\" header=\"评价时间\"></p-column>\r\n        <p-column field=\"creditEval\" header=\"信用评价\">\r\n          <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n            <div class=\"ui-g-12 customGroupViewDropdown\" style=\"padding:0px;\">\r\n              {{col.creditEval | codeValuePie : groupCreditEval}}\r\n            </div>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"offerLines\" header=\"建议额度\">\r\n          <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n            <div class=\"ui-g-12 customGroupViewDropdown\" style=\"padding:0px;\">\r\n              {{col.offerLines | codeValuePie : groupOfferLines}}\r\n            </div>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"操作\">\r\n          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n            <span (click)=\"checkDetail(col)\" class=\"tabelDetailIco\">查看详情</span>\r\n          </ng-template>\r\n        </p-column>\r\n      </p-dataTable>\r\n      <p-paginator [rows]=\"selectGroupEvalInfoBean.pageSize\" [first]=\"first2\" [totalRecords]=\"total\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n        (onPageChange)=\"evalPaginate($event)\"></p-paginator>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"text-align:center;\">\r\n      <button pButton type=\"button\" label=\"返回上一页\" (click)=\"returnGroupView()\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!--弹出框-->\r\n<p-dialog [(visible)]=\"detailDisplay\" (onHide)=\"onHidden()\" width=\"900\" modal=\"modal\">\r\n  <p-header>\r\n    {{addUpHeader}}\r\n  </p-header>\r\n  <app-custom-display-detail [inValue]=\"updateValue\" (outValue)=\"detailsCall($event)\"></app-custom-display-detail>\r\n</p-dialog>\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\" life=\"3000\"></p-growl>\r\n<!--comfirm -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n  <p-footer>\r\n    <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n    <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n  </p-footer>\r\n</p-confirmDialog>\r\n<!-- <p-dialog [(visible)]=\"detailDisplay1\" width=\"1400\" height=\"800\" modal=\"modal\">\r\n  <app-new-contact-plan *ngIf=\"addDisplay1\" [in-value]=\"inValue\" (outValue)=\"newPlanCall($event)\"></app-new-contact-plan>\r\n</p-dialog> -->\r\n<!-- 模态框 -->\r\n<p-dialog [(visible)]=\"display\" (onHide)=\"onHidden()\" width=\"900\" modal=\"modal\">\r\n  <p-header>\r\n    {{addUpHeader}}\r\n  </p-header>\r\n  <app-new-contact-plan *ngIf=\"addDisplay\" [in-value]=\"inValue\" (outValue)=\"newPlanCall($event)\"></app-new-contact-plan>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-information-display.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-information-display.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  overflow: auto;\n  min-width: 900px; }\n  .content .title {\n    padding: 0; }\n  .content .title .header-title {\n      width: 100%;\n      height: 34px;\n      background-color: #f2f2f2;\n      padding: 7px 0 7px 20px;\n      box-sizing: border-box;\n      display: flex;\n      justify-content: space-between; }\n  .content .title .header-title .title-right {\n        display: flex; }\n  .content .title .header-title .title-right .line {\n          width: 5px;\n          height: 19px;\n          display: inline-block;\n          margin-right: 7px; }\n  .content .title .header-title .title-right .text {\n          flex: 1;\n          height: 20px;\n          font-size: 14px;\n          line-height: 20px;\n          display: block;\n          font-weight: bold; }\n  .content .title .header-title a {\n        margin-right: 10px; }\n  .content .ui-g-12 {\n    margin-bottom: 5px; }\n  .content .ui-g-12 .cont .ui-g-4 label {\n      display: inline-block;\n      width: 90px;\n      text-align: center;\n      padding: 2px; }\n  .content .ui-g-12 .btn {\n      display: flex;\n      flex-direction: column;\n      text-align: center; }\n  .content .ui-g-12 .btn button {\n        width: 170px;\n        margin-top: 10px; }\n  :host/deep/ .ui-datatable table {\n  text-align: center; }\n  .boxShadow {\n  margin-top: 10px; }\n  .input-doorNum {\n  color: blue;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWluZm9ybWF0aW9uLWRpc3BsYXkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tZ3JvdXBcXGN1c3RvbS1pbmZvcm1hdGlvbi1kaXNwbGF5XFxjdXN0b20taW5mb3JtYXRpb24tZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxnQkFBZSxFQUFBO0VBRm5CO0lBSVEsVUFBVSxFQUFBO0VBSmxCO01BTVksV0FBVztNQUNYLFlBQVk7TUFDWix5QkFBeUI7TUFDekIsdUJBQXVCO01BQ3ZCLHNCQUFzQjtNQUN0QixhQUFhO01BQ2IsOEJBQThCLEVBQUE7RUFaMUM7UUFjZ0IsYUFBYSxFQUFBO0VBZDdCO1VBZ0JvQixVQUFVO1VBQ1YsWUFBWTtVQUNaLHFCQUFxQjtVQUNyQixpQkFBaUIsRUFBQTtFQW5CckM7VUFzQm9CLE9BQU87VUFDUCxZQUFZO1VBQ1osZUFBZTtVQUNmLGlCQUFpQjtVQUNqQixjQUFjO1VBQ2QsaUJBQWlCLEVBQUE7RUEzQnJDO1FBK0JnQixrQkFBa0IsRUFBQTtFQS9CbEM7SUFvQ1Esa0JBQWlCLEVBQUE7RUFwQ3pCO01Bd0NvQixxQkFBcUI7TUFDckIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixZQUFZLEVBQUE7RUEzQ2hDO01BZ0RZLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsa0JBQWtCLEVBQUE7RUFsRDlCO1FBb0RnQixZQUFZO1FBQ1osZ0JBQWdCLEVBQUE7RUFLaEM7RUFDSSxrQkFBa0IsRUFBQTtFQUV0QjtFQUNJLGdCQUFlLEVBQUE7RUFFbkI7RUFDSSxXQUFXO0VBQ1gsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWluZm9ybWF0aW9uLWRpc3BsYXkvY3VzdG9tLWluZm9ybWF0aW9uLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1pbi13aWR0aDo5MDBweDtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgICAgICAgICAgcGFkZGluZzogN3B4IDAgN3B4IDIwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgLnRpdGxlLXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAubGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51aS1nLTEyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjVweDtcclxuICAgICAgICAuY29udCB7XHJcbiAgICAgICAgICAgIC51aS1nLTQge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUgdGFibGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJveFNoYWRvd3tcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxufVxyXG4uaW5wdXQtZG9vck51bXtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-information-display.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-information-display.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CustomInformationDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomInformationDisplayComponent", function() { return CustomInformationDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var _bean_selectGroupEvalInfo_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bean/selectGroupEvalInfo.bean */ "./src/app/pages/tzb/custom/custom-group/bean/selectGroupEvalInfo.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _common_http_common_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { CustGroupListBean } from './../bean/custom-group.bean';







var CustomInformationDisplayComponent = /** @class */ (function () {
    function CustomInformationDisplayComponent(fb, routerInfo, cusViewHttpService, router, confirmationService, httpService, CommonHttpService, commfunc) {
        this.fb = fb;
        this.routerInfo = routerInfo;
        this.cusViewHttpService = cusViewHttpService;
        this.router = router;
        this.confirmationService = confirmationService;
        this.httpService = httpService;
        this.CommonHttpService = CommonHttpService;
        this.commfunc = commfunc;
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"];
        // 标题
        this.title = 'xxx客户群-xxx客户';
        this.title1 = '基本信息';
        this.data1 = {};
        //模态框
        this.detailDisplay = false;
        // 新建联系计划模态框
        this.display = false;
        this.addDisplay = false;
        this.inValue = [];
        this.updateValue = [];
        //每页多少条
        this.pageSize = 10;
        // bean
        this.selectGroupEvalInfoBean = new _bean_selectGroupEvalInfo_bean__WEBPACK_IMPORTED_MODULE_2__["SelectGroupEvalInfoBean"](); //第三方评价
        // 一般中间量
        this.relTypeTemp = '';
        // 传参中间量
        this.readonly = '';
        this.groupName = '';
        this.groupId = '';
        this.data = new app_pages_tzb_custom_custom_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_10__["CustGroupListBean"];
        this.tempData = '';
        // 组件参数
        this.msgs = [];
        this.first1 = 0;
        this.first2 = 0;
        this.canEdite = true;
        //
        this.pageNum2 = 10;
        this.pageSize2 = 1;
        // 码值
        this.isNot2 = [
            { label: '请选择', value: '' },
            { label: '否', value: '0' },
            { label: '是', value: '1' },
        ];
        this.blackFlag = false;
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.relType = this.code['CustomGroupRelType'];
        this.idenType = this.code['CustomGroupIdenType'];
        this.groupCreditEval = this.code['GroupCreditEval'];
        this.groupOfferLines = this.code['GroupOfferLinese'];
        this.blackCustFlag = this.code['blackCustFlag'];
        this.userform = this.fb.group({
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].maxLength(1000)])
        });
    }
    //码值
    CustomInformationDisplayComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CustomInformationDisplayComponent.prototype.ngOnInit = function () {
        this.preSet();
        // 接受客户名单信息
        // this.items = this.routerInfo.snapshot.params['data'];
    };
    CustomInformationDisplayComponent.prototype.preSet = function () {
        // 初始化
        // 路由传参
        if (this.routerInfo.snapshot.params.pageNum) {
            this.pageNum = this.routerInfo.snapshot.params.pageNum;
        }
        if (this.routerInfo.snapshot.params.readonly) {
            this.readonly = this.routerInfo.snapshot.params.readonly;
        }
        if (this.routerInfo.snapshot.params.groupId) {
            this.groupId = this.routerInfo.snapshot.params.groupId;
        }
        if (this.routerInfo.snapshot.params.custNo) {
            this.custNo2 = this.routerInfo.snapshot.params.custNo;
        }
        this.selectCustGroupInfo(this.groupId, this.custNo2); //查询群信息
    };
    // 判断是否临时客户
    CustomInformationDisplayComponent.prototype.isQl = function (col) {
        if (col.custNo.search(/^QL/)) {
            return true;
        }
        return false;
    };
    //群基本信息查询
    CustomInformationDisplayComponent.prototype.selectCustGroupInfo = function (groupId, custNo) {
        var _this = this;
        var params = {
            groupId: groupId
        };
        this.httpService.selectCustGroupInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.groupName = data.groupName;
                _this.selectCustGroupList(custNo); //查询客户信息
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '调用服务失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //群客户名单查询
    CustomInformationDisplayComponent.prototype.selectCustGroupList = function (custNo) {
        var _this = this;
        var params = {
            custNo: custNo,
            groupId: this.groupId
        };
        this.httpService.selectCustGroupList(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.data.custMap = data.custList[0];
                console.log(_this.data.custMap);
                if (_this.isQl(_this.data.custMap)) { //判断临时客户号
                    _this.custNo = _this.data.custMap.custNo;
                }
                else {
                    _this.custNo = '';
                }
                _this.selectGroupEvalInfoBean.pageSize = 10;
                _this.selectGroupEvalInfoBean.pageNum = 1;
                _this.title = _this.groupName + "\u5BA2\u6237\u7FA4-" + _this.data.custMap.custName + "\u5BA2\u6237";
                if (_this.data.custMap && _this.relType) {
                    _this.relType.forEach(function (item) {
                        if (item.value === _this.data.custMap.relType) {
                            _this.relTypeTemp = item.label;
                            return;
                        }
                    });
                }
                if (_this.data.custMap.blackCustFlag != '1') {
                    _this.blackFlag = true;
                }
                else {
                    _this.blackFlag = false;
                }
                _this.copy();
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '调用服务失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //获取userame
    CustomInformationDisplayComponent.prototype.getUserName = function (userId, index) {
        var _this = this;
        var params = {
            tellerId: userId
        };
        var successFnc = function (data) {
            _this.selectGroupEvalInfoBean.evalList[index]["evalName"] = data.tellerName || '';
            _this.selectGroupEvalInfoBean.evalList[index]["partyName"] = _this.data.custMap.custName || '';
            _this.updateValue = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](_this.updateValue);
        };
        this.commfunc.interfaceComFnc(this.CommonHttpService.queryTellerById(params), successFnc, this.msgs);
    };
    //初始
    CustomInformationDisplayComponent.prototype.copy = function () {
        var _this = this;
        // debugger
        this.selectGroupEvalInfoBean["readonly"] = this.readonly;
        this.selectGroupEvalInfoBean.groupName = this.groupName;
        this.selectGroupEvalInfoBean.custNo = this.data.custMap.custNo; //客户维度
        this.selectGroupEvalInfoBean.handleFlag = '2';
        this.selectGroupEvalInfoBean.pageNum = 1;
        this.selectGroupEvalInfoBean.pageSize = 10;
        var params = {
            handleFlag: 2,
            groupId: this.groupId,
            custNo: this.data.custMap.custNo,
            pageNum: this.selectGroupEvalInfoBean.pageNum,
            pageSize: this.selectGroupEvalInfoBean.pageSize,
        };
        var ob = this.cusViewHttpService.selectGroupEvalInfo(params);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.selectGroupEvalInfoBean = data;
                _this.selectGroupEvalInfoBean.evalList = data.evalList;
                // this.selectGroupEvalInfoBean.evalList.forEach((element,i) => {
                //   this.selectGroupEvalInfoBean.evalList[i].fromDate = element.fromDate.split(' ')[0];
                // });
                // 
                _this.list = data.evalList;
                _this.total = data.totalNum;
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
    //详情
    CustomInformationDisplayComponent.prototype.checkDetail = function (col) {
        this.detailDisplay = true;
        this.addUpHeader = '第三方评价详情';
        this.updateValue = col;
        document.body.style.overflow = "hidden";
    };
    //详情的回调
    CustomInformationDisplayComponent.prototype.detailsCall = function (param) {
        this.detailDisplay = param;
        document.body.style.overflow = 'auto';
    };
    CustomInformationDisplayComponent.prototype.openAppraiser = function () {
        var _this = this;
        // 打开第三方评价
        this.confirmationService.confirm({
            message: '确定进入第三方评价页面?',
            accept: function () {
                _this.router.navigate(['/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate', { readonly: _this.readonly, groupName: _this.groupName, customInfoFlag: 1, data: _this.tempData }]);
            }
        });
    };
    //新建联系计划
    CustomInformationDisplayComponent.prototype.newPlan = function () {
        this.addUpHeader = '新建客户联系计划';
        this.display = true;
        this.addDisplay = true;
        var arr = [];
        arr = [
            {
                custNo: this.data.custMap.custNo,
                custName: this.data.custMap.custName
            }
        ];
        this.inValue = lodash__WEBPACK_IMPORTED_MODULE_5__["clone"](arr);
        document.body.style.overflow = "hidden";
    };
    //新建联系计划-关闭模态框
    CustomInformationDisplayComponent.prototype.newPlanCall = function (event) {
        this.addDisplay = false;
        this.display = false;
        document.body.style.overflow = 'auto';
    };
    // //分页
    // paginate(event) {
    //   //每页显示的条数
    //   this.selectGroupEvalInfoBean.pageSize = event.rows;
    //   //当前页
    //   let currentPage = event.page + 1;
    //   this.selectGroupEvalInfoBean.pageNum = currentPage;
    //   //调用初始方法
    //   this.copy();
    // }
    CustomInformationDisplayComponent.prototype.itemPaginate = function (event) {
        // 营销分页
        this.data1.pageSize = event.rows;
        var currentPage = event.page + 1;
        this.data1.pageNum = currentPage;
        this.first1 = (currentPage - 1) * this.data1.pageSize;
        //营销查询--待修改2018.1.5
    };
    CustomInformationDisplayComponent.prototype.evalPaginate = function (event) {
        // 第三方评价分页
        this.selectGroupEvalInfoBean.pageSize = event.rows;
        var currentPage = event.page + 1;
        this.selectGroupEvalInfoBean.pageNum = currentPage;
        this.first2 = (currentPage - 1) * this.selectGroupEvalInfoBean.pageSize;
        this.copy(); //客户群名单查询
    };
    CustomInformationDisplayComponent.prototype.onHidden = function () {
        // 退出模态框
        document.body.style.overflow = 'auto';
    };
    // 其他
    CustomInformationDisplayComponent.prototype.returnGroupView = function () {
        var _this = this;
        // 返回客户群视图
        this.confirmationService.confirm({
            message: '确定返回客户群视图?',
            accept: function () {
                var groupId = _this.commfunc.compileStr(_this.groupId);
                _this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view', { groupId: groupId, readonly: _this.readonly, groupName: _this.groupName, pageNum: _this.pageNum }]);
            }
        });
    };
    CustomInformationDisplayComponent.prototype.editInfo = function () {
        this.canEdite = false;
    };
    CustomInformationDisplayComponent.prototype.savaInfo = function () {
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
        this.canEdite = true;
        var params = {
            groupId: this.groupId,
            custListNum: 1,
            custMap: this.data.custMap,
            flagId: '1'
        };
        this.httpService.updateCustGroupList(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.selectGroupEvalInfoBean = data;
                _this.selectCustGroupList(_this.custNo2);
                // 旧
                _this.list = data.evalList;
                _this.total = data.totalNum;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: "修改成功！" });
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
    CustomInformationDisplayComponent.prototype.toCustomInfo = function (col) {
        // 去客户信息页面
        // this.commfunc.setSessionData('custNo', col);
        if (col.doorNum != '' && col.doorNum) {
            var data = JSON.stringify(col);
            this.router.navigate(['pages/tzb/custom/custom-group/household-information-display', { groupId: this.groupId, groupName: this.groupName, data: data }]);
        }
    };
    CustomInformationDisplayComponent.prototype.jumpToEv = function () {
        if (this.data.custMap.relType == 1) {
            var param = {
                groupId: this.groupId,
                groupName: this.groupName,
                custNo: this.data.custMap.custNo,
                doorId: this.data.custMap.doorNum,
                custGroupView: '1',
                customInfo: JSON.stringify(this.data.custMap),
            };
            this.router.navigate(['/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate', param]);
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '您好，第三方评价需要与户主关系为本人！' });
        }
    };
    //按钮权限
    CustomInformationDisplayComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomInformationDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-information-display',
            template: __webpack_require__(/*! ./custom-information-display.component.html */ "./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-information-display.component.html"),
            styles: [__webpack_require__(/*! ./custom-information-display.component.scss */ "./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-information-display.component.scss")],
            providers: [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], _common_http_common_http_service__WEBPACK_IMPORTED_MODULE_9__["CommonHttpService"]],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_7__["CusOperationHttpService"],
            _common_http_common_http_service__WEBPACK_IMPORTED_MODULE_9__["CommonHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_8__["Commfunc"]])
    ], CustomInformationDisplayComponent);
    return CustomInformationDisplayComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-information-display.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-information-display.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: customInformationDisplayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customInformationDisplayModule", function() { return customInformationDisplayModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _custom_information_display_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-information-display.routing */ "./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-information-display.routing.ts");
/* harmony import */ var _custom_information_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-information-display.component */ "./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-information-display.component.ts");
/* harmony import */ var _custom_display_detail_custom_display_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-display-detail/custom-display-detail.component */ "./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-display-detail/custom-display-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//客户群组
var customInformationDisplayModule = /** @class */ (function () {
    function customInformationDisplayModule() {
    }
    customInformationDisplayModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_3__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_2__["FrameworkModule"],
                _custom_information_display_routing__WEBPACK_IMPORTED_MODULE_4__["customInformationDisplayRouting"]
            ],
            declarations: [
                _custom_information_display_component__WEBPACK_IMPORTED_MODULE_5__["CustomInformationDisplayComponent"],
                _custom_display_detail_custom_display_detail_component__WEBPACK_IMPORTED_MODULE_6__["CustomDisplayDetailComponent"]
            ],
            exports: [],
            providers: []
        })
    ], customInformationDisplayModule);
    return customInformationDisplayModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-information-display.routing.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-information-display.routing.ts ***!
  \****************************************************************************************************************/
/*! exports provided: routes, customInformationDisplayRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customInformationDisplayRouting", function() { return customInformationDisplayRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_information_display_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-information-display.component */ "./src/app/pages/tzb/custom/custom-group/custom-information-display/custom-information-display.component.ts");


//客户群组
// import { CustomGroupDeleteComponent } from './custom-group-delete/custom-group-delete.component';//客户群-删除客户群
var routes = [
    {
        path: '',
        component: _custom_information_display_component__WEBPACK_IMPORTED_MODULE_1__["CustomInformationDisplayComponent"],
    }
];
var customInformationDisplayRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=custom-information-display-custom-information-display-module.js.map