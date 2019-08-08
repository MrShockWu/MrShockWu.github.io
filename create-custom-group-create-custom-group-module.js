(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-custom-group-create-custom-group-module"],{

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group/bean/GroupAdminInfo.bean.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group/bean/GroupAdminInfo.bean.ts ***!
  \***********************************************************************************************/
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

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group/bean/custom-group.bean.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group/bean/custom-group.bean.ts ***!
  \*********************************************************************************************/
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
        this.groupAllName = ''; // 群全称
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

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group-exam/create-custom-group-exam.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group-exam/create-custom-group-exam.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow partStyle\">\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>事项类型:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.bigClassName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>事项类型:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.littleClassName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>发起人:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.workCreateName}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>创建日期:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>{{detailList.createDate}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 boxShadow\">\r\n\r\n    <div class=\"ui-g-12 padding-0\">\r\n\r\n        <!-- 切换账号、协储员 -->\r\n        <div class=\"ui-g-12 ui_xian\"></div>\r\n        <div class=\"ui-g-12 BigTit\">\r\n            <span class=\"titBgColor active\" (click)=\"toQH(1)\" id=\"userInformation\">基本资料</span>\r\n            <span class=\"titBgColor\" (click)=\"toQH(2)\" id=\"cooperatorInformation\">群名单</span>\r\n        </div>\r\n\r\n        <!-- <header-title [Info]=\"title\"></header-title> -->\r\n        <!-- <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-2 base_info\">\r\n                基本资料：\r\n                <hr>\r\n            </div>\r\n        </div> -->\r\n        <div class=\"ui-g-12 padding-0\" *ngIf=\"tab1\">\r\n\r\n            <div class=\"ui-g-12 pad\" *ngIf=\"!opFlag\">\r\n                <div class=\"ui-g-10 ui-g-offset-1\">\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-2\">\r\n                            <label for=\"\">群编号:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8\">\r\n                            <label class=\"groupNumStyle\" (click)=\"toCustGroupView()\" *ngIf=\"property\">{{custGroupInfoBean.groupId}}</label>\r\n                            <label *ngIf=\"!property\">{{custGroupInfoBean.groupId}}</label>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-2\">\r\n                            <label for=\"\">群类型:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8\">\r\n                            <p-dropdown [options]=\"groupType\" [(ngModel)]=\"custGroupInfoBean.groupType\" disabled=\"true\" *ngIf=\"!canUp\"></p-dropdown>\r\n                            <p-dropdown [options]=\"groupType\" (onChange)=\"typeChange($event)\" [(ngModel)]=\"custGroupInfoBean.groupType\" *ngIf=\"canUp\"></p-dropdown>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 pad\">\r\n                <div class=\"ui-g-10 ui-g-offset-1\">\r\n                    <div class=\"ui-g-1\">\r\n                        <label for=\"\">群名称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-10\">\r\n                        <input type=\"text\" pInputText [(ngModel)]=\"custGroupInfoBean.groupName\" disabled=\"true\" *ngIf=\"!canUp\">\r\n                        <input type=\"text\" pInputText [(ngModel)]=\"custGroupInfoBean.groupName\" *ngIf=\"canUp\" (keyup)=\"nameChange()\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 pad\" *ngIf=\"canUp\">\r\n                <div class=\"ui-g-10 ui-g-offset-1\">\r\n                    <div class=\"ui-g-1\">\r\n                        <label for=\"\">群全称:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-10\">\r\n                        <input type=\"text\" pInputText [(ngModel)]=\"custGroupInfoBean.groupAllName\" disabled=\"true\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 pad\">\r\n                <div class=\"ui-g-10 ui-g-offset-1\">\r\n                    <div class=\"ui-g-1\">\r\n                        <label for=\"\">详细地址:</label>\r\n                    </div>\r\n                    <div class=\"ui-g-10\">\r\n                        <input type=\"text\" pInputText [(ngModel)]=\"custGroupInfoBean.address\" disabled=\"true\" *ngIf=\"!canUp\">\r\n                        <input type=\"text\" pInputText [(ngModel)]=\"custGroupInfoBean.address\" *ngIf=\"canUp\" (keyup)=\"changeValue()\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 pad\">\r\n                <div class=\"ui-g-10 ui-g-offset-1\">\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-2\">\r\n                            <label for=\"\">投向行业:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8 dropdown\">\r\n                            <div class=\"ui-g-12\">\r\n                                <p-dropdown [options]=\"firstToinvestTradeOptions\" [(ngModel)]=\"firstToinvestTrade\" disabled=\"true\" *ngIf=\"!canUp\"></p-dropdown>\r\n                                <p-dropdown [options]=\"firstToinvestTradeOptions\" [(ngModel)]=\"firstToinvestTrade\" [disabled]=\"!isHangye\" *ngIf=\"canUp\" (onChange)=\"queryTaskByIndtstry(1)\"></p-dropdown>\r\n                            </div>\r\n                            <div class=\"ui-g-12\">\r\n                                <p-dropdown [options]=\"secondToinvestTradeOptions\" [(ngModel)]=\"secondToinvestTrade\" disabled=\"true\" *ngIf=\"!canUp\"></p-dropdown>\r\n                                <p-dropdown [options]=\"secondToinvestTradeOptions\" [(ngModel)]=\"secondToinvestTrade\" [disabled]=\"!isHangye\" *ngIf=\"canUp\"\r\n                                    (onChange)=\"queryTaskByIndtstry(2)\"></p-dropdown>\r\n                            </div>\r\n                            <div class=\"ui-g-12\">\r\n                                <p-dropdown [options]=\"thirdToinvestTradeOptions\" [(ngModel)]=\"thirdToinvestTrade\" disabled=\"true\" *ngIf=\"!canUp\"></p-dropdown>\r\n                                <p-dropdown [options]=\"thirdToinvestTradeOptions\" [(ngModel)]=\"thirdToinvestTrade\" [disabled]=\"!isHangye\" *ngIf=\"canUp\" (onChange)=\"queryTaskByIndtstry(3)\"></p-dropdown>\r\n                            </div>\r\n                            <div class=\"ui-g-12\">\r\n                                <p-dropdown [options]=\"fourthToinvestTradeOptions\" [(ngModel)]=\"fourthToinvestTrade\" disabled=\"true\" *ngIf=\"!canUp\"></p-dropdown>\r\n                                <p-dropdown [options]=\"fourthToinvestTradeOptions\" [(ngModel)]=\"fourthToinvestTrade\" [disabled]=\"!isHangye\" *ngIf=\"canUp\"\r\n                                    (onChange)=\"changeValue()\"></p-dropdown>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-6\">\r\n                        <div class=\"ui-g-2\">\r\n                            <label for=\"\">所属区划:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8 dropdown\">\r\n                            <div class=\"ui-g-12\">\r\n                                <p-dropdown [options]=\"regionSHeng\" [(ngModel)]=\"regionSHeng1\" disabled=\"true\" *ngIf=\"!canUp\"></p-dropdown>\r\n                                <p-dropdown #a [options]=\"regionSHeng\" [(ngModel)]=\"regionSHeng1\" *ngIf=\"canUp\" (onChange)=\"queryZoneInfo('1',a,$event,3)\"></p-dropdown>\r\n                            </div>\r\n                            <div class=\"ui-g-12\">\r\n                                <p-dropdown [options]=\"regionCity\" [(ngModel)]=\"regionCity1\" disabled=\"true\" *ngIf=\"!canUp\"></p-dropdown>\r\n                                <p-dropdown #b [options]=\"regionCity\" [(ngModel)]=\"regionCity1\" *ngIf=\"canUp\" (onChange)=\"queryZoneInfo('2',b,$event,2)\"></p-dropdown>\r\n                            </div>\r\n                            <div class=\"ui-g-12\">\r\n                                <p-dropdown [options]=\"regionArea\" [(ngModel)]=\"regionArea1\" disabled=\"true\" *ngIf=\"!canUp\"></p-dropdown>\r\n                                <p-dropdown #c [options]=\"regionArea\" [(ngModel)]=\"regionArea1\" *ngIf=\"canUp\" (onChange)=\"queryZoneInfo('3',c,$event,1)\"></p-dropdown>\r\n                            </div>\r\n                            <div class=\"ui-g-12\">\r\n                                <p-dropdown [options]=\"regionStreet\" [(ngModel)]=\"regionStreet1\" disabled=\"true\" *ngIf=\"!canUp\"></p-dropdown>\r\n                                <p-dropdown #d [options]=\"regionStreet\" [(ngModel)]=\"regionStreet1\" *ngIf=\"canUp\" (onChange)=\"queryZoneInfo('4',d,$event,0)\"></p-dropdown>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 pad\">\r\n                <div class=\"ui-g-10 ui-g-offset-1\">\r\n                    <div class=\"ui-g-4 line\">\r\n                        <div class=\"ui-g-3\">\r\n                            <label for=\"\">群主:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-9\">\r\n                            <input type=\"text\" pInputText [(ngModel)]=\"custGroupBean.ownerName\" disabled=\"true\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 line\">\r\n                        <div class=\"ui-g-3\">\r\n                            <label for=\"\">群联系人:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-7\">\r\n                            <input type=\"text\" [(ngModel)]=\"contactRoleName\" pInputText disabled=\"true\" *ngIf=\"!canUp\">\r\n                            <input type=\"text\" [(ngModel)]=\"contactRoleName\" class=\"qlxr\" pInputText disabled=\"true\" *ngIf=\"canUp\">\r\n                            <span class=\"tabelUpdateIco\" (click)=\"editGroupAdminInfo(1)\" *ngIf=\"canUp\">编辑</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-4 line\">\r\n                        <div class=\"ui-g-3\">\r\n                            <label for=\"\">群介绍人:</label>\r\n                        </div>\r\n                        <div class=\"ui-g-7\">\r\n                            <input type=\"text\" [(ngModel)]=\"introducerRoleName\" pInputText disabled=\"true\" *ngIf=\"!canUp\">\r\n                            <input type=\"text\" [(ngModel)]=\"introducerRoleName\" class=\"qlxr\" pInputText disabled=\"true\" *ngIf=\"canUp\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"ui-g-12\" style=\"margin-top:40px;\">\r\n            <div class=\"ui-g-3 ui-g-offset-1\">\r\n                <div class=\"ui-g-4\">g\r\n                    <label for=\"\">指导师傅:</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <input type=\"text\" [(ngModel)]=\"mentorRoleName\" pInputText disabled=\"true\">\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n            <div class=\"ui-g-12 pad\">\r\n                <div class=\"ui-g-10 ui-g-offset-1\">\r\n                    <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-1\">\r\n                            <label for=\"\">备注(群描述):</label>\r\n                        </div>\r\n                        <div class=\"ui-g-10\">\r\n                            <div class=\"ui-g-12\">\r\n                                <textarea pInputTextarea [(ngModel)]=\"custGroupInfoBean.description\" disabled=\"true\" *ngIf=\"!canUp\"></textarea>\r\n                                <textarea pInputTextarea [(ngModel)]=\"custGroupInfoBean.description\" *ngIf=\"canUp\" (keyup)=\"changeValue()\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"ui-g-12 pad submitbtn\" *ngIf=\"!opFlag && taskCode == 'KHQ_HTZX_SP'\">\r\n                <button pButton label=\"名单附件下载\" (click)=\"listAttachDownload()\"></button>\r\n                <button pButton label=\"批量导入名单\" (click)=\"importList()\"></button>\r\n            </div>\r\n            <div class=\"ui-g-12 pad\" *ngIf=\"opFlag\">\r\n                <div class=\"ui-g-12\">\r\n                    <h3>删除原因:</h3>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <textarea pInputTextarea class=\"deleteResonCls\" [(ngModel)]=\"deleteReason\" disabled=\"true\"></textarea>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"ui-g-12\" *ngIf=\"tab2\">\r\n            <div class=\"ui-g-12\" *ngIf=\"canUp\">\r\n                <!-- <h3>群名单： -->\r\n                <span class=\"btn-area\">\r\n                    <button class=\"btn1\" pButton label=\"上传到后台中心\" (click)=\"import('0')\"></button>\r\n                    <button class=\"btn1\" pButton label=\"群客户导入\" (click)=\"import('1')\"></button>\r\n                    <button class=\"btn1\" pButton label=\"模板批量导入\" (click)=\"import('2')\"></button>\r\n                </span>\r\n                <!-- </h3> -->\r\n            </div>\r\n            <div class=\"ui-g-12\" style=\"margin-top:-10px;overflow-x:auto;\">\r\n                <p-dataTable [value]=\"custList\" [emptyMessage]=\"tableMesg\" [style]=\"{'text-align':'center'}\">\r\n                    <p-column header=\"行号\" [style]=\"{'width':'185px'}\">\r\n                        <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                            <span>{{i+1}}</span>\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column header=\"户序号\" field=\"doorNum\" [style]=\"{'width':'185px'}\"></p-column>\r\n                    <p-column header=\"客户号\" field=\"custNo\" [style]=\"{'width':'185px'}\"></p-column>\r\n                    <p-column header=\"客户名称\" field=\"custName\" [style]=\"{'width':'185px'}\"></p-column>\r\n                    <p-column header=\"关联关系\" field=\"relType\" [style]=\"{'width':'185px'}\">\r\n                        <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                            {{col.relType|codeValuePie:relType}}\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column header=\"详细信息\" field=\"relDesc\" [style]=\"{'width':'185px'}\"></p-column>\r\n                    <p-column header=\"联系人\" field=\"contacts\" [style]=\"{'width':'185px'}\"></p-column>\r\n                    <p-column header=\"证件类型\" field=\"idenType\" [style]=\"{'width':'185px'}\">\r\n                        <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                            {{col.idenType|codeValuePie:idenType}}\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column header=\"证件号码\" field=\"idenNum\" [style]=\"{'width':'185px'}\"></p-column>\r\n                    <p-column header=\"客户地址\" field=\"address\" [style]=\"{'width':'185px'}\"></p-column>\r\n                    <p-column header=\"手机号码\" field=\"contactWay\" [style]=\"{'width':'185px'}\"></p-column>\r\n                    <p-column header=\"所属行业\" field=\"industry\" [style]=\"{'width':'185px'}\"></p-column>\r\n                    <p-column header=\"是否目标客户\" field=\"targetCustFlag\" [style]=\"{'width':'185px'}\">\r\n                        <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                            {{col.targetCustFlag|codeValuePie:isNoValue}}\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column header=\"备注\" field=\"description\" [style]=\"{'width':'185px'}\"></p-column>\r\n                    <p-column header=\"操作\" [style]=\"{'text-align':'center','width':'100px'}\" *ngIf=\"canUp\">\r\n                        <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                            <span (click)=\"delArray(col)\" class=\"tabelDeleteIco\">删除</span>\r\n                        </ng-template>\r\n                    </p-column>\r\n                </p-dataTable>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <p-paginator rows={{listPageSize}} [first]=\"first\" totalRecords={{listTotalNum}} [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"listPaginate($event)\"></p-paginator>\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <!-- <div class=\"ui-g-12\">\r\n            <h3>审批意见：</h3>\r\n            <textarea pInputTextarea [(ngModel)]=\"spyj\"></textarea>\r\n        </div>\r\n        <div class=\"ui-g-12\" style=\"height:200px;padding-top:20px;\">\r\n            <div class=\"ui-g-2 ui-g-offset-4\">\r\n                <button pButton label=\"同意\" (click)=\"agree()\"></button>\r\n            </div>\r\n            <div class=\"ui-g-2 \">\r\n                <button pButton label=\"拒绝\" (click)=\"return()\"></button>\r\n            </div>\r\n        </div> -->\r\n    </div>\r\n\r\n    <!-- msgs -->\r\n    <p-growl [(value)]=\"msgs\" life=\"3000\"></p-growl>\r\n\r\n    <!-- 同意，拒绝comfirm -->\r\n    <p-confirmDialog header=\"提示\" appendTo=\"body\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n        <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" (click)=\"cd.accept()\"></button>\r\n            <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" (click)=\"cd.reject()\"></button>\r\n        </p-footer>\r\n    </p-confirmDialog>\r\n\r\n    <!-- 批量导入 -->\r\n    <p-dialog [(visible)]=\"batchDisplay\" *ngIf=\"batchDisplay\" modal=\"modal\" width=\"800\" height=\"800\">\r\n        <header-title [Info]=\"title1\"></header-title>\r\n        <div class=\"ui-g-12\">\r\n            <pre>\r\n                Excel文件格式说明：\r\n                Excel文件中潜在客户名称为必输项。\r\n                Excel文件最大不能超过2000行记录。\r\n                更多注意事项请查看模板中的“填报说明”。\r\n                请先下载模板：\r\n                <a href=\"{{DOWNLOAD}}/?fileUrl=/copdata/moban/&fileName=custListImport.xls\" target=\"_blank\">下载模板</a>\r\n            </pre>\r\n            <div class=\"ui-g-12\">\r\n                <strong>批量创建（Ecxel导入）</strong>\r\n                <br/>\r\n                <label for=\"\">文件导入</label>\r\n                <p-fileUpload accept=\".xls\" invalidFileTypeMessageDetail=\"只能上传Excel\" invalidFileTypeMessageSummary=\"\" chooseLabel=\"浏览\" uploadLabel=\"上传\"\r\n                    cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"onBeforeSend($event)\">\r\n                </p-fileUpload>\r\n                <div *ngIf=\"files.length>0\">\r\n                    <span *ngFor=\"let item of files\">{{item.name}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12\" style=\"text-align:center;\">\r\n            <button pButton type=\"button\" label=\"关闭\" (click)=\"closebatch()\"></button>\r\n        </div>\r\n    </p-dialog>\r\n\r\n    <!-- 导入结果返回显示 -->\r\n    <p-dialog [(visible)]=\"addDisplay\" *ngIf=\"addDisplay\" modal=\"modal\" width=\"800\">\r\n        <header-title [Info]=\"title2\"></header-title>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-6\">\r\n                <span>成功条数：</span>\r\n                <span>{{custGroupListBean.successNum}}</span>\r\n                <span>条</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span>失败条数：</span>\r\n                <span>{{custGroupListBean.failNum}}</span>\r\n                <span>条</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 table-area tab\">\r\n            <p-dataTable [emptyMessage]=\"tableMesg\" [style]=\"{'text-align':'center'}\" [value]=\"custGroupListBean.failInfoList\">\r\n                <p-column header=\"行号\">\r\n                    <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                        <span [ngClass]=\"{'err-color':col.executeFlag != 'S'}\">\r\n                            {{col.rowNum}}\r\n                        </span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column header=\"成功/失败\">\r\n                    <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                        <span [ngClass]=\"{'err-color':col.executeFlag != 'S'}\">\r\n                            {{col.executeFlag == 'S' ? '成功' : '失败'}}\r\n                        </span>\r\n                    </ng-template>\r\n                </p-column>\r\n                <p-column header=\"失败原因\">\r\n                    <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                        <span [ngClass]=\"{'err-color':col.executeFlag != 'S'}\">\r\n                            {{col.failReason}}\r\n                        </span>\r\n                    </ng-template>\r\n                </p-column>\r\n            </p-dataTable>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <button pButton type=\"button\" label=\"确定\" (click)=\"returnCustGroupList()\"></button>\r\n        </div>\r\n    </p-dialog>\r\n\r\n    <!-- 联系人等 -->\r\n    <p-dialog [(visible)]=\"adminDisplay\" width=\"900\" height=\"800\" modal=\"modal\">\r\n        <p-header>{{adminTitle}}</p-header>\r\n        <create-customGroup-admin [isContactPerson]=\"isContactPerson\" [inValue]=\"inValue\" [adminFlag]=\"adminFlag\" (event)=\"returnAdmin($event)\"></create-customGroup-admin>\r\n    </p-dialog>\r\n</div>\r\n\r\n<div class=\"ui-g-12\">\r\n    <examine-page [CustomGroupInvalue]=\"customGroupInfo\"></examine-page>\r\n</div>\r\n\r\n<!-- 导入名单 -->\r\n<p-dialog [(visible)]=\"addDisply\" *ngIf=\"addDisply\" width=\"900\" height=\"800\" modal=\"modal\" class=\"import-style\" (onHide)=\"addCall()\">\r\n    <p-header>{{addTitle}}</p-header>\r\n    <app-group-customer-import *ngIf=\"addDisply && addType == '1'\" [inValue]=\"custGroupInfoBean\" (outValue)=\"addCall($event)\"></app-group-customer-import>\r\n    <app-group-customer-batch-import *ngIf=\"addDisply && addType == '2'\" [inValue]=\"custGroupInfoBean\" (outValue)=\"addCall($event)\"></app-group-customer-batch-import>\r\n    <app-group-background-center-import *ngIf=\"addDisply && addType == '0'\" [inValue]=\"custGroupInfoBean\" (outValue)=\"addCall($event,3)\"></app-group-background-center-import>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group-exam/create-custom-group-exam.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group-exam/create-custom-group-exam.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tit {\n  text-align: right; }\n\nlabel {\n  display: inline-block;\n  width: 100px;\n  height: 28px;\n  line-height: 28px; }\n\n.base_info .ui-g-6 {\n  padding-bottom: 0;\n  padding-top: 0; }\n\n.base_info .ui-g-12 {\n  padding-bottom: 0;\n  padding-top: 0; }\n\n.importbtn {\n  text-align: right; }\n\n.groupNumStyle {\n  color: #19b0c8;\n  cursor: pointer; }\n\n.submitbtn {\n  text-align: center; }\n\n:host/deep/ .ui-datatable table {\n  text-align: center;\n  white-space: nowrap; }\n\n.table {\n  overflow-x: scroll; }\n\n.pad {\n  padding: 0; }\n\ntextarea {\n  height: 70px; }\n\n.deleteResonCls {\n  height: 100px !important; }\n\n.table-area {\n  text-align: center;\n  max-height: 660px;\n  overflow: auto; }\n\n.err-color {\n  color: rgba(255, 0, 0, 0.94); }\n\n.padding-0 > .ui-g-12 .ui-g-11 {\n  padding: 0; }\n\n.padding-0 > .ui-g-12 .ui-g-10 {\n  padding: 0; }\n\n.padding-0 > .ui-g-12 .ui-g-8 {\n  padding: 0; }\n\n.padding-0 > .ui-g-12 .ui-g-6 {\n  padding: 0; }\n\n.padding-0 > .ui-g-12 .ui-g-4 {\n  padding: 0; }\n\n.padding-0 > .ui-g-12 .ui-g-2 {\n  padding: 0; }\n\n.padding-0 > .ui-g-12 .ui-g-1 {\n  padding: 0; }\n\n.dropdown .ui-g-12 {\n  padding: 0; }\n\n.qlxr {\n  width: 80% !important; }\n\n.line {\n  line-height: 20px; }\n\n.btn-area {\n  text-align: right;\n  padding: 1em !important; }\n\n:host/deep/ .import-style .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n.ui_xian {\n  padding: 0px;\n  border-bottom: 1px #dadada solid;\n  margin: 0px 0px 14px 0px; }\n\n.BigTit {\n  display: flex;\n  flex-direction: row;\n  background: #eaeaea;\n  padding: 0; }\n\n.BigTit .titBgColor {\n    width: 230px;\n    height: 45px;\n    text-align: center;\n    line-height: 45px;\n    display: inline-block;\n    cursor: pointer; }\n\n.active {\n  background-color: #fafafa !important;\n  color: #19b0c8 !important;\n  border-bottom: 1px solid #19b0c8; }\n\n.tt {\n  width: 100%; }\n\n.tt .left-label {\n    width: 100px; }\n\n.tt .right-tx {\n    width: calc(100% - 100px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3JlYXRlLWN1c3RvbS1ncm91cC9jcmVhdGUtY3VzdG9tLWdyb3VwLWV4YW0vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tZ3JvdXBcXGNyZWF0ZS1jdXN0b20tZ3JvdXBcXGNyZWF0ZS1jdXN0b20tZ3JvdXAtZXhhbVxcY3JlYXRlLWN1c3RvbS1ncm91cC1leGFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0kscUJBQXFCO0VBQ3JCLFlBQVk7RUFFWixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBT3JCO0VBRVEsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFIdEI7RUFNUSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUl0QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUdJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSw0QkFBNEIsRUFBQTs7QUFHaEM7RUFHWSxVQUFVLEVBQUE7O0FBSHRCO0VBTVksVUFBVSxFQUFBOztBQU50QjtFQVNZLFVBQVUsRUFBQTs7QUFUdEI7RUFZWSxVQUFVLEVBQUE7O0FBWnRCO0VBZVksVUFBVSxFQUFBOztBQWZ0QjtFQWtCWSxVQUFVLEVBQUE7O0FBbEJ0QjtFQXFCWSxVQUFVLEVBQUE7O0FBS3RCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksaUJBQWlCO0VBQ2pCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLHNCQUFzQixFQUFBOztBQU8xQjtFQUNJLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsVUFBVSxFQUFBOztBQUpkO0lBTVEsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFDSSxXQUFXLEVBQUE7O0FBRGY7SUFHUSxZQUFZLEVBQUE7O0FBSHBCO0lBTVEseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS1ncm91cC9jcmVhdGUtY3VzdG9tLWdyb3VwL2NyZWF0ZS1jdXN0b20tZ3JvdXAtZXhhbS9jcmVhdGUtY3VzdG9tLWdyb3VwLWV4YW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwcHg7IC8vIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgLy8gdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG4vLyAudWktZy0ze1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgcGFkZGluZzogMDtcclxuLy8gfVxyXG4uYmFzZV9pbmZvIHtcclxuICAgIC51aS1nLTYge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLnVpLWctMTIge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW1wb3J0YnRuIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZ3JvdXBOdW1TdHlsZSB7XHJcbiAgICBjb2xvcjogIzE5YjBjODtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnN1Ym1pdGJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUgdGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxufVxyXG5cclxuLnBhZCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICAvLyB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4uZGVsZXRlUmVzb25DbHMge1xyXG4gICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUtYXJlYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXgtaGVpZ2h0OiA2NjBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uZXJyLWNvbG9yIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC45NCk7XHJcbn1cclxuXHJcbi5wYWRkaW5nLTAge1xyXG4gICAgJj4udWktZy0xMiB7XHJcbiAgICAgICAgLnVpLWctMTEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudWktZy0xMCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS1nLTgge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudWktZy02IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVpLWctNCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS1nLTIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudWktZy0xIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kcm9wZG93biAudWktZy0xMiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucWx4ciB7XHJcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWFyZWEge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAxZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmltcG9ydC1zdHlsZSAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyA6aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlLXNjcm9sbGFibGUtYm9keSB7XHJcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogMzAwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLnVpX3hpYW4ge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4ICNkYWRhZGEgc29saWQ7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMTRweCAwcHg7XHJcbn1cclxuXHJcbi5CaWdUaXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC50aXRCZ0NvbG9yIHtcclxuICAgICAgICB3aWR0aDogMjMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMTliMGM4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzE5YjBjODtcclxufVxyXG5cclxuLnR0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLmxlZnQtbGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIC5yaWdodC10eCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group-exam/create-custom-group-exam.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group-exam/create-custom-group-exam.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: CreateCustomGroupExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomGroupExamComponent", function() { return CreateCustomGroupExamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_pages_tzb_custom_custom_marketing_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/custom/custom-marketing/group/bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-marketing/group/bean/custom-group.bean.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var app_pages_tzb_exam_appr_comp_custom_custom_group_bean_updateCustGroupStatus_bean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/exam-appr-comp/custom/custom-group/bean/updateCustGroupStatus.bean */ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/updateCustGroupStatus.bean.ts");
/* harmony import */ var app_pages_tzb_exam_appr_comp_custom_custom_group_bean_ZoneInfoBean_bean__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/exam-appr-comp/custom/custom-group/bean/ZoneInfoBean.bean */ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/ZoneInfoBean.bean.ts");
/* harmony import */ var app_pages_tzb_exam_appr_comp_custom_custom_group_bean_queryParentZoneInfo_bean__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/exam-appr-comp/custom/custom-group/bean/queryParentZoneInfo.bean */ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/queryParentZoneInfo.bean.ts");
/* harmony import */ var app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/pages/tzb/custom/http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var CreateCustomGroupExamComponent = /** @class */ (function () {
    function CreateCustomGroupExamComponent(CusViewHttpService, route, httpService, router, routerInfo, commfunc, confirmationService) {
        this.CusViewHttpService = CusViewHttpService;
        this.route = route;
        this.httpService = httpService;
        this.router = router;
        this.routerInfo = routerInfo;
        this.commfunc = commfunc;
        this.confirmationService = confirmationService;
        this.property = true;
        this.nameList = [];
        this.noPromptDispaly = false;
        this.detailList = [];
        this.adjustmentTypeList = [];
        this.adjustmentModeList = [];
        this.consumeOverdrawQuotaType = [];
        this.adjustOrientation = [];
        this.tablelist = [];
        this.zhanghudanhu = false;
        this.xianedanhu = false;
        this.zhanghupiliang = false;
        this.xianepiliang = false;
        this.first = 0;
        this.totalNum = 0;
        this.canUp = false;
        this.isHistory = false;
        this.customGroupInfo = {};
        this.updataDisplay = false;
        this.Display = false;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //表格中无数据时显示的内容
        this.title = '客户群创建审核';
        this.title1 = '客户群名单批量导入';
        this.title2 = '客户群名单导入结果';
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_CUS_UPLOAD"]; //上传模板
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_CUS_DOWNLOAD"]; //下载模板
        this.fileList = []; //上传文件列表
        this.files = []; //
        this.custGroupListBean = new app_pages_tzb_custom_custom_marketing_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_6__["CustGroupListBean"](); //客户群名单
        this.batchDisplay = false; //批量导入
        this.addDisplay = false; //返回结果
        // 中间量
        this.contactRoleName = []; //群联系人
        this.introducerRoleName = []; //群介绍人
        this.mentorRoleName = []; //指导师傅
        this.contactArr = []; //群联系人
        this.introducerArr = []; //群介绍人
        this.mentorRoleArr = []; //指导师傅
        // 模态框
        this.GroupAdminInfoTitle = ''; //标题
        this.GroupAdminInfoDisplay = false;
        this.GroupAdminFlag = '';
        this.groupAdminName = '';
        this.nameInValue = {
            ownerName: '',
        };
        this.RoleName = '';
        // bean
        this.custGroupBean = new app_pages_tzb_custom_custom_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_7__["CustGroupBean"]();
        this.custGroupInfoBean = new app_pages_tzb_custom_custom_marketing_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_6__["CustGroupInfoBean"]();
        this.custGroupStatusBean = new app_pages_tzb_exam_appr_comp_custom_custom_group_bean_updateCustGroupStatus_bean__WEBPACK_IMPORTED_MODULE_8__["CustGroupStatusBean"]();
        this.zoneInfoBean = new app_pages_tzb_exam_appr_comp_custom_custom_group_bean_ZoneInfoBean_bean__WEBPACK_IMPORTED_MODULE_9__["ZoneInfoBean"](); //四级区划信息查询
        this.parentZoneInfoBean = new app_pages_tzb_exam_appr_comp_custom_custom_group_bean_queryParentZoneInfo_bean__WEBPACK_IMPORTED_MODULE_10__["ParentZoneInfoBean"](); //四级区划解析查询
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //表格中无数据时显示的内容
        this.scheduleId = ''; //审批接收业务种类编号
        this.taskCategoryId = ''; //审批接收待办Id
        this.list = ''; //审批接收data
        // 四级区划
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
        this.regionSHeng1Name = ''; //一级
        this.regionCity1Name = ''; //二级
        this.regionArea1Name = ''; //三级
        this.regionStreet1Name = ''; //四级
        this.parentZoneInfoTempNum = 4; //四级区划--查询--解析--标志
        this.queryZoneInfoTempNum = 0; //四级区划--查询--信息--标志
        this.isHangye = false;
        this.approvalResult = ''; //审批结果
        this.opFlag = false;
        this.regionArr = ['', '', '', '']; //四级区划
        this.cengJi_2 = false;
        this.cengJi_3 = false;
        this.cengJi_4 = false;
        this.fullName = '';
        this.tempName = '';
        // 模态框
        this.adminDisplay = false; //管理人员模态框显示与否
        this.adminTitle = '';
        this.isContactPerson = false; //客群区域参数显示与否
        this.inValue = [];
        this.adminFlag = 0;
        this.listPageNum = 1;
        this.listPageSize = 10;
        this.listFirst = 0;
        this.listTotalNum = 0;
        this.custList = [];
        this.addDisply = false;
        this.isNoValue = [
            { label: '是', value: '1' },
            { label: '否', value: '0' },
        ];
        this.tab1 = false;
        this.tab2 = false;
        this.groupName = '';
        //调用码值
        this.codeValues();
        this.groupType = this.code['GroupTypeCreate'];
        // 获取参数
        this.detailList = this.routerInfo.snapshot.params;
        // this.beanExam = JSON.parse(this.routerInfo.snapshot.params.dataMap)
        this.taskRate = this.routerInfo.snapshot.params['taskRate'];
        this.flag = this.routerInfo.snapshot.params['markFlag'];
        this.relType = this.code['CustomGroupRelType'];
        this.idenType = this.code['CustomGroupIdenType'];
        if (this.flag == '1') {
            this.isHistory = false;
        }
        else {
            this.isHistory = true;
        }
        if (this.taskRate == '1' && !this.isHistory) {
            this.canUp = true;
        }
        else {
            this.canUp = false;
        }
    }
    CreateCustomGroupExamComponent.prototype.ngOnInit = function () {
        this.toQH(1);
        if (this.routerInfo.snapshot.params['data']) {
            this.list = JSON.parse(this.routerInfo.snapshot.params['data']);
        }
        else {
            this.list = JSON.parse(this.routerInfo.snapshot.params.dataMap);
        }
        if (this.routerInfo.snapshot.params['markFlag'] && this.routerInfo.snapshot.params['markFlag'] == '2') {
            this.property = false;
        }
        this.queryCustList();
        this.selectCustGroupInfo();
        this.preSet();
    };
    CreateCustomGroupExamComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    // 查询名单列表
    CreateCustomGroupExamComponent.prototype.queryCustList = function () {
        var _this = this;
        // 客户群信息查询
        this.param = {
            doorNum: '',
            groupId: this.list['groupId'],
            listType: 1,
            pageNum: this.listPageNum,
            pageSize: this.listPageSize,
            statusId: '1'
        };
        this.httpService.selectCustGroupList(this.param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // console.log(data)
                _this.custList = data.custList == null ? [] : data.custList;
                _this.listTotalNum = data.totalNum;
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询信息失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.code }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    // 分页
    CreateCustomGroupExamComponent.prototype.listPaginate = function (event) {
        this.listPageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.listPageNum = currentPage;
        this.listFirst = (currentPage - 1) * this.listPageSize;
        this.queryCustList();
    };
    CreateCustomGroupExamComponent.prototype.preSet = function () {
        this.taskCode = this.routerInfo.snapshot.params['taskCode'];
        this.groupId = this.list['groupId'];
        this.globalSeqNoImage = this.routerInfo.snapshot.params['globalSeqNoImage'];
        // this.custGroupInfoBean = this.list.groupId;//查询id
        this.custGroupInfoBean = this.list;
        // 非主键
        this.custGroupInfoBean.groupName = ''; //查询name
        this.custGroupInfoBean.groupId = this.list.groupId; //查询id
        // 审批
        this.custGroupStatusBean.groupId = this.list.groupId; //审批id        
        this.custGroupStatusBean.applyType = this.list.applyType; //申请类型
        this.custGroupStatusBean.scheduleId = this.scheduleId;
        this.custGroupStatusBean.taskCategoryId = this.list.taskCategoryId; //??
        // 默认
        this.custGroupBean.bgcFlag = '0'; //后台中心默认
        //四级区划
        this.zoneInfoBean.parentZoneId = ''; //四级区划
    };
    CreateCustomGroupExamComponent.prototype.toCustGroupView = function () {
        var a = 'groupId=' + this.custGroupInfoBean.groupId;
        window.open('/#/pages/tzb/custom/custom-group/custom-group-view;' + a);
    };
    //名单附件下载
    CreateCustomGroupExamComponent.prototype.listAttachDownload = function () {
        if (!this.globalSeqNoImage || this.globalSeqNoImage == 'undefined') {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '无此附件' }];
            return;
        }
        //获取用户名及ID
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        var orgID = commonHeader.orgId;
        var userId = commonHeader.userId;
        var orgName = chName.orgName;
        var userName = chName.userName;
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1 + '';
        var datas = time.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (datas.length < 2) {
            datas = "0" + datas;
        }
        var QUERY_TIME = '' + year + month;
        window.open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_5__["TZB_HTTP_YXKQ"] + "SunIAS_V7/SunIASRequestServlet.do?UID=MOBILE&OrgID=" + orgID + "&OrgName=" + orgName + "&OrgOwner=" + orgID + "&right=0100000&PWD=cyg&UserID=" + userId + "&UserName=" + userName + "&AppID=SA&info1=BUSI_SERIAL_NO:" + this.globalSeqNoImage + ";OBJECT_NAME:APP1009;FILELEVEL:33;RIGHT:1111111;OBJECT_NAME:APP1009;QUERY_TIME:" + QUERY_TIME);
    };
    //批量导入名单
    CreateCustomGroupExamComponent.prototype.importList = function () {
        this.batchDisplay = true;
    };
    CreateCustomGroupExamComponent.prototype.selectCustGroupInfo = function () {
        var _this = this;
        // 客户群信息查询
        this.param = {
            groupId: this.list['groupId'],
            applyType: this.list['applyType'],
        };
        this.httpService.selectCustGroupInfo(this.param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custGroupInfoBean = data;
                console.log(_this.custGroupInfoBean);
                _this.custGroupInfoBean.contactList = data.contactList;
                _this.custGroupInfoBean.mentorList = data.mentorList;
                _this.contactArr = data.contactList; //群联系人
                _this.introducerArr = data.introducerList; //群介绍人
                _this.mentorRoleArr = data.mentorList; //指导师傅
                _this.custGroupBean.ownerId = data.ownerId;
                _this.custGroupBean.ownerName = data.ownerName;
                _this.custGroupInfoBean.region = data.region; //四级区划
                if (data.region && data.region != '') {
                    _this.queryParentZoneAll(data.region);
                }
                _this.parentZoneInfoBean.zoneId = _this.custGroupInfoBean.region; //四级区划 、
                if (data.subGroupType && data.subGroupType != '') {
                    _this.queryTaskByIndtstryAll(data.subGroupType);
                }
                // 群联系人
                var arr_1 = [];
                if (data.contactList) {
                    data.contactList.forEach(function (item) {
                        arr_1.push(item.roleName);
                    });
                }
                _this.contactRoleName = arr_1.join(';');
                // 群介绍人
                var arr1_1 = [];
                if (data.introducerList) {
                    data.introducerList.forEach(function (item) {
                        arr1_1.push(item.roleName);
                    });
                }
                _this.introducerRoleName = arr1_1.join(';');
                // 根据删除原因是否有值判断属于哪种审批
                if (data.deleteReason && data.deleteReason != '' && data.deleteReason != null && data.deleteReason != undefined) {
                    _this.opFlag = true;
                    _this.canUp = false;
                    _this.deleteReason = data.deleteReason;
                    _this.customGroupInfo['oprate'] = 'delete';
                    _this.selectGroupAdminInfoContact();
                    _this.selectGroupAdminInfoIntru();
                }
                else {
                    _this.opFlag = false;
                }
                if (_this.canUp) {
                    _this.changeValue();
                }
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询信息失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.code }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    CreateCustomGroupExamComponent.prototype.queryParentZoneAll = function (region) {
        var _this = this;
        var params = {
            zoneId: region
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
            if (_this.canUp) {
                if (_this.regionCity.length > 0) {
                    _this.cengJi_2 = true;
                }
                if (_this.regionArea.length > 0) {
                    _this.cengJi_3 = true;
                }
                if (_this.regionStreet.length > 0) {
                    _this.cengJi_4 = true;
                }
            }
            _this.regionSHeng = lodash__WEBPACK_IMPORTED_MODULE_12__["clone"](_this.regionSHeng);
            _this.regionCity = lodash__WEBPACK_IMPORTED_MODULE_12__["clone"](_this.regionCity);
            _this.regionArea = lodash__WEBPACK_IMPORTED_MODULE_12__["clone"](_this.regionArea);
            _this.regionStreet = lodash__WEBPACK_IMPORTED_MODULE_12__["clone"](_this.regionStreet);
            data.zoneList.forEach(function (item) {
                switch (item.parentZoneLevel) {
                    case '1':
                        _this.regionSHeng1 = item.parentZoneId, _this.regionSHeng1Name = item.parentZoneName;
                        break;
                    case '2':
                        _this.regionCity1 = item.parentZoneId, _this.regionCity1Name = item.parentZoneName;
                        break;
                    case '3':
                        _this.regionArea1 = item.parentZoneId, _this.regionArea1Name = item.parentZoneName, _this.tempName = item.parentZoneName;
                        break;
                    case '4':
                        _this.regionStreet1 = item.parentZoneId, _this.regionStreet1Name = item.parentZoneName;
                        break;
                    default: break;
                }
            });
            _this.dealGroupName('init');
        };
        this.commfunc.interfaceComFnc(this.httpService.queryParentZoneAll(params), successFnc, this.msgs);
    };
    // 处理名称
    CreateCustomGroupExamComponent.prototype.dealGroupName = function (type) {
        if (this.canUp) {
            var str = '';
            var str1 = '';
            var name_1 = this.custGroupInfoBean.groupName;
            if (this.custGroupInfoBean.groupType == '7') {
                if (this.regionStreet1) {
                    str = this.regionStreet1Name;
                    if (this.regionArea1) {
                        str = this.regionArea1Name + str;
                    }
                }
                else if (this.regionArea1) {
                    str = this.regionArea1Name;
                }
                if (str) {
                    var arrTemp = name_1.split(str);
                    if (arrTemp.length > 1) {
                        this.groupName = arrTemp[1];
                        if (type == 'init') {
                            this.custGroupInfoBean.groupName = this.groupName;
                        }
                        this.custGroupInfoBean.groupAllName = str + this.groupName;
                    }
                    else {
                        this.groupName = name_1;
                        if (type == 'init') {
                            this.custGroupInfoBean.groupName = this.groupName;
                        }
                        this.custGroupInfoBean.groupAllName = str + this.groupName;
                    }
                }
                else {
                    this.groupName = name_1;
                    if (type == 'init') {
                        this.custGroupInfoBean.groupName = this.groupName;
                    }
                    this.custGroupInfoBean.groupAllName = this.groupName;
                }
            }
            else {
                this.groupName = name_1;
                if (type == 'init') {
                    this.custGroupInfoBean.groupName = this.groupName;
                }
                this.custGroupInfoBean.groupAllName = this.groupName;
            }
            this.changeValue();
        }
    };
    // 查询群联系人
    CreateCustomGroupExamComponent.prototype.selectGroupAdminInfoContact = function () {
        var _this = this;
        var parames = {
            groupId: this.list['groupId'],
            roleType: '1',
            statusId: 1
        };
        this.httpService.selectGroupAdminInfo(parames).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.contactArr = data.roleList || [];
                var arr_2 = [];
                if (data.roleList) {
                    data.roleList.forEach(function (item) {
                        arr_2.push(item.userName);
                    });
                }
                _this.contactRoleName = arr_2.join(';');
            }
        });
    };
    // 查询群介绍人
    CreateCustomGroupExamComponent.prototype.selectGroupAdminInfoIntru = function () {
        var _this = this;
        var parames = {
            groupId: this.list['groupId'],
            roleType: '2',
            statusId: 1
        };
        this.httpService.selectGroupAdminInfo(parames).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.introducerRoleName = data.roleList || [];
                var arr_3 = [];
                if (data.roleList) {
                    data.roleList.forEach(function (item) {
                        arr_3.push(item.userName);
                    });
                }
                _this.introducerRoleName = arr_3.join(';');
            }
        });
    };
    //投向行业回显
    CreateCustomGroupExamComponent.prototype.queryTaskByIndtstryAll = function (subGroupType) {
        var _this = this;
        var params = {
            taskTypeId: subGroupType, taskTypeKey: 'indtstryType'
        };
        this.httpService.queryTaskByIndtstryAll(params).subscribe(function (data) {
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
    };
    // 客户群名单批量导入关闭
    CreateCustomGroupExamComponent.prototype.closebatch = function () {
        this.batchDisplay = false;
    };
    // 客户群名单返回结果模态框
    CreateCustomGroupExamComponent.prototype.returnCustGroupList = function () {
        this.addDisplay = false;
    };
    //批量导入
    CreateCustomGroupExamComponent.prototype.onBeforeSend = function (event) {
        var _this = this;
        // 上传点击,需跨域
        this.custGroupListBean = new app_pages_tzb_custom_custom_marketing_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_6__["CustGroupListBean"]();
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
            this.custGroupListBean.groupId = this.groupId;
            this.custGroupListBean.filePath = this.fileList[0].fileUrl;
            this.custGroupListBean.fileName = this.fileList[0].fileName;
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '获取服务器列表失败！' }];
        }
        //不需要审批
        var param = this.custGroupListBean;
        this.custGroupListBean.groupApplyFlag = '1';
        this.httpService.batchCustGroupList(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custGroupListBean.successNum = data.successNum;
                _this.custGroupListBean.failNum = data.failNum;
                data.failInfoList = data.failInfoList.filter(function (item) { return item.executeFlag == 'F'; }); //
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
    };
    //所在行政区划
    CreateCustomGroupExamComponent.prototype.queryZoneInfo = function (data, a, event, index) {
        var _this = this;
        this.regionArr[index] = a.label;
        // 四级区划再选择
        this.zoneInfoBean.parentZoneId = event.value;
        if (data == '1' || data == '2') {
            this.fullName = '';
            this.tempName = '';
            this.custGroupInfoBean.groupAllName = this.groupName;
        }
        if (data == '3') {
            if (a.label !== '请选择') {
                this.fullName = a.label;
                this.tempName = this.fullName;
                if (this.custGroupInfoBean.groupType == '7') {
                    this.custGroupInfoBean.groupAllName = this.fullName + this.groupName;
                }
            }
            else if (a.label == '请选择') {
                this.custGroupInfoBean.groupAllName = this.groupName;
            }
        }
        if (data == '4') {
            if (a.label !== '请选择') {
                this.fullName = this.tempName + a.label;
                if (this.custGroupInfoBean.groupType == '7') {
                    this.custGroupInfoBean.groupAllName = this.fullName + this.groupName;
                }
            }
            else if (a.label == '请选择') {
                this.custGroupInfoBean.groupAllName = this.tempName + this.groupName;
            }
        }
        if (data == '5') {
            if (event.value == 4) {
                this.isHangye = true;
                this.custGroupInfoBean.groupAllName = this.groupName;
            }
            else if (event.value == 7) {
                this.isHangye = false;
                this.custGroupInfoBean.groupAllName = this.fullName + this.groupName;
            }
            else {
                this.isHangye = false;
                this.custGroupInfoBean.groupAllName = this.groupName;
            }
        }
        this.cengJi_2 = true;
        this.cengJi_3 = true;
        this.cengJi_4 = true;
        if (data == '') {
            var param_zone = {
                parentZoneId: ''
            };
            //四级区划查询省
            this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.regionSHeng = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                    _this.regionSHeng.unshift({ label: '请选择', value: '' });
                    _this.regionCity = [{ label: '请选择', value: '' }];
                    _this.regionArea = [{ label: '请选择', value: '' }];
                    _this.regionStreet = [{ label: '请选择', value: '' }];
                    _this.regionCity1 = '';
                    _this.regionArea1 = '';
                    _this.regionStreet1 = '';
                }
            });
        }
        else if (data == '1') {
            if (this.regionSHeng1 == '') {
                this.regionCity = [{ label: '请选择', value: '' }];
                this.regionArea = [{ label: '请选择', value: '' }];
                this.regionStreet = [{ label: '请选择', value: '' }];
                this.regionCity1 = '';
                this.regionArea1 = '';
                this.regionStreet1 = '';
                this.regionSHeng1Name = ''; //一级
                this.regionCity1Name = ''; //二级
                this.regionArea1Name = ''; //三级
                this.regionStreet1Name = ''; //四级
                this.changeValue();
            }
            else {
                var param_zone = {
                    parentZoneId: this.regionSHeng1
                };
                //四级区划查询市
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.regionCity = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.regionCity.unshift({ label: '请选择', value: '' });
                        if (_this.regionCity.length < 2) {
                            _this.cengJi_2 = false;
                            _this.cengJi_3 = false;
                            _this.cengJi_4 = false;
                        }
                        _this.regionArea = [{ label: '请选择', value: '' }];
                        _this.regionStreet = [{ label: '请选择', value: '' }];
                        _this.regionCity1 = '';
                        _this.regionArea1 = '';
                        _this.regionStreet1 = '';
                        _this.regionSHeng1Name = a.label; //一级
                        _this.regionCity1Name = ''; //二级
                        _this.regionArea1Name = ''; //三级
                        _this.regionStreet1Name = ''; //四级
                        _this.changeValue();
                    }
                });
            }
        }
        else if (data == '2') {
            if (this.regionCity1 == '') {
                this.regionArea = [{ label: '请选择', value: '' }];
                this.regionStreet = [{ label: '请选择', value: '' }];
                this.regionArea1 = '';
                this.regionStreet1 = '';
                this.regionCity1Name = ''; //二级
                this.regionArea1Name = ''; //三级
                this.regionStreet1Name = ''; //四级
                this.cengJi_3 = false;
                this.cengJi_4 = false;
                this.changeValue();
            }
            else {
                var param_zone = {
                    parentZoneId: this.regionCity1
                };
                //四级区划查询区
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.regionArea = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.regionArea.unshift({ label: '请选择', value: '' });
                        _this.regionStreet = [{ label: '请选择', value: '' }];
                        _this.regionArea1 = '';
                        _this.regionStreet1 = '';
                        _this.regionCity1Name = a.label; //二级
                        _this.regionArea1Name = ''; //三级
                        _this.regionStreet1Name = ''; //四级
                        if (_this.regionArea.length < 2) {
                            _this.cengJi_2 = true;
                            _this.cengJi_3 = false;
                            _this.cengJi_4 = false;
                        }
                        _this.changeValue();
                    }
                });
            }
        }
        else if (data == '3') {
            if (this.regionArea1 == '') {
                this.regionStreet = [{ label: '请选择', value: '' }];
                this.regionStreet1 = '';
                this.regionArea1Name = ''; //三级
                this.regionStreet1Name = ''; //四级
                this.cengJi_4 = false;
                this.changeValue();
            }
            else {
                var param_zone = {
                    parentZoneId: this.regionArea1
                };
                //四级区划查询街道
                this.CusViewHttpService.queryZoneInfo(param_zone).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.regionStreet = _this.commfunc.listToLabelvalue(data.zoneList, 'zoneName', 'zoneId');
                        _this.regionStreet.unshift({ label: '请选择', value: '' });
                        _this.regionStreet1 = '';
                        _this.regionArea1Name = a.label; //三级
                        _this.regionStreet1Name = ''; //四级
                        if (_this.regionStreet.length < 2) {
                            _this.cengJi_2 = true;
                            _this.cengJi_3 = true;
                            _this.cengJi_4 = false;
                        }
                        _this.changeValue();
                    }
                });
            }
        }
        else if (data == '4') {
            this.regionStreet1Name = a.label; //四级
            this.changeValue();
        }
    };
    //投向行业四级区划
    CreateCustomGroupExamComponent.prototype.queryTaskByIndtstry = function (data) {
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
        this.changeValue();
    };
    CreateCustomGroupExamComponent.prototype.typeChange = function (event) {
        if (event.value == 4) {
            this.isHangye = true;
            this.queryTaskByIndtstry('');
        }
        else {
            this.isHangye = false;
            this.firstToinvestTrade = null;
            this.secondToinvestTrade = null;
            this.thirdToinvestTrade = null;
            this.fourthToinvestTrade = null;
            this.firstToinvestTradeOptions = [];
            this.secondToinvestTradeOptions = [];
            this.thirdToinvestTradeOptions = [];
            this.fourthToinvestTradeOptions = [];
        }
        this.dealGroupName('choose');
    };
    // 联系人-介绍人-指导师傅
    CreateCustomGroupExamComponent.prototype.editGroupAdminInfo = function (i) {
        // 模态框入参
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
            this.inValue = this.contactArr;
        }
        if (i == 2) {
            //群介绍人
            this.adminTitle = '群介绍人';
            this.isContactPerson = false;
            this.inValue = this.introducerArr;
        }
        if (i == 3) {
            //指导师傅
            this.adminTitle = '指导师傅';
            this.isContactPerson = false;
            this.inValue = this.mentorRoleArr;
        }
        this.adminDisplay = true;
    };
    CreateCustomGroupExamComponent.prototype.returnAdmin = function (event) {
        // 模态框出参  
        var _this = this;
        this.adminDisplay = event.adminDisplay;
        if (event.adminFlag == 1) {
            this.contactArr = [];
            this.contactRoleName = [];
            this.custGroupInfoBean.contactList = [];
            this.contactArr = event.outValue;
            this.contactArr.forEach(function (element, index) {
                _this.contactRoleName.push(_this.contactArr[index].userName);
                _this.custGroupInfoBean.contactList.push({
                    adminType: '1',
                    roleId: lodash__WEBPACK_IMPORTED_MODULE_12__["clone"](_this.contactArr[index].userId),
                    roleName: lodash__WEBPACK_IMPORTED_MODULE_12__["clone"](_this.contactArr[index].userName),
                    groupZone: lodash__WEBPACK_IMPORTED_MODULE_12__["clone"](_this.contactArr[index].groupZone),
                });
            });
            this.contactRoleName = lodash__WEBPACK_IMPORTED_MODULE_12__["clone"](this.contactRoleName);
        }
        if (event.adminFlag == 2) {
            this.introducerArr = [];
            this.introducerRoleName = [];
            this.introducerArr = event.outValue;
            for (var i in this.introducerArr) {
                this.introducerRoleName.push(this.introducerArr[i].userName);
            }
            this.introducerRoleName = lodash__WEBPACK_IMPORTED_MODULE_12__["clone"](this.introducerRoleName);
        }
        if (event.adminFlag == 3) {
            this.mentorRoleArr = [];
            this.mentorRoleName = [];
            this.mentorRoleArr = event.outValue;
            for (var i in this.mentorRoleArr) {
                this.mentorRoleName.push(this.mentorRoleArr[i].userName);
            }
            this.mentorRoleName = lodash__WEBPACK_IMPORTED_MODULE_12__["clone"](this.mentorRoleName);
        }
        this.changeValue();
    };
    CreateCustomGroupExamComponent.prototype.nameChange = function () {
        this.dealGroupName('choose');
    };
    // 改变值
    CreateCustomGroupExamComponent.prototype.changeValue = function () {
        this.customGroupInfo['groupId'] = this.custGroupInfoBean.groupId; //	//群号"/>
        this.customGroupInfo['groupName'] = this.custGroupInfoBean.groupName; //群名称"/>
        this.customGroupInfo['groupType'] = this.custGroupInfoBean.groupType; //	群类型"/>
        this.customGroupInfo['address'] = this.custGroupInfoBean.address; //	群地址"/>
        this.customGroupInfo['ownerId'] = this.custGroupBean.ownerId; //	 	群主Id"/>
        this.customGroupInfo['ownerName'] = this.custGroupBean.ownerName; //	 群主名称"/>
        this.customGroupInfo['description'] = this.custGroupInfoBean.description; //	 群描述"/>
        this.customGroupInfo['creator'] = this.custGroupInfoBean.creator; //	 	群组创建人"/>
        this.customGroupInfo['orgId'] = this.custGroupInfoBean.orgId; //	 	所属机构"/>
        this.customGroupInfo['contactList'] = this.custGroupInfoBean.contactList; //	 type="List" mode="IN" optional="true" title="群联系人列表" >
        this.customGroupInfo['groupAllName'] = this.custGroupInfoBean.groupAllName;
        // 投向行业
        this.customGroupInfo["fourthToinvestTrade"] = this.fourthToinvestTrade;
        this.customGroupInfo["thirdToinvestTrade"] = this.thirdToinvestTrade;
        this.customGroupInfo["secondToinvestTrade"] = this.secondToinvestTrade;
        this.customGroupInfo["firstToinvestTrade"] = this.firstToinvestTrade;
        // 四级区划
        this.customGroupInfo["regionStreet1"] = this.regionStreet1;
        this.customGroupInfo["regionArea1"] = this.regionArea1;
        this.customGroupInfo["regionCity1"] = this.regionCity1;
        this.customGroupInfo["regionSHeng1"] = this.regionSHeng1;
        // 展示层级
        this.customGroupInfo["cengJi_2"] = this.cengJi_2;
        this.customGroupInfo["cengJi_3"] = this.cengJi_3;
        this.customGroupInfo["cengJi_4"] = this.cengJi_4;
    };
    // 新增-名单导入
    CreateCustomGroupExamComponent.prototype.import = function (type) {
        this.addDisply = true;
        this.addTitle = '';
        this.addType = type;
        if (type == '1') {
            this.addTitle = '群客户导入';
        }
        else if (type == '2') {
            this.addTitle = '模板批量导入';
        }
    };
    // 关闭-名单导入
    CreateCustomGroupExamComponent.prototype.addCall = function (event, index) {
        this.addDisply = false;
        this.queryCustList();
        console.log(event);
        if (index == 3) {
            this.customGroupInfo["globalSeqNoImage"] = event;
            console.log(this.customGroupInfo);
        }
    };
    // 删除-客户名单
    CreateCustomGroupExamComponent.prototype.delArray = function (col) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确认要删除吗?',
            accept: function () {
                var param = {
                    optType: '1',
                    groupId: _this.custGroupInfoBean.groupId,
                    groupName: _this.route.snapshot.params['groupName'],
                    batchId: _this.route.snapshot.params['batchId'],
                    custList: [{ custNo: col.custNo }],
                };
                _this.httpService.updateCustGroupListByUser(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.queryCustList();
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
            }
        });
    };
    // 切换分基恩信息、群名单标签
    CreateCustomGroupExamComponent.prototype.toQH = function (i) {
        var _this = this;
        if (i == 1) {
            document.getElementById("userInformation").className = 'titBgColor active';
            document.getElementById("cooperatorInformation").className = 'titBgColor';
            this.tab1 = true;
            this.tab2 = false;
        }
        if (i == 2) {
            document.getElementById("userInformation").className = 'titBgColor';
            document.getElementById("cooperatorInformation").className = 'titBgColor active';
            this.tab1 = false;
            this.tab2 = true;
            if ((!this.custList) || (this.custList && this.custList.length == 0)) {
                setTimeout(function () {
                    _this.custList = [];
                });
            }
        }
    };
    CreateCustomGroupExamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-custom-group-exam',
            template: __webpack_require__(/*! ./create-custom-group-exam.component.html */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group-exam/create-custom-group-exam.component.html"),
            styles: [__webpack_require__(/*! ./create-custom-group-exam.component.scss */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group-exam/create-custom-group-exam.component.scss")],
            providers: [app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_13__["CusViewHttpService"], app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_11__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [app_pages_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_13__["CusViewHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_pages_tzb_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_11__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]])
    ], CreateCustomGroupExamComponent);
    return CreateCustomGroupExamComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module\">\r\n  <header-title [Info]=\"title\"></header-title>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-2 result\">\r\n      基本资料：\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-2 tit\">\r\n      <label for=\"\" appValidation>群名称：</label>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <input type=\"text\" pInputText (keyup)=\"nameChange()\" [(ngModel)]=\"custGroupBean.groupName\">\r\n    </div>\r\n    <div class=\"ui-g-2 tit\">\r\n      <label for=\"\" appValidation>群类型：</label>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <p-dropdown (onChange)=\"choose($event,5,a,4)\" [options]=\"groupType\" [(ngModel)]=\"custGroupBean.groupType\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"isHangye\" class=\"ui-g-12\">\r\n    <div class=\"ui-g-2 tit\">\r\n      <label for=\"\" appValidation>投向行业：</label>\r\n    </div>\r\n    <div class=\"ui-g-10 org-name\">\r\n      <p-dropdown [options]=\"firstToinvestTradeOptions\" [(ngModel)]=\"firstToinvestTrade\" (onChange)=\"queryTaskByIndtstry(1)\"></p-dropdown>\r\n      <p-dropdown [options]=\"secondToinvestTradeOptions\" [(ngModel)]=\"secondToinvestTrade\" (onChange)=\"queryTaskByIndtstry(2)\"></p-dropdown>\r\n      <p-dropdown [options]=\"thirdToinvestTradeOptions\" [(ngModel)]=\"thirdToinvestTrade\" (onChange)=\"queryTaskByIndtstry(3)\"></p-dropdown>\r\n      <p-dropdown [options]=\"fourthToinvestTradeOptions\" [(ngModel)]=\"fourthToinvestTrade\"></p-dropdown>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-2 tit\">\r\n      <span *ngIf=\"areaShow\" style=\"color:red;font-size:13px;padding:0px;\">*</span>\r\n      <label for=\"\" class=\"org-area\">所属区划：</label>\r\n    </div>\r\n    <div class=\"ui-g-4 org-name\">\r\n      <p-dropdown #a [options]=\"regionSHeng\" [(ngModel)]=\"regionSHeng1\" (onChange)=\"choose($event,1,a,3)\"></p-dropdown>\r\n      <div *ngIf=\"cengJi_2\">\r\n        <p-dropdown #b [options]=\"regionCity\" [(ngModel)]=\"regionCity1\" (onChange)=\"choose($event,2,b,2)\"></p-dropdown>\r\n      </div>\r\n      <div *ngIf=\"cengJi_3\">\r\n        <p-dropdown #c [options]=\"regionArea\" [(ngModel)]=\"regionArea1\" (onChange)=\"choose($event,3,c,1)\"></p-dropdown>\r\n      </div>\r\n      <div *ngIf=\"cengJi_4\">\r\n        <p-dropdown #d [options]=\"regionStreet\" [(ngModel)]=\"regionStreet1\" (onChange)=\"choose($event,4,d,0)\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-2 tit\">\r\n      <label>群全称：</label>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <input type=\"text\" pInputText [(ngModel)]=\"custGroupBean.groupAllName\" readonly=\"true\">\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-2 tit\">\r\n      <label for=\"\" appValidation>群主：</label>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <input type=\"text\" pInputText [(ngModel)]=\"custGroupBean.ownerName\" readonly=\"true\">\r\n    </div>\r\n    <div class=\"ui-g-2 tit\">\r\n      <span *ngIf=\"areaShow\" style=\"color:red;font-size:13px;padding:0px;\">*</span>\r\n      <label for=\"\">详细地址：</label>\r\n    </div>\r\n    <div class=\"ui-g-4 paixu\">\r\n      <input type=\"text\" pInputText [(ngModel)]=\"custGroupBean.address\">\r\n      <!-- <span (click)=\"lookMap()\" class=\"span-p6\">\r\n        <img src=\"./assets/map/img/zooms.png\" alt=\"\">\r\n      </span> -->\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-2 tit\">\r\n      <label for=\"\">群联系人：</label>\r\n    </div>\r\n    <div class=\"ui-g-4 paixu\">\r\n      <input type=\"text\" [(ngModel)]=\"contactRoleName\" placeholder=\"请点击后方的编辑图标\" pInputText readonly=\"true\">\r\n      <span class=\"tabelUpdateIco\" (click)=\"editGroupAdminInfo(1)\">编辑</span>\r\n    </div>\r\n    <div class=\"ui-g-2 tit\">\r\n      <label for=\"\">主推产品：</label>\r\n    </div>\r\n    <div class=\"ui-g-4 paixu\">\r\n      <input type=\"text\" [(ngModel)]=\"main_product\" placeholder=\"请点击后方的编辑图标\" pInputText readonly=\"true\">\r\n      <span (click)=\"mainProductEdit()\" class=\"tabelUpdateIco\">编辑</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui-g-12\">\r\n    <div class=\"ui-g-2 tit\">\r\n      <label for=\"\">备注（群描述）：</label>\r\n    </div>\r\n    <div class=\"ui-g-4\">\r\n      <textarea pInputTextarea [(ngModel)]=\"custGroupBean.description\"></textarea>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12 submitbtn\" style=\"margin-top:40px;\">\r\n    <!-- <button class=\"searchBtn\" (click)=\"loadPhoto()\">上传影像</button> -->\r\n    <button class=\"searchBtn\" (click)=\"setUp()\">下一步</button>\r\n  </div>\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<!-- comfirm -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n  <p-footer>\r\n    <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n    <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n  </p-footer>\r\n</p-confirmDialog>\r\n\r\n<!-- 联系人等 -->\r\n<p-dialog [(visible)]=\"adminDisplay\" width=\"900\" height=\"800\" modal=\"modal\">\r\n  <p-header>{{adminTitle}}</p-header>\r\n  <create-customGroup-admin [isContactPerson]=\"isContactPerson\" [inValue]=\"inValue\" [adminFlag]=\"adminFlag\" (event)=\"returnAdmin($event)\"></create-customGroup-admin>\r\n</p-dialog>\r\n\r\n<!-- 主推产品模态框 -->\r\n<p-dialog header=\"添加\" class=\"add_product\" *ngIf=\"mainDisplay\" [(visible)]=\"mainDisplay\" width=\"600\" [responsive]=\"true\" modal=\"true\">\r\n  <group-product (outValue)=\"addCall($event)\"></group-product>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tit {\n  text-align: right; }\n\n.paixu {\n  display: flex; }\n\n.importbtn {\n  text-align: right; }\n\n.submitbtn {\n  text-align: center; }\n\n:host/deep/ .ui-datatable table {\n  text-align: center;\n  table-layout: inherit;\n  white-space: nowrap; }\n\n.table {\n  overflow-x: scroll; }\n\ntextarea {\n  width: 100%;\n  height: 100px; }\n\n.diastyle {\n  height: 200px; }\n\na {\n  color: #0094D2;\n  font-weight: bold; }\n\n.org-name {\n  display: flex; }\n\n.org-name .org-area {\n    display: inline-block;\n    width: 12%;\n    text-align: right;\n    height: 28px;\n    line-height: 28px;\n    padding: 0 20px; }\n\n.result {\n  color: #19b0c8; }\n\n.p-dropdown {\n  width: 50%; }\n\n.ui-g-12 {\n  padding: 0; }\n\n:host/deep/ .add_product .ui-dialog .ui-dialog-content {\n  height: 90% !important; }\n\n.searchBtn {\n  display: inline-block;\n  height: 30px;\n  cursor: pointer;\n  background: #34cfe6;\n  color: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 15px;\n  margin-left: 15px;\n  outline: none; }\n\n@media screen and (max-width: 1280px) {\n    .searchBtn {\n      margin-left: 5px; } }\n\n.span-p6 {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3JlYXRlLWN1c3RvbS1ncm91cC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGN1c3RvbS1ncm91cFxcY3JlYXRlLWN1c3RvbS1ncm91cFxcY3JlYXRlLWN1c3RvbS1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUlJLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxhQUFhLEVBQUE7O0FBRGpCO0lBR1EscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLFVBQVUsRUFBQTs7QUFLZDtFQUNJLHNCQUFzQixFQUFBOztBQUUxQjtFQUNJLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsYUFBYSxFQUFBOztBQUNiO0lBVko7TUFXUSxnQkFBZ0IsRUFBQSxFQUV2Qjs7QUFDRDtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWdyb3VwL2NyZWF0ZS1jdXN0b20tZ3JvdXAvY3JlYXRlLWN1c3RvbS1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxhYmVsIHtcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgIHdpZHRoOiAyMyU7XHJcbi8vICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gICAgIGhlaWdodDogMjhweDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4vLyAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4vLyB9XHJcbi50aXR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4ucGFpeHV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5pbXBvcnRidG4ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5zdWJtaXRidG4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlIHRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRhYmxlLWxheW91dDogaW5oZXJpdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIC8vIHdpZHRoOiA3MCU7XHJcbiAgICAvLyBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uZGlhc3R5bGUge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogIzAwOTREMjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ub3JnLW5hbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5vcmctYXJlYXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEyJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4OyAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZXN1bHQge1xyXG4gICAgY29sb3I6ICMxOWIwYzg7XHJcbn1cclxuXHJcbi5wLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuLnVpLWctMTJ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5cclxuXHJcbjpob3N0L2RlZXAvIC5hZGRfcHJvZHVjdCAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudHtcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaEJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzRjZmU2O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCl7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxufVxyXG4uc3Bhbi1wNiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CreateCustomGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomGroupComponent", function() { return CreateCustomGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/bean/custom-group.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bean_GroupAdminInfo_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bean/GroupAdminInfo.bean */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/bean/GroupAdminInfo.bean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CreateCustomGroupComponent = /** @class */ (function () {
    function CreateCustomGroupComponent(httpService, router, routerInfo, commfunc, confirmationService, fb) {
        this.httpService = httpService;
        this.router = router;
        this.routerInfo = routerInfo;
        this.commfunc = commfunc;
        this.confirmationService = confirmationService;
        this.fb = fb;
        // 中间量
        this.title = '创建客户群';
        this.taskCategoryId = ''; //业务种类编号
        this.groupType = []; //群类型
        this.areaShow = true; //所属区划-必输
        this.contactRoleName = []; //群联系人
        this.introducerRoleName = []; //群介绍人
        this.mentorRoleName = []; //指导师傅
        this.contactArr = []; //群联系人
        this.introducerArr = []; //群介绍人
        this.mentorRoleArr = []; //指导师傅
        this.productList = []; //产品
        this.productName = '';
        // 模态框
        this.adminDisplay = false; //管理人员模态框显示与否
        this.adminTitle = '';
        this.isContactPerson = false; //客群区域参数显示与否
        this.inValue = [];
        this.adminFlag = 0;
        this.mainDisplay = false; //主推产品
        this.params_mainP = {};
        // bean
        this.custGroupBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__["CustGroupBean"]();
        this.zoneInfoBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__["ZoneInfoBean"](); //四级区划信息查询
        this.groupAdminInfoBean = new _bean_GroupAdminInfo_bean__WEBPACK_IMPORTED_MODULE_7__["GroupAdminInfoBean"](); //客户群管理人员
        // 四级
        this.regionSHeng = [];
        this.regionCity = [];
        this.regionArea = [];
        this.regionStreet = [];
        this.regionSHeng1 = ''; //一级
        this.regionCity1 = ''; //二级
        this.regionArea1 = ''; //三级
        this.regionStreet1 = ''; //四级
        this.cengJi_2 = false;
        this.cengJi_3 = false;
        this.cengJi_4 = false;
        this.parentZoneInfoTempArr = [];
        this.regionArrTemp = {}; //四级区划
        this.regionArr = ['', '', '', '']; //四级区划
        this.parentZoneInfoTempNum = 4; //四级区划--查询--解析--标志
        this.queryZoneInfoTempNum = 0; //四级区划--查询--信息--标志
        this.isHangye = false;
        // 控件
        this.msgs = [];
        this.newproduct_List = [];
        this.fullName = '';
        this.codeValues();
        this.groupType = this.code['GroupTypeCreate'];
        this.productList = this.code['productList'];
    }
    CreateCustomGroupComponent.prototype.ngOnInit = function () {
        this.createCustomGroupForm = this.fb.group({
            groupName: [''],
            groupAllName: [''],
            groupType: [''],
            firstAddress: [''],
            secondeAddress: [''],
            thirdAddress: [''],
            fourthAddress: [''],
        });
        this.preSet();
        // 四级区划
        this.queryZoneInfo(0); //四级区划
        var a = '';
        this.queryTaskByIndtstry(a);
    };
    //码值
    CreateCustomGroupComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CreateCustomGroupComponent.prototype.preSet = function () {
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
        this.contactArr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.groupAdminInfoBean.roleList); //群联系人
        this.introducerArr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.groupAdminInfoBean.roleList); //群介绍人
        this.mentorRoleArr = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.groupAdminInfoBean.roleList); //指导师傅
    };
    CreateCustomGroupComponent.prototype.queryZoneInfo = function (i) {
        var _this = this;
        // 四级区划信息查询
        this.queryZoneInfoTempNum = i; //中间量
        this.httpService.queryZoneInfo(this.zoneInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.zoneInfoBean.zoneList = data.zoneList;
                // 初始化
                var temArr = [{ label: '请选择', value: '' }];
                for (var _i = 0, _a = _this.zoneInfoBean.zoneList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    temArr.push({ label: item.zoneName, value: item.zoneId });
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
    CreateCustomGroupComponent.prototype.choose = function (event, i, a, index) {
        this.regionArr[index] = a.label;
        // 四级区划再选择
        this.zoneInfoBean.parentZoneId = event.value;
        this.queryZoneInfo(i);
        if (i === 1 || i === 2) {
            this.fullName = '';
            this.tempName = '';
            this.custGroupBean.groupAllName = this.custGroupBean.groupName;
        }
        if (i === 3) {
            if (a.label !== '请选择') {
                this.fullName = a.label;
                this.tempName = this.fullName;
                if (this.custGroupBean.groupType == '7') {
                    this.custGroupBean.groupAllName = this.fullName + this.custGroupBean.groupName;
                }
            }
            else if (a.label == '请选择') {
                this.custGroupBean.groupAllName = this.custGroupBean.groupName;
            }
        }
        if (i === 4) {
            if (a.label !== '请选择') {
                this.fullName = this.tempName + a.label;
                if (this.custGroupBean.groupType == '7') {
                    this.custGroupBean.groupAllName = this.fullName + this.custGroupBean.groupName;
                }
            }
            else if (a.label == '请选择') {
                this.custGroupBean.groupAllName = this.tempName + this.custGroupBean.groupName;
            }
        }
        //群类型
        if (i == 5) {
            if (event.value == 4) {
                this.isHangye = true;
                this.custGroupBean.groupAllName = this.custGroupBean.groupName;
            }
            else if (event.value == 7) {
                this.isHangye = false;
                this.custGroupBean.groupAllName = this.fullName + this.custGroupBean.groupName;
            }
            else {
                this.isHangye = false;
                this.custGroupBean.groupAllName = this.custGroupBean.groupName;
            }
            //必输项
            if (event.value == '4' || event.value == '5' || event.value == '6' || event.value == '10') {
                this.areaShow = false;
            }
            else {
                this.areaShow = true;
            }
        }
    };
    CreateCustomGroupComponent.prototype.regionCreate = function () {
        //四级区划传参
        if (this.custGroupBean.groupType != '4' && this.custGroupBean.groupType != '5' && this.custGroupBean.groupType != '6' && this.custGroupBean.groupType != '10') {
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
        }
        return true;
    };
    CreateCustomGroupComponent.prototype.setUp = function () {
        var _this = this;
        var arr = [];
        this.regionArr.forEach(function (element) {
            if (element != '' && arr.length < 2) {
                arr.push(element);
            }
        });
        var str = arr.reverse().join('');
        var tempFlag2 = true; //非空校验
        tempFlag2 = this.isNull();
        if (!tempFlag2) {
            return;
        }
        var tempFlag1 = true; //四级区划传参
        tempFlag1 = this.regionCreate();
        if (!tempFlag1) {
            return;
        }
        //四级区划传参
        if (this.isHangye) {
            if (this.fourthToinvestTrade != '' && this.thirdToinvestTrade != '' && this.secondToinvestTrade != '' && this.firstToinvestTrade != '') {
                if (this.fourthToinvestTrade) {
                    this.custGroupBean["subGroupType"] = this.fourthToinvestTrade;
                }
                else if (this.thirdToinvestTrade) {
                    this.custGroupBean["subGroupType"] = this.thirdToinvestTrade;
                }
                else if (this.secondToinvestTrade) {
                    this.custGroupBean["subGroupType"] = this.secondToinvestTrade;
                }
                else if (this.firstToinvestTrade) {
                    this.custGroupBean["subGroupType"] = this.firstToinvestTrade;
                }
            }
            else {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '投向行业不能为空且需要填写完整！' }];
                return false;
            }
        }
        this.adminCreate(); // 管理人员创建格式    
        this.confirmationService.confirm({
            message: '确定保存？',
            accept: function () {
                // this.custGroupBean.groupName = str + this.custGroupBean.groupName;
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
                var param = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](_this.custGroupBean);
                if (_this.custGroupBean.groupType != '7') { //村居
                    param['groupAllName'] = _this.custGroupBean.groupName;
                }
                _this.httpService.createCustGroup(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        if (data.groupId && _this.main_product) {
                            // this.productList.forEach(item => {
                            //   if (item.label == this.main_product) {
                            //     this.params_mainP = {
                            //       groupId: data.groupId,
                            //       productCode: item.value,
                            //       productName: item.label
                            //     }
                            //   }
                            // })
                            _this.params_mainP = {
                                groupId: data.groupId,
                                productCodeAndName: _this.newproduct_List
                            };
                            _this.httpService.addGroupRecProductInfo(_this.params_mainP).subscribe(function (data) {
                                if (data.returnCode.code == 'success') {
                                }
                                else {
                                    _this.msgs = [];
                                    data.returnCode.code ? data.returnCode.code : '创建失败';
                                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                                }
                            }, function (err) {
                                _this.msgs = [];
                                _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
                            });
                        }
                        _this.groupID = data.groupId;
                        _this.custGroupBean.groupId = data.groupId;
                        _this.router.navigate(['/pages/tzb/custom/custom-group/create-custom-group-next', { id: _this.custGroupBean.groupId, groupName: _this.custGroupBean.groupName, region: _this.custGroupBean.region, taskCategoryId: _this.custGroupBean.taskCategoryId }]);
                    }
                    else {
                        _this.msgs = [];
                        data.returnCode.code ? data.returnCode.code : '创建失败';
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
                });
            }
        });
    };
    // 联系人-介绍人-指导师傅
    CreateCustomGroupComponent.prototype.editGroupAdminInfo = function (i) {
        // 模态框入参
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
            this.inValue = this.contactArr;
        }
        if (i == 2) {
            //群介绍人
            this.adminTitle = '群介绍人';
            this.isContactPerson = false;
            this.inValue = this.introducerArr;
        }
        if (i == 3) {
            //指导师傅
            this.adminTitle = '指导师傅';
            this.isContactPerson = false;
            this.inValue = this.mentorRoleArr;
        }
        this.adminDisplay = true;
    };
    CreateCustomGroupComponent.prototype.returnAdmin = function (event) {
        // 模态框出参  
        this.adminDisplay = event.adminDisplay;
        if (event.adminFlag == 1) {
            this.contactArr = [];
            this.contactRoleName = [];
            this.contactArr = event.outValue;
            for (var i in this.contactArr) {
                this.contactRoleName.push(this.contactArr[i].userName);
            }
            this.contactRoleName = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.contactRoleName);
        }
        if (event.adminFlag == 2) {
            this.introducerArr = [];
            this.introducerRoleName = [];
            this.introducerArr = event.outValue;
            for (var i in this.introducerArr) {
                this.introducerRoleName.push(this.introducerArr[i].userName);
            }
            this.introducerRoleName = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.introducerRoleName);
        }
        if (event.adminFlag == 3) {
            this.mentorRoleArr = [];
            this.mentorRoleName = [];
            this.mentorRoleArr = event.outValue;
            for (var i in this.mentorRoleArr) {
                this.mentorRoleName.push(this.mentorRoleArr[i].userName);
            }
            this.mentorRoleName = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](this.mentorRoleName);
        }
    };
    CreateCustomGroupComponent.prototype.adminCreate = function () {
        // 管理人员创建格式
        for (var _i = 0, _a = this.contactArr; _i < _a.length; _i++) {
            var item = _a[_i];
            this.custGroupBean.contactList.push({
                adminType: '1',
                roleId: lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](item.userId),
                roleName: lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](item.userName),
                groupZone: lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](item.groupZone),
            });
        }
        for (var _b = 0, _c = this.introducerArr; _b < _c.length; _b++) {
            var item = _c[_b];
            this.custGroupBean.introducerList.push({
                adminType: '2',
                roleId: lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](item.userId),
                roleName: lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](item.userName),
            });
        }
        for (var _d = 0, _e = this.mentorRoleArr; _d < _e.length; _d++) {
            var item = _e[_d];
            this.custGroupBean.mentorList.push({
                adminType: '3',
                roleId: lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](item.userId),
                roleName: lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](item.userName),
            });
        }
    };
    // 其他
    CreateCustomGroupComponent.prototype.isNull = function () {
        // 非空校验
        if (!this.custGroupBean.groupType || this.custGroupBean.groupType.search(/^\S+$/)) {
            // 群类型
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '群类型不能为空！' }];
            return false;
        }
        if (!this.custGroupBean.groupName || this.custGroupBean.groupName.search(/^\S+$/)) {
            // 群名称
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '群名称不能为空且不能有空格！' }];
            return false;
        }
        // if (this.regionStreet1 && this.regionStreet1 != '') {
        //   this.custGroupBean.region = this.regionStreet1;
        // }
        // else if (this.regionArea1 && this.regionArea1 != '') {
        //   this.custGroupBean.region = this.regionArea1;
        // }
        // else if (this.regionCity1 && this.regionCity1 != '') {
        //   this.custGroupBean.region = this.regionCity1;
        // }
        // else if (this.regionSHeng1 && this.regionSHeng1 != '') {
        //   this.custGroupBean.region = this.regionSHeng1;
        // }
        // else {
        //   this.msgs = [];
        //   this.msgs = [{ severity: 'error', summary: '提示', detail: '区划地址不能为空！' }];
        //   return false;
        // }
        if (this.custGroupBean.groupType != '4' && this.custGroupBean.groupType != '5' && this.custGroupBean.groupType != '6' && this.custGroupBean.groupType != '10') {
            if (this.regionSHeng1 == '') {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '所属区划-省份不能为空！' }];
                return false;
            }
            else if (this.cengJi_2 && this.regionCity1 == '' && this.regionCity[1].label != undefined) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '所属区划-城市不能为空！' }];
                return false;
            }
            else if (this.cengJi_3 && this.regionArea1 == '' && this.regionArea[1].label != undefined) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '所属区划-地区不能为空！' }];
                return false;
            }
            else if (this.cengJi_4 && this.regionStreet1 == '' && this.regionStreet[1].label != undefined) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '所属区划-街道不能为空！' }];
                return false;
            }
            if (!this.custGroupBean.address || this.custGroupBean.address.search(/^\S+$/)) {
                // 群地址
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '详细地址不能为空且不能有空格！' }];
                return false;
            }
        }
        // else {
        //   this.msgs = [];
        //   this.msgs = [{ severity: 'error', summary: '提示', detail: '区划地址不能为空！' }];
        //   return false;
        // }
        if (!this.custGroupBean.creator || this.custGroupBean.creator.search(/^\S+$/)) {
            // 群组创建人
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '群组创建人不能为空且不能有空格！' }];
            return false;
        }
        if (!this.custGroupBean.ownerId || this.custGroupBean.ownerId.search(/^\S+$/)) {
            // 分组所有者ID
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '群主ID不能为空且不能有空格！' }];
            return false;
        }
        if (!this.custGroupBean.ownerName || this.custGroupBean.ownerName.search(/^\S+$/)) {
            // 群主名
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '群主名不能为空且不能有空格！' }];
            return false;
        }
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
    CreateCustomGroupComponent.prototype.mainProductEdit = function () {
        this.mainDisplay = true;
    };
    CreateCustomGroupComponent.prototype.mainProductAdd = function () {
        var _this = this;
        this.mainDisplay = false;
        this.productList.some(function (item) {
            if (item.value == _this.productCode) {
                _this.main_product = item.label;
                return false;
            }
        });
    };
    //投向行业四级区划
    CreateCustomGroupComponent.prototype.queryTaskByIndtstry = function (data) {
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
    CreateCustomGroupComponent.prototype.typeChange = function (event) {
        if (event.value == 4) {
            this.isHangye = true;
        }
        else {
            this.isHangye = false;
        }
        // if (event.value == '4' || event.value == '5' || event.value == '6' || event.value == '10') {
        //   this.areaShow = false;
        // } else {
        //   this.areaShow = true;
        // }
        // // 三期优化：当群类型为“村居（码值为7）”时，根据所属区划3，4级内容与手工录入的群名称拼接成一个群全称
        // if(event.value === '7'){
        //    this.custGroupBean.groupFullName = this.fullName + this.custGroupBean.groupName;
        // }else{
        //   this.custGroupBean.groupFullName = this.custGroupBean.groupName;
        // }
    };
    CreateCustomGroupComponent.prototype.nameChange = function () {
        if (this.custGroupBean.groupType === '7' && (this.regionArea1 != '' || this.regionStreet1 != '')) {
            this.custGroupBean.groupAllName = this.fullName + this.custGroupBean.groupName;
        }
        else {
            this.custGroupBean.groupAllName = this.custGroupBean.groupName;
        }
    };
    //主推产品回调
    CreateCustomGroupComponent.prototype.addCall = function (event) {
        this.newproduct_List = event;
        this.mainDisplay = false;
        var arr = [];
        for (var _i = 0, event_1 = event; _i < event_1.length; _i++) {
            var item = event_1[_i];
            arr.push(item.productName);
        }
        this.main_product = arr.toString();
    };
    // 上传影像
    CreateCustomGroupComponent.prototype.loadPhoto = function () {
    };
    // 显示群定位
    CreateCustomGroupComponent.prototype.lookMap = function () {
        window.open('/#/pages/tzb/custom/custom-group/custom-group-view/customGroup-list-map');
    };
    CreateCustomGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-custom-group',
            template: __webpack_require__(/*! ./create-custom-group.component.html */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group.component.html"),
            styles: [__webpack_require__(/*! ./create-custom-group.component.scss */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])
    ], CreateCustomGroupComponent);
    return CreateCustomGroupComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: CreateCustomGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomGroupModule", function() { return CreateCustomGroupModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _create_custom_group_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-custom-group.routing */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group.routing.ts");
/* harmony import */ var _create_custom_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-custom-group.component */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group.component.ts");
/* harmony import */ var _create_customGroup_admin_create_customGroup_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-customGroup-admin/create-customGroup-admin.component */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-customGroup-admin/create-customGroup-admin.component.ts");
/* harmony import */ var _group_product_group_product_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./group-product/group-product.module */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/group-product/group-product.module.ts");
/* harmony import */ var app_pages_tzb_custom_commonComponent_commonComponent_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/pages/tzb/custom/commonComponent/commonComponent.module */ "./src/app/pages/tzb/custom/commonComponent/commonComponent.module.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_create_custom_group_create_custom_group_exam_create_custom_group_exam_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group-exam/create-custom-group-exam.component */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group-exam/create-custom-group-exam.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//客户群组
var CreateCustomGroupModule = /** @class */ (function () {
    function CreateCustomGroupModule() {
    }
    CreateCustomGroupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _create_custom_group_routing__WEBPACK_IMPORTED_MODULE_4__["CreateCustomGroupRouting"],
                _group_product_group_product_module__WEBPACK_IMPORTED_MODULE_7__["GroupProductModule"],
                app_pages_tzb_custom_commonComponent_commonComponent_module__WEBPACK_IMPORTED_MODULE_8__["CommonComponentModule"]
            ],
            declarations: [
                _create_custom_group_component__WEBPACK_IMPORTED_MODULE_5__["CreateCustomGroupComponent"],
                _create_customGroup_admin_create_customGroup_admin_component__WEBPACK_IMPORTED_MODULE_6__["CreateCustomGroupAdminComponent"],
                app_pages_tzb_custom_custom_group_create_custom_group_create_custom_group_exam_create_custom_group_exam_component__WEBPACK_IMPORTED_MODULE_9__["CreateCustomGroupExamComponent"],
            ],
            exports: [],
            providers: []
        })
    ], CreateCustomGroupModule);
    return CreateCustomGroupModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group.routing.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group.routing.ts ***!
  \**************************************************************************************************/
/*! exports provided: routes, CreateCustomGroupRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomGroupRouting", function() { return CreateCustomGroupRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_custom_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-custom-group.component */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group.component.ts");
/* harmony import */ var app_pages_tzb_custom_custom_group_create_custom_group_create_custom_group_exam_create_custom_group_exam_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group-exam/create-custom-group-exam.component */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-custom-group-exam/create-custom-group-exam.component.ts");



//客户群组
// import { CustomGroupDeleteComponent } from './custom-group-delete/custom-group-delete.component';//客户群-删除客户群
var routes = [
    {
        path: '', component: _create_custom_group_component__WEBPACK_IMPORTED_MODULE_1__["CreateCustomGroupComponent"],
    },
    {
        path: 'create-custom-group-exam', component: app_pages_tzb_custom_custom_group_create_custom_group_create_custom_group_exam_create_custom_group_exam_component__WEBPACK_IMPORTED_MODULE_2__["CreateCustomGroupExamComponent"],
    }
];
var CreateCustomGroupRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-customGroup-admin/create-customGroup-admin.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group/create-customGroup-admin/create-customGroup-admin.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module basis-group\">\r\n    <div style=\"text-align:right;\">\r\n        <span class=\"icoColor\" (click)=\"showDialog()\">增加</span>\r\n    </div>\r\n    <div class=\"ui-g-12 tab base-table\">\r\n        <p-dataTable [style]=\"{'text-align':'center'}\" [emptyMessage]=\"tableMesg\" [value]=\"inValue\" id=\"groupTable\">\r\n            <p-column header=\"客群区域\" *ngIf=\"isContactPerson\">\r\n                <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <input type=\"text\" pInputText [disabled]=\"true\" [(ngModel)]=\"inValue[i].groupZone\">\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"联系人工号\">\r\n                <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <input [disabled]=\"true\" type=\"text\" pInputText [(ngModel)]=\"inValue[i].userId\">\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"联系人姓名\">\r\n                <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <input [disabled]=\"true\" type=\"text\" pInputText [(ngModel)]=\"inValue[i].userName\">\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"操作\">\r\n                <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <span (click)=\"delArray(i)\" class=\"tabelDeleteIco\">删除</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12 btn-submit tab\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"return()\"></button>\r\n    </div>\r\n</div>\r\n<!-- <p-dialog header=\"添加\" [(visible)]=\"addDisplay\" width=\"600\" [responsive]=\"true\" [contentStyle]=\"{height:800}\">\r\n    <div class=\"basis-group ui-g-12 module diastyle\">\r\n        <div class=\"ui-g\" >\r\n            <div class=\"ui-g-12 ui-md-2\">\r\n                <label>人员:</label> \r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-2\"> -->\r\n<!-- <p-autoComplete [(ngModel)]=\"brand\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterBrands($event)\" [size]=\"30\" [minLength]=\"1\"\r\n                    placeholder=\"请输入行员名或行员号\" [dropdown]=\"true\">\r\n                    <ng-template let-brand pTemplate=\"item\">\r\n                        <div class=\"ui-helper-clearfix\" style=\"border-bottom:1px solid #D5D5D5\">\r\n                            <div style=\"font-size:18px;float:right;margin:10px 10px 0 0\">{{brand}}</div>\r\n                        </div>\r\n                    </ng-template>\r\n                </p-autoComplete> -->\r\n<!-- <input  type=\"text\" pInputText [(ngModel)]=\"staff_info\" (click)='staffClick()'> -->\r\n<!-- <p-dropdown [(ngModel)]=\"staff\" (onChange)=\"changeStaff($event)\" [options]=\"staffArr\"></p-dropdown> -->\r\n<!-- </div>\r\n        </div>\r\n        <div *ngIf=\"isContactPerson\" class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-2\">客群区域:</div>\r\n            <div class=\"ui-g-12 ui-md-2\"> <input type=\"text\" pInputText [(ngModel)]=\"groupZone\"></div>\r\n        </div>\r\n    </div>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" (click)=\"addBtn2()\" style=\"color:#fff;\" label=\"是\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" (click)=\"addDisplay=false\" style=\"color:#fff;\" label=\"否\"></button>\r\n    </p-footer>\r\n</p-dialog> -->\r\n\r\n<!-- msg -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n<p-dialog *ngIf=\"staff_display\" [(visible)]=\"staff_display\" width=\"1500\" height=\"800\" (onHide)=\"returnInfoHide()\" class=\"queryUserDialog\">\r\n    <p-header>\r\n        选择人员\r\n    </p-header>\r\n    <queryUser *ngIf=\"Property\" (outValue)=\"returnInfo($event)\"></queryUser>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-customGroup-admin/create-customGroup-admin.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group/create-customGroup-admin/create-customGroup-admin.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-dialog .ui-dialog-content {\n  overflow: inherit !important; }\n\n.tab {\n  text-align: center; }\n\n.btn-batch-import2 {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.ui-dialog-mask, .ui-widget-overlay {\n  z-index: 1000 !important; }\n\n.diastyle {\n  text-align: center;\n  height: 300px;\n  overflow: inherit; }\n\n.diastyle label {\n    width: 100%;\n    height: 28px;\n    line-height: 28px; }\n\n:host/deep/ .queryUserDialog .ui-dialog.ui-shadow {\n  z-index: 999 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3JlYXRlLWN1c3RvbS1ncm91cC9jcmVhdGUtY3VzdG9tR3JvdXAtYWRtaW4vRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tZ3JvdXBcXGNyZWF0ZS1jdXN0b20tZ3JvdXBcXGNyZWF0ZS1jdXN0b21Hcm91cC1hZG1pblxcY3JlYXRlLWN1c3RvbUdyb3VwLWFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQTRCLEVBQUE7O0FBRWhDO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksaUJBQ0osRUFBQTs7QUFDQTtFQUNJLHdCQUF3QixFQUFBOztBQUU1QjtFQUNJLGtCQUFpQjtFQUNqQixhQUFZO0VBQ1osaUJBQWdCLEVBQUE7O0FBSHBCO0lBS1EsV0FBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWdyb3VwL2NyZWF0ZS1jdXN0b20tZ3JvdXAvY3JlYXRlLWN1c3RvbUdyb3VwLWFkbWluL2NyZWF0ZS1jdXN0b21Hcm91cC1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50e1xyXG4gICAgb3ZlcmZsb3c6IGluaGVyaXQgIWltcG9ydGFudDtcclxufVxyXG4udGFiIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnRuLWJhdGNoLWltcG9ydDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50ZXh0LXJpZ2h0e1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHRcclxufVxyXG4udWktZGlhbG9nLW1hc2ssLnVpLXdpZGdldC1vdmVybGF5e1xyXG4gICAgei1pbmRleDogMTAwMCAhaW1wb3J0YW50O1xyXG59XHJcbi5kaWFzdHlsZXtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgaGVpZ2h0OjMwMHB4O1xyXG4gICAgb3ZlcmZsb3c6aW5oZXJpdDtcclxuICAgIGxhYmVse1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAucXVlcnlVc2VyRGlhbG9nIC51aS1kaWFsb2cudWktc2hhZG93IHtcclxuICAgIHotaW5kZXg6IDk5OSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-customGroup-admin/create-customGroup-admin.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group/create-customGroup-admin/create-customGroup-admin.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: CreateCustomGroupAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomGroupAdminComponent", function() { return CreateCustomGroupAdminComponent; });
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






var CreateCustomGroupAdminComponent = /** @class */ (function () {
    /**
     *--2018.1.9
     */
    function CreateCustomGroupAdminComponent(httpService, router, routerInfo, commfunc) {
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
    CreateCustomGroupAdminComponent.prototype.ngOnInit = function () {
        this.preSet();
    };
    CreateCustomGroupAdminComponent.prototype.preSet = function () {
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
    CreateCustomGroupAdminComponent.prototype.delArray = function (i) {
        // 删除行
        this.inValue.splice(i, 1);
        this.inValue = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.inValue);
    };
    CreateCustomGroupAdminComponent.prototype.return = function () {
        // 返回
        this.inValue = lodash__WEBPACK_IMPORTED_MODULE_2__["clone"](this.inValue);
        this.event.emit({
            adminDisplay: false,
            outValue: this.inValue,
            adminFlag: this.adminFlag,
        });
    };
    // 第二层模态框
    CreateCustomGroupAdminComponent.prototype.changeStaff = function (event) {
        // 下拉框选择
        // 正式需修改
        this.userIdTemp = event.value[0];
        this.userNameTemp = event.value[1];
    };
    CreateCustomGroupAdminComponent.prototype.addBtn = function () {
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
    CreateCustomGroupAdminComponent.prototype.isContact = function () {
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
    CreateCustomGroupAdminComponent.prototype.isHave = function () {
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
    CreateCustomGroupAdminComponent.prototype.isDisable = function () {
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
    CreateCustomGroupAdminComponent.prototype.filterBrands = function (event) {
        this.filteredBrands = [];
        for (var i = 0; i < this.brands.length; i++) {
            var brand = this.brands[i];
            if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredBrands.push(brand);
            }
        }
    };
    CreateCustomGroupAdminComponent.prototype.returnInfo = function (data) {
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
        console.log(data);
        var stu = this.inValue.every(function (item) {
            var stu_2 = data.every(function (item_2) {
                return item_2.tellerId != item.userId;
            });
            return stu_2;
        });
        if (stu) {
            // data.forEach(item_3 => {
            //     this.inValue.push({
            //         userId: item_3.tellerId,
            //         userName: item_3.tellerName,
            //     })
            // });
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '您好，人员不能重复' }];
            return;
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
    CreateCustomGroupAdminComponent.prototype.staffClick = function () {
        this.staff_display = true;
    };
    // 第一层模态框
    CreateCustomGroupAdminComponent.prototype.showDialog = function () {
        /**
        * 2018.1.9以下
        */
        this.staff_display = true;
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
        this.addBtn2();
    };
    CreateCustomGroupAdminComponent.prototype.addBtn2 = function () {
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
    CreateCustomGroupAdminComponent.prototype.returnInfoHide = function () {
        /**
         * 2018.1.9以下
        */
        // this.addBtn2();
        /**
         * 2018.1.9以上
         */
        // this.Property = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CreateCustomGroupAdminComponent.prototype, "event", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CreateCustomGroupAdminComponent.prototype, "isContactPerson", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CreateCustomGroupAdminComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CreateCustomGroupAdminComponent.prototype, "adminFlag", void 0);
    CreateCustomGroupAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'create-customGroup-admin',
            template: __webpack_require__(/*! ./create-customGroup-admin.component.html */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-customGroup-admin/create-customGroup-admin.component.html"),
            styles: [__webpack_require__(/*! ./create-customGroup-admin.component.scss */ "./src/app/pages/tzb/custom/custom-group/create-custom-group/create-customGroup-admin/create-customGroup-admin.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"]])
    ], CreateCustomGroupAdminComponent);
    return CreateCustomGroupAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/ZoneInfoBean.bean.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/ZoneInfoBean.bean.ts ***!
  \****************************************************************************************/
/*! exports provided: ZoneInfoBean, zoneList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneInfoBean", function() { return ZoneInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoneList", function() { return zoneList; });
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

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/queryParentZoneInfo.bean.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/queryParentZoneInfo.bean.ts ***!
  \***********************************************************************************************/
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

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/updateCustGroupStatus.bean.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/updateCustGroupStatus.bean.ts ***!
  \*************************************************************************************************/
/*! exports provided: CustGroupStatusBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustGroupStatusBean", function() { return CustGroupStatusBean; });
var CustGroupStatusBean = /** @class */ (function () {
    function CustGroupStatusBean() {
        this.groupId = ''; //群号
        this.apprResult = ''; //审批结果
        this.applyType = ''; //申请类型
        this.taskCategoryId = ''; //业务种类编号
        this.scheduleId = ''; //待办Id
        this.remark = ''; //描述
    }
    return CustGroupStatusBean;
}());



/***/ })

}]);
//# sourceMappingURL=create-custom-group-create-custom-group-module.js.map