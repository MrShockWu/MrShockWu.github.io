(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["free-group-query-free-group-query-module"],{

/***/ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/add-search-manage4/add-search-manage4.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/add-search-manage4/add-search-manage4.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g module\">\r\n\t<div class=\"ui-g-12 padding-zero\">\r\n\t\t<header-title [Info]=\"'高级搜索模板管理'\"></header-title>\r\n\t</div>\r\n\t<div class=\"ui-g-10 ui-g-offset-2\">\r\n\t\t<div class=\"ui-g-6 ui-md-6\">\r\n\t\t\t<label>模板名称：</label>\r\n\t\t\t<input type=\"text\" pInputText [(ngModel)]=\"filterCustomBean.expCondName\">\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-6 ui-md-6\">\r\n\t\t\t<label>模板状态：</label>\r\n\t\t\t<p-dropdown class=\"gundam-dropdown1\" [options]=\"TempStatusOpt\" [(ngModel)]=\"filterCustomBean.statusId\"></p-dropdown>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"ui-g-10 ui-g-offset-2 create-name\">\r\n\t\t<div class=\"ui-g-12 padding-0\">\r\n\t\t\t<div class=\"ui-g-6\">\r\n\t\t\t\t<label>创建时间：</label>\r\n\t\t\t\t<p-calendar (onSelect)=\"refresh()\" [showIcon]=\"true\" [maxDate]=\"creatEndTime\" [(ngModel)]=\"creatStartTime\" [locale]=\"ch\"\r\n\t\t\t\t    dateFormat=\"yy-mm-dd\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showOtherMonths]=\"false\"\r\n\t\t\t\t    [readonlyInput]=\"true\" [locale]=\"ch\" [style]=\"{'width':'100px'}\"></p-calendar>至\r\n\t\t\t\t<p-calendar *ngIf=\"showFlag\" [showIcon]=\"true\" [minDate]=\"creatStartTime\" [(ngModel)]=\"creatEndTime\" [locale]=\"ch\" dateFormat=\"yy-mm-dd\"\r\n\t\t\t\t    [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showOtherMonths]=\"false\" [readonlyInput]=\"true\"\r\n\t\t\t\t    [locale]=\"ch\" [style]=\"{'width':'100px'}\"></p-calendar>\r\n\t\t\t\t<p-calendar *ngIf=\"!showFlag\" [showIcon]=\"true\" [minDate]=\"creatStartTime\" [(ngModel)]=\"creatEndTime\" [locale]=\"ch\" dateFormat=\"yy-mm-dd\"\r\n\t\t\t\t    [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showOtherMonths]=\"false\" [readonlyInput]=\"true\"\r\n\t\t\t\t    [locale]=\"ch\" [style]=\"{'width':'100px'}\"></p-calendar>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- <div class=\"ui-g-6 ui-md-6\">\r\n\t\t\t<label>创建机构：</label>\r\n\t\t\t<input type=\"text\" pInputText [style]=\"{'width':'100%'}\" [(ngModel)]=\"treeOrgName\" (click)=\"openOrgTreeClick()\">\r\n\t\t</div> -->\r\n\t</div>\r\n\t<div class=\"ui-g-12 btn\">\r\n\t\t<button class=\"searchBtn\" (click)=\"queryClick()\">查询</button>\r\n\t\t<button class=\"resetBtn\" (click)=\"resetClick()\">重置</button>\r\n\t\t<!-- <button pButton type=\"button\" label=\"查询\" (click)=\"queryClick()\"></button>\r\n\t\t<button pButton type=\"button\" label=\"重置\" (click)=\"resetClick()\"></button> -->\r\n\t</div>\r\n\t<div class=\"ui-g-12 table base-table2\">\r\n\t\t<p-dataTable class=\"gundam-search\" [value]=\"custExplTable\" [emptyMessage]=\"tabMesg\">\r\n\t\t\t<!-- <p-column header=\"选择\" [style]=\"{'width':'200px'}\">\r\n\t\t\t\t<ng-template let-item=\"rowData\" pTemplate=\"body\" let-i=\"rowIndex\">\r\n\t\t\t\t\t<p-radioButton name=\"radio\" value=\"{{i}}\" (onClick)=\"checkRadioValue($event,item)\"></p-radioButton>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column> -->\r\n\t\t\t<p-column header=\"探索模板名称\" field=\"screenTemplateName\" [style]=\"{'width':'200px'}\"></p-column>\r\n\t\t\t<p-column header=\"探索模板ID\" field=\"screenTemplateId\" [style]=\"{'width':'200px'}\"></p-column>\r\n\t\t\t<p-column header=\"创建时间\" field=\"createTime\" [style]=\"{'width':'200px'}\"></p-column>\r\n\t\t\t<p-column header=\"创建机构标识\" field=\"createOrgId\" [style]=\"{'width':'200px'}\"></p-column>\r\n\t\t\t<p-column header=\"创建机构名称\" field=\"createOrgName\" [style]=\"{'width':'200px'}\"></p-column>\r\n\t\t\t<p-column header=\"创建人\" field=\"createUserName\" [style]=\"{'width':'200px'}\"></p-column>\r\n\t\t\t<p-column header=\"模板状态\" field=\"status\" [style]=\"{'width':'200px'}\">\r\n\t\t\t\t<ng-template let-col let-item=\"rowData\" pTemplate=\"body\">\r\n\t\t\t\t\t<span>{{item.status|codeValuePie:shareRangeOpt}}</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t\t<p-column header=\"操作\" field=\"operation\" [style]=\"{'width':'160px'}\">\r\n\t\t\t\t<ng-template let-col let-item=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t<a class=\"tabelDetailIco\" *ngIf=\"templateDisplay\" (click)=\"marketRelease(item)\">发布</a>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t<a class=\"tabelUpdateIco\" *ngIf=\"templateDisplay\" (click)=\"showDetail(item)\">修改/查看</a>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<!-- <a class=\"tabelDetailIco\" *ngIf=\"templateDisplay\" (click)=\"recompose(item)\">修改</a> -->\r\n\t\t\t\t\t<span>\r\n\t\t\t\t\t\t<a class=\"tabelDeleteIco\" *ngIf=\"templateDisplay\" (click)=\"deleteTarget(item)\">删除</a>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</p-column>\r\n\t\t</p-dataTable>\r\n\t</div>\r\n\t<div class=\"ui-g-12\">\r\n\t\t<p-paginator rows=\"10\" totalRecords=\"{{total}}\" (onPageChange)=\"paginate($event)\" [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n\t</div>\r\n</div>\r\n<p-dialog [(visible)]=\"marketReleaseDisplay\" modal=\"modal\" [responsive]=\"true\" [positionTop]=100 width=600>\r\n\t<p-header>发布</p-header>\r\n\t<p>是否发布模板</p>\r\n\t<p-footer>\r\n\t\t<button type=\"button\" pButton icon=\"fa-check\" (click)=\"faCheck()\" label=\"是\"></button>\r\n\t\t<button type=\"button\" pButton icon=\"fa-close\" (click)=\"faClose()\" label=\"否\"></button>\r\n\t</p-footer>\r\n</p-dialog>\r\n\r\n\r\n<!--联系人机构树-->\r\n<p-dialog class=\"gundam-display\" *ngIf=\"orgTreeDisplay\" [(visible)]=\"orgTreeDisplay\" modal=\"modal\" [responsive]=\"true\" [positionTop]=10\r\n    (onHide)=\"onHideClose()\">\r\n\t<p-header>创建机构</p-header>\r\n\t<!-- <org-mutil-all-tree-component (selectAllValue)=\"treeCall($event)\"></org-mutil-all-tree-component> -->\r\n\t<org-tree-component (outValue)=\"treeCall($event)\"></org-tree-component>\r\n</p-dialog>\r\n<p-dialog class=\"gundam-display\" *ngIf=\"orgTreeDisplay2\" [(visible)]=\"orgTreeDisplay2\" modal=\"modal\" [responsive]=\"true\"\r\n    [positionTop]=10 (onHide)=\"onHideClose()\">\r\n\t<p-header>创建人</p-header>\r\n\t<!-- <org-mutil-all-tree-component (selectAllValue)=\"treeCall2($event)\"></org-mutil-all-tree-component> -->\r\n\t<queryUser (outValue)=\"perInfor($event)\" [in-value]=\"queryUserInValue\"></queryUser>\r\n</p-dialog>\r\n<!--联系人机构树-->\r\n\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!-- 删除-->\r\n<p-confirmDialog header=\"提示\" appendTo=\"body\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n<!-- 模板修改 -->\r\n<p-dialog *ngIf=\"amendTempleteFlag\" [(visible)]=\"amendTempleteFlag\" modal=\"modal\" [responsive]=\"true\" class=\"templateDialog\">\r\n\t<p-header>模板修改</p-header>\r\n\t<div class=\"ui-g-12 templete\">\r\n\t\t<div class=\"ui-g-5\">\r\n\t\t\t<div class=\"ui-g-4\" appValidation>\r\n\t\t\t\t模板名称:\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<div class=\"first-query\">\r\n\t\t\t\t\t<input class=\"margin-1\" type=\"text\" [(ngModel)]=\"expCondName\" pInputText>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"ui-g-5 ui-g-offset-2\">\r\n\t\t\t<div class=\"ui-g-4\">\r\n\t\t\t\t高级筛选条件:\r\n\t\t\t</div>\r\n\t\t\t<div class=\"ui-g-8\">\r\n\t\t\t\t<input class=\"margin-1\" type=\"text\" [(ngModel)]=\"advanceCondition\" pInputText>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"ui-g-12 filterChoices\">\r\n\t\t<table class=\"ui-g-12\">\r\n\t\t\t<thead>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<th class=\"ui-g-1 center num\">序号</th>\r\n\t\t\t\t\t<th class=\"ui-g-2\">字段模块</th>\r\n\t\t\t\t\t<th class=\"ui-g-2\">字段类型</th>\r\n\t\t\t\t\t<th class=\"ui-g-2\">字段属性</th>\r\n\t\t\t\t\t<th class=\"ui-g-2\">取值方式</th>\r\n\t\t\t\t\t<th class=\"ui-g-2\">字段取值</th>\r\n\t\t\t\t\t<th class=\"ui-g-1 handle\">操作</th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr *ngFor=\"let items of conditionList;let i = index\">\r\n\t\t\t\t\t<div *ngFor=\"let item of items; let ind = index\">\r\n\t\t\t\t\t\t<td class=\"ui-g-1 center num\">{{i+1}}</td>\r\n\t\t\t\t\t\t<td class=\"ui-g-2\">\r\n\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t<p-dropdown (onChange)=\"templeteChange($event,2,i,ind)\" class=\"gundam-dropdown\" [options]=\"item.CusGroupAttrOpt1\" [(ngModel)]=\"item.fieldModule\"></p-dropdown>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"ui-g-2\">\r\n\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t<p-dropdown (onChange)=\"templeteChange($event,3,i,ind)\" class=\"gundam-dropdown\" [options]=\"item.CusGroupAttrOpt2\" [(ngModel)]=\"item.fieldAttr\"></p-dropdown>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"ui-g-2\">\r\n\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t<p-dropdown (onChange)=\"templeteChange($event,4,i,ind)\" class=\"gundam-dropdown\" [options]=\"item.CusGroupAttrOpt3\" [(ngModel)]=\"item.field\"></p-dropdown>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"ui-g-2\">\r\n\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t<p-dropdown class=\"gundam-dropdown\" [options]=\"item.valueType\" [(ngModel)]=\"item.operator\" [style]=\"{'width':'90%'}\"></p-dropdown>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"ui-g-2\">\r\n\t\t\t\t\t\t\t<span class=\"operations\">\r\n\t\t\t\t\t\t\t\t<input *ngIf=\"item.special == 'count'\" class=\"gundam-autocomplete\" type=\"text\" name=\"value\" pInputText [(ngModel)]=\"item.value\">\r\n\t\t\t\t\t\t\t\t<p-dropdown *ngIf=\"item.special == 'code'\" class=\"gundam-dropdown\" [options]=\"item.specialType\" [(ngModel)]=\"item.value\"\r\n\t\t\t\t\t\t\t\t    [style]=\"{'width':'90%'}\"></p-dropdown>\r\n\t\t\t\t\t\t\t\t<input *ngIf=\"item.special == 'input'\" type=\"text\" (click)=\"selectUser(item.inputType,i,ind)\" name=\"name\" pInputText [(ngModel)]=\"item.label\">\r\n\t\t\t\t\t\t\t\t<p-calendar *ngIf=\"item.special == 'time'\" dateFormat=\"yy-mm-dd\" [(ngModel)]=\"item.value\" [locale]=\"ch\"></p-calendar>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td class=\"ui-g-1 handle\">\r\n\t\t\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t\t\t\t<span (click)=\"doAdd('custGroupAttr','html-btn')\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"../../../../../../assets/layout/images/plus.png\" alt=\"\" style=\"margin-right: 20px;\">\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<span (click)=\"doReduce(i,'custGroupAttr')\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"../../../../../../assets/layout/images/table-detele.png\" alt=\"\">\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t</div>\r\n\r\n\r\n\t<div class=\"text-center ui-g-12\">\r\n\t\t<button type=\"button\" pButton icon=\"fa-check\" (click)=\"saveTemplete2()\" label=\"确认修改\"></button>\r\n\t\t<!-- <button type=\"button\" pButton icon=\"fa-close\" (click)=\"faClose()\" label=\"否\"></button> -->\r\n\t</div>\r\n</p-dialog>\r\n\r\n<!-- \r\n\r\n -->\r\n\r\n<p-dialog *ngIf=\"staff_display01\" class=\"orgTreePage\" [(visible)]=\"staff_display01\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n\t<p-header>\r\n\t\t选择机构\r\n\t</p-header>\r\n\t<org-tree-component (outValue)=\"returnInfo01($event)\"></org-tree-component>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"staff_display02\" [positionTop]=\"50\" [(visible)]=\"staff_display02\" width=\"900\">\r\n\t<p-header>\r\n\t\t选择客户\r\n\t</p-header>\r\n\t<queryGroupCustom (outValue)=\"returnInfo02($event)\"></queryGroupCustom>\r\n</p-dialog>\r\n\r\n\r\n<p-dialog *ngIf=\"staff_display03\" [positionTop]=\"50\" [(visible)]=\"staff_display03\" width=\"900\">\r\n\t<p-header>\r\n\t\t选择人员\r\n\t</p-header>\r\n\t<queryUser (outValue)=\"returnInfo3($event)\" [in-value]=\"orgId\"></queryUser>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/add-search-manage4/add-search-manage4.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/add-search-manage4/add-search-manage4.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module .ui-g-6 label {\n  display: inline-block;\n  text-align: right; }\n\n.module .table {\n  text-align: center; }\n\n.module .btn {\n  text-align: center; }\n\n.module .create-name {\n  padding-top: 0; }\n\n.module .create-name .ui-md-6 {\n    padding-top: 0;\n    padding-bottom: 0; }\n\n.module .create-name .ui-md-6 > input {\n      width: 36% !important; }\n\n.ui-md-6 > input {\n  width: 36% !important; }\n\n:host/deep/ .gundam-dropdown > div {\n  width: 100% !important; }\n\n:host/deep/ .gundam-dropdown1 > div {\n  width: 36% !important; }\n\n:host/deep/ .gundam-search > div {\n  overflow: auto; }\n\n:host/deep/ .gundam-display > div > div:nth-child(2) {\n  height: 85% !important; }\n\n:host/deep/ .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n:host/deep/ .ui-dropdown .ui-dropdown-label {\n  padding: 0.25em 2.5em 0 0.25em; }\n\n:host/deep/ .templateDialog .ui-dropdown .ui-dropdown-label {\n  padding: 0.25em 2.5em 0 0.25em; }\n\n.base-table2 {\n  overflow: auto;\n  height: 441px; }\n\n.pro_chose {\n  display: flex;\n  flex-direction: row; }\n\n.pro_chose .conright {\n    display: flex;\n    flex-wrap: wrap; }\n\n.pro_chose .conright .total {\n      flex: 1;\n      flex-direction: column; }\n\n.pro_chose .conright .tit {\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      margin-bottom: 3px;\n      background-color: #fafafa; }\n\n.pro_chose .conright .tit .num {\n        width: 15%;\n        text-align: center;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin-left: 4px; }\n\n.pro_chose .conright .tit .cont {\n        display: flex;\n        padding: 0;\n        /* width: 87%; */\n        flex: 1; }\n\n.pro_chose .conright .tit span {\n        color: #0a3d54 !important;\n        width: 15%;\n        text-align: center;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        margin-left: 4px;\n        height: 35px; }\n\n.pro_chose .conright .tit .w30 {\n        flex-direction: row;\n        align-items: center;\n        flex: 1; }\n\n.pro_chose .conright .tit .w30 input {\n          width: 40%;\n          height: 30px; }\n\n.pro_chose .conright .tit .w30 .until {\n          height: 21px;\n          width: 10%;\n          margin: 0 4px;\n          text-align: center; }\n\n.pro_chose .conright .tit .huo {\n        flex-direction: row;\n        align-items: center; }\n\n.pro_chose .conright .tit .huo b {\n          width: 22px;\n          height: 22px;\n          margin-left: 5%;\n          text-align: center;\n          color: #000; }\n\n.pro_chose .conright .tit:nth-child(2n+2) {\n      background-color: #efefef; }\n\n.pro_chose .conright .tit:nth-child(1) {\n      background-color: #d2f1ef; }\n\n.table-self {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: center; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.cus_chose .cont span {\n  width: 50% !important; }\n\n.center, table td {\n  text-align: center; }\n\ntable thead tr {\n  font-size: 14px;\n  background: #d2f1ef; }\n\ntable thead th {\n  font-weight: 400;\n  height: 35px; }\n\ntable tbody tr:nth-child(2n+2) {\n  background-color: #efefef; }\n\ntable td {\n  height: 52.25px;\n  line-height: 42px; }\n\n.num {\n  width: 48px; }\n\n.handle {\n  width: calc(16.6666% - 48px);\n  min-width: 75px; }\n\n.handle span {\n    display: inline-block; }\n\n.handle img {\n    cursor: pointer;\n    vertical-align: middle; }\n\n:host/deep/ .templateDialog .operations .ui-inputtext {\n  width: 100% !important;\n  min-width: 0 !important; }\n\n.searchBtn {\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n  cursor: pointer;\n  background: #34cfe6;\n  color: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 15px;\n  margin-left: 15px;\n  outline: none; }\n\n@media screen and (max-width: 1280px) {\n    .searchBtn {\n      margin-left: 5px; } }\n\n.resetBtn {\n  background: white;\n  width: 60px;\n  height: 30px;\n  border-radius: 15px;\n  cursor: pointer;\n  border: 1px solid #e8e8e8;\n  color: #333;\n  margin-left: 15px;\n  outline: none; }\n\n@media screen and (max-width: 1280px) {\n    .resetBtn {\n      margin-left: 5px; } }\n\n.padding-0 {\n  padding: 0; }\n\n:host/deep/ .create-name button {\n  border: 0 !important;\n  width: 45px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2dyb3VwL2ZyZWUtZ3JvdXAtcXVlcnkvYWRkLXNlYXJjaC1tYW5hZ2U0L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLW1hcmtldGluZ1xcZ3JvdXBcXGZyZWUtZ3JvdXAtcXVlcnlcXGFkZC1zZWFyY2gtbWFuYWdlNFxcYWRkLXNlYXJjaC1tYW5hZ2U0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1kscUJBQXFCO0VBRXJCLGlCQUFpQixFQUFBOztBQUw3QjtFQVNRLGtCQUFrQixFQUFBOztBQVQxQjtFQVlRLGtCQUFrQixFQUFBOztBQVoxQjtFQWVRLGNBQWMsRUFBQTs7QUFmdEI7SUFpQlksY0FBYztJQUNkLGlCQUFpQixFQUFBOztBQWxCN0I7TUFvQmdCLHFCQUFxQixFQUFBOztBQVFyQztFQUVRLHFCQUFxQixFQUFBOztBQUs3QjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLHFCQUFxQixFQUFBOztBQUl6QjtFQUNJLGNBQWMsRUFBQTs7QUFZbEI7RUFDSSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxzQkFBc0IsRUFBQTs7QUFJMUI7RUFFUSw4QkFBOEIsRUFBQTs7QUFJdEM7RUFFUSw4QkFBOEIsRUFBQTs7QUFJdEM7RUFDSSxjQUFjO0VBQ2QsYUFBYSxFQUFBOztBQUlqQjtFQUNJLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFGdkI7SUFJUSxhQUFhO0lBQ2IsZUFBZSxFQUFBOztBQUx2QjtNQVFZLE9BQU87TUFDUCxzQkFBc0IsRUFBQTs7QUFUbEM7TUFZWSxXQUFXO01BQ1gsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIseUJBQXlCLEVBQUE7O0FBaEJyQztRQW9CZ0IsVUFBVTtRQUVWLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixnQkFBZ0IsRUFBQTs7QUExQmhDO1FBNkJnQixhQUFhO1FBQ2IsVUFBVTtRQUNWLGdCQUFBO1FBQ0EsT0FBTyxFQUFBOztBQWhDdkI7UUFvQ2dCLHlCQUF5QjtRQUN6QixVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixZQUFZLEVBQUE7O0FBM0M1QjtRQWlEZ0IsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixPQUFPLEVBQUE7O0FBbkR2QjtVQXFEb0IsVUFBVTtVQUNWLFlBQVksRUFBQTs7QUF0RGhDO1VBeURvQixZQUFZO1VBQ1osVUFBVTtVQUNWLGFBQWE7VUFFYixrQkFBa0IsRUFBQTs7QUE3RHRDO1FBaUVnQixtQkFBbUI7UUFDbkIsbUJBQW1CLEVBQUE7O0FBbEVuQztVQW9Fb0IsV0FBVztVQUNYLFlBQVk7VUFDWixlQUFlO1VBQ2Ysa0JBQWtCO1VBQ2xCLFdBQVcsRUFBQTs7QUF4RS9CO01BNkVZLHlCQUF5QixFQUFBOztBQTdFckM7TUFnRlkseUJBQXlCLEVBQUE7O0FBS3JDO0VBQ0ksV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFHWSxxQkFBb0IsRUFBQTs7QUFLaEM7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFHWSxlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBSi9CO0VBT1ksZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFSeEI7RUFhWSx5QkFBeUIsRUFBQTs7QUFickM7RUFrQlEsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLDRCQUE0QjtFQUM1QixlQUFlLEVBQUE7O0FBRm5CO0lBSVEscUJBQXFCLEVBQUE7O0FBSjdCO0lBT1EsZUFBZTtJQUNmLHNCQUFzQixFQUFBOztBQUk5QjtFQUNJLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBQ2I7SUFYSjtNQVlRLGdCQUFnQixFQUFBLEVBRXZCOztBQUNEO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhLEVBQUE7O0FBQ2I7SUFWSjtNQVdRLGdCQUFnQixFQUFBLEVBRXZCOztBQUVEO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksb0JBQW9CO0VBQ3BCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2dyb3VwL2ZyZWUtZ3JvdXAtcXVlcnkvYWRkLXNlYXJjaC1tYW5hZ2U0L2FkZC1zZWFyY2gtbWFuYWdlNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGUge1xyXG4gICAgLnVpLWctNiB7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIC8vIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRhYmxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYnRuIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY3JlYXRlLW5hbWUge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIC51aS1tZC02IHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICA+aW5wdXQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM2JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAvLyAudWktbWQtMTJ7XHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufVxyXG5cclxuLnVpLW1kLTYge1xyXG4gICAgPmlucHV0IHtcclxuICAgICAgICB3aWR0aDogMzYlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGRyb3Bkb3duXHJcbjpob3N0L2RlZXAvIC5ndW5kYW0tZHJvcGRvd24+ZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5ndW5kYW0tZHJvcGRvd24xPmRpdiB7XHJcbiAgICB3aWR0aDogMzYlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIOihqOagvOWxleekulxyXG46aG9zdC9kZWVwLyAuZ3VuZGFtLXNlYXJjaCA+IGRpdiB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuLy8gdGFibGUge1xyXG4vLyAgICAgd2lkdGg6IDE1NTVweDtcclxuLy8gfVxyXG59XHJcbi8vIOaooeaAgeahhlxyXG4vLyA6aG9zdC9kZWVwLyAuZ3VuZGFtLWRpc3BsYXkgPiBkaXYge1xyXG4vLyAgICAgd2lkdGg6IDgwJTtcclxuLy8gbWF4LXdpZHRoOiA5MDBweDtcclxuLy8gaGVpZ2h0OiA4MCU7XHJcbi8vIG1heC1oZWlnaHQ6IDcwMHB4O1xyXG4vLyB9XHJcbjpob3N0L2RlZXAvIC5ndW5kYW0tZGlzcGxheT5kaXY+ZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICBoZWlnaHQ6IDg1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3duIHtcclxuICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgcGFkZGluZzogMC4yNWVtIDIuNWVtIDAgMC4yNWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudGVtcGxhdGVEaWFsb2cgLnVpLWRyb3Bkb3duIHtcclxuICAgIC51aS1kcm9wZG93bi1sYWJlbCB7XHJcbiAgICAgICAgcGFkZGluZzogMC4yNWVtIDIuNWVtIDAgMC4yNWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFzZS10YWJsZTJ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGhlaWdodDogNDQxcHg7XHJcbn1cclxuXHJcbi8v5a6i5oi35Lqn5ZOB5bGe5oCn562b6YCJIGNzc1xyXG4ucHJvX2Nob3NlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLmNvbnJpZ2h0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAudG90YWwge1xyXG4gICAgICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICAgICAgLm51bSB7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmN2Y4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogIzBhM2Q1NCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1JTsgLy8gYmFja2dyb3VuZDogIzAwOTREMjtcclxuICAgICAgICAgICAgICAgIC8vIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAvKiB3aWR0aDogODclOyAqL1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNkMmYxZWYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMGEzZDU0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIH0gLy8gLmJnIHtcclxuICAgICAgICAgICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk0RDI7XHJcbiAgICAgICAgICAgIC8vICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAudzMwIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC51bnRpbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDRweDsgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwOTREMjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmh1byB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0Om50aC1jaGlsZCgybisyKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXQ6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QyZjFlZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWJsZS1zZWxmIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQtY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmN1c19jaG9zZSB7XHJcbiAgICAuY29udCB7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCUhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHRoZWFkIHtcclxuICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2QyZjFlZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGJvZHkge1xyXG4gICAgICAgIHRyOm50aC1jaGlsZCgybisyKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGQge1xyXG4gICAgICAgIEBleHRlbmQgLmNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDUyLjI1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5udW0ge1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbn1cclxuXHJcbi5oYW5kbGUge1xyXG4gICAgd2lkdGg6IGNhbGMoMTYuNjY2NiUgLSA0OHB4KTtcclxuICAgIG1pbi13aWR0aDogNzVweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC50ZW1wbGF0ZURpYWxvZyAub3BlcmF0aW9ucyAudWktaW5wdXR0ZXh0IHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDAgIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoQnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzM0Y2ZlNjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuLnJlc2V0QnRue1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYWRkaW5nLTAge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmNyZWF0ZS1uYW1lIGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/add-search-manage4/add-search-manage4.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/add-search-manage4/add-search-manage4.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: AddSearchManageComponent4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSearchManageComponent4", function() { return AddSearchManageComponent4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_addSearchAmanage_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/addSearchAmanage.bean */ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/add-search-manage4/bean/addSearchAmanage.bean.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constant_addSearchAmanage_codeValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant/addSearchAmanage.codeValue */ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/add-search-manage4/constant/addSearchAmanage.codeValue.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//筛选客户模板管理
var AddSearchManageComponent4 = /** @class */ (function () {
    function AddSearchManageComponent4(router, httpService, confirmationService, commfunc) {
        this.router = router;
        this.httpService = httpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        // 表格中显示的信息
        this.tabMesg = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"];
        //日期
        this.ch = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["CALENDAR_CN"];
        this.creatStartTime = new Date(); //创建时间开始
        this.creatEndTime = new Date(); //创建时间开始
        //表数据
        this.tableData = [];
        // 目标客户探索条件表格数据
        this.custExplTable = [];
        //bean
        this.filterCustomBean = new _bean_addSearchAmanage_bean__WEBPACK_IMPORTED_MODULE_1__["FilterCustomBean"]();
        //提示信息
        this.msgs = [];
        //下拉框
        this.shareRangeOpt = _constant_addSearchAmanage_codeValue__WEBPACK_IMPORTED_MODULE_4__["ShareRangeOpt"]; //共享范围
        this.TempStatusOpt = _constant_addSearchAmanage_codeValue__WEBPACK_IMPORTED_MODULE_4__["TempStatusOpt"]; //模板状态
        this.createOrgId = ''; //创建机构绑定的值
        this.creatOrgOpt = [{ orgName: "请选择", orgId: "" }]; //创建机构
        this.orgOption = [];
        this.creatOrgOpts = []; //创建机构
        this.creatPeopleOpts = []; //创建人
        this.orgTreeDisplay = false;
        this.orgTreeDisplay2 = false;
        this.queryUserInValue = false;
        this.location = []; //位置描述
        this.showOrgDis = false; //当共享范围为私有时，创建机构和创建人都只可读
        this.marketReleaseDisplay = false; // 发布确定 模板
        this.templateDisplay = true;
        this.showFlag = true;
        // conditionList: any = [];//查询数组
        this.amendTempleteFlag = false; //修改模板
        // expCondName : string = '';//模板
        this.expCondId = ''; //模板
        this.conditionList = []; //查询数组
        this.selectedValues = [];
        this.selectedValues2 = [];
        this.chooseDisplay = false; //自定义表头
        this.selectedAttr = [];
        this.attrList = [];
        this.templeteDisplay = false;
        this.expCondName = ''; //模板名称
        this.advanceCondition = ''; //高级删选条件
        this.templeteList0 = []; //模板列表
        this.templeteManagerDisplay = false; //模板dialog
        this.templeteListDialog = []; //mubanlist
        this.searchManage2 = false; //模板管理模态框
        this.isN = true;
        this.CusGroupAttrOpt1 = [{
                label: '请选择', value: ''
            }]; //码值
        this.CusGroupAttrOpt2 = [{
                label: '请选择', value: ''
            }];
        this.CusGroupAttrOpt3 = [{
                label: '请选择', value: ''
            }];
        this.CusGroupAttrOpt4 = [{
                label: '请选择', value: ''
            }];
        this.isCountType = [
            { label: '请选择', value: '' },
            { label: '小于等于', value: '<=' },
            { label: '大于等于', value: '>=' },
        ]; //取值方式
        this.notCountType = [
            { label: '请选择', value: '' },
            { label: '等于', value: '=' },
            { label: '包含', value: '%%' },
        ]; //取值方式
        this.CountTypeEqual = [
            { label: '请选择', value: '' },
            { label: '等于', value: '=' },
        ]; //取值方式
        this.CountTypeLike = [
            { label: '请选择', value: '' },
            { label: '包含', value: '%%' },
        ]; //取值方式
        this.InTypeEqual = [
            { label: '请选择', value: '' },
            { label: '等于', value: 'in' },
        ]; //取值方式
        this.taskTypeParentId = ''; //任务类型id
        //20180609
        this.staff_display01 = false; // 选人木台眶
        this.staff_display02 = false; // 选人木台眶
        this.staff_display03 = false; // 选人木台眶
        this.isThird = false;
        this.creatStartTime = null;
        this.creatEndTime = null;
        this.codeValues();
        //码值表
        this.groupType = this.code['GroupTypeSave'];
        this.developmentLevel = this.code['developmentLevel'];
        this.productList = this.code['productList'];
        this.GroupStatus = this.code['GroupStatus'];
    }
    AddSearchManageComponent4.prototype.ngOnInit = function () {
        this.filterCustomBean.pageSize = 10;
        this.filterCustomBean.pageNum = 1;
        var mesg = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.commonHeader = mesg;
        this.chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        console.log(mesg.extParam.managePermission);
        if (mesg.extParam.managePermission && mesg.extParam.managePermission == 'Y') {
            this.isN = false;
        }
        else {
        }
        this.getSession();
        this.queryClick();
    };
    //码值
    AddSearchManageComponent4.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    // 浏览器滚动条状态 - 滚动
    AddSearchManageComponent4.prototype.onHideClose = function () {
        document.body.style.overflow = 'auto';
    };
    // 主联系人机构
    AddSearchManageComponent4.prototype.openOrgTreeClick = function () {
        this.orgTreeDisplay = !this.orgTreeDisplay;
        document.body.style.overflow = 'hidden';
    };
    // 主联系人
    AddSearchManageComponent4.prototype.openOrgTreeClick1 = function () {
        this.orgTreeDisplay2 = !this.orgTreeDisplay2;
        document.body.style.overflow = 'hidden';
    };
    // 机构树回调
    AddSearchManageComponent4.prototype.treeCall = function (param) {
        var orgId, orgIds = '';
        this.orgTreeDisplay = false;
        this.treeOrgName = [];
        // param.forEach((v) => {
        this.treeOrgName.push(param.orgName);
        // orgId.push(param.orgId)
        // this.filterCustomBean.createOrgId = orgId;
        this.filterCustomBean.createOrgId = param.orgId;
        this.queryUserInValue = param.orgId;
        document.body.style.overflow = 'auto';
    };
    AddSearchManageComponent4.prototype.perInfor = function (param) {
        var _this = this;
        var orgId = [], orgIds = '';
        this.orgTreeDisplay2 = false;
        this.createUserName = [];
        param.forEach(function (v) {
            _this.createUserName.push(v.tellerName);
            orgId.push(v.tellerId);
        });
        this.filterCustomBean.createUserId = orgId;
        document.body.style.overflow = 'auto';
    };
    //点击查询按钮 ，将选中的创建机构id传给后台
    AddSearchManageComponent4.prototype.queryClick = function () {
        this.filterCustomBean.creatTimeStart = this.commfunc.transDateN(this.creatStartTime);
        this.filterCustomBean.creatTimeEnd = this.commfunc.transDateN(this.creatEndTime);
        // this.filterCustomBean.createOrgId = this.createOrgId.split(',');//创建机构，将字符串转换成数组（接口中的创建机构格式是数组）
        this.query();
    };
    //查询列表
    AddSearchManageComponent4.prototype.query = function () {
        var _this = this;
        this.filterCustomBean.requestType = "4";
        this.filterCustomBean.queryScene = "1";
        this.httpService.queryTargetCustomerExploreList(this.filterCustomBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custExplTable = data.screenTemplateList;
                // this.custExplTable.forEach((v,i) => {
                //   if (v.createUserName == this.userName) {
                //     this.templateDisplay = true;
                //   }
                // })
                _this.total = data.totalCount;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '查询列表提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '查询列表提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '查询列表提示', detail: '调用服务失败！' });
        });
    };
    AddSearchManageComponent4.prototype.checkRadioValue = function (event, i) {
    };
    // 获取session值 初始化必要参数
    AddSearchManageComponent4.prototype.getSession = function () {
        this.userId = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        var param = JSON.parse(sessionStorage.chName);
        this.userName = param.userName;
    };
    // 列表的发布按钮
    AddSearchManageComponent4.prototype.marketRelease = function (item) {
        var _this = this;
        if (item.createUserId == this.userId) {
            if (item.status == '4') {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '发布失败', detail: '不能发布已共享模板！' });
                return;
            }
            this.filterCustomBean.screenTemplateId = item.screenTemplateId;
            this.filterCustomBean.screenTemplateName = item.screenTemplateName;
            // this.marketReleaseDisplay = !this.marketReleaseDisplay;
            this.confirmationService.confirm({
                message: '是否确认发布?',
                header: '发布',
                icon: 'fa fa-question-circle',
                accept: function () {
                    var param = { expCondId: _this.filterCustomBean.screenTemplateId, expCondName: _this.filterCustomBean.screenTemplateName };
                    _this.httpService.createScreenCustomerTemplate(param).subscribe(function (data) {
                        if (data.returnCode.code === "success") {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'success', summary: '查询列表提示', detail: data.returnCode.message });
                            _this.query();
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '查询列表提示', detail: data.returnCode.message });
                        }
                    }, function (error) {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '查询列表提示', detail: '调用服务失败！' });
                    });
                }
            });
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '发布失败', detail: '不能发布他人模板' });
        }
    };
    // 列表中的详情按钮，将筛选模板ID带到详情页面----(filter-custom-detail.component.ts)
    AddSearchManageComponent4.prototype.showDetail = function (item) {
        console.log(item);
        this.amendTempleteFlag = true;
        this.expCondName = item.expCondName;
        this.expCondId = item.expCondId;
        this.mappedTemplete(item);
        // this.router.navigate(['/pages/tzb/custom/custom-information/advanced-search/add-search', { screenTemplateId: item.screenTemplateId }]);
    };
    // 列表中的删除按钮
    AddSearchManageComponent4.prototype.deleteTarget = function (e) {
        var _this = this;
        if (e.createUserId == this.userId) {
            this.confirmationService.confirm({
                message: '是否确认删除?',
                header: '删除',
                icon: 'fa fa-question-circle',
                accept: function () {
                    var param = { expCondId: e.screenTemplateId, requestType: '4' };
                    _this.httpService.deleteTargetCustomerExplore(param).subscribe(function (data) {
                        if (data.returnCode.code === "success") {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'success', summary: '查询列表提示', detail: data.returnCode.message });
                            _this.query();
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '查询列表提示', detail: data.returnCode.message });
                        }
                    }, function (error) {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '查询列表提示', detail: '调用服务失败！' });
                    });
                }
            });
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '删除失败', detail: '不能删除他人模板' });
        }
    };
    //分页
    AddSearchManageComponent4.prototype.paginate = function (event) {
        //每页显示的条数
        this.filterCustomBean.pageSize = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.filterCustomBean.pageNum = currentPage;
        //调用查询的方法
        // this.filterCustomBean.pageSize = 10;
        // this.filterCustomBean.pageNum = 1;
        this.query();
        this.filterCustomBean.pageNum = 1;
    };
    //重置按钮
    AddSearchManageComponent4.prototype.resetClick = function () {
        this.filterCustomBean = new _bean_addSearchAmanage_bean__WEBPACK_IMPORTED_MODULE_1__["FilterCustomBean"]();
        this.creatStartTime = null;
        this.creatEndTime = null;
        this.treeOrgName = null;
        this.createUserName = null;
        this.createOrgId = '';
    };
    // 控制日历刷新
    AddSearchManageComponent4.prototype.refresh = function () {
        this.creatEndTime = null;
        this.showFlag = !this.showFlag;
    };
    //按钮权限
    AddSearchManageComponent4.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    AddSearchManageComponent4.prototype.faCheck = function () { };
    AddSearchManageComponent4.prototype.faClose = function () { };
    //模板列表查询
    AddSearchManageComponent4.prototype.queryTargetCustomerExploreList = function () {
        var _this = this;
        var params = {
            requestType: '4',
            queryScene: '1',
        };
        this.httpService.queryTargetCustomerExploreList(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                console.log(data);
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
    //点击 或的加号(客户产品属性列表)
    AddSearchManageComponent4.prototype.doAdd = function (name) {
        // this.is_html = true;
        if (this.conditionList.length == 10) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '查询条件不能超过十个' }];
            return false;
        }
        //客户标签属性
        var conditionListMember = {
            fieldModule: '',
            fieldAttr: '',
            field: '',
            operator: '',
            value: '',
            approachesTo: '',
            fieldValues: '',
            isThird: false,
            CusGroupAttrOpt1: [],
            CusGroupAttrOpt2: [],
            CusGroupAttrOpt3: [],
        };
        //客户群组属性
        if (name == 'custGroupAttr') {
            var temp = this.copyObj(conditionListMember);
            this.conditionList.push([temp]);
        }
        this.templeteChange('', 1, this.conditionList.length - 1, 0);
    };
    //点击
    // 对象拷贝
    AddSearchManageComponent4.prototype.copyObj = function (obj) {
        var temp = {};
        for (var i in obj) {
            temp[i] = obj[i];
        }
        return temp;
    };
    //点击且中的加号(客户产品属性列表)
    AddSearchManageComponent4.prototype.doAndAdd = function (i, name) {
        //(客户群组列表)
        if (name == 'custGroupAttr') {
            var conditionListMember = {
                fieldModule: '',
                fieldAttr: '',
                field: '',
                operator: '',
                value: '',
                approachesTo: '',
                fieldValues: '',
                isThird: false,
                CusGroupAttrOpt1: [],
                CusGroupAttrOpt2: [],
                CusGroupAttrOpt3: [],
            };
            var temp = this.copyObj(conditionListMember);
            this.conditionList[i].push(temp);
            this.templeteChange('', 1, i, this.conditionList[i].length - 1);
        }
    };
    //映射模板
    AddSearchManageComponent4.prototype.mappedTemplete = function (col) {
        var _this = this;
        this.expCondId = col.screenTemplateId;
        console.log(col);
        var params = {
            requestType: '4',
            expCondId: col.screenTemplateId,
        };
        //模板详情
        this.httpService.queryExploreConditionDetail(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                console.log(data);
                _this.expCondName = data.expCondName;
                _this.advanceCondition = data.requestMap.advanceInput;
                _this.conditionList = data.requestMap.conditionList;
                _this.conditionList.forEach(function (element, i) {
                    if (element && element.length > 0) {
                        element.forEach(function (element_2, j) {
                            if (element_2.field[0] == "create_time") {
                                _this.conditionList[i][j]['value'] = new Date(_this.conditionList[i][j]['value']);
                            }
                        });
                    }
                });
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
    //点击且中的减号(客户产品属性列表)
    AddSearchManageComponent4.prototype.doAndReduce = function (ind, name) {
        //客户群组属性
        if (name == 'custGroupAttr') {
            if (this.conditionList[ind].length == 1) {
                this.doReduce(ind, 'custGroupAttr');
                return;
            }
            this.conditionList[ind].splice(this.conditionList[ind].length - 1, 1);
        }
    };
    //点击或的减号
    AddSearchManageComponent4.prototype.doReduce = function (i, name) {
        //(客户群组列表)
        if (name == 'custGroupAttr') {
            this.conditionList.splice(i, 1);
        }
    };
    // 模板保存
    AddSearchManageComponent4.prototype.saveTemplete2 = function () {
        var _this = this;
        if (this.expCondName == '') {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '模板名称不能为空！' }];
            return false;
        }
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        var params = {
            requestType: '4',
            statusId: '3',
            marketFlag: '0',
            requestMap: {
                custInfo: { custType: '3' },
                conditionList: this.conditionList,
                advanceInput: this.advanceCondition
            },
            expCondName: this.expCondName,
            orgName: chName.orgName,
            userName: chName.userName,
            expCondId: this.expCondId
        };
        this.httpService.createExploreCondition(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // this.templeteList0 = data.
                console.log(data);
                //重新模板名称
                _this.expCondName = '';
                //关闭模态框
                _this.amendTempleteFlag = false;
                //重查询模板
                _this.queryClick();
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
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
    //模板码值
    AddSearchManageComponent4.prototype.templeteChange = function (event, index, i, ind) {
        var _this = this;
        debugger;
        // console.log(event);
        var arr = 'CusGroupAttrOpt' + index; //下一个下拉菜单的信息
        //清空已选择的值
        if (index == 2) {
            this.conditionList[i][ind]['fieldAttr'] = '';
            this.conditionList[i][ind]['field'] = '';
            this.conditionList[i][ind]['operator'] = '';
            this.conditionList[i][ind]['value'] = '';
            this.conditionList[i][ind]['label'] = '';
        }
        else if (index == 3) {
            this.conditionList[i][ind]['operator'] = '';
            this.conditionList[i][ind]['value'] = '';
            this.conditionList[i][ind]['label'] = '';
        }
        // console.log(this.conditionList);
        var taskTypeParentId;
        if (index == 4) {
            taskTypeParentId = index == '1' ? '' : event.value[0];
        }
        else {
            taskTypeParentId = index == '1' ? '' : event.value;
        }
        // if (index == 1) {
        //   this.CusGroupAttrOpt2 = [];
        //   this.CusGroupAttrOpt3 = [];
        // } else if (index == 2) {
        //   this.CusGroupAttrOpt3 = [];
        // }
        var params = {
            taskTypeKey: 'groupType',
            taskTypeParentId: taskTypeParentId
        };
        // console.log('0000000000')
        // console.log(this.conditionList);
        //初始化 给群状态默认
        // this.conditionList[0][0].fieldModule = "001";
        // this.templeteChange2();
        this.httpService.taskTypeQry(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                console.log(data);
                console.log(data.taskTypeList);
                //
                if (data.taskTypeList && data.taskTypeList.length != 0) {
                    if (index == 3) {
                        //三级
                        _this.conditionList[i][ind][arr] = [{
                                label: '请选择', value: ''
                            }];
                        data.taskTypeList.forEach(function (item) {
                            _this.conditionList[i][ind][arr].push({
                                label: item.taskTypeName,
                                value: [item.createrName, item.taskTypeLevel],
                            });
                        });
                    }
                    else {
                        //二级 一级
                        _this.conditionList[i][ind][arr] = [{
                                label: '请选择', value: ''
                            }];
                        data.taskTypeList.forEach(function (item) {
                            _this.conditionList[i][ind][arr].push({
                                label: item.taskTypeName,
                                value: item.taskTypeId,
                            });
                        });
                    }
                }
                else {
                    //四级
                    switch (event.value[1]) {
                        case '0':
                            _this.conditionList[i][ind]['valueType'] = _this.isCountType;
                            _this.conditionList[i][ind]['special'] = 'count';
                            break;
                        case '1':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeLike;
                            _this.conditionList[i][ind]['special'] = 'count';
                            break;
                        case '00':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'count';
                            break;
                        case '01':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'code';
                            _this.conditionList[i][ind]['specialType'] = _this.groupType; //群类型
                            break;
                        case '02':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'code';
                            _this.conditionList[i][ind]['specialType'] = _this.developmentLevel; //开发程度
                            break;
                        case '03':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'code';
                            _this.conditionList[i][ind]['specialType'] = _this.productList; //主推产品
                            break;
                        case '2':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'input';
                            _this.conditionList[i][ind]['inputType'] = 'bank-teller';
                            break;
                        case '3':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeLike;
                            _this.conditionList[i][ind]['special'] = 'input';
                            _this.conditionList[i][ind]['inputType'] = 'bank-teller';
                            break;
                        case '4':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeLike;
                            _this.conditionList[i][ind]['special'] = 'input';
                            _this.conditionList[i][ind]['inputType'] = 'bank-cust';
                            break;
                        case '5':
                            _this.conditionList[i][ind]['valueType'] = _this.InTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'input';
                            _this.conditionList[i][ind]['inputType'] = 'bank-org';
                            break;
                        case '04':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'code';
                            _this.conditionList[i][ind]['specialType'] = _this.GroupStatus; //群状态
                            break;
                        case '05':
                            _this.conditionList[i][ind]['valueType'] = _this.isCountType;
                            _this.conditionList[i][ind]['special'] = 'time';
                            break;
                        default:
                            _this.conditionList[i][ind]['valueType'] = [];
                            _this.conditionList[i][ind]['special'] = 'count';
                            break;
                    }
                }
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
    //选人服务 0609
    //选人
    AddSearchManageComponent4.prototype.selectUser = function (inputType, i, ind) {
        console.log('选人' + inputType);
        this.i = i;
        this.ind = ind;
        if (inputType == 'bank-cust') {
            this.staff_display02 = true;
        }
        else if (inputType == 'bank-teller') {
            if (this.isN) {
                this.conditionList[this.i][this.ind]['label'] = this.chName.userName;
                this.conditionList[this.i][this.ind]['value'] = this.commonHeader.userId;
            }
            else {
                this.staff_display03 = true;
            }
        }
        else {
            if (this.isN) {
                this.conditionList[this.i][this.ind]['label'] = this.chName.orgName;
                this.conditionList[this.i][this.ind]['value'] = this.commonHeader.orgId;
            }
            else {
                this.staff_display01 = true;
            }
        }
    };
    AddSearchManageComponent4.prototype.returnInfoHide = function () {
        // this.staff_display01 = false;
        console.log('模态框关闭');
    };
    AddSearchManageComponent4.prototype.returnInfo01 = function (data) {
        console.log(data);
        this.staff_display01 = false;
        if (data.hasOwnProperty('orgName')) {
            this.conditionList[this.i][this.ind]['label'] = data.orgName;
            this.conditionList[this.i][this.ind]['value'] = data.orgId;
            console.log(event);
        }
        // this.inValue = _.clone(data);
    };
    AddSearchManageComponent4.prototype.returnInfo02 = function (data) {
        console.log(data);
        this.staff_display02 = false;
        this.conditionList[this.i][this.ind]['label'] = data[0].custName;
        this.conditionList[this.i][this.ind]['value'] = data[0].custId;
        // this.inValue = _.clone(data);
    };
    AddSearchManageComponent4.prototype.returnInfo03 = function (data) {
        console.log(data);
        this.staff_display03 = false;
        this.conditionList[this.i][this.ind]['label'] = data[0].tellerName;
        this.conditionList[this.i][this.ind]['value'] = data[0].tellerId;
        // this.inValue = _.clone(data);
    };
    AddSearchManageComponent4 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-search-manage4',
            template: __webpack_require__(/*! ./add-search-manage4.component.html */ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/add-search-manage4/add-search-manage4.component.html"),
            styles: [__webpack_require__(/*! ./add-search-manage4.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/add-search-manage4/add-search-manage4.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"], _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]]
        })
        //筛选客户模板管理
        ,
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_7__["Commfunc"]])
    ], AddSearchManageComponent4);
    return AddSearchManageComponent4;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/add-search-manage4/bean/addSearchAmanage.bean.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/add-search-manage4/bean/addSearchAmanage.bean.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: FilterCustomBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCustomBean", function() { return FilterCustomBean; });
var FilterCustomBean = /** @class */ (function () {
    function FilterCustomBean() {
    }
    return FilterCustomBean;
}());

;


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/add-search-manage4/constant/addSearchAmanage.codeValue.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/add-search-manage4/constant/addSearchAmanage.codeValue.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: Test, ShareRangeOpt, TempStatusOpt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test", function() { return Test; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareRangeOpt", function() { return ShareRangeOpt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempStatusOpt", function() { return TempStatusOpt; });
/**
 * 筛选客户模板管理
 * 必须写注释 遵照格式 laebl : 中文名  value 值
 */
//测试
var Test = [
    { label: '中文名', value: '对应值' },
];
//共享范围
var ShareRangeOpt = [
    { label: '请选择', value: '' },
    { label: '私有', value: '3' },
    { label: '共享', value: '4' },
];
//条件状态
var TempStatusOpt = [
    { label: '请选择', value: '' },
    { label: '私有', value: '3' },
    { label: '共享', value: '4' },
];


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/bean/selectCustGroup.bean.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/bean/selectCustGroup.bean.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SelectCustGroupBean, groupList, contactList, introducerList, mentorList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCustGroupBean", function() { return SelectCustGroupBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupList", function() { return groupList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactList", function() { return contactList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introducerList", function() { return introducerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mentorList", function() { return mentorList; });
// 客户群查询
var SelectCustGroupBean = /** @class */ (function () {
    function SelectCustGroupBean() {
        // 入参
        this.searchScope = ''; //查询范围
        this.groupId = ''; //群号
        this.groupName = ''; //群名称
        this.groupType = ''; //群类型
        this.address = ''; //群地址
        this.ownerId = ''; //分组所有者ID
        this.orgId = ''; //所属机构
        this.groupStatus = ''; //群组状态
        this.pageNum = 1; //当前页数
        this.pageSize = 10; //每页条数
        this.groupList = []; //群列表    
    }
    return SelectCustGroupBean;
}());

var groupList = /** @class */ (function () {
    function groupList() {
        this.groupId = ''; //群号
        this.groupType = ''; //群类型
        this.groupName = ''; //群名称
        this.address = ''; //群地址
        this.ownerId = ''; //群主
        this.ownerName = ''; //分组所有者名称
        this.orgId = ''; //所属机构
        this.contactList = []; //群联系人列表
        this.contactListArr = [];
        this.introducerList = []; //群介绍人列表
        this.introducerListArr = [];
        this.mentorList = []; //群指导师傅列表
        this.mentorListArr = [];
        this.bgcFlag = ''; //后台中心标志
        this.description = ''; //备注（群描述）
        this.groupStatus = ''; //群组状态
    }
    return groupList;
}());

var contactList = /** @class */ (function () {
    function contactList() {
        this.adminType = ''; //管理员类型
        this.roleId = ''; //角色ID
        this.roleName = ''; //角色姓名
        this.groupZone = ''; //客群区域  
    }
    return contactList;
}());

var introducerList = /** @class */ (function () {
    function introducerList() {
        this.adminType = ''; //管理员类型
        this.roleId = ''; //角色ID
        this.roleName = ''; //角色姓名  
    }
    return introducerList;
}());

var mentorList = /** @class */ (function () {
    function mentorList() {
        this.adminType = ''; //管理员类型
        this.roleId = ''; //角色ID
        this.roleName = ''; //角色姓名  
    }
    return mentorList;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/free-group-query.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/free-group-query.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container boxShadow\">\r\n  <div class=\"ui-g-12 search boxShadow\">\r\n    <!-- 标题 -->\r\n    <div class=\"ui-g-12 header boxShadow\">\r\n      <div class=\"ui-g-7\">\r\n        <div class=\"header-title\">\r\n          <span class=\"text\">群高级查询</span>\r\n          <div class=\"searchInput\">\r\n            <input type=\"text\" id=\"advancedFilter\" placeholder=\"请输入高级筛选条件\" pInputText [(ngModel)]=\"searchContent\">\r\n            <button class=\"searchButton\" (click)=\"searchInput()\"></button>\r\n            <span title=\"筛选条件\" class=\"spanicon iconfont\" (click)=\"formatTemp()\"></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <div class=\"header-title prcla\">\r\n          <span class=\"text\">常用模板</span>\r\n          <span class=\"templateManage\" (click)=\"templeteManager()\">\r\n            <span class=\"iconfont tzbicon-setting iconfontmm\"></span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- 高级搜索 -->\r\n      <div class=\"ui-g-7 filterChoices\" (scroll)=\"scrollHandler($event)\">\r\n        <table class=\"ui-g-12\">\r\n          <thead>\r\n            <tr>\r\n              <th class=\"ui-g-1 center num\">序号</th>\r\n              <th class=\"ui-g-2\">字段模块</th>\r\n              <th class=\"ui-g-2\">字段类型</th>\r\n              <th class=\"ui-g-2\">字段属性</th>\r\n              <th class=\"ui-g-2\">取值方式</th>\r\n              <th class=\"ui-g-2\">字段取值</th>\r\n              <th class=\"ui-g-1 handle\">操作</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let items of conditionList;let i = index\">\r\n              <div *ngFor=\"let item of items; let ind = index\">\r\n                <td class=\"ui-g-1 center num\">{{i+1}}</td>\r\n                <td class=\"ui-g-2\">\r\n                  <span>\r\n                    <p-dropdown (onChange)=\"templeteChange($event,2,i,ind)\" class=\"gundam-dropdown\" [options]=\"item.CusGroupAttrOpt1\" [(ngModel)]=\"item.fieldModule\" appendTo=\"body\" #ddcomponent></p-dropdown>\r\n                  </span>\r\n                </td>\r\n                <td class=\"ui-g-2\">\r\n                  <span>\r\n                    <p-dropdown (onChange)=\"templeteChange($event,3,i,ind)\" class=\"gundam-dropdown\" [options]=\"item.CusGroupAttrOpt2\" [(ngModel)]=\"item.fieldAttr\" appendTo=\"body\" #ddcomponent></p-dropdown>\r\n                  </span>\r\n                </td>\r\n                <td class=\"ui-g-2\">\r\n                  <span>\r\n                    <p-dropdown (onChange)=\"templeteChange($event,4,i,ind)\" class=\"gundam-dropdown\" [options]=\"item.CusGroupAttrOpt3\" [(ngModel)]=\"item.field\" appendTo=\"body\" #ddcomponent></p-dropdown>\r\n                  </span>\r\n                </td>\r\n                <td class=\"ui-g-2\">\r\n                  <span>\r\n                    <p-dropdown class=\"gundam-dropdown\" [options]=\"item.valueType\" [(ngModel)]=\"item.operator\" [style]=\"{'width':'90%'}\" appendTo=\"body\" #ddcomponent></p-dropdown>\r\n                  </span>\r\n                </td>\r\n                <td class=\"ui-g-2\">\r\n                  <span class=\"operations\">\r\n                    <p-dropdown *ngIf=\"!item.special\" class=\"gundam-dropdown\" [options]=\"option\" [style]=\"{'width':'90%'}\" appendTo=\"body\" #ddcomponent></p-dropdown>\r\n                    <input *ngIf=\"item.special == 'count'\" class=\"gundam-autocomplete\" type=\"text\" name=\"value\" pInputText [(ngModel)]=\"item.value\">\r\n                    <p-dropdown *ngIf=\"item.special == 'code'\" class=\"gundam-dropdown\" [options]=\"item.specialType\" [(ngModel)]=\"item.value\"\r\n                      [style]=\"{'width':'90%'}\" appendTo=\"body\" #ddcomponent></p-dropdown>\r\n                    <input *ngIf=\"item.special == 'input'\" type=\"text\" (click)=\"selectUser(item.inputType,i,ind)\" name=\"name\" pInputText [(ngModel)]=\"item.label\">\r\n                    <p-calendar *ngIf=\"item.special == 'time'\" dateFormat=\"yy-mm-dd\" [(ngModel)]=\"item.value\" [locale]=\"ch\" appendTo=\"body\" #decomponent></p-calendar>\r\n                  </span>\r\n                </td>\r\n                <td class=\"ui-g-1 handle\">\r\n                  <div class=\"text-center\">\r\n                    <span title=\"删除\" class=\"spandelete iconfont tzbicon-delete\" (click)=\"doReduce(i,'custGroupAttr')\"></span>\r\n                    <span title=\"添加\" class=\"spaninserted iconfont tzbicon-plus-circle ng-star-inserted\" (click)=\"doAdd('custGroupAttr','html-btn')\"></span>\r\n                  </div>\r\n                </td>\r\n              </div>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <!-- 模板管理 -->\r\n      <div class=\"ui-g-4 templates top\">\r\n        <u-dataTable [emptyMessage]=\"tableMesg\" [value]=\"templeteList0\" [style]=\"{'text-align':'center'}\">\r\n          <p-column header=\"序号\" [style]=\"{'width':'15%'}\">\r\n            <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n              {{i+1}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"模板名称\">\r\n            <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span class=\"groupNumStyle\" (click)=\"mappedTemplete(col,1)\">{{col.screenTemplateName}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"操作\" [style]=\"{'width':'15%'}\">\r\n            <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span title=\"删除\" class=\"spandelete iconfont tzbicon-delete\" (click)=\"deleteTarget(col)\"></span>\r\n            </ng-template>\r\n          </p-column>\r\n        </u-dataTable>\r\n      </div>\r\n      <!-- 按钮 -->\r\n      <div class=\"ui-g-7 text-center funcButton\">\r\n        <button class=\"searchBtn\" (click)=\"tplSearch(1)\">查询</button>\r\n        <button class=\"resetBtn\" (click)=\"resetTemplete()\">重置</button>\r\n        <button class=\"resetBtn\" (click)=\"saveTemplete()\">保存模板</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- 客户群列表 -->\r\n    <div class=\"ui-g-12 boxShadow\" id=\"linkToGroupOwnerInfo\" style=\"margin-top: 10px;padding-bottom:2em;\">\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-10\">\r\n          <button [ngClass]=\"{'active':show==1}\" (click)=\"allot(1)\">主管群</button>\r\n          <!-- <button [ngClass]=\"{'active':show==2}\" (click)=\"allot(2)\">辅管群</button> -->\r\n          <div *ngIf=\"show==1\">\r\n            <p-checkbox class=\"history\" label=\"查询历史记录\" binary=\"true\" [(ngModel)]=\"selcetedValues1\" (onChange)=\"checkChange($event,1)\"></p-checkbox>\r\n            <monthly-calendar id=\"calendar\" class=\"form-control\" [placeholder]=\"'请选择日期'\" (result)=\"chooseMonthMain = $event\" [range]=\"{before:50,after:50}\">\r\n            </monthly-calendar>&nbsp;&nbsp;\r\n            <!-- <p-radioButton name=\"radio1\" value=\"1\" label=\"当前客户群名单\" [(ngModel)]=\"queryTypeFlag\" (onClick)=\"changeRadioValue($event,1)\"\r\n              [disabled]=\"queryTypeDisabled1\"></p-radioButton> -->\r\n            <p-radioButton name=\"radio1\" value=\"0\" label=\"历史时点群名单\" [(ngModel)]=\"queryTypeFlag\" (onClick)=\"changeRadioValue($event,1)\"\r\n              [disabled]=\"queryTypeDisabled1\"></p-radioButton>&nbsp;&nbsp;\r\n            <p-checkbox binary=\"true\" label=\"汇总数据\" [(ngModel)]=\"total\" (click)=\"totalQuery()\"></p-checkbox>\r\n          </div>\r\n          <div *ngIf=\"show==2\">\r\n            <p-checkbox class=\"history\" label=\"查询历史记录\" binary=\"true\" [(ngModel)]=\"selcetedValues2\" (onChange)=\"checkChange($event,2)\"></p-checkbox>\r\n            <monthly-calendar class=\"form-control\" [placeholder]=\"'请选择日期'\" (result)=\"chooseMonthNotMain = $event\" [range]=\"{before:50,after:50}\">\r\n            </monthly-calendar>&nbsp;&nbsp;\r\n            <!-- <p-radioButton name=\"radio2\" value=\"1\" label=\"当前客户群名单\" [(ngModel)]=\"queryTypeFlag\" (onClick)=\"changeRadioValue($event,2)\"\r\n              [disabled]=\"queryTypeDisabled2\"></p-radioButton> -->\r\n            <p-radioButton name=\"radio2\" value=\"0\" label=\"历史时点群名单\" [(ngModel)]=\"queryTypeFlag\" (onClick)=\"changeRadioValue($event,2)\"\r\n              [disabled]=\"queryTypeDisabled2\"></p-radioButton>&nbsp;&nbsp;\r\n            <p-checkbox binary=\"true\" label=\"汇总数据\" [(ngModel)]=\"total\"></p-checkbox>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-g-2 text-right\">\r\n          <span title=\"选择字段\" class=\"iconfontmm iconfont tzbicon-filters\" style=\"font-size: 20px;\" (click)=\"chooseParam()\"></span>\r\n        </div>\r\n      </div>\r\n      <!-- 主管群 -->\r\n      <div class=\"ui-g-12\" *ngIf=\"show==1\">\r\n        <u-dataTable [emptyMessage]=\"tableMesg\" [value]=\"groupList1\" scrollable=\"true\" scrollWidth=\"'1500px'\" [style]=\"{'text-align':'center'}\">\r\n          <p-column header=\"序号\" [style]=\"{'width':'50px'}\">\r\n            <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <label *ngIf=\"!col.sumFlag\">{{i+1}}</label>\r\n              <label *ngIf=\"col.sumFlag\">{{totalAverage}}</label>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"群编号\" [style]=\"{'width':'200px'}\">\r\n            <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span class=\"groupNumStyle\" (click)=\"toGroupView(col,'isMain')\">{{col.group_id}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"\" header=\"\" *ngFor=\"let item of headerList\" [style]=\"{'width':item.width}\">\r\n            <ng-template pTemplate=\"header\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span title=\"{{item.taskTypeName}}\">{{item.taskTypeName}}</span>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span title=\"{{col[item.createrName]}}\" [ngStyle]=\"{'float':item.updater == 1?'right':'none'}\">{{col[item.createrName]}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"操作\" [style]=\"{'width':'100px'}\">\r\n            <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span *ngIf=\"!col.sumFlag\" (click)=\"toGroupView(col)\" class=\"tabelDetailIco\">查看</span>\r\n            </ng-template>\r\n          </p-column>\r\n        </u-dataTable>\r\n      </div>\r\n\r\n      <!-- 辅管群 -->\r\n      <!-- <div class=\"ui-g-12\" *ngIf=\"show==2\">\r\n        <u-dataTable [emptyMessage]=\"tableMesg\" [value]=\"groupList2\" scrollable=\"true\" scrollWidth=\"'1500px'\">\r\n          <p-column header=\"序号\" [style]=\"{'width':'50px'}\">\r\n            <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <label *ngIf=\"!col.sumFlag\">{{i+1}}</label>\r\n              <label *ngIf=\"col.sumFlag\">{{totalAverage}}</label>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"群编号\" [style]=\"{'width':'200px','text-align':'center'}\">\r\n            <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span class=\"groupNumStyle\" (click)=\"toGroupView(col,'isMain')\">{{col.group_id}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column [style]=\"{'width':'200px'}\" field=\"\" header=\"\" *ngFor=\"let item of headerList\">\r\n            <ng-template pTemplate=\"header\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span title=\"{{item.taskTypeName}}\">{{item.taskTypeName}}</span>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span title=\"{{col[item.createrName]}}\">{{col[item.createrName]}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column header=\"操作\" [style]=\"{'width':'100px'}\">\r\n            <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span *ngIf=\"!col.sumFlag\" (click)=\"toGroupView(col)\" class=\"tabelDetailIco\">查看</span>\r\n            </ng-template>\r\n          </p-column>\r\n        </u-dataTable>\r\n      </div> -->\r\n      <div class=\"ui-g-12 rel\" *ngIf=\"show==1\">\r\n        <u-paginator [first]=\"first1\" rows=\"{{pageSize1}}\" totalRecords=\"{{totalNum1}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50]\"\r\n          (onPageChange)=\"paginate1($event)\"></u-paginator>\r\n        <button pButton type=\"button\" *ngIf=\"permissionCheck('SID00002_P025_P004')\" label=\"下载\" (click)=\"download()\"></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p-dialog *ngIf=\"downloadPerson\" header=\"提交给\" modal=\"modal\" width='435' [(visible)]=\"downloadPerson\" (onHide)=\"downloadHide()\"\r\n    class=\"dialog\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n  </p-dialog>\r\n\r\n  <!-- 客户名单列表- 字段选择模态框 -->\r\n  <p-dialog *ngIf=\"chooseDisplay\" [(visible)]=\"chooseDisplay\" class=\"gundam-display1\" baseZIndex=\"2\" modal=\"true\" responsive=\"true\">\r\n    <p-header>\r\n      选择显示字段\r\n    </p-header>\r\n    <div class=\"ui-g-12 checkAll\">\r\n      <p-checkbox binary=\"true\" label=\"全选\" (click)=\"checkAll2()\" [(ngModel)]=\"isAll\"></p-checkbox>\r\n    </div>\r\n    <div class=\"ui-g-12 background-color\">\r\n      <div *ngFor=\"let arr of getShowTemp;let ind = index;\">\r\n        <div class=\"ui-g-12 bd\">{{arr.taskTypeName}}</div>\r\n        <div class=\"ui-g-12\">\r\n          <p-checkbox [disabled]=\"item.taskTypeName == '群编号'\" class=\"ui-g-2\" label=\"{{item.taskTypeName}}\" *ngFor=\"let item of getSecondCustList[ind];let i = index\"\r\n            value=\"{{item.taskTypeName}}\" [(ngModel)]=\"selectedHeaderList\" (click)=\"checked()\"></p-checkbox>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 text-center\">\r\n      <button class=\"searchBtn\" (click)=\"save()\">确定</button>\r\n    </div>\r\n  </p-dialog>\r\n\r\n\r\n  <!-- 查看详情 -->\r\n  <p-dialog *ngIf=\"templeteDisplay\" [(visible)]=\"templeteDisplay\" width=\"500\" height=\"300\" modal=\"true\" class=\"templete\">\r\n    <p-header>\r\n      新增客户群模板\r\n    </p-header>\r\n    <div class=\"ui-g-12 templete\">\r\n      <div class=\"ui-g-3\">\r\n        <div class=\"label\" appValidation>模板名称:</div>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <div class=\"first-query\">\r\n          <input class=\"margin-1\" type=\"text\" [(ngModel)]=\"expCondName\" pInputText>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 text-center\">\r\n      <button (click)=\"saveTemplete2()\" pButton type=\"button\" label=\"提交\"></button>\r\n    </div>\r\n  </p-dialog>\r\n\r\n\r\n  <p-dialog *ngIf=\"templeteManagerDisplay\" [(visible)]=\"templeteManagerDisplay\" width=\"500\" height=\"300\" modal=\"true\">\r\n    <p-header>\r\n      模板管理\r\n    </p-header>\r\n    <div class=\"ui-g-12\">\r\n      <p-dataTable [emptyMessage]=\"tableMesg\" [value]=\"templeteListDialog\">\r\n        <p-column header=\"序号\" [style]=\"{'width':'15%'}\">\r\n          <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n            {{i+1}}\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column header=\"模板名称\">\r\n          <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n            <span class=\"groupNumStyle\" (click)=\"mappedTemplete(col,2)\">{{col.screenTemplateName}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <!-- <p-column field=\"screenTemplateId\" header=\"模板编号\"></p-column> -->\r\n        <p-column field=\"screenTemplateName\" header=\"模板名称\"></p-column>\r\n        <p-column header=\"操作\" [style]=\"{'width':'15%'}\">\r\n          <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n            <span (click)=\"delTemplete(col)\" class=\"tabelDeleteIco\">删除</span>\r\n          </ng-template>\r\n        </p-column>\r\n      </p-dataTable>\r\n    </div>\r\n  </p-dialog>\r\n\r\n  <!-- msg -->\r\n  <p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n  <!-- 删除-->\r\n  <p-confirmDialog header=\"提示\" appendTo=\"body\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\r\n\r\n  <p-dialog (onHide)=\"searchManage2Hide()\" class=\"search-manage2\" *ngIf=\"searchManage2\" [(visible)]=\"searchManage2\" modal=\"true\">\r\n    <app-add-search-manage4></app-add-search-manage4>\r\n  </p-dialog>\r\n\r\n  <!-- 模态框 -->\r\n  <p-dialog *ngIf=\"staff_display01\" class=\"orgTreePage\" [(visible)]=\"staff_display01\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n      选择机构\r\n    </p-header>\r\n    <org-tree-component (outValue)=\"returnInfo01($event)\" [inValue]=\"chooseOrgInvalue\"></org-tree-component>\r\n  </p-dialog>\r\n\r\n  <p-dialog *ngIf=\"staff_display02\" [positionTop]=\"50\" [(visible)]=\"staff_display02\" width=\"900\">\r\n    <p-header>\r\n      选择客户\r\n    </p-header>\r\n    <queryGroupCustom (outValue)=\"returnInfo02($event)\"></queryGroupCustom>\r\n  </p-dialog>\r\n\r\n  <p-dialog *ngIf=\"staff_display03\" [positionTop]=\"50\" [(visible)]=\"staff_display03\" width=\"900\">\r\n    <p-header>\r\n      选择人员\r\n    </p-header>\r\n    <queryUser (outValue)=\"returnInfo03($event)\"></queryUser>\r\n  </p-dialog>\r\n\r\n  <p-dialog *ngIf=\"formatTempDialog\" [positionTop]=\"50\" [(visible)]=\"formatTempDialog\" width=\"900\" modal=\"true\" class=\"my-cust-contactf\">\r\n    <p-header>\r\n      过滤器高级筛选条件\r\n    </p-header>\r\n    <div class=\"ui-g-12\">\r\n      <header-title [Info]=\"'过滤器高级筛选条件说明'\"></header-title>\r\n      <pre>\r\n          用户可以输入高级筛选条件以实现更复杂的查询需求\r\n          ▪条件序号从1开始\r\n          ▪条件之间的关系分为：“且”、“或”\r\n            ▪“且”也就是“并且”的含义，表示任何一个条件都必须满足\r\n            ▪“或”也就是“或者”的含义，表示满足其中任意一个条件即可\r\n          ▪可以使用括号“()”\r\n  \r\n          举例：\r\n          ▪1或2\r\n          ▪(1或2)且3\r\n          ▪(1且2)或(3且4)\r\n          ▪(1且2)或(3且(4或5))\r\n  \r\n          过滤器各条件之间缺省时，默认为“且”关系\r\n          这里的缺省是指：\r\n          ▪高级筛选条件为空\r\n  \r\n          当高级筛选条件中的某条件未输入条件值时，表示该条件无效。例如：\r\n          ▪(1或2)且3，其中条件2未输入条件值，则实际执行的筛选条件为1且3\r\n      </pre>\r\n    </div>\r\n  </p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/free-group-query.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/free-group-query.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 1279px) {\n  .ui-mp-1,\n  .ui-mp-2,\n  .ui-mp-3,\n  .ui-mp-4,\n  .ui-mp-5,\n  .ui-mp-6,\n  .ui-mp-7,\n  .ui-mp-8,\n  .ui-mp-9,\n  .ui-mp-10,\n  .ui-mp-11,\n  .ui-mp-12 {\n    padding: .5em; }\n  .ui-mp-1 {\n    width: 8.3333%; }\n  .ui-mp-2 {\n    width: 16.6667%; }\n  .ui-mp-3 {\n    width: 25%; }\n  .ui-mp-4 {\n    width: 33.3333%; }\n  .ui-mp-5 {\n    width: 41.6667%; }\n  .ui-mp-6 {\n    width: 50%; }\n  .ui-mp-7 {\n    width: 58.3333%; }\n  .ui-mp-8 {\n    width: 66.6667%; }\n  .ui-mp-9 {\n    width: 75%; }\n  .ui-mp-10 {\n    width: 83.3333%; }\n  .ui-mp-11 {\n    width: 91.6667%; }\n  .ui-mp-12 {\n    width: 100%; } }\n\n@media screen and (min-width: 1025px) {\n  .ui-ml-1,\n  .ui-ml-2,\n  .ui-ml-3,\n  .ui-ml-4,\n  .ui-ml-5,\n  .ui-ml-6,\n  .ui-ml-7,\n  .ui-ml-8,\n  .ui-ml-9,\n  .ui-ml-10,\n  .ui-ml-11,\n  .ui-ml-12 {\n    padding: .5em; }\n  .ui-ml-1 {\n    width: 8.3333%; }\n  .ui-ml-2 {\n    width: 16.6667%; }\n  .ui-ml-3 {\n    width: 25%; }\n  .ui-ml-4 {\n    width: 33.3333%; }\n  .ui-ml-5 {\n    width: 41.6667%; }\n  .ui-ml-6 {\n    width: 50%; }\n  .ui-ml-7 {\n    width: 58.3333%; }\n  .ui-ml-8 {\n    width: 66.6667%; }\n  .ui-ml-9 {\n    width: 75%; }\n  .ui-ml-10 {\n    width: 83.3333%; }\n  .ui-ml-11 {\n    width: 91.6667%; }\n  .ui-ml-12 {\n    width: 100%; } }\n\n#linkToGroupOwnerInfo {\n  padding-bottom: 5px; }\n\ndl {\n  width: 95%;\n  height: 55px;\n  text-align: center;\n  padding: 0;\n  border: 1px solid #dfdfdf;\n  border-radius: 3px;\n  margin: 0.5em 0; }\n\ndl dt {\n    float: left; }\n\ndl dd.count {\n    height: 32px;\n    font-size: 18px;\n    line-height: 38px; }\n\ndl dd.count .count-color {\n      color: #19b0c8;\n      text-decoration: underline; }\n\ndl dd.font {\n    font-size: 12px;\n    color: #999; }\n\ndl img {\n    width: 66px; }\n\n@media screen and (max-width: 1280px) {\n  dl {\n    height: 48px; }\n    dl img {\n      width: 56px; }\n    dl dd.count {\n      height: 27px;\n      font-size: 16px;\n      line-height: 31px; } }\n\nul {\n  margin: 0;\n  padding: 1em;\n  width: 100%;\n  list-style: none; }\n\nul li {\n    float: left;\n    width: 32.5%; }\n\n.btn-area {\n  text-align: right;\n  padding: 1em !important; }\n\n.btn-area .btn-class1 {\n    background: #f4c201; }\n\n.btn-area .btn-class2 {\n    background: #19b0c8; }\n\n.header-span {\n  display: inline-block;\n  width: 60px;\n  height: 25px;\n  color: #19b0c8;\n  margin-top: -31px;\n  cursor: pointer; }\n\n.header-img {\n  width: 8px;\n  height: 12px;\n  margin-left: 5px; }\n\n.header-title {\n  width: 100%;\n  height: 34px;\n  background-color: #f2f2f2;\n  padding: 7px 0 7px 20px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between; }\n\n.header-title .title-right {\n    display: flex; }\n\n.header-title .title-right .line {\n      width: 3px;\n      height: 22px;\n      display: inline-block;\n      background-color: #19b0c8;\n      margin-right: 13px; }\n\n.header-title .title-right .text {\n      flex: 1;\n      height: 20px;\n      font-size: 14px;\n      line-height: 20px;\n      display: block;\n      font-weight: bold; }\n\n.header-title a {\n    margin-right: 20px; }\n\n.btn {\n  display: flex;\n  flex-direction: column;\n  text-align: center; }\n\n.btn button {\n    min-width: 160px; }\n\n.btn_down {\n  text-align: center; }\n\n.btn_down button {\n    border-radius: 30px; }\n\n.cover {\n  overflow: hidden; }\n\n.cover .ui-g-12,\n  .cover .ui-g-7,\n  .cover .ui-g-5 {\n    padding: 0;\n    box-sizing: border-box; }\n\n.cover .ui-g-12 {\n    margin: 0; }\n\n.cover .ui-g-7,\n  .cover .ui-g-5 {\n    margin-top: 10px; }\n\n.cover .ui-g-7 .ui-g-12,\n    .cover .ui-g-5 .ui-g-12 {\n      height: 100%; }\n\n.cover .onerow {\n    height: 250px;\n    padding: 0 5px; }\n\n.cover .secondrow {\n    height: 100%;\n    padding: 0 5px; }\n\n.cover .secondrow .total {\n      margin-left: 0 !important;\n      margin-top: 20px !important;\n      margin-bottom: 20px; }\n\n.grouptotal {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  font-size: 12px;\n  border: none !important;\n  margin-top: 7px;\n  margin-bottom: 14px;\n  margin-left: 7px; }\n\n.grouptotal .ui-g-3,\n  .grouptotal .ui-g-2 {\n    padding: 0;\n    text-align: center;\n    background: #F3F2F2;\n    border-bottom: 1px solid #ffffff;\n    border-left: 1px solid #ffffff;\n    padding: 15px 0 15px 0;\n    height: 55px; }\n\n.ui-g-12 {\n  padding: 0; }\n\n.btn {\n  text-align: center; }\n\n.btn button {\n    margin-top: 7px;\n    width: 60%; }\n\n.btn button:first-child {\n    margin-top: 0px; }\n\n:host/deep/ .ui-datatable {\n  padding: 0.5em; }\n\n:host/deep/ .total label {\n  max-width: 145px; }\n\n:host/deep/ .ui-datatable table {\n  text-align: center;\n  table-layout: fixed;\n  white-space: normal; }\n\n:host/deep/ #echarts > div > div:nth-child(1) {\n  padding-left: 10% !important; }\n\n:host/deep/ #echarts > div > div:nth-child(1) canvas {\n    width: 90% !important;\n    height: 90% !important; }\n\n.container {\n  min-width: 1024px; }\n\n@media screen and (max-width: 1740px) {\n    .container {\n      font-size: 12px; }\n      .container button {\n        font-size: 12px; }\n      .container span {\n        background-size: contain; } }\n\n.container .container-left .huizong {\n    background: #fafafa;\n    height: 207px;\n    display: inline-block;\n    width: 100%; }\n\n.container .container-left .huizong .huizong-ul {\n      margin-top: -0.5em; }\n\n@media screen and (max-width: 1280px) {\n    .container .container-left .huizong {\n      height: 176px; } }\n\na,\n.img {\n  cursor: pointer; }\n\n.tab input {\n  border: none;\n  width: 100%; }\n\n.groupNumStyle {\n  color: #19b0c8; }\n\n.groupNumStyle:hover {\n    cursor: pointer;\n    text-decoration: underline;\n    color: #19b0c8; }\n\n.container-right {\n  margin-top: -0.5em; }\n\n.daiban-box {\n  height: 253px;\n  overflow: hidden; }\n\n@media screen and (max-width: 1280px) {\n  .daiban-box {\n    height: 221px; } }\n\n:host/deep/ .ui-datatable .ui-widget {\n  padding: 0.5em;\n  margin: 0;\n  padding-top: 1em; }\n\n:host/deep/ .ui-tabview-panel.ui-widget-content {\n  padding: 0.5em; }\n\n:host/deep/ .ui-datatable.ui-widget {\n  padding: 0; }\n\n@media screen and (max-width: 1280px) {\n  :host/deep/ .ui-button,\n  body .ui-datepicker-buttonpane > button {\n    height: 2.2em; } }\n\n.cus_chose .cont span {\n  width: 50% !important; }\n\n.table-self {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: center; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right;\n  color: red; }\n\n.background-color {\n  background: #f7f7f7;\n  padding-left: 0;\n  padding-right: 0; }\n\n.templete {\n  width: 30%;\n  height: 150px;\n  margin-left: 35%;\n  margin-top: 157px; }\n\n.search-manage2 {\n  height: 90%; }\n\n:host/deep/ .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n.history,\n.form-control {\n  display: inline-block; }\n\n.header {\n  border-bottom: 1px solid #dadada;\n  font-size: 15px; }\n\n.header .line {\n    width: 3px;\n    height: 22px;\n    display: inline-block;\n    background-color: #19b0c8;\n    margin-right: 13px; }\n\n.header .text {\n    vertical-align: top;\n    height: 22px;\n    display: inline-block;\n    line-height: 22px;\n    white-space: nowrap;\n    color: #545454;\n    font-size: 16px;\n    font-weight: bold; }\n\n.header .ui-g-7 {\n    padding-left: 0;\n    box-shadow: 5px 0 5px #dbdada; }\n\n.searchInput {\n  float: right;\n  text-align: right; }\n\n.searchInput label {\n    min-width: 84px; }\n\n.searchInput input {\n    width: 70%;\n    border-right: 0; }\n\n.ui-g-7 {\n  width: 70%; }\n\n.ui-g-4 {\n  width: 29%;\n  margin-left: 1%;\n  overflow: auto; }\n\n.rel {\n  position: relative; }\n\n.rel button {\n    position: absolute;\n    left: calc(50% - 2.5em);\n    top: 0; }\n\ntable thead tr {\n  font-size: 14px;\n  background: #f0f0f0 !important; }\n\ntable thead th {\n  font-weight: 400;\n  height: 35px; }\n\ntable tbody tr:nth-child(2n+2) {\n  background-color: #efefef; }\n\ntable td {\n  height: 35px;\n  line-height: 35px;\n  padding: 0; }\n\n.center, table td {\n  text-align: center; }\n\n:host/deep/ .ui-dropdown {\n  width: 80% !important;\n  min-width: 0 !important; }\n\n:host/deep/ .ui-dropdown .ui-dropdown-label {\n    padding: 0 2.5em 0 0; }\n\n:host/deep/ .ui-dropdown-panel.ui-widget-content.ui-corner-all.ui-shadow.ng-trigger.ng-trigger-panelState {\n  z-index: 100 !important; }\n\n.num {\n  width: 48px; }\n\n.handle {\n  width: calc(16.6666% - 48px);\n  min-width: 75px; }\n\n.handle span {\n    display: inline-block; }\n\n.handle img {\n    cursor: pointer;\n    vertical-align: middle; }\n\n.templateManage {\n  float: right;\n  cursor: pointer;\n  width: 20px;\n  line-height: 25px; }\n\n.templateManage img {\n    height: 16px;\n    vertical-align: middle;\n    margin-top: -1px; }\n\n.filterChoices {\n  height: 160px;\n  overflow: auto;\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.templates {\n  height: 160px;\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.search {\n  overflow: auto;\n  margin-bottom: 15px; }\n\n:host/deep/ .operations .ui-inputtext {\n  width: 80% !important;\n  min-width: 0 !important; }\n\n:host/deep/ .ui-tabview .ui-tabview-nav > li > a {\n  width: 140px;\n  text-align: center; }\n\n:host/deep/ .ui-tabview .ui-tabview-nav > li.ui-state-active a::after {\n  left: 23%;\n  width: 75px; }\n\n:host/deep/ .only-year-month-select .form-control {\n  width: 130px !important; }\n\n.funcButton {\n  padding: 0.5em; }\n\n.funcButton button {\n    min-width: 100px;\n    height: 25px;\n    margin-right: 30px; }\n\n.searchButton {\n  width: 25px;\n  height: 25px;\n  border: 1px solid #bdbdbd;\n  border-left: 0;\n  border-radius: 0 3px 3px 0;\n  background: url('searchMore.png') no-repeat center center;\n  background-color: #fff;\n  outline: 0;\n  vertical-align: top;\n  margin-left: -7px;\n  cursor: pointer; }\n\n.chooseField {\n  cursor: pointer; }\n\n.chooseField img {\n    vertical-align: middle;\n    height: 16px; }\n\n:host/deep/ .dialog .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n:host/deep/ .dialog .ui-datatable .ui-widget {\n  padding: 0em;\n  margin: 0;\n  padding-top: 0em; }\n\n.bd {\n  padding: .75em 0;\n  background: #d2f1ef; }\n\n.gundam-display1 .checkAll {\n  padding: .25em 0; }\n\n.table {\n  text-align: right; }\n\n.icon {\n  vertical-align: top;\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  margin-top: 4px; }\n\n.searchBtn {\n  display: inline-block;\n  width: 60px;\n  height: 30px;\n  cursor: pointer;\n  background: #34cfe6;\n  color: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 15px;\n  margin-left: 15px;\n  outline: none; }\n\n@media screen and (max-width: 1280px) {\n    .searchBtn {\n      margin-left: 5px; } }\n\n.resetBtn {\n  background: #34cfe6;\n  color: #fff;\n  width: 60px;\n  height: 30px;\n  border-radius: 15px;\n  cursor: pointer;\n  border: 1px solid #e8e8e8;\n  margin-left: 15px;\n  outline: none; }\n\n@media screen and (max-width: 1280px) {\n    .resetBtn {\n      margin-left: 5px; } }\n\n.header-title {\n  width: 100%;\n  background-color: #ffffff;\n  padding-left: 12px;\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap; }\n\n.header-title .line {\n    width: 3px;\n    height: 19px;\n    display: inline-block;\n    margin-right: 13px;\n    background-color: #19b0c8; }\n\n@media screen and (max-width: 1280px) {\n    .header-title .line {\n      height: 17px; } }\n\n.header-title .text {\n    flex: 1;\n    height: 20px;\n    line-height: 20px;\n    display: block;\n    white-space: nowrap;\n    font-size: 14px;\n    color: #004257;\n    width: 25px;\n    font-weight: bold; }\n\n@media screen and (max-width: 1280px) {\n    .header-title .text {\n      font-size: 15px; } }\n\n:host /deep/ .my-cust-contactf .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: 90% !important; }\n\n:host/deep/ .my-cust-contactf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n\n.spanicon {\n  font-size: 20px;\n  cursor: pointer; }\n\n.spandelete {\n  color: red;\n  font-size: 20px;\n  cursor: pointer; }\n\n.spaninserted {\n  color: #34cfe6;\n  font-size: 20px;\n  cursor: pointer; }\n\n.iconfontmm {\n  font-weight: 500;\n  font-size: 20px;\n  cursor: pointer;\n  color: #34cfe6 !important; }\n\n:host/deep/ .ui-g-10 button {\n  float: left;\n  width: 100px;\n  height: 25px;\n  color: #333;\n  background: white;\n  border: 1px solid #ccc; }\n\n:host/deep/ .ui-g-10 button:nth-child(1) {\n  border-radius: 10px 0px 0px 10px; }\n\n:host/deep/ .ui-g-10 button:nth-child(2) {\n  margin-right: 10px;\n  border-radius: 0px 10px 10px 0px; }\n\n.active {\n  border: none !important;\n  color: white !important;\n  background: #f4c201 !important; }\n\n:host/deep/ .form-control {\n  height: 20px !important; }\n\n:host/deep/ .ui-datatable-scrollable-body {\n  height: 485px !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr {\n  height: 36px !important; }\n\n:host/deep/ .top .u-datatable .ui-datatable-thead > tr {\n  background: #f0f0f0 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data tr:nth-child(even) {\n  background: #f0f0f0 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr {\n  background: #d7d7d7 !important; }\n\n:host/deep/ .u-datatable .ui-datatable-data > tr > td {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n:host/deep/ .u-datatable .ui-datatable-thead > tr > th {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n:host/deep/ .u-paginator.ui-widget.ui-widget-header.ui-unselectable-text {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2dyb3VwL2ZyZWUtZ3JvdXAtcXVlcnkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tbWFya2V0aW5nXFxncm91cFxcZnJlZS1ncm91cC1xdWVyeVxcZnJlZS1ncm91cC1xdWVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJOzs7Ozs7Ozs7Ozs7SUFZSSxhQUFhLEVBQUE7RUFFakI7SUFDSSxjQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksV0FDSixFQUFBLEVBQUM7O0FBR0w7RUFDSTs7Ozs7Ozs7Ozs7O0lBWUksYUFDSixFQUFBO0VBQ0E7SUFDSSxjQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksV0FDSixFQUFBLEVBQUM7O0FBR0w7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YseUJBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBUG5CO0lBU1EsV0FBVyxFQUFBOztBQVRuQjtJQVlRLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7O0FBZHpCO01BZ0JZLGNBQWM7TUFDZCwwQkFBMEIsRUFBQTs7QUFqQnRDO0lBcUJRLGVBQWU7SUFDZixXQUFXLEVBQUE7O0FBdEJuQjtJQXlCUSxXQUFXLEVBQUE7O0FBSW5CO0VBN0JBO0lBK0JRLFlBQVksRUFBQTtJQS9CcEI7TUFpQ1ksV0FBVyxFQUFBO0lBakN2QjtNQW9DWSxZQUFZO01BQ1osZUFBZTtNQUNmLGlCQUFpQixFQUFBLEVBQ3BCOztBQUlUO0VBQ0ksU0FBUztFQUNULFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBSnBCO0lBTVEsV0FBVztJQUNYLFlBQVksRUFBQTs7QUFJcEI7RUFDSSxpQkFBaUI7RUFDakIsdUJBQXVCLEVBQUE7O0FBRjNCO0lBSVEsbUJBQW1CLEVBQUE7O0FBSjNCO0lBT1EsbUJBQW1CLEVBQUE7O0FBSTNCO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTs7QUFQbEM7SUFTUSxhQUFhLEVBQUE7O0FBVHJCO01BV1ksVUFBVTtNQUNWLFlBQVk7TUFDWixxQkFBcUI7TUFDckIseUJBQXlCO01BQ3pCLGtCQUFrQixFQUFBOztBQWY5QjtNQWtCWSxPQUFPO01BQ1AsWUFBWTtNQUNaLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsY0FBYztNQUNkLGlCQUFpQixFQUFBOztBQXZCN0I7SUEyQlEsa0JBQWtCLEVBQUE7O0FBSTFCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFIdEI7SUFLUSxnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxtQkFBbUIsRUFBQTs7QUFJM0I7RUFDSSxnQkFBZ0IsRUFBQTs7QUFEcEI7OztJQUtRLFVBQVU7SUFDVixzQkFBc0IsRUFBQTs7QUFOOUI7SUFTUSxTQUFTLEVBQUE7O0FBVGpCOztJQWFRLGdCQUFnQixFQUFBOztBQWJ4Qjs7TUFlWSxZQUFZLEVBQUE7O0FBZnhCO0lBbUJRLGFBQWE7SUFDYixjQUFjLEVBQUE7O0FBcEJ0QjtJQXVCUSxZQUFZO0lBQ1osY0FBYyxFQUFBOztBQXhCdEI7TUEwQlkseUJBQXlCO01BQ3pCLDJCQUEyQjtNQUMzQixtQkFBbUIsRUFBQTs7QUFLL0I7RUFDSSxVQUFVO0VBQ1YsU0FBUztFQUNULHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsdUJBQXVCO0VBV3ZCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBbEJwQjs7SUFRUSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixZQUFZLEVBQUE7O0FBT3BCO0VBQ0ksVUFBVSxFQUFBOztBQXZFZDtFQTJFSSxrQkFBa0IsRUFBQTs7QUEzRXRCO0lBNkVRLGVBQWU7SUFDZixVQUFVLEVBQUE7O0FBSmxCO0lBT1EsZUFBZSxFQUFBOztBQUl2QjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBOztBQUd2QjtFQUdZLDRCQUEyQixFQUFBOztBQUh2QztJQUtnQixxQkFBb0I7SUFDcEIsc0JBQXFCLEVBQUE7O0FBUXJDO0VBR0ksaUJBQWlCLEVBQUE7O0FBQ2pCO0lBSko7TUFLUSxlQUFjLEVBQUE7TUFMdEI7UUFPWSxlQUFlLEVBQUE7TUFQM0I7UUFVWSx3QkFBd0IsRUFBQSxFQUMzQjs7QUFYVDtJQWVZLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFdBQVcsRUFBQTs7QUFsQnZCO01Bb0JnQixrQkFBa0IsRUFBQTs7QUFHMUI7SUF2QlI7TUF5QmdCLGFBQWEsRUFBQSxFQUNoQjs7QUFLYjs7RUFFSSxlQUFlLEVBQUE7O0FBR25CO0VBRVEsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFJbkI7RUFDSSxjQUFjLEVBQUE7O0FBRGxCO0lBR1EsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUdwQjtFQUxBO0lBT1EsYUFBYSxFQUFBLEVBQ2hCOztBQUdMO0VBQ0ksY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0s7O0lBRUcsYUFDSixFQUFBLEVBQUM7O0FBR0w7RUFHWSxxQkFBb0IsRUFBQTs7QUFLaEM7RUFDSSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGlCQUFpQjtFQUNqQixVQUFVLEVBQUE7O0FBSWQ7RUFDSSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFVBQVU7RUFDVixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjs7RUFFSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxnQ0FBMkM7RUFDM0MsZUFBZSxFQUFBOztBQUZuQjtJQUlRLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixrQkFBa0IsRUFBQTs7QUFSMUI7SUFXUSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7O0FBbEJ6QjtJQXFCUSxlQUFlO0lBQ2YsNkJBQTZCLEVBQUE7O0FBSXJDO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUZyQjtJQUlRLGVBQWUsRUFBQTs7QUFKdkI7SUFPUSxVQUFVO0lBQ1YsZUFBZSxFQUFBOztBQUl2QjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFVBQVU7RUFDVixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsTUFBTSxFQUFBOztBQUlkO0VBR1ksZUFBZTtFQUNmLDhCQUNKLEVBQUE7O0FBTFI7RUFPWSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQVJ4QjtFQWFZLHlCQUF5QixFQUFBOztBQWJyQztFQWtCUSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFVBQVUsRUFBQTs7QUFJbEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxxQkFBcUI7RUFDckIsdUJBQXVCLEVBQUE7O0FBRjNCO0lBSVEsb0JBQW9CLEVBQUE7O0FBSTVCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksNEJBQTRCO0VBQzVCLGVBQWUsRUFBQTs7QUFGbkI7SUFJUSxxQkFBcUIsRUFBQTs7QUFKN0I7SUFPUSxlQUFlO0lBQ2Ysc0JBQXNCLEVBQUE7O0FBSTlCO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBSnJCO0lBTVEsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixnQkFBZ0IsRUFBQTs7QUFJeEI7RUFDSSxhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxxQkFBcUI7RUFDckIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFNBQVM7RUFDVCxXQUFXLEVBQUE7O0FBR2Y7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxjQUFjLEVBQUE7O0FBRGxCO0lBR1EsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0IsRUFBQTs7QUFJMUI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUFvQztFQUNwQyxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLHlEQUFtRztFQUNuRyxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWUsRUFBQTs7QUFEbkI7SUFHUSxzQkFBc0I7SUFDdEIsWUFBWSxFQUFBOztBQUlwQjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFlBQVk7RUFDWixTQUFTO0VBQ1QsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUE4QixFQUFBOztBQUdsQztFQUVRLGdCQUFnQixFQUFBOztBQUl4QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR25CO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUNiO0lBWEo7TUFZUSxnQkFBZ0IsRUFBQSxFQUV2Qjs7QUFFRDtFQUNJLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUNiO0lBVko7TUFXUSxnQkFBZ0IsRUFBQSxFQUV2Qjs7QUF6aEJEO0VBNGhCSSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBUG5CO0lBU1EsVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QixFQUFBOztBQUU3QjtJQWZKO01BaUJZLFlBQVksRUFBQSxFQUNmOztBQWxCVDtJQXVCUSxPQUFPO0lBQ1AsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQixFQUFBOztBQUVyQjtJQWpDSjtNQW1DWSxlQUFlLEVBQUEsRUFDbEI7O0FBSVQ7RUFDSSx1QkFBdUI7RUFDdkIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUIsRUFBQTs7QUFHN0I7RUFFUSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBOztBQVA5QjtFQVVRLGdDQUFnQyxFQUFBOztBQVZ4QztFQWFRLGtCQUFrQjtFQUNsQixnQ0FBZ0MsRUFBQTs7QUFJeEM7RUFDSSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLDhCQUE4QixFQUFBOztBQVNsQztFQUNJLDhCQUE4QixFQUFBOztBQUdsQztFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tbWFya2V0aW5nL2dyb3VwL2ZyZWUtZ3JvdXAtcXVlcnkvZnJlZS1ncm91cC1xdWVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI3OXB4KSB7XHJcbiAgICAudWktbXAtMSxcclxuICAgIC51aS1tcC0yLFxyXG4gICAgLnVpLW1wLTMsXHJcbiAgICAudWktbXAtNCxcclxuICAgIC51aS1tcC01LFxyXG4gICAgLnVpLW1wLTYsXHJcbiAgICAudWktbXAtNyxcclxuICAgIC51aS1tcC04LFxyXG4gICAgLnVpLW1wLTksXHJcbiAgICAudWktbXAtMTAsXHJcbiAgICAudWktbXAtMTEsXHJcbiAgICAudWktbXAtMTIge1xyXG4gICAgICAgIHBhZGRpbmc6IC41ZW07XHJcbiAgICB9XHJcbiAgICAudWktbXAtMSB7XHJcbiAgICAgICAgd2lkdGg6IDguMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC0yIHtcclxuICAgICAgICB3aWR0aDogMTYuNjY2NyVcclxuICAgIH1cclxuICAgIC51aS1tcC0zIHtcclxuICAgICAgICB3aWR0aDogMjUlXHJcbiAgICB9XHJcbiAgICAudWktbXAtNCB7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbXAtNSB7XHJcbiAgICAgICAgd2lkdGg6IDQxLjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtNiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTcge1xyXG4gICAgICAgIHdpZHRoOiA1OC4zMzMzJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTgge1xyXG4gICAgICAgIHdpZHRoOiA2Ni42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTkge1xyXG4gICAgICAgIHdpZHRoOiA3NSVcclxuICAgIH1cclxuICAgIC51aS1tcC0xMCB7XHJcbiAgICAgICAgd2lkdGg6IDgzLjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbXAtMTEge1xyXG4gICAgICAgIHdpZHRoOiA5MS42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTEyIHtcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjVweCkge1xyXG4gICAgLnVpLW1sLTEsXHJcbiAgICAudWktbWwtMixcclxuICAgIC51aS1tbC0zLFxyXG4gICAgLnVpLW1sLTQsXHJcbiAgICAudWktbWwtNSxcclxuICAgIC51aS1tbC02LFxyXG4gICAgLnVpLW1sLTcsXHJcbiAgICAudWktbWwtOCxcclxuICAgIC51aS1tbC05LFxyXG4gICAgLnVpLW1sLTEwLFxyXG4gICAgLnVpLW1sLTExLFxyXG4gICAgLnVpLW1sLTEyIHtcclxuICAgICAgICBwYWRkaW5nOiAuNWVtXHJcbiAgICB9XHJcbiAgICAudWktbWwtMSB7XHJcbiAgICAgICAgd2lkdGg6IDguMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tbC0yIHtcclxuICAgICAgICB3aWR0aDogMTYuNjY2NyVcclxuICAgIH1cclxuICAgIC51aS1tbC0zIHtcclxuICAgICAgICB3aWR0aDogMjUlXHJcbiAgICB9XHJcbiAgICAudWktbWwtNCB7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbWwtNSB7XHJcbiAgICAgICAgd2lkdGg6IDQxLjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbWwtNiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJVxyXG4gICAgfVxyXG4gICAgLnVpLW1sLTcge1xyXG4gICAgICAgIHdpZHRoOiA1OC4zMzMzJVxyXG4gICAgfVxyXG4gICAgLnVpLW1sLTgge1xyXG4gICAgICAgIHdpZHRoOiA2Ni42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1sLTkge1xyXG4gICAgICAgIHdpZHRoOiA3NSVcclxuICAgIH1cclxuICAgIC51aS1tbC0xMCB7XHJcbiAgICAgICAgd2lkdGg6IDgzLjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbWwtMTEge1xyXG4gICAgICAgIHdpZHRoOiA5MS42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1sLTEyIHtcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgfVxyXG59XHJcblxyXG4jbGlua1RvR3JvdXBPd25lckluZm8ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuZGwge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIzLCAyMjMsIDIyMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBtYXJnaW46IDAuNWVtIDA7XHJcbiAgICBkdCB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICBkZC5jb3VudCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgICAgICAuY291bnQtY29sb3Ige1xyXG4gICAgICAgICAgICBjb2xvcjogIzE5YjBjODtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGQuZm9udCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNjZweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgIGRsIHtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDU2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRkLmNvdW50IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAzMi41JTtcclxuICAgIH1cclxufVxyXG5cclxuLmJ0bi1hcmVhIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMWVtICFpbXBvcnRhbnQ7XHJcbiAgICAuYnRuLWNsYXNzMSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y0YzIwMTtcclxuICAgIH1cclxuICAgIC5idG4tY2xhc3MyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMTliMGM4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGVhZGVyLXNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBjb2xvcjogIzE5YjBjODtcclxuICAgIG1hcmdpbi10b3A6IC0zMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWltZyB7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBwYWRkaW5nOiA3cHggMCA3cHggMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLnRpdGxlLXJpZ2h0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTYwcHg7IC8vIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG5fZG93biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb3ZlciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLnVpLWctMTIsXHJcbiAgICAudWktZy03LFxyXG4gICAgLnVpLWctNSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgLnVpLWctMTIge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC51aS1nLTcsXHJcbiAgICAudWktZy01IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIC51aS1nLTEyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5vbmVyb3cge1xyXG4gICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICB9XHJcbiAgICAuc2Vjb25kcm93IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgICAgLnRvdGFsIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmdyb3VwdG90YWwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLnVpLWctMyxcclxuICAgIC51aS1nLTIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGM0YyRjI7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMCAxNXB4IDA7XHJcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbn1cclxuXHJcbi51aS1nLTEyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuICAgIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlIHtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudG90YWwgbGFiZWwge1xyXG4gICAgbWF4LXdpZHRoOiAxNDVweDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSB0YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gI2VjaGFydHMge1xyXG4gICAgPmRpdiB7XHJcbiAgICAgICAgPmRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNhbnZhcyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7fVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICAvLyDmu5rliqhcclxuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtaW4td2lkdGg6IDEwMjRweDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE3NDBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWxlZnQge1xyXG4gICAgICAgIC5odWl6b25nIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDdweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLmh1aXpvbmctdWwge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTAuNWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgICAgICAgIC5odWl6b25nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTc2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmEsXHJcbi5pbWcge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFiIHtcclxuICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ncm91cE51bVN0eWxlIHtcclxuICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyLXJpZ2h0IHtcclxuICAgIG1hcmdpbi10b3A6IC0wLjVlbTtcclxufVxyXG5cclxuLmRhaWJhbi1ib3gge1xyXG4gICAgaGVpZ2h0OiAyNTNweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAuZGFpYmFuLWJveCB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMjFweDtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSAudWktd2lkZ2V0IHtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDFlbTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXRhYnZpZXctcGFuZWwudWktd2lkZ2V0LWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUudWktd2lkZ2V0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgOmhvc3QvZGVlcC8gLnVpLWJ1dHRvbixcclxuICAgIGJvZHkgLnVpLWRhdGVwaWNrZXItYnV0dG9ucGFuZT5idXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogMi4yZW1cclxuICAgIH1cclxufVxyXG5cclxuLmN1c19jaG9zZSB7XHJcbiAgICAuY29udCB7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCUhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRhYmxlLXNlbGYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGV4dC1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi8v5pCc57SiXHJcbi5iYWNrZ3JvdW5kLWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4udGVtcGxldGUge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gICAgbWFyZ2luLXRvcDogMTU3cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtbWFuYWdlMiB7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhpc3RvcnksXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE4LCAyMTgsIDIxOCk7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAubGluZSB7XHJcbiAgICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gICAgfVxyXG4gICAgLnRleHQge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC51aS1nLTcge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICBib3gtc2hhZG93OiA1cHggMCA1cHggI2RiZGFkYTtcclxuICAgIH1cclxufVxyXG5cclxuLnNlYXJjaElucHV0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIG1pbi13aWR0aDogODRweDtcclxuICAgIH1cclxuICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgIH1cclxufVxyXG5cclxuLnVpLWctNyB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4udWktZy00IHtcclxuICAgIHdpZHRoOiAyOSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDIuNWVtKTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHRoZWFkIHtcclxuICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMCAhaW1wb3J0YW50XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRib2R5IHtcclxuICAgICAgICB0cjpudGgtY2hpbGQoMm4rMikge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRkIHtcclxuICAgICAgICBAZXh0ZW5kIC5jZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAudWktZHJvcGRvd24tbGFiZWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMi41ZW0gMCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZHJvcGRvd24tcGFuZWwudWktd2lkZ2V0LWNvbnRlbnQudWktY29ybmVyLWFsbC51aS1zaGFkb3cubmctdHJpZ2dlci5uZy10cmlnZ2VyLXBhbmVsU3RhdGUge1xyXG4gICAgei1pbmRleDogMTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5udW0ge1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbn1cclxuXHJcbi5oYW5kbGUge1xyXG4gICAgd2lkdGg6IGNhbGMoMTYuNjY2NiUgLSA0OHB4KTtcclxuICAgIG1pbi13aWR0aDogNzVweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50ZW1wbGF0ZU1hbmFnZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmlsdGVyQ2hvaWNlcyB7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4udGVtcGxhdGVzIHtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLm9wZXJhdGlvbnMgLnVpLWlucHV0dGV4dCB7XHJcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLXRhYnZpZXcgLnVpLXRhYnZpZXctbmF2PmxpPmEge1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktdGFidmlldyAudWktdGFidmlldy1uYXY+bGkudWktc3RhdGUtYWN0aXZlIGE6OmFmdGVyIHtcclxuICAgIGxlZnQ6IDIzJTtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAub25seS15ZWFyLW1vbnRoLXNlbGVjdCAuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZnVuY0J1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VhcmNoQnV0dG9uIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4OSwgMTg5LCAxODkpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9sYXlvdXQvaW1hZ2VzL3NlYXJjaE1vcmUucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC03cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jaG9vc2VGaWVsZCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuZGlhbG9nIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5kaWFsb2cgLnVpLWRhdGF0YWJsZSAudWktd2lkZ2V0IHtcclxuICAgIHBhZGRpbmc6IDBlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctdG9wOiAwZW07XHJcbn1cclxuXHJcbi5iZCB7XHJcbiAgICBwYWRkaW5nOiAuNzVlbSAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIxMCwgMjQxLCAyMzkpO1xyXG59XHJcblxyXG4uZ3VuZGFtLWRpc3BsYXkxIHtcclxuICAgIC5jaGVja0FsbCB7XHJcbiAgICAgICAgcGFkZGluZzogLjI1ZW0gMDtcclxuICAgIH1cclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hCdG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzRjZmU2O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZXNldEJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzRjZmU2O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmhlYWRlci10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAubGluZSB7XHJcbiAgICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliMGM4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgICAubGluZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGV4dCB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgICAtbXMtZmxleDogMTtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzAwNDI1NztcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubXktY3VzdC1jb250YWN0ZiAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5teS1jdXN0LWNvbnRhY3RmIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4uc3Bhbmljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3BhbmRlbGV0ZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3Bhbmluc2VydGVkIHtcclxuICAgIGNvbG9yOiAjMzRjZmU2O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaWNvbmZvbnRtbSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICMzNGNmZTYgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWctMTAge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgICBidXR0b246bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2Y0YzIwMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuZm9ybS1jb250cm9sIHtcclxuICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlLXNjcm9sbGFibGUtYm9keSB7XHJcbiAgICBoZWlnaHQ6IDQ4NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLWRhdGEgdHIge1xyXG4gICAgaGVpZ2h0OiAzNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC50b3AgLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGhlYWQ+dHIge1xyXG4gICAgYmFja2dyb3VuZDogI2YwZjBmMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS1kYXRhIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIDpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyPnRoIHtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIDpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyPnRoIC51aS1jb2x1bW4tdGl0bGUge1xyXG4vLyAgICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuOmhvc3QvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtdGhlYWQ+dHIge1xyXG4gICAgYmFja2dyb3VuZDogI2Q3ZDdkNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudS1kYXRhdGFibGUgLnVpLWRhdGF0YWJsZS1kYXRhPnRyPnRkIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LWRhdGF0YWJsZSAudWktZGF0YXRhYmxlLXRoZWFkPnRyPnRoIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51LXBhZ2luYXRvci51aS13aWRnZXQudWktd2lkZ2V0LWhlYWRlci51aS11bnNlbGVjdGFibGUtdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/free-group-query.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/free-group-query.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: FreeGroupQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeGroupQueryComponent", function() { return FreeGroupQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bean_selectCustGroup_bean__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bean/selectCustGroup.bean */ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/bean/selectCustGroup.bean.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _custom_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../custom-group/bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var _custom_group_my_custom_group_bean_custGroupQuery_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../custom-group/my-custom-group/bean/custGroupQuery.bean */ "./src/app/pages/tzb/custom/custom-group/my-custom-group/bean/custGroupQuery.bean.ts");
/* harmony import */ var _custom_group_my_custom_group_bean_MyGroupBasefInfo_bean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../custom-group/my-custom-group/bean/MyGroupBasefInfo.bean */ "./src/app/pages/tzb/custom/custom-group/my-custom-group/bean/MyGroupBasefInfo.bean.ts");
/* harmony import */ var _custom_group_my_custom_group_bean_MyGroupTotalInfo_bean__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../custom-group/my-custom-group/bean/MyGroupTotalInfo.bean */ "./src/app/pages/tzb/custom/custom-group/my-custom-group/bean/MyGroupTotalInfo.bean.ts");
/* harmony import */ var _common_http_common_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
/* harmony import */ var _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _uisftech_common_pipe_formatMoney_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../@uisftech/common/pipe/formatMoney.pipe */ "./src/app/@uisftech/common/pipe/formatMoney.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var FreeGroupQueryComponent = /** @class */ (function () {
    function FreeGroupQueryComponent(router, httpService, commfunc, CommonHttpService, confirmationService) {
        this.router = router;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.CommonHttpService = CommonHttpService;
        this.confirmationService = confirmationService;
        this.testList = ["群基本信息", "群产品信息"];
        this.chooseOrgInvalue = 'eliminateBranch';
        this.searchContent = ''; //高级搜索条件组合方式
        this.ch = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_12__["CALENDAR_CN"]; //创建日期的语言
        this.getHeaderList = [];
        this.selectedHeaderList = ['群编号'];
        this.headerList = [];
        this.isAll = false;
        this.isMainHistory = false; //历史记录
        this.notMainHistory = false;
        this.is_html = false; //判断搜索初始化
        this.getShowTemp = [];
        this.getSecondCustList = [];
        this.show = 1;
        this.totalAverage = '总计';
        //公共
        this.tableMesg = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_12__["tableMessage"];
        // 标题
        this.title1 = '我的客户群';
        this.title2 = '基本信息';
        this.title3 = '群业绩汇总';
        this.title4 = '群存款分布图';
        this.title5 = '主管群列表';
        this.title6 = '群贷款分布图';
        this.alListFlag = true;
        this.mesg = [];
        // 控件
        this.msgs = [];
        this.orgId = '';
        this.userId = '';
        // bean
        this.groupOwnerInfoBean = new _custom_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_6__["GroupOwnerInfoBean"]();
        this.custGroupQueryBean = new _custom_group_my_custom_group_bean_custGroupQuery_bean__WEBPACK_IMPORTED_MODULE_7__["CustGroupQueryBean"]();
        this.myGroupBasefInfoBean = new _custom_group_my_custom_group_bean_MyGroupBasefInfo_bean__WEBPACK_IMPORTED_MODULE_8__["MyGroupBasefInfoBean"](); //我的客户群基本信息查询
        this.myGroupTotalInfoBean = new _custom_group_my_custom_group_bean_MyGroupTotalInfo_bean__WEBPACK_IMPORTED_MODULE_9__["MyGroupTotalInfoBean"](); //我的客户群总体信息查询
        this.selectCustGroupBean = new _bean_selectCustGroup_bean__WEBPACK_IMPORTED_MODULE_3__["SelectCustGroupBean"](); //客户群查询Bean
        // 码值
        // 中间量
        this.groupOwnerFlag = true; //主管辅管切换
        this.hasChange = 1; //是否已切换过一次
        this.isMain = true; //是否主管群
        this.queryTypeDisabled1 = true; //历史\当前
        this.queryTypeDisabled2 = true; //历史\当前
        this.groupList1 = []; //主管群列表信息
        this.groupList2 = []; //辅管群列表信息
        this.groupList1_1 = []; //合计统计
        this.groupList2_1 = []; //合计统计
        this.first1 = 0;
        this.pageNum1 = 1;
        this.pageSize1 = 10;
        this.first2 = 0;
        this.pageNum2 = 1;
        this.pageSize2 = 10;
        this.isN = true;
        this.isSecond = false;
        this.first = 0;
        this.conditionList = []; //查询数组
        this.selectedValues = [];
        this.chooseDisplay = false; //自定义表头模态框
        this.selectedAttr = [];
        this.attrList = [];
        this.isFirst = true;
        this.templeteDisplay = false;
        this.expCondName = '';
        this.templeteList0 = []; //模板列表
        this.templeteManagerDisplay = false; //模板dialog
        this.templeteListDialog = []; //mubanlist
        this.searchManage2 = false; //模板管理模态框
        this.moneyList = [];
        this.formatMoneyValuePie = new _uisftech_common_pipe_formatMoney_pipe__WEBPACK_IMPORTED_MODULE_14__["FormatMoneyValuePie"](); //管道
        this.CusGroupAttrOpt1 = [{
                label: '请选择', value: ''
            }]; //码值
        this.CusGroupAttrOpt2 = [{
                label: '请选择', value: ''
            }];
        this.CusGroupAttrOpt3 = [{
                label: '请选择', value: ''
            }];
        // CusGroupAttrOpt4: any = [{
        //   label: '请选择', value: ''
        // }];
        this.isCountType = [
            { label: '请选择', value: '' },
            { label: '小于等于', value: '<=' },
            { label: '大于等于', value: '>=' },
        ]; //取值方式1
        this.notCountType = [
            { label: '请选择', value: '' },
            { label: '等于', value: '=' },
            { label: '包含', value: '%%' },
        ]; //取值方式2
        this.CountTypeEqual = [
            { label: '请选择', value: '' },
            { label: '等于', value: '=' },
        ];
        this.InTypeEqual = [
            { label: '请选择', value: '' },
            { label: '等于', value: 'in' },
        ]; //取值方式3
        this.CountTypeLike = [
            { label: '请选择', value: '' },
            { label: '包含', value: '%%' },
        ]; //取值方式4
        this.taskTypeParentId = ''; //任务类型id
        //20180609
        this.staff_display01 = false; // 选人木台眶
        this.staff_display02 = false; // 选人木台眶
        this.staff_display03 = false; // 选人木台眶
        this.isThird = false;
        //
        this.isInit = true;
        this.titleList = []; //下载-入参
        this.formatTempDialog = false;
        this.downList = [];
        this.downloadPerson = false;
        this.new_postId = [];
        this.sumFlag = false; //判断是否汇总的标志
        this.queryTypeFlag = '0';
        this.option = [];
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        //码值表
        this.groupType = this.code['GroupTypeSave'];
        this.developmentLevel = this.code['developmentLevel'];
        this.productList = this.code['productList'];
        this.littleEvent = this.code['BigEvent'];
        this.GroupStatus = this.code['GroupStatus'];
        //下载判断
        this.new_postId = this.code['downPostId'];
        //10.客户群属性筛选
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.orgId) {
            this.orgId = this.user.orgId;
        }
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
        if (this.user.extParam) {
            this.extParam = this.user.extParam;
        }
    }
    //关闭模态框并存储字段
    FreeGroupQueryComponent.prototype.save = function () {
        this.chooseDisplay = false;
        this.addUserListShow();
    };
    ;
    //选择-字段
    FreeGroupQueryComponent.prototype.checked = function () {
        var _this = this;
        console.log(this.selectedHeaderList);
        var length = 0;
        this.getSecondCustList.forEach(function (element, i) {
            length = length + _this.getSecondCustList[i].length;
        });
        if (this.selectedHeaderList.length == length) {
            this.isAll = true;
        }
        else {
            this.isAll = false;
        }
    };
    //码值
    FreeGroupQueryComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    FreeGroupQueryComponent.prototype.ngOnInit = function () {
        this.chooseParam2(); //获取表头可选字段
        this.doAdd('custGroupAttr', 1, 1); //初始化查询条件
        this.doAdd('custGroupAttr', 1); //初始化查询条件
        this.doAdd('custGroupAttr', 1); //初始化查询条件
        this.preSet();
        var mesg = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.commonHeader = mesg;
        this.chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        // console.log(mesg.extParam.managePermission)
        if (mesg.extParam.managePermission && mesg.extParam.managePermission == 'Y') {
            this.isN = false;
            this.selectCustGroupBean['searchScope'] = '2';
            this.selectCustGroupBean['ownerId'] = '';
        }
        else {
        }
        // this.selectMyGroupAchiInfo(1);
        // this.selectMyGroupAchiInfo(0);
        // this.selectMyGroupBasefInfo();//我的客户群基本信息查询
        // this.selectMyGroupTotalInfo();//我的客户群总体信息查询
        // this.pendingScheduleGroupQry();//代办及提醒
        // this.selectCustGroup(3);//默认主管群
        // this.selectCustGroup(4);//默认主管群
        // this.tplSearch(0);//列表查询
        //列表查询
        // this.chooseParam();
        // this.addUserListShow();
        this.attrListSearch(); //获取存储字段
        this.queryTargetCustomerExploreList(0); //模板列表
        // this.queryTellerById();
        // this.selectCustBriefInfo();
    };
    FreeGroupQueryComponent.prototype.preSet = function () {
        // 初始化
        // 取session
        var session = window.sessionStorage;
        var data = session.getItem('commonHeader');
        if (!data) {
            this.router.navigate(["/login"]);
            return;
        }
        var mesg = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (!mesg) {
        }
        var ch = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        this.groupOwnerInfoBean.ownerId = mesg['userId']; //群主，我的客户群查询
        this.myGroupBasefInfoBean.ownerId = mesg['userId']; //我的客户群基本信息查询，群主
        this.selectCustGroupBean.ownerId = mesg['userId']; //我的客户群总体信息查询，群主
        this.mesg = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.groupOwnerInfoBean.groupType = '0'; //我的客户群信息查询,群类型
    };
    FreeGroupQueryComponent.prototype.selectMyGroupBasefInfo = function () {
        var _this = this;
        // 我的客户群信息查询
        this.httpService.selectMyGroupBasefInfo(this.myGroupBasefInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.myGroupBasefInfoBean = data;
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '调用服务失败！';
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // selectMyGroupTotalInfo() {
    //   // 我的客户群信息查询
    //   this.httpService.selectMyGroupTotalInfo(this.myGroupTotalInfoBean).subscribe(data => {
    //     if (data.returnCode.code == 'success') {
    //       this.myGroupTotalInfoBean = data;
    //     }
    //     else {
    //       this.msgs = [];
    //       data.returnCode.code ? data.returnCode.code : '调用服务失败！';
    //       this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
    //     }
    //   }, err => {
    //     this.msgs = [];
    //     this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
    //   })
    // }
    FreeGroupQueryComponent.prototype.selectMyGroupAchiInfo = function (groupType) {
        var _this = this;
        // 我的客户群信息查询
        var params = {
            ownerId: this.userId,
            groupType: groupType
        };
        if (groupType == 1) {
            this.httpService.selectMyGroupAchiInfo(params).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.groupOwnerInfoBean = data;
                    var alLegendData_1 = [];
                    var alSeriesData = [];
                    var alSeriesData2_1 = [];
                    if (data.achiInfo) {
                        data.achiInfo.forEach(function (item) {
                            alLegendData_1.push(item.groupName);
                            // alSeriesData.push({value:item.mdeptAvgBal,name:item.groupName});
                            alSeriesData2_1.push({ value: item.mloanAvgBal, name: item.groupName });
                        });
                    }
                    _this.option_lnList = {
                        title: {
                            text: "贷款日均占比分布（单位：万元）",
                            subtext: "",
                            x: "center"
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a}<br/>{b}:{c} ({d}%)"
                        },
                        legend: {
                            orient: "vertical",
                            left: 'left',
                            data: alLegendData_1,
                        },
                        series: [
                            {
                                name: "贷款占比",
                                type: "pie",
                                radius: "70%",
                                center: ["50%", "60%"],
                                data: alSeriesData2_1,
                                itemStyle: {
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0,0,0,0.5)'
                                    }
                                }
                            }
                        ]
                    };
                }
                else {
                    _this.msgs = [];
                    data.returnCode.code ? data.returnCode.code : '调用服务失败！';
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
        else {
            this.httpService.selectMyGroupAchiInfo(params).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.groupOwnerInfoBean = data;
                    var alLegendData_2 = [];
                    var alSeriesData_1 = [];
                    var alSeriesData2 = [];
                    if (data.achiInfo) {
                        data.achiInfo.forEach(function (item) {
                            alLegendData_2.push(item.groupName);
                            alSeriesData_1.push({ value: item.mdeptAvgBal, name: item.groupName });
                            // alSeriesData2.push({value:item.mloanAvgBal,name:item.groupName});
                        });
                    }
                    _this.option_asList = {
                        labels: alLegendData_2,
                        title: {
                            text: "存款日均占比分布（单位：万元）",
                            subtext: "",
                            x: "center"
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a}<br/>{b}:{c} ({d}%)"
                        },
                        legend: {
                            orient: "vertical",
                            left: 'left',
                            data: alLegendData_2,
                        },
                        series: [
                            {
                                name: "存款占比",
                                type: "pie",
                                radius: "70%",
                                center: ["50%", "60%"],
                                data: alSeriesData_1,
                                itemStyle: {
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0,0,0,0.5)'
                                    }
                                }
                            }
                        ]
                    };
                }
                else {
                    _this.msgs = [];
                    data.returnCode.code ? data.returnCode.code : '调用服务失败！';
                    _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                }
            }, function (err) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
            });
        }
    };
    FreeGroupQueryComponent.prototype.tocreategroup = function () {
        this.router.navigate(['/pages/tzb/custom/custom-group/create-custom-group']);
    };
    FreeGroupQueryComponent.prototype.toQueryGroup = function () {
        // 去查找客户群页面
        this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-query2']);
    };
    // alListChange(param: any) {
    //   if (param == 1) {
    //     this.alListFlag = true;
    //     // this.alList = this.option_asList;              
    //   }
    //   if (param == 2) {
    //     this.alListFlag = false;
    //     // this.alList = this.option_lnList;              
    //   }
    // }
    FreeGroupQueryComponent.prototype.click_alList = function (event) {
    };
    // 其他
    FreeGroupQueryComponent.prototype.linkToGroupOwnerInfo = function (index) {
        // 链接到主管客户群查询
        this.groupOwnerFlag = true;
        this.isSecond = index == 2 ? true : false;
        document.getElementById('linkToGroupOwnerInfo').scrollIntoView();
    };
    // linkToSubGroupQuery(stu) {
    //   this.isSecond = stu;
    //   // 链接到辅管客户群查询
    //   this.groupOwnerFlag = false;
    //   document.getElementById('linkToGroupOwnerInfo').scrollIntoView();
    //   this.groupOwnerChange(2);
    //   // this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-query',{searchScope:'4'}]);    
    // }
    //CRM客户群查询
    FreeGroupQueryComponent.prototype.custGroupQuery = function () {
        var _this = this;
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        // this.commfunc.createBlank(target);
        this.custGroupQueryBean.userId = this.userId;
        this.custGroupQueryBean.sysCode = '122';
        this.custGroupQueryBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
        this.custGroupQueryBean.serverName = 'ywsn';
        this.custGroupQueryBean.validateType = '0';
        this.custGroupQueryBean.extraInfo = 'ywsn';
        this.custGroupQueryBean.encryptType = 'HS256';
        this.httpService.tokenApply(this.custGroupQueryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var tokens = data.tokenCode;
                var url = _uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_13__["TZB_HTTP_SX"] + 'ifs/visiturl.do?token_id=' + tokens + '&tranFlag=batGroup&user_id=' + _this.userId + '&consumer_id=CRM&domain_name=ywsn&url=http://10.1.39.140:8011/searchPaymentTool&bankCode=BR00A&bankCode=BR00A';
                var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                var closeOnLoseFocus = 'closeOnLoseFocus';
                _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
            }
        });
    };
    FreeGroupQueryComponent.prototype.groupOwnerChange = function (i) {
        // 主管群辅管群切换
        if (i == 3) {
            this.groupOwnerFlag = true;
            this.tplSearch(1);
        }
        if (i == 4) {
            this.groupOwnerFlag = false;
            if (this.hasChange == 1) {
                this.tplSearch(1);
                this.hasChange == 0;
            }
        }
    };
    FreeGroupQueryComponent.prototype.toGroupView = function (col, main) {
        this.selectCustGroupInfo(col);
        // 转到客户群视图
        // this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view', { groupId: col.groupId, groupName: col.groupName,}]);
    };
    // 查询
    FreeGroupQueryComponent.prototype.selectCustGroupInfo = function (col) {
        var _this = this;
        var params = {
            groupId: col.group_id
        };
        // 客户群信息查询
        this.httpService.selectCustGroupInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.groupStatus != '1') {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '该群非正常状态，不可查看' }];
                }
                else {
                    // let a = 'groupId=' + this.commfunc.compileStr(col.group_id) + ';' + 'groupName=' + col.group_name;
                    // let a_encode = encodeURI(a);
                    // window.open('/#/pages/tzb/custom/custom-group/custom-group-view;' + a_encode);
                    _this.router.navigate(['/pages/tzb/custom/custom-marketing/group/free-group-view', { groupId: col.group_id, groupName: col.group_name }]);
                }
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '调用服务失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    FreeGroupQueryComponent.prototype.adminSelect = function () {
        // 管理人员查询赋值
        this.selectCustGroupBean.groupList.forEach(function (item) {
            item.contactListArr = [];
            item.contactList.forEach(function (item1) {
                var temp = [];
                temp = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](item1.roleName);
                item.contactListArr.push(temp);
            });
        });
    };
    //代办及提醒
    FreeGroupQueryComponent.prototype.pendingScheduleGroupQry = function () {
        var _this = this;
        var params = {
            statusId: null
        };
        var successFnc = function (data) {
            _this.items = [];
            // 待办假数据
            if (data.scheduleList) {
                data.scheduleList.some(function (item) {
                    if (_this.items.length < 3) {
                        _this.items.push(item);
                    }
                });
            }
        };
        this.commfunc.interfaceComFnc(this.httpService.pendingScheduleGroupQry(params), successFnc, this.msgs);
    };
    //查看全部按钮
    FreeGroupQueryComponent.prototype.checkAll = function () {
        this.router.navigate(["/pages/tzb/custom/reminder-do/backlog-detail/backlog-check-detail/whole"]);
    };
    FreeGroupQueryComponent.prototype.doDeal = function (item) {
        this.commfunc.doDeal(item);
    };
    //按钮权限
    FreeGroupQueryComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    //分页
    FreeGroupQueryComponent.prototype.paginate1 = function (event) {
        //每页显示的条数
        this.pageSize1 = event.rows;
        //当前页
        var currentPage = event.page + 1 + '';
        this.pageNum1 = currentPage;
        this.first1 = (this.pageNum1 - 1) * this.pageSize1;
        //调用查询的方法
        this.tplSearch(3);
    };
    //分页
    FreeGroupQueryComponent.prototype.paginate2 = function (event) {
        // console.log(event)
        //每页显示的条数
        this.pageSize2 = event.rows;
        //当前页
        var currentPage = event.page + 1 + '';
        this.pageNum2 = currentPage;
        this.first2 = (this.pageNum2 - 1) * this.pageSize2;
        //调用查询的方法
        this.tplSearch(3);
    };
    FreeGroupQueryComponent.prototype.tabViewChange = function (event) {
        // console.log(event)
        // if (event.index == 1) {
        //   this.isMain = false;
        //   //调用查询的方法
        //   this.tplSearch(1);
        // } else {
        //   this.isMain = true;
        //   //调用查询的方法
        //   this.tplSearch(1);
        // }
        if (event == 2) { //辅管群
            this.isMain = false;
            this.tplSearch(1);
        }
        else { //主管群
            this.isMain = true;
            this.tplSearch(1);
        }
    };
    // 切换标签
    FreeGroupQueryComponent.prototype.allot = function (num) {
        if (num == '1' && this.permissionCheck('SID00002_P027_P001')) {
            this.show = num;
            this.tabViewChange(num);
        }
        else if (num == '1' && !this.permissionCheck('SID00002_P027_P001')) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '无主管群操作权限！' }];
        }
        if (num == '2' && this.isN == true) {
            this.show = num;
            this.tabViewChange(num);
        }
        else if (num == '2' && this.isN == false) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '无辅管群操作权限！' }];
        }
        this.queryTypeFlag = '1';
    };
    //高级筛选条件内容转换
    FreeGroupQueryComponent.prototype.searchInput = function () {
        // if (this.searchContent && this.searchContent.length != 0) {
        //   if (this.searchContent.indexOf('（') >= 0 || this.searchContent.indexOf('）') >= 0) {
        //     this.msgs = [];
        //     this.msgs = [{ severity: 'error', summary: '提示', detail: '请输入英文格式的括号' }];
        //     return false;
        //   }
        //   let arr = this.searchContent.split('');
        //   arr.forEach((element, i) => {
        //     if (element == '或') {
        //       arr[i] = 'or';
        //     }
        //     if (element == '和') {
        //       arr[i] = 'and';
        //     }
        //   });
        //   // searchContent = arr.join('');
        // }
    };
    //高级筛选条件格式模板
    FreeGroupQueryComponent.prototype.formatTemp = function () {
        this.formatTempDialog = true;
    };
    //模板码值
    FreeGroupQueryComponent.prototype.templeteChange = function (event, index, i, ind) {
        var _this = this;
        // console.log(event);
        var arr = 'CusGroupAttrOpt' + index; //下一个下拉菜单的信息
        //清空已选择的值
        if (index == 2) {
            this.conditionList[i][ind]['fieldAttr'] = '';
            this.conditionList[i][ind]['field'] = '';
            this.conditionList[i][ind]['operator'] = '';
            this.conditionList[i][ind]['value'] = '';
            this.conditionList[i][ind]['label'] = '';
        }
        else if (index == 3) {
            this.conditionList[i][ind]['operator'] = '';
            this.conditionList[i][ind]['value'] = '';
            this.conditionList[i][ind]['label'] = '';
        }
        // console.log(this.conditionList);
        var taskTypeParentId;
        if (index == 4) {
            taskTypeParentId = index == '1' ? '' : event.value[0];
        }
        else {
            taskTypeParentId = index == '1' ? '' : event.value;
        }
        // if (index == 1) {
        //   this.CusGroupAttrOpt2 = [];
        //   this.CusGroupAttrOpt3 = [];
        // } else if (index == 2) {
        //   this.CusGroupAttrOpt3 = [];
        // }
        var params = {
            taskTypeKey: 'groupType',
            taskTypeParentId: taskTypeParentId
        };
        // console.log('0000000000')
        // console.log(this.conditionList);
        //初始化 给群状态默认
        // this.conditionList[0][0].fieldModule = "001";
        // this.templeteChange2();
        this.httpService.taskTypeQry(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // console.log(data)
                // console.log(data.taskTypeList);
                if (data.taskTypeList && data.taskTypeList.length != 0) {
                    if (index == 3) {
                        //三级
                        _this.conditionList[i][ind][arr] = [{
                                label: '请选择', value: ''
                            }];
                        data.taskTypeList.forEach(function (item) {
                            _this.conditionList[i][ind][arr].push({
                                label: item.taskTypeName,
                                value: [item.createrName, item.taskTypeLevel],
                            });
                        });
                        if (data.taskTypeList.length == 1) { //(三级唯一时默认选择)
                            _this.conditionList[i][ind]['field'] = [data.taskTypeList[0].createrName, data.taskTypeList[0].taskTypeLevel];
                            _this.templeteChange({ value: [data.taskTypeList[0].createrName, data.taskTypeList[0].taskTypeLevel] }, 4, i, ind);
                        }
                    }
                    else {
                        //二级 一级
                        _this.conditionList[i][ind][arr] = [{
                                label: '请选择', value: ''
                            }];
                        data.taskTypeList.forEach(function (item) {
                            _this.conditionList[i][ind][arr].push({
                                label: item.taskTypeName,
                                value: item.taskTypeId,
                            });
                        });
                    }
                }
                else {
                    //四级
                    switch (event.value[1]) {
                        case '0':
                            _this.conditionList[i][ind]['valueType'] = _this.isCountType;
                            _this.conditionList[i][ind]['special'] = 'count';
                            break;
                        case '1':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeLike;
                            _this.conditionList[i][ind]['special'] = 'count';
                            _this.conditionList[i][ind]['operator'] = '%%';
                            break;
                        case '00':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'count';
                            _this.conditionList[i][ind]['operator'] = '=';
                            break;
                        case '01':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'code';
                            _this.conditionList[i][ind]['specialType'] = _this.groupType; //群类型
                            _this.conditionList[i][ind]['operator'] = '=';
                            break;
                        case '02':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'code';
                            _this.conditionList[i][ind]['specialType'] = _this.developmentLevel; //开发程度
                            _this.conditionList[i][ind]['operator'] = '=';
                            break;
                        case '03':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'code';
                            _this.conditionList[i][ind]['specialType'] = _this.productList; //主推产品
                            _this.conditionList[i][ind]['operator'] = '=';
                            break;
                        case '2':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'input';
                            _this.conditionList[i][ind]['inputType'] = 'bank-teller';
                            _this.conditionList[i][ind]['operator'] = '=';
                            break;
                        case '3':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeLike;
                            _this.conditionList[i][ind]['special'] = 'input';
                            _this.conditionList[i][ind]['inputType'] = 'bank-teller';
                            _this.conditionList[i][ind]['operator'] = '%%';
                            break;
                        case '4':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeLike;
                            _this.conditionList[i][ind]['special'] = 'input';
                            _this.conditionList[i][ind]['inputType'] = 'bank-cust';
                            _this.conditionList[i][ind]['operator'] = '%%';
                            break;
                        case '5':
                            _this.conditionList[i][ind]['valueType'] = _this.InTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'input';
                            _this.conditionList[i][ind]['inputType'] = 'bank-org';
                            _this.conditionList[i][ind]['operator'] = 'in';
                            break;
                        case '04':
                            _this.conditionList[i][ind]['valueType'] = _this.CountTypeEqual;
                            _this.conditionList[i][ind]['special'] = 'code';
                            _this.conditionList[i][ind]['specialType'] = _this.GroupStatus; //群状态
                            _this.conditionList[i][ind]['operator'] = '=';
                            break;
                        case '05':
                            _this.conditionList[i][ind]['valueType'] = _this.isCountType;
                            _this.conditionList[i][ind]['special'] = 'time';
                            break;
                        default:
                            _this.conditionList[i][ind]['valueType'] = [];
                            _this.conditionList[i][ind]['special'] = 'count';
                            break;
                    }
                }
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
    //默认第一条数据为群状态,且为正常
    FreeGroupQueryComponent.prototype.templeteChange2 = function () {
        var _this = this;
        var params = {
            taskTypeKey: 'groupType',
            taskTypeParentId: '001'
        };
        this.httpService.taskTypeQry(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.conditionList[0][0]['CusGroupAttrOpt2'] = [{
                        label: '请选择', value: ''
                    }];
                data.taskTypeList.forEach(function (item) {
                    _this.conditionList[0][0]['CusGroupAttrOpt2'].push({
                        label: item.taskTypeName,
                        value: item.taskTypeId,
                    });
                });
                _this.conditionList[0][0].valueType = _this.CountTypeEqual;
                _this.conditionList[0][0].fieldAttr = '00120';
                _this.conditionList[0][0].operator = "=";
                _this.conditionList[0][0].special = 'code';
                _this.conditionList[0][0].specialType = _this.GroupStatus;
                _this.conditionList[0][0].value = '1';
                _this.conditionList[0][0].fieldModule = '001';
                var params2 = {
                    taskTypeKey: 'groupType',
                    taskTypeParentId: '00120'
                };
                _this.httpService.taskTypeQry(params2).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.conditionList[0][0]['CusGroupAttrOpt3'] = [{
                                label: '请选择', value: ''
                            }];
                        data.taskTypeList.forEach(function (item) {
                            _this.conditionList[0][0]['CusGroupAttrOpt3'].push({
                                label: item.taskTypeName,
                                value: [item.createrName, item.taskTypeId],
                            });
                        });
                        _this.conditionList[0][0].field = ['status_id', '0012001'];
                        //判断是否是初始化
                        if (_this.isFirst) {
                            _this.tplSearch(1);
                            _this.isFirst = false;
                        }
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
    // ``````````````````````````````````````````````````````2222222222222222222222222222222222222222222222222
    //点击 或的加号(客户产品属性列表)
    FreeGroupQueryComponent.prototype.doAdd = function (name, is_html, i) {
        if (is_html == 'html-btn') {
            this.is_html = true;
        }
        // this.is_html = true;
        if (this.conditionList.length == 10) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '查询条件不能超过十个' }];
            return false;
        }
        //客户标签属性
        var conditionListMember = {
            fieldModule: '',
            fieldAttr: '',
            field: '',
            operator: '',
            value: '',
            approachesTo: '',
            fieldValues: '',
            isThird: false,
            CusGroupAttrOpt1: [],
            CusGroupAttrOpt2: [],
            CusGroupAttrOpt3: [],
        };
        //客户群组属性
        if (name == 'custGroupAttr') {
            var temp = this.copyObj(conditionListMember);
            this.conditionList.push([temp]);
        }
        this.templeteChange('', 1, this.conditionList.length - 1, 0);
        //判断不是 或的增加,而是初始化和重置
        if (i && i == 1 && !this.is_html) {
            this.templeteChange2();
        }
    };
    // 对象拷贝
    FreeGroupQueryComponent.prototype.copyObj = function (obj) {
        var temp = {};
        for (var i in obj) {
            temp[i] = obj[i];
        }
        return temp;
    };
    //点击 或的减号
    FreeGroupQueryComponent.prototype.doReduce = function (i, name) {
        //(客户群组列表)
        if (this.conditionList.length > 1) {
            if (name == 'custGroupAttr') {
                this.conditionList.splice(i, 1);
            }
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '必须存在一条查询条件！' }];
        }
    };
    //点击 且中的加号(客户产品属性列表)
    FreeGroupQueryComponent.prototype.doAndAdd = function (i, name) {
        //(客户群组列表)
        if (name == 'custGroupAttr') {
            var conditionListMember = {
                fieldModule: '',
                fieldAttr: '',
                field: '',
                operator: '',
                value: '',
                approachesTo: '',
                fieldValues: '',
                isThird: false,
                CusGroupAttrOpt1: [],
                CusGroupAttrOpt2: [],
                CusGroupAttrOpt3: [],
            };
            var temp = this.copyObj(conditionListMember);
            this.conditionList[i].push(temp);
            this.templeteChange('', 1, i, this.conditionList[i].length - 1);
        }
    };
    //点击 且中的减号(客户产品属性列表)
    FreeGroupQueryComponent.prototype.doAndReduce = function (ind, name) {
        //客户群组属性
        if (name == 'custGroupAttr') {
            if (this.conditionList[ind].length == 1) {
                this.doReduce(ind, 'custGroupAttr');
                return;
            }
            this.conditionList[ind].splice(this.conditionList[ind].length - 1, 1);
        }
    };
    //日历的事件
    FreeGroupQueryComponent.prototype.checkChange = function (event, index) {
        this.queryTypeDisabled1 = true;
        this.queryTypeDisabled2 = true;
        if (index == '1' && this.selcetedValues1) {
            this.isMainHistory = true;
            this.queryTypeDisabled1 = false;
        }
        else {
            this.isMainHistory = false;
            this.queryTypeDisabled1 = true;
        }
        if (index == '2' && this.selcetedValues2) {
            this.notMainHistory = true;
            this.queryTypeDisabled2 = false;
        }
        else {
            this.notMainHistory = false;
            this.queryTypeDisabled2 = true;
        }
    };
    //搜索条件
    FreeGroupQueryComponent.prototype.searchCondition = function (index) {
        var _this = this;
        var list = [];
        if (index == 1 || index == 3) {
            if (this.conditionList) {
                this.conditionList.forEach(function (element, i) {
                    var arr = [];
                    var valueTemp;
                    if (element) {
                        element.forEach(function (element2, j) {
                            //创建日期的转换
                            if (element2.field[0] == 'create_time') {
                                if (typeof (element2.value) != 'string') {
                                    valueTemp = _this.commfunc.transDateN(element2.value);
                                }
                            }
                            else {
                                valueTemp = element2.value;
                            }
                            //群联系人
                            if (element2.field[0] == "group_of_contacts") {
                                valueTemp = "," + element2.value;
                            }
                            //条件为空,默认传空
                            if (element2.field == '') {
                                element2.field = [''];
                            }
                            arr.push({
                                field: element2.field[0],
                                operator: element2.operator,
                                value: valueTemp,
                            });
                        });
                    }
                    // console.log(arr);
                    if (arr.length > 0) {
                        list.push(arr);
                    }
                });
            }
        }
        if (list.length != 0) {
            var arrTemp_1 = [];
            list.forEach(function (element) {
                arrTemp_1.push(element);
            });
            list = arrTemp_1;
        }
        else {
            list = null;
        }
        return list;
    };
    //组合方式(搜索条件)
    FreeGroupQueryComponent.prototype.compoundMode = function (list) {
        var searchInput = '';
        if (this.searchContent == '') {
            if (list.length > 1) {
                list.forEach(function (element, i) {
                    if ((i + 1) != list.length) {
                        searchInput = searchInput + (i) + '且';
                    }
                    else {
                        searchInput = searchInput + (i);
                    }
                });
            }
            else {
                searchInput = '0';
            }
        }
        else {
            var searchContent = this.searchContent.replace(/10/g, '0');
            var arrTemp_2 = searchContent.split('');
            var reg_1 = /^[1-9]$/;
            arrTemp_2.forEach(function (element, i) {
                if (element == '0') {
                    arrTemp_2[i] = '9';
                }
                else {
                    if (reg_1.test(element)) {
                        arrTemp_2[i] = (parseInt(arrTemp_2[i]) - 1).toString();
                    }
                }
            });
            searchInput = arrTemp_2.join('');
        }
        return searchInput;
    };
    //高级筛选条件
    FreeGroupQueryComponent.prototype.check = function () {
        this.tplSearch(3);
    };
    //客户群列表信息 查询
    FreeGroupQueryComponent.prototype.tplSearch = function (index) {
        var _this = this;
        if (index == 1) { // 页面初始化
            //主管群
            this.pageNum1 = 1;
            this.pageSize1 = 10;
            this.first1 = 0;
            //辅管群
            this.pageNum2 = 1;
            this.pageSize2 = 10;
            this.first2 = 0;
        }
        var list = this.searchCondition(index); //搜索条件
        var searchInput = this.compoundMode(list); //组合方式
        //判断是否主管群
        var isAssist = null;
        var pageNum = this.pageNum1;
        var pageSize = this.pageSize1;
        var attr = 'groupList1';
        if (!this.isMain) {
            pageNum = this.pageNum2;
            pageSize = this.pageSize2;
            isAssist = true;
            attr = 'groupList2';
        }
        var dataDt; //查询历史记录
        if (this.isMain) {
            if (this.chooseMonthMain && this.isMainHistory) {
                dataDt = this.chooseMonthMain;
            }
            else {
                dataDt = undefined;
            }
        }
        else {
            if (this.chooseMonthNotMain && this.notMainHistory) {
                dataDt = this.chooseMonthNotMain;
            }
            else {
                dataDt = undefined;
            }
        }
        var sum; //汇总数据
        if (this.total == true) {
            sum = '1';
        }
        var queryTypeFlag;
        if (this.selcetedValues1 || this.selcetedValues2) {
            queryTypeFlag = this.queryTypeFlag;
        }
        var params = {
            pageNum: pageNum,
            pageSize: pageSize,
            conditionList: list,
            isAssist: isAssist,
            dataDt: dataDt,
            groupType: '1',
            advanceInput: searchInput,
            isCount: sum,
            queryTypeFlag: queryTypeFlag
        };
        this.downList = list;
        this.downisAssist = isAssist;
        this.downdataDt = dataDt;
        console.log(this.conditionList);
        this.httpService.queryCustGroupInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this[attr] = data.resultList;
                if (!_this.isMain) {
                    _this.pageNum2 = data.pageNo;
                    _this.pageSize2 = data.pageSize;
                    _this.totalNum2 = data.totalNum;
                }
                else {
                    _this.pageNum1 = data.pageNo;
                    _this.pageSize1 = data.pageSize;
                    _this.totalNum1 = data.totalNum;
                }
                _this[attr].forEach(function (element, i) {
                    if (element.group_type == '') {
                        _this[attr][i].group_type = '';
                    }
                    else {
                        _this.groupType.forEach(function (element_2) {
                            if (element_2.value == element.group_type) {
                                _this[attr][i].group_type = element_2.label;
                            }
                        });
                    }
                    if (element.featured_products == '') {
                        _this[attr][i].featured_products = '';
                    }
                    else {
                        _this.productList.forEach(function (element_2) {
                            if (element_2.value == element.featured_products) {
                                _this[attr][i].featured_products = element_2.label;
                            }
                        });
                    }
                    if (element.dev_degree == '') {
                        _this[attr][i].dev_degree = '';
                    }
                    else {
                        _this.developmentLevel.forEach(function (element_2) {
                            if (element_2.value == element.dev_degree) {
                                _this[attr][i].dev_degree = element_2.label;
                            }
                        });
                    }
                    if (element.status_id == '') {
                        _this[attr][i].status_id = '';
                    }
                    else {
                        _this.GroupStatus.forEach(function (element_2) {
                            if (element_2.value == element.status_id) {
                                _this[attr][i].status_id = element_2.label;
                            }
                        });
                    }
                    if (element.create_time != null && element.create_time != '') { //创建日期
                        element.create_time = element.create_time.split(' ')[0];
                    }
                    if (element.status_id == '') {
                        _this[attr][i].status_id = '';
                    }
                    else {
                        _this.GroupStatus.forEach(function (element_2) {
                            if (element_2.value == element.status_id) {
                                _this[attr][i].status_id = element_2.label;
                            }
                        });
                    }
                });
                //汇总数据(拼接在列表最下一行)
                if (data.resultSumList && data.resultSumList.length != 0) {
                    _this[attr].push(data.resultSumList[0]);
                }
                _this.moneyList.forEach(function (element) {
                    if (_this[attr] && _this[attr].length != '') {
                        _this[attr].forEach(function (element2, i) {
                            for (var k in element2) {
                                if (element == k) {
                                    _this[attr][i][k] = _this.formatMoneyValuePie.transform(element2[k]);
                                }
                            }
                            if (!element2['group_id']) { //合计
                                element2['sumFlag'] = true;
                            }
                            else {
                                element2['sumFlag'] = false;
                            }
                        });
                    }
                });
                debugger;
                console.log(_this[attr]);
            }
            else {
                if (!data.errorMessage) {
                    _this.msgs = [];
                    data.returnCode.message ? data.returnCode.message : '查询失败！';
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '高级筛选条件格式输入错误' }];
                }
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    //汇总数据
    FreeGroupQueryComponent.prototype.totalQuery = function () {
        // if (this.total) {
        this.tplSearch(3);
        // }
    };
    FreeGroupQueryComponent.prototype.download = function () {
        if (this.groupList1.length == 0 && this.groupList2.length == 0) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '当前表格没有数据,无法下载!' }];
            return;
        }
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (s.extParam.specifyNextOpers) {
            delete s.extParam.specifyNextOpers;
            var commonHeader = s;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        }
        var this_id = this.extParam.postId;
        var flag = true;
        for (var _i = 0, _a = this.new_postId; _i < _a.length; _i++) {
            var item = _a[_i];
            if (this_id == item.value) {
                flag = false;
                break;
            }
        }
        if (!flag) {
            this.toDownload();
        }
        else {
            var lcbl = {
                lctybl: this.extParam.postId
            };
            this.waitSelUserList = this.commfunc.query('XZZXLC', lcbl);
            if (!this.waitSelUserList.erro) {
                this.outVal = this.waitSelUserList.waitSelUserList;
                var chooseThis = this.waitSelUserList.display;
                var Header = JSON.parse(this.commfunc.getSessionData('commonHeader'));
                var a2 = Header.extParam.specifyNextOpers;
                if (chooseThis == true && (a2 == undefined || a2 == '' || a2 == null)) {
                    this.downloadPerson = true;
                }
                else {
                    this.toDownload();
                }
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
            }
        }
    };
    FreeGroupQueryComponent.prototype.toDownload = function () {
        var _this = this;
        // console.log(this.headerList);
        this.titleList = [{ taskTypeName: '群编号', createrName: 'group_id' }];
        this.headerList.forEach(function (element) {
            var arr = {
                taskTypeName: element.taskTypeName,
                createrName: element.createrName
            };
            _this.titleList.push(arr);
        });
        var searchInput = this.compoundMode(this.downList); //组合方式
        var params = {
            listShowsIdType: '1',
            listShowsIdModule: '01',
            createOrg: this.orgId,
            createdByUserLogin: this.userId,
            conditionList: this.downList,
            isAssist: this.downisAssist,
            dataDt: this.downdataDt,
            groupType: '1',
            advanceInput: searchInput,
            titleList: this.titleList
        };
        this.httpService.queryCustGroupInfoExportFile(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '下载提示', detail: "提交成功！" });
                _this.router.navigate(['pages/tzb/custom/downloadCenter/downCenter']);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '下载提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '下载提示', detail: "调用服务失败！" });
        });
    };
    FreeGroupQueryComponent.prototype.outDisplayCall = function (event) {
        this.downloadPerson = event;
    };
    FreeGroupQueryComponent.prototype.outValueCall = function (event) {
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.toDownload();
    };
    FreeGroupQueryComponent.prototype.downloadHide = function () {
        this.downloadPerson = false;
    };
    //客户号回显
    FreeGroupQueryComponent.prototype.selectCustBriefInfo = function (custNo, attr, i) {
        var _this = this;
        var param = {
            custNo: custNo
        };
        this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // console.log(data)
                // this.groupList1[i][attr] += data.tellerName;
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
    //查询人员姓名selectGroupMarketPlan
    FreeGroupQueryComponent.prototype.queryTellerById = function (id, attr_value, i, attr) {
        var _this = this;
        var params = {
            tellerId: id
        };
        var successFnc = function (data) {
            _this.groupList1[i][attr] = data.tellerName;
        };
        this.commfunc.interfaceComFnc(this.CommonHttpService.queryTellerById(params), successFnc, this.msgs);
    };
    //获取 展示模块
    FreeGroupQueryComponent.prototype.queryShowTemp = function () {
        var _this = this;
        var params = {
            taskTypeKey: 'groupType',
            taskTypeParentId: ''
        };
        this.httpService.taskTypeQry(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // console.log(data);
                if (data.taskTypeList && data.taskTypeList.length != 0) {
                    data.taskTypeList.forEach(function (element) {
                        var o = {
                            taskTypeName: element.taskTypeName,
                            taskTypeId: element.taskTypeId
                        };
                        _this.getShowTemp.push(o);
                    });
                    _this.getShowTemp.forEach(function (element, i) {
                        _this.querySecondCust(element.taskTypeId, i);
                    });
                }
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
    //获取 二级字段
    FreeGroupQueryComponent.prototype.querySecondCust = function (taskTypeId, i) {
        var _this = this;
        var params = {
            taskTypeKey: 'groupType',
            taskTypeParentId: taskTypeId
        };
        this.httpService.taskTypeQry(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // console.log(data);
                _this.getSecondCustList[i] = data.taskTypeList;
                var length_1 = 0;
                _this.getSecondCustList.forEach(function (element) {
                    if (typeof element == "object") {
                        length_1++;
                    }
                });
                if (length_1 == 2) {
                    _this.echo();
                }
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
    //回显
    FreeGroupQueryComponent.prototype.echo = function () {
        var _this = this;
        // console.log(this.selectedHeaderList);
        var arrTemp = ['群编号']; //用于赋值
        var arr = [];
        this.getSecondCustList.forEach(function (element2) {
            element2.forEach(function (element3) {
                arr.push(element3);
                _this.headerList.forEach(function (element) {
                    if (element3.taskTypeId == element.taskTypeParentId) {
                        if (arrTemp.indexOf(element3.taskTypeName) == -1) {
                            arrTemp.push(element3.taskTypeName);
                        }
                    }
                });
            });
        });
        this.selectedHeaderList = arrTemp;
        if (this.selectedHeaderList.length == arr.length) {
            this.isAll = true;
        }
        else {
            this.isAll = false;
        }
    };
    //选择字段````````````````````````````````````````````````````````````````````````````
    FreeGroupQueryComponent.prototype.chooseParam = function () {
        this.chooseDisplay = true;
        this.getShowTemp = [];
        this.getSecondCustList = [];
        this.selectedHeaderList = ['群编号'];
        this.queryShowTemp();
    };
    //获取三级字段````````````````````````````````````````````````````````````````````````````
    FreeGroupQueryComponent.prototype.chooseParam2 = function () {
        var _this = this;
        var params = {
            taskTypeKey: 'groupType',
            createrName: 'tables'
        };
        //获取表头数据可选字段
        this.httpService.taskTypeQry(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                //console.log(data);
                _this.getHeaderList = data.taskTypeList;
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
    //用户列表登记
    FreeGroupQueryComponent.prototype.addUserListShow = function () {
        var _this = this;
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        var orgID = commonHeader.orgId;
        var userId = commonHeader.userId;
        var arr = [];
        var arr2 = [];
        var arrTemp = [];
        this.getSecondCustList.forEach(function (element) {
            element.forEach(function (element2) {
                arrTemp.push(element2);
            });
        });
        this.selectedHeaderList.forEach(function (element) {
            arrTemp.forEach(function (element_2) {
                if (element_2.taskTypeName == element) {
                    arr2.push(element_2);
                }
            });
        });
        arr2.forEach(function (element) {
            _this.getHeaderList.forEach(function (element_2) {
                if (element_2.taskTypeParentId == element.taskTypeId) {
                    arr.push(element_2);
                }
            });
        });
        if (arr.length > 50) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '所选字段不能多于50个' }];
            return false;
        }
        var params = {
            listShowsIdType: '1',
            listShowsIdModule: '01',
            createOrg: orgID,
            createdByUserLogin: userId,
            exploreConditionObject: JSON.stringify(arr)
        };
        this.httpService.addUserListShow(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // console.log(data);
                _this.attrListSearch();
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
    // 表头字段-全选
    FreeGroupQueryComponent.prototype.checkAll2 = function () {
        if (this.isAll == true) {
            var arr_1 = [];
            this.getSecondCustList.forEach(function (element) {
                element.forEach(function (element2) {
                    arr_1.push(element2.taskTypeName);
                });
            });
            this.selectedHeaderList = arr_1;
        }
        else {
            this.selectedHeaderList = ['群编号'];
        }
    };
    //列表查询`````````````````````````````````````````````````````````````````````````````````````````````
    FreeGroupQueryComponent.prototype.attrListSearch = function () {
        var _this = this;
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        var orgID = commonHeader.orgId;
        var userId = commonHeader.userId;
        var params = {
            listShowsIdType: '1',
            listShowsIdModule: '01',
            createOrg: orgID,
            createdByUserLogin: userId
        };
        this.httpService.selectUserListShow(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // console.log(this.getHeaderList);
                _this.moneyList = [];
                if (data.exploreConditionObject && data.exploreConditionObject != '') {
                    var eco = JSON.parse(data.exploreConditionObject);
                    eco = eco.filter(function (item) {
                        return item.createrName != 'group_id';
                    });
                    eco.forEach(function (element, i) {
                        if (element.updater == '1') {
                            _this.moneyList.push(element.createrName);
                        }
                        if (element.createrName == 'group_name' || element.createrName == 'address_message' || element.createrName == 'group_of_contacts' || element.createrName == 'group_of_evaluation' || element.createrName == 'org_id' || element.createrName == 'create_org_id') {
                            element.width = '250px';
                        }
                        else {
                            element.width = '120px';
                        }
                    });
                    _this.headerList = eco;
                    console.log(_this.headerList);
                    console.log(_this.moneyList);
                    // this.moneyList.forEach(element => {
                    //   if (this.groupList1 && this.groupList1.length != '') {
                    //     this.groupList1.forEach((element2, i) => {
                    //       for (let k in element2) {
                    //         if (element == k) {
                    //           this.groupList1[i][k] = this.formatMoneyValuePie.transform(element2[k]);
                    //         }
                    //       }
                    //     });
                    //   }
                    // });
                }
                else { //后台默认会存群编号(没有必要)
                    _this.headerList = [];
                    _this.getHeaderList.forEach(function (element) {
                        var arr = ["群名称", "群类型", "群地址", "客户名单总数", "有效客户数", "存款有效客户数", "存款余额", "贷款余额", "群主", "群联系人"];
                        arr.forEach(function (item) {
                            if (element.taskTypeName == item) {
                                _this.headerList.push(element);
                            }
                        });
                    });
                    _this.moneyList = ['存款余额', '贷款余额'];
                }
                // console.log(this.headerList)
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
        if (!this.isFirst) { //非初始化
            this.tplSearch(3);
        }
    };
    FreeGroupQueryComponent.prototype.saveTemplete = function () {
        this.templeteDisplay = true;
    };
    FreeGroupQueryComponent.prototype.saveTemplete2 = function () {
        var _this = this;
        if (this.expCondName == '') {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '模板名称不能为空！' }];
            return false;
        }
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        var params = {
            requestType: '4',
            statusId: '3',
            marketFlag: '0',
            requestMap: {
                custInfo: { custType: '3' },
                conditionList: this.conditionList,
                advanceInput: this.searchContent
            },
            expCondName: this.expCondName,
            orgName: chName.orgName,
            userName: chName.userName,
        };
        this.httpService.createExploreCondition(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // this.templeteList0 = data.
                // console.log(data);
                //重新模板名称
                _this.expCondName = '';
                //关闭模态框
                _this.templeteDisplay = false;
                //重查询模板
                _this.queryTargetCustomerExploreList(0);
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
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
    //模板列表查询
    FreeGroupQueryComponent.prototype.queryTargetCustomerExploreList = function (index) {
        var _this = this;
        var params = {
            requestType: '4',
            queryScene: index,
        };
        this.httpService.queryTargetCustomerExploreList(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (index == 0) {
                    _this.templeteList0 = data.screenTemplateList;
                }
                else {
                    _this.templeteListDialog = data.screenTemplateList;
                }
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
    //模板管理模态框
    FreeGroupQueryComponent.prototype.templeteManager = function () {
        // this.templeteManagerDisplay = true;
        // this.queryTargetCustomerExploreList(1);//模板列表
        this.searchManage2 = true;
    };
    //映射模板
    FreeGroupQueryComponent.prototype.mappedTemplete = function (col, isDialog) {
        var _this = this;
        if (isDialog == 2) {
            this.templeteManagerDisplay = false;
        }
        var expCondId = col.screenTemplateId ? col.screenTemplateId : '';
        var params = {
            requestType: '4',
            expCondId: expCondId,
        };
        //模板详情
        this.httpService.queryExploreConditionDetail(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.conditionList = data.requestMap.conditionList;
                _this.conditionList.forEach(function (element, i) {
                    if (element && element.length > 0) {
                        element.forEach(function (element_2, j) {
                            if (element_2.field[0] == "create_time") {
                                _this.conditionList[i][j]['value'] = new Date(_this.conditionList[i][j]['value']);
                            }
                        });
                    }
                });
                _this.searchContent = data.requestMap.advanceInput;
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
    //模板删除
    FreeGroupQueryComponent.prototype.deleteTarget = function (e) {
        var _this = this;
        if (e.createUserId == this.userId) {
            this.confirmationService.confirm({
                message: '是否确认删除?',
                header: '删除',
                icon: 'fa fa-question-circle',
                accept: function () {
                    var param = { expCondId: e.screenTemplateId, requestType: '4' };
                    _this.httpService.deleteTargetCustomerExplore(param).subscribe(function (data) {
                        if (data.returnCode.code === "success") {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'success', summary: '查询列表提示', detail: data.returnCode.message });
                            _this.queryTargetCustomerExploreList(0);
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: '查询列表提示', detail: data.returnCode.message });
                        }
                    }, function (error) {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: '查询列表提示', detail: '调用服务失败！' });
                    });
                }
            });
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '删除失败', detail: '不能删除他人模板' });
        }
    };
    //映射模板
    FreeGroupQueryComponent.prototype.delTemplete = function (col, isDialog) {
        var _this = this;
        if (isDialog == 2) {
            this.templeteManagerDisplay = false;
        }
        var params = {
            requestType: '4',
            expCondId: col.screenTemplateId,
        };
        //模板删除
        this.httpService.deleteTargetCustomerExplore(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.queryTargetCustomerExploreList(1); //模板列表
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
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
    //选人
    FreeGroupQueryComponent.prototype.selectUser = function (inputType, i, ind) {
        console.log('选人' + inputType);
        this.i = i;
        this.ind = ind;
        if (inputType == 'bank-cust') {
            this.staff_display02 = true;
        }
        else if (inputType == 'bank-teller') {
            // if (this.isN) {
            //   this.conditionList[this.i][this.ind]['label'] = this.chName.userName;
            //   this.conditionList[this.i][this.ind]['value'] = this.commonHeader.userId;
            // } else {
            //   this.staff_display03 = true;
            // }
            this.staff_display03 = true;
        }
        else {
            if (this.isN) {
                this.conditionList[this.i][this.ind]['label'] = this.chName.orgName;
                this.conditionList[this.i][this.ind]['value'] = this.commonHeader.orgId;
            }
            else {
                this.staff_display01 = true;
            }
        }
    };
    FreeGroupQueryComponent.prototype.changeRadioValue = function (event, index) {
        console.log(this.queryTypeFlag);
    };
    //模板查询重置
    FreeGroupQueryComponent.prototype.resetTemplete = function () {
        this.is_html = false;
        this.conditionList = [];
        this.searchContent = '';
        this.doAdd('custGroupAttr', 1, 1); //初始化查询条件
        this.doAdd('custGroupAttr', 1); //初始化查询条件
        this.doAdd('custGroupAttr', 1); //初始化查询条件
        // this.templeteChange('', 1, this.conditionList.length - 1, 0)
    };
    //0609
    //选人服务
    FreeGroupQueryComponent.prototype.returnInfoHide = function () {
        // this.staff_display01 = false;
        console.log('模态框关闭');
    };
    FreeGroupQueryComponent.prototype.returnInfo01 = function (data) {
        // console.log(data);
        this.staff_display01 = false;
        if (data.hasOwnProperty('orgName')) {
            this.conditionList[this.i][this.ind]['label'] = data.orgName;
            this.conditionList[this.i][this.ind]['value'] = data.orgId;
        }
        // this.inValue = _.clone(data);
    };
    FreeGroupQueryComponent.prototype.returnInfo02 = function (data) {
        // console.log(data);
        this.staff_display02 = false;
        this.conditionList[this.i][this.ind]['label'] = data[0].custName;
        this.conditionList[this.i][this.ind]['value'] = data[0].custNo;
        // this.inValue = _.clone(data);
    };
    FreeGroupQueryComponent.prototype.returnInfo03 = function (data) {
        // console.log(data);
        this.staff_display03 = false;
        this.conditionList[this.i][this.ind]['label'] = data[0].tellerName;
        this.conditionList[this.i][this.ind]['value'] = data[0].tellerId;
        // this.inValue = _.clone(data);
    };
    //模板管理模态框关闭
    FreeGroupQueryComponent.prototype.searchManage2Hide = function () {
        // console.log('关闭');
        this.queryTargetCustomerExploreList(0); //模板列表
    };
    FreeGroupQueryComponent.prototype.scrollHandler = function (event) {
        this.ddcomponent.forEach(function (element) {
            element.hide();
        });
        this.decomponent.forEach(function (element) {
            //console.log(element);
            element.datepickerClick = false;
            element.overlayVisible = false;
            element.inputfieldViewChild.nativeElement.blur();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('ddcomponent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], FreeGroupQueryComponent.prototype, "ddcomponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('decomponent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], FreeGroupQueryComponent.prototype, "decomponent", void 0);
    FreeGroupQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-free-group-query',
            template: __webpack_require__(/*! ./free-group-query.component.html */ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/free-group-query.component.html"),
            styles: [__webpack_require__(/*! ./free-group-query.component.scss */ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/free-group-query.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"], _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_11__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"],
            _uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_11__["Commfunc"],
            _common_http_common_http_service__WEBPACK_IMPORTED_MODULE_10__["CommonHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], FreeGroupQueryComponent);
    return FreeGroupQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/free-group-query.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/free-group-query.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: FreeGroupQueryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeGroupQueryModule", function() { return FreeGroupQueryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _free_group_query_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./free-group-query.routing */ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/free-group-query.routing.ts");
/* harmony import */ var _free_group_query_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./free-group-query.component */ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/free-group-query.component.ts");
/* harmony import */ var _uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _add_search_manage4_add_search_manage4_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-search-manage4/add-search-manage4.component */ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/add-search-manage4/add-search-manage4.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//客户群组
var FreeGroupQueryModule = /** @class */ (function () {
    function FreeGroupQueryModule() {
    }
    FreeGroupQueryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _sharedBasis_module__WEBPACK_IMPORTED_MODULE_2__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__["FrameworkModule"],
                _free_group_query_routing__WEBPACK_IMPORTED_MODULE_3__["FreeGroupQueryRouting"]
            ],
            declarations: [
                _free_group_query_component__WEBPACK_IMPORTED_MODULE_4__["FreeGroupQueryComponent"],
                _add_search_manage4_add_search_manage4_component__WEBPACK_IMPORTED_MODULE_6__["AddSearchManageComponent4"],
            ],
            exports: [],
            providers: []
        })
    ], FreeGroupQueryModule);
    return FreeGroupQueryModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/free-group-query.routing.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/free-group-query.routing.ts ***!
  \******************************************************************************************************/
/*! exports provided: routes, FreeGroupQueryRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeGroupQueryRouting", function() { return FreeGroupQueryRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _free_group_query_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./free-group-query.component */ "./src/app/pages/tzb/custom/custom-marketing/group/free-group-query/free-group-query.component.ts");


var routes = [
    {
        path: '', component: _free_group_query_component__WEBPACK_IMPORTED_MODULE_1__["FreeGroupQueryComponent"] //创建
    }
];
var FreeGroupQueryRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=free-group-query-free-group-query-module.js.map