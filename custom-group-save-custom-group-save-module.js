(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custom-group-save-custom-group-save-module"],{

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-save/bean/GroupAdminInfo.bean.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-save/bean/GroupAdminInfo.bean.ts ***!
  \*********************************************************************************************/
/*! exports provided: GroupAdminInfoBean, roleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupAdminInfoBean", function() { return GroupAdminInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roleList", function() { return roleList; });
// 客户群管理人员
var GroupAdminInfoBean = /** @class */ (function () {
    function GroupAdminInfoBean() {
        this.groupId = ''; //群号
        this.roleType = ''; //角色类型
        this.statusId = ''; //状态string(1)
        this.roleList = []; //管理人员菜单List(Map)
    }
    return GroupAdminInfoBean;
}());

var roleList = /** @class */ (function () {
    function roleList() {
        this.userId = ''; //角色ID
        this.userName = ''; //角色名称
        this.groupZone = ''; //客群区域
        this.statusId = ''; //状态
    }
    return roleList;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-save/bean/custom-group.bean.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-save/bean/custom-group.bean.ts ***!
  \*******************************************************************************************/
/*! exports provided: CustGroupBean, contactList, introducerList, mentorList, ZoneInfoBean, zoneList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustGroupBean", function() { return CustGroupBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactList", function() { return contactList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introducerList", function() { return introducerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mentorList", function() { return mentorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneInfoBean", function() { return ZoneInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoneList", function() { return zoneList; });
var CustGroupBean = /** @class */ (function () {
    function CustGroupBean() {
        // 客户群
        // 删除申请新增
        this.dataMap = '';
        // groupId: string = '';
        this.applyType = '';
        // 新增
        this.taskCategoryId = ''; //业务种类编号
        // 旧版
        this.subGroupType = ''; //群子类型
        this.region = ''; //四级区划
        this.creator = ''; //群组创建人
        this.ownerName = ''; //分组所有者名称
        this.bgcFlag = ''; //后台中心标志
        this.description = ''; //备注（群描述）
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
        this.totalNum = 0; //总条数
        this.contactList = []; //群联系人列表
        this.mentorList = []; //群指导师傅列表
        this.introducerList = []; //群介绍人列表
    }
    return CustGroupBean;
}());

//群联系人列表List(Map)
var contactList = /** @class */ (function () {
    function contactList() {
        this.adminType = ''; //管理员类型
        this.roleId = ''; //角色ID
        this.roleName = ''; //角色姓名  
        this.groupZone = ''; //客群区域--------------------特别注意2017.12.8 
    }
    return contactList;
}());

//群介绍人列表List(Map)
var introducerList = /** @class */ (function () {
    function introducerList() {
        this.adminType = ''; //管理员类型
        this.roleId = ''; //角色ID
        this.roleName = ''; //角色姓名
    }
    return introducerList;
}());

//群指导师傅列表List(Map)
var mentorList = /** @class */ (function () {
    function mentorList() {
        this.adminType = ''; //管理员类型
        this.roleId = ''; //角色ID
        this.roleName = ''; //角色姓名
    }
    return mentorList;
}());

var ZoneInfoBean = /** @class */ (function () {
    function ZoneInfoBean() {
        // 四级区划信息查询
        this.parentZoneId = ''; //父级区划标识
        this.zoneList = []; //区划列表
    }
    return ZoneInfoBean;
}());

var zoneList = /** @class */ (function () {
    function zoneList() {
        this.zoneId = ''; //区域id
        this.zoneName = ''; //区域名
    }
    return zoneList;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-save/bean/queryParentZoneInfo.bean.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-save/bean/queryParentZoneInfo.bean.ts ***!
  \**************************************************************************************************/
/*! exports provided: ParentZoneInfoBean, zoneList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentZoneInfoBean", function() { return ParentZoneInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoneList", function() { return zoneList; });
var ParentZoneInfoBean = /** @class */ (function () {
    function ParentZoneInfoBean() {
        // 四级区划解析查询
        this.zoneId = ''; //父级区划标识
        this.zoneList = []; //
    }
    return ParentZoneInfoBean;
}());

var zoneList = /** @class */ (function () {
    function zoneList() {
        this.parentZoneId = ''; //区域id
        this.parentZoneName = ''; //区域名
    }
    return zoneList;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-save/custom-group-save.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-save/custom-group-save.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module saveCustom\">\r\n    <header-title [Info]=\"title\"></header-title>\r\n    <div class=\"ui-g-9 ui-g-offset-1 marginTop\">\r\n        <div class=\"ui-g-12 marginTop\">\r\n            <div class=\"ui-g-3\">\r\n                <div class=\"ui-g-4\" style=\"padding:0px;\">\r\n                    <label appValidation>群编号</label>\r\n                </div>\r\n                <div class=\"ui-g-8\" style=\"padding:0px;\">\r\n                    <input pInputText type=\"text\" [(ngModel)]=\"custGroupInfoBean.groupId\" disabled=\"false\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <div class=\"ui-g-4\" style=\"padding:0px;\">\r\n                    <label appValidation>群名称</label>\r\n                </div>\r\n                <div class=\"ui-g-8\" style=\"padding:0px;\">\r\n                    <input pInputText type=\"text\" [(ngModel)]=\"custGroupInfoBean.groupName\" [disabled]=\"editFlag\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <div class=\"ui-g-4\" style=\"padding:0px;\">\r\n                    <label appValidation>群状态</label>\r\n                </div>\r\n                <div class=\"ui-g-6 saveCustomCenter customGroupViewDropdown\">\r\n                    <p-dropdown [options]=\"groupState\" [(ngModel)]=\"groupStateCheck\" disabled=\"false\" class=\"saveCustomCenter\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12 marginTop\">\r\n            <div class=\"ui-g-3\">\r\n                <div class=\"ui-g-4\" style=\"padding:0px;\">\r\n                    <label appValidation>群类型</label>\r\n                </div>\r\n                <div class=\"ui-g-6 saveCustomCenter customGroupViewDropdown\">\r\n                    <p-dropdown (onChange)=\"typeChange($event)\" [options]=\"groupType\" [(ngModel)]=\"groupTypeCheck\" [disabled]=\"editFlag\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-9 regionCss\">\r\n                <div class=\"ui-g-1\" style=\"padding:0px;\">\r\n                    <label>\r\n                        <span *ngIf=\"areaShow\" style=\"color:red;font-size:13px;padding:0px;\">*</span>\r\n                        所属规划\r\n                    </label>\r\n                </div>\r\n                <div class=\"ui-g-2 customGroupViewDropdown\">\r\n                    <p-dropdown #a [options]=\"regionSHeng\" [(ngModel)]=\"regionSHeng1\" (onChange)=\"choose($event,1,3,a)\" [disabled]=\"editFlag\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-2 customGroupViewDropdown\" *ngIf=\"cengJi_2\">\r\n                    <p-dropdown #b [options]=\"regionCity\" [(ngModel)]=\"regionCity1\" (onChange)=\"choose($event,2,2,b)\" [disabled]=\"editFlag\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-2 customGroupViewDropdown\" *ngIf=\"cengJi_3\">\r\n                    <p-dropdown #c [options]=\"regionArea\" [(ngModel)]=\"regionArea1\" (onChange)=\"choose($event,3,1,c)\" [disabled]=\"editFlag\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-2 customGroupViewDropdown\" *ngIf=\"cengJi_4\">\r\n                    <p-dropdown #d [options]=\"regionStreet\" [(ngModel)]=\"regionStreet1\" (onChange)=\"choose($event,4,0,d)\" [disabled]=\"editFlag\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"isHangye\" class=\"ui-g-12\">\r\n            <div class=\"ui-area ui-g\">\r\n                <div class=\"ui-g-1 title-bg\" appValidation>投向行业</div>\r\n                <div class=\"ui-g-10\">\r\n                    <div class=\"ui-g-2\">\r\n                        <p-dropdown [options]=\"firstToinvestTradeOptions\" styleClass=\"productive-drop\" [(ngModel)]=\"firstToinvestTrade\" (onChange)=\"queryTaskByIndtstry(1)\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"ui-g-2\">\r\n                        <p-dropdown [options]=\"secondToinvestTradeOptions\" styleClass=\"productive-drop\" [(ngModel)]=\"secondToinvestTrade\" (onChange)=\"queryTaskByIndtstry(2)\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"ui-g-2\">\r\n                        <p-dropdown [options]=\"thirdToinvestTradeOptions\" styleClass=\"productive-drop\" [(ngModel)]=\"thirdToinvestTrade\" (onChange)=\"queryTaskByIndtstry(3)\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"ui-g-2\">\r\n                        <p-dropdown [options]=\"fourthToinvestTradeOptions\" styleClass=\"productive-drop\" [(ngModel)]=\"fourthToinvestTrade\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 marginTop\">\r\n            <div class=\"ui-g-3\">\r\n                <div class=\"ui-g-4\" style=\"padding:0px;\">\r\n                    <label appValidation>群主</label>\r\n                </div>\r\n                <div class=\"ui-g-8\" style=\"padding:0px;\">\r\n                    <input pInputText type=\"text\" [(ngModel)]=\"custGroupInfoBean.ownerName\" disabled=\"true\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-3 \">\r\n                <div class=\"ui-g-4\" style=\"padding:0px;\">\r\n                    <label for=\"\">群联系人：</label>\r\n                </div>\r\n                <div class=\"ui-g-8 customGroupInputSet\" style=\"padding:0px;\">\r\n                    <input type=\"text\" [(ngModel)]=\"contactRoleName\" placeholder=\"请点击后方的编辑图标\" pInputText readonly=\"true\">\r\n                    <span class=\"tabelUpdateIco\" *ngIf=\"!editFlag\" (click)=\"editGroupAdminInfo(1)\">编辑</span>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"ui-g-3\">\r\n                <div class=\"ui-g-4\" style=\"padding:0px;\">\r\n                    <label for=\"\">群介绍人：</label>\r\n                </div>\r\n                <div class=\"ui-g-8 inputSet\" style=\"padding:0px;\">\r\n                    <input type=\"text\" [(ngModel)]=\"introducerRoleName\" pInputText disabled=\"true\">\r\n                    <span class=\"tabelUpdateIco\" *ngIf=\"!editFlag\" (click)=\"editGroupAdminInfo(2)\">编辑</span>\r\n                </div>\r\n            </div> -->\r\n            <div class=\"ui-g-3\">\r\n                <div class=\"ui-g-4\" style=\"padding:0px;\">\r\n                    <label>主推产品:</label>\r\n                </div>\r\n                <div class=\"ui-g-8 customGroupInputSet\" style=\"padding:0px;\">\r\n                    <input type=\"text\" [(ngModel)]=\"main_product\" placeholder=\"请点击后方的编辑图标\" pInputText readonly=\"true\">\r\n                    <span (click)=\"mainProductEdit()\" *ngIf=\"!editFlag\" class=\"tabelUpdateIco\">编辑</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12 marginTop\">\r\n            <div class=\"ui-g-1\" style=\"padding:0px;\">\r\n                <span *ngIf=\"areaShow\" style=\"color:red;font-size:13px;padding:0px;\">*</span>\r\n                <label for=\"\">详细地址：</label>\r\n            </div>\r\n            <div class=\"ui-g-8 customGroupInputSet\" style=\"padding:0px;\">\r\n                <input type=\"text\" [disabled]=\"editFlag\" pInputText [(ngModel)]=\"custGroupInfoBean.address\">\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"ui-g-12 marginTop\"> -->\r\n        <!-- <div class=\"ui-g-3\">\r\n                <label>群评价人:</label>\r\n                <input pInputText type=\"text\" [(ngModel)]=\"appraisalListCheck\" disabled=\"true\">\r\n                <span class=\"tabelUpdateIco\" *ngIf=\"!editFlag\" (click)=\"editGroupAdminInfo(4)\">编辑</span>\r\n            </div> -->\r\n        <!-- <div class=\"ui-g-3\">\r\n                <div class=\"ui-g-4\" style=\"padding:0px;\">\r\n                    <label>所属机构</label>\r\n                </div>\r\n                <div class=\"ui-g-8 customGroupViewDropdown\" style=\"padding:0px;\">\r\n                    <p-dropdown [options]=\"orgNameArr\" [(ngModel)]=\"custGroupInfoBean.orgId\" [disabled]=\"true\" disabled=\"true\"></p-dropdown>\r\n                </div>\r\n            </div> -->\r\n        <!-- </div> -->\r\n    </div>\r\n    <!-- <div class=\"ui-g-2 saveCustomCenter marginTop\">\r\n        <div class=\"ui-g-12 \">\r\n            <button pButton label=\"群客户导入\" class=\"asideBtn\" (click)=\"toGroupClientImport()\"></button>\r\n        </div>\r\n        <div class=\"ui-g-12 \">\r\n            <a [routerLink]=\"['./../custom-group-examine']\" routerLinkActive=\"active\" [queryParams]={id:custGroupInfoBean.groupId}>         -->\r\n    <!-- <button pButton label=\"提交申请\" (click)=\"submit()\" class=\"asideBtn\"></button> -->\r\n    <!-- </a> -->\r\n    <!-- </div> -->\r\n    <!-- <div class=\"ui-g-12 \">\r\n            <button pButton label=\"提交申请（后台中心）\" class=\"asideBtn\"></button>\r\n        </div> -->\r\n    <!-- <div class=\"ui-g-12 \"> -->\r\n    <!-- <button pButton label=\"客户名单查询\" class=\"asideBtn\"></button> -->\r\n    <!-- </div> -->\r\n    <!-- </div> -->\r\n    <div class=\"ui-g-12 marginTop\" *ngIf=\"deleteFlag\">\r\n        <div class=\"ui-g-1 ui-g-offset-3 saveCustomCenter\">\r\n            <button pButton label=\"编辑\" *ngIf=\"editFlag\" (click)=\"editCustGroupInfo()\"></button>\r\n            <button pButton label=\"保存\" *ngIf=\"!editFlag\" (click)=\"updateCustGroupInfo()\"></button>\r\n        </div>\r\n        <div class=\"ui-g-1 saveCustomCenter\">\r\n            <button pButton label=\"删除\" (click)=\"deleteCustGroup()\"></button>\r\n        </div>\r\n        <div class=\"ui-g-1 saveCustomCenter\">\r\n            <button *ngIf=\"editFlag\" pButton label=\"下一步\" (click)=\"setUp()\"></button>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 marginTop\" *ngIf=\"!deleteFlag\">\r\n        <div class=\"ui-g-1 ui-g-offset-3 saveCustomCenter\">\r\n            <button pButton label=\"返回\" (click)=\"returnBack()\"></button>\r\n        </div>\r\n        <div class=\"ui-g-1 saveCustomCenter\">\r\n            <button pButton label=\"删除\" (click)=\"deleteCustGroup()\"></button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- msg -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!-- comfirm -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" style=\"color:#fff;\" label=\"是\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" style=\"color:#fff;\" label=\"否\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n<!-- 联系人等 -->\r\n<p-dialog [(visible)]=\"adminDisplay\" width=\"1500\" height=\"800\" modal=\"modal\">\r\n    <p-header>{{adminTitle}}</p-header>\r\n    <save-customGroup-admin [isContactPerson]=\"isContactPerson\" [inValue]=\"inValue\" [adminFlag]=\"adminFlag\" (event)=\"returnAdmin($event)\"></save-customGroup-admin>\r\n</p-dialog>\r\n\r\n<!-- 主推产品模态框 -->\r\n<p-dialog header=\"添加\" class=\"add_product\" *ngIf=\"mainDisplay\" [(visible)]=\"mainDisplay\" width=\"600\" [responsive]=\"true\" modal=\"true\">\r\n    <group-product (outValue)=\"addCall($event)\"></group-product>\r\n</p-dialog>\r\n<!-- <p-dialog header=\"添加\" [(visible)]=\"mainDisplay\" width=\"600\" height=\"400\" [responsive]=\"true\" [contentStyle]=\"{height:800}\">\r\n    <div class=\"basis-group ui-g-12 module diastyle\">\r\n        <div class=\"ui-g-12 ui-md-2\">主推产品:</div>\r\n        <div class=\"ui-g-12 ui-md-2\">\r\n            <p-dropdown [(ngModel)]=\"productCode\" [options]=\"productList\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" style=\"color:#fff;\" (click)=\"mainProductAdd()\" label=\"确定\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" style=\"color:#fff;\" (click)=\"mainDisplay=false\" label=\"取消\"></button>\r\n    </p-footer>\r\n</p-dialog> -->"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-save/custom-group-save.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-save/custom-group-save.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".saveCustom {\n  padding-bottom: 100px; }\n  .saveCustom label {\n    width: 90px;\n    display: inline-block;\n    height: 28px;\n    line-height: 28px; }\n  .saveCustom input {\n    width: 40% !important; }\n  .saveCustom .saveCustomCenter {\n    text-align: center !important; }\n  .saveCustom .saveCustomCenter .asideBtn {\n      width: 80% !important;\n      font-size: 14px !important; }\n  .paddingNone {\n  padding: 0px !important; }\n  .basis-group {\n  height: 255px; }\n  .marginTop {\n  margin-top: 40px !important; }\n  :host .inputSet input[pInputText] {\n  min-width: 150px !important; }\n  :host/deep/ .add_product .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXNhdmUvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tZ3JvdXBcXGN1c3RvbS1ncm91cC1zYXZlXFxjdXN0b20tZ3JvdXAtc2F2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQixFQUFBO0VBRHpCO0lBR1EsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUFOekI7SUFTUSxxQkFBb0IsRUFBQTtFQVQ1QjtJQVlRLDZCQUE0QixFQUFBO0VBWnBDO01BY1kscUJBQW9CO01BQ3BCLDBCQUEwQixFQUFBO0VBS3RDO0VBQ0ksdUJBQXNCLEVBQUE7RUFHMUI7RUFDSSxhQUFhLEVBQUE7RUFHakI7RUFDSSwyQkFBMEIsRUFBQTtFQUc5QjtFQUVRLDJCQUEwQixFQUFBO0VBSWxDO0VBRVEsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1ncm91cC9jdXN0b20tZ3JvdXAtc2F2ZS9jdXN0b20tZ3JvdXAtc2F2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYXZlQ3VzdG9tIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiA0MCUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnNhdmVDdXN0b21DZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmFzaWRlQnRuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnBhZGRpbmdOb25lIHtcclxuICAgIHBhZGRpbmc6IDBweCFpbXBvcnRhbnRcclxufVxyXG5cclxuLmJhc2lzLWdyb3VwIHtcclxuICAgIGhlaWdodDogMjU1cHg7XHJcbn1cclxuXHJcbi5tYXJnaW5Ub3Age1xyXG4gICAgbWFyZ2luLXRvcDogNDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC5pbnB1dFNldCB7XHJcbiAgICBpbnB1dFtwSW5wdXRUZXh0XSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5hZGRfcHJvZHVjdCB7XHJcbiAgICAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-save/custom-group-save.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-save/custom-group-save.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CustomGroupSaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomGroupSaveComponent", function() { return CustomGroupSaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_queryParentZoneInfo_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bean/queryParentZoneInfo.bean */ "./src/app/pages/tzb/custom/custom-group/custom-group-save/bean/queryParentZoneInfo.bean.ts");
/* harmony import */ var _bean_GroupAdminInfo_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bean/GroupAdminInfo.bean */ "./src/app/pages/tzb/custom/custom-group/custom-group-save/bean/GroupAdminInfo.bean.ts");
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/custom-group-save/bean/custom-group.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CustomGroupSaveComponent = /** @class */ (function () {
    function CustomGroupSaveComponent(httpService, routerInfo, router, confirmationService, commfunc) {
        this.httpService = httpService;
        this.routerInfo = routerInfo;
        this.router = router;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        // 初始常参
        this.title = 'xxx客户群';
        this.regionArr = ['', '', '', '']; //四级区划
        this.introducerRoleName = []; //群介绍人
        this.mentorRoleName = []; //指导师傅
        this.contactArr = []; //群联系人
        this.introducerArr = []; //群介绍人
        this.mentorRoleArr = []; //指导师傅
        this.main_product_params = {};
        this.cengJi_2 = false;
        this.cengJi_3 = false;
        this.cengJi_4 = false;
        // 模态框
        this.adminDisplay = false; //管理人员模态框显示与否
        this.adminTitle = '';
        this.isContactPerson = false; //客群区域参数显示与否
        this.inValue = [];
        this.adminFlag = 0;
        // 四级
        this.parentZoneInfoTempArr = [];
        this.regionArrTemp = {}; //四级区划
        this.count = 0;
        this.regionSHeng = [];
        this.regionCity = [];
        this.regionArea = [];
        this.regionStreet = [];
        this.regionSHeng1 = ''; //一级
        this.regionCity1 = ''; //二级
        this.regionArea1 = ''; //三级
        this.regionStreet1 = ''; //四级
        this.parentZoneInfoTempNum = 4; //四级区划--查询--解析--标志
        this.queryZoneInfoTempNum = 0; //四级区划--查询--信息--标志
        // 页面显示
        this.editFlag = true; //编辑保存按钮切换
        this.deleteFlag = true; //下方按钮组
        // bean
        this.custGroupInfoBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__["CustGroupInfoBean"]();
        this.zoneInfoBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__["ZoneInfoBean"](); //四级区划信息查询
        this.parentZoneInfoBean = new _bean_queryParentZoneInfo_bean__WEBPACK_IMPORTED_MODULE_6__["ParentZoneInfoBean"](); //四级区划解析查询
        this.groupAdminInfoBean = new _bean_GroupAdminInfo_bean__WEBPACK_IMPORTED_MODULE_7__["GroupAdminInfoBean"](); //客户群管理人员
        this.custGroupBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_8__["CustGroupBean"](); //客户群管理人员
        this.isShowNext = false;
        this.mainDisplay = false;
        // 控件
        this.msgs = [];
        this.groupTypeCheck = ''; //群类型绑定
        this.groupStateCheck = ''; //群状态绑定
        //  contactListCheck: any = '';//群联系人绑定
        //  introducerListCheck: any = '';//群介绍人    
        //  mentorListCheck: any = '';//群指导师傅绑定
        //  appraisalListCheck: any = '';//群评价人
        // session
        this.orgName = '';
        this.orgIdTemp = '';
        this.orgNameArr = [];
        // 链接中间量
        this.groupName = '';
        this.groupId = ''; //群号
        this.region = ''; //序列号
        // 其他中间量
        this.nameInValue = {
            ownerName: '',
        };
        this.RoleName = '';
        this.taskCategoryId = ''; //业务种类编号
        this.productName = '';
        this.isHangye = false;
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.groupState = this.code['GroupStatus'];
        this.productList = this.code['productList'];
    } //码值
    CustomGroupSaveComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CustomGroupSaveComponent.prototype.preSet = function () {
        // 初始化
        // session
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
        this.orgName = ch['orgName']; //机构名
        this.orgIdTemp = mesg['orgId']; //机构id
        // 机构列表
        var tempArr = [{ label: '请选择', value: '' }];
        tempArr.push({ label: this.orgName, value: this.orgIdTemp });
        this.orgNameArr = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](tempArr);
        // 链接传值
        if (this.routerInfo.snapshot.params['id']) {
            this.groupId = this.routerInfo.snapshot.params['id']; //客户群号            
        }
        if (this.routerInfo.snapshot.params['groupId']) {
            this.groupId = this.routerInfo.snapshot.params['groupId']; //客户群号            
        }
        if (this.routerInfo.snapshot.params['region']) {
            this.region = this.routerInfo.snapshot.params['region']; //四级序列号        
        }
        //待办链接传参 
        if (this.routerInfo.snapshot.params.taskCategoryId) {
        }
        // 客户群信息查询
        this.custGroupInfoBean.groupId = this.groupId;
        // 客户群管理人员查询
        this.groupAdminInfoBean.groupId = this.groupId;
        // 载入查询
        this.selectCustGroupInfo();
        //xin  默认地区显示
        this.queryParentZoneAll();
        //群联系人
        this.selectGroupAdminInfo();
    };
    CustomGroupSaveComponent.prototype.selectCustGroupInfo = function () {
        var _this = this;
        // 客户群信息查询
        var parames = {
            groupId: this.groupId
        };
        this.httpService.selectCustGroupInfo(this.custGroupInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.groupType != '3') {
                    _this.groupType = _this.code['GroupTypeCreate'];
                }
                else {
                    _this.groupType = _this.code['GroupTypeSave'];
                }
                if (data.groupType != '4' && data.groupType != '5' && data.groupType != '6' && data.groupType != '10') {
                    _this.areaShow = true;
                }
                else {
                    _this.areaShow = false;
                }
                _this.custGroupInfoBean = data;
                // 四级区划
                _this.region = data.region;
                _this.queryParentZoneAll();
                // title
                _this.title = _this.custGroupInfoBean.groupName + "\u5BA2\u6237\u7FA4";
                _this.groupTypeCheck = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](_this.custGroupInfoBean.groupType); //群类型绑定
                if (_this.groupTypeCheck == 4) {
                    _this.isHangye = true;
                    _this.httpService.queryTaskByIndtstryAll({ taskTypeId: data.subGroupType, taskTypeKey: 'indtstryType' }).subscribe(function (data) {
                        _this.firstToinvestTradeOptions = _this.commfunc.listToLabelvalue(data.firstTask, 'taskTypeName', 'taskTypeId');
                        _this.firstToinvestTradeOptions.unshift({ label: '请选择', value: '' });
                        _this.secondToinvestTradeOptions = _this.commfunc.listToLabelvalue(data.secondTask, 'taskTypeName', 'taskTypeId');
                        _this.secondToinvestTradeOptions.unshift({ label: '请选择', value: '' });
                        _this.thirdToinvestTradeOptions = _this.commfunc.listToLabelvalue(data.thirdTask, 'taskTypeName', 'taskTypeId');
                        _this.thirdToinvestTradeOptions.unshift({ label: '请选择', value: '' });
                        _this.fourthToinvestTradeOptions = _this.commfunc.listToLabelvalue(data.fourthTask, 'taskTypeName', 'taskTypeId');
                        _this.fourthToinvestTradeOptions.unshift({ label: '请选择', value: '' });
                        data.taskList.forEach(function (item) {
                            switch (item.level) {
                                case '1':
                                    _this.firstToinvestTrade = item.taskTypeId;
                                    break;
                                case '2':
                                    _this.secondToinvestTrade = item.taskTypeId;
                                    break;
                                case '3':
                                    _this.thirdToinvestTrade = item.taskTypeId;
                                    break;
                                case '4':
                                    _this.fourthToinvestTrade = item.taskTypeId;
                                    break;
                                default: break;
                            }
                        });
                    });
                }
                _this.groupStateCheck = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](_this.custGroupInfoBean.groupStatus); //群状态绑定
                if (_this.groupStateCheck == '4') {
                    _this.deleteFlag = false;
                }
                _this.contactArr = data.contactList; //群联系人
                _this.introducerArr = data.introducerList; //群介绍人
                _this.mentorRoleArr = data.mentorList; //指导师傅
                _this.selectFor(); //查询赋值
                _this.adminSelect(); //管理人员查询格式          
                if (_this.groupStateCheck != '2' && _this.groupStateCheck != '4') {
                    _this.deleteFlag = false;
                }
                //
                _this.custGroupInfoBean.region = data.region; //四级区划
                _this.parentZoneInfoBean.zoneId = _this.custGroupInfoBean.region; //四级区划
                _this.regionReturn(); // 四级区划                        
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
    CustomGroupSaveComponent.prototype.selectGroupAdminInfo = function () {
        var _this = this;
        // 客户群管理人员查询
        var parames = {
            groupId: this.groupId,
            roleType: 1,
            statusId: 1
        };
        this.httpService.selectGroupAdminInfo(parames).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.contactArr = data.roleList || [];
                _this.inValue = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](_this.contactArr);
                var arr_1 = [];
                if (data.roleList) {
                    data.roleList.forEach(function (item) {
                        arr_1.push(item.userName);
                    });
                }
                _this.contactRoleName = arr_1.join(';');
                console.log(data.roleList);
                console.log(_this.contactRoleName);
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
    CustomGroupSaveComponent.prototype.regionReturn = function () {
        // 四级区划--解析--客户群信息查询调用
        // this.httpService.queryParentZoneInfo(this.parentZoneInfoBean).subscribe(data => {
        //     if (data.returnCode.code == 'success') {
        //         this.parentZoneInfoBean.zoneList = data.zoneList;
        //         if (this.parentZoneInfoBean.zoneList[0]) {
        //             let temArr1 = [];
        //             for (let i in this.parentZoneInfoBean.zoneList) {
        //                 temArr1.push({ label: this.parentZoneInfoBean.zoneList[i].parentZoneName, value: this.parentZoneInfoBean.zoneList[i].parentZoneId });
        //             }
        //             this.parentZoneInfoTempArr = _.clone(temArr1.reverse());//数组倒序          
        //             this.regionSHeng1 = this.parentZoneInfoTempArr[0].value;
        //         }
        //         if (this.parentZoneInfoBean.zoneList[1]) {
        //             let temArr1 = [];
        //             for (let i in this.parentZoneInfoBean.zoneList) {
        //                 temArr1.push({ label: this.parentZoneInfoBean.zoneList[i].parentZoneName, value: this.parentZoneInfoBean.zoneList[i].parentZoneId });
        //             }
        //             this.parentZoneInfoTempArr = _.clone(temArr1.reverse());//数组倒序          
        //             this.regionCity1 = this.parentZoneInfoTempArr[1].value;
        //         }
        //         if (this.parentZoneInfoBean.zoneList[2]) {
        //             let temArr1 = [];
        //             for (let i in this.parentZoneInfoBean.zoneList) {
        //                 temArr1.push({ label: this.parentZoneInfoBean.zoneList[i].parentZoneName, value: this.parentZoneInfoBean.zoneList[i].parentZoneId });
        //             }
        //             this.parentZoneInfoTempArr = _.clone(temArr1.reverse());//数组倒序
        //             this.regionArea1 = this.parentZoneInfoTempArr[2].value;
        //         }
        //         if (this.parentZoneInfoBean.zoneList[3]) {
        //             let temArr1 = [];
        //             for (let i in this.parentZoneInfoBean.zoneList) {
        //                 temArr1.push({ label: this.parentZoneInfoBean.zoneList[i].parentZoneName, value: this.parentZoneInfoBean.zoneList[i].parentZoneId });
        //             }
        //             this.parentZoneInfoTempArr = _.clone(temArr1.reverse());//数组倒序
        //             this.regionStreet1 = this.parentZoneInfoTempArr[3].value;
        //         }
        //         this.queryZoneActive();
        //     } else {
        //         this.msgs = [];
        //         data.returnCode.code ? data.returnCode.code : '查询四级区划信息失败';
        //         this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
        //     }
        // }, err => {
        //     this.msgs = [];
        //     this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        // })
    };
    CustomGroupSaveComponent.prototype.queryZoneActive = function () {
        // 四级区划立刻初始化
        //
        // this.queryZoneInfo('');
    };
    // queryZoneInfo(event) {
    //     // 四级区划信息查询
    //     //
    //     this.zoneInfoBean.parentZoneId = event;
    //     this.httpService.queryZoneInfo(this.zoneInfoBean).subscribe(data => {
    //         if (data.returnCode.code == 'success') {
    //             //
    //             this.zoneInfoBean.zoneList = data.zoneList;
    //             // 初始化
    //             let temArr = [{ label: '请选择', value: '' }];
    //             for (let i in this.zoneInfoBean.zoneList) {
    //                 temArr.push({ label: this.zoneInfoBean.zoneList[i].zoneName, value: this.zoneInfoBean.zoneList[i].zoneId });
    //             }
    //             //
    //             this.regionSHeng = _.clone(temArr);
    //             this.queryZoneInfo1(this.regionSHeng1);
    //         } else {
    //             this.msgs = [];
    //             data.returnCode.code ? data.returnCode.code : '查询四级区划信息失败';
    //             this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
    //         }
    //     }, err => {
    //         this.msgs = [];
    //         this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
    //     });
    // }
    // queryZoneInfo1(event) {
    //     // 四级区划信息查询
    //     //
    //     this.zoneInfoBean.parentZoneId = event;
    //     this.httpService.queryZoneInfo(this.zoneInfoBean).subscribe(data => {
    //         if (data.returnCode.code == 'success') {
    //             //
    //             this.zoneInfoBean.zoneList = data.zoneList;
    //             // 初始化
    //             let temArr = [{ label: '请选择', value: '' }];
    //             for (let i in this.zoneInfoBean.zoneList) {
    //                 temArr.push({ label: this.zoneInfoBean.zoneList[i].zoneName, value: this.zoneInfoBean.zoneList[i].zoneId });
    //             }
    //             //
    //             this.regionCity = _.clone(temArr);
    //             this.queryZoneInfo2(this.regionCity1);
    //         } else {
    //             this.msgs = [];
    //             data.returnCode.code ? data.returnCode.code : '查询四级区划信息失败';
    //             this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
    //         }
    //     }, err => {
    //         this.msgs = [];
    //         this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
    //     });
    // }
    // queryZoneInfo2(event) {
    //     // 四级区划信息查询
    //     //
    //     this.zoneInfoBean.parentZoneId = event;
    //     this.httpService.queryZoneInfo(this.zoneInfoBean).subscribe(data => {
    //         if (data.returnCode.code == 'success') {
    //             //
    //             this.zoneInfoBean.zoneList = data.zoneList;
    //             // 初始化
    //             let temArr = [{ label: '请选择', value: '' }];
    //             for (let i in this.zoneInfoBean.zoneList) {
    //                 temArr.push({ label: this.zoneInfoBean.zoneList[i].zoneName, value: this.zoneInfoBean.zoneList[i].zoneId });
    //             }
    //             //
    //             this.regionArea = _.clone(temArr);
    //             this.queryZoneInfo3(this.regionArea1);
    //         } else {
    //             this.msgs = [];
    //             data.returnCode.code ? data.returnCode.code : '查询四级区划信息失败';
    //             this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
    //         }
    //     }, err => {
    //         this.msgs = [];
    //         this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
    //     });
    // }
    // queryZoneInfo3(event) {
    //     // 四级区划信息查询
    //     //
    //     this.zoneInfoBean.parentZoneId = event;
    //     // this.queryZoneInfoTempNum = i;//中间量
    //     this.httpService.queryZoneInfo(this.zoneInfoBean).subscribe(data => {
    //         if (data.returnCode.code == 'success') {
    //             //
    //             this.zoneInfoBean.zoneList = data.zoneList;
    //             // 初始化
    //             let temArr = [{ label: '请选择', value: '' }];
    //             for (let i in this.zoneInfoBean.zoneList) {
    //                 temArr.push({ label: this.zoneInfoBean.zoneList[i].zoneName, value: this.zoneInfoBean.zoneList[i].zoneId });
    //             }
    //             //
    //             this.regionStreet = _.clone(temArr);
    //         } else {
    //             this.msgs = [];
    //             data.returnCode.code ? data.returnCode.code : '查询四级区划信息失败';
    //             this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
    //         }
    //     }, err => {
    //         this.msgs = [];
    //         this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
    //     });
    // }
    CustomGroupSaveComponent.prototype.updateGroupAdminInfo = function (i) {
        var _this = this;
        // 客户群管理人员修改
        //
        // this.groupAdminInfoBean.statusId = '2';
        this.groupAdminInfoBean.roleType = i;
        this.groupAdminInfoBean["statusId"] = '1';
        // let param = _.clone(this.groupAdminInfoBean);
        this.httpService.updateGroupAdminInfo(this.groupAdminInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                //
                _this.selectCustGroupInfo();
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '管理人员修改失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    CustomGroupSaveComponent.prototype.updateCustGroupInfo = function () {
        var _this = this;
        //四级区划传参
        if (this.fourthToinvestTrade && this.fourthToinvestTrade != '') {
            this.custGroupInfoBean["subGroupType"] = this.fourthToinvestTrade;
        }
        else if (this.thirdToinvestTrade && this.thirdToinvestTrade != '') {
            this.custGroupInfoBean["subGroupType"] = this.thirdToinvestTrade;
        }
        else if (this.secondToinvestTrade && this.secondToinvestTrade != '') {
            this.custGroupInfoBean["subGroupType"] = this.secondToinvestTrade;
        }
        else if (this.firstToinvestTrade && this.firstToinvestTrade != '') {
            this.custGroupInfoBean["subGroupType"] = this.firstToinvestTrade;
        }
        else if (this.isHangye) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '投向行业不能为空！' }];
            return false;
        }
        //客户群信息修改，保存触发 
        this.custGroupInfoBean.groupType = this.groupTypeCheck; //群类型绑定
        this.custGroupInfoBean.groupStatus = this.groupStateCheck; //群状态绑定 
        // 弹出框
        this.confirmationService.confirm({
            message: '确定保存?',
            accept: function () {
                var tempFlag2 = true; //非空校验(除四级) 
                tempFlag2 = _this.isNull();
                if (!tempFlag2) {
                    return;
                }
                if (_this.groupTypeCheck != '4' && _this.groupTypeCheck != '5' && _this.groupTypeCheck != '6' && _this.groupTypeCheck != '10' && _this.groupTypeCheck != 'G10001' && _this.groupTypeCheck != 'G10002') {
                    if (_this.regionStreet1 && _this.regionStreet1 != '') {
                        _this.custGroupInfoBean.region = _this.regionStreet1;
                    }
                    else if (_this.regionArea1 && _this.regionArea1 != '') {
                        _this.custGroupInfoBean.region = _this.regionArea1;
                    }
                    else if (_this.regionCity1 && _this.regionCity1 != '') {
                        _this.custGroupInfoBean.region = _this.regionCity1;
                    }
                    else if (_this.regionSHeng1 && _this.regionSHeng1 != '') {
                        _this.custGroupInfoBean.region = _this.regionSHeng1;
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: '地址不能为空！' }];
                        return;
                    }
                }
                // if (!this.contactArr || this.contactArr == [] || this.contactArr.length == 0) {
                //     // 群联系人
                //     this.msgs = [];
                //     this.msgs = [{ severity: 'error', summary: '提示', detail: '群联系人不能为空！' }];
                //     return;
                // }
                // if (!this.introducerArr || this.introducerArr == [] || this.introducerArr.length == 0) {
                //     // 群介绍人
                //     this.msgs = [];
                //     this.msgs = [{ severity: 'error', summary: '提示', detail: '群介绍人不能为空！' }];
                //     return;
                // }
                // if (!this.mentorRoleArr || this.mentorRoleArr == [] || this.mentorRoleArr.length == 0) {
                //     // 群指导师傅
                //     this.msgs = [];
                //     this.msgs = [{ severity: 'error', summary: '提示', detail: '群指导师傅不能为空！' }];
                //     return;
                // }
                // this.adminCreate();
                // 调用服务
                if (_this.regionStreet1 && _this.regionStreet1 != '') {
                    _this.custGroupBean.region = _this.regionStreet1;
                }
                else if (_this.regionArea1 && _this.regionArea1 != '') {
                    _this.custGroupBean.region = _this.regionArea1;
                }
                else if (_this.regionCity1 && _this.regionCity1 != '') {
                    _this.custGroupBean.region = _this.regionCity1;
                }
                else if (_this.regionSHeng1 && _this.regionSHeng1 != '') {
                    _this.custGroupBean.region = _this.regionSHeng1;
                }
                var arr = [];
                console.log(_this.regionArr);
                _this.regionArr.forEach(function (element) {
                    if (element != '' && arr.length < 2) {
                        arr.push(element);
                    }
                });
                var str = arr.reverse().join('');
                _this.custGroupInfoBean.groupName = str + _this.custGroupInfoBean.groupName;
                _this.httpService.updateCustGroupInfo(_this.custGroupInfoBean).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        //
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: '提交成功！' }];
                        // this.updateGroupAdminInfo(1);
                        _this.selectCustGroupInfo();
                        _this.editFlag = true;
                        _this.isShowNext = true;
                    }
                    else {
                        _this.msgs = [];
                        data.returnCode.code ? data.returnCode.code : '提交失败！';
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
                });
                var parames = {
                    statusId: 1,
                    groupId: _this.groupId,
                    roleType: 1,
                    updateReason: '',
                    roleList: _this.contactArr
                };
                _this.httpService.updateGroupAdminApply(parames).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.selectCustGroupInfo();
                    }
                    else {
                        _this.msgs = [];
                        data.returnCode.code ? data.returnCode.code : '查询失败';
                        _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
                });
                _this.addGroupRecProductInfo(); //客户群主推产品
            }
        });
    };
    // 模态框相关
    CustomGroupSaveComponent.prototype.selectGroupRecProductInfo = function () {
        var _this = this;
        var params = {
            groupId: this.groupId,
            pageSize: 10,
            pageNum: 1
        };
        // 客户群主推产品查询
        this.httpService.selectGroupRecProductInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var arr_2 = [];
                data.groupProductList.forEach(function (item) {
                    _this.main_product_params = {
                        productCode: item.productCode,
                        productName: item.productName,
                        groupId: _this.groupId
                    };
                    arr_2.push(item.productName);
                });
                _this.main_product = arr_2.join(';');
            }
            else {
                _this.msgs = [];
                data.returnCode.message ? data.returnCode.message : '查询失败';
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    CustomGroupSaveComponent.prototype.editCustGroupInfo = function () {
        // 编辑触发
        //
        this.editFlag = false;
        this.isShowNext = false;
        this.introducerArr = [];
        this.mentorRoleArr = [];
        this.selectCustGroupInfo();
    };
    CustomGroupSaveComponent.prototype.deleteCustGroup = function () {
        var _this = this;
        // 删除客户群
        this.confirmationService.confirm({
            message: '确定删除,并且返回我的客户群页面?',
            accept: function () {
                _this.httpService.deleteCustGroup(_this.custGroupInfoBean).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: '删除成功' }];
                        _this.selectCustGroupInfo();
                        _this.router.navigate(['/pages/tzb/custom/custom-group/my-custom-group']);
                    }
                    else {
                        _this.msgs = [];
                        data.returnCode.code ? data.returnCode.code : '删除失败！';
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
                });
            }
        });
    };
    CustomGroupSaveComponent.prototype.submit = function () {
        var _this = this;
        // 提交申请
        //
        if (this.editFlag == false) {
            this.confirmationService.confirm({
                message: '编辑的内容未保存，确认提交吗?',
                accept: function () {
                    _this.subAuditGroup();
                }
            });
        }
        else {
            this.confirmationService.confirm({
                message: '确定提交?',
                accept: function () {
                    _this.subAuditGroup();
                }
            });
        }
    };
    CustomGroupSaveComponent.prototype.subAuditGroup = function () {
        var _this = this;
        var a = this.custGroupInfoBean;
        a.taskCategoryId = this.routerInfo.snapshot.params.taskCategoryId;
        this.httpService.subAuditGroup(a).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '群创建申请提交成功' }];
                var a_1 = function (data) {
                    _this.router.navigate(['/pages/tzb/custom/custom-group/my-custom-group']);
                };
                window.setTimeout(a_1, 2000);
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
    CustomGroupSaveComponent.prototype.a = function () {
    };
    // 联系人-介绍人-指导师傅
    CustomGroupSaveComponent.prototype.editGroupAdminInfo = function (i) {
        // 模态框入参
        //
        if (i) {
            this.adminFlag = i;
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '管理人员分类传入失败！' }];
        }
        if (i == 1) {
            //群联系人  
            this.adminTitle = '群联系人';
            this.isContactPerson = true;
        }
        this.adminDisplay = true;
    };
    // adminCreate() {
    //     // 管理人员创建格式
    //     //
    //     this.custGroupInfoBean.contactList = [];
    //     this.custGroupInfoBean.introducerList = [];
    //     this.custGroupInfoBean.mentorList = [];
    //     for (let i in this.contactArr) {
    //         this.custGroupInfoBean.contactList.push(
    //             {
    //                 adminType: '1',
    //                 roleId: _.clone(this.contactArr[i].userId),
    //                 roleName: _.clone(this.contactArr[i].userName),
    //                 groupZone: _.clone(this.contactArr[i].groupZone),
    //             }
    //         )
    //     }
    //     for (let i in this.introducerArr) {
    //         this.custGroupInfoBean.introducerList.push(
    //             {
    //                 adminType: '2',
    //                 roleId: _.clone(this.introducerArr[i].userId),
    //                 roleName: _.clone(this.introducerArr[i].userName),
    //             }
    //         )
    //     }
    //     for (let i in this.mentorRoleArr) {
    //         this.custGroupInfoBean.mentorList.push(
    //             {
    //                 adminType: '3',
    //                 roleId: _.clone(this.mentorRoleArr[i].userId),
    //                 roleName: _.clone(this.mentorRoleArr[i].userName),
    //             }
    //         )
    //     }
    // }
    CustomGroupSaveComponent.prototype.adminSelect = function () {
        // 管理人员查询格式
        //
        // let contactArr = [];
        var introducerArr = [];
        var mentorRoleArr = [];
        // for (let i in this.contactArr) {
        //     contactArr.push(
        //         {
        //             userId: _.clone(this.contactArr[i].roleId),
        //             userName: _.clone(this.contactArr[i].roleName),
        //             groupZone: _.clone(this.contactArr[i].groupZone),
        //             statusId: '1',
        //         }
        //     )
        // }
        for (var i in this.introducerArr) {
            introducerArr.push({
                userId: lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.introducerArr[i].roleId),
                userName: lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.introducerArr[i].roleName),
                groupZone: lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.introducerArr[i].groupZone),
                statusId: '2',
            });
        }
        for (var i in this.mentorRoleArr) {
            mentorRoleArr.push({
                userId: lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.mentorRoleArr[i].roleId),
                userName: lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.mentorRoleArr[i].roleName),
                groupZone: lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.mentorRoleArr[i].groupZone),
                statusId: '2',
            });
        }
        // this.contactArr = _.clone(contactArr);
        this.introducerArr = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](introducerArr);
        this.mentorRoleArr = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](mentorRoleArr);
    };
    CustomGroupSaveComponent.prototype.selectFor = function () {
        // 查询赋值
        //
        this.introducerRoleName = [];
        this.mentorRoleName = [];
        // for (let i in this.contactArr) {
        //     if (this.contactArr[i].roleName) {
        //         this.contactRoleName.push(this.contactArr[i].roleName);
        //     }
        // }
        // this.contactRoleName = _.clone(this.contactRoleName)
        // for (let i in this.introducerArr) {
        //     if (this.introducerArr[i].roleName) {
        //         this.introducerRoleName.push(this.introducerArr[i].roleName);
        //     }
        // }
        this.introducerRoleName = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.introducerRoleName);
        for (var i in this.mentorRoleArr) {
            if (this.mentorRoleArr[i].roleName) {
                this.mentorRoleName.push(this.mentorRoleArr[i].roleName);
            }
        }
        this.mentorRoleName = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.mentorRoleName);
    };
    CustomGroupSaveComponent.prototype.toGroupClientImport = function () {
        var _this = this;
        // 链接到客户群名单导入
        this.confirmationService.confirm({
            message: '确定进入客户名单导入页面?',
            accept: function () {
                _this.router.navigate(['/pages/tzb/custom/custom-group/group-client-import', { groupId: _this.groupId, groupName: _this.groupName, custGroupView: '2' }]);
            }
        });
    };
    // 其他
    // returnName(event) {
    //     // 行内人员编辑返回
    //     //
    //     this.GroupAdminInfoDisplay = event.ownerNameDisplay;
    //     if (event.flag == '1') {
    //         this.contactListCheck = event.ownerName;
    //         let tempArrContact = [
    //             {
    //                 userId: this.custGroupInfoBean.contactList[0].roleId,
    //                 userName: this.contactListCheck,
    //                 statusId: '2',
    //             }
    //         ]
    //         this.groupAdminInfoBean.roleList = _.clone(tempArrContact);
    //         this.updateGroupAdminInfo('1');
    //     }
    //     if (event.flag == '2') {
    //         this.introducerListCheck = event.ownerName;
    //         let tempArrIntroducer = [
    //             {
    //                 userId: this.custGroupInfoBean.introducerList[0].roleId,
    //                 userName: this.introducerListCheck,
    //                 statusId: '2',
    //             }
    //         ]
    //         this.groupAdminInfoBean.roleList = _.clone(tempArrIntroducer);
    //         this.updateGroupAdminInfo('2');
    //     }
    //     if (event.flag == '3') {
    //         this.mentorListCheck = event.ownerName;
    //         let tempArrMentorList = [
    //             {
    //                 userId: this.custGroupInfoBean.mentorList[0].roleId,
    //                 userName: this.mentorListCheck,
    //                 statusId: '2',
    //             }
    //         ]
    //         this.groupAdminInfoBean.roleList = _.clone(tempArrMentorList);
    //         this.updateGroupAdminInfo('3');
    //     }
    // if (event.flag == '4') {
    //     this.appraisalListCheck = event.ownerName;
    //     this.updateGroupAdminInfo('4');           
    // }
    // }
    CustomGroupSaveComponent.prototype.queryParentZoneAll = function () {
        var _this = this;
        var params = {
            zoneId: this.region
        };
        var successFnc = function (data) {
            data.firstZone.forEach(function (item) {
                _this.regionSHeng.push({
                    label: item.zoneName,
                    value: item.zoneId
                });
            });
            data.secondZone.forEach(function (item) {
                _this.regionCity.push({
                    label: item.zoneName,
                    value: item.zoneId
                });
            });
            data.thirdZone.forEach(function (item) {
                _this.regionArea.push({
                    label: item.zoneName,
                    value: item.zoneId
                });
            });
            data.fourthZone.forEach(function (item) {
                _this.regionStreet.push({
                    label: item.zoneName,
                    value: item.zoneId
                });
            });
            _this.regionSHeng = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](_this.regionSHeng);
            _this.regionCity = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](_this.regionCity);
            _this.regionArea = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](_this.regionArea);
            _this.regionStreet = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](_this.regionStreet);
            data.zoneList.forEach(function (item) {
                switch (item.parentZoneLevel) {
                    case '1':
                        _this.regionSHeng1 = item.parentZoneId;
                        _this.regionArr[3] = item.parentZoneName;
                        break;
                    case '2':
                        _this.cengJi_2 = true;
                        _this.regionCity1 = item.parentZoneId;
                        _this.regionArr[2] = item.parentZoneName;
                        break;
                    case '3':
                        _this.cengJi_3 = true;
                        _this.regionArea1 = item.parentZoneId;
                        _this.regionArr[1] = item.parentZoneName;
                        break;
                    case '4':
                        _this.cengJi_4 = true;
                        _this.regionStreet1 = item.parentZoneId;
                        _this.regionArr[0] = item.parentZoneName;
                        break;
                    default: break;
                }
            });
            console.log(_this.regionArr);
            var arr = [];
            _this.regionArr.forEach(function (element) {
                if (element != '' && arr.length < 2) {
                    arr.push(element);
                }
            });
            var str = arr.reverse().join('');
            if (_this.custGroupInfoBean.groupName.indexOf(str) != -1) {
                _this.custGroupInfoBean.groupName = _this.custGroupInfoBean.groupName.substring(str.length);
            }
        };
        this.commfunc.interfaceComFnc(this.httpService.queryParentZoneAll(params), successFnc, this.msgs);
    };
    CustomGroupSaveComponent.prototype.setUp = function () {
        this.router.navigate(['/pages/tzb/custom/custom-group/create-custom-group-next', { id: this.groupId, groupName: this.groupName, region: this.custGroupBean.region, taskCategoryId: this.custGroupBean.taskCategoryId }]);
    };
    CustomGroupSaveComponent.prototype.mainProductEdit = function () {
        this.mainDisplay = true;
    };
    CustomGroupSaveComponent.prototype.ngOnInit = function () {
        this.preSet();
        this.preSet2();
        // 四级区划
        this.queryZoneInfo(0); //四级区划
        var a = '';
        this.queryTaskByIndtstry(a);
        this.selectGroupRecProductInfo();
    };
    CustomGroupSaveComponent.prototype.preSet2 = function () {
        // 初始化
        // 群主 session
        var session = window.sessionStorage;
        if (session.getItem('para')) {
            session.removeItem('para');
        }
        var data = session.getItem('commonHeader');
        if (!data) {
            this.router.navigate(["/login"]);
            return;
        }
        var mesg = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (!mesg) {
        }
        var ch = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        // 群主有改动！！
        this.custGroupBean.ownerId = mesg['userId']; //群主id
        this.custGroupBean.ownerName = ch['userName']; //群主名
        // 机构
        this.custGroupBean.orgId = mesg['orgId']; //群主id
        this.custGroupBean.creator = this.custGroupBean.ownerId; //预留
        //待办链接传参 
        if (this.routerInfo.snapshot.params.taskCategoryId) {
            this.taskCategoryId = this.routerInfo.snapshot.params.taskCategoryId;
        }
        this.custGroupBean.taskCategoryId = this.taskCategoryId;
        //四级区划
        this.zoneInfoBean.parentZoneId = ''; //四级区划
        // 管理人员初始
        this.contactArr = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.groupAdminInfoBean.roleList); //群联系人
        this.introducerArr = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.groupAdminInfoBean.roleList); //群介绍人
        this.mentorRoleArr = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.groupAdminInfoBean.roleList); //指导师傅
    };
    CustomGroupSaveComponent.prototype.queryZoneInfo = function (i) {
        var _this = this;
        // 四级区划信息查询
        this.queryZoneInfoTempNum = i; //中间量
        this.httpService.queryZoneInfo(this.zoneInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.zoneInfoBean.zoneList = data.zoneList;
                // 初始化
                var temArr = [{ label: '请选择', value: '' }];
                for (var i_1 in _this.zoneInfoBean.zoneList) {
                    temArr.push({ label: _this.zoneInfoBean.zoneList[i_1].zoneName, value: _this.zoneInfoBean.zoneList[i_1].zoneId });
                }
                if (_this.queryZoneInfoTempNum == 0) {
                    _this.regionSHeng = temArr;
                    _this.cengJi_2 = false;
                    _this.cengJi_3 = false;
                    _this.cengJi_4 = false;
                    _this.regionSHeng1 = '';
                    _this.regionCity1 = '';
                    _this.regionArea1 = '';
                    _this.regionStreet1 = '';
                }
                if (_this.queryZoneInfoTempNum == 1) {
                    _this.regionCity = temArr;
                    _this.cengJi_2 = false;
                    _this.cengJi_3 = false;
                    _this.cengJi_4 = false;
                    _this.regionCity1 = '';
                    _this.regionArea1 = '';
                    _this.regionStreet1 = '';
                    temArr.length == 1 ? '' : _this.cengJi_2 = true;
                }
                if (_this.queryZoneInfoTempNum == 2) {
                    _this.cengJi_3 = false;
                    _this.cengJi_4 = false;
                    _this.regionArea1 = '';
                    _this.regionStreet1 = '';
                    _this.regionArea = temArr;
                    temArr.length == 1 ? '' : _this.cengJi_3 = true;
                }
                if (_this.queryZoneInfoTempNum == 3) {
                    _this.cengJi_4 = false;
                    _this.regionStreet1 = '';
                    _this.regionStreet = temArr;
                    temArr.length == 1 ? '' : _this.cengJi_4 = true;
                }
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询四级区划信息失败';
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    CustomGroupSaveComponent.prototype.choose = function (event, i, index, a) {
        this.regionArr[index] = a.label;
        if (i == 1) {
            this.regionArr[0] = '';
            this.regionArr[1] = '';
            this.regionArr[2] = '';
        }
        else if (i == 2) {
            this.regionArr[0] = '';
            this.regionArr[1] = '';
        }
        else if (i == 3) {
            this.regionArr[0] = '';
        }
        console.log(this.regionArr);
        console.log(event);
        // 四级区划再选择
        this.zoneInfoBean.parentZoneId = event.value;
        this.queryZoneInfo(i);
    };
    CustomGroupSaveComponent.prototype.regionCreate = function () {
        //四级区划传参
        if (this.regionStreet1 && this.regionStreet1 != '') {
            this.custGroupBean.region = this.regionStreet1;
        }
        else if (this.regionArea1 && this.regionArea1 != '') {
            this.custGroupBean.region = this.regionArea1;
        }
        else if (this.regionCity1 && this.regionCity1 != '') {
            this.custGroupBean.region = this.regionCity1;
        }
        else if (this.regionSHeng1 && this.regionSHeng1 != '') {
            this.custGroupBean.region = this.regionSHeng1;
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '区划地址不能为空！' }];
            return false;
        }
        return true;
    };
    CustomGroupSaveComponent.prototype.returnAdmin = function (event) {
        // 模态框出参  
        this.adminDisplay = event.adminDisplay;
        if (event.adminFlag == 1) {
            //   this.contactRoleName = [];
            this.contactArr = event.outValue;
            var arr_3 = [];
            if (this.contactArr) {
                this.contactArr.forEach(function (item) {
                    arr_3.push(item.userName);
                });
            }
            this.contactRoleName = arr_3.join(';');
            //   for (let i in this.contactArr) {
            //     this.contactRoleName.push(this.contactArr[i].userName);
            //   }
            //   this.contactRoleName = _.clone(this.contactRoleName);      
            this.groupAdminInfoBean.roleList = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.contactArr);
        }
        if (event.adminFlag == 2) {
            this.introducerArr = [];
            this.introducerRoleName = [];
            this.introducerArr = event.outValue;
            for (var i in this.introducerArr) {
                this.introducerRoleName.push(this.introducerArr[i].userName);
            }
            this.introducerRoleName = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.introducerRoleName);
        }
        if (event.adminFlag == 3) {
            this.mentorRoleArr = [];
            this.mentorRoleName = [];
            this.mentorRoleArr = event.outValue;
            for (var i in this.mentorRoleArr) {
                this.mentorRoleName.push(this.mentorRoleArr[i].userName);
            }
            this.mentorRoleName = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.mentorRoleName);
        }
    };
    CustomGroupSaveComponent.prototype.adminCreate = function () {
        // 管理人员创建格式
        for (var i in this.contactArr) {
            this.custGroupBean.contactList.push({
                adminType: '1',
                roleId: lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.contactArr[i].userId),
                roleName: lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.contactArr[i].userName),
                groupZone: lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.contactArr[i].groupZone),
            });
        }
        for (var i in this.introducerArr) {
            this.custGroupBean.introducerList.push({
                adminType: '2',
                roleId: lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.introducerArr[i].userId),
                roleName: lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.introducerArr[i].userName),
            });
        }
        for (var i in this.mentorRoleArr) {
            this.custGroupBean.mentorList.push({
                adminType: '3',
                roleId: lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.mentorRoleArr[i].userId),
                roleName: lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.mentorRoleArr[i].userName),
            });
        }
    };
    // 其他
    CustomGroupSaveComponent.prototype.isNull = function () {
        // 非空校验
        if (this.groupTypeCheck == '') {
            // 群类型
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '群类型不能为空！' }];
            return false;
        }
        if (!this.custGroupInfoBean.groupName || this.custGroupInfoBean.groupName.search(/^\S+$/)) {
            // 群名称
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '群名称不能为空且不能有空格！' }];
            return false;
        }
        if (this.groupTypeCheck != '4' && this.groupTypeCheck != '5' && this.groupTypeCheck != '6' && this.groupTypeCheck != '10') {
            if (this.regionStreet1 && this.regionStreet1 != '') {
                this.custGroupBean.region = this.regionStreet1;
            }
            else if (this.regionArea1 && this.regionArea1 != '') {
                this.custGroupBean.region = this.regionArea1;
            }
            else if (this.regionCity1 && this.regionCity1 != '') {
                this.custGroupBean.region = this.regionCity1;
            }
            else if (this.regionSHeng1 && this.regionSHeng1 != '') {
                this.custGroupBean.region = this.regionSHeng1;
            }
            else {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '区划地址不能为空！' }];
                return false;
            }
            if (this.regionSHeng1 == '') {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '所属区划-省份不能为空！' }];
                return false;
            }
            else if (this.cengJi_2 && this.regionCity1 == '') {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '所属区划-城市不能为空！' }];
                return false;
            }
            else if (this.cengJi_3 && this.regionArea1 == '') {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '所属区划-地区不能为空！' }];
                return false;
            }
            else if (this.cengJi_4 && this.regionStreet1 == '') {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '所属区划-街道不能为空！' }];
                return false;
            }
            if (!this.custGroupInfoBean.address || this.custGroupInfoBean.address.search(/^\S+$/)) {
                // 群地址
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '详细地址不能为空！' }];
                return false;
            }
        }
        // else {
        //   this.msgs = [];
        //   this.msgs = [{ severity: 'error', summary: '提示', detail: '区划地址不能为空！' }];
        //   return false;
        // }
        // if (!this.custGroupBean.creator || this.custGroupBean.creator.search(/^\S+$/)) {
        //   // 群组创建人
        //   this.msgs = [];
        //   this.msgs = [{ severity: 'error', summary: '提示', detail: '群组创建人不能为空！' }];
        //   return false;
        // }
        // if (!this.custGroupBean.ownerId || this.custGroupBean.ownerId.search(/^\S+$/)) {
        //   // 分组所有者ID
        //   this.msgs = [];
        //   this.msgs = [{ severity: 'error', summary: '提示', detail: '群主ID不能为空！' }];
        //   return false;
        // }
        // if (!this.custGroupBean.ownerName || this.custGroupBean.ownerName.search(/^\S+$/)) {
        //   // 群主名
        //   this.msgs = [];
        //   this.msgs = [{ severity: 'error', summary: '提示', detail: '群主名不能为空！' }];
        //   return false;
        // }
        // 去掉
        // if (!this.custGroupBean.contactList || this.custGroupBean.contactList == [] || this.custGroupBean.contactList.length == 0) {
        //   // 群联系人
        //   this.msgs = [];
        //   this.msgs = [{ severity: 'error', summary: '提示', detail: '群联系人不能为空！' }];
        //   return false;
        // }
        // if (!this.custGroupBean.introducerList || this.custGroupBean.introducerList == [] || this.custGroupBean.introducerList.length == 0) {
        //   // 群介绍人
        //   this.msgs = [];
        //   this.msgs = [{ severity: 'error', summary: '提示', detail: '群介绍人不能为空！' }];
        //   return false;
        // }
        // if (!this.custGroupBean.mentorList || this.custGroupBean.mentorList == [] || this.custGroupBean.mentorList.length == 0) {
        //   // 群指导师傅
        //   this.msgs = [];
        //   this.msgs = [{ severity: 'error', summary: '提示', detail: '群指导师傅不能为空！' }];
        //   return false;
        // }
        return true;
    };
    CustomGroupSaveComponent.prototype.mainProductAdd = function () {
        var _this = this;
        this.mainDisplay = false;
        this.productList.some(function (item) {
            if (item.value == _this.productCode) {
                _this.main_product = item.label;
                _this.main_product_params = {
                    productCode: item.value,
                    productName: item.label,
                    groupId: _this.groupId
                };
                return false;
            }
        });
    };
    //投向行业四级区划
    CustomGroupSaveComponent.prototype.queryTaskByIndtstry = function (data) {
        var _this = this;
        if (data == '') {
            this.firstToinvestTradeOptions = [{ label: '请选择', value: '' }];
            this.secondToinvestTradeOptions = [{ label: '请选择', value: '' }];
            this.thirdToinvestTradeOptions = [{ label: '请选择', value: '' }];
            this.fourthToinvestTradeOptions = [{ label: '请选择', value: '' }];
            this.firstToinvestTrade = '';
            this.secondToinvestTrade = '';
            this.thirdToinvestTrade = '';
            this.fourthToinvestTrade = '';
            var param_zone = {
                taskTypeParentId: '',
                taskTypeKey: 'indtstryType'
            };
            //四级区划查询投向一
            this.httpService.taskTypeQry(param_zone).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.firstToinvestTradeOptions = _this.commfunc.listToLabelvalue(data.taskTypeList, 'taskTypeName', 'taskTypeId');
                    _this.firstToinvestTradeOptions.unshift({ label: '请选择', value: '' });
                    _this.secondToinvestTradeOptions = [{ label: '请选择', value: '' }];
                    _this.thirdToinvestTradeOptions = [{ label: '请选择', value: '' }];
                    _this.fourthToinvestTradeOptions = [{ label: '请选择', value: '' }];
                    _this.secondToinvestTrade = '';
                    _this.thirdToinvestTrade = '';
                    _this.fourthToinvestTrade = '';
                }
            });
        }
        else if (data == '1') {
            if (this.firstToinvestTrade == '') {
                this.secondToinvestTradeOptions = [{ label: '请选择', value: '' }];
                this.thirdToinvestTradeOptions = [{ label: '请选择', value: '' }];
                this.fourthToinvestTradeOptions = [{ label: '请选择', value: '' }];
                this.secondToinvestTrade = '';
                this.thirdToinvestTrade = '';
                this.fourthToinvestTrade = '';
            }
            else {
                this.secondToinvestTradeOptions = [{ label: '请选择', value: '' }];
                this.thirdToinvestTradeOptions = [{ label: '请选择', value: '' }];
                this.fourthToinvestTradeOptions = [{ label: '请选择', value: '' }];
                this.secondToinvestTrade = '';
                this.thirdToinvestTrade = '';
                this.fourthToinvestTrade = '';
                var param_zone = {
                    taskTypeParentId: this.firstToinvestTrade,
                    taskTypeKey: 'indtstryType'
                };
                //四级区划查询投向二
                this.httpService.taskTypeQry(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.secondToinvestTradeOptions = _this.commfunc.listToLabelvalue(data.taskTypeList, 'taskTypeName', 'taskTypeId');
                        _this.secondToinvestTradeOptions.unshift({ label: '请选择', value: '' });
                        _this.thirdToinvestTradeOptions = [{ label: '请选择', value: '' }];
                        _this.fourthToinvestTradeOptions = [{ label: '请选择', value: '' }];
                        _this.thirdToinvestTrade = '';
                        _this.fourthToinvestTrade = '';
                    }
                });
            }
        }
        else if (data == '2') {
            if (this.secondToinvestTrade == '') {
                this.thirdToinvestTradeOptions = [{ label: '请选择', value: '' }];
                this.fourthToinvestTradeOptions = [{ label: '请选择', value: '' }];
                this.thirdToinvestTrade = '';
                this.fourthToinvestTrade = '';
            }
            else {
                this.thirdToinvestTradeOptions = [{ label: '请选择', value: '' }];
                this.fourthToinvestTradeOptions = [{ label: '请选择', value: '' }];
                this.thirdToinvestTrade = '';
                this.fourthToinvestTrade = '';
                var param_zone = {
                    taskTypeParentId: this.secondToinvestTrade,
                    taskTypeKey: 'indtstryType'
                };
                //四级区划查询投向三
                this.httpService.taskTypeQry(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.thirdToinvestTradeOptions = _this.commfunc.listToLabelvalue(data.taskTypeList, 'taskTypeName', 'taskTypeId');
                        _this.thirdToinvestTradeOptions.unshift({ label: '请选择', value: '' });
                        _this.fourthToinvestTradeOptions = [{ label: '请选择', value: '' }];
                        _this.fourthToinvestTrade = '';
                    }
                });
            }
        }
        else if (data == '3') {
            if (this.thirdToinvestTrade == '') {
                this.fourthToinvestTradeOptions = [{ label: '请选择', value: '' }];
                this.fourthToinvestTrade = '';
            }
            else {
                this.fourthToinvestTradeOptions = [{ label: '请选择', value: '' }];
                this.fourthToinvestTrade = '';
                var param_zone = {
                    taskTypeParentId: this.thirdToinvestTrade,
                    taskTypeKey: 'indtstryType'
                };
                //四级区划查询投向四
                this.httpService.taskTypeQry(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.fourthToinvestTradeOptions = _this.commfunc.listToLabelvalue(data.taskTypeList, 'taskTypeName', 'taskTypeId');
                        _this.fourthToinvestTradeOptions.unshift({ label: '请选择', value: '' });
                    }
                });
            }
        }
    };
    CustomGroupSaveComponent.prototype.typeChange = function (event) {
        console.log(event);
        if (event.value == 4) {
            this.isHangye = true;
        }
        else {
            this.isHangye = false;
        }
        if (event.value == '4' || event.value == '5' || event.value == '6' || event.value == '10') {
            this.areaShow = false;
        }
        else {
            this.areaShow = true;
        }
    };
    CustomGroupSaveComponent.prototype.returnBack = function () {
        this.router.navigate(["/pages/tzb/custom/custom-group/custom-group-query"]);
    };
    //主推产品回调
    CustomGroupSaveComponent.prototype.addCall = function (event) {
        console.log(event);
        this.main_product_params = event;
        this.mainDisplay = false;
        var arr = [];
        event.forEach(function (element) {
            arr.push(element.productName);
        });
        this.main_product = arr.join(',');
    };
    //客户群主推产品
    CustomGroupSaveComponent.prototype.addGroupRecProductInfo = function () {
        var _this = this;
        var params_2 = {
            groupId: this.custGroupInfoBean.groupId,
            productCodeAndName: this.main_product_params
        };
        this.httpService.addGroupRecProductInfo(params_2).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    CustomGroupSaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-group-save',
            template: __webpack_require__(/*! ./custom-group-save.component.html */ "./src/app/pages/tzb/custom/custom-group/custom-group-save/custom-group-save.component.html"),
            styles: [__webpack_require__(/*! ./custom-group-save.component.scss */ "./src/app/pages/tzb/custom/custom-group/custom-group-save/custom-group-save.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__["Commfunc"]],
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__["Commfunc"]])
    ], CustomGroupSaveComponent);
    return CustomGroupSaveComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-save/custom-group-save.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-save/custom-group-save.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: CustomGroupSaveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomGroupSaveModule", function() { return CustomGroupSaveModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _custom_group_save_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-group-save.routing */ "./src/app/pages/tzb/custom/custom-group/custom-group-save/custom-group-save.routing.ts");
/* harmony import */ var _custom_group_save_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-group-save.component */ "./src/app/pages/tzb/custom/custom-group/custom-group-save/custom-group-save.component.ts");
/* harmony import */ var _save_customGroup_admin_save_customGroup_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save-customGroup-admin/save-customGroup-admin.component */ "./src/app/pages/tzb/custom/custom-group/custom-group-save/save-customGroup-admin/save-customGroup-admin.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_create_custom_group_group_product_group_product_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/create-custom-group/group-product/group-product.module */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/group-product/group-product.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//客户群组
var CustomGroupSaveModule = /** @class */ (function () {
    function CustomGroupSaveModule() {
    }
    CustomGroupSaveModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _custom_group_save_routing__WEBPACK_IMPORTED_MODULE_4__["CustomGroupSaveRouting"],
                app_pages_tzb_custom_custom_group_create_custom_group_group_product_group_product_module__WEBPACK_IMPORTED_MODULE_7__["GroupProductModule"]
            ],
            declarations: [
                _custom_group_save_component__WEBPACK_IMPORTED_MODULE_5__["CustomGroupSaveComponent"],
                _save_customGroup_admin_save_customGroup_admin_component__WEBPACK_IMPORTED_MODULE_6__["SaveCustomGroupAdminComponent"]
            ],
            exports: [],
            providers: []
        })
    ], CustomGroupSaveModule);
    return CustomGroupSaveModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-save/custom-group-save.routing.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-save/custom-group-save.routing.ts ***!
  \**********************************************************************************************/
/*! exports provided: routes, CustomGroupSaveRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomGroupSaveRouting", function() { return CustomGroupSaveRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_group_save_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-group-save.component */ "./src/app/pages/tzb/custom/custom-group/custom-group-save/custom-group-save.component.ts");


//客户群组
// import { CustomGroupDeleteComponent } from './custom-group-delete/custom-group-delete.component';//客户群-删除客户群
var routes = [
    {
        path: '', component: _custom_group_save_component__WEBPACK_IMPORTED_MODULE_1__["CustomGroupSaveComponent"] //创建
    }
];
var CustomGroupSaveRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-save/save-customGroup-admin/save-customGroup-admin.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-save/save-customGroup-admin/save-customGroup-admin.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module basis-group\">\r\n        <div style=\"text-align:right;\">\r\n            <span class=\"icoColor\" (click)=\"showDialog()\">增加</span>\r\n        </div>\r\n        <div class=\"ui-g-12 tab base-table\">\r\n            <p-dataTable [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tableMesg\" [value]=\"inValue\" id=\"groupTable\">\r\n                <p-column header=\"客群区域\" *ngIf=\"isContactPerson\">\r\n                    <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n                        <input type=\"text\" pInputText [disabled]=\"true\" [(ngModel)]=\"inValue[i].groupZone\">\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column header=\"联系人工号\">\r\n                    <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n                        <input [disabled]=\"true\" type=\"text\" pInputText [(ngModel)]=\"inValue[i].userId\">\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column header=\"联系人姓名\">\r\n                    <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n                        <input [disabled]=\"true\" type=\"text\" pInputText [(ngModel)]=\"inValue[i].userName\">\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column header=\"操作\">\r\n                    <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n                        <span (click)=\"delArray(i)\" class=\"tabelDeleteIco\">删除</span>\r\n                    </ng-template>\r\n                </p-column>\r\n            </p-dataTable>\r\n        </div>\r\n        <div class=\"ui-g-12 btn-submit tab\">\r\n            <button pButton type=\"button\" label=\"确定\" (click)=\"return()\"></button>\r\n        </div>\r\n    </div>\r\n    <p-dialog header=\"添加\" [(visible)]=\"addDisplay\" width=\"600\" [responsive]=\"true\" [contentStyle]=\"{height:800}\">\r\n        <div class=\"basis-group ui-g-12 module diastyle\">\r\n            <div class=\"ui-g\" >\r\n                <div class=\"ui-g-12 ui-md-2\">\r\n                    <label>人员:</label> \r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2\">\r\n                    <!-- <p-autoComplete [(ngModel)]=\"brand\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterBrands($event)\" [size]=\"30\" [minLength]=\"1\"\r\n                        placeholder=\"请输入行员名或行员号\" [dropdown]=\"true\">\r\n                        <ng-template let-brand pTemplate=\"item\">\r\n                            <div class=\"ui-helper-clearfix\" style=\"border-bottom:1px solid #D5D5D5\">\r\n                                <div style=\"font-size:18px;float:right;margin:10px 10px 0 0\">{{brand}}</div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </p-autoComplete> -->\r\n                    <input  type=\"text\" pInputText [(ngModel)]=\"staff_info\" (click)='staffClick()'>\r\n                    <!-- <p-dropdown [(ngModel)]=\"staff\" (onChange)=\"changeStaff($event)\" [options]=\"staffArr\"></p-dropdown> -->\r\n                    \r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"isContactPerson\" class=\"ui-g\">\r\n                <div class=\"ui-g-12 ui-md-2\">客群区域:</div>\r\n                <div class=\"ui-g-12 ui-md-2\"> <input type=\"text\" pInputText [(ngModel)]=\"groupZone\"></div>\r\n            </div>\r\n        </div>\r\n        <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-check\" (click)=\"addBtn2()\" style=\"color:#fff;\" label=\"是\"></button>\r\n            <button type=\"button\" pButton icon=\"fa-close\" (click)=\"addDisplay=false\" style=\"color:#fff;\" label=\"否\"></button>\r\n        </p-footer>\r\n    </p-dialog>\r\n    <!-- msg -->\r\n    <p-growl [(value)]=\"msgs\"></p-growl>\r\n    \r\n    <p-dialog [(visible)]=\"staff_display\" width=\"1500\" height=\"800\" (onHide)=\"returnInfoHide()\">\r\n        <p-header>\r\n          选择人员\r\n        </p-header>\r\n        <queryUser *ngIf=\"Property\"  (outValue)=\"returnInfo($event)\"></queryUser>\r\n      </p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-save/save-customGroup-admin/save-customGroup-admin.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-save/save-customGroup-admin/save-customGroup-admin.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-dialog .ui-dialog-content {\n  overflow: inherit !important; }\n\n.tab {\n  text-align: center; }\n\n.btn-batch-import2 {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.ui-dialog-mask, .ui-widget-overlay {\n  z-index: 1000 !important; }\n\n.diastyle {\n  text-align: center;\n  height: 300px;\n  overflow: inherit; }\n\n.diastyle label {\n    width: 100%;\n    height: 28px;\n    line-height: 28px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXNhdmUvc2F2ZS1jdXN0b21Hcm91cC1hZG1pbi9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1ncm91cFxcY3VzdG9tLWdyb3VwLXNhdmVcXHNhdmUtY3VzdG9tR3JvdXAtYWRtaW5cXHNhdmUtY3VzdG9tR3JvdXAtYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBNEIsRUFBQTs7QUFFaEM7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxpQkFDSixFQUFBOztBQUNBO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRTVCO0VBQ0ksa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixpQkFBZ0IsRUFBQTs7QUFIcEI7SUFLUSxXQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3VzdG9tLWdyb3VwLXNhdmUvc2F2ZS1jdXN0b21Hcm91cC1hZG1pbi9zYXZlLWN1c3RvbUdyb3VwLWFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnR7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcbi50YWIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idG4tYmF0Y2gtaW1wb3J0MntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnRleHQtcmlnaHR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodFxyXG59XHJcbi51aS1kaWFsb2ctbWFzaywudWktd2lkZ2V0LW92ZXJsYXl7XHJcbiAgICB6LWluZGV4OiAxMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRpYXN0eWxle1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBoZWlnaHQ6MzAwcHg7XHJcbiAgICBvdmVyZmxvdzppbmhlcml0O1xyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/custom-group-save/save-customGroup-admin/save-customGroup-admin.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/custom-group-save/save-customGroup-admin/save-customGroup-admin.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: SaveCustomGroupAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveCustomGroupAdminComponent", function() { return SaveCustomGroupAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SaveCustomGroupAdminComponent = /** @class */ (function () {
    /**
     *--2018.1.9
     */
    function SaveCustomGroupAdminComponent(httpService, router, routerInfo, commfunc) {
        this.httpService = httpService;
        this.router = router;
        this.routerInfo = routerInfo;
        this.commfunc = commfunc;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //公共
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"];
        // 中间量
        this.outValue = [];
        // 第二层模态框
        this.addDisplay = false;
        this.staff_display = false; //人员模态框
        // 中间量
        this.groupZone = '';
        this.Property = false;
        // 假数据
        this.staff = '';
        this.staffArr = [
            { label: '请选择', value: ['', "请选择"] },
            { label: '人员临时1', value: ['1', "人员临时1"] },
            { label: '人员临时2', value: ['2', "人员临时2"] },
            { label: '人员临时3', value: ['3', "人员临时3"] },
            { label: '人员临时4', value: ['4', "人员临时4"] },
            { label: '人员临时5', value: ['5', "人员临时5"] },
            { label: '人员临时6', value: ['6', "人员临时6"] },
            { label: '人员临时7', value: ['7', "人员临时7"] },
            { label: '人员临时8', value: ['8', "人员临时8"] },
            { label: '人员临时9', value: ['9', "人员临时9"] },
        ];
        this.userIdTemp = this.staffArr[0].value[0];
        this.userNameTemp = this.staffArr[0].value[1];
        // 控件
        this.msgs = [];
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
        /**
         * 2018.1.9--
         */
        // 取session当前客户
        this.ownerId = '';
        this.ownerName = '';
        // 标志
        this.hasFlag = 0; //重复标志
        this.concatFlag = 0; //联系人禁止标志
        // invalue暂存
        this.oldValue = [];
    }
    SaveCustomGroupAdminComponent.prototype.ngOnInit = function () {
        this.preSet();
    };
    SaveCustomGroupAdminComponent.prototype.preSet = function () {
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
        this.ownerId = mesg['userId']; //群主id
        this.ownerName = ch['userName']; //群主名
    };
    SaveCustomGroupAdminComponent.prototype.delArray = function (i) {
        // 删除行
        this.inValue.splice(i, 1);
        this.inValue = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.inValue);
    };
    SaveCustomGroupAdminComponent.prototype.return = function () {
        // 返回
        this.inValue = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.inValue);
        this.event.emit({
            adminDisplay: false,
            outValue: this.inValue,
            adminFlag: this.adminFlag,
        });
    };
    // 第二层模态框
    SaveCustomGroupAdminComponent.prototype.changeStaff = function (event) {
        // 下拉框选择
        // 正式需修改
        this.userIdTemp = event.value[0];
        this.userNameTemp = event.value[1];
    };
    SaveCustomGroupAdminComponent.prototype.addBtn = function () {
        // 确定返回
        // 基本校验
        var tmpFlag1 = true;
        tmpFlag1 = this.isDisable();
        if (!tmpFlag1) {
            return;
        }
        // 是否重复
        var tmpFlag3 = true;
        tmpFlag3 = this.isHave();
        if (!tmpFlag3) {
            this.addDisplay = false;
            return;
        }
        // 需修改
        this.inValue.push({
            groupZone: this.groupZone,
            userId: this.userIdTemp,
            userName: this.userNameTemp,
            statusId: '',
        });
        this.inValue = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.inValue);
        // 重置下拉框
        this.staff = '';
        this.groupZone = '';
        this.userIdTemp = this.staffArr[0].value[0];
        this.userNameTemp = this.staffArr[0].value[1];
        // 模态框
        this.addDisplay = false;
    };
    SaveCustomGroupAdminComponent.prototype.isContact = function () {
        // 是否是联系人
        if (!this.isContactPerson) {
            if (this.inValue.length >= 1) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '非联系人不可选择多条,请删除当前条或不做更改!' }];
                return false;
            }
        }
        return true;
    };
    SaveCustomGroupAdminComponent.prototype.isHave = function () {
        // 是否重复
        for (var i in this.inValue) {
            if (this.inValue[i].userId == this.userIdTemp && this.inValue[i].userName == this.userNameTemp) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '不能重复添加!' }];
                return false;
            }
        }
        return true;
    };
    SaveCustomGroupAdminComponent.prototype.isDisable = function () {
        // 基本校验
        if (!this.userIdTemp || this.userIdTemp == '') {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '角色名称不能为空!' }];
            return false;
        }
        if (this.isContactPerson && (!this.groupZone || this.groupZone == '')) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '客群区域不能为空!' }];
            return false;
        }
        return true;
    };
    // 模糊查询
    SaveCustomGroupAdminComponent.prototype.filterBrands = function (event) {
        this.filteredBrands = [];
        for (var i = 0; i < this.brands.length; i++) {
            var brand = this.brands[i];
            if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredBrands.push(brand);
            }
        }
    };
    SaveCustomGroupAdminComponent.prototype.returnInfo = function (data) {
        /**
         * 2018.1.9以下
         */
        if (data.length > 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '每次只能添加一人!' }];
            this.hasFlag = 1;
            return;
        }
        else {
            this.hasFlag = 0;
        }
        if (this.isContactPerson && data[0].tellerId === this.ownerId && data[0].tellerName === this.ownerName) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '不能添加当前用户为联系人!' }];
            this.concatFlag = 1;
            return;
        }
        else {
            this.concatFlag = 0;
        }
        /**
         * 2018.1.9以上
         */
        this.data = data;
        this.staff_info = data[0].tellerName;
        this.staff = [data[0].tellerId, data[0].tellerName];
        this.staff_display = false;
        this.addBtn2(); //2018.1.9
    };
    SaveCustomGroupAdminComponent.prototype.staffClick = function () {
        this.staff_display = true;
    };
    // 第一层模态框
    SaveCustomGroupAdminComponent.prototype.showDialog = function () {
        /**
        * 2018.1.9以下
        */
        this.oldValue = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.inValue);
        /**
         * 2018.1.9以上
         */
        this.Property = true;
        if (this.adminFlag == 1) {
            // 增加行
            // 是否是联系人
            var tmpFlag2 = true;
            tmpFlag2 = this.isContact();
            if (!tmpFlag2) {
                this.addDisplay = false;
                return;
            }
            // 重置下拉框        
            this.staff = '';
            this.groupZone = '';
            this.userIdTemp = this.staffArr[0].value[0];
            this.userNameTemp = this.staffArr[0].value[1];
            // 模态框
            this.addDisplay = true;
        }
        else {
            this.staffClick();
        }
    };
    SaveCustomGroupAdminComponent.prototype.addBtn2 = function () {
        var _this = this;
        /**
         * 2018.1.9以下
        */
        this.staff_info = '';
        if (!this.staff || this.staff.length === 0) {
            this.addDisplay = false;
            return;
        }
        /**
         * 2018.1.9以上
         */
        if (this.adminFlag == 1 || this.adminFlag == 5) {
        }
        if (this.adminFlag == 1) {
            if (this.inValue.length > 5) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '您好，群联系人最多只能为六个' }];
            }
            else {
                this.inValue.push({
                    userId: this.staff[0],
                    userName: this.staff[1],
                    groupZone: this.groupZone
                });
                this.inValue = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.inValue);
            }
        }
        else if (this.adminFlag != 5 && this.adminFlag != 3) {
            var stu = this.inValue.every(function (item) {
                _this.data.forEach(function (item_2) {
                    return item_2.userId != item.userId;
                });
            });
            if (stu) {
                this.data.forEach(function (item_3) {
                    _this.inValue.push({
                        userId: item_3.tellerId,
                        userName: item_3.tellerName,
                        groupZone: _this.groupZone
                    });
                });
                this.inValue = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.inValue);
            }
            else {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '您好，人员不能重复' }];
            }
        }
        else {
            if (this.inValue.length > 0) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '您好，只能添加一个' }];
            }
            else {
                var stu = this.inValue.every(function (item) {
                    return _this.staff[0] != item.userId;
                });
                if (stu) {
                    this.inValue.push({
                        userId: this.staff[0],
                        userName: this.staff[1],
                    });
                    this.inValue = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.inValue);
                }
                else {
                    this.msgs = [];
                    this.msgs = [{ severity: 'error', summary: '提示', detail: '您好，人员不能重复' }];
                }
            }
        }
        this.addDisplay = false;
    };
    SaveCustomGroupAdminComponent.prototype.returnInfoHide = function () {
        /**
         * 2018.1.9以下
        */
        // this.addBtn2();
        /**
         * 2018.1.9以上
         */
        this.Property = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SaveCustomGroupAdminComponent.prototype, "event", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SaveCustomGroupAdminComponent.prototype, "isContactPerson", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SaveCustomGroupAdminComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SaveCustomGroupAdminComponent.prototype, "adminFlag", void 0);
    SaveCustomGroupAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'save-customGroup-admin',
            template: __webpack_require__(/*! ./save-customGroup-admin.component.html */ "./src/app/pages/tzb/custom/custom-group/custom-group-save/save-customGroup-admin/save-customGroup-admin.component.html"),
            styles: [__webpack_require__(/*! ./save-customGroup-admin.component.scss */ "./src/app/pages/tzb/custom/custom-group/custom-group-save/save-customGroup-admin/save-customGroup-admin.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]],
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], SaveCustomGroupAdminComponent);
    return SaveCustomGroupAdminComponent;
}());



/***/ })

}]);
//# sourceMappingURL=custom-group-save-custom-group-save-module.js.map