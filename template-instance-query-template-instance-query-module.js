(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["template-instance-query-template-instance-query-module"],{

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/template-instance-query/bean/template-instance.bean.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/template-instance-query/bean/template-instance.bean.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: TemplateInstanceBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstanceBean", function() { return TemplateInstanceBean; });
var TemplateInstanceBean = /** @class */ (function () {
    function TemplateInstanceBean() {
    }
    return TemplateInstanceBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/template-instance-query/template-instance-query.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/template-instance-query/template-instance-query.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"'模板实例查询'\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n\r\n    <div class=\"ui-g-4\">\r\n      <span class=\"ui-g-4 label\">模板编号：</span>\r\n      <div class=\"ui-g-6\">\r\n        <p-dropdown [options]=\"templateId\" (keyup)=\"inpquery($event)\" [(ngModel)]=\"templateInstanceBean.dtId\" placeholder=\"请选择\" filter=\"filter\"\r\n          (onChange)=\"doChose($event)\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-4\">\r\n      <span class=\"ui-g-4 label\">模板名称：</span>\r\n      <div class=\"ui-g-6\">\r\n        <input type=\"text\" disabled pInputText [(ngModel)]=\"templateInstanceBean.dtName\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-4 btn\">\r\n      <button pButton type=\"button\" label=\"查询\" (click)='query()'></button>\r\n      <button pButton type=\"button\" label=\"重置\" (click)='tempIdReset()'></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"templateTitle\"></header-title>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-4\" *ngFor=\"let item of searchList\">\r\n      <span class=\"ui-g-4 label\">{{item.daName}}：</span>\r\n      <div class=\"ui-g-6\">\r\n        <input *ngIf=\"item['daType']=='01'\" type=\"text\" pInputText [(ngModel)]=\"item['value']\">\r\n        <input *ngIf=\"item['daType']=='02'\" type=\"number\" pInputText [(ngModel)]=\"item['value']\">\r\n        <!-- <p-calendar *ngIf=\"item['valueList'].length == 1 && item['daType']=='03'\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [(ngModel)]=\"item['saveValue']\" (onSelect)=\"searchInfo($event,item['value'])\"></p-calendar> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"查询\" [disabled]=\"abledFlag\" (click)='manageQuery()'></button>\r\n    <button pButton type=\"button\" label=\"重置\" [disabled]=\"abledFlag\" (click)='manageReset()'></button>\r\n    <button class=\"button button3\" *ngIf=\"!isdeletall\"  pButton type=\"button\" label=\"清除\" [disabled]=\"abledFlag\" (click)=\"remove()\"></button>\r\n    <button class=\"button button3\" *ngIf=\"isdeletall\"  pButton type=\"button\" label=\"全部清除\" [disabled]=\"abledFlag\" (click)=\"removeAll()\"></button>\r\n    <button class=\"button button2\" pButton type=\"button\" [disabled]=\"abledFlag\" label=\"导出\" (click)='download()'></button>\r\n    <button class=\"button button1\" pButton type=\"button\" [disabled]=\"abledFlag\" label=\"导入\" (click)='import()'></button>\r\n    <button class=\"button\" pButton type=\"button\" label=\"新增\" [disabled]=\"abledFlag\" (click)='add()'></button>\r\n  </div>\r\n\r\n  <p-dialog [(visible)]=\"loadDisplay\" *ngIf=\"loadDisplay\" modal=\"modal\" width=\"600\">\r\n    <p-header>文件导入</p-header>\r\n    <p-fileUpload invalidFileTypeMessageDetail=\"\" invalidFileTypeMessageSummary=\"\" chooseLabel=\"浏览\" uploadLabel=\"上传\" cancelLabel=\"取消\"\r\n      name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"load($event)\">\r\n    </p-fileUpload>\r\n    <div *ngIf=\"files.length>0\">\r\n      <p *ngFor=\"let item of files\">{{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item['size']/1024}}kb</p>\r\n    </div>\r\n  </p-dialog>\r\n\r\n  <div class=\"ui-g-12 table\">\r\n    <div class=\"ui-g-12 tableContent\">\r\n      <p-dataTable emptyMessage=\"没有查找到数据\" [value]=\"tableData\" scrollable=\"true\" scrollHeight=\"550px\">\r\n        <p-column header=\"选择\" field=\"\" [style]=\"{'width':'80px'}\">\r\n          <ng-template let-item=\"rowData\" pTemplate=\"body\" let-i=\"rowIndex\">\r\n            <p-checkbox [value]=\"item.seqNo\" [(ngModel)]=\"selectList\" (onChange)=\"select($event,item)\"></p-checkbox>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column *ngFor=\"let item of tableList\" [field]=\"item.daAnotherField\" [header]=\"item.daName\">\r\n          <ng-template *ngIf=\"item['valueList'].length != 1\" let-col=\"rowData\" pTemplate=\"body\">\r\n            <span>{{col[item.daAnotherField] | codeValuePie:item.valueList}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"operator\" header='操作'>\r\n          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n            <a class=\"tabelUpdateIco\" (click)=\"update(item)\">修改</a>\r\n            <a class=\"tabelDeleteIco\" (click)=\"delete(item)\">删除</a>\r\n          </ng-template>\r\n        </p-column>\r\n\r\n\r\n        <p-footerColumnGroup>\r\n          <p-row *ngIf=\"addFlag\" scrollable=\"true\">\r\n            <p-column footer=\"\" *ngFor=\"let item of tableList\">\r\n              <ng-template pTemplate=\"footer\">\r\n                <input *ngIf=\"item['valueList'].length == 1 && item['daType']=='01'\" type=\"text\" placeholder=\"请输入\" pInputText [(ngModel)]=\"item['saveValue']\">\r\n                <input *ngIf=\"item['valueList'].length == 1 && item['daType']=='02'\" type=\"number\" placeholder=\"请输入\" pInputText [(ngModel)]=\"item['saveValue']\">\r\n                <!-- <p-calendar *ngIf=\"item['valueList'].length == 1 && item['daType']=='03'\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" [(ngModel)]=\"item['saveValue']\"></p-calendar> -->\r\n                <p-dropdown *ngIf=\"item['valueList'].length > 1\" [options]=\"item['valueList']\" [(ngModel)]=\"item['saveValue']\"></p-dropdown>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column footer=\"\">\r\n              <ng-template pTemplate=\"footer\">\r\n                <button type=\"button\" pButton label=\"保存\" (click)=\"updateAddDelete()\"></button>\r\n              </ng-template>\r\n            </p-column>\r\n          </p-row>\r\n        </p-footerColumnGroup>\r\n\r\n\r\n\r\n      </p-dataTable>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12\" *ngIf=\"addFlag\">\r\n      <ul>\r\n        <li *ngFor=\"let item of tableList\">\r\n          <input *ngIf=\"!fillValue\" type=\"text\" placeholder=\"请输入\" pInputText [(ngModel)]=\"item['saveValue']\">\r\n          <p-dropdown *ngIf=\"fillValue\" [options]=\"fillValue\" [(ngModel)]=\"item['saveValue']\"></p-dropdown>\r\n        </li>\r\n        <li>\r\n          <button type=\"button\" pButton label=\"保存\" (click)=\"updateAddDelete()\"></button>\r\n        </li>\r\n      </ul>\r\n\r\n    </div> -->\r\n    <p-paginator first={{first}} rows=\"{{templateInstanceBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[5,10,20,30]\"\r\n      (onPageChange)=\"paginate($event)\"></p-paginator>\r\n  </div>\r\n\r\n</div>\r\n<p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/template-instance-query/template-instance-query.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/template-instance-query/template-instance-query.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label {\n  text-align: right; }\n\n.btn {\n  text-align: center;\n  position: relative; }\n\n.btn button {\n    margin: 0 50px; }\n\n.btn .button {\n    position: absolute;\n    right: 0;\n    background: #f6b400; }\n\n.btn .button1 {\n    right: 100px; }\n\n.btn .button2 {\n    right: 200px; }\n\n.btn .button3 {\n    right: 300px; }\n\n.tableContent {\n  text-align: center; }\n\nul {\n  padding: 0;\n  margin-top: 0;\n  text-align: right; }\n\nul li {\n    text-align: center;\n    list-style: none;\n    width: 11%;\n    display: inline-block; }\n\nul li input {\n      min-width: 0;\n      width: 95%; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  min-width: 0 !important;\n  width: 30% !important;\n  min-height: 250px !important;\n  height: auto !important; }\n\n:host /deep/ body .ui-datatable .ui-datatable-data tr td {\n  border: 1px solid !important; }\n\n:host/deep/ .tableContent .ui-datatable-scrollable-footer {\n  overflow: inherit; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2NvbW1vbi9iYXNlLW1hbmFnZS9idXNpbmVzcy1jZW50ZXItbWFuYWdlL3RlbXBsYXRlLWluc3RhbmNlLXF1ZXJ5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGNvbW1vblxcYmFzZS1tYW5hZ2VcXGJ1c2luZXNzLWNlbnRlci1tYW5hZ2VcXHRlbXBsYXRlLWluc3RhbmNlLXF1ZXJ5XFx0ZW1wbGF0ZS1pbnN0YW5jZS1xdWVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFGdEI7SUFJUSxjQUFjLEVBQUE7O0FBSnRCO0lBT1Esa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixtQkFBbUIsRUFBQTs7QUFUM0I7SUFZUSxZQUFZLEVBQUE7O0FBWnBCO0lBZVEsWUFBWSxFQUFBOztBQWZwQjtJQWtCUSxZQUFZLEVBQUE7O0FBR3BCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksVUFBVTtFQUNWLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFIckI7SUFLUSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixxQkFBcUIsRUFBQTs7QUFSN0I7TUFVWSxZQUFZO01BQ1osVUFBVSxFQUFBOztBQUl0QjtFQUNJLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLHVCQUNKLEVBQUE7O0FBQ0E7RUFDSSw0QkFBNEIsRUFBQTs7QUFFaEM7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jb21tb24vYmFzZS1tYW5hZ2UvYnVzaW5lc3MtY2VudGVyLW1hbmFnZS90ZW1wbGF0ZS1pbnN0YW5jZS1xdWVyeS90ZW1wbGF0ZS1pbnN0YW5jZS1xdWVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBidXR0b257XHJcbiAgICAgICAgbWFyZ2luOiAwIDUwcHg7IFxyXG4gICAgfVxyXG4gICAgLmJ1dHRvbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y2YjQwMDtcclxuICAgIH1cclxuICAgIC5idXR0b24xe1xyXG4gICAgICAgIHJpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICAgIC5idXR0b24ye1xyXG4gICAgICAgIHJpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICAgIC5idXR0b24ze1xyXG4gICAgICAgIHJpZ2h0OiAzMDBweDtcclxuICAgIH1cclxufVxyXG4udGFibGVDb250ZW50e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnVsIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsaXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICB3aWR0aDogMTElO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvd3tcclxuICAgIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogMjUwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50XHJcbn1cclxuOmhvc3QgL2RlZXAvIGJvZHkgLnVpLWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLWRhdGEgdHIgdGR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0L2RlZXAvIC50YWJsZUNvbnRlbnQgLnVpLWRhdGF0YWJsZS1zY3JvbGxhYmxlLWZvb3RlcntcclxuICAgIG92ZXJmbG93OiBpbmhlcml0O1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUtc2Nyb2xsYWJsZS1mb290ZXItYm94e1xyXG4gICAgLy8gb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/template-instance-query/template-instance-query.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/template-instance-query/template-instance-query.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: TemplateInstanceQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstanceQueryComponent", function() { return TemplateInstanceQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_template_instance_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/template-instance.bean */ "./src/app/pages/tzb/common/base-manage/business-center-manage/template-instance-query/bean/template-instance.bean.ts");
/* harmony import */ var _http_business_center_manage_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http/business-center-manage.http.service */ "./src/app/pages/tzb/common/base-manage/business-center-manage/http/business-center-manage.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _http_common_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_pages_tzb_workflow_activiti_work_flow_common_constant_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/workflow/activiti-work-flow/common/constant/config */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TemplateInstanceQueryComponent = /** @class */ (function () {
    function TemplateInstanceQueryComponent(httpService, commfunc, confirmationService, CommonHttpService) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.confirmationService = confirmationService;
        this.CommonHttpService = CommonHttpService;
        this.isdeletall = true;
        this.ch = app_pages_tzb_workflow_activiti_work_flow_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["CALENDAR_CN"]; //创建日期的语言
        this.inpFlag = true;
        this.templateInstanceBean = new _bean_template_instance_bean__WEBPACK_IMPORTED_MODULE_1__["TemplateInstanceBean"]();
        this.first = 0;
        this.addFlag = false;
        this.loadDisplay = false;
        this.files = [];
        this.abledFlag = true;
        this.doFlag = ''; //新增、修改、删除 标识
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_4__["TZB_COMMON_DOWNLOAD"];
        this.update_item = {};
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.dimensionMaintValueList = []; //利率维度值
        this.postIdValueList = []; //岗位
        this.arrTemp = [];
        this.allData = []; //存储查询回来的数据
        this.codeValues();
        this.templateInstanceBean.pageNum = 1;
        this.templateInstanceBean.pageSize = 10;
        this.templateTitle = '模板实例管理';
    }
    TemplateInstanceQueryComponent.prototype.ngOnInit = function () {
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
        this.idQuery('');
        this.queryDimensionMaintValueService(); //利率维度值查询
        this.queryPostById(); //岗位查询
    };
    //码值
    TemplateInstanceQueryComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    TemplateInstanceQueryComponent.prototype.inpquery = function (event) {
        var _this = this;
        if (this.inpFlag) {
            this.inpFlag = false;
            setTimeout(function () {
                _this.inpFlag = true;
                var dtId = event.target.value;
                _this.idQuery(dtId);
            }, 1000);
        }
    };
    //模板编号模糊查询
    TemplateInstanceQueryComponent.prototype.idQuery = function (dtId) {
        var _this = this;
        var param = {
            dtId: dtId,
            pageSize: 30,
        };
        this.httpService.queryDocumentTemplates(param).subscribe(function (data) {
            if (data.returnCode.code == 'success' && data.result.templateInfoList) {
                _this.templateId = _this.commfunc.listToLabelvalue(data.result.templateInfoList, 'dtId', 'dtName');
            }
        });
    };
    //模板变更处理
    TemplateInstanceQueryComponent.prototype.doChose = function (event) {
        this.templateInstanceBean.dtName = this.templateInstanceBean.dtId;
    };
    //模板编号查询
    TemplateInstanceQueryComponent.prototype.query = function () {
        var _this = this;
        var dtId = '';
        if (this.templateId) {
            for (var i = 0; i < this.templateId.length; i++) {
                if (this.templateId[i].value == this.templateInstanceBean.dtId)
                    dtId = this.templateId[i].label;
            }
        }
        else {
            return;
        }
        this.httpService.queryDocumentTemplateDetails({ dtId: dtId }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dtId = dtId;
                _this.searchList = _this.toDropdown(data.result.searchList);
                _this.arrTemp = [];
                data.result.tableList.forEach(function (element, i) {
                    if (element.daField == 'preferentialAccumulationProportion' || element.daField == 'accumulationProportion' || element.daField == 'currentAccumulationProportion') { //积数比例和积分数比例和当前积数比例
                        data.result.tableList[i].fileList = _this.dimensionMaintValueList;
                    }
                    if (element.daField == 'postId') { //岗位
                        var arr_1 = [];
                        _this.postIdValueList.forEach(function (element) {
                            arr_1.push({ fieldValue: element.label, fieldKey: element.value });
                        });
                        data.result.tableList[i].fileList = arr_1;
                    }
                    if (element.daType == '03') { //日期型
                        _this.arrTemp.push(element.daField);
                    }
                });
                _this.tableList = _this.toDropdown(data.result.tableList);
                //console.log(this.tableList)
                _this.templateInfo = data.result.templateInfo;
                _this.templateTitle = _this.templateInfo['dtName'];
                _this.abledFlag = false;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: '查询成功' });
                _this.manageQuery();
                var user = JSON.parse(_this.commfunc.getSessionData('commonHeader')).userId;
                var path = "BusinessCenter/TempInstance/" + _this.templateInfo['dtId'] + "/" + _this.commfunc.transDate(new Date()) + "/" + user;
                _this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_4__["TZB_COMMON_UPLOAD"] + "?path=" + path;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.code });
            }
        });
    };
    TemplateInstanceQueryComponent.prototype.toDropdown = function (list) {
        //处理下拉框的值
        list.forEach(function (item) {
            if (item['fileList']) {
                var arr_2 = [];
                item['fileList'].forEach(function (itemChild) {
                    var obj = {};
                    obj['label'] = itemChild.fieldValue;
                    obj['value'] = itemChild.fieldKey;
                    arr_2.push(obj);
                });
                item['valueList'] = JSON.parse(JSON.stringify(arr_2));
                item['valueList'].unshift({ label: "请选择", value: '' });
            }
        });
        return list;
    };
    //利率维度值查询
    TemplateInstanceQueryComponent.prototype.queryDimensionMaintValueService = function () {
        var _this = this;
        var params = {
            dmsnlChiNm: "积数比",
            pageNum: 1,
            pageSize: 10000
        };
        this.httpService.queryDimensionMaintValueService(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dimensionMaintValueList = [];
                if (data.resultList && data.resultList.legnth != 0) {
                    data.resultList.forEach(function (element) {
                        _this.dimensionMaintValueList.push({ fieldKey: element.dmsnlValue, fieldValue: element.dmslValDesc });
                    });
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
    //重置
    TemplateInstanceQueryComponent.prototype.tempIdReset = function () {
        this.templateInstanceBean = new _bean_template_instance_bean__WEBPACK_IMPORTED_MODULE_1__["TemplateInstanceBean"]();
    };
    //搜索下拉框取值
    TemplateInstanceQueryComponent.prototype.searchInfo = function (event, data) {
        data = event.value;
        // this.searchList.forEach((element, i) => {
        //   if (element.daType == '03') {
        //     this.searchList[i].saveValue = new Date(this.tableList[i].saveValue).getTime();
        //   }
        // });
    };
    //管理查询
    TemplateInstanceQueryComponent.prototype.manageQuery = function () {
        var _this = this;
        this.doFlag = '';
        var searchInfoMap = {};
        this.searchList.forEach(function (item) {
            if (item['value']) {
                searchInfoMap[item.daAnotherField] = item['value'];
            }
        });
        var param = {
            dtId: this.templateInfo['dtId'],
            entityName: this.templateInfo['entityName'],
            searchInfoMap: searchInfoMap,
            pageNum: this.templateInstanceBean.pageNum,
            pageSize: this.templateInstanceBean.pageSize
        };
        this.httpService.queryPermissionInfoList(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.result.permissionsInfoList) {
                    _this.total = data.result.total;
                    _this.tableData = data.result.permissionsInfoList;
                    if (_this.tableData.length != 0) {
                        _this.tableData.forEach(function (element, i) {
                            if (element.postId && element.postId != '') {
                                _this.tableData[i].valueList = _this.postIdValueList;
                            }
                            if (_this.arrTemp && _this.arrTemp.length != 0) {
                                _this.arrTemp.forEach(function (element2, ind) {
                                    _this.tableData[i][element2] = _this.commfunc.transDateN(new Date(_this.tableData[i][element2]));
                                });
                            }
                        });
                    }
                    _this.tableData = lodash__WEBPACK_IMPORTED_MODULE_7__["clone"](_this.tableData);
                    _this.saveData(_this.tableData);
                }
                else {
                    _this.tableData = [];
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '查询失败' });
            }
        });
    };
    //查询岗位
    TemplateInstanceQueryComponent.prototype.queryPostById = function () {
        var _this = this;
        var params = {
            pageNum: 1,
            pageSize: 10000
        };
        this.httpService.queryPostById(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.postIdValueList = [];
                if (data.postInfoList && data.postInfoList.legnth != 0) {
                    data.postInfoList.forEach(function (element) {
                        _this.postIdValueList.push({ value: element.postId, label: element.postName });
                    });
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
    TemplateInstanceQueryComponent.prototype.toParam = function (list, value) {
        var param;
        if (this.doFlag == '1' || this.doFlag == '2') {
            param = { seqNo: this.index };
        }
        else {
            param = {};
        }
        list.forEach(function (item) {
            // if (item[value]) {
            param[item.daAnotherField] = item[value];
            // }
        });
        return param;
    };
    //管理重置
    TemplateInstanceQueryComponent.prototype.manageReset = function () {
        this.searchList.forEach(function (item) {
            item.value = null;
        });
    };
    //导入
    TemplateInstanceQueryComponent.prototype.import = function () {
        this.files = [];
        this.loadDisplay = true;
    };
    TemplateInstanceQueryComponent.prototype.load = function (event) {
        var _this = this;
        var _a;
        (_a = this.files).push.apply(_a, event.files);
        if (event.xhr.response) {
            this.fileList = JSON.parse(event.xhr.response);
            this.fileList.forEach(function (item) {
                item['entityName'] = _this.templateInfo['entityName'];
            });
            if (this.fileList.hasOwnProperty('errorMsg')) {
                this.msgs = [{ severity: 'error', summary: '提示', detail: this.fileList.errorMsg }];
            }
            this.update_item = {
                fileName: JSON.parse(event.xhr.response)[0].fileName,
                filePath: JSON.parse(event.xhr.response)[0].filePath,
                operateType: '3'
            };
            this.updateAddDelete();
            // this.httpService.fileReaderAndInsert(params).subscribe(data => {
            //   if (data.returnCode.code == 'success') {
            //     this.msgs = [{ severity: 'success', summary: '提示', detail: '上传成功！' }];
            //   }
            // })
        }
        else {
            this.msgs = [{ severity: 'error', summary: '提示', detail: '获取服务器列表失败！' }];
        }
    };
    //新增
    TemplateInstanceQueryComponent.prototype.add = function () {
        this.addFlag = true;
        this.doFlag = '0';
    };
    //删除
    TemplateInstanceQueryComponent.prototype.delete = function (param) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                // 条件
                _this.index = param['seqNo'];
                _this.doFlag = '2';
                // this.save();
                if (param.valueList) {
                    delete param.valueList;
                }
                _this.update_item = {
                    fromOperateRecode: JSON.stringify(param),
                    toOperateRecode: '',
                    operateType: '2'
                };
                _this.updateAddDelete(param, 'dele');
            }
        });
    };
    //分页
    TemplateInstanceQueryComponent.prototype.paginate = function (event) {
        var rows = event.rows;
        //每页显示的条数
        this.templateInstanceBean.pageSize = rows;
        //当前页
        var currentPage = event.page + 1;
        this.templateInstanceBean.pageNum = currentPage;
        this.first = event.rows * event.page;
        //调用查询的方法
        this.manageQuery();
    };
    //下载
    TemplateInstanceQueryComponent.prototype.download = function () {
        var _this = this;
        var param = {
            dtId: this.dtId,
            outCount: ''
        };
        this.httpService.downLodeDocumentTemplate(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                window.open(_this.DOWNLOAD + "?fileName=" + encodeURI(data.result.fileName) + "&fileUrl=" + data.result.fileUrl, "_self");
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //修改
    TemplateInstanceQueryComponent.prototype.update = function (item) {
        var temp = JSON.stringify(item);
        this.fromOperateRecodeUpdate = temp;
        this.addFlag = true;
        this.doFlag = '1';
        this.index = item['seqNo'];
        var searchList = JSON.parse(JSON.stringify(this.tableList));
        for (var i in item) {
            for (var j = 0; j < searchList.length; j++) {
                if (i == searchList[j]['daAnotherField']) {
                    searchList[j]['saveValue'] = item[i];
                    break;
                }
            }
        }
        this.tableList = JSON.parse(JSON.stringify(searchList));
    };
    //新增修改删除
    TemplateInstanceQueryComponent.prototype.updateAddDelete = function (col, flag, all) {
        var _this = this;
        this.pmsTemplate = JSON.parse(JSON.stringify(this.code['PmsTemplate']));
        // console.log(this.tableList);
        // this.tableList.forEach((element, i) => {
        //   if (element.daType == '03') {
        //     this.tableList[i].saveValue = new Date(this.tableList[i].saveValue).getTime();
        //   }
        // });
        if (this.doFlag && this.doFlag == '0') {
            var toOperateRecode = JSON.stringify(this.toParam(this.tableList, 'saveValue'));
            this.update_item = {
                toOperateRecode: toOperateRecode,
                fromOperateRecode: '',
                operateType: '0'
            };
        }
        else if (this.doFlag == '1') {
            var toOperateRecode = JSON.stringify(this.toParam(this.tableList, 'saveValue'));
            this.update_item = {
                toOperateRecode: toOperateRecode,
                fromOperateRecode: this.fromOperateRecodeUpdate,
                operateType: '1'
            };
        }
        var item_data = this.update_item;
        var modifyInfoMap = {};
        var flagValue = '';
        if (flag == 'dele') {
            if (col.valueList) {
                delete col.valueList;
            }
            modifyInfoMap = JSON.parse(JSON.stringify(col));
            delete modifyInfoMap['createdStamp'];
            delete modifyInfoMap['createdTxStamp'];
            delete modifyInfoMap['lastUpdatedStamp'];
            delete modifyInfoMap['lastUpdatedTxStamp'];
        }
        else if (flag == 'deletAll') {
            this.doFlag = '2';
            if (all) {
                modifyInfoMap['deleteFlag'] = '2';
                modifyInfoMap['deleteList'] = [];
            }
            else {
                modifyInfoMap['deleteFlag'] = '1';
                modifyInfoMap['deleteList'] = this.selectList;
                modifyInfoMap['deleteApprovalList'] = this.matchData(this.allData, this.selectList);
                modifyInfoMap['tableList'] = this.tableList;
            }
        }
        else {
            modifyInfoMap = this.toParam(this.tableList, 'saveValue');
        }
        var dtIdValue = this.templateInfo['dtId'];
        var flag1 = this.checkValueData(dtIdValue, this.pmsTemplate);
        if (flag1) {
            flagValue = 'SAVE';
        }
        else {
            flagValue = 'SUBMIT';
        }
        var param = {
            doFlag: this.doFlag,
            dtId: this.templateInfo['dtId'],
            entityName: this.templateInfo['entityName'],
            modifyInfoMap: modifyInfoMap,
            externalIdType: 'PERMISSION',
            fromOperateRecode: item_data.fromOperateRecode || '',
            toOperateRecode: item_data.toOperateRecode || '',
            flag: flagValue,
            tellerId: this.userId,
            tellerName: this.userName,
            orgId: this.orgId,
            orgName: this.orgName,
            operateType: item_data.operateType || '2',
            fileName: item_data.fileName || '',
            filePath: item_data.filePath || '',
        };
        this.httpService.createOrUpdatePermissionChangeReq(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                if (param.operateType == '0') {
                    _this.messageMsg = '新增提交审批成功';
                    _this.addFlag = false;
                }
                else if (param.operateType == '1') {
                    _this.messageMsg = '修改提交审批成功';
                    _this.addFlag = false;
                }
                else if (param.operateType == '2') {
                    _this.messageMsg = '删除提交审批成功';
                }
                else if (param.operateType == '3') {
                    _this.messageMsg = '导入提交审批成功';
                }
                _this.manageQuery();
                _this.msgs.push({ severity: 'success', summary: '提示', detail: _this.messageMsg });
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
    TemplateInstanceQueryComponent.prototype.checkValueData = function (dtIdValue, pmsTemplate) {
        var flag = false;
        if (pmsTemplate.length > 0) {
            for (var j = 0; j < pmsTemplate.length; j++) {
                if (dtIdValue == pmsTemplate[j]['value']) {
                    flag = true;
                    return flag;
                }
            }
        }
        return flag;
    };
    //匹配选中的数据
    TemplateInstanceQueryComponent.prototype.matchData = function (list, childList) {
        var newList = [];
        childList.forEach(function (item) {
            for (var i = 0; i < list.length; i++) {
                if (item == list[i].seqNo) {
                    newList.push(list[i]);
                    break;
                }
            }
        });
        return newList;
    };
    //存储查询回来的数据
    TemplateInstanceQueryComponent.prototype.saveData = function (list) {
        var _this = this;
        list.forEach(function (item) {
            var flag = true;
            for (var i = 0; i < _this.allData.length; i++) {
                if (item.seqNo == _this.allData[i].seqNo) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                _this.allData.push(item);
            }
        });
    };
    //清除所有
    TemplateInstanceQueryComponent.prototype.removeAll = function () {
        this.updateAddDelete('', 'deletAll', 'all');
    };
    TemplateInstanceQueryComponent.prototype.select = function (event, item) {
        console.log(this.selectList);
        if (this.selectList && this.selectList.length > 0) {
            this.isdeletall = false;
        }
        else {
            this.isdeletall = true;
        }
    };
    TemplateInstanceQueryComponent.prototype.remove = function () {
        if (!(this.selectList && this.selectList.length > 0)) {
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请至少勾选一个' }];
            return;
        }
        this.updateAddDelete('', 'deletAll', '');
    };
    TemplateInstanceQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-template-instance-query',
            template: __webpack_require__(/*! ./template-instance-query.component.html */ "./src/app/pages/tzb/common/base-manage/business-center-manage/template-instance-query/template-instance-query.component.html"),
            styles: [__webpack_require__(/*! ./template-instance-query.component.scss */ "./src/app/pages/tzb/common/base-manage/business-center-manage/template-instance-query/template-instance-query.component.scss")],
            providers: [_http_common_http_service__WEBPACK_IMPORTED_MODULE_6__["CommonHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_business_center_manage_http_service__WEBPACK_IMPORTED_MODULE_2__["BusinessCenterManageHttp"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["ConfirmationService"],
            _http_common_http_service__WEBPACK_IMPORTED_MODULE_6__["CommonHttpService"]])
    ], TemplateInstanceQueryComponent);
    return TemplateInstanceQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/template-instance-query/template-instance-query.module.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/template-instance-query/template-instance-query.module.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: TemplateInstanceQueryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstanceQueryModule", function() { return TemplateInstanceQueryModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _template_instance_query_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-instance-query.component */ "./src/app/pages/tzb/common/base-manage/business-center-manage/template-instance-query/template-instance-query.component.ts");
/* harmony import */ var _template_instance_query_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template-instance-query.routing */ "./src/app/pages/tzb/common/base-manage/business-center-manage/template-instance-query/template-instance-query.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TemplateInstanceQueryModule = /** @class */ (function () {
    function TemplateInstanceQueryModule() {
    }
    TemplateInstanceQueryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _template_instance_query_routing__WEBPACK_IMPORTED_MODULE_5__["TemplateInstanceQueryRouting"]
            ],
            declarations: [
                _template_instance_query_component__WEBPACK_IMPORTED_MODULE_4__["TemplateInstanceQueryComponent"]
            ],
            providers: []
        })
    ], TemplateInstanceQueryModule);
    return TemplateInstanceQueryModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/common/base-manage/business-center-manage/template-instance-query/template-instance-query.routing.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/common/base-manage/business-center-manage/template-instance-query/template-instance-query.routing.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: TemplateInstanceQueryRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateInstanceQueryRouting", function() { return TemplateInstanceQueryRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _template_instance_query_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-instance-query.component */ "./src/app/pages/tzb/common/base-manage/business-center-manage/template-instance-query/template-instance-query.component.ts");


var routes = [
    {
        path: '', component: _template_instance_query_component__WEBPACK_IMPORTED_MODULE_1__["TemplateInstanceQueryComponent"],
        children: []
    },
];
var TemplateInstanceQueryRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=template-instance-query-template-instance-query-module.js.map