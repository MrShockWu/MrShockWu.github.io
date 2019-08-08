(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-client-import-group-client-import-module"],{

/***/ "./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-check/group-client-check.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-check/group-client-check.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"tab ui-g-12\">\r\n    <p-dataTable [value]=\"list\" [emptyMessage]=\"tableMesg\" scrollable=\"true\" scrollWidth=\"1760px\">\r\n      <p-column header=\"户序号\" [style]=\"{'text-align':'center','width':'185px'}\">\r\n        <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          <label style=\"cursor:pointer;\" (click)=\"toHouseholdInfo(col)\">{{col.doorNum}}</label>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"custNo\" header=\"客户号\" [style]=\"{'text-align':'center','width':'185px'}\">\r\n        <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          <label *ngIf=\"isQl(col)\">{{col.custNo}}</label>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"custName\" header=\"客户名称\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column header=\"关联关系\" [style]=\"{'text-align':'center','width':'185px'}\">\r\n        <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{col.relType | codeValuePie : relType}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"relDesc\" header=\"详细信息\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"contacts\" header=\"联系人\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column header=\"证件类型\" [style]=\"{'text-align':'center','width':'185px'}\">\r\n        <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          {{col.idenType | codeValuePie : idenType}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"idenNum\" header=\"证件号码\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"address\" header=\"客户地址\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"telNum\" header=\"手机号码\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"industry\" header=\"所属行业\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"description\" header=\"备注\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"xnkBz\" header=\"兴农卡目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"hzdbjjFlag\" header=\"户主担保基金目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"cdhykFlag\" header=\"存贷合一卡目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"syydFlag\" header=\"商赢易贷目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"xydFlag\" header=\"薪易贷目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"xjdFlag\" header=\"薪金贷目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"fydFlag\" header=\"房易贷目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"khjskhFlag\" header=\"客户介绍客户目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"qtywFlag\" header=\"其他业务目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"xxfFlag\" header=\"薪消费目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n      <p-column field=\"ajdFlag\" header=\"安居贷目标客户\" [style]=\"{'text-align':'center','width':'185px'}\"></p-column>\r\n    </p-dataTable>\r\n  </div>\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\" life=\"3000\"></p-growl>\r\n<!--comfirm -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n  <p-footer>\r\n    <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n    <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n  </p-footer>\r\n</p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-check/group-client-check.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-check/group-client-check.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .title {\n  padding: 0; }\n  .ui-g .title .header-title {\n    width: 100%;\n    display: flex;\n    justify-content: space-between; }\n  .ui-g .title .header-title .title-right {\n      display: flex; }\n  .ui-g .title .header-title .title-right .line {\n        width: 1px;\n        height: 19px;\n        display: inline-block;\n        margin-right: 7px; }\n  .ui-g .title .header-title .title-right .text {\n        flex: 1;\n        height: 20px;\n        font-size: 14px;\n        line-height: 20px;\n        display: block;\n        font-weight: bold; }\n  .ui-g .title .header-title #custom_bottom_btn button {\n      width: 100px !important;\n      white-space: nowrap;\n      padding: 0px; }\n  .ui-g #custListNum span {\n  display: inline-block;\n  width: 80px;\n  box-sizing: border-box;\n  padding: 3px;\n  text-align: center; }\n  .ui-g #custListNum span:nth-child(odd) {\n    background: #0094D2;\n    color: #fff; }\n  .ui-g .tab {\n  overflow-x: auto;\n  padding: 0;\n  white-space: nowrap;\n  text-align: center; }\n  @media screen and (max-width: 1571px) {\n  * {\n    font-size: 12px !important; }\n    * span.sbtn {\n      background-size: auto 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvZ3JvdXAtY2xpZW50LWltcG9ydC9ncm91cC1jbGllbnQtY2hlY2svRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tZ3JvdXBcXGdyb3VwLWNsaWVudC1pbXBvcnRcXGdyb3VwLWNsaWVudC1jaGVja1xcZ3JvdXAtY2xpZW50LWNoZWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1EsVUFBVSxFQUFBO0VBSGxCO0lBS1ksV0FBVztJQU1YLGFBQWE7SUFFYiw4QkFBOEIsRUFBQTtFQWIxQztNQWdCZ0IsYUFBYSxFQUFBO0VBaEI3QjtRQWtCb0IsVUFBVTtRQUNWLFlBQVk7UUFHWixxQkFBcUI7UUFDckIsaUJBQWlCLEVBQUE7RUF2QnJDO1FBMEJvQixPQUFPO1FBQ1AsWUFBWTtRQUNaLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsY0FBYztRQUNkLGlCQUFpQixFQUFBO0VBL0JyQztNQW9Db0IsdUJBQXFCO01BQ3JCLG1CQUFtQjtNQUNuQixZQUFZLEVBQUE7RUF0Q2hDO0VBdURZLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtFQTNEOUI7SUE2RGdCLG1CQUFtQjtJQUNuQixXQUFVLEVBQUE7RUE5RDFCO0VBb0VRLGdCQUFlO0VBQ2YsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTtFQVN0QjtFQURKO0lBRVEsMEJBQXlCLEVBQUE7SUFGakM7TUFJWSwwQkFBeUIsRUFBQSxFQUM1QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWdyb3VwL2dyb3VwLWNsaWVudC1pbXBvcnQvZ3JvdXAtY2xpZW50LWNoZWNrL2dyb3VwLWNsaWVudC1jaGVjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1nIHtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC5oZWFkZXItdGl0bGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLy8gLy8gaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgICAgICAgICAvLyBjb2xvcjojMDAwO1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nOiA3cHggMCA3cHggMjBweDtcclxuICAgICAgICAgICAgLy8gYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEN0Q2RDY7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgLnRpdGxlLXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAubGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogIzAwOTREMjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2N1c3RvbV9ib3R0b21fYnRue1xyXG4gICAgICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMHB4IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBidXR0b24ge1xyXG4gICAgICAgICAgICAvLyAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAvLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgLy8gICAgIC8vIGJhY2tncm91bmQ6ICMwMDk0RDI7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAvLyAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgLy8gICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI2N1c3RMaXN0TnVte1xyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAmOm50aC1jaGlsZChvZGQpe1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwOTREMjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAudGFie1xyXG4gICAgICAgIG92ZXJmbG93LXg6YXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC8vIHRhYmxlLWxheW91dDogaW5oZXJpdDtcclxuICAgICAgICAvLyBidXR0b257XHJcbiAgICAgICAgLy8gICAgIHdpZHRoOjEwMHB4IWltcG9ydGFudDtcclxuICAgICAgICAvLyAgICAgcGFkZGluZzogMHB4IWltcG9ydGFudDtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuKntcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NzFweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgc3Bhbi5zYnRuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOmF1dG8gMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8gOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSB0YWJsZSB7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICB0YWJsZS1sYXlvdXQ6IGluaGVyaXQ7XHJcbi8vICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuLy8gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-check/group-client-check.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-check/group-client-check.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: GroupClientCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupClientCheckComponent", function() { return GroupClientCheckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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







var GroupClientCheckComponent = /** @class */ (function () {
    function GroupClientCheckComponent(httpService, confirmationService, router, Commfunc, routerInfo) {
        this.httpService = httpService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.Commfunc = Commfunc;
        this.routerInfo = routerInfo;
        // 入参
        this.groupId = '';
        this.listType = '';
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"];
        this.title1 = '客户名单查询';
        this.title2 = '客户名单';
        // bean
        this.custGroupListBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__["CustGroupListBean"](); //客户群名单
        this.msgs = [];
        // 传参
        //  queryParams: any = {};//客户名单参数
        this.params = {}; //客户名单参数
        this.cId = [];
        this.cName = [];
        this.choose_arr = [];
        this.choose_json = [];
        this.i = 1;
        //duanxin
        // 中间量
        this.evaluateFlag = false;
        this.addDisplay = false;
        // 组件
        this.detailDisplay = false;
        this.detailData = [];
        // 控件
        this.selectedValues = []; //单选数组
        this.allVal = true; //全选值
        this.flag = false; //中间量
        this.first = 0;
        this.display = false;
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.relType = this.code['CustomGroupRelType'];
        this.idenType = this.code['CustomGroupIdenType'];
    }
    //码值
    GroupClientCheckComponent.prototype.codeValues = function () {
        this.Commfunc.codeValue();
        var ret = this.Commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    GroupClientCheckComponent.prototype.ngOnInit = function () {
        this.preSet();
        this.session_info = JSON.parse(sessionStorage.getItem("chName"));
        this.selectCustGroupList(); //客户群名单查询          
    };
    GroupClientCheckComponent.prototype.ngOnChanges = function (changes) {
    };
    GroupClientCheckComponent.prototype.preSet = function () {
        this.custGroupListBean.listType = '1'; //名单类型    
        // 传参
        if (this.routerInfo.snapshot.params.groupId) {
            this.groupId = this.routerInfo.snapshot.params.groupId;
        }
        if (this.routerInfo.snapshot.params.listType) {
            this.listType = this.routerInfo.snapshot.params.listType;
        }
        // 初始化
        this.custGroupListBean.pageSize = 999; //每页条数
        this.custGroupListBean.pageNum = 1; //当前页数
        if (this.groupId) {
            this.custGroupListBean.groupId = this.groupId; //群号
        }
        if (this.listType) {
            this.custGroupListBean.listType = this.listType; //群名称
        }
    };
    // 判断是否临时客户
    GroupClientCheckComponent.prototype.isQl = function (col) {
        if (col.custNo.search(/^QL/)) {
            return true;
        }
        return false;
    };
    GroupClientCheckComponent.prototype.selectCustGroupList = function () {
        var _this = this;
        this.custGroupListBean["statusId"] = '1';
        //客户群名单查询
        this.httpService.selectCustGroupList(this.custGroupListBean).subscribe(function (data) {
            if (data.returnCode.code) {
                _this.custGroupListBean = data;
                _this.custGroupListBean.custList = data.custList;
                _this.list = data.custList;
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    GroupClientCheckComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'group-client-check',
            template: __webpack_require__(/*! ./group-client-check.component.html */ "./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-check/group-client-check.component.html"),
            styles: [__webpack_require__(/*! ./group-client-check.component.scss */ "./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-check/group-client-check.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], GroupClientCheckComponent);
    return GroupClientCheckComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-import.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-import.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 群客户导入 -->\r\n<div class=\"basis-group ui-g-12 module\">\r\n  <div class=\"ui-g-12\">\r\n    <header-title [Info]=\"groupClientImport\"></header-title>\r\n    <div class=\"form-group\">\r\n      <div *ngIf=\"isFreeGroup\" class=\"ui-g-12 btn-batch-import\">\r\n        <button pButton type=\"button\" label=\"批量导入>>\" (click)=\"btnBatchImport()\" *ngIf=\"permissionCheck('SID00004_P034')\"></button>\r\n      </div>\r\n      <div *ngIf=\"!isFreeGroup\" class=\"ui-g-12 btn-batch-import\">\r\n        <button pButton type=\"button\" label=\"后台中心\" (click)=\"bzbpm()\" *ngIf=\"permissionCheck('SID00002_P027_P001_P003_P005_P001') && !isFreeGroup\"></button>\r\n        <button pButton type=\"button\" label=\"批量导入>>\" (click)=\"btnBatchImport()\" *ngIf=\"permissionCheck('SID00002_P027_P001_P003_P005_P002')\"></button>\r\n      </div>\r\n      <div *ngIf=\"!isFreeGroup\" class=\"ui-g-12 tab base-table\">\r\n        <p-dataTable [value]=\"custGroupListBean.custList\" [emptyMessage]=\"tableMesg\" class=\"groupTabBottom\" editable=\"true\" id=\"groupTable\"\r\n          scrollable=\"true\" [style]=\"{'text-align':'center'}\">\r\n          <p-column header=\"行号\" [style]=\"{'width':'100px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <span>{{i+1}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"户序号\" [style]=\"{'width':'100px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" [maxlength]=\"doorNumLeng\" pInputText [(ngModel)]=\"col.doorNum\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"客户号\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input #a (input)=\"selectCustBriefInfo($event,i,a)\" type=\"text\" [maxlength]=\"custNoLeng\" pInputText [(ngModel)]=\"col.custNo\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"客户名称\" [style]=\"{'width':'260px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-11\">\r\n                  <input type=\"text\" class=\"ui-g-11\" pInputText [(ngModel)]=\"col.custName\" style=\"outline:none;min-width:90%;\" (blur)=\"isNullCheck(i)\">\r\n                </div>\r\n                <div appValidation class=\"ui-g-1\" style=\"padding:0px;\"></div>\r\n              </div>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"关联关系\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <div class=\"ui-g-12 customGroupViewDropdown\" style=\"padding:0px;\">\r\n                <p-dropdown [options]=\"relType\" [(ngModel)]=\"col.relType\"></p-dropdown>\r\n              </div>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"详细信息\" [style]=\"{'width':'260px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" pInputText [(ngModel)]=\"col.relDesc\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"联系人\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" [maxlength]=\"contactsLeng\" pInputText [(ngModel)]=\"col.contacts\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"证件类型\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <div class=\"ui-g-12 customGroupViewDropdown\" style=\"padding:0px;\">\r\n                <p-dropdown [options]=\"idenType\" [(ngModel)]=\"col.idenType\"></p-dropdown>\r\n              </div>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"证件号码\" [style]=\"{'width':'350px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" [maxlength]=\"idenNumLeng\" pInputText [(ngModel)]=\"col.idenNum\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"客户地址\" [style]=\"{'width':'400px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" [maxlength]=\"addressLeng\" pInputText [(ngModel)]=\"col.address\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"手机号码\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" [maxlength]=\"telNumLeng\" pInputText [(ngModel)]=\"col.telNum\" (blur)=\"isTel(i)\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"所属行业\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" [maxlength]=\"industryLeng\" pInputText [(ngModel)]=\"col.industry\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"备注\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" [maxlength]=\"descriptionLeng\" pInputText [(ngModel)]=\"col.description\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"是否目标客户\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <div class=\"ui-g-12 customGroupViewDropdown\" style=\"padding:0px;\">\r\n                <p-dropdown [options]=\"isNoValue\" [(ngModel)]=\"col.targetCustFlag\"></p-dropdown>\r\n              </div>\r\n            </ng-template>\r\n          </p-column>\r\n          <!-- <p-column header=\"户主担保基金目标客户\" [style]=\"{'width':'200px'}\"> \r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" pInputText [(ngModel)]=\"col.hzdbjjFlag\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"存贷合一卡目标客户\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" pInputText [(ngModel)]=\"col.cdhykFlag\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"商赢易贷目标客户\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" pInputText [(ngModel)]=\"col.syydFlag\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"薪易贷目标客户\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" pInputText [(ngModel)]=\"col.xydFlag\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"薪金贷目标客户\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" pInputText [(ngModel)]=\"col.xjdFlag\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"房易贷目标客户\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" pInputText [(ngModel)]=\"col.fydFlag\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"客户介绍客户目标客户\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" pInputText [(ngModel)]=\"col.khjskhFlag\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"其他业务目标客户\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" pInputText [(ngModel)]=\"col.qtywFlag\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"薪消费目标客户\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" pInputText [(ngModel)]=\"col.xxfFlag\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"安居贷目标客户\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" pInputText [(ngModel)]=\"col.ajdFlag\">\r\n            </ng-template>\r\n          </p-column> -->\r\n          <p-column header=\"操作\" [style]=\"{'width':'300px'}\">\r\n            <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <div class=\"table-button\">\r\n                <span (click)=\"addArray(i)\" class=\"customGroupaddBack\">添加</span>\r\n                <span (click)=\"delArray(i)\" class=\"tabelDeleteIco\">删除</span>\r\n              </div>\r\n            </ng-template>\r\n          </p-column>\r\n        </p-dataTable>\r\n      </div>\r\n      <div *ngIf=\"isFreeGroup\" class=\"ui-g-12 tab base-table\">\r\n        <p-dataTable [value]=\"custGroupListBean.custList\" [emptyMessage]=\"tableMesg\" class=\"groupTabBottom\" editable=\"true\" id=\"groupTable\"\r\n          scrollable=\"true\" [style]=\"{'text-align':'center'}\">\r\n          <p-column header=\"行号\" [style]=\"{'width':'100px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <span>{{i+1}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"客户号\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input #a (input)=\"selectCustBriefInfo($event,i,a)\" type=\"text\" [maxlength]=\"custNoLeng\" pInputText [(ngModel)]=\"col.custNo\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"客户名称\" [style]=\"{'width':'260px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-11\">\r\n                  <input type=\"text\" class=\"ui-g-11\" pInputText [(ngModel)]=\"col.custName\" style=\"outline:none;min-width:90%;\" (blur)=\"isNullCheck(i)\">\r\n\r\n                </div>\r\n\r\n                <div appValidation class=\"ui-g-1\" style=\"padding:0px;\"></div>\r\n              </div>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"证件类型\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <div class=\"ui-g-12 customGroupViewDropdown\" style=\"padding:0px;\">\r\n                <p-dropdown [options]=\"idenType\" [(ngModel)]=\"col.idenType\"></p-dropdown>\r\n              </div>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"证件号码\" [style]=\"{'width':'350px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" [maxlength]=\"idenNumLeng\" pInputText [(ngModel)]=\"col.idenNum\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"客户地址\" [style]=\"{'width':'400px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" [maxlength]=\"addressLeng\" pInputText [(ngModel)]=\"col.address\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"手机号码\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" [maxlength]=\"telNumLeng\" pInputText [(ngModel)]=\"col.telNum\" (blur)=\"isTel(i)\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"备注\" [style]=\"{'width':'200px'}\">\r\n            <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <input type=\"text\" [maxlength]=\"descriptionLeng\" pInputText [(ngModel)]=\"col.description\">\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"操作\" [style]=\"{'width':'300px'}\">\r\n            <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n              <div class=\"table-button\">\r\n                <span (click)=\"addArray(i)\" class=\"customGroupaddBack\">添加</span>\r\n                <span (click)=\"delArray(i)\" class=\"tabelDeleteIco\">删除</span>\r\n              </div>\r\n            </ng-template>\r\n          </p-column>\r\n        </p-dataTable>\r\n      </div>\r\n      <div *ngIf=\"!isFreeGroup\" class=\"ui-g-12 btn-submit\">\r\n        <button pButton type=\"button\" label=\"确认导入\" *ngIf=\"!needApproval\" (click)=\"addCustGroupList(1)\"></button>\r\n        <button pButton type=\"button\" label=\"提交审核\" *ngIf=\"needApproval\" (click)=\"addCustGroupList(2)\"></button>\r\n\r\n        <button pButton type=\"button\" label=\"返回待提交\" *ngIf=\"!isCustView\" (click)=\"returnSubmit()\"></button>\r\n        <button pButton type=\"button\" label=\"返回视图\" *ngIf=\"isCustView\" (click)=\"returnCustGroupView()\"></button>\r\n      </div>\r\n      <div *ngIf=\"isFreeGroup\" class=\"ui-g-12 btn-submit\">\r\n        <button pButton type=\"button\" label=\"确认导入\" (click)=\"addFreeGroupList()\"></button>\r\n        <button pButton type=\"button\" label=\"返回视图\" (click)=\"returnCustGroupView2()\"></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- 批量导入 -->\r\n<p-dialog *ngIf=\"batchDisplay\" [(visible)]=\"batchDisplay\" modal=\"modal\" width=\"800\" height=\"800\">\r\n  <header-title [Info]=\"title1\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <pre>\r\n          Excel文件格式说明：\r\n          Excel文件中潜在客户名称为必输项。\r\n          Excel文件最大不能超过2000行记录。\r\n          更多注意事项请查看模板中的“填报说明”。\r\n          请先下载模板：\r\n          <!-- <a href=\"{{DOWNLOAD}}?fileName={{fileName}}&fileUrl={{fileUrl}}\">下载模板</a> -->\r\n          <a  *ngIf=\"!isFreeGroup\" href=\"{{DOWNLOAD}}/?fileUrl=/copdata/moban/&fileName=custListImport.xls\" target=\"_blank\">下载模板</a>\r\n          <a  *ngIf=\"isFreeGroup\" href=\"{{DOWNLOAD}}/?fileUrl=/copdata/moban/&fileName=freeCustListImport.xls\" target=\"_blank\">下载模板</a>\r\n      </pre>\r\n    <div class=\"ui-g-12\">\r\n      <strong>批量创建（Ecxel导入）</strong>\r\n      <br/>\r\n      <label for=\"\">文件导入</label>\r\n      <p-fileUpload accept=\".xls\" invalidFileTypeMessageDetail=\"只能上传Excel\" invalidFileTypeMessageSummary=\"\" chooseLabel=\"浏览\" uploadLabel=\"上传\"\r\n        cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"onBeforeSend($event)\">\r\n      </p-fileUpload>\r\n      <div *ngIf=\"files.length>0\">\r\n        <span *ngFor=\"let item of files\">{{item.name}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\" style=\"text-align:center;\">\r\n    <button pButton type=\"button\" label=\"关闭\" (click)=\"closebatch()\"></button>\r\n  </div>\r\n</p-dialog>\r\n\r\n<!-- 导入结果返回显示 -->\r\n<p-dialog *ngIf=\"addDisplay\" [(visible)]=\"addDisplay\" modal=\"modal\" width=\"800\">\r\n  <header-title [Info]=\"title2\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6\">\r\n      <span>成功条数：</span>\r\n      <span>{{custGroupListBean.successNum}}</span>\r\n      <span>条</span>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <span>失败条数：</span>\r\n      <span>{{custGroupListBean.failNum}}</span>\r\n      <span>条</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 table-area tab\">\r\n    <p-dataTable [emptyMessage]=\"tableMesg\" [style]=\"{'text-align':'center'}\" [value]=\"custGroupListBean.failInfoList\">\r\n      <p-column header=\"行号\">\r\n        <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          <span [ngClass]=\"{'err-color':col.executeFlag != 'S'}\">\r\n            {{col.rowNum}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"成功/失败\">\r\n        <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          <span [ngClass]=\"{'err-color':col.executeFlag != 'S'}\">\r\n            {{col.executeFlag == 'S' ? '成功' : '失败'}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"失败原因\">\r\n        <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          <span [ngClass]=\"{'err-color':col.executeFlag != 'S'}\">\r\n            {{col.failReason}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <button pButton type=\"button\" label=\"确定\" (click)=\"returnCustGroupList()\"></button>\r\n  </div>\r\n</p-dialog>\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!-- comfirm -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n  <p-footer>\r\n    <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n    <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n  </p-footer>\r\n</p-confirmDialog>\r\n\r\n<!-- 后台中心2018.1.8 -->\r\n<p-dialog *ngIf=\"bzbpmDisplay\" [(visible)]=\"bzbpmDisplay\" modal=\"modal\" width=\"800\">\r\n  <header-title [Info]=\"title3\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-12 upload\">\r\n      <!-- <label for=\"\">后台中心上传</label> -->\r\n      <p-fileUpload chooseLabel=\"浏览\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile1[]\" url=\"{{UPLOAD}}\" (onUpload)=\"loadAfter($event)\"\r\n        multiple=\"multiple\">\r\n      </p-fileUpload>\r\n      <div *ngIf=\"files1.length>0\">\r\n        <span *ngFor=\"let item of files1\">{{item.name}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"text-align:center;\">\r\n      <button pButton type=\"button\" (click)=\"uploadAfterData()\" label=\"提交\"></button>\r\n      <button pButton type=\"button\" label=\"关闭\" (click)=\"closeBzbpm()\"></button>\r\n    </div>\r\n  </div>\r\n</p-dialog>\r\n\r\n<p-dialog *ngIf=\"dealPerShow\" [(visible)]=\"dealPerShow\" header=\"提交给\" modal=\"true\">\r\n  <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-import.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-import.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basis-group .form-group .label-css {\n  text-align: center; }\n\n.basis-group .form-group .input-css {\n  text-align: left; }\n\n.basis-group .btn-submit {\n  text-align: center; }\n\n.basis-group .btn-batch-import {\n  text-align: right; }\n\n.basis-group .explain-css {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.basis-group .detail-css {\n  color: red; }\n\n.basis-group .evaluate-css {\n  padding-top: 50px; }\n\n:host/deep/ .tab input {\n  min-width: 100%; }\n\n:host/deep/ .upload .ui-widget-header {\n  background-color: #000; }\n\n.tab {\n  text-align: center; }\n\na {\n  color: #0094D2;\n  font-weight: bold; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n.table-area {\n  max-height: 660px;\n  overflow: auto; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 800px !important;\n  height: auto !important; }\n\n.err-color {\n  color: rgba(255, 0, 0, 0.94); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvZ3JvdXAtY2xpZW50LWltcG9ydC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1ncm91cFxcZ3JvdXAtY2xpZW50LWltcG9ydFxcZ3JvdXAtY2xpZW50LWltcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdZLGtCQUFrQixFQUFBOztBQUg5QjtFQU1ZLGdCQUFnQixFQUFBOztBQU41QjtFQVVRLGtCQUFrQixFQUFBOztBQVYxQjtFQWFRLGlCQUFpQixFQUFBOztBQWJ6QjtFQWdCUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQWxCL0I7RUFxQlEsVUFBVSxFQUFBOztBQXJCbEI7RUF3QlEsaUJBQWlCLEVBQUE7O0FBSXpCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFJckI7RUFDSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLHVCQUF1QjtFQUN2Qix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWdyb3VwL2dyb3VwLWNsaWVudC1pbXBvcnQvZ3JvdXAtY2xpZW50LWltcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNpcy1ncm91cCB7XHJcbiAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgLmxhYmVsLWNzcyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlucHV0LWNzcyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi1zdWJtaXQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5idG4tYmF0Y2gtaW1wb3J0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5leHBsYWluLWNzcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRldGFpbC1jc3Mge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgICAuZXZhbHVhdGUtY3NzIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnRhYiBpbnB1dCB7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51cGxvYWQgLnVpLXdpZGdldC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnRhYiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICMwMDk0RDI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLy/ooajmoLzlrZfmr43mlbDlrZfoh6rliqjmjaLooYxcclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YSB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi50YWJsZS1hcmVhIHtcclxuICAgIG1heC1oZWlnaHQ6IDY2MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA4MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lcnItY29sb3Ige1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjk0KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-import.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-import.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: GroupClientImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupClientImportComponent", function() { return GroupClientImportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _bean_bz_bpm_bean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bean/bz-bpm.bean */ "./src/app/pages/tzb/custom/custom-group/group-client-import/bean/bz-bpm.bean.ts");
/* harmony import */ var _bean_select_group_rateInfo_bean__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bean/select-group-rateInfo.bean */ "./src/app/pages/tzb/custom/custom-group/group-client-import/bean/select-group-rateInfo.bean.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var GroupClientImportComponent = /** @class */ (function () {
    function GroupClientImportComponent(httpService, routerInfo, router, confirmationService, commfunc) {
        this.httpService = httpService;
        this.routerInfo = routerInfo;
        this.router = router;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.groupClientImport = "群客户导入";
        this.title1 = '客户群名单批量导入';
        this.title2 = '客户群名单导入结果';
        this.title3 = '后台中心';
        this.needApproval = false; //是否需要审批
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_7__["tableMessage"];
        // 中间量
        this.isCustView = true;
        // 初始化
        this.tempArr = [];
        // 传参
        this.groupId = ''; //群号
        this.groupName = ''; //
        this.custGroupView = ''; //
        this.isFreeGroup = false; //是否自选群
        // bean
        this.custGroupListBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_1__["CustGroupListBean"](); //客户群名单
        this.bzBpmBean = new _bean_bz_bpm_bean__WEBPACK_IMPORTED_MODULE_8__["BzBpmBean"](); //客户群名单后台中心上传
        this.bzBpmSubBean = new _bean_bz_bpm_bean__WEBPACK_IMPORTED_MODULE_8__["BzBpmSubBean"](); //客户群名单后台中心提交
        this.selectGroupRateInfoBean = new _bean_select_group_rateInfo_bean__WEBPACK_IMPORTED_MODULE_9__["SelectGroupRateInfoBean"](); //客户群优惠利率查询
        this.isNoValue = [
            { label: '请选择', value: '' },
            { label: '是', value: '1' },
            { label: '否', value: '0' },
        ];
        // 模态框
        this.batchDisplay = false; //批量导入
        this.addDisplay = false; //返回结果
        // 控件
        this.msgs = [];
        this.files = [];
        this.fileList = []; //上传文件列表
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"];
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_UPLOAD"];
        // 后台中心模态框
        this.bzbpmDisplay = false;
        this.files1 = [];
        this.fileList1 = []; //上传文件列表
        // DOWNLOADBZ: string = TZB_CUS_DOWNLOADBZ;
        this.UPLOAD1 = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_UPLOADBZ"];
        //
        this.obj = {
            filePath: '',
            fileName: '',
        };
        this.isOneSpImport = false;
        // maxlength
        this.doorNumLeng = 32; //户序号
        this.custNoLeng = 10; //客户号
        this.relDescLeng = 20; //详细信息
        this.contactsLeng = 265; //联系人
        this.idenNumLeng = 32; //证件号码
        this.addressLeng = 265; //客户地址
        this.telNumLeng = 11; //手机号码
        this.industryLeng = 20; //所属行业
        this.descriptionLeng = 265; //备注
        this.loadAfter_arr = [];
        this.dealPerShow = false;
        this.fileNameFlag = true; //
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.relType = this.code['CustomGroupRelType'];
        this.idenType = this.code['CustomGroupIdenType'];
    } //码值
    GroupClientImportComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    GroupClientImportComponent.prototype.ngOnInit = function () {
        this.preSet();
        this.selectGroupRateInfo();
    };
    GroupClientImportComponent.prototype.preSet = function () {
        // 初始化
        // 接收route传参
        console.log(this.routerInfo.snapshot.params['isFreeGroup']);
        if (this.routerInfo.snapshot.params['isFreeGroup']) {
            this.isFreeGroup = true;
        }
        else {
            this.isFreeGroup = false;
        }
        if (this.routerInfo.snapshot.params['id']) {
            this.groupId = this.routerInfo.snapshot.params['id'];
        }
        if (this.routerInfo.snapshot.params['groupId']) {
            this.groupId = this.routerInfo.snapshot.params['groupId'];
        }
        if (this.routerInfo.snapshot.params['groupName']) {
            this.groupName = this.routerInfo.snapshot.params['groupName'];
            this.groupClientImport = this.routerInfo.snapshot.params['groupName'] + '-' + this.groupClientImport;
        }
        if (this.routerInfo.snapshot.params['custGroupView']) {
            this.custGroupView = this.routerInfo.snapshot.params['custGroupView'];
            if (this.custGroupView == '1') {
                this.isCustView = true;
            }
            if (this.custGroupView == '2') {
                this.isCustView = false;
            }
        }
        this.custGroupListBean.groupId = this.groupId; //群号
        // 初始化数组
        this.tempArr.push({
            doorNum: '',
            custNo: '',
            custName: '',
            // relType: '',
            relType: "",
            relDesc: '',
            contacts: '',
            idenType: '',
            idenNum: '',
            address: '',
            telNum: '',
            industry: '',
            description: '',
            xnkBz: '',
            hzdbjjFlag: '',
            cdhykFlag: '',
            syydFlag: '',
            xydFlag: '',
            xjdFlag: '',
            fydFlag: '',
            khjskhFlag: '',
            qtywFlag: '',
            xxfFlag: '',
            ajdFlag: '',
            targetCustFlag: ''
        });
        this.custGroupListBean.custList = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.tempArr);
        // 初始化 获取 下载模板的路径
        // 
        // this.httpService.customGroupModiBatchFileImport({}).subscribe(data => {
        //   
        //   this.fileName = data.fileName;
        //   this.fileUrl = data.fileUrl;
        // })
    };
    //查询优惠利率是否存在
    GroupClientImportComponent.prototype.selectGroupRateInfo = function () {
        var _this = this;
        this.selectGroupRateInfoBean.groupId = this.groupId;
        this.selectGroupRateInfoBean.statusId = '1';
        this.selectGroupRateInfoBean.pageNum = 1;
        this.selectGroupRateInfoBean.pageSize = 10;
        //
        this.httpService.selectGroupRateInfo(this.selectGroupRateInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // this.selectGroupRateInfoBean = data;
                _this.selectGroupRateInfoBean.rateList = data.rateList;
                _this.needApproval = true;
                if (_this.selectGroupRateInfoBean.rateList.length > 0) { //优惠利率群(先区分优惠利率，在区分单个、批量)
                    _this.approvalType = 'QXXBGLC';
                }
                else {
                    _this.approvalType = 'XJDSPLC';
                }
                // {//大额分期\供应链
                //   let params = {
                //     groupId: this.groupId
                //   };
                //   this.httpService.selectCustGroupPayToBorrow(params).subscribe(data => {
                //     if (data.returnCode.code == 'success') {
                //       if (data.payToBorrowFlag == '1') {
                //         this.needApproval = true;
                //         this.approvalType = 'XJDSPLC';
                //       }
                //     }
                //     else {
                //       this.msgs = [];
                //       data.returnCode.message ? data.returnCode.message : '查询群类型为大额分期/供应链失败！';
                //       this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                //     }
                //   }, err => {
                //     this.msgs = [];
                //     this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
                //   })
                // }
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询优惠利率失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    GroupClientImportComponent.prototype.bzbpm = function () {
        // 后台中心窗口
        this.bzbpmDisplay = true;
    };
    //批量导入
    GroupClientImportComponent.prototype.onBeforeSend = function (event) {
        var _this = this;
        // 上传点击,需跨域
        this.custGroupListBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_1__["CustGroupListBean"]();
        if (event.xhr.response) {
            this.fileList = JSON.parse(event.xhr.response);
            if (this.fileList.length > 1) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '不支持上传多个文件！' }];
                return;
            }
            if (this.fileList.hasOwnProperty('errorMsg')) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: this.fileList.errorMsg });
                return this.fileNameFlag = false;
            }
            else {
                this.fileNameFlag = true;
            }
            this.custGroupListBean.groupId = this.groupId;
            this.custGroupListBean.filePath = this.fileList[0].fileUrl;
            this.custGroupListBean.fileName = this.fileList[0].fileName;
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '获取服务器列表失败！' }];
        }
        if (this.isFreeGroup) { //自选群批量导入
            var param = this.custGroupListBean;
            this.httpService.batchFreeGroupList(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.initArr();
                    _this.custGroupListBean.successNum = data.successNum;
                    _this.custGroupListBean.failNum = data.failNum;
                    data.failInfoList = data.failInfoList.filter(function (item) { return item.executeFlag == 'F'; });
                    _this.custGroupListBean.failInfoList = data.failInfoList;
                    _this.batchDisplay = false;
                    _this.addDisplay = true;
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                }
                else {
                    _this.msgs = [];
                    data.returnCode.code ? data.returnCode.code : '导入失败！';
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
            });
        }
        else { //客户群批量导入
            if (this.needApproval) { //需要审批
                this.custGroupQuery();
            }
            // else {//不需要审批
            //   let param = this.custGroupListBean;
            //   this.httpService.batchCustGroupList(param).subscribe(data => {
            //     if (data.returnCode.code == 'success') {
            //       this.initArr();
            //       this.custGroupListBean.successNum = data.successNum;
            //       this.custGroupListBean.failNum = data.failNum;
            //       data.failInfoList = data.failInfoList.filter((item) => { return item.executeFlag == 'F' });
            //       this.custGroupListBean.failInfoList = data.failInfoList;
            //       this.addDisplay = true;
            //       this.msgs = [];
            //       this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            //     }
            //     else {
            //       this.msgs = [];
            //       data.returnCode.code ? data.returnCode.code : '导入失败！';
            //       this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            //     }
            //   }, err => {
            //     this.msgs = [];
            //     this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
            //   })
            // }
        }
    };
    //客户群选人
    GroupClientImportComponent.prototype.custGroupQuery = function (index) {
        var _this = this;
        if (index == '1') { //
            this.groupUploadFlag = '1';
        }
        else {
            this.groupUploadFlag = '';
        }
        this.waitSelUserList = this.commfunc.query(this.approvalType, {}); //选人
        if (!this.waitSelUserList.erro) {
            this.outVal = this.waitSelUserList.waitSelUserList;
            var chooseThis = this.waitSelUserList.display;
            var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            var a = commonHeader.extParam.specifyNextOpers;
            if (chooseThis == true && (a == undefined || a == '' || a == null)) {
                this.dealPerShow = true;
            }
            else {
                var param = this.custGroupListBean;
                this.httpService.batchCustGroupList(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.initArr();
                        _this.custGroupListBean.successNum = data.successNum;
                        _this.custGroupListBean.failNum = data.failNum;
                        data.failInfoList = data.failInfoList.filter(function (item) { return item.executeFlag == 'F'; });
                        _this.custGroupListBean.failInfoList = data.failInfoList;
                        _this.addDisplay = true;
                        _this.batchDisplay = false;
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                    }
                    else {
                        _this.msgs = [];
                        data.returnCode.code ? data.returnCode.code : '导入失败！';
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
                });
            }
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
        }
    };
    GroupClientImportComponent.prototype.initArr = function () {
        // 初始化数组
        this.tempArr = [{
                doorNum: '',
                custNo: '',
                custName: '',
                // relType: '',
                relType: "",
                relDesc: '',
                contacts: '',
                idenType: '',
                idenNum: '',
                address: '',
                telNum: '',
                industry: '',
                description: '',
                xnkBz: '',
                hzdbjjFlag: '',
                cdhykFlag: '',
                syydFlag: '',
                xydFlag: '',
                xjdFlag: '',
                fydFlag: '',
                khjskhFlag: '',
                qtywFlag: '',
                xxfFlag: '',
                ajdFlag: '',
                targetCustFlag: ''
            }];
        this.custGroupListBean.custList = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.tempArr);
    };
    GroupClientImportComponent.prototype.loadAfter = function (event) {
        var _this = this;
        var total_size = 0;
        if (event.files) {
            event.files.forEach(function (item) {
                total_size += item.size;
            });
        }
        // console.log(total_size);
        if (total_size > 314572800) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '上传文件大小不能超过300M' }];
            return false;
        }
        // 上传点击,需跨域
        if (event.xhr.response) {
            this.fileList = JSON.parse(event.xhr.response);
            if (this.fileList.hasOwnProperty('errorMsg')) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: this.fileList.errorMsg });
                return this.fileNameFlag = false;
            }
            else {
                this.fileNameFlag = true;
            }
            this.fileList.forEach(function (item) {
                _this.loadAfter_arr.push({
                    filePath: item.fileUrl + item.fileName
                });
            });
            // if (this.fileList.length > 1) {
            //   this.msgs = [];
            //   this.msgs = [{ severity: 'error', summary: '提示', detail: '不支持上传多个文件！' }];
            //   return;
            // }
            this.msgs = [];
            this.msgs = [{ severity: 'success', summary: '提示', detail: '文件上传成功！' }];
            this.obj.filePath = this.fileList[0].fileUrl;
            this.obj.fileName = this.fileList[0].fileName;
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '获取服务器列表失败！' }];
            return;
        }
    };
    //上传到后台中心
    GroupClientImportComponent.prototype.uploadAfterData = function () {
        var _this = this;
        if (this.fileNameFlag) {
            var param = {
                groupId: this.groupId,
                handleFlag: '2',
                infoList: this.loadAfter_arr
                // infoList:[{filePath:"/copdata/20180116190429/测试专用代管.xls"}]
            };
            this.httpService.uploadCustGroupList(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.custGroupListBean.globalSeqNoImage = data.globalSeqNoImage; //影像流水号
                    _this.bzbpmDisplay = false;
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: '上传到后台中心成功！' }];
                    _this.custGroupQuery(1);
                }
                else {
                    _this.msgs = [];
                    data.returnCode.code ? data.returnCode.code : '导入失败！';
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
            });
        }
    };
    // 后台中心提交
    GroupClientImportComponent.prototype.submitBzbpm = function () {
        var _this = this;
        this.httpService.BZ_1100200010104_BPM(this.bzBpmSubBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '提交成功' }];
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '提交失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    GroupClientImportComponent.prototype.closeBzbpm = function () {
        // 关闭后台中心
        this.bzbpmDisplay = false;
    };
    // --模态框相关
    GroupClientImportComponent.prototype.btnBatchImport = function () {
        // 客户群名单批量导入触发
        this.batchDisplay = true;
    };
    GroupClientImportComponent.prototype.closebatch = function () {
        // 客户群名单批量导入关闭
        this.batchDisplay = false;
    };
    GroupClientImportComponent.prototype.returnCustGroupList = function () {
        // 客户群名单返回结果模态框
        this.addDisplay = false;
        this.batchDisplay = false;
    };
    GroupClientImportComponent.prototype.addFreeGroupList = function () {
        var _this = this;
        // 自选群名单新增
        var flag1 = true;
        flag1 = this.isFormat();
        if (!flag1) {
            return;
        }
        this.confirmationService.confirm({
            message: '确定导入自选群名单?',
            accept: function () {
                var params = {
                    groupId: _this.groupId,
                    custList: _this.custGroupListBean.custList
                };
                _this.httpService.addFreeGroupList(params).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.custGroupListBean.successNum = data.successNum;
                        _this.custGroupListBean.failNum = data.failNum;
                        data.failInfoList = data.failInfoList.filter(function (item) { return item.executeFlag == 'F'; });
                        _this.custGroupListBean.failInfoList = data.failInfoList;
                        _this.addDisplay = true;
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                    }
                    else {
                        _this.msgs = [];
                        data.returnCode.code ? data.returnCode.code : '导入失败！';
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
                });
            }
        });
    };
    // 客户名单单个导入
    GroupClientImportComponent.prototype.addCustGroupList = function (index) {
        var _this = this;
        var flag1 = true;
        flag1 = this.isFormat();
        if (!flag1) {
            return;
        }
        // 客户群名单新增
        this.confirmationService.confirm({
            message: '确定导入客户群名单?',
            accept: function () {
                if (index == 2) {
                    _this.waitSelUserList = _this.commfunc.query(_this.approvalType, {});
                    if (!_this.waitSelUserList.erro) {
                        _this.outVal = _this.waitSelUserList.waitSelUserList;
                        var chooseThis = _this.waitSelUserList.display;
                        var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        var a = commonHeader.extParam.specifyNextOpers;
                        if (chooseThis == true && (a == undefined || a == '' || a == null)) {
                            _this.isOneSpImport = true;
                            _this.dealPerShow = true;
                            // this.outValue.emit({ outVal: this.outVal, dealPerShow: this.dealPerShow });
                        }
                        else {
                            _this.queryThis();
                        }
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: _this.waitSelUserList.erro });
                    }
                }
                else {
                    _this.queryThis();
                }
            }
        });
    };
    //单个客户导入
    GroupClientImportComponent.prototype.queryThis = function () {
        var _this = this;
        this.custGroupListBean.custListNum = this.custGroupListBean.custList.length; //客户名单数
        this.custGroupListBean = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.custGroupListBean);
        this.httpService.addCustGroupList(this.custGroupListBean).subscribe(function (data) {
            var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
            if (s.extParam.specifyNextOpers) {
                delete s.extParam.specifyNextOpers;
                var commonHeader = s;
                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
            }
            if (data.returnCode.code == 'success') {
                _this.isOneSpImport = false;
                if (data.isApply == 0) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: "客户名单新增成功" }];
                }
                else if (data.isApply == 1) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: "客户名单提交审批成功" }];
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: "客户名单提交审批成功" }];
                }
                _this.custGroupListBean.successNum = data.successNum;
                _this.custGroupListBean.failNum = data.failNum;
                _this.addDisplay = true;
                data.failInfoList = data.failInfoList.filter(function (item) { return item.executeFlag == 'F'; });
                _this.custGroupListBean.failInfoList = data.failInfoList;
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '新增失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //
    GroupClientImportComponent.prototype.outDisplayCall = function (event) {
        console.log(event);
        this.dealPerShow = event;
    };
    //选人回调
    GroupClientImportComponent.prototype.outValueCall = function (event) {
        var _this = this;
        console.log(event);
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        if (this.isOneSpImport) { //单个
            this.queryThis();
        }
        else { //批量
            if (this.groupUploadFlag == '1') {
                this.custGroupListBean.groupUploadFlag = '1';
            }
            else {
                this.custGroupListBean.groupUploadFlag = '';
                this.addDisplay = true;
            }
            var param = this.custGroupListBean;
            this.httpService.batchCustGroupList(param).subscribe(function (data) {
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader_1 = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader_1));
                }
                if (data.returnCode.code == 'success') {
                    _this.initArr(); //初始化
                    _this.custGroupListBean.successNum = data.successNum;
                    _this.custGroupListBean.failNum = data.failNum;
                    if (data.failInfoList && data.failInfoList.length != 0) {
                        data.failInfoList = data.failInfoList.filter(function (item) { return item.executeFlag == 'F'; });
                    }
                    _this.custGroupListBean.failInfoList = data.failInfoList;
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
                }
                else {
                    _this.msgs = [];
                    data.returnCode.code ? data.returnCode.code : '导入失败！';
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
            });
        }
    };
    // --其他
    GroupClientImportComponent.prototype.isNullCheck = function (index) {
        // 非空校验
        if (this.custGroupListBean.custList[index].custName.search(/^\S+$/) || !(this.custGroupListBean.custList[index].custName)) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '客户名称不能为空' }];
        }
    };
    GroupClientImportComponent.prototype.isTel = function (index) {
        // 手机号码校验
        // if (this.custGroupListBean.custList[index].telNum == '' || !(this.custGroupListBean.custList[index].telNum)) {
        //   this.msgs = [];
        //   this.msgs = [{ severity: 'error', summary: '提示', detail: '手机号码格式错误' }];
        // }
        if (Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_10__["checkTel"])(null, this.custGroupListBean.custList[index].telNum)) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '手机号码格式错误' }];
            return;
        }
        // if (this.custGroupListBean.custList[index].telNum.search(/^1\d{10}$/)) {
        //   this.msgs = [];
        //   this.msgs = [{ severity: 'error', summary: '提示', detail: '手机号码格式错误' }];
        // }
    };
    GroupClientImportComponent.prototype.isFormat = function () {
        var _this = this;
        // 格式检查
        var flag = true;
        this.custGroupListBean.custList.forEach(function (item) {
            if (item.doorNum != '' && item.doorNum.length > 32) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '户序号不能超过32位' }];
                flag = false;
                return;
            }
            if (item.custNo != '' && item.custNo.search(/^\d{10}$/)) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '客户号必须为十位数字' }];
                flag = false;
                return;
            }
            if (!(item.custName) || Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_10__["specialSymbol"])(null, item.custName) || item.custName.length > 100) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '客户名称格式有误或为空，不能含有特殊字符' }];
                flag = false;
                return;
            }
            if (item.relDesc != '' && item.relDesc.length > 20) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '详细信息不能超过20位' }];
                flag = false;
                return;
            }
            if (item.contacts != '' && item.contacts.length > 265) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '联系人不能超过265位' }];
                flag = false;
                return;
            }
            if (item.idenNum != '' && item.idenNum.length > 32) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '证件号码不能超过32位' }];
                flag = false;
                return;
            }
            if (item.address != '' && item.address.length > 265) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '客户地址不能超过265位' }];
                flag = false;
                return;
            }
            if (item.telNum != '' && Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_10__["checkTel"])(null, item.telNum)) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '手机号码格式错误' }];
                flag = false;
                return;
            }
            if (item.industry != '' && item.industry.length > 20) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '所属行业不能超过20位' }];
                flag = false;
                return;
            }
            if (item.description != '' && item.description.length > 265) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '备注不能超过265位' }];
                flag = false;
                return;
            }
        });
        return flag;
    };
    GroupClientImportComponent.prototype.addArray = function (index) {
        // 增加行
        this.tempArr.push({
            doorNum: '',
            custNo: '',
            custName: '',
            // relType: '',
            relType: "",
            relDesc: '',
            contacts: '',
            idenType: '',
            idenNum: '',
            address: '',
            telNum: '',
            industry: '',
            description: '',
            xnkBz: '',
            hzdbjjFlag: '',
            cdhykFlag: '',
            syydFlag: '',
            xydFlag: '',
            xjdFlag: '',
            fydFlag: '',
            khjsFlag: '',
            qtywFlag: '',
            xxfFlag: '',
            ajdFlag: '',
            targetCustFlag: ''
        });
        this.custGroupListBean.custList = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.tempArr);
    };
    GroupClientImportComponent.prototype.delArray = function (index) {
        // 删除行
        if (index) {
            this.custGroupListBean.custList.splice(index, 1);
            this.tempArr = this.custGroupListBean.custList;
            this.custGroupListBean.custList = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](this.tempArr);
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '第一行不能删除！' }];
        }
    };
    GroupClientImportComponent.prototype.returnCustGroupView = function () {
        var _this = this;
        // 返回客户群视图
        this.confirmationService.confirm({
            message: '确定返回客户群视图?',
            accept: function () {
                var groupId = _this.commfunc.compileStr(_this.groupId);
                _this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view', { groupId: groupId, groupName: _this.groupName }]);
            }
        });
    };
    GroupClientImportComponent.prototype.returnCustGroupView2 = function () {
        var _this = this;
        // 返回客户群视图
        this.confirmationService.confirm({
            message: '确定返回自选群视图?',
            accept: function () {
                _this.router.navigate(['/pages/tzb/custom/custom-marketing/group/free-group-view', { groupId: _this.groupId }]);
            }
        });
    };
    GroupClientImportComponent.prototype.returnSubmit = function () {
        var _this = this;
        // 返回待提交
        this.confirmationService.confirm({
            message: '确定返回待提交页面?',
            accept: function () {
                _this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-save', { groupId: _this.groupId }]);
            }
        });
    };
    //按钮权限
    GroupClientImportComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    GroupClientImportComponent.prototype.selectCustBriefInfo = function (event, i, a) {
        var _this = this;
        console.log(this.custGroupListBean.custList[i].custNo);
        if (a.value.length == 10) {
            console.log('111');
            var param = {
                custNo: a.value
            };
            this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    // this.custGroupListBean.custList[i] = data || [];
                    _this.custGroupListBean.custList[i].custName = data.custName || '';
                    // this.custGroupListBean.custList[i].contactWay = data.contactWay || '';
                    _this.custGroupListBean.custList[i].idenNum = data.idenNum || '';
                    _this.custGroupListBean.custList[i].idenType = data.idenType || '';
                    _this.custGroupListBean.custList = lodash__WEBPACK_IMPORTED_MODULE_3__["clone"](_this.custGroupListBean.custList);
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
    };
    GroupClientImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-client-import',
            template: __webpack_require__(/*! ./group-client-import.component.html */ "./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-import.component.html"),
            styles: [__webpack_require__(/*! ./group-client-import.component.scss */ "./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-import.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_11__["Commfunc"]],
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_11__["Commfunc"]])
    ], GroupClientImportComponent);
    return GroupClientImportComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-import.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-import.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: GroupClientImportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupClientImportModule", function() { return GroupClientImportModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _group_client_import_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group-client-import.routing */ "./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-import.routing.ts");
/* harmony import */ var _group_client_import_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-client-import.component */ "./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-import.component.ts");
/* harmony import */ var _group_client_check_group_client_check_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-client-check/group-client-check.component */ "./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-check/group-client-check.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//客户群组
var GroupClientImportModule = /** @class */ (function () {
    function GroupClientImportModule() {
    }
    GroupClientImportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _group_client_import_routing__WEBPACK_IMPORTED_MODULE_4__["GroupClientImportRouting"]
            ],
            declarations: [
                _group_client_import_component__WEBPACK_IMPORTED_MODULE_5__["GroupClientImportComponent"],
                _group_client_check_group_client_check_component__WEBPACK_IMPORTED_MODULE_6__["GroupClientCheckComponent"]
            ],
            exports: [],
            providers: []
        })
    ], GroupClientImportModule);
    return GroupClientImportModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-import.routing.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-import.routing.ts ***!
  \**************************************************************************************************/
/*! exports provided: routes, GroupClientImportRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupClientImportRouting", function() { return GroupClientImportRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _group_client_import_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group-client-import.component */ "./src/app/pages/tzb/custom/custom-group/group-client-import/group-client-import.component.ts");


//客户群组
// import { CustomGroupDeleteComponent } from './custom-group-delete/custom-group-delete.component';//客户群-删除客户群
var routes = [
    {
        path: '', component: _group_client_import_component__WEBPACK_IMPORTED_MODULE_1__["GroupClientImportComponent"] //创建
    }
];
var GroupClientImportRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=group-client-import-group-client-import-module.js.map