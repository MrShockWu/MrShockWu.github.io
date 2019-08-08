(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-manage-custom-manage-module"],{

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/adjust-log/adjust-log.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/adjust-log/adjust-log.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ajustPage\"  *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P021')\">\r\n  <div class=\"ui-g padding-zero module\">\r\n    <div class=\"ui-g-12\">\r\n      <header-title [Info]=\"'调整日志'\"></header-title>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-12 ui-md-2 textRight\">\r\n        <label>客户号：</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <input type=\"text\" class='adjustLogInput' pInputText [(ngModel)]=\"adjustLogBean.custNo\">\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 textRight\">\r\n        <label>客户名称：</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <input type=\"text\" class='adjustLogInput' pInputText [(ngModel)]=\"adjustLogBean.custName\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 topDistance\">\r\n      <div class=\"ui-g-12 ui-md-2 textRight\">\r\n        <label>原主联系人所属机构：</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 org-name\">\r\n        <input id=\"input\" class='adjustLogOrgInput' type=\"text\" size=\"30\" pInputText disabled [(ngModel)]=\"ownerOrgName\">\r\n        <div class=\"clickspan\">\r\n          <a (click)=\"openTree('owner')\" class=\"a-hand\">\r\n            <span>...</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 textRight\">\r\n        <label>原主联系人：</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 org-name\">\r\n        <input id=\"input\" class='adjustLogOrgInput' type=\"text\" size=\"30\" pInputText disabled [(ngModel)]=\"adjustLogBean.ownerManagerName\">\r\n        <div class=\"clickspan\">\r\n          <a (click)=\"openPeopleTree('owner')\" class=\"a-hand\">\r\n            <span>...</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 topDistance\">\r\n      <div class=\"ui-g-12 ui-md-2 textRight\">\r\n        <label>接收人所属机构：</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 org-name\">\r\n        <input id=\"input\" class=\"adjustLogOrgInput\" type=\"text\" size=\"30\" pInputText disabled [(ngModel)]=\"receiveOrgName\">\r\n        <div class=\"clickspan\">\r\n          <a (click)=\"openTree('receive')\" class=\"a-hand\">\r\n            <span>...</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 textRight\">\r\n        <label>接收人：</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 org-name\">\r\n        <input id=\"input\" class='adjustLogOrgInput' type=\"text\" size=\"30\" pInputText disabled [(ngModel)]=\"adjustLogBean.receiverName\">\r\n        <div class=\"clickspan\">\r\n          <a (click)=\"openPeopleTree('receive')\" class=\"a-hand\">\r\n            <span>...</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 topDistance\">\r\n      <div class=\"ui-g-12 ui-md-2 textRight\">\r\n        <label>调整人所属机构：</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 org-name\">\r\n        <input id=\"input\" class=\"adjustLogOrgInput\" type=\"text\" size=\"30\" pInputText disabled [(ngModel)]=\"createOrgName\">\r\n        <div class=\"clickspan\">\r\n          <a (click)=\"openTree('creater')\" class=\"a-hand\">\r\n            <span>...</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 textRight\">\r\n        <label>调整人：</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 org-name\">\r\n        <input id=\"input\" class='adjustLogOrgInput' type=\"text\" size=\"30\" pInputText disabled [(ngModel)]=\"adjustLogBean.createrName\">\r\n        <div class=\"clickspan\">\r\n          <a (click)=\"openPeopleTree('creater')\" class=\"a-hand\">\r\n            <span>...</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 topDistance\">\r\n      <div class=\"ui-g-12 ui-md-2 textRight\">\r\n        <label>状态：</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <p-dropdown [options]=\"adjustStatus\" class='adjustLogDrop' [(ngModel)]=\"adjustLogBean.stu\"></p-dropdown>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 textRight\">\r\n        <label>调整类型：</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <p-dropdown [options]=\"adjustType\" class='adjustLogDrop' [(ngModel)]=\"adjustLogBean.type\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 topDistance\">\r\n      <div class=\"ui-g-12 ui-md-2 textRight\">\r\n        <label>客户所属机构：</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4 org-name\">\r\n        <input id=\"input\" class=\"adjustLogOrgInput\" type=\"text\" size=\"30\" pInputText disabled [(ngModel)]=\"adjustLogBean.custOrgName\">\r\n        <div class=\"clickspan\">\r\n          <a (click)=\"openTree('cust')\" class=\"a-hand\">\r\n            <span>...</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-2 textRight\">\r\n        <label>调整时间：</label>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-md-4\">\r\n        <p-calendar class=\"adjust-Log-calendar\" [(ngModel)]=\"createDate_GE\" [maxDate]=\"createDate_LE\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n          yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showPlanTime('start')\" (onBlur)=\"showPlanTime('start')\"></p-calendar>至\r\n        <p-calendar class=\"adjust-Log-calendar\" [(ngModel)]=\"createDate_LE\" [minDate]=\"createDate_GE\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n          yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [locale]=\"ch\" (onSelect)=\"showPlanTime('end')\" (onBlur)=\"showPlanTime('end')\"></p-calendar>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 btn\">\r\n      <button pButton type=\"button\" label=\"查询\" (click)=\"querySecle()\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" (click)=\"resetBtn()\"></button>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 table base-table\">\r\n      <p-dataTable [value]=\"tablelist\" [emptyMessage]=\"tabMesg\">\r\n        <p-column field=\"custNo\" header=\"客户号\" [style] = \"{'width':'130px'}\">\r\n          <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <a href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}\" target=\"_blank\">{{col.custNo}}</a>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n        <p-column field=\"custOrgName\" header=\"客户所属机构\"></p-column>\r\n        <p-column field=\"operationType\" header=\"调整类型\">\r\n          <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <span *ngIf=\"col.operationType == ''\"></span>\r\n            <span *ngIf=\"col.operationType == '2'\">客户申领</span>\r\n            <span *ngIf=\"col.operationType == '3'\">客户转让</span>\r\n            <span *ngIf=\"col.operationType == '1' && col.disType == '1'\">按单户分配</span>\r\n            <span *ngIf=\"col.operationType == '1' && col.disType == '2'\">模板导入分配</span>\r\n            <span *ngIf=\"col.operationType == '1' && col.disType == '3'\">按用户分配</span>\r\n            <span *ngIf=\"col.operationType == '1' && col.disType == '4'\">待分配客户</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"ownerManagerName\" header=\"原主联系人\"></p-column>\r\n        <p-column field=\"ownerOrgName\" header=\"原主联系人所属机构\"></p-column>\r\n        <p-column field=\"receiverName\" header=\"接收人\"></p-column>\r\n        <p-column field=\"receiveOrgName\" header=\"接收人所属机构\"></p-column>\r\n        <p-column field=\"validStatus\" header=\"状态\">\r\n          <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            {{col.validStatus|codeValuePie:adjustStatus}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"createrName\" header=\"调整人\"></p-column>\r\n        <p-column field=\"createOrgName\" header=\"调整人所属机构\"></p-column>\r\n        <p-column field=\"startTime\" header=\"调整时间\"></p-column>\r\n      </p-dataTable>\r\n      <p-paginator rows=\"{{adjustLogBean.pageSize}}\" [first]=\"first\" totalRecords=\"{{totalNum}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n        (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--机构-->\r\n<p-dialog [(visible)]=\"orgTreeDisplay\" [positionTop]=10 modal=\"modal\" class=\"adjust-log-f\" (onHide)=\"onHideClose('org')\">\r\n  <p-header>\r\n    机构树\r\n  </p-header>\r\n  <org-tree-component *ngIf=\"ownerDisplay\" [inValue]=\"ownerOrgInValue\" (outValue)=\"contacttreeCall($event,'owner')\"></org-tree-component>\r\n  <org-tree-component *ngIf=\"receiveDisplay\" [inValue]=\"receiveOrgInValue\" (outValue)=\"contacttreeCall($event,'receive')\"></org-tree-component>\r\n  <org-tree-component *ngIf=\"createrDisplay\" [inValue]=\"createrOrgInValue\" (outValue)=\"contacttreeCall($event,'creater')\"></org-tree-component>\r\n  <org-tree-component *ngIf=\"custDisplay\" [inValue]=\"custOrgInValue\" (outValue)=\"contacttreeCall($event,'cust')\"></org-tree-component>\r\n</p-dialog>\r\n\r\n<!-- 员工 -->\r\n<p-dialog [(visible)]=\"userTreeDisplay\" modal=\"modal\" [positionTop]=10 class=\"adjust-log-f\" (onHide)=\"onHideClose('user')\">\r\n  <p-header>\r\n    员工列表\r\n  </p-header>\r\n  <app-query-user-list *ngIf=\"ownerTreeDisplay\" [in-value]=\"ownerInValue\" (outValue)=\"workerCall($event,'owner')\"></app-query-user-list>\r\n  <app-query-user-list *ngIf=\"receiveTreeDisplay\" [in-value]=\"receiveInValue\" (outValue)=\"workerCall($event,'receive')\"></app-query-user-list>\r\n  <app-query-user-list *ngIf=\"createrTreeDisplay\" [in-value]=\"createrInValue\" (outValue)=\"workerCall($event,'creater')\"></app-query-user-list>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/adjust-log/adjust-log.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/adjust-log/adjust-log.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ajustPage .table {\n  text-align: center; }\n\n.ajustPage .btn {\n  text-align: center; }\n\n.ajustPage .textRight {\n  text-align: right; }\n\n.ajustPage .adjustLogInput {\n  width: 50% !important;\n  min-width: 284px !important; }\n\n.ajustPage .clickspan {\n  width: 6%;\n  height: 23px; }\n\n.ajustPage .org-name {\n  display: flex; }\n\n.ajustPage .adjustLogOrgInput {\n  width: 43.4% !important;\n  border-right: none;\n  min-width: 258px !important; }\n\n.ajustPage .topDistance {\n  margin-top: -20px; }\n\n:host /deep/ .adjustLogDrop .ui-dropdown {\n  width: 50% !important;\n  min-width: 284px !important; }\n\n:host /deep/ .adjust-log-f .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .adjust-log-f .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n:host/deep/ .adjust-Log-calendar .ui-calendar {\n  width: 23.2%; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .adjust-Log-calendar .ui-calendar {\n    width: 30%; }\n  :host /deep/ .adjustLogDrop .ui-dropdown {\n    width: 76% !important; }\n  .adjustLogInput {\n    width: 76% !important; }\n  .adjustLogOrgInput {\n    width: 69.5% !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1tYW5hZ2UvYWRqdXN0LWxvZy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1tYXJrZXRpbmdcXGN1c3RvbS1tYW5hZ2VcXGFkanVzdC1sb2dcXGFkanVzdC1sb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxrQkFBa0IsRUFBQTs7QUFMMUI7RUFRUSxpQkFBaUIsRUFBQTs7QUFSekI7RUFXUSxxQkFBcUI7RUFDckIsMkJBQTJCLEVBQUE7O0FBWm5DO0VBZVEsU0FBUztFQUNULFlBQVksRUFBQTs7QUFoQnBCO0VBbUJRLGFBQWEsRUFBQTs7QUFuQnJCO0VBc0JRLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsMkJBQTJCLEVBQUE7O0FBeEJuQztFQTJCUSxpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxxQkFBcUI7RUFDckIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksdUJBQXVCO0VBQ3ZCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLHNCQUFzQixFQUFBOztBQUkxQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFFSztJQUNHLFVBQVUsRUFBQTtFQUViO0lBQ0cscUJBQXFCLEVBQUE7RUFFekI7SUFDSSxxQkFBcUIsRUFBQTtFQUV6QjtJQUNJLHVCQUF1QixFQUFBLEVBQzFCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1tYW5hZ2UvYWRqdXN0LWxvZy9hZGp1c3QtbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFqdXN0UGFnZSB7XHJcbiAgICAudGFibGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0UmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmFkanVzdExvZ0lucHV0IHtcclxuICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyODRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNsaWNrc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IDYlO1xyXG4gICAgICAgIGhlaWdodDogMjNweDtcclxuICAgIH1cclxuICAgIC5vcmctbmFtZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIC5hZGp1c3RMb2dPcmdJbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDQzLjQlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgIG1pbi13aWR0aDogMjU4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50b3BEaXN0YW5jZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuYWRqdXN0TG9nRHJvcCAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAyODRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmFkanVzdC1sb2ctZiAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5hZGp1c3QtbG9nLWYgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8g5p+l6K+i6IyD5Zu0IOaXpeacn+e7hOS7tlxyXG46aG9zdC9kZWVwLyAuYWRqdXN0LUxvZy1jYWxlbmRhciAudWktY2FsZW5kYXIge1xyXG4gICAgd2lkdGg6IDIzLjIlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgLy8g5p+l6K+i6IyD5Zu0IOaXpeacn+e7hOS7tlxyXG4gICAgIDpob3N0L2RlZXAvIC5hZGp1c3QtTG9nLWNhbGVuZGFyIC51aS1jYWxlbmRhciB7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuICAgICA6aG9zdCAvZGVlcC8gLmFkanVzdExvZ0Ryb3AgLnVpLWRyb3Bkb3duIHtcclxuICAgICAgICB3aWR0aDogNzYlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYWRqdXN0TG9nSW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA3NiUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hZGp1c3RMb2dPcmdJbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDY5LjUlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/adjust-log/adjust-log.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/adjust-log/adjust-log.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AdjustLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustLogComponent", function() { return AdjustLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_adjust_log_bean_AdjustLog_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/adjust-log/bean/AdjustLog..bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/adjust-log/bean/AdjustLog..bean.ts");
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
 * @author fanhualing 2018-5-10 调整日志
 */







var AdjustLogComponent = /** @class */ (function () {
    function AdjustLogComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        this.adjustLogBean = new app_pages_tzb_custom_custom_marketing_custom_manage_adjust_log_bean_AdjustLog_bean__WEBPACK_IMPORTED_MODULE_5__["AdjustLogBean"]();
        this.first = 0;
        this.totalNum = 0;
        this.msgs = [];
        this.createDate_GE = null;
        this.createDate_LE = null;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        this.tablelist = [];
        this.userTreeDisplay = false;
        this.orgTreeDisplay = false;
        this.ownerDisplay = false;
        this.receiveDisplay = false;
        this.createrDisplay = false;
        this.ownerTreeDisplay = false;
        this.receiveTreeDisplay = false;
        this.createrTreeDisplay = false;
        this.custDisplay = false;
        this.adjustStatus = [];
        this.adjustType = [];
        this.ownerManagerList = [];
        this.receiverList = [];
        this.createrList = [];
        this.codeValues();
        this.adjustStatus = this.code['AdjustStatus'];
        this.adjustType = this.code['AdjustType'];
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.flagTip = s.targetId.charAt(s.targetId.length - 1);
    }
    AdjustLogComponent.prototype.ngOnInit = function () {
        this.adjustLogBean.pageSize = 10;
        this.adjustLogBean.pageNum = 1;
        // this.querySecle();
        this.querySecle2();
    };
    // 码值
    AdjustLogComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    // 查询初始化2
    AdjustLogComponent.prototype.querySecle2 = function () {
        this.adjustLogBean.pageSize = 10;
        this.adjustLogBean.pageNum = 1;
        this.first = 0;
        this.doQuery();
    };
    // 查询初始化
    AdjustLogComponent.prototype.querySecle = function () {
        this.adjustLogBean.pageSize = 10;
        this.adjustLogBean.pageNum = 1;
        this.first = 0;
        this.doQuery();
    };
    // 查询
    AdjustLogComponent.prototype.doQuery = function () {
        var _this = this;
        // 校验客户号
        if (this.adjustLogBean.custNo == '') {
            this.adjustLogBean.custNo = undefined;
        }
        var reg = /^[0-9]*$/;
        if (this.adjustLogBean.custNo != undefined) {
            if (this.adjustLogBean.custNo != '') {
                if (!reg.test(this.adjustLogBean.custNo)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入正确的客户号' });
                    return;
                }
            }
        }
        //校验客户姓名
        if (this.adjustLogBean.custName == '') {
            this.adjustLogBean.custName = undefined;
            // this.adjustLogBean.custName_LIKE = undefined;
        }
        var reg1 = /^[\u4e00-\u9fa5]{0,}$/;
        if (this.adjustLogBean.custName != undefined) {
            if (this.adjustLogBean.custName != '') {
                if (!reg1.test(this.adjustLogBean.custName)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入正确的客户姓名' });
                    return;
                }
            }
        }
        // // 客户姓名有值赋值
        // if (this.adjustLogBean.custName != undefined) {
        //   this.adjustLogBean.custName_LIKE = '%' + this.adjustLogBean.custName + '%';
        // }
        // 审批状态
        if (!this.adjustLogBean.stu) {
            var arr = [];
            arr.push('0');
            arr.push('1');
            arr.push('2');
            this.adjustLogBean.validStatusList = arr;
        }
        else {
            if (this.adjustLogBean.stu == '0') {
                var arr = [];
                arr.push('0');
                this.adjustLogBean.validStatusList = arr;
            }
            if (this.adjustLogBean.stu == '1') {
                var arr = [];
                arr.push('1');
                this.adjustLogBean.validStatusList = arr;
            }
            if (this.adjustLogBean.stu == '2') {
                var arr = [];
                arr.push('2');
                this.adjustLogBean.validStatusList = arr;
            }
        }
        // 调整类型
        if (!this.adjustLogBean.type) {
            this.adjustLogBean.operationType = undefined;
            this.adjustLogBean.disType = undefined;
        }
        else {
            if (this.adjustLogBean.type == '2') {
                this.adjustLogBean.operationType = '2';
                this.adjustLogBean.disType = undefined;
            }
            if (this.adjustLogBean.type == '3') {
                this.adjustLogBean.operationType = '3';
                this.adjustLogBean.disType = undefined;
            }
            if (this.adjustLogBean.type == '1') {
                this.adjustLogBean.disType = '1';
                this.adjustLogBean.operationType = '1';
            }
            if (this.adjustLogBean.type == '4') {
                this.adjustLogBean.disType = '2';
                this.adjustLogBean.operationType = '1';
            }
            if (this.adjustLogBean.type == '5') {
                this.adjustLogBean.disType = '3';
                this.adjustLogBean.operationType = '1';
            }
            if (this.adjustLogBean.type == '6') {
                this.adjustLogBean.disType = '4';
                this.adjustLogBean.operationType = '1';
            }
        }
        this.adjustLogBean.createDateGe = this.commfunc.transDateN(this.createDate_GE);
        this.adjustLogBean.createDateLe = this.commfunc.transDateN(this.createDate_LE);
        if (this.adjustLogBean.createDateGe == '') {
            this.adjustLogBean.createDateGe = undefined;
        }
        if (this.adjustLogBean.createDateLe == '') {
            this.adjustLogBean.createDateLe = undefined;
        }
        // 如果选了原主联系人，则传原主联系人机构，否则判断是否选择原主联系人所属机构，如果选了原主联系人所属机构，则传原主联系人所属机构
        // 原主联系人
        if (this.adjustLogBean.ownerManagerName == undefined || this.adjustLogBean.ownerManagerName == null) {
            if (this.ownerOrgName != undefined && this.ownerOrgName != null) {
                this.adjustLogBean.ownerOrgName = this.ownerOrgName;
                this.adjustLogBean.ownerOrgId = this.ownerOrgId;
            }
        }
        // 接收人
        if (this.adjustLogBean.receiverName == undefined && this.adjustLogBean.receiverName == null) {
            if (this.receiveOrgName != undefined && this.receiveOrgName != null) {
                this.adjustLogBean.receiveOrgId = this.receiveOrgId;
                this.adjustLogBean.receiveOrgName = this.receiveOrgName;
            }
        }
        // 调整人
        if (this.adjustLogBean.createrName == undefined && this.adjustLogBean.createrName == null) {
            if (this.createOrgName != undefined && this.createOrgName != null) {
                this.adjustLogBean.createOrgName = this.createOrgName;
                this.adjustLogBean.createOrgId = this.createOrgId;
            }
        }
        this.httpService.queryCustManagementInfo(this.adjustLogBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // 成功
                _this.tablelist = data.custList;
                _this.totalNum = data.total;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
        // // 校验客户号
        // if (this.adjustLogBean.custNo == '') {
        //   this.adjustLogBean.custNo = undefined;
        // }
        // var reg = /^[0-9]*$/;
        // if (this.adjustLogBean.custNo != undefined) {
        //   if (this.adjustLogBean.custNo != '') {
        //     if (!reg.test(this.adjustLogBean.custNo)) {
        //       this.msgs = [];
        //       this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入正确的客户号' });
        //       return
        //     }
        //   }
        // }
        // //校验客户姓名
        // if (this.adjustLogBean.custName == '') {
        //   this.adjustLogBean.custName = undefined;
        //   this.adjustLogBean.custName_LIKE = undefined;
        // }
        // var reg1 = /^[\u4e00-\u9fa5]{0,}$/;
        // if (this.adjustLogBean.custName != undefined) {
        //   if (this.adjustLogBean.custName != '') {
        //     if (!reg1.test(this.adjustLogBean.custName)) {
        //       this.msgs = [];
        //       this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入正确的客户姓名' });
        //       return
        //     }
        //   }
        // }
        // // 客户姓名有值赋值
        // if (this.adjustLogBean.custName != undefined) {
        //   this.adjustLogBean.custName_LIKE = '%' + this.adjustLogBean.custName + '%';
        // }
        // // 审批状态
        // if (!this.adjustLogBean.stu) {
        //   let arr = [];
        //   arr.push('0');
        //   arr.push('1');
        //   arr.push('2');
        //   this.adjustLogBean.validStatus_IN = arr;
        // } else {
        //   if (this.adjustLogBean.stu == '0') {
        //     let arr = [];
        //     arr.push('0');
        //     this.adjustLogBean.validStatus_IN = arr;
        //   }
        //   if (this.adjustLogBean.stu == '1') {
        //     let arr = [];
        //     arr.push('1');
        //     this.adjustLogBean.validStatus_IN = arr;
        //   }
        //   if (this.adjustLogBean.stu == '2') {
        //     let arr = [];
        //     arr.push('2');
        //     this.adjustLogBean.validStatus_IN = arr;
        //   }
        // }
        // // 调整类型
        // if (!this.adjustLogBean.type) {
        //   this.adjustLogBean.operationType = undefined;
        //   this.adjustLogBean.disType = undefined;
        // } else {
        //   if (this.adjustLogBean.type == '2') {
        //     this.adjustLogBean.operationType = '2';
        //     this.adjustLogBean.disType = undefined;
        //   }
        //   if (this.adjustLogBean.type == '3') {
        //     this.adjustLogBean.operationType = '3';
        //     this.adjustLogBean.disType = undefined;
        //   }
        //   if (this.adjustLogBean.type == '1') {
        //     this.adjustLogBean.disType = '1';
        //     this.adjustLogBean.operationType = '1';
        //   }
        //   if (this.adjustLogBean.type == '4') {
        //     this.adjustLogBean.disType = '2';
        //     this.adjustLogBean.operationType = '1';
        //   }
        //   if (this.adjustLogBean.type == '5') {
        //     this.adjustLogBean.disType = '3';
        //     this.adjustLogBean.operationType = '1';
        //   }
        //   if (this.adjustLogBean.type == '6') {
        //     this.adjustLogBean.disType = '4';
        //     this.adjustLogBean.operationType = '1';
        //   }
        // }
        // this.adjustLogBean.createDate_GE = this.commfunc.transDateN(this.createDate_GE);
        // this.adjustLogBean.createDate_LE = this.commfunc.transDateN(this.createDate_LE)
        // if (this.adjustLogBean.createDate_GE == '') {
        //   this.adjustLogBean.createDate_GE = undefined;
        // }
        // if (this.adjustLogBean.createDate_LE == '') {
        //   this.adjustLogBean.createDate_LE = undefined;
        // }
        // // 如果选了原主联系人，则传原主联系人机构，否则判断是否选择原主联系人所属机构，如果选了原主联系人所属机构，则传原主联系人所属机构
        // // 原主联系人
        // if( this.adjustLogBean.ownerManagerName == undefined || this.adjustLogBean.ownerManagerName == null){
        //   if(this.ownerOrgName != undefined && this.ownerOrgName != null){
        //     this.adjustLogBean.ownerOrgName = this.ownerOrgName;
        //     this.adjustLogBean.ownerOrgId = this.ownerOrgId;
        //   }
        // }
        // // 接收人
        // if( this.adjustLogBean.receiverName == undefined && this.adjustLogBean.receiverName == null){
        //   if(this.receiveOrgName != undefined && this.receiveOrgName != null){
        //     this.adjustLogBean.receiveOrgId = this.receiveOrgId;
        //     this.adjustLogBean.receiveOrgName = this.receiveOrgName;
        //   }
        // }
        // // 调整人
        // if( this.adjustLogBean.createrName == undefined && this.adjustLogBean.createrName == null){
        //   if(this.createOrgName != undefined && this.createOrgName != null){
        //      this.adjustLogBean.createOrgName = this.createOrgName;
        //      this.adjustLogBean.createOrgId = this.createOrgId;
        //   }
        // }
        // this.httpService.queryMainContactChangeByAnyKey(this.adjustLogBean).subscribe(data => {
        //   if (data.returnCode.code == 'success') {
        //     // 成功
        //     this.tablelist = data.resultList;
        //     this.totalNum = data.total;
        //   } else {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
        //   }
        // }, error => {
        //   this.msgs = [];
        //   this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        // })
    };
    // 开始、结束日期(调整时间)
    AdjustLogComponent.prototype.showPlanTime = function (param) {
        var _this = this;
        if (this.createDate_GE && this.createDate_LE) {
            if (this.createDate_GE > this.createDate_LE) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    if (param == "start") {
                        _this.createDate_GE = null;
                    }
                    else {
                        _this.createDate_LE = null;
                    }
                });
            }
        }
    };
    // 重置
    AdjustLogComponent.prototype.resetBtn = function () {
        this.adjustLogBean = new app_pages_tzb_custom_custom_marketing_custom_manage_adjust_log_bean_AdjustLog_bean__WEBPACK_IMPORTED_MODULE_5__["AdjustLogBean"]();
        this.createDate_GE = null;
        this.createDate_LE = null;
        this.adjustLogBean.pageNum = 1;
        this.adjustLogBean.pageSize = 10;
        this.first = 0;
        this.ownerManagerList = [];
        this.receiverList = [];
        this.createrList = [];
        this.ownerOrgName = undefined;
        this.ownerOrgId = undefined;
        this.receiveOrgId = undefined;
        this.receiveOrgName = undefined;
        this.createOrgId = undefined;
        this.createOrgName = undefined;
    };
    // 分页
    AdjustLogComponent.prototype.paginate = function (event) {
        this.adjustLogBean.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.adjustLogBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.adjustLogBean.pageSize;
        this.doQuery();
    };
    // 机构树
    AdjustLogComponent.prototype.openTree = function (param) {
        // 原主联系人
        if (param == 'owner') {
            this.ownerDisplay = true;
            this.ownerOrgInValue = 'adjustOrg';
        }
        // 接收人
        if (param == 'receive') {
            this.receiveDisplay = true;
            this.receiveOrgInValue = 'adjustOrg';
        }
        // 调整人
        if (param == 'creater') {
            this.createrDisplay = true;
            this.createrOrgInValue = 'adjustOrg';
        }
        // 客户
        if (param == 'cust') {
            this.custDisplay = true;
            this.custOrgInValue = 'adjustOrg';
        }
        this.orgTreeDisplay = true;
    };
    // 关闭-机构树
    AdjustLogComponent.prototype.contacttreeCall = function (event, param) {
        this.orgTreeDisplay = false;
        // 原主联系人
        if (param == 'owner') {
            this.ownerOrgId = event.orgId;
            this.ownerOrgName = event.orgName;
            // this.adjustLogBean.ownerOrgName = event.orgName;
            // this.adjustLogBean.ownerOrgId = event.orgId;
            this.queryPeopleById('owner');
            this.ownerDisplay = false;
        }
        // 接收人
        if (param == 'receive') {
            this.receiveOrgId = event.orgId;
            this.receiveOrgName = event.orgName;
            // this.adjustLogBean.receiveOrgId = event.orgId;
            // this.adjustLogBean.receiveOrgName = event.orgName;
            this.queryPeopleById('receive');
            this.receiveDisplay = false;
        }
        // 调整人
        if (param == 'creater') {
            this.createOrgId = event.orgId;
            this.createOrgName = event.orgName;
            // this.adjustLogBean.createOrgId = event.orgId;
            // this.adjustLogBean.createOrgName = event.orgName;
            this.queryPeopleById('creater');
            this.createrDisplay = false;
        }
        // 客户
        if (param == 'cust') {
            this.adjustLogBean.custOrgId = event.orgId;
            this.adjustLogBean.custOrgName = event.orgName;
            // this.queryPeopleById('creater');
            this.createrDisplay = false;
        }
    };
    // 关闭模态框
    AdjustLogComponent.prototype.onHideClose = function (param) {
        var dataParam = param;
        if (dataParam == 'org') {
            this.ownerDisplay = false;
            this.receiveDisplay = false;
            this.createrDisplay = false;
            this.custDisplay = false;
            this.orgTreeDisplay = false;
        }
        if (dataParam == 'user') {
            this.ownerTreeDisplay = false;
            this.receiveTreeDisplay = false;
            this.createrTreeDisplay = false;
            this.userTreeDisplay = false;
        }
    };
    // 选人
    AdjustLogComponent.prototype.openPeopleTree = function (param) {
        if (this.flagTip == '0') {
            this.ownerInValue = 'T0000';
            this.receiveInValue = 'T0000';
            this.createrInValue = 'T0000';
        }
        else {
            this.ownerInValue = 'C0000';
            this.receiveInValue = 'C0000';
            this.createrInValue = 'C0000';
        }
        // 原主联系人
        if (param == 'owner') {
            this.ownerTreeDisplay = true;
        }
        // 接收人
        if (param == 'receive') {
            this.receiveTreeDisplay = true;
        }
        // 调整人
        if (param == 'creater') {
            this.createrTreeDisplay = true;
        }
        this.userTreeDisplay = true;
    };
    // 关闭人员模态框
    AdjustLogComponent.prototype.workerCall = function (event, param) {
        this.userTreeDisplay = false;
        // 原主联系人
        if (param == 'owner') {
            this.ownerTreeDisplay = false;
            this.adjustLogBean.ownerManagerName = event[0].tellerName;
            this.adjustLogBean.ownerManagerId = event[0].tellerId;
            this.adjustLogBean.ownerOrgName = event[0].orgName;
            this.adjustLogBean.ownerOrgId = event[0].orgId;
        }
        // 接收人
        if (param == 'receive') {
            this.receiveTreeDisplay = false;
            this.adjustLogBean.receiver = event[0].tellerId;
            this.adjustLogBean.receiverName = event[0].tellerName;
            this.adjustLogBean.receiveOrgId = event[0].orgId;
            this.adjustLogBean.receiveOrgName = event[0].orgName;
        }
        // 调整人
        if (param == 'creater') {
            this.createrTreeDisplay = false;
            this.adjustLogBean.creater = event[0].tellerId;
            this.adjustLogBean.createrName = event[0].tellerName;
            this.adjustLogBean.createOrgId = event[0].orgId;
            this.adjustLogBean.createOrgName = event[0].orgName;
        }
    };
    // 按钮权限
    AdjustLogComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
        // return true;
    };
    // 接收联系人
    AdjustLogComponent.prototype.queryPeopleById = function (paramIn) {
        var _this = this;
        if (paramIn == 'owner') {
            var param = {
                orgId: this.adjustLogBean.ownerOrgId,
                pageSize: 1000000,
                tellerStatus: "0",
            };
            this.httpService.queryTellerByCombConditions(param).subscribe(function (data) {
                if (data.tellerList) {
                    _this.ownerManagerList = _this.commfunc.listToLabelvalue(data.tellerList, 'tellerName', 'tellerId');
                    _this.ownerManagerList.unshift({ label: "请选择", value: '' });
                }
            });
        }
        if (paramIn == 'receive') {
            var param = {
                orgId: this.adjustLogBean.receiveOrgId,
                pageSize: 1000000,
                tellerStatus: "0",
            };
            this.httpService.queryTellerByCombConditions(param).subscribe(function (data) {
                if (data.tellerList) {
                    _this.receiverList = _this.commfunc.listToLabelvalue(data.tellerList, 'tellerName', 'tellerId');
                    _this.receiverList.unshift({ label: "请选择", value: '' });
                }
            });
        }
        if (paramIn == 'creater') {
            var param = {
                orgId: this.adjustLogBean.createOrgId,
                pageSize: 1000000,
                tellerStatus: "0",
            };
            this.httpService.queryTellerByCombConditions(param).subscribe(function (data) {
                if (data.tellerList) {
                    _this.createrList = _this.commfunc.listToLabelvalue(data.tellerList, 'tellerName', 'tellerId');
                    _this.createrList.unshift({ label: "请选择", value: '' });
                }
            });
        }
    };
    AdjustLogComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    AdjustLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adjust-log',
            template: __webpack_require__(/*! ./adjust-log.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/adjust-log/adjust-log.component.html"),
            styles: [__webpack_require__(/*! ./adjust-log.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/adjust-log/adjust-log.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], AdjustLogComponent);
    return AdjustLogComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/adjust-log/bean/AdjustLog..bean.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/adjust-log/bean/AdjustLog..bean.ts ***!
  \****************************************************************************************************/
/*! exports provided: AdjustLogBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustLogBean", function() { return AdjustLogBean; });
/**
 * @author fanhualing 2018-5-10 调整日志
 */
var AdjustLogBean = /** @class */ (function () {
    function AdjustLogBean() {
    }
    return AdjustLogBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/batch-allot/batch-allot.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/batch-allot/batch-allot.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\" *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P017')\">\r\n  <div class=\"ui-g-12\" style=\"padding:0\">\r\n\r\n    <header-title Info=\"批量分配\"></header-title>\r\n\r\n    <div class=\"ui-g-12 padd-s\">\r\n      <div class=\"ui-g-12\">\r\n        <p-radioButton name=\"custType\" label=\"模板导入\" value=\"1\" [(ngModel)]=\"custType\" (click)=\"changeCustType('1')\" *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P017_11')\"></p-radioButton>\r\n        <p-radioButton name=\"custType\" label=\"用户调整\" value=\"2\" [(ngModel)]=\"custType\" (click)=\"changeCustType('2')\" *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P017_13')\"></p-radioButton>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\" *ngIf=\"Property1 && permissionCheck('SID00001_P020_P002_P003_P017_11')\">\r\n      <div class=\"ui-g-12 border-dashed\">\r\n        <div class=\"ui-g-6\">\r\n          <div>\r\n            <strong> 请先下载模板：</strong>\r\n            <br>\r\n            <a class=\"down-a\" href=\"{{DOWNLOAD}}/?fileUrl=/copdata/moban/&fileName=customerManageTransfer.xls\">下载模板</a>\r\n          </div>\r\n          <div class=\"down-title\">\r\n            Excel文件格式说明：\r\n            <br> 1、Excel文件中客户号和接收人为必输项。\r\n            <br> 2、Excel文件最大不能超过1000行记录。\r\n            <br> 3、更多注意事项请查看模板中的“填报说明”。\r\n            <br>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n          <strong class=\"down-div\">批量创建（Ecxel文件导入）</strong>\r\n          <br/>\r\n          <p-fileUpload accept=\".xls\" invalidFileTypeMessageDetail=\"只能上传Excel\" invalidFileTypeMessageSummary=\"\" chooseLabel=\"浏览\" uploadLabel=\"上传\"\r\n            cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"load($event)\">\r\n          </p-fileUpload>\r\n          <div *ngIf=\"files.length>0\">\r\n            <span *ngFor=\"let item of files\">{{item.name}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ui-g-12\" *ngIf=\"Propertym\">\r\n        <div class=\"ui-g-12 title-box\" *ngIf=\"approveNo == '0'\">\r\n          <span class=\"span-other\" *ngIf=\"PropertyJt\">当前处理均为行内客户，处理成功。</span>\r\n          <span class=\"span-other\" *ngIf=\"PropertyFh\">当前处理均为本分行客户，处理成功。</span>\r\n          <span class=\"span-total\">导入{{totalNum}}条，</span>\r\n          <span class=\"span-succ\">成功{{successNum}}条，</span>\r\n          <span class=\"span-fail\">失败{{failNum}}条；</span>\r\n          <button class=\"btn-class2\" pButton type=\"button\" label=\"分配\" (click)=\"doAllotImport()\"></button>\r\n        </div>\r\n        <div class=\"ui-g-12 title-box\" *ngIf=\"approveNo == '1'\">\r\n          <span class=\"span-other\">当前处理存在跨分行客户，请提交上级审批。</span>\r\n          <span class=\"span-total\">导入{{totalNum}}条，</span>\r\n          <span class=\"span-succ\">成功{{successNum}}条，</span>\r\n          <span class=\"span-fail\">失败{{failNum}}条；</span>\r\n          <button class=\"btn-class2\" pButton type=\"button\" label=\"分配\" (click)=\"doAllotImport()\"></button>\r\n        </div>\r\n        <div class=\"ui-g-12 title-box\" *ngIf=\"approveNo == '2'\">\r\n          <span class=\"span-other\">当前处理无成功数据，请根据失败信息校验上传文档。</span>\r\n          <span class=\"span-total\">导入{{totalNum}}条，</span>\r\n          <span class=\"span-succ\">成功{{successNum}}条，</span>\r\n          <span class=\"span-fail\">失败{{failNum}}条；</span>\r\n        </div>\r\n        \r\n        <div class=\"ui-g-12 text-left\">\r\n          失败明细：\r\n        </div>\r\n        <div class=\"ui-g-12 base-table\">\r\n          <p-dataTable [value]=\"failList\" class=\"table\" [emptyMessage]=\"tabMesg\" scrollable=\"true\" scrollHeight=\"300px\">\r\n            <p-column field=\"custNo\" header=\"客户号\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <a href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}\" target=\"_blank\">{{col.custNo}}</a>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"assigner\" header=\"接收人\"></p-column>\r\n            <p-column field=\"primaryContact\" header=\"原主联系人\"></p-column>\r\n            <p-column field=\"reason\" header=\"失败原因\"></p-column>\r\n          </p-dataTable>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 padd-s\" *ngIf=\"Property2 && permissionCheck('SID00001_P020_P002_P003_P017_13')\">\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 text-right\">\r\n          <label>被调整员工：</label>\r\n        </div>\r\n        <div class=\"ui-g-10\">\r\n          <input type=\"text\" pInputText [(ngModel)]=\"batchAllotBean.ownerManagerName\" disabled class=\"ownerInput\">\r\n          <button pButton type=\"button\" label=\"选择员工\" (click)=\"openTree('user')\"></button>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 text-right\">\r\n          <label>接收员工：</label>\r\n        </div>\r\n        <div class=\"ui-g-10\">\r\n          <input type=\"text\" pInputText [(ngModel)]=\"batchAllotBean.receiverName\" disabled class=\"ownerInput\">\r\n          <button pButton type=\"button\" label=\"选择员工\" (click)=\"openTree('user2')\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-4 ui-g-offset-3\" *ngIf=\"Property2 && permissionCheck('SID00001_P020_P002_P003_P017_13_11')\">\r\n      <button pButton type=\"button\" label=\"分配\" (click)=\"doAllot()\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<p-dialog [(visible)]=\"userTreeDisplay\" *ngIf=\"userTreeDisplay\" [responsive]=\"true\" [positionTop]=10 modal=\"modal\" class=\"batch-allot-sf\"\r\n  (onHide)=\"onHideClose()\">\r\n  <p-header>\r\n    员工列表\r\n  </p-header>\r\n  <app-query-user-list *ngIf=\"ownerTreeDisplay\" [in-value]=\"ownerInValue\" (outValue)=\"workerCall($event,'user')\"></app-query-user-list>\r\n  <app-query-user-list *ngIf=\"receiverTreeDisplay\" [in-value]=\"receiverInValue\" (outValue)=\"workerCall($event,'user2')\"></app-query-user-list>\r\n</p-dialog>\r\n\r\n<p-dialog [(visible)]=\"aaaa\" *ngIf=\"aaaa\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 class=\"batch-allot-sf\" (onHide)=\"onHideClose()\">\r\n  <p-header>\r\n    提交给\r\n  </p-header>\r\n  <app-examine-approval *ngIf=\"aaaa\" [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>\r\n\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/batch-allot/batch-allot.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/batch-allot/batch-allot.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-right {\n  text-align: right; }\n\n.btn-center {\n  text-align: center; }\n\n.table {\n  text-align: center; }\n\n:host /deep/ .batch-allot-sf .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .batch-allot-sf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n.text-left {\n  text-align: left; }\n\n.ownerInput {\n  width: 25%; }\n\na {\n  font-weight: bold; }\n\n.down-a {\n  display: block;\n  width: 81px;\n  padding: 5px 8px;\n  background-color: #19b0c8;\n  margin: 9px 0px 15px;\n  text-align: center;\n  color: #fff;\n  border-radius: 3px; }\n\n.down-title {\n  line-height: 22px;\n  color: #919191; }\n\n.down-div {\n  display: inline-block;\n  padding-bottom: 9px; }\n\n.title-box {\n  font-weight: bold;\n  text-align: right; }\n\n.title-box .span-succ {\n    color: #62baaa; }\n\n.title-box .span-fail {\n    color: #d58080; }\n\n.title-box .span-total {\n    color: #19b0c8; }\n\n.title-box .span-other {\n    color: #585a4c; }\n\n.btn-area {\n  text-align: left; }\n\n.btn-area .btn-class1 {\n    background: #f4c201; }\n\n.btn-area .btn-class2 {\n    background: #19b0c8; }\n\n:host/deep/ .ui-button.ui-button-text-icon-left {\n  width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1tYW5hZ2UvYmF0Y2gtYWxsb3QvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tbWFya2V0aW5nXFxjdXN0b20tbWFuYWdlXFxiYXRjaC1hbGxvdFxcYmF0Y2gtYWxsb3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSx1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFGckI7SUFJUSxjQUFjLEVBQUE7O0FBSnRCO0lBT1EsY0FBYyxFQUFBOztBQVB0QjtJQVVRLGNBQWMsRUFBQTs7QUFWdEI7SUFhUSxjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRHBCO0lBR1EsbUJBQW1CLEVBQUE7O0FBSDNCO0lBTVEsbUJBQW1CLEVBQUE7O0FBSTNCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1tYW5hZ2UvYmF0Y2gtYWxsb3QvYmF0Y2gtYWxsb3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmJ0bi1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmJhdGNoLWFsbG90LXNmIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmJhdGNoLWFsbG90LXNmIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4udGV4dC1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5vd25lcklucHV0IHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kb3duLWEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogODFweDtcclxuICAgIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG4gICAgbWFyZ2luOiA5cHggMHB4IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLmRvd24tdGl0bGUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogIzkxOTE5MTtcclxufVxyXG5cclxuLmRvd24tZGl2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctYm90dG9tOiA5cHg7XHJcbn1cclxuXHJcbi50aXRsZS1ib3gge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIC5zcGFuLXN1Y2Mge1xyXG4gICAgICAgIGNvbG9yOiAjNjJiYWFhO1xyXG4gICAgfVxyXG4gICAgLnNwYW4tZmFpbCB7XHJcbiAgICAgICAgY29sb3I6ICNkNTgwODA7XHJcbiAgICB9XHJcbiAgICAuc3Bhbi10b3RhbCB7XHJcbiAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICB9XHJcbiAgICAuc3Bhbi1vdGhlciB7XHJcbiAgICAgICAgY29sb3I6ICM1ODVhNGM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tYXJlYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgLmJ0bi1jbGFzczEge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNGMyMDE7XHJcbiAgICB9XHJcbiAgICAuYnRuLWNsYXNzMiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzE5YjBjODtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gIC51aS1idXR0b24udWktYnV0dG9uLXRleHQtaWNvbi1sZWZ0e1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/batch-allot/batch-allot.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/batch-allot/batch-allot.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: BatchAllotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchAllotComponent", function() { return BatchAllotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_batch_allot_bean_BatchAllot_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/batch-allot/bean/BatchAllot.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/batch-allot/bean/BatchAllot.bean.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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
 * @author fanhualing 2018-5-18 批量分配
 */







var BatchAllotComponent = /** @class */ (function () {
    function BatchAllotComponent(httpService, commfunc, router) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.msgs = [];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"];
        this.batchAllotBean = new app_pages_tzb_custom_custom_marketing_custom_manage_batch_allot_bean_BatchAllot_bean__WEBPACK_IMPORTED_MODULE_4__["BatchAllotBean"]();
        this.customBatchBean = new app_pages_tzb_custom_custom_marketing_custom_manage_batch_allot_bean_BatchAllot_bean__WEBPACK_IMPORTED_MODULE_4__["CustomBatchBean"]();
        // 文件
        this.files = [];
        this.fileList = [];
        // 上传、下载
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_CUS_DOWNLOAD"];
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_CUS_UPLOADCQ"];
        this.Property1 = false;
        this.Property2 = false;
        this.Propertym = false;
        // 选择员工
        this.userTreeDisplay = false;
        this.ownerTreeDisplay = false;
        this.receiverTreeDisplay = false;
        this.aaaa = false;
        this.PropertyJt = false;
        this.PropertyFh = false;
        this.custListNo = 0;
        this.user1 = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.user = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (this.user1.userId) {
            this.userId = this.user1.userId;
        }
        if (this.user1.orgId) {
            this.orgId = this.user1.orgId;
        }
        if (this.user.userName) {
            this.userName = this.user.userName;
        }
        if (this.user.orgName) {
            this.orgName = this.user.orgName;
        }
        // 权限控制
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.flagTip = s.targetId.charAt(s.targetId.length - 1);
        if (s.extParam.managePermission) {
            this.permission = s.extParam.managePermission;
        }
        if (s.extParam.operatingLevel) {
            this.op = s.extParam.operatingLevel; //层级
        }
        if (s.extParam.orgId) {
            this.rzjg = s.extParam.orgId;
        }
        if (this.op == 'GROUP') {
            this.PropertyFh = false;
            this.PropertyJt = true;
        }
        else if (this.op == 'BRANCH') {
            this.PropertyJt = false;
            this.PropertyFh = true;
        }
    }
    //初始化
    BatchAllotComponent.prototype.ngOnInit = function () {
        //判断是否有名单导入权限
        if (this.permissionCheck('SID00001_P020_P002_P003_P017_11')) {
            this.custType = '1';
            this.changeCustType('1');
        }
        else if (this.permissionCheck('SID00001_P020_P002_P003_P017_13')) {
            this.custType = '2';
            this.changeCustType('2');
        }
    };
    //更改查询条件
    BatchAllotComponent.prototype.changeCustType = function (param) {
        this.doEmpty();
        if (param == '1') {
            this.Property1 = true;
            this.Propertym = false;
            this.Property2 = false;
            if (this.files) {
                this.files = [];
            }
        }
        if (param == '2') {
            this.Property1 = false;
            this.Property2 = true;
            this.Propertym = false;
        }
    };
    // 按模板-文件上传
    BatchAllotComponent.prototype.load = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.Propertym = false;
            this.files = [];
            this.files.push(file);
        }
        if (event.xhr.response) {
            this.fileList = JSON.parse(event.xhr.response);
            if (this.fileList.success == false) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: this.fileList.message });
                this.files = [];
                this.Propertym = false;
                return;
            }
        }
        if (this.fileList[0]) {
            this.customBatchBean.fileUrl = this.fileList[0].fileUrl;
            this.customBatchBean.fileName = this.fileList[0].fileName;
            this.doQueryList();
        }
    };
    // 按模板-查询导入客户信息
    BatchAllotComponent.prototype.doQueryList = function () {
        var _this = this;
        // 入参(‘分配’并按‘客户号分配’)标识
        this.customBatchBean.operationType = '1';
        this.customBatchBean.disType = '2';
        this.customBatchBean.ownerManagerId = undefined;
        this.Propertym = true;
        this.httpService.queryCustManageCustInfo(this.customBatchBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.approveNo = data.approveNo;
                _this.failList = data.batchCustFailList;
                _this.totalNum = data.total;
                _this.successNum = data.successTotal;
                _this.failNum = data.failTotal;
                _this.custListNo = data.successTotal;
                _this.batchPrimaryId = data.batchPrimaryId;
                _this.batchAllotBean.approveNo = data.approveNo;
                _this.batchAllotBean.custListNo = data.successTotal;
                _this.batchAllotBean.batchPrimaryId = data.batchPrimaryId;
                _this.Propertym = true;
            }
            else {
                _this.Propertym = false;
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.Propertym = false;
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务异常' });
        });
    };
    // 按模板调整
    BatchAllotComponent.prototype.doAllotImport = function () {
        if (this.custListNo <= 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '分配客户列表为空' });
            return;
        }
        else {
            // 是否走审批
            this.isGoApprove(this.approveNo, 'template');
        }
    };
    // 是否走审批
    BatchAllotComponent.prototype.isGoApprove = function (param, param2) {
        this.batchAllotBean.approveNo = this.approveNo;
        this.batchAllotBean.creater = this.userId;
        this.batchAllotBean.createrName = this.userName;
        this.batchAllotBean.createOrgId = this.orgId;
        ;
        this.batchAllotBean.createOrgName = this.orgName;
        // 按模板
        if (param2 == 'template') {
            this.batchAllotBean.operationType = '1';
            this.batchAllotBean.disType = '2';
        }
        // 按用户
        else if (param2 == 'user') {
            this.batchAllotBean.operationType = '1';
            this.batchAllotBean.disType = '3';
        }
        var paramIn = param;
        // 无需走审批
        if (paramIn == '0') {
            this.doSubmit(param2);
        }
        // 需要走审批
        if (paramIn == '1') {
            this.waitSelUserList = this.commfunc.query('KHFPLC', {});
            if (!this.waitSelUserList.erro) {
                this.outVal = this.waitSelUserList.waitSelUserList;
                var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
                var a = commonHeader.extParam.specifyNextOpers;
                if (this.waitSelUserList.display == true && (a == undefined || a == '' || a == null)) {
                    this.aaaa = true; // 要选人
                }
                else {
                    if (this.custType == '1') {
                        this.doSubmit('template');
                    }
                    if (this.custType == '2') {
                        this.doSubmit('user');
                    }
                }
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
            }
        }
    };
    // 数据返回给后台
    BatchAllotComponent.prototype.doSubmit = function (param2) {
        var _this = this;
        this.httpService.custManagementBatchProcess(this.batchAllotBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.doEmpty();
                if (param2 == 'template') {
                    _this.Property1 = true;
                    _this.custType = '1';
                    _this.changeCustType('1');
                }
                else {
                    _this.Property2 = true;
                    _this.custType = '2';
                    _this.changeCustType('2');
                }
            }
            else {
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                _this.doEmpty();
                if (param2 == 'template') {
                    _this.Property1 = true;
                    _this.custType = '1';
                    _this.changeCustType('1');
                }
                else {
                    _this.Property2 = true;
                    _this.custType = '2';
                    _this.changeCustType('2');
                }
            }
        }, function (error) {
            var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
            if (s.extParam.specifyNextOpers) {
                delete s.extParam.specifyNextOpers;
                var commonHeader = s;
                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
            }
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            _this.doEmpty();
            if (param2 == 'template') {
                _this.Property1 = true;
                _this.custType = '1';
                _this.changeCustType('1');
            }
            else {
                _this.Property2 = true;
                _this.custType = '2';
                _this.changeCustType('2');
            }
        });
    };
    // 选择员工
    BatchAllotComponent.prototype.openTree = function (param) {
        this.ownerTreeDisplay = false;
        this.receiverTreeDisplay = false;
        this.userTreeDisplay = false;
        if (param == 'user') {
            this.ownerTreeDisplay = true;
            this.userTreeDisplay = !this.userTreeDisplay;
            // 如果是分行-判断村镇还是台行，如果是支行或部门，传任职机构
            if (this.op == 'BRANCH') {
                if (this.flagTip == '0') {
                    this.ownerInValue = 'T0000';
                }
                else {
                    this.ownerInValue = 'C0000';
                }
            }
            else {
                this.ownerInValue = this.rzjg;
            }
        }
        if (param == 'user2') {
            this.receiverTreeDisplay = true;
            this.userTreeDisplay = !this.userTreeDisplay;
            this.receiverInValue = {
                orgId: this.rzjg,
                tellerStatus: '0',
            };
        }
    };
    // 关闭-员工模态框
    BatchAllotComponent.prototype.workerCall = function (item, param) {
        if (param == 'user') {
            if (item.length > 0) {
                this.batchAllotBean.ownerManagerId = item[0].tellerId;
                this.batchAllotBean.ownerManagerName = item[0].tellerName;
                this.batchAllotBean.ownerOrgId = item[0].orgId;
                this.batchAllotBean.ownerOrgName = item[0].orgName;
            }
            this.ownerTreeDisplay = false;
            this.userTreeDisplay = false;
        }
        if (param == 'user2') {
            if (item.length > 0) {
                this.batchAllotBean.receiver = item[0].tellerId;
                this.batchAllotBean.receiverName = item[0].tellerName;
                this.batchAllotBean.receiveOrgId = item[0].orgId;
                this.batchAllotBean.receiveOrgName = item[0].orgName;
            }
            this.receiverTreeDisplay = false;
            this.userTreeDisplay = false;
        }
    };
    // 按用户调整
    BatchAllotComponent.prototype.doAllot = function () {
        var _this = this;
        // 判断被调整人
        if (!this.batchAllotBean.ownerManagerId) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '被调整员工不能为空' });
            return;
        }
        if (!this.batchAllotBean.receiver) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '接收员工不能为空' });
            return;
        }
        // 操作人
        this.batchAllotBean.creater = this.userId;
        this.batchAllotBean.createrName = this.userName;
        this.batchAllotBean.createOrgId = this.orgId;
        this.batchAllotBean.createOrgName = this.orgName;
        this.batchAllotBean.operationType = '1'; //按用户查询
        this.batchAllotBean.disType = '3'; //按用户查询
        this.httpService.custManagementBatchHandle(this.batchAllotBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.approveNo = data.approveNo;
                _this.custListNo = data.custListNo;
                _this.batchAllotBean.approveNo = data.approveNo;
                _this.batchAllotBean.custListNo = data.custListNo;
                _this.isGoApprove(_this.approveNo, 'user');
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务异常' });
        });
    };
    // 选人回调
    BatchAllotComponent.prototype.outValueCall = function (event) {
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        if (this.custType == '1') {
            this.doSubmit('template');
        }
        if (this.custType == '2') {
            this.doSubmit('user');
        }
    };
    // 关闭选人框
    BatchAllotComponent.prototype.outDisplayCall = function (event) {
        this.aaaa = false;
    };
    // 关闭模态框
    BatchAllotComponent.prototype.onHideClose = function () {
        this.Propertym = false;
        if (this.files) {
            this.files = [];
        }
    };
    //清空
    BatchAllotComponent.prototype.doEmpty = function () {
        this.batchAllotBean = new app_pages_tzb_custom_custom_marketing_custom_manage_batch_allot_bean_BatchAllot_bean__WEBPACK_IMPORTED_MODULE_4__["BatchAllotBean"]();
        this.Propertym = false;
        this.Property2 = false;
        this.Property1 = false;
        this.totalNum = null;
        this.successNum = null;
        this.failNum = null;
        this.failList = [];
        this.custListNo = 0;
        if (this.files) {
            this.files = [];
        }
    };
    // 点击客户号跳转360视图
    BatchAllotComponent.prototype.toCustView = function (data) {
        this.commfunc.setSessionData('custNo', data.custNo);
        this.router.navigate(['pages/custom-view']);
    };
    // 按钮权限
    BatchAllotComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    BatchAllotComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    BatchAllotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-batch-allot',
            template: __webpack_require__(/*! ./batch-allot.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/batch-allot/batch-allot.component.html"),
            styles: [__webpack_require__(/*! ./batch-allot.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/batch-allot/batch-allot.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_6__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BatchAllotComponent);
    return BatchAllotComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/batch-allot/bean/BatchAllot.bean.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/batch-allot/bean/BatchAllot.bean.ts ***!
  \*****************************************************************************************************/
/*! exports provided: BatchAllotBean, CustomBatchBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchAllotBean", function() { return BatchAllotBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomBatchBean", function() { return CustomBatchBean; });
var BatchAllotBean = /** @class */ (function () {
    function BatchAllotBean() {
    }
    return BatchAllotBean;
}());

var CustomBatchBean = /** @class */ (function () {
    function CustomBatchBean() {
    }
    return CustomBatchBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-allot/bean/CusDoAllot.bean.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-allot/bean/CusDoAllot.bean.ts ***!
  \******************************************************************************************************/
/*! exports provided: CusDoAllotBean, CustomAllotExamBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusDoAllotBean", function() { return CusDoAllotBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAllotExamBean", function() { return CustomAllotExamBean; });
var CusDoAllotBean = /** @class */ (function () {
    function CusDoAllotBean() {
    }
    return CusDoAllotBean;
}());

var CustomAllotExamBean = /** @class */ (function () {
    function CustomAllotExamBean() {
    }
    return CustomAllotExamBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-allot/cus-do-allot.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-allot/cus-do-allot.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g padding-zero module\" *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P015')\">\r\n  <div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'查询条件'\"></header-title>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-6 ui-g-offset-4\">\r\n      <label>客户号：</label>\r\n      <input type=\"text\" pInputText [(ngModel)]=\"cusDoAllotBean.custNo\">\r\n      <button pButton type=\"button\" label=\"查询\" (click)=\"doQuery()\"></button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'客户信息'\"></header-title>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 list-s\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-2 text-right\">\r\n        客户号：\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <span *ngIf=\"tablelist.length > 0\">\r\n          <a href=\"/#/pages/custom-view?custNo={{compileStr(tablelist[0].custNo)}}\" target=\"_blank\">{{tablelist[0].custNo}}</a>\r\n        </span>\r\n      </div>\r\n      <div class=\"ui-g-2 text-right\">\r\n        客户姓名：\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <span *ngIf=\"tablelist.length > 0\">{{tablelist[0].custName}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-2 text-right\">\r\n        证件类型：\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <span *ngIf=\"tablelist.length > 0\"> {{tablelist[0].idenType | codeValuePie:cert_type}}</span>\r\n      </div>\r\n      <div class=\"ui-g-2 text-right\">\r\n        证件号码：\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <span *ngIf=\"tablelist.length > 0\">{{tablelist[0].idenNum}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-2 text-right\">\r\n        手机号码：\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <span *ngIf=\"tablelist.length > 0\">{{tablelist[0].tel}}</span>\r\n      </div>\r\n      <div class=\"ui-g-2 text-right\">\r\n        主联系人：\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <span *ngIf=\"tablelist.length > 0 && OwnerDisplay\">{{tablelist[0].ownerManagerName}}({{tablelist[0].ownerOrgName}})</span>\r\n        <span *ngIf=\"tablelist.length > 0 && !OwnerDisplay\">-</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-2 text-right\">\r\n        存款日均(本年)：\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <span *ngIf=\"tablelist.length > 0\">{{tablelist[0].balDlyAvgByYear}}</span>\r\n      </div>\r\n      <div class=\"ui-g-2 text-right\">\r\n        贷款日均(本年)：\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <span *ngIf=\"tablelist.length > 0\">{{tablelist[0].loanDlyAvgByYear}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-2 text-right\">\r\n        当前是否持有信用卡：\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <span *ngIf=\"tablelist.length > 0 && tablelist[0].partyTypeId == '1'\">{{tablelist[0].isHoldCrdCard | codeValuePie:isHoldCrdCard}}</span>\r\n        <span *ngIf=\"tablelist.length > 0 && tablelist[0].partyTypeId == '2'\">/</span>\r\n      </div>\r\n      <div class=\"ui-g-2 text-right\">\r\n        理财余额(当前)：\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <span *ngIf=\"tablelist.length > 0\">{{tablelist[0].finBal}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'接收人信息'\"></header-title>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-2 text-right\">\r\n      <label>接收机构：</label>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <input type=\"text\" pInputText class='adreceiveInput' [(ngModel)]=\"receiveOrgName\" disabled/>\r\n      <button type=\"button\" (click)=\"chooseOrg()\" pButton label=\"选择机构\"></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-2 text-right\">\r\n      <label>接收人：</label>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n      <input type=\"text\" class='adreceiveOrgInput' pInputText [(ngModel)]=\"customAllotDialogBean.receiverName\" disabled/>\r\n      <button type=\"button\" (click)=\"chooseWorker()\" pButton label=\"选择员工\"></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-2 text-right\">\r\n      <label>备注：</label>\r\n    </div>\r\n    <div class=\"ui-g-6 \">\r\n      <textarea rows=\"5\" cols=\"80\" pInputTextarea [(ngModel)]=\"customAllotDialogBean.remarks\"></textarea>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12 btn-center\" *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P015_11')\">\r\n    <div class=\"ui-g-6 ui-g-offset-5\">\r\n      <button pButton type=\"button\" label=\"我要分配\" (click)=\"doAllot()\"></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- 审批人 -->\r\n<p-dialog [(visible)]=\"aaaa\" *ngIf=\"aaaa\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 class=\"cus-do-allot-sf\" (onHide)=\"onHideClose('people')\">\r\n  <p-header>\r\n    提交给\r\n  </p-header>\r\n  <app-examine-approval *ngIf=\"aaaa\" [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>\r\n\r\n<!--机构树-->\r\n<p-dialog *ngIf='orgTreeDisplay' [(visible)]=\"orgTreeDisplay\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 class=\"cus-do-allot-sf\"\r\n  (onHide)=\"onHideClose('org')\">\r\n  <p-header>机构树</p-header>\r\n  <org-tree-component *ngIf='orgTreeDisplay' (outValue)=\"treeCall($event)\"></org-tree-component>\r\n</p-dialog>\r\n\r\n<!-- 选择机构树的弹窗 -->\r\n<p-dialog [(visible)]=\"display\" *ngIf=\"display\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 class=\"cus-do-allot-sf\"\r\n  (onHide)=\"onHideClose('user')\">\r\n  <p-header>\r\n    员工列表\r\n  </p-header>\r\n  <app-query-user-list *ngIf=\"display\" [in-value]=\"ownerInValue\" (outValue)=\"perInfor($event)\"></app-query-user-list>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-allot/cus-do-allot.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-allot/cus-do-allot.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-center {\n  margin-top: 20px; }\n\n.text-right {\n  text-align: right; }\n\n.table {\n  text-align: center; }\n\n.list-s {\n  margin-top: 20px;\n  margin-bottom: 40px; }\n\ninput {\n  width: 200px !important; }\n\n.adreceiveInput {\n  width: 40% !important; }\n\n.adreceiveOrgInput {\n  width: 40% !important; }\n\na {\n  color: #19b0c8; }\n\n:host /deep/ .cus-do-allot-sf .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .cus-do-allot-sf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1tYW5hZ2UvY3VzLWRvLWFsbG90L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLW1hcmtldGluZ1xcY3VzdG9tLW1hbmFnZVxcY3VzLWRvLWFsbG90XFxjdXMtZG8tYWxsb3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLHVCQUF1QjtFQUN2QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1tYXJrZXRpbmcvY3VzdG9tLW1hbmFnZS9jdXMtZG8tYWxsb3QvY3VzLWRvLWFsbG90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1jZW50ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saXN0LXMge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWRyZWNlaXZlSW5wdXQge1xyXG4gICAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWRyZWNlaXZlT3JnSW5wdXQge1xyXG4gICAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjMTliMGM4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmN1cy1kby1hbGxvdC1zZiAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5jdXMtZG8tYWxsb3Qtc2YgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-allot/cus-do-allot.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-allot/cus-do-allot.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CusDoAllotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusDoAllotComponent", function() { return CusDoAllotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_allot_bean_CusDoAllot_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-allot/bean/CusDoAllot.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-allot/bean/CusDoAllot.bean.ts");
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
 * @author fanhualing 2018-5-9 客户分配
 */





var CusDoAllotComponent = /** @class */ (function () {
    function CusDoAllotComponent(httpService, commfunc) {
        var _this = this;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.cusDoAllotBean = new app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_allot_bean_CusDoAllot_bean__WEBPACK_IMPORTED_MODULE_4__["CusDoAllotBean"]();
        this.customAllotDialogBean = new app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_allot_bean_CusDoAllot_bean__WEBPACK_IMPORTED_MODULE_4__["CustomAllotExamBean"]();
        this.first = 0; //分页控制
        this.totalNum = 0;
        this.msgs = [];
        this.tablelist = [];
        this.cert_type = [];
        this.isHoldCrdCard = [];
        this.chooseData = [];
        this.display = false;
        this.iskzh = '';
        this.iszlxr = '';
        this.iskfh = '';
        this.approveNo = '';
        this.dfCustno = '';
        this.dfOrg = '';
        this.aaaa = false;
        this.OwnerDisplay = false;
        this.orgTreeDisplay = false;
        this.allotCert = [];
        this.codeValues();
        this.cert_type = this.code['CERT_TYPE'];
        this.cert_type.forEach(function (element) {
            if (element.value != '') {
                _this.allotCert.push(element);
            }
        });
        this.isHoldCrdCard = this.code['IsHoldCrdCard'];
        this.user1 = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.user = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (this.user1.userId) {
            this.userId = this.user1.userId;
        }
        if (this.user1.orgId) {
            this.orgId = this.user1.orgId;
        }
        if (this.user.userName) {
            this.userName = this.user.userName;
        }
        if (this.user.orgName) {
            this.orgName = this.user.orgName;
        }
    }
    CusDoAllotComponent.prototype.ngOnInit = function () {
    };
    // 码值
    CusDoAllotComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    // 查询
    CusDoAllotComponent.prototype.doQuery = function () {
        var _this = this;
        // 清空数据
        this.tablelist = [];
        this.chooseData = [];
        // 校验客户号
        var reg = /^[0-9]*$/;
        if (this.cusDoAllotBean.custNo == undefined ||
            this.cusDoAllotBean.custNo == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入客户号!' });
            return;
        }
        if (this.cusDoAllotBean.custNo != undefined) {
            if (this.cusDoAllotBean.custNo != '') {
                if (!reg.test(this.cusDoAllotBean.custNo)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '客户号只能为数字' });
                    return;
                }
                if (this.cusDoAllotBean.custNo.length != 10) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入10位数字的客户号' });
                    return;
                }
            }
        }
        this.cusDoAllotBean.operationType = '1'; // 操作类型-分配
        this.cusDoAllotBean.disType = '1'; // 分配场景编号-按客户号分配
        this.httpService.queryCustManageCustInfo(this.cusDoAllotBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.custList.length > 0) {
                    _this.tablelist = data.custList;
                    _this.chooseData = _this.tablelist;
                    if (_this.tablelist[0].ownerManagerName == '' || _this.tablelist[0].ownerManagerName == null) {
                        _this.OwnerDisplay = false;
                    }
                    else {
                        _this.OwnerDisplay = true;
                    }
                }
                else {
                    _this.chooseData = [];
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 单户分配
    CusDoAllotComponent.prototype.doAllot = function () {
        if (this.chooseData.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择客户！' });
            return;
        }
        else {
            // 选择审批人
            this.doChoosePeople();
        }
    };
    // 提交服务
    CusDoAllotComponent.prototype.doChoosePeople = function () {
        var _this = this;
        if (this.receiveOrgName == '' || this.receiveOrgName == undefined || this.receiveOrgName == null) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择接收机构！' });
            return;
        }
        if (this.customAllotDialogBean.receiver == '' || this.customAllotDialogBean.receiver == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择接收人！' });
            return;
        }
        // 入参(‘分配’并按‘客户号分配’)标识
        this.customAllotDialogBean.operationType = '1';
        this.customAllotDialogBean.disType = '1';
        // 接收人
        this.customAllotDialogBean.creater = this.userId;
        this.customAllotDialogBean.createrName = this.userName;
        this.customAllotDialogBean.createOrgId = this.orgId;
        this.customAllotDialogBean.createOrgName = this.orgName;
        // 客户信息
        this.customAllotDialogBean.custList = this.chooseData;
        // 判断是否走审批
        this.httpService.custManageApprCandidate(this.customAllotDialogBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dfCustno = data.dfCustno;
                _this.dfOrg = data.dfOrg;
                _this.approveNo = data.approveNo;
                _this.iszlxr = data.iszlxr;
                _this.iskzh = data.iskzh;
                _this.iskfh = data.iskfh;
                _this.customAllotDialogBean['approveNo'] = _this.approveNo;
                _this.customAllotDialogBean['iszlxr'] = _this.iszlxr;
                _this.customAllotDialogBean['iskzh'] = _this.iskzh;
                _this.customAllotDialogBean['iskfh'] = _this.iskfh;
                _this.customAllotDialogBean['dfCustno'] = _this.dfCustno;
                _this.customAllotDialogBean['dfOrg'] = _this.dfOrg;
                if (data.approveNo == '1') {
                    _this.waitSelUserList = _this.commfunc.query('KHFPLC', { iszlxr: _this.iszlxr, iskzh: _this.iskzh, iskfh: _this.iskfh, dfCustno: _this.dfCustno, dfOrg: _this.dfOrg });
                    if (!_this.waitSelUserList.erro) {
                        _this.outVal = _this.waitSelUserList.waitSelUserList;
                        var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        var a = commonHeader.extParam.specifyNextOpers;
                        if (_this.waitSelUserList.display == true && (a == undefined || a == '' || a == null)) {
                            _this.aaaa = true; // 要选人
                        }
                        else {
                            _this.doSubmit();
                        }
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: _this.waitSelUserList.erro });
                    }
                }
                else {
                    _this.doSubmit();
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                _this.doEmpty();
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            _this.doEmpty();
        });
    };
    // 数据返回给后台
    CusDoAllotComponent.prototype.doSubmit = function () {
        var _this = this;
        this.httpService.custManageDataLandHandle(this.customAllotDialogBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.doEmpty();
            }
            else {
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                _this.doEmpty();
            }
        }, function (error) {
            var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
            if (s.extParam.specifyNextOpers) {
                delete s.extParam.specifyNextOpers;
                var commonHeader = s;
                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
            }
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            _this.doEmpty();
        });
    };
    // 点击叉号
    CusDoAllotComponent.prototype.onHideClose = function (param) {
        if (param == 'org') {
            this.orgTreeDisplay = false;
        }
        if (param == 'display') {
            this.display = false;
        }
        if (param == 'people') {
            this.aaaa = false;
            this.doEmpty();
        }
    };
    // 关闭选人框
    CusDoAllotComponent.prototype.outDisplayCall = function (event) {
        this.aaaa = false;
        this.display = false;
    };
    // 选完人后回调
    CusDoAllotComponent.prototype.outValueCall = function (event) {
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.doSubmit();
    };
    CusDoAllotComponent.prototype.addCallBean = function (event) {
        this.outValBean = event;
        this.tablelist = [];
    };
    // 清空
    CusDoAllotComponent.prototype.doEmpty = function () {
        this.tablelist = [];
        this.chooseData = [];
        this.customAllotDialogBean = new app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_allot_bean_CusDoAllot_bean__WEBPACK_IMPORTED_MODULE_4__["CustomAllotExamBean"]();
        this.cusDoAllotBean.custNo = undefined;
        this.receiveOrgName = undefined;
        this.receiveOrgId = undefined;
    };
    // 选择员工
    CusDoAllotComponent.prototype.chooseWorker = function () {
        if (this.receiveOrgId == '' || this.receiveOrgId == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请先选择接收机构！' });
            return;
        }
        else {
            this.display = true;
            this.ownerInValue = this.receiveOrgId;
        }
    };
    // 选择机构
    CusDoAllotComponent.prototype.chooseOrg = function () {
        this.orgTreeDisplay = true;
    };
    // 机构树回调
    CusDoAllotComponent.prototype.treeCall = function (param) {
        this.orgTreeDisplay = false;
        this.receiveOrgName = param.orgName;
        this.receiveOrgId = param.orgId;
        this.customAllotDialogBean.receiverName = '';
        this.customAllotDialogBean.receiver = '';
    };
    // 员工回调
    CusDoAllotComponent.prototype.perInfor = function (item) {
        this.display = false;
        if (item.length > 0) {
            this.customAllotDialogBean.receiverName = item[0].tellerName;
            this.customAllotDialogBean.receiver = item[0].tellerId;
            this.customAllotDialogBean.receiveOrgName = item[0].orgName;
            this.customAllotDialogBean.receiveOrgId = item[0].orgId;
        }
    };
    // 按钮权限
    CusDoAllotComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CusDoAllotComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    CusDoAllotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cus-do-allot',
            template: __webpack_require__(/*! ./cus-do-allot.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-allot/cus-do-allot.component.html"),
            styles: [__webpack_require__(/*! ./cus-do-allot.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-allot/cus-do-allot.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], CusDoAllotComponent);
    return CusDoAllotComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-apply/bean/CusDoApply.bean.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-apply/bean/CusDoApply.bean.ts ***!
  \******************************************************************************************************/
/*! exports provided: CusDoApplyBean, CusDoApplyExamBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusDoApplyBean", function() { return CusDoApplyBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusDoApplyExamBean", function() { return CusDoApplyExamBean; });
var CusDoApplyBean = /** @class */ (function () {
    function CusDoApplyBean() {
    }
    return CusDoApplyBean;
}());

var CusDoApplyExamBean = /** @class */ (function () {
    function CusDoApplyExamBean() {
    }
    return CusDoApplyExamBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-apply/cus-do-apply.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-apply/cus-do-apply.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"applyPage\" *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P011')\">\r\n  <div class=\"ui-g padding-zero module\">\r\n    <div class=\"ui-g-12\">\r\n      <header-title [Info]=\"'查询条件'\"></header-title>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-6 ui-g-offset-4\">\r\n        <label>客户号：</label>\r\n        <input type=\"text\" pInputText [(ngModel)]=\"cusDoApplyBean.custNo\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"doQuery()\"></button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n      <header-title [Info]=\"'客户信息'\"></header-title>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 list-s\">\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 text-right\">\r\n          客户号：\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <span *ngIf=\"tablelist.length > 0\">\r\n            <a href=\"/#/pages/custom-view?custNo={{compileStr(tablelist[0].custNo)}}\" target=\"_blank\">{{tablelist[0].custNo}}</a>\r\n          </span>\r\n        </div>\r\n        <div class=\"ui-g-2 text-right\">\r\n          客户姓名：\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <span *ngIf=\"tablelist.length > 0\">{{tablelist[0].custName}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 text-right\">\r\n          证件类型：\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <span *ngIf=\"tablelist.length > 0\"> {{tablelist[0].idenType | codeValuePie:applyCert}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 text-right\">\r\n          证件号码：\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <span *ngIf=\"tablelist.length > 0\">{{tablelist[0].idenNum}}</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 text-right\">\r\n          客户所属机构：\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <span *ngIf=\"tablelist.length > 0\">{{tablelist[0].custOrgName}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 text-right\">\r\n          主联系人：\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <span *ngIf=\"tablelist.length > 0 && OwnerDisplay\">{{tablelist[0].ownerManagerName}}</span>\r\n          <span *ngIf=\"tablelist.length > 0 && !OwnerDisplay\">-</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 text-right\">\r\n          手机号码：\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <span *ngIf=\"tablelist.length > 0\">{{tablelist[0].tel}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n      <header-title [Info]=\"'接收人信息'\"></header-title>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 text-right\">\r\n          接收机构：\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <span>{{orgName}}</span>\r\n        </div>\r\n        <div class=\"ui-g-2 text-right\">\r\n          接收人：\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n          <span>{{userName}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\" *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P011_11')\">\r\n      <div class=\"ui-g-6 ui-g-offset-5\">\r\n        <button pButton type=\"button\" label=\"我要申领\" (click)=\"doApply()\"></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- 选择审批人 -->\r\n<p-dialog [(visible)]=\"aaaa\" *ngIf=\"aaaa\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 class=\"cus-do-applyf\" (onHide)=\"onHideClose()\">\r\n  <p-header>\r\n    提交给\r\n  </p-header>\r\n  <app-examine-approval *ngIf=\"aaaa\" [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-apply/cus-do-apply.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-apply/cus-do-apply.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".applyPage .btn-center {\n  text-align: center;\n  margin-top: 20px; }\n\n.applyPage .text-right {\n  text-align: right; }\n\n.applyPage .table {\n  text-align: center; }\n\n.applyPage .list-s {\n  margin-top: 20px;\n  margin-bottom: 40px; }\n\n.applyPage input {\n  width: 200px !important; }\n\n.applyPage a {\n  color: #19b0c8; }\n\n:host /deep/ .cus-do-applyf .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .cus-do-applyf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1tYW5hZ2UvY3VzLWRvLWFwcGx5L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLW1hcmtldGluZ1xcY3VzdG9tLW1hbmFnZVxcY3VzLWRvLWFwcGx5XFxjdXMtZG8tYXBwbHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBSHhCO0VBTVEsaUJBQWlCLEVBQUE7O0FBTnpCO0VBU1Esa0JBQWtCLEVBQUE7O0FBVDFCO0VBWVEsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQWIzQjtFQWdCUSx1QkFBdUIsRUFBQTs7QUFoQi9CO0VBbUJRLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSx1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1tYW5hZ2UvY3VzLWRvLWFwcGx5L2N1cy1kby1hcHBseS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBseVBhZ2Uge1xyXG4gICAgLmJ0bi1jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnRhYmxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubGlzdC1zIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzE5YjBjODtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5jdXMtZG8tYXBwbHlmIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmN1cy1kby1hcHBseWYgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-apply/cus-do-apply.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-apply/cus-do-apply.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CusDoApplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusDoApplyComponent", function() { return CusDoApplyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_apply_bean_CusDoApply_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-apply/bean/CusDoApply.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-apply/bean/CusDoApply.bean.ts");
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
 * @author fanhualing 2018-5-9 客户申领
 */





var CusDoApplyComponent = /** @class */ (function () {
    function CusDoApplyComponent(httpService, commfunc) {
        var _this = this;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.workdeskApllyBean = new app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_apply_bean_CusDoApply_bean__WEBPACK_IMPORTED_MODULE_4__["CusDoApplyExamBean"]();
        this.cusDoApplyBean = new app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_apply_bean_CusDoApply_bean__WEBPACK_IMPORTED_MODULE_4__["CusDoApplyBean"]();
        this.msgs = [];
        this.applyCert = [];
        this.cert_type = [];
        this.userName = '';
        this.orgName = '';
        this.userId = '';
        this.orgId = '';
        // 数据
        this.chooseData = [];
        this.tablelist = [];
        // 审批流判断
        this.iskzh = '';
        this.iszlxr = '';
        this.iskfh = '';
        this.approveNo = '';
        this.dfCustno = '';
        this.dfOrg = '';
        this.aaaa = false;
        // 有主、无主判断
        this.OwnerDisplay = false;
        this.codeValues();
        this.cert_type = this.code['CERT_TYPE'];
        this.cert_type.forEach(function (element) {
            if (element.value != '') {
                _this.applyCert.push(element);
            }
        });
        this.user1 = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.user = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (this.user1.userId) {
            this.userId = this.user1.userId;
        }
        if (this.user1.orgId) {
            this.orgId = this.user1.orgId;
        }
        if (this.user.userName) {
            this.userName = this.user.userName;
        }
        if (this.user.orgName) {
            this.orgName = this.user.orgName;
        }
    }
    // 获取码值
    CusDoApplyComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    CusDoApplyComponent.prototype.ngOnInit = function () {
    };
    // 查询
    CusDoApplyComponent.prototype.doQuery = function () {
        var _this = this;
        // 清空数据
        this.tablelist = [];
        this.chooseData = [];
        // 校验客户号
        var reg = /^[0-9]*$/;
        if (this.cusDoApplyBean.custNo == undefined ||
            this.cusDoApplyBean.custNo == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入客户号!' });
            return;
        }
        if (this.cusDoApplyBean.custNo != undefined) {
            if (this.cusDoApplyBean.custNo != '') {
                if (!reg.test(this.cusDoApplyBean.custNo)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '客户号只能为数字' });
                    return;
                }
                if (this.cusDoApplyBean.custNo.length != 10) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入10位数字的客户号' });
                    return;
                }
            }
        }
        this.cusDoApplyBean.operationType = '2'; // 操作类型-申领
        this.cusDoApplyBean.disType = ''; // 分配场景编号-按客户号分配
        this.httpService.queryCustManageCustInfo(this.cusDoApplyBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.custList.length > 0) {
                    _this.tablelist = data.custList;
                    _this.chooseData = _this.tablelist;
                    if (_this.tablelist[0].ownerManagerName == '' || _this.tablelist[0].ownerManagerName == null) {
                        _this.OwnerDisplay = false;
                    }
                    else {
                        _this.OwnerDisplay = true;
                    }
                }
                else {
                    _this.chooseData = [];
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 我要申领
    CusDoApplyComponent.prototype.doApply = function () {
        if (this.chooseData.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择客户！' });
            return;
        }
        else {
            // 选择审批人
            this.doChoosePeople();
        }
    };
    // 提交服务
    CusDoApplyComponent.prototype.doChoosePeople = function () {
        var _this = this;
        // 入参(‘申领’并按‘客户号分配’)标识
        this.workdeskApllyBean.operationType = '2';
        this.workdeskApllyBean.disType = '';
        // 接收人
        this.workdeskApllyBean.creater = this.userId;
        this.workdeskApllyBean.createrName = this.userName;
        this.workdeskApllyBean.createOrgId = this.orgId;
        this.workdeskApllyBean.createOrgName = this.orgName;
        this.workdeskApllyBean.receiver = this.userId;
        this.workdeskApllyBean.receiverName = this.userName;
        this.workdeskApllyBean.receiveOrgId = this.orgId;
        this.workdeskApllyBean.receiveOrgName = this.orgName;
        // 客户信息
        this.workdeskApllyBean.custList = this.chooseData;
        // 判断是否走审批
        this.httpService.custManageApprCandidate(this.workdeskApllyBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dfCustno = data.dfCustno;
                _this.dfOrg = data.dfOrg;
                _this.approveNo = data.approveNo;
                _this.iszlxr = data.iszlxr;
                _this.iskzh = data.iskzh;
                _this.iskfh = data.iskfh;
                _this.workdeskApllyBean['approveNo'] = _this.approveNo;
                _this.workdeskApllyBean['iszlxr'] = _this.iszlxr;
                _this.workdeskApllyBean['iskzh'] = _this.iskzh;
                _this.workdeskApllyBean['iskfh'] = _this.iskfh;
                _this.workdeskApllyBean['dfCustno'] = _this.dfCustno;
                _this.workdeskApllyBean['dfOrg'] = _this.dfOrg;
                if (data.approveNo == '1') {
                    _this.waitSelUserList = _this.commfunc.query('KHSLLC', { iszlxr: _this.iszlxr, dfCustno: _this.dfCustno, iskfh: _this.iskfh, iskzh: _this.iskzh, dfOrg: _this.dfOrg });
                    if (!_this.waitSelUserList.erro) {
                        _this.outVal = _this.waitSelUserList.waitSelUserList;
                        var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        var a = commonHeader.extParam.specifyNextOpers;
                        if (_this.waitSelUserList.display == true && (a == undefined || a == '' || a == null)) {
                            _this.aaaa = true; // 要选人
                        }
                        else {
                            _this.doSubmit();
                        }
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: _this.waitSelUserList.erro });
                    }
                }
                else {
                    _this.doSubmit();
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                _this.doEmpty();
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            _this.doEmpty();
        });
    };
    // 点击叉号
    CusDoApplyComponent.prototype.onHideClose = function () {
        this.aaaa = false;
        this.doEmpty();
    };
    // 关闭选人框
    CusDoApplyComponent.prototype.outDisplayCall = function (event) {
        this.aaaa = false;
        this.doEmpty();
    };
    // 选完人后回调
    CusDoApplyComponent.prototype.outValueCall = function (event) {
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.doSubmit();
    };
    // 数据返回给后台
    CusDoApplyComponent.prototype.doSubmit = function () {
        var _this = this;
        this.httpService.custManageDataLandHandle(this.workdeskApllyBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.doEmpty();
            }
            else {
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                _this.doEmpty();
            }
        }, function (error) {
            var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
            if (s.extParam.specifyNextOpers) {
                delete s.extParam.specifyNextOpers;
                var commonHeader = s;
                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
            }
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            _this.doEmpty();
        });
    };
    // 清空
    CusDoApplyComponent.prototype.doEmpty = function () {
        this.tablelist = [];
        this.chooseData = [];
        this.workdeskApllyBean = new app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_apply_bean_CusDoApply_bean__WEBPACK_IMPORTED_MODULE_4__["CusDoApplyExamBean"]();
        this.cusDoApplyBean.custNo = undefined;
    };
    //按钮权限
    CusDoApplyComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    CusDoApplyComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    CusDoApplyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cus-do-apply',
            template: __webpack_require__(/*! ./cus-do-apply.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-apply/cus-do-apply.component.html"),
            styles: [__webpack_require__(/*! ./cus-do-apply.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-apply/cus-do-apply.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_2__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], CusDoApplyComponent);
    return CusDoApplyComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-transfer/bean/CusDoTransfer.bean.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-transfer/bean/CusDoTransfer.bean.ts ***!
  \************************************************************************************************************/
/*! exports provided: CusDoTransferBean, CustomTransferExamBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusDoTransferBean", function() { return CusDoTransferBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTransferExamBean", function() { return CustomTransferExamBean; });
var CusDoTransferBean = /** @class */ (function () {
    function CusDoTransferBean() {
    }
    return CusDoTransferBean;
}());

var CustomTransferExamBean = /** @class */ (function () {
    function CustomTransferExamBean() {
    }
    return CustomTransferExamBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-transfer/cus-do-transfer.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-transfer/cus-do-transfer.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g padding-zero module\" *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P013')\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<header-title [Info]=\"'查询条件'\"></header-title>\r\n\t</div>\r\n\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-6 ui-g-offset-4\">\r\n\t\t\t<label>客户号：</label>\r\n\t\t\t<input type=\"text\" pInputText [(ngModel)]=\"cusDoTransferBean.custNo\">\r\n\t\t\t<button pButton type=\"button\" label=\"查询\" (click)=\"doQuery()\"></button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"ui-g-12\">\r\n\t\t<header-title [Info]=\"'客户信息'\"></header-title>\r\n\t</div>\r\n\r\n\t<div class=\"ui-g-12 list-s\">\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t客户号：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0\">\r\n\t\t\t\t\t<a href=\"/#/pages/custom-view?custNo={{compileStr(tablelist[0].custNo)}}\" target=\"_blank\">{{tablelist[0].custNo}}</a>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t客户姓名：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0\">{{tablelist[0].custName}}</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t证件类型：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0\"> {{tablelist[0].idenType | codeValuePie:transferCert}}</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t证件号码：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0\">{{tablelist[0].idenNum}}</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t手机号码：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0\">{{tablelist[0].tel}}</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t主联系人：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0 && OwnerDisplay\">{{tablelist[0].ownerManagerName}}({{tablelist[0].ownerOrgName}})</span>\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0 && !OwnerDisplay\">-</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t存款日均(本年)：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0\">{{tablelist[0].balDlyAvgByYear}}</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t贷款日均(本年)：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0\">{{tablelist[0].loanDlyAvgByYear}}</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t当前是否持有信用卡：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0 && tablelist[0].partyTypeId == '1'\">{{tablelist[0].isHoldCrdCard | codeValuePie:isHoldCrdCard}}</span>\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0 && tablelist[0].partyTypeId == '2'\">/</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t\t理财余额(当前)：\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t<span *ngIf=\"tablelist.length > 0\">{{tablelist[0].finBal}}</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"ui-g-12\">\r\n\t\t<header-title [Info]=\"'接收人信息'\"></header-title>\r\n\t</div>\r\n\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-2 text-right\">\r\n\t\t\t<label>接收人：</label>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4\">\r\n\t\t\t<input type=\"text\" pInputText [(ngModel)]=\"customTransferDialogBean.receiverName\" disabled/>\r\n\t\t\t<button type=\"button\" (click)=\"chooseWorker()\" pButton label=\"选择员工\"></button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"ui-g-12 btn-center\" *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P013_11')\">\r\n\t\t<div class=\"ui-g-6 ui-g-offset-5\">\r\n\t\t\t<button pButton type=\"button\" label=\"我要转让\" (click)=\"doAllot()\"></button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- 选择员工 -->\r\n<p-dialog [(visible)]=\"display\" *ngIf=\"display\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 class=\"cus-do-transferf\" (onHide)=\"onHideClose('user')\">\r\n\t<p-header>\r\n\t\t员工列表\r\n\t</p-header>\r\n\t<app-query-user-list *ngIf=\"display\" [in-value]=\"ownerInValue\" (outValue)=\"perInfor($event)\"></app-query-user-list>\r\n</p-dialog>\r\n\r\n<!-- 审批人 -->\r\n<p-dialog [(visible)]=\"aaaa\" *ngIf=\"aaaa\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 class=\"cus-do-transferf\" (onHide)=\"onHideClose('people')\">\r\n\t<p-header>\r\n\t\t提交给\r\n\t</p-header>\r\n\t<app-examine-approval *ngIf=\"aaaa\" [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-transfer/cus-do-transfer.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-transfer/cus-do-transfer.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  text-align: center; }\n\n.btn-center {\n  margin-top: 20px; }\n\n.text-right {\n  text-align: right; }\n\n.list-s {\n  margin-top: 20px;\n  margin-bottom: 40px; }\n\ninput {\n  width: 200px !important; }\n\na {\n  color: #0094D2; }\n\n:host /deep/ .cus-do-transferf .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .cus-do-transferf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1tYW5hZ2UvY3VzLWRvLXRyYW5zZmVyL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLW1hcmtldGluZ1xcY3VzdG9tLW1hbmFnZVxcY3VzLWRvLXRyYW5zZmVyXFxjdXMtZG8tdHJhbnNmZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLHVCQUF1QjtFQUN2QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1tYXJrZXRpbmcvY3VzdG9tLW1hbmFnZS9jdXMtZG8tdHJhbnNmZXIvY3VzLWRvLXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1jZW50ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5saXN0LXMge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjMDA5NEQyO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmN1cy1kby10cmFuc2ZlcmYgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuY3VzLWRvLXRyYW5zZmVyZiAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-transfer/cus-do-transfer.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-transfer/cus-do-transfer.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CusDoTtransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusDoTtransferComponent", function() { return CusDoTtransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_transfer_bean_CusDoTransfer_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-transfer/bean/CusDoTransfer.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-transfer/bean/CusDoTransfer.bean.ts");
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
 * @author fanhualing 2018-5-9 客户转让
 */






var CusDoTtransferComponent = /** @class */ (function () {
    function CusDoTtransferComponent(httpService, commfunc, router) {
        var _this = this;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"];
        this.msgs = [];
        this.cusDoTransferBean = new app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_transfer_bean_CusDoTransfer_bean__WEBPACK_IMPORTED_MODULE_5__["CusDoTransferBean"]();
        this.customTransferDialogBean = new app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_transfer_bean_CusDoTransfer_bean__WEBPACK_IMPORTED_MODULE_5__["CustomTransferExamBean"]();
        this.first = 0;
        this.totalNum = 0;
        this.tablelist = [];
        this.transferCert = [];
        this.cert_type = [];
        this.isHoldCrdCard = [];
        this.chooseData = [];
        this.display = false;
        this.OwnerDisplay = false;
        this.aaaa = false;
        this.iskzh = '';
        this.iszlxr = '';
        this.iskfh = '';
        this.dfCustno = '';
        this.dfOrg = '';
        this.chooseWork = false;
        this.choosePeople = false;
        this.codeValues();
        this.cert_type = this.code['CERT_TYPE'];
        this.cert_type.forEach(function (element) {
            if (element.value != '') {
                _this.transferCert.push(element);
            }
        });
        this.isHoldCrdCard = this.code['IsHoldCrdCard'];
        this.user1 = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.user = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (this.user1.userId) {
            this.userId = this.user1.userId;
        }
        if (this.user1.orgId) {
            this.orgId = this.user1.orgId;
        }
        if (this.user.userName) {
            this.userName = this.user.userName;
        }
        if (this.user.orgName) {
            this.orgName = this.user.orgName;
        }
    }
    //码值
    CusDoTtransferComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    CusDoTtransferComponent.prototype.ngOnInit = function () {
    };
    // 查询
    CusDoTtransferComponent.prototype.doQuery = function () {
        var _this = this;
        // 清空数据
        this.tablelist = [];
        this.chooseData = [];
        /// 校验客户号
        var reg = /^[0-9]*$/;
        if (this.cusDoTransferBean.custNo == undefined ||
            this.cusDoTransferBean.custNo == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入客户号!' });
            return;
        }
        if (this.cusDoTransferBean.custNo != undefined) {
            if (this.cusDoTransferBean.custNo != '') {
                if (!reg.test(this.cusDoTransferBean.custNo)) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '客户号只能为数字' });
                    return;
                }
                if (this.cusDoTransferBean.custNo.length != 10) {
                    this.msgs = [];
                    this.msgs.push({ severity: 'error', summary: '提示', detail: '请输入10位数字的客户号' });
                    return;
                }
            }
        }
        this.cusDoTransferBean.operationType = '3'; // 操作类型-转让
        this.cusDoTransferBean.disType = ''; // 分配场景编号-按客户号分配
        this.httpService.queryCustManageCustInfo(this.cusDoTransferBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.custList.length > 0) {
                    _this.tablelist = data.custList;
                    _this.chooseData = _this.tablelist;
                    if (_this.tablelist[0].ownerManagerName == '' || _this.tablelist[0].ownerManagerName == null) {
                        _this.OwnerDisplay = false;
                    }
                    else {
                        _this.OwnerDisplay = true;
                    }
                }
                else {
                    _this.chooseData = [];
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 转让
    CusDoTtransferComponent.prototype.doAllot = function () {
        if (this.chooseData.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择客户！' });
            return;
        }
        else {
            this.doChoosePeople();
        }
    };
    // 提交
    CusDoTtransferComponent.prototype.doChoosePeople = function () {
        var _this = this;
        if (this.customTransferDialogBean.receiver == '' || this.customTransferDialogBean.receiver == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择接收人！' });
            return;
        }
        // 入参(‘转让’并按‘客户号分配’)标识
        this.customTransferDialogBean.operationType = '3';
        this.customTransferDialogBean.disType = '';
        // 接收人
        this.customTransferDialogBean.creater = this.userId;
        this.customTransferDialogBean.createrName = this.userName;
        this.customTransferDialogBean.createOrgId = this.orgId;
        this.customTransferDialogBean.createOrgName = this.orgName;
        // this.customTransferDialogBean.receiveOrgName = this.orgName;
        // this.customTransferDialogBean.receiveOrgId = this.orgId;
        // 客户信息
        this.customTransferDialogBean.custList = this.chooseData;
        // 判断是否走审批
        this.httpService.custManageApprCandidate(this.customTransferDialogBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dfCustno = data.dfCustno; //归属客户经理ID/主联系人ID 
                _this.dfOrg = data.dfOrg; //归属机构ID/主联系人机构ID
                _this.approveNo = data.approveNo; // 审批标识	0:无需审批,1:需要审批
                _this.iszlxr = data.iszlxr; //是否有主联系人 0:无主,1:有主
                _this.iskzh = data.iskzh; //是否跨支行 0:不跨行,1:跨行
                _this.iskfh = data.iskfh; //是否跨分行 0:不跨行,1:跨行
                _this.customTransferDialogBean['approveNo'] = _this.approveNo;
                _this.customTransferDialogBean['iszlxr'] = _this.iszlxr;
                _this.customTransferDialogBean['iskzh'] = _this.iskzh;
                _this.customTransferDialogBean['iskfh'] = _this.iskfh;
                _this.customTransferDialogBean['dfCustno'] = _this.dfCustno;
                _this.customTransferDialogBean['dfOrg'] = _this.dfOrg;
                if (data.approveNo == '1') {
                    _this.waitSelUserList = _this.commfunc.query('KHZRLC', { iszlxr: _this.iszlxr, iskzh: _this.iskzh, iskfh: _this.iskfh, dfCustno: _this.dfCustno, dfOrg: _this.dfOrg });
                    if (!_this.waitSelUserList.erro) {
                        _this.outVal = _this.waitSelUserList.waitSelUserList;
                        var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        var a = commonHeader.extParam.specifyNextOpers;
                        if (_this.waitSelUserList.display == true && (a == undefined || a == '' || a == null)) {
                            _this.aaaa = true; // 要选人
                        }
                        else {
                            _this.doSubmit();
                        }
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: _this.waitSelUserList.erro });
                    }
                }
                else {
                    _this.doSubmit();
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                _this.doEmpty();
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            _this.doEmpty();
        });
    };
    // 点击叉号
    CusDoTtransferComponent.prototype.onHideClose = function (param) {
        if (param == 'user') {
            this.display = false;
        }
        if (param == 'people') {
            this.aaaa = false;
            this.doEmpty();
        }
    };
    // 关闭选人框
    CusDoTtransferComponent.prototype.outDisplayCall = function (event) {
        this.aaaa = false;
        this.display = false;
    };
    // 选完人后回调
    CusDoTtransferComponent.prototype.outValueCall = function (event) {
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.doSubmit();
    };
    // 数据返回给后台
    CusDoTtransferComponent.prototype.doSubmit = function () {
        var _this = this;
        this.httpService.custManageDataLandHandle(this.customTransferDialogBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.doEmpty();
            }
            else {
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                _this.doEmpty();
            }
        }, function (error) {
            var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
            if (s.extParam.specifyNextOpers) {
                delete s.extParam.specifyNextOpers;
                var commonHeader = s;
                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
            }
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
            _this.doEmpty();
        });
    };
    // 选择员工
    CusDoTtransferComponent.prototype.chooseWorker = function () {
        this.display = true;
        this.ownerInValue = this.orgId;
    };
    // 员工回调
    CusDoTtransferComponent.prototype.perInfor = function (item) {
        this.display = false;
        if (item.length > 0) {
            this.customTransferDialogBean.receiverName = item[0].tellerName;
            this.customTransferDialogBean.receiver = item[0].tellerId;
            this.customTransferDialogBean.receiveOrgName = item[0].orgName;
            this.customTransferDialogBean.receiveOrgId = item[0].orgId;
        }
    };
    // 清空
    CusDoTtransferComponent.prototype.doEmpty = function () {
        this.tablelist = [];
        this.chooseData = [];
        this.customTransferDialogBean = new app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_transfer_bean_CusDoTransfer_bean__WEBPACK_IMPORTED_MODULE_5__["CustomTransferExamBean"]();
        this.cusDoTransferBean.custNo = undefined;
    };
    //按钮权限
    CusDoTtransferComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
        // return true;
    };
    CusDoTtransferComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    CusDoTtransferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cus-do-transfer',
            template: __webpack_require__(/*! ./cus-do-transfer.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-transfer/cus-do-transfer.component.html"),
            styles: [__webpack_require__(/*! ./cus-do-transfer.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-transfer/cus-do-transfer.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CusDoTtransferComponent);
    return CusDoTtransferComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/custom-manage.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/custom-manage.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12 functions\">\r\n    <!-- 我要申领 -->\r\n    <a [routerLink]=\"['cus-do-apply']\" class=\"change\" [ngClass]=\"{'active':show==1}\" (click)=\"allot(1)\" *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P011')\">我要申领</a>\r\n    <!-- 我要转让 -->\r\n    <a [routerLink]=\"['cus-do-transfer']\" class=\"change\" [ngClass]=\"{'active':show==2}\" (click)=\"allot(2)\" *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P013')\">我要转让</a>\r\n    <!-- 单户分配 -->\r\n    <a [routerLink]=\"['cus-do-allot']\" class=\"change\" [ngClass]=\"{'active':show==3}\" (click)=\"allot(3)\" *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P015')\">单户分配</a>\r\n    <!-- 批量分配 -->\r\n    <a [routerLink]=\"['batch-allot']\" class=\"change\" [ngClass]=\"{'active':show==4}\" (click)=\"allot(4)\" *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P017')\">批量分配</a>\r\n    <!-- 待分配客户 -->\r\n    <a [routerLink]=\"['wait-allot']\" class=\"change\" [ngClass]=\"{'active':show==5}\" (click)=\"allot(5)\" *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P019')\">待分配客户</a>\r\n    <!-- 调整日志 -->\r\n    <a [routerLink]=\"['adjust-log']\" class=\"change\" [ngClass]=\"{'active':show==6}\" (click)=\"allot(6)\" *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P021')\">调整日志</a>\r\n  </div>\r\n  <div class=\"ui-g-12 module padding-one bgcolor\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/custom-manage.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/custom-manage.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0; }\n  .functions .change {\n    display: inline-block;\n    font-size: 15px;\n    height: 40px;\n    line-height: 40px;\n    border-radius: 3px 3px 0 0;\n    color: #929292;\n    padding: 0px 30px;\n    font-weight: bold; }\n  .active {\n  border: none !important;\n  background-color: #f7f7f7 !important;\n  color: #003f5c !important; }\n  .padding-one {\n  padding: 1em; }\n  .bgcolor {\n  background: #f7f7f7; }\n  @media screen and (max-width: 1280px) {\n  .functions {\n    border-bottom: 1px solid #dddddd; }\n  .active {\n    background-color: #e5e6e9 !important; }\n  .bgcolor {\n    background: #e5e6e9; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1tYW5hZ2UvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tbWFya2V0aW5nXFxjdXN0b20tbWFuYWdlXFxjdXN0b20tbWFuYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7RUFIbkI7SUFLUSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7RUFJekI7RUFDSSx1QkFBdUI7RUFDdkIsb0NBQW9DO0VBQ3BDLHlCQUF5QixFQUFBO0VBRzdCO0VBQ0ksWUFBWSxFQUFBO0VBR2hCO0VBQ0ksbUJBQW1CLEVBQUE7RUFHdkI7RUFDSTtJQUNJLGdDQUFnQyxFQUFBO0VBRXBDO0lBQ0ksb0NBQW9DLEVBQUE7RUFFeEM7SUFDSSxtQkFBbUIsRUFBQSxFQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLW1hcmtldGluZy9jdXN0b20tbWFuYWdlL2N1c3RvbS1tYW5hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVuY3Rpb25zIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAuY2hhbmdlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICAgICAgICBjb2xvcjogIzkyOTI5MjtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3ZjcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAzZjVjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWRkaW5nLW9uZSB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbi5iZ2NvbG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAuZnVuY3Rpb25zIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU2ZTkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5iZ2NvbG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTVlNmU5O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/custom-manage.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/custom-manage.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CustomManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomManageComponent", function() { return CustomManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
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
/**
 * @author fanhualing 2018-5-9 客户管理
 */



var CustomManageComponent = /** @class */ (function () {
    function CustomManageComponent(commfunc, router) {
        this.commfunc = commfunc;
        this.router = router;
        this.show = 1;
    }
    CustomManageComponent.prototype.ngOnInit = function () {
        var stu_1 = this.commfunc.permissionCheck('SID00001_P020_P002_P003_P011'); // 我要申领
        var stu_2 = this.commfunc.permissionCheck('SID00001_P020_P002_P003_P013'); // 我要转让
        var stu_3 = this.commfunc.permissionCheck('SID00001_P020_P002_P003_P015'); // 我要分配-单户分配
        var stu_4 = this.commfunc.permissionCheck('SID00001_P020_P002_P003_P017'); // 我要分配-批量分配
        var stu_5 = this.commfunc.permissionCheck('SID00001_P020_P002_P003_P019'); // 待分配客户
        var stu_6 = this.commfunc.permissionCheck('SID00001_P020_P002_P003_P021'); // 调整日志
        if (stu_1) {
            this.show = 1;
            this.router.navigate(['/pages/tzb/custom/custom-marketing/cus-manage/cus-do-apply']);
        }
        else if (stu_2) {
            this.show = 2;
            this.router.navigate(['/pages/tzb/custom/custom-marketing/cus-manage/cus-do-transfer']);
        }
        else if (stu_3) {
            this.show = 3;
            this.router.navigate(['/pages/tzb/custom/custom-marketing/cus-manage/cus-do-allot']);
        }
        else if (stu_4) {
            this.show = 4;
            this.router.navigate(['/pages/tzb/custom/custom-marketing/cus-manage/batch-allot']);
        }
        else if (stu_5) {
            this.show = 5;
            this.router.navigate(['/pages/tzb/custom/custom-marketing/cus-manage/wait-allot']);
        }
        else if (stu_6) {
            this.show = 6;
            this.router.navigate(['/pages/tzb/custom/custom-marketing/cus-manage/adjust-log']);
        }
    };
    CustomManageComponent.prototype.ngOnChanges = function () {
    };
    // 切换标签
    CustomManageComponent.prototype.allot = function (num) {
        this.show = num;
    };
    // 按钮权限
    CustomManageComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
        // return true;
    };
    CustomManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-manage',
            template: __webpack_require__(/*! ./custom-manage.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/custom-manage.component.html"),
            styles: [__webpack_require__(/*! ./custom-manage.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/custom-manage.component.scss")]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CustomManageComponent);
    return CustomManageComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/custom-manage.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/custom-manage.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: CusManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusManageModule", function() { return CusManageModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_custom_manage_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/custom-manage.routing */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/custom-manage.routing.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_custom_manage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/custom-manage.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/custom-manage.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_batch_allot_batch_allot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/batch-allot/batch-allot.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/batch-allot/batch-allot.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_apply_cus_do_apply_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-apply/cus-do-apply.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-apply/cus-do-apply.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_transfer_cus_do_transfer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-transfer/cus-do-transfer.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-transfer/cus-do-transfer.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_allot_cus_do_allot_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-allot/cus-do-allot.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-allot/cus-do-allot.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_adjust_log_adjust_log_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/adjust-log/adjust-log.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/adjust-log/adjust-log.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_wait_allot_wait_allot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/wait-allot.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/wait-allot.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_wait_allot_cus_allot_dialog_cus_allot_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/cus-allot-dialog/cus-allot-dialog.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/cus-allot-dialog/cus-allot-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author fanhualing 2018-5-9 客户管理-module
 */















var CusManageModule = /** @class */ (function () {
    function CusManageModule() {
    }
    CusManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_pages_tzb_custom_custom_marketing_custom_manage_custom_manage_routing__WEBPACK_IMPORTED_MODULE_6__["CusManageRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__["FrameworkModule"],
            ],
            declarations: [
                app_pages_tzb_custom_custom_marketing_custom_manage_custom_manage_component__WEBPACK_IMPORTED_MODULE_7__["CustomManageComponent"],
                app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_apply_cus_do_apply_component__WEBPACK_IMPORTED_MODULE_9__["CusDoApplyComponent"],
                app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_transfer_cus_do_transfer_component__WEBPACK_IMPORTED_MODULE_10__["CusDoTtransferComponent"],
                app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_allot_cus_do_allot_component__WEBPACK_IMPORTED_MODULE_11__["CusDoAllotComponent"],
                app_pages_tzb_custom_custom_marketing_custom_manage_adjust_log_adjust_log_component__WEBPACK_IMPORTED_MODULE_12__["AdjustLogComponent"],
                app_pages_tzb_custom_custom_marketing_custom_manage_batch_allot_batch_allot_component__WEBPACK_IMPORTED_MODULE_8__["BatchAllotComponent"],
                app_pages_tzb_custom_custom_marketing_custom_manage_wait_allot_wait_allot_component__WEBPACK_IMPORTED_MODULE_13__["WaiAllotComponent"],
                app_pages_tzb_custom_custom_marketing_custom_manage_wait_allot_cus_allot_dialog_cus_allot_dialog_component__WEBPACK_IMPORTED_MODULE_14__["CusAllotDialogComponent"],
            ],
            providers: [
                _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_4__["CusOperationHttpService"]
            ]
        })
    ], CusManageModule);
    return CusManageModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/custom-manage.routing.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/custom-manage.routing.ts ***!
  \******************************************************************************************/
/*! exports provided: routes, CusManageRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusManageRouting", function() { return CusManageRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_custom_manage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/custom-manage.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/custom-manage.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_apply_cus_do_apply_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-apply/cus-do-apply.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-apply/cus-do-apply.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_transfer_cus_do_transfer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-transfer/cus-do-transfer.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-transfer/cus-do-transfer.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_allot_cus_do_allot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-allot/cus-do-allot.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/cus-do-allot/cus-do-allot.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_batch_allot_batch_allot_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/batch-allot/batch-allot.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/batch-allot/batch-allot.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_adjust_log_adjust_log_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/adjust-log/adjust-log.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/adjust-log/adjust-log.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_wait_allot_wait_allot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/wait-allot.component */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/wait-allot.component.ts");
/**
 * @author fanhualing 2018-5-9 客户管理-路由
 */








var routes = [
    {
        path: '',
        component: app_pages_tzb_custom_custom_marketing_custom_manage_custom_manage_component__WEBPACK_IMPORTED_MODULE_1__["CustomManageComponent"],
        children: [
            { path: '', redirectTo: 'cus-do-apply', pathMatch: 'full' },
            {
                path: 'cus-do-apply', component: app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_apply_cus_do_apply_component__WEBPACK_IMPORTED_MODULE_2__["CusDoApplyComponent"],
            },
            {
                path: 'cus-do-transfer', component: app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_transfer_cus_do_transfer_component__WEBPACK_IMPORTED_MODULE_3__["CusDoTtransferComponent"],
            },
            {
                path: 'cus-do-allot', component: app_pages_tzb_custom_custom_marketing_custom_manage_cus_do_allot_cus_do_allot_component__WEBPACK_IMPORTED_MODULE_4__["CusDoAllotComponent"],
            },
            {
                path: 'batch-allot', component: app_pages_tzb_custom_custom_marketing_custom_manage_batch_allot_batch_allot_component__WEBPACK_IMPORTED_MODULE_5__["BatchAllotComponent"],
            },
            {
                path: 'wait-allot', component: app_pages_tzb_custom_custom_marketing_custom_manage_wait_allot_wait_allot_component__WEBPACK_IMPORTED_MODULE_7__["WaiAllotComponent"],
            },
            {
                path: 'adjust-log', component: app_pages_tzb_custom_custom_marketing_custom_manage_adjust_log_adjust_log_component__WEBPACK_IMPORTED_MODULE_6__["AdjustLogComponent"],
            },
        ]
    },
];
var CusManageRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/bean/customAllot.bean.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/bean/customAllot.bean.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CustomAllotBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAllotBean", function() { return CustomAllotBean; });
var CustomAllotBean = /** @class */ (function () {
    function CustomAllotBean() {
    }
    return CustomAllotBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/cus-allot-dialog/bean/cus-allot-dialog.bean.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/cus-allot-dialog/bean/cus-allot-dialog.bean.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: CusAllotDialogBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusAllotDialogBean", function() { return CusAllotDialogBean; });
var CusAllotDialogBean = /** @class */ (function () {
    function CusAllotDialogBean() {
    }
    return CusAllotDialogBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/cus-allot-dialog/cus-allot-dialog.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/cus-allot-dialog/cus-allot-dialog.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <form [formGroup]=\"userform\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-3 text-right\">\r\n        <label appValidation>接收机构：</label>\r\n      </div>\r\n      <div class=\"ui-g-9\">\r\n        <input type=\"text\" size=\"30\" pInputText name=\"receiveOrgName\" formControlName=\"receiveOrgName\" [(ngModel)]=\"customAllotDialogBean.receiveOrgName\"\r\n          disabled>\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['receiveOrgName'].valid&&userform.controls['receiveOrgName'].dirty\">\r\n          <label *ngIf=\"userform.hasError('required','receiveOrgName')\">请选择接收机构</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-3 text-right\">\r\n        <label appValidation>接收人：</label>\r\n      </div>\r\n      <div class=\"ui-g-9\">\r\n        <!-- <p-dropdown [options]=\"peopleList\" name=\"receiverName\" formControlName=\"receiverName\" [(ngModel)]=\"receiverName\" filter=\"filter\"></p-dropdown> -->\r\n        <input type=\"text\" pInputText name=\"receiverName\" formControlName=\"receiverName\" [(ngModel)]=\"customAllotDialogBean.receiverName\" disabled class=\"ownerInput\">\r\n          <button pButton type=\"button\" label=\"选择员工\" (click)=\"openTree('user2')\"></button>\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['receiverName'].valid&&userform.controls['receiverName'].dirty\">\r\n          <label *ngIf=\"userform.hasError('required','receiverName')\">请选择接收人</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-3 text-right\">\r\n        <label>备注：</label>\r\n      </div>\r\n      <div class=\"ui-g-9\">\r\n        <textarea rows=\"5\" cols=\"60\" pInputTextarea [(ngModel)]=\"customAllotDialogBean.remarks\" name=\"remarks\" formControlName=\"remarks\"></textarea>\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['remarks'].valid&&userform.controls['remarks'].dirty\"></div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"确定\" class=\"addBtn\" (click)=\"confirmBtn()\"></button>\r\n    <button pButton type=\"button\" label=\"取消\" class=\"adjustBtn\" (click)=\"cancelBtn()\"></button>\r\n  </div>\r\n</div>\r\n\r\n<p-dialog [(visible)]=\"userTreeDisplay\" *ngIf=\"userTreeDisplay\" [responsive]=\"true\" [positionTop]=10 modal=\"modal\" class=\"cus-allot-dialog-sf\"\r\n  (onHide)=\"onHideClose()\">\r\n  <p-header>\r\n    员工列表\r\n  </p-header>\r\n  <app-query-user-list *ngIf=\"receiverTreeDisplay\" [in-value]=\"receiverInValue\" (outValue)=\"workerCall($event,'user2')\"></app-query-user-list>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/cus-allot-dialog/cus-allot-dialog.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/cus-allot-dialog/cus-allot-dialog.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content .table-s {\n  text-align: center; }\n\n.content .btn {\n  text-align: center; }\n\n.content .text-right {\n  text-align: right; }\n\n.content .ownerInput {\n  width: 82%; }\n\n:host /deep/ .cus-allot-dialog-sf .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .cus-allot-dialog-sf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1tYW5hZ2Uvd2FpdC1hbGxvdC9jdXMtYWxsb3QtZGlhbG9nL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLW1hcmtldGluZ1xcY3VzdG9tLW1hbmFnZVxcd2FpdC1hbGxvdFxcY3VzLWFsbG90LWRpYWxvZ1xcY3VzLWFsbG90LWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFrQixFQUFBOztBQUYxQjtFQUtRLGtCQUFrQixFQUFBOztBQUwxQjtFQVFRLGlCQUFpQixFQUFBOztBQVJ6QjtFQVdRLFVBQVUsRUFBQTs7QUFHbEI7RUFDSSx1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1tYW5hZ2Uvd2FpdC1hbGxvdC9jdXMtYWxsb3QtZGlhbG9nL2N1cy1hbGxvdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICAudGFibGUtcyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHQtcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLm93bmVySW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA4MiU7XHJcbiAgICB9XHJcbn1cclxuOmhvc3QgL2RlZXAvIC5jdXMtYWxsb3QtZGlhbG9nLXNmIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmN1cy1hbGxvdC1kaWFsb2ctc2YgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/cus-allot-dialog/cus-allot-dialog.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/cus-allot-dialog/cus-allot-dialog.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: CusAllotDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusAllotDialogComponent", function() { return CusAllotDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_wait_allot_cus_allot_dialog_bean_cus_allot_dialog_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/cus-allot-dialog/bean/cus-allot-dialog.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/cus-allot-dialog/bean/cus-allot-dialog.bean.ts");
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
 * @author fanhualing 2018-5-9 客户分配-接收人
 */







var CusAllotDialogComponent = /** @class */ (function () {
    function CusAllotDialogComponent(commfunc, router, httpService, fb) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.fb = fb;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.outValueBean = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.msgs = [];
        this.customAllotDialogBean = new app_pages_tzb_custom_custom_marketing_custom_manage_wait_allot_cus_allot_dialog_bean_cus_allot_dialog_bean__WEBPACK_IMPORTED_MODULE_6__["CusAllotDialogBean"]();
        this.userName = '';
        this.orgName = '';
        this.userId = '';
        this.orgId = '';
        this.receiverName = '';
        // 客户列表
        this.dates = [];
        // 审批流判断
        this.dfCustno = '';
        this.dfOrg = '';
        this.iskzh = '';
        this.iszlxr = '';
        this.iskfh = '';
        this.aaaa = false;
        // 选择员工
        this.userTreeDisplay = false;
        this.ownerTreeDisplay = false;
        this.receiverTreeDisplay = false;
        this.userform = fb.group({
            receiveOrgName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            receiverName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            remarks: [''],
        });
        this.user1 = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.user = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (this.user1.userId) {
            this.userId = this.user1.userId;
        }
        if (this.user1.orgId) {
            this.orgId = this.user1.orgId;
        }
        if (this.user.userName) {
            this.userName = this.user.userName;
        }
        if (this.user.orgName) {
            this.orgName = this.user.orgName;
        }
        this.customAllotDialogBean.creater = this.userId;
        this.customAllotDialogBean.createrName = this.userName;
        this.customAllotDialogBean.createOrgId = this.orgId;
        this.customAllotDialogBean.createOrgName = this.orgName;
        this.customAllotDialogBean.receiveOrgName = this.orgName;
        this.customAllotDialogBean.receiveOrgId = this.orgId;
        this.customAllotDialogBean.disType = '4';
        this.customAllotDialogBean.operationType = '1';
        // this.queryPeopleById();
    }
    CusAllotDialogComponent.prototype.ngOnInit = function () {
    };
    // 点击确定
    CusAllotDialogComponent.prototype.confirmBtn = function () {
        var _this = this;
        // 校验页面数据
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        this.dates = [];
        if (this.inValues.invalue[0]) {
            this.dates = this.inValues.invalue;
        }
        else {
            this.dates.push(this.inValues.invalue);
        }
        this.customAllotDialogBean.custList = this.dates;
        this.httpService.custManageApprCandidate(this.customAllotDialogBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dfCustno = data.dfCustno;
                _this.dfOrg = data.dfOrg;
                _this.approveNo = data.approveNo;
                _this.iszlxr = data.iszlxr;
                _this.iskzh = data.iskzh;
                _this.iskfh = data.iskfh;
                _this.customAllotDialogBean['approveNo'] = _this.approveNo;
                _this.customAllotDialogBean['iszlxr'] = _this.iszlxr;
                _this.customAllotDialogBean['iskzh'] = _this.iskzh;
                _this.customAllotDialogBean['iskfh'] = _this.iskfh;
                _this.customAllotDialogBean['dfCustno'] = _this.dfCustno;
                _this.customAllotDialogBean['dfOrg'] = _this.dfOrg;
                if (data.approveNo == '1') {
                    _this.waitSelUserList = _this.commfunc.query('KHFPLC', { iszlxr: _this.iszlxr, iskzh: _this.iskzh, iskfh: _this.iskfh, dfCustno: _this.dfCustno, dfOrg: _this.dfOrg });
                    if (!_this.waitSelUserList.erro) {
                        _this.outVal = _this.waitSelUserList.waitSelUserList;
                        var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                        var a = commonHeader.extParam.specifyNextOpers;
                        if (_this.waitSelUserList.display == true && (a == undefined || a == '' || a == null)) {
                            _this.aaaa = true; // 要选人
                        }
                        else {
                            _this.doSubmit();
                        }
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: _this.waitSelUserList.erro });
                    }
                }
                else {
                    _this.doSubmit();
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 提交
    CusAllotDialogComponent.prototype.doSubmit = function () {
        var _this = this;
        this.httpService.custManageDataLandHandle(this.customAllotDialogBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                }
                var carsParam_1 = [];
                _this.customAllotDialogBean.custList.forEach(function (element, i) {
                    if (element.custNo) {
                        carsParam_1.push(element.custNo);
                    }
                });
                _this.commfunc.setSessionDataCH('waitAllotCustInfoList', JSON.stringify(carsParam_1));
                _this.commfunc.setSessionDataCH('waitAllotBatchNo', data.batchNo);
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                var a9 = function (data2) { _this.outValue.emit(false); };
                setTimeout(a9, 1000);
            }
            else {
                var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                if (s.extParam.specifyNextOpers) {
                    delete s.extParam.specifyNextOpers;
                    var commonHeader = s;
                    _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                }
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
            if (s.extParam.specifyNextOpers) {
                delete s.extParam.specifyNextOpers;
                var commonHeader = s;
                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
            }
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 取消
    CusAllotDialogComponent.prototype.cancelBtn = function () {
        this.outValue.emit(false);
    };
    // 选择员工
    CusAllotDialogComponent.prototype.openTree = function (param) {
        this.receiverTreeDisplay = true;
        this.userTreeDisplay = true;
        this.receiverInValue = {
            orgId: this.customAllotDialogBean.receiveOrgId,
            tellerStatus: '0',
        };
    };
    // 关闭-员工模态框
    CusAllotDialogComponent.prototype.workerCall = function (item, param) {
        if (param == 'user2') {
            if (item.length > 0) {
                this.customAllotDialogBean.receiver = item[0].tellerId;
                this.customAllotDialogBean.receiverName = item[0].tellerName;
            }
            this.receiverTreeDisplay = false;
            this.userTreeDisplay = false;
        }
    };
    // 关闭模态框
    CusAllotDialogComponent.prototype.onHideClose = function () {
        this.receiverTreeDisplay = false;
        this.userTreeDisplay = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CusAllotDialogComponent.prototype, "outValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('in-value'),
        __metadata("design:type", Object)
    ], CusAllotDialogComponent.prototype, "inValues", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CusAllotDialogComponent.prototype, "outValueBean", void 0);
    CusAllotDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cus-allot-dialog',
            template: __webpack_require__(/*! ./cus-allot-dialog.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/cus-allot-dialog/cus-allot-dialog.component.html"),
            styles: [__webpack_require__(/*! ./cus-allot-dialog.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/cus-allot-dialog/cus-allot-dialog.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], CusAllotDialogComponent);
    return CusAllotDialogComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/wait-allot.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/wait-allot.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-allot-page\" *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P019')\">\r\n\t<div class=\"ui-g padding-zero module\">\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<header-title [Info]=\"'分配列表'\"></header-title>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12 table base-table\">\r\n\t\t\t<p-dataTable [value]=\"tableData\" [emptyMessage]=\"tabMesg\">\r\n\t\t\t\t<p-column>\r\n\t\t\t\t\t<ng-template let-index=\"rowIndex\" pTemplate=\"header\">\r\n\t\t\t\t\t\t<p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkAll\" binary=\"false\" (click)=\"checkAllClick($event)\"></p-checkbox>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t<p-checkbox [(ngModel)]=\"col.checkBox\" (click)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</p-column>\r\n\t\t\t\t<p-column field=\"custNo\" header=\"客户号\">\r\n\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t<a href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}\" target=\"_blank\">{{col.custNo}}</a>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</p-column>\r\n\t\t\t\t<p-column field=\"custName\" header=\"客户姓名\"></p-column>\r\n\t\t\t\t<p-column field=\"balDlyAvgByYear\" header=\"存款日均(本年)\"></p-column>\r\n\t\t\t\t<p-column field=\"loanDlyAvgByYear\" header=\"贷款日均(本年)\"></p-column>\r\n\t\t\t\t<p-column field=\"isHoldCrdCard\" header=\"当前是否持有信用卡\">\r\n\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t<span *ngIf=\"col.partyTypeId == '1'\">{{col.isHoldCrdCard|codeValuePie:isHoldCrdCard}}</span>\r\n\t\t\t\t\t\t<span *ngIf=\"col.partyTypeId == '2'\">/</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</p-column>\r\n\t\t\t\t<p-column field=\"finBal\" header=\"理财余额\"></p-column>\r\n\t\t\t\t<p-column field=\"ownerManagerName\" header=\"主联系人\">\r\n\t\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t\t<span *ngIf=\"col.ownerManagerId != null\">{{col.ownerManagerName}}({{col.ownerOrgName}})</span>\r\n\t\t\t\t\t\t<span *ngIf=\"col.ownerManagerId == null\">-</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</p-column>\r\n\t\t\t\t<p-column field=\"\" header=\"操作\" *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P019_11')\">\r\n\t\t\t\t\t<ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n\t\t\t\t\t\t<span (click)=\"doAllot(col)\" class=\"tabelDealIco\">分配</span>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</p-column>\r\n\t\t\t</p-dataTable>\r\n\t\t\t<p-paginator rows=\"{{customAllotBean.pageSize}}\" [first]=\"first\" totalRecords=\"{{totalNum}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n\t\t\t    (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12 btn\" *ngIf=\"permissionCheck('SID00001_P020_P002_P003_P019_13')\">\r\n\t\t\t<button pButton type=\"button\" label=\"批量分配\" (click)=\"doAllot('more')\"></button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- 弹出框 -->\r\n<p-dialog [(visible)]=\"display\" *ngIf=\"display\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10 class=\"wait-allot-sf\"\r\n    (onHide)=\"onHideClose()\">\r\n\t<p-header>\r\n\t\t管户关系调入\r\n\t</p-header>\r\n\t<app-cus-allot-dialog *ngIf=\"display\" [in-value]=\"inValue\" (outValue)=\"doMoreAllotCall($event)\"></app-cus-allot-dialog>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/wait-allot.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/wait-allot.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-allot-page .text-right {\n  text-align: right; }\n\n.my-allot-page .btn {\n  text-align: center; }\n\n.my-allot-page .table {\n  text-align: center; }\n\n.my-allot-page a {\n  color: #0094D2; }\n\n:host /deep/ .wait-allot-sf .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .wait-allot-sf .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1tYW5hZ2Uvd2FpdC1hbGxvdC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1tYXJrZXRpbmdcXGN1c3RvbS1tYW5hZ2VcXHdhaXQtYWxsb3RcXHdhaXQtYWxsb3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxpQkFBaUIsRUFBQTs7QUFGekI7RUFLUSxrQkFBa0IsRUFBQTs7QUFMMUI7RUFRUSxrQkFBa0IsRUFBQTs7QUFSMUI7RUFXUSxjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2N1c3RvbS1tYW5hZ2Uvd2FpdC1hbGxvdC93YWl0LWFsbG90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWFsbG90LXBhZ2Uge1xyXG4gICAgLnRleHQtcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogIzAwOTREMjtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC53YWl0LWFsbG90LXNmIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLndhaXQtYWxsb3Qtc2YgLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/wait-allot.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/wait-allot.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: WaiAllotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaiAllotComponent", function() { return WaiAllotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_custom_manage_wait_allot_bean_customAllot_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/bean/customAllot.bean */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/bean/customAllot.bean.ts");
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
 * @author fanhualing 2018-5-9 待分配客户
 */






var WaiAllotComponent = /** @class */ (function () {
    function WaiAllotComponent(confirmationService, commfunc, httpService) {
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["tableMessage"];
        this.msgs = [];
        this.customAllotBean = new app_pages_tzb_custom_custom_marketing_custom_manage_wait_allot_bean_customAllot_bean__WEBPACK_IMPORTED_MODULE_5__["CustomAllotBean"]();
        this.first = 0;
        this.totalNum = 0;
        this.tableData = [];
        this.display = false;
        this.checkAll = false;
        this.checkBox = [];
        this.chooseData = [];
        this.isHoldCrdCard = [];
        this.codeValues();
        this.isHoldCrdCard = this.code['IsHoldCrdCard'];
    }
    WaiAllotComponent.prototype.ngOnInit = function () {
        this.customAllotBean.pageSize = 10;
        this.customAllotBean.pageNum = 1;
        this.first = 0;
        this.querySecle();
    };
    // 码值
    WaiAllotComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    WaiAllotComponent.prototype.querySecle = function () {
        this.customAllotBean.operationType = '1'; // 操作类型-分配
        this.customAllotBean.disType = '4'; // 分配场景编号-待分配
        this.customAllotBean.pageSize = 10;
        this.customAllotBean.pageNum = 1;
        this.first = 0;
        this.doQuery();
    };
    // 查询
    WaiAllotComponent.prototype.doQuery = function () {
        var _this = this;
        this.doClearCheck();
        var paramCustList = JSON.parse(this.commfunc.getSessionDataCH('waitAllotCustInfoList'));
        var paramBatchNo = this.commfunc.getSessionDataCH('waitAllotBatchNo');
        if (paramCustList == undefined || paramCustList == null) {
            // 未执行过分配直接查询
            this.customAllotBean.waitCustList = undefined;
            this.customAllotBean.batchNo = undefined;
        }
        else {
            // 执行过分配增加查询条件
            this.customAllotBean.waitCustList = paramCustList;
            this.customAllotBean.batchNo = paramBatchNo;
        }
        this.httpService.queryCustManageCustInfo(this.customAllotBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.custList;
                _this.totalNum = data.total;
                if (data.isEmptyCache == '0') {
                    var param = JSON.parse(_this.commfunc.getSessionDataCH('waitAllotCustInfoList'));
                    if (param != undefined && param != null) {
                        _this.commfunc.clearSession('waitAllotCustInfoList');
                        _this.commfunc.clearSession('waitAllotBatchNo');
                        _this.customAllotBean.waitCustList = undefined;
                        _this.customAllotBean.batchNo = undefined;
                    }
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 清除
    WaiAllotComponent.prototype.doClearCheck = function () {
        this.chooseData = [];
        this.checkAll = false;
    };
    // 分页
    WaiAllotComponent.prototype.paginate = function (event) {
        this.customAllotBean.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.customAllotBean.pageNum = currentPage;
        this.first = (currentPage - 1) * this.customAllotBean.pageSize;
        this.doQuery();
    };
    // 全选按钮
    WaiAllotComponent.prototype.checkAllClick = function () {
        if (this.tableData) {
            for (var i = 0; i < this.tableData.length; i++) {
                if (this.checkAll == true) {
                    this.tableData[i].checkBox = true;
                    this.chooseData.push(this.tableData[i]);
                }
                else {
                    this.chooseData = [];
                    this.tableData[i].checkBox = false;
                }
            }
        }
    };
    // 单选按钮
    WaiAllotComponent.prototype.checkBoxClick = function (i, data) {
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
        if (this.chooseData.length == this.tableData.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    };
    // 分配
    WaiAllotComponent.prototype.doAllot = function (param) {
        if (param == 'more') {
            if (this.chooseData.length == 0) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择客户！' });
                return;
            }
            else {
                this.inValue = {
                    invalue: this.chooseData,
                    type: '1'
                };
                this.display = true;
            }
        }
        else {
            this.inValue = {
                invalue: param,
                type: '1'
            };
            this.display = true;
        }
    };
    // 关闭
    WaiAllotComponent.prototype.doMoreAllotCall = function () {
        this.tableData = [];
        this.chooseData = [];
        this.display = false;
        this.querySecle();
    };
    // 点击叉号
    WaiAllotComponent.prototype.onHideClose = function () {
        this.tableData = [];
        this.chooseData = [];
        this.display = false;
        this.querySecle();
    };
    //按钮权限
    WaiAllotComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
        // return true;
    };
    WaiAllotComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    WaiAllotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wait-allot',
            template: __webpack_require__(/*! ./wait-allot.component.html */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/wait-allot.component.html"),
            styles: [__webpack_require__(/*! ./wait-allot.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/custom-manage/wait-allot/wait-allot.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"]])
    ], WaiAllotComponent);
    return WaiAllotComponent;
}());



/***/ })

}]);
//# sourceMappingURL=custom-manage-custom-manage-module.js.map