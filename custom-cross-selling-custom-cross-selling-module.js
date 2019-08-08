(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-cross-selling-custom-cross-selling-module"],{

/***/ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-list/bean/custom-cross-selling-list.bean.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-list/bean/custom-cross-selling-list.bean.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: CrossSellingListQueryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossSellingListQueryBean", function() { return CrossSellingListQueryBean; });
var CrossSellingListQueryBean = /** @class */ (function () {
    function CrossSellingListQueryBean() {
    }
    return CrossSellingListQueryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-list/custom-cross-selling-list.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-list/custom-cross-selling-list.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\r\n<div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12 query_style\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 right\">批次号:</div>\r\n            <div class=\"ui-g-2\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"crossSellingListQueryBean.batch_id\" />\r\n            </div>\r\n            <div class=\"ui-g-2 right\">创建时间:</div>\r\n            <div class=\"ui-g-2\">\r\n                <p-calendar [showIcon]=\"true\" [(ngModel)]=\"startDate\" [maxDate]=\"endDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showDataStart()\" (onBlur)=\"showDataStart()\"></p-calendar>\r\n                <span>至</span>\r\n                <p-calendar [showIcon]=\"true\" [(ngModel)]=\"endDate\" [minDate]=\"startDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showDataEnd()\" (onBlur)=\"showDataEnd()\"></p-calendar>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">数据来源:</div>\r\n            <div class=\"ui-g-2\">\r\n                <p-dropdown [options]=\"dataSourceOptions\" [(ngModel)]=\"crossSellingListQueryBean.data_source\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 right\">创建人:</div>\r\n            <div class=\"ui-g-2\">\r\n                <div class=\"queryinputbtn\">\r\n                    <input class=\"queryinputOrg\" type=\"text\" placeholder=\"请选择\" pInputText disabled [(ngModel)]=\"crossSellingListQueryBean.created_user_name\">\r\n                    <div (click)=\"perShow()\" class=\"clickspan\">\r\n                        <a class=\"a-hand\">\r\n                            <span>...</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">清单状态:</div>\r\n            <div class=\"ui-g-2\">\r\n                <p-dropdown [options]=\"listOptions\" [(ngModel)]=\"crossSellingListQueryBean.source_stat\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"query()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n    <!-- <div style=\"float:right;padding-right:1em;\">\r\n        <span class=\"icoColor\" (click)=\"chooseBtn()\">选择字段</span>\r\n    </div> -->\r\n    <div class=\"ui-g-12 table base-table\">\r\n        <p-dataTable [value]=\"list_Table\" scrollable=\"true\" [emptyMessage]='tabMesg'>\r\n            <!-- <p-column [style]=\"{'width':'80px'}\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <p-checkbox name=\"groupname\" label=\"选择\" [(ngModel)]=\"checkAll\" binary=\"true\" (click)=\"checkAllClick()\"></p-checkbox>\r\n                </ng-template>\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox [(ngModel)]=\"col.checkBox\" (onChange)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field={{list.value}} *ngFor=\"let list of tableData\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <div (click)=\"sort(list.sort)\">{{list.label}}</div>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" *ngIf=\"list.value=='dataSource'\" let-item=\"rowData\">\r\n                    <span>{{item.dataSource|codeValuePie:dataSourceOptions}}</span>\r\n                </ng-template>\r\n                <ng-template pTemplate=\"body\" *ngIf=\"list.value=='sourceStat'\" let-item=\"rowData\">\r\n                    <span>{{item.sourceStat|codeValuePie:listOptions}}</span>\r\n                </ng-template>\r\n            </p-column> -->\r\n            <p-column field=\"batchId\" header=\"批次编号\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"productNo\" header=\"推荐产品编号\" [style]=\"{'width':'300px'}\"></p-column>\r\n            <p-column field=\"productName\" header=\"推荐产品名称\" [style]=\"{'width':'300px'}\"></p-column>\r\n            <p-column field=\"dataSource\" header=\"数据来源\" [style]=\"{'width':'100px'}\">\r\n                <ng-template pTemplate=\"body\" let-item=\"rowData\">\r\n                    <span>{{item.dataSource|codeValuePie:dataSourceOptions}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"sourceExp\" header=\"来源说明\" [style]=\"{'width':'150px'}\">\r\n                <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n                    <span class=\"groupNumStyle\" (click)=\"toGroupView(col)\" style=\"cursor:pointer;\"  *ngIf=\"col.dataSource == '02'|| col.dataSource == '03'\">{{col.sourceExp}}</span>\r\n                    <span *ngIf=\"col.dataSource == '01'\">{{col.sourceExp}}</span>\r\n                  </ng-template>\r\n            </p-column>\r\n            <p-column field=\"custTotal\" header=\"客户总数\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"pushCustTotal\" header=\"推送客户数量\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"pushEffectiveDate\" header=\"推送有效期\" [style]=\"{'width':'110px'}\"></p-column>\r\n            <p-column field=\"dtCreatedate\" header=\"创建日期\" [style]=\"{'width':'110px'}\"></p-column>\r\n            <p-column field=\"createdUserId\" header=\"创建人工号\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"createdUserName\" header=\"创建人名称\" [style]=\"{'width':'120px'}\"></p-column>\r\n            <p-column field=\"createdOrgId\" header=\"创建机构号\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"createdOrgName\" header=\"创建机构名称\" [style]=\"{'width':'160px'}\"></p-column>\r\n            <p-column field=\"sourceStat\" header=\"清单状态\" [style]=\"{'width':'110px'}\">\r\n                <ng-template pTemplate=\"body\" let-item=\"rowData\">\r\n                    <span>{{item.sourceStat|codeValuePie:listOptions}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"marketingCampaignId\" header=\"营销活动编号\" [style]=\"{'width':'110px'}\"></p-column>\r\n            <p-column header=\"操作\" [style]=\"{'width':'80px'}\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <div class=\"table-button\">\r\n                        <span class=\"tabelDetailIco\" (click)=\"toDetail(col)\">详情</span>\r\n                        <!-- <span *ngIf=\"col.sourceStat == '02'\" class=\"tabelDetailSetIco\">详情</span> -->\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows={{pageSize}} totalRecords={{total}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<!-- <p-dialog [(visible)]=\"addPage\" modal=\"true\" width=\"1200\" height=\"600\">\r\n    <p-header>\r\n        {{addHeader}}\r\n    </p-header>\r\n    <div class=\"ui-g-12\">\r\n        <p-checkbox class=\"ui-g-12\" binary=\"true\" label=\"全选\" (click)=\"checkAlls()\" [(ngModel)]=\"isAll\"></p-checkbox>\r\n        <p-checkbox class=\"ui-g-4\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of arrList\" [(ngModel)]=\"item.isCheck\" (click)=\"doSelect(item)\"></p-checkbox>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"save()\"></button>\r\n    </div>\r\n</p-dialog> -->\r\n<p-dialog class=\"gundam-display\" *ngIf=\"orgTreeDisplay2\" [(visible)]=\"orgTreeDisplay2\" modal=\"modal\" [responsive]=\"true\"\r\n    [positionTop]=10 (onHide)=\"onHideClose()\">\r\n    <p-header>创建人</p-header>\r\n    <!-- <org-mutil-all-tree-component (selectAllValue)=\"treeCall2($event)\"></org-mutil-all-tree-component> -->\r\n    <app-query-user-list (outValue)=\"perInfor($event)\" [in-value]=\"queryUserInValue\"></app-query-user-list>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-list/custom-cross-selling-list.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-list/custom-cross-selling-list.component.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table,\n.btn {\n  text-align: center; }\n\n.right {\n  text-align: right;\n  width: 14%; }\n\n.query_style .ui-g-12 {\n  padding: 0; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-calendar {\n    min-width: 76px !important;\n    width: 43% !important; } }\n\n@media screen and (min-width: 1280px) {\n  :host/deep/ .ui-calendar {\n    width: 45%;\n    min-width: 128px; } }\n\n.queryinputbtn {\n  float: left;\n  display: flex;\n  width: 100%; }\n\n.queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n\n.queryinputbtn .clickspan {\n    width: 14%;\n    height: 23px;\n    cursor: pointer; }\n\n.groupNumStyle {\n  color: #19b0c8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vY3VzdG9tLWNyb3NzLXNlbGxpbmcvY3VzdG9tLWNyb3NzLXNlbGxpbmctbGlzdC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1pbmZvcm1hdGlvblxcY3VzdG9tLWNyb3NzLXNlbGxpbmdcXGN1c3RvbS1jcm9zcy1zZWxsaW5nLWxpc3RcXGN1c3RvbS1jcm9zcy1zZWxsaW5nLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCO0VBQ2pCLFVBQVUsRUFBQTs7QUFHZDtFQUVRLFVBQVUsRUFBQTs7QUFJbEI7RUFDSztJQUNHLDBCQUEwQjtJQUMxQixxQkFBcUIsRUFBQSxFQUN4Qjs7QUFHTDtFQUNLO0lBQ0csVUFBVTtJQUNWLGdCQUFnQixFQUFBLEVBQ25COztBQUdMO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBSGY7SUFLUSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQiwwQkFBMEIsRUFBQTs7QUFSbEM7SUFXUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWUsRUFBQTs7QUFHdkI7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1pbmZvcm1hdGlvbi9jdXN0b20tY3Jvc3Mtc2VsbGluZy9jdXN0b20tY3Jvc3Mtc2VsbGluZy1saXN0L2N1c3RvbS1jcm9zcy1zZWxsaW5nLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUsXHJcbi5idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTQlO1xyXG59XHJcblxyXG4ucXVlcnlfc3R5bGUge1xyXG4gICAgLnVpLWctMTIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDc2cHggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogNDMlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFyIHtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTI4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5xdWVyeWlucHV0YnRuIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLnF1ZXJ5aW5wdXRPcmcge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcclxuICAgICAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2xpY2tzcGFuIHtcclxuICAgICAgICB3aWR0aDogMTQlO1xyXG4gICAgICAgIGhlaWdodDogMjNweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuLmdyb3VwTnVtU3R5bGUge1xyXG4gICAgY29sb3I6ICMxOWIwYzg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-list/custom-cross-selling-list.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-list/custom-cross-selling-list.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: CustomCrossSellingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCrossSellingListComponent", function() { return CustomCrossSellingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _bean_custom_cross_selling_list_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/custom-cross-selling-list.bean */ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-list/bean/custom-cross-selling-list.bean.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomCrossSellingListComponent = /** @class */ (function () {
    // tableData: any = [
    //     {
    //         label: '批次编号',
    //         value: 'batchId',
    //         isCheck: false,
    //         sort: 'batchId',
    //         num: '1'
    //     },
    //     {
    //         label: '推荐产品编号',
    //         value: 'productNo',
    //         isCheck: false,
    //         sort: 'productNo',
    //         num: '2'
    //     },
    //     {
    //         label: '推荐产品名称',
    //         value: 'productName',//对应字段名
    //         isCheck: false,
    //         sort: 'productName',
    //         num: '3'
    //     },
    //     {
    //         label: '数据来源',
    //         value: 'dataSource',
    //         isCheck: false,
    //         sort: 'dataSource',
    //         num: '4'
    //     },
    //     {
    //         label: '来源说明',
    //         value: 'sourceExp',
    //         sort: 'sourceExp',
    //         isCheck: false,
    //         num: '5'
    //     },
    //     {
    //         label: '客户总数',
    //         value: 'custTotal',
    //         isCheck: false,
    //         sort: 'custTotal',
    //         num: '6'
    //     },
    //     {
    //         label: '推送客户数量',
    //         value: 'pushCustTotal',
    //         isCheck: false,
    //         sort: 'pushCustTotal',
    //         num: '7'
    //     },
    //     {
    //         label: '推送有效期',
    //         value: 'pushEffectiveDate',
    //         isCheck: false,
    //         sort: 'pushEffectiveDate',
    //         num: '8'
    //     },
    //     {
    //         label: '创建日期',
    //         value: 'dtCreatedate',
    //         isCheck: false,
    //         sort: 'dtCreatedate',
    //         num: '9'
    //     },
    //     {
    //         label: '创建人工号',
    //         value: 'createdUserId',
    //         isCheck: false,
    //         sort: 'createdUserId',
    //         num: '10'
    //     },
    //     {
    //         label: '创建人名称',
    //         value: 'createdUserName',
    //         sort: 'createdUserName',
    //         isCheck: false,
    //         num: '11'
    //     },
    //     {
    //         label: '创建机构号',
    //         value: 'createdOrgId',
    //         isCheck: false,
    //         sort: 'createdOrgId',
    //         num: '12'
    //     },
    //     {
    //         label: '创建机构名称',
    //         value: 'createdOrgName',
    //         isCheck: false,
    //         sort: 'createdOrgName',
    //         num: '13'
    //     },
    //     {
    //         label: '清单状态',
    //         value: 'sourceStat',
    //         isCheck: false,
    //         sort: 'sourceStat',
    //         num: '14'
    //     },
    //     {
    //         label: '营销活动编号',
    //         value: 'marketingCampaignId',
    //         sort: 'marketingCampaignId',
    //         isCheck: false,
    //         num: '15'
    //     },
    // ];
    // arrList: any = [
    //     {
    //         label: '批次编号',
    //         value: 'batchId',
    //         isCheck: false,
    //         sort: 'batchId',
    //         num: '1'
    //     },
    //     {
    //         label: '推荐产品编号',
    //         value: 'productNo',
    //         isCheck: false,
    //         sort: 'productNo',
    //         num: '2'
    //     },
    //     {
    //         label: '推荐产品名称',
    //         value: 'productName',//对应字段名
    //         isCheck: false,
    //         sort: 'productName',
    //         num: '3'
    //     },
    //     {
    //         label: '数据来源',
    //         value: 'dataSource',
    //         isCheck: false,
    //         sort: 'dataSource',
    //         num: '4'
    //     },
    //     {
    //         label: '来源说明',
    //         value: 'sourceExp',
    //         sort: 'sourceExp',
    //         isCheck: false,
    //         num: '5'
    //     },
    //     {
    //         label: '客户总数',
    //         value: 'custTotal',
    //         isCheck: false,
    //         sort: 'custTotal',
    //         num: '6'
    //     },
    //     {
    //         label: '推送客户数量',
    //         value: 'pushCustTotal',
    //         isCheck: false,
    //         sort: 'pushCustTotal',
    //         num: '7'
    //     },
    //     {
    //         label: '推送有效期',
    //         value: 'pushEffectiveDate',
    //         isCheck: false,
    //         sort: 'pushEffectiveDate',
    //         num: '8'
    //     },
    //     {
    //         label: '创建日期',
    //         value: 'dtCreatedate',
    //         isCheck: false,
    //         sort: 'dtCreatedate',
    //         num: '9'
    //     },
    //     {
    //         label: '创建人工号',
    //         value: 'createdUserId',
    //         isCheck: false,
    //         sort: 'createdUserId',
    //         num: '10'
    //     },
    //     {
    //         label: '创建人名称',
    //         value: 'createdUserName',
    //         sort: 'createdUserName',
    //         isCheck: false,
    //         num: '11'
    //     },
    //     {
    //         label: '创建机构号',
    //         value: 'createdOrgId',
    //         isCheck: false,
    //         sort: 'createdOrgId',
    //         num: '12'
    //     },
    //     {
    //         label: '创建机构名称',
    //         value: 'createdOrgName',
    //         isCheck: false,
    //         sort: 'createdOrgName',
    //         num: '13'
    //     },
    //     {
    //         label: '清单状态',
    //         value: 'sourceStat',
    //         isCheck: false,
    //         sort: 'sourceStat',
    //         num: '14'
    //     },
    //     {
    //         label: '营销活动编号',
    //         value: 'marketingCampaignId',
    //         sort: 'marketingCampaignId',
    //         isCheck: false,
    //         num: '15'
    //     },
    // ];
    function CustomCrossSellingListComponent(httpService, commfunc, route, router) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.route = route;
        this.router = router;
        this.crossSellingListQueryBean = new _bean_custom_cross_selling_list_bean__WEBPACK_IMPORTED_MODULE_4__["CrossSellingListQueryBean"]();
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_CN"];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"];
        this.msgs = [];
        this.first = 0;
        this.pageSize = 10;
        this.pageNum = 1;
        this.total = 0;
        this.orgId = '';
        this.userId = '';
        this.list_Table = [];
        this.startDate = null;
        this.endDate = null;
        this.addPage = false;
        this.personPage = false; //创建人选择
        this.listOptions = []; //清单状态
        this.dataSourceOptions = []; //数据来源
        //选择数据
        this.chooseData = [];
        this.isAll = false;
        this.checkAll = false;
        this.orgTreeDisplay2 = false;
        this.addHeader = '选择字段';
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.orgId) {
            this.orgId = this.user.orgId;
        }
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
    }
    CustomCrossSellingListComponent.prototype.ngOnInit = function () {
        // this.list_Table = [
        //     { custNo: '11' }
        // ]
        this.codeVal();
        this.listOptions = this.code['Source_stat']; //清单状态
        this.dataSourceOptions = this.code['Data_Source']; //数据来源
        this.query();
        this.queryUserInValue = this.orgId;
    };
    //码值
    CustomCrossSellingListComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CustomCrossSellingListComponent.prototype.showDataStart = function () {
        var _this = this;
        if (this.startDate && this.endDate) {
            if (this.startDate > this.endDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.startDate = null;
                });
            }
        }
    };
    CustomCrossSellingListComponent.prototype.showDataEnd = function () {
        var _this = this;
        if (this.startDate && this.endDate) {
            if (this.startDate > this.endDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.endDate = null;
                });
            }
        }
    };
    //详情
    CustomCrossSellingListComponent.prototype.toDetail = function (col) {
        var data = JSON.stringify(col);
        this.router.navigate(['pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-query', { data: data }]);
    };
    // 跳转到高级搜索
    CustomCrossSellingListComponent.prototype.toGroupView = function (col) {
        this.router.navigate(['pages/tzb/custom/custom-information/advanced-search/add-search', { sourceExp: col.sourceExp }]);
    };
    // chooseBtn() {
    //     this.addPage = true;
    // }
    //单选
    // doSelect(data) {
    //     let sb = true;
    //     if (data.isCheck) {
    //         this.tableData.push(data);
    //         this.arrList.forEach(item => {
    //             sb = item.isCheck && sb
    //         });
    //     } else {
    //         this.tableData.forEach((item, i) => {
    //             if (item.value == data.value) {
    //                 this.tableData.splice(i, 1);
    //                 return;
    //             }
    //         })
    //         sb = false;
    //     }
    //     this.tableData.sort((a, b) => {
    //         return a.num * 1 - b.num * 1
    //     })
    //     this.isAll = sb;
    // }
    //全选
    // checkAlls() {
    //     let isTrue = this.isAll;
    //     this.tableData = [];
    //     this.arrList.forEach(item => {
    //         item['isCheck'] = isTrue;
    //         if (isTrue) {
    //             this.tableData.push(item);
    //         }
    //     });
    //     this.tableData.sort((a, b) => {
    //         return a.num * 1 - b.num * 1
    //     })
    // }
    //选择字段保存
    // save() {
    //     this.addMsg();
    //     this.addPage = false;
    // }
    // addMsg() {
    //     let params = {
    //         // listShowsIdType: '1',
    //         // listShowsIdModule: 'query_03',
    //         // createOrg: this.orgID,
    //         // createdByUserLogin: this.userId,
    //         dtId: JSON.stringify(this.tableData)
    //     }
    //     this.httpService.findDocumentAttrItem(params).subscribe(data => {
    //         if (data.returnCode.code == 'success') {
    //             // console.log(data)
    //         } else {
    //             this.msgs = [];
    //             data.returnCode.message ? data.returnCode.message : '查询失败！';
    //             this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
    //         }
    //     }, err => {
    //         this.msgs = [];
    //         this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
    //     })
    // }
    //创建人选择回调
    CustomCrossSellingListComponent.prototype.perInfor = function (param) {
        this.orgTreeDisplay2 = false;
        this.crossSellingListQueryBean.created_user_id = param[0].tellerId;
        this.crossSellingListQueryBean.created_user_name = param[0].tellerName;
        document.body.style.overflow = 'auto';
    };
    // 选择创建人
    CustomCrossSellingListComponent.prototype.perShow = function () {
        this.orgTreeDisplay2 = true;
    };
    //查询
    CustomCrossSellingListComponent.prototype.query = function () {
        this.crossSellingListQueryBean.pageSize = 10;
        this.crossSellingListQueryBean.pageNum = 1;
        this.first = 0;
        this.queryBusiBatchListInfo();
    };
    CustomCrossSellingListComponent.prototype.queryBusiBatchListInfo = function () {
        var _this = this;
        var params = {
            batchId: this.crossSellingListQueryBean.batch_id,
            dtCreatedateStart: this.commfunc.transDateN(this.startDate),
            dtCreatedateEnd: this.commfunc.transDateN(this.endDate),
            dataSource: this.crossSellingListQueryBean.data_source,
            createdUserId: this.crossSellingListQueryBean.created_user_id,
            createdUserName: this.crossSellingListQueryBean.created_user_name,
            sourceStat: this.crossSellingListQueryBean.source_stat,
            pageNum: this.crossSellingListQueryBean.pageNum,
            pageSize: this.crossSellingListQueryBean.pageSize,
        };
        this.httpService.queryBusiBatchListInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.list_Table = data.busiBatchListInfo;
                _this.total = data.totalNum;
                // console.log(data)
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //重置
    CustomCrossSellingListComponent.prototype.reset = function () {
        this.crossSellingListQueryBean = new _bean_custom_cross_selling_list_bean__WEBPACK_IMPORTED_MODULE_4__["CrossSellingListQueryBean"]();
        this.startDate = null;
        this.endDate = null;
    };
    //翻页
    CustomCrossSellingListComponent.prototype.paginate = function (event) {
        this.crossSellingListQueryBean.pageSize = event.rows * 1;
        //当前页
        this.crossSellingListQueryBean.pageNum = event.page + 1;
        this.first = event.page * this.crossSellingListQueryBean.pageSize;
        this.queryBusiBatchListInfo();
    };
    CustomCrossSellingListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-cross-selling-list',
            template: __webpack_require__(/*! ./custom-cross-selling-list.component.html */ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-list/custom-cross-selling-list.component.html"),
            styles: [__webpack_require__(/*! ./custom-cross-selling-list.component.scss */ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-list/custom-cross-selling-list.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomCrossSellingListComponent);
    return CustomCrossSellingListComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-query/bean/custom-cross-selling-query.bean.ts":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-query/bean/custom-cross-selling-query.bean.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: CrossSellingQueryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossSellingQueryBean", function() { return CrossSellingQueryBean; });
var CrossSellingQueryBean = /** @class */ (function () {
    function CrossSellingQueryBean() {
    }
    return CrossSellingQueryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-query/custom-cross-selling-query.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-query/custom-cross-selling-query.component.html ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <header-title [Info]=\"'数据明细查询列表'\"></header-title>\r\n    <div class=\"ui-g-12 query_style\">\r\n        <div class=\"ui-g-12\">\r\n            <!-- <div class=\"ui-g-2 right\">批次编号:</div>\r\n            <div class=\"ui-g-2\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"crossSellingQueryBean.batch_id\" />\r\n            </div> -->\r\n            <div class=\"ui-g-2 right\">客户号:</div>\r\n            <div class=\"ui-g-2\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"crossSellingQueryBean.cust_no\" />\r\n            </div>\r\n            <div class=\"ui-g-2 right\">客户名称:</div>\r\n            <div class=\"ui-g-2\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"crossSellingQueryBean.cust_name\" />\r\n            </div>\r\n            <div class=\"ui-g-2 right\">推荐产品:</div>\r\n            <div class=\"ui-g-2\">\r\n                <p-dropdown [options]=\"productNum\" [(ngModel)]=\"crossSellingQueryBean.reco_prod_id\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 right\">主联系人:</div>\r\n            <div class=\"ui-g-2\">\r\n                <div class=\"queryinputbtn\">\r\n                    <input class=\"queryinputOrg\" type=\"text\" placeholder=\"请选择\" pInputText disabled [(ngModel)]=\"crossSellingQueryBean.principal_Linkman_Name\">\r\n                    <div (click)=\"perShow()\" class=\"clickspan\">\r\n                        <a class=\"a-hand\">\r\n                            <span>...</span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">创建时间:</div>\r\n            <div class=\"ui-g-2\">\r\n                <p-calendar [showIcon]=\"true\" [(ngModel)]=\"startDate\" [maxDate]=\"endDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showDataStart()\" (onBlur)=\"showDataStart()\"></p-calendar>\r\n                <span>至</span>\r\n                <p-calendar [showIcon]=\"true\" [(ngModel)]=\"endDate\" [minDate]=\"startDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                    yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showDataEnd()\" (onBlur)=\"showDataEnd()\"></p-calendar>\r\n            </div>\r\n            <div class=\"ui-g-2 right\">推送状态:</div>\r\n            <div class=\"ui-g-2\">\r\n                <p-dropdown [options]=\"pushStatOptions\" [(ngModel)]=\"crossSellingQueryBean.push_stat\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n\r\n            <div class=\"ui-g-2 right\">存款余额:</div>\r\n            <div class=\"ui-g-2\">\r\n                <input class=\"inputStyle\" type=\"text\" pInputText [(ngModel)]=\"crossSellingQueryBean.sav_Bal_start\" /> 至\r\n                <input class=\"inputStyle\" type=\"text\" pInputText [(ngModel)]=\"crossSellingQueryBean.sav_Bal_end\" />\r\n            </div>\r\n            <div class=\"ui-g-2 right\">存款上月日均:</div>\r\n            <div class=\"ui-g-2\">\r\n                <input class=\"inputStyle\" type=\"text\" pInputText [(ngModel)]=\"crossSellingQueryBean.lm_Dept_Avg_Bal_start\" /> 至\r\n                <input class=\"inputStyle\" type=\"text\" pInputText [(ngModel)]=\"crossSellingQueryBean.lm_Dept_Avg_Bal_end\" />\r\n            </div>\r\n            <div class=\"ui-g-2 right\">贷款余额:</div>\r\n            <div class=\"ui-g-2\">\r\n                <input class=\"inputStyle\" type=\"text\" pInputText [(ngModel)]=\"crossSellingQueryBean.loan_Bal_start\" /> 至\r\n                <input class=\"inputStyle\" type=\"text\" pInputText [(ngModel)]=\"crossSellingQueryBean.loan_Bal_end\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 right\">信用卡余额:</div>\r\n            <div class=\"ui-g-2\">\r\n                <input class=\"inputStyle\" type=\"text\" pInputText [(ngModel)]=\"crossSellingQueryBean.cerd_Card_Bal_start\" /> 至\r\n                <input class=\"inputStyle\" type=\"text\" pInputText [(ngModel)]=\"crossSellingQueryBean.cerd_Card_Bal_end\" />\r\n            </div>\r\n            <div class=\"ui-g-2 right\">概率:</div>\r\n            <div class=\"ui-g-2\">\r\n                <input class=\"inputStyle\" type=\"text\" pInputText [(ngModel)]=\"crossSellingQueryBean.rateStart\" /> 至\r\n                <input class=\"inputStyle\" type=\"text\" pInputText [(ngModel)]=\"crossSellingQueryBean.rateEnd\" />\r\n            </div>\r\n            <div class=\"ui-g-2 right\">是否流失:</div>\r\n            <div class=\"ui-g-2\">\r\n                <p-dropdown [options]=\"predResultList\" [(ngModel)]=\"crossSellingQueryBean.predResult\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"query()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n    <!-- <div style=\"float:right;padding-right:1em;\">\r\n        <span class=\"icoColor\" (click)=\"chooseBtn()\">选择字段</span>\r\n    </div> -->\r\n    <div class=\"ui-g-12 table base-table\">\r\n        <p-dataTable [value]=\"detailTable\" scrollable=\"true\" scrollWidth=\"100%\" [emptyMessage]='tabMesg'>\r\n            <p-column [style]=\"{'width':'80px'}\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <p-checkbox name=\"groupname\" label=\"选择\" [(ngModel)]=\"checkAll\" binary=\"true\" (click)=\"checkAllClick()\"></p-checkbox>\r\n                </ng-template>\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <p-checkbox [(ngModel)]=\"col.checkBox\" [disabled]=\"col.marketStat == '02'\" (onChange)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"batchId\" header=\"批次编号\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"dtCreatedate\" header=\"创建日期\" [style]=\"{'width':'110px'}\"></p-column>\r\n            <p-column field=\"custNo\" header=\"客户号\" [style]=\"{'width':'120px'}\"></p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\" [style]=\"{'width':'100px'}\"></p-column>\r\n            <p-column field=\"productNo\" header=\"推荐产品编号\" [style]=\"{'width':'150px'}\"></p-column>\r\n            <p-column field=\"productName\" header=\"推荐产品名称\" [style]=\"{'width':'110px'}\"></p-column>\r\n            <p-column field=\"recReasons\" header=\"推荐理由\" [style]=\"{'width':'300px'}\"></p-column>\r\n            <p-column field=\"pushStat\" header=\"推送状态\" [style]=\"{'width':'110px'}\">\r\n                <ng-template pTemplate=\"body\" let-item=\"rowData\">\r\n                    <span>{{item.pushStat|codeValuePie:pushStatOptions}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"marketStat\" header=\"营销活动状态\" [style]=\"{'width':'150px'}\">\r\n                <ng-template pTemplate=\"body\" let-item=\"rowData\">\r\n                    <span>{{item.marketStat|codeValuePie:marketStatOptions}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"pushTime\" header=\"推送时间\" [style]=\"{'width':'110px'}\"></p-column>\r\n            <p-column field=\"isSeeInfo\" header=\"是否查看信息\" [style]=\"{'width':'80px'}\">\r\n                <ng-template pTemplate=\"body\" let-item=\"rowData\">\r\n                    <span>{{item.isSeeInfo|codeValuePie:isSeeInfo}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"查看渠道\" [style]=\"{'width':'80px'}\">\r\n                <ng-template pTemplate=\"body\" let-item=\"rowData\">\r\n                    <span>{{item.closeConsumerSysId|codeValuePie3:channelForCrossSelling}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"isMarketSucc\" header=\"是否销售成功\" [style]=\"{'width':'80px'}\">\r\n                <ng-template pTemplate=\"body\" let-item=\"rowData\">\r\n                    <span>{{item.isMarketSucc|codeValuePie:isMarketSucc}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field={{list.fieldEnName}} *ngFor=\"let list of arrList\" [style]=\"{'width':'110px'}\">\r\n                <ng-template pTemplate=\"header\">\r\n                    <div (click)=\"sort(list.fieldNo)\">{{list.fieldCnName}}</div>\r\n                </ng-template>\r\n                <!-- <ng-template pTemplate=\"body\" *ngIf=\"list.fieldEnName=='pushStat'\" let-item=\"rowData\">\r\n                    <span>{{item.pushStat|codeValuePie:pushStatOptions}}</span>\r\n                </ng-template> -->\r\n            </p-column>\r\n            <p-column field=\"\" header=\"影响因素\" [style]=\"{'width':'80px'}\">\r\n                <ng-template pTemplate=\"body\" let-col=\"rowData\">\r\n                    <span class=\"tabelDetailIco\" (click)=\"queryCustomerFeatureModels(col)\">详情</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows={{pageSize}} totalRecords={{total}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"返回\" (click)=\"return()\"></button>\r\n        <button pButton *ngIf=\"sourceStat == '01' && crossSellingQueryBean.data_source == '01'&& detailTable && detailTable!='' && permissionCheck('SID00001_P027_P001_P001')\"\r\n            type=\"button\" label=\"生成交叉销售任务\" (click)=\"generatList()\"></button>\r\n    </div>\r\n</div>\r\n<p-growl [(value)]=\"msgs\"></p-growl>`\r\n<!-- <p-dialog [(visible)]=\"addPage\" modal=\"true\" width=\"1200\" height=\"600\">\r\n    <p-header>\r\n        {{addHeader}}\r\n    </p-header>\r\n    <div class=\"ui-g-12\">\r\n        <p-checkbox class=\"ui-g-12\" binary=\"true\" label=\"全选\" (click)=\"checkAlls()\" [(ngModel)]=\"isAll\"></p-checkbox>\r\n        <p-checkbox class=\"ui-g-4\" binary=\"true\" label=\"{{item.fieldCnName}}\" *ngFor=\"let item of arrList\" [(ngModel)]=\"item.fieldCnName\" (click)=\"doSelect(item)\"></p-checkbox>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"save()\"></button>\r\n    </div>\r\n</p-dialog> -->\r\n<p-dialog class=\"gundam-display\" *ngIf=\"orgTreeDisplay2\" [(visible)]=\"orgTreeDisplay2\" modal=\"modal\" [responsive]=\"true\"\r\n    [positionTop]=10 (onHide)=\"onHideClose()\">\r\n    <p-header>主联系人</p-header>\r\n    <!-- <org-mutil-all-tree-component (selectAllValue)=\"treeCall2($event)\"></org-mutil-all-tree-component> -->\r\n    <app-query-user-list (outValue)=\"perInfor($event)\" [in-value]=\"queryUserInValue\"></app-query-user-list>\r\n</p-dialog>\r\n\r\n<p-dialog header=\"特征变量表\" *ngIf=\"echartsDisplay\" [(visible)]=\"echartsDisplay\" modal=\"modal\" width=900>\r\n    <div class=\"ui-g-12 echarts\" [options]=\"option\" echarts></div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-query/custom-cross-selling-query.component.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-query/custom-cross-selling-query.component.scss ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table,\n.btn {\n  text-align: center; }\n\n.right {\n  text-align: right;\n  width: 14%; }\n\n.query_style .ui-g-12 {\n  padding: 0; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-calendar {\n    min-width: 76px !important;\n    width: 43% !important; } }\n\n@media screen and (min-width: 1280px) {\n  :host/deep/ .ui-calendar {\n    width: 45%;\n    min-width: 128px; } }\n\n.queryinputbtn {\n  float: left;\n  display: flex;\n  width: 100%; }\n\n.queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n\n.queryinputbtn .clickspan {\n    width: 14%;\n    height: 23px;\n    cursor: pointer; }\n\n.inputStyle {\n  width: calc(50% - 12px);\n  min-width: 0; }\n\n:host/deep/ .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n.echarts {\n  height: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20taW5mb3JtYXRpb24vY3VzdG9tLWNyb3NzLXNlbGxpbmcvY3VzdG9tLWNyb3NzLXNlbGxpbmctcXVlcnkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20taW5mb3JtYXRpb25cXGN1c3RvbS1jcm9zcy1zZWxsaW5nXFxjdXN0b20tY3Jvc3Mtc2VsbGluZy1xdWVyeVxcY3VzdG9tLWNyb3NzLXNlbGxpbmctcXVlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCO0VBQ2pCLFVBQVUsRUFBQTs7QUFHZDtFQUVRLFVBQVUsRUFBQTs7QUFJbEI7RUFDSztJQUNHLDBCQUEwQjtJQUMxQixxQkFBcUIsRUFBQSxFQUN4Qjs7QUFHTDtFQUNLO0lBQ0csVUFBVTtJQUNWLGdCQUFnQixFQUFBLEVBQ25COztBQUdMO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBSGY7SUFLUSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQiwwQkFBMEIsRUFBQTs7QUFSbEM7SUFXUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWUsRUFBQTs7QUFJdkI7RUFDSSx1QkFBdUI7RUFDdkIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWluZm9ybWF0aW9uL2N1c3RvbS1jcm9zcy1zZWxsaW5nL2N1c3RvbS1jcm9zcy1zZWxsaW5nLXF1ZXJ5L2N1c3RvbS1jcm9zcy1zZWxsaW5nLXF1ZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLFxyXG4uYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDE0JTtcclxufVxyXG5cclxuLnF1ZXJ5X3N0eWxlIHtcclxuICAgIC51aS1nLTEyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgIDpob3N0L2RlZXAvIC51aS1jYWxlbmRhciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA3NnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDQzJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyODBweCkge1xyXG4gICAgIDpob3N0L2RlZXAvIC51aS1jYWxlbmRhciB7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICBtaW4td2lkdGg6IDEyOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucXVlcnlpbnB1dGJ0biB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5xdWVyeWlucHV0T3JnIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgICAgICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNsaWNrc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5wdXRTdHlsZSB7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAxMnB4KTtcclxuICAgIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVjaGFydHMge1xyXG4gICAgaGVpZ2h0OiA1MDBweDsgLy8gb3ZlcmZsb3cteTogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-query/custom-cross-selling-query.component.ts":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-query/custom-cross-selling-query.component.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: CustomCrossSellingQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCrossSellingQueryComponent", function() { return CustomCrossSellingQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _bean_custom_cross_selling_query_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/custom-cross-selling-query.bean */ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-query/bean/custom-cross-selling-query.bean.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomCrossSellingQueryComponent = /** @class */ (function () {
    function CustomCrossSellingQueryComponent(httpService, commfunc, route, router) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.route = route;
        this.router = router;
        this.crossSellingQueryBean = new _bean_custom_cross_selling_query_bean__WEBPACK_IMPORTED_MODULE_4__["CrossSellingQueryBean"]();
        this.data = '';
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_CN"];
        this.first = 0;
        this.pageSize = 10;
        this.pageNum = 1;
        this.total = 0;
        this.msgs = [];
        this.orgId = '';
        this.userId = '';
        this.detailTable = [];
        this.productNum = [];
        this.startDate = null;
        this.endDate = null;
        //选择数据
        this.checkSave = []; //客户选择项保存
        this.checkSave2 = ''; //客户选择项拼接
        this.chooseData = [];
        this.checkAll = false;
        this.addPage = false;
        this.addPro = false;
        this.orgTreeDisplay2 = false;
        this.pushStatOptions = []; //推送状态
        this.marketStatOptions = []; //营销活动状态
        this.arrList = []; //表头
        this.isSeeInfo = [];
        this.isMarketSucc = [];
        this.channelForCrossSelling = [];
        this.echartsDisplay = false;
        this.predResultList = [
            { label: '请选择', value: '' },
            { label: '是', value: '1' },
            { label: '否', value: '0' }
        ];
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.orgId) {
            this.orgId = this.user.orgId;
        }
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
    }
    CustomCrossSellingQueryComponent.prototype.ngOnInit = function () {
        this.codeVal();
        var data = JSON.parse(this.route.snapshot.params.data);
        console.log(data);
        this.pushStatOptions = this.code['Push_Stat']; //推送状态
        this.marketStatOptions = this.code['Market_Stat']; //营销活动状态
        this.isSeeInfo = this.code['isSeeInfo']; //是否查看信息
        this.isMarketSucc = this.code['isMarketSucc']; //是否销售成功
        this.channelForCrossSelling = this.code['channelForCrossSelling']; //渠道
        this.crossSellingQueryBean.batch_id = data.batchId;
        this.crossSellingQueryBean.data_source = data.dataSource;
        this.sourceStat = data.sourceStat;
        this.chooseBtn(data.batchId, data.dataSource);
        this.query();
        this.choosePro();
        this.queryUserInValue = this.orgId;
    };
    //码值
    CustomCrossSellingQueryComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CustomCrossSellingQueryComponent.prototype.showDataStart = function () {
        var _this = this;
        if (this.startDate && this.endDate) {
            if (this.startDate > this.endDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.startDate = null;
                });
            }
        }
    };
    CustomCrossSellingQueryComponent.prototype.showDataEnd = function () {
        var _this = this;
        if (this.startDate && this.endDate) {
            if (this.startDate > this.endDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.endDate = null;
                });
            }
        }
    };
    //单选
    // doSelect(data) {
    //     let sb = true;
    //     if (data.isCheck) {
    //         this.tableData.push(data);
    //         this.arrList.forEach(item => {
    //             sb = item.isCheck && sb
    //         });
    //     } else {
    //         this.tableData.forEach((item, i) => {
    //             if (item.value == data.value) {
    //                 this.tableData.splice(i, 1);
    //                 return;
    //             }
    //         })
    //         sb = false;
    //     }
    //     this.tableData.sort((a, b) => {
    //         return a.num * 1 - b.num * 1
    //     })
    //     this.isAll = sb;
    // }
    //全选
    // checkAlls() {
    //     let isTrue = this.isAll;
    //     this.tableData = [];
    //     this.arrList.forEach(item => {
    //         item['isCheck'] = isTrue;
    //         if (isTrue) {
    //             this.tableData.push(item);
    //         }
    //     });
    //     this.tableData.sort((a, b) => {
    //         return a.num * 1 - b.num * 1
    //     })
    // }
    //选择字段
    //表头查询
    CustomCrossSellingQueryComponent.prototype.chooseBtn = function (batchId, dataSource) {
        var _this = this;
        var params = {
            batchId: batchId,
            dataSource: dataSource,
        };
        this.httpService.queryTableHeader(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.arrList = data.tableHeaderList;
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //选择字段保存
    // save() {
    //     this.addMsg();
    //     this.addPage = false;
    // }
    // addMsg() {
    //     let params = {
    //         // listShowsIdType: '1',
    //         // listShowsIdModule: 'query_03',
    //         // createOrg: this.orgID,
    //         // createdByUserLogin: this.userId,
    //         // dtId: JSON.stringify(this.tableData)
    //     }
    //     this.httpService.findDocumentAttrItem(params).subscribe(data => {
    //         if (data.returnCode.code == 'success') {
    //             // console.log(data)
    //         } else {
    //             this.msgs = [];
    //             data.returnCode.message ? data.returnCode.message : '查询失败！';
    //             this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
    //         }
    //     }, err => {
    //         this.msgs = [];
    //         this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
    //     })
    // }
    //查询
    CustomCrossSellingQueryComponent.prototype.query = function () {
        this.crossSellingQueryBean.pageSize = 10;
        this.crossSellingQueryBean.pageNum = 1;
        this.first = 0;
        this.queryBusiBatchDetailInfo();
    }; //按钮权限
    CustomCrossSellingQueryComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CustomCrossSellingQueryComponent.prototype.queryBusiBatchDetailInfo = function () {
        var _this = this;
        var params = {
            batchId: this.crossSellingQueryBean.batch_id,
            custNo: this.crossSellingQueryBean.cust_no,
            custName: this.crossSellingQueryBean.cust_name,
            recoProdId: this.crossSellingQueryBean.reco_prod_id,
            // recoProdName: this.crossSellingQueryBean.reco_prod_name,//推荐产品名称
            principalLinkmanId: this.crossSellingQueryBean.principal_Linkman_Id,
            // principalLinkmanName: this.crossSellingQueryBean.principal_Linkman_Name,//客户主联系人名称
            dtCreatedateStart: this.commfunc.transDateN(this.startDate),
            dtCreatedateEnd: this.commfunc.transDateN(this.endDate),
            pushStat: this.crossSellingQueryBean.push_stat,
            savBalStart: this.crossSellingQueryBean.sav_Bal_start,
            savBalEnd: this.crossSellingQueryBean.sav_Bal_end,
            lmDeptAvgBalStart: this.crossSellingQueryBean.lm_Dept_Avg_Bal_start,
            lmDeptAvgBalEnd: this.crossSellingQueryBean.lm_Dept_Avg_Bal_end,
            loanBalStart: this.crossSellingQueryBean.loan_Bal_start,
            loanBalEnd: this.crossSellingQueryBean.loan_Bal_end,
            cerdCardBalStart: this.crossSellingQueryBean.cerd_Card_Bal_start,
            cerdCardBalEnd: this.crossSellingQueryBean.cerd_Card_Bal_end,
            dataSource: this.crossSellingQueryBean.data_source,
            rateStart: this.crossSellingQueryBean.rateStart,
            rateEnd: this.crossSellingQueryBean.rateEnd,
            predResult: this.crossSellingQueryBean.predResult,
            pageNum: this.crossSellingQueryBean.pageNum,
            pageSize: this.crossSellingQueryBean.pageSize,
        };
        this.httpService.queryBusiBatchDetailInfo(params).subscribe(function (data) {
            console.log('1');
            if (data.returnCode.code == 'success') {
                _this.detailTable = data.interfaceModuleList;
                _this.total = data.totalNum;
                for (var i = 0; i < _this.detailTable.length; i++) {
                    if (_this.checkSave.indexOf(_this.detailTable[i].custNo + '|' + _this.detailTable[i].productNo) !== -1) {
                        _this.detailTable[i].checkBox = true;
                    }
                }
                for (var i = 0; i < _this.detailTable.length; i++) {
                    if (_this.detailTable[i].checkBox == false || _this.detailTable[i].checkBox == undefined) {
                        _this.checkAll = false;
                        break;
                    }
                    else {
                        _this.checkAll = true;
                    }
                }
                // console.log(data)
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //重置
    CustomCrossSellingQueryComponent.prototype.reset = function () {
        var id = this.crossSellingQueryBean.batch_id;
        var source = this.crossSellingQueryBean.data_source;
        this.crossSellingQueryBean = new _bean_custom_cross_selling_query_bean__WEBPACK_IMPORTED_MODULE_4__["CrossSellingQueryBean"]();
        this.crossSellingQueryBean.batch_id = id;
        this.crossSellingQueryBean.data_source = source;
        this.startDate = null;
        this.endDate = null;
    };
    //生成交叉销售清单
    CustomCrossSellingQueryComponent.prototype.generatList = function () {
        var _this = this;
        this.checkSave2 = '';
        for (var i = 0; i < this.checkSave.length; i++) {
            if (this.checkSave[i]) {
                this.checkSave2 += ',' + this.checkSave[i];
            }
        }
        this.checkSave2 = this.checkSave2.substring(1);
        console.log(this.checkSave2);
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        // let expCondName;
        // let requestMapCopy = JSON.parse(JSON.stringify(this.creatCustExplCondBean.requestMap));
        // let requestMap = this.deleteNull(this.deleteNull(requestMapCopy));//去null
        // this.creatCustExplCondBean.expCondName = '交叉销售';
        // this.creatCustExplCondBean.requestType = '2';
        // this.creatCustExplCondBean.statusId = "3";
        // let param = {
        // 	explortFlag: this.creatCustExplCondBean.explortFlag,
        // 	postId: this.creatCustExplCondBean.postId,
        // 	displayTarget: this.creatCustExplCondBean.displayTarget,
        // 	requestType: this.creatCustExplCondBean.requestType,
        // 	userName: this.creatCustExplCondBean.userName,
        // 	orgName: this.creatCustExplCondBean.orgName,
        // 	expCondName: this.creatCustExplCondBean.expCondName,
        // 	statusId: this.creatCustExplCondBean.statusId,
        // 	marketFlag: this.creatCustExplCondBean.marketFlag,
        // 	expCondId: this.creatCustExplCondBean.expCondId,
        // 	modelScale: this.creatCustExplCondBean.modelScale,
        // 	custHoldProdLists: this.creatCustExplCondBean.custHoldProdLists,
        // 	requestMap
        // }
        // this.httpService.createExploreCondition(param).subscribe(data => {
        // 	if (data.returnCode.code == 'success') {
        var params;
        if (this.checkSave2 == '') {
            params = {
                batchId: this.crossSellingQueryBean.batch_id,
                dataSource: '01',
                // sourceExp: data.expCondId,
                // sourceExpExt: data.expCondId,
                createType: '1',
                createdUserId: commonHeader.userId,
                createdUserName: chName.userName,
                createdOrgId: commonHeader.orgId,
                createdOrgName: chName.orgName,
            };
        }
        else {
            params = {
                batchId: this.crossSellingQueryBean.batch_id,
                dataSource: '01',
                sourceExp: this.checkSave2,
                //sourceExpExt: data.expCondId,
                createType: '0',
                createdUserId: commonHeader.userId,
                createdUserName: chName.userName,
                createdOrgId: commonHeader.orgId,
                createdOrgName: chName.orgName,
            };
        }
        this.httpService.createBusiBatchInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.commfunc.setSessionDataCH('marketingCampaigntType', '12');
                // batch_id
                var parames = {
                    expCondNum: '12',
                    batchId: data.batchId,
                    secBatchId: data.secBatchId,
                    dataSource: '01',
                };
                _this.router.navigate(['pages/tzb/custom/marketing/marketing-activite/create-marketing-activite/basic-element', parames]);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '信息创建成功', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '信息创建失败', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '信息创建失败', detail: '调用服务失败！' });
        });
        // 		this.msgs = [];
        // 		this.msgs.push({ severity: 'success', summary: '保存模板成功', detail: data.returnCode.message });
        // 	} else {
        // 		this.msgs = [];
        // 		this.msgs.push({ severity: 'error', summary: '保存模板失败', detail: data.returnCode.message });
        // 	}
        // }, error => {
        // 	this.msgs = [];
        // 	this.msgs.push({ severity: 'error', summary: '保存模板失败', detail: '调用服务失败！' });
        // })
    };
    //翻页
    CustomCrossSellingQueryComponent.prototype.paginate = function (event) {
        this.crossSellingQueryBean.pageSize = event.rows * 1;
        //当前页
        this.crossSellingQueryBean.pageNum = event.page + 1;
        this.first = event.page * this.crossSellingQueryBean.pageSize;
        this.queryBusiBatchDetailInfo();
    };
    //全选按钮
    CustomCrossSellingQueryComponent.prototype.checkAllClick = function () {
        this.chooseData = [];
        for (var i = 0; i < this.detailTable.length; i++) {
            if (this.checkAll == true) {
                this.detailTable[i].checkBox = true;
                this.chooseData.push(this.detailTable[i]);
                for (var j = 0; j < this.chooseData.length; j++) {
                    debugger;
                    if (this.checkSave.indexOf(this.chooseData[j].custNo + '|' + this.chooseData[j].productNo) == -1) {
                        this.checkSave.push(this.chooseData[j].custNo + '|' + this.chooseData[j].productNo);
                    }
                }
            }
            else {
                for (var l = 0; l < this.checkSave.length; l++) {
                    if (this.checkSave[l] == this.detailTable[i].custNo + '|' + this.detailTable[i].productNo) {
                        for (var v = l; v < this.checkSave.length; v++) {
                            if (this.checkSave[v + 1]) {
                                this.checkSave[v] = this.checkSave[v + 1];
                            }
                            else {
                                this.checkSave[v] = '';
                            }
                        }
                        this.checkSave.length--;
                    }
                }
                this.chooseData = [];
                this.detailTable[i].checkBox = false;
            }
        }
    };
    //单选按钮
    CustomCrossSellingQueryComponent.prototype.checkBoxClick = function (i, data) {
        var _this = this;
        if (data.checkBox) {
            this.chooseData.push(data);
        }
        else {
            this.chooseData.forEach(function (item, i) {
                if (item == data) {
                    _this.chooseData.splice(i, 1);
                }
            });
        }
        if (this.chooseData.length == this.detailTable.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
        if (this.chooseData.length > 0) {
            console.log(this.chooseData);
            for (var j = 0; j < this.chooseData.length; j++) {
                debugger;
                if (this.checkSave.indexOf(this.chooseData[j].custNo + '|' + this.chooseData[j].productNo) == -1) {
                    this.checkSave.push(this.chooseData[j].custNo + '|' + this.chooseData[j].productNo);
                }
                else if (data.checkBox == false) {
                    debugger;
                    console.log(data.checkBox);
                    for (var l = 0; l < this.checkSave.length; l++) {
                        if (this.checkSave[l] == data.custNo + '|' + data.productNo) {
                            for (var v = l; v < this.checkSave.length; v++) {
                                if (this.checkSave[v + 1]) {
                                    this.checkSave[v] = this.checkSave[v + 1];
                                }
                                else {
                                    this.checkSave[v] = '';
                                }
                            }
                            this.checkSave.length--;
                        }
                    }
                }
            }
            console.log(this.checkSave);
        }
        else if (this.chooseData.length == 0) {
            debugger;
            for (var l = 0; l < this.checkSave.length; l++) {
                if (this.checkSave[l] == data.custNo + '|' + data.productNo) {
                    for (var v = l; v < this.checkSave.length; v++) {
                        if (this.checkSave[v + 1]) {
                            this.checkSave[v] = this.checkSave[v + 1];
                        }
                        else {
                            this.checkSave[v] = '';
                        }
                    }
                    this.checkSave.length--;
                }
            }
            console.log(this.checkSave);
        }
    };
    // 返回
    CustomCrossSellingQueryComponent.prototype.return = function () {
        this.router.navigate(['pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-list']);
    };
    //推荐产品
    CustomCrossSellingQueryComponent.prototype.choosePro = function () {
        var _this = this;
        var params = {
            batchId: this.crossSellingQueryBean.batch_id,
        };
        this.httpService.queryProductList(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var ar = {};
                ar['label'] = '请选择';
                ar['value'] = '';
                _this.productNum.push(ar);
                data.productList.forEach(function (element) {
                    var arr = {};
                    arr['label'] = element.productName;
                    arr['value'] = element.productNo;
                    _this.productNum.push(arr);
                });
                _this.crossSellingQueryBean.reco_prod_id = '';
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //主联系人
    CustomCrossSellingQueryComponent.prototype.perShow = function () {
        this.orgTreeDisplay2 = true;
    };
    //主联系人选择回调
    CustomCrossSellingQueryComponent.prototype.perInfor = function (param) {
        this.orgTreeDisplay2 = false;
        this.crossSellingQueryBean.principal_Linkman_Id = param[0].tellerId,
            this.crossSellingQueryBean.principal_Linkman_Name = param[0].tellerName,
            document.body.style.overflow = 'auto';
    };
    //特征变量表
    CustomCrossSellingQueryComponent.prototype.queryCustomerFeatureModels = function (col) {
        var _this = this;
        if (!JSON.parse(this.route.snapshot.params.data).tagId || JSON.parse(this.route.snapshot.params.data).tagId != 'XYYC') {
            return;
        }
        this.echartsDisplay = true;
        var param = {
            custId: col.custNo
        };
        this.httpService.queryCustomerFeatureModels(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var title = data.resultList[0].dt;
                var yAxisData = new Array();
                var seriesData1 = new Array(); //影响比例
                var seriesData2_1 = new Array(); //影响原值
                var that = _this;
                yAxisData.push(data.resultList[0].feature6Inf);
                yAxisData.push(data.resultList[0].feature5Inf);
                yAxisData.push(data.resultList[0].feature4Inf);
                yAxisData.push(data.resultList[0].feature3Inf);
                yAxisData.push(data.resultList[0].feature2Inf);
                yAxisData.push(data.resultList[0].feature1Inf);
                seriesData1.push(data.resultList[0].feature6Num);
                seriesData1.push(data.resultList[0].feature5Num);
                seriesData1.push(data.resultList[0].feature4Num);
                seriesData1.push(data.resultList[0].feature3Num);
                seriesData1.push(data.resultList[0].feature2Num);
                seriesData1.push(data.resultList[0].feature1Num);
                seriesData2_1.push(data.resultList[0].feature6NumOri);
                seriesData2_1.push(data.resultList[0].feature5NumOri);
                seriesData2_1.push(data.resultList[0].feature4NumOri);
                seriesData2_1.push(data.resultList[0].feature3NumOri);
                seriesData2_1.push(data.resultList[0].feature2NumOri);
                seriesData2_1.push(data.resultList[0].feature1NumOri);
                _this.option = {
                    title: [
                        {}
                    ],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    // legend: {
                    //     data: ['影响比例', '影响原值']
                    // },
                    grid: {
                        width: '80%',
                        height: '75%',
                        left: '10%',
                        bottom: '10%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'value',
                            position: 'top',
                            splitLine: {
                                lineStyle: {
                                    type: 'dashed'
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'category',
                            axisTick: { show: false },
                            data: yAxisData
                        }
                    ],
                    series: [
                        {
                            name: "影响比例",
                            type: "bar",
                            label: {
                                normal: {
                                    show: true,
                                    position: 'right',
                                    formatter: function (params) {
                                        // console.log(params);
                                        return seriesData2_1[params.dataIndex];
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: function (param) {
                                        if (param.value >= 0) {
                                            return 'red';
                                        }
                                        else {
                                            return 'green';
                                        }
                                    }
                                }
                            },
                            data: seriesData1,
                        },
                    ]
                };
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
    CustomCrossSellingQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-cross-selling-query',
            template: __webpack_require__(/*! ./custom-cross-selling-query.component.html */ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-query/custom-cross-selling-query.component.html"),
            styles: [__webpack_require__(/*! ./custom-cross-selling-query.component.scss */ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-query/custom-cross-selling-query.component.scss")],
            providers: []
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomCrossSellingQueryComponent);
    return CustomCrossSellingQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: CustomCrossSellingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCrossSellingComponent", function() { return CustomCrossSellingComponent; });
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

var CustomCrossSellingComponent = /** @class */ (function () {
    function CustomCrossSellingComponent() {
    }
    CustomCrossSellingComponent.prototype.ngOnInit = function () { };
    CustomCrossSellingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-cross-selling',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], CustomCrossSellingComponent);
    return CustomCrossSellingComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CustomCrossSellingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCrossSellingModule", function() { return CustomCrossSellingModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _custom_cross_selling_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-cross-selling.routing */ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling.routing.ts");
/* harmony import */ var _custom_cross_selling_query_custom_cross_selling_query_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-cross-selling-query/custom-cross-selling-query.component */ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-query/custom-cross-selling-query.component.ts");
/* harmony import */ var _custom_cross_selling_list_custom_cross_selling_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-cross-selling-list/custom-cross-selling-list.component */ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-list/custom-cross-selling-list.component.ts");
/* harmony import */ var _custom_cross_selling_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-cross-selling.component */ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CustomCrossSellingModule = /** @class */ (function () {
    function CustomCrossSellingModule() {
    }
    CustomCrossSellingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _custom_cross_selling_routing__WEBPACK_IMPORTED_MODULE_5__["CustomCrossSellingRouting"]
            ],
            declarations: [
                _custom_cross_selling_component__WEBPACK_IMPORTED_MODULE_8__["CustomCrossSellingComponent"],
                _custom_cross_selling_query_custom_cross_selling_query_component__WEBPACK_IMPORTED_MODULE_6__["CustomCrossSellingQueryComponent"],
                _custom_cross_selling_list_custom_cross_selling_list_component__WEBPACK_IMPORTED_MODULE_7__["CustomCrossSellingListComponent"]
            ],
            providers: []
        })
    ], CustomCrossSellingModule);
    return CustomCrossSellingModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling.routing.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling.routing.ts ***!
  \**********************************************************************************************************/
/*! exports provided: routes, CustomCrossSellingRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCrossSellingRouting", function() { return CustomCrossSellingRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_cross_selling_query_custom_cross_selling_query_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-cross-selling-query/custom-cross-selling-query.component */ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-query/custom-cross-selling-query.component.ts");
/* harmony import */ var _custom_cross_selling_list_custom_cross_selling_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-cross-selling-list/custom-cross-selling-list.component */ "./src/app/pages/tzb/custom/custom-information/custom-cross-selling/custom-cross-selling-list/custom-cross-selling-list.component.ts");



var routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'custom-cross-selling-list', pathMatch: 'full' },
            { path: 'custom-cross-selling-query', component: _custom_cross_selling_query_custom_cross_selling_query_component__WEBPACK_IMPORTED_MODULE_1__["CustomCrossSellingQueryComponent"] },
            { path: 'custom-cross-selling-list', component: _custom_cross_selling_list_custom_cross_selling_list_component__WEBPACK_IMPORTED_MODULE_2__["CustomCrossSellingListComponent"] }
        ]
    },
];
var CustomCrossSellingRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=custom-cross-selling-custom-cross-selling-module.js.map