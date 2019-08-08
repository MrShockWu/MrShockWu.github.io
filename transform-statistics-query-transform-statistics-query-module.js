(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transform-statistics-query-transform-statistics-query-module"],{

/***/ "./src/app/@uisftech/common/component/org-tree-zhdk/bean/org-tree-zhdk.bean.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/@uisftech/common/component/org-tree-zhdk/bean/org-tree-zhdk.bean.ts ***!
  \*************************************************************************************/
/*! exports provided: OrgTreeBean, queryOrgByOrgIdAndRelationshipBean, orgList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgTreeBean", function() { return OrgTreeBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryOrgByOrgIdAndRelationshipBean", function() { return queryOrgByOrgIdAndRelationshipBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orgList", function() { return orgList; });
var OrgTreeBean = /** @class */ (function () {
    function OrgTreeBean() {
    }
    return OrgTreeBean;
}());

var queryOrgByOrgIdAndRelationshipBean = /** @class */ (function () {
    function queryOrgByOrgIdAndRelationshipBean() {
        this.orgId = ''; //机构号
        this.relationshipType = ''; //机构号
        this.orgList = []; //机构号 
    }
    return queryOrgByOrgIdAndRelationshipBean;
}());

var orgList = /** @class */ (function () {
    function orgList() {
        this.orgId = ''; //机构码
        this.orgName = ''; //机构名称
        this.location = ''; //位置描述
    }
    return orgList;
}());



/***/ }),

/***/ "./src/app/@uisftech/common/component/org-tree-zhdk/org-tree-zhdk.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/@uisftech/common/component/org-tree-zhdk/org-tree-zhdk.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 overall\">\r\n    <div class=\"ui-g-4 org\" style=\"height:100%;overflow:scroll;max-height:710px;min-height:700px;\">\r\n            <p-tree [value]=\"date1\" *ngIf='isAll' selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\"\r\n                (onNodeExpand)=\"nodeExpend($event)\"></p-tree>\r\n            <p-tree [value]=\"date\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\" (onNodeExpand)=\"nodeExpend($event)\"></p-tree>\r\n    </div>\r\n    <div class=\"ui-g-8\" style=\"height:100%\">\r\n        <div class=\"ui-g-12 justify_content\">\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-5 label\">机构编码：</div>\r\n                <div class=\"ui-g-7\">\r\n                    <input pInputText type=\"text\" [(ngModel)]=\"partyManageBean.orgId\" style=\"width:80%\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-4 label\">机构名称：</div>\r\n                <div class=\"ui-g-7\">\r\n                    <input pInputText type=\"text\" [(ngModel)]=\"partyManageBean.orgName\" style=\"width:80%\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 textAlignCenter\">\r\n            <button pButton type=\"button\" label=\"查询\" (click)=\"zhdkQuery()\" class=\"uButton\"></button>\r\n            <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\" class=\"uButton\"></button>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <u-dataTable [value]=\"tableData\" [scrollable]=\"true\" scrollHeight=\"450px\" [style]=\"{'text-align':'center','height':'490px'}\"\r\n                [emptyMessage]=\"tabMesg\" (onRowClick)=\"rowClick($event)\" >\r\n                <!--<p-column header=\"选择\" [style]=\"{'width':'100px'}\">\r\n                    <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                        <p-radioButton name=\"groupname\" [value]=\"i\" (onClick)=\"select(col)\" [(ngModel)]=\"selectedValue\"></p-radioButton>\r\n                    </ng-template>\r\n                </p-column>-->\r\n                <p-column field=\"orgId\" header=\"机构编码\" [style]=\"{'width':'25%'}\"></p-column>\r\n                <p-column field=\"orgName\" header=\"机构名称\" [style]=\"{'width':'25%'}\"></p-column>\r\n            </u-dataTable>\r\n            <!-- 分页 -->\r\n            <div style=\"margin-top:20px\">\r\n                <u-paginator [first]=\"first\" rows=\"{{partyManageBean.rowNum}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                (onPageChange)=\"paginate($event)\"></u-paginator>\r\n            </div>\r\n        </div>\r\n        <!--<div class=\"ui-g-12 textAlignCenter\">\r\n            <button pButton type=\"button\" label=\"确认\" (click)=\"addBtnCom()\"  class=\"uButton\"></button>\r\n            <button pButton type=\"button\" label=\"取消\" (click)=\"cancel()\"  class=\"uButton\"></button>\r\n        </div>-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/@uisftech/common/component/org-tree-zhdk/org-tree-zhdk.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/@uisftech/common/component/org-tree-zhdk/org-tree-zhdk.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overall {\n  height: 100%; }\n  .overall .org {\n    height: 500px;\n    overflow-y: scroll;\n    overflow-x: hidden; }\n  .overall .justify_content {\n    display: flex;\n    flex-flow: row;\n    justify-content: center; }\n  .overall .justify_content .label {\n      text-align: right; }\n  .overall .uButton {\n    border-radius: 50px;\n    background-color: #34cfe6 !important;\n    background: #34cfe6 !important;\n    border: 1px solid #e8e8e8; }\n  .overall .uButton:hover {\n    background: #39e1fa !important; }\n  :host /deep/ .u-datatable .ui-datatable-data tr:hover {\n  background-color: #eaf8fe !important;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHVpc2Z0ZWNoL2NvbW1vbi9jb21wb25lbnQvb3JnLXRyZWUtemhkay9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxAdWlzZnRlY2hcXGNvbW1vblxcY29tcG9uZW50XFxvcmctdHJlZS16aGRrXFxvcmctdHJlZS16aGRrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBO0VBRGhCO0lBR1EsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTtFQUwxQjtJQVFRLGFBQWE7SUFDYixjQUFjO0lBQ2QsdUJBQXVCLEVBQUE7RUFWL0I7TUFZWSxpQkFBaUIsRUFBQTtFQVo3QjtJQWdCUSxtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLDhCQUE4QjtJQUM5Qix5QkFBeUIsRUFBQTtFQW5CakM7SUFzQlEsOEJBQThCLEVBQUE7RUFJdEM7RUFDSSxvQ0FBb0M7RUFDcEMsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvQHVpc2Z0ZWNoL2NvbW1vbi9jb21wb25lbnQvb3JnLXRyZWUtemhkay9vcmctdHJlZS16aGRrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJhbGwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLm9yZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLmp1c3RpZnlfY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudUJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzRjZmU2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzM0Y2ZlNiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICB9XHJcbiAgICAudUJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzM5ZTFmYSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLnUtZGF0YXRhYmxlIC51aS1kYXRhdGFibGUtZGF0YSB0cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFmOGZlICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/@uisftech/common/component/org-tree-zhdk/org-tree-zhdk.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/@uisftech/common/component/org-tree-zhdk/org-tree-zhdk.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OrgTreezhck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgTreezhck", function() { return OrgTreezhck; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_org_tree_zhdk_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/org-tree-zhdk.bean */ "./src/app/@uisftech/common/component/org-tree-zhdk/bean/org-tree-zhdk.bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_http_uisftech_common_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/http/uisftech-common-http.service */ "./src/app/@uisftech/common/http/uisftech-common-http.service.ts");
/* harmony import */ var app_pages_tzb_common_base_manage_party_manage_bean_party_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/common/base-manage/party-manage/bean/party-bean */ "./src/app/pages/tzb/common/base-manage/party-manage/bean/party-bean.ts");
/* harmony import */ var app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/common/http/common.http.service */ "./src/app/pages/tzb/common/http/common.http.service.ts");
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







var OrgTreezhck = /** @class */ (function () {
    function OrgTreezhck(uisftechCommonHttpService, commfunc, commonHttpService) {
        this.uisftechCommonHttpService = uisftechCommonHttpService;
        this.commfunc = commfunc;
        this.commonHttpService = commonHttpService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // 表格中显示的信息
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_6__["tableMessage"];
        this.precredit2 = '机构查询';
        this.precredit = '机构树查询';
        this.precredit1 = '机构详情';
        this.aa = false;
        this.test = [];
        this.orgTreeBean = new _bean_org_tree_zhdk_bean__WEBPACK_IMPORTED_MODULE_1__["OrgTreeBean"]();
        //提示信息
        this.msgs = [];
        this.isAll = false;
        this.partyManageBean = new app_pages_tzb_common_base_manage_party_manage_bean_party_bean__WEBPACK_IMPORTED_MODULE_4__["PartyManageBean"]();
        this.first = 0;
        this.checkListPro = [];
    }
    OrgTreezhck.prototype.ngOnInit = function () {
        //定义右侧分页参数
        this.partyManageBean.rowNum = '10';
        this.partyManageBean.startRow = '1';
        if (this.inValue == 'C0000' || this.inValue == 'T0000') {
            this.isAll = true;
            this.org = 'C0000';
            this.org1 = 'T0000';
            this.query1();
        }
        else {
            if (this.inValue == 'adjustOrg') {
                // 客户管理调整日志标识
                this.org = '0000';
                this.query();
            }
            else if (this.inValue == 'take') {
                this.org = JSON.parse(this.commfunc.getSessionData('commonHeader')).orgId;
                this.query();
            }
            else {
                if (this.cardVlaue) {
                    this.org = this.cardVlaue;
                }
                else {
                    this.org = JSON.parse(this.commfunc.getSessionData('officeOrgId'));
                }
                console.log(this.org);
                this.query();
            }
        }
        //调用左侧查询
        this.queryClick();
    };
    //选中
    OrgTreezhck.prototype.nodeCheck = function (event) {
        // debugger;
        // console.info("commonHeader555555===="+JSON.stringify(this.commfunc.getSessionData('commonHeader')));
        // console.info("event.node==="+JSON.stringify(event));
        var orgId = '';
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var userId = '';
        var operatingLevel = event.node.operatingLevel;
        if (operatingLevel == 'GROUP') { //GROUP-集团 0000      
            orgId = '';
            userId = '';
        }
        else if (operatingLevel == 'GENERAL_BANK') { //GENERAL_BANK--总行
            orgId = '';
            userId = '';
        }
        else if (operatingLevel == 'GENERAL_BANK_DT') { //GENERAL_BANK_DT--总行管理部门                        
            orgId = '';
            userId = '';
        }
        else if (operatingLevel == 'BRANCH') { //BRANCH-分行/区域
            orgId = '';
            userId = '';
        }
        else if (operatingLevel == 'BRANCH_DT') { //BRANCH_DT-分行/区域管理部门
            orgId = '';
            userId = '';
        }
        else if (operatingLevel == 'DISTRICT') { //DISTRICT-片区
            orgId = '';
            userId = '';
        }
        else if (operatingLevel == 'DISTRICT_DT') { //DISTRICT_DT-片区部门
            orgId = '';
            userId = '';
        }
        else if (operatingLevel == 'SUB_BRANCH') { //SUB_BRANCH-支行
            orgId = event.node.orgId;
            userId = '';
        }
        else if (operatingLevel == 'SUB_BRANCH_DT') { //SUB_BRANCH_DT-支行部门
            orgId = event.node.orgId;
            userId = '';
        }
        else if (operatingLevel == 'TEAM') { //TEAM-团队
            orgId = event.node.orgId;
            userId = '';
        }
        this.treeOrgName = event.node.label; //页面付值
        this.orgEle = { orgId: orgId, orgName: event.node.orgName, location: event.node.location, operatingLevel: operatingLevel, userId: userId };
        this.outValue.emit(this.orgEle);
    };
    //点击加号
    OrgTreezhck.prototype.nodeExpend = function (event) {
        var _this = this;
        this.org = event.node.orgId;
        this.orgTreeBean.orgId = this.org;
        this.orgTreeBean.relationshipType = '-1';
        if (event.node.children && event.node.children.length > 0) {
            return;
        }
        if (this.inValue == 'noShow') {
            if (event.node.operatingLevel == 'SUB_BRANCH') {
                return;
            }
        }
        this.uisftechCommonHttpService.queryOrgByOrgIdAndRelationship(this.orgTreeBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                event.node.children = _this.toTree(data.orgList);
            }
        });
    };
    OrgTreezhck.prototype.toTree = function (data) {
        if (data) {
            data.forEach(function (item) {
                item['label'] = item['orgName'];
                item['orgId'] = item['orgId'];
                item['location'] = item['location'];
                item['operatingLevel'] = item['operatingLevel'];
            });
            return data;
        }
    };
    //查询
    OrgTreezhck.prototype.query = function () {
        var _this = this;
        this.orgTreeBean.orgId = this.org;
        this.orgTreeBean.relationshipType = '0';
        this.uisftechCommonHttpService.queryOrgByOrgIdAndRelationship(this.orgTreeBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.date = _this.toTree(data.orgList);
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'info', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    OrgTreezhck.prototype.query1 = function () {
        var _this = this;
        this.orgTreeBean.orgId = this.org1;
        this.orgTreeBean.relationshipType = '0';
        this.uisftechCommonHttpService.queryOrgByOrgIdAndRelationship(this.orgTreeBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.date1 = _this.toTree(data.orgList);
                _this.query();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'info', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //清空
    OrgTreezhck.prototype.cleanUp = function () {
        this.treeOrgName = '';
        this.orgEle = '';
    };
    //右侧点击查询
    OrgTreezhck.prototype.zhdkQuery = function () {
        var _this = this;
        this.partyManageBean.flag = '0';
        this.first = 0;
        this.partyManageBean.startRow = "1";
        this.commonHttpService.queryOrgByCombConditionsLevel(this.partyManageBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.orgInfoList;
                // debugger;
                // console.log("this.tableData==============="+this.tableData);
                _this.total = data.rowCount;
                // this.msgs = [];
                // this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    OrgTreezhck.prototype.paginate = function (event) {
        //每页显示的条数
        this.partyManageBean.rowNum = event.rows;
        //当前页
        this.currentPage = event.page + 1 + '';
        this.partyManageBean.startRow = this.currentPage;
        this.first = event.page * event.rows;
        // this.first=event.page;
        //调用查询的方法
        this.queryClick();
    };
    OrgTreezhck.prototype.queryClick = function () {
        var _this = this;
        this.creat_user = JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
        this.partyManageBean.flag = '0';
        this.commonHttpService.queryOrgByCombConditionsLevel(this.partyManageBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.orgInfoList;
                _this.total = data.rowCount;
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
    OrgTreezhck.prototype.rowClick = function (event) {
        //  debugger;
        // console.info("commonHeader1===="+JSON.stringify(this.commfunc.getSessionData('commonHeader')));
        // console.info("event.data==="+JSON.stringify(event.data));
        var orgId = '';
        var orgName = event.data.orgName;
        this.treeOrgName = orgName; //页面付值
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var userId = '';
        var operatingLevel = event.data.operatingLevel;
        if (operatingLevel == 'GROUP') { //GROUP-集团 0000      
            orgId = '';
            userId = '';
        }
        else if (operatingLevel == 'GENERAL_BANK') { //GENERAL_BANK--总行
            orgId = '';
            userId = '';
        }
        else if (operatingLevel == 'GENERAL_BANK_DT') { //GENERAL_BANK_DT--总行管理部门                        
            orgId = '';
            userId = '';
        }
        else if (operatingLevel == 'BRANCH') { //BRANCH-分行/区域
            orgId = '';
            userId = '';
        }
        else if (operatingLevel == 'BRANCH_DT') { //BRANCH_DT-分行/区域管理部门
            orgId = '';
            userId = '';
        }
        else if (operatingLevel == 'DISTRICT') { //DISTRICT-片区
            orgId = '';
            userId = '';
        }
        else if (operatingLevel == 'DISTRICT_DT') { //DISTRICT_DT-片区部门
            orgId = '';
            userId = '';
        }
        else if (operatingLevel == 'SUB_BRANCH') { //SUB_BRANCH-支行
            orgId = event.data.orgId;
            userId = '';
        }
        else if (operatingLevel == 'SUB_BRANCH_DT') { //SUB_BRANCH_DT-支行部门
            orgId = event.data.orgId;
            userId = '';
        }
        else if (operatingLevel == 'TEAM') { //TEAM-团队
            orgId = event.data.orgId;
            userId = '';
        }
        this.orgEle = { orgId: orgId, orgName: orgName, location: '', operatingLevel: operatingLevel, userId: userId };
        this.outValue.emit(this.orgEle);
    };
    //单选按钮
    // select(col) {
    //   this.checkListPro = [col]
    // }
    // //确定
    // addBtnCom() {
    //  // debugger;
    //  //  console.info("this.checkListPro==="+this.checkListPro);
    //    let orgId = this.checkListPro[0].orgId;
    //    let orgName = this.checkListPro[0].orgName;
    //    this.treeOrgName = orgName; //页面付值
    //    let operatingLevel = this.checkListPro[0].operatingLevel;
    //    if(operatingLevel !='SUB_BRANCH'){
    //     this.personName = '';
    //     this.personId = '';
    //    }
    //    this.orgEle = { orgId: orgId, orgName:orgName,location:'',operatingLevel: operatingLevel}
    //    this.outValue.emit(this.orgEle);
    // }
    //取消
    OrgTreezhck.prototype.cancel = function () {
        this.outValue.emit(false);
    };
    // 重置
    OrgTreezhck.prototype.reset = function () {
        this.partyManageBean.orgName = '',
            this.partyManageBean.orgId = '',
            this.partyManageBean.superiorManageOrg = '';
        this.partyManageBean.orgType = '';
        this.partyManageBean.orgStatus = '';
        this.partyManageBean.operatingLevel = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrgTreezhck.prototype, "cardVlaue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrgTreezhck.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], OrgTreezhck.prototype, "outValue", void 0);
    OrgTreezhck = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'org-tree-zhdk-component',
            template: __webpack_require__(/*! ./org-tree-zhdk.component.html */ "./src/app/@uisftech/common/component/org-tree-zhdk/org-tree-zhdk.component.html"),
            styles: [__webpack_require__(/*! ./org-tree-zhdk.component.scss */ "./src/app/@uisftech/common/component/org-tree-zhdk/org-tree-zhdk.component.scss")],
            providers: [app_uisftech_common_http_uisftech_common_http_service__WEBPACK_IMPORTED_MODULE_3__["UisftechCommonHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        })
        /**
         * 机构对应关系
         */
        ,
        __metadata("design:paramtypes", [app_uisftech_common_http_uisftech_common_http_service__WEBPACK_IMPORTED_MODULE_3__["UisftechCommonHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            app_pages_tzb_common_http_common_http_service__WEBPACK_IMPORTED_MODULE_5__["CommonHttpService"]])
    ], OrgTreezhck);
    return OrgTreezhck;
}());



/***/ }),

/***/ "./src/app/pages/tzb/transform-statistics-query/bean/transform-qry-bean.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tzb/transform-statistics-query/bean/transform-qry-bean.ts ***!
  \*********************************************************************************/
/*! exports provided: TransformQueryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformQueryBean", function() { return TransformQueryBean; });
var TransformQueryBean = /** @class */ (function () {
    function TransformQueryBean() {
    }
    return TransformQueryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/transform-statistics-query/http/transform-query.http.constant.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/transform-statistics-query/http/transform-query.http.constant.ts ***!
  \********************************************************************************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
var API = {
    queryConvertStatisticsInfo: 'queryConvertStatisticsInfo',
    loadConvertStatisticsInfo: 'loadConvertStatisticsInfo',
    addUserListShow: 'addUserListShow',
    selectUserListShow: 'selectUserListShow',
};


/***/ }),

/***/ "./src/app/pages/tzb/transform-statistics-query/http/transform-query.http.service.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/transform-statistics-query/http/transform-query.http.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: TransformQueryHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformQueryHttpService", function() { return TransformQueryHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/http.service */ "./src/app/@uisftech/common/service/http.service.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _transform_query_http_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transform-query.http.constant */ "./src/app/pages/tzb/transform-statistics-query/http/transform-query.http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransformQueryHttpService = /** @class */ (function () {
    function TransformQueryHttpService(httpService) {
        this.httpService = httpService;
    }
    //转化方案统计查询
    TransformQueryHttpService.prototype.queryConvertStatisticsInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS2"] + _transform_query_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].queryConvertStatisticsInfo, params);
    };
    //转化方案统计下载
    TransformQueryHttpService.prototype.loadConvertStatisticsInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS2"] + _transform_query_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].loadConvertStatisticsInfo, params);
    };
    //用户列表展示登记
    TransformQueryHttpService.prototype.addUserListShow = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS222"] + _transform_query_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].addUserListShow, params);
    };
    //用户列表查询
    TransformQueryHttpService.prototype.selectUserListShow = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_2__["TZB_HTTP_CUS222"] + _transform_query_http_constant__WEBPACK_IMPORTED_MODULE_3__["API"].selectUserListShow, params);
    };
    TransformQueryHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], TransformQueryHttpService);
    return TransformQueryHttpService;
}());



/***/ }),

/***/ "./src/app/pages/tzb/transform-statistics-query/transform-statistics-query.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/transform-statistics-query/transform-statistics-query.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow overdue_query\">\r\n        <header-title [Info]=\"'转化贷款查询'\"></header-title>\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-12\" style=\"padding-right:10%\">\r\n               <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-3 tit\">客户号:</div>\r\n                    <div class=\"ui-g-3\">\r\n                        <input pInputText [(ngModel)]=\"transformQueryBean.custNo\">\r\n                    </div>\r\n                    <div class=\"ui-g-3 tit\">客户名称:</div>\r\n                    <div class=\"ui-g-3\">\r\n                        <input pInputText [(ngModel)]=\"transformQueryBean.custName\">\r\n                    </div>\r\n               </div>\r\n               <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-3 tit\">主联系人:</div>\r\n                <div class=\"ui-g-3\">\r\n                    <div class=\"queryinputbtn\">\r\n                        <input class=\"queryinputOrg\" type=\"text\" [(ngModel)]=\"personName\" pInputText readonly/>\r\n                        <div class=\"clickspan\">\r\n                            <a (click)=\"perShow(1)\" class=\"a-hand\">\r\n                                        <span>...</span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-3 tit\">产品名称:</div>\r\n                <div class=\"ui-g-3\">\r\n                    <div class=\"queryinputbtn\">\r\n                        <input class=\"queryinputOrg\" type=\"text\" [(ngModel)]=\"transformQueryBean.productName\" pInputText readonly/>\r\n                        <div class=\"clickspan\">\r\n                            <a (click)=\"choosePro()\" class=\"a-hand\">\r\n                                <span>...</span>\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n               </div>\r\n               <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-3 tit\">转化时间:</div>\r\n                    <div class=\"ui-g-3 calendar_inline\">\r\n                      <!--<div class=\"ui-g-5 padding-zero\">-->\r\n                            <p-calendar [(ngModel)]=\"convertTimeStart\" [maxDate]=\"convertTimeEnd\"  [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                                yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [style]=\"{'min-width':'110px'}\" name=\"convertTimeStart\" ></p-calendar>\r\n                      <!--</div>\r\n                        <div class=\"ui-g-2 padding-zero txt-center\">至</div>-->\r\n                        至\r\n                        <!--<div class=\"ui-g-5 padding-zero\">-->\r\n                            <p-calendar [(ngModel)]=\"convertTimeEnd\" [minDate]=\"convertTimeStart\"  [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\" [yearNavigator]=\"true\"\r\n                                yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" [style]=\"{'min-width':'110px'}\" name=\"convertTimeEnd\"></p-calendar>\r\n                        <!--</div>-->\r\n                    </div>\r\n                    <div class=\"ui-g-3 tit\">授信金额(元):</div>\r\n                    <div class=\"ui-g-3\">\r\n                        <input pInputText [(ngModel)]=\"transformQueryBean.loanAmt\">\r\n                    </div>\r\n               </div>\r\n               <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-3 tit\">欠款余额(元):</div>\r\n                <div class=\"ui-g-3\">\r\n                    <input pInputText [(ngModel)]=\"transformQueryBean.loanBalance\">\r\n                </div>\r\n                <div class=\"ui-g-3 tit\">转化次数:</div>\r\n                <div class=\"ui-g-3\">\r\n                    <input pInputText [(ngModel)]=\"transformQueryBean.convertFrequency\">\r\n                </div>\r\n               </div>\r\n               <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-3 tit\">转化对象:</div>\r\n                    <div class=\"ui-g-3\">\r\n                        <p-dropdown [options]=\"convertObjectOptions\" [(ngModel)]=\"transformQueryBean.convertObject\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"ui-g-3 tit\">转化成效率:</div>\r\n                    <div class=\"ui-g-3\">\r\n                        <p-dropdown  [options]=\"convertEffectRatioOptions\" [(ngModel)]=\"transformQueryBean.convertEffectRatio\"></p-dropdown>\r\n                    </div>\r\n               </div>\r\n               <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-3 tit\">是否调整担保方式:</div>\r\n                    <div class=\"ui-g-3\">\r\n                        <p-dropdown  [options]=\"adjustmentGuaranteeModeOptions\" [(ngModel)]=\"transformQueryBean.adjustmentGuaranteeMode\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"ui-g-3 tit\">是否调整担保人:</div>\r\n                    <div class=\"ui-g-3\">\r\n                        <p-dropdown  [options]=\"adjustmentGuaranteeNameOptions\" [(ngModel)]=\"transformQueryBean.adjustmentGuaranteeName\"></p-dropdown>\r\n                    </div>\r\n               </div>\r\n               <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-3 tit\">转化前客户名称:</div>\r\n                    <div class=\"ui-g-3\">\r\n                        <input pInputText [(ngModel)]=\"transformQueryBean.originalCustName\">\r\n                    </div>\r\n                    <div class=\"ui-g-3 tit\">机构名称:</div>\r\n                    <div class=\"ui-g-3\">\r\n                        <div class=\"queryinputbtn\">\r\n                            <input class=\"queryinputOrg\" type=\"text\" [(ngModel)]=\"treeOrgName\" pInputText readonly/>\r\n                            <div class=\"clickspan\">\r\n                                <a (click)=\"perTreeShow()\" class=\"a-hand\">\r\n                                    <span>...</span>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n               </div>\r\n               <div class=\"layout ui-g-12\">\r\n                    <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n                        <div class=\"filter-div\">\r\n                        <div class=\"ui-grid-row form_item\" style=\"margin-bottom:0px\">\r\n                            <div class=\"ui-grid-col-4 ui-md-offset-4\" style=\"text-align: center;\">\r\n                            <div style=\"width: 90px;display: inline-block;\">\r\n                                <div class=\"ui-btn1-div\">\r\n                                <p class=\"place-div first\"></p>\r\n                                <p class=\"place-div last\"></p>\r\n                                <button pButton type=\"button\" label=\"查询\" (click)=\"queryFirst()\"></button>\r\n                                </div>\r\n                            </div>\r\n                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n                            <div style=\"width: 90px;display: inline-block;\">\r\n                                <div class=\"ui-btn1-div\">\r\n                                <p class=\"place-div first\"></p>\r\n                                <p class=\"place-div last\"></p>\r\n                                <button pButton type=\"button\" label=\"重置\" (click)=\"resetQuery()\"></button>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n               <div class=\"button-alls\">\r\n                  <div class=\"button-lefts\">\r\n                      <button  pButton style=\"background:#fec61e;\" label=\"下载\" (click)=\"download()\"></button>\r\n                  </div>\r\n                  <div class=\"button-rights\">\r\n                      <button  pButton  style=\"background:#fec61e;\" label=\"选择字段\" (click)=\"chooseThis()\"></button>\r\n                 </div>\r\n               </div>\r\n               <div class=\"ui-g-12\">\r\n                    <div class=\"table\">\r\n                      <p-dataTable [emptyMessage]=\"tabMesg\" [value]=\"dataTable\" [scrollable]=\"true\" [style]=\"{'text-align':'center'}\" scrollHeight=\"550px\" >\r\n                        <p-column  header='序号' [style]=\"{'width':'60px'}\">\r\n                          <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                            <span>{{ri+1}}</span>\r\n                          </ng-template>\r\n                        </p-column>\r\n                        <p-column field=\"tranSeqNo\" header='任务流水号' [style]=\"{'width':'130px'}\"></p-column>\r\n                        <p-column field=\"custNo\" header='客户号' [style]=\"{'width':'115px'}\"></p-column>\r\n                        <p-column field=\"custName\" header='客户名称' [style]=\"{'width':'85px'}\"></p-column>\r\n                        <p-column field=\"productName\" header='产品名称' [style]=\"{'width':'85px'}\"></p-column>\r\n                        <p-column field=\"contractNo\" header='合同编号/信用卡号' [style]=\"{'width':'115px'}\"></p-column>\r\n                        <p-column field=\"convertObject\" header='转化对象' [style]=\"{'width':'115px'}\">\r\n                            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                                <span>{{col.convertObject|codeValuePie:convertObjectOptions}}</span>\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <p-column field=\"loanAmt\" header='授信金额(元)' [style]=\"{'width':'110px'}\">\r\n                            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                                <span>{{(col.loanAmt/1)|number:'1.2-2'}}</span>\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <p-column field=\"convertEffectRatio\" header='转化成效率' [style]=\"{'width':'100px'}\">\r\n                            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                                <span>{{col.convertEffectRatio|codeValuePie:convertEffectRatioOptions}}</span>\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <p-column field=\"conversionTime\" header='转化日期' [style]=\"{'width':'100px'}\"></p-column>\r\n                        <p-column field=\"tellerName\" header='经办人' [style]=\"{'width':'100px'}\"></p-column>\r\n                        <p-column field=\"masterContactNo\" header='主联系人工号' [style]=\"{'width':'100px'}\"></p-column>\r\n                        <p-column field=\"masterContactName\" header='主联系人名称' [style]=\"{'width':'120px'}\"> </p-column>\r\n                        <p-column field=\"ownerDeptId\" header='所属部门' [style]=\"{'width':'120px'}\"> </p-column>\r\n                        <p-column field=\"org\" header='所属支行' [style]=\"{'width':'120px'}\"></p-column>\r\n                        <p-column field=\"branch\" header='所属分行' [style]=\"{'width':'120px'}\"></p-column>\r\n                        <p-column field=\"branchNo\" header='机构码' [style]=\"{'width':'90px'}\"> </p-column>\r\n                        <p-column field={{item.value}} header={{item.label}} [style]=\"{'width':'160px'}\" *ngFor=\"let item of listItems\">\r\n                            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\" *ngIf=\"item.value == 'orproductName'\">\r\n                                <span>{{col.orproductName | codeValuePie: orproductNames}}</span>\r\n                            </ng-template>\r\n                        </p-column>\r\n                      </p-dataTable>\r\n                    </div>\r\n                    <div class=\"ui-g-12\" style=\"margin-top:15px;\">\r\n                    <p-paginator [first]=\"first\" rows=\"{{transformQueryBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n                      (onPageChange)=\"paginate($event)\"></p-paginator>\r\n                    </div>\r\n                  </div>\r\n          </div>\r\n       </div>\r\n       \r\n       \r\n       <!-- 人员 -->\r\n       <p-dialog *ngIf=\"personPage\" [(visible)]=\"personPage\" modal=\"modal\" width=\"900\" [responsive]=\"true\" [positionTop]=10>\r\n           <app-query-user-list (outValue)=\"perInfor($event)\" [in-value]=\"parent_value\"></app-query-user-list>\r\n       </p-dialog>\r\n       <!-- 提示 -->\r\n       <p-growl [value]=\"msgs\"></p-growl>\r\n       <!-- 机构 -->\r\n       <p-dialog *ngIf=\"orgTreePage\" header=\"机构查询\" [(visible)]=\"orgTreePage\" modal=\"modal\" width=\"1400\" height=\"800\" [responsive]=\"true\" [positionTop]=10>\r\n           <org-tree-zhdk-component (outValue)=\"treeCall($event)\"></org-tree-zhdk-component>\r\n       </p-dialog>\r\n       \r\n       <!-- 选择字段 -->\r\n       <p-dialog *ngIf=\"transformPage\" header=\"选择字段\" [(visible)]=\"transformPage\" modal=\"true\" width=\"900\" [responsive]=\"true\" [positionTop]=10\r\n           (onHide)=\"closeThis()\">\r\n           <p-header>\r\n               {{transformHeader}}\r\n           </p-header>\r\n           <div class=\"ui-g-12\">\r\n               <p-checkbox class=\"ui-g-12\" binary=\"true\" label=\"全选\" (click)=\"checkAll()\" [(ngModel)]=\"isAll\"></p-checkbox>\r\n               <p-checkbox class=\"ui-g-4\" binary=\"true\" label=\"{{item.label}}\" *ngFor=\"let item of transformTitle\" [(ngModel)]=\"item.isCheck\"\r\n                   (click)=\"doSelect(item)\"></p-checkbox>\r\n           </div>\r\n           <div class=\"ui-g-12 btn_save\">\r\n               <button pButton type=\"button\" label=\"保存\" (click)=\"saveAdmin()\"></button>\r\n               <button pButton type=\"button\" label=\"重置\" (click)=\"reset()\"></button>\r\n           </div>\r\n       </p-dialog>\r\n       \r\n       \r\n       <!-- 选择产品 -->\r\n       <p-dialog header=\"选择产品\" *ngIf=\"selectProductDisplay\" [(visible)]=\"selectProductDisplay\" (onHide)=\"closeSetting1()\" modal=\"true\"\r\n       class=\"cardStatusAdjustmentProf\">\r\n       <select-product-component *ngIf=\"selectProductDisplay\" [isCatelog]=\"isCatelog\" (outValue)=\"productCall($event)\"></select-product-component>\r\n       </p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/transform-statistics-query/transform-statistics-query.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/transform-statistics-query/transform-statistics-query.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.overdue_query .tit {\n  text-align: right;\n  line-height: 24px; }\n.overdue_query .calendar_inline {\n  display: flex;\n  align-items: center; }\n.overdue_query .queryinputbtn {\n  width: 100%;\n  float: left;\n  display: flex; }\n.overdue_query .queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n.overdue_query .queryinputbtn .clickspan {\n    width: 14%;\n    height: 23px;\n    cursor: pointer; }\n.overdue_query .groupNumStyle {\n  color: #19b0c8; }\n.overdue_query .table {\n  border-top: 1px solid #9e9d9d;\n  padding-top: 5px;\n  margin-bottom: 20px; }\n.btn {\n  text-align: center; }\n.btn .queryBtn,\n  .btn .resetBtn {\n    width: 100px;\n    margin: 30px; }\n:host/deep/ .order-query .query-criteria .ui-dropdown {\n  width: 50% !important; }\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n/*\r\n  *日历组件的样式修改开始\r\n  */\n:host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important; }\n:host/deep/ .ui-datepicker select.ui-datepicker-month {\n  width: 40%;\n  font-size: 16px !important; }\n:host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n/*\r\n  *日历组件的样式修改结束\r\n  */\n.requireLabel {\n  margin-left: 150px; }\n.ui_re {\n  width: 0px;\n  height: 0px;\n  float: left;\n  position: relative; }\n.textAligin {\n  text-align: right;\n  line-height: 25px; }\n.button-alls {\n  width: 100%; }\n.button-rights {\n  float: right; }\n.button-lefts {\n  float: left; }\n.table,\n.btn_save {\n  text-align: center; }\n.center {\n  text-align: center; }\n.padding-zero {\n  padding: 0; }\n.txt-center {\n  text-align: center; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL3RyYW5zZm9ybS1zdGF0aXN0aWNzLXF1ZXJ5L3RyYW5zZm9ybS1zdGF0aXN0aWNzLXF1ZXJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy90emIvdHJhbnNmb3JtLXN0YXRpc3RpY3MtcXVlcnkvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcdHJhbnNmb3JtLXN0YXRpc3RpY3MtcXVlcnlcXHRyYW5zZm9ybS1zdGF0aXN0aWNzLXF1ZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUVRLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtBQUh6QjtFQU1RLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtBQVAzQjtFQVVRLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYSxFQUFBO0FBWnJCO0lBY1ksa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsMEJBQTBCLEVBQUE7QUFqQnRDO0lBb0JZLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZSxFQUFBO0FBdEIzQjtFQTBCUSxjQUFjLEVBQUE7QUExQnRCO0VBOEJRLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUFJekI7RUFDSSxrQkFBa0IsRUFBQTtBQUR0Qjs7SUFJUSxZQUFZO0lBQ1osWUFBWSxFQUFBO0FBSXBCO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxxQkFBcUIsRUFBQTtBQUV2Qjs7R0RQQztBQ1dEO0VBQ0UsVUFBUztFQUNULDBCQUEwQixFQUFBO0FBRzVCO0VBQ0MsVUFBUztFQUNULDBCQUEwQixFQUFBO0FBRzNCO0VBQ0MsY0FBYSxFQUFBO0FBRWQ7O0dEVkM7QUNjRDtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7QUFHdEI7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUFFckI7RUFDSSxXQUFVLEVBQUE7QUFFZDtFQUNJLFlBQVksRUFBQTtBQUVoQjtFQUNFLFdBQVcsRUFBQTtBQUdiOztFQUVJLGtCQUFrQixFQUFBO0FBRXRCO0VBQ0Usa0JBQWtCLEVBQUE7QUFFdEI7RUFDSSxVQUFVLEVBQUE7QUFHZDtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL3RyYW5zZm9ybS1zdGF0aXN0aWNzLXF1ZXJ5L3RyYW5zZm9ybS1zdGF0aXN0aWNzLXF1ZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLm92ZXJkdWVfcXVlcnkgLnRpdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMjRweDsgfVxuXG4ub3ZlcmR1ZV9xdWVyeSAuY2FsZW5kYXJfaW5saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4ub3ZlcmR1ZV9xdWVyeSAucXVlcnlpbnB1dGJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogZmxleDsgfVxuICAub3ZlcmR1ZV9xdWVyeSAucXVlcnlpbnB1dGJ0biAucXVlcnlpbnB1dE9yZyB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xuICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDY5cHggIWltcG9ydGFudDsgfVxuICAub3ZlcmR1ZV9xdWVyeSAucXVlcnlpbnB1dGJ0biAuY2xpY2tzcGFuIHtcbiAgICB3aWR0aDogMTQlO1xuICAgIGhlaWdodDogMjNweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLm92ZXJkdWVfcXVlcnkgLmdyb3VwTnVtU3R5bGUge1xuICBjb2xvcjogIzE5YjBjODsgfVxuXG4ub3ZlcmR1ZV9xdWVyeSAudGFibGUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzllOWQ5ZDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuXG4uYnRuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5idG4gLnF1ZXJ5QnRuLFxuICAuYnRuIC5yZXNldEJ0biB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbjogMzBweDsgfVxuXG46aG9zdC9kZWVwLyAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIC51aS1kcm9wZG93biB7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDsgfVxuXG46aG9zdC9kZWVwLyAudWktY2VsbC1kYXRhIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkOyB9XG5cbi8qXHJcbiAgKuaXpeWOhue7hOS7tueahOagt+W8j+S/ruaUueW8gOWni1xyXG4gICovXG46aG9zdC9kZWVwLyAudWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci15ZWFyIHtcbiAgd2lkdGg6IDUwJTtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7IH1cblxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXItbW9udGgge1xuICB3aWR0aDogNDAlO1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDsgfVxuXG46aG9zdC9kZWVwLyAudWktYnV0dG9uLnVpLWJ1dHRvbi1zZWNvbmRhcnkudWktc3RhdGUtZGVmYXVsdCB7XG4gIGNvbG9yOiAjZmZmZmZmOyB9XG5cbi8qXHJcbiAgKuaXpeWOhue7hOS7tueahOagt+W8j+S/ruaUuee7k+adn1xyXG4gICovXG4ucmVxdWlyZUxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4OyB9XG5cbi51aV9yZSB7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi50ZXh0QWxpZ2luIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4OyB9XG5cbi5idXR0b24tYWxscyB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5idXR0b24tcmlnaHRzIHtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbi5idXR0b24tbGVmdHMge1xuICBmbG9hdDogbGVmdDsgfVxuXG4udGFibGUsXG4uYnRuX3NhdmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4ucGFkZGluZy16ZXJvIHtcbiAgcGFkZGluZzogMDsgfVxuXG4udHh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuIiwiLy/orqLljZXmn6Xor6JcclxuLm92ZXJkdWVfcXVlcnkge1xyXG4gICAgLnRpdCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcbiAgICAuY2FsZW5kYXJfaW5saW5lIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAucXVlcnlpbnB1dGJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAucXVlcnlpbnB1dE9yZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA2OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbGlja3NwYW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTQlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZ3JvdXBOdW1TdHlsZSB7XHJcbiAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICB9XHJcbiAgICAvL+afpeivoue7k+aenFxyXG4gICAgLnRhYmxlIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzllOWQ5ZDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgLmJ0biB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLnF1ZXJ5QnRuLFxyXG4gICAgICAucmVzZXRCdG4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gIH1cclxuICA6aG9zdC9kZWVwLyAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIC51aS1kcm9wZG93bntcclxuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLy/ooajmoLzlrZfmr43jgIHmlbDlrZfoh6rliqjmjaLooYxcclxuICA6aG9zdC9kZWVwLyAudWktY2VsbC1kYXRhe1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIH1cclxuICAvKlxyXG4gICrml6Xljobnu4Tku7bnmoTmoLflvI/kv67mlLnlvIDlp4tcclxuICAqL1xyXG4gIC8v6YCJ5oup5bm05Lu9XHJcbiAgOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXIteWVhcntcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvL+mAieaLqeaciOS7vVxyXG4gIDpob3N0L2RlZXAvIC51aS1kYXRlcGlja2VyIHNlbGVjdC51aS1kYXRlcGlja2VyLW1vbnRoe1xyXG4gICB3aWR0aDo0MCU7XHJcbiAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvL+a4heepuuOAgeS7iuWkqeS4pOS4quaMiemSrueahOWtl+S9k+minOiJslxyXG4gIDpob3N0L2RlZXAvIC51aS1idXR0b24udWktYnV0dG9uLXNlY29uZGFyeS51aS1zdGF0ZS1kZWZhdWx0e1xyXG4gICBjb2xvcjojZmZmZmZmO1xyXG4gIH1cclxuICAvKlxyXG4gICrml6Xljobnu4Tku7bnmoTmoLflvI/kv67mlLnnu5PmnZ9cclxuICAqL1xyXG4gIFxyXG4gIC5yZXF1aXJlTGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnVpX3JlIHtcclxuICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZXh0QWxpZ2luIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICAuYnV0dG9uLWFsbHN7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgfVxyXG4gIC5idXR0b24tcmlnaHRze1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIC5idXR0b24tbGVmdHN7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuICAudGFibGUsXHJcbiAgLmJ0bl9zYXZlIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucGFkZGluZy16ZXJvIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi50eHQtY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/transform-statistics-query/transform-statistics-query.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/transform-statistics-query/transform-statistics-query.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TransformStatisticsQueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformStatisticsQueryComponent", function() { return TransformStatisticsQueryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _bean_transform_qry_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/transform-qry-bean */ "./src/app/pages/tzb/transform-statistics-query/bean/transform-qry-bean.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_transform_query_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http/transform-query.http.service */ "./src/app/pages/tzb/transform-statistics-query/http/transform-query.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransformStatisticsQueryComponent = /** @class */ (function () {
    function TransformStatisticsQueryComponent(commfunc, httpService, router) {
        this.commfunc = commfunc;
        this.httpService = httpService;
        this.router = router;
        this.ch = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.tabMesg = _uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"]; //表格中无数据时显示的内容
        this.msgs = [];
        this.first = 0;
        this.dataTable = [];
        this.pageSize = 10;
        this.pageNum = 1;
        this.transformQueryBean = new _bean_transform_qry_bean__WEBPACK_IMPORTED_MODULE_2__["TransformQueryBean"]();
        this.personPage = false;
        this.orgTreePage = false;
        this.convertTimeStart = null; //转化时间开始
        this.convertTimeEnd = null; //结束时间
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.operatingLevel = ''; //机构级别
        this.convertObjectOptions = []; //转化对象
        this.convertEffectRatioOptions = []; //转化成效率
        this.question = []; //是否
        this.selectProductDisplay = false; //弹出框
        this.isCatelog = true;
        this.transformTitle = [
            {
                label: '起贷日期',
                orderCode: 4,
                value: 'loanDateStart',
                isCheck: false,
            },
            {
                label: '止贷日期',
                orderCode: 5,
                value: 'loanDateEnd',
                isCheck: false,
            },
            {
                label: '欠款余额',
                orderCode: 6,
                value: 'loanBalance',
                isCheck: false,
            },
            {
                label: '主担保方式',
                orderCode: 7,
                value: 'guaranteeMode',
                isCheck: false,
            },
            {
                label: '担保人',
                orderCode: 8,
                value: 'guaranteeName',
                isCheck: false,
            },
            {
                label: '贷款利率',
                orderCode: 9,
                value: 'rate',
                isCheck: false,
            },
            {
                label: '利率优惠',
                orderCode: 10,
                value: 'rateFavourable',
                isCheck: false,
            },
            {
                label: '以贷还贷',
                orderCode: 11,
                value: 'isLoanRepayment',
                isCheck: false,
            },
            {
                label: '免息',
                orderCode: 12,
                value: 'isInterestFree',
                isCheck: false,
            },
            {
                label: '还款方式',
                orderCode: 13,
                value: 'paymentWay',
                isCheck: false,
            },
            {
                label: '分期还款计划生成方式',
                orderCode: 14,
                value: 'repaymentPlanGenerationMethod',
                isCheck: false,
            },
            {
                label: '转化次数',
                orderCode: 15,
                value: 'convertFrequency',
                isCheck: false,
            },
            {
                label: '首次转化日期',
                orderCode: 16,
                value: 'firstConversionTime',
                isCheck: false,
            },
            {
                label: '上笔转化合同编号',
                orderCode: 17,
                value: 'lastConvertContractNo',
                isCheck: false,
            },
            {
                label: '上笔转化金额',
                orderCode: 18,
                value: 'lastConvertContractAmount',
                isCheck: false,
            },
            // {
            //     label: '上笔转化余额',
            //     orderCode: 19,
            //     value: 'lastConvertContractBalance',
            //     isCheck: false,
            // },
            {
                label: '上笔转化日期',
                orderCode: 20,
                value: 'lastLoanDateStart',
                isCheck: false,
            },
            {
                label: '调整担保方式',
                orderCode: 21,
                value: 'adjustmentGuaranteeMode',
                isCheck: false,
            },
            {
                label: '调整担保人',
                orderCode: 22,
                value: 'adjustmentGuaranteeName',
                isCheck: false,
            },
            {
                label: '原客户号',
                orderCode: 23,
                value: 'originalCustNo',
                isCheck: false,
            },
            {
                label: '原客户名称',
                orderCode: 24,
                value: 'originalCustName',
                isCheck: false,
            },
            {
                label: '原合同编号',
                orderCode: 25,
                value: 'originalContractNo',
                isCheck: false,
            },
            {
                label: '原业务品种',
                orderCode: 26,
                value: 'orproductName',
                isCheck: false,
            },
            {
                label: '原贷款金额',
                orderCode: 27,
                value: 'originalLoanAmt',
                isCheck: false,
            },
            {
                label: '原担保方式',
                orderCode: 28,
                value: 'originalguaranteeMode',
                isCheck: false,
            },
            {
                label: '原担保人',
                orderCode: 29,
                value: 'originalguaranteeName',
                isCheck: false,
            },
            {
                label: '原经办人',
                orderCode: 30,
                value: 'originalTellerName',
                isCheck: false,
            },
            {
                label: '第一责任审批人',
                orderCode: 31,
                value: 'firstApprover',
                isCheck: false,
            },
        ];
        this.arrTitle = []; //选择字段
        this.isAll = false;
        this.transformPage = false; //选择字段
        this.listItems = []; //表格新增的西段
        this.adjustmentGuaranteeModeOptions = []; //是否调整担保方式
        this.adjustmentGuaranteeNameOptions = []; //是否调整担保人
        this.guaranteeModeOptions = []; //主担保方式
        this.repaymentPlanGenerationMethodOptions = []; //分期还款计划生成方式
        this.paymentWayOptions = []; //还款方式
        this.orproductNames = []; //原业务品种
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.user2 = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        //  debugger;
        //    console.log('this.user================='+JSON.stringify(this.user));
        //    console.log('this.user2================='+JSON.stringify(this.user2));
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
        if (this.user.extParam) {
            this.extParam = this.user.extParam;
        }
        if (this.extParam.managePermission == 'N') {
            this.personName = this.userName;
            this.personId = this.userId;
        }
        else {
            this.personName = '';
            this.personId = '';
        }
        if (this.extParam.operatingLevel != '') {
            this.operatingLevel = this.extParam.operatingLevel;
            if (this.operatingLevel == 'GROUP') { //GROUP-集团 0000      
                this.treeOrgId = '';
                this.treeOrgName = '集团';
                this.personName = '';
                this.personId = '';
            }
            else if (this.operatingLevel == 'GENERAL_BANK') { //GENERAL_BANK--总行
                this.treeOrgId = '';
                this.treeOrgName = '集团';
                this.personName = '';
                this.personId = '';
            }
            else if (this.operatingLevel == 'GENERAL_BANK_DT') { //GENERAL_BANK_DT--总行管理部门                        
                this.treeOrgId = '';
                this.treeOrgName = '集团';
                this.personName = '';
                this.personId = '';
            }
            else if (this.operatingLevel == 'BRANCH') { //BRANCH-分行/区域
                this.treeOrgId = '';
                this.treeOrgName = this.user2.orgName;
                this.personName = '';
                this.personId = '';
            }
            else if (this.operatingLevel == 'BRANCH_DT') { //BRANCH_DT-分行/区域管理部门
                this.treeOrgId = '';
                this.treeOrgName = this.user2.orgName;
                this.personName = '';
                this.personId = '';
            }
            else if (this.operatingLevel == 'DISTRICT') { //DISTRICT-片区
                this.treeOrgId = '';
                this.treeOrgName = this.user2.orgName;
                this.personName = '';
                this.personId = '';
            }
            else if (this.operatingLevel == 'DISTRICT_DT') { //DISTRICT_DT-片区部门
                this.treeOrgId = '';
                this.treeOrgName = this.user2.orgName;
                this.personName = '';
                this.personId = '';
            }
            else if (this.operatingLevel == 'SUB_BRANCH') { //SUB_BRANCH-支行
                this.treeOrgId = this.user.orgId;
                this.treeOrgName = this.user2.orgName;
                this.personId = '';
            }
            else if (this.operatingLevel == 'SUB_BRANCH_DT') { //SUB_BRANCH_DT-支行部门
                this.treeOrgId = this.user.orgId;
                this.treeOrgName = this.user2.orgName;
                this.personId = '';
            }
            else if (this.operatingLevel == 'TEAM') { //TEAM-团队
                this.treeOrgId = this.user.orgId;
                this.treeOrgName = this.user2.orgName;
                this.personId = '';
            }
        }
        // if(this.user2.orgList){
        //     let target = this.user2.orgList.filter(x => x.orgId == this.orgId)
        //     if (target && target.length) {
        //         let t = target[0];
        //         if (t.operatingLevel != '') {
        //             this.operatingLevel = t.operatingLevel;
        //             if(this.operatingLevel == 'GROUP'){                  //GROUP-集团 0000      
        //                 this.treeOrgId = '';                                 
        //                 this.treeOrgName = '集团'; 
        //                 this.personName = '';
        //                 this.personId = '';     
        //             }else if(this.operatingLevel == 'GENERAL_BANK'){     //GENERAL_BANK--总行
        //                 this.treeOrgId = '';                                 
        //                 this.treeOrgName = '集团';  
        //                 this.personName = '';
        //                 this.personId = '';                   
        //             }else if(this.operatingLevel == 'GENERAL_BANK_DT'){  //GENERAL_BANK_DT--总行管理部门                        
        //                 this.treeOrgId = '';             
        //                 this.treeOrgName = '集团';  
        //                 this.personName = '';
        //                 this.personId = '';                   
        //             }else if(this.operatingLevel == 'BRANCH'){           //BRANCH-分行/区域
        //                 this.treeOrgId = '';             
        //                 this.treeOrgName = this.user2.orgName; 
        //                 this.personName = '';
        //                 this.personId = '';        
        //             }else if(this.operatingLevel == 'BRANCH_DT'){        //BRANCH_DT-分行/区域管理部门
        //                 this.treeOrgId =  '';             
        //                 this.treeOrgName = this.user2.orgName;   
        //                 this.personName = '';
        //                 this.personId = '';      
        //             }else if(this.operatingLevel == 'DISTRICT'){         //DISTRICT-片区
        //                 this.treeOrgId = '';             
        //                 this.treeOrgName = this.user2.orgName;   
        //                 this.personName = '';
        //                 this.personId = '';      
        //             }else if(this.operatingLevel == 'DISTRICT_DT'){      //DISTRICT_DT-片区部门
        //                 this.treeOrgId = '';             
        //                 this.treeOrgName = this.user2.orgName;   
        //                 this.personName = '';
        //                 this.personId = '';           
        //             }else if(this.operatingLevel == 'SUB_BRANCH'){       //SUB_BRANCH-支行
        //                 this.treeOrgId = this.user.orgId;             
        //                 this.treeOrgName = this.user2.orgName;
        //                 this.personId = '';
        //             }else if(this.operatingLevel == 'SUB_BRANCH_DT'){    //SUB_BRANCH_DT-支行部门
        //                 this.treeOrgId = this.user.orgId;             
        //                 this.treeOrgName = this.user2.orgName;    
        //                 this.personId = '';     
        //             }else if(this.operatingLevel == 'TEAM'){             //TEAM-团队
        //                 this.treeOrgId = this.user.orgId;             
        //                 this.treeOrgName = this.user2.orgName;   
        //                 this.personId = '';      
        //             }
        //         }
        //     }
        // }
    }
    TransformStatisticsQueryComponent.prototype.ngOnInit = function () {
        // debugger;
        this.codeValues();
        this.convertObjectOptions = this.code['convertObjectTransform']; //转话对象
        this.convertEffectRatioOptions = this.code['convertEffectRatioTransform']; //转化成效率
        this.question = this.code['transformQuestion']; //0是  1 否
        this.adjustmentGuaranteeModeOptions = this.code['AdjustmentGuaranteeModeTransform']; //是否调整担保方式 1是 0否
        this.adjustmentGuaranteeNameOptions = this.code['AdjustmentGuaranteeNameTransform']; //是否调整担保人   1是 0否
        this.guaranteeModeOptions = this.code['guaranteeModeTransform']; //主担保方式
        this.repaymentPlanGenerationMethodOptions = this.code['RepaymentPlanGenerationMethodTransform']; //分期还款计划生成方式
        this.paymentWayOptions = this.code['PaymentWayTransform']; //还款方式
        this.orproductNames = this.code['OrproductName'];
        this.selectChoose(); //查询选择字段
        this.transformTitle.sort(function (a, b) {
            return a.orderCode - b.orderCode;
        });
        // this.transformQueryBean.pageNum = 1;
        // this.transformQueryBean.pageSize = 10;
        // console.log("aaaa===="+JSON.stringify(this.extParam.managePermission));
        // if (this.extParam.managePermission == 'N') {
        //     this.personName = this.userName;
        //     this.personId = this.userId;
        // }else {
        //     this.personName = '';
        //     this.personId = '';
        // }
        this.queryFirst();
    };
    //码值
    TransformStatisticsQueryComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //单选
    TransformStatisticsQueryComponent.prototype.doSelect = function (data) {
        var _this = this;
        var cellThis = true;
        if (data.isCheck) {
            this.arrTitle.push(data);
            this.transformTitle.forEach(function (item) {
                cellThis = item.isCheck && cellThis;
            });
        }
        else {
            this.arrTitle.forEach(function (item, i) {
                if (item.value == data.value) {
                    _this.arrTitle.splice(i, 1);
                    return;
                }
            });
            cellThis = false;
        }
        this.arrTitle.sort(function (a, b) {
            return a.orderCode - b.orderCode;
        });
        this.isAll = cellThis;
    };
    //全选
    TransformStatisticsQueryComponent.prototype.checkAll = function () {
        var _this = this;
        var isTrue = this.isAll;
        this.arrTitle = [];
        this.transformTitle.forEach(function (item) {
            item['isCheck'] = isTrue;
            if (isTrue) {
                _this.arrTitle.push(item);
            }
        });
        this.arrTitle.sort(function (a, b) {
            return a.orderCode - b.orderCode;
        });
    };
    //选择字段
    TransformStatisticsQueryComponent.prototype.chooseThis = function () {
        this.transformPage = true;
    };
    //关闭选择字段
    TransformStatisticsQueryComponent.prototype.closeThis = function () {
        this.transformPage = false;
        for (var _i = 0, _a = this.arrTitle; _i < _a.length; _i++) {
            var item = _a[_i];
            item.isCheck = false;
        }
        this.arrTitle = [];
        this.selectChoose();
    };
    //字段重置
    TransformStatisticsQueryComponent.prototype.reset = function () {
        for (var _i = 0, _a = this.transformTitle; _i < _a.length; _i++) {
            var item = _a[_i];
            item.isCheck = false;
        }
        this.isAll = false;
    };
    //查询选择字段
    TransformStatisticsQueryComponent.prototype.selectChoose = function () {
        var _this = this;
        var param = {
            listShowsIdType: '5',
            listShowsIdModule: '05',
            createOrgName: this.orgName,
            createOrg: this.orgId,
            createdByUserLogin: this.userId,
            createdByUserLoginName: this.userName,
        };
        this.httpService.selectUserListShow(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var arrList = JSON.parse(data.exploreConditionObject);
                _this.listItems = arrList;
                for (var _i = 0, arrList_1 = arrList; _i < arrList_1.length; _i++) {
                    var temp = arrList_1[_i];
                    for (var _a = 0, _b = _this.transformTitle; _a < _b.length; _a++) {
                        var item = _b[_a];
                        if (temp.value == item.value) {
                            item.isCheck = true;
                            _this.arrTitle.push(item);
                            break;
                        }
                    }
                }
                var flag_1 = true;
                _this.transformTitle.forEach(function (element) {
                    if (!element.isCheck) {
                        flag_1 = false;
                    }
                });
                _this.isAll = flag_1;
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //新增选择字段
    TransformStatisticsQueryComponent.prototype.saveAdmin = function () {
        var _this = this;
        this.transformPage = false;
        var arr = [];
        for (var _i = 0, _a = this.transformTitle; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.isCheck && item.isCheck == true) {
                arr.push(item);
            }
        }
        var param = {
            listShowsIdType: '5',
            listShowsIdModule: '05',
            createOrg: this.orgId,
            createOrgName: this.orgName,
            createdByUserLogin: this.userId,
            createdByUserLoginName: this.userName,
            exploreConditionObject: JSON.stringify(arr)
        };
        this.httpService.addUserListShow(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: '保存成功!' }];
                _this.listItems = arr;
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    TransformStatisticsQueryComponent.prototype.perShow = function (num) {
        if (this.extParam.managePermission == 'N') {
            this.msgs = [{ severity: 'error', summary: '提示', detail: '当前为客户经理,主联系人不可修改!' }];
            return;
        }
        this.parent_value = this.orgId;
        this.personPage = true;
    };
    TransformStatisticsQueryComponent.prototype.perInfor = function (item) {
        this.personPage = false;
        this.personName = item[0].tellerName;
        this.personId = item[0].tellerId;
    };
    TransformStatisticsQueryComponent.prototype.treeCall = function (param) {
        debugger;
        this.orgTreePage = false;
        this.treeOrgName = param.orgName;
        this.treeOrgId = param.orgId;
        this.personId = param.userId;
        this.queryFirst();
    };
    TransformStatisticsQueryComponent.prototype.perTreeShow = function () {
        this.orgTreePage = true;
    };
    TransformStatisticsQueryComponent.prototype.queryFirst = function () {
        this.transformQueryBean.pageNum = 1;
        this.transformQueryBean.pageSize = 10;
        this.first = 0;
        this.query();
    };
    //查询
    TransformStatisticsQueryComponent.prototype.query = function () {
        var _this = this;
        this.transformQueryBean.convertTimeStart = this.commfunc.transDateN(this.convertTimeStart);
        this.transformQueryBean.convertTimeEnd = this.commfunc.transDateN(this.convertTimeEnd);
        this.transformQueryBean.branchNo = this.treeOrgId;
        this.transformQueryBean.masterContactNo = this.personId;
        //debugger;
        //console.log(JSON.stringify("aaaa===="+JSON.stringify(this.transformQueryBean)));
        this.httpService.queryConvertStatisticsInfo(this.transformQueryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.convertLoanList && data.convertLoanList.length > 0) {
                    for (var _i = 0, _a = data.convertLoanList; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.rate && item.rate != '') {
                            item.rate = item.rate + '‰';
                        }
                        for (var _b = 0, _c = _this.guaranteeModeOptions; _b < _c.length; _b++) {
                            var temp = _c[_b];
                            //主担保方式
                            if (temp.value == item.guaranteeMode) {
                                item.guaranteeMode = temp.label;
                            }
                            //原担保方式
                            if (temp.value == item.originalguaranteeMode) {
                                item.originalguaranteeMode = temp.label;
                            }
                        }
                        for (var _d = 0, _e = _this.adjustmentGuaranteeModeOptions; _d < _e.length; _d++) {
                            var temp = _e[_d];
                            //利率优惠  1是 0否
                            if (temp.value == item.rateFavourable) {
                                item.rateFavourable = temp.label;
                            }
                        }
                        for (var _f = 0, _g = _this.question; _f < _g.length; _f++) {
                            var temp = _g[_f];
                            //以贷还贷  0是  1否
                            if (temp.value == item.isLoanRepayment) {
                                item.isLoanRepayment = temp.label;
                            }
                            //免息
                            if (temp.value == item.isInterestFree) {
                                item.isInterestFree = temp.label;
                            }
                        }
                        for (var _h = 0, _j = _this.repaymentPlanGenerationMethodOptions; _h < _j.length; _h++) {
                            var temp = _j[_h];
                            //分期还款计划生成方式
                            if (temp.value == item.repaymentPlanGenerationMethod) {
                                item.repaymentPlanGenerationMethod = temp.label;
                            }
                        }
                        for (var _k = 0, _l = _this.paymentWayOptions; _k < _l.length; _k++) {
                            var temp = _l[_k];
                            //还款方式
                            if (temp.value == item.paymentWay) {
                                item.paymentWay = temp.label;
                            }
                        }
                        for (var _m = 0, _o = _this.adjustmentGuaranteeModeOptions; _m < _o.length; _m++) {
                            var temp = _o[_m];
                            //是否调整担保方式
                            if (temp.value == item.adjustmentGuaranteeMode) {
                                item.adjustmentGuaranteeMode = temp.label;
                            }
                        }
                        for (var _p = 0, _q = _this.adjustmentGuaranteeNameOptions; _p < _q.length; _p++) {
                            var temp = _q[_p];
                            //是否调整担保人
                            if (temp.value == item.adjustmentGuaranteeName) {
                                item.adjustmentGuaranteeName = temp.label;
                            }
                        }
                    }
                    _this.dataTable = data.convertLoanList;
                }
                else {
                    _this.dataTable = [];
                }
                _this.total = data.total;
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //下载
    TransformStatisticsQueryComponent.prototype.download = function () {
        var _this = this;
        if (this.dataTable.length == 0) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '没有数据无法下载!' }];
            return;
        }
        var arrayList = [];
        arrayList.push({ en: 'tranSeqNo', ch: '任务流水号' }, { en: 'custNo', ch: '客户号' }, { en: 'custName', ch: '客户名称' }, { en: 'productName', ch: '产品名称' }, { en: 'contractNo', ch: '合同编号/信用卡号' }, { en: 'convertObject', ch: '转化对象' }, { en: 'loanAmt', ch: '授信金额(元)' }, { en: 'convertEffectRatio', ch: '转化成效率' }, { en: 'loanDateStart', ch: '转化时间' }, { en: 'tellerName', ch: '经办人' }, { en: 'masterContactNo', ch: '主联系人工号' }, { en: 'masterContactName', ch: '主联系人名称' }, { en: 'ownerDeptId', ch: '所属部门' }, { en: 'org', ch: '所属支行' }, { en: 'branch', ch: '所属分行' }, { en: 'branchNo', ch: '机构码' });
        for (var _i = 0, _a = this.arrTitle; _i < _a.length; _i++) {
            var item = _a[_i];
            arrayList.push({ en: item.value, ch: item.label });
        }
        this.transformQueryBean.convertLoanList = arrayList;
        this.httpService.loadConvertStatisticsInfo(this.transformQueryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.fileId = data.fileId;
                _this.fileName = data.fileName;
                9;
                _this.fileUrl = data.fileUrl;
                _this.router.navigate(["pages/tzb/custom/downloadCenter/downCenter"]);
                // open(TZB_CUS_DOWNLOAD + "?fileName=" + encodeURI(this.fileName) + "&fileUrl=" + this.fileUrl, '_blank');
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    TransformStatisticsQueryComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.transformQueryBean.pageSize = event.rows * 1;
        //当前页
        this.transformQueryBean.pageNum = event.page + 1;
        this.first = event.page * this.transformQueryBean.pageSize;
        this.query();
    };
    //查询重置
    TransformStatisticsQueryComponent.prototype.resetQuery = function () {
        this.transformQueryBean = new _bean_transform_qry_bean__WEBPACK_IMPORTED_MODULE_2__["TransformQueryBean"]();
        this.transformQueryBean.pageNum = 1;
        this.transformQueryBean.pageSize = 10;
        this.treeOrgName = '';
        this.treeOrgId = '';
        this.personName = '';
        this.personId = '';
        this.convertTimeStart = null;
        this.convertTimeEnd = null;
    };
    // 选择产品
    TransformStatisticsQueryComponent.prototype.choosePro = function () {
        this.selectProductDisplay = true;
    };
    // 关闭模态框
    TransformStatisticsQueryComponent.prototype.closeSetting1 = function () {
        this.selectProductDisplay = false;
    };
    // 选择产品回调
    TransformStatisticsQueryComponent.prototype.productCall = function (event) {
        if (event && event.length > 0) {
            this.transformQueryBean.productName = event[0].productName;
        }
        this.selectProductDisplay = false;
    };
    TransformStatisticsQueryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'transform-statistics-query',
            template: __webpack_require__(/*! ./transform-statistics-query.component.html */ "./src/app/pages/tzb/transform-statistics-query/transform-statistics-query.component.html"),
            styles: [__webpack_require__(/*! ./transform-statistics-query.component.scss */ "./src/app/pages/tzb/transform-statistics-query/transform-statistics-query.component.scss")],
            providers: [_http_transform_query_http_service__WEBPACK_IMPORTED_MODULE_5__["TransformQueryHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _http_transform_query_http_service__WEBPACK_IMPORTED_MODULE_5__["TransformQueryHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TransformStatisticsQueryComponent);
    return TransformStatisticsQueryComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/transform-statistics-query/transform-statistics-query.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tzb/transform-statistics-query/transform-statistics-query.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: TransformStatisticsQueryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformStatisticsQueryModule", function() { return TransformStatisticsQueryModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _transform_statistics_query_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transform-statistics-query.routing */ "./src/app/pages/tzb/transform-statistics-query/transform-statistics-query.routing.ts");
/* harmony import */ var _transform_statistics_query_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transform-statistics-query.component */ "./src/app/pages/tzb/transform-statistics-query/transform-statistics-query.component.ts");
/* harmony import */ var app_uisftech_common_component_org_tree_zhdk_org_tree_zhdk_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/component/org-tree-zhdk/org-tree-zhdk.component */ "./src/app/@uisftech/common/component/org-tree-zhdk/org-tree-zhdk.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TransformStatisticsQueryModule = /** @class */ (function () {
    function TransformStatisticsQueryModule() {
    }
    TransformStatisticsQueryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
                _transform_statistics_query_routing__WEBPACK_IMPORTED_MODULE_4__["TransformStatisticsQueryRouting"],
            ],
            declarations: [
                _transform_statistics_query_component__WEBPACK_IMPORTED_MODULE_5__["TransformStatisticsQueryComponent"],
                app_uisftech_common_component_org_tree_zhdk_org_tree_zhdk_component__WEBPACK_IMPORTED_MODULE_6__["OrgTreezhck"]
            ],
            providers: []
        })
    ], TransformStatisticsQueryModule);
    return TransformStatisticsQueryModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/transform-statistics-query/transform-statistics-query.routing.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/transform-statistics-query/transform-statistics-query.routing.ts ***!
  \********************************************************************************************/
/*! exports provided: TransformStatisticsQueryRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformStatisticsQueryRouting", function() { return TransformStatisticsQueryRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _transform_statistics_query_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform-statistics-query.component */ "./src/app/pages/tzb/transform-statistics-query/transform-statistics-query.component.ts");


var routes = [
    {
        path: '',
        component: _transform_statistics_query_component__WEBPACK_IMPORTED_MODULE_1__["TransformStatisticsQueryComponent"]
    }
];
var TransformStatisticsQueryRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=transform-statistics-query-transform-statistics-query-module.js.map