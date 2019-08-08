(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["interest-rate-manage-loan-rule-cycle-cycle-module"],{

/***/ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-add/cycle-add.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-add/cycle-add.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userform\">\r\n    <header-title [Info]=\"'周期重定价新增'\"></header-title>    \r\n    <div class=\"cycle-add ui-g-12 module\">\r\n      <!-- <h3>周期重定价规则-新增</h3> -->\r\n      <div class=\"ui-g-12 content\">\r\n        <!-- <div class=\"ui-g-6\">\r\n        <span class=\"ui-g-3 add-text\">重定价规则编号</span>\r\n        <input class=\"ui-g-12 ui-md-4\"  type=\"text\" size=\"30\" pInputText [(ngModel)]=\"cycleBean.reprncPlnNum\">\r\n      </div> -->\r\n        <div class=\"ui-g-6\">\r\n          <div class=\"row\">\r\n            <div class=\"ui-g-3 add-text\" appValidation>周期重定价名称：</div>\r\n            <div class=\"ui-g-7\"><input type=\"text\" formControlName=\"reprncPlnName\" size=\"30\" pInputText [(ngModel)]=\"cycleBean.reprncPlnName\"></div>\r\n          </div>\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['reprncPlnName'].valid&&userform.controls['reprncPlnName'].dirty\">\r\n            <span *ngIf=\"userform.hasError('required','reprncPlnName')\">周期重定价名称不能为空!</span>\r\n            <span *ngIf=\"!userform.hasError('required','reprncPlnName') && userform.controls['reprncPlnName'].value.length>200\"> 周期重定价名称不能超过200位字符!</span>\r\n            <span *ngIf=\"!userform.hasError('required','reprncPlnName') && userform.controls['reprncPlnName'].value.length<=12 && userform.hasError('specialSymbol','reprncPlnName')\">周期重定价名称不能为特殊字符</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 content\">\r\n        <div class=\"ui-g-6 data\">\r\n          <div class=\"row\">\r\n            <div class=\"ui-g-3 add-text\" appValidation>生效日期：</div>\r\n            <div class=\"ui-g-7\"><p-calendar formControlName=\"effDt\" showButtonBar=\"true\" [showOtherMonths]=\"false\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" [(ngModel)]=\"effDt\" [locale]=\"ch\" dateFormat=\"yy-mm-dd\" [showIcon]=\"true\"></p-calendar></div>\r\n          </div>\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['effDt'].valid&&userform.controls['effDt'].dirty\">\r\n            生效日期不能为空!\r\n          </div>\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"effDt&&changeDate2\">\r\n              生效日期格式为0001-01-01中间用英文逗号隔开!\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6 data\">\r\n          <div class=\"row\">\r\n            <div class=\"ui-g-3 add-text\">失效日期：</div>\r\n            <div class=\"ui-g-7\"><p-calendar formControlName=\"invalDt\" showButtonBar=\"true\" [showOtherMonths]=\"false\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" [locale]=\"ch\"  [(ngModel)]=\"invalDt\" dateFormat=\"yy-mm-dd\" [showIcon]=\"true\"></p-calendar> </div>\r\n          </div>\r\n         </div>\r\n      </div>\r\n      <div class=\"ui-g-12 content\">\r\n        <!-- <div class=\"ui-g-6\">\r\n          <div class=\"row\">\r\n            <span class=\"ui-g-3 add-text\" appValidation>机动调整</span>\r\n            <p-dropdown  formControlName=\"mvmtAdjCode\" [options]=\"isOr\" [(ngModel)]=\"cycleBean.mvmtAdjCode\"></p-dropdown>\r\n          </div>\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['mvmtAdjCode'].valid&&userform.controls['mvmtAdjCode'].dirty\">\r\n            机动调整不能为空!\r\n          </div>\r\n        </div> -->\r\n        <div class=\"ui-g-6\">\r\n          <div class=\"row\">\r\n            <div class=\"ui-g-3 add-text\" appValidation>周期调整：</div>\r\n            <div class=\"ui-g-7\"><p-dropdown formControlName=\"prdAdjCode\" [options]=\"isOr\" [(ngModel)]=\"cycleBean.prdAdjCode\" (onChange)=\"disableText()\"></p-dropdown></div>\r\n          </div>\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['prdAdjCode'].valid&&userform.controls['prdAdjCode'].dirty\">\r\n            周期调整不能为空!\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n          <div class=\"row\">\r\n            <div class=\"ui-g-3 add-text\">参考日期类型：</div>\r\n            <div class=\"ui-g-7\" *ngIf=\"!refrDtTpCodeShow\"><p-dropdown  formControlName=\"refrDtTpCode\" [options]=\"isRf\" [(ngModel)]=\"cycleBean.refrDtTpCode\"\r\n            [style]=\"{'width':'140px'}\"  (keyup)=\"keyboard($event)\" (onChange)=\"refrDtTpCodeValidate()\"></p-dropdown></div>\r\n            <div class=\"ui-g-7\" *ngIf=\"refrDtTpCodeShow\"><p-dropdown  readonly=\"refrDtTpCodeShow\" class=\"addcolor\" formControlName=\"refrDtTpCode\" [options]=\"isRf\" [(ngModel)]=\"cycleBean.refrDtTpCode\"\r\n              [style]=\"{'width':'140px'}\"></p-dropdown></div>\r\n          </div>\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"cycleBean.prdAdjCode=='1'&&(cycleBean.refrDtTpCode=='null'||cycleBean.refrDtTpCode=='')\">\r\n              参考日期类型不能为空!\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 content\">\r\n        <div class=\"ui-g-6\">\r\n          <div class=\"row\">\r\n            <div class=\"ui-g-3 add-text\">周期数量：</div>\r\n            <div class=\"ui-g-7\" *ngIf=\"!show\"><input  (keyup)=\"adjPrdDtyKeyBoard($event)\" formControlName=\"adjPrdDty\"  type=\"text\" size=\"30\" pInputText [(ngModel)]=\"cycleBean.adjPrdDty\"></div>\r\n              <div class=\"ui-g-7\" *ngIf=\"show\"><input  readonly=\"show\" class=\"addcolor\" formControlName=\"adjPrdDty\"  type=\"text\" size=\"30\" pInputText [(ngModel)]=\"cycleBean.adjPrdDty\"></div>\r\n            <div class=\"requireLabel\" style=\"color:red;text-align:center\" *ngIf=\"adjPrdDtyKeyBoardShow\">   \r\n               必须为正整数！\r\n            </div>\r\n            <div class=\"requireLabel adjPrdDty\" *ngIf=\"adjPrdDtyIsEmpt()\" style=\"color:red;text-align:center\">   \r\n              周期数量不能为空！\r\n           </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n          <div class=\"row\">\r\n            <div class=\"ui-g-3 add-text\">周期单位：</div>\r\n            <div class=\"ui-g-7\"  *ngIf=\"!show\"><p-dropdown  formControlName=\"adjPrdCoCode\" [options]=\"isRm\" [(ngModel)]=\"cycleBean.adjPrdCoCode\"\r\n            [style]=\"{'width':'140px'}\"></p-dropdown></div>\r\n            <div class=\"ui-g-7\" *ngIf=\"show\"><p-dropdown  readonly=\"show\" class=\"addcolor\" formControlName=\"adjPrdCoCode\" [options]=\"isRm\" [(ngModel)]=\"cycleBean.adjPrdCoCode\"\r\n              [style]=\"{'width':'140px'}\"></p-dropdown></div>\r\n              <div class=\"requireLabel\" *ngIf=\"adjPrdCoCodeIsEmpt()\" style=\"color:red;text-align:center\">   \r\n                周期单位不能为空！\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 content\">\r\n        <div class=\"ui-g-6 my\">\r\n          <div class=\"row\">\r\n            <div class=\"ui-g-3 add-text\">周年调整日历：</div>\r\n          <!-- <p-calendar  *ngIf=\"!adjPrdCdrShow\"  formControlName=\"adjPrdCdr\" [(ngModel)]=\"cycleBean.adjPrdCdr\"  selectionMode=\"multiple\" onSelect=\"checkDate()\" [showIcon]=\"true\" dateFormat=\"mm-dd\" dateType=\"string\"></p-calendar> -->\r\n          <!-- <p-calendar  *ngIf=\"adjPrdCdrShow\"  readonly=\"adjPrdCdrShow\" formControlName=\"adjPrdCdr\" [(ngModel)]=\"cycleBean.adjPrdCdr\" selectionMode=\"multiple\"  onSelect=\"checkDate()\" [showIcon]=\"true\" dateFormat=\"mm-dd\" dateType=\"string\"></p-calendar>  -->\r\n          <!-- <span style=\"margin-left:34px\">{{date3|date}}</span> --> \r\n          <div class=\"ui-g-7\" *ngIf=\"!adjPrdCdrShow\"><input   type=\"text\" formControlName=\"adjPrdCdr\" size=\"30\" pInputText [(ngModel)]=\"cycleBean.adjPrdCdr\" (change)=\"dataCheck(cycleBean.adjPrdCdr)\"></div>\r\n            <div class=\"ui-g-7\" *ngIf=\"adjPrdCdrShow\"><input   type=\"text\" readonly=\"adjPrdCdrShow\" class=\"addcolor\" formControlName=\"adjPrdCdr\" size=\"30\" pInputText [(ngModel)]=\"cycleBean.adjPrdCdr\" (change)=\"dataCheck(cycleBean.adjPrdCdr)\"></div>\r\n          </div>\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"adjPrdCdrIsEmpt()\">\r\n            周年调整日历不能为空!\r\n          </div>\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"cycleBean.adjPrdCdr!=''&&changeDate\">\r\n            周年调整日历格式为01-01中间用英文逗号隔开!\r\n          </div>\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"cycleBean.adjPrdCdr!=''&&!changeDate&&changeDateMax\">\r\n            周年调整日历最长不超过12个!\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n          <div class=\"row\">\r\n            <div class=\"ui-g-3 add-text\" appValidation>利率调整方向：</div>\r\n            <div class=\"ui-g-7\"><p-dropdown  formControlName=\"intRateDrcCode\" [options]=\"isRe\" [(ngModel)]=\"cycleBean.intRateDrcCode\"\r\n              [style]=\"{'width':'140px'}\"></p-dropdown></div>\r\n          </div>\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['intRateDrcCode'].valid&&userform.controls['intRateDrcCode'].dirty\">\r\n            利率调整方向不能为空!\r\n          </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"ui-g-12 content\">\r\n        <div class=\"ui-g-6\">\r\n          <div class=\"row\">\r\n            <div class=\"ui-g-3 add-text\">备注：</div>\r\n            <div class=\"ui-g-7\"><input type=\"text\" formControlName=\"txInf\" size=\"30\" pInputText [(ngModel)]=\"cycleBean.txInf\"></div>\r\n            <div class=\"requireLabel posi-ab left-34\" style=\"color:red;\" *ngIf=\"!userform.controls['txInf'].valid&&userform.controls['txInf'].dirty\">\r\n              <span *ngIf=\"!userform.hasError('required','txInf') && userform.controls['txInf'].value.length>60\">备注不能超过60位字符!</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 add-button\">\r\n           <button pButton type=\"button\" [disabled]=\"isDisable\" label=\"提交\" (click)=\"submit()\"></button>\r\n           <button pButton type=\"button\" label=\"返回\" (click)=\"back()\"></button>\r\n       </div>\r\n    </div>\r\n  </form>\r\n  <!-- 提示信息 -->\r\n  <p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-add/cycle-add.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-add/cycle-add.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cycle-add .content .row .add-text {\n  display: inline-block;\n  text-align: right;\n  line-height: 25px; }\n\n.cycle-add .content .requireLabel {\n  margin-left: -57%;\n  display: inline-block;\n  margin-top: 4%; }\n\n.cycle-add .addcolor {\n  background: #f1f1ec; }\n\n.cycle-add .ui-g-12 {\n  padding-top: 10px;\n  padding-bottom: 0; }\n\n.cycle-add .ui-g-12 .ui-g-6 {\n    padding-top: 0;\n    padding-bottom: 0; }\n\n.cycle-add .add-button {\n  border-top: 1px solid #afdfe7;\n  overflow: hidden;\n  height: 92.5px;\n  line-height: 100px;\n  text-align: center;\n  margin-top: 10px; }\n\n.cycle-add .adjPrdDty {\n  text-align: center !important; }\n\n.cycle-add .tc-r {\n  text-align: right; }\n\n.cycle-add .tc-l {\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3ZhbHVhdGlvbi9pbnRlcmVzdC1yYXRlLW1hbmFnZS9sb2FuLXJ1bGUvY3ljbGUvY3ljbGUtYWRkL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHZhbHVhdGlvblxcaW50ZXJlc3QtcmF0ZS1tYW5hZ2VcXGxvYW4tcnVsZVxcY3ljbGVcXGN5Y2xlLWFkZFxcY3ljbGUtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSWdCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBTmpDO0VBVVksaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixjQUFjLEVBQUE7O0FBWjFCO0VBbUJRLG1CQUFtQixFQUFBOztBQW5CM0I7RUFzQlEsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQXZCekI7SUF5QlksY0FBYztJQUNkLGlCQUFpQixFQUFBOztBQTFCN0I7RUE4QlEsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFuQ3hCO0VBc0NRLDZCQUNKLEVBQUE7O0FBdkNKO0VBeUNRLGlCQUNKLEVBQUE7O0FBMUNKO0VBNENRLGdCQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvdmFsdWF0aW9uL2ludGVyZXN0LXJhdGUtbWFuYWdlL2xvYW4tcnVsZS9jeWNsZS9jeWNsZS1hZGQvY3ljbGUtYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN5Y2xlLWFkZCB7XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgIC5hZGQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZXF1aXJlTGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTU3JTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAuZGF0YSB7XHJcbiAgICAvLyAgICAgbWFyZ2luLWJvdHRvbTogLTE2cHg7XHJcbiAgICAvLyB9XHJcbiAgICAuYWRkY29sb3J7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjFlYztcclxuICAgIH1cclxuICAgIC51aS1nLTEyIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAudWktZy02IHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hZGQtYnV0dG9uIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2FmZGZlNztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGhlaWdodDogOTIuNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5hZGpQcmREdHkge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50XHJcbiAgICB9XHJcbiAgICAudGMtciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHRcclxuICAgIH1cclxuICAgIC50Yy1sIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-add/cycle-add.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-add/cycle-add.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: CycleAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycleAddComponent", function() { return CycleAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bean_cycle_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../bean/cycle.bean */ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/bean/cycle.bean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_valuation_http_valuation_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/valuation/http/valuation.http.service */ "./src/app/pages/tzb/valuation/http/valuation.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { IsOr, IsRf, IsRm, IsRe } from './../../constant/codeValue';





var CycleAddComponent = /** @class */ (function () {
    function CycleAddComponent(httpService, router, activatedRoute, commfunc, fb, changeDetectorRef) {
        this.httpService = httpService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.commfunc = commfunc;
        this.fb = fb;
        this.changeDetectorRef = changeDetectorRef;
        this.cycleBean = new _bean_cycle_bean__WEBPACK_IMPORTED_MODULE_2__["CycleBean"]();
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["CALENDAR_CN"];
        //提示信息
        this.msgs = [];
        //出参
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDisable = false;
        this.isOr = [];
        this.isRf = [];
        this.isRm = [];
        this.isRe = [];
        this.isRed = false;
        this.changeRed = false;
        this.show = false;
        //设置参考日期类型
        this.refrDtTpCodeShow = false;
        //周期校验控制
        this.adjPrdDtyKeyBoardShow = false;
        //周年调整日历
        this.adjPrdCdrShow = false;
        this.checkZzNum = app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["checkZzNum"];
        this.codeValues();
        this.isOr = this.code['IsOr'];
        this.isRf = this.code['IsRf'];
        this.isRm = this.code['IsRm'];
        this.isRe = this.code['IsRe'];
        //审核，工作流
        if (this.activatedRoute.snapshot.params.taskCategoryId) {
            this.taskCategoryId = this.activatedRoute.snapshot.params.taskCategoryId;
        }
    }
    CycleAddComponent.prototype.ngOnInit = function () {
        var session = window.sessionStorage;
        if (session.getItem('para')) {
            session.removeItem('para');
        }
        this.userform = this.fb.group({
            'reprncPlnName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["specialSymbol"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200)]),
            'effDt': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'invalDt': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator),
            // 'mvmtAdjCode': new FormControl('', Validators.required),
            'prdAdjCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'refrDtTpCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator),
            'adjPrdDty': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator]),
            'adjPrdCoCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator),
            'adjPrdCdr': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator),
            'intRateDrcCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'txInf': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(60), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator]),
        });
        this.cycleBean.refrDtTpCode = '';
        this.cycleBean.adjPrdCdr = '';
        this.cycleBean.refrDtTpCode = '';
    };
    CycleAddComponent.prototype.ngOnChanges = function () {
        this.cycleBean = new _bean_cycle_bean__WEBPACK_IMPORTED_MODULE_2__["CycleBean"]();
    };
    //码值
    CycleAddComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //做置灰
    CycleAddComponent.prototype.disableText = function () {
        if (this.cycleBean.prdAdjCode == '0') {
            this.cycleBean.refrDtTpCode = '';
            this.cycleBean['adjPrdDty'] = null;
            this.cycleBean.adjPrdCoCode = '';
            this.cycleBean.adjPrdCdr = '';
            this.show = true;
            this.refrDtTpCodeShow = true;
            this.adjPrdCdrShow = true;
            this.adjPrdDtyKeyBoardShow = false;
        }
        else {
            this.refrDtTpCodeShow = false;
        }
    };
    //参考日期类型校验
    CycleAddComponent.prototype.refrDtTpCodeValidate = function () {
        if (this.cycleBean.refrDtTpCode == '1') {
            //设置周期数量
            this.cycleBean.adjPrdDty = null;
            //设置周期单位
            this.cycleBean.adjPrdCoCode = "";
            this.show = true;
            this.adjPrdCdrShow = false;
            this.changeRed = false;
        }
        else {
            if (this.cycleBean.refrDtTpCode == '2' || this.cycleBean.refrDtTpCode == '3' || this.cycleBean.refrDtTpCode == '4' || this.cycleBean.refrDtTpCode == '5') {
                this.show = false;
                this.adjPrdCdrShow = true;
                this.cycleBean.adjPrdCdr = "";
                this.changeRed = false;
            }
        }
        if (!this.cycleBean.refrDtTpCode) {
            this.changeRed = true;
        }
    };
    //校验
    CycleAddComponent.prototype.keyboard = function (event) {
        if (event.target.value.length > 0) {
            this.changeRed = false;
        }
        else {
            if (event.target.value.length <= 0) {
                this.changeRed = true;
            }
        }
    };
    //校验周期
    CycleAddComponent.prototype.adjPrdDtyKeyBoard = function (event) {
        if (this.cycleBean.prdAdjCode != '0') {
            if (event.target.value.length > 0) {
                this.adjPrdDtyKeyBoardShow = this.checkZzNum(null, event.target.value) != null ? true : false;
            }
            else {
                this.adjPrdDtyKeyBoardShow = false;
            }
        }
        else {
            this.adjPrdDtyKeyBoardShow = false;
        }
    };
    //判断周期数量不能为空
    CycleAddComponent.prototype.adjPrdDtyIsEmpt = function () {
        if (!this.cycleBean.adjPrdDty && this.cycleBean.refrDtTpCode && this.cycleBean.refrDtTpCode != '1') {
            return true;
        }
        else {
            return false;
        }
    };
    //判断周期单位不能为空
    CycleAddComponent.prototype.adjPrdCoCodeIsEmpt = function () {
        if (!this.cycleBean.adjPrdCoCode && this.cycleBean.refrDtTpCode && this.cycleBean.refrDtTpCode != '1') {
            return true;
        }
        else {
            return false;
        }
    };
    //周年调整日历填写错误提示
    CycleAddComponent.prototype.dataCheck = function (val) {
        var _this = this;
        var arr1 = [];
        arr1 = val.split(',');
        arr1.forEach(function (item) {
            if (item.match(/^(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))|\,)$/)) {
                return _this.changeDate = false;
            }
            else {
                return _this.changeDate = true;
            }
        });
        if (arr1.length > 12) {
            return this.changeDateMax = true;
        }
        else {
            return this.changeDateMax = false;
        }
        ;
    };
    //日期填写错误提示
    //  dataCheck2(val) {
    //   let arr2=[]; 
    //   // arr2 = val.split(',');
    //   arr2.forEach((item) => {
    //     if(item.match(/^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/)) {
    //       return this.changeDate2 = false;
    //     }  else {
    //       return this.changeDate2 = true
    //     }
    //   });
    // }
    //判断周年调整日历不能为空
    CycleAddComponent.prototype.adjPrdCdrIsEmpt = function () {
        // if (this.cycleBean.adjPrdCdr) {
        //   this.isRed = false;
        // }
        if (!this.cycleBean.adjPrdCdr && this.cycleBean.refrDtTpCode && this.cycleBean.refrDtTpCode == '1') {
            return true;
        }
        else {
            return false;
        }
    };
    //提交
    CycleAddComponent.prototype.submit = function () {
        var _this = this;
        if (this.isDisable) {
            return;
        }
        //周年调整日历校验
        if (this.changeDate || this.changeDateMax) {
            return;
        }
        //判断周年调整日历不能为空
        if (!this.cycleBean.adjPrdCdr && this.cycleBean.refrDtTpCode && this.cycleBean.refrDtTpCode == '1') {
            return;
        }
        // 周期调整为是的时候参考日期类型必填
        if (this.cycleBean.prdAdjCode == '1' && this.cycleBean.refrDtTpCode == '') {
            return;
        }
        // 周期数量正整数验证
        if (this.cycleBean.prdAdjCode == '1' && this.cycleBean.refrDtTpCode != '1' && this.checkZzNum(null, this.cycleBean.adjPrdDty)) {
            return;
        }
        //判断周期数量不能为空
        if (!this.cycleBean.adjPrdDty && this.cycleBean.refrDtTpCode && this.cycleBean.refrDtTpCode != '1') {
            return;
        }
        //判断周期单位不能为空
        if (!this.cycleBean.adjPrdCoCode && this.cycleBean.refrDtTpCode && this.cycleBean.refrDtTpCode != '1') {
            return;
        }
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
        ;
        //校验周期
        if (this.cycleBean.prdAdjCode != '0' && !this.cycleBean.prdAdjCode) {
            if (this.cycleBean.adjPrdDty) {
                if (this.checkZzNum(null, this.cycleBean.adjPrdDty)) {
                    return;
                }
            }
        }
        //周期调  整下拉控制
        // if (this.cycleBean.prdAdjCode == '1') {
        //   if (!this.cycleBean.adjPrdCdr || this.cycleBean.adjPrdCdr == '') {
        //     this.changeRed = true;
        //     this.show = false;
        //     return;
        //   }
        // }
        //参考日期类型为1 周年调整日历 必填校验 
        // if (this.cycleBean.prdAdjCode != '0') {
        //   if (this.cycleBean.refrDtTpCode == '1') {
        //     if (!this.cycleBean.adjPrdCdr) {
        //       this.isRed = true;
        //       this.changeRed = false;
        //       return;
        //     }
        //   } else {
        //     if (this.cycleBean.refrDtTpCode != '1') {
        //       if (!this.cycleBean.adjPrdDty || !this.cycleBean.adjPrdCoCode) {
        //         this.adjPrdDtyKeyBoardShow = true;
        //         this.changeRed = false;
        //         return;
        //       }
        //     }
        //   }
        // }
        this.isDisable = true;
        //提交服务
        this.cycleBean.effDt = this.commfunc.transDateN(this.effDt); //生效日期转换
        this.cycleBean.invalDt = this.commfunc.transDateN(this.invalDt); //失效日期转换   
        this.cycleBean['taskCategoryId'] = this.taskCategoryId + '';
        this.httpService.addRateRepriceRuleService(this.cycleBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                // this.beanRates = new BeanRates();
                // this.outValue.emit(false);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                setTimeout(function () {
                    window.history.go(-1);
                }, 1000);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                _this.isDisable = false;
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
            _this.isDisable = false;
        });
    };
    //返回
    CycleAddComponent.prototype.back = function () {
        window.history.go(-1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CycleAddComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CycleAddComponent.prototype, "outValue", void 0);
    CycleAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cycle-add',
            template: __webpack_require__(/*! ./cycle-add.component.html */ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-add/cycle-add.component.html"),
            styles: [__webpack_require__(/*! ./cycle-add.component.scss */ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-add/cycle-add.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_valuation_http_valuation_http_service__WEBPACK_IMPORTED_MODULE_8__["ValuationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], CycleAddComponent);
    return CycleAddComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-update/cycle-update.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-update/cycle-update.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userform\">\r\n  <div class=\"cycle-update ui-g-12 module\">\r\n    <!-- <h3>周期重定价规则-修改</h3> -->\r\n    <div class=\"ui-g-12 content\">\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"row\">\r\n          <div class=\"ui-g-3 add-text\" appValidation>周期重定价编号：</div>\r\n          <div class=\"ui-g-7\"><input formControlName=\"reprncPlnNum\" class=\"addcolor\" readonly=\"true\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"list.reprncPlnNum\"></div>\r\n        </div>\r\n        <!-- <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['reprncPlnNum'].valid&&userform.controls['reprncPlnNum'].dirty\">\r\n          周期重定价规则编号不能为空!\r\n        </div>\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"userform.controls['reprncPlnName'].valid&&userform.controls['reprncPlnNum'].dirty&&userform.controls['reprncPlnNum'].value.length>200 \">\r\n          周期重定价名称不能超过200位字符!\r\n        </div> -->\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"row\">\r\n          <div class=\"ui-g-3 add-text1\" appValidation>周期重定价名称：</div>\r\n          <div class=\"ui-g-7\"><input type=\"text\" formControlName=\"reprncPlnName\" size=\"30\" pInputText [(ngModel)]=\"list.reprncPlnName\"></div>\r\n        </div>\r\n        <!-- <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['reprncPlnName'].valid&&userform.controls['reprncPlnName'].dirty\">\r\n          周期重定价名称不能为空!\r\n        </div>\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"userform.controls['reprncPlnName'].valid&&userform.controls['reprncPlnName'].dirty&&userform.controls['reprncPlnName'].value.length>200 \">\r\n          周期重定价名称不能超过200位字符!\r\n        </div> -->\r\n        <div class=\"requireLabel2\" style=\"color:red;\" *ngIf=\"!userform.controls['reprncPlnName'].valid&&userform.controls['reprncPlnName'].dirty\">\r\n          <span *ngIf=\"userform.hasError('required','reprncPlnName')\">周期重定价名称不能为空!</span>\r\n          <span *ngIf=\"!userform.hasError('required','reprncPlnName') && userform.controls['reprncPlnName'].value.length>200\"> 周期重定价名称不能超过200位字符!</span>\r\n          <span *ngIf=\"!userform.hasError('required','reprncPlnName') && userform.controls['reprncPlnName'].value.length<=200 && userform.hasError('specialSymbol','reprncPlnName')\">周期重定价名称不能为特殊字符</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 content\">\r\n      <div class=\"ui-g-6 data\">\r\n        <div class=\"row\">\r\n          <div class=\"ui-g-3 add-text\" appValidation>生效日期：</div>\r\n          <div class=\"ui-g-7\"><p-calendar formControlName=\"effDt\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" [(ngModel)]=\"effDt\"\r\n            [locale]=\"ch\" dateFormat=\"yy-mm-dd\" [showIcon]=\"true\" showButtonBar=\"true\" [showOtherMonths]=\"false\" ></p-calendar> </div>\r\n        </div>\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['effDt'].valid&&userform.controls['effDt'].dirty\">\r\n          生效日期不能为空!\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-6 data\">\r\n        <div class=\"row\">\r\n          <div class=\"ui-g-3 add-text1\">失效日期：</div>\r\n          <div class=\"ui-g-7\"><p-calendar formControlName=\"invalDt\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" [locale]=\"ch\"\r\n            [(ngModel)]=\"invalDt\" dateFormat=\"yy-mm-dd\" [showIcon]=\"true\" showButtonBar=\"true\" [showOtherMonths]=\"false\" ></p-calendar> </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 content\">\r\n      <!-- <div class=\"ui-g-6\">\r\n        <div class=\"row\">\r\n          <span class=\"ui-g-3 add-text\" appValidation>机动调整</span>\r\n          <p-dropdown formControlName=\"mvmtAdjCode\" [options]=\"isOr\" [(ngModel)]=\"list.mvmtAdjCode\"></p-dropdown>\r\n        </div>\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['mvmtAdjCode'].valid&&userform.controls['mvmtAdjCode'].dirty\">\r\n          机动调整不能为空!\r\n        </div>\r\n      </div> -->\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"row\">\r\n          <div class=\"ui-g-3 add-text\" appValidation>周期调整：</div>\r\n          <div class=\"ui-g-7 text_right\"><p-dropdown formControlName=\"prdAdjCode\" [options]=\"isOr\" [(ngModel)]=\"list.prdAdjCode\" (onChange)=\"disableText()\"></p-dropdown></div>\r\n        </div>\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['prdAdjCode'].valid&&userform.controls['prdAdjCode'].dirty\">\r\n          周期调整不能为空!\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"row\">\r\n          <div class=\"ui-g-3 add-text1\">参考日期类型：</div>\r\n          <div class=\"ui-g-7 text_right\" *ngIf=\"!refrDtTpCodeShow\"><p-dropdown  formControlName=\"refrDtTpCode\" [options]=\"isRf\" [(ngModel)]=\"list.refrDtTpCode\" [style]=\"{'width':'140px'}\"\r\n            (keyup)=\"keyboard($event)\" (onChange)=\"refrDtTpCodeValidate()\"></p-dropdown></div>\r\n            <div class=\"ui-g-7 text_right\" *ngIf=\"refrDtTpCodeShow\"><p-dropdown  readonly=\"refrDtTpCodeShow\" class=\"addcolor\" formControlName=\"refrDtTpCode\" [options]=\"isRf\" [(ngModel)]=\"list.refrDtTpCode\"\r\n            [style]=\"{'width':'140px'}\"></p-dropdown></div>\r\n        </div>\r\n        <div class=\"requireLabel2\" style=\"color:red;\" *ngIf=\"list.prdAdjCode=='1'&&changeRed\">\r\n          参考日期类型不能为空!\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 content\">\r\n      <div class=\"ui-g-6\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"ui-g-3 add-text\">周期数量：</div>\r\n          <div class=\"ui-g-7\" *ngIf=\"!show\"><input  (keyup)=\"adjPrdDtyKeyBoard($event)\" formControlName=\"adjPrdDty\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"list.adjPrdDty\"></div>\r\n            <div class=\"ui-g-7\" *ngIf=\"show\"><input  readonly=\"show\" class=\"addcolor\" formControlName=\"adjPrdDty\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"list.adjPrdDty\"></div>\r\n          <div class=\"requireLabel\" style=\"color:red\" *ngIf=\"adjPrdDtyKeyBoardShow\">\r\n            必须为正整数！\r\n          </div>\r\n          <div class=\"requireLabel\" *ngIf=\"adjPrdDtyIsEmpt()\" style=\"color:red;\">\r\n            周期数量不能为空！\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"row\">\r\n          <div class=\"ui-g-3 add-text1\">周期单位：</div>\r\n          <div class=\"ui-g-7 text_right\" *ngIf=\"!show\"><p-dropdown  formControlName=\"adjPrdCoCode\" [options]=\"isRm\" [(ngModel)]=\"list.adjPrdCoCode\" [style]=\"{'width':'140px'}\"></p-dropdown></div>\r\n            <div class=\"ui-g-7 text_right\" *ngIf=\"show\"><p-dropdown  readonly=\"show\" class=\"addcolor\" formControlName=\"adjPrdCoCode\" [options]=\"isRm\" [(ngModel)]=\"list.adjPrdCoCode\"\r\n            [style]=\"{'width':'140px'}\"></p-dropdown></div>\r\n          <div class=\"requireLabel2\" *ngIf=\"adjPrdCoCodeIsEmpt()\" style=\"color:red;\">\r\n            周期单位不能为空！\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 content\">\r\n      <div class=\"ui-g-6 my\">\r\n        <div class=\"row\">\r\n          <div class=\"ui-g-3 add-text\">周年调整日历：</div>\r\n          <!-- <p-calendar *ngIf=\"!adjPrdCdrShow\" formControlName=\"adjPrdCdr\" [(ngModel)]=\"list.adjPrdCdr\" [showIcon]=\"true\" dateFormat=\"mm-dd\"\r\n            dateType=\"string\"></p-calendar> -->\r\n            <div class=\"ui-g-7 text_right\" *ngIf=\"!adjPrdCdrShow\"><input type=\"text\" formControlName=\"adjPrdCdr\" size=\"30\" pInputText [(ngModel)]=\"list.adjPrdCdr\" [ngClass]=\"{'isred':isRed}\"\r\n            (change)=\"dataCheck(list.adjPrdCdr)\"></div>\r\n            <div class=\"ui-g-7 text_right\" *ngIf=\"adjPrdCdrShow\"><input type=\"text\" readonly=\"adjPrdCdrShow\" class=\"addcolor\" formControlName=\"adjPrdCdr\" size=\"30\" pInputText [(ngModel)]=\"list.adjPrdCdr\"\r\n            [ngClass]=\"{'isred':isRed}\" (change)=\"dataCheck(list.adjPrdCdr)\"></div>\r\n        </div>\r\n        <div class=\"requireLabel3\" style=\"color:red;\" *ngIf=\"list.refrDtTpCode=='1'&&list.adjPrdCdr==''\">\r\n          周年调整日历不能为空!\r\n        </div>\r\n        <div class=\"requireLabel2\" style=\"color:red;\" *ngIf=\"list.adjPrdCdr!=''&&changeDate\">\r\n          周年调整日历格式为01-01中间用英文逗号隔开!\r\n        </div>\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"list.adjPrdCdr!=''&&changeDateMax\">\r\n          周年调整日历最长不超过12个!\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"row\">\r\n          <div class=\"ui-g-3 add-text1\" appValidation>利率调整方向：</div>\r\n          <div class=\"ui-g-7 text_right\"><p-dropdown formControlName=\"intRateDrcCode\" [options]=\"isRe\" [(ngModel)]=\"list.intRateDrcCode\" ></p-dropdown></div>\r\n        </div>\r\n        <div class=\"requireLabel2\" style=\"color:red;\" *ngIf=\"!userform.controls['intRateDrcCode'].valid&&userform.controls['intRateDrcCode'].dirty\">\r\n          利率调整方向不能为空!\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 content\">\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"row\">\r\n          <div class=\"ui-g-3 add-text\">备注：</div>\r\n          <div class=\"ui-g-7\"><input type=\"text\" formControlName=\"txInf\" size=\"30\" pInputText [(ngModel)]=\"list.txInf\"></div>\r\n        </div>\r\n        <div class=\"requireLabel posi-ab left-34\" style=\"color:red;\" *ngIf=\"!userform.controls['txInf'].valid&&userform.controls['txInf'].dirty\">\r\n          <span *ngIf=\"!userform.hasError('required','txInf') && userform.controls['txInf'].value.length>60\">备注不能超过60位字符!</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 update-botton\">\r\n         <button [disabled]=\"isDisable\" pButton type=\"button\" label=\"保存\" (click)=\"update()\"></button>\r\n         <button pButton type=\"button\" label=\"取消\" (click)=\"back()\"></button>\r\n     </div>\r\n  </div>\r\n</form>\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-update/cycle-update.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-update/cycle-update.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cycle-update {\n  background-color: #fafafa;\n  padding: 0;\n  margin-bottom: -45px;\n  box-shadow: none; }\n  .cycle-update .text_right {\n    text-align: left; }\n  .cycle-update #loginName {\n    background: #ededed; }\n  .cycle-update .addcolor {\n    background: #f1f1ec; }\n  .cycle-update .content .row .add-text {\n    display: inline-block;\n    text-align: right;\n    line-height: 22px; }\n  .cycle-update .content .row .add-text1 {\n    display: inline-block;\n    text-align: right;\n    line-height: 22px; }\n  .cycle-update .content .requireLabel {\n    margin-left: -113%;\n    display: inline-block;\n    margin-top: 5%; }\n  .cycle-update .content .requireLabel2 {\n    margin-left: -87%;\n    display: inline-block;\n    margin-top: 5%; }\n  .cycle-update .content .requireLabel3 {\n    margin-left: -110%;\n    display: inline-block;\n    margin-top: 5%; }\n  .cycle-update .ui-g-12 {\n    padding-top: 10px;\n    padding-bottom: 0; }\n  .cycle-update .ui-g-12 .ui-g-6 {\n      padding-top: 0;\n      padding-bottom: 0; }\n  .cycle-update .update-botton {\n    text-align: center; }\n  .cycle-update .mr-8 {\n    margin-right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3ZhbHVhdGlvbi9pbnRlcmVzdC1yYXRlLW1hbmFnZS9sb2FuLXJ1bGUvY3ljbGUvY3ljbGUtdXBkYXRlL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXHZhbHVhdGlvblxcaW50ZXJlc3QtcmF0ZS1tYW5hZ2VcXGxvYW4tcnVsZVxcY3ljbGVcXGN5Y2xlLXVwZGF0ZVxcY3ljbGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLFVBQVU7RUFFVixvQkFBb0I7RUFDcEIsZ0JBQWdCLEVBQUE7RUFMcEI7SUFPUSxnQkFBZ0IsRUFBQTtFQVB4QjtJQVVRLG1CQUFtQixFQUFBO0VBVjNCO0lBYVEsbUJBQW1CLEVBQUE7RUFiM0I7SUFtQmlCLHFCQUFxQjtJQUN0QixpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7RUFyQmpDO0lBeUJnQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBO0VBM0JqQztJQStCWSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWMsRUFBQTtFQWpDMUI7SUFvQ1ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixjQUFjLEVBQUE7RUF0QzFCO0lBeUNZLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYyxFQUFBO0VBM0MxQjtJQStDUSxpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7RUFoRHpCO01Ba0RZLGNBQWM7TUFDZCxpQkFBaUIsRUFBQTtFQW5EN0I7SUEwRFEsa0JBQWtCLEVBQUE7RUExRDFCO0lBNkRRLGlCQUNKLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvdmFsdWF0aW9uL2ludGVyZXN0LXJhdGUtbWFuYWdlL2xvYW4tcnVsZS9jeWNsZS9jeWNsZS11cGRhdGUvY3ljbGUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN5Y2xlLXVwZGF0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC8vIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTQ1cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLnRleHRfcmlnaHR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgICNsb2dpbk5hbWV7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxuICAgIH1cclxuICAgIC5hZGRjb2xvcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWVjO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAuYWRkLXRleHQge1xyXG4gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFkZC10ZXh0MSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogMzclO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmVxdWlyZUxhYmVsIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMTMlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVxdWlyZUxhYmVsMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtODclO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVxdWlyZUxhYmVsMyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTEwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWktZy0xMiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgLnVpLWctNiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyAuZGF0YXtcclxuICAgIC8vICAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xyXG4gICAgLy8gfVxyXG4gICAgLnVwZGF0ZS1ib3R0b24ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5tci04IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweFxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-update/cycle-update.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-update/cycle-update.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: CycleUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycleUpdateComponent", function() { return CycleUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bean_cycle_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../bean/cycle.bean */ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/bean/cycle.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_valuation_http_valuation_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/valuation/http/valuation.http.service */ "./src/app/pages/tzb/valuation/http/valuation.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { IsOr, IsRf, IsRm, IsRe } from './../../constant/codeValue';





var CycleUpdateComponent = /** @class */ (function () {
    function CycleUpdateComponent(httpService, commfunc, fb, ce) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.ce = ce;
        this.cycleBean = new _bean_cycle_bean__WEBPACK_IMPORTED_MODULE_2__["CycleBean"]();
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["CALENDAR_CN"];
        //出参
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //提示信息
        this.msgs = [];
        this.isOr = [];
        this.isRf = [];
        this.isRm = [];
        this.isRe = [];
        this.adjPrdCdr1 = null;
        this.list = {};
        this.isRed = false;
        this.changeRed = false;
        this.show = false;
        //设置参考日期类型
        this.refrDtTpCodeShow = false;
        //周期校验控制
        this.adjPrdDtyKeyBoardShow = false;
        //周年调整日历
        this.adjPrdCdrShow = false;
        this.checkZzNum = app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["checkZzNum"];
        this.isDisable = false;
        this.codeValues();
        this.isOr = this.code['IsOr'];
        this.isRf = this.code['IsRf'];
        this.isRm = this.code['IsRm'];
        this.isRe = this.code['IsRe'];
    }
    CycleUpdateComponent.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'reprncPlnNum': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'reprncPlnName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_5__["specialSymbol"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(200)]),
            'effDt': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'invalDt': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].nullValidator),
            // 'mvmtAdjCode': new FormControl('', Validators.required),
            'prdAdjCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'refrDtTpCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].nullValidator),
            'adjPrdDty': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].nullValidator]),
            'adjPrdCoCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].nullValidator),
            'adjPrdCdr': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].nullValidator),
            'intRateDrcCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'txInf': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(60), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].nullValidator]),
        });
        this.list.adjPrdDty = "";
    };
    CycleUpdateComponent.prototype.ngOnChanges = function () {
        var _this = this;
        // let params = {};
        // if (this.inValue) {
        //   params = JSON.parse(this.inValue);
        // }
        if (!this.inValue) {
            return;
        }
        var param = {
            reprncPlnNum: this.inValue,
        };
        //查询方法
        this.httpService.queryRateRepriceRuleByIdService(param).subscribe(function (data) {
            if (data.resultMap) {
                _this.list = data.resultMap;
            }
            _this.disableText();
            _this.refrDtTpCodeValidate();
            _this.keyboard({ target: { value: _this.list.refrDtTpCode } });
            _this.adjPrdDtyKeyBoard({ target: { value: _this.list.adjPrdDty } });
            _this.adjPrdDtyIsEmpt();
            _this.adjPrdCoCodeIsEmpt();
            _this.adjPrdCdrIsEmpt();
            //接收后台日历返回数据
            _this.effDt = new Date(_this.list.effDt);
            _this.invalDt = new Date(_this.list.invalDt);
            _this.old = _this.list.effDt;
        }, function (err) {
        });
    };
    //码值
    CycleUpdateComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //做置灰
    CycleUpdateComponent.prototype.disableText = function () {
        if (this.list.prdAdjCode == '0') {
            this.list.refrDtTpCode = '';
            this.list['adjPrdDty'] = null;
            this.list.adjPrdCoCode = '';
            this.list['adjPrdCdr'] = '';
            this.show = true;
            this.refrDtTpCodeShow = true;
            this.adjPrdCdrShow = true;
            this.adjPrdDtyKeyBoardShow = false;
        }
        else {
            // if(this.cycleBean.prdAdjCode == '1'){
            if (this.list.adjPrdDty) {
                if (this.checkZzNum(null, this.list.adjPrdDty)) {
                    this.adjPrdDtyKeyBoardShow = true;
                }
                else {
                    this.adjPrdDtyKeyBoardShow = false;
                }
            }
            this.show = false;
            this.refrDtTpCodeShow = false;
            this.adjPrdCdrShow = false;
        }
    };
    //参考日期类型校验
    CycleUpdateComponent.prototype.refrDtTpCodeValidate = function () {
        if (this.list.refrDtTpCode == '1') {
            //设置周期数量
            this.list.adjPrdDty = null;
            //设置周期单位
            this.list.adjPrdCoCode = "";
            this.show = true;
            this.adjPrdCdrShow = false;
            this.changeRed = false;
        }
        else {
            if (this.list.refrDtTpCode == '2' || this.list.refrDtTpCode == '3' || this.list.refrDtTpCode == '4' || this.list.refrDtTpCode == '5') {
                this.show = false;
                this.adjPrdCdrShow = true;
                this.list['adjPrdCdr'] = "";
                this.changeRed = false;
            }
        }
        if (!this.list.refrDtTpCode) {
            this.changeRed = true;
        }
    };
    //校验
    CycleUpdateComponent.prototype.keyboard = function (event) {
        if (event.target.value) {
            this.changeRed = false;
        }
        else {
            // if (event.target.value.length <= 0) {
            this.changeRed = true;
            // }
        }
    };
    //校验周期
    CycleUpdateComponent.prototype.adjPrdDtyKeyBoard = function (event) {
        if (this.list.prdAdjCode != '0') {
            if (event.target.value) {
                this.adjPrdDtyKeyBoardShow = this.checkZzNum(null, event.target.value) != null ? true : false;
            }
            else {
                this.adjPrdDtyKeyBoardShow = false;
            }
        }
        else {
            this.adjPrdDtyKeyBoardShow = false;
        }
    };
    //判断周期数量不能为空
    CycleUpdateComponent.prototype.adjPrdDtyIsEmpt = function () {
        if (!this.list.adjPrdDty && this.list.refrDtTpCode && this.list.refrDtTpCode != '1') {
            return true;
        }
        else {
            return false;
        }
    };
    //判断周期单位不能为空
    CycleUpdateComponent.prototype.adjPrdCoCodeIsEmpt = function () {
        if (!this.list.adjPrdCoCode && this.list.refrDtTpCode && this.list.refrDtTpCode != '1') {
            return true;
        }
        else {
            return false;
        }
    };
    //周年调整日历填写错误提示
    CycleUpdateComponent.prototype.dataCheck = function (val) {
        var _this = this;
        var arr1 = [];
        arr1 = val.split(',');
        arr1.forEach(function (item) {
            if (item.match(/^(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))|\,)$/)) {
                return _this.changeDate = false;
            }
            else {
                return _this.changeDate = true;
            }
        });
        if (arr1.length > 12) {
            return this.changeDateMax = true;
        }
        else {
            return this.changeDateMax = false;
        }
    };
    //判断周年调整日历不能为空
    CycleUpdateComponent.prototype.adjPrdCdrIsEmpt = function () {
        if (!this.list['adjPrdCdr'] && this.list.refrDtTpCode && this.list.refrDtTpCode == '1') {
            return true;
        }
        else {
            return false;
        }
    };
    //修改
    CycleUpdateComponent.prototype.update = function () {
        var _this = this;
        if (this.isDisable) {
            return;
        }
        // 中文名称长度校验
        if (this.list.reprncPlnName.length > 200) {
            return;
        }
        // 参考日期类型校验
        if (this.list.prdAdjCode == '1' && this.changeRed) {
            return;
        }
        //周年调整日历不能为空
        if (this.list.refrDtTpCode == '1') {
            if (!this.list['adjPrdCdr']) {
                this.isRed = true;
                return;
            }
        }
        //周年调整日历校验
        if (this.changeDate || this.changeDateMax) {
            return;
        }
        // 周期数量正整数验证
        if (this.list.prdAdjCode == '1' && this.list.refrDtTpCode != '1' && this.checkZzNum(null, this.list.adjPrdDty)) {
            return;
        }
        //判断周期数量不能为空
        if (!this.list.adjPrdDty && this.list.refrDtTpCode && this.list.refrDtTpCode != '1') {
            return;
        }
        //判断周期单位不能为空
        if (!this.list.adjPrdCoCode && this.list.refrDtTpCode && this.list.refrDtTpCode != '1') {
            return;
        }
        //判断周年调整日历不能为空
        if (this.list['adjPrdCdr'] == '' && this.list.refrDtTpCode && this.list.refrDtTpCode == '1') {
            this.isRed = true;
        }
        else {
            this.isRed = false;
        }
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
        ;
        //校验周期
        if (this.list.prdAdjCode != '0' && !this.list.prdAdjCode) {
            if (this.list.adjPrdDty) {
                if (this.checkZzNum(null, this.list.adjPrdDty)) {
                    this.adjPrdDtyKeyBoardShow = true;
                    return;
                }
                else {
                    this.adjPrdDtyKeyBoardShow = false;
                }
            }
        }
        else {
            this.adjPrdDtyKeyBoardShow = false;
        }
        //参考日期类型为1 周年调整日历 必填校验 
        // if (this.list.refrDtTpCode == '1') {
        //   if (!this.list['adjPrdCdr']) {
        //     this.isRed = true;
        //     return;
        //   } else {
        //     this.isRed = false;
        //   }
        // } else {
        //   if (this.list.refrDtTpCode != '1') {
        //     if (!this.list.adjPrdDty || !this.list.adjPrdCoCode) {
        //       this.adjPrdDtyKeyBoardShow = false;
        //       return;
        //     }
        //   }
        // }
        //周期调整下拉控制
        // if (this.list.prdAdjCode == '1') {
        //   if (!this.list['adjPrdCdr'] || this.list['adjPrdCdr'] == '') {
        //     this.changeRed = true;
        //     this.show = false;
        //     return;
        //   }
        // }
        //提交服务
        this.list['oldEffDt'] = this.old;
        this.list.effDt = this.commfunc.transDateN(this.effDt); //生效日期转换
        this.list.invalDt = this.commfunc.transDateN(this.invalDt); //失效日期转换 
        // this.list['adjPrdCdr'] = this.commfunc.transDateN(this.adjPrdCdr);//调整周期日历转换 
        this.isDisable = true;
        this.httpService.modifyRateRepriceRuleService(this.list).subscribe(function (data) {
            // data.returnCode=this.list;
            if (data.returnCode.code == "success") {
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.outValue.emit(data.returnCode.code);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                _this.isDisable = false;
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务错误" });
            _this.isDisable = false;
        });
    };
    //返回
    CycleUpdateComponent.prototype.back = function () {
        this.outValue.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CycleUpdateComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CycleUpdateComponent.prototype, "outValue", void 0);
    CycleUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cycle-update',
            template: __webpack_require__(/*! ./cycle-update.component.html */ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-update/cycle-update.component.html"),
            styles: [__webpack_require__(/*! ./cycle-update.component.scss */ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-update/cycle-update.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_valuation_http_valuation_http_service__WEBPACK_IMPORTED_MODULE_7__["ValuationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], CycleUpdateComponent);
    return CycleUpdateComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cycle ui-g-12 module\">\r\n  <!-- <h3>周期重定价规则-查询</h3> -->\r\n  <header-title [Info]=\"'周期重定价规则查询'\"></header-title>\r\n  <div class=\"cycle-con\">\r\n    <div class=\"ui-g-12 look-gap cycle-background\">\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-3 text_right\">周期重定价编号：</div>\r\n        <div class=\"ui-g-7\"><input type=\"text\" size=\"30\" pInputText [(ngModel)]=\"cycleBean.reprncPlnNum\"></div>\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-3 text_right\">周期重定价名称：</div>\r\n        <div class=\"ui-g-7\"><input type=\"text\" size=\"30\" pInputText [(ngModel)]=\"cycleBean.reprncPlnName\"></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"cycle-background ui-g-12 \">\r\n        <div class=\"ui-g-6 data\">\r\n          <div class=\"ui-g-3 text_right\">生效日期起日：</div>\r\n          <div class=\"ui-g-7\"><p-calendar [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" [(ngModel)]=\"effDt\" [locale]=\"ch\" dateFormat=\"yy-mm-dd\"\r\n            [showIcon]=\"true\" showButtonBar=\"true\" [showOtherMonths]=\"false\" ></p-calendar></div>\r\n        </div>\r\n        <div class=\"ui-g-6 data\">\r\n          <div class=\"ui-g-3 text_right\">失效日期起日：</div>\r\n          <div class=\"ui-g-7\"><p-calendar [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" [locale]=\"ch\" [(ngModel)]=\"invalDtStart\" dateFormat=\"yy-mm-dd\"\r\n            [showIcon]=\"true\" showButtonBar=\"true\" [showOtherMonths]=\"false\" ></p-calendar></div>\r\n        </div>\r\n      </div>\r\n    <div class=\"cycle-background ui-g-12 \">\r\n        <div class=\"ui-g-6 data\">\r\n          <div class=\"ui-g-3 text_right\">生效日期止日：</div>\r\n          <div class=\"ui-g-7\"><p-calendar [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" [(ngModel)]=\"invalDt\" [locale]=\"ch\" dateFormat=\"yy-mm-dd\"\r\n            [showIcon]=\"true\" showButtonBar=\"true\" [showOtherMonths]=\"false\" ></p-calendar></div>\r\n        </div>\r\n        <div class=\"ui-g-6 data\">\r\n          <span class=\"ui-g-3 text_right\">失效日期止日：</span>\r\n          <div class=\"ui-g-7\"><p-calendar [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" [locale]=\"ch\" [(ngModel)]=\"invalDtEnd\" dateFormat=\"yy-mm-dd\"\r\n            [showIcon]=\"true\" showButtonBar=\"true\" [showOtherMonths]=\"false\" ></p-calendar></div>\r\n        </div>\r\n      </div>\r\n    <div class=\"ui-g-12 cycle-background\">\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-3 text_right\">周期调整：</div>\r\n        <div class=\"ui-g-7\"><p-dropdown [options]=\"isOr\" [(ngModel)]=\"cycleBean.prdAdjCode\"></p-dropdown></div>\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-3 text_right\">参考日期类型：</div>\r\n        <div class=\"ui-g-7\"><p-dropdown [options]=\"isRf\" [(ngModel)]=\"cycleBean.refrDtTpCode\"></p-dropdown></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 cycle-background\">\r\n      <div class=\"ui-g-6\">\r\n        <div class=\" ui-g-3 text_right\">利率调整方向：</div>\r\n        <div class=\"ui-g-7\"><p-dropdown [options]=\"isRe\" [(ngModel)]=\"cycleBean.intRateDrcCode\"></p-dropdown></div>\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <div class=\" ui-g-3 text_right\">状态：</div>\r\n        <div class=\"ui-g-7\"><p-dropdown [options]=\"isRcod\" [(ngModel)]=\"cycleBean.rcrdStCode\"></p-dropdown></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 cycle-background button-gap\">\r\n      <span class=\"ui-g-6\"><button class=\"fr ui-button search\" pButton type=\"button\" label=\"查询\" (click)=\"querySecle()\"></button></span>\r\n      <span class=\"ui-g-6\"><button class=\"fl ui-button reset\" pButton type=\"button\" label=\"重置\" (click)=\"newSet()\" ></button></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\" *ngIf=\"permissionCheck('SID01047_P0114') || permissionCheck('SID22047_P0114')\">\r\n    <span class=\"ui-g-12\"><button class=\"fr ui-button add\" pButton type=\"button\" label=\"增加\" (click)=\"add()\"></button></span>\r\n  </div>\r\n  <div class=\"ui-g-12 cyc base-table\">\r\n    <p-dataTable [value]=\"list\" [emptyMessage]=\"tabMesg\">\r\n      <!-- <p-column field=\"vin\" header=\"序号\"></p-column> -->\r\n      <p-column field=\"reprncPlnNum\" header=\"周期重定价编号\"></p-column>\r\n      <p-column field=\"reprncPlnName\" header=\"周期重定价名称\">\r\n        <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n          <span class=\"name\">{{car.reprncPlnName}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"effDt\" header=\"生效日期\"></p-column>\r\n      <p-column field=\"rcrdStCode\" header=\"状态\">\r\n        <ng-template let-ri=\"rowIndex\" let-col let-car=\"rowData\" pTemplate=\"body\">\r\n          <span>{{car.rcrdStCode | codeValuePie : isRcod}}</span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"操作\" [style]=\"{'width':'240px'}\">\r\n        <ng-template let-col let-car=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          <span (click)=\"detail(car)\" class=\"tabelDetailIco\" *ngIf=\"permissionCheck('SID01047_P0115') || permissionCheck('SID22047_P0115')\">详情</span>\r\n          <span (click)=\"update(car)\" class=\"tabelUpdateIco\" *ngIf=\"permissionCheck('SID01047_P0116') || permissionCheck('SID22047_P0116')\">修改</span>\r\n          <span (click)=\"delete(car)\" class=\"tabelDeleteIco\" *ngIf=\"permissionCheck('SID01047_P0117') || permissionCheck('SID22047_P0117')\">删除</span>\r\n          <!-- <button class=\"detailBtn\" pButton type=\"button\" label=\"详细\" (click)=\"detail(car)\"></button>\r\n          <button class=\"updateBtn\" pButton type=\"button\" label=\"修改\" (click)=\"update(car)\"></button>          \r\n          <button class=\"deleteBtn\" pButton type=\"button\" label=\"删除\" (click)=\"delete(car)\"></button> -->\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n    <p-paginator [first]=\"first\" rows=\"{{cycleBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"5\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n      (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\r\n    <!-- 弹出框-->\r\n    <p-dialog [(visible)]=\"display\" *ngIf=\"display\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=20>\r\n      <p-header>\r\n        {{headerTitle}}\r\n      </p-header>\r\n      <div id=\"pdialog\">\r\n        <app-cycle-update *ngIf=\"showModel=='1'\" (outValue)=\"updateCall($event)\" [inValue]=\"inValueCode\"></app-cycle-update>\r\n        <app-cycle-add *ngIf=\"showModel=='2'\" (outValue)=\"addCall($event)\"></app-cycle-add>\r\n        <app-cycle-detail *ngIf=\"showModel=='3'\" (outValue)=\"detailCall($event)\" [inValue]=\"inValueCode\"></app-cycle-detail>\r\n      </div>\r\n    </p-dialog>\r\n  </div>\r\n  <!-- 删除提示框-->\r\n  <p-confirmDialog></p-confirmDialog>\r\n  <!-- 提示信息 -->\r\n  <p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cycle {\n  padding: 0;\n  background-color: #fafafa; }\n  .cycle .text_right {\n    text-align: right;\n    display: inline-block;\n    line-height: 25px; }\n  .cycle .cycle-con {\n    background-color: #fafafa;\n    margin: 22px 1.1%; }\n  .cycle .cycle-con .cycle-background {\n      background-color: #f8f8f8; }\n  .cycle .cycle-con .ui-g-12 {\n      padding-top: 6px;\n      padding-bottom: 0px; }\n  .cycle .cycle-con .ui-g-12 .ui-g-6 {\n        padding-top: 0;\n        padding-bottom: 0; }\n  .cycle .cycle-con .look-gap {\n      padding-top: 30px; }\n  .cycle .cycle-con .button-gap {\n      padding-top: 15px;\n      padding-bottom: 20px; }\n  .cycle .cyc {\n    text-align: center; }\n  .cycle .reset-bor {\n    border-bottom: 1px dashed #ccc; }\n  .cycle .tabelDetailIco {\n    margin-left: 20px; }\n  .cycle .width-20 {\n    display: inline-block;\n    width: 22%; }\n  .cycle .width-10 {\n    display: inline-block;\n    width: 10%; }\n  .cycle .width-30 {\n    display: inline-block;\n    width: 41%; }\n  .cycle .lookup {\n    margin-left: 22%; }\n  .cycle .fr {\n    float: right; }\n  .cycle .fl {\n    float: left; }\n  .cycle .name {\n    word-break: break-all; }\n  #pdialog {\n  height: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3ZhbHVhdGlvbi9pbnRlcmVzdC1yYXRlLW1hbmFnZS9sb2FuLXJ1bGUvY3ljbGUvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcdmFsdWF0aW9uXFxpbnRlcmVzdC1yYXRlLW1hbmFnZVxcbG9hbi1ydWxlXFxjeWNsZVxcY3ljbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YseUJBQXlCLEVBQUE7RUFGN0I7SUFJUSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGlCQUFpQixFQUFBO0VBTnpCO0lBU1EseUJBQXlCO0lBQ3pCLGlCQUFpQixFQUFBO0VBVnpCO01BWVkseUJBQ0osRUFBQTtFQWJSO01BZVksZ0JBQWdCO01BQ2hCLG1CQUFtQixFQUFBO0VBaEIvQjtRQWtCZ0IsY0FBYztRQUNkLGlCQUFpQixFQUFBO0VBbkJqQztNQTBCWSxpQkFBaUIsRUFBQTtFQTFCN0I7TUE2QlksaUJBQWlCO01BQ2pCLG9CQUNKLEVBQUE7RUEvQlI7SUFrQ1Esa0JBQ0osRUFBQTtFQW5DSjtJQXFDUSw4QkFDSixFQUFBO0VBdENKO0lBd0NRLGlCQUFpQixFQUFBO0VBeEN6QjtJQTJDUSxxQkFBcUI7SUFDckIsVUFDSixFQUFBO0VBN0NKO0lBK0NRLHFCQUFxQjtJQUNyQixVQUNKLEVBQUE7RUFqREo7SUFtRFEscUJBQXFCO0lBQ3JCLFVBQ0osRUFBQTtFQXJESjtJQXVEUSxnQkFBZ0IsRUFBQTtFQXZEeEI7SUEwRFEsWUFDSixFQUFBO0VBM0RKO0lBNkRRLFdBQ0osRUFBQTtFQTlESjtJQWdFUSxxQkFBcUIsRUFBQTtFQUk3QjtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi92YWx1YXRpb24vaW50ZXJlc3QtcmF0ZS1tYW5hZ2UvbG9hbi1ydWxlL2N5Y2xlL2N5Y2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN5Y2xlIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgLnRleHRfcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDsgLy8gd2lkdGg6IDM5JTtcclxuICAgIH0gLy8g6YeN55S76aG16Z2i5aS06YOoXHJcbiAgICAuY3ljbGUtY29uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgIG1hcmdpbjogMjJweCAxLjElO1xyXG4gICAgICAgIC5jeWNsZS1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOFxyXG4gICAgICAgIH1cclxuICAgICAgICAudWktZy0xMiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIC51aS1nLTYge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAuZGF0YSB7XHJcbiAgICAgICAgLy8gICAgIG1hcmdpbi1ib3R0b206IC0xNnB4O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAubG9vay1nYXAge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbi1nYXAge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY3ljIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIH1cclxuICAgIC5yZXNldC1ib3Ige1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2NjY1xyXG4gICAgfVxyXG4gICAgLnRhYmVsRGV0YWlsSWNvIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICAgIC53aWR0aC0yMCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAyMiVcclxuICAgIH1cclxuICAgIC53aWR0aC0xMCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMCVcclxuICAgIH1cclxuICAgIC53aWR0aC0zMCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA0MSVcclxuICAgIH1cclxuICAgIC5sb29rdXAge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMiU7XHJcbiAgICB9XHJcbiAgICAuZnIge1xyXG4gICAgICAgIGZsb2F0OiByaWdodFxyXG4gICAgfVxyXG4gICAgLmZsIHtcclxuICAgICAgICBmbG9hdDogbGVmdFxyXG4gICAgfVxyXG4gICAgLm5hbWUge1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgIH1cclxufVxyXG5cclxuI3BkaWFsb2cge1xyXG4gICAgaGVpZ2h0OiA0MDBweDsgLy8gbWFyZ2luLXRvcDogMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: Cycle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cycle", function() { return Cycle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bean_cycle_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/cycle.bean */ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/bean/cycle.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_valuation_http_valuation_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/valuation/http/valuation.http.service */ "./src/app/pages/tzb/valuation/http/valuation.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { IsSign, IsRcord, IsOr, IsRf, IsRe } from './../constant/codeValue';




var Cycle = /** @class */ (function () {
    function Cycle(httpService, confirmationService, commfunc, router) {
        this.httpService = httpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.router = router;
        this.cycleBean = new _bean_cycle_bean__WEBPACK_IMPORTED_MODULE_2__["CycleBean"]();
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_CN"];
        //table数据
        this.list = [];
        this.first = 0; //分页控制
        //模态框
        this.display = false;
        //提示信息
        this.msgs = [];
        this.total = 10;
        this.isSign = [];
        this.isOr = [];
        this.isRf = [];
        this.isRcod = [];
        this.isRe = [];
        this.codeValues();
        this.isSign = this.code['IsSign'];
        this.isOr = this.code['IsOr'];
        this.isRf = this.code['IsRf'];
        this.isRcod = this.code['IsRcord'];
        this.isRe = this.code['IsRe'];
    }
    Cycle.prototype.ngOnInit = function () {
        var session = window.sessionStorage;
        if (session.getItem('para')) {
            session.removeItem('para');
        }
        this.cycleBean.pageSize = 10;
        this.cycleBean.pageNum = 1;
    };
    //码值
    Cycle.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //查询
    Cycle.prototype.querySecle = function () {
        this.cycleBean.pageSize = 10;
        this.cycleBean.pageNum = 1;
        this.first = 0;
        this.toquery();
    };
    Cycle.prototype.toquery = function () {
        var _this = this;
        this.cycleBean.effDt = this.commfunc.transDateN(this.effDt); //生效日期转换
        this.cycleBean.invalDt = this.commfunc.transDateN(this.invalDt); //失效日期转换    
        this.cycleBean.invalDtStart = this.commfunc.transDateN(this.invalDtStart);
        this.cycleBean.invalDtEnd = this.commfunc.transDateN(this.invalDtEnd);
        this.httpService.queryRateRepriceRuleInternalService(this.cycleBean).subscribe(function (data) {
            if (data.resultList == "" || data.resultList == null) {
                _this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"];
            }
            ;
            if (data.resultList) {
                _this.list = data.resultList;
            }
            ;
            _this.total = data.total;
            // 错误条件查询的提示
            if (data.returnCode.code != "success") {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                _this.list = '';
            }
        }, function (err) {
            _this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["tableMessage"];
        });
    };
    //重置
    Cycle.prototype.newSet = function () {
        this.cycleBean = new _bean_cycle_bean__WEBPACK_IMPORTED_MODULE_2__["CycleBean"]();
        this.effDt = null;
        this.invalDt = null;
        this.invalDtStart = null;
        this.invalDtEnd = null;
        this.cycleBean.pageSize = 10;
        this.cycleBean.pageNum = 1;
        // this.first = 0;
        // this.toquery();
    };
    //添加
    Cycle.prototype.add = function (param) {
        this.headerTitle = '周期重定价规则-新增';
        // this.display = true;
        // this.showModel = '2';
        this.router.navigate(['/pages/tzb/valuation/cycle/cycle-add']);
    };
    //新增的回调函数
    Cycle.prototype.addCall = function (param) {
        this.display = param;
    };
    //详情
    Cycle.prototype.detail = function (param) {
        var _this = this;
        this.headerTitle = '周期重定价规则-详情';
        this.showModel = '3';
        this.display = true;
        //  if (param) {
        //   this.inValueCode = JSON.stringify(param);
        // }
        this.inValueCode = param.reprncPlnNum;
        setTimeout(function () {
            _this.inValueCode = "";
        }, 1000);
    };
    //详情的回调方法
    Cycle.prototype.detailCall = function (param) {
        this.display = param;
    };
    //更新
    Cycle.prototype.update = function (param) {
        var _this = this;
        this.headerTitle = '周期重定价规则-修改';
        this.showModel = '1';
        this.display = true;
        this.inValueCode = param.reprncPlnNum;
        setTimeout(function () {
            _this.inValueCode = "";
        }, 1000);
    };
    //修改的回调函数
    Cycle.prototype.updateCall = function (param) {
        this.display = false;
        if (param != false) {
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: '提示', detail: param });
        }
        this.toquery();
    };
    //分页
    Cycle.prototype.paginate = function (event) {
        //每页显示的条数
        this.cycleBean.pageSize = event.rows;
        //当前页
        var currentPage = event.page + 1;
        this.cycleBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.cycleBean.pageSize;
        //调用查询的方法
        this.toquery();
    };
    //删除
    Cycle.prototype.delete = function (car) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                //条件
                var param = {
                    reprncPlnNum: car.reprncPlnNum,
                };
                _this.httpService.deleteRateRepriceRuleService(param).subscribe(function (data) {
                    if (data.returnCode.code == "success") {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                        _this.first = 0;
                        _this.toquery();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (error) {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: "删除失败" });
                });
            }
        });
    };
    //按钮权限
    Cycle.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    Cycle = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cycle',
            template: __webpack_require__(/*! ./cycle.component.html */ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle.component.html"),
            styles: [__webpack_require__(/*! ./cycle.component.scss */ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_valuation_http_valuation_http_service__WEBPACK_IMPORTED_MODULE_6__["ValuationHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], Cycle);
    return Cycle;
}());



/***/ }),

/***/ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CycleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycleModule", function() { return CycleModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cycle_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cycle.routing */ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle.routing.ts");
/* harmony import */ var _cycle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cycle.component */ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle.component.ts");
/* harmony import */ var _cycle_add_cycle_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cycle-add/cycle-add.component */ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-add/cycle-add.component.ts");
/* harmony import */ var _cycle_update_cycle_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cycle-update/cycle-update.component */ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-update/cycle-update.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { CycleDetailComponent } from "./cycle-detail/cycle-detail.component";

var CycleModule = /** @class */ (function () {
    function CycleModule() {
    }
    CycleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _cycle_routing__WEBPACK_IMPORTED_MODULE_4__["CycleRouting"]
            ],
            declarations: [
                _cycle_component__WEBPACK_IMPORTED_MODULE_5__["Cycle"],
                _cycle_add_cycle_add_component__WEBPACK_IMPORTED_MODULE_6__["CycleAddComponent"],
                // CycleDetailComponent,
                _cycle_update_cycle_update_component__WEBPACK_IMPORTED_MODULE_7__["CycleUpdateComponent"]
            ],
            providers: []
        })
    ], CycleModule);
    return CycleModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle.routing.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle.routing.ts ***!
  \*******************************************************************************************/
/*! exports provided: routes, CycleRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CycleRouting", function() { return CycleRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cycle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cycle.component */ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle.component.ts");
/* harmony import */ var _cycle_add_cycle_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cycle-add/cycle-add.component */ "./src/app/pages/tzb/valuation/interest-rate-manage/loan-rule/cycle/cycle-add/cycle-add.component.ts");



// import { CycleDetailComponent } from "./cycle-detail/cycle-detail.component";
var routes = [
    {
        path: '', component: _cycle_component__WEBPACK_IMPORTED_MODULE_1__["Cycle"],
    },
    { path: 'cycle-add', component: _cycle_add_cycle_add_component__WEBPACK_IMPORTED_MODULE_2__["CycleAddComponent"] },
];
var CycleRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=interest-rate-manage-loan-rule-cycle-cycle-module.js.map