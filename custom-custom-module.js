(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-custom-module"],{

/***/ "./src/app/pages/tzb/custom/address-administration/address-administration.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/address-administration/address-administration.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n\t<header-title [Info]=\"'地址管理'\"></header-title>\r\n\t<div class=\"ui-g-12 query_style\">\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">地址编号:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"SiteBean.zoneId\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">地址名称:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"SiteBean.zoneName\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">上级地地址编码:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"SiteBean.parentZoneId\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">上级地址名称:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"SiteBean.parentZoneName\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">地址层级:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"SiteBean.zoneLevel\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" label=\"查询\" (click)=\"query()\"></button>\r\n\t</div>\r\n\t<div style=\"float:right;padding-right:1em;\">\r\n\t\t<span class=\"icoColor\" (click)=\"addAddress()\">新增</span>\r\n\t\t<span class=\"icoColor\" (click)=\"toLead()\">模板导入</span>\r\n\t\t<span class=\"icoColor\" (click)=\"export()\">导出</span>\r\n\t\t<span class=\"icoColor\" (click)=\"batchDelete()\">批量删除</span>\r\n\t</div>\r\n\t<div class=\"ui-g-12 table base-table\">\r\n\t\t<p-dataTable [(value)]=\"resultList\" [emptyMessage]='tabMesg' scrollable=\"true\" scrollWidth=\"100%\" [style]=\"{'text-align':'center'}\">\r\n\t\t\t<p-column [style]=\"{'width':'100px'}\">\r\n\t\t\t\t<ng-template let-index=\"rowIndex\" pTemplate=\"header\">\r\n\t\t\t\t\t<p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkAll\" binary=\"false\" (click)=\"checkAllClick($event)\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<p-checkbox [(ngModel)]=\"col.checkBox\" (onChange)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"zoneId\" header=\"地址编号\" [style]=\"{'width':'80px'}\"></p-column>\r\n\t\t\t<p-column field=\"zoneName\" header=\"地址名称\" [style]=\"{'width':'180px'}\"></p-column>\r\n\t\t\t<p-column field=\"parentZoneId\" header=\"上级地址编码\" [style]=\"{'width':'100px'}\"></p-column>\r\n\t\t\t<p-column field=\"parentZoneName\" header=\"上级地址名称\" [style]=\"{'width':'120px'}\"></p-column>\r\n\t\t\t<p-column field=\"zoneLevel\" header=\"地址层级\" [style]=\"{'width':'80px'}\"></p-column>\r\n\t\t\t<p-column field=\"creater\" header=\"创建人编号\" [style]=\"{'width':'120px'}\"></p-column>\r\n\t\t\t<p-column field=\"createrName\" header=\"创建人姓名\" [style]=\"{'width':'120px'}\"></p-column>\r\n\t\t\t<p-column field=\"createrOrg\" header=\"创建人机构编号\" [style]=\"{'width':'150px'}\"></p-column>\r\n\t\t\t<p-column field=\"createrName\" header=\"创建人机构名称\" [style]=\"{'width':'150px'}\"></p-column>\r\n\t\t\t<p-column field=\"updater\" header=\"最后修改人编号\" [style]=\"{'width':'150px'}\"></p-column>\r\n\t\t\t<p-column field=\"updaterName\" header=\"最后修改人名称\" [style]=\"{'width':'150px'}\"></p-column>\r\n\t\t\t<p-column field=\"lastUpdatedStamp\" header=\"创建日期\" [style]=\"{'width':'200px'}\"></p-column>\r\n\t\t\t<p-column field=\"createdStamplastUpdatedStamp\" header=\"修改日期\" [style]=\"{'width':'200px'}\"></p-column>\r\n\t\t\t<p-column header=\"操作\" [style]=\"{'width':'180px'}\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<div class=\"table-button\">\r\n\t\t\t\t\t\t<span class=\"tabelDetailIco\" (click)=\"opendetail(col)\">查看</span>\r\n\t\t\t\t\t\t<span class=\"tabelUpdateIco\" (click)=\"openUpdate(col)\">编辑</span>\r\n\t\t\t\t\t\t<span class=\"tabelDeleteIco\" (click)=\"delete(col)\">删除</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t</p-dataTable>\r\n\t\t<p-paginator [first]=\"first\" rows={{SiteBean.pageSize}} totalRecords={{totalNum}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\t</div>\r\n</div>\r\n<p-dialog header=\"地址新增\" [(visible)]=\"isaddress\" modal=\"modal\" [responsive]=\"true\" class=\"my-cust-contactf\" (onHide)=\"closecust()\">\r\n\t<div class=\"ui-g-12 query_style\">\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">地址编号:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"Addsites.zoneId\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">地址名称:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"Addsites.zoneName\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">上级地址编号:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"Addsites.parentZoneId\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">地址层级:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"Addsites.zoneLevel\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" label=\"保存\" (click)=\"saveAddress()\"></button>\r\n\t</div>\r\n</p-dialog>\r\n<p-dialog header=\"地址编辑\" [(visible)]=\"isupdate\" modal=\"modal\" [responsive]=\"true\" class=\"my-cust-contactf\">\r\n\t<div class=\"ui-g-12 query_style\">\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">地址编号:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"Updatesites.zoneId\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">地址名称:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"Updatesites.zoneName\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">上级地址编号:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"Updatesites.parentZoneId\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">地址层级:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"Updatesites.zoneLevel\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" label=\"保存\" (click)=\"Updatedress()\"></button>\r\n\t</div>\r\n</p-dialog>\r\n<p-dialog header=\"地址详情\" [(visible)]=\"isdetail\" modal=\"modal\" [responsive]=\"true\" class=\"cust-contactf\">\r\n\t<div class=\"ui-g-12 query_style\">\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">地址编码:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Detailsite.zoneId\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">地址名称:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Detailsite.zoneName\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">上级行地址编号:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Detailsite.parentZoneId\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">上级行地址名称:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Detailsite.parentZoneName\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">地址层级:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Detailsite.zoneLevel\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">创建人编号:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Detailsite.creater\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">创建人姓名:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Detailsite.createrName\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">创建人所属机构:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Detailsite.createrOrg\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">创建人机构名称:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Detailsite.createrName\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">最后修改人编号:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Detailsite.updater\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">最后修改人名称:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Detailsite.updaterName\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 right\">创建日期:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Detailsite.lastUpdatedStamp\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">修改日期:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Detailsite.createdStamp\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12 btn\">\r\n\t\t\t<button type=\"button\" pButton icon=\"fa-close\" label=\"关闭\" style=\"color:#fff;\" (click)=\"closeDetail()\"></button>\r\n\t\t</div>\r\n\t</div>\r\n</p-dialog>\r\n<!-- 批量导入 -->\r\n<div class=\"overflow-control\">\r\n<p-dialog [(visible)]=\"batchDisplay\" header=\"模板导入\" modal=\"modal\" width=\"1100\" height=\"800\" [contentStyle]=\"{'overflow-y':'auto'}\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-3\">\r\n\t\t\t请先下载模板：\r\n\t\t\t<a href=\"{{DOWNLOAD}}/?fileUrl=/copdata/moban/&fileName=AddressDictionary.xls\" class=\"a_btn\" target=\"_blank\">下载模板</a>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4 rgt\">批量调整（Ecxel文件导入）</div>\r\n\t\t<div class=\"ui-g-5\">\r\n\t\t\t<p-fileUpload accept=\".xls\" invalidFileTypeMessageDetail=\"只能上传Excel\" invalidFileTypeMessageSummary=\"\" chooseLabel=\"浏览\" uploadLabel=\"上传\"\r\n\t\t\t    cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"onBeforeSend($event)\">\r\n\t\t\t</p-fileUpload>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-8 red\">\r\n\t\t\t<span>失败条数：</span>\r\n\t\t\t<span>{{custGroupListBean.failNum}}</span>\r\n\t\t\t<span>条</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 table-area tab\">\r\n\t\t<p-dataTable [emptyMessage]=\"tabMesg\" [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[10,20,50,200]\" [style]=\"{'text-align':'center'}\"\r\n\t\t    [(value)]=\"custGroupListBean.custList\">\r\n\t\t\t<p-column header=\"行号\">\r\n\t\t\t\t<ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t{{col.lineNum}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column header=\"成功/失败\">\r\n\t\t\t\t<ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t{{col.errvel}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column header=\"失败原因\">\r\n\t\t\t\t<ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n\t\t\t\t\t<span [ngClass]=\"{'err-color':col.executeFlag != 'S'}\">\r\n\t\t\t\t\t\t{{col.failReason}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t</p-dataTable>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" label=\"确定\" (click)=\"returnCustGroupList()\"></button>\r\n\t</div>\r\n</p-dialog>\r\n</div>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/address-administration/address-administration.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/address-administration/address-administration.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".query_style .ui-g-12 {\n  padding: 0; }\n\n.right {\n  text-align: right;\n  width: 14%; }\n\n.rgt {\n  text-align: right; }\n\n.btn {\n  text-align: center; }\n\n:host /deep/ .my-cust-contactf .ui-dialog.ui-shadow {\n  width: 90% !important;\n  height: 600px !important; }\n\n:host /deep/ .cust-contactf .ui-dialog.ui-shadow {\n  width: 80% !important;\n  height: 70% !important; }\n\n.red {\n  color: red; }\n\n:host /deep/ .overflow-control .ui-dialog.ui-shadow {\n  overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9hZGRyZXNzLWFkbWluaXN0cmF0aW9uL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcYWRkcmVzcy1hZG1pbmlzdHJhdGlvblxcYWRkcmVzcy1hZG1pbmlzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFVBQVUsRUFBQTs7QUFJbEI7RUFDSSxpQkFBaUI7RUFDakIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kscUJBQXFCO0VBQ3JCLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLHFCQUFvQjtFQUNwQixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vYWRkcmVzcy1hZG1pbmlzdHJhdGlvbi9hZGRyZXNzLWFkbWluaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXJ5X3N0eWxlIHtcclxuICAgIC51aS1nLTEyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTQlO1xyXG59XHJcblxyXG4ucmd0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5teS1jdXN0LWNvbnRhY3RmIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5jdXN0LWNvbnRhY3RmIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHdpZHRoOiA4MCUhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA3MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm92ZXJmbG93LWNvbnRyb2wgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/address-administration/address-administration.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/address-administration/address-administration.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: Addressadministration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addressadministration", function() { return Addressadministration; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _address_administration_bean_address_administration_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../address-administration/bean/address-administration.bean */ "./src/app/pages/tzb/custom/address-administration/bean/address-administration.bean.ts");
/* harmony import */ var _custom_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custom-group/bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//待办及提醒事项查看全部详情








var Addressadministration = /** @class */ (function () {
    function Addressadministration(commfunc, router, activatedRouter, CusOperationHttpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.CusOperationHttpService = CusOperationHttpService;
        this.tabMesg = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //暂无数据
        this.isaddress = false;
        this.isdetail = false;
        this.isupdate = false;
        this.checkBox = [];
        this.chooseData = [];
        this.zoneIds = [];
        this.checkAll = false;
        this.batchDisplay = false;
        this.addDisplay = false;
        this.first = 1;
        this.fileList = []; //上传文件列表
        this.UPLOAD = _uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_4__["TZB_CUS_UPLOAD"]; //上传模板
        this.DOWNLOAD = _uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_4__["TZB_CUS_DOWNLOAD"]; //下载模板
        this.custGroupListBean = new _custom_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_7__["CustGroupListBean"]();
        this.Addsites = new _address_administration_bean_address_administration_bean__WEBPACK_IMPORTED_MODULE_6__["Addsites"]();
        this.Updatesites = new _address_administration_bean_address_administration_bean__WEBPACK_IMPORTED_MODULE_6__["Updatesites"]();
        this.Detailsite = new _address_administration_bean_address_administration_bean__WEBPACK_IMPORTED_MODULE_6__["Detailsite"]();
        this.SiteBean = new _address_administration_bean_address_administration_bean__WEBPACK_IMPORTED_MODULE_6__["SiteBean"]();
    }
    Addressadministration.prototype.ngOnInit = function () {
        this.SiteBean.pageSize = 10;
        this.SiteBean.pageNum = 1;
        this.query();
    };
    Addressadministration.prototype.query = function () {
        var _this = this;
        var param = {
            zoneId: this.SiteBean.zoneId,
            zoneName: this.SiteBean.zoneName,
            parentZoneId: this.SiteBean.parentZoneId,
            parentZoneName: this.SiteBean.parentZoneName,
            zoneLevel: this.SiteBean.zoneLevel,
            pageSize: this.SiteBean.pageSize,
            pageNum: this.SiteBean.pageNum,
        };
        this.CusOperationHttpService.queryAddressDictionaryList(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.resultList = data.resultList;
                _this.totalNum = data.totalNum;
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    Addressadministration.prototype.paginate = function (event) {
        //每页显示的条数
        this.SiteBean.pageSize = event.rows * 1;
        //当前页
        this.SiteBean.pageNum = event.page + 1;
        this.query();
    };
    // 单选按钮
    Addressadministration.prototype.checkBoxClick = function (i, data) {
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
        if (this.chooseData.length == this.resultList.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    };
    // 全选按钮
    Addressadministration.prototype.checkAllClick = function () {
        if (this.resultList) {
            for (var i = 0; i < this.resultList.length; i++) {
                if (this.checkAll == true) {
                    this.resultList[i].checkBox = true;
                    this.chooseData.push(this.resultList[i]);
                }
                else {
                    this.chooseData = [];
                    this.resultList[i].checkBox = false;
                }
            }
        }
    };
    Addressadministration.prototype.saveAddress = function () {
        var _this = this;
        var param = {
            zoneName: this.Addsites.zoneName,
            parentZoneId: this.Addsites.parentZoneId,
            zoneLevel: this.Addsites.zoneLevel,
            zoneId: this.Addsites.zoneId
        };
        this.CusOperationHttpService.addAddressDictionary(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.totalNum = data.totalNum;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.isaddress = false;
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }), function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        };
    };
    Addressadministration.prototype.Updatedress = function () {
        var _this = this;
        var param = {
            oriZoneId: this.orizoneId,
            zoneName: this.Updatesites.zoneName,
            parentZoneId: this.Updatesites.parentZoneId,
            zoneLevel: this.Updatesites.zoneLevel,
            zoneId: this.Updatesites.zoneId
        };
        this.CusOperationHttpService.updateAddressDictionary(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.totalNum = data.totalNum;
                _this.isupdate = false;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.isupdate = false;
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }), function (err) {
            _this.isupdate = false;
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        };
    };
    Addressadministration.prototype.closeDetail = function () {
        this.isdetail = false;
    };
    Addressadministration.prototype.openUpdate = function (col) {
        this.orizoneId = col.zoneId;
        this.isupdate = true;
        this.Updatesites = col;
    };
    Addressadministration.prototype.delete = function (col) {
        var _this = this;
        var param = {
            zoneId: col.zoneId
        };
        this.zoneIds = [];
        this.zoneIds.push(param);
        this.CusOperationHttpService.deleteAddressDictionary({ zoneIds: this.zoneIds }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.query();
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }), function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        };
    };
    Addressadministration.prototype.addAddress = function () {
        this.isaddress = true;
    };
    Addressadministration.prototype.opendetail = function (col) {
        this.isdetail = true;
        this.Detailsite = col;
    };
    Addressadministration.prototype.toLead = function () {
        this.batchDisplay = true;
    };
    //批量导入
    Addressadministration.prototype.onBeforeSend = function (event) {
        var _this = this;
        // 上传点击,需跨域
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
                return;
            }
            this.filePath = this.fileList[0].fileUrl;
            this.fileName = this.fileList[0].fileName;
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '获取服务器列表失败！' }];
        }
        //不需要审批
        var param = {
            fileUrl: this.filePath,
            fileName: this.fileName
        };
        this.CusOperationHttpService.importAddressDictionary(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custGroupListBean.custList = data.failList;
                _this.custGroupListBean.failNum = data.failList.length;
                _this.custGroupListBean.custList.forEach(function (e) {
                    e['errvel'] = '失败';
                });
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
    };
    Addressadministration.prototype.returnCustGroupList = function () {
        this.batchDisplay = false;
        this.custGroupListBean.custList = null;
        this.custGroupListBean.failNum = null;
    };
    Addressadministration.prototype.closecust = function () {
        this.Addsites = new _address_administration_bean_address_administration_bean__WEBPACK_IMPORTED_MODULE_6__["Addsites"]();
    };
    Addressadministration.prototype.export = function () {
        var _this = this;
        var param = {
            zoneId: this.SiteBean.zoneId,
            zoneName: this.SiteBean.zoneName,
            parentZoneId: this.SiteBean.parentZoneId,
            parentZoneName: this.SiteBean.parentZoneName,
            zoneLevel: this.SiteBean.zoneLevel,
            pageSize: this.SiteBean.pageSize,
            pageNum: this.SiteBean.pageNum,
        };
        this.CusOperationHttpService.exportAddressDictionary(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                var aa = data.fileName;
                window.open(_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_4__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(aa) + "&fileUrl=" + data.fileUrl);
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
    Addressadministration.prototype.batchDelete = function () {
        var _this = this;
        var param = {
            zoneIds: this.chooseData
        };
        this.CusOperationHttpService.deleteAddressDictionary(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.chooseData = [];
                _this.query();
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }), function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        };
    };
    Addressadministration = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! ./address-administration.component.html */ "./src/app/pages/tzb/custom/address-administration/address-administration.component.html"),
            styles: [__webpack_require__(/*! ./address-administration.component.scss */ "./src/app/pages/tzb/custom/address-administration/address-administration.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"]])
    ], Addressadministration);
    return Addressadministration;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/address-administration/bean/address-administration.bean.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/address-administration/bean/address-administration.bean.ts ***!
  \*********************************************************************************************/
/*! exports provided: SiteBean, Detailsite, Addsites, Updatesites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteBean", function() { return SiteBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Detailsite", function() { return Detailsite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addsites", function() { return Addsites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Updatesites", function() { return Updatesites; });
var SiteBean = /** @class */ (function () {
    function SiteBean() {
    }
    return SiteBean;
}());

var Detailsite = /** @class */ (function () {
    function Detailsite() {
    }
    return Detailsite;
}());

var Addsites = /** @class */ (function () {
    function Addsites() {
    }
    return Addsites;
}());

var Updatesites = /** @class */ (function () {
    function Updatesites() {
    }
    return Updatesites;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/cross-sell-task/cross-sell-task.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/cross-sell-task/cross-sell-task.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\r\n<div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"'客户基本信息'\"></header-title>\r\n    <div class=\"ui-g-12 gap-name\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>任务类型：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>交叉销售</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>营销活动名称：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{campaignName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>数据来源：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{dataSource|codeValuePie:dataSourceOptions}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 gap-name\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>营销开始时间：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{fromDate}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>营销结束时间：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{thruDate}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>客户号：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{custNo}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 gap-name\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>客户名称：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{custName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>手机号码：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{mobileNum}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>推荐产品：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{productName}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 gap-name\">\r\n        <div class=\"ui-g-4\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span>推荐理由：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>{{recReasons}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 module\">\r\n    <header-title [Info]=\"'客户联络'\"></header-title>\r\n    <div class=\"ui-g-12 gap-title\">\r\n        <div class=\"ui-g-4 cantact-title\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span appValidation>联系方式：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"contactWays\" [(ngModel)]=\"contactWay\"class=\"items-name\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 gap-title\">\r\n        <div class=\"ui-g-4 cantact-title\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span appValidation>客户反馈：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-dropdown [options]=\"feedbacks\" [(ngModel)]=\"feedback\"class=\"items-name\"></p-dropdown>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 gap-title\">\r\n        <div class=\"ui-g-4 cantact-title\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span appValidation>执行日期：</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <p-calendar [showIcon]=\"true\" [(ngModel)]=\"executeDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\"\r\n                    dateFormat=\"yy-mm-dd\" [locale]=\"ch\"></p-calendar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 gap-title\">\r\n        <div class=\"ui-g-4 cantact-title\">\r\n            <div class=\"ui-g-4 title\">\r\n                <span appValidation>执行情况：</span>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <textarea rows=\"4\" cols=\"80\" pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"executeCase\"></textarea>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"ui-g-12\" style=\"text-align:center\">\r\n    <button pButton label=\"提交\" (click)=\"sumbit()\" [disabled]=\"isClickYL\"></button>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/cross-sell-task/cross-sell-task.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/cross-sell-task/cross-sell-task.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host/deep/ .ui-menubar {\n  border: none;\n  background-color: red !important; }\n\n.flt {\n  float: left;\n  background-color: red; }\n\n.basic {\n  margin-top: 5px;\n  background-color: white; }\n\n.functions {\n  border-bottom: 1px solid #efefef;\n  padding-bottom: 0;\n  padding-left: 0;\n  background: #fff; }\n\n.functions .whole {\n    line-height: 31px;\n    padding-left: 0;\n    background: #efefef;\n    padding: 0; }\n\n.functions .whole .change {\n      display: inline-block;\n      font-size: 15px;\n      height: 40px;\n      line-height: 40px;\n      border-radius: 3px 3px 0 0;\n      color: #929292;\n      padding: 0px 30px;\n      font-weight: bold; }\n\n.active {\n  position: relative;\n  border: none !important;\n  color: #19b0c8 !important;\n  border-bottom-width: 0px;\n  background: #fafafa !important; }\n\n.active:before {\n  content: '';\n  width: 59px;\n  height: 2px;\n  background: #19b0c8;\n  display: inline-block;\n  position: absolute;\n  bottom: 0;\n  right: 35%; }\n\n.padding-one {\n  padding: 1em; }\n\n.bgcolor {\n  background: #f7f7f7;\n  padding: 0; }\n\n@media screen and (max-width: 1280px) {\n  .functions {\n    border-bottom: 1px solid #dddddd; }\n    .functions .change {\n      font-size: 14px;\n      padding: 0px 15px; }\n  .active {\n    background-color: #e5e6e9 !important; }\n  .bgcolor {\n    background: #e5e6e9; } }\n\n.title {\n  text-align: right;\n  padding-bottom: 0; }\n\n.talk {\n  text-align: right;\n  width: 11.5%; }\n\n.gap-name {\n  padding-bottom: 0; }\n\n.gap-name .ui-g-4 {\n    padding-bottom: 0; }\n\n.gap-name .ui-g-4 .title {\n      padding-bottom: 0; }\n\n.gap-name .ui-g-4 .ui-g-6 {\n      padding-bottom: 0; }\n\n.gap-name .talk {\n    padding-bottom: 0; }\n\n.gap-name .ui-g-10 {\n    padding-bottom: 0; }\n\n.imgName {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jcm9zcy1zZWxsLXRhc2svRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjcm9zcy1zZWxsLXRhc2tcXGNyb3NzLXNlbGwtdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixnQ0FDSixFQUFBOztBQUVBO0VBQ0ksV0FBVztFQUNYLHFCQUNKLEVBQUE7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FBSTNCO0VBQ0ksZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBSnBCO0lBTVEsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsVUFBVSxFQUFBOztBQVRsQjtNQVdZLHFCQUFxQjtNQUNyQixlQUFlO01BQ2YsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQiwwQkFBMEI7TUFDMUIsY0FBYztNQUNkLGlCQUFpQjtNQUNqQixpQkFBaUIsRUFBQTs7QUFLN0I7RUFDSSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsOEJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFFZDtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxtQkFBbUI7RUFDbkIsVUFBVSxFQUFBOztBQUdkO0VBQ0k7SUFDSSxnQ0FBZ0MsRUFBQTtJQURwQztNQUdRLGVBQWU7TUFDZixpQkFBaUIsRUFBQTtFQUd6QjtJQUNJLG9DQUFvQyxFQUFBO0VBRXhDO0lBQ0ksbUJBQW1CLEVBQUEsRUFDdEI7O0FBRUw7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCO0VBQ2pCLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFEckI7SUFHUSxpQkFBaUIsRUFBQTs7QUFIekI7TUFLWSxpQkFBaUIsRUFBQTs7QUFMN0I7TUFRWSxpQkFBaUIsRUFBQTs7QUFSN0I7SUFZUSxpQkFBaUIsRUFBQTs7QUFaekI7SUFlUSxpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2Nyb3NzLXNlbGwtdGFzay9jcm9zcy1zZWxsLXRhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC9kZWVwLyAudWktbWVudWJhciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudFxyXG59XHJcblxyXG4uZmx0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkXHJcbn1cclxuXHJcbi5iYXNpYyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLy8g5YiH5o2iXHJcbi5mdW5jdGlvbnMge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAud2hvbGV7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAuY2hhbmdlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzkyOTI5MjtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMTliMGM4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFjdGl2ZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogNTlweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzE5YjBjODtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAzNSU7XHJcbn1cclxuLnBhZGRpbmctb25lIHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuLmJnY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAuZnVuY3Rpb25zIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAuY2hhbmdlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNmU5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYmdjb2xvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U1ZTZlOTtcclxuICAgIH1cclxufVxyXG4udGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbi50YWxre1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTEuNSU7XHJcbn1cclxuLmdhcC1uYW1le1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAudWktZy00e1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS1nLTZ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50YWxre1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLnVpLWctMTB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbWdOYW1le1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/cross-sell-task/cross-sell-task.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/cross-sell-task/cross-sell-task.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CrossSellTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossSellTaskComponent", function() { return CrossSellTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
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


// import { CrossSellingBean } from './bean/cross-selling.bean';




var CrossSellTaskComponent = /** @class */ (function () {
    function CrossSellTaskComponent(commfunc, httpService, router, activatedRoute) {
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.msgs = [];
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        this.dataMap = {};
        this.dataSourceOptions = []; //数据来源
        this.contactWays = [];
        this.feedbacks = [];
        this.isHistory = false;
        this.isClickYL = false; //可点
        if (this.activatedRoute.snapshot.params['dataMap']) {
            this.dataMap = JSON.parse(this.activatedRoute.snapshot.params['dataMap']);
        }
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        this.taskId = JSON.parse(this.activatedRoute.snapshot.params['taskId']);
        // 历史 和 待办 判断-隐藏按钮
        // this.flag = this.activatedRoute.snapshot.params['markFlag'];
        // if (this.flag == '1') {
        //     this.isHistory = false;
        // } else {
        //     this.isHistory = true;
        // }
    }
    CrossSellTaskComponent.prototype.ngOnInit = function () {
        this.codeValues(); //调用方法，获取全部码值
        this.dataSourceOptions = this.code['Data_Source']; //数据来源
        this.contactWays = this.code['contactWays']; //联系方式
        this.feedbacks = this.code['dataSourceOptions']; //客户反馈
        this.contactWay = '01';
        this.feedback = '01';
        this.queryCustBaseInfo();
    };
    CrossSellTaskComponent.prototype.queryCustBaseInfo = function () {
        var _this = this;
        console.log(this.dataMap);
        var param = {
            marketingCampaignId: this.dataMap.requestSeqNo,
            custNo: this.dataMap.custNo,
            productNo: this.dataMap.productNo,
        };
        this.httpService.queryCustBaseInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custNo = data.custBaseInfo.custNo;
                _this.custName = data.custBaseInfo.custName;
                _this.productName = data.custBaseInfo.productName;
                _this.thruDate = data.custBaseInfo.thruDate;
                _this.fromDate = data.custBaseInfo.fromDate;
                _this.recReasons = data.custBaseInfo.recReasons;
                _this.campaignName = data.custBaseInfo.campaignName;
                _this.dataSource = data.custBaseInfo.dataSource;
                _this.mobileNum = data.custBaseInfo.mobileNum;
                _this.productNo = data.custBaseInfo.productNo;
                _this.marketingCampaignId = data.custBaseInfo.marketingCampaignId;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    // 提交
    CrossSellTaskComponent.prototype.sumbit = function () {
        var _this = this;
        if (!this.executeDate || this.executeDate == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '执行日期不能为空' });
            return;
        }
        if (!this.executeCase || this.executeCase == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '执行情况不能为空' });
            return;
        }
        var param = {
            marketingCampaignId: this.marketingCampaignId,
            custNo: this.custNo,
            productNo: this.productNo,
            contactWay: this.contactWay,
            feedback: this.feedback,
            executeDate: this.commfunc.transDateN(this.executeDate),
            executeCase: this.executeCase,
        };
        this.httpService.updateCustLiaison(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.bpmNext();
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    CrossSellTaskComponent.prototype.bpmNext = function () {
        var _this = this;
        var params = {
            userId: this.userId,
            taskId: this.taskId,
            bussinessMap: {
                dataMap: {}
            }
        };
        this.httpService.bpmNextTask(params).subscribe(function (data) {
            var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
            if (data.returnCode.code == 'success') {
                _this.isClickYL = true;
                _this.router.navigate(['/pages/tzb/custom/reminder-do/backlog-detail/btn-page/workdesk-page']);
            }
            else {
                _this.isClickYL = false;
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.isClickYL = false;
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    //码值
    CrossSellTaskComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CrossSellTaskComponent.prototype.doUp = function () {
        setTimeout(function () {
            window.history.go(-1);
        }, 500);
    };
    CrossSellTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cross-sell-task',
            styles: [__webpack_require__(/*! ./cross-sell-task.component.scss */ "./src/app/pages/tzb/custom/cross-sell-task/cross-sell-task.component.scss")],
            template: __webpack_require__(/*! ./cross-sell-task.component.html */ "./src/app/pages/tzb/custom/cross-sell-task/cross-sell-task.component.html"),
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CrossSellTaskComponent);
    return CrossSellTaskComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom.component.ts ***!
  \******************************************************/
/*! exports provided: Custom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Custom", function() { return Custom; });
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

var Custom = /** @class */ (function () {
    function Custom() {
    }
    Custom.prototype.ngOnInit = function () {
    };
    Custom = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], Custom);
    return Custom;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom.module.ts ***!
  \***************************************************/
/*! exports provided: TzbCustomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TzbCustomModule", function() { return TzbCustomModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../service/basis/authority/authority.service */ "./src/app/service/basis/authority/authority.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custom_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom.routing */ "./src/app/pages/tzb/custom/custom.routing.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _custom_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom.component */ "./src/app/pages/tzb/custom/custom.component.ts");
/* harmony import */ var _performance_perfromance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./performance/perfromance.component */ "./src/app/pages/tzb/custom/performance/perfromance.component.ts");
/* harmony import */ var _work_report_work_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./work-report/work-report.component */ "./src/app/pages/tzb/custom/work-report/work-report.component.ts");
/* harmony import */ var _file_center_file_center_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./file-center/file-center.module */ "./src/app/pages/tzb/custom/file-center/file-center.module.ts");
/* harmony import */ var _address_administration_address_administration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./address-administration/address-administration.component */ "./src/app/pages/tzb/custom/address-administration/address-administration.component.ts");
/* harmony import */ var _trade_management_trade_management_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trade-management/trade-management.component */ "./src/app/pages/tzb/custom/trade-management/trade-management.component.ts");
/* harmony import */ var app_pages_tzb_custom_loan_deposit_change_loan_details2_loan_details2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/pages/tzb/custom/loan-deposit-change/loan-details2/loan-details2.component */ "./src/app/pages/tzb/custom/loan-deposit-change/loan-details2/loan-details2.component.ts");
/* harmony import */ var app_pages_tzb_custom_cross_sell_task_cross_sell_task_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/pages/tzb/custom/cross-sell-task/cross-sell-task.component */ "./src/app/pages/tzb/custom/cross-sell-task/cross-sell-task.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//客户组件


//页面




// import { AchievementTaskComponent } from "./achievement-task/achievement-task.component";





// import { MarketingDetailComponent } from 'app/pages/tzb/custom/custom-information/foreground-background/marketing-detail/marketing-detail.component';
// import { CommonModule } from '@angular/common';
var TzbCustomModule = /** @class */ (function () {
    function TzbCustomModule() {
    }
    TzbCustomModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__["SharedBasisModule"],
                _custom_routing__WEBPACK_IMPORTED_MODULE_4__["CustomRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__["FrameworkModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _file_center_file_center_module__WEBPACK_IMPORTED_MODULE_9__["FileCenterModule"]
            ],
            declarations: [
                _custom_component__WEBPACK_IMPORTED_MODULE_6__["Custom"],
                _performance_perfromance_component__WEBPACK_IMPORTED_MODULE_7__["PerformanceComponent"],
                _work_report_work_report_component__WEBPACK_IMPORTED_MODULE_8__["WorkReportComponent"],
                _address_administration_address_administration_component__WEBPACK_IMPORTED_MODULE_10__["Addressadministration"],
                _trade_management_trade_management_component__WEBPACK_IMPORTED_MODULE_11__["Trademanagement"],
                app_pages_tzb_custom_loan_deposit_change_loan_details2_loan_details2_component__WEBPACK_IMPORTED_MODULE_12__["LoanDetails2Component"],
                app_pages_tzb_custom_cross_sell_task_cross_sell_task_component__WEBPACK_IMPORTED_MODULE_13__["CrossSellTaskComponent"],
            ],
            exports: [],
            entryComponents: [],
            providers: [
                _service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_2__["AuthorityService"]
            ]
        })
    ], TzbCustomModule);
    return TzbCustomModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom.routing.ts ***!
  \****************************************************/
/*! exports provided: CustomRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRouting", function() { return CustomRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_custom_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/pages/tzb/custom/custom.component */ "./src/app/pages/tzb/custom/custom.component.ts");
/* harmony import */ var _custom_information_custom_change_custom_general_custom_general_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-information/custom-change/custom-general/custom-general.component */ "./src/app/pages/tzb/custom/custom-information/custom-change/custom-general/custom-general.component.ts");
/* harmony import */ var _address_administration_address_administration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address-administration/address-administration.component */ "./src/app/pages/tzb/custom/address-administration/address-administration.component.ts");
/* harmony import */ var _trade_management_trade_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trade-management/trade-management.component */ "./src/app/pages/tzb/custom/trade-management/trade-management.component.ts");
/* harmony import */ var app_pages_tzb_custom_loan_deposit_change_loan_details2_loan_details2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/loan-deposit-change/loan-details2/loan-details2.component */ "./src/app/pages/tzb/custom/loan-deposit-change/loan-details2/loan-details2.component.ts");
/* harmony import */ var app_pages_tzb_custom_cross_sell_task_cross_sell_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/cross-sell-task/cross-sell-task.component */ "./src/app/pages/tzb/custom/cross-sell-task/cross-sell-task.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_view_report_reportDetail_reportDetail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/custom-view/report/reportDetail/reportDetail.component */ "./src/app/pages/tzb/custom/custom-view/report/reportDetail/reportDetail.component.ts");








// import { CustomAbnormalComponent } from './custom-abnormal/custom-abnormal.component';
// import { AbnormalRankingComponent } from './abnormal-ranking/abnormal-ranking.component';
// import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
// 页面
// import { Custom} from './custom.component';
// import { Custom} from './custom.component';
var routes = [
    {
        path: '',
        component: app_pages_tzb_custom_custom_component__WEBPACK_IMPORTED_MODULE_1__["Custom"],
        children: [
            { path: 'custom-marketing', loadChildren: './custom-marketing/custom-marketing.module#CusMaketingModule' },
            { path: 'custom-information', loadChildren: './custom-information/custom-information.module#CusInfomationModule' },
            { path: 'custom-group', loadChildren: './custom-group/custom-group.module#CusGroupModule' },
            { path: 'reminder-do', loadChildren: './reminder-do/reminder-do.module#RemindDoModule' },
            { path: 'custom-pro', loadChildren: './custom-pro/custom-pro.module#CusProModule' },
            { path: 'marketing', loadChildren: './marketing/marketing.module#MarketingModule' },
            { path: 'work-rask', loadChildren: './work-rask/work-rask.module#WorkRaskModule' },
            { path: 'performance', loadChildren: './performance/performance.module#PerformanceModule' },
            { path: 'work-report', loadChildren: './work-report/work-report.module#WorkReportModule' },
            { path: 'otherThing', loadChildren: './otherThing/otherThing.module#OtherThingModule' },
            { path: 'downloadCenter', loadChildren: './downloadCenter/downloadCenter.module#DownloadCenterModule' },
            { path: 'file-center', loadChildren: './file-center/file-center.module#FileCenterModule' },
            { path: 'eventcenter', loadChildren: './eventcenter/eventcenter.module#EventCenterModule' },
            // { path: 'performance-analysis', loadChildren: './custom-performance/custom-performance.component.module#CustomPerformanceModule' }, // 客户经理业绩
            { path: 'performance-analysis', loadChildren: './customer-performance/customer-performance.module#CustomerPerformanceModule' },
            { path: 'association-relation', loadChildren: './custom-information/association-relation/association-relation.module#AssociationRelationModule' },
            { path: 'general', loadChildren: './custom-view/custom-general/custom-general.module#CustomGeneralModule' },
            { path: 'bigCustomer', loadChildren: './bigCustomer/bigCustomer.module#BigCustomerModule' },
            { path: 'deposit-product-flexible-pricing', loadChildren: './deposit-product-flexible-pricing/deposit-product-flexible-pricing.module#DepositProductFlexiblePricingModule' },
            { path: 'achievement-task', loadChildren: './achievement-task/achievement-task.module#AchievementTaskModule' },
            { path: 'custom-general', component: _custom_information_custom_change_custom_general_custom_general_component__WEBPACK_IMPORTED_MODULE_2__["CustomGeneral"] },
            { path: 'cross-sell-task', component: app_pages_tzb_custom_cross_sell_task_cross_sell_task_component__WEBPACK_IMPORTED_MODULE_6__["CrossSellTaskComponent"] },
            { path: 'custom-list-pre-screening', loadChildren: './custom-list-pre-screening/custom-list-pre-screening.module#CustomListPreScreeningModule' },
            { path: 'establish-requirements', loadChildren: './establish-requirements/establish-requirements.module#EstablishRequirementsModule' },
            { path: 'teleMarketing', loadChildren: './telemarketing/telemarketing.module#TeleMarketingModule' },
            { path: 'loan-deposit-change', loadChildren: './loan-deposit-change/loan-deposit-change.module#LoanDepositChangeModule' },
            { path: 'credit-rrm', loadChildren: './credit-rrm/credit-rrm.module#CreditRrmModule' },
            { path: 'credit-ccm', loadChildren: './credit-ccm/credit-ccm.module#CreditCcmModule' },
            { path: 'overdue', loadChildren: './overdue/overdue.module#OverdueModule' },
            { path: 'address-administration', component: _address_administration_address_administration_component__WEBPACK_IMPORTED_MODULE_3__["Addressadministration"] },
            { path: 'trade-management', component: _trade_management_trade_management_component__WEBPACK_IMPORTED_MODULE_4__["Trademanagement"] },
            { path: 'overdue', loadChildren: './overdue/overdue.module#OverdueModule' },
            { path: 'loan-detail2', component: app_pages_tzb_custom_loan_deposit_change_loan_details2_loan_details2_component__WEBPACK_IMPORTED_MODULE_5__["LoanDetails2Component"] },
            { path: 'contract-temp', loadChildren: './contract-temp-config/contract-temp-config.module#ContractTempConfigModule' },
            { path: 'custom-list-manage', loadChildren: './custom-list-manage/custom-list-manage.module#CustomListManageModule' },
            { path: 'custom-search', loadChildren: './custom-search/custom-search.module#CustomSearchModule' },
            { path: 'life-cycle', loadChildren: './life-cycle/life-cycle.module#LifeCycleModule' },
            { path: 'report-detail', component: app_pages_tzb_custom_custom_view_report_reportDetail_reportDetail_component__WEBPACK_IMPORTED_MODULE_7__["ReportDetailComponent"] },
            { path: 'custom-contact-new', loadChildren: './custom-contact-new/custom-contact-new.module#CustomContactNewModule' },
            { path: 'customer-videos', loadChildren: './customer-videos/customer-videos.module#CustomerVideosModule' },
        ]
    }
];
var CustomRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/loan-details2/loan-details2.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/loan-details2/loan-details2.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"customLoan\" id=\"customLoan\">\r\n  <!-- <div class=\"ui-g-12\" *ngIf=\"show\">\r\n    贷款详情\r\n    <hr>\r\n  </div> -->\r\n  <div class=\"ui-g-12 btn\">\r\n    <span class=\"spcs\" *ngIf=\"show\" [ngClass]=\"{'active':activeShow==0}\"><a (click)=\"showDetail(0)\" class=\"colletCooperator\">贷款信息明细</a></span>\r\n    <span class=\"spcs\" *ngIf=\"show\" [ngClass]=\"{'active':activeShow==1}\"><a (click)=\"showDetail(1)\" class=\"colletCooperator\">还款信息</a></span>\r\n    <span class=\"spcs\" *ngIf=\"show\" [ngClass]=\"{'active':activeShow==2}\"><a (click)=\"showDetail(2)\" class=\"colletCooperator\">担保信息</a></span>\r\n    <span class=\"spcs\" *ngIf=\"show\" [ngClass]=\"{'active':activeShow==3}\"><a (click)=\"showDetail(3)\" class=\"colletCooperator\">共同借款人</a></span>\r\n    <span class=\"spcs\" *ngIf=\"show\" [ngClass]=\"{'active':activeShow==4}\"><a (click)=\"showDetail(4)\" class=\"colletCooperator\">账户积数冲减</a></span>\r\n    <span class=\"spcs\" *ngIf=\"show\" [ngClass]=\"{'active':activeShow==5}\"><a (click)=\"beforeLoan()\" class=\"colletCooperator\">贷前影像信息</a></span>\r\n    <!-- <span class=\"spcs\" *ngIf=\"show\"><a (click)=\"afterLoan()\" class=\"colletCooperator\">贷后影像信息</a></span> -->\r\n    <!-- <button pButton label=\"贷款信息明细\" (click)=\"showDetail(0)\"></button>\r\n    <button pButton label=\"还款信息\" (click)=\"showDetail(1)\"></button>\r\n    <button pButton label=\"担保信息\" (click)=\"showDetail(2)\"></button>\r\n    <button pButton label=\"共同借款人\" (click)=\"showDetail(3)\"></button>\r\n    <button pButton label=\"账户积数冲减\" (click)=\"showDetail(4)\"></button>\r\n    <button pButton label=\"贷前影像信息\" (click)=\"showDetail(5)\"></button>\r\n    <button pButton label=\"贷后影像信息\" (click)=\"showDetail(6)\"></button> -->\r\n  <div class=\"container\" [ngSwitch]=\"myVar\">\r\n    <div class=\"ui-g-12\" *ngSwitchCase=\"0\">\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">交易日期：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.tranDate|timeValuePie}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">柜员流水号：</span><span class=\"ui-g-6\" style=\"padding:0;\" style=\"word-wrap:break-word;\">{{loanDetail.tellSeqNo}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">经办机构：</span><span class=\"ui-g-6\" style=\"padding:0;\" style=\"word-wrap:break-word;\">{{loanDetail.appBranchNo}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">管理机构：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.manageBranchId}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">客户号：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.clientNo}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">合同号：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.contractNo}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">借据号：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.duebillNo}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">业务类型：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.bussType}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">贷款性质：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.loanNature|codeValuePie:loanNatureOptions}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">贷款形式：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.loanForm|codeValuePie:loanFormOptions}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">行业投向：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.investIndustry|codeValuePie:investIndustryOptions}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">贷款类型：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.loanType|codeValuePie:loanTypeOptions}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">担保方式：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.guaranteeMode|codeValuePie:guaranteeModeOptions}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">计息标志：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.countInterrstFlag|codeValuePie:countInterrstFlagOptions}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">科目号：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.glCode}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">贷款账号：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.loanAcctNo}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">结算账号：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.settleAcctNo}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">开始日期：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.startDate|timeValuePie}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">终止日期：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.endDate|timeValuePie}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">币种：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.ccy|codeValuePie:currencyOptions}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">贷款金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.loanAmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">利率：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.intRate/1.2)|number:'1.2-2'}}‰</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">浮动利率：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.floatIntRate/1.2)|number:'1.2-2'}}‰</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">逾期利率：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.overRate/1.2)|number:'1.2-2'}}‰</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">呆滞利率：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.idleRate/1.2)|number:'1.2-2'}}‰</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">呆账利率：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.deadRate/1.2)|number:'1.2-2'}}‰</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">展期利率：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.extendRate/1.2)|number:'1.2-2'}}‰</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">复利利率：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.compositionRate/1.2)|number:'1.2-2'}}‰</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">贷款余额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.loanBalance/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">未逾期贷款余额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.balance/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">逾期贷款余额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.overLoanBalance/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">呆滞贷款余额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.idleLoanBalance/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">呆账贷款余额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.deadLoanBalance/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">正常余额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.normalLoanBalance/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">关注余额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.interestLoanBalance/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">次级余额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.secondaryLoanBalance/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">可疑余额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.doubtLoanBalance/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">损失余额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.lossLoanBalance/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">清分日期：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.clearingDate|timeValuePie}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">减值日期：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.impairedDate|timeValuePie}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">减值余额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.impairedBalance/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">注销日期：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.closeDate|timeValuePie}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">核销余额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.cancelBalance/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">调账日期：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.mdyAcctDate|timeValuePie}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">转账金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.tranferAmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">应收利息累计：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.interest/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">实收利息：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.paidInterest/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">欠息累计：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.owedInterest/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">表内欠息：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.listInterest/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">表外欠息：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.sheetInterest/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">逾期总次数：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.overTotalTimes}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">原结束日期：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.oriEndDate|timeValuePie}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">变更日期：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.changeDate|timeValuePie}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">催收签字日期：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.signDate|timeValuePie}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">原合同号：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.oriContractNo}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">原借据号：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.oriDuebillNo}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">首笔贷款日期：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.firstLoanDate|timeValuePie}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">逾期次数：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.overTimes}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">用途：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.usage}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">资金来源：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.fundSource}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">回收方式：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.recycleMode|codeValuePie:recycleModeOptions}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">贷款归属：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.loanKind|codeValuePie:subBussTypeOptions}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">发放金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.grantLmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">回收金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.recycleAmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">正常回收金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.normalRecycleAmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">逾期回收金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.overRecycleAmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">呆滞回收金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.idleRecycleAmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">呆账回收金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.deadRecycleAmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">减值回收金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.impairedRecycleAmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">核销回收金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.cancelRecycleAmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本日实收利息：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.dayPaidInterest/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本日应收利息：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.dayInterest/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本日发放金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.dayGrantLmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本日回收金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.dayRecycleAmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本旬实收利息：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.xunPaidInterest/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本旬应收利息：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.xunInterest/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本旬发放金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.xunGrantLmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本旬回收金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.xunRecycleAmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本月实收利息：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.monthPaidInterest/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本月应收利息：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.monthInterest/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本月发放金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.monthGrantLmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本月回收金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.monthRecycleAmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本季实收利息：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.quarterPaidInterest/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本季应收利息：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.quarterInterest/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本季发放金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.quarterGrantLmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本季回收金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.quarterRecycleAmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本年实收利息：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.yearPaidInterest/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本年应收利息：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.yearInterest/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本年发放金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.yearGrantLmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">本年回收金额：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{(loanDetail.yearRecycleAmt/1)|number:'1.2-2'}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">责任人：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.liablePersonName}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">调查人：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.investigatorName}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">折扣率：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.discountPercent}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">客户状态：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.clientState|codeValuePie:clientStateOptions}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">优惠日期：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.discountDate|timeValuePie}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">借据状态：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.duebillState}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">子业务品种编号：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.subBussCode}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">清算日期：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.settleDate|timeValuePie}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">上次还款日期：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.latelyRetDate|timeValuePie}}</span></div>        \r\n        <!-- <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">责任人：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.liablePersonName}}</span></div>\r\n        <div class=\"ui-g-4\"  style=\"padding-top:7px;\"><span class=\"ui-g-5\" style=\"text-align:right;padding:0;\">调查人：</span><span class=\"ui-g-6\" style=\"padding:0;\">{{loanDetail.investigatorName}}</span></div> -->\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngSwitchCase=\"1\">\r\n      <p-dataTable [value]=\"repaymentsitems\" [emptyMessage]=\"tabMesg\" [style]=\"{'text-align':'center'}\" [style]=\"{'text-align':'center'}\">\r\n        <p-column field=\"clientNo\" header=\"客户号\">\r\n          <!-- <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            <a style=\"cursor:pointer\" (click)=\"toCustView(col)\" >{{col.clientNo}}</a>\r\n          </ng-template> -->\r\n        </p-column>\r\n        <p-column field=\"tellSeqNo\" header=\"柜员流水号\"></p-column>\r\n        <p-column field=\"tranType\" header=\"交易类型\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{col.tranType|codeValuePie:tranTypeOptions}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"tranDate\" header=\"交易日期\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{col.tranDate|timeValuePie}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"amt\" header=\"交易金额\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{(col.amt/1)|number:'1.2-2'}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"principalAmt\" header=\"本金金额\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{(col.principalAmt/1)|number:'1.2-2'}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"interest\" header=\"利息\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{(col.interest/1)|number:'1.2-2'}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"balance\" header=\"账户余额\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{(col.balance/1)|number:'1.2-2'}}\r\n          </ng-template>\r\n        </p-column>\r\n      </p-dataTable>\r\n      <p-paginator rows=\"{{repaymentsitemspageSize}}\" totalRecords=\"{{repaymentsitemstotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n      (onPageChange)=\"paginaterepaymentsitems($event)\"></p-paginator>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngSwitchCase=\"2\">\r\n      <p-dataTable [value]=\"loanGuarInfoItems\" [emptyMessage]=\"tabMesg\" [style]=\"{'text-align':'center'}\">\r\n        <p-column field=\"clientNo\" header=\"客户号\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            <!-- <a *ngIf=\"(num==2)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}&scene=0303_XWZH_View\" target=\"_blank\">{{col.clientNo}}</a> -->\r\n            <a href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum=2\" target=\"_blank\">{{col.clientNo}}</a>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"clientName\" header=\"客户名称\"></p-column>\r\n        <p-column field=\"pledgeAmt\" header=\"担保/抵质押金额（单位：元）\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{(col.pledgeAmt/1)|number:'1.2-2'}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"startDate\" header=\"开始日期\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{col.startDate|timeValuePie}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"matureDate\" header=\"到期日期\">\r\n          <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n            {{col.matureDate|timeValuePie}}\r\n          </ng-template>\r\n        </p-column>\r\n      </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngSwitchCase=\"3\">\r\n        <p-dataTable [value]=\"borrowerItems\" [emptyMessage]=\"tabMesg\" [style]=\"{'text-align':'center'}\">\r\n            <p-column field=\"clientNo\" header=\"客户号\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                <!-- <a style=\"cursor:pointer\" (click)=\"toCustView(col)\" >{{col.clientNo}}</a> -->\r\n                <a *ngIf=\"(num==2)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}&scene=0303_XWZH_View\" target=\"_blank\">{{col.clientNo}}</a>\r\n                <a *ngIf=\"(num!=2)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}\" target=\"_blank\">{{col.clientNo}}</a>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"clientName\" header=\"客户名称\"></p-column>\r\n            <!-- <p-column field=\"remark\" header=\"备注(摘要)\"></p-column>\r\n            <p-column field=\"globalId\" header=\"证件号码\"></p-column>\r\n            <p-column field=\"legalClientName\" header=\"法人代表名称\"></p-column> -->\r\n          </p-dataTable>\r\n          <!-- <p-paginator rows=\"{{borrowerpageSize}}\" totalRecords=\"{{borrowertotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginateborrowerItems($event)\"></p-paginator> -->\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngSwitchCase=\"4\">\r\n        <p-dataTable [value]=\"accumulationItems\" [emptyMessage]=\"tabMesg\" [style]=\"{'text-align':'center'}\">\r\n            <p-column field=\"relaCustNo\" header=\"被冲减人客户号\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                <!-- <a style=\"cursor:pointer\" (click)=\"toCustView(col)\" >{{col.relaCustNo}}</a> -->\r\n                <!-- <a href=\"/#/pages/custom-view?custNo={{compileStr(col.relaCustNo)}}&pageNum={{num}}&scene=0303_XWZH_View\" target=\"_blank\">{{col.relaCustNo}}</a> -->\r\n                <a href=\"/#/pages/custom-view?custNo={{compileStr(col.relaCustNo)}}&pageNum={{1}}\" target=\"_blank\">{{col.relaCustNo}}</a>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"relaCustName\" header=\"被冲减人名称\"></p-column>\r\n            <p-column field=\"rpAcctNo\" header=\"被冲减人账号\"></p-column>\r\n            <p-column field=\"relationshipType\" header=\"关联关系类型\"></p-column>\r\n            <p-column field=\"accrual\" header=\"冲减积数额\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.accrual/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngSwitchCase=\"5\">\r\n      <div class=\"ui-g-12\">\r\n        <label for=\"\">名称：</label><span>创业担保贷款</span>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <label for=\"\">日期：</label><span>2010-09-01</span>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <img src=\"\" alt=\"暂时没有\">\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngSwitchCase=\"6\">\r\n      <div class=\"ui-g-12\">\r\n        <label for=\"\">名称：</label><span>创业担保贷款</span>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <label for=\"\">日期：</label><span>2010-09-01</span>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n        <img src=\"\" alt=\"暂时没有\">\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12\" *ngSwitchDefault>\r\n      <div class=\"ui-g-4\"  style=\"padding-top:7px;\">\r\n        <label for=\"\">交易日期：</label>\r\n        <span>2035-06-01</span>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n<!-- <div class=\"ui-g-12 btn\" style=\"text-align:center\"> -->\r\n    <!-- <button pButton label=\"关闭\" (click)=\"close()\" ></button> -->\r\n    <!-- <span class=\"spcs\" style=\"margin-left:40%;\"><a (click)=\"close()\" class=\"colletCooperator\">关闭</a></span>\r\n  </div> -->"

/***/ }),

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/loan-details2/loan-details2.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/loan-details2/loan-details2.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customLoan {\n  width: 100%;\n  height: 600px;\n  max-height: 700px; }\n  .customLoan .btn .spcs {\n    background-color: #19b0c8;\n    border-radius: 6px;\n    color: #FFFFFF;\n    height: 27px;\n    line-height: 27px;\n    display: block;\n    width: 14%;\n    float: left;\n    /* padding-left: 1px; */\n    /* text-indent: 4px; */\n    margin-left: 2px;\n    text-align: center; }\n  .customLoan .btn .colletCooperator {\n    cursor: pointer;\n    color: #FFFFFF; }\n  #id_1 {\n  height: 600px;\n  overflow: auto; }\n  .ui-g-6 {\n  width: 60%;\n  padding: 0 !important; }\n  .ui-g-5 {\n  width: 40%;\n  font-weight: bold; }\n  .active {\n  background-color: #19b0c8 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9sb2FuLWRlcG9zaXQtY2hhbmdlL2xvYW4tZGV0YWlsczIvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxsb2FuLWRlcG9zaXQtY2hhbmdlXFxsb2FuLWRldGFpbHMyXFxsb2FuLWRldGFpbHMyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBVztFQUNYLGFBQWE7RUFFYixpQkFBaUIsRUFBQTtFQUxyQjtJQXFCWSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7RUFoQzlCO0lBbUNZLGVBQWU7SUFDZixjQUFjLEVBQUE7RUFTMUI7RUFDSSxhQUFhO0VBQ2IsY0FBYyxFQUFBO0VBUWxCO0VBQ0ksVUFBVTtFQUNWLHFCQUFxQixFQUFBO0VBRXpCO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQixFQUFBO0VBR3JCO0VBQ0ksb0NBQW9DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2xvYW4tZGVwb3NpdC1jaGFuZ2UvbG9hbi1kZXRhaWxzMi9sb2FuLWRldGFpbHMyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbUxvYW57XHJcbiAgICAvLyBvdmVyZmxvdzogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIC8vIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogNzAwcHg7XHJcbiAgICAvLyBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgLy8gbWF4LWhlaWdodDo3MDBweDtcclxuICAgIC8vIHdpZHRoOiA5MDBweDtcclxuICAgIC8vIC5idG57XHJcbiAgICAvLyAgICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAvLyB9XHJcbiAgICAvLyAuY29udGFpbmVye1xyXG4gICAgLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyAgICAgcGFkZGluZzogMDtcclxuICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAuYnRue1xyXG4gICAgICAgIC5zcGNze1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIC8qIHBhZGRpbmctbGVmdDogMXB4OyAqL1xyXG4gICAgICAgICAgICAvKiB0ZXh0LWluZGVudDogNHB4OyAqL1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2xsZXRDb29wZXJhdG9ye1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxufVxyXG4vLyA6aG9zdC9kZWVwLyAudWktYnV0dG9ue1xyXG4vLyAgICAgd2lkdGg6IDE2MHB4O1xyXG4vLyB9XHJcbiNpZF8xe1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4vLyAudWktZy00e1xyXG4vLyAgICAgbGFiZWx7XHJcbi8vICAgICAgICAgd2lkdGg6MzAlO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi51aS1nLTZ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcbi51aS1nLTV7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjOCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/loan-deposit-change/loan-details2/loan-details2.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/loan-deposit-change/loan-details2/loan-details2.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: LoanDetails2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanDetails2Component", function() { return LoanDetails2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_custom_custom_view_bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/custom/custom-view/bean/custom-view.bean */ "./src/app/pages/tzb/custom/custom-view/bean/custom-view.bean.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { TranType, ClientState, SubBussType, RecycleMode, CountInterrstFlag, RepayType, LoanDetailType, LoanType, LoanForm, LoanNature, CURRENCY, GuaranteeMode, BussType,InvestIndustry } from '../../../../constant/custView.codeValue';



//贷款明细信息
var LoanDetails2Component = /** @class */ (function () {
    function LoanDetails2Component(httpService, commfunc, router, routerInfo) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.routerInfo = routerInfo;
        this.msgs = [];
        this.myVar = 0;
        this.pageNum = 1;
        this.pageSize = 10;
        this.loanDetail = new app_pages_tzb_custom_custom_view_bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_4__["LoanDetailBean"](); //贷款明细信息
        this.investIndustryOptions = []; //行业投向
        this.repaymentsitems = []; //还款信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"]; //表格中无数据时显示的内容
        this.bussTypeOptions = []; //业务类型
        this.guaranteeModeOptions = []; //担保方式
        this.currencyOptions = []; //币种
        this.loanNatureOptions = []; //贷款性质
        this.loanFormOptions = []; //贷款形式
        this.loanTypeOptions = []; //贷款类型
        this.repayTypeOptions = []; //还款方式
        this.countInterrstFlagOptions = []; //计息标志
        this.recycleModeOptions = []; //回收方式
        this.subBussTypeOptions = []; //贷款分类
        this.clientStateOptions = []; //客户状态
        this.tranTypeOptions = []; //交易类型
        this.orgId = '';
        // userId: string = '';
        this.userName = '';
        this.orgName = '';
        this.targetId = '';
        this.date = new Date();
        this.show = true;
        this.custNum = true;
        this.codeVal();
        this.investIndustryOptions = this.code['InvestIndustry'];
        this.bussTypeOptions = this.code['BussType'];
        this.guaranteeModeOptions = this.code['GuaranteeMode'];
        this.currencyOptions = this.code['CURRENCY'];
        this.loanNatureOptions = this.code['LoanNature'];
        this.loanFormOptions = this.code['LoanForm'];
        this.loanTypeOptions = this.code['LoanType'];
        this.repayTypeOptions = this.code['RepayType'];
        this.countInterrstFlagOptions = this.code['CountInterrstFlag'];
        this.recycleModeOptions = this.code['RecycleMode'];
        this.subBussTypeOptions = this.code['LoanDetailType'];
        this.clientStateOptions = this.code['ClientState'];
        this.tranTypeOptions = this.code['TranType'];
        //-----------------------------------------------------上面是码值
        // this.userId=JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
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
        if (this.user.targetId) {
            this.targetId = this.user.targetId;
        }
        var a = this.targetId.split('');
        var b = a[a.length - 1];
        if (b == '0') {
            this.biaozhi = 'tzb';
        }
        else if (b == '1') {
            this.biaozhi = 'czb';
        }
        this.newdate = this.commfunc.transDate(this.date);
    }
    LoanDetails2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.iousNum = this.routerInfo.snapshot.queryParams.iousNum;
        if (this.routerInfo.snapshot.queryParams.custNo) { //
            var params = {
                custNo: this.routerInfo.snapshot.queryParams.custNo
            };
            this.httpService.selectHoldLoanInfo(params).subscribe(function (datas) {
                if (datas.returnCode.code == 'success') {
                    if (datas.prodInfoList && datas.prodInfoList.length != 0) {
                        var data_1;
                        datas.prodInfoList.forEach(function (element) {
                            if (element.iousNum == _this.iousNum) {
                                data_1 = element;
                            }
                        });
                        console.log(data_1);
                        _this.inValue = { duebillNo: data_1.iousNum, custNo: data_1.custNo, contractNum: data_1.contractNum, subBusinessType: data_1.subBusinessType, seqNo: data_1.seqNo };
                        ; //通过路由获得参数 
                        _this.preset();
                    }
                }
                else {
                    _this.msgs = [];
                    datas.returnCode.code ? datas.returnCode.code : '调用服务失败！';
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: datas.returnCode.message });
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
    };
    //初始化
    LoanDetails2Component.prototype.preset = function () {
        var _this = this;
        if (this.commfunc.getSessionDataCH('custNoNum')) {
            this.custNum = false;
        }
        if (this.inValue) {
            if (this.inValue.show && this.inValue.show == 'glgx') {
                this.show = false;
            }
            else {
                this.show = true;
            }
            if (this.commfunc.getSessionData('commonHeader')) {
                var orgId = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
                if (orgId.charAt(0) == 'T') {
                    this.bankSystemType = 'TZB';
                }
                else if (orgId.charAt(0) == 'C') {
                    this.bankSystemType = 'CZB';
                }
                else {
                    this.bankSystemType = 'TZB';
                }
            }
            if (this.inValue.custNo) {
                this.inValue['clientNo'] = this.inValue.custNo;
            }
            if (this.inValue.contractNo) {
                this.inValue.contractNum = this.inValue.contractNo;
            }
            // if(this.inValue.iousNum){
            //   this.inValue['duebillNo']= this.inValue.iousNum; 
            //   console.log(this.inValue);
            // }
            var param = {
                duebillNo: this.inValue.duebillNo
            };
            //贷款明细信息
            this.httpService.BZ_0200300000103_LOAN(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.loanDetail = data;
                    _this.tellSeqNo = _this.loanDetail.tellSeqNo;
                    _this.clientNo = _this.loanDetail.clientNo;
                    _this.httpService.queryTaskByIndtstryAll({ taskTypeId: _this.loanDetail.investIndustry, taskTypeKey: 'indtstryType' }).subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
                            if (data.taskList.length > 0) {
                                _this.loanDetail.investIndustry = data.taskList[0].taskTypeName;
                            }
                        }
                    });
                    _this.httpService.queryTellerById({ tellerId: _this.loanDetail.liablePersonName }).subscribe(function (data) {
                        _this.loanDetail.liablePersonName = data.tellerName;
                    });
                    _this.httpService.queryTellerById({ tellerId: _this.loanDetail.investigatorName }).subscribe(function (data) {
                        _this.loanDetail.investigatorName = data.tellerName;
                    });
                    _this.httpService.queryOrgById({ orgId: _this.loanDetail.appBranchNo }).subscribe(function (data) {
                        if (data.orgName != null) {
                            _this.loanDetail.appBranchNo = data.orgName;
                        }
                    });
                    _this.httpService.queryOrgById({ orgId: _this.loanDetail.manageBranchId }).subscribe(function (data) {
                        if (data.orgName != null) {
                            _this.loanDetail.manageBranchId = data.orgName;
                        }
                    });
                }
                else {
                    data.returnCode.message ? data.returnCode.message : '调用服务失败';
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
                _this.loanDetail.bussType = _this.inValue.bussType;
            });
        }
    };
    //还款信息
    LoanDetails2Component.prototype.refund = function () {
        var _this = this;
        var param1 = {
            duebillNo: this.inValue.duebillNo,
            clientNo: this.inValue.clientNo,
            bussType: '0',
            pageSize: this.pageSize,
            pageNum: this.pageNum
        };
        //还款信息
        this.httpService.BZ_0200300000104_LOAN(param1).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.repaymentsitems = data.infoList;
                _this.repaymentsitemspageNum = data.pageNum;
                _this.repaymentsitemspageSize = data.pageSize;
                _this.repaymentsitemstotalNum = data.totalNum;
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //账户积数冲减
    LoanDetails2Component.prototype.account = function () {
        var _this = this;
        var param4 = {
            bankSystemType: this.bankSystemType,
            // clientNo:this.inValue.clientNo,
            duebillNo: this.inValue.duebillNo,
            // clientNo:'1300107966',
            pageSize: this.pageSize,
            pageNum: this.pageNum
        };
        //账户积数冲减
        this.httpService.BZ_1100300003001_LOAN(param4).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.accumulationItems = data.infoList;
                _this.accumulationpageNum = data.pageNum;
                _this.accumulationpageSize = data.pageSize;
                _this.accumulationtotalNum = data.totalNum;
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //担保信息
    LoanDetails2Component.prototype.guarantee = function () {
        var _this = this;
        var param2 = {
            clientNo: this.inValue.clientNo,
            pageSize: this.pageSize,
            pageNum: this.pageNum,
            bussType: '01',
            contractNo: this.inValue.contractNum
            // contractNo:'0117005770'
        };
        //担保信息
        this.httpService.BZ_0200300000403_LOAN(param2).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.loanGuarInfoItems = data.queryResultArray;
                _this.loanGuarInfopageNum = data.pageNum;
                _this.loanGuarInfopageSize = data.pageSize;
                _this.loanGuarInfototalNum = data.totalNum;
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //共同借款人
    LoanDetails2Component.prototype.borrow = function () {
        var _this = this;
        var param3 = {
            // clientNo: this.inValue.clientNo,
            // clientFlag: '1',
            // tranType: '0',
            // pageNum: this.pageNum,
            // pageSize: this.pageSize,
            // contractNo:this.inValue.contractNum
            appUserId: this.userId,
            consumerSeqNo: this.inValue.seqNo
        };
        //共同借款人
        this.httpService.BZ_0200300002003_LOAN(param3).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.borrowerItems = data.infoList;
                _this.borrowerpageNum = data.pageNum;
                _this.borrowerpageSize = data.pageSize;
                _this.borrowertotalNum = data.totalNum;
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    LoanDetails2Component.prototype.showDetail = function (data) {
        this.activeShow = data;
        this.myVar = data;
        if (data == 1 && this.inValue) {
            this.refund();
        }
        if (data == 2 && this.inValue) {
            this.guarantee();
        }
        if (data == 3 && this.inValue) {
            this.borrow();
        }
        if (data == 4 && this.inValue) {
            this.account();
        }
    };
    LoanDetails2Component.prototype.paginaterepaymentsitems = function (event) {
        var _this = this;
        this.repaymentsitemspageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.repaymentsitemspageNum = currentPage;
        this.httpService.BZ_0200300000104_LOAN({ duebillNo: this.inValue.duebillNo, clientNo: this.inValue.custNo, bussType: '0', pageSize: this.repaymentsitemspageSize, pageNum: this.repaymentsitemspageNum }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.repaymentsitems = data.infoList;
                _this.repaymentsitemspageNum = data.pageNum;
                _this.repaymentsitemspageSize = data.pageSize;
                _this.repaymentsitemstotalNum = data.totalNum;
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    LoanDetails2Component.prototype.paginateborrowerItems = function (event) {
        var _this = this;
        this.borrowerpageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.borrowerpageNum = currentPage;
        var param3 = {
            clientNo: this.inValue.clientNo,
            clientFlag: '1',
            tranType: '0',
            pageNum: this.borrowerpageNum,
            pageSize: this.borrowerpageSize,
            contractNo: this.inValue.contractNum
        };
        //共同借款人
        this.httpService.BZ_0200300002003_LOAN(param3).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.borrowerItems = data.infoList;
                _this.borrowerpageNum = data.pageNum;
                _this.borrowerpageSize = data.pageSize;
                _this.borrowertotalNum = data.totalNum;
            }
        });
    };
    //转码
    LoanDetails2Component.prototype.codeValue = function (val, arr) {
        if (arr === void 0) { arr = []; }
        var temp = "";
        if (arr.length > 0) {
            arr.forEach(function (item) {
                if (item['label'] == val) {
                    temp = item['value'];
                }
            });
        }
        return temp;
    };
    LoanDetails2Component.prototype.toCustView = function (data) {
        if (data.clientNo) {
            this.commfunc.setSessionData('custNo', data.clientNo);
        }
        if (data.relaCustNo) {
            this.commfunc.setSessionData('custNo', data.relaCustNo);
        }
        this.router.navigate(['pages/custom-view']).then(function (data) {
            window.location.reload();
        });
    };
    //贷前
    LoanDetails2Component.prototype.beforeLoan = function () {
        this.activeShow = 5;
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        // this.commfunc.createBlank(target);
        console.log(this.tellSeqNo + "    " + this.clientNo + "    " + this.newdate + "   " + this.biaozhi);
        if (this.clientNo && this.tellSeqNo && this.newdate && this.biaozhi) {
            var url = "http://10.1.97.166:9081/SunIAS_V7/CreditImgRequestServlet.do?UID=MOBILE&PWD=cyg&AppID=APP1009&UserID=" + this.userId + "&UserName=" + this.userName + "&OrgID=" + this.orgId + "&OrgName=" + this.orgName + "&info1=BUSI_SERIAL_NO:" + this.tellSeqNo + ";CUSTOMER_NO:" + this.clientNo + ";OBJECT_NAME:APP1009;SERIAL_TYPE:DQ;RIGHT:0100000;FILELEVEL:18;QUERY_TIME:" + this.newdate + ";BANK_FLAG:" + this.biaozhi + ";";
            var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
            var closeOnLoseFocus = 'closeOnLoseFocus';
            this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "影像链接参数不全!" }];
        }
    };
    //贷后
    LoanDetails2Component.prototype.afterLoan = function () {
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        // this.commfunc.createBlank(target);
        if (this.clientNo && this.tellSeqNo && this.newdate && this.biaozhi) {
            var url = "http://10.1.97.166:9081/SunIAS_V7/CreditImgRequestServlet.do?UID=MOBILE&PWD=cyg&AppID=APP1009&UserID=" + this.userId + "&UserName=" + this.userName + "&OrgID=" + this.orgId + "&OrgName=" + this.orgName + "&info1=BUSI_SERIAL_NO:dh_" + this.tellSeqNo + ";CUSTOMER_NO:" + this.clientNo + ";OBJECT_NAME:APP1009;SERIAL_TYPE:DQ;RIGHT:0100000;FILELEVEL:18;QUERY_TIME:" + this.newdate + ";BANK_FLAG:" + this.biaozhi + ";";
            var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
            var closeOnLoseFocus = 'closeOnLoseFocus';
            this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "影像链接参数不全!" }];
        }
    };
    //码值
    LoanDetails2Component.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    LoanDetails2Component.prototype.custNumClick = function () {
        if (this.commfunc.getSessionDataCH('custNoNum') && this.commfunc.getSessionDataCH('custNoNum') == '1') {
            this.commfunc.setSessionDataCH('custNoNum', '2');
        }
    };
    LoanDetails2Component.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    LoanDetails2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loan-details2',
            template: __webpack_require__(/*! ./loan-details2.component.html */ "./src/app/pages/tzb/custom/loan-deposit-change/loan-details2/loan-details2.component.html"),
            styles: [__webpack_require__(/*! ./loan-details2.component.scss */ "./src/app/pages/tzb/custom/loan-deposit-change/loan-details2/loan-details2.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_5__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoanDetails2Component);
    return LoanDetails2Component;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/performance/perfromance.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/performance/perfromance.component.ts ***!
  \***********************************************************************/
/*! exports provided: PerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceComponent", function() { return PerformanceComponent; });
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

var PerformanceComponent = /** @class */ (function () {
    function PerformanceComponent() {
    }
    PerformanceComponent.prototype.ngOnInit = function () { };
    PerformanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-performance',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], PerformanceComponent);
    return PerformanceComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/trade-management/bean/trade-management.bean.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/trade-management/bean/trade-management.bean.ts ***!
  \*********************************************************************************/
/*! exports provided: TrademanagementBean, Trademanagedetail, Addtrademanage, Updatetrademanage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrademanagementBean", function() { return TrademanagementBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trademanagedetail", function() { return Trademanagedetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addtrademanage", function() { return Addtrademanage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Updatetrademanage", function() { return Updatetrademanage; });
var TrademanagementBean = /** @class */ (function () {
    function TrademanagementBean() {
    }
    return TrademanagementBean;
}());

var Trademanagedetail = /** @class */ (function () {
    function Trademanagedetail() {
    }
    return Trademanagedetail;
}());

var Addtrademanage = /** @class */ (function () {
    function Addtrademanage() {
    }
    return Addtrademanage;
}());

var Updatetrademanage = /** @class */ (function () {
    function Updatetrademanage() {
    }
    return Updatetrademanage;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/trade-management/trade-management.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/trade-management/trade-management.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n\t<header-title [Info]=\"'行业管理'\"></header-title>\r\n\t<div class=\"ui-g-12 query_style\">\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">行业编号:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"TrademanagementBean.taskTypeId\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">行业名称:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"TrademanagementBean.taskTypeName\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">上级地行业编码:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"TrademanagementBean.taskTypeParentId\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">上级行业名称:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"TrademanagementBean.taskTypeParentName\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">行业层级:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"TrademanagementBean.taskTypeLevel\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" label=\"查询\" (click)=\"query()\"></button>\r\n\t</div>\r\n\t<div style=\"float:right;padding-right:1em;\">\r\n\t\t<span class=\"icoColor\" (click)=\"addAddress()\">新增</span>\r\n\t\t<span class=\"icoColor\" (click)=\"toLead()\">模板导入</span>\r\n\t\t<span class=\"icoColor\" (click)=\"export()\">导出</span>\r\n\t\t<span class=\"icoColor\" (click)=\"batchDelete()\">批量删除</span>\r\n\t</div>\r\n\t<div class=\"ui-g-12 table base-table\">\r\n\t\t<p-dataTable [(value)]=\"resultList\" [emptyMessage]='tabMesg' scrollable=\"true\" scrollWidth=\"100%\" [style]=\"{'text-align':'center'}\">\r\n\t\t\t<p-column [style]=\"{'width':'100px'}\">\r\n\t\t\t\t<ng-template let-index=\"rowIndex\" pTemplate=\"header\">\r\n\t\t\t\t\t<p-checkbox name=\"-1\" value=\"-1\" label=\"全选\" [(ngModel)]=\"checkAll\" binary=\"false\" (click)=\"checkAllClick($event)\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<p-checkbox [(ngModel)]=\"col.checkBox\" (onChange)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column field=\"taskTypeId\" header=\"行业编号\" [style]=\"{'width':'80px'}\"></p-column>\r\n\t\t\t<p-column field=\"taskTypeName\" header=\"行业名称\" [style]=\"{'width':'180px'}\"></p-column>\r\n\t\t\t<p-column field=\"taskTypeParentId\" header=\"上级行业编码\" [style]=\"{'width':'120px'}\"></p-column>\r\n\t\t\t<p-column field=\"taskTypeParentName\" header=\"上级行业名称\" [style]=\"{'width':'120px'}\"></p-column>\r\n\t\t\t<p-column field=\"taskTypeLevel\" header=\"行业层级\" [style]=\"{'width':'120px'}\"></p-column>\r\n\t\t\t<p-column field=\"creater\" header=\"创建人编号\" [style]=\"{'width':'120px'}\"></p-column>\r\n\t\t\t<p-column field=\"createrName\" header=\"创建人姓名\" [style]=\"{'width':'120px'}\"></p-column>\r\n\t\t\t<p-column field=\"createrOrg\" header=\"创建人机构编号\" [style]=\"{'width':'150px'}\"></p-column>\r\n\t\t\t<p-column field=\"createrName\" header=\"创建人机构名称\" [style]=\"{'width':'150px'}\"></p-column>\r\n\t\t\t<p-column field=\"updater\" header=\"最后修改人编号\" [style]=\"{'width':'150px'}\"></p-column>\r\n\t\t\t<p-column field=\"updaterName\" header=\"最后修改人名称\" [style]=\"{'width':'150px'}\"></p-column>\r\n\t\t\t<p-column field=\"lastUpdatedStamp\" header=\"创建日期\" [style]=\"{'width':'200px'}\"></p-column>\r\n\t\t\t<p-column field=\"createdStamplastUpdatedStamp\" header=\"修改日期\" [style]=\"{'width':'200px'}\"></p-column>\r\n\t\t\t<p-column header=\"操作\" [style]=\"{'width':'180px'}\">\r\n\t\t\t\t<ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<div class=\"table-button\">\r\n\t\t\t\t\t\t<span class=\"tabelDetailIco\" (click)=\"opendetail(col)\">查看</span>\r\n\t\t\t\t\t\t<span class=\"tabelUpdateIco\" (click)=\"openUpdate(col)\">编辑</span>\r\n\t\t\t\t\t\t<span class=\"tabelDeleteIco\" (click)=\"delete(col)\">删除</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t</p-dataTable>\r\n\t\t<p-paginator [first]=\"first\" rows={{TrademanagementBean.pageSize}} totalRecords={{totalNum}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n\t\t    (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\t</div>\r\n</div>\r\n<p-dialog header=\"行业新增\" [(visible)]=\"isaddress\" modal=\"modal\" [responsive]=\"true\" class=\"my-cust-contactf\" (onHide)=\"closecust()\">\r\n\t<div class=\"ui-g-12 query_style\">\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">行业编号:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"Addtrademanage.taskTypeId\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">行业名称:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"Addtrademanage.taskTypeName\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">上级地址编号:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"Addtrademanage.taskTypeParentId\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">地址层级:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"Addtrademanage.taskTypeLevel\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" label=\"保存\" (click)=\"saveAddress()\"></button>\r\n\t</div>\r\n</p-dialog>\r\n<p-dialog header=\"行业编辑\" [(visible)]=\"isupdate\" modal=\"modal\" [responsive]=\"true\" class=\"my-cust-contactf\">\r\n\t<div class=\"ui-g-12 query_style\">\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">行业编号:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"Updatetrademanage.taskTypeId\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">行业名称:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"Updatetrademanage.taskTypeName\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">上级地址编号:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"Updatetrademanage.taskTypeParentId\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">地址层级:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText [(ngModel)]=\"Updatetrademanage.taskTypeLevel\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button pButton type=\"button\" label=\"保存\" (click)=\"Updatedress()\"></button>\r\n\t</div>\r\n</p-dialog>\r\n<p-dialog header=\"行业详情\" [(visible)]=\"isdetail\" modal=\"modal\" [responsive]=\"true\" class=\"cust-contactf\">\r\n\t<div class=\"ui-g-12 query_style\">\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">行业编码:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Trademanagedetail.taskTypeId\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">行业名称:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Trademanagedetail.taskTypeName\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">上级行行业编号:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Trademanagedetail.taskTypeParentId\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">上级行行业名称:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Trademanagedetail.taskTypeParentName\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">行业层级:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Trademanagedetail.taskTypeLevel\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">创建人编号:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Trademanagedetail.creater\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">创建人姓名:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Trademanagedetail.createrName\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">创建人所属机构:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Trademanagedetail.createrOrg\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">创建人机构名称:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Trademanagedetail.createrName\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">最后修改人编号:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Trademanagedetail.updater\" />\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"ui-g-2 right\">最后修改人名称:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Trademanagedetail.updaterName\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-2 right\">创建日期:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Trademanagedetail.lastUpdatedStamp\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12\">\r\n\t\t\t<div class=\"ui-g-2 right\">修改日期:</div>\r\n\t\t\t<div class=\"ui-g-2\">\r\n\t\t\t\t<input type=\"text\" class=\"queryinputOrg\" pInputText disabled [(ngModel)]=\"Trademanagedetail.createdStamp\" />\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-12 btn\">\r\n\t\t\t<button type=\"button\" pButton icon=\"fa-close\" label=\"关闭\" style=\"color:#fff;\" (click)=\"closeDetail()\"></button>\r\n\t\t</div>\r\n\t</div>\r\n</p-dialog>\r\n<!-- 批量导入 -->\r\n<div class=\"overflow-control\">\r\n<p-dialog [(visible)]=\"batchDisplay\" header=\"模板导入\" modal=\"modal\" width=\"1100\" height=\"800\" [contentStyle]=\"{'overflow-y':'auto'}\">\r\n\t<div class=\"ui-g-12\">\r\n\t\t<div class=\"ui-g-3\">\r\n\t\t\t请先下载模板：\r\n\t\t\t<a href=\"{{DOWNLOAD}}/?fileUrl=/copdata/moban/&fileName=IndustryDictionary.xls\" class=\"a_btn\" target=\"_blank\">下载模板</a>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-4 rgt\">批量调整（Ecxel文件导入）</div>\r\n\t\t<div class=\"ui-g-5\">\r\n\t\t\t<p-fileUpload accept=\".xls\" invalidFileTypeMessageDetail=\"只能上传Excel\" invalidFileTypeMessageSummary=\"\" chooseLabel=\"浏览\" uploadLabel=\"上传\"\r\n\t\t\t    cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"onBeforeSend($event)\">\r\n\t\t\t</p-fileUpload>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<!-- <div class=\"ui-g-4 green\">\r\n\t\t\t<span>成功条数：</span>\r\n\t\t\t<span>{{custGroupListBean.successNum}}</span>\r\n\t\t\t<span>条</span>\r\n\t\t</div> -->\r\n\t\t<div class=\"ui-g-8 red\">\r\n\t\t\t<span>失败条数：</span>\r\n\t\t\t<span>{{custGroupListBean.failNum}}</span>\r\n\t\t\t<span>条</span>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-12 table-area tab\">\r\n\t\t<p-dataTable [emptyMessage]=\"tabMesg\"  [rows]=\"10\" [paginator]=\"true\" [rowsPerPageOptions]=\"[10,20,50,200]\" [style]=\"{'text-align':'center'}\"\r\n\t\t    [value]=\"custGroupListBean.custList\">\r\n\t\t\t<p-column header=\"行号\">\r\n\t\t\t\t<ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t{{col.lineNum}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column header=\"成功/失败\">\r\n\t\t\t\t<ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t{{col.errvel}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column header=\"失败原因\">\r\n\t\t\t\t<ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t{{col.failReason}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t</p-dataTable>\r\n\t\t<div class=\"ui-g-12 btn\">\r\n\t\t\t<button pButton type=\"button\" label=\"确定\" (click)=\"returnCustGroupList()\"></button>\r\n\t\t</div>\r\n\t</div>\r\n</p-dialog>\r\n</div>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/trade-management/trade-management.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/trade-management/trade-management.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".query_style .ui-g-12 {\n  padding: 0; }\n\n.right {\n  text-align: right;\n  width: 14%; }\n\n.rgt {\n  text-align: right; }\n\n.btn {\n  margin-top: 4%;\n  text-align: center; }\n\n:host /deep/ .my-cust-contactf .ui-dialog.ui-shadow {\n  width: 90% !important;\n  height: 600px !important; }\n\n:host /deep/ .overflow-control .ui-dialog.ui-shadow {\n  overflow-y: auto; }\n\n:host /deep/ .cust-contactf .ui-dialog.ui-shadow {\n  width: 80% !important;\n  height: 70% !important; }\n\n.green {\n  color: green; }\n\n.red {\n  color: red; }\n\n.a_btn {\n  display: inline-block;\n  width: 71px;\n  height: 26px;\n  text-align: center;\n  line-height: 26px;\n  white-space: nowrap;\n  color: #fff;\n  background-color: #f8a900;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  border-radius: 3px;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS90cmFkZS1tYW5hZ2VtZW50L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcdHJhZGUtbWFuYWdlbWVudFxcdHJhZGUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFVBQVUsRUFBQTs7QUFJbEI7RUFDSSxpQkFBaUI7RUFDakIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHFCQUFxQjtFQUNyQix3QkFBd0IsRUFBQTs7QUFFNUI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxxQkFBb0I7RUFDcEIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vdHJhZGUtbWFuYWdlbWVudC90cmFkZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXJ5X3N0eWxlIHtcclxuICAgIC51aS1nLTEyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB3aWR0aDogMTQlO1xyXG59XHJcblxyXG4ucmd0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm15LWN1c3QtY29udGFjdGYgLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA2MDBweCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyAub3ZlcmZsb3ctY29udHJvbCAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbjpob3N0IC9kZWVwLyAuY3VzdC1jb250YWN0ZiAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogODAlIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmFfYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA3MXB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhhOTAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/trade-management/trade-management.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/trade-management/trade-management.component.ts ***!
  \*********************************************************************************/
/*! exports provided: Trademanagement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trademanagement", function() { return Trademanagement; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _bean_trade_management_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/trade-management.bean */ "./src/app/pages/tzb/custom/trade-management/bean/trade-management.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _custom_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custom-group/bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//待办及提醒事项查看全部详情








var Trademanagement = /** @class */ (function () {
    function Trademanagement(commfunc, router, activatedRouter, CusOperationHttpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.CusOperationHttpService = CusOperationHttpService;
        this.tabMesg = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //暂无数据
        this.isaddress = false;
        this.isdetail = false;
        this.isupdate = false;
        this.checkBox = [];
        this.chooseData = [];
        this.zoneIds = [];
        this.checkAll = false;
        this.batchDisplay = false;
        this.addDisplay = false;
        this.first = 1;
        this.fileList = []; //上传文件列表
        this.UPLOAD = _uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_UPLOAD"]; //上传模板
        this.DOWNLOAD = _uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"]; //下载模板
        this.custGroupListBean = new _custom_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_7__["CustGroupListBean"]();
        this.Addtrademanage = new _bean_trade_management_bean__WEBPACK_IMPORTED_MODULE_4__["Addtrademanage"]();
        this.Updatetrademanage = new _bean_trade_management_bean__WEBPACK_IMPORTED_MODULE_4__["Updatetrademanage"]();
        this.Trademanagedetail = new _bean_trade_management_bean__WEBPACK_IMPORTED_MODULE_4__["Trademanagedetail"]();
        this.TrademanagementBean = new _bean_trade_management_bean__WEBPACK_IMPORTED_MODULE_4__["TrademanagementBean"]();
    }
    Trademanagement.prototype.ngOnInit = function () {
        this.TrademanagementBean.pageSize = 10;
        this.TrademanagementBean.pageNum = 1;
        this.query();
    };
    Trademanagement.prototype.query = function () {
        var _this = this;
        var param = {
            taskTypeId: this.TrademanagementBean.taskTypeId,
            taskTypeName: this.TrademanagementBean.taskTypeName,
            taskTypeParentId: this.TrademanagementBean.taskTypeParentId,
            taskTypeParentName: this.TrademanagementBean.taskTypeParentName,
            taskTypeLevel: this.TrademanagementBean.taskTypeLevel,
            pageSize: this.TrademanagementBean.pageSize,
            pageNum: this.TrademanagementBean.pageNum,
        };
        this.CusOperationHttpService.queryIndustryDictionaryList(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.resultList = data.resultList;
                _this.totalNum = data.totalNum;
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    Trademanagement.prototype.paginate = function (event) {
        //每页显示的条数
        this.TrademanagementBean.pageSize = event.rows * 1;
        //当前页
        this.TrademanagementBean.pageNum = event.page + 1;
        this.query();
    };
    // 单选按钮
    Trademanagement.prototype.checkBoxClick = function (i, data) {
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
        if (this.chooseData.length == this.resultList.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    };
    // 全选按钮
    Trademanagement.prototype.checkAllClick = function () {
        if (this.resultList) {
            for (var i = 0; i < this.resultList.length; i++) {
                if (this.checkAll == true) {
                    this.resultList[i].checkBox = true;
                    this.chooseData.push(this.resultList[i]);
                }
                else {
                    this.chooseData = [];
                    this.resultList[i].checkBox = false;
                }
            }
        }
    };
    Trademanagement.prototype.saveAddress = function () {
        var _this = this;
        var param = {
            taskTypeName: this.Addtrademanage.taskTypeName,
            taskTypeParentId: this.Addtrademanage.taskTypeParentId,
            taskTypeLevel: this.Addtrademanage.taskTypeLevel,
            taskTypeId: this.Addtrademanage.taskTypeId
        };
        this.CusOperationHttpService.addIndustryDictionary(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.totalNum = data.totalNum;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.isaddress = false;
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }), function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        };
    };
    Trademanagement.prototype.Updatedress = function () {
        var _this = this;
        var param = {
            oriTaskTypeId: this.oriTaskTypeId,
            taskTypeName: this.Updatetrademanage.taskTypeName,
            taskTypeParentId: this.Updatetrademanage.taskTypeParentId,
            taskTypeLevel: this.Updatetrademanage.taskTypeLevel,
            taskTypeId: this.Updatetrademanage.taskTypeId
        };
        this.CusOperationHttpService.updateIndustryDictionary(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.totalNum = data.totalNum;
                _this.isupdate = false;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.isupdate = false;
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }), function (err) {
            _this.isupdate = false;
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        };
    };
    Trademanagement.prototype.closeDetail = function () {
        this.isdetail = false;
    };
    Trademanagement.prototype.openUpdate = function (col) {
        this.oriTaskTypeId = col.taskTypeId;
        this.isupdate = true;
        this.Updatetrademanage = col;
    };
    Trademanagement.prototype.delete = function (col) {
        var _this = this;
        this.zoneIds.push({ taskTypeId: col.taskTypeId });
        this.CusOperationHttpService.deleteIndustryDictionary({ taskTypeIds: this.zoneIds }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.query();
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }), function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        };
    };
    Trademanagement.prototype.addAddress = function () {
        this.isaddress = true;
    };
    Trademanagement.prototype.opendetail = function (col) {
        this.isdetail = true;
        this.Trademanagedetail = col;
    };
    Trademanagement.prototype.toLead = function () {
        this.batchDisplay = true;
    };
    Trademanagement.prototype.closecust = function () {
        this.Addtrademanage = new _bean_trade_management_bean__WEBPACK_IMPORTED_MODULE_4__["Addtrademanage"]();
    };
    //批量导入
    Trademanagement.prototype.onBeforeSend = function (event) {
        var _this = this;
        // 上传点击,需跨域
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
                return;
            }
            this.filePath = this.fileList[0].fileUrl;
            this.fileName = this.fileList[0].fileName;
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '获取服务器列表失败！' }];
        }
        //不需要审批
        var param = {
            fileUrl: this.filePath,
            fileName: this.fileName
        };
        this.CusOperationHttpService.importIndustryDictionary(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custGroupListBean.custList = data.failList;
                _this.custGroupListBean.failNum = data.failList.length;
                _this.custGroupListBean.custList.forEach(function (e) {
                    e['errvel'] = '失败';
                });
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
    };
    Trademanagement.prototype.returnCustGroupList = function () {
        this.batchDisplay = false;
        this.custGroupListBean.custList = null;
        this.custGroupListBean.failNum = null;
    };
    Trademanagement.prototype.export = function () {
        var _this = this;
        var param = {
            taskTypeId: this.TrademanagementBean.taskTypeId,
            taskTypeName: this.TrademanagementBean.taskTypeName,
            taskTypeParentId: this.TrademanagementBean.taskTypeParentId,
            taskTypeParentName: this.TrademanagementBean.taskTypeParentName,
            taskTypeLevel: this.TrademanagementBean.taskTypeLevel,
            pageSize: this.TrademanagementBean.pageSize,
            pageNum: this.TrademanagementBean.pageNum,
        };
        this.CusOperationHttpService.exportIndustryDictionary(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                var aa = data.fileName;
                window.open(_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(aa) + "&fileUrl=" + data.fileUrl);
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
    Trademanagement.prototype.batchDelete = function () {
        var _this = this;
        var param = {
            taskTypeIds: this.chooseData
        };
        this.CusOperationHttpService.deleteIndustryDictionary(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.chooseData = [];
                _this.query();
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }), function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        };
    };
    Trademanagement = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trade',
            template: __webpack_require__(/*! ./trade-management.component.html */ "./src/app/pages/tzb/custom/trade-management/trade-management.component.html"),
            styles: [__webpack_require__(/*! ./trade-management.component.scss */ "./src/app/pages/tzb/custom/trade-management/trade-management.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"]])
    ], Trademanagement);
    return Trademanagement;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/work-report/work-report.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/work-report/work-report.component.ts ***!
  \***********************************************************************/
/*! exports provided: WorkReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkReportComponent", function() { return WorkReportComponent; });
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

var WorkReportComponent = /** @class */ (function () {
    function WorkReportComponent() {
    }
    WorkReportComponent.prototype.ngOnInit = function () {
    };
    WorkReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work-report',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], WorkReportComponent);
    return WorkReportComponent;
}());



/***/ }),

/***/ "./src/app/service/basis/authority/authority.config.ts":
/*!*************************************************************!*\
  !*** ./src/app/service/basis/authority/authority.config.ts ***!
  \*************************************************************/
/*! exports provided: AuthorityConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorityConfigService", function() { return AuthorityConfigService; });
var AuthorityConfigService = {
    'querybankOrgTree': 'querybankOrgTree'
};


/***/ }),

/***/ "./src/app/service/basis/authority/authority.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/service/basis/authority/authority.service.ts ***!
  \**************************************************************/
/*! exports provided: AuthorityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorityService", function() { return AuthorityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authority_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authority.config */ "./src/app/service/basis/authority/authority.config.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_http_service1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/http.service1 */ "./src/app/@uisftech/common/service/http.service1.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthorityService = /** @class */ (function () {
    function AuthorityService(httpService) {
        this.httpService = httpService;
    }
    AuthorityService.prototype.querybankOrgTree = function (params) {
        return this.httpService.ajax(app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["API"].IP + _authority_config__WEBPACK_IMPORTED_MODULE_1__["AuthorityConfigService"].querybankOrgTree, params, null);
    };
    AuthorityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_uisftech_common_service_http_service1__WEBPACK_IMPORTED_MODULE_3__["HttpService"]])
    ], AuthorityService);
    return AuthorityService;
}());



/***/ })

}]);
//# sourceMappingURL=custom-custom-module.js.map