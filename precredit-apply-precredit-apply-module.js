(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["precredit-apply-precredit-apply-module"],{

/***/ "./src/app/pages/tzb/custom/custom-group/precredit-apply/bean/tenType.bean.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/precredit-apply/bean/tenType.bean.ts ***!
  \************************************************************************************/
/*! exports provided: TenTypeBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenTypeBean", function() { return TenTypeBean; });
var TenTypeBean = /** @class */ (function () {
    function TenTypeBean() {
    }
    return TenTypeBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/precredit-apply/precredit-apply.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/precredit-apply/precredit-apply.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 预授信 -->\r\n<div class=\"basis-group ui-g-12 moduleng\">\r\n  <div class=\"ui-g-12\">\r\n    <header-title [Info]=\"precredit\"></header-title>\r\n    <div class=\"form-group\">\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-2 label-css\"><label>客户群号：</label></div>\r\n          <div class=\"ui-g-4 input-css\">\r\n            <input [(ngModel)]=\"groupId\" disabled=\"true\" id=\"input\" type=\"text\" size=\"30\" pInputText>\r\n          </div>\r\n          <div class=\"ui-g-2 label-css\"><label>客户群名称：</label></div>\r\n          <div class=\"ui-g-4 input-css\"><label><input  [(ngModel)]=\"groupName\" id=\"input\" type=\"text\" size=\"30\" pInputText disabled=\"true\"></label></div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-2 label-css\"><label>授信状态：</label></div>\r\n          <div class=\"ui-g-4 input-css\">\r\n            <p-dropdown [options]=\"status_arr\" [(ngModel)]=\"status\"></p-dropdown>\r\n          </div>\r\n          <div class=\"ui-g-2 label-css\"><label>授信额度(万元)：</label></div>\r\n          <div class=\"ui-g-4 input-css creditLimit\">\r\n            <div class=\"ui-g-5\">\r\n                <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"creditAmtStart\">\r\n            </div>\r\n            <div class=\"ui-g-2 table-c\">\r\n                至\r\n            </div>\r\n            <div class=\"ui-g-5\">\r\n                <input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"creditAmtEnd\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-2 label-css\"><label>所属机构：</label></div>\r\n          <div class=\"ui-g-4 input-css\"><input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"session_params.orgName\" disabled></div>\r\n          <div class=\"ui-g-2 label-css\"><label>经办人：</label></div>\r\n          <div class=\"ui-g-4 input-css\"><input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"session_params.userName\" disabled></div>\r\n        </div>\r\n        <div class=\"ui-g\">\r\n          <div class=\"ui-g-2 label-css\"><label>经办时间：</label></div>\r\n          <div class=\"ui-g-4 input-css\"><input id=\"input\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"current_date\" disabled></div>\r\n       \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 evaluate-css btn-batch-search\">\r\n      <button (click)=\"selectGroupCreditExtensionInfo()\" pButton type=\"button\" label=\"查询\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 btn-batch-submit\" *ngIf=\"permissionCheck('SID00002_P027_P001_P002_P002_P001')\">\r\n      <button pButton type=\"button\" label=\"预授信申请新建\" (click)=\"yushouxinEdu()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 table-css base-table\">\r\n      <p-dataTable [emptyMessage]=\"tableMesg\" [value]=\"cars\" scrollable=\"true\" scrollHeight=\"300px\">\r\n        <p-column header=\"序号\" [style]=\"{'text-align':'center'}\">\r\n          <ng-template let-col let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n            {{i+1}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column [field]=\"item.label\" [header]=\"item.ch\" *ngFor=\"let item of arr;let i = index;\" [style]=\"{'text-align':'center'}\">\r\n        </p-column>\r\n      </p-dataTable>\r\n      <p-paginator rows=\"{{pageSize2}}\" totalRecords=\"{{totalNum2}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate2($event)\"></p-paginator>\r\n    </div>\r\n    <div class=\"ui-g-12 btn-submit\">\r\n      <button pButton type=\"button\" label=\"返回视图\" (click)=\"returnCustGroupView()\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- msg -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!--comfirm -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n  <p-footer>\r\n    <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n    <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n  </p-footer>\r\n</p-confirmDialog>\r\n\r\n<!-- 预授信校验模态框 -->\r\n<p-dialog *ngIf=\"creditDisplay\"  [(visible)]=\"creditDisplay\" modal=\"true\" width=\"800\" class=\"creditDialog\">\r\n  <header-title [Info]=\"'预授信校验'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <p-dataTable [emptyMessage]=\"tableMesg\" [style]=\"{'text-align':'center'}\" [value]=\"infoList\">\r\n      <p-column header=\"客户号\">\r\n        <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          <span>\r\n            {{col.custNo}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"客户名称\">\r\n        <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          <span>\r\n            {{col.custName}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"失败原因\">\r\n        <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n          <span>\r\n            {{col.reason}}\r\n          </span>\r\n        </ng-template>\r\n      </p-column>\r\n    </p-dataTable>\r\n  </div>\r\n  <div class=\"ui-g-12 table-c\">\r\n    <button pButton type=\"button\" label=\"是\" (click)=\"yushouxinEdu('confirm')\"></button>\r\n    <button pButton type=\"button\" label=\"否\" (click)=\"closeCreditDisplay()\"></button>\r\n  </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/precredit-apply/precredit-apply.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/precredit-apply/precredit-apply.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basis-group .form-group .label-css {\n  text-align: right; }\n\n.basis-group .form-group .input-css {\n  text-align: left; }\n\n.basis-group .btn-submit {\n  text-align: center; }\n\n.basis-group .btn-batch-import {\n  text-align: right;\n  text-decoration: underline; }\n\n.basis-group .btn-batch-submit {\n  text-align: right; }\n\n.basis-group .btn-batch-search {\n  text-align: center; }\n\n.basis-group .explain-css {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.basis-group .detail-css {\n  color: red; }\n\n.basis-group .table-css {\n  text-align: center; }\n\n.creditLimit .ui-g-5 {\n  padding: 0; }\n\n.table-c {\n  text-align: center; }\n\n:host/deep/ .creditDialog .ui-dialog .ui-dialog-content {\n  overflow: auto;\n  height: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvcHJlY3JlZGl0LWFwcGx5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWdyb3VwXFxwcmVjcmVkaXQtYXBwbHlcXHByZWNyZWRpdC1hcHBseS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdZLGlCQUFpQixFQUFBOztBQUg3QjtFQU1ZLGdCQUFnQixFQUFBOztBQU41QjtFQVVRLGtCQUFrQixFQUFBOztBQVYxQjtFQWFRLGlCQUFpQjtFQUNqQiwwQkFBMEIsRUFBQTs7QUFkbEM7RUFpQlEsaUJBQWlCLEVBQUE7O0FBakJ6QjtFQW9CUSxrQkFBa0IsRUFBQTs7QUFwQjFCO0VBdUJRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBekIvQjtFQTRCUSxVQUFVLEVBQUE7O0FBNUJsQjtFQStCUSxrQkFBa0IsRUFBQTs7QUFJMUI7RUFFUSxVQUFVLEVBQUE7O0FBSWxCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksY0FBYztFQUNkLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWdyb3VwL3ByZWNyZWRpdC1hcHBseS9wcmVjcmVkaXQtYXBwbHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaXMtZ3JvdXAge1xyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgIC5sYWJlbC1jc3Mge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlucHV0LWNzcyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi1zdWJtaXQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5idG4tYmF0Y2gtaW1wb3J0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICAgIC5idG4tYmF0Y2gtc3VibWl0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1iYXRjaC1zZWFyY2h7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmV4cGxhaW4tY3NzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZGV0YWlsLWNzcyB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuICAgIC50YWJsZS1jc3N7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3JlZGl0TGltaXQge1xyXG4gICAgLnVpLWctNSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5cclxuLnRhYmxlLWN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5jcmVkaXREaWFsb2cgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/precredit-apply/precredit-apply.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/precredit-apply/precredit-apply.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PrecreditApplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecreditApplyComponent", function() { return PrecreditApplyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/common/http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _bean_tenType_bean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bean/tenType.bean */ "./src/app/pages/tzb/custom/custom-group/precredit-apply/bean/tenType.bean.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //我的客户群信息查询







var PrecreditApplyComponent = /** @class */ (function () {
    function PrecreditApplyComponent(ActivatedRoute, httpService, commfunc, confirmationService, router, route, CommonHttpService) {
        this.ActivatedRoute = ActivatedRoute;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.confirmationService = confirmationService;
        this.router = router;
        this.route = route;
        this.CommonHttpService = CommonHttpService;
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"];
        // 传参
        this.groupId = '';
        this.groupName = '';
        // 控件
        this.msgs = [];
        this.precredit = "预授信";
        this.creditDisplay = false; //预授信模态框
        this.isSearch = false; //是否可以搜索
        this.status_arr = [
            { label: '请选择', value: '' },
            { label: '待发起', value: '0' },
            { label: '追回', value: '1' },
            { label: '通过', value: '2' },
            { label: '否决', value: '3' },
        ];
        this.pageNum2 = 1;
        this.pageSize2 = 10;
        this.totalNum2 = 10;
        this.tenTypeBean = new _bean_tenType_bean__WEBPACK_IMPORTED_MODULE_8__["TenTypeBean"]();
        this.orgId2 = '';
        this.orgId = '';
        this.userId = '';
        // ;
        this.custNo = this.commfunc.getSessionData('custNo');
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.orgId) {
            this.orgId = this.user.orgId;
        }
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
        // 从路由获取客群机构id
        if (this.route.snapshot.params['orgId']) {
            this.orgId2 = this.route.snapshot.params['orgId'];
        }
        console.log(this.orgId2);
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.GroupOfferLines = this.code['GroupOfferLinese'];
        this.status_arr = this.code['GroupCreditArr'];
        //经营项目MANAGE_ITEM
        this.MANAGE_ITEM = this.code['MANAGE_ITEM'];
        //经营年限LICENCE_YEARS
        this.LICENCE_YEARS = this.code['LICENCE_YEARS'];
        //信贷员建议
        this.RISK_ADVISE = this.code['RISK_ADVISE'];
        //预授信状态
        this.creditFlag = this.code['creditFlag'];
    }
    //码值
    PrecreditApplyComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    PrecreditApplyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var param = {
            orgId: this.orgId2,
            flag: '1'
        };
        this.httpService.queryOrgByCombConditions(param).subscribe(function (data) {
            if (data.orgInfoList[0].legalFlag == '1') {
                _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_9__["TZB_HTTP_XIN"];
            }
            else if (data.orgInfoList[0].legalFlag == '2') {
                _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_9__["TZB_HTTP_XIN_C"];
            }
        });
        this.preSet();
        this.selectGroupCreditExtensionInfo();
    };
    PrecreditApplyComponent.prototype.preSet = function () {
        if (this.ActivatedRoute.snapshot.params.pageNum) {
            this.pageNum = this.ActivatedRoute.snapshot.params.pageNum;
        }
        this.params = this.ActivatedRoute.snapshot.queryParams;
        if (this.ActivatedRoute.snapshot.params['groupId']) {
            this.groupId = this.ActivatedRoute.snapshot.params['groupId'];
        }
        if (this.ActivatedRoute.snapshot.params['groupName']) {
            this.groupName = this.ActivatedRoute.snapshot.params['groupName'];
            this.precredit = this.ActivatedRoute.snapshot.params['groupName'] + '-' + this.precredit;
        }
        this.session_params = JSON.parse(window.sessionStorage.getItem('chName'));
        var date = new Date();
        this.current_date = this.commfunc.transDateN(date);
        // 假数据
        this.arr = [
            {
                ch: '客户号',
                label: 'custNo'
            },
            {
                ch: '客户名称',
                label: 'custName'
            },
            {
                ch: '经营项目',
                label: 'bussItems'
            },
            {
                ch: '经营地址',
                label: 'bussAddr'
            },
            {
                ch: '经营年限',
                label: 'bussAge'
            },
            {
                ch: '系统信用评估一建议额度',
                label: 'creditAmtOne'
            },
            {
                ch: '系统信用评估二建议额度',
                label: 'creditAmtTwo'
            },
            {
                ch: '系统判断目标授信客户',
                label: 'systemCreditFlag'
            },
            {
                ch: '经办人判断目标授信客户',
                label: 'agentCreditFlag'
            },
            {
                ch: '信贷员建议额度（万元）',
                label: 'advise'
            },
            {
                ch: '系统建议授信额度（万元）',
                label: 'systemCreditAmt'
            },
            // {
            //   ch: '预授信额度（万元）',
            //   label: 'creditAmt'
            // },
            {
                ch: '经办人',
                label: 'agentName'
            },
            {
                ch: '经办时间',
                label: 'agentDate'
            },
            {
                ch: '状态',
                label: 'creditFlagCh'
            }
        ];
    };
    // //批量導入
    // btnBatchImport() {
    //   let params = {
    //     bussCode: 'WMA2012T1000009',
    //     tranId: 'WMA2012',
    //     bussNo: '886009',
    //     noteName: 'UP',
    //     branchId: '001',
    //     userId: '',
    //     taskId: '002',
    //     runScript: 'TRUE',
    //     filePath: 'http://10.1.98.17:8080/customerInfo/FileDownload/?fileUrl=/copdata/&fileName=788fd3df-759d-4889-853a-0932817c1e94_1513754558340_custGroupEvaluaImport.xls'
    //   }
    //   let successFnc = data => {
    //     this.msgs = [{ severity: 'success', summary: '提示', detail: '批量成功' }];
    //   }
    //   this.commfunc.interfaceComFnc(this.httpService.BZ_0200200000603_BPM(params), successFnc, this.msgs)
    // }
    // 链接
    PrecreditApplyComponent.prototype.returnCustGroupView = function () {
        var _this = this;
        // 返回客户群视图
        this.confirmationService.confirm({
            message: '确定返回客户群视图?',
            accept: function () {
                var groupId = _this.commfunc.compileStr(_this.groupId);
                _this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view', { groupId: groupId, groupName: _this.groupName, pageNum: _this.pageNum }]);
            }
        });
    };
    //按钮权限
    PrecreditApplyComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    //预售信查询
    PrecreditApplyComponent.prototype.selectGroupCreditExtensionInfo = function () {
        var _this = this;
        var params = {
            groupId: this.groupId,
            creditAmtStart: this.creditAmtStart,
            creditAmtEnd: this.creditAmtEnd,
            creditFlag: this.status,
            pageNum: this.pageNum2,
            pageSize: this.pageSize2
        };
        var successFnc = function (data) {
            var creditFlag_stu = ["待发起", "追回", "通过", "否决"];
            _this.cars = data.infoList;
            _this.totalNum2 = data.totalNum;
            _this.pageNum2 = data.pageNum;
            _this.pageSize2 = data.pageSize;
            _this.cars.forEach(function (item, i) {
                //状态
                _this.creditFlag.forEach(function (element) {
                    if (element.value == item.creditFlag) {
                        _this.cars[i]["creditFlagCh"] = element.label;
                    }
                });
                var creditAmtOneFlag, creditAmtTwoFlag, flag1 = false;
                //
                _this.GroupOfferLines.forEach(function (item_2) {
                    if (item.creditAmtOne && item.creditAmtOne != '' && item_2.value == item.creditAmtOne) {
                        _this.cars[i]["creditAmtOne"] = item_2.label || ''; //转换码值
                        switch (item_2.value) { //系统评估一建议额度
                            case '100':
                                creditAmtOneFlag = '0';
                                break;
                            case '90':
                                flag1 = true;
                                break;
                            case '80':
                                creditAmtOneFlag = '300';
                                break; //30万以上
                            default: creditAmtOneFlag = _this.cars[i]["creditAmtOne"].split('-')[1].split(']')[0];
                        }
                    }
                    if (item.creditAmtTwo && item.creditAmtTwo != '' && item_2.value == item.creditAmtTwo) {
                        _this.cars[i]["creditAmtTwo"] = item_2.label || '';
                        switch (item_2.value) { //系统评估二建议额度
                            case '100':
                                creditAmtTwoFlag = '0';
                                break;
                            case '90':
                                flag1 = true;
                                break;
                            case '80':
                                creditAmtTwoFlag = '300';
                                break;
                            default: creditAmtTwoFlag = _this.cars[i]["creditAmtTwo"].split('-')[1].split(']')[0];
                        }
                    }
                    //预授信额度
                    if (item.creditAmt != '' && item_2.value == item.creditAmt) {
                        _this.cars[i]["creditAmt"] = item_2.label || '';
                    }
                });
                //系统授信额度
                if (flag1) {
                    _this.cars[i]['systemCreditAmt'] = '否决';
                }
                else if (creditAmtOneFlag == '0' || creditAmtTwoFlag == '0') {
                    _this.cars[i]['systemCreditAmt'] = '0';
                }
                else if (creditAmtOneFlag == '300' && creditAmtTwoFlag == '300') {
                    _this.cars[i]['systemCreditAmt'] = '30万以上';
                }
                else if (creditAmtOneFlag == '300' || creditAmtTwoFlag == '300' && (creditAmtOneFlag == '300' && creditAmtTwoFlag == '300')) {
                    _this.cars[i]['systemCreditAmt'] = creditAmtOneFlag == '300' ? creditAmtTwoFlag : creditAmtOneFlag;
                }
                else {
                    _this.cars[i]['systemCreditAmt'] = parseInt(creditAmtOneFlag) >= parseInt(creditAmtTwoFlag) ? creditAmtTwoFlag : creditAmtOneFlag;
                }
                //系统判断目标授信客户
                if (_this.cars[i]["systemCreditFlag"] != '' && _this.cars[i]["systemCreditFlag"]) {
                    _this.cars[i]["systemCreditFlag"] = _this.cars[i]["systemCreditFlag"] == 0 ? '否' : '是';
                }
                ;
                if (_this.cars[i]["agentCreditFlag"] != '' && _this.cars[i]["agentCreditFlag"]) {
                    _this.cars[i]["agentCreditFlag"] = _this.cars[i]["agentCreditFlag"] == 0 ? '否' : '是';
                }
                ;
                //
                if (_this.cars[i]["bussItems"] != '' && _this.cars[i]["bussItems"]) {
                    _this.MANAGE_ITEM.forEach(function (element) {
                        if (element.value == _this.cars[i]["bussItems"]) {
                            _this.cars[i]["bussItems"] = element.label;
                        }
                    });
                }
                ;
                //
                if (_this.cars[i]["bussAge"] != '' && _this.cars[i]["bussAge"]) {
                    _this.LICENCE_YEARS.forEach(function (element) {
                        if (element.value == _this.cars[i]["bussAge"]) {
                            _this.cars[i]["bussAge"] = element.label;
                        }
                    });
                }
                ;
                //
                if (_this.cars[i]["advise"] != '' && _this.cars[i]["advise"]) {
                    _this.RISK_ADVISE.forEach(function (element) {
                        if (element.value == _this.cars[i]["advise"]) {
                            _this.cars[i]["advise"] = element.label;
                        }
                    });
                }
                ;
                _this.queryTellerById(item, i);
            });
            _this.msgs = [{ severity: 'success', summary: '提示', detail: '查询成功！' }];
        };
        this.commfunc.interfaceComFnc(this.httpService.selectGroupCreditExtensionInfo(params), successFnc, this.msgs);
    };
    //查询人员姓名
    PrecreditApplyComponent.prototype.queryTellerById = function (item, i) {
        var _this = this;
        // if (item.agentId == '') {
        var params = {
            tellerId: item.agentId
        };
        var successFnc = function (data) {
            _this.cars[i]["agentName"] = data.tellerName;
            _this.cars = lodash__WEBPACK_IMPORTED_MODULE_7__["clone"](_this.cars);
        };
        this.commfunc.interfaceComFnc(this.CommonHttpService.queryTellerById(params), successFnc, this.msgs);
        // }
    };
    //预授信额度新增
    PrecreditApplyComponent.prototype.yushouxinEdu = function (info) {
        var _this = this;
        this.creditDisplay = true;
        if (info == 'confirm') {
            this.tenTypeBean.userId = this.userId;
            this.tenTypeBean.sysCode = '122';
            this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
            this.tenTypeBean.serverName = 'ywsn';
            this.tenTypeBean.validateType = '0';
            this.tenTypeBean.extraInfo = 'ywsn';
            this.tenTypeBean.encryptType = 'HS256';
            this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var tokens = data.tokenCode;
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + _this.groupId + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=7BB17110843F877BAB120C9F61DF45DE|moduleTable=BA727AC5494376BC0914E9183862DD56|moduleProc=599|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=7BB17110843F877BAB120C9F61DF45DE|main_moduleTable=BA727AC5494376BC0914E9183862DD56";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    var timestamp = new Date().getTime();
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp, features, closeOnLoseFocus);
                }
                else {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (error) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
            });
            this.creditDisplay = false;
        }
        else {
            this.checkout();
        }
    };
    //预授信 校验
    PrecreditApplyComponent.prototype.checkout = function () {
        var _this = this;
        var params = {
            groupId: this.groupId
        };
        this.httpService.queryGroupCustByCondition(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                console.log(data);
                _this.infoList = data.infoList;
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
    //关闭校验模态框
    PrecreditApplyComponent.prototype.closeCreditDisplay = function () {
        this.creditDisplay = false;
    };
    //分页
    PrecreditApplyComponent.prototype.paginate2 = function (event) {
        //每页显示的条数
        this.pageSize2 = event.rows;
        //当前页
        var currentPage = event.page + 1 + '';
        this.pageNum2 = currentPage;
        //调用查询的方法
        this.selectGroupCreditExtensionInfo();
    };
    PrecreditApplyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-precredit-apply',
            template: __webpack_require__(/*! ./precredit-apply.component.html */ "./src/app/pages/tzb/custom/custom-group/precredit-apply/precredit-apply.component.html"),
            styles: [__webpack_require__(/*! ./precredit-apply.component.scss */ "./src/app/pages/tzb/custom/custom-group/precredit-apply/precredit-apply.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_6__["CommonHttpService"]])
    ], PrecreditApplyComponent);
    return PrecreditApplyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/precredit-apply/precredit-apply.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/precredit-apply/precredit-apply.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: PrecreditApplyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecreditApplyModule", function() { return PrecreditApplyModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _precredit_apply_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./precredit-apply.routing */ "./src/app/pages/tzb/custom/custom-group/precredit-apply/precredit-apply.routing.ts");
/* harmony import */ var _precredit_apply_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./precredit-apply.component */ "./src/app/pages/tzb/custom/custom-group/precredit-apply/precredit-apply.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//客户群组
var PrecreditApplyModule = /** @class */ (function () {
    function PrecreditApplyModule() {
    }
    PrecreditApplyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _precredit_apply_routing__WEBPACK_IMPORTED_MODULE_4__["PrecreditApplyRouting"],
            ],
            declarations: [
                _precredit_apply_component__WEBPACK_IMPORTED_MODULE_5__["PrecreditApplyComponent"]
            ],
            exports: [],
            providers: []
        })
    ], PrecreditApplyModule);
    return PrecreditApplyModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/precredit-apply/precredit-apply.routing.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/precredit-apply/precredit-apply.routing.ts ***!
  \******************************************************************************************/
/*! exports provided: routes, PrecreditApplyRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecreditApplyRouting", function() { return PrecreditApplyRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _precredit_apply_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precredit-apply.component */ "./src/app/pages/tzb/custom/custom-group/precredit-apply/precredit-apply.component.ts");


//客户群组
// import { CustomGroupDeleteComponent } from './custom-group-delete/custom-group-delete.component';//客户群-删除客户群
var routes = [
    {
        path: '', component: _precredit_apply_component__WEBPACK_IMPORTED_MODULE_1__["PrecreditApplyComponent"] //创建
    }
];
var PrecreditApplyRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=precredit-apply-precredit-apply-module.js.map