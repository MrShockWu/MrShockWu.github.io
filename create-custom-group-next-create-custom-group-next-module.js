(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-custom-group-next-create-custom-group-next-module"],{

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group-next/bean/GroupAdminInfo.bean.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group-next/bean/GroupAdminInfo.bean.ts ***!
  \****************************************************************************************************/
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

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group-next/bean/custom-group.bean.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group-next/bean/custom-group.bean.ts ***!
  \**************************************************************************************************/
/*! exports provided: CustGroupBean, CustGroupListBean3, CustGroupListBean4, contactList, introducerList, mentorList, ZoneInfoBean, zoneList, custList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustGroupBean", function() { return CustGroupBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustGroupListBean3", function() { return CustGroupListBean3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustGroupListBean4", function() { return CustGroupListBean4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactList", function() { return contactList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introducerList", function() { return introducerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mentorList", function() { return mentorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneInfoBean", function() { return ZoneInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoneList", function() { return zoneList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custList", function() { return custList; });
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

var CustGroupListBean3 = /** @class */ (function () {
    function CustGroupListBean3() {
        // 批量导入多出
        this.filePath = ''; //文件路径
        this.fileName = ''; //文件名
        this.failNum = 0; //失败条数
        this.failReason = ''; //失败原因
        // 查询
        this.listType = ''; //名单类型
        this.custNum = ''; //客户数
        this.doorNum = ''; //户数    
        this.groupId = ''; //群号
        this.groupName = ''; //群名称
        this.pageNum = 1; //当前页数
        this.pageSize = 10; //每页条数
        this.totalNum = 0; //客户名单数
        this.custList = []; //客户名单列表
        this.custMap = []; //客户名单列表2
    }
    return CustGroupListBean3;
}());

var CustGroupListBean4 = /** @class */ (function () {
    function CustGroupListBean4() {
        // 批量导入多出
        this.filePath = ''; //文件路径
        this.fileName = ''; //文件名
        this.failNum = 0; //失败条数
        this.failReason = ''; //失败原因
        // 查询
        this.listType = ''; //名单类型
        this.custNum = ''; //客户数
        this.doorNum = ''; //户数    
        this.groupId = ''; //群号
        this.groupName = ''; //群名称
        this.pageNum = 1; //当前页数
        this.pageSize = 10; //每页条数
        this.totalNum = 0; //客户名单数
        this.custList = []; //客户名单列表
        this.custMap = []; //客户名单列表2
    }
    return CustGroupListBean4;
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

var custList = /** @class */ (function () {
    function custList() {
        this.doorNum = ''; //户序号
        this.custNo = ''; //客户号
        this.custName = ''; //客户名称
        this.relType = ''; //关联关系
        // relType :string='';
        this.relDesc = ''; //详细信息
        this.contacts = ''; //联系人
        this.contactWay = ''; //联系方式
        this.idenType = ''; //证件类型
        this.idenNum = ''; //证件号码
        this.address = ''; //客户地址
        this.telNum = ''; //手机号码
        this.industry = ''; //所属行业
        this.description = ''; //备注
        this.xnkBz = ''; //兴农卡目标客户
        this.hzdbjjFlag = ''; //户主担保基金目标客户
        this.cdhykFlag = ''; //存贷合一卡目标客户
        this.syydFlag = ''; //商赢易贷目标客户
        this.xydFlag = ''; //薪易贷目标客户
        this.xjdFlag = ''; //薪金贷目标客户
        this.fydFlag = ''; //房易贷目标客户
        this.khjskhFlag = ''; //客户介绍客户目标客户
        this.qtywFlag = ''; //其他业务目标客户
        this.xxfFlag = ''; //薪消费目标客户
        this.ajdFlag = ''; //安居贷目标客户
        this.statusCode = ''; //状态码
    }
    return custList;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group-next/bean/queryParentZoneInfo.bean.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group-next/bean/queryParentZoneInfo.bean.ts ***!
  \*********************************************************************************************************/
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

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group-next/create-custom-group-next.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group-next/create-custom-group-next.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 module saveCustom\">\r\n    <header-title [Info]=\"title\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <p-tabView (onChange)='tabViewChange($event)'>\r\n            <p-tabPanel header=\"上传到后台中心\">\r\n                <div class=\"ui-g-12\">\r\n                    <strong>批量创建（Ecxel导入）</strong>\r\n                    <br/>\r\n                    <label for=\"\">文件导入</label>\r\n                    <p-fileUpload chooseLabel=\"浏览\" uploadLabel=\"上传\" cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"loadAfter($event)\"\r\n                        multiple=\"multiple\">\r\n                    </p-fileUpload>\r\n                    <div class=\"table-area2\" *ngIf=\"files.length>0\">\r\n                        <span *ngFor=\"let item of files\">{{item.name}}</span>\r\n                    </div>\r\n                </div>\r\n            </p-tabPanel>\r\n            <p-tabPanel header=\"群客户导入\">\r\n                <!-- 群客户导入 -->\r\n                <div class=\"basis-group ui-g-12 module\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"ui-g-12\">\r\n                            <p-dataTable class=\"tab\" [value]=\"custGroupListBean3.custList\" [emptyMessage]=\"tableMesg\" class=\"groupTabBottom\" editable=\"true\"\r\n                                id=\"groupTable\" scrollable=\"true\">\r\n                                <p-column header=\"行号\" [style]=\"{'text-align':'center','width':'100px'}\">\r\n                                    <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                        <span>{{i+1}}</span>\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column header=\"户序号\" [style]=\"{'text-align':'center','width':'150px'}\">\r\n                                    <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                        <input type=\"text\" pInputText [(ngModel)]=\"col.doorNum\">\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column header=\"客户号\" [style]=\"{'text-align':'center','width':'180px'}\">\r\n                                    <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                        <input #a type=\"text\" pInputText (input)=\"selectCustBriefInfo($event,i,a)\" [(ngModel)]=\"col.custNo\">\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column class=\"ui-g-11\" header=\"客户名称\" [style]=\"{'text-align':'center','width':'200px'}\">\r\n                                    <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                        <div class=\"ui-g-12\">\r\n                                            <div class=\"ui-g-11\">\r\n                                                <input type=\"text\" class=\"ui-g-11\" pInputText [(ngModel)]=\"col.custName\" style=\"outline:none;min-width:90%;\">\r\n\r\n                                            </div>\r\n\r\n                                            <div appValidation class=\"ui-g-1\" style=\"padding:0px;\"></div>\r\n                                        </div>\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column header=\"关联关系\" [style]=\"{'text-align':'center','width':'200px'}\">\r\n                                    <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                        <div class=\"ui-g-12 customGroupViewDropdown\" style=\"padding:0px;\">\r\n                                            <p-dropdown [options]=\"relType\" [(ngModel)]=\"col.relType\"></p-dropdown>\r\n                                        </div>\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column header=\"详细信息\" [style]=\"{'text-align':'center','width':'200px'}\">\r\n                                    <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                        <input type=\"text\" pInputText [(ngModel)]=\"col.relDesc\">\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column header=\"联系人\" [style]=\"{'text-align':'center','width':'150px'}\">\r\n                                    <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                        <input type=\"text\" pInputText [(ngModel)]=\"col.contacts\">\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column header=\"证件类型\" [style]=\"{'text-align':'center','width':'150px'}\">\r\n                                    <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                        <div class=\"ui-g-12 customGroupViewDropdown\" style=\"padding:0px;\">\r\n                                            <p-dropdown [options]=\"idenType\" [(ngModel)]=\"col.idenType\"></p-dropdown>\r\n                                        </div>\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column header=\"证件号码\" [style]=\"{'text-align':'center','width':'260px'}\">\r\n                                    <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                        <input type=\"text\" pInputText [(ngModel)]=\"col.idenNum\">\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column header=\"客户地址\" [style]=\"{'text-align':'center','width':'400px'}\">\r\n                                    <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                        <input type=\"text\" pInputText [(ngModel)]=\"col.address\">\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column header=\"手机号码\" [style]=\"{'text-align':'center','width':'200px'}\">\r\n                                    <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                        <input type=\"text\" pInputText [(ngModel)]=\"col.contactWay\" (blur)=\"isTel(i)\">\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column header=\"所属行业\" [style]=\"{'text-align':'center','width':'300px'}\">\r\n                                    <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                        <input type=\"text\" pInputText [(ngModel)]=\"col.industry\">\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column header=\"是否目标客户\" [style]=\"{'text-align':'center','width':'150px'}\">\r\n                                    <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                        <div class=\"ui-g-12 customGroupViewDropdown\" style=\"padding:0px;\">\r\n                                            <p-dropdown [options]=\"isNoValue\" [(ngModel)]=\"col.targetCustFlag\"></p-dropdown>\r\n                                        </div>\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <p-column header=\"备注\" [style]=\"{'text-align':'center','width':'200px'}\">\r\n                                    <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                        <input type=\"text\" pInputText [(ngModel)]=\"col.description\">\r\n                                    </ng-template>\r\n                                </p-column>\r\n                                <!-- <p-column header=\"兴农卡目标客户\" [style]=\"{'text-align':'center','width':'200px'}\">\r\n                                  <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                      <input type=\"text\" pInputText [(ngModel)]=\"col.xnkBz\">\r\n                                  </ng-template>\r\n                              </p-column>\r\n                              <p-column header=\"户主担保基金目标客户\" [style]=\"{'text-align':'center','width':'200px'}\">\r\n                                  <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                      <input type=\"text\" pInputText [(ngModel)]=\"col.hzdbjjFlag\">\r\n                                  </ng-template>\r\n                              </p-column>\r\n                              <p-column header=\"存贷合一卡目标客户\" [style]=\"{'text-align':'center','width':'200px'}\">\r\n                                  <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                      <input type=\"text\" pInputText [(ngModel)]=\"col.cdhykFlag\">\r\n                                  </ng-template>\r\n                              </p-column>\r\n                              <p-column header=\"商赢易贷目标客户\" [style]=\"{'text-align':'center','width':'200px'}\">\r\n                                  <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                      <input type=\"text\" pInputText [(ngModel)]=\"col.syydFlag\">\r\n                                  </ng-template>\r\n                              </p-column>\r\n                              <p-column header=\"薪易贷目标客户\" [style]=\"{'text-align':'center','width':'200px'}\">\r\n                                  <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                      <input type=\"text\" pInputText [(ngModel)]=\"col.xydFlag\">\r\n                                  </ng-template>\r\n                              </p-column>\r\n                              <p-column header=\"薪金贷目标客户\" [style]=\"{'text-align':'center','width':'200px'}\">\r\n                                  <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                      <input type=\"text\" pInputText [(ngModel)]=\"col.xjdFlag\">\r\n                                  </ng-template>\r\n                              </p-column>\r\n                              <p-column header=\"房易贷目标客户\" [style]=\"{'text-align':'center','width':'200px'}\">\r\n                                  <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                      <input type=\"text\" pInputText [(ngModel)]=\"col.fydFlag\">\r\n                                  </ng-template>\r\n                              </p-column>\r\n                              <p-column header=\"客户介绍客户目标客户\" [style]=\"{'text-align':'center','width':'200px'}\">\r\n                                  <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                      <input type=\"text\" pInputText [(ngModel)]=\"col.khjskhFlag\">\r\n                                  </ng-template>\r\n                              </p-column>\r\n                              <p-column header=\"其他业务目标客户\" [style]=\"{'text-align':'center','width':'200px'}\">\r\n                                  <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                      <input type=\"text\" pInputText [(ngModel)]=\"col.qtywFlag\">\r\n                                  </ng-template>\r\n                              </p-column>\r\n                              <p-column header=\"薪消费目标客户\" [style]=\"{'text-align':'center','width':'200px'}\">\r\n                                  <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                      <input type=\"text\" pInputText [(ngModel)]=\"col.xxfFlag\">\r\n                                  </ng-template>\r\n                              </p-column>\r\n                              <p-column header=\"安居贷目标客户\" [style]=\"{'text-align':'center','width':'200px'}\">\r\n                                  <ng-template let-col=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                      <input type=\"text\" pInputText [(ngModel)]=\"col.ajdFlag\">\r\n                                  </ng-template>\r\n                              </p-column> -->\r\n                                <p-column header=\"操作\" [style]=\"{'text-align':'center','width':'300px'}\">\r\n                                    <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n                                        <div class=\"table-button\">\r\n                                            <span (click)=\"addArray(i)\" class=\"customGroupaddBack\">添加</span>\r\n                                            <span (click)=\"delArray(i)\" class=\"tabelDeleteIco\">删除</span>\r\n                                        </div>\r\n                                    </ng-template>\r\n                                </p-column>\r\n                            </p-dataTable>\r\n                        </div>\r\n                        <div class=\"ui-g-12 btn-submit\">\r\n                            <button pButton type=\"button\" label=\"确认导入\" (click)=\"addCustGroupList()\"></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </p-tabPanel>\r\n            <p-tabPanel header=\"模板批量导入\">\r\n                <header-title [Info]=\"title1\"></header-title>\r\n                <div class=\"ui-g-12\">\r\n                    <pre>\r\n                        Excel文件格式说明：\r\n                        Excel文件中潜在客户名称为必输项。\r\n                        Excel文件最大不能超过2000行记录。\r\n                        更多注意事项请查看模板中的“填报说明”。\r\n                        请先下载模板：\r\n                        <a href=\"{{DOWNLOAD}}/?fileUrl=/copdata/moban/&fileName=custListImport.xls\">下载模板</a>\r\n                    </pre>\r\n                    <div class=\"ui-g-12\">\r\n                        <strong>批量创建（Ecxel导入）</strong>\r\n                        <br/>\r\n                        <label for=\"\">文件导入</label>\r\n                        <p-fileUpload accept=\".xls\" invalidFileTypeMessageDetail=\"只能上传Excel\" invalidFileTypeMessageSummary=\"\" chooseLabel=\"浏览\" uploadLabel=\"上传\"\r\n                            cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"load($event)\">\r\n                        </p-fileUpload>\r\n                        <div *ngIf=\"files.length>0\">\r\n                            <span *ngFor=\"let item of files\">{{item.name}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"ui-g-12\" style=\"text-align:center;\">\r\n                  <button pButton type=\"button\" label=\"关闭\" (click)=\"closebatch()\"></button>\r\n                </div> -->\r\n            </p-tabPanel>\r\n        </p-tabView>\r\n        <div class=\"ui-g-12 marginTop\">\r\n            <div class=\"ui-g-3 ui-g-offset-3 saveCustomCenter\">\r\n                <button pButton label=\"提交申请\" (click)=\"submit()\"></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--\r\n\r\n          <button pButton label=\"提交申请\" (click)=\"submit()\" class=\"asideBtn\"></button>\r\n           -->\r\n</div>\r\n<!-- msg -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n<!-- comfirm -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" style=\"color:#fff;\" label=\"是\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" style=\"color:#fff;\" label=\"否\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n<!-- 联系人等 -->\r\n<!-- <p-dialog [(visible)]=\"adminDisplay\" width=\"1500\" height=\"800\" modal=\"modal\">\r\n  <p-header>{{adminTitle}}</p-header>\r\n  <save-customGroup-admin [isContactPerson]=\"isContactPerson\" [inValue]=\"inValue\" [adminFlag]=\"adminFlag\" (event)=\"returnAdmin($event)\"></save-customGroup-admin>\r\n</p-dialog> -->\r\n\r\n<!-- 导入结果返回显示 -->\r\n<p-dialog [(visible)]=\"addDisplay\" modal=\"modal\" width=\"800\" height=\"400\">\r\n    <header-title [Info]=\"title2\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <span>成功条数：</span>\r\n            <span>{{custGroupListBean3.successNum}}</span>\r\n            <span>条</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>失败条数：</span>\r\n            <span>{{custGroupListBean3.failNum}}</span>\r\n            <span>条</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 table-area\">\r\n        <p-dataTable [emptyMessage]=\"tableMesg\" [style]=\"{'text-align':'center'}\" [value]=\"custGroupListBean3.failInfoList\">\r\n            <p-column header=\"行号\">\r\n                <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    <span [ngClass]=\"{'err-color':col.executeFlag != 'S'}\">\r\n                        {{col.rowNum}}\r\n                    </span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"成功/失败\">\r\n                <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    <span [ngClass]=\"{'err-color':col.executeFlag != 'S'}\">\r\n                        {{col.executeFlag == 'S' ? '成功' : '失败'}}\r\n                    </span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"失败原因\">\r\n                <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    <span [ngClass]=\"{'err-color':col.executeFlag != 'S'}\">\r\n                        {{col.failReason}}\r\n                    </span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"returnCustGroupList()\"></button>\r\n    </div>\r\n</p-dialog>\r\n<p-dialog *ngIf=\"dealPerShow\" header=\"提交给\" [(visible)]=\"dealPerShow\" modal=\"true\">\r\n    <app-examine-approval [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group-next/create-custom-group-next.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group-next/create-custom-group-next.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".saveCustom {\n  padding-bottom: 100px; }\n  .saveCustom label {\n    width: 90px;\n    display: inline-block;\n    height: 28px;\n    line-height: 28px; }\n  .saveCustom input {\n    width: 90% !important; }\n  .saveCustom .saveCustomCenter {\n    text-align: center !important; }\n  .saveCustom .saveCustomCenter .asideBtn {\n      width: 80% !important;\n      font-size: 14px !important; }\n  .paddingNone {\n  padding: 0px !important; }\n  :host/deep/ .tab input {\n  min-width: 100%; }\n  .marginTop {\n  margin-top: 40px !important; }\n  :host .inputSet input[pInputText] {\n  min-width: 150px !important; }\n  .tab {\n  width: 1024px;\n  white-space: nowrap; }\n  a {\n  color: #0094D2;\n  font-weight: bold; }\n  .table-area {\n  max-height: 850px;\n  overflow: auto; }\n  .table-area {\n  max-height: 650px;\n  overflow: auto; }\n  :host/deep/ .ui-dialog.ui-shadow {\n  width: 800px !important;\n  height: auto !important; }\n  .err-color {\n  color: rgba(255, 0, 0, 0.94); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tZ3JvdXAvY3JlYXRlLWN1c3RvbS1ncm91cC1uZXh0L0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLWdyb3VwXFxjcmVhdGUtY3VzdG9tLWdyb3VwLW5leHRcXGNyZWF0ZS1jdXN0b20tZ3JvdXAtbmV4dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFxQixFQUFBO0VBRHpCO0lBR1EsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUFOekI7SUFTUSxxQkFBcUIsRUFBQTtFQVQ3QjtJQVlRLDZCQUE0QixFQUFBO0VBWnBDO01BY1kscUJBQW9CO01BQ3BCLDBCQUEwQixFQUFBO0VBS3RDO0VBQ0ksdUJBQXNCLEVBQUE7RUFHMUI7RUFDSSxlQUFlLEVBQUE7RUFHbkI7RUFDSSwyQkFBMEIsRUFBQTtFQUc5QjtFQUVRLDJCQUEwQixFQUFBO0VBSWxDO0VBRUksYUFBYTtFQUNiLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0ksY0FBYztFQUNkLGlCQUFpQixFQUFBO0VBR3JCO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTtFQUdsQjtFQUNJLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7RUFHbEI7RUFDSSx1QkFBdUI7RUFDdkIsdUJBQXVCLEVBQUE7RUFHM0I7RUFDSSw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLWdyb3VwL2NyZWF0ZS1jdXN0b20tZ3JvdXAtbmV4dC9jcmVhdGUtY3VzdG9tLWdyb3VwLW5leHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2F2ZUN1c3RvbSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIH1cclxuICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2F2ZUN1c3RvbUNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyIWltcG9ydGFudDtcclxuICAgICAgICAuYXNpZGVCdG4ge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucGFkZGluZ05vbmUge1xyXG4gICAgcGFkZGluZzogMHB4IWltcG9ydGFudFxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudGFiIGlucHV0IHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hcmdpblRvcCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgLmlucHV0U2V0IHtcclxuICAgIGlucHV0W3BJbnB1dFRleHRdIHtcclxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4IWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnRhYiB7XHJcbiAgICAvLyBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAyNHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogIzAwOTREMjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGFibGUtYXJlYSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA4NTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4udGFibGUtYXJlYSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2NTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogODAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXJyLWNvbG9yIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC45NCk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group-next/create-custom-group-next.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group-next/create-custom-group-next.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CreateCustomGroupNextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomGroupNextComponent", function() { return CreateCustomGroupNextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_queryParentZoneInfo_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bean/queryParentZoneInfo.bean */ "./src/app/pages/tzb/custom/custom-group/create-custom-group-next/bean/queryParentZoneInfo.bean.ts");
/* harmony import */ var _bean_GroupAdminInfo_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bean/GroupAdminInfo.bean */ "./src/app/pages/tzb/custom/custom-group/create-custom-group-next/bean/GroupAdminInfo.bean.ts");
/* harmony import */ var _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/create-custom-group-next/bean/custom-group.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var CreateCustomGroupNextComponent = /** @class */ (function () {
    function CreateCustomGroupNextComponent(httpService, routerInfo, router, confirmationService, commfunc, comhttpService) {
        this.httpService = httpService;
        this.routerInfo = routerInfo;
        this.router = router;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.comhttpService = comhttpService;
        this.tableMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_12__["tableMessage"];
        // 初始常参
        this.title = '';
        this.tabIndex = 0;
        // 模态框
        this.adminDisplay = false; //管理人员模态框显示与否
        this.adminTitle = '';
        this.isContactPerson = false; //客群区域参数显示与否
        this.inValue = [];
        this.adminFlag = 0;
        // 页面显示
        this.isNoValue = [
            { label: '请选择', value: '' },
            { label: '是', value: '1' },
            { label: '否', value: '0' },
        ];
        this.editFlag = true; //编辑保存按钮切换
        this.deleteFlag = true; //下方按钮组
        // bean
        this.custGroupInfoBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__["CustGroupInfoBean"]();
        this.zoneInfoBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__["ZoneInfoBean"](); //四级区划信息查询
        this.parentZoneInfoBean = new _bean_queryParentZoneInfo_bean__WEBPACK_IMPORTED_MODULE_6__["ParentZoneInfoBean"](); //四级区划解析查询
        this.groupAdminInfoBean = new _bean_GroupAdminInfo_bean__WEBPACK_IMPORTED_MODULE_7__["GroupAdminInfoBean"](); //客户群管理人员
        this.custGroupBean = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_8__["CustGroupBean"](); //客户群管理人员
        this.custGroupListBean3 = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_8__["CustGroupListBean3"]();
        this.custGroupListBean4 = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_8__["CustGroupListBean4"]();
        this.custList = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_8__["custList"]();
        // 控件
        this.msgs = [];
        this.groupTypeCheck = ''; //群类型绑定
        this.groupStateCheck = ''; //群状态绑定
        this.loadAfter_arr = [];
        // session
        this.orgName = '';
        this.orgIdTemp = '';
        this.orgNameArr = [];
        //
        this.tempArr = [];
        //
        // 链接中间量
        this.groupName = '';
        this.groupId = ''; //群号
        this.region = ''; //序列号
        // 其他中间量
        this.nameInValue = {
            ownerName: '',
        };
        this.RoleName = '';
        //
        this.title1 = '客户群名单批量导入';
        this.title2 = '客户群名单导入结果';
        this.files = [];
        this.fileList = [];
        this.addDisplay = false;
        //
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__["TZB_CUS_DOWNLOAD"];
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__["TZB_CUS_UPLOAD"];
        //
        this.load_after_stu = false; //判断上传状态(是否上传文件到后台中心)
        this.haveStaff = false; //群内是否有客户
        this.dealPerShow = false;
        this.fileNameFlag = true;
        this.codeValues(); //调用方法，获取全部码值
        //获取所需要的码值,中括号中的变量是自己在原来码值表中的变量名！！！！
        this.relType = this.code['CustomGroupRelType'];
        this.idenType = this.code['CustomGroupIdenType'];
        this.groupType = this.code['GroupTypeSave'];
        this.groupState = this.code['GroupStatus'];
        this.user = JSON.parse(this.commfunc.getSessionData("commonHeader"));
        console.log(this.user);
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
    }
    CreateCustomGroupNextComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CreateCustomGroupNextComponent.prototype.ngOnInit = function () {
        //
        // 初始化数组
        this.custGroupListBean3['custList'] = [{
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
            }];
        this.preSet();
        // 载入查询
        this.selectCustGroupInfo();
    };
    CreateCustomGroupNextComponent.prototype.preSet = function () {
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
        this.groupName = this.routerInfo.snapshot.params['groupName']; //客户群号      
        this.title = this.groupName + '客户群添加群客户';
        //待办链接传参 
        if (this.routerInfo.snapshot.params.taskCategoryId) {
        }
        // 客户群信息查询
        this.custGroupInfoBean.groupId = this.groupId;
        // 客户群管理人员查询
        this.groupAdminInfoBean.groupId = this.groupId;
    };
    CreateCustomGroupNextComponent.prototype.selectCustGroupInfo = function () {
        var _this = this;
        // 客户群信息查询
        this.httpService.selectCustGroupInfo(this.custGroupInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custGroupInfoBean = data;
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
    CreateCustomGroupNextComponent.prototype.selectCustGroupList = function () {
        var _this = this;
        var params = {
            groupId: this.groupId,
            listType: 1,
            pageNum: 1,
            pageSize: 10,
            statusId: "1",
        };
        this.httpService.selectCustGroupList(params).subscribe(function (data) {
            if (data.returnCode.code) {
                _this.haveStaff = data.totalNum > 0 ? true : false;
                if (_this.haveStaff) { //判断群内是否有客户
                    // this.subAuditGroup();
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '您好，群创建之前需要导入客户！' }];
                }
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '调用服务失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // 提交申请
    CreateCustomGroupNextComponent.prototype.submit = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: '确定提交?',
            accept: function () {
                if (_this.tabIndex == 0) { //后台中心导入
                    _this.subAuditGroup(1);
                }
                else { //群客户导入和模板批量导入
                    _this.subAuditGroup(2);
                }
            }
        });
    };
    // 提交审批(工作流)
    CreateCustomGroupNextComponent.prototype.subAuditGroup = function (i) {
        var _this = this;
        if (this.fileNameFlag) {
            if (i == 1 && this.load_after_stu) { //后台中心导入(已经导入文件)
                var param = {
                    groupId: this.groupId,
                    handleFlag: '1',
                    infoList: this.loadAfter_arr
                    // infoList:[{filePath:"/copdata/20180116190429/测试专用代管.xls"}]
                };
                this.httpService.uploadCustGroupList(param).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'success', summary: '提示', detail: '提交到后台中心成功！' }];
                        _this.custGroupInfoBean.globalSeqNoImage = data.globalSeqNoImage; //影像流水号
                        setTimeout(function () {
                            _this.queryp();
                        }, 2000);
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
            else { //群客户导入和模板批量导入
                this.queryp();
            }
        }
    };
    //选人
    CreateCustomGroupNextComponent.prototype.queryp = function () {
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader')); //清除选人
        if (s.extParam.specifyNextOpers) {
            delete s.extParam.specifyNextOpers;
            var commonHeader = s;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        }
        this.waitSelUserList = this.commfunc.query('KH_KHQCJ', {}); //调用选人服务
        if (!this.waitSelUserList.erro) {
            this.outVal = this.waitSelUserList.waitSelUserList;
            var chooseThis = this.waitSelUserList.display;
            var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            var a2 = commonHeader.extParam.specifyNextOpers;
            if (chooseThis == true && (a2 == undefined || a2 == '' || a2 == null)) {
                this.dealPerShow = true;
            }
            else {
                this.subAudit2();
            }
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
        }
    };
    //群创建申请提交(后台)
    CreateCustomGroupNextComponent.prototype.subAudit2 = function () {
        var _this = this;
        var a = this.custGroupInfoBean;
        a.taskCategoryId = this.routerInfo.snapshot.params.taskCategoryId;
        this.httpService.subAuditGroup(a).subscribe(function (data) {
            var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
            if (s.extParam.specifyNextOpers) {
                delete s.extParam.specifyNextOpers;
                var commonHeader = s;
                _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
            }
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
    CreateCustomGroupNextComponent.prototype.toGroupClientImport = function () {
        var _this = this;
        var groupName = encodeURI(this.groupName);
        // 链接到客户群名单导入
        this.confirmationService.confirm({
            message: '确定进入客户名单导入页面?',
            accept: function () {
                _this.router.navigate(['/pages/tzb/custom/custom-group/group-client-import', { groupId: _this.groupId, groupName: groupName, custGroupView: '2' }]);
            }
        });
    };
    CreateCustomGroupNextComponent.prototype.addArray = function (index) {
        // 增加行
        // this.tempArr = [];
        this.tempArr = {
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
        };
        this.custGroupListBean3['custList'].push(this.tempArr);
        this.custGroupListBean3['custList'] = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.custGroupListBean3['custList']);
    };
    CreateCustomGroupNextComponent.prototype.preArray = function () {
        // 增加行
        this.custGroupListBean3['custList'] = [{
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
            }];
    };
    CreateCustomGroupNextComponent.prototype.delArray = function (index) {
        // 删除行
        if (index) {
            this.custGroupListBean3['custList'].splice(index, 1);
            var tmpArr = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](this.custGroupListBean3['custList']);
            this.custGroupListBean3['custList'] = tmpArr;
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '第一行不能删除！' }];
        }
    };
    CreateCustomGroupNextComponent.prototype.load = function (event) {
        var _this = this;
        // 上传点击,需跨域
        this.custGroupListBean3 = new _bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_8__["CustGroupListBean3"]();
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
            if (this.fileList.length > 1) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '不支持上传多个文件！' }];
                return;
            }
            this.custGroupListBean3.filePath = this.fileList[0].fileUrl;
            this.custGroupListBean3.fileName = this.fileList[0].fileName;
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '获取服务器列表失败！' }];
        }
        var param = this.custGroupListBean3;
        param['groupId'] = this.groupId;
        this.httpService.batchCustGroupList(param).subscribe(function (data) {
            _this.preArray();
            if (data.returnCode.code == 'success') {
                _this.custGroupListBean3.successNum = data.successNum;
                _this.custGroupListBean3.failNum = data.failNum;
                data.failInfoList = data.failInfoList.filter(function (item) { return item.executeFlag == 'F'; });
                _this.custGroupListBean3.failInfoList = data.failInfoList;
                _this.addDisplay = true;
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
    //后台中心上传
    CreateCustomGroupNextComponent.prototype.loadAfter = function (event) {
        var _this = this;
        console.log(event);
        var total_size = 0;
        if (event.files) {
            event.files.forEach(function (item) {
                total_size += item.size;
            });
        }
        console.log(total_size);
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
            this.load_after_stu = true;
            this.msgs = [];
            this.msgs = [{ severity: 'success', summary: '提示', detail: '文件上传成功' }];
            this.loadAfter_arr = [];
            this.fileList.forEach(function (item) {
                _this.loadAfter_arr.push({
                    filePath: item.fileUrl + item.fileName
                });
            });
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '获取服务器列表失败！' }];
            return;
        }
    };
    //名单导入
    CreateCustomGroupNextComponent.prototype.addCustGroupList = function () {
        var _this = this;
        // 客户名单手动导入、新增\
        // ;
        var flag1 = true;
        flag1 = this.isFormat();
        if (!flag1) {
            return;
        }
        for (var i in this.custGroupListBean3.custList) {
            // 非空校验
        }
        // 客户群名单新增
        this.confirmationService.confirm({
            message: '确定导入客户群名单?',
            accept: function () {
                _this.custGroupListBean3.custListNum = _this.custGroupListBean3.custList.length; //客户名单数
                _this.custGroupListBean3.groupId = _this.groupId;
                _this.custGroupListBean3 = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](_this.custGroupListBean3);
                _this.httpService.addCustGroupList(_this.custGroupListBean3).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.custGroupListBean3.successNum = data.successNum;
                        _this.custGroupListBean3.failNum = data.failNum;
                        data.failInfoList = data.failInfoList.filter(function (item) { return item.executeFlag == 'F'; });
                        _this.custGroupListBean3.failInfoList = data.failInfoList;
                        _this.addDisplay = true;
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
    CreateCustomGroupNextComponent.prototype.isFormat = function () {
        var _this = this;
        // 格式检查
        var flag = true;
        this.custGroupListBean3.custList.forEach(function (item) {
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
            if (!(item.custName) || Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_11__["specialSymbol"])(null, item.custName) || item.custName.length > 100) {
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
            if (item.telNum != '' && Object(app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_11__["checkTel"])(null, item.telNum)) {
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
    // --其他
    CreateCustomGroupNextComponent.prototype.isNullCheck = function (index) {
        // 非空校验
        if (this.custGroupListBean3.custList[index].custName.search(/^\S+$/) || !(this.custGroupListBean3.custList[index].custName)) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '客户名称不能为空' }];
        }
    };
    CreateCustomGroupNextComponent.prototype.returnCustGroupList = function () {
        // 客户群名单返回结果模态框
        this.addDisplay = false;
    };
    CreateCustomGroupNextComponent.prototype.selectCustBriefInfo = function (event, i, a) {
        var _this = this;
        console.log('selectCustBriefInfo');
        if (a.value.length == 10) {
            var param = {
                custNo: a.value
            };
            this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var s = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                    if (s.extParam.specifyNextOpers) {
                        delete s.extParam.specifyNextOpers;
                        var commonHeader = s;
                        _this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
                    }
                    // this.custGroupListBean3.custList[i] = data || [];
                    _this.custGroupListBean3.custList[i].custName = data.custName || '';
                    _this.custGroupListBean3.custList[i].contactWay = data.contactWay || '';
                    _this.custGroupListBean3.custList[i].idenNum = data.idenNum || '';
                    _this.custGroupListBean3.custList[i].idenType = data.idenType || '';
                    _this.custGroupListBean3.custList = lodash__WEBPACK_IMPORTED_MODULE_4__["clone"](_this.custGroupListBean3.custList);
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
    CreateCustomGroupNextComponent.prototype.outDisplayCall = function (event) {
        this.dealPerShow = event;
    };
    CreateCustomGroupNextComponent.prototype.outValueCall = function (event) {
        this.outVal = event;
        var ss = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        this.subAudit2();
    };
    // uploadHandler(event){
    //   console.log(event)
    //   console.log(this.files)
    // }
    // onSelect(event){
    //   console.log(event)
    //   console.log(this.files)
    // }
    // onBeforeUpload(event){
    //   console.log(event)
    //   console.log(this.files)
    // }
    CreateCustomGroupNextComponent.prototype.tabViewChange = function (event) {
        this.tabIndex = event.index;
        console.log(event);
    };
    CreateCustomGroupNextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'create-custom-group-next',
            template: __webpack_require__(/*! ./create-custom-group-next.component.html */ "./src/app/pages/tzb/custom/custom-group/create-custom-group-next/create-custom-group-next.component.html"),
            styles: [__webpack_require__(/*! ./create-custom-group-next.component.scss */ "./src/app/pages/tzb/custom/custom-group/create-custom-group-next/create-custom-group-next.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__["Commfunc"]],
        }),
        __metadata("design:paramtypes", [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_9__["Commfunc"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_13__["CustomeHttpService"]])
    ], CreateCustomGroupNextComponent);
    return CreateCustomGroupNextComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group-next/create-custom-group-next.module.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group-next/create-custom-group-next.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: CreateCustomGroupNextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomGroupNextModule", function() { return CreateCustomGroupNextModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _create_custom_group_next_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-custom-group-next.routing */ "./src/app/pages/tzb/custom/custom-group/create-custom-group-next/create-custom-group-next.routing.ts");
/* harmony import */ var _create_custom_group_next_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-custom-group-next.component */ "./src/app/pages/tzb/custom/custom-group/create-custom-group-next/create-custom-group-next.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//客户群组
var CreateCustomGroupNextModule = /** @class */ (function () {
    function CreateCustomGroupNextModule() {
    }
    CreateCustomGroupNextModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _create_custom_group_next_routing__WEBPACK_IMPORTED_MODULE_4__["CreateCustomGroupNextRouting"],
            ],
            declarations: [
                _create_custom_group_next_component__WEBPACK_IMPORTED_MODULE_5__["CreateCustomGroupNextComponent"]
            ],
            exports: [],
            providers: []
        })
    ], CreateCustomGroupNextModule);
    return CreateCustomGroupNextModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-group/create-custom-group-next/create-custom-group-next.routing.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-group/create-custom-group-next/create-custom-group-next.routing.ts ***!
  \************************************************************************************************************/
/*! exports provided: routes, CreateCustomGroupNextRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomGroupNextRouting", function() { return CreateCustomGroupNextRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_custom_group_next_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-custom-group-next.component */ "./src/app/pages/tzb/custom/custom-group/create-custom-group-next/create-custom-group-next.component.ts");


//客户群组
// import { CustomGroupDeleteComponent } from './custom-group-delete/custom-group-delete.component';//客户群-删除客户群
var routes = [
    {
        path: '', component: _create_custom_group_next_component__WEBPACK_IMPORTED_MODULE_1__["CreateCustomGroupNextComponent"] //创建
    }
];
var CreateCustomGroupNextRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=create-custom-group-next-create-custom-group-next-module.js.map